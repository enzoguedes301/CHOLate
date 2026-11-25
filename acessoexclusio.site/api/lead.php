<?php
/**
 * Captura de leads — salva os dados do cliente num arquivo no servidor.
 *
 * O front chama:  POST /api/lead.php
 *   body: { nome, telefone, cpf, nascimento, email, etapa }
 *
 * Grava em ../leads/leads.csv (fica em public_html/leads, protegido por
 * .htaccess próprio). Uma linha por telefone: se o mesmo telefone chegar de
 * novo, só completa os campos vazios (ex.: nascimento vindo depois).
 *
 * Retorna sempre { status:"ok" } para nunca travar o funil.
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }

function ok() { echo json_encode(['status' => 'ok']); exit; }

// Lê o corpo (JSON do fetch, ou form).
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) $data = $_POST ?: [];

// Sanitiza ; e quebras para não corromper o CSV.
function limpa($s) { return str_replace([';', "\r", "\n"], [',', ' ', ' '], $s); }

$nome       = limpa(trim((string)($data['nome'] ?? '')));
$telefone   = preg_replace('/\D/', '', (string)($data['telefone'] ?? ''));
$cpf        = preg_replace('/\D/', '', (string)($data['cpf'] ?? ''));
$nascimento = limpa(trim((string)($data['nascimento'] ?? '')));
$email      = limpa(trim((string)($data['email'] ?? '')));
$etapa      = limpa(trim((string)($data['etapa'] ?? '')));

// Sem telefone útil, não grava (mas responde ok pra não travar o front).
if (strlen($telefone) < 10) ok();

// Pasta de leads (criada se não existir).
$dir = __DIR__ . '/../leads';
if (!is_dir($dir)) @mkdir($dir, 0755, true);

// Protege a pasta de acesso web (gera .htaccess só uma vez).
$ht = $dir . '/.htaccess';
if (!is_file($ht)) @file_put_contents($ht, "Require all denied\n");

$arquivo = $dir . '/leads.csv';

// Colunas do CSV (ordem fixa). Índices usados abaixo e em leads-ver.php.
$COLUNAS = ['data_hora', 'nome', 'telefone', 'cpf', 'nascimento', 'email', 'etapa', 'ip'];
$CABECALHO = implode(';', $COLUNAS);

$ip = $_SERVER['HTTP_CF_CONNECTING_IP'] ?? $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? '';
$ip = limpa(trim(explode(',', $ip)[0]));

$novo = [date('Y-m-d H:i:s'), $nome, $telefone, $cpf, $nascimento, $email, $etapa, $ip];

// Abre com lock exclusivo: lê tudo, ajusta e regrava (arquivo é pequeno).
$fp = @fopen($arquivo, 'c+');
if (!$fp) ok();
if (!flock($fp, LOCK_EX)) { fclose($fp); ok(); }

$conteudo = stream_get_contents($fp);
$linhas = array_values(array_filter(array_map('trim', explode("\n", (string)$conteudo)), 'strlen'));

// Arquivo vazio -> só cabeçalho.
if (count($linhas) === 0) $linhas = [$CABECALHO];

// Migração: arquivo antigo sem a coluna "nascimento" (ficava entre cpf e email).
$cab = explode(';', $linhas[0]);
if (!in_array('nascimento', $cab, true)) {
    $linhas[0] = $CABECALHO;
    for ($i = 1; $i < count($linhas); $i++) {
        $c = explode(';', $linhas[$i]);
        array_splice($c, 4, 0, ['']);
        $linhas[$i] = implode(';', $c);
    }
}

// Dedupe global por telefone: se já existe, só preenche campos que
// estavam vazios (ex.: nascimento chegou depois). Senão, acrescenta.
$achou = false;
for ($i = 1; $i < count($linhas); $i++) {
    $c = explode(';', $linhas[$i]);
    if (($c[2] ?? '') !== $telefone) continue;
    $achou = true;
    $c = array_pad($c, count($COLUNAS), '');
    foreach ([1, 3, 4, 5] as $k) {           // nome, cpf, nascimento, email
        if ($c[$k] === '' && $novo[$k] !== '') $c[$k] = $novo[$k];
    }
    $linhas[$i] = implode(';', $c);
    break;
}
if (!$achou) $linhas[] = implode(';', $novo);

rewind($fp);
ftruncate($fp, 0);
fwrite($fp, implode("\n", $linhas) . "\n");
fflush($fp);
flock($fp, LOCK_UN);
fclose($fp);

ok();
