<?php
/**
 * Visualizar / baixar os leads capturados.
 *
 * Uso (no navegador):
 *   /api/leads-ver.php?key=SUA_CHAVE            -> mostra os leads numa tabela
 *   /api/leads-ver.php?key=SUA_CHAVE&download=1 -> baixa o leads.csv
 *   /api/leads-ver.php?key=SUA_CHAVE&format=txt -> lista só os telefones
 *
 * A chave vem de LEADS_KEY no .env (defina lá). Sem chave certa -> 404.
 */

function carregarEnv($caminho) {
    if (!is_file($caminho)) return;
    foreach (file($caminho, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $linha) {
        $l = trim($linha);
        if ($l === '' || $l[0] === '#') continue;
        $eq = strpos($l, '=');
        if ($eq === false) continue;
        $k = trim(substr($l, 0, $eq));
        $v = trim(substr($l, $eq + 1));
        if (strlen($v) >= 2 && (($v[0] === '"' && substr($v, -1) === '"') || ($v[0] === "'" && substr($v, -1) === "'"))) $v = substr($v, 1, -1);
        if (getenv($k) === false) putenv("$k=$v");
    }
}
carregarEnv(__DIR__ . '/../.env');

$CHAVE = getenv('LEADS_KEY') ?: '';
$key = $_GET['key'] ?? '';

// Sem chave configurada, ou chave errada -> 404 (não revela que existe).
if ($CHAVE === '' || !hash_equals($CHAVE, (string)$key)) {
    http_response_code(404);
    echo "404 Not Found";
    exit;
}

$arquivo = __DIR__ . '/../leads/leads.csv';
if (!is_file($arquivo)) {
    header('Content-Type: text/html; charset=utf-8');
    echo "<p>Nenhum lead capturado ainda.</p>";
    exit;
}

// Download do CSV cru.
if (!empty($_GET['download'])) {
    header('Content-Type: text/csv; charset=utf-8');
    header('Content-Disposition: attachment; filename="leads.csv"');
    readfile($arquivo);
    exit;
}

$linhas = array_filter(array_map('trim', file($arquivo)));
$total = max(0, count($linhas) - 1);

// Só telefones (um por linha) para copiar rápido.
if (($_GET['format'] ?? '') === 'txt') {
    header('Content-Type: text/plain; charset=utf-8');
    foreach (array_slice($linhas, 1) as $l) {
        $c = explode(';', $l);
        if (isset($c[2])) echo $c[2] . "\n";
    }
    exit;
}

// Tabela HTML.
header('Content-Type: text/html; charset=utf-8');
echo '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">';
echo '<title>Leads</title>';
echo '<style>body{font-family:system-ui,Arial,sans-serif;margin:16px;background:#f6f8fb;color:#111}
h1{font-size:20px}.bar{margin:10px 0}a.btn{display:inline-block;background:#0b5fff;color:#fff;text-decoration:none;padding:9px 14px;border-radius:8px;font-size:14px;margin-right:8px}
table{border-collapse:collapse;width:100%;background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.08)}
th,td{padding:8px 10px;border-bottom:1px solid #eef1f6;font-size:13px;text-align:left;white-space:nowrap}
th{background:#0b5fff;color:#fff;position:sticky;top:0}tr:nth-child(even){background:#fafbfe}
.wrap{overflow:auto;max-height:80vh}</style>';
echo '<h1>Leads capturados — ' . $total . '</h1>';
$k = htmlspecialchars($key);
echo '<div class="bar">';
echo '<a class="btn" href="?key=' . $k . '&download=1">⬇ Baixar CSV</a>';
echo '<a class="btn" href="?key=' . $k . '&format=txt">📞 Só telefones</a>';
echo '</div>';

echo '<div class="wrap"><table>';
foreach ($linhas as $idx => $l) {
    $c = explode(';', $l);
    echo '<tr>';
    $tag = $idx === 0 ? 'th' : 'td';
    foreach ($c as $celula) echo "<$tag>" . htmlspecialchars($celula) . "</$tag>";
    echo '</tr>';
}
echo '</table></div>';
