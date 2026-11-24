<?php
/**
 * Captura de leads — salva os dados do cliente num arquivo no servidor.
 *
 * O front chama:  POST /api/lead.php
 *   body: { nome, telefone, cpf, email, etapa }
 *
 * Grava em ../leads/leads.csv (fora da pasta pública? não — fica em
 * public_html/leads, protegido por .htaccess próprio). Uma linha por lead.
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

$nome     = trim((string)($data['nome'] ?? ''));
$telefone = preg_replace('/\D/', '', (string)($data['telefone'] ?? ''));
$cpf      = preg_replace('/\D/', '', (string)($data['cpf'] ?? ''));
$email    = trim((string)($data['email'] ?? ''));
$etapa    = trim((string)($data['etapa'] ?? ''));

// Sem telefone útil, não grava (mas responde ok pra não travar o front).
if (strlen($telefone) < 10) ok();

// Pasta de leads (criada se não existir).
$dir = __DIR__ . '/../leads';
if (!is_dir($dir)) @mkdir($dir, 0755, true);

// Protege a pasta de acesso web (gera .htaccess só uma vez).
$ht = $dir . '/.htaccess';
if (!is_file($ht)) @file_put_contents($ht, "Require all denied\n");

$arquivo = $dir . '/leads.csv';

// Cabeçalho na primeira vez.
if (!is_file($arquivo)) {
    @file_put_contents($arquivo, "data_hora;nome;telefone;cpf;email;etapa;ip\n", LOCK_EX);
}

// Evita gravar o MESMO telefone repetido em sequência (dedupe simples por
// última linha). Para dedupe global seria preciso ler tudo; aqui é leve.
$ultimo = '';
if (is_file($arquivo)) {
    $fp = @fopen($arquivo, 'r');
    if ($fp) {
        $pos = -2; $linha = '';
        if (fseek($fp, 0, SEEK_END) === 0) {
            $tam = ftell($fp);
            // lê a última linha de trás pra frente (limitado)
            $buf = '';
            for ($k = 1; $k <= min($tam, 4000); $k++) {
                fseek($fp, -$k, SEEK_END);
                $ch = fgetc($fp);
                if ($ch === "\n" && $buf !== '') break;
                if ($ch !== "\n") $buf = $ch . $buf;
            }
            $ultimo = $buf;
        }
        fclose($fp);
    }
}
if ($ultimo !== '' && strpos($ultimo, ';' . $telefone . ';') !== false) ok();

// Monta a linha (sanitiza ; e quebras para não corromper o CSV).
function limpa($s) { return str_replace([';', "\r", "\n"], [',', ' ', ' '], $s); }

$ip = $_SERVER['HTTP_CF_CONNECTING_IP'] ?? $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? '';
$ip = limpa(trim(explode(',', $ip)[0]));

$linha = implode(';', [
    date('Y-m-d H:i:s'),
    limpa($nome),
    $telefone,
    $cpf,
    limpa($email),
    limpa($etapa),
    $ip,
]) . "\n";

@file_put_contents($arquivo, $linha, FILE_APPEND | LOCK_EX);

ok();
