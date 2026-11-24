/**
 * CREDENCIAIS — todas vêm de variáveis de ambiente.
 *
 * NADA DE VALOR PADRÃO AQUI. Este arquivo vai para o repositório; uma chave
 * escrita como fallback vaza junto. Faltando a variável, o código que depende
 * dela falha com uma mensagem clara — que é melhor do que rodar com a
 * credencial de outra pessoa.
 *
 * Onde definir: `.env.local` na máquina, e o painel de variáveis de ambiente
 * do provedor (Netlify/Vercel) em produção. Ver `.env.example`.
 */

module.exports = {
  // Gateway de pagamentos
  // PixGate autentica com uma única API Key, enviada no header `Apikey`.
  // GATEWAY_API_KEY guarda essa chave — pegue em Integrations → API Key no
  // painel https://app.pixgateip.com/.
  PAYMENT_GATEWAY: process.env.PAYMENT_GATEWAY || "medusa",
  GATEWAY_CLIENT_ID: process.env.GATEWAY_CLIENT_ID || "",
  GATEWAY_API_KEY: process.env.GATEWAY_API_KEY || "",
  GATEWAY_API_SECRET: process.env.GATEWAY_API_SECRET || "",
  GATEWAY_WEBHOOK_SECRET: process.env.GATEWAY_WEBHOOK_SECRET || "",

  // Rastreamento removido (UTMify desativado).

  // API de consulta de CPF
  CPF_API_TOKEN: process.env.CPF_API_TOKEN || "",
};
