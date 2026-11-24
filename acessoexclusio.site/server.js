const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3001;
const DIR = __dirname;

// --- Carregar .env (sem dependências externas) ---
(function loadEnv() {
  try {
    const envPath = path.join(DIR, '.env');
    if (!fs.existsSync(envPath)) return;
    const txt = fs.readFileSync(envPath, 'utf8');
    for (const linha of txt.split(/\r?\n/)) {
      const l = linha.trim();
      if (!l || l.startsWith('#')) continue;
      const eq = l.indexOf('=');
      if (eq === -1) continue;
      const k = l.slice(0, eq).trim();
      let v = l.slice(eq + 1).trim();
      if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
        v = v.slice(1, -1);
      }
      if (!(k in process.env)) process.env[k] = v;
    }
  } catch (_) { /* ignora */ }
})();

const DEV_MODE = process.env.DEV_MODE === '1';

// Carregar handler de consulta CPF
let consultaHandler;
try {
  consultaHandler = require('./functions/consulta').handler;
} catch (e) {
  console.warn('⚠ Aviso: Handler de consulta não carregado');
}

// Carregar handler de PIX (PixGate)
let pixHandler;
try {
  pixHandler = require('./functions/pix').handler;
} catch (e) {
  console.warn('⚠ Aviso: Handler de PIX não carregado');
}

// MIME types
const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.ttf': 'font/ttf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

const server = http.createServer(async (req, res) => {
  // Parse URL
  const parsedUrl = url.parse(req.url, true);
  let pathname = decodeURI(parsedUrl.pathname);

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Rotear API de consulta CPF
  // O app React chama /api/consulta.php — mantemos os aliases antigos também.
  if (
    pathname === '/api/consulta.php' ||
    pathname === '/api/consulta' ||
    pathname === '/functions/consulta' ||
    pathname === '/consulta'
  ) {
    try {
      const event = {
        httpMethod: req.method,
        queryStringParameters: parsedUrl.query,
        body: null
      };

      const result = await consultaHandler(event);

      // O app React (/api/consulta.php) espera os campos achatados na raiz:
      //   { nome, nascimento, mae }  — e checa `dados.nome`.
      // O handler devolve { DADOS: { nome, nome_mae, data_nascimento } }.
      // Adaptamos aqui para o formato que o front consome.
      if (pathname === '/api/consulta.php' || pathname === '/api/consulta') {
        let payload = {};
        try {
          const parsed = JSON.parse(result.body);
          const d = parsed.DADOS || parsed.data || parsed || {};
          payload = {
            cpf: d.cpf || '',
            nome: d.nome || '',
            nascimento: d.data_nascimento || d.nascimento || '',
            mae: d.nome_mae || d.mae || '',
            sexo: d.sexo || '',
            // Mantém o objeto original também, por segurança.
            DADOS: d,
          };
        } catch (_) {
          payload = { status: 'erro' };
        }
        res.writeHead(result.statusCode, result.headers);
        res.end(JSON.stringify(payload));
        return;
      }

      res.writeHead(result.statusCode, result.headers);
      res.end(result.body);
      return;
    } catch (error) {
      console.error('Erro na API de consulta:', error);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Erro interno na API' }));
      return;
    }
  }

  // Rotear API de PIX (gateway PixGate)
  // O app React chama /api/pix-widget.php?action=create-payment|check-status
  if (pathname === '/api/pix-widget.php' || pathname === '/api/pix-widget') {
    try {
      // Ler corpo (POST JSON)
      let body = '';
      await new Promise((resolve) => {
        req.on('data', (c) => { body += c; });
        req.on('end', resolve);
      });

      const event = {
        httpMethod: req.method,
        queryStringParameters: parsedUrl.query,
        body: body || null,
      };

      const result = await pixHandler(event);
      res.writeHead(result.statusCode, result.headers);
      res.end(result.body);
      return;
    } catch (error) {
      console.error('Erro na API de PIX:', error);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'erro', mensagem: 'Erro interno no PIX.' }));
      return;
    }
  }

  // Remove leading slash
  if (pathname.startsWith('/')) {
    pathname = pathname.slice(1);
  }

  // Default to index.html for root
  if (pathname === '' || pathname === '/') {
    pathname = 'index.html';
  }

  // Build file path
  let filepath = path.join(DIR, pathname);

  // Security: prevent directory traversal
  const normalizedPath = path.normalize(filepath);
  if (!normalizedPath.startsWith(DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  // É uma requisição vinda de localhost? (só então o overlay dev é injetado)
  const host = (req.headers.host || '').split(':')[0];
  const ehLocal = host === 'localhost' || host === '127.0.0.1' || host === '[::1]' || host === '';

  // Envia um HTML, injetando o overlay dev INLINE antes de </body> quando aplicável.
  // Inline (em vez de <script src>) evita qualquer problema de ordem/carregamento
  // e garante execução mesmo com a hidratação do React.
  function enviarHtml(htmlPath) {
    res.setHeader('Cache-Control', 'no-cache, must-revalidate');
    if (DEV_MODE && ehLocal) {
      fs.readFile(htmlPath, 'utf8', (e, html) => {
        if (e) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('404 Not Found');
          return;
        }
        if (!html.includes('funil-dev-inline')) {
          let overlayJs = '';
          try { overlayJs = fs.readFileSync(path.join(DIR, 'dev', 'dev-overlay.js'), 'utf8'); } catch (_) {}
          const tag = '<script id="funil-dev-inline">' + overlayJs + '</script>';
          html = html.includes('</body>')
            ? html.replace('</body>', '    ' + tag + '\n  </body>')
            : html + tag;
        }
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(html);
      });
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      fs.createReadStream(htmlPath).pipe(res);
    }
  }

  // Check if file exists
  fs.stat(filepath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback SPA: rotas do router do cliente (sem extensão) caem aqui.
      // Servimos um shell HTML e o bundle React re-roteia no navegador.
      const ext0 = path.extname(pathname);
      if (!ext0) {
        // /cadastro tem shell próprio; o resto usa o index.
        const shell = pathname === 'cadastro' ? 'cadastro.html' : 'index.html';
        const shellPath = path.join(DIR, shell);
        if (fs.existsSync(shellPath)) {
          enviarHtml(shellPath);
          return;
        }
      }
      // File not found
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    // Get MIME type
    const ext = path.extname(filepath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // HTML passa pelo injetor (dev); demais arquivos vão direto.
    if (ext === '.html') {
      enviarHtml(filepath);
      return;
    }

    // Em DEV, nada de cache: toda edição em bundles/assets aparece na hora.
    // (o overlay de dev também nunca é cacheado)
    if (DEV_MODE || pathname === 'dev-overlay.js') {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    } else {
      res.setHeader('Cache-Control', 'public, max-age=3600');
    }

    // Send file
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filepath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════╗
║      🚀 SERVIDOR RODANDO!             ║
╠════════════════════════════════════════╣
║ 🌐 http://localhost:${PORT}              ║
║ 📂 ${DIR}
║ ✅ Funil Original Disponível           ║
║ ${DEV_MODE ? '🧭 MODO DEV ON (setas de navegação)   ' : '🔒 Modo produção (sem overlay dev)     '}║
╚════════════════════════════════════════╝
  `);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Porta ${PORT} já está em uso!`);
  } else {
    console.error('Erro no servidor:', err);
  }
  process.exit(1);
});
