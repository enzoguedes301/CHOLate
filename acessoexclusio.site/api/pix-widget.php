<?php
/**
 * Gateway PIX (Medusa Pay) — versão PHP (HostGator / hospedagem compartilhada).
 *
 * Equivalente ao antigo functions/pix.js (Node). O front chama:
 *   POST /api/pix-widget.php?action=create-payment
 *        body: { amount (CENTAVOS), nome, email, telefone, cpf, descricao, tracking }
 *        espera: { status:"ok", id, qrCode, restante }
 *   POST /api/pix-widget.php?action=check-status
 *        body: { id | chave }
 *        espera: { status:"pago" } quando confirmado
 *
 * Medusa Pay:
 *   Base: https://api.medusapayoficial.pro/api/v1   (auth: Bearer <API_KEY>)
 *   POST {BASE}/api/pagamentos
 *        body: { clienteNome, clienteEmail, cpf, valor (REAIS), metodo:"PIX", descricao }
 *        resp: { id|venda.id, pixQrCode, pixCopiaECola, status, ... }
 *   GET  {BASE}/api/pagamentos/:id
 *        resp: { status, venda:{ status } }  — aprovado/approved/paid = pago
 *
 * Config em .env (raiz do site): MEDUSA_BASE, MEDUSA_API_KEY, MEDUSA_EMPRESA_ID.
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// -------------------------------------------------------------------------
// .env (raiz do site) — sem dependências externas.
// -------------------------------------------------------------------------
function carregarEnv($caminho) {
    if (!is_file($caminho)) return;
    foreach (file($caminho, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $linha) {
        $l = trim($linha);
        if ($l === '' || $l[0] === '#') continue;
        $eq = strpos($l, '=');
        if ($eq === false) continue;
        $k = trim(substr($l, 0, $eq));
        $v = trim(substr($l, $eq + 1));
        if (strlen($v) >= 2 && (($v[0] === '"' && substr($v, -1) === '"') || ($v[0] === "'" && substr($v, -1) === "'"))) {
            $v = substr($v, 1, -1);
        }
        if (getenv($k) === false) putenv("$k=$v");
    }
}
carregarEnv(__DIR__ . '/../.env');

$BASE    = rtrim(getenv('MEDUSA_BASE') ?: 'https://api.medusapayoficial.pro/api/v1', '/');
$API_KEY = getenv('MEDUSA_API_KEY') ?: '';
$QR_TTL  = 600; // janela (s) usada no contador do front

// -------------------------------------------------------------------------
// Helpers
// -------------------------------------------------------------------------
function responder($arr) {
    echo json_encode($arr);
    exit;
}

function lerBody() {
    $raw = file_get_contents('php://input');
    if (!$raw) return [];
    $j = json_decode($raw, true);
    return is_array($j) ? $j : [];
}

/**
 * Chamada HTTP à Medusa. Retorna [httpCode, arrayDecodificado].
 */
function medusaRequest($method, $url, $apiKey, $payload = null, $timeout = 15) {
    $headers = [
        'Accept: application/json',
        'Authorization: Bearer ' . $apiKey,
    ];
    if ($payload !== null) $headers[] = 'Content-Type: application/json';

    if (function_exists('curl_init')) {
        $ch = curl_init($url);
        $opts = [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT        => $timeout,
            CURLOPT_CUSTOMREQUEST  => $method,
            CURLOPT_HTTPHEADER     => $headers,
        ];
        if ($payload !== null) $opts[CURLOPT_POSTFIELDS] = json_encode($payload);
        curl_setopt_array($ch, $opts);
        $resp = curl_exec($ch);
        $code = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
    } else {
        $http = [
            'method'        => $method,
            'header'        => implode("\r\n", $headers),
            'timeout'       => $timeout,
            'ignore_errors' => true,
        ];
        if ($payload !== null) $http['content'] = json_encode($payload);
        $ctx = stream_context_create(['http' => $http]);
        $resp = @file_get_contents($url, false, $ctx);
        $code = 0;
        if (isset($http_response_header[0]) &&
            preg_match('{HTTP/\S+\s+(\d+)}', $http_response_header[0], $m)) {
            $code = (int)$m[1];
        }
    }

    $out = ($resp !== false && $resp !== '') ? json_decode($resp, true) : null;
    if (!is_array($out)) $out = [];
    return [$code, $out];
}

function extrairId($out) {
    return $out['id']
        ?? $out['paymentId']
        ?? $out['transactionId']
        ?? ($out['venda']['id'] ?? null)
        ?? ($out['data']['id'] ?? null)
        ?? '';
}

function extrairCopiaECola($out) {
    return $out['pixCopiaECola']
        ?? $out['copiaECola']
        ?? $out['qrCode']
        ?? $out['pixQrCode']
        ?? $out['brcode']
        ?? $out['emv']
        ?? ($out['venda']['pixCopiaECola'] ?? $out['venda']['copiaECola'] ?? null)
        ?? ($out['data']['pixCopiaECola'] ?? $out['data']['copiaECola'] ?? null)
        ?? '';
}

function ehPago($status) {
    $s = strtolower(trim((string)$status));
    return in_array($s, ['aprovado', 'approved', 'paid', 'pago', 'payment.approved'], true);
}

// Grava um lead no CSV (mesmo arquivo usado por lead.php).
function salvarLead($d) {
    try {
        $telefone = preg_replace('/\D/', '', (string)($d['telefone'] ?? ''));
        if (strlen($telefone) < 10) return;

        $dir = __DIR__ . '/../leads';
        if (!is_dir($dir)) @mkdir($dir, 0755, true);
        $ht = $dir . '/.htaccess';
        if (!is_file($ht)) @file_put_contents($ht, "Require all denied\n");

        $arquivo = $dir . '/leads.csv';
        if (!is_file($arquivo)) {
            @file_put_contents($arquivo, "data_hora;nome;telefone;cpf;email;etapa;ip\n", LOCK_EX);
        }
        $limpa = function ($s) { return str_replace([';', "\r", "\n"], [',', ' ', ' '], (string)$s); };
        $ip = $_SERVER['HTTP_CF_CONNECTING_IP'] ?? $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? '';
        $ip = $limpa(trim(explode(',', $ip)[0]));

        $linha = implode(';', [
            date('Y-m-d H:i:s'),
            $limpa($d['nome'] ?? ''),
            $telefone,
            preg_replace('/\D/', '', (string)($d['cpf'] ?? '')),
            $limpa($d['email'] ?? ''),
            $limpa($d['etapa'] ?? ''),
            $ip,
        ]) . "\n";
        @file_put_contents($arquivo, $linha, FILE_APPEND | LOCK_EX);
    } catch (\Throwable $e) { /* nunca trava o funil */ }
}

// -------------------------------------------------------------------------
// Ações
// -------------------------------------------------------------------------
function criarPagamento($BASE, $API_KEY, $QR_TTL) {
    $data = lerBody();

    $centavos = (int)($data['amount'] ?? 0);
    $valor = max(0, $centavos / 100);   // Medusa quer REAIS (decimal)
    $cpf = preg_replace('/\D/', '', (string)($data['cpf'] ?? ''));

    if ($valor <= 0) {
        http_response_code(400);
        responder(['status' => 'erro', 'mensagem' => 'Valor inválido.']);
    }
    if ($API_KEY === '') {
        http_response_code(500);
        responder(['status' => 'erro', 'mensagem' => 'MEDUSA_API_KEY ausente no ambiente.']);
    }

    // Captura o lead (não trava o fluxo se falhar).
    salvarLead([
        'nome'     => $data['nome'] ?? '',
        'telefone' => $data['telefone'] ?? '',
        'cpf'      => $cpf,
        'email'    => $data['email'] ?? '',
        'etapa'    => 'pix:' . ($data['descricao'] ?? ''),
    ]);

    $payload = [
        'clienteNome'  => $data['nome'] ?? 'Cliente',
        'clienteEmail' => $data['email'] ?? 'cliente@exemplo.com',
        'cpf'          => $cpf !== '' ? $cpf : null,
        'valor'        => $valor,
        'metodo'       => 'PIX',
        'descricao'    => $data['descricao'] ?? 'Pagamento',
        'aceitaCartao' => false,
    ];

    list($code, $out) = medusaRequest('POST', $BASE . '/api/pagamentos', $API_KEY, $payload, 15);

    if ($code < 200 || $code >= 300) {
        $msg = $out['message'] ?? $out['mensagem'] ?? $out['error'] ?? "Gateway retornou $code.";
        responder(['status' => 'erro', 'mensagem' => $msg]);
    }

    $id = extrairId($out);
    $qrCode = extrairCopiaECola($out);
    if ($qrCode === '') {
        responder(['status' => 'erro', 'mensagem' => 'Gateway não retornou o código Pix.']);
    }

    responder([
        'status'   => 'ok',
        'id'       => $id,
        'qrCode'   => $qrCode,
        'restante' => $QR_TTL,
        'valor'    => $valor,
    ]);
}

function checarStatus($BASE, $API_KEY) {
    $data = lerBody();
    $id = $data['id'] ?? $data['chave'] ?? $data['transactionId'] ?? '';

    if ($id === '' || $API_KEY === '') {
        responder(['status' => 'pendente']);
    }

    list($code, $out) = medusaRequest('GET', $BASE . '/api/pagamentos/' . rawurlencode($id), $API_KEY, null, 12);

    $statusBruto = $out['status']
        ?? ($out['venda']['status'] ?? null)
        ?? ($out['data']['status'] ?? null)
        ?? '';
    $pago = (isset($out['paid']) && $out['paid'] === true) || ehPago($statusBruto);

    // Quando confirma pago, envia Purchase para a Meta via CAPI (server-side),
    // apenas UMA vez por transação.
    if ($pago) {
        $valorPago = $out['valor'] ?? ($out['venda']['valor'] ?? ($out['value'] ?? 0));
        enviarPurchaseCapi($id, (float)$valorPago, $out);
    }

    responder([
        'status' => $pago ? 'pago' : 'pendente',
        'id'     => extrairId($out) ?: $id,
        'raw'    => strtoupper((string)$statusBruto),
    ]);
}

// Envia o evento Purchase para a Meta (Conversions API). Dedupe por id.
function enviarPurchaseCapi($id, $valor, $out) {
    try {
        $pixel = getenv('META_PIXEL_ID') ?: '';
        $token = getenv('META_CAPI_TOKEN') ?: '';
        if ($pixel === '' || $token === '' || $id === '') return;

        // Dedupe: não reenvia Purchase do mesmo id.
        $dir = __DIR__ . '/../leads';
        if (!is_dir($dir)) @mkdir($dir, 0755, true);
        $flag = $dir . '/purchase_' . preg_replace('/[^a-zA-Z0-9_-]/', '', $id) . '.sent';
        if (is_file($flag)) return;
        @file_put_contents($flag, date('c'));

        // event_id igual ao usado no Pixel do navegador -> deduplicação na Meta.
        $eventId = 'pix_' . $id;

        $ud = [];
        // Hash de email/telefone, se vieram no retorno (melhora o match).
        $email = $out['clienteEmail'] ?? ($out['venda']['clienteEmail'] ?? '');
        $fone  = $out['telefone'] ?? ($out['venda']['telefone'] ?? '');
        if ($email) $ud['em'] = [hash('sha256', strtolower(trim($email)))];
        if ($fone)  $ud['ph'] = [hash('sha256', preg_replace('/\D/', '', $fone))];
        $ud['client_ip_address'] = $_SERVER['HTTP_CF_CONNECTING_IP'] ?? $_SERVER['REMOTE_ADDR'] ?? '';
        $ud['client_user_agent'] = $_SERVER['HTTP_USER_AGENT'] ?? '';

        $payload = [
            'data' => [[
                'event_name'    => 'Purchase',
                'event_time'    => time(),
                'event_id'      => $eventId,
                'action_source' => 'website',
                'user_data'     => $ud,
                'custom_data'   => [
                    'currency' => 'BRL',
                    'value'    => $valor > 0 ? $valor : 0,
                ],
            ]],
        ];

        $url = 'https://graph.facebook.com/v19.0/' . $pixel . '/events?access_token=' . urlencode($token);
        if (function_exists('curl_init')) {
            $ch = curl_init($url);
            curl_setopt_array($ch, [
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_TIMEOUT        => 8,
                CURLOPT_POST           => true,
                CURLOPT_HTTPHEADER     => ['Content-Type: application/json'],
                CURLOPT_POSTFIELDS     => json_encode($payload),
            ]);
            curl_exec($ch);
            curl_close($ch);
        } else {
            $ctx = stream_context_create(['http' => [
                'method'        => 'POST',
                'header'        => "Content-Type: application/json\r\n",
                'content'       => json_encode($payload),
                'timeout'       => 8,
                'ignore_errors' => true,
            ]]);
            @file_get_contents($url, false, $ctx);
        }
    } catch (\Throwable $e) { /* nunca trava o funil */ }
}

// -------------------------------------------------------------------------
// Roteamento
// -------------------------------------------------------------------------
$action = $_GET['action'] ?? '';
if ($action === 'create-payment') {
    criarPagamento($BASE, $API_KEY, $QR_TTL);
} elseif ($action === 'check-status') {
    checarStatus($BASE, $API_KEY);
} else {
    http_response_code(400);
    responder(['status' => 'erro', 'mensagem' => 'action inválida.']);
}
