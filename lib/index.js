import { getCurrentScope as vc, onScopeDispose as Ks, unref as c, getCurrentInstance as Te, onMounted as Re, nextTick as me, ref as k, readonly as js, watch as X, warn as hc, computed as E, inject as pe, isRef as Xt, shallowRef as Rn, onBeforeUnmount as Bt, onBeforeMount as Tl, provide as Ge, defineComponent as z, openBlock as P, createElementBlock as R, mergeProps as bt, renderSlot as Z, toRef as Dt, onUnmounted as br, useAttrs as Us, useSlots as No, withDirectives as Fe, createCommentVNode as W, Fragment as ze, normalizeClass as I, createElementVNode as B, createBlock as K, withCtx as D, resolveDynamicComponent as je, withModifiers as De, createVNode as G, toDisplayString as ge, normalizeStyle as ke, vShow as Rt, Transition as gn, reactive as Tn, onUpdated as qs, cloneVNode as gc, Text as Gs, Comment as Ys, Teleport as Xs, onDeactivated as Js, toRaw as Xn, vModelCheckbox as ar, createTextVNode as Wt, toRefs as zn, vModelRadio as Qs, h as re, resolveComponent as Me, triggerRef as ho, resolveDirective as Ol, renderList as Vt, withKeys as Tt, vModelText as mc, createSlots as bc, watchEffect as Ln, createApp as yc, isVNode as Xr, render as ua, onActivated as wc, normalizeProps as Mr, guardReactiveProps as Cc } from "vue";
import { ElTable as Sc } from "element-plus";
import { SuccessFilled as Ec, WarningFilled as Tc, CircleCloseFilled as Oc, InfoFilled as $c, Loading as yr, CircleCheck as kc, CircleClose as $l, Close as sr, View as Pc, Hide as _c, ArrowDown as Zs, DArrowLeft as Ac, MoreFilled as ca, DArrowRight as Ic, ArrowLeft as xc, ArrowRight as kl, ArrowUp as Nc, Setting as Rc, Operation as Lc, Refresh as Mc } from "@element-plus/icons-vue";
const on = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
  const l = e == null ? void 0 : e(r);
  if (n === !1 || !l)
    return t == null ? void 0 : t(r);
};
var da;
const _e = typeof window < "u", Bc = (e) => typeof e == "string", ei = () => {
}, ti = _e && ((da = window == null ? void 0 : window.navigator) == null ? void 0 : da.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Pl(e) {
  return typeof e == "function" ? e() : c(e);
}
function Fc(e) {
  return e;
}
function wr(e) {
  return vc() ? (Ks(e), !0) : !1;
}
function zc(e, t = !0) {
  Te() ? Re(e) : t ? e() : me(e);
}
function Jr(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, r = k(!1);
  let l = null;
  function a() {
    l && (clearTimeout(l), l = null);
  }
  function s() {
    r.value = !1, a();
  }
  function i(...u) {
    a(), r.value = !0, l = setTimeout(() => {
      r.value = !1, l = null, e(...u);
    }, Pl(t));
  }
  return o && (r.value = !0, _e && i()), wr(s), {
    isPending: js(r),
    start: i,
    stop: s
  };
}
function vn(e) {
  var t;
  const n = Pl(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const _l = _e ? window : void 0;
function qt(...e) {
  let t, n, o, r;
  if (Bc(e[0]) || Array.isArray(e[0]) ? ([n, o, r] = e, t = _l) : [t, n, o, r] = e, !t)
    return ei;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const l = [], a = () => {
    l.forEach((f) => f()), l.length = 0;
  }, s = (f, d, v, m) => (f.addEventListener(d, v, m), () => f.removeEventListener(d, v, m)), i = X(() => [vn(t), Pl(r)], ([f, d]) => {
    a(), f && l.push(...n.flatMap((v) => o.map((m) => s(f, v, m, d))));
  }, { immediate: !0, flush: "post" }), u = () => {
    i(), a();
  };
  return wr(u), u;
}
let fa = !1;
function Hc(e, t, n = {}) {
  const { window: o = _l, ignore: r = [], capture: l = !0, detectIframe: a = !1 } = n;
  if (!o)
    return;
  ti && !fa && (fa = !0, Array.from(o.document.body.children).forEach((v) => v.addEventListener("click", ei)));
  let s = !0;
  const i = (v) => r.some((m) => {
    if (typeof m == "string")
      return Array.from(o.document.querySelectorAll(m)).some((p) => p === v.target || v.composedPath().includes(p));
    {
      const p = vn(m);
      return p && (v.target === p || v.composedPath().includes(p));
    }
  }), f = [
    qt(o, "click", (v) => {
      const m = vn(e);
      if (!(!m || m === v.target || v.composedPath().includes(m))) {
        if (v.detail === 0 && (s = !i(v)), !s) {
          s = !0;
          return;
        }
        t(v);
      }
    }, { passive: !0, capture: l }),
    qt(o, "pointerdown", (v) => {
      const m = vn(e);
      m && (s = !v.composedPath().includes(m) && !i(v));
    }, { passive: !0 }),
    a && qt(o, "blur", (v) => {
      var m;
      const p = vn(e);
      ((m = o.document.activeElement) == null ? void 0 : m.tagName) === "IFRAME" && !(p != null && p.contains(o.document.activeElement)) && t(v);
    })
  ].filter(Boolean);
  return () => f.forEach((v) => v());
}
function Dc(e, t = !1) {
  const n = k(), o = () => n.value = !!e();
  return o(), zc(o, t), n;
}
const pa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, va = "__vueuse_ssr_handlers__";
pa[va] = pa[va] || {};
var ha = Object.getOwnPropertySymbols, Vc = Object.prototype.hasOwnProperty, Wc = Object.prototype.propertyIsEnumerable, Kc = (e, t) => {
  var n = {};
  for (var o in e)
    Vc.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && ha)
    for (var o of ha(e))
      t.indexOf(o) < 0 && Wc.call(e, o) && (n[o] = e[o]);
  return n;
};
function Jn(e, t, n = {}) {
  const o = n, { window: r = _l } = o, l = Kc(o, ["window"]);
  let a;
  const s = Dc(() => r && "ResizeObserver" in r), i = () => {
    a && (a.disconnect(), a = void 0);
  }, u = X(() => vn(e), (d) => {
    i(), s.value && r && d && (a = new ResizeObserver(t), a.observe(d, l));
  }, { immediate: !0, flush: "post" }), f = () => {
    i(), u();
  };
  return wr(f), {
    isSupported: s,
    stop: f
  };
}
var ga;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(ga || (ga = {}));
var jc = Object.defineProperty, ma = Object.getOwnPropertySymbols, Uc = Object.prototype.hasOwnProperty, qc = Object.prototype.propertyIsEnumerable, ba = (e, t, n) => t in e ? jc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Gc = (e, t) => {
  for (var n in t || (t = {}))
    Uc.call(t, n) && ba(e, n, t[n]);
  if (ma)
    for (var n of ma(t))
      qc.call(t, n) && ba(e, n, t[n]);
  return e;
};
const Yc = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
Gc({
  linear: Fc
}, Yc);
const Xc = () => _e && /firefox/i.test(window.navigator.userAgent);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const rn = () => {
}, ni = Object.assign, Jc = Object.prototype.hasOwnProperty, Bn = (e, t) => Jc.call(e, t), mn = Array.isArray, lt = (e) => typeof e == "function", Ue = (e) => typeof e == "string", Qc = (e) => typeof e == "symbol", Ze = (e) => e !== null && typeof e == "object", ya = (e) => (Ze(e) || lt(e)) && lt(e.then) && lt(e.catch), Zc = Object.prototype.toString, ed = (e) => Zc.call(e), Br = (e) => ed(e).slice(8, -1), oi = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, td = /-(\w)/g, nd = oi((e) => e.replace(td, (t, n) => n ? n.toUpperCase() : "")), od = /\B([A-Z])/g, rd = oi(
  (e) => e.replace(od, "-$1").toLowerCase()
);
var ld = typeof global == "object" && global && global.Object === Object && global;
const ri = ld;
var ad = typeof self == "object" && self && self.Object === Object && self, sd = ri || ad || Function("return this")();
const Kt = sd;
var id = Kt.Symbol;
const Jt = id;
var li = Object.prototype, ud = li.hasOwnProperty, cd = li.toString, go = Jt ? Jt.toStringTag : void 0;
function dd(e) {
  var t = ud.call(e, go), n = e[go];
  try {
    e[go] = void 0;
    var o = !0;
  } catch {
  }
  var r = cd.call(e);
  return o && (t ? e[go] = n : delete e[go]), r;
}
var fd = Object.prototype, pd = fd.toString;
function vd(e) {
  return pd.call(e);
}
var hd = "[object Null]", gd = "[object Undefined]", wa = Jt ? Jt.toStringTag : void 0;
function Hn(e) {
  return e == null ? e === void 0 ? gd : hd : wa && wa in Object(e) ? dd(e) : vd(e);
}
function bn(e) {
  return e != null && typeof e == "object";
}
var md = "[object Symbol]";
function Cr(e) {
  return typeof e == "symbol" || bn(e) && Hn(e) == md;
}
function ai(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o; )
    r[n] = t(e[n], n, e);
  return r;
}
var bd = Array.isArray;
const kt = bd;
var yd = 1 / 0, Ca = Jt ? Jt.prototype : void 0, Sa = Ca ? Ca.toString : void 0;
function si(e) {
  if (typeof e == "string")
    return e;
  if (kt(e))
    return ai(e, si) + "";
  if (Cr(e))
    return Sa ? Sa.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -yd ? "-0" : t;
}
var wd = /\s/;
function Cd(e) {
  for (var t = e.length; t-- && wd.test(e.charAt(t)); )
    ;
  return t;
}
var Sd = /^\s+/;
function Ed(e) {
  return e && e.slice(0, Cd(e) + 1).replace(Sd, "");
}
function Pt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ea = 0 / 0, Td = /^[-+]0x[0-9a-f]+$/i, Od = /^0b[01]+$/i, $d = /^0o[0-7]+$/i, kd = parseInt;
function Qr(e) {
  if (typeof e == "number")
    return e;
  if (Cr(e))
    return Ea;
  if (Pt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Pt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Ed(e);
  var n = Od.test(e);
  return n || $d.test(e) ? kd(e.slice(2), n ? 2 : 8) : Td.test(e) ? Ea : +e;
}
var Ta = 1 / 0, Pd = 17976931348623157e292;
function _d(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Qr(e), e === Ta || e === -Ta) {
    var t = e < 0 ? -1 : 1;
    return t * Pd;
  }
  return e === e ? e : 0;
}
function Ad(e) {
  var t = _d(e), n = t % 1;
  return t === t ? n ? t - n : t : 0;
}
function Al(e) {
  return e;
}
var Id = "[object AsyncFunction]", xd = "[object Function]", Nd = "[object GeneratorFunction]", Rd = "[object Proxy]";
function Il(e) {
  if (!Pt(e))
    return !1;
  var t = Hn(e);
  return t == xd || t == Nd || t == Id || t == Rd;
}
var Ld = Kt["__core-js_shared__"];
const Fr = Ld;
var Oa = function() {
  var e = /[^.]+$/.exec(Fr && Fr.keys && Fr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Md(e) {
  return !!Oa && Oa in e;
}
var Bd = Function.prototype, Fd = Bd.toString;
function Dn(e) {
  if (e != null) {
    try {
      return Fd.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var zd = /[\\^$.*+?()[\]{}|]/g, Hd = /^\[object .+?Constructor\]$/, Dd = Function.prototype, Vd = Object.prototype, Wd = Dd.toString, Kd = Vd.hasOwnProperty, jd = RegExp(
  "^" + Wd.call(Kd).replace(zd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ud(e) {
  if (!Pt(e) || Md(e))
    return !1;
  var t = Il(e) ? jd : Hd;
  return t.test(Dn(e));
}
function qd(e, t) {
  return e == null ? void 0 : e[t];
}
function Vn(e, t) {
  var n = qd(e, t);
  return Ud(n) ? n : void 0;
}
var Gd = Vn(Kt, "WeakMap");
const Zr = Gd;
var $a = Object.create, Yd = function() {
  function e() {
  }
  return function(t) {
    if (!Pt(t))
      return {};
    if ($a)
      return $a(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
const Xd = Yd;
function Jd(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
function Qd(e, t) {
  var n = -1, o = e.length;
  for (t || (t = Array(o)); ++n < o; )
    t[n] = e[n];
  return t;
}
var Zd = 800, ef = 16, tf = Date.now;
function nf(e) {
  var t = 0, n = 0;
  return function() {
    var o = tf(), r = ef - (o - n);
    if (n = o, r > 0) {
      if (++t >= Zd)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function of(e) {
  return function() {
    return e;
  };
}
var rf = function() {
  try {
    var e = Vn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const ir = rf;
var lf = ir ? function(e, t) {
  return ir(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: of(t),
    writable: !0
  });
} : Al;
const af = lf;
var sf = nf(af);
const ii = sf;
function uf(e, t, n, o) {
  for (var r = e.length, l = n + (o ? 1 : -1); o ? l-- : ++l < r; )
    if (t(e[l], l, e))
      return l;
  return -1;
}
var cf = 9007199254740991, df = /^(?:0|[1-9]\d*)$/;
function Sr(e, t) {
  var n = typeof e;
  return t = t ?? cf, !!t && (n == "number" || n != "symbol" && df.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function xl(e, t, n) {
  t == "__proto__" && ir ? ir(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Ro(e, t) {
  return e === t || e !== e && t !== t;
}
var ff = Object.prototype, pf = ff.hasOwnProperty;
function ui(e, t, n) {
  var o = e[t];
  (!(pf.call(e, t) && Ro(o, n)) || n === void 0 && !(t in e)) && xl(e, t, n);
}
function vf(e, t, n, o) {
  var r = !n;
  n || (n = {});
  for (var l = -1, a = t.length; ++l < a; ) {
    var s = t[l], i = o ? o(n[s], e[s], s, n, e) : void 0;
    i === void 0 && (i = e[s]), r ? xl(n, s, i) : ui(n, s, i);
  }
  return n;
}
var ka = Math.max;
function ci(e, t, n) {
  return t = ka(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, r = -1, l = ka(o.length - t, 0), a = Array(l); ++r < l; )
      a[r] = o[t + r];
    r = -1;
    for (var s = Array(t + 1); ++r < t; )
      s[r] = o[r];
    return s[t] = n(a), Jd(e, this, s);
  };
}
function hf(e, t) {
  return ii(ci(e, t, Al), e + "");
}
var gf = 9007199254740991;
function Nl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= gf;
}
function uo(e) {
  return e != null && Nl(e.length) && !Il(e);
}
function mf(e, t, n) {
  if (!Pt(n))
    return !1;
  var o = typeof t;
  return (o == "number" ? uo(n) && Sr(t, n.length) : o == "string" && t in n) ? Ro(n[t], e) : !1;
}
function bf(e) {
  return hf(function(t, n) {
    var o = -1, r = n.length, l = r > 1 ? n[r - 1] : void 0, a = r > 2 ? n[2] : void 0;
    for (l = e.length > 3 && typeof l == "function" ? (r--, l) : void 0, a && mf(n[0], n[1], a) && (l = r < 3 ? void 0 : l, r = 1), t = Object(t); ++o < r; ) {
      var s = n[o];
      s && e(t, s, o, l);
    }
    return t;
  });
}
var yf = Object.prototype;
function Rl(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || yf;
  return e === n;
}
function wf(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var Cf = "[object Arguments]";
function Pa(e) {
  return bn(e) && Hn(e) == Cf;
}
var di = Object.prototype, Sf = di.hasOwnProperty, Ef = di.propertyIsEnumerable, Tf = Pa(function() {
  return arguments;
}()) ? Pa : function(e) {
  return bn(e) && Sf.call(e, "callee") && !Ef.call(e, "callee");
};
const Oo = Tf;
function Of() {
  return !1;
}
var fi = typeof exports == "object" && exports && !exports.nodeType && exports, _a = fi && typeof module == "object" && module && !module.nodeType && module, $f = _a && _a.exports === fi, Aa = $f ? Kt.Buffer : void 0, kf = Aa ? Aa.isBuffer : void 0, Pf = kf || Of;
const ur = Pf;
var _f = "[object Arguments]", Af = "[object Array]", If = "[object Boolean]", xf = "[object Date]", Nf = "[object Error]", Rf = "[object Function]", Lf = "[object Map]", Mf = "[object Number]", Bf = "[object Object]", Ff = "[object RegExp]", zf = "[object Set]", Hf = "[object String]", Df = "[object WeakMap]", Vf = "[object ArrayBuffer]", Wf = "[object DataView]", Kf = "[object Float32Array]", jf = "[object Float64Array]", Uf = "[object Int8Array]", qf = "[object Int16Array]", Gf = "[object Int32Array]", Yf = "[object Uint8Array]", Xf = "[object Uint8ClampedArray]", Jf = "[object Uint16Array]", Qf = "[object Uint32Array]", Ne = {};
Ne[Kf] = Ne[jf] = Ne[Uf] = Ne[qf] = Ne[Gf] = Ne[Yf] = Ne[Xf] = Ne[Jf] = Ne[Qf] = !0;
Ne[_f] = Ne[Af] = Ne[Vf] = Ne[If] = Ne[Wf] = Ne[xf] = Ne[Nf] = Ne[Rf] = Ne[Lf] = Ne[Mf] = Ne[Bf] = Ne[Ff] = Ne[zf] = Ne[Hf] = Ne[Df] = !1;
function Zf(e) {
  return bn(e) && Nl(e.length) && !!Ne[Hn(e)];
}
function ep(e) {
  return function(t) {
    return e(t);
  };
}
var pi = typeof exports == "object" && exports && !exports.nodeType && exports, yo = pi && typeof module == "object" && module && !module.nodeType && module, tp = yo && yo.exports === pi, zr = tp && ri.process, np = function() {
  try {
    var e = yo && yo.require && yo.require("util").types;
    return e || zr && zr.binding && zr.binding("util");
  } catch {
  }
}();
const Ia = np;
var xa = Ia && Ia.isTypedArray, op = xa ? ep(xa) : Zf;
const Ll = op;
var rp = Object.prototype, lp = rp.hasOwnProperty;
function vi(e, t) {
  var n = kt(e), o = !n && Oo(e), r = !n && !o && ur(e), l = !n && !o && !r && Ll(e), a = n || o || r || l, s = a ? wf(e.length, String) : [], i = s.length;
  for (var u in e)
    (t || lp.call(e, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    l && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Sr(u, i))) && s.push(u);
  return s;
}
function hi(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var ap = hi(Object.keys, Object);
const sp = ap;
var ip = Object.prototype, up = ip.hasOwnProperty;
function cp(e) {
  if (!Rl(e))
    return sp(e);
  var t = [];
  for (var n in Object(e))
    up.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Ml(e) {
  return uo(e) ? vi(e) : cp(e);
}
function dp(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var fp = Object.prototype, pp = fp.hasOwnProperty;
function vp(e) {
  if (!Pt(e))
    return dp(e);
  var t = Rl(e), n = [];
  for (var o in e)
    o == "constructor" && (t || !pp.call(e, o)) || n.push(o);
  return n;
}
function gi(e) {
  return uo(e) ? vi(e, !0) : vp(e);
}
var hp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, gp = /^\w*$/;
function Bl(e, t) {
  if (kt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Cr(e) ? !0 : gp.test(e) || !hp.test(e) || t != null && e in Object(t);
}
var mp = Vn(Object, "create");
const $o = mp;
function bp() {
  this.__data__ = $o ? $o(null) : {}, this.size = 0;
}
function yp(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var wp = "__lodash_hash_undefined__", Cp = Object.prototype, Sp = Cp.hasOwnProperty;
function Ep(e) {
  var t = this.__data__;
  if ($o) {
    var n = t[e];
    return n === wp ? void 0 : n;
  }
  return Sp.call(t, e) ? t[e] : void 0;
}
var Tp = Object.prototype, Op = Tp.hasOwnProperty;
function $p(e) {
  var t = this.__data__;
  return $o ? t[e] !== void 0 : Op.call(t, e);
}
var kp = "__lodash_hash_undefined__";
function Pp(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = $o && t === void 0 ? kp : t, this;
}
function Fn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Fn.prototype.clear = bp;
Fn.prototype.delete = yp;
Fn.prototype.get = Ep;
Fn.prototype.has = $p;
Fn.prototype.set = Pp;
function _p() {
  this.__data__ = [], this.size = 0;
}
function Er(e, t) {
  for (var n = e.length; n--; )
    if (Ro(e[n][0], t))
      return n;
  return -1;
}
var Ap = Array.prototype, Ip = Ap.splice;
function xp(e) {
  var t = this.__data__, n = Er(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : Ip.call(t, n, 1), --this.size, !0;
}
function Np(e) {
  var t = this.__data__, n = Er(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Rp(e) {
  return Er(this.__data__, e) > -1;
}
function Lp(e, t) {
  var n = this.__data__, o = Er(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function un(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
un.prototype.clear = _p;
un.prototype.delete = xp;
un.prototype.get = Np;
un.prototype.has = Rp;
un.prototype.set = Lp;
var Mp = Vn(Kt, "Map");
const ko = Mp;
function Bp() {
  this.size = 0, this.__data__ = {
    hash: new Fn(),
    map: new (ko || un)(),
    string: new Fn()
  };
}
function Fp(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Tr(e, t) {
  var n = e.__data__;
  return Fp(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function zp(e) {
  var t = Tr(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Hp(e) {
  return Tr(this, e).get(e);
}
function Dp(e) {
  return Tr(this, e).has(e);
}
function Vp(e, t) {
  var n = Tr(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function cn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
cn.prototype.clear = Bp;
cn.prototype.delete = zp;
cn.prototype.get = Hp;
cn.prototype.has = Dp;
cn.prototype.set = Vp;
var Wp = "Expected a function";
function Fl(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Wp);
  var n = function() {
    var o = arguments, r = t ? t.apply(this, o) : o[0], l = n.cache;
    if (l.has(r))
      return l.get(r);
    var a = e.apply(this, o);
    return n.cache = l.set(r, a) || l, a;
  };
  return n.cache = new (Fl.Cache || cn)(), n;
}
Fl.Cache = cn;
var Kp = 500;
function jp(e) {
  var t = Fl(e, function(o) {
    return n.size === Kp && n.clear(), o;
  }), n = t.cache;
  return t;
}
var Up = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, qp = /\\(\\)?/g, Gp = jp(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Up, function(n, o, r, l) {
    t.push(r ? l.replace(qp, "$1") : o || n);
  }), t;
});
const Yp = Gp;
function Xp(e) {
  return e == null ? "" : si(e);
}
function Or(e, t) {
  return kt(e) ? e : Bl(e, t) ? [e] : Yp(Xp(e));
}
var Jp = 1 / 0;
function Lo(e) {
  if (typeof e == "string" || Cr(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Jp ? "-0" : t;
}
function zl(e, t) {
  t = Or(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[Lo(t[n++])];
  return n && n == o ? e : void 0;
}
function rt(e, t, n) {
  var o = e == null ? void 0 : zl(e, t);
  return o === void 0 ? n : o;
}
function mi(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; )
    e[r + n] = t[n];
  return e;
}
var Na = Jt ? Jt.isConcatSpreadable : void 0;
function Qp(e) {
  return kt(e) || Oo(e) || !!(Na && e && e[Na]);
}
function Hl(e, t, n, o, r) {
  var l = -1, a = e.length;
  for (n || (n = Qp), r || (r = []); ++l < a; ) {
    var s = e[l];
    t > 0 && n(s) ? t > 1 ? Hl(s, t - 1, n, o, r) : mi(r, s) : o || (r[r.length] = s);
  }
  return r;
}
function Zp(e) {
  var t = e == null ? 0 : e.length;
  return t ? Hl(e, 1) : [];
}
function ev(e) {
  return ii(ci(e, void 0, Zp), e + "");
}
var tv = hi(Object.getPrototypeOf, Object);
const bi = tv;
var nv = "[object Object]", ov = Function.prototype, rv = Object.prototype, yi = ov.toString, lv = rv.hasOwnProperty, av = yi.call(Object);
function sv(e) {
  if (!bn(e) || Hn(e) != nv)
    return !1;
  var t = bi(e);
  if (t === null)
    return !0;
  var n = lv.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && yi.call(n) == av;
}
function iv() {
  this.__data__ = new un(), this.size = 0;
}
function uv(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function cv(e) {
  return this.__data__.get(e);
}
function dv(e) {
  return this.__data__.has(e);
}
var fv = 200;
function pv(e, t) {
  var n = this.__data__;
  if (n instanceof un) {
    var o = n.__data__;
    if (!ko || o.length < fv - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new cn(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Gt(e) {
  var t = this.__data__ = new un(e);
  this.size = t.size;
}
Gt.prototype.clear = iv;
Gt.prototype.delete = uv;
Gt.prototype.get = cv;
Gt.prototype.has = dv;
Gt.prototype.set = pv;
var wi = typeof exports == "object" && exports && !exports.nodeType && exports, Ra = wi && typeof module == "object" && module && !module.nodeType && module, vv = Ra && Ra.exports === wi, La = vv ? Kt.Buffer : void 0, Ma = La ? La.allocUnsafe : void 0;
function hv(e, t) {
  if (t)
    return e.slice();
  var n = e.length, o = Ma ? Ma(n) : new e.constructor(n);
  return e.copy(o), o;
}
function gv(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = 0, l = []; ++n < o; ) {
    var a = e[n];
    t(a, n, e) && (l[r++] = a);
  }
  return l;
}
function mv() {
  return [];
}
var bv = Object.prototype, yv = bv.propertyIsEnumerable, Ba = Object.getOwnPropertySymbols, wv = Ba ? function(e) {
  return e == null ? [] : (e = Object(e), gv(Ba(e), function(t) {
    return yv.call(e, t);
  }));
} : mv;
const Cv = wv;
function Sv(e, t, n) {
  var o = t(e);
  return kt(e) ? o : mi(o, n(e));
}
function Fa(e) {
  return Sv(e, Ml, Cv);
}
var Ev = Vn(Kt, "DataView");
const el = Ev;
var Tv = Vn(Kt, "Promise");
const tl = Tv;
var Ov = Vn(Kt, "Set");
const nl = Ov;
var za = "[object Map]", $v = "[object Object]", Ha = "[object Promise]", Da = "[object Set]", Va = "[object WeakMap]", Wa = "[object DataView]", kv = Dn(el), Pv = Dn(ko), _v = Dn(tl), Av = Dn(nl), Iv = Dn(Zr), An = Hn;
(el && An(new el(new ArrayBuffer(1))) != Wa || ko && An(new ko()) != za || tl && An(tl.resolve()) != Ha || nl && An(new nl()) != Da || Zr && An(new Zr()) != Va) && (An = function(e) {
  var t = Hn(e), n = t == $v ? e.constructor : void 0, o = n ? Dn(n) : "";
  if (o)
    switch (o) {
      case kv:
        return Wa;
      case Pv:
        return za;
      case _v:
        return Ha;
      case Av:
        return Da;
      case Iv:
        return Va;
    }
  return t;
});
const Ka = An;
var xv = Kt.Uint8Array;
const cr = xv;
function Nv(e) {
  var t = new e.constructor(e.byteLength);
  return new cr(t).set(new cr(e)), t;
}
function Rv(e, t) {
  var n = t ? Nv(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
function Lv(e) {
  return typeof e.constructor == "function" && !Rl(e) ? Xd(bi(e)) : {};
}
var Mv = "__lodash_hash_undefined__";
function Bv(e) {
  return this.__data__.set(e, Mv), this;
}
function Fv(e) {
  return this.__data__.has(e);
}
function dr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new cn(); ++t < n; )
    this.add(e[t]);
}
dr.prototype.add = dr.prototype.push = Bv;
dr.prototype.has = Fv;
function zv(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Hv(e, t) {
  return e.has(t);
}
var Dv = 1, Vv = 2;
function Ci(e, t, n, o, r, l) {
  var a = n & Dv, s = e.length, i = t.length;
  if (s != i && !(a && i > s))
    return !1;
  var u = l.get(e), f = l.get(t);
  if (u && f)
    return u == t && f == e;
  var d = -1, v = !0, m = n & Vv ? new dr() : void 0;
  for (l.set(e, t), l.set(t, e); ++d < s; ) {
    var p = e[d], h = t[d];
    if (o)
      var y = a ? o(h, p, d, t, e, l) : o(p, h, d, e, t, l);
    if (y !== void 0) {
      if (y)
        continue;
      v = !1;
      break;
    }
    if (m) {
      if (!zv(t, function(g, w) {
        if (!Hv(m, w) && (p === g || r(p, g, n, o, l)))
          return m.push(w);
      })) {
        v = !1;
        break;
      }
    } else if (!(p === h || r(p, h, n, o, l))) {
      v = !1;
      break;
    }
  }
  return l.delete(e), l.delete(t), v;
}
function Wv(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, r) {
    n[++t] = [r, o];
  }), n;
}
function Kv(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var jv = 1, Uv = 2, qv = "[object Boolean]", Gv = "[object Date]", Yv = "[object Error]", Xv = "[object Map]", Jv = "[object Number]", Qv = "[object RegExp]", Zv = "[object Set]", eh = "[object String]", th = "[object Symbol]", nh = "[object ArrayBuffer]", oh = "[object DataView]", ja = Jt ? Jt.prototype : void 0, Hr = ja ? ja.valueOf : void 0;
function rh(e, t, n, o, r, l, a) {
  switch (n) {
    case oh:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case nh:
      return !(e.byteLength != t.byteLength || !l(new cr(e), new cr(t)));
    case qv:
    case Gv:
    case Jv:
      return Ro(+e, +t);
    case Yv:
      return e.name == t.name && e.message == t.message;
    case Qv:
    case eh:
      return e == t + "";
    case Xv:
      var s = Wv;
    case Zv:
      var i = o & jv;
      if (s || (s = Kv), e.size != t.size && !i)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      o |= Uv, a.set(e, t);
      var f = Ci(s(e), s(t), o, r, l, a);
      return a.delete(e), f;
    case th:
      if (Hr)
        return Hr.call(e) == Hr.call(t);
  }
  return !1;
}
var lh = 1, ah = Object.prototype, sh = ah.hasOwnProperty;
function ih(e, t, n, o, r, l) {
  var a = n & lh, s = Fa(e), i = s.length, u = Fa(t), f = u.length;
  if (i != f && !a)
    return !1;
  for (var d = i; d--; ) {
    var v = s[d];
    if (!(a ? v in t : sh.call(t, v)))
      return !1;
  }
  var m = l.get(e), p = l.get(t);
  if (m && p)
    return m == t && p == e;
  var h = !0;
  l.set(e, t), l.set(t, e);
  for (var y = a; ++d < i; ) {
    v = s[d];
    var g = e[v], w = t[v];
    if (o)
      var S = a ? o(w, g, v, t, e, l) : o(g, w, v, e, t, l);
    if (!(S === void 0 ? g === w || r(g, w, n, o, l) : S)) {
      h = !1;
      break;
    }
    y || (y = v == "constructor");
  }
  if (h && !y) {
    var b = e.constructor, O = t.constructor;
    b != O && "constructor" in e && "constructor" in t && !(typeof b == "function" && b instanceof b && typeof O == "function" && O instanceof O) && (h = !1);
  }
  return l.delete(e), l.delete(t), h;
}
var uh = 1, Ua = "[object Arguments]", qa = "[object Array]", Vo = "[object Object]", ch = Object.prototype, Ga = ch.hasOwnProperty;
function dh(e, t, n, o, r, l) {
  var a = kt(e), s = kt(t), i = a ? qa : Ka(e), u = s ? qa : Ka(t);
  i = i == Ua ? Vo : i, u = u == Ua ? Vo : u;
  var f = i == Vo, d = u == Vo, v = i == u;
  if (v && ur(e)) {
    if (!ur(t))
      return !1;
    a = !0, f = !1;
  }
  if (v && !f)
    return l || (l = new Gt()), a || Ll(e) ? Ci(e, t, n, o, r, l) : rh(e, t, i, n, o, r, l);
  if (!(n & uh)) {
    var m = f && Ga.call(e, "__wrapped__"), p = d && Ga.call(t, "__wrapped__");
    if (m || p) {
      var h = m ? e.value() : e, y = p ? t.value() : t;
      return l || (l = new Gt()), r(h, y, n, o, l);
    }
  }
  return v ? (l || (l = new Gt()), ih(e, t, n, o, r, l)) : !1;
}
function $r(e, t, n, o, r) {
  return e === t ? !0 : e == null || t == null || !bn(e) && !bn(t) ? e !== e && t !== t : dh(e, t, n, o, $r, r);
}
var fh = 1, ph = 2;
function vh(e, t, n, o) {
  var r = n.length, l = r, a = !o;
  if (e == null)
    return !l;
  for (e = Object(e); r--; ) {
    var s = n[r];
    if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1;
  }
  for (; ++r < l; ) {
    s = n[r];
    var i = s[0], u = e[i], f = s[1];
    if (a && s[2]) {
      if (u === void 0 && !(i in e))
        return !1;
    } else {
      var d = new Gt();
      if (o)
        var v = o(u, f, i, e, t, d);
      if (!(v === void 0 ? $r(f, u, fh | ph, o, d) : v))
        return !1;
    }
  }
  return !0;
}
function Si(e) {
  return e === e && !Pt(e);
}
function hh(e) {
  for (var t = Ml(e), n = t.length; n--; ) {
    var o = t[n], r = e[o];
    t[n] = [o, r, Si(r)];
  }
  return t;
}
function Ei(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function gh(e) {
  var t = hh(e);
  return t.length == 1 && t[0][2] ? Ei(t[0][0], t[0][1]) : function(n) {
    return n === e || vh(n, e, t);
  };
}
function mh(e, t) {
  return e != null && t in Object(e);
}
function bh(e, t, n) {
  t = Or(t, e);
  for (var o = -1, r = t.length, l = !1; ++o < r; ) {
    var a = Lo(t[o]);
    if (!(l = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return l || ++o != r ? l : (r = e == null ? 0 : e.length, !!r && Nl(r) && Sr(a, r) && (kt(e) || Oo(e)));
}
function Ti(e, t) {
  return e != null && bh(e, t, mh);
}
var yh = 1, wh = 2;
function Ch(e, t) {
  return Bl(e) && Si(t) ? Ei(Lo(e), t) : function(n) {
    var o = rt(n, e);
    return o === void 0 && o === t ? Ti(n, e) : $r(t, o, yh | wh);
  };
}
function Sh(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Eh(e) {
  return function(t) {
    return zl(t, e);
  };
}
function Th(e) {
  return Bl(e) ? Sh(Lo(e)) : Eh(e);
}
function Oi(e) {
  return typeof e == "function" ? e : e == null ? Al : typeof e == "object" ? kt(e) ? Ch(e[0], e[1]) : gh(e) : Th(e);
}
function Oh(e) {
  return function(t, n, o) {
    for (var r = -1, l = Object(t), a = o(t), s = a.length; s--; ) {
      var i = a[e ? s : ++r];
      if (n(l[i], i, l) === !1)
        break;
    }
    return t;
  };
}
var $h = Oh();
const $i = $h;
function kh(e, t) {
  return e && $i(e, t, Ml);
}
function Ph(e, t) {
  return function(n, o) {
    if (n == null)
      return n;
    if (!uo(n))
      return e(n, o);
    for (var r = n.length, l = t ? r : -1, a = Object(n); (t ? l-- : ++l < r) && o(a[l], l, a) !== !1; )
      ;
    return n;
  };
}
var _h = Ph(kh);
const Ah = _h;
var Ih = function() {
  return Kt.Date.now();
};
const Dr = Ih;
var xh = "Expected a function", Nh = Math.max, Rh = Math.min;
function Qn(e, t, n) {
  var o, r, l, a, s, i, u = 0, f = !1, d = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(xh);
  t = Qr(t) || 0, Pt(n) && (f = !!n.leading, d = "maxWait" in n, l = d ? Nh(Qr(n.maxWait) || 0, t) : l, v = "trailing" in n ? !!n.trailing : v);
  function m($) {
    var C = o, T = r;
    return o = r = void 0, u = $, a = e.apply(T, C), a;
  }
  function p($) {
    return u = $, s = setTimeout(g, t), f ? m($) : a;
  }
  function h($) {
    var C = $ - i, T = $ - u, A = t - C;
    return d ? Rh(A, l - T) : A;
  }
  function y($) {
    var C = $ - i, T = $ - u;
    return i === void 0 || C >= t || C < 0 || d && T >= l;
  }
  function g() {
    var $ = Dr();
    if (y($))
      return w($);
    s = setTimeout(g, h($));
  }
  function w($) {
    return s = void 0, v && o ? m($) : (o = r = void 0, a);
  }
  function S() {
    s !== void 0 && clearTimeout(s), u = 0, o = i = r = s = void 0;
  }
  function b() {
    return s === void 0 ? a : w(Dr());
  }
  function O() {
    var $ = Dr(), C = y($);
    if (o = arguments, r = this, i = $, C) {
      if (s === void 0)
        return p(i);
      if (d)
        return clearTimeout(s), s = setTimeout(g, t), m(i);
    }
    return s === void 0 && (s = setTimeout(g, t)), a;
  }
  return O.cancel = S, O.flush = b, O;
}
function ol(e, t, n) {
  (n !== void 0 && !Ro(e[t], n) || n === void 0 && !(t in e)) && xl(e, t, n);
}
function Lh(e) {
  return bn(e) && uo(e);
}
function rl(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function Mh(e) {
  return vf(e, gi(e));
}
function Bh(e, t, n, o, r, l, a) {
  var s = rl(e, n), i = rl(t, n), u = a.get(i);
  if (u) {
    ol(e, n, u);
    return;
  }
  var f = l ? l(s, i, n + "", e, t, a) : void 0, d = f === void 0;
  if (d) {
    var v = kt(i), m = !v && ur(i), p = !v && !m && Ll(i);
    f = i, v || m || p ? kt(s) ? f = s : Lh(s) ? f = Qd(s) : m ? (d = !1, f = hv(i, !0)) : p ? (d = !1, f = Rv(i, !0)) : f = [] : sv(i) || Oo(i) ? (f = s, Oo(s) ? f = Mh(s) : (!Pt(s) || Il(s)) && (f = Lv(i))) : d = !1;
  }
  d && (a.set(i, f), r(f, i, o, l, a), a.delete(i)), ol(e, n, f);
}
function ki(e, t, n, o, r) {
  e !== t && $i(t, function(l, a) {
    if (r || (r = new Gt()), Pt(l))
      Bh(e, t, a, n, ki, o, r);
    else {
      var s = o ? o(rl(e, a), l, a + "", e, t, r) : void 0;
      s === void 0 && (s = l), ol(e, a, s);
    }
  }, gi);
}
var Fh = Math.max, zh = Math.min;
function Hh(e, t, n) {
  var o = e == null ? 0 : e.length;
  if (!o)
    return -1;
  var r = o - 1;
  return n !== void 0 && (r = Ad(n), r = n < 0 ? Fh(o + r, 0) : zh(r, o - 1)), uf(e, Oi(t), r, !0);
}
function Dh(e, t) {
  var n = -1, o = uo(e) ? Array(e.length) : [];
  return Ah(e, function(r, l, a) {
    o[++n] = t(r, l, a);
  }), o;
}
function Vh(e, t) {
  var n = kt(e) ? ai : Dh;
  return n(e, Oi(t));
}
function Wh(e, t) {
  return Hl(Vh(e, t), 1);
}
function fr(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var r = e[t];
    o[r[0]] = r[1];
  }
  return o;
}
function pr(e, t) {
  return $r(e, t);
}
function Mo(e) {
  return e == null;
}
function Pi(e) {
  return e === void 0;
}
var Kh = bf(function(e, t, n) {
  ki(e, t, n);
});
const _i = Kh;
function Ai(e, t, n, o) {
  if (!Pt(e))
    return e;
  t = Or(t, e);
  for (var r = -1, l = t.length, a = l - 1, s = e; s != null && ++r < l; ) {
    var i = Lo(t[r]), u = n;
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return e;
    if (r != a) {
      var f = s[i];
      u = o ? o(f, i, s) : void 0, u === void 0 && (u = Pt(f) ? f : Sr(t[r + 1]) ? [] : {});
    }
    ui(s, i, u), s = s[i];
  }
  return e;
}
function jh(e, t, n) {
  for (var o = -1, r = t.length, l = {}; ++o < r; ) {
    var a = t[o], s = zl(e, a);
    n(s, a) && Ai(l, Or(a, e), s);
  }
  return l;
}
function Uh(e, t) {
  return jh(e, t, function(n, o) {
    return Ti(e, o);
  });
}
var qh = ev(function(e, t) {
  return e == null ? {} : Uh(e, t);
});
const Gh = qh;
function Yh(e, t, n) {
  return e == null ? e : Ai(e, t, n);
}
const Zn = (e) => e === void 0, yt = (e) => typeof e == "boolean", Ae = (e) => typeof e == "number", yn = (e) => typeof Element > "u" ? !1 : e instanceof Element, Xh = (e) => Ue(e) ? !Number.isNaN(Number(e)) : !1, Jh = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Ya = (e) => Object.keys(e), Qh = (e, t, n) => ({
  get value() {
    return rt(e, t, n);
  },
  set value(o) {
    Yh(e, t, o);
  }
});
class Ii extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function kr(e, t) {
  throw new Ii(`[${e}] ${t}`);
}
function Ke(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = Ue(e) ? new Ii(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const Zh = "utils/dom/style", xi = (e = "") => e.split(" ").filter((t) => !!t.trim()), Yn = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, Po = (e, t) => {
  !e || !t.trim() || e.classList.add(...xi(t));
}, wn = (e, t) => {
  !e || !t.trim() || e.classList.remove(...xi(t));
}, Un = (e, t) => {
  var n;
  if (!_e || !e || !t)
    return "";
  let o = nd(t);
  o === "float" && (o = "cssFloat");
  try {
    const r = e.style[o];
    if (r)
      return r;
    const l = (n = document.defaultView) == null ? void 0 : n.getComputedStyle(e, "");
    return l ? l[o] : "";
  } catch {
    return e.style[o];
  }
};
function Cn(e, t = "px") {
  if (!e)
    return "";
  if (Ae(e) || Xh(e))
    return `${e}${t}`;
  if (Ue(e))
    return e;
  Ke(Zh, "binding value must be a string or number");
}
let Wo;
const eg = (e) => {
  var t;
  if (!_e)
    return 0;
  if (Wo !== void 0)
    return Wo;
  const n = document.createElement("div");
  n.className = `${e}-scrollbar__wrap`, n.style.visibility = "hidden", n.style.width = "100px", n.style.position = "absolute", n.style.top = "-9999px", document.body.appendChild(n);
  const o = n.offsetWidth;
  n.style.overflow = "scroll";
  const r = document.createElement("div");
  r.style.width = "100%", n.appendChild(r);
  const l = r.offsetWidth;
  return (t = n.parentNode) == null || t.removeChild(n), Wo = o - l, Wo;
};
function tg(e, t) {
  if (!_e)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let o = t.offsetParent;
  for (; o !== null && e !== o && e.contains(o); )
    n.push(o), o = o.offsetParent;
  const r = t.offsetTop + n.reduce((i, u) => i + u.offsetTop, 0), l = r + t.offsetHeight, a = e.scrollTop, s = a + e.clientHeight;
  r < a ? e.scrollTop = r : l > s && (e.scrollTop = l - e.clientHeight);
}
const Ni = "__epPropKey", ce = (e) => e, ng = (e) => Ze(e) && !!e[Ni], Pr = (e, t) => {
  if (!Ze(e) || ng(e))
    return e;
  const { values: n, required: o, default: r, type: l, validator: a } = e, i = {
    type: l,
    required: !!o,
    validator: n || a ? (u) => {
      let f = !1, d = [];
      if (n && (d = Array.from(n), Bn(e, "default") && d.push(r), f || (f = d.includes(u))), a && (f || (f = a(u))), !f && d.length > 0) {
        const v = [...new Set(d)].map((m) => JSON.stringify(m)).join(", ");
        hc(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${v}], got value ${JSON.stringify(u)}.`);
      }
      return f;
    } : void 0,
    [Ni]: !0
  };
  return Bn(e, "default") && (i.default = r), i;
}, ye = (e) => fr(Object.entries(e).map(([t, n]) => [
  t,
  Pr(n, t)
])), Qe = ce([
  String,
  Object,
  Function
]), og = {
  Close: sr
}, Xa = {
  success: Ec,
  warning: Tc,
  error: Oc,
  info: $c
}, Ri = {
  validating: yr,
  success: kc,
  error: $l
}, tt = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t ?? {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, rg = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), lg = (e, t) => (e.install = (n) => {
  n.directive(t, e);
}, e), Ft = (e) => (e.install = rn, e), ln = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
}, He = "update:modelValue", eo = "change", ll = "input", Bo = ["", "default", "small", "large"], ag = {
  large: 40,
  default: 32,
  small: 24
}, sg = (e) => ag[e || "default"], Li = (e) => ["", ...Bo].includes(e);
var Qo = /* @__PURE__ */ ((e) => (e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL", e))(Qo || {});
const Mi = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e), ig = (e) => _e ? window.requestAnimationFrame(e) : setTimeout(e, 16), Dl = (e) => e, ug = ["class", "style"], cg = /^on[A-Z]/, dg = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = E(() => ((n == null ? void 0 : n.value) || []).concat(ug)), r = Te();
  return r ? E(() => {
    var l;
    return fr(Object.entries((l = r.proxy) == null ? void 0 : l.$attrs).filter(([a]) => !o.value.includes(a) && !(t && cg.test(a))));
  }) : (Ke("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), E(() => ({})));
}, _o = ({ from: e, replacement: t, scope: n, version: o, ref: r, type: l = "API" }, a) => {
  X(() => c(a), (s) => {
    s && Ke(n, `[${l}] ${e} is about to be deprecated in version ${o}, please use ${t} instead.
For more detail, please visit: ${r}
`);
  }, {
    immediate: !0
  });
};
var fg = {
  name: "en",
  el: {
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color."
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }
  }
};
const pg = (e) => (t, n) => vg(t, n, c(e)), vg = (e, t, n) => rt(n, e, e).replace(/\{(\w+)\}/g, (o, r) => {
  var l;
  return `${(l = t == null ? void 0 : t[r]) != null ? l : `{${r}}`}`;
}), hg = (e) => {
  const t = E(() => c(e).name), n = Xt(e) ? e : k(e);
  return {
    lang: t,
    locale: n,
    t: pg(e)
  };
}, Bi = Symbol("localeContextKey"), ct = (e) => {
  const t = e || pe(Bi, k());
  return hg(E(() => t.value || fg));
};
let gg;
function mg(e, t = gg) {
  t && t.active && t.effects.push(e);
}
const Ja = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Fi = (e) => (e.w & Sn) > 0, zi = (e) => (e.n & Sn) > 0, bg = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Sn;
}, yg = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      Fi(r) && !zi(r) ? r.delete(e) : t[n++] = r, r.w &= ~Sn, r.n &= ~Sn;
    }
    t.length = n;
  }
};
let bo = 0, Sn = 1;
const al = 30;
let $t;
Symbol(process.env.NODE_ENV !== "production" ? "iterate" : "");
Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class wg {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, mg(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = $t, n = Zo;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = $t, $t = this, Zo = !0, Sn = 1 << ++bo, bo <= al ? bg(this) : Qa(this), this.fn();
    } finally {
      bo <= al && yg(this), Sn = 1 << --bo, $t = this.parent, Zo = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    $t === this ? this.deferStop = !0 : this.active && (Qa(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Qa(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Zo = !0;
function Za(e, t) {
  let n = !1;
  bo <= al ? zi(e) || (e.n |= Sn, n = !Fi(e)) : n = !e.has($t), n && (e.add($t), $t.deps.push(e), process.env.NODE_ENV !== "production" && $t.onTrack && $t.onTrack(
    ni(
      {
        effect: $t
      },
      t
    )
  ));
}
function es(e, t) {
  const n = mn(e) ? e : [...e];
  for (const o of n)
    o.computed && ts(o, t);
  for (const o of n)
    o.computed || ts(o, t);
}
function ts(e, t) {
  (e !== $t || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(ni({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Qc)
);
function _r(e) {
  const t = e && e.__v_raw;
  return t ? _r(t) : e;
}
function Cg(e) {
  Zo && $t && (e = _r(e), process.env.NODE_ENV !== "production" ? Za(e.dep || (e.dep = Ja()), {
    target: e,
    type: "get",
    key: "value"
  }) : Za(e.dep || (e.dep = Ja())));
}
function Sg(e, t) {
  e = _r(e);
  const n = e.dep;
  n && (process.env.NODE_ENV !== "production" ? es(n, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : es(n));
}
class Eg {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new wg(t, () => {
      this._dirty || (this._dirty = !0, Sg(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = _r(this);
    return Cg(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
function Tg(e, t, n = !1) {
  let o, r;
  const l = lt(e);
  l ? (o = e, r = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : rn) : (o = e.get, r = e.set);
  const a = new Eg(o, r, l || !r, n);
  return process.env.NODE_ENV !== "production" && t && !n && (a.effect.onTrack = t.onTrack, a.effect.onTrigger = t.onTrigger), a;
}
const wo = "el", Og = "is-", _n = (e, t, n, o, r) => {
  let l = `${e}-${t}`;
  return n && (l += `-${n}`), o && (l += `__${o}`), r && (l += `--${r}`), l;
}, Hi = Symbol("namespaceContextKey"), Vl = (e) => {
  const t = e || (Te() ? pe(Hi, k(wo)) : k(wo));
  return E(() => c(t) || wo);
}, ne = (e, t) => {
  const n = Vl(t);
  return {
    namespace: n,
    b: (h = "") => _n(n.value, e, h, "", ""),
    e: (h) => h ? _n(n.value, e, "", h, "") : "",
    m: (h) => h ? _n(n.value, e, "", "", h) : "",
    be: (h, y) => h && y ? _n(n.value, e, h, y, "") : "",
    em: (h, y) => h && y ? _n(n.value, e, "", h, y) : "",
    bm: (h, y) => h && y ? _n(n.value, e, h, "", y) : "",
    bem: (h, y, g) => h && y && g ? _n(n.value, e, h, y, g) : "",
    is: (h, ...y) => {
      const g = y.length >= 1 ? y[0] : !0;
      return h && g ? `${Og}${h}` : "";
    },
    cssVar: (h) => {
      const y = {};
      for (const g in h)
        h[g] && (y[`--${n.value}-${g}`] = h[g]);
      return y;
    },
    cssVarName: (h) => `--${n.value}-${h}`,
    cssVarBlock: (h) => {
      const y = {};
      for (const g in h)
        h[g] && (y[`--${n.value}-${e}-${g}`] = h[g]);
      return y;
    },
    cssVarBlockName: (h) => `--${n.value}-${e}-${h}`
  };
}, $g = (e, t = {}) => {
  Xt(e) || kr("[useLockscreen]", "You need to pass a ref param to this function");
  const n = t.ns || ne("popup"), o = Tg(() => n.bm("parent", "hidden"));
  if (!_e || Yn(document.body, o.value))
    return;
  let r = 0, l = !1, a = "0";
  const s = () => {
    setTimeout(() => {
      wn(document == null ? void 0 : document.body, o.value), l && document && (document.body.style.width = a);
    }, 200);
  };
  X(e, (i) => {
    if (!i) {
      s();
      return;
    }
    l = !Yn(document.body, o.value), l && (a = document.body.style.width), r = eg(n.namespace.value);
    const u = document.documentElement.clientHeight < document.body.scrollHeight, f = Un(document.body, "overflowY");
    r > 0 && (u || f === "scroll") && l && (document.body.style.width = `calc(100% - ${r}px)`), Po(document.body, o.value);
  }), Ks(() => s());
}, kg = Pr({
  type: ce(Boolean),
  default: null
}), Pg = Pr({
  type: ce(Function)
}), Di = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], r = {
    [e]: kg,
    [n]: Pg
  };
  return {
    useModelToggle: ({
      indicator: a,
      toggleReason: s,
      shouldHideWhenRouteChanges: i,
      shouldProceed: u,
      onShow: f,
      onHide: d
    }) => {
      const v = Te(), { emit: m } = v, p = v.props, h = E(() => lt(p[n])), y = E(() => p[e] === null), g = (C) => {
        a.value !== !0 && (a.value = !0, s && (s.value = C), lt(f) && f(C));
      }, w = (C) => {
        a.value !== !1 && (a.value = !1, s && (s.value = C), lt(d) && d(C));
      }, S = (C) => {
        if (p.disabled === !0 || lt(u) && !u())
          return;
        const T = h.value && _e;
        T && m(t, !0), (y.value || !T) && g(C);
      }, b = (C) => {
        if (p.disabled === !0 || !_e)
          return;
        const T = h.value && _e;
        T && m(t, !1), (y.value || !T) && w(C);
      }, O = (C) => {
        yt(C) && (p.disabled && C ? h.value && m(t, !1) : a.value !== C && (C ? g() : w()));
      }, $ = () => {
        a.value ? b() : S();
      };
      return X(() => p[e], O), i && v.appContext.config.globalProperties.$route !== void 0 && X(() => ({
        ...v.proxy.$route
      }), () => {
        i.value && a.value && b();
      }), Re(() => {
        O(p[e]);
      }), {
        hide: b,
        show: S,
        toggle: $,
        hasUpdateHandler: h
      };
    },
    useModelToggleProps: r,
    useModelToggleEmits: o
  };
};
Di("modelValue");
const Vi = (e) => {
  const t = Te();
  return E(() => {
    var n, o;
    return (o = (n = t == null ? void 0 : t.proxy) == null ? void 0 : n.$props) == null ? void 0 : o[e];
  });
};
var wt = "top", Lt = "bottom", Mt = "right", Ct = "left", Wl = "auto", Fo = [wt, Lt, Mt, Ct], to = "start", Ao = "end", _g = "clippingParents", Wi = "viewport", mo = "popper", Ag = "reference", ns = Fo.reduce(function(e, t) {
  return e.concat([t + "-" + to, t + "-" + Ao]);
}, []), Ar = [].concat(Fo, [Wl]).reduce(function(e, t) {
  return e.concat([t, t + "-" + to, t + "-" + Ao]);
}, []), Ig = "beforeRead", xg = "read", Ng = "afterRead", Rg = "beforeMain", Lg = "main", Mg = "afterMain", Bg = "beforeWrite", Fg = "write", zg = "afterWrite", Hg = [Ig, xg, Ng, Rg, Lg, Mg, Bg, Fg, zg];
function Qt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function jt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function no(e) {
  var t = jt(e).Element;
  return e instanceof t || e instanceof Element;
}
function Nt(e) {
  var t = jt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Kl(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = jt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Dg(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, l = t.elements[n];
    !Nt(l) || !Qt(l) || (Object.assign(l.style, o), Object.keys(r).forEach(function(a) {
      var s = r[a];
      s === !1 ? l.removeAttribute(a) : l.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function Vg(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var r = t.elements[o], l = t.attributes[o] || {}, a = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), s = a.reduce(function(i, u) {
        return i[u] = "", i;
      }, {});
      !Nt(r) || !Qt(r) || (Object.assign(r.style, s), Object.keys(l).forEach(function(i) {
        r.removeAttribute(i);
      }));
    });
  };
}
var Ki = { name: "applyStyles", enabled: !0, phase: "write", fn: Dg, effect: Vg, requires: ["computeStyles"] };
function Yt(e) {
  return e.split("-")[0];
}
var Mn = Math.max, vr = Math.min, oo = Math.round;
function ro(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), o = 1, r = 1;
  if (Nt(e) && t) {
    var l = e.offsetHeight, a = e.offsetWidth;
    a > 0 && (o = oo(n.width) / a || 1), l > 0 && (r = oo(n.height) / l || 1);
  }
  return { width: n.width / o, height: n.height / r, top: n.top / r, right: n.right / o, bottom: n.bottom / r, left: n.left / o, x: n.left / o, y: n.top / r };
}
function jl(e) {
  var t = ro(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function ji(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Kl(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function an(e) {
  return jt(e).getComputedStyle(e);
}
function Wg(e) {
  return ["table", "td", "th"].indexOf(Qt(e)) >= 0;
}
function On(e) {
  return ((no(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ir(e) {
  return Qt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Kl(e) ? e.host : null) || On(e);
}
function os(e) {
  return !Nt(e) || an(e).position === "fixed" ? null : e.offsetParent;
}
function Kg(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && Nt(e)) {
    var o = an(e);
    if (o.position === "fixed")
      return null;
  }
  var r = Ir(e);
  for (Kl(r) && (r = r.host); Nt(r) && ["html", "body"].indexOf(Qt(r)) < 0; ) {
    var l = an(r);
    if (l.transform !== "none" || l.perspective !== "none" || l.contain === "paint" || ["transform", "perspective"].indexOf(l.willChange) !== -1 || t && l.willChange === "filter" || t && l.filter && l.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function zo(e) {
  for (var t = jt(e), n = os(e); n && Wg(n) && an(n).position === "static"; )
    n = os(n);
  return n && (Qt(n) === "html" || Qt(n) === "body" && an(n).position === "static") ? t : n || Kg(e) || t;
}
function Ul(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Co(e, t, n) {
  return Mn(e, vr(t, n));
}
function jg(e, t, n) {
  var o = Co(e, t, n);
  return o > n ? n : o;
}
function Ui() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function qi(e) {
  return Object.assign({}, Ui(), e);
}
function Gi(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var Ug = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, qi(typeof e != "number" ? e : Gi(e, Fo));
};
function qg(e) {
  var t, n = e.state, o = e.name, r = e.options, l = n.elements.arrow, a = n.modifiersData.popperOffsets, s = Yt(n.placement), i = Ul(s), u = [Ct, Mt].indexOf(s) >= 0, f = u ? "height" : "width";
  if (!(!l || !a)) {
    var d = Ug(r.padding, n), v = jl(l), m = i === "y" ? wt : Ct, p = i === "y" ? Lt : Mt, h = n.rects.reference[f] + n.rects.reference[i] - a[i] - n.rects.popper[f], y = a[i] - n.rects.reference[i], g = zo(l), w = g ? i === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, S = h / 2 - y / 2, b = d[m], O = w - v[f] - d[p], $ = w / 2 - v[f] / 2 + S, C = Co(b, $, O), T = i;
    n.modifiersData[o] = (t = {}, t[T] = C, t.centerOffset = C - $, t);
  }
}
function Gg(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || !ji(t.elements.popper, r) || (t.elements.arrow = r));
}
var Yg = { name: "arrow", enabled: !0, phase: "main", fn: qg, effect: Gg, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function lo(e) {
  return e.split("-")[1];
}
var Xg = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Jg(e) {
  var t = e.x, n = e.y, o = window, r = o.devicePixelRatio || 1;
  return { x: oo(t * r) / r || 0, y: oo(n * r) / r || 0 };
}
function rs(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, l = e.variation, a = e.offsets, s = e.position, i = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, d = e.isFixed, v = a.x, m = v === void 0 ? 0 : v, p = a.y, h = p === void 0 ? 0 : p, y = typeof f == "function" ? f({ x: m, y: h }) : { x: m, y: h };
  m = y.x, h = y.y;
  var g = a.hasOwnProperty("x"), w = a.hasOwnProperty("y"), S = Ct, b = wt, O = window;
  if (u) {
    var $ = zo(n), C = "clientHeight", T = "clientWidth";
    if ($ === jt(n) && ($ = On(n), an($).position !== "static" && s === "absolute" && (C = "scrollHeight", T = "scrollWidth")), $ = $, r === wt || (r === Ct || r === Mt) && l === Ao) {
      b = Lt;
      var A = d && $ === O && O.visualViewport ? O.visualViewport.height : $[C];
      h -= A - o.height, h *= i ? 1 : -1;
    }
    if (r === Ct || (r === wt || r === Lt) && l === Ao) {
      S = Mt;
      var F = d && $ === O && O.visualViewport ? O.visualViewport.width : $[T];
      m -= F - o.width, m *= i ? 1 : -1;
    }
  }
  var L = Object.assign({ position: s }, u && Xg), N = f === !0 ? Jg({ x: m, y: h }) : { x: m, y: h };
  if (m = N.x, h = N.y, i) {
    var Y;
    return Object.assign({}, L, (Y = {}, Y[b] = w ? "0" : "", Y[S] = g ? "0" : "", Y.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + h + "px)" : "translate3d(" + m + "px, " + h + "px, 0)", Y));
  }
  return Object.assign({}, L, (t = {}, t[b] = w ? h + "px" : "", t[S] = g ? m + "px" : "", t.transform = "", t));
}
function Qg(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, l = n.adaptive, a = l === void 0 ? !0 : l, s = n.roundOffsets, i = s === void 0 ? !0 : s, u = { placement: Yt(t.placement), variation: lo(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, rs(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: a, roundOffsets: i })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, rs(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: i })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Yi = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Qg, data: {} }, Ko = { passive: !0 };
function Zg(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, l = r === void 0 ? !0 : r, a = o.resize, s = a === void 0 ? !0 : a, i = jt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return l && u.forEach(function(f) {
    f.addEventListener("scroll", n.update, Ko);
  }), s && i.addEventListener("resize", n.update, Ko), function() {
    l && u.forEach(function(f) {
      f.removeEventListener("scroll", n.update, Ko);
    }), s && i.removeEventListener("resize", n.update, Ko);
  };
}
var Xi = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: Zg, data: {} }, em = { left: "right", right: "left", bottom: "top", top: "bottom" };
function er(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return em[t];
  });
}
var tm = { start: "end", end: "start" };
function ls(e) {
  return e.replace(/start|end/g, function(t) {
    return tm[t];
  });
}
function ql(e) {
  var t = jt(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function Gl(e) {
  return ro(On(e)).left + ql(e).scrollLeft;
}
function nm(e) {
  var t = jt(e), n = On(e), o = t.visualViewport, r = n.clientWidth, l = n.clientHeight, a = 0, s = 0;
  return o && (r = o.width, l = o.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = o.offsetLeft, s = o.offsetTop)), { width: r, height: l, x: a + Gl(e), y: s };
}
function om(e) {
  var t, n = On(e), o = ql(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, l = Mn(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = Mn(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), s = -o.scrollLeft + Gl(e), i = -o.scrollTop;
  return an(r || n).direction === "rtl" && (s += Mn(n.clientWidth, r ? r.clientWidth : 0) - l), { width: l, height: a, x: s, y: i };
}
function Yl(e) {
  var t = an(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function Ji(e) {
  return ["html", "body", "#document"].indexOf(Qt(e)) >= 0 ? e.ownerDocument.body : Nt(e) && Yl(e) ? e : Ji(Ir(e));
}
function So(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Ji(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), l = jt(o), a = r ? [l].concat(l.visualViewport || [], Yl(o) ? o : []) : o, s = t.concat(a);
  return r ? s : s.concat(So(Ir(a)));
}
function sl(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function rm(e) {
  var t = ro(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function as(e, t) {
  return t === Wi ? sl(nm(e)) : no(t) ? rm(t) : sl(om(On(e)));
}
function lm(e) {
  var t = So(Ir(e)), n = ["absolute", "fixed"].indexOf(an(e).position) >= 0, o = n && Nt(e) ? zo(e) : e;
  return no(o) ? t.filter(function(r) {
    return no(r) && ji(r, o) && Qt(r) !== "body";
  }) : [];
}
function am(e, t, n) {
  var o = t === "clippingParents" ? lm(e) : [].concat(t), r = [].concat(o, [n]), l = r[0], a = r.reduce(function(s, i) {
    var u = as(e, i);
    return s.top = Mn(u.top, s.top), s.right = vr(u.right, s.right), s.bottom = vr(u.bottom, s.bottom), s.left = Mn(u.left, s.left), s;
  }, as(e, l));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Qi(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? Yt(o) : null, l = o ? lo(o) : null, a = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, i;
  switch (r) {
    case wt:
      i = { x: a, y: t.y - n.height };
      break;
    case Lt:
      i = { x: a, y: t.y + t.height };
      break;
    case Mt:
      i = { x: t.x + t.width, y: s };
      break;
    case Ct:
      i = { x: t.x - n.width, y: s };
      break;
    default:
      i = { x: t.x, y: t.y };
  }
  var u = r ? Ul(r) : null;
  if (u != null) {
    var f = u === "y" ? "height" : "width";
    switch (l) {
      case to:
        i[u] = i[u] - (t[f] / 2 - n[f] / 2);
        break;
      case Ao:
        i[u] = i[u] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return i;
}
function Io(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, l = n.boundary, a = l === void 0 ? _g : l, s = n.rootBoundary, i = s === void 0 ? Wi : s, u = n.elementContext, f = u === void 0 ? mo : u, d = n.altBoundary, v = d === void 0 ? !1 : d, m = n.padding, p = m === void 0 ? 0 : m, h = qi(typeof p != "number" ? p : Gi(p, Fo)), y = f === mo ? Ag : mo, g = e.rects.popper, w = e.elements[v ? y : f], S = am(no(w) ? w : w.contextElement || On(e.elements.popper), a, i), b = ro(e.elements.reference), O = Qi({ reference: b, element: g, strategy: "absolute", placement: r }), $ = sl(Object.assign({}, g, O)), C = f === mo ? $ : b, T = { top: S.top - C.top + h.top, bottom: C.bottom - S.bottom + h.bottom, left: S.left - C.left + h.left, right: C.right - S.right + h.right }, A = e.modifiersData.offset;
  if (f === mo && A) {
    var F = A[r];
    Object.keys(T).forEach(function(L) {
      var N = [Mt, Lt].indexOf(L) >= 0 ? 1 : -1, Y = [wt, Lt].indexOf(L) >= 0 ? "y" : "x";
      T[L] += F[Y] * N;
    });
  }
  return T;
}
function sm(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, l = n.rootBoundary, a = n.padding, s = n.flipVariations, i = n.allowedAutoPlacements, u = i === void 0 ? Ar : i, f = lo(o), d = f ? s ? ns : ns.filter(function(p) {
    return lo(p) === f;
  }) : Fo, v = d.filter(function(p) {
    return u.indexOf(p) >= 0;
  });
  v.length === 0 && (v = d);
  var m = v.reduce(function(p, h) {
    return p[h] = Io(e, { placement: h, boundary: r, rootBoundary: l, padding: a })[Yt(h)], p;
  }, {});
  return Object.keys(m).sort(function(p, h) {
    return m[p] - m[h];
  });
}
function im(e) {
  if (Yt(e) === Wl)
    return [];
  var t = er(e);
  return [ls(e), t, ls(t)];
}
function um(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, l = r === void 0 ? !0 : r, a = n.altAxis, s = a === void 0 ? !0 : a, i = n.fallbackPlacements, u = n.padding, f = n.boundary, d = n.rootBoundary, v = n.altBoundary, m = n.flipVariations, p = m === void 0 ? !0 : m, h = n.allowedAutoPlacements, y = t.options.placement, g = Yt(y), w = g === y, S = i || (w || !p ? [er(y)] : im(y)), b = [y].concat(S).reduce(function(Ce, Oe) {
      return Ce.concat(Yt(Oe) === Wl ? sm(t, { placement: Oe, boundary: f, rootBoundary: d, padding: u, flipVariations: p, allowedAutoPlacements: h }) : Oe);
    }, []), O = t.rects.reference, $ = t.rects.popper, C = /* @__PURE__ */ new Map(), T = !0, A = b[0], F = 0; F < b.length; F++) {
      var L = b[F], N = Yt(L), Y = lo(L) === to, ee = [wt, Lt].indexOf(N) >= 0, J = ee ? "width" : "height", te = Io(t, { placement: L, boundary: f, rootBoundary: d, altBoundary: v, padding: u }), j = ee ? Y ? Mt : Ct : Y ? Lt : wt;
      O[J] > $[J] && (j = er(j));
      var le = er(j), x = [];
      if (l && x.push(te[N] <= 0), s && x.push(te[j] <= 0, te[le] <= 0), x.every(function(Ce) {
        return Ce;
      })) {
        A = L, T = !1;
        break;
      }
      C.set(L, x);
    }
    if (T)
      for (var U = p ? 3 : 1, ie = function(Ce) {
        var Oe = b.find(function($e) {
          var Le = C.get($e);
          if (Le)
            return Le.slice(0, Ce).every(function(Se) {
              return Se;
            });
        });
        if (Oe)
          return A = Oe, "break";
      }, de = U; de > 0; de--) {
        var we = ie(de);
        if (we === "break")
          break;
      }
    t.placement !== A && (t.modifiersData[o]._skip = !0, t.placement = A, t.reset = !0);
  }
}
var cm = { name: "flip", enabled: !0, phase: "main", fn: um, requiresIfExists: ["offset"], data: { _skip: !1 } };
function ss(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function is(e) {
  return [wt, Mt, Lt, Ct].some(function(t) {
    return e[t] >= 0;
  });
}
function dm(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, l = t.modifiersData.preventOverflow, a = Io(t, { elementContext: "reference" }), s = Io(t, { altBoundary: !0 }), i = ss(a, o), u = ss(s, r, l), f = is(i), d = is(u);
  t.modifiersData[n] = { referenceClippingOffsets: i, popperEscapeOffsets: u, isReferenceHidden: f, hasPopperEscaped: d }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": d });
}
var fm = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: dm };
function pm(e, t, n) {
  var o = Yt(e), r = [Ct, wt].indexOf(o) >= 0 ? -1 : 1, l = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, a = l[0], s = l[1];
  return a = a || 0, s = (s || 0) * r, [Ct, Mt].indexOf(o) >= 0 ? { x: s, y: a } : { x: a, y: s };
}
function vm(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, l = r === void 0 ? [0, 0] : r, a = Ar.reduce(function(f, d) {
    return f[d] = pm(d, t.rects, l), f;
  }, {}), s = a[t.placement], i = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = a;
}
var hm = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: vm };
function gm(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Qi({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var Zi = { name: "popperOffsets", enabled: !0, phase: "read", fn: gm, data: {} };
function mm(e) {
  return e === "x" ? "y" : "x";
}
function bm(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, l = r === void 0 ? !0 : r, a = n.altAxis, s = a === void 0 ? !1 : a, i = n.boundary, u = n.rootBoundary, f = n.altBoundary, d = n.padding, v = n.tether, m = v === void 0 ? !0 : v, p = n.tetherOffset, h = p === void 0 ? 0 : p, y = Io(t, { boundary: i, rootBoundary: u, padding: d, altBoundary: f }), g = Yt(t.placement), w = lo(t.placement), S = !w, b = Ul(g), O = mm(b), $ = t.modifiersData.popperOffsets, C = t.rects.reference, T = t.rects.popper, A = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, F = typeof A == "number" ? { mainAxis: A, altAxis: A } : Object.assign({ mainAxis: 0, altAxis: 0 }, A), L = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, N = { x: 0, y: 0 };
  if ($) {
    if (l) {
      var Y, ee = b === "y" ? wt : Ct, J = b === "y" ? Lt : Mt, te = b === "y" ? "height" : "width", j = $[b], le = j + y[ee], x = j - y[J], U = m ? -T[te] / 2 : 0, ie = w === to ? C[te] : T[te], de = w === to ? -T[te] : -C[te], we = t.elements.arrow, Ce = m && we ? jl(we) : { width: 0, height: 0 }, Oe = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ui(), $e = Oe[ee], Le = Oe[J], Se = Co(0, C[te], Ce[te]), Ve = S ? C[te] / 2 - U - Se - $e - F.mainAxis : ie - Se - $e - F.mainAxis, V = S ? -C[te] / 2 + U + Se + Le + F.mainAxis : de + Se + Le + F.mainAxis, oe = t.elements.arrow && zo(t.elements.arrow), Pe = oe ? b === "y" ? oe.clientTop || 0 : oe.clientLeft || 0 : 0, xe = (Y = L == null ? void 0 : L[b]) != null ? Y : 0, at = j + Ve - xe - Pe, dt = j + V - xe, Ye = Co(m ? vr(le, at) : le, j, m ? Mn(x, dt) : x);
      $[b] = Ye, N[b] = Ye - j;
    }
    if (s) {
      var _t, st = b === "x" ? wt : Ct, ft = b === "x" ? Lt : Mt, Xe = $[O], pt = O === "y" ? "height" : "width", ve = Xe + y[st], nt = Xe - y[ft], vt = [wt, Ct].indexOf(g) !== -1, H = (_t = L == null ? void 0 : L[O]) != null ? _t : 0, se = vt ? ve : Xe - C[pt] - T[pt] - H + F.altAxis, Ie = vt ? Xe + C[pt] + T[pt] - H - F.altAxis : nt, qe = m && vt ? jg(se, Xe, Ie) : Co(m ? se : ve, Xe, m ? Ie : nt);
      $[O] = qe, N[O] = qe - Xe;
    }
    t.modifiersData[o] = N;
  }
}
var ym = { name: "preventOverflow", enabled: !0, phase: "main", fn: bm, requiresIfExists: ["offset"] };
function wm(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Cm(e) {
  return e === jt(e) || !Nt(e) ? ql(e) : wm(e);
}
function Sm(e) {
  var t = e.getBoundingClientRect(), n = oo(t.width) / e.offsetWidth || 1, o = oo(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function Em(e, t, n) {
  n === void 0 && (n = !1);
  var o = Nt(t), r = Nt(t) && Sm(t), l = On(t), a = ro(e, r), s = { scrollLeft: 0, scrollTop: 0 }, i = { x: 0, y: 0 };
  return (o || !o && !n) && ((Qt(t) !== "body" || Yl(l)) && (s = Cm(t)), Nt(t) ? (i = ro(t, !0), i.x += t.clientLeft, i.y += t.clientTop) : l && (i.x = Gl(l))), { x: a.left + s.scrollLeft - i.x, y: a.top + s.scrollTop - i.y, width: a.width, height: a.height };
}
function Tm(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(l) {
    t.set(l.name, l);
  });
  function r(l) {
    n.add(l.name);
    var a = [].concat(l.requires || [], l.requiresIfExists || []);
    a.forEach(function(s) {
      if (!n.has(s)) {
        var i = t.get(s);
        i && r(i);
      }
    }), o.push(l);
  }
  return e.forEach(function(l) {
    n.has(l.name) || r(l);
  }), o;
}
function Om(e) {
  var t = Tm(e);
  return Hg.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function $m(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function km(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, { options: Object.assign({}, r.options, o.options), data: Object.assign({}, r.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var us = { placement: "bottom", modifiers: [], strategy: "absolute" };
function cs() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Xl(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, l = r === void 0 ? us : r;
  return function(a, s, i) {
    i === void 0 && (i = l);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, us, l), modifiersData: {}, elements: { reference: a, popper: s }, attributes: {}, styles: {} }, f = [], d = !1, v = { state: u, setOptions: function(h) {
      var y = typeof h == "function" ? h(u.options) : h;
      p(), u.options = Object.assign({}, l, u.options, y), u.scrollParents = { reference: no(a) ? So(a) : a.contextElement ? So(a.contextElement) : [], popper: So(s) };
      var g = Om(km([].concat(o, u.options.modifiers)));
      return u.orderedModifiers = g.filter(function(w) {
        return w.enabled;
      }), m(), v.update();
    }, forceUpdate: function() {
      if (!d) {
        var h = u.elements, y = h.reference, g = h.popper;
        if (cs(y, g)) {
          u.rects = { reference: Em(y, zo(g), u.options.strategy === "fixed"), popper: jl(g) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(T) {
            return u.modifiersData[T.name] = Object.assign({}, T.data);
          });
          for (var w = 0; w < u.orderedModifiers.length; w++) {
            if (u.reset === !0) {
              u.reset = !1, w = -1;
              continue;
            }
            var S = u.orderedModifiers[w], b = S.fn, O = S.options, $ = O === void 0 ? {} : O, C = S.name;
            typeof b == "function" && (u = b({ state: u, options: $, name: C, instance: v }) || u);
          }
        }
      }
    }, update: $m(function() {
      return new Promise(function(h) {
        v.forceUpdate(), h(u);
      });
    }), destroy: function() {
      p(), d = !0;
    } };
    if (!cs(a, s))
      return v;
    v.setOptions(i).then(function(h) {
      !d && i.onFirstUpdate && i.onFirstUpdate(h);
    });
    function m() {
      u.orderedModifiers.forEach(function(h) {
        var y = h.name, g = h.options, w = g === void 0 ? {} : g, S = h.effect;
        if (typeof S == "function") {
          var b = S({ state: u, name: y, instance: v, options: w }), O = function() {
          };
          f.push(b || O);
        }
      });
    }
    function p() {
      f.forEach(function(h) {
        return h();
      }), f = [];
    }
    return v;
  };
}
Xl();
var Pm = [Xi, Zi, Yi, Ki];
Xl({ defaultModifiers: Pm });
var _m = [Xi, Zi, Yi, Ki, hm, cm, ym, Yg, fm], eu = Xl({ defaultModifiers: _m });
const Am = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: i }) => {
      const u = Im(i);
      Object.assign(a.value, u);
    },
    requires: ["computeStyles"]
  }, r = E(() => {
    const { onFirstUpdate: i, placement: u, strategy: f, modifiers: d } = c(n);
    return {
      onFirstUpdate: i,
      placement: u || "bottom",
      strategy: f || "absolute",
      modifiers: [
        ...d || [],
        o,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), l = Rn(), a = k({
    styles: {
      popper: {
        position: c(r).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), s = () => {
    l.value && (l.value.destroy(), l.value = void 0);
  };
  return X(r, (i) => {
    const u = c(l);
    u && u.setOptions(i);
  }, {
    deep: !0
  }), X([e, t], ([i, u]) => {
    s(), !(!i || !u) && (l.value = eu(i, u, c(r)));
  }), Bt(() => {
    s();
  }), {
    state: E(() => {
      var i;
      return { ...((i = c(l)) == null ? void 0 : i.state) || {} };
    }),
    styles: E(() => c(a).styles),
    attributes: E(() => c(a).attributes),
    update: () => {
      var i;
      return (i = c(l)) == null ? void 0 : i.update();
    },
    forceUpdate: () => {
      var i;
      return (i = c(l)) == null ? void 0 : i.forceUpdate();
    },
    instanceRef: E(() => c(l))
  };
};
function Im(e) {
  const t = Object.keys(e.elements), n = fr(t.map((r) => [r, e.styles[r] || {}])), o = fr(t.map((r) => [r, e.attributes[r]]));
  return {
    styles: n,
    attributes: o
  };
}
const xm = (e) => {
  if (!e)
    return { onClick: rn, onMousedown: rn, onMouseup: rn };
  let t = !1, n = !1;
  return { onClick: (a) => {
    t && n && e(a), t = n = !1;
  }, onMousedown: (a) => {
    t = a.target === a.currentTarget;
  }, onMouseup: (a) => {
    n = a.target === a.currentTarget;
  } };
};
function ds() {
  let e;
  const t = (o, r) => {
    n(), e = window.setTimeout(o, r);
  }, n = () => window.clearTimeout(e);
  return wr(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const il = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, Nm = Symbol("elIdInjection"), tu = () => Te() ? pe(Nm, il) : il, En = (e) => {
  const t = tu();
  !_e && t === il && Ke("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = Vl();
  return E(() => c(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
};
let qn = [];
const fs = (e) => {
  const t = e;
  t.key === ln.esc && qn.forEach((n) => n(t));
}, Rm = (e) => {
  Re(() => {
    qn.length === 0 && document.addEventListener("keydown", fs), _e && qn.push(e);
  }), Bt(() => {
    qn = qn.filter((t) => t !== e), qn.length === 0 && _e && document.removeEventListener("keydown", fs);
  });
};
let ps;
const nu = () => {
  const e = Vl(), t = tu(), n = E(() => `${e.value}-popper-container-${t.prefix}`), o = E(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, Lm = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, Mm = () => {
  const { id: e, selector: t } = nu();
  return Tl(() => {
    _e && (process.env.NODE_ENV === "test" || !ps && !document.body.querySelector(t.value)) && (ps = Lm(e.value));
  }), {
    id: e,
    selector: t
  };
}, Bm = ye({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  }
}), ou = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: o,
  close: r
}) => {
  const { registerTimeout: l } = ds(), {
    registerTimeout: a,
    cancelTimeout: s
  } = ds();
  return {
    onOpen: (f) => {
      l(() => {
        o(f);
        const d = c(n);
        Ae(d) && d > 0 && a(() => {
          r(f);
        }, d);
      }, c(e));
    },
    onClose: (f) => {
      s(), l(() => {
        r(f);
      }, c(t));
    }
  };
}, ru = Symbol("elForwardRef"), Fm = (e) => {
  Ge(ru, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, zm = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), vs = k(0), lu = 2e3, au = Symbol("zIndexContextKey"), xr = (e) => {
  const t = e || (Te() ? pe(au, void 0) : void 0), n = E(() => {
    const l = c(t);
    return Ae(l) ? l : lu;
  }), o = E(() => n.value + vs.value);
  return {
    initialZIndex: n,
    currentZIndex: o,
    nextZIndex: () => (vs.value++, o.value)
  };
};
function Hm(e) {
  const t = k();
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: r, selectionEnd: l, value: a } = e.value;
    if (r == null || l == null)
      return;
    const s = a.slice(0, Math.max(0, r)), i = a.slice(Math.max(0, l));
    t.value = {
      selectionStart: r,
      selectionEnd: l,
      value: a,
      beforeTxt: s,
      afterTxt: i
    };
  }
  function o() {
    if (e.value == null || t.value == null)
      return;
    const { value: r } = e.value, { beforeTxt: l, afterTxt: a, selectionStart: s } = t.value;
    if (l == null || a == null || s == null)
      return;
    let i = r.length;
    if (r.endsWith(a))
      i = r.length - a.length;
    else if (r.startsWith(l))
      i = l.length;
    else {
      const u = l[s - 1], f = r.indexOf(u, s - 1);
      f !== -1 && (i = f + 1);
    }
    e.value.setSelectionRange(i, i);
  }
  return [n, o];
}
const Wn = Pr({
  type: String,
  values: Bo,
  required: !1
}), su = Symbol("size"), Dm = () => {
  const e = pe(su, {});
  return E(() => c(e.size) || "");
};
function Vm(e, { afterFocus: t, beforeBlur: n, afterBlur: o } = {}) {
  const r = Te(), { emit: l } = r, a = Rn(), s = k(!1), i = (d) => {
    s.value || (s.value = !0, l("focus", d), t == null || t());
  }, u = (d) => {
    var v;
    lt(n) && n(d) || d.relatedTarget && ((v = a.value) != null && v.contains(d.relatedTarget)) || (s.value = !1, l("blur", d), o == null || o());
  }, f = () => {
    var d;
    (d = e.value) == null || d.focus();
  };
  return X(a, (d) => {
    d && d.setAttribute("tabindex", "-1");
  }), qt(a, "click", f), {
    wrapperRef: a,
    isFocused: s,
    handleFocus: i,
    handleBlur: u
  };
}
const iu = Symbol(), hr = k();
function Nr(e, t = void 0) {
  const n = Te() ? pe(iu, hr) : hr;
  return e ? E(() => {
    var o, r;
    return (r = (o = n.value) == null ? void 0 : o[e]) != null ? r : t;
  }) : n;
}
function uu(e, t) {
  const n = Nr(), o = ne(e, E(() => {
    var s;
    return ((s = n.value) == null ? void 0 : s.namespace) || wo;
  })), r = ct(E(() => {
    var s;
    return (s = n.value) == null ? void 0 : s.locale;
  })), l = xr(E(() => {
    var s;
    return ((s = n.value) == null ? void 0 : s.zIndex) || lu;
  })), a = E(() => {
    var s;
    return c(t) || ((s = n.value) == null ? void 0 : s.size) || "";
  });
  return Wm(E(() => c(n) || {})), {
    ns: o,
    locale: r,
    zIndex: l,
    size: a
  };
}
const Wm = (e, t, n = !1) => {
  var o;
  const r = !!Te(), l = r ? Nr() : void 0, a = (o = t == null ? void 0 : t.provide) != null ? o : r ? Ge : void 0;
  if (!a) {
    Ke("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const s = E(() => {
    const i = c(e);
    return l != null && l.value ? Km(l.value, i) : i;
  });
  return a(iu, s), a(Bi, E(() => s.value.locale)), a(Hi, E(() => s.value.namespace)), a(au, E(() => s.value.zIndex)), a(su, {
    size: E(() => s.value.size || "")
  }), (n || !hr.value) && (hr.value = s.value), s;
}, Km = (e, t) => {
  var n;
  const o = [.../* @__PURE__ */ new Set([...Ya(e), ...Ya(t)])], r = {};
  for (const l of o)
    r[l] = (n = t[l]) != null ? n : e[l];
  return r;
};
var ue = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
};
const jm = ye({
  size: {
    type: ce([Number, String])
  },
  color: {
    type: String
  }
}), Um = z({
  name: "ElIcon",
  inheritAttrs: !1
}), qm = /* @__PURE__ */ z({
  ...Um,
  props: jm,
  setup(e) {
    const t = e, n = ne("icon"), o = E(() => {
      const { size: r, color: l } = t;
      return !r && !l ? {} : {
        fontSize: Zn(r) ? void 0 : Cn(r),
        "--color": l
      };
    });
    return (r, l) => (P(), R("i", bt({
      class: c(n).b(),
      style: c(o)
    }, r.$attrs), [
      Z(r.$slots, "default")
    ], 16));
  }
});
var Gm = /* @__PURE__ */ ue(qm, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const Be = tt(Gm), Jl = Symbol("formContextKey"), gr = Symbol("formItemContextKey"), sn = (e, t = {}) => {
  const n = k(void 0), o = t.prop ? n : Vi("size"), r = t.global ? n : Dm(), l = t.form ? { size: void 0 } : pe(Jl, void 0), a = t.formItem ? { size: void 0 } : pe(gr, void 0);
  return E(() => o.value || c(e) || (a == null ? void 0 : a.size) || (l == null ? void 0 : l.size) || r.value || "");
}, co = (e) => {
  const t = Vi("disabled"), n = pe(Jl, void 0);
  return E(() => t.value || c(e) || (n == null ? void 0 : n.disabled) || !1);
}, $n = () => {
  const e = pe(Jl, void 0), t = pe(gr, void 0);
  return {
    form: e,
    formItem: t
  };
}, Ho = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: o
}) => {
  n || (n = k(!1)), o || (o = k(!1));
  const r = k();
  let l;
  const a = E(() => {
    var s;
    return !!(!e.label && t && t.inputIds && ((s = t.inputIds) == null ? void 0 : s.length) <= 1);
  });
  return Re(() => {
    l = X([Dt(e, "id"), n], ([s, i]) => {
      const u = s ?? (i ? void 0 : En().value);
      u !== r.value && (t != null && t.removeInputId && (r.value && t.removeInputId(r.value), !(o != null && o.value) && !i && u && t.addInputId(u)), r.value = u);
    }, { immediate: !0 });
  }), br(() => {
    l && l(), t != null && t.removeInputId && r.value && t.removeInputId(r.value);
  }), {
    isLabeledByFormItem: a,
    inputId: r
  };
};
let zt;
const Ym = `
  height:0 !important;
  visibility:hidden !important;
  ${Xc() ? "" : "overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, Xm = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing"
];
function Jm(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), r = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: Xm.map((a) => `${a}:${t.getPropertyValue(a)}`).join(";"), paddingSize: o, borderSize: r, boxSizing: n };
}
function hs(e, t = 1, n) {
  var o;
  zt || (zt = document.createElement("textarea"), document.body.appendChild(zt));
  const { paddingSize: r, borderSize: l, boxSizing: a, contextStyle: s } = Jm(e);
  zt.setAttribute("style", `${s};${Ym}`), zt.value = e.value || e.placeholder || "";
  let i = zt.scrollHeight;
  const u = {};
  a === "border-box" ? i = i + l : a === "content-box" && (i = i - r), zt.value = "";
  const f = zt.scrollHeight - r;
  if (Ae(t)) {
    let d = f * t;
    a === "border-box" && (d = d + r + l), i = Math.max(d, i), u.minHeight = `${d}px`;
  }
  if (Ae(n)) {
    let d = f * n;
    a === "border-box" && (d = d + r + l), i = Math.min(d, i);
  }
  return u.height = `${i}px`, (o = zt.parentNode) == null || o.removeChild(zt), zt = void 0, u;
}
const Qm = ye({
  id: {
    type: String,
    default: void 0
  },
  size: Wn,
  disabled: Boolean,
  modelValue: {
    type: ce([
      String,
      Number,
      Object
    ]),
    default: ""
  },
  type: {
    type: String,
    default: "text"
  },
  resize: {
    type: String,
    values: ["none", "both", "horizontal", "vertical"]
  },
  autosize: {
    type: ce([Boolean, Object]),
    default: !1
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  },
  placeholder: {
    type: String
  },
  form: {
    type: String
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  showPassword: {
    type: Boolean,
    default: !1
  },
  showWordLimit: {
    type: Boolean,
    default: !1
  },
  suffixIcon: {
    type: Qe
  },
  prefixIcon: {
    type: Qe
  },
  containerRole: {
    type: String,
    default: void 0
  },
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  inputStyle: {
    type: ce([Object, Array, String]),
    default: () => Dl({})
  },
  autofocus: {
    type: Boolean,
    default: !1
  }
}), Zm = {
  [He]: (e) => Ue(e),
  input: (e) => Ue(e),
  change: (e) => Ue(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, eb = ["role"], tb = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus"], nb = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus"], ob = z({
  name: "ElInput",
  inheritAttrs: !1
}), rb = /* @__PURE__ */ z({
  ...ob,
  props: Qm,
  emits: Zm,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = Us(), l = No(), a = E(() => {
      const H = {};
      return o.containerRole === "combobox" && (H["aria-haspopup"] = r["aria-haspopup"], H["aria-owns"] = r["aria-owns"], H["aria-expanded"] = r["aria-expanded"]), H;
    }), s = E(() => [
      o.type === "textarea" ? y.b() : h.b(),
      h.m(m.value),
      h.is("disabled", p.value),
      h.is("exceed", Ce.value),
      {
        [h.b("group")]: l.prepend || l.append,
        [h.bm("group", "append")]: l.append,
        [h.bm("group", "prepend")]: l.prepend,
        [h.m("prefix")]: l.prefix || o.prefixIcon,
        [h.m("suffix")]: l.suffix || o.suffixIcon || o.clearable || o.showPassword,
        [h.bm("suffix", "password-clear")]: U.value && ie.value
      },
      r.class
    ]), i = E(() => [
      h.e("wrapper"),
      h.is("focus", F.value)
    ]), u = dg({
      excludeKeys: E(() => Object.keys(a.value))
    }), { form: f, formItem: d } = $n(), { inputId: v } = Ho(o, {
      formItemContext: d
    }), m = sn(), p = co(), h = ne("input"), y = ne("textarea"), g = Rn(), w = Rn(), S = k(!1), b = k(!1), O = k(!1), $ = k(), C = Rn(o.inputStyle), T = E(() => g.value || w.value), { wrapperRef: A, isFocused: F, handleFocus: L, handleBlur: N } = Vm(T, {
      afterBlur() {
        var H;
        o.validateEvent && ((H = d == null ? void 0 : d.validate) == null || H.call(d, "blur").catch((se) => Ke(se)));
      }
    }), Y = E(() => {
      var H;
      return (H = f == null ? void 0 : f.statusIcon) != null ? H : !1;
    }), ee = E(() => (d == null ? void 0 : d.validateState) || ""), J = E(() => ee.value && Ri[ee.value]), te = E(() => O.value ? Pc : _c), j = E(() => [
      r.style,
      o.inputStyle
    ]), le = E(() => [
      o.inputStyle,
      C.value,
      { resize: o.resize }
    ]), x = E(() => Mo(o.modelValue) ? "" : String(o.modelValue)), U = E(() => o.clearable && !p.value && !o.readonly && !!x.value && (F.value || S.value)), ie = E(() => o.showPassword && !p.value && !o.readonly && !!x.value && (!!x.value || F.value)), de = E(() => o.showWordLimit && !!u.value.maxlength && (o.type === "text" || o.type === "textarea") && !p.value && !o.readonly && !o.showPassword), we = E(() => x.value.length), Ce = E(() => !!de.value && we.value > Number(u.value.maxlength)), Oe = E(() => !!l.suffix || !!o.suffixIcon || U.value || o.showPassword || de.value || !!ee.value && Y.value), [$e, Le] = Hm(g);
    Jn(w, (H) => {
      if (V(), !de.value || o.resize !== "both")
        return;
      const se = H[0], { width: Ie } = se.contentRect;
      $.value = {
        right: `calc(100% - ${Ie + 15 + 6}px)`
      };
    });
    const Se = () => {
      const { type: H, autosize: se } = o;
      if (!(!_e || H !== "textarea" || !w.value))
        if (se) {
          const Ie = Ze(se) ? se.minRows : void 0, qe = Ze(se) ? se.maxRows : void 0, en = hs(w.value, Ie, qe);
          C.value = {
            overflowY: "hidden",
            ...en
          }, me(() => {
            w.value.offsetHeight, C.value = en;
          });
        } else
          C.value = {
            minHeight: hs(w.value).minHeight
          };
    }, V = ((H) => {
      let se = !1;
      return () => {
        var Ie;
        if (se || !o.autosize)
          return;
        ((Ie = w.value) == null ? void 0 : Ie.offsetParent) === null || (H(), se = !0);
      };
    })(Se), oe = () => {
      const H = T.value, se = o.formatter ? o.formatter(x.value) : x.value;
      !H || H.value === se || (H.value = se);
    }, Pe = async (H) => {
      $e();
      let { value: se } = H.target;
      if (o.formatter && (se = o.parser ? o.parser(se) : se), !b.value) {
        if (se === x.value) {
          oe();
          return;
        }
        n(He, se), n("input", se), await me(), oe(), Le();
      }
    }, xe = (H) => {
      n("change", H.target.value);
    }, at = (H) => {
      n("compositionstart", H), b.value = !0;
    }, dt = (H) => {
      var se;
      n("compositionupdate", H);
      const Ie = (se = H.target) == null ? void 0 : se.value, qe = Ie[Ie.length - 1] || "";
      b.value = !Mi(qe);
    }, Ye = (H) => {
      n("compositionend", H), b.value && (b.value = !1, Pe(H));
    }, _t = () => {
      O.value = !O.value, st();
    }, st = async () => {
      var H;
      await me(), (H = T.value) == null || H.focus();
    }, ft = () => {
      var H;
      return (H = T.value) == null ? void 0 : H.blur();
    }, Xe = (H) => {
      S.value = !1, n("mouseleave", H);
    }, pt = (H) => {
      S.value = !0, n("mouseenter", H);
    }, ve = (H) => {
      n("keydown", H);
    }, nt = () => {
      var H;
      (H = T.value) == null || H.select();
    }, vt = () => {
      n(He, ""), n("change", ""), n("clear"), n("input", "");
    };
    return X(() => o.modelValue, () => {
      var H;
      me(() => Se()), o.validateEvent && ((H = d == null ? void 0 : d.validate) == null || H.call(d, "change").catch((se) => Ke(se)));
    }), X(x, () => oe()), X(() => o.type, async () => {
      await me(), oe(), Se();
    }), Re(() => {
      !o.formatter && o.parser && Ke("ElInput", "If you set the parser, you also need to set the formatter."), oe(), me(Se);
    }), t({
      input: g,
      textarea: w,
      ref: T,
      textareaStyle: le,
      autosize: Dt(o, "autosize"),
      focus: st,
      blur: ft,
      select: nt,
      clear: vt,
      resizeTextarea: Se
    }), (H, se) => Fe((P(), R("div", bt(c(a), {
      class: c(s),
      style: c(j),
      role: H.containerRole,
      onMouseenter: pt,
      onMouseleave: Xe
    }), [
      W(" input "),
      H.type !== "textarea" ? (P(), R(ze, { key: 0 }, [
        W(" prepend slot "),
        H.$slots.prepend ? (P(), R("div", {
          key: 0,
          class: I(c(h).be("group", "prepend"))
        }, [
          Z(H.$slots, "prepend")
        ], 2)) : W("v-if", !0),
        B("div", {
          ref_key: "wrapperRef",
          ref: A,
          class: I(c(i))
        }, [
          W(" prefix slot "),
          H.$slots.prefix || H.prefixIcon ? (P(), R("span", {
            key: 0,
            class: I(c(h).e("prefix"))
          }, [
            B("span", {
              class: I(c(h).e("prefix-inner"))
            }, [
              Z(H.$slots, "prefix"),
              H.prefixIcon ? (P(), K(c(Be), {
                key: 0,
                class: I(c(h).e("icon"))
              }, {
                default: D(() => [
                  (P(), K(je(H.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : W("v-if", !0)
            ], 2)
          ], 2)) : W("v-if", !0),
          B("input", bt({
            id: c(v),
            ref_key: "input",
            ref: g,
            class: c(h).e("inner")
          }, c(u), {
            type: H.showPassword ? O.value ? "text" : "password" : H.type,
            disabled: c(p),
            formatter: H.formatter,
            parser: H.parser,
            readonly: H.readonly,
            autocomplete: H.autocomplete,
            tabindex: H.tabindex,
            "aria-label": H.label,
            placeholder: H.placeholder,
            style: H.inputStyle,
            form: o.form,
            autofocus: o.autofocus,
            onCompositionstart: at,
            onCompositionupdate: dt,
            onCompositionend: Ye,
            onInput: Pe,
            onFocus: se[0] || (se[0] = (...Ie) => c(L) && c(L)(...Ie)),
            onBlur: se[1] || (se[1] = (...Ie) => c(N) && c(N)(...Ie)),
            onChange: xe,
            onKeydown: ve
          }), null, 16, tb),
          W(" suffix slot "),
          c(Oe) ? (P(), R("span", {
            key: 1,
            class: I(c(h).e("suffix"))
          }, [
            B("span", {
              class: I(c(h).e("suffix-inner"))
            }, [
              !c(U) || !c(ie) || !c(de) ? (P(), R(ze, { key: 0 }, [
                Z(H.$slots, "suffix"),
                H.suffixIcon ? (P(), K(c(Be), {
                  key: 0,
                  class: I(c(h).e("icon"))
                }, {
                  default: D(() => [
                    (P(), K(je(H.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : W("v-if", !0)
              ], 64)) : W("v-if", !0),
              c(U) ? (P(), K(c(Be), {
                key: 1,
                class: I([c(h).e("icon"), c(h).e("clear")]),
                onMousedown: De(c(rn), ["prevent"]),
                onClick: vt
              }, {
                default: D(() => [
                  G(c($l))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : W("v-if", !0),
              c(ie) ? (P(), K(c(Be), {
                key: 2,
                class: I([c(h).e("icon"), c(h).e("password")]),
                onClick: _t
              }, {
                default: D(() => [
                  (P(), K(je(c(te))))
                ]),
                _: 1
              }, 8, ["class"])) : W("v-if", !0),
              c(de) ? (P(), R("span", {
                key: 3,
                class: I(c(h).e("count"))
              }, [
                B("span", {
                  class: I(c(h).e("count-inner"))
                }, ge(c(we)) + " / " + ge(c(u).maxlength), 3)
              ], 2)) : W("v-if", !0),
              c(ee) && c(J) && c(Y) ? (P(), K(c(Be), {
                key: 4,
                class: I([
                  c(h).e("icon"),
                  c(h).e("validateIcon"),
                  c(h).is("loading", c(ee) === "validating")
                ])
              }, {
                default: D(() => [
                  (P(), K(je(c(J))))
                ]),
                _: 1
              }, 8, ["class"])) : W("v-if", !0)
            ], 2)
          ], 2)) : W("v-if", !0)
        ], 2),
        W(" append slot "),
        H.$slots.append ? (P(), R("div", {
          key: 1,
          class: I(c(h).be("group", "append"))
        }, [
          Z(H.$slots, "append")
        ], 2)) : W("v-if", !0)
      ], 64)) : (P(), R(ze, { key: 1 }, [
        W(" textarea "),
        B("textarea", bt({
          id: c(v),
          ref_key: "textarea",
          ref: w,
          class: c(y).e("inner")
        }, c(u), {
          tabindex: H.tabindex,
          disabled: c(p),
          readonly: H.readonly,
          autocomplete: H.autocomplete,
          style: c(le),
          "aria-label": H.label,
          placeholder: H.placeholder,
          form: o.form,
          autofocus: o.autofocus,
          onCompositionstart: at,
          onCompositionupdate: dt,
          onCompositionend: Ye,
          onInput: Pe,
          onFocus: se[2] || (se[2] = (...Ie) => c(L) && c(L)(...Ie)),
          onBlur: se[3] || (se[3] = (...Ie) => c(N) && c(N)(...Ie)),
          onChange: xe,
          onKeydown: ve
        }), null, 16, nb),
        c(de) ? (P(), R("span", {
          key: 0,
          style: ke($.value),
          class: I(c(h).e("count"))
        }, ge(c(we)) + " / " + ge(c(u).maxlength), 7)) : W("v-if", !0)
      ], 64))
    ], 16, eb)), [
      [Rt, H.type !== "hidden"]
    ]);
  }
});
var lb = /* @__PURE__ */ ue(rb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const cu = tt(lb), Gn = 4, ab = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
}, sb = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), du = Symbol("scrollbarContextKey"), ib = ye({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), ub = "Thumb", cb = /* @__PURE__ */ z({
  __name: "thumb",
  props: ib,
  setup(e) {
    const t = e, n = pe(du), o = ne("scrollbar");
    n || kr(ub, "can not inject scrollbar context");
    const r = k(), l = k(), a = k({}), s = k(!1);
    let i = !1, u = !1, f = _e ? document.onselectstart : null;
    const d = E(() => ab[t.vertical ? "vertical" : "horizontal"]), v = E(() => sb({
      size: t.size,
      move: t.move,
      bar: d.value
    })), m = E(() => r.value[d.value.offset] ** 2 / n.wrapElement[d.value.scrollSize] / t.ratio / l.value[d.value.offset]), p = ($) => {
      var C;
      if ($.stopPropagation(), $.ctrlKey || [1, 2].includes($.button))
        return;
      (C = window.getSelection()) == null || C.removeAllRanges(), y($);
      const T = $.currentTarget;
      T && (a.value[d.value.axis] = T[d.value.offset] - ($[d.value.client] - T.getBoundingClientRect()[d.value.direction]));
    }, h = ($) => {
      if (!l.value || !r.value || !n.wrapElement)
        return;
      const C = Math.abs($.target.getBoundingClientRect()[d.value.direction] - $[d.value.client]), T = l.value[d.value.offset] / 2, A = (C - T) * 100 * m.value / r.value[d.value.offset];
      n.wrapElement[d.value.scroll] = A * n.wrapElement[d.value.scrollSize] / 100;
    }, y = ($) => {
      $.stopImmediatePropagation(), i = !0, document.addEventListener("mousemove", g), document.addEventListener("mouseup", w), f = document.onselectstart, document.onselectstart = () => !1;
    }, g = ($) => {
      if (!r.value || !l.value || i === !1)
        return;
      const C = a.value[d.value.axis];
      if (!C)
        return;
      const T = (r.value.getBoundingClientRect()[d.value.direction] - $[d.value.client]) * -1, A = l.value[d.value.offset] - C, F = (T - A) * 100 * m.value / r.value[d.value.offset];
      n.wrapElement[d.value.scroll] = F * n.wrapElement[d.value.scrollSize] / 100;
    }, w = () => {
      i = !1, a.value[d.value.axis] = 0, document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", w), O(), u && (s.value = !1);
    }, S = () => {
      u = !1, s.value = !!t.size;
    }, b = () => {
      u = !0, s.value = i;
    };
    Bt(() => {
      O(), document.removeEventListener("mouseup", w);
    });
    const O = () => {
      document.onselectstart !== f && (document.onselectstart = f);
    };
    return qt(Dt(n, "scrollbarElement"), "mousemove", S), qt(Dt(n, "scrollbarElement"), "mouseleave", b), ($, C) => (P(), K(gn, {
      name: c(o).b("fade"),
      persisted: ""
    }, {
      default: D(() => [
        Fe(B("div", {
          ref_key: "instance",
          ref: r,
          class: I([c(o).e("bar"), c(o).is(c(d).key)]),
          onMousedown: h
        }, [
          B("div", {
            ref_key: "thumb",
            ref: l,
            class: I(c(o).e("thumb")),
            style: ke(c(v)),
            onMousedown: p
          }, null, 38)
        ], 34), [
          [Rt, $.always || s.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var gs = /* @__PURE__ */ ue(cb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const db = ye({
  always: {
    type: Boolean,
    default: !0
  },
  width: String,
  height: String,
  ratioX: {
    type: Number,
    default: 1
  },
  ratioY: {
    type: Number,
    default: 1
  }
}), fb = /* @__PURE__ */ z({
  __name: "bar",
  props: db,
  setup(e, { expose: t }) {
    const n = e, o = k(0), r = k(0);
    return t({
      handleScroll: (a) => {
        if (a) {
          const s = a.offsetHeight - Gn, i = a.offsetWidth - Gn;
          r.value = a.scrollTop * 100 / s * n.ratioY, o.value = a.scrollLeft * 100 / i * n.ratioX;
        }
      }
    }), (a, s) => (P(), R(ze, null, [
      G(gs, {
        move: o.value,
        ratio: a.ratioX,
        size: a.width,
        always: a.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      G(gs, {
        move: r.value,
        ratio: a.ratioY,
        size: a.height,
        vertical: "",
        always: a.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var pb = /* @__PURE__ */ ue(fb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const vb = ye({
  height: {
    type: [String, Number],
    default: ""
  },
  maxHeight: {
    type: [String, Number],
    default: ""
  },
  native: {
    type: Boolean,
    default: !1
  },
  wrapStyle: {
    type: ce([String, Object, Array]),
    default: ""
  },
  wrapClass: {
    type: [String, Array],
    default: ""
  },
  viewClass: {
    type: [String, Array],
    default: ""
  },
  viewStyle: {
    type: [String, Array, Object],
    default: ""
  },
  noresize: Boolean,
  tag: {
    type: String,
    default: "div"
  },
  always: Boolean,
  minSize: {
    type: Number,
    default: 20
  },
  id: String,
  role: String,
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical"]
  }
}), hb = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(Ae)
}, ul = "ElScrollbar", gb = z({
  name: ul
}), mb = /* @__PURE__ */ z({
  ...gb,
  props: vb,
  emits: hb,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = ne("scrollbar");
    let l, a;
    const s = k(), i = k(), u = k(), f = k("0"), d = k("0"), v = k(), m = k(1), p = k(1), h = E(() => {
      const C = {};
      return o.height && (C.height = Cn(o.height)), o.maxHeight && (C.maxHeight = Cn(o.maxHeight)), [o.wrapStyle, C];
    }), y = E(() => [
      o.wrapClass,
      r.e("wrap"),
      { [r.em("wrap", "hidden-default")]: !o.native }
    ]), g = E(() => [r.e("view"), o.viewClass]), w = () => {
      var C;
      i.value && ((C = v.value) == null || C.handleScroll(i.value), n("scroll", {
        scrollTop: i.value.scrollTop,
        scrollLeft: i.value.scrollLeft
      }));
    };
    function S(C, T) {
      Ze(C) ? i.value.scrollTo(C) : Ae(C) && Ae(T) && i.value.scrollTo(C, T);
    }
    const b = (C) => {
      if (!Ae(C)) {
        Ke(ul, "value must be a number");
        return;
      }
      i.value.scrollTop = C;
    }, O = (C) => {
      if (!Ae(C)) {
        Ke(ul, "value must be a number");
        return;
      }
      i.value.scrollLeft = C;
    }, $ = () => {
      if (!i.value)
        return;
      const C = i.value.offsetHeight - Gn, T = i.value.offsetWidth - Gn, A = C ** 2 / i.value.scrollHeight, F = T ** 2 / i.value.scrollWidth, L = Math.max(A, o.minSize), N = Math.max(F, o.minSize);
      m.value = A / (C - A) / (L / (C - L)), p.value = F / (T - F) / (N / (T - N)), d.value = L + Gn < C ? `${L}px` : "", f.value = N + Gn < T ? `${N}px` : "";
    };
    return X(() => o.noresize, (C) => {
      C ? (l == null || l(), a == null || a()) : ({ stop: l } = Jn(u, $), a = qt("resize", $));
    }, { immediate: !0 }), X(() => [o.maxHeight, o.height], () => {
      o.native || me(() => {
        var C;
        $(), i.value && ((C = v.value) == null || C.handleScroll(i.value));
      });
    }), Ge(du, Tn({
      scrollbarElement: s,
      wrapElement: i
    })), Re(() => {
      o.native || me(() => {
        $();
      });
    }), qs(() => $()), t({
      wrapRef: i,
      update: $,
      scrollTo: S,
      setScrollTop: b,
      setScrollLeft: O,
      handleScroll: w
    }), (C, T) => (P(), R("div", {
      ref_key: "scrollbarRef",
      ref: s,
      class: I(c(r).b())
    }, [
      B("div", {
        ref_key: "wrapRef",
        ref: i,
        class: I(c(y)),
        style: ke(c(h)),
        onScroll: w
      }, [
        (P(), K(je(C.tag), {
          id: C.id,
          ref_key: "resizeRef",
          ref: u,
          class: I(c(g)),
          style: ke(C.viewStyle),
          role: C.role,
          "aria-label": C.ariaLabel,
          "aria-orientation": C.ariaOrientation
        }, {
          default: D(() => [
            Z(C.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 38),
      C.native ? W("v-if", !0) : (P(), K(pb, {
        key: 0,
        ref_key: "barRef",
        ref: v,
        height: d.value,
        width: f.value,
        always: C.always,
        "ratio-x": p.value,
        "ratio-y": m.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var bb = /* @__PURE__ */ ue(mb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const Ql = tt(bb), Zl = Symbol("popper"), fu = Symbol("popperContent"), yb = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], pu = ye({
  role: {
    type: String,
    values: yb,
    default: "tooltip"
  }
}), wb = z({
  name: "ElPopper",
  inheritAttrs: !1
}), Cb = /* @__PURE__ */ z({
  ...wb,
  props: pu,
  setup(e, { expose: t }) {
    const n = e, o = k(), r = k(), l = k(), a = k(), s = E(() => n.role), i = {
      triggerRef: o,
      popperInstanceRef: r,
      contentRef: l,
      referenceRef: a,
      role: s
    };
    return t(i), Ge(Zl, i), (u, f) => Z(u.$slots, "default");
  }
});
var Sb = /* @__PURE__ */ ue(Cb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
const vu = ye({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), Eb = z({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Tb = /* @__PURE__ */ z({
  ...Eb,
  props: vu,
  setup(e, { expose: t }) {
    const n = e, o = ne("popper"), { arrowOffset: r, arrowRef: l, arrowStyle: a } = pe(fu, void 0);
    return X(() => n.arrowOffset, (s) => {
      r.value = s;
    }), Bt(() => {
      l.value = void 0;
    }), t({
      arrowRef: l
    }), (s, i) => (P(), R("span", {
      ref_key: "arrowRef",
      ref: l,
      class: I(c(o).e("arrow")),
      style: ke(c(a)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Ob = /* @__PURE__ */ ue(Tb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
const Vr = "ElOnlyChild", $b = z({
  name: Vr,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const r = pe(ru), l = zm((o = r == null ? void 0 : r.setForwardRef) != null ? o : rn);
    return () => {
      var a;
      const s = (a = t.default) == null ? void 0 : a.call(t, n);
      if (!s)
        return null;
      if (s.length > 1)
        return Ke(Vr, "requires exact only one valid child."), null;
      const i = hu(s);
      return i ? Fe(gc(i, n), [[l]]) : (Ke(Vr, "no valid child node found"), null);
    };
  }
});
function hu(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Ze(n))
      switch (n.type) {
        case Ys:
          continue;
        case Gs:
        case "svg":
          return ms(n);
        case ze:
          return hu(n.children);
        default:
          return n;
      }
    return ms(n);
  }
  return null;
}
function ms(e) {
  const t = ne("only-child");
  return G("span", {
    class: t.e("content")
  }, [e]);
}
const gu = ye({
  virtualRef: {
    type: ce(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: ce(Function)
  },
  onMouseleave: {
    type: ce(Function)
  },
  onClick: {
    type: ce(Function)
  },
  onKeydown: {
    type: ce(Function)
  },
  onFocus: {
    type: ce(Function)
  },
  onBlur: {
    type: ce(Function)
  },
  onContextmenu: {
    type: ce(Function)
  },
  id: String,
  open: Boolean
}), kb = z({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), Pb = /* @__PURE__ */ z({
  ...kb,
  props: gu,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: r } = pe(Zl, void 0);
    Fm(r);
    const l = E(() => s.value ? n.id : void 0), a = E(() => {
      if (o && o.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), s = E(() => {
      if (o && o.value !== "tooltip")
        return o.value;
    }), i = E(() => s.value ? `${n.open}` : void 0);
    let u;
    return Re(() => {
      X(() => n.virtualRef, (f) => {
        f && (r.value = vn(f));
      }, {
        immediate: !0
      }), X(r, (f, d) => {
        u == null || u(), u = void 0, yn(f) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((v) => {
          var m;
          const p = n[v];
          p && (f.addEventListener(v.slice(2).toLowerCase(), p), (m = d == null ? void 0 : d.removeEventListener) == null || m.call(d, v.slice(2).toLowerCase(), p));
        }), u = X([l, a, s, i], (v) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((m, p) => {
            Mo(v[p]) ? f.removeAttribute(m) : f.setAttribute(m, v[p]);
          });
        }, { immediate: !0 })), yn(d) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((v) => d.removeAttribute(v));
      }, {
        immediate: !0
      });
    }), Bt(() => {
      u == null || u(), u = void 0;
    }), t({
      triggerRef: r
    }), (f, d) => f.virtualTriggering ? W("v-if", !0) : (P(), K(c($b), bt({ key: 0 }, f.$attrs, {
      "aria-controls": c(l),
      "aria-describedby": c(a),
      "aria-expanded": c(i),
      "aria-haspopup": c(s)
    }), {
      default: D(() => [
        Z(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var _b = /* @__PURE__ */ ue(Pb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);
const Wr = "focus-trap.focus-after-trapped", Kr = "focus-trap.focus-after-released", Ab = "focus-trap.focusout-prevented", bs = {
  cancelable: !0,
  bubbles: !1
}, Ib = {
  cancelable: !0,
  bubbles: !1
}, ys = "focusAfterTrapped", ws = "focusAfterReleased", xb = Symbol("elFocusTrap"), ea = k(), Rr = k(0), ta = k(0);
let jo = 0;
const mu = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, Cs = (e, t) => {
  for (const n of e)
    if (!Nb(n, t))
      return n;
}, Nb = (e, t) => {
  if (process.env.NODE_ENV === "test")
    return !1;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}, Rb = (e) => {
  const t = mu(e), n = Cs(t, e), o = Cs(t.reverse(), e);
  return [n, o];
}, Lb = (e) => e instanceof HTMLInputElement && "select" in e, fn = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), ta.value = window.performance.now(), e !== n && Lb(e) && t && e.select();
  }
};
function Ss(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const Mb = () => {
  let e = [];
  return {
    push: (o) => {
      const r = e[0];
      r && o !== r && r.pause(), e = Ss(e, o), e.unshift(o);
    },
    remove: (o) => {
      var r, l;
      e = Ss(e, o), (l = (r = e[0]) == null ? void 0 : r.resume) == null || l.call(r);
    }
  };
}, Bb = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (fn(o, t), document.activeElement !== n)
      return;
}, Es = Mb(), Fb = () => Rr.value > ta.value, Uo = () => {
  ea.value = "pointer", Rr.value = window.performance.now();
}, Ts = () => {
  ea.value = "keyboard", Rr.value = window.performance.now();
}, zb = () => (Re(() => {
  jo === 0 && (document.addEventListener("mousedown", Uo), document.addEventListener("touchstart", Uo), document.addEventListener("keydown", Ts)), jo++;
}), Bt(() => {
  jo--, jo <= 0 && (document.removeEventListener("mousedown", Uo), document.removeEventListener("touchstart", Uo), document.removeEventListener("keydown", Ts));
}), {
  focusReason: ea,
  lastUserFocusTimestamp: Rr,
  lastAutomatedFocusTimestamp: ta
}), qo = (e) => new CustomEvent(Ab, {
  ...Ib,
  detail: e
}), Hb = z({
  name: "ElFocusTrap",
  inheritAttrs: !1,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    ys,
    ws,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = k();
    let o, r;
    const { focusReason: l } = zb();
    Rm((p) => {
      e.trapped && !a.paused && t("release-requested", p);
    });
    const a = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, s = (p) => {
      if (!e.loop && !e.trapped || a.paused)
        return;
      const { key: h, altKey: y, ctrlKey: g, metaKey: w, currentTarget: S, shiftKey: b } = p, { loop: O } = e, $ = h === ln.tab && !y && !g && !w, C = document.activeElement;
      if ($ && C) {
        const T = S, [A, F] = Rb(T);
        if (A && F) {
          if (!b && C === F) {
            const N = qo({
              focusReason: l.value
            });
            t("focusout-prevented", N), N.defaultPrevented || (p.preventDefault(), O && fn(A, !0));
          } else if (b && [A, T].includes(C)) {
            const N = qo({
              focusReason: l.value
            });
            t("focusout-prevented", N), N.defaultPrevented || (p.preventDefault(), O && fn(F, !0));
          }
        } else if (C === T) {
          const N = qo({
            focusReason: l.value
          });
          t("focusout-prevented", N), N.defaultPrevented || p.preventDefault();
        }
      }
    };
    Ge(xb, {
      focusTrapRef: n,
      onKeydown: s
    }), X(() => e.focusTrapEl, (p) => {
      p && (n.value = p);
    }, { immediate: !0 }), X([n], ([p], [h]) => {
      p && (p.addEventListener("keydown", s), p.addEventListener("focusin", f), p.addEventListener("focusout", d)), h && (h.removeEventListener("keydown", s), h.removeEventListener("focusin", f), h.removeEventListener("focusout", d));
    });
    const i = (p) => {
      t(ys, p);
    }, u = (p) => t(ws, p), f = (p) => {
      const h = c(n);
      if (!h)
        return;
      const y = p.target, g = p.relatedTarget, w = y && h.contains(y);
      e.trapped || g && h.contains(g) || (o = g), w && t("focusin", p), !a.paused && e.trapped && (w ? r = y : fn(r, !0));
    }, d = (p) => {
      const h = c(n);
      if (!(a.paused || !h))
        if (e.trapped) {
          const y = p.relatedTarget;
          !Mo(y) && !h.contains(y) && setTimeout(() => {
            if (!a.paused && e.trapped) {
              const g = qo({
                focusReason: l.value
              });
              t("focusout-prevented", g), g.defaultPrevented || fn(r, !0);
            }
          }, 0);
        } else {
          const y = p.target;
          y && h.contains(y) || t("focusout", p);
        }
    };
    async function v() {
      await me();
      const p = c(n);
      if (p) {
        Es.push(a);
        const h = p.contains(document.activeElement) ? o : document.activeElement;
        if (o = h, !p.contains(h)) {
          const g = new Event(Wr, bs);
          p.addEventListener(Wr, i), p.dispatchEvent(g), g.defaultPrevented || me(() => {
            let w = e.focusStartEl;
            Ue(w) || (fn(w), document.activeElement !== w && (w = "first")), w === "first" && Bb(mu(p), !0), (document.activeElement === h || w === "container") && fn(p);
          });
        }
      }
    }
    function m() {
      const p = c(n);
      if (p) {
        p.removeEventListener(Wr, i);
        const h = new CustomEvent(Kr, {
          ...bs,
          detail: {
            focusReason: l.value
          }
        });
        p.addEventListener(Kr, u), p.dispatchEvent(h), !h.defaultPrevented && (l.value == "keyboard" || !Fb() || p.contains(document.activeElement)) && fn(o ?? document.body), p.removeEventListener(Kr, u), Es.remove(a);
      }
    }
    return Re(() => {
      e.trapped && v(), X(() => e.trapped, (p) => {
        p ? v() : m();
      });
    }), Bt(() => {
      e.trapped && m();
    }), {
      onKeydown: s
    };
  }
});
function Db(e, t, n, o, r, l) {
  return Z(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var bu = /* @__PURE__ */ ue(Hb, [["render", Db], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const Vb = ["fixed", "absolute"], Wb = ye({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: ce(Array),
    default: void 0
  },
  gpuAcceleration: {
    type: Boolean,
    default: !0
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: Ar,
    default: "bottom"
  },
  popperOptions: {
    type: ce(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: Vb,
    default: "absolute"
  }
}), yu = ye({
  ...Wb,
  id: String,
  style: {
    type: ce([String, Array, Object])
  },
  className: {
    type: ce([String, Array, Object])
  },
  effect: {
    type: String,
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: !0
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: !1
  },
  trapping: {
    type: Boolean,
    default: !1
  },
  popperClass: {
    type: ce([String, Array, Object])
  },
  popperStyle: {
    type: ce([String, Array, Object])
  },
  referenceEl: {
    type: ce(Object)
  },
  triggerTargetEl: {
    type: ce(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  ariaLabel: {
    type: String,
    default: void 0
  },
  virtualTriggering: Boolean,
  zIndex: Number
}), Kb = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, jb = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: r } = e, l = {
    placement: n,
    strategy: o,
    ...r,
    modifiers: [...qb(e), ...t]
  };
  return Gb(l, r == null ? void 0 : r.modifiers), l;
}, Ub = (e) => {
  if (_e)
    return vn(e);
};
function qb(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: o } = e;
  return [
    {
      name: "offset",
      options: {
        offset: [0, t ?? 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements: o
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration: n
      }
    }
  ];
}
function Gb(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const Yb = 0, Xb = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: r } = pe(Zl, void 0), l = k(), a = k(), s = E(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), i = E(() => {
    var g;
    const w = c(l), S = (g = c(a)) != null ? g : Yb;
    return {
      name: "arrow",
      enabled: !Pi(w),
      options: {
        element: w,
        padding: S
      }
    };
  }), u = E(() => ({
    onFirstUpdate: () => {
      p();
    },
    ...jb(e, [
      c(i),
      c(s)
    ])
  })), f = E(() => Ub(e.referenceEl) || c(o)), { attributes: d, state: v, styles: m, update: p, forceUpdate: h, instanceRef: y } = Am(f, n, u);
  return X(y, (g) => t.value = g), Re(() => {
    X(() => {
      var g;
      return (g = c(f)) == null ? void 0 : g.getBoundingClientRect();
    }, () => {
      p();
    });
  }), {
    attributes: d,
    arrowRef: l,
    contentRef: n,
    instanceRef: y,
    state: v,
    styles: m,
    role: r,
    forceUpdate: h,
    update: p
  };
}, Jb = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: r } = xr(), l = ne("popper"), a = E(() => c(t).popper), s = k(Ae(e.zIndex) ? e.zIndex : r()), i = E(() => [
    l.b(),
    l.is("pure", e.pure),
    l.is(e.effect),
    e.popperClass
  ]), u = E(() => [
    { zIndex: c(s) },
    c(n).popper,
    e.popperStyle || {}
  ]), f = E(() => o.value === "dialog" ? "false" : void 0), d = E(() => c(n).arrow || {});
  return {
    ariaModal: f,
    arrowStyle: d,
    contentAttrs: a,
    contentClass: i,
    contentStyle: u,
    contentZIndex: s,
    updateZIndex: () => {
      s.value = Ae(e.zIndex) ? e.zIndex : r();
    }
  };
}, Qb = (e, t) => {
  const n = k(!1), o = k();
  return {
    focusStartRef: o,
    trapped: n,
    onFocusAfterReleased: (u) => {
      var f;
      ((f = u.detail) == null ? void 0 : f.focusReason) !== "pointer" && (o.value = "first", t("blur"));
    },
    onFocusAfterTrapped: () => {
      t("focus");
    },
    onFocusInTrap: (u) => {
      e.visible && !n.value && (u.target && (o.value = u.target), n.value = !0);
    },
    onFocusoutPrevented: (u) => {
      e.trapping || (u.detail.focusReason === "pointer" && u.preventDefault(), n.value = !1);
    },
    onReleaseRequested: () => {
      n.value = !1, t("close");
    }
  };
}, Zb = z({
  name: "ElPopperContent"
}), ey = /* @__PURE__ */ z({
  ...Zb,
  props: yu,
  emits: Kb,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: r,
      trapped: l,
      onFocusAfterReleased: a,
      onFocusAfterTrapped: s,
      onFocusInTrap: i,
      onFocusoutPrevented: u,
      onReleaseRequested: f
    } = Qb(o, n), { attributes: d, arrowRef: v, contentRef: m, styles: p, instanceRef: h, role: y, update: g } = Xb(o), {
      ariaModal: w,
      arrowStyle: S,
      contentAttrs: b,
      contentClass: O,
      contentStyle: $,
      updateZIndex: C
    } = Jb(o, {
      styles: p,
      attributes: d,
      role: y
    }), T = pe(gr, void 0), A = k();
    Ge(fu, {
      arrowStyle: S,
      arrowRef: v,
      arrowOffset: A
    }), T && (T.addInputId || T.removeInputId) && Ge(gr, {
      ...T,
      addInputId: rn,
      removeInputId: rn
    });
    let F;
    const L = (Y = !0) => {
      g(), Y && C();
    }, N = () => {
      L(!1), o.visible && o.focusOnShow ? l.value = !0 : o.visible === !1 && (l.value = !1);
    };
    return Re(() => {
      X(() => o.triggerTargetEl, (Y, ee) => {
        F == null || F(), F = void 0;
        const J = c(Y || m.value), te = c(ee || m.value);
        yn(J) && (F = X([y, () => o.ariaLabel, w, () => o.id], (j) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((le, x) => {
            Mo(j[x]) ? J.removeAttribute(le) : J.setAttribute(le, j[x]);
          });
        }, { immediate: !0 })), te !== J && yn(te) && ["role", "aria-label", "aria-modal", "id"].forEach((j) => {
          te.removeAttribute(j);
        });
      }, { immediate: !0 }), X(() => o.visible, N, { immediate: !0 });
    }), Bt(() => {
      F == null || F(), F = void 0;
    }), t({
      popperContentRef: m,
      popperInstanceRef: h,
      updatePopper: L,
      contentStyle: $
    }), (Y, ee) => (P(), R("div", bt({
      ref_key: "contentRef",
      ref: m
    }, c(b), {
      style: c($),
      class: c(O),
      tabindex: "-1",
      onMouseenter: ee[0] || (ee[0] = (J) => Y.$emit("mouseenter", J)),
      onMouseleave: ee[1] || (ee[1] = (J) => Y.$emit("mouseleave", J))
    }), [
      G(c(bu), {
        trapped: c(l),
        "trap-on-focus-in": !0,
        "focus-trap-el": c(m),
        "focus-start-el": c(r),
        onFocusAfterTrapped: c(s),
        onFocusAfterReleased: c(a),
        onFocusin: c(i),
        onFocusoutPrevented: c(u),
        onReleaseRequested: c(f)
      }, {
        default: D(() => [
          Z(Y.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16));
  }
});
var ty = /* @__PURE__ */ ue(ey, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
const ny = tt(Sb), na = Symbol("elTooltip"), Ot = ye({
  ...Bm,
  ...yu,
  appendTo: {
    type: ce([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: {
    type: Boolean,
    default: !1
  },
  persistent: Boolean,
  ariaLabel: String,
  visible: {
    type: ce(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean
}), xo = ye({
  ...gu,
  disabled: Boolean,
  trigger: {
    type: ce([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: ce(Array),
    default: () => [ln.enter, ln.space]
  }
}), {
  useModelToggleProps: oy,
  useModelToggleEmits: ry,
  useModelToggle: ly
} = Di("visible"), ay = ye({
  ...pu,
  ...oy,
  ...Ot,
  ...xo,
  ...vu,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), sy = [
  ...ry,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], iy = (e, t) => mn(e) ? e.includes(t) : e === t, jn = (e, t, n) => (o) => {
  iy(c(e), t) && n(o);
}, uy = z({
  name: "ElTooltipTrigger"
}), cy = /* @__PURE__ */ z({
  ...uy,
  props: xo,
  setup(e, { expose: t }) {
    const n = e, o = ne("tooltip"), { controlled: r, id: l, open: a, onOpen: s, onClose: i, onToggle: u } = pe(na, void 0), f = k(null), d = () => {
      if (c(r) || n.disabled)
        return !0;
    }, v = Dt(n, "trigger"), m = on(d, jn(v, "hover", s)), p = on(d, jn(v, "hover", i)), h = on(d, jn(v, "click", (b) => {
      b.button === 0 && u(b);
    })), y = on(d, jn(v, "focus", s)), g = on(d, jn(v, "focus", i)), w = on(d, jn(v, "contextmenu", (b) => {
      b.preventDefault(), u(b);
    })), S = on(d, (b) => {
      const { code: O } = b;
      n.triggerKeys.includes(O) && (b.preventDefault(), u(b));
    });
    return t({
      triggerRef: f
    }), (b, O) => (P(), K(c(_b), {
      id: c(l),
      "virtual-ref": b.virtualRef,
      open: c(a),
      "virtual-triggering": b.virtualTriggering,
      class: I(c(o).e("trigger")),
      onBlur: c(g),
      onClick: c(h),
      onContextmenu: c(w),
      onFocus: c(y),
      onMouseenter: c(m),
      onMouseleave: c(p),
      onKeydown: c(S)
    }, {
      default: D(() => [
        Z(b.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var dy = /* @__PURE__ */ ue(cy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
const fy = z({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), py = /* @__PURE__ */ z({
  ...fy,
  props: Ot,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = nu(), r = ne("tooltip"), l = k(null), a = k(!1), {
      controlled: s,
      id: i,
      open: u,
      trigger: f,
      onClose: d,
      onOpen: v,
      onShow: m,
      onHide: p,
      onBeforeShow: h,
      onBeforeHide: y
    } = pe(na, void 0), g = E(() => n.transition || `${r.namespace.value}-fade-in-linear`), w = E(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    Bt(() => {
      a.value = !0;
    });
    const S = E(() => c(w) ? !0 : c(u)), b = E(() => n.disabled ? !1 : c(u)), O = E(() => n.appendTo || o.value), $ = E(() => {
      var j;
      return (j = n.style) != null ? j : {};
    }), C = E(() => !c(u)), T = () => {
      p();
    }, A = () => {
      if (c(s))
        return !0;
    }, F = on(A, () => {
      n.enterable && c(f) === "hover" && v();
    }), L = on(A, () => {
      c(f) === "hover" && d();
    }), N = () => {
      var j, le;
      (le = (j = l.value) == null ? void 0 : j.updatePopper) == null || le.call(j), h == null || h();
    }, Y = () => {
      y == null || y();
    }, ee = () => {
      m(), te = Hc(E(() => {
        var j;
        return (j = l.value) == null ? void 0 : j.popperContentRef;
      }), () => {
        if (c(s))
          return;
        c(f) !== "hover" && d();
      });
    }, J = () => {
      n.virtualTriggering || d();
    };
    let te;
    return X(() => c(u), (j) => {
      j || te == null || te();
    }, {
      flush: "post"
    }), X(() => n.content, () => {
      var j, le;
      (le = (j = l.value) == null ? void 0 : j.updatePopper) == null || le.call(j);
    }), t({
      contentRef: l
    }), (j, le) => (P(), K(Xs, {
      disabled: !j.teleported,
      to: c(O)
    }, [
      G(gn, {
        name: c(g),
        onAfterLeave: T,
        onBeforeEnter: N,
        onAfterEnter: ee,
        onBeforeLeave: Y
      }, {
        default: D(() => [
          c(S) ? Fe((P(), K(c(ty), bt({
            key: 0,
            id: c(i),
            ref_key: "contentRef",
            ref: l
          }, j.$attrs, {
            "aria-label": j.ariaLabel,
            "aria-hidden": c(C),
            "boundaries-padding": j.boundariesPadding,
            "fallback-placements": j.fallbackPlacements,
            "gpu-acceleration": j.gpuAcceleration,
            offset: j.offset,
            placement: j.placement,
            "popper-options": j.popperOptions,
            strategy: j.strategy,
            effect: j.effect,
            enterable: j.enterable,
            pure: j.pure,
            "popper-class": j.popperClass,
            "popper-style": [j.popperStyle, c($)],
            "reference-el": j.referenceEl,
            "trigger-target-el": j.triggerTargetEl,
            visible: c(b),
            "z-index": j.zIndex,
            onMouseenter: c(F),
            onMouseleave: c(L),
            onBlur: J,
            onClose: c(d)
          }), {
            default: D(() => [
              a.value ? W("v-if", !0) : Z(j.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [Rt, c(b)]
          ]) : W("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var vy = /* @__PURE__ */ ue(py, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
const hy = ["innerHTML"], gy = { key: 1 }, my = z({
  name: "ElTooltip"
}), by = /* @__PURE__ */ z({
  ...my,
  props: ay,
  emits: sy,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    Mm();
    const r = En(), l = k(), a = k(), s = () => {
      var g;
      const w = c(l);
      w && ((g = w.popperInstanceRef) == null || g.update());
    }, i = k(!1), u = k(), { show: f, hide: d, hasUpdateHandler: v } = ly({
      indicator: i,
      toggleReason: u
    }), { onOpen: m, onClose: p } = ou({
      showAfter: Dt(o, "showAfter"),
      hideAfter: Dt(o, "hideAfter"),
      autoClose: Dt(o, "autoClose"),
      open: f,
      close: d
    }), h = E(() => yt(o.visible) && !v.value);
    Ge(na, {
      controlled: h,
      id: r,
      open: js(i),
      trigger: Dt(o, "trigger"),
      onOpen: (g) => {
        m(g);
      },
      onClose: (g) => {
        p(g);
      },
      onToggle: (g) => {
        c(i) ? p(g) : m(g);
      },
      onShow: () => {
        n("show", u.value);
      },
      onHide: () => {
        n("hide", u.value);
      },
      onBeforeShow: () => {
        n("before-show", u.value);
      },
      onBeforeHide: () => {
        n("before-hide", u.value);
      },
      updatePopper: s
    }), X(() => o.disabled, (g) => {
      g && i.value && (i.value = !1);
    });
    const y = (g) => {
      var w, S;
      const b = (S = (w = a.value) == null ? void 0 : w.contentRef) == null ? void 0 : S.popperContentRef, O = (g == null ? void 0 : g.relatedTarget) || document.activeElement;
      return b && b.contains(O);
    };
    return Js(() => i.value && d()), t({
      popperRef: l,
      contentRef: a,
      isFocusInsideContent: y,
      updatePopper: s,
      onOpen: m,
      onClose: p,
      hide: d
    }), (g, w) => (P(), K(c(ny), {
      ref_key: "popperRef",
      ref: l,
      role: g.role
    }, {
      default: D(() => [
        G(dy, {
          disabled: g.disabled,
          trigger: g.trigger,
          "trigger-keys": g.triggerKeys,
          "virtual-ref": g.virtualRef,
          "virtual-triggering": g.virtualTriggering
        }, {
          default: D(() => [
            g.$slots.default ? Z(g.$slots, "default", { key: 0 }) : W("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        G(vy, {
          ref_key: "contentRef",
          ref: a,
          "aria-label": g.ariaLabel,
          "boundaries-padding": g.boundariesPadding,
          content: g.content,
          disabled: g.disabled,
          effect: g.effect,
          enterable: g.enterable,
          "fallback-placements": g.fallbackPlacements,
          "hide-after": g.hideAfter,
          "gpu-acceleration": g.gpuAcceleration,
          offset: g.offset,
          persistent: g.persistent,
          "popper-class": g.popperClass,
          "popper-style": g.popperStyle,
          placement: g.placement,
          "popper-options": g.popperOptions,
          pure: g.pure,
          "raw-content": g.rawContent,
          "reference-el": g.referenceEl,
          "trigger-target-el": g.triggerTargetEl,
          "show-after": g.showAfter,
          strategy: g.strategy,
          teleported: g.teleported,
          transition: g.transition,
          "virtual-triggering": g.virtualTriggering,
          "z-index": g.zIndex,
          "append-to": g.appendTo
        }, {
          default: D(() => [
            Z(g.$slots, "content", {}, () => [
              g.rawContent ? (P(), R("span", {
                key: 0,
                innerHTML: g.content
              }, null, 8, hy)) : (P(), R("span", gy, ge(g.content), 1))
            ]),
            g.showArrow ? (P(), K(c(Ob), {
              key: 0,
              "arrow-offset": g.arrowOffset
            }, null, 8, ["arrow-offset"])) : W("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var yy = /* @__PURE__ */ ue(by, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
const oa = tt(yy), wu = Symbol("buttonGroupContextKey"), wy = (e, t) => {
  _o({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, E(() => e.type === "text"));
  const n = pe(wu, void 0), o = Nr("button"), { form: r } = $n(), l = sn(E(() => n == null ? void 0 : n.size)), a = co(), s = k(), i = No(), u = E(() => e.type || (n == null ? void 0 : n.type) || ""), f = E(() => {
    var p, h, y;
    return (y = (h = e.autoInsertSpace) != null ? h : (p = o.value) == null ? void 0 : p.autoInsertSpace) != null ? y : !1;
  }), d = E(() => e.tag === "button" ? {
    ariaDisabled: a.value || e.loading,
    disabled: a.value || e.loading,
    autofocus: e.autofocus,
    type: e.nativeType
  } : {}), v = E(() => {
    var p;
    const h = (p = i.default) == null ? void 0 : p.call(i);
    if (f.value && (h == null ? void 0 : h.length) === 1) {
      const y = h[0];
      if ((y == null ? void 0 : y.type) === Gs) {
        const g = y.children;
        return new RegExp("^\\p{Unified_Ideograph}{2}$", "u").test(g.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: a,
    _size: l,
    _type: u,
    _ref: s,
    _props: d,
    shouldAddSpace: v,
    handleClick: (p) => {
      e.nativeType === "reset" && (r == null || r.resetFields()), t("click", p);
    }
  };
}, Cy = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], Sy = ["button", "submit", "reset"], cl = ye({
  size: Wn,
  disabled: Boolean,
  type: {
    type: String,
    values: Cy,
    default: ""
  },
  icon: {
    type: Qe
  },
  nativeType: {
    type: String,
    values: Sy,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: Qe,
    default: () => yr
  },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  },
  tag: {
    type: ce([String, Object]),
    default: "button"
  }
}), Ey = {
  click: (e) => e instanceof MouseEvent
};
function et(e, t) {
  Ty(e) && (e = "100%");
  var n = Oy(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Go(e) {
  return Math.min(1, Math.max(0, e));
}
function Ty(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Oy(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Cu(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Yo(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function xn(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function $y(e, t, n) {
  return {
    r: et(e, 255) * 255,
    g: et(t, 255) * 255,
    b: et(n, 255) * 255
  };
}
function Os(e, t, n) {
  e = et(e, 255), t = et(t, 255), n = et(n, 255);
  var o = Math.max(e, t, n), r = Math.min(e, t, n), l = 0, a = 0, s = (o + r) / 2;
  if (o === r)
    a = 0, l = 0;
  else {
    var i = o - r;
    switch (a = s > 0.5 ? i / (2 - o - r) : i / (o + r), o) {
      case e:
        l = (t - n) / i + (t < n ? 6 : 0);
        break;
      case t:
        l = (n - e) / i + 2;
        break;
      case n:
        l = (e - t) / i + 4;
        break;
    }
    l /= 6;
  }
  return { h: l, s: a, l: s };
}
function jr(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function ky(e, t, n) {
  var o, r, l;
  if (e = et(e, 360), t = et(t, 100), n = et(n, 100), t === 0)
    r = n, l = n, o = n;
  else {
    var a = n < 0.5 ? n * (1 + t) : n + t - n * t, s = 2 * n - a;
    o = jr(s, a, e + 1 / 3), r = jr(s, a, e), l = jr(s, a, e - 1 / 3);
  }
  return { r: o * 255, g: r * 255, b: l * 255 };
}
function $s(e, t, n) {
  e = et(e, 255), t = et(t, 255), n = et(n, 255);
  var o = Math.max(e, t, n), r = Math.min(e, t, n), l = 0, a = o, s = o - r, i = o === 0 ? 0 : s / o;
  if (o === r)
    l = 0;
  else {
    switch (o) {
      case e:
        l = (t - n) / s + (t < n ? 6 : 0);
        break;
      case t:
        l = (n - e) / s + 2;
        break;
      case n:
        l = (e - t) / s + 4;
        break;
    }
    l /= 6;
  }
  return { h: l, s: i, v: a };
}
function Py(e, t, n) {
  e = et(e, 360) * 6, t = et(t, 100), n = et(n, 100);
  var o = Math.floor(e), r = e - o, l = n * (1 - t), a = n * (1 - r * t), s = n * (1 - (1 - r) * t), i = o % 6, u = [n, a, l, l, s, n][i], f = [s, n, n, a, l, l][i], d = [l, l, s, n, n, a][i];
  return { r: u * 255, g: f * 255, b: d * 255 };
}
function ks(e, t, n, o) {
  var r = [
    xn(Math.round(e).toString(16)),
    xn(Math.round(t).toString(16)),
    xn(Math.round(n).toString(16))
  ];
  return o && r[0].startsWith(r[0].charAt(1)) && r[1].startsWith(r[1].charAt(1)) && r[2].startsWith(r[2].charAt(1)) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("");
}
function _y(e, t, n, o, r) {
  var l = [
    xn(Math.round(e).toString(16)),
    xn(Math.round(t).toString(16)),
    xn(Math.round(n).toString(16)),
    xn(Ay(o))
  ];
  return r && l[0].startsWith(l[0].charAt(1)) && l[1].startsWith(l[1].charAt(1)) && l[2].startsWith(l[2].charAt(1)) && l[3].startsWith(l[3].charAt(1)) ? l[0].charAt(0) + l[1].charAt(0) + l[2].charAt(0) + l[3].charAt(0) : l.join("");
}
function Ay(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Ps(e) {
  return Et(e) / 255;
}
function Et(e) {
  return parseInt(e, 16);
}
function Iy(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var dl = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function xy(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, o = null, r = null, l = null, a = !1, s = !1;
  return typeof e == "string" && (e = Ly(e)), typeof e == "object" && (tn(e.r) && tn(e.g) && tn(e.b) ? (t = $y(e.r, e.g, e.b), a = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : tn(e.h) && tn(e.s) && tn(e.v) ? (o = Yo(e.s), r = Yo(e.v), t = Py(e.h, o, r), a = !0, s = "hsv") : tn(e.h) && tn(e.s) && tn(e.l) && (o = Yo(e.s), l = Yo(e.l), t = ky(e.h, o, l), a = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Cu(n), {
    ok: a,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var Ny = "[-\\+]?\\d+%?", Ry = "[-\\+]?\\d*\\.\\d+%?", hn = "(?:".concat(Ry, ")|(?:").concat(Ny, ")"), Ur = "[\\s|\\(]+(".concat(hn, ")[,|\\s]+(").concat(hn, ")[,|\\s]+(").concat(hn, ")\\s*\\)?"), qr = "[\\s|\\(]+(".concat(hn, ")[,|\\s]+(").concat(hn, ")[,|\\s]+(").concat(hn, ")[,|\\s]+(").concat(hn, ")\\s*\\)?"), Ht = {
  CSS_UNIT: new RegExp(hn),
  rgb: new RegExp("rgb" + Ur),
  rgba: new RegExp("rgba" + qr),
  hsl: new RegExp("hsl" + Ur),
  hsla: new RegExp("hsla" + qr),
  hsv: new RegExp("hsv" + Ur),
  hsva: new RegExp("hsva" + qr),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Ly(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (dl[e])
    e = dl[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = Ht.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = Ht.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = Ht.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = Ht.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = Ht.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = Ht.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = Ht.hex8.exec(e), n ? {
    r: Et(n[1]),
    g: Et(n[2]),
    b: Et(n[3]),
    a: Ps(n[4]),
    format: t ? "name" : "hex8"
  } : (n = Ht.hex6.exec(e), n ? {
    r: Et(n[1]),
    g: Et(n[2]),
    b: Et(n[3]),
    format: t ? "name" : "hex"
  } : (n = Ht.hex4.exec(e), n ? {
    r: Et(n[1] + n[1]),
    g: Et(n[2] + n[2]),
    b: Et(n[3] + n[3]),
    a: Ps(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = Ht.hex3.exec(e), n ? {
    r: Et(n[1] + n[1]),
    g: Et(n[2] + n[2]),
    b: Et(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function tn(e) {
  return !!Ht.CSS_UNIT.exec(String(e));
}
var My = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var o;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = Iy(t)), this.originalInput = t;
      var r = xy(t);
      this.originalInput = t, this.r = r.r, this.g = r.g, this.b = r.b, this.a = r.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (o = n.format) !== null && o !== void 0 ? o : r.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = r.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, o, r, l = t.r / 255, a = t.g / 255, s = t.b / 255;
      return l <= 0.03928 ? n = l / 12.92 : n = Math.pow((l + 0.055) / 1.055, 2.4), a <= 0.03928 ? o = a / 12.92 : o = Math.pow((a + 0.055) / 1.055, 2.4), s <= 0.03928 ? r = s / 12.92 : r = Math.pow((s + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * o + 0.0722 * r;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = Cu(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = $s(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = $s(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsva(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = Os(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = Os(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsla(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), ks(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), _y(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), n = Math.round(this.g), o = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(o, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(o, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(n) {
        return "".concat(Math.round(et(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(et(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + ks(this.r, this.g, this.b, !1), n = 0, o = Object.entries(dl); n < o.length; n++) {
        var r = o[n], l = r[0], a = r[1];
        if (t === a)
          return l;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var o = !1, r = this.a < 1 && this.a >= 0, l = !n && r && (t.startsWith("hex") || t === "name");
      return l ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (o = this.toRgbString()), t === "prgb" && (o = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (o = this.toHexString()), t === "hex3" && (o = this.toHexString(!0)), t === "hex4" && (o = this.toHex8String(!0)), t === "hex8" && (o = this.toHex8String()), t === "name" && (o = this.toName()), t === "hsl" && (o = this.toHslString()), t === "hsv" && (o = this.toHsvString()), o || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = Go(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = Go(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = Go(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = Go(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), o = (n.h + t) % 360;
      return n.h = o < 0 ? 360 + o : o, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var o = this.toRgb(), r = new e(t).toRgb(), l = n / 100, a = {
        r: (r.r - o.r) * l + o.r,
        g: (r.g - o.g) * l + o.g,
        b: (r.b - o.b) * l + o.b,
        a: (r.a - o.a) * l + o.a
      };
      return new e(a);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var o = this.toHsl(), r = 360 / n, l = [this];
      for (o.h = (o.h - (r * t >> 1) + 720) % 360; --t; )
        o.h = (o.h + r) % 360, l.push(new e(o));
      return l;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), o = n.h, r = n.s, l = n.v, a = [], s = 1 / t; t--; )
        a.push(new e({ h: o, s: r, v: l })), l = (l + s) % 1;
      return a;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), o = new e(t).toRgb(), r = n.a + o.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + o.r * o.a * (1 - n.a)) / r,
        g: (n.g * n.a + o.g * o.a * (1 - n.a)) / r,
        b: (n.b * n.a + o.b * o.a * (1 - n.a)) / r,
        a: r
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), o = n.h, r = [this], l = 360 / t, a = 1; a < t; a++)
        r.push(new e({ h: (o + a * l) % 360, s: n.s, l: n.l }));
      return r;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
);
function dn(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function By(e) {
  const t = co(), n = ne("button");
  return E(() => {
    let o = {};
    const r = e.color;
    if (r) {
      const l = new My(r), a = e.dark ? l.tint(20).toString() : dn(l, 20);
      if (e.plain)
        o = n.cssVarBlock({
          "bg-color": e.dark ? dn(l, 90) : l.tint(90).toString(),
          "text-color": r,
          "border-color": e.dark ? dn(l, 50) : l.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": r,
          "hover-border-color": r,
          "active-bg-color": a,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": a
        }), t.value && (o[n.cssVarBlockName("disabled-bg-color")] = e.dark ? dn(l, 90) : l.tint(90).toString(), o[n.cssVarBlockName("disabled-text-color")] = e.dark ? dn(l, 50) : l.tint(50).toString(), o[n.cssVarBlockName("disabled-border-color")] = e.dark ? dn(l, 80) : l.tint(80).toString());
      else {
        const s = e.dark ? dn(l, 30) : l.tint(30).toString(), i = l.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
        if (o = n.cssVarBlock({
          "bg-color": r,
          "text-color": i,
          "border-color": r,
          "hover-bg-color": s,
          "hover-text-color": i,
          "hover-border-color": s,
          "active-bg-color": a,
          "active-border-color": a
        }), t.value) {
          const u = e.dark ? dn(l, 50) : l.tint(50).toString();
          o[n.cssVarBlockName("disabled-bg-color")] = u, o[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, o[n.cssVarBlockName("disabled-border-color")] = u;
        }
      }
    }
    return o;
  });
}
const Fy = z({
  name: "ElButton"
}), zy = /* @__PURE__ */ z({
  ...Fy,
  props: cl,
  emits: Ey,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = By(o), l = ne("button"), { _ref: a, _size: s, _type: i, _disabled: u, _props: f, shouldAddSpace: d, handleClick: v } = wy(o, n);
    return t({
      ref: a,
      size: s,
      type: i,
      disabled: u,
      shouldAddSpace: d
    }), (m, p) => (P(), K(je(m.tag), bt({
      ref_key: "_ref",
      ref: a
    }, c(f), {
      class: [
        c(l).b(),
        c(l).m(c(i)),
        c(l).m(c(s)),
        c(l).is("disabled", c(u)),
        c(l).is("loading", m.loading),
        c(l).is("plain", m.plain),
        c(l).is("round", m.round),
        c(l).is("circle", m.circle),
        c(l).is("text", m.text),
        c(l).is("link", m.link),
        c(l).is("has-bg", m.bg)
      ],
      style: c(r),
      onClick: c(v)
    }), {
      default: D(() => [
        m.loading ? (P(), R(ze, { key: 0 }, [
          m.$slots.loading ? Z(m.$slots, "loading", { key: 0 }) : (P(), K(c(Be), {
            key: 1,
            class: I(c(l).is("loading"))
          }, {
            default: D(() => [
              (P(), K(je(m.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : m.icon || m.$slots.icon ? (P(), K(c(Be), { key: 1 }, {
          default: D(() => [
            m.icon ? (P(), K(je(m.icon), { key: 0 })) : Z(m.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : W("v-if", !0),
        m.$slots.default ? (P(), R("span", {
          key: 2,
          class: I({ [c(l).em("text", "expand")]: c(d) })
        }, [
          Z(m.$slots, "default")
        ], 2)) : W("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var Hy = /* @__PURE__ */ ue(zy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
const Dy = {
  size: cl.size,
  type: cl.type
}, Vy = z({
  name: "ElButtonGroup"
}), Wy = /* @__PURE__ */ z({
  ...Vy,
  props: Dy,
  setup(e) {
    const t = e;
    Ge(wu, Tn({
      size: Dt(t, "size"),
      type: Dt(t, "type")
    }));
    const n = ne("button");
    return (o, r) => (P(), R("div", {
      class: I(`${c(n).b("group")}`)
    }, [
      Z(o.$slots, "default")
    ], 2));
  }
});
var Su = /* @__PURE__ */ ue(Wy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
const Eu = tt(Hy, {
  ButtonGroup: Su
});
Ft(Su);
function Ky(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
const pn = /* @__PURE__ */ new Map();
let _s;
_e && (document.addEventListener("mousedown", (e) => _s = e), document.addEventListener("mouseup", (e) => {
  for (const t of pn.values())
    for (const { documentHandler: n } of t)
      n(e, _s);
}));
function As(e, t) {
  let n = [];
  return Array.isArray(t.arg) ? n = t.arg : yn(t.arg) && n.push(t.arg), function(o, r) {
    const l = t.instance.popperRef, a = o.target, s = r == null ? void 0 : r.target, i = !t || !t.instance, u = !a || !s, f = e.contains(a) || e.contains(s), d = e === a, v = n.length && n.some((p) => p == null ? void 0 : p.contains(a)) || n.length && n.includes(s), m = l && (l.contains(a) || l.contains(s));
    i || u || f || d || v || m || t.value(o, r);
  };
}
const Tu = {
  beforeMount(e, t) {
    pn.has(e) || pn.set(e, []), pn.get(e).push({
      documentHandler: As(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    pn.has(e) || pn.set(e, []);
    const n = pn.get(e), o = n.findIndex((l) => l.bindingFn === t.oldValue), r = {
      documentHandler: As(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, r) : n.push(r);
  },
  unmounted(e) {
    pn.delete(e);
  }
};
var Is = !1, In, fl, pl, tr, nr, Ou, or, vl, hl, gl, $u, ml, bl, ku, Pu;
function mt() {
  if (!Is) {
    Is = !0;
    var e = navigator.userAgent, t = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e), n = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
    if (ml = /\b(iPhone|iP[ao]d)/.exec(e), bl = /\b(iP[ao]d)/.exec(e), gl = /Android/i.exec(e), ku = /FBAN\/\w+;/i.exec(e), Pu = /Mobile/i.exec(e), $u = !!/Win64/.exec(e), t) {
      In = t[1] ? parseFloat(t[1]) : t[5] ? parseFloat(t[5]) : NaN, In && document && document.documentMode && (In = document.documentMode);
      var o = /(?:Trident\/(\d+.\d+))/.exec(e);
      Ou = o ? parseFloat(o[1]) + 4 : In, fl = t[2] ? parseFloat(t[2]) : NaN, pl = t[3] ? parseFloat(t[3]) : NaN, tr = t[4] ? parseFloat(t[4]) : NaN, tr ? (t = /(?:Chrome\/(\d+\.\d+))/.exec(e), nr = t && t[1] ? parseFloat(t[1]) : NaN) : nr = NaN;
    } else
      In = fl = pl = nr = tr = NaN;
    if (n) {
      if (n[1]) {
        var r = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
        or = r ? parseFloat(r[1].replace("_", ".")) : !0;
      } else
        or = !1;
      vl = !!n[2], hl = !!n[3];
    } else
      or = vl = hl = !1;
  }
}
var yl = { ie: function() {
  return mt() || In;
}, ieCompatibilityMode: function() {
  return mt() || Ou > In;
}, ie64: function() {
  return yl.ie() && $u;
}, firefox: function() {
  return mt() || fl;
}, opera: function() {
  return mt() || pl;
}, webkit: function() {
  return mt() || tr;
}, safari: function() {
  return yl.webkit();
}, chrome: function() {
  return mt() || nr;
}, windows: function() {
  return mt() || vl;
}, osx: function() {
  return mt() || or;
}, linux: function() {
  return mt() || hl;
}, iphone: function() {
  return mt() || ml;
}, mobile: function() {
  return mt() || ml || bl || gl || Pu;
}, nativeApp: function() {
  return mt() || ku;
}, android: function() {
  return mt() || gl;
}, ipad: function() {
  return mt() || bl;
} }, jy = yl, Xo = !!(typeof window < "u" && window.document && window.document.createElement), Uy = { canUseDOM: Xo, canUseWorkers: typeof Worker < "u", canUseEventListeners: Xo && !!(window.addEventListener || window.attachEvent), canUseViewport: Xo && !!window.screen, isInWorker: !Xo }, _u = Uy, Au;
_u.canUseDOM && (Au = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0);
function qy(e, t) {
  if (!_u.canUseDOM || t && !("addEventListener" in document))
    return !1;
  var n = "on" + e, o = n in document;
  if (!o) {
    var r = document.createElement("div");
    r.setAttribute(n, "return;"), o = typeof r[n] == "function";
  }
  return !o && Au && e === "wheel" && (o = document.implementation.hasFeature("Events.wheel", "3.0")), o;
}
var Gy = qy, xs = 10, Ns = 40, Rs = 800;
function Iu(e) {
  var t = 0, n = 0, o = 0, r = 0;
  return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), o = t * xs, r = n * xs, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (o = e.deltaX), (o || r) && e.deltaMode && (e.deltaMode == 1 ? (o *= Ns, r *= Ns) : (o *= Rs, r *= Rs)), o && !t && (t = o < 1 ? -1 : 1), r && !n && (n = r < 1 ? -1 : 1), { spinX: t, spinY: n, pixelX: o, pixelY: r };
}
Iu.getEventType = function() {
  return jy.firefox() ? "DOMMouseScroll" : Gy("wheel") ? "wheel" : "mousewheel";
};
var Yy = Iu;
/**
* Checks if an event is supported in the current execution environment.
*
* NOTE: This will not work correctly for non-generic events such as `change`,
* `reset`, `load`, `error`, and `select`.
*
* Borrows from Modernizr.
*
* @param {string} eventNameSuffix Event name, e.g. "click".
* @param {?boolean} capture Check if the capture phase is supported.
* @return {boolean} True if the event is supported.
* @internal
* @license Modernizr 3.0.0pre (Custom Build) | MIT
*/
const Xy = function(e, t) {
  if (e && e.addEventListener) {
    const n = function(o) {
      const r = Yy(o);
      t && Reflect.apply(t, this, [o, r]);
    };
    e.addEventListener("wheel", n, { passive: !0 });
  }
}, Jy = {
  beforeMount(e, t) {
    Xy(e, t.value);
  }
}, xu = {
  modelValue: {
    type: [Number, String, Boolean],
    default: void 0
  },
  label: {
    type: [String, Boolean, Number, Object],
    default: void 0
  },
  indeterminate: Boolean,
  disabled: Boolean,
  checked: Boolean,
  name: {
    type: String,
    default: void 0
  },
  trueLabel: {
    type: [String, Number],
    default: void 0
  },
  falseLabel: {
    type: [String, Number],
    default: void 0
  },
  id: {
    type: String,
    default: void 0
  },
  controls: {
    type: String,
    default: void 0
  },
  border: Boolean,
  size: Wn,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: !0
  }
}, Nu = {
  [He]: (e) => Ue(e) || Ae(e) || yt(e),
  change: (e) => Ue(e) || Ae(e) || yt(e)
}, fo = Symbol("checkboxGroupContextKey"), Qy = ({
  model: e,
  isChecked: t
}) => {
  const n = pe(fo, void 0), o = E(() => {
    var l, a;
    const s = (l = n == null ? void 0 : n.max) == null ? void 0 : l.value, i = (a = n == null ? void 0 : n.min) == null ? void 0 : a.value;
    return !Zn(s) && e.value.length >= s && !t.value || !Zn(i) && e.value.length <= i && t.value;
  });
  return {
    isDisabled: co(E(() => (n == null ? void 0 : n.disabled.value) || o.value)),
    isLimitDisabled: o
  };
}, Zy = (e, {
  model: t,
  isLimitExceeded: n,
  hasOwnLabel: o,
  isDisabled: r,
  isLabeledByFormItem: l
}) => {
  const a = pe(fo, void 0), { formItem: s } = $n(), { emit: i } = Te();
  function u(p) {
    var h, y;
    return p === e.trueLabel || p === !0 ? (h = e.trueLabel) != null ? h : !0 : (y = e.falseLabel) != null ? y : !1;
  }
  function f(p, h) {
    i("change", u(p), h);
  }
  function d(p) {
    if (n.value)
      return;
    const h = p.target;
    i("change", u(h.checked), p);
  }
  async function v(p) {
    n.value || !o.value && !r.value && l.value && (p.composedPath().some((g) => g.tagName === "LABEL") || (t.value = u([!1, e.falseLabel].includes(t.value)), await me(), f(t.value, p)));
  }
  const m = E(() => (a == null ? void 0 : a.validateEvent) || e.validateEvent);
  return X(() => e.modelValue, () => {
    m.value && (s == null || s.validate("change").catch((p) => Ke(p)));
  }), {
    handleChange: d,
    onClickRoot: v
  };
}, e0 = (e) => {
  const t = k(!1), { emit: n } = Te(), o = pe(fo, void 0), r = E(() => Zn(o) === !1), l = k(!1);
  return {
    model: E({
      get() {
        var s, i;
        return r.value ? (s = o == null ? void 0 : o.modelValue) == null ? void 0 : s.value : (i = e.modelValue) != null ? i : t.value;
      },
      set(s) {
        var i, u;
        r.value && mn(s) ? (l.value = ((i = o == null ? void 0 : o.max) == null ? void 0 : i.value) !== void 0 && s.length > (o == null ? void 0 : o.max.value), l.value === !1 && ((u = o == null ? void 0 : o.changeEvent) == null || u.call(o, s))) : (n(He, s), t.value = s);
      }
    }),
    isGroup: r,
    isLimitExceeded: l
  };
}, t0 = (e, t, { model: n }) => {
  const o = pe(fo, void 0), r = k(!1), l = E(() => {
    const u = n.value;
    return yt(u) ? u : mn(u) ? Ze(e.label) ? u.map(Xn).some((f) => pr(f, e.label)) : u.map(Xn).includes(e.label) : u != null ? u === e.trueLabel : !!u;
  }), a = sn(E(() => {
    var u;
    return (u = o == null ? void 0 : o.size) == null ? void 0 : u.value;
  }), {
    prop: !0
  }), s = sn(E(() => {
    var u;
    return (u = o == null ? void 0 : o.size) == null ? void 0 : u.value;
  })), i = E(() => !!t.default || !Mo(e.label));
  return {
    checkboxButtonSize: a,
    isChecked: l,
    isFocused: r,
    checkboxSize: s,
    hasOwnLabel: i
  };
}, n0 = (e, { model: t }) => {
  function n() {
    mn(t.value) && !t.value.includes(e.label) ? t.value.push(e.label) : t.value = e.trueLabel || !0;
  }
  e.checked && n();
}, Ru = (e, t) => {
  const { formItem: n } = $n(), { model: o, isGroup: r, isLimitExceeded: l } = e0(e), {
    isFocused: a,
    isChecked: s,
    checkboxButtonSize: i,
    checkboxSize: u,
    hasOwnLabel: f
  } = t0(e, t, { model: o }), { isDisabled: d } = Qy({ model: o, isChecked: s }), { inputId: v, isLabeledByFormItem: m } = Ho(e, {
    formItemContext: n,
    disableIdGeneration: f,
    disableIdManagement: r
  }), { handleChange: p, onClickRoot: h } = Zy(e, {
    model: o,
    isLimitExceeded: l,
    hasOwnLabel: f,
    isDisabled: d,
    isLabeledByFormItem: m
  });
  return n0(e, { model: o }), {
    inputId: v,
    isLabeledByFormItem: m,
    isChecked: s,
    isDisabled: d,
    isFocused: a,
    checkboxButtonSize: i,
    checkboxSize: u,
    hasOwnLabel: f,
    model: o,
    handleChange: p,
    onClickRoot: h
  };
}, o0 = ["id", "indeterminate", "name", "tabindex", "disabled", "true-value", "false-value"], r0 = ["id", "indeterminate", "disabled", "value", "name", "tabindex"], l0 = z({
  name: "ElCheckbox"
}), a0 = /* @__PURE__ */ z({
  ...l0,
  props: xu,
  emits: Nu,
  setup(e) {
    const t = e, n = No(), {
      inputId: o,
      isLabeledByFormItem: r,
      isChecked: l,
      isDisabled: a,
      isFocused: s,
      checkboxSize: i,
      hasOwnLabel: u,
      model: f,
      handleChange: d,
      onClickRoot: v
    } = Ru(t, n), m = ne("checkbox"), p = E(() => [
      m.b(),
      m.m(i.value),
      m.is("disabled", a.value),
      m.is("bordered", t.border),
      m.is("checked", l.value)
    ]), h = E(() => [
      m.e("input"),
      m.is("disabled", a.value),
      m.is("checked", l.value),
      m.is("indeterminate", t.indeterminate),
      m.is("focus", s.value)
    ]);
    return (y, g) => (P(), K(je(!c(u) && c(r) ? "span" : "label"), {
      class: I(c(p)),
      "aria-controls": y.indeterminate ? y.controls : null,
      onClick: c(v)
    }, {
      default: D(() => [
        B("span", {
          class: I(c(h))
        }, [
          y.trueLabel || y.falseLabel ? Fe((P(), R("input", {
            key: 0,
            id: c(o),
            "onUpdate:modelValue": g[0] || (g[0] = (w) => Xt(f) ? f.value = w : null),
            class: I(c(m).e("original")),
            type: "checkbox",
            indeterminate: y.indeterminate,
            name: y.name,
            tabindex: y.tabindex,
            disabled: c(a),
            "true-value": y.trueLabel,
            "false-value": y.falseLabel,
            onChange: g[1] || (g[1] = (...w) => c(d) && c(d)(...w)),
            onFocus: g[2] || (g[2] = (w) => s.value = !0),
            onBlur: g[3] || (g[3] = (w) => s.value = !1),
            onClick: g[4] || (g[4] = De(() => {
            }, ["stop"]))
          }, null, 42, o0)), [
            [ar, c(f)]
          ]) : Fe((P(), R("input", {
            key: 1,
            id: c(o),
            "onUpdate:modelValue": g[5] || (g[5] = (w) => Xt(f) ? f.value = w : null),
            class: I(c(m).e("original")),
            type: "checkbox",
            indeterminate: y.indeterminate,
            disabled: c(a),
            value: y.label,
            name: y.name,
            tabindex: y.tabindex,
            onChange: g[6] || (g[6] = (...w) => c(d) && c(d)(...w)),
            onFocus: g[7] || (g[7] = (w) => s.value = !0),
            onBlur: g[8] || (g[8] = (w) => s.value = !1),
            onClick: g[9] || (g[9] = De(() => {
            }, ["stop"]))
          }, null, 42, r0)), [
            [ar, c(f)]
          ]),
          B("span", {
            class: I(c(m).e("inner"))
          }, null, 2)
        ], 2),
        c(u) ? (P(), R("span", {
          key: 0,
          class: I(c(m).e("label"))
        }, [
          Z(y.$slots, "default"),
          y.$slots.default ? W("v-if", !0) : (P(), R(ze, { key: 0 }, [
            Wt(ge(y.label), 1)
          ], 64))
        ], 2)) : W("v-if", !0)
      ]),
      _: 3
    }, 8, ["class", "aria-controls", "onClick"]));
  }
});
var s0 = /* @__PURE__ */ ue(a0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);
const i0 = ["name", "tabindex", "disabled", "true-value", "false-value"], u0 = ["name", "tabindex", "disabled", "value"], c0 = z({
  name: "ElCheckboxButton"
}), d0 = /* @__PURE__ */ z({
  ...c0,
  props: xu,
  emits: Nu,
  setup(e) {
    const t = e, n = No(), {
      isFocused: o,
      isChecked: r,
      isDisabled: l,
      checkboxButtonSize: a,
      model: s,
      handleChange: i
    } = Ru(t, n), u = pe(fo, void 0), f = ne("checkbox"), d = E(() => {
      var m, p, h, y;
      const g = (p = (m = u == null ? void 0 : u.fill) == null ? void 0 : m.value) != null ? p : "";
      return {
        backgroundColor: g,
        borderColor: g,
        color: (y = (h = u == null ? void 0 : u.textColor) == null ? void 0 : h.value) != null ? y : "",
        boxShadow: g ? `-1px 0 0 0 ${g}` : void 0
      };
    }), v = E(() => [
      f.b("button"),
      f.bm("button", a.value),
      f.is("disabled", l.value),
      f.is("checked", r.value),
      f.is("focus", o.value)
    ]);
    return (m, p) => (P(), R("label", {
      class: I(c(v))
    }, [
      m.trueLabel || m.falseLabel ? Fe((P(), R("input", {
        key: 0,
        "onUpdate:modelValue": p[0] || (p[0] = (h) => Xt(s) ? s.value = h : null),
        class: I(c(f).be("button", "original")),
        type: "checkbox",
        name: m.name,
        tabindex: m.tabindex,
        disabled: c(l),
        "true-value": m.trueLabel,
        "false-value": m.falseLabel,
        onChange: p[1] || (p[1] = (...h) => c(i) && c(i)(...h)),
        onFocus: p[2] || (p[2] = (h) => o.value = !0),
        onBlur: p[3] || (p[3] = (h) => o.value = !1),
        onClick: p[4] || (p[4] = De(() => {
        }, ["stop"]))
      }, null, 42, i0)), [
        [ar, c(s)]
      ]) : Fe((P(), R("input", {
        key: 1,
        "onUpdate:modelValue": p[5] || (p[5] = (h) => Xt(s) ? s.value = h : null),
        class: I(c(f).be("button", "original")),
        type: "checkbox",
        name: m.name,
        tabindex: m.tabindex,
        disabled: c(l),
        value: m.label,
        onChange: p[6] || (p[6] = (...h) => c(i) && c(i)(...h)),
        onFocus: p[7] || (p[7] = (h) => o.value = !0),
        onBlur: p[8] || (p[8] = (h) => o.value = !1),
        onClick: p[9] || (p[9] = De(() => {
        }, ["stop"]))
      }, null, 42, u0)), [
        [ar, c(s)]
      ]),
      m.$slots.default || m.label ? (P(), R("span", {
        key: 2,
        class: I(c(f).be("button", "inner")),
        style: ke(c(r) ? c(d) : void 0)
      }, [
        Z(m.$slots, "default", {}, () => [
          Wt(ge(m.label), 1)
        ])
      ], 6)) : W("v-if", !0)
    ], 2));
  }
});
var Lu = /* @__PURE__ */ ue(d0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);
const f0 = ye({
  modelValue: {
    type: ce(Array),
    default: () => []
  },
  disabled: Boolean,
  min: Number,
  max: Number,
  size: Wn,
  label: String,
  fill: String,
  textColor: String,
  tag: {
    type: String,
    default: "div"
  },
  validateEvent: {
    type: Boolean,
    default: !0
  }
}), p0 = {
  [He]: (e) => mn(e),
  change: (e) => mn(e)
}, v0 = z({
  name: "ElCheckboxGroup"
}), h0 = /* @__PURE__ */ z({
  ...v0,
  props: f0,
  emits: p0,
  setup(e, { emit: t }) {
    const n = e, o = ne("checkbox"), { formItem: r } = $n(), { inputId: l, isLabeledByFormItem: a } = Ho(n, {
      formItemContext: r
    }), s = async (u) => {
      t(He, u), await me(), t("change", u);
    }, i = E({
      get() {
        return n.modelValue;
      },
      set(u) {
        s(u);
      }
    });
    return Ge(fo, {
      ...Gh(zn(n), [
        "size",
        "min",
        "max",
        "disabled",
        "validateEvent",
        "fill",
        "textColor"
      ]),
      modelValue: i,
      changeEvent: s
    }), X(() => n.modelValue, () => {
      n.validateEvent && (r == null || r.validate("change").catch((u) => Ke(u)));
    }), (u, f) => {
      var d;
      return P(), K(je(u.tag), {
        id: c(l),
        class: I(c(o).b("group")),
        role: "group",
        "aria-label": c(a) ? void 0 : u.label || "checkbox-group",
        "aria-labelledby": c(a) ? (d = c(r)) == null ? void 0 : d.labelId : void 0
      }, {
        default: D(() => [
          Z(u.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var Mu = /* @__PURE__ */ ue(h0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);
const ao = tt(s0, {
  CheckboxButton: Lu,
  CheckboxGroup: Mu
});
Ft(Lu);
Ft(Mu);
const Bu = ye({
  size: Wn,
  disabled: Boolean,
  label: {
    type: [String, Number, Boolean],
    default: ""
  }
}), g0 = ye({
  ...Bu,
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  },
  name: {
    type: String,
    default: ""
  },
  border: Boolean
}), Fu = {
  [He]: (e) => Ue(e) || Ae(e) || yt(e),
  [eo]: (e) => Ue(e) || Ae(e) || yt(e)
}, zu = Symbol("radioGroupKey"), Hu = (e, t) => {
  const n = k(), o = pe(zu, void 0), r = E(() => !!o), l = E({
    get() {
      return r.value ? o.modelValue : e.modelValue;
    },
    set(f) {
      r.value ? o.changeEvent(f) : t && t(He, f), n.value.checked = e.modelValue === e.label;
    }
  }), a = sn(E(() => o == null ? void 0 : o.size)), s = co(E(() => o == null ? void 0 : o.disabled)), i = k(!1), u = E(() => s.value || r.value && l.value !== e.label ? -1 : 0);
  return {
    radioRef: n,
    isGroup: r,
    radioGroup: o,
    focus: i,
    size: a,
    disabled: s,
    tabIndex: u,
    modelValue: l
  };
}, m0 = ["value", "name", "disabled"], b0 = z({
  name: "ElRadio"
}), y0 = /* @__PURE__ */ z({
  ...b0,
  props: g0,
  emits: Fu,
  setup(e, { emit: t }) {
    const n = e, o = ne("radio"), { radioRef: r, radioGroup: l, focus: a, size: s, disabled: i, modelValue: u } = Hu(n, t);
    function f() {
      me(() => t("change", u.value));
    }
    return (d, v) => {
      var m;
      return P(), R("label", {
        class: I([
          c(o).b(),
          c(o).is("disabled", c(i)),
          c(o).is("focus", c(a)),
          c(o).is("bordered", d.border),
          c(o).is("checked", c(u) === d.label),
          c(o).m(c(s))
        ])
      }, [
        B("span", {
          class: I([
            c(o).e("input"),
            c(o).is("disabled", c(i)),
            c(o).is("checked", c(u) === d.label)
          ])
        }, [
          Fe(B("input", {
            ref_key: "radioRef",
            ref: r,
            "onUpdate:modelValue": v[0] || (v[0] = (p) => Xt(u) ? u.value = p : null),
            class: I(c(o).e("original")),
            value: d.label,
            name: d.name || ((m = c(l)) == null ? void 0 : m.name),
            disabled: c(i),
            type: "radio",
            onFocus: v[1] || (v[1] = (p) => a.value = !0),
            onBlur: v[2] || (v[2] = (p) => a.value = !1),
            onChange: f,
            onClick: v[3] || (v[3] = De(() => {
            }, ["stop"]))
          }, null, 42, m0), [
            [Qs, c(u)]
          ]),
          B("span", {
            class: I(c(o).e("inner"))
          }, null, 2)
        ], 2),
        B("span", {
          class: I(c(o).e("label")),
          onKeydown: v[4] || (v[4] = De(() => {
          }, ["stop"]))
        }, [
          Z(d.$slots, "default", {}, () => [
            Wt(ge(d.label), 1)
          ])
        ], 34)
      ], 2);
    };
  }
});
var w0 = /* @__PURE__ */ ue(y0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);
const C0 = ye({
  ...Bu,
  name: {
    type: String,
    default: ""
  }
}), S0 = ["value", "name", "disabled"], E0 = z({
  name: "ElRadioButton"
}), T0 = /* @__PURE__ */ z({
  ...E0,
  props: C0,
  setup(e) {
    const t = e, n = ne("radio"), { radioRef: o, focus: r, size: l, disabled: a, modelValue: s, radioGroup: i } = Hu(t), u = E(() => ({
      backgroundColor: (i == null ? void 0 : i.fill) || "",
      borderColor: (i == null ? void 0 : i.fill) || "",
      boxShadow: i != null && i.fill ? `-1px 0 0 0 ${i.fill}` : "",
      color: (i == null ? void 0 : i.textColor) || ""
    }));
    return (f, d) => {
      var v;
      return P(), R("label", {
        class: I([
          c(n).b("button"),
          c(n).is("active", c(s) === f.label),
          c(n).is("disabled", c(a)),
          c(n).is("focus", c(r)),
          c(n).bm("button", c(l))
        ])
      }, [
        Fe(B("input", {
          ref_key: "radioRef",
          ref: o,
          "onUpdate:modelValue": d[0] || (d[0] = (m) => Xt(s) ? s.value = m : null),
          class: I(c(n).be("button", "original-radio")),
          value: f.label,
          type: "radio",
          name: f.name || ((v = c(i)) == null ? void 0 : v.name),
          disabled: c(a),
          onFocus: d[1] || (d[1] = (m) => r.value = !0),
          onBlur: d[2] || (d[2] = (m) => r.value = !1),
          onClick: d[3] || (d[3] = De(() => {
          }, ["stop"]))
        }, null, 42, S0), [
          [Qs, c(s)]
        ]),
        B("span", {
          class: I(c(n).be("button", "inner")),
          style: ke(c(s) === f.label ? c(u) : {}),
          onKeydown: d[4] || (d[4] = De(() => {
          }, ["stop"]))
        }, [
          Z(f.$slots, "default", {}, () => [
            Wt(ge(f.label), 1)
          ])
        ], 38)
      ], 2);
    };
  }
});
var Du = /* @__PURE__ */ ue(T0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);
const O0 = ye({
  id: {
    type: String,
    default: void 0
  },
  size: Wn,
  disabled: Boolean,
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  },
  fill: {
    type: String,
    default: ""
  },
  label: {
    type: String,
    default: void 0
  },
  textColor: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    default: void 0
  },
  validateEvent: {
    type: Boolean,
    default: !0
  }
}), $0 = Fu, k0 = ["id", "aria-label", "aria-labelledby"], P0 = z({
  name: "ElRadioGroup"
}), _0 = /* @__PURE__ */ z({
  ...P0,
  props: O0,
  emits: $0,
  setup(e, { emit: t }) {
    const n = e, o = ne("radio"), r = En(), l = k(), { formItem: a } = $n(), { inputId: s, isLabeledByFormItem: i } = Ho(n, {
      formItemContext: a
    }), u = (d) => {
      t(He, d), me(() => t("change", d));
    };
    Re(() => {
      const d = l.value.querySelectorAll("[type=radio]"), v = d[0];
      !Array.from(d).some((m) => m.checked) && v && (v.tabIndex = 0);
    });
    const f = E(() => n.name || r.value);
    return Ge(zu, Tn({
      ...zn(n),
      changeEvent: u,
      name: f
    })), X(() => n.modelValue, () => {
      n.validateEvent && (a == null || a.validate("change").catch((d) => Ke(d)));
    }), (d, v) => (P(), R("div", {
      id: c(s),
      ref_key: "radioGroupRef",
      ref: l,
      class: I(c(o).b("group")),
      role: "radiogroup",
      "aria-label": c(i) ? void 0 : d.label || "radio-group",
      "aria-labelledby": c(i) ? c(a).labelId : void 0
    }, [
      Z(d.$slots, "default")
    ], 10, k0));
  }
});
var Vu = /* @__PURE__ */ ue(_0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);
const A0 = tt(w0, {
  RadioButton: Du,
  RadioGroup: Vu
}), I0 = Ft(Vu), x0 = Ft(Du), Wu = ye({
  type: {
    type: String,
    values: ["success", "info", "warning", "danger", ""],
    default: ""
  },
  closable: Boolean,
  disableTransitions: Boolean,
  hit: Boolean,
  color: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    values: Bo,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), N0 = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, R0 = z({
  name: "ElTag"
}), L0 = /* @__PURE__ */ z({
  ...R0,
  props: Wu,
  emits: N0,
  setup(e, { emit: t }) {
    const n = e, o = sn(), r = ne("tag"), l = E(() => {
      const { type: i, hit: u, effect: f, closable: d, round: v } = n;
      return [
        r.b(),
        r.is("closable", d),
        r.m(i),
        r.m(o.value),
        r.m(f),
        r.is("hit", u),
        r.is("round", v)
      ];
    }), a = (i) => {
      t("close", i);
    }, s = (i) => {
      t("click", i);
    };
    return (i, u) => i.disableTransitions ? (P(), R("span", {
      key: 0,
      class: I(c(l)),
      style: ke({ backgroundColor: i.color }),
      onClick: s
    }, [
      B("span", {
        class: I(c(r).e("content"))
      }, [
        Z(i.$slots, "default")
      ], 2),
      i.closable ? (P(), K(c(Be), {
        key: 0,
        class: I(c(r).e("close")),
        onClick: De(a, ["stop"])
      }, {
        default: D(() => [
          G(c(sr))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : W("v-if", !0)
    ], 6)) : (P(), K(gn, {
      key: 1,
      name: `${c(r).namespace.value}-zoom-in-center`,
      appear: ""
    }, {
      default: D(() => [
        B("span", {
          class: I(c(l)),
          style: ke({ backgroundColor: i.color }),
          onClick: s
        }, [
          B("span", {
            class: I(c(r).e("content"))
          }, [
            Z(i.$slots, "default")
          ], 2),
          i.closable ? (P(), K(c(Be), {
            key: 0,
            class: I(c(r).e("close")),
            onClick: De(a, ["stop"])
          }, {
            default: D(() => [
              G(c(sr))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : W("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var M0 = /* @__PURE__ */ ue(L0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
const B0 = tt(M0), F0 = z({
  name: "ElContainer"
}), z0 = /* @__PURE__ */ z({
  ...F0,
  props: {
    direction: {
      type: String
    }
  },
  setup(e) {
    const t = e, n = No(), o = ne("container"), r = E(() => t.direction === "vertical" ? !0 : t.direction === "horizontal" ? !1 : n && n.default ? n.default().some((a) => {
      const s = a.type.name;
      return s === "ElHeader" || s === "ElFooter";
    }) : !1);
    return (l, a) => (P(), R("section", {
      class: I([c(o).b(), c(o).is("vertical", c(r))])
    }, [
      Z(l.$slots, "default")
    ], 2));
  }
});
var H0 = /* @__PURE__ */ ue(z0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/container/src/container.vue"]]);
const D0 = z({
  name: "ElAside"
}), V0 = /* @__PURE__ */ z({
  ...D0,
  props: {
    width: {
      type: String,
      default: null
    }
  },
  setup(e) {
    const t = e, n = ne("aside"), o = E(() => t.width ? n.cssVarBlock({ width: t.width }) : {});
    return (r, l) => (P(), R("aside", {
      class: I(c(n).b()),
      style: ke(c(o))
    }, [
      Z(r.$slots, "default")
    ], 6));
  }
});
var Ku = /* @__PURE__ */ ue(V0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/container/src/aside.vue"]]);
const W0 = z({
  name: "ElFooter"
}), K0 = /* @__PURE__ */ z({
  ...W0,
  props: {
    height: {
      type: String,
      default: null
    }
  },
  setup(e) {
    const t = e, n = ne("footer"), o = E(() => t.height ? n.cssVarBlock({ height: t.height }) : {});
    return (r, l) => (P(), R("footer", {
      class: I(c(n).b()),
      style: ke(c(o))
    }, [
      Z(r.$slots, "default")
    ], 6));
  }
});
var ju = /* @__PURE__ */ ue(K0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/container/src/footer.vue"]]);
const j0 = z({
  name: "ElHeader"
}), U0 = /* @__PURE__ */ z({
  ...j0,
  props: {
    height: {
      type: String,
      default: null
    }
  },
  setup(e) {
    const t = e, n = ne("header"), o = E(() => t.height ? n.cssVarBlock({
      height: t.height
    }) : {});
    return (r, l) => (P(), R("header", {
      class: I(c(n).b()),
      style: ke(c(o))
    }, [
      Z(r.$slots, "default")
    ], 6));
  }
});
var Uu = /* @__PURE__ */ ue(U0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue"]]);
const q0 = z({
  name: "ElMain"
}), G0 = /* @__PURE__ */ z({
  ...q0,
  setup(e) {
    const t = ne("main");
    return (n, o) => (P(), R("main", {
      class: I(c(t).b())
    }, [
      Z(n.$slots, "default")
    ], 2));
  }
});
var qu = /* @__PURE__ */ ue(G0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/container/src/main.vue"]]);
const Y0 = tt(H0, {
  Aside: Ku,
  Footer: ju,
  Header: Uu,
  Main: qu
});
Ft(Ku);
const X0 = Ft(ju);
Ft(Uu);
const J0 = Ft(qu), Q0 = ye({
  mask: {
    type: Boolean,
    default: !0
  },
  customMaskEvent: {
    type: Boolean,
    default: !1
  },
  overlayClass: {
    type: ce([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: ce([String, Number])
  }
}), Z0 = {
  click: (e) => e instanceof MouseEvent
}, ew = "overlay";
var tw = z({
  name: "ElOverlay",
  props: Q0,
  emits: Z0,
  setup(e, { slots: t, emit: n }) {
    const o = ne(ew), r = (i) => {
      n("click", i);
    }, { onClick: l, onMousedown: a, onMouseup: s } = xm(e.customMaskEvent ? void 0 : r);
    return () => e.mask ? G("div", {
      class: [o.b(), e.overlayClass],
      style: {
        zIndex: e.zIndex
      },
      onClick: l,
      onMousedown: a,
      onMouseup: s
    }, [Z(t, "default")], Qo.STYLE | Qo.CLASS | Qo.PROPS, ["onClick", "onMouseup", "onMousedown"]) : re("div", {
      class: e.overlayClass,
      style: {
        zIndex: e.zIndex,
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      }
    }, [Z(t, "default")]);
  }
});
const nw = tw, ow = ye({
  center: Boolean,
  alignCenter: Boolean,
  closeIcon: {
    type: Qe
  },
  customClass: {
    type: String,
    default: ""
  },
  draggable: Boolean,
  fullscreen: Boolean,
  showClose: {
    type: Boolean,
    default: !0
  },
  title: {
    type: String,
    default: ""
  },
  ariaLevel: {
    type: String,
    default: "2"
  }
}), rw = ye({
  ...ow,
  appendToBody: Boolean,
  beforeClose: {
    type: ce(Function)
  },
  destroyOnClose: Boolean,
  closeOnClickModal: {
    type: Boolean,
    default: !0
  },
  closeOnPressEscape: {
    type: Boolean,
    default: !0
  },
  lockScroll: {
    type: Boolean,
    default: !0
  },
  modal: {
    type: Boolean,
    default: !0
  },
  openDelay: {
    type: Number,
    default: 0
  },
  closeDelay: {
    type: Number,
    default: 0
  },
  top: {
    type: String
  },
  modelValue: Boolean,
  modalClass: String,
  width: {
    type: [String, Number]
  },
  zIndex: {
    type: Number
  },
  trapFocus: {
    type: Boolean,
    default: !1
  },
  headerAriaLevel: {
    type: String,
    default: "2"
  }
}), lw = {
  open: () => !0,
  opened: () => !0,
  close: () => !0,
  closed: () => !0,
  [He]: (e) => yt(e),
  openAutoFocus: () => !0,
  closeAutoFocus: () => !0
}, aw = (e, t) => {
  var n;
  const r = Te().emit, { nextZIndex: l } = xr();
  let a = "";
  const s = En(), i = En(), u = k(!1), f = k(!1), d = k(!1), v = k((n = e.zIndex) != null ? n : l());
  let m, p;
  const h = Nr("namespace", wo), y = E(() => {
    const J = {}, te = `--${h.value}-dialog`;
    return e.fullscreen || (e.top && (J[`${te}-margin-top`] = e.top), e.width && (J[`${te}-width`] = Cn(e.width))), J;
  }), g = E(() => e.alignCenter ? { display: "flex" } : {});
  function w() {
    r("opened");
  }
  function S() {
    r("closed"), r(He, !1), e.destroyOnClose && (d.value = !1);
  }
  function b() {
    r("close");
  }
  function O() {
    p == null || p(), m == null || m(), e.openDelay && e.openDelay > 0 ? { stop: m } = Jr(() => A(), e.openDelay) : A();
  }
  function $() {
    m == null || m(), p == null || p(), e.closeDelay && e.closeDelay > 0 ? { stop: p } = Jr(() => F(), e.closeDelay) : F();
  }
  function C() {
    function J(te) {
      te || (f.value = !0, u.value = !1);
    }
    e.beforeClose ? e.beforeClose(J) : $();
  }
  function T() {
    e.closeOnClickModal && C();
  }
  function A() {
    _e && (u.value = !0);
  }
  function F() {
    u.value = !1;
  }
  function L() {
    r("openAutoFocus");
  }
  function N() {
    r("closeAutoFocus");
  }
  function Y(J) {
    var te;
    ((te = J.detail) == null ? void 0 : te.focusReason) === "pointer" && J.preventDefault();
  }
  e.lockScroll && $g(u);
  function ee() {
    e.closeOnPressEscape && C();
  }
  return X(() => e.modelValue, (J) => {
    J ? (f.value = !1, O(), d.value = !0, v.value = Pi(e.zIndex) ? l() : v.value++, me(() => {
      r("open"), t.value && (t.value.scrollTop = 0);
    })) : u.value && $();
  }), X(() => e.fullscreen, (J) => {
    t.value && (J ? (a = t.value.style.transform, t.value.style.transform = "") : t.value.style.transform = a);
  }), Re(() => {
    e.modelValue && (u.value = !0, d.value = !0, O());
  }), {
    afterEnter: w,
    afterLeave: S,
    beforeLeave: b,
    handleClose: C,
    onModalClick: T,
    close: $,
    doClose: F,
    onOpenAutoFocus: L,
    onCloseAutoFocus: N,
    onCloseRequested: ee,
    onFocusoutPrevented: Y,
    titleId: s,
    bodyId: i,
    closed: f,
    style: y,
    overlayDialogStyle: g,
    rendered: d,
    visible: u,
    zIndex: v
  };
}, sw = ye({
  ...rw,
  direction: {
    type: String,
    default: "rtl",
    values: ["ltr", "rtl", "ttb", "btt"]
  },
  size: {
    type: [String, Number],
    default: "30%"
  },
  withHeader: {
    type: Boolean,
    default: !0
  },
  modalFade: {
    type: Boolean,
    default: !0
  },
  headerAriaLevel: {
    type: String,
    default: "2"
  }
}), iw = lw, uw = z({
  name: "ElDrawer",
  components: {
    ElOverlay: nw,
    ElFocusTrap: bu,
    ElIcon: Be,
    Close: sr
  },
  inheritAttrs: !1,
  props: sw,
  emits: iw,
  setup(e, { slots: t }) {
    _o({
      scope: "el-drawer",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/drawer.html#slots"
    }, E(() => !!t.title)), _o({
      scope: "el-drawer",
      from: "custom-class",
      replacement: "class",
      version: "2.3.0",
      ref: "https://element-plus.org/en-US/component/drawer.html#attributes",
      type: "Attribute"
    }, E(() => !!e.customClass));
    const n = k(), o = k(), r = ne("drawer"), { t: l } = ct(), a = E(() => e.direction === "rtl" || e.direction === "ltr"), s = E(() => Cn(e.size));
    return {
      ...aw(e, n),
      drawerRef: n,
      focusStartRef: o,
      isHorizontal: a,
      drawerSize: s,
      ns: r,
      t: l
    };
  }
}), cw = ["aria-label", "aria-labelledby", "aria-describedby"], dw = ["id", "aria-level"], fw = ["aria-label"], pw = ["id"];
function vw(e, t, n, o, r, l) {
  const a = Me("close"), s = Me("el-icon"), i = Me("el-focus-trap"), u = Me("el-overlay");
  return P(), K(Xs, {
    to: "body",
    disabled: !e.appendToBody
  }, [
    G(gn, {
      name: e.ns.b("fade"),
      onAfterEnter: e.afterEnter,
      onAfterLeave: e.afterLeave,
      onBeforeLeave: e.beforeLeave,
      persisted: ""
    }, {
      default: D(() => [
        Fe(G(u, {
          mask: e.modal,
          "overlay-class": e.modalClass,
          "z-index": e.zIndex,
          onClick: e.onModalClick
        }, {
          default: D(() => [
            G(i, {
              loop: "",
              trapped: e.visible,
              "focus-trap-el": e.drawerRef,
              "focus-start-el": e.focusStartRef,
              onReleaseRequested: e.onCloseRequested
            }, {
              default: D(() => [
                B("div", bt({
                  ref: "drawerRef",
                  "aria-modal": "true",
                  "aria-label": e.title || void 0,
                  "aria-labelledby": e.title ? void 0 : e.titleId,
                  "aria-describedby": e.bodyId
                }, e.$attrs, {
                  class: [e.ns.b(), e.direction, e.visible && "open", e.customClass],
                  style: e.isHorizontal ? "width: " + e.drawerSize : "height: " + e.drawerSize,
                  role: "dialog",
                  onClick: t[1] || (t[1] = De(() => {
                  }, ["stop"]))
                }), [
                  B("span", {
                    ref: "focusStartRef",
                    class: I(e.ns.e("sr-focus")),
                    tabindex: "-1"
                  }, null, 2),
                  e.withHeader ? (P(), R("header", {
                    key: 0,
                    class: I(e.ns.e("header"))
                  }, [
                    e.$slots.title ? Z(e.$slots, "title", { key: 1 }, () => [
                      W(" DEPRECATED SLOT ")
                    ]) : Z(e.$slots, "header", {
                      key: 0,
                      close: e.handleClose,
                      titleId: e.titleId,
                      titleClass: e.ns.e("title")
                    }, () => [
                      e.$slots.title ? W("v-if", !0) : (P(), R("span", {
                        key: 0,
                        id: e.titleId,
                        role: "heading",
                        "aria-level": e.headerAriaLevel,
                        class: I(e.ns.e("title"))
                      }, ge(e.title), 11, dw))
                    ]),
                    e.showClose ? (P(), R("button", {
                      key: 2,
                      "aria-label": e.t("el.drawer.close"),
                      class: I(e.ns.e("close-btn")),
                      type: "button",
                      onClick: t[0] || (t[0] = (...f) => e.handleClose && e.handleClose(...f))
                    }, [
                      G(s, {
                        class: I(e.ns.e("close"))
                      }, {
                        default: D(() => [
                          G(a)
                        ]),
                        _: 1
                      }, 8, ["class"])
                    ], 10, fw)) : W("v-if", !0)
                  ], 2)) : W("v-if", !0),
                  e.rendered ? (P(), R("div", {
                    key: 1,
                    id: e.bodyId,
                    class: I(e.ns.e("body"))
                  }, [
                    Z(e.$slots, "default")
                  ], 10, pw)) : W("v-if", !0),
                  e.$slots.footer ? (P(), R("div", {
                    key: 2,
                    class: I(e.ns.e("footer"))
                  }, [
                    Z(e.$slots, "footer")
                  ], 2)) : W("v-if", !0)
                ], 16, cw)
              ]),
              _: 3
            }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onReleaseRequested"])
          ]),
          _: 3
        }, 8, ["mask", "overlay-class", "z-index", "onClick"]), [
          [Rt, e.visible]
        ])
      ]),
      _: 3
    }, 8, ["name", "onAfterEnter", "onAfterLeave", "onBeforeLeave"])
  ], 8, ["disabled"]);
}
var hw = /* @__PURE__ */ ue(uw, [["render", vw], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/drawer/src/drawer.vue"]]);
const gw = tt(hw), mw = /* @__PURE__ */ z({
  inheritAttrs: !1
});
function bw(e, t, n, o, r, l) {
  return Z(e.$slots, "default");
}
var yw = /* @__PURE__ */ ue(mw, [["render", bw], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);
const ww = /* @__PURE__ */ z({
  name: "ElCollectionItem",
  inheritAttrs: !1
});
function Cw(e, t, n, o, r, l) {
  return Z(e.$slots, "default");
}
var Sw = /* @__PURE__ */ ue(ww, [["render", Cw], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);
const Ew = "data-el-collection-item", Tw = (e) => {
  const t = `El${e}Collection`, n = `${t}Item`, o = Symbol(t), r = Symbol(n), l = {
    ...yw,
    name: t,
    setup() {
      const s = k(null), i = /* @__PURE__ */ new Map();
      Ge(o, {
        itemMap: i,
        getItems: () => {
          const f = c(s);
          if (!f)
            return [];
          const d = Array.from(f.querySelectorAll(`[${Ew}]`));
          return [...i.values()].sort((m, p) => d.indexOf(m.ref) - d.indexOf(p.ref));
        },
        collectionRef: s
      });
    }
  }, a = {
    ...Sw,
    name: n,
    setup(s, { attrs: i }) {
      const u = k(null), f = pe(o, void 0);
      Ge(r, {
        collectionItemRef: u
      }), Re(() => {
        const d = c(u);
        d && f.itemMap.set(d, {
          ref: d,
          ...i
        });
      }), Bt(() => {
        const d = c(u);
        f.itemMap.delete(d);
      });
    }
  };
  return {
    COLLECTION_INJECTION_KEY: o,
    COLLECTION_ITEM_INJECTION_KEY: r,
    ElCollection: l,
    ElCollectionItem: a
  };
}, Gr = ye({
  trigger: xo.trigger,
  effect: {
    ...Ot.effect,
    default: "light"
  },
  type: {
    type: ce(String)
  },
  placement: {
    type: ce(String),
    default: "bottom"
  },
  popperOptions: {
    type: ce(Object),
    default: () => ({})
  },
  id: String,
  size: {
    type: String,
    default: ""
  },
  splitButton: Boolean,
  hideOnClick: {
    type: Boolean,
    default: !0
  },
  loop: {
    type: Boolean,
    default: !0
  },
  showTimeout: {
    type: Number,
    default: 150
  },
  hideTimeout: {
    type: Number,
    default: 150
  },
  tabindex: {
    type: ce([Number, String]),
    default: 0
  },
  maxHeight: {
    type: ce([Number, String]),
    default: ""
  },
  popperClass: {
    type: String,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  role: {
    type: String,
    default: "menu"
  },
  buttonProps: {
    type: ce(Object)
  },
  teleported: Ot.teleported
});
ye({
  command: {
    type: [Object, String, Number],
    default: () => ({})
  },
  disabled: Boolean,
  divided: Boolean,
  textValue: String,
  icon: {
    type: Qe
  }
});
ye({
  onKeydown: { type: ce(Function) }
});
Tw("Dropdown");
const Ow = {
  viewBox: "0 0 79 86",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
}, $w = ["id"], kw = ["stop-color"], Pw = ["stop-color"], _w = ["id"], Aw = ["stop-color"], Iw = ["stop-color"], xw = ["id"], Nw = {
  id: "Illustrations",
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, Rw = {
  id: "B-type",
  transform: "translate(-1268.000000, -535.000000)"
}, Lw = {
  id: "Group-2",
  transform: "translate(1268.000000, 535.000000)"
}, Mw = ["fill"], Bw = ["fill"], Fw = {
  id: "Group-Copy",
  transform: "translate(34.500000, 31.500000) scale(-1, 1) rotate(-25.000000) translate(-34.500000, -31.500000) translate(7.000000, 10.000000)"
}, zw = ["fill"], Hw = ["fill"], Dw = ["fill"], Vw = ["fill"], Ww = ["fill"], Kw = {
  id: "Rectangle-Copy-17",
  transform: "translate(53.000000, 45.000000)"
}, jw = ["fill", "xlink:href"], Uw = ["fill", "mask"], qw = ["fill"], Gw = z({
  name: "ImgEmpty"
}), Yw = /* @__PURE__ */ z({
  ...Gw,
  setup(e) {
    const t = ne("empty"), n = En();
    return (o, r) => (P(), R("svg", Ow, [
      B("defs", null, [
        B("linearGradient", {
          id: `linearGradient-1-${c(n)}`,
          x1: "38.8503086%",
          y1: "0%",
          x2: "61.1496914%",
          y2: "100%"
        }, [
          B("stop", {
            "stop-color": `var(${c(t).cssVarBlockName("fill-color-1")})`,
            offset: "0%"
          }, null, 8, kw),
          B("stop", {
            "stop-color": `var(${c(t).cssVarBlockName("fill-color-4")})`,
            offset: "100%"
          }, null, 8, Pw)
        ], 8, $w),
        B("linearGradient", {
          id: `linearGradient-2-${c(n)}`,
          x1: "0%",
          y1: "9.5%",
          x2: "100%",
          y2: "90.5%"
        }, [
          B("stop", {
            "stop-color": `var(${c(t).cssVarBlockName("fill-color-1")})`,
            offset: "0%"
          }, null, 8, Aw),
          B("stop", {
            "stop-color": `var(${c(t).cssVarBlockName("fill-color-6")})`,
            offset: "100%"
          }, null, 8, Iw)
        ], 8, _w),
        B("rect", {
          id: `path-3-${c(n)}`,
          x: "0",
          y: "0",
          width: "17",
          height: "36"
        }, null, 8, xw)
      ]),
      B("g", Nw, [
        B("g", Rw, [
          B("g", Lw, [
            B("path", {
              id: "Oval-Copy-2",
              d: "M39.5,86 C61.3152476,86 79,83.9106622 79,81.3333333 C79,78.7560045 57.3152476,78 35.5,78 C13.6847524,78 0,78.7560045 0,81.3333333 C0,83.9106622 17.6847524,86 39.5,86 Z",
              fill: `var(${c(t).cssVarBlockName("fill-color-3")})`
            }, null, 8, Mw),
            B("polygon", {
              id: "Rectangle-Copy-14",
              fill: `var(${c(t).cssVarBlockName("fill-color-7")})`,
              transform: "translate(27.500000, 51.500000) scale(1, -1) translate(-27.500000, -51.500000) ",
              points: "13 58 53 58 42 45 2 45"
            }, null, 8, Bw),
            B("g", Fw, [
              B("polygon", {
                id: "Rectangle-Copy-10",
                fill: `var(${c(t).cssVarBlockName("fill-color-7")})`,
                transform: "translate(11.500000, 5.000000) scale(1, -1) translate(-11.500000, -5.000000) ",
                points: "2.84078316e-14 3 18 3 23 7 5 7"
              }, null, 8, zw),
              B("polygon", {
                id: "Rectangle-Copy-11",
                fill: `var(${c(t).cssVarBlockName("fill-color-5")})`,
                points: "-3.69149156e-15 7 38 7 38 43 -3.69149156e-15 43"
              }, null, 8, Hw),
              B("rect", {
                id: "Rectangle-Copy-12",
                fill: `url(#linearGradient-1-${c(n)})`,
                transform: "translate(46.500000, 25.000000) scale(-1, 1) translate(-46.500000, -25.000000) ",
                x: "38",
                y: "7",
                width: "17",
                height: "36"
              }, null, 8, Dw),
              B("polygon", {
                id: "Rectangle-Copy-13",
                fill: `var(${c(t).cssVarBlockName("fill-color-2")})`,
                transform: "translate(39.500000, 3.500000) scale(-1, 1) translate(-39.500000, -3.500000) ",
                points: "24 7 41 7 55 -3.63806207e-12 38 -3.63806207e-12"
              }, null, 8, Vw)
            ]),
            B("rect", {
              id: "Rectangle-Copy-15",
              fill: `url(#linearGradient-2-${c(n)})`,
              x: "13",
              y: "45",
              width: "40",
              height: "36"
            }, null, 8, Ww),
            B("g", Kw, [
              B("use", {
                id: "Mask",
                fill: `var(${c(t).cssVarBlockName("fill-color-8")})`,
                transform: "translate(8.500000, 18.000000) scale(-1, 1) translate(-8.500000, -18.000000) ",
                "xlink:href": `#path-3-${c(n)}`
              }, null, 8, jw),
              B("polygon", {
                id: "Rectangle-Copy",
                fill: `var(${c(t).cssVarBlockName("fill-color-9")})`,
                mask: `url(#mask-4-${c(n)})`,
                transform: "translate(12.000000, 9.000000) scale(-1, 1) translate(-12.000000, -9.000000) ",
                points: "7 0 24 0 20 18 7 16.5"
              }, null, 8, Uw)
            ]),
            B("polygon", {
              id: "Rectangle-Copy-18",
              fill: `var(${c(t).cssVarBlockName("fill-color-2")})`,
              transform: "translate(66.000000, 51.500000) scale(-1, 1) translate(-66.000000, -51.500000) ",
              points: "62 45 79 45 70 58 53 58"
            }, null, 8, qw)
          ])
        ])
      ])
    ]));
  }
});
var Xw = /* @__PURE__ */ ue(Yw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/empty/src/img-empty.vue"]]);
const Jw = ye({
  image: {
    type: String,
    default: ""
  },
  imageSize: Number,
  description: {
    type: String,
    default: ""
  }
}), Qw = ["src"], Zw = { key: 1 }, eC = z({
  name: "ElEmpty"
}), tC = /* @__PURE__ */ z({
  ...eC,
  props: Jw,
  setup(e) {
    const t = e, { t: n } = ct(), o = ne("empty"), r = E(() => t.description || n("el.table.emptyText")), l = E(() => ({
      width: Cn(t.imageSize)
    }));
    return (a, s) => (P(), R("div", {
      class: I(c(o).b())
    }, [
      B("div", {
        class: I(c(o).e("image")),
        style: ke(c(l))
      }, [
        a.image ? (P(), R("img", {
          key: 0,
          src: a.image,
          ondragstart: "return false"
        }, null, 8, Qw)) : Z(a.$slots, "image", { key: 1 }, () => [
          G(Xw)
        ])
      ], 6),
      B("div", {
        class: I(c(o).e("description"))
      }, [
        a.$slots.description ? Z(a.$slots, "description", { key: 0 }) : (P(), R("p", Zw, ge(c(r)), 1))
      ], 2),
      a.$slots.default ? (P(), R("div", {
        key: 0,
        class: I(c(o).e("bottom"))
      }, [
        Z(a.$slots, "default")
      ], 2)) : W("v-if", !0)
    ], 2));
  }
});
var nC = /* @__PURE__ */ ue(tC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/empty/src/empty.vue"]]);
const Gu = tt(nC), Yu = Symbol("elPaginationKey"), oC = ye({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  prevText: {
    type: String
  },
  prevIcon: {
    type: Qe
  }
}), rC = {
  click: (e) => e instanceof MouseEvent
}, lC = ["disabled", "aria-label", "aria-disabled"], aC = { key: 0 }, sC = z({
  name: "ElPaginationPrev"
}), iC = /* @__PURE__ */ z({
  ...sC,
  props: oC,
  emits: rC,
  setup(e) {
    const t = e, { t: n } = ct(), o = E(() => t.disabled || t.currentPage <= 1);
    return (r, l) => (P(), R("button", {
      type: "button",
      class: "btn-prev",
      disabled: c(o),
      "aria-label": r.prevText || c(n)("el.pagination.prev"),
      "aria-disabled": c(o),
      onClick: l[0] || (l[0] = (a) => r.$emit("click", a))
    }, [
      r.prevText ? (P(), R("span", aC, ge(r.prevText), 1)) : (P(), K(c(Be), { key: 1 }, {
        default: D(() => [
          (P(), K(je(r.prevIcon)))
        ]),
        _: 1
      }))
    ], 8, lC));
  }
});
var uC = /* @__PURE__ */ ue(iC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue"]]);
const cC = ye({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  pageCount: {
    type: Number,
    default: 50
  },
  nextText: {
    type: String
  },
  nextIcon: {
    type: Qe
  }
}), dC = ["disabled", "aria-label", "aria-disabled"], fC = { key: 0 }, pC = z({
  name: "ElPaginationNext"
}), vC = /* @__PURE__ */ z({
  ...pC,
  props: cC,
  emits: ["click"],
  setup(e) {
    const t = e, { t: n } = ct(), o = E(() => t.disabled || t.currentPage === t.pageCount || t.pageCount === 0);
    return (r, l) => (P(), R("button", {
      type: "button",
      class: "btn-next",
      disabled: c(o),
      "aria-label": r.nextText || c(n)("el.pagination.next"),
      "aria-disabled": c(o),
      onClick: l[0] || (l[0] = (a) => r.$emit("click", a))
    }, [
      r.nextText ? (P(), R("span", fC, ge(r.nextText), 1)) : (P(), K(c(Be), { key: 1 }, {
        default: D(() => [
          (P(), K(je(r.nextIcon)))
        ]),
        _: 1
      }))
    ], 8, dC));
  }
});
var hC = /* @__PURE__ */ ue(vC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue"]]);
const Xu = Symbol("ElSelectGroup"), Lr = Symbol("ElSelect");
function gC(e, t) {
  const n = pe(Lr), o = pe(Xu, { disabled: !1 }), r = E(() => Ze(e.value)), l = E(() => n.props.multiple ? d(n.props.modelValue, e.value) : v(e.value, n.props.modelValue)), a = E(() => {
    if (n.props.multiple) {
      const h = n.props.modelValue || [];
      return !l.value && h.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = E(() => e.label || (r.value ? "" : e.value)), i = E(() => e.value || e.label || ""), u = E(() => e.disabled || t.groupDisabled || a.value), f = Te(), d = (h = [], y) => {
    if (r.value) {
      const g = n.props.valueKey;
      return h && h.some((w) => Xn(rt(w, g)) === rt(y, g));
    } else
      return h && h.includes(y);
  }, v = (h, y) => {
    if (r.value) {
      const { valueKey: g } = n.props;
      return rt(h, g) === rt(y, g);
    } else
      return h === y;
  }, m = () => {
    !e.disabled && !o.disabled && (n.hoverIndex = n.optionsArray.indexOf(f.proxy));
  };
  X(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), X(() => e.value, (h, y) => {
    const { remote: g, valueKey: w } = n.props;
    if (Object.is(h, y) || (n.onOptionDestroy(y, f.proxy), n.onOptionCreate(f.proxy)), !e.created && !g) {
      if (w && Ze(h) && Ze(y) && h[w] === y[w])
        return;
      n.setSelected();
    }
  }), X(() => o.disabled, () => {
    t.groupDisabled = o.disabled;
  }, { immediate: !0 });
  const { queryChange: p } = Xn(n);
  return X(p, (h) => {
    const { query: y } = c(h), g = new RegExp(Jh(y), "i");
    t.visible = g.test(s.value) || e.created, t.visible || n.filteredOptionsCount--;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: s,
    currentValue: i,
    itemSelected: l,
    isDisabled: u,
    hoverItem: m
  };
}
const mC = z({
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: !0,
      type: [String, Number, Boolean, Object]
    },
    label: [String, Number],
    created: Boolean,
    disabled: Boolean
  },
  setup(e) {
    const t = ne("select"), n = En(), o = E(() => [
      t.be("dropdown", "item"),
      t.is("disabled", c(s)),
      {
        selected: c(a),
        hover: c(d)
      }
    ]), r = Tn({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hitState: !1,
      hover: !1
    }), { currentLabel: l, itemSelected: a, isDisabled: s, select: i, hoverItem: u } = gC(e, r), { visible: f, hover: d } = zn(r), v = Te().proxy;
    i.onOptionCreate(v), Bt(() => {
      const p = v.value, { selected: h } = i, g = (i.props.multiple ? h : [h]).some((w) => w.value === v.value);
      me(() => {
        i.cachedOptions.get(p) === v && !g && i.cachedOptions.delete(p);
      }), i.onOptionDestroy(p, v);
    });
    function m() {
      e.disabled !== !0 && r.groupDisabled !== !0 && i.handleOptionSelect(v);
    }
    return {
      ns: t,
      id: n,
      containerKls: o,
      currentLabel: l,
      itemSelected: a,
      isDisabled: s,
      select: i,
      hoverItem: u,
      visible: f,
      hover: d,
      selectOptionClick: m,
      states: r
    };
  }
}), bC = ["id", "aria-disabled", "aria-selected"];
function yC(e, t, n, o, r, l) {
  return Fe((P(), R("li", {
    id: e.id,
    class: I(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMouseenter: t[0] || (t[0] = (...a) => e.hoverItem && e.hoverItem(...a)),
    onClick: t[1] || (t[1] = De((...a) => e.selectOptionClick && e.selectOptionClick(...a), ["stop"]))
  }, [
    Z(e.$slots, "default", {}, () => [
      B("span", null, ge(e.currentLabel), 1)
    ])
  ], 42, bC)), [
    [Rt, e.visible]
  ]);
}
var ra = /* @__PURE__ */ ue(mC, [["render", yC], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
const wC = z({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = pe(Lr), t = ne("select"), n = E(() => e.props.popperClass), o = E(() => e.props.multiple), r = E(() => e.props.fitInputWidth), l = k("");
    function a() {
      var s;
      l.value = `${(s = e.selectWrapper) == null ? void 0 : s.offsetWidth}px`;
    }
    return Re(() => {
      a(), Jn(e.selectWrapper, a);
    }), {
      ns: t,
      minWidth: l,
      popperClass: n,
      isMultiple: o,
      isFitInputWidth: r
    };
  }
});
function CC(e, t, n, o, r, l) {
  return P(), R("div", {
    class: I([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: ke({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    Z(e.$slots, "default")
  ], 6);
}
var SC = /* @__PURE__ */ ue(wC, [["render", CC], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function EC(e) {
  const { t } = ct();
  return Tn({
    options: /* @__PURE__ */ new Map(),
    cachedOptions: /* @__PURE__ */ new Map(),
    disabledOptions: /* @__PURE__ */ new Map(),
    createdLabel: null,
    createdSelected: !1,
    selected: e.multiple ? [] : {},
    inputLength: 20,
    inputWidth: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: !1,
    selectedLabel: "",
    hoverIndex: -1,
    query: "",
    previousQuery: null,
    inputHovering: !1,
    cachedPlaceHolder: "",
    currentPlaceholder: t("el.select.placeholder"),
    menuVisibleOnFocus: !1,
    isOnComposition: !1,
    prefixWidth: 11,
    mouseEnter: !1,
    focused: !1
  });
}
const TC = (e, t, n) => {
  const { t: o } = ct(), r = ne("select");
  _o({
    from: "suffixTransition",
    replacement: "override style scheme",
    version: "2.3.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/select.html#select-attributes"
  }, E(() => e.suffixTransition === !1));
  const l = k(null), a = k(null), s = k(null), i = k(null), u = k(null), f = k(null), d = k(null), v = k(null), m = k(), p = Rn({ query: "" }), h = Rn(""), y = k([]);
  let g = 0;
  const { form: w, formItem: S } = $n(), b = E(() => !e.filterable || e.multiple || !t.visible), O = E(() => e.disabled || (w == null ? void 0 : w.disabled)), $ = E(() => {
    const _ = e.multiple ? Array.isArray(e.modelValue) && e.modelValue.length > 0 : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== "";
    return e.clearable && !O.value && t.inputHovering && _;
  }), C = E(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), T = E(() => r.is("reverse", C.value && t.visible && e.suffixTransition)), A = E(() => (w == null ? void 0 : w.statusIcon) && (S == null ? void 0 : S.validateState) && Ri[S == null ? void 0 : S.validateState]), F = E(() => e.remote ? 300 : 0), L = E(() => e.loading ? e.loadingText || o("el.select.loading") : e.remote && t.query === "" && t.options.size === 0 ? !1 : e.filterable && t.query && t.options.size > 0 && t.filteredOptionsCount === 0 ? e.noMatchText || o("el.select.noMatch") : t.options.size === 0 ? e.noDataText || o("el.select.noData") : null), N = E(() => {
    const _ = Array.from(t.options.values()), M = [];
    return y.value.forEach((q) => {
      const fe = _.findIndex((it) => it.currentLabel === q);
      fe > -1 && M.push(_[fe]);
    }), M.length >= _.length ? M : _;
  }), Y = E(() => Array.from(t.cachedOptions.values())), ee = E(() => {
    const _ = N.value.filter((M) => !M.created).some((M) => M.currentLabel === t.query);
    return e.filterable && e.allowCreate && t.query !== "" && !_;
  }), J = sn(), te = E(() => ["small"].includes(J.value) ? "small" : "default"), j = E({
    get() {
      return t.visible && L.value !== !1;
    },
    set(_) {
      t.visible = _;
    }
  });
  X([() => O.value, () => J.value, () => w == null ? void 0 : w.size], () => {
    me(() => {
      le();
    });
  }), X(() => e.placeholder, (_) => {
    t.cachedPlaceHolder = t.currentPlaceholder = _, e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (t.currentPlaceholder = "");
  }), X(() => e.modelValue, (_, M) => {
    e.multiple && (le(), _ && _.length > 0 || a.value && t.query !== "" ? t.currentPlaceholder = "" : t.currentPlaceholder = t.cachedPlaceHolder, e.filterable && !e.reserveKeyword && (t.query = "", x(t.query))), de(), e.filterable && !e.multiple && (t.inputLength = 20), !pr(_, M) && e.validateEvent && (S == null || S.validate("change").catch((q) => Ke(q)));
  }, {
    flush: "post",
    deep: !0
  }), X(() => t.visible, (_) => {
    var M, q, fe, it, gt;
    _ ? ((q = (M = i.value) == null ? void 0 : M.updatePopper) == null || q.call(M), e.filterable && (t.filteredOptionsCount = t.optionsCount, t.query = e.remote ? "" : t.selectedLabel, (it = (fe = s.value) == null ? void 0 : fe.focus) == null || it.call(fe), e.multiple ? (gt = a.value) == null || gt.focus() : t.selectedLabel && (t.currentPlaceholder = `${t.selectedLabel}`, t.selectedLabel = ""), x(t.query), !e.multiple && !e.remote && (p.value.query = "", ho(p), ho(h)))) : (e.filterable && (lt(e.filterMethod) && e.filterMethod(""), lt(e.remoteMethod) && e.remoteMethod("")), t.query = "", t.previousQuery = null, t.selectedLabel = "", t.inputLength = 20, t.menuVisibleOnFocus = !1, Ce(), me(() => {
      a.value && a.value.value === "" && t.selected.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }), e.multiple || (t.selected && (e.filterable && e.allowCreate && t.createdSelected && t.createdLabel ? t.selectedLabel = t.createdLabel : t.selectedLabel = t.selected.currentLabel, e.filterable && (t.query = t.selectedLabel)), e.filterable && (t.currentPlaceholder = t.cachedPlaceHolder))), n.emit("visible-change", _);
  }), X(() => t.options.entries(), () => {
    var _, M, q;
    if (!_e)
      return;
    (M = (_ = i.value) == null ? void 0 : _.updatePopper) == null || M.call(_), e.multiple && le();
    const fe = ((q = d.value) == null ? void 0 : q.querySelectorAll("input")) || [];
    (!e.filterable && !e.defaultFirstOption && !Zn(e.modelValue) || !Array.from(fe).includes(document.activeElement)) && de(), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && ie();
  }, {
    flush: "post"
  }), X(() => t.hoverIndex, (_) => {
    Ae(_) && _ > -1 ? m.value = N.value[_] || {} : m.value = {}, N.value.forEach((M) => {
      M.hover = m.value === M;
    });
  });
  const le = () => {
    me(() => {
      var _, M;
      if (!l.value)
        return;
      const q = l.value.$el.querySelector("input");
      g = g || (q.clientHeight > 0 ? q.clientHeight + 2 : 0);
      const fe = f.value, it = getComputedStyle(q).getPropertyValue(r.cssVarName("input-height")), gt = Number.parseFloat(it) || sg(J.value || (w == null ? void 0 : w.size)), It = J.value || gt === g || g <= 0 ? gt : g;
      !(q.offsetParent === null) && (q.style.height = `${(t.selected.length === 0 ? It : Math.max(fe ? fe.clientHeight + (fe.clientHeight > It ? 6 : 0) : 0, It)) - 2}px`), t.visible && L.value !== !1 && ((M = (_ = i.value) == null ? void 0 : _.updatePopper) == null || M.call(_));
    });
  }, x = async (_) => {
    if (!(t.previousQuery === _ || t.isOnComposition)) {
      if (t.previousQuery === null && (lt(e.filterMethod) || lt(e.remoteMethod))) {
        t.previousQuery = _;
        return;
      }
      t.previousQuery = _, me(() => {
        var M, q;
        t.visible && ((q = (M = i.value) == null ? void 0 : M.updatePopper) == null || q.call(M));
      }), t.hoverIndex = -1, e.multiple && e.filterable && me(() => {
        if (!O.value) {
          const M = a.value.value.length * 15 + 20;
          t.inputLength = e.collapseTags ? Math.min(50, M) : M, U();
        }
        le();
      }), e.remote && lt(e.remoteMethod) ? (t.hoverIndex = -1, e.remoteMethod(_)) : lt(e.filterMethod) ? (e.filterMethod(_), ho(h)) : (t.filteredOptionsCount = t.optionsCount, p.value.query = _, ho(p), ho(h)), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && (await me(), ie());
    }
  }, U = () => {
    t.currentPlaceholder !== "" && (t.currentPlaceholder = a.value.value ? "" : t.cachedPlaceHolder);
  }, ie = () => {
    const _ = N.value.filter((fe) => fe.visible && !fe.disabled && !fe.states.groupDisabled), M = _.find((fe) => fe.created), q = _[0];
    t.hoverIndex = Ye(N.value, M || q);
  }, de = () => {
    var _;
    if (e.multiple)
      t.selectedLabel = "";
    else {
      const q = we(e.modelValue);
      (_ = q.props) != null && _.created ? (t.createdLabel = q.props.value, t.createdSelected = !0) : t.createdSelected = !1, t.selectedLabel = q.currentLabel, t.selected = q, e.filterable && (t.query = t.selectedLabel);
      return;
    }
    const M = [];
    Array.isArray(e.modelValue) && e.modelValue.forEach((q) => {
      M.push(we(q));
    }), t.selected = M, me(() => {
      le();
    });
  }, we = (_) => {
    let M;
    const q = Br(_).toLowerCase() === "object", fe = Br(_).toLowerCase() === "null", it = Br(_).toLowerCase() === "undefined";
    for (let Ut = t.cachedOptions.size - 1; Ut >= 0; Ut--) {
      const xt = Y.value[Ut];
      if (q ? rt(xt.value, e.valueKey) === rt(_, e.valueKey) : xt.value === _) {
        M = {
          value: _,
          currentLabel: xt.currentLabel,
          isDisabled: xt.isDisabled
        };
        break;
      }
    }
    if (M)
      return M;
    const gt = q ? _.label : !fe && !it ? _ : "", It = {
      value: _,
      currentLabel: gt
    };
    return e.multiple && (It.hitState = !1), It;
  }, Ce = () => {
    setTimeout(() => {
      const _ = e.valueKey;
      e.multiple ? t.selected.length > 0 ? t.hoverIndex = Math.min.apply(null, t.selected.map((M) => N.value.findIndex((q) => rt(q, _) === rt(M, _)))) : t.hoverIndex = -1 : t.hoverIndex = N.value.findIndex((M) => Ee(M) === Ee(t.selected));
    }, 300);
  }, Oe = () => {
    var _, M;
    $e(), (M = (_ = i.value) == null ? void 0 : _.updatePopper) == null || M.call(_), e.multiple && le();
  }, $e = () => {
    var _;
    t.inputWidth = (_ = l.value) == null ? void 0 : _.$el.offsetWidth;
  }, Le = () => {
    e.filterable && t.query !== t.selectedLabel && (t.query = t.selectedLabel, x(t.query));
  }, Se = Qn(() => {
    Le();
  }, F.value), Ve = Qn((_) => {
    x(_.target.value);
  }, F.value), V = (_) => {
    pr(e.modelValue, _) || n.emit(eo, _);
  }, oe = (_) => Hh(_, (M) => !t.disabledOptions.has(M)), Pe = (_) => {
    if (_.code !== ln.delete) {
      if (_.target.value.length <= 0 && !ve()) {
        const M = e.modelValue.slice(), q = oe(M);
        if (q < 0)
          return;
        M.splice(q, 1), n.emit(He, M), V(M);
      }
      _.target.value.length === 1 && e.modelValue.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }
  }, xe = (_, M) => {
    const q = t.selected.indexOf(M);
    if (q > -1 && !O.value) {
      const fe = e.modelValue.slice();
      fe.splice(q, 1), n.emit(He, fe), V(fe), n.emit("remove-tag", M.value);
    }
    _.stopPropagation(), se();
  }, at = (_) => {
    _.stopPropagation();
    const M = e.multiple ? [] : "";
    if (!Ue(M))
      for (const q of t.selected)
        q.isDisabled && M.push(q.value);
    n.emit(He, M), V(M), t.hoverIndex = -1, t.visible = !1, n.emit("clear"), se();
  }, dt = (_) => {
    var M;
    if (e.multiple) {
      const q = (e.modelValue || []).slice(), fe = Ye(q, _.value);
      fe > -1 ? q.splice(fe, 1) : (e.multipleLimit <= 0 || q.length < e.multipleLimit) && q.push(_.value), n.emit(He, q), V(q), _.created && (t.query = "", x(""), t.inputLength = 20), e.filterable && ((M = a.value) == null || M.focus());
    } else
      n.emit(He, _.value), V(_.value), t.visible = !1;
    _t(), !t.visible && me(() => {
      st(_);
    });
  }, Ye = (_ = [], M) => {
    if (!Ze(M))
      return _.indexOf(M);
    const q = e.valueKey;
    let fe = -1;
    return _.some((it, gt) => Xn(rt(it, q)) === rt(M, q) ? (fe = gt, !0) : !1), fe;
  }, _t = () => {
    const _ = a.value || l.value;
    _ && (_ == null || _.focus());
  }, st = (_) => {
    var M, q, fe, it, gt;
    const It = Array.isArray(_) ? _[0] : _;
    let Ut = null;
    if (It != null && It.value) {
      const xt = N.value.filter((Do) => Do.value === It.value);
      xt.length > 0 && (Ut = xt[0].$el);
    }
    if (i.value && Ut) {
      const xt = (it = (fe = (q = (M = i.value) == null ? void 0 : M.popperRef) == null ? void 0 : q.contentRef) == null ? void 0 : fe.querySelector) == null ? void 0 : it.call(fe, `.${r.be("dropdown", "wrap")}`);
      xt && tg(xt, Ut);
    }
    (gt = v.value) == null || gt.handleScroll();
  }, ft = (_) => {
    t.optionsCount++, t.filteredOptionsCount++, t.options.set(_.value, _), t.cachedOptions.set(_.value, _), _.disabled && t.disabledOptions.set(_.value, _);
  }, Xe = (_, M) => {
    t.options.get(_) === M && (t.optionsCount--, t.filteredOptionsCount--, t.options.delete(_));
  }, pt = (_) => {
    _.code !== ln.backspace && ve(!1), t.inputLength = a.value.value.length * 15 + 20, le();
  }, ve = (_) => {
    if (!Array.isArray(t.selected))
      return;
    const M = oe(t.selected.map((fe) => fe.value)), q = t.selected[M];
    if (q)
      return _ === !0 || _ === !1 ? (q.hitState = _, _) : (q.hitState = !q.hitState, q.hitState);
  }, nt = (_) => {
    const M = _.target.value;
    if (_.type === "compositionend")
      t.isOnComposition = !1, me(() => x(M));
    else {
      const q = M[M.length - 1] || "";
      t.isOnComposition = !Mi(q);
    }
  }, vt = () => {
    me(() => st(t.selected));
  }, H = (_) => {
    t.focused || ((e.automaticDropdown || e.filterable) && (e.filterable && !t.visible && (t.menuVisibleOnFocus = !0), t.visible = !0), t.focused = !0, n.emit("focus", _));
  }, se = () => {
    var _, M;
    t.visible ? (_ = a.value || l.value) == null || _.focus() : (M = l.value) == null || M.focus();
  }, Ie = () => {
    var _, M, q;
    t.visible = !1, (_ = l.value) == null || _.blur(), (q = (M = s.value) == null ? void 0 : M.blur) == null || q.call(M);
  }, qe = (_) => {
    var M, q, fe;
    (M = i.value) != null && M.isFocusInsideContent(_) || (q = u.value) != null && q.isFocusInsideContent(_) || (fe = d.value) != null && fe.contains(_.relatedTarget) || (t.visible && Q(), t.focused = !1, n.emit("blur", _));
  }, en = (_) => {
    at(_);
  }, Q = () => {
    t.visible = !1;
  }, ae = (_) => {
    t.visible && (_.preventDefault(), _.stopPropagation(), t.visible = !1);
  }, be = (_) => {
    _ && !t.mouseEnter || O.value || (t.menuVisibleOnFocus ? t.menuVisibleOnFocus = !1 : (!i.value || !i.value.isFocusInsideContent()) && (t.visible = !t.visible), se());
  }, he = () => {
    t.visible ? N.value[t.hoverIndex] && dt(N.value[t.hoverIndex]) : be();
  }, Ee = (_) => Ze(_.value) ? rt(_.value, e.valueKey) : _.value, We = E(() => N.value.filter((_) => _.visible).every((_) => _.disabled)), ot = E(() => e.multiple ? t.selected.slice(0, e.maxCollapseTags) : []), At = E(() => e.multiple ? t.selected.slice(e.maxCollapseTags) : []), ht = (_) => {
    if (!t.visible) {
      t.visible = !0;
      return;
    }
    if (!(t.options.size === 0 || t.filteredOptionsCount === 0) && !t.isOnComposition && !We.value) {
      _ === "next" ? (t.hoverIndex++, t.hoverIndex === t.options.size && (t.hoverIndex = 0)) : _ === "prev" && (t.hoverIndex--, t.hoverIndex < 0 && (t.hoverIndex = t.options.size - 1));
      const M = N.value[t.hoverIndex];
      (M.disabled === !0 || M.states.groupDisabled === !0 || !M.visible) && ht(_), me(() => st(m.value));
    }
  }, po = () => {
    t.mouseEnter = !0;
  }, Kn = () => {
    t.mouseEnter = !1;
  }, vo = (_, M) => {
    var q, fe;
    xe(_, M), (fe = (q = u.value) == null ? void 0 : q.updatePopper) == null || fe.call(q);
  }, kn = E(() => ({
    maxWidth: `${c(t.inputWidth) - 32 - (A.value ? 22 : 0)}px`,
    width: "100%"
  }));
  return {
    optionList: y,
    optionsArray: N,
    hoverOption: m,
    selectSize: J,
    handleResize: Oe,
    debouncedOnInputChange: Se,
    debouncedQueryChange: Ve,
    deletePrevTag: Pe,
    deleteTag: xe,
    deleteSelected: at,
    handleOptionSelect: dt,
    scrollToOption: st,
    readonly: b,
    resetInputHeight: le,
    showClose: $,
    iconComponent: C,
    iconReverse: T,
    showNewOption: ee,
    collapseTagSize: te,
    setSelected: de,
    managePlaceholder: U,
    selectDisabled: O,
    emptyText: L,
    toggleLastOptionHitState: ve,
    resetInputState: pt,
    handleComposition: nt,
    onOptionCreate: ft,
    onOptionDestroy: Xe,
    handleMenuEnter: vt,
    handleFocus: H,
    focus: se,
    blur: Ie,
    handleBlur: qe,
    handleClearClick: en,
    handleClose: Q,
    handleKeydownEscape: ae,
    toggleMenu: be,
    selectOption: he,
    getValueKey: Ee,
    navigateOptions: ht,
    handleDeleteTooltipTag: vo,
    dropMenuVisible: j,
    queryChange: p,
    groupQueryChange: h,
    showTagList: ot,
    collapseTagList: At,
    selectTagsStyle: kn,
    reference: l,
    input: a,
    iOSInput: s,
    tooltipRef: i,
    tagTooltipRef: u,
    tags: f,
    selectWrapper: d,
    scrollbar: v,
    handleMouseEnter: po,
    handleMouseLeave: Kn
  };
};
var OC = z({
  name: "ElOptions",
  emits: ["update-options"],
  setup(e, { slots: t, emit: n }) {
    let o = [];
    function r(l, a) {
      if (l.length !== a.length)
        return !1;
      for (const [s] of l.entries())
        if (l[s] != a[s])
          return !1;
      return !0;
    }
    return () => {
      var l, a;
      const s = (l = t.default) == null ? void 0 : l.call(t), i = [];
      function u(f) {
        Array.isArray(f) && f.forEach((d) => {
          var v, m, p, h;
          const y = (v = (d == null ? void 0 : d.type) || {}) == null ? void 0 : v.name;
          y === "ElOptionGroup" ? u(!Ue(d.children) && !Array.isArray(d.children) && lt((m = d.children) == null ? void 0 : m.default) ? (p = d.children) == null ? void 0 : p.default() : d.children) : y === "ElOption" ? i.push((h = d.props) == null ? void 0 : h.label) : Array.isArray(d.children) && u(d.children);
        });
      }
      return s.length && u((a = s[0]) == null ? void 0 : a.children), r(i, o) || (o = i, n("update-options", i)), s;
    };
  }
});
const Ls = "ElSelect", $C = z({
  name: Ls,
  componentName: Ls,
  components: {
    ElInput: cu,
    ElSelectMenu: SC,
    ElOption: ra,
    ElOptions: OC,
    ElTag: B0,
    ElScrollbar: Ql,
    ElTooltip: oa,
    ElIcon: Be
  },
  directives: { ClickOutside: Tu },
  props: {
    name: String,
    id: String,
    modelValue: {
      type: [Array, String, Number, Boolean, Object],
      default: void 0
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    automaticDropdown: Boolean,
    size: {
      type: String,
      validator: Li
    },
    effect: {
      type: String,
      default: "light"
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: {
      type: String,
      default: ""
    },
    popperOptions: {
      type: Object,
      default: () => ({})
    },
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String
    },
    defaultFirstOption: Boolean,
    reserveKeyword: {
      type: Boolean,
      default: !0
    },
    valueKey: {
      type: String,
      default: "value"
    },
    collapseTags: Boolean,
    collapseTagsTooltip: Boolean,
    maxCollapseTags: {
      type: Number,
      default: 1
    },
    teleported: Ot.teleported,
    persistent: {
      type: Boolean,
      default: !0
    },
    clearIcon: {
      type: Qe,
      default: $l
    },
    fitInputWidth: Boolean,
    suffixIcon: {
      type: Qe,
      default: Zs
    },
    tagType: { ...Wu.type, default: "info" },
    validateEvent: {
      type: Boolean,
      default: !0
    },
    remoteShowSuffix: Boolean,
    suffixTransition: {
      type: Boolean,
      default: !0
    },
    placement: {
      type: String,
      values: Ar,
      default: "bottom-start"
    },
    ariaLabel: {
      type: String,
      default: void 0
    }
  },
  emits: [
    He,
    eo,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(e, t) {
    const n = ne("select"), o = ne("input"), { t: r } = ct(), l = En(), a = EC(e), {
      optionList: s,
      optionsArray: i,
      hoverOption: u,
      selectSize: f,
      readonly: d,
      handleResize: v,
      collapseTagSize: m,
      debouncedOnInputChange: p,
      debouncedQueryChange: h,
      deletePrevTag: y,
      deleteTag: g,
      deleteSelected: w,
      handleOptionSelect: S,
      scrollToOption: b,
      setSelected: O,
      resetInputHeight: $,
      managePlaceholder: C,
      showClose: T,
      selectDisabled: A,
      iconComponent: F,
      iconReverse: L,
      showNewOption: N,
      emptyText: Y,
      toggleLastOptionHitState: ee,
      resetInputState: J,
      handleComposition: te,
      onOptionCreate: j,
      onOptionDestroy: le,
      handleMenuEnter: x,
      handleFocus: U,
      focus: ie,
      blur: de,
      handleBlur: we,
      handleClearClick: Ce,
      handleClose: Oe,
      handleKeydownEscape: $e,
      toggleMenu: Le,
      selectOption: Se,
      getValueKey: Ve,
      navigateOptions: V,
      handleDeleteTooltipTag: oe,
      dropMenuVisible: Pe,
      reference: xe,
      input: at,
      iOSInput: dt,
      tooltipRef: Ye,
      tagTooltipRef: _t,
      tags: st,
      selectWrapper: ft,
      scrollbar: Xe,
      queryChange: pt,
      groupQueryChange: ve,
      handleMouseEnter: nt,
      handleMouseLeave: vt,
      showTagList: H,
      collapseTagList: se,
      selectTagsStyle: Ie
    } = TC(e, a, t), {
      inputWidth: qe,
      selected: en,
      inputLength: Q,
      filteredOptionsCount: ae,
      visible: be,
      selectedLabel: he,
      hoverIndex: Ee,
      query: We,
      inputHovering: ot,
      currentPlaceholder: At,
      menuVisibleOnFocus: ht,
      isOnComposition: po,
      options: Kn,
      cachedOptions: vo,
      optionsCount: kn,
      prefixWidth: _
    } = zn(a), M = E(() => {
      const St = [n.b()], Pn = c(f);
      return Pn && St.push(n.m(Pn)), e.disabled && St.push(n.m("disabled")), St;
    }), q = E(() => [
      n.e("tags"),
      n.is("disabled", c(A))
    ]), fe = E(() => [
      n.b("tags-wrapper"),
      { "has-prefix": c(_) && c(en).length }
    ]), it = E(() => [
      n.e("input"),
      n.is(c(f)),
      n.is("disabled", c(A))
    ]), gt = E(() => [
      n.e("input"),
      n.is(c(f)),
      n.em("input", "iOS")
    ]), It = E(() => [
      n.is("empty", !e.allowCreate && !!c(We) && c(ae) === 0)
    ]), Ut = E(() => ({ maxWidth: `${c(qe) > 123 ? c(qe) - 123 : c(qe) - 75}px` })), xt = E(() => ({
      marginLeft: `${c(_)}px`,
      flexGrow: 1,
      width: `${c(Q) / (c(qe) - 32)}%`,
      maxWidth: `${c(qe) - 42}px`
    }));
    Ge(Lr, Tn({
      props: e,
      options: Kn,
      optionsArray: i,
      cachedOptions: vo,
      optionsCount: kn,
      filteredOptionsCount: ae,
      hoverIndex: Ee,
      handleOptionSelect: S,
      onOptionCreate: j,
      onOptionDestroy: le,
      selectWrapper: ft,
      selected: en,
      setSelected: O,
      queryChange: pt,
      groupQueryChange: ve
    })), Re(() => {
      a.cachedPlaceHolder = At.value = e.placeholder || (() => r("el.select.placeholder")), e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (At.value = ""), Jn(ft, v), e.remote && e.multiple && $(), me(() => {
        const St = xe.value && xe.value.$el;
        if (St && (qe.value = St.getBoundingClientRect().width, t.slots.prefix)) {
          const Pn = St.querySelector(`.${o.e("prefix")}`);
          _.value = Math.max(Pn.getBoundingClientRect().width + 11, 30);
        }
      }), O();
    }), e.multiple && !Array.isArray(e.modelValue) && t.emit(He, []), !e.multiple && Array.isArray(e.modelValue) && t.emit(He, "");
    const Do = E(() => {
      var St, Pn;
      return (Pn = (St = Ye.value) == null ? void 0 : St.popperRef) == null ? void 0 : Pn.contentRef;
    });
    return {
      isIOS: ti,
      onOptionsRendered: (St) => {
        s.value = St;
      },
      prefixWidth: _,
      selectSize: f,
      readonly: d,
      handleResize: v,
      collapseTagSize: m,
      debouncedOnInputChange: p,
      debouncedQueryChange: h,
      deletePrevTag: y,
      deleteTag: g,
      handleDeleteTooltipTag: oe,
      deleteSelected: w,
      handleOptionSelect: S,
      scrollToOption: b,
      inputWidth: qe,
      selected: en,
      inputLength: Q,
      filteredOptionsCount: ae,
      visible: be,
      selectedLabel: he,
      hoverIndex: Ee,
      query: We,
      inputHovering: ot,
      currentPlaceholder: At,
      menuVisibleOnFocus: ht,
      isOnComposition: po,
      options: Kn,
      resetInputHeight: $,
      managePlaceholder: C,
      showClose: T,
      selectDisabled: A,
      iconComponent: F,
      iconReverse: L,
      showNewOption: N,
      emptyText: Y,
      toggleLastOptionHitState: ee,
      resetInputState: J,
      handleComposition: te,
      handleMenuEnter: x,
      handleFocus: U,
      focus: ie,
      blur: de,
      handleBlur: we,
      handleClearClick: Ce,
      handleClose: Oe,
      handleKeydownEscape: $e,
      toggleMenu: Le,
      selectOption: Se,
      getValueKey: Ve,
      navigateOptions: V,
      dropMenuVisible: Pe,
      reference: xe,
      input: at,
      iOSInput: dt,
      tooltipRef: Ye,
      popperPaneRef: Do,
      tags: st,
      selectWrapper: ft,
      scrollbar: Xe,
      wrapperKls: M,
      tagsKls: q,
      tagWrapperKls: fe,
      inputKls: it,
      iOSInputKls: gt,
      scrollbarKls: It,
      selectTagsStyle: Ie,
      nsSelect: n,
      tagTextStyle: Ut,
      inputStyle: xt,
      handleMouseEnter: nt,
      handleMouseLeave: vt,
      showTagList: H,
      collapseTagList: se,
      tagTooltipRef: _t,
      contentId: l,
      hoverOption: u
    };
  }
}), kC = ["disabled", "autocomplete", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label"], PC = ["disabled"], _C = { style: { height: "100%", display: "flex", "justify-content": "center", "align-items": "center" } };
function AC(e, t, n, o, r, l) {
  const a = Me("el-tag"), s = Me("el-tooltip"), i = Me("el-icon"), u = Me("el-input"), f = Me("el-option"), d = Me("el-options"), v = Me("el-scrollbar"), m = Me("el-select-menu"), p = Ol("click-outside");
  return Fe((P(), R("div", {
    ref: "selectWrapper",
    class: I(e.wrapperKls),
    onMouseenter: t[22] || (t[22] = (...h) => e.handleMouseEnter && e.handleMouseEnter(...h)),
    onMouseleave: t[23] || (t[23] = (...h) => e.handleMouseLeave && e.handleMouseLeave(...h)),
    onClick: t[24] || (t[24] = De((...h) => e.toggleMenu && e.toggleMenu(...h), ["stop"]))
  }, [
    G(s, {
      ref: "tooltipRef",
      visible: e.dropMenuVisible,
      placement: e.placement,
      teleported: e.teleported,
      "popper-class": [e.nsSelect.e("popper"), e.popperClass],
      "popper-options": e.popperOptions,
      "fallback-placements": ["bottom-start", "top-start", "right", "left"],
      effect: e.effect,
      pure: "",
      trigger: "click",
      transition: `${e.nsSelect.namespace.value}-zoom-in-top`,
      "stop-popper-mouse-event": !1,
      "gpu-acceleration": !1,
      persistent: e.persistent,
      onShow: e.handleMenuEnter
    }, {
      default: D(() => {
        var h, y;
        return [
          B("div", {
            class: "select-trigger",
            onMouseenter: t[20] || (t[20] = (g) => e.inputHovering = !0),
            onMouseleave: t[21] || (t[21] = (g) => e.inputHovering = !1)
          }, [
            e.multiple ? (P(), R("div", {
              key: 0,
              ref: "tags",
              tabindex: "-1",
              class: I(e.tagsKls),
              style: ke(e.selectTagsStyle),
              onClick: t[15] || (t[15] = (...g) => e.focus && e.focus(...g))
            }, [
              e.collapseTags && e.selected.length ? (P(), K(gn, {
                key: 0,
                onAfterLeave: e.resetInputHeight
              }, {
                default: D(() => [
                  B("span", {
                    class: I(e.tagWrapperKls)
                  }, [
                    (P(!0), R(ze, null, Vt(e.showTagList, (g) => (P(), K(a, {
                      key: e.getValueKey(g),
                      closable: !e.selectDisabled && !g.isDisabled,
                      size: e.collapseTagSize,
                      hit: g.hitState,
                      type: e.tagType,
                      "disable-transitions": "",
                      onClose: (w) => e.deleteTag(w, g)
                    }, {
                      default: D(() => [
                        B("span", {
                          class: I(e.nsSelect.e("tags-text")),
                          style: ke(e.tagTextStyle)
                        }, ge(g.currentLabel), 7)
                      ]),
                      _: 2
                    }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128)),
                    e.selected.length > e.maxCollapseTags ? (P(), K(a, {
                      key: 0,
                      closable: !1,
                      size: e.collapseTagSize,
                      type: e.tagType,
                      "disable-transitions": ""
                    }, {
                      default: D(() => [
                        e.collapseTagsTooltip ? (P(), K(s, {
                          key: 0,
                          ref: "tagTooltipRef",
                          disabled: e.dropMenuVisible,
                          "fallback-placements": ["bottom", "top", "right", "left"],
                          effect: e.effect,
                          placement: "bottom",
                          teleported: e.teleported
                        }, {
                          default: D(() => [
                            B("span", {
                              class: I(e.nsSelect.e("tags-text"))
                            }, "+ " + ge(e.selected.length - e.maxCollapseTags), 3)
                          ]),
                          content: D(() => [
                            B("div", {
                              class: I(e.nsSelect.e("collapse-tags"))
                            }, [
                              (P(!0), R(ze, null, Vt(e.collapseTagList, (g) => (P(), R("div", {
                                key: e.getValueKey(g),
                                class: I(e.nsSelect.e("collapse-tag"))
                              }, [
                                G(a, {
                                  class: "in-tooltip",
                                  closable: !e.selectDisabled && !g.isDisabled,
                                  size: e.collapseTagSize,
                                  hit: g.hitState,
                                  type: e.tagType,
                                  "disable-transitions": "",
                                  style: { margin: "2px" },
                                  onClose: (w) => e.handleDeleteTooltipTag(w, g)
                                }, {
                                  default: D(() => [
                                    B("span", {
                                      class: I(e.nsSelect.e("tags-text")),
                                      style: ke({
                                        maxWidth: e.inputWidth - 75 + "px"
                                      })
                                    }, ge(g.currentLabel), 7)
                                  ]),
                                  _: 2
                                }, 1032, ["closable", "size", "hit", "type", "onClose"])
                              ], 2))), 128))
                            ], 2)
                          ]),
                          _: 1
                        }, 8, ["disabled", "effect", "teleported"])) : (P(), R("span", {
                          key: 1,
                          class: I(e.nsSelect.e("tags-text"))
                        }, "+ " + ge(e.selected.length - e.maxCollapseTags), 3))
                      ]),
                      _: 1
                    }, 8, ["size", "type"])) : W("v-if", !0)
                  ], 2)
                ]),
                _: 1
              }, 8, ["onAfterLeave"])) : W("v-if", !0),
              e.collapseTags ? W("v-if", !0) : (P(), K(gn, {
                key: 1,
                onAfterLeave: e.resetInputHeight
              }, {
                default: D(() => [
                  B("span", {
                    class: I(e.tagWrapperKls),
                    style: ke(e.prefixWidth && e.selected.length ? { marginLeft: `${e.prefixWidth}px` } : "")
                  }, [
                    (P(!0), R(ze, null, Vt(e.selected, (g) => (P(), K(a, {
                      key: e.getValueKey(g),
                      closable: !e.selectDisabled && !g.isDisabled,
                      size: e.collapseTagSize,
                      hit: g.hitState,
                      type: e.tagType,
                      "disable-transitions": "",
                      onClose: (w) => e.deleteTag(w, g)
                    }, {
                      default: D(() => [
                        B("span", {
                          class: I(e.nsSelect.e("tags-text")),
                          style: ke({ maxWidth: e.inputWidth - 75 + "px" })
                        }, ge(g.currentLabel), 7)
                      ]),
                      _: 2
                    }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128))
                  ], 6)
                ]),
                _: 1
              }, 8, ["onAfterLeave"])),
              e.filterable && !e.selectDisabled ? Fe((P(), R("input", {
                key: 2,
                ref: "input",
                "onUpdate:modelValue": t[0] || (t[0] = (g) => e.query = g),
                type: "text",
                class: I(e.inputKls),
                disabled: e.selectDisabled,
                autocomplete: e.autocomplete,
                style: ke(e.inputStyle),
                role: "combobox",
                "aria-activedescendant": ((h = e.hoverOption) == null ? void 0 : h.id) || "",
                "aria-controls": e.contentId,
                "aria-expanded": e.dropMenuVisible,
                "aria-label": e.ariaLabel,
                "aria-autocomplete": "none",
                "aria-haspopup": "listbox",
                onFocus: t[1] || (t[1] = (...g) => e.handleFocus && e.handleFocus(...g)),
                onBlur: t[2] || (t[2] = (...g) => e.handleBlur && e.handleBlur(...g)),
                onKeyup: t[3] || (t[3] = (...g) => e.managePlaceholder && e.managePlaceholder(...g)),
                onKeydown: [
                  t[4] || (t[4] = (...g) => e.resetInputState && e.resetInputState(...g)),
                  t[5] || (t[5] = Tt(De((g) => e.navigateOptions("next"), ["prevent"]), ["down"])),
                  t[6] || (t[6] = Tt(De((g) => e.navigateOptions("prev"), ["prevent"]), ["up"])),
                  t[7] || (t[7] = Tt((...g) => e.handleKeydownEscape && e.handleKeydownEscape(...g), ["esc"])),
                  t[8] || (t[8] = Tt(De((...g) => e.selectOption && e.selectOption(...g), ["stop", "prevent"]), ["enter"])),
                  t[9] || (t[9] = Tt((...g) => e.deletePrevTag && e.deletePrevTag(...g), ["delete"])),
                  t[10] || (t[10] = Tt((g) => e.visible = !1, ["tab"]))
                ],
                onCompositionstart: t[11] || (t[11] = (...g) => e.handleComposition && e.handleComposition(...g)),
                onCompositionupdate: t[12] || (t[12] = (...g) => e.handleComposition && e.handleComposition(...g)),
                onCompositionend: t[13] || (t[13] = (...g) => e.handleComposition && e.handleComposition(...g)),
                onInput: t[14] || (t[14] = (...g) => e.debouncedQueryChange && e.debouncedQueryChange(...g))
              }, null, 46, kC)), [
                [mc, e.query]
              ]) : W("v-if", !0)
            ], 6)) : W("v-if", !0),
            e.isIOS && !e.multiple && e.filterable && e.readonly ? (P(), R("input", {
              key: 1,
              ref: "iOSInput",
              class: I(e.iOSInputKls),
              disabled: e.selectDisabled,
              type: "text"
            }, null, 10, PC)) : W("v-if", !0),
            G(u, {
              id: e.id,
              ref: "reference",
              modelValue: e.selectedLabel,
              "onUpdate:modelValue": t[16] || (t[16] = (g) => e.selectedLabel = g),
              type: "text",
              placeholder: typeof e.currentPlaceholder == "function" ? e.currentPlaceholder() : e.currentPlaceholder,
              name: e.name,
              autocomplete: e.autocomplete,
              size: e.selectSize,
              disabled: e.selectDisabled,
              readonly: e.readonly,
              "validate-event": !1,
              class: I([e.nsSelect.is("focus", e.visible)]),
              tabindex: e.multiple && e.filterable ? -1 : void 0,
              role: "combobox",
              "aria-activedescendant": ((y = e.hoverOption) == null ? void 0 : y.id) || "",
              "aria-controls": e.contentId,
              "aria-expanded": e.dropMenuVisible,
              label: e.ariaLabel,
              "aria-autocomplete": "none",
              "aria-haspopup": "listbox",
              onFocus: e.handleFocus,
              onBlur: e.handleBlur,
              onInput: e.debouncedOnInputChange,
              onPaste: e.debouncedOnInputChange,
              onCompositionstart: e.handleComposition,
              onCompositionupdate: e.handleComposition,
              onCompositionend: e.handleComposition,
              onKeydown: [
                t[17] || (t[17] = Tt(De((g) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
                t[18] || (t[18] = Tt(De((g) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
                Tt(De(e.selectOption, ["stop", "prevent"]), ["enter"]),
                Tt(e.handleKeydownEscape, ["esc"]),
                t[19] || (t[19] = Tt((g) => e.visible = !1, ["tab"]))
              ]
            }, bc({
              suffix: D(() => [
                e.iconComponent && !e.showClose ? (P(), K(i, {
                  key: 0,
                  class: I([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
                }, {
                  default: D(() => [
                    (P(), K(je(e.iconComponent)))
                  ]),
                  _: 1
                }, 8, ["class"])) : W("v-if", !0),
                e.showClose && e.clearIcon ? (P(), K(i, {
                  key: 1,
                  class: I([e.nsSelect.e("caret"), e.nsSelect.e("icon")]),
                  onClick: e.handleClearClick
                }, {
                  default: D(() => [
                    (P(), K(je(e.clearIcon)))
                  ]),
                  _: 1
                }, 8, ["class", "onClick"])) : W("v-if", !0)
              ]),
              _: 2
            }, [
              e.$slots.prefix ? {
                name: "prefix",
                fn: D(() => [
                  B("div", _C, [
                    Z(e.$slots, "prefix")
                  ])
                ])
              } : void 0
            ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "aria-activedescendant", "aria-controls", "aria-expanded", "label", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
          ], 32)
        ];
      }),
      content: D(() => [
        G(m, null, {
          default: D(() => [
            Fe(G(v, {
              id: e.contentId,
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: I(e.scrollbarKls),
              role: "listbox",
              "aria-label": e.ariaLabel,
              "aria-orientation": "vertical"
            }, {
              default: D(() => [
                e.showNewOption ? (P(), K(f, {
                  key: 0,
                  value: e.query,
                  created: !0
                }, null, 8, ["value"])) : W("v-if", !0),
                G(d, { onUpdateOptions: e.onOptionsRendered }, {
                  default: D(() => [
                    Z(e.$slots, "default")
                  ]),
                  _: 3
                }, 8, ["onUpdateOptions"])
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label"]), [
              [Rt, e.options.size > 0 && !e.loading]
            ]),
            e.emptyText && (!e.allowCreate || e.loading || e.allowCreate && e.options.size === 0) ? (P(), R(ze, { key: 0 }, [
              e.$slots.empty ? Z(e.$slots, "empty", { key: 0 }) : (P(), R("p", {
                key: 1,
                class: I(e.nsSelect.be("dropdown", "empty"))
              }, ge(e.emptyText), 3))
            ], 64)) : W("v-if", !0)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "effect", "transition", "persistent", "onShow"])
  ], 34)), [
    [p, e.handleClose, e.popperPaneRef]
  ]);
}
var IC = /* @__PURE__ */ ue($C, [["render", AC], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
const xC = z({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = ne("select"), n = k(!0), o = Te(), r = k([]);
    Ge(Xu, Tn({
      ...zn(e)
    }));
    const l = pe(Lr);
    Re(() => {
      r.value = a(o.subTree);
    });
    const a = (i) => {
      const u = [];
      return Array.isArray(i.children) && i.children.forEach((f) => {
        var d;
        f.type && f.type.name === "ElOption" && f.component && f.component.proxy ? u.push(f.component.proxy) : (d = f.children) != null && d.length && u.push(...a(f));
      }), u;
    }, { groupQueryChange: s } = Xn(l);
    return X(s, () => {
      n.value = r.value.some((i) => i.visible === !0);
    }, { flush: "post" }), {
      visible: n,
      ns: t
    };
  }
});
function NC(e, t, n, o, r, l) {
  return Fe((P(), R("ul", {
    class: I(e.ns.be("group", "wrap"))
  }, [
    B("li", {
      class: I(e.ns.be("group", "title"))
    }, ge(e.label), 3),
    B("li", null, [
      B("ul", {
        class: I(e.ns.b("group"))
      }, [
        Z(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [Rt, e.visible]
  ]);
}
var Ju = /* @__PURE__ */ ue(xC, [["render", NC], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
const Qu = tt(IC, {
  Option: ra,
  OptionGroup: Ju
}), Zu = Ft(ra);
Ft(Ju);
const la = () => pe(Yu, {}), RC = ye({
  pageSize: {
    type: Number,
    required: !0
  },
  pageSizes: {
    type: ce(Array),
    default: () => Dl([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String
  },
  disabled: Boolean,
  teleported: Boolean,
  size: {
    type: String,
    values: Bo
  }
}), LC = z({
  name: "ElPaginationSizes"
}), MC = /* @__PURE__ */ z({
  ...LC,
  props: RC,
  emits: ["page-size-change"],
  setup(e, { emit: t }) {
    const n = e, { t: o } = ct(), r = ne("pagination"), l = la(), a = k(n.pageSize);
    X(() => n.pageSizes, (u, f) => {
      if (!pr(u, f) && Array.isArray(u)) {
        const d = u.includes(n.pageSize) ? n.pageSize : n.pageSizes[0];
        t("page-size-change", d);
      }
    }), X(() => n.pageSize, (u) => {
      a.value = u;
    });
    const s = E(() => n.pageSizes);
    function i(u) {
      var f;
      u !== a.value && (a.value = u, (f = l.handleSizeChange) == null || f.call(l, Number(u)));
    }
    return (u, f) => (P(), R("span", {
      class: I(c(r).e("sizes"))
    }, [
      G(c(Qu), {
        "model-value": a.value,
        disabled: u.disabled,
        "popper-class": u.popperClass,
        size: u.size,
        teleported: u.teleported,
        "validate-event": !1,
        onChange: i
      }, {
        default: D(() => [
          (P(!0), R(ze, null, Vt(c(s), (d) => (P(), K(c(Zu), {
            key: d,
            value: d,
            label: d + c(o)("el.pagination.pagesize")
          }, null, 8, ["value", "label"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value", "disabled", "popper-class", "size", "teleported"])
    ], 2));
  }
});
var BC = /* @__PURE__ */ ue(MC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue"]]);
const FC = ye({
  size: {
    type: String,
    values: Bo
  }
}), zC = ["disabled"], HC = z({
  name: "ElPaginationJumper"
}), DC = /* @__PURE__ */ z({
  ...HC,
  props: FC,
  setup(e) {
    const { t } = ct(), n = ne("pagination"), { pageCount: o, disabled: r, currentPage: l, changeEvent: a } = la(), s = k(), i = E(() => {
      var d;
      return (d = s.value) != null ? d : l == null ? void 0 : l.value;
    });
    function u(d) {
      s.value = d ? +d : "";
    }
    function f(d) {
      d = Math.trunc(+d), a == null || a(d), s.value = void 0;
    }
    return (d, v) => (P(), R("span", {
      class: I(c(n).e("jump")),
      disabled: c(r)
    }, [
      B("span", {
        class: I([c(n).e("goto")])
      }, ge(c(t)("el.pagination.goto")), 3),
      G(c(cu), {
        size: d.size,
        class: I([c(n).e("editor"), c(n).is("in-pagination")]),
        min: 1,
        max: c(o),
        disabled: c(r),
        "model-value": c(i),
        "validate-event": !1,
        label: c(t)("el.pagination.page"),
        type: "number",
        "onUpdate:modelValue": u,
        onChange: f
      }, null, 8, ["size", "class", "max", "disabled", "model-value", "label"]),
      B("span", {
        class: I([c(n).e("classifier")])
      }, ge(c(t)("el.pagination.pageClassifier")), 3)
    ], 10, zC));
  }
});
var VC = /* @__PURE__ */ ue(DC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue"]]);
const WC = ye({
  total: {
    type: Number,
    default: 1e3
  }
}), KC = ["disabled"], jC = z({
  name: "ElPaginationTotal"
}), UC = /* @__PURE__ */ z({
  ...jC,
  props: WC,
  setup(e) {
    const { t } = ct(), n = ne("pagination"), { disabled: o } = la();
    return (r, l) => (P(), R("span", {
      class: I(c(n).e("total")),
      disabled: c(o)
    }, ge(c(t)("el.pagination.total", {
      total: r.total
    })), 11, KC));
  }
});
var qC = /* @__PURE__ */ ue(UC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue"]]);
const GC = ye({
  currentPage: {
    type: Number,
    default: 1
  },
  pageCount: {
    type: Number,
    required: !0
  },
  pagerCount: {
    type: Number,
    default: 7
  },
  disabled: Boolean
}), YC = ["onKeyup"], XC = ["aria-current", "aria-label", "tabindex"], JC = ["tabindex", "aria-label"], QC = ["aria-current", "aria-label", "tabindex"], ZC = ["tabindex", "aria-label"], eS = ["aria-current", "aria-label", "tabindex"], tS = z({
  name: "ElPaginationPager"
}), nS = /* @__PURE__ */ z({
  ...tS,
  props: GC,
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = e, o = ne("pager"), r = ne("icon"), { t: l } = ct(), a = k(!1), s = k(!1), i = k(!1), u = k(!1), f = k(!1), d = k(!1), v = E(() => {
      const b = n.pagerCount, O = (b - 1) / 2, $ = Number(n.currentPage), C = Number(n.pageCount);
      let T = !1, A = !1;
      C > b && ($ > b - O && (T = !0), $ < C - O && (A = !0));
      const F = [];
      if (T && !A) {
        const L = C - (b - 2);
        for (let N = L; N < C; N++)
          F.push(N);
      } else if (!T && A)
        for (let L = 2; L < b; L++)
          F.push(L);
      else if (T && A) {
        const L = Math.floor(b / 2) - 1;
        for (let N = $ - L; N <= $ + L; N++)
          F.push(N);
      } else
        for (let L = 2; L < C; L++)
          F.push(L);
      return F;
    }), m = E(() => [
      "more",
      "btn-quickprev",
      r.b(),
      o.is("disabled", n.disabled)
    ]), p = E(() => [
      "more",
      "btn-quicknext",
      r.b(),
      o.is("disabled", n.disabled)
    ]), h = E(() => n.disabled ? -1 : 0);
    Ln(() => {
      const b = (n.pagerCount - 1) / 2;
      a.value = !1, s.value = !1, n.pageCount > n.pagerCount && (n.currentPage > n.pagerCount - b && (a.value = !0), n.currentPage < n.pageCount - b && (s.value = !0));
    });
    function y(b = !1) {
      n.disabled || (b ? i.value = !0 : u.value = !0);
    }
    function g(b = !1) {
      b ? f.value = !0 : d.value = !0;
    }
    function w(b) {
      const O = b.target;
      if (O.tagName.toLowerCase() === "li" && Array.from(O.classList).includes("number")) {
        const $ = Number(O.textContent);
        $ !== n.currentPage && t("change", $);
      } else
        O.tagName.toLowerCase() === "li" && Array.from(O.classList).includes("more") && S(b);
    }
    function S(b) {
      const O = b.target;
      if (O.tagName.toLowerCase() === "ul" || n.disabled)
        return;
      let $ = Number(O.textContent);
      const C = n.pageCount, T = n.currentPage, A = n.pagerCount - 2;
      O.className.includes("more") && (O.className.includes("quickprev") ? $ = T - A : O.className.includes("quicknext") && ($ = T + A)), Number.isNaN(+$) || ($ < 1 && ($ = 1), $ > C && ($ = C)), $ !== T && t("change", $);
    }
    return (b, O) => (P(), R("ul", {
      class: I(c(o).b()),
      onClick: S,
      onKeyup: Tt(w, ["enter"])
    }, [
      b.pageCount > 0 ? (P(), R("li", {
        key: 0,
        class: I([[
          c(o).is("active", b.currentPage === 1),
          c(o).is("disabled", b.disabled)
        ], "number"]),
        "aria-current": b.currentPage === 1,
        "aria-label": c(l)("el.pagination.currentPage", { pager: 1 }),
        tabindex: c(h)
      }, " 1 ", 10, XC)) : W("v-if", !0),
      a.value ? (P(), R("li", {
        key: 1,
        class: I(c(m)),
        tabindex: c(h),
        "aria-label": c(l)("el.pagination.prevPages", { pager: b.pagerCount - 2 }),
        onMouseenter: O[0] || (O[0] = ($) => y(!0)),
        onMouseleave: O[1] || (O[1] = ($) => i.value = !1),
        onFocus: O[2] || (O[2] = ($) => g(!0)),
        onBlur: O[3] || (O[3] = ($) => f.value = !1)
      }, [
        (i.value || f.value) && !b.disabled ? (P(), K(c(Ac), { key: 0 })) : (P(), K(c(ca), { key: 1 }))
      ], 42, JC)) : W("v-if", !0),
      (P(!0), R(ze, null, Vt(c(v), ($) => (P(), R("li", {
        key: $,
        class: I([[
          c(o).is("active", b.currentPage === $),
          c(o).is("disabled", b.disabled)
        ], "number"]),
        "aria-current": b.currentPage === $,
        "aria-label": c(l)("el.pagination.currentPage", { pager: $ }),
        tabindex: c(h)
      }, ge($), 11, QC))), 128)),
      s.value ? (P(), R("li", {
        key: 2,
        class: I(c(p)),
        tabindex: c(h),
        "aria-label": c(l)("el.pagination.nextPages", { pager: b.pagerCount - 2 }),
        onMouseenter: O[4] || (O[4] = ($) => y()),
        onMouseleave: O[5] || (O[5] = ($) => u.value = !1),
        onFocus: O[6] || (O[6] = ($) => g()),
        onBlur: O[7] || (O[7] = ($) => d.value = !1)
      }, [
        (u.value || d.value) && !b.disabled ? (P(), K(c(Ic), { key: 0 })) : (P(), K(c(ca), { key: 1 }))
      ], 42, ZC)) : W("v-if", !0),
      b.pageCount > 1 ? (P(), R("li", {
        key: 3,
        class: I([[
          c(o).is("active", b.currentPage === b.pageCount),
          c(o).is("disabled", b.disabled)
        ], "number"]),
        "aria-current": b.currentPage === b.pageCount,
        "aria-label": c(l)("el.pagination.currentPage", { pager: b.pageCount }),
        tabindex: c(h)
      }, ge(b.pageCount), 11, eS)) : W("v-if", !0)
    ], 42, YC));
  }
});
var oS = /* @__PURE__ */ ue(nS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue"]]);
const ut = (e) => typeof e != "number", rS = ye({
  pageSize: Number,
  defaultPageSize: Number,
  total: Number,
  pageCount: Number,
  pagerCount: {
    type: Number,
    validator: (e) => Ae(e) && Math.trunc(e) === e && e > 4 && e < 22 && e % 2 === 1,
    default: 7
  },
  currentPage: Number,
  defaultCurrentPage: Number,
  layout: {
    type: String,
    default: ["prev", "pager", "next", "jumper", "->", "total"].join(", ")
  },
  pageSizes: {
    type: ce(Array),
    default: () => Dl([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String,
    default: ""
  },
  prevText: {
    type: String,
    default: ""
  },
  prevIcon: {
    type: Qe,
    default: () => xc
  },
  nextText: {
    type: String,
    default: ""
  },
  nextIcon: {
    type: Qe,
    default: () => kl
  },
  teleported: {
    type: Boolean,
    default: !0
  },
  small: Boolean,
  background: Boolean,
  disabled: Boolean,
  hideOnSinglePage: Boolean
}), lS = {
  "update:current-page": (e) => Ae(e),
  "update:page-size": (e) => Ae(e),
  "size-change": (e) => Ae(e),
  "current-change": (e) => Ae(e),
  "prev-click": (e) => Ae(e),
  "next-click": (e) => Ae(e)
}, Ms = "ElPagination";
var aS = z({
  name: Ms,
  props: rS,
  emits: lS,
  setup(e, { emit: t, slots: n }) {
    const { t: o } = ct(), r = ne("pagination"), l = Te().vnode.props || {}, a = "onUpdate:currentPage" in l || "onUpdate:current-page" in l || "onCurrentChange" in l, s = "onUpdate:pageSize" in l || "onUpdate:page-size" in l || "onSizeChange" in l, i = E(() => {
      if (ut(e.total) && ut(e.pageCount) || !ut(e.currentPage) && !a)
        return !1;
      if (e.layout.includes("sizes")) {
        if (ut(e.pageCount)) {
          if (!ut(e.total) && !ut(e.pageSize) && !s)
            return !1;
        } else if (!s)
          return !1;
      }
      return !0;
    }), u = k(ut(e.defaultPageSize) ? 10 : e.defaultPageSize), f = k(ut(e.defaultCurrentPage) ? 1 : e.defaultCurrentPage), d = E({
      get() {
        return ut(e.pageSize) ? u.value : e.pageSize;
      },
      set(S) {
        ut(e.pageSize) && (u.value = S), s && (t("update:page-size", S), t("size-change", S));
      }
    }), v = E(() => {
      let S = 0;
      return ut(e.pageCount) ? ut(e.total) || (S = Math.max(1, Math.ceil(e.total / d.value))) : S = e.pageCount, S;
    }), m = E({
      get() {
        return ut(e.currentPage) ? f.value : e.currentPage;
      },
      set(S) {
        let b = S;
        S < 1 ? b = 1 : S > v.value && (b = v.value), ut(e.currentPage) && (f.value = b), a && (t("update:current-page", b), t("current-change", b));
      }
    });
    X(v, (S) => {
      m.value > S && (m.value = S);
    });
    function p(S) {
      m.value = S;
    }
    function h(S) {
      d.value = S;
      const b = v.value;
      m.value > b && (m.value = b);
    }
    function y() {
      e.disabled || (m.value -= 1, t("prev-click", m.value));
    }
    function g() {
      e.disabled || (m.value += 1, t("next-click", m.value));
    }
    function w(S, b) {
      S && (S.props || (S.props = {}), S.props.class = [S.props.class, b].join(" "));
    }
    return Ge(Yu, {
      pageCount: v,
      disabled: E(() => e.disabled),
      currentPage: m,
      changeEvent: p,
      handleSizeChange: h
    }), () => {
      var S, b;
      if (!i.value)
        return Ke(Ms, o("el.pagination.deprecationWarning")), null;
      if (!e.layout || e.hideOnSinglePage && v.value <= 1)
        return null;
      const O = [], $ = [], C = re("div", { class: r.e("rightwrapper") }, $), T = {
        prev: re(uC, {
          disabled: e.disabled,
          currentPage: m.value,
          prevText: e.prevText,
          prevIcon: e.prevIcon,
          onClick: y
        }),
        jumper: re(VC, {
          size: e.small ? "small" : "default"
        }),
        pager: re(oS, {
          currentPage: m.value,
          pageCount: v.value,
          pagerCount: e.pagerCount,
          onChange: p,
          disabled: e.disabled
        }),
        next: re(hC, {
          disabled: e.disabled,
          currentPage: m.value,
          pageCount: v.value,
          nextText: e.nextText,
          nextIcon: e.nextIcon,
          onClick: g
        }),
        sizes: re(BC, {
          pageSize: d.value,
          pageSizes: e.pageSizes,
          popperClass: e.popperClass,
          disabled: e.disabled,
          teleported: e.teleported,
          size: e.small ? "small" : "default"
        }),
        slot: (b = (S = n == null ? void 0 : n.default) == null ? void 0 : S.call(n)) != null ? b : null,
        total: re(qC, { total: ut(e.total) ? 0 : e.total })
      }, A = e.layout.split(",").map((L) => L.trim());
      let F = !1;
      return A.forEach((L) => {
        if (L === "->") {
          F = !0;
          return;
        }
        F ? $.push(T[L]) : O.push(T[L]);
      }), w(O[0], r.is("first")), w(O[O.length - 1], r.is("last")), F && $.length > 0 && (w($[0], r.is("first")), w($[$.length - 1], r.is("last")), O.push(C)), re("div", {
        class: [
          r.b(),
          r.is("background", e.background),
          {
            [r.m("small")]: e.small
          }
        ]
      }, O);
    };
  }
});
const sS = tt(aS), iS = ye({
  trigger: xo.trigger,
  placement: Gr.placement,
  disabled: xo.disabled,
  visible: Ot.visible,
  transition: Ot.transition,
  popperOptions: Gr.popperOptions,
  tabindex: Gr.tabindex,
  content: Ot.content,
  popperStyle: Ot.popperStyle,
  popperClass: Ot.popperClass,
  enterable: {
    ...Ot.enterable,
    default: !0
  },
  effect: {
    ...Ot.effect,
    default: "light"
  },
  teleported: Ot.teleported,
  title: String,
  width: {
    type: [String, Number],
    default: 150
  },
  offset: {
    type: Number,
    default: void 0
  },
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  },
  showArrow: {
    type: Boolean,
    default: !0
  },
  persistent: {
    type: Boolean,
    default: !0
  },
  "onUpdate:visible": {
    type: Function
  }
}), uS = {
  "update:visible": (e) => yt(e),
  "before-enter": () => !0,
  "before-leave": () => !0,
  "after-enter": () => !0,
  "after-leave": () => !0
}, cS = "onUpdate:visible", dS = z({
  name: "ElPopover"
}), fS = /* @__PURE__ */ z({
  ...dS,
  props: iS,
  emits: uS,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = E(() => o[cS]), l = ne("popover"), a = k(), s = E(() => {
      var y;
      return (y = c(a)) == null ? void 0 : y.popperRef;
    }), i = E(() => [
      {
        width: Cn(o.width)
      },
      o.popperStyle
    ]), u = E(() => [l.b(), o.popperClass, { [l.m("plain")]: !!o.content }]), f = E(() => o.transition === `${l.namespace.value}-fade-in-linear`), d = () => {
      var y;
      (y = a.value) == null || y.hide();
    }, v = () => {
      n("before-enter");
    }, m = () => {
      n("before-leave");
    }, p = () => {
      n("after-enter");
    }, h = () => {
      n("update:visible", !1), n("after-leave");
    };
    return t({
      popperRef: s,
      hide: d
    }), (y, g) => (P(), K(c(oa), bt({
      ref_key: "tooltipRef",
      ref: a
    }, y.$attrs, {
      trigger: y.trigger,
      placement: y.placement,
      disabled: y.disabled,
      visible: y.visible,
      transition: y.transition,
      "popper-options": y.popperOptions,
      tabindex: y.tabindex,
      content: y.content,
      offset: y.offset,
      "show-after": y.showAfter,
      "hide-after": y.hideAfter,
      "auto-close": y.autoClose,
      "show-arrow": y.showArrow,
      "aria-label": y.title,
      effect: y.effect,
      enterable: y.enterable,
      "popper-class": c(u),
      "popper-style": c(i),
      teleported: y.teleported,
      persistent: y.persistent,
      "gpu-acceleration": c(f),
      "onUpdate:visible": c(r),
      onBeforeShow: v,
      onBeforeHide: m,
      onShow: p,
      onHide: h
    }), {
      content: D(() => [
        y.title ? (P(), R("div", {
          key: 0,
          class: I(c(l).e("title")),
          role: "title"
        }, ge(y.title), 3)) : W("v-if", !0),
        Z(y.$slots, "default", {}, () => [
          Wt(ge(y.content), 1)
        ])
      ]),
      default: D(() => [
        y.$slots.reference ? Z(y.$slots, "reference", { key: 0 }) : W("v-if", !0)
      ]),
      _: 3
    }, 16, ["trigger", "placement", "disabled", "visible", "transition", "popper-options", "tabindex", "content", "offset", "show-after", "hide-after", "auto-close", "show-arrow", "aria-label", "effect", "enterable", "popper-class", "popper-style", "teleported", "persistent", "gpu-acceleration", "onUpdate:visible"]));
  }
});
var pS = /* @__PURE__ */ ue(fS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue"]]);
const Bs = (e, t) => {
  const n = t.arg || t.value, o = n == null ? void 0 : n.popperRef;
  o && (o.triggerRef = e);
};
var vS = {
  mounted(e, t) {
    Bs(e, t);
  },
  updated(e, t) {
    Bs(e, t);
  }
};
const hS = "popover", gS = lg(vS, hS), mS = tt(pS, {
  directive: gS
}), bS = ye({
  modelValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  loading: {
    type: Boolean,
    default: !1
  },
  size: {
    type: String,
    validator: Li
  },
  width: {
    type: [String, Number],
    default: ""
  },
  inlinePrompt: {
    type: Boolean,
    default: !1
  },
  inactiveActionIcon: {
    type: Qe
  },
  activeActionIcon: {
    type: Qe
  },
  activeIcon: {
    type: Qe
  },
  inactiveIcon: {
    type: Qe
  },
  activeText: {
    type: String,
    default: ""
  },
  inactiveText: {
    type: String,
    default: ""
  },
  activeValue: {
    type: [Boolean, String, Number],
    default: !0
  },
  inactiveValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  activeColor: {
    type: String,
    default: ""
  },
  inactiveColor: {
    type: String,
    default: ""
  },
  borderColor: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    default: ""
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  beforeChange: {
    type: ce(Function)
  },
  id: String,
  tabindex: {
    type: [String, Number]
  },
  value: {
    type: [Boolean, String, Number],
    default: !1
  },
  label: {
    type: String,
    default: void 0
  }
}), yS = {
  [He]: (e) => yt(e) || Ue(e) || Ae(e),
  [eo]: (e) => yt(e) || Ue(e) || Ae(e),
  [ll]: (e) => yt(e) || Ue(e) || Ae(e)
}, wS = ["onClick"], CS = ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"], SS = ["aria-hidden"], ES = ["aria-hidden"], TS = ["aria-hidden"], rr = "ElSwitch", OS = z({
  name: rr
}), $S = /* @__PURE__ */ z({
  ...OS,
  props: bS,
  emits: yS,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = Te(), { formItem: l } = $n(), a = sn(), s = ne("switch");
    ((T) => {
      T.forEach((A) => {
        _o({
          from: A[0],
          replacement: A[1],
          scope: rr,
          version: "2.3.0",
          ref: "https://element-plus.org/en-US/component/switch.html#attributes",
          type: "Attribute"
        }, E(() => {
          var F;
          return !!((F = r.vnode.props) != null && F[A[2]]);
        }));
      });
    })([
      ['"value"', '"model-value" or "v-model"', "value"],
      ['"active-color"', "CSS var `--el-switch-on-color`", "activeColor"],
      ['"inactive-color"', "CSS var `--el-switch-off-color`", "inactiveColor"],
      ['"border-color"', "CSS var `--el-switch-border-color`", "borderColor"]
    ]);
    const { inputId: u } = Ho(o, {
      formItemContext: l
    }), f = co(E(() => o.loading)), d = k(o.modelValue !== !1), v = k(), m = k(), p = E(() => [
      s.b(),
      s.m(a.value),
      s.is("disabled", f.value),
      s.is("checked", S.value)
    ]), h = E(() => [
      s.e("label"),
      s.em("label", "left"),
      s.is("active", !S.value)
    ]), y = E(() => [
      s.e("label"),
      s.em("label", "right"),
      s.is("active", S.value)
    ]), g = E(() => ({
      width: Cn(o.width)
    }));
    X(() => o.modelValue, () => {
      d.value = !0;
    }), X(() => o.value, () => {
      d.value = !1;
    });
    const w = E(() => d.value ? o.modelValue : o.value), S = E(() => w.value === o.activeValue);
    [o.activeValue, o.inactiveValue].includes(w.value) || (n(He, o.inactiveValue), n(eo, o.inactiveValue), n(ll, o.inactiveValue)), X(S, (T) => {
      var A;
      v.value.checked = T, o.validateEvent && ((A = l == null ? void 0 : l.validate) == null || A.call(l, "change").catch((F) => Ke(F)));
    });
    const b = () => {
      const T = S.value ? o.inactiveValue : o.activeValue;
      n(He, T), n(eo, T), n(ll, T), me(() => {
        v.value.checked = S.value;
      });
    }, O = () => {
      if (f.value)
        return;
      const { beforeChange: T } = o;
      if (!T) {
        b();
        return;
      }
      const A = T();
      [
        ya(A),
        yt(A)
      ].includes(!0) || kr(rr, "beforeChange must return type `Promise<boolean>` or `boolean`"), ya(A) ? A.then((L) => {
        L && b();
      }).catch((L) => {
        Ke(rr, `some error occurred: ${L}`);
      }) : A && b();
    }, $ = E(() => s.cssVarBlock({
      ...o.activeColor ? { "on-color": o.activeColor } : null,
      ...o.inactiveColor ? { "off-color": o.inactiveColor } : null,
      ...o.borderColor ? { "border-color": o.borderColor } : null
    })), C = () => {
      var T, A;
      (A = (T = v.value) == null ? void 0 : T.focus) == null || A.call(T);
    };
    return Re(() => {
      v.value.checked = S.value;
    }), t({
      focus: C,
      checked: S
    }), (T, A) => (P(), R("div", {
      class: I(c(p)),
      style: ke(c($)),
      onClick: De(O, ["prevent"])
    }, [
      B("input", {
        id: c(u),
        ref_key: "input",
        ref: v,
        class: I(c(s).e("input")),
        type: "checkbox",
        role: "switch",
        "aria-checked": c(S),
        "aria-disabled": c(f),
        "aria-label": T.label,
        name: T.name,
        "true-value": T.activeValue,
        "false-value": T.inactiveValue,
        disabled: c(f),
        tabindex: T.tabindex,
        onChange: b,
        onKeydown: Tt(O, ["enter"])
      }, null, 42, CS),
      !T.inlinePrompt && (T.inactiveIcon || T.inactiveText) ? (P(), R("span", {
        key: 0,
        class: I(c(h))
      }, [
        T.inactiveIcon ? (P(), K(c(Be), { key: 0 }, {
          default: D(() => [
            (P(), K(je(T.inactiveIcon)))
          ]),
          _: 1
        })) : W("v-if", !0),
        !T.inactiveIcon && T.inactiveText ? (P(), R("span", {
          key: 1,
          "aria-hidden": c(S)
        }, ge(T.inactiveText), 9, SS)) : W("v-if", !0)
      ], 2)) : W("v-if", !0),
      B("span", {
        ref_key: "core",
        ref: m,
        class: I(c(s).e("core")),
        style: ke(c(g))
      }, [
        T.inlinePrompt ? (P(), R("div", {
          key: 0,
          class: I(c(s).e("inner"))
        }, [
          T.activeIcon || T.inactiveIcon ? (P(), K(c(Be), {
            key: 0,
            class: I(c(s).is("icon"))
          }, {
            default: D(() => [
              (P(), K(je(c(S) ? T.activeIcon : T.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : T.activeText || T.inactiveText ? (P(), R("span", {
            key: 1,
            class: I(c(s).is("text")),
            "aria-hidden": !c(S)
          }, ge(c(S) ? T.activeText : T.inactiveText), 11, ES)) : W("v-if", !0)
        ], 2)) : W("v-if", !0),
        B("div", {
          class: I(c(s).e("action"))
        }, [
          T.loading ? (P(), K(c(Be), {
            key: 0,
            class: I(c(s).is("loading"))
          }, {
            default: D(() => [
              G(c(yr))
            ]),
            _: 1
          }, 8, ["class"])) : T.activeActionIcon && c(S) ? (P(), K(c(Be), { key: 1 }, {
            default: D(() => [
              (P(), K(je(T.activeActionIcon)))
            ]),
            _: 1
          })) : T.inactiveActionIcon && !c(S) ? (P(), K(c(Be), { key: 2 }, {
            default: D(() => [
              (P(), K(je(T.inactiveActionIcon)))
            ]),
            _: 1
          })) : W("v-if", !0)
        ], 2)
      ], 6),
      !T.inlinePrompt && (T.activeIcon || T.activeText) ? (P(), R("span", {
        key: 1,
        class: I(c(y))
      }, [
        T.activeIcon ? (P(), K(c(Be), { key: 0 }, {
          default: D(() => [
            (P(), K(je(T.activeIcon)))
          ]),
          _: 1
        })) : W("v-if", !0),
        !T.activeIcon && T.activeText ? (P(), R("span", {
          key: 1,
          "aria-hidden": !c(S)
        }, ge(T.activeText), 9, TS)) : W("v-if", !0)
      ], 2)) : W("v-if", !0)
    ], 14, wS));
  }
});
var kS = /* @__PURE__ */ ue($S, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);
const ec = tt(kS);
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */
var PS = /["'&<>]/, _S = AS;
function AS(e) {
  var t = "" + e, n = PS.exec(t);
  if (!n)
    return t;
  var o, r = "", l = 0, a = 0;
  for (l = n.index; l < t.length; l++) {
    switch (t.charCodeAt(l)) {
      case 34:
        o = "&quot;";
        break;
      case 38:
        o = "&amp;";
        break;
      case 39:
        o = "&#39;";
        break;
      case 60:
        o = "&lt;";
        break;
      case 62:
        o = "&gt;";
        break;
      default:
        continue;
    }
    a !== l && (r += t.substring(a, l)), a = l + 1, r += o;
  }
  return a !== l ? r + t.substring(a, l) : r;
}
const IS = /* @__PURE__ */ Ky(_S), Yr = function(e) {
  var t;
  return (t = e.target) == null ? void 0 : t.closest("td");
}, xS = function(e, t, n, o, r) {
  if (!t && !o && (!r || Array.isArray(r) && !r.length))
    return e;
  typeof n == "string" ? n = n === "descending" ? -1 : 1 : n = n && n < 0 ? -1 : 1;
  const l = o ? null : function(s, i) {
    return r ? (Array.isArray(r) || (r = [r]), r.map((u) => typeof u == "string" ? rt(s, u) : u(s, i, e))) : (t !== "$key" && Ze(s) && "$value" in s && (s = s.$value), [Ze(s) ? rt(s, t) : s]);
  }, a = function(s, i) {
    if (o)
      return o(s.value, i.value);
    for (let u = 0, f = s.key.length; u < f; u++) {
      if (s.key[u] < i.key[u])
        return -1;
      if (s.key[u] > i.key[u])
        return 1;
    }
    return 0;
  };
  return e.map((s, i) => ({
    value: s,
    index: i,
    key: l ? l(s, i) : null
  })).sort((s, i) => {
    let u = a(s, i);
    return u || (u = s.index - i.index), u * +n;
  }).map((s) => s.value);
}, tc = function(e, t) {
  let n = null;
  return e.columns.forEach((o) => {
    o.id === t && (n = o);
  }), n;
}, NS = function(e, t) {
  let n = null;
  for (let o = 0; o < e.columns.length; o++) {
    const r = e.columns[o];
    if (r.columnKey === t) {
      n = r;
      break;
    }
  }
  return n || kr("ElTable", `No column matching with column-key: ${t}`), n;
}, Fs = function(e, t, n) {
  const o = (t.className || "").match(new RegExp(`${n}-table_[^\\s]+`, "gm"));
  return o ? tc(e, o[0]) : null;
}, Je = (e, t) => {
  if (!e)
    throw new Error("Row is required when get row identity");
  if (typeof t == "string") {
    if (!t.includes("."))
      return `${e[t]}`;
    const n = t.split(".");
    let o = e;
    for (const r of n)
      o = o[r];
    return `${o}`;
  } else if (typeof t == "function")
    return t.call(null, e);
}, Nn = function(e, t) {
  const n = {};
  return (e || []).forEach((o, r) => {
    n[Je(o, t)] = { row: o, index: r };
  }), n;
};
function RS(e, t) {
  const n = {};
  let o;
  for (o in e)
    n[o] = e[o];
  for (o in t)
    if (Bn(t, o)) {
      const r = t[o];
      typeof r < "u" && (n[o] = r);
    }
  return n;
}
function aa(e) {
  return e === "" || e !== void 0 && (e = Number.parseInt(e, 10), Number.isNaN(e) && (e = "")), e;
}
function nc(e) {
  return e === "" || e !== void 0 && (e = aa(e), Number.isNaN(e) && (e = 80)), e;
}
function LS(e) {
  return typeof e == "number" ? e : typeof e == "string" ? /^\d+(?:px)?$/.test(e) ? Number.parseInt(e, 10) : e : null;
}
function MS(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...o) => t(n(...o)));
}
function Eo(e, t, n) {
  let o = !1;
  const r = e.indexOf(t), l = r !== -1, a = (s) => {
    s === "add" ? e.push(t) : e.splice(r, 1), o = !0, mn(t.children) && t.children.forEach((i) => {
      Eo(e, i, n ?? !l);
    });
  };
  return yt(n) ? n && !l ? a("add") : !n && l && a("remove") : a(l ? "remove" : "add"), o;
}
function BS(e, t, n = "children", o = "hasChildren") {
  const r = (a) => !(Array.isArray(a) && a.length);
  function l(a, s, i) {
    t(a, s, i), s.forEach((u) => {
      if (u[o]) {
        t(u, null, i + 1);
        return;
      }
      const f = u[n];
      r(f) || l(u, f, i + 1);
    });
  }
  e.forEach((a) => {
    if (a[o]) {
      t(a, null, 0);
      return;
    }
    const s = a[n];
    r(s) || l(a, s, 0);
  });
}
let nn;
function FS(e, t, n, o, r) {
  r = _i({
    enterable: !0,
    showArrow: !0
  }, r);
  const l = e == null ? void 0 : e.dataset.prefix, a = e == null ? void 0 : e.querySelector(`.${l}-scrollbar__wrap`);
  function s() {
    const y = r.effect === "light", g = document.createElement("div");
    return g.className = [
      `${l}-popper`,
      y ? "is-light" : "is-dark",
      r.popperClass || ""
    ].join(" "), n = IS(n), g.innerHTML = n, g.style.zIndex = String(o()), e == null || e.appendChild(g), g;
  }
  function i() {
    const y = document.createElement("div");
    return y.className = `${l}-popper__arrow`, y;
  }
  function u() {
    f && f.update();
  }
  nn == null || nn(), nn = () => {
    try {
      f && f.destroy(), m && (e == null || e.removeChild(m)), t.removeEventListener("mouseenter", d), t.removeEventListener("mouseleave", v), a == null || a.removeEventListener("scroll", nn), nn = void 0;
    } catch {
    }
  };
  let f = null, d = u, v = nn;
  r.enterable && ({ onOpen: d, onClose: v } = ou({
    showAfter: r.showAfter,
    hideAfter: r.hideAfter,
    open: u,
    close: nn
  }));
  const m = s();
  m.onmouseenter = d, m.onmouseleave = v;
  const p = [];
  if (r.offset && p.push({
    name: "offset",
    options: {
      offset: [0, r.offset]
    }
  }), r.showArrow) {
    const y = m.appendChild(i());
    p.push({
      name: "arrow",
      options: {
        element: y,
        padding: 10
      }
    });
  }
  const h = r.popperOptions || {};
  return f = eu(t, m, {
    placement: r.placement || "top",
    strategy: "fixed",
    ...h,
    modifiers: h.modifiers ? p.concat(h.modifiers) : p
  }), t.addEventListener("mouseenter", d), t.addEventListener("mouseleave", v), a == null || a.addEventListener("scroll", nn), f;
}
function oc(e) {
  return e.children ? Wh(e.children, oc) : [e];
}
function zs(e, t) {
  return e + t.colSpan;
}
const rc = (e, t, n, o) => {
  let r = 0, l = e;
  const a = n.states.columns.value;
  if (o) {
    const i = oc(o[e]);
    r = a.slice(0, a.indexOf(i[0])).reduce(zs, 0), l = r + i.reduce(zs, 0) - 1;
  } else
    r = e;
  let s;
  switch (t) {
    case "left":
      l < n.states.fixedLeafColumnsLength.value && (s = "left");
      break;
    case "right":
      r >= a.length - n.states.rightFixedLeafColumnsLength.value && (s = "right");
      break;
    default:
      l < n.states.fixedLeafColumnsLength.value ? s = "left" : r >= a.length - n.states.rightFixedLeafColumnsLength.value && (s = "right");
  }
  return s ? {
    direction: s,
    start: r,
    after: l
  } : {};
}, sa = (e, t, n, o, r, l = 0) => {
  const a = [], { direction: s, start: i, after: u } = rc(t, n, o, r);
  if (s) {
    const f = s === "left";
    a.push(`${e}-fixed-column--${s}`), f && u + l === o.states.fixedLeafColumnsLength.value - 1 ? a.push("is-last-column") : !f && i - l === o.states.columns.value.length - o.states.rightFixedLeafColumnsLength.value && a.push("is-first-column");
  }
  return a;
};
function Hs(e, t) {
  return e + (t.realWidth === null || Number.isNaN(t.realWidth) ? Number(t.width) : t.realWidth);
}
const ia = (e, t, n, o) => {
  const {
    direction: r,
    start: l = 0,
    after: a = 0
  } = rc(e, t, n, o);
  if (!r)
    return;
  const s = {}, i = r === "left", u = n.states.columns.value;
  return i ? s.left = u.slice(0, l).reduce(Hs, 0) : s.right = u.slice(a + 1).reverse().reduce(Hs, 0), s;
}, so = (e, t) => {
  e && (Number.isNaN(e[t]) || (e[t] = `${e[t]}px`));
};
function zS(e) {
  const t = Te(), n = k(!1), o = k([]);
  return {
    updateExpandRows: () => {
      const i = e.data.value || [], u = e.rowKey.value;
      if (n.value)
        o.value = i.slice();
      else if (u) {
        const f = Nn(o.value, u);
        o.value = i.reduce((d, v) => {
          const m = Je(v, u);
          return f[m] && d.push(v), d;
        }, []);
      } else
        o.value = [];
    },
    toggleRowExpansion: (i, u) => {
      Eo(o.value, i, u) && t.emit("expand-change", i, o.value.slice());
    },
    setExpandRowKeys: (i) => {
      t.store.assertRowKey();
      const u = e.data.value || [], f = e.rowKey.value, d = Nn(u, f);
      o.value = i.reduce((v, m) => {
        const p = d[m];
        return p && v.push(p.row), v;
      }, []);
    },
    isRowExpanded: (i) => {
      const u = e.rowKey.value;
      return u ? !!Nn(o.value, u)[Je(i, u)] : o.value.includes(i);
    },
    states: {
      expandRows: o,
      defaultExpandAll: n
    }
  };
}
function HS(e) {
  const t = Te(), n = k(null), o = k(null), r = (u) => {
    t.store.assertRowKey(), n.value = u, a(u);
  }, l = () => {
    n.value = null;
  }, a = (u) => {
    const { data: f, rowKey: d } = e;
    let v = null;
    d.value && (v = (c(f) || []).find((m) => Je(m, d.value) === u)), o.value = v, t.emit("current-change", o.value, null);
  };
  return {
    setCurrentRowKey: r,
    restoreCurrentRowKey: l,
    setCurrentRowByKey: a,
    updateCurrentRow: (u) => {
      const f = o.value;
      if (u && u !== f) {
        o.value = u, t.emit("current-change", o.value, f);
        return;
      }
      !u && f && (o.value = null, t.emit("current-change", null, f));
    },
    updateCurrentRowData: () => {
      const u = e.rowKey.value, f = e.data.value || [], d = o.value;
      if (!f.includes(d) && d) {
        if (u) {
          const v = Je(d, u);
          a(v);
        } else
          o.value = null;
        o.value === null && t.emit("current-change", null, d);
      } else
        n.value && (a(n.value), l());
    },
    states: {
      _currentRowKey: n,
      currentRow: o
    }
  };
}
function DS(e) {
  const t = k([]), n = k({}), o = k(16), r = k(!1), l = k({}), a = k("hasChildren"), s = k("children"), i = Te(), u = E(() => {
    if (!e.rowKey.value)
      return {};
    const g = e.data.value || [];
    return d(g);
  }), f = E(() => {
    const g = e.rowKey.value, w = Object.keys(l.value), S = {};
    return w.length && w.forEach((b) => {
      if (l.value[b].length) {
        const O = { children: [] };
        l.value[b].forEach(($) => {
          const C = Je($, g);
          O.children.push(C), $[a.value] && !S[C] && (S[C] = { children: [] });
        }), S[b] = O;
      }
    }), S;
  }), d = (g) => {
    const w = e.rowKey.value, S = {};
    return BS(g, (b, O, $) => {
      const C = Je(b, w);
      Array.isArray(O) ? S[C] = {
        children: O.map((T) => Je(T, w)),
        level: $
      } : r.value && (S[C] = {
        children: [],
        lazy: !0,
        level: $
      });
    }, s.value, a.value), S;
  }, v = (g = !1, w = ((S) => (S = i.store) == null ? void 0 : S.states.defaultExpandAll.value)()) => {
    var S;
    const b = u.value, O = f.value, $ = Object.keys(b), C = {};
    if ($.length) {
      const T = c(n), A = [], F = (N, Y) => {
        if (g)
          return t.value ? w || t.value.includes(Y) : !!(w || N != null && N.expanded);
        {
          const ee = w || t.value && t.value.includes(Y);
          return !!(N != null && N.expanded || ee);
        }
      };
      $.forEach((N) => {
        const Y = T[N], ee = { ...b[N] };
        if (ee.expanded = F(Y, N), ee.lazy) {
          const { loaded: J = !1, loading: te = !1 } = Y || {};
          ee.loaded = !!J, ee.loading = !!te, A.push(N);
        }
        C[N] = ee;
      });
      const L = Object.keys(O);
      r.value && L.length && A.length && L.forEach((N) => {
        const Y = T[N], ee = O[N].children;
        if (A.includes(N)) {
          if (C[N].children.length !== 0)
            throw new Error("[ElTable]children must be an empty array.");
          C[N].children = ee;
        } else {
          const { loaded: J = !1, loading: te = !1 } = Y || {};
          C[N] = {
            lazy: !0,
            loaded: !!J,
            loading: !!te,
            expanded: F(Y, N),
            children: ee,
            level: ""
          };
        }
      });
    }
    n.value = C, (S = i.store) == null || S.updateTableScrollY();
  };
  X(() => t.value, () => {
    v(!0);
  }), X(() => u.value, () => {
    v();
  }), X(() => f.value, () => {
    v();
  });
  const m = (g) => {
    t.value = g, v();
  }, p = (g, w) => {
    i.store.assertRowKey();
    const S = e.rowKey.value, b = Je(g, S), O = b && n.value[b];
    if (b && O && "expanded" in O) {
      const $ = O.expanded;
      w = typeof w > "u" ? !O.expanded : w, n.value[b].expanded = w, $ !== w && i.emit("expand-change", g, w), i.store.updateTableScrollY();
    }
  }, h = (g) => {
    i.store.assertRowKey();
    const w = e.rowKey.value, S = Je(g, w), b = n.value[S];
    r.value && b && "loaded" in b && !b.loaded ? y(g, S, b) : p(g, void 0);
  }, y = (g, w, S) => {
    const { load: b } = i.props;
    b && !n.value[w].loaded && (n.value[w].loading = !0, b(g, S, (O) => {
      if (!Array.isArray(O))
        throw new TypeError("[ElTable] data must be an array");
      n.value[w].loading = !1, n.value[w].loaded = !0, n.value[w].expanded = !0, O.length && (l.value[w] = O), i.emit("expand-change", g, !0);
    }));
  };
  return {
    loadData: y,
    loadOrToggle: h,
    toggleTreeExpansion: p,
    updateTreeExpandKeys: m,
    updateTreeData: v,
    normalize: d,
    states: {
      expandRowKeys: t,
      treeData: n,
      indent: o,
      lazy: r,
      lazyTreeNodeMap: l,
      lazyColumnIdentifier: a,
      childrenColumnName: s
    }
  };
}
const VS = (e, t) => {
  const n = t.sortingColumn;
  return !n || typeof n.sortable == "string" ? e : xS(e, t.sortProp, t.sortOrder, n.sortMethod, n.sortBy);
}, lr = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children && n.children.length > 0 ? t.push.apply(t, lr(n.children)) : t.push(n);
  }), t;
};
function WS() {
  var e;
  const t = Te(), { size: n } = zn((e = t.proxy) == null ? void 0 : e.$props), o = k(null), r = k([]), l = k([]), a = k(!1), s = k([]), i = k([]), u = k([]), f = k([]), d = k([]), v = k([]), m = k([]), p = k([]), h = [], y = k(0), g = k(0), w = k(0), S = k(!1), b = k([]), O = k(!1), $ = k(!1), C = k(null), T = k({}), A = k(null), F = k(null), L = k(null), N = k(null), Y = k(null);
  X(r, () => t.state && j(!1), {
    deep: !0
  });
  const ee = () => {
    if (!o.value)
      throw new Error("[ElTable] prop row-key is required");
  }, J = (Q) => {
    var ae;
    (ae = Q.children) == null || ae.forEach((be) => {
      be.fixed = Q.fixed, J(be);
    });
  }, te = () => {
    s.value.forEach((Ee) => {
      J(Ee);
    }), f.value = s.value.filter((Ee) => Ee.fixed === !0 || Ee.fixed === "left"), d.value = s.value.filter((Ee) => Ee.fixed === "right"), f.value.length > 0 && s.value[0] && s.value[0].type === "selection" && !s.value[0].fixed && (s.value[0].fixed = !0, f.value.unshift(s.value[0]));
    const Q = s.value.filter((Ee) => !Ee.fixed);
    i.value = [].concat(f.value).concat(Q).concat(d.value);
    const ae = lr(Q), be = lr(f.value), he = lr(d.value);
    y.value = ae.length, g.value = be.length, w.value = he.length, u.value = [].concat(be).concat(ae).concat(he), a.value = f.value.length > 0 || d.value.length > 0;
  }, j = (Q, ae = !1) => {
    Q && te(), ae ? t.state.doLayout() : t.state.debouncedUpdateLayout();
  }, le = (Q) => b.value.includes(Q), x = () => {
    S.value = !1, b.value.length && (b.value = [], t.emit("selection-change", []));
  }, U = () => {
    let Q;
    if (o.value) {
      Q = [];
      const ae = Nn(b.value, o.value), be = Nn(r.value, o.value);
      for (const he in ae)
        Bn(ae, he) && !be[he] && Q.push(ae[he].row);
    } else
      Q = b.value.filter((ae) => !r.value.includes(ae));
    if (Q.length) {
      const ae = b.value.filter((be) => !Q.includes(be));
      b.value = ae, t.emit("selection-change", ae.slice());
    }
  }, ie = () => (b.value || []).slice(), de = (Q, ae = void 0, be = !0) => {
    if (Eo(b.value, Q, ae)) {
      const Ee = (b.value || []).slice();
      be && t.emit("select", Ee, Q), t.emit("selection-change", Ee);
    }
  }, we = () => {
    var Q, ae;
    const be = $.value ? !S.value : !(S.value || b.value.length);
    S.value = be;
    let he = !1, Ee = 0;
    const We = (ae = (Q = t == null ? void 0 : t.store) == null ? void 0 : Q.states) == null ? void 0 : ae.rowKey.value;
    r.value.forEach((ot, At) => {
      const ht = At + Ee;
      C.value ? C.value.call(null, ot, ht) && Eo(b.value, ot, be) && (he = !0) : Eo(b.value, ot, be) && (he = !0), Ee += $e(Je(ot, We));
    }), he && t.emit("selection-change", b.value ? b.value.slice() : []), t.emit("select-all", b.value);
  }, Ce = () => {
    const Q = Nn(b.value, o.value);
    r.value.forEach((ae) => {
      const be = Je(ae, o.value), he = Q[be];
      he && (b.value[he.index] = ae);
    });
  }, Oe = () => {
    var Q, ae, be;
    if (((Q = r.value) == null ? void 0 : Q.length) === 0) {
      S.value = !1;
      return;
    }
    let he;
    o.value && (he = Nn(b.value, o.value));
    const Ee = function(ht) {
      return he ? !!he[Je(ht, o.value)] : b.value.includes(ht);
    };
    let We = !0, ot = 0, At = 0;
    for (let ht = 0, po = (r.value || []).length; ht < po; ht++) {
      const Kn = (be = (ae = t == null ? void 0 : t.store) == null ? void 0 : ae.states) == null ? void 0 : be.rowKey.value, vo = ht + At, kn = r.value[ht], _ = C.value && C.value.call(null, kn, vo);
      if (Ee(kn))
        ot++;
      else if (!C.value || _) {
        We = !1;
        break;
      }
      At += $e(Je(kn, Kn));
    }
    ot === 0 && (We = !1), S.value = We;
  }, $e = (Q) => {
    var ae;
    if (!t || !t.store)
      return 0;
    const { treeData: be } = t.store.states;
    let he = 0;
    const Ee = (ae = be.value[Q]) == null ? void 0 : ae.children;
    return Ee && (he += Ee.length, Ee.forEach((We) => {
      he += $e(We);
    })), he;
  }, Le = (Q, ae) => {
    Array.isArray(Q) || (Q = [Q]);
    const be = {};
    return Q.forEach((he) => {
      T.value[he.id] = ae, be[he.columnKey || he.id] = ae;
    }), be;
  }, Se = (Q, ae, be) => {
    F.value && F.value !== Q && (F.value.order = null), F.value = Q, L.value = ae, N.value = be;
  }, Ve = () => {
    let Q = c(l);
    Object.keys(T.value).forEach((ae) => {
      const be = T.value[ae];
      if (!be || be.length === 0)
        return;
      const he = tc({
        columns: u.value
      }, ae);
      he && he.filterMethod && (Q = Q.filter((Ee) => be.some((We) => he.filterMethod.call(null, We, Ee, he))));
    }), A.value = Q;
  }, V = () => {
    r.value = VS(A.value, {
      sortingColumn: F.value,
      sortProp: L.value,
      sortOrder: N.value
    });
  }, oe = (Q = void 0) => {
    Q && Q.filter || Ve(), V();
  }, Pe = (Q) => {
    const { tableHeaderRef: ae } = t.refs;
    if (!ae)
      return;
    const be = Object.assign({}, ae.filterPanels), he = Object.keys(be);
    if (he.length)
      if (typeof Q == "string" && (Q = [Q]), Array.isArray(Q)) {
        const Ee = Q.map((We) => NS({
          columns: u.value
        }, We));
        he.forEach((We) => {
          const ot = Ee.find((At) => At.id === We);
          ot && (ot.filteredValue = []);
        }), t.store.commit("filterChange", {
          column: Ee,
          values: [],
          silent: !0,
          multi: !0
        });
      } else
        he.forEach((Ee) => {
          const We = u.value.find((ot) => ot.id === Ee);
          We && (We.filteredValue = []);
        }), T.value = {}, t.store.commit("filterChange", {
          column: {},
          values: [],
          silent: !0
        });
  }, xe = () => {
    F.value && (Se(null, null, null), t.store.commit("changeSortCondition", {
      silent: !0
    }));
  }, {
    setExpandRowKeys: at,
    toggleRowExpansion: dt,
    updateExpandRows: Ye,
    states: _t,
    isRowExpanded: st
  } = zS({
    data: r,
    rowKey: o
  }), {
    updateTreeExpandKeys: ft,
    toggleTreeExpansion: Xe,
    updateTreeData: pt,
    loadOrToggle: ve,
    states: nt
  } = DS({
    data: r,
    rowKey: o
  }), {
    updateCurrentRowData: vt,
    updateCurrentRow: H,
    setCurrentRowKey: se,
    states: Ie
  } = HS({
    data: r,
    rowKey: o
  });
  return {
    assertRowKey: ee,
    updateColumns: te,
    scheduleLayout: j,
    isSelected: le,
    clearSelection: x,
    cleanSelection: U,
    getSelectionRows: ie,
    toggleRowSelection: de,
    _toggleAllSelection: we,
    toggleAllSelection: null,
    updateSelectionByRowKey: Ce,
    updateAllSelected: Oe,
    updateFilters: Le,
    updateCurrentRow: H,
    updateSort: Se,
    execFilter: Ve,
    execSort: V,
    execQuery: oe,
    clearFilter: Pe,
    clearSort: xe,
    toggleRowExpansion: dt,
    setExpandRowKeysAdapter: (Q) => {
      at(Q), ft(Q);
    },
    setCurrentRowKey: se,
    toggleRowExpansionAdapter: (Q, ae) => {
      u.value.some(({ type: he }) => he === "expand") ? dt(Q, ae) : Xe(Q, ae);
    },
    isRowExpanded: st,
    updateExpandRows: Ye,
    updateCurrentRowData: vt,
    loadOrToggle: ve,
    updateTreeData: pt,
    states: {
      tableSize: n,
      rowKey: o,
      data: r,
      _data: l,
      isComplex: a,
      _columns: s,
      originColumns: i,
      columns: u,
      fixedColumns: f,
      rightFixedColumns: d,
      leafColumns: v,
      fixedLeafColumns: m,
      rightFixedLeafColumns: p,
      updateOrderFns: h,
      leafColumnsLength: y,
      fixedLeafColumnsLength: g,
      rightFixedLeafColumnsLength: w,
      isAllSelected: S,
      selection: b,
      reserveSelection: O,
      selectOnIndeterminate: $,
      selectable: C,
      filters: T,
      filteredData: A,
      sortingColumn: F,
      sortProp: L,
      sortOrder: N,
      hoverRow: Y,
      ..._t,
      ...nt,
      ...Ie
    }
  };
}
function wl(e, t) {
  return e.map((n) => {
    var o;
    return n.id === t.id ? t : ((o = n.children) != null && o.length && (n.children = wl(n.children, t)), n);
  });
}
function Cl(e) {
  e.forEach((t) => {
    var n, o;
    t.no = (n = t.getColumnIndex) == null ? void 0 : n.call(t), (o = t.children) != null && o.length && Cl(t.children);
  }), e.sort((t, n) => t.no - n.no);
}
function KS() {
  const e = Te(), t = WS();
  return {
    ns: ne("table"),
    ...t,
    mutations: {
      setData(a, s) {
        const i = c(a._data) !== s;
        a.data.value = s, a._data.value = s, e.store.execQuery(), e.store.updateCurrentRowData(), e.store.updateExpandRows(), e.store.updateTreeData(e.store.states.defaultExpandAll.value), c(a.reserveSelection) ? (e.store.assertRowKey(), e.store.updateSelectionByRowKey()) : i ? e.store.clearSelection() : e.store.cleanSelection(), e.store.updateAllSelected(), e.$ready && e.store.scheduleLayout();
      },
      insertColumn(a, s, i, u) {
        const f = c(a._columns);
        let d = [];
        i ? (i && !i.children && (i.children = []), i.children.push(s), d = wl(f, i)) : (f.push(s), d = f), Cl(d), a._columns.value = d, a.updateOrderFns.push(u), s.type === "selection" && (a.selectable.value = s.selectable, a.reserveSelection.value = s.reserveSelection), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
      },
      updateColumnOrder(a, s) {
        var i;
        ((i = s.getColumnIndex) == null ? void 0 : i.call(s)) !== s.no && (Cl(a._columns.value), e.$ready && e.store.updateColumns());
      },
      removeColumn(a, s, i, u) {
        const f = c(a._columns) || [];
        if (i)
          i.children.splice(i.children.findIndex((v) => v.id === s.id), 1), me(() => {
            var v;
            ((v = i.children) == null ? void 0 : v.length) === 0 && delete i.children;
          }), a._columns.value = wl(f, i);
        else {
          const v = f.indexOf(s);
          v > -1 && (f.splice(v, 1), a._columns.value = f);
        }
        const d = a.updateOrderFns.indexOf(u);
        d > -1 && a.updateOrderFns.splice(d, 1), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
      },
      sort(a, s) {
        const { prop: i, order: u, init: f } = s;
        if (i) {
          const d = c(a.columns).find((v) => v.property === i);
          d && (d.order = u, e.store.updateSort(d, i, u), e.store.commit("changeSortCondition", { init: f }));
        }
      },
      changeSortCondition(a, s) {
        const { sortingColumn: i, sortProp: u, sortOrder: f } = a, d = c(i), v = c(u), m = c(f);
        m === null && (a.sortingColumn.value = null, a.sortProp.value = null);
        const p = { filter: !0 };
        e.store.execQuery(p), (!s || !(s.silent || s.init)) && e.emit("sort-change", {
          column: d,
          prop: v,
          order: m
        }), e.store.updateTableScrollY();
      },
      filterChange(a, s) {
        const { column: i, values: u, silent: f } = s, d = e.store.updateFilters(i, u);
        e.store.execQuery(), f || e.emit("filter-change", d), e.store.updateTableScrollY();
      },
      toggleAllSelection() {
        e.store.toggleAllSelection();
      },
      rowSelectedChanged(a, s) {
        e.store.toggleRowSelection(s), e.store.updateAllSelected();
      },
      setHoverRow(a, s) {
        a.hoverRow.value = s;
      },
      setCurrentRow(a, s) {
        e.store.updateCurrentRow(s);
      }
    },
    commit: function(a, ...s) {
      const i = e.store.mutations;
      if (i[a])
        i[a].apply(e, [e.store.states].concat(s));
      else
        throw new Error(`Action not found: ${a}`);
    },
    updateTableScrollY: function() {
      me(() => e.layout.updateScrollY.apply(e.layout));
    }
  };
}
const To = {
  rowKey: "rowKey",
  defaultExpandAll: "defaultExpandAll",
  selectOnIndeterminate: "selectOnIndeterminate",
  indent: "indent",
  lazy: "lazy",
  data: "data",
  "treeProps.hasChildren": {
    key: "lazyColumnIdentifier",
    default: "hasChildren"
  },
  "treeProps.children": {
    key: "childrenColumnName",
    default: "children"
  }
};
function jS(e, t) {
  if (!e)
    throw new Error("Table is required.");
  const n = KS();
  return n.toggleAllSelection = Qn(n._toggleAllSelection, 10), Object.keys(To).forEach((o) => {
    lc(ac(t, o), o, n);
  }), US(n, t), n;
}
function US(e, t) {
  Object.keys(To).forEach((n) => {
    X(() => ac(t, n), (o) => {
      lc(o, n, e);
    });
  });
}
function lc(e, t, n) {
  let o = e, r = To[t];
  typeof To[t] == "object" && (r = r.key, o = o || To[t].default), n.states[r].value = o;
}
function ac(e, t) {
  if (t.includes(".")) {
    const n = t.split(".");
    let o = e;
    return n.forEach((r) => {
      o = o[r];
    }), o;
  } else
    return e[t];
}
class qS {
  constructor(t) {
    this.observers = [], this.table = null, this.store = null, this.columns = [], this.fit = !0, this.showHeader = !0, this.height = k(null), this.scrollX = k(!1), this.scrollY = k(!1), this.bodyWidth = k(null), this.fixedWidth = k(null), this.rightFixedWidth = k(null), this.gutterWidth = 0;
    for (const n in t)
      Bn(t, n) && (Xt(this[n]) ? this[n].value = t[n] : this[n] = t[n]);
    if (!this.table)
      throw new Error("Table is required for Table Layout");
    if (!this.store)
      throw new Error("Store is required for Table Layout");
  }
  updateScrollY() {
    if (this.height.value === null)
      return !1;
    const n = this.table.refs.scrollBarRef;
    if (this.table.vnode.el && (n != null && n.wrapRef)) {
      let o = !0;
      const r = this.scrollY.value;
      return o = n.wrapRef.scrollHeight > n.wrapRef.clientHeight, this.scrollY.value = o, r !== o;
    }
    return !1;
  }
  setHeight(t, n = "height") {
    if (!_e)
      return;
    const o = this.table.vnode.el;
    if (t = LS(t), this.height.value = Number(t), !o && (t || t === 0))
      return me(() => this.setHeight(t, n));
    typeof t == "number" ? (o.style[n] = `${t}px`, this.updateElsHeight()) : typeof t == "string" && (o.style[n] = t, this.updateElsHeight());
  }
  setMaxHeight(t) {
    this.setHeight(t, "max-height");
  }
  getFlattenColumns() {
    const t = [];
    return this.table.store.states.columns.value.forEach((o) => {
      o.isColumnGroup ? t.push.apply(t, o.columns) : t.push(o);
    }), t;
  }
  updateElsHeight() {
    this.updateScrollY(), this.notifyObservers("scrollable");
  }
  headerDisplayNone(t) {
    if (!t)
      return !0;
    let n = t;
    for (; n.tagName !== "DIV"; ) {
      if (getComputedStyle(n).display === "none")
        return !0;
      n = n.parentElement;
    }
    return !1;
  }
  updateColumnsWidth() {
    if (!_e)
      return;
    const t = this.fit, n = this.table.vnode.el.clientWidth;
    let o = 0;
    const r = this.getFlattenColumns(), l = r.filter((i) => typeof i.width != "number");
    if (r.forEach((i) => {
      typeof i.width == "number" && i.realWidth && (i.realWidth = null);
    }), l.length > 0 && t) {
      if (r.forEach((i) => {
        o += Number(i.width || i.minWidth || 80);
      }), o <= n) {
        this.scrollX.value = !1;
        const i = n - o;
        if (l.length === 1)
          l[0].realWidth = Number(l[0].minWidth || 80) + i;
        else {
          const u = l.reduce((v, m) => v + Number(m.minWidth || 80), 0), f = i / u;
          let d = 0;
          l.forEach((v, m) => {
            if (m === 0)
              return;
            const p = Math.floor(Number(v.minWidth || 80) * f);
            d += p, v.realWidth = Number(v.minWidth || 80) + p;
          }), l[0].realWidth = Number(l[0].minWidth || 80) + i - d;
        }
      } else
        this.scrollX.value = !0, l.forEach((i) => {
          i.realWidth = Number(i.minWidth);
        });
      this.bodyWidth.value = Math.max(o, n), this.table.state.resizeState.value.width = this.bodyWidth.value;
    } else
      r.forEach((i) => {
        !i.width && !i.minWidth ? i.realWidth = 80 : i.realWidth = Number(i.width || i.minWidth), o += i.realWidth;
      }), this.scrollX.value = o > n, this.bodyWidth.value = o;
    const a = this.store.states.fixedColumns.value;
    if (a.length > 0) {
      let i = 0;
      a.forEach((u) => {
        i += Number(u.realWidth || u.width);
      }), this.fixedWidth.value = i;
    }
    const s = this.store.states.rightFixedColumns.value;
    if (s.length > 0) {
      let i = 0;
      s.forEach((u) => {
        i += Number(u.realWidth || u.width);
      }), this.rightFixedWidth.value = i;
    }
    this.notifyObservers("columns");
  }
  addObserver(t) {
    this.observers.push(t);
  }
  removeObserver(t) {
    const n = this.observers.indexOf(t);
    n !== -1 && this.observers.splice(n, 1);
  }
  notifyObservers(t) {
    this.observers.forEach((o) => {
      var r, l;
      switch (t) {
        case "columns":
          (r = o.state) == null || r.onColumnsChange(this);
          break;
        case "scrollable":
          (l = o.state) == null || l.onScrollableChange(this);
          break;
        default:
          throw new Error(`Table Layout don't have event ${t}.`);
      }
    });
  }
}
const { CheckboxGroup: GS } = ao, YS = z({
  name: "ElTableFilterPanel",
  components: {
    ElCheckbox: ao,
    ElCheckboxGroup: GS,
    ElScrollbar: Ql,
    ElTooltip: oa,
    ElIcon: Be,
    ArrowDown: Zs,
    ArrowUp: Nc
  },
  directives: { ClickOutside: Tu },
  props: {
    placement: {
      type: String,
      default: "bottom-start"
    },
    store: {
      type: Object
    },
    column: {
      type: Object
    },
    upDataColumn: {
      type: Function
    }
  },
  setup(e) {
    const t = Te(), { t: n } = ct(), o = ne("table-filter"), r = t == null ? void 0 : t.parent;
    r.filterPanels.value[e.column.id] || (r.filterPanels.value[e.column.id] = t);
    const l = k(!1), a = k(null), s = E(() => e.column && e.column.filters), i = E({
      get: () => {
        var b;
        return (((b = e.column) == null ? void 0 : b.filteredValue) || [])[0];
      },
      set: (b) => {
        u.value && (typeof b < "u" && b !== null ? u.value.splice(0, 1, b) : u.value.splice(0, 1));
      }
    }), u = E({
      get() {
        return e.column ? e.column.filteredValue || [] : [];
      },
      set(b) {
        e.column && e.upDataColumn("filteredValue", b);
      }
    }), f = E(() => e.column ? e.column.filterMultiple : !0), d = (b) => b.value === i.value, v = () => {
      l.value = !1;
    }, m = (b) => {
      b.stopPropagation(), l.value = !l.value;
    }, p = () => {
      l.value = !1;
    }, h = () => {
      w(u.value), v();
    }, y = () => {
      u.value = [], w(u.value), v();
    }, g = (b) => {
      i.value = b, w(typeof b < "u" && b !== null ? u.value : []), v();
    }, w = (b) => {
      e.store.commit("filterChange", {
        column: e.column,
        values: b
      }), e.store.updateAllSelected();
    };
    X(l, (b) => {
      e.column && e.upDataColumn("filterOpened", b);
    }, {
      immediate: !0
    });
    const S = E(() => {
      var b, O;
      return (O = (b = a.value) == null ? void 0 : b.popperRef) == null ? void 0 : O.contentRef;
    });
    return {
      tooltipVisible: l,
      multiple: f,
      filteredValue: u,
      filterValue: i,
      filters: s,
      handleConfirm: h,
      handleReset: y,
      handleSelect: g,
      isActive: d,
      t: n,
      ns: o,
      showFilterPanel: m,
      hideFilterPanel: p,
      popperPaneRef: S,
      tooltip: a
    };
  }
}), XS = { key: 0 }, JS = ["disabled"], QS = ["label", "onClick"];
function ZS(e, t, n, o, r, l) {
  const a = Me("el-checkbox"), s = Me("el-checkbox-group"), i = Me("el-scrollbar"), u = Me("arrow-up"), f = Me("arrow-down"), d = Me("el-icon"), v = Me("el-tooltip"), m = Ol("click-outside");
  return P(), K(v, {
    ref: "tooltip",
    visible: e.tooltipVisible,
    offset: 0,
    placement: e.placement,
    "show-arrow": !1,
    "stop-popper-mouse-event": !1,
    teleported: "",
    effect: "light",
    pure: "",
    "popper-class": e.ns.b(),
    persistent: ""
  }, {
    content: D(() => [
      e.multiple ? (P(), R("div", XS, [
        B("div", {
          class: I(e.ns.e("content"))
        }, [
          G(i, {
            "wrap-class": e.ns.e("wrap")
          }, {
            default: D(() => [
              G(s, {
                modelValue: e.filteredValue,
                "onUpdate:modelValue": t[0] || (t[0] = (p) => e.filteredValue = p),
                class: I(e.ns.e("checkbox-group"))
              }, {
                default: D(() => [
                  (P(!0), R(ze, null, Vt(e.filters, (p) => (P(), K(a, {
                    key: p.value,
                    label: p.value
                  }, {
                    default: D(() => [
                      Wt(ge(p.text), 1)
                    ]),
                    _: 2
                  }, 1032, ["label"]))), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "class"])
            ]),
            _: 1
          }, 8, ["wrap-class"])
        ], 2),
        B("div", {
          class: I(e.ns.e("bottom"))
        }, [
          B("button", {
            class: I({ [e.ns.is("disabled")]: e.filteredValue.length === 0 }),
            disabled: e.filteredValue.length === 0,
            type: "button",
            onClick: t[1] || (t[1] = (...p) => e.handleConfirm && e.handleConfirm(...p))
          }, ge(e.t("el.table.confirmFilter")), 11, JS),
          B("button", {
            type: "button",
            onClick: t[2] || (t[2] = (...p) => e.handleReset && e.handleReset(...p))
          }, ge(e.t("el.table.resetFilter")), 1)
        ], 2)
      ])) : (P(), R("ul", {
        key: 1,
        class: I(e.ns.e("list"))
      }, [
        B("li", {
          class: I([
            e.ns.e("list-item"),
            {
              [e.ns.is("active")]: e.filterValue === void 0 || e.filterValue === null
            }
          ]),
          onClick: t[3] || (t[3] = (p) => e.handleSelect(null))
        }, ge(e.t("el.table.clearFilter")), 3),
        (P(!0), R(ze, null, Vt(e.filters, (p) => (P(), R("li", {
          key: p.value,
          class: I([e.ns.e("list-item"), e.ns.is("active", e.isActive(p))]),
          label: p.value,
          onClick: (h) => e.handleSelect(p.value)
        }, ge(p.text), 11, QS))), 128))
      ], 2))
    ]),
    default: D(() => [
      Fe((P(), R("span", {
        class: I([
          `${e.ns.namespace.value}-table__column-filter-trigger`,
          `${e.ns.namespace.value}-none-outline`
        ]),
        onClick: t[4] || (t[4] = (...p) => e.showFilterPanel && e.showFilterPanel(...p))
      }, [
        G(d, null, {
          default: D(() => [
            e.column.filterOpened ? (P(), K(u, { key: 0 })) : (P(), K(f, { key: 1 }))
          ]),
          _: 1
        })
      ], 2)), [
        [m, e.hideFilterPanel, e.popperPaneRef]
      ])
    ]),
    _: 1
  }, 8, ["visible", "placement", "popper-class"]);
}
var e1 = /* @__PURE__ */ ue(YS, [["render", ZS], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/filter-panel.vue"]]);
function sc(e) {
  const t = Te();
  Tl(() => {
    n.value.addObserver(t);
  }), Re(() => {
    o(n.value), r(n.value);
  }), qs(() => {
    o(n.value), r(n.value);
  }), br(() => {
    n.value.removeObserver(t);
  });
  const n = E(() => {
    const l = e.layout;
    if (!l)
      throw new Error("Can not find table layout.");
    return l;
  }), o = (l) => {
    var a;
    const s = ((a = e.vnode.el) == null ? void 0 : a.querySelectorAll("colgroup > col")) || [];
    if (!s.length)
      return;
    const i = l.getFlattenColumns(), u = {};
    i.forEach((f) => {
      u[f.id] = f;
    });
    for (let f = 0, d = s.length; f < d; f++) {
      const v = s[f], m = v.getAttribute("name"), p = u[m];
      p && v.setAttribute("width", p.realWidth || p.width);
    }
  }, r = (l) => {
    var a, s;
    const i = ((a = e.vnode.el) == null ? void 0 : a.querySelectorAll("colgroup > col[name=gutter]")) || [];
    for (let f = 0, d = i.length; f < d; f++)
      i[f].setAttribute("width", l.scrollY.value ? l.gutterWidth : "0");
    const u = ((s = e.vnode.el) == null ? void 0 : s.querySelectorAll("th.gutter")) || [];
    for (let f = 0, d = u.length; f < d; f++) {
      const v = u[f];
      v.style.width = l.scrollY.value ? `${l.gutterWidth}px` : "0", v.style.display = l.scrollY.value ? "" : "none";
    }
  };
  return {
    tableLayout: n.value,
    onColumnsChange: o,
    onScrollableChange: r
  };
}
const Zt = Symbol("ElTable");
function t1(e, t) {
  const n = Te(), o = pe(Zt), r = (h) => {
    h.stopPropagation();
  }, l = (h, y) => {
    !y.filters && y.sortable ? p(h, y, !1) : y.filterable && !y.sortable && r(h), o == null || o.emit("header-click", y, h);
  }, a = (h, y) => {
    o == null || o.emit("header-contextmenu", y, h);
  }, s = k(null), i = k(!1), u = k({}), f = (h, y) => {
    if (_e && !(y.children && y.children.length > 0) && s.value && e.border) {
      i.value = !0;
      const g = o;
      t("set-drag-visible", !0);
      const S = (g == null ? void 0 : g.vnode.el).getBoundingClientRect().left, b = n.vnode.el.querySelector(`th.${y.id}`), O = b.getBoundingClientRect(), $ = O.left - S + 30;
      Po(b, "noclick"), u.value = {
        startMouseLeft: h.clientX,
        startLeft: O.right - S,
        startColumnLeft: O.left - S,
        tableLeft: S
      };
      const C = g == null ? void 0 : g.refs.resizeProxy;
      C.style.left = `${u.value.startLeft}px`, document.onselectstart = function() {
        return !1;
      }, document.ondragstart = function() {
        return !1;
      };
      const T = (F) => {
        const L = F.clientX - u.value.startMouseLeft, N = u.value.startLeft + L;
        C.style.left = `${Math.max($, N)}px`;
      }, A = () => {
        if (i.value) {
          const { startColumnLeft: F, startLeft: L } = u.value, Y = Number.parseInt(C.style.left, 10) - F;
          y.width = y.realWidth = Y, g == null || g.emit("header-dragend", y.width, L - F, y, h), requestAnimationFrame(() => {
            e.store.scheduleLayout(!1, !0);
          }), document.body.style.cursor = "", i.value = !1, s.value = null, u.value = {}, t("set-drag-visible", !1);
        }
        document.removeEventListener("mousemove", T), document.removeEventListener("mouseup", A), document.onselectstart = null, document.ondragstart = null, setTimeout(() => {
          wn(b, "noclick");
        }, 0);
      };
      document.addEventListener("mousemove", T), document.addEventListener("mouseup", A);
    }
  }, d = (h, y) => {
    if (y.children && y.children.length > 0)
      return;
    const g = h.target;
    if (!yn(g))
      return;
    const w = g == null ? void 0 : g.closest("th");
    if (!(!y || !y.resizable) && !i.value && e.border) {
      const S = w.getBoundingClientRect(), b = document.body.style;
      S.width > 12 && S.right - h.pageX < 8 ? (b.cursor = "col-resize", Yn(w, "is-sortable") && (w.style.cursor = "col-resize"), s.value = y) : i.value || (b.cursor = "", Yn(w, "is-sortable") && (w.style.cursor = "pointer"), s.value = null);
    }
  }, v = () => {
    _e && (document.body.style.cursor = "");
  }, m = ({ order: h, sortOrders: y }) => {
    if (h === "")
      return y[0];
    const g = y.indexOf(h || null);
    return y[g > y.length - 2 ? 0 : g + 1];
  }, p = (h, y, g) => {
    var w;
    h.stopPropagation();
    const S = y.order === g ? null : g || m(y), b = (w = h.target) == null ? void 0 : w.closest("th");
    if (b && Yn(b, "noclick")) {
      wn(b, "noclick");
      return;
    }
    if (!y.sortable)
      return;
    const O = e.store.states;
    let $ = O.sortProp.value, C;
    const T = O.sortingColumn.value;
    (T !== y || T === y && T.order === null) && (T && (T.order = null), O.sortingColumn.value = y, $ = y.property), S ? C = y.order = S : C = y.order = null, O.sortProp.value = $, O.sortOrder.value = C, o == null || o.store.commit("changeSortCondition");
  };
  return {
    handleHeaderClick: l,
    handleHeaderContextMenu: a,
    handleMouseDown: f,
    handleMouseMove: d,
    handleMouseOut: v,
    handleSortClick: p,
    handleFilterClick: r
  };
}
function n1(e) {
  const t = pe(Zt), n = ne("table");
  return {
    getHeaderRowStyle: (s) => {
      const i = t == null ? void 0 : t.props.headerRowStyle;
      return typeof i == "function" ? i.call(null, { rowIndex: s }) : i;
    },
    getHeaderRowClass: (s) => {
      const i = [], u = t == null ? void 0 : t.props.headerRowClassName;
      return typeof u == "string" ? i.push(u) : typeof u == "function" && i.push(u.call(null, { rowIndex: s })), i.join(" ");
    },
    getHeaderCellStyle: (s, i, u, f) => {
      var d;
      let v = (d = t == null ? void 0 : t.props.headerCellStyle) != null ? d : {};
      typeof v == "function" && (v = v.call(null, {
        rowIndex: s,
        columnIndex: i,
        row: u,
        column: f
      }));
      const m = ia(i, f.fixed, e.store, u);
      return so(m, "left"), so(m, "right"), Object.assign({}, v, m);
    },
    getHeaderCellClass: (s, i, u, f) => {
      const d = sa(n.b(), i, f.fixed, e.store, u), v = [
        f.id,
        f.order,
        f.headerAlign,
        f.className,
        f.labelClassName,
        ...d
      ];
      f.children || v.push("is-leaf"), f.sortable && v.push("is-sortable");
      const m = t == null ? void 0 : t.props.headerCellClassName;
      return typeof m == "string" ? v.push(m) : typeof m == "function" && v.push(m.call(null, {
        rowIndex: s,
        columnIndex: i,
        row: u,
        column: f
      })), v.push(n.e("cell")), v.filter((p) => !!p).join(" ");
    }
  };
}
const ic = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children ? (t.push(n), t.push.apply(t, ic(n.children))) : t.push(n);
  }), t;
}, o1 = (e) => {
  let t = 1;
  const n = (l, a) => {
    if (a && (l.level = a.level + 1, t < l.level && (t = l.level)), l.children) {
      let s = 0;
      l.children.forEach((i) => {
        n(i, l), s += i.colSpan;
      }), l.colSpan = s;
    } else
      l.colSpan = 1;
  };
  e.forEach((l) => {
    l.level = 1, n(l, void 0);
  });
  const o = [];
  for (let l = 0; l < t; l++)
    o.push([]);
  return ic(e).forEach((l) => {
    l.children ? (l.rowSpan = 1, l.children.forEach((a) => a.isSubColumn = !0)) : l.rowSpan = t - l.level + 1, o[l.level - 1].push(l);
  }), o;
};
function r1(e) {
  const t = pe(Zt), n = E(() => o1(e.store.states.originColumns.value));
  return {
    isGroup: E(() => {
      const l = n.value.length > 1;
      return l && t && (t.state.isGroup.value = !0), l;
    }),
    toggleAllSelection: (l) => {
      l.stopPropagation(), t == null || t.store.commit("toggleAllSelection");
    },
    columnRows: n
  };
}
var l1 = z({
  name: "ElTableHeader",
  components: {
    ElCheckbox: ao
  },
  props: {
    fixed: {
      type: String,
      default: ""
    },
    store: {
      required: !0,
      type: Object
    },
    border: Boolean,
    defaultSort: {
      type: Object,
      default: () => ({
        prop: "",
        order: ""
      })
    }
  },
  setup(e, { emit: t }) {
    const n = Te(), o = pe(Zt), r = ne("table"), l = k({}), { onColumnsChange: a, onScrollableChange: s } = sc(o);
    Re(async () => {
      await me(), await me();
      const { prop: $, order: C } = e.defaultSort;
      o == null || o.store.commit("sort", { prop: $, order: C, init: !0 });
    });
    const {
      handleHeaderClick: i,
      handleHeaderContextMenu: u,
      handleMouseDown: f,
      handleMouseMove: d,
      handleMouseOut: v,
      handleSortClick: m,
      handleFilterClick: p
    } = t1(e, t), {
      getHeaderRowStyle: h,
      getHeaderRowClass: y,
      getHeaderCellStyle: g,
      getHeaderCellClass: w
    } = n1(e), { isGroup: S, toggleAllSelection: b, columnRows: O } = r1(e);
    return n.state = {
      onColumnsChange: a,
      onScrollableChange: s
    }, n.filterPanels = l, {
      ns: r,
      filterPanels: l,
      onColumnsChange: a,
      onScrollableChange: s,
      columnRows: O,
      getHeaderRowClass: y,
      getHeaderRowStyle: h,
      getHeaderCellClass: w,
      getHeaderCellStyle: g,
      handleHeaderClick: i,
      handleHeaderContextMenu: u,
      handleMouseDown: f,
      handleMouseMove: d,
      handleMouseOut: v,
      handleSortClick: m,
      handleFilterClick: p,
      isGroup: S,
      toggleAllSelection: b
    };
  },
  render() {
    const {
      ns: e,
      isGroup: t,
      columnRows: n,
      getHeaderCellStyle: o,
      getHeaderCellClass: r,
      getHeaderRowClass: l,
      getHeaderRowStyle: a,
      handleHeaderClick: s,
      handleHeaderContextMenu: i,
      handleMouseDown: u,
      handleMouseMove: f,
      handleSortClick: d,
      handleMouseOut: v,
      store: m,
      $parent: p
    } = this;
    let h = 1;
    return re("thead", {
      class: { [e.is("group")]: t }
    }, n.map((y, g) => re("tr", {
      class: l(g),
      key: g,
      style: a(g)
    }, y.map((w, S) => (w.rowSpan > h && (h = w.rowSpan), re("th", {
      class: r(g, S, y, w),
      colspan: w.colSpan,
      key: `${w.id}-thead`,
      rowspan: w.rowSpan,
      style: o(g, S, y, w),
      onClick: (b) => s(b, w),
      onContextmenu: (b) => i(b, w),
      onMousedown: (b) => u(b, w),
      onMousemove: (b) => f(b, w),
      onMouseout: v
    }, [
      re("div", {
        class: [
          "cell",
          w.filteredValue && w.filteredValue.length > 0 ? "highlight" : ""
        ]
      }, [
        w.renderHeader ? w.renderHeader({
          column: w,
          $index: S,
          store: m,
          _self: p
        }) : w.label,
        w.sortable && re("span", {
          onClick: (b) => d(b, w),
          class: "caret-wrapper"
        }, [
          re("i", {
            onClick: (b) => d(b, w, "ascending"),
            class: "sort-caret ascending"
          }),
          re("i", {
            onClick: (b) => d(b, w, "descending"),
            class: "sort-caret descending"
          })
        ]),
        w.filterable && re(e1, {
          store: m,
          placement: w.filterPlacement || "bottom-start",
          column: w,
          upDataColumn: (b, O) => {
            w[b] = O;
          }
        })
      ])
    ]))))));
  }
});
function a1(e) {
  const t = pe(Zt), n = k(""), o = k(re("div")), { nextZIndex: r } = xr(), l = (p, h, y) => {
    var g;
    const w = t, S = Yr(p);
    let b;
    const O = (g = w == null ? void 0 : w.vnode.el) == null ? void 0 : g.dataset.prefix;
    S && (b = Fs({
      columns: e.store.states.columns.value
    }, S, O), b && (w == null || w.emit(`cell-${y}`, h, b, S, p))), w == null || w.emit(`row-${y}`, h, b, p);
  }, a = (p, h) => {
    l(p, h, "dblclick");
  }, s = (p, h) => {
    e.store.commit("setCurrentRow", h), l(p, h, "click");
  }, i = (p, h) => {
    l(p, h, "contextmenu");
  }, u = Qn((p) => {
    e.store.commit("setHoverRow", p);
  }, 30), f = Qn(() => {
    e.store.commit("setHoverRow", null);
  }, 30), d = (p) => {
    const h = window.getComputedStyle(p, null), y = Number.parseInt(h.paddingLeft, 10) || 0, g = Number.parseInt(h.paddingRight, 10) || 0, w = Number.parseInt(h.paddingTop, 10) || 0, S = Number.parseInt(h.paddingBottom, 10) || 0;
    return {
      left: y,
      right: g,
      top: w,
      bottom: S
    };
  };
  return {
    handleDoubleClick: a,
    handleClick: s,
    handleContextMenu: i,
    handleMouseEnter: u,
    handleMouseLeave: f,
    handleCellMouseEnter: (p, h, y) => {
      var g;
      const w = t, S = Yr(p), b = (g = w == null ? void 0 : w.vnode.el) == null ? void 0 : g.dataset.prefix;
      if (S) {
        const j = Fs({
          columns: e.store.states.columns.value
        }, S, b), le = w.hoverState = { cell: S, column: j, row: h };
        w == null || w.emit("cell-mouse-enter", le.row, le.column, le.cell, p);
      }
      if (!y)
        return;
      const O = p.target.querySelector(".cell");
      if (!(Yn(O, `${b}-tooltip`) && O.childNodes.length))
        return;
      const $ = document.createRange();
      $.setStart(O, 0), $.setEnd(O, O.childNodes.length);
      let C = $.getBoundingClientRect().width, T = $.getBoundingClientRect().height;
      C - Math.floor(C) < 1e-3 && (C = Math.floor(C)), T - Math.floor(T) < 1e-3 && (T = Math.floor(T));
      const { top: L, left: N, right: Y, bottom: ee } = d(O), J = N + Y, te = L + ee;
      (C + J > O.offsetWidth || T + te > O.offsetHeight || O.scrollWidth > O.offsetWidth) && FS(t == null ? void 0 : t.refs.tableWrapper, S, S.innerText || S.textContent, r, y);
    },
    handleCellMouseLeave: (p) => {
      if (!Yr(p))
        return;
      const y = t == null ? void 0 : t.hoverState;
      t == null || t.emit("cell-mouse-leave", y == null ? void 0 : y.row, y == null ? void 0 : y.column, y == null ? void 0 : y.cell, p);
    },
    tooltipContent: n,
    tooltipTrigger: o
  };
}
function s1(e) {
  const t = pe(Zt), n = ne("table");
  return {
    getRowStyle: (u, f) => {
      const d = t == null ? void 0 : t.props.rowStyle;
      return typeof d == "function" ? d.call(null, {
        row: u,
        rowIndex: f
      }) : d || null;
    },
    getRowClass: (u, f) => {
      const d = [n.e("row")];
      t != null && t.props.highlightCurrentRow && u === e.store.states.currentRow.value && d.push("current-row"), e.stripe && f % 2 === 1 && d.push(n.em("row", "striped"));
      const v = t == null ? void 0 : t.props.rowClassName;
      return typeof v == "string" ? d.push(v) : typeof v == "function" && d.push(v.call(null, {
        row: u,
        rowIndex: f
      })), d;
    },
    getCellStyle: (u, f, d, v) => {
      const m = t == null ? void 0 : t.props.cellStyle;
      let p = m ?? {};
      typeof m == "function" && (p = m.call(null, {
        rowIndex: u,
        columnIndex: f,
        row: d,
        column: v
      }));
      const h = ia(f, e == null ? void 0 : e.fixed, e.store);
      return so(h, "left"), so(h, "right"), Object.assign({}, p, h);
    },
    getCellClass: (u, f, d, v, m) => {
      const p = sa(n.b(), f, e == null ? void 0 : e.fixed, e.store, void 0, m), h = [v.id, v.align, v.className, ...p], y = t == null ? void 0 : t.props.cellClassName;
      return typeof y == "string" ? h.push(y) : typeof y == "function" && h.push(y.call(null, {
        rowIndex: u,
        columnIndex: f,
        row: d,
        column: v
      })), h.push(n.e("cell")), h.filter((g) => !!g).join(" ");
    },
    getSpan: (u, f, d, v) => {
      let m = 1, p = 1;
      const h = t == null ? void 0 : t.props.spanMethod;
      if (typeof h == "function") {
        const y = h({
          row: u,
          column: f,
          rowIndex: d,
          columnIndex: v
        });
        Array.isArray(y) ? (m = y[0], p = y[1]) : typeof y == "object" && (m = y.rowspan, p = y.colspan);
      }
      return { rowspan: m, colspan: p };
    },
    getColspanRealWidth: (u, f, d) => {
      if (f < 1)
        return u[d].realWidth;
      const v = u.map(({ realWidth: m, width: p }) => m || p).slice(d, d + f);
      return Number(v.reduce((m, p) => Number(m) + Number(p), -1));
    }
  };
}
function i1(e) {
  const t = pe(Zt), n = ne("table"), {
    handleDoubleClick: o,
    handleClick: r,
    handleContextMenu: l,
    handleMouseEnter: a,
    handleMouseLeave: s,
    handleCellMouseEnter: i,
    handleCellMouseLeave: u,
    tooltipContent: f,
    tooltipTrigger: d
  } = a1(e), {
    getRowStyle: v,
    getRowClass: m,
    getCellStyle: p,
    getCellClass: h,
    getSpan: y,
    getColspanRealWidth: g
  } = s1(e), w = E(() => e.store.states.columns.value.findIndex(({ type: C }) => C === "default")), S = (C, T) => {
    const A = t.props.rowKey;
    return A ? Je(C, A) : T;
  }, b = (C, T, A, F = !1) => {
    const { tooltipEffect: L, tooltipOptions: N, store: Y } = e, { indent: ee, columns: J } = Y.states, te = m(C, T);
    let j = !0;
    return A && (te.push(n.em("row", `level-${A.level}`)), j = A.display), re("tr", {
      style: [j ? null : {
        display: "none"
      }, v(C, T)],
      class: te,
      key: S(C, T),
      onDblclick: (x) => o(x, C),
      onClick: (x) => r(x, C),
      onContextmenu: (x) => l(x, C),
      onMouseenter: () => a(T),
      onMouseleave: s
    }, J.value.map((x, U) => {
      const { rowspan: ie, colspan: de } = y(C, x, T, U);
      if (!ie || !de)
        return null;
      const we = Object.assign({}, x);
      we.realWidth = g(J.value, de, U);
      const Ce = {
        store: e.store,
        _self: e.context || t,
        column: we,
        row: C,
        $index: T,
        cellIndex: U,
        expanded: F
      };
      U === w.value && A && (Ce.treeNode = {
        indent: A.level * ee.value,
        level: A.level
      }, typeof A.expanded == "boolean" && (Ce.treeNode.expanded = A.expanded, "loading" in A && (Ce.treeNode.loading = A.loading), "noLazyChildren" in A && (Ce.treeNode.noLazyChildren = A.noLazyChildren)));
      const Oe = `${T},${U}`, $e = we.columnKey || we.rawColumnKey || "", Le = O(U, x, Ce), Se = x.showOverflowTooltip && _i({
        effect: L
      }, N, x.showOverflowTooltip);
      return re("td", {
        style: p(T, U, C, x),
        class: h(T, U, C, x, de - 1),
        key: `${$e}${Oe}`,
        rowspan: ie,
        colspan: de,
        onMouseenter: (Ve) => i(Ve, C, Se),
        onMouseleave: u
      }, [Le]);
    }));
  }, O = (C, T, A) => T.renderCell(A);
  return {
    wrappedRowRender: (C, T) => {
      const A = e.store, { isRowExpanded: F, assertRowKey: L } = A, { treeData: N, lazyTreeNodeMap: Y, childrenColumnName: ee, rowKey: J } = A.states, te = A.states.columns.value;
      if (te.some(({ type: le }) => le === "expand")) {
        const le = F(C), x = b(C, T, void 0, le), U = t.renderExpanded;
        return le ? U ? [
          [
            x,
            re("tr", {
              key: `expanded-row__${x.key}`
            }, [
              re("td", {
                colspan: te.length,
                class: `${n.e("cell")} ${n.e("expanded-cell")}`
              }, [U({ row: C, $index: T, store: A, expanded: le })])
            ])
          ]
        ] : (console.error("[Element Error]renderExpanded is required."), x) : [[x]];
      } else if (Object.keys(N.value).length) {
        L();
        const le = Je(C, J.value);
        let x = N.value[le], U = null;
        x && (U = {
          expanded: x.expanded,
          level: x.level,
          display: !0
        }, typeof x.lazy == "boolean" && (typeof x.loaded == "boolean" && x.loaded && (U.noLazyChildren = !(x.children && x.children.length)), U.loading = x.loading));
        const ie = [b(C, T, U)];
        if (x) {
          let de = 0;
          const we = (Oe, $e) => {
            Oe && Oe.length && $e && Oe.forEach((Le) => {
              const Se = {
                display: $e.display && $e.expanded,
                level: $e.level + 1,
                expanded: !1,
                noLazyChildren: !1,
                loading: !1
              }, Ve = Je(Le, J.value);
              if (Ve == null)
                throw new Error("For nested data item, row-key is required.");
              if (x = { ...N.value[Ve] }, x && (Se.expanded = x.expanded, x.level = x.level || Se.level, x.display = !!(x.expanded && Se.display), typeof x.lazy == "boolean" && (typeof x.loaded == "boolean" && x.loaded && (Se.noLazyChildren = !(x.children && x.children.length)), Se.loading = x.loading)), de++, ie.push(b(Le, T + de, Se)), x) {
                const V = Y.value[Ve] || Le[ee.value];
                we(V, x);
              }
            });
          };
          x.display = !0;
          const Ce = Y.value[le] || C[ee.value];
          we(Ce, x);
        }
        return ie;
      } else
        return b(C, T, void 0);
    },
    tooltipContent: f,
    tooltipTrigger: d
  };
}
const u1 = {
  store: {
    required: !0,
    type: Object
  },
  stripe: Boolean,
  tooltipEffect: String,
  tooltipOptions: {
    type: Object
  },
  context: {
    default: () => ({}),
    type: Object
  },
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  fixed: {
    type: String,
    default: ""
  },
  highlight: Boolean
};
var c1 = z({
  name: "ElTableBody",
  props: u1,
  setup(e) {
    const t = Te(), n = pe(Zt), o = ne("table"), { wrappedRowRender: r, tooltipContent: l, tooltipTrigger: a } = i1(e), { onColumnsChange: s, onScrollableChange: i } = sc(n);
    return X(e.store.states.hoverRow, (u, f) => {
      !e.store.states.isComplex.value || !_e || ig(() => {
        const d = t == null ? void 0 : t.vnode.el, v = Array.from((d == null ? void 0 : d.children) || []).filter((h) => h == null ? void 0 : h.classList.contains(`${o.e("row")}`)), m = v[f], p = v[u];
        m && wn(m, "hover-row"), p && Po(p, "hover-row");
      });
    }), br(() => {
      var u;
      (u = nn) == null || u();
    }), {
      ns: o,
      onColumnsChange: s,
      onScrollableChange: i,
      wrappedRowRender: r,
      tooltipContent: l,
      tooltipTrigger: a
    };
  },
  render() {
    const { wrappedRowRender: e, store: t } = this, n = t.states.data.value || [];
    return re("tbody", { tabIndex: -1 }, [
      n.reduce((o, r) => o.concat(e(r, o.length)), [])
    ]);
  }
});
function d1() {
  const e = pe(Zt), t = e == null ? void 0 : e.store, n = E(() => t.states.fixedLeafColumnsLength.value), o = E(() => t.states.rightFixedColumns.value.length), r = E(() => t.states.columns.value.length), l = E(() => t.states.fixedColumns.value.length), a = E(() => t.states.rightFixedColumns.value.length);
  return {
    leftFixedLeafCount: n,
    rightFixedLeafCount: o,
    columnsCount: r,
    leftFixedCount: l,
    rightFixedCount: a,
    columns: t.states.columns
  };
}
function f1(e) {
  const { columns: t } = d1(), n = ne("table");
  return {
    getCellClasses: (l, a) => {
      const s = l[a], i = [
        n.e("cell"),
        s.id,
        s.align,
        s.labelClassName,
        ...sa(n.b(), a, s.fixed, e.store)
      ];
      return s.className && i.push(s.className), s.children || i.push(n.is("leaf")), i;
    },
    getCellStyles: (l, a) => {
      const s = ia(a, l.fixed, e.store);
      return so(s, "left"), so(s, "right"), s;
    },
    columns: t
  };
}
var p1 = z({
  name: "ElTableFooter",
  props: {
    fixed: {
      type: String,
      default: ""
    },
    store: {
      required: !0,
      type: Object
    },
    summaryMethod: Function,
    sumText: String,
    border: Boolean,
    defaultSort: {
      type: Object,
      default: () => ({
        prop: "",
        order: ""
      })
    }
  },
  setup(e) {
    const { getCellClasses: t, getCellStyles: n, columns: o } = f1(e);
    return {
      ns: ne("table"),
      getCellClasses: t,
      getCellStyles: n,
      columns: o
    };
  },
  render() {
    const { columns: e, getCellStyles: t, getCellClasses: n, summaryMethod: o, sumText: r } = this, l = this.store.states.data.value;
    let a = [];
    return o ? a = o({
      columns: e,
      data: l
    }) : e.forEach((s, i) => {
      if (i === 0) {
        a[i] = r;
        return;
      }
      const u = l.map((m) => Number(m[s.property])), f = [];
      let d = !0;
      u.forEach((m) => {
        if (!Number.isNaN(+m)) {
          d = !1;
          const p = `${m}`.split(".")[1];
          f.push(p ? p.length : 0);
        }
      });
      const v = Math.max.apply(null, f);
      d ? a[i] = "" : a[i] = u.reduce((m, p) => {
        const h = Number(p);
        return Number.isNaN(+h) ? m : Number.parseFloat((m + p).toFixed(Math.min(v, 20)));
      }, 0);
    }), re(re("tfoot", [
      re("tr", {}, [
        ...e.map((s, i) => re("td", {
          key: i,
          colspan: s.colSpan,
          rowspan: s.rowSpan,
          class: n(e, i),
          style: t(s, i)
        }, [
          re("div", {
            class: ["cell", s.labelClassName]
          }, [a[i]])
        ]))
      ])
    ]));
  }
});
function v1(e) {
  return {
    setCurrentRow: (f) => {
      e.commit("setCurrentRow", f);
    },
    getSelectionRows: () => e.getSelectionRows(),
    toggleRowSelection: (f, d) => {
      e.toggleRowSelection(f, d, !1), e.updateAllSelected();
    },
    clearSelection: () => {
      e.clearSelection();
    },
    clearFilter: (f) => {
      e.clearFilter(f);
    },
    toggleAllSelection: () => {
      e.commit("toggleAllSelection");
    },
    toggleRowExpansion: (f, d) => {
      e.toggleRowExpansionAdapter(f, d);
    },
    clearSort: () => {
      e.clearSort();
    },
    sort: (f, d) => {
      e.commit("sort", { prop: f, order: d });
    }
  };
}
function h1(e, t, n, o) {
  const r = k(!1), l = k(null), a = k(!1), s = (x) => {
    a.value = x;
  }, i = k({
    width: null,
    height: null,
    headerHeight: null
  }), u = k(!1), f = {
    display: "inline-block",
    verticalAlign: "middle"
  }, d = k(), v = k(0), m = k(0), p = k(0), h = k(0), y = k(0);
  Ln(() => {
    t.setHeight(e.height);
  }), Ln(() => {
    t.setMaxHeight(e.maxHeight);
  }), X(() => [e.currentRowKey, n.states.rowKey], ([x, U]) => {
    !c(U) || !c(x) || n.setCurrentRowKey(`${x}`);
  }, {
    immediate: !0
  }), X(() => e.data, (x) => {
    o.store.commit("setData", x);
  }, {
    immediate: !0,
    deep: !0
  }), Ln(() => {
    e.expandRowKeys && n.setExpandRowKeysAdapter(e.expandRowKeys);
  });
  const g = () => {
    o.store.commit("setHoverRow", null), o.hoverState && (o.hoverState = null);
  }, w = (x, U) => {
    const { pixelX: ie, pixelY: de } = U;
    Math.abs(ie) >= Math.abs(de) && (o.refs.bodyWrapper.scrollLeft += U.pixelX / 5);
  }, S = E(() => e.height || e.maxHeight || n.states.fixedColumns.value.length > 0 || n.states.rightFixedColumns.value.length > 0), b = E(() => ({
    width: t.bodyWidth.value ? `${t.bodyWidth.value}px` : ""
  })), O = () => {
    S.value && t.updateElsHeight(), t.updateColumnsWidth(), requestAnimationFrame(A);
  };
  Re(async () => {
    await me(), n.updateColumns(), F(), requestAnimationFrame(O);
    const x = o.vnode.el, U = o.refs.headerWrapper;
    e.flexible && x && x.parentElement && (x.parentElement.style.minWidth = "0"), i.value = {
      width: d.value = x.offsetWidth,
      height: x.offsetHeight,
      headerHeight: e.showHeader && U ? U.offsetHeight : null
    }, n.states.columns.value.forEach((ie) => {
      ie.filteredValue && ie.filteredValue.length && o.store.commit("filterChange", {
        column: ie,
        values: ie.filteredValue,
        silent: !0
      });
    }), o.$ready = !0;
  });
  const $ = (x, U) => {
    if (!x)
      return;
    const ie = Array.from(x.classList).filter((de) => !de.startsWith("is-scrolling-"));
    ie.push(t.scrollX.value ? U : "is-scrolling-none"), x.className = ie.join(" ");
  }, C = (x) => {
    const { tableWrapper: U } = o.refs;
    $(U, x);
  }, T = (x) => {
    const { tableWrapper: U } = o.refs;
    return !!(U && U.classList.contains(x));
  }, A = function() {
    if (!o.refs.scrollBarRef)
      return;
    if (!t.scrollX.value) {
      const $e = "is-scrolling-none";
      T($e) || C($e);
      return;
    }
    const x = o.refs.scrollBarRef.wrapRef;
    if (!x)
      return;
    const { scrollLeft: U, offsetWidth: ie, scrollWidth: de } = x, { headerWrapper: we, footerWrapper: Ce } = o.refs;
    we && (we.scrollLeft = U), Ce && (Ce.scrollLeft = U);
    const Oe = de - ie - 1;
    U >= Oe ? C("is-scrolling-right") : C(U === 0 ? "is-scrolling-left" : "is-scrolling-middle");
  }, F = () => {
    o.refs.scrollBarRef && (o.refs.scrollBarRef.wrapRef && qt(o.refs.scrollBarRef.wrapRef, "scroll", A, {
      passive: !0
    }), e.fit ? Jn(o.vnode.el, L) : qt(window, "resize", L), Jn(o.refs.bodyWrapper, () => {
      var x, U;
      L(), (U = (x = o.refs) == null ? void 0 : x.scrollBarRef) == null || U.update();
    }));
  }, L = () => {
    var x, U, ie, de;
    const we = o.vnode.el;
    if (!o.$ready || !we)
      return;
    let Ce = !1;
    const {
      width: Oe,
      height: $e,
      headerHeight: Le
    } = i.value, Se = d.value = we.offsetWidth;
    Oe !== Se && (Ce = !0);
    const Ve = we.offsetHeight;
    (e.height || S.value) && $e !== Ve && (Ce = !0);
    const V = e.tableLayout === "fixed" ? o.refs.headerWrapper : (x = o.refs.tableHeaderRef) == null ? void 0 : x.$el;
    e.showHeader && (V == null ? void 0 : V.offsetHeight) !== Le && (Ce = !0), v.value = ((U = o.refs.tableWrapper) == null ? void 0 : U.scrollHeight) || 0, p.value = (V == null ? void 0 : V.scrollHeight) || 0, h.value = ((ie = o.refs.footerWrapper) == null ? void 0 : ie.offsetHeight) || 0, y.value = ((de = o.refs.appendWrapper) == null ? void 0 : de.offsetHeight) || 0, m.value = v.value - p.value - h.value - y.value, Ce && (i.value = {
      width: Se,
      height: Ve,
      headerHeight: e.showHeader && (V == null ? void 0 : V.offsetHeight) || 0
    }, O());
  }, N = sn(), Y = E(() => {
    const { bodyWidth: x, scrollY: U, gutterWidth: ie } = t;
    return x.value ? `${x.value - (U.value ? ie : 0)}px` : "";
  }), ee = E(() => e.maxHeight ? "fixed" : e.tableLayout), J = E(() => {
    if (e.data && e.data.length)
      return null;
    let x = "100%";
    e.height && m.value && (x = `${m.value}px`);
    const U = d.value;
    return {
      width: U ? `${U}px` : "",
      height: x
    };
  }), te = E(() => e.height ? {
    height: Number.isNaN(Number(e.height)) ? e.height : `${e.height}px`
  } : e.maxHeight ? {
    maxHeight: Number.isNaN(Number(e.maxHeight)) ? e.maxHeight : `${e.maxHeight}px`
  } : {}), j = E(() => e.height ? {
    height: "100%"
  } : e.maxHeight ? Number.isNaN(Number(e.maxHeight)) ? {
    maxHeight: `calc(${e.maxHeight} - ${p.value + h.value}px)`
  } : {
    maxHeight: `${e.maxHeight - p.value - h.value}px`
  } : {});
  return {
    isHidden: r,
    renderExpanded: l,
    setDragVisible: s,
    isGroup: u,
    handleMouseLeave: g,
    handleHeaderFooterMousewheel: w,
    tableSize: N,
    emptyBlockStyle: J,
    handleFixedMousewheel: (x, U) => {
      const ie = o.refs.bodyWrapper;
      if (Math.abs(U.spinY) > 0) {
        const de = ie.scrollTop;
        U.pixelY < 0 && de !== 0 && x.preventDefault(), U.pixelY > 0 && ie.scrollHeight - ie.clientHeight > de && x.preventDefault(), ie.scrollTop += Math.ceil(U.pixelY / 5);
      } else
        ie.scrollLeft += Math.ceil(U.pixelX / 5);
    },
    resizeProxyVisible: a,
    bodyWidth: Y,
    resizeState: i,
    doLayout: O,
    tableBodyStyles: b,
    tableLayout: ee,
    scrollbarViewStyle: f,
    tableInnerStyle: te,
    scrollbarStyle: j
  };
}
function g1(e) {
  const t = k(), n = () => {
    const r = e.vnode.el.querySelector(".hidden-columns"), l = { childList: !0, subtree: !0 }, a = e.store.states.updateOrderFns;
    t.value = new MutationObserver(() => {
      a.forEach((s) => s());
    }), t.value.observe(r, l);
  };
  Re(() => {
    n();
  }), br(() => {
    var o;
    (o = t.value) == null || o.disconnect();
  });
}
var m1 = {
  data: {
    type: Array,
    default: () => []
  },
  size: Wn,
  width: [String, Number],
  height: [String, Number],
  maxHeight: [String, Number],
  fit: {
    type: Boolean,
    default: !0
  },
  stripe: Boolean,
  border: Boolean,
  rowKey: [String, Function],
  showHeader: {
    type: Boolean,
    default: !0
  },
  showSummary: Boolean,
  sumText: String,
  summaryMethod: Function,
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  cellClassName: [String, Function],
  cellStyle: [Object, Function],
  headerRowClassName: [String, Function],
  headerRowStyle: [Object, Function],
  headerCellClassName: [String, Function],
  headerCellStyle: [Object, Function],
  highlightCurrentRow: Boolean,
  currentRowKey: [String, Number],
  emptyText: String,
  expandRowKeys: Array,
  defaultExpandAll: Boolean,
  defaultSort: Object,
  tooltipEffect: String,
  tooltipOptions: Object,
  spanMethod: Function,
  selectOnIndeterminate: {
    type: Boolean,
    default: !0
  },
  indent: {
    type: Number,
    default: 16
  },
  treeProps: {
    type: Object,
    default: () => ({
      hasChildren: "hasChildren",
      children: "children"
    })
  },
  lazy: Boolean,
  load: Function,
  style: {
    type: Object,
    default: () => ({})
  },
  className: {
    type: String,
    default: ""
  },
  tableLayout: {
    type: String,
    default: "fixed"
  },
  scrollbarAlwaysOn: {
    type: Boolean,
    default: !1
  },
  flexible: Boolean,
  showOverflowTooltip: [Boolean, Object]
};
function uc(e) {
  const t = e.tableLayout === "auto";
  let n = e.columns || [];
  t && n.every((r) => r.width === void 0) && (n = []);
  const o = (r) => {
    const l = {
      key: `${e.tableLayout}_${r.id}`,
      style: {},
      name: void 0
    };
    return t ? l.style = {
      width: `${r.width}px`
    } : l.name = r.id, l;
  };
  return re("colgroup", {}, n.map((r) => re("col", o(r))));
}
uc.props = ["columns", "tableLayout"];
const b1 = () => {
  const e = k(), t = (l, a) => {
    const s = e.value;
    s && s.scrollTo(l, a);
  }, n = (l, a) => {
    const s = e.value;
    s && Ae(a) && ["Top", "Left"].includes(l) && s[`setScroll${l}`](a);
  };
  return {
    scrollBarRef: e,
    scrollTo: t,
    setScrollTop: (l) => n("Top", l),
    setScrollLeft: (l) => n("Left", l)
  };
};
let y1 = 1;
const w1 = z({
  name: "ElTable",
  directives: {
    Mousewheel: Jy
  },
  components: {
    TableHeader: l1,
    TableBody: c1,
    TableFooter: p1,
    ElScrollbar: Ql,
    hColgroup: uc
  },
  props: m1,
  emits: [
    "select",
    "select-all",
    "selection-change",
    "cell-mouse-enter",
    "cell-mouse-leave",
    "cell-contextmenu",
    "cell-click",
    "cell-dblclick",
    "row-click",
    "row-contextmenu",
    "row-dblclick",
    "header-click",
    "header-contextmenu",
    "sort-change",
    "filter-change",
    "current-change",
    "header-dragend",
    "expand-change"
  ],
  setup(e) {
    const { t } = ct(), n = ne("table"), o = Te();
    Ge(Zt, o);
    const r = jS(o, e);
    o.store = r;
    const l = new qS({
      store: o.store,
      table: o,
      fit: e.fit,
      showHeader: e.showHeader
    });
    o.layout = l;
    const a = E(() => (r.states.data.value || []).length === 0), {
      setCurrentRow: s,
      getSelectionRows: i,
      toggleRowSelection: u,
      clearSelection: f,
      clearFilter: d,
      toggleAllSelection: v,
      toggleRowExpansion: m,
      clearSort: p,
      sort: h
    } = v1(r), {
      isHidden: y,
      renderExpanded: g,
      setDragVisible: w,
      isGroup: S,
      handleMouseLeave: b,
      handleHeaderFooterMousewheel: O,
      tableSize: $,
      emptyBlockStyle: C,
      handleFixedMousewheel: T,
      resizeProxyVisible: A,
      bodyWidth: F,
      resizeState: L,
      doLayout: N,
      tableBodyStyles: Y,
      tableLayout: ee,
      scrollbarViewStyle: J,
      tableInnerStyle: te,
      scrollbarStyle: j
    } = h1(e, l, r, o), { scrollBarRef: le, scrollTo: x, setScrollLeft: U, setScrollTop: ie } = b1(), de = Qn(N, 50), we = `${n.namespace.value}-table_${y1++}`;
    o.tableId = we, o.state = {
      isGroup: S,
      resizeState: L,
      doLayout: N,
      debouncedUpdateLayout: de
    };
    const Ce = E(() => e.sumText || t("el.table.sumText")), Oe = E(() => e.emptyText || t("el.table.emptyText"));
    return g1(o), {
      ns: n,
      layout: l,
      store: r,
      handleHeaderFooterMousewheel: O,
      handleMouseLeave: b,
      tableId: we,
      tableSize: $,
      isHidden: y,
      isEmpty: a,
      renderExpanded: g,
      resizeProxyVisible: A,
      resizeState: L,
      isGroup: S,
      bodyWidth: F,
      tableBodyStyles: Y,
      emptyBlockStyle: C,
      debouncedUpdateLayout: de,
      handleFixedMousewheel: T,
      setCurrentRow: s,
      getSelectionRows: i,
      toggleRowSelection: u,
      clearSelection: f,
      clearFilter: d,
      toggleAllSelection: v,
      toggleRowExpansion: m,
      clearSort: p,
      doLayout: N,
      sort: h,
      t,
      setDragVisible: w,
      context: o,
      computedSumText: Ce,
      computedEmptyText: Oe,
      tableLayout: ee,
      scrollbarViewStyle: J,
      tableInnerStyle: te,
      scrollbarStyle: j,
      scrollBarRef: le,
      scrollTo: x,
      setScrollLeft: U,
      setScrollTop: ie
    };
  }
}), C1 = ["data-prefix"], S1 = {
  ref: "hiddenColumns",
  class: "hidden-columns"
};
function E1(e, t, n, o, r, l) {
  const a = Me("hColgroup"), s = Me("table-header"), i = Me("table-body"), u = Me("table-footer"), f = Me("el-scrollbar"), d = Ol("mousewheel");
  return P(), R("div", {
    ref: "tableWrapper",
    class: I([
      {
        [e.ns.m("fit")]: e.fit,
        [e.ns.m("striped")]: e.stripe,
        [e.ns.m("border")]: e.border || e.isGroup,
        [e.ns.m("hidden")]: e.isHidden,
        [e.ns.m("group")]: e.isGroup,
        [e.ns.m("fluid-height")]: e.maxHeight,
        [e.ns.m("scrollable-x")]: e.layout.scrollX.value,
        [e.ns.m("scrollable-y")]: e.layout.scrollY.value,
        [e.ns.m("enable-row-hover")]: !e.store.states.isComplex.value,
        [e.ns.m("enable-row-transition")]: (e.store.states.data.value || []).length !== 0 && (e.store.states.data.value || []).length < 100,
        "has-footer": e.showSummary
      },
      e.ns.m(e.tableSize),
      e.className,
      e.ns.b(),
      e.ns.m(`layout-${e.tableLayout}`)
    ]),
    style: ke(e.style),
    "data-prefix": e.ns.namespace.value,
    onMouseleave: t[0] || (t[0] = (...v) => e.handleMouseLeave && e.handleMouseLeave(...v))
  }, [
    B("div", {
      class: I(e.ns.e("inner-wrapper")),
      style: ke(e.tableInnerStyle)
    }, [
      B("div", S1, [
        Z(e.$slots, "default")
      ], 512),
      e.showHeader && e.tableLayout === "fixed" ? Fe((P(), R("div", {
        key: 0,
        ref: "headerWrapper",
        class: I(e.ns.e("header-wrapper"))
      }, [
        B("table", {
          ref: "tableHeader",
          class: I(e.ns.e("header")),
          style: ke(e.tableBodyStyles),
          border: "0",
          cellpadding: "0",
          cellspacing: "0"
        }, [
          G(a, {
            columns: e.store.states.columns.value,
            "table-layout": e.tableLayout
          }, null, 8, ["columns", "table-layout"]),
          G(s, {
            ref: "tableHeaderRef",
            border: e.border,
            "default-sort": e.defaultSort,
            store: e.store,
            onSetDragVisible: e.setDragVisible
          }, null, 8, ["border", "default-sort", "store", "onSetDragVisible"])
        ], 6)
      ], 2)), [
        [d, e.handleHeaderFooterMousewheel]
      ]) : W("v-if", !0),
      B("div", {
        ref: "bodyWrapper",
        class: I(e.ns.e("body-wrapper"))
      }, [
        G(f, {
          ref: "scrollBarRef",
          "view-style": e.scrollbarViewStyle,
          "wrap-style": e.scrollbarStyle,
          always: e.scrollbarAlwaysOn
        }, {
          default: D(() => [
            B("table", {
              ref: "tableBody",
              class: I(e.ns.e("body")),
              cellspacing: "0",
              cellpadding: "0",
              border: "0",
              style: ke({
                width: e.bodyWidth,
                tableLayout: e.tableLayout
              })
            }, [
              G(a, {
                columns: e.store.states.columns.value,
                "table-layout": e.tableLayout
              }, null, 8, ["columns", "table-layout"]),
              e.showHeader && e.tableLayout === "auto" ? (P(), K(s, {
                key: 0,
                ref: "tableHeaderRef",
                class: I(e.ns.e("body-header")),
                border: e.border,
                "default-sort": e.defaultSort,
                store: e.store,
                onSetDragVisible: e.setDragVisible
              }, null, 8, ["class", "border", "default-sort", "store", "onSetDragVisible"])) : W("v-if", !0),
              G(i, {
                context: e.context,
                highlight: e.highlightCurrentRow,
                "row-class-name": e.rowClassName,
                "tooltip-effect": e.tooltipEffect,
                "tooltip-options": e.tooltipOptions,
                "row-style": e.rowStyle,
                store: e.store,
                stripe: e.stripe
              }, null, 8, ["context", "highlight", "row-class-name", "tooltip-effect", "tooltip-options", "row-style", "store", "stripe"]),
              e.showSummary && e.tableLayout === "auto" ? (P(), K(u, {
                key: 1,
                class: I(e.ns.e("body-footer")),
                border: e.border,
                "default-sort": e.defaultSort,
                store: e.store,
                "sum-text": e.computedSumText,
                "summary-method": e.summaryMethod
              }, null, 8, ["class", "border", "default-sort", "store", "sum-text", "summary-method"])) : W("v-if", !0)
            ], 6),
            e.isEmpty ? (P(), R("div", {
              key: 0,
              ref: "emptyBlock",
              style: ke(e.emptyBlockStyle),
              class: I(e.ns.e("empty-block"))
            }, [
              B("span", {
                class: I(e.ns.e("empty-text"))
              }, [
                Z(e.$slots, "empty", {}, () => [
                  Wt(ge(e.computedEmptyText), 1)
                ])
              ], 2)
            ], 6)) : W("v-if", !0),
            e.$slots.append ? (P(), R("div", {
              key: 1,
              ref: "appendWrapper",
              class: I(e.ns.e("append-wrapper"))
            }, [
              Z(e.$slots, "append")
            ], 2)) : W("v-if", !0)
          ]),
          _: 3
        }, 8, ["view-style", "wrap-style", "always"])
      ], 2),
      e.showSummary && e.tableLayout === "fixed" ? Fe((P(), R("div", {
        key: 1,
        ref: "footerWrapper",
        class: I(e.ns.e("footer-wrapper"))
      }, [
        B("table", {
          class: I(e.ns.e("footer")),
          cellspacing: "0",
          cellpadding: "0",
          border: "0",
          style: ke(e.tableBodyStyles)
        }, [
          G(a, {
            columns: e.store.states.columns.value,
            "table-layout": e.tableLayout
          }, null, 8, ["columns", "table-layout"]),
          G(u, {
            border: e.border,
            "default-sort": e.defaultSort,
            store: e.store,
            "sum-text": e.computedSumText,
            "summary-method": e.summaryMethod
          }, null, 8, ["border", "default-sort", "store", "sum-text", "summary-method"])
        ], 6)
      ], 2)), [
        [Rt, !e.isEmpty],
        [d, e.handleHeaderFooterMousewheel]
      ]) : W("v-if", !0),
      e.border || e.isGroup ? (P(), R("div", {
        key: 2,
        class: I(e.ns.e("border-left-patch"))
      }, null, 2)) : W("v-if", !0)
    ], 6),
    Fe(B("div", {
      ref: "resizeProxy",
      class: I(e.ns.e("column-resize-proxy"))
    }, null, 2), [
      [Rt, e.resizeProxyVisible]
    ])
  ], 46, C1);
}
var T1 = /* @__PURE__ */ ue(w1, [["render", E1], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/table.vue"]]);
const O1 = {
  selection: "table-column--selection",
  expand: "table__expand-column"
}, $1 = {
  default: {
    order: ""
  },
  selection: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  },
  expand: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  },
  index: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  }
}, k1 = (e) => O1[e] || "", P1 = {
  selection: {
    renderHeader({ store: e, column: t }) {
      function n() {
        return e.states.data.value && e.states.data.value.length === 0;
      }
      return re(ao, {
        disabled: n(),
        size: e.states.tableSize.value,
        indeterminate: e.states.selection.value.length > 0 && !e.states.isAllSelected.value,
        "onUpdate:modelValue": e.toggleAllSelection,
        modelValue: e.states.isAllSelected.value,
        ariaLabel: t.label
      });
    },
    renderCell({
      row: e,
      column: t,
      store: n,
      $index: o
    }) {
      return re(ao, {
        disabled: t.selectable ? !t.selectable.call(null, e, o) : !1,
        size: n.states.tableSize.value,
        onChange: () => {
          n.commit("rowSelectedChanged", e);
        },
        onClick: (r) => r.stopPropagation(),
        modelValue: n.isSelected(e),
        ariaLabel: t.label
      });
    },
    sortable: !1,
    resizable: !1
  },
  index: {
    renderHeader({ column: e }) {
      return e.label || "#";
    },
    renderCell({
      column: e,
      $index: t
    }) {
      let n = t + 1;
      const o = e.index;
      return typeof o == "number" ? n = t + o : typeof o == "function" && (n = o(t)), re("div", {}, [n]);
    },
    sortable: !1
  },
  expand: {
    renderHeader({ column: e }) {
      return e.label || "";
    },
    renderCell({
      row: e,
      store: t,
      expanded: n
    }) {
      const { ns: o } = t, r = [o.e("expand-icon")];
      return n && r.push(o.em("expand-icon", "expanded")), re("div", {
        class: r,
        onClick: function(a) {
          a.stopPropagation(), t.toggleRowExpansion(e);
        }
      }, {
        default: () => [
          re(Be, null, {
            default: () => [re(kl)]
          })
        ]
      });
    },
    sortable: !1,
    resizable: !1
  }
};
function _1({
  row: e,
  column: t,
  $index: n
}) {
  var o;
  const r = t.property, l = r && Qh(e, r).value;
  return t && t.formatter ? t.formatter(e, t, l, n) : ((o = l == null ? void 0 : l.toString) == null ? void 0 : o.call(l)) || "";
}
function A1({
  row: e,
  treeNode: t,
  store: n
}, o = !1) {
  const { ns: r } = n;
  if (!t)
    return o ? [
      re("span", {
        class: r.e("placeholder")
      })
    ] : null;
  const l = [], a = function(s) {
    s.stopPropagation(), !t.loading && n.loadOrToggle(e);
  };
  if (t.indent && l.push(re("span", {
    class: r.e("indent"),
    style: { "padding-left": `${t.indent}px` }
  })), typeof t.expanded == "boolean" && !t.noLazyChildren) {
    const s = [
      r.e("expand-icon"),
      t.expanded ? r.em("expand-icon", "expanded") : ""
    ];
    let i = kl;
    t.loading && (i = yr), l.push(re("div", {
      class: s,
      onClick: a
    }, {
      default: () => [
        re(Be, { class: { [r.is("loading")]: t.loading } }, {
          default: () => [re(i)]
        })
      ]
    }));
  } else
    l.push(re("span", {
      class: r.e("placeholder")
    }));
  return l;
}
function Ds(e, t) {
  return e.reduce((n, o) => (n[o] = o, n), t);
}
function I1(e, t) {
  const n = Te();
  return {
    registerComplexWatchers: () => {
      const l = ["fixed"], a = {
        realWidth: "width",
        realMinWidth: "minWidth"
      }, s = Ds(l, a);
      Object.keys(s).forEach((i) => {
        const u = a[i];
        Bn(t, u) && X(() => t[u], (f) => {
          let d = f;
          u === "width" && i === "realWidth" && (d = aa(f)), u === "minWidth" && i === "realMinWidth" && (d = nc(f)), n.columnConfig.value[u] = d, n.columnConfig.value[i] = d;
          const v = u === "fixed";
          e.value.store.scheduleLayout(v);
        });
      });
    },
    registerNormalWatchers: () => {
      const l = [
        "label",
        "filters",
        "filterMultiple",
        "filteredValue",
        "sortable",
        "index",
        "formatter",
        "className",
        "labelClassName",
        "showOverflowTooltip"
      ], a = {
        property: "prop",
        align: "realAlign",
        headerAlign: "realHeaderAlign"
      }, s = Ds(l, a);
      Object.keys(s).forEach((i) => {
        const u = a[i];
        Bn(t, u) && X(() => t[u], (f) => {
          n.columnConfig.value[i] = f;
        });
      });
    }
  };
}
function x1(e, t, n) {
  const o = Te(), r = k(""), l = k(!1), a = k(), s = k(), i = ne("table");
  Ln(() => {
    a.value = e.align ? `is-${e.align}` : null, a.value;
  }), Ln(() => {
    s.value = e.headerAlign ? `is-${e.headerAlign}` : a.value, s.value;
  });
  const u = E(() => {
    let b = o.vnode.vParent || o.parent;
    for (; b && !b.tableId && !b.columnId; )
      b = b.vnode.vParent || b.parent;
    return b;
  }), f = E(() => {
    const { store: b } = o.parent;
    if (!b)
      return !1;
    const { treeData: O } = b.states, $ = O.value;
    return $ && Object.keys($).length > 0;
  }), d = k(aa(e.width)), v = k(nc(e.minWidth)), m = (b) => (d.value && (b.width = d.value), v.value && (b.minWidth = v.value), !d.value && v.value && (b.width = void 0), b.minWidth || (b.minWidth = 80), b.realWidth = Number(b.width === void 0 ? b.minWidth : b.width), b), p = (b) => {
    const O = b.type, $ = P1[O] || {};
    Object.keys($).forEach((T) => {
      const A = $[T];
      T !== "className" && A !== void 0 && (b[T] = A);
    });
    const C = k1(O);
    if (C) {
      const T = `${c(i.namespace)}-${C}`;
      b.className = b.className ? `${b.className} ${T}` : T;
    }
    return b;
  }, h = (b) => {
    Array.isArray(b) ? b.forEach(($) => O($)) : O(b);
    function O($) {
      var C;
      ((C = $ == null ? void 0 : $.type) == null ? void 0 : C.name) === "ElTableColumn" && ($.vParent = o);
    }
  };
  return {
    columnId: r,
    realAlign: a,
    isSubColumn: l,
    realHeaderAlign: s,
    columnOrTableParent: u,
    setColumnWidth: m,
    setColumnForcedProps: p,
    setColumnRenders: (b) => {
      e.renderHeader ? Ke("TableColumn", "Comparing to render-header, scoped-slot header is easier to use. We recommend users to use scoped-slot header.") : b.type !== "selection" && (b.renderHeader = ($) => {
        o.columnConfig.value.label;
        const C = t.header;
        return C ? C($) : b.label;
      });
      let O = b.renderCell;
      return b.type === "expand" ? (b.renderCell = ($) => re("div", {
        class: "cell"
      }, [O($)]), n.value.renderExpanded = ($) => t.default ? t.default($) : t.default) : (O = O || _1, b.renderCell = ($) => {
        let C = null;
        if (t.default) {
          const Y = t.default($);
          C = Y.some((ee) => ee.type !== Ys) ? Y : O($);
        } else
          C = O($);
        const { columns: T } = n.value.store.states, A = T.value.findIndex((Y) => Y.type === "default"), F = f.value && $.cellIndex === A, L = A1($, F), N = {
          class: "cell",
          style: {}
        };
        return b.showOverflowTooltip && (N.class = `${N.class} ${c(i.namespace)}-tooltip`, N.style = {
          width: `${($.column.realWidth || Number($.column.width)) - 1}px`
        }), h(C), re("div", N, [L, C]);
      }), b;
    },
    getPropsData: (...b) => b.reduce((O, $) => (Array.isArray($) && $.forEach((C) => {
      O[C] = e[C];
    }), O), {}),
    getColumnElIndex: (b, O) => Array.prototype.indexOf.call(b, O),
    updateColumnOrder: () => {
      n.value.store.commit("updateColumnOrder", o.columnConfig.value);
    }
  };
}
var N1 = {
  type: {
    type: String,
    default: "default"
  },
  label: String,
  className: String,
  labelClassName: String,
  property: String,
  prop: String,
  width: {
    type: [String, Number],
    default: ""
  },
  minWidth: {
    type: [String, Number],
    default: ""
  },
  renderHeader: Function,
  sortable: {
    type: [Boolean, String],
    default: !1
  },
  sortMethod: Function,
  sortBy: [String, Function, Array],
  resizable: {
    type: Boolean,
    default: !0
  },
  columnKey: String,
  align: String,
  headerAlign: String,
  showOverflowTooltip: {
    type: [Boolean, Object],
    default: void 0
  },
  fixed: [Boolean, String],
  formatter: Function,
  selectable: Function,
  reserveSelection: Boolean,
  filterMethod: Function,
  filteredValue: Array,
  filters: Array,
  filterPlacement: String,
  filterMultiple: {
    type: Boolean,
    default: !0
  },
  index: [Number, Function],
  sortOrders: {
    type: Array,
    default: () => ["ascending", "descending", null],
    validator: (e) => e.every((t) => ["ascending", "descending", null].includes(t))
  }
};
let R1 = 1;
var cc = z({
  name: "ElTableColumn",
  components: {
    ElCheckbox: ao
  },
  props: N1,
  setup(e, { slots: t }) {
    const n = Te(), o = k({}), r = E(() => {
      let S = n.parent;
      for (; S && !S.tableId; )
        S = S.parent;
      return S;
    }), { registerNormalWatchers: l, registerComplexWatchers: a } = I1(r, e), {
      columnId: s,
      isSubColumn: i,
      realHeaderAlign: u,
      columnOrTableParent: f,
      setColumnWidth: d,
      setColumnForcedProps: v,
      setColumnRenders: m,
      getPropsData: p,
      getColumnElIndex: h,
      realAlign: y,
      updateColumnOrder: g
    } = x1(e, t, r), w = f.value;
    s.value = `${w.tableId || w.columnId}_column_${R1++}`, Tl(() => {
      i.value = r.value !== w;
      const S = e.type || "default", b = e.sortable === "" ? !0 : e.sortable, O = Zn(e.showOverflowTooltip) ? w.props.showOverflowTooltip : e.showOverflowTooltip, $ = {
        ...$1[S],
        id: s.value,
        type: S,
        property: e.prop || e.property,
        align: y,
        headerAlign: u,
        showOverflowTooltip: O,
        filterable: e.filters || e.filterMethod,
        filteredValue: [],
        filterPlacement: "",
        isColumnGroup: !1,
        isSubColumn: !1,
        filterOpened: !1,
        sortable: b,
        index: e.index,
        rawColumnKey: n.vnode.key
      };
      let L = p([
        "columnKey",
        "label",
        "className",
        "labelClassName",
        "type",
        "renderHeader",
        "formatter",
        "fixed",
        "resizable"
      ], ["sortMethod", "sortBy", "sortOrders"], ["selectable", "reserveSelection"], [
        "filterMethod",
        "filters",
        "filterMultiple",
        "filterOpened",
        "filteredValue",
        "filterPlacement"
      ]);
      L = RS($, L), L = MS(m, d, v)(L), o.value = L, l(), a();
    }), Re(() => {
      var S;
      const b = f.value, O = i.value ? b.vnode.el.children : (S = b.refs.hiddenColumns) == null ? void 0 : S.children, $ = () => h(O || [], n.vnode.el);
      o.value.getColumnIndex = $, $() > -1 && r.value.store.commit("insertColumn", o.value, i.value ? b.columnConfig.value : null, g);
    }), Bt(() => {
      r.value.store.commit("removeColumn", o.value, i.value ? w.columnConfig.value : null, g);
    }), n.columnId = s.value, n.columnConfig = o;
  },
  render() {
    var e, t, n;
    try {
      const o = (t = (e = this.$slots).default) == null ? void 0 : t.call(e, {
        row: {},
        column: {},
        $index: -1
      }), r = [];
      if (Array.isArray(o))
        for (const a of o)
          ((n = a.type) == null ? void 0 : n.name) === "ElTableColumn" || a.shapeFlag & 2 ? r.push(a) : a.type === ze && Array.isArray(a.children) && a.children.forEach((s) => {
            (s == null ? void 0 : s.patchFlag) !== 1024 && !Ue(s == null ? void 0 : s.children) && r.push(s);
          });
      return re("div", r);
    } catch {
      return re("div", []);
    }
  }
});
const L1 = tt(T1, {
  TableColumn: cc
}), dc = Ft(cc);
function M1(e) {
  let t;
  const n = k(!1), o = Tn({
    ...e,
    originalPosition: "",
    originalOverflow: "",
    visible: !1
  });
  function r(v) {
    o.text = v;
  }
  function l() {
    const v = o.parent, m = d.ns;
    if (!v.vLoadingAddClassList) {
      let p = v.getAttribute("loading-number");
      p = Number.parseInt(p) - 1, p ? v.setAttribute("loading-number", p.toString()) : (wn(v, m.bm("parent", "relative")), v.removeAttribute("loading-number")), wn(v, m.bm("parent", "hidden"));
    }
    a(), f.unmount();
  }
  function a() {
    var v, m;
    (m = (v = d.$el) == null ? void 0 : v.parentNode) == null || m.removeChild(d.$el);
  }
  function s() {
    var v;
    e.beforeClose && !e.beforeClose() || (n.value = !0, clearTimeout(t), t = window.setTimeout(i, 400), o.visible = !1, (v = e.closed) == null || v.call(e));
  }
  function i() {
    if (!n.value)
      return;
    const v = o.parent;
    n.value = !1, v.vLoadingAddClassList = void 0, l();
  }
  const u = z({
    name: "ElLoading",
    setup(v, { expose: m }) {
      const { ns: p, zIndex: h } = uu("loading");
      return m({
        ns: p,
        zIndex: h
      }), () => {
        const y = o.spinner || o.svg, g = re("svg", {
          class: "circular",
          viewBox: o.svgViewBox ? o.svgViewBox : "0 0 50 50",
          ...y ? { innerHTML: y } : {}
        }, [
          re("circle", {
            class: "path",
            cx: "25",
            cy: "25",
            r: "20",
            fill: "none"
          })
        ]), w = o.text ? re("p", { class: p.b("text") }, [o.text]) : void 0;
        return re(gn, {
          name: p.b("fade"),
          onAfterLeave: i
        }, {
          default: D(() => [
            Fe(G("div", {
              style: {
                backgroundColor: o.background || ""
              },
              class: [
                p.b("mask"),
                o.customClass,
                o.fullscreen ? "is-fullscreen" : ""
              ]
            }, [
              re("div", {
                class: p.b("spinner")
              }, [g, w])
            ]), [[Rt, o.visible]])
          ])
        });
      };
    }
  }), f = yc(u), d = f.mount(document.createElement("div"));
  return {
    ...zn(o),
    setText: r,
    removeElLoadingChild: a,
    close: s,
    handleAfterLeave: i,
    vm: d,
    get $el() {
      return d.$el;
    }
  };
}
let Jo;
const B1 = function(e = {}) {
  if (!_e)
    return;
  const t = F1(e);
  if (t.fullscreen && Jo)
    return Jo;
  const n = M1({
    ...t,
    closed: () => {
      var r;
      (r = t.closed) == null || r.call(t), t.fullscreen && (Jo = void 0);
    }
  });
  z1(t, t.parent, n), Vs(t, t.parent, n), t.parent.vLoadingAddClassList = () => Vs(t, t.parent, n);
  let o = t.parent.getAttribute("loading-number");
  return o ? o = `${Number.parseInt(o) + 1}` : o = "1", t.parent.setAttribute("loading-number", o), t.parent.appendChild(n.$el), me(() => n.visible.value = t.visible), t.fullscreen && (Jo = n), n;
}, F1 = (e) => {
  var t, n, o, r;
  let l;
  return Ue(e.target) ? l = (t = document.querySelector(e.target)) != null ? t : document.body : l = e.target || document.body, {
    parent: l === document.body || e.body ? document.body : l,
    background: e.background || "",
    svg: e.svg || "",
    svgViewBox: e.svgViewBox || "",
    spinner: e.spinner || !1,
    text: e.text || "",
    fullscreen: l === document.body && ((n = e.fullscreen) != null ? n : !0),
    lock: (o = e.lock) != null ? o : !1,
    customClass: e.customClass || "",
    visible: (r = e.visible) != null ? r : !0,
    target: l
  };
}, z1 = async (e, t, n) => {
  const { nextZIndex: o } = n.vm.zIndex || n.vm._.exposed.zIndex, r = {};
  if (e.fullscreen)
    n.originalPosition.value = Un(document.body, "position"), n.originalOverflow.value = Un(document.body, "overflow"), r.zIndex = o();
  else if (e.parent === document.body) {
    n.originalPosition.value = Un(document.body, "position"), await me();
    for (const l of ["top", "left"]) {
      const a = l === "top" ? "scrollTop" : "scrollLeft";
      r[l] = `${e.target.getBoundingClientRect()[l] + document.body[a] + document.documentElement[a] - Number.parseInt(Un(document.body, `margin-${l}`), 10)}px`;
    }
    for (const l of ["height", "width"])
      r[l] = `${e.target.getBoundingClientRect()[l]}px`;
  } else
    n.originalPosition.value = Un(t, "position");
  for (const [l, a] of Object.entries(r))
    n.$el.style[l] = a;
}, Vs = (e, t, n) => {
  const o = n.vm.ns || n.vm._.exposed.ns;
  ["absolute", "fixed", "sticky"].includes(n.originalPosition.value) ? wn(t, o.bm("parent", "relative")) : Po(t, o.bm("parent", "relative")), e.fullscreen && e.lock ? Po(t, o.bm("parent", "hidden")) : wn(t, o.bm("parent", "hidden"));
}, Sl = Symbol("ElLoading"), Ws = (e, t) => {
  var n, o, r, l;
  const a = t.instance, s = (v) => Ze(t.value) ? t.value[v] : void 0, i = (v) => {
    const m = Ue(v) && (a == null ? void 0 : a[v]) || v;
    return m && k(m);
  }, u = (v) => i(s(v) || e.getAttribute(`element-loading-${rd(v)}`)), f = (n = s("fullscreen")) != null ? n : t.modifiers.fullscreen, d = {
    text: u("text"),
    svg: u("svg"),
    svgViewBox: u("svgViewBox"),
    spinner: u("spinner"),
    background: u("background"),
    customClass: u("customClass"),
    fullscreen: f,
    target: (o = s("target")) != null ? o : f ? void 0 : e,
    body: (r = s("body")) != null ? r : t.modifiers.body,
    lock: (l = s("lock")) != null ? l : t.modifiers.lock
  };
  e[Sl] = {
    options: d,
    instance: B1(d)
  };
}, H1 = (e, t) => {
  for (const n of Object.keys(t))
    Xt(t[n]) && (t[n].value = e[n]);
}, D1 = {
  mounted(e, t) {
    t.value && Ws(e, t);
  },
  updated(e, t) {
    const n = e[Sl];
    t.oldValue !== t.value && (t.value && !t.oldValue ? Ws(e, t) : t.value && t.oldValue ? Ze(t.value) && H1(t.value, n.options) : n == null || n.instance.close());
  },
  unmounted(e) {
    var t;
    (t = e[Sl]) == null || t.instance.close();
  }
}, fc = [
  "success",
  "info",
  "warning",
  "error"
], V1 = ye({
  customClass: {
    type: String,
    default: ""
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: !1
  },
  duration: {
    type: Number,
    default: 4500
  },
  icon: {
    type: Qe
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: ce([String, Object]),
    default: ""
  },
  offset: {
    type: Number,
    default: 0
  },
  onClick: {
    type: ce(Function),
    default: () => {
    }
  },
  onClose: {
    type: ce(Function),
    required: !0
  },
  position: {
    type: String,
    values: ["top-right", "top-left", "bottom-right", "bottom-left"],
    default: "top-right"
  },
  showClose: {
    type: Boolean,
    default: !0
  },
  title: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    values: [...fc, ""],
    default: ""
  },
  zIndex: Number
}), W1 = {
  destroy: () => !0
}, K1 = ["id"], j1 = ["textContent"], U1 = { key: 0 }, q1 = ["innerHTML"], G1 = z({
  name: "ElNotification"
}), Y1 = /* @__PURE__ */ z({
  ...G1,
  props: V1,
  emits: W1,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: r } = uu("notification"), { nextZIndex: l, currentZIndex: a } = r, { Close: s } = og, i = k(!1);
    let u;
    const f = E(() => {
      const S = n.type;
      return S && Xa[n.type] ? o.m(S) : "";
    }), d = E(() => n.type && Xa[n.type] || n.icon), v = E(() => n.position.endsWith("right") ? "right" : "left"), m = E(() => n.position.startsWith("top") ? "top" : "bottom"), p = E(() => {
      var S;
      return {
        [m.value]: `${n.offset}px`,
        zIndex: (S = n.zIndex) != null ? S : a.value
      };
    });
    function h() {
      n.duration > 0 && ({ stop: u } = Jr(() => {
        i.value && g();
      }, n.duration));
    }
    function y() {
      u == null || u();
    }
    function g() {
      i.value = !1;
    }
    function w({ code: S }) {
      S === ln.delete || S === ln.backspace ? y() : S === ln.esc ? i.value && g() : h();
    }
    return Re(() => {
      h(), l(), i.value = !0;
    }), qt(document, "keydown", w), t({
      visible: i,
      close: g
    }), (S, b) => (P(), K(gn, {
      name: c(o).b("fade"),
      onBeforeLeave: S.onClose,
      onAfterLeave: b[1] || (b[1] = (O) => S.$emit("destroy")),
      persisted: ""
    }, {
      default: D(() => [
        Fe(B("div", {
          id: S.id,
          class: I([c(o).b(), S.customClass, c(v)]),
          style: ke(c(p)),
          role: "alert",
          onMouseenter: y,
          onMouseleave: h,
          onClick: b[0] || (b[0] = (...O) => S.onClick && S.onClick(...O))
        }, [
          c(d) ? (P(), K(c(Be), {
            key: 0,
            class: I([c(o).e("icon"), c(f)])
          }, {
            default: D(() => [
              (P(), K(je(c(d))))
            ]),
            _: 1
          }, 8, ["class"])) : W("v-if", !0),
          B("div", {
            class: I(c(o).e("group"))
          }, [
            B("h2", {
              class: I(c(o).e("title")),
              textContent: ge(S.title)
            }, null, 10, j1),
            Fe(B("div", {
              class: I(c(o).e("content")),
              style: ke(S.title ? void 0 : { margin: 0 })
            }, [
              Z(S.$slots, "default", {}, () => [
                S.dangerouslyUseHTMLString ? (P(), R(ze, { key: 1 }, [
                  W(" Caution here, message could've been compromised, never use user's input as message "),
                  B("p", { innerHTML: S.message }, null, 8, q1)
                ], 2112)) : (P(), R("p", U1, ge(S.message), 1))
              ])
            ], 6), [
              [Rt, S.message]
            ]),
            S.showClose ? (P(), K(c(Be), {
              key: 0,
              class: I(c(o).e("closeBtn")),
              onClick: De(g, ["stop"])
            }, {
              default: D(() => [
                G(c(s))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : W("v-if", !0)
          ], 2)
        ], 46, K1), [
          [Rt, i.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave"]));
  }
});
var X1 = /* @__PURE__ */ ue(Y1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/notification/src/notification.vue"]]);
const mr = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, El = 16;
let J1 = 1;
const io = function(e = {}, t = null) {
  if (!_e)
    return { close: () => {
    } };
  (typeof e == "string" || Xr(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  mr[n].forEach(({ vm: f }) => {
    var d;
    o += (((d = f.el) == null ? void 0 : d.offsetHeight) || 0) + El;
  }), o += El;
  const r = `notification_${J1++}`, l = e.onClose, a = {
    ...e,
    offset: o,
    id: r,
    onClose: () => {
      Q1(r, n, l);
    }
  };
  let s = document.body;
  yn(e.appendTo) ? s = e.appendTo : Ue(e.appendTo) && (s = document.querySelector(e.appendTo)), yn(s) || (Ke("ElNotification", "the appendTo option is not an HTMLElement. Falling back to document.body."), s = document.body);
  const i = document.createElement("div"), u = G(X1, a, Xr(a.message) ? {
    default: () => a.message
  } : null);
  return u.appContext = t ?? io._context, u.props.onDestroy = () => {
    ua(null, i);
  }, ua(u, i), mr[n].push({ vm: u }), s.appendChild(i.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
fc.forEach((e) => {
  io[e] = (t = {}) => ((typeof t == "string" || Xr(t)) && (t = {
    message: t
  }), io({
    ...t,
    type: e
  }));
});
function Q1(e, t, n) {
  const o = mr[t], r = o.findIndex(({ vm: u }) => {
    var f;
    return ((f = u.component) == null ? void 0 : f.props.id) === e;
  });
  if (r === -1)
    return;
  const { vm: l } = o[r];
  if (!l)
    return;
  n == null || n(l);
  const a = l.el.offsetHeight, s = t.split("-")[0];
  o.splice(r, 1);
  const i = o.length;
  if (!(i < 1))
    for (let u = r; u < i; u++) {
      const { el: f, component: d } = o[u].vm, v = Number.parseInt(f.style[s], 10) - a - El;
      d.props.offset = v;
    }
}
function Z1() {
  for (const e of Object.values(mr))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
io.closeAll = Z1;
io._context = null;
const eE = rg(io, "$notify"), pc = {
  /**
   * 本地存储 setItem
   * @param {*} key
   * @param {*} data
   * @param {*} dateTime 0 永久有效 单位秒
   * @returns
   */
  set(e, t, n = 0) {
    let o = {
      content: t,
      dateTime: parseInt(n) === 0 ? 0 : (/* @__PURE__ */ new Date()).getTime() + parseInt(n) * 1e3
    };
    return localStorage.setItem(`${e}`, JSON.stringify(o));
  },
  /**
   * 本地存储 getItem
   * @param {*} key
   * @returns
   */
  get(e) {
    try {
      const t = localStorage.getItem(`${e}`);
      if (!t)
        return null;
      const n = JSON.parse(t);
      return n ? (/* @__PURE__ */ new Date()).getTime() > n.dateTime && n.dateTime != 0 ? (localStorage.removeItem(`${e}`), null) : n.content : null;
    } catch {
      return null;
    }
  },
  /**
   * 本地存储 removeItem
   * @param {*} key
   * @returns
   */
  remove(e) {
    return localStorage.removeItem(`${e}`);
  },
  /**
   * 本地存储 clear
   * @returns
   */
  clear() {
    return localStorage.clear();
  },
  setSession(e, t, n = 0) {
    let o = {
      content: t,
      dateTime: Number(n) === 0 ? 0 : (/* @__PURE__ */ new Date()).getTime() + Number(n) * 1e3
    };
    return sessionStorage.setItem(`${e}`, JSON.stringify(o));
  },
  getSession(e) {
    try {
      const t = sessionStorage.getItem(`${e}`);
      if (!t)
        return null;
      const n = JSON.parse(t);
      return n ? (/* @__PURE__ */ new Date()).getTime() > n.dateTime && n.dateTime != 0 ? (sessionStorage.removeItem(`${e}`), null) : n.content : null;
    } catch {
      return null;
    }
  },
  removeSession(e) {
    return sessionStorage.removeItem(`${e}`);
  },
  clearSession() {
    return sessionStorage.clear();
  }
}, tE = { class: "footer-wrap" }, nE = /* @__PURE__ */ z({
  __name: "ColumnSetting",
  props: {
    columns: { default: () => [] }
  },
  emits: ["update:columns"],
  setup(e, { expose: t, emit: n }) {
    const o = e, r = n, l = [
      {
        label: "不固定",
        value: ""
      },
      {
        label: "左固定",
        value: "left"
      },
      {
        label: "右固定",
        value: "right"
      }
    ], a = pe("TableName"), s = k(!1), i = () => {
      s.value = !0;
    }, u = (d, v) => {
      if (d === "") {
        const m = o.columns;
        delete m[v].fixed, r("update:columns", m);
        return;
      }
    }, f = () => {
      pc.setSession(`columns-${a}`, o.columns), s.value = !1, eE.success({
        title: "保存成功",
        message: "自定义列设置已缓存"
      });
    };
    return t({
      open: i
    }), (d, v) => {
      const m = dc, p = ec, h = Zu, y = Qu, g = Gu, w = L1, S = J0, b = Eu, O = X0, $ = Y0, C = gw;
      return P(), K(C, {
        modelValue: s.value,
        "onUpdate:modelValue": v[1] || (v[1] = (T) => s.value = T),
        title: "列设置",
        size: "500"
      }, {
        default: D(() => [
          G($, null, {
            default: D(() => [
              G(S, null, {
                default: D(() => [
                  G(w, {
                    data: d.columns,
                    "row-key": "prop"
                  }, {
                    empty: D(() => [
                      G(g, { description: "暂无可配置列" })
                    ]),
                    default: D(() => [
                      G(m, {
                        prop: "label",
                        align: "center",
                        label: "列名"
                      }),
                      G(m, {
                        prop: "isShow",
                        align: "center",
                        label: "显示"
                      }, {
                        default: D((T) => [
                          G(p, {
                            modelValue: T.row.isShow,
                            "onUpdate:modelValue": (A) => T.row.isShow = A
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      G(m, {
                        prop: "sortable",
                        align: "center",
                        label: "排序"
                      }, {
                        default: D((T) => [
                          G(p, {
                            modelValue: T.row.sortable,
                            "onUpdate:modelValue": (A) => T.row.sortable = A
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      G(m, {
                        prop: "fixed",
                        align: "center",
                        label: "固定"
                      }, {
                        default: D((T) => [
                          G(y, {
                            modelValue: T.row.fixed,
                            "onUpdate:modelValue": (A) => T.row.fixed = A,
                            onChange: (A) => u(A, T.$index)
                          }, {
                            default: D(() => [
                              (P(), R(ze, null, Vt(l, (A) => G(h, {
                                key: A.value,
                                value: A.value,
                                label: A.label
                              }, null, 8, ["value", "label"])), 64))
                            ]),
                            _: 2
                          }, 1032, ["modelValue", "onUpdate:modelValue", "onChange"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["data"])
                ]),
                _: 1
              }),
              G(O, null, {
                default: D(() => [
                  B("div", tE, [
                    G(b, {
                      onClick: v[0] || (v[0] = (T) => s.value = !1)
                    }, {
                      default: D(() => [
                        Wt("取消")
                      ]),
                      _: 1
                    }),
                    G(b, {
                      type: "primary",
                      onClick: f
                    }, {
                      default: D(() => [
                        Wt("保存")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), oE = (e = "id") => {
  const t = k(!1), n = k([]), o = E(() => n.value.map((l) => l[e]));
  return {
    isSelected: t,
    selected: n,
    selectedIds: o,
    selectionChange: (l) => {
      l.length ? t.value = !0 : t.value = !1, n.value = l;
    }
  };
}, rE = { class: "ex-table" }, lE = /* @__PURE__ */ B("i", null, null, -1), aE = { class: "ex-table-pagination" }, sE = { class: "ex-table-pagination__left" }, iE = { class: "ex-table-pagination__right" }, uE = { class: "ex-table-pagination__custom" }, cE = /* @__PURE__ */ B("div", { class: "custom-label" }, "表格尺寸:", -1), dE = { class: "custom-field" }, fE = /* @__PURE__ */ B("div", { class: "custom-label" }, "斑马纹:", -1), pE = { class: "custom-field" }, vE = /* @__PURE__ */ B("div", { class: "custom-label" }, "边框:", -1), hE = { class: "custom-field" }, gE = /* @__PURE__ */ z({
  name: "ExTable",
  __name: "index",
  props: {
    data: {},
    columns: { default: () => [] },
    requestApi: {},
    requestParams: {},
    requestAuto: { type: Boolean, default: !1 },
    responseDataHandler: {},
    isPage: { type: Boolean, default: !0 },
    pageParams: { default: () => ({
      pageNum: "pageNum",
      pageSize: "pageSize",
      initPageNum: 1,
      initPageSize: 10
    }) },
    border: { type: Boolean, default: !1 },
    stripe: { type: Boolean, default: !1 },
    rowKey: { default: "id" },
    size: { default: "default" },
    emptyText: { default: "暂无数据" },
    tableName: { default: "ExTable" },
    pageConfig: { default: () => ({
      layout: "total, sizes, prev, pager, next, jumper",
      pageSizes: [10, 25, 50, 100],
      hideOnSinglePage: !1,
      background: !0,
      small: !1
    }) },
    showColumnSetting: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const n = e;
    Ge("TableName", n.tableName);
    const o = {
      [`${n.pageParams.pageNum}`]: n.pageParams.initPageNum,
      [`${n.pageParams.pageSize}`]: n.pageParams.initPageSize
    }, r = ["selection", "radio", "index", "expand"], l = [
      {
        label: "默认",
        value: "default"
      },
      {
        label: "缩小",
        value: "small"
      },
      {
        label: "放大",
        value: "large"
      }
    ], a = Us(), s = k(null), i = k(n.columns), u = E(() => i.value.map((V) => V.isShow === void 0 ? {
      ...V,
      isShow: !0
    } : V)), f = k([]), d = k([]);
    Ln(() => {
      f.value = u.value.filter((V) => r.includes(V == null ? void 0 : V.type)), d.value = u.value.filter((V) => !r.includes(V == null ? void 0 : V.type));
    });
    const v = k({}), m = k([]), p = E(() => n.data ? n.data.slice(
      (A.value[n.pageParams.pageNum] - 1) * A.value[n.pageParams.pageSize],
      A.value[n.pageParams.pageSize] * A.value[n.pageParams.pageNum]
    ) : m.value), h = k(!1), y = k(0), g = k(0), w = k(""), { isSelected: S, selected: b, selectedIds: O, selectionChange: $ } = oE(n.rowKey), C = async (V = {}) => {
      if (!(!n.requestApi || n.data))
        try {
          if (h.value = !0, Object.assign(v.value, n.requestParams, V, n.isPage ? A.value : {}), n.responseDataHandler && typeof n.responseDataHandler == "function") {
            const oe = await n.requestApi(v.value), { rows: Pe, total: xe } = n.responseDataHandler(oe);
            m.value = Pe, g.value = xe || Pe.length;
          } else {
            const oe = await n.requestApi(v.value), { rows: Pe, total: xe } = oe;
            m.value = Pe, g.value = xe || Pe.length;
          }
          h.value = !1;
        } catch (oe) {
          console.log(oe), h.value = !1;
        }
    };
    Re(() => {
      !n.isPage && (T.value.layout = "total"), n.requestAuto && C(), n.data && Array.isArray(n.data) && (g.value = n.data.length), n.showColumnSetting && j();
    }), wc(() => {
      var oe;
      ((oe = s.value) == null ? void 0 : oe.$el.querySelector(".el-scrollbar__wrap")) && y.value && me(() => {
        var Pe;
        (Pe = s.value) == null || Pe.setScrollTop(y.value);
      });
    }), Js(() => {
      var oe;
      const V = (oe = s.value) == null ? void 0 : oe.$el.querySelector(".el-scrollbar__wrap");
      V && (y.value = V.scrollTop);
    });
    const T = k(n.pageConfig), A = k({
      ...o
    }), F = (V) => {
      A.value[n.pageParams.pageSize] = V, A.value[n.pageParams.pageNum] = o[n.pageParams.pageNum];
    }, L = () => {
      C();
    }, N = k({
      size: n.size || "default",
      stripe: n.stripe ?? !1,
      border: n.border ?? !1
    }), Y = () => {
      Ve();
    }, ee = k(n.showColumnSetting), J = k(null), te = () => {
      ee.value = !0, me(() => {
        var V;
        (V = J.value) == null || V.open();
      });
    }, j = () => {
      const V = pc.getSession(`columns-${n.tableName}`);
      V && Array.isArray(V) && V.length > 0 && (d.value = V);
    }, le = () => {
      $e(), C();
    }, x = (V = {}) => {
      A.value[n.pageParams.pageNum] = o[n.pageParams.pageNum], A.value[n.pageParams.pageSize] = o[n.pageParams.pageSize], v.value = n.requestParams, $e(), Le(), Se(), C(V);
    }, U = (V = {}) => {
      A.value[n.pageParams.pageNum] = o[n.pageParams.pageNum], $e(), C(V);
    }, ie = (V, oe) => {
      m.value.splice(oe, 0, V);
    }, de = (V, oe) => m.value.find((Pe) => Pe[oe || n.rowKey] === V) || null, we = (V, oe, Pe) => {
      const xe = m.value.findIndex((at) => at[Pe || n.rowKey] === oe);
      xe !== -1 && m.value.splice(xe, 1, V);
    }, Ce = (V, oe) => {
      m.value = m.value.filter((Pe) => Pe[oe || n.rowKey] !== V);
    }, Oe = (V) => {
      m.value.splice(V, 1);
    }, $e = () => {
      var V;
      (V = s.value) == null || V.clearSelection();
    }, Le = () => {
      var V;
      (V = s.value) == null || V.clearSort();
    }, Se = (V) => {
      var oe;
      (oe = s.value) == null || oe.clearFilter(V);
    }, Ve = () => {
      var V;
      (V = s.value) == null || V.doLayout();
    };
    return t({
      el: s,
      tableParams: v,
      tableData: p,
      radio: w,
      isSelected: S,
      selected: b,
      selectedIds: O,
      getData: C,
      refresh: le,
      reload: x,
      search: U,
      insertRow: ie,
      getRowById: de,
      updateRowById: we,
      deleteRowById: Ce,
      deleteRowByIndex: Oe,
      clearSelection: $e,
      clearSort: Le,
      clearFilter: Se
    }), (V, oe) => {
      const Pe = A0, xe = dc, at = Gu, dt = sS, Ye = Eu, _t = x0, st = I0, ft = ec, Xe = mS, pt = D1;
      return P(), R(ze, null, [
        Fe((P(), R("div", rE, [
          G(c(Sc), bt({
            ref_key: "tableRef",
            ref: s,
            data: p.value,
            "row-key": V.rowKey,
            border: N.value.border,
            size: N.value.size,
            stripe: N.value.stripe,
            onSelectionChange: c($)
          }, c(a)), {
            append: D(() => [
              Z(V.$slots, "append")
            ]),
            empty: D(() => [
              G(at, { description: V.emptyText }, null, 8, ["description"])
            ]),
            default: D(() => [
              (P(!0), R(ze, null, Vt(f.value, (ve) => (P(), K(xe, bt({ key: ve }, ve, {
                align: ve.align ?? "center",
                "reserve-selection": ve.type === "selection"
              }), {
                default: D((nt) => [
                  ve.type === "expand" ? Z(V.$slots, ve.type, Mr(bt({ key: 0 }, nt))) : W("", !0),
                  ve.type === "radio" ? (P(), K(Pe, {
                    key: 1,
                    modelValue: w.value,
                    "onUpdate:modelValue": oe[0] || (oe[0] = (vt) => w.value = vt),
                    label: nt.row[V.rowKey]
                  }, {
                    default: D(() => [
                      lE
                    ]),
                    _: 2
                  }, 1032, ["modelValue", "label"])) : W("", !0)
                ]),
                _: 2
              }, 1040, ["align", "reserve-selection"]))), 128)),
              (P(!0), R(ze, null, Vt(d.value, (ve) => (P(), R(ze, { key: ve }, [
                ve.isShow ? (P(), K(xe, Mr(bt({ key: 0 }, ve)), {
                  default: D((nt) => [
                    Z(V.$slots, ve.prop, Mr(Cc(nt)), () => [
                      Wt(ge(ve.prop ? nt.row[ve.prop] : null), 1)
                    ])
                  ]),
                  _: 2
                }, 1040)) : W("", !0)
              ], 64))), 128)),
              Z(V.$slots, "default"),
              G(xe, { "min-width": "1" })
            ]),
            _: 3
          }, 16, ["data", "row-key", "border", "size", "stripe", "onSelectionChange"]),
          B("div", aE, [
            B("div", sE, [
              G(dt, {
                background: T.value.background,
                small: T.value.small,
                layout: T.value.layout,
                "current-page": A.value.pageNum,
                "onUpdate:currentPage": oe[1] || (oe[1] = (ve) => A.value.pageNum = ve),
                total: g.value,
                "page-size": A.value.pageSize,
                "page-sizes": T.value.pageSizes,
                "hide-on-single-page": T.value.hideOnSinglePage,
                onSizeChange: F,
                onCurrentChange: L
              }, null, 8, ["background", "small", "layout", "current-page", "total", "page-size", "page-sizes", "hide-on-single-page"])
            ]),
            B("div", iE, [
              G(Xe, {
                placement: "top",
                width: 220,
                trigger: "click"
              }, {
                reference: D(() => [
                  G(Ye, {
                    circle: "",
                    icon: c(Rc)
                  }, null, 8, ["icon"])
                ]),
                default: D(() => [
                  B("div", uE, [
                    cE,
                    B("div", dE, [
                      G(st, {
                        modelValue: N.value.size,
                        "onUpdate:modelValue": oe[2] || (oe[2] = (ve) => N.value.size = ve),
                        size: "small",
                        onChange: Y
                      }, {
                        default: D(() => [
                          (P(), R(ze, null, Vt(l, (ve) => G(_t, {
                            label: ve.value
                          }, {
                            default: D(() => [
                              Wt(ge(ve.label), 1)
                            ]),
                            _: 2
                          }, 1032, ["label"])), 64))
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    fE,
                    B("div", pE, [
                      G(ft, {
                        modelValue: N.value.stripe,
                        "onUpdate:modelValue": oe[3] || (oe[3] = (ve) => N.value.stripe = ve)
                      }, null, 8, ["modelValue"])
                    ]),
                    vE,
                    B("div", hE, [
                      G(ft, {
                        modelValue: N.value.border,
                        "onUpdate:modelValue": oe[4] || (oe[4] = (ve) => N.value.border = ve)
                      }, null, 8, ["modelValue"])
                    ])
                  ])
                ]),
                _: 1
              }),
              ee.value ? (P(), K(Ye, {
                key: 0,
                circle: "",
                icon: c(Lc),
                onClick: te
              }, null, 8, ["icon"])) : W("", !0),
              G(Ye, {
                circle: "",
                icon: c(Mc),
                onClick: le
              }, null, 8, ["icon"])
            ])
          ])
        ])), [
          [pt, h.value]
        ]),
        ee.value ? (P(), K(nE, {
          key: 0,
          ref_key: "columnSettingRef",
          ref: J,
          columns: d.value,
          "onUpdate:columns": oe[5] || (oe[5] = (ve) => d.value = ve)
        }, null, 8, ["columns"])) : W("", !0)
      ], 64);
    };
  }
}), mE = [gE], SE = {
  install(e) {
    mE.forEach((t) => {
      e.component(t.name, t);
    });
  }
};
export {
  gE as ExTable,
  SE as default
};
