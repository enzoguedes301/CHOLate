/**
 * Captura leve de leads: dispara /api/lead.php assim que o cliente informa
 * um telefone válido no funil. Funciona por cima do bundle React, sem recompilar.
 *
 * Estratégia:
 *  1) Observa inputs de telefone (type=tel ou com "telefone/celular/whatsapp"
 *     no name/id/placeholder). Quando o valor tem 10-11 dígitos, agenda o envio.
 *  2) Também intercepta o fetch de /api/pix-widget.php (create-payment) como
 *     reforço — ali o telefone sempre existe.
 *  O envio é deduplicado por telefone (localStorage) para não repetir.
 */
(function () {
  "use strict";
  if (window.__leadCap) return; window.__leadCap = true;

  var ENVIADOS_KEY = "lead_sent_v1";

  function jaEnviado(tel) {
    try {
      var s = JSON.parse(localStorage.getItem(ENVIADOS_KEY) || "[]");
      return s.indexOf(tel) !== -1;
    } catch (e) { return false; }
  }
  function marcarEnviado(tel) {
    try {
      var s = JSON.parse(localStorage.getItem(ENVIADOS_KEY) || "[]");
      s.push(tel); localStorage.setItem(ENVIADOS_KEY, JSON.stringify(s.slice(-50)));
    } catch (e) {}
  }

  function soDigitos(v) { return String(v || "").replace(/\D/g, ""); }

  function enviar(dados) {
    var tel = soDigitos(dados.telefone);
    if (tel.length < 10 || tel.length > 11) return;
    if (jaEnviado(tel)) return;
    marcarEnviado(tel);
    try {
      fetch("/api/lead.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: dados.nome || "",
          telefone: tel,
          cpf: dados.cpf || "",
          email: dados.email || "",
          etapa: dados.etapa || "telefone"
        }),
        keepalive: true
      }).catch(function () {});
    } catch (e) {}
  }

  // --- 1) Observa inputs de telefone ---
  function ehCampoTelefone(el) {
    if (!el || el.tagName !== "INPUT") return false;
    var t = (el.type || "").toLowerCase();
    if (t === "tel") return true;
    var alvo = ((el.name || "") + " " + (el.id || "") + " " +
                (el.getAttribute("placeholder") || "") + " " +
                (el.getAttribute("aria-label") || "")).toLowerCase();
    return /telefone|celular|whatsapp|whats|fone|phone|ddd/.test(alvo);
  }

  var timer;
  function aoDigitar(e) {
    var el = e.target;
    if (!ehCampoTelefone(el)) return;
    var tel = soDigitos(el.value);
    if (tel.length < 10) return;
    clearTimeout(timer);
    timer = setTimeout(function () {
      // tenta achar nome/cpf na mesma tela
      var nome = "", cpf = "", email = "";
      document.querySelectorAll("input").forEach(function (i) {
        var k = ((i.name||"")+" "+(i.id||"")+" "+(i.placeholder||"")).toLowerCase();
        if (!nome && /nome/.test(k) && i.value) nome = i.value;
        if (!cpf && /cpf/.test(k) && i.value) cpf = i.value;
        if (!email && (/email|e-mail/.test(k) || i.type === "email") && i.value) email = i.value;
      });
      enviar({ telefone: tel, nome: nome, cpf: cpf, email: email, etapa: "telefone" });
    }, 900);
  }
  document.addEventListener("input", aoDigitar, true);
  document.addEventListener("change", aoDigitar, true);

  // --- 2) Reforço: intercepta o create-payment do PIX ---
  var _fetch = window.fetch;
  if (_fetch) {
    window.fetch = function (url, opts) {
      try {
        var u = typeof url === "string" ? url : (url && url.url) || "";
        if (u.indexOf("pix-widget.php") !== -1 && opts && opts.body) {
          var b = JSON.parse(opts.body);
          if (b && b.telefone) {
            enviar({ telefone: b.telefone, nome: b.nome, cpf: b.cpf, email: b.email, etapa: "pix" });
          }
        }
      } catch (e) {}
      return _fetch.apply(this, arguments);
    };
  }
})();
