/**
 * Integração com o gateway Medusa Pay (https://app.medusapayoficial.pro/docs).
 *
 * O front (pix-cache / pagamento / pagamento-upsell) chama:
 *   POST /api/pix-widget.php?action=create-payment
 *        body: { amount (CENTAVOS), nome, email, telefone, cpf, descricao, tracking }
 *        espera: { status:"ok", id, qrCode, restante }
 *   POST /api/pix-widget.php?action=check-status
 *        body: { id | chave }
 *        espera: { status:"pago" } quando confirmado
 *
 * A Medusa Pay usa:
 *   Base: https://api.medusapayoficial.pro/api/v1
 *   Auth: header  Authorization: Bearer <API_KEY>
 *
 *   POST {BASE}/api/pagamentos
 *        body: { clienteNome, clienteEmail, cpf, valor (REAIS), descricao, aceitaCartao:false }
 *        resp: { id|venda.id, pixQrCode, pixCopiaECola, pixExpiresAt, status, ... }
 *
 *   GET  {BASE}/api/pagamentos/:id
 *        resp: { id, status, venda:{ status } }  — "aprovado"/"approved"/"paid" = pago
 *
 * Confirmação também pode chegar por webhook assinado (HMAC SHA-256, evento
 * `payment.approved`). Aqui usamos a consulta por GET — suficiente para o funil,
 * que faz polling pelo status. Ver resposta ao usuário sobre webhook.
 *
 * Este handler faz a tradução entre os dois formatos.
 */

const BASE = (process.env.MEDUSA_BASE || "https://api.medusapayoficial.pro/api/v1").replace(/\/+$/, "");
const API_KEY = process.env.MEDUSA_API_KEY || "";
const EMPRESA_ID = process.env.MEDUSA_EMPRESA_ID || "";

// Janela padrão do QR (segundos) que o front usa no contador.
const QR_TTL = 600;

function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    },
    body: JSON.stringify(body),
  };
}

function medusaHeaders() {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  };
}

async function parseBody(event) {
  if (!event.body) return {};
  try {
    return typeof event.body === "string" ? JSON.parse(event.body) : event.body;
  } catch {
    return {};
  }
}

// Extrai o id da venda/cobrança de uma resposta, tolerante a variações de nome.
function extrairId(out) {
  return (
    out.id ||
    out.paymentId ||
    out.transactionId ||
    (out.venda && out.venda.id) ||
    (out.data && out.data.id) ||
    ""
  );
}

// Extrai o código Pix copia-e-cola de uma resposta, tolerante a variações.
function extrairCopiaECola(out) {
  return (
    out.pixCopiaECola ||
    out.copiaECola ||
    out.pixCopiaCola ||
    out.qrCode ||
    out.pixQrCode ||
    out.brcode ||
    out.emv ||
    (out.venda && (out.venda.pixCopiaECola || out.venda.copiaECola)) ||
    (out.data && (out.data.pixCopiaECola || out.data.copiaECola)) ||
    ""
  );
}

// Interpreta um status textual da Medusa como "pago".
function ehPago(valorStatus) {
  const s = String(valorStatus || "").toLowerCase();
  return (
    s === "aprovado" ||
    s === "approved" ||
    s === "paid" ||
    s === "pago" ||
    s === "payment.approved"
  );
}

async function criarPagamento(event) {
  const data = await parseBody(event);

  // amount vem em centavos; a Medusa quer o valor em REAIS (decimal).
  const centavos = Number(data.amount) || 0;
  const valor = Math.max(0, centavos / 100);
  const cpf = String(data.cpf || "").replace(/\D/g, "");

  if (!valor) {
    return json(400, { status: "erro", mensagem: "Valor inválido." });
  }
  if (!API_KEY) {
    return json(500, { status: "erro", mensagem: "MEDUSA_API_KEY ausente no ambiente." });
  }

  const payload = {
    clienteNome: data.nome || "Cliente",
    clienteEmail: data.email || "cliente@exemplo.com",
    cpf: cpf || null,
    valor, // em reais (decimal)
    metodo: "PIX",
    descricao: data.descricao || "Pagamento",
    aceitaCartao: false,
  };

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    const resp = await fetch(`${BASE}/api/pagamentos`, {
      method: "POST",
      headers: medusaHeaders(),
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    clearTimeout(timeout);

    const text = await resp.text();
    let out;
    try { out = JSON.parse(text); } catch { out = {}; }

    if (!resp.ok) {
      return json(200, {
        status: "erro",
        mensagem: out?.message || out?.mensagem || out?.error || `Gateway retornou ${resp.status}.`,
      });
    }

    const id = extrairId(out);
    const qrCode = extrairCopiaECola(out);

    if (!qrCode) {
      return json(200, { status: "erro", mensagem: "Gateway não retornou o código Pix." });
    }

    // Formato que o front espera.
    return json(200, {
      status: "ok",
      id,
      qrCode,
      restante: QR_TTL,
      valor,
    });
  } catch (err) {
    return json(200, { status: "erro", mensagem: "Falha ao conectar com o gateway Pix." });
  }
}

async function checarStatus(event) {
  const data = await parseBody(event);
  const id = data.id || data.chave || data.transactionId || "";

  if (!id) return json(200, { status: "pendente" });
  if (!API_KEY) return json(200, { status: "pendente" });

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);
    const resp = await fetch(`${BASE}/api/pagamentos/${encodeURIComponent(id)}`, {
      method: "GET",
      headers: medusaHeaders(),
      signal: controller.signal,
    });
    clearTimeout(timeout);

    const text = await resp.text();
    let out;
    try { out = JSON.parse(text); } catch { out = {}; }

    const statusBruto =
      out.status ||
      (out.venda && out.venda.status) ||
      (out.data && out.data.status) ||
      "";
    const pago = out.paid === true || ehPago(statusBruto);

    return json(200, {
      status: pago ? "pago" : "pendente",
      id: extrairId(out) || id,
      raw: String(statusBruto || "").toUpperCase(),
    });
  } catch (err) {
    return json(200, { status: "pendente" });
  }
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return json(204, {});
  }
  const action =
    (event.queryStringParameters && event.queryStringParameters.action) || "";

  if (action === "create-payment") return criarPagamento(event);
  if (action === "check-status") return checarStatus(event);

  return json(400, { status: "erro", mensagem: "action inválida." });
};
