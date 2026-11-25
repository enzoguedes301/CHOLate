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

require_once __DIR__ . '/lead-store.php';

gravarLead([
    'nome'       => $data['nome']       ?? '',
    'telefone'   => $data['telefone']   ?? '',
    'cpf'        => $data['cpf']        ?? '',
    'nascimento' => $data['nascimento'] ?? '',
    'email'      => $data['email']      ?? '',
    'etapa'      => $data['etapa']      ?? '',
]);

ok();
