/**
 * Roteador para funções serverless
 * Mapeia URLs para handlers específicos
 */

const consulta = require("./consulta");

module.exports = {
  // Exportar handler de consulta CPF
  consulta: consulta.handler,

  // Handler genérico para routing
  handler: async (event) => {
    const path = event.path || event.requestContext?.path || "";

    // Rotear para consulta de CPF
    if (path.includes("/consulta") || path.includes("consulta")) {
      return consulta.handler(event);
    }

    // Rota não encontrada
    return {
      statusCode: 404,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Rota não encontrada" }),
    };
  },
};
