import { n as e } from "./rolldown-runtime-Bh1tDfsg.js";
import { i as t, r as n } from "./useRouter-mso78Z2_.js";
import { t as r } from "./link-Bn7c8ZsQ.js";
import { E as i, a as _fbTrack } from "./index-D7YfpSEV.js";
import { t as a } from "./SiteHeader-CvY4eR3J.js";
import { t as o } from "./SiteFooter-g8x5i3HV.js";
var s = e(t()),
  c = n(),
  l = (e) => e.replace(/\D/g, ``),
  u = (e) =>
    l(e)
      .slice(0, 11)
      .replace(/(\d{3})(\d)/, `$1.$2`)
      .replace(/(\d{3})(\d)/, `$1.$2`)
      .replace(/(\d{3})(\d{1,2})$/, `$1-$2`),
  d = `mt-2 w-full border border-border bg-card px-4 py-3 text-base text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20`,
  f = `text-xs font-bold uppercase tracking-[0.18em] text-primary`;
function p() {
  let e = i(),
    [t, n] = (0, s.useState)(!1),
    [l, p] = (0, s.useState)({ cpf: `` }),
    m = (e) => (t) => p((n) => ({ ...n, [e]: t }));
  return (0, c.jsxs)(`div`, {
    className: `min-h-screen bg-background`,
    children: [
      (0, c.jsx)(a, {}),
      (0, c.jsxs)(`section`, {
        className: `relative overflow-hidden bg-brand text-brand-foreground`,
        children: [
          (0, c.jsx)(`div`, {
            className: `absolute inset-0 grid-lines opacity-[0.35]`,
            "aria-hidden": !0,
          }),
          (0, c.jsx)(`div`, {
            className: `absolute -right-24 top-6 hidden h-[360px] w-[360px] rotate-12 border-[14px] border-accent/25 lg:block`,
            "aria-hidden": !0,
          }),
          (0, c.jsxs)(`div`, {
            className: `relative mx-auto max-w-6xl px-5 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14`,
            children: [
              (0, c.jsx)(`p`, {
                className: `inline-flex items-center gap-3 border-l-4 border-accent pl-3 text-[11px] font-bold uppercase tracking-[0.28em]`,
                children: `Etapa 1 de 3 · Seu CPF`,
              }),
              (0, c.jsxs)(`h1`, {
                className: `mt-5 max-w-2xl text-4xl font-extrabold leading-[0.95] sm:text-5xl`,
                children: [
                  `Comece informando`,
                  (0, c.jsx)(`br`, {}),
                  (0, c.jsx)(`span`, {
                    className: `text-accent`,
                    children: `apenas`,
                  }),
                  ` o seu CPF.`,
                ],
              }),
              (0, c.jsx)(`p`, {
                className: `mt-5 max-w-md text-sm leading-relaxed text-brand-foreground/80 sm:text-base`,
                children: `Nenhum outro dado é necessário nesta etapa. O CPF é usado apenas para localizar as condições de crédito disponíveis, com proteção conforme a LGPD.`,
              }),
              (0, c.jsxs)(`div`, {
                className: `mt-8 flex items-center gap-2`,
                "aria-hidden": !0,
                children: [
                  (0, c.jsx)(`span`, { className: `h-1.5 flex-1 bg-accent` }),
                  (0, c.jsx)(`span`, {
                    className: `h-1.5 flex-1 bg-brand-foreground/20`,
                  }),
                  (0, c.jsx)(`span`, {
                    className: `h-1.5 flex-1 bg-brand-foreground/20`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, c.jsx)(`div`, {
        className: `border-y border-border bg-brand-soft`,
        children: (0, c.jsxs)(`div`, {
          className: `mx-auto grid max-w-6xl grid-cols-3 divide-x divide-border px-5 text-center text-[10px] font-bold uppercase leading-tight tracking-[0.16em] text-primary sm:px-6 sm:text-[11px] sm:tracking-[0.22em]`,
          children: [
            (0, c.jsx)(`span`, {
              className: `px-2 py-3 sm:py-4`,
              children: `Sem custo`,
            }),
            (0, c.jsx)(`span`, {
              className: `px-2 py-3 sm:py-4`,
              children: `Sem compromisso`,
            }),
            (0, c.jsx)(`span`, {
              className: `px-2 py-3 sm:py-4`,
              children: `Dados protegidos (LGPD)`,
            }),
          ],
        }),
      }),
      (0, c.jsx)(`section`, {
        className: `mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16`,
        children: (0, c.jsxs)(`div`, {
          className: `grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14`,
          children: [
            (0, c.jsxs)(`div`, {
              children: [
                (0, c.jsx)(`div`, {
                  className: `h-2 rule-accent`,
                  "aria-hidden": !0,
                }),
                (0, c.jsx)(`div`, {
                  className: `bg-card p-6 text-card-foreground shadow-[0_30px_60px_-35px_rgba(0,0,0,0.5)] sm:p-8`,
                  children: t
                    ? (0, c.jsxs)(`div`, {
                        children: [
                          (0, c.jsx)(`span`, {
                            className: `inline-block bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-accent-foreground`,
                            children: `Cadastro recebido`,
                          }),
                          (0, c.jsx)(`h2`, {
                            className: `mt-4 text-2xl font-extrabold text-primary sm:text-3xl`,
                            children: `CPF recebido. Vamos consultar suas condições.`,
                          }),
                          (0, c.jsx)(`p`, {
                            className: `mt-3 text-sm leading-relaxed text-muted-foreground`,
                            children: `Estamos verificando as ofertas disponíveis para o CPF informado. Em instantes você segue para a próxima etapa da solicitação.`,
                          }),
                          (0, c.jsx)(`div`, {
                            className: `mt-6 border-t border-dashed border-border pt-5 text-sm`,
                            children: (0, c.jsxs)(`p`, {
                              className: `flex items-center justify-between py-1`,
                              children: [
                                (0, c.jsx)(`span`, {
                                  className: `text-muted-foreground`,
                                  children: `CPF informado`,
                                }),
                                (0, c.jsx)(`strong`, {
                                  children: l.cpf || `—`,
                                }),
                              ],
                            }),
                          }),
                          (0, c.jsx)(r, {
                            to: `/inicio`,
                            className: `mt-6 block bg-primary py-4 text-center text-sm font-extrabold uppercase tracking-widest text-primary-foreground transition hover:brightness-110`,
                            children: `Voltar ao início`,
                          }),
                        ],
                      })
                    : (0, c.jsxs)(`form`, {
                        onSubmit: (t) => {
                          (t.preventDefault(),
                            _fbTrack(`Lead`, { content_name: `CPF Cadastro` }, `lead_cadastro_cpf`),
                            window.scrollTo({ top: 0 }),
                            e({
                              to: `/confirmacao`,
                              search: { cpf: l.cpf, email: `` },
                            }));
                        },
                        children: [
                          (0, c.jsx)(`p`, {
                            className: `text-[11px] font-bold uppercase tracking-[0.24em] text-muted-foreground`,
                            children: `Consulta por CPF`,
                          }),
                          (0, c.jsx)(`h2`, {
                            className: `mt-3 text-2xl font-extrabold text-primary sm:text-3xl`,
                            children: `Informe o seu CPF`,
                          }),
                          (0, c.jsx)(`p`, {
                            className: `mt-3 text-sm leading-relaxed text-muted-foreground`,
                            children: `É o único dado necessário agora. Usamos o CPF apenas para localizar as condições de crédito disponíveis para você.`,
                          }),
                          (0, c.jsxs)(`div`, {
                            className: `mt-7`,
                            children: [
                              (0, c.jsx)(`label`, {
                                htmlFor: `cpf`,
                                className: f,
                                children: `CPF`,
                              }),
                              (0, c.jsx)(`input`, {
                                id: `cpf`,
                                name: `cpf`,
                                required: !0,
                                autoFocus: !0,
                                inputMode: `numeric`,
                                pattern: `\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}`,
                                title: `Digite os 11 números do CPF`,
                                placeholder: `000.000.000-00`,
                                value: l.cpf,
                                onChange: (e) => m(`cpf`)(u(e.target.value)),
                                className: `${d} text-center text-xl font-bold tracking-[0.12em]`,
                              }),
                            ],
                          }),
                          (0, c.jsxs)(`label`, {
                            className: `mt-6 flex items-start gap-3 border-t border-dashed border-border pt-5 text-xs leading-relaxed text-muted-foreground`,
                            children: [
                              (0, c.jsx)(`input`, {
                                type: `checkbox`,
                                required: !0,
                                className: `mt-0.5 h-4 w-4 shrink-0 accent-[var(--primary)]`,
                              }),
                              (0, c.jsx)(`span`, {
                                children: `Autorizo a consulta dos meus dados para análise de crédito, conforme a Política de Privacidade e a LGPD.`,
                              }),
                            ],
                          }),
                          (0, c.jsx)(`button`, {
                            type: `submit`,
                            className: `mt-7 w-full bg-primary py-4 text-sm font-extrabold uppercase tracking-widest text-primary-foreground transition hover:brightness-110`,
                            children: `Consultar meu CPF`,
                          }),
                          (0, c.jsx)(`p`, {
                            className: `mt-3 text-[11px] leading-relaxed text-muted-foreground`,
                            children: `Crédito sujeito a análise e aprovação. CET informado no ato da contratação. A Caixa não cobra taxa antecipada para liberar crédito.`,
                          }),
                        ],
                      }),
                }),
              ],
            }),
            (0, c.jsxs)(`aside`, {
              className: `lg:pt-8`,
              children: [
                (0, c.jsx)(`p`, {
                  className: `text-[11px] font-bold uppercase tracking-[0.28em] text-accent`,
                  children: `O que acontece agora`,
                }),
                (0, c.jsxs)(`h2`, {
                  className: `mt-3 text-2xl font-extrabold sm:text-3xl`,
                  children: [
                    `Três passos até `,
                    (0, c.jsx)(`span`, {
                      className: `text-primary`,
                      children: `o dinheiro na conta`,
                    }),
                  ],
                }),
                (0, c.jsx)(`div`, { className: `mt-4 h-1 w-24 bg-accent` }),
                (0, c.jsx)(`ol`, {
                  className: `mt-8 divide-y divide-border border-y border-border`,
                  children: [
                    [
                      `CPF`,
                      `Você informa apenas o seu CPF nesta página. Leva alguns segundos.`,
                    ],
                    [
                      `Análise`,
                      `Nosso time confere as informações e valida as condições do seu crédito.`,
                    ],
                    [
                      `Liberação`,
                      `Aprovado, o valor cai na sua conta ou no Cartão Pré-Pago Caixa.`,
                    ],
                  ].map(([e, t], n) =>
                    (0, c.jsxs)(
                      `li`,
                      {
                        className: `flex gap-5 py-5`,
                        children: [
                          (0, c.jsx)(`span`, {
                            className: `font-display text-sm font-extrabold text-accent`,
                            children: String(n + 1).padStart(2, `0`),
                          }),
                          (0, c.jsxs)(`div`, {
                            children: [
                              (0, c.jsx)(`h3`, {
                                className: `text-base font-extrabold text-primary`,
                                children: e,
                              }),
                              (0, c.jsx)(`p`, {
                                className: `mt-1 text-sm leading-relaxed text-muted-foreground`,
                                children: t,
                              }),
                            ],
                          }),
                        ],
                      },
                      e,
                    ),
                  ),
                }),
                (0, c.jsxs)(`div`, {
                  className: `mt-8 border-l-4 border-accent bg-secondary p-5`,
                  children: [
                    (0, c.jsx)(`h3`, {
                      className: `text-xs font-extrabold uppercase tracking-[0.2em] text-primary`,
                      children: `Seus dados estão seguros`,
                    }),
                    (0, c.jsx)(`p`, {
                      className: `mt-3 text-sm leading-relaxed text-secondary-foreground`,
                      children: `As informações enviadas são utilizadas exclusivamente para a análise do seu empréstimo pessoal e tratadas conforme a Lei Geral de Proteção de Dados.`,
                    }),
                    (0, c.jsx)(`a`, {
                      href: `tel:08007038891`,
                      className: `mt-5 inline-flex w-full items-center justify-center bg-primary px-6 py-3 text-xs font-extrabold uppercase tracking-[0.18em] text-primary-foreground transition hover:brightness-110 sm:w-auto`,
                      children: `Ouvidoria 0800 703 8891`,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      (0, c.jsx)(`section`, {
        className: `bg-brand py-14 text-brand-foreground`,
        children: (0, c.jsxs)(`div`, {
          className: `mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-6`,
          children: [
            (0, c.jsxs)(`h2`, {
              className: `max-w-xl text-2xl font-extrabold sm:text-4xl`,
              children: [
                `Quer revisar os valores antes?`,
                ` `,
                (0, c.jsx)(`span`, {
                  className: `text-accent`,
                  children: `Volte e simule de novo.`,
                }),
              ],
            }),
            (0, c.jsx)(r, {
              to: `/inicio`,
              hash: `simular`,
              className: `bg-accent px-8 py-4 text-sm font-extrabold uppercase tracking-widest text-accent-foreground transition hover:brightness-95`,
              children: `Refazer simulação`,
            }),
          ],
        }),
      }),
      (0, c.jsx)(o, {}),
    ],
  });
}
export { p as component };
