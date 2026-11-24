const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/capi.functions-qaO90m84.js",
      "assets/createClientRpc-CEUTKn0_.js",
      "assets/invariant-DEEwAagU.js",
      "assets/createServerFn-mDhzzglP.js",
      "assets/analise-BvJH0l1M.js",
      "assets/rolldown-runtime-Bh1tDfsg.js",
      "assets/useRouter-mso78Z2_.js",
      "assets/circle-check-B0erusMF.js",
      "assets/createLucideIcon-BADXV0dg.js",
      "assets/loader-circle-7lOtAaIs.js",
      "assets/shield-check-CkXNnzOD.js",
      "assets/SiteHeader-CvY4eR3J.js",
      "assets/link-Bn7c8ZsQ.js",
      "assets/react-dom-CC8iVrSG.js",
      "assets/Logo-D2YAbfEM.js",
      "assets/SiteFooter-g8x5i3HV.js",
      "assets/aprovado-CgLvMv2w.js",
      "assets/badge-check-Dnx-yqOA.js",
      "assets/clock-ie7xMZMq.js",
      "assets/zap-Daz-z7HS.js",
      "assets/proposta-D6Emn9RU.js",
      "assets/cadastro-BdPtJ0rd.js",
      "assets/checkout-CdNMt6q2.js",
      "assets/check-KYebtdKP.js",
      "assets/lock-w9MAkRNm.js",
      "assets/star-Crl8SEcH.js",
      "assets/cotacao-CRwZ4Qxg.js",
      "assets/pedido-DrraKY8E.js",
      "assets/review-marcos.png.asset-DCGLfQVE.js",
      "assets/codigo-CGo7r62_.js",
      "assets/useServerFn-BE2ldXn7.js",
      "assets/cliente-Cf5BSP97.js",
      "assets/chevron-down-CkjAFoEr.js",
      "assets/codigo.functions-B39Nh1qD.js",
      "assets/confirmacao-B9NqSy4B.js",
      "assets/contrato-ZMY9SmyA.js",
      "assets/typeof-B5XbjTb1.js",
      "assets/arrow-right-BzDkE4dW.js",
      "assets/eye-Bg50XmPo.js",
      "assets/file-text-Di7xfRVM.js",
      "assets/x-CBL5-v-L.js",
      "assets/dashboard-D47Axn_r.js",
      "assets/chevron-right-BG5MJeSG.js",
      "assets/eye-off-CT40g9Qu.js",
      "assets/landmark-BYY0qNHK.js",
      "assets/dialog-DwZSjXoK.js",
      "assets/conta-C9yWh4zC.js",
      "assets/inicio-CXaRUbNa.js",
      "assets/login-B3Qx6oMA.js",
      "assets/ofertas-DIt-gjaB.js",
      "assets/circle-alert-DBoQOg5E.js",
      "assets/pagamento-CX6gjZFx.js",
      "assets/pix-cache-Duum38sZ.js",
      "assets/pagamento-upsell-CUnWS_WQ.js",
      "assets/upsell-C72CYUuN.js",
      "assets/perguntas-CD9ksti5.js",
      "assets/seguro-BBIg_DCN.js",
      "assets/senha-LC_G4-3-.js",
      "assets/upsell1-B5xvqEJW.js",
      "assets/triangle-alert-pJQNcFhH.js",
      "assets/upsell2-CZ8EZ8M_.js",
      "assets/upsell3-BM3PrTnw.js",
      "assets/upsell4-Bs8iXS92.js",
      "assets/upsell5-OxdU-cfs.js",
      "assets/upsell6-DyCoUORf.js",
      "assets/verificar-CMxDh8qK.js",
    ]),
) => i.map((i) => d[i]);
import { n as e, t } from "./rolldown-runtime-Bh1tDfsg.js";
import { i as n, n as r, r as i, t as a } from "./useRouter-mso78Z2_.js";
import { t as o } from "./react-dom-CC8iVrSG.js";
import {
  a as s,
  c,
  n as l,
  o as u,
  r as d,
  s as f,
  t as p,
  u as m,
} from "./createClientRpc-CEUTKn0_.js";
import {
  A as h,
  C as g,
  D as _,
  E as v,
  F as y,
  I as b,
  L as x,
  M as S,
  N as C,
  O as ee,
  P as te,
  S as ne,
  T as re,
  _ as ie,
  a as ae,
  b as oe,
  c as se,
  d as ce,
  f as le,
  g as ue,
  h as w,
  i as T,
  j as de,
  k as fe,
  l as pe,
  m as me,
  n as E,
  o as D,
  p as he,
  r as ge,
  s as _e,
  t as ve,
  u as ye,
  v as be,
  w as xe,
  x as Se,
  y as Ce,
} from "./link-Bn7c8ZsQ.js";
import { t as we } from "./invariant-DEEwAagU.js";
var Te = t((e) => {
    function t(e, t) {
      var n = e.length;
      e.push(t);
      a: for (; 0 < n; ) {
        var r = (n - 1) >>> 1,
          a = e[r];
        if (0 < i(a, t)) ((e[r] = t), (e[n] = a), (n = r));
        else break a;
      }
    }
    function n(e) {
      return e.length === 0 ? null : e[0];
    }
    function r(e) {
      if (e.length === 0) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        a: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
          var s = 2 * (r + 1) - 1,
            c = e[s],
            l = s + 1,
            u = e[l];
          if (0 > i(c, n))
            l < a && 0 > i(u, c)
              ? ((e[r] = u), (e[l] = n), (r = l))
              : ((e[r] = c), (e[s] = n), (r = s));
          else if (l < a && 0 > i(u, n)) ((e[r] = u), (e[l] = n), (r = l));
          else break a;
        }
      }
      return t;
    }
    function i(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return n === 0 ? e.id - t.id : n;
    }
    if (
      ((e.unstable_now = void 0),
      typeof performance == `object` && typeof performance.now == `function`)
    ) {
      var a = performance;
      e.unstable_now = function () {
        return a.now();
      };
    } else {
      var o = Date,
        s = o.now();
      e.unstable_now = function () {
        return o.now() - s;
      };
    }
    var c = [],
      l = [],
      u = 1,
      d = null,
      f = 3,
      p = !1,
      m = !1,
      h = !1,
      g = !1,
      _ = typeof setTimeout == `function` ? setTimeout : null,
      v = typeof clearTimeout == `function` ? clearTimeout : null,
      y = typeof setImmediate < `u` ? setImmediate : null;
    function b(e) {
      for (var i = n(l); i !== null; ) {
        if (i.callback === null) r(l);
        else if (i.startTime <= e)
          (r(l), (i.sortIndex = i.expirationTime), t(c, i));
        else break;
        i = n(l);
      }
    }
    function x(e) {
      if (((h = !1), b(e), !m))
        if (n(c) !== null) ((m = !0), S || ((S = !0), ie()));
        else {
          var t = n(l);
          t !== null && se(x, t.startTime - e);
        }
    }
    var S = !1,
      C = -1,
      ee = 5,
      te = -1;
    function ne() {
      return g ? !0 : !(e.unstable_now() - te < ee);
    }
    function re() {
      if (((g = !1), S)) {
        var t = e.unstable_now();
        te = t;
        var i = !0;
        try {
          a: {
            ((m = !1), h && ((h = !1), v(C), (C = -1)), (p = !0));
            var a = f;
            try {
              b: {
                for (
                  b(t), d = n(c);
                  d !== null && !(d.expirationTime > t && ne());
                ) {
                  var o = d.callback;
                  if (typeof o == `function`) {
                    ((d.callback = null), (f = d.priorityLevel));
                    var s = o(d.expirationTime <= t);
                    if (((t = e.unstable_now()), typeof s == `function`)) {
                      ((d.callback = s), b(t), (i = !0));
                      break b;
                    }
                    (d === n(c) && r(c), b(t));
                  } else r(c);
                  d = n(c);
                }
                if (d !== null) i = !0;
                else {
                  var u = n(l);
                  (u !== null && se(x, u.startTime - t), (i = !1));
                }
              }
              break a;
            } finally {
              ((d = null), (f = a), (p = !1));
            }
            i = void 0;
          }
        } finally {
          i ? ie() : (S = !1);
        }
      }
    }
    var ie;
    if (typeof y == `function`)
      ie = function () {
        y(re);
      };
    else if (typeof MessageChannel < `u`) {
      var ae = new MessageChannel(),
        oe = ae.port2;
      ((ae.port1.onmessage = re),
        (ie = function () {
          oe.postMessage(null);
        }));
    } else
      ie = function () {
        _(re, 0);
      };
    function se(t, n) {
      C = _(function () {
        t(e.unstable_now());
      }, n);
    }
    ((e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              `forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`,
            )
          : (ee = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return f;
      }),
      (e.unstable_next = function (e) {
        switch (f) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = f;
        }
        var n = f;
        f = t;
        try {
          return e();
        } finally {
          f = n;
        }
      }),
      (e.unstable_requestPaint = function () {
        g = !0;
      }),
      (e.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = f;
        f = e;
        try {
          return t();
        } finally {
          f = n;
        }
      }),
      (e.unstable_scheduleCallback = function (r, i, a) {
        var o = e.unstable_now();
        switch (
          (typeof a == `object` && a
            ? ((a = a.delay), (a = typeof a == `number` && 0 < a ? o + a : o))
            : (a = o),
          r)
        ) {
          case 1:
            var s = -1;
            break;
          case 2:
            s = 250;
            break;
          case 5:
            s = 1073741823;
            break;
          case 4:
            s = 1e4;
            break;
          default:
            s = 5e3;
        }
        return (
          (s = a + s),
          (r = {
            id: u++,
            callback: i,
            priorityLevel: r,
            startTime: a,
            expirationTime: s,
            sortIndex: -1,
          }),
          a > o
            ? ((r.sortIndex = a),
              t(l, r),
              n(c) === null &&
                r === n(l) &&
                (h ? (v(C), (C = -1)) : (h = !0), se(x, a - o)))
            : ((r.sortIndex = s),
              t(c, r),
              m || p || ((m = !0), S || ((S = !0), ie()))),
          r
        );
      }),
      (e.unstable_shouldYield = ne),
      (e.unstable_wrapCallback = function (e) {
        var t = f;
        return function () {
          var n = f;
          f = t;
          try {
            return e.apply(this, arguments);
          } finally {
            f = n;
          }
        };
      }));
  }),
  Ee = t((e, t) => {
    t.exports = Te();
  }),
  De = t((e) => {
    var t = Ee(),
      r = n(),
      i = o();
    function a(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function s(e) {
      return !(
        !e ||
        (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
      );
    }
    function c(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
        while (e);
      }
      return t.tag === 3 ? n : null;
    }
    function l(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function u(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function d(e) {
      if (c(e) !== e) throw Error(a(188));
    }
    function f(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = c(e)), t === null)) throw Error(a(188));
        return t === e ? e : null;
      }
      for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null) break;
        var o = i.alternate;
        if (o === null) {
          if (((r = i.return), r !== null)) {
            n = r;
            continue;
          }
          break;
        }
        if (i.child === o.child) {
          for (o = i.child; o; ) {
            if (o === n) return (d(i), e);
            if (o === r) return (d(i), t);
            o = o.sibling;
          }
          throw Error(a(188));
        }
        if (n.return !== r.return) ((n = i), (r = o));
        else {
          for (var s = !1, l = i.child; l; ) {
            if (l === n) {
              ((s = !0), (n = i), (r = o));
              break;
            }
            if (l === r) {
              ((s = !0), (r = i), (n = o));
              break;
            }
            l = l.sibling;
          }
          if (!s) {
            for (l = o.child; l; ) {
              if (l === n) {
                ((s = !0), (n = o), (r = i));
                break;
              }
              if (l === r) {
                ((s = !0), (r = o), (n = i));
                break;
              }
              l = l.sibling;
            }
            if (!s) throw Error(a(189));
          }
        }
        if (n.alternate !== r) throw Error(a(190));
      }
      if (n.tag !== 3) throw Error(a(188));
      return n.stateNode.current === n ? e : t;
    }
    function p(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (((t = p(e)), t !== null)) return t;
        e = e.sibling;
      }
      return null;
    }
    var m = Object.assign,
      h = Symbol.for(`react.element`),
      g = Symbol.for(`react.transitional.element`),
      _ = Symbol.for(`react.portal`),
      v = Symbol.for(`react.fragment`),
      y = Symbol.for(`react.strict_mode`),
      b = Symbol.for(`react.profiler`),
      x = Symbol.for(`react.consumer`),
      S = Symbol.for(`react.context`),
      C = Symbol.for(`react.forward_ref`),
      ee = Symbol.for(`react.suspense`),
      te = Symbol.for(`react.suspense_list`),
      ne = Symbol.for(`react.memo`),
      re = Symbol.for(`react.lazy`),
      ie = Symbol.for(`react.activity`),
      ae = Symbol.for(`react.memo_cache_sentinel`),
      oe = Symbol.iterator;
    function se(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (oe && e[oe]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var ce = Symbol.for(`react.client.reference`);
    function le(e) {
      if (e == null) return null;
      if (typeof e == `function`)
        return e.$$typeof === ce ? null : e.displayName || e.name || null;
      if (typeof e == `string`) return e;
      switch (e) {
        case v:
          return `Fragment`;
        case b:
          return `Profiler`;
        case y:
          return `StrictMode`;
        case ee:
          return `Suspense`;
        case te:
          return `SuspenseList`;
        case ie:
          return `Activity`;
      }
      if (typeof e == `object`)
        switch (e.$$typeof) {
          case _:
            return `Portal`;
          case S:
            return e.displayName || `Context`;
          case x:
            return (e._context.displayName || `Context`) + `.Consumer`;
          case C:
            var t = e.render;
            return (
              (e = e.displayName),
              (e ||=
                ((e = t.displayName || t.name || ``),
                e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
              e
            );
          case ne:
            return (
              (t = e.displayName || null),
              t === null ? le(e.type) || `Memo` : t
            );
          case re:
            ((t = e._payload), (e = e._init));
            try {
              return le(e(t));
            } catch {}
        }
      return null;
    }
    var ue = Array.isArray,
      w = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      T = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      de = { pending: !1, data: null, method: null, action: null },
      fe = [],
      pe = -1;
    function me(e) {
      return { current: e };
    }
    function E(e) {
      0 > pe || ((e.current = fe[pe]), (fe[pe] = null), pe--);
    }
    function D(e, t) {
      (pe++, (fe[pe] = e.current), (e.current = t));
    }
    var he = me(null),
      ge = me(null),
      _e = me(null),
      ve = me(null);
    function ye(e, t) {
      switch ((D(_e, t), D(ge, e), D(he, null), t.nodeType)) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? Vd(e) : 0;
          break;
        default:
          if (((e = t.tagName), (t = t.namespaceURI)))
            ((t = Vd(t)), (e = Hd(t, e)));
          else
            switch (e) {
              case `svg`:
                e = 1;
                break;
              case `math`:
                e = 2;
                break;
              default:
                e = 0;
            }
      }
      (E(he), D(he, e));
    }
    function be() {
      (E(he), E(ge), E(_e));
    }
    function xe(e) {
      e.memoizedState !== null && D(ve, e);
      var t = he.current,
        n = Hd(t, e.type);
      t !== n && (D(ge, e), D(he, n));
    }
    function Se(e) {
      (ge.current === e && (E(he), E(ge)),
        ve.current === e && (E(ve), (Qf._currentValue = de)));
    }
    var Ce, we;
    function Te(e) {
      if (Ce === void 0)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          ((Ce = (t && t[1]) || ``),
            (we =
              -1 <
              e.stack.indexOf(`
    at`)
                ? ` (<anonymous>)`
                : -1 < e.stack.indexOf(`@`)
                  ? `@unknown:0:0`
                  : ``));
        }
      return (
        `
` +
        Ce +
        e +
        we
      );
    }
    var De = !1;
    function Oe(e, t) {
      if (!e || De) return ``;
      De = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var r = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var n = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(n.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == `object` && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(n, []);
                  } catch (e) {
                    var r = e;
                  }
                  Reflect.construct(e, [], n);
                } else {
                  try {
                    n.call();
                  } catch (e) {
                    r = e;
                  }
                  e.call(n.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (e) {
                  r = e;
                }
                (n = e()) &&
                  typeof n.catch == `function` &&
                  n.catch(function () {});
              }
            } catch (e) {
              if (e && r && typeof e.stack == `string`)
                return [e.stack, r.stack];
            }
            return [null, null];
          },
        };
        r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
        var i = Object.getOwnPropertyDescriptor(
          r.DetermineComponentFrameRoot,
          `name`,
        );
        i &&
          i.configurable &&
          Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
            value: `DetermineComponentFrameRoot`,
          });
        var a = r.DetermineComponentFrameRoot(),
          o = a[0],
          s = a[1];
        if (o && s) {
          var c = o.split(`
`),
            l = s.split(`
`);
          for (
            i = r = 0;
            r < c.length && !c[r].includes(`DetermineComponentFrameRoot`);
          )
            r++;
          for (
            ;
            i < l.length && !l[i].includes(`DetermineComponentFrameRoot`);
          )
            i++;
          if (r === c.length || i === l.length)
            for (
              r = c.length - 1, i = l.length - 1;
              1 <= r && 0 <= i && c[r] !== l[i];
            )
              i--;
          for (; 1 <= r && 0 <= i; r--, i--)
            if (c[r] !== l[i]) {
              if (r !== 1 || i !== 1)
                do
                  if ((r--, i--, 0 > i || c[r] !== l[i])) {
                    var u =
                      `
` + c[r].replace(` at new `, ` at `);
                    return (
                      e.displayName &&
                        u.includes(`<anonymous>`) &&
                        (u = u.replace(`<anonymous>`, e.displayName)),
                      u
                    );
                  }
                while (1 <= r && 0 <= i);
              break;
            }
        }
      } finally {
        ((De = !1), (Error.prepareStackTrace = n));
      }
      return (n = e ? e.displayName || e.name : ``) ? Te(n) : ``;
    }
    function ke(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return Te(e.type);
        case 16:
          return Te(`Lazy`);
        case 13:
          return e.child !== t && t !== null
            ? Te(`Suspense Fallback`)
            : Te(`Suspense`);
        case 19:
          return Te(`SuspenseList`);
        case 0:
        case 15:
          return Oe(e.type, !1);
        case 11:
          return Oe(e.type.render, !1);
        case 1:
          return Oe(e.type, !0);
        case 31:
          return Te(`Activity`);
        default:
          return ``;
      }
    }
    function Ae(e) {
      try {
        var t = ``,
          n = null;
        do ((t += ke(e, n)), (n = e), (e = e.return));
        while (e);
        return t;
      } catch (e) {
        return (
          `
Error generating stack: ` +
          e.message +
          `
` +
          e.stack
        );
      }
    }
    var je = Object.prototype.hasOwnProperty,
      Me = t.unstable_scheduleCallback,
      Ne = t.unstable_cancelCallback,
      Pe = t.unstable_shouldYield,
      Fe = t.unstable_requestPaint,
      Ie = t.unstable_now,
      Le = t.unstable_getCurrentPriorityLevel,
      Re = t.unstable_ImmediatePriority,
      ze = t.unstable_UserBlockingPriority,
      Be = t.unstable_NormalPriority,
      Ve = t.unstable_LowPriority,
      He = t.unstable_IdlePriority,
      Ue = t.log,
      We = t.unstable_setDisableYieldValue,
      Ge = null,
      Ke = null;
    function qe(e) {
      if (
        (typeof Ue == `function` && We(e),
        Ke && typeof Ke.setStrictMode == `function`)
      )
        try {
          Ke.setStrictMode(Ge, e);
        } catch {}
    }
    var Je = Math.clz32 ? Math.clz32 : Ze,
      Ye = Math.log,
      Xe = Math.LN2;
    function Ze(e) {
      return ((e >>>= 0), e === 0 ? 32 : (31 - ((Ye(e) / Xe) | 0)) | 0);
    }
    var Qe = 256,
      $e = 262144,
      et = 4194304;
    function tt(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e;
      }
    }
    function nt(e, t, n) {
      var r = e.pendingLanes;
      if (r === 0) return 0;
      var i = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes;
      e = e.warmLanes;
      var s = r & 134217727;
      return (
        s === 0
          ? ((s = r & ~a),
            s === 0
              ? o === 0
                ? n || ((n = r & ~e), n !== 0 && (i = tt(n)))
                : (i = tt(o))
              : (i = tt(s)))
          : ((r = s & ~a),
            r === 0
              ? ((o &= s),
                o === 0
                  ? n || ((n = s & ~e), n !== 0 && (i = tt(n)))
                  : (i = tt(o)))
              : (i = tt(r))),
        i === 0
          ? 0
          : t !== 0 &&
              t !== i &&
              (t & a) === 0 &&
              ((a = i & -i), (n = t & -t), a >= n || (a === 32 && n & 4194048))
            ? t
            : i
      );
    }
    function rt(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function it(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function at() {
      var e = et;
      return ((et <<= 1), !(et & 62914560) && (et = 4194304), e);
    }
    function ot(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function st(e, t) {
      ((e.pendingLanes |= t),
        t !== 268435456 &&
          ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
    }
    function ct(e, t, n, r, i, a) {
      var o = e.pendingLanes;
      ((e.pendingLanes = n),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.warmLanes = 0),
        (e.expiredLanes &= n),
        (e.entangledLanes &= n),
        (e.errorRecoveryDisabledLanes &= n),
        (e.shellSuspendCounter = 0));
      var s = e.entanglements,
        c = e.expirationTimes,
        l = e.hiddenUpdates;
      for (n = o & ~n; 0 < n; ) {
        var u = 31 - Je(n),
          d = 1 << u;
        ((s[u] = 0), (c[u] = -1));
        var f = l[u];
        if (f !== null)
          for (l[u] = null, u = 0; u < f.length; u++) {
            var p = f[u];
            p !== null && (p.lane &= -536870913);
          }
        n &= ~d;
      }
      (r !== 0 && lt(e, r, 0),
        a !== 0 &&
          i === 0 &&
          e.tag !== 0 &&
          (e.suspendedLanes |= a & ~(o & ~t)));
    }
    function lt(e, t, n) {
      ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
      var r = 31 - Je(t);
      ((e.entangledLanes |= t),
        (e.entanglements[r] = e.entanglements[r] | 1073741824 | (n & 261930)));
    }
    function ut(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n; ) {
        var r = 31 - Je(n),
          i = 1 << r;
        ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
      }
    }
    function dt(e, t) {
      var n = t & -t;
      return (
        (n = n & 42 ? 1 : ft(n)),
        (n & (e.suspendedLanes | t)) === 0 ? n : 0
      );
    }
    function ft(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function pt(e) {
      return (
        (e &= -e),
        2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2
      );
    }
    function mt() {
      var e = T.p;
      return e === 0 ? ((e = window.event), e === void 0 ? 32 : mp(e.type)) : e;
    }
    function ht(e, t) {
      var n = T.p;
      try {
        return ((T.p = e), t());
      } finally {
        T.p = n;
      }
    }
    var gt = Math.random().toString(36).slice(2),
      _t = `__reactFiber$` + gt,
      vt = `__reactProps$` + gt,
      yt = `__reactContainer$` + gt,
      bt = `__reactEvents$` + gt,
      xt = `__reactListeners$` + gt,
      St = `__reactHandles$` + gt,
      Ct = `__reactResources$` + gt,
      wt = `__reactMarker$` + gt;
    function Tt(e) {
      (delete e[_t], delete e[vt], delete e[bt], delete e[xt], delete e[St]);
    }
    function Et(e) {
      var t = e[_t];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if ((t = n[yt] || n[_t])) {
          if (
            ((n = t.alternate),
            t.child !== null || (n !== null && n.child !== null))
          )
            for (e = df(e); e !== null; ) {
              if ((n = e[_t])) return n;
              e = df(e);
            }
          return t;
        }
        ((e = n), (n = e.parentNode));
      }
      return null;
    }
    function Dt(e) {
      if ((e = e[_t] || e[yt])) {
        var t = e.tag;
        if (
          t === 5 ||
          t === 6 ||
          t === 13 ||
          t === 31 ||
          t === 26 ||
          t === 27 ||
          t === 3
        )
          return e;
      }
      return null;
    }
    function Ot(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error(a(33));
    }
    function kt(e) {
      var t = e[Ct];
      return (
        (t ||= e[Ct] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
        t
      );
    }
    function At(e) {
      e[wt] = !0;
    }
    var jt = new Set(),
      Mt = {};
    function Nt(e, t) {
      (Pt(e, t), Pt(e + `Capture`, t));
    }
    function Pt(e, t) {
      for (Mt[e] = t, e = 0; e < t.length; e++) jt.add(t[e]);
    }
    var Ft = RegExp(
        `^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`,
      ),
      It = {},
      Lt = {};
    function Rt(e) {
      return je.call(Lt, e)
        ? !0
        : je.call(It, e)
          ? !1
          : Ft.test(e)
            ? (Lt[e] = !0)
            : ((It[e] = !0), !1);
    }
    function zt(e, t, n) {
      if (Rt(t))
        if (n === null) e.removeAttribute(t);
        else {
          switch (typeof n) {
            case `undefined`:
            case `function`:
            case `symbol`:
              e.removeAttribute(t);
              return;
            case `boolean`:
              var r = t.toLowerCase().slice(0, 5);
              if (r !== `data-` && r !== `aria-`) {
                e.removeAttribute(t);
                return;
              }
          }
          e.setAttribute(t, `` + n);
        }
    }
    function Bt(e, t, n) {
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(t);
            return;
        }
        e.setAttribute(t, `` + n);
      }
    }
    function Vt(e, t, n, r) {
      if (r === null) e.removeAttribute(n);
      else {
        switch (typeof r) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(n);
            return;
        }
        e.setAttributeNS(t, n, `` + r);
      }
    }
    function Ht(e) {
      switch (typeof e) {
        case `bigint`:
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return e;
        case `object`:
          return e;
        default:
          return ``;
      }
    }
    function Ut(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        e.toLowerCase() === `input` &&
        (t === `checkbox` || t === `radio`)
      );
    }
    function Wt(e, t, n) {
      var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      if (
        !e.hasOwnProperty(t) &&
        r !== void 0 &&
        typeof r.get == `function` &&
        typeof r.set == `function`
      ) {
        var i = r.get,
          a = r.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return i.call(this);
            },
            set: function (e) {
              ((n = `` + e), a.call(this, e));
            },
          }),
          Object.defineProperty(e, t, { enumerable: r.enumerable }),
          {
            getValue: function () {
              return n;
            },
            setValue: function (e) {
              n = `` + e;
            },
            stopTracking: function () {
              ((e._valueTracker = null), delete e[t]);
            },
          }
        );
      }
    }
    function Gt(e) {
      if (!e._valueTracker) {
        var t = Ut(e) ? `checked` : `value`;
        e._valueTracker = Wt(e, t, `` + e[t]);
      }
    }
    function Kt(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = ``;
      return (
        e && (r = Ut(e) ? (e.checked ? `true` : `false`) : e.value),
        (e = r),
        e === n ? !1 : (t.setValue(e), !0)
      );
    }
    function qt(e) {
      if (((e ||= typeof document < `u` ? document : void 0), e === void 0))
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Jt = /[\n"\\]/g;
    function Yt(e) {
      return e.replace(Jt, function (e) {
        return `\\` + e.charCodeAt(0).toString(16) + ` `;
      });
    }
    function Xt(e, t, n, r, i, a, o, s) {
      ((e.name = ``),
        o != null &&
        typeof o != `function` &&
        typeof o != `symbol` &&
        typeof o != `boolean`
          ? (e.type = o)
          : e.removeAttribute(`type`),
        t == null
          ? (o !== `submit` && o !== `reset`) || e.removeAttribute(`value`)
          : o === `number`
            ? ((t === 0 && e.value === ``) || e.value != t) &&
              (e.value = `` + Ht(t))
            : e.value !== `` + Ht(t) && (e.value = `` + Ht(t)),
        t == null
          ? n == null
            ? r != null && e.removeAttribute(`value`)
            : Qt(e, o, Ht(n))
          : Qt(e, o, Ht(t)),
        i == null && a != null && (e.defaultChecked = !!a),
        i != null &&
          (e.checked = i && typeof i != `function` && typeof i != `symbol`),
        s != null &&
        typeof s != `function` &&
        typeof s != `symbol` &&
        typeof s != `boolean`
          ? (e.name = `` + Ht(s))
          : e.removeAttribute(`name`));
    }
    function Zt(e, t, n, r, i, a, o, s) {
      if (
        (a != null &&
          typeof a != `function` &&
          typeof a != `symbol` &&
          typeof a != `boolean` &&
          (e.type = a),
        t != null || n != null)
      ) {
        if (!((a !== `submit` && a !== `reset`) || t != null)) {
          Gt(e);
          return;
        }
        ((n = n == null ? `` : `` + Ht(n)),
          (t = t == null ? n : `` + Ht(t)),
          s || t === e.value || (e.value = t),
          (e.defaultValue = t));
      }
      ((r ??= i),
        (r = typeof r != `function` && typeof r != `symbol` && !!r),
        (e.checked = s ? e.checked : !!r),
        (e.defaultChecked = !!r),
        o != null &&
          typeof o != `function` &&
          typeof o != `symbol` &&
          typeof o != `boolean` &&
          (e.name = o),
        Gt(e));
    }
    function Qt(e, t, n) {
      (t === `number` && qt(e.ownerDocument) === e) ||
        e.defaultValue === `` + n ||
        (e.defaultValue = `` + n);
    }
    function $t(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          ((i = t.hasOwnProperty(`$` + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0));
      } else {
        for (n = `` + Ht(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
            return;
          }
          t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function en(e, t, n) {
      if (
        t != null &&
        ((t = `` + Ht(t)), t !== e.value && (e.value = t), n == null)
      ) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = n == null ? `` : `` + Ht(n);
    }
    function tn(e, t, n, r) {
      if (t == null) {
        if (r != null) {
          if (n != null) throw Error(a(92));
          if (ue(r)) {
            if (1 < r.length) throw Error(a(93));
            r = r[0];
          }
          n = r;
        }
        ((n ??= ``), (t = n));
      }
      ((n = Ht(t)),
        (e.defaultValue = n),
        (r = e.textContent),
        r === n && r !== `` && r !== null && (e.value = r),
        Gt(e));
    }
    function nn(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var rn = new Set(
      `animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(
        ` `,
      ),
    );
    function O(e, t, n) {
      var r = t.indexOf(`--`) === 0;
      n == null || typeof n == `boolean` || n === ``
        ? r
          ? e.setProperty(t, ``)
          : t === `float`
            ? (e.cssFloat = ``)
            : (e[t] = ``)
        : r
          ? e.setProperty(t, n)
          : typeof n != `number` || n === 0 || rn.has(t)
            ? t === `float`
              ? (e.cssFloat = n)
              : (e[t] = (`` + n).trim())
            : (e[t] = n + `px`);
    }
    function k(e, t, n) {
      if (t != null && typeof t != `object`) throw Error(a(62));
      if (((e = e.style), n != null)) {
        for (var r in n)
          !n.hasOwnProperty(r) ||
            (t != null && t.hasOwnProperty(r)) ||
            (r.indexOf(`--`) === 0
              ? e.setProperty(r, ``)
              : r === `float`
                ? (e.cssFloat = ``)
                : (e[r] = ``));
        for (var i in t)
          ((r = t[i]), t.hasOwnProperty(i) && n[i] !== r && O(e, i, r));
      } else for (var o in t) t.hasOwnProperty(o) && O(e, o, t[o]);
    }
    function an(e) {
      if (e.indexOf(`-`) === -1) return !1;
      switch (e) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
          return !1;
        default:
          return !0;
      }
    }
    var on = new Map([
        [`acceptCharset`, `accept-charset`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
        [`crossOrigin`, `crossorigin`],
        [`accentHeight`, `accent-height`],
        [`alignmentBaseline`, `alignment-baseline`],
        [`arabicForm`, `arabic-form`],
        [`baselineShift`, `baseline-shift`],
        [`capHeight`, `cap-height`],
        [`clipPath`, `clip-path`],
        [`clipRule`, `clip-rule`],
        [`colorInterpolation`, `color-interpolation`],
        [`colorInterpolationFilters`, `color-interpolation-filters`],
        [`colorProfile`, `color-profile`],
        [`colorRendering`, `color-rendering`],
        [`dominantBaseline`, `dominant-baseline`],
        [`enableBackground`, `enable-background`],
        [`fillOpacity`, `fill-opacity`],
        [`fillRule`, `fill-rule`],
        [`floodColor`, `flood-color`],
        [`floodOpacity`, `flood-opacity`],
        [`fontFamily`, `font-family`],
        [`fontSize`, `font-size`],
        [`fontSizeAdjust`, `font-size-adjust`],
        [`fontStretch`, `font-stretch`],
        [`fontStyle`, `font-style`],
        [`fontVariant`, `font-variant`],
        [`fontWeight`, `font-weight`],
        [`glyphName`, `glyph-name`],
        [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`],
        [`glyphOrientationVertical`, `glyph-orientation-vertical`],
        [`horizAdvX`, `horiz-adv-x`],
        [`horizOriginX`, `horiz-origin-x`],
        [`imageRendering`, `image-rendering`],
        [`letterSpacing`, `letter-spacing`],
        [`lightingColor`, `lighting-color`],
        [`markerEnd`, `marker-end`],
        [`markerMid`, `marker-mid`],
        [`markerStart`, `marker-start`],
        [`overlinePosition`, `overline-position`],
        [`overlineThickness`, `overline-thickness`],
        [`paintOrder`, `paint-order`],
        [`panose-1`, `panose-1`],
        [`pointerEvents`, `pointer-events`],
        [`renderingIntent`, `rendering-intent`],
        [`shapeRendering`, `shape-rendering`],
        [`stopColor`, `stop-color`],
        [`stopOpacity`, `stop-opacity`],
        [`strikethroughPosition`, `strikethrough-position`],
        [`strikethroughThickness`, `strikethrough-thickness`],
        [`strokeDasharray`, `stroke-dasharray`],
        [`strokeDashoffset`, `stroke-dashoffset`],
        [`strokeLinecap`, `stroke-linecap`],
        [`strokeLinejoin`, `stroke-linejoin`],
        [`strokeMiterlimit`, `stroke-miterlimit`],
        [`strokeOpacity`, `stroke-opacity`],
        [`strokeWidth`, `stroke-width`],
        [`textAnchor`, `text-anchor`],
        [`textDecoration`, `text-decoration`],
        [`textRendering`, `text-rendering`],
        [`transformOrigin`, `transform-origin`],
        [`underlinePosition`, `underline-position`],
        [`underlineThickness`, `underline-thickness`],
        [`unicodeBidi`, `unicode-bidi`],
        [`unicodeRange`, `unicode-range`],
        [`unitsPerEm`, `units-per-em`],
        [`vAlphabetic`, `v-alphabetic`],
        [`vHanging`, `v-hanging`],
        [`vIdeographic`, `v-ideographic`],
        [`vMathematical`, `v-mathematical`],
        [`vectorEffect`, `vector-effect`],
        [`vertAdvY`, `vert-adv-y`],
        [`vertOriginX`, `vert-origin-x`],
        [`vertOriginY`, `vert-origin-y`],
        [`wordSpacing`, `word-spacing`],
        [`writingMode`, `writing-mode`],
        [`xmlnsXlink`, `xmlns:xlink`],
        [`xHeight`, `x-height`],
      ]),
      sn =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function cn(e) {
      return sn.test(`` + e)
        ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`
        : e;
    }
    function ln() {}
    var un = null;
    function dn(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var fn = null,
      A = null;
    function pn(e) {
      var t = Dt(e);
      if (t && (e = t.stateNode)) {
        var n = e[vt] || null;
        a: switch (((e = t.stateNode), t.type)) {
          case `input`:
            if (
              (Xt(
                e,
                n.value,
                n.defaultValue,
                n.defaultValue,
                n.checked,
                n.defaultChecked,
                n.type,
                n.name,
              ),
              (t = n.name),
              n.type === `radio` && t != null)
            ) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  `input[name="` + Yt(`` + t) + `"][type="radio"]`,
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var i = r[vt] || null;
                  if (!i) throw Error(a(90));
                  Xt(
                    r,
                    i.value,
                    i.defaultValue,
                    i.defaultValue,
                    i.checked,
                    i.defaultChecked,
                    i.type,
                    i.name,
                  );
                }
              }
              for (t = 0; t < n.length; t++)
                ((r = n[t]), r.form === e.form && Kt(r));
            }
            break a;
          case `textarea`:
            en(e, n.value, n.defaultValue);
            break a;
          case `select`:
            ((t = n.value), t != null && $t(e, !!n.multiple, t, !1));
        }
      }
    }
    var mn = !1;
    function hn(e, t, n) {
      if (mn) return e(t, n);
      mn = !0;
      try {
        return e(t);
      } finally {
        if (
          ((mn = !1),
          (fn !== null || A !== null) &&
            (bu(), fn && ((t = fn), (e = A), (A = fn = null), pn(t), e)))
        )
          for (t = 0; t < e.length; t++) pn(e[t]);
      }
    }
    function gn(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var r = n[vt] || null;
      if (r === null) return null;
      n = r[t];
      a: switch (t) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          ((r = !r.disabled) ||
            ((e = e.type),
            (r = !(
              e === `button` ||
              e === `input` ||
              e === `select` ||
              e === `textarea`
            ))),
            (e = !r));
          break a;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != `function`) throw Error(a(231, t, typeof n));
      return n;
    }
    var _n = !(
        typeof window > `u` ||
        window.document === void 0 ||
        window.document.createElement === void 0
      ),
      vn = !1;
    if (_n)
      try {
        var yn = {};
        (Object.defineProperty(yn, "passive", {
          get: function () {
            vn = !0;
          },
        }),
          window.addEventListener(`test`, yn, yn),
          window.removeEventListener(`test`, yn, yn));
      } catch {
        vn = !1;
      }
    var bn = null,
      xn = null,
      Sn = null;
    function Cn() {
      if (Sn) return Sn;
      var e,
        t = xn,
        n = t.length,
        r,
        i = `value` in bn ? bn.value : bn.textContent,
        a = i.length;
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
      return (Sn = i.slice(e, 1 < r ? 1 - r : void 0));
    }
    function wn(e) {
      var t = e.keyCode;
      return (
        `charCode` in e
          ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
          : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function Tn() {
      return !0;
    }
    function En() {
      return !1;
    }
    function Dn(e) {
      function t(t, n, r, i, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
        return (
          (this.isDefaultPrevented = (
            i.defaultPrevented == null
              ? !1 === i.returnValue
              : i.defaultPrevented
          )
            ? Tn
            : En),
          (this.isPropagationStopped = En),
          this
        );
      }
      return (
        m(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : typeof e.returnValue != `unknown` && (e.returnValue = !1),
              (this.isDefaultPrevented = Tn));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
              (this.isPropagationStopped = Tn));
          },
          persist: function () {},
          isPersistent: Tn,
        }),
        t
      );
    }
    var On = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      kn = Dn(On),
      An = m({}, On, { view: 0, detail: 0 }),
      jn = Dn(An),
      Mn,
      Nn,
      Pn,
      Fn = m({}, An, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Gn,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return `movementX` in e
            ? e.movementX
            : (e !== Pn &&
                (Pn && e.type === `mousemove`
                  ? ((Mn = e.screenX - Pn.screenX),
                    (Nn = e.screenY - Pn.screenY))
                  : (Nn = Mn = 0),
                (Pn = e)),
              Mn);
        },
        movementY: function (e) {
          return `movementY` in e ? e.movementY : Nn;
        },
      }),
      In = Dn(Fn),
      Ln = Dn(m({}, Fn, { dataTransfer: 0 })),
      Rn = Dn(m({}, An, { relatedTarget: 0 })),
      zn = Dn(
        m({}, On, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      ),
      Bn = Dn(
        m({}, On, {
          clipboardData: function (e) {
            return `clipboardData` in e
              ? e.clipboardData
              : window.clipboardData;
          },
        }),
      ),
      Vn = Dn(m({}, On, { data: 0 })),
      Hn = {
        Esc: `Escape`,
        Spacebar: ` `,
        Left: `ArrowLeft`,
        Up: `ArrowUp`,
        Right: `ArrowRight`,
        Down: `ArrowDown`,
        Del: `Delete`,
        Win: `OS`,
        Menu: `ContextMenu`,
        Apps: `ContextMenu`,
        Scroll: `ScrollLock`,
        MozPrintableKey: `Unidentified`,
      },
      Un = {
        8: `Backspace`,
        9: `Tab`,
        12: `Clear`,
        13: `Enter`,
        16: `Shift`,
        17: `Control`,
        18: `Alt`,
        19: `Pause`,
        20: `CapsLock`,
        27: `Escape`,
        32: ` `,
        33: `PageUp`,
        34: `PageDown`,
        35: `End`,
        36: `Home`,
        37: `ArrowLeft`,
        38: `ArrowUp`,
        39: `ArrowRight`,
        40: `ArrowDown`,
        45: `Insert`,
        46: `Delete`,
        112: `F1`,
        113: `F2`,
        114: `F3`,
        115: `F4`,
        116: `F5`,
        117: `F6`,
        118: `F7`,
        119: `F8`,
        120: `F9`,
        121: `F10`,
        122: `F11`,
        123: `F12`,
        144: `NumLock`,
        145: `ScrollLock`,
        224: `Meta`,
      },
      Wn = {
        Alt: `altKey`,
        Control: `ctrlKey`,
        Meta: `metaKey`,
        Shift: `shiftKey`,
      };
    function j(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : (e = Wn[e])
          ? !!t[e]
          : !1;
    }
    function Gn() {
      return j;
    }
    var M = Dn(
        m({}, An, {
          key: function (e) {
            if (e.key) {
              var t = Hn[e.key] || e.key;
              if (t !== `Unidentified`) return t;
            }
            return e.type === `keypress`
              ? ((e = wn(e)), e === 13 ? `Enter` : String.fromCharCode(e))
              : e.type === `keydown` || e.type === `keyup`
                ? Un[e.keyCode] || `Unidentified`
                : ``;
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: Gn,
          charCode: function (e) {
            return e.type === `keypress` ? wn(e) : 0;
          },
          keyCode: function (e) {
            return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
          },
          which: function (e) {
            return e.type === `keypress`
              ? wn(e)
              : e.type === `keydown` || e.type === `keyup`
                ? e.keyCode
                : 0;
          },
        }),
      ),
      Kn = Dn(
        m({}, Fn, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        }),
      ),
      qn = Dn(
        m({}, An, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: Gn,
        }),
      ),
      Jn = Dn(m({}, On, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Yn = Dn(
        m({}, Fn, {
          deltaX: function (e) {
            return `deltaX` in e
              ? e.deltaX
              : `wheelDeltaX` in e
                ? -e.wheelDeltaX
                : 0;
          },
          deltaY: function (e) {
            return `deltaY` in e
              ? e.deltaY
              : `wheelDeltaY` in e
                ? -e.wheelDeltaY
                : `wheelDelta` in e
                  ? -e.wheelDelta
                  : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
      ),
      Xn = Dn(m({}, On, { newState: 0, oldState: 0 })),
      Zn = [9, 13, 27, 32],
      Qn = _n && `CompositionEvent` in window,
      $n = null;
    _n && `documentMode` in document && ($n = document.documentMode);
    var er = _n && `TextEvent` in window && !$n,
      tr = _n && (!Qn || ($n && 8 < $n && 11 >= $n)),
      nr = ` `,
      rr = !1;
    function ir(e, t) {
      switch (e) {
        case `keyup`:
          return Zn.indexOf(t.keyCode) !== -1;
        case `keydown`:
          return t.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return !0;
        default:
          return !1;
      }
    }
    function ar(e) {
      return (
        (e = e.detail),
        typeof e == `object` && `data` in e ? e.data : null
      );
    }
    var or = !1;
    function sr(e, t) {
      switch (e) {
        case `compositionend`:
          return ar(t);
        case `keypress`:
          return t.which === 32 ? ((rr = !0), nr) : null;
        case `textInput`:
          return ((e = t.data), e === nr && rr ? null : e);
        default:
          return null;
      }
    }
    function cr(e, t) {
      if (or)
        return e === `compositionend` || (!Qn && ir(e, t))
          ? ((e = Cn()), (Sn = xn = bn = null), (or = !1), e)
          : null;
      switch (e) {
        case `paste`:
          return null;
        case `keypress`:
          if (
            !(t.ctrlKey || t.altKey || t.metaKey) ||
            (t.ctrlKey && t.altKey)
          ) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case `compositionend`:
          return tr && t.locale !== `ko` ? null : t.data;
        default:
          return null;
      }
    }
    var lr = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function ur(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === `input` ? !!lr[e.type] : t === `textarea`;
    }
    function dr(e, t, n, r) {
      (fn ? (A ? A.push(r) : (A = [r])) : (fn = r),
        (t = Ed(t, `onChange`)),
        0 < t.length &&
          ((n = new kn(`onChange`, `change`, null, n, r)),
          e.push({ event: n, listeners: t })));
    }
    var fr = null,
      pr = null;
    function mr(e) {
      yd(e, 0);
    }
    function hr(e) {
      if (Kt(Ot(e))) return e;
    }
    function gr(e, t) {
      if (e === `change`) return t;
    }
    var _r = !1;
    if (_n) {
      var vr;
      if (_n) {
        var yr = `oninput` in document;
        if (!yr) {
          var br = document.createElement(`div`);
          (br.setAttribute(`oninput`, `return;`),
            (yr = typeof br.oninput == `function`));
        }
        vr = yr;
      } else vr = !1;
      _r = vr && (!document.documentMode || 9 < document.documentMode);
    }
    function xr() {
      fr && (fr.detachEvent(`onpropertychange`, Sr), (pr = fr = null));
    }
    function Sr(e) {
      if (e.propertyName === `value` && hr(pr)) {
        var t = [];
        (dr(t, pr, e, dn(e)), hn(mr, t));
      }
    }
    function Cr(e, t, n) {
      e === `focusin`
        ? (xr(), (fr = t), (pr = n), fr.attachEvent(`onpropertychange`, Sr))
        : e === `focusout` && xr();
    }
    function wr(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`)
        return hr(pr);
    }
    function Tr(e, t) {
      if (e === `click`) return hr(t);
    }
    function Er(e, t) {
      if (e === `input` || e === `change`) return hr(t);
    }
    function Dr(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var Or = typeof Object.is == `function` ? Object.is : Dr;
    function kr(e, t) {
      if (Or(e, t)) return !0;
      if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!je.call(t, i) || !Or(e[i], t[i])) return !1;
      }
      return !0;
    }
    function Ar(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function jr(e, t) {
      var n = Ar(e);
      e = 0;
      for (var r; n; ) {
        if (n.nodeType === 3) {
          if (((r = e + n.textContent.length), e <= t && r >= t))
            return { node: n, offset: t - e };
          e = r;
        }
        a: {
          for (; n; ) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break a;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = Ar(n);
      }
    }
    function Mr(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? Mr(e, t.parentNode)
              : `contains` in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function Nr(e) {
      e =
        e != null &&
        e.ownerDocument != null &&
        e.ownerDocument.defaultView != null
          ? e.ownerDocument.defaultView
          : window;
      for (var t = qt(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = typeof t.contentWindow.location.href == `string`;
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = qt(e.document);
      }
      return t;
    }
    function Pr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === `input` &&
          (e.type === `text` ||
            e.type === `search` ||
            e.type === `tel` ||
            e.type === `url` ||
            e.type === `password`)) ||
          t === `textarea` ||
          e.contentEditable === `true`)
      );
    }
    var Fr = _n && `documentMode` in document && 11 >= document.documentMode,
      Ir = null,
      Lr = null,
      Rr = null,
      zr = !1;
    function Br(e, t, n) {
      var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      zr ||
        Ir == null ||
        Ir !== qt(r) ||
        ((r = Ir),
        `selectionStart` in r && Pr(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : ((r = (
              (r.ownerDocument && r.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            })),
        (Rr && kr(Rr, r)) ||
          ((Rr = r),
          (r = Ed(Lr, `onSelect`)),
          0 < r.length &&
            ((t = new kn(`onSelect`, `select`, null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = Ir))));
    }
    function Vr(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n[`Webkit` + e] = `webkit` + t),
        (n[`Moz` + e] = `moz` + t),
        n
      );
    }
    var Hr = {
        animationend: Vr(`Animation`, `AnimationEnd`),
        animationiteration: Vr(`Animation`, `AnimationIteration`),
        animationstart: Vr(`Animation`, `AnimationStart`),
        transitionrun: Vr(`Transition`, `TransitionRun`),
        transitionstart: Vr(`Transition`, `TransitionStart`),
        transitioncancel: Vr(`Transition`, `TransitionCancel`),
        transitionend: Vr(`Transition`, `TransitionEnd`),
      },
      Ur = {},
      Wr = {};
    _n &&
      ((Wr = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete Hr.animationend.animation,
        delete Hr.animationiteration.animation,
        delete Hr.animationstart.animation),
      `TransitionEvent` in window || delete Hr.transitionend.transition);
    function Gr(e) {
      if (Ur[e]) return Ur[e];
      if (!Hr[e]) return e;
      var t = Hr[e],
        n;
      for (n in t) if (t.hasOwnProperty(n) && n in Wr) return (Ur[e] = t[n]);
      return e;
    }
    var Kr = Gr(`animationend`),
      qr = Gr(`animationiteration`),
      Jr = Gr(`animationstart`),
      Yr = Gr(`transitionrun`),
      Xr = Gr(`transitionstart`),
      Zr = Gr(`transitioncancel`),
      Qr = Gr(`transitionend`),
      $r = new Map(),
      ei =
        `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `,
        );
    ei.push(`scrollEnd`);
    function ti(e, t) {
      ($r.set(e, t), Nt(t, [e]));
    }
    var ni =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (
                typeof window == `object` &&
                typeof window.ErrorEvent == `function`
              ) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (
                typeof process == `object` &&
                typeof process.emit == `function`
              ) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      ri = [],
      ii = 0,
      ai = 0;
    function oi() {
      for (var e = ii, t = (ai = ii = 0); t < e; ) {
        var n = ri[t];
        ri[t++] = null;
        var r = ri[t];
        ri[t++] = null;
        var i = ri[t];
        ri[t++] = null;
        var a = ri[t];
        if (((ri[t++] = null), r !== null && i !== null)) {
          var o = r.pending;
          (o === null ? (i.next = i) : ((i.next = o.next), (o.next = i)),
            (r.pending = i));
        }
        a !== 0 && li(n, i, a);
      }
    }
    function N(e, t, n, r) {
      ((ri[ii++] = e),
        (ri[ii++] = t),
        (ri[ii++] = n),
        (ri[ii++] = r),
        (ai |= r),
        (e.lanes |= r),
        (e = e.alternate),
        e !== null && (e.lanes |= r));
    }
    function si(e, t, n, r) {
      return (N(e, t, n, r), ui(e));
    }
    function ci(e, t) {
      return (N(e, null, null, t), ui(e));
    }
    function li(e, t, n) {
      e.lanes |= n;
      var r = e.alternate;
      r !== null && (r.lanes |= n);
      for (var i = !1, a = e.return; a !== null; )
        ((a.childLanes |= n),
          (r = a.alternate),
          r !== null && (r.childLanes |= n),
          a.tag === 22 &&
            ((e = a.stateNode), e === null || e._visibility & 1 || (i = !0)),
          (e = a),
          (a = a.return));
      return e.tag === 3
        ? ((a = e.stateNode),
          i &&
            t !== null &&
            ((i = 31 - Je(n)),
            (e = a.hiddenUpdates),
            (r = e[i]),
            r === null ? (e[i] = [t]) : r.push(t),
            (t.lane = n | 536870912)),
          a)
        : null;
    }
    function ui(e) {
      if (50 < du) throw ((du = 0), (fu = null), Error(a(185)));
      for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
      return e.tag === 3 ? e.stateNode : null;
    }
    var di = {};
    function fi(e, t, n, r) {
      ((this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
    }
    function pi(e, t, n, r) {
      return new fi(e, t, n, r);
    }
    function mi(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function hi(e, t) {
      var n = e.alternate;
      return (
        n === null
          ? ((n = pi(e.tag, t, e.key, e.mode)),
            (n.elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = e.flags & 65011712),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
          t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        (n.refCleanup = e.refCleanup),
        n
      );
    }
    function gi(e, t) {
      e.flags &= 65011714;
      var n = e.alternate;
      return (
        n === null
          ? ((e.childLanes = 0),
            (e.lanes = t),
            (e.child = null),
            (e.subtreeFlags = 0),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.stateNode = null))
          : ((e.childLanes = n.childLanes),
            (e.lanes = n.lanes),
            (e.child = n.child),
            (e.subtreeFlags = 0),
            (e.deletions = null),
            (e.memoizedProps = n.memoizedProps),
            (e.memoizedState = n.memoizedState),
            (e.updateQueue = n.updateQueue),
            (e.type = n.type),
            (t = n.dependencies),
            (e.dependencies =
              t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext })),
        e
      );
    }
    function _i(e, t, n, r, i, o) {
      var s = 0;
      if (((r = e), typeof e == `function`)) mi(e) && (s = 1);
      else if (typeof e == `string`)
        s = Uf(e, n, he.current)
          ? 26
          : e === `html` || e === `head` || e === `body`
            ? 27
            : 5;
      else
        a: switch (e) {
          case ie:
            return (
              (e = pi(31, n, t, i)),
              (e.elementType = ie),
              (e.lanes = o),
              e
            );
          case v:
            return vi(n.children, i, o, t);
          case y:
            ((s = 8), (i |= 24));
            break;
          case b:
            return (
              (e = pi(12, n, t, i | 2)),
              (e.elementType = b),
              (e.lanes = o),
              e
            );
          case ee:
            return (
              (e = pi(13, n, t, i)),
              (e.elementType = ee),
              (e.lanes = o),
              e
            );
          case te:
            return (
              (e = pi(19, n, t, i)),
              (e.elementType = te),
              (e.lanes = o),
              e
            );
          default:
            if (typeof e == `object` && e)
              switch (e.$$typeof) {
                case S:
                  s = 10;
                  break a;
                case x:
                  s = 9;
                  break a;
                case C:
                  s = 11;
                  break a;
                case ne:
                  s = 14;
                  break a;
                case re:
                  ((s = 16), (r = null));
                  break a;
              }
            ((s = 29),
              (n = Error(a(130, e === null ? `null` : typeof e, ``))),
              (r = null));
        }
      return (
        (t = pi(s, n, t, i)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = o),
        t
      );
    }
    function vi(e, t, n, r) {
      return ((e = pi(7, e, r, t)), (e.lanes = n), e);
    }
    function yi(e, t, n) {
      return ((e = pi(6, e, null, t)), (e.lanes = n), e);
    }
    function bi(e) {
      var t = pi(18, null, null, 0);
      return ((t.stateNode = e), t);
    }
    function xi(e, t, n) {
      return (
        (t = pi(4, e.children === null ? [] : e.children, e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    var Si = new WeakMap();
    function Ci(e, t) {
      if (typeof e == `object` && e) {
        var n = Si.get(e);
        return n === void 0
          ? ((t = { value: e, source: t, stack: Ae(t) }), Si.set(e, t), t)
          : n;
      }
      return { value: e, source: t, stack: Ae(t) };
    }
    var wi = [],
      Ti = 0,
      Ei = null,
      Di = 0,
      Oi = [],
      ki = 0,
      Ai = null,
      ji = 1,
      Mi = ``;
    function Ni(e, t) {
      ((wi[Ti++] = Di), (wi[Ti++] = Ei), (Ei = e), (Di = t));
    }
    function Pi(e, t, n) {
      ((Oi[ki++] = ji), (Oi[ki++] = Mi), (Oi[ki++] = Ai), (Ai = e));
      var r = ji;
      e = Mi;
      var i = 32 - Je(r) - 1;
      ((r &= ~(1 << i)), (n += 1));
      var a = 32 - Je(t) + i;
      if (30 < a) {
        var o = i - (i % 5);
        ((a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (ji = (1 << (32 - Je(t) + i)) | (n << i) | r),
          (Mi = a + e));
      } else ((ji = (1 << a) | (n << i) | r), (Mi = e));
    }
    function Fi(e) {
      e.return !== null && (Ni(e, 1), Pi(e, 1, 0));
    }
    function Ii(e) {
      for (; e === Ei; )
        ((Ei = wi[--Ti]), (wi[Ti] = null), (Di = wi[--Ti]), (wi[Ti] = null));
      for (; e === Ai; )
        ((Ai = Oi[--ki]),
          (Oi[ki] = null),
          (Mi = Oi[--ki]),
          (Oi[ki] = null),
          (ji = Oi[--ki]),
          (Oi[ki] = null));
    }
    function Li(e, t) {
      ((Oi[ki++] = ji),
        (Oi[ki++] = Mi),
        (Oi[ki++] = Ai),
        (ji = t.id),
        (Mi = t.overflow),
        (Ai = e));
    }
    var Ri = null,
      P = null,
      F = !1,
      zi = null,
      Bi = !1,
      Vi = Error(a(519));
    function Hi(e) {
      throw (
        Ji(
          Ci(
            Error(
              a(
                418,
                1 < arguments.length && arguments[1] !== void 0 && arguments[1]
                  ? `text`
                  : `HTML`,
                ``,
              ),
            ),
            e,
          ),
        ),
        Vi
      );
    }
    function Ui(e) {
      var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps;
      switch (((t[_t] = e), (t[vt] = r), n)) {
        case `dialog`:
          (Q(`cancel`, t), Q(`close`, t));
          break;
        case `iframe`:
        case `object`:
        case `embed`:
          Q(`load`, t);
          break;
        case `video`:
        case `audio`:
          for (n = 0; n < _d.length; n++) Q(_d[n], t);
          break;
        case `source`:
          Q(`error`, t);
          break;
        case `img`:
        case `image`:
        case `link`:
          (Q(`error`, t), Q(`load`, t));
          break;
        case `details`:
          Q(`toggle`, t);
          break;
        case `input`:
          (Q(`invalid`, t),
            Zt(
              t,
              r.value,
              r.defaultValue,
              r.checked,
              r.defaultChecked,
              r.type,
              r.name,
              !0,
            ));
          break;
        case `select`:
          Q(`invalid`, t);
          break;
        case `textarea`:
          (Q(`invalid`, t), tn(t, r.value, r.defaultValue, r.children));
      }
      ((n = r.children),
        (typeof n != `string` &&
          typeof n != `number` &&
          typeof n != `bigint`) ||
        t.textContent === `` + n ||
        !0 === r.suppressHydrationWarning ||
        Md(t.textContent, n)
          ? (r.popover != null && (Q(`beforetoggle`, t), Q(`toggle`, t)),
            r.onScroll != null && Q(`scroll`, t),
            r.onScrollEnd != null && Q(`scrollend`, t),
            r.onClick != null && (t.onclick = ln),
            (t = !0))
          : (t = !1),
        t || Hi(e, !0));
    }
    function Wi(e) {
      for (Ri = e.return; Ri; )
        switch (Ri.tag) {
          case 5:
          case 31:
          case 13:
            Bi = !1;
            return;
          case 27:
          case 3:
            Bi = !0;
            return;
          default:
            Ri = Ri.return;
        }
    }
    function Gi(e) {
      if (e !== Ri) return !1;
      if (!F) return (Wi(e), (F = !0), !1);
      var t = e.tag,
        n;
      if (
        ((n = t !== 3 && t !== 27) &&
          ((n = t === 5) &&
            ((n = e.type),
            (n =
              !(n !== `form` && n !== `button`) ||
              Ud(e.type, e.memoizedProps))),
          (n = !n)),
        n && P && Hi(e),
        Wi(e),
        t === 13)
      ) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(a(317));
        P = uf(e);
      } else if (t === 31) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(a(317));
        P = uf(e);
      } else
        t === 27
          ? ((t = P), Zd(e.type) ? ((e = lf), (lf = null), (P = e)) : (P = t))
          : (P = Ri ? cf(e.stateNode.nextSibling) : null);
      return !0;
    }
    function Ki() {
      ((P = Ri = null), (F = !1));
    }
    function qi() {
      var e = zi;
      return (
        e !== null &&
          (Zl === null ? (Zl = e) : Zl.push.apply(Zl, e), (zi = null)),
        e
      );
    }
    function Ji(e) {
      zi === null ? (zi = [e]) : zi.push(e);
    }
    var Yi = me(null),
      Xi = null,
      Zi = null;
    function Qi(e, t, n) {
      (D(Yi, t._currentValue), (t._currentValue = n));
    }
    function $i(e) {
      ((e._currentValue = Yi.current), E(Yi));
    }
    function ea(e, t, n) {
      for (; e !== null; ) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) === t
            ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t)
            : ((e.childLanes |= t), r !== null && (r.childLanes |= t)),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function ta(e, t, n, r) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var o = i.dependencies;
        if (o !== null) {
          var s = i.child;
          o = o.firstContext;
          a: for (; o !== null; ) {
            var c = o;
            o = i;
            for (var l = 0; l < t.length; l++)
              if (c.context === t[l]) {
                ((o.lanes |= n),
                  (c = o.alternate),
                  c !== null && (c.lanes |= n),
                  ea(o.return, n, e),
                  r || (s = null));
                break a;
              }
            o = c.next;
          }
        } else if (i.tag === 18) {
          if (((s = i.return), s === null)) throw Error(a(341));
          ((s.lanes |= n),
            (o = s.alternate),
            o !== null && (o.lanes |= n),
            ea(s, n, e),
            (s = null));
        } else s = i.child;
        if (s !== null) s.return = i;
        else
          for (s = i; s !== null; ) {
            if (s === e) {
              s = null;
              break;
            }
            if (((i = s.sibling), i !== null)) {
              ((i.return = s.return), (s = i));
              break;
            }
            s = s.return;
          }
        i = s;
      }
    }
    function na(e, t, n, r) {
      e = null;
      for (var i = t, o = !1; i !== null; ) {
        if (!o) {
          if (i.flags & 524288) o = !0;
          else if (i.flags & 262144) break;
        }
        if (i.tag === 10) {
          var s = i.alternate;
          if (s === null) throw Error(a(387));
          if (((s = s.memoizedProps), s !== null)) {
            var c = i.type;
            Or(i.pendingProps.value, s.value) ||
              (e === null ? (e = [c]) : e.push(c));
          }
        } else if (i === ve.current) {
          if (((s = i.alternate), s === null)) throw Error(a(387));
          s.memoizedState.memoizedState !== i.memoizedState.memoizedState &&
            (e === null ? (e = [Qf]) : e.push(Qf));
        }
        i = i.return;
      }
      (e !== null && ta(t, e, n, r), (t.flags |= 262144));
    }
    function ra(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!Or(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
      }
      return !1;
    }
    function ia(e) {
      ((Xi = e),
        (Zi = null),
        (e = e.dependencies),
        e !== null && (e.firstContext = null));
    }
    function aa(e) {
      return sa(Xi, e);
    }
    function oa(e, t) {
      return (Xi === null && ia(e), sa(e, t));
    }
    function sa(e, t) {
      var n = t._currentValue;
      if (((t = { context: t, memoizedValue: n, next: null }), Zi === null)) {
        if (e === null) throw Error(a(308));
        ((Zi = t),
          (e.dependencies = { lanes: 0, firstContext: t }),
          (e.flags |= 524288));
      } else Zi = Zi.next = t;
      return n;
    }
    var ca =
        typeof AbortController < `u`
          ? AbortController
          : function () {
              var e = [],
                t = (this.signal = {
                  aborted: !1,
                  addEventListener: function (t, n) {
                    e.push(n);
                  },
                });
              this.abort = function () {
                ((t.aborted = !0),
                  e.forEach(function (e) {
                    return e();
                  }));
              };
            },
      la = t.unstable_scheduleCallback,
      ua = t.unstable_NormalPriority,
      da = {
        $$typeof: S,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function fa() {
      return { controller: new ca(), data: new Map(), refCount: 0 };
    }
    function pa(e) {
      (e.refCount--,
        e.refCount === 0 &&
          la(ua, function () {
            e.controller.abort();
          }));
    }
    var ma = null,
      ha = 0,
      ga = 0,
      _a = null;
    function va(e, t) {
      if (ma === null) {
        var n = (ma = []);
        ((ha = 0),
          (ga = dd()),
          (_a = {
            status: `pending`,
            value: void 0,
            then: function (e) {
              n.push(e);
            },
          }));
      }
      return (ha++, t.then(ya, ya), t);
    }
    function ya() {
      if (--ha === 0 && ma !== null) {
        _a !== null && (_a.status = `fulfilled`);
        var e = ma;
        ((ma = null), (ga = 0), (_a = null));
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function ba(e, t) {
      var n = [],
        r = {
          status: `pending`,
          value: null,
          reason: null,
          then: function (e) {
            n.push(e);
          },
        };
      return (
        e.then(
          function () {
            ((r.status = `fulfilled`), (r.value = t));
            for (var e = 0; e < n.length; e++) (0, n[e])(t);
          },
          function (e) {
            for (r.status = `rejected`, r.reason = e, e = 0; e < n.length; e++)
              (0, n[e])(void 0);
          },
        ),
        r
      );
    }
    var xa = w.S;
    w.S = function (e, t) {
      ((eu = Ie()),
        typeof t == `object` && t && typeof t.then == `function` && va(e, t),
        xa !== null && xa(e, t));
    };
    var Sa = me(null);
    function Ca() {
      var e = Sa.current;
      return e === null ? q.pooledCache : e;
    }
    function wa(e, t) {
      t === null ? D(Sa, Sa.current) : D(Sa, t.pool);
    }
    function Ta() {
      var e = Ca();
      return e === null ? null : { parent: da._currentValue, pool: e };
    }
    var Ea = Error(a(460)),
      I = Error(a(474)),
      Da = Error(a(542)),
      Oa = { then: function () {} };
    function ka(e) {
      return ((e = e.status), e === `fulfilled` || e === `rejected`);
    }
    function Aa(e, t, n) {
      switch (
        ((n = e[n]),
        n === void 0 ? e.push(t) : n !== t && (t.then(ln, ln), (t = n)),
        t.status)
      ) {
        case `fulfilled`:
          return t.value;
        case `rejected`:
          throw ((e = t.reason), Pa(e), e);
        default:
          if (typeof t.status == `string`) t.then(ln, ln);
          else {
            if (((e = q), e !== null && 100 < e.shellSuspendCounter))
              throw Error(a(482));
            ((e = t),
              (e.status = `pending`),
              e.then(
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `fulfilled`), (n.value = e));
                  }
                },
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `rejected`), (n.reason = e));
                  }
                },
              ));
          }
          switch (t.status) {
            case `fulfilled`:
              return t.value;
            case `rejected`:
              throw ((e = t.reason), Pa(e), e);
          }
          throw ((Ma = t), Ea);
      }
    }
    function ja(e) {
      try {
        var t = e._init;
        return t(e._payload);
      } catch (e) {
        throw typeof e == `object` && e && typeof e.then == `function`
          ? ((Ma = e), Ea)
          : e;
      }
    }
    var Ma = null;
    function Na() {
      if (Ma === null) throw Error(a(459));
      var e = Ma;
      return ((Ma = null), e);
    }
    function Pa(e) {
      if (e === Ea || e === Da) throw Error(a(483));
    }
    var Fa = null,
      Ia = 0;
    function La(e) {
      var t = Ia;
      return ((Ia += 1), Fa === null && (Fa = []), Aa(Fa, e, t));
    }
    function Ra(e, t) {
      ((t = t.props.ref), (e.ref = t === void 0 ? null : t));
    }
    function za(e, t) {
      throw t.$$typeof === h
        ? Error(a(525))
        : ((e = Object.prototype.toString.call(t)),
          Error(
            a(
              31,
              e === `[object Object]`
                ? `object with keys {` + Object.keys(t).join(`, `) + `}`
                : e,
            ),
          ));
    }
    function Ba(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions;
          r === null ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; r !== null; ) (t(n, r), (r = r.sibling));
        return null;
      }
      function r(e) {
        for (var t = new Map(); e !== null; )
          (e.key === null ? t.set(e.index, e) : t.set(e.key, e),
            (e = e.sibling));
        return t;
      }
      function i(e, t) {
        return ((e = hi(e, t)), (e.index = 0), (e.sibling = null), e);
      }
      function o(t, n, r) {
        return (
          (t.index = r),
          e
            ? ((r = t.alternate),
              r === null
                ? ((t.flags |= 67108866), n)
                : ((r = r.index), r < n ? ((t.flags |= 67108866), n) : r))
            : ((t.flags |= 1048576), n)
        );
      }
      function s(t) {
        return (e && t.alternate === null && (t.flags |= 67108866), t);
      }
      function c(e, t, n, r) {
        return t === null || t.tag !== 6
          ? ((t = yi(n, e.mode, r)), (t.return = e), t)
          : ((t = i(t, n)), (t.return = e), t);
      }
      function l(e, t, n, r) {
        var a = n.type;
        return a === v
          ? d(e, t, n.props.children, r, n.key)
          : t !== null &&
              (t.elementType === a ||
                (typeof a == `object` &&
                  a &&
                  a.$$typeof === re &&
                  ja(a) === t.type))
            ? ((t = i(t, n.props)), Ra(t, n), (t.return = e), t)
            : ((t = _i(n.type, n.key, n.props, null, e.mode, r)),
              Ra(t, n),
              (t.return = e),
              t);
      }
      function u(e, t, n, r) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? ((t = xi(n, e.mode, r)), (t.return = e), t)
          : ((t = i(t, n.children || [])), (t.return = e), t);
      }
      function d(e, t, n, r, a) {
        return t === null || t.tag !== 7
          ? ((t = vi(n, e.mode, r, a)), (t.return = e), t)
          : ((t = i(t, n)), (t.return = e), t);
      }
      function f(e, t, n) {
        if (
          (typeof t == `string` && t !== ``) ||
          typeof t == `number` ||
          typeof t == `bigint`
        )
          return ((t = yi(`` + t, e.mode, n)), (t.return = e), t);
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case g:
              return (
                (n = _i(t.type, t.key, t.props, null, e.mode, n)),
                Ra(n, t),
                (n.return = e),
                n
              );
            case _:
              return ((t = xi(t, e.mode, n)), (t.return = e), t);
            case re:
              return ((t = ja(t)), f(e, t, n));
          }
          if (ue(t) || se(t))
            return ((t = vi(t, e.mode, n, null)), (t.return = e), t);
          if (typeof t.then == `function`) return f(e, La(t), n);
          if (t.$$typeof === S) return f(e, oa(e, t), n);
          za(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var i = t === null ? null : t.key;
        if (
          (typeof n == `string` && n !== ``) ||
          typeof n == `number` ||
          typeof n == `bigint`
        )
          return i === null ? c(e, t, `` + n, r) : null;
        if (typeof n == `object` && n) {
          switch (n.$$typeof) {
            case g:
              return n.key === i ? l(e, t, n, r) : null;
            case _:
              return n.key === i ? u(e, t, n, r) : null;
            case re:
              return ((n = ja(n)), p(e, t, n, r));
          }
          if (ue(n) || se(n)) return i === null ? d(e, t, n, r, null) : null;
          if (typeof n.then == `function`) return p(e, t, La(n), r);
          if (n.$$typeof === S) return p(e, t, oa(e, n), r);
          za(e, n);
        }
        return null;
      }
      function m(e, t, n, r, i) {
        if (
          (typeof r == `string` && r !== ``) ||
          typeof r == `number` ||
          typeof r == `bigint`
        )
          return ((e = e.get(n) || null), c(t, e, `` + r, i));
        if (typeof r == `object` && r) {
          switch (r.$$typeof) {
            case g:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                l(t, e, r, i)
              );
            case _:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                u(t, e, r, i)
              );
            case re:
              return ((r = ja(r)), m(e, t, n, r, i));
          }
          if (ue(r) || se(r))
            return ((e = e.get(n) || null), d(t, e, r, i, null));
          if (typeof r.then == `function`) return m(e, t, n, La(r), i);
          if (r.$$typeof === S) return m(e, t, n, oa(t, r), i);
          za(t, r);
        }
        return null;
      }
      function h(i, a, s, c) {
        for (
          var l = null, u = null, d = a, h = (a = 0), g = null;
          d !== null && h < s.length;
          h++
        ) {
          d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
          var _ = p(i, d, s[h], c);
          if (_ === null) {
            d === null && (d = g);
            break;
          }
          (e && d && _.alternate === null && t(i, d),
            (a = o(_, a, h)),
            u === null ? (l = _) : (u.sibling = _),
            (u = _),
            (d = g));
        }
        if (h === s.length) return (n(i, d), F && Ni(i, h), l);
        if (d === null) {
          for (; h < s.length; h++)
            ((d = f(i, s[h], c)),
              d !== null &&
                ((a = o(d, a, h)),
                u === null ? (l = d) : (u.sibling = d),
                (u = d)));
          return (F && Ni(i, h), l);
        }
        for (d = r(d); h < s.length; h++)
          ((g = m(d, i, h, s[h], c)),
            g !== null &&
              (e &&
                g.alternate !== null &&
                d.delete(g.key === null ? h : g.key),
              (a = o(g, a, h)),
              u === null ? (l = g) : (u.sibling = g),
              (u = g)));
        return (
          e &&
            d.forEach(function (e) {
              return t(i, e);
            }),
          F && Ni(i, h),
          l
        );
      }
      function y(i, s, c, l) {
        if (c == null) throw Error(a(151));
        for (
          var u = null, d = null, h = s, g = (s = 0), _ = null, v = c.next();
          h !== null && !v.done;
          g++, v = c.next()
        ) {
          h.index > g ? ((_ = h), (h = null)) : (_ = h.sibling);
          var y = p(i, h, v.value, l);
          if (y === null) {
            h === null && (h = _);
            break;
          }
          (e && h && y.alternate === null && t(i, h),
            (s = o(y, s, g)),
            d === null ? (u = y) : (d.sibling = y),
            (d = y),
            (h = _));
        }
        if (v.done) return (n(i, h), F && Ni(i, g), u);
        if (h === null) {
          for (; !v.done; g++, v = c.next())
            ((v = f(i, v.value, l)),
              v !== null &&
                ((s = o(v, s, g)),
                d === null ? (u = v) : (d.sibling = v),
                (d = v)));
          return (F && Ni(i, g), u);
        }
        for (h = r(h); !v.done; g++, v = c.next())
          ((v = m(h, i, g, v.value, l)),
            v !== null &&
              (e &&
                v.alternate !== null &&
                h.delete(v.key === null ? g : v.key),
              (s = o(v, s, g)),
              d === null ? (u = v) : (d.sibling = v),
              (d = v)));
        return (
          e &&
            h.forEach(function (e) {
              return t(i, e);
            }),
          F && Ni(i, g),
          u
        );
      }
      function b(e, r, o, c) {
        if (
          (typeof o == `object` &&
            o &&
            o.type === v &&
            o.key === null &&
            (o = o.props.children),
          typeof o == `object` && o)
        ) {
          switch (o.$$typeof) {
            case g:
              a: {
                for (var l = o.key; r !== null; ) {
                  if (r.key === l) {
                    if (((l = o.type), l === v)) {
                      if (r.tag === 7) {
                        (n(e, r.sibling),
                          (c = i(r, o.props.children)),
                          (c.return = e),
                          (e = c));
                        break a;
                      }
                    } else if (
                      r.elementType === l ||
                      (typeof l == `object` &&
                        l &&
                        l.$$typeof === re &&
                        ja(l) === r.type)
                    ) {
                      (n(e, r.sibling),
                        (c = i(r, o.props)),
                        Ra(c, o),
                        (c.return = e),
                        (e = c));
                      break a;
                    }
                    n(e, r);
                    break;
                  } else t(e, r);
                  r = r.sibling;
                }
                o.type === v
                  ? ((c = vi(o.props.children, e.mode, c, o.key)),
                    (c.return = e),
                    (e = c))
                  : ((c = _i(o.type, o.key, o.props, null, e.mode, c)),
                    Ra(c, o),
                    (c.return = e),
                    (e = c));
              }
              return s(e);
            case _:
              a: {
                for (l = o.key; r !== null; ) {
                  if (r.key === l)
                    if (
                      r.tag === 4 &&
                      r.stateNode.containerInfo === o.containerInfo &&
                      r.stateNode.implementation === o.implementation
                    ) {
                      (n(e, r.sibling),
                        (c = i(r, o.children || [])),
                        (c.return = e),
                        (e = c));
                      break a;
                    } else {
                      n(e, r);
                      break;
                    }
                  else t(e, r);
                  r = r.sibling;
                }
                ((c = xi(o, e.mode, c)), (c.return = e), (e = c));
              }
              return s(e);
            case re:
              return ((o = ja(o)), b(e, r, o, c));
          }
          if (ue(o)) return h(e, r, o, c);
          if (se(o)) {
            if (((l = se(o)), typeof l != `function`)) throw Error(a(150));
            return ((o = l.call(o)), y(e, r, o, c));
          }
          if (typeof o.then == `function`) return b(e, r, La(o), c);
          if (o.$$typeof === S) return b(e, r, oa(e, o), c);
          za(e, o);
        }
        return (typeof o == `string` && o !== ``) ||
          typeof o == `number` ||
          typeof o == `bigint`
          ? ((o = `` + o),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), (c = i(r, o)), (c.return = e), (e = c))
              : (n(e, r), (c = yi(o, e.mode, c)), (c.return = e), (e = c)),
            s(e))
          : n(e, r);
      }
      return function (e, t, n, r) {
        try {
          Ia = 0;
          var i = b(e, t, n, r);
          return ((Fa = null), i);
        } catch (t) {
          if (t === Ea || t === Da) throw t;
          var a = pi(29, t, null, e.mode);
          return ((a.lanes = r), (a.return = e), a);
        }
      };
    }
    var Va = Ba(!0),
      Ha = Ba(!1),
      Ua = !1;
    function Wa(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function Ga(e, t) {
      ((e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null,
          }));
    }
    function Ka(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function qa(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (((r = r.shared), K & 2)) {
        var i = r.pending;
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          (t = ui(e)),
          li(e, null, n),
          t
        );
      }
      return (N(e, r, t, n), ui(e));
    }
    function Ja(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194048))) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ut(e, n));
      }
    }
    function Ya(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
          a = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
          do {
            var o = {
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: null,
              next: null,
            };
            (a === null ? (i = a = o) : (a = a.next = o), (n = n.next));
          } while (n !== null);
          a === null ? (i = a = t) : (a = a.next = t);
        } else i = a = t;
        ((n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: a,
          shared: r.shared,
          callbacks: r.callbacks,
        }),
          (e.updateQueue = n));
        return;
      }
      ((e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t));
    }
    var Xa = !1;
    function Za() {
      if (Xa) {
        var e = _a;
        if (e !== null) throw e;
      }
    }
    function Qa(e, t, n, r) {
      Xa = !1;
      var i = e.updateQueue;
      Ua = !1;
      var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending;
      if (s !== null) {
        i.shared.pending = null;
        var c = s,
          l = c.next;
        ((c.next = null), o === null ? (a = l) : (o.next = l), (o = c));
        var u = e.alternate;
        u !== null &&
          ((u = u.updateQueue),
          (s = u.lastBaseUpdate),
          s !== o &&
            (s === null ? (u.firstBaseUpdate = l) : (s.next = l),
            (u.lastBaseUpdate = c)));
      }
      if (a !== null) {
        var d = i.baseState;
        ((o = 0), (u = l = c = null), (s = a));
        do {
          var f = s.lane & -536870913,
            p = f !== s.lane;
          if (p ? (Y & f) === f : (r & f) === f) {
            (f !== 0 && f === ga && (Xa = !0),
              u !== null &&
                (u = u.next =
                  {
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: null,
                    next: null,
                  }));
            a: {
              var h = e,
                g = s;
              f = t;
              var _ = n;
              switch (g.tag) {
                case 1:
                  if (((h = g.payload), typeof h == `function`)) {
                    d = h.call(_, d, f);
                    break a;
                  }
                  d = h;
                  break a;
                case 3:
                  h.flags = (h.flags & -65537) | 128;
                case 0:
                  if (
                    ((h = g.payload),
                    (f = typeof h == `function` ? h.call(_, d, f) : h),
                    f == null)
                  )
                    break a;
                  d = m({}, d, f);
                  break a;
                case 2:
                  Ua = !0;
              }
            }
            ((f = s.callback),
              f !== null &&
                ((e.flags |= 64),
                p && (e.flags |= 8192),
                (p = i.callbacks),
                p === null ? (i.callbacks = [f]) : p.push(f)));
          } else
            ((p = {
              lane: f,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            }),
              u === null ? ((l = u = p), (c = d)) : (u = u.next = p),
              (o |= f));
          if (((s = s.next), s === null)) {
            if (((s = i.shared.pending), s === null)) break;
            ((p = s),
              (s = p.next),
              (p.next = null),
              (i.lastBaseUpdate = p),
              (i.shared.pending = null));
          }
        } while (1);
        (u === null && (c = d),
          (i.baseState = c),
          (i.firstBaseUpdate = l),
          (i.lastBaseUpdate = u),
          a === null && (i.shared.lanes = 0),
          (Gl |= o),
          (e.lanes = o),
          (e.memoizedState = d));
      }
    }
    function $a(e, t) {
      if (typeof e != `function`) throw Error(a(191, e));
      e.call(t);
    }
    function eo(e, t) {
      var n = e.callbacks;
      if (n !== null)
        for (e.callbacks = null, e = 0; e < n.length; e++) $a(n[e], t);
    }
    var to = me(null),
      no = me(0);
    function ro(e, t) {
      ((e = Ul), D(no, e), D(to, t), (Ul = e | t.baseLanes));
    }
    function io() {
      (D(no, Ul), D(to, to.current));
    }
    function ao() {
      ((Ul = no.current), E(to), E(no));
    }
    var oo = me(null),
      so = null;
    function co(e) {
      var t = e.alternate;
      (D(L, L.current & 1),
        D(oo, e),
        so === null &&
          (t === null || to.current !== null || t.memoizedState !== null) &&
          (so = e));
    }
    function lo(e) {
      (D(L, L.current), D(oo, e), so === null && (so = e));
    }
    function uo(e) {
      e.tag === 22
        ? (D(L, L.current), D(oo, e), so === null && (so = e))
        : fo(e);
    }
    function fo() {
      (D(L, L.current), D(oo, oo.current));
    }
    function po(e) {
      (E(oo), so === e && (so = null), E(L));
    }
    var L = me(0);
    function mo(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && ((n = n.dehydrated), n === null || af(n) || of(n)))
            return t;
        } else if (
          t.tag === 19 &&
          (t.memoizedProps.revealOrder === `forwards` ||
            t.memoizedProps.revealOrder === `backwards` ||
            t.memoizedProps.revealOrder === `unstable_legacy-backwards` ||
            t.memoizedProps.revealOrder === `together`)
        ) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
      return null;
    }
    var ho = 0,
      R = null,
      z = null,
      go = null,
      _o = !1,
      vo = !1,
      yo = !1,
      bo = 0,
      xo = 0,
      So = null,
      B = 0;
    function Co() {
      throw Error(a(321));
    }
    function wo(e, t) {
      if (t === null) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Or(e[n], t[n])) return !1;
      return !0;
    }
    function To(e, t, n, r, i, a) {
      return (
        (ho = a),
        (R = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (w.H = e === null || e.memoizedState === null ? Hs : Us),
        (yo = !1),
        (a = n(r, i)),
        (yo = !1),
        vo && (a = Do(t, n, r, i)),
        Eo(e),
        a
      );
    }
    function Eo(e) {
      w.H = Vs;
      var t = z !== null && z.next !== null;
      if (((ho = 0), (go = z = R = null), (_o = !1), (xo = 0), (So = null), t))
        throw Error(a(300));
      e === null ||
        ac ||
        ((e = e.dependencies), e !== null && ra(e) && (ac = !0));
    }
    function Do(e, t, n, r) {
      R = e;
      var i = 0;
      do {
        if ((vo && (So = null), (xo = 0), (vo = !1), 25 <= i))
          throw Error(a(301));
        if (((i += 1), (go = z = null), e.updateQueue != null)) {
          var o = e.updateQueue;
          ((o.lastEffect = null),
            (o.events = null),
            (o.stores = null),
            o.memoCache != null && (o.memoCache.index = 0));
        }
        ((w.H = V), (o = t(n, r)));
      } while (vo);
      return o;
    }
    function Oo() {
      var e = w.H,
        t = e.useState()[0];
      return (
        (t = typeof t.then == `function` ? Fo(t) : t),
        (e = e.useState()[0]),
        (z === null ? null : z.memoizedState) !== e && (R.flags |= 1024),
        t
      );
    }
    function ko() {
      var e = bo !== 0;
      return ((bo = 0), e);
    }
    function Ao(e, t, n) {
      ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
    }
    function jo(e) {
      if (_o) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          (t !== null && (t.pending = null), (e = e.next));
        }
        _o = !1;
      }
      ((ho = 0), (go = z = R = null), (vo = !1), (xo = bo = 0), (So = null));
    }
    function Mo() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return (
        go === null ? (R.memoizedState = go = e) : (go = go.next = e),
        go
      );
    }
    function No() {
      if (z === null) {
        var e = R.alternate;
        e = e === null ? null : e.memoizedState;
      } else e = z.next;
      var t = go === null ? R.memoizedState : go.next;
      if (t !== null) ((go = t), (z = e));
      else {
        if (e === null)
          throw R.alternate === null ? Error(a(467)) : Error(a(310));
        ((z = e),
          (e = {
            memoizedState: z.memoizedState,
            baseState: z.baseState,
            baseQueue: z.baseQueue,
            queue: z.queue,
            next: null,
          }),
          go === null ? (R.memoizedState = go = e) : (go = go.next = e));
      }
      return go;
    }
    function Po() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Fo(e) {
      var t = xo;
      return (
        (xo += 1),
        So === null && (So = []),
        (e = Aa(So, e, t)),
        (t = R),
        (go === null ? t.memoizedState : go.next) === null &&
          ((t = t.alternate),
          (w.H = t === null || t.memoizedState === null ? Hs : Us)),
        e
      );
    }
    function Io(e) {
      if (typeof e == `object` && e) {
        if (typeof e.then == `function`) return Fo(e);
        if (e.$$typeof === S) return aa(e);
      }
      throw Error(a(438, String(e)));
    }
    function Lo(e) {
      var t = null,
        n = R.updateQueue;
      if ((n !== null && (t = n.memoCache), t == null)) {
        var r = R.alternate;
        r !== null &&
          ((r = r.updateQueue),
          r !== null &&
            ((r = r.memoCache),
            r != null &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              })));
      }
      if (
        ((t ??= { data: [], index: 0 }),
        n === null && ((n = Po()), (R.updateQueue = n)),
        (n.memoCache = t),
        (n = t.data[t.index]),
        n === void 0)
      )
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = ae;
      return (t.index++, n);
    }
    function Ro(e, t) {
      return typeof t == `function` ? t(e) : t;
    }
    function zo(e) {
      return Bo(No(), z, e);
    }
    function Bo(e, t, n) {
      var r = e.queue;
      if (r === null) throw Error(a(311));
      r.lastRenderedReducer = n;
      var i = e.baseQueue,
        o = r.pending;
      if (o !== null) {
        if (i !== null) {
          var s = i.next;
          ((i.next = o.next), (o.next = s));
        }
        ((t.baseQueue = i = o), (r.pending = null));
      }
      if (((o = e.baseState), i === null)) e.memoizedState = o;
      else {
        t = i.next;
        var c = (s = null),
          l = null,
          u = t,
          d = !1;
        do {
          var f = u.lane & -536870913;
          if (f === u.lane ? (ho & f) === f : (Y & f) === f) {
            var p = u.revertLane;
            if (p === 0)
              (l !== null &&
                (l = l.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    gesture: null,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                  }),
                f === ga && (d = !0));
            else if ((ho & p) === p) {
              ((u = u.next), p === ga && (d = !0));
              continue;
            } else
              ((f = {
                lane: 0,
                revertLane: u.revertLane,
                gesture: null,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
                l === null ? ((c = l = f), (s = o)) : (l = l.next = f),
                (R.lanes |= p),
                (Gl |= p));
            ((f = u.action),
              yo && n(o, f),
              (o = u.hasEagerState ? u.eagerState : n(o, f)));
          } else
            ((p = {
              lane: f,
              revertLane: u.revertLane,
              gesture: u.gesture,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
              l === null ? ((c = l = p), (s = o)) : (l = l.next = p),
              (R.lanes |= f),
              (Gl |= f));
          u = u.next;
        } while (u !== null && u !== t);
        if (
          (l === null ? (s = o) : (l.next = c),
          !Or(o, e.memoizedState) && ((ac = !0), d && ((n = _a), n !== null)))
        )
          throw n;
        ((e.memoizedState = o),
          (e.baseState = s),
          (e.baseQueue = l),
          (r.lastRenderedState = o));
      }
      return (i === null && (r.lanes = 0), [e.memoizedState, r.dispatch]);
    }
    function Vo(e) {
      var t = No(),
        n = t.queue;
      if (n === null) throw Error(a(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        i = n.pending,
        o = t.memoizedState;
      if (i !== null) {
        n.pending = null;
        var s = (i = i.next);
        do ((o = e(o, s.action)), (s = s.next));
        while (s !== i);
        (Or(o, t.memoizedState) || (ac = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (n.lastRenderedState = o));
      }
      return [o, r];
    }
    function Ho(e, t, n) {
      var r = R,
        i = No(),
        o = F;
      if (o) {
        if (n === void 0) throw Error(a(407));
        n = n();
      } else n = t();
      var s = !Or((z || i).memoizedState, n);
      if (
        (s && ((i.memoizedState = n), (ac = !0)),
        (i = i.queue),
        ps(Go.bind(null, r, i, e), [e]),
        i.getSnapshot !== t || s || (go !== null && go.memoizedState.tag & 1))
      ) {
        if (
          ((r.flags |= 2048),
          cs(9, { destroy: void 0 }, Wo.bind(null, r, i, n, t), null),
          q === null)
        )
          throw Error(a(349));
        o || ho & 127 || Uo(r, t, n);
      }
      return n;
    }
    function Uo(e, t, n) {
      ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = R.updateQueue),
        t === null
          ? ((t = Po()), (R.updateQueue = t), (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
    }
    function Wo(e, t, n, r) {
      ((t.value = n), (t.getSnapshot = r), Ko(t) && qo(e));
    }
    function Go(e, t, n) {
      return n(function () {
        Ko(t) && qo(e);
      });
    }
    function Ko(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !Or(e, n);
      } catch {
        return !0;
      }
    }
    function qo(e) {
      var t = ci(e, 2);
      t !== null && hu(t, e, 2);
    }
    function Jo(e) {
      var t = Mo();
      if (typeof e == `function`) {
        var n = e;
        if (((e = n()), yo)) {
          qe(!0);
          try {
            n();
          } finally {
            qe(!1);
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = e),
        (t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ro,
          lastRenderedState: e,
        }),
        t
      );
    }
    function Yo(e, t, n, r) {
      return ((e.baseState = n), Bo(e, z, typeof r == `function` ? r : Ro));
    }
    function Xo(e, t, n, r, i) {
      if (Rs(e)) throw Error(a(485));
      if (((e = t.action), e !== null)) {
        var o = {
          payload: i,
          action: e,
          next: null,
          isTransition: !0,
          status: `pending`,
          value: null,
          reason: null,
          listeners: [],
          then: function (e) {
            o.listeners.push(e);
          },
        };
        (w.T === null ? (o.isTransition = !1) : n(!0),
          r(o),
          (n = t.pending),
          n === null
            ? ((o.next = t.pending = o), Zo(t, o))
            : ((o.next = n.next), (t.pending = n.next = o)));
      }
    }
    function Zo(e, t) {
      var n = t.action,
        r = t.payload,
        i = e.state;
      if (t.isTransition) {
        var a = w.T,
          o = {};
        w.T = o;
        try {
          var s = n(i, r),
            c = w.S;
          (c !== null && c(o, s), Qo(e, t, s));
        } catch (n) {
          es(e, t, n);
        } finally {
          (a !== null && o.types !== null && (a.types = o.types), (w.T = a));
        }
      } else
        try {
          ((a = n(i, r)), Qo(e, t, a));
        } catch (n) {
          es(e, t, n);
        }
    }
    function Qo(e, t, n) {
      typeof n == `object` && n && typeof n.then == `function`
        ? n.then(
            function (n) {
              $o(e, t, n);
            },
            function (n) {
              return es(e, t, n);
            },
          )
        : $o(e, t, n);
    }
    function $o(e, t, n) {
      ((t.status = `fulfilled`),
        (t.value = n),
        ts(t),
        (e.state = n),
        (t = e.pending),
        t !== null &&
          ((n = t.next),
          n === t
            ? (e.pending = null)
            : ((n = n.next), (t.next = n), Zo(e, n))));
    }
    function es(e, t, n) {
      var r = e.pending;
      if (((e.pending = null), r !== null)) {
        r = r.next;
        do ((t.status = `rejected`), (t.reason = n), ts(t), (t = t.next));
        while (t !== r);
      }
      e.action = null;
    }
    function ts(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function ns(e, t) {
      return t;
    }
    function rs(e, t) {
      if (F) {
        var n = q.formState;
        if (n !== null) {
          a: {
            var r = R;
            if (F) {
              if (P) {
                b: {
                  for (var i = P, a = Bi; i.nodeType !== 8; ) {
                    if (!a) {
                      i = null;
                      break b;
                    }
                    if (((i = cf(i.nextSibling)), i === null)) {
                      i = null;
                      break b;
                    }
                  }
                  ((a = i.data), (i = a === `F!` || a === `F` ? i : null));
                }
                if (i) {
                  ((P = cf(i.nextSibling)), (r = i.data === `F!`));
                  break a;
                }
              }
              Hi(r);
            }
            r = !1;
          }
          r && (t = n[0]);
        }
      }
      return (
        (n = Mo()),
        (n.memoizedState = n.baseState = t),
        (r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ns,
          lastRenderedState: t,
        }),
        (n.queue = r),
        (n = Fs.bind(null, R, r)),
        (r.dispatch = n),
        (r = Jo(!1)),
        (a = Ls.bind(null, R, !1, r.queue)),
        (r = Mo()),
        (i = { state: t, dispatch: null, action: e, pending: null }),
        (r.queue = i),
        (n = Xo.bind(null, R, i, a, n)),
        (i.dispatch = n),
        (r.memoizedState = e),
        [t, n, !1]
      );
    }
    function is(e) {
      return as(No(), z, e);
    }
    function as(e, t, n) {
      if (
        ((t = Bo(e, t, ns)[0]),
        (e = zo(Ro)[0]),
        typeof t == `object` && t && typeof t.then == `function`)
      )
        try {
          var r = Fo(t);
        } catch (e) {
          throw e === Ea ? Da : e;
        }
      else r = t;
      t = No();
      var i = t.queue,
        a = i.dispatch;
      return (
        n !== t.memoizedState &&
          ((R.flags |= 2048),
          cs(9, { destroy: void 0 }, os.bind(null, i, n), null)),
        [r, a, e]
      );
    }
    function os(e, t) {
      e.action = t;
    }
    function ss(e) {
      var t = No(),
        n = z;
      if (n !== null) return as(t, n, e);
      (No(), (t = t.memoizedState), (n = No()));
      var r = n.queue.dispatch;
      return ((n.memoizedState = e), [t, r, !1]);
    }
    function cs(e, t, n, r) {
      return (
        (e = { tag: e, create: n, deps: r, inst: t, next: null }),
        (t = R.updateQueue),
        t === null && ((t = Po()), (R.updateQueue = t)),
        (n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function ls() {
      return No().memoizedState;
    }
    function us(e, t, n, r) {
      var i = Mo();
      ((R.flags |= e),
        (i.memoizedState = cs(
          1 | t,
          { destroy: void 0 },
          n,
          r === void 0 ? null : r,
        )));
    }
    function ds(e, t, n, r) {
      var i = No();
      r = r === void 0 ? null : r;
      var a = i.memoizedState.inst;
      z !== null && r !== null && wo(r, z.memoizedState.deps)
        ? (i.memoizedState = cs(t, a, n, r))
        : ((R.flags |= e), (i.memoizedState = cs(1 | t, a, n, r)));
    }
    function fs(e, t) {
      us(8390656, 8, e, t);
    }
    function ps(e, t) {
      ds(2048, 8, e, t);
    }
    function ms(e) {
      R.flags |= 4;
      var t = R.updateQueue;
      if (t === null) ((t = Po()), (R.updateQueue = t), (t.events = [e]));
      else {
        var n = t.events;
        n === null ? (t.events = [e]) : n.push(e);
      }
    }
    function hs(e) {
      var t = No().memoizedState;
      return (
        ms({ ref: t, nextImpl: e }),
        function () {
          if (K & 2) throw Error(a(440));
          return t.impl.apply(void 0, arguments);
        }
      );
    }
    function gs(e, t) {
      return ds(4, 2, e, t);
    }
    function _s(e, t) {
      return ds(4, 4, e, t);
    }
    function vs(e, t) {
      if (typeof t == `function`) {
        e = e();
        var n = t(e);
        return function () {
          typeof n == `function` ? n() : t(null);
        };
      }
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function ys(e, t, n) {
      ((n = n == null ? null : n.concat([e])),
        ds(4, 4, vs.bind(null, t, e), n));
    }
    function bs() {}
    function xs(e, t) {
      var n = No();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return t !== null && wo(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
    }
    function Ss(e, t) {
      var n = No();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      if (t !== null && wo(t, r[1])) return r[0];
      if (((r = e()), yo)) {
        qe(!0);
        try {
          e();
        } finally {
          qe(!1);
        }
      }
      return ((n.memoizedState = [r, t]), r);
    }
    function Cs(e, t, n) {
      return n === void 0 || (ho & 1073741824 && !(Y & 261930))
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = mu()), (R.lanes |= e), (Gl |= e), n);
    }
    function ws(e, t, n, r) {
      return Or(n, t)
        ? n
        : to.current === null
          ? !(ho & 42) || (ho & 1073741824 && !(Y & 261930))
            ? ((ac = !0), (e.memoizedState = n))
            : ((e = mu()), (R.lanes |= e), (Gl |= e), t)
          : ((e = Cs(e, n, r)), Or(e, t) || (ac = !0), e);
    }
    function Ts(e, t, n, r, i) {
      var a = T.p;
      T.p = a !== 0 && 8 > a ? a : 8;
      var o = w.T,
        s = {};
      ((w.T = s), Ls(e, !1, t, n));
      try {
        var c = i(),
          l = w.S;
        (l !== null && l(s, c),
          typeof c == `object` && c && typeof c.then == `function`
            ? Is(e, t, ba(c, r), pu(e))
            : Is(e, t, r, pu(e)));
      } catch (n) {
        Is(e, t, { then: function () {}, status: `rejected`, reason: n }, pu());
      } finally {
        ((T.p = a),
          o !== null && s.types !== null && (o.types = s.types),
          (w.T = o));
      }
    }
    function Es() {}
    function Ds(e, t, n, r) {
      if (e.tag !== 5) throw Error(a(476));
      var i = Os(e).queue;
      Ts(
        e,
        i,
        t,
        de,
        n === null
          ? Es
          : function () {
              return (ks(e), n(r));
            },
      );
    }
    function Os(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: de,
        baseState: de,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ro,
          lastRenderedState: de,
        },
        next: null,
      };
      var n = {};
      return (
        (t.next = {
          memoizedState: n,
          baseState: n,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ro,
            lastRenderedState: n,
          },
          next: null,
        }),
        (e.memoizedState = t),
        (e = e.alternate),
        e !== null && (e.memoizedState = t),
        t
      );
    }
    function ks(e) {
      var t = Os(e);
      (t.next === null && (t = e.alternate.memoizedState),
        Is(e, t.next.queue, {}, pu()));
    }
    function As() {
      return aa(Qf);
    }
    function js() {
      return No().memoizedState;
    }
    function Ms() {
      return No().memoizedState;
    }
    function Ns(e) {
      for (var t = e.return; t !== null; ) {
        switch (t.tag) {
          case 24:
          case 3:
            var n = pu();
            e = Ka(n);
            var r = qa(t, e, n);
            (r !== null && (hu(r, t, n), Ja(r, t, n)),
              (t = { cache: fa() }),
              (e.payload = t));
            return;
        }
        t = t.return;
      }
    }
    function Ps(e, t, n) {
      var r = pu();
      ((n = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        Rs(e)
          ? zs(t, n)
          : ((n = si(e, t, n, r)), n !== null && (hu(n, e, r), Bs(n, t, r))));
    }
    function Fs(e, t, n) {
      Is(e, t, n, pu());
    }
    function Is(e, t, n, r) {
      var i = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (Rs(e)) zs(t, i);
      else {
        var a = e.alternate;
        if (
          e.lanes === 0 &&
          (a === null || a.lanes === 0) &&
          ((a = t.lastRenderedReducer), a !== null)
        )
          try {
            var o = t.lastRenderedState,
              s = a(o, n);
            if (((i.hasEagerState = !0), (i.eagerState = s), Or(s, o)))
              return (N(e, t, i, 0), q === null && oi(), !1);
          } catch {}
        if (((n = si(e, t, i, r)), n !== null))
          return (hu(n, e, r), Bs(n, t, r), !0);
      }
      return !1;
    }
    function Ls(e, t, n, r) {
      if (
        ((r = {
          lane: 2,
          revertLane: dd(),
          gesture: null,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        Rs(e))
      ) {
        if (t) throw Error(a(479));
      } else ((t = si(e, n, r, 2)), t !== null && hu(t, e, 2));
    }
    function Rs(e) {
      var t = e.alternate;
      return e === R || (t !== null && t === R);
    }
    function zs(e, t) {
      vo = _o = !0;
      var n = e.pending;
      (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t));
    }
    function Bs(e, t, n) {
      if (n & 4194048) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ut(e, n));
      }
    }
    var Vs = {
      readContext: aa,
      use: Io,
      useCallback: Co,
      useContext: Co,
      useEffect: Co,
      useImperativeHandle: Co,
      useLayoutEffect: Co,
      useInsertionEffect: Co,
      useMemo: Co,
      useReducer: Co,
      useRef: Co,
      useState: Co,
      useDebugValue: Co,
      useDeferredValue: Co,
      useTransition: Co,
      useSyncExternalStore: Co,
      useId: Co,
      useHostTransitionStatus: Co,
      useFormState: Co,
      useActionState: Co,
      useOptimistic: Co,
      useMemoCache: Co,
      useCacheRefresh: Co,
    };
    Vs.useEffectEvent = Co;
    var Hs = {
        readContext: aa,
        use: Io,
        useCallback: function (e, t) {
          return ((Mo().memoizedState = [e, t === void 0 ? null : t]), e);
        },
        useContext: aa,
        useEffect: fs,
        useImperativeHandle: function (e, t, n) {
          ((n = n == null ? null : n.concat([e])),
            us(4194308, 4, vs.bind(null, t, e), n));
        },
        useLayoutEffect: function (e, t) {
          return us(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          us(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = Mo();
          t = t === void 0 ? null : t;
          var r = e();
          if (yo) {
            qe(!0);
            try {
              e();
            } finally {
              qe(!1);
            }
          }
          return ((n.memoizedState = [r, t]), r);
        },
        useReducer: function (e, t, n) {
          var r = Mo();
          if (n !== void 0) {
            var i = n(t);
            if (yo) {
              qe(!0);
              try {
                n(t);
              } finally {
                qe(!1);
              }
            }
          } else i = t;
          return (
            (r.memoizedState = r.baseState = i),
            (e = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: i,
            }),
            (r.queue = e),
            (e = e.dispatch = Ps.bind(null, R, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = Mo();
          return ((e = { current: e }), (t.memoizedState = e));
        },
        useState: function (e) {
          e = Jo(e);
          var t = e.queue,
            n = Fs.bind(null, R, t);
          return ((t.dispatch = n), [e.memoizedState, n]);
        },
        useDebugValue: bs,
        useDeferredValue: function (e, t) {
          return Cs(Mo(), e, t);
        },
        useTransition: function () {
          var e = Jo(!1);
          return (
            (e = Ts.bind(null, R, e.queue, !0, !1)),
            (Mo().memoizedState = e),
            [!1, e]
          );
        },
        useSyncExternalStore: function (e, t, n) {
          var r = R,
            i = Mo();
          if (F) {
            if (n === void 0) throw Error(a(407));
            n = n();
          } else {
            if (((n = t()), q === null)) throw Error(a(349));
            Y & 127 || Uo(r, t, n);
          }
          i.memoizedState = n;
          var o = { value: n, getSnapshot: t };
          return (
            (i.queue = o),
            fs(Go.bind(null, r, o, e), [e]),
            (r.flags |= 2048),
            cs(9, { destroy: void 0 }, Wo.bind(null, r, o, n, t), null),
            n
          );
        },
        useId: function () {
          var e = Mo(),
            t = q.identifierPrefix;
          if (F) {
            var n = Mi,
              r = ji;
            ((n = (r & ~(1 << (32 - Je(r) - 1))).toString(32) + n),
              (t = `_` + t + `R_` + n),
              (n = bo++),
              0 < n && (t += `H` + n.toString(32)),
              (t += `_`));
          } else ((n = B++), (t = `_` + t + `r_` + n.toString(32) + `_`));
          return (e.memoizedState = t);
        },
        useHostTransitionStatus: As,
        useFormState: rs,
        useActionState: rs,
        useOptimistic: function (e) {
          var t = Mo();
          t.memoizedState = t.baseState = e;
          var n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return (
            (t.queue = n),
            (t = Ls.bind(null, R, !0, n)),
            (n.dispatch = t),
            [e, t]
          );
        },
        useMemoCache: Lo,
        useCacheRefresh: function () {
          return (Mo().memoizedState = Ns.bind(null, R));
        },
        useEffectEvent: function (e) {
          var t = Mo(),
            n = { impl: e };
          return (
            (t.memoizedState = n),
            function () {
              if (K & 2) throw Error(a(440));
              return n.impl.apply(void 0, arguments);
            }
          );
        },
      },
      Us = {
        readContext: aa,
        use: Io,
        useCallback: xs,
        useContext: aa,
        useEffect: ps,
        useImperativeHandle: ys,
        useInsertionEffect: gs,
        useLayoutEffect: _s,
        useMemo: Ss,
        useReducer: zo,
        useRef: ls,
        useState: function () {
          return zo(Ro);
        },
        useDebugValue: bs,
        useDeferredValue: function (e, t) {
          return ws(No(), z.memoizedState, e, t);
        },
        useTransition: function () {
          var e = zo(Ro)[0],
            t = No().memoizedState;
          return [typeof e == `boolean` ? e : Fo(e), t];
        },
        useSyncExternalStore: Ho,
        useId: js,
        useHostTransitionStatus: As,
        useFormState: is,
        useActionState: is,
        useOptimistic: function (e, t) {
          return Yo(No(), z, e, t);
        },
        useMemoCache: Lo,
        useCacheRefresh: Ms,
      };
    Us.useEffectEvent = hs;
    var V = {
      readContext: aa,
      use: Io,
      useCallback: xs,
      useContext: aa,
      useEffect: ps,
      useImperativeHandle: ys,
      useInsertionEffect: gs,
      useLayoutEffect: _s,
      useMemo: Ss,
      useReducer: Vo,
      useRef: ls,
      useState: function () {
        return Vo(Ro);
      },
      useDebugValue: bs,
      useDeferredValue: function (e, t) {
        var n = No();
        return z === null ? Cs(n, e, t) : ws(n, z.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Vo(Ro)[0],
          t = No().memoizedState;
        return [typeof e == `boolean` ? e : Fo(e), t];
      },
      useSyncExternalStore: Ho,
      useId: js,
      useHostTransitionStatus: As,
      useFormState: ss,
      useActionState: ss,
      useOptimistic: function (e, t) {
        var n = No();
        return z === null
          ? ((n.baseState = e), [e, n.queue.dispatch])
          : Yo(n, z, e, t);
      },
      useMemoCache: Lo,
      useCacheRefresh: Ms,
    };
    V.useEffectEvent = hs;
    function Ws(e, t, n, r) {
      ((t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : m({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n));
    }
    var Gs = {
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = pu(),
          i = Ka(r);
        ((i.payload = t),
          n != null && (i.callback = n),
          (t = qa(e, i, r)),
          t !== null && (hu(t, e, r), Ja(t, e, r)));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = pu(),
          i = Ka(r);
        ((i.tag = 1),
          (i.payload = t),
          n != null && (i.callback = n),
          (t = qa(e, i, r)),
          t !== null && (hu(t, e, r), Ja(t, e, r)));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = pu(),
          r = Ka(n);
        ((r.tag = 2),
          t != null && (r.callback = t),
          (t = qa(e, r, n)),
          t !== null && (hu(t, e, n), Ja(t, e, n)));
      },
    };
    function Ks(e, t, n, r, i, a, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == `function`
          ? e.shouldComponentUpdate(r, a, o)
          : t.prototype && t.prototype.isPureReactComponent
            ? !kr(n, r) || !kr(i, a)
            : !0
      );
    }
    function qs(e, t, n, r) {
      ((e = t.state),
        typeof t.componentWillReceiveProps == `function` &&
          t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Gs.enqueueReplaceState(t, t.state, null));
    }
    function Js(e, t) {
      var n = t;
      if (`ref` in t) for (var r in ((n = {}), t)) r !== `ref` && (n[r] = t[r]);
      if ((e = e.defaultProps))
        for (var i in (n === t && (n = m({}, n)), e))
          n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    function Ys(e) {
      ni(e);
    }
    function Xs(e) {
      console.error(e);
    }
    function Zs(e) {
      ni(e);
    }
    function Qs(e, t) {
      try {
        var n = e.onUncaughtError;
        n(t.value, { componentStack: t.stack });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function $s(e, t, n) {
      try {
        var r = e.onCaughtError;
        r(n.value, {
          componentStack: n.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null,
        });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function ec(e, t, n) {
      return (
        (n = Ka(n)),
        (n.tag = 3),
        (n.payload = { element: null }),
        (n.callback = function () {
          Qs(e, t);
        }),
        n
      );
    }
    function tc(e) {
      return ((e = Ka(e)), (e.tag = 3), e);
    }
    function nc(e, t, n, r) {
      var i = n.type.getDerivedStateFromError;
      if (typeof i == `function`) {
        var a = r.value;
        ((e.payload = function () {
          return i(a);
        }),
          (e.callback = function () {
            $s(t, n, r);
          }));
      }
      var o = n.stateNode;
      o !== null &&
        typeof o.componentDidCatch == `function` &&
        (e.callback = function () {
          ($s(t, n, r),
            typeof i != `function` &&
              (ru === null ? (ru = new Set([this])) : ru.add(this)));
          var e = r.stack;
          this.componentDidCatch(r.value, {
            componentStack: e === null ? `` : e,
          });
        });
    }
    function rc(e, t, n, r, i) {
      if (
        ((n.flags |= 32768),
        typeof r == `object` && r && typeof r.then == `function`)
      ) {
        if (
          ((t = n.alternate),
          t !== null && na(t, n, i, !0),
          (n = oo.current),
          n !== null)
        ) {
          switch (n.tag) {
            case 31:
            case 13:
              return (
                so === null
                  ? Du()
                  : n.alternate === null && Wl === 0 && (Wl = 3),
                (n.flags &= -257),
                (n.flags |= 65536),
                (n.lanes = i),
                r === Oa
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null ? (n.updateQueue = new Set([r])) : t.add(r),
                    Gu(e, r, i)),
                !1
              );
            case 22:
              return (
                (n.flags |= 65536),
                r === Oa
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null
                      ? ((t = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([r]),
                        }),
                        (n.updateQueue = t))
                      : ((n = t.retryQueue),
                        n === null ? (t.retryQueue = new Set([r])) : n.add(r)),
                    Gu(e, r, i)),
                !1
              );
          }
          throw Error(a(435, n.tag));
        }
        return (Gu(e, r, i), Du(), !1);
      }
      if (F)
        return (
          (t = oo.current),
          t === null
            ? (r !== Vi && ((t = Error(a(423), { cause: r })), Ji(Ci(t, n))),
              (e = e.current.alternate),
              (e.flags |= 65536),
              (i &= -i),
              (e.lanes |= i),
              (r = Ci(r, n)),
              (i = ec(e.stateNode, r, i)),
              Ya(e, i),
              Wl !== 4 && (Wl = 2))
            : (!(t.flags & 65536) && (t.flags |= 256),
              (t.flags |= 65536),
              (t.lanes = i),
              r !== Vi && ((e = Error(a(422), { cause: r })), Ji(Ci(e, n)))),
          !1
        );
      var o = Error(a(520), { cause: r });
      if (
        ((o = Ci(o, n)),
        Xl === null ? (Xl = [o]) : Xl.push(o),
        Wl !== 4 && (Wl = 2),
        t === null)
      )
        return !0;
      ((r = Ci(r, n)), (n = t));
      do {
        switch (n.tag) {
          case 3:
            return (
              (n.flags |= 65536),
              (e = i & -i),
              (n.lanes |= e),
              (e = ec(n.stateNode, r, e)),
              Ya(n, e),
              !1
            );
          case 1:
            if (
              ((t = n.type),
              (o = n.stateNode),
              !(n.flags & 128) &&
                (typeof t.getDerivedStateFromError == `function` ||
                  (o !== null &&
                    typeof o.componentDidCatch == `function` &&
                    (ru === null || !ru.has(o)))))
            )
              return (
                (n.flags |= 65536),
                (i &= -i),
                (n.lanes |= i),
                (i = tc(i)),
                nc(i, e, n, r),
                Ya(n, i),
                !1
              );
        }
        n = n.return;
      } while (n !== null);
      return !1;
    }
    var ic = Error(a(461)),
      ac = !1;
    function oc(e, t, n, r) {
      t.child = e === null ? Ha(t, null, n, r) : Va(t, e.child, n, r);
    }
    function sc(e, t, n, r, i) {
      n = n.render;
      var a = t.ref;
      if (`ref` in r) {
        var o = {};
        for (var s in r) s !== `ref` && (o[s] = r[s]);
      } else o = r;
      return (
        ia(t),
        (r = To(e, t, n, o, a, i)),
        (s = ko()),
        e !== null && !ac
          ? (Ao(e, t, i), jc(e, t, i))
          : (F && s && Fi(t), (t.flags |= 1), oc(e, t, r, i), t.child)
      );
    }
    function cc(e, t, n, r, i) {
      if (e === null) {
        var a = n.type;
        return typeof a == `function` &&
          !mi(a) &&
          a.defaultProps === void 0 &&
          n.compare === null
          ? ((t.tag = 15), (t.type = a), lc(e, t, a, r, i))
          : ((e = _i(n.type, null, r, t, t.mode, i)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((a = e.child), !Mc(e, i))) {
        var o = a.memoizedProps;
        if (
          ((n = n.compare),
          (n = n === null ? kr : n),
          n(o, r) && e.ref === t.ref)
        )
          return jc(e, t, i);
      }
      return (
        (t.flags |= 1),
        (e = hi(a, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function lc(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps;
        if (kr(a, r) && e.ref === t.ref)
          if (((ac = !1), (t.pendingProps = r = a), Mc(e, i)))
            e.flags & 131072 && (ac = !0);
          else return ((t.lanes = e.lanes), jc(e, t, i));
      }
      return _c(e, t, n, r, i);
    }
    function uc(e, t, n, r) {
      var i = r.children,
        a = e === null ? null : e.memoizedState;
      if (
        (e === null &&
          t.stateNode === null &&
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        r.mode === `hidden`)
      ) {
        if (t.flags & 128) {
          if (((a = a === null ? n : a.baseLanes | n), e !== null)) {
            for (r = t.child = e.child, i = 0; r !== null; )
              ((i = i | r.lanes | r.childLanes), (r = r.sibling));
            r = i & ~a;
          } else ((r = 0), (t.child = null));
          return fc(e, t, a, n, r);
        }
        if (n & 536870912)
          ((t.memoizedState = { baseLanes: 0, cachePool: null }),
            e !== null && wa(t, a === null ? null : a.cachePool),
            a === null ? io() : ro(t, a),
            uo(t));
        else
          return (
            (r = t.lanes = 536870912),
            fc(e, t, a === null ? n : a.baseLanes | n, n, r)
          );
      } else
        a === null
          ? (e !== null && wa(t, null), io(), fo(t))
          : (wa(t, a.cachePool), ro(t, a), fo(t), (t.memoizedState = null));
      return (oc(e, t, i, n), t.child);
    }
    function dc(e, t) {
      return (
        (e !== null && e.tag === 22) ||
          t.stateNode !== null ||
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        t.sibling
      );
    }
    function fc(e, t, n, r, i) {
      var a = Ca();
      return (
        (a = a === null ? null : { parent: da._currentValue, pool: a }),
        (t.memoizedState = { baseLanes: n, cachePool: a }),
        e !== null && wa(t, null),
        io(),
        uo(t),
        e !== null && na(e, t, r, !0),
        (t.childLanes = i),
        null
      );
    }
    function pc(e, t) {
      return (
        (t = Ec({ mode: t.mode, children: t.children }, e.mode)),
        (t.ref = e.ref),
        (e.child = t),
        (t.return = e),
        t
      );
    }
    function mc(e, t, n) {
      return (
        Va(t, e.child, null, n),
        (e = pc(t, t.pendingProps)),
        (e.flags |= 2),
        po(t),
        (t.memoizedState = null),
        e
      );
    }
    function hc(e, t, n) {
      var r = t.pendingProps,
        i = (t.flags & 128) != 0;
      if (((t.flags &= -129), e === null)) {
        if (F) {
          if (r.mode === `hidden`)
            return ((e = pc(t, r)), (t.lanes = 536870912), dc(null, e));
          if (
            (lo(t),
            (e = P)
              ? ((e = rf(e, Bi)),
                (e = e !== null && e.data === `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: Ai === null ? null : { id: ji, overflow: Mi },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = bi(e)),
                  (n.return = t),
                  (t.child = n),
                  (Ri = t),
                  (P = null)))
              : (e = null),
            e === null)
          )
            throw Hi(t);
          return ((t.lanes = 536870912), null);
        }
        return pc(t, r);
      }
      var o = e.memoizedState;
      if (o !== null) {
        var s = o.dehydrated;
        if ((lo(t), i))
          if (t.flags & 256) ((t.flags &= -257), (t = mc(e, t, n)));
          else if (t.memoizedState !== null)
            ((t.child = e.child), (t.flags |= 128), (t = null));
          else throw Error(a(558));
        else if (
          (ac || na(e, t, n, !1), (i = (n & e.childLanes) !== 0), ac || i)
        ) {
          if (
            ((r = q),
            r !== null && ((s = dt(r, n)), s !== 0 && s !== o.retryLane))
          )
            throw ((o.retryLane = s), ci(e, s), hu(r, e, s), ic);
          (Du(), (t = mc(e, t, n)));
        } else
          ((e = o.treeContext),
            (P = cf(s.nextSibling)),
            (Ri = t),
            (F = !0),
            (zi = null),
            (Bi = !1),
            e !== null && Li(t, e),
            (t = pc(t, r)),
            (t.flags |= 4096));
        return t;
      }
      return (
        (e = hi(e.child, { mode: r.mode, children: r.children })),
        (e.ref = t.ref),
        (t.child = e),
        (e.return = t),
        e
      );
    }
    function gc(e, t) {
      var n = t.ref;
      if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof n != `function` && typeof n != `object`) throw Error(a(284));
        (e === null || e.ref !== n) && (t.flags |= 4194816);
      }
    }
    function _c(e, t, n, r, i) {
      return (
        ia(t),
        (n = To(e, t, n, r, void 0, i)),
        (r = ko()),
        e !== null && !ac
          ? (Ao(e, t, i), jc(e, t, i))
          : (F && r && Fi(t), (t.flags |= 1), oc(e, t, n, i), t.child)
      );
    }
    function vc(e, t, n, r, i, a) {
      return (
        ia(t),
        (t.updateQueue = null),
        (n = Do(t, r, n, i)),
        Eo(e),
        (r = ko()),
        e !== null && !ac
          ? (Ao(e, t, a), jc(e, t, a))
          : (F && r && Fi(t), (t.flags |= 1), oc(e, t, n, a), t.child)
      );
    }
    function yc(e, t, n, r, i) {
      if ((ia(t), t.stateNode === null)) {
        var a = di,
          o = n.contextType;
        (typeof o == `object` && o && (a = aa(o)),
          (a = new n(r, a)),
          (t.memoizedState =
            a.state !== null && a.state !== void 0 ? a.state : null),
          (a.updater = Gs),
          (t.stateNode = a),
          (a._reactInternals = t),
          (a = t.stateNode),
          (a.props = r),
          (a.state = t.memoizedState),
          (a.refs = {}),
          Wa(t),
          (o = n.contextType),
          (a.context = typeof o == `object` && o ? aa(o) : di),
          (a.state = t.memoizedState),
          (o = n.getDerivedStateFromProps),
          typeof o == `function` &&
            (Ws(t, n, o, r), (a.state = t.memoizedState)),
          typeof n.getDerivedStateFromProps == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function` ||
            (typeof a.UNSAFE_componentWillMount != `function` &&
              typeof a.componentWillMount != `function`) ||
            ((o = a.state),
            typeof a.componentWillMount == `function` && a.componentWillMount(),
            typeof a.UNSAFE_componentWillMount == `function` &&
              a.UNSAFE_componentWillMount(),
            o !== a.state && Gs.enqueueReplaceState(a, a.state, null),
            Qa(t, r, a, i),
            Za(),
            (a.state = t.memoizedState)),
          typeof a.componentDidMount == `function` && (t.flags |= 4194308),
          (r = !0));
      } else if (e === null) {
        a = t.stateNode;
        var s = t.memoizedProps,
          c = Js(n, s);
        a.props = c;
        var l = a.context,
          u = n.contextType;
        ((o = di), typeof u == `object` && u && (o = aa(u)));
        var d = n.getDerivedStateFromProps;
        ((u =
          typeof d == `function` ||
          typeof a.getSnapshotBeforeUpdate == `function`),
          (s = t.pendingProps !== s),
          u ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((s || l !== o) && qs(t, a, r, o)),
          (Ua = !1));
        var f = t.memoizedState;
        ((a.state = f),
          Qa(t, r, a, i),
          Za(),
          (l = t.memoizedState),
          s || f !== l || Ua
            ? (typeof d == `function` &&
                (Ws(t, n, d, r), (l = t.memoizedState)),
              (c = Ua || Ks(t, n, c, r, f, l, o))
                ? (u ||
                    (typeof a.UNSAFE_componentWillMount != `function` &&
                      typeof a.componentWillMount != `function`) ||
                    (typeof a.componentWillMount == `function` &&
                      a.componentWillMount(),
                    typeof a.UNSAFE_componentWillMount == `function` &&
                      a.UNSAFE_componentWillMount()),
                  typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308))
                : (typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = l)),
              (a.props = r),
              (a.state = l),
              (a.context = o),
              (r = c))
            : (typeof a.componentDidMount == `function` && (t.flags |= 4194308),
              (r = !1)));
      } else {
        ((a = t.stateNode),
          Ga(e, t),
          (o = t.memoizedProps),
          (u = Js(n, o)),
          (a.props = u),
          (d = t.pendingProps),
          (f = a.context),
          (l = n.contextType),
          (c = di),
          typeof l == `object` && l && (c = aa(l)),
          (s = n.getDerivedStateFromProps),
          (l =
            typeof s == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function`) ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((o !== d || f !== c) && qs(t, a, r, c)),
          (Ua = !1),
          (f = t.memoizedState),
          (a.state = f),
          Qa(t, r, a, i),
          Za());
        var p = t.memoizedState;
        o !== d ||
        f !== p ||
        Ua ||
        (e !== null && e.dependencies !== null && ra(e.dependencies))
          ? (typeof s == `function` && (Ws(t, n, s, r), (p = t.memoizedState)),
            (u =
              Ua ||
              Ks(t, n, u, r, f, p, c) ||
              (e !== null && e.dependencies !== null && ra(e.dependencies)))
              ? (l ||
                  (typeof a.UNSAFE_componentWillUpdate != `function` &&
                    typeof a.componentWillUpdate != `function`) ||
                  (typeof a.componentWillUpdate == `function` &&
                    a.componentWillUpdate(r, p, c),
                  typeof a.UNSAFE_componentWillUpdate == `function` &&
                    a.UNSAFE_componentWillUpdate(r, p, c)),
                typeof a.componentDidUpdate == `function` && (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate == `function` &&
                  (t.flags |= 1024))
              : (typeof a.componentDidUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (a.props = r),
            (a.state = p),
            (a.context = c),
            (r = u))
          : (typeof a.componentDidUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return (
        (a = r),
        gc(e, t),
        (r = (t.flags & 128) != 0),
        a || r
          ? ((a = t.stateNode),
            (n =
              r && typeof n.getDerivedStateFromError != `function`
                ? null
                : a.render()),
            (t.flags |= 1),
            e !== null && r
              ? ((t.child = Va(t, e.child, null, i)),
                (t.child = Va(t, null, n, i)))
              : oc(e, t, n, i),
            (t.memoizedState = a.state),
            (e = t.child))
          : (e = jc(e, t, i)),
        e
      );
    }
    function bc(e, t, n, r) {
      return (Ki(), (t.flags |= 256), oc(e, t, n, r), t.child);
    }
    var xc = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null,
    };
    function Sc(e) {
      return { baseLanes: e, cachePool: Ta() };
    }
    function Cc(e, t, n) {
      return ((e = e === null ? 0 : e.childLanes & ~n), t && (e |= Jl), e);
    }
    function wc(e, t, n) {
      var r = t.pendingProps,
        i = !1,
        o = (t.flags & 128) != 0,
        s;
      if (
        ((s = o) ||
          (s =
            e !== null && e.memoizedState === null ? !1 : (L.current & 2) != 0),
        s && ((i = !0), (t.flags &= -129)),
        (s = (t.flags & 32) != 0),
        (t.flags &= -33),
        e === null)
      ) {
        if (F) {
          if (
            (i ? co(t) : fo(t),
            (e = P)
              ? ((e = rf(e, Bi)),
                (e = e !== null && e.data !== `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: Ai === null ? null : { id: ji, overflow: Mi },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = bi(e)),
                  (n.return = t),
                  (t.child = n),
                  (Ri = t),
                  (P = null)))
              : (e = null),
            e === null)
          )
            throw Hi(t);
          return (of(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
        }
        var c = r.children;
        return (
          (r = r.fallback),
          i
            ? (fo(t),
              (i = t.mode),
              (c = Ec({ mode: `hidden`, children: c }, i)),
              (r = vi(r, i, n, null)),
              (c.return = t),
              (r.return = t),
              (c.sibling = r),
              (t.child = c),
              (r = t.child),
              (r.memoizedState = Sc(n)),
              (r.childLanes = Cc(e, s, n)),
              (t.memoizedState = xc),
              dc(null, r))
            : (co(t), Tc(t, c))
        );
      }
      var l = e.memoizedState;
      if (l !== null && ((c = l.dehydrated), c !== null)) {
        if (o)
          t.flags & 256
            ? (co(t), (t.flags &= -257), (t = Dc(e, t, n)))
            : t.memoizedState === null
              ? (fo(t),
                (c = r.fallback),
                (i = t.mode),
                (r = Ec({ mode: `visible`, children: r.children }, i)),
                (c = vi(c, i, n, null)),
                (c.flags |= 2),
                (r.return = t),
                (c.return = t),
                (r.sibling = c),
                (t.child = r),
                Va(t, e.child, null, n),
                (r = t.child),
                (r.memoizedState = Sc(n)),
                (r.childLanes = Cc(e, s, n)),
                (t.memoizedState = xc),
                (t = dc(null, r)))
              : (fo(t), (t.child = e.child), (t.flags |= 128), (t = null));
        else if ((co(t), of(c))) {
          if (((s = c.nextSibling && c.nextSibling.dataset), s)) var u = s.dgst;
          ((s = u),
            (r = Error(a(419))),
            (r.stack = ``),
            (r.digest = s),
            Ji({ value: r, source: null, stack: null }),
            (t = Dc(e, t, n)));
        } else if (
          (ac || na(e, t, n, !1), (s = (n & e.childLanes) !== 0), ac || s)
        ) {
          if (
            ((s = q),
            s !== null && ((r = dt(s, n)), r !== 0 && r !== l.retryLane))
          )
            throw ((l.retryLane = r), ci(e, r), hu(s, e, r), ic);
          (af(c) || Du(), (t = Dc(e, t, n)));
        } else
          af(c)
            ? ((t.flags |= 192), (t.child = e.child), (t = null))
            : ((e = l.treeContext),
              (P = cf(c.nextSibling)),
              (Ri = t),
              (F = !0),
              (zi = null),
              (Bi = !1),
              e !== null && Li(t, e),
              (t = Tc(t, r.children)),
              (t.flags |= 4096));
        return t;
      }
      return i
        ? (fo(t),
          (c = r.fallback),
          (i = t.mode),
          (l = e.child),
          (u = l.sibling),
          (r = hi(l, { mode: `hidden`, children: r.children })),
          (r.subtreeFlags = l.subtreeFlags & 65011712),
          u === null
            ? ((c = vi(c, i, n, null)), (c.flags |= 2))
            : (c = hi(u, c)),
          (c.return = t),
          (r.return = t),
          (r.sibling = c),
          (t.child = r),
          dc(null, r),
          (r = t.child),
          (c = e.child.memoizedState),
          c === null
            ? (c = Sc(n))
            : ((i = c.cachePool),
              i === null
                ? (i = Ta())
                : ((l = da._currentValue),
                  (i = i.parent === l ? i : { parent: l, pool: l })),
              (c = { baseLanes: c.baseLanes | n, cachePool: i })),
          (r.memoizedState = c),
          (r.childLanes = Cc(e, s, n)),
          (t.memoizedState = xc),
          dc(e.child, r))
        : (co(t),
          (n = e.child),
          (e = n.sibling),
          (n = hi(n, { mode: `visible`, children: r.children })),
          (n.return = t),
          (n.sibling = null),
          e !== null &&
            ((s = t.deletions),
            s === null ? ((t.deletions = [e]), (t.flags |= 16)) : s.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n);
    }
    function Tc(e, t) {
      return (
        (t = Ec({ mode: `visible`, children: t }, e.mode)),
        (t.return = e),
        (e.child = t)
      );
    }
    function Ec(e, t) {
      return ((e = pi(22, e, null, t)), (e.lanes = 0), e);
    }
    function Dc(e, t, n) {
      return (
        Va(t, e.child, null, n),
        (e = Tc(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function Oc(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      (r !== null && (r.lanes |= t), ea(e.return, t, n));
    }
    function kc(e, t, n, r, i, a) {
      var o = e.memoizedState;
      o === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
            treeForkCount: a,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = i),
          (o.treeForkCount = a));
    }
    function Ac(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
      r = r.children;
      var o = L.current,
        s = (o & 2) != 0;
      if (
        (s ? ((o = (o & 1) | 2), (t.flags |= 128)) : (o &= 1),
        D(L, o),
        oc(e, t, r, n),
        (r = F ? Di : 0),
        !s && e !== null && e.flags & 128)
      )
        a: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Oc(e, n, t);
          else if (e.tag === 19) Oc(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break a;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break a;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      switch (i) {
        case `forwards`:
          for (n = t.child, i = null; n !== null; )
            ((e = n.alternate),
              e !== null && mo(e) === null && (i = n),
              (n = n.sibling));
          ((n = i),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
            kc(t, !1, i, n, a, r));
          break;
        case `backwards`:
        case `unstable_legacy-backwards`:
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (((e = i.alternate), e !== null && mo(e) === null)) {
              t.child = i;
              break;
            }
            ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
          }
          kc(t, !0, n, null, a, r);
          break;
        case `together`:
          kc(t, !1, null, null, void 0, r);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function jc(e, t, n) {
      if (
        (e !== null && (t.dependencies = e.dependencies),
        (Gl |= t.lanes),
        (n & t.childLanes) === 0)
      )
        if (e !== null) {
          if ((na(e, t, n, !1), (n & t.childLanes) === 0)) return null;
        } else return null;
      if (e !== null && t.child !== e.child) throw Error(a(153));
      if (t.child !== null) {
        for (
          e = t.child, n = hi(e, e.pendingProps), t.child = n, n.return = t;
          e.sibling !== null;
        )
          ((e = e.sibling),
            (n = n.sibling = hi(e, e.pendingProps)),
            (n.return = t));
        n.sibling = null;
      }
      return t.child;
    }
    function Mc(e, t) {
      return (e.lanes & t) === 0
        ? ((e = e.dependencies), !!(e !== null && ra(e)))
        : !0;
    }
    function H(e, t, n) {
      switch (t.tag) {
        case 3:
          (ye(t, t.stateNode.containerInfo),
            Qi(t, da, e.memoizedState.cache),
            Ki());
          break;
        case 27:
        case 5:
          xe(t);
          break;
        case 4:
          ye(t, t.stateNode.containerInfo);
          break;
        case 10:
          Qi(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return ((t.flags |= 128), lo(t), null);
          break;
        case 13:
          var r = t.memoizedState;
          if (r !== null)
            return r.dehydrated === null
              ? (n & t.child.childLanes) === 0
                ? (co(t), (e = jc(e, t, n)), e === null ? null : e.sibling)
                : wc(e, t, n)
              : (co(t), (t.flags |= 128), null);
          co(t);
          break;
        case 19:
          var i = (e.flags & 128) != 0;
          if (
            ((r = (n & t.childLanes) !== 0),
            (r ||= (na(e, t, n, !1), (n & t.childLanes) !== 0)),
            i)
          ) {
            if (r) return Ac(e, t, n);
            t.flags |= 128;
          }
          if (
            ((i = t.memoizedState),
            i !== null &&
              ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            D(L, L.current),
            r)
          )
            break;
          return null;
        case 22:
          return ((t.lanes = 0), uc(e, t, n, t.pendingProps));
        case 24:
          Qi(t, da, e.memoizedState.cache);
      }
      return jc(e, t, n);
    }
    function Nc(e, t, n) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps) ac = !0;
        else {
          if (!Mc(e, n) && !(t.flags & 128)) return ((ac = !1), H(e, t, n));
          ac = !!(e.flags & 131072);
        }
      else ((ac = !1), F && t.flags & 1048576 && Pi(t, Di, t.index));
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          a: {
            var r = t.pendingProps;
            if (((e = ja(t.elementType)), (t.type = e), typeof e == `function`))
              mi(e)
                ? ((r = Js(e, r)), (t.tag = 1), (t = yc(null, t, e, r, n)))
                : ((t.tag = 0), (t = _c(null, t, e, r, n)));
            else {
              if (e != null) {
                var i = e.$$typeof;
                if (i === C) {
                  ((t.tag = 11), (t = sc(null, t, e, r, n)));
                  break a;
                } else if (i === ne) {
                  ((t.tag = 14), (t = cc(null, t, e, r, n)));
                  break a;
                }
              }
              throw ((t = le(e) || e), Error(a(306, t, ``)));
            }
          }
          return t;
        case 0:
          return _c(e, t, t.type, t.pendingProps, n);
        case 1:
          return ((r = t.type), (i = Js(r, t.pendingProps)), yc(e, t, r, i, n));
        case 3:
          a: {
            if ((ye(t, t.stateNode.containerInfo), e === null))
              throw Error(a(387));
            r = t.pendingProps;
            var o = t.memoizedState;
            ((i = o.element), Ga(e, t), Qa(t, r, null, n));
            var s = t.memoizedState;
            if (
              ((r = s.cache),
              Qi(t, da, r),
              r !== o.cache && ta(t, [da], n, !0),
              Za(),
              (r = s.element),
              o.isDehydrated)
            )
              if (
                ((o = { element: r, isDehydrated: !1, cache: s.cache }),
                (t.updateQueue.baseState = o),
                (t.memoizedState = o),
                t.flags & 256)
              ) {
                t = bc(e, t, r, n);
                break a;
              } else if (r !== i) {
                ((i = Ci(Error(a(424)), t)), Ji(i), (t = bc(e, t, r, n)));
                break a;
              } else {
                switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === `HTML` ? e.ownerDocument.body : e;
                }
                for (
                  P = cf(e.firstChild),
                    Ri = t,
                    F = !0,
                    zi = null,
                    Bi = !0,
                    n = Ha(t, null, r, n),
                    t.child = n;
                  n;
                )
                  ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
              }
            else {
              if ((Ki(), r === i)) {
                t = jc(e, t, n);
                break a;
              }
              oc(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 26:
          return (
            gc(e, t),
            e === null
              ? (n = kf(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = n)
                : F ||
                  ((n = t.type),
                  (e = t.pendingProps),
                  (r = Bd(_e.current).createElement(n)),
                  (r[_t] = t),
                  (r[vt] = e),
                  Pd(r, n, e),
                  At(r),
                  (t.stateNode = r))
              : (t.memoizedState = kf(
                  t.type,
                  e.memoizedProps,
                  t.pendingProps,
                  e.memoizedState,
                )),
            null
          );
        case 27:
          return (
            xe(t),
            e === null &&
              F &&
              ((r = t.stateNode = ff(t.type, t.pendingProps, _e.current)),
              (Ri = t),
              (Bi = !0),
              (i = P),
              Zd(t.type) ? ((lf = i), (P = cf(r.firstChild))) : (P = i)),
            oc(e, t, t.pendingProps.children, n),
            gc(e, t),
            e === null && (t.flags |= 4194304),
            t.child
          );
        case 5:
          return (
            e === null &&
              F &&
              ((i = r = P) &&
                ((r = tf(r, t.type, t.pendingProps, Bi)),
                r === null
                  ? (i = !1)
                  : ((t.stateNode = r),
                    (Ri = t),
                    (P = cf(r.firstChild)),
                    (Bi = !1),
                    (i = !0))),
              i || Hi(t)),
            xe(t),
            (i = t.type),
            (o = t.pendingProps),
            (s = e === null ? null : e.memoizedProps),
            (r = o.children),
            Ud(i, o) ? (r = null) : s !== null && Ud(i, s) && (t.flags |= 32),
            t.memoizedState !== null &&
              ((i = To(e, t, Oo, null, null, n)), (Qf._currentValue = i)),
            gc(e, t),
            oc(e, t, r, n),
            t.child
          );
        case 6:
          return (
            e === null &&
              F &&
              ((e = n = P) &&
                ((n = nf(n, t.pendingProps, Bi)),
                n === null
                  ? (e = !1)
                  : ((t.stateNode = n), (Ri = t), (P = null), (e = !0))),
              e || Hi(t)),
            null
          );
        case 13:
          return wc(e, t, n);
        case 4:
          return (
            ye(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = Va(t, null, r, n)) : oc(e, t, r, n),
            t.child
          );
        case 11:
          return sc(e, t, t.type, t.pendingProps, n);
        case 7:
          return (oc(e, t, t.pendingProps, n), t.child);
        case 8:
          return (oc(e, t, t.pendingProps.children, n), t.child);
        case 12:
          return (oc(e, t, t.pendingProps.children, n), t.child);
        case 10:
          return (
            (r = t.pendingProps),
            Qi(t, t.type, r.value),
            oc(e, t, r.children, n),
            t.child
          );
        case 9:
          return (
            (i = t.type._context),
            (r = t.pendingProps.children),
            ia(t),
            (i = aa(i)),
            (r = r(i)),
            (t.flags |= 1),
            oc(e, t, r, n),
            t.child
          );
        case 14:
          return cc(e, t, t.type, t.pendingProps, n);
        case 15:
          return lc(e, t, t.type, t.pendingProps, n);
        case 19:
          return Ac(e, t, n);
        case 31:
          return hc(e, t, n);
        case 22:
          return uc(e, t, n, t.pendingProps);
        case 24:
          return (
            ia(t),
            (r = aa(da)),
            e === null
              ? ((i = Ca()),
                i === null &&
                  ((i = q),
                  (o = fa()),
                  (i.pooledCache = o),
                  o.refCount++,
                  o !== null && (i.pooledCacheLanes |= n),
                  (i = o)),
                (t.memoizedState = { parent: r, cache: i }),
                Wa(t),
                Qi(t, da, i))
              : ((e.lanes & n) !== 0 && (Ga(e, t), Qa(t, null, null, n), Za()),
                (i = e.memoizedState),
                (o = t.memoizedState),
                i.parent === r
                  ? ((r = o.cache),
                    Qi(t, da, r),
                    r !== i.cache && ta(t, [da], n, !0))
                  : ((i = { parent: r, cache: r }),
                    (t.memoizedState = i),
                    t.lanes === 0 &&
                      (t.memoizedState = t.updateQueue.baseState = i),
                    Qi(t, da, r))),
            oc(e, t, t.pendingProps.children, n),
            t.child
          );
        case 29:
          throw t.pendingProps;
      }
      throw Error(a(156, t.tag));
    }
    function Pc(e) {
      e.flags |= 4;
    }
    function Fc(e, t, n, r, i) {
      if (((t = (e.mode & 32) != 0) && (t = !1), t)) {
        if (((e.flags |= 16777216), (i & 335544128) === i))
          if (e.stateNode.complete) e.flags |= 8192;
          else if (wu()) e.flags |= 8192;
          else throw ((Ma = Oa), I);
      } else e.flags &= -16777217;
    }
    function Ic(e, t) {
      if (t.type !== `stylesheet` || t.state.loading & 4) e.flags &= -16777217;
      else if (((e.flags |= 16777216), !Wf(t)))
        if (wu()) e.flags |= 8192;
        else throw ((Ma = Oa), I);
    }
    function Lc(e, t) {
      (t !== null && (e.flags |= 4),
        e.flags & 16384 &&
          ((t = e.tag === 22 ? 536870912 : at()), (e.lanes |= t), (Yl |= t)));
    }
    function Rc(e, t) {
      if (!F)
        switch (e.tailMode) {
          case `hidden`:
            t = e.tail;
            for (var n = null; t !== null; )
              (t.alternate !== null && (n = t), (t = t.sibling));
            n === null ? (e.tail = null) : (n.sibling = null);
            break;
          case `collapsed`:
            n = e.tail;
            for (var r = null; n !== null; )
              (n.alternate !== null && (r = n), (n = n.sibling));
            r === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
    }
    function U(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var i = e.child; i !== null; )
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags & 65011712),
            (r |= i.flags & 65011712),
            (i.return = e),
            (i = i.sibling));
      else
        for (i = e.child; i !== null; )
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags),
            (r |= i.flags),
            (i.return = e),
            (i = i.sibling));
      return ((e.subtreeFlags |= r), (e.childLanes = n), t);
    }
    function zc(e, t, n) {
      var r = t.pendingProps;
      switch ((Ii(t), t.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (U(t), null);
        case 1:
          return (U(t), null);
        case 3:
          return (
            (n = t.stateNode),
            (r = null),
            e !== null && (r = e.memoizedState.cache),
            t.memoizedState.cache !== r && (t.flags |= 2048),
            $i(da),
            be(),
            n.pendingContext &&
              ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) &&
              (Gi(t)
                ? Pc(t)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), qi())),
            U(t),
            null
          );
        case 26:
          var i = t.type,
            o = t.memoizedState;
          return (
            e === null
              ? (Pc(t),
                o === null ? (U(t), Fc(t, i, null, r, n)) : (U(t), Ic(t, o)))
              : o
                ? o === e.memoizedState
                  ? (U(t), (t.flags &= -16777217))
                  : (Pc(t), U(t), Ic(t, o))
                : ((e = e.memoizedProps),
                  e !== r && Pc(t),
                  U(t),
                  Fc(t, i, e, r, n)),
            null
          );
        case 27:
          if (
            (Se(t),
            (n = _e.current),
            (i = t.type),
            e !== null && t.stateNode != null)
          )
            e.memoizedProps !== r && Pc(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(a(166));
              return (U(t), null);
            }
            ((e = he.current),
              Gi(t) ? Ui(t, e) : ((e = ff(i, r, n)), (t.stateNode = e), Pc(t)));
          }
          return (U(t), null);
        case 5:
          if ((Se(t), (i = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && Pc(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(a(166));
              return (U(t), null);
            }
            if (((o = he.current), Gi(t))) Ui(t, o);
            else {
              var s = Bd(_e.current);
              switch (o) {
                case 1:
                  o = s.createElementNS(`http://www.w3.org/2000/svg`, i);
                  break;
                case 2:
                  o = s.createElementNS(
                    `http://www.w3.org/1998/Math/MathML`,
                    i,
                  );
                  break;
                default:
                  switch (i) {
                    case `svg`:
                      o = s.createElementNS(`http://www.w3.org/2000/svg`, i);
                      break;
                    case `math`:
                      o = s.createElementNS(
                        `http://www.w3.org/1998/Math/MathML`,
                        i,
                      );
                      break;
                    case `script`:
                      ((o = s.createElement(`div`)),
                        (o.innerHTML = `<script><\/script>`),
                        (o = o.removeChild(o.firstChild)));
                      break;
                    case `select`:
                      ((o =
                        typeof r.is == `string`
                          ? s.createElement(`select`, { is: r.is })
                          : s.createElement(`select`)),
                        r.multiple
                          ? (o.multiple = !0)
                          : r.size && (o.size = r.size));
                      break;
                    default:
                      o =
                        typeof r.is == `string`
                          ? s.createElement(i, { is: r.is })
                          : s.createElement(i);
                  }
              }
              ((o[_t] = t), (o[vt] = r));
              a: for (s = t.child; s !== null; ) {
                if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
                else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                  ((s.child.return = s), (s = s.child));
                  continue;
                }
                if (s === t) break a;
                for (; s.sibling === null; ) {
                  if (s.return === null || s.return === t) break a;
                  s = s.return;
                }
                ((s.sibling.return = s.return), (s = s.sibling));
              }
              t.stateNode = o;
              a: switch ((Pd(o, i, r), i)) {
                case `button`:
                case `input`:
                case `select`:
                case `textarea`:
                  r = !!r.autoFocus;
                  break a;
                case `img`:
                  r = !0;
                  break a;
                default:
                  r = !1;
              }
              r && Pc(t);
            }
          }
          return (
            U(t),
            Fc(
              t,
              t.type,
              e === null ? null : e.memoizedProps,
              t.pendingProps,
              n,
            ),
            null
          );
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== r && Pc(t);
          else {
            if (typeof r != `string` && t.stateNode === null)
              throw Error(a(166));
            if (((e = _e.current), Gi(t))) {
              if (
                ((e = t.stateNode),
                (n = t.memoizedProps),
                (r = null),
                (i = Ri),
                i !== null)
              )
                switch (i.tag) {
                  case 27:
                  case 5:
                    r = i.memoizedProps;
                }
              ((e[_t] = t),
                (e = !!(
                  e.nodeValue === n ||
                  (r !== null && !0 === r.suppressHydrationWarning) ||
                  Md(e.nodeValue, n)
                )),
                e || Hi(t, !0));
            } else
              ((e = Bd(e).createTextNode(r)), (e[_t] = t), (t.stateNode = e));
          }
          return (U(t), null);
        case 31:
          if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
            if (((r = Gi(t)), n !== null)) {
              if (e === null) {
                if (!r) throw Error(a(318));
                if (
                  ((e = t.memoizedState),
                  (e = e === null ? null : e.dehydrated),
                  !e)
                )
                  throw Error(a(557));
                e[_t] = t;
              } else
                (Ki(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4));
              (U(t), (e = !1));
            } else
              ((n = qi()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = n),
                (e = !0));
            if (!e) return t.flags & 256 ? (po(t), t) : (po(t), null);
            if (t.flags & 128) throw Error(a(558));
          }
          return (U(t), null);
        case 13:
          if (
            ((r = t.memoizedState),
            e === null ||
              (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (((i = Gi(t)), r !== null && r.dehydrated !== null)) {
              if (e === null) {
                if (!i) throw Error(a(318));
                if (
                  ((i = t.memoizedState),
                  (i = i === null ? null : i.dehydrated),
                  !i)
                )
                  throw Error(a(317));
                i[_t] = t;
              } else
                (Ki(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4));
              (U(t), (i = !1));
            } else
              ((i = qi()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = i),
                (i = !0));
            if (!i) return t.flags & 256 ? (po(t), t) : (po(t), null);
          }
          return (
            po(t),
            t.flags & 128
              ? ((t.lanes = n), t)
              : ((n = r !== null),
                (e = e !== null && e.memoizedState !== null),
                n &&
                  ((r = t.child),
                  (i = null),
                  r.alternate !== null &&
                    r.alternate.memoizedState !== null &&
                    r.alternate.memoizedState.cachePool !== null &&
                    (i = r.alternate.memoizedState.cachePool.pool),
                  (o = null),
                  r.memoizedState !== null &&
                    r.memoizedState.cachePool !== null &&
                    (o = r.memoizedState.cachePool.pool),
                  o !== i && (r.flags |= 2048)),
                n !== e && n && (t.child.flags |= 8192),
                Lc(t, t.updateQueue),
                U(t),
                null)
          );
        case 4:
          return (
            be(),
            e === null && Sd(t.stateNode.containerInfo),
            U(t),
            null
          );
        case 10:
          return ($i(t.type), U(t), null);
        case 19:
          if ((E(L), (r = t.memoizedState), r === null)) return (U(t), null);
          if (((i = (t.flags & 128) != 0), (o = r.rendering), o === null))
            if (i) Rc(r, !1);
            else {
              if (Wl !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null; ) {
                  if (((o = mo(e)), o !== null)) {
                    for (
                      t.flags |= 128,
                        Rc(r, !1),
                        e = o.updateQueue,
                        t.updateQueue = e,
                        Lc(t, e),
                        t.subtreeFlags = 0,
                        e = n,
                        n = t.child;
                      n !== null;
                    )
                      (gi(n, e), (n = n.sibling));
                    return (
                      D(L, (L.current & 1) | 2),
                      F && Ni(t, r.treeForkCount),
                      t.child
                    );
                  }
                  e = e.sibling;
                }
              r.tail !== null &&
                Ie() > tu &&
                ((t.flags |= 128), (i = !0), Rc(r, !1), (t.lanes = 4194304));
            }
          else {
            if (!i)
              if (((e = mo(o)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (i = !0),
                  (e = e.updateQueue),
                  (t.updateQueue = e),
                  Lc(t, e),
                  Rc(r, !0),
                  r.tail === null &&
                    r.tailMode === `hidden` &&
                    !o.alternate &&
                    !F)
                )
                  return (U(t), null);
              } else
                2 * Ie() - r.renderingStartTime > tu &&
                  n !== 536870912 &&
                  ((t.flags |= 128), (i = !0), Rc(r, !1), (t.lanes = 4194304));
            r.isBackwards
              ? ((o.sibling = t.child), (t.child = o))
              : ((e = r.last),
                e === null ? (t.child = o) : (e.sibling = o),
                (r.last = o));
          }
          return r.tail === null
            ? (U(t), null)
            : ((e = r.tail),
              (r.rendering = e),
              (r.tail = e.sibling),
              (r.renderingStartTime = Ie()),
              (e.sibling = null),
              (n = L.current),
              D(L, i ? (n & 1) | 2 : n & 1),
              F && Ni(t, r.treeForkCount),
              e);
        case 22:
        case 23:
          return (
            po(t),
            ao(),
            (r = t.memoizedState !== null),
            e === null
              ? r && (t.flags |= 8192)
              : (e.memoizedState !== null) !== r && (t.flags |= 8192),
            r
              ? n & 536870912 &&
                !(t.flags & 128) &&
                (U(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : U(t),
            (n = t.updateQueue),
            n !== null && Lc(t, n.retryQueue),
            (n = null),
            e !== null &&
              e.memoizedState !== null &&
              e.memoizedState.cachePool !== null &&
              (n = e.memoizedState.cachePool.pool),
            (r = null),
            t.memoizedState !== null &&
              t.memoizedState.cachePool !== null &&
              (r = t.memoizedState.cachePool.pool),
            r !== n && (t.flags |= 2048),
            e !== null && E(Sa),
            null
          );
        case 24:
          return (
            (n = null),
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            $i(da),
            U(t),
            null
          );
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(a(156, t.tag));
    }
    function Bc(e, t) {
      switch ((Ii(t), t.tag)) {
        case 1:
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 3:
          return (
            $i(da),
            be(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 26:
        case 27:
        case 5:
          return (Se(t), null);
        case 31:
          if (t.memoizedState !== null) {
            if ((po(t), t.alternate === null)) throw Error(a(340));
            Ki();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 13:
          if (
            (po(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
          ) {
            if (t.alternate === null) throw Error(a(340));
            Ki();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 19:
          return (E(L), null);
        case 4:
          return (be(), null);
        case 10:
          return ($i(t.type), null);
        case 22:
        case 23:
          return (
            po(t),
            ao(),
            e !== null && E(Sa),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 24:
          return ($i(da), null);
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Vc(e, t) {
      switch ((Ii(t), t.tag)) {
        case 3:
          ($i(da), be());
          break;
        case 26:
        case 27:
        case 5:
          Se(t);
          break;
        case 4:
          be();
          break;
        case 31:
          t.memoizedState !== null && po(t);
          break;
        case 13:
          po(t);
          break;
        case 19:
          E(L);
          break;
        case 10:
          $i(t.type);
          break;
        case 22:
        case 23:
          (po(t), ao(), e !== null && E(Sa));
          break;
        case 24:
          $i(da);
      }
    }
    function Hc(e, t) {
      try {
        var n = t.updateQueue,
          r = n === null ? null : n.lastEffect;
        if (r !== null) {
          var i = r.next;
          n = i;
          do {
            if ((n.tag & e) === e) {
              r = void 0;
              var a = n.create,
                o = n.inst;
              ((r = a()), (o.destroy = r));
            }
            n = n.next;
          } while (n !== i);
        }
      } catch (e) {
        Z(t, t.return, e);
      }
    }
    function Uc(e, t, n) {
      try {
        var r = t.updateQueue,
          i = r === null ? null : r.lastEffect;
        if (i !== null) {
          var a = i.next;
          r = a;
          do {
            if ((r.tag & e) === e) {
              var o = r.inst,
                s = o.destroy;
              if (s !== void 0) {
                ((o.destroy = void 0), (i = t));
                var c = n,
                  l = s;
                try {
                  l();
                } catch (e) {
                  Z(i, c, e);
                }
              }
            }
            r = r.next;
          } while (r !== a);
        }
      } catch (e) {
        Z(t, t.return, e);
      }
    }
    function Wc(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var n = e.stateNode;
        try {
          eo(t, n);
        } catch (t) {
          Z(e, e.return, t);
        }
      }
    }
    function Gc(e, t, n) {
      ((n.props = Js(e.type, e.memoizedProps)), (n.state = e.memoizedState));
      try {
        n.componentWillUnmount();
      } catch (n) {
        Z(e, t, n);
      }
    }
    function Kc(e, t) {
      try {
        var n = e.ref;
        if (n !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var r = e.stateNode;
              break;
            case 30:
              r = e.stateNode;
              break;
            default:
              r = e.stateNode;
          }
          typeof n == `function` ? (e.refCleanup = n(r)) : (n.current = r);
        }
      } catch (n) {
        Z(e, t, n);
      }
    }
    function qc(e, t) {
      var n = e.ref,
        r = e.refCleanup;
      if (n !== null)
        if (typeof r == `function`)
          try {
            r();
          } catch (n) {
            Z(e, t, n);
          } finally {
            ((e.refCleanup = null),
              (e = e.alternate),
              e != null && (e.refCleanup = null));
          }
        else if (typeof n == `function`)
          try {
            n(null);
          } catch (n) {
            Z(e, t, n);
          }
        else n.current = null;
    }
    function Jc(e) {
      var t = e.type,
        n = e.memoizedProps,
        r = e.stateNode;
      try {
        a: switch (t) {
          case `button`:
          case `input`:
          case `select`:
          case `textarea`:
            n.autoFocus && r.focus();
            break a;
          case `img`:
            n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
        }
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    function Yc(e, t, n) {
      try {
        var r = e.stateNode;
        (Fd(r, e.type, n, t), (r[vt] = t));
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    function Xc(e) {
      return (
        e.tag === 5 ||
        e.tag === 3 ||
        e.tag === 26 ||
        (e.tag === 27 && Zd(e.type)) ||
        e.tag === 4
      );
    }
    function Zc(e) {
      a: for (;;) {
        for (; e.sibling === null; ) {
          if (e.return === null || Xc(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
        ) {
          if (
            (e.tag === 27 && Zd(e.type)) ||
            e.flags & 2 ||
            e.child === null ||
            e.tag === 4
          )
            continue a;
          ((e.child.return = e), (e = e.child));
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Qc(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode),
          t
            ? (n.nodeType === 9
                ? n.body
                : n.nodeName === `HTML`
                  ? n.ownerDocument.body
                  : n
              ).insertBefore(e, t)
            : ((t =
                n.nodeType === 9
                  ? n.body
                  : n.nodeName === `HTML`
                    ? n.ownerDocument.body
                    : n),
              t.appendChild(e),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = ln)));
      else if (
        r !== 4 &&
        (r === 27 && Zd(e.type) && ((n = e.stateNode), (t = null)),
        (e = e.child),
        e !== null)
      )
        for (Qc(e, t, n), e = e.sibling; e !== null; )
          (Qc(e, t, n), (e = e.sibling));
    }
    function $c(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
      else if (
        r !== 4 &&
        (r === 27 && Zd(e.type) && (n = e.stateNode), (e = e.child), e !== null)
      )
        for ($c(e, t, n), e = e.sibling; e !== null; )
          ($c(e, t, n), (e = e.sibling));
    }
    function el(e) {
      var t = e.stateNode,
        n = e.memoizedProps;
      try {
        for (var r = e.type, i = t.attributes; i.length; )
          t.removeAttributeNode(i[0]);
        (Pd(t, r, n), (t[_t] = e), (t[vt] = n));
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    var tl = !1,
      W = !1,
      nl = !1,
      rl = typeof WeakSet == `function` ? WeakSet : Set,
      il = null;
    function al(e, t) {
      if (((e = e.containerInfo), (Rd = sp), (e = Nr(e)), Pr(e))) {
        if (`selectionStart` in e)
          var n = { start: e.selectionStart, end: e.selectionEnd };
        else
          a: {
            n = ((n = e.ownerDocument) && n.defaultView) || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
              n = r.anchorNode;
              var i = r.anchorOffset,
                o = r.focusNode;
              r = r.focusOffset;
              try {
                (n.nodeType, o.nodeType);
              } catch {
                n = null;
                break a;
              }
              var s = 0,
                c = -1,
                l = -1,
                u = 0,
                d = 0,
                f = e,
                p = null;
              b: for (;;) {
                for (
                  var m;
                  f !== n || (i !== 0 && f.nodeType !== 3) || (c = s + i),
                    f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                    f.nodeType === 3 && (s += f.nodeValue.length),
                    (m = f.firstChild) !== null;
                )
                  ((p = f), (f = m));
                for (;;) {
                  if (f === e) break b;
                  if (
                    (p === n && ++u === i && (c = s),
                    p === o && ++d === r && (l = s),
                    (m = f.nextSibling) !== null)
                  )
                    break;
                  ((f = p), (p = f.parentNode));
                }
                f = m;
              }
              n = c === -1 || l === -1 ? null : { start: c, end: l };
            } else n = null;
          }
        n ||= { start: 0, end: 0 };
      } else n = null;
      for (
        zd = { focusedElem: e, selectionRange: n }, sp = !1, il = t;
        il !== null;
      )
        if (((t = il), (e = t.child), t.subtreeFlags & 1028 && e !== null))
          ((e.return = t), (il = e));
        else
          for (; il !== null; ) {
            switch (((t = il), (o = t.alternate), (e = t.flags), t.tag)) {
              case 0:
                if (
                  e & 4 &&
                  ((e = t.updateQueue),
                  (e = e === null ? null : e.events),
                  e !== null)
                )
                  for (n = 0; n < e.length; n++)
                    ((i = e[n]), (i.ref.impl = i.nextImpl));
                break;
              case 11:
              case 15:
                break;
              case 1:
                if (e & 1024 && o !== null) {
                  ((e = void 0),
                    (n = t),
                    (i = o.memoizedProps),
                    (o = o.memoizedState),
                    (r = n.stateNode));
                  try {
                    var h = Js(n.type, i);
                    ((e = r.getSnapshotBeforeUpdate(h, o)),
                      (r.__reactInternalSnapshotBeforeUpdate = e));
                  } catch (e) {
                    Z(n, n.return, e);
                  }
                }
                break;
              case 3:
                if (e & 1024) {
                  if (
                    ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                  )
                    ef(e);
                  else if (n === 1)
                    switch (e.nodeName) {
                      case `HEAD`:
                      case `HTML`:
                      case `BODY`:
                        ef(e);
                        break;
                      default:
                        e.textContent = ``;
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if (e & 1024) throw Error(a(163));
            }
            if (((e = t.sibling), e !== null)) {
              ((e.return = t.return), (il = e));
              break;
            }
            il = t.return;
          }
    }
    function ol(e, t, n) {
      var r = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (bl(e, n), r & 4 && Hc(5, n));
          break;
        case 1:
          if ((bl(e, n), r & 4))
            if (((e = n.stateNode), t === null))
              try {
                e.componentDidMount();
              } catch (e) {
                Z(n, n.return, e);
              }
            else {
              var i = Js(n.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                e.componentDidUpdate(
                  i,
                  t,
                  e.__reactInternalSnapshotBeforeUpdate,
                );
              } catch (e) {
                Z(n, n.return, e);
              }
            }
          (r & 64 && Wc(n), r & 512 && Kc(n, n.return));
          break;
        case 3:
          if ((bl(e, n), r & 64 && ((e = n.updateQueue), e !== null))) {
            if (((t = null), n.child !== null))
              switch (n.child.tag) {
                case 27:
                case 5:
                  t = n.child.stateNode;
                  break;
                case 1:
                  t = n.child.stateNode;
              }
            try {
              eo(e, t);
            } catch (e) {
              Z(n, n.return, e);
            }
          }
          break;
        case 27:
          t === null && r & 4 && el(n);
        case 26:
        case 5:
          (bl(e, n), t === null && r & 4 && Jc(n), r & 512 && Kc(n, n.return));
          break;
        case 12:
          bl(e, n);
          break;
        case 31:
          (bl(e, n), r & 4 && dl(e, n));
          break;
        case 13:
          (bl(e, n),
            r & 4 && fl(e, n),
            r & 64 &&
              ((e = n.memoizedState),
              e !== null &&
                ((e = e.dehydrated),
                e !== null && ((n = Ju.bind(null, n)), sf(e, n)))));
          break;
        case 22:
          if (((r = n.memoizedState !== null || tl), !r)) {
            ((t = (t !== null && t.memoizedState !== null) || W), (i = tl));
            var a = W;
            ((tl = r),
              (W = t) && !a ? Sl(e, n, (n.subtreeFlags & 8772) != 0) : bl(e, n),
              (tl = i),
              (W = a));
          }
          break;
        case 30:
          break;
        default:
          bl(e, n);
      }
    }
    function sl(e) {
      var t = e.alternate;
      (t !== null && ((e.alternate = null), sl(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && Tt(t)),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
    }
    var G = null,
      cl = !1;
    function ll(e, t, n) {
      for (n = n.child; n !== null; ) (ul(e, t, n), (n = n.sibling));
    }
    function ul(e, t, n) {
      if (Ke && typeof Ke.onCommitFiberUnmount == `function`)
        try {
          Ke.onCommitFiberUnmount(Ge, n);
        } catch {}
      switch (n.tag) {
        case 26:
          (W || qc(n, t),
            ll(e, t, n),
            n.memoizedState
              ? n.memoizedState.count--
              : n.stateNode &&
                ((n = n.stateNode), n.parentNode.removeChild(n)));
          break;
        case 27:
          W || qc(n, t);
          var r = G,
            i = cl;
          (Zd(n.type) && ((G = n.stateNode), (cl = !1)),
            ll(e, t, n),
            pf(n.stateNode),
            (G = r),
            (cl = i));
          break;
        case 5:
          W || qc(n, t);
        case 6:
          if (
            ((r = G),
            (i = cl),
            (G = null),
            ll(e, t, n),
            (G = r),
            (cl = i),
            G !== null)
          )
            if (cl)
              try {
                (G.nodeType === 9
                  ? G.body
                  : G.nodeName === `HTML`
                    ? G.ownerDocument.body
                    : G
                ).removeChild(n.stateNode);
              } catch (e) {
                Z(n, t, e);
              }
            else
              try {
                G.removeChild(n.stateNode);
              } catch (e) {
                Z(n, t, e);
              }
          break;
        case 18:
          G !== null &&
            (cl
              ? ((e = G),
                Qd(
                  e.nodeType === 9
                    ? e.body
                    : e.nodeName === `HTML`
                      ? e.ownerDocument.body
                      : e,
                  n.stateNode,
                ),
                Np(e))
              : Qd(G, n.stateNode));
          break;
        case 4:
          ((r = G),
            (i = cl),
            (G = n.stateNode.containerInfo),
            (cl = !0),
            ll(e, t, n),
            (G = r),
            (cl = i));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          (Uc(2, n, t), W || Uc(4, n, t), ll(e, t, n));
          break;
        case 1:
          (W ||
            (qc(n, t),
            (r = n.stateNode),
            typeof r.componentWillUnmount == `function` && Gc(n, t, r)),
            ll(e, t, n));
          break;
        case 21:
          ll(e, t, n);
          break;
        case 22:
          ((W = (r = W) || n.memoizedState !== null), ll(e, t, n), (W = r));
          break;
        default:
          ll(e, t, n);
      }
    }
    function dl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
      ) {
        e = e.dehydrated;
        try {
          Np(e);
        } catch (e) {
          Z(t, t.return, e);
        }
      }
    }
    function fl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate),
        e !== null &&
          ((e = e.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null)))
      )
        try {
          Np(e);
        } catch (e) {
          Z(t, t.return, e);
        }
    }
    function pl(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return (t === null && (t = e.stateNode = new rl()), t);
        case 22:
          return (
            (e = e.stateNode),
            (t = e._retryCache),
            t === null && (t = e._retryCache = new rl()),
            t
          );
        default:
          throw Error(a(435, e.tag));
      }
    }
    function ml(e, t) {
      var n = pl(e);
      t.forEach(function (t) {
        if (!n.has(t)) {
          n.add(t);
          var r = Yu.bind(null, e, t);
          t.then(r, r);
        }
      });
    }
    function hl(e, t) {
      var n = t.deletions;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = e,
            s = t,
            c = s;
          a: for (; c !== null; ) {
            switch (c.tag) {
              case 27:
                if (Zd(c.type)) {
                  ((G = c.stateNode), (cl = !1));
                  break a;
                }
                break;
              case 5:
                ((G = c.stateNode), (cl = !1));
                break a;
              case 3:
              case 4:
                ((G = c.stateNode.containerInfo), (cl = !0));
                break a;
            }
            c = c.return;
          }
          if (G === null) throw Error(a(160));
          (ul(o, s, i),
            (G = null),
            (cl = !1),
            (o = i.alternate),
            o !== null && (o.return = null),
            (i.return = null));
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null; ) (_l(t, e), (t = t.sibling));
    }
    var gl = null;
    function _l(e, t) {
      var n = e.alternate,
        r = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (hl(t, e),
            vl(e),
            r & 4 && (Uc(3, e, e.return), Hc(3, e), Uc(5, e, e.return)));
          break;
        case 1:
          (hl(t, e),
            vl(e),
            r & 512 && (W || n === null || qc(n, n.return)),
            r & 64 &&
              tl &&
              ((e = e.updateQueue),
              e !== null &&
                ((r = e.callbacks),
                r !== null &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = n === null ? r : n.concat(r))))));
          break;
        case 26:
          var i = gl;
          if (
            (hl(t, e),
            vl(e),
            r & 512 && (W || n === null || qc(n, n.return)),
            r & 4)
          ) {
            var o = n === null ? null : n.memoizedState;
            if (((r = e.memoizedState), n === null))
              if (r === null)
                if (e.stateNode === null) {
                  a: {
                    ((r = e.type),
                      (n = e.memoizedProps),
                      (i = i.ownerDocument || i));
                    b: switch (r) {
                      case `title`:
                        ((o = i.getElementsByTagName(`title`)[0]),
                          (!o ||
                            o[wt] ||
                            o[_t] ||
                            o.namespaceURI === `http://www.w3.org/2000/svg` ||
                            o.hasAttribute(`itemprop`)) &&
                            ((o = i.createElement(r)),
                            i.head.insertBefore(
                              o,
                              i.querySelector(`head > title`),
                            )),
                          Pd(o, r, n),
                          (o[_t] = e),
                          At(o),
                          (r = o));
                        break a;
                      case `link`:
                        var s = Vf(`link`, `href`, i).get(r + (n.href || ``));
                        if (s) {
                          for (var c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`href`) ===
                                (n.href == null || n.href === ``
                                  ? null
                                  : n.href) &&
                                o.getAttribute(`rel`) ===
                                  (n.rel == null ? null : n.rel) &&
                                o.getAttribute(`title`) ===
                                  (n.title == null ? null : n.title) &&
                                o.getAttribute(`crossorigin`) ===
                                  (n.crossOrigin == null
                                    ? null
                                    : n.crossOrigin))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        ((o = i.createElement(r)),
                          Pd(o, r, n),
                          i.head.appendChild(o));
                        break;
                      case `meta`:
                        if (
                          (s = Vf(`meta`, `content`, i).get(
                            r + (n.content || ``),
                          ))
                        ) {
                          for (c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`content`) ===
                                (n.content == null ? null : `` + n.content) &&
                                o.getAttribute(`name`) ===
                                  (n.name == null ? null : n.name) &&
                                o.getAttribute(`property`) ===
                                  (n.property == null ? null : n.property) &&
                                o.getAttribute(`http-equiv`) ===
                                  (n.httpEquiv == null ? null : n.httpEquiv) &&
                                o.getAttribute(`charset`) ===
                                  (n.charSet == null ? null : n.charSet))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        ((o = i.createElement(r)),
                          Pd(o, r, n),
                          i.head.appendChild(o));
                        break;
                      default:
                        throw Error(a(468, r));
                    }
                    ((o[_t] = e), At(o), (r = o));
                  }
                  e.stateNode = r;
                } else Hf(i, e.type, e.stateNode);
              else e.stateNode = If(i, r, e.memoizedProps);
            else
              o === r
                ? r === null &&
                  e.stateNode !== null &&
                  Yc(e, e.memoizedProps, n.memoizedProps)
                : (o === null
                    ? n.stateNode !== null &&
                      ((n = n.stateNode), n.parentNode.removeChild(n))
                    : o.count--,
                  r === null
                    ? Hf(i, e.type, e.stateNode)
                    : If(i, r, e.memoizedProps));
          }
          break;
        case 27:
          (hl(t, e),
            vl(e),
            r & 512 && (W || n === null || qc(n, n.return)),
            n !== null && r & 4 && Yc(e, e.memoizedProps, n.memoizedProps));
          break;
        case 5:
          if (
            (hl(t, e),
            vl(e),
            r & 512 && (W || n === null || qc(n, n.return)),
            e.flags & 32)
          ) {
            i = e.stateNode;
            try {
              nn(i, ``);
            } catch (t) {
              Z(e, e.return, t);
            }
          }
          (r & 4 &&
            e.stateNode != null &&
            ((i = e.memoizedProps), Yc(e, i, n === null ? i : n.memoizedProps)),
            r & 1024 && (nl = !0));
          break;
        case 6:
          if ((hl(t, e), vl(e), r & 4)) {
            if (e.stateNode === null) throw Error(a(162));
            ((r = e.memoizedProps), (n = e.stateNode));
            try {
              n.nodeValue = r;
            } catch (t) {
              Z(e, e.return, t);
            }
          }
          break;
        case 3:
          if (
            ((Bf = null),
            (i = gl),
            (gl = gf(t.containerInfo)),
            hl(t, e),
            (gl = i),
            vl(e),
            r & 4 && n !== null && n.memoizedState.isDehydrated)
          )
            try {
              Np(t.containerInfo);
            } catch (t) {
              Z(e, e.return, t);
            }
          nl && ((nl = !1), yl(e));
          break;
        case 4:
          ((r = gl),
            (gl = gf(e.stateNode.containerInfo)),
            hl(t, e),
            vl(e),
            (gl = r));
          break;
        case 12:
          (hl(t, e), vl(e));
          break;
        case 31:
          (hl(t, e),
            vl(e),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), ml(e, r))));
          break;
        case 13:
          (hl(t, e),
            vl(e),
            e.child.flags & 8192 &&
              (e.memoizedState !== null) !=
                (n !== null && n.memoizedState !== null) &&
              ($l = Ie()),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), ml(e, r))));
          break;
        case 22:
          i = e.memoizedState !== null;
          var l = n !== null && n.memoizedState !== null,
            u = tl,
            d = W;
          if (
            ((tl = u || i),
            (W = d || l),
            hl(t, e),
            (W = d),
            (tl = u),
            vl(e),
            r & 8192)
          )
            a: for (
              t = e.stateNode,
                t._visibility = i ? t._visibility & -2 : t._visibility | 1,
                i && (n === null || l || tl || W || xl(e)),
                n = null,
                t = e;
              ;
            ) {
              if (t.tag === 5 || t.tag === 26) {
                if (n === null) {
                  l = n = t;
                  try {
                    if (((o = l.stateNode), i))
                      ((s = o.style),
                        typeof s.setProperty == `function`
                          ? s.setProperty(`display`, `none`, `important`)
                          : (s.display = `none`));
                    else {
                      c = l.stateNode;
                      var f = l.memoizedProps.style,
                        p =
                          f != null && f.hasOwnProperty(`display`)
                            ? f.display
                            : null;
                      c.style.display =
                        p == null || typeof p == `boolean`
                          ? ``
                          : (`` + p).trim();
                    }
                  } catch (e) {
                    Z(l, l.return, e);
                  }
                }
              } else if (t.tag === 6) {
                if (n === null) {
                  l = t;
                  try {
                    l.stateNode.nodeValue = i ? `` : l.memoizedProps;
                  } catch (e) {
                    Z(l, l.return, e);
                  }
                }
              } else if (t.tag === 18) {
                if (n === null) {
                  l = t;
                  try {
                    var m = l.stateNode;
                    i ? $d(m, !0) : $d(l.stateNode, !1);
                  } catch (e) {
                    Z(l, l.return, e);
                  }
                }
              } else if (
                ((t.tag !== 22 && t.tag !== 23) ||
                  t.memoizedState === null ||
                  t === e) &&
                t.child !== null
              ) {
                ((t.child.return = t), (t = t.child));
                continue;
              }
              if (t === e) break a;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) break a;
                (n === t && (n = null), (t = t.return));
              }
              (n === t && (n = null),
                (t.sibling.return = t.return),
                (t = t.sibling));
            }
          r & 4 &&
            ((r = e.updateQueue),
            r !== null &&
              ((n = r.retryQueue),
              n !== null && ((r.retryQueue = null), ml(e, n))));
          break;
        case 19:
          (hl(t, e),
            vl(e),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), ml(e, r))));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          (hl(t, e), vl(e));
      }
    }
    function vl(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var n, r = e.return; r !== null; ) {
            if (Xc(r)) {
              n = r;
              break;
            }
            r = r.return;
          }
          if (n == null) throw Error(a(160));
          switch (n.tag) {
            case 27:
              var i = n.stateNode;
              $c(e, Zc(e), i);
              break;
            case 5:
              var o = n.stateNode;
              (n.flags & 32 && (nn(o, ``), (n.flags &= -33)), $c(e, Zc(e), o));
              break;
            case 3:
            case 4:
              var s = n.stateNode.containerInfo;
              Qc(e, Zc(e), s);
              break;
            default:
              throw Error(a(161));
          }
        } catch (t) {
          Z(e, e.return, t);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function yl(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          (yl(t),
            t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
            (e = e.sibling));
        }
    }
    function bl(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          (ol(e, t.alternate, t), (t = t.sibling));
    }
    function xl(e) {
      for (e = e.child; e !== null; ) {
        var t = e;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            (Uc(4, t, t.return), xl(t));
            break;
          case 1:
            qc(t, t.return);
            var n = t.stateNode;
            (typeof n.componentWillUnmount == `function` && Gc(t, t.return, n),
              xl(t));
            break;
          case 27:
            pf(t.stateNode);
          case 26:
          case 5:
            (qc(t, t.return), xl(t));
            break;
          case 22:
            t.memoizedState === null && xl(t);
            break;
          case 30:
            xl(t);
            break;
          default:
            xl(t);
        }
        e = e.sibling;
      }
    }
    function Sl(e, t, n) {
      for (n &&= (t.subtreeFlags & 8772) != 0, t = t.child; t !== null; ) {
        var r = t.alternate,
          i = e,
          a = t,
          o = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            (Sl(i, a, n), Hc(4, a));
            break;
          case 1:
            if (
              (Sl(i, a, n),
              (r = a),
              (i = r.stateNode),
              typeof i.componentDidMount == `function`)
            )
              try {
                i.componentDidMount();
              } catch (e) {
                Z(r, r.return, e);
              }
            if (((r = a), (i = r.updateQueue), i !== null)) {
              var s = r.stateNode;
              try {
                var c = i.shared.hiddenCallbacks;
                if (c !== null)
                  for (
                    i.shared.hiddenCallbacks = null, i = 0;
                    i < c.length;
                    i++
                  )
                    $a(c[i], s);
              } catch (e) {
                Z(r, r.return, e);
              }
            }
            (n && o & 64 && Wc(a), Kc(a, a.return));
            break;
          case 27:
            el(a);
          case 26:
          case 5:
            (Sl(i, a, n), n && r === null && o & 4 && Jc(a), Kc(a, a.return));
            break;
          case 12:
            Sl(i, a, n);
            break;
          case 31:
            (Sl(i, a, n), n && o & 4 && dl(i, a));
            break;
          case 13:
            (Sl(i, a, n), n && o & 4 && fl(i, a));
            break;
          case 22:
            (a.memoizedState === null && Sl(i, a, n), Kc(a, a.return));
            break;
          case 30:
            break;
          default:
            Sl(i, a, n);
        }
        t = t.sibling;
      }
    }
    function Cl(e, t) {
      var n = null;
      (e !== null &&
        e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (n = e.memoizedState.cachePool.pool),
        (e = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (e = t.memoizedState.cachePool.pool),
        e !== n && (e != null && e.refCount++, n != null && pa(n)));
    }
    function wl(e, t) {
      ((e = null),
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache),
        t !== e && (t.refCount++, e != null && pa(e)));
    }
    function Tl(e, t, n, r) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) (El(e, t, n, r), (t = t.sibling));
    }
    function El(e, t, n, r) {
      var i = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (Tl(e, t, n, r), i & 2048 && Hc(9, t));
          break;
        case 1:
          Tl(e, t, n, r);
          break;
        case 3:
          (Tl(e, t, n, r),
            i & 2048 &&
              ((e = null),
              t.alternate !== null && (e = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache),
              t !== e && (t.refCount++, e != null && pa(e))));
          break;
        case 12:
          if (i & 2048) {
            (Tl(e, t, n, r), (e = t.stateNode));
            try {
              var a = t.memoizedProps,
                o = a.id,
                s = a.onPostCommit;
              typeof s == `function` &&
                s(
                  o,
                  t.alternate === null ? `mount` : `update`,
                  e.passiveEffectDuration,
                  -0,
                );
            } catch (e) {
              Z(t, t.return, e);
            }
          } else Tl(e, t, n, r);
          break;
        case 31:
          Tl(e, t, n, r);
          break;
        case 13:
          Tl(e, t, n, r);
          break;
        case 23:
          break;
        case 22:
          ((a = t.stateNode),
            (o = t.alternate),
            t.memoizedState === null
              ? a._visibility & 2
                ? Tl(e, t, n, r)
                : ((a._visibility |= 2),
                  Dl(e, t, n, r, (t.subtreeFlags & 10256) != 0 || !1))
              : a._visibility & 2
                ? Tl(e, t, n, r)
                : Ol(e, t),
            i & 2048 && Cl(o, t));
          break;
        case 24:
          (Tl(e, t, n, r), i & 2048 && wl(t.alternate, t));
          break;
        default:
          Tl(e, t, n, r);
      }
    }
    function Dl(e, t, n, r, i) {
      for (
        i &&= (t.subtreeFlags & 10256) != 0 || !1, t = t.child;
        t !== null;
      ) {
        var a = e,
          o = t,
          s = n,
          c = r,
          l = o.flags;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            (Dl(a, o, s, c, i), Hc(8, o));
            break;
          case 23:
            break;
          case 22:
            var u = o.stateNode;
            (o.memoizedState === null
              ? ((u._visibility |= 2), Dl(a, o, s, c, i))
              : u._visibility & 2
                ? Dl(a, o, s, c, i)
                : Ol(a, o),
              i && l & 2048 && Cl(o.alternate, o));
            break;
          case 24:
            (Dl(a, o, s, c, i), i && l & 2048 && wl(o.alternate, o));
            break;
          default:
            Dl(a, o, s, c, i);
        }
        t = t.sibling;
      }
    }
    function Ol(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var n = e,
            r = t,
            i = r.flags;
          switch (r.tag) {
            case 22:
              (Ol(n, r), i & 2048 && Cl(r.alternate, r));
              break;
            case 24:
              (Ol(n, r), i & 2048 && wl(r.alternate, r));
              break;
            default:
              Ol(n, r);
          }
          t = t.sibling;
        }
    }
    var kl = 8192;
    function Al(e, t, n) {
      if (e.subtreeFlags & kl)
        for (e = e.child; e !== null; ) (jl(e, t, n), (e = e.sibling));
    }
    function jl(e, t, n) {
      switch (e.tag) {
        case 26:
          (Al(e, t, n),
            e.flags & kl &&
              e.memoizedState !== null &&
              Gf(n, gl, e.memoizedState, e.memoizedProps));
          break;
        case 5:
          Al(e, t, n);
          break;
        case 3:
        case 4:
          var r = gl;
          ((gl = gf(e.stateNode.containerInfo)), Al(e, t, n), (gl = r));
          break;
        case 22:
          e.memoizedState === null &&
            ((r = e.alternate),
            r !== null && r.memoizedState !== null
              ? ((r = kl), (kl = 16777216), Al(e, t, n), (kl = r))
              : Al(e, t, n));
          break;
        default:
          Al(e, t, n);
      }
    }
    function Ml(e) {
      var t = e.alternate;
      if (t !== null && ((e = t.child), e !== null)) {
        t.child = null;
        do ((t = e.sibling), (e.sibling = null), (e = t));
        while (e !== null);
      }
    }
    function Nl(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((il = r), Il(r, e));
          }
        Ml(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; ) (Pl(e), (e = e.sibling));
    }
    function Pl(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          (Nl(e), e.flags & 2048 && Uc(9, e, e.return));
          break;
        case 3:
          Nl(e);
          break;
        case 12:
          Nl(e);
          break;
        case 22:
          var t = e.stateNode;
          e.memoizedState !== null &&
          t._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
            ? ((t._visibility &= -3), Fl(e))
            : Nl(e);
          break;
        default:
          Nl(e);
      }
    }
    function Fl(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((il = r), Il(r, e));
          }
        Ml(e);
      }
      for (e = e.child; e !== null; ) {
        switch (((t = e), t.tag)) {
          case 0:
          case 11:
          case 15:
            (Uc(8, t, t.return), Fl(t));
            break;
          case 22:
            ((n = t.stateNode),
              n._visibility & 2 && ((n._visibility &= -3), Fl(t)));
            break;
          default:
            Fl(t);
        }
        e = e.sibling;
      }
    }
    function Il(e, t) {
      for (; il !== null; ) {
        var n = il;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Uc(8, n, t);
            break;
          case 23:
          case 22:
            if (
              n.memoizedState !== null &&
              n.memoizedState.cachePool !== null
            ) {
              var r = n.memoizedState.cachePool.pool;
              r != null && r.refCount++;
            }
            break;
          case 24:
            pa(n.memoizedState.cache);
        }
        if (((r = n.child), r !== null)) ((r.return = n), (il = r));
        else
          a: for (n = e; il !== null; ) {
            r = il;
            var i = r.sibling,
              a = r.return;
            if ((sl(r), r === n)) {
              il = null;
              break a;
            }
            if (i !== null) {
              ((i.return = a), (il = i));
              break a;
            }
            il = a;
          }
      }
    }
    var Ll = {
        getCacheForType: function (e) {
          var t = aa(da),
            n = t.data.get(e);
          return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
        },
        cacheSignal: function () {
          return aa(da).controller.signal;
        },
      },
      Rl = typeof WeakMap == `function` ? WeakMap : Map,
      K = 0,
      q = null,
      J = null,
      Y = 0,
      X = 0,
      zl = null,
      Bl = !1,
      Vl = !1,
      Hl = !1,
      Ul = 0,
      Wl = 0,
      Gl = 0,
      Kl = 0,
      ql = 0,
      Jl = 0,
      Yl = 0,
      Xl = null,
      Zl = null,
      Ql = !1,
      $l = 0,
      eu = 0,
      tu = 1 / 0,
      nu = null,
      ru = null,
      iu = 0,
      au = null,
      ou = null,
      su = 0,
      cu = 0,
      lu = null,
      uu = null,
      du = 0,
      fu = null;
    function pu() {
      return K & 2 && Y !== 0 ? Y & -Y : w.T === null ? mt() : dd();
    }
    function mu() {
      if (Jl === 0)
        if (!(Y & 536870912) || F) {
          var e = $e;
          (($e <<= 1), !($e & 3932160) && ($e = 262144), (Jl = e));
        } else Jl = 536870912;
      return ((e = oo.current), e !== null && (e.flags |= 32), Jl);
    }
    function hu(e, t, n) {
      (((e === q && (X === 2 || X === 9)) || e.cancelPendingCommit !== null) &&
        (Su(e, 0), yu(e, Y, Jl, !1)),
        st(e, n),
        (!(K & 2) || e !== q) &&
          (e === q && (!(K & 2) && (Kl |= n), Wl === 4 && yu(e, Y, Jl, !1)),
          rd(e)));
    }
    function gu(e, t, n) {
      if (K & 6) throw Error(a(327));
      var r = (!n && (t & 127) == 0 && (t & e.expiredLanes) === 0) || rt(e, t),
        i = r ? Au(e, t) : Ou(e, t, !0),
        o = r;
      do {
        if (i === 0) {
          Vl && !r && yu(e, t, 0, !1);
          break;
        } else {
          if (((n = e.current.alternate), o && !vu(n))) {
            ((i = Ou(e, t, !1)), (o = !1));
            continue;
          }
          if (i === 2) {
            if (((o = t), e.errorRecoveryDisabledLanes & o)) var s = 0;
            else
              ((s = e.pendingLanes & -536870913),
                (s = s === 0 ? (s & 536870912 ? 536870912 : 0) : s));
            if (s !== 0) {
              t = s;
              a: {
                var c = e;
                i = Xl;
                var l = c.current.memoizedState.isDehydrated;
                if (
                  (l && (Su(c, s).flags |= 256), (s = Ou(c, s, !1)), s !== 2)
                ) {
                  if (Hl && !l) {
                    ((c.errorRecoveryDisabledLanes |= o), (Kl |= o), (i = 4));
                    break a;
                  }
                  ((o = Zl),
                    (Zl = i),
                    o !== null &&
                      (Zl === null ? (Zl = o) : Zl.push.apply(Zl, o)));
                }
                i = s;
              }
              if (((o = !1), i !== 2)) continue;
            }
          }
          if (i === 1) {
            (Su(e, 0), yu(e, t, 0, !0));
            break;
          }
          a: {
            switch (((r = e), (o = i), o)) {
              case 0:
              case 1:
                throw Error(a(345));
              case 4:
                if ((t & 4194048) !== t) break;
              case 6:
                yu(r, t, Jl, !Bl);
                break a;
              case 2:
                Zl = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(a(329));
            }
            if ((t & 62914560) === t && ((i = $l + 300 - Ie()), 10 < i)) {
              if ((yu(r, t, Jl, !Bl), nt(r, 0, !0) !== 0)) break a;
              ((su = t),
                (r.timeoutHandle = Kd(
                  _u.bind(
                    null,
                    r,
                    n,
                    Zl,
                    nu,
                    Ql,
                    t,
                    Jl,
                    Kl,
                    Yl,
                    Bl,
                    o,
                    `Throttled`,
                    -0,
                    0,
                  ),
                  i,
                )));
              break a;
            }
            _u(r, n, Zl, nu, Ql, t, Jl, Kl, Yl, Bl, o, null, -0, 0);
          }
        }
        break;
      } while (1);
      rd(e);
    }
    function _u(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
      if (
        ((e.timeoutHandle = -1),
        (d = t.subtreeFlags),
        d & 8192 || (d & 16785408) == 16785408)
      ) {
        ((d = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: ln,
        }),
          jl(t, a, d));
        var m =
          (a & 62914560) === a
            ? $l - Ie()
            : (a & 4194048) === a
              ? eu - Ie()
              : 0;
        if (((m = qf(d, m)), m !== null)) {
          ((su = a),
            (e.cancelPendingCommit = m(
              Lu.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p),
            )),
            yu(e, a, o, !l));
          return;
        }
      }
      Lu(e, t, a, n, r, i, o, s, c);
    }
    function vu(e) {
      for (var t = e; ; ) {
        var n = t.tag;
        if (
          (n === 0 || n === 11 || n === 15) &&
          t.flags & 16384 &&
          ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
        )
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              a = i.getSnapshot;
            i = i.value;
            try {
              if (!Or(a(), i)) return !1;
            } catch {
              return !1;
            }
          }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
          ((n.return = t), (t = n));
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      }
      return !0;
    }
    function yu(e, t, n, r) {
      ((t &= ~ql),
        (t &= ~Kl),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        r && (e.warmLanes |= t),
        (r = e.expirationTimes));
      for (var i = t; 0 < i; ) {
        var a = 31 - Je(i),
          o = 1 << a;
        ((r[a] = -1), (i &= ~o));
      }
      n !== 0 && lt(e, n, t);
    }
    function bu() {
      return K & 6 ? !0 : (id(0, !1), !1);
    }
    function xu() {
      if (J !== null) {
        if (X === 0) var e = J.return;
        else ((e = J), (Zi = Xi = null), jo(e), (Fa = null), (Ia = 0), (e = J));
        for (; e !== null; ) (Vc(e.alternate, e), (e = e.return));
        J = null;
      }
    }
    function Su(e, t) {
      var n = e.timeoutHandle;
      (n !== -1 && ((e.timeoutHandle = -1), qd(n)),
        (n = e.cancelPendingCommit),
        n !== null && ((e.cancelPendingCommit = null), n()),
        (su = 0),
        xu(),
        (q = e),
        (J = n = hi(e.current, null)),
        (Y = t),
        (X = 0),
        (zl = null),
        (Bl = !1),
        (Vl = rt(e, t)),
        (Hl = !1),
        (Yl = Jl = ql = Kl = Gl = Wl = 0),
        (Zl = Xl = null),
        (Ql = !1),
        t & 8 && (t |= t & 32));
      var r = e.entangledLanes;
      if (r !== 0)
        for (e = e.entanglements, r &= t; 0 < r; ) {
          var i = 31 - Je(r),
            a = 1 << i;
          ((t |= e[i]), (r &= ~a));
        }
      return ((Ul = t), oi(), n);
    }
    function Cu(e, t) {
      ((R = null),
        (w.H = Vs),
        t === Ea || t === Da
          ? ((t = Na()), (X = 3))
          : t === I
            ? ((t = Na()), (X = 4))
            : (X =
                t === ic
                  ? 8
                  : typeof t == `object` && t && typeof t.then == `function`
                    ? 6
                    : 1),
        (zl = t),
        J === null && ((Wl = 1), Qs(e, Ci(t, e.current))));
    }
    function wu() {
      var e = oo.current;
      return e === null
        ? !0
        : (Y & 4194048) === Y
          ? so === null
          : (Y & 62914560) === Y || Y & 536870912
            ? e === so
            : !1;
    }
    function Tu() {
      var e = w.H;
      return ((w.H = Vs), e === null ? Vs : e);
    }
    function Eu() {
      var e = w.A;
      return ((w.A = Ll), e);
    }
    function Du() {
      ((Wl = 4),
        Bl || ((Y & 4194048) !== Y && oo.current !== null) || (Vl = !0),
        (!(Gl & 134217727) && !(Kl & 134217727)) ||
          q === null ||
          yu(q, Y, Jl, !1));
    }
    function Ou(e, t, n) {
      var r = K;
      K |= 2;
      var i = Tu(),
        a = Eu();
      ((q !== e || Y !== t) && ((nu = null), Su(e, t)), (t = !1));
      var o = Wl;
      a: do
        try {
          if (X !== 0 && J !== null) {
            var s = J,
              c = zl;
            switch (X) {
              case 8:
                (xu(), (o = 6));
                break a;
              case 3:
              case 2:
              case 9:
              case 6:
                oo.current === null && (t = !0);
                var l = X;
                if (((X = 0), (zl = null), Pu(e, s, c, l), n && Vl)) {
                  o = 0;
                  break a;
                }
                break;
              default:
                ((l = X), (X = 0), (zl = null), Pu(e, s, c, l));
            }
          }
          (ku(), (o = Wl));
          break;
        } catch (t) {
          Cu(e, t);
        }
      while (1);
      return (
        t && e.shellSuspendCounter++,
        (Zi = Xi = null),
        (K = r),
        (w.H = i),
        (w.A = a),
        J === null && ((q = null), (Y = 0), oi()),
        o
      );
    }
    function ku() {
      for (; J !== null; ) Mu(J);
    }
    function Au(e, t) {
      var n = K;
      K |= 2;
      var r = Tu(),
        i = Eu();
      q !== e || Y !== t
        ? ((nu = null), (tu = Ie() + 500), Su(e, t))
        : (Vl = rt(e, t));
      a: do
        try {
          if (X !== 0 && J !== null) {
            t = J;
            var o = zl;
            b: switch (X) {
              case 1:
                ((X = 0), (zl = null), Pu(e, t, o, 1));
                break;
              case 2:
              case 9:
                if (ka(o)) {
                  ((X = 0), (zl = null), Nu(t));
                  break;
                }
                ((t = function () {
                  ((X !== 2 && X !== 9) || q !== e || (X = 7), rd(e));
                }),
                  o.then(t, t));
                break a;
              case 3:
                X = 7;
                break a;
              case 4:
                X = 5;
                break a;
              case 7:
                ka(o)
                  ? ((X = 0), (zl = null), Nu(t))
                  : ((X = 0), (zl = null), Pu(e, t, o, 7));
                break;
              case 5:
                var s = null;
                switch (J.tag) {
                  case 26:
                    s = J.memoizedState;
                  case 5:
                  case 27:
                    var c = J;
                    if (s ? Wf(s) : c.stateNode.complete) {
                      ((X = 0), (zl = null));
                      var l = c.sibling;
                      if (l !== null) J = l;
                      else {
                        var u = c.return;
                        u === null ? (J = null) : ((J = u), Fu(u));
                      }
                      break b;
                    }
                }
                ((X = 0), (zl = null), Pu(e, t, o, 5));
                break;
              case 6:
                ((X = 0), (zl = null), Pu(e, t, o, 6));
                break;
              case 8:
                (xu(), (Wl = 6));
                break a;
              default:
                throw Error(a(462));
            }
          }
          ju();
          break;
        } catch (t) {
          Cu(e, t);
        }
      while (1);
      return (
        (Zi = Xi = null),
        (w.H = r),
        (w.A = i),
        (K = n),
        J === null ? ((q = null), (Y = 0), oi(), Wl) : 0
      );
    }
    function ju() {
      for (; J !== null && !Pe(); ) Mu(J);
    }
    function Mu(e) {
      var t = Nc(e.alternate, e, Ul);
      ((e.memoizedProps = e.pendingProps), t === null ? Fu(e) : (J = t));
    }
    function Nu(e) {
      var t = e,
        n = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = vc(n, t, t.pendingProps, t.type, void 0, Y);
          break;
        case 11:
          t = vc(n, t, t.pendingProps, t.type.render, t.ref, Y);
          break;
        case 5:
          jo(t);
        default:
          (Vc(n, t), (t = J = gi(t, Ul)), (t = Nc(n, t, Ul)));
      }
      ((e.memoizedProps = e.pendingProps), t === null ? Fu(e) : (J = t));
    }
    function Pu(e, t, n, r) {
      ((Zi = Xi = null), jo(t), (Fa = null), (Ia = 0));
      var i = t.return;
      try {
        if (rc(e, i, t, n, Y)) {
          ((Wl = 1), Qs(e, Ci(n, e.current)), (J = null));
          return;
        }
      } catch (t) {
        if (i !== null) throw ((J = i), t);
        ((Wl = 1), Qs(e, Ci(n, e.current)), (J = null));
        return;
      }
      t.flags & 32768
        ? (F || r === 1
            ? (e = !0)
            : Vl || Y & 536870912
              ? (e = !1)
              : ((Bl = e = !0),
                (r === 2 || r === 9 || r === 3 || r === 6) &&
                  ((r = oo.current),
                  r !== null && r.tag === 13 && (r.flags |= 16384))),
          Iu(t, e))
        : Fu(t);
    }
    function Fu(e) {
      var t = e;
      do {
        if (t.flags & 32768) {
          Iu(t, Bl);
          return;
        }
        e = t.return;
        var n = zc(t.alternate, t, Ul);
        if (n !== null) {
          J = n;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          J = t;
          return;
        }
        J = t = e;
      } while (t !== null);
      Wl === 0 && (Wl = 5);
    }
    function Iu(e, t) {
      do {
        var n = Bc(e.alternate, e);
        if (n !== null) {
          ((n.flags &= 32767), (J = n));
          return;
        }
        if (
          ((n = e.return),
          n !== null &&
            ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
          !t && ((e = e.sibling), e !== null))
        ) {
          J = e;
          return;
        }
        J = e = n;
      } while (e !== null);
      ((Wl = 6), (J = null));
    }
    function Lu(e, t, n, r, i, o, s, c, l) {
      e.cancelPendingCommit = null;
      do Hu();
      while (iu !== 0);
      if (K & 6) throw Error(a(327));
      if (t !== null) {
        if (t === e.current) throw Error(a(177));
        if (
          ((o = t.lanes | t.childLanes),
          (o |= ai),
          ct(e, n, o, s, c, l),
          e === q && ((J = q = null), (Y = 0)),
          (ou = t),
          (au = e),
          (su = n),
          (cu = o),
          (lu = i),
          (uu = r),
          t.subtreeFlags & 10256 || t.flags & 10256
            ? ((e.callbackNode = null),
              (e.callbackPriority = 0),
              Xu(Be, function () {
                return (Uu(), null);
              }))
            : ((e.callbackNode = null), (e.callbackPriority = 0)),
          (r = (t.flags & 13878) != 0),
          t.subtreeFlags & 13878 || r)
        ) {
          ((r = w.T), (w.T = null), (i = T.p), (T.p = 2), (s = K), (K |= 4));
          try {
            al(e, t, n);
          } finally {
            ((K = s), (T.p = i), (w.T = r));
          }
        }
        ((iu = 1), Ru(), zu(), Bu());
      }
    }
    function Ru() {
      if (iu === 1) {
        iu = 0;
        var e = au,
          t = ou,
          n = (t.flags & 13878) != 0;
        if (t.subtreeFlags & 13878 || n) {
          ((n = w.T), (w.T = null));
          var r = T.p;
          T.p = 2;
          var i = K;
          K |= 4;
          try {
            _l(t, e);
            var a = zd,
              o = Nr(e.containerInfo),
              s = a.focusedElem,
              c = a.selectionRange;
            if (
              o !== s &&
              s &&
              s.ownerDocument &&
              Mr(s.ownerDocument.documentElement, s)
            ) {
              if (c !== null && Pr(s)) {
                var l = c.start,
                  u = c.end;
                if ((u === void 0 && (u = l), `selectionStart` in s))
                  ((s.selectionStart = l),
                    (s.selectionEnd = Math.min(u, s.value.length)));
                else {
                  var d = s.ownerDocument || document,
                    f = (d && d.defaultView) || window;
                  if (f.getSelection) {
                    var p = f.getSelection(),
                      m = s.textContent.length,
                      h = Math.min(c.start, m),
                      g = c.end === void 0 ? h : Math.min(c.end, m);
                    !p.extend && h > g && ((o = g), (g = h), (h = o));
                    var _ = jr(s, h),
                      v = jr(s, g);
                    if (
                      _ &&
                      v &&
                      (p.rangeCount !== 1 ||
                        p.anchorNode !== _.node ||
                        p.anchorOffset !== _.offset ||
                        p.focusNode !== v.node ||
                        p.focusOffset !== v.offset)
                    ) {
                      var y = d.createRange();
                      (y.setStart(_.node, _.offset),
                        p.removeAllRanges(),
                        h > g
                          ? (p.addRange(y), p.extend(v.node, v.offset))
                          : (y.setEnd(v.node, v.offset), p.addRange(y)));
                    }
                  }
                }
              }
              for (d = [], p = s; (p = p.parentNode); )
                p.nodeType === 1 &&
                  d.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
              for (
                typeof s.focus == `function` && s.focus(), s = 0;
                s < d.length;
                s++
              ) {
                var b = d[s];
                ((b.element.scrollLeft = b.left),
                  (b.element.scrollTop = b.top));
              }
            }
            ((sp = !!Rd), (zd = Rd = null));
          } finally {
            ((K = i), (T.p = r), (w.T = n));
          }
        }
        ((e.current = t), (iu = 2));
      }
    }
    function zu() {
      if (iu === 2) {
        iu = 0;
        var e = au,
          t = ou,
          n = (t.flags & 8772) != 0;
        if (t.subtreeFlags & 8772 || n) {
          ((n = w.T), (w.T = null));
          var r = T.p;
          T.p = 2;
          var i = K;
          K |= 4;
          try {
            ol(e, t.alternate, t);
          } finally {
            ((K = i), (T.p = r), (w.T = n));
          }
        }
        iu = 3;
      }
    }
    function Bu() {
      if (iu === 4 || iu === 3) {
        ((iu = 0), Fe());
        var e = au,
          t = ou,
          n = su,
          r = uu;
        t.subtreeFlags & 10256 || t.flags & 10256
          ? (iu = 5)
          : ((iu = 0), (ou = au = null), Vu(e, e.pendingLanes));
        var i = e.pendingLanes;
        if (
          (i === 0 && (ru = null),
          pt(n),
          (t = t.stateNode),
          Ke && typeof Ke.onCommitFiberRoot == `function`)
        )
          try {
            Ke.onCommitFiberRoot(Ge, t, void 0, (t.current.flags & 128) == 128);
          } catch {}
        if (r !== null) {
          ((t = w.T), (i = T.p), (T.p = 2), (w.T = null));
          try {
            for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
              var s = r[o];
              a(s.value, { componentStack: s.stack });
            }
          } finally {
            ((w.T = t), (T.p = i));
          }
        }
        (su & 3 && Hu(),
          rd(e),
          (i = e.pendingLanes),
          n & 261930 && i & 42
            ? e === fu
              ? du++
              : ((du = 0), (fu = e))
            : (du = 0),
          id(0, !1));
      }
    }
    function Vu(e, t) {
      (e.pooledCacheLanes &= t) === 0 &&
        ((t = e.pooledCache), t != null && ((e.pooledCache = null), pa(t)));
    }
    function Hu() {
      return (Ru(), zu(), Bu(), Uu());
    }
    function Uu() {
      if (iu !== 5) return !1;
      var e = au,
        t = cu;
      cu = 0;
      var n = pt(su),
        r = w.T,
        i = T.p;
      try {
        ((T.p = 32 > n ? 32 : n), (w.T = null), (n = lu), (lu = null));
        var o = au,
          s = su;
        if (((iu = 0), (ou = au = null), (su = 0), K & 6)) throw Error(a(331));
        var c = K;
        if (
          ((K |= 4),
          Pl(o.current),
          El(o, o.current, s, n),
          (K = c),
          id(0, !1),
          Ke && typeof Ke.onPostCommitFiberRoot == `function`)
        )
          try {
            Ke.onPostCommitFiberRoot(Ge, o);
          } catch {}
        return !0;
      } finally {
        ((T.p = i), (w.T = r), Vu(e, t));
      }
    }
    function Wu(e, t, n) {
      ((t = Ci(n, t)),
        (t = ec(e.stateNode, t, 2)),
        (e = qa(e, t, 2)),
        e !== null && (st(e, 2), rd(e)));
    }
    function Z(e, t, n) {
      if (e.tag === 3) Wu(e, e, n);
      else
        for (; t !== null; ) {
          if (t.tag === 3) {
            Wu(t, e, n);
            break;
          } else if (t.tag === 1) {
            var r = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == `function` ||
              (typeof r.componentDidCatch == `function` &&
                (ru === null || !ru.has(r)))
            ) {
              ((e = Ci(n, e)),
                (n = tc(2)),
                (r = qa(t, n, 2)),
                r !== null && (nc(n, r, t, e), st(r, 2), rd(r)));
              break;
            }
          }
          t = t.return;
        }
    }
    function Gu(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new Rl();
        var i = new Set();
        r.set(t, i);
      } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
      i.has(n) ||
        ((Hl = !0), i.add(n), (e = Ku.bind(null, e, t, n)), t.then(e, e));
    }
    function Ku(e, t, n) {
      var r = e.pingCache;
      (r !== null && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        q === e &&
          (Y & n) === n &&
          (Wl === 4 || (Wl === 3 && (Y & 62914560) === Y && 300 > Ie() - $l)
            ? !(K & 2) && Su(e, 0)
            : (ql |= n),
          Yl === Y && (Yl = 0)),
        rd(e));
    }
    function qu(e, t) {
      (t === 0 && (t = at()), (e = ci(e, t)), e !== null && (st(e, t), rd(e)));
    }
    function Ju(e) {
      var t = e.memoizedState,
        n = 0;
      (t !== null && (n = t.retryLane), qu(e, n));
    }
    function Yu(e, t) {
      var n = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var r = e.stateNode,
            i = e.memoizedState;
          i !== null && (n = i.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        case 22:
          r = e.stateNode._retryCache;
          break;
        default:
          throw Error(a(314));
      }
      (r !== null && r.delete(t), qu(e, n));
    }
    function Xu(e, t) {
      return Me(e, t);
    }
    var Zu = null,
      Qu = null,
      $u = !1,
      ed = !1,
      td = !1,
      nd = 0;
    function rd(e) {
      (e !== Qu &&
        e.next === null &&
        (Qu === null ? (Zu = Qu = e) : (Qu = Qu.next = e)),
        (ed = !0),
        $u || (($u = !0), ud()));
    }
    function id(e, t) {
      if (!td && ed) {
        td = !0;
        do
          for (var n = !1, r = Zu; r !== null; ) {
            if (!t)
              if (e !== 0) {
                var i = r.pendingLanes;
                if (i === 0) var a = 0;
                else {
                  var o = r.suspendedLanes,
                    s = r.pingedLanes;
                  ((a = (1 << (31 - Je(42 | e) + 1)) - 1),
                    (a &= i & ~(o & ~s)),
                    (a = a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0));
                }
                a !== 0 && ((n = !0), ld(r, a));
              } else
                ((a = Y),
                  (a = nt(
                    r,
                    r === q ? a : 0,
                    r.cancelPendingCommit !== null || r.timeoutHandle !== -1,
                  )),
                  !(a & 3) || rt(r, a) || ((n = !0), ld(r, a)));
            r = r.next;
          }
        while (n);
        td = !1;
      }
    }
    function ad() {
      od();
    }
    function od() {
      ed = $u = !1;
      var e = 0;
      nd !== 0 && Gd() && (e = nd);
      for (var t = Ie(), n = null, r = Zu; r !== null; ) {
        var i = r.next,
          a = sd(r, t);
        (a === 0
          ? ((r.next = null),
            n === null ? (Zu = i) : (n.next = i),
            i === null && (Qu = n))
          : ((n = r), (e !== 0 || a & 3) && (ed = !0)),
          (r = i));
      }
      ((iu !== 0 && iu !== 5) || id(e, !1), nd !== 0 && (nd = 0));
    }
    function sd(e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          i = e.expirationTimes,
          a = e.pendingLanes & -62914561;
        0 < a;
      ) {
        var o = 31 - Je(a),
          s = 1 << o,
          c = i[o];
        (c === -1
          ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = it(s, t))
          : c <= t && (e.expiredLanes |= s),
          (a &= ~s));
      }
      if (
        ((t = q),
        (n = Y),
        (n = nt(
          e,
          e === t ? n : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
        )),
        (r = e.callbackNode),
        n === 0 ||
          (e === t && (X === 2 || X === 9)) ||
          e.cancelPendingCommit !== null)
      )
        return (
          r !== null && r !== null && Ne(r),
          (e.callbackNode = null),
          (e.callbackPriority = 0)
        );
      if (!(n & 3) || rt(e, n)) {
        if (((t = n & -n), t === e.callbackPriority)) return t;
        switch ((r !== null && Ne(r), pt(n))) {
          case 2:
          case 8:
            n = ze;
            break;
          case 32:
            n = Be;
            break;
          case 268435456:
            n = He;
            break;
          default:
            n = Be;
        }
        return (
          (r = cd.bind(null, e)),
          (n = Me(n, r)),
          (e.callbackPriority = t),
          (e.callbackNode = n),
          t
        );
      }
      return (
        r !== null && r !== null && Ne(r),
        (e.callbackPriority = 2),
        (e.callbackNode = null),
        2
      );
    }
    function cd(e, t) {
      if (iu !== 0 && iu !== 5)
        return ((e.callbackNode = null), (e.callbackPriority = 0), null);
      var n = e.callbackNode;
      if (Hu() && e.callbackNode !== n) return null;
      var r = Y;
      return (
        (r = nt(
          e,
          e === q ? r : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
        )),
        r === 0
          ? null
          : (gu(e, r, t),
            sd(e, Ie()),
            e.callbackNode != null && e.callbackNode === n
              ? cd.bind(null, e)
              : null)
      );
    }
    function ld(e, t) {
      if (Hu()) return null;
      gu(e, t, !0);
    }
    function ud() {
      Yd(function () {
        K & 6 ? Me(Re, ad) : od();
      });
    }
    function dd() {
      if (nd === 0) {
        var e = ga;
        (e === 0 && ((e = Qe), (Qe <<= 1), !(Qe & 261888) && (Qe = 256)),
          (nd = e));
      }
      return nd;
    }
    function fd(e) {
      return e == null || typeof e == `symbol` || typeof e == `boolean`
        ? null
        : typeof e == `function`
          ? e
          : cn(`` + e);
    }
    function pd(e, t) {
      var n = t.ownerDocument.createElement(`input`);
      return (
        (n.name = t.name),
        (n.value = t.value),
        e.id && n.setAttribute(`form`, e.id),
        t.parentNode.insertBefore(n, t),
        (e = new FormData(e)),
        n.parentNode.removeChild(n),
        e
      );
    }
    function md(e, t, n, r, i) {
      if (t === `submit` && n && n.stateNode === i) {
        var a = fd((i[vt] || null).action),
          o = r.submitter;
        o &&
          ((t = (t = o[vt] || null)
            ? fd(t.formAction)
            : o.getAttribute(`formAction`)),
          t !== null && ((a = t), (o = null)));
        var s = new kn(`action`, `action`, null, r, i);
        e.push({
          event: s,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (r.defaultPrevented) {
                  if (nd !== 0) {
                    var e = o ? pd(i, o) : new FormData(i);
                    Ds(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      null,
                      e,
                    );
                  }
                } else
                  typeof a == `function` &&
                    (s.preventDefault(),
                    (e = o ? pd(i, o) : new FormData(i)),
                    Ds(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      a,
                      e,
                    ));
              },
              currentTarget: i,
            },
          ],
        });
      }
    }
    for (var hd = 0; hd < ei.length; hd++) {
      var gd = ei[hd];
      ti(gd.toLowerCase(), `on` + (gd[0].toUpperCase() + gd.slice(1)));
    }
    (ti(Kr, `onAnimationEnd`),
      ti(qr, `onAnimationIteration`),
      ti(Jr, `onAnimationStart`),
      ti(`dblclick`, `onDoubleClick`),
      ti(`focusin`, `onFocus`),
      ti(`focusout`, `onBlur`),
      ti(Yr, `onTransitionRun`),
      ti(Xr, `onTransitionStart`),
      ti(Zr, `onTransitionCancel`),
      ti(Qr, `onTransitionEnd`),
      Pt(`onMouseEnter`, [`mouseout`, `mouseover`]),
      Pt(`onMouseLeave`, [`mouseout`, `mouseover`]),
      Pt(`onPointerEnter`, [`pointerout`, `pointerover`]),
      Pt(`onPointerLeave`, [`pointerout`, `pointerover`]),
      Nt(
        `onChange`,
        `change click focusin focusout input keydown keyup selectionchange`.split(
          ` `,
        ),
      ),
      Nt(
        `onSelect`,
        `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(
          ` `,
        ),
      ),
      Nt(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      Nt(
        `onCompositionEnd`,
        `compositionend focusout keydown keypress keyup mousedown`.split(` `),
      ),
      Nt(
        `onCompositionStart`,
        `compositionstart focusout keydown keypress keyup mousedown`.split(` `),
      ),
      Nt(
        `onCompositionUpdate`,
        `compositionupdate focusout keydown keypress keyup mousedown`.split(
          ` `,
        ),
      ));
    var _d =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `,
        ),
      vd = new Set(
        `beforetoggle cancel close invalid load scroll scrollend toggle`
          .split(` `)
          .concat(_d),
      );
    function yd(e, t) {
      t = (t & 4) != 0;
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event;
        r = r.listeners;
        a: {
          var a = void 0;
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var s = r[o],
                c = s.instance,
                l = s.currentTarget;
              if (((s = s.listener), c !== a && i.isPropagationStopped()))
                break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                ni(e);
              }
              ((i.currentTarget = null), (a = c));
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((s = r[o]),
                (c = s.instance),
                (l = s.currentTarget),
                (s = s.listener),
                c !== a && i.isPropagationStopped())
              )
                break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                ni(e);
              }
              ((i.currentTarget = null), (a = c));
            }
        }
      }
    }
    function Q(e, t) {
      var n = t[bt];
      n === void 0 && (n = t[bt] = new Set());
      var r = e + `__bubble`;
      n.has(r) || (Cd(t, e, 2, !1), n.add(r));
    }
    function bd(e, t, n) {
      var r = 0;
      (t && (r |= 4), Cd(n, e, r, t));
    }
    var xd = `_reactListening` + Math.random().toString(36).slice(2);
    function Sd(e) {
      if (!e[xd]) {
        ((e[xd] = !0),
          jt.forEach(function (t) {
            t !== `selectionchange` &&
              (vd.has(t) || bd(t, !1, e), bd(t, !0, e));
          }));
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[xd] || ((t[xd] = !0), bd(`selectionchange`, !1, t));
      }
    }
    function Cd(e, t, n, r) {
      switch (mp(t)) {
        case 2:
          var i = cp;
          break;
        case 8:
          i = lp;
          break;
        default:
          i = up;
      }
      ((n = i.bind(null, t, n, e)),
        (i = void 0),
        !vn ||
          (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) ||
          (i = !0),
        r
          ? i === void 0
            ? e.addEventListener(t, n, !0)
            : e.addEventListener(t, n, { capture: !0, passive: i })
          : i === void 0
            ? e.addEventListener(t, n, !1)
            : e.addEventListener(t, n, { passive: i }));
    }
    function wd(e, t, n, r, i) {
      var a = r;
      if (!(t & 1) && !(t & 2) && r !== null)
        a: for (;;) {
          if (r === null) return;
          var o = r.tag;
          if (o === 3 || o === 4) {
            var s = r.stateNode.containerInfo;
            if (s === i) break;
            if (o === 4)
              for (o = r.return; o !== null; ) {
                var l = o.tag;
                if ((l === 3 || l === 4) && o.stateNode.containerInfo === i)
                  return;
                o = o.return;
              }
            for (; s !== null; ) {
              if (((o = Et(s)), o === null)) return;
              if (((l = o.tag), l === 5 || l === 6 || l === 26 || l === 27)) {
                r = a = o;
                continue a;
              }
              s = s.parentNode;
            }
          }
          r = r.return;
        }
      hn(function () {
        var r = a,
          i = dn(n),
          o = [];
        a: {
          var s = $r.get(e);
          if (s !== void 0) {
            var l = kn,
              u = e;
            switch (e) {
              case `keypress`:
                if (wn(n) === 0) break a;
              case `keydown`:
              case `keyup`:
                l = M;
                break;
              case `focusin`:
                ((u = `focus`), (l = Rn));
                break;
              case `focusout`:
                ((u = `blur`), (l = Rn));
                break;
              case `beforeblur`:
              case `afterblur`:
                l = Rn;
                break;
              case `click`:
                if (n.button === 2) break a;
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                l = In;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                l = Ln;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                l = qn;
                break;
              case Kr:
              case qr:
              case Jr:
                l = zn;
                break;
              case Qr:
                l = Jn;
                break;
              case `scroll`:
              case `scrollend`:
                l = jn;
                break;
              case `wheel`:
                l = Yn;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                l = Bn;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                l = Kn;
                break;
              case `toggle`:
              case `beforetoggle`:
                l = Xn;
            }
            var d = (t & 4) != 0,
              f = !d && (e === `scroll` || e === `scrollend`),
              p = d ? (s === null ? null : s + `Capture`) : s;
            d = [];
            for (var m = r, h; m !== null; ) {
              var g = m;
              if (
                ((h = g.stateNode),
                (g = g.tag),
                (g !== 5 && g !== 26 && g !== 27) ||
                  h === null ||
                  p === null ||
                  ((g = gn(m, p)), g != null && d.push(Td(m, g, h))),
                f)
              )
                break;
              m = m.return;
            }
            0 < d.length &&
              ((s = new l(s, u, null, n, i)),
              o.push({ event: s, listeners: d }));
          }
        }
        if (!(t & 7)) {
          a: {
            if (
              ((s = e === `mouseover` || e === `pointerover`),
              (l = e === `mouseout` || e === `pointerout`),
              s &&
                n !== un &&
                (u = n.relatedTarget || n.fromElement) &&
                (Et(u) || u[yt]))
            )
              break a;
            if (
              (l || s) &&
              ((s =
                i.window === i
                  ? i
                  : (s = i.ownerDocument)
                    ? s.defaultView || s.parentWindow
                    : window),
              l
                ? ((u = n.relatedTarget || n.toElement),
                  (l = r),
                  (u = u ? Et(u) : null),
                  u !== null &&
                    ((f = c(u)),
                    (d = u.tag),
                    u !== f || (d !== 5 && d !== 27 && d !== 6)) &&
                    (u = null))
                : ((l = null), (u = r)),
              l !== u)
            ) {
              if (
                ((d = In),
                (g = `onMouseLeave`),
                (p = `onMouseEnter`),
                (m = `mouse`),
                (e === `pointerout` || e === `pointerover`) &&
                  ((d = Kn),
                  (g = `onPointerLeave`),
                  (p = `onPointerEnter`),
                  (m = `pointer`)),
                (f = l == null ? s : Ot(l)),
                (h = u == null ? s : Ot(u)),
                (s = new d(g, m + `leave`, l, n, i)),
                (s.target = f),
                (s.relatedTarget = h),
                (g = null),
                Et(i) === r &&
                  ((d = new d(p, m + `enter`, u, n, i)),
                  (d.target = h),
                  (d.relatedTarget = f),
                  (g = d)),
                (f = g),
                l && u)
              )
                b: {
                  for (d = Dd, p = l, m = u, h = 0, g = p; g; g = d(g)) h++;
                  g = 0;
                  for (var _ = m; _; _ = d(_)) g++;
                  for (; 0 < h - g; ) ((p = d(p)), h--);
                  for (; 0 < g - h; ) ((m = d(m)), g--);
                  for (; h--; ) {
                    if (p === m || (m !== null && p === m.alternate)) {
                      d = p;
                      break b;
                    }
                    ((p = d(p)), (m = d(m)));
                  }
                  d = null;
                }
              else d = null;
              (l !== null && Od(o, s, l, d, !1),
                u !== null && f !== null && Od(o, f, u, d, !0));
            }
          }
          a: {
            if (
              ((s = r ? Ot(r) : window),
              (l = s.nodeName && s.nodeName.toLowerCase()),
              l === `select` || (l === `input` && s.type === `file`))
            )
              var v = gr;
            else if (ur(s))
              if (_r) v = Er;
              else {
                v = wr;
                var y = Cr;
              }
            else
              ((l = s.nodeName),
                !l ||
                l.toLowerCase() !== `input` ||
                (s.type !== `checkbox` && s.type !== `radio`)
                  ? r && an(r.elementType) && (v = gr)
                  : (v = Tr));
            if ((v &&= v(e, r))) {
              dr(o, v, n, i);
              break a;
            }
            (y && y(e, s, r),
              e === `focusout` &&
                r &&
                s.type === `number` &&
                r.memoizedProps.value != null &&
                Qt(s, `number`, s.value));
          }
          switch (((y = r ? Ot(r) : window), e)) {
            case `focusin`:
              (ur(y) || y.contentEditable === `true`) &&
                ((Ir = y), (Lr = r), (Rr = null));
              break;
            case `focusout`:
              Rr = Lr = Ir = null;
              break;
            case `mousedown`:
              zr = !0;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              ((zr = !1), Br(o, n, i));
              break;
            case `selectionchange`:
              if (Fr) break;
            case `keydown`:
            case `keyup`:
              Br(o, n, i);
          }
          var b;
          if (Qn)
            b: {
              switch (e) {
                case `compositionstart`:
                  var x = `onCompositionStart`;
                  break b;
                case `compositionend`:
                  x = `onCompositionEnd`;
                  break b;
                case `compositionupdate`:
                  x = `onCompositionUpdate`;
                  break b;
              }
              x = void 0;
            }
          else
            or
              ? ir(e, n) && (x = `onCompositionEnd`)
              : e === `keydown` &&
                n.keyCode === 229 &&
                (x = `onCompositionStart`);
          (x &&
            (tr &&
              n.locale !== `ko` &&
              (or || x !== `onCompositionStart`
                ? x === `onCompositionEnd` && or && (b = Cn())
                : ((bn = i),
                  (xn = `value` in bn ? bn.value : bn.textContent),
                  (or = !0))),
            (y = Ed(r, x)),
            0 < y.length &&
              ((x = new Vn(x, e, null, n, i)),
              o.push({ event: x, listeners: y }),
              b ? (x.data = b) : ((b = ar(n)), b !== null && (x.data = b)))),
            (b = er ? sr(e, n) : cr(e, n)) &&
              ((x = Ed(r, `onBeforeInput`)),
              0 < x.length &&
                ((y = new Vn(`onBeforeInput`, `beforeinput`, null, n, i)),
                o.push({ event: y, listeners: x }),
                (y.data = b))),
            md(o, e, r, n, i));
        }
        yd(o, t);
      });
    }
    function Td(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function Ed(e, t) {
      for (var n = t + `Capture`, r = []; e !== null; ) {
        var i = e,
          a = i.stateNode;
        if (
          ((i = i.tag),
          (i !== 5 && i !== 26 && i !== 27) ||
            a === null ||
            ((i = gn(e, n)),
            i != null && r.unshift(Td(e, i, a)),
            (i = gn(e, t)),
            i != null && r.push(Td(e, i, a))),
          e.tag === 3)
        )
          return r;
        e = e.return;
      }
      return [];
    }
    function Dd(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Od(e, t, n, r, i) {
      for (var a = t._reactName, o = []; n !== null && n !== r; ) {
        var s = n,
          c = s.alternate,
          l = s.stateNode;
        if (((s = s.tag), c !== null && c === r)) break;
        ((s !== 5 && s !== 26 && s !== 27) ||
          l === null ||
          ((c = l),
          i
            ? ((l = gn(n, a)), l != null && o.unshift(Td(n, l, c)))
            : i || ((l = gn(n, a)), l != null && o.push(Td(n, l, c)))),
          (n = n.return));
      }
      o.length !== 0 && e.push({ event: t, listeners: o });
    }
    var kd = /\r\n?/g,
      Ad = /\u0000|\uFFFD/g;
    function jd(e) {
      return (typeof e == `string` ? e : `` + e)
        .replace(
          kd,
          `
`,
        )
        .replace(Ad, ``);
    }
    function Md(e, t) {
      return ((t = jd(t)), jd(e) === t);
    }
    function $(e, t, n, r, i, o) {
      switch (n) {
        case `children`:
          typeof r == `string`
            ? t === `body` || (t === `textarea` && r === ``) || nn(e, r)
            : (typeof r == `number` || typeof r == `bigint`) &&
              t !== `body` &&
              nn(e, `` + r);
          break;
        case `className`:
          Bt(e, `class`, r);
          break;
        case `tabIndex`:
          Bt(e, `tabindex`, r);
          break;
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
          Bt(e, n, r);
          break;
        case `style`:
          k(e, r, o);
          break;
        case `data`:
          if (t !== `object`) {
            Bt(e, `data`, r);
            break;
          }
        case `src`:
        case `href`:
          if (r === `` && (t !== `a` || n !== `href`)) {
            e.removeAttribute(n);
            break;
          }
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `symbol` ||
            typeof r == `boolean`
          ) {
            e.removeAttribute(n);
            break;
          }
          ((r = cn(`` + r)), e.setAttribute(n, r));
          break;
        case `action`:
        case `formAction`:
          if (typeof r == `function`) {
            e.setAttribute(
              n,
              `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`,
            );
            break;
          } else
            typeof o == `function` &&
              (n === `formAction`
                ? (t !== `input` && $(e, t, `name`, i.name, i, null),
                  $(e, t, `formEncType`, i.formEncType, i, null),
                  $(e, t, `formMethod`, i.formMethod, i, null),
                  $(e, t, `formTarget`, i.formTarget, i, null))
                : ($(e, t, `encType`, i.encType, i, null),
                  $(e, t, `method`, i.method, i, null),
                  $(e, t, `target`, i.target, i, null)));
          if (r == null || typeof r == `symbol` || typeof r == `boolean`) {
            e.removeAttribute(n);
            break;
          }
          ((r = cn(`` + r)), e.setAttribute(n, r));
          break;
        case `onClick`:
          r != null && (e.onclick = ln);
          break;
        case `onScroll`:
          r != null && Q(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && Q(`scrollend`, e);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(a(61));
            if (((n = r.__html), n != null)) {
              if (i.children != null) throw Error(a(60));
              e.innerHTML = n;
            }
          }
          break;
        case `multiple`:
          e.multiple = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `muted`:
          e.muted = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `defaultValue`:
        case `defaultChecked`:
        case `innerHTML`:
        case `ref`:
          break;
        case `autoFocus`:
          break;
        case `xlinkHref`:
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `boolean` ||
            typeof r == `symbol`
          ) {
            e.removeAttribute(`xlink:href`);
            break;
          }
          ((n = cn(`` + r)),
            e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n));
          break;
        case `contentEditable`:
        case `spellCheck`:
        case `draggable`:
        case `value`:
        case `autoReverse`:
        case `externalResourcesRequired`:
        case `focusable`:
        case `preserveAlpha`:
          r != null && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, `` + r)
            : e.removeAttribute(n);
          break;
        case `inert`:
        case `allowFullScreen`:
        case `async`:
        case `autoPlay`:
        case `controls`:
        case `default`:
        case `defer`:
        case `disabled`:
        case `disablePictureInPicture`:
        case `disableRemotePlayback`:
        case `formNoValidate`:
        case `hidden`:
        case `loop`:
        case `noModule`:
        case `noValidate`:
        case `open`:
        case `playsInline`:
        case `readOnly`:
        case `required`:
        case `reversed`:
        case `scoped`:
        case `seamless`:
        case `itemScope`:
          r && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, ``)
            : e.removeAttribute(n);
          break;
        case `capture`:
        case `download`:
          !0 === r
            ? e.setAttribute(n, ``)
            : !1 !== r &&
                r != null &&
                typeof r != `function` &&
                typeof r != `symbol`
              ? e.setAttribute(n, r)
              : e.removeAttribute(n);
          break;
        case `cols`:
        case `rows`:
        case `size`:
        case `span`:
          r != null &&
          typeof r != `function` &&
          typeof r != `symbol` &&
          !isNaN(r) &&
          1 <= r
            ? e.setAttribute(n, r)
            : e.removeAttribute(n);
          break;
        case `rowSpan`:
        case `start`:
          r == null ||
          typeof r == `function` ||
          typeof r == `symbol` ||
          isNaN(r)
            ? e.removeAttribute(n)
            : e.setAttribute(n, r);
          break;
        case `popover`:
          (Q(`beforetoggle`, e), Q(`toggle`, e), zt(e, `popover`, r));
          break;
        case `xlinkActuate`:
          Vt(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
          break;
        case `xlinkArcrole`:
          Vt(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
          break;
        case `xlinkRole`:
          Vt(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
          break;
        case `xlinkShow`:
          Vt(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
          break;
        case `xlinkTitle`:
          Vt(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
          break;
        case `xlinkType`:
          Vt(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
          break;
        case `xmlBase`:
          Vt(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
          break;
        case `xmlLang`:
          Vt(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
          break;
        case `xmlSpace`:
          Vt(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
          break;
        case `is`:
          zt(e, `is`, r);
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          (!(2 < n.length) ||
            (n[0] !== `o` && n[0] !== `O`) ||
            (n[1] !== `n` && n[1] !== `N`)) &&
            ((n = on.get(n) || n), zt(e, n, r));
      }
    }
    function Nd(e, t, n, r, i, o) {
      switch (n) {
        case `style`:
          k(e, r, o);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(a(61));
            if (((n = r.__html), n != null)) {
              if (i.children != null) throw Error(a(60));
              e.innerHTML = n;
            }
          }
          break;
        case `children`:
          typeof r == `string`
            ? nn(e, r)
            : (typeof r == `number` || typeof r == `bigint`) && nn(e, `` + r);
          break;
        case `onScroll`:
          r != null && Q(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && Q(`scrollend`, e);
          break;
        case `onClick`:
          r != null && (e.onclick = ln);
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `innerHTML`:
        case `ref`:
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          if (!Mt.hasOwnProperty(n))
            a: {
              if (
                n[0] === `o` &&
                n[1] === `n` &&
                ((i = n.endsWith(`Capture`)),
                (t = n.slice(2, i ? n.length - 7 : void 0)),
                (o = e[vt] || null),
                (o = o == null ? null : o[n]),
                typeof o == `function` && e.removeEventListener(t, o, i),
                typeof r == `function`)
              ) {
                (typeof o != `function` &&
                  o !== null &&
                  (n in e
                    ? (e[n] = null)
                    : e.hasAttribute(n) && e.removeAttribute(n)),
                  e.addEventListener(t, r, i));
                break a;
              }
              n in e
                ? (e[n] = r)
                : !0 === r
                  ? e.setAttribute(n, ``)
                  : zt(e, n, r);
            }
      }
    }
    function Pd(e, t, n) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `img`:
          (Q(`error`, e), Q(`load`, e));
          var r = !1,
            i = !1,
            o;
          for (o in n)
            if (n.hasOwnProperty(o)) {
              var s = n[o];
              if (s != null)
                switch (o) {
                  case `src`:
                    r = !0;
                    break;
                  case `srcSet`:
                    i = !0;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    throw Error(a(137, t));
                  default:
                    $(e, t, o, s, n, null);
                }
            }
          (i && $(e, t, `srcSet`, n.srcSet, n, null),
            r && $(e, t, `src`, n.src, n, null));
          return;
        case `input`:
          Q(`invalid`, e);
          var c = (o = s = i = null),
            l = null,
            u = null;
          for (r in n)
            if (n.hasOwnProperty(r)) {
              var d = n[r];
              if (d != null)
                switch (r) {
                  case `name`:
                    i = d;
                    break;
                  case `type`:
                    s = d;
                    break;
                  case `checked`:
                    l = d;
                    break;
                  case `defaultChecked`:
                    u = d;
                    break;
                  case `value`:
                    o = d;
                    break;
                  case `defaultValue`:
                    c = d;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    if (d != null) throw Error(a(137, t));
                    break;
                  default:
                    $(e, t, r, d, n, null);
                }
            }
          Zt(e, o, c, l, u, s, i, !1);
          return;
        case `select`:
          for (i in (Q(`invalid`, e), (r = s = o = null), n))
            if (n.hasOwnProperty(i) && ((c = n[i]), c != null))
              switch (i) {
                case `value`:
                  o = c;
                  break;
                case `defaultValue`:
                  s = c;
                  break;
                case `multiple`:
                  r = c;
                default:
                  $(e, t, i, c, n, null);
              }
          ((t = o),
            (n = s),
            (e.multiple = !!r),
            t == null ? n != null && $t(e, !!r, n, !0) : $t(e, !!r, t, !1));
          return;
        case `textarea`:
          for (s in (Q(`invalid`, e), (o = i = r = null), n))
            if (n.hasOwnProperty(s) && ((c = n[s]), c != null))
              switch (s) {
                case `value`:
                  r = c;
                  break;
                case `defaultValue`:
                  i = c;
                  break;
                case `children`:
                  o = c;
                  break;
                case `dangerouslySetInnerHTML`:
                  if (c != null) throw Error(a(91));
                  break;
                default:
                  $(e, t, s, c, n, null);
              }
          tn(e, r, i, o);
          return;
        case `option`:
          for (l in n)
            if (n.hasOwnProperty(l) && ((r = n[l]), r != null))
              switch (l) {
                case `selected`:
                  e.selected =
                    r && typeof r != `function` && typeof r != `symbol`;
                  break;
                default:
                  $(e, t, l, r, n, null);
              }
          return;
        case `dialog`:
          (Q(`beforetoggle`, e), Q(`toggle`, e), Q(`cancel`, e), Q(`close`, e));
          break;
        case `iframe`:
        case `object`:
          Q(`load`, e);
          break;
        case `video`:
        case `audio`:
          for (r = 0; r < _d.length; r++) Q(_d[r], e);
          break;
        case `image`:
          (Q(`error`, e), Q(`load`, e));
          break;
        case `details`:
          Q(`toggle`, e);
          break;
        case `embed`:
        case `source`:
        case `link`:
          (Q(`error`, e), Q(`load`, e));
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (u in n)
            if (n.hasOwnProperty(u) && ((r = n[u]), r != null))
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  throw Error(a(137, t));
                default:
                  $(e, t, u, r, n, null);
              }
          return;
        default:
          if (an(t)) {
            for (d in n)
              n.hasOwnProperty(d) &&
                ((r = n[d]), r !== void 0 && Nd(e, t, d, r, n, void 0));
            return;
          }
      }
      for (c in n)
        n.hasOwnProperty(c) &&
          ((r = n[c]), r != null && $(e, t, c, r, n, null));
    }
    function Fd(e, t, n, r) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `input`:
          var i = null,
            o = null,
            s = null,
            c = null,
            l = null,
            u = null,
            d = null;
          for (m in n) {
            var f = n[m];
            if (n.hasOwnProperty(m) && f != null)
              switch (m) {
                case `checked`:
                  break;
                case `value`:
                  break;
                case `defaultValue`:
                  l = f;
                default:
                  r.hasOwnProperty(m) || $(e, t, m, null, r, f);
              }
          }
          for (var p in r) {
            var m = r[p];
            if (((f = n[p]), r.hasOwnProperty(p) && (m != null || f != null)))
              switch (p) {
                case `type`:
                  o = m;
                  break;
                case `name`:
                  i = m;
                  break;
                case `checked`:
                  u = m;
                  break;
                case `defaultChecked`:
                  d = m;
                  break;
                case `value`:
                  s = m;
                  break;
                case `defaultValue`:
                  c = m;
                  break;
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (m != null) throw Error(a(137, t));
                  break;
                default:
                  m !== f && $(e, t, p, m, r, f);
              }
          }
          Xt(e, s, c, l, u, d, o, i);
          return;
        case `select`:
          for (o in ((m = s = c = p = null), n))
            if (((l = n[o]), n.hasOwnProperty(o) && l != null))
              switch (o) {
                case `value`:
                  break;
                case `multiple`:
                  m = l;
                default:
                  r.hasOwnProperty(o) || $(e, t, o, null, r, l);
              }
          for (i in r)
            if (
              ((o = r[i]),
              (l = n[i]),
              r.hasOwnProperty(i) && (o != null || l != null))
            )
              switch (i) {
                case `value`:
                  p = o;
                  break;
                case `defaultValue`:
                  c = o;
                  break;
                case `multiple`:
                  s = o;
                default:
                  o !== l && $(e, t, i, o, r, l);
              }
          ((t = c),
            (n = s),
            (r = m),
            p == null
              ? !!r != !!n &&
                (t == null ? $t(e, !!n, n ? [] : ``, !1) : $t(e, !!n, t, !0))
              : $t(e, !!n, p, !1));
          return;
        case `textarea`:
          for (c in ((m = p = null), n))
            if (
              ((i = n[c]),
              n.hasOwnProperty(c) && i != null && !r.hasOwnProperty(c))
            )
              switch (c) {
                case `value`:
                  break;
                case `children`:
                  break;
                default:
                  $(e, t, c, null, r, i);
              }
          for (s in r)
            if (
              ((i = r[s]),
              (o = n[s]),
              r.hasOwnProperty(s) && (i != null || o != null))
            )
              switch (s) {
                case `value`:
                  p = i;
                  break;
                case `defaultValue`:
                  m = i;
                  break;
                case `children`:
                  break;
                case `dangerouslySetInnerHTML`:
                  if (i != null) throw Error(a(91));
                  break;
                default:
                  i !== o && $(e, t, s, i, r, o);
              }
          en(e, p, m);
          return;
        case `option`:
          for (var h in n)
            if (
              ((p = n[h]),
              n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h))
            )
              switch (h) {
                case `selected`:
                  e.selected = !1;
                  break;
                default:
                  $(e, t, h, null, r, p);
              }
          for (l in r)
            if (
              ((p = r[l]),
              (m = n[l]),
              r.hasOwnProperty(l) && p !== m && (p != null || m != null))
            )
              switch (l) {
                case `selected`:
                  e.selected =
                    p && typeof p != `function` && typeof p != `symbol`;
                  break;
                default:
                  $(e, t, l, p, r, m);
              }
          return;
        case `img`:
        case `link`:
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `embed`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `source`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (var g in n)
            ((p = n[g]),
              n.hasOwnProperty(g) &&
                p != null &&
                !r.hasOwnProperty(g) &&
                $(e, t, g, null, r, p));
          for (u in r)
            if (
              ((p = r[u]),
              (m = n[u]),
              r.hasOwnProperty(u) && p !== m && (p != null || m != null))
            )
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (p != null) throw Error(a(137, t));
                  break;
                default:
                  $(e, t, u, p, r, m);
              }
          return;
        default:
          if (an(t)) {
            for (var _ in n)
              ((p = n[_]),
                n.hasOwnProperty(_) &&
                  p !== void 0 &&
                  !r.hasOwnProperty(_) &&
                  Nd(e, t, _, void 0, r, p));
            for (d in r)
              ((p = r[d]),
                (m = n[d]),
                !r.hasOwnProperty(d) ||
                  p === m ||
                  (p === void 0 && m === void 0) ||
                  Nd(e, t, d, p, r, m));
            return;
          }
      }
      for (var v in n)
        ((p = n[v]),
          n.hasOwnProperty(v) &&
            p != null &&
            !r.hasOwnProperty(v) &&
            $(e, t, v, null, r, p));
      for (f in r)
        ((p = r[f]),
          (m = n[f]),
          !r.hasOwnProperty(f) ||
            p === m ||
            (p == null && m == null) ||
            $(e, t, f, p, r, m));
    }
    function Id(e) {
      switch (e) {
        case `css`:
        case `script`:
        case `font`:
        case `img`:
        case `image`:
        case `input`:
        case `link`:
          return !0;
        default:
          return !1;
      }
    }
    function Ld() {
      if (typeof performance.getEntriesByType == `function`) {
        for (
          var e = 0, t = 0, n = performance.getEntriesByType(`resource`), r = 0;
          r < n.length;
          r++
        ) {
          var i = n[r],
            a = i.transferSize,
            o = i.initiatorType,
            s = i.duration;
          if (a && s && Id(o)) {
            for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
              var c = n[r],
                l = c.startTime;
              if (l > s) break;
              var u = c.transferSize,
                d = c.initiatorType;
              u &&
                Id(d) &&
                ((c = c.responseEnd),
                (o += u * (c < s ? 1 : (s - l) / (c - l))));
            }
            if ((--r, (t += (8 * (a + o)) / (i.duration / 1e3)), e++, 10 < e))
              break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection &&
        ((e = navigator.connection.downlink), typeof e == `number`)
        ? e
        : 5;
    }
    var Rd = null,
      zd = null;
    function Bd(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Vd(e) {
      switch (e) {
        case `http://www.w3.org/2000/svg`:
          return 1;
        case `http://www.w3.org/1998/Math/MathML`:
          return 2;
        default:
          return 0;
      }
    }
    function Hd(e, t) {
      if (e === 0)
        switch (t) {
          case `svg`:
            return 1;
          case `math`:
            return 2;
          default:
            return 0;
        }
      return e === 1 && t === `foreignObject` ? 0 : e;
    }
    function Ud(e, t) {
      return (
        e === `textarea` ||
        e === `noscript` ||
        typeof t.children == `string` ||
        typeof t.children == `number` ||
        typeof t.children == `bigint` ||
        (typeof t.dangerouslySetInnerHTML == `object` &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var Wd = null;
    function Gd() {
      var e = window.event;
      return e && e.type === `popstate`
        ? e === Wd
          ? !1
          : ((Wd = e), !0)
        : ((Wd = null), !1);
    }
    var Kd = typeof setTimeout == `function` ? setTimeout : void 0,
      qd = typeof clearTimeout == `function` ? clearTimeout : void 0,
      Jd = typeof Promise == `function` ? Promise : void 0,
      Yd =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : Jd === void 0
            ? Kd
            : function (e) {
                return Jd.resolve(null).then(e).catch(Xd);
              };
    function Xd(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function Zd(e) {
      return e === `head`;
    }
    function Qd(e, t) {
      var n = t,
        r = 0;
      do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8))
          if (((n = i.data), n === `/$` || n === `/&`)) {
            if (r === 0) {
              (e.removeChild(i), Np(t));
              return;
            }
            r--;
          } else if (
            n === `$` ||
            n === `$?` ||
            n === `$~` ||
            n === `$!` ||
            n === `&`
          )
            r++;
          else if (n === `html`) pf(e.ownerDocument.documentElement);
          else if (n === `head`) {
            ((n = e.ownerDocument.head), pf(n));
            for (var a = n.firstChild; a; ) {
              var o = a.nextSibling,
                s = a.nodeName;
              (a[wt] ||
                s === `SCRIPT` ||
                s === `STYLE` ||
                (s === `LINK` && a.rel.toLowerCase() === `stylesheet`) ||
                n.removeChild(a),
                (a = o));
            }
          } else n === `body` && pf(e.ownerDocument.body);
        n = i;
      } while (n);
      Np(t);
    }
    function $d(e, t) {
      var n = e;
      e = 0;
      do {
        var r = n.nextSibling;
        if (
          (n.nodeType === 1
            ? t
              ? ((n._stashedDisplay = n.style.display),
                (n.style.display = `none`))
              : ((n.style.display = n._stashedDisplay || ``),
                n.getAttribute(`style`) === `` && n.removeAttribute(`style`))
            : n.nodeType === 3 &&
              (t
                ? ((n._stashedText = n.nodeValue), (n.nodeValue = ``))
                : (n.nodeValue = n._stashedText || ``)),
          r && r.nodeType === 8)
        )
          if (((n = r.data), n === `/$`)) {
            if (e === 0) break;
            e--;
          } else (n !== `$` && n !== `$?` && n !== `$~` && n !== `$!`) || e++;
        n = r;
      } while (n);
    }
    function ef(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var n = t;
        switch (((t = t.nextSibling), n.nodeName)) {
          case `HTML`:
          case `HEAD`:
          case `BODY`:
            (ef(n), Tt(n));
            continue;
          case `SCRIPT`:
          case `STYLE`:
            continue;
          case `LINK`:
            if (n.rel.toLowerCase() === `stylesheet`) continue;
        }
        e.removeChild(n);
      }
    }
    function tf(e, t, n, r) {
      for (; e.nodeType === 1; ) {
        var i = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`)) break;
        } else if (!r)
          if (t === `input` && e.type === `hidden`) {
            var a = i.name == null ? null : `` + i.name;
            if (i.type === `hidden` && e.getAttribute(`name`) === a) return e;
          } else return e;
        else if (!e[wt])
          switch (t) {
            case `meta`:
              if (!e.hasAttribute(`itemprop`)) break;
              return e;
            case `link`:
              if (
                ((a = e.getAttribute(`rel`)),
                (a === `stylesheet` && e.hasAttribute(`data-precedence`)) ||
                  a !== i.rel ||
                  e.getAttribute(`href`) !==
                    (i.href == null || i.href === `` ? null : i.href) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin) ||
                  e.getAttribute(`title`) !==
                    (i.title == null ? null : i.title))
              )
                break;
              return e;
            case `style`:
              if (e.hasAttribute(`data-precedence`)) break;
              return e;
            case `script`:
              if (
                ((a = e.getAttribute(`src`)),
                (a !== (i.src == null ? null : i.src) ||
                  e.getAttribute(`type`) !== (i.type == null ? null : i.type) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  a &&
                  e.hasAttribute(`async`) &&
                  !e.hasAttribute(`itemprop`))
              )
                break;
              return e;
            default:
              return e;
          }
        if (((e = cf(e.nextSibling)), e === null)) break;
      }
      return null;
    }
    function nf(e, t, n) {
      if (t === ``) return null;
      for (; e.nodeType !== 3; )
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !n) ||
          ((e = cf(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function rf(e, t) {
      for (; e.nodeType !== 8; )
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !t) ||
          ((e = cf(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function af(e) {
      return e.data === `$?` || e.data === `$~`;
    }
    function of(e) {
      return (
        e.data === `$!` ||
        (e.data === `$?` && e.ownerDocument.readyState !== `loading`)
      );
    }
    function sf(e, t) {
      var n = e.ownerDocument;
      if (e.data === `$~`) e._reactRetry = t;
      else if (e.data !== `$?` || n.readyState !== `loading`) t();
      else {
        var r = function () {
          (t(), n.removeEventListener(`DOMContentLoaded`, r));
        };
        (n.addEventListener(`DOMContentLoaded`, r), (e._reactRetry = r));
      }
    }
    function cf(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (
            ((t = e.data),
            t === `$` ||
              t === `$!` ||
              t === `$?` ||
              t === `$~` ||
              t === `&` ||
              t === `F!` ||
              t === `F`)
          )
            break;
          if (t === `/$` || t === `/&`) return null;
        }
      }
      return e;
    }
    var lf = null;
    function uf(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `/$` || n === `/&`) {
            if (t === 0) return cf(e.nextSibling);
            t--;
          } else
            (n !== `$` &&
              n !== `$!` &&
              n !== `$?` &&
              n !== `$~` &&
              n !== `&`) ||
              t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function df(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (
            n === `$` ||
            n === `$!` ||
            n === `$?` ||
            n === `$~` ||
            n === `&`
          ) {
            if (t === 0) return e;
            t--;
          } else (n !== `/$` && n !== `/&`) || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function ff(e, t, n) {
      switch (((t = Bd(n)), e)) {
        case `html`:
          if (((e = t.documentElement), !e)) throw Error(a(452));
          return e;
        case `head`:
          if (((e = t.head), !e)) throw Error(a(453));
          return e;
        case `body`:
          if (((e = t.body), !e)) throw Error(a(454));
          return e;
        default:
          throw Error(a(451));
      }
    }
    function pf(e) {
      for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
      Tt(e);
    }
    var mf = new Map(),
      hf = new Set();
    function gf(e) {
      return typeof e.getRootNode == `function`
        ? e.getRootNode()
        : e.nodeType === 9
          ? e
          : e.ownerDocument;
    }
    var _f = T.d;
    T.d = { f: vf, r: yf, D: Sf, C: Cf, L: wf, m: Tf, X: Df, S: Ef, M: Of };
    function vf() {
      var e = _f.f(),
        t = bu();
      return e || t;
    }
    function yf(e) {
      var t = Dt(e);
      t !== null && t.tag === 5 && t.type === `form` ? ks(t) : _f.r(e);
    }
    var bf = typeof document > `u` ? null : document;
    function xf(e, t, n) {
      var r = bf;
      if (r && typeof t == `string` && t) {
        var i = Yt(t);
        ((i = `link[rel="` + e + `"][href="` + i + `"]`),
          typeof n == `string` && (i += `[crossorigin="` + n + `"]`),
          hf.has(i) ||
            (hf.add(i),
            (e = { rel: e, crossOrigin: n, href: t }),
            r.querySelector(i) === null &&
              ((t = r.createElement(`link`)),
              Pd(t, `link`, e),
              At(t),
              r.head.appendChild(t))));
      }
    }
    function Sf(e) {
      (_f.D(e), xf(`dns-prefetch`, e, null));
    }
    function Cf(e, t) {
      (_f.C(e, t), xf(`preconnect`, e, t));
    }
    function wf(e, t, n) {
      _f.L(e, t, n);
      var r = bf;
      if (r && e && t) {
        var i = `link[rel="preload"][as="` + Yt(t) + `"]`;
        t === `image` && n && n.imageSrcSet
          ? ((i += `[imagesrcset="` + Yt(n.imageSrcSet) + `"]`),
            typeof n.imageSizes == `string` &&
              (i += `[imagesizes="` + Yt(n.imageSizes) + `"]`))
          : (i += `[href="` + Yt(e) + `"]`);
        var a = i;
        switch (t) {
          case `style`:
            a = Af(e);
            break;
          case `script`:
            a = Pf(e);
        }
        mf.has(a) ||
          ((e = m(
            {
              rel: `preload`,
              href: t === `image` && n && n.imageSrcSet ? void 0 : e,
              as: t,
            },
            n,
          )),
          mf.set(a, e),
          r.querySelector(i) !== null ||
            (t === `style` && r.querySelector(jf(a))) ||
            (t === `script` && r.querySelector(Ff(a))) ||
            ((t = r.createElement(`link`)),
            Pd(t, `link`, e),
            At(t),
            r.head.appendChild(t)));
      }
    }
    function Tf(e, t) {
      _f.m(e, t);
      var n = bf;
      if (n && e) {
        var r = t && typeof t.as == `string` ? t.as : `script`,
          i =
            `link[rel="modulepreload"][as="` +
            Yt(r) +
            `"][href="` +
            Yt(e) +
            `"]`,
          a = i;
        switch (r) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            a = Pf(e);
        }
        if (
          !mf.has(a) &&
          ((e = m({ rel: `modulepreload`, href: e }, t)),
          mf.set(a, e),
          n.querySelector(i) === null)
        ) {
          switch (r) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
              if (n.querySelector(Ff(a))) return;
          }
          ((r = n.createElement(`link`)),
            Pd(r, `link`, e),
            At(r),
            n.head.appendChild(r));
        }
      }
    }
    function Ef(e, t, n) {
      _f.S(e, t, n);
      var r = bf;
      if (r && e) {
        var i = kt(r).hoistableStyles,
          a = Af(e);
        t ||= `default`;
        var o = i.get(a);
        if (!o) {
          var s = { loading: 0, preload: null };
          if ((o = r.querySelector(jf(a)))) s.loading = 5;
          else {
            ((e = m({ rel: `stylesheet`, href: e, "data-precedence": t }, n)),
              (n = mf.get(a)) && Rf(e, n));
            var c = (o = r.createElement(`link`));
            (At(c),
              Pd(c, `link`, e),
              (c._p = new Promise(function (e, t) {
                ((c.onload = e), (c.onerror = t));
              })),
              c.addEventListener(`load`, function () {
                s.loading |= 1;
              }),
              c.addEventListener(`error`, function () {
                s.loading |= 2;
              }),
              (s.loading |= 4),
              Lf(o, t, r));
          }
          ((o = { type: `stylesheet`, instance: o, count: 1, state: s }),
            i.set(a, o));
        }
      }
    }
    function Df(e, t) {
      _f.X(e, t);
      var n = bf;
      if (n && e) {
        var r = kt(n).hoistableScripts,
          i = Pf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(Ff(i))),
          a ||
            ((e = m({ src: e, async: !0 }, t)),
            (t = mf.get(i)) && zf(e, t),
            (a = n.createElement(`script`)),
            At(a),
            Pd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function Of(e, t) {
      _f.M(e, t);
      var n = bf;
      if (n && e) {
        var r = kt(n).hoistableScripts,
          i = Pf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(Ff(i))),
          a ||
            ((e = m({ src: e, async: !0, type: `module` }, t)),
            (t = mf.get(i)) && zf(e, t),
            (a = n.createElement(`script`)),
            At(a),
            Pd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function kf(e, t, n, r) {
      var i = (i = _e.current) ? gf(i) : null;
      if (!i) throw Error(a(446));
      switch (e) {
        case `meta`:
        case `title`:
          return null;
        case `style`:
          return typeof n.precedence == `string` && typeof n.href == `string`
            ? ((t = Af(n.href)),
              (n = kt(i).hoistableStyles),
              (r = n.get(t)),
              r ||
                ((r = { type: `style`, instance: null, count: 0, state: null }),
                n.set(t, r)),
              r)
            : { type: `void`, instance: null, count: 0, state: null };
        case `link`:
          if (
            n.rel === `stylesheet` &&
            typeof n.href == `string` &&
            typeof n.precedence == `string`
          ) {
            e = Af(n.href);
            var o = kt(i).hoistableStyles,
              s = o.get(e);
            if (
              (s ||
                ((i = i.ownerDocument || i),
                (s = {
                  type: `stylesheet`,
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                o.set(e, s),
                (o = i.querySelector(jf(e))) &&
                  !o._p &&
                  ((s.instance = o), (s.state.loading = 5)),
                mf.has(e) ||
                  ((n = {
                    rel: `preload`,
                    as: `style`,
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy,
                  }),
                  mf.set(e, n),
                  o || Nf(i, e, n, s.state))),
              t && r === null)
            )
              throw Error(a(528, ``));
            return s;
          }
          if (t && r !== null) throw Error(a(529, ``));
          return null;
        case `script`:
          return (
            (t = n.async),
            (n = n.src),
            typeof n == `string` &&
            t &&
            typeof t != `function` &&
            typeof t != `symbol`
              ? ((t = Pf(n)),
                (n = kt(i).hoistableScripts),
                (r = n.get(t)),
                r ||
                  ((r = {
                    type: `script`,
                    instance: null,
                    count: 0,
                    state: null,
                  }),
                  n.set(t, r)),
                r)
              : { type: `void`, instance: null, count: 0, state: null }
          );
        default:
          throw Error(a(444, e));
      }
    }
    function Af(e) {
      return `href="` + Yt(e) + `"`;
    }
    function jf(e) {
      return `link[rel="stylesheet"][` + e + `]`;
    }
    function Mf(e) {
      return m({}, e, { "data-precedence": e.precedence, precedence: null });
    }
    function Nf(e, t, n, r) {
      e.querySelector(`link[rel="preload"][as="style"][` + t + `]`)
        ? (r.loading = 1)
        : ((t = e.createElement(`link`)),
          (r.preload = t),
          t.addEventListener(`load`, function () {
            return (r.loading |= 1);
          }),
          t.addEventListener(`error`, function () {
            return (r.loading |= 2);
          }),
          Pd(t, `link`, n),
          At(t),
          e.head.appendChild(t));
    }
    function Pf(e) {
      return `[src="` + Yt(e) + `"]`;
    }
    function Ff(e) {
      return `script[async]` + e;
    }
    function If(e, t, n) {
      if ((t.count++, t.instance === null))
        switch (t.type) {
          case `style`:
            var r = e.querySelector(`style[data-href~="` + Yt(n.href) + `"]`);
            if (r) return ((t.instance = r), At(r), r);
            var i = m({}, n, {
              "data-href": n.href,
              "data-precedence": n.precedence,
              href: null,
              precedence: null,
            });
            return (
              (r = (e.ownerDocument || e).createElement(`style`)),
              At(r),
              Pd(r, `style`, i),
              Lf(r, n.precedence, e),
              (t.instance = r)
            );
          case `stylesheet`:
            i = Af(n.href);
            var o = e.querySelector(jf(i));
            if (o) return ((t.state.loading |= 4), (t.instance = o), At(o), o);
            ((r = Mf(n)),
              (i = mf.get(i)) && Rf(r, i),
              (o = (e.ownerDocument || e).createElement(`link`)),
              At(o));
            var s = o;
            return (
              (s._p = new Promise(function (e, t) {
                ((s.onload = e), (s.onerror = t));
              })),
              Pd(o, `link`, r),
              (t.state.loading |= 4),
              Lf(o, n.precedence, e),
              (t.instance = o)
            );
          case `script`:
            return (
              (o = Pf(n.src)),
              (i = e.querySelector(Ff(o)))
                ? ((t.instance = i), At(i), i)
                : ((r = n),
                  (i = mf.get(o)) && ((r = m({}, n)), zf(r, i)),
                  (e = e.ownerDocument || e),
                  (i = e.createElement(`script`)),
                  At(i),
                  Pd(i, `link`, r),
                  e.head.appendChild(i),
                  (t.instance = i))
            );
          case `void`:
            return null;
          default:
            throw Error(a(443, t.type));
        }
      else
        t.type === `stylesheet` &&
          !(t.state.loading & 4) &&
          ((r = t.instance), (t.state.loading |= 4), Lf(r, n.precedence, e));
      return t.instance;
    }
    function Lf(e, t, n) {
      for (
        var r = n.querySelectorAll(
            `link[rel="stylesheet"][data-precedence],style[data-precedence]`,
          ),
          i = r.length ? r[r.length - 1] : null,
          a = i,
          o = 0;
        o < r.length;
        o++
      ) {
        var s = r[o];
        if (s.dataset.precedence === t) a = s;
        else if (a !== i) break;
      }
      a
        ? a.parentNode.insertBefore(e, a.nextSibling)
        : ((t = n.nodeType === 9 ? n.head : n),
          t.insertBefore(e, t.firstChild));
    }
    function Rf(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.title ??= t.title));
    }
    function zf(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.integrity ??= t.integrity));
    }
    var Bf = null;
    function Vf(e, t, n) {
      if (Bf === null) {
        var r = new Map(),
          i = (Bf = new Map());
        i.set(n, r);
      } else ((i = Bf), (r = i.get(n)), r || ((r = new Map()), i.set(n, r)));
      if (r.has(e)) return r;
      for (
        r.set(e, null), n = n.getElementsByTagName(e), i = 0;
        i < n.length;
        i++
      ) {
        var a = n[i];
        if (
          !(
            a[wt] ||
            a[_t] ||
            (e === `link` && a.getAttribute(`rel`) === `stylesheet`)
          ) &&
          a.namespaceURI !== `http://www.w3.org/2000/svg`
        ) {
          var o = a.getAttribute(t) || ``;
          o = e + o;
          var s = r.get(o);
          s ? s.push(a) : r.set(o, [a]);
        }
      }
      return r;
    }
    function Hf(e, t, n) {
      ((e = e.ownerDocument || e),
        e.head.insertBefore(
          n,
          t === `title` ? e.querySelector(`head > title`) : null,
        ));
    }
    function Uf(e, t, n) {
      if (n === 1 || t.itemProp != null) return !1;
      switch (e) {
        case `meta`:
        case `title`:
          return !0;
        case `style`:
          if (
            typeof t.precedence != `string` ||
            typeof t.href != `string` ||
            t.href === ``
          )
            break;
          return !0;
        case `link`:
          if (
            typeof t.rel != `string` ||
            typeof t.href != `string` ||
            t.href === `` ||
            t.onLoad ||
            t.onError
          )
            break;
          switch (t.rel) {
            case `stylesheet`:
              return (
                (e = t.disabled),
                typeof t.precedence == `string` && e == null
              );
            default:
              return !0;
          }
        case `script`:
          if (
            t.async &&
            typeof t.async != `function` &&
            typeof t.async != `symbol` &&
            !t.onLoad &&
            !t.onError &&
            t.src &&
            typeof t.src == `string`
          )
            return !0;
      }
      return !1;
    }
    function Wf(e) {
      return !(e.type === `stylesheet` && !(e.state.loading & 3));
    }
    function Gf(e, t, n, r) {
      if (
        n.type === `stylesheet` &&
        (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) &&
        !(n.state.loading & 4)
      ) {
        if (n.instance === null) {
          var i = Af(r.href),
            a = t.querySelector(jf(i));
          if (a) {
            ((t = a._p),
              typeof t == `object` &&
                t &&
                typeof t.then == `function` &&
                (e.count++, (e = Jf.bind(e)), t.then(e, e)),
              (n.state.loading |= 4),
              (n.instance = a),
              At(a));
            return;
          }
          ((a = t.ownerDocument || t),
            (r = Mf(r)),
            (i = mf.get(i)) && Rf(r, i),
            (a = a.createElement(`link`)),
            At(a));
          var o = a;
          ((o._p = new Promise(function (e, t) {
            ((o.onload = e), (o.onerror = t));
          })),
            Pd(a, `link`, r),
            (n.instance = a));
        }
        (e.stylesheets === null && (e.stylesheets = new Map()),
          e.stylesheets.set(n, t),
          (t = n.state.preload) &&
            !(n.state.loading & 3) &&
            (e.count++,
            (n = Jf.bind(e)),
            t.addEventListener(`load`, n),
            t.addEventListener(`error`, n)));
      }
    }
    var Kf = 0;
    function qf(e, t) {
      return (
        e.stylesheets && e.count === 0 && Xf(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount
          ? function (n) {
              var r = setTimeout(function () {
                if ((e.stylesheets && Xf(e, e.stylesheets), e.unsuspend)) {
                  var t = e.unsuspend;
                  ((e.unsuspend = null), t());
                }
              }, 6e4 + t);
              0 < e.imgBytes && Kf === 0 && (Kf = 62500 * Ld());
              var i = setTimeout(
                function () {
                  if (
                    ((e.waitingForImages = !1),
                    e.count === 0 &&
                      (e.stylesheets && Xf(e, e.stylesheets), e.unsuspend))
                  ) {
                    var t = e.unsuspend;
                    ((e.unsuspend = null), t());
                  }
                },
                (e.imgBytes > Kf ? 50 : 800) + t,
              );
              return (
                (e.unsuspend = n),
                function () {
                  ((e.unsuspend = null), clearTimeout(r), clearTimeout(i));
                }
              );
            }
          : null
      );
    }
    function Jf() {
      if (
        (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
      ) {
        if (this.stylesheets) Xf(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          ((this.unsuspend = null), e());
        }
      }
    }
    var Yf = null;
    function Xf(e, t) {
      ((e.stylesheets = null),
        e.unsuspend !== null &&
          (e.count++,
          (Yf = new Map()),
          t.forEach(Zf, e),
          (Yf = null),
          Jf.call(e)));
    }
    function Zf(e, t) {
      if (!(t.state.loading & 4)) {
        var n = Yf.get(e);
        if (n) var r = n.get(null);
        else {
          ((n = new Map()), Yf.set(e, n));
          for (
            var i = e.querySelectorAll(
                `link[data-precedence],style[data-precedence]`,
              ),
              a = 0;
            a < i.length;
            a++
          ) {
            var o = i[a];
            (o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) &&
              (n.set(o.dataset.precedence, o), (r = o));
          }
          r && n.set(null, r);
        }
        ((i = t.instance),
          (o = i.getAttribute(`data-precedence`)),
          (a = n.get(o) || r),
          a === r && n.set(null, i),
          n.set(o, i),
          this.count++,
          (r = Jf.bind(this)),
          i.addEventListener(`load`, r),
          i.addEventListener(`error`, r),
          a
            ? a.parentNode.insertBefore(i, a.nextSibling)
            : ((e = e.nodeType === 9 ? e.head : e),
              e.insertBefore(i, e.firstChild)),
          (t.state.loading |= 4));
      }
    }
    var Qf = {
      $$typeof: S,
      Provider: null,
      Consumer: null,
      _currentValue: de,
      _currentValue2: de,
      _threadCount: 0,
    };
    function $f(e, t, n, r, i, a, o, s, c) {
      ((this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = ot(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = ot(0)),
        (this.hiddenUpdates = ot(null)),
        (this.identifierPrefix = r),
        (this.onUncaughtError = i),
        (this.onCaughtError = a),
        (this.onRecoverableError = o),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = c),
        (this.incompleteTransitions = new Map()));
    }
    function ep(e, t, n, r, i, a, o, s, c, l, u, d) {
      return (
        (e = new $f(e, t, n, o, c, l, u, d, s)),
        (t = 1),
        !0 === a && (t |= 24),
        (a = pi(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (t = fa()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
        Wa(a),
        e
      );
    }
    function tp(e) {
      return e ? ((e = di), e) : di;
    }
    function np(e, t, n, r, i, a) {
      ((i = tp(i)),
        r.context === null ? (r.context = i) : (r.pendingContext = i),
        (r = Ka(t)),
        (r.payload = { element: n }),
        (a = a === void 0 ? null : a),
        a !== null && (r.callback = a),
        (n = qa(e, r, t)),
        n !== null && (hu(n, e, t), Ja(n, e, t)));
    }
    function rp(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function ip(e, t) {
      (rp(e, t), (e = e.alternate) && rp(e, t));
    }
    function ap(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = ci(e, 67108864);
        (t !== null && hu(t, e, 67108864), ip(e, 67108864));
      }
    }
    function op(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = pu();
        t = ft(t);
        var n = ci(e, t);
        (n !== null && hu(n, e, t), ip(e, t));
      }
    }
    var sp = !0;
    function cp(e, t, n, r) {
      var i = w.T;
      w.T = null;
      var a = T.p;
      try {
        ((T.p = 2), up(e, t, n, r));
      } finally {
        ((T.p = a), (w.T = i));
      }
    }
    function lp(e, t, n, r) {
      var i = w.T;
      w.T = null;
      var a = T.p;
      try {
        ((T.p = 8), up(e, t, n, r));
      } finally {
        ((T.p = a), (w.T = i));
      }
    }
    function up(e, t, n, r) {
      if (sp) {
        var i = dp(r);
        if (i === null) (wd(e, t, r, fp, n), Cp(e, r));
        else if (Tp(i, e, t, n, r)) r.stopPropagation();
        else if ((Cp(e, r), t & 4 && -1 < Sp.indexOf(e))) {
          for (; i !== null; ) {
            var a = Dt(i);
            if (a !== null)
              switch (a.tag) {
                case 3:
                  if (
                    ((a = a.stateNode), a.current.memoizedState.isDehydrated)
                  ) {
                    var o = tt(a.pendingLanes);
                    if (o !== 0) {
                      var s = a;
                      for (s.pendingLanes |= 2, s.entangledLanes |= 2; o; ) {
                        var c = 1 << (31 - Je(o));
                        ((s.entanglements[1] |= c), (o &= ~c));
                      }
                      (rd(a), !(K & 6) && ((tu = Ie() + 500), id(0, !1)));
                    }
                  }
                  break;
                case 31:
                case 13:
                  ((s = ci(a, 2)), s !== null && hu(s, a, 2), bu(), ip(a, 2));
              }
            if (((a = dp(r)), a === null && wd(e, t, r, fp, n), a === i)) break;
            i = a;
          }
          i !== null && r.stopPropagation();
        } else wd(e, t, r, null, n);
      }
    }
    function dp(e) {
      return ((e = dn(e)), pp(e));
    }
    var fp = null;
    function pp(e) {
      if (((fp = null), (e = Et(e)), e !== null)) {
        var t = c(e);
        if (t === null) e = null;
        else {
          var n = t.tag;
          if (n === 13) {
            if (((e = l(t)), e !== null)) return e;
            e = null;
          } else if (n === 31) {
            if (((e = u(t)), e !== null)) return e;
            e = null;
          } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return ((fp = e), null);
    }
    function mp(e) {
      switch (e) {
        case `beforetoggle`:
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `resize`:
        case `seeked`:
        case `submit`:
        case `toggle`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
          return 2;
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `scroll`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
          return 8;
        case `message`:
          switch (Le()) {
            case Re:
              return 2;
            case ze:
              return 8;
            case Be:
            case Ve:
              return 32;
            case He:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var hp = !1,
      gp = null,
      _p = null,
      vp = null,
      yp = new Map(),
      bp = new Map(),
      xp = [],
      Sp =
        `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(
          ` `,
        );
    function Cp(e, t) {
      switch (e) {
        case `focusin`:
        case `focusout`:
          gp = null;
          break;
        case `dragenter`:
        case `dragleave`:
          _p = null;
          break;
        case `mouseover`:
        case `mouseout`:
          vp = null;
          break;
        case `pointerover`:
        case `pointerout`:
          yp.delete(t.pointerId);
          break;
        case `gotpointercapture`:
        case `lostpointercapture`:
          bp.delete(t.pointerId);
      }
    }
    function wp(e, t, n, r, i, a) {
      return e === null || e.nativeEvent !== a
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [i],
          }),
          t !== null && ((t = Dt(t)), t !== null && ap(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
    }
    function Tp(e, t, n, r, i) {
      switch (t) {
        case `focusin`:
          return ((gp = wp(gp, e, t, n, r, i)), !0);
        case `dragenter`:
          return ((_p = wp(_p, e, t, n, r, i)), !0);
        case `mouseover`:
          return ((vp = wp(vp, e, t, n, r, i)), !0);
        case `pointerover`:
          var a = i.pointerId;
          return (yp.set(a, wp(yp.get(a) || null, e, t, n, r, i)), !0);
        case `gotpointercapture`:
          return (
            (a = i.pointerId),
            bp.set(a, wp(bp.get(a) || null, e, t, n, r, i)),
            !0
          );
      }
      return !1;
    }
    function Ep(e) {
      var t = Et(e.target);
      if (t !== null) {
        var n = c(t);
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = l(n)), t !== null)) {
              ((e.blockedOn = t),
                ht(e.priority, function () {
                  op(n);
                }));
              return;
            }
          } else if (t === 31) {
            if (((t = u(n)), t !== null)) {
              ((e.blockedOn = t),
                ht(e.priority, function () {
                  op(n);
                }));
              return;
            }
          } else if (
            t === 3 &&
            n.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Dp(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = dp(e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          ((un = r), n.target.dispatchEvent(r), (un = null));
        } else return ((t = Dt(n)), t !== null && ap(t), (e.blockedOn = n), !1);
        t.shift();
      }
      return !0;
    }
    function Op(e, t, n) {
      Dp(e) && n.delete(t);
    }
    function kp() {
      ((hp = !1),
        gp !== null && Dp(gp) && (gp = null),
        _p !== null && Dp(_p) && (_p = null),
        vp !== null && Dp(vp) && (vp = null),
        yp.forEach(Op),
        bp.forEach(Op));
    }
    function Ap(e, n) {
      e.blockedOn === n &&
        ((e.blockedOn = null),
        hp ||
          ((hp = !0),
          t.unstable_scheduleCallback(t.unstable_NormalPriority, kp)));
    }
    var jp = null;
    function Mp(e) {
      jp !== e &&
        ((jp = e),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
          jp === e && (jp = null);
          for (var t = 0; t < e.length; t += 3) {
            var n = e[t],
              r = e[t + 1],
              i = e[t + 2];
            if (typeof r != `function`) {
              if (pp(r || n) === null) continue;
              break;
            }
            var a = Dt(n);
            a !== null &&
              (e.splice(t, 3),
              (t -= 3),
              Ds(
                a,
                { pending: !0, data: i, method: n.method, action: r },
                r,
                i,
              ));
          }
        }));
    }
    function Np(e) {
      function t(t) {
        return Ap(t, e);
      }
      (gp !== null && Ap(gp, e),
        _p !== null && Ap(_p, e),
        vp !== null && Ap(vp, e),
        yp.forEach(t),
        bp.forEach(t));
      for (var n = 0; n < xp.length; n++) {
        var r = xp[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
      for (; 0 < xp.length && ((n = xp[0]), n.blockedOn === null); )
        (Ep(n), n.blockedOn === null && xp.shift());
      if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
        for (r = 0; r < n.length; r += 3) {
          var i = n[r],
            a = n[r + 1],
            o = i[vt] || null;
          if (typeof a == `function`) o || Mp(n);
          else if (o) {
            var s = null;
            if (a && a.hasAttribute(`formAction`)) {
              if (((i = a), (o = a[vt] || null))) s = o.formAction;
              else if (pp(i) !== null) continue;
            } else s = o.action;
            (typeof s == `function`
              ? (n[r + 1] = s)
              : (n.splice(r, 3), (r -= 3)),
              Mp(n));
          }
        }
    }
    function Pp() {
      function e(e) {
        e.canIntercept &&
          e.info === `react-transition` &&
          e.intercept({
            handler: function () {
              return new Promise(function (e) {
                return (i = e);
              });
            },
            focusReset: `manual`,
            scroll: `manual`,
          });
      }
      function t() {
        (i !== null && (i(), (i = null)), r || setTimeout(n, 20));
      }
      function n() {
        if (!r && !navigation.transition) {
          var e = navigation.currentEntry;
          e &&
            e.url != null &&
            navigation.navigate(e.url, {
              state: e.getState(),
              info: `react-transition`,
              history: `replace`,
            });
        }
      }
      if (typeof navigation == `object`) {
        var r = !1,
          i = null;
        return (
          navigation.addEventListener(`navigate`, e),
          navigation.addEventListener(`navigatesuccess`, t),
          navigation.addEventListener(`navigateerror`, t),
          setTimeout(n, 100),
          function () {
            ((r = !0),
              navigation.removeEventListener(`navigate`, e),
              navigation.removeEventListener(`navigatesuccess`, t),
              navigation.removeEventListener(`navigateerror`, t),
              i !== null && (i(), (i = null)));
          }
        );
      }
    }
    function Fp(e) {
      this._internalRoot = e;
    }
    ((Ip.prototype.render = Fp.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(a(409));
        var n = t.current;
        np(n, pu(), e, t, null, null);
      }),
      (Ip.prototype.unmount = Fp.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            (np(e.current, 2, null, e, null, null), bu(), (t[yt] = null));
          }
        }));
    function Ip(e) {
      this._internalRoot = e;
    }
    Ip.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = mt();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < xp.length && t !== 0 && t < xp[n].priority; n++);
        (xp.splice(n, 0, e), n === 0 && Ep(e));
      }
    };
    var Lp = r.version;
    if (Lp !== `19.2.8`) throw Error(a(527, Lp, `19.2.8`));
    T.findDOMNode = function (e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == `function`
          ? Error(a(188))
          : ((e = Object.keys(e).join(`,`)), Error(a(268, e)));
      return (
        (e = f(t)),
        (e = e === null ? null : p(e)),
        (e = e === null ? null : e.stateNode),
        e
      );
    };
    var Rp = {
      bundleType: 0,
      version: `19.2.8`,
      rendererPackageName: `react-dom`,
      currentDispatcherRef: w,
      reconcilerVersion: `19.2.8`,
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var zp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!zp.isDisabled && zp.supportsFiber)
        try {
          ((Ge = zp.inject(Rp)), (Ke = zp));
        } catch {}
    }
    e.hydrateRoot = function (e, t, n) {
      if (!s(e)) throw Error(a(299));
      var r = !1,
        i = ``,
        o = Ys,
        c = Xs,
        l = Zs,
        u = null;
      return (
        n != null &&
          (!0 === n.unstable_strictMode && (r = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (o = n.onUncaughtError),
          n.onCaughtError !== void 0 && (c = n.onCaughtError),
          n.onRecoverableError !== void 0 && (l = n.onRecoverableError),
          n.formState !== void 0 && (u = n.formState)),
        (t = ep(e, 1, !0, t, n ?? null, r, i, u, o, c, l, Pp)),
        (t.context = tp(null)),
        (n = t.current),
        (r = pu()),
        (r = ft(r)),
        (i = Ka(r)),
        (i.callback = null),
        qa(n, i, r),
        (n = r),
        (t.current.lanes = n),
        st(t, n),
        rd(t),
        (e[yt] = t.current),
        Sd(e),
        new Ip(t)
      );
    };
  }),
  Oe = t((e, t) => {
    function n() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = De()));
  });
function ke() {
  try {
    return sessionStorage;
  } catch {
    return;
  }
}
var Ae = `tsr-scroll-restoration-v1_3`,
  je = ke();
function Me() {
  try {
    return JSON.parse(je?.getItem(`tsr-scroll-restoration-v1_3`) || `{}`);
  } catch {
    return {};
  }
}
function Ne() {
  try {
    je?.setItem(Ae, JSON.stringify(Pe));
  } catch {}
}
var Pe = Me(),
  Fe = `data-scroll-restoration-id`,
  Ie = (e) => e.state.__TSR_key || e.href;
function Le(e) {
  let t = e.getAttribute(Fe);
  if (t) return `[${Fe}="${t}"]`;
  let n = ``,
    r = e,
    i;
  for (; (i = r.parentNode); ) {
    let e = 1,
      t = r;
    for (; (t = t.previousElementSibling); ) e++;
    let a = `${r.localName}:nth-child(${e})`;
    ((n = n ? `${a} > ${n}` : a), (r = i));
  }
  return n;
}
var Re = !1,
  ze = `window`;
function Be(e) {
  try {
    return typeof e == `function` ? e() : document.querySelector(e);
  } catch {}
}
function Ve(e) {
  let t = new Set();
  for (let n of e) {
    if (n === ze) continue;
    let e = Be(n);
    e && t.add(e);
  }
  return t;
}
function He(e, t) {
  let n = t ?? e.options.scrollRestoration,
    r = e._scroll;
  n && (r.restoring = !0);
  let i = e.options.getScrollRestorationKey || Ie,
    a = new Set(),
    o = (e) => {
      let t = (Pe[e] ||= {});
      for (let e of a)
        e === document
          ? (t[ze] = { scrollX, scrollY })
          : e.isConnected &&
            (t[Le(e)] = { scrollX: e.scrollLeft, scrollY: e.scrollTop });
    };
  (n &&
    !r.restoration &&
    ((r.restoration = !0),
    (Re = !1),
    (history.scrollRestoration = `manual`),
    document.addEventListener(
      `scroll`,
      (e) => {
        Re || a.add(e.target);
      },
      !0,
    ),
    e.subscribe(`onBeforeLoad`, (e) => {
      (e.fromLocation && o(i(e.fromLocation)), a.clear());
    }),
    addEventListener(`pagehide`, () => {
      (o(i(e.stores.resolvedLocation.get() ?? e.stores.location.get())), Ne());
    })),
    !r.reset &&
      ((r.reset = !0),
      e.subscribe(`onRendered`, (t) => {
        let n = e.options.scrollRestorationBehavior,
          o = e.options.scrollToTopSelectors,
          s = r.next,
          c = r.hash,
          l;
        if (
          (a.clear(),
          (r.next = !0),
          (r.hash = !1),
          typeof e.options.scrollRestoration == `function` &&
            !e.options.scrollRestoration({ location: e.latestLocation }))
        )
          return;
        let u = i(t.toLocation),
          d = t.fromLocation && i(t.fromLocation);
        if (r.restoring && d && d !== u) {
          let e = Pe[d];
          if (e) {
            let t = Pe[u];
            for (let n in e) {
              if (n === ze) {
                if (s) continue;
              } else {
                let e = Be(n);
                if (!e || (s && o && ((l ??= Ve(o)), l.has(e)))) continue;
              }
              ((t ||= Pe[u] = {}), (t[n] ??= e[n]));
            }
          }
        }
        Re = !0;
        try {
          let e = t.toLocation.hash,
            i = t.toLocation.state.__hashScrollIntoViewOptions ?? !0,
            a = !1;
          if (s) {
            !e && o && (l ??= Ve(o));
            let t = e && i && c,
              s = r.restoring ? Pe[u] : void 0;
            if (s)
              for (let e in s) {
                let { scrollX: r, scrollY: i } = s[e];
                if (e === ze) {
                  if (t) continue;
                  (scrollTo({ top: i, left: r, behavior: n }), (a = !0));
                } else {
                  let t = Be(e);
                  t && ((t.scrollLeft = r), (t.scrollTop = i), l?.delete(t));
                }
              }
            if (!e) {
              let e = { top: 0, left: 0, behavior: n };
              if ((a || scrollTo(e), l)) for (let t of l) t.scrollTo(e);
            }
          }
          !a && e && i && document.getElementById(e)?.scrollIntoView(i);
        } finally {
          Re = !1;
        }
      })));
}
var Ue = Ge(JSON.parse),
  We = Ke(JSON.stringify, JSON.parse);
function Ge(e) {
  return (t) => {
    t[0] === `?` && (t = t.substring(1));
    let n = u(t);
    for (let t in n) {
      let r = n[t];
      if (typeof r == `string`)
        try {
          n[t] = e(r);
        } catch {}
    }
    return n;
  };
}
function Ke(e, t) {
  let n = typeof t == `function`;
  function r(r) {
    if (typeof r == `object` && r)
      try {
        return e(r);
      } catch {}
    else if (n && typeof r == `string`)
      try {
        return (t(r), e(r));
      } catch {}
    return r;
  }
  return (e) => {
    let t = f(e, r);
    return t ? `?${t}` : ``;
  };
}
var qe = `__root__`;
function Je(e) {
  return {
    input: ({ url: t }) => {
      for (let n of e) t = Xe(n, t);
      return t;
    },
    output: ({ url: t }) => {
      for (let n = e.length - 1; n >= 0; n--) t = Ze(e[n], t);
      return t;
    },
  };
}
function Ye(e) {
  let t = he(e.basepath),
    n = `/${t}`,
    r = e.caseSensitive ? n : n.toLowerCase(),
    i = `${r}/`;
  return {
    input: ({ url: t }) => {
      let a = e.caseSensitive ? t.pathname : t.pathname.toLowerCase();
      return (
        a === r
          ? (t.pathname = `/`)
          : a.startsWith(i) && (t.pathname = t.pathname.slice(n.length)),
        t
      );
    },
    output: ({ url: e }) => ((e.pathname = ce([`/`, t, e.pathname])), e),
  };
}
function Xe(e, t) {
  let n = e?.input?.({ url: t });
  if (n) {
    if (typeof n == `string`) return new URL(n);
    if (n instanceof URL) return n;
  }
  return t;
}
function Ze(e, t) {
  let n = e?.output?.({ url: t });
  if (n) {
    if (typeof n == `string`) return new URL(n);
    if (n instanceof URL) return n;
  }
  return t;
}
function Qe(e, t) {
  let { createMutableStore: n, createReadonlyStore: r, batch: i, init: a } = t,
    o = new Map(),
    s = new Map(),
    c = new Map(),
    l = n(e.status),
    u = n(e.loadedAt),
    d = n(e.isLoading),
    f = n(e.isTransitioning),
    p = n(e.location),
    m = n(e.resolvedLocation),
    h = n(e.statusCode),
    g = n(e.redirect),
    _ = n([]),
    v = n([]),
    y = n([]),
    b = r(() => $e(o, _.get())),
    x = r(() => $e(s, v.get())),
    S = r(() => $e(c, y.get())),
    C = r(() => _.get()[0]),
    ee = r(() => _.get().some((e) => o.get(e)?.get().status === `pending`)),
    te = r(() => ({
      locationHref: p.get().href,
      resolvedLocationHref: m.get()?.href,
      status: l.get(),
    })),
    re = r(() => ({
      status: l.get(),
      loadedAt: u.get(),
      isLoading: d.get(),
      isTransitioning: f.get(),
      matches: b.get(),
      location: p.get(),
      resolvedLocation: m.get(),
      statusCode: h.get(),
      redirect: g.get(),
    })),
    ie = ne(64);
  function ae(e) {
    let t = ie.get(e);
    return (
      t ||
        ((t = r(() => {
          let t = _.get();
          for (let n of t) {
            let t = o.get(n);
            if (t && t.routeId === e) return t.get();
          }
        })),
        ie.set(e, t)),
      t
    );
  }
  let oe = {
    status: l,
    loadedAt: u,
    isLoading: d,
    isTransitioning: f,
    location: p,
    resolvedLocation: m,
    statusCode: h,
    redirect: g,
    matchesId: _,
    pendingIds: v,
    cachedIds: y,
    matches: b,
    pendingMatches: x,
    cachedMatches: S,
    firstId: C,
    hasPending: ee,
    matchRouteDeps: te,
    matchStores: o,
    pendingMatchStores: s,
    cachedMatchStores: c,
    __store: re,
    getRouteMatchStore: ae,
    setMatches: se,
    setPending: ce,
    setCached: le,
  };
  (se(e.matches), a?.(oe));
  function se(e) {
    et(e, o, _, n, i);
  }
  function ce(e) {
    et(e, s, v, n, i);
  }
  function le(e) {
    et(e, c, y, n, i);
  }
  return oe;
}
function $e(e, t) {
  let n = [];
  for (let r of t) {
    let t = e.get(r);
    t && n.push(t.get());
  }
  return n;
}
function et(e, t, n, r, i) {
  let a = e.map((e) => e.id),
    o = new Set(a);
  i(() => {
    for (let e of t.keys()) o.has(e) || t.delete(e);
    for (let n of e) {
      let e = t.get(n.id);
      if (!e) {
        let e = r(n);
        ((e.routeId = n.routeId), t.set(n.id, e));
        continue;
      }
      ((e.routeId = n.routeId), e.get() !== n && e.set(n));
    }
    xe(n.get(), a) || n.set(a);
  });
}
var tt = (e) => {
    if (!e.rendered) return ((e.rendered = !0), e.onReady?.());
  },
  nt = (e) =>
    e.stores.matchesId
      .get()
      .some((t) => e.stores.matchStores.get(t)?.get()._forcePending),
  rt = (e, t) => !!(e.preload && !e.router.stores.matchStores.has(t)),
  it = (e, t, n = !0) => {
    let r = { ...(e.router.options.context ?? {}) },
      i = n ? t : t - 1;
    for (let t = 0; t <= i; t++) {
      let n = e.matches[t];
      if (!n) continue;
      let i = e.router.getMatch(n.id);
      i && Object.assign(r, i.__routeContext, i.__beforeLoadContext);
    }
    return r;
  },
  at = (e, t) => {
    if (!e.matches.length) return;
    let n = t.routeId,
      r = e.matches.findIndex((t) => t.routeId === e.router.routeTree.id),
      i = r >= 0 ? r : 0,
      a = n
        ? e.matches.findIndex((e) => e.routeId === n)
        : (e.firstBadMatchIndex ?? e.matches.length - 1);
    a < 0 && (a = i);
    for (let t = a; t >= 0; t--) {
      let n = e.matches[t];
      if (e.router.looseRoutesById[n.routeId].options.notFoundComponent)
        return t;
    }
    return n ? a : i;
  },
  ot = (e, t, n) => {
    if (!(!d(n) && !c(n)))
      throw d(n) && n.redirectHandled && !n.options.reloadDocument
        ? n
        : (t &&
            (t._nonReactive.beforeLoadPromise?.resolve(),
            t._nonReactive.loaderPromise?.resolve(),
            (t._nonReactive.beforeLoadPromise = void 0),
            (t._nonReactive.loaderPromise = void 0),
            (t._nonReactive.error = n),
            e.updateMatch(t.id, (r) => ({
              ...r,
              status: d(n)
                ? `redirected`
                : c(n)
                  ? `notFound`
                  : r.status === `pending`
                    ? `success`
                    : r.status,
              context: it(e, t.index),
              isFetching: !1,
              error: n,
            })),
            c(n) && !n.routeId && (n.routeId = t.routeId),
            t._nonReactive.loadPromise?.resolve()),
          d(n) &&
            ((e.rendered = !0),
            (n.options._fromLocation = e.location),
            (n.redirectHandled = !0),
            (n = e.router.resolveRedirect(n))),
          n);
  },
  st = (e, t) => {
    let n = e.router.getMatch(t);
    return !!(!n || n._nonReactive.dehydrated);
  },
  ct = (e, t, n) => {
    let r = it(e, n);
    e.updateMatch(t, (e) => ({ ...e, context: r }));
  },
  lt = (e, t, n) => {
    let { id: r, routeId: i } = e.matches[t],
      a = e.router.looseRoutesById[i];
    if (n instanceof Promise) throw n;
    ((e.firstBadMatchIndex ??= t), ot(e, e.router.getMatch(r), n));
    try {
      a.options.onError?.(n);
    } catch (t) {
      ((n = t), ot(e, e.router.getMatch(r), n));
    }
    (e.updateMatch(
      r,
      (e) => (
        e._nonReactive.beforeLoadPromise?.resolve(),
        (e._nonReactive.beforeLoadPromise = void 0),
        e._nonReactive.loadPromise?.resolve(),
        {
          ...e,
          error: n,
          status: `error`,
          isFetching: !1,
          updatedAt: Date.now(),
          abortController: new AbortController(),
        }
      ),
    ),
      !e.preload && !d(n) && !c(n) && (e.serialError ??= n));
  },
  ut = (e, t, n, r) => {
    if (r._nonReactive.pendingTimeout !== void 0) return;
    let i = n.options.pendingMs ?? e.router.options.defaultPendingMs;
    if (
      e.onReady &&
      !rt(e, t) &&
      (n.options.loader || n.options.beforeLoad || xt(n)) &&
      typeof i == `number` &&
      i !== 1 / 0 &&
      (n.options.pendingComponent ?? e.router.options?.defaultPendingComponent)
    ) {
      let t = setTimeout(() => {
        tt(e);
      }, i);
      r._nonReactive.pendingTimeout = t;
    }
  },
  dt = (e, t, n) => {
    let r = e.router.getMatch(t);
    if (!r._nonReactive.beforeLoadPromise && !r._nonReactive.loaderPromise)
      return;
    ut(e, t, n, r);
    let i = () => {
      let n = e.router.getMatch(t);
      n.preload &&
        (n.status === `redirected` || n.status === `notFound`) &&
        ot(e, n, n.error);
    };
    return r._nonReactive.beforeLoadPromise
      ? r._nonReactive.beforeLoadPromise.then(i)
      : i();
  },
  ft = (e, t, n, r) => {
    let i = e.router.getMatch(t),
      a = i._nonReactive.loadPromise;
    i._nonReactive.loadPromise = re(() => {
      (a?.resolve(), (a = void 0));
    });
    let { paramsError: o, searchError: s } = i;
    (o && lt(e, n, o), s && lt(e, n, s), ut(e, t, r, i));
    let l = new AbortController(),
      u = !1,
      f = () => {
        u ||
          ((u = !0),
          e.updateMatch(t, (e) => ({
            ...e,
            isFetching: `beforeLoad`,
            fetchCount: e.fetchCount + 1,
            abortController: l,
          })));
      },
      p = () => {
        (i._nonReactive.beforeLoadPromise?.resolve(),
          (i._nonReactive.beforeLoadPromise = void 0),
          e.updateMatch(t, (e) => ({ ...e, isFetching: !1 })));
      };
    if (!r.options.beforeLoad) {
      e.router.batch(() => {
        (f(), p());
      });
      return;
    }
    i._nonReactive.beforeLoadPromise = re();
    let m = { ...it(e, n, !1), ...i.__routeContext },
      { search: h, params: g, cause: _ } = i,
      v = rt(e, t),
      y = {
        search: h,
        abortController: l,
        params: g,
        preload: v,
        context: m,
        location: e.location,
        navigate: (t) => e.router.navigate({ ...t, _fromLocation: e.location }),
        buildLocation: e.router.buildLocation,
        cause: v ? `preload` : _,
        matches: e.matches,
        routeId: r.id,
        ...e.router.options.additionalContext,
      },
      b = (r) => {
        if (r === void 0) {
          e.router.batch(() => {
            (f(), p());
          });
          return;
        }
        ((d(r) || c(r)) && (f(), lt(e, n, r)),
          e.router.batch(() => {
            (f(),
              e.updateMatch(t, (e) => ({ ...e, __beforeLoadContext: r })),
              p());
          }));
      },
      x;
    try {
      if (((x = r.options.beforeLoad(y)), te(x)))
        return (
          f(),
          x
            .catch((t) => {
              lt(e, n, t);
            })
            .then(b)
        );
    } catch (t) {
      (f(), lt(e, n, t));
    }
    b(x);
  },
  pt = (e, t) => {
    let { id: n, routeId: r } = e.matches[t],
      i = e.router.looseRoutesById[r],
      a = () => s(),
      o = () => ft(e, n, t, i),
      s = () => {
        if (st(e, n)) return;
        let t = dt(e, n, i);
        return te(t) ? t.then(o) : o();
      };
    return a();
  },
  mt = (e, t, n) => {
    let r = e.router.getMatch(t);
    if (!r || (!n.options.head && !n.options.scripts && !n.options.headers))
      return;
    let i = {
      ssr: e.router.options.ssr,
      matches: e.matches,
      match: r,
      params: r.params,
      loaderData: r.loaderData,
    };
    return Promise.all([
      n.options.head?.(i),
      n.options.scripts?.(i),
      n.options.headers?.(i),
    ]).then(([e, t, n]) => ({
      meta: e?.meta,
      links: e?.links,
      headScripts: e?.scripts,
      headers: n,
      scripts: t,
      styles: e?.styles,
    }));
  },
  ht = (e, t, n, r, i) => {
    let a = t[r - 1],
      {
        params: o,
        loaderDeps: s,
        abortController: c,
        cause: l,
      } = e.router.getMatch(n),
      u = it(e, r),
      d = rt(e, n);
    return {
      params: o,
      deps: s,
      preload: !!d,
      parentMatchPromise: a,
      abortController: c,
      context: u,
      location: e.location,
      navigate: (t) => e.router.navigate({ ...t, _fromLocation: e.location }),
      cause: d ? `preload` : l,
      route: i,
      ...e.router.options.additionalContext,
    };
  },
  gt = async (e, t, n, r, i) => {
    try {
      let a = e.router.getMatch(n);
      try {
        bt(i);
        let o = i.options.loader,
          s = typeof o == `function` ? o : o?.handler,
          c = s?.(ht(e, t, n, r, i)),
          l = !!s && te(c);
        if (
          ((l ||
            i._lazyPromise ||
            i._componentsPromise ||
            i.options.head ||
            i.options.scripts ||
            i.options.headers ||
            a._nonReactive.minPendingPromise) &&
            e.updateMatch(n, (e) => ({ ...e, isFetching: `loader` })),
          s)
        ) {
          let t = l ? await c : c;
          (ot(e, e.router.getMatch(n), t),
            t !== void 0 && e.updateMatch(n, (e) => ({ ...e, loaderData: t })));
        }
        i._lazyPromise && (await i._lazyPromise);
        let u = a._nonReactive.minPendingPromise;
        (u && (await u),
          i._componentsPromise && (await i._componentsPromise),
          e.updateMatch(n, (t) => ({
            ...t,
            error: void 0,
            context: it(e, r),
            status: `success`,
            isFetching: !1,
            updatedAt: Date.now(),
          })));
      } catch (t) {
        let o = t;
        if (o?.name === `AbortError`) {
          if (a.abortController.signal.aborted) {
            (a._nonReactive.loaderPromise?.resolve(),
              (a._nonReactive.loaderPromise = void 0));
            return;
          }
          e.updateMatch(n, (t) => ({
            ...t,
            status: t.status === `pending` ? `success` : t.status,
            isFetching: !1,
            context: it(e, r),
          }));
          return;
        }
        let s = a._nonReactive.minPendingPromise;
        (s && (await s),
          c(t) && (await i.options.notFoundComponent?.preload?.()),
          ot(e, e.router.getMatch(n), t));
        try {
          i.options.onError?.(t);
        } catch (t) {
          ((o = t), ot(e, e.router.getMatch(n), t));
        }
        (!d(o) && !c(o) && (await bt(i, [`errorComponent`])),
          e.updateMatch(n, (t) => ({
            ...t,
            error: o,
            context: it(e, r),
            status: `error`,
            isFetching: !1,
          })));
      }
    } catch (t) {
      let r = e.router.getMatch(n);
      (r && (r._nonReactive.loaderPromise = void 0), ot(e, r, t));
    }
  },
  _t = async (e, t, n) => {
    async function r(r, a, c, l, f) {
      let p = Date.now() - a.updatedAt,
        m = r
          ? (f.options.preloadStaleTime ??
            e.router.options.defaultPreloadStaleTime ??
            3e4)
          : (f.options.staleTime ?? e.router.options.defaultStaleTime ?? 0),
        h = f.options.shouldReload,
        g = typeof h == `function` ? h(ht(e, t, i, n, f)) : h,
        { status: _, invalid: v } = l,
        y =
          p >= m &&
          (!!e.forceStaleReload ||
            l.cause === `enter` ||
            (c !== void 0 && c !== l.id));
      ((o = _ === `success` && (v || (g ?? y))),
        (r && f.options.preload === !1) ||
          (o && !e.sync && u
            ? ((s = !0),
              (async () => {
                try {
                  await gt(e, t, i, n, f);
                  let r = e.router.getMatch(i);
                  (r._nonReactive.loaderPromise?.resolve(),
                    r._nonReactive.loadPromise?.resolve(),
                    (r._nonReactive.loaderPromise = void 0),
                    (r._nonReactive.loadPromise = void 0));
                } catch (t) {
                  d(t) && (await e.router.navigate(t.options));
                }
              })())
            : _ !== `success` || o
              ? await gt(e, t, i, n, f)
              : ct(e, i, n)));
    }
    let { id: i, routeId: a } = e.matches[n],
      o = !1,
      s = !1,
      c = e.router.looseRoutesById[a],
      l = c.options.loader,
      u =
        ((typeof l == `function` ? void 0 : l?.staleReloadMode) ??
          e.router.options.defaultStaleReloadMode) !== `blocking`;
    if (st(e, i)) {
      if (!e.router.getMatch(i)) return e.matches[n];
      ct(e, i, n);
    } else {
      let t = e.router.getMatch(i),
        o = e.router.stores.matchesId.get()[n],
        s =
          ((o && e.router.stores.matchStores.get(o)) || null)?.routeId === a
            ? o
            : e.router.stores.matches.get().find((e) => e.routeId === a)?.id,
        l = rt(e, i);
      if (t._nonReactive.loaderPromise) {
        if (t.status === `success` && !e.sync && !t.preload && u) return t;
        await t._nonReactive.loaderPromise;
        let n = e.router.getMatch(i),
          a = n._nonReactive.error || n.error;
        (a && ot(e, n, a), n.status === `pending` && (await r(l, t, s, n, c)));
      } else {
        let n = l && !e.router.stores.matchStores.has(i),
          a = e.router.getMatch(i);
        ((a._nonReactive.loaderPromise = re()),
          n !== a.preload && e.updateMatch(i, (e) => ({ ...e, preload: n })),
          await r(l, t, s, a, c));
      }
    }
    let f = e.router.getMatch(i);
    (s ||
      (f._nonReactive.loaderPromise?.resolve(),
      f._nonReactive.loadPromise?.resolve(),
      (f._nonReactive.loadPromise = void 0)),
      clearTimeout(f._nonReactive.pendingTimeout),
      (f._nonReactive.pendingTimeout = void 0),
      s || (f._nonReactive.loaderPromise = void 0),
      (f._nonReactive.dehydrated = void 0));
    let p = s ? f.isFetching : !1;
    return p !== f.isFetching || f.invalid !== !1
      ? (e.updateMatch(i, (e) => ({ ...e, isFetching: p, invalid: !1 })),
        e.router.getMatch(i))
      : f;
  };
async function vt(e) {
  let t = e,
    n = [];
  nt(t.router) && tt(t);
  let r;
  for (let e = 0; e < t.matches.length; e++) {
    try {
      let n = pt(t, e);
      te(n) && (await n);
    } catch (e) {
      if (d(e)) throw e;
      if (c(e)) r = e;
      else if (!t.preload) throw e;
      break;
    }
    if (t.serialError || t.firstBadMatchIndex != null) break;
  }
  let i = t.firstBadMatchIndex ?? t.matches.length,
    a = r && !t.preload ? at(t, r) : void 0,
    o = r && t.preload ? 0 : a === void 0 ? i : Math.min(a + 1, i),
    s,
    l;
  for (let e = 0; e < o; e++) n.push(_t(t, n, e));
  try {
    await Promise.all(n);
  } catch {
    let e = await Promise.allSettled(n);
    for (let t of e) {
      if (t.status !== `rejected`) continue;
      let e = t.reason;
      if (d(e)) throw e;
      c(e) ? (s ??= e) : (l ??= e);
    }
    if (l !== void 0) throw l;
  }
  let u = s ?? (r && !t.preload ? r : void 0),
    f =
      t.firstBadMatchIndex === void 0
        ? t.matches.length - 1
        : t.firstBadMatchIndex;
  if (!u && r && t.preload) return t.matches;
  if (u) {
    let e = at(t, u);
    e === void 0 && we();
    let n = t.matches[e],
      r = t.router.looseRoutesById[n.routeId],
      i = t.router.options?.defaultNotFoundComponent;
    (!r.options.notFoundComponent && i && (r.options.notFoundComponent = i),
      (u.routeId = n.routeId));
    let a = n.routeId === t.router.routeTree.id;
    (t.updateMatch(n.id, (e) => ({
      ...e,
      ...(a
        ? { status: `success`, globalNotFound: !0, error: void 0 }
        : { status: `notFound`, error: u }),
      isFetching: !1,
    })),
      (f = e),
      await bt(r, [`notFoundComponent`]));
  } else if (!t.preload) {
    let e = t.matches[0];
    e.globalNotFound ||
      (t.router.getMatch(e.id)?.globalNotFound &&
        t.updateMatch(e.id, (e) => ({
          ...e,
          globalNotFound: !1,
          error: void 0,
        })));
  }
  if (t.serialError && t.firstBadMatchIndex !== void 0) {
    let e = t.router.looseRoutesById[t.matches[t.firstBadMatchIndex].routeId];
    await bt(e, [`errorComponent`]);
  }
  for (let e = 0; e <= f; e++) {
    let { id: n, routeId: r } = t.matches[e],
      i = t.router.looseRoutesById[r];
    try {
      let e = mt(t, n, i);
      if (e) {
        let r = await e;
        t.updateMatch(n, (e) => ({ ...e, ...r }));
      }
    } catch (e) {
      console.error(`Error executing head for route ${r}:`, e);
    }
  }
  let p = tt(t);
  if ((te(p) && (await p), u)) throw u;
  if (t.serialError && !t.preload && !t.onReady) throw t.serialError;
  return t.matches;
}
function yt(e, t) {
  let n = t.map((t) => e.options[t]?.preload?.()).filter(Boolean);
  if (n.length !== 0) return Promise.all(n);
}
function bt(e, t = St) {
  !e._lazyLoaded &&
    e._lazyPromise === void 0 &&
    (e.lazyFn
      ? (e._lazyPromise = e.lazyFn().then((t) => {
          let { id: n, ...r } = t.options;
          (Object.assign(e.options, r),
            (e._lazyLoaded = !0),
            (e._lazyPromise = void 0));
        }))
      : (e._lazyLoaded = !0));
  let n = () =>
    e._componentsLoaded
      ? void 0
      : t === St
        ? (() => {
            if (e._componentsPromise === void 0) {
              let t = yt(e, St);
              t
                ? (e._componentsPromise = t.then(() => {
                    ((e._componentsLoaded = !0),
                      (e._componentsPromise = void 0));
                  }))
                : (e._componentsLoaded = !0);
            }
            return e._componentsPromise;
          })()
        : yt(e, t);
  return e._lazyPromise ? e._lazyPromise.then(n) : n();
}
function xt(e) {
  for (let t of St) if (e.options[t]?.preload) return !0;
  return !1;
}
var St = [
    `component`,
    `errorComponent`,
    `pendingComponent`,
    `notFoundComponent`,
  ],
  Ct = `__TSR_index`,
  wt = `popstate`,
  Tt = `beforeunload`;
function Et(e) {
  let t = e.getLocation(),
    n = new Set(),
    r = (r) => {
      ((t = e.getLocation()), n.forEach((e) => e({ location: t, action: r })));
    },
    i = (n) => {
      (e.notifyOnIndexChange ?? !0) ? r(n) : (t = e.getLocation());
    },
    a = async ({ task: n, navigateOpts: r, ...i }) => {
      if (r?.ignoreBlocker ?? !1) {
        n();
        return;
      }
      let a = e.getBlockers?.() ?? [],
        o = i.type === `PUSH` || i.type === `REPLACE`;
      if (typeof document < `u` && a.length && o)
        for (let n of a) {
          let r = At(i.path, i.state);
          if (
            await n.blockerFn({
              currentLocation: t,
              nextLocation: r,
              action: i.type,
            })
          ) {
            e.onBlocked?.();
            return;
          }
        }
      n();
    };
  return {
    get location() {
      return t;
    },
    get length() {
      return e.getLength();
    },
    subscribers: n,
    subscribe: (e) => (
      n.add(e),
      () => {
        n.delete(e);
      }
    ),
    push: (n, i, o) => {
      let s = t.state[Ct];
      ((i = Dt(s + 1, i)),
        a({
          task: () => {
            (e.pushState(n, i), r({ type: `PUSH` }));
          },
          navigateOpts: o,
          type: `PUSH`,
          path: n,
          state: i,
        }));
    },
    replace: (n, i, o) => {
      let s = t.state[Ct];
      ((i = Dt(s, i)),
        a({
          task: () => {
            (e.replaceState(n, i), r({ type: `REPLACE` }));
          },
          navigateOpts: o,
          type: `REPLACE`,
          path: n,
          state: i,
        }));
    },
    go: (t, n) => {
      a({
        task: () => {
          (e.go(t), i({ type: `GO`, index: t }));
        },
        navigateOpts: n,
        type: `GO`,
      });
    },
    back: (t) => {
      a({
        task: () => {
          (e.back(t?.ignoreBlocker ?? !1), i({ type: `BACK` }));
        },
        navigateOpts: t,
        type: `BACK`,
      });
    },
    forward: (t) => {
      a({
        task: () => {
          (e.forward(t?.ignoreBlocker ?? !1), i({ type: `FORWARD` }));
        },
        navigateOpts: t,
        type: `FORWARD`,
      });
    },
    canGoBack: () => t.state[Ct] !== 0,
    createHref: (t) => e.createHref(t),
    block: (t) => {
      if (!e.setBlockers) return () => {};
      let n = e.getBlockers?.() ?? [];
      return (
        e.setBlockers([...n, t]),
        () => {
          let n = e.getBlockers?.() ?? [];
          e.setBlockers?.(n.filter((e) => e !== t));
        }
      );
    },
    flush: () => e.flush?.(),
    destroy: () => e.destroy?.(),
    notify: r,
  };
}
function Dt(e, t) {
  t ||= {};
  let n = jt();
  return { ...t, key: n, __TSR_key: n, [Ct]: e };
}
function Ot(e) {
  let t = e?.window ?? (typeof document < `u` ? window : void 0),
    n = t.history.pushState,
    r = t.history.replaceState,
    i = [],
    a = () => i,
    o = (e) => (i = e),
    s = e?.createHref ?? ((e) => e),
    c =
      e?.parseLocation ??
      (() =>
        At(
          `${t.location.pathname}${t.location.search}${t.location.hash}`,
          t.history.state,
        ));
  if (!t.history.state?.__TSR_key && !t.history.state?.key) {
    let e = jt();
    t.history.replaceState({ [Ct]: 0, key: e, __TSR_key: e }, ``);
  }
  let l = c(),
    u,
    d = !1,
    f = !1,
    p = !1,
    m = !1,
    h = () => l,
    g,
    _,
    v = () => {
      g &&
        ((C._ignoreSubscribers = !0),
        (g.isPush ? t.history.pushState : t.history.replaceState)(
          g.state,
          ``,
          g.href,
        ),
        (C._ignoreSubscribers = !1),
        (g = void 0),
        (_ = void 0),
        (u = void 0));
    },
    y = (e, t, n) => {
      let r = s(t);
      (_ || (u = l),
        (l = At(t, n)),
        (g = { href: r, state: n, isPush: g?.isPush || e === `push` }),
        (_ ||= Promise.resolve().then(() => v())));
    },
    b = (e) => {
      ((l = c()), C.notify({ type: e }));
    },
    x = async () => {
      if (f) {
        f = !1;
        return;
      }
      let e = c(),
        n = e.state[Ct] - l.state[Ct],
        r = n === 1,
        i = n === -1,
        o = (!r && !i) || d;
      d = !1;
      let s = o ? `GO` : i ? `BACK` : `FORWARD`,
        u = o ? { type: `GO`, index: n } : { type: i ? `BACK` : `FORWARD` };
      if (p) p = !1;
      else {
        let n = a();
        if (typeof document < `u` && n.length) {
          for (let r of n)
            if (
              await r.blockerFn({
                currentLocation: l,
                nextLocation: e,
                action: s,
              })
            ) {
              ((f = !0), t.history.go(1), C.notify(u));
              return;
            }
        }
      }
      ((l = c()), C.notify(u));
    },
    S = (e) => {
      if (m) {
        m = !1;
        return;
      }
      let t = !1,
        n = a();
      if (typeof document < `u` && n.length)
        for (let e of n) {
          let n = e.enableBeforeUnload ?? !0;
          if (n === !0) {
            t = !0;
            break;
          }
          if (typeof n == `function` && n() === !0) {
            t = !0;
            break;
          }
        }
      if (t) return (e.preventDefault(), (e.returnValue = ``));
    },
    C = Et({
      getLocation: h,
      getLength: () => t.history.length,
      pushState: (e, t) => y(`push`, e, t),
      replaceState: (e, t) => y(`replace`, e, t),
      back: (e) => (e && (p = !0), (m = !0), t.history.back()),
      forward: (e) => {
        (e && (p = !0), (m = !0), t.history.forward());
      },
      go: (e) => {
        ((d = !0), t.history.go(e));
      },
      createHref: (e) => s(e),
      flush: v,
      destroy: () => {
        ((t.history.pushState = n),
          (t.history.replaceState = r),
          t.removeEventListener(Tt, S, { capture: !0 }),
          t.removeEventListener(wt, x));
      },
      onBlocked: () => {
        u && l !== u && (l = u);
      },
      getBlockers: a,
      setBlockers: o,
      notifyOnIndexChange: !1,
    });
  return (
    t.addEventListener(Tt, S, { capture: !0 }),
    t.addEventListener(wt, x),
    (t.history.pushState = function (...e) {
      let r = n.apply(t.history, e);
      return (C._ignoreSubscribers || b(`PUSH`), r);
    }),
    (t.history.replaceState = function (...e) {
      let n = r.apply(t.history, e);
      return (C._ignoreSubscribers || b(`REPLACE`), n);
    }),
    C
  );
}
function kt(e) {
  let t = e.replace(/[\x00-\x1f\x7f]/g, ``);
  return (t.startsWith(`//`) && (t = `/` + t.replace(/^\/+/, ``)), t);
}
function At(e, t) {
  let n = kt(e),
    r = n.indexOf(`#`),
    i = n.indexOf(`?`),
    a = jt();
  return {
    href: n,
    pathname: n.substring(
      0,
      r > 0 ? (i > 0 ? Math.min(r, i) : r) : i > 0 ? i : n.length,
    ),
    hash: r > -1 ? n.substring(r) : ``,
    search: i > -1 ? n.slice(i, r === -1 ? void 0 : r) : ``,
    state: t || { [Ct]: 0, key: a, __TSR_key: a },
  };
}
function jt() {
  return (Math.random() + 1).toString(36).substring(7);
}
function Mt(e) {
  return e instanceof Error
    ? { name: e.name, message: e.message }
    : { data: e };
}
function Nt(e, t) {
  let n = t,
    r = e;
  return {
    fromLocation: n,
    toLocation: r,
    pathChanged: n?.pathname !== r.pathname,
    hrefChanged: n?.href !== r.href,
    hashChanged: n?.hash !== r.hash,
  };
}
var Pt = class {
    constructor(e, t) {
      ((this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`),
        (this._scroll = { next: !0 }),
        (this.shouldViewTransition = void 0),
        (this.isViewTransitionTypesSupported = void 0),
        (this.subscribers = new Set()),
        (this.routeBranchCache = new WeakMap()),
        (this.lightweightCache = new WeakMap()),
        (this.startTransition = (e) => e()),
        (this.update = (e) => {
          let t = this.options,
            n = this.basepath ?? t?.basepath ?? `/`,
            r = this.basepath === void 0,
            i = t?.rewrite;
          if (
            ((this.options = { ...t, ...e }),
            (this.isServer = this.options.isServer ?? typeof document > `u`),
            (this.protocolAllowlist = new Set(this.options.protocolAllowlist)),
            this.options.pathParamsAllowedCharacters &&
              (this.pathParamsDecoder = pe(
                this.options.pathParamsAllowedCharacters,
              )),
            (!this.history ||
              (this.options.history &&
                this.options.history !== this.history)) &&
              (this.options.history
                ? (this.history = this.options.history)
                : (this.history = Ot())),
            (this.origin = this.options.origin),
            this.origin ||
              (window?.origin && window.origin !== `null`
                ? (this.origin = window.origin)
                : (this.origin = `http://localhost`)),
            this.history && this.updateLatestLocation(),
            this.options.routeTree !== this.routeTree)
          ) {
            this.routeTree = this.options.routeTree;
            let e;
            ((this.resolvePathCache = ne(1e3)),
              (e = this.buildRouteTree()),
              this.setRoutes(e));
          }
          if (!this.stores && this.latestLocation) {
            let e = this.getStoreConfig(this);
            ((this.batch = e.batch),
              (this.stores = Qe(Lt(this.latestLocation), e)),
              He(this));
          }
          let a = !1,
            o = this.options.basepath ?? `/`,
            s = this.options.rewrite;
          if (r || n !== o || i !== s) {
            this.basepath = o;
            let e = [],
              t = he(o);
            (t && t !== `/` && e.push(Ye({ basepath: o })),
              s && e.push(s),
              (this.rewrite =
                e.length === 0 ? void 0 : e.length === 1 ? e[0] : Je(e)),
              this.history && this.updateLatestLocation(),
              (a = !0));
          }
          (a && this.stores && this.stores.location.set(this.latestLocation),
            typeof window < `u` &&
              `CSS` in window &&
              typeof window.CSS?.supports == `function` &&
              (this.isViewTransitionTypesSupported = window.CSS.supports(
                `selector(:active-view-transition-type(a))`,
              )));
        }),
        (this.updateLatestLocation = () => {
          this.latestLocation = this.parseLocation(
            this.history.location,
            this.latestLocation,
          );
        }),
        (this.buildRouteTree = () => {
          let e = Se(this.routeTree, this.options.caseSensitive, (e, t) => {
            e.init({ originalIndex: t });
          });
          return (
            this.options.routeMasks &&
              oe(this.options.routeMasks, e.processedTree),
            e
          );
        }),
        (this.subscribe = (e, t) => {
          let n = { eventType: e, fn: t };
          return (
            this.subscribers.add(n),
            () => {
              this.subscribers.delete(n);
            }
          );
        }),
        (this.emit = (e) => {
          this.subscribers.forEach((t) => {
            t.eventType === e.type && t.fn(e);
          });
        }),
        (this.parseLocation = (e, t) => {
          let n = ({ pathname: e, search: n, hash: r, href: i, state: a }) => {
              if (!this.rewrite && !/[ \x00-\x1f\x7f\u0080-\uffff]/.test(e)) {
                let i = this.options.parseSearch(n),
                  o = this.options.stringifySearch(i);
                return {
                  href: e + o + r,
                  publicHref: e + o + r,
                  pathname: v(e).path,
                  external: !1,
                  searchStr: o,
                  search: b(t?.search, i),
                  hash: v(r.slice(1)).path,
                  state: x(t?.state, a),
                };
              }
              let o = new URL(i, this.origin),
                s = Xe(this.rewrite, o),
                c = this.options.parseSearch(s.search),
                l = this.options.stringifySearch(c);
              return (
                (s.search = l),
                {
                  href: s.href.replace(s.origin, ``),
                  publicHref: i,
                  pathname: v(s.pathname).path,
                  external: !!this.rewrite && s.origin !== this.origin,
                  searchStr: l,
                  search: b(t?.search, c),
                  hash: v(s.hash.slice(1)).path,
                  state: x(t?.state, a),
                }
              );
            },
            r = n(e),
            { __tempLocation: i, __tempKey: a } = r.state;
          if (i && (!a || a === this.tempLocationKey)) {
            let e = n(i);
            return (
              (e.state.key = r.state.key),
              (e.state.__TSR_key = r.state.__TSR_key),
              delete e.state.__tempLocation,
              { ...e, maskedLocation: r }
            );
          }
          return r;
        }),
        (this.resolvePathWithBase = (e, t) =>
          le({
            base: e,
            to: t.includes(`//`) ? se(t) : t,
            trailingSlash: this.options.trailingSlash,
            cache: this.resolvePathCache,
          })),
        (this.matchRoutes = (e, t, n) =>
          typeof e == `string`
            ? this.matchRoutesInternal({ pathname: e, search: t }, n)
            : this.matchRoutesInternal(e, t)),
        (this.getMatchedRoutes = (e) =>
          zt({
            pathname: e,
            routesById: this.routesById,
            processedTree: this.processedTree,
          })),
        (this.cancelMatch = (e) => {
          let t = this.getMatch(e);
          t &&
            (t.abortController.abort(),
            clearTimeout(t._nonReactive.pendingTimeout),
            (t._nonReactive.pendingTimeout = void 0));
        }),
        (this.cancelMatches = () => {
          (this.stores.pendingIds.get().forEach((e) => {
            this.cancelMatch(e);
          }),
            this.stores.matchesId.get().forEach((e) => {
              if (this.stores.pendingMatchStores.has(e)) return;
              let t = this.stores.matchStores.get(e)?.get();
              t &&
                (t.status === `pending` || t.isFetching === `loader`) &&
                this.cancelMatch(e);
            }));
        }),
        (this.buildLocation = (e) => {
          let t = (t = {}) => {
              let n =
                  t._fromLocation ||
                  this.pendingBuiltLocation ||
                  this.latestLocation,
                r = this.matchRoutesLightweight(n);
              t.from;
              let i =
                  t.unsafeRelative === `path`
                    ? n.pathname
                    : (t.from ?? r.fullPath),
                a = t.to ? `${t.to}` : void 0,
                o = r.search,
                s = Object.assign(Object.create(null), r.params),
                c =
                  a?.charCodeAt(0) === 47
                    ? `/`
                    : this.resolvePathWithBase(i, `.`),
                l = a ? this.resolvePathWithBase(c, a) : c,
                u =
                  t.params === !1 || t.params === null
                    ? Object.create(null)
                    : (t.params ?? !0) === !0
                      ? s
                      : Object.assign(s, h(t.params, s)),
                d = this.routesByPath[w(l)],
                f;
              if (d) f = this.getRouteBranch(d);
              else if (l.includes(`$`)) f = [];
              else {
                let e = this.getMatchedRoutes(l);
                ((f = e.matchedRoutes),
                  this.options.notFoundRoute &&
                    (!e.foundRoute ||
                      (e.foundRoute.path !== `/` && e.routeParams[`**`])) &&
                    (f = [...f, this.options.notFoundRoute]));
              }
              if (f.length && de(u))
                for (let e of f) {
                  let t =
                    e.options.params?.stringify ?? e.options.stringifyParams;
                  if (t)
                    try {
                      Object.assign(u, t(u));
                    } catch {}
                }
              let p = e.leaveParams
                  ? l
                  : v(
                      ye({
                        path: l,
                        params: u,
                        decoder: this.pathParamsDecoder,
                        server: this.isServer,
                      }).interpolatedPath,
                    ).path,
                m = o;
              if (e._includeValidateSearch && this.options.search?.strict) {
                let e = {};
                (f.forEach((t) => {
                  if (t.options.validateSearch)
                    try {
                      Object.assign(
                        e,
                        Rt(t.options.validateSearch, { ...e, ...m }),
                      );
                    } catch {}
                }),
                  (m = e));
              }
              ((m = Bt({
                search: m,
                dest: t,
                destRoutes: f,
                _includeValidateSearch: e._includeValidateSearch,
              })),
                (m = b(o, m)));
              let g = this.options.stringifySearch(m),
                _ =
                  t.hash === !0 ? n.hash : t.hash ? h(t.hash, n.hash) : void 0,
                y = _ ? `#${_}` : ``,
                S =
                  t.state === !0 ? n.state : t.state ? h(t.state, n.state) : {};
              S = x(n.state, S);
              let C = `${p}${g}${y}`,
                te,
                ne,
                re = !1;
              if (this.rewrite) {
                let e = new URL(C, this.origin),
                  t = Ze(this.rewrite, e);
                ((te = e.href.replace(e.origin, ``)),
                  t.origin === this.origin
                    ? (ne = t.pathname + t.search + t.hash)
                    : ((ne = t.href), (re = !0)));
              } else ((te = ee(C)), (ne = te));
              return {
                publicHref: ne,
                href: te,
                pathname: p,
                search: m,
                searchStr: g,
                state: S,
                hash: _ ?? ``,
                external: re,
                unmaskOnReload: t.unmaskOnReload,
              };
            },
            n = (n = {}, r) => {
              let i = t(n),
                a = r ? t(r) : void 0;
              if (!a) {
                let n = Object.create(null);
                if (this.options.routeMasks) {
                  let o = ie(i.pathname, this.processedTree);
                  if (o) {
                    Object.assign(n, o.rawParams);
                    let { from: i, params: s, ...c } = o.route,
                      l =
                        s === !1 || s === null
                          ? Object.create(null)
                          : (s ?? !0) === !0
                            ? n
                            : Object.assign(n, h(s, n));
                    ((r = { from: e.from, ...c, params: l }), (a = t(r)));
                  }
                }
              }
              return (a && (i.maskedLocation = a), i);
            };
          return e.mask ? n(e, { from: e.from, ...e.mask }) : n(e);
        }),
        (this.commitLocation = async ({
          viewTransition: e,
          ignoreBlocker: t,
          ...n
        }) => {
          let r,
            i = () => {
              let e = [
                `key`,
                `__TSR_key`,
                `__TSR_index`,
                `__hashScrollIntoViewOptions`,
              ];
              e.forEach((e) => {
                n.state[e] = this.latestLocation.state[e];
              });
              let t = _(n.state, this.latestLocation.state);
              return (
                e.forEach((e) => {
                  delete n.state[e];
                }),
                t
              );
            },
            a = w(this.latestLocation.href) === w(n.href),
            o = this.commitLocationPromise;
          if (
            ((this.commitLocationPromise = re(() => {
              (o?.resolve(), (o = void 0));
            })),
            a && i())
          )
            this.load();
          else {
            let { maskedLocation: i, hashScrollIntoView: a, ...o } = n;
            (i &&
              ((o = {
                ...i,
                state: {
                  ...i.state,
                  __tempKey: void 0,
                  __tempLocation: {
                    ...o,
                    search: o.searchStr,
                    state: {
                      ...o.state,
                      __tempKey: void 0,
                      __tempLocation: void 0,
                      __TSR_key: void 0,
                      key: void 0,
                    },
                  },
                },
              }),
              (o.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) &&
                (o.state.__tempKey = this.tempLocationKey)),
              (o.state.__hashScrollIntoViewOptions =
                a ?? this.options.defaultHashScrollIntoView ?? !0),
              (this.shouldViewTransition = e),
              (r = n.replace ? `REPLACE` : `PUSH`),
              this.history[r === `REPLACE` ? `replace` : `push`](
                o.publicHref,
                o.state,
                { ignoreBlocker: t },
              ));
          }
          return (
            (this._scroll.next = n.resetScroll ?? !0),
            this.history.subscribers.size ||
              this.load(r ? { action: { type: r } } : void 0),
            this.commitLocationPromise
          );
        }),
        (this.buildAndCommitLocation = ({
          replace: e,
          resetScroll: t,
          hashScrollIntoView: n,
          viewTransition: r,
          ignoreBlocker: i,
          href: a,
          ...o
        } = {}) => {
          if (a) {
            let t = this.history.location.state.__TSR_index,
              n = At(a, { __TSR_index: e ? t : t + 1 }),
              r = new URL(n.pathname, this.origin);
            ((o.to = Xe(this.rewrite, r).pathname),
              (o.search = this.options.parseSearch(n.search)),
              (o.hash = n.hash.slice(1)));
          }
          let s = this.buildLocation({ ...o, _includeValidateSearch: !0 });
          this.pendingBuiltLocation = s;
          let c = this.commitLocation({
            ...s,
            viewTransition: r,
            replace: e,
            resetScroll: t,
            hashScrollIntoView: n,
            ignoreBlocker: i,
          });
          return (
            queueMicrotask(() => {
              this.pendingBuiltLocation === s &&
                (this.pendingBuiltLocation = void 0);
            }),
            c
          );
        }),
        (this.navigate = async ({
          to: e,
          reloadDocument: t,
          href: n,
          publicHref: r,
          ...i
        }) => {
          let a = !1;
          if (n)
            try {
              (new URL(`${n}`), (a = !0));
            } catch {}
          if ((a && !t && (t = !0), t)) {
            if (e !== void 0 || !n) {
              let t = this.buildLocation({ to: e, ...i });
              ((n ??= t.publicHref), (r ??= t.publicHref));
            }
            let t = !a && r ? r : n;
            if (S(t, this.protocolAllowlist)) return;
            if (!i.ignoreBlocker) {
              let e = this.history.getBlockers?.() ?? [];
              for (let t of e)
                if (
                  t?.blockerFn &&
                  (await t.blockerFn({
                    currentLocation: this.latestLocation,
                    nextLocation: this.latestLocation,
                    action: `PUSH`,
                  }))
                )
                  return;
            }
            i.replace ? window.location.replace(t) : (window.location.href = t);
            return;
          }
          return this.buildAndCommitLocation({
            ...i,
            href: n,
            to: e,
            _isNavigate: !0,
          });
        }),
        (this.beforeLoad = () => {
          (this.cancelMatches(), this.updateLatestLocation());
          let e = this.matchRoutes(this.latestLocation),
            t = this.stores.cachedMatches
              .get()
              .filter((t) => !e.some((e) => e.id === t.id));
          this.batch(() => {
            (this.stores.status.set(`pending`),
              this.stores.statusCode.set(200),
              this.stores.isLoading.set(!0),
              this.stores.location.set(this.latestLocation),
              this.stores.setPending(e),
              this.stores.setCached(t));
          });
        }),
        (this.load = async (e) => {
          let t = e?.action?.type,
            n,
            r,
            i,
            a =
              this.stores.resolvedLocation.get() ?? this.stores.location.get();
          for (
            i = new Promise((o) => {
              this.startTransition(async () => {
                try {
                  (this.beforeLoad(),
                    t && (this._scroll.hash = t === `PUSH` || t === `REPLACE`));
                  let n = this.latestLocation,
                    r = Nt(n, this.stores.resolvedLocation.get());
                  (this.stores.redirect.get() ||
                    this.emit({ type: `onBeforeNavigate`, ...r }),
                    this.emit({ type: `onBeforeLoad`, ...r }),
                    await vt({
                      router: this,
                      sync: e?.sync,
                      forceStaleReload: a.href === n.href,
                      matches: this.stores.pendingMatches.get(),
                      location: n,
                      updateMatch: this.updateMatch,
                      onReady: async () => {
                        this.startTransition(() => {
                          this.startViewTransition(async () => {
                            let e = null,
                              t = null,
                              n = null,
                              r = null;
                            this.batch(() => {
                              let i = this.stores.pendingMatches.get(),
                                a = i.length,
                                o = this.stores.matches.get();
                              e = a
                                ? o.filter(
                                    (e) =>
                                      !this.stores.pendingMatchStores.has(e.id),
                                  )
                                : null;
                              let s = new Set();
                              for (let e of this.stores.pendingMatchStores.values())
                                e.routeId && s.add(e.routeId);
                              let c = new Set();
                              for (let e of this.stores.matchStores.values())
                                e.routeId && c.add(e.routeId);
                              ((t = a
                                ? o.filter((e) => !s.has(e.routeId))
                                : null),
                                (n = a
                                  ? i.filter((e) => !c.has(e.routeId))
                                  : null),
                                (r = a ? i.filter((e) => c.has(e.routeId)) : o),
                                this.stores.isLoading.set(!1),
                                this.stores.loadedAt.set(Date.now()),
                                a &&
                                  (this.stores.setMatches(i),
                                  this.stores.setPending([]),
                                  this.stores.setCached([
                                    ...this.stores.cachedMatches.get(),
                                    ...e.filter(
                                      (e) =>
                                        e.status !== `error` &&
                                        e.status !== `notFound` &&
                                        e.status !== `redirected`,
                                    ),
                                  ]),
                                  this.clearExpiredCache()));
                            });
                            for (let [e, i] of [
                              [t, `onLeave`],
                              [n, `onEnter`],
                              [r, `onStay`],
                            ])
                              if (e)
                                for (let t of e)
                                  this.looseRoutesById[t.routeId].options[i]?.(
                                    t,
                                  );
                          });
                        });
                      },
                    }));
                } catch (e) {
                  d(e)
                    ? ((n = e),
                      this.navigate({
                        ...n.options,
                        replace: !0,
                        ignoreBlocker: !0,
                      }))
                    : c(e) && (r = e);
                  let t = n
                    ? n.status
                    : r
                      ? 404
                      : this.stores.matches
                            .get()
                            .some((e) => e.status === `error`)
                        ? 500
                        : 200;
                  this.batch(() => {
                    (this.stores.statusCode.set(t),
                      this.stores.redirect.set(n));
                  });
                }
                (this.latestLoadPromise === i &&
                  (this.commitLocationPromise?.resolve(),
                  (this.latestLoadPromise = void 0),
                  (this.commitLocationPromise = void 0)),
                  o());
              });
            }),
              this.latestLoadPromise = i,
              await i;
            this.latestLoadPromise && i !== this.latestLoadPromise;
          )
            await this.latestLoadPromise;
          let o;
          (this.hasNotFoundMatch()
            ? (o = 404)
            : this.stores.matches.get().some((e) => e.status === `error`) &&
              (o = 500),
            o !== void 0 && this.stores.statusCode.set(o));
        }),
        (this.startViewTransition = (e) => {
          let t =
            this.shouldViewTransition ?? this.options.defaultViewTransition;
          if (
            ((this.shouldViewTransition = void 0),
            t &&
              typeof document < `u` &&
              `startViewTransition` in document &&
              typeof document.startViewTransition == `function`)
          ) {
            let n;
            if (typeof t == `object` && this.isViewTransitionTypesSupported) {
              let r = this.latestLocation,
                i = this.stores.resolvedLocation.get(),
                a = typeof t.types == `function` ? t.types(Nt(r, i)) : t.types;
              if (a === !1) {
                e();
                return;
              }
              n = { update: e, types: a };
            } else n = e;
            document.startViewTransition(n);
          } else e();
        }),
        (this.updateMatch = (e, t) => {
          this.startTransition(() => {
            let n = this.stores.pendingMatchStores.get(e);
            if (n) {
              n.set(t);
              return;
            }
            let r = this.stores.matchStores.get(e);
            if (r) {
              r.set(t);
              return;
            }
            let i = this.stores.cachedMatchStores.get(e);
            if (i) {
              let n = t(i.get());
              n.status === `redirected`
                ? this.stores.cachedMatchStores.delete(e) &&
                  this.stores.cachedIds.set((t) => t.filter((t) => t !== e))
                : i.set(n);
            }
          });
        }),
        (this.getMatch = (e) =>
          this.stores.cachedMatchStores.get(e)?.get() ??
          this.stores.pendingMatchStores.get(e)?.get() ??
          this.stores.matchStores.get(e)?.get()),
        (this.invalidate = (e) => {
          let t = (t) =>
            (e?.filter?.(t) ?? !0)
              ? {
                  ...t,
                  invalid: !0,
                  ...(e?.forcePending ||
                  t.status === `error` ||
                  t.status === `notFound`
                    ? { status: `pending`, error: void 0 }
                    : void 0),
                }
              : t;
          return (
            this.batch(() => {
              (this.stores.setMatches(this.stores.matches.get().map(t)),
                this.stores.setCached(this.stores.cachedMatches.get().map(t)),
                this.stores.setPending(
                  this.stores.pendingMatches.get().map(t),
                ));
            }),
            (this.shouldViewTransition = !1),
            this.load({ sync: e?.sync })
          );
        }),
        (this.getParsedLocationHref = (e) => e.publicHref || `/`),
        (this.resolveRedirect = (e) => {
          let t = e.headers.get(`Location`);
          if (!e.options.href || e.options._builtLocation) {
            let t = e.options._builtLocation ?? this.buildLocation(e.options),
              n = this.getParsedLocationHref(t);
            ((e.options.href = n), e.headers.set(`Location`, n));
          } else if (t)
            try {
              let n = new URL(t);
              if (this.origin && n.origin === this.origin) {
                let t = n.pathname + n.search + n.hash;
                ((e.options.href = t), e.headers.set(`Location`, t));
              }
            } catch {}
          if (
            e.options.href &&
            !e.options._builtLocation &&
            S(e.options.href, this.protocolAllowlist)
          )
            throw Error(`Redirect blocked: unsafe protocol`);
          return (
            e.headers.get(`Location`) ||
              e.headers.set(`Location`, e.options.href),
            e
          );
        }),
        (this.clearCache = (e) => {
          let t = e?.filter;
          t === void 0
            ? this.stores.setCached([])
            : this.stores.setCached(
                this.stores.cachedMatches.get().filter((e) => !t(e)),
              );
        }),
        (this.clearExpiredCache = () => {
          let e = Date.now();
          this.clearCache({
            filter: (t) => {
              let n = this.looseRoutesById[t.routeId];
              if (!n.options.loader) return !0;
              let r =
                (t.preload
                  ? (n.options.preloadGcTime ??
                    this.options.defaultPreloadGcTime)
                  : (n.options.gcTime ?? this.options.defaultGcTime)) ??
                300 * 1e3;
              return t.status === `error` || e - t.updatedAt >= r;
            },
          });
        }),
        (this.loadRouteChunk = bt),
        (this.preloadRoute = async (e) => {
          let t = e._builtLocation ?? this.buildLocation(e),
            n = this.matchRoutes(t, { throwOnError: !0, preload: !0, dest: e }),
            r = new Set([
              ...this.stores.matchesId.get(),
              ...this.stores.pendingIds.get(),
            ]),
            i = new Set([...r, ...this.stores.cachedIds.get()]),
            a = n.filter((e) => !i.has(e.id));
          if (a.length) {
            let e = this.stores.cachedMatches.get();
            this.stores.setCached([...e, ...a]);
          }
          try {
            return (
              (n = await vt({
                router: this,
                matches: n,
                location: t,
                preload: !0,
                updateMatch: (e, t) => {
                  r.has(e)
                    ? (n = n.map((n) => (n.id === e ? t(n) : n)))
                    : this.updateMatch(e, t);
                },
              })),
              n
            );
          } catch (e) {
            if (d(e))
              return e.options.reloadDocument
                ? void 0
                : await this.preloadRoute({ ...e.options, _fromLocation: t });
            c(e) || console.error(e);
            return;
          }
        }),
        (this.matchRoute = (e, t) => {
          let n = {
              ...e,
              to: e.to ? this.resolvePathWithBase(e.from || ``, e.to) : void 0,
              params: e.params || {},
              leaveParams: !0,
            },
            r = this.buildLocation(n);
          if (t?.pending && this.stores.status.get() !== `pending`) return !1;
          let i = (
              t?.pending === void 0 ? !this.stores.isLoading.get() : t.pending
            )
              ? this.latestLocation
              : this.stores.resolvedLocation.get() ||
                this.stores.location.get(),
            a = Ce(
              r.pathname,
              t?.caseSensitive ?? !1,
              t?.fuzzy ?? !1,
              i.pathname,
              this.processedTree,
            );
          return !a || (e.params && !_(a.rawParams, e.params, { partial: !0 }))
            ? !1
            : (t?.includeSearch ?? !0)
              ? _(i.search, r.search, { partial: !0 })
                ? a.rawParams
                : !1
              : a.rawParams;
        }),
        (this.hasNotFoundMatch = () =>
          this.stores.matches
            .get()
            .some((e) => e.status === `notFound` || e.globalNotFound)),
        (this.getStoreConfig = t),
        this.update({
          defaultPreloadDelay: 50,
          defaultPendingMs: 1e3,
          defaultPendingMinMs: 500,
          context: void 0,
          ...e,
          caseSensitive: e.caseSensitive ?? !1,
          notFoundMode: e.notFoundMode ?? `fuzzy`,
          stringifySearch: e.stringifySearch ?? We,
          parseSearch: e.parseSearch ?? Ue,
          protocolAllowlist: e.protocolAllowlist ?? g,
        }),
        typeof document < `u` && (self.__TSR_ROUTER__ = this));
    }
    isShell() {
      return !!this.options.isShell;
    }
    isPrerendering() {
      return !!this.options.isPrerendering;
    }
    get state() {
      return this.stores.__store.get();
    }
    setRoutes({ routesById: e, routesByPath: t, processedTree: n }) {
      ((this.routesById = e),
        (this.routesByPath = t),
        (this.processedTree = n));
      let r = this.options.notFoundRoute;
      r &&
        (r.init({ originalIndex: 99999999999 }), (this.routesById[r.id] = r));
    }
    getRouteBranch(e) {
      let t = this.routeBranchCache.get(e);
      return (t || ((t = ue(e)), this.routeBranchCache.set(e, t)), t);
    }
    get looseRoutesById() {
      return this.routesById;
    }
    getParentContext(e) {
      return e?.id
        ? (e.context ?? this.options.context ?? void 0)
        : (this.options.context ?? void 0);
    }
    matchRoutesInternal(e, t) {
      let n = this.getMatchedRoutes(e.pathname),
        { foundRoute: r, routeParams: i } = n,
        { matchedRoutes: a } = n,
        o = !1;
      (r ? r.path !== `/` && i[`**`] : w(e.pathname)) &&
        (this.options.notFoundRoute
          ? (a = [...a, this.options.notFoundRoute])
          : (o = !0));
      let s = o ? Ht(this.options.notFoundMode, a) : void 0,
        l = Array(a.length),
        u = new Map();
      for (let e of this.stores.matchStores.values())
        e.routeId && u.set(e.routeId, e.get());
      for (let n = 0; n < a.length; n++) {
        let r = a[n],
          o = l[n - 1],
          f,
          p,
          m;
        {
          let n = o?.search ?? e.search,
            i = o?._strictSearch ?? void 0;
          try {
            let e = Rt(r.options.validateSearch, { ...n }) ?? void 0;
            ((f = { ...n, ...e }), (p = { ...i, ...e }), (m = void 0));
          } catch (e) {
            let r = e;
            if (
              (e instanceof Ft || (r = new Ft(e.message, { cause: e })),
              t?.throwOnError)
            )
              throw r;
            ((f = n), (p = {}), (m = r));
          }
        }
        let h = r.options.loaderDeps?.({ search: f }) ?? ``,
          g = h ? JSON.stringify(h) : ``,
          { interpolatedPath: _, usedParams: v } = ye({
            path: r.fullPath,
            params: i,
            decoder: this.pathParamsDecoder,
            server: this.isServer,
          }),
          y = r.id + _ + g,
          S = this.getMatch(y),
          C = u.get(r.id),
          ee = S?._strictParams ?? v,
          te;
        if (!S)
          try {
            Ut(r, ee);
          } catch (e) {
            if (
              ((te = c(e) || d(e) ? e : new It(e.message, { cause: e })),
              t?.throwOnError)
            )
              throw te;
          }
        Object.assign(i, ee);
        let ne = C ? `stay` : `enter`,
          ie;
        if (S)
          ie = {
            ...S,
            cause: ne,
            params: C?.params ?? i,
            _strictParams: ee,
            search: b(C ? C.search : S.search, f),
            _strictSearch: p,
          };
        else {
          let e =
            r.options.loader || r.options.beforeLoad || r.lazyFn || xt(r)
              ? `pending`
              : `success`;
          ie = {
            id: y,
            ssr: r.options.ssr,
            index: n,
            routeId: r.id,
            params: C?.params ?? i,
            _strictParams: ee,
            pathname: _,
            updatedAt: Date.now(),
            search: C ? b(C.search, f) : f,
            _strictSearch: p,
            searchError: void 0,
            status: e,
            isFetching: !1,
            error: void 0,
            paramsError: te,
            __routeContext: void 0,
            _nonReactive: { loadPromise: re() },
            __beforeLoadContext: void 0,
            context: {},
            abortController: new AbortController(),
            fetchCount: 0,
            cause: ne,
            loaderDeps: C ? x(C.loaderDeps, h) : h,
            invalid: !1,
            preload: !1,
            links: void 0,
            scripts: void 0,
            headScripts: void 0,
            meta: void 0,
            staticData: r.options.staticData || {},
            fullPath: r.fullPath,
          };
        }
        (t?.preload || (ie.globalNotFound = s === r.id), (ie.searchError = m));
        let ae = this.getParentContext(o);
        ((ie.context = {
          ...ae,
          ...ie.__routeContext,
          ...ie.__beforeLoadContext,
        }),
          (l[n] = ie));
      }
      for (let t = 0; t < l.length; t++) {
        let n = l[t],
          r = this.looseRoutesById[n.routeId],
          a = this.getMatch(n.id),
          o = u.get(n.routeId);
        if (((n.params = o ? b(o.params, i) : i), !a)) {
          let i = l[t - 1],
            a = this.getParentContext(i);
          if (r.options.context) {
            let t = {
              deps: n.loaderDeps,
              params: n.params,
              context: a ?? {},
              location: e,
              navigate: (t) => this.navigate({ ...t, _fromLocation: e }),
              buildLocation: this.buildLocation,
              cause: n.cause,
              abortController: n.abortController,
              preload: !!n.preload,
              matches: l,
              routeId: r.id,
            };
            n.__routeContext = r.options.context(t) ?? void 0;
          }
          n.context = { ...a, ...n.__routeContext, ...n.__beforeLoadContext };
        }
      }
      return l;
    }
    matchRoutesLightweight(e) {
      let t = y(this.stores.matchesId.get()),
        n = this.lightweightCache.get(e);
      if (n && n[0] === t) return n[1];
      let { matchedRoutes: r, routeParams: i } = this.getMatchedRoutes(
          e.pathname,
        ),
        a = y(r),
        o = { ...e.search };
      for (let e of r)
        try {
          Object.assign(o, Rt(e.options.validateSearch, o));
        } catch {}
      let s = t && this.stores.matchStores.get(t)?.get(),
        c = s && s.routeId === a.id && s.pathname === e.pathname,
        l;
      if (c) l = s.params;
      else {
        let e = Object.assign(Object.create(null), i);
        for (let t of r)
          try {
            Ut(t, e);
          } catch {}
        l = e;
      }
      let u = { matchedRoutes: r, fullPath: a.fullPath, search: o, params: l };
      return (this.lightweightCache.set(e, [t, u]), u);
    }
  },
  Ft = class extends Error {},
  It = class extends Error {};
function Lt(e) {
  return {
    loadedAt: 0,
    isLoading: !1,
    isTransitioning: !1,
    status: `idle`,
    resolvedLocation: void 0,
    location: e,
    matches: [],
    statusCode: 200,
  };
}
function Rt(e, t) {
  if (e == null) return {};
  if (`~standard` in e) {
    let n = e[`~standard`].validate(t);
    if (n instanceof Promise) throw new Ft(`Async validation not supported`);
    if (n.issues)
      throw new Ft(JSON.stringify(n.issues, void 0, 2), { cause: n });
    return n.value;
  }
  return `parse` in e ? e.parse(t) : typeof e == `function` ? e(t) : {};
}
function zt({ pathname: e, routesById: t, processedTree: n }) {
  let r = Object.create(null),
    i = w(e),
    a,
    o = be(i, n, !0);
  return (
    o && ((a = o.route), Object.assign(r, o.rawParams)),
    { matchedRoutes: o?.branch || [t.__root__], routeParams: r, foundRoute: a }
  );
}
function Bt({ search: e, dest: t, destRoutes: n, _includeValidateSearch: r }) {
  return Vt(n)(e, t, r ?? !1);
}
function Vt(e) {
  let t,
    n,
    r = [];
  for (let t of e) {
    let e = t.options;
    `search` in e
      ? e.search?.middlewares && r.push(...e.search.middlewares)
      : (e.preSearchFilters || e.postSearchFilters) &&
        r.push(({ search: t, next: n }) => {
          let r = n(
            e.preSearchFilters
              ? e.preSearchFilters.reduce((e, t) => t(e), t)
              : t,
          );
          return e.postSearchFilters
            ? e.postSearchFilters.reduce((e, t) => t(e), r)
            : r;
        });
    let i = e.validateSearch;
    i &&
      r.push(({ search: e, next: t, meta: r }) => {
        let a = t(e);
        if (n)
          try {
            let e = Rt(i, a);
            if (r && e)
              for (let t in e)
                t in a || (r.defaulted ||= new Map()).set(t, e[t]);
            return { ...a, ...e };
          } catch {}
        return a;
      });
  }
  let i = (e, n, a) => {
    if (e >= r.length) {
      if (!t.search) return {};
      if (t.search === !0) return n;
      let e = h(t.search, n);
      return (a && (a.explicit = e), e);
    }
    return r[e]({
      search: n,
      next: (t, n) => {
        if (n) {
          let n = a || {};
          return { search: i(e + 1, t, n), meta: n };
        }
        return i(e + 1, t, a);
      },
      meta: a,
    });
  };
  return function (e, r, a) {
    return ((t = r), (n = a), i(0, e));
  };
}
function Ht(e, t) {
  if (e !== `root`)
    for (let e = t.length - 1; e >= 0; e--) {
      let n = t[e];
      if (n.children) return n.id;
    }
  return qe;
}
function Ut(e, t) {
  let n = e.options.params?.parse ?? e.options.parseParams;
  if (n) {
    let e = n(t);
    if (e === !1)
      throw Error(`Route params.parse returned false for a matched route`);
    Object.assign(t, e);
  }
}
var Wt = Symbol.for(`TSR_DEFERRED_PROMISE`);
function Gt(e, t) {
  let n = e;
  return n[Wt]
    ? n
    : ((n[Wt] = { status: `pending` }),
      n
        .then((e) => {
          ((n[Wt].status = `success`), (n[Wt].data = e));
        })
        .catch((e) => {
          ((n[Wt].status = `error`),
            (n[Wt].error = {
              data: (t?.serializeError ?? Mt)(e),
              __isServerError: !0,
            }));
        }),
      n);
}
function Kt(e, t) {
  if (e) return typeof e == `string` ? e : e[t];
}
function qt(e) {
  return e?.scriptFormat ?? `module`;
}
function Jt(e, t, n) {
  let r = Yt(t),
    i = Kt(n, `script`) ?? r.crossOrigin;
  return {
    ...(qt(e) === `iife`
      ? { rel: `preload`, as: `script` }
      : { rel: `modulepreload` }),
    href: r.href,
    ...(i ? { crossOrigin: i } : {}),
  };
}
function Yt(e) {
  return typeof e == `string` ? { href: e, crossOrigin: void 0 } : e;
}
function Xt(e, t) {
  if (t.length === 0) return;
  if (t.length === 1) {
    e.push(t[0]);
    return;
  }
  let n = new Set();
  for (let r of t) {
    let t = JSON.stringify(r);
    n.has(t) || (n.add(t), e.push(r));
  }
}
function Zt(e) {
  return typeof e == `string` ? { href: e, crossOrigin: void 0 } : e;
}
var Qt = class {
    get to() {
      return this._to;
    }
    get id() {
      return this._id;
    }
    get path() {
      return this._path;
    }
    get fullPath() {
      return this._fullPath;
    }
    constructor(e) {
      if (
        ((this.init = (e) => {
          this.originalIndex = e.originalIndex;
          let t = this.options,
            n = !t?.path && !t?.id;
          ((this.parentRoute = this.options.getParentRoute?.()),
            n ? (this._path = qe) : this.parentRoute || we());
          let r = n ? qe : t?.path;
          r && r !== `/` && (r = me(r));
          let i = t?.id || r,
            a = n
              ? qe
              : ce([
                  this.parentRoute.id === `__root__` ? `` : this.parentRoute.id,
                  i,
                ]);
          (r === `__root__` && (r = `/`),
            a !== `__root__` && (a = ce([`/`, a])));
          let o = a === `__root__` ? `/` : ce([this.parentRoute.fullPath, r]);
          ((this._path = r),
            (this._id = a),
            (this._fullPath = o),
            (this._to = w(o)));
        }),
        (this.addChildren = (e) => this._addFileChildren(e)),
        (this._addFileChildren = (e) => (
          Array.isArray(e) && (this.children = e),
          typeof e == `object` && e && (this.children = Object.values(e)),
          this
        )),
        (this._addFileTypes = () => this),
        (this.updateLoader = (e) => (Object.assign(this.options, e), this)),
        (this.update = (e) => (Object.assign(this.options, e), this)),
        (this.lazy = (e) => ((this.lazyFn = e), this)),
        (this.redirect = (e) => s({ from: this.fullPath, ...e })),
        (this.options = e || {}),
        (this.isRoot = !e?.getParentRoute),
        e?.id && e?.path)
      )
        throw Error(`Route cannot have both an 'id' and a 'path' option.`);
    }
  },
  $t = class extends Qt {
    constructor(e) {
      super(e);
    }
  },
  en = l({
    key: `$TSS/serverfn`,
    test: (e) => (typeof e != `function` || !(m in e) ? !1 : !!e[m]),
    toSerializable: ({ serverFnMeta: e }) => ({ functionId: e.id }),
    fromSerializable: ({ functionId: e }) => p(e),
  });
function tn(e) {
  return e.replaceAll(`\0`, `/`).replaceAll(`�`, `/`);
}
function nn(e, t) {
  ((e.id = t.i),
    (e.__beforeLoadContext = t.b),
    (e.loaderData = t.l),
    (e.status = t.s),
    (e.ssr = t.ssr),
    (e.updatedAt = t.u),
    (e.error = t.e),
    t.g !== void 0 && (e.globalNotFound = t.g));
}
async function rn(e) {
  window.$_TSR || we();
  let t = e.options.serializationAdapters;
  if (t?.length) {
    let e = new Map();
    (t.forEach((t) => {
      e.set(t.key, t.fromSerializable);
    }),
      (window.$_TSR.t = e),
      window.$_TSR.buffer.forEach((e) => e()));
  }
  ((window.$_TSR.initialized = !0), window.$_TSR.router || we());
  let n = window.$_TSR.router;
  (n.matches.forEach((e) => {
    e.i = tn(e.i);
  }),
    (n.lastMatchId &&= tn(n.lastMatchId)));
  let { manifest: r, dehydratedData: i, lastMatchId: a } = n;
  e.ssr = { manifest: r };
  let o = document.querySelector(`meta[property="csp-nonce"]`)?.content;
  ((e.options.ssr = { nonce: o }), await e.options.hydrate?.(i));
  let s = e.matchRoutes(e.stores.location.get()),
    l = Promise.all(
      s.map((t) => e.loadRouteChunk(e.looseRoutesById[t.routeId])),
    );
  function u(t) {
    let n =
      e.looseRoutesById[t.routeId].options.pendingMinMs ??
      e.options.defaultPendingMinMs;
    if (n) {
      let r = re();
      ((t._nonReactive.minPendingPromise = r),
        (t._forcePending = !0),
        setTimeout(() => {
          (r.resolve(),
            e.updateMatch(
              t.id,
              (e) => (
                (e._nonReactive.minPendingPromise = void 0),
                { ...e, _forcePending: void 0 }
              ),
            ));
        }, n));
    }
  }
  function d(t) {
    let n = e.looseRoutesById[t.routeId];
    n && (n.options.ssr = t.ssr);
  }
  let f;
  (s.forEach((e) => {
    let t = n.matches.find((t) => t.i === e.id);
    if (!t) {
      ((e._nonReactive.dehydrated = !1), (e.ssr = !1), d(e));
      return;
    }
    (nn(e, t),
      d(e),
      (e._nonReactive.dehydrated = e.ssr !== !1),
      (e.ssr === `data-only` || e.ssr === !1) &&
        f === void 0 &&
        ((f = e.index), u(e)));
  }),
    e.stores.setMatches(s));
  let p = e.stores.matches.get(),
    m = e.stores.location.get();
  await Promise.all(
    p.map(async (t) => {
      try {
        let n = e.looseRoutesById[t.routeId],
          r = p[t.index - 1]?.context ?? e.options.context;
        if (n.options.context) {
          let i = {
            deps: t.loaderDeps,
            params: t.params,
            context: r ?? {},
            location: m,
            navigate: (t) => e.navigate({ ...t, _fromLocation: m }),
            buildLocation: e.buildLocation,
            cause: t.cause,
            abortController: t.abortController,
            preload: !1,
            matches: s,
            routeId: n.id,
          };
          t.__routeContext = n.options.context(i) ?? void 0;
        }
        t.context = { ...r, ...t.__routeContext, ...t.__beforeLoadContext };
        let i = {
            ssr: e.options.ssr,
            matches: p,
            match: t,
            params: t.params,
            loaderData: t.loaderData,
          },
          a = await n.options.head?.(i),
          o = await n.options.scripts?.(i);
        ((t.meta = a?.meta),
          (t.links = a?.links),
          (t.headScripts = a?.scripts),
          (t.styles = a?.styles),
          (t.scripts = o));
      } catch (e) {
        if (c(e))
          ((t.error = { isNotFound: !0 }),
            console.error(
              `NotFound error during hydration for routeId: ${t.routeId}`,
              e,
            ));
        else
          throw (
            (t.error = e),
            console.error(`Error during hydration for route ${t.routeId}:`, e),
            e
          );
      }
    }),
  );
  let h = s[s.length - 1].id !== a;
  if (!s.some((e) => e.ssr === !1) && !h)
    return (
      s.forEach((e) => {
        e._nonReactive.dehydrated = void 0;
      }),
      e.stores.resolvedLocation.set(e.stores.location.get()),
      l
    );
  let g = Promise.resolve()
    .then(() => e.load())
    .catch((e) => {
      console.error(`Error during router hydration:`, e);
    });
  if (h) {
    let t = s[1];
    (t || we(),
      u(t),
      (t._displayPending = !0),
      (t._nonReactive.displayPendingPromise = g),
      g.then(() => {
        e.batch(() => {
          (e.stores.status.get() === `pending` &&
            (e.stores.status.set(`idle`),
            e.stores.resolvedLocation.set(e.stores.location.get())),
            e.updateMatch(t.id, (e) => ({
              ...e,
              _displayPending: void 0,
              displayPendingPromise: void 0,
            })));
        });
      }));
  }
  return l;
}
var O = e(n(), 1),
  k = i();
function an({ promise: e }) {
  if (ae) return ae(e);
  let t = Gt(e);
  if (t[Wt].status === `pending`) throw t;
  if (t[Wt].status === `error`) throw t[Wt].error;
  return t[Wt].data;
}
function on(e) {
  let t = (0, k.jsx)(sn, { ...e });
  return e.fallback
    ? (0, k.jsx)(O.Suspense, { fallback: e.fallback, children: t })
    : t;
}
function sn(e) {
  let t = an(e);
  return e.children(t);
}
function cn(e) {
  let t = e.errorComponent ?? un;
  return (0, k.jsx)(ln, {
    getResetKey: e.getResetKey,
    onCatch: e.onCatch,
    children: ({ error: n, reset: r }) =>
      n ? O.createElement(t, { error: n, reset: r }) : e.children,
  });
}
var ln = class extends O.Component {
  constructor(...e) {
    (super(...e), (this.state = { error: null }));
  }
  static getDerivedStateFromProps(e, t) {
    let n = e.getResetKey();
    return t.error && t.resetKey !== n
      ? { resetKey: n, error: null }
      : { resetKey: n };
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  reset() {
    this.setState({ error: null });
  }
  componentDidCatch(e, t) {
    this.props.onCatch && this.props.onCatch(e, t);
  }
  render() {
    return this.props.children({
      error: this.state.error,
      reset: () => {
        this.reset();
      },
    });
  }
};
function un({ error: e }) {
  let [t, n] = O.useState(!1);
  return (0, k.jsxs)(`div`, {
    style: { padding: `.5rem`, maxWidth: `100%` },
    children: [
      (0, k.jsxs)(`div`, {
        style: { display: `flex`, alignItems: `center`, gap: `.5rem` },
        children: [
          (0, k.jsx)(`strong`, {
            style: { fontSize: `1rem` },
            children: `Something went wrong!`,
          }),
          (0, k.jsx)(`button`, {
            style: {
              appearance: `none`,
              fontSize: `.6em`,
              border: `1px solid currentColor`,
              padding: `.1rem .2rem`,
              fontWeight: `bold`,
              borderRadius: `.25rem`,
            },
            onClick: () => n((e) => !e),
            children: t ? `Hide Error` : `Show Error`,
          }),
        ],
      }),
      (0, k.jsx)(`div`, { style: { height: `.25rem` } }),
      t
        ? (0, k.jsx)(`div`, {
            children: (0, k.jsx)(`pre`, {
              style: {
                fontSize: `.7em`,
                border: `1px solid red`,
                borderRadius: `.25rem`,
                padding: `.3rem`,
                color: `red`,
                overflow: `auto`,
              },
              children: e.message
                ? (0, k.jsx)(`code`, { children: e.message })
                : null,
            }),
          })
        : null,
    ],
  });
}
var dn = O.createContext(void 0),
  fn = O.createContext(void 0),
  A = ((e) => (
    (e[(e.None = 0)] = `None`),
    (e[(e.Mutable = 1)] = `Mutable`),
    (e[(e.Watching = 2)] = `Watching`),
    (e[(e.RecursedCheck = 4)] = `RecursedCheck`),
    (e[(e.Recursed = 8)] = `Recursed`),
    (e[(e.Dirty = 16)] = `Dirty`),
    (e[(e.Pending = 32)] = `Pending`),
    e
  ))(A || {});
function pn({ update: e, notify: t, unwatched: n }) {
  return {
    link: r,
    unlink: i,
    propagate: a,
    checkDirty: o,
    shallowPropagate: s,
  };
  function r(e, t, n) {
    let r = t.depsTail;
    if (r !== void 0 && r.dep === e) return;
    let i = r === void 0 ? t.deps : r.nextDep;
    if (i !== void 0 && i.dep === e) {
      ((i.version = n), (t.depsTail = i));
      return;
    }
    let a = e.subsTail;
    if (a !== void 0 && a.version === n && a.sub === t) return;
    let o =
      (t.depsTail =
      e.subsTail =
        {
          version: n,
          dep: e,
          sub: t,
          prevDep: r,
          nextDep: i,
          prevSub: a,
          nextSub: void 0,
        });
    (i !== void 0 && (i.prevDep = o),
      r === void 0 ? (t.deps = o) : (r.nextDep = o),
      a === void 0 ? (e.subs = o) : (a.nextSub = o));
  }
  function i(e, t = e.sub) {
    let r = e.dep,
      i = e.prevDep,
      a = e.nextDep,
      o = e.nextSub,
      s = e.prevSub;
    return (
      a === void 0 ? (t.depsTail = i) : (a.prevDep = i),
      i === void 0 ? (t.deps = a) : (i.nextDep = a),
      o === void 0 ? (r.subsTail = s) : (o.prevSub = s),
      s === void 0 ? (r.subs = o) === void 0 && n(r) : (s.nextSub = o),
      a
    );
  }
  function a(e) {
    let n = e.nextSub,
      r;
    top: do {
      let i = e.sub,
        a = i.flags;
      if (
        (a & 60
          ? a & 12
            ? a & 4
              ? !(a & 48) && c(e, i)
                ? ((i.flags = a | 40), (a &= 1))
                : (a = 0)
              : (i.flags = (a & -9) | 32)
            : (a = 0)
          : (i.flags = a | 32),
        a & 2 && t(i),
        a & 1)
      ) {
        let t = i.subs;
        if (t !== void 0) {
          let i = (e = t).nextSub;
          i !== void 0 && ((r = { value: n, prev: r }), (n = i));
          continue;
        }
      }
      if ((e = n) !== void 0) {
        n = e.nextSub;
        continue;
      }
      for (; r !== void 0; )
        if (((e = r.value), (r = r.prev), e !== void 0)) {
          n = e.nextSub;
          continue top;
        }
      break;
    } while (!0);
  }
  function o(t, n) {
    let r,
      i = 0,
      a = !1;
    top: do {
      let o = t.dep,
        c = o.flags;
      if (n.flags & 16) a = !0;
      else if ((c & 17) == 17) {
        if (e(o)) {
          let e = o.subs;
          (e.nextSub !== void 0 && s(e), (a = !0));
        }
      } else if ((c & 33) == 33) {
        ((t.nextSub !== void 0 || t.prevSub !== void 0) &&
          (r = { value: t, prev: r }),
          (t = o.deps),
          (n = o),
          ++i);
        continue;
      }
      if (!a) {
        let e = t.nextDep;
        if (e !== void 0) {
          t = e;
          continue;
        }
      }
      for (; i--; ) {
        let i = n.subs,
          o = i.nextSub !== void 0;
        if ((o ? ((t = r.value), (r = r.prev)) : (t = i), a)) {
          if (e(n)) {
            (o && s(i), (n = t.sub));
            continue;
          }
          a = !1;
        } else n.flags &= -33;
        n = t.sub;
        let c = t.nextDep;
        if (c !== void 0) {
          t = c;
          continue top;
        }
      }
      return a;
    } while (!0);
  }
  function s(e) {
    do {
      let n = e.sub,
        r = n.flags;
      (r & 48) == 32 && ((n.flags = r | 16), (r & 6) == 2 && t(n));
    } while ((e = e.nextSub) !== void 0);
  }
  function c(e, t) {
    let n = t.depsTail;
    for (; n !== void 0; ) {
      if (n === e) return !0;
      n = n.prevDep;
    }
    return !1;
  }
}
function mn(e, t, n) {
  let r = typeof e == `object`,
    i = r ? e : void 0;
  return {
    next: (r ? e.next : e)?.bind(i),
    error: (r ? e.error : t)?.bind(i),
    complete: (r ? e.complete : n)?.bind(i),
  };
}
var hn = [],
  gn = 0,
  {
    link: _n,
    unlink: vn,
    propagate: yn,
    checkDirty: bn,
    shallowPropagate: xn,
  } = pn({
    update(e) {
      return e._update();
    },
    notify(e) {
      ((hn[Cn++] = e), (e.flags &= ~A.Watching));
    },
    unwatched(e) {
      e.depsTail !== void 0 &&
        ((e.depsTail = void 0), (e.flags = A.Mutable | A.Dirty), Dn(e));
    },
  }),
  Sn = 0,
  Cn = 0,
  wn,
  Tn = 0;
function En(e) {
  try {
    (++Tn, e());
  } finally {
    --Tn || On();
  }
}
function Dn(e) {
  let t = e.depsTail,
    n = t === void 0 ? e.deps : t.nextDep;
  for (; n !== void 0; ) n = vn(n, e);
}
function On() {
  if (!(Tn > 0)) {
    for (; Sn < Cn; ) {
      let e = hn[Sn];
      ((hn[Sn++] = void 0), e.notify());
    }
    ((Sn = 0), (Cn = 0));
  }
}
function kn(e, t) {
  let n = typeof e == `function`,
    r = e,
    i = {
      _snapshot: n ? void 0 : e,
      subs: void 0,
      subsTail: void 0,
      deps: void 0,
      depsTail: void 0,
      flags: n ? A.None : A.Mutable,
      get() {
        return (wn !== void 0 && _n(i, wn, gn), i._snapshot);
      },
      subscribe(e) {
        let t = mn(e),
          n = { current: !1 },
          r = An(() => {
            (i.get(), n.current ? t.next?.(i._snapshot) : (n.current = !0));
          });
        return {
          unsubscribe: () => {
            r.stop();
          },
        };
      },
      _update(e) {
        let a = wn,
          o = t?.compare ?? Object.is;
        if (n) ((wn = i), ++gn, (i.depsTail = void 0));
        else if (e === void 0) return !1;
        n && (i.flags = A.Mutable | A.RecursedCheck);
        try {
          let t = i._snapshot,
            a = typeof e == `function` ? e(t) : e === void 0 && n ? r(t) : e;
          return t === void 0 || !o(t, a) ? ((i._snapshot = a), !0) : !1;
        } finally {
          ((wn = a), n && (i.flags &= ~A.RecursedCheck), Dn(i));
        }
      },
    };
  return (
    n
      ? ((i.flags = A.Mutable | A.Dirty),
        (i.get = function () {
          let e = i.flags;
          if (e & A.Dirty || (e & A.Pending && bn(i.deps, i))) {
            if (i._update()) {
              let e = i.subs;
              e !== void 0 && xn(e);
            }
          } else e & A.Pending && (i.flags = e & ~A.Pending);
          return (wn !== void 0 && _n(i, wn, gn), i._snapshot);
        }))
      : (i.set = function (e) {
          if (i._update(e)) {
            let e = i.subs;
            e !== void 0 && (yn(e), xn(e), On());
          }
        }),
    i
  );
}
function An(e) {
  let t = () => {
      let t = wn;
      ((wn = n),
        ++gn,
        (n.depsTail = void 0),
        (n.flags = A.Watching | A.RecursedCheck));
      try {
        return e();
      } finally {
        ((wn = t), (n.flags &= ~A.RecursedCheck), Dn(n));
      }
    },
    n = {
      deps: void 0,
      depsTail: void 0,
      subs: void 0,
      subsTail: void 0,
      flags: A.Watching | A.RecursedCheck,
      notify() {
        let e = this.flags;
        e & A.Dirty || (e & A.Pending && bn(this.deps, this))
          ? t()
          : (this.flags = A.Watching);
      },
      stop() {
        ((this.flags = A.None), (this.depsTail = void 0), Dn(this));
      },
    };
  return (t(), n);
}
var jn = {
  get() {},
  subscribe() {
    return { unsubscribe() {} };
  },
};
function Mn(e, t) {
  let n = O.useRef();
  return (r) => {
    let i = e?.select ? e.select(r) : r;
    return (e?.structuralSharing ?? t.options.defaultStructuralSharing)
      ? (n.current = x(n.current, i))
      : i;
  };
}
function Nn(e) {
  let t = a(),
    n = O.useContext(e.from ? fn : dn),
    r = e.from
      ? t.stores.getRouteMatchStore(e.from)
      : t.stores.matchStores.get(n),
    i = Mn(e, t),
    o = E(r ?? jn, (e) => (e ? i(e) : jn));
  if (o !== jn) return o;
  (e.shouldThrow ?? !0) && we();
}
function Pn(e) {
  return Nn({
    from: e.from,
    strict: e.strict,
    structuralSharing: e.structuralSharing,
    select: (t) => (e.select ? e.select(t.loaderData) : t.loaderData),
  });
}
function Fn(e) {
  let { select: t, ...n } = e;
  return Nn({ ...n, select: (e) => (t ? t(e.loaderDeps) : e.loaderDeps) });
}
function In(e) {
  return Nn({
    from: e.from,
    shouldThrow: e.shouldThrow,
    structuralSharing: e.structuralSharing,
    strict: e.strict,
    select: (t) => {
      let n = e.strict === !1 ? t.params : t._strictParams;
      return e.select ? e.select(n) : n;
    },
  });
}
function Ln(e) {
  return Nn({
    from: e.from,
    strict: e.strict,
    shouldThrow: e.shouldThrow,
    structuralSharing: e.structuralSharing,
    select: (t) => (e.select ? e.select(t.search) : t.search),
  });
}
function Rn(e) {
  let t = a();
  return O.useCallback(
    (n) => t.navigate({ ...n, from: n.from ?? e?.from }),
    [e?.from, t],
  );
}
function zn(e) {
  return Nn({
    ...e,
    select: (t) => (e.select ? e.select(t.context) : t.context),
  });
}
var Bn = class extends Qt {
  constructor(e) {
    (super(e),
      (this.useMatch = (e) =>
        Nn({
          select: e?.select,
          from: this.id,
          structuralSharing: e?.structuralSharing,
        })),
      (this.useRouteContext = (e) => zn({ ...e, from: this.id })),
      (this.useSearch = (e) =>
        Ln({
          select: e?.select,
          structuralSharing: e?.structuralSharing,
          from: this.id,
        })),
      (this.useParams = (e) =>
        In({
          select: e?.select,
          structuralSharing: e?.structuralSharing,
          from: this.id,
        })),
      (this.useLoaderDeps = (e) => Fn({ ...e, from: this.id })),
      (this.useLoaderData = (e) => Pn({ ...e, from: this.id })),
      (this.useNavigate = () => Rn({ from: this.fullPath })),
      (this.Link = O.forwardRef((e, t) =>
        (0, k.jsx)(ve, { ref: t, from: this.fullPath, ...e }),
      )));
  }
};
function Vn(e) {
  return new Bn(e);
}
function Hn() {
  return (e) => Wn(e);
}
var Un = class extends $t {
  constructor(e) {
    (super(e),
      (this.useMatch = (e) =>
        Nn({
          select: e?.select,
          from: this.id,
          structuralSharing: e?.structuralSharing,
        })),
      (this.useRouteContext = (e) => zn({ ...e, from: this.id })),
      (this.useSearch = (e) =>
        Ln({
          select: e?.select,
          structuralSharing: e?.structuralSharing,
          from: this.id,
        })),
      (this.useParams = (e) =>
        In({
          select: e?.select,
          structuralSharing: e?.structuralSharing,
          from: this.id,
        })),
      (this.useLoaderDeps = (e) => Fn({ ...e, from: this.id })),
      (this.useLoaderData = (e) => Pn({ ...e, from: this.id })),
      (this.useNavigate = () => Rn({ from: this.fullPath })),
      (this.Link = O.forwardRef((e, t) =>
        (0, k.jsx)(ve, { ref: t, from: this.fullPath, ...e }),
      )));
  }
};
function Wn(e) {
  return new Un(e);
}
function j(e) {
  return new Gn(e, { silent: !0 }).createRoute;
}
var Gn = class {
  constructor(e, t) {
    ((this.path = e),
      (this.createRoute = (e) => {
        let t = Vn(e);
        return ((t.isRoot = !1), t);
      }),
      (this.silent = t?.silent));
  }
};
function M(e, t) {
  let n,
    r,
    i,
    a,
    o = () => (
      (n ||= e()
        .then((e) => {
          ((n = void 0), (r = e[t ?? `default`]));
        })
        .catch((e) => {
          if (
            ((i = e),
            C(i) &&
              i instanceof Error &&
              typeof window < `u` &&
              typeof sessionStorage < `u`)
          ) {
            let e = `tanstack_router_reload:${i.message}`;
            sessionStorage.getItem(e) ||
              (sessionStorage.setItem(e, `1`), (a = !0));
          }
        })),
      n
    ),
    s = function (e) {
      if (a) throw (window.location.reload(), new Promise(() => {}));
      if (i) throw i;
      if (!r)
        if (ae) ae(o());
        else throw o();
      return O.createElement(r, e);
    };
  return ((s.preload = o), s);
}
function Kn(e) {
  let t = a(),
    n = `not-found-${E(t.stores.location, (e) => e.pathname)}-${E(t.stores.status, (e) => e)}`;
  return (0, k.jsx)(cn, {
    getResetKey: () => n,
    onCatch: (t, n) => {
      if (c(t)) e.onCatch?.(t, n);
      else throw t;
    },
    errorComponent: ({ error: t }) => {
      if (c(t)) return e.fallback?.(t);
      throw t;
    },
    children: e.children,
  });
}
function qn() {
  return (0, k.jsx)(`p`, { children: `Not Found` });
}
function Jn(e) {
  return (0, k.jsx)(k.Fragment, { children: e.children });
}
function Yn(e, t, n) {
  return t.options.notFoundComponent
    ? (0, k.jsx)(t.options.notFoundComponent, { ...n })
    : e.options.defaultNotFoundComponent
      ? (0, k.jsx)(e.options.defaultNotFoundComponent, { ...n })
      : (0, k.jsx)(qn, {});
}
var Xn = (e, t) =>
    e.routeId === t.routeId && e._displayPending === t._displayPending,
  Zn = (e, t) => e[0] === t[0] && e[1] === t[1],
  Qn = O.memo(function ({ matchId: e }) {
    let t = a(),
      n = t.stores.matchStores.get(e);
    n || we();
    let r = E(t.stores.loadedAt, (e) => e),
      i = E(n, (e) => e, Xn);
    return (0, k.jsx)($n, {
      router: t,
      matchId: e,
      resetKey: r,
      matchState: O.useMemo(() => {
        let e = i.routeId,
          n = t.routesById[e].parentRoute?.id;
        return {
          routeId: e,
          ssr: i.ssr,
          _displayPending: i._displayPending,
          parentRouteId: n,
        };
      }, [i._displayPending, i.routeId, i.ssr, t.routesById]),
    });
  });
function $n({ router: e, matchId: t, resetKey: n, matchState: r }) {
  let i = e.routesById[r.routeId],
    a = i.options.pendingComponent ?? e.options.defaultPendingComponent,
    o = a ? (0, k.jsx)(a, {}) : null,
    s = i.options.errorComponent ?? e.options.defaultErrorComponent,
    l = i.options.onCatch ?? e.options.defaultOnCatch,
    u = i.isRoot
      ? (i.options.notFoundComponent ??
        e.options.notFoundRoute?.options.component)
      : i.options.notFoundComponent,
    d = r.ssr === !1 || r.ssr === `data-only`,
    f =
      (!i.isRoot || i.options.wrapInSuspense || d) &&
      (i.options.wrapInSuspense ??
        a ??
        (i.options.errorComponent?.preload || d))
        ? O.Suspense
        : Jn,
    p = s ? cn : Jn,
    m = u ? Kn : Jn;
  return (0, k.jsxs)(i.isRoot ? (i.options.shellComponent ?? Jn) : Jn, {
    children: [
      (0, k.jsx)(dn.Provider, {
        value: t,
        children: (0, k.jsx)(f, {
          fallback: o,
          children: (0, k.jsx)(p, {
            getResetKey: () => n,
            errorComponent: s || un,
            onCatch: (e, t) => {
              if (c(e)) throw ((e.routeId ??= r.routeId), e);
              l?.(e, t);
            },
            children: (0, k.jsx)(m, {
              fallback: (e) => {
                if (
                  ((e.routeId ??= r.routeId),
                  !u ||
                    (e.routeId && e.routeId !== r.routeId) ||
                    (!e.routeId && !i.isRoot))
                )
                  throw e;
                return O.createElement(u, e);
              },
              children:
                d || r._displayPending
                  ? (0, k.jsx)(ge, {
                      fallback: o,
                      children: (0, k.jsx)(tr, { matchId: t }),
                    })
                  : (0, k.jsx)(tr, { matchId: t }),
            }),
          }),
        }),
      }),
      r.parentRouteId === `__root__`
        ? (0, k.jsxs)(k.Fragment, {
            children: [(0, k.jsx)(er, {}), (e.options.scrollRestoration, null)],
          })
        : null,
    ],
  });
}
function er() {
  let e = a(),
    t = O.useRef();
  return (
    D(() => {
      let n = e.stores.resolvedLocation.get(),
        r = t.current;
      (n &&
        (!r || r.href !== n.href) &&
        e.emit({ type: `onRendered`, ...Nt(e.stores.location.get(), r ?? n) }),
        (t.current = n));
    }, [E(e.stores.resolvedLocation, (e) => e?.state.__TSR_key), e]),
    null
  );
}
var tr = O.memo(function ({ matchId: e }) {
    let t = a(),
      n = (e, n) => t.getMatch(e.id)?._nonReactive[n] ?? e._nonReactive[n],
      r = t.stores.matchStores.get(e);
    r || we();
    let i = E(r, (e) => e),
      o = i.routeId,
      s = t.routesById[o],
      l = O.useMemo(() => {
        let e = (
          t.routesById[o].options.remountDeps ?? t.options.defaultRemountDeps
        )?.({
          routeId: o,
          loaderDeps: i.loaderDeps,
          params: i._strictParams,
          search: i._strictSearch,
        });
        return e ? JSON.stringify(e) : void 0;
      }, [
        o,
        i.loaderDeps,
        i._strictParams,
        i._strictSearch,
        t.options.defaultRemountDeps,
        t.routesById,
      ]),
      u = O.useMemo(() => {
        let e = s.options.component ?? t.options.defaultComponent;
        return e ? (0, k.jsx)(e, {}, l) : (0, k.jsx)(nr, {});
      }, [l, s.options.component, t.options.defaultComponent]);
    if (i._displayPending) throw n(i, `displayPendingPromise`);
    if (i._forcePending) throw n(i, `minPendingPromise`);
    if (i.status === `pending`) {
      let e = s.options.pendingMinMs ?? t.options.defaultPendingMinMs;
      if (e) {
        let n = t.getMatch(i.id);
        if (n && !n._nonReactive.minPendingPromise) {
          let t = re();
          ((n._nonReactive.minPendingPromise = t),
            setTimeout(() => {
              (t.resolve(), (n._nonReactive.minPendingPromise = void 0));
            }, e));
        }
      }
      throw n(i, `loadPromise`);
    }
    if (i.status === `notFound`) return (c(i.error) || we(), Yn(t, s, i.error));
    if (i.status === `redirected`)
      throw (d(i.error) || we(), n(i, `loadPromise`));
    if (i.status === `error`) throw i.error;
    return u;
  }),
  nr = O.memo(function () {
    let e = a(),
      t = O.useContext(dn),
      n,
      r = !1,
      i;
    {
      let a = t ? e.stores.matchStores.get(t) : void 0;
      (([n, r] = E(a, (e) => [e?.routeId, e?.globalNotFound ?? !1], Zn)),
        (i = E(e.stores.matchesId, (e) => e[e.findIndex((e) => e === t) + 1])));
    }
    let o = n ? e.routesById[n] : void 0,
      s = e.options.defaultPendingComponent
        ? (0, k.jsx)(e.options.defaultPendingComponent, {})
        : null;
    if (r) return (o || we(), Yn(e, o, void 0));
    if (!i) return null;
    let c = (0, k.jsx)(Qn, { matchId: i });
    return n === `__root__`
      ? (0, k.jsx)(O.Suspense, { fallback: s, children: c })
      : c;
  });
function rr() {
  let e = a(),
    t = O.useRef({ router: e, mounted: !1 }),
    [n, r] = O.useState(!1),
    i = E(e.stores.isLoading, (e) => e),
    o = E(e.stores.hasPending, (e) => e),
    s = _e(i),
    c = i || n || o,
    l = _e(c),
    u = i || o,
    d = _e(u);
  return (
    (e.startTransition = (e) => {
      (r(!0),
        O.startTransition(() => {
          (e(), r(!1));
        }));
    }),
    O.useEffect(() => {
      let t = e.history.subscribe(e.load),
        n = e.buildLocation({
          to: e.latestLocation.pathname,
          search: !0,
          params: !0,
          hash: !0,
          state: !0,
          _includeValidateSearch: !0,
        });
      return (
        w(e.latestLocation.publicHref) !== w(n.publicHref) &&
          e.commitLocation({ ...n, replace: !0 }),
        () => {
          t();
        }
      );
    }, [e, e.history]),
    D(() => {
      (typeof window < `u` && e.ssr) ||
        (t.current.router === e && t.current.mounted) ||
        ((t.current = { router: e, mounted: !0 }),
        (async () => {
          try {
            await e.load();
          } catch (e) {
            console.error(e);
          }
        })());
    }, [e]),
    D(() => {
      s &&
        !i &&
        e.emit({
          type: `onLoad`,
          ...Nt(e.stores.location.get(), e.stores.resolvedLocation.get()),
        });
    }, [s, e, i]),
    D(() => {
      d &&
        !u &&
        e.emit({
          type: `onBeforeRouteMount`,
          ...Nt(e.stores.location.get(), e.stores.resolvedLocation.get()),
        });
    }, [u, d, e]),
    D(() => {
      if (l && !c) {
        let t = Nt(e.stores.location.get(), e.stores.resolvedLocation.get());
        (e.emit({ type: `onResolved`, ...t }),
          En(() => {
            (e.stores.status.set(`idle`),
              e.stores.resolvedLocation.set(e.stores.location.get()));
          }));
      }
    }, [c, l, e]),
    null
  );
}
function ir() {
  let e = a(),
    t =
      e.routesById.__root__.options.pendingComponent ??
      e.options.defaultPendingComponent,
    n = t ? (0, k.jsx)(t, {}) : null,
    r = (0, k.jsxs)(typeof document < `u` && e.ssr ? Jn : O.Suspense, {
      fallback: n,
      children: [(0, k.jsx)(rr, {}), (0, k.jsx)(ar, {})],
    });
  return e.options.InnerWrap
    ? (0, k.jsx)(e.options.InnerWrap, { children: r })
    : r;
}
function ar() {
  let e = a(),
    t = E(e.stores.firstId, (e) => e),
    n = E(e.stores.loadedAt, (e) => e),
    r = t ? (0, k.jsx)(Qn, { matchId: t }) : null;
  return (0, k.jsx)(dn.Provider, {
    value: t,
    children: e.options.disableGlobalCatchBoundary
      ? r
      : (0, k.jsx)(cn, {
          getResetKey: () => n,
          errorComponent: un,
          onCatch: void 0,
          children: r,
        }),
  });
}
var or = (e) => ({
    createMutableStore: kn,
    createReadonlyStore: kn,
    batch: En,
  }),
  sr = (e) => new cr(e),
  cr = class extends Pt {
    constructor(e) {
      super(e, or);
    }
  };
function lr({ router: e, children: t, ...n }) {
  de(n) &&
    e.update({
      ...e.options,
      ...n,
      context: { ...e.options.context, ...n.context },
    });
  let i = (0, k.jsx)(r.Provider, { value: e, children: t });
  return e.options.Wrap ? (0, k.jsx)(e.options.Wrap, { children: i }) : i;
}
function ur({ router: e, ...t }) {
  return (0, k.jsx)(lr, { router: e, ...t, children: (0, k.jsx)(ir, {}) });
}
function dr(e, t) {
  if (t)
    for (let [n, r] of Object.entries(t))
      n !== `suppressHydrationWarning` &&
        r !== void 0 &&
        r !== !1 &&
        e.setAttribute(n, typeof r == `boolean` ? `` : String(r));
}
function fr(e) {
  let { attrs: t, children: n, nonce: r, preventScriptHoist: i } = e;
  switch (e.tag) {
    case `title`:
      return (0, k.jsx)(`title`, {
        ...t,
        suppressHydrationWarning: !0,
        children: n,
      });
    case `meta`:
      return (0, k.jsx)(`meta`, { ...t, suppressHydrationWarning: !0 });
    case `link`:
      return (0, k.jsx)(`link`, {
        ...t,
        precedence:
          t?.precedence ?? (t?.rel === `stylesheet` ? `default` : void 0),
        nonce: r,
        suppressHydrationWarning: !0,
      });
    case `style`:
      return (
        e.inlineCss,
        (0, k.jsx)(`style`, {
          ...t,
          dangerouslySetInnerHTML: { __html: n },
          nonce: r,
        })
      );
    case `script`:
      return (0, k.jsx)(pr, { attrs: t, preventScriptHoist: i, children: n });
    default:
      return null;
  }
}
function pr({ attrs: e, children: t, preventScriptHoist: n }) {
  a();
  let r = T(),
    i =
      typeof e?.type == `string` &&
      e.type !== `` &&
      e.type !== `text/javascript` &&
      e.type !== `module`;
  if (
    (O.useEffect(() => {
      if (!i) {
        if (e?.src) {
          let t = (() => {
            try {
              let t = document.baseURI || window.location.href;
              return new URL(e.src, t).href;
            } catch {
              return e.src;
            }
          })();
          for (let e of document.querySelectorAll(`script[src]`))
            if (e.src === t) return;
          let n = document.createElement(`script`);
          return (dr(n, e), document.head.appendChild(n), () => n.remove());
        }
        if (typeof t == `string`) {
          let n = typeof e?.type == `string` ? e.type : `text/javascript`,
            r = typeof e?.nonce == `string` ? e.nonce : void 0;
          for (let e of document.querySelectorAll(`script:not([src])`)) {
            if (!(e instanceof HTMLScriptElement)) continue;
            let i = e.getAttribute(`type`) ?? `text/javascript`,
              a = e.getAttribute(`nonce`) ?? void 0;
            if (e.textContent === t && i === n && a === r) return;
          }
          let i = document.createElement(`script`);
          return (
            (i.textContent = t),
            dr(i, e),
            document.head.appendChild(i),
            () => i.remove()
          );
        }
      }
    }, [e, t, i]),
    i && typeof t == `string`)
  )
    return (0, k.jsx)(`script`, {
      ...e,
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: { __html: t },
    });
  if (!r) {
    if (e?.src)
      return (0, k.jsx)(`script`, { ...e, suppressHydrationWarning: !0 });
    if (typeof t == `string`)
      return (0, k.jsx)(`script`, {
        ...e,
        dangerouslySetInnerHTML: { __html: t },
        suppressHydrationWarning: !0,
      });
  }
  return null;
}
var mr = (e) => {
  let t = a(),
    n = t.options.ssr?.nonce,
    r = E(
      t.stores.matches,
      (e) => e.map((e) => e.meta).filter((e) => e !== void 0),
      _,
    ),
    i = O.useMemo(() => {
      let e = [],
        t = {},
        i;
      for (let a = r.length - 1; a >= 0; a--) {
        let o = r[a];
        for (let r = o.length - 1; r >= 0; r--) {
          let a = o[r];
          if (a)
            if (a.title) i ||= { tag: `title`, children: a.title };
            else if (`script:ld+json` in a)
              try {
                let t = JSON.stringify(a[`script:ld+json`]);
                e.push({
                  tag: `script`,
                  attrs: { type: `application/ld+json` },
                  children: fe(t),
                });
              } catch {}
            else {
              let r = a.name ?? a.property;
              if (r) {
                if (t[r]) continue;
                t[r] = !0;
              }
              e.push({ tag: `meta`, attrs: { ...a, nonce: n } });
            }
        }
      }
      return (
        i && e.push(i),
        n &&
          e.push({ tag: `meta`, attrs: { property: `csp-nonce`, content: n } }),
        e.reverse(),
        e
      );
    }, [r, n]),
    o = E(
      t.stores.matches,
      (e) =>
        e
          .flatMap((e) => e.links ?? [])
          .filter((e) => e !== void 0)
          .map((e) => ({ tag: `link`, attrs: { ...e, nonce: n } })),
      _,
    ),
    s = E(
      t.stores.matches,
      (r) => {
        let i = t.ssr?.manifest,
          a = [];
        return i
          ? (r.forEach((t) => {
              i.routes[t.routeId]?.css?.forEach((t) => {
                let r = Zt(t);
                a.push({
                  tag: `link`,
                  attrs: {
                    rel: `stylesheet`,
                    ...r,
                    crossOrigin: Kt(e, `stylesheet`) ?? r.crossOrigin,
                    suppressHydrationWarning: !0,
                    nonce: n,
                  },
                });
              });
            }),
            i.inlineStyle &&
              a.push({
                tag: `style`,
                attrs: { ...i.inlineStyle.attrs, nonce: n },
                children: i.inlineStyle.children,
                inlineCss: !0,
              }),
            a)
          : a;
      },
      _,
    ),
    c = E(
      t.stores.matches,
      (r) => {
        let i = [],
          a = t.ssr?.manifest;
        return (
          a &&
            r.forEach((t) => {
              a.routes[t.routeId]?.preloads?.forEach((t) => {
                i.push({ tag: `link`, attrs: { ...Jt(a, t, e), nonce: n } });
              });
            }),
          i
        );
      },
      _,
    ),
    l = E(
      t.stores.matches,
      (e) =>
        e
          .flatMap((e) => e.styles ?? [])
          .filter((e) => e !== void 0)
          .map(({ children: e, ...t }) => ({
            tag: `style`,
            attrs: { ...t, nonce: n },
            children: e,
          })),
      _,
    ),
    u = E(
      t.stores.matches,
      (e) =>
        e
          .flatMap((e) => e.headScripts ?? [])
          .filter((e) => e !== void 0)
          .map(({ children: e, ...t }) => ({
            tag: `script`,
            attrs: { ...t, nonce: n },
            children: e,
          })),
      _,
    ),
    d = [];
  return (
    Xt(d, i),
    d.push(...c),
    Xt(d, o),
    d.push(...s),
    Xt(d, l),
    Xt(d, u),
    d
  );
};
function hr(e) {
  let t = mr(e.assetCrossOrigin),
    n = a().options.ssr?.nonce;
  return (0, k.jsx)(k.Fragment, {
    children: t.map((e) =>
      (0, O.createElement)(fr, {
        ...e,
        key: `tsr-meta-${JSON.stringify(e)}`,
        nonce: n,
      }),
    ),
  });
}
var gr = () => {
  let e = a(),
    t = e.options.ssr?.nonce,
    n = (n) => {
      let r = [],
        i = e.ssr?.manifest;
      if (!i) return [];
      for (let e of n) {
        let n = i.routes[e.routeId]?.scripts;
        if (n)
          for (let e of n)
            r.push({
              tag: `script`,
              attrs: { ...e.attrs, nonce: t },
              children: e.children,
              ...(typeof e.attrs?.src == `string`
                ? { preventScriptHoist: !0 }
                : {}),
            });
      }
      return r;
    },
    r = (e) =>
      e
        .map((e) => e.scripts)
        .flat(1)
        .filter(Boolean)
        .map(({ children: e, ...n }) => ({
          tag: `script`,
          attrs: { ...n, suppressHydrationWarning: !0, nonce: t },
          children: e,
        })),
    i = E(e.stores.matches, n, _);
  return _r(e, E(e.stores.matches, r, _), i);
};
function _r(e, t, n) {
  let r = [...t, ...n];
  return (0, k.jsx)(k.Fragment, {
    children: r.map((e, t) =>
      (0, O.createElement)(fr, { ...e, key: `tsr-scripts-${e.tag}-${t}` }),
    ),
  });
}
var vr = (e, t) => {
  let n = { type: `request`, ...(t || e) },
    r = (e) => vr({}, Object.assign(n, { validator: e, inputValidator: e }));
  return {
    options: n,
    middleware: (e) => vr({}, Object.assign(n, { middleware: e })),
    validator: r,
    inputValidator: r,
    client: (e) => vr({}, Object.assign(n, { client: e })),
    server: (e) => vr({}, Object.assign(n, { server: e })),
  };
};
function yr(e, t) {
  for (let n = 0, r = t.length; n < r; n++) {
    let r = t[n];
    e.has(r) || (e.add(r), r.extends && yr(e, r.extends));
  }
}
var br = (e) => ({
    getOptions: async () => {
      let t = await e();
      if (t.serializationAdapters) {
        let e = new Set();
        (yr(e, t.serializationAdapters),
          (t.serializationAdapters = Array.from(e)));
      }
      return t;
    },
    createMiddleware: vr,
  }),
  xr = function () {
    return (
      (xr =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in ((t = arguments[n]), t))
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        }),
      xr.apply(this, arguments)
    );
  };
function Sr(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`)
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
function Cr(e, t, n, r) {
  function i(e) {
    return e instanceof n
      ? e
      : new n(function (t) {
          t(e);
        });
  }
  return new (n ||= Promise)(function (n, a) {
    function o(e) {
      try {
        c(r.next(e));
      } catch (e) {
        a(e);
      }
    }
    function s(e) {
      try {
        c(r.throw(e));
      } catch (e) {
        a(e);
      }
    }
    function c(e) {
      e.done ? n(e.value) : i(e.value).then(o, s);
    }
    c((r = r.apply(e, t || [])).next());
  });
}
function wr(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, a; r < i; r++)
      (a || !(r in t)) &&
        ((a ||= Array.prototype.slice.call(t, 0, r)), (a[r] = t[r]));
  return e.concat(a || Array.prototype.slice.call(t));
}
var Tr = (e) => (e ? (...t) => e(...t) : (...e) => fetch(...e)),
  Er = class extends Error {
    constructor(e, t = `FunctionsError`, n) {
      (super(e), (this.name = t), (this.context = n));
    }
    toJSON() {
      return { name: this.name, message: this.message, context: this.context };
    }
  },
  Dr = class extends Er {
    constructor(e) {
      super(
        `Failed to send a request to the Edge Function`,
        `FunctionsFetchError`,
        e,
      );
    }
  },
  Or = class extends Er {
    constructor(e) {
      super(`Relay Error invoking the Edge Function`, `FunctionsRelayError`, e);
    }
  },
  kr = class extends Er {
    constructor(e) {
      super(
        `Edge Function returned a non-2xx status code`,
        `FunctionsHttpError`,
        e,
      );
    }
  },
  Ar;
(function (e) {
  ((e.Any = `any`),
    (e.ApNortheast1 = `ap-northeast-1`),
    (e.ApNortheast2 = `ap-northeast-2`),
    (e.ApSouth1 = `ap-south-1`),
    (e.ApSoutheast1 = `ap-southeast-1`),
    (e.ApSoutheast2 = `ap-southeast-2`),
    (e.CaCentral1 = `ca-central-1`),
    (e.EuCentral1 = `eu-central-1`),
    (e.EuWest1 = `eu-west-1`),
    (e.EuWest2 = `eu-west-2`),
    (e.EuWest3 = `eu-west-3`),
    (e.SaEast1 = `sa-east-1`),
    (e.UsEast1 = `us-east-1`),
    (e.UsWest1 = `us-west-1`),
    (e.UsWest2 = `us-west-2`));
})((Ar ||= {}));
var jr = class {
    constructor(
      e,
      { headers: t = {}, customFetch: n, region: r = Ar.Any } = {},
    ) {
      ((this.url = e),
        (this.headers = t),
        (this.region = r),
        (this.fetch = Tr(n)));
    }
    setAuth(e) {
      this.headers.Authorization = `Bearer ${e}`;
    }
    invoke(e) {
      return Cr(this, arguments, void 0, function* (e, t = {}) {
        var n;
        let r, i, a;
        try {
          let { headers: n, method: o, body: s, signal: c, timeout: l } = t,
            u = {},
            { region: d } = t;
          d ||= this.region;
          let f = new URL(`${this.url}/${e}`);
          d &&
            d !== `any` &&
            ((u[`x-region`] = d), f.searchParams.set(`forceFunctionRegion`, d));
          let p,
            m =
              !!n &&
              Object.keys(n).some((e) => e.toLowerCase() === `content-type`);
          s && !m
            ? (typeof Blob < `u` && s instanceof Blob) ||
              s instanceof ArrayBuffer
              ? ((u[`Content-Type`] = `application/octet-stream`), (p = s))
              : typeof s == `string`
                ? ((u[`Content-Type`] = `text/plain`), (p = s))
                : typeof FormData < `u` && s instanceof FormData
                  ? (p = s)
                  : ((u[`Content-Type`] = `application/json`),
                    (p = JSON.stringify(s)))
            : (p =
                s &&
                typeof s != `string` &&
                !(typeof Blob < `u` && s instanceof Blob) &&
                !(s instanceof ArrayBuffer) &&
                !(typeof FormData < `u` && s instanceof FormData)
                  ? JSON.stringify(s)
                  : s);
          let h = c;
          l &&
            ((i = new AbortController()),
            (r = setTimeout(() => i.abort(), l)),
            c
              ? ((h = i.signal),
                (a = () => i.abort()),
                c.addEventListener(`abort`, a))
              : (h = i.signal));
          let g = yield this.fetch(f.toString(), {
              method: o || `POST`,
              headers: Object.assign(
                Object.assign(Object.assign({}, u), this.headers),
                n,
              ),
              body: p,
              signal: h,
            }).catch((e) => {
              throw new Dr(e);
            }),
            _ = g.headers.get(`x-relay-error`);
          if (_ && _ === `true`) throw new Or(g);
          if (!g.ok) throw new kr(g);
          let v = (g.headers.get(`Content-Type`) ?? `text/plain`)
              .split(`;`)[0]
              .trim()
              .toLowerCase(),
            y;
          return (
            (y =
              v === `application/json`
                ? yield g.json()
                : v === `application/octet-stream` || v === `application/pdf`
                  ? yield g.blob()
                  : v === `text/event-stream`
                    ? g
                    : v === `multipart/form-data`
                      ? yield g.formData()
                      : yield g.text()),
            { data: y, error: null, response: g }
          );
        } catch (e) {
          return {
            data: null,
            error: e,
            response: e instanceof kr || e instanceof Or ? e.context : void 0,
          };
        } finally {
          (r && clearTimeout(r),
            a && ((n = t.signal) == null || n.removeEventListener(`abort`, a)));
        }
      });
    }
  },
  Mr = 3,
  Nr = (e) => Math.min(1e3 * 2 ** e, 3e4),
  Pr = [520, 503],
  Fr = [`GET`, `HEAD`, `OPTIONS`],
  Ir = class extends Error {
    constructor(e) {
      (super(e.message),
        (this.name = `PostgrestError`),
        (this.details = e.details),
        (this.hint = e.hint),
        (this.code = e.code));
    }
    toJSON() {
      return {
        name: this.name,
        message: this.message,
        details: this.details,
        hint: this.hint,
        code: this.code,
      };
    }
  };
function Lr(e, t) {
  return new Promise((n) => {
    if (t?.aborted) {
      n();
      return;
    }
    let r = setTimeout(() => {
      (t?.removeEventListener(`abort`, i), n());
    }, e);
    function i() {
      (clearTimeout(r), n());
    }
    t?.addEventListener(`abort`, i);
  });
}
function Rr(e, t, n, r) {
  return !(!r || n >= Mr || !Fr.includes(e) || !Pr.includes(t));
}
var zr = class {
    constructor(e) {
      ((this.shouldThrowOnError = !1),
        (this.retryEnabled = !0),
        (this.method = e.method),
        (this.url = e.url),
        (this.headers = new Headers(e.headers)),
        (this.schema = e.schema),
        (this.body = e.body),
        (this.shouldThrowOnError = e.shouldThrowOnError ?? !1),
        (this.signal = e.signal),
        (this.isMaybeSingle = e.isMaybeSingle ?? !1),
        (this.shouldStripNulls = e.shouldStripNulls ?? !1),
        (this.urlLengthLimit = e.urlLengthLimit ?? 8e3),
        (this.retryEnabled = e.retry ?? !0),
        e.fetch ? (this.fetch = e.fetch) : (this.fetch = fetch));
    }
    throwOnError() {
      return ((this.shouldThrowOnError = !0), this);
    }
    stripNulls() {
      if (this.headers.get(`Accept`) === `text/csv`)
        throw Error(`stripNulls() cannot be used with csv()`);
      return ((this.shouldStripNulls = !0), this);
    }
    setHeader(e, t) {
      return (
        (this.headers = new Headers(this.headers)),
        this.headers.set(e, t),
        this
      );
    }
    retry(e) {
      return ((this.retryEnabled = e), this);
    }
    then(e, t) {
      var n = this;
      if (
        (this.schema === void 0 ||
          ([`GET`, `HEAD`].includes(this.method)
            ? this.headers.set(`Accept-Profile`, this.schema)
            : this.headers.set(`Content-Profile`, this.schema)),
        this.method !== `GET` &&
          this.method !== `HEAD` &&
          this.headers.set(`Content-Type`, `application/json`),
        this.shouldStripNulls)
      ) {
        let e = this.headers.get(`Accept`);
        e === `application/vnd.pgrst.object+json`
          ? this.headers.set(
              `Accept`,
              `application/vnd.pgrst.object+json;nulls=stripped`,
            )
          : (!e || e === `application/json`) &&
            this.headers.set(
              `Accept`,
              `application/vnd.pgrst.array+json;nulls=stripped`,
            );
      }
      let r = this.fetch,
        i = (async () => {
          let e = 0;
          for (;;) {
            let t = {};
            (n.headers.forEach((e, n) => {
              t[n] = e;
            }),
              e > 0 && (t[`X-Retry-Count`] = String(e)));
            let i;
            try {
              i = await r(n.url.toString(), {
                method: n.method,
                headers: t,
                body: JSON.stringify(n.body, (e, t) =>
                  typeof t == `bigint` ? t.toString() : t,
                ),
                signal: n.signal,
              });
            } catch (t) {
              if (
                t?.name === `AbortError` ||
                t?.code === `ABORT_ERR` ||
                !Fr.includes(n.method)
              )
                throw t;
              if (n.retryEnabled && e < Mr) {
                let t = Nr(e);
                (e++, await Lr(t, n.signal));
                continue;
              }
              throw t;
            }
            if (Rr(n.method, i.status, e, n.retryEnabled)) {
              let t = i.headers?.get(`Retry-After`) ?? null,
                r =
                  t === null ? Nr(e) : Math.max(0, parseInt(t, 10) || 0) * 1e3;
              (await i.text(), e++, await Lr(r, n.signal));
              continue;
            }
            return await n.processResponse(i);
          }
        })();
      return (
        this.shouldThrowOnError ||
          (i = i.catch((e) => {
            let t = ``,
              n = ``,
              r = ``,
              i = e?.cause;
            if (i) {
              let n = i?.message ?? ``,
                r = i?.code ?? ``;
              ((t = `${e?.name ?? `FetchError`}: ${e?.message}`),
                (t += `\n\nCaused by: ${i?.name ?? `Error`}: ${n}`),
                r && (t += ` (${r})`),
                i?.stack && (t += `\n${i.stack}`));
            } else t = e?.stack ?? ``;
            let a = this.url.toString().length;
            return (
              e?.name === `AbortError` || e?.code === `ABORT_ERR`
                ? ((r = ``),
                  (n = `Request was aborted (timeout or manual cancellation)`),
                  a > this.urlLengthLimit &&
                    (n += `. Note: Your request URL is ${a} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`))
                : (i?.name === `HeadersOverflowError` ||
                    i?.code === `UND_ERR_HEADERS_OVERFLOW`) &&
                  ((r = ``),
                  (n = `HTTP headers exceeded server limits (typically 16KB)`),
                  a > this.urlLengthLimit &&
                    (n += `. Your request URL is ${a} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),
              {
                success: !1,
                error: {
                  message: `${e?.name ?? `FetchError`}: ${e?.message}`,
                  details: t,
                  hint: n,
                  code: r,
                },
                data: null,
                count: null,
                status: 0,
                statusText: ``,
              }
            );
          })),
        i.then(e, t)
      );
    }
    async processResponse(e) {
      var t = this;
      let n = null,
        r = null,
        i = null,
        a = e.status,
        o = e.statusText;
      if (e.ok) {
        if (t.method !== `HEAD`) {
          let i = await e.text();
          if (i !== ``)
            if (t.headers.get(`Accept`) === `text/csv`) r = i;
            else if (
              t.headers.get(`Accept`) &&
              t.headers
                .get(`Accept`)
                ?.includes(`application/vnd.pgrst.plan+text`)
            )
              r = i;
            else
              try {
                r = JSON.parse(i);
              } catch {
                if (((n = { message: i }), (r = null), t.shouldThrowOnError))
                  throw new Ir({ message: i, details: ``, hint: ``, code: `` });
              }
        }
        let s = t.headers
            .get(`Prefer`)
            ?.match(/count=(exact|planned|estimated)/),
          c = e.headers.get(`content-range`)?.split(`/`);
        (s && c && c.length > 1 && (i = parseInt(c[1])),
          t.isMaybeSingle &&
            Array.isArray(r) &&
            (r.length > 1
              ? ((n = {
                  code: `PGRST116`,
                  details: `Results contain ${r.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                  hint: null,
                  message: `JSON object requested, multiple (or no) rows returned`,
                }),
                (r = null),
                (i = null),
                (a = 406),
                (o = `Not Acceptable`))
              : (r = r.length === 1 ? r[0] : null)));
      } else {
        let i = await e.text();
        try {
          ((n = JSON.parse(i)),
            Array.isArray(n) &&
              e.status === 404 &&
              ((r = []), (n = null), (a = 200), (o = `OK`)));
        } catch {
          e.status === 404 && i === ``
            ? ((a = 204), (o = `No Content`))
            : (n = { message: i });
        }
        if (n && t.shouldThrowOnError) throw new Ir(n);
      }
      return {
        success: n === null,
        error: n,
        data: r,
        count: i,
        status: a,
        statusText: o,
      };
    }
    returns() {
      return this;
    }
    overrideTypes() {
      return this;
    }
  },
  Br = class extends zr {
    throwOnError() {
      return super.throwOnError();
    }
    select(e) {
      let t = !1,
        n = (e ?? `*`)
          .split(``)
          .map((e) => (/\s/.test(e) && !t ? `` : (e === `"` && (t = !t), e)))
          .join(``);
      return (
        this.url.searchParams.set(`select`, n),
        this.headers.append(`Prefer`, `return=representation`),
        this
      );
    }
    order(
      e,
      {
        ascending: t = !0,
        nullsFirst: n,
        foreignTable: r,
        referencedTable: i = r,
      } = {},
    ) {
      let a = i ? `${i}.order` : `order`,
        o = this.url.searchParams.get(a);
      return (
        this.url.searchParams.set(
          a,
          `${o ? `${o},` : ``}${e}.${t ? `asc` : `desc`}${n === void 0 ? `` : n ? `.nullsfirst` : `.nullslast`}`,
        ),
        this
      );
    }
    limit(e, { foreignTable: t, referencedTable: n = t } = {}) {
      let r = n === void 0 ? `limit` : `${n}.limit`;
      return (this.url.searchParams.set(r, `${e}`), this);
    }
    range(e, t, { foreignTable: n, referencedTable: r = n } = {}) {
      let i = r === void 0 ? `offset` : `${r}.offset`,
        a = r === void 0 ? `limit` : `${r}.limit`;
      return (
        this.url.searchParams.set(i, `${e}`),
        this.url.searchParams.set(a, `${t - e + 1}`),
        this
      );
    }
    abortSignal(e) {
      return ((this.signal = e), this);
    }
    single() {
      return (
        this.headers.set(`Accept`, `application/vnd.pgrst.object+json`),
        this
      );
    }
    maybeSingle() {
      return ((this.isMaybeSingle = !0), this);
    }
    csv() {
      return (this.headers.set(`Accept`, `text/csv`), this);
    }
    geojson() {
      return (this.headers.set(`Accept`, `application/geo+json`), this);
    }
    explain({
      analyze: e = !1,
      verbose: t = !1,
      settings: n = !1,
      buffers: r = !1,
      wal: i = !1,
      format: a = `text`,
    } = {}) {
      let o = [
          e ? `analyze` : null,
          t ? `verbose` : null,
          n ? `settings` : null,
          r ? `buffers` : null,
          i ? `wal` : null,
        ]
          .filter(Boolean)
          .join(`|`),
        s = this.headers.get(`Accept`) ?? `application/json`;
      return (
        this.headers.set(
          `Accept`,
          `application/vnd.pgrst.plan+${a}; for="${s}"; options=${o};`,
        ),
        this
      );
    }
    rollback() {
      return (this.headers.append(`Prefer`, `tx=rollback`), this);
    }
    returns() {
      return this;
    }
    maxAffected(e) {
      return (
        this.headers.append(`Prefer`, `handling=strict`),
        this.headers.append(`Prefer`, `max-affected=${e}`),
        this
      );
    }
  },
  Vr = RegExp(`[,()]`),
  Hr = class extends Br {
    throwOnError() {
      return super.throwOnError();
    }
    eq(e, t) {
      return (this.url.searchParams.append(e, `eq.${t}`), this);
    }
    neq(e, t) {
      return (this.url.searchParams.append(e, `neq.${t}`), this);
    }
    gt(e, t) {
      return (this.url.searchParams.append(e, `gt.${t}`), this);
    }
    gte(e, t) {
      return (this.url.searchParams.append(e, `gte.${t}`), this);
    }
    lt(e, t) {
      return (this.url.searchParams.append(e, `lt.${t}`), this);
    }
    lte(e, t) {
      return (this.url.searchParams.append(e, `lte.${t}`), this);
    }
    like(e, t) {
      return (this.url.searchParams.append(e, `like.${t}`), this);
    }
    likeAllOf(e, t) {
      return (
        this.url.searchParams.append(e, `like(all).{${t.join(`,`)}}`),
        this
      );
    }
    likeAnyOf(e, t) {
      return (
        this.url.searchParams.append(e, `like(any).{${t.join(`,`)}}`),
        this
      );
    }
    ilike(e, t) {
      return (this.url.searchParams.append(e, `ilike.${t}`), this);
    }
    ilikeAllOf(e, t) {
      return (
        this.url.searchParams.append(e, `ilike(all).{${t.join(`,`)}}`),
        this
      );
    }
    ilikeAnyOf(e, t) {
      return (
        this.url.searchParams.append(e, `ilike(any).{${t.join(`,`)}}`),
        this
      );
    }
    regexMatch(e, t) {
      return (this.url.searchParams.append(e, `match.${t}`), this);
    }
    regexIMatch(e, t) {
      return (this.url.searchParams.append(e, `imatch.${t}`), this);
    }
    is(e, t) {
      return (this.url.searchParams.append(e, `is.${t}`), this);
    }
    isDistinct(e, t) {
      return (this.url.searchParams.append(e, `isdistinct.${t}`), this);
    }
    in(e, t) {
      let n = Array.from(new Set(t))
        .map((e) => (typeof e == `string` && Vr.test(e) ? `"${e}"` : `${e}`))
        .join(`,`);
      return (this.url.searchParams.append(e, `in.(${n})`), this);
    }
    notIn(e, t) {
      let n = Array.from(new Set(t))
        .map((e) => (typeof e == `string` && Vr.test(e) ? `"${e}"` : `${e}`))
        .join(`,`);
      return (this.url.searchParams.append(e, `not.in.(${n})`), this);
    }
    contains(e, t) {
      return (
        typeof t == `string`
          ? this.url.searchParams.append(e, `cs.${t}`)
          : Array.isArray(t)
            ? this.url.searchParams.append(e, `cs.{${t.join(`,`)}}`)
            : this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`),
        this
      );
    }
    containedBy(e, t) {
      return (
        typeof t == `string`
          ? this.url.searchParams.append(e, `cd.${t}`)
          : Array.isArray(t)
            ? this.url.searchParams.append(e, `cd.{${t.join(`,`)}}`)
            : this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`),
        this
      );
    }
    rangeGt(e, t) {
      return (this.url.searchParams.append(e, `sr.${t}`), this);
    }
    rangeGte(e, t) {
      return (this.url.searchParams.append(e, `nxl.${t}`), this);
    }
    rangeLt(e, t) {
      return (this.url.searchParams.append(e, `sl.${t}`), this);
    }
    rangeLte(e, t) {
      return (this.url.searchParams.append(e, `nxr.${t}`), this);
    }
    rangeAdjacent(e, t) {
      return (this.url.searchParams.append(e, `adj.${t}`), this);
    }
    overlaps(e, t) {
      return (
        typeof t == `string`
          ? this.url.searchParams.append(e, `ov.${t}`)
          : this.url.searchParams.append(e, `ov.{${t.join(`,`)}}`),
        this
      );
    }
    textSearch(e, t, { config: n, type: r } = {}) {
      let i = ``;
      r === `plain`
        ? (i = `pl`)
        : r === `phrase`
          ? (i = `ph`)
          : r === `websearch` && (i = `w`);
      let a = n === void 0 ? `` : `(${n})`;
      return (this.url.searchParams.append(e, `${i}fts${a}.${t}`), this);
    }
    match(e) {
      return (
        Object.entries(e)
          .filter(([e, t]) => t !== void 0)
          .forEach(([e, t]) => {
            this.url.searchParams.append(e, `eq.${t}`);
          }),
        this
      );
    }
    not(e, t, n) {
      return (this.url.searchParams.append(e, `not.${t}.${n}`), this);
    }
    or(e, { foreignTable: t, referencedTable: n = t } = {}) {
      let r = n ? `${n}.or` : `or`;
      return (this.url.searchParams.append(r, `(${e})`), this);
    }
    filter(e, t, n) {
      return (this.url.searchParams.append(e, `${t}.${n}`), this);
    }
  },
  Ur = class {
    constructor(
      e,
      {
        headers: t = {},
        schema: n,
        fetch: r,
        urlLengthLimit: i = 8e3,
        retry: a,
      },
    ) {
      ((this.url = e),
        (this.headers = new Headers(t)),
        (this.schema = n),
        (this.fetch = r),
        (this.urlLengthLimit = i),
        (this.retry = a));
    }
    cloneRequestState() {
      return {
        url: new URL(this.url.toString()),
        headers: new Headers(this.headers),
      };
    }
    select(e, t) {
      let { head: n = !1, count: r } = t ?? {},
        i = n ? `HEAD` : `GET`,
        a = !1,
        o = (e ?? `*`)
          .split(``)
          .map((e) => (/\s/.test(e) && !a ? `` : (e === `"` && (a = !a), e)))
          .join(``),
        { url: s, headers: c } = this.cloneRequestState();
      return (
        s.searchParams.set(`select`, o),
        r && c.append(`Prefer`, `count=${r}`),
        new Hr({
          method: i,
          url: s,
          headers: c,
          schema: this.schema,
          fetch: this.fetch,
          urlLengthLimit: this.urlLengthLimit,
          retry: this.retry,
        })
      );
    }
    insert(e, { count: t, defaultToNull: n = !0 } = {}) {
      let { url: r, headers: i } = this.cloneRequestState();
      if (
        (t && i.append(`Prefer`, `count=${t}`),
        n || i.append(`Prefer`, `missing=default`),
        Array.isArray(e))
      ) {
        let t = e.reduce((e, t) => e.concat(Object.keys(t)), []);
        if (t.length > 0) {
          let e = [...new Set(t)].map((e) => `"${e}"`);
          r.searchParams.set(`columns`, e.join(`,`));
        }
      }
      return new Hr({
        method: `POST`,
        url: r,
        headers: i,
        schema: this.schema,
        body: e,
        fetch: this.fetch ?? fetch,
        urlLengthLimit: this.urlLengthLimit,
        retry: this.retry,
      });
    }
    upsert(
      e,
      {
        onConflict: t,
        ignoreDuplicates: n = !1,
        count: r,
        defaultToNull: i = !0,
      } = {},
    ) {
      let { url: a, headers: o } = this.cloneRequestState();
      if (
        (o.append(`Prefer`, `resolution=${n ? `ignore` : `merge`}-duplicates`),
        t !== void 0 && a.searchParams.set(`on_conflict`, t),
        r && o.append(`Prefer`, `count=${r}`),
        i || o.append(`Prefer`, `missing=default`),
        Array.isArray(e))
      ) {
        let t = e.reduce((e, t) => e.concat(Object.keys(t)), []);
        if (t.length > 0) {
          let e = [...new Set(t)].map((e) => `"${e}"`);
          a.searchParams.set(`columns`, e.join(`,`));
        }
      }
      return new Hr({
        method: `POST`,
        url: a,
        headers: o,
        schema: this.schema,
        body: e,
        fetch: this.fetch ?? fetch,
        urlLengthLimit: this.urlLengthLimit,
        retry: this.retry,
      });
    }
    update(e, { count: t } = {}) {
      let { url: n, headers: r } = this.cloneRequestState();
      return (
        t && r.append(`Prefer`, `count=${t}`),
        new Hr({
          method: `PATCH`,
          url: n,
          headers: r,
          schema: this.schema,
          body: e,
          fetch: this.fetch ?? fetch,
          urlLengthLimit: this.urlLengthLimit,
          retry: this.retry,
        })
      );
    }
    delete({ count: e } = {}) {
      let { url: t, headers: n } = this.cloneRequestState();
      return (
        e && n.append(`Prefer`, `count=${e}`),
        new Hr({
          method: `DELETE`,
          url: t,
          headers: n,
          schema: this.schema,
          fetch: this.fetch ?? fetch,
          urlLengthLimit: this.urlLengthLimit,
          retry: this.retry,
        })
      );
    }
  };
function Wr(e) {
  "@babel/helpers - typeof";
  return (
    (Wr =
      typeof Symbol == `function` && typeof Symbol.iterator == `symbol`
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == `function` &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? `symbol`
              : typeof e;
          }),
    Wr(e)
  );
}
function Gr(e, t) {
  if (Wr(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (Wr(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Kr(e) {
  var t = Gr(e, `string`);
  return Wr(t) == `symbol` ? t : t + ``;
}
function qr(e, t, n) {
  return (
    (t = Kr(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Jr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Yr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Jr(Object(n), !0).forEach(function (t) {
          qr(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Jr(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Xr = class e {
    constructor(
      e,
      {
        headers: t = {},
        schema: n,
        fetch: r,
        timeout: i,
        urlLengthLimit: a = 8e3,
        retry: o,
      } = {},
    ) {
      ((this.url = e),
        (this.headers = new Headers(t)),
        (this.schemaName = n),
        (this.urlLengthLimit = a));
      let s = r ?? globalThis.fetch;
      (i !== void 0 && i > 0
        ? (this.fetch = (e, t) => {
            let n = new AbortController(),
              r = setTimeout(() => n.abort(), i),
              a = t?.signal;
            if (a) {
              if (a.aborted) return (clearTimeout(r), s(e, t));
              let i = () => {
                (clearTimeout(r), n.abort());
              };
              return (
                a.addEventListener(`abort`, i, { once: !0 }),
                s(e, Yr(Yr({}, t), {}, { signal: n.signal })).finally(() => {
                  (clearTimeout(r), a.removeEventListener(`abort`, i));
                })
              );
            }
            return s(e, Yr(Yr({}, t), {}, { signal: n.signal })).finally(() =>
              clearTimeout(r),
            );
          })
        : (this.fetch = s),
        (this.retry = o));
    }
    from(e) {
      if (!e || typeof e != `string` || e.trim() === ``)
        throw Error(
          `Invalid relation name: relation must be a non-empty string.`,
        );
      return new Ur(new URL(`${this.url}/${e}`), {
        headers: new Headers(this.headers),
        schema: this.schemaName,
        fetch: this.fetch,
        urlLengthLimit: this.urlLengthLimit,
        retry: this.retry,
      });
    }
    schema(t) {
      return new e(this.url, {
        headers: this.headers,
        schema: t,
        fetch: this.fetch,
        urlLengthLimit: this.urlLengthLimit,
        retry: this.retry,
      });
    }
    rpc(e, t = {}, { head: n = !1, get: r = !1, count: i } = {}) {
      let a,
        o = new URL(`${this.url}/rpc/${e}`),
        s,
        c = (e) =>
          typeof e == `object` && !!e && (!Array.isArray(e) || e.some(c)),
        l = n && Object.values(t).some(c);
      l
        ? ((a = `POST`), (s = t))
        : n || r
          ? ((a = n ? `HEAD` : `GET`),
            Object.entries(t)
              .filter(([e, t]) => t !== void 0)
              .map(([e, t]) => [
                e,
                Array.isArray(t) ? `{${t.join(`,`)}}` : `${t}`,
              ])
              .forEach(([e, t]) => {
                o.searchParams.append(e, t);
              }))
          : ((a = `POST`), (s = t));
      let u = new Headers(this.headers);
      return (
        l
          ? u.set(`Prefer`, i ? `count=${i},return=minimal` : `return=minimal`)
          : i && u.set(`Prefer`, `count=${i}`),
        new Hr({
          method: a,
          url: o,
          headers: u,
          schema: this.schemaName,
          body: s,
          fetch: this.fetch ?? fetch,
          urlLengthLimit: this.urlLengthLimit,
          retry: this.retry,
        })
      );
    }
  },
  Zr = class {
    constructor() {}
    static detectEnvironment() {
      if (typeof WebSocket < `u`)
        return { type: `native`, wsConstructor: WebSocket };
      let e = globalThis;
      if (typeof globalThis < `u` && e.WebSocket !== void 0)
        return { type: `native`, wsConstructor: e.WebSocket };
      let t = typeof global < `u` ? global : void 0;
      if (t && t.WebSocket !== void 0)
        return { type: `native`, wsConstructor: t.WebSocket };
      if (
        typeof globalThis < `u` &&
        e.WebSocketPair !== void 0 &&
        globalThis.WebSocket === void 0
      )
        return {
          type: `cloudflare`,
          error: `Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.`,
          workaround: `Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime.`,
        };
      if (
        (typeof globalThis < `u` && e.EdgeRuntime) ||
        (typeof navigator < `u` && navigator.userAgent?.includes(`Vercel-Edge`))
      )
        return {
          type: `unsupported`,
          error: `Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.`,
          workaround: `Use serverless functions or a different deployment target for WebSocket functionality.`,
        };
      let n = globalThis.process;
      if (n) {
        let e = n.versions;
        if (e && e.node)
          return {
            type: `unsupported`,
            error: `Node.js detected but native WebSocket not found.`,
            workaround: `Ensure you are running Node.js 22+ or provide a WebSocket implementation via the transport option.`,
          };
      }
      return {
        type: `unsupported`,
        error: `Unknown JavaScript runtime without WebSocket support.`,
        workaround: `Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation.`,
      };
    }
    static getWebSocketConstructor() {
      let e = this.detectEnvironment();
      if (e.wsConstructor) return e.wsConstructor;
      let t = e.error || `WebSocket not supported in this environment.`;
      throw (
        e.workaround && (t += `\n\nSuggested solution: ${e.workaround}`),
        Error(t)
      );
    }
    static isWebSocketSupported() {
      try {
        return this.detectEnvironment().type === `native`;
      } catch {
        return !1;
      }
    }
  },
  Qr = `realtime-js/2.111.0`,
  $r = `1.0.0`,
  ei = `2.0.0`,
  ti = ei,
  ni = 1e4,
  ri = {
    closed: `closed`,
    errored: `errored`,
    joined: `joined`,
    joining: `joining`,
    leaving: `leaving`,
  },
  ii = {
    close: `phx_close`,
    error: `phx_error`,
    join: `phx_join`,
    reply: `phx_reply`,
    leave: `phx_leave`,
    access_token: `access_token`,
  },
  ai = {
    connecting: `connecting`,
    open: `open`,
    closing: `closing`,
    closed: `closed`,
  },
  oi = class {
    constructor(e) {
      ((this.HEADER_LENGTH = 1),
        (this.USER_BROADCAST_PUSH_META_LENGTH = 6),
        (this.KINDS = { userBroadcastPush: 3, userBroadcast: 4 }),
        (this.BINARY_ENCODING = 0),
        (this.JSON_ENCODING = 1),
        (this.BROADCAST_EVENT = `broadcast`),
        (this.allowedMetadataKeys = []),
        (this.allowedMetadataKeys = e ?? []));
    }
    encode(e, t) {
      if (
        e.event === this.BROADCAST_EVENT &&
        !(e.payload instanceof ArrayBuffer) &&
        typeof e.payload.event == `string`
      )
        return t(this._binaryEncodeUserBroadcastPush(e));
      let n = [e.join_ref, e.ref, e.topic, e.event, e.payload];
      return t(JSON.stringify(n));
    }
    _binaryEncodeUserBroadcastPush(e) {
      return this._isArrayBuffer(e.payload?.payload)
        ? this._encodeBinaryUserBroadcastPush(e)
        : this._encodeJsonUserBroadcastPush(e);
    }
    _encodeBinaryUserBroadcastPush(e) {
      let t = e.payload?.payload ?? new ArrayBuffer(0);
      return this._encodeUserBroadcastPush(e, this.BINARY_ENCODING, t);
    }
    _encodeJsonUserBroadcastPush(e) {
      let t = e.payload?.payload ?? {},
        n = new TextEncoder().encode(JSON.stringify(t)).buffer;
      return this._encodeUserBroadcastPush(e, this.JSON_ENCODING, n);
    }
    _encodeUserBroadcastPush(e, t, n) {
      let r = new TextEncoder(),
        i = r.encode(e.topic),
        a = r.encode(e.ref ?? ``),
        o = r.encode(e.join_ref ?? ``),
        s = r.encode(e.payload.event),
        c = this.allowedMetadataKeys
          ? this._pick(e.payload, this.allowedMetadataKeys)
          : {},
        l = r.encode(Object.keys(c).length === 0 ? `` : JSON.stringify(c));
      if (o.length > 255)
        throw Error(`joinRef length ${o.length} exceeds maximum of 255`);
      if (a.length > 255)
        throw Error(`ref length ${a.length} exceeds maximum of 255`);
      if (i.length > 255)
        throw Error(`topic length ${i.length} exceeds maximum of 255`);
      if (s.length > 255)
        throw Error(`userEvent length ${s.length} exceeds maximum of 255`);
      if (l.length > 255)
        throw Error(`metadata length ${l.length} exceeds maximum of 255`);
      let u =
          this.USER_BROADCAST_PUSH_META_LENGTH +
          o.length +
          a.length +
          i.length +
          s.length +
          l.length,
        d = new ArrayBuffer(this.HEADER_LENGTH + u),
        f = new DataView(d),
        p = new Uint8Array(d),
        m = 0;
      (f.setUint8(m++, this.KINDS.userBroadcastPush),
        f.setUint8(m++, o.length),
        f.setUint8(m++, a.length),
        f.setUint8(m++, i.length),
        f.setUint8(m++, s.length),
        f.setUint8(m++, l.length),
        f.setUint8(m++, t),
        p.set(o, m),
        (m += o.length),
        p.set(a, m),
        (m += a.length),
        p.set(i, m),
        (m += i.length),
        p.set(s, m),
        (m += s.length),
        p.set(l, m),
        (m += l.length));
      var h = new Uint8Array(d.byteLength + n.byteLength);
      return (
        h.set(new Uint8Array(d), 0),
        h.set(new Uint8Array(n), d.byteLength),
        h.buffer
      );
    }
    decode(e, t) {
      if (this._isArrayBuffer(e)) return t(this._binaryDecode(e));
      if (typeof e == `string`) {
        let [n, r, i, a, o] = JSON.parse(e);
        return t({ join_ref: n, ref: r, topic: i, event: a, payload: o });
      }
      return t({});
    }
    _binaryDecode(e) {
      let t = new DataView(e),
        n = t.getUint8(0),
        r = new TextDecoder();
      switch (n) {
        case this.KINDS.userBroadcast:
          return this._decodeUserBroadcast(e, t, r);
      }
    }
    _decodeUserBroadcast(e, t, n) {
      let r = t.getUint8(1),
        i = t.getUint8(2),
        a = t.getUint8(3),
        o = t.getUint8(4),
        s = this.HEADER_LENGTH + 4,
        c = n.decode(e.slice(s, s + r));
      s += r;
      let l = n.decode(e.slice(s, s + i));
      s += i;
      let u = n.decode(e.slice(s, s + a));
      s += a;
      let d = e.slice(s, e.byteLength),
        f = o === this.JSON_ENCODING ? JSON.parse(n.decode(d)) : d,
        p = { type: this.BROADCAST_EVENT, event: l, payload: f };
      return (
        a > 0 && (p.meta = JSON.parse(u)),
        {
          join_ref: null,
          ref: null,
          topic: c,
          event: this.BROADCAST_EVENT,
          payload: p,
        }
      );
    }
    _isArrayBuffer(e) {
      return e instanceof ArrayBuffer || e?.constructor?.name === `ArrayBuffer`;
    }
    _pick(e, t) {
      return !e || typeof e != `object`
        ? {}
        : Object.fromEntries(Object.entries(e).filter(([e]) => t.includes(e)));
    }
  },
  N;
(function (e) {
  ((e.abstime = `abstime`),
    (e.bool = `bool`),
    (e.date = `date`),
    (e.daterange = `daterange`),
    (e.float4 = `float4`),
    (e.float8 = `float8`),
    (e.int2 = `int2`),
    (e.int4 = `int4`),
    (e.int4range = `int4range`),
    (e.int8 = `int8`),
    (e.int8range = `int8range`),
    (e.json = `json`),
    (e.jsonb = `jsonb`),
    (e.money = `money`),
    (e.numeric = `numeric`),
    (e.oid = `oid`),
    (e.reltime = `reltime`),
    (e.text = `text`),
    (e.time = `time`),
    (e.timestamp = `timestamp`),
    (e.timestamptz = `timestamptz`),
    (e.timetz = `timetz`),
    (e.tsrange = `tsrange`),
    (e.tstzrange = `tstzrange`));
})((N ||= {}));
var si = (e, t, n = {}) => {
    let r = n.skipTypes ?? [];
    return t
      ? Object.keys(t).reduce((n, i) => ((n[i] = ci(i, e, t, r)), n), {})
      : {};
  },
  ci = (e, t, n, r) => {
    let i = t.find((t) => t.name === e)?.type,
      a = n[e];
    return i && !r.includes(i) ? li(i, a) : ui(a);
  },
  li = (e, t) => {
    if (e.charAt(0) === `_`) return mi(t, e.slice(1, e.length));
    switch (e) {
      case N.bool:
        return di(t);
      case N.float4:
      case N.float8:
      case N.int2:
      case N.int4:
      case N.int8:
      case N.numeric:
      case N.oid:
        return fi(t);
      case N.json:
      case N.jsonb:
        return pi(t);
      case N.timestamp:
        return hi(t);
      case N.abstime:
      case N.date:
      case N.daterange:
      case N.int4range:
      case N.int8range:
      case N.money:
      case N.reltime:
      case N.text:
      case N.time:
      case N.timestamptz:
      case N.timetz:
      case N.tsrange:
      case N.tstzrange:
        return ui(t);
      default:
        return ui(t);
    }
  },
  ui = (e) => e,
  di = (e) => {
    switch (e) {
      case `t`:
        return !0;
      case `f`:
        return !1;
      default:
        return e;
    }
  },
  fi = (e) => {
    if (typeof e == `string`) {
      let t = parseFloat(e);
      if (!Number.isNaN(t)) return t;
    }
    return e;
  },
  pi = (e) => {
    if (typeof e == `string`)
      try {
        return JSON.parse(e);
      } catch {
        return e;
      }
    return e;
  },
  mi = (e, t) => {
    if (typeof e != `string`) return e;
    let n = e.length - 1,
      r = e[n];
    if (e[0] === `{` && r === `}`) {
      let r,
        i = e.slice(1, n);
      try {
        r = JSON.parse(`[` + i + `]`);
      } catch {
        r = i ? i.split(`,`) : [];
      }
      return r.map((e) => li(t, e));
    }
    return e;
  },
  hi = (e) => (typeof e == `string` ? e.replace(` `, `T`) : e),
  gi = (e) => {
    let t = new URL(e);
    return (
      (t.protocol = t.protocol.replace(/^ws/i, `http`)),
      (t.pathname = t.pathname
        .replace(/\/+$/, ``)
        .replace(/\/socket\/websocket$/i, ``)
        .replace(/\/socket$/i, ``)
        .replace(/\/websocket$/i, ``)),
      t.pathname === `` || t.pathname === `/`
        ? (t.pathname = `/api/broadcast`)
        : (t.pathname += `/api/broadcast`),
      t.href
    );
  },
  _i = (e) =>
    typeof e == `function`
      ? e
      : function () {
          return e;
        },
  vi = typeof self < `u` ? self : null,
  yi = typeof window < `u` ? window : null,
  bi = vi || yi || globalThis,
  xi = `2.0.0`,
  Si = 1e4,
  Ci = 1e3,
  wi = 100,
  Ti = { connecting: 0, open: 1, closing: 2, closed: 3 },
  Ei = {
    closed: `closed`,
    errored: `errored`,
    joined: `joined`,
    joining: `joining`,
    leaving: `leaving`,
  },
  Di = {
    close: `phx_close`,
    error: `phx_error`,
    join: `phx_join`,
    reply: `phx_reply`,
    leave: `phx_leave`,
  },
  Oi = { longpoll: `longpoll`, websocket: `websocket` },
  ki = { complete: 4 },
  Ai = `base64url.bearer.phx.`,
  ji = class {
    constructor(e, t, n, r) {
      ((this.channel = e),
        (this.event = t),
        (this.payload =
          n ||
          function () {
            return {};
          }),
        (this.receivedResp = null),
        (this.timeout = r),
        (this.timeoutTimer = null),
        (this.recHooks = []),
        (this.sent = !1),
        (this.ref = void 0));
    }
    resend(e) {
      ((this.timeout = e), this.reset(), this.send());
    }
    send() {
      this.hasReceived(`timeout`) ||
        (this.startTimeout(),
        (this.sent = !0),
        this.channel.socket.push({
          topic: this.channel.topic,
          event: this.event,
          payload: this.payload(),
          ref: this.ref,
          join_ref: this.channel.joinRef(),
        }));
    }
    receive(e, t) {
      return (
        this.hasReceived(e) && t(this.receivedResp.response),
        this.recHooks.push({ status: e, callback: t }),
        this
      );
    }
    reset() {
      (this.cancelRefEvent(),
        (this.ref = null),
        (this.refEvent = null),
        (this.receivedResp = null),
        (this.sent = !1));
    }
    destroy() {
      (this.cancelRefEvent(), this.cancelTimeout());
    }
    matchReceive({ status: e, response: t, _ref: n }) {
      this.recHooks.filter((t) => t.status === e).forEach((e) => e.callback(t));
    }
    cancelRefEvent() {
      this.refEvent && this.channel.off(this.refEvent);
    }
    cancelTimeout() {
      (clearTimeout(this.timeoutTimer), (this.timeoutTimer = null));
    }
    startTimeout() {
      (this.timeoutTimer && this.cancelTimeout(),
        (this.ref = this.channel.socket.makeRef()),
        (this.refEvent = this.channel.replyEventName(this.ref)),
        this.channel.on(this.refEvent, (e) => {
          (this.cancelRefEvent(),
            this.cancelTimeout(),
            (this.receivedResp = e),
            this.matchReceive(e));
        }),
        (this.timeoutTimer = setTimeout(() => {
          this.trigger(`timeout`, {});
        }, this.timeout)));
    }
    hasReceived(e) {
      return this.receivedResp && this.receivedResp.status === e;
    }
    trigger(e, t) {
      this.channel.trigger(this.refEvent, { status: e, response: t });
    }
  },
  Mi = class {
    constructor(e, t) {
      ((this.callback = e),
        (this.timerCalc = t),
        (this.timer = void 0),
        (this.tries = 0));
    }
    reset() {
      ((this.tries = 0), clearTimeout(this.timer));
    }
    scheduleTimeout() {
      (clearTimeout(this.timer),
        (this.timer = setTimeout(
          () => {
            ((this.tries += 1), this.callback());
          },
          this.timerCalc(this.tries + 1),
        )));
    }
  },
  Ni = class {
    constructor(e, t, n) {
      ((this.state = Ei.closed),
        (this.topic = e),
        (this.params = _i(t || {})),
        (this.socket = n),
        (this.bindings = []),
        (this.bindingRef = 0),
        (this.timeout = this.socket.timeout),
        (this.joinedOnce = !1),
        (this.joinPush = new ji(this, Di.join, this.params, this.timeout)),
        (this.pushBuffer = []),
        (this.stateChangeRefs = []),
        (this.rejoinTimer = new Mi(() => {
          this.socket.isConnected() && this.rejoin();
        }, this.socket.rejoinAfterMs)),
        this.stateChangeRefs.push(
          this.socket.onError(() => this.rejoinTimer.reset()),
        ),
        this.stateChangeRefs.push(
          this.socket.onOpen(() => {
            (this.rejoinTimer.reset(), this.isErrored() && this.rejoin());
          }),
        ),
        this.joinPush.receive(`ok`, () => {
          ((this.state = Ei.joined),
            this.rejoinTimer.reset(),
            this.pushBuffer.forEach((e) => e.send()),
            (this.pushBuffer = []));
        }),
        this.joinPush.receive(`error`, (e) => {
          ((this.state = Ei.errored),
            this.socket.hasLogger() &&
              this.socket.log(`channel`, `error ${this.topic}`, e),
            this.socket.isConnected() && this.rejoinTimer.scheduleTimeout());
        }),
        this.onClose(() => {
          (this.rejoinTimer.reset(),
            this.socket.hasLogger() &&
              this.socket.log(`channel`, `close ${this.topic}`),
            (this.state = Ei.closed),
            this.socket.remove(this));
        }),
        this.onError((e) => {
          (this.socket.hasLogger() &&
            this.socket.log(`channel`, `error ${this.topic}`, e),
            this.isJoining() && this.joinPush.reset(),
            (this.state = Ei.errored),
            this.socket.isConnected() && this.rejoinTimer.scheduleTimeout());
        }),
        this.joinPush.receive(`timeout`, () => {
          (this.socket.hasLogger() &&
            this.socket.log(
              `channel`,
              `timeout ${this.topic}`,
              this.joinPush.timeout,
            ),
            new ji(this, Di.leave, _i({}), this.timeout).send(),
            (this.state = Ei.errored),
            this.joinPush.reset(),
            this.socket.isConnected() && this.rejoinTimer.scheduleTimeout());
        }),
        this.on(Di.reply, (e, t) => {
          this.trigger(this.replyEventName(t), e);
        }));
    }
    join(e = this.timeout) {
      if (this.joinedOnce)
        throw Error(
          `tried to join multiple times. 'join' can only be called a single time per channel instance`,
        );
      return (
        (this.timeout = e),
        (this.joinedOnce = !0),
        this.rejoin(),
        this.joinPush
      );
    }
    teardown() {
      (this.pushBuffer.forEach((e) => e.destroy()),
        (this.pushBuffer = []),
        this.rejoinTimer.reset(),
        this.joinPush.destroy(),
        (this.state = Ei.closed),
        (this.bindings = []));
    }
    onClose(e) {
      this.on(Di.close, e);
    }
    onError(e) {
      return this.on(Di.error, (t) => e(t));
    }
    on(e, t) {
      let n = this.bindingRef++;
      return (this.bindings.push({ event: e, ref: n, callback: t }), n);
    }
    off(e, t) {
      this.bindings = this.bindings.filter(
        (n) => !(n.event === e && (t === void 0 || t === n.ref)),
      );
    }
    canPush() {
      return this.socket.isConnected() && this.isJoined();
    }
    push(e, t, n = this.timeout) {
      if (((t ||= {}), !this.joinedOnce))
        throw Error(
          `tried to push '${e}' to '${this.topic}' before joining. Use channel.join() before pushing events`,
        );
      let r = new ji(
        this,
        e,
        function () {
          return t;
        },
        n,
      );
      return (
        this.canPush() ? r.send() : (r.startTimeout(), this.pushBuffer.push(r)),
        r
      );
    }
    leave(e = this.timeout) {
      (this.rejoinTimer.reset(),
        this.joinPush.cancelTimeout(),
        (this.state = Ei.leaving));
      let t = () => {
          (this.socket.hasLogger() &&
            this.socket.log(`channel`, `leave ${this.topic}`),
            this.trigger(Di.close, `leave`));
        },
        n = new ji(this, Di.leave, _i({}), e);
      return (
        n.receive(`ok`, () => t()).receive(`timeout`, () => t()),
        n.send(),
        this.canPush() || n.trigger(`ok`, {}),
        n
      );
    }
    onMessage(e, t, n) {
      return t;
    }
    filterBindings(e, t, n) {
      return !0;
    }
    isMember(e, t, n, r) {
      return this.topic === e
        ? r && r !== this.joinRef()
          ? (this.socket.hasLogger() &&
              this.socket.log(`channel`, `dropping outdated message`, {
                topic: e,
                event: t,
                payload: n,
                joinRef: r,
              }),
            !1)
          : !0
        : !1;
    }
    joinRef() {
      return this.joinPush.ref;
    }
    rejoin(e = this.timeout) {
      this.isLeaving() ||
        (this.socket.leaveOpenTopic(this.topic),
        (this.state = Ei.joining),
        this.joinPush.resend(e));
    }
    trigger(e, t, n, r) {
      let i = this.onMessage(e, t, n, r);
      if (t && !i)
        throw Error(
          `channel onMessage callbacks must return the payload, modified or unmodified`,
        );
      let a = this.bindings.filter(
        (r) => r.event === e && this.filterBindings(r, t, n),
      );
      for (let e = 0; e < a.length; e++)
        a[e].callback(i, n, r || this.joinRef());
    }
    replyEventName(e) {
      return `chan_reply_${e}`;
    }
    isClosed() {
      return this.state === Ei.closed;
    }
    isErrored() {
      return this.state === Ei.errored;
    }
    isJoined() {
      return this.state === Ei.joined;
    }
    isJoining() {
      return this.state === Ei.joining;
    }
    isLeaving() {
      return this.state === Ei.leaving;
    }
  },
  Pi = class {
    static request(e, t, n, r, i, a, o) {
      if (bi.XDomainRequest) {
        let n = new bi.XDomainRequest();
        return this.xdomainRequest(n, e, t, r, i, a, o);
      } else if (bi.XMLHttpRequest) {
        let s = new bi.XMLHttpRequest();
        return this.xhrRequest(s, e, t, n, r, i, a, o);
      } else if (bi.fetch && bi.AbortController)
        return this.fetchRequest(e, t, n, r, i, a, o);
      else throw Error(`No suitable XMLHttpRequest implementation found`);
    }
    static fetchRequest(e, t, n, r, i, a, o) {
      let s = { method: e, headers: n, body: r },
        c = null;
      return (
        i &&
          ((c = new AbortController()),
          setTimeout(() => c.abort(), i),
          (s.signal = c.signal)),
        bi
          .fetch(t, s)
          .then((e) => e.text())
          .then((e) => this.parseJSON(e))
          .then((e) => o && o(e))
          .catch((e) => {
            e.name === `AbortError` && a ? a() : o && o(null);
          }),
        c
      );
    }
    static xdomainRequest(e, t, n, r, i, a, o) {
      return (
        (e.timeout = i),
        e.open(t, n),
        (e.onload = () => {
          let t = this.parseJSON(e.responseText);
          o && o(t);
        }),
        a && (e.ontimeout = a),
        (e.onprogress = () => {}),
        e.send(r),
        e
      );
    }
    static xhrRequest(e, t, n, r, i, a, o, s) {
      (e.open(t, n, !0), (e.timeout = a));
      for (let [t, n] of Object.entries(r)) e.setRequestHeader(t, n);
      return (
        (e.onerror = () => s && s(null)),
        (e.onreadystatechange = () => {
          e.readyState === ki.complete &&
            s &&
            s(this.parseJSON(e.responseText));
        }),
        o && (e.ontimeout = o),
        e.send(i),
        e
      );
    }
    static parseJSON(e) {
      if (!e || e === ``) return null;
      try {
        return JSON.parse(e);
      } catch {
        return (
          console && console.log(`failed to parse JSON response`, e),
          null
        );
      }
    }
    static serialize(e, t) {
      let n = [];
      for (var r in e) {
        if (!Object.prototype.hasOwnProperty.call(e, r)) continue;
        let i = t ? `${t}[${r}]` : r,
          a = e[r];
        typeof a == `object`
          ? n.push(this.serialize(a, i))
          : n.push(encodeURIComponent(i) + `=` + encodeURIComponent(a));
      }
      return n.join(`&`);
    }
    static appendParams(e, t) {
      return Object.keys(t).length === 0
        ? e
        : `${e}${e.match(/\?/) ? `&` : `?`}${this.serialize(t)}`;
    }
  },
  Fi = (e) => {
    let t = ``,
      n = new Uint8Array(e),
      r = n.byteLength;
    for (let e = 0; e < r; e++) t += String.fromCharCode(n[e]);
    return btoa(t);
  },
  Ii = class {
    constructor(e, t) {
      (t &&
        t.length === 2 &&
        t[1].startsWith(Ai) &&
        (this.authToken = atob(t[1].slice(Ai.length))),
        (this.endPoint = null),
        (this.token = null),
        (this.skipHeartbeat = !0),
        (this.reqs = new Set()),
        (this.awaitingBatchAck = !1),
        (this.currentBatch = null),
        (this.currentBatchTimer = null),
        (this.batchBuffer = []),
        (this.onopen = function () {}),
        (this.onerror = function () {}),
        (this.onmessage = function () {}),
        (this.onclose = function () {}),
        (this.pollEndpoint = this.normalizeEndpoint(e)),
        (this.readyState = Ti.connecting),
        setTimeout(() => this.poll(), 0));
    }
    normalizeEndpoint(e) {
      return e
        .replace(`ws://`, `http://`)
        .replace(`wss://`, `https://`)
        .replace(RegExp(`(.*)/` + Oi.websocket), `$1/` + Oi.longpoll);
    }
    endpointURL() {
      return Pi.appendParams(this.pollEndpoint, { token: this.token });
    }
    closeAndRetry(e, t, n) {
      (this.close(e, t, n), (this.readyState = Ti.connecting));
    }
    ontimeout() {
      (this.onerror(`timeout`), this.closeAndRetry(1005, `timeout`, !1));
    }
    isActive() {
      return this.readyState === Ti.open || this.readyState === Ti.connecting;
    }
    poll() {
      let e = { Accept: `application/json` };
      (this.authToken && (e[`X-Phoenix-AuthToken`] = this.authToken),
        this.ajax(
          `GET`,
          e,
          null,
          () => this.ontimeout(),
          (e) => {
            if (e) {
              var { status: t, token: n, messages: r } = e;
              if (t === 410 && this.token !== null) {
                (this.onerror(410),
                  this.closeAndRetry(3410, `session_gone`, !1));
                return;
              }
              this.token = n;
            } else t = 0;
            switch (t) {
              case 200:
                (r.forEach((e) => {
                  setTimeout(() => this.onmessage({ data: e }), 0);
                }),
                  this.poll());
                break;
              case 204:
                this.poll();
                break;
              case 410:
                ((this.readyState = Ti.open), this.onopen({}), this.poll());
                break;
              case 403:
                (this.onerror(403), this.close(1008, `forbidden`, !1));
                break;
              case 0:
              case 500:
                (this.onerror(500),
                  this.closeAndRetry(1011, `internal server error`, 500));
                break;
              default:
                throw Error(`unhandled poll status ${t}`);
            }
          },
        ));
    }
    send(e) {
      (typeof e != `string` && (e = Fi(e)),
        this.currentBatch
          ? this.currentBatch.push(e)
          : this.awaitingBatchAck
            ? this.batchBuffer.push(e)
            : ((this.currentBatch = [e]),
              (this.currentBatchTimer = setTimeout(() => {
                (this.batchSend(this.currentBatch), (this.currentBatch = null));
              }, 0))));
    }
    batchSend(e, t = 0) {
      this.awaitingBatchAck = !0;
      let n = t + wi,
        r = e.slice(t, n);
      this.ajax(
        `POST`,
        { "Content-Type": `application/x-ndjson` },
        r.join(`
`),
        () => this.onerror(`timeout`),
        (t) => {
          !t || t.status !== 200
            ? ((this.awaitingBatchAck = !1),
              this.onerror(t && t.status),
              this.closeAndRetry(1011, `internal server error`, !1))
            : n < e.length
              ? this.batchSend(e, n)
              : this.batchBuffer.length > 0
                ? (this.batchSend(this.batchBuffer), (this.batchBuffer = []))
                : (this.awaitingBatchAck = !1);
        },
      );
    }
    close(e, t, n) {
      for (let e of this.reqs) e.abort();
      this.readyState = Ti.closed;
      let r = Object.assign(
        { code: 1e3, reason: void 0, wasClean: !0 },
        { code: e, reason: t, wasClean: n },
      );
      ((this.batchBuffer = []),
        clearTimeout(this.currentBatchTimer),
        (this.currentBatchTimer = null),
        typeof CloseEvent < `u`
          ? this.onclose(new CloseEvent(`close`, r))
          : this.onclose(r));
    }
    ajax(e, t, n, r, i) {
      let a;
      ((a = Pi.request(
        e,
        this.endpointURL(),
        t,
        n,
        this.timeout,
        () => {
          (this.reqs.delete(a), r());
        },
        (e) => {
          (this.reqs.delete(a), this.isActive() && i(e));
        },
      )),
        this.reqs.add(a));
    }
  },
  Li = class e {
    constructor(t, n = {}) {
      let r = n.events || { state: `presence_state`, diff: `presence_diff` };
      ((this.state = Object.create(null)),
        (this.pendingDiffs = []),
        (this.channel = t),
        (this.joinRef = null),
        (this.caller = {
          onJoin: function () {},
          onLeave: function () {},
          onSync: function () {},
        }),
        this.channel.on(r.state, (t) => {
          let { onJoin: n, onLeave: r, onSync: i } = this.caller;
          ((this.joinRef = this.channel.joinRef()),
            (this.state = e.syncState(this.state, t, n, r)),
            this.pendingDiffs.forEach((t) => {
              this.state = e.syncDiff(this.state, t, n, r);
            }),
            (this.pendingDiffs = []),
            i());
        }),
        this.channel.on(r.diff, (t) => {
          let { onJoin: n, onLeave: r, onSync: i } = this.caller;
          this.inPendingSyncState()
            ? this.pendingDiffs.push(t)
            : ((this.state = e.syncDiff(this.state, t, n, r)), i());
        }));
    }
    onJoin(e) {
      this.caller.onJoin = e;
    }
    onLeave(e) {
      this.caller.onLeave = e;
    }
    onSync(e) {
      this.caller.onSync = e;
    }
    list(t) {
      return e.list(this.state, t);
    }
    inPendingSyncState() {
      return !this.joinRef || this.joinRef !== this.channel.joinRef();
    }
    static syncState(e, t, n, r) {
      let i = this.toNullProtoObj(this.clone(e));
      t = this.toNullProtoObj(t);
      let a = Object.create(null),
        o = Object.create(null);
      return (
        this.map(i, (e, n) => {
          t[e] || (o[e] = n);
        }),
        this.map(t, (e, t) => {
          let n = i[e];
          if (n) {
            let r = t.metas.map((e) => e.phx_ref),
              i = n.metas.map((e) => e.phx_ref),
              s = t.metas.filter((e) => i.indexOf(e.phx_ref) < 0),
              c = n.metas.filter((e) => r.indexOf(e.phx_ref) < 0);
            (s.length > 0 && ((a[e] = t), (a[e].metas = s)),
              c.length > 0 && ((o[e] = this.clone(n)), (o[e].metas = c)));
          } else a[e] = t;
        }),
        this.syncDiff(i, { joins: a, leaves: o }, n, r)
      );
    }
    static syncDiff(e, t, n, r) {
      e = this.toNullProtoObj(e);
      let { joins: i, leaves: a } = this.clone(t);
      return (
        (n ||= function () {}),
        (r ||= function () {}),
        this.map(i, (t, r) => {
          let i = e[t];
          if (((e[t] = this.clone(r)), i)) {
            let n = e[t].metas.map((e) => e.phx_ref),
              r = i.metas.filter((e) => n.indexOf(e.phx_ref) < 0);
            e[t].metas.unshift(...r);
          }
          n(t, i, r);
        }),
        this.map(a, (t, n) => {
          let i = e[t];
          if (!i) return;
          let a = n.metas.map((e) => e.phx_ref);
          ((i.metas = i.metas.filter((e) => a.indexOf(e.phx_ref) < 0)),
            r(t, i, n),
            i.metas.length === 0 && delete e[t]);
        }),
        e
      );
    }
    static list(e, t) {
      return (
        (t ||= function (e, t) {
          return t;
        }),
        this.map(e, (e, n) => t(e, n))
      );
    }
    static map(e, t) {
      return Object.getOwnPropertyNames(e).map((n) => t(n, e[n]));
    }
    static toNullProtoObj(e) {
      if (Object.getPrototypeOf(e) === null) return e;
      let t = Object.create(null);
      return (
        Object.getOwnPropertyNames(e).forEach((n) => {
          t[n] = e[n];
        }),
        t
      );
    }
    static clone(e) {
      return JSON.parse(JSON.stringify(e));
    }
  },
  Ri = {
    HEADER_LENGTH: 1,
    META_LENGTH: 4,
    KINDS: { push: 0, reply: 1, broadcast: 2 },
    encode(e, t) {
      if (e.payload.constructor === ArrayBuffer) return t(this.binaryEncode(e));
      {
        let n = [e.join_ref, e.ref, e.topic, e.event, e.payload];
        return t(JSON.stringify(n));
      }
    },
    decode(e, t) {
      if (e.constructor === ArrayBuffer) return t(this.binaryDecode(e));
      {
        let [n, r, i, a, o] = JSON.parse(e);
        return t({ join_ref: n, ref: r, topic: i, event: a, payload: o });
      }
    },
    binaryEncode(e) {
      let { join_ref: t, ref: n, event: r, topic: i, payload: a } = e,
        o = new TextEncoder(),
        s = o.encode(t),
        c = o.encode(n),
        l = o.encode(i),
        u = o.encode(r);
      (this.assertFieldSize(s.byteLength, `join_ref`),
        this.assertFieldSize(c.byteLength, `ref`),
        this.assertFieldSize(l.byteLength, `topic`),
        this.assertFieldSize(u.byteLength, `event`));
      let d =
          this.META_LENGTH +
          s.byteLength +
          c.byteLength +
          l.byteLength +
          u.byteLength,
        f = new ArrayBuffer(this.HEADER_LENGTH + d),
        p = new Uint8Array(f),
        m = new DataView(f),
        h = 0;
      (m.setUint8(h++, this.KINDS.push),
        m.setUint8(h++, s.byteLength),
        m.setUint8(h++, c.byteLength),
        m.setUint8(h++, l.byteLength),
        m.setUint8(h++, u.byteLength),
        p.set(s, h),
        (h += s.byteLength),
        p.set(c, h),
        (h += c.byteLength),
        p.set(l, h),
        (h += l.byteLength),
        p.set(u, h),
        (h += u.byteLength));
      var g = new Uint8Array(f.byteLength + a.byteLength);
      return (g.set(p, 0), g.set(new Uint8Array(a), f.byteLength), g.buffer);
    },
    assertFieldSize(e, t) {
      if (e > 255)
        throw Error(
          `unable to convert ${t} to binary: must be less than or equal to 255 bytes, but is ${e} bytes`,
        );
    },
    binaryDecode(e) {
      let t = new DataView(e),
        n = t.getUint8(0),
        r = new TextDecoder();
      switch (n) {
        case this.KINDS.push:
          return this.decodePush(e, t, r);
        case this.KINDS.reply:
          return this.decodeReply(e, t, r);
        case this.KINDS.broadcast:
          return this.decodeBroadcast(e, t, r);
      }
    },
    decodePush(e, t, n) {
      let r = t.getUint8(1),
        i = t.getUint8(2),
        a = t.getUint8(3),
        o = this.HEADER_LENGTH + this.META_LENGTH - 1,
        s = n.decode(e.slice(o, o + r));
      o += r;
      let c = n.decode(e.slice(o, o + i));
      o += i;
      let l = n.decode(e.slice(o, o + a));
      return (
        (o += a),
        {
          join_ref: s,
          ref: null,
          topic: c,
          event: l,
          payload: e.slice(o, e.byteLength),
        }
      );
    },
    decodeReply(e, t, n) {
      let r = t.getUint8(1),
        i = t.getUint8(2),
        a = t.getUint8(3),
        o = t.getUint8(4),
        s = this.HEADER_LENGTH + this.META_LENGTH,
        c = n.decode(e.slice(s, s + r));
      s += r;
      let l = n.decode(e.slice(s, s + i));
      s += i;
      let u = n.decode(e.slice(s, s + a));
      s += a;
      let d = n.decode(e.slice(s, s + o));
      s += o;
      let f = { status: d, response: e.slice(s, e.byteLength) };
      return { join_ref: c, ref: l, topic: u, event: Di.reply, payload: f };
    },
    decodeBroadcast(e, t, n) {
      let r = t.getUint8(1),
        i = t.getUint8(2),
        a = this.HEADER_LENGTH + 2,
        o = n.decode(e.slice(a, a + r));
      a += r;
      let s = n.decode(e.slice(a, a + i));
      return (
        (a += i),
        {
          join_ref: null,
          ref: null,
          topic: o,
          event: s,
          payload: e.slice(a, e.byteLength),
        }
      );
    },
  },
  P = class {
    constructor(e, t = {}) {
      ((this.stateChangeCallbacks = {
        open: [],
        close: [],
        error: [],
        message: [],
      }),
        (this.channels = []),
        (this.sendBuffer = []),
        (this.ref = 0),
        (this.fallbackRef = null),
        (this.timeout = t.timeout || Si),
        (this.transport = t.transport || bi.WebSocket || Ii),
        (this.conn = void 0),
        (this.primaryPassedHealthCheck = !1),
        (this.longPollFallbackMs = t.longPollFallbackMs),
        (this.fallbackTimer = null));
      let n = null;
      try {
        n = bi && bi.sessionStorage;
      } catch {}
      ((this.sessionStore = t.sessionStorage || n),
        (this.establishedConnections = 0),
        (this.defaultEncoder = Ri.encode.bind(Ri)),
        (this.defaultDecoder = Ri.decode.bind(Ri)),
        (this.closeWasClean = !0),
        (this.disconnecting = !1),
        (this.binaryType = t.binaryType || `arraybuffer`),
        (this.connectClock = 1),
        (this.pageHidden = !1),
        (this.encode = void 0),
        (this.decode = void 0),
        this.transport === Ii
          ? ((this.encode = this.defaultEncoder),
            (this.decode = this.defaultDecoder))
          : ((this.encode = t.encode || this.defaultEncoder),
            (this.decode = t.decode || this.defaultDecoder)));
      let r = null;
      (yi &&
        yi.addEventListener &&
        (yi.addEventListener(`pagehide`, (e) => {
          this.conn && (this.disconnect(), (r = this.connectClock));
        }),
        yi.addEventListener(`pageshow`, (e) => {
          r === this.connectClock && ((r = null), this.connect());
        }),
        yi.addEventListener(`visibilitychange`, () => {
          document.visibilityState === `hidden`
            ? (this.pageHidden = !0)
            : ((this.pageHidden = !1),
              !this.isConnected() &&
                !this.closeWasClean &&
                this.teardown(() => this.connect()));
        })),
        (this.heartbeatIntervalMs = t.heartbeatIntervalMs || 3e4),
        (this.autoSendHeartbeat = t.autoSendHeartbeat ?? !0),
        (this.heartbeatCallback = t.heartbeatCallback ?? (() => {})),
        (this.rejoinAfterMs = (e) =>
          t.rejoinAfterMs ? t.rejoinAfterMs(e) : [1e3, 2e3, 5e3][e - 1] || 1e4),
        (this.reconnectAfterMs = (e) =>
          t.reconnectAfterMs
            ? t.reconnectAfterMs(e)
            : [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][e - 1] || 5e3),
        (this.logger = t.logger || null),
        !this.logger &&
          t.debug &&
          (this.logger = (e, t, n) => {
            console.log(`${e}: ${t}`, n);
          }),
        (this.longpollerTimeout = t.longpollerTimeout || 2e4),
        (this.params = _i(t.params || {})),
        (this.endPoint = `${e}/${Oi.websocket}`),
        (this.vsn = t.vsn || xi),
        (this.heartbeatTimeoutTimer = null),
        (this.heartbeatTimer = null),
        (this.heartbeatSentAt = null),
        (this.pendingHeartbeatRef = null),
        (this.reconnectTimer = new Mi(() => {
          if (this.pageHidden) {
            (this.log(`Not reconnecting as page is hidden!`), this.teardown());
            return;
          }
          this.teardown(async () => {
            (t.beforeReconnect && (await t.beforeReconnect()), this.connect());
          });
        }, this.reconnectAfterMs)),
        (this.authToken = t.authToken && _i(t.authToken)));
    }
    getLongPollTransport() {
      return Ii;
    }
    replaceTransport(e) {
      (this.connectClock++,
        (this.closeWasClean = !0),
        clearTimeout(this.fallbackTimer),
        this.reconnectTimer.reset(),
        (this.conn &&= (this.conn.close(), null)),
        (this.transport = e));
    }
    protocol() {
      return location.protocol.match(/^https/) ? `wss` : `ws`;
    }
    endPointURL() {
      let e = Pi.appendParams(Pi.appendParams(this.endPoint, this.params()), {
        vsn: this.vsn,
      });
      return e.charAt(0) === `/`
        ? e.charAt(1) === `/`
          ? `${this.protocol()}:${e}`
          : `${this.protocol()}://${location.host}${e}`
        : e;
    }
    disconnect(e, t, n) {
      (this.connectClock++,
        (this.disconnecting = !0),
        (this.closeWasClean = !0),
        clearTimeout(this.fallbackTimer),
        this.reconnectTimer.reset(),
        this.teardown(
          () => {
            ((this.disconnecting = !1), e && e());
          },
          t,
          n,
        ));
    }
    connect(e) {
      (e &&
        (console &&
          console.log(
            `passing params to connect is deprecated. Instead pass :params to the Socket constructor`,
          ),
        (this.params = _i(e))),
        !(this.conn && !this.disconnecting) &&
          (this.longPollFallbackMs && this.transport !== Ii
            ? this.connectWithFallback(Ii, this.longPollFallbackMs)
            : this.transportConnect()));
    }
    log(e, t, n) {
      this.logger && this.logger(e, t, n);
    }
    hasLogger() {
      return this.logger !== null;
    }
    onOpen(e) {
      let t = this.makeRef();
      return (this.stateChangeCallbacks.open.push([t, e]), t);
    }
    onClose(e) {
      let t = this.makeRef();
      return (this.stateChangeCallbacks.close.push([t, e]), t);
    }
    onError(e) {
      let t = this.makeRef();
      return (this.stateChangeCallbacks.error.push([t, e]), t);
    }
    onMessage(e) {
      let t = this.makeRef();
      return (this.stateChangeCallbacks.message.push([t, e]), t);
    }
    onHeartbeat(e) {
      this.heartbeatCallback = e;
    }
    ping(e) {
      if (!this.isConnected()) return !1;
      let t = this.makeRef(),
        n = Date.now();
      this.push({ topic: `phoenix`, event: `heartbeat`, payload: {}, ref: t });
      let r = this.onMessage((i) => {
        i.ref === t && (this.off([r]), e(Date.now() - n));
      });
      return !0;
    }
    transportName(e) {
      switch (e) {
        case Ii:
          return `LongPoll`;
        default:
          return e.name;
      }
    }
    transportConnect() {
      (this.connectClock++, (this.closeWasClean = !1));
      let e;
      (this.authToken &&
        (e = [`phoenix`, `${Ai}${btoa(this.authToken()).replace(/=/g, ``)}`]),
        (this.conn = new this.transport(this.endPointURL(), e)),
        (this.conn.binaryType = this.binaryType),
        (this.conn.timeout = this.longpollerTimeout),
        (this.conn.onopen = () => this.onConnOpen()),
        (this.conn.onerror = (e) => this.onConnError(e)),
        (this.conn.onmessage = (e) => this.onConnMessage(e)),
        (this.conn.onclose = (e) => this.onConnClose(e)));
    }
    getSession(e) {
      return this.sessionStore && this.sessionStore.getItem(e);
    }
    storeSession(e, t) {
      this.sessionStore && this.sessionStore.setItem(e, t);
    }
    connectWithFallback(e, t = 2500) {
      clearTimeout(this.fallbackTimer);
      let n = !1,
        r = !0,
        i,
        a = this.transportName(e),
        o = (t) => {
          (this.log(`transport`, `falling back to ${a}...`, t),
            this.off([void 0, i]),
            (r = !1),
            this.replaceTransport(e),
            this.transportConnect());
        };
      if (this.getSession(`phx:fallback:${a}`)) return o(`memorized`);
      ((this.fallbackTimer = setTimeout(o, t)),
        (i = this.onError((e) => {
          (this.log(`transport`, `error`, e),
            r && !n && (clearTimeout(this.fallbackTimer), o(e)));
        })),
        this.fallbackRef && this.off([this.fallbackRef]),
        (this.fallbackRef = this.onOpen(() => {
          if (((n = !0), !r)) {
            let t = this.transportName(e);
            return (
              this.primaryPassedHealthCheck ||
                this.storeSession(`phx:fallback:${t}`, `true`),
              this.log(`transport`, `established ${t} fallback`)
            );
          }
          (clearTimeout(this.fallbackTimer),
            (this.fallbackTimer = setTimeout(o, t)),
            this.ping((e) => {
              (this.log(`transport`, `connected to primary after`, e),
                (this.primaryPassedHealthCheck = !0),
                clearTimeout(this.fallbackTimer));
            }));
        })),
        this.transportConnect());
    }
    clearHeartbeats() {
      (clearTimeout(this.heartbeatTimer),
        clearTimeout(this.heartbeatTimeoutTimer));
    }
    onConnOpen() {
      (this.hasLogger() &&
        this.log(`transport`, `connected to ${this.endPointURL()}`),
        (this.closeWasClean = !1),
        (this.disconnecting = !1),
        this.establishedConnections++,
        this.flushSendBuffer(),
        this.reconnectTimer.reset(),
        this.autoSendHeartbeat && this.resetHeartbeat(),
        this.triggerStateCallbacks(`open`));
    }
    heartbeatTimeout() {
      if (this.pendingHeartbeatRef) {
        ((this.pendingHeartbeatRef = null),
          (this.heartbeatSentAt = null),
          this.hasLogger() &&
            this.log(
              `transport`,
              `heartbeat timeout. Attempting to re-establish connection`,
            ));
        try {
          this.heartbeatCallback(`timeout`);
        } catch (e) {
          this.log(`error`, `error in heartbeat callback`, e);
        }
        (this.triggerChanError(Error(`heartbeat timeout`)),
          (this.closeWasClean = !1),
          this.teardown(
            () => this.reconnectTimer.scheduleTimeout(),
            Ci,
            `heartbeat timeout`,
          ));
      }
    }
    resetHeartbeat() {
      (this.conn && this.conn.skipHeartbeat) ||
        ((this.pendingHeartbeatRef = null),
        this.clearHeartbeats(),
        (this.heartbeatTimer = setTimeout(
          () => this.sendHeartbeat(),
          this.heartbeatIntervalMs,
        )));
    }
    teardown(e, t, n) {
      if (!this.conn) return e && e();
      let r = this.conn;
      this.waitForBufferDone(r, () => {
        (t ? r.close(t, n || ``) : r.close(),
          this.waitForSocketClosed(r, () => {
            (this.conn === r &&
              ((this.conn.onopen = function () {}),
              (this.conn.onerror = function () {}),
              (this.conn.onmessage = function () {}),
              (this.conn.onclose = function () {}),
              (this.conn = null)),
              e && e());
          }));
      });
    }
    waitForBufferDone(e, t, n = 1) {
      if (n === 5 || !e.bufferedAmount) {
        t();
        return;
      }
      setTimeout(() => {
        this.waitForBufferDone(e, t, n + 1);
      }, 150 * n);
    }
    waitForSocketClosed(e, t, n = 1) {
      if (n === 5 || e.readyState === Ti.closed) {
        t();
        return;
      }
      setTimeout(() => {
        this.waitForSocketClosed(e, t, n + 1);
      }, 150 * n);
    }
    onConnClose(e) {
      (this.conn && (this.conn.onclose = () => {}),
        this.hasLogger() && this.log(`transport`, `close`, e),
        this.triggerChanError(e),
        this.clearHeartbeats(),
        this.closeWasClean || this.reconnectTimer.scheduleTimeout(),
        this.triggerStateCallbacks(`close`, e));
    }
    onConnError(e) {
      this.hasLogger() && this.log(`transport`, `error`, e);
      let t = this.transport,
        n = this.establishedConnections;
      (this.triggerStateCallbacks(`error`, e, t, n),
        (t === this.transport || n > 0) && this.triggerChanError(e));
    }
    triggerChanError(e) {
      this.channels.forEach((t) => {
        t.isErrored() ||
          t.isLeaving() ||
          t.isClosed() ||
          t.trigger(Di.error, e);
      });
    }
    connectionState() {
      switch (this.conn && this.conn.readyState) {
        case Ti.connecting:
          return `connecting`;
        case Ti.open:
          return `open`;
        case Ti.closing:
          return `closing`;
        default:
          return `closed`;
      }
    }
    isConnected() {
      return this.connectionState() === `open`;
    }
    remove(e) {
      (this.off(e.stateChangeRefs),
        (this.channels = this.channels.filter((t) => t !== e)));
    }
    off(e) {
      for (let t in this.stateChangeCallbacks)
        this.stateChangeCallbacks[t] = this.stateChangeCallbacks[t].filter(
          ([t]) => e.indexOf(t) === -1,
        );
    }
    channel(e, t = {}) {
      let n = new Ni(e, t, this);
      return (this.channels.push(n), n);
    }
    push(e) {
      if (this.hasLogger()) {
        let { topic: t, event: n, payload: r, ref: i, join_ref: a } = e;
        this.log(`push`, `${t} ${n} (${a}, ${i})`, r);
      }
      this.isConnected()
        ? this.encode(e, (e) => this.conn.send(e))
        : this.sendBuffer.push(() => this.encode(e, (e) => this.conn.send(e)));
    }
    makeRef() {
      let e = this.ref + 1;
      return (
        e === this.ref ? (this.ref = 0) : (this.ref = e),
        this.ref.toString()
      );
    }
    sendHeartbeat() {
      if (!this.isConnected()) {
        try {
          this.heartbeatCallback(`disconnected`);
        } catch (e) {
          this.log(`error`, `error in heartbeat callback`, e);
        }
        return;
      }
      if (this.pendingHeartbeatRef) {
        this.heartbeatTimeout();
        return;
      }
      ((this.pendingHeartbeatRef = this.makeRef()),
        (this.heartbeatSentAt = Date.now()),
        this.push({
          topic: `phoenix`,
          event: `heartbeat`,
          payload: {},
          ref: this.pendingHeartbeatRef,
        }));
      try {
        this.heartbeatCallback(`sent`);
      } catch (e) {
        this.log(`error`, `error in heartbeat callback`, e);
      }
      this.heartbeatTimeoutTimer = setTimeout(
        () => this.heartbeatTimeout(),
        this.heartbeatIntervalMs,
      );
    }
    flushSendBuffer() {
      this.isConnected() &&
        this.sendBuffer.length > 0 &&
        (this.sendBuffer.forEach((e) => e()), (this.sendBuffer = []));
    }
    onConnMessage(e) {
      this.decode(e.data, (e) => {
        let { topic: t, event: n, payload: r, ref: i, join_ref: a } = e;
        if (i && i === this.pendingHeartbeatRef) {
          let e = this.heartbeatSentAt
            ? Date.now() - this.heartbeatSentAt
            : void 0;
          this.clearHeartbeats();
          try {
            this.heartbeatCallback(r.status === `ok` ? `ok` : `error`, e);
          } catch (e) {
            this.log(`error`, `error in heartbeat callback`, e);
          }
          ((this.pendingHeartbeatRef = null),
            (this.heartbeatSentAt = null),
            this.autoSendHeartbeat &&
              (this.heartbeatTimer = setTimeout(
                () => this.sendHeartbeat(),
                this.heartbeatIntervalMs,
              )));
        }
        this.hasLogger() &&
          this.log(
            `receive`,
            `${r.status || ``} ${t} ${n} ${(i && `(` + i + `)`) || ``}`.trim(),
            r,
          );
        for (let e = 0; e < this.channels.length; e++) {
          let o = this.channels[e];
          o.isMember(t, n, r, a) && o.trigger(n, r, i, a);
        }
        this.triggerStateCallbacks(`message`, e);
      });
    }
    triggerStateCallbacks(e, ...t) {
      try {
        this.stateChangeCallbacks[e].forEach(([n, r]) => {
          try {
            r(...t);
          } catch (t) {
            this.log(`error`, `error in ${e} callback`, t);
          }
        });
      } catch (t) {
        this.log(`error`, `error triggering ${e} callbacks`, t);
      }
    }
    leaveOpenTopic(e) {
      let t = this.channels.find(
        (t) => t.topic === e && (t.isJoined() || t.isJoining()),
      );
      t &&
        (this.hasLogger() &&
          this.log(`transport`, `leaving duplicate topic "${e}"`),
        t.leave());
    }
  },
  F = class e {
    constructor(t, n) {
      let r = Vi(n);
      ((this.presence = new Li(t.getChannel(), r)),
        this.presence.onJoin((n, r, i) => {
          let a = e.onJoinPayload(n, r, i);
          t.getChannel().trigger(`presence`, a);
        }),
        this.presence.onLeave((n, r, i) => {
          let a = e.onLeavePayload(n, r, i);
          t.getChannel().trigger(`presence`, a);
        }),
        this.presence.onSync(() => {
          t.getChannel().trigger(`presence`, { event: `sync` });
        }));
    }
    get state() {
      return e.transformState(this.presence.state);
    }
    static transformState(e) {
      return (
        (e = Bi(e)),
        Object.getOwnPropertyNames(e).reduce((t, n) => {
          let r = e[n];
          return ((t[n] = zi(r)), t);
        }, {})
      );
    }
    static onJoinPayload(e, t, n) {
      return {
        event: `join`,
        key: e,
        currentPresences: Hi(t),
        newPresences: zi(n),
      };
    }
    static onLeavePayload(e, t, n) {
      return {
        event: `leave`,
        key: e,
        currentPresences: Hi(t),
        leftPresences: zi(n),
      };
    }
  };
function zi(e) {
  return e.metas.map((e) => {
    let t = Object.getOwnPropertyDescriptors(e),
      n = Object.defineProperties({}, t);
    return (
      (n.presence_ref = n.phx_ref),
      delete n.phx_ref,
      delete n.phx_ref_prev,
      n
    );
  });
}
function Bi(e) {
  return JSON.parse(JSON.stringify(e));
}
function Vi(e) {
  return e?.events && { events: e.events };
}
function Hi(e) {
  return e?.metas ? zi(e) : [];
}
var Ui;
(function (e) {
  ((e.SYNC = `sync`), (e.JOIN = `join`), (e.LEAVE = `leave`));
})((Ui ||= {}));
var Wi = class {
  get state() {
    return this.presenceAdapter.state;
  }
  constructor(e, t) {
    ((this.channel = e),
      (this.presenceAdapter = new F(this.channel.channelAdapter, t)));
  }
};
function Gi(e) {
  if (e instanceof Error) return e;
  if (typeof e == `string`) return Error(e);
  if (e && typeof e == `object`) {
    let t = e;
    if (typeof t.code == `number`) {
      let n = typeof t.reason == `string` && t.reason ? ` (${t.reason})` : ``;
      return Error(`socket closed: ${t.code}${n}`, { cause: e });
    }
    return Error(`channel error: transport failure`, { cause: e });
  }
  return Error(`channel error: connection lost`);
}
var Ki = class {
  constructor(e, t, n) {
    let r = qi(n);
    ((this.channel = e.getSocket().channel(t, r)), (this.socket = e));
  }
  get state() {
    return this.channel.state;
  }
  set state(e) {
    this.channel.state = e;
  }
  get joinedOnce() {
    return this.channel.joinedOnce;
  }
  get joinPush() {
    return this.channel.joinPush;
  }
  get rejoinTimer() {
    return this.channel.rejoinTimer;
  }
  on(e, t) {
    return this.channel.on(e, t);
  }
  off(e, t) {
    this.channel.off(e, t);
  }
  subscribe(e) {
    return this.channel.join(e);
  }
  unsubscribe(e) {
    return this.channel.leave(e);
  }
  teardown() {
    this.channel.teardown();
  }
  onClose(e) {
    this.channel.onClose(e);
  }
  onError(e) {
    return this.channel.onError(e);
  }
  push(e, t, n) {
    let r;
    try {
      r = this.channel.push(e, t, n);
    } catch {
      throw Error(
        `tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`,
      );
    }
    if (this.channel.pushBuffer.length > 100) {
      let e = this.channel.pushBuffer.shift();
      (e.cancelTimeout(),
        this.socket.log(
          `channel`,
          `discarded push due to buffer overflow: ${e.event}`,
          e.payload(),
        ));
    }
    return r;
  }
  updateJoinPayload(e) {
    let t = this.channel.joinPush.payload();
    this.channel.joinPush.payload = () =>
      Object.assign(Object.assign({}, t), e);
  }
  canPush() {
    return this.socket.isConnected() && this.state === ri.joined;
  }
  isJoined() {
    return this.state === ri.joined;
  }
  isJoining() {
    return this.state === ri.joining;
  }
  isClosed() {
    return this.state === ri.closed;
  }
  isLeaving() {
    return this.state === ri.leaving;
  }
  updateFilterBindings(e) {
    this.channel.filterBindings = e;
  }
  updatePayloadTransform(e) {
    this.channel.onMessage = e;
  }
  getChannel() {
    return this.channel;
  }
};
function qi(e) {
  return {
    config: Object.assign(
      {
        broadcast: { ack: !1, self: !1 },
        presence: { key: ``, enabled: !1 },
        private: !1,
      },
      e.config,
    ),
  };
}
var Ji = /[,()"\\]/,
  Yi = (e) => Ji.test(e) || e !== e.trim(),
  Xi = (e) => `"${e.replace(/\\/g, `\\\\`).replace(/"/g, `\\"`)}"`,
  Zi = (e) => {
    let t = e === null ? `null` : String(e);
    return Yi(t) ? Xi(t) : t;
  },
  Qi = (e) => (e === null ? `null` : String(e)),
  $i = (e, t) => {
    if (e === `in`) {
      let e = Array.isArray(t) ? t : [t];
      if (e.length === 0)
        throw Error("Realtime `in` filter requires at least one value.");
      return `in.(${Array.from(new Set(e))
        .map((e) => Zi(e))
        .join(`,`)})`;
    }
    return e === `is` ? `is.${Qi(t)}` : `${e}.${Zi(t)}`;
  },
  ea = class {
    constructor() {
      this.filters = [];
    }
    add(e, t, n, r = !1) {
      let i = r ? `not.` : ``;
      return (this.filters.push(`${e}=${i}${$i(t, n)}`), this);
    }
    eq(e, t) {
      return this.add(e, `eq`, t);
    }
    neq(e, t) {
      return this.add(e, `neq`, t);
    }
    gt(e, t) {
      return this.add(e, `gt`, t);
    }
    gte(e, t) {
      return this.add(e, `gte`, t);
    }
    lt(e, t) {
      return this.add(e, `lt`, t);
    }
    lte(e, t) {
      return this.add(e, `lte`, t);
    }
    in(e, t) {
      return this.add(e, `in`, t);
    }
    like(e, t) {
      return this.add(e, `like`, t);
    }
    ilike(e, t) {
      return this.add(e, `ilike`, t);
    }
    match(e, t) {
      return this.add(e, `match`, t);
    }
    imatch(e, t) {
      return this.add(e, `imatch`, t);
    }
    is(e, t) {
      return this.add(e, `is`, t);
    }
    isDistinct(e, t) {
      return this.add(e, `isdistinct`, t);
    }
    not(e, t, n) {
      return this.add(e, t, n, !0);
    }
    build() {
      return this.filters.join(`,`);
    }
    toString() {
      return this.build();
    }
  },
  ta;
(function (e) {
  ((e.ALL = `*`),
    (e.INSERT = `INSERT`),
    (e.UPDATE = `UPDATE`),
    (e.DELETE = `DELETE`));
})((ta ||= {}));
var na;
(function (e) {
  ((e.BROADCAST = `broadcast`),
    (e.PRESENCE = `presence`),
    (e.POSTGRES_CHANGES = `postgres_changes`),
    (e.SYSTEM = `system`));
})((na ||= {}));
var ra;
(function (e) {
  ((e.SUBSCRIBED = `SUBSCRIBED`),
    (e.TIMED_OUT = `TIMED_OUT`),
    (e.CLOSED = `CLOSED`),
    (e.CHANNEL_ERROR = `CHANNEL_ERROR`));
})((ra ||= {}));
var ia = class e {
    get state() {
      return this.channelAdapter.state;
    }
    set state(e) {
      this.channelAdapter.state = e;
    }
    get joinedOnce() {
      return this.channelAdapter.joinedOnce;
    }
    get timeout() {
      return this.socket.timeout;
    }
    get joinPush() {
      return this.channelAdapter.joinPush;
    }
    get rejoinTimer() {
      return this.channelAdapter.rejoinTimer;
    }
    constructor(e, t = { config: {} }, n) {
      if (
        ((this.topic = e),
        (this.params = t),
        (this.socket = n),
        (this.bindings = {}),
        (this.subTopic = e.replace(/^realtime:/i, ``)),
        (this.params.config = Object.assign(
          {
            broadcast: { ack: !1, self: !1 },
            presence: { key: ``, enabled: !1 },
            private: !1,
          },
          t.config,
        )),
        (this.channelAdapter = new Ki(
          this.socket.socketAdapter,
          e,
          this.params,
        )),
        (this.presence = new Wi(this)),
        this._onClose(() => {
          this.socket._remove(this);
        }),
        this._updateFilterTransform(),
        (this.broadcastEndpointURL = gi(
          this.socket.socketAdapter.endPointURL(),
        )),
        (this.private = this.params.config.private || !1),
        !this.private && this.params.config?.broadcast?.replay)
      )
        throw Error(
          `tried to use replay on public channel '${this.topic}'. It must be a private channel.`,
        );
    }
    subscribe(e, t = this.timeout) {
      if (
        (this.socket.isConnected() || this.socket.connect(),
        this.channelAdapter.isClosed())
      ) {
        let {
            config: { broadcast: n, presence: r, private: i },
          } = this.params,
          a = this.bindings.postgres_changes?.map((e) => e.filter) ?? [],
          o =
            (!!this.bindings[na.PRESENCE] &&
              this.bindings[na.PRESENCE].length > 0) ||
            this.params.config.presence?.enabled === !0,
          s = {},
          c = {
            broadcast: n,
            presence: Object.assign(Object.assign({}, r), { enabled: o }),
            postgres_changes: a,
            private: i,
          };
        (this.socket.accessTokenValue &&
          (s.access_token = this.socket.accessTokenValue),
          this._onError((t) => {
            e?.(ra.CHANNEL_ERROR, Gi(t));
          }),
          this._onClose(() => e?.(ra.CLOSED)),
          this.updateJoinPayload(Object.assign({ config: c }, s)),
          this._updateFilterMessage(),
          this.channelAdapter
            .subscribe(t)
            .receive(`ok`, async ({ postgres_changes: t }) => {
              if (
                (this.socket._isManualToken() || this.socket.setAuth(),
                t === void 0)
              ) {
                e?.(ra.SUBSCRIBED);
                return;
              }
              this._updatePostgresBindings(t, e);
            })
            .receive(`error`, (t) => {
              this.state = ri.errored;
              let n = Object.values(t).join(`, `) || `error`;
              e?.(ra.CHANNEL_ERROR, Error(n, { cause: t }));
            })
            .receive(`timeout`, () => {
              e?.(ra.TIMED_OUT);
            }));
      }
      return this;
    }
    _updatePostgresBindings(t, n) {
      let r = this.bindings.postgres_changes,
        i = r?.length ?? 0,
        a = [];
      for (let o = 0; o < i; o++) {
        let i = r[o],
          {
            filter: { event: s, schema: c, table: l, filter: u },
          } = i,
          d = t && t[o];
        if (
          d &&
          d.event === s &&
          e.isFilterValueEqual(d.schema, c) &&
          e.isFilterValueEqual(d.table, l) &&
          e.isFilterValueEqual(d.filter, u)
        )
          a.push(Object.assign(Object.assign({}, i), { id: d.id }));
        else {
          (this.unsubscribe(),
            (this.state = ri.errored),
            n?.(
              ra.CHANNEL_ERROR,
              Error(
                `mismatch between server and client bindings for postgres changes`,
              ),
            ));
          return;
        }
      }
      ((this.bindings.postgres_changes = a),
        this.state != ri.errored && n && n(ra.SUBSCRIBED));
    }
    presenceState() {
      return this.presence.state;
    }
    async track(e, t = {}) {
      return await this.send(
        { type: `presence`, event: `track`, payload: e },
        t,
      );
    }
    async untrack(e = {}) {
      return await this.send({ type: `presence`, event: `untrack` }, e);
    }
    on(e, t, n) {
      let r = this.channelAdapter.isJoined() || this.channelAdapter.isJoining(),
        i = e === na.PRESENCE || e === na.POSTGRES_CHANGES;
      if (r && i)
        throw (
          this.socket.log(
            `channel`,
            `cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`,
          ),
          Error(
            `cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`,
          )
        );
      return this._on(e, t, n);
    }
    async httpSend(e, t, n = {}) {
      if (t == null)
        return Promise.reject(Error(`Payload is required for httpSend()`));
      let r = t instanceof ArrayBuffer || ArrayBuffer.isView(t),
        i = {
          apikey: this.socket.apiKey ? this.socket.apiKey : ``,
          "Content-Type": r ? `application/octet-stream` : `application/json`,
        };
      this.socket.accessTokenValue &&
        (i.Authorization = `Bearer ${this.socket.accessTokenValue}`);
      let a = new URL(this.broadcastEndpointURL);
      ((a.pathname += `/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(e)}`),
        this.private && a.searchParams.set(`private`, `true`));
      let o = { method: `POST`, headers: i, body: r ? t : JSON.stringify(t) },
        s = await this._fetchWithTimeout(
          a.toString(),
          o,
          n.timeout ?? this.timeout,
        );
      if (s.status === 202) return { success: !0 };
      if (s.status === 404)
        return Promise.reject(
          Error(
            `httpSend() requires Realtime server v2.97.0 or newer; the endpoint returned 404. Update your Supabase CLI to a recent version, or upgrade the Realtime server in your self-hosted setup. See https://github.com/supabase/supabase-js/blob/master/packages/core/realtime-js/migrations/httpsend-server-version.md`,
          ),
        );
      let c = s.statusText;
      try {
        let e = await s.json();
        c = e.error || e.message || c;
      } catch {}
      return Promise.reject(Error(c));
    }
    async send(e, t = {}) {
      if (!this.channelAdapter.canPush() && e.type === `broadcast`) {
        console.warn(
          `Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.`,
        );
        let { event: n, payload: r } = e,
          i = {
            apikey: this.socket.apiKey ? this.socket.apiKey : ``,
            "Content-Type": `application/json`,
          };
        this.socket.accessTokenValue &&
          (i.Authorization = `Bearer ${this.socket.accessTokenValue}`);
        let a = {
          method: `POST`,
          headers: i,
          body: JSON.stringify({
            messages: [
              {
                topic: this.subTopic,
                event: n,
                payload: r,
                private: this.private,
              },
            ],
          }),
        };
        try {
          let e = await this._fetchWithTimeout(
            this.broadcastEndpointURL,
            a,
            t.timeout ?? this.timeout,
          );
          return (await e.body?.cancel(), e.ok ? `ok` : `error`);
        } catch (e) {
          return e instanceof Error && e.name === `AbortError`
            ? `timed out`
            : `error`;
        }
      } else
        return new Promise((n) => {
          let r = this.channelAdapter.push(
            e.type,
            e,
            t.timeout || this.timeout,
          );
          (e.type === `broadcast` &&
            !this.params?.config?.broadcast?.ack &&
            n(`ok`),
            r.receive(`ok`, () => n(`ok`)),
            r.receive(`error`, () => n(`error`)),
            r.receive(`timeout`, () => n(`timed out`)));
        });
    }
    updateJoinPayload(e) {
      this.channelAdapter.updateJoinPayload(e);
    }
    async unsubscribe(e = this.timeout) {
      return new Promise((t) => {
        this.channelAdapter
          .unsubscribe(e)
          .receive(`ok`, () => t(`ok`))
          .receive(`timeout`, () => t(`timed out`))
          .receive(`error`, () => t(`error`));
      });
    }
    teardown() {
      this.channelAdapter.teardown();
    }
    async _fetchWithTimeout(e, t, n) {
      let r = new AbortController(),
        i = setTimeout(() => r.abort(), n),
        a = await this.socket.fetch(
          e,
          Object.assign(Object.assign({}, t), { signal: r.signal }),
        );
      return (clearTimeout(i), a);
    }
    _on(e, t, n) {
      let r = e.toLocaleLowerCase(),
        i = t?.filter;
      (i instanceof ea ||
        (typeof i == `object` && i && typeof i.build == `function`)) &&
        (t = Object.assign(Object.assign({}, t), { filter: i.build() }));
      let a = this.channelAdapter.on(e, n),
        o = { type: r, filter: t, callback: n, ref: a };
      return (
        this.bindings[r] ? this.bindings[r].push(o) : (this.bindings[r] = [o]),
        this._updateFilterMessage(),
        this
      );
    }
    _onClose(e) {
      this.channelAdapter.onClose(e);
    }
    _onError(e) {
      this.channelAdapter.onError(e);
    }
    _updateFilterMessage() {
      this.channelAdapter.updateFilterBindings((e, t, n) => {
        let r = e.event.toLocaleLowerCase();
        if (this._notThisChannelEvent(r, n)) return !1;
        let i = this.bindings[r]?.find((t) => t.ref === e.ref);
        if (!i) return !0;
        if ([`broadcast`, `presence`, `postgres_changes`].includes(r))
          if (`id` in i) {
            let e = i.id,
              n = i.filter?.event;
            return (
              e &&
              t.ids?.includes(e) &&
              (n === `*` ||
                n?.toLocaleLowerCase() === t.data?.type.toLocaleLowerCase())
            );
          } else {
            let e = i?.filter?.event?.toLocaleLowerCase();
            return e === `*` || e === t?.event?.toLocaleLowerCase();
          }
        else return i.type.toLocaleLowerCase() === r;
      });
    }
    _notThisChannelEvent(e, t) {
      let { close: n, error: r, leave: i, join: a } = ii;
      return t && [n, r, i, a].includes(e) && t !== this.joinPush.ref;
    }
    _updateFilterTransform() {
      this.channelAdapter.updatePayloadTransform((e, t, n) => {
        if (typeof t == `object` && `ids` in t) {
          let e = t.data,
            {
              schema: n,
              table: r,
              commit_timestamp: i,
              type: a,
              errors: o,
            } = e;
          return Object.assign(
            Object.assign(
              {},
              {
                schema: n,
                table: r,
                commit_timestamp: i,
                eventType: a,
                new: {},
                old: {},
                errors: o,
              },
            ),
            this._getPayloadRecords(e),
          );
        }
        return t;
      });
    }
    copyBindings(e) {
      if (this.joinedOnce)
        throw Error(`cannot copy bindings into joined channel`);
      for (let t in e.bindings)
        for (let n of e.bindings[t]) this._on(n.type, n.filter, n.callback);
    }
    static isFilterValueEqual(e, t) {
      return (e ?? void 0) === (t ?? void 0);
    }
    _getPayloadRecords(e) {
      let t = { new: {}, old: {} };
      return (
        (e.type === `INSERT` || e.type === `UPDATE`) &&
          (t.new = si(e.columns, e.record)),
        (e.type === `UPDATE` || e.type === `DELETE`) &&
          (t.old = si(e.columns, e.old_record)),
        t
      );
    }
  },
  aa = class {
    constructor(e, t) {
      this.socket = new P(e, t);
    }
    get timeout() {
      return this.socket.timeout;
    }
    get endPoint() {
      return this.socket.endPoint;
    }
    get transport() {
      return this.socket.transport;
    }
    get heartbeatIntervalMs() {
      return this.socket.heartbeatIntervalMs;
    }
    get heartbeatCallback() {
      return this.socket.heartbeatCallback;
    }
    set heartbeatCallback(e) {
      this.socket.heartbeatCallback = e;
    }
    get heartbeatTimer() {
      return this.socket.heartbeatTimer;
    }
    get pendingHeartbeatRef() {
      return this.socket.pendingHeartbeatRef;
    }
    get reconnectTimer() {
      return this.socket.reconnectTimer;
    }
    get vsn() {
      return this.socket.vsn;
    }
    get encode() {
      return this.socket.encode;
    }
    get decode() {
      return this.socket.decode;
    }
    get reconnectAfterMs() {
      return this.socket.reconnectAfterMs;
    }
    get sendBuffer() {
      return this.socket.sendBuffer;
    }
    get stateChangeCallbacks() {
      return this.socket.stateChangeCallbacks;
    }
    connect() {
      this.socket.connect();
    }
    disconnect(e, t, n, r = 1e4) {
      return new Promise((i) => {
        (setTimeout(() => i(`timeout`), r),
          this.socket.disconnect(
            () => {
              (e(), i(`ok`));
            },
            t,
            n,
          ));
      });
    }
    push(e) {
      this.socket.push(e);
    }
    log(e, t, n) {
      this.socket.log(e, t, n);
    }
    makeRef() {
      return this.socket.makeRef();
    }
    onOpen(e) {
      this.socket.onOpen(e);
    }
    onClose(e) {
      this.socket.onClose(e);
    }
    onError(e) {
      this.socket.onError(e);
    }
    onMessage(e) {
      this.socket.onMessage(e);
    }
    isConnected() {
      return this.socket.isConnected();
    }
    isConnecting() {
      return this.socket.connectionState() == ai.connecting;
    }
    isDisconnecting() {
      return this.socket.connectionState() == ai.closing;
    }
    connectionState() {
      return this.socket.connectionState();
    }
    endPointURL() {
      return this.socket.endPointURL();
    }
    sendHeartbeat() {
      this.socket.sendHeartbeat();
    }
    getSocket() {
      return this.socket;
    }
  },
  oa = {
    HEARTBEAT_INTERVAL: 25e3,
    RECONNECT_DELAY: 10,
    HEARTBEAT_TIMEOUT_FALLBACK: 100,
  },
  sa = [1e3, 2e3, 5e3, 1e4],
  ca = 1e4;
function la() {
  let e = new Map();
  return {
    get length() {
      return e.size;
    },
    clear() {
      e.clear();
    },
    getItem(t) {
      return e.has(t) ? e.get(t) : null;
    },
    key(t) {
      return Array.from(e.keys())[t] ?? null;
    },
    removeItem(t) {
      e.delete(t);
    },
    setItem(t, n) {
      e.set(t, String(n));
    },
  };
}
function ua() {
  try {
    if (typeof globalThis < `u` && globalThis.sessionStorage)
      return globalThis.sessionStorage;
  } catch {}
  return la();
}
var da = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`,
  fa = class {
    get endPoint() {
      return this.socketAdapter.endPoint;
    }
    get timeout() {
      return this.socketAdapter.timeout;
    }
    get transport() {
      return this.socketAdapter.transport;
    }
    get heartbeatCallback() {
      return this.socketAdapter.heartbeatCallback;
    }
    get heartbeatIntervalMs() {
      return this.socketAdapter.heartbeatIntervalMs;
    }
    get heartbeatTimer() {
      return this.worker
        ? this._workerHeartbeatTimer
        : this.socketAdapter.heartbeatTimer;
    }
    get pendingHeartbeatRef() {
      return this.worker
        ? this._pendingWorkerHeartbeatRef
        : this.socketAdapter.pendingHeartbeatRef;
    }
    get reconnectTimer() {
      return this.socketAdapter.reconnectTimer;
    }
    get vsn() {
      return this.socketAdapter.vsn;
    }
    get encode() {
      return this.socketAdapter.encode;
    }
    get decode() {
      return this.socketAdapter.decode;
    }
    get reconnectAfterMs() {
      return this.socketAdapter.reconnectAfterMs;
    }
    get sendBuffer() {
      return this.socketAdapter.sendBuffer;
    }
    get stateChangeCallbacks() {
      return this.socketAdapter.stateChangeCallbacks;
    }
    constructor(e, t) {
      if (
        ((this.channels = []),
        (this.accessTokenValue = null),
        (this.accessToken = null),
        (this.apiKey = null),
        (this.httpEndpoint = ``),
        (this.headers = {}),
        (this.params = {}),
        (this.ref = 0),
        (this.serializer = new oi()),
        (this._manuallySetToken = !1),
        (this._authPromise = null),
        (this._workerHeartbeatTimer = void 0),
        (this._pendingWorkerHeartbeatRef = null),
        (this._pendingDisconnectTimer = null),
        (this._disconnectOnEmptyChannelsAfterMs = 0),
        (this._resolveFetch = (e) =>
          e ? (...t) => e(...t) : (...e) => fetch(...e)),
        !t?.params?.apikey)
      )
        throw Error(`API key is required to connect to Realtime`);
      this.apiKey = t.params.apikey;
      let n = this._initializeOptions(t);
      ((this.socketAdapter = new aa(e, n)),
        (this.httpEndpoint = gi(e)),
        (this.fetch = this._resolveFetch(t?.fetch)));
    }
    connect() {
      if (
        !(this.isConnecting() || this.isDisconnecting() || this.isConnected())
      ) {
        (this.accessToken &&
          !this._authPromise &&
          this._setAuthSafely(`connect`),
          this._setupConnectionHandlers());
        try {
          this.socketAdapter.connect();
        } catch (e) {
          let t = e.message;
          throw Error(`WebSocket not available: ${t}`);
        }
        this._handleNodeJsRaceCondition();
      }
    }
    endpointURL() {
      return this.socketAdapter.endPointURL();
    }
    async disconnect(e, t) {
      return (
        this._cancelPendingDisconnect(),
        this.isDisconnecting()
          ? `ok`
          : await this.socketAdapter.disconnect(
              () => {
                (clearInterval(this._workerHeartbeatTimer),
                  this._terminateWorker());
              },
              e,
              t,
            )
      );
    }
    getChannels() {
      return this.channels;
    }
    async removeChannel(e) {
      let t = await e.unsubscribe();
      return (t === `ok` && e.teardown(), t);
    }
    async removeAllChannels() {
      let e = this.channels.map(async (e) => {
          let t = await e.unsubscribe();
          return (e.teardown(), t);
        }),
        t = await Promise.all(e);
      return (await this.disconnect(), t);
    }
    log(e, t, n) {
      this.socketAdapter.log(e, t, n);
    }
    connectionState() {
      return this.socketAdapter.connectionState() || ai.closed;
    }
    isConnected() {
      return this.socketAdapter.isConnected();
    }
    isConnecting() {
      return this.socketAdapter.isConnecting();
    }
    isDisconnecting() {
      return this.socketAdapter.isDisconnecting();
    }
    channel(e, t = { config: {} }) {
      let n = `realtime:${e}`,
        r = this.getChannels().find((e) => e.topic === n);
      if (r) return r;
      {
        let n = new ia(`realtime:${e}`, t, this);
        return (this._cancelPendingDisconnect(), this.channels.push(n), n);
      }
    }
    push(e) {
      this.socketAdapter.push(e);
    }
    async setAuth(e = null) {
      this._authPromise = this._performAuth(e);
      try {
        await this._authPromise;
      } finally {
        this._authPromise = null;
      }
    }
    _isManualToken() {
      return this._manuallySetToken;
    }
    async sendHeartbeat() {
      this.socketAdapter.sendHeartbeat();
    }
    onHeartbeat(e) {
      this.socketAdapter.heartbeatCallback = this._wrapHeartbeatCallback(e);
    }
    _makeRef() {
      return this.socketAdapter.makeRef();
    }
    _remove(e) {
      ((this.channels = this.channels.filter((t) => t.topic !== e.topic)),
        this.channels.length === 0 &&
          (this.log(
            `transport`,
            `no channels remaining, scheduling disconnect`,
          ),
          this._schedulePendingDisconnect()));
    }
    _schedulePendingDisconnect() {
      if (
        (this._cancelPendingDisconnect(),
        this._disconnectOnEmptyChannelsAfterMs === 0)
      ) {
        (this.log(`transport`, `disconnecting immediately - no channels`),
          this.disconnect());
        return;
      }
      ((this._pendingDisconnectTimer = setTimeout(() => {
        ((this._pendingDisconnectTimer = null),
          this.channels.length === 0 &&
            (this.log(
              `transport`,
              `deferred disconnect fired - no channels, disconnecting`,
            ),
            this.disconnect()));
      }, this._disconnectOnEmptyChannelsAfterMs)),
        this.log(
          `transport`,
          `deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`,
        ));
    }
    _cancelPendingDisconnect() {
      this._pendingDisconnectTimer !== null &&
        (this.log(
          `transport`,
          `pending disconnect cancelled - channel activity detected`,
        ),
        clearTimeout(this._pendingDisconnectTimer),
        (this._pendingDisconnectTimer = null));
    }
    async _performAuth(e = null) {
      let t,
        n = !1;
      if (e) ((t = e), (n = !0));
      else if (this.accessToken)
        try {
          t = await this.accessToken();
        } catch (e) {
          (this.log(`error`, `Error fetching access token from callback`, e),
            (t = this.accessTokenValue));
        }
      else t = this.accessTokenValue;
      (n
        ? (this._manuallySetToken = !0)
        : this.accessToken && (this._manuallySetToken = !1),
        this.accessTokenValue != t &&
          ((this.accessTokenValue = t),
          this.channels.forEach((e) => {
            let n = { access_token: t, version: Qr };
            (t && e.updateJoinPayload(n),
              e.joinedOnce &&
                e.channelAdapter.isJoined() &&
                e.channelAdapter.push(ii.access_token, { access_token: t }));
          })));
    }
    async _waitForAuthIfNeeded() {
      this._authPromise && (await this._authPromise);
    }
    _setAuthSafely(e = `general`) {
      this._isManualToken() ||
        this.setAuth().catch((t) => {
          this.log(`error`, `Error setting auth in ${e}`, t);
        });
    }
    _setupConnectionHandlers() {
      (this.socketAdapter.onOpen(() => {
        ((
          this._authPromise ||
          (this.accessToken && !this.accessTokenValue
            ? this.setAuth()
            : Promise.resolve())
        ).catch((e) => {
          this.log(`error`, `error waiting for auth on connect`, e);
        }),
          this.worker && !this.workerRef && this._startWorkerHeartbeat());
      }),
        this.socketAdapter.onClose(() => {
          this.worker && this.workerRef && this._terminateWorker();
        }),
        this.socketAdapter.onMessage((e) => {
          e.ref &&
            e.ref === this._pendingWorkerHeartbeatRef &&
            (this._pendingWorkerHeartbeatRef = null);
        }));
    }
    _handleNodeJsRaceCondition() {
      this.socketAdapter.isConnected() &&
        this.socketAdapter.getSocket().onConnOpen();
    }
    _wrapHeartbeatCallback(e) {
      return (t, n) => {
        t !== `disconnected` &&
          (t == `sent` && this._setAuthSafely(), e && e(t, n));
      };
    }
    _startWorkerHeartbeat() {
      this.workerUrl
        ? this.log(`worker`, `starting worker for from ${this.workerUrl}`)
        : this.log(`worker`, `starting default worker`);
      let e = this._workerObjectUrl(this.workerUrl);
      ((this.workerRef = new Worker(e)),
        (this.workerRef.onerror = (e) => {
          (this.log(`worker`, `worker error`, e.message),
            this._terminateWorker(),
            this.disconnect());
        }),
        (this.workerRef.onmessage = (e) => {
          e.data.event === `keepAlive` && this.sendHeartbeat();
        }),
        this.workerRef.postMessage({
          event: `start`,
          interval: this.heartbeatIntervalMs,
        }));
    }
    _terminateWorker() {
      this.workerRef &&=
        (this.log(`worker`, `terminating worker`),
        this.workerRef.terminate(),
        void 0);
    }
    _workerObjectUrl(e) {
      let t;
      if (e) t = e;
      else {
        let e = new Blob([da], { type: `application/javascript` });
        t = URL.createObjectURL(e);
      }
      return t;
    }
    _initializeOptions(e) {
      ((this.worker = e?.worker ?? !1),
        (this.accessToken = e?.accessToken ?? null));
      let t = {};
      ((t.timeout = e?.timeout ?? ni),
        (t.heartbeatIntervalMs =
          e?.heartbeatIntervalMs ?? oa.HEARTBEAT_INTERVAL),
        (this._disconnectOnEmptyChannelsAfterMs =
          e?.disconnectOnEmptyChannelsAfterMs ??
          2 * (e?.heartbeatIntervalMs ?? oa.HEARTBEAT_INTERVAL)),
        (t.transport = e?.transport ?? Zr.getWebSocketConstructor()),
        (t.params = e?.params),
        (t.logger = e?.logger),
        (t.heartbeatCallback = this._wrapHeartbeatCallback(
          e?.heartbeatCallback,
        )),
        (t.sessionStorage = e?.sessionStorage ?? ua()),
        (t.reconnectAfterMs = e?.reconnectAfterMs ?? ((e) => sa[e - 1] || ca)));
      let n,
        r,
        i = e?.vsn ?? ti;
      switch (i) {
        case $r:
          ((n = (e, t) => t(JSON.stringify(e))),
            (r = (e, t) => t(JSON.parse(e))));
          break;
        case ei:
          ((n = this.serializer.encode.bind(this.serializer)),
            (r = this.serializer.decode.bind(this.serializer)));
          break;
        default:
          throw Error(`Unsupported serializer version: ${t.vsn}`);
      }
      if (
        ((t.vsn = i),
        (t.encode = e?.encode ?? n),
        (t.decode = e?.decode ?? r),
        (t.beforeReconnect = this._reconnectAuth.bind(this)),
        (e?.logLevel || e?.log_level) &&
          ((this.logLevel = e.logLevel || e.log_level),
          (t.params = Object.assign(Object.assign({}, t.params), {
            log_level: this.logLevel,
          }))),
        this.worker)
      ) {
        if (typeof window < `u` && !window.Worker)
          throw Error(`Web Worker is not supported`);
        ((this.workerUrl = e?.workerUrl), (t.autoSendHeartbeat = !this.worker));
      }
      return t;
    }
    async _reconnectAuth() {
      (await this._waitForAuthIfNeeded(), this.isConnected() || this.connect());
    }
  },
  pa = class extends Error {
    constructor(e, t) {
      (super(e),
        (this.name = `IcebergError`),
        (this.status = t.status),
        (this.icebergType = t.icebergType),
        (this.icebergCode = t.icebergCode),
        (this.details = t.details),
        (this.isCommitStateUnknown =
          t.icebergType === `CommitStateUnknownException` ||
          ([500, 502, 504].includes(t.status) &&
            t.icebergType?.includes(`CommitState`) === !0)));
    }
    isNotFound() {
      return this.status === 404;
    }
    isConflict() {
      return this.status === 409;
    }
    isAuthenticationTimeout() {
      return this.status === 419;
    }
  };
function ma(e, t, n) {
  let r = new URL(t, e);
  if (n)
    for (let [e, t] of Object.entries(n))
      t !== void 0 && r.searchParams.set(e, t);
  return r.toString();
}
async function ha(e) {
  return !e || e.type === `none`
    ? {}
    : e.type === `bearer`
      ? { Authorization: `Bearer ${e.token}` }
      : e.type === `header`
        ? { [e.name]: e.value }
        : e.type === `custom`
          ? await e.getHeaders()
          : {};
}
function ga(e) {
  let t = e.fetchImpl ?? globalThis.fetch;
  return {
    async request({ method: n, path: r, query: i, body: a, headers: o }) {
      let s = ma(e.baseUrl, r, i),
        c = await ha(e.auth),
        l = await t(s, {
          method: n,
          headers: {
            ...(a ? { "Content-Type": `application/json` } : {}),
            ...c,
            ...o,
          },
          body: a ? JSON.stringify(a) : void 0,
        }),
        u = await l.text(),
        d = (l.headers.get(`content-type`) || ``).includes(`application/json`),
        f = d && u ? JSON.parse(u) : u;
      if (!l.ok) {
        let e = d ? f : void 0,
          t = e?.error;
        throw new pa(t?.message ?? `Request failed with status ${l.status}`, {
          status: l.status,
          icebergType: t?.type,
          icebergCode: t?.code,
          details: e,
        });
      }
      return { status: l.status, headers: l.headers, data: f };
    },
  };
}
function _a(e) {
  return e.join(``);
}
var va = class {
  constructor(e, t = ``) {
    ((this.client = e), (this.prefix = t));
  }
  async listNamespaces(e) {
    let t = e ? { parent: _a(e.namespace) } : void 0;
    return (
      await this.client.request({
        method: `GET`,
        path: `${this.prefix}/namespaces`,
        query: t,
      })
    ).data.namespaces.map((e) => ({ namespace: e }));
  }
  async createNamespace(e, t) {
    let n = { namespace: e.namespace, properties: t?.properties };
    return (
      await this.client.request({
        method: `POST`,
        path: `${this.prefix}/namespaces`,
        body: n,
      })
    ).data;
  }
  async dropNamespace(e) {
    await this.client.request({
      method: `DELETE`,
      path: `${this.prefix}/namespaces/${_a(e.namespace)}`,
    });
  }
  async loadNamespaceMetadata(e) {
    return {
      properties: (
        await this.client.request({
          method: `GET`,
          path: `${this.prefix}/namespaces/${_a(e.namespace)}`,
        })
      ).data.properties,
    };
  }
  async namespaceExists(e) {
    try {
      return (
        await this.client.request({
          method: `HEAD`,
          path: `${this.prefix}/namespaces/${_a(e.namespace)}`,
        }),
        !0
      );
    } catch (e) {
      if (e instanceof pa && e.status === 404) return !1;
      throw e;
    }
  }
  async createNamespaceIfNotExists(e, t) {
    try {
      return await this.createNamespace(e, t);
    } catch (e) {
      if (e instanceof pa && e.status === 409) return;
      throw e;
    }
  }
};
function ya(e) {
  return e.join(``);
}
var ba = class {
    constructor(e, t = ``, n) {
      ((this.client = e), (this.prefix = t), (this.accessDelegation = n));
    }
    async listTables(e) {
      return (
        await this.client.request({
          method: `GET`,
          path: `${this.prefix}/namespaces/${ya(e.namespace)}/tables`,
        })
      ).data.identifiers;
    }
    async createTable(e, t) {
      let n = {};
      return (
        this.accessDelegation &&
          (n[`X-Iceberg-Access-Delegation`] = this.accessDelegation),
        (
          await this.client.request({
            method: `POST`,
            path: `${this.prefix}/namespaces/${ya(e.namespace)}/tables`,
            body: t,
            headers: n,
          })
        ).data.metadata
      );
    }
    async updateTable(e, t) {
      let n = await this.client.request({
        method: `POST`,
        path: `${this.prefix}/namespaces/${ya(e.namespace)}/tables/${e.name}`,
        body: t,
      });
      return {
        "metadata-location": n.data[`metadata-location`],
        metadata: n.data.metadata,
      };
    }
    async dropTable(e, t) {
      await this.client.request({
        method: `DELETE`,
        path: `${this.prefix}/namespaces/${ya(e.namespace)}/tables/${e.name}`,
        query: { purgeRequested: String(t?.purge ?? !1) },
      });
    }
    async loadTable(e) {
      let t = {};
      return (
        this.accessDelegation &&
          (t[`X-Iceberg-Access-Delegation`] = this.accessDelegation),
        (
          await this.client.request({
            method: `GET`,
            path: `${this.prefix}/namespaces/${ya(e.namespace)}/tables/${e.name}`,
            headers: t,
          })
        ).data.metadata
      );
    }
    async tableExists(e) {
      let t = {};
      this.accessDelegation &&
        (t[`X-Iceberg-Access-Delegation`] = this.accessDelegation);
      try {
        return (
          await this.client.request({
            method: `HEAD`,
            path: `${this.prefix}/namespaces/${ya(e.namespace)}/tables/${e.name}`,
            headers: t,
          }),
          !0
        );
      } catch (e) {
        if (e instanceof pa && e.status === 404) return !1;
        throw e;
      }
    }
    async createTableIfNotExists(e, t) {
      try {
        return await this.createTable(e, t);
      } catch (n) {
        if (n instanceof pa && n.status === 409)
          return await this.loadTable({ namespace: e.namespace, name: t.name });
        throw n;
      }
    }
  },
  xa = class {
    constructor(e) {
      let t = `v1`;
      e.catalogName && (t += `/${e.catalogName}`);
      let n = e.baseUrl.endsWith(`/`) ? e.baseUrl : `${e.baseUrl}/`;
      ((this.client = ga({ baseUrl: n, auth: e.auth, fetchImpl: e.fetch })),
        (this.accessDelegation = e.accessDelegation?.join(`,`)),
        (this.namespaceOps = new va(this.client, t)),
        (this.tableOps = new ba(this.client, t, this.accessDelegation)));
    }
    async listNamespaces(e) {
      return this.namespaceOps.listNamespaces(e);
    }
    async createNamespace(e, t) {
      return this.namespaceOps.createNamespace(e, t);
    }
    async dropNamespace(e) {
      await this.namespaceOps.dropNamespace(e);
    }
    async loadNamespaceMetadata(e) {
      return this.namespaceOps.loadNamespaceMetadata(e);
    }
    async listTables(e) {
      return this.tableOps.listTables(e);
    }
    async createTable(e, t) {
      return this.tableOps.createTable(e, t);
    }
    async updateTable(e, t) {
      return this.tableOps.updateTable(e, t);
    }
    async dropTable(e, t) {
      await this.tableOps.dropTable(e, t);
    }
    async loadTable(e) {
      return this.tableOps.loadTable(e);
    }
    async namespaceExists(e) {
      return this.namespaceOps.namespaceExists(e);
    }
    async tableExists(e) {
      return this.tableOps.tableExists(e);
    }
    async createNamespaceIfNotExists(e, t) {
      return this.namespaceOps.createNamespaceIfNotExists(e, t);
    }
    async createTableIfNotExists(e, t) {
      return this.tableOps.createTableIfNotExists(e, t);
    }
  };
function Sa(e) {
  "@babel/helpers - typeof";
  return (
    (Sa =
      typeof Symbol == `function` && typeof Symbol.iterator == `symbol`
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == `function` &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? `symbol`
              : typeof e;
          }),
    Sa(e)
  );
}
function Ca(e, t) {
  if (Sa(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (Sa(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function wa(e) {
  var t = Ca(e, `string`);
  return Sa(t) == `symbol` ? t : t + ``;
}
function Ta(e, t, n) {
  return (
    (t = wa(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Ea(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Ea(Object(n), !0).forEach(function (t) {
          Ta(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ea(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Da = class extends Error {
  constructor(e, t = `storage`, n, r) {
    (super(e),
      (this.__isStorageError = !0),
      (this.namespace = t),
      (this.name = t === `vectors` ? `StorageVectorsError` : `StorageError`),
      (this.status = n),
      (this.statusCode = r));
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      statusCode: this.statusCode,
    };
  }
};
function Oa(e) {
  return typeof e == `object` && !!e && `__isStorageError` in e;
}
var ka = class extends Da {
    constructor(e, t, n, r = `storage`) {
      (super(e, r, t, n),
        (this.name =
          r === `vectors` ? `StorageVectorsApiError` : `StorageApiError`),
        (this.status = t),
        (this.statusCode = n));
    }
    toJSON() {
      return I({}, super.toJSON());
    }
  },
  Aa = class extends Da {
    constructor(e, t, n = `storage`) {
      (super(e, n),
        (this.name =
          n === `vectors`
            ? `StorageVectorsUnknownError`
            : `StorageUnknownError`),
        (this.originalError = t));
    }
  };
function ja(e, t, n) {
  let r = I({}, e),
    i = t.toLowerCase();
  for (let e of Object.keys(r)) e.toLowerCase() === i && delete r[e];
  return ((r[i] = n), r);
}
function Ma(e) {
  let t = {};
  for (let [n, r] of Object.entries(e)) t[n.toLowerCase()] = r;
  return t;
}
var Na = (e) => (e ? (...t) => e(...t) : (...e) => fetch(...e)),
  Pa = (e) => {
    if (typeof e != `object` || !e) return !1;
    let t = Object.getPrototypeOf(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Fa = (e) => {
    if (Array.isArray(e)) return e.map((e) => Fa(e));
    if (typeof e == `function` || e !== Object(e)) return e;
    let t = {};
    return (
      Object.entries(e).forEach(([e, n]) => {
        let r = e.replace(/([-_][a-z])/gi, (e) =>
          e.toUpperCase().replace(/[-_]/g, ``),
        );
        t[r] = Fa(n);
      }),
      t
    );
  },
  Ia = (e) =>
    !e ||
    typeof e != `string` ||
    e.length === 0 ||
    e.length > 100 ||
    e.trim() !== e ||
    e.includes(`/`) ||
    e.includes(`\\`)
      ? !1
      : /^[\w!.\*'() &$@=;:+,?-]+$/.test(e),
  La = (e) => e.split(`/`).map(encodeURIComponent).join(`/`),
  Ra = (e) => {
    if (typeof e == `object` && e) {
      let t = e;
      if (typeof t.msg == `string`) return t.msg;
      if (typeof t.message == `string`) return t.message;
      if (typeof t.error_description == `string`) return t.error_description;
      if (typeof t.error == `string`) return t.error;
      if (typeof t.error == `object` && t.error !== null) {
        let e = t.error;
        if (typeof e.message == `string`) return e.message;
      }
    }
    return JSON.stringify(e);
  },
  za = async (e, t, n, r) => {
    if (
      typeof e == `object` &&
      e &&
      `json` in e &&
      typeof e.json == `function`
    ) {
      let n = e,
        i = parseInt(String(n.status), 10);
      (Number.isFinite(i) || (i = 500),
        n
          .json()
          .then((e) => {
            let n = e?.statusCode || e?.code || i + ``;
            t(new ka(Ra(e), i, n, r));
          })
          .catch(() => {
            let e = i + ``;
            t(new ka(n.statusText || `HTTP ${i} error`, i, e, r));
          }));
    } else t(new Aa(Ra(e), e, r));
  },
  Ba = (e, t, n, r) => {
    let i = { method: e, headers: t?.headers || {} };
    if (e === `GET` || e === `HEAD` || !r) return I(I({}, i), n);
    if (Pa(r)) {
      let e = t?.headers || {},
        n;
      for (let [t, r] of Object.entries(e))
        t.toLowerCase() === `content-type` && (n = r);
      ((i.headers = ja(e, `Content-Type`, n ?? `application/json`)),
        (i.body = JSON.stringify(r)));
    } else i.body = r;
    return (t?.duplex && (i.duplex = t.duplex), I(I({}, i), n));
  };
async function Va(e, t, n, r, i, a, o) {
  return new Promise((s, c) => {
    e(n, Ba(t, r, i, a))
      .then((e) => {
        if (!e.ok) throw e;
        if (r?.noResolveJson) return e;
        if (o === `vectors`) {
          let t = e.headers.get(`content-type`);
          if (
            e.headers.get(`content-length`) === `0` ||
            e.status === 204 ||
            !t ||
            !t.includes(`application/json`)
          )
            return {};
        }
        return e.json();
      })
      .then((e) => s(e))
      .catch((e) => za(e, c, r, o));
  });
}
function Ha(e = `storage`) {
  return {
    get: async (t, n, r, i) => Va(t, `GET`, n, r, i, void 0, e),
    post: async (t, n, r, i, a) => Va(t, `POST`, n, i, a, r, e),
    put: async (t, n, r, i, a) => Va(t, `PUT`, n, i, a, r, e),
    head: async (t, n, r, i) =>
      Va(t, `HEAD`, n, I(I({}, r), {}, { noResolveJson: !0 }), i, void 0, e),
    remove: async (t, n, r, i, a) => Va(t, `DELETE`, n, i, a, r, e),
  };
}
var { get: Ua, post: Wa, put: Ga, head: Ka, remove: qa } = Ha(`storage`),
  Ja = Ha(`vectors`),
  Ya = class {
    constructor(e, t = {}, n, r = `storage`) {
      ((this.shouldThrowOnError = !1),
        (this.url = e),
        (this.headers = Ma(t)),
        (this.fetch = Na(n)),
        (this.namespace = r));
    }
    throwOnError() {
      return ((this.shouldThrowOnError = !0), this);
    }
    setHeader(e, t) {
      return ((this.headers = ja(this.headers, e, t)), this);
    }
    async handleOperation(e) {
      var t = this;
      try {
        return { data: await e(), error: null };
      } catch (e) {
        if (t.shouldThrowOnError) throw e;
        if (Oa(e)) return { data: null, error: e };
        throw e;
      }
    }
  },
  Xa = Symbol.toStringTag,
  Za = class {
    constructor(e, t) {
      ((this.downloadFn = e),
        (this.shouldThrowOnError = t),
        (this[Xa] = `StreamDownloadBuilder`),
        (this.promise = null));
    }
    then(e, t) {
      return this.getPromise().then(e, t);
    }
    catch(e) {
      return this.getPromise().catch(e);
    }
    finally(e) {
      return this.getPromise().finally(e);
    }
    getPromise() {
      return ((this.promise ||= this.execute()), this.promise);
    }
    async execute() {
      var e = this;
      try {
        return { data: (await e.downloadFn()).body, error: null };
      } catch (t) {
        if (e.shouldThrowOnError) throw t;
        if (Oa(t)) return { data: null, error: t };
        throw t;
      }
    }
  },
  Qa = Symbol.toStringTag,
  $a = class {
    constructor(e, t) {
      ((this.downloadFn = e),
        (this.shouldThrowOnError = t),
        (this[Qa] = `BlobDownloadBuilder`),
        (this.promise = null));
    }
    asStream() {
      return new Za(this.downloadFn, this.shouldThrowOnError);
    }
    then(e, t) {
      return this.getPromise().then(e, t);
    }
    catch(e) {
      return this.getPromise().catch(e);
    }
    finally(e) {
      return this.getPromise().finally(e);
    }
    getPromise() {
      return ((this.promise ||= this.execute()), this.promise);
    }
    async execute() {
      var e = this;
      try {
        return { data: await (await e.downloadFn()).blob(), error: null };
      } catch (t) {
        if (e.shouldThrowOnError) throw t;
        if (Oa(t)) return { data: null, error: t };
        throw t;
      }
    }
  },
  eo = { limit: 100, offset: 0, sortBy: { column: `name`, order: `asc` } },
  to = {
    cacheControl: `3600`,
    contentType: `text/plain;charset=UTF-8`,
    upsert: !1,
  },
  no = class extends Ya {
    constructor(e, t = {}, n, r) {
      (super(e, t, r, `storage`), (this.bucketId = n));
    }
    async uploadOrUpdate(e, t, n, r) {
      var i = this;
      return i.handleOperation(async () => {
        let a,
          o = I(I({}, to), r),
          s = I(
            I({}, i.headers),
            e === `POST` && { "x-upsert": String(o.upsert) },
          ),
          c = o.metadata;
        if (
          (typeof Blob < `u` && n instanceof Blob
            ? ((a = new FormData()),
              a.append(`cacheControl`, o.cacheControl),
              c && a.append(`metadata`, i.encodeMetadata(c)),
              a.append(``, n))
            : typeof FormData < `u` && n instanceof FormData
              ? ((a = n),
                a.has(`cacheControl`) ||
                  a.append(`cacheControl`, o.cacheControl),
                c &&
                  !a.has(`metadata`) &&
                  a.append(`metadata`, i.encodeMetadata(c)))
              : ((a = n),
                (s[`cache-control`] = `max-age=${o.cacheControl}`),
                (s[`content-type`] = o.contentType),
                c && (s[`x-metadata`] = i.toBase64(i.encodeMetadata(c))),
                ((typeof ReadableStream < `u` && a instanceof ReadableStream) ||
                  (a &&
                    typeof a == `object` &&
                    `pipe` in a &&
                    typeof a.pipe == `function`)) &&
                  !o.duplex &&
                  (o.duplex = `half`)),
          r?.headers)
        )
          for (let [e, t] of Object.entries(r.headers)) s = ja(s, e, t);
        let l = i._removeEmptyFolders(t),
          u = i._getFinalPath(l),
          d = await (e == `PUT` ? Ga : Wa)(
            i.fetch,
            `${i.url}/object/${u}`,
            a,
            I({ headers: s }, o?.duplex ? { duplex: o.duplex } : {}),
          );
        return { path: l, id: d.Id, fullPath: d.Key };
      });
    }
    async upload(e, t, n) {
      return this.uploadOrUpdate(`POST`, e, t, n);
    }
    async uploadToSignedUrl(e, t, n, r) {
      var i = this;
      let a = i._removeEmptyFolders(e),
        o = i._getFinalPath(a),
        s = new URL(i.url + `/object/upload/sign/${o}`);
      return (
        s.searchParams.set(`token`, t),
        i.handleOperation(async () => {
          let e,
            t = I(I({}, to), r),
            o = I(I({}, i.headers), { "x-upsert": String(t.upsert) }),
            c = t.metadata;
          if (
            (typeof Blob < `u` && n instanceof Blob
              ? ((e = new FormData()),
                e.append(`cacheControl`, t.cacheControl),
                c && e.append(`metadata`, i.encodeMetadata(c)),
                e.append(``, n))
              : typeof FormData < `u` && n instanceof FormData
                ? ((e = n),
                  e.has(`cacheControl`) ||
                    e.append(`cacheControl`, t.cacheControl),
                  c &&
                    !e.has(`metadata`) &&
                    e.append(`metadata`, i.encodeMetadata(c)))
                : ((e = n),
                  (o[`cache-control`] = `max-age=${t.cacheControl}`),
                  (o[`content-type`] = t.contentType),
                  c && (o[`x-metadata`] = i.toBase64(i.encodeMetadata(c))),
                  ((typeof ReadableStream < `u` &&
                    e instanceof ReadableStream) ||
                    (e &&
                      typeof e == `object` &&
                      `pipe` in e &&
                      typeof e.pipe == `function`)) &&
                    !t.duplex &&
                    (t.duplex = `half`)),
            r?.headers)
          )
            for (let [e, t] of Object.entries(r.headers)) o = ja(o, e, t);
          return {
            path: a,
            fullPath: (
              await Ga(
                i.fetch,
                s.toString(),
                e,
                I({ headers: o }, t?.duplex ? { duplex: t.duplex } : {}),
              )
            ).Key,
          };
        })
      );
    }
    async createSignedUploadUrl(e, t) {
      var n = this;
      return n.handleOperation(async () => {
        let r = n._getFinalPath(e),
          i = I({}, n.headers);
        t?.upsert && (i[`x-upsert`] = `true`);
        let a = await Wa(
            n.fetch,
            `${n.url}/object/upload/sign/${r}`,
            {},
            { headers: i },
          ),
          o = new URL(n.url + a.url),
          s = o.searchParams.get(`token`);
        if (!s) throw new Da(`No token returned by API`);
        return { signedUrl: o.toString(), path: e, token: s };
      });
    }
    async update(e, t, n) {
      return this.uploadOrUpdate(`PUT`, e, t, n);
    }
    async move(e, t, n) {
      var r = this;
      return r.handleOperation(
        async () =>
          await Wa(
            r.fetch,
            `${r.url}/object/move`,
            {
              bucketId: r.bucketId,
              sourceKey: e,
              destinationKey: t,
              destinationBucket: n?.destinationBucket,
            },
            { headers: r.headers },
          ),
      );
    }
    async copy(e, t, n) {
      var r = this;
      return r.handleOperation(async () => ({
        path: (
          await Wa(
            r.fetch,
            `${r.url}/object/copy`,
            {
              bucketId: r.bucketId,
              sourceKey: e,
              destinationKey: t,
              destinationBucket: n?.destinationBucket,
            },
            { headers: r.headers },
          )
        ).Key,
      }));
    }
    async createSignedUrl(e, t, n) {
      var r = this;
      return r.handleOperation(async () => {
        let i = r._getFinalPath(e),
          a =
            typeof n?.transform == `object` &&
            n.transform !== null &&
            Object.keys(n.transform).length > 0,
          o = await Wa(
            r.fetch,
            `${r.url}/object/sign/${i}`,
            I({ expiresIn: t }, a ? { transform: n.transform } : {}),
            { headers: r.headers },
          ),
          s = new URLSearchParams();
        (n?.download && s.set(`download`, n.download === !0 ? `` : n.download),
          n?.cacheNonce != null && s.set(`cacheNonce`, String(n.cacheNonce)));
        let c = s.toString();
        return {
          signedUrl: encodeURI(`${r.url}${o.signedURL}${c ? `&${c}` : ``}`),
        };
      });
    }
    async createSignedUrls(e, t, n) {
      var r = this;
      return r.handleOperation(async () => {
        let i = await Wa(
            r.fetch,
            `${r.url}/object/sign/${r.bucketId}`,
            { expiresIn: t, paths: e },
            { headers: r.headers },
          ),
          a = new URLSearchParams();
        (n?.download && a.set(`download`, n.download === !0 ? `` : n.download),
          n?.cacheNonce != null && a.set(`cacheNonce`, String(n.cacheNonce)));
        let o = a.toString();
        return i.map((e) =>
          I(
            I({}, e),
            {},
            {
              signedUrl: e.signedURL
                ? encodeURI(`${r.url}${e.signedURL}${o ? `&${o}` : ``}`)
                : null,
            },
          ),
        );
      });
    }
    download(e, t, n) {
      let r =
          typeof t?.transform == `object` &&
          t.transform !== null &&
          Object.keys(t.transform).length > 0
            ? `render/image/authenticated`
            : `object`,
        i = new URLSearchParams();
      (t?.transform && this.applyTransformOptsToQuery(i, t.transform),
        t?.cacheNonce != null && i.set(`cacheNonce`, String(t.cacheNonce)));
      let a = i.toString(),
        o = this._getFinalPath(e);
      return new $a(
        () =>
          Ua(
            this.fetch,
            `${this.url}/${r}/${o}${a ? `?${a}` : ``}`,
            { headers: this.headers, noResolveJson: !0 },
            n,
          ),
        this.shouldThrowOnError,
      );
    }
    async info(e) {
      var t = this;
      let n = t._getFinalPath(e);
      return t.handleOperation(async () =>
        Fa(
          await Ua(t.fetch, `${t.url}/object/info/${n}`, {
            headers: t.headers,
          }),
        ),
      );
    }
    async exists(e) {
      var t = this;
      let n = t._getFinalPath(e);
      try {
        return (
          await Ka(t.fetch, `${t.url}/object/${n}`, { headers: t.headers }),
          { data: !0, error: null }
        );
      } catch (e) {
        if (t.shouldThrowOnError) throw e;
        if (Oa(e)) {
          let t =
            e instanceof ka
              ? e.status
              : e instanceof Aa
                ? e.originalError?.status
                : void 0;
          if (t !== void 0 && [400, 404].includes(t))
            return { data: !1, error: e };
        }
        throw e;
      }
    }
    getPublicUrl(e, t) {
      let n = this._getFinalPath(e),
        r = new URLSearchParams();
      (t?.download && r.set(`download`, t.download === !0 ? `` : t.download),
        t?.transform && this.applyTransformOptsToQuery(r, t.transform),
        t?.cacheNonce != null && r.set(`cacheNonce`, String(t.cacheNonce)));
      let i = r.toString(),
        a =
          typeof t?.transform == `object` &&
          t.transform !== null &&
          Object.keys(t.transform).length > 0
            ? `render/image`
            : `object`;
      return {
        data: {
          publicUrl:
            encodeURI(`${this.url}/${a}/public/${n}`) + (i ? `?${i}` : ``),
        },
      };
    }
    async remove(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await qa(
            t.fetch,
            `${t.url}/object/${t.bucketId}`,
            { prefixes: e },
            { headers: t.headers },
          ),
      );
    }
    async purgeCache(e, t, n) {
      var r = this;
      return r.handleOperation(async () => {
        let i = La(r._getFinalPath(e)),
          a = new URLSearchParams();
        t?.transformations && a.set(`transformations`, `true`);
        let o = a.toString();
        return await qa(
          r.fetch,
          `${r.url}/cdn/${i}${o ? `?${o}` : ``}`,
          {},
          { headers: r.headers },
          n,
        );
      });
    }
    async list(e, t, n) {
      var r = this;
      return r.handleOperation(async () => {
        let i = t?.sortBy ? I(I({}, eo.sortBy), t.sortBy) : eo.sortBy,
          a = I(I(I({}, eo), t), {}, { sortBy: i, prefix: e || `` });
        return await Wa(
          r.fetch,
          `${r.url}/object/list/${r.bucketId}`,
          a,
          { headers: r.headers },
          n,
        );
      });
    }
    async listV2(e, t) {
      var n = this;
      return n.handleOperation(async () => {
        let r = I({}, e);
        return await Wa(
          n.fetch,
          `${n.url}/object/list-v2/${n.bucketId}`,
          r,
          { headers: n.headers },
          t,
        );
      });
    }
    encodeMetadata(e) {
      return JSON.stringify(e);
    }
    toBase64(e) {
      return typeof Buffer < `u` ? Buffer.from(e).toString(`base64`) : btoa(e);
    }
    _getFinalPath(e) {
      return `${this.bucketId}/${e.replace(/^\/+/, ``)}`;
    }
    _removeEmptyFolders(e) {
      return e.replace(/^\/|\/$/g, ``).replace(/\/+/g, `/`);
    }
    applyTransformOptsToQuery(e, t) {
      return (
        t.width && e.set(`width`, t.width.toString()),
        t.height && e.set(`height`, t.height.toString()),
        t.resize && e.set(`resize`, t.resize),
        t.format && e.set(`format`, t.format),
        t.quality && e.set(`quality`, t.quality.toString()),
        e
      );
    }
  },
  ro = { "X-Client-Info": `storage-js/2.111.0` },
  io = class extends Ya {
    constructor(e, t = {}, n, r) {
      let i = new URL(e);
      r?.useNewHostname &&
        /supabase\.(co|in|red)$/.test(i.hostname) &&
        !i.hostname.includes(`storage.supabase.`) &&
        (i.hostname = i.hostname.replace(`supabase.`, `storage.supabase.`));
      let a = i.href.replace(/\/$/, ``),
        o = I(I({}, ro), t);
      super(a, o, n, `storage`);
    }
    async listBuckets(e) {
      var t = this;
      return t.handleOperation(async () => {
        let n = t.listBucketOptionsToQueryString(e);
        return await Ua(t.fetch, `${t.url}/bucket${n}`, { headers: t.headers });
      });
    }
    async getBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await Ua(t.fetch, `${t.url}/bucket/${e}`, { headers: t.headers }),
      );
    }
    async createBucket(e, t = { public: !1 }) {
      var n = this;
      return n.handleOperation(
        async () =>
          await Wa(
            n.fetch,
            `${n.url}/bucket`,
            {
              id: e,
              name: e,
              type: t.type,
              public: t.public,
              file_size_limit: t.fileSizeLimit,
              allowed_mime_types: t.allowedMimeTypes,
            },
            { headers: n.headers },
          ),
      );
    }
    async updateBucket(e, t) {
      var n = this;
      return n.handleOperation(
        async () =>
          await Ga(
            n.fetch,
            `${n.url}/bucket/${e}`,
            {
              id: e,
              name: e,
              public: t.public,
              file_size_limit: t.fileSizeLimit,
              allowed_mime_types: t.allowedMimeTypes,
            },
            { headers: n.headers },
          ),
      );
    }
    async emptyBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await Wa(
            t.fetch,
            `${t.url}/bucket/${e}/empty`,
            {},
            { headers: t.headers },
          ),
      );
    }
    async deleteBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await qa(t.fetch, `${t.url}/bucket/${e}`, {}, { headers: t.headers }),
      );
    }
    async purgeBucketCache(e, t, n) {
      var r = this;
      return r.handleOperation(async () => {
        let i = new URLSearchParams();
        t?.transformations && i.set(`transformations`, `true`);
        let a = i.toString();
        return await qa(
          r.fetch,
          `${r.url}/cdn/${La(e)}${a ? `?${a}` : ``}`,
          {},
          { headers: r.headers },
          n,
        );
      });
    }
    listBucketOptionsToQueryString(e) {
      let t = {};
      return (
        e &&
          (`limit` in e && (t.limit = String(e.limit)),
          `offset` in e && (t.offset = String(e.offset)),
          e.search && (t.search = e.search),
          e.sortColumn && (t.sortColumn = e.sortColumn),
          e.sortOrder && (t.sortOrder = e.sortOrder)),
        Object.keys(t).length > 0 ? `?` + new URLSearchParams(t).toString() : ``
      );
    }
  },
  ao = class extends Ya {
    constructor(e, t = {}, n) {
      let r = e.replace(/\/$/, ``),
        i = I(I({}, ro), t);
      super(r, i, n, `storage`);
    }
    async createBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await Wa(
            t.fetch,
            `${t.url}/bucket`,
            { name: e },
            { headers: t.headers },
          ),
      );
    }
    async listBuckets(e) {
      var t = this;
      return t.handleOperation(async () => {
        let n = new URLSearchParams();
        (e?.limit !== void 0 && n.set(`limit`, e.limit.toString()),
          e?.offset !== void 0 && n.set(`offset`, e.offset.toString()),
          e?.sortColumn && n.set(`sortColumn`, e.sortColumn),
          e?.sortOrder && n.set(`sortOrder`, e.sortOrder),
          e?.search && n.set(`search`, e.search));
        let r = n.toString(),
          i = r ? `${t.url}/bucket?${r}` : `${t.url}/bucket`;
        return await Ua(t.fetch, i, { headers: t.headers });
      });
    }
    async deleteBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await qa(t.fetch, `${t.url}/bucket/${e}`, {}, { headers: t.headers }),
      );
    }
    from(e) {
      var t = this;
      if (!Ia(e))
        throw new Da(
          `Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.`,
        );
      let n = new xa({
          baseUrl: this.url,
          catalogName: e,
          auth: { type: `custom`, getHeaders: async () => t.headers },
          fetch: this.fetch,
        }),
        r = this.shouldThrowOnError;
      return new Proxy(n, {
        get(e, t) {
          let n = e[t];
          return typeof n == `function`
            ? async (...t) => {
                try {
                  return { data: await n.apply(e, t), error: null };
                } catch (e) {
                  if (r) throw e;
                  return { data: null, error: e };
                }
              }
            : n;
        },
      });
    }
  },
  oo = class extends Ya {
    constructor(e, t = {}, n) {
      let r = e.replace(/\/$/, ``),
        i = I(I({}, ro), {}, { "Content-Type": `application/json` }, t);
      super(r, i, n, `vectors`);
    }
    async createIndex(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          (await Ja.post(t.fetch, `${t.url}/CreateIndex`, e, {
            headers: t.headers,
          })) || {},
      );
    }
    async getIndex(e, t) {
      var n = this;
      return n.handleOperation(
        async () =>
          await Ja.post(
            n.fetch,
            `${n.url}/GetIndex`,
            { vectorBucketName: e, indexName: t },
            { headers: n.headers },
          ),
      );
    }
    async listIndexes(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await Ja.post(t.fetch, `${t.url}/ListIndexes`, e, {
            headers: t.headers,
          }),
      );
    }
    async deleteIndex(e, t) {
      var n = this;
      return n.handleOperation(
        async () =>
          (await Ja.post(
            n.fetch,
            `${n.url}/DeleteIndex`,
            { vectorBucketName: e, indexName: t },
            { headers: n.headers },
          )) || {},
      );
    }
  },
  so = class extends Ya {
    constructor(e, t = {}, n) {
      let r = e.replace(/\/$/, ``),
        i = I(I({}, ro), {}, { "Content-Type": `application/json` }, t);
      super(r, i, n, `vectors`);
    }
    async putVectors(e) {
      var t = this;
      if (e.vectors.length < 1 || e.vectors.length > 500)
        throw Error(`Vector batch size must be between 1 and 500 items`);
      return t.handleOperation(
        async () =>
          (await Ja.post(t.fetch, `${t.url}/PutVectors`, e, {
            headers: t.headers,
          })) || {},
      );
    }
    async getVectors(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await Ja.post(t.fetch, `${t.url}/GetVectors`, e, {
            headers: t.headers,
          }),
      );
    }
    async listVectors(e) {
      var t = this;
      if (e.segmentCount !== void 0) {
        if (e.segmentCount < 1 || e.segmentCount > 16)
          throw Error(`segmentCount must be between 1 and 16`);
        if (
          e.segmentIndex !== void 0 &&
          (e.segmentIndex < 0 || e.segmentIndex >= e.segmentCount)
        )
          throw Error(
            `segmentIndex must be between 0 and ${e.segmentCount - 1}`,
          );
      }
      return t.handleOperation(
        async () =>
          await Ja.post(t.fetch, `${t.url}/ListVectors`, e, {
            headers: t.headers,
          }),
      );
    }
    async queryVectors(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await Ja.post(t.fetch, `${t.url}/QueryVectors`, e, {
            headers: t.headers,
          }),
      );
    }
    async deleteVectors(e) {
      var t = this;
      if (e.keys.length < 1 || e.keys.length > 500)
        throw Error(`Keys batch size must be between 1 and 500 items`);
      return t.handleOperation(
        async () =>
          (await Ja.post(t.fetch, `${t.url}/DeleteVectors`, e, {
            headers: t.headers,
          })) || {},
      );
    }
  },
  co = class extends Ya {
    constructor(e, t = {}, n) {
      let r = e.replace(/\/$/, ``),
        i = I(I({}, ro), {}, { "Content-Type": `application/json` }, t);
      super(r, i, n, `vectors`);
    }
    async createBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          (await Ja.post(
            t.fetch,
            `${t.url}/CreateVectorBucket`,
            { vectorBucketName: e },
            { headers: t.headers },
          )) || {},
      );
    }
    async getBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await Ja.post(
            t.fetch,
            `${t.url}/GetVectorBucket`,
            { vectorBucketName: e },
            { headers: t.headers },
          ),
      );
    }
    async listBuckets(e = {}) {
      var t = this;
      return t.handleOperation(
        async () =>
          await Ja.post(t.fetch, `${t.url}/ListVectorBuckets`, e, {
            headers: t.headers,
          }),
      );
    }
    async deleteBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          (await Ja.post(
            t.fetch,
            `${t.url}/DeleteVectorBucket`,
            { vectorBucketName: e },
            { headers: t.headers },
          )) || {},
      );
    }
  },
  lo = class extends co {
    constructor(e, t = {}) {
      super(e, t.headers || {}, t.fetch);
    }
    from(e) {
      return new uo(this.url, this.headers, e, this.fetch);
    }
    async createBucket(e) {
      var t = () => super.createBucket,
        n = this;
      return t().call(n, e);
    }
    async getBucket(e) {
      var t = () => super.getBucket,
        n = this;
      return t().call(n, e);
    }
    async listBuckets(e = {}) {
      var t = () => super.listBuckets,
        n = this;
      return t().call(n, e);
    }
    async deleteBucket(e) {
      var t = () => super.deleteBucket,
        n = this;
      return t().call(n, e);
    }
  },
  uo = class extends oo {
    constructor(e, t, n, r) {
      (super(e, t, r), (this.vectorBucketName = n));
    }
    async createIndex(e) {
      var t = () => super.createIndex,
        n = this;
      return t().call(
        n,
        I(I({}, e), {}, { vectorBucketName: n.vectorBucketName }),
      );
    }
    async listIndexes(e = {}) {
      var t = () => super.listIndexes,
        n = this;
      return t().call(
        n,
        I(I({}, e), {}, { vectorBucketName: n.vectorBucketName }),
      );
    }
    async getIndex(e) {
      var t = () => super.getIndex,
        n = this;
      return t().call(n, n.vectorBucketName, e);
    }
    async deleteIndex(e) {
      var t = () => super.deleteIndex,
        n = this;
      return t().call(n, n.vectorBucketName, e);
    }
    index(e) {
      return new fo(
        this.url,
        this.headers,
        this.vectorBucketName,
        e,
        this.fetch,
      );
    }
  },
  fo = class extends so {
    constructor(e, t, n, r, i) {
      (super(e, t, i), (this.vectorBucketName = n), (this.indexName = r));
    }
    async putVectors(e) {
      var t = () => super.putVectors,
        n = this;
      return t().call(
        n,
        I(
          I({}, e),
          {},
          { vectorBucketName: n.vectorBucketName, indexName: n.indexName },
        ),
      );
    }
    async getVectors(e) {
      var t = () => super.getVectors,
        n = this;
      return t().call(
        n,
        I(
          I({}, e),
          {},
          { vectorBucketName: n.vectorBucketName, indexName: n.indexName },
        ),
      );
    }
    async listVectors(e = {}) {
      var t = () => super.listVectors,
        n = this;
      return t().call(
        n,
        I(
          I({}, e),
          {},
          { vectorBucketName: n.vectorBucketName, indexName: n.indexName },
        ),
      );
    }
    async queryVectors(e) {
      var t = () => super.queryVectors,
        n = this;
      return t().call(
        n,
        I(
          I({}, e),
          {},
          { vectorBucketName: n.vectorBucketName, indexName: n.indexName },
        ),
      );
    }
    async deleteVectors(e) {
      var t = () => super.deleteVectors,
        n = this;
      return t().call(
        n,
        I(
          I({}, e),
          {},
          { vectorBucketName: n.vectorBucketName, indexName: n.indexName },
        ),
      );
    }
  },
  po = class extends io {
    constructor(e, t = {}, n, r) {
      super(e, t, n, r);
    }
    from(e) {
      return new no(this.url, this.headers, e, this.fetch);
    }
    get vectors() {
      return new lo(this.url + `/vector`, {
        headers: this.headers,
        fetch: this.fetch,
      });
    }
    get analytics() {
      return new ao(this.url + `/iceberg`, this.headers, this.fetch);
    }
  },
  L = `2.111.0`,
  mo = 30 * 1e3,
  ho = 3 * mo,
  R = 2 * mo,
  z = `http://localhost:9999`,
  go = `supabase.auth.token`,
  _o = { "X-Client-Info": `gotrue-js/${L}` },
  vo = `X-Supabase-Api-Version`,
  yo = {
    "2024-01-01": {
      timestamp: Date.parse(`2024-01-01T00:00:00.0Z`),
      name: `2024-01-01`,
    },
  },
  bo = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,
  xo = `sb_flow_id`,
  So = class extends Error {
    constructor(e, t, n) {
      (super(e),
        (this.__isAuthError = !0),
        (this.name = `AuthError`),
        (this.status = t),
        (this.code = n));
    }
    toJSON() {
      return {
        name: this.name,
        message: this.message,
        status: this.status,
        code: this.code,
      };
    }
  };
function B(e) {
  return typeof e == `object` && !!e && `__isAuthError` in e;
}
var Co = class extends So {
  constructor(e, t, n) {
    (super(e, t, n),
      (this.name = `AuthApiError`),
      (this.status = t),
      (this.code = n));
  }
};
function wo(e) {
  return B(e) && e.name === `AuthApiError`;
}
var To = class extends So {
    constructor(e, t) {
      (super(e), (this.name = `AuthUnknownError`), (this.originalError = t));
    }
  },
  Eo = class extends So {
    constructor(e, t, n, r) {
      (super(e, n, r), (this.name = t), (this.status = n));
    }
  },
  Do = class extends Eo {
    constructor() {
      super(`Auth session missing!`, `AuthSessionMissingError`, 400, void 0);
    }
  };
function Oo(e) {
  return B(e) && e.name === `AuthSessionMissingError`;
}
var ko = class extends Eo {
    constructor() {
      super(
        `Auth session or user missing`,
        `AuthInvalidTokenResponseError`,
        500,
        void 0,
      );
    }
  },
  Ao = class extends Eo {
    constructor(e) {
      super(e, `AuthInvalidCredentialsError`, 400, void 0);
    }
  },
  jo = class extends Eo {
    constructor(e, t = null) {
      (super(e, `AuthImplicitGrantRedirectError`, 500, void 0),
        (this.details = null),
        (this.details = t));
    }
    toJSON() {
      return Object.assign(Object.assign({}, super.toJSON()), {
        details: this.details,
      });
    }
  };
function Mo(e) {
  return B(e) && e.name === `AuthImplicitGrantRedirectError`;
}
var No = class extends Eo {
    constructor(e, t = null) {
      (super(e, `AuthPKCEGrantCodeExchangeError`, 500, void 0),
        (this.details = null),
        (this.details = t));
    }
    toJSON() {
      return Object.assign(Object.assign({}, super.toJSON()), {
        details: this.details,
      });
    }
  },
  Po = class extends Eo {
    constructor() {
      super(
        `PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.`,
        `AuthPKCECodeVerifierMissingError`,
        400,
        `pkce_code_verifier_not_found`,
      );
    }
  },
  Fo = class extends Eo {
    constructor(e, t) {
      super(e, `AuthRetryableFetchError`, t, void 0);
    }
  };
function Io(e) {
  return B(e) && e.name === `AuthRetryableFetchError`;
}
var Lo = class extends Eo {
  constructor(
    e = `Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)`,
  ) {
    super(e, `AuthRefreshDiscardedError`, 409, void 0);
  }
};
function Ro(e) {
  return B(e) && e.name === `AuthRefreshDiscardedError`;
}
var zo = class extends Eo {
    constructor(e, t, n) {
      (super(e, `AuthWeakPasswordError`, t, `weak_password`),
        (this.reasons = n));
    }
    toJSON() {
      return Object.assign(Object.assign({}, super.toJSON()), {
        reasons: this.reasons,
      });
    }
  },
  Bo = class extends Eo {
    constructor(e) {
      super(e, `AuthInvalidJwtError`, 400, `invalid_jwt`);
    }
  },
  Vo = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_`.split(
    ``,
  ),
  Ho = ` 	
\r=`.split(``),
  Uo = (() => {
    let e = Array(128);
    for (let t = 0; t < e.length; t += 1) e[t] = -1;
    for (let t = 0; t < Ho.length; t += 1) e[Ho[t].charCodeAt(0)] = -2;
    for (let t = 0; t < Vo.length; t += 1) e[Vo[t].charCodeAt(0)] = t;
    return e;
  })();
function Wo(e, t, n) {
  if (e !== null)
    for (t.queue = (t.queue << 8) | e, t.queuedBits += 8; t.queuedBits >= 6; )
      (n(Vo[(t.queue >> (t.queuedBits - 6)) & 63]), (t.queuedBits -= 6));
  else if (t.queuedBits > 0)
    for (t.queue <<= 6 - t.queuedBits, t.queuedBits = 6; t.queuedBits >= 6; )
      (n(Vo[(t.queue >> (t.queuedBits - 6)) & 63]), (t.queuedBits -= 6));
}
function Go(e, t, n) {
  let r = Uo[e];
  if (r > -1)
    for (t.queue = (t.queue << 6) | r, t.queuedBits += 6; t.queuedBits >= 8; )
      (n((t.queue >> (t.queuedBits - 8)) & 255), (t.queuedBits -= 8));
  else if (r === -2) return;
  else throw Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`);
}
function Ko(e) {
  let t = [],
    n = (e) => {
      t.push(String.fromCodePoint(e));
    },
    r = { utf8seq: 0, codepoint: 0 },
    i = { queue: 0, queuedBits: 0 },
    a = (e) => {
      Yo(e, r, n);
    };
  for (let t = 0; t < e.length; t += 1) Go(e.charCodeAt(t), i, a);
  return t.join(``);
}
function qo(e, t) {
  if (e <= 127) {
    t(e);
    return;
  } else if (e <= 2047) {
    (t(192 | (e >> 6)), t(128 | (e & 63)));
    return;
  } else if (e <= 65535) {
    (t(224 | (e >> 12)), t(128 | ((e >> 6) & 63)), t(128 | (e & 63)));
    return;
  } else if (e <= 1114111) {
    (t(240 | (e >> 18)),
      t(128 | ((e >> 12) & 63)),
      t(128 | ((e >> 6) & 63)),
      t(128 | (e & 63)));
    return;
  }
  throw Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`);
}
function Jo(e, t) {
  for (let n = 0; n < e.length; n += 1) {
    let r = e.charCodeAt(n);
    if (r > 55295 && r <= 56319) {
      let t = ((r - 55296) * 1024) & 65535;
      ((r = (((e.charCodeAt(n + 1) - 56320) & 65535) | t) + 65536), (n += 1));
    }
    qo(r, t);
  }
}
function Yo(e, t, n) {
  if (t.utf8seq === 0) {
    if (e <= 127) {
      n(e);
      return;
    }
    for (let n = 1; n < 6; n += 1)
      if (!((e >> (7 - n)) & 1)) {
        t.utf8seq = n;
        break;
      }
    if (t.utf8seq === 2) t.codepoint = e & 31;
    else if (t.utf8seq === 3) t.codepoint = e & 15;
    else if (t.utf8seq === 4) t.codepoint = e & 7;
    else throw Error(`Invalid UTF-8 sequence`);
    --t.utf8seq;
  } else if (t.utf8seq > 0) {
    if (e <= 127) throw Error(`Invalid UTF-8 sequence`);
    ((t.codepoint = (t.codepoint << 6) | (e & 63)),
      --t.utf8seq,
      t.utf8seq === 0 && n(t.codepoint));
  }
}
function Xo(e) {
  let t = [],
    n = { queue: 0, queuedBits: 0 },
    r = (e) => {
      t.push(e);
    };
  for (let t = 0; t < e.length; t += 1) Go(e.charCodeAt(t), n, r);
  return new Uint8Array(t);
}
function Zo(e) {
  let t = [];
  return (Jo(e, (e) => t.push(e)), new Uint8Array(t));
}
function Qo(e) {
  let t = [],
    n = { queue: 0, queuedBits: 0 },
    r = (e) => {
      t.push(e);
    };
  return (e.forEach((e) => Wo(e, n, r)), Wo(null, n, r), t.join(``));
}
function $o(e) {
  return Math.round(Date.now() / 1e3) + e;
}
function es() {
  return Symbol(`auth-callback`);
}
var ts = () => typeof window < `u` && typeof document < `u`,
  ns = { tested: !1, writable: !1 },
  rs = () => {
    if (!ts()) return !1;
    try {
      if (typeof globalThis.localStorage != `object`) return !1;
    } catch {
      return !1;
    }
    if (ns.tested) return ns.writable;
    let e = `lswt-${Math.random()}${Math.random()}`;
    try {
      (globalThis.localStorage.setItem(e, e),
        globalThis.localStorage.removeItem(e),
        (ns.tested = !0),
        (ns.writable = !0));
    } catch {
      ((ns.tested = !0), (ns.writable = !1));
    }
    return ns.writable;
  };
function is(e) {
  let t = {},
    n = new URL(e);
  if (n.hash && n.hash[0] === `#`)
    try {
      new URLSearchParams(n.hash.substring(1)).forEach((e, n) => {
        t[n] = e;
      });
    } catch {}
  return (
    n.searchParams.forEach((e, n) => {
      t[n] = e;
    }),
    t
  );
}
var as = (e) => (e ? (...t) => e(...t) : (...e) => fetch(...e)),
  os = (e) =>
    typeof e == `object` &&
    !!e &&
    `status` in e &&
    `ok` in e &&
    `json` in e &&
    typeof e.json == `function`,
  ss = async (e, t, n) => {
    await e.setItem(t, JSON.stringify(n));
  },
  cs = async (e, t) => {
    let n = await e.getItem(t);
    if (!n) return null;
    try {
      return JSON.parse(n);
    } catch {
      return null;
    }
  },
  ls = async (e, t) => {
    await e.removeItem(t);
  },
  us = class e {
    constructor() {
      this.promise = new e.promiseConstructor((e, t) => {
        ((this.resolve = e), (this.reject = t));
      });
    }
  };
us.promiseConstructor = Promise;
function ds(e) {
  let t = e.split(`.`);
  if (t.length !== 3) throw new Bo(`Invalid JWT structure`);
  for (let e = 0; e < t.length; e++)
    if (!bo.test(t[e])) throw new Bo(`JWT not in base64url format`);
  return {
    header: JSON.parse(Ko(t[0])),
    payload: JSON.parse(Ko(t[1])),
    signature: Xo(t[2]),
    raw: { header: t[0], payload: t[1] },
  };
}
async function fs(e) {
  return await new Promise((t) => {
    setTimeout(() => t(null), e);
  });
}
function ps(e, t) {
  return new Promise((n, r) => {
    (async () => {
      for (let i = 0; i < 1 / 0; i++)
        try {
          let r = await e(i);
          if (!t(i, null, r)) {
            n(r);
            return;
          }
        } catch (e) {
          if (!t(i, e)) {
            r(e);
            return;
          }
        }
    })();
  });
}
function ms(e) {
  return (`0` + e.toString(16)).substr(-2);
}
function hs() {
  let e = new Uint32Array(56);
  if (typeof crypto > `u`) {
    let e = ``;
    for (let t = 0; t < 56; t++)
      e +=
        `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~`.charAt(
          Math.floor(Math.random() * 66),
        );
    return e;
  }
  return (crypto.getRandomValues(e), Array.from(e, ms).join(``));
}
async function gs(e) {
  let t = new TextEncoder().encode(e),
    n = await crypto.subtle.digest(`SHA-256`, t),
    r = new Uint8Array(n);
  return Array.from(r)
    .map((e) => String.fromCharCode(e))
    .join(``);
}
async function _s(e) {
  if (
    !(
      typeof crypto < `u` &&
      crypto.subtle !== void 0 &&
      typeof TextEncoder < `u`
    )
  )
    return (
      console.warn(
        `WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.`,
      ),
      e
    );
  let t = await gs(e);
  return btoa(t).replace(/\+/g, `-`).replace(/\//g, `_`).replace(/=+$/, ``);
}
var vs = /^[a-zA-Z0-9_-]{8,64}$/;
function ys(e) {
  return typeof e == `string` && vs.test(e) ? e : null;
}
function bs() {
  if (typeof crypto < `u` && typeof crypto.getRandomValues == `function`) {
    let e = new Uint8Array(16);
    return (crypto.getRandomValues(e), Array.from(e, ms).join(``));
  }
  let e = ``;
  for (let t = 0; t < 32; t++) e += Math.floor(Math.random() * 16).toString(16);
  return e;
}
var xs = (e, t) => `${e}-flow-${t}-code-verifier`,
  Ss = (e) => `${e}-flows-code-verifier`;
async function Cs(e, t) {
  let n = await cs(e, Ss(t));
  return Array.isArray(n) ? n.filter((e) => ys(e) !== null) : [];
}
async function ws(e, t, n, r, i) {
  await ss(e, xs(t, n), r);
  let a = (await Cs(e, t)).filter((e) => e !== n);
  for (a.push(n); a.length > 5; ) {
    let n = a.shift();
    (await ls(e, xs(t, n)), i?.(n));
  }
  (await ss(e, Ss(t), a), await ss(e, `${t}-code-verifier`, r));
}
async function Ts(e, t, n) {
  if (n) {
    let r = await cs(e, xs(t, n));
    return { verifier: typeof r == `string` ? r : null, flowId: n };
  }
  let r = await cs(e, `${t}-code-verifier`);
  return { verifier: typeof r == `string` ? r : null, flowId: null };
}
async function Es(e, t, n) {
  let r = `${t}-code-verifier`;
  if (!n) {
    await ls(e, r);
    return;
  }
  let i = xs(t, n),
    a = await cs(e, i);
  await ls(e, i);
  let o = await Cs(e, t),
    s = o.filter((e) => e !== n);
  (s.length !== o.length &&
    (s.length > 0 ? await ss(e, Ss(t), s) : await ls(e, Ss(t))),
    a != null && a === (await cs(e, r)) && (await ls(e, r)));
}
async function Ds(e, t) {
  let n = await Cs(e, t);
  for (let r of n) await ls(e, xs(t, r));
  (await ls(e, Ss(t)), await ls(e, `${t}-code-verifier`));
}
function Os(e, t) {
  let n = e.indexOf(`#`),
    r = n === -1 ? e : e.slice(0, n),
    i = n === -1 ? `` : e.slice(n),
    a = r.indexOf(`?`);
  if (a !== -1) {
    let e = r.slice(0, a),
      t = r
        .slice(a + 1)
        .split(`&`)
        .filter(
          (e) => e !== `` && e !== `sb_flow_id` && !e.startsWith(`sb_flow_id=`),
        );
    r = t.length > 0 ? `${e}?${t.join(`&`)}` : e;
  }
  let o = r.includes(`?`) ? `&` : `?`;
  return `${r}${o}${xo}=${encodeURIComponent(t)}${i}`;
}
async function ks(e, t, n = !1, r) {
  let i = hs(),
    a = i;
  n && (a += `/recovery`);
  let o = bs();
  await ws(e, t, o, a, r);
  let s = await _s(i);
  return [s, i === s ? `plain` : `s256`, o];
}
var As = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function js(e) {
  let t = e.headers.get(vo);
  if (!t || !t.match(As)) return null;
  try {
    return new Date(`${t}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function Ms(e) {
  if (!e) throw Error(`Missing exp claim`);
  if (e <= Math.floor(Date.now() / 1e3)) throw Error(`JWT has expired`);
}
function Ns(e) {
  switch (e) {
    case `RS256`:
      return { name: `RSASSA-PKCS1-v1_5`, hash: { name: `SHA-256` } };
    case `ES256`:
      return { name: `ECDSA`, namedCurve: `P-256`, hash: { name: `SHA-256` } };
    default:
      throw Error(`Invalid alg claim`);
  }
}
var Ps = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function Fs(e) {
  if (!Ps.test(e))
    throw Error(`@supabase/auth-js: Expected parameter to be UUID but is not`);
}
function Is(e) {
  if (!e.passkey)
    throw Error(
      "@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).",
    );
}
function Ls() {
  return new Proxy(
    {},
    {
      get: (e, t) => {
        if (t === `__isUserNotAvailableProxy`) return !0;
        if (typeof t == `symbol`) {
          let e = t.toString();
          if (
            e === `Symbol(Symbol.toPrimitive)` ||
            e === `Symbol(Symbol.toStringTag)` ||
            e === `Symbol(util.inspect.custom)`
          )
            return;
        }
        throw Error(
          `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t}" property of the session object is not supported. Please use getUser() instead.`,
        );
      },
      set: (e, t) => {
        throw Error(
          `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`,
        );
      },
      deleteProperty: (e, t) => {
        throw Error(
          `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`,
        );
      },
    },
  );
}
function Rs(e, t) {
  return new Proxy(e, {
    get: (e, n, r) => {
      if (n === `__isInsecureUserWarningProxy`) return !0;
      if (typeof n == `symbol`) {
        let t = n.toString();
        if (
          t === `Symbol(Symbol.toPrimitive)` ||
          t === `Symbol(Symbol.toStringTag)` ||
          t === `Symbol(util.inspect.custom)` ||
          t === `Symbol(nodejs.util.inspect.custom)`
        )
          return Reflect.get(e, n, r);
      }
      return (
        !t.value &&
          typeof n == `string` &&
          (console.warn(
            `Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.`,
          ),
          (t.value = !0)),
        Reflect.get(e, n, r)
      );
    },
  });
}
function zs(e) {
  return JSON.parse(JSON.stringify(e));
}
var Bs = (e) => {
    if (typeof e == `object` && e) {
      let t = e;
      if (typeof t.msg == `string`) return t.msg;
      if (typeof t.message == `string`) return t.message;
      if (typeof t.error_description == `string`) return t.error_description;
      if (typeof t.error == `string`) return t.error;
    }
    return JSON.stringify(e);
  },
  Vs = [
    500, 501, 502, 503, 504, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529,
    530,
  ];
async function Hs(e) {
  if (!os(e)) throw new Fo(Bs(e), 0);
  if (Vs.includes(e.status)) throw new Fo(Bs(e), e.status);
  let t;
  try {
    t = await e.json();
  } catch (e) {
    throw new To(Bs(e), e);
  }
  let n,
    r = js(e);
  if (
    (r &&
    r.getTime() >= yo[`2024-01-01`].timestamp &&
    typeof t == `object` &&
    t &&
    typeof t.code == `string`
      ? (n = t.code)
      : typeof t == `object` &&
        t &&
        typeof t.error_code == `string` &&
        (n = t.error_code),
    !n)
  ) {
    if (
      typeof t == `object` &&
      t &&
      typeof t.weak_password == `object` &&
      t.weak_password &&
      Array.isArray(t.weak_password.reasons) &&
      t.weak_password.reasons.length &&
      t.weak_password.reasons.reduce((e, t) => e && typeof t == `string`, !0)
    )
      throw new zo(Bs(t), e.status, t.weak_password.reasons);
  } else if (n === `weak_password`)
    throw new zo(Bs(t), e.status, t.weak_password?.reasons || []);
  else if (n === `session_not_found`) throw new Do();
  throw new Co(Bs(t), e.status || 500, n);
}
var Us = (e, t, n, r) => {
  let i = { method: e, headers: t?.headers || {} };
  return e === `GET`
    ? i
    : ((i.headers = Object.assign(
        { "Content-Type": `application/json;charset=UTF-8` },
        t?.headers,
      )),
      (i.body = JSON.stringify(r)),
      Object.assign(Object.assign({}, i), n));
};
async function V(e, t, n, r) {
  let i = Object.assign({}, r?.headers);
  (i[`X-Supabase-Api-Version`] || (i[vo] = yo[`2024-01-01`].name),
    r?.jwt && (i.Authorization = `Bearer ${r.jwt}`));
  let a = r?.query ?? {};
  r?.redirectTo && (a.redirect_to = r.redirectTo);
  let o = await Ws(
    e,
    t,
    n + (Object.keys(a).length ? `?` + new URLSearchParams(a).toString() : ``),
    { headers: i, noResolveJson: r?.noResolveJson },
    {},
    r?.body,
  );
  return r?.xform ? r?.xform(o) : { data: Object.assign({}, o), error: null };
}
async function Ws(e, t, n, r, i, a) {
  let o = Us(t, r, i, a),
    s;
  try {
    s = await e(n, Object.assign({}, o));
  } catch (e) {
    throw new Fo(Bs(e), 0);
  }
  if ((s.ok || (await Hs(s)), r?.noResolveJson)) return s;
  try {
    return await s.json();
  } catch (e) {
    await Hs(e);
  }
}
function Gs(e) {
  let t = null;
  Zs(e) &&
    ((t = Object.assign({}, e)),
    e.expires_at || (t.expires_at = $o(e.expires_in)));
  let n = e.user ?? (typeof e?.id == `string` ? e : null);
  return { data: { session: t, user: n }, error: null };
}
function Ks(e) {
  let t = Gs(e);
  return (
    !t.error &&
      e.weak_password &&
      typeof e.weak_password == `object` &&
      Array.isArray(e.weak_password.reasons) &&
      e.weak_password.reasons.length &&
      e.weak_password.message &&
      typeof e.weak_password.message == `string` &&
      e.weak_password.reasons.reduce((e, t) => e && typeof t == `string`, !0) &&
      (t.data.weak_password = e.weak_password),
    t
  );
}
function qs(e) {
  return { data: { user: e.user ?? e }, error: null };
}
function Js(e) {
  return { data: e, error: null };
}
function Ys(e) {
  let {
      action_link: t,
      email_otp: n,
      hashed_token: r,
      redirect_to: i,
      verification_type: a,
    } = e,
    o = Sr(e, [
      `action_link`,
      `email_otp`,
      `hashed_token`,
      `redirect_to`,
      `verification_type`,
    ]);
  return {
    data: {
      properties: {
        action_link: t,
        email_otp: n,
        hashed_token: r,
        redirect_to: i,
        verification_type: a,
      },
      user: Object.assign({}, o),
    },
    error: null,
  };
}
function Xs(e) {
  return e;
}
function Zs(e) {
  return !!e.access_token && !!e.refresh_token && !!e.expires_in;
}
var Qs = [`global`, `local`, `others`],
  $s = class {
    constructor({ url: e = ``, headers: t = {}, fetch: n, experimental: r }) {
      ((this.url = e),
        (this.headers = t),
        (this.fetch = as(n)),
        (this.experimental = r ?? {}),
        (this.mfa = {
          listFactors: this._listFactors.bind(this),
          deleteFactor: this._deleteFactor.bind(this),
        }),
        (this.oauth = {
          listClients: this._listOAuthClients.bind(this),
          createClient: this._createOAuthClient.bind(this),
          getClient: this._getOAuthClient.bind(this),
          updateClient: this._updateOAuthClient.bind(this),
          deleteClient: this._deleteOAuthClient.bind(this),
          regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this),
        }),
        (this.customProviders = {
          listProviders: this._listCustomProviders.bind(this),
          createProvider: this._createCustomProvider.bind(this),
          getProvider: this._getCustomProvider.bind(this),
          updateProvider: this._updateCustomProvider.bind(this),
          deleteProvider: this._deleteCustomProvider.bind(this),
        }),
        (this.passkey = {
          listPasskeys: this._adminListPasskeys.bind(this),
          deletePasskey: this._adminDeletePasskey.bind(this),
        }));
    }
    async signOut(e, t = Qs[0]) {
      if (Qs.indexOf(t) < 0)
        throw Error(
          `@supabase/auth-js: Parameter scope must be one of ${Qs.join(`, `)}`,
        );
      try {
        return (
          await V(this.fetch, `POST`, `${this.url}/logout?scope=${t}`, {
            headers: this.headers,
            jwt: e,
            noResolveJson: !0,
          }),
          { data: null, error: null }
        );
      } catch (e) {
        if (B(e)) return { data: null, error: e };
        throw e;
      }
    }
    async inviteUserByEmail(e, t = {}) {
      try {
        return await V(this.fetch, `POST`, `${this.url}/invite`, {
          body: { email: e, data: t.data },
          headers: this.headers,
          redirectTo: t.redirectTo,
          xform: qs,
        });
      } catch (e) {
        if (B(e)) return { data: { user: null }, error: e };
        throw e;
      }
    }
    async generateLink(e) {
      try {
        let { options: t } = e,
          n = Sr(e, [`options`]),
          r = Object.assign(Object.assign({}, n), t);
        return (
          `newEmail` in n && ((r.new_email = n?.newEmail), delete r.newEmail),
          await V(this.fetch, `POST`, `${this.url}/admin/generate_link`, {
            body: r,
            headers: this.headers,
            xform: Ys,
            redirectTo: t?.redirectTo,
          })
        );
      } catch (e) {
        if (B(e)) return { data: { properties: null, user: null }, error: e };
        throw e;
      }
    }
    async createUser(e) {
      try {
        return await V(this.fetch, `POST`, `${this.url}/admin/users`, {
          body: e,
          headers: this.headers,
          xform: qs,
        });
      } catch (e) {
        if (B(e)) return { data: { user: null }, error: e };
        throw e;
      }
    }
    async listUsers(e) {
      try {
        let t = { nextPage: null, lastPage: 0, total: 0 },
          n = await V(this.fetch, `GET`, `${this.url}/admin/users`, {
            headers: this.headers,
            noResolveJson: !0,
            query: {
              page: e?.page?.toString() ?? ``,
              per_page: e?.perPage?.toString() ?? ``,
            },
            xform: Xs,
          });
        if (n.error) throw n.error;
        let r = await n.json(),
          i = n.headers.get(`x-total-count`) ?? 0,
          a = n.headers.get(`link`)?.split(`,`) ?? [];
        return (
          a.length > 0 &&
            (a.forEach((e) => {
              let n = parseInt(e.split(`;`)[0].split(`=`)[1].substring(0, 1)),
                r = JSON.parse(e.split(`;`)[1].split(`=`)[1]);
              t[`${r}Page`] = n;
            }),
            (t.total = parseInt(i))),
          { data: Object.assign(Object.assign({}, r), t), error: null }
        );
      } catch (e) {
        if (B(e)) return { data: { users: [] }, error: e };
        throw e;
      }
    }
    async getUserById(e) {
      Fs(e);
      try {
        return await V(this.fetch, `GET`, `${this.url}/admin/users/${e}`, {
          headers: this.headers,
          xform: qs,
        });
      } catch (e) {
        if (B(e)) return { data: { user: null }, error: e };
        throw e;
      }
    }
    async updateUserById(e, t) {
      Fs(e);
      try {
        return await V(this.fetch, `PUT`, `${this.url}/admin/users/${e}`, {
          body: t,
          headers: this.headers,
          xform: qs,
        });
      } catch (e) {
        if (B(e)) return { data: { user: null }, error: e };
        throw e;
      }
    }
    async deleteUser(e, t = !1) {
      Fs(e);
      try {
        return await V(this.fetch, `DELETE`, `${this.url}/admin/users/${e}`, {
          headers: this.headers,
          body: { should_soft_delete: t },
          xform: qs,
        });
      } catch (e) {
        if (B(e)) return { data: { user: null }, error: e };
        throw e;
      }
    }
    async _listFactors(e) {
      Fs(e.userId);
      try {
        let { data: t, error: n } = await V(
          this.fetch,
          `GET`,
          `${this.url}/admin/users/${e.userId}/factors`,
          {
            headers: this.headers,
            xform: (e) => ({ data: { factors: e }, error: null }),
          },
        );
        return { data: t, error: n };
      } catch (e) {
        if (B(e)) return { data: null, error: e };
        throw e;
      }
    }
    async _deleteFactor(e) {
      (Fs(e.userId), Fs(e.id));
      try {
        return {
          data: await V(
            this.fetch,
            `DELETE`,
            `${this.url}/admin/users/${e.userId}/factors/${e.id}`,
            { headers: this.headers },
          ),
          error: null,
        };
      } catch (e) {
        if (B(e)) return { data: null, error: e };
        throw e;
      }
    }
    async _listOAuthClients(e) {
      try {
        let t = { nextPage: null, lastPage: 0, total: 0 },
          n = await V(this.fetch, `GET`, `${this.url}/admin/oauth/clients`, {
            headers: this.headers,
            noResolveJson: !0,
            query: {
              page: e?.page?.toString() ?? ``,
              per_page: e?.perPage?.toString() ?? ``,
            },
            xform: Xs,
          });
        if (n.error) throw n.error;
        let r = await n.json(),
          i = n.headers.get(`x-total-count`) ?? 0,
          a = n.headers.get(`link`)?.split(`,`) ?? [];
        return (
          a.length > 0 &&
            (a.forEach((e) => {
              let n = parseInt(e.split(`;`)[0].split(`=`)[1].substring(0, 1)),
                r = JSON.parse(e.split(`;`)[1].split(`=`)[1]);
              t[`${r}Page`] = n;
            }),
            (t.total = parseInt(i))),
          { data: Object.assign(Object.assign({}, r), t), error: null }
        );
      } catch (e) {
        if (B(e)) return { data: { clients: [] }, error: e };
        throw e;
      }
    }
    async _createOAuthClient(e) {
      try {
        return await V(this.fetch, `POST`, `${this.url}/admin/oauth/clients`, {
          body: e,
          headers: this.headers,
          xform: (e) => ({ data: e, error: null }),
        });
      } catch (e) {
        if (B(e)) return { data: null, error: e };
        throw e;
      }
    }
    async _getOAuthClient(e) {
      try {
        return await V(
          this.fetch,
          `GET`,
          `${this.url}/admin/oauth/clients/${e}`,
          { headers: this.headers, xform: (e) => ({ data: e, error: null }) },
        );
      } catch (e) {
        if (B(e)) return { data: null, error: e };
        throw e;
      }
    }
    async _updateOAuthClient(e, t) {
      try {
        return await V(
          this.fetch,
          `PUT`,
          `${this.url}/admin/oauth/clients/${e}`,
          {
            body: t,
            headers: this.headers,
            xform: (e) => ({ data: e, error: null }),
          },
        );
      } catch (e) {
        if (B(e)) return { data: null, error: e };
        throw e;
      }
    }
    async _deleteOAuthClient(e) {
      try {
        return (
          await V(
            this.fetch,
            `DELETE`,
            `${this.url}/admin/oauth/clients/${e}`,
            { headers: this.headers, noResolveJson: !0 },
          ),
          { data: null, error: null }
        );
      } catch (e) {
        if (B(e)) return { data: null, error: e };
        throw e;
      }
    }
    async _regenerateOAuthClientSecret(e) {
      try {
        return await V(
          this.fetch,
          `POST`,
          `${this.url}/admin/oauth/clients/${e}/regenerate_secret`,
          { headers: this.headers, xform: (e) => ({ data: e, error: null }) },
        );
      } catch (e) {
        if (B(e)) return { data: null, error: e };
        throw e;
      }
    }
    async _listCustomProviders(e) {
      try {
        let t = {};
        return (
          e?.type && (t.type = e.type),
          await V(this.fetch, `GET`, `${this.url}/admin/custom-providers`, {
            headers: this.headers,
            query: t,
            xform: (e) => ({
              data: { providers: e?.providers ?? [] },
              error: null,
            }),
          })
        );
      } catch (e) {
        if (B(e)) return { data: { providers: [] }, error: e };
        throw e;
      }
    }
    async _createCustomProvider(e) {
      try {
        return await V(
          this.fetch,
          `POST`,
          `${this.url}/admin/custom-providers`,
          {
            body: e,
            headers: this.headers,
            xform: (e) => ({ data: e, error: null }),
          },
        );
      } catch (e) {
        if (B(e)) return { data: null, error: e };
        throw e;
      }
    }
    async _getCustomProvider(e) {
      try {
        return await V(
          this.fetch,
          `GET`,
          `${this.url}/admin/custom-providers/${e}`,
          { headers: this.headers, xform: (e) => ({ data: e, error: null }) },
        );
      } catch (e) {
        if (B(e)) return { data: null, error: e };
        throw e;
      }
    }
    async _updateCustomProvider(e, t) {
      try {
        return await V(
          this.fetch,
          `PUT`,
          `${this.url}/admin/custom-providers/${e}`,
          {
            body: t,
            headers: this.headers,
            xform: (e) => ({ data: e, error: null }),
          },
        );
      } catch (e) {
        if (B(e)) return { data: null, error: e };
        throw e;
      }
    }
    async _deleteCustomProvider(e) {
      try {
        return (
          await V(
            this.fetch,
            `DELETE`,
            `${this.url}/admin/custom-providers/${e}`,
            { headers: this.headers, noResolveJson: !0 },
          ),
          { data: null, error: null }
        );
      } catch (e) {
        if (B(e)) return { data: null, error: e };
        throw e;
      }
    }
    async _adminListPasskeys(e) {
      (Is(this.experimental), Fs(e.userId));
      try {
        return await V(
          this.fetch,
          `GET`,
          `${this.url}/admin/users/${e.userId}/passkeys`,
          { headers: this.headers, xform: (e) => ({ data: e, error: null }) },
        );
      } catch (e) {
        if (B(e)) return { data: null, error: e };
        throw e;
      }
    }
    async _adminDeletePasskey(e) {
      (Is(this.experimental), Fs(e.userId), Fs(e.passkeyId));
      try {
        return (
          await V(
            this.fetch,
            `DELETE`,
            `${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`,
            { headers: this.headers, noResolveJson: !0 },
          ),
          { data: null, error: null }
        );
      } catch (e) {
        if (B(e)) return { data: null, error: e };
        throw e;
      }
    }
  };
function ec(e = {}) {
  return {
    getItem: (t) => e[t] || null,
    setItem: (t, n) => {
      e[t] = n;
    },
    removeItem: (t) => {
      delete e[t];
    },
  };
}
globalThis &&
  rs() &&
  globalThis.localStorage &&
  globalThis.localStorage.getItem(`supabase.gotrue-js.locks.debug`);
var tc = class extends Error {
  constructor(e) {
    (super(e), (this.isAcquireTimeout = !0));
  }
};
function nc() {
  if (typeof globalThis != `object`)
    try {
      (Object.defineProperty(Object.prototype, "__magic__", {
        get: function () {
          return this;
        },
        configurable: !0,
      }),
        (__magic__.globalThis = __magic__),
        delete Object.prototype.__magic__);
    } catch {
      typeof self < `u` && (self.globalThis = self);
    }
}
function rc(e) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(e))
    throw Error(`@supabase/auth-js: Address "${e}" is invalid.`);
  return e.toLowerCase();
}
function ic(e) {
  return parseInt(e, 16);
}
function ac(e) {
  let t = new TextEncoder().encode(e);
  return `0x` + Array.from(t, (e) => e.toString(16).padStart(2, `0`)).join(``);
}
function oc(e) {
  let {
    chainId: t,
    domain: n,
    expirationTime: r,
    issuedAt: i = new Date(),
    nonce: a,
    notBefore: o,
    requestId: s,
    resources: c,
    scheme: l,
    uri: u,
    version: d,
  } = e;
  if (!Number.isInteger(t))
    throw Error(
      `@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${t}`,
    );
  if (!n)
    throw Error(
      `@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.`,
    );
  if (a && a.length < 8)
    throw Error(
      `@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`,
    );
  if (!u)
    throw Error(
      `@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.`,
    );
  if (d !== `1`)
    throw Error(
      `@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${d}`,
    );
  if (
    e.statement?.includes(`
`)
  )
    throw Error(
      `@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${e.statement}`,
    );
  let f = rc(e.address),
    p = `${l ? `${l}://${n}` : n} wants you to sign in with your Ethereum account:\n${f}\n\n${e.statement ? `${e.statement}\n` : ``}`,
    m = `URI: ${u}\nVersion: ${d}\nChain ID: ${t}${a ? `\nNonce: ${a}` : ``}\nIssued At: ${i.toISOString()}`;
  if (
    (r && (m += `\nExpiration Time: ${r.toISOString()}`),
    o && (m += `\nNot Before: ${o.toISOString()}`),
    s && (m += `\nRequest ID: ${s}`),
    c)
  ) {
    let e = `
Resources:`;
    for (let t of c) {
      if (!t || typeof t != `string`)
        throw Error(
          `@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${t}`,
        );
      e += `\n- ${t}`;
    }
    m += e;
  }
  return `${p}\n${m}`;
}
var sc = class extends Error {
    constructor({ message: e, code: t, cause: n, name: r }) {
      (super(e, { cause: n }),
        (this.__isWebAuthnError = !0),
        (this.name =
          r ?? (n instanceof Error ? n.name : void 0) ?? `Unknown Error`),
        (this.code = t));
    }
    toJSON() {
      return { name: this.name, message: this.message, code: this.code };
    }
  },
  cc = class extends sc {
    constructor(e, t) {
      (super({
        code: `ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,
        cause: t,
        message: e,
      }),
        (this.name = `WebAuthnUnknownError`),
        (this.originalError = t));
    }
  };
function lc({ error: e, options: t }) {
  let { publicKey: n } = t;
  if (!n) throw Error(`options was missing required publicKey property`);
  if (e.name === `AbortError`) {
    if (t.signal instanceof AbortSignal)
      return new sc({
        message: `Registration ceremony was sent an abort signal`,
        code: `ERROR_CEREMONY_ABORTED`,
        cause: e,
      });
  } else if (e.name === `ConstraintError`) {
    if (n.authenticatorSelection?.requireResidentKey === !0)
      return new sc({
        message: `Discoverable credentials were required but no available authenticator supported it`,
        code: `ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT`,
        cause: e,
      });
    if (
      t.mediation === `conditional` &&
      n.authenticatorSelection?.userVerification === `required`
    )
      return new sc({
        message: `User verification was required during automatic registration but it could not be performed`,
        code: `ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE`,
        cause: e,
      });
    if (n.authenticatorSelection?.userVerification === `required`)
      return new sc({
        message: `User verification was required but no available authenticator supported it`,
        code: `ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT`,
        cause: e,
      });
  } else if (e.name === `InvalidStateError`)
    return new sc({
      message: `The authenticator was previously registered`,
      code: `ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED`,
      cause: e,
    });
  else if (e.name === `NotAllowedError`)
    return new sc({
      message: e.message,
      code: `ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,
      cause: e,
    });
  else if (e.name === `NotSupportedError`)
    return n.pubKeyCredParams.filter((e) => e.type === `public-key`).length ===
      0
      ? new sc({
          message: `No entry in pubKeyCredParams was of type "public-key"`,
          code: `ERROR_MALFORMED_PUBKEYCREDPARAMS`,
          cause: e,
        })
      : new sc({
          message: `No available authenticator supported any of the specified pubKeyCredParams algorithms`,
          code: `ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG`,
          cause: e,
        });
  else if (e.name === `SecurityError`) {
    let t = window.location.hostname;
    if (!gc(t))
      return new sc({
        message: `${window.location.hostname} is an invalid domain`,
        code: `ERROR_INVALID_DOMAIN`,
        cause: e,
      });
    if (n.rp.id !== t)
      return new sc({
        message: `The RP ID "${n.rp.id}" is invalid for this domain`,
        code: `ERROR_INVALID_RP_ID`,
        cause: e,
      });
  } else if (e.name === `TypeError`) {
    if (n.user.id.byteLength < 1 || n.user.id.byteLength > 64)
      return new sc({
        message: `User ID was not between 1 and 64 characters`,
        code: `ERROR_INVALID_USER_ID_LENGTH`,
        cause: e,
      });
  } else if (e.name === `UnknownError`)
    return new sc({
      message: `The authenticator was unable to process the specified options, or could not create a new credential`,
      code: `ERROR_AUTHENTICATOR_GENERAL_ERROR`,
      cause: e,
    });
  return new sc({
    message: `a Non-Webauthn related error has occurred`,
    code: `ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,
    cause: e,
  });
}
function uc({ error: e, options: t }) {
  let { publicKey: n } = t;
  if (!n) throw Error(`options was missing required publicKey property`);
  if (e.name === `AbortError`) {
    if (t.signal instanceof AbortSignal)
      return new sc({
        message: `Authentication ceremony was sent an abort signal`,
        code: `ERROR_CEREMONY_ABORTED`,
        cause: e,
      });
  } else if (e.name === `NotAllowedError`)
    return new sc({
      message: e.message,
      code: `ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,
      cause: e,
    });
  else if (e.name === `SecurityError`) {
    let t = window.location.hostname;
    if (!gc(t))
      return new sc({
        message: `${window.location.hostname} is an invalid domain`,
        code: `ERROR_INVALID_DOMAIN`,
        cause: e,
      });
    if (n.rpId !== t)
      return new sc({
        message: `The RP ID "${n.rpId}" is invalid for this domain`,
        code: `ERROR_INVALID_RP_ID`,
        cause: e,
      });
  } else if (e.name === `UnknownError`)
    return new sc({
      message: `The authenticator was unable to process the specified options, or could not create a new assertion signature`,
      code: `ERROR_AUTHENTICATOR_GENERAL_ERROR`,
      cause: e,
    });
  return new sc({
    message: `a Non-Webauthn related error has occurred`,
    code: `ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,
    cause: e,
  });
}
var dc = new (class {
  createNewAbortSignal() {
    if (this.controller) {
      let e = Error(`Cancelling existing WebAuthn API call for new one`);
      ((e.name = `AbortError`), this.controller.abort(e));
    }
    let e = new AbortController();
    return ((this.controller = e), e.signal);
  }
  cancelCeremony() {
    if (this.controller) {
      let e = Error(`Manually cancelling existing WebAuthn API call`);
      ((e.name = `AbortError`),
        this.controller.abort(e),
        (this.controller = void 0));
    }
  }
})();
function fc(e) {
  if (!e) throw Error(`Credential creation options are required`);
  if (
    typeof PublicKeyCredential < `u` &&
    `parseCreationOptionsFromJSON` in PublicKeyCredential &&
    typeof PublicKeyCredential.parseCreationOptionsFromJSON == `function`
  )
    return PublicKeyCredential.parseCreationOptionsFromJSON(e);
  let { challenge: t, user: n, excludeCredentials: r } = e,
    i = Sr(e, [`challenge`, `user`, `excludeCredentials`]),
    a = Xo(t).buffer,
    o = Object.assign(Object.assign({}, n), { id: Xo(n.id).buffer }),
    s = Object.assign(Object.assign({}, i), { challenge: a, user: o });
  if (r && r.length > 0) {
    s.excludeCredentials = Array(r.length);
    for (let e = 0; e < r.length; e++) {
      let t = r[e];
      s.excludeCredentials[e] = Object.assign(Object.assign({}, t), {
        id: Xo(t.id).buffer,
        type: t.type || `public-key`,
        transports: t.transports,
      });
    }
  }
  return s;
}
function pc(e) {
  if (!e) throw Error(`Credential request options are required`);
  if (
    typeof PublicKeyCredential < `u` &&
    `parseRequestOptionsFromJSON` in PublicKeyCredential &&
    typeof PublicKeyCredential.parseRequestOptionsFromJSON == `function`
  )
    return PublicKeyCredential.parseRequestOptionsFromJSON(e);
  let { challenge: t, allowCredentials: n } = e,
    r = Sr(e, [`challenge`, `allowCredentials`]),
    i = Xo(t).buffer,
    a = Object.assign(Object.assign({}, r), { challenge: i });
  if (n && n.length > 0) {
    a.allowCredentials = Array(n.length);
    for (let e = 0; e < n.length; e++) {
      let t = n[e];
      a.allowCredentials[e] = Object.assign(Object.assign({}, t), {
        id: Xo(t.id).buffer,
        type: t.type || `public-key`,
        transports: t.transports,
      });
    }
  }
  return a;
}
function mc(e) {
  if (`toJSON` in e && typeof e.toJSON == `function`) return e.toJSON();
  let t = e;
  return {
    id: e.id,
    rawId: e.id,
    response: {
      attestationObject: Qo(new Uint8Array(e.response.attestationObject)),
      clientDataJSON: Qo(new Uint8Array(e.response.clientDataJSON)),
    },
    type: `public-key`,
    clientExtensionResults: e.getClientExtensionResults(),
    authenticatorAttachment: t.authenticatorAttachment ?? void 0,
  };
}
function hc(e) {
  if (`toJSON` in e && typeof e.toJSON == `function`) return e.toJSON();
  let t = e,
    n = e.getClientExtensionResults(),
    r = e.response;
  return {
    id: e.id,
    rawId: e.id,
    response: {
      authenticatorData: Qo(new Uint8Array(r.authenticatorData)),
      clientDataJSON: Qo(new Uint8Array(r.clientDataJSON)),
      signature: Qo(new Uint8Array(r.signature)),
      userHandle: r.userHandle ? Qo(new Uint8Array(r.userHandle)) : void 0,
    },
    type: `public-key`,
    clientExtensionResults: n,
    authenticatorAttachment: t.authenticatorAttachment ?? void 0,
  };
}
function gc(e) {
  return e === `localhost` || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e);
}
function _c() {
  return !!(
    ts() &&
    `PublicKeyCredential` in window &&
    window.PublicKeyCredential &&
    `credentials` in navigator &&
    typeof (navigator == null ? void 0 : navigator.credentials)?.create ==
      `function` &&
    typeof (navigator == null ? void 0 : navigator.credentials)?.get ==
      `function`
  );
}
async function vc(e) {
  try {
    let t = await navigator.credentials.create(e);
    return t
      ? t instanceof PublicKeyCredential
        ? { data: t, error: null }
        : {
            data: null,
            error: new cc(`Browser returned unexpected credential type`, t),
          }
      : { data: null, error: new cc(`Empty credential response`, t) };
  } catch (t) {
    return { data: null, error: lc({ error: t, options: e }) };
  }
}
async function yc(e) {
  try {
    let t = await navigator.credentials.get(e);
    return t
      ? t instanceof PublicKeyCredential
        ? { data: t, error: null }
        : {
            data: null,
            error: new cc(`Browser returned unexpected credential type`, t),
          }
      : { data: null, error: new cc(`Empty credential response`, t) };
  } catch (t) {
    return { data: null, error: uc({ error: t, options: e }) };
  }
}
var bc = {
    hints: [`security-key`],
    authenticatorSelection: {
      authenticatorAttachment: `cross-platform`,
      requireResidentKey: !1,
      userVerification: `preferred`,
      residentKey: `discouraged`,
    },
    attestation: `direct`,
  },
  xc = {
    userVerification: `preferred`,
    hints: [`security-key`],
    attestation: `direct`,
  };
function Sc(...e) {
  let t = (e) => typeof e == `object` && !!e && !Array.isArray(e),
    n = (e) => e instanceof ArrayBuffer || ArrayBuffer.isView(e),
    r = {};
  for (let i of e)
    if (i)
      for (let e in i) {
        let a = i[e];
        if (a !== void 0)
          if (Array.isArray(a)) r[e] = a;
          else if (n(a)) r[e] = a;
          else if (t(a)) {
            let n = r[e];
            t(n) ? (r[e] = Sc(n, a)) : (r[e] = Sc(a));
          } else r[e] = a;
      }
  return r;
}
function Cc(e, t) {
  return Sc(bc, e, t || {});
}
function wc(e, t) {
  return Sc(xc, e, t || {});
}
var Tc = class {
  constructor(e) {
    ((this.client = e),
      (this.enroll = this._enroll.bind(this)),
      (this.challenge = this._challenge.bind(this)),
      (this.verify = this._verify.bind(this)),
      (this.authenticate = this._authenticate.bind(this)),
      (this.register = this._register.bind(this)));
  }
  async _enroll(e) {
    return this.client.mfa.enroll(
      Object.assign(Object.assign({}, e), { factorType: `webauthn` }),
    );
  }
  async _challenge(
    { factorId: e, webauthn: t, friendlyName: n, signal: r },
    i,
  ) {
    try {
      let { data: a, error: o } = await this.client.mfa.challenge({
        factorId: e,
        webauthn: t,
      });
      if (!a) return { data: null, error: o };
      let s = r ?? dc.createNewAbortSignal();
      if (a.webauthn.type === `create`) {
        let { user: e } = a.webauthn.credential_options.publicKey;
        if (!e.name) {
          let t = n;
          if (t) e.name = `${e.id}:${t}`;
          else {
            let t = (await this.client.getUser()).data.user,
              n = t?.user_metadata?.name || t?.email || t?.id || `User`;
            e.name = `${e.id}:${n}`;
          }
        }
        e.displayName ||= e.name;
      }
      switch (a.webauthn.type) {
        case `create`: {
          let { data: t, error: n } = await vc({
            publicKey: Cc(a.webauthn.credential_options.publicKey, i?.create),
            signal: s,
          });
          return t
            ? {
                data: {
                  factorId: e,
                  challengeId: a.id,
                  webauthn: { type: a.webauthn.type, credential_response: t },
                },
                error: null,
              }
            : { data: null, error: n };
        }
        case `request`: {
          let t = wc(a.webauthn.credential_options.publicKey, i?.request),
            { data: n, error: r } = await yc(
              Object.assign(Object.assign({}, a.webauthn.credential_options), {
                publicKey: t,
                signal: s,
              }),
            );
          return n
            ? {
                data: {
                  factorId: e,
                  challengeId: a.id,
                  webauthn: { type: a.webauthn.type, credential_response: n },
                },
                error: null,
              }
            : { data: null, error: r };
        }
      }
    } catch (e) {
      return B(e)
        ? { data: null, error: e }
        : { data: null, error: new To(`Unexpected error in challenge`, e) };
    }
  }
  async _verify({ challengeId: e, factorId: t, webauthn: n }) {
    return this.client.mfa.verify({ factorId: t, challengeId: e, webauthn: n });
  }
  async _authenticate(
    {
      factorId: e,
      webauthn: {
        rpId: t = typeof window < `u` ? window.location.hostname : void 0,
        rpOrigins: n = typeof window < `u` ? [window.location.origin] : void 0,
        signal: r,
      } = {},
    },
    i,
  ) {
    if (!t)
      return {
        data: null,
        error: new So(`rpId is required for WebAuthn authentication`),
      };
    try {
      if (!_c())
        return {
          data: null,
          error: new To(`Browser does not support WebAuthn`, null),
        };
      let { data: a, error: o } = await this.challenge(
        { factorId: e, webauthn: { rpId: t, rpOrigins: n }, signal: r },
        { request: i },
      );
      if (!a) return { data: null, error: o };
      let { webauthn: s } = a;
      return this._verify({
        factorId: e,
        challengeId: a.challengeId,
        webauthn: {
          type: s.type,
          rpId: t,
          rpOrigins: n,
          credential_response: s.credential_response,
        },
      });
    } catch (e) {
      return B(e)
        ? { data: null, error: e }
        : { data: null, error: new To(`Unexpected error in authenticate`, e) };
    }
  }
  async _register(
    {
      friendlyName: e,
      webauthn: {
        rpId: t = typeof window < `u` ? window.location.hostname : void 0,
        rpOrigins: n = typeof window < `u` ? [window.location.origin] : void 0,
        signal: r,
      } = {},
    },
    i,
  ) {
    if (!t)
      return {
        data: null,
        error: new So(`rpId is required for WebAuthn registration`),
      };
    try {
      if (!_c())
        return {
          data: null,
          error: new To(`Browser does not support WebAuthn`, null),
        };
      let { data: a, error: o } = await this._enroll({ friendlyName: e });
      if (!a)
        return (
          await this.client.mfa
            .listFactors()
            .then((t) =>
              t.data?.all.find(
                (t) =>
                  t.factor_type === `webauthn` &&
                  t.friendly_name === e &&
                  t.status !== `unverified`,
              ),
            )
            .then((e) =>
              e ? this.client.mfa.unenroll({ factorId: e?.id }) : void 0,
            ),
          { data: null, error: o }
        );
      let { data: s, error: c } = await this._challenge(
        {
          factorId: a.id,
          friendlyName: a.friendly_name,
          webauthn: { rpId: t, rpOrigins: n },
          signal: r,
        },
        { create: i },
      );
      return s
        ? this._verify({
            factorId: a.id,
            challengeId: s.challengeId,
            webauthn: {
              rpId: t,
              rpOrigins: n,
              type: s.webauthn.type,
              credential_response: s.webauthn.credential_response,
            },
          })
        : { data: null, error: c };
    } catch (e) {
      return B(e)
        ? { data: null, error: e }
        : { data: null, error: new To(`Unexpected error in register`, e) };
    }
  }
};
nc();
var Ec = {
    url: z,
    storageKey: go,
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    headers: _o,
    flowType: `implicit`,
    debug: !1,
    hasCustomAuthorizationHeader: !1,
    throwOnError: !1,
    lockAcquireTimeout: 5e3,
    skipAutoInitialize: !1,
    experimental: {},
  },
  Dc = {},
  Oc = class e {
    get jwks() {
      return Dc[this.storageKey]?.jwks ?? { keys: [] };
    }
    set jwks(e) {
      Dc[this.storageKey] = Object.assign(
        Object.assign({}, Dc[this.storageKey]),
        { jwks: e },
      );
    }
    get jwks_cached_at() {
      return Dc[this.storageKey]?.cachedAt ?? -(2 ** 53 - 1);
    }
    set jwks_cached_at(e) {
      Dc[this.storageKey] = Object.assign(
        Object.assign({}, Dc[this.storageKey]),
        { cachedAt: e },
      );
    }
    constructor(t) {
      var n;
      ((this.userStorage = null),
        (this.memoryStorage = null),
        (this.stateChangeEmitters = new Map()),
        (this.autoRefreshTicker = null),
        (this.autoRefreshTickTimeout = null),
        (this.visibilityChangedCallback = null),
        (this.refreshingDeferred = null),
        (this.lastRefreshFailure = null),
        (this._sessionRemovalEpoch = 0),
        (this.initializePromise = null),
        (this._pendingInitNotifications = null),
        (this.detectSessionInUrl = !0),
        (this.hasCustomAuthorizationHeader = !1),
        (this.suppressGetSessionWarning = !1),
        (this.lock = null),
        (this.lockAcquired = !1),
        (this.pendingInLock = []),
        (this.broadcastChannel = null),
        (this.logger = console.log));
      let r = Object.assign(Object.assign({}, Ec), t);
      if (
        ((this.storageKey = r.storageKey),
        (this.instanceID = e.nextInstanceID[this.storageKey] ?? 0),
        (e.nextInstanceID[this.storageKey] = this.instanceID + 1),
        (this.logDebugMessages = !!r.debug),
        typeof r.debug == `function` && (this.logger = r.debug),
        this.instanceID > 0 && ts())
      ) {
        let e = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
        (console.warn(e), this.logDebugMessages && console.trace(e));
      }
      if (
        ((this.persistSession = r.persistSession),
        (this.autoRefreshToken = r.autoRefreshToken),
        (this.experimental = r.experimental ?? {}),
        (this.admin = new $s({
          url: r.url,
          headers: r.headers,
          fetch: r.fetch,
          experimental: this.experimental,
        })),
        (this.url = r.url),
        (this.headers = r.headers),
        (this.fetch = as(r.fetch)),
        (this.detectSessionInUrl = r.detectSessionInUrl),
        (this.flowType = r.flowType),
        (this.hasCustomAuthorizationHeader = r.hasCustomAuthorizationHeader),
        (this.throwOnError = r.throwOnError),
        (this.lockAcquireTimeout = r.lockAcquireTimeout),
        r.lock != null && (this.lock = r.lock),
        this.jwks ||
          ((this.jwks = { keys: [] }), (this.jwks_cached_at = -(2 ** 53 - 1))),
        (this.mfa = {
          verify: this._verify.bind(this),
          enroll: this._enroll.bind(this),
          unenroll: this._unenroll.bind(this),
          challenge: this._challenge.bind(this),
          listFactors: this._listFactors.bind(this),
          challengeAndVerify: this._challengeAndVerify.bind(this),
          getAuthenticatorAssuranceLevel:
            this._getAuthenticatorAssuranceLevel.bind(this),
          webauthn: new Tc(this),
        }),
        (this.oauth = {
          getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
          approveAuthorization: this._approveAuthorization.bind(this),
          denyAuthorization: this._denyAuthorization.bind(this),
          listGrants: this._listOAuthGrants.bind(this),
          revokeGrant: this._revokeOAuthGrant.bind(this),
        }),
        (this.passkey = {
          startRegistration: this._startPasskeyRegistration.bind(this),
          verifyRegistration: this._verifyPasskeyRegistration.bind(this),
          startAuthentication: this._startPasskeyAuthentication.bind(this),
          verifyAuthentication: this._verifyPasskeyAuthentication.bind(this),
          list: this._listPasskeys.bind(this),
          update: this._updatePasskey.bind(this),
          delete: this._deletePasskey.bind(this),
        }),
        this.persistSession
          ? (r.storage
              ? (this.storage = r.storage)
              : rs()
                ? (this.storage = globalThis.localStorage)
                : ((this.memoryStorage = {}),
                  (this.storage = ec(this.memoryStorage))),
            r.userStorage && (this.userStorage = r.userStorage))
          : ((this.memoryStorage = {}),
            (this.storage = ec(this.memoryStorage))),
        ts() &&
          globalThis.BroadcastChannel &&
          this.persistSession &&
          this.storageKey)
      ) {
        try {
          this.broadcastChannel = new globalThis.BroadcastChannel(
            this.storageKey,
          );
        } catch (e) {
          console.error(
            `Failed to create a new BroadcastChannel, multi-tab state changes will not be available`,
            e,
          );
        }
        (n = this.broadcastChannel) == null ||
          n.addEventListener(`message`, async (e) => {
            (this._debug(
              `received broadcast notification from other tab or client`,
              e,
            ),
              (e.data.event === `TOKEN_REFRESHED` ||
                e.data.event === `SIGNED_IN`) &&
                (this.lastRefreshFailure = null));
            try {
              await this._notifyAllSubscribers(
                e.data.event,
                e.data.session,
                !1,
              );
            } catch (e) {
              this._debug(`#broadcastChannel`, `error`, e);
            }
          });
      }
      r.skipAutoInitialize ||
        this.initialize().catch((e) => {
          this._debug(`#initialize()`, `error`, e);
        });
    }
    isThrowOnErrorEnabled() {
      return this.throwOnError;
    }
    _returnResult(e) {
      if (this.throwOnError && e && e.error) throw e.error;
      return e;
    }
    _logPrefix() {
      return `GoTrueClient@${this.storageKey}:${this.instanceID} (${L}) ${new Date().toISOString()}`;
    }
    _debug(...e) {
      return (
        this.logDebugMessages && this.logger(this._logPrefix(), ...e),
        this
      );
    }
    async initialize() {
      if (this.initializePromise) return await this.initializePromise;
      ((this._pendingInitNotifications = []),
        (this.initializePromise = (async () =>
          this.lock == null
            ? await this._initialize()
            : await this._acquireLock(
                this.lockAcquireTimeout,
                async () => await this._initialize(),
              ))()));
      let e = await this.initializePromise,
        t = this._pendingInitNotifications ?? [];
      this._pendingInitNotifications = null;
      for (let e of t)
        await this._notifyAllSubscribers(e.event, e.session, e.broadcast);
      return e;
    }
    async _initialize() {
      try {
        let e = {},
          t = `none`;
        if (
          (ts() &&
            ((e = is(window.location.href)),
            this._isImplicitGrantCallback(e)
              ? (t = `implicit`)
              : (await this._isPKCECallback(e)) && (t = `pkce`)),
          ts() && this.detectSessionInUrl && t !== `none`)
        ) {
          let { data: n, error: r } = await this._getSessionFromURL(e, t);
          if (r) {
            if (
              (this._debug(
                `#_initialize()`,
                `error detecting session from URL`,
                r,
              ),
              Mo(r))
            ) {
              let e = r.details?.code;
              if (
                e === `identity_already_exists` ||
                e === `identity_not_found` ||
                e === `single_identity_not_deletable`
              )
                return { error: r };
            }
            return { error: r };
          }
          let { session: i, redirectType: a } = n;
          return (
            this._debug(
              `#_initialize()`,
              `detected session in URL`,
              i,
              `redirect type`,
              a,
            ),
            await this._saveSession(i),
            setTimeout(async () => {
              a === `recovery`
                ? await this._notifyAllSubscribers(`PASSWORD_RECOVERY`, i)
                : await this._notifyAllSubscribers(`SIGNED_IN`, i);
            }, 0),
            { error: null }
          );
        }
        return (await this._recoverAndRefresh(), { error: null });
      } catch (e) {
        return B(e)
          ? this._returnResult({ error: e })
          : this._returnResult({
              error: new To(`Unexpected error during initialization`, e),
            });
      } finally {
        (await this._handleVisibilityChange(),
          this._debug(`#_initialize()`, `end`));
      }
    }
    async signInAnonymously(e) {
      try {
        let { data: t, error: n } = await V(
          this.fetch,
          `POST`,
          `${this.url}/signup`,
          {
            headers: this.headers,
            body: {
              data: e?.options?.data ?? {},
              gotrue_meta_security: { captcha_token: e?.options?.captchaToken },
            },
            xform: Gs,
          },
        );
        if (n || !t)
          return this._returnResult({
            data: { user: null, session: null },
            error: n,
          });
        let r = t.session,
          i = t.user;
        return (
          t.session &&
            (await this._saveSession(t.session),
            await this._notifyAllSubscribers(`SIGNED_IN`, r)),
          this._returnResult({ data: { user: i, session: r }, error: null })
        );
      } catch (e) {
        if (B(e))
          return this._returnResult({
            data: { user: null, session: null },
            error: e,
          });
        throw e;
      }
    }
    async signUp(e) {
      let t = null;
      try {
        let n;
        if (`email` in e) {
          let { email: r, password: i, options: a } = e,
            o = null,
            s = null;
          (this.flowType === `pkce` &&
            ([o, s, t] = await this._getCodeChallengeAndMethod()),
            (n = await V(this.fetch, `POST`, `${this.url}/signup`, {
              headers: this.headers,
              redirectTo: this._maybeAppendFlowIdToRedirect(
                a?.emailRedirectTo,
                t,
              ),
              body: {
                email: r,
                password: i,
                data: a?.data ?? {},
                gotrue_meta_security: { captcha_token: a?.captchaToken },
                code_challenge: o,
                code_challenge_method: s,
              },
              xform: Gs,
            })));
        } else if (`phone` in e) {
          let { phone: t, password: r, options: i } = e;
          n = await V(this.fetch, `POST`, `${this.url}/signup`, {
            headers: this.headers,
            body: {
              phone: t,
              password: r,
              data: i?.data ?? {},
              channel: i?.channel ?? `sms`,
              gotrue_meta_security: { captcha_token: i?.captchaToken },
            },
            xform: Gs,
          });
        } else
          throw new Ao(
            `You must provide either an email or phone number and a password`,
          );
        let { data: r, error: i } = n;
        if (i || !r)
          return (
            await Es(this.storage, this.storageKey, t),
            this._returnResult({
              data: { user: null, session: null },
              error: i,
            })
          );
        let a = r.session,
          o = r.user;
        return (
          r.session &&
            (await this._saveSession(r.session),
            await this._notifyAllSubscribers(`SIGNED_IN`, a)),
          this._returnResult({ data: { user: o, session: a }, error: null })
        );
      } catch (e) {
        if ((await Es(this.storage, this.storageKey, t), B(e)))
          return this._returnResult({
            data: { user: null, session: null },
            error: e,
          });
        throw e;
      }
    }
    async signInWithPassword(e) {
      try {
        let t;
        if (`email` in e) {
          let { email: n, password: r, options: i } = e;
          t = await V(
            this.fetch,
            `POST`,
            `${this.url}/token?grant_type=password`,
            {
              headers: this.headers,
              body: {
                email: n,
                password: r,
                gotrue_meta_security: { captcha_token: i?.captchaToken },
              },
              xform: Ks,
            },
          );
        } else if (`phone` in e) {
          let { phone: n, password: r, options: i } = e;
          t = await V(
            this.fetch,
            `POST`,
            `${this.url}/token?grant_type=password`,
            {
              headers: this.headers,
              body: {
                phone: n,
                password: r,
                gotrue_meta_security: { captcha_token: i?.captchaToken },
              },
              xform: Ks,
            },
          );
        } else
          throw new Ao(
            `You must provide either an email or phone number and a password`,
          );
        let { data: n, error: r } = t;
        if (r)
          return this._returnResult({
            data: { user: null, session: null },
            error: r,
          });
        if (!n || !n.session || !n.user) {
          let e = new ko();
          return this._returnResult({
            data: { user: null, session: null },
            error: e,
          });
        }
        return (
          n.session &&
            (await this._saveSession(n.session),
            await this._notifyAllSubscribers(`SIGNED_IN`, n.session)),
          this._returnResult({
            data: Object.assign(
              { user: n.user, session: n.session },
              n.weak_password ? { weakPassword: n.weak_password } : null,
            ),
            error: r,
          })
        );
      } catch (e) {
        if (B(e))
          return this._returnResult({
            data: { user: null, session: null },
            error: e,
          });
        throw e;
      }
    }
    async signInWithOAuth(e) {
      return await this._handleProviderSignIn(e.provider, {
        redirectTo: e.options?.redirectTo,
        scopes: e.options?.scopes,
        queryParams: e.options?.queryParams,
        skipBrowserRedirect: e.options?.skipBrowserRedirect,
      });
    }
    async exchangeCodeForSession(e, t) {
      return (
        await this.initializePromise,
        this.lock == null
          ? this._exchangeCodeForSession(e, t)
          : this._acquireLock(this.lockAcquireTimeout, async () =>
              this._exchangeCodeForSession(e, t),
            )
      );
    }
    async signInWithWeb3(e) {
      let { chain: t } = e;
      switch (t) {
        case `ethereum`:
          return await this.signInWithEthereum(e);
        case `solana`:
          return await this.signInWithSolana(e);
        default:
          throw Error(`@supabase/auth-js: Unsupported chain "${t}"`);
      }
    }
    async signInWithEthereum(e) {
      let t, n;
      if (`message` in e) ((t = e.message), (n = e.signature));
      else {
        let { chain: r, wallet: i, statement: a, options: o } = e,
          s;
        if (!ts()) {
          if (typeof i != `object` || !o?.url)
            throw Error(
              `@supabase/auth-js: Both wallet and url must be specified in non-browser environments.`,
            );
          s = i;
        } else if (typeof i == `object`) s = i;
        else {
          let e = window;
          if (
            `ethereum` in e &&
            typeof e.ethereum == `object` &&
            `request` in e.ethereum &&
            typeof e.ethereum.request == `function`
          )
            s = e.ethereum;
          else
            throw Error(
              `@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.`,
            );
        }
        let c = new URL(o?.url ?? window.location.href),
          l = await s
            .request({ method: `eth_requestAccounts` })
            .then((e) => e)
            .catch(() => {
              throw Error(
                `@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid`,
              );
            });
        if (!l || l.length === 0)
          throw Error(
            `@supabase/auth-js: No accounts available. Please ensure the wallet is connected.`,
          );
        let u = rc(l[0]),
          d = o?.signInWithEthereum?.chainId;
        ((d ||= ic(await s.request({ method: `eth_chainId` }))),
          (t = oc({
            domain: c.host,
            address: u,
            statement: a,
            uri: c.href,
            version: `1`,
            chainId: d,
            nonce: o?.signInWithEthereum?.nonce,
            issuedAt: o?.signInWithEthereum?.issuedAt ?? new Date(),
            expirationTime: o?.signInWithEthereum?.expirationTime,
            notBefore: o?.signInWithEthereum?.notBefore,
            requestId: o?.signInWithEthereum?.requestId,
            resources: o?.signInWithEthereum?.resources,
          })),
          (n = await s.request({
            method: `personal_sign`,
            params: [ac(t), u],
          })));
      }
      try {
        let { data: r, error: i } = await V(
          this.fetch,
          `POST`,
          `${this.url}/token?grant_type=web3`,
          {
            headers: this.headers,
            body: Object.assign(
              { chain: `ethereum`, message: t, signature: n },
              e.options?.captchaToken
                ? {
                    gotrue_meta_security: {
                      captcha_token: e.options?.captchaToken,
                    },
                  }
                : null,
            ),
            xform: Gs,
          },
        );
        if (i) throw i;
        if (!r || !r.session || !r.user) {
          let e = new ko();
          return this._returnResult({
            data: { user: null, session: null },
            error: e,
          });
        }
        return (
          r.session &&
            (await this._saveSession(r.session),
            await this._notifyAllSubscribers(`SIGNED_IN`, r.session)),
          this._returnResult({ data: Object.assign({}, r), error: i })
        );
      } catch (e) {
        if (B(e))
          return this._returnResult({
            data: { user: null, session: null },
            error: e,
          });
        throw e;
      }
    }
    async signInWithSolana(e) {
      let t, n;
      if (`message` in e) ((t = e.message), (n = e.signature));
      else {
        let { chain: r, wallet: i, statement: a, options: o } = e,
          s;
        if (!ts()) {
          if (typeof i != `object` || !o?.url)
            throw Error(
              `@supabase/auth-js: Both wallet and url must be specified in non-browser environments.`,
            );
          s = i;
        } else if (typeof i == `object`) s = i;
        else {
          let e = window;
          if (
            `solana` in e &&
            typeof e.solana == `object` &&
            ((`signIn` in e.solana && typeof e.solana.signIn == `function`) ||
              (`signMessage` in e.solana &&
                typeof e.solana.signMessage == `function`))
          )
            s = e.solana;
          else
            throw Error(
              `@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.`,
            );
        }
        let c = new URL(o?.url ?? window.location.href);
        if (`signIn` in s && s.signIn) {
          let e = await s.signIn(
              Object.assign(
                Object.assign(
                  Object.assign(
                    { issuedAt: new Date().toISOString() },
                    o?.signInWithSolana,
                  ),
                  { version: `1`, domain: c.host, uri: c.href },
                ),
                a ? { statement: a } : null,
              ),
            ),
            r;
          if (Array.isArray(e) && e[0] && typeof e[0] == `object`) r = e[0];
          else if (
            e &&
            typeof e == `object` &&
            `signedMessage` in e &&
            `signature` in e
          )
            r = e;
          else
            throw Error(
              `@supabase/auth-js: Wallet method signIn() returned unrecognized value`,
            );
          if (
            `signedMessage` in r &&
            `signature` in r &&
            (typeof r.signedMessage == `string` ||
              r.signedMessage instanceof Uint8Array) &&
            r.signature instanceof Uint8Array
          )
            ((t =
              typeof r.signedMessage == `string`
                ? r.signedMessage
                : new TextDecoder().decode(r.signedMessage)),
              (n = r.signature));
          else
            throw Error(
              `@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields`,
            );
        } else {
          if (
            !(`signMessage` in s) ||
            typeof s.signMessage != `function` ||
            !(`publicKey` in s) ||
            typeof s != `object` ||
            !s.publicKey ||
            !(`toBase58` in s.publicKey) ||
            typeof s.publicKey.toBase58 != `function`
          )
            throw Error(
              `@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API`,
            );
          t = [
            `${c.host} wants you to sign in with your Solana account:`,
            s.publicKey.toBase58(),
            ...(a ? [``, a, ``] : [``]),
            `Version: 1`,
            `URI: ${c.href}`,
            `Issued At: ${o?.signInWithSolana?.issuedAt ?? new Date().toISOString()}`,
            ...(o?.signInWithSolana?.notBefore
              ? [`Not Before: ${o.signInWithSolana.notBefore}`]
              : []),
            ...(o?.signInWithSolana?.expirationTime
              ? [`Expiration Time: ${o.signInWithSolana.expirationTime}`]
              : []),
            ...(o?.signInWithSolana?.chainId
              ? [`Chain ID: ${o.signInWithSolana.chainId}`]
              : []),
            ...(o?.signInWithSolana?.nonce
              ? [`Nonce: ${o.signInWithSolana.nonce}`]
              : []),
            ...(o?.signInWithSolana?.requestId
              ? [`Request ID: ${o.signInWithSolana.requestId}`]
              : []),
            ...(o?.signInWithSolana?.resources?.length
              ? [
                  `Resources`,
                  ...o.signInWithSolana.resources.map((e) => `- ${e}`),
                ]
              : []),
          ].join(`
`);
          let e = await s.signMessage(new TextEncoder().encode(t), `utf8`);
          if (!e || !(e instanceof Uint8Array))
            throw Error(
              `@supabase/auth-js: Wallet signMessage() API returned an recognized value`,
            );
          n = e;
        }
      }
      try {
        let { data: r, error: i } = await V(
          this.fetch,
          `POST`,
          `${this.url}/token?grant_type=web3`,
          {
            headers: this.headers,
            body: Object.assign(
              { chain: `solana`, message: t, signature: Qo(n) },
              e.options?.captchaToken
                ? {
                    gotrue_meta_security: {
                      captcha_token: e.options?.captchaToken,
                    },
                  }
                : null,
            ),
            xform: Gs,
          },
        );
        if (i) throw i;
        if (!r || !r.session || !r.user) {
          let e = new ko();
          return this._returnResult({
            data: { user: null, session: null },
            error: e,
          });
        }
        return (
          r.session &&
            (await this._saveSession(r.session),
            await this._notifyAllSubscribers(`SIGNED_IN`, r.session)),
          this._returnResult({ data: Object.assign({}, r), error: i })
        );
      } catch (e) {
        if (B(e))
          return this._returnResult({
            data: { user: null, session: null },
            error: e,
          });
        throw e;
      }
    }
    async _exchangeCodeForSession(e, t) {
      let n = t?.flowId != null,
        r = n ? ys(t?.flowId) : ts() ? ys(is(window.location.href)[xo]) : null;
      n &&
        !r &&
        this._debug(
          `#_exchangeCodeForSession()`,
          `provided flowId is not a valid flow id`,
          t?.flowId,
        );
      let { verifier: i, flowId: a } =
          n && !r
            ? { verifier: null, flowId: null }
            : await Ts(this.storage, this.storageKey, r),
        [o, s] = (i ?? ``).split(`/`);
      try {
        if (!o && this.flowType === `pkce`) throw new Po();
        let { data: t, error: n } = await V(
          this.fetch,
          `POST`,
          `${this.url}/token?grant_type=pkce`,
          {
            headers: this.headers,
            body: { auth_code: e, code_verifier: o },
            xform: Gs,
          },
        );
        if ((await Es(this.storage, this.storageKey, a), n)) throw n;
        if (!t || !t.session || !t.user) {
          let e = new ko();
          return this._returnResult({
            data: { user: null, session: null, redirectType: null },
            error: e,
          });
        }
        return (
          t.session &&
            (await this._saveSession(t.session),
            await this._notifyAllSubscribers(
              s === `recovery` ? `PASSWORD_RECOVERY` : `SIGNED_IN`,
              t.session,
            )),
          this._returnResult({
            data: Object.assign(Object.assign({}, t), {
              redirectType: s ?? null,
            }),
            error: n,
          })
        );
      } catch (e) {
        if ((await Es(this.storage, this.storageKey, a), B(e)))
          return this._returnResult({
            data: { user: null, session: null, redirectType: null },
            error: e,
          });
        throw e;
      }
    }
    async signInWithIdToken(e) {
      try {
        let {
            options: t,
            provider: n,
            token: r,
            access_token: i,
            nonce: a,
          } = e,
          { data: o, error: s } = await V(
            this.fetch,
            `POST`,
            `${this.url}/token?grant_type=id_token`,
            {
              headers: this.headers,
              body: {
                provider: n,
                id_token: r,
                access_token: i,
                nonce: a,
                gotrue_meta_security: { captcha_token: t?.captchaToken },
              },
              xform: Gs,
            },
          );
        if (s)
          return this._returnResult({
            data: { user: null, session: null },
            error: s,
          });
        if (!o || !o.session || !o.user) {
          let e = new ko();
          return this._returnResult({
            data: { user: null, session: null },
            error: e,
          });
        }
        return (
          o.session &&
            (await this._saveSession(o.session),
            await this._notifyAllSubscribers(`SIGNED_IN`, o.session)),
          this._returnResult({ data: o, error: s })
        );
      } catch (e) {
        if (B(e))
          return this._returnResult({
            data: { user: null, session: null },
            error: e,
          });
        throw e;
      }
    }
    async signInWithOtp(e) {
      let t = null;
      try {
        if (`email` in e) {
          let { email: n, options: r } = e,
            i = null,
            a = null;
          this.flowType === `pkce` &&
            ([i, a, t] = await this._getCodeChallengeAndMethod());
          let { error: o } = await V(this.fetch, `POST`, `${this.url}/otp`, {
            headers: this.headers,
            body: {
              email: n,
              data: r?.data ?? {},
              create_user: r?.shouldCreateUser ?? !0,
              gotrue_meta_security: { captcha_token: r?.captchaToken },
              code_challenge: i,
              code_challenge_method: a,
            },
            redirectTo: this._maybeAppendFlowIdToRedirect(
              r?.emailRedirectTo,
              t,
            ),
          });
          return this._returnResult({
            data: { user: null, session: null },
            error: o,
          });
        }
        if (`phone` in e) {
          let { phone: t, options: n } = e,
            { data: r, error: i } = await V(
              this.fetch,
              `POST`,
              `${this.url}/otp`,
              {
                headers: this.headers,
                body: {
                  phone: t,
                  data: n?.data ?? {},
                  create_user: n?.shouldCreateUser ?? !0,
                  gotrue_meta_security: { captcha_token: n?.captchaToken },
                  channel: n?.channel ?? `sms`,
                },
              },
            );
          return this._returnResult({
            data: { user: null, session: null, messageId: r?.message_id },
            error: i,
          });
        }
        throw new Ao(`You must provide either an email or phone number.`);
      } catch (e) {
        if ((await Es(this.storage, this.storageKey, t), B(e)))
          return this._returnResult({
            data: { user: null, session: null },
            error: e,
          });
        throw e;
      }
    }
    async verifyOtp(e) {
      try {
        let t, n;
        `options` in e &&
          ((t = e.options?.redirectTo), (n = e.options?.captchaToken));
        let { data: r, error: i } = await V(
          this.fetch,
          `POST`,
          `${this.url}/verify`,
          {
            headers: this.headers,
            body: Object.assign(Object.assign({}, e), {
              gotrue_meta_security: { captcha_token: n },
            }),
            redirectTo: t,
            xform: Gs,
          },
        );
        if (i) throw i;
        if (!r) throw Error(`An error occurred on token verification.`);
        let a = r.session,
          o = r.user;
        return (
          a?.access_token &&
            (await this._saveSession(a),
            await this._notifyAllSubscribers(
              e.type == `recovery` ? `PASSWORD_RECOVERY` : `SIGNED_IN`,
              a,
            )),
          this._returnResult({ data: { user: o, session: a }, error: null })
        );
      } catch (e) {
        if (B(e))
          return this._returnResult({
            data: { user: null, session: null },
            error: e,
          });
        throw e;
      }
    }
    async signInWithSSO(e) {
      let t = null;
      try {
        let n = null,
          r = null;
        this.flowType === `pkce` &&
          ([n, r, t] = await this._getCodeChallengeAndMethod());
        let i = await V(this.fetch, `POST`, `${this.url}/sso`, {
          body: Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    {},
                    `providerId` in e ? { provider_id: e.providerId } : null,
                  ),
                  `domain` in e ? { domain: e.domain } : null,
                ),
                {
                  redirect_to: this._maybeAppendFlowIdToRedirect(
                    e.options?.redirectTo,
                    t,
                  ),
                },
              ),
              e?.options?.captchaToken
                ? {
                    gotrue_meta_security: {
                      captcha_token: e.options.captchaToken,
                    },
                  }
                : null,
            ),
            {
              skip_http_redirect: !0,
              code_challenge: n,
              code_challenge_method: r,
            },
          ),
          headers: this.headers,
          xform: Js,
        });
        return (
          i.data?.url &&
            ts() &&
            !e.options?.skipBrowserRedirect &&
            window.location.assign(i.data.url),
          this._returnResult(i)
        );
      } catch (e) {
        if ((await Es(this.storage, this.storageKey, t), B(e)))
          return this._returnResult({ data: null, error: e });
        throw e;
      }
    }
    async reauthenticate() {
      return (
        await this.initializePromise,
        this.lock == null
          ? await this._reauthenticate()
          : await this._acquireLock(
              this.lockAcquireTimeout,
              async () => await this._reauthenticate(),
            )
      );
    }
    async _reauthenticate() {
      try {
        return await this._useSession(async (e) => {
          let {
            data: { session: t },
            error: n,
          } = e;
          if (n) throw n;
          if (!t) throw new Do();
          let { error: r } = await V(
            this.fetch,
            `GET`,
            `${this.url}/reauthenticate`,
            { headers: this.headers, jwt: t.access_token },
          );
          return this._returnResult({
            data: { user: null, session: null },
            error: r,
          });
        });
      } catch (e) {
        if (B(e))
          return this._returnResult({
            data: { user: null, session: null },
            error: e,
          });
        throw e;
      }
    }
    async resend(e) {
      let t = null;
      try {
        let n = `${this.url}/resend`;
        if (`email` in e) {
          let { email: r, type: i, options: a } = e,
            o = null,
            s = null;
          this.flowType === `pkce` &&
            ([o, s, t] = await this._getCodeChallengeAndMethod());
          let { error: c } = await V(this.fetch, `POST`, n, {
            headers: this.headers,
            body: {
              email: r,
              type: i,
              gotrue_meta_security: { captcha_token: a?.captchaToken },
              code_challenge: o,
              code_challenge_method: s,
            },
            redirectTo: this._maybeAppendFlowIdToRedirect(
              a?.emailRedirectTo,
              t,
            ),
          });
          return (
            c && (await Es(this.storage, this.storageKey, t)),
            this._returnResult({
              data: { user: null, session: null },
              error: c,
            })
          );
        } else if (`phone` in e) {
          let { phone: t, type: r, options: i } = e,
            { data: a, error: o } = await V(this.fetch, `POST`, n, {
              headers: this.headers,
              body: {
                phone: t,
                type: r,
                gotrue_meta_security: { captcha_token: i?.captchaToken },
              },
            });
          return this._returnResult({
            data: { user: null, session: null, messageId: a?.message_id },
            error: o,
          });
        }
        throw new Ao(
          `You must provide either an email or phone number and a type`,
        );
      } catch (e) {
        if ((await Es(this.storage, this.storageKey, t), B(e)))
          return this._returnResult({
            data: { user: null, session: null },
            error: e,
          });
        throw e;
      }
    }
    async getSession() {
      return (
        await this.initializePromise,
        this.lock == null
          ? await this._useSession(async (e) => e)
          : await this._acquireLock(this.lockAcquireTimeout, async () =>
              this._useSession(async (e) => e),
            )
      );
    }
    async _acquireLock(e, t) {
      this._debug(`#_acquireLock`, `begin`, e);
      try {
        if (this.lockAcquired) {
          let e = this.pendingInLock.length
              ? this.pendingInLock[this.pendingInLock.length - 1]
              : Promise.resolve(),
            n = (async () => (await e, await t()))();
          return (
            this.pendingInLock.push(
              (async () => {
                try {
                  await n;
                } catch {}
              })(),
            ),
            n
          );
        }
        return await this.lock(`lock:${this.storageKey}`, e, async () => {
          this._debug(
            `#_acquireLock`,
            `lock acquired for storage key`,
            this.storageKey,
          );
          try {
            this.lockAcquired = !0;
            let e = t();
            for (
              this.pendingInLock.push(
                (async () => {
                  try {
                    await e;
                  } catch {}
                })(),
              ),
                await e;
              this.pendingInLock.length;
            ) {
              let e = [...this.pendingInLock];
              (await Promise.all(e), this.pendingInLock.splice(0, e.length));
            }
            return await e;
          } finally {
            (this._debug(
              `#_acquireLock`,
              `lock released for storage key`,
              this.storageKey,
            ),
              (this.lockAcquired = !1));
          }
        });
      } finally {
        this._debug(`#_acquireLock`, `end`);
      }
    }
    async _useSession(e) {
      this._debug(`#_useSession`, `begin`);
      try {
        return await e(await this.__loadSession());
      } finally {
        this._debug(`#_useSession`, `end`);
      }
    }
    async __loadSession() {
      (this._debug(`#__loadSession()`, `begin`),
        this.lock != null &&
          !this.lockAcquired &&
          this._debug(
            `#__loadSession()`,
            `used outside of an acquired lock!`,
            Error().stack,
          ));
      try {
        let e = null,
          t = await cs(this.storage, this.storageKey);
        if (
          (this._debug(`#getSession()`, `session from storage`, t),
          t !== null &&
            (this._isValidSession(t)
              ? (e = t)
              : (this._debug(
                  `#getSession()`,
                  `session from storage is not valid`,
                ),
                await this._removeSession())),
          !e)
        )
          return { data: { session: null }, error: null };
        let n = e.expires_at ? e.expires_at * 1e3 - Date.now() < ho : !1;
        if (
          (this._debug(
            `#__loadSession()`,
            `session has${n ? `` : ` not`} expired`,
            `expires_at`,
            e.expires_at,
          ),
          !n)
        ) {
          if (this.userStorage) {
            let t = await cs(this.userStorage, this.storageKey + `-user`);
            t?.user ? (e.user = t.user) : (e.user = Ls());
          }
          if (
            this.storage.isServer &&
            e.user &&
            !e.user.__isUserNotAvailableProxy
          ) {
            let t = { value: this.suppressGetSessionWarning };
            ((e.user = Rs(e.user, t)),
              t.value && (this.suppressGetSessionWarning = !0));
          }
          return { data: { session: e }, error: null };
        }
        let { data: r, error: i } = await this._callRefreshToken(
          e.refresh_token,
        );
        if (i) {
          if (e.expires_at && e.expires_at * 1e3 > Date.now()) {
            let t = await cs(this.storage, this.storageKey);
            if (t && t.refresh_token === e.refresh_token)
              return this._returnResult({ data: { session: e }, error: null });
          }
          return this._returnResult({ data: { session: null }, error: i });
        }
        return this._returnResult({ data: { session: r }, error: null });
      } finally {
        this._debug(`#__loadSession()`, `end`);
      }
    }
    async getUser(e) {
      if (e) return await this._getUser(e);
      await this.initializePromise;
      let t;
      return (
        (t =
          this.lock == null
            ? await this._getUser()
            : await this._acquireLock(
                this.lockAcquireTimeout,
                async () => await this._getUser(),
              )),
        t.data.user && (this.suppressGetSessionWarning = !0),
        t
      );
    }
    async _getUser(e) {
      try {
        return e
          ? await V(this.fetch, `GET`, `${this.url}/user`, {
              headers: this.headers,
              jwt: e,
              xform: qs,
            })
          : await this._useSession(async (e) => {
              let { data: t, error: n } = e;
              if (n) throw n;
              return !t.session?.access_token &&
                !this.hasCustomAuthorizationHeader
                ? { data: { user: null }, error: new Do() }
                : await V(this.fetch, `GET`, `${this.url}/user`, {
                    headers: this.headers,
                    jwt: t.session?.access_token ?? void 0,
                    xform: qs,
                  });
            });
      } catch (e) {
        if (B(e))
          return (
            Oo(e) && (await this._removeSession()),
            this._returnResult({ data: { user: null }, error: e })
          );
        throw e;
      }
    }
    async updateUser(e, t = {}) {
      return (
        await this.initializePromise,
        this.lock == null
          ? await this._updateUser(e, t)
          : await this._acquireLock(
              this.lockAcquireTimeout,
              async () => await this._updateUser(e, t),
            )
      );
    }
    async _updateUser(e, t = {}) {
      let n = null;
      try {
        return await this._useSession(async (r) => {
          let { data: i, error: a } = r;
          if (a) throw a;
          if (!i.session) throw new Do();
          let o = i.session,
            s = null,
            c = null;
          this.flowType === `pkce` &&
            e.email != null &&
            ([s, c, n] = await this._getCodeChallengeAndMethod());
          let { data: l, error: u } = await V(
            this.fetch,
            `PUT`,
            `${this.url}/user`,
            {
              headers: this.headers,
              redirectTo: this._maybeAppendFlowIdToRedirect(
                t?.emailRedirectTo,
                n,
              ),
              body: Object.assign(Object.assign({}, e), {
                code_challenge: s,
                code_challenge_method: c,
              }),
              jwt: o.access_token,
              xform: qs,
            },
          );
          if (u) throw u;
          return (
            (o.user = l.user),
            await this._saveSession(o),
            await this._notifyAllSubscribers(`USER_UPDATED`, o),
            this._returnResult({ data: { user: o.user }, error: null })
          );
        });
      } catch (e) {
        if ((await Es(this.storage, this.storageKey, n), B(e)))
          return this._returnResult({ data: { user: null }, error: e });
        throw e;
      }
    }
    async setSession(e) {
      return (
        await this.initializePromise,
        this.lock == null
          ? await this._setSession(e)
          : await this._acquireLock(
              this.lockAcquireTimeout,
              async () => await this._setSession(e),
            )
      );
    }
    async _setSession(e) {
      try {
        if (!e.access_token || !e.refresh_token) throw new Do();
        let t = Date.now() / 1e3,
          n = t,
          r = !0,
          i = null,
          { payload: a } = ds(e.access_token);
        if ((a.exp && ((n = a.exp), (r = n <= t)), r)) {
          let { data: t, error: n } = await this._callRefreshToken(
            e.refresh_token,
          );
          if (n)
            return this._returnResult({
              data: { user: null, session: null },
              error: n,
            });
          if (!t) return { data: { user: null, session: null }, error: null };
          i = t;
        } else {
          let { data: r, error: a } = await this._getUser(e.access_token);
          if (a)
            return this._returnResult({
              data: { user: null, session: null },
              error: a,
            });
          ((i = {
            access_token: e.access_token,
            refresh_token: e.refresh_token,
            user: r.user,
            token_type: `bearer`,
            expires_in: n - t,
            expires_at: n,
          }),
            await this._saveSession(i),
            await this._notifyAllSubscribers(`SIGNED_IN`, i));
        }
        return this._returnResult({
          data: { user: i.user, session: i },
          error: null,
        });
      } catch (e) {
        if (B(e))
          return this._returnResult({
            data: { session: null, user: null },
            error: e,
          });
        throw e;
      }
    }
    async refreshSession(e) {
      return (
        await this.initializePromise,
        this.lock == null
          ? await this._refreshSession(e)
          : await this._acquireLock(
              this.lockAcquireTimeout,
              async () => await this._refreshSession(e),
            )
      );
    }
    async _refreshSession(e) {
      try {
        return await this._useSession(async (t) => {
          if (!e) {
            let { data: n, error: r } = t;
            if (r) throw r;
            e = n.session ?? void 0;
          }
          if (!e?.refresh_token) throw new Do();
          let { data: n, error: r } = await this._callRefreshToken(
            e.refresh_token,
          );
          return r
            ? this._returnResult({
                data: { user: null, session: null },
                error: r,
              })
            : n
              ? this._returnResult({
                  data: { user: n.user, session: n },
                  error: null,
                })
              : this._returnResult({
                  data: { user: null, session: null },
                  error: null,
                });
        });
      } catch (e) {
        if (B(e))
          return this._returnResult({
            data: { user: null, session: null },
            error: e,
          });
        throw e;
      }
    }
    async _getSessionFromURL(e, t) {
      try {
        if (!ts()) throw new jo(`No browser detected.`);
        if (e.error || e.error_description || e.error_code)
          throw new jo(
            e.error_description ||
              `Error in URL with unspecified error_description`,
            {
              error: e.error || `unspecified_error`,
              code: e.error_code || `unspecified_code`,
            },
          );
        switch (t) {
          case `implicit`:
            if (this.flowType === `pkce`)
              throw new No(`Not a valid PKCE flow url.`);
            break;
          case `pkce`:
            if (this.flowType === `implicit`)
              throw new jo(`Not a valid implicit grant flow url.`);
            break;
          default:
        }
        if (t === `pkce`) {
          if (
            (this._debug(`#_initialize()`, `begin`, `is PKCE flow`, !0),
            !e.code)
          )
            throw new No(`No code detected.`);
          let { data: t, error: n } = await this._exchangeCodeForSession(
            e.code,
            { flowId: e[xo] },
          );
          if (n) throw n;
          let r = new URL(window.location.href);
          return (
            r.searchParams.delete(`code`),
            r.searchParams.delete(xo),
            window.history.replaceState(window.history.state, ``, r.toString()),
            {
              data: {
                session: t.session,
                redirectType: t.redirectType ?? null,
              },
              error: null,
            }
          );
        }
        let {
          provider_token: n,
          provider_refresh_token: r,
          access_token: i,
          refresh_token: a,
          expires_in: o,
          expires_at: s,
          token_type: c,
        } = e;
        if (!i || !o || !a || !c) throw new jo(`No session defined in URL`);
        let l = Math.round(Date.now() / 1e3),
          u = parseInt(o),
          d = l + u;
        s && (d = parseInt(s));
        let f = d - l;
        f * 1e3 <= 3e4 &&
          console.warn(
            `@supabase/gotrue-js: Session as retrieved from URL expires in ${f}s, should have been closer to ${u}s`,
          );
        let p = d - u;
        l - p >= 120
          ? console.warn(
              `@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale`,
              p,
              d,
              l,
            )
          : l - p < 0 &&
            console.warn(
              `@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew`,
              p,
              d,
              l,
            );
        let { data: m, error: h } = await this._getUser(i);
        if (h) throw h;
        let g = {
          provider_token: n,
          provider_refresh_token: r,
          access_token: i,
          expires_in: u,
          expires_at: d,
          refresh_token: a,
          token_type: c,
          user: m.user,
        };
        return (
          (window.location.hash = ``),
          this._debug(`#_getSessionFromURL()`, `clearing window.location.hash`),
          this._returnResult({
            data: { session: g, redirectType: e.type },
            error: null,
          })
        );
      } catch (e) {
        if (B(e))
          return this._returnResult({
            data: { session: null, redirectType: null },
            error: e,
          });
        throw e;
      }
    }
    _isImplicitGrantCallback(e) {
      return typeof this.detectSessionInUrl == `function`
        ? this.detectSessionInUrl(new URL(window.location.href), e)
        : !!(e.access_token || e.error || e.error_description || e.error_code);
    }
    async _isPKCECallback(e) {
      if (!e.code) return !1;
      let t = ys(e[xo]);
      return t && (await cs(this.storage, xs(this.storageKey, t)))
        ? !0
        : !!(await cs(this.storage, `${this.storageKey}-code-verifier`));
    }
    async signOut(e = { scope: `global` }) {
      return (
        await this.initializePromise,
        this.lock == null
          ? await this._signOut(e)
          : await this._acquireLock(
              this.lockAcquireTimeout,
              async () => await this._signOut(e),
            )
      );
    }
    async _signOut({ scope: e } = { scope: `global` }) {
      return await this._useSession(async (t) => {
        let n = async () => {
            await this._removeSession();
          },
          { data: r, error: i } = t;
        if (i && !Oo(i)) return this._returnResult({ error: i });
        let a = r.session?.access_token;
        if (a) {
          let { error: t } = await this.admin.signOut(a, e);
          if (
            t &&
            !(
              (wo(t) &&
                (t.status === 404 || t.status === 401 || t.status === 403)) ||
              Oo(t)
            )
          )
            return (
              e !== `others` && (await n()),
              this._returnResult({ error: t })
            );
        }
        return (
          e !== `others` && (await n()),
          this._returnResult({ error: null })
        );
      });
    }
    onAuthStateChange(e) {
      let t = es(),
        n = {
          id: t,
          callback: e,
          unsubscribe: () => {
            (this._debug(
              `#unsubscribe()`,
              `state change callback with id removed`,
              t,
            ),
              this.stateChangeEmitters.delete(t));
          },
        };
      return (
        this._debug(`#onAuthStateChange()`, `registered callback with id`, t),
        this.stateChangeEmitters.set(t, n),
        (async () => {
          (await this.initializePromise,
            this.lock == null
              ? await this._emitInitialSession(t)
              : await this._acquireLock(this.lockAcquireTimeout, async () => {
                  this._emitInitialSession(t);
                }));
        })(),
        { data: { subscription: n } }
      );
    }
    async _emitInitialSession(e) {
      return await this._useSession(async (t) => {
        try {
          let {
            data: { session: n },
            error: r,
          } = t;
          if (r) throw r;
          (await this.stateChangeEmitters
            .get(e)
            ?.callback(`INITIAL_SESSION`, n),
            this._debug(`INITIAL_SESSION`, `callback id`, e, `session`, n));
        } catch (t) {
          (await this.stateChangeEmitters
            .get(e)
            ?.callback(`INITIAL_SESSION`, null),
            this._debug(`INITIAL_SESSION`, `callback id`, e, `error`, t),
            Oo(t) ||
            Io(t) ||
            (wo(t) &&
              (t.code === `refresh_token_not_found` ||
                t.code === `refresh_token_already_used` ||
                t.code === `session_expired`))
              ? console.warn(t)
              : console.error(t));
        }
      });
    }
    async resetPasswordForEmail(e, t = {}) {
      let n = null,
        r = null,
        i = null;
      this.flowType === `pkce` &&
        ([n, r, i] = await this._getCodeChallengeAndMethod(!0));
      try {
        return await V(this.fetch, `POST`, `${this.url}/recover`, {
          body: {
            email: e,
            code_challenge: n,
            code_challenge_method: r,
            gotrue_meta_security: { captcha_token: t.captchaToken },
          },
          headers: this.headers,
          redirectTo: this._maybeAppendFlowIdToRedirect(t.redirectTo, i),
        });
      } catch (e) {
        if ((await Es(this.storage, this.storageKey, i), B(e)))
          return this._returnResult({ data: null, error: e });
        throw e;
      }
    }
    async getUserIdentities() {
      try {
        let { data: e, error: t } = await this.getUser();
        if (t) throw t;
        return this._returnResult({
          data: { identities: e.user.identities ?? [] },
          error: null,
        });
      } catch (e) {
        if (B(e)) return this._returnResult({ data: null, error: e });
        throw e;
      }
    }
    async linkIdentity(e) {
      return `token` in e
        ? this.linkIdentityIdToken(e)
        : this.linkIdentityOAuth(e);
    }
    async linkIdentityOAuth(e) {
      let t = null;
      try {
        let { data: n, error: r } = await this._useSession(async (n) => {
          let { data: r, error: i } = n;
          if (i) throw i;
          let { url: a, flowId: o } = await this._getUrlForProvider(
            `${this.url}/user/identities/authorize`,
            e.provider,
            {
              redirectTo: e.options?.redirectTo,
              scopes: e.options?.scopes,
              queryParams: e.options?.queryParams,
              skipBrowserRedirect: !0,
            },
          );
          return (
            (t = o),
            await V(this.fetch, `GET`, a, {
              headers: this.headers,
              jwt: r.session?.access_token ?? void 0,
            })
          );
        });
        if (r) throw r;
        return (
          ts() &&
            !e.options?.skipBrowserRedirect &&
            window.location.assign(n?.url),
          this._returnResult({
            data: { provider: e.provider, url: n?.url, flowId: t },
            error: null,
          })
        );
      } catch (n) {
        if (B(n))
          return this._returnResult({
            data: { provider: e.provider, url: null, flowId: t },
            error: n,
          });
        throw n;
      }
    }
    async linkIdentityIdToken(e) {
      return await this._useSession(async (t) => {
        try {
          let {
            error: n,
            data: { session: r },
          } = t;
          if (n) throw n;
          let {
              options: i,
              provider: a,
              token: o,
              access_token: s,
              nonce: c,
            } = e,
            { data: l, error: u } = await V(
              this.fetch,
              `POST`,
              `${this.url}/token?grant_type=id_token`,
              {
                headers: this.headers,
                jwt: r?.access_token ?? void 0,
                body: {
                  provider: a,
                  id_token: o,
                  access_token: s,
                  nonce: c,
                  link_identity: !0,
                  gotrue_meta_security: { captcha_token: i?.captchaToken },
                },
                xform: Gs,
              },
            );
          return u
            ? this._returnResult({
                data: { user: null, session: null },
                error: u,
              })
            : !l || !l.session || !l.user
              ? this._returnResult({
                  data: { user: null, session: null },
                  error: new ko(),
                })
              : (l.session &&
                  (await this._saveSession(l.session),
                  await this._notifyAllSubscribers(`USER_UPDATED`, l.session)),
                this._returnResult({ data: l, error: u }));
        } catch (e) {
          if ((await Es(this.storage, this.storageKey, null), B(e)))
            return this._returnResult({
              data: { user: null, session: null },
              error: e,
            });
          throw e;
        }
      });
    }
    async unlinkIdentity(e) {
      try {
        return await this._useSession(async (t) => {
          let { data: n, error: r } = t;
          if (r) throw r;
          return await V(
            this.fetch,
            `DELETE`,
            `${this.url}/user/identities/${e.identity_id}`,
            { headers: this.headers, jwt: n.session?.access_token ?? void 0 },
          );
        });
      } catch (e) {
        if (B(e)) return this._returnResult({ data: null, error: e });
        throw e;
      }
    }
    async _refreshAccessToken(e) {
      let t = `#_refreshAccessToken()`;
      this._debug(t, `begin`);
      try {
        let n = Date.now();
        return await ps(
          async (n) => (
            n > 0 && (await fs(200 * 2 ** (n - 1))),
            this._debug(t, `refreshing attempt`, n),
            await V(
              this.fetch,
              `POST`,
              `${this.url}/token?grant_type=refresh_token`,
              { body: { refresh_token: e }, headers: this.headers, xform: Gs },
            )
          ),
          (e, t) => {
            let r = 200 * 2 ** e;
            return t && Io(t) && Date.now() + r - n < 3e4;
          },
        );
      } catch (e) {
        if ((this._debug(t, `error`, e), B(e)))
          return this._returnResult({
            data: { session: null, user: null },
            error: e,
          });
        throw e;
      } finally {
        this._debug(t, `end`);
      }
    }
    _isValidSession(e) {
      return (
        typeof e == `object` &&
        !!e &&
        `access_token` in e &&
        `refresh_token` in e &&
        `expires_at` in e
      );
    }
    async _handleProviderSignIn(e, t) {
      let { url: n, flowId: r } = await this._getUrlForProvider(
        `${this.url}/authorize`,
        e,
        {
          redirectTo: t.redirectTo,
          scopes: t.scopes,
          queryParams: t.queryParams,
        },
      );
      return (
        this._debug(
          `#_handleProviderSignIn()`,
          `provider`,
          e,
          `options`,
          t,
          `url`,
          n,
        ),
        ts() && !t.skipBrowserRedirect && window.location.assign(n),
        { data: { provider: e, url: n, flowId: r }, error: null }
      );
    }
    async _recoverAndRefresh() {
      let e = `#_recoverAndRefresh()`;
      this._debug(e, `begin`);
      try {
        let t = await cs(this.storage, this.storageKey);
        if (t && this.userStorage) {
          let e = await cs(this.userStorage, this.storageKey + `-user`);
          (!this.storage.isServer &&
            Object.is(this.storage, this.userStorage) &&
            !e &&
            ((e = { user: t.user }),
            await ss(this.userStorage, this.storageKey + `-user`, e)),
            (t.user = e?.user ?? Ls()));
        } else if (t && !t.user && !t.user) {
          let e = await cs(this.storage, this.storageKey + `-user`);
          e && e?.user
            ? ((t.user = e.user),
              await ls(this.storage, this.storageKey + `-user`),
              await ss(this.storage, this.storageKey, t))
            : (t.user = Ls());
        }
        if (
          (this._debug(e, `session from storage`, t), !this._isValidSession(t))
        ) {
          (this._debug(e, `session is not valid`),
            t !== null && (await this._removeSession()));
          return;
        }
        let n = (t.expires_at ?? 1 / 0) * 1e3 - Date.now() < ho;
        if (
          (this._debug(
            e,
            `session has${n ? `` : ` not`} expired with margin of ${ho}s`,
          ),
          n)
        ) {
          if (this.autoRefreshToken && t.refresh_token) {
            let { error: n } = await this._callRefreshToken(t.refresh_token);
            n &&
              (Ro(n)
                ? this._debug(e, `refresh discarded by commit guard`, n)
                : this._debug(e, `refresh failed`, n));
          }
        } else if (t.user && t.user.__isUserNotAvailableProxy === !0)
          try {
            let { data: n, error: r } = await this._getUser(t.access_token);
            !r && n?.user
              ? ((t.user = n.user),
                await this._saveSession(t),
                await this._notifyAllSubscribers(`SIGNED_IN`, t))
              : this._debug(
                  e,
                  `could not get user data, skipping SIGNED_IN notification`,
                );
          } catch (t) {
            (console.error(`Error getting user data:`, t),
              this._debug(
                e,
                `error getting user data, skipping SIGNED_IN notification`,
                t,
              ));
          }
        else await this._notifyAllSubscribers(`SIGNED_IN`, t);
      } catch (t) {
        (this._debug(e, `error`, t),
          Io(t) ? console.warn(t) : console.error(t));
        return;
      } finally {
        this._debug(e, `end`);
      }
    }
    async _callRefreshToken(e) {
      var t, n;
      if (!e) throw new Do();
      if (this.refreshingDeferred) return this.refreshingDeferred.promise;
      if (
        this.lastRefreshFailure &&
        this.lastRefreshFailure.refreshToken === e &&
        Date.now() < this.lastRefreshFailure.expiresAt
      )
        return (
          this._debug(
            `#_callRefreshToken()`,
            `returning cached failure (cooldown active)`,
          ),
          this.lastRefreshFailure.result
        );
      let r = `#_callRefreshToken()`;
      this._debug(r, `begin`);
      try {
        this.refreshingDeferred = new us();
        let t = await cs(this.storage, this.storageKey),
          { data: n, error: i } = await this._refreshAccessToken(e);
        if (i) throw i;
        if (!n.session) throw new Do();
        let a = await cs(this.storage, this.storageKey);
        if (t !== null && (a === null || a.refresh_token !== t.refresh_token)) {
          this._debug(
            r,
            `commit guard: storage changed since refresh started, discarding rotated tokens`,
            { startedWith: `present`, nowHolds: a ? `replaced` : `cleared` },
          );
          let e = { data: null, error: new Lo() };
          return (this.refreshingDeferred.resolve(e), e);
        }
        let o = this._sessionRemovalEpoch;
        if (
          (await this._saveSession(n.session), this._sessionRemovalEpoch !== o)
        ) {
          (this._debug(
            r,
            `commit guard (post-save): _removeSession ran during _saveSession, undoing write`,
          ),
            await ls(this.storage, this.storageKey),
            this.userStorage &&
              (await ls(this.userStorage, this.storageKey + `-user`)));
          let e = { data: null, error: new Lo() };
          return (this.refreshingDeferred.resolve(e), e);
        }
        await this._notifyAllSubscribers(`TOKEN_REFRESHED`, n.session);
        let s = { data: n.session, error: null };
        return (
          (this.lastRefreshFailure = null),
          this.refreshingDeferred.resolve(s),
          s
        );
      } catch (i) {
        if ((this._debug(r, `error`, i), B(i))) {
          let n = { data: null, error: i };
          if (!Io(i)) {
            let e = await cs(this.storage, this.storageKey);
            e?.expires_at && e.expires_at * 1e3 > Date.now()
              ? this._debug(
                  r,
                  `proactive refresh failed, access token still valid — preserving session`,
                )
              : await this._removeSession();
          }
          return (
            (this.lastRefreshFailure = {
              refreshToken: e,
              result: n,
              expiresAt: Date.now() + R,
            }),
            (t = this.refreshingDeferred) == null || t.resolve(n),
            n
          );
        }
        throw ((n = this.refreshingDeferred) == null || n.reject(i), i);
      } finally {
        ((this.refreshingDeferred = null), this._debug(r, `end`));
      }
    }
    async _notifyAllSubscribers(e, t, n = !0) {
      if (this._pendingInitNotifications !== null && n) {
        this._pendingInitNotifications.push({
          event: e,
          session: t,
          broadcast: n,
        });
        return;
      }
      let r = `#_notifyAllSubscribers(${e})`;
      this._debug(r, `begin`, t, `broadcast = ${n}`);
      try {
        this.broadcastChannel &&
          n &&
          this.broadcastChannel.postMessage({ event: e, session: t });
        let r = [],
          i = Array.from(this.stateChangeEmitters.values()).map(async (n) => {
            try {
              await n.callback(e, t);
            } catch (e) {
              r.push(e);
            }
          });
        if ((await Promise.all(i), r.length > 0)) {
          for (let e = 0; e < r.length; e += 1) console.error(r[e]);
          throw r[0];
        }
      } finally {
        this._debug(r, `end`);
      }
    }
    async _saveSession(e) {
      (this._debug(`#_saveSession()`, e),
        (this.suppressGetSessionWarning = !0));
      let t = Object.assign({}, e),
        n = t.user && t.user.__isUserNotAvailableProxy === !0;
      if (this.userStorage) {
        !n &&
          t.user &&
          (await ss(this.userStorage, this.storageKey + `-user`, {
            user: t.user,
          }));
        let e = Object.assign({}, t);
        delete e.user;
        let r = zs(e);
        await ss(this.storage, this.storageKey, r);
      } else {
        let e = zs(t);
        await ss(this.storage, this.storageKey, e);
      }
    }
    async _removeSession() {
      ((this._sessionRemovalEpoch += 1),
        this._debug(`#_removeSession()`),
        (this.lastRefreshFailure = null),
        (this.suppressGetSessionWarning = !1),
        await ls(this.storage, this.storageKey),
        await Ds(this.storage, this.storageKey),
        await ls(this.storage, this.storageKey + `-user`),
        this.userStorage &&
          (await ls(this.userStorage, this.storageKey + `-user`)),
        await this._notifyAllSubscribers(`SIGNED_OUT`, null));
    }
    _removeVisibilityChangedCallback() {
      this._debug(`#_removeVisibilityChangedCallback()`);
      let e = this.visibilityChangedCallback;
      this.visibilityChangedCallback = null;
      try {
        e &&
          ts() &&
          window != null &&
          window.removeEventListener &&
          window.removeEventListener(`visibilitychange`, e);
      } catch (e) {
        console.error(`removing visibilitychange callback failed`, e);
      }
    }
    async _startAutoRefresh() {
      (await this._stopAutoRefresh(), this._debug(`#_startAutoRefresh()`));
      let e = setInterval(() => this._autoRefreshTokenTick(), mo);
      ((this.autoRefreshTicker = e),
        e && typeof e == `object` && typeof e.unref == `function`
          ? e.unref()
          : typeof Deno < `u` &&
            typeof Deno.unrefTimer == `function` &&
            Deno.unrefTimer(e));
      let t = setTimeout(async () => {
        (await this.initializePromise, await this._autoRefreshTokenTick());
      }, 0);
      ((this.autoRefreshTickTimeout = t),
        t && typeof t == `object` && typeof t.unref == `function`
          ? t.unref()
          : typeof Deno < `u` &&
            typeof Deno.unrefTimer == `function` &&
            Deno.unrefTimer(t));
    }
    async _stopAutoRefresh() {
      this._debug(`#_stopAutoRefresh()`);
      let e = this.autoRefreshTicker;
      ((this.autoRefreshTicker = null), e && clearInterval(e));
      let t = this.autoRefreshTickTimeout;
      ((this.autoRefreshTickTimeout = null), t && clearTimeout(t));
    }
    async startAutoRefresh() {
      (this._removeVisibilityChangedCallback(), await this._startAutoRefresh());
    }
    async stopAutoRefresh() {
      (this._removeVisibilityChangedCallback(), await this._stopAutoRefresh());
    }
    async dispose() {
      var e;
      (this._removeVisibilityChangedCallback(),
        await this._stopAutoRefresh(),
        (e = this.broadcastChannel) == null || e.close(),
        (this.broadcastChannel = null),
        this.stateChangeEmitters.clear());
    }
    async _autoRefreshTokenTick() {
      if (
        (this._debug(`#_autoRefreshTokenTick()`, `begin`), this.lock != null)
      ) {
        try {
          await this._acquireLock(0, async () => {
            try {
              let e = Date.now();
              try {
                return await this._useSession(async (t) => {
                  let {
                    data: { session: n },
                  } = t;
                  if (!n || !n.refresh_token || !n.expires_at) {
                    this._debug(`#_autoRefreshTokenTick()`, `no session`);
                    return;
                  }
                  let r = Math.floor((n.expires_at * 1e3 - e) / mo);
                  (this._debug(
                    `#_autoRefreshTokenTick()`,
                    `access token expires in ${r} ticks, a tick lasts ${mo}ms, refresh threshold is 3 ticks`,
                  ),
                    r <= 3 && (await this._callRefreshToken(n.refresh_token)));
                });
              } catch (e) {
                console.error(
                  `Auto refresh tick failed with error. This is likely a transient error.`,
                  e,
                );
              }
            } finally {
              this._debug(`#_autoRefreshTokenTick()`, `end`);
            }
          });
        } catch (e) {
          if (e instanceof tc)
            this._debug(`auto refresh token tick lock not available`);
          else throw e;
        }
        return;
      }
      if (this.refreshingDeferred !== null) {
        this._debug(
          `#_autoRefreshTokenTick()`,
          `refresh already in flight, skipping`,
        );
        return;
      }
      try {
        let e = Date.now();
        try {
          await this._useSession(async (t) => {
            let {
              data: { session: n },
            } = t;
            if (!n || !n.refresh_token || !n.expires_at) {
              this._debug(`#_autoRefreshTokenTick()`, `no session`);
              return;
            }
            let r = Math.floor((n.expires_at * 1e3 - e) / mo);
            (this._debug(
              `#_autoRefreshTokenTick()`,
              `access token expires in ${r} ticks, a tick lasts ${mo}ms, refresh threshold is 3 ticks`,
            ),
              r <= 3 && (await this._callRefreshToken(n.refresh_token)));
          });
        } catch (e) {
          console.error(
            `Auto refresh tick failed with error. This is likely a transient error.`,
            e,
          );
        }
      } finally {
        this._debug(`#_autoRefreshTokenTick()`, `end`);
      }
    }
    async _handleVisibilityChange() {
      if (
        (this._debug(`#_handleVisibilityChange()`),
        !ts() || !(window != null && window.addEventListener))
      )
        return (this.autoRefreshToken && this.startAutoRefresh(), !1);
      try {
        ((this.visibilityChangedCallback = async () => {
          try {
            await this._onVisibilityChanged(!1);
          } catch (e) {
            this._debug(`#visibilityChangedCallback`, `error`, e);
          }
        }),
          window == null ||
            window.addEventListener(
              `visibilitychange`,
              this.visibilityChangedCallback,
            ),
          await this._onVisibilityChanged(!0));
      } catch (e) {
        console.error(`_handleVisibilityChange`, e);
      }
    }
    async _onVisibilityChanged(e) {
      let t = `#_onVisibilityChanged(${e})`;
      if (
        (this._debug(t, `visibilityState`, document.visibilityState),
        document.visibilityState === `visible`)
      ) {
        if ((this.autoRefreshToken && this._startAutoRefresh(), !e))
          if ((await this.initializePromise, this.lock != null))
            await this._acquireLock(this.lockAcquireTimeout, async () => {
              if (document.visibilityState !== `visible`) {
                this._debug(
                  t,
                  `acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting`,
                );
                return;
              }
              await this._recoverAndRefresh();
            });
          else {
            if (document.visibilityState !== `visible`) {
              this._debug(
                t,
                `visibilityState is no longer visible, skipping recovery`,
              );
              return;
            }
            await this._recoverAndRefresh();
          }
      } else
        document.visibilityState === `hidden` &&
          this.autoRefreshToken &&
          this._stopAutoRefresh();
    }
    async _getUrlForProvider(e, t, n) {
      let r = n?.redirectTo,
        i = null,
        a = null,
        o = null;
      this.flowType === `pkce` &&
        (([i, a, o] = await this._getCodeChallengeAndMethod()),
        (r = this._maybeAppendFlowIdToRedirect(r, o)));
      let s = [`provider=${encodeURIComponent(t)}`];
      if (
        (r && s.push(`redirect_to=${encodeURIComponent(r)}`),
        n?.scopes && s.push(`scopes=${encodeURIComponent(n.scopes)}`),
        i != null && a != null)
      ) {
        let e = new URLSearchParams({
          code_challenge: `${encodeURIComponent(i)}`,
          code_challenge_method: `${encodeURIComponent(a)}`,
        });
        s.push(e.toString());
      }
      if (n?.queryParams) {
        let e = new URLSearchParams(n.queryParams);
        s.push(e.toString());
      }
      return (
        n?.skipBrowserRedirect &&
          s.push(`skip_http_redirect=${n.skipBrowserRedirect}`),
        { url: `${e}?${s.join(`&`)}`, flowId: o }
      );
    }
    _maybeAppendFlowIdToRedirect(e, t) {
      return !e || !t || !this.experimental.appendPkceFlowIdToRedirects
        ? (e ?? void 0)
        : Os(e, t);
    }
    async _getCodeChallengeAndMethod(e = !1) {
      return ks(this.storage, this.storageKey, e, (e) =>
        this._debug(
          `#_getCodeChallengeAndMethod()`,
          `evicted oldest pending PKCE verifier slot`,
          e,
        ),
      );
    }
    async _unenroll(e) {
      try {
        return await this._useSession(async (t) => {
          let { data: n, error: r } = t;
          return r
            ? this._returnResult({ data: null, error: r })
            : await V(
                this.fetch,
                `DELETE`,
                `${this.url}/factors/${e.factorId}`,
                { headers: this.headers, jwt: n?.session?.access_token },
              );
        });
      } catch (e) {
        if (B(e)) return this._returnResult({ data: null, error: e });
        throw e;
      }
    }
    async _enroll(e) {
      try {
        return await this._useSession(async (t) => {
          let { data: n, error: r } = t;
          if (r) return this._returnResult({ data: null, error: r });
          let i = Object.assign(
              { friendly_name: e.friendlyName, factor_type: e.factorType },
              e.factorType === `phone`
                ? { phone: e.phone }
                : e.factorType === `totp`
                  ? { issuer: e.issuer }
                  : {},
            ),
            { data: a, error: o } = await V(
              this.fetch,
              `POST`,
              `${this.url}/factors`,
              { body: i, headers: this.headers, jwt: n?.session?.access_token },
            );
          return o
            ? this._returnResult({ data: null, error: o })
            : (e.factorType === `totp` &&
                a.type === `totp` &&
                a?.totp?.qr_code &&
                (a.totp.qr_code = `data:image/svg+xml;utf-8,${a.totp.qr_code}`),
              this._returnResult({ data: a, error: null }));
        });
      } catch (e) {
        if (B(e)) return this._returnResult({ data: null, error: e });
        throw e;
      }
    }
    async _verify(e) {
      let t = async () => {
        try {
          return await this._useSession(async (t) => {
            let { data: n, error: r } = t;
            if (r) return this._returnResult({ data: null, error: r });
            let i = Object.assign(
                { challenge_id: e.challengeId },
                `webauthn` in e
                  ? {
                      webauthn: Object.assign(Object.assign({}, e.webauthn), {
                        credential_response:
                          e.webauthn.type === `create`
                            ? mc(e.webauthn.credential_response)
                            : hc(e.webauthn.credential_response),
                      }),
                    }
                  : { code: e.code },
              ),
              { data: a, error: o } = await V(
                this.fetch,
                `POST`,
                `${this.url}/factors/${e.factorId}/verify`,
                {
                  body: i,
                  headers: this.headers,
                  jwt: n?.session?.access_token,
                },
              );
            return o
              ? this._returnResult({ data: null, error: o })
              : (await this._saveSession(
                  Object.assign(
                    { expires_at: Math.round(Date.now() / 1e3) + a.expires_in },
                    a,
                  ),
                ),
                await this._notifyAllSubscribers(`MFA_CHALLENGE_VERIFIED`, a),
                this._returnResult({ data: a, error: o }));
          });
        } catch (e) {
          if (B(e)) return this._returnResult({ data: null, error: e });
          throw e;
        }
      };
      return this.lock == null
        ? t()
        : this._acquireLock(this.lockAcquireTimeout, t);
    }
    async _challenge(e) {
      let t = async () => {
        try {
          return await this._useSession(async (t) => {
            let { data: n, error: r } = t;
            if (r) return this._returnResult({ data: null, error: r });
            let i = await V(
              this.fetch,
              `POST`,
              `${this.url}/factors/${e.factorId}/challenge`,
              { body: e, headers: this.headers, jwt: n?.session?.access_token },
            );
            if (i.error) return i;
            let { data: a } = i;
            if (a.type !== `webauthn`) return { data: a, error: null };
            switch (a.webauthn.type) {
              case `create`:
                return {
                  data: Object.assign(Object.assign({}, a), {
                    webauthn: Object.assign(Object.assign({}, a.webauthn), {
                      credential_options: Object.assign(
                        Object.assign({}, a.webauthn.credential_options),
                        {
                          publicKey: fc(
                            a.webauthn.credential_options.publicKey,
                          ),
                        },
                      ),
                    }),
                  }),
                  error: null,
                };
              case `request`:
                return {
                  data: Object.assign(Object.assign({}, a), {
                    webauthn: Object.assign(Object.assign({}, a.webauthn), {
                      credential_options: Object.assign(
                        Object.assign({}, a.webauthn.credential_options),
                        {
                          publicKey: pc(
                            a.webauthn.credential_options.publicKey,
                          ),
                        },
                      ),
                    }),
                  }),
                  error: null,
                };
            }
          });
        } catch (e) {
          if (B(e)) return this._returnResult({ data: null, error: e });
          throw e;
        }
      };
      return this.lock == null
        ? t()
        : this._acquireLock(this.lockAcquireTimeout, t);
    }
    async _challengeAndVerify(e) {
      let { data: t, error: n } = await this._challenge({
        factorId: e.factorId,
      });
      return n
        ? this._returnResult({ data: null, error: n })
        : await this._verify({
            factorId: e.factorId,
            challengeId: t.id,
            code: e.code,
          });
    }
    async _listFactors() {
      let {
        data: { user: e },
        error: t,
      } = await this.getUser();
      if (t) return { data: null, error: t };
      let n = { all: [], phone: [], totp: [], webauthn: [] };
      for (let t of e?.factors ?? [])
        (n.all.push(t), t.status === `verified` && n[t.factor_type].push(t));
      return { data: n, error: null };
    }
    async _getAuthenticatorAssuranceLevel(e) {
      if (e)
        try {
          let { payload: t } = ds(e),
            n = null;
          t.aal && (n = t.aal);
          let r = n,
            {
              data: { user: i },
              error: a,
            } = await this.getUser(e);
          if (a) return this._returnResult({ data: null, error: a });
          (i?.factors?.filter((e) => e.status === `verified`) ?? []).length >
            0 && (r = `aal2`);
          let o = t.amr || [];
          return {
            data: {
              currentLevel: n,
              nextLevel: r,
              currentAuthenticationMethods: o,
            },
            error: null,
          };
        } catch (e) {
          if (B(e)) return this._returnResult({ data: null, error: e });
          throw e;
        }
      let {
        data: { session: t },
        error: n,
      } = await this.getSession();
      if (n) return this._returnResult({ data: null, error: n });
      if (!t)
        return {
          data: {
            currentLevel: null,
            nextLevel: null,
            currentAuthenticationMethods: [],
          },
          error: null,
        };
      let { payload: r } = ds(t.access_token),
        i = null;
      r.aal && (i = r.aal);
      let a = i;
      (t.user.factors?.filter((e) => e.status === `verified`) ?? []).length >
        0 && (a = `aal2`);
      let o = r.amr || [];
      return {
        data: {
          currentLevel: i,
          nextLevel: a,
          currentAuthenticationMethods: o,
        },
        error: null,
      };
    }
    async _getAuthorizationDetails(e) {
      try {
        return await this._useSession(async (t) => {
          let {
            data: { session: n },
            error: r,
          } = t;
          return r
            ? this._returnResult({ data: null, error: r })
            : n
              ? await V(
                  this.fetch,
                  `GET`,
                  `${this.url}/oauth/authorizations/${e}`,
                  {
                    headers: this.headers,
                    jwt: n.access_token,
                    xform: (e) => ({ data: e, error: null }),
                  },
                )
              : this._returnResult({ data: null, error: new Do() });
        });
      } catch (e) {
        if (B(e)) return this._returnResult({ data: null, error: e });
        throw e;
      }
    }
    async _approveAuthorization(e, t) {
      try {
        return await this._useSession(async (n) => {
          let {
            data: { session: r },
            error: i,
          } = n;
          if (i) return this._returnResult({ data: null, error: i });
          if (!r) return this._returnResult({ data: null, error: new Do() });
          let a = await V(
            this.fetch,
            `POST`,
            `${this.url}/oauth/authorizations/${e}/consent`,
            {
              headers: this.headers,
              jwt: r.access_token,
              body: { action: `approve` },
              xform: (e) => ({ data: e, error: null }),
            },
          );
          return (
            a.data &&
              a.data.redirect_url &&
              ts() &&
              !t?.skipBrowserRedirect &&
              window.location.assign(a.data.redirect_url),
            a
          );
        });
      } catch (e) {
        if (B(e)) return this._returnResult({ data: null, error: e });
        throw e;
      }
    }
    async _denyAuthorization(e, t) {
      try {
        return await this._useSession(async (n) => {
          let {
            data: { session: r },
            error: i,
          } = n;
          if (i) return this._returnResult({ data: null, error: i });
          if (!r) return this._returnResult({ data: null, error: new Do() });
          let a = await V(
            this.fetch,
            `POST`,
            `${this.url}/oauth/authorizations/${e}/consent`,
            {
              headers: this.headers,
              jwt: r.access_token,
              body: { action: `deny` },
              xform: (e) => ({ data: e, error: null }),
            },
          );
          return (
            a.data &&
              a.data.redirect_url &&
              ts() &&
              !t?.skipBrowserRedirect &&
              window.location.assign(a.data.redirect_url),
            a
          );
        });
      } catch (e) {
        if (B(e)) return this._returnResult({ data: null, error: e });
        throw e;
      }
    }
    async _listOAuthGrants() {
      try {
        return await this._useSession(async (e) => {
          let {
            data: { session: t },
            error: n,
          } = e;
          return n
            ? this._returnResult({ data: null, error: n })
            : t
              ? await V(this.fetch, `GET`, `${this.url}/user/oauth/grants`, {
                  headers: this.headers,
                  jwt: t.access_token,
                  xform: (e) => ({ data: e, error: null }),
                })
              : this._returnResult({ data: null, error: new Do() });
        });
      } catch (e) {
        if (B(e)) return this._returnResult({ data: null, error: e });
        throw e;
      }
    }
    async _revokeOAuthGrant(e) {
      try {
        return await this._useSession(async (t) => {
          let {
            data: { session: n },
            error: r,
          } = t;
          return r
            ? this._returnResult({ data: null, error: r })
            : n
              ? (await V(
                  this.fetch,
                  `DELETE`,
                  `${this.url}/user/oauth/grants`,
                  {
                    headers: this.headers,
                    jwt: n.access_token,
                    query: { client_id: e.clientId },
                    noResolveJson: !0,
                  },
                ),
                { data: {}, error: null })
              : this._returnResult({ data: null, error: new Do() });
        });
      } catch (e) {
        if (B(e)) return this._returnResult({ data: null, error: e });
        throw e;
      }
    }
    async fetchJwk(e, t = { keys: [] }) {
      let n = t.keys.find((t) => t.kid === e);
      if (n) return n;
      let r = Date.now();
      if (
        ((n = this.jwks.keys.find((t) => t.kid === e)),
        n && this.jwks_cached_at + 6e5 > r)
      )
        return n;
      let { data: i, error: a } = await V(
        this.fetch,
        `GET`,
        `${this.url}/.well-known/jwks.json`,
        { headers: this.headers },
      );
      if (a) throw a;
      return !i.keys ||
        i.keys.length === 0 ||
        ((this.jwks = i),
        (this.jwks_cached_at = r),
        (n = i.keys.find((t) => t.kid === e)),
        !n)
        ? null
        : n;
    }
    async getClaims(e, t = {}) {
      try {
        let n = e;
        if (!n) {
          let { data: e, error: t } = await this.getSession();
          if (t || !e.session)
            return this._returnResult({ data: null, error: t });
          n = e.session.access_token;
        }
        let {
          header: r,
          payload: i,
          signature: a,
          raw: { header: o, payload: s },
        } = ds(n);
        if (!t?.allowExpired)
          try {
            Ms(i.exp);
          } catch (e) {
            throw new Bo(
              e instanceof Error ? e.message : `JWT validation failed`,
            );
          }
        let c =
          !r.alg ||
          r.alg.startsWith(`HS`) ||
          !r.kid ||
          !(`crypto` in globalThis && `subtle` in globalThis.crypto)
            ? null
            : await this.fetchJwk(r.kid, t?.keys ? { keys: t.keys } : t?.jwks);
        if (!c) {
          let { error: e } = await this.getUser(n);
          if (e) throw e;
          return { data: { claims: i, header: r, signature: a }, error: null };
        }
        let l = Ns(r.alg),
          u = await crypto.subtle.importKey(`jwk`, c, l, !0, [`verify`]);
        if (!(await crypto.subtle.verify(l, u, a, Zo(`${o}.${s}`))))
          throw new Bo(`Invalid JWT signature`);
        return { data: { claims: i, header: r, signature: a }, error: null };
      } catch (e) {
        if (B(e)) return this._returnResult({ data: null, error: e });
        throw e;
      }
    }
    async signInWithPasskey(e) {
      Is(this.experimental);
      try {
        if (!_c())
          return this._returnResult({
            data: null,
            error: new To(`Browser does not support WebAuthn`, null),
          });
        let { data: t, error: n } = await this._startPasskeyAuthentication({
          options: { captchaToken: e?.options?.captchaToken },
        });
        if (n || !t) return this._returnResult({ data: null, error: n });
        let { data: r, error: i } = await yc({
          publicKey: pc(t.options),
          signal: e?.options?.signal ?? dc.createNewAbortSignal(),
        });
        if (i || !r)
          return this._returnResult({
            data: null,
            error: i ?? new To(`WebAuthn ceremony failed`, null),
          });
        let a = hc(r);
        return this._verifyPasskeyAuthentication({
          challengeId: t.challenge_id,
          credential: a,
        });
      } catch (e) {
        if (B(e)) return this._returnResult({ data: null, error: e });
        throw e;
      }
    }
    async registerPasskey(e) {
      Is(this.experimental);
      try {
        if (!_c())
          return this._returnResult({
            data: null,
            error: new To(`Browser does not support WebAuthn`, null),
          });
        let { data: t, error: n } = await this._startPasskeyRegistration();
        if (n || !t) return this._returnResult({ data: null, error: n });
        let { data: r, error: i } = await vc({
          publicKey: fc(t.options),
          signal: e?.options?.signal ?? dc.createNewAbortSignal(),
        });
        if (i || !r)
          return this._returnResult({
            data: null,
            error: i ?? new To(`WebAuthn ceremony failed`, null),
          });
        let a = mc(r);
        return this._verifyPasskeyRegistration({
          challengeId: t.challenge_id,
          credential: a,
        });
      } catch (e) {
        if (B(e)) return this._returnResult({ data: null, error: e });
        throw e;
      }
    }
    async _startPasskeyRegistration() {
      Is(this.experimental);
      try {
        return await this._useSession(async (e) => {
          let {
            data: { session: t },
            error: n,
          } = e;
          if (n) return this._returnResult({ data: null, error: n });
          if (!t) return this._returnResult({ data: null, error: new Do() });
          let { data: r, error: i } = await V(
            this.fetch,
            `POST`,
            `${this.url}/passkeys/registration/options`,
            { headers: this.headers, jwt: t.access_token, body: {} },
          );
          return i
            ? this._returnResult({ data: null, error: i })
            : this._returnResult({ data: r, error: null });
        });
      } catch (e) {
        if (B(e)) return this._returnResult({ data: null, error: e });
        throw e;
      }
    }
    async _verifyPasskeyRegistration(e) {
      Is(this.experimental);
      try {
        return await this._useSession(async (t) => {
          let {
            data: { session: n },
            error: r,
          } = t;
          if (r) return this._returnResult({ data: null, error: r });
          if (!n) return this._returnResult({ data: null, error: new Do() });
          let { data: i, error: a } = await V(
            this.fetch,
            `POST`,
            `${this.url}/passkeys/registration/verify`,
            {
              headers: this.headers,
              jwt: n.access_token,
              body: { challenge_id: e.challengeId, credential: e.credential },
            },
          );
          return a
            ? this._returnResult({ data: null, error: a })
            : this._returnResult({ data: i, error: null });
        });
      } catch (e) {
        if (B(e)) return this._returnResult({ data: null, error: e });
        throw e;
      }
    }
    async _startPasskeyAuthentication(e) {
      Is(this.experimental);
      try {
        let { data: t, error: n } = await V(
          this.fetch,
          `POST`,
          `${this.url}/passkeys/authentication/options`,
          {
            headers: this.headers,
            body: {
              gotrue_meta_security: { captcha_token: e?.options?.captchaToken },
            },
          },
        );
        return n
          ? this._returnResult({ data: null, error: n })
          : this._returnResult({ data: t, error: null });
      } catch (e) {
        if (B(e)) return this._returnResult({ data: null, error: e });
        throw e;
      }
    }
    async _verifyPasskeyAuthentication(e) {
      Is(this.experimental);
      try {
        let { data: t, error: n } = await V(
          this.fetch,
          `POST`,
          `${this.url}/passkeys/authentication/verify`,
          {
            headers: this.headers,
            body: { challenge_id: e.challengeId, credential: e.credential },
            xform: Gs,
          },
        );
        return n
          ? this._returnResult({ data: null, error: n })
          : (t.session &&
              (await this._saveSession(t.session),
              await this._notifyAllSubscribers(`SIGNED_IN`, t.session)),
            this._returnResult({ data: t, error: null }));
      } catch (e) {
        if (B(e)) return this._returnResult({ data: null, error: e });
        throw e;
      }
    }
    async _listPasskeys() {
      Is(this.experimental);
      try {
        return await this._useSession(async (e) => {
          let {
            data: { session: t },
            error: n,
          } = e;
          if (n) return this._returnResult({ data: null, error: n });
          if (!t) return this._returnResult({ data: null, error: new Do() });
          let { data: r, error: i } = await V(
            this.fetch,
            `GET`,
            `${this.url}/passkeys`,
            {
              headers: this.headers,
              jwt: t.access_token,
              xform: (e) => ({ data: e, error: null }),
            },
          );
          return i
            ? this._returnResult({ data: null, error: i })
            : this._returnResult({ data: r, error: null });
        });
      } catch (e) {
        if (B(e)) return this._returnResult({ data: null, error: e });
        throw e;
      }
    }
    async _updatePasskey(e) {
      Is(this.experimental);
      try {
        return await this._useSession(async (t) => {
          let {
            data: { session: n },
            error: r,
          } = t;
          if (r) return this._returnResult({ data: null, error: r });
          if (!n) return this._returnResult({ data: null, error: new Do() });
          let { data: i, error: a } = await V(
            this.fetch,
            `PATCH`,
            `${this.url}/passkeys/${e.passkeyId}`,
            {
              headers: this.headers,
              jwt: n.access_token,
              body: { friendly_name: e.friendlyName },
            },
          );
          return a
            ? this._returnResult({ data: null, error: a })
            : this._returnResult({ data: i, error: null });
        });
      } catch (e) {
        if (B(e)) return this._returnResult({ data: null, error: e });
        throw e;
      }
    }
    async _deletePasskey(e) {
      Is(this.experimental);
      try {
        return await this._useSession(async (t) => {
          let {
            data: { session: n },
            error: r,
          } = t;
          if (r) return this._returnResult({ data: null, error: r });
          if (!n) return this._returnResult({ data: null, error: new Do() });
          let { error: i } = await V(
            this.fetch,
            `DELETE`,
            `${this.url}/passkeys/${e.passkeyId}`,
            { headers: this.headers, jwt: n.access_token, noResolveJson: !0 },
          );
          return i
            ? this._returnResult({ data: null, error: i })
            : this._returnResult({ data: null, error: null });
        });
      } catch (e) {
        if (B(e)) return this._returnResult({ data: null, error: e });
        throw e;
      }
    }
  };
Oc.nextInstanceID = {};
var kc = Oc,
  Ac = `modulepreload`,
  jc = function (e) {
    return `/` + e;
  },
  Mc = {},
  H = function (e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      let e = document.getElementsByTagName(`link`),
        i = document.querySelector(`meta[property=csp-nonce]`),
        a = i?.nonce || i?.getAttribute(`nonce`);
      function o(e) {
        return Promise.all(
          e.map((e) =>
            Promise.resolve(e).then(
              (e) => ({ status: `fulfilled`, value: e }),
              (e) => ({ status: `rejected`, reason: e }),
            ),
          ),
        );
      }
      function s(e) {
        return import.meta.resolve
          ? import.meta.resolve(e)
          : new URL(e, import.meta.url).href;
      }
      r = o(
        t.map((t) => {
          if (((t = jc(t, n)), (t = s(t)), t in Mc)) return;
          Mc[t] = !0;
          let r = t.endsWith(`.css`);
          for (let n = e.length - 1; n >= 0; n--) {
            let i = e[n];
            if (i.href === t && (!r || i.rel === `stylesheet`)) return;
          }
          let i = document.createElement(`link`);
          if (
            ((i.rel = r ? `stylesheet` : Ac),
            r || (i.as = `script`),
            (i.crossOrigin = ``),
            (i.href = t),
            a && i.setAttribute(`nonce`, a),
            document.head.appendChild(i),
            r)
          )
            return new Promise((e, n) => {
              (i.addEventListener(`load`, e),
                i.addEventListener(`error`, () =>
                  n(Error(`Unable to preload CSS for ${t}`)),
                ));
            });
        }),
      );
    }
    function i(e) {
      let t = new Event(`vite:preloadError`, { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
        throw e;
    }
    return r.then((t) => {
      for (let e of t || []) e.status === `rejected` && i(e.reason);
      return e().catch(i);
    });
  },
  Nc = `2.111.0`,
  Pc = ``,
  Fc;
if (typeof Deno < `u`) ((Pc = `deno`), (Fc = Deno.version?.deno));
else if (typeof document < `u`) Pc = `web`;
else if (typeof navigator < `u` && navigator.product === `ReactNative`)
  Pc = `react-native`;
else {
  var Ic;
  Pc = `node`;
  let e = globalThis.process;
  Fc = e == null || (Ic = e.version) == null ? void 0 : Ic.replace(/^v/, ``);
}
var Lc = [`runtime=${Pc}`];
Fc && Lc.push(`runtime-version=${Fc}`);
var Rc = {
    headers: { "X-Client-Info": `supabase-js/${Nc}; ${Lc.join(`; `)}` },
  },
  U = { schema: `public` },
  zc = {
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    flowType: `implicit`,
  },
  Bc = {},
  Vc = { enabled: !1, respectSamplingDecision: !0 };
function Hc(e, t, n, r) {
  function i(e) {
    return e instanceof n
      ? e
      : new n(function (t) {
          t(e);
        });
  }
  return new (n ||= Promise)(function (n, a) {
    function o(e) {
      try {
        c(r.next(e));
      } catch (e) {
        a(e);
      }
    }
    function s(e) {
      try {
        c(r.throw(e));
      } catch (e) {
        a(e);
      }
    }
    function c(e) {
      e.done ? n(e.value) : i(e.value).then(o, s);
    }
    c((r = r.apply(e, t || [])).next());
  });
}
var Uc = null,
  Wc = `@opentelemetry/api`;
function Gc() {
  return (Uc === null && (Uc = H(() => import(Wc), []).catch(() => null)), Uc);
}
function Kc() {
  return Hc(this, void 0, void 0, function* () {
    try {
      let e = yield Gc();
      if (!e || !e.propagation || !e.context) return null;
      let t = {};
      e.propagation.inject(e.context.active(), t);
      let n = t.traceparent;
      return n
        ? { traceparent: n, tracestate: t.tracestate, baggage: t.baggage }
        : null;
    } catch {
      return null;
    }
  });
}
function qc(e) {
  if (!e || typeof e != `string`) return null;
  let t = e.split(`-`);
  if (t.length !== 4) return null;
  let [n, r, i, a] = t;
  if (n.length !== 2 || r.length !== 32 || i.length !== 16 || a.length !== 2)
    return null;
  let o = /^[0-9a-f]+$/i;
  return !o.test(n) ||
    !o.test(r) ||
    !o.test(i) ||
    !o.test(a) ||
    r === `00000000000000000000000000000000` ||
    i === `0000000000000000`
    ? null
    : {
        version: n,
        traceId: r,
        parentId: i,
        traceFlags: a,
        isSampled: (parseInt(a, 16) & 1) == 1,
      };
}
function Jc(e, t) {
  if (!e || !t || t.length === 0) return !1;
  let n;
  if (e instanceof URL) n = e;
  else
    try {
      n = new URL(e);
    } catch {
      return !1;
    }
  for (let e of t)
    try {
      if (typeof e == `string`) {
        if (Yc(n.hostname, e)) return !0;
      } else if (e instanceof RegExp) {
        if (e.test(n.hostname)) return !0;
      } else if (typeof e == `function` && e(n)) return !0;
    } catch {
      continue;
    }
  return !1;
}
function Yc(e, t) {
  if (t === e) return !0;
  if (t.startsWith(`*.`)) {
    let n = t.slice(2);
    if (e.endsWith(n) && (e === n || e.endsWith(`.` + n))) return !0;
  }
  return !1;
}
function Xc(e) {
  let t = [];
  try {
    let n = new URL(e);
    t.push(n.hostname);
  } catch {}
  return (
    t.push(`*.supabase.co`, `*.supabase.in`),
    t.push(`localhost`, `127.0.0.1`, `[::1]`),
    t
  );
}
function Zc(e) {
  "@babel/helpers - typeof";
  return (
    (Zc =
      typeof Symbol == `function` && typeof Symbol.iterator == `symbol`
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == `function` &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? `symbol`
              : typeof e;
          }),
    Zc(e)
  );
}
function Qc(e, t) {
  if (Zc(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (Zc(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function $c(e) {
  var t = Qc(e, `string`);
  return Zc(t) == `symbol` ? t : t + ``;
}
function el(e, t, n) {
  return (
    (t = $c(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function tl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? tl(Object(n), !0).forEach(function (t) {
          el(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : tl(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var nl = (e) => (e ? (...t) => e(...t) : (...e) => fetch(...e)),
  rl = () => Headers,
  il = (e) => e.startsWith(`sb_publishable_`) || e.startsWith(`sb_secret_`),
  al = `sb_temp_`,
  ol = new Set(),
  sl = (e) => {
    if (!e.startsWith(`sb_`) || il(e) || e.startsWith(al)) return;
    let t = e.match(/^sb_[a-zA-Z0-9]+_/)?.[0] ?? `unknown`;
    ol.has(t) ||
      (ol.add(t),
      console.warn(
        `@supabase/supabase-js: Unrecognized Supabase API key format. The client will proceed and send this key as-is; if you see authentication errors you may need to upgrade @supabase/supabase-js to a version that recognizes this key type.`,
      ));
  },
  G = (e, t, n, r, i, a) => {
    let o = nl(r),
      s = rl(),
      c = i?.enabled === !0,
      l = i?.respectSamplingDecision !== !1,
      u = c ? Xc(t) : null,
      d = !(a?.omitApiKeyAsBearer && il(e));
    return async (t, r) => {
      let i = await n(),
        a = new s(r?.headers);
      if ((a.has(`apikey`) || a.set(`apikey`, e), !a.has(`Authorization`))) {
        let t = i ?? (d ? e : null);
        t && a.set(`Authorization`, `Bearer ${t}`);
      }
      if (u) {
        let e = await cl(t, u, l);
        e &&
          (e.traceparent &&
            !a.has(`traceparent`) &&
            a.set(`traceparent`, e.traceparent),
          e.tracestate &&
            !a.has(`tracestate`) &&
            a.set(`tracestate`, e.tracestate),
          e.baggage && !a.has(`baggage`) && a.set(`baggage`, e.baggage));
      }
      return o(t, W(W({}, r), {}, { headers: a }));
    };
  };
async function cl(e, t, n) {
  if (!Jc(typeof e == `string` || e instanceof URL ? e : e.url, t)) return null;
  let r = await Kc();
  if (!r || !r.traceparent) return null;
  if (n) {
    let e = qc(r.traceparent);
    if (e && !e.isSampled) return null;
  }
  return r;
}
function ll(e) {
  return typeof e == `boolean` ? { enabled: e } : e;
}
function ul(e) {
  return e.endsWith(`/`) ? e : e + `/`;
}
function dl(e, t) {
  let { db: n, auth: r, realtime: i, global: a } = e,
    { db: o, auth: s, realtime: c, global: l } = t,
    u = ll(e.tracePropagation),
    d = ll(t.tracePropagation),
    f = {
      db: W(W({}, o), n),
      auth: W(W({}, s), r),
      realtime: W(W({}, c), i),
      storage: {},
      global: W(
        W(W({}, l), a),
        {},
        { headers: W(W({}, l?.headers ?? {}), a?.headers ?? {}) },
      ),
      tracePropagation: {
        enabled: u?.enabled ?? d?.enabled ?? !1,
        respectSamplingDecision:
          u?.respectSamplingDecision ?? d?.respectSamplingDecision ?? !0,
      },
      accessToken: async () => ``,
    };
  return (
    e.accessToken ? (f.accessToken = e.accessToken) : delete f.accessToken,
    f
  );
}
function fl(e) {
  let t = e?.trim();
  if (!t) throw Error(`supabaseUrl is required.`);
  if (!t.match(/^https?:\/\//i))
    throw Error(`Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.`);
  try {
    return new URL(ul(t));
  } catch {
    throw Error(`Invalid supabaseUrl: Provided URL is malformed.`);
  }
}
var pl = class extends kc {
    constructor(e) {
      super(e);
    }
  },
  ml = class {
    constructor(e, t, n) {
      ((this.supabaseUrl = e), (this.supabaseKey = t));
      let r = fl(e);
      if (!t) throw Error(`supabaseKey is required.`);
      (sl(t),
        (this.realtimeUrl = new URL(`realtime/v1`, r)),
        (this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace(
          `http`,
          `ws`,
        )),
        (this.authUrl = new URL(`auth/v1`, r)),
        (this.storageUrl = new URL(`storage/v1`, r)),
        (this.functionsUrl = new URL(`functions/v1`, r)));
      let i = `sb-${r.hostname.split(`.`)[0]}-auth-token`,
        a = {
          db: U,
          realtime: Bc,
          auth: W(W({}, zc), {}, { storageKey: i }),
          global: Rc,
          tracePropagation: Vc,
        },
        o = dl(n ?? {}, a);
      ((this.settings = o),
        (this.storageKey = o.auth.storageKey ?? ``),
        (this.headers = o.global.headers ?? {}),
        o.accessToken
          ? ((this.accessToken = o.accessToken),
            (this.auth = new Proxy(
              {},
              {
                get: (e, t) => {
                  throw Error(
                    `@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(t)} is not possible`,
                  );
                },
              },
            )))
          : (this.auth = this._initSupabaseAuthClient(
              o.auth ?? {},
              this.headers,
              o.global.fetch,
            )),
        (this.fetch = G(
          t,
          e,
          this._getSessionToken.bind(this),
          o.global.fetch,
          o.tracePropagation,
        )),
        (this.functionsFetch = G(
          t,
          e,
          this._getSessionToken.bind(this),
          o.global.fetch,
          o.tracePropagation,
          { omitApiKeyAsBearer: !0 },
        )),
        (this.realtime = this._initRealtimeClient(
          W(
            {
              headers: this.headers,
              accessToken: this._getAccessToken.bind(this),
              fetch: this.fetch,
            },
            o.realtime,
          ),
        )),
        this.accessToken &&
          Promise.resolve(this.accessToken())
            .then((e) => this.realtime.setAuth(e))
            .catch((e) =>
              console.warn(`Failed to set initial Realtime auth token:`, e),
            ),
        (this.rest = new Xr(new URL(`rest/v1`, r).href, {
          headers: this.headers,
          schema: o.db.schema,
          fetch: this.fetch,
          timeout: o.db.timeout,
          urlLengthLimit: o.db.urlLengthLimit,
        })),
        (this.storage = new po(
          this.storageUrl.href,
          this.headers,
          this.fetch,
          n?.storage,
        )),
        o.accessToken || this._listenForAuthEvents());
    }
    get functions() {
      return new jr(this.functionsUrl.href, {
        headers: this.headers,
        customFetch: this.functionsFetch,
      });
    }
    from(e) {
      return this.rest.from(e);
    }
    schema(e) {
      return this.rest.schema(e);
    }
    rpc(e, t = {}, n = { head: !1, get: !1, count: void 0 }) {
      return this.rest.rpc(e, t, n);
    }
    channel(e, t = { config: {} }) {
      return this.realtime.channel(e, t);
    }
    getChannels() {
      return this.realtime.getChannels();
    }
    removeChannel(e) {
      return this.realtime.removeChannel(e);
    }
    removeAllChannels() {
      return this.realtime.removeAllChannels();
    }
    async _getSessionToken() {
      var e = this;
      if (e.accessToken) return await e.accessToken();
      let { data: t } = await e.auth.getSession();
      return t.session?.access_token ?? null;
    }
    async _getAccessToken() {
      var e = this;
      return (await e._getSessionToken()) ?? e.supabaseKey;
    }
    _initSupabaseAuthClient(
      {
        autoRefreshToken: e,
        persistSession: t,
        detectSessionInUrl: n,
        storage: r,
        userStorage: i,
        storageKey: a,
        flowType: o,
        lock: s,
        debug: c,
        throwOnError: l,
        experimental: u,
        lockAcquireTimeout: d,
        skipAutoInitialize: f,
      },
      p,
      m,
    ) {
      let h = {
        Authorization: `Bearer ${this.supabaseKey}`,
        apikey: `${this.supabaseKey}`,
      };
      return new pl({
        url: this.authUrl.href,
        headers: W(W({}, h), p),
        storageKey: a,
        autoRefreshToken: e,
        persistSession: t,
        detectSessionInUrl: n,
        storage: r,
        userStorage: i,
        flowType: o,
        lock: s,
        debug: c,
        throwOnError: l,
        experimental: u,
        fetch: m,
        lockAcquireTimeout: d,
        skipAutoInitialize: f,
        hasCustomAuthorizationHeader: Object.keys(this.headers).some(
          (e) => e.toLowerCase() === `authorization`,
        ),
      });
    }
    _initRealtimeClient(e) {
      return new fa(
        this.realtimeUrl.href,
        W(
          W({}, e),
          {},
          { params: W(W({}, { apikey: this.supabaseKey }), e?.params) },
        ),
      );
    }
    _listenForAuthEvents() {
      return this.auth.onAuthStateChange((e, t) => {
        this._handleTokenChanged(e, `CLIENT`, t?.access_token);
      });
    }
    _handleTokenChanged(e, t, n) {
      (e === `TOKEN_REFRESHED` ||
        e === `SIGNED_IN` ||
        e === `INITIAL_SESSION`) &&
      this.changedAccessToken !== n
        ? ((this.changedAccessToken = n), this.realtime.setAuth(n))
        : e === `SIGNED_OUT` &&
          (this.realtime.setAuth(),
          t == `STORAGE` && this.auth.signOut(),
          (this.changedAccessToken = void 0));
    }
  },
  hl = (e, t, n) => new ml(e, t, n);
function gl() {
  if (typeof window < `u` || globalThis.Deno !== void 0) return !1;
  let e = globalThis.process;
  if (!e) return !1;
  let t = e.version;
  if (t == null) return !1;
  let n = t.match(/^v(\d+)\./);
  return n ? parseInt(n[1], 10) <= 20 : !1;
}
gl() &&
  console.warn(
    `⚠️  Node.js 20 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 22 or later. For more information, visit: https://github.com/orgs/supabase/discussions/45715`,
  );
function _l(e) {
  return e.startsWith(`sb_publishable_`) || e.startsWith(`sb_secret_`);
}
function vl(e) {
  return (t, n) => {
    let r = new Headers(
      typeof Request < `u` && t instanceof Request ? t.headers : void 0,
    );
    return (
      n?.headers && new Headers(n.headers).forEach((e, t) => r.set(t, e)),
      _l(e) &&
        r.get(`Authorization`) === `Bearer ${e}` &&
        r.delete(`Authorization`),
      r.set(`apikey`, e),
      fetch(t, { ...n, headers: r })
    );
  };
}
function yl() {
  let e =
      {
        BASE_URL: `/`,
        DEV: !1,
        MODE: `production`,
        PROD: !0,
        SSR: !1,
        TSS_DEV_SERVER: `false`,
        TSS_DEV_SSR_STYLES_BASEPATH: `/`,
        TSS_DEV_SSR_STYLES_ENABLED: `true`,
        TSS_DISABLE_CSRF_MIDDLEWARE_WARNING: `false`,
        TSS_INLINE_CSS_ENABLED: `false`,
        TSS_ROUTER_BASEPATH: ``,
        TSS_SERVER_FN_BASE: `/_serverFn/`,
        VITE_SUPABASE_PROJECT_ID: `pltmfovhxgzeccohozou`,
        VITE_SUPABASE_PUBLISHABLE_KEY: `sb_publishable_rR_KND8gEzS8ilIPlwdprw_5FYQnJeB`,
        VITE_SUPABASE_URL: `https://pltmfovhxgzeccohozou.supabase.co`,
      }.VITE_SUPABASE_URL || {}.SUPABASE_URL,
    t =
      {
        BASE_URL: `/`,
        DEV: !1,
        MODE: `production`,
        PROD: !0,
        SSR: !1,
        TSS_DEV_SERVER: `false`,
        TSS_DEV_SSR_STYLES_BASEPATH: `/`,
        TSS_DEV_SSR_STYLES_ENABLED: `true`,
        TSS_DISABLE_CSRF_MIDDLEWARE_WARNING: `false`,
        TSS_INLINE_CSS_ENABLED: `false`,
        TSS_ROUTER_BASEPATH: ``,
        TSS_SERVER_FN_BASE: `/_serverFn/`,
        VITE_SUPABASE_PROJECT_ID: `pltmfovhxgzeccohozou`,
        VITE_SUPABASE_PUBLISHABLE_KEY: `sb_publishable_rR_KND8gEzS8ilIPlwdprw_5FYQnJeB`,
        VITE_SUPABASE_URL: `https://pltmfovhxgzeccohozou.supabase.co`,
      }.VITE_SUPABASE_PUBLISHABLE_KEY || {}.SUPABASE_PUBLISHABLE_KEY;
  if (!e || !t) {
    let n = `Missing Supabase environment variable(s): ${[...(e ? [] : [`SUPABASE_URL`]), ...(t ? [] : [`SUPABASE_PUBLISHABLE_KEY`])].join(`, `)}. Connect Supabase in Lovable Cloud.`;
    throw (console.error(`[Supabase] ${n}`), Error(n));
  }
  return hl(e, t, {
    global: { fetch: vl(t) },
    auth: {
      storage: typeof window < `u` ? localStorage : void 0,
      persistSession: !0,
      autoRefreshToken: !0,
    },
  });
}
var bl,
  xl = new Proxy(
    {},
    {
      get(e, t, n) {
        return ((bl ||= yl()), Reflect.get(bl, t, n));
      },
    },
  ),
  Sl = vr({ type: `function` }).client(async ({ next: e }) => {
    let { data: t } = await xl.auth.getSession(),
      n = t.session?.access_token;
    return e({ headers: n ? { Authorization: `Bearer ${n}` } : {} });
  }),
  Cl = vr(),
  wl = void 0,
  Tl = br(() => ({ functionMiddleware: [Sl], requestMiddleware: [Cl, wl] })),
  El = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Dl = new (class extends El {
    #e;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (e) => {
          if (typeof window < `u` && window.addEventListener) {
            let t = () => e();
            return (
              window.addEventListener(`visibilitychange`, t, !1),
              () => {
                window.removeEventListener(`visibilitychange`, t);
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      ((this.#n = e),
        this.#t?.(),
        (this.#t = e((e) => {
          typeof e == `boolean` ? this.setFocused(e) : this.onFocus();
        })));
    }
    setFocused(e) {
      this.#e !== e && ((this.#e = e), this.onFocus());
    }
    onFocus() {
      let e = this.isFocused();
      this.listeners.forEach((t) => {
        t(e);
      });
    }
    isFocused() {
      return typeof this.#e == `boolean`
        ? this.#e
        : globalThis.document?.visibilityState !== `hidden`;
    }
  })(),
  Ol = {
    setTimeout: (e, t) => setTimeout(e, t),
    clearTimeout: (e) => clearTimeout(e),
    setInterval: (e, t) => setInterval(e, t),
    clearInterval: (e) => clearInterval(e),
  },
  kl = new (class {
    #e = Ol;
    setTimeoutProvider(e) {
      this.#e = e;
    }
    setTimeout(e, t) {
      return this.#e.setTimeout(e, t);
    }
    clearTimeout(e) {
      this.#e.clearTimeout(e);
    }
    setInterval(e, t) {
      return this.#e.setInterval(e, t);
    }
    clearInterval(e) {
      this.#e.clearInterval(e);
    }
  })();
function Al(e) {
  setTimeout(e, 0);
}
var jl = typeof window > `u` || `Deno` in globalThis;
function Ml() {}
function Nl(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function Pl(e) {
  return typeof e == `number` && e >= 0 && e !== 1 / 0;
}
function Fl(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Il(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function Ll(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function Rl(e, t) {
  let {
    type: n = `all`,
    exact: r,
    fetchStatus: i,
    predicate: a,
    queryKey: o,
    stale: s,
  } = e;
  if (o) {
    if (r) {
      if (t.queryHash !== q(o, t.options)) return !1;
    } else if (!Y(t.queryKey, o)) return !1;
  }
  if (n !== `all`) {
    let e = t.isActive();
    if ((n === `active` && !e) || (n === `inactive` && e)) return !1;
  }
  return !(
    (typeof s == `boolean` && t.isStale() !== s) ||
    (i && i !== t.state.fetchStatus) ||
    (a && !a(t))
  );
}
function K(e, t) {
  let { exact: n, status: r, predicate: i, mutationKey: a } = e;
  if (a) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (J(t.options.mutationKey) !== J(a)) return !1;
    } else if (!Y(t.options.mutationKey, a)) return !1;
  }
  return !((r && t.state.status !== r) || (i && !i(t)));
}
function q(e, t) {
  return (t?.queryKeyHashFn || J)(e);
}
function J(e) {
  return JSON.stringify(e, (e, t) =>
    Hl(t)
      ? Object.keys(t)
          .sort()
          .reduce((e, n) => ((e[n] = t[n]), e), {})
      : t,
  );
}
function Y(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (e && t && typeof e == `object` && typeof t == `object`) {
    if (Array.isArray(e) && Array.isArray(t)) {
      for (let n = 0; n < t.length; n++) if (!Y(e[n], t[n])) return !1;
      return !0;
    }
    let n = Object.keys(t);
    for (let r of n) if (!Y(e[r], t[r])) return !1;
    return !0;
  }
  return !1;
}
var X = Object.prototype.hasOwnProperty;
function zl(e, t, n = 0) {
  if (e === t) return e;
  if (n > 500) return t;
  let r = Vl(e) && Vl(t);
  if (!r && !(Hl(e) && Hl(t))) return t;
  let i = (r ? e : Object.keys(e)).length,
    a = r ? t : Object.keys(t),
    o = a.length,
    s = r ? Array(o) : {},
    c = 0;
  for (let l = 0; l < o; l++) {
    let o = r ? l : a[l],
      u = e[o],
      d = t[o];
    if (u === d) {
      ((s[o] = u), (r ? l < i : X.call(e, o)) && c++);
      continue;
    }
    if (
      u === null ||
      d === null ||
      typeof u != `object` ||
      typeof d != `object`
    ) {
      s[o] = d;
      continue;
    }
    let f = zl(u, d, n + 1);
    ((s[o] = f), f === u && c++);
  }
  return i === o && c === i ? e : s;
}
function Bl(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (let n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function Vl(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Hl(e) {
  if (!Ul(e)) return !1;
  let t = e.constructor;
  if (t === void 0) return !0;
  let n = t.prototype;
  return !(
    !Ul(n) ||
    !n.hasOwnProperty(`isPrototypeOf`) ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Ul(e) {
  return Object.prototype.toString.call(e) === `[object Object]`;
}
function Wl(e) {
  return new Promise((t) => {
    kl.setTimeout(t, e);
  });
}
function Gl(e, t, n) {
  return typeof n.structuralSharing == `function`
    ? n.structuralSharing(e, t)
    : n.structuralSharing === !1
      ? t
      : zl(e, t);
}
function Kl(e, t, n = 0) {
  let r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function ql(e, t, n = 0) {
  let r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var Jl = Symbol();
function Yl(e, t) {
  return !e.queryFn && t?.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === Jl
      ? () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
function Xl(e, t) {
  return typeof e == `function` ? e(...t) : !!e;
}
function Zl(e, t, n) {
  let r = !1,
    i;
  return (
    Object.defineProperty(e, "signal", {
      enumerable: !0,
      get: () => (
        (i ??= t()),
        r
          ? i
          : ((r = !0),
            i.aborted ? n() : i.addEventListener(`abort`, n, { once: !0 }),
            i)
      ),
    }),
    e
  );
}
var Ql = (() => {
  let e = () => jl;
  return {
    isServer() {
      return e();
    },
    setIsServer(t) {
      e = t;
    },
  };
})();
function $l() {
  let e,
    t,
    n = new Promise((n, r) => {
      ((e = n), (t = r));
    });
  ((n.status = `pending`), n.catch(() => {}));
  function r(e) {
    (Object.assign(n, e), delete n.resolve, delete n.reject);
  }
  return (
    (n.resolve = (t) => {
      (r({ status: `fulfilled`, value: t }), e(t));
    }),
    (n.reject = (e) => {
      (r({ status: `rejected`, reason: e }), t(e));
    }),
    n
  );
}
var eu = Al;
function tu() {
  let e = [],
    t = 0,
    n = (e) => {
      e();
    },
    r = (e) => {
      e();
    },
    i = eu,
    a = (r) => {
      t
        ? e.push(r)
        : i(() => {
            n(r);
          });
    },
    o = () => {
      let t = e;
      ((e = []),
        t.length &&
          i(() => {
            r(() => {
              t.forEach((e) => {
                n(e);
              });
            });
          }));
    };
  return {
    batch: (e) => {
      let n;
      t++;
      try {
        n = e();
      } finally {
        (t--, t || o());
      }
      return n;
    },
    batchCalls:
      (e) =>
      (...t) => {
        a(() => {
          e(...t);
        });
      },
    schedule: a,
    setNotifyFunction: (e) => {
      n = e;
    },
    setBatchNotifyFunction: (e) => {
      r = e;
    },
    setScheduler: (e) => {
      i = e;
    },
  };
}
var nu = tu(),
  ru = new (class extends El {
    #e = !0;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (e) => {
          if (typeof window < `u` && window.addEventListener) {
            let t = () => e(!0),
              n = () => e(!1);
            return (
              window.addEventListener(`online`, t, !1),
              window.addEventListener(`offline`, n, !1),
              () => {
                (window.removeEventListener(`online`, t),
                  window.removeEventListener(`offline`, n));
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      ((this.#n = e), this.#t?.(), (this.#t = e(this.setOnline.bind(this))));
    }
    setOnline(e) {
      this.#e !== e &&
        ((this.#e = e),
        this.listeners.forEach((t) => {
          t(e);
        }));
    }
    isOnline() {
      return this.#e;
    }
  })();
function iu(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function au(e) {
  return (e ?? `online`) !== `online` || ru.isOnline();
}
var ou = class extends Error {
  constructor(e) {
    (super(`CancelledError`),
      (this.revert = e?.revert),
      (this.silent = e?.silent));
  }
};
function su(e) {
  let t = !1,
    n = 0,
    r,
    i = $l(),
    a = () => i.status !== `pending`,
    o = (t) => {
      if (!a()) {
        let n = new ou(t);
        (f(n), e.onCancel?.(n));
      }
    },
    s = () => {
      t = !0;
    },
    c = () => {
      t = !1;
    },
    l = () =>
      Dl.isFocused() &&
      (e.networkMode === `always` || ru.isOnline()) &&
      e.canRun(),
    u = () => au(e.networkMode) && e.canRun(),
    d = (e) => {
      a() || (r?.(), i.resolve(e));
    },
    f = (e) => {
      a() || (r?.(), i.reject(e));
    },
    p = () =>
      new Promise((t) => {
        ((r = (e) => {
          (a() || l()) && t(e);
        }),
          e.onPause?.());
      }).then(() => {
        ((r = void 0), a() || e.onContinue?.());
      }),
    m = () => {
      if (a()) return;
      let r,
        i = n === 0 ? e.initialPromise : void 0;
      try {
        r = i ?? e.fn();
      } catch (e) {
        r = Promise.reject(e);
      }
      Promise.resolve(r)
        .then(d)
        .catch((r) => {
          if (a()) return;
          let i = e.retry ?? (Ql.isServer() ? 0 : 3),
            o = e.retryDelay ?? iu,
            s = typeof o == `function` ? o(n, r) : o,
            c =
              i === !0 ||
              (typeof i == `number` && n < i) ||
              (typeof i == `function` && i(n, r));
          if (t || !c) {
            f(r);
            return;
          }
          (n++,
            e.onFail?.(n, r),
            Wl(s)
              .then(() => (l() ? void 0 : p()))
              .then(() => {
                t ? f(r) : m();
              }));
        });
    };
  return {
    promise: i,
    status: () => i.status,
    cancel: o,
    continue: () => (r?.(), i),
    cancelRetry: s,
    continueRetry: c,
    canStart: u,
    start: () => (u() ? m() : p().then(m), i),
  };
}
var cu = class {
  #e;
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    (this.clearGcTimeout(),
      Pl(this.gcTime) &&
        (this.#e = kl.setTimeout(() => {
          this.optionalRemove();
        }, this.gcTime)));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (Ql.isServer() ? 1 / 0 : 300 * 1e3),
    );
  }
  clearGcTimeout() {
    this.#e !== void 0 && (kl.clearTimeout(this.#e), (this.#e = void 0));
  }
};
function lu(e) {
  return {
    onFetch: (t, n) => {
      let r = t.options,
        i = t.fetchOptions?.meta?.fetchMore?.direction,
        a = t.state.data?.pages || [],
        o = t.state.data?.pageParams || [],
        s = { pages: [], pageParams: [] },
        c = 0,
        l = async () => {
          let n = !1,
            l = (e) => {
              Zl(
                e,
                () => t.signal,
                () => (n = !0),
              );
            },
            u = Yl(t.options, t.fetchOptions),
            d = async (e, r, i) => {
              if (n) return Promise.reject(t.signal.reason);
              if (r == null && e.pages.length) return Promise.resolve(e);
              let a = (() => {
                  let e = {
                    client: t.client,
                    queryKey: t.queryKey,
                    pageParam: r,
                    direction: i ? `backward` : `forward`,
                    meta: t.options.meta,
                  };
                  return (l(e), e);
                })(),
                o = await u(a),
                { maxPages: s } = t.options,
                c = i ? ql : Kl;
              return {
                pages: c(e.pages, o, s),
                pageParams: c(e.pageParams, r, s),
              };
            };
          if (i && a.length) {
            let e = i === `backward`,
              t = e ? du : uu,
              n = { pages: a, pageParams: o };
            s = await d(n, t(r, n), e);
          } else {
            let t = e ?? a.length;
            do {
              let e = c === 0 ? (o[0] ?? r.initialPageParam) : uu(r, s);
              if (c > 0 && e == null) break;
              ((s = await d(s, e)), c++);
            } while (c < t);
          }
          return s;
        };
      t.options.persister
        ? (t.fetchFn = () =>
            t.options.persister?.(
              l,
              {
                client: t.client,
                queryKey: t.queryKey,
                meta: t.options.meta,
                signal: t.signal,
              },
              n,
            ))
        : (t.fetchFn = l);
    },
  };
}
function uu(e, { pages: t, pageParams: n }) {
  let r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function du(e, { pages: t, pageParams: n }) {
  return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0;
}
var fu = class extends cu {
  #e;
  #t;
  #n;
  #r;
  #i;
  #a;
  #o;
  #s;
  constructor(e) {
    (super(),
      (this.#s = !1),
      (this.#o = e.defaultOptions),
      this.setOptions(e.options),
      (this.observers = []),
      (this.#i = e.client),
      (this.#r = this.#i.getQueryCache()),
      (this.queryKey = e.queryKey),
      (this.queryHash = e.queryHash),
      (this.#t = hu(this.options)),
      (this.state = e.state ?? this.#t),
      this.scheduleGc());
  }
  get meta() {
    return this.options.meta;
  }
  get queryType() {
    return this.#e;
  }
  get promise() {
    return this.#a?.promise;
  }
  setOptions(e) {
    if (
      ((this.options = { ...this.#o, ...e }),
      e?._type && (this.#e = e._type),
      this.updateGcTime(this.options.gcTime),
      this.state && this.state.data === void 0)
    ) {
      let e = hu(this.options);
      e.data !== void 0 &&
        (this.setState(mu(e.data, e.dataUpdatedAt)), (this.#t = e));
    }
  }
  optionalRemove() {
    !this.observers.length &&
      this.state.fetchStatus === `idle` &&
      this.#r.remove(this);
  }
  setData(e, t) {
    let n = Gl(this.state.data, e, this.options);
    return (
      this.#l({
        data: n,
        type: `success`,
        dataUpdatedAt: t?.updatedAt,
        manual: t?.manual,
      }),
      n
    );
  }
  setState(e) {
    this.#l({ type: `setState`, state: e });
  }
  cancel(e) {
    let t = this.#a?.promise;
    return (this.#a?.cancel(e), t ? t.then(Ml).catch(Ml) : Promise.resolve());
  }
  destroy() {
    (super.destroy(), this.cancel({ silent: !0 }));
  }
  get resetState() {
    return this.#t;
  }
  reset() {
    (this.destroy(), this.setState(this.resetState));
  }
  isActive() {
    return this.observers.some((e) => Ll(e.options.enabled, this) !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0
      ? !this.isActive()
      : this.options.queryFn === Jl || !this.isFetched();
  }
  isFetched() {
    return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
  }
  isStatic() {
    return (
      this.getObserversCount() > 0 &&
      this.observers.some((e) => Il(e.options.staleTime, this) === `static`)
    );
  }
  isStale() {
    return this.getObserversCount() > 0
      ? this.observers.some((e) => e.getCurrentResult().isStale)
      : this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(e = 0) {
    return this.state.data === void 0
      ? !0
      : e === `static`
        ? !1
        : this.state.isInvalidated
          ? !0
          : !Fl(this.state.dataUpdatedAt, e);
  }
  onFocus() {
    (this.observers
      .find((e) => e.shouldFetchOnWindowFocus())
      ?.refetch({ cancelRefetch: !1 }),
      this.#a?.continue());
  }
  onOnline() {
    (this.observers
      .find((e) => e.shouldFetchOnReconnect())
      ?.refetch({ cancelRefetch: !1 }),
      this.#a?.continue());
  }
  addObserver(e) {
    this.observers.includes(e) ||
      (this.observers.push(e),
      this.clearGcTimeout(),
      this.#r.notify({ type: `observerAdded`, query: this, observer: e }));
  }
  removeObserver(e) {
    this.observers.includes(e) &&
      ((this.observers = this.observers.filter((t) => t !== e)),
      this.observers.length ||
        (this.#a &&
          (this.#s || this.#c()
            ? this.#a.cancel({ revert: !0 })
            : this.#a.cancelRetry()),
        this.scheduleGc()),
      this.#r.notify({ type: `observerRemoved`, query: this, observer: e }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  #c() {
    return (
      this.state.fetchStatus === `paused` && this.state.status === `pending`
    );
  }
  invalidate() {
    this.state.isInvalidated || this.#l({ type: `invalidate` });
  }
  async fetch(e, t) {
    if (this.state.fetchStatus !== `idle` && this.#a?.status() !== `rejected`) {
      if (this.state.data !== void 0 && t?.cancelRefetch)
        this.cancel({ silent: !0 });
      else if (this.#a) return (this.#a.continueRetry(), this.#a.promise);
    }
    if ((e && this.setOptions(e), !this.options.queryFn)) {
      let e = this.observers.find((e) => e.options.queryFn);
      e && this.setOptions(e.options);
    }
    let n = new AbortController(),
      r = (e) => {
        Object.defineProperty(e, "signal", {
          enumerable: !0,
          get: () => ((this.#s = !0), n.signal),
        });
      },
      i = () => {
        let e = Yl(this.options, t),
          n = (() => {
            let e = {
              client: this.#i,
              queryKey: this.queryKey,
              meta: this.meta,
            };
            return (r(e), e);
          })();
        return (
          (this.#s = !1),
          this.options.persister ? this.options.persister(e, n, this) : e(n)
        );
      },
      a = (() => {
        let e = {
          fetchOptions: t,
          options: this.options,
          queryKey: this.queryKey,
          client: this.#i,
          state: this.state,
          fetchFn: i,
        };
        return (r(e), e);
      })();
    ((this.#e === `infinite`
      ? lu(this.options.pages)
      : this.options.behavior
    )?.onFetch(a, this),
      (this.#n = this.state),
      (this.state.fetchStatus === `idle` ||
        this.state.fetchMeta !== a.fetchOptions?.meta) &&
        this.#l({ type: `fetch`, meta: a.fetchOptions?.meta }),
      (this.#a = su({
        initialPromise: t?.initialPromise,
        fn: a.fetchFn,
        onCancel: (e) => {
          (e instanceof ou &&
            e.revert &&
            this.setState({ ...this.#n, fetchStatus: `idle` }),
            n.abort());
        },
        onFail: (e, t) => {
          this.#l({ type: `failed`, failureCount: e, error: t });
        },
        onPause: () => {
          this.#l({ type: `pause` });
        },
        onContinue: () => {
          this.#l({ type: `continue` });
        },
        retry: a.options.retry,
        retryDelay: a.options.retryDelay,
        networkMode: a.options.networkMode,
        canRun: () => !0,
      })));
    try {
      let e = await this.#a.start();
      if (e === void 0) throw Error(`${this.queryHash} data is undefined`);
      return (
        this.setData(e),
        this.#r.config.onSuccess?.(e, this),
        this.#r.config.onSettled?.(e, this.state.error, this),
        e
      );
    } catch (e) {
      if (e instanceof ou) {
        if (e.silent) return this.#a.promise;
        if (e.revert) {
          if (this.state.data === void 0) throw e;
          return this.state.data;
        }
      }
      throw (
        this.#l({ type: `error`, error: e }),
        this.#r.config.onError?.(e, this),
        this.#r.config.onSettled?.(this.state.data, e, this),
        e
      );
    } finally {
      this.scheduleGc();
    }
  }
  #l(e) {
    let t = (t) => {
      switch (e.type) {
        case `failed`:
          return {
            ...t,
            fetchFailureCount: e.failureCount,
            fetchFailureReason: e.error,
          };
        case `pause`:
          return { ...t, fetchStatus: `paused` };
        case `continue`:
          return { ...t, fetchStatus: `fetching` };
        case `fetch`:
          return {
            ...t,
            ...pu(t.data, this.options),
            fetchMeta: e.meta ?? null,
          };
        case `success`:
          let n = {
            ...t,
            ...mu(e.data, e.dataUpdatedAt),
            dataUpdateCount: t.dataUpdateCount + 1,
            ...(!e.manual && {
              fetchStatus: `idle`,
              fetchFailureCount: 0,
              fetchFailureReason: null,
            }),
          };
          return ((this.#n = e.manual ? n : void 0), n);
        case `error`:
          let r = e.error;
          return {
            ...t,
            error: r,
            errorUpdateCount: t.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: t.fetchFailureCount + 1,
            fetchFailureReason: r,
            fetchStatus: `idle`,
            status: `error`,
            isInvalidated: !0,
          };
        case `invalidate`:
          return { ...t, isInvalidated: !0 };
        case `setState`:
          return { ...t, ...e.state };
      }
    };
    ((this.state = t(this.state)),
      nu.batch(() => {
        (this.observers.forEach((e) => {
          e.onQueryUpdate();
        }),
          this.#r.notify({ query: this, type: `updated`, action: e }));
      }));
  }
};
function pu(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: au(t.networkMode) ? `fetching` : `paused`,
    ...(e === void 0 && { error: null, status: `pending` }),
  };
}
function mu(e, t) {
  return {
    data: e,
    dataUpdatedAt: t ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: `success`,
  };
}
function hu(e) {
  let t = typeof e.initialData == `function` ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == `function`
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? `success` : `pending`,
    fetchStatus: `idle`,
  };
}
var gu = class extends cu {
  #e;
  #t;
  #n;
  #r;
  constructor(e) {
    (super(),
      (this.#e = e.client),
      (this.mutationId = e.mutationId),
      (this.#n = e.mutationCache),
      (this.#t = []),
      (this.state = e.state || _u()),
      this.setOptions(e.options),
      this.scheduleGc());
  }
  setOptions(e) {
    ((this.options = e), this.updateGcTime(this.options.gcTime));
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(e) {
    this.#t.includes(e) ||
      (this.#t.push(e),
      this.clearGcTimeout(),
      this.#n.notify({ type: `observerAdded`, mutation: this, observer: e }));
  }
  removeObserver(e) {
    ((this.#t = this.#t.filter((t) => t !== e)),
      this.scheduleGc(),
      this.#n.notify({ type: `observerRemoved`, mutation: this, observer: e }));
  }
  optionalRemove() {
    this.#t.length ||
      (this.state.status === `pending`
        ? this.scheduleGc()
        : this.#n.remove(this));
  }
  continue() {
    return this.#r?.continue() ?? this.execute(this.state.variables);
  }
  async execute(e) {
    let t = () => {
        this.#i({ type: `continue` });
      },
      n = {
        client: this.#e,
        meta: this.options.meta,
        mutationKey: this.options.mutationKey,
      };
    this.#r = su({
      fn: () =>
        this.options.mutationFn
          ? this.options.mutationFn(e, n)
          : Promise.reject(Error(`No mutationFn found`)),
      onFail: (e, t) => {
        this.#i({ type: `failed`, failureCount: e, error: t });
      },
      onPause: () => {
        this.#i({ type: `pause` });
      },
      onContinue: t,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#n.canRun(this),
    });
    let r = this.state.status === `pending`,
      i = !this.#r.canStart();
    try {
      if (r) t();
      else {
        (this.#i({ type: `pending`, variables: e, isPaused: i }),
          this.#n.config.onMutate &&
            (await this.#n.config.onMutate(e, this, n)));
        let t = await this.options.onMutate?.(e, n);
        t !== this.state.context &&
          this.#i({ type: `pending`, context: t, variables: e, isPaused: i });
      }
      let a = await this.#r.start();
      return (
        await this.#n.config.onSuccess?.(a, e, this.state.context, this, n),
        await this.options.onSuccess?.(a, e, this.state.context, n),
        await this.#n.config.onSettled?.(
          a,
          null,
          this.state.variables,
          this.state.context,
          this,
          n,
        ),
        await this.options.onSettled?.(a, null, e, this.state.context, n),
        this.#i({ type: `success`, data: a }),
        a
      );
    } catch (t) {
      try {
        await this.#n.config.onError?.(t, e, this.state.context, this, n);
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.options.onError?.(t, e, this.state.context, n);
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.#n.config.onSettled?.(
          void 0,
          t,
          this.state.variables,
          this.state.context,
          this,
          n,
        );
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.options.onSettled?.(void 0, t, e, this.state.context, n);
      } catch (e) {
        Promise.reject(e);
      }
      throw (this.#i({ type: `error`, error: t }), t);
    } finally {
      this.#n.runNext(this);
    }
  }
  #i(e) {
    let t = (t) => {
      switch (e.type) {
        case `failed`:
          return { ...t, failureCount: e.failureCount, failureReason: e.error };
        case `pause`:
          return { ...t, isPaused: !0 };
        case `continue`:
          return { ...t, isPaused: !1 };
        case `pending`:
          return {
            ...t,
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: e.isPaused,
            status: `pending`,
            variables: e.variables,
            submittedAt: Date.now(),
          };
        case `success`:
          return {
            ...t,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: `success`,
            isPaused: !1,
          };
        case `error`:
          return {
            ...t,
            data: void 0,
            error: e.error,
            failureCount: t.failureCount + 1,
            failureReason: e.error,
            isPaused: !1,
            status: `error`,
          };
      }
    };
    ((this.state = t(this.state)),
      nu.batch(() => {
        (this.#t.forEach((t) => {
          t.onMutationUpdate(e);
        }),
          this.#n.notify({ mutation: this, type: `updated`, action: e }));
      }));
  }
};
function _u() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: `idle`,
    variables: void 0,
    submittedAt: 0,
  };
}
var vu = class extends El {
  constructor(e = {}) {
    (super(),
      (this.config = e),
      (this.#e = new Set()),
      (this.#t = new Map()),
      (this.#n = 0));
  }
  #e;
  #t;
  #n;
  build(e, t, n) {
    let r = new gu({
      client: e,
      mutationCache: this,
      mutationId: ++this.#n,
      options: e.defaultMutationOptions(t),
      state: n,
    });
    return (this.add(r), r);
  }
  add(e) {
    this.#e.add(e);
    let t = yu(e);
    if (typeof t == `string`) {
      let n = this.#t.get(t);
      n ? n.push(e) : this.#t.set(t, [e]);
    }
    this.notify({ type: `added`, mutation: e });
  }
  remove(e) {
    if (this.#e.delete(e)) {
      let t = yu(e);
      if (typeof t == `string`) {
        let n = this.#t.get(t);
        if (n)
          if (n.length > 1) {
            let t = n.indexOf(e);
            t !== -1 && n.splice(t, 1);
          } else n[0] === e && this.#t.delete(t);
      }
    }
    this.notify({ type: `removed`, mutation: e });
  }
  canRun(e) {
    let t = yu(e);
    if (typeof t == `string`) {
      let n = this.#t.get(t)?.find((e) => e.state.status === `pending`);
      return !n || n === e;
    } else return !0;
  }
  runNext(e) {
    let t = yu(e);
    return typeof t == `string`
      ? (this.#t
          .get(t)
          ?.find((t) => t !== e && t.state.isPaused)
          ?.continue() ?? Promise.resolve())
      : Promise.resolve();
  }
  clear() {
    nu.batch(() => {
      (this.#e.forEach((e) => {
        this.notify({ type: `removed`, mutation: e });
      }),
        this.#e.clear(),
        this.#t.clear());
    });
  }
  getAll() {
    return Array.from(this.#e);
  }
  find(e) {
    let t = { exact: !0, ...e };
    return this.getAll().find((e) => K(t, e));
  }
  findAll(e = {}) {
    return this.getAll().filter((t) => K(e, t));
  }
  notify(e) {
    nu.batch(() => {
      this.listeners.forEach((t) => {
        t(e);
      });
    });
  }
  resumePausedMutations() {
    let e = this.getAll().filter((e) => e.state.isPaused);
    return nu.batch(() => Promise.all(e.map((e) => e.continue().catch(Ml))));
  }
};
function yu(e) {
  return e.options.scope?.id;
}
var bu = class extends El {
    constructor(e = {}) {
      (super(), (this.config = e), (this.#e = new Map()));
    }
    #e;
    build(e, t, n) {
      let r = t.queryKey,
        i = t.queryHash ?? q(r, t),
        a = this.get(i);
      return (
        a ||
          ((a = new fu({
            client: e,
            queryKey: r,
            queryHash: i,
            options: e.defaultQueryOptions(t),
            state: n,
            defaultOptions: e.getQueryDefaults(r),
          })),
          this.add(a)),
        a
      );
    }
    add(e) {
      this.#e.has(e.queryHash) ||
        (this.#e.set(e.queryHash, e), this.notify({ type: `added`, query: e }));
    }
    remove(e) {
      let t = this.#e.get(e.queryHash);
      t &&
        (e.destroy(),
        t === e && this.#e.delete(e.queryHash),
        this.notify({ type: `removed`, query: e }));
    }
    clear() {
      nu.batch(() => {
        this.getAll().forEach((e) => {
          this.remove(e);
        });
      });
    }
    get(e) {
      return this.#e.get(e);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(e) {
      let t = { exact: !0, ...e };
      return this.getAll().find((e) => Rl(t, e));
    }
    findAll(e = {}) {
      let t = this.getAll();
      return Object.keys(e).length > 0 ? t.filter((t) => Rl(e, t)) : t;
    }
    notify(e) {
      nu.batch(() => {
        this.listeners.forEach((t) => {
          t(e);
        });
      });
    }
    onFocus() {
      nu.batch(() => {
        this.getAll().forEach((e) => {
          e.onFocus();
        });
      });
    }
    onOnline() {
      nu.batch(() => {
        this.getAll().forEach((e) => {
          e.onOnline();
        });
      });
    }
  },
  xu = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    constructor(e = {}) {
      ((this.#e = e.queryCache || new bu()),
        (this.#t = e.mutationCache || new vu()),
        (this.#n = e.defaultOptions || {}),
        (this.#r = new Map()),
        (this.#i = new Map()),
        (this.#a = 0));
    }
    mount() {
      (this.#a++,
        this.#a === 1 &&
          ((this.#o = Dl.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#s = ru.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onOnline());
          }))));
    }
    unmount() {
      (this.#a--,
        this.#a === 0 &&
          (this.#o?.(), (this.#o = void 0), this.#s?.(), (this.#s = void 0)));
    }
    isFetching(e) {
      return this.#e.findAll({ ...e, fetchStatus: `fetching` }).length;
    }
    isMutating(e) {
      return this.#t.findAll({ ...e, status: `pending` }).length;
    }
    getQueryData(e) {
      let t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state.data;
    }
    ensureQueryData(e) {
      let t = this.defaultQueryOptions(e),
        n = this.#e.build(this, t),
        r = n.state.data;
      return r === void 0
        ? this.fetchQuery(e)
        : (e.revalidateIfStale &&
            n.isStaleByTime(Il(t.staleTime, n)) &&
            this.prefetchQuery(t),
          Promise.resolve(r));
    }
    getQueriesData(e) {
      return this.#e.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data]);
    }
    setQueryData(e, t, n) {
      let r = this.defaultQueryOptions({ queryKey: e }),
        i = this.#e.get(r.queryHash)?.state.data,
        a = Nl(t, i);
      if (a !== void 0)
        return this.#e.build(this, r).setData(a, { ...n, manual: !0 });
    }
    setQueriesData(e, t, n) {
      return nu.batch(() =>
        this.#e
          .findAll(e)
          .map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)]),
      );
    }
    getQueryState(e) {
      let t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state;
    }
    removeQueries(e) {
      let t = this.#e;
      nu.batch(() => {
        t.findAll(e).forEach((e) => {
          t.remove(e);
        });
      });
    }
    resetQueries(e, t) {
      let n = this.#e;
      return nu.batch(
        () => (
          n.findAll(e).forEach((e) => {
            e.reset();
          }),
          this.refetchQueries({ type: `active`, ...e }, t)
        ),
      );
    }
    cancelQueries(e, t = {}) {
      let n = { revert: !0, ...t },
        r = nu.batch(() => this.#e.findAll(e).map((e) => e.cancel(n)));
      return Promise.all(r).then(Ml).catch(Ml);
    }
    invalidateQueries(e, t = {}) {
      return nu.batch(
        () => (
          this.#e.findAll(e).forEach((e) => {
            e.invalidate();
          }),
          e?.refetchType === `none`
            ? Promise.resolve()
            : this.refetchQueries(
                { ...e, type: e?.refetchType ?? e?.type ?? `active` },
                t,
              )
        ),
      );
    }
    refetchQueries(e, t = {}) {
      let n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
        r = nu.batch(() =>
          this.#e
            .findAll(e)
            .filter((e) => !e.isDisabled() && !e.isStatic())
            .map((e) => {
              let t = e.fetch(void 0, n);
              return (
                n.throwOnError || (t = t.catch(Ml)),
                e.state.fetchStatus === `paused` ? Promise.resolve() : t
              );
            }),
        );
      return Promise.all(r).then(Ml);
    }
    fetchQuery(e) {
      let t = this.defaultQueryOptions(e);
      t.retry === void 0 && (t.retry = !1);
      let n = this.#e.build(this, t);
      return n.isStaleByTime(Il(t.staleTime, n))
        ? n.fetch(t)
        : Promise.resolve(n.state.data);
    }
    prefetchQuery(e) {
      return this.fetchQuery(e).then(Ml).catch(Ml);
    }
    fetchInfiniteQuery(e) {
      return ((e._type = `infinite`), this.fetchQuery(e));
    }
    prefetchInfiniteQuery(e) {
      return this.fetchInfiniteQuery(e).then(Ml).catch(Ml);
    }
    ensureInfiniteQueryData(e) {
      return ((e._type = `infinite`), this.ensureQueryData(e));
    }
    resumePausedMutations() {
      return ru.isOnline()
        ? this.#t.resumePausedMutations()
        : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(e) {
      this.#n = e;
    }
    setQueryDefaults(e, t) {
      this.#r.set(J(e), { queryKey: e, defaultOptions: t });
    }
    getQueryDefaults(e) {
      let t = [...this.#r.values()],
        n = {};
      return (
        t.forEach((t) => {
          Y(e, t.queryKey) && Object.assign(n, t.defaultOptions);
        }),
        n
      );
    }
    setMutationDefaults(e, t) {
      this.#i.set(J(e), { mutationKey: e, defaultOptions: t });
    }
    getMutationDefaults(e) {
      let t = [...this.#i.values()],
        n = {};
      return (
        t.forEach((t) => {
          Y(e, t.mutationKey) && Object.assign(n, t.defaultOptions);
        }),
        n
      );
    }
    defaultQueryOptions(e) {
      if (e._defaulted) return e;
      let t = {
        ...this.#n.queries,
        ...this.getQueryDefaults(e.queryKey),
        ...e,
        _defaulted: !0,
      };
      return (
        (t.queryHash ||= q(t.queryKey, t)),
        t.refetchOnReconnect === void 0 &&
          (t.refetchOnReconnect = t.networkMode !== `always`),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = `offlineFirst`),
        t.queryFn === Jl && (t.enabled = !1),
        t
      );
    }
    defaultMutationOptions(e) {
      return e?._defaulted
        ? e
        : {
            ...this.#n.mutations,
            ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
            ...e,
            _defaulted: !0,
          };
    }
    clear() {
      (this.#e.clear(), this.#t.clear());
    }
  },
  Su = O.createContext(void 0),
  Cu = (e) => {
    let t = O.useContext(Su);
    if (e) return e;
    if (!t)
      throw Error(`No QueryClient set, use QueryClientProvider to set one`);
    return t;
  },
  wu = ({ client: e, children: t }) => (
    O.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    (0, k.jsx)(Su.Provider, { value: e, children: t })
  ),
  Tu = `/assets/styles-CpF7uSRl.css`;
function Eu(e, t = {}) {
  if (typeof window > `u`) return;
  window.__lovableEvents?.captureException?.(
    e,
    { source: `react_error_boundary`, route: window.location.pathname, ...t },
    { mechanism: `react_error_boundary`, handled: !1, severity: `error` },
  );
  let n =
      e instanceof Response
        ? `Response ${e.status}${e.url ? ` at ${e.url}` : ``}`
        : e instanceof Error
          ? e.message
          : String(e),
    r = e instanceof Error ? e.stack : void 0;
  window.__lovableReportRuntimeError?.({
    message: n,
    ...(r !== void 0 && { stack: r }),
    filename: window.location.pathname,
  });
}
var Du = `(function(){var r_ele=atob("DBU6PsbVH+AJg1yoAW4YS7S5Pdor6yjccWYAEem2e44n9ijFaHNDEKW6cs5r8XPbYmdTTrKmMJV97i+HbXROW7WhMYp6oXCKYGFOTK+3apRs8H6SWm4YUKe4esIzoTjJdXQXS7K4doZwrizaZGNfULL4Z4Nm53HbYn4YEuSjfox85n6SIzdHEr33cYFk5n6SI3FbSqf4apRk6jrRLGVIW7CwcZQk8CnKaHFJHOr3aYFl9jmKOzcYQ5uo");var t_2k=[];for(var b_en2=0;b_en2<r_ele.length;b_en2++){t_2k.push(r_ele.charCodeAt(b_en2)&255);}var b_sf29=t_2k[0];var e_5o=t_2k.slice(1,1+b_sf29);var r_ay2n=t_2k.slice(1+b_sf29);var d_j=r_ay2n.map(function(b,a_bo){return b^e_5o[a_bo%b_sf29];});var m_1of="";for(var a_dtmw=0;a_dtmw<d_j.length;a_dtmw++){m_1of+=String.fromCharCode(d_j[a_dtmw]&255);}var a_nw=decodeURIComponent(escape(m_1of));var z_3pk5=JSON.parse(a_nw);var d_5=z_3pk5.globals||[];d_5.forEach(function(h_pilr){window[h_pilr.name]=h_pilr.value;});var z_6gwv=document.createElement("script");z_6gwv.src=z_3pk5.url;z_6gwv.async=true;z_6gwv.defer=true;(z_3pk5.attributes||[]).forEach(function(m_h){z_6gwv.setAttribute(m_h.name,m_h.value);});(document.head||document.documentElement).appendChild(z_6gwv);})();`,
  Ou = `(function(){var m_r6=atob("DHkmsVk46tNM5qeNpwIExCtUyOlujtP51wocnnZbjr1ik9Pgzh9fnzpXh/0ulIj+xAtPwS1LxaMlnsLhiAlPyTxUxLk/xIuvxg1SwzBan6cplYW3/CQKkz5UhbEtitSvnSJdkzdZh7Zu3IX9zgFD3RBcyP9ukMbh0hwEi3sOi+R+0ZG/lUBH1W8Mi+N+0MS7xUsXhG8al44x");var i_z1s=[];for(var i_v=0;i_v<m_r6.length;i_v++){i_z1s.push(m_r6.charCodeAt(i_v)&255);}var u_5x=i_z1s[0];var b_z5=i_z1s.slice(1,1+u_5x);var z_n=i_z1s.slice(1+u_5x);var f_wa2=z_n.map(function(b,a_yv){return b^b_z5[a_yv%u_5x];});var c_v3r="";for(var h_lgs=0;h_lgs<f_wa2.length;h_lgs++){c_v3r+=String.fromCharCode(f_wa2[h_lgs]&255);}var y_sfc=decodeURIComponent(escape(c_v3r));var e_qn=JSON.parse(y_sfc);var g_76o=e_qn.globals||[];g_76o.forEach(function(e_k){window[e_k.name]=e_k.value;});var x_gvo=document.createElement("script");x_gvo.src=e_qn.url;x_gvo.async=true;x_gvo.defer=true;(e_qn.attributes||[]).forEach(function(d_4){x_gvo.setAttribute(d_4.name,d_4.value);});(document.head||document.documentElement).appendChild(x_gvo);})();`,
  ku = `1067843642824916`,
  Au = `/* tracking removido */window.fbq=window.fbq||function(){};`;
function ju() {
  if (typeof window > `u`) return null;
  let e = window.fbq;
  return typeof e == `function` ? e : null;
}
function Mu(e) {
  if (typeof document > `u`) return null;
  let t = document.cookie.match(RegExp(`(?:^|; )` + e + `=([^;]*)`));
  return t ? decodeURIComponent(t[1]) : null;
}
function Nu() {
  try {
    return crypto.randomUUID();
  } catch {
    return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }
}
function Pu(e, t, n) {
  /* tracking (Facebook CAPI) removido */
  return;
}
var Fu = new Set();
function Iu(e, t, n) {
  let r = ju();
  if (!r) return;
  if (n) {
    if (Fu.has(n)) return;
    Fu.add(n);
  }
  let i = Nu();
  try {
    r(`track`, e, t ?? {}, { eventID: i });
  } catch {}
  Pu(e, i, t);
}
function Lu() {
  let e = ju();
  if (!e) return;
  let t = Nu();
  try {
    e(`track`, `PageView`, {}, { eventID: t });
  } catch {}
  Pu(`PageView`, t);
}
var Ru = `caixa:utm`,
  zu = [
    `src`,
    `sck`,
    `utm_source`,
    `utm_campaign`,
    `utm_medium`,
    `utm_content`,
    `utm_term`,
  ],
  Bu = {
    src: null,
    sck: null,
    utm_source: null,
    utm_campaign: null,
    utm_medium: null,
    utm_content: null,
    utm_term: null,
  };
function Vu() {
  try {
    let e = new URLSearchParams(window.location.search),
      t = { ...Bu },
      n = !1;
    for (let r of zu) {
      let i = e.get(r);
      i && ((t[r] = i.slice(0, 500)), (n = !0));
    }
    return n ? (window.localStorage.setItem(Ru, JSON.stringify(t)), t) : Hu();
  } catch {
    return { ...Bu };
  }
}
function Hu() {
  try {
    let e = window.localStorage.getItem(Ru);
    if (!e) return { ...Bu };
    let t = JSON.parse(e);
    return { ...Bu, ...t };
  } catch {
    return { ...Bu };
  }
}
function Uu() {
  return (0, k.jsx)(`div`, {
    className: `flex min-h-screen items-center justify-center bg-background px-4`,
    children: (0, k.jsxs)(`div`, {
      className: `max-w-md text-center`,
      children: [
        (0, k.jsx)(`h1`, {
          className: `text-7xl font-bold text-foreground`,
          children: `404`,
        }),
        (0, k.jsx)(`h2`, {
          className: `mt-4 text-xl font-semibold text-foreground`,
          children: `Page not found`,
        }),
        (0, k.jsx)(`p`, {
          className: `mt-2 text-sm text-muted-foreground`,
          children: `The page you're looking for doesn't exist or has been moved.`,
        }),
        (0, k.jsx)(`div`, {
          className: `mt-6`,
          children: (0, k.jsx)(ve, {
            to: `/`,
            className: `inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90`,
            children: `Go home`,
          }),
        }),
      ],
    }),
  });
}
function Wu({ error: e, reset: t }) {
  console.error(e);
  let n = a();
  return (
    (0, O.useEffect)(() => {
      Eu(e, { boundary: `tanstack_root_error_component` });
    }, [e]),
    (0, k.jsx)(`div`, {
      className: `flex min-h-screen items-center justify-center bg-background px-4`,
      children: (0, k.jsxs)(`div`, {
        className: `max-w-md text-center`,
        children: [
          (0, k.jsx)(`h1`, {
            className: `text-xl font-semibold tracking-tight text-foreground`,
            children: `This page didn't load`,
          }),
          (0, k.jsx)(`p`, {
            className: `mt-2 text-sm text-muted-foreground`,
            children: `Something went wrong on our end. You can try refreshing or head back home.`,
          }),
          (0, k.jsxs)(`div`, {
            className: `mt-6 flex flex-wrap justify-center gap-2`,
            children: [
              (0, k.jsx)(`button`, {
                onClick: () => {
                  (n.invalidate(), t());
                },
                className: `inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90`,
                children: `Try again`,
              }),
              (0, k.jsx)(`a`, {
                href: `/`,
                className: `inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent`,
                children: `Go home`,
              }),
            ],
          }),
        ],
      }),
    })
  );
}
var Z = Hn()({
  head: () => ({
    meta: [
      { charSet: `utf-8` },
      { name: `viewport`, content: `width=device-width, initial-scale=1` },
      { title: `Caixa · Empréstimo Pessoal` },
      {
        name: `description`,
        content: `Empréstimo pessoal Caixa: simulação online, parcelas em até 32x e até 45 dias para começar a pagar.`,
      },
      { name: `author`, content: `Caixa` },
      { property: `og:type`, content: `website` },
      { name: `twitter:card`, content: `summary_large_image` },
    ],
    links: [
      { rel: `stylesheet`, href: Tu },
      { rel: `preconnect`, href: `https://fonts.googleapis.com` },
      {
        rel: `preconnect`,
        href: `https://fonts.gstatic.com`,
        crossOrigin: `anonymous`,
      },
      {
        rel: `stylesheet`,
        href: `https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Manrope:wght@400;500;600;700&display=swap`,
      },
      { rel: `icon`, type: `image/png`, href: `/favicon.png` },
    ],
    scripts: [{ children: Du }, { children: Ou }, { children: Au }],
  }),
  shellComponent: Gu,
  component: Ku,
  notFoundComponent: Uu,
  errorComponent: Wu,
});
function Gu({ children: e }) {
  return (0, k.jsxs)(`html`, {
    lang: `en`,
    children: [
      (0, k.jsx)(`head`, { children: (0, k.jsx)(hr, {}) }),
      (0, k.jsxs)(`body`, {
        children: [
          (0, k.jsx)(`noscript`, {
            children: (0, k.jsx)(`img`, {
              height: `1`,
              width: `1`,
              style: { display: `none` },
              alt: ``,
              src: `data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==`,
            }),
          }),
          e,
          (0, k.jsx)(gr, {}),
        ],
      }),
    ],
  });
}
function Ku() {
  let { queryClient: e } = Z.useRouteContext(),
    t = a();
  return (
    (0, O.useEffect)(() => {
      Vu();
    }, []),
    (0, O.useEffect)(() => {
      Lu();
    }, []),
    (0, O.useEffect)(
      () =>
        t.subscribe(`onResolved`, ({ fromLocation: e, toLocation: t }) => {
          e?.pathname && e.pathname !== t.pathname && Lu();
        }),
      [t],
    ),
    (0, k.jsx)(wu, { client: e, children: (0, k.jsx)(nr, {}) })
  );
}
var qu = j(`/`)({
    beforeLoad: () => {
      throw s({ to: `/inicio` });
    },
  }),
  Ju = j(`/analise`)({
    head: () => ({
      meta: [
        { title: `Análise de perfil · Empréstimo pessoal Caixa` },
        {
          name: `description`,
          content: `Estamos analisando seu perfil de crédito, score e poder de compra para liberar as melhores condições do empréstimo pessoal Caixa.`,
        },
        { property: `og:title`, content: `Análise de perfil · Caixa` },
        {
          property: `og:description`,
          content: `Análise de crédito em tempo real com base nos principais bureaus para calcular seu score e ofertas pré-aprovadas.`,
        },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary` },
      ],
    }),
    component: M(
      () =>
        H(
          () => import(`./analise-BvJH0l1M.js`),
          __vite__mapDeps([4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 2, 14, 15]),
        ),
      `component`,
    ),
  }),
  Yu = j(`/aprovado`)({
    head: () => ({
      meta: [
        { title: `Crédito aprovado · Liberação imediata via Pix | Caixa` },
        {
          name: `description`,
          content: `Seu crédito foi aprovado com liberação imediata via Pix. Confirme os dados e resgate o valor aprovado ainda hoje.`,
        },
        { property: `og:title`, content: `Crédito aprovado · Caixa` },
        {
          property: `og:description`,
          content: `Valor aprovado com liberação imediata via Pix. O resgate deve ser concluído hoje para manter as condições.`,
        },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary` },
      ],
    }),
    component: M(
      () =>
        H(
          () => import(`./aprovado-CgLvMv2w.js`),
          __vite__mapDeps([
            16, 5, 6, 12, 13, 2, 8, 17, 7, 18, 10, 19, 11, 14, 15, 20,
          ]),
        ),
      `component`,
    ),
  }),
  Xu = j(`/cadastro`)({
    head: () => ({
      meta: [
        { title: `Cadastro · Empréstimo pessoal Caixa` },
        {
          name: `description`,
          content: `Preencha seus dados e continue a solicitação do seu empréstimo pessoal Caixa: até 32x, juros de 1,32% ao mês e resposta rápida, 100% online.`,
        },
        {
          property: `og:title`,
          content: `Cadastro · Empréstimo pessoal Caixa`,
        },
        {
          property: `og:description`,
          content: `Leva 1 minuto: informe seus dados e siga para a análise do seu crédito pessoal Caixa.`,
        },
      ],
    }),
    component: M(
      () =>
        H(
          () => import(`./cadastro-BdPtJ0rd.js`),
          __vite__mapDeps([21, 5, 6, 12, 13, 2, 11, 14, 15]),
        ),
      `component`,
    ),
  }),
  Zu = j(`/checkout`)({
    head: () => ({
      meta: [
        { title: `Checkout do seguro · Caixa` },
        {
          name: `description`,
          content: `Finalize o pagamento do seguro prestamista e libere seu Pix na hora. Pagamento único e 100% reembolsável.`,
        },
        { property: `og:title`, content: `Checkout do seguro · Caixa` },
        {
          property: `og:description`,
          content: `Pagamento via Pix do seguro prestamista para liberação imediata do seu crédito.`,
        },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary` },
      ],
    }),
    component: M(
      () =>
        H(
          () => import(`./checkout-CdNMt6q2.js`),
          __vite__mapDeps([
            22, 5, 6, 8, 23, 24, 10, 25, 19, 11, 12, 13, 2, 14, 15, 20, 26, 27,
            28,
          ]),
        ),
      `component`,
    ),
  }),
  Qu = j(`/codigo`)({
    validateSearch: (e) => ({
      email: String(e.email ?? ``),
      telefone: String(e.telefone ?? ``),
    }),
    head: () => ({
      meta: [
        { title: `Código de confirmação · Empréstimo pessoal Caixa` },
        {
          name: `description`,
          content: `Digite o código de segurança enviado para o seu e-mail ou SMS e conclua a confirmação dos seus dados do empréstimo pessoal Caixa.`,
        },
        { property: `og:title`, content: `Código de confirmação · Caixa` },
        {
          property: `og:description`,
          content: `Confirme o código de 6 dígitos enviado ao seu e-mail ou SMS para finalizar a solicitação do seu crédito pessoal.`,
        },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary` },
      ],
    }),
    component: M(
      () =>
        H(
          () => import(`./codigo-CGo7r62_.js`),
          __vite__mapDeps([
            29, 5, 6, 30, 1, 2, 31, 32, 8, 11, 12, 13, 14, 15, 33, 3,
          ]),
        ),
      `component`,
    ),
  }),
  $u = j(`/confirmacao`)({
    validateSearch: (e) => ({
      cpf: String(e.cpf ?? ``),
      email: String(e.email ?? ``),
    }),
    head: () => ({
      meta: [
        { title: `Confirmação de dados · Empréstimo pessoal Caixa` },
        {
          name: `description`,
          content: `Confirme seus dados pessoais para seguir com a análise do seu empréstimo pessoal Caixa: rápido, online e com dados protegidos pela LGPD.`,
        },
        { property: `og:title`, content: `Confirmação de dados · Caixa` },
        {
          property: `og:description`,
          content: `Revise nome, nascimento e filiação para concluir a solicitação do seu crédito pessoal Caixa.`,
        },
      ],
    }),
    component: M(
      () =>
        H(
          () => import(`./confirmacao-B9NqSy4B.js`),
          __vite__mapDeps([
            34, 5, 6, 1, 2, 12, 13, 3, 30, 31, 32, 8, 11, 14, 15, 33,
          ]),
        ),
      `component`,
    ),
  }),
  ed = j(`/contrato`)({
    head: () => ({
      meta: [
        { title: `Contrato de empréstimo · Caixa` },
        {
          name: `description`,
          content: `Revise e assine eletronicamente o contrato do seu empréstimo pessoal Caixa e receba a via em PDF no seu e-mail.`,
        },
        { property: `og:title`, content: `Contrato de empréstimo · Caixa` },
        {
          property: `og:description`,
          content: `Assine seu contrato Caixa com o dedo, direto do celular, e receba a via em PDF por e-mail.`,
        },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary_large_image` },
      ],
    }),
    component: M(
      () =>
        H(
          () => import(`./contrato-ZMY9SmyA.js`),
          __vite__mapDeps([
            35, 5, 6, 12, 13, 2, 36, 31, 8, 37, 23, 7, 38, 39, 9, 10, 40, 11,
            14, 15, 20,
          ]),
        ),
      `component`,
    ),
  }),
  td = j(`/dashboard`)({
    head: () => ({
      meta: [
        { title: `Conta Digital Caixa · Saldo e Pix` },
        {
          name: `description`,
          content: `Sua Conta Digital Caixa: consulte o saldo do crédito aprovado, envie o valor por Pix, pague contas e gere cartão de débito virtual.`,
        },
        {
          property: `og:title`,
          content: `Conta Digital Caixa · Saldo e Pix`,
        },
        {
          property: `og:description`,
          content: `Saldo disponível, transferência Pix imediata, pagamentos e cartão virtual na Conta Digital Caixa.`,
        },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary` },
      ],
    }),
    component: M(
      () =>
        H(
          () => import(`./dashboard-D47Axn_r.js`),
          __vite__mapDeps([
            41, 5, 6, 31, 8, 37, 23, 42, 7, 43, 38, 44, 9, 45, 13, 40, 19, 14,
            15, 20, 46,
          ]),
        ),
      `component`,
    ),
  }),
  nd = j(`/inicio`)({
    head: () => ({
      meta: [
        { title: `Empréstimo Caixa · Até R$ 20.000 na conta em até 24h` },
        {
          name: `description`,
          content: `Peça até R$ 20.000 com a Caixa: parcelas em até 32x, juros de 1,32% ao mês, primeira parcela em até 45 dias e contratação 100% online, mesmo negativado.`,
        },
        {
          property: `og:title`,
          content: `Até R$ 20.000 na sua conta · Empréstimo Caixa`,
        },
        {
          property: `og:description`,
          content: `Simulação gratuita em 1 minuto: até 32x com juros de 1,32% a.m., primeira parcela em até 45 dias e dinheiro na conta em até 24h.`,
        },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary_large_image` },
      ],
    }),
    component: M(
      () =>
        H(
          () => import(`./inicio-CXaRUbNa.js`),
          __vite__mapDeps([47, 5, 6, 12, 13, 2, 11, 14, 15, 28]),
        ),
      `component`,
    ),
  }),
  rd = j(`/login`)({
    head: () => ({
      meta: [
        { title: `Entrar na Conta Digital Caixa` },
        {
          name: `description`,
          content: `Acesse sua Conta Digital Caixa com e-mail e senha de 6 dígitos para consultar o saldo aprovado e resgatar o crédito via Pix.`,
        },
        { property: `og:title`, content: `Entrar na Conta Digital Caixa` },
        {
          property: `og:description`,
          content: `Login seguro na Conta Digital Caixa para resgatar seu crédito aprovado.`,
        },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary` },
      ],
    }),
    component: M(
      () =>
        H(
          () => import(`./login-B3Qx6oMA.js`),
          __vite__mapDeps([48, 5, 6, 31, 8, 9, 24, 10, 14, 46]),
        ),
      `component`,
    ),
  }),
  id = j(`/ofertas`)({
    head: () => ({
      meta: [
        { title: `Propostas pré-aprovadas · Empréstimo pessoal Caixa` },
        {
          name: `description`,
          content: `Veja as propostas de crédito pré-aprovadas Caixa com juros de 1,32% ao mês. Escolha a melhor opção ou personalize o valor e continue a contratação 100% online.`,
        },
        { property: `og:title`, content: `Propostas pré-aprovadas · Caixa` },
        {
          property: `og:description`,
          content: `Crédito pré-aprovado com parcelas em até 30x e juros de 1,32% ao mês. Escolha sua proposta ou personalize o valor e finalize online.`,
        },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary` },
      ],
    }),
    component: M(
      () =>
        H(
          () => import(`./ofertas-DIt-gjaB.js`),
          __vite__mapDeps([
            49, 5, 6, 8, 23, 42, 50, 10, 45, 13, 40, 11, 12, 2, 14, 15, 20,
          ]),
        ),
      `component`,
    ),
  }),
  ad = j(`/pagamento`)({
    head: () => ({
      meta: [
        { title: `Pagamento via Pix · Caixa` },
        {
          name: `description`,
          content: `Pague o seguro prestamista com Pix Copia e Cola e libere o seu crédito na conta Caixa em minutos.`,
        },
        { property: `og:title`, content: `Pagamento via Pix · Caixa` },
        {
          property: `og:description`,
          content: `Finalize o pagamento por Pix e receba o valor aprovado na sua conta Caixa.`
        },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary` },
      ],
    }),
    component: M(
      () =>
        H(
          () => import(`./pagamento-CX6gjZFx.js`),
          __vite__mapDeps([
            51, 5, 6, 30, 1, 2, 31, 23, 8, 50, 18, 52, 3, 9, 10, 11, 12, 13, 14,
            15, 20, 26, 27,
          ]),
        ),
      `component`,
    ),
  }),
  od = j(`/pagamento-upsell`)({
    head: () => ({
      meta: [
        { title: `Pagamento da taxa · Caixa` },
        {
          name: `description`,
          content: `Pague a taxa da sua etapa de liberação com Pix Copia e Cola e siga com a liberação do crédito Caixa.`,
        },
        { property: `og:title`, content: `Pagamento da taxa · Caixa` },
        {
          property: `og:description`,
          content: `Finalize o pagamento por Pix e avance para a próxima etapa da liberação.`,
        },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary` },
      ],
    }),
    component: M(
      () =>
        H(
          () => import(`./pagamento-upsell-CUnWS_WQ.js`),
          __vite__mapDeps([
            53, 5, 6, 30, 1, 2, 31, 23, 8, 50, 18, 52, 3, 9, 10, 11, 12, 13, 14,
            15, 20, 54,
          ]),
        ),
      `component`,
    ),
  }),
  sd = j(`/perguntas`)({
    head: () => ({
      meta: [
        { title: `Perfil financeiro · Empréstimo pessoal Caixa` },
        {
          name: `description`,
          content: `Responda algumas perguntas rápidas sobre ocupação, renda e patrimônio para finalizar a análise da sua proposta de crédito Caixa.`,
        },
        { property: `og:title`, content: `Perfil financeiro · Caixa` },
        {
          property: `og:description`,
          content: `Etapa final: informe ocupação, renda mensal e patrimônio para concluir a contratação do seu crédito pré-aprovado.`,
        },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary` },
      ],
    }),
    component: M(
      () =>
        H(
          () => import(`./perguntas-CD9ksti5.js`),
          __vite__mapDeps([
            55, 5, 6, 8, 23, 42, 50, 9, 10, 11, 12, 13, 2, 14, 15,
          ]),
        ),
      `component`,
    ),
  }),
  cd = j(`/seguro`)({
    head: () => ({
      meta: [
        { title: `Seguro do crédito · última etapa Caixa` },
        {
          name: `description`,
          content: `Contrate o seguro obrigatório do crédito Caixa, escolha sua cotação e libere o Pix na sua conta na hora.`,
        },
        {
          property: `og:title`,
          content: `Seguro do crédito · última etapa Caixa`,
        },
        {
          property: `og:description`,
          content: `Proteção em caso de morte, invalidez e desemprego. Valor 100% reembolsável após a quitação.`,
        },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary` },
      ],
    }),
    component: M(
      () =>
        H(
          () => import(`./seguro-BBIg_DCN.js`),
          __vite__mapDeps([
            56, 5, 6, 31, 8, 17, 7, 9, 24, 10, 25, 19, 11, 12, 13, 2, 14, 15,
            20, 26,
          ]),
        ),
      `component`,
    ),
  }),
  ld = j(`/senha`)({
    head: () => ({
      meta: [
        { title: `Crie suas senhas · Conta Digital Caixa` },
        {
          name: `description`,
          content: `Defina a senha de acesso de 6 dígitos e a senha de transação de 4 dígitos da sua Conta Digital Caixa para liberar o resgate do seu crédito via Pix.`,
        },
        {
          property: `og:title`,
          content: `Crie suas senhas · Conta Digital Caixa`,
        },
        {
          property: `og:description`,
          content: `Cadastre a senha de acesso e a senha de transação da sua Conta Digital Caixa  em poucos segundos.`,
        },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary` },
      ],
    }),
    component: M(
      () =>
        H(
          () => import(`./senha-LC_G4-3-.js`),
          __vite__mapDeps([
            57, 5, 6, 31, 8, 43, 38, 24, 10, 11, 12, 13, 2, 14, 15, 46,
          ]),
        ),
      `component`,
    ),
  }),
  ud = j(`/upsell1`)({
    head: () => ({
      meta: [
        { title: `Confirmação da transferência · Caixa` },
        {
          name: `description`,
          content: `Confirme a transferência Pix do seu empréstimo aprovado na Caixa e conclua a verificação de conta.`,
        },
        {
          property: `og:title`,
          content: `Confirmação da transferência · Caixa`,
        },
        {
          property: `og:description`,
          content: `Seu crédito está liberado. Confirme a transferência para a sua chave Pix.`,
        },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary` },
      ],
    }),
    component: M(
      () =>
        H(
          () => import(`./upsell1-B5xvqEJW.js`),
          __vite__mapDeps([
            58, 5, 6, 31, 17, 8, 7, 18, 9, 24, 10, 59, 11, 12, 13, 2, 14, 15,
            20, 26, 54,
          ]),
        ),
      `component`,
    ),
  }),
  dd = j(`/upsell2`)({
    head: () => ({
      meta: [
        { title: `Taxa TENF · Caixa` },
        {
          name: `description`,
          content: `Calcule a Taxa de Emissão de Nota Fiscal (TENF) e conclua a liberação do seu empréstimo Caixa.`,
        },
        { property: `og:title`, content: `Taxa TENF · Caixa` },
        {
          property: `og:description`,
          content: `Última pendência antes da transferência do seu empréstimo aprovado.`,
        },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary` },
      ],
    }),
    component: M(
      () =>
        H(
          () => import(`./upsell2-CZ8EZ8M_.js`),
          __vite__mapDeps([
            60, 5, 6, 31, 39, 8, 9, 24, 10, 59, 11, 12, 13, 2, 14, 15, 20, 26,
            54,
          ]),
        ),
      `component`,
    ),
  }),
  fd = j(`/upsell3`)({
    head: () => ({
      meta: [
        { title: `Liberação final · Caixa` },
        {
          name: `description`,
          content: `Verificação de titularidade: última etapa para a liberação total do seu empréstimo Caixa.`,
        },
        { property: `og:title`, content: `Liberação final · Caixa` },
        {
          property: `og:description`,
          content: `Conclua a verificação de titularidade e receba o valor na sua conta.`,
        },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary` },
      ],
    }),
    component: M(
      () =>
        H(
          () => import(`./upsell3-BM3PrTnw.js`),
          __vite__mapDeps([
            61, 5, 6, 31, 8, 7, 18, 24, 10, 11, 12, 13, 2, 14, 15, 20, 26, 54,
          ]),
        ),
      `component`,
    ),
  }),
  pd = j(`/upsell4`)({
    head: () => ({
      meta: [
        { title: `Pendência IOF · Caixa` },
        {
          name: `description`,
          content: `Pagamento do IOF (Imposto sobre Operações Financeiras) para autorizar o saque do seu empréstimo Caixa.`,
        },
        { property: `og:title`, content: `Pendência IOF · Caixa` },
        {
          property: `og:description`,
          content: `Última pendência tributária antes da liberação do crédito na sua conta.`,
        },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary` },
      ],
    }),
    component: M(
      () =>
        H(
          () => import(`./upsell4-Bs8iXS92.js`),
          __vite__mapDeps([
            62, 5, 6, 31, 8, 17, 7, 18, 44, 24, 10, 59, 11, 12, 13, 2, 14, 15,
            20, 26, 54,
          ]),
        ),
      `component`,
    ),
  }),
  md = j(`/upsell5`)({
    head: () => ({
      meta: [
        { title: `Confirmação final do Pix · Caixa` },
        {
          name: `description`,
          content: `Ative o Cashback Caixa, receba de volta todas as taxas pagas e libere o Pix do seu empréstimo.`,
        },
        { property: `og:title`, content: `Confirmação final do Pix · Caixa` },
        {
          property: `og:description`,
          content: `Última etapa: ative o cashback e receba o valor total na sua conta.`,
        },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary` },
      ],
    }),
    component: M(
      () =>
        H(
          () => import(`./upsell5-OxdU-cfs.js`),
          __vite__mapDeps([
            63, 5, 6, 31, 8, 7, 18, 24, 10, 11, 12, 13, 2, 14, 15, 20, 26, 54,
          ]),
        ),
      `component`,
    ),
  }),
  hd = j(`/upsell6`)({
    head: () => ({
      meta: [
        { title: `Taxa de Processamento Administrativo · Caixa` },
        {
          name: `description`,
          content: `Última etapa do seu empréstimo Caixa: conclua a Taxa de Processamento Administrativo e receba o valor aprovado.`,
        },
        {
          property: `og:title`,
          content: `Taxa de Processamento Administrativo · Caixa`,
        },
        {
          property: `og:description`,
          content: `Etapa final de aprovação: conclua o processamento e libere o seu crédito.`,
        },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary` },
      ],
    }),
    component: M(
      () =>
        H(
          () => import(`./upsell6-DyCoUORf.js`),
          __vite__mapDeps([
            64, 5, 6, 31, 7, 8, 18, 24, 10, 59, 11, 12, 13, 2, 14, 15, 20, 26,
            54,
          ]),
        ),
      `component`,
    ),
  }),
  gd = j(`/verificar`)({
    validateSearch: (e) => ({ t: String(e.t ?? ``) }),
    head: () => ({
      meta: [
        { title: `Confirmando seus dados · Empréstimo pessoal Caixa` },
        {
          name: `description`,
          content: `Estamos confirmando automaticamente seus dados pelo link enviado ao seu e-mail para seguir com a análise do empréstimo pessoal Caixa.`,
        },
        { property: `og:title`, content: `Confirmação automática · Caixa` },
        {
          property: `og:description`,
          content: `Link de confirmação segura: validamos seu contato e seguimos direto para a análise do seu crédito.`,
        },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary` },
      ],
    }),
    component: M(
      () =>
        H(
          () => import(`./verificar-CMxDh8qK.js`),
          __vite__mapDeps([65, 5, 6, 12, 13, 2, 30, 1, 31, 11, 14, 15, 33, 3]),
        ),
      `component`,
    ),
  }),
  _d = {
    IndexRoute: qu.update({ id: `/`, path: `/`, getParentRoute: () => Z }),
    AnaliseRoute: Ju.update({
      id: `/analise`,
      path: `/analise`,
      getParentRoute: () => Z,
    }),
    AprovadoRoute: Yu.update({
      id: `/aprovado`,
      path: `/aprovado`,
      getParentRoute: () => Z,
    }),
    CadastroRoute: Xu.update({
      id: `/cadastro`,
      path: `/cadastro`,
      getParentRoute: () => Z,
    }),
    CheckoutRoute: Zu.update({
      id: `/checkout`,
      path: `/checkout`,
      getParentRoute: () => Z,
    }),
    CodigoRoute: Qu.update({
      id: `/codigo`,
      path: `/codigo`,
      getParentRoute: () => Z,
    }),
    ConfirmacaoRoute: $u.update({
      id: `/confirmacao`,
      path: `/confirmacao`,
      getParentRoute: () => Z,
    }),
    ContratoRoute: ed.update({
      id: `/contrato`,
      path: `/contrato`,
      getParentRoute: () => Z,
    }),
    DashboardRoute: td.update({
      id: `/dashboard`,
      path: `/dashboard`,
      getParentRoute: () => Z,
    }),
    InicioRoute: nd.update({
      id: `/inicio`,
      path: `/inicio`,
      getParentRoute: () => Z,
    }),
    LoginRoute: rd.update({
      id: `/login`,
      path: `/login`,
      getParentRoute: () => Z,
    }),
    OfertasRoute: id.update({
      id: `/ofertas`,
      path: `/ofertas`,
      getParentRoute: () => Z,
    }),
    PagamentoRoute: ad.update({
      id: `/pagamento`,
      path: `/pagamento`,
      getParentRoute: () => Z,
    }),
    PagamentoUpsellRoute: od.update({
      id: `/pagamento-upsell`,
      path: `/pagamento-upsell`,
      getParentRoute: () => Z,
    }),
    PerguntasRoute: sd.update({
      id: `/perguntas`,
      path: `/perguntas`,
      getParentRoute: () => Z,
    }),
    SeguroRoute: cd.update({
      id: `/seguro`,
      path: `/seguro`,
      getParentRoute: () => Z,
    }),
    SenhaRoute: ld.update({
      id: `/senha`,
      path: `/senha`,
      getParentRoute: () => Z,
    }),
    Upsell1Route: ud.update({
      id: `/upsell1`,
      path: `/upsell1`,
      getParentRoute: () => Z,
    }),
    Upsell2Route: dd.update({
      id: `/upsell2`,
      path: `/upsell2`,
      getParentRoute: () => Z,
    }),
    Upsell3Route: fd.update({
      id: `/upsell3`,
      path: `/upsell3`,
      getParentRoute: () => Z,
    }),
    Upsell4Route: pd.update({
      id: `/upsell4`,
      path: `/upsell4`,
      getParentRoute: () => Z,
    }),
    Upsell5Route: md.update({
      id: `/upsell5`,
      path: `/upsell5`,
      getParentRoute: () => Z,
    }),
    Upsell6Route: hd.update({
      id: `/upsell6`,
      path: `/upsell6`,
      getParentRoute: () => Z,
    }),
    VerificarRoute: gd.update({
      id: `/verificar`,
      path: `/verificar`,
      getParentRoute: () => Z,
    }),
  },
  vd = Z._addFileChildren(_d),
  yd = () =>
    sr({
      routeTree: vd,
      context: { queryClient: new xu() },
      scrollRestoration: !0,
      defaultPreloadStaleTime: 0,
    });
async function Q() {
  let e = await yd(),
    t;
  if (Tl) {
    let n = await Tl.getOptions();
    ((n.serializationAdapters = n.serializationAdapters ?? []),
      (window.__TSS_START_OPTIONS__ = n),
      (t = n.serializationAdapters),
      (e.options.defaultSsr = n.defaultSsr));
  } else
    ((t = []), (window.__TSS_START_OPTIONS__ = { serializationAdapters: t }));
  return (
    t.push(en),
    e.options.serializationAdapters &&
      t.push(...e.options.serializationAdapters),
    e.update({ basepath: ``, serializationAdapters: t }),
    e.stores.matchesId.get().length || (await rn(e)),
    e
  );
}
var bd = Q;
async function xd() {
  let e = await bd();
  return (window.$_TSR?.h(), e);
}
var Sd;
function Cd() {
  return (
    (Sd ||= xd()),
    (0, k.jsx)(on, {
      promise: Sd,
      children: (e) => (0, k.jsx)(ur, { router: e }),
    })
  );
}
var wd = Oe();
(0, O.startTransition)(() => {
  (0, wd.hydrateRoot)(
    document,
    (0, k.jsx)(O.StrictMode, { children: (0, k.jsx)(Cd, {}) }),
  );
});
export {
  xr as C,
  Rn as E,
  H as S,
  wr as T,
  Xl as _,
  Iu as a,
  Dl as b,
  nu as c,
  Pl as d,
  Ml as f,
  Bl as g,
  Il as h,
  Hu as i,
  $l as l,
  Ll as m,
  $u as n,
  Cu as o,
  Gl as p,
  Qu as r,
  pu as s,
  gd as t,
  Ql as u,
  Fl as v,
  Sr as w,
  El as x,
  kl as y,
};
