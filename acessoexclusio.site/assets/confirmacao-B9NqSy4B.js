import { n as e } from "./rolldown-runtime-Bh1tDfsg.js";
import { i as t, r as n } from "./useRouter-mso78Z2_.js";
import { t as r } from "./createClientRpc-CEUTKn0_.js";
import { t as i } from "./link-Bn7c8ZsQ.js";
import { t as a } from "./createServerFn-mDhzzglP.js";
import { t as o } from "./useServerFn-BE2ldXn7.js";
import {
  E as s,
  _ as c,
  b as l,
  c as u,
  d,
  f,
  g as p,
  h as m,
  l as ee,
  m as h,
  n as te,
  o as g,
  p as _,
  s as ne,
  u as v,
  v as y,
  x as b,
  y as x,
} from "./index-D7YfpSEV.js";
import { salvarCliente as S } from "./cliente-Cf5BSP97.js";
import { t as re } from "./chevron-down-CkjAFoEr.js";
import { t as ie } from "./SiteHeader-CvY4eR3J.js";
import { t as ae } from "./SiteFooter-g8x5i3HV.js";
import { n as oe, t as se } from "./codigo.functions-B39Nh1qD.js";
var ce = class extends b {
  constructor(e, t) {
    (super(),
      (this.options = t),
      (this.#e = e),
      (this.#s = null),
      (this.#o = ee()),
      this.bindMethods(),
      this.setOptions(t));
  }
  #e;
  #t = void 0;
  #n = void 0;
  #r = void 0;
  #i;
  #a;
  #o;
  #s;
  #c;
  #l;
  #u;
  #d;
  #f;
  #p;
  #m = new Set();
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 &&
      (this.#t.addObserver(this),
      le(this.#t, this.options) ? this.#h() : this.updateResult(),
      this.#y());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return ue(this.#t, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return ue(this.#t, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    ((this.listeners = new Set()),
      this.#b(),
      this.#x(),
      this.#t.removeObserver(this));
  }
  setOptions(e) {
    let t = this.options,
      n = this.#t;
    if (
      ((this.options = this.#e.defaultQueryOptions(e)),
      this.options.enabled !== void 0 &&
        typeof this.options.enabled != `boolean` &&
        typeof this.options.enabled != `function` &&
        typeof h(this.options.enabled, this.#t) != `boolean`)
    )
      throw Error(
        `Expected enabled to be a boolean or a callback that returns a boolean`,
      );
    (this.#S(),
      this.#t.setOptions(this.options),
      t._defaulted &&
        !p(this.options, t) &&
        this.#e
          .getQueryCache()
          .notify({
            type: `observerOptionsUpdated`,
            query: this.#t,
            observer: this,
          }));
    let r = this.hasListeners();
    (r && de(this.#t, n, this.options, t) && this.#h(),
      this.updateResult(),
      r &&
        (this.#t !== n ||
          h(this.options.enabled, this.#t) !== h(t.enabled, this.#t) ||
          m(this.options.staleTime, this.#t) !== m(t.staleTime, this.#t)) &&
        this.#g());
    let i = this.#_();
    r &&
      (this.#t !== n ||
        h(this.options.enabled, this.#t) !== h(t.enabled, this.#t) ||
        i !== this.#p) &&
      this.#v(i);
  }
  getOptimisticResult(e) {
    let t = this.#e.getQueryCache().build(this.#e, e),
      n = this.createResult(t, e);
    return (
      pe(this, n) &&
        ((this.#r = n), (this.#a = this.options), (this.#i = this.#t.state)),
      n
    );
  }
  getCurrentResult() {
    return this.#r;
  }
  trackResult(e, t) {
    return new Proxy(e, {
      get: (e, n) => (
        this.trackProp(n),
        t?.(n),
        n === `promise` &&
          (this.trackProp(`data`),
          !this.options.experimental_prefetchInRender &&
            this.#o.status === `pending` &&
            this.#o.reject(
              Error(
                `experimental_prefetchInRender feature flag is not enabled`,
              ),
            )),
        Reflect.get(e, n)
      ),
    });
  }
  trackProp(e) {
    this.#m.add(e);
  }
  getCurrentQuery() {
    return this.#t;
  }
  refetch({ ...e } = {}) {
    return this.fetch({ ...e });
  }
  fetchOptimistic(e) {
    let t = this.#e.defaultQueryOptions(e),
      n = this.#e.getQueryCache().build(this.#e, t);
    return n.fetch().then(() => this.createResult(n, t));
  }
  fetch(e) {
    return this.#h({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
      () => (this.updateResult(), this.#r),
    );
  }
  #h(e) {
    this.#S();
    let t = this.#t.fetch(this.options, e);
    return (e?.throwOnError || (t = t.catch(f)), t);
  }
  #g() {
    this.#b();
    let e = m(this.options.staleTime, this.#t);
    if (v.isServer() || this.#r.isStale || !d(e)) return;
    let t = y(this.#r.dataUpdatedAt, e) + 1;
    this.#d = x.setTimeout(() => {
      this.#r.isStale || this.updateResult();
    }, t);
  }
  #_() {
    return (
      (typeof this.options.refetchInterval == `function`
        ? this.options.refetchInterval(this.#t)
        : this.options.refetchInterval) ?? !1
    );
  }
  #v(e) {
    (this.#x(),
      (this.#p = e),
      !(
        v.isServer() ||
        h(this.options.enabled, this.#t) === !1 ||
        !d(this.#p) ||
        this.#p === 0
      ) &&
        (this.#f = x.setInterval(() => {
          (this.options.refetchIntervalInBackground || l.isFocused()) &&
            this.#h();
        }, this.#p)));
  }
  #y() {
    (this.#g(), this.#v(this.#_()));
  }
  #b() {
    this.#d !== void 0 && (x.clearTimeout(this.#d), (this.#d = void 0));
  }
  #x() {
    this.#f !== void 0 && (x.clearInterval(this.#f), (this.#f = void 0));
  }
  createResult(e, t) {
    let n = this.#t,
      r = this.options,
      i = this.#r,
      a = this.#i,
      o = this.#a,
      s = e === n ? this.#n : e.state,
      { state: c } = e,
      l = { ...c },
      u = !1,
      d;
    if (t._optimisticResults) {
      let i = this.hasListeners(),
        a = !i && le(e, t),
        o = i && de(e, n, t, r);
      ((a || o) && (l = { ...l, ...ne(c.data, e.options) }),
        t._optimisticResults === `isRestoring` && (l.fetchStatus = `idle`));
    }
    let { error: f, errorUpdatedAt: p, status: m } = l;
    d = l.data;
    let te = !1;
    if (t.placeholderData !== void 0 && d === void 0 && m === `pending`) {
      let e;
      (i?.isPlaceholderData && t.placeholderData === o?.placeholderData
        ? ((e = i.data), (te = !0))
        : (e =
            typeof t.placeholderData == `function`
              ? t.placeholderData(this.#u?.state.data, this.#u)
              : t.placeholderData),
        e !== void 0 && ((m = `success`), (d = _(i?.data, e, t)), (u = !0)));
    }
    if (t.select && d !== void 0 && !te)
      if (i && d === a?.data && t.select === this.#c) d = this.#l;
      else
        try {
          ((this.#c = t.select),
            (d = t.select(d)),
            (d = _(i?.data, d, t)),
            (this.#l = d),
            (this.#s = null));
        } catch (e) {
          this.#s = e;
        }
    this.#s && ((f = this.#s), (d = this.#l), (p = Date.now()), (m = `error`));
    let g = l.fetchStatus === `fetching`,
      v = m === `pending`,
      y = m === `error`,
      b = v && g,
      x = d !== void 0,
      S = {
        status: m,
        fetchStatus: l.fetchStatus,
        isPending: v,
        isSuccess: m === `success`,
        isError: y,
        isInitialLoading: b,
        isLoading: b,
        data: d,
        dataUpdatedAt: l.dataUpdatedAt,
        error: f,
        errorUpdatedAt: p,
        failureCount: l.fetchFailureCount,
        failureReason: l.fetchFailureReason,
        errorUpdateCount: l.errorUpdateCount,
        isFetched: e.isFetched(),
        isFetchedAfterMount:
          l.dataUpdateCount > s.dataUpdateCount ||
          l.errorUpdateCount > s.errorUpdateCount,
        isFetching: g,
        isRefetching: g && !v,
        isLoadingError: y && !x,
        isPaused: l.fetchStatus === `paused`,
        isPlaceholderData: u,
        isRefetchError: y && x,
        isStale: fe(e, t),
        refetch: this.refetch,
        promise: this.#o,
        isEnabled: h(t.enabled, e) !== !1,
      };
    if (this.options.experimental_prefetchInRender) {
      let t = S.data !== void 0,
        r = S.status === `error` && !t,
        i = (e) => {
          r ? e.reject(S.error) : t && e.resolve(S.data);
        },
        a = () => {
          let e = (this.#o = S.promise = ee());
          i(e);
        },
        o = this.#o;
      switch (o.status) {
        case `pending`:
          e.queryHash === n.queryHash && i(o);
          break;
        case `fulfilled`:
          (r || S.data !== o.value) && a();
          break;
        case `rejected`:
          (!r || S.error !== o.reason) && a();
          break;
      }
    }
    return S;
  }
  updateResult() {
    let e = this.#r,
      t = this.createResult(this.#t, this.options);
    ((this.#i = this.#t.state),
      (this.#a = this.options),
      this.#i.data !== void 0 && (this.#u = this.#t),
      !p(t, e) &&
        ((this.#r = t),
        this.#C({
          listeners: (() => {
            if (!e) return !0;
            let { notifyOnChangeProps: t } = this.options,
              n = typeof t == `function` ? t() : t;
            if (n === `all` || (!n && !this.#m.size)) return !0;
            let r = new Set(n ?? this.#m);
            return (
              this.options.throwOnError && r.add(`error`),
              Object.keys(this.#r).some((t) => {
                let n = t;
                return this.#r[n] !== e[n] && r.has(n);
              })
            );
          })(),
        })));
  }
  #S() {
    let e = this.#e.getQueryCache().build(this.#e, this.options);
    if (e === this.#t) return;
    let t = this.#t;
    ((this.#t = e),
      (this.#n = e.state),
      this.hasListeners() && (t?.removeObserver(this), e.addObserver(this)));
  }
  onQueryUpdate() {
    (this.updateResult(), this.hasListeners() && this.#y());
  }
  #C(e) {
    u.batch(() => {
      (e.listeners &&
        this.listeners.forEach((e) => {
          e(this.#r);
        }),
        this.#e
          .getQueryCache()
          .notify({ query: this.#t, type: `observerResultsUpdated` }));
    });
  }
};
function C(e, t) {
  return (
    h(t.enabled, e) !== !1 &&
    e.state.data === void 0 &&
    !(e.state.status === `error` && h(t.retryOnMount, e) === !1)
  );
}
function le(e, t) {
  return C(e, t) || (e.state.data !== void 0 && ue(e, t, t.refetchOnMount));
}
function ue(e, t, n) {
  if (h(t.enabled, e) !== !1 && m(t.staleTime, e) !== `static`) {
    let r = typeof n == `function` ? n(e) : n;
    return r === `always` || (r !== !1 && fe(e, t));
  }
  return !1;
}
function de(e, t, n, r) {
  return (
    (e !== t || h(r.enabled, e) === !1) &&
    (!n.suspense || e.state.status !== `error`) &&
    fe(e, n)
  );
}
function fe(e, t) {
  return h(t.enabled, e) !== !1 && e.isStaleByTime(m(t.staleTime, e));
}
function pe(e, t) {
  return !p(e.getCurrentResult(), t);
}
var w = e(t(), 1),
  me = w.createContext(!1),
  he = () => w.useContext(me);
me.Provider;
var T = n();
function ge() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e,
  };
}
var _e = w.createContext(ge()),
  E = () => w.useContext(_e),
  ve = (e, t, n) => {
    let r =
      n?.state.error && typeof e.throwOnError == `function`
        ? c(e.throwOnError, [n.state.error, n])
        : e.throwOnError;
    (e.suspense || e.experimental_prefetchInRender || r) &&
      (t.isReset() || (e.retryOnMount = !1));
  },
  ye = (e) => {
    w.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  be = ({
    result: e,
    errorResetBoundary: t,
    throwOnError: n,
    query: r,
    suspense: i,
  }) =>
    e.isError &&
    !t.isReset() &&
    !e.isFetching &&
    r &&
    ((i && e.data === void 0) || c(n, [e.error, r])),
  xe = (e) => {
    if (e.suspense) {
      let t = 1e3,
        n = (e) => (e === `static` ? e : Math.max(e ?? t, t)),
        r = e.staleTime;
      ((e.staleTime = typeof r == `function` ? (...e) => n(r(...e)) : n(r)),
        typeof e.gcTime == `number` && (e.gcTime = Math.max(e.gcTime, t)));
    }
  },
  Se = (e, t) => e.isLoading && e.isFetching && !t,
  Ce = (e, t) => e?.suspense && t.isPending,
  we = (e, t, n) =>
    t.fetchOptimistic(e).catch(() => {
      n.clearReset();
    });
function Te(e, t, n) {
  let r = he(),
    i = E(),
    a = g(n),
    o = a.defaultQueryOptions(e);
  a.getDefaultOptions().queries?._experimental_beforeQuery?.(o);
  let s = a.getQueryCache().get(o.queryHash),
    c = e.subscribed !== !1;
  ((o._optimisticResults = r ? `isRestoring` : c ? `optimistic` : void 0),
    xe(o),
    ve(o, i, s),
    ye(i));
  let l = !a.getQueryCache().get(o.queryHash),
    [d] = w.useState(() => new t(a, o)),
    p = d.getOptimisticResult(o),
    m = !r && c;
  if (
    (w.useSyncExternalStore(
      w.useCallback(
        (e) => {
          let t = m ? d.subscribe(u.batchCalls(e)) : f;
          return (d.updateResult(), t);
        },
        [d, m],
      ),
      () => d.getCurrentResult(),
      () => d.getCurrentResult(),
    ),
    w.useEffect(() => {
      d.setOptions(o);
    }, [o, d]),
    Ce(o, p))
  )
    throw we(o, d, i);
  if (
    be({
      result: p,
      errorResetBoundary: i,
      throwOnError: o.throwOnError,
      query: s,
      suspense: o.suspense,
    })
  )
    throw p.error;
  return (
    a.getDefaultOptions().queries?._experimental_afterQuery?.(o, p),
    o.experimental_prefetchInRender &&
      !v.isServer() &&
      Se(p, r) &&
      (l ? we(o, d, i) : s?.promise)?.catch(f).finally(() => {
        d.updateResult();
      }),
    o.notifyOnChangeProps ? p : d.trackResult(p)
  );
}
function Ee(e, t) {
  return Te(e, ce, t);
}
var De = `text-xs font-bold uppercase tracking-[0.18em] text-primary`,
  Oe = `mt-2 w-full border border-dashed border-border bg-secondary px-4 py-3 text-base font-semibold text-foreground`;
function D({ rotulo: e, valor: t }) {
  return (0, T.jsxs)(`div`, {
    children: [
      (0, T.jsx)(`span`, { className: De, children: e }),
      (0, T.jsx)(`p`, { className: Oe, children: t ?? `Não informado` }),
    ],
  });
}
function ke() {
  return (0, T.jsxs)(`div`, {
    className: `mt-7 space-y-5`,
    "aria-busy": `true`,
    "aria-live": `polite`,
    children: [
      (0, T.jsx)(`p`, {
        className: `text-sm text-muted-foreground`,
        children: `Consultando seus dados com segurança…`,
      }),
      [0, 1, 2].map((e) =>
        (0, T.jsxs)(
          `div`,
          {
            children: [
              (0, T.jsx)(`div`, {
                className: `h-3 w-32 animate-pulse bg-border`,
              }),
              (0, T.jsx)(`div`, {
                className: `mt-2 h-12 w-full animate-pulse bg-secondary`,
              }),
            ],
          },
          e,
        ),
      ),
    ],
  });
}
function Ae({ titulo: e, mensagem: t, onTentarNovamente: n }) {
  return (0, T.jsxs)(`div`, {
    className: `mt-7 border-l-4 border-destructive bg-secondary p-5`,
    role: `alert`,
    children: [
      (0, T.jsx)(`h3`, {
        className: `text-sm font-extrabold uppercase tracking-[0.16em] text-primary`,
        children: e,
      }),
      (0, T.jsx)(`p`, {
        className: `mt-2 text-sm leading-relaxed text-secondary-foreground`,
        children: t,
      }),
      (0, T.jsxs)(`div`, {
        className: `mt-5 flex flex-wrap gap-3`,
        children: [
          n
            ? (0, T.jsx)(`button`, {
                type: `button`,
                onClick: n,
                className: `bg-primary px-6 py-3 text-xs font-extrabold uppercase tracking-[0.18em] text-primary-foreground transition hover:brightness-110`,
                children: `Tentar novamente`,
              })
            : null,
          (0, T.jsx)(i, {
            to: `/cadastro`,
            className: `border border-primary px-6 py-3 text-xs font-extrabold uppercase tracking-[0.18em] text-primary transition hover:bg-secondary`,
            children: `Corrigir CPF`,
          }),
        ],
      }),
    ],
  });
}
var je = [
  `De R$ 1.018 até R$ 1.630`,
  `De R$ 1.200 até R$ 1.800`,
  `De R$ 1.400 até R$ 2.100`,
  `De R$ 1.600 até R$ 2.500`,
];
function Me({ pessoa: e }) {
  let t = (0, w.useMemo)(
    () => je[Math.floor(Math.random() * je.length)] ?? je[0],
    [],
  );
  return (0, T.jsxs)(`div`, {
    className: `mt-7 space-y-5`,
    children: [
      (0, T.jsx)(D, { rotulo: `Nome completo`, valor: e.nomeCompleto }),
      (0, T.jsx)(D, { rotulo: `Data de nascimento`, valor: e.dataNascimento }),
      (0, T.jsx)(D, { rotulo: `Nome da mãe`, valor: e.nomeMae }),
      (0, T.jsx)(D, { rotulo: `Poder aquisitivo`, valor: `MÉDIO BAIXO` }),
      (0, T.jsx)(D, { rotulo: `Faixa de renda estimada`, valor: t }),
    ],
  });
}
var O;
(function (e) {
  e.assertEqual = (e) => {};
  function t(e) {}
  e.assertIs = t;
  function n(e) {
    throw Error();
  }
  ((e.assertNever = n),
    (e.arrayToEnum = (e) => {
      let t = {};
      for (let n of e) t[n] = n;
      return t;
    }),
    (e.getValidEnumValues = (t) => {
      let n = e.objectKeys(t).filter((e) => typeof t[t[e]] != `number`),
        r = {};
      for (let e of n) r[e] = t[e];
      return e.objectValues(r);
    }),
    (e.objectValues = (t) =>
      e.objectKeys(t).map(function (e) {
        return t[e];
      })),
    (e.objectKeys =
      typeof Object.keys == `function`
        ? (e) => Object.keys(e)
        : (e) => {
            let t = [];
            for (let n in e)
              Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
            return t;
          }),
    (e.find = (e, t) => {
      for (let n of e) if (t(n)) return n;
    }),
    (e.isInteger =
      typeof Number.isInteger == `function`
        ? (e) => Number.isInteger(e)
        : (e) =>
            typeof e == `number` && Number.isFinite(e) && Math.floor(e) === e));
  function r(e, t = ` | `) {
    return e.map((e) => (typeof e == `string` ? `'${e}'` : e)).join(t);
  }
  ((e.joinValues = r),
    (e.jsonStringifyReplacer = (e, t) =>
      typeof t == `bigint` ? t.toString() : t));
})((O ||= {}));
var Ne;
(function (e) {
  e.mergeShapes = (e, t) => ({ ...e, ...t });
})((Ne ||= {}));
var k = O.arrayToEnum([
    `string`,
    `nan`,
    `number`,
    `integer`,
    `float`,
    `boolean`,
    `date`,
    `bigint`,
    `symbol`,
    `function`,
    `undefined`,
    `null`,
    `array`,
    `object`,
    `unknown`,
    `promise`,
    `void`,
    `never`,
    `map`,
    `set`,
  ]),
  A = (e) => {
    switch (typeof e) {
      case `undefined`:
        return k.undefined;
      case `string`:
        return k.string;
      case `number`:
        return Number.isNaN(e) ? k.nan : k.number;
      case `boolean`:
        return k.boolean;
      case `function`:
        return k.function;
      case `bigint`:
        return k.bigint;
      case `symbol`:
        return k.symbol;
      case `object`:
        return Array.isArray(e)
          ? k.array
          : e === null
            ? k.null
            : e.then &&
                typeof e.then == `function` &&
                e.catch &&
                typeof e.catch == `function`
              ? k.promise
              : typeof Map < `u` && e instanceof Map
                ? k.map
                : typeof Set < `u` && e instanceof Set
                  ? k.set
                  : typeof Date < `u` && e instanceof Date
                    ? k.date
                    : k.object;
      default:
        return k.unknown;
    }
  },
  j = O.arrayToEnum([
    `invalid_type`,
    `invalid_literal`,
    `custom`,
    `invalid_union`,
    `invalid_union_discriminator`,
    `invalid_enum_value`,
    `unrecognized_keys`,
    `invalid_arguments`,
    `invalid_return_type`,
    `invalid_date`,
    `invalid_string`,
    `too_small`,
    `too_big`,
    `invalid_intersection_types`,
    `not_multiple_of`,
    `not_finite`,
  ]),
  M = class e extends Error {
    get errors() {
      return this.issues;
    }
    constructor(e) {
      (super(),
        (this.issues = []),
        (this.addIssue = (e) => {
          this.issues = [...this.issues, e];
        }),
        (this.addIssues = (e = []) => {
          this.issues = [...this.issues, ...e];
        }));
      let t = new.target.prototype;
      (Object.setPrototypeOf
        ? Object.setPrototypeOf(this, t)
        : (this.__proto__ = t),
        (this.name = `ZodError`),
        (this.issues = e));
    }
    format(e) {
      let t =
          e ||
          function (e) {
            return e.message;
          },
        n = { _errors: [] },
        r = (e) => {
          for (let i of e.issues)
            if (i.code === `invalid_union`) i.unionErrors.map(r);
            else if (i.code === `invalid_return_type`) r(i.returnTypeError);
            else if (i.code === `invalid_arguments`) r(i.argumentsError);
            else if (i.path.length === 0) n._errors.push(t(i));
            else {
              let e = n,
                r = 0;
              for (; r < i.path.length; ) {
                let n = i.path[r];
                (r === i.path.length - 1
                  ? ((e[n] = e[n] || { _errors: [] }), e[n]._errors.push(t(i)))
                  : (e[n] = e[n] || { _errors: [] }),
                  (e = e[n]),
                  r++);
              }
            }
        };
      return (r(this), n);
    }
    static assert(t) {
      if (!(t instanceof e)) throw Error(`Not a ZodError: ${t}`);
    }
    toString() {
      return this.message;
    }
    get message() {
      return JSON.stringify(this.issues, O.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
      return this.issues.length === 0;
    }
    flatten(e = (e) => e.message) {
      let t = {},
        n = [];
      for (let r of this.issues)
        if (r.path.length > 0) {
          let n = r.path[0];
          ((t[n] = t[n] || []), t[n].push(e(r)));
        } else n.push(e(r));
      return { formErrors: n, fieldErrors: t };
    }
    get formErrors() {
      return this.flatten();
    }
  };
M.create = (e) => new M(e);
var N = (e, t) => {
    let n;
    switch (e.code) {
      case j.invalid_type:
        n =
          e.received === k.undefined
            ? `Required`
            : `Expected ${e.expected}, received ${e.received}`;
        break;
      case j.invalid_literal:
        n = `Invalid literal value, expected ${JSON.stringify(e.expected, O.jsonStringifyReplacer)}`;
        break;
      case j.unrecognized_keys:
        n = `Unrecognized key(s) in object: ${O.joinValues(e.keys, `, `)}`;
        break;
      case j.invalid_union:
        n = `Invalid input`;
        break;
      case j.invalid_union_discriminator:
        n = `Invalid discriminator value. Expected ${O.joinValues(e.options)}`;
        break;
      case j.invalid_enum_value:
        n = `Invalid enum value. Expected ${O.joinValues(e.options)}, received '${e.received}'`;
        break;
      case j.invalid_arguments:
        n = `Invalid function arguments`;
        break;
      case j.invalid_return_type:
        n = `Invalid function return type`;
        break;
      case j.invalid_date:
        n = `Invalid date`;
        break;
      case j.invalid_string:
        typeof e.validation == `object`
          ? `includes` in e.validation
            ? ((n = `Invalid input: must include "${e.validation.includes}"`),
              typeof e.validation.position == `number` &&
                (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`))
            : `startsWith` in e.validation
              ? (n = `Invalid input: must start with "${e.validation.startsWith}"`)
              : `endsWith` in e.validation
                ? (n = `Invalid input: must end with "${e.validation.endsWith}"`)
                : O.assertNever(e.validation)
          : (n =
              e.validation === `regex` ? `Invalid` : `Invalid ${e.validation}`);
        break;
      case j.too_small:
        n =
          e.type === `array`
            ? `Array must contain ${e.exact ? `exactly` : e.inclusive ? `at least` : `more than`} ${e.minimum} element(s)`
            : e.type === `string`
              ? `String must contain ${e.exact ? `exactly` : e.inclusive ? `at least` : `over`} ${e.minimum} character(s)`
              : e.type === `number` || e.type === `bigint`
                ? `Number must be ${e.exact ? `exactly equal to ` : e.inclusive ? `greater than or equal to ` : `greater than `}${e.minimum}`
                : e.type === `date`
                  ? `Date must be ${e.exact ? `exactly equal to ` : e.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(e.minimum))}`
                  : `Invalid input`;
        break;
      case j.too_big:
        n =
          e.type === `array`
            ? `Array must contain ${e.exact ? `exactly` : e.inclusive ? `at most` : `less than`} ${e.maximum} element(s)`
            : e.type === `string`
              ? `String must contain ${e.exact ? `exactly` : e.inclusive ? `at most` : `under`} ${e.maximum} character(s)`
              : e.type === `number`
                ? `Number must be ${e.exact ? `exactly` : e.inclusive ? `less than or equal to` : `less than`} ${e.maximum}`
                : e.type === `bigint`
                  ? `BigInt must be ${e.exact ? `exactly` : e.inclusive ? `less than or equal to` : `less than`} ${e.maximum}`
                  : e.type === `date`
                    ? `Date must be ${e.exact ? `exactly` : e.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(e.maximum))}`
                    : `Invalid input`;
        break;
      case j.custom:
        n = `Invalid input`;
        break;
      case j.invalid_intersection_types:
        n = `Intersection results could not be merged`;
        break;
      case j.not_multiple_of:
        n = `Number must be a multiple of ${e.multipleOf}`;
        break;
      case j.not_finite:
        n = `Number must be finite`;
        break;
      default:
        ((n = t.defaultError), O.assertNever(e));
    }
    return { message: n };
  },
  Pe = N;
function Fe() {
  return Pe;
}
var Ie = (e) => {
  let { data: t, path: n, errorMaps: r, issueData: i } = e,
    a = [...n, ...(i.path || [])],
    o = { ...i, path: a };
  if (i.message !== void 0) return { ...i, path: a, message: i.message };
  let s = ``,
    c = r
      .filter((e) => !!e)
      .slice()
      .reverse();
  for (let e of c) s = e(o, { data: t, defaultError: s }).message;
  return { ...i, path: a, message: s };
};
function P(e, t) {
  let n = Fe(),
    r = Ie({
      issueData: t,
      data: e.data,
      path: e.path,
      errorMaps: [
        e.common.contextualErrorMap,
        e.schemaErrorMap,
        n,
        n === N ? void 0 : N,
      ].filter((e) => !!e),
    });
  e.common.issues.push(r);
}
var F = class e {
    constructor() {
      this.value = `valid`;
    }
    dirty() {
      this.value === `valid` && (this.value = `dirty`);
    }
    abort() {
      this.value !== `aborted` && (this.value = `aborted`);
    }
    static mergeArray(e, t) {
      let n = [];
      for (let r of t) {
        if (r.status === `aborted`) return I;
        (r.status === `dirty` && e.dirty(), n.push(r.value));
      }
      return { status: e.value, value: n };
    }
    static async mergeObjectAsync(t, n) {
      let r = [];
      for (let e of n) {
        let t = await e.key,
          n = await e.value;
        r.push({ key: t, value: n });
      }
      return e.mergeObjectSync(t, r);
    }
    static mergeObjectSync(e, t) {
      let n = {};
      for (let r of t) {
        let { key: t, value: i } = r;
        if (t.status === `aborted` || i.status === `aborted`) return I;
        (t.status === `dirty` && e.dirty(),
          i.status === `dirty` && e.dirty(),
          t.value !== `__proto__` &&
            (i.value !== void 0 || r.alwaysSet) &&
            (n[t.value] = i.value));
      }
      return { status: e.value, value: n };
    }
  },
  I = Object.freeze({ status: `aborted` }),
  Le = (e) => ({ status: `dirty`, value: e }),
  L = (e) => ({ status: `valid`, value: e }),
  Re = (e) => e.status === `aborted`,
  ze = (e) => e.status === `dirty`,
  R = (e) => e.status === `valid`,
  Be = (e) => typeof Promise < `u` && e instanceof Promise,
  z;
(function (e) {
  ((e.errToObj = (e) => (typeof e == `string` ? { message: e } : e || {})),
    (e.toString = (e) => (typeof e == `string` ? e : e?.message)));
})((z ||= {}));
var B = class {
    constructor(e, t, n, r) {
      ((this._cachedPath = []),
        (this.parent = e),
        (this.data = t),
        (this._path = n),
        (this._key = r));
    }
    get path() {
      return (
        this._cachedPath.length ||
          (Array.isArray(this._key)
            ? this._cachedPath.push(...this._path, ...this._key)
            : this._cachedPath.push(...this._path, this._key)),
        this._cachedPath
      );
    }
  },
  Ve = (e, t) => {
    if (R(t)) return { success: !0, data: t.value };
    if (!e.common.issues.length)
      throw Error(`Validation failed but no issues detected.`);
    return {
      success: !1,
      get error() {
        if (this._error) return this._error;
        let t = new M(e.common.issues);
        return ((this._error = t), this._error);
      },
    };
  };
function V(e) {
  if (!e) return {};
  let {
    errorMap: t,
    invalid_type_error: n,
    required_error: r,
    description: i,
  } = e;
  if (t && (n || r))
    throw Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`,
    );
  return t
    ? { errorMap: t, description: i }
    : {
        errorMap: (t, i) => {
          let { message: a } = e;
          return t.code === `invalid_enum_value`
            ? { message: a ?? i.defaultError }
            : i.data === void 0
              ? { message: a ?? r ?? i.defaultError }
              : t.code === `invalid_type`
                ? { message: a ?? n ?? i.defaultError }
                : { message: i.defaultError };
        },
        description: i,
      };
}
var H = class {
    get description() {
      return this._def.description;
    }
    _getType(e) {
      return A(e.data);
    }
    _getOrReturnCtx(e, t) {
      return (
        t || {
          common: e.parent.common,
          data: e.data,
          parsedType: A(e.data),
          schemaErrorMap: this._def.errorMap,
          path: e.path,
          parent: e.parent,
        }
      );
    }
    _processInputParams(e) {
      return {
        status: new F(),
        ctx: {
          common: e.parent.common,
          data: e.data,
          parsedType: A(e.data),
          schemaErrorMap: this._def.errorMap,
          path: e.path,
          parent: e.parent,
        },
      };
    }
    _parseSync(e) {
      let t = this._parse(e);
      if (Be(t)) throw Error(`Synchronous parse encountered promise.`);
      return t;
    }
    _parseAsync(e) {
      let t = this._parse(e);
      return Promise.resolve(t);
    }
    parse(e, t) {
      let n = this.safeParse(e, t);
      if (n.success) return n.data;
      throw n.error;
    }
    safeParse(e, t) {
      let n = {
        common: {
          issues: [],
          async: t?.async ?? !1,
          contextualErrorMap: t?.errorMap,
        },
        path: t?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: A(e),
      };
      return Ve(n, this._parseSync({ data: e, path: n.path, parent: n }));
    }
    "~validate"(e) {
      let t = {
        common: { issues: [], async: !!this[`~standard`].async },
        path: [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: A(e),
      };
      if (!this[`~standard`].async)
        try {
          let n = this._parseSync({ data: e, path: [], parent: t });
          return R(n) ? { value: n.value } : { issues: t.common.issues };
        } catch (e) {
          (e?.message?.toLowerCase()?.includes(`encountered`) &&
            (this[`~standard`].async = !0),
            (t.common = { issues: [], async: !0 }));
        }
      return this._parseAsync({ data: e, path: [], parent: t }).then((e) =>
        R(e) ? { value: e.value } : { issues: t.common.issues },
      );
    }
    async parseAsync(e, t) {
      let n = await this.safeParseAsync(e, t);
      if (n.success) return n.data;
      throw n.error;
    }
    async safeParseAsync(e, t) {
      let n = {
          common: { issues: [], contextualErrorMap: t?.errorMap, async: !0 },
          path: t?.path || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data: e,
          parsedType: A(e),
        },
        r = this._parse({ data: e, path: n.path, parent: n });
      return Ve(n, await (Be(r) ? r : Promise.resolve(r)));
    }
    refine(e, t) {
      let n = (e) =>
        typeof t == `string` || t === void 0
          ? { message: t }
          : typeof t == `function`
            ? t(e)
            : t;
      return this._refinement((t, r) => {
        let i = e(t),
          a = () => r.addIssue({ code: j.custom, ...n(t) });
        return typeof Promise < `u` && i instanceof Promise
          ? i.then((e) => (e ? !0 : (a(), !1)))
          : i
            ? !0
            : (a(), !1);
      });
    }
    refinement(e, t) {
      return this._refinement((n, r) =>
        e(n) ? !0 : (r.addIssue(typeof t == `function` ? t(n, r) : t), !1),
      );
    }
    _refinement(e) {
      return new X({
        schema: this,
        typeName: $.ZodEffects,
        effect: { type: `refinement`, refinement: e },
      });
    }
    superRefine(e) {
      return this._refinement(e);
    }
    constructor(e) {
      ((this.spa = this.safeParseAsync),
        (this._def = e),
        (this.parse = this.parse.bind(this)),
        (this.safeParse = this.safeParse.bind(this)),
        (this.parseAsync = this.parseAsync.bind(this)),
        (this.safeParseAsync = this.safeParseAsync.bind(this)),
        (this.spa = this.spa.bind(this)),
        (this.refine = this.refine.bind(this)),
        (this.refinement = this.refinement.bind(this)),
        (this.superRefine = this.superRefine.bind(this)),
        (this.optional = this.optional.bind(this)),
        (this.nullable = this.nullable.bind(this)),
        (this.nullish = this.nullish.bind(this)),
        (this.array = this.array.bind(this)),
        (this.promise = this.promise.bind(this)),
        (this.or = this.or.bind(this)),
        (this.and = this.and.bind(this)),
        (this.transform = this.transform.bind(this)),
        (this.brand = this.brand.bind(this)),
        (this.default = this.default.bind(this)),
        (this.catch = this.catch.bind(this)),
        (this.describe = this.describe.bind(this)),
        (this.pipe = this.pipe.bind(this)),
        (this.readonly = this.readonly.bind(this)),
        (this.isNullable = this.isNullable.bind(this)),
        (this.isOptional = this.isOptional.bind(this)),
        (this[`~standard`] = {
          version: 1,
          vendor: `zod`,
          validate: (e) => this[`~validate`](e),
        }));
    }
    optional() {
      return Z.create(this, this._def);
    }
    nullable() {
      return Q.create(this, this._def);
    }
    nullish() {
      return this.nullable().optional();
    }
    array() {
      return G.create(this);
    }
    promise() {
      return It.create(this, this._def);
    }
    or(e) {
      return Ct.create([this, e], this._def);
    }
    and(e) {
      return Et.create(this, e, this._def);
    }
    transform(e) {
      return new X({
        ...V(this._def),
        schema: this,
        typeName: $.ZodEffects,
        effect: { type: `transform`, transform: e },
      });
    }
    default(e) {
      let t = typeof e == `function` ? e : () => e;
      return new Lt({
        ...V(this._def),
        innerType: this,
        defaultValue: t,
        typeName: $.ZodDefault,
      });
    }
    brand() {
      return new Bt({ typeName: $.ZodBranded, type: this, ...V(this._def) });
    }
    catch(e) {
      let t = typeof e == `function` ? e : () => e;
      return new Rt({
        ...V(this._def),
        innerType: this,
        catchValue: t,
        typeName: $.ZodCatch,
      });
    }
    describe(e) {
      let t = this.constructor;
      return new t({ ...this._def, description: e });
    }
    pipe(e) {
      return Vt.create(this, e);
    }
    readonly() {
      return Ht.create(this);
    }
    isOptional() {
      return this.safeParse(void 0).success;
    }
    isNullable() {
      return this.safeParse(null).success;
    }
  },
  He = /^c[^\s-]{8,}$/i,
  Ue = /^[0-9a-z]+$/,
  We = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  Ge =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  Ke = /^[a-z0-9_-]{21}$/i,
  qe = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  Je =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  Ye =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  Xe = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`,
  Ze,
  Qe =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  $e =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  et =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  tt =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  nt = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  rt = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  it = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`,
  at = RegExp(`^${it}$`);
function ot(e) {
  let t = `[0-5]\\d`;
  e.precision
    ? (t = `${t}\\.\\d{${e.precision}}`)
    : (e.precision ?? (t = `${t}(\\.\\d+)?`));
  let n = e.precision ? `+` : `?`;
  return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`;
}
function st(e) {
  return RegExp(`^${ot(e)}$`);
}
function ct(e) {
  let t = `${it}T${ot(e)}`,
    n = [];
  return (
    n.push(e.local ? `Z?` : `Z`),
    e.offset && n.push(`([+-]\\d{2}:?\\d{2})`),
    (t = `${t}(${n.join(`|`)})`),
    RegExp(`^${t}$`)
  );
}
function lt(e, t) {
  return !!(
    ((t === `v4` || !t) && Qe.test(e)) ||
    ((t === `v6` || !t) && et.test(e))
  );
}
function ut(e, t) {
  if (!qe.test(e)) return !1;
  try {
    let [n] = e.split(`.`);
    if (!n) return !1;
    let r = n
        .replace(/-/g, `+`)
        .replace(/_/g, `/`)
        .padEnd(n.length + ((4 - (n.length % 4)) % 4), `=`),
      i = JSON.parse(atob(r));
    return !(
      typeof i != `object` ||
      !i ||
      (`typ` in i && i?.typ !== `JWT`) ||
      !i.alg ||
      (t && i.alg !== t)
    );
  } catch {
    return !1;
  }
}
function dt(e, t) {
  return !!(
    ((t === `v4` || !t) && $e.test(e)) ||
    ((t === `v6` || !t) && tt.test(e))
  );
}
var ft = class e extends H {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = String(e.data)),
      this._getType(e) !== k.string)
    ) {
      let t = this._getOrReturnCtx(e);
      return (
        P(t, {
          code: j.invalid_type,
          expected: k.string,
          received: t.parsedType,
        }),
        I
      );
    }
    let t = new F(),
      n;
    for (let r of this._def.checks)
      if (r.kind === `min`)
        e.data.length < r.value &&
          ((n = this._getOrReturnCtx(e, n)),
          P(n, {
            code: j.too_small,
            minimum: r.value,
            type: `string`,
            inclusive: !0,
            exact: !1,
            message: r.message,
          }),
          t.dirty());
      else if (r.kind === `max`)
        e.data.length > r.value &&
          ((n = this._getOrReturnCtx(e, n)),
          P(n, {
            code: j.too_big,
            maximum: r.value,
            type: `string`,
            inclusive: !0,
            exact: !1,
            message: r.message,
          }),
          t.dirty());
      else if (r.kind === `length`) {
        let i = e.data.length > r.value,
          a = e.data.length < r.value;
        (i || a) &&
          ((n = this._getOrReturnCtx(e, n)),
          i
            ? P(n, {
                code: j.too_big,
                maximum: r.value,
                type: `string`,
                inclusive: !0,
                exact: !0,
                message: r.message,
              })
            : a &&
              P(n, {
                code: j.too_small,
                minimum: r.value,
                type: `string`,
                inclusive: !0,
                exact: !0,
                message: r.message,
              }),
          t.dirty());
      } else if (r.kind === `email`)
        Ye.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          P(n, {
            validation: `email`,
            code: j.invalid_string,
            message: r.message,
          }),
          t.dirty());
      else if (r.kind === `emoji`)
        ((Ze ||= new RegExp(Xe, `u`)),
          Ze.test(e.data) ||
            ((n = this._getOrReturnCtx(e, n)),
            P(n, {
              validation: `emoji`,
              code: j.invalid_string,
              message: r.message,
            }),
            t.dirty()));
      else if (r.kind === `uuid`)
        Ge.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          P(n, {
            validation: `uuid`,
            code: j.invalid_string,
            message: r.message,
          }),
          t.dirty());
      else if (r.kind === `nanoid`)
        Ke.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          P(n, {
            validation: `nanoid`,
            code: j.invalid_string,
            message: r.message,
          }),
          t.dirty());
      else if (r.kind === `cuid`)
        He.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          P(n, {
            validation: `cuid`,
            code: j.invalid_string,
            message: r.message,
          }),
          t.dirty());
      else if (r.kind === `cuid2`)
        Ue.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          P(n, {
            validation: `cuid2`,
            code: j.invalid_string,
            message: r.message,
          }),
          t.dirty());
      else if (r.kind === `ulid`)
        We.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          P(n, {
            validation: `ulid`,
            code: j.invalid_string,
            message: r.message,
          }),
          t.dirty());
      else if (r.kind === `url`)
        try {
          new URL(e.data);
        } catch {
          ((n = this._getOrReturnCtx(e, n)),
            P(n, {
              validation: `url`,
              code: j.invalid_string,
              message: r.message,
            }),
            t.dirty());
        }
      else
        r.kind === `regex`
          ? ((r.regex.lastIndex = 0),
            r.regex.test(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              P(n, {
                validation: `regex`,
                code: j.invalid_string,
                message: r.message,
              }),
              t.dirty()))
          : r.kind === `trim`
            ? (e.data = e.data.trim())
            : r.kind === `includes`
              ? e.data.includes(r.value, r.position) ||
                ((n = this._getOrReturnCtx(e, n)),
                P(n, {
                  code: j.invalid_string,
                  validation: { includes: r.value, position: r.position },
                  message: r.message,
                }),
                t.dirty())
              : r.kind === `toLowerCase`
                ? (e.data = e.data.toLowerCase())
                : r.kind === `toUpperCase`
                  ? (e.data = e.data.toUpperCase())
                  : r.kind === `startsWith`
                    ? e.data.startsWith(r.value) ||
                      ((n = this._getOrReturnCtx(e, n)),
                      P(n, {
                        code: j.invalid_string,
                        validation: { startsWith: r.value },
                        message: r.message,
                      }),
                      t.dirty())
                    : r.kind === `endsWith`
                      ? e.data.endsWith(r.value) ||
                        ((n = this._getOrReturnCtx(e, n)),
                        P(n, {
                          code: j.invalid_string,
                          validation: { endsWith: r.value },
                          message: r.message,
                        }),
                        t.dirty())
                      : r.kind === `datetime`
                        ? ct(r).test(e.data) ||
                          ((n = this._getOrReturnCtx(e, n)),
                          P(n, {
                            code: j.invalid_string,
                            validation: `datetime`,
                            message: r.message,
                          }),
                          t.dirty())
                        : r.kind === `date`
                          ? at.test(e.data) ||
                            ((n = this._getOrReturnCtx(e, n)),
                            P(n, {
                              code: j.invalid_string,
                              validation: `date`,
                              message: r.message,
                            }),
                            t.dirty())
                          : r.kind === `time`
                            ? st(r).test(e.data) ||
                              ((n = this._getOrReturnCtx(e, n)),
                              P(n, {
                                code: j.invalid_string,
                                validation: `time`,
                                message: r.message,
                              }),
                              t.dirty())
                            : r.kind === `duration`
                              ? Je.test(e.data) ||
                                ((n = this._getOrReturnCtx(e, n)),
                                P(n, {
                                  validation: `duration`,
                                  code: j.invalid_string,
                                  message: r.message,
                                }),
                                t.dirty())
                              : r.kind === `ip`
                                ? lt(e.data, r.version) ||
                                  ((n = this._getOrReturnCtx(e, n)),
                                  P(n, {
                                    validation: `ip`,
                                    code: j.invalid_string,
                                    message: r.message,
                                  }),
                                  t.dirty())
                                : r.kind === `jwt`
                                  ? ut(e.data, r.alg) ||
                                    ((n = this._getOrReturnCtx(e, n)),
                                    P(n, {
                                      validation: `jwt`,
                                      code: j.invalid_string,
                                      message: r.message,
                                    }),
                                    t.dirty())
                                  : r.kind === `cidr`
                                    ? dt(e.data, r.version) ||
                                      ((n = this._getOrReturnCtx(e, n)),
                                      P(n, {
                                        validation: `cidr`,
                                        code: j.invalid_string,
                                        message: r.message,
                                      }),
                                      t.dirty())
                                    : r.kind === `base64`
                                      ? nt.test(e.data) ||
                                        ((n = this._getOrReturnCtx(e, n)),
                                        P(n, {
                                          validation: `base64`,
                                          code: j.invalid_string,
                                          message: r.message,
                                        }),
                                        t.dirty())
                                      : r.kind === `base64url`
                                        ? rt.test(e.data) ||
                                          ((n = this._getOrReturnCtx(e, n)),
                                          P(n, {
                                            validation: `base64url`,
                                            code: j.invalid_string,
                                            message: r.message,
                                          }),
                                          t.dirty())
                                        : O.assertNever(r);
    return { status: t.value, value: e.data };
  }
  _regex(e, t, n) {
    return this.refinement((t) => e.test(t), {
      validation: t,
      code: j.invalid_string,
      ...z.errToObj(n),
    });
  }
  _addCheck(t) {
    return new e({ ...this._def, checks: [...this._def.checks, t] });
  }
  email(e) {
    return this._addCheck({ kind: `email`, ...z.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: `url`, ...z.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: `emoji`, ...z.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: `uuid`, ...z.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: `nanoid`, ...z.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: `cuid`, ...z.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: `cuid2`, ...z.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: `ulid`, ...z.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: `base64`, ...z.errToObj(e) });
  }
  base64url(e) {
    return this._addCheck({ kind: `base64url`, ...z.errToObj(e) });
  }
  jwt(e) {
    return this._addCheck({ kind: `jwt`, ...z.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: `ip`, ...z.errToObj(e) });
  }
  cidr(e) {
    return this._addCheck({ kind: `cidr`, ...z.errToObj(e) });
  }
  datetime(e) {
    return typeof e == `string`
      ? this._addCheck({
          kind: `datetime`,
          precision: null,
          offset: !1,
          local: !1,
          message: e,
        })
      : this._addCheck({
          kind: `datetime`,
          precision: e?.precision === void 0 ? null : e?.precision,
          offset: e?.offset ?? !1,
          local: e?.local ?? !1,
          ...z.errToObj(e?.message),
        });
  }
  date(e) {
    return this._addCheck({ kind: `date`, message: e });
  }
  time(e) {
    return typeof e == `string`
      ? this._addCheck({ kind: `time`, precision: null, message: e })
      : this._addCheck({
          kind: `time`,
          precision: e?.precision === void 0 ? null : e?.precision,
          ...z.errToObj(e?.message),
        });
  }
  duration(e) {
    return this._addCheck({ kind: `duration`, ...z.errToObj(e) });
  }
  regex(e, t) {
    return this._addCheck({ kind: `regex`, regex: e, ...z.errToObj(t) });
  }
  includes(e, t) {
    return this._addCheck({
      kind: `includes`,
      value: e,
      position: t?.position,
      ...z.errToObj(t?.message),
    });
  }
  startsWith(e, t) {
    return this._addCheck({ kind: `startsWith`, value: e, ...z.errToObj(t) });
  }
  endsWith(e, t) {
    return this._addCheck({ kind: `endsWith`, value: e, ...z.errToObj(t) });
  }
  min(e, t) {
    return this._addCheck({ kind: `min`, value: e, ...z.errToObj(t) });
  }
  max(e, t) {
    return this._addCheck({ kind: `max`, value: e, ...z.errToObj(t) });
  }
  length(e, t) {
    return this._addCheck({ kind: `length`, value: e, ...z.errToObj(t) });
  }
  nonempty(e) {
    return this.min(1, z.errToObj(e));
  }
  trim() {
    return new e({
      ...this._def,
      checks: [...this._def.checks, { kind: `trim` }],
    });
  }
  toLowerCase() {
    return new e({
      ...this._def,
      checks: [...this._def.checks, { kind: `toLowerCase` }],
    });
  }
  toUpperCase() {
    return new e({
      ...this._def,
      checks: [...this._def.checks, { kind: `toUpperCase` }],
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === `datetime`);
  }
  get isDate() {
    return !!this._def.checks.find((e) => e.kind === `date`);
  }
  get isTime() {
    return !!this._def.checks.find((e) => e.kind === `time`);
  }
  get isDuration() {
    return !!this._def.checks.find((e) => e.kind === `duration`);
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === `email`);
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === `url`);
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === `emoji`);
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === `uuid`);
  }
  get isNANOID() {
    return !!this._def.checks.find((e) => e.kind === `nanoid`);
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === `cuid`);
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === `cuid2`);
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === `ulid`);
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === `ip`);
  }
  get isCIDR() {
    return !!this._def.checks.find((e) => e.kind === `cidr`);
  }
  get isBase64() {
    return !!this._def.checks.find((e) => e.kind === `base64`);
  }
  get isBase64url() {
    return !!this._def.checks.find((e) => e.kind === `base64url`);
  }
  get minLength() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `min` && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `max` && (e === null || t.value < e) && (e = t.value);
    return e;
  }
};
ft.create = (e) =>
  new ft({
    checks: [],
    typeName: $.ZodString,
    coerce: e?.coerce ?? !1,
    ...V(e),
  });
function pt(e, t) {
  let n = (e.toString().split(`.`)[1] || ``).length,
    r = (t.toString().split(`.`)[1] || ``).length,
    i = n > r ? n : r;
  return (
    (Number.parseInt(e.toFixed(i).replace(`.`, ``)) %
      Number.parseInt(t.toFixed(i).replace(`.`, ``))) /
    10 ** i
  );
}
var mt = class e extends H {
  constructor() {
    (super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf));
  }
  _parse(e) {
    if (
      (this._def.coerce && (e.data = Number(e.data)),
      this._getType(e) !== k.number)
    ) {
      let t = this._getOrReturnCtx(e);
      return (
        P(t, {
          code: j.invalid_type,
          expected: k.number,
          received: t.parsedType,
        }),
        I
      );
    }
    let t,
      n = new F();
    for (let r of this._def.checks)
      r.kind === `int`
        ? O.isInteger(e.data) ||
          ((t = this._getOrReturnCtx(e, t)),
          P(t, {
            code: j.invalid_type,
            expected: `integer`,
            received: `float`,
            message: r.message,
          }),
          n.dirty())
        : r.kind === `min`
          ? (r.inclusive ? e.data < r.value : e.data <= r.value) &&
            ((t = this._getOrReturnCtx(e, t)),
            P(t, {
              code: j.too_small,
              minimum: r.value,
              type: `number`,
              inclusive: r.inclusive,
              exact: !1,
              message: r.message,
            }),
            n.dirty())
          : r.kind === `max`
            ? (r.inclusive ? e.data > r.value : e.data >= r.value) &&
              ((t = this._getOrReturnCtx(e, t)),
              P(t, {
                code: j.too_big,
                maximum: r.value,
                type: `number`,
                inclusive: r.inclusive,
                exact: !1,
                message: r.message,
              }),
              n.dirty())
            : r.kind === `multipleOf`
              ? pt(e.data, r.value) !== 0 &&
                ((t = this._getOrReturnCtx(e, t)),
                P(t, {
                  code: j.not_multiple_of,
                  multipleOf: r.value,
                  message: r.message,
                }),
                n.dirty())
              : r.kind === `finite`
                ? Number.isFinite(e.data) ||
                  ((t = this._getOrReturnCtx(e, t)),
                  P(t, { code: j.not_finite, message: r.message }),
                  n.dirty())
                : O.assertNever(r);
    return { status: n.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit(`min`, e, !0, z.toString(t));
  }
  gt(e, t) {
    return this.setLimit(`min`, e, !1, z.toString(t));
  }
  lte(e, t) {
    return this.setLimit(`max`, e, !0, z.toString(t));
  }
  lt(e, t) {
    return this.setLimit(`max`, e, !1, z.toString(t));
  }
  setLimit(t, n, r, i) {
    return new e({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: t, value: n, inclusive: r, message: z.toString(i) },
      ],
    });
  }
  _addCheck(t) {
    return new e({ ...this._def, checks: [...this._def.checks, t] });
  }
  int(e) {
    return this._addCheck({ kind: `int`, message: z.toString(e) });
  }
  positive(e) {
    return this._addCheck({
      kind: `min`,
      value: 0,
      inclusive: !1,
      message: z.toString(e),
    });
  }
  negative(e) {
    return this._addCheck({
      kind: `max`,
      value: 0,
      inclusive: !1,
      message: z.toString(e),
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: `max`,
      value: 0,
      inclusive: !0,
      message: z.toString(e),
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: `min`,
      value: 0,
      inclusive: !0,
      message: z.toString(e),
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: `multipleOf`,
      value: e,
      message: z.toString(t),
    });
  }
  finite(e) {
    return this._addCheck({ kind: `finite`, message: z.toString(e) });
  }
  safe(e) {
    return this._addCheck({
      kind: `min`,
      inclusive: !0,
      value: -(2 ** 53 - 1),
      message: z.toString(e),
    })._addCheck({
      kind: `max`,
      inclusive: !0,
      value: 2 ** 53 - 1,
      message: z.toString(e),
    });
  }
  get minValue() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `min` && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `max` && (e === null || t.value < e) && (e = t.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find(
      (e) =>
        e.kind === `int` || (e.kind === `multipleOf` && O.isInteger(e.value)),
    );
  }
  get isFinite() {
    let e = null,
      t = null;
    for (let n of this._def.checks)
      if (n.kind === `finite` || n.kind === `int` || n.kind === `multipleOf`)
        return !0;
      else
        n.kind === `min`
          ? (t === null || n.value > t) && (t = n.value)
          : n.kind === `max` && (e === null || n.value < e) && (e = n.value);
    return Number.isFinite(t) && Number.isFinite(e);
  }
};
mt.create = (e) =>
  new mt({
    checks: [],
    typeName: $.ZodNumber,
    coerce: e?.coerce || !1,
    ...V(e),
  });
var ht = class e extends H {
  constructor() {
    (super(...arguments), (this.min = this.gte), (this.max = this.lte));
  }
  _parse(e) {
    if (this._def.coerce)
      try {
        e.data = BigInt(e.data);
      } catch {
        return this._getInvalidInput(e);
      }
    if (this._getType(e) !== k.bigint) return this._getInvalidInput(e);
    let t,
      n = new F();
    for (let r of this._def.checks)
      r.kind === `min`
        ? (r.inclusive ? e.data < r.value : e.data <= r.value) &&
          ((t = this._getOrReturnCtx(e, t)),
          P(t, {
            code: j.too_small,
            type: `bigint`,
            minimum: r.value,
            inclusive: r.inclusive,
            message: r.message,
          }),
          n.dirty())
        : r.kind === `max`
          ? (r.inclusive ? e.data > r.value : e.data >= r.value) &&
            ((t = this._getOrReturnCtx(e, t)),
            P(t, {
              code: j.too_big,
              type: `bigint`,
              maximum: r.value,
              inclusive: r.inclusive,
              message: r.message,
            }),
            n.dirty())
          : r.kind === `multipleOf`
            ? e.data % r.value !== BigInt(0) &&
              ((t = this._getOrReturnCtx(e, t)),
              P(t, {
                code: j.not_multiple_of,
                multipleOf: r.value,
                message: r.message,
              }),
              n.dirty())
            : O.assertNever(r);
    return { status: n.value, value: e.data };
  }
  _getInvalidInput(e) {
    let t = this._getOrReturnCtx(e);
    return (
      P(t, {
        code: j.invalid_type,
        expected: k.bigint,
        received: t.parsedType,
      }),
      I
    );
  }
  gte(e, t) {
    return this.setLimit(`min`, e, !0, z.toString(t));
  }
  gt(e, t) {
    return this.setLimit(`min`, e, !1, z.toString(t));
  }
  lte(e, t) {
    return this.setLimit(`max`, e, !0, z.toString(t));
  }
  lt(e, t) {
    return this.setLimit(`max`, e, !1, z.toString(t));
  }
  setLimit(t, n, r, i) {
    return new e({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: t, value: n, inclusive: r, message: z.toString(i) },
      ],
    });
  }
  _addCheck(t) {
    return new e({ ...this._def, checks: [...this._def.checks, t] });
  }
  positive(e) {
    return this._addCheck({
      kind: `min`,
      value: BigInt(0),
      inclusive: !1,
      message: z.toString(e),
    });
  }
  negative(e) {
    return this._addCheck({
      kind: `max`,
      value: BigInt(0),
      inclusive: !1,
      message: z.toString(e),
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: `max`,
      value: BigInt(0),
      inclusive: !0,
      message: z.toString(e),
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: `min`,
      value: BigInt(0),
      inclusive: !0,
      message: z.toString(e),
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: `multipleOf`,
      value: e,
      message: z.toString(t),
    });
  }
  get minValue() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `min` && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `max` && (e === null || t.value < e) && (e = t.value);
    return e;
  }
};
ht.create = (e) =>
  new ht({
    checks: [],
    typeName: $.ZodBigInt,
    coerce: e?.coerce ?? !1,
    ...V(e),
  });
var gt = class extends H {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = !!e.data), this._getType(e) !== k.boolean)
    ) {
      let t = this._getOrReturnCtx(e);
      return (
        P(t, {
          code: j.invalid_type,
          expected: k.boolean,
          received: t.parsedType,
        }),
        I
      );
    }
    return L(e.data);
  }
};
gt.create = (e) =>
  new gt({ typeName: $.ZodBoolean, coerce: e?.coerce || !1, ...V(e) });
var _t = class e extends H {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = new Date(e.data)),
      this._getType(e) !== k.date)
    ) {
      let t = this._getOrReturnCtx(e);
      return (
        P(t, {
          code: j.invalid_type,
          expected: k.date,
          received: t.parsedType,
        }),
        I
      );
    }
    if (Number.isNaN(e.data.getTime()))
      return (P(this._getOrReturnCtx(e), { code: j.invalid_date }), I);
    let t = new F(),
      n;
    for (let r of this._def.checks)
      r.kind === `min`
        ? e.data.getTime() < r.value &&
          ((n = this._getOrReturnCtx(e, n)),
          P(n, {
            code: j.too_small,
            message: r.message,
            inclusive: !0,
            exact: !1,
            minimum: r.value,
            type: `date`,
          }),
          t.dirty())
        : r.kind === `max`
          ? e.data.getTime() > r.value &&
            ((n = this._getOrReturnCtx(e, n)),
            P(n, {
              code: j.too_big,
              message: r.message,
              inclusive: !0,
              exact: !1,
              maximum: r.value,
              type: `date`,
            }),
            t.dirty())
          : O.assertNever(r);
    return { status: t.value, value: new Date(e.data.getTime()) };
  }
  _addCheck(t) {
    return new e({ ...this._def, checks: [...this._def.checks, t] });
  }
  min(e, t) {
    return this._addCheck({
      kind: `min`,
      value: e.getTime(),
      message: z.toString(t),
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: `max`,
      value: e.getTime(),
      message: z.toString(t),
    });
  }
  get minDate() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `min` && (e === null || t.value > e) && (e = t.value);
    return e == null ? null : new Date(e);
  }
  get maxDate() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `max` && (e === null || t.value < e) && (e = t.value);
    return e == null ? null : new Date(e);
  }
};
_t.create = (e) =>
  new _t({ checks: [], coerce: e?.coerce || !1, typeName: $.ZodDate, ...V(e) });
var vt = class extends H {
  _parse(e) {
    if (this._getType(e) !== k.symbol) {
      let t = this._getOrReturnCtx(e);
      return (
        P(t, {
          code: j.invalid_type,
          expected: k.symbol,
          received: t.parsedType,
        }),
        I
      );
    }
    return L(e.data);
  }
};
vt.create = (e) => new vt({ typeName: $.ZodSymbol, ...V(e) });
var yt = class extends H {
  _parse(e) {
    if (this._getType(e) !== k.undefined) {
      let t = this._getOrReturnCtx(e);
      return (
        P(t, {
          code: j.invalid_type,
          expected: k.undefined,
          received: t.parsedType,
        }),
        I
      );
    }
    return L(e.data);
  }
};
yt.create = (e) => new yt({ typeName: $.ZodUndefined, ...V(e) });
var bt = class extends H {
  _parse(e) {
    if (this._getType(e) !== k.null) {
      let t = this._getOrReturnCtx(e);
      return (
        P(t, {
          code: j.invalid_type,
          expected: k.null,
          received: t.parsedType,
        }),
        I
      );
    }
    return L(e.data);
  }
};
bt.create = (e) => new bt({ typeName: $.ZodNull, ...V(e) });
var xt = class extends H {
  constructor() {
    (super(...arguments), (this._any = !0));
  }
  _parse(e) {
    return L(e.data);
  }
};
xt.create = (e) => new xt({ typeName: $.ZodAny, ...V(e) });
var U = class extends H {
  constructor() {
    (super(...arguments), (this._unknown = !0));
  }
  _parse(e) {
    return L(e.data);
  }
};
U.create = (e) => new U({ typeName: $.ZodUnknown, ...V(e) });
var W = class extends H {
  _parse(e) {
    let t = this._getOrReturnCtx(e);
    return (
      P(t, { code: j.invalid_type, expected: k.never, received: t.parsedType }),
      I
    );
  }
};
W.create = (e) => new W({ typeName: $.ZodNever, ...V(e) });
var St = class extends H {
  _parse(e) {
    if (this._getType(e) !== k.undefined) {
      let t = this._getOrReturnCtx(e);
      return (
        P(t, {
          code: j.invalid_type,
          expected: k.void,
          received: t.parsedType,
        }),
        I
      );
    }
    return L(e.data);
  }
};
St.create = (e) => new St({ typeName: $.ZodVoid, ...V(e) });
var G = class e extends H {
  _parse(e) {
    let { ctx: t, status: n } = this._processInputParams(e),
      r = this._def;
    if (t.parsedType !== k.array)
      return (
        P(t, {
          code: j.invalid_type,
          expected: k.array,
          received: t.parsedType,
        }),
        I
      );
    if (r.exactLength !== null) {
      let e = t.data.length > r.exactLength.value,
        i = t.data.length < r.exactLength.value;
      (e || i) &&
        (P(t, {
          code: e ? j.too_big : j.too_small,
          minimum: i ? r.exactLength.value : void 0,
          maximum: e ? r.exactLength.value : void 0,
          type: `array`,
          inclusive: !0,
          exact: !0,
          message: r.exactLength.message,
        }),
        n.dirty());
    }
    if (
      (r.minLength !== null &&
        t.data.length < r.minLength.value &&
        (P(t, {
          code: j.too_small,
          minimum: r.minLength.value,
          type: `array`,
          inclusive: !0,
          exact: !1,
          message: r.minLength.message,
        }),
        n.dirty()),
      r.maxLength !== null &&
        t.data.length > r.maxLength.value &&
        (P(t, {
          code: j.too_big,
          maximum: r.maxLength.value,
          type: `array`,
          inclusive: !0,
          exact: !1,
          message: r.maxLength.message,
        }),
        n.dirty()),
      t.common.async)
    )
      return Promise.all(
        [...t.data].map((e, n) => r.type._parseAsync(new B(t, e, t.path, n))),
      ).then((e) => F.mergeArray(n, e));
    let i = [...t.data].map((e, n) =>
      r.type._parseSync(new B(t, e, t.path, n)),
    );
    return F.mergeArray(n, i);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new e({
      ...this._def,
      minLength: { value: t, message: z.toString(n) },
    });
  }
  max(t, n) {
    return new e({
      ...this._def,
      maxLength: { value: t, message: z.toString(n) },
    });
  }
  length(t, n) {
    return new e({
      ...this._def,
      exactLength: { value: t, message: z.toString(n) },
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
};
G.create = (e, t) =>
  new G({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: $.ZodArray,
    ...V(t),
  });
function K(e) {
  if (e instanceof q) {
    let t = {};
    for (let n in e.shape) {
      let r = e.shape[n];
      t[n] = Z.create(K(r));
    }
    return new q({ ...e._def, shape: () => t });
  } else if (e instanceof G) return new G({ ...e._def, type: K(e.element) });
  else if (e instanceof Z) return Z.create(K(e.unwrap()));
  else if (e instanceof Q) return Q.create(K(e.unwrap()));
  else if (e instanceof Y) return Y.create(e.items.map((e) => K(e)));
  else return e;
}
var q = class e extends H {
  constructor() {
    (super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend));
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    let e = this._def.shape(),
      t = O.objectKeys(e);
    return ((this._cached = { shape: e, keys: t }), this._cached);
  }
  _parse(e) {
    if (this._getType(e) !== k.object) {
      let t = this._getOrReturnCtx(e);
      return (
        P(t, {
          code: j.invalid_type,
          expected: k.object,
          received: t.parsedType,
        }),
        I
      );
    }
    let { status: t, ctx: n } = this._processInputParams(e),
      { shape: r, keys: i } = this._getCached(),
      a = [];
    if (!(this._def.catchall instanceof W && this._def.unknownKeys === `strip`))
      for (let e in n.data) i.includes(e) || a.push(e);
    let o = [];
    for (let e of i) {
      let t = r[e],
        i = n.data[e];
      o.push({
        key: { status: `valid`, value: e },
        value: t._parse(new B(n, i, n.path, e)),
        alwaysSet: e in n.data,
      });
    }
    if (this._def.catchall instanceof W) {
      let e = this._def.unknownKeys;
      if (e === `passthrough`)
        for (let e of a)
          o.push({
            key: { status: `valid`, value: e },
            value: { status: `valid`, value: n.data[e] },
          });
      else if (e === `strict`)
        a.length > 0 &&
          (P(n, { code: j.unrecognized_keys, keys: a }), t.dirty());
      else if (e !== `strip`)
        throw Error(`Internal ZodObject error: invalid unknownKeys value.`);
    } else {
      let e = this._def.catchall;
      for (let t of a) {
        let r = n.data[t];
        o.push({
          key: { status: `valid`, value: t },
          value: e._parse(new B(n, r, n.path, t)),
          alwaysSet: t in n.data,
        });
      }
    }
    return n.common.async
      ? Promise.resolve()
          .then(async () => {
            let e = [];
            for (let t of o) {
              let n = await t.key,
                r = await t.value;
              e.push({ key: n, value: r, alwaysSet: t.alwaysSet });
            }
            return e;
          })
          .then((e) => F.mergeObjectSync(t, e))
      : F.mergeObjectSync(t, o);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return (
      z.errToObj,
      new e({
        ...this._def,
        unknownKeys: `strict`,
        ...(t === void 0
          ? {}
          : {
              errorMap: (e, n) => {
                let r = this._def.errorMap?.(e, n).message ?? n.defaultError;
                return e.code === `unrecognized_keys`
                  ? { message: z.errToObj(t).message ?? r }
                  : { message: r };
              },
            }),
      })
    );
  }
  strip() {
    return new e({ ...this._def, unknownKeys: `strip` });
  }
  passthrough() {
    return new e({ ...this._def, unknownKeys: `passthrough` });
  }
  extend(t) {
    return new e({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...t }),
    });
  }
  merge(t) {
    return new e({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({ ...this._def.shape(), ...t._def.shape() }),
      typeName: $.ZodObject,
    });
  }
  setKey(e, t) {
    return this.augment({ [e]: t });
  }
  catchall(t) {
    return new e({ ...this._def, catchall: t });
  }
  pick(t) {
    let n = {};
    for (let e of O.objectKeys(t))
      t[e] && this.shape[e] && (n[e] = this.shape[e]);
    return new e({ ...this._def, shape: () => n });
  }
  omit(t) {
    let n = {};
    for (let e of O.objectKeys(this.shape)) t[e] || (n[e] = this.shape[e]);
    return new e({ ...this._def, shape: () => n });
  }
  deepPartial() {
    return K(this);
  }
  partial(t) {
    let n = {};
    for (let e of O.objectKeys(this.shape)) {
      let r = this.shape[e];
      t && !t[e] ? (n[e] = r) : (n[e] = r.optional());
    }
    return new e({ ...this._def, shape: () => n });
  }
  required(t) {
    let n = {};
    for (let e of O.objectKeys(this.shape))
      if (t && !t[e]) n[e] = this.shape[e];
      else {
        let t = this.shape[e];
        for (; t instanceof Z; ) t = t._def.innerType;
        n[e] = t;
      }
    return new e({ ...this._def, shape: () => n });
  }
  keyof() {
    return Nt(O.objectKeys(this.shape));
  }
};
((q.create = (e, t) =>
  new q({
    shape: () => e,
    unknownKeys: `strip`,
    catchall: W.create(),
    typeName: $.ZodObject,
    ...V(t),
  })),
  (q.strictCreate = (e, t) =>
    new q({
      shape: () => e,
      unknownKeys: `strict`,
      catchall: W.create(),
      typeName: $.ZodObject,
      ...V(t),
    })),
  (q.lazycreate = (e, t) =>
    new q({
      shape: e,
      unknownKeys: `strip`,
      catchall: W.create(),
      typeName: $.ZodObject,
      ...V(t),
    })));
var Ct = class extends H {
  _parse(e) {
    let { ctx: t } = this._processInputParams(e),
      n = this._def.options;
    function r(e) {
      for (let t of e) if (t.result.status === `valid`) return t.result;
      for (let n of e)
        if (n.result.status === `dirty`)
          return (t.common.issues.push(...n.ctx.common.issues), n.result);
      let n = e.map((e) => new M(e.ctx.common.issues));
      return (P(t, { code: j.invalid_union, unionErrors: n }), I);
    }
    if (t.common.async)
      return Promise.all(
        n.map(async (e) => {
          let n = { ...t, common: { ...t.common, issues: [] }, parent: null };
          return {
            result: await e._parseAsync({
              data: t.data,
              path: t.path,
              parent: n,
            }),
            ctx: n,
          };
        }),
      ).then(r);
    {
      let e,
        r = [];
      for (let i of n) {
        let n = { ...t, common: { ...t.common, issues: [] }, parent: null },
          a = i._parseSync({ data: t.data, path: t.path, parent: n });
        if (a.status === `valid`) return a;
        (a.status === `dirty` && !e && (e = { result: a, ctx: n }),
          n.common.issues.length && r.push(n.common.issues));
      }
      if (e) return (t.common.issues.push(...e.ctx.common.issues), e.result);
      let i = r.map((e) => new M(e));
      return (P(t, { code: j.invalid_union, unionErrors: i }), I);
    }
  }
  get options() {
    return this._def.options;
  }
};
Ct.create = (e, t) => new Ct({ options: e, typeName: $.ZodUnion, ...V(t) });
var J = (e) =>
    e instanceof jt
      ? J(e.schema)
      : e instanceof X
        ? J(e.innerType())
        : e instanceof Mt
          ? [e.value]
          : e instanceof Pt
            ? e.options
            : e instanceof Ft
              ? O.objectValues(e.enum)
              : e instanceof Lt
                ? J(e._def.innerType)
                : e instanceof yt
                  ? [void 0]
                  : e instanceof bt
                    ? [null]
                    : e instanceof Z
                      ? [void 0, ...J(e.unwrap())]
                      : e instanceof Q
                        ? [null, ...J(e.unwrap())]
                        : e instanceof Bt || e instanceof Ht
                          ? J(e.unwrap())
                          : e instanceof Rt
                            ? J(e._def.innerType)
                            : [],
  wt = class e extends H {
    _parse(e) {
      let { ctx: t } = this._processInputParams(e);
      if (t.parsedType !== k.object)
        return (
          P(t, {
            code: j.invalid_type,
            expected: k.object,
            received: t.parsedType,
          }),
          I
        );
      let n = this.discriminator,
        r = t.data[n],
        i = this.optionsMap.get(r);
      return i
        ? t.common.async
          ? i._parseAsync({ data: t.data, path: t.path, parent: t })
          : i._parseSync({ data: t.data, path: t.path, parent: t })
        : (P(t, {
            code: j.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [n],
          }),
          I);
    }
    get discriminator() {
      return this._def.discriminator;
    }
    get options() {
      return this._def.options;
    }
    get optionsMap() {
      return this._def.optionsMap;
    }
    static create(t, n, r) {
      let i = new Map();
      for (let e of n) {
        let n = J(e.shape[t]);
        if (!n.length)
          throw Error(
            `A discriminator value for key \`${t}\` could not be extracted from all schema options`,
          );
        for (let r of n) {
          if (i.has(r))
            throw Error(
              `Discriminator property ${String(t)} has duplicate value ${String(r)}`,
            );
          i.set(r, e);
        }
      }
      return new e({
        typeName: $.ZodDiscriminatedUnion,
        discriminator: t,
        options: n,
        optionsMap: i,
        ...V(r),
      });
    }
  };
function Tt(e, t) {
  let n = A(e),
    r = A(t);
  if (e === t) return { valid: !0, data: e };
  if (n === k.object && r === k.object) {
    let n = O.objectKeys(t),
      r = O.objectKeys(e).filter((e) => n.indexOf(e) !== -1),
      i = { ...e, ...t };
    for (let n of r) {
      let r = Tt(e[n], t[n]);
      if (!r.valid) return { valid: !1 };
      i[n] = r.data;
    }
    return { valid: !0, data: i };
  } else if (n === k.array && r === k.array) {
    if (e.length !== t.length) return { valid: !1 };
    let n = [];
    for (let r = 0; r < e.length; r++) {
      let i = e[r],
        a = t[r],
        o = Tt(i, a);
      if (!o.valid) return { valid: !1 };
      n.push(o.data);
    }
    return { valid: !0, data: n };
  } else if (n === k.date && r === k.date && +e == +t)
    return { valid: !0, data: e };
  else return { valid: !1 };
}
var Et = class extends H {
  _parse(e) {
    let { status: t, ctx: n } = this._processInputParams(e),
      r = (e, r) => {
        if (Re(e) || Re(r)) return I;
        let i = Tt(e.value, r.value);
        return i.valid
          ? ((ze(e) || ze(r)) && t.dirty(), { status: t.value, value: i.data })
          : (P(n, { code: j.invalid_intersection_types }), I);
      };
    return n.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: n.data, path: n.path, parent: n }),
          this._def.right._parseAsync({
            data: n.data,
            path: n.path,
            parent: n,
          }),
        ]).then(([e, t]) => r(e, t))
      : r(
          this._def.left._parseSync({ data: n.data, path: n.path, parent: n }),
          this._def.right._parseSync({ data: n.data, path: n.path, parent: n }),
        );
  }
};
Et.create = (e, t, n) =>
  new Et({ left: e, right: t, typeName: $.ZodIntersection, ...V(n) });
var Y = class e extends H {
  _parse(e) {
    let { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== k.array)
      return (
        P(n, {
          code: j.invalid_type,
          expected: k.array,
          received: n.parsedType,
        }),
        I
      );
    if (n.data.length < this._def.items.length)
      return (
        P(n, {
          code: j.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: `array`,
        }),
        I
      );
    !this._def.rest &&
      n.data.length > this._def.items.length &&
      (P(n, {
        code: j.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: `array`,
      }),
      t.dirty());
    let r = [...n.data]
      .map((e, t) => {
        let r = this._def.items[t] || this._def.rest;
        return r ? r._parse(new B(n, e, n.path, t)) : null;
      })
      .filter((e) => !!e);
    return n.common.async
      ? Promise.all(r).then((e) => F.mergeArray(t, e))
      : F.mergeArray(t, r);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new e({ ...this._def, rest: t });
  }
};
Y.create = (e, t) => {
  if (!Array.isArray(e))
    throw Error(`You must pass an array of schemas to z.tuple([ ... ])`);
  return new Y({ items: e, typeName: $.ZodTuple, rest: null, ...V(t) });
};
var Dt = class e extends H {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(e) {
      let { status: t, ctx: n } = this._processInputParams(e);
      if (n.parsedType !== k.object)
        return (
          P(n, {
            code: j.invalid_type,
            expected: k.object,
            received: n.parsedType,
          }),
          I
        );
      let r = [],
        i = this._def.keyType,
        a = this._def.valueType;
      for (let e in n.data)
        r.push({
          key: i._parse(new B(n, e, n.path, e)),
          value: a._parse(new B(n, n.data[e], n.path, e)),
          alwaysSet: e in n.data,
        });
      return n.common.async
        ? F.mergeObjectAsync(t, r)
        : F.mergeObjectSync(t, r);
    }
    get element() {
      return this._def.valueType;
    }
    static create(t, n, r) {
      return n instanceof H
        ? new e({ keyType: t, valueType: n, typeName: $.ZodRecord, ...V(r) })
        : new e({
            keyType: ft.create(),
            valueType: t,
            typeName: $.ZodRecord,
            ...V(n),
          });
    }
  },
  Ot = class extends H {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(e) {
      let { status: t, ctx: n } = this._processInputParams(e);
      if (n.parsedType !== k.map)
        return (
          P(n, {
            code: j.invalid_type,
            expected: k.map,
            received: n.parsedType,
          }),
          I
        );
      let r = this._def.keyType,
        i = this._def.valueType,
        a = [...n.data.entries()].map(([e, t], a) => ({
          key: r._parse(new B(n, e, n.path, [a, `key`])),
          value: i._parse(new B(n, t, n.path, [a, `value`])),
        }));
      if (n.common.async) {
        let e = new Map();
        return Promise.resolve().then(async () => {
          for (let n of a) {
            let r = await n.key,
              i = await n.value;
            if (r.status === `aborted` || i.status === `aborted`) return I;
            ((r.status === `dirty` || i.status === `dirty`) && t.dirty(),
              e.set(r.value, i.value));
          }
          return { status: t.value, value: e };
        });
      } else {
        let e = new Map();
        for (let n of a) {
          let r = n.key,
            i = n.value;
          if (r.status === `aborted` || i.status === `aborted`) return I;
          ((r.status === `dirty` || i.status === `dirty`) && t.dirty(),
            e.set(r.value, i.value));
        }
        return { status: t.value, value: e };
      }
    }
  };
Ot.create = (e, t, n) =>
  new Ot({ valueType: t, keyType: e, typeName: $.ZodMap, ...V(n) });
var kt = class e extends H {
  _parse(e) {
    let { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== k.set)
      return (
        P(n, { code: j.invalid_type, expected: k.set, received: n.parsedType }),
        I
      );
    let r = this._def;
    (r.minSize !== null &&
      n.data.size < r.minSize.value &&
      (P(n, {
        code: j.too_small,
        minimum: r.minSize.value,
        type: `set`,
        inclusive: !0,
        exact: !1,
        message: r.minSize.message,
      }),
      t.dirty()),
      r.maxSize !== null &&
        n.data.size > r.maxSize.value &&
        (P(n, {
          code: j.too_big,
          maximum: r.maxSize.value,
          type: `set`,
          inclusive: !0,
          exact: !1,
          message: r.maxSize.message,
        }),
        t.dirty()));
    let i = this._def.valueType;
    function a(e) {
      let n = new Set();
      for (let r of e) {
        if (r.status === `aborted`) return I;
        (r.status === `dirty` && t.dirty(), n.add(r.value));
      }
      return { status: t.value, value: n };
    }
    let o = [...n.data.values()].map((e, t) =>
      i._parse(new B(n, e, n.path, t)),
    );
    return n.common.async ? Promise.all(o).then((e) => a(e)) : a(o);
  }
  min(t, n) {
    return new e({
      ...this._def,
      minSize: { value: t, message: z.toString(n) },
    });
  }
  max(t, n) {
    return new e({
      ...this._def,
      maxSize: { value: t, message: z.toString(n) },
    });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
};
kt.create = (e, t) =>
  new kt({
    valueType: e,
    minSize: null,
    maxSize: null,
    typeName: $.ZodSet,
    ...V(t),
  });
var At = class e extends H {
    constructor() {
      (super(...arguments), (this.validate = this.implement));
    }
    _parse(e) {
      let { ctx: t } = this._processInputParams(e);
      if (t.parsedType !== k.function)
        return (
          P(t, {
            code: j.invalid_type,
            expected: k.function,
            received: t.parsedType,
          }),
          I
        );
      function n(e, n) {
        return Ie({
          data: e,
          path: t.path,
          errorMaps: [
            t.common.contextualErrorMap,
            t.schemaErrorMap,
            Fe(),
            N,
          ].filter((e) => !!e),
          issueData: { code: j.invalid_arguments, argumentsError: n },
        });
      }
      function r(e, n) {
        return Ie({
          data: e,
          path: t.path,
          errorMaps: [
            t.common.contextualErrorMap,
            t.schemaErrorMap,
            Fe(),
            N,
          ].filter((e) => !!e),
          issueData: { code: j.invalid_return_type, returnTypeError: n },
        });
      }
      let i = { errorMap: t.common.contextualErrorMap },
        a = t.data;
      if (this._def.returns instanceof It) {
        let e = this;
        return L(async function (...t) {
          let o = new M([]),
            s = await e._def.args.parseAsync(t, i).catch((e) => {
              throw (o.addIssue(n(t, e)), o);
            }),
            c = await Reflect.apply(a, this, s);
          return await e._def.returns._def.type.parseAsync(c, i).catch((e) => {
            throw (o.addIssue(r(c, e)), o);
          });
        });
      } else {
        let e = this;
        return L(function (...t) {
          let o = e._def.args.safeParse(t, i);
          if (!o.success) throw new M([n(t, o.error)]);
          let s = Reflect.apply(a, this, o.data),
            c = e._def.returns.safeParse(s, i);
          if (!c.success) throw new M([r(s, c.error)]);
          return c.data;
        });
      }
    }
    parameters() {
      return this._def.args;
    }
    returnType() {
      return this._def.returns;
    }
    args(...t) {
      return new e({ ...this._def, args: Y.create(t).rest(U.create()) });
    }
    returns(t) {
      return new e({ ...this._def, returns: t });
    }
    implement(e) {
      return this.parse(e);
    }
    strictImplement(e) {
      return this.parse(e);
    }
    static create(t, n, r) {
      return new e({
        args: t || Y.create([]).rest(U.create()),
        returns: n || U.create(),
        typeName: $.ZodFunction,
        ...V(r),
      });
    }
  },
  jt = class extends H {
    get schema() {
      return this._def.getter();
    }
    _parse(e) {
      let { ctx: t } = this._processInputParams(e);
      return this._def
        .getter()
        ._parse({ data: t.data, path: t.path, parent: t });
    }
  };
jt.create = (e, t) => new jt({ getter: e, typeName: $.ZodLazy, ...V(t) });
var Mt = class extends H {
  _parse(e) {
    if (e.data !== this._def.value) {
      let t = this._getOrReturnCtx(e);
      return (
        P(t, {
          received: t.data,
          code: j.invalid_literal,
          expected: this._def.value,
        }),
        I
      );
    }
    return { status: `valid`, value: e.data };
  }
  get value() {
    return this._def.value;
  }
};
Mt.create = (e, t) => new Mt({ value: e, typeName: $.ZodLiteral, ...V(t) });
function Nt(e, t) {
  return new Pt({ values: e, typeName: $.ZodEnum, ...V(t) });
}
var Pt = class e extends H {
  _parse(e) {
    if (typeof e.data != `string`) {
      let t = this._getOrReturnCtx(e),
        n = this._def.values;
      return (
        P(t, {
          expected: O.joinValues(n),
          received: t.parsedType,
          code: j.invalid_type,
        }),
        I
      );
    }
    if (
      ((this._cache ||= new Set(this._def.values)), !this._cache.has(e.data))
    ) {
      let t = this._getOrReturnCtx(e),
        n = this._def.values;
      return (
        P(t, { received: t.data, code: j.invalid_enum_value, options: n }),
        I
      );
    }
    return L(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    let e = {};
    for (let t of this._def.values) e[t] = t;
    return e;
  }
  get Values() {
    let e = {};
    for (let t of this._def.values) e[t] = t;
    return e;
  }
  get Enum() {
    let e = {};
    for (let t of this._def.values) e[t] = t;
    return e;
  }
  extract(t, n = this._def) {
    return e.create(t, { ...this._def, ...n });
  }
  exclude(t, n = this._def) {
    return e.create(
      this.options.filter((e) => !t.includes(e)),
      { ...this._def, ...n },
    );
  }
};
Pt.create = Nt;
var Ft = class extends H {
  _parse(e) {
    let t = O.getValidEnumValues(this._def.values),
      n = this._getOrReturnCtx(e);
    if (n.parsedType !== k.string && n.parsedType !== k.number) {
      let e = O.objectValues(t);
      return (
        P(n, {
          expected: O.joinValues(e),
          received: n.parsedType,
          code: j.invalid_type,
        }),
        I
      );
    }
    if (
      ((this._cache ||= new Set(O.getValidEnumValues(this._def.values))),
      !this._cache.has(e.data))
    ) {
      let e = O.objectValues(t);
      return (
        P(n, { received: n.data, code: j.invalid_enum_value, options: e }),
        I
      );
    }
    return L(e.data);
  }
  get enum() {
    return this._def.values;
  }
};
Ft.create = (e, t) => new Ft({ values: e, typeName: $.ZodNativeEnum, ...V(t) });
var It = class extends H {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    let { ctx: t } = this._processInputParams(e);
    return t.parsedType !== k.promise && t.common.async === !1
      ? (P(t, {
          code: j.invalid_type,
          expected: k.promise,
          received: t.parsedType,
        }),
        I)
      : L(
          (t.parsedType === k.promise ? t.data : Promise.resolve(t.data)).then(
            (e) =>
              this._def.type.parseAsync(e, {
                path: t.path,
                errorMap: t.common.contextualErrorMap,
              }),
          ),
        );
  }
};
It.create = (e, t) => new It({ type: e, typeName: $.ZodPromise, ...V(t) });
var X = class extends H {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === $.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(e) {
    let { status: t, ctx: n } = this._processInputParams(e),
      r = this._def.effect || null,
      i = {
        addIssue: (e) => {
          (P(n, e), e.fatal ? t.abort() : t.dirty());
        },
        get path() {
          return n.path;
        },
      };
    if (((i.addIssue = i.addIssue.bind(i)), r.type === `preprocess`)) {
      let e = r.transform(n.data, i);
      if (n.common.async)
        return Promise.resolve(e).then(async (e) => {
          if (t.value === `aborted`) return I;
          let r = await this._def.schema._parseAsync({
            data: e,
            path: n.path,
            parent: n,
          });
          return r.status === `aborted`
            ? I
            : r.status === `dirty` || t.value === `dirty`
              ? Le(r.value)
              : r;
        });
      {
        if (t.value === `aborted`) return I;
        let r = this._def.schema._parseSync({
          data: e,
          path: n.path,
          parent: n,
        });
        return r.status === `aborted`
          ? I
          : r.status === `dirty` || t.value === `dirty`
            ? Le(r.value)
            : r;
      }
    }
    if (r.type === `refinement`) {
      let e = (e) => {
        let t = r.refinement(e, i);
        if (n.common.async) return Promise.resolve(t);
        if (t instanceof Promise)
          throw Error(
            `Async refinement encountered during synchronous parse operation. Use .parseAsync instead.`,
          );
        return e;
      };
      if (n.common.async === !1) {
        let r = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n,
        });
        return r.status === `aborted`
          ? I
          : (r.status === `dirty` && t.dirty(),
            e(r.value),
            { status: t.value, value: r.value });
      } else
        return this._def.schema
          ._parseAsync({ data: n.data, path: n.path, parent: n })
          .then((n) =>
            n.status === `aborted`
              ? I
              : (n.status === `dirty` && t.dirty(),
                e(n.value).then(() => ({ status: t.value, value: n.value }))),
          );
    }
    if (r.type === `transform`)
      if (n.common.async === !1) {
        let e = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n,
        });
        if (!R(e)) return I;
        let a = r.transform(e.value, i);
        if (a instanceof Promise)
          throw Error(
            `Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`,
          );
        return { status: t.value, value: a };
      } else
        return this._def.schema
          ._parseAsync({ data: n.data, path: n.path, parent: n })
          .then((e) =>
            R(e)
              ? Promise.resolve(r.transform(e.value, i)).then((e) => ({
                  status: t.value,
                  value: e,
                }))
              : I,
          );
    O.assertNever(r);
  }
};
((X.create = (e, t, n) =>
  new X({ schema: e, typeName: $.ZodEffects, effect: t, ...V(n) })),
  (X.createWithPreprocess = (e, t, n) =>
    new X({
      schema: t,
      effect: { type: `preprocess`, transform: e },
      typeName: $.ZodEffects,
      ...V(n),
    })));
var Z = class extends H {
  _parse(e) {
    return this._getType(e) === k.undefined
      ? L(void 0)
      : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
};
Z.create = (e, t) => new Z({ innerType: e, typeName: $.ZodOptional, ...V(t) });
var Q = class extends H {
  _parse(e) {
    return this._getType(e) === k.null
      ? L(null)
      : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
};
Q.create = (e, t) => new Q({ innerType: e, typeName: $.ZodNullable, ...V(t) });
var Lt = class extends H {
  _parse(e) {
    let { ctx: t } = this._processInputParams(e),
      n = t.data;
    return (
      t.parsedType === k.undefined && (n = this._def.defaultValue()),
      this._def.innerType._parse({ data: n, path: t.path, parent: t })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
};
Lt.create = (e, t) =>
  new Lt({
    innerType: e,
    typeName: $.ZodDefault,
    defaultValue: typeof t.default == `function` ? t.default : () => t.default,
    ...V(t),
  });
var Rt = class extends H {
  _parse(e) {
    let { ctx: t } = this._processInputParams(e),
      n = { ...t, common: { ...t.common, issues: [] } },
      r = this._def.innerType._parse({
        data: n.data,
        path: n.path,
        parent: { ...n },
      });
    return Be(r)
      ? r.then((e) => ({
          status: `valid`,
          value:
            e.status === `valid`
              ? e.value
              : this._def.catchValue({
                  get error() {
                    return new M(n.common.issues);
                  },
                  input: n.data,
                }),
        }))
      : {
          status: `valid`,
          value:
            r.status === `valid`
              ? r.value
              : this._def.catchValue({
                  get error() {
                    return new M(n.common.issues);
                  },
                  input: n.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
};
Rt.create = (e, t) =>
  new Rt({
    innerType: e,
    typeName: $.ZodCatch,
    catchValue: typeof t.catch == `function` ? t.catch : () => t.catch,
    ...V(t),
  });
var zt = class extends H {
  _parse(e) {
    if (this._getType(e) !== k.nan) {
      let t = this._getOrReturnCtx(e);
      return (
        P(t, { code: j.invalid_type, expected: k.nan, received: t.parsedType }),
        I
      );
    }
    return { status: `valid`, value: e.data };
  }
};
zt.create = (e) => new zt({ typeName: $.ZodNaN, ...V(e) });
var Bt = class extends H {
    _parse(e) {
      let { ctx: t } = this._processInputParams(e),
        n = t.data;
      return this._def.type._parse({ data: n, path: t.path, parent: t });
    }
    unwrap() {
      return this._def.type;
    }
  },
  Vt = class e extends H {
    _parse(e) {
      let { status: t, ctx: n } = this._processInputParams(e);
      if (n.common.async)
        return (async () => {
          let e = await this._def.in._parseAsync({
            data: n.data,
            path: n.path,
            parent: n,
          });
          return e.status === `aborted`
            ? I
            : e.status === `dirty`
              ? (t.dirty(), Le(e.value))
              : this._def.out._parseAsync({
                  data: e.value,
                  path: n.path,
                  parent: n,
                });
        })();
      {
        let e = this._def.in._parseSync({
          data: n.data,
          path: n.path,
          parent: n,
        });
        return e.status === `aborted`
          ? I
          : e.status === `dirty`
            ? (t.dirty(), { status: `dirty`, value: e.value })
            : this._def.out._parseSync({
                data: e.value,
                path: n.path,
                parent: n,
              });
      }
    }
    static create(t, n) {
      return new e({ in: t, out: n, typeName: $.ZodPipeline });
    }
  },
  Ht = class extends H {
    _parse(e) {
      let t = this._def.innerType._parse(e),
        n = (e) => (R(e) && (e.value = Object.freeze(e.value)), e);
      return Be(t) ? t.then((e) => n(e)) : n(t);
    }
    unwrap() {
      return this._def.innerType;
    }
  };
((Ht.create = (e, t) =>
  new Ht({ innerType: e, typeName: $.ZodReadonly, ...V(t) })),
  q.lazycreate);
var $;
(function (e) {
  ((e.ZodString = `ZodString`),
    (e.ZodNumber = `ZodNumber`),
    (e.ZodNaN = `ZodNaN`),
    (e.ZodBigInt = `ZodBigInt`),
    (e.ZodBoolean = `ZodBoolean`),
    (e.ZodDate = `ZodDate`),
    (e.ZodSymbol = `ZodSymbol`),
    (e.ZodUndefined = `ZodUndefined`),
    (e.ZodNull = `ZodNull`),
    (e.ZodAny = `ZodAny`),
    (e.ZodUnknown = `ZodUnknown`),
    (e.ZodNever = `ZodNever`),
    (e.ZodVoid = `ZodVoid`),
    (e.ZodArray = `ZodArray`),
    (e.ZodObject = `ZodObject`),
    (e.ZodUnion = `ZodUnion`),
    (e.ZodDiscriminatedUnion = `ZodDiscriminatedUnion`),
    (e.ZodIntersection = `ZodIntersection`),
    (e.ZodTuple = `ZodTuple`),
    (e.ZodRecord = `ZodRecord`),
    (e.ZodMap = `ZodMap`),
    (e.ZodSet = `ZodSet`),
    (e.ZodFunction = `ZodFunction`),
    (e.ZodLazy = `ZodLazy`),
    (e.ZodLiteral = `ZodLiteral`),
    (e.ZodEnum = `ZodEnum`),
    (e.ZodEffects = `ZodEffects`),
    (e.ZodNativeEnum = `ZodNativeEnum`),
    (e.ZodOptional = `ZodOptional`),
    (e.ZodNullable = `ZodNullable`),
    (e.ZodDefault = `ZodDefault`),
    (e.ZodCatch = `ZodCatch`),
    (e.ZodPromise = `ZodPromise`),
    (e.ZodBranded = `ZodBranded`),
    (e.ZodPipeline = `ZodPipeline`),
    (e.ZodReadonly = `ZodReadonly`));
})(($ ||= {}));
var Ut = ft.create;
(mt.create,
  zt.create,
  ht.create,
  gt.create,
  _t.create,
  vt.create,
  yt.create,
  bt.create,
  xt.create,
  U.create,
  W.create,
  St.create,
  G.create);
var Wt = q.create;
(q.strictCreate,
  Ct.create,
  wt.create,
  Et.create,
  Y.create,
  Dt.create,
  Ot.create,
  kt.create,
  At.create,
  jt.create,
  Mt.create,
  Pt.create,
  Ft.create,
  It.create,
  X.create,
  Z.create,
  Q.create,
  X.createWithPreprocess,
  Vt.create);
var Gt = [
    `gmail.com`,
    `hotmail.com`,
    `outlook.com`,
    `outlook.com.br`,
    `live.com`,
    `yahoo.com`,
    `yahoo.com.br`,
    `icloud.com`,
    `me.com`,
    `bol.com.br`,
    `uol.com.br`,
    `terra.com.br`,
    `globo.com`,
    `ig.com.br`,
    `r7.com`,
    `msn.com`,
    `protonmail.com`,
    `proton.me`,
    `zipmail.com.br`,
    `aol.com`,
    `yandex.com`,
  ],
  Kt = {
    "gmail.co": `gmail.com`,
    "gmail.con": `gmail.com`,
    "gmail.comm": `gmail.com`,
    "gmail.cm": `gmail.com`,
    "gmail.co.br": `gmail.com`,
    "gmail.com.br": `gmail.com`,
    "gmai.com": `gmail.com`,
    "gmial.com": `gmail.com`,
    "gmail.cim": `gmail.com`,
    "gemail.com": `gmail.com`,
    "gmaill.com": `gmail.com`,
    "hotmail.co": `hotmail.com`,
    "hotmail.con": `hotmail.com`,
    "hotmail.cm": `hotmail.com`,
    "hotmial.com": `hotmail.com`,
    "hotmai.com": `hotmail.com`,
    "hormail.com": `hotmail.com`,
    "outlook.co": `outlook.com`,
    "outlok.com": `outlook.com`,
    "outllok.com": `outlook.com`,
    "yahoo.co": `yahoo.com`,
    "yaho.com": `yahoo.com`,
    "icloud.co": `icloud.com`,
    "iclod.com": `icloud.com`,
    "uol.com": `uol.com.br`,
    "bol.com": `bol.com.br`,
    "terra.com": `terra.com.br`,
    "mail.com": `gmail.com`,
    "email.com": `gmail.com`,
  };
function qt(e, t) {
  let n = e.length,
    r = t.length,
    i = Array.from({ length: r + 1 }, (e, t) => t);
  for (let a = 1; a <= n; a++) {
    let n = [a];
    for (let o = 1; o <= r; o++) {
      let r = e[a - 1] === t[o - 1] ? 0 : 1;
      n[o] = Math.min(n[o - 1] + 1, i[o] + 1, i[o - 1] + r);
    }
    i = n;
  }
  return i[r];
}
function Jt(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ``)
    .replace(/,/g, `.`)
    .replace(/\.{2,}/g, `.`)
    .replace(/^\.+|\.+$/g, ``);
}
function Yt(e) {
  let t = Jt(e),
    n = t.split(`@`);
  if (n.length !== 2 || !n[0] || !n[1])
    return { valor: t, corrigido: null, sugestao: null };
  let r = n[0],
    i = n[1].replace(/\.com\.com(\.br)?$/, `.com$1`),
    a = Kt[i];
  if (a && a !== i)
    return { valor: `${r}@${a}`, corrigido: `${r}@${a}`, sugestao: null };
  if (Gt.includes(i))
    return { valor: `${r}@${i}`, corrigido: null, sugestao: null };
  let o = null,
    s = 1 / 0;
  for (let e of Gt) {
    let t = qt(i, e);
    t < s && ((s = t), (o = e));
  }
  let c = i.length <= 6 ? 1 : 2;
  return o && s > 0 && s <= c
    ? { valor: `${r}@${i}`, corrigido: null, sugestao: `${r}@${o}` }
    : { valor: `${r}@${i}`, corrigido: null, sugestao: null };
}
var Xt = Wt({
  email: Ut()
    .trim()
    .min(1, { message: `Informe seu e-mail.` })
    .email({ message: `Informe um e-mail válido.` })
    .max(255, { message: `E-mail muito longo.` }),
  telefone: Ut()
    .trim()
    .min(1, { message: `Informe seu telefone.` })
    .refine(
      (e) =>
        e.replace(/\D/g, ``).length >= 10 && e.replace(/\D/g, ``).length <= 11,
      { message: `Informe DDD + número (10 ou 11 dígitos).` },
    ),
});
function Zt(e) {
  let t = e.replace(/\D/g, ``).slice(0, 11);
  return t.length <= 2
    ? t
    : t.length <= 6
      ? `(${t.slice(0, 2)}) ${t.slice(2)}`
      : t.length <= 10
        ? `(${t.slice(0, 2)}) ${t.slice(2, 6)}-${t.slice(6)}`
        : `(${t.slice(0, 2)}) ${t.slice(2, 7)}-${t.slice(7)}`;
}
var Qt = `text-xs font-bold uppercase tracking-[0.18em] text-primary`,
  $t = `mt-2 w-full border border-border bg-secondary px-4 py-3 text-base font-semibold text-foreground outline-none transition focus:border-primary`;
function en({
  onConfirmar: e,
  enviando: t = !1,
  erroEnvio: n = null,
  emailInicial: r = ``,
}) {
  let [i, a] = (0, w.useState)(r),
    [o, s] = (0, w.useState)(``),
    [c, l] = (0, w.useState)({}),
    [u, d] = (0, w.useState)(null),
    [f, p] = (0, w.useState)(null);
  function m(e) {
    let t = Yt(e);
    return t.corrigido
      ? (a(t.corrigido),
        p(t.corrigido),
        d(null),
        l((e) => ({ ...e, email: void 0 })),
        t.corrigido)
      : (p(null), d(t.sugestao), t.valor !== e && a(t.valor), t.valor);
  }
  function ee() {
    u && (a(u), p(u), d(null), l((e) => ({ ...e, email: void 0 })));
  }
  function h(t) {
    t.preventDefault();
    let n = m(i),
      r = Xt.safeParse({ email: n, telefone: o });
    if (!r.success) {
      let e = r.error.flatten().fieldErrors;
      l({ email: e.email?.[0], telefone: e.telefone?.[0] });
      return;
    }
    (l({}), e(r.data));
  }
  return (0, T.jsxs)(`form`, {
    onSubmit: h,
    className: `mt-8 border-t border-border pt-7`,
    noValidate: !0,
    children: [
      (0, T.jsx)(`p`, {
        className: `text-[11px] font-bold uppercase tracking-[0.24em] text-muted-foreground`,
        children: `Dados de contato`,
      }),
      (0, T.jsx)(`h3`, {
        className: `mt-2 text-lg font-extrabold text-primary`,
        children: `Como podemos falar com você?`,
      }),
      (0, T.jsxs)(`div`, {
        className: `mt-6 space-y-5`,
        children: [
          (0, T.jsxs)(`div`, {
            children: [
              (0, T.jsx)(`label`, {
                className: Qt,
                htmlFor: `contato-email`,
                children: `E-mail`,
              }),
              (0, T.jsx)(`input`, {
                id: `contato-email`,
                type: `email`,
                inputMode: `email`,
                autoComplete: `email`,
                maxLength: 255,
                value: i,
                onChange: (e) => {
                  (a(e.target.value), d(null), p(null));
                },
                onBlur: (e) => m(e.target.value),
                placeholder: `seunome@email.com`,
                className: $t,
                "aria-describedby": `contato-email-aviso`,
                "aria-invalid": !!c.email,
              }),
              (0, T.jsxs)(`div`, {
                id: `contato-email-aviso`,
                className: `mt-2 flex items-start gap-2 border-l-4 border-accent bg-accent/10 px-3 py-2`,
                children: [
                  (0, T.jsx)(`span`, {
                    "aria-hidden": !0,
                    className: `mt-[1px] text-sm`,
                    children: `🔒`,
                  }),
                  (0, T.jsxs)(`p`, {
                    className: `text-[11px] font-semibold leading-relaxed text-foreground`,
                    children: [
                      `Use um e-mail real: é nele que você recebe o `,
                      (0, T.jsx)(`strong`, {
                        children: `contrato e o comprovante`,
                      }),
                      ` da liberação. Seus dados são protegidos pela LGPD.`,
                    ],
                  }),
                ],
              }),
              f
                ? (0, T.jsxs)(`p`, {
                    className: `mt-2 text-[11px] font-semibold text-primary`,
                    children: [
                      `Corrigimos automaticamente para `,
                      (0, T.jsx)(`strong`, { children: f }),
                      `.`,
                    ],
                  })
                : null,
              u
                ? (0, T.jsxs)(`p`, {
                    className: `mt-2 text-[11px] font-semibold text-foreground`,
                    children: [
                      `Você quis dizer`,
                      ` `,
                      (0, T.jsx)(`button`, {
                        type: `button`,
                        onClick: ee,
                        className: `underline decoration-accent decoration-2 underline-offset-2 text-primary`,
                        children: u,
                      }),
                      `?`,
                    ],
                  })
                : null,
              c.email
                ? (0, T.jsx)(`p`, {
                    className: `mt-1 text-xs font-semibold text-destructive`,
                    role: `alert`,
                    children: c.email,
                  })
                : null,
            ],
          }),
          (0, T.jsxs)(`div`, {
            children: [
              (0, T.jsx)(`label`, {
                className: Qt,
                htmlFor: `contato-telefone`,
                children: `Telefone com DDD`,
              }),
              (0, T.jsx)(`input`, {
                id: `contato-telefone`,
                type: `tel`,
                inputMode: `numeric`,
                autoComplete: `tel`,
                value: o,
                onChange: (e) => s(Zt(e.target.value)),
                placeholder: `(11) 99999-9999`,
                className: $t,
                "aria-invalid": !!c.telefone,
              }),
              c.telefone
                ? (0, T.jsx)(`p`, {
                    className: `mt-1 text-xs font-semibold text-destructive`,
                    role: `alert`,
                    children: c.telefone,
                  })
                : null,
            ],
          }),
        ],
      }),
      n
        ? (0, T.jsx)(`p`, {
            className: `mt-6 border-l-4 border-destructive bg-destructive/10 px-4 py-3 text-xs font-semibold text-destructive`,
            role: `alert`,
            children: n,
          })
        : null,
      (0, T.jsx)(`button`, {
        type: `submit`,
        disabled: t,
        className: `mt-7 w-full bg-primary py-4 text-sm font-extrabold uppercase tracking-widest text-primary-foreground transition hover:brightness-110 disabled:opacity-60`,
        children: t ? `Enviando…` : `Confirmar e liberar análise`,
      }),
    ],
  });
}
var tn = a({ method: `POST` }).handler(
    r(`32c77ebc16d924fc28adc86270a30172c1de8d00131441b44a5a4e284a0cf7bb`),
  ),
  nn = (e) => e.replace(/\D/g, ``);
function rn(e) {
  let t = nn(e);
  return t.length === 11 || t.length === 14;
}
function an() {
  let { cpf: e, email: t } = te.useSearch(),
    n = s(),
    r = nn(e),
    a = rn(r),
    c = o(tn);
  o(se);
  let l = o(oe),
    [u, d] = (0, w.useState)(!1),
    [f, p] = (0, w.useState)(null),
    [m, ee] = (0, w.useState)(!1),
    [h, g] = (0, w.useState)(!1),
    [_, ne] = (0, w.useState)(``),
    [v, y] = (0, w.useState)(!1),
    [b, x] = (0, w.useState)(null),
    ce = (0, w.useRef)(null),
    {
      data: C,
      isPending: le,
      isError: ue,
      refetch: de,
      isFetching: fe,
    } = Ee({
      queryKey: [`consulta-pessoa`, r],
     queryFn: async () => {
  try {
    const cpf = String(r).replace(/\D/g, ``);

    const response = await fetch(
      `/api/consulta.php?cpf=${encodeURIComponent(cpf)}`
    );

    if (!response.ok) {
      return {
        status: `erro`,
      };
    }

    const texto = await response.text();
    let dados;
    try { dados = JSON.parse(texto); } catch { return { status: `erro` }; }

    if (!dados?.nome) {
      return {
        status: `nao_encontrado`,
      };
    }

    return {
      status: `ok`,
      pessoa: {
        nomeCompleto: dados.nome || ``,
        dataNascimento: dados.nascimento || ``,
        nomeMae: dados.mae || ``,
      },
    };
  } catch (erro) {
    console.error(`Erro ao consultar CPF:`, erro);

    return {
      status: `erro`,
    };
  }
},
      enabled: a,
      retry: !1,
      staleTime: 300 * 1e3,
      gcTime: 300 * 1e3,
    });
  function pe(e) {
    E &&
      S({
        nome: E.nomeCompleto,
        cpf: r,
        nascimento: E.dataNascimento,
        email: e.email.trim().toLowerCase(),
        telefone: e.telefone,
      });
  }
  function me(e) {
    (window.scrollTo({ top: 0, behavior: `smooth` }),
      n({
        to: `/codigo`,
        search: {
          email: e.email.trim().toLowerCase(),
          telefone: e.telefone.replace(/\D/g, ``),
        },
      }));
  }
  function he() {
    (window.scrollTo({ top: 0, behavior: `smooth` }), n({ to: `/analise` }));
  }
  async function ge(e) {
    (p(null), x(e), pe(e), he());
  }
  async function _e() {
    let e = _.replace(/\D/g, ``);
    if (b) {
      if (e.length < 10 || e.length > 11) {
        p(`Informe um número de celular válido com DDD.`);
        return;
      }
      (p(null), y(!0));
      try {
        let t = await l({ data: { email: b.email, telefone: e } });
        if (t.status === `enviado` || t.status === `aguarde`) {
          let t = { ...b, telefone: e };
          (pe(t), me(t));
          return;
        }
        p(
          `Não conseguimos enviar o código por SMS agora. Tente novamente em instantes.`,
        );
      } catch {
        p(
          `Não conseguimos enviar o código por SMS agora. Tente novamente em instantes.`,
        );
      } finally {
        y(!1);
      }
    }
  }
  let E = C?.status === `ok` ? C.pessoa : null;
  return (0, T.jsxs)(`div`, {
    className: `min-h-screen bg-background`,
    children: [
      (0, T.jsx)(ie, {}),
      (0, T.jsxs)(`section`, {
        className: `relative overflow-hidden bg-brand text-brand-foreground`,
        children: [
          (0, T.jsx)(`div`, {
            className: `absolute inset-0 grid-lines opacity-[0.35]`,
            "aria-hidden": !0,
          }),
          (0, T.jsx)(`div`, {
            className: `absolute -right-24 top-6 hidden h-[360px] w-[360px] rotate-12 border-[14px] border-accent/25 lg:block`,
            "aria-hidden": !0,
          }),
          (0, T.jsxs)(`div`, {
            className: `relative mx-auto max-w-6xl px-5 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14`,
            children: [
              (0, T.jsx)(`p`, {
                className: `inline-flex items-center gap-3 border-l-4 border-accent pl-3 text-[11px] font-bold uppercase tracking-[0.28em]`,
                children: `Etapa 2 de 3 · Seus dados`,
              }),
              (0, T.jsxs)(`h1`, {
                className: `mt-5 max-w-2xl text-4xl font-extrabold leading-[0.95] sm:text-5xl`,
                children: [
                  `Confirme seus`,
                  (0, T.jsx)(`br`, {}),
                  (0, T.jsx)(`span`, {
                    className: `text-accent`,
                    children: `dados`,
                  }),
                  ` pessoais.`,
                ],
              }),
              (0, T.jsx)(`p`, {
                className: `mt-5 max-w-md text-sm leading-relaxed text-brand-foreground/80 sm:text-base`,
                children: `Localizamos o CPF informado. Revise as informações abaixo para concluirmos a análise do seu empréstimo pessoal com segurança.`,
              }),
              (0, T.jsxs)(`button`, {
                type: `button`,
                onClick: () =>
                  ce.current?.scrollIntoView({
                    behavior: `smooth`,
                    block: `start`,
                  }),
                className: `mt-6 inline-flex flex-col items-center gap-2 rounded border border-accent bg-accent/10 px-4 py-3 text-xs font-extrabold uppercase tracking-[0.18em] text-accent transition hover:bg-accent hover:text-accent-foreground`,
                children: [
                  (0, T.jsx)(`span`, {
                    children: `Arraste para baixo e confirme se seus dados estão corretos`,
                  }),
                  (0, T.jsx)(re, {
                    className: `h-6 w-6 animate-bounce`,
                    "aria-hidden": !0,
                  }),
                ],
              }),
              (0, T.jsxs)(`div`, {
                className: `mt-8 flex items-center gap-2`,
                "aria-hidden": !0,
                children: [
                  (0, T.jsx)(`span`, { className: `h-1.5 flex-1 bg-accent` }),
                  (0, T.jsx)(`span`, { className: `h-1.5 flex-1 bg-accent` }),
                  (0, T.jsx)(`span`, {
                    className: `h-1.5 flex-1 bg-brand-foreground/20`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, T.jsx)(`div`, {
        className: `border-y border-border bg-brand-soft`,
        children: (0, T.jsxs)(`div`, {
          className: `mx-auto grid max-w-6xl grid-cols-3 divide-x divide-border px-5 text-center text-[10px] font-bold uppercase leading-tight tracking-[0.16em] text-primary sm:px-6 sm:text-[11px] sm:tracking-[0.22em]`,
          children: [
            (0, T.jsx)(`span`, {
              className: `px-2 py-3 sm:py-4`,
              children: `Sem custo`,
            }),
            (0, T.jsx)(`span`, {
              className: `px-2 py-3 sm:py-4`,
              children: `Sem compromisso`,
            }),
            (0, T.jsx)(`span`, {
              className: `px-2 py-3 sm:py-4`,
              children: `Dados protegidos (LGPD)`,
            }),
          ],
        }),
      }),
      (0, T.jsx)(`section`, {
        ref: ce,
        className: `mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16`,
        children: (0, T.jsxs)(`div`, {
          className: `grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14`,
          children: [
            (0, T.jsxs)(`div`, {
              children: [
                (0, T.jsx)(`div`, {
                  className: `h-2 rule-accent`,
                  "aria-hidden": !0,
                }),
                (0, T.jsxs)(`div`, {
                  className: `bg-card p-6 text-card-foreground shadow-[0_30px_60px_-35px_rgba(0,0,0,0.5)] sm:p-8`,
                  children: [
                    (0, T.jsx)(`p`, {
                      className: `text-[11px] font-bold uppercase tracking-[0.24em] text-muted-foreground`,
                      children: `Confirmação de cadastro`,
                    }),
                    (0, T.jsx)(`h2`, {
                      className: `mt-3 text-2xl font-extrabold text-primary sm:text-3xl`,
                      children: `Seus dados pessoais`,
                    }),
                    (0, T.jsxs)(`p`, {
                      className: `mt-3 text-sm leading-relaxed text-muted-foreground`,
                      children: [
                        `Estes são os dados vinculados ao CPF`,
                        ` `,
                        (0, T.jsx)(`strong`, {
                          className: `text-foreground`,
                          children: e || `—`,
                        }),
                        `.`,
                        ` `,
                        (0, T.jsx)(i, {
                          to: `/cadastro`,
                          className: `font-bold text-primary underline underline-offset-4 transition hover:text-accent`,
                          children: `Alterar CPF`,
                        }),
                      ],
                    }),
                    a
                      ? le || fe
                        ? (0, T.jsx)(ke, {})
                        : ue || C?.status === `erro`
                          ? (0, T.jsx)(Ae, {
                              titulo: `Não foi possível consultar agora`,
                              mensagem: `Nosso serviço de consulta está temporariamente indisponível. Tente novamente em alguns instantes.`,
                              onTentarNovamente: () => void de(),
                            })
                          : C?.status === `nao_encontrado`
                            ? (0, T.jsx)(Ae, {
                                titulo: `Nenhum dado encontrado`,
                                mensagem: `Não localizamos informações para o CPF informado. Confira os números digitados e tente novamente.`,
                                onTentarNovamente: () => void de(),
                              })
                            : C?.status === `cpf_invalido`
                              ? (0, T.jsx)(Ae, {
                                  titulo: `CPF inválido`,
                                  mensagem: `O CPF informado não está em um formato válido. Volte e digite os 11 números do seu CPF.`,
                                })
                              : E
                                ? (0, T.jsxs)(T.Fragment, {
                                    children: [
                                      (0, T.jsx)(Me, { pessoa: E }),
                                      (0, T.jsx)(en, {
                                        enviando: u,
                                        erroEnvio: f,
                                        emailInicial: t,
                                        onConfirmar: (e) => void ge(e),
                                      }),
                                      m
                                        ? (0, T.jsx)(`div`, {
                                            className: `mt-5 border-t border-border pt-5`,
                                            children: h
                                              ? (0, T.jsxs)(`div`, {
                                                  className: `text-center`,
                                                  children: [
                                                    (0, T.jsx)(`p`, {
                                                      className: `text-[11px] font-bold uppercase tracking-[0.24em] text-muted-foreground`,
                                                      children: `Enviar por SMS`,
                                                    }),
                                                    (0, T.jsx)(`p`, {
                                                      className: `mt-2 text-sm text-foreground`,
                                                      children: `Confirme o número de celular para receber o código por SMS.`,
                                                    }),
                                                    (0, T.jsx)(`label`, {
                                                      className: `mt-4 block text-xs font-bold uppercase tracking-[0.18em] text-primary`,
                                                      children: `Celular com DDD`,
                                                    }),
                                                    (0, T.jsx)(`input`, {
                                                      type: `tel`,
                                                      inputMode: `numeric`,
                                                      autoComplete: `tel`,
                                                      value: _,
                                                      onChange: (e) =>
                                                        ne(
                                                          e.target.value.replace(
                                                            /\D/g,
                                                            ``,
                                                          ),
                                                        ),
                                                      placeholder: `11999999999`,
                                                      className: `mx-auto mt-2 w-full max-w-xs border border-border bg-secondary px-4 py-3 text-center text-base font-semibold text-foreground outline-none transition focus:border-primary`,
                                                    }),
                                                    (0, T.jsx)(`button`, {
                                                      type: `button`,
                                                      onClick: () => void _e(),
                                                      disabled:
                                                        v ||
                                                        _.replace(/\D/g, ``)
                                                          .length < 10,
                                                      className: `mx-auto mt-4 w-full max-w-xs bg-accent py-3 text-sm font-extrabold uppercase tracking-widest text-accent-foreground transition hover:brightness-110 disabled:opacity-60`,
                                                      children: v
                                                        ? `Enviando…`
                                                        : `Enviar código por SMS`,
                                                    }),
                                                    (0, T.jsx)(`button`, {
                                                      type: `button`,
                                                      onClick: () => g(!1),
                                                      className: `mx-auto mt-2 block py-2 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground underline underline-offset-4`,
                                                      children: `Cancelar`,
                                                    }),
                                                  ],
                                                })
                                              : (0, T.jsxs)(`button`, {
                                                  type: `button`,
                                                  onClick: () => g(!0),
                                                  className: `flex w-full items-center justify-center gap-2 border border-border py-3 text-xs font-extrabold uppercase tracking-[0.18em] text-primary transition hover:border-primary`,
                                                  children: [
                                                    (0, T.jsx)(`span`, {
                                                      "aria-hidden": !0,
                                                      children: `📱`,
                                                    }),
                                                    `Receber código por SMS`,
                                                  ],
                                                }),
                                          })
                                        : null,
                                      (0, T.jsx)(`p`, {
                                        className: `mt-3 text-[11px] leading-relaxed text-muted-foreground`,
                                        children: `Crédito sujeito a análise e aprovação. CET informado no ato da contratação. A Caixa não cobra taxa antecipada para liberar crédito.`,
                                      }),
                                    ],
                                  })
                                : null
                      : (0, T.jsx)(Ae, {
                          titulo: `CPF inválido`,
                          mensagem: `Não conseguimos identificar um CPF válido. Volte e informe os 11 números do seu CPF.`,
                        }),
                  ],
                }),
              ],
            }),
            (0, T.jsxs)(`aside`, {
              className: `lg:pt-8`,
              children: [
                (0, T.jsx)(`p`, {
                  className: `text-[11px] font-bold uppercase tracking-[0.28em] text-accent`,
                  children: `Por que pedimos isso`,
                }),
                (0, T.jsxs)(`h2`, {
                  className: `mt-3 text-2xl font-extrabold sm:text-3xl`,
                  children: [
                    `Dados corretos, `,
                    (0, T.jsx)(`span`, {
                      className: `text-primary`,
                      children: `análise mais rápida`,
                    }),
                  ],
                }),
                (0, T.jsx)(`div`, { className: `mt-4 h-1 w-24 bg-accent` }),
                (0, T.jsx)(`ol`, {
                  className: `mt-8 divide-y divide-border border-y border-border`,
                  children: [
                    [
                      `Identificação`,
                      `Nome, nascimento e filiação confirmam que o CPF é realmente seu.`,
                    ],
                    [
                      `Análise`,
                      `Nosso time confere as informações e valida as condições do crédito.`,
                    ],
                    [
                      `Liberação`,
                      `Aprovado, o valor cai na sua conta ou no Cartão Pré-Pago Caixa.`,
                    ],
                  ].map(([e, t], n) =>
                    (0, T.jsxs)(
                      `li`,
                      {
                        className: `flex gap-5 py-5`,
                        children: [
                          (0, T.jsx)(`span`, {
                            className: `font-display text-sm font-extrabold text-accent`,
                            children: String(n + 1).padStart(2, `0`),
                          }),
                          (0, T.jsxs)(`div`, {
                            children: [
                              (0, T.jsx)(`h3`, {
                                className: `text-base font-extrabold text-primary`,
                                children: e,
                              }),
                              (0, T.jsx)(`p`, {
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
                (0, T.jsxs)(`div`, {
                  className: `mt-8 border-l-4 border-accent bg-secondary p-5`,
                  children: [
                    (0, T.jsx)(`h3`, {
                      className: `text-xs font-extrabold uppercase tracking-[0.2em] text-primary`,
                      children: `Seus dados estão seguros`,
                    }),
                    (0, T.jsx)(`p`, {
                      className: `mt-3 text-sm leading-relaxed text-secondary-foreground`,
                      children: `A consulta é feita em ambiente seguro do próprio site, sem expor credenciais, e as informações são usadas exclusivamente para a análise do seu empréstimo, conforme a Lei Geral de Proteção de Dados.`,
                    }),
                    (0, T.jsx)(`a`, {
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
      (0, T.jsx)(`section`, {
        className: `bg-brand py-14 text-brand-foreground`,
        children: (0, T.jsxs)(`div`, {
          className: `mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-6`,
          children: [
            (0, T.jsxs)(`h2`, {
              className: `max-w-xl text-2xl font-extrabold sm:text-4xl`,
              children: [
                `Quer revisar os valores antes?`,
                ` `,
                (0, T.jsx)(`span`, {
                  className: `text-accent`,
                  children: `Volte e simule de novo.`,
                }),
              ],
            }),
            (0, T.jsx)(i, {
              to: `/inicio`,
              hash: `simular`,
              className: `bg-accent px-8 py-4 text-sm font-extrabold uppercase tracking-widest text-accent-foreground transition hover:brightness-110`,
              children: `Refazer simulação`,
            }),
          ],
        }),
      }),
      (0, T.jsx)(ae, {}),
    ],
  });
}
export { an as component };
