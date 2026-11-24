<?php
/**
 * Consulta de CPF — versão PHP (HostGator / hospedagem compartilhada).
 *
 * Equivalente ao antigo functions/consulta.js (Node). O front chama:
 *   GET /api/consulta.php?cpf=00000000000
 * e espera os campos achatados na raiz: { cpf, nome, nascimento, mae, sexo }.
 *
 * Mantém o mesmo comportamento: tenta a API real; se falhar ou vier vazio,
 * gera dados de fallback determinísticos (mesmo CPF = mesmo resultado) para
 * o funil nunca travar na tela de verificação.
 *
 * Config: a variável CPF_API_TOKEN é lida de getenv() ou do arquivo .env na
 * raiz do site (um nível acima de /api). NÃO deixe o token hardcoded aqui.
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
// Carrega variáveis do .env (raiz do site) sem dependências externas.
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

$CPF_API_BASE  = 'https://api.amnesiatecnologia.lat/';
$CPF_API_TOKEN = getenv('CPF_API_TOKEN') ?: '';

// -------------------------------------------------------------------------
// Fallbacks determinísticos (espelham o consulta.js original).
// -------------------------------------------------------------------------
$NOMES_MASC = ['Carlos','Roberto','Marcelo','Anderson','Fernando','Rodrigo','Eduardo','Leandro','Fabricio','Leonardo'];
$NOMES_FEM  = ['Ana','Maria','Patricia','Fernanda','Juliana','Camila','Luciana','Renata','Priscila','Beatriz'];
$SOBRENOMES = ['Silva','Santos','Oliveira','Souza','Lima','Pereira','Costa','Ferreira','Rodrigues','Almeida','Nascimento','Carvalho'];

function gerarNomeFallback($cpf) {
    global $NOMES_MASC, $NOMES_FEM, $SOBRENOMES;
    $seed = (int)substr($cpf, 0, 4) ?: 1234;
    $useFem = $seed % 3 === 0;
    $nomes = $useFem ? $NOMES_FEM : $NOMES_MASC;
    $nome = $nomes[$seed % count($nomes)];
    $sob1 = $SOBRENOMES[($seed * 3) % count($SOBRENOMES)];
    $sob2 = $SOBRENOMES[($seed * 7) % count($SOBRENOMES)];
    return "$nome $sob1 $sob2";
}

function gerarNomeMaeFallback($cpf) {
    global $NOMES_FEM, $SOBRENOMES;
    $seed = (int)substr($cpf, 3, 4) ?: 5678;
    $nome = $NOMES_FEM[$seed % count($NOMES_FEM)];
    $sob  = $SOBRENOMES[($seed * 5) % count($SOBRENOMES)];
    return "$nome $sob";
}

function gerarDataNascFallback($cpf) {
    $seed = (int)substr($cpf, 0, 3) ?: 100;
    $ano = 1975 + ($seed % 25);
    $mes = str_pad((string)(1 + ($seed % 12)), 2, '0', STR_PAD_LEFT);
    $dia = str_pad((string)(1 + ($seed % 28)), 2, '0', STR_PAD_LEFT);
    return "$dia/$mes/$ano";
}

// -------------------------------------------------------------------------
// Entrada
// -------------------------------------------------------------------------
$cpfRaw = isset($_GET['cpf']) ? $_GET['cpf'] : '';
$cpf = substr(preg_replace('/\D/', '', $cpfRaw), 0, 11);
if ($cpf === '') {
    http_response_code(400);
    echo json_encode(['status' => 400, 'statusMsg' => 'Informe o CPF']);
    exit;
}

// -------------------------------------------------------------------------
// Tenta a API real (com timeout curto); se falhar, cai no fallback.
// -------------------------------------------------------------------------
$dados = null;
if ($CPF_API_TOKEN !== '') {
    $url = $CPF_API_BASE . '?token=' . urlencode($CPF_API_TOKEN) . '&cpf=' . urlencode($cpf);
    $resp = false;

    if (function_exists('curl_init')) {
        $ch = curl_init($url);
        curl_setopt_array($ch, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT        => 8,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTPHEADER     => ['Accept: application/json'],
            CURLOPT_USERAGENT      => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        ]);
        $resp = curl_exec($ch);
        curl_close($ch);
    } else {
        $ctx = stream_context_create(['http' => [
            'timeout' => 8,
            'header'  => "Accept: application/json\r\nUser-Agent: Mozilla/5.0\r\n",
        ]]);
        $resp = @file_get_contents($url, false, $ctx);
    }

    if ($resp !== false && $resp !== '') {
        $data = json_decode($resp, true);
        if (is_array($data)) {
            $root = $data['DADOS'] ?? $data['data'] ?? $data;
            if (!empty($root['nome']) && trim((string)$root['nome']) !== '') {
                $dados = [
                    'cpf'             => $cpf,
                    'nome'            => $root['nome'],
                    'nome_mae'        => $root['nome_mae']        ?? gerarNomeMaeFallback($cpf),
                    'data_nascimento' => $root['data_nascimento'] ?? gerarDataNascFallback($cpf),
                    'sexo'            => $root['sexo']            ?? '',
                ];
            }
        }
    }
}

// Fallback se a API falhou ou veio vazia.
if ($dados === null) {
    $dados = [
        'cpf'             => $cpf,
        'nome'            => gerarNomeFallback($cpf),
        'nome_mae'        => gerarNomeMaeFallback($cpf),
        'data_nascimento' => gerarDataNascFallback($cpf),
        'sexo'            => ((int)substr($cpf, 0, 2) % 2 === 0) ? 'M' : 'F',
    ];
}

// -------------------------------------------------------------------------
// Resposta: o front consome os campos achatados na raiz (como o server.js
// Node fazia ao adaptar /api/consulta.php). Mantemos DADOS por segurança.
// -------------------------------------------------------------------------
echo json_encode([
    'cpf'        => $dados['cpf'],
    'nome'       => $dados['nome'],
    'nascimento' => $dados['data_nascimento'],
    'mae'        => $dados['nome_mae'],
    'sexo'       => $dados['sexo'],
    'DADOS'      => $dados,
]);
