import { n as e } from "./rolldown-runtime-Bh1tDfsg.js";
import { i as t, r as n } from "./useRouter-mso78Z2_.js";
import { E as r } from "./index-D7YfpSEV.js";
import { formatarCpf as i, lerCliente as a } from "./cliente-Cf5BSP97.js";
import { t as o } from "./createLucideIcon-BADXV0dg.js";
import { t as s } from "./arrow-right-BzDkE4dW.js";
import { t as c } from "./check-KYebtdKP.js";
import { t as l } from "./chevron-right-BG5MJeSG.js";
import { t as u } from "./circle-check-B0erusMF.js";
import { t as d } from "./eye-off-CT40g9Qu.js";
import { t as f } from "./eye-Bg50XmPo.js";
import { t as p } from "./landmark-BYY0qNHK.js";
import { t as m } from "./loader-circle-7lOtAaIs.js";
import { a as h, i as g, m as _, n as v, t as y } from "./dialog-DwZSjXoK.js";
import { t as b } from "./x-CBL5-v-L.js";
import { t as x } from "./zap-Daz-z7HS.js";
import { t as S } from "./Logo-D2YAbfEM.js";
import { t as C } from "./SiteFooter-g8x5i3HV.js";
import { i as w, n as T, r as E } from "./proposta-D6Emn9RU.js";
import { t as D } from "./conta-C9yWh4zC.js";
var O = o(`barcode`, [
    [`path`, { d: `M3 5v14`, key: `1nt18q` }],
    [`path`, { d: `M8 5v14`, key: `1ybrkv` }],
    [`path`, { d: `M12 5v14`, key: `s699le` }],
    [`path`, { d: `M17 5v14`, key: `ycjyhj` }],
    [`path`, { d: `M21 5v14`, key: `nzette` }],
  ]),
  k = o(`building-2`, [
    [`path`, { d: `M10 12h4`, key: `a56b0p` }],
    [`path`, { d: `M10 8h4`, key: `1sr2af` }],
    [`path`, { d: `M14 21v-3a2 2 0 0 0-4 0v3`, key: `1rgiei` }],
    [
      `path`,
      {
        d: `M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2`,
        key: `secmi2`,
      },
    ],
    [`path`, { d: `M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16`, key: `16ra0t` }],
  ]),
  A = o(`credit-card`, [
    [
      `rect`,
      { width: `20`, height: `14`, x: `2`, y: `5`, rx: `2`, key: `ynyp8z` },
    ],
    [`line`, { x1: `2`, x2: `22`, y1: `10`, y2: `10`, key: `1b3vmo` }],
  ]),
  j = o(`search`, [
    [`path`, { d: `m21 21-4.34-4.34`, key: `14j7rj` }],
    [`circle`, { cx: `11`, cy: `11`, r: `8`, key: `4ej97u` }],
  ]),
  M = o(`smartphone`, [
    [
      `rect`,
      {
        width: `14`,
        height: `20`,
        x: `5`,
        y: `2`,
        rx: `2`,
        ry: `2`,
        key: `1yt0o3`,
      },
    ],
    [`path`, { d: `M12 18h.01`, key: `mhygvu` }],
  ]),
  N = e(t()),
  P = [
    { codigo: `001`, nome: `Banco do Brasil` },
    { codigo: `003`, nome: `Banco da Amazônia` },
    { codigo: `004`, nome: `Banco do Nordeste` },
    { codigo: `021`, nome: `Banestes` },
    { codigo: `025`, nome: `Banco Alfa` },
    { codigo: `029`, nome: `Banco Itaú Consignado` },
    { codigo: `033`, nome: `Santander` },
    { codigo: `036`, nome: `Banco Bradesco BBI` },
    { codigo: `037`, nome: `Banpará` },
    { codigo: `041`, nome: `Banrisul` },
    { codigo: `047`, nome: `Banco do Estado de Sergipe (Banese)` },
    { codigo: `070`, nome: `BRB - Banco de Brasília` },
    { codigo: `077`, nome: `Banco Inter` },
    { codigo: `082`, nome: `Banco Topázio` },
    { codigo: `084`, nome: `Uniprime Norte do Paraná` },
    { codigo: `085`, nome: `Ailos` },
    { codigo: `089`, nome: `Cresol` },
    { codigo: `096`, nome: `Banco B3` },
    { codigo: `097`, nome: `Credisis` },
    { codigo: `099`, nome: `Uniprime Central` },
    { codigo: `104`, nome: `Caixa Econômica Federal` },
    { codigo: `121`, nome: `Banco Agibank` },
    { codigo: `125`, nome: `Banco Genial` },
    { codigo: `133`, nome: `Cresol Confederação` },
    { codigo: `136`, nome: `Unicred` },
    { codigo: `197`, nome: `Stone Pagamentos` },
    { codigo: `208`, nome: `Banco BTG Pactual` },
    { codigo: `212`, nome: `Banco Original` },
    { codigo: `218`, nome: `Banco BS2` },
    { codigo: `222`, nome: `Banco Credit Agricole` },
    { codigo: `237`, nome: `Bradesco` },
    { codigo: `246`, nome: `Banco ABC Brasil` },
    { codigo: `254`, nome: `Paraná Banco` },
    { codigo: `260`, nome: `Nu Pagamentos (Nubank)` },
    { codigo: `269`, nome: `Banco HSBC` },
    { codigo: `290`, nome: `PagBank (PagSeguro)` },
    { codigo: `301`, nome: `BPP Instituição de Pagamento` },
    { codigo: `318`, nome: `Banco BMG` },
    { codigo: `320`, nome: `China Construction Bank` },
    { codigo: `323`, nome: `Mercado Pago` },
    { codigo: `324`, nome: `Cartos SCD` },
    { codigo: `332`, nome: `Acesso Soluções de Pagamento` },
    { codigo: `336`, nome: `Banco C6` },
    { codigo: `341`, nome: `Itaú Unibanco` },
    { codigo: `348`, nome: `Banco XP` },
    { codigo: `364`, nome: `Gerencianet Pagamentos` },
    { codigo: `376`, nome: `Banco J.P. Morgan` },
    { codigo: `380`, nome: `PicPay` },
    { codigo: `389`, nome: `Banco Mercantil do Brasil` },
    { codigo: `394`, nome: `Banco Bradesco Financiamentos` },
    { codigo: `403`, nome: `Cora SCD` },
    { codigo: `404`, nome: `Sumup Sociedade de Crédito` },
    { codigo: `412`, nome: `Banco Capital` },
    { codigo: `422`, nome: `Banco Safra` },
    { codigo: `450`, nome: `Fitbank Pagamentos` },
    { codigo: `461`, nome: `Asaas IP` },
    { codigo: `473`, nome: `Banco Caixa Geral` },
    { codigo: `479`, nome: `Banco ItauBank` },
    { codigo: `600`, nome: `Banco Luso Brasileiro` },
    { codigo: `604`, nome: `Banco Industrial do Brasil` },
    { codigo: `610`, nome: `Banco VR` },
    { codigo: `611`, nome: `Banco Paulista` },
    { codigo: `612`, nome: `Banco Guanabara` },
    { codigo: `623`, nome: `Banco Pan` },
    { codigo: `626`, nome: `Banco C6 Consignado` },
    { codigo: `630`, nome: `Banco Smartbank` },
    { codigo: `633`, nome: `Banco Rendimento` },
    { codigo: `637`, nome: `Banco Sofisa` },
    { codigo: `643`, nome: `Banco Pine` },
    { codigo: `652`, nome: `Itaú Unibanco Holding` },
    { codigo: `654`, nome: `Banco Digimais` },
    { codigo: `655`, nome: `Banco Votorantim` },
    { codigo: `707`, nome: `Banco Daycoval` },
    { codigo: `712`, nome: `Banco Ourinvest` },
    { codigo: `739`, nome: `Banco Cetelem` },
    { codigo: `741`, nome: `Banco Ribeirão Preto` },
    { codigo: `745`, nome: `Banco Citibank` },
    { codigo: `746`, nome: `Banco Modal` },
    { codigo: `748`, nome: `Sicredi` },
    { codigo: `751`, nome: `Scotiabank Brasil` },
    { codigo: `752`, nome: `Banco BNP Paribas Brasil` },
    { codigo: `755`, nome: `Bank of America Merrill Lynch` },
    { codigo: `756`, nome: `Sicoob` },
    { codigo: `757`, nome: `Banco Keb Hana do Brasil` },
  ],
  F = (e) =>
    e
      .normalize(`NFD`)
      .replace(/[\u0300-\u036f]/g, ``)
      .toLowerCase();
function I(e) {
  let t = F(e.trim());
  if (!t) return P;
  let n = t.replace(/\D/g, ``);
  return P.filter(
    (e) => F(e.nome).includes(t) || (n !== `` && e.codigo.includes(n)),
  );
}
var L = n(),
  R = [
    { id: `cpf`, nome: `CPF`, exemplo: `000.000.000-00` },
    { id: `telefone`, nome: `Telefone`, exemplo: `(00) 00000-0000` },
    { id: `email`, nome: `E-mail`, exemplo: `voce@email.com` },
    { id: `cnpj`, nome: `CNPJ`, exemplo: `00.000.000/0000-00` },
    { id: `aleatoria`, nome: `Aleatória`, exemplo: `chave-aleatoria-000` },
  ],
  z = {
    titulo: `Crédito aprovado`,
    valor: 7840,
    parcelas: 14,
    parcela: E(7840, 14),
    total: E(7840, 14) * 14,
  };
function B(e) {
  return (e || ``).trim().split(/\s+/)[0] ?? ``;
}
function V() {
  let e = r(),
    [t, n] = (0, N.useState)(z),
    [i, o] = (0, N.useState)(null),
    [c, l] = (0, N.useState)(!0),
    [u, m] = (0, N.useState)(!1),
    [b, E] = (0, N.useState)(!1);
  (0, N.useEffect)(() => {
    (n(w() ?? z), o(a()));
  }, []);
  let j = (0, N.useMemo)(() => D(i?.cpf ?? ``), [i]);
  return (0, L.jsxs)(`div`, {
    className: `flex min-h-screen flex-col bg-background`,
    children: [
      (0, L.jsxs)(`header`, {
        className: `relative overflow-hidden bg-brand text-brand-foreground`,
        children: [
          (0, L.jsx)(`div`, {
            className: `absolute inset-0 grid-lines opacity-[0.35]`,
            "aria-hidden": !0,
          }),
          (0, L.jsxs)(`div`, {
            className: `relative mx-auto max-w-3xl px-5 pb-6 pt-6 sm:px-6`,
            children: [
              (0, L.jsxs)(`div`, {
                className: `flex items-center justify-between gap-3`,
                children: [
                  (0, L.jsx)(S, { className: `h-7 w-auto` }),
                  (0, L.jsx)(`span`, {
                    className: `shrink-0 border border-brand-foreground/30 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em]`,
                    children: `Conta digital`,
                  }),
                ],
              }),
              (0, L.jsxs)(`div`, {
                className: `mt-5 flex items-end justify-between gap-3 border-t border-brand-foreground/15 pt-4`,
                children: [
                  (0, L.jsxs)(`p`, {
                    className: `text-sm text-brand-foreground/80`,
                    children: [
                      `Olá,`,
                      ` `,
                      (0, L.jsx)(`strong`, {
                        className: `text-brand-foreground`,
                        children: B(i?.nome ?? ``) || `cliente`,
                      }),
                    ],
                  }),
                  (0, L.jsxs)(`p`, {
                    className: `shrink-0 text-right text-[10px] uppercase leading-tight tracking-[0.18em] text-brand-foreground/60`,
                    children: [`Ag. 0001`, (0, L.jsx)(`br`, {}), `Conta `, j],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, L.jsxs)(`main`, {
        className: `mx-auto w-full max-w-3xl flex-1 px-5 pb-12 pt-5 sm:px-6`,
        children: [
          (0, L.jsx)(`div`, {
            className: `h-2 rule-accent`,
            "aria-hidden": !0,
          }),
          (0, L.jsxs)(`div`, {
            className: `border border-border border-t-0 bg-card p-5 text-card-foreground shadow-[0_20px_45px_-32px_rgba(0,0,0,0.45)]`,
            children: [
              (0, L.jsxs)(`div`, {
                className: `flex items-center justify-between`,
                children: [
                  (0, L.jsx)(`span`, {
                    className: `text-[11px] font-bold uppercase tracking-[0.2em] text-primary`,
                    children: `Saldo disponível`,
                  }),
                  (0, L.jsx)(`button`, {
                    type: `button`,
                    onClick: () => l((e) => !e),
                    "aria-label": c ? `Ocultar saldo` : `Mostrar saldo`,
                    className: `text-muted-foreground`,
                    children: c
                      ? (0, L.jsx)(f, { className: `h-4 w-4` })
                      : (0, L.jsx)(d, { className: `h-4 w-4` }),
                  }),
                ],
              }),
              (0, L.jsx)(`p`, {
                className: `mt-2 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl`,
                children: c ? T(t.valor) : `R$ ••••••`,
              }),
              (0, L.jsxs)(`p`, {
                className: `mt-2 flex items-center gap-2 text-xs font-semibold text-muted-foreground`,
                children: [
                  (0, L.jsx)(x, { className: `h-3.5 w-3.5 text-accent` }),
                  `Crédito aprovado · `,
                  t.parcelas,
                  `x de `,
                  T(t.parcela),
                ],
              }),
              (0, L.jsxs)(`button`, {
                type: `button`,
                onClick: () => m(!0),
                className: `mt-5 flex w-full items-center justify-center gap-2 bg-primary px-6 py-3.5 text-sm font-extrabold uppercase tracking-[0.18em] text-primary-foreground transition hover:brightness-110`,
                children: [
                  `Enviar por Pix`,
                  (0, L.jsx)(s, { className: `h-4 w-4` }),
                ],
              }),
            ],
          }),
          (0, L.jsxs)(`div`, {
            className: `mt-5 grid grid-cols-4 gap-2`,
            children: [
              (0, L.jsx)(H, {
                icone: (0, L.jsx)(x, { className: `h-5 w-5` }),
                rotulo: `Pix`,
                onClick: () => m(!0),
              }),
              (0, L.jsx)(H, {
                icone: (0, L.jsx)(O, { className: `h-5 w-5` }),
                rotulo: `Pagar`,
              }),
              (0, L.jsx)(H, {
                icone: (0, L.jsx)(A, { className: `h-5 w-5` }),
                rotulo: `Cartão`,
                onClick: () => E(!0),
              }),
              (0, L.jsx)(H, {
                icone: (0, L.jsx)(p, { className: `h-5 w-5` }),
                rotulo: `Extrato`,
              }),
            ],
          }),
          (0, L.jsxs)(`section`, {
            className: `mt-6`,
            children: [
              (0, L.jsx)(`h2`, {
                className: `text-[11px] font-bold uppercase tracking-[0.22em] text-primary`,
                children: `Cartão de débito virtual`,
              }),
              (0, L.jsxs)(`div`, {
                className: `mt-3 border border-border bg-card p-4`,
                children: [
                  (0, L.jsxs)(`div`, {
                    className: `relative overflow-hidden bg-brand p-4 text-brand-foreground`,
                    children: [
                      (0, L.jsx)(`div`, {
                        className: `absolute inset-0 grid-lines opacity-30`,
                        "aria-hidden": !0,
                      }),
                      (0, L.jsxs)(`div`, {
                        className: `relative flex items-start justify-between`,
                        children: [
                          (0, L.jsx)(S, { className: `h-5 w-auto` }),
                          (0, L.jsx)(`span`, {
                            className: `text-[10px] font-bold uppercase tracking-[0.2em] text-accent`,
                            children: `Débito virtual`,
                          }),
                        ],
                      }),
                      (0, L.jsx)(`p`, {
                        className: `relative mt-6 whitespace-nowrap font-mono text-sm font-bold tracking-[0.18em]`,
                        children: `••••\xA0••••\xA0••••\xA04412`,
                      }),
                      (0, L.jsx)(`p`, {
                        className: `relative mt-2 truncate text-[11px] uppercase tracking-[0.18em] text-brand-foreground/80`,
                        children: i?.nome || `Titular da conta`,
                      }),
                    ],
                  }),
                  (0, L.jsxs)(`button`, {
                    type: `button`,
                    onClick: () => E(!0),
                    className: `mt-3 flex w-full items-center justify-center gap-2 border border-border px-5 py-3 text-xs font-extrabold uppercase tracking-[0.18em] text-primary`,
                    children: [
                      (0, L.jsx)(M, { className: `h-4 w-4` }),
                      `Adicionar ao Apple Pay / Google Pay`,
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, L.jsxs)(`section`, {
            className: `mt-6`,
            children: [
              (0, L.jsx)(`h2`, {
                className: `text-[11px] font-bold uppercase tracking-[0.22em] text-primary`,
                children: `Serviços da conta`,
              }),
              (0, L.jsxs)(`div`, {
                className: `mt-3 divide-y divide-border border border-border bg-card`,
                children: [
                  (0, L.jsx)(U, {
                    icone: (0, L.jsx)(x, { className: `h-4 w-4` }),
                    titulo: `Área Pix`,
                    descricao: `Enviar, receber e cadastrar chaves`,
                    onClick: () => m(!0),
                  }),
                  (0, L.jsx)(U, {
                    icone: (0, L.jsx)(O, { className: `h-4 w-4` }),
                    titulo: `Pagamento de contas`,
                    descricao: `Boletos, tributos e recargas`,
                  }),
                  (0, L.jsx)(U, {
                    icone: (0, L.jsx)(k, { className: `h-4 w-4` }),
                    titulo: `Transferência TED`,
                    descricao: `Para qualquer banco em dias úteis`,
                  }),
                  (0, L.jsx)(U, {
                    icone: (0, L.jsx)(_, { className: `h-4 w-4` }),
                    titulo: `CAIXA Mais`,
                    descricao: `Cashback e benefícios exclusivos`,
                  }),
                ],
              }),
            ],
          }),
          (0, L.jsx)(`p`, {
            className: `mt-6 text-center text-xs leading-relaxed text-muted-foreground`,
            children: `O valor liberado está disponível para saque imediato via Pix na sua conta de preferência.`,
          }),
        ],
      }),
      (0, L.jsx)(C, {}),
      (0, L.jsx)(W, {
        aberto: u,
        onFechar: () => m(!1),
        valor: t.valor,
        cliente: i,
        onConcluir: () => void e({ to: `/seguro` }),
      }),
      (0, L.jsx)(y, {
        open: b,
        onOpenChange: E,
        children: (0, L.jsxs)(v, {
          className: `max-w-sm`,
          children: [
            (0, L.jsx)(g, {
              children: (0, L.jsx)(h, {
                className: `text-primary`,
                children: `Carteira digital`,
              }),
            }),
            (0, L.jsx)(`p`, {
              className: `text-sm leading-relaxed text-muted-foreground`,
              children: `Para adicionar o cartão ao Apple Pay ou Google Pay, finalize primeiro o resgate do seu crédito via Pix. Depois a carteira é liberada automaticamente.`,
            }),
            (0, L.jsx)(`button`, {
              type: `button`,
              onClick: () => {
                (E(!1), m(!0));
              },
              className: `mt-2 flex w-full items-center justify-center gap-2 bg-primary px-5 py-3 text-xs font-extrabold uppercase tracking-[0.18em] text-primary-foreground`,
              children: `Resgatar via Pix`,
            }),
          ],
        }),
      }),
    ],
  });
}
function H({ icone: e, rotulo: t, onClick: n }) {
  return (0, L.jsxs)(`button`, {
    type: `button`,
    onClick: n,
    className: `flex flex-col items-center gap-2 border border-border bg-card px-2 py-3 text-primary transition hover:bg-brand-soft`,
    children: [
      e,
      (0, L.jsx)(`span`, {
        className: `text-[10px] font-bold uppercase tracking-[0.14em]`,
        children: t,
      }),
    ],
  });
}
function U({ icone: e, titulo: t, descricao: n, onClick: r }) {
  return (0, L.jsxs)(`button`, {
    type: `button`,
    onClick: r,
    className: `flex w-full items-center gap-3 px-4 py-3.5 text-left transition hover:bg-brand-soft`,
    children: [
      (0, L.jsx)(`span`, {
        className: `grid h-9 w-9 shrink-0 place-items-center bg-brand-soft text-primary`,
        children: e,
      }),
      (0, L.jsxs)(`span`, {
        className: `min-w-0 flex-1`,
        children: [
          (0, L.jsx)(`span`, {
            className: `block text-sm font-bold text-foreground`,
            children: t,
          }),
          (0, L.jsx)(`span`, {
            className: `block truncate text-xs text-muted-foreground`,
            children: n,
          }),
        ],
      }),
      (0, L.jsx)(l, { className: `h-4 w-4 shrink-0 text-muted-foreground` }),
    ],
  });
}
function W({ aberto: e, onFechar: t, valor: n, cliente: r, onConcluir: a }) {
  let [o, l] = (0, N.useState)(null),
    [d, f] = (0, N.useState)(``),
    [p, _] = (0, N.useState)(null),
    [x, S] = (0, N.useState)(!1),
    [C, w] = (0, N.useState)(``),
    [E, D] = (0, N.useState)(null),
    [O, k] = (0, N.useState)(!1),
    [A, M] = (0, N.useState)(0),
    P = (0, N.useRef)([]),
    F = (0, N.useMemo)(() => I(C).slice(0, 40), [C]);
  ((0, N.useEffect)(() => {
    e || (l(null), f(``), _(null), w(``), S(!1), D(null), k(!1), M(0));
  }, [e]),
    (0, N.useEffect)(
      () => () => P.current.forEach((e) => window.clearTimeout(e)),
      [],
    ));
  function z(e) {
    (l(e),
      D(null),
      e === `cpf` && r?.cpf
        ? f(i(r.cpf))
        : e === `telefone` && r?.telefone
          ? f(r.telefone)
          : e === `email` && r?.email
            ? f(r.email)
            : f(``));
  }
  function B() {
    if (!o) return D(`Escolha o tipo de chave Pix.`);
    if (d.trim().length < 5) return D(`Informe uma chave Pix válida.`);
    if (!p) return D(`Selecione o banco de destino.`);
    (D(null),
      k(!0),
      (P.current = [
        window.setTimeout(() => M(1), 1200),
        window.setTimeout(() => M(2), 2500),
        window.setTimeout(() => M(3), 3800),
        window.setTimeout(a, 5e3),
      ]));
  }
  let V = [
    `Validando chave Pix...`,
    `Conferindo banco de destino...`,
    `Autorizando liberação do crédito...`,
    `Processando saque...`,
  ];
  return (0, L.jsx)(y, {
    open: e,
    onOpenChange: (e) => (!e && !O ? t() : void 0),
    children: (0, L.jsxs)(v, {
      className: `max-h-[90vh] max-w-md overflow-y-auto p-0`,
      children: [
        (0, L.jsx)(`div`, {
          className: `h-1.5 rule-accent`,
          "aria-hidden": !0,
        }),
        (0, L.jsxs)(`div`, {
          className: `p-5`,
          children: [
            (0, L.jsx)(g, {
              children: (0, L.jsx)(h, {
                className: `text-left text-xl font-extrabold text-primary`,
                children: O ? `Processando saque` : `Resgatar via Pix`,
              }),
            }),
            O
              ? (0, L.jsxs)(`div`, {
                  className: `mt-5`,
                  children: [
                    (0, L.jsxs)(`p`, {
                      className: `text-sm text-muted-foreground`,
                      children: [
                        `Enviando `,
                        (0, L.jsx)(`strong`, {
                          className: `text-foreground`,
                          children: T(n),
                        }),
                        ` para`,
                        ` `,
                        (0, L.jsx)(`strong`, {
                          className: `text-foreground`,
                          children: p?.nome,
                        }),
                        `.`,
                      ],
                    }),
                    (0, L.jsx)(`ul`, {
                      className: `mt-4 space-y-2.5`,
                      children: V.map((e, t) =>
                        (0, L.jsxs)(
                          `li`,
                          {
                            className: `flex items-center gap-2 text-sm`,
                            children: [
                              t < A
                                ? (0, L.jsx)(u, {
                                    className: `h-4 w-4 shrink-0 text-primary`,
                                  })
                                : t === A
                                  ? (0, L.jsx)(m, {
                                      className: `h-4 w-4 shrink-0 animate-spin text-primary`,
                                    })
                                  : (0, L.jsx)(`span`, {
                                      className: `h-4 w-4 shrink-0 rounded-full border border-border`,
                                    }),
                              (0, L.jsx)(`span`, {
                                className:
                                  t <= A
                                    ? `font-semibold text-foreground`
                                    : `text-muted-foreground`,
                                children: e,
                              }),
                            ],
                          },
                          e,
                        ),
                      ),
                    }),
                    (0, L.jsx)(`div`, {
                      className: `mt-5 h-1.5 w-full overflow-hidden bg-muted`,
                      children: (0, L.jsx)(`div`, {
                        className: `h-full bg-accent transition-all duration-700 ease-out`,
                        style: { width: `${((A + 1) / V.length) * 100}%` },
                      }),
                    }),
                  ],
                })
              : (0, L.jsxs)(`div`, {
                  className: `mt-4 space-y-5`,
                  children: [
                    (0, L.jsxs)(`div`, {
                      className: `border border-accent bg-secondary p-3 text-sm text-secondary-foreground`,
                      children: [
                        (0, L.jsx)(`span`, {
                          className: `text-[11px] font-bold uppercase tracking-[0.2em] text-primary`,
                          children: `Valor a enviar`,
                        }),
                        (0, L.jsx)(`p`, {
                          className: `mt-1 text-2xl font-extrabold text-primary`,
                          children: T(n),
                        }),
                      ],
                    }),
                    (0, L.jsxs)(`div`, {
                      children: [
                        (0, L.jsx)(`span`, {
                          className: `text-[11px] font-bold uppercase tracking-[0.2em] text-primary`,
                          children: `Tipo de chave Pix`,
                        }),
                        (0, L.jsx)(`div`, {
                          className: `mt-2 grid grid-cols-2 gap-2`,
                          children: R.map((e) =>
                            (0, L.jsxs)(
                              `button`,
                              {
                                type: `button`,
                                onClick: () => z(e.id),
                                className: `flex items-center justify-between gap-2 border px-3 py-2.5 text-left text-sm font-bold transition ${o === e.id ? `border-primary bg-brand-soft text-primary` : `border-border text-foreground`}`,
                                children: [
                                  e.nome,
                                  o === e.id
                                    ? (0, L.jsx)(c, { className: `h-4 w-4` })
                                    : null,
                                ],
                              },
                              e.id,
                            ),
                          ),
                        }),
                      ],
                    }),
                    o
                      ? (0, L.jsxs)(`div`, {
                          children: [
                            (0, L.jsx)(`label`, {
                              htmlFor: `pix-chave`,
                              className: `text-[11px] font-bold uppercase tracking-[0.2em] text-primary`,
                              children: `Sua chave`,
                            }),
                            (0, L.jsx)(`input`, {
                              id: `pix-chave`,
                              value: d,
                              onChange: (e) => f(e.target.value),
                              placeholder: R.find((e) => e.id === o)?.exemplo,
                              className: `mt-2 w-full border border-border bg-background px-3 py-3 text-sm font-semibold text-foreground outline-none focus:border-primary`,
                            }),
                          ],
                        })
                      : null,
                    (0, L.jsxs)(`div`, {
                      children: [
                        (0, L.jsx)(`span`, {
                          className: `text-[11px] font-bold uppercase tracking-[0.2em] text-primary`,
                          children: `Banco de destino`,
                        }),
                        (0, L.jsxs)(`div`, {
                          className: `mt-2 flex items-center gap-2 border border-border bg-background px-3 py-3 focus-within:border-primary`,
                          children: [
                            (0, L.jsx)(j, {
                              className: `h-4 w-4 shrink-0 text-muted-foreground`,
                            }),
                            (0, L.jsx)(`input`, {
                              value: C,
                              onChange: (e) => {
                                (w(e.target.value), S(!0), D(null));
                              },
                              onFocus: () => S(!0),
                              placeholder: p
                                ? `${p.codigo} · ${p.nome}`
                                : `Digite o nome do banco`,
                              "aria-label": `Buscar banco de destino`,
                              className: `w-full bg-transparent text-sm font-semibold outline-none ${p && !C ? `placeholder:text-foreground` : `placeholder:text-muted-foreground`}`,
                            }),
                            C
                              ? (0, L.jsx)(`button`, {
                                  type: `button`,
                                  onClick: () => w(``),
                                  "aria-label": `Limpar busca`,
                                  children: (0, L.jsx)(b, {
                                    className: `h-4 w-4 text-muted-foreground`,
                                  }),
                                })
                              : null,
                          ],
                        }),
                        x
                          ? (0, L.jsx)(`div`, {
                              className: `mt-2 border border-border bg-card`,
                              children: (0, L.jsx)(`ul`, {
                                className: `max-h-56 overflow-y-auto`,
                                children:
                                  F.length === 0
                                    ? (0, L.jsx)(`li`, {
                                        className: `px-3 py-4 text-sm text-muted-foreground`,
                                        children: `Nenhum banco encontrado.`,
                                      })
                                    : F.map((e) =>
                                        (0, L.jsx)(
                                          `li`,
                                          {
                                            children: (0, L.jsxs)(`button`, {
                                              type: `button`,
                                              onClick: () => {
                                                (_(e), S(!1), w(``), D(null));
                                              },
                                              className: `flex w-full items-center gap-3 px-3 py-2.5 text-left text-sm transition hover:bg-brand-soft`,
                                              children: [
                                                (0, L.jsx)(`span`, {
                                                  className: `w-9 shrink-0 text-[11px] font-bold text-muted-foreground`,
                                                  children: e.codigo,
                                                }),
                                                (0, L.jsx)(`span`, {
                                                  className: `truncate font-semibold text-foreground`,
                                                  children: e.nome,
                                                }),
                                              ],
                                            }),
                                          },
                                          e.codigo,
                                        ),
                                      ),
                              }),
                            })
                          : null,
                      ],
                    }),
                    E
                      ? (0, L.jsx)(`p`, {
                          role: `alert`,
                          className: `border-l-4 border-destructive bg-destructive/10 px-3 py-2 text-sm font-semibold text-destructive`,
                          children: E,
                        })
                      : null,
                    (0, L.jsxs)(`button`, {
                      type: `button`,
                      onClick: B,
                      className: `flex w-full items-center justify-center gap-2 bg-primary px-6 py-3.5 text-sm font-extrabold uppercase tracking-[0.18em] text-primary-foreground transition hover:brightness-110`,
                      children: [
                        `Processar saque`,
                        (0, L.jsx)(s, { className: `h-4 w-4` }),
                      ],
                    }),
                  ],
                }),
          ],
        }),
      ],
    }),
  });
}
export { V as component };
