import { n as e } from "./rolldown-runtime-Bh1tDfsg.js";
import { i as t, r as n } from "./useRouter-mso78Z2_.js";
import { E as r } from "./index-D7YfpSEV.js";
import { t as i } from "./createLucideIcon-BADXV0dg.js";
import { t as a } from "./check-KYebtdKP.js";
import { t as o } from "./lock-w9MAkRNm.js";
import { t as s } from "./shield-check-CkXNnzOD.js";
import { t as c } from "./star-Crl8SEcH.js";
import { t as l } from "./zap-Daz-z7HS.js";
import { t as u } from "./SiteHeader-CvY4eR3J.js";
import { t as d } from "./SiteFooter-g8x5i3HV.js";
import { n as f, r as p } from "./proposta-D6Emn9RU.js";
import { t as m } from "./cotacao-CRwZ4Qxg.js";
import { n as h } from "./pedido-DrraKY8E.js";
import {
  i as g,
  n as _,
  r as v,
  t as y,
} from "./review-marcos.png.asset-DCGLfQVE.js";
var b = i(`plus`, [
    [`path`, { d: `M5 12h14`, key: `1ays0h` }],
    [`path`, { d: `M12 5v14`, key: `s699le` }],
  ]),
  x = i(`qr-code`, [
    [
      `rect`,
      { width: `5`, height: `5`, x: `3`, y: `3`, rx: `1`, key: `1tu5fj` },
    ],
    [
      `rect`,
      { width: `5`, height: `5`, x: `16`, y: `3`, rx: `1`, key: `1v8r4q` },
    ],
    [
      `rect`,
      { width: `5`, height: `5`, x: `3`, y: `16`, rx: `1`, key: `1x03jg` },
    ],
    [`path`, { d: `M21 16h-3a2 2 0 0 0-2 2v3`, key: `177gqh` }],
    [`path`, { d: `M21 21v.01`, key: `ents32` }],
    [`path`, { d: `M12 7v3a2 2 0 0 1-2 2H7`, key: `8crl2c` }],
    [`path`, { d: `M3 12h.01`, key: `nlz23k` }],
    [`path`, { d: `M12 3h.01`, key: `n36tog` }],
    [`path`, { d: `M12 16v.01`, key: `133mhm` }],
    [`path`, { d: `M16 12h1`, key: `1slzba` }],
    [`path`, { d: `M21 12v.01`, key: `1lwtk9` }],
    [`path`, { d: `M12 21v-1`, key: `1880an` }],
  ]),
  S = e(t()),
  C = n(),
  w = `/media/allianz-logo.jpg`,
  T = { valor: 4655, parcelas: 12, parcela: p(4655, 12), seguro: 29.9 },
  E = [
    {
      id: `cartao`,
      titulo: `Cartão de crédito Caixa`,
      desc: `Limite de R$ 2.000, sem anuidade no 1º ano`,
      preco: 19,
      img: `https://www.crefisa.com.br/wp-content/uploads/2020/10/260_x_270px_Cartao-Multiplo.png`,
    },
    {
      id: `credito`,
      titulo: `Aumento de Crédito +R$ 5.000`,
      desc: `R$ 5.000 a mais direto na sua conta`,
      preco: 22,
      img: `/media/badge-6475919.webp`,
    },
    {
      id: `suporte`,
      titulo: `Suporte Exclusivo 24h`,
      desc: `Atendimento prioritário 24h/7d no WhatsApp`,
      preco: 9,
      img: `/media/vip-badge.png`,
    },
  ],
  D = [
    {
      nome: `Roberto M.`,
      cidade: `São Paulo, SP`,
      foto: g.url,
      texto: `Paguei e caiu em 7 minutos. É real!`,
    },
    {
      nome: `Ana Paula`,
      cidade: `Belo Horizonte, MG`,
      foto: v.url,
      texto: `Excelente atendimento. Só acreditei quando vi o Pix. Vale a pena.`,
    },
    {
      nome: `Juliana S.`,
      cidade: `Fortaleza, CE`,
      foto: _.url,
      texto: `Estava atolada em dívida e sem saída. Consegui resolver tudo aqui, recomendo demais gente.`,
    },
    {
      nome: `Marcos Vinícius`,
      cidade: `Curitiba, PR`,
      foto: y.url,
      texto: `Processo simples e o contrato veio tudo detalhado. Seguro reembolsado no final.`,
    },
  ];
function O() {
  let e = r(),
    [t, n] = (0, S.useState)(null),
    [i, p] = (0, S.useState)([]),
    [g, _] = (0, S.useState)(!1);
  (0, S.useEffect)(() => {
    n(m() ?? T);
  }, []);
  let v = t ?? T,
    y = (0, S.useMemo)(
      () =>
        v.seguro +
        E.filter((e) => i.includes(e.id)).reduce((e, t) => e + t.preco, 0),
      [v.seguro, i],
    ),
    O = (e) => p((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
  return (0, C.jsxs)(`div`, {
    className: `flex min-h-screen flex-col bg-background`,
    children: [
      (0, C.jsx)(u, {}),
      (0, C.jsxs)(`section`, {
        className: `relative overflow-hidden bg-brand text-brand-foreground`,
        children: [
          (0, C.jsx)(`div`, {
            className: `absolute inset-0 grid-lines opacity-[0.35]`,
            "aria-hidden": !0,
          }),
          (0, C.jsxs)(`div`, {
            className: `relative mx-auto max-w-3xl px-5 pb-9 pt-9 sm:px-6 sm:pb-12 sm:pt-12`,
            children: [
              (0, C.jsx)(`p`, {
                className: `inline-flex items-center gap-3 border-l-4 border-accent pl-3 text-[11px] font-bold uppercase tracking-[0.28em]`,
                children: `Última etapa`,
              }),
              (0, C.jsxs)(`h1`, {
                className: `mt-4 text-3xl font-extrabold leading-[1.05] sm:text-4xl`,
                children: [
                  `Finalize e receba`,
                  (0, C.jsx)(`br`, {}),
                  (0, C.jsx)(`span`, {
                    className: `text-accent`,
                    children: f(v.valor),
                  }),
                  ` via Pix`,
                ],
              }),
              (0, C.jsx)(`p`, {
                className: `mt-3 max-w-lg text-sm leading-relaxed opacity-85`,
                children: `Pagamento único do seguro prestamista. Após a confirmação, o valor cai na sua conta Caixa na hora.`,
              }),
            ],
          }),
        ],
      }),
      (0, C.jsx)(`div`, {
        className: `border-y border-border bg-brand-soft`,
        children: (0, C.jsxs)(`div`, {
          className: `mx-auto grid max-w-3xl grid-cols-3 divide-x divide-border px-5 text-center text-[10px] font-bold uppercase leading-tight tracking-[0.16em] text-primary sm:px-6 sm:text-[11px] sm:tracking-[0.22em]`,
          children: [
            (0, C.jsx)(`span`, {
              className: `px-2 py-3 sm:py-4`,
              children: `Site seguro SSL`,
            }),
            (0, C.jsx)(`span`, {
              className: `px-2 py-3 sm:py-4`,
              children: `LGPD 100%`,
            }),
            (0, C.jsx)(`span`, {
              className: `px-2 py-3 sm:py-4`,
              children: `Pix Banco Central`,
            }),
          ],
        }),
      }),
      (0, C.jsxs)(`main`, {
        className: `mx-auto w-full max-w-3xl flex-1 px-5 py-9 sm:px-6 sm:py-12`,
        children: [
          (0, C.jsx)(`div`, {
            className: `h-2 rule-accent`,
            "aria-hidden": !0,
          }),
          (0, C.jsxs)(`section`, {
            className: `border border-border bg-card p-5 text-card-foreground shadow-[0_30px_60px_-35px_rgba(0,0,0,0.4)] sm:p-6`,
            children: [
              (0, C.jsx)(`h2`, {
                className: `text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground`,
                children: `Resumo do pedido`,
              }),
              (0, C.jsxs)(`div`, {
                className: `mt-4 flex items-start gap-3`,
                children: [
                  (0, C.jsx)(`img`, {
                    src: w,
                    alt: `Allianz Seguros`,
                    className: `h-14 w-14 shrink-0 border border-border object-contain`,
                    loading: `lazy`,
                  }),
                  (0, C.jsxs)(`div`, {
                    className: `min-w-0 flex-1`,
                    children: [
                      (0, C.jsx)(`p`, {
                        className: `text-sm font-extrabold text-primary`,
                        children: `Seguro Prestamista`,
                      }),
                      (0, C.jsxs)(`p`, {
                        className: `mt-0.5 text-xs leading-relaxed text-muted-foreground`,
                        children: [
                          `Crédito de `,
                          f(v.valor),
                          ` em `,
                          v.parcelas,
                          `x de `,
                          f(v.parcela),
                          ` · juros 1,32% a.m.`,
                        ],
                      }),
                    ],
                  }),
                  (0, C.jsx)(`span`, {
                    className: `shrink-0 text-base font-extrabold text-primary`,
                    children: f(v.seguro),
                  }),
                ],
              }),
              (0, C.jsxs)(`div`, {
                className: `mt-4 space-y-2 border-t border-border pt-4 text-sm`,
                children: [
                  (0, C.jsxs)(`div`, {
                    className: `flex items-center justify-between gap-3`,
                    children: [
                      (0, C.jsx)(`span`, {
                        className: `text-muted-foreground`,
                        children: `Seguro Prestamista`,
                      }),
                      (0, C.jsx)(`span`, {
                        className: `font-semibold text-primary`,
                        children: f(v.seguro),
                      }),
                    ],
                  }),
                  E.filter((e) => i.includes(e.id)).map((e) =>
                    (0, C.jsxs)(
                      `div`,
                      {
                        className: `flex items-center justify-between gap-3`,
                        children: [
                          (0, C.jsx)(`span`, {
                            className: `truncate text-muted-foreground`,
                            children: e.titulo,
                          }),
                          (0, C.jsx)(`span`, {
                            className: `shrink-0 font-semibold text-primary`,
                            children: f(e.preco),
                          }),
                        ],
                      },
                      e.id,
                    ),
                  ),
                ],
              }),
              (0, C.jsxs)(`div`, {
                className: `mt-4 flex items-center justify-between border-t-2 border-primary pt-4`,
                children: [
                  (0, C.jsx)(`span`, {
                    className: `text-base font-extrabold text-primary`,
                    children: `Total:`,
                  }),
                  (0, C.jsx)(`span`, {
                    className: `text-2xl font-extrabold text-primary`,
                    children: f(y),
                  }),
                ],
              }),
            ],
          }),
          (0, C.jsxs)(`section`, {
            className: `mt-10`,
            children: [
              (0, C.jsx)(`h2`, {
                className: `text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground`,
                children: `Adicione mais vantagens`,
              }),
              (0, C.jsx)(`div`, {
                className: `mt-4 space-y-3`,
                children: E.map((e) => {
                  let t = i.includes(e.id);
                  return (0, C.jsxs)(
                    `article`,
                    {
                      className: `border-2 bg-card transition ${t ? `border-primary` : `border-border`}`,
                      children: [
                        (0, C.jsxs)(`div`, {
                          className: `flex items-start gap-3 p-4`,
                          children: [
                            (0, C.jsx)(`img`, {
                              src: e.img,
                              alt: e.titulo,
                              className: `h-12 w-12 shrink-0 object-contain`,
                              loading: `lazy`,
                            }),
                            (0, C.jsxs)(`div`, {
                              className: `min-w-0 flex-1`,
                              children: [
                                (0, C.jsx)(`p`, {
                                  className: `text-sm font-extrabold text-primary`,
                                  children: e.titulo,
                                }),
                                (0, C.jsx)(`p`, {
                                  className: `mt-0.5 text-xs leading-relaxed text-muted-foreground`,
                                  children: e.desc,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, C.jsxs)(`div`, {
                          className: `flex items-center justify-between gap-3 border-t border-border bg-brand-soft px-4 py-3`,
                          children: [
                            (0, C.jsxs)(`span`, {
                              className: `text-sm font-extrabold text-primary`,
                              children: [`+`, f(e.preco)],
                            }),
                            (0, C.jsx)(`button`, {
                              type: `button`,
                              onClick: () => O(e.id),
                              "aria-pressed": t,
                              className: `flex items-center gap-1.5 border px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] transition ${t ? `border-primary bg-primary text-primary-foreground` : `border-border bg-card text-primary hover:border-primary`}`,
                              children: t
                                ? (0, C.jsxs)(C.Fragment, {
                                    children: [
                                      (0, C.jsx)(a, {
                                        className: `h-3.5 w-3.5`,
                                      }),
                                      ` Adicionado`,
                                    ],
                                  })
                                : (0, C.jsxs)(C.Fragment, {
                                    children: [
                                      (0, C.jsx)(b, {
                                        className: `h-3.5 w-3.5`,
                                      }),
                                      ` Adicionar`,
                                    ],
                                  }),
                            }),
                          ],
                        }),
                      ],
                    },
                    e.id,
                  );
                }),
              }),
            ],
          }),
          (0, C.jsxs)(`section`, {
            className: `mt-10 border border-border bg-card p-5 sm:p-6`,
            children: [
              (0, C.jsxs)(`div`, {
                className: `flex items-center justify-between gap-3`,
                children: [
                  (0, C.jsx)(`span`, {
                    className: `text-sm font-semibold text-muted-foreground`,
                    children: `Total a pagar`,
                  }),
                  (0, C.jsx)(`span`, {
                    className: `text-2xl font-extrabold text-primary`,
                    children: f(y),
                  }),
                ],
              }),
              (0, C.jsxs)(`p`, {
                className: `mt-1 flex items-center gap-1.5 text-xs font-semibold text-primary`,
                children: [
                  (0, C.jsx)(l, { className: `h-3.5 w-3.5 text-accent` }),
                  ` Liberação imediata via Pix após confirmação`,
                ],
              }),
              (0, C.jsxs)(`button`, {
                type: `button`,
                onClick: () => {
                  _(!0);
                  let t = E.filter((e) => i.includes(e.id)).map(
                    (e) => e.titulo,
                  );
                  (h({
                    total: y,
                    descricao:
                      t.length > 0
                        ? `front + ${t.join(` + `)}`
                        : `front`,
                  }),
                    e({ to: `/pagamento` }));
                },
                disabled: g,
                className: `mt-5 flex w-full items-center justify-center gap-2 bg-accent px-6 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-accent-foreground transition hover:brightness-95 disabled:opacity-70`,
                children: [
                  (0, C.jsx)(x, { className: `h-4 w-4` }),
                  g ? `Gerando Pix...` : `Gerar Pix de ${f(y)}`,
                ],
              }),
              (0, C.jsxs)(`p`, {
                className: `mt-3 flex items-start gap-2 text-[11px] leading-relaxed text-muted-foreground`,
                children: [
                  (0, C.jsx)(o, {
                    className: `mt-0.5 h-3.5 w-3.5 shrink-0 text-primary`,
                  }),
                  `Ambiente criptografado. O valor do seguro é 100% reembolsado após a quitação do empréstimo, conforme cláusula do seu contrato.`,
                ],
              }),
            ],
          }),
          (0, C.jsxs)(`section`, {
            className: `mt-10`,
            children: [
              (0, C.jsxs)(`div`, {
                className: `flex flex-col items-center text-center`,
                children: [
                  (0, C.jsxs)(`span`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, C.jsx)(`span`, {
                        className: `flex gap-0.5`,
                        "aria-label": `4,9 de 5 estrelas`,
                        children: Array.from({ length: 5 }).map((e, t) =>
                          (0, C.jsx)(
                            c,
                            { className: `h-4 w-4 fill-accent text-accent` },
                            t,
                          ),
                        ),
                      }),
                      (0, C.jsx)(`strong`, {
                        className: `text-base font-extrabold text-primary`,
                        children: `4,9/5`,
                      }),
                    ],
                  }),
                  (0, C.jsx)(`p`, {
                    className: `mt-1 text-xs font-semibold text-muted-foreground`,
                    children: `Mais de 120 mil clientes atendidos`,
                  }),
                ],
              }),
              (0, C.jsx)(`div`, {
                className: `mt-5 space-y-3`,
                children: D.map((e) =>
                  (0, C.jsxs)(
                    `article`,
                    {
                      className: `border border-border bg-card p-4`,
                      children: [
                        (0, C.jsxs)(`header`, {
                          className: `flex items-center gap-3`,
                          children: [
                            (0, C.jsx)(`img`, {
                              src: e.foto,
                              alt: `Foto de ${e.nome}, cliente Caixa`,
                              loading: `lazy`,
                              className: `h-10 w-10 shrink-0 rounded-full border border-border object-cover`,
                            }),
                            (0, C.jsxs)(`div`, {
                              className: `min-w-0 flex-1`,
                              children: [
                                (0, C.jsxs)(`span`, {
                                  className: `flex items-center gap-2`,
                                  children: [
                                    (0, C.jsx)(`span`, {
                                      className: `flex gap-0.5`,
                                      "aria-label": `5 estrelas`,
                                      children: Array.from({ length: 5 }).map(
                                        (e, t) =>
                                          (0, C.jsx)(
                                            c,
                                            {
                                              className: `h-3 w-3 fill-accent text-accent`,
                                            },
                                            t,
                                          ),
                                      ),
                                    }),
                                    (0, C.jsxs)(`span`, {
                                      className: `flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.12em] text-primary`,
                                      children: [
                                        (0, C.jsx)(s, { className: `h-3 w-3` }),
                                        ` Perfil verificado`,
                                      ],
                                    }),
                                  ],
                                }),
                                (0, C.jsx)(`p`, {
                                  className: `mt-1 truncate text-sm font-bold text-primary`,
                                  children: e.nome,
                                }),
                                (0, C.jsx)(`p`, {
                                  className: `text-[11px] text-muted-foreground`,
                                  children: e.cidade,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, C.jsxs)(`p`, {
                          className: `mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm`,
                          children: [`“`, e.texto, `”`],
                        }),
                      ],
                    },
                    e.nome,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
      (0, C.jsx)(d, {}),
    ],
  });
}
export { O as component };
