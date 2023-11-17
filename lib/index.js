import { getCurrentScope as mc, onScopeDispose as Us, unref as c, getCurrentInstance as $e, onMounted as Ie, nextTick as be, ref as k, readonly as qs, watch as J, openBlock as T, createElementBlock as L, createElementVNode as R, warn as bc, computed as S, inject as he, isRef as Jt, shallowRef as Rn, onBeforeUnmount as zt, onBeforeMount as Tl, provide as Xe, defineComponent as H, mergeProps as mt, renderSlot as te, toRef as Wt, onUnmounted as yr, useAttrs as Gs, useSlots as No, withDirectives as Re, createCommentVNode as V, Fragment as ze, normalizeClass as P, createBlock as W, withCtx as D, resolveDynamicComponent as je, withModifiers as De, createVNode as X, toDisplayString as me, normalizeStyle as Oe, vShow as Rt, Transition as mn, reactive as $n, onUpdated as Ys, cloneVNode as yc, Text as Xs, Comment as Zs, Teleport as Js, onDeactivated as Qs, toRaw as Zn, vModelCheckbox as sr, createTextVNode as jt, toRefs as Hn, vModelRadio as ei, h as ae, resolveComponent as Le, triggerRef as go, resolveDirective as Ol, renderList as Kt, withKeys as $t, vModelText as wc, createSlots as Cc, watchEffect as Mn, createApp as Sc, isVNode as Jr, render as da, onActivated as _c, normalizeProps as zr, guardReactiveProps as Ec, pushScopeId as $c, popScopeId as Tc } from "vue";
const rn = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
  const l = e == null ? void 0 : e(r);
  if (n === !1 || !l)
    return t == null ? void 0 : t(r);
};
var fa;
const ke = typeof window < "u", Oc = (e) => typeof e == "string", ti = () => {
}, ni = ke && ((fa = window == null ? void 0 : window.navigator) == null ? void 0 : fa.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function kl(e) {
  return typeof e == "function" ? e() : c(e);
}
function kc(e) {
  return e;
}
function wr(e) {
  return mc() ? (Us(e), !0) : !1;
}
function xc(e, t = !0) {
  $e() ? Ie(e) : t ? e() : be(e);
}
function Qr(e, t, n = {}) {
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
    }, kl(t));
  }
  return o && (r.value = !0, ke && i()), wr(s), {
    isPending: qs(r),
    start: i,
    stop: s
  };
}
function hn(e) {
  var t;
  const n = kl(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const xl = ke ? window : void 0;
function Yt(...e) {
  let t, n, o, r;
  if (Oc(e[0]) || Array.isArray(e[0]) ? ([n, o, r] = e, t = xl) : [t, n, o, r] = e, !t)
    return ti;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const l = [], a = () => {
    l.forEach((f) => f()), l.length = 0;
  }, s = (f, d, v, m) => (f.addEventListener(d, v, m), () => f.removeEventListener(d, v, m)), i = J(() => [hn(t), kl(r)], ([f, d]) => {
    a(), f && l.push(...n.flatMap((v) => o.map((m) => s(f, v, m, d))));
  }, { immediate: !0, flush: "post" }), u = () => {
    i(), a();
  };
  return wr(u), u;
}
let pa = !1;
function Pc(e, t, n = {}) {
  const { window: o = xl, ignore: r = [], capture: l = !0, detectIframe: a = !1 } = n;
  if (!o)
    return;
  ni && !pa && (pa = !0, Array.from(o.document.body.children).forEach((v) => v.addEventListener("click", ti)));
  let s = !0;
  const i = (v) => r.some((m) => {
    if (typeof m == "string")
      return Array.from(o.document.querySelectorAll(m)).some((p) => p === v.target || v.composedPath().includes(p));
    {
      const p = hn(m);
      return p && (v.target === p || v.composedPath().includes(p));
    }
  }), f = [
    Yt(o, "click", (v) => {
      const m = hn(e);
      if (!(!m || m === v.target || v.composedPath().includes(m))) {
        if (v.detail === 0 && (s = !i(v)), !s) {
          s = !0;
          return;
        }
        t(v);
      }
    }, { passive: !0, capture: l }),
    Yt(o, "pointerdown", (v) => {
      const m = hn(e);
      m && (s = !v.composedPath().includes(m) && !i(v));
    }, { passive: !0 }),
    a && Yt(o, "blur", (v) => {
      var m;
      const p = hn(e);
      ((m = o.document.activeElement) == null ? void 0 : m.tagName) === "IFRAME" && !(p != null && p.contains(o.document.activeElement)) && t(v);
    })
  ].filter(Boolean);
  return () => f.forEach((v) => v());
}
function Ac(e, t = !1) {
  const n = k(), o = () => n.value = !!e();
  return o(), xc(o, t), n;
}
const va = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ha = "__vueuse_ssr_handlers__";
va[ha] = va[ha] || {};
var ga = Object.getOwnPropertySymbols, Ic = Object.prototype.hasOwnProperty, Lc = Object.prototype.propertyIsEnumerable, Nc = (e, t) => {
  var n = {};
  for (var o in e)
    Ic.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && ga)
    for (var o of ga(e))
      t.indexOf(o) < 0 && Lc.call(e, o) && (n[o] = e[o]);
  return n;
};
function Jn(e, t, n = {}) {
  const o = n, { window: r = xl } = o, l = Nc(o, ["window"]);
  let a;
  const s = Ac(() => r && "ResizeObserver" in r), i = () => {
    a && (a.disconnect(), a = void 0);
  }, u = J(() => hn(e), (d) => {
    i(), s.value && r && d && (a = new ResizeObserver(t), a.observe(d, l));
  }, { immediate: !0, flush: "post" }), f = () => {
    i(), u();
  };
  return wr(f), {
    isSupported: s,
    stop: f
  };
}
var ma;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(ma || (ma = {}));
var Rc = Object.defineProperty, ba = Object.getOwnPropertySymbols, Mc = Object.prototype.hasOwnProperty, Bc = Object.prototype.propertyIsEnumerable, ya = (e, t, n) => t in e ? Rc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, zc = (e, t) => {
  for (var n in t || (t = {}))
    Mc.call(t, n) && ya(e, n, t[n]);
  if (ba)
    for (var n of ba(t))
      Bc.call(t, n) && ya(e, n, t[n]);
  return e;
};
const Fc = {
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
zc({
  linear: kc
}, Fc);
const Hc = () => ke && /firefox/i.test(window.navigator.userAgent);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const ln = () => {
}, oi = Object.assign, Dc = Object.prototype.hasOwnProperty, zn = (e, t) => Dc.call(e, t), bn = Array.isArray, at = (e) => typeof e == "function", Ue = (e) => typeof e == "string", Vc = (e) => typeof e == "symbol", Qe = (e) => e !== null && typeof e == "object", wa = (e) => (Qe(e) || at(e)) && at(e.then) && at(e.catch), Wc = Object.prototype.toString, Kc = (e) => Wc.call(e), Fr = (e) => Kc(e).slice(8, -1), ri = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, jc = /-(\w)/g, Uc = ri((e) => e.replace(jc, (t, n) => n ? n.toUpperCase() : "")), qc = /\B([A-Z])/g, Gc = ri(
  (e) => e.replace(qc, "-$1").toLowerCase()
);
var Yc = typeof global == "object" && global && global.Object === Object && global;
const li = Yc;
var Xc = typeof self == "object" && self && self.Object === Object && self, Zc = li || Xc || Function("return this")();
const Ut = Zc;
var Jc = Ut.Symbol;
const Qt = Jc;
var ai = Object.prototype, Qc = ai.hasOwnProperty, ed = ai.toString, mo = Qt ? Qt.toStringTag : void 0;
function td(e) {
  var t = Qc.call(e, mo), n = e[mo];
  try {
    e[mo] = void 0;
    var o = !0;
  } catch {
  }
  var r = ed.call(e);
  return o && (t ? e[mo] = n : delete e[mo]), r;
}
var nd = Object.prototype, od = nd.toString;
function rd(e) {
  return od.call(e);
}
var ld = "[object Null]", ad = "[object Undefined]", Ca = Qt ? Qt.toStringTag : void 0;
function Dn(e) {
  return e == null ? e === void 0 ? ad : ld : Ca && Ca in Object(e) ? td(e) : rd(e);
}
function yn(e) {
  return e != null && typeof e == "object";
}
var sd = "[object Symbol]";
function Cr(e) {
  return typeof e == "symbol" || yn(e) && Dn(e) == sd;
}
function si(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o; )
    r[n] = t(e[n], n, e);
  return r;
}
var id = Array.isArray;
const kt = id;
var ud = 1 / 0, Sa = Qt ? Qt.prototype : void 0, _a = Sa ? Sa.toString : void 0;
function ii(e) {
  if (typeof e == "string")
    return e;
  if (kt(e))
    return si(e, ii) + "";
  if (Cr(e))
    return _a ? _a.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ud ? "-0" : t;
}
var cd = /\s/;
function dd(e) {
  for (var t = e.length; t-- && cd.test(e.charAt(t)); )
    ;
  return t;
}
var fd = /^\s+/;
function pd(e) {
  return e && e.slice(0, dd(e) + 1).replace(fd, "");
}
function xt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ea = 0 / 0, vd = /^[-+]0x[0-9a-f]+$/i, hd = /^0b[01]+$/i, gd = /^0o[0-7]+$/i, md = parseInt;
function el(e) {
  if (typeof e == "number")
    return e;
  if (Cr(e))
    return Ea;
  if (xt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = xt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = pd(e);
  var n = hd.test(e);
  return n || gd.test(e) ? md(e.slice(2), n ? 2 : 8) : vd.test(e) ? Ea : +e;
}
var $a = 1 / 0, bd = 17976931348623157e292;
function yd(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = el(e), e === $a || e === -$a) {
    var t = e < 0 ? -1 : 1;
    return t * bd;
  }
  return e === e ? e : 0;
}
function wd(e) {
  var t = yd(e), n = t % 1;
  return t === t ? n ? t - n : t : 0;
}
function Pl(e) {
  return e;
}
var Cd = "[object AsyncFunction]", Sd = "[object Function]", _d = "[object GeneratorFunction]", Ed = "[object Proxy]";
function Al(e) {
  if (!xt(e))
    return !1;
  var t = Dn(e);
  return t == Sd || t == _d || t == Cd || t == Ed;
}
var $d = Ut["__core-js_shared__"];
const Hr = $d;
var Ta = function() {
  var e = /[^.]+$/.exec(Hr && Hr.keys && Hr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Td(e) {
  return !!Ta && Ta in e;
}
var Od = Function.prototype, kd = Od.toString;
function Vn(e) {
  if (e != null) {
    try {
      return kd.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var xd = /[\\^$.*+?()[\]{}|]/g, Pd = /^\[object .+?Constructor\]$/, Ad = Function.prototype, Id = Object.prototype, Ld = Ad.toString, Nd = Id.hasOwnProperty, Rd = RegExp(
  "^" + Ld.call(Nd).replace(xd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Md(e) {
  if (!xt(e) || Td(e))
    return !1;
  var t = Al(e) ? Rd : Pd;
  return t.test(Vn(e));
}
function Bd(e, t) {
  return e == null ? void 0 : e[t];
}
function Wn(e, t) {
  var n = Bd(e, t);
  return Md(n) ? n : void 0;
}
var zd = Wn(Ut, "WeakMap");
const tl = zd;
var Oa = Object.create, Fd = function() {
  function e() {
  }
  return function(t) {
    if (!xt(t))
      return {};
    if (Oa)
      return Oa(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
const Hd = Fd;
function Dd(e, t, n) {
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
function Vd(e, t) {
  var n = -1, o = e.length;
  for (t || (t = Array(o)); ++n < o; )
    t[n] = e[n];
  return t;
}
var Wd = 800, Kd = 16, jd = Date.now;
function Ud(e) {
  var t = 0, n = 0;
  return function() {
    var o = jd(), r = Kd - (o - n);
    if (n = o, r > 0) {
      if (++t >= Wd)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function qd(e) {
  return function() {
    return e;
  };
}
var Gd = function() {
  try {
    var e = Wn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const ir = Gd;
var Yd = ir ? function(e, t) {
  return ir(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: qd(t),
    writable: !0
  });
} : Pl;
const Xd = Yd;
var Zd = Ud(Xd);
const ui = Zd;
function Jd(e, t, n, o) {
  for (var r = e.length, l = n + (o ? 1 : -1); o ? l-- : ++l < r; )
    if (t(e[l], l, e))
      return l;
  return -1;
}
var Qd = 9007199254740991, ef = /^(?:0|[1-9]\d*)$/;
function Sr(e, t) {
  var n = typeof e;
  return t = t ?? Qd, !!t && (n == "number" || n != "symbol" && ef.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Il(e, t, n) {
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
var tf = Object.prototype, nf = tf.hasOwnProperty;
function ci(e, t, n) {
  var o = e[t];
  (!(nf.call(e, t) && Ro(o, n)) || n === void 0 && !(t in e)) && Il(e, t, n);
}
function of(e, t, n, o) {
  var r = !n;
  n || (n = {});
  for (var l = -1, a = t.length; ++l < a; ) {
    var s = t[l], i = o ? o(n[s], e[s], s, n, e) : void 0;
    i === void 0 && (i = e[s]), r ? Il(n, s, i) : ci(n, s, i);
  }
  return n;
}
var ka = Math.max;
function di(e, t, n) {
  return t = ka(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, r = -1, l = ka(o.length - t, 0), a = Array(l); ++r < l; )
      a[r] = o[t + r];
    r = -1;
    for (var s = Array(t + 1); ++r < t; )
      s[r] = o[r];
    return s[t] = n(a), Dd(e, this, s);
  };
}
function rf(e, t) {
  return ui(di(e, t, Pl), e + "");
}
var lf = 9007199254740991;
function Ll(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= lf;
}
function co(e) {
  return e != null && Ll(e.length) && !Al(e);
}
function af(e, t, n) {
  if (!xt(n))
    return !1;
  var o = typeof t;
  return (o == "number" ? co(n) && Sr(t, n.length) : o == "string" && t in n) ? Ro(n[t], e) : !1;
}
function sf(e) {
  return rf(function(t, n) {
    var o = -1, r = n.length, l = r > 1 ? n[r - 1] : void 0, a = r > 2 ? n[2] : void 0;
    for (l = e.length > 3 && typeof l == "function" ? (r--, l) : void 0, a && af(n[0], n[1], a) && (l = r < 3 ? void 0 : l, r = 1), t = Object(t); ++o < r; ) {
      var s = n[o];
      s && e(t, s, o, l);
    }
    return t;
  });
}
var uf = Object.prototype;
function Nl(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || uf;
  return e === n;
}
function cf(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var df = "[object Arguments]";
function xa(e) {
  return yn(e) && Dn(e) == df;
}
var fi = Object.prototype, ff = fi.hasOwnProperty, pf = fi.propertyIsEnumerable, vf = xa(function() {
  return arguments;
}()) ? xa : function(e) {
  return yn(e) && ff.call(e, "callee") && !pf.call(e, "callee");
};
const To = vf;
function hf() {
  return !1;
}
var pi = typeof exports == "object" && exports && !exports.nodeType && exports, Pa = pi && typeof module == "object" && module && !module.nodeType && module, gf = Pa && Pa.exports === pi, Aa = gf ? Ut.Buffer : void 0, mf = Aa ? Aa.isBuffer : void 0, bf = mf || hf;
const ur = bf;
var yf = "[object Arguments]", wf = "[object Array]", Cf = "[object Boolean]", Sf = "[object Date]", _f = "[object Error]", Ef = "[object Function]", $f = "[object Map]", Tf = "[object Number]", Of = "[object Object]", kf = "[object RegExp]", xf = "[object Set]", Pf = "[object String]", Af = "[object WeakMap]", If = "[object ArrayBuffer]", Lf = "[object DataView]", Nf = "[object Float32Array]", Rf = "[object Float64Array]", Mf = "[object Int8Array]", Bf = "[object Int16Array]", zf = "[object Int32Array]", Ff = "[object Uint8Array]", Hf = "[object Uint8ClampedArray]", Df = "[object Uint16Array]", Vf = "[object Uint32Array]", Ae = {};
Ae[Nf] = Ae[Rf] = Ae[Mf] = Ae[Bf] = Ae[zf] = Ae[Ff] = Ae[Hf] = Ae[Df] = Ae[Vf] = !0;
Ae[yf] = Ae[wf] = Ae[If] = Ae[Cf] = Ae[Lf] = Ae[Sf] = Ae[_f] = Ae[Ef] = Ae[$f] = Ae[Tf] = Ae[Of] = Ae[kf] = Ae[xf] = Ae[Pf] = Ae[Af] = !1;
function Wf(e) {
  return yn(e) && Ll(e.length) && !!Ae[Dn(e)];
}
function Kf(e) {
  return function(t) {
    return e(t);
  };
}
var vi = typeof exports == "object" && exports && !exports.nodeType && exports, wo = vi && typeof module == "object" && module && !module.nodeType && module, jf = wo && wo.exports === vi, Dr = jf && li.process, Uf = function() {
  try {
    var e = wo && wo.require && wo.require("util").types;
    return e || Dr && Dr.binding && Dr.binding("util");
  } catch {
  }
}();
const Ia = Uf;
var La = Ia && Ia.isTypedArray, qf = La ? Kf(La) : Wf;
const Rl = qf;
var Gf = Object.prototype, Yf = Gf.hasOwnProperty;
function hi(e, t) {
  var n = kt(e), o = !n && To(e), r = !n && !o && ur(e), l = !n && !o && !r && Rl(e), a = n || o || r || l, s = a ? cf(e.length, String) : [], i = s.length;
  for (var u in e)
    (t || Yf.call(e, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    l && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Sr(u, i))) && s.push(u);
  return s;
}
function gi(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Xf = gi(Object.keys, Object);
const Zf = Xf;
var Jf = Object.prototype, Qf = Jf.hasOwnProperty;
function ep(e) {
  if (!Nl(e))
    return Zf(e);
  var t = [];
  for (var n in Object(e))
    Qf.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Ml(e) {
  return co(e) ? hi(e) : ep(e);
}
function tp(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var np = Object.prototype, op = np.hasOwnProperty;
function rp(e) {
  if (!xt(e))
    return tp(e);
  var t = Nl(e), n = [];
  for (var o in e)
    o == "constructor" && (t || !op.call(e, o)) || n.push(o);
  return n;
}
function mi(e) {
  return co(e) ? hi(e, !0) : rp(e);
}
var lp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ap = /^\w*$/;
function Bl(e, t) {
  if (kt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Cr(e) ? !0 : ap.test(e) || !lp.test(e) || t != null && e in Object(t);
}
var sp = Wn(Object, "create");
const Oo = sp;
function ip() {
  this.__data__ = Oo ? Oo(null) : {}, this.size = 0;
}
function up(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var cp = "__lodash_hash_undefined__", dp = Object.prototype, fp = dp.hasOwnProperty;
function pp(e) {
  var t = this.__data__;
  if (Oo) {
    var n = t[e];
    return n === cp ? void 0 : n;
  }
  return fp.call(t, e) ? t[e] : void 0;
}
var vp = Object.prototype, hp = vp.hasOwnProperty;
function gp(e) {
  var t = this.__data__;
  return Oo ? t[e] !== void 0 : hp.call(t, e);
}
var mp = "__lodash_hash_undefined__";
function bp(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Oo && t === void 0 ? mp : t, this;
}
function Fn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Fn.prototype.clear = ip;
Fn.prototype.delete = up;
Fn.prototype.get = pp;
Fn.prototype.has = gp;
Fn.prototype.set = bp;
function yp() {
  this.__data__ = [], this.size = 0;
}
function _r(e, t) {
  for (var n = e.length; n--; )
    if (Ro(e[n][0], t))
      return n;
  return -1;
}
var wp = Array.prototype, Cp = wp.splice;
function Sp(e) {
  var t = this.__data__, n = _r(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : Cp.call(t, n, 1), --this.size, !0;
}
function _p(e) {
  var t = this.__data__, n = _r(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Ep(e) {
  return _r(this.__data__, e) > -1;
}
function $p(e, t) {
  var n = this.__data__, o = _r(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function cn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
cn.prototype.clear = yp;
cn.prototype.delete = Sp;
cn.prototype.get = _p;
cn.prototype.has = Ep;
cn.prototype.set = $p;
var Tp = Wn(Ut, "Map");
const ko = Tp;
function Op() {
  this.size = 0, this.__data__ = {
    hash: new Fn(),
    map: new (ko || cn)(),
    string: new Fn()
  };
}
function kp(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Er(e, t) {
  var n = e.__data__;
  return kp(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function xp(e) {
  var t = Er(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Pp(e) {
  return Er(this, e).get(e);
}
function Ap(e) {
  return Er(this, e).has(e);
}
function Ip(e, t) {
  var n = Er(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function dn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
dn.prototype.clear = Op;
dn.prototype.delete = xp;
dn.prototype.get = Pp;
dn.prototype.has = Ap;
dn.prototype.set = Ip;
var Lp = "Expected a function";
function zl(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Lp);
  var n = function() {
    var o = arguments, r = t ? t.apply(this, o) : o[0], l = n.cache;
    if (l.has(r))
      return l.get(r);
    var a = e.apply(this, o);
    return n.cache = l.set(r, a) || l, a;
  };
  return n.cache = new (zl.Cache || dn)(), n;
}
zl.Cache = dn;
var Np = 500;
function Rp(e) {
  var t = zl(e, function(o) {
    return n.size === Np && n.clear(), o;
  }), n = t.cache;
  return t;
}
var Mp = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Bp = /\\(\\)?/g, zp = Rp(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Mp, function(n, o, r, l) {
    t.push(r ? l.replace(Bp, "$1") : o || n);
  }), t;
});
const Fp = zp;
function Hp(e) {
  return e == null ? "" : ii(e);
}
function $r(e, t) {
  return kt(e) ? e : Bl(e, t) ? [e] : Fp(Hp(e));
}
var Dp = 1 / 0;
function Mo(e) {
  if (typeof e == "string" || Cr(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Dp ? "-0" : t;
}
function Fl(e, t) {
  t = $r(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[Mo(t[n++])];
  return n && n == o ? e : void 0;
}
function lt(e, t, n) {
  var o = e == null ? void 0 : Fl(e, t);
  return o === void 0 ? n : o;
}
function bi(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; )
    e[r + n] = t[n];
  return e;
}
var Na = Qt ? Qt.isConcatSpreadable : void 0;
function Vp(e) {
  return kt(e) || To(e) || !!(Na && e && e[Na]);
}
function Hl(e, t, n, o, r) {
  var l = -1, a = e.length;
  for (n || (n = Vp), r || (r = []); ++l < a; ) {
    var s = e[l];
    t > 0 && n(s) ? t > 1 ? Hl(s, t - 1, n, o, r) : bi(r, s) : o || (r[r.length] = s);
  }
  return r;
}
function Wp(e) {
  var t = e == null ? 0 : e.length;
  return t ? Hl(e, 1) : [];
}
function Kp(e) {
  return ui(di(e, void 0, Wp), e + "");
}
var jp = gi(Object.getPrototypeOf, Object);
const yi = jp;
var Up = "[object Object]", qp = Function.prototype, Gp = Object.prototype, wi = qp.toString, Yp = Gp.hasOwnProperty, Xp = wi.call(Object);
function Zp(e) {
  if (!yn(e) || Dn(e) != Up)
    return !1;
  var t = yi(e);
  if (t === null)
    return !0;
  var n = Yp.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && wi.call(n) == Xp;
}
function Jp() {
  this.__data__ = new cn(), this.size = 0;
}
function Qp(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function ev(e) {
  return this.__data__.get(e);
}
function tv(e) {
  return this.__data__.has(e);
}
var nv = 200;
function ov(e, t) {
  var n = this.__data__;
  if (n instanceof cn) {
    var o = n.__data__;
    if (!ko || o.length < nv - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new dn(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Xt(e) {
  var t = this.__data__ = new cn(e);
  this.size = t.size;
}
Xt.prototype.clear = Jp;
Xt.prototype.delete = Qp;
Xt.prototype.get = ev;
Xt.prototype.has = tv;
Xt.prototype.set = ov;
var Ci = typeof exports == "object" && exports && !exports.nodeType && exports, Ra = Ci && typeof module == "object" && module && !module.nodeType && module, rv = Ra && Ra.exports === Ci, Ma = rv ? Ut.Buffer : void 0, Ba = Ma ? Ma.allocUnsafe : void 0;
function lv(e, t) {
  if (t)
    return e.slice();
  var n = e.length, o = Ba ? Ba(n) : new e.constructor(n);
  return e.copy(o), o;
}
function av(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = 0, l = []; ++n < o; ) {
    var a = e[n];
    t(a, n, e) && (l[r++] = a);
  }
  return l;
}
function sv() {
  return [];
}
var iv = Object.prototype, uv = iv.propertyIsEnumerable, za = Object.getOwnPropertySymbols, cv = za ? function(e) {
  return e == null ? [] : (e = Object(e), av(za(e), function(t) {
    return uv.call(e, t);
  }));
} : sv;
const dv = cv;
function fv(e, t, n) {
  var o = t(e);
  return kt(e) ? o : bi(o, n(e));
}
function Fa(e) {
  return fv(e, Ml, dv);
}
var pv = Wn(Ut, "DataView");
const nl = pv;
var vv = Wn(Ut, "Promise");
const ol = vv;
var hv = Wn(Ut, "Set");
const rl = hv;
var Ha = "[object Map]", gv = "[object Object]", Da = "[object Promise]", Va = "[object Set]", Wa = "[object WeakMap]", Ka = "[object DataView]", mv = Vn(nl), bv = Vn(ko), yv = Vn(ol), wv = Vn(rl), Cv = Vn(tl), An = Dn;
(nl && An(new nl(new ArrayBuffer(1))) != Ka || ko && An(new ko()) != Ha || ol && An(ol.resolve()) != Da || rl && An(new rl()) != Va || tl && An(new tl()) != Wa) && (An = function(e) {
  var t = Dn(e), n = t == gv ? e.constructor : void 0, o = n ? Vn(n) : "";
  if (o)
    switch (o) {
      case mv:
        return Ka;
      case bv:
        return Ha;
      case yv:
        return Da;
      case wv:
        return Va;
      case Cv:
        return Wa;
    }
  return t;
});
const ja = An;
var Sv = Ut.Uint8Array;
const cr = Sv;
function _v(e) {
  var t = new e.constructor(e.byteLength);
  return new cr(t).set(new cr(e)), t;
}
function Ev(e, t) {
  var n = t ? _v(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
function $v(e) {
  return typeof e.constructor == "function" && !Nl(e) ? Hd(yi(e)) : {};
}
var Tv = "__lodash_hash_undefined__";
function Ov(e) {
  return this.__data__.set(e, Tv), this;
}
function kv(e) {
  return this.__data__.has(e);
}
function dr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new dn(); ++t < n; )
    this.add(e[t]);
}
dr.prototype.add = dr.prototype.push = Ov;
dr.prototype.has = kv;
function xv(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Pv(e, t) {
  return e.has(t);
}
var Av = 1, Iv = 2;
function Si(e, t, n, o, r, l) {
  var a = n & Av, s = e.length, i = t.length;
  if (s != i && !(a && i > s))
    return !1;
  var u = l.get(e), f = l.get(t);
  if (u && f)
    return u == t && f == e;
  var d = -1, v = !0, m = n & Iv ? new dr() : void 0;
  for (l.set(e, t), l.set(t, e); ++d < s; ) {
    var p = e[d], g = t[d];
    if (o)
      var y = a ? o(g, p, d, t, e, l) : o(p, g, d, e, t, l);
    if (y !== void 0) {
      if (y)
        continue;
      v = !1;
      break;
    }
    if (m) {
      if (!xv(t, function(h, w) {
        if (!Pv(m, w) && (p === h || r(p, h, n, o, l)))
          return m.push(w);
      })) {
        v = !1;
        break;
      }
    } else if (!(p === g || r(p, g, n, o, l))) {
      v = !1;
      break;
    }
  }
  return l.delete(e), l.delete(t), v;
}
function Lv(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, r) {
    n[++t] = [r, o];
  }), n;
}
function Nv(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var Rv = 1, Mv = 2, Bv = "[object Boolean]", zv = "[object Date]", Fv = "[object Error]", Hv = "[object Map]", Dv = "[object Number]", Vv = "[object RegExp]", Wv = "[object Set]", Kv = "[object String]", jv = "[object Symbol]", Uv = "[object ArrayBuffer]", qv = "[object DataView]", Ua = Qt ? Qt.prototype : void 0, Vr = Ua ? Ua.valueOf : void 0;
function Gv(e, t, n, o, r, l, a) {
  switch (n) {
    case qv:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Uv:
      return !(e.byteLength != t.byteLength || !l(new cr(e), new cr(t)));
    case Bv:
    case zv:
    case Dv:
      return Ro(+e, +t);
    case Fv:
      return e.name == t.name && e.message == t.message;
    case Vv:
    case Kv:
      return e == t + "";
    case Hv:
      var s = Lv;
    case Wv:
      var i = o & Rv;
      if (s || (s = Nv), e.size != t.size && !i)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      o |= Mv, a.set(e, t);
      var f = Si(s(e), s(t), o, r, l, a);
      return a.delete(e), f;
    case jv:
      if (Vr)
        return Vr.call(e) == Vr.call(t);
  }
  return !1;
}
var Yv = 1, Xv = Object.prototype, Zv = Xv.hasOwnProperty;
function Jv(e, t, n, o, r, l) {
  var a = n & Yv, s = Fa(e), i = s.length, u = Fa(t), f = u.length;
  if (i != f && !a)
    return !1;
  for (var d = i; d--; ) {
    var v = s[d];
    if (!(a ? v in t : Zv.call(t, v)))
      return !1;
  }
  var m = l.get(e), p = l.get(t);
  if (m && p)
    return m == t && p == e;
  var g = !0;
  l.set(e, t), l.set(t, e);
  for (var y = a; ++d < i; ) {
    v = s[d];
    var h = e[v], w = t[v];
    if (o)
      var C = a ? o(w, h, v, t, e, l) : o(h, w, v, e, t, l);
    if (!(C === void 0 ? h === w || r(h, w, n, o, l) : C)) {
      g = !1;
      break;
    }
    y || (y = v == "constructor");
  }
  if (g && !y) {
    var b = e.constructor, $ = t.constructor;
    b != $ && "constructor" in e && "constructor" in t && !(typeof b == "function" && b instanceof b && typeof $ == "function" && $ instanceof $) && (g = !1);
  }
  return l.delete(e), l.delete(t), g;
}
var Qv = 1, qa = "[object Arguments]", Ga = "[object Array]", Wo = "[object Object]", eh = Object.prototype, Ya = eh.hasOwnProperty;
function th(e, t, n, o, r, l) {
  var a = kt(e), s = kt(t), i = a ? Ga : ja(e), u = s ? Ga : ja(t);
  i = i == qa ? Wo : i, u = u == qa ? Wo : u;
  var f = i == Wo, d = u == Wo, v = i == u;
  if (v && ur(e)) {
    if (!ur(t))
      return !1;
    a = !0, f = !1;
  }
  if (v && !f)
    return l || (l = new Xt()), a || Rl(e) ? Si(e, t, n, o, r, l) : Gv(e, t, i, n, o, r, l);
  if (!(n & Qv)) {
    var m = f && Ya.call(e, "__wrapped__"), p = d && Ya.call(t, "__wrapped__");
    if (m || p) {
      var g = m ? e.value() : e, y = p ? t.value() : t;
      return l || (l = new Xt()), r(g, y, n, o, l);
    }
  }
  return v ? (l || (l = new Xt()), Jv(e, t, n, o, r, l)) : !1;
}
function Tr(e, t, n, o, r) {
  return e === t ? !0 : e == null || t == null || !yn(e) && !yn(t) ? e !== e && t !== t : th(e, t, n, o, Tr, r);
}
var nh = 1, oh = 2;
function rh(e, t, n, o) {
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
      var d = new Xt();
      if (o)
        var v = o(u, f, i, e, t, d);
      if (!(v === void 0 ? Tr(f, u, nh | oh, o, d) : v))
        return !1;
    }
  }
  return !0;
}
function _i(e) {
  return e === e && !xt(e);
}
function lh(e) {
  for (var t = Ml(e), n = t.length; n--; ) {
    var o = t[n], r = e[o];
    t[n] = [o, r, _i(r)];
  }
  return t;
}
function Ei(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function ah(e) {
  var t = lh(e);
  return t.length == 1 && t[0][2] ? Ei(t[0][0], t[0][1]) : function(n) {
    return n === e || rh(n, e, t);
  };
}
function sh(e, t) {
  return e != null && t in Object(e);
}
function ih(e, t, n) {
  t = $r(t, e);
  for (var o = -1, r = t.length, l = !1; ++o < r; ) {
    var a = Mo(t[o]);
    if (!(l = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return l || ++o != r ? l : (r = e == null ? 0 : e.length, !!r && Ll(r) && Sr(a, r) && (kt(e) || To(e)));
}
function $i(e, t) {
  return e != null && ih(e, t, sh);
}
var uh = 1, ch = 2;
function dh(e, t) {
  return Bl(e) && _i(t) ? Ei(Mo(e), t) : function(n) {
    var o = lt(n, e);
    return o === void 0 && o === t ? $i(n, e) : Tr(t, o, uh | ch);
  };
}
function fh(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function ph(e) {
  return function(t) {
    return Fl(t, e);
  };
}
function vh(e) {
  return Bl(e) ? fh(Mo(e)) : ph(e);
}
function Ti(e) {
  return typeof e == "function" ? e : e == null ? Pl : typeof e == "object" ? kt(e) ? dh(e[0], e[1]) : ah(e) : vh(e);
}
function hh(e) {
  return function(t, n, o) {
    for (var r = -1, l = Object(t), a = o(t), s = a.length; s--; ) {
      var i = a[e ? s : ++r];
      if (n(l[i], i, l) === !1)
        break;
    }
    return t;
  };
}
var gh = hh();
const Oi = gh;
function mh(e, t) {
  return e && Oi(e, t, Ml);
}
function bh(e, t) {
  return function(n, o) {
    if (n == null)
      return n;
    if (!co(n))
      return e(n, o);
    for (var r = n.length, l = t ? r : -1, a = Object(n); (t ? l-- : ++l < r) && o(a[l], l, a) !== !1; )
      ;
    return n;
  };
}
var yh = bh(mh);
const wh = yh;
var Ch = function() {
  return Ut.Date.now();
};
const Wr = Ch;
var Sh = "Expected a function", _h = Math.max, Eh = Math.min;
function Qn(e, t, n) {
  var o, r, l, a, s, i, u = 0, f = !1, d = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(Sh);
  t = el(t) || 0, xt(n) && (f = !!n.leading, d = "maxWait" in n, l = d ? _h(el(n.maxWait) || 0, t) : l, v = "trailing" in n ? !!n.trailing : v);
  function m(O) {
    var _ = o, E = r;
    return o = r = void 0, u = O, a = e.apply(E, _), a;
  }
  function p(O) {
    return u = O, s = setTimeout(h, t), f ? m(O) : a;
  }
  function g(O) {
    var _ = O - i, E = O - u, A = t - _;
    return d ? Eh(A, l - E) : A;
  }
  function y(O) {
    var _ = O - i, E = O - u;
    return i === void 0 || _ >= t || _ < 0 || d && E >= l;
  }
  function h() {
    var O = Wr();
    if (y(O))
      return w(O);
    s = setTimeout(h, g(O));
  }
  function w(O) {
    return s = void 0, v && o ? m(O) : (o = r = void 0, a);
  }
  function C() {
    s !== void 0 && clearTimeout(s), u = 0, o = i = r = s = void 0;
  }
  function b() {
    return s === void 0 ? a : w(Wr());
  }
  function $() {
    var O = Wr(), _ = y(O);
    if (o = arguments, r = this, i = O, _) {
      if (s === void 0)
        return p(i);
      if (d)
        return clearTimeout(s), s = setTimeout(h, t), m(i);
    }
    return s === void 0 && (s = setTimeout(h, t)), a;
  }
  return $.cancel = C, $.flush = b, $;
}
function ll(e, t, n) {
  (n !== void 0 && !Ro(e[t], n) || n === void 0 && !(t in e)) && Il(e, t, n);
}
function $h(e) {
  return yn(e) && co(e);
}
function al(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function Th(e) {
  return of(e, mi(e));
}
function Oh(e, t, n, o, r, l, a) {
  var s = al(e, n), i = al(t, n), u = a.get(i);
  if (u) {
    ll(e, n, u);
    return;
  }
  var f = l ? l(s, i, n + "", e, t, a) : void 0, d = f === void 0;
  if (d) {
    var v = kt(i), m = !v && ur(i), p = !v && !m && Rl(i);
    f = i, v || m || p ? kt(s) ? f = s : $h(s) ? f = Vd(s) : m ? (d = !1, f = lv(i, !0)) : p ? (d = !1, f = Ev(i, !0)) : f = [] : Zp(i) || To(i) ? (f = s, To(s) ? f = Th(s) : (!xt(s) || Al(s)) && (f = $v(i))) : d = !1;
  }
  d && (a.set(i, f), r(f, i, o, l, a), a.delete(i)), ll(e, n, f);
}
function ki(e, t, n, o, r) {
  e !== t && Oi(t, function(l, a) {
    if (r || (r = new Xt()), xt(l))
      Oh(e, t, a, n, ki, o, r);
    else {
      var s = o ? o(al(e, a), l, a + "", e, t, r) : void 0;
      s === void 0 && (s = l), ll(e, a, s);
    }
  }, mi);
}
var kh = Math.max, xh = Math.min;
function Ph(e, t, n) {
  var o = e == null ? 0 : e.length;
  if (!o)
    return -1;
  var r = o - 1;
  return n !== void 0 && (r = wd(n), r = n < 0 ? kh(o + r, 0) : xh(r, o - 1)), Jd(e, Ti(t), r, !0);
}
function Ah(e, t) {
  var n = -1, o = co(e) ? Array(e.length) : [];
  return wh(e, function(r, l, a) {
    o[++n] = t(r, l, a);
  }), o;
}
function Ih(e, t) {
  var n = kt(e) ? si : Ah;
  return n(e, Ti(t));
}
function Lh(e, t) {
  return Hl(Ih(e, t), 1);
}
function fr(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var r = e[t];
    o[r[0]] = r[1];
  }
  return o;
}
function pr(e, t) {
  return Tr(e, t);
}
function Bo(e) {
  return e == null;
}
function xi(e) {
  return e === void 0;
}
var Nh = sf(function(e, t, n) {
  ki(e, t, n);
});
const Pi = Nh;
function Ai(e, t, n, o) {
  if (!xt(e))
    return e;
  t = $r(t, e);
  for (var r = -1, l = t.length, a = l - 1, s = e; s != null && ++r < l; ) {
    var i = Mo(t[r]), u = n;
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return e;
    if (r != a) {
      var f = s[i];
      u = o ? o(f, i, s) : void 0, u === void 0 && (u = xt(f) ? f : Sr(t[r + 1]) ? [] : {});
    }
    ci(s, i, u), s = s[i];
  }
  return e;
}
function Rh(e, t, n) {
  for (var o = -1, r = t.length, l = {}; ++o < r; ) {
    var a = t[o], s = Fl(e, a);
    n(s, a) && Ai(l, $r(a, e), s);
  }
  return l;
}
function Mh(e, t) {
  return Rh(e, t, function(n, o) {
    return $i(e, o);
  });
}
var Bh = Kp(function(e, t) {
  return e == null ? {} : Mh(e, t);
});
const zh = Bh;
function Fh(e, t, n) {
  return e == null ? e : Ai(e, t, n);
}
const eo = (e) => e === void 0, bt = (e) => typeof e == "boolean", xe = (e) => typeof e == "number", wn = (e) => typeof Element > "u" ? !1 : e instanceof Element, Hh = (e) => Ue(e) ? !Number.isNaN(Number(e)) : !1, Dh = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Xa = (e) => Object.keys(e), Vh = (e, t, n) => ({
  get value() {
    return lt(e, t, n);
  },
  set value(o) {
    Fh(e, t, o);
  }
});
class Ii extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Or(e, t) {
  throw new Ii(`[${e}] ${t}`);
}
function Ve(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = Ue(e) ? new Ii(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const Wh = "utils/dom/style", Li = (e = "") => e.split(" ").filter((t) => !!t.trim()), Xn = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, xo = (e, t) => {
  !e || !t.trim() || e.classList.add(...Li(t));
}, Cn = (e, t) => {
  !e || !t.trim() || e.classList.remove(...Li(t));
}, qn = (e, t) => {
  var n;
  if (!ke || !e || !t)
    return "";
  let o = Uc(t);
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
function Sn(e, t = "px") {
  if (!e)
    return "";
  if (xe(e) || Hh(e))
    return `${e}${t}`;
  if (Ue(e))
    return e;
  Ve(Wh, "binding value must be a string or number");
}
let Ko;
const Kh = (e) => {
  var t;
  if (!ke)
    return 0;
  if (Ko !== void 0)
    return Ko;
  const n = document.createElement("div");
  n.className = `${e}-scrollbar__wrap`, n.style.visibility = "hidden", n.style.width = "100px", n.style.position = "absolute", n.style.top = "-9999px", document.body.appendChild(n);
  const o = n.offsetWidth;
  n.style.overflow = "scroll";
  const r = document.createElement("div");
  r.style.width = "100%", n.appendChild(r);
  const l = r.offsetWidth;
  return (t = n.parentNode) == null || t.removeChild(n), Ko = o - l, Ko;
};
function jh(e, t) {
  if (!ke)
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
/*! Element Plus Icons Vue v2.1.0 */
var qe = (e, t) => {
  let n = e.__vccOpts || e;
  for (let [o, r] of t)
    n[o] = r;
  return n;
}, Uh = {
  name: "ArrowDown"
}, qh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Gh = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
  },
  null,
  -1
  /* HOISTED */
), Yh = [
  Gh
];
function Xh(e, t, n, o, r, l) {
  return T(), L("svg", qh, Yh);
}
var Ni = /* @__PURE__ */ qe(Uh, [["render", Xh], ["__file", "arrow-down.vue"]]), Zh = {
  name: "ArrowLeft"
}, Jh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Qh = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
  },
  null,
  -1
  /* HOISTED */
), eg = [
  Qh
];
function tg(e, t, n, o, r, l) {
  return T(), L("svg", Jh, eg);
}
var ng = /* @__PURE__ */ qe(Zh, [["render", tg], ["__file", "arrow-left.vue"]]), og = {
  name: "ArrowRight"
}, rg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, lg = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
  },
  null,
  -1
  /* HOISTED */
), ag = [
  lg
];
function sg(e, t, n, o, r, l) {
  return T(), L("svg", rg, ag);
}
var Dl = /* @__PURE__ */ qe(og, [["render", sg], ["__file", "arrow-right.vue"]]), ig = {
  name: "ArrowUp"
}, ug = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, cg = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
  },
  null,
  -1
  /* HOISTED */
), dg = [
  cg
];
function fg(e, t, n, o, r, l) {
  return T(), L("svg", ug, dg);
}
var pg = /* @__PURE__ */ qe(ig, [["render", fg], ["__file", "arrow-up.vue"]]), vg = {
  name: "CircleCheck"
}, hg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, gg = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), mg = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
  },
  null,
  -1
  /* HOISTED */
), bg = [
  gg,
  mg
];
function yg(e, t, n, o, r, l) {
  return T(), L("svg", hg, bg);
}
var wg = /* @__PURE__ */ qe(vg, [["render", yg], ["__file", "circle-check.vue"]]), Cg = {
  name: "CircleCloseFilled"
}, Sg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _g = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"
  },
  null,
  -1
  /* HOISTED */
), Eg = [
  _g
];
function $g(e, t, n, o, r, l) {
  return T(), L("svg", Sg, Eg);
}
var Tg = /* @__PURE__ */ qe(Cg, [["render", $g], ["__file", "circle-close-filled.vue"]]), Og = {
  name: "CircleClose"
}, kg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, xg = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
  },
  null,
  -1
  /* HOISTED */
), Pg = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), Ag = [
  xg,
  Pg
];
function Ig(e, t, n, o, r, l) {
  return T(), L("svg", kg, Ag);
}
var Vl = /* @__PURE__ */ qe(Og, [["render", Ig], ["__file", "circle-close.vue"]]), Lg = {
  name: "Close"
}, Ng = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Rg = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
  },
  null,
  -1
  /* HOISTED */
), Mg = [
  Rg
];
function Bg(e, t, n, o, r, l) {
  return T(), L("svg", Ng, Mg);
}
var vr = /* @__PURE__ */ qe(Lg, [["render", Bg], ["__file", "close.vue"]]), zg = {
  name: "DArrowLeft"
}, Fg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Hg = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
  },
  null,
  -1
  /* HOISTED */
), Dg = [
  Hg
];
function Vg(e, t, n, o, r, l) {
  return T(), L("svg", Fg, Dg);
}
var Wg = /* @__PURE__ */ qe(zg, [["render", Vg], ["__file", "d-arrow-left.vue"]]), Kg = {
  name: "DArrowRight"
}, jg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ug = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688zm-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
  },
  null,
  -1
  /* HOISTED */
), qg = [
  Ug
];
function Gg(e, t, n, o, r, l) {
  return T(), L("svg", jg, qg);
}
var Yg = /* @__PURE__ */ qe(Kg, [["render", Gg], ["__file", "d-arrow-right.vue"]]), Xg = {
  name: "Hide"
}, Zg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Jg = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
  },
  null,
  -1
  /* HOISTED */
), Qg = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
  },
  null,
  -1
  /* HOISTED */
), em = [
  Jg,
  Qg
];
function tm(e, t, n, o, r, l) {
  return T(), L("svg", Zg, em);
}
var nm = /* @__PURE__ */ qe(Xg, [["render", tm], ["__file", "hide.vue"]]), om = {
  name: "InfoFilled"
}, rm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, lm = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
  },
  null,
  -1
  /* HOISTED */
), am = [
  lm
];
function sm(e, t, n, o, r, l) {
  return T(), L("svg", rm, am);
}
var im = /* @__PURE__ */ qe(om, [["render", sm], ["__file", "info-filled.vue"]]), um = {
  name: "Loading"
}, cm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, dm = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
  },
  null,
  -1
  /* HOISTED */
), fm = [
  dm
];
function pm(e, t, n, o, r, l) {
  return T(), L("svg", cm, fm);
}
var kr = /* @__PURE__ */ qe(um, [["render", pm], ["__file", "loading.vue"]]), vm = {
  name: "MoreFilled"
}, hm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, gm = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z"
  },
  null,
  -1
  /* HOISTED */
), mm = [
  gm
];
function bm(e, t, n, o, r, l) {
  return T(), L("svg", hm, mm);
}
var Za = /* @__PURE__ */ qe(vm, [["render", bm], ["__file", "more-filled.vue"]]), ym = {
  name: "Operation"
}, wm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Cm = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M389.44 768a96.064 96.064 0 0 1 181.12 0H896v64H570.56a96.064 96.064 0 0 1-181.12 0H128v-64h261.44zm192-288a96.064 96.064 0 0 1 181.12 0H896v64H762.56a96.064 96.064 0 0 1-181.12 0H128v-64h453.44zm-320-288a96.064 96.064 0 0 1 181.12 0H896v64H442.56a96.064 96.064 0 0 1-181.12 0H128v-64h133.44z"
  },
  null,
  -1
  /* HOISTED */
), Sm = [
  Cm
];
function _m(e, t, n, o, r, l) {
  return T(), L("svg", wm, Sm);
}
var Em = /* @__PURE__ */ qe(ym, [["render", _m], ["__file", "operation.vue"]]), $m = {
  name: "Refresh"
}, Tm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Om = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
  },
  null,
  -1
  /* HOISTED */
), km = [
  Om
];
function xm(e, t, n, o, r, l) {
  return T(), L("svg", Tm, km);
}
var Pm = /* @__PURE__ */ qe($m, [["render", xm], ["__file", "refresh.vue"]]), Am = {
  name: "Setting"
}, Im = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Lm = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"
  },
  null,
  -1
  /* HOISTED */
), Nm = [
  Lm
];
function Rm(e, t, n, o, r, l) {
  return T(), L("svg", Im, Nm);
}
var Mm = /* @__PURE__ */ qe(Am, [["render", Rm], ["__file", "setting.vue"]]), Bm = {
  name: "SuccessFilled"
}, zm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Fm = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
  },
  null,
  -1
  /* HOISTED */
), Hm = [
  Fm
];
function Dm(e, t, n, o, r, l) {
  return T(), L("svg", zm, Hm);
}
var Vm = /* @__PURE__ */ qe(Bm, [["render", Dm], ["__file", "success-filled.vue"]]), Wm = {
  name: "View"
}, Km = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, jm = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
  },
  null,
  -1
  /* HOISTED */
), Um = [
  jm
];
function qm(e, t, n, o, r, l) {
  return T(), L("svg", Km, Um);
}
var Gm = /* @__PURE__ */ qe(Wm, [["render", qm], ["__file", "view.vue"]]), Ym = {
  name: "WarningFilled"
}, Xm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Zm = /* @__PURE__ */ R(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
  },
  null,
  -1
  /* HOISTED */
), Jm = [
  Zm
];
function Qm(e, t, n, o, r, l) {
  return T(), L("svg", Xm, Jm);
}
var e0 = /* @__PURE__ */ qe(Ym, [["render", Qm], ["__file", "warning-filled.vue"]]);
const Ri = "__epPropKey", de = (e) => e, t0 = (e) => Qe(e) && !!e[Ri], xr = (e, t) => {
  if (!Qe(e) || t0(e))
    return e;
  const { values: n, required: o, default: r, type: l, validator: a } = e, i = {
    type: l,
    required: !!o,
    validator: n || a ? (u) => {
      let f = !1, d = [];
      if (n && (d = Array.from(n), zn(e, "default") && d.push(r), f || (f = d.includes(u))), a && (f || (f = a(u))), !f && d.length > 0) {
        const v = [...new Set(d)].map((m) => JSON.stringify(m)).join(", ");
        bc(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${v}], got value ${JSON.stringify(u)}.`);
      }
      return f;
    } : void 0,
    [Ri]: !0
  };
  return zn(e, "default") && (i.default = r), i;
}, ye = (e) => fr(Object.entries(e).map(([t, n]) => [
  t,
  xr(n, t)
])), Je = de([
  String,
  Object,
  Function
]), n0 = {
  Close: vr
}, Ja = {
  success: Vm,
  warning: e0,
  error: Tg,
  info: im
}, Mi = {
  validating: kr,
  success: wg,
  error: Vl
}, tt = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t ?? {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, o0 = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), r0 = (e, t) => (e.install = (n) => {
  n.directive(t, e);
}, e), Ft = (e) => (e.install = ln, e), an = {
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
}, Fe = "update:modelValue", to = "change", sl = "input", zo = ["", "default", "small", "large"], l0 = {
  large: 40,
  default: 32,
  small: 24
}, a0 = (e) => l0[e || "default"], Bi = (e) => ["", ...zo].includes(e);
var Qo = /* @__PURE__ */ ((e) => (e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL", e))(Qo || {});
const zi = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e), s0 = (e) => ke ? window.requestAnimationFrame(e) : setTimeout(e, 16), Wl = (e) => e, i0 = ["class", "style"], u0 = /^on[A-Z]/, c0 = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = S(() => ((n == null ? void 0 : n.value) || []).concat(i0)), r = $e();
  return r ? S(() => {
    var l;
    return fr(Object.entries((l = r.proxy) == null ? void 0 : l.$attrs).filter(([a]) => !o.value.includes(a) && !(t && u0.test(a))));
  }) : (Ve("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), S(() => ({})));
}, Po = ({ from: e, replacement: t, scope: n, version: o, ref: r, type: l = "API" }, a) => {
  J(() => c(a), (s) => {
    s && Ve(n, `[${l}] ${e} is about to be deprecated in version ${o}, please use ${t} instead.
For more detail, please visit: ${r}
`);
  }, {
    immediate: !0
  });
};
var d0 = {
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
const f0 = (e) => (t, n) => p0(t, n, c(e)), p0 = (e, t, n) => lt(n, e, e).replace(/\{(\w+)\}/g, (o, r) => {
  var l;
  return `${(l = t == null ? void 0 : t[r]) != null ? l : `{${r}}`}`;
}), v0 = (e) => {
  const t = S(() => c(e).name), n = Jt(e) ? e : k(e);
  return {
    lang: t,
    locale: n,
    t: f0(e)
  };
}, Fi = Symbol("localeContextKey"), ft = (e) => {
  const t = e || he(Fi, k());
  return v0(S(() => t.value || d0));
};
let h0;
function g0(e, t = h0) {
  t && t.active && t.effects.push(e);
}
const Qa = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Hi = (e) => (e.w & _n) > 0, Di = (e) => (e.n & _n) > 0, m0 = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= _n;
}, b0 = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      Hi(r) && !Di(r) ? r.delete(e) : t[n++] = r, r.w &= ~_n, r.n &= ~_n;
    }
    t.length = n;
  }
};
let yo = 0, _n = 1;
const il = 30;
let Ot;
Symbol(process.env.NODE_ENV !== "production" ? "iterate" : "");
Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class y0 {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, g0(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = Ot, n = er;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = Ot, Ot = this, er = !0, _n = 1 << ++yo, yo <= il ? m0(this) : es(this), this.fn();
    } finally {
      yo <= il && b0(this), _n = 1 << --yo, Ot = this.parent, er = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    Ot === this ? this.deferStop = !0 : this.active && (es(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function es(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let er = !0;
function ts(e, t) {
  let n = !1;
  yo <= il ? Di(e) || (e.n |= _n, n = !Hi(e)) : n = !e.has(Ot), n && (e.add(Ot), Ot.deps.push(e), process.env.NODE_ENV !== "production" && Ot.onTrack && Ot.onTrack(
    oi(
      {
        effect: Ot
      },
      t
    )
  ));
}
function ns(e, t) {
  const n = bn(e) ? e : [...e];
  for (const o of n)
    o.computed && os(o, t);
  for (const o of n)
    o.computed || os(o, t);
}
function os(e, t) {
  (e !== Ot || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(oi({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Vc)
);
function Pr(e) {
  const t = e && e.__v_raw;
  return t ? Pr(t) : e;
}
function w0(e) {
  er && Ot && (e = Pr(e), process.env.NODE_ENV !== "production" ? ts(e.dep || (e.dep = Qa()), {
    target: e,
    type: "get",
    key: "value"
  }) : ts(e.dep || (e.dep = Qa())));
}
function C0(e, t) {
  e = Pr(e);
  const n = e.dep;
  n && (process.env.NODE_ENV !== "production" ? ns(n, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : ns(n));
}
class S0 {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new y0(t, () => {
      this._dirty || (this._dirty = !0, C0(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = Pr(this);
    return w0(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
function _0(e, t, n = !1) {
  let o, r;
  const l = at(e);
  l ? (o = e, r = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : ln) : (o = e.get, r = e.set);
  const a = new S0(o, r, l || !r, n);
  return process.env.NODE_ENV !== "production" && t && !n && (a.effect.onTrack = t.onTrack, a.effect.onTrigger = t.onTrigger), a;
}
const Co = "el", E0 = "is-", Pn = (e, t, n, o, r) => {
  let l = `${e}-${t}`;
  return n && (l += `-${n}`), o && (l += `__${o}`), r && (l += `--${r}`), l;
}, Vi = Symbol("namespaceContextKey"), Kl = (e) => {
  const t = e || ($e() ? he(Vi, k(Co)) : k(Co));
  return S(() => c(t) || Co);
}, oe = (e, t) => {
  const n = Kl(t);
  return {
    namespace: n,
    b: (g = "") => Pn(n.value, e, g, "", ""),
    e: (g) => g ? Pn(n.value, e, "", g, "") : "",
    m: (g) => g ? Pn(n.value, e, "", "", g) : "",
    be: (g, y) => g && y ? Pn(n.value, e, g, y, "") : "",
    em: (g, y) => g && y ? Pn(n.value, e, "", g, y) : "",
    bm: (g, y) => g && y ? Pn(n.value, e, g, "", y) : "",
    bem: (g, y, h) => g && y && h ? Pn(n.value, e, g, y, h) : "",
    is: (g, ...y) => {
      const h = y.length >= 1 ? y[0] : !0;
      return g && h ? `${E0}${g}` : "";
    },
    cssVar: (g) => {
      const y = {};
      for (const h in g)
        g[h] && (y[`--${n.value}-${h}`] = g[h]);
      return y;
    },
    cssVarName: (g) => `--${n.value}-${g}`,
    cssVarBlock: (g) => {
      const y = {};
      for (const h in g)
        g[h] && (y[`--${n.value}-${e}-${h}`] = g[h]);
      return y;
    },
    cssVarBlockName: (g) => `--${n.value}-${e}-${g}`
  };
}, $0 = (e, t = {}) => {
  Jt(e) || Or("[useLockscreen]", "You need to pass a ref param to this function");
  const n = t.ns || oe("popup"), o = _0(() => n.bm("parent", "hidden"));
  if (!ke || Xn(document.body, o.value))
    return;
  let r = 0, l = !1, a = "0";
  const s = () => {
    setTimeout(() => {
      Cn(document == null ? void 0 : document.body, o.value), l && document && (document.body.style.width = a);
    }, 200);
  };
  J(e, (i) => {
    if (!i) {
      s();
      return;
    }
    l = !Xn(document.body, o.value), l && (a = document.body.style.width), r = Kh(n.namespace.value);
    const u = document.documentElement.clientHeight < document.body.scrollHeight, f = qn(document.body, "overflowY");
    r > 0 && (u || f === "scroll") && l && (document.body.style.width = `calc(100% - ${r}px)`), xo(document.body, o.value);
  }), Us(() => s());
}, T0 = xr({
  type: de(Boolean),
  default: null
}), O0 = xr({
  type: de(Function)
}), Wi = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], r = {
    [e]: T0,
    [n]: O0
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
      const v = $e(), { emit: m } = v, p = v.props, g = S(() => at(p[n])), y = S(() => p[e] === null), h = (_) => {
        a.value !== !0 && (a.value = !0, s && (s.value = _), at(f) && f(_));
      }, w = (_) => {
        a.value !== !1 && (a.value = !1, s && (s.value = _), at(d) && d(_));
      }, C = (_) => {
        if (p.disabled === !0 || at(u) && !u())
          return;
        const E = g.value && ke;
        E && m(t, !0), (y.value || !E) && h(_);
      }, b = (_) => {
        if (p.disabled === !0 || !ke)
          return;
        const E = g.value && ke;
        E && m(t, !1), (y.value || !E) && w(_);
      }, $ = (_) => {
        bt(_) && (p.disabled && _ ? g.value && m(t, !1) : a.value !== _ && (_ ? h() : w()));
      }, O = () => {
        a.value ? b() : C();
      };
      return J(() => p[e], $), i && v.appContext.config.globalProperties.$route !== void 0 && J(() => ({
        ...v.proxy.$route
      }), () => {
        i.value && a.value && b();
      }), Ie(() => {
        $(p[e]);
      }), {
        hide: b,
        show: C,
        toggle: O,
        hasUpdateHandler: g
      };
    },
    useModelToggleProps: r,
    useModelToggleEmits: o
  };
};
Wi("modelValue");
const Ki = (e) => {
  const t = $e();
  return S(() => {
    var n, o;
    return (o = (n = t == null ? void 0 : t.proxy) == null ? void 0 : n.$props) == null ? void 0 : o[e];
  });
};
var yt = "top", Mt = "bottom", Bt = "right", wt = "left", jl = "auto", Fo = [yt, Mt, Bt, wt], no = "start", Ao = "end", k0 = "clippingParents", ji = "viewport", bo = "popper", x0 = "reference", rs = Fo.reduce(function(e, t) {
  return e.concat([t + "-" + no, t + "-" + Ao]);
}, []), Ar = [].concat(Fo, [jl]).reduce(function(e, t) {
  return e.concat([t, t + "-" + no, t + "-" + Ao]);
}, []), P0 = "beforeRead", A0 = "read", I0 = "afterRead", L0 = "beforeMain", N0 = "main", R0 = "afterMain", M0 = "beforeWrite", B0 = "write", z0 = "afterWrite", F0 = [P0, A0, I0, L0, N0, R0, M0, B0, z0];
function en(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function qt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function oo(e) {
  var t = qt(e).Element;
  return e instanceof t || e instanceof Element;
}
function Nt(e) {
  var t = qt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ul(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = qt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function H0(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, l = t.elements[n];
    !Nt(l) || !en(l) || (Object.assign(l.style, o), Object.keys(r).forEach(function(a) {
      var s = r[a];
      s === !1 ? l.removeAttribute(a) : l.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function D0(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var r = t.elements[o], l = t.attributes[o] || {}, a = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), s = a.reduce(function(i, u) {
        return i[u] = "", i;
      }, {});
      !Nt(r) || !en(r) || (Object.assign(r.style, s), Object.keys(l).forEach(function(i) {
        r.removeAttribute(i);
      }));
    });
  };
}
var Ui = { name: "applyStyles", enabled: !0, phase: "write", fn: H0, effect: D0, requires: ["computeStyles"] };
function Zt(e) {
  return e.split("-")[0];
}
var Bn = Math.max, hr = Math.min, ro = Math.round;
function lo(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), o = 1, r = 1;
  if (Nt(e) && t) {
    var l = e.offsetHeight, a = e.offsetWidth;
    a > 0 && (o = ro(n.width) / a || 1), l > 0 && (r = ro(n.height) / l || 1);
  }
  return { width: n.width / o, height: n.height / r, top: n.top / r, right: n.right / o, bottom: n.bottom / r, left: n.left / o, x: n.left / o, y: n.top / r };
}
function ql(e) {
  var t = lo(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function qi(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Ul(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function sn(e) {
  return qt(e).getComputedStyle(e);
}
function V0(e) {
  return ["table", "td", "th"].indexOf(en(e)) >= 0;
}
function Tn(e) {
  return ((oo(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ir(e) {
  return en(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ul(e) ? e.host : null) || Tn(e);
}
function ls(e) {
  return !Nt(e) || sn(e).position === "fixed" ? null : e.offsetParent;
}
function W0(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && Nt(e)) {
    var o = sn(e);
    if (o.position === "fixed")
      return null;
  }
  var r = Ir(e);
  for (Ul(r) && (r = r.host); Nt(r) && ["html", "body"].indexOf(en(r)) < 0; ) {
    var l = sn(r);
    if (l.transform !== "none" || l.perspective !== "none" || l.contain === "paint" || ["transform", "perspective"].indexOf(l.willChange) !== -1 || t && l.willChange === "filter" || t && l.filter && l.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function Ho(e) {
  for (var t = qt(e), n = ls(e); n && V0(n) && sn(n).position === "static"; )
    n = ls(n);
  return n && (en(n) === "html" || en(n) === "body" && sn(n).position === "static") ? t : n || W0(e) || t;
}
function Gl(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function So(e, t, n) {
  return Bn(e, hr(t, n));
}
function K0(e, t, n) {
  var o = So(e, t, n);
  return o > n ? n : o;
}
function Gi() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Yi(e) {
  return Object.assign({}, Gi(), e);
}
function Xi(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var j0 = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Yi(typeof e != "number" ? e : Xi(e, Fo));
};
function U0(e) {
  var t, n = e.state, o = e.name, r = e.options, l = n.elements.arrow, a = n.modifiersData.popperOffsets, s = Zt(n.placement), i = Gl(s), u = [wt, Bt].indexOf(s) >= 0, f = u ? "height" : "width";
  if (!(!l || !a)) {
    var d = j0(r.padding, n), v = ql(l), m = i === "y" ? yt : wt, p = i === "y" ? Mt : Bt, g = n.rects.reference[f] + n.rects.reference[i] - a[i] - n.rects.popper[f], y = a[i] - n.rects.reference[i], h = Ho(l), w = h ? i === "y" ? h.clientHeight || 0 : h.clientWidth || 0 : 0, C = g / 2 - y / 2, b = d[m], $ = w - v[f] - d[p], O = w / 2 - v[f] / 2 + C, _ = So(b, O, $), E = i;
    n.modifiersData[o] = (t = {}, t[E] = _, t.centerOffset = _ - O, t);
  }
}
function q0(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || !qi(t.elements.popper, r) || (t.elements.arrow = r));
}
var G0 = { name: "arrow", enabled: !0, phase: "main", fn: U0, effect: q0, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function ao(e) {
  return e.split("-")[1];
}
var Y0 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function X0(e) {
  var t = e.x, n = e.y, o = window, r = o.devicePixelRatio || 1;
  return { x: ro(t * r) / r || 0, y: ro(n * r) / r || 0 };
}
function as(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, l = e.variation, a = e.offsets, s = e.position, i = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, d = e.isFixed, v = a.x, m = v === void 0 ? 0 : v, p = a.y, g = p === void 0 ? 0 : p, y = typeof f == "function" ? f({ x: m, y: g }) : { x: m, y: g };
  m = y.x, g = y.y;
  var h = a.hasOwnProperty("x"), w = a.hasOwnProperty("y"), C = wt, b = yt, $ = window;
  if (u) {
    var O = Ho(n), _ = "clientHeight", E = "clientWidth";
    if (O === qt(n) && (O = Tn(n), sn(O).position !== "static" && s === "absolute" && (_ = "scrollHeight", E = "scrollWidth")), O = O, r === yt || (r === wt || r === Bt) && l === Ao) {
      b = Mt;
      var A = d && O === $ && $.visualViewport ? $.visualViewport.height : O[_];
      g -= A - o.height, g *= i ? 1 : -1;
    }
    if (r === wt || (r === yt || r === Mt) && l === Ao) {
      C = Bt;
      var F = d && O === $ && $.visualViewport ? $.visualViewport.width : O[E];
      m -= F - o.width, m *= i ? 1 : -1;
    }
  }
  var B = Object.assign({ position: s }, u && Y0), M = f === !0 ? X0({ x: m, y: g }) : { x: m, y: g };
  if (m = M.x, g = M.y, i) {
    var G;
    return Object.assign({}, B, (G = {}, G[b] = w ? "0" : "", G[C] = h ? "0" : "", G.transform = ($.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + g + "px)" : "translate3d(" + m + "px, " + g + "px, 0)", G));
  }
  return Object.assign({}, B, (t = {}, t[b] = w ? g + "px" : "", t[C] = h ? m + "px" : "", t.transform = "", t));
}
function Z0(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, l = n.adaptive, a = l === void 0 ? !0 : l, s = n.roundOffsets, i = s === void 0 ? !0 : s, u = { placement: Zt(t.placement), variation: ao(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, as(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: a, roundOffsets: i })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, as(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: i })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Zi = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Z0, data: {} }, jo = { passive: !0 };
function J0(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, l = r === void 0 ? !0 : r, a = o.resize, s = a === void 0 ? !0 : a, i = qt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return l && u.forEach(function(f) {
    f.addEventListener("scroll", n.update, jo);
  }), s && i.addEventListener("resize", n.update, jo), function() {
    l && u.forEach(function(f) {
      f.removeEventListener("scroll", n.update, jo);
    }), s && i.removeEventListener("resize", n.update, jo);
  };
}
var Ji = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: J0, data: {} }, Q0 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function tr(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Q0[t];
  });
}
var eb = { start: "end", end: "start" };
function ss(e) {
  return e.replace(/start|end/g, function(t) {
    return eb[t];
  });
}
function Yl(e) {
  var t = qt(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function Xl(e) {
  return lo(Tn(e)).left + Yl(e).scrollLeft;
}
function tb(e) {
  var t = qt(e), n = Tn(e), o = t.visualViewport, r = n.clientWidth, l = n.clientHeight, a = 0, s = 0;
  return o && (r = o.width, l = o.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = o.offsetLeft, s = o.offsetTop)), { width: r, height: l, x: a + Xl(e), y: s };
}
function nb(e) {
  var t, n = Tn(e), o = Yl(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, l = Bn(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = Bn(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), s = -o.scrollLeft + Xl(e), i = -o.scrollTop;
  return sn(r || n).direction === "rtl" && (s += Bn(n.clientWidth, r ? r.clientWidth : 0) - l), { width: l, height: a, x: s, y: i };
}
function Zl(e) {
  var t = sn(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function Qi(e) {
  return ["html", "body", "#document"].indexOf(en(e)) >= 0 ? e.ownerDocument.body : Nt(e) && Zl(e) ? e : Qi(Ir(e));
}
function _o(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Qi(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), l = qt(o), a = r ? [l].concat(l.visualViewport || [], Zl(o) ? o : []) : o, s = t.concat(a);
  return r ? s : s.concat(_o(Ir(a)));
}
function ul(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function ob(e) {
  var t = lo(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function is(e, t) {
  return t === ji ? ul(tb(e)) : oo(t) ? ob(t) : ul(nb(Tn(e)));
}
function rb(e) {
  var t = _o(Ir(e)), n = ["absolute", "fixed"].indexOf(sn(e).position) >= 0, o = n && Nt(e) ? Ho(e) : e;
  return oo(o) ? t.filter(function(r) {
    return oo(r) && qi(r, o) && en(r) !== "body";
  }) : [];
}
function lb(e, t, n) {
  var o = t === "clippingParents" ? rb(e) : [].concat(t), r = [].concat(o, [n]), l = r[0], a = r.reduce(function(s, i) {
    var u = is(e, i);
    return s.top = Bn(u.top, s.top), s.right = hr(u.right, s.right), s.bottom = hr(u.bottom, s.bottom), s.left = Bn(u.left, s.left), s;
  }, is(e, l));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function eu(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? Zt(o) : null, l = o ? ao(o) : null, a = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, i;
  switch (r) {
    case yt:
      i = { x: a, y: t.y - n.height };
      break;
    case Mt:
      i = { x: a, y: t.y + t.height };
      break;
    case Bt:
      i = { x: t.x + t.width, y: s };
      break;
    case wt:
      i = { x: t.x - n.width, y: s };
      break;
    default:
      i = { x: t.x, y: t.y };
  }
  var u = r ? Gl(r) : null;
  if (u != null) {
    var f = u === "y" ? "height" : "width";
    switch (l) {
      case no:
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
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, l = n.boundary, a = l === void 0 ? k0 : l, s = n.rootBoundary, i = s === void 0 ? ji : s, u = n.elementContext, f = u === void 0 ? bo : u, d = n.altBoundary, v = d === void 0 ? !1 : d, m = n.padding, p = m === void 0 ? 0 : m, g = Yi(typeof p != "number" ? p : Xi(p, Fo)), y = f === bo ? x0 : bo, h = e.rects.popper, w = e.elements[v ? y : f], C = lb(oo(w) ? w : w.contextElement || Tn(e.elements.popper), a, i), b = lo(e.elements.reference), $ = eu({ reference: b, element: h, strategy: "absolute", placement: r }), O = ul(Object.assign({}, h, $)), _ = f === bo ? O : b, E = { top: C.top - _.top + g.top, bottom: _.bottom - C.bottom + g.bottom, left: C.left - _.left + g.left, right: _.right - C.right + g.right }, A = e.modifiersData.offset;
  if (f === bo && A) {
    var F = A[r];
    Object.keys(E).forEach(function(B) {
      var M = [Bt, Mt].indexOf(B) >= 0 ? 1 : -1, G = [yt, Mt].indexOf(B) >= 0 ? "y" : "x";
      E[B] += F[G] * M;
    });
  }
  return E;
}
function ab(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, l = n.rootBoundary, a = n.padding, s = n.flipVariations, i = n.allowedAutoPlacements, u = i === void 0 ? Ar : i, f = ao(o), d = f ? s ? rs : rs.filter(function(p) {
    return ao(p) === f;
  }) : Fo, v = d.filter(function(p) {
    return u.indexOf(p) >= 0;
  });
  v.length === 0 && (v = d);
  var m = v.reduce(function(p, g) {
    return p[g] = Io(e, { placement: g, boundary: r, rootBoundary: l, padding: a })[Zt(g)], p;
  }, {});
  return Object.keys(m).sort(function(p, g) {
    return m[p] - m[g];
  });
}
function sb(e) {
  if (Zt(e) === jl)
    return [];
  var t = tr(e);
  return [ss(e), t, ss(t)];
}
function ib(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, l = r === void 0 ? !0 : r, a = n.altAxis, s = a === void 0 ? !0 : a, i = n.fallbackPlacements, u = n.padding, f = n.boundary, d = n.rootBoundary, v = n.altBoundary, m = n.flipVariations, p = m === void 0 ? !0 : m, g = n.allowedAutoPlacements, y = t.options.placement, h = Zt(y), w = h === y, C = i || (w || !p ? [tr(y)] : sb(y)), b = [y].concat(C).reduce(function(_e, Te) {
      return _e.concat(Zt(Te) === jl ? ab(t, { placement: Te, boundary: f, rootBoundary: d, padding: u, flipVariations: p, allowedAutoPlacements: g }) : Te);
    }, []), $ = t.rects.reference, O = t.rects.popper, _ = /* @__PURE__ */ new Map(), E = !0, A = b[0], F = 0; F < b.length; F++) {
      var B = b[F], M = Zt(B), G = ao(B) === no, ne = [yt, Mt].indexOf(M) >= 0, Z = ne ? "width" : "height", ee = Io(t, { placement: B, boundary: f, rootBoundary: d, altBoundary: v, padding: u }), K = ne ? G ? Bt : wt : G ? Mt : yt;
      $[Z] > O[Z] && (K = tr(K));
      var ie = tr(K), N = [];
      if (l && N.push(ee[M] <= 0), s && N.push(ee[K] <= 0, ee[ie] <= 0), N.every(function(_e) {
        return _e;
      })) {
        A = B, E = !1;
        break;
      }
      _.set(B, N);
    }
    if (E)
      for (var j = p ? 3 : 1, re = function(_e) {
        var Te = b.find(function(we) {
          var Me = _.get(we);
          if (Me)
            return Me.slice(0, _e).every(function(Ee) {
              return Ee;
            });
        });
        if (Te)
          return A = Te, "break";
      }, se = j; se > 0; se--) {
        var ue = re(se);
        if (ue === "break")
          break;
      }
    t.placement !== A && (t.modifiersData[o]._skip = !0, t.placement = A, t.reset = !0);
  }
}
var ub = { name: "flip", enabled: !0, phase: "main", fn: ib, requiresIfExists: ["offset"], data: { _skip: !1 } };
function us(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function cs(e) {
  return [yt, Bt, Mt, wt].some(function(t) {
    return e[t] >= 0;
  });
}
function cb(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, l = t.modifiersData.preventOverflow, a = Io(t, { elementContext: "reference" }), s = Io(t, { altBoundary: !0 }), i = us(a, o), u = us(s, r, l), f = cs(i), d = cs(u);
  t.modifiersData[n] = { referenceClippingOffsets: i, popperEscapeOffsets: u, isReferenceHidden: f, hasPopperEscaped: d }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": d });
}
var db = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: cb };
function fb(e, t, n) {
  var o = Zt(e), r = [wt, yt].indexOf(o) >= 0 ? -1 : 1, l = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, a = l[0], s = l[1];
  return a = a || 0, s = (s || 0) * r, [wt, Bt].indexOf(o) >= 0 ? { x: s, y: a } : { x: a, y: s };
}
function pb(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, l = r === void 0 ? [0, 0] : r, a = Ar.reduce(function(f, d) {
    return f[d] = fb(d, t.rects, l), f;
  }, {}), s = a[t.placement], i = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = a;
}
var vb = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: pb };
function hb(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = eu({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var tu = { name: "popperOffsets", enabled: !0, phase: "read", fn: hb, data: {} };
function gb(e) {
  return e === "x" ? "y" : "x";
}
function mb(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, l = r === void 0 ? !0 : r, a = n.altAxis, s = a === void 0 ? !1 : a, i = n.boundary, u = n.rootBoundary, f = n.altBoundary, d = n.padding, v = n.tether, m = v === void 0 ? !0 : v, p = n.tetherOffset, g = p === void 0 ? 0 : p, y = Io(t, { boundary: i, rootBoundary: u, padding: d, altBoundary: f }), h = Zt(t.placement), w = ao(t.placement), C = !w, b = Gl(h), $ = gb(b), O = t.modifiersData.popperOffsets, _ = t.rects.reference, E = t.rects.popper, A = typeof g == "function" ? g(Object.assign({}, t.rects, { placement: t.placement })) : g, F = typeof A == "number" ? { mainAxis: A, altAxis: A } : Object.assign({ mainAxis: 0, altAxis: 0 }, A), B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, M = { x: 0, y: 0 };
  if (O) {
    if (l) {
      var G, ne = b === "y" ? yt : wt, Z = b === "y" ? Mt : Bt, ee = b === "y" ? "height" : "width", K = O[b], ie = K + y[ne], N = K - y[Z], j = m ? -E[ee] / 2 : 0, re = w === no ? _[ee] : E[ee], se = w === no ? -E[ee] : -_[ee], ue = t.elements.arrow, _e = m && ue ? ql(ue) : { width: 0, height: 0 }, Te = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Gi(), we = Te[ne], Me = Te[Z], Ee = So(0, _[ee], _e[ee]), He = C ? _[ee] / 2 - j - Ee - we - F.mainAxis : re - Ee - we - F.mainAxis, Pe = C ? -_[ee] / 2 + j + Ee + Me + F.mainAxis : se + Ee + Me + F.mainAxis, Ge = t.elements.arrow && Ho(t.elements.arrow), pt = Ge ? b === "y" ? Ge.clientTop || 0 : Ge.clientLeft || 0 : 0, nt = (G = B == null ? void 0 : B[b]) != null ? G : 0, Ct = K + He - nt - pt, vt = K + Pe - nt, st = So(m ? hr(ie, Ct) : ie, K, m ? Bn(N, vt) : N);
      O[b] = st, M[b] = st - K;
    }
    if (s) {
      var Pt, it = b === "x" ? yt : wt, St = b === "x" ? Mt : Bt, We = O[$], ut = $ === "y" ? "height" : "width", ot = We + y[it], At = We - y[St], q = [yt, wt].indexOf(h) !== -1, I = (Pt = B == null ? void 0 : B[$]) != null ? Pt : 0, Q = q ? ot : We - _[ut] - E[ut] - I + F.altAxis, Ce = q ? We + _[ut] + E[ut] - I - F.altAxis : At, Ke = m && q ? K0(Q, We, Ce) : So(m ? Q : ot, We, m ? Ce : At);
      O[$] = Ke, M[$] = Ke - We;
    }
    t.modifiersData[o] = M;
  }
}
var bb = { name: "preventOverflow", enabled: !0, phase: "main", fn: mb, requiresIfExists: ["offset"] };
function yb(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function wb(e) {
  return e === qt(e) || !Nt(e) ? Yl(e) : yb(e);
}
function Cb(e) {
  var t = e.getBoundingClientRect(), n = ro(t.width) / e.offsetWidth || 1, o = ro(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function Sb(e, t, n) {
  n === void 0 && (n = !1);
  var o = Nt(t), r = Nt(t) && Cb(t), l = Tn(t), a = lo(e, r), s = { scrollLeft: 0, scrollTop: 0 }, i = { x: 0, y: 0 };
  return (o || !o && !n) && ((en(t) !== "body" || Zl(l)) && (s = wb(t)), Nt(t) ? (i = lo(t, !0), i.x += t.clientLeft, i.y += t.clientTop) : l && (i.x = Xl(l))), { x: a.left + s.scrollLeft - i.x, y: a.top + s.scrollTop - i.y, width: a.width, height: a.height };
}
function _b(e) {
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
function Eb(e) {
  var t = _b(e);
  return F0.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function $b(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Tb(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, { options: Object.assign({}, r.options, o.options), data: Object.assign({}, r.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var ds = { placement: "bottom", modifiers: [], strategy: "absolute" };
function fs() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Jl(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, l = r === void 0 ? ds : r;
  return function(a, s, i) {
    i === void 0 && (i = l);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, ds, l), modifiersData: {}, elements: { reference: a, popper: s }, attributes: {}, styles: {} }, f = [], d = !1, v = { state: u, setOptions: function(g) {
      var y = typeof g == "function" ? g(u.options) : g;
      p(), u.options = Object.assign({}, l, u.options, y), u.scrollParents = { reference: oo(a) ? _o(a) : a.contextElement ? _o(a.contextElement) : [], popper: _o(s) };
      var h = Eb(Tb([].concat(o, u.options.modifiers)));
      return u.orderedModifiers = h.filter(function(w) {
        return w.enabled;
      }), m(), v.update();
    }, forceUpdate: function() {
      if (!d) {
        var g = u.elements, y = g.reference, h = g.popper;
        if (fs(y, h)) {
          u.rects = { reference: Sb(y, Ho(h), u.options.strategy === "fixed"), popper: ql(h) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(E) {
            return u.modifiersData[E.name] = Object.assign({}, E.data);
          });
          for (var w = 0; w < u.orderedModifiers.length; w++) {
            if (u.reset === !0) {
              u.reset = !1, w = -1;
              continue;
            }
            var C = u.orderedModifiers[w], b = C.fn, $ = C.options, O = $ === void 0 ? {} : $, _ = C.name;
            typeof b == "function" && (u = b({ state: u, options: O, name: _, instance: v }) || u);
          }
        }
      }
    }, update: $b(function() {
      return new Promise(function(g) {
        v.forceUpdate(), g(u);
      });
    }), destroy: function() {
      p(), d = !0;
    } };
    if (!fs(a, s))
      return v;
    v.setOptions(i).then(function(g) {
      !d && i.onFirstUpdate && i.onFirstUpdate(g);
    });
    function m() {
      u.orderedModifiers.forEach(function(g) {
        var y = g.name, h = g.options, w = h === void 0 ? {} : h, C = g.effect;
        if (typeof C == "function") {
          var b = C({ state: u, name: y, instance: v, options: w }), $ = function() {
          };
          f.push(b || $);
        }
      });
    }
    function p() {
      f.forEach(function(g) {
        return g();
      }), f = [];
    }
    return v;
  };
}
Jl();
var Ob = [Ji, tu, Zi, Ui];
Jl({ defaultModifiers: Ob });
var kb = [Ji, tu, Zi, Ui, vb, ub, bb, G0, db], nu = Jl({ defaultModifiers: kb });
const xb = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: i }) => {
      const u = Pb(i);
      Object.assign(a.value, u);
    },
    requires: ["computeStyles"]
  }, r = S(() => {
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
  return J(r, (i) => {
    const u = c(l);
    u && u.setOptions(i);
  }, {
    deep: !0
  }), J([e, t], ([i, u]) => {
    s(), !(!i || !u) && (l.value = nu(i, u, c(r)));
  }), zt(() => {
    s();
  }), {
    state: S(() => {
      var i;
      return { ...((i = c(l)) == null ? void 0 : i.state) || {} };
    }),
    styles: S(() => c(a).styles),
    attributes: S(() => c(a).attributes),
    update: () => {
      var i;
      return (i = c(l)) == null ? void 0 : i.update();
    },
    forceUpdate: () => {
      var i;
      return (i = c(l)) == null ? void 0 : i.forceUpdate();
    },
    instanceRef: S(() => c(l))
  };
};
function Pb(e) {
  const t = Object.keys(e.elements), n = fr(t.map((r) => [r, e.styles[r] || {}])), o = fr(t.map((r) => [r, e.attributes[r]]));
  return {
    styles: n,
    attributes: o
  };
}
const Ab = (e) => {
  if (!e)
    return { onClick: ln, onMousedown: ln, onMouseup: ln };
  let t = !1, n = !1;
  return { onClick: (a) => {
    t && n && e(a), t = n = !1;
  }, onMousedown: (a) => {
    t = a.target === a.currentTarget;
  }, onMouseup: (a) => {
    n = a.target === a.currentTarget;
  } };
};
function ps() {
  let e;
  const t = (o, r) => {
    n(), e = window.setTimeout(o, r);
  }, n = () => window.clearTimeout(e);
  return wr(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const cl = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, Ib = Symbol("elIdInjection"), ou = () => $e() ? he(Ib, cl) : cl, En = (e) => {
  const t = ou();
  !ke && t === cl && Ve("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = Kl();
  return S(() => c(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
};
let Gn = [];
const vs = (e) => {
  const t = e;
  t.key === an.esc && Gn.forEach((n) => n(t));
}, Lb = (e) => {
  Ie(() => {
    Gn.length === 0 && document.addEventListener("keydown", vs), ke && Gn.push(e);
  }), zt(() => {
    Gn = Gn.filter((t) => t !== e), Gn.length === 0 && ke && document.removeEventListener("keydown", vs);
  });
};
let hs;
const ru = () => {
  const e = Kl(), t = ou(), n = S(() => `${e.value}-popper-container-${t.prefix}`), o = S(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, Nb = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, Rb = () => {
  const { id: e, selector: t } = ru();
  return Tl(() => {
    ke && (process.env.NODE_ENV === "test" || !hs && !document.body.querySelector(t.value)) && (hs = Nb(e.value));
  }), {
    id: e,
    selector: t
  };
}, Mb = ye({
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
}), lu = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: o,
  close: r
}) => {
  const { registerTimeout: l } = ps(), {
    registerTimeout: a,
    cancelTimeout: s
  } = ps();
  return {
    onOpen: (f) => {
      l(() => {
        o(f);
        const d = c(n);
        xe(d) && d > 0 && a(() => {
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
}, au = Symbol("elForwardRef"), Bb = (e) => {
  Xe(au, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, zb = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), gs = k(0), su = 2e3, iu = Symbol("zIndexContextKey"), Lr = (e) => {
  const t = e || ($e() ? he(iu, void 0) : void 0), n = S(() => {
    const l = c(t);
    return xe(l) ? l : su;
  }), o = S(() => n.value + gs.value);
  return {
    initialZIndex: n,
    currentZIndex: o,
    nextZIndex: () => (gs.value++, o.value)
  };
};
function Fb(e) {
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
const Kn = xr({
  type: String,
  values: zo,
  required: !1
}), uu = Symbol("size"), Hb = () => {
  const e = he(uu, {});
  return S(() => c(e.size) || "");
};
function Db(e, { afterFocus: t, beforeBlur: n, afterBlur: o } = {}) {
  const r = $e(), { emit: l } = r, a = Rn(), s = k(!1), i = (d) => {
    s.value || (s.value = !0, l("focus", d), t == null || t());
  }, u = (d) => {
    var v;
    at(n) && n(d) || d.relatedTarget && ((v = a.value) != null && v.contains(d.relatedTarget)) || (s.value = !1, l("blur", d), o == null || o());
  }, f = () => {
    var d;
    (d = e.value) == null || d.focus();
  };
  return J(a, (d) => {
    d && d.setAttribute("tabindex", "-1");
  }), Yt(a, "click", f), {
    wrapperRef: a,
    isFocused: s,
    handleFocus: i,
    handleBlur: u
  };
}
const cu = Symbol(), gr = k();
function Nr(e, t = void 0) {
  const n = $e() ? he(cu, gr) : gr;
  return e ? S(() => {
    var o, r;
    return (r = (o = n.value) == null ? void 0 : o[e]) != null ? r : t;
  }) : n;
}
function du(e, t) {
  const n = Nr(), o = oe(e, S(() => {
    var s;
    return ((s = n.value) == null ? void 0 : s.namespace) || Co;
  })), r = ft(S(() => {
    var s;
    return (s = n.value) == null ? void 0 : s.locale;
  })), l = Lr(S(() => {
    var s;
    return ((s = n.value) == null ? void 0 : s.zIndex) || su;
  })), a = S(() => {
    var s;
    return c(t) || ((s = n.value) == null ? void 0 : s.size) || "";
  });
  return Vb(S(() => c(n) || {})), {
    ns: o,
    locale: r,
    zIndex: l,
    size: a
  };
}
const Vb = (e, t, n = !1) => {
  var o;
  const r = !!$e(), l = r ? Nr() : void 0, a = (o = t == null ? void 0 : t.provide) != null ? o : r ? Xe : void 0;
  if (!a) {
    Ve("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const s = S(() => {
    const i = c(e);
    return l != null && l.value ? Wb(l.value, i) : i;
  });
  return a(cu, s), a(Fi, S(() => s.value.locale)), a(Vi, S(() => s.value.namespace)), a(iu, S(() => s.value.zIndex)), a(uu, {
    size: S(() => s.value.size || "")
  }), (n || !gr.value) && (gr.value = s.value), s;
}, Wb = (e, t) => {
  var n;
  const o = [.../* @__PURE__ */ new Set([...Xa(e), ...Xa(t)])], r = {};
  for (const l of o)
    r[l] = (n = t[l]) != null ? n : e[l];
  return r;
};
var ce = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
};
const Kb = ye({
  size: {
    type: de([Number, String])
  },
  color: {
    type: String
  }
}), jb = H({
  name: "ElIcon",
  inheritAttrs: !1
}), Ub = /* @__PURE__ */ H({
  ...jb,
  props: Kb,
  setup(e) {
    const t = e, n = oe("icon"), o = S(() => {
      const { size: r, color: l } = t;
      return !r && !l ? {} : {
        fontSize: eo(r) ? void 0 : Sn(r),
        "--color": l
      };
    });
    return (r, l) => (T(), L("i", mt({
      class: c(n).b(),
      style: c(o)
    }, r.$attrs), [
      te(r.$slots, "default")
    ], 16));
  }
});
var qb = /* @__PURE__ */ ce(Ub, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const Ne = tt(qb), Ql = Symbol("formContextKey"), mr = Symbol("formItemContextKey"), un = (e, t = {}) => {
  const n = k(void 0), o = t.prop ? n : Ki("size"), r = t.global ? n : Hb(), l = t.form ? { size: void 0 } : he(Ql, void 0), a = t.formItem ? { size: void 0 } : he(mr, void 0);
  return S(() => o.value || c(e) || (a == null ? void 0 : a.size) || (l == null ? void 0 : l.size) || r.value || "");
}, fo = (e) => {
  const t = Ki("disabled"), n = he(Ql, void 0);
  return S(() => t.value || c(e) || (n == null ? void 0 : n.disabled) || !1);
}, On = () => {
  const e = he(Ql, void 0), t = he(mr, void 0);
  return {
    form: e,
    formItem: t
  };
}, Do = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: o
}) => {
  n || (n = k(!1)), o || (o = k(!1));
  const r = k();
  let l;
  const a = S(() => {
    var s;
    return !!(!e.label && t && t.inputIds && ((s = t.inputIds) == null ? void 0 : s.length) <= 1);
  });
  return Ie(() => {
    l = J([Wt(e, "id"), n], ([s, i]) => {
      const u = s ?? (i ? void 0 : En().value);
      u !== r.value && (t != null && t.removeInputId && (r.value && t.removeInputId(r.value), !(o != null && o.value) && !i && u && t.addInputId(u)), r.value = u);
    }, { immediate: !0 });
  }), yr(() => {
    l && l(), t != null && t.removeInputId && r.value && t.removeInputId(r.value);
  }), {
    isLabeledByFormItem: a,
    inputId: r
  };
};
let Dt;
const Gb = `
  height:0 !important;
  visibility:hidden !important;
  ${Hc() ? "" : "overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, Yb = [
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
function Xb(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), r = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: Yb.map((a) => `${a}:${t.getPropertyValue(a)}`).join(";"), paddingSize: o, borderSize: r, boxSizing: n };
}
function ms(e, t = 1, n) {
  var o;
  Dt || (Dt = document.createElement("textarea"), document.body.appendChild(Dt));
  const { paddingSize: r, borderSize: l, boxSizing: a, contextStyle: s } = Xb(e);
  Dt.setAttribute("style", `${s};${Gb}`), Dt.value = e.value || e.placeholder || "";
  let i = Dt.scrollHeight;
  const u = {};
  a === "border-box" ? i = i + l : a === "content-box" && (i = i - r), Dt.value = "";
  const f = Dt.scrollHeight - r;
  if (xe(t)) {
    let d = f * t;
    a === "border-box" && (d = d + r + l), i = Math.max(d, i), u.minHeight = `${d}px`;
  }
  if (xe(n)) {
    let d = f * n;
    a === "border-box" && (d = d + r + l), i = Math.min(d, i);
  }
  return u.height = `${i}px`, (o = Dt.parentNode) == null || o.removeChild(Dt), Dt = void 0, u;
}
const Zb = ye({
  id: {
    type: String,
    default: void 0
  },
  size: Kn,
  disabled: Boolean,
  modelValue: {
    type: de([
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
    type: de([Boolean, Object]),
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
    type: Je
  },
  prefixIcon: {
    type: Je
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
    type: de([Object, Array, String]),
    default: () => Wl({})
  },
  autofocus: {
    type: Boolean,
    default: !1
  }
}), Jb = {
  [Fe]: (e) => Ue(e),
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
}, Qb = ["role"], ey = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus"], ty = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus"], ny = H({
  name: "ElInput",
  inheritAttrs: !1
}), oy = /* @__PURE__ */ H({
  ...ny,
  props: Zb,
  emits: Jb,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = Gs(), l = No(), a = S(() => {
      const I = {};
      return o.containerRole === "combobox" && (I["aria-haspopup"] = r["aria-haspopup"], I["aria-owns"] = r["aria-owns"], I["aria-expanded"] = r["aria-expanded"]), I;
    }), s = S(() => [
      o.type === "textarea" ? y.b() : g.b(),
      g.m(m.value),
      g.is("disabled", p.value),
      g.is("exceed", _e.value),
      {
        [g.b("group")]: l.prepend || l.append,
        [g.bm("group", "append")]: l.append,
        [g.bm("group", "prepend")]: l.prepend,
        [g.m("prefix")]: l.prefix || o.prefixIcon,
        [g.m("suffix")]: l.suffix || o.suffixIcon || o.clearable || o.showPassword,
        [g.bm("suffix", "password-clear")]: j.value && re.value
      },
      r.class
    ]), i = S(() => [
      g.e("wrapper"),
      g.is("focus", F.value)
    ]), u = c0({
      excludeKeys: S(() => Object.keys(a.value))
    }), { form: f, formItem: d } = On(), { inputId: v } = Do(o, {
      formItemContext: d
    }), m = un(), p = fo(), g = oe("input"), y = oe("textarea"), h = Rn(), w = Rn(), C = k(!1), b = k(!1), $ = k(!1), O = k(), _ = Rn(o.inputStyle), E = S(() => h.value || w.value), { wrapperRef: A, isFocused: F, handleFocus: B, handleBlur: M } = Db(E, {
      afterBlur() {
        var I;
        o.validateEvent && ((I = d == null ? void 0 : d.validate) == null || I.call(d, "blur").catch((Q) => Ve(Q)));
      }
    }), G = S(() => {
      var I;
      return (I = f == null ? void 0 : f.statusIcon) != null ? I : !1;
    }), ne = S(() => (d == null ? void 0 : d.validateState) || ""), Z = S(() => ne.value && Mi[ne.value]), ee = S(() => $.value ? Gm : nm), K = S(() => [
      r.style,
      o.inputStyle
    ]), ie = S(() => [
      o.inputStyle,
      _.value,
      { resize: o.resize }
    ]), N = S(() => Bo(o.modelValue) ? "" : String(o.modelValue)), j = S(() => o.clearable && !p.value && !o.readonly && !!N.value && (F.value || C.value)), re = S(() => o.showPassword && !p.value && !o.readonly && !!N.value && (!!N.value || F.value)), se = S(() => o.showWordLimit && !!u.value.maxlength && (o.type === "text" || o.type === "textarea") && !p.value && !o.readonly && !o.showPassword), ue = S(() => N.value.length), _e = S(() => !!se.value && ue.value > Number(u.value.maxlength)), Te = S(() => !!l.suffix || !!o.suffixIcon || j.value || o.showPassword || se.value || !!ne.value && G.value), [we, Me] = Fb(h);
    Jn(w, (I) => {
      if (Pe(), !se.value || o.resize !== "both")
        return;
      const Q = I[0], { width: Ce } = Q.contentRect;
      O.value = {
        right: `calc(100% - ${Ce + 15 + 6}px)`
      };
    });
    const Ee = () => {
      const { type: I, autosize: Q } = o;
      if (!(!ke || I !== "textarea" || !w.value))
        if (Q) {
          const Ce = Qe(Q) ? Q.minRows : void 0, Ke = Qe(Q) ? Q.maxRows : void 0, Ht = ms(w.value, Ce, Ke);
          _.value = {
            overflowY: "hidden",
            ...Ht
          }, be(() => {
            w.value.offsetHeight, _.value = Ht;
          });
        } else
          _.value = {
            minHeight: ms(w.value).minHeight
          };
    }, Pe = ((I) => {
      let Q = !1;
      return () => {
        var Ce;
        if (Q || !o.autosize)
          return;
        ((Ce = w.value) == null ? void 0 : Ce.offsetParent) === null || (I(), Q = !0);
      };
    })(Ee), Ge = () => {
      const I = E.value, Q = o.formatter ? o.formatter(N.value) : N.value;
      !I || I.value === Q || (I.value = Q);
    }, pt = async (I) => {
      we();
      let { value: Q } = I.target;
      if (o.formatter && (Q = o.parser ? o.parser(Q) : Q), !b.value) {
        if (Q === N.value) {
          Ge();
          return;
        }
        n(Fe, Q), n("input", Q), await be(), Ge(), Me();
      }
    }, nt = (I) => {
      n("change", I.target.value);
    }, Ct = (I) => {
      n("compositionstart", I), b.value = !0;
    }, vt = (I) => {
      var Q;
      n("compositionupdate", I);
      const Ce = (Q = I.target) == null ? void 0 : Q.value, Ke = Ce[Ce.length - 1] || "";
      b.value = !zi(Ke);
    }, st = (I) => {
      n("compositionend", I), b.value && (b.value = !1, pt(I));
    }, Pt = () => {
      $.value = !$.value, it();
    }, it = async () => {
      var I;
      await be(), (I = E.value) == null || I.focus();
    }, St = () => {
      var I;
      return (I = E.value) == null ? void 0 : I.blur();
    }, We = (I) => {
      C.value = !1, n("mouseleave", I);
    }, ut = (I) => {
      C.value = !0, n("mouseenter", I);
    }, ot = (I) => {
      n("keydown", I);
    }, At = () => {
      var I;
      (I = E.value) == null || I.select();
    }, q = () => {
      n(Fe, ""), n("change", ""), n("clear"), n("input", "");
    };
    return J(() => o.modelValue, () => {
      var I;
      be(() => Ee()), o.validateEvent && ((I = d == null ? void 0 : d.validate) == null || I.call(d, "change").catch((Q) => Ve(Q)));
    }), J(N, () => Ge()), J(() => o.type, async () => {
      await be(), Ge(), Ee();
    }), Ie(() => {
      !o.formatter && o.parser && Ve("ElInput", "If you set the parser, you also need to set the formatter."), Ge(), be(Ee);
    }), t({
      input: h,
      textarea: w,
      ref: E,
      textareaStyle: ie,
      autosize: Wt(o, "autosize"),
      focus: it,
      blur: St,
      select: At,
      clear: q,
      resizeTextarea: Ee
    }), (I, Q) => Re((T(), L("div", mt(c(a), {
      class: c(s),
      style: c(K),
      role: I.containerRole,
      onMouseenter: ut,
      onMouseleave: We
    }), [
      V(" input "),
      I.type !== "textarea" ? (T(), L(ze, { key: 0 }, [
        V(" prepend slot "),
        I.$slots.prepend ? (T(), L("div", {
          key: 0,
          class: P(c(g).be("group", "prepend"))
        }, [
          te(I.$slots, "prepend")
        ], 2)) : V("v-if", !0),
        R("div", {
          ref_key: "wrapperRef",
          ref: A,
          class: P(c(i))
        }, [
          V(" prefix slot "),
          I.$slots.prefix || I.prefixIcon ? (T(), L("span", {
            key: 0,
            class: P(c(g).e("prefix"))
          }, [
            R("span", {
              class: P(c(g).e("prefix-inner"))
            }, [
              te(I.$slots, "prefix"),
              I.prefixIcon ? (T(), W(c(Ne), {
                key: 0,
                class: P(c(g).e("icon"))
              }, {
                default: D(() => [
                  (T(), W(je(I.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : V("v-if", !0)
            ], 2)
          ], 2)) : V("v-if", !0),
          R("input", mt({
            id: c(v),
            ref_key: "input",
            ref: h,
            class: c(g).e("inner")
          }, c(u), {
            type: I.showPassword ? $.value ? "text" : "password" : I.type,
            disabled: c(p),
            formatter: I.formatter,
            parser: I.parser,
            readonly: I.readonly,
            autocomplete: I.autocomplete,
            tabindex: I.tabindex,
            "aria-label": I.label,
            placeholder: I.placeholder,
            style: I.inputStyle,
            form: o.form,
            autofocus: o.autofocus,
            onCompositionstart: Ct,
            onCompositionupdate: vt,
            onCompositionend: st,
            onInput: pt,
            onFocus: Q[0] || (Q[0] = (...Ce) => c(B) && c(B)(...Ce)),
            onBlur: Q[1] || (Q[1] = (...Ce) => c(M) && c(M)(...Ce)),
            onChange: nt,
            onKeydown: ot
          }), null, 16, ey),
          V(" suffix slot "),
          c(Te) ? (T(), L("span", {
            key: 1,
            class: P(c(g).e("suffix"))
          }, [
            R("span", {
              class: P(c(g).e("suffix-inner"))
            }, [
              !c(j) || !c(re) || !c(se) ? (T(), L(ze, { key: 0 }, [
                te(I.$slots, "suffix"),
                I.suffixIcon ? (T(), W(c(Ne), {
                  key: 0,
                  class: P(c(g).e("icon"))
                }, {
                  default: D(() => [
                    (T(), W(je(I.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : V("v-if", !0)
              ], 64)) : V("v-if", !0),
              c(j) ? (T(), W(c(Ne), {
                key: 1,
                class: P([c(g).e("icon"), c(g).e("clear")]),
                onMousedown: De(c(ln), ["prevent"]),
                onClick: q
              }, {
                default: D(() => [
                  X(c(Vl))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : V("v-if", !0),
              c(re) ? (T(), W(c(Ne), {
                key: 2,
                class: P([c(g).e("icon"), c(g).e("password")]),
                onClick: Pt
              }, {
                default: D(() => [
                  (T(), W(je(c(ee))))
                ]),
                _: 1
              }, 8, ["class"])) : V("v-if", !0),
              c(se) ? (T(), L("span", {
                key: 3,
                class: P(c(g).e("count"))
              }, [
                R("span", {
                  class: P(c(g).e("count-inner"))
                }, me(c(ue)) + " / " + me(c(u).maxlength), 3)
              ], 2)) : V("v-if", !0),
              c(ne) && c(Z) && c(G) ? (T(), W(c(Ne), {
                key: 4,
                class: P([
                  c(g).e("icon"),
                  c(g).e("validateIcon"),
                  c(g).is("loading", c(ne) === "validating")
                ])
              }, {
                default: D(() => [
                  (T(), W(je(c(Z))))
                ]),
                _: 1
              }, 8, ["class"])) : V("v-if", !0)
            ], 2)
          ], 2)) : V("v-if", !0)
        ], 2),
        V(" append slot "),
        I.$slots.append ? (T(), L("div", {
          key: 1,
          class: P(c(g).be("group", "append"))
        }, [
          te(I.$slots, "append")
        ], 2)) : V("v-if", !0)
      ], 64)) : (T(), L(ze, { key: 1 }, [
        V(" textarea "),
        R("textarea", mt({
          id: c(v),
          ref_key: "textarea",
          ref: w,
          class: c(y).e("inner")
        }, c(u), {
          tabindex: I.tabindex,
          disabled: c(p),
          readonly: I.readonly,
          autocomplete: I.autocomplete,
          style: c(ie),
          "aria-label": I.label,
          placeholder: I.placeholder,
          form: o.form,
          autofocus: o.autofocus,
          onCompositionstart: Ct,
          onCompositionupdate: vt,
          onCompositionend: st,
          onInput: pt,
          onFocus: Q[2] || (Q[2] = (...Ce) => c(B) && c(B)(...Ce)),
          onBlur: Q[3] || (Q[3] = (...Ce) => c(M) && c(M)(...Ce)),
          onChange: nt,
          onKeydown: ot
        }), null, 16, ty),
        c(se) ? (T(), L("span", {
          key: 0,
          style: Oe(O.value),
          class: P(c(g).e("count"))
        }, me(c(ue)) + " / " + me(c(u).maxlength), 7)) : V("v-if", !0)
      ], 64))
    ], 16, Qb)), [
      [Rt, I.type !== "hidden"]
    ]);
  }
});
var ry = /* @__PURE__ */ ce(oy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const fu = tt(ry), Yn = 4, ly = {
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
}, ay = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), pu = Symbol("scrollbarContextKey"), sy = ye({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), iy = "Thumb", uy = /* @__PURE__ */ H({
  __name: "thumb",
  props: sy,
  setup(e) {
    const t = e, n = he(pu), o = oe("scrollbar");
    n || Or(iy, "can not inject scrollbar context");
    const r = k(), l = k(), a = k({}), s = k(!1);
    let i = !1, u = !1, f = ke ? document.onselectstart : null;
    const d = S(() => ly[t.vertical ? "vertical" : "horizontal"]), v = S(() => ay({
      size: t.size,
      move: t.move,
      bar: d.value
    })), m = S(() => r.value[d.value.offset] ** 2 / n.wrapElement[d.value.scrollSize] / t.ratio / l.value[d.value.offset]), p = (O) => {
      var _;
      if (O.stopPropagation(), O.ctrlKey || [1, 2].includes(O.button))
        return;
      (_ = window.getSelection()) == null || _.removeAllRanges(), y(O);
      const E = O.currentTarget;
      E && (a.value[d.value.axis] = E[d.value.offset] - (O[d.value.client] - E.getBoundingClientRect()[d.value.direction]));
    }, g = (O) => {
      if (!l.value || !r.value || !n.wrapElement)
        return;
      const _ = Math.abs(O.target.getBoundingClientRect()[d.value.direction] - O[d.value.client]), E = l.value[d.value.offset] / 2, A = (_ - E) * 100 * m.value / r.value[d.value.offset];
      n.wrapElement[d.value.scroll] = A * n.wrapElement[d.value.scrollSize] / 100;
    }, y = (O) => {
      O.stopImmediatePropagation(), i = !0, document.addEventListener("mousemove", h), document.addEventListener("mouseup", w), f = document.onselectstart, document.onselectstart = () => !1;
    }, h = (O) => {
      if (!r.value || !l.value || i === !1)
        return;
      const _ = a.value[d.value.axis];
      if (!_)
        return;
      const E = (r.value.getBoundingClientRect()[d.value.direction] - O[d.value.client]) * -1, A = l.value[d.value.offset] - _, F = (E - A) * 100 * m.value / r.value[d.value.offset];
      n.wrapElement[d.value.scroll] = F * n.wrapElement[d.value.scrollSize] / 100;
    }, w = () => {
      i = !1, a.value[d.value.axis] = 0, document.removeEventListener("mousemove", h), document.removeEventListener("mouseup", w), $(), u && (s.value = !1);
    }, C = () => {
      u = !1, s.value = !!t.size;
    }, b = () => {
      u = !0, s.value = i;
    };
    zt(() => {
      $(), document.removeEventListener("mouseup", w);
    });
    const $ = () => {
      document.onselectstart !== f && (document.onselectstart = f);
    };
    return Yt(Wt(n, "scrollbarElement"), "mousemove", C), Yt(Wt(n, "scrollbarElement"), "mouseleave", b), (O, _) => (T(), W(mn, {
      name: c(o).b("fade"),
      persisted: ""
    }, {
      default: D(() => [
        Re(R("div", {
          ref_key: "instance",
          ref: r,
          class: P([c(o).e("bar"), c(o).is(c(d).key)]),
          onMousedown: g
        }, [
          R("div", {
            ref_key: "thumb",
            ref: l,
            class: P(c(o).e("thumb")),
            style: Oe(c(v)),
            onMousedown: p
          }, null, 38)
        ], 34), [
          [Rt, O.always || s.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var bs = /* @__PURE__ */ ce(uy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const cy = ye({
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
}), dy = /* @__PURE__ */ H({
  __name: "bar",
  props: cy,
  setup(e, { expose: t }) {
    const n = e, o = k(0), r = k(0);
    return t({
      handleScroll: (a) => {
        if (a) {
          const s = a.offsetHeight - Yn, i = a.offsetWidth - Yn;
          r.value = a.scrollTop * 100 / s * n.ratioY, o.value = a.scrollLeft * 100 / i * n.ratioX;
        }
      }
    }), (a, s) => (T(), L(ze, null, [
      X(bs, {
        move: o.value,
        ratio: a.ratioX,
        size: a.width,
        always: a.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      X(bs, {
        move: r.value,
        ratio: a.ratioY,
        size: a.height,
        vertical: "",
        always: a.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var fy = /* @__PURE__ */ ce(dy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const py = ye({
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
    type: de([String, Object, Array]),
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
}), vy = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(xe)
}, dl = "ElScrollbar", hy = H({
  name: dl
}), gy = /* @__PURE__ */ H({
  ...hy,
  props: py,
  emits: vy,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = oe("scrollbar");
    let l, a;
    const s = k(), i = k(), u = k(), f = k("0"), d = k("0"), v = k(), m = k(1), p = k(1), g = S(() => {
      const _ = {};
      return o.height && (_.height = Sn(o.height)), o.maxHeight && (_.maxHeight = Sn(o.maxHeight)), [o.wrapStyle, _];
    }), y = S(() => [
      o.wrapClass,
      r.e("wrap"),
      { [r.em("wrap", "hidden-default")]: !o.native }
    ]), h = S(() => [r.e("view"), o.viewClass]), w = () => {
      var _;
      i.value && ((_ = v.value) == null || _.handleScroll(i.value), n("scroll", {
        scrollTop: i.value.scrollTop,
        scrollLeft: i.value.scrollLeft
      }));
    };
    function C(_, E) {
      Qe(_) ? i.value.scrollTo(_) : xe(_) && xe(E) && i.value.scrollTo(_, E);
    }
    const b = (_) => {
      if (!xe(_)) {
        Ve(dl, "value must be a number");
        return;
      }
      i.value.scrollTop = _;
    }, $ = (_) => {
      if (!xe(_)) {
        Ve(dl, "value must be a number");
        return;
      }
      i.value.scrollLeft = _;
    }, O = () => {
      if (!i.value)
        return;
      const _ = i.value.offsetHeight - Yn, E = i.value.offsetWidth - Yn, A = _ ** 2 / i.value.scrollHeight, F = E ** 2 / i.value.scrollWidth, B = Math.max(A, o.minSize), M = Math.max(F, o.minSize);
      m.value = A / (_ - A) / (B / (_ - B)), p.value = F / (E - F) / (M / (E - M)), d.value = B + Yn < _ ? `${B}px` : "", f.value = M + Yn < E ? `${M}px` : "";
    };
    return J(() => o.noresize, (_) => {
      _ ? (l == null || l(), a == null || a()) : ({ stop: l } = Jn(u, O), a = Yt("resize", O));
    }, { immediate: !0 }), J(() => [o.maxHeight, o.height], () => {
      o.native || be(() => {
        var _;
        O(), i.value && ((_ = v.value) == null || _.handleScroll(i.value));
      });
    }), Xe(pu, $n({
      scrollbarElement: s,
      wrapElement: i
    })), Ie(() => {
      o.native || be(() => {
        O();
      });
    }), Ys(() => O()), t({
      wrapRef: i,
      update: O,
      scrollTo: C,
      setScrollTop: b,
      setScrollLeft: $,
      handleScroll: w
    }), (_, E) => (T(), L("div", {
      ref_key: "scrollbarRef",
      ref: s,
      class: P(c(r).b())
    }, [
      R("div", {
        ref_key: "wrapRef",
        ref: i,
        class: P(c(y)),
        style: Oe(c(g)),
        onScroll: w
      }, [
        (T(), W(je(_.tag), {
          id: _.id,
          ref_key: "resizeRef",
          ref: u,
          class: P(c(h)),
          style: Oe(_.viewStyle),
          role: _.role,
          "aria-label": _.ariaLabel,
          "aria-orientation": _.ariaOrientation
        }, {
          default: D(() => [
            te(_.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 38),
      _.native ? V("v-if", !0) : (T(), W(fy, {
        key: 0,
        ref_key: "barRef",
        ref: v,
        height: d.value,
        width: f.value,
        always: _.always,
        "ratio-x": p.value,
        "ratio-y": m.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var my = /* @__PURE__ */ ce(gy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const ea = tt(my), ta = Symbol("popper"), vu = Symbol("popperContent"), by = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], hu = ye({
  role: {
    type: String,
    values: by,
    default: "tooltip"
  }
}), yy = H({
  name: "ElPopper",
  inheritAttrs: !1
}), wy = /* @__PURE__ */ H({
  ...yy,
  props: hu,
  setup(e, { expose: t }) {
    const n = e, o = k(), r = k(), l = k(), a = k(), s = S(() => n.role), i = {
      triggerRef: o,
      popperInstanceRef: r,
      contentRef: l,
      referenceRef: a,
      role: s
    };
    return t(i), Xe(ta, i), (u, f) => te(u.$slots, "default");
  }
});
var Cy = /* @__PURE__ */ ce(wy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
const gu = ye({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), Sy = H({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), _y = /* @__PURE__ */ H({
  ...Sy,
  props: gu,
  setup(e, { expose: t }) {
    const n = e, o = oe("popper"), { arrowOffset: r, arrowRef: l, arrowStyle: a } = he(vu, void 0);
    return J(() => n.arrowOffset, (s) => {
      r.value = s;
    }), zt(() => {
      l.value = void 0;
    }), t({
      arrowRef: l
    }), (s, i) => (T(), L("span", {
      ref_key: "arrowRef",
      ref: l,
      class: P(c(o).e("arrow")),
      style: Oe(c(a)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Ey = /* @__PURE__ */ ce(_y, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
const Kr = "ElOnlyChild", $y = H({
  name: Kr,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const r = he(au), l = zb((o = r == null ? void 0 : r.setForwardRef) != null ? o : ln);
    return () => {
      var a;
      const s = (a = t.default) == null ? void 0 : a.call(t, n);
      if (!s)
        return null;
      if (s.length > 1)
        return Ve(Kr, "requires exact only one valid child."), null;
      const i = mu(s);
      return i ? Re(yc(i, n), [[l]]) : (Ve(Kr, "no valid child node found"), null);
    };
  }
});
function mu(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Qe(n))
      switch (n.type) {
        case Zs:
          continue;
        case Xs:
        case "svg":
          return ys(n);
        case ze:
          return mu(n.children);
        default:
          return n;
      }
    return ys(n);
  }
  return null;
}
function ys(e) {
  const t = oe("only-child");
  return X("span", {
    class: t.e("content")
  }, [e]);
}
const bu = ye({
  virtualRef: {
    type: de(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: de(Function)
  },
  onMouseleave: {
    type: de(Function)
  },
  onClick: {
    type: de(Function)
  },
  onKeydown: {
    type: de(Function)
  },
  onFocus: {
    type: de(Function)
  },
  onBlur: {
    type: de(Function)
  },
  onContextmenu: {
    type: de(Function)
  },
  id: String,
  open: Boolean
}), Ty = H({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), Oy = /* @__PURE__ */ H({
  ...Ty,
  props: bu,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: r } = he(ta, void 0);
    Bb(r);
    const l = S(() => s.value ? n.id : void 0), a = S(() => {
      if (o && o.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), s = S(() => {
      if (o && o.value !== "tooltip")
        return o.value;
    }), i = S(() => s.value ? `${n.open}` : void 0);
    let u;
    return Ie(() => {
      J(() => n.virtualRef, (f) => {
        f && (r.value = hn(f));
      }, {
        immediate: !0
      }), J(r, (f, d) => {
        u == null || u(), u = void 0, wn(f) && ([
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
        }), u = J([l, a, s, i], (v) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((m, p) => {
            Bo(v[p]) ? f.removeAttribute(m) : f.setAttribute(m, v[p]);
          });
        }, { immediate: !0 })), wn(d) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((v) => d.removeAttribute(v));
      }, {
        immediate: !0
      });
    }), zt(() => {
      u == null || u(), u = void 0;
    }), t({
      triggerRef: r
    }), (f, d) => f.virtualTriggering ? V("v-if", !0) : (T(), W(c($y), mt({ key: 0 }, f.$attrs, {
      "aria-controls": c(l),
      "aria-describedby": c(a),
      "aria-expanded": c(i),
      "aria-haspopup": c(s)
    }), {
      default: D(() => [
        te(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var ky = /* @__PURE__ */ ce(Oy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);
const jr = "focus-trap.focus-after-trapped", Ur = "focus-trap.focus-after-released", xy = "focus-trap.focusout-prevented", ws = {
  cancelable: !0,
  bubbles: !1
}, Py = {
  cancelable: !0,
  bubbles: !1
}, Cs = "focusAfterTrapped", Ss = "focusAfterReleased", Ay = Symbol("elFocusTrap"), na = k(), Rr = k(0), oa = k(0);
let Uo = 0;
const yu = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, _s = (e, t) => {
  for (const n of e)
    if (!Iy(n, t))
      return n;
}, Iy = (e, t) => {
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
}, Ly = (e) => {
  const t = yu(e), n = _s(t, e), o = _s(t.reverse(), e);
  return [n, o];
}, Ny = (e) => e instanceof HTMLInputElement && "select" in e, pn = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), oa.value = window.performance.now(), e !== n && Ny(e) && t && e.select();
  }
};
function Es(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const Ry = () => {
  let e = [];
  return {
    push: (o) => {
      const r = e[0];
      r && o !== r && r.pause(), e = Es(e, o), e.unshift(o);
    },
    remove: (o) => {
      var r, l;
      e = Es(e, o), (l = (r = e[0]) == null ? void 0 : r.resume) == null || l.call(r);
    }
  };
}, My = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (pn(o, t), document.activeElement !== n)
      return;
}, $s = Ry(), By = () => Rr.value > oa.value, qo = () => {
  na.value = "pointer", Rr.value = window.performance.now();
}, Ts = () => {
  na.value = "keyboard", Rr.value = window.performance.now();
}, zy = () => (Ie(() => {
  Uo === 0 && (document.addEventListener("mousedown", qo), document.addEventListener("touchstart", qo), document.addEventListener("keydown", Ts)), Uo++;
}), zt(() => {
  Uo--, Uo <= 0 && (document.removeEventListener("mousedown", qo), document.removeEventListener("touchstart", qo), document.removeEventListener("keydown", Ts));
}), {
  focusReason: na,
  lastUserFocusTimestamp: Rr,
  lastAutomatedFocusTimestamp: oa
}), Go = (e) => new CustomEvent(xy, {
  ...Py,
  detail: e
}), Fy = H({
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
    Cs,
    Ss,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = k();
    let o, r;
    const { focusReason: l } = zy();
    Lb((p) => {
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
      const { key: g, altKey: y, ctrlKey: h, metaKey: w, currentTarget: C, shiftKey: b } = p, { loop: $ } = e, O = g === an.tab && !y && !h && !w, _ = document.activeElement;
      if (O && _) {
        const E = C, [A, F] = Ly(E);
        if (A && F) {
          if (!b && _ === F) {
            const M = Go({
              focusReason: l.value
            });
            t("focusout-prevented", M), M.defaultPrevented || (p.preventDefault(), $ && pn(A, !0));
          } else if (b && [A, E].includes(_)) {
            const M = Go({
              focusReason: l.value
            });
            t("focusout-prevented", M), M.defaultPrevented || (p.preventDefault(), $ && pn(F, !0));
          }
        } else if (_ === E) {
          const M = Go({
            focusReason: l.value
          });
          t("focusout-prevented", M), M.defaultPrevented || p.preventDefault();
        }
      }
    };
    Xe(Ay, {
      focusTrapRef: n,
      onKeydown: s
    }), J(() => e.focusTrapEl, (p) => {
      p && (n.value = p);
    }, { immediate: !0 }), J([n], ([p], [g]) => {
      p && (p.addEventListener("keydown", s), p.addEventListener("focusin", f), p.addEventListener("focusout", d)), g && (g.removeEventListener("keydown", s), g.removeEventListener("focusin", f), g.removeEventListener("focusout", d));
    });
    const i = (p) => {
      t(Cs, p);
    }, u = (p) => t(Ss, p), f = (p) => {
      const g = c(n);
      if (!g)
        return;
      const y = p.target, h = p.relatedTarget, w = y && g.contains(y);
      e.trapped || h && g.contains(h) || (o = h), w && t("focusin", p), !a.paused && e.trapped && (w ? r = y : pn(r, !0));
    }, d = (p) => {
      const g = c(n);
      if (!(a.paused || !g))
        if (e.trapped) {
          const y = p.relatedTarget;
          !Bo(y) && !g.contains(y) && setTimeout(() => {
            if (!a.paused && e.trapped) {
              const h = Go({
                focusReason: l.value
              });
              t("focusout-prevented", h), h.defaultPrevented || pn(r, !0);
            }
          }, 0);
        } else {
          const y = p.target;
          y && g.contains(y) || t("focusout", p);
        }
    };
    async function v() {
      await be();
      const p = c(n);
      if (p) {
        $s.push(a);
        const g = p.contains(document.activeElement) ? o : document.activeElement;
        if (o = g, !p.contains(g)) {
          const h = new Event(jr, ws);
          p.addEventListener(jr, i), p.dispatchEvent(h), h.defaultPrevented || be(() => {
            let w = e.focusStartEl;
            Ue(w) || (pn(w), document.activeElement !== w && (w = "first")), w === "first" && My(yu(p), !0), (document.activeElement === g || w === "container") && pn(p);
          });
        }
      }
    }
    function m() {
      const p = c(n);
      if (p) {
        p.removeEventListener(jr, i);
        const g = new CustomEvent(Ur, {
          ...ws,
          detail: {
            focusReason: l.value
          }
        });
        p.addEventListener(Ur, u), p.dispatchEvent(g), !g.defaultPrevented && (l.value == "keyboard" || !By() || p.contains(document.activeElement)) && pn(o ?? document.body), p.removeEventListener(Ur, u), $s.remove(a);
      }
    }
    return Ie(() => {
      e.trapped && v(), J(() => e.trapped, (p) => {
        p ? v() : m();
      });
    }), zt(() => {
      e.trapped && m();
    }), {
      onKeydown: s
    };
  }
});
function Hy(e, t, n, o, r, l) {
  return te(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var wu = /* @__PURE__ */ ce(Fy, [["render", Hy], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const Dy = ["fixed", "absolute"], Vy = ye({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: de(Array),
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
    type: de(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: Dy,
    default: "absolute"
  }
}), Cu = ye({
  ...Vy,
  id: String,
  style: {
    type: de([String, Array, Object])
  },
  className: {
    type: de([String, Array, Object])
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
    type: de([String, Array, Object])
  },
  popperStyle: {
    type: de([String, Array, Object])
  },
  referenceEl: {
    type: de(Object)
  },
  triggerTargetEl: {
    type: de(Object)
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
}), Wy = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, Ky = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: r } = e, l = {
    placement: n,
    strategy: o,
    ...r,
    modifiers: [...Uy(e), ...t]
  };
  return qy(l, r == null ? void 0 : r.modifiers), l;
}, jy = (e) => {
  if (ke)
    return hn(e);
};
function Uy(e) {
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
function qy(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const Gy = 0, Yy = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: r } = he(ta, void 0), l = k(), a = k(), s = S(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), i = S(() => {
    var h;
    const w = c(l), C = (h = c(a)) != null ? h : Gy;
    return {
      name: "arrow",
      enabled: !xi(w),
      options: {
        element: w,
        padding: C
      }
    };
  }), u = S(() => ({
    onFirstUpdate: () => {
      p();
    },
    ...Ky(e, [
      c(i),
      c(s)
    ])
  })), f = S(() => jy(e.referenceEl) || c(o)), { attributes: d, state: v, styles: m, update: p, forceUpdate: g, instanceRef: y } = xb(f, n, u);
  return J(y, (h) => t.value = h), Ie(() => {
    J(() => {
      var h;
      return (h = c(f)) == null ? void 0 : h.getBoundingClientRect();
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
    forceUpdate: g,
    update: p
  };
}, Xy = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: r } = Lr(), l = oe("popper"), a = S(() => c(t).popper), s = k(xe(e.zIndex) ? e.zIndex : r()), i = S(() => [
    l.b(),
    l.is("pure", e.pure),
    l.is(e.effect),
    e.popperClass
  ]), u = S(() => [
    { zIndex: c(s) },
    c(n).popper,
    e.popperStyle || {}
  ]), f = S(() => o.value === "dialog" ? "false" : void 0), d = S(() => c(n).arrow || {});
  return {
    ariaModal: f,
    arrowStyle: d,
    contentAttrs: a,
    contentClass: i,
    contentStyle: u,
    contentZIndex: s,
    updateZIndex: () => {
      s.value = xe(e.zIndex) ? e.zIndex : r();
    }
  };
}, Zy = (e, t) => {
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
}, Jy = H({
  name: "ElPopperContent"
}), Qy = /* @__PURE__ */ H({
  ...Jy,
  props: Cu,
  emits: Wy,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: r,
      trapped: l,
      onFocusAfterReleased: a,
      onFocusAfterTrapped: s,
      onFocusInTrap: i,
      onFocusoutPrevented: u,
      onReleaseRequested: f
    } = Zy(o, n), { attributes: d, arrowRef: v, contentRef: m, styles: p, instanceRef: g, role: y, update: h } = Yy(o), {
      ariaModal: w,
      arrowStyle: C,
      contentAttrs: b,
      contentClass: $,
      contentStyle: O,
      updateZIndex: _
    } = Xy(o, {
      styles: p,
      attributes: d,
      role: y
    }), E = he(mr, void 0), A = k();
    Xe(vu, {
      arrowStyle: C,
      arrowRef: v,
      arrowOffset: A
    }), E && (E.addInputId || E.removeInputId) && Xe(mr, {
      ...E,
      addInputId: ln,
      removeInputId: ln
    });
    let F;
    const B = (G = !0) => {
      h(), G && _();
    }, M = () => {
      B(!1), o.visible && o.focusOnShow ? l.value = !0 : o.visible === !1 && (l.value = !1);
    };
    return Ie(() => {
      J(() => o.triggerTargetEl, (G, ne) => {
        F == null || F(), F = void 0;
        const Z = c(G || m.value), ee = c(ne || m.value);
        wn(Z) && (F = J([y, () => o.ariaLabel, w, () => o.id], (K) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((ie, N) => {
            Bo(K[N]) ? Z.removeAttribute(ie) : Z.setAttribute(ie, K[N]);
          });
        }, { immediate: !0 })), ee !== Z && wn(ee) && ["role", "aria-label", "aria-modal", "id"].forEach((K) => {
          ee.removeAttribute(K);
        });
      }, { immediate: !0 }), J(() => o.visible, M, { immediate: !0 });
    }), zt(() => {
      F == null || F(), F = void 0;
    }), t({
      popperContentRef: m,
      popperInstanceRef: g,
      updatePopper: B,
      contentStyle: O
    }), (G, ne) => (T(), L("div", mt({
      ref_key: "contentRef",
      ref: m
    }, c(b), {
      style: c(O),
      class: c($),
      tabindex: "-1",
      onMouseenter: ne[0] || (ne[0] = (Z) => G.$emit("mouseenter", Z)),
      onMouseleave: ne[1] || (ne[1] = (Z) => G.$emit("mouseleave", Z))
    }), [
      X(c(wu), {
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
          te(G.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16));
  }
});
var e1 = /* @__PURE__ */ ce(Qy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
const t1 = tt(Cy), ra = Symbol("elTooltip"), Tt = ye({
  ...Mb,
  ...Cu,
  appendTo: {
    type: de([String, Object])
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
    type: de(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean
}), Lo = ye({
  ...bu,
  disabled: Boolean,
  trigger: {
    type: de([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: de(Array),
    default: () => [an.enter, an.space]
  }
}), {
  useModelToggleProps: n1,
  useModelToggleEmits: o1,
  useModelToggle: r1
} = Wi("visible"), l1 = ye({
  ...hu,
  ...n1,
  ...Tt,
  ...Lo,
  ...gu,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), a1 = [
  ...o1,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], s1 = (e, t) => bn(e) ? e.includes(t) : e === t, Un = (e, t, n) => (o) => {
  s1(c(e), t) && n(o);
}, i1 = H({
  name: "ElTooltipTrigger"
}), u1 = /* @__PURE__ */ H({
  ...i1,
  props: Lo,
  setup(e, { expose: t }) {
    const n = e, o = oe("tooltip"), { controlled: r, id: l, open: a, onOpen: s, onClose: i, onToggle: u } = he(ra, void 0), f = k(null), d = () => {
      if (c(r) || n.disabled)
        return !0;
    }, v = Wt(n, "trigger"), m = rn(d, Un(v, "hover", s)), p = rn(d, Un(v, "hover", i)), g = rn(d, Un(v, "click", (b) => {
      b.button === 0 && u(b);
    })), y = rn(d, Un(v, "focus", s)), h = rn(d, Un(v, "focus", i)), w = rn(d, Un(v, "contextmenu", (b) => {
      b.preventDefault(), u(b);
    })), C = rn(d, (b) => {
      const { code: $ } = b;
      n.triggerKeys.includes($) && (b.preventDefault(), u(b));
    });
    return t({
      triggerRef: f
    }), (b, $) => (T(), W(c(ky), {
      id: c(l),
      "virtual-ref": b.virtualRef,
      open: c(a),
      "virtual-triggering": b.virtualTriggering,
      class: P(c(o).e("trigger")),
      onBlur: c(h),
      onClick: c(g),
      onContextmenu: c(w),
      onFocus: c(y),
      onMouseenter: c(m),
      onMouseleave: c(p),
      onKeydown: c(C)
    }, {
      default: D(() => [
        te(b.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var c1 = /* @__PURE__ */ ce(u1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
const d1 = H({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), f1 = /* @__PURE__ */ H({
  ...d1,
  props: Tt,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = ru(), r = oe("tooltip"), l = k(null), a = k(!1), {
      controlled: s,
      id: i,
      open: u,
      trigger: f,
      onClose: d,
      onOpen: v,
      onShow: m,
      onHide: p,
      onBeforeShow: g,
      onBeforeHide: y
    } = he(ra, void 0), h = S(() => n.transition || `${r.namespace.value}-fade-in-linear`), w = S(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    zt(() => {
      a.value = !0;
    });
    const C = S(() => c(w) ? !0 : c(u)), b = S(() => n.disabled ? !1 : c(u)), $ = S(() => n.appendTo || o.value), O = S(() => {
      var K;
      return (K = n.style) != null ? K : {};
    }), _ = S(() => !c(u)), E = () => {
      p();
    }, A = () => {
      if (c(s))
        return !0;
    }, F = rn(A, () => {
      n.enterable && c(f) === "hover" && v();
    }), B = rn(A, () => {
      c(f) === "hover" && d();
    }), M = () => {
      var K, ie;
      (ie = (K = l.value) == null ? void 0 : K.updatePopper) == null || ie.call(K), g == null || g();
    }, G = () => {
      y == null || y();
    }, ne = () => {
      m(), ee = Pc(S(() => {
        var K;
        return (K = l.value) == null ? void 0 : K.popperContentRef;
      }), () => {
        if (c(s))
          return;
        c(f) !== "hover" && d();
      });
    }, Z = () => {
      n.virtualTriggering || d();
    };
    let ee;
    return J(() => c(u), (K) => {
      K || ee == null || ee();
    }, {
      flush: "post"
    }), J(() => n.content, () => {
      var K, ie;
      (ie = (K = l.value) == null ? void 0 : K.updatePopper) == null || ie.call(K);
    }), t({
      contentRef: l
    }), (K, ie) => (T(), W(Js, {
      disabled: !K.teleported,
      to: c($)
    }, [
      X(mn, {
        name: c(h),
        onAfterLeave: E,
        onBeforeEnter: M,
        onAfterEnter: ne,
        onBeforeLeave: G
      }, {
        default: D(() => [
          c(C) ? Re((T(), W(c(e1), mt({
            key: 0,
            id: c(i),
            ref_key: "contentRef",
            ref: l
          }, K.$attrs, {
            "aria-label": K.ariaLabel,
            "aria-hidden": c(_),
            "boundaries-padding": K.boundariesPadding,
            "fallback-placements": K.fallbackPlacements,
            "gpu-acceleration": K.gpuAcceleration,
            offset: K.offset,
            placement: K.placement,
            "popper-options": K.popperOptions,
            strategy: K.strategy,
            effect: K.effect,
            enterable: K.enterable,
            pure: K.pure,
            "popper-class": K.popperClass,
            "popper-style": [K.popperStyle, c(O)],
            "reference-el": K.referenceEl,
            "trigger-target-el": K.triggerTargetEl,
            visible: c(b),
            "z-index": K.zIndex,
            onMouseenter: c(F),
            onMouseleave: c(B),
            onBlur: Z,
            onClose: c(d)
          }), {
            default: D(() => [
              a.value ? V("v-if", !0) : te(K.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [Rt, c(b)]
          ]) : V("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var p1 = /* @__PURE__ */ ce(f1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
const v1 = ["innerHTML"], h1 = { key: 1 }, g1 = H({
  name: "ElTooltip"
}), m1 = /* @__PURE__ */ H({
  ...g1,
  props: l1,
  emits: a1,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    Rb();
    const r = En(), l = k(), a = k(), s = () => {
      var h;
      const w = c(l);
      w && ((h = w.popperInstanceRef) == null || h.update());
    }, i = k(!1), u = k(), { show: f, hide: d, hasUpdateHandler: v } = r1({
      indicator: i,
      toggleReason: u
    }), { onOpen: m, onClose: p } = lu({
      showAfter: Wt(o, "showAfter"),
      hideAfter: Wt(o, "hideAfter"),
      autoClose: Wt(o, "autoClose"),
      open: f,
      close: d
    }), g = S(() => bt(o.visible) && !v.value);
    Xe(ra, {
      controlled: g,
      id: r,
      open: qs(i),
      trigger: Wt(o, "trigger"),
      onOpen: (h) => {
        m(h);
      },
      onClose: (h) => {
        p(h);
      },
      onToggle: (h) => {
        c(i) ? p(h) : m(h);
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
    }), J(() => o.disabled, (h) => {
      h && i.value && (i.value = !1);
    });
    const y = (h) => {
      var w, C;
      const b = (C = (w = a.value) == null ? void 0 : w.contentRef) == null ? void 0 : C.popperContentRef, $ = (h == null ? void 0 : h.relatedTarget) || document.activeElement;
      return b && b.contains($);
    };
    return Qs(() => i.value && d()), t({
      popperRef: l,
      contentRef: a,
      isFocusInsideContent: y,
      updatePopper: s,
      onOpen: m,
      onClose: p,
      hide: d
    }), (h, w) => (T(), W(c(t1), {
      ref_key: "popperRef",
      ref: l,
      role: h.role
    }, {
      default: D(() => [
        X(c1, {
          disabled: h.disabled,
          trigger: h.trigger,
          "trigger-keys": h.triggerKeys,
          "virtual-ref": h.virtualRef,
          "virtual-triggering": h.virtualTriggering
        }, {
          default: D(() => [
            h.$slots.default ? te(h.$slots, "default", { key: 0 }) : V("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        X(p1, {
          ref_key: "contentRef",
          ref: a,
          "aria-label": h.ariaLabel,
          "boundaries-padding": h.boundariesPadding,
          content: h.content,
          disabled: h.disabled,
          effect: h.effect,
          enterable: h.enterable,
          "fallback-placements": h.fallbackPlacements,
          "hide-after": h.hideAfter,
          "gpu-acceleration": h.gpuAcceleration,
          offset: h.offset,
          persistent: h.persistent,
          "popper-class": h.popperClass,
          "popper-style": h.popperStyle,
          placement: h.placement,
          "popper-options": h.popperOptions,
          pure: h.pure,
          "raw-content": h.rawContent,
          "reference-el": h.referenceEl,
          "trigger-target-el": h.triggerTargetEl,
          "show-after": h.showAfter,
          strategy: h.strategy,
          teleported: h.teleported,
          transition: h.transition,
          "virtual-triggering": h.virtualTriggering,
          "z-index": h.zIndex,
          "append-to": h.appendTo
        }, {
          default: D(() => [
            te(h.$slots, "content", {}, () => [
              h.rawContent ? (T(), L("span", {
                key: 0,
                innerHTML: h.content
              }, null, 8, v1)) : (T(), L("span", h1, me(h.content), 1))
            ]),
            h.showArrow ? (T(), W(c(Ey), {
              key: 0,
              "arrow-offset": h.arrowOffset
            }, null, 8, ["arrow-offset"])) : V("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var b1 = /* @__PURE__ */ ce(m1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
const la = tt(b1), Su = Symbol("buttonGroupContextKey"), y1 = (e, t) => {
  Po({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, S(() => e.type === "text"));
  const n = he(Su, void 0), o = Nr("button"), { form: r } = On(), l = un(S(() => n == null ? void 0 : n.size)), a = fo(), s = k(), i = No(), u = S(() => e.type || (n == null ? void 0 : n.type) || ""), f = S(() => {
    var p, g, y;
    return (y = (g = e.autoInsertSpace) != null ? g : (p = o.value) == null ? void 0 : p.autoInsertSpace) != null ? y : !1;
  }), d = S(() => e.tag === "button" ? {
    ariaDisabled: a.value || e.loading,
    disabled: a.value || e.loading,
    autofocus: e.autofocus,
    type: e.nativeType
  } : {}), v = S(() => {
    var p;
    const g = (p = i.default) == null ? void 0 : p.call(i);
    if (f.value && (g == null ? void 0 : g.length) === 1) {
      const y = g[0];
      if ((y == null ? void 0 : y.type) === Xs) {
        const h = y.children;
        return new RegExp("^\\p{Unified_Ideograph}{2}$", "u").test(h.trim());
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
}, w1 = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], C1 = ["button", "submit", "reset"], fl = ye({
  size: Kn,
  disabled: Boolean,
  type: {
    type: String,
    values: w1,
    default: ""
  },
  icon: {
    type: Je
  },
  nativeType: {
    type: String,
    values: C1,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: Je,
    default: () => kr
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
    type: de([String, Object]),
    default: "button"
  }
}), S1 = {
  click: (e) => e instanceof MouseEvent
};
function et(e, t) {
  _1(e) && (e = "100%");
  var n = E1(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Yo(e) {
  return Math.min(1, Math.max(0, e));
}
function _1(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function E1(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function _u(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Xo(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Ln(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function $1(e, t, n) {
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
function qr(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function T1(e, t, n) {
  var o, r, l;
  if (e = et(e, 360), t = et(t, 100), n = et(n, 100), t === 0)
    r = n, l = n, o = n;
  else {
    var a = n < 0.5 ? n * (1 + t) : n + t - n * t, s = 2 * n - a;
    o = qr(s, a, e + 1 / 3), r = qr(s, a, e), l = qr(s, a, e - 1 / 3);
  }
  return { r: o * 255, g: r * 255, b: l * 255 };
}
function ks(e, t, n) {
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
function O1(e, t, n) {
  e = et(e, 360) * 6, t = et(t, 100), n = et(n, 100);
  var o = Math.floor(e), r = e - o, l = n * (1 - t), a = n * (1 - r * t), s = n * (1 - (1 - r) * t), i = o % 6, u = [n, a, l, l, s, n][i], f = [s, n, n, a, l, l][i], d = [l, l, s, n, n, a][i];
  return { r: u * 255, g: f * 255, b: d * 255 };
}
function xs(e, t, n, o) {
  var r = [
    Ln(Math.round(e).toString(16)),
    Ln(Math.round(t).toString(16)),
    Ln(Math.round(n).toString(16))
  ];
  return o && r[0].startsWith(r[0].charAt(1)) && r[1].startsWith(r[1].charAt(1)) && r[2].startsWith(r[2].charAt(1)) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("");
}
function k1(e, t, n, o, r) {
  var l = [
    Ln(Math.round(e).toString(16)),
    Ln(Math.round(t).toString(16)),
    Ln(Math.round(n).toString(16)),
    Ln(x1(o))
  ];
  return r && l[0].startsWith(l[0].charAt(1)) && l[1].startsWith(l[1].charAt(1)) && l[2].startsWith(l[2].charAt(1)) && l[3].startsWith(l[3].charAt(1)) ? l[0].charAt(0) + l[1].charAt(0) + l[2].charAt(0) + l[3].charAt(0) : l.join("");
}
function x1(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Ps(e) {
  return Et(e) / 255;
}
function Et(e) {
  return parseInt(e, 16);
}
function P1(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var pl = {
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
function A1(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, o = null, r = null, l = null, a = !1, s = !1;
  return typeof e == "string" && (e = N1(e)), typeof e == "object" && (nn(e.r) && nn(e.g) && nn(e.b) ? (t = $1(e.r, e.g, e.b), a = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : nn(e.h) && nn(e.s) && nn(e.v) ? (o = Xo(e.s), r = Xo(e.v), t = O1(e.h, o, r), a = !0, s = "hsv") : nn(e.h) && nn(e.s) && nn(e.l) && (o = Xo(e.s), l = Xo(e.l), t = T1(e.h, o, l), a = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = _u(n), {
    ok: a,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var I1 = "[-\\+]?\\d+%?", L1 = "[-\\+]?\\d*\\.\\d+%?", gn = "(?:".concat(L1, ")|(?:").concat(I1, ")"), Gr = "[\\s|\\(]+(".concat(gn, ")[,|\\s]+(").concat(gn, ")[,|\\s]+(").concat(gn, ")\\s*\\)?"), Yr = "[\\s|\\(]+(".concat(gn, ")[,|\\s]+(").concat(gn, ")[,|\\s]+(").concat(gn, ")[,|\\s]+(").concat(gn, ")\\s*\\)?"), Vt = {
  CSS_UNIT: new RegExp(gn),
  rgb: new RegExp("rgb" + Gr),
  rgba: new RegExp("rgba" + Yr),
  hsl: new RegExp("hsl" + Gr),
  hsla: new RegExp("hsla" + Yr),
  hsv: new RegExp("hsv" + Gr),
  hsva: new RegExp("hsva" + Yr),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function N1(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (pl[e])
    e = pl[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = Vt.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = Vt.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = Vt.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = Vt.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = Vt.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = Vt.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = Vt.hex8.exec(e), n ? {
    r: Et(n[1]),
    g: Et(n[2]),
    b: Et(n[3]),
    a: Ps(n[4]),
    format: t ? "name" : "hex8"
  } : (n = Vt.hex6.exec(e), n ? {
    r: Et(n[1]),
    g: Et(n[2]),
    b: Et(n[3]),
    format: t ? "name" : "hex"
  } : (n = Vt.hex4.exec(e), n ? {
    r: Et(n[1] + n[1]),
    g: Et(n[2] + n[2]),
    b: Et(n[3] + n[3]),
    a: Ps(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = Vt.hex3.exec(e), n ? {
    r: Et(n[1] + n[1]),
    g: Et(n[2] + n[2]),
    b: Et(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function nn(e) {
  return !!Vt.CSS_UNIT.exec(String(e));
}
var R1 = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var o;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = P1(t)), this.originalInput = t;
      var r = A1(t);
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
      return this.a = _u(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = ks(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = ks(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsva(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = Os(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = Os(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsla(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), xs(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), k1(this.r, this.g, this.b, this.a, t);
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
      for (var t = "#" + xs(this.r, this.g, this.b, !1), n = 0, o = Object.entries(pl); n < o.length; n++) {
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
      return n.l += t / 100, n.l = Yo(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = Yo(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = Yo(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = Yo(n.s), new e(n);
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
function fn(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function M1(e) {
  const t = fo(), n = oe("button");
  return S(() => {
    let o = {};
    const r = e.color;
    if (r) {
      const l = new R1(r), a = e.dark ? l.tint(20).toString() : fn(l, 20);
      if (e.plain)
        o = n.cssVarBlock({
          "bg-color": e.dark ? fn(l, 90) : l.tint(90).toString(),
          "text-color": r,
          "border-color": e.dark ? fn(l, 50) : l.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": r,
          "hover-border-color": r,
          "active-bg-color": a,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": a
        }), t.value && (o[n.cssVarBlockName("disabled-bg-color")] = e.dark ? fn(l, 90) : l.tint(90).toString(), o[n.cssVarBlockName("disabled-text-color")] = e.dark ? fn(l, 50) : l.tint(50).toString(), o[n.cssVarBlockName("disabled-border-color")] = e.dark ? fn(l, 80) : l.tint(80).toString());
      else {
        const s = e.dark ? fn(l, 30) : l.tint(30).toString(), i = l.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
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
          const u = e.dark ? fn(l, 50) : l.tint(50).toString();
          o[n.cssVarBlockName("disabled-bg-color")] = u, o[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, o[n.cssVarBlockName("disabled-border-color")] = u;
        }
      }
    }
    return o;
  });
}
const B1 = H({
  name: "ElButton"
}), z1 = /* @__PURE__ */ H({
  ...B1,
  props: fl,
  emits: S1,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = M1(o), l = oe("button"), { _ref: a, _size: s, _type: i, _disabled: u, _props: f, shouldAddSpace: d, handleClick: v } = y1(o, n);
    return t({
      ref: a,
      size: s,
      type: i,
      disabled: u,
      shouldAddSpace: d
    }), (m, p) => (T(), W(je(m.tag), mt({
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
        m.loading ? (T(), L(ze, { key: 0 }, [
          m.$slots.loading ? te(m.$slots, "loading", { key: 0 }) : (T(), W(c(Ne), {
            key: 1,
            class: P(c(l).is("loading"))
          }, {
            default: D(() => [
              (T(), W(je(m.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : m.icon || m.$slots.icon ? (T(), W(c(Ne), { key: 1 }, {
          default: D(() => [
            m.icon ? (T(), W(je(m.icon), { key: 0 })) : te(m.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : V("v-if", !0),
        m.$slots.default ? (T(), L("span", {
          key: 2,
          class: P({ [c(l).em("text", "expand")]: c(d) })
        }, [
          te(m.$slots, "default")
        ], 2)) : V("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var F1 = /* @__PURE__ */ ce(z1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
const H1 = {
  size: fl.size,
  type: fl.type
}, D1 = H({
  name: "ElButtonGroup"
}), V1 = /* @__PURE__ */ H({
  ...D1,
  props: H1,
  setup(e) {
    const t = e;
    Xe(Su, $n({
      size: Wt(t, "size"),
      type: Wt(t, "type")
    }));
    const n = oe("button");
    return (o, r) => (T(), L("div", {
      class: P(`${c(n).b("group")}`)
    }, [
      te(o.$slots, "default")
    ], 2));
  }
});
var Eu = /* @__PURE__ */ ce(V1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
const $u = tt(F1, {
  ButtonGroup: Eu
});
Ft(Eu);
function W1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
const vn = /* @__PURE__ */ new Map();
let As;
ke && (document.addEventListener("mousedown", (e) => As = e), document.addEventListener("mouseup", (e) => {
  for (const t of vn.values())
    for (const { documentHandler: n } of t)
      n(e, As);
}));
function Is(e, t) {
  let n = [];
  return Array.isArray(t.arg) ? n = t.arg : wn(t.arg) && n.push(t.arg), function(o, r) {
    const l = t.instance.popperRef, a = o.target, s = r == null ? void 0 : r.target, i = !t || !t.instance, u = !a || !s, f = e.contains(a) || e.contains(s), d = e === a, v = n.length && n.some((p) => p == null ? void 0 : p.contains(a)) || n.length && n.includes(s), m = l && (l.contains(a) || l.contains(s));
    i || u || f || d || v || m || t.value(o, r);
  };
}
const Tu = {
  beforeMount(e, t) {
    vn.has(e) || vn.set(e, []), vn.get(e).push({
      documentHandler: Is(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    vn.has(e) || vn.set(e, []);
    const n = vn.get(e), o = n.findIndex((l) => l.bindingFn === t.oldValue), r = {
      documentHandler: Is(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, r) : n.push(r);
  },
  unmounted(e) {
    vn.delete(e);
  }
};
var Ls = !1, In, vl, hl, nr, or, Ou, rr, gl, ml, bl, ku, yl, wl, xu, Pu;
function gt() {
  if (!Ls) {
    Ls = !0;
    var e = navigator.userAgent, t = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e), n = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
    if (yl = /\b(iPhone|iP[ao]d)/.exec(e), wl = /\b(iP[ao]d)/.exec(e), bl = /Android/i.exec(e), xu = /FBAN\/\w+;/i.exec(e), Pu = /Mobile/i.exec(e), ku = !!/Win64/.exec(e), t) {
      In = t[1] ? parseFloat(t[1]) : t[5] ? parseFloat(t[5]) : NaN, In && document && document.documentMode && (In = document.documentMode);
      var o = /(?:Trident\/(\d+.\d+))/.exec(e);
      Ou = o ? parseFloat(o[1]) + 4 : In, vl = t[2] ? parseFloat(t[2]) : NaN, hl = t[3] ? parseFloat(t[3]) : NaN, nr = t[4] ? parseFloat(t[4]) : NaN, nr ? (t = /(?:Chrome\/(\d+\.\d+))/.exec(e), or = t && t[1] ? parseFloat(t[1]) : NaN) : or = NaN;
    } else
      In = vl = hl = or = nr = NaN;
    if (n) {
      if (n[1]) {
        var r = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
        rr = r ? parseFloat(r[1].replace("_", ".")) : !0;
      } else
        rr = !1;
      gl = !!n[2], ml = !!n[3];
    } else
      rr = gl = ml = !1;
  }
}
var Cl = { ie: function() {
  return gt() || In;
}, ieCompatibilityMode: function() {
  return gt() || Ou > In;
}, ie64: function() {
  return Cl.ie() && ku;
}, firefox: function() {
  return gt() || vl;
}, opera: function() {
  return gt() || hl;
}, webkit: function() {
  return gt() || nr;
}, safari: function() {
  return Cl.webkit();
}, chrome: function() {
  return gt() || or;
}, windows: function() {
  return gt() || gl;
}, osx: function() {
  return gt() || rr;
}, linux: function() {
  return gt() || ml;
}, iphone: function() {
  return gt() || yl;
}, mobile: function() {
  return gt() || yl || wl || bl || Pu;
}, nativeApp: function() {
  return gt() || xu;
}, android: function() {
  return gt() || bl;
}, ipad: function() {
  return gt() || wl;
} }, K1 = Cl, Zo = !!(typeof window < "u" && window.document && window.document.createElement), j1 = { canUseDOM: Zo, canUseWorkers: typeof Worker < "u", canUseEventListeners: Zo && !!(window.addEventListener || window.attachEvent), canUseViewport: Zo && !!window.screen, isInWorker: !Zo }, Au = j1, Iu;
Au.canUseDOM && (Iu = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0);
function U1(e, t) {
  if (!Au.canUseDOM || t && !("addEventListener" in document))
    return !1;
  var n = "on" + e, o = n in document;
  if (!o) {
    var r = document.createElement("div");
    r.setAttribute(n, "return;"), o = typeof r[n] == "function";
  }
  return !o && Iu && e === "wheel" && (o = document.implementation.hasFeature("Events.wheel", "3.0")), o;
}
var q1 = U1, Ns = 10, Rs = 40, Ms = 800;
function Lu(e) {
  var t = 0, n = 0, o = 0, r = 0;
  return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), o = t * Ns, r = n * Ns, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (o = e.deltaX), (o || r) && e.deltaMode && (e.deltaMode == 1 ? (o *= Rs, r *= Rs) : (o *= Ms, r *= Ms)), o && !t && (t = o < 1 ? -1 : 1), r && !n && (n = r < 1 ? -1 : 1), { spinX: t, spinY: n, pixelX: o, pixelY: r };
}
Lu.getEventType = function() {
  return K1.firefox() ? "DOMMouseScroll" : q1("wheel") ? "wheel" : "mousewheel";
};
var G1 = Lu;
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
const Y1 = function(e, t) {
  if (e && e.addEventListener) {
    const n = function(o) {
      const r = G1(o);
      t && Reflect.apply(t, this, [o, r]);
    };
    e.addEventListener("wheel", n, { passive: !0 });
  }
}, X1 = {
  beforeMount(e, t) {
    Y1(e, t.value);
  }
}, Nu = {
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
  size: Kn,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: !0
  }
}, Ru = {
  [Fe]: (e) => Ue(e) || xe(e) || bt(e),
  change: (e) => Ue(e) || xe(e) || bt(e)
}, po = Symbol("checkboxGroupContextKey"), Z1 = ({
  model: e,
  isChecked: t
}) => {
  const n = he(po, void 0), o = S(() => {
    var l, a;
    const s = (l = n == null ? void 0 : n.max) == null ? void 0 : l.value, i = (a = n == null ? void 0 : n.min) == null ? void 0 : a.value;
    return !eo(s) && e.value.length >= s && !t.value || !eo(i) && e.value.length <= i && t.value;
  });
  return {
    isDisabled: fo(S(() => (n == null ? void 0 : n.disabled.value) || o.value)),
    isLimitDisabled: o
  };
}, J1 = (e, {
  model: t,
  isLimitExceeded: n,
  hasOwnLabel: o,
  isDisabled: r,
  isLabeledByFormItem: l
}) => {
  const a = he(po, void 0), { formItem: s } = On(), { emit: i } = $e();
  function u(p) {
    var g, y;
    return p === e.trueLabel || p === !0 ? (g = e.trueLabel) != null ? g : !0 : (y = e.falseLabel) != null ? y : !1;
  }
  function f(p, g) {
    i("change", u(p), g);
  }
  function d(p) {
    if (n.value)
      return;
    const g = p.target;
    i("change", u(g.checked), p);
  }
  async function v(p) {
    n.value || !o.value && !r.value && l.value && (p.composedPath().some((h) => h.tagName === "LABEL") || (t.value = u([!1, e.falseLabel].includes(t.value)), await be(), f(t.value, p)));
  }
  const m = S(() => (a == null ? void 0 : a.validateEvent) || e.validateEvent);
  return J(() => e.modelValue, () => {
    m.value && (s == null || s.validate("change").catch((p) => Ve(p)));
  }), {
    handleChange: d,
    onClickRoot: v
  };
}, Q1 = (e) => {
  const t = k(!1), { emit: n } = $e(), o = he(po, void 0), r = S(() => eo(o) === !1), l = k(!1);
  return {
    model: S({
      get() {
        var s, i;
        return r.value ? (s = o == null ? void 0 : o.modelValue) == null ? void 0 : s.value : (i = e.modelValue) != null ? i : t.value;
      },
      set(s) {
        var i, u;
        r.value && bn(s) ? (l.value = ((i = o == null ? void 0 : o.max) == null ? void 0 : i.value) !== void 0 && s.length > (o == null ? void 0 : o.max.value), l.value === !1 && ((u = o == null ? void 0 : o.changeEvent) == null || u.call(o, s))) : (n(Fe, s), t.value = s);
      }
    }),
    isGroup: r,
    isLimitExceeded: l
  };
}, e2 = (e, t, { model: n }) => {
  const o = he(po, void 0), r = k(!1), l = S(() => {
    const u = n.value;
    return bt(u) ? u : bn(u) ? Qe(e.label) ? u.map(Zn).some((f) => pr(f, e.label)) : u.map(Zn).includes(e.label) : u != null ? u === e.trueLabel : !!u;
  }), a = un(S(() => {
    var u;
    return (u = o == null ? void 0 : o.size) == null ? void 0 : u.value;
  }), {
    prop: !0
  }), s = un(S(() => {
    var u;
    return (u = o == null ? void 0 : o.size) == null ? void 0 : u.value;
  })), i = S(() => !!t.default || !Bo(e.label));
  return {
    checkboxButtonSize: a,
    isChecked: l,
    isFocused: r,
    checkboxSize: s,
    hasOwnLabel: i
  };
}, t2 = (e, { model: t }) => {
  function n() {
    bn(t.value) && !t.value.includes(e.label) ? t.value.push(e.label) : t.value = e.trueLabel || !0;
  }
  e.checked && n();
}, Mu = (e, t) => {
  const { formItem: n } = On(), { model: o, isGroup: r, isLimitExceeded: l } = Q1(e), {
    isFocused: a,
    isChecked: s,
    checkboxButtonSize: i,
    checkboxSize: u,
    hasOwnLabel: f
  } = e2(e, t, { model: o }), { isDisabled: d } = Z1({ model: o, isChecked: s }), { inputId: v, isLabeledByFormItem: m } = Do(e, {
    formItemContext: n,
    disableIdGeneration: f,
    disableIdManagement: r
  }), { handleChange: p, onClickRoot: g } = J1(e, {
    model: o,
    isLimitExceeded: l,
    hasOwnLabel: f,
    isDisabled: d,
    isLabeledByFormItem: m
  });
  return t2(e, { model: o }), {
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
    onClickRoot: g
  };
}, n2 = ["id", "indeterminate", "name", "tabindex", "disabled", "true-value", "false-value"], o2 = ["id", "indeterminate", "disabled", "value", "name", "tabindex"], r2 = H({
  name: "ElCheckbox"
}), l2 = /* @__PURE__ */ H({
  ...r2,
  props: Nu,
  emits: Ru,
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
    } = Mu(t, n), m = oe("checkbox"), p = S(() => [
      m.b(),
      m.m(i.value),
      m.is("disabled", a.value),
      m.is("bordered", t.border),
      m.is("checked", l.value)
    ]), g = S(() => [
      m.e("input"),
      m.is("disabled", a.value),
      m.is("checked", l.value),
      m.is("indeterminate", t.indeterminate),
      m.is("focus", s.value)
    ]);
    return (y, h) => (T(), W(je(!c(u) && c(r) ? "span" : "label"), {
      class: P(c(p)),
      "aria-controls": y.indeterminate ? y.controls : null,
      onClick: c(v)
    }, {
      default: D(() => [
        R("span", {
          class: P(c(g))
        }, [
          y.trueLabel || y.falseLabel ? Re((T(), L("input", {
            key: 0,
            id: c(o),
            "onUpdate:modelValue": h[0] || (h[0] = (w) => Jt(f) ? f.value = w : null),
            class: P(c(m).e("original")),
            type: "checkbox",
            indeterminate: y.indeterminate,
            name: y.name,
            tabindex: y.tabindex,
            disabled: c(a),
            "true-value": y.trueLabel,
            "false-value": y.falseLabel,
            onChange: h[1] || (h[1] = (...w) => c(d) && c(d)(...w)),
            onFocus: h[2] || (h[2] = (w) => s.value = !0),
            onBlur: h[3] || (h[3] = (w) => s.value = !1),
            onClick: h[4] || (h[4] = De(() => {
            }, ["stop"]))
          }, null, 42, n2)), [
            [sr, c(f)]
          ]) : Re((T(), L("input", {
            key: 1,
            id: c(o),
            "onUpdate:modelValue": h[5] || (h[5] = (w) => Jt(f) ? f.value = w : null),
            class: P(c(m).e("original")),
            type: "checkbox",
            indeterminate: y.indeterminate,
            disabled: c(a),
            value: y.label,
            name: y.name,
            tabindex: y.tabindex,
            onChange: h[6] || (h[6] = (...w) => c(d) && c(d)(...w)),
            onFocus: h[7] || (h[7] = (w) => s.value = !0),
            onBlur: h[8] || (h[8] = (w) => s.value = !1),
            onClick: h[9] || (h[9] = De(() => {
            }, ["stop"]))
          }, null, 42, o2)), [
            [sr, c(f)]
          ]),
          R("span", {
            class: P(c(m).e("inner"))
          }, null, 2)
        ], 2),
        c(u) ? (T(), L("span", {
          key: 0,
          class: P(c(m).e("label"))
        }, [
          te(y.$slots, "default"),
          y.$slots.default ? V("v-if", !0) : (T(), L(ze, { key: 0 }, [
            jt(me(y.label), 1)
          ], 64))
        ], 2)) : V("v-if", !0)
      ]),
      _: 3
    }, 8, ["class", "aria-controls", "onClick"]));
  }
});
var a2 = /* @__PURE__ */ ce(l2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);
const s2 = ["name", "tabindex", "disabled", "true-value", "false-value"], i2 = ["name", "tabindex", "disabled", "value"], u2 = H({
  name: "ElCheckboxButton"
}), c2 = /* @__PURE__ */ H({
  ...u2,
  props: Nu,
  emits: Ru,
  setup(e) {
    const t = e, n = No(), {
      isFocused: o,
      isChecked: r,
      isDisabled: l,
      checkboxButtonSize: a,
      model: s,
      handleChange: i
    } = Mu(t, n), u = he(po, void 0), f = oe("checkbox"), d = S(() => {
      var m, p, g, y;
      const h = (p = (m = u == null ? void 0 : u.fill) == null ? void 0 : m.value) != null ? p : "";
      return {
        backgroundColor: h,
        borderColor: h,
        color: (y = (g = u == null ? void 0 : u.textColor) == null ? void 0 : g.value) != null ? y : "",
        boxShadow: h ? `-1px 0 0 0 ${h}` : void 0
      };
    }), v = S(() => [
      f.b("button"),
      f.bm("button", a.value),
      f.is("disabled", l.value),
      f.is("checked", r.value),
      f.is("focus", o.value)
    ]);
    return (m, p) => (T(), L("label", {
      class: P(c(v))
    }, [
      m.trueLabel || m.falseLabel ? Re((T(), L("input", {
        key: 0,
        "onUpdate:modelValue": p[0] || (p[0] = (g) => Jt(s) ? s.value = g : null),
        class: P(c(f).be("button", "original")),
        type: "checkbox",
        name: m.name,
        tabindex: m.tabindex,
        disabled: c(l),
        "true-value": m.trueLabel,
        "false-value": m.falseLabel,
        onChange: p[1] || (p[1] = (...g) => c(i) && c(i)(...g)),
        onFocus: p[2] || (p[2] = (g) => o.value = !0),
        onBlur: p[3] || (p[3] = (g) => o.value = !1),
        onClick: p[4] || (p[4] = De(() => {
        }, ["stop"]))
      }, null, 42, s2)), [
        [sr, c(s)]
      ]) : Re((T(), L("input", {
        key: 1,
        "onUpdate:modelValue": p[5] || (p[5] = (g) => Jt(s) ? s.value = g : null),
        class: P(c(f).be("button", "original")),
        type: "checkbox",
        name: m.name,
        tabindex: m.tabindex,
        disabled: c(l),
        value: m.label,
        onChange: p[6] || (p[6] = (...g) => c(i) && c(i)(...g)),
        onFocus: p[7] || (p[7] = (g) => o.value = !0),
        onBlur: p[8] || (p[8] = (g) => o.value = !1),
        onClick: p[9] || (p[9] = De(() => {
        }, ["stop"]))
      }, null, 42, i2)), [
        [sr, c(s)]
      ]),
      m.$slots.default || m.label ? (T(), L("span", {
        key: 2,
        class: P(c(f).be("button", "inner")),
        style: Oe(c(r) ? c(d) : void 0)
      }, [
        te(m.$slots, "default", {}, () => [
          jt(me(m.label), 1)
        ])
      ], 6)) : V("v-if", !0)
    ], 2));
  }
});
var Bu = /* @__PURE__ */ ce(c2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);
const d2 = ye({
  modelValue: {
    type: de(Array),
    default: () => []
  },
  disabled: Boolean,
  min: Number,
  max: Number,
  size: Kn,
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
}), f2 = {
  [Fe]: (e) => bn(e),
  change: (e) => bn(e)
}, p2 = H({
  name: "ElCheckboxGroup"
}), v2 = /* @__PURE__ */ H({
  ...p2,
  props: d2,
  emits: f2,
  setup(e, { emit: t }) {
    const n = e, o = oe("checkbox"), { formItem: r } = On(), { inputId: l, isLabeledByFormItem: a } = Do(n, {
      formItemContext: r
    }), s = async (u) => {
      t(Fe, u), await be(), t("change", u);
    }, i = S({
      get() {
        return n.modelValue;
      },
      set(u) {
        s(u);
      }
    });
    return Xe(po, {
      ...zh(Hn(n), [
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
    }), J(() => n.modelValue, () => {
      n.validateEvent && (r == null || r.validate("change").catch((u) => Ve(u)));
    }), (u, f) => {
      var d;
      return T(), W(je(u.tag), {
        id: c(l),
        class: P(c(o).b("group")),
        role: "group",
        "aria-label": c(a) ? void 0 : u.label || "checkbox-group",
        "aria-labelledby": c(a) ? (d = c(r)) == null ? void 0 : d.labelId : void 0
      }, {
        default: D(() => [
          te(u.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var zu = /* @__PURE__ */ ce(v2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);
const so = tt(a2, {
  CheckboxButton: Bu,
  CheckboxGroup: zu
});
Ft(Bu);
Ft(zu);
const Fu = ye({
  size: Kn,
  disabled: Boolean,
  label: {
    type: [String, Number, Boolean],
    default: ""
  }
}), h2 = ye({
  ...Fu,
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  },
  name: {
    type: String,
    default: ""
  },
  border: Boolean
}), Hu = {
  [Fe]: (e) => Ue(e) || xe(e) || bt(e),
  [to]: (e) => Ue(e) || xe(e) || bt(e)
}, Du = Symbol("radioGroupKey"), Vu = (e, t) => {
  const n = k(), o = he(Du, void 0), r = S(() => !!o), l = S({
    get() {
      return r.value ? o.modelValue : e.modelValue;
    },
    set(f) {
      r.value ? o.changeEvent(f) : t && t(Fe, f), n.value.checked = e.modelValue === e.label;
    }
  }), a = un(S(() => o == null ? void 0 : o.size)), s = fo(S(() => o == null ? void 0 : o.disabled)), i = k(!1), u = S(() => s.value || r.value && l.value !== e.label ? -1 : 0);
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
}, g2 = ["value", "name", "disabled"], m2 = H({
  name: "ElRadio"
}), b2 = /* @__PURE__ */ H({
  ...m2,
  props: h2,
  emits: Hu,
  setup(e, { emit: t }) {
    const n = e, o = oe("radio"), { radioRef: r, radioGroup: l, focus: a, size: s, disabled: i, modelValue: u } = Vu(n, t);
    function f() {
      be(() => t("change", u.value));
    }
    return (d, v) => {
      var m;
      return T(), L("label", {
        class: P([
          c(o).b(),
          c(o).is("disabled", c(i)),
          c(o).is("focus", c(a)),
          c(o).is("bordered", d.border),
          c(o).is("checked", c(u) === d.label),
          c(o).m(c(s))
        ])
      }, [
        R("span", {
          class: P([
            c(o).e("input"),
            c(o).is("disabled", c(i)),
            c(o).is("checked", c(u) === d.label)
          ])
        }, [
          Re(R("input", {
            ref_key: "radioRef",
            ref: r,
            "onUpdate:modelValue": v[0] || (v[0] = (p) => Jt(u) ? u.value = p : null),
            class: P(c(o).e("original")),
            value: d.label,
            name: d.name || ((m = c(l)) == null ? void 0 : m.name),
            disabled: c(i),
            type: "radio",
            onFocus: v[1] || (v[1] = (p) => a.value = !0),
            onBlur: v[2] || (v[2] = (p) => a.value = !1),
            onChange: f,
            onClick: v[3] || (v[3] = De(() => {
            }, ["stop"]))
          }, null, 42, g2), [
            [ei, c(u)]
          ]),
          R("span", {
            class: P(c(o).e("inner"))
          }, null, 2)
        ], 2),
        R("span", {
          class: P(c(o).e("label")),
          onKeydown: v[4] || (v[4] = De(() => {
          }, ["stop"]))
        }, [
          te(d.$slots, "default", {}, () => [
            jt(me(d.label), 1)
          ])
        ], 34)
      ], 2);
    };
  }
});
var y2 = /* @__PURE__ */ ce(b2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);
const w2 = ye({
  ...Fu,
  name: {
    type: String,
    default: ""
  }
}), C2 = ["value", "name", "disabled"], S2 = H({
  name: "ElRadioButton"
}), _2 = /* @__PURE__ */ H({
  ...S2,
  props: w2,
  setup(e) {
    const t = e, n = oe("radio"), { radioRef: o, focus: r, size: l, disabled: a, modelValue: s, radioGroup: i } = Vu(t), u = S(() => ({
      backgroundColor: (i == null ? void 0 : i.fill) || "",
      borderColor: (i == null ? void 0 : i.fill) || "",
      boxShadow: i != null && i.fill ? `-1px 0 0 0 ${i.fill}` : "",
      color: (i == null ? void 0 : i.textColor) || ""
    }));
    return (f, d) => {
      var v;
      return T(), L("label", {
        class: P([
          c(n).b("button"),
          c(n).is("active", c(s) === f.label),
          c(n).is("disabled", c(a)),
          c(n).is("focus", c(r)),
          c(n).bm("button", c(l))
        ])
      }, [
        Re(R("input", {
          ref_key: "radioRef",
          ref: o,
          "onUpdate:modelValue": d[0] || (d[0] = (m) => Jt(s) ? s.value = m : null),
          class: P(c(n).be("button", "original-radio")),
          value: f.label,
          type: "radio",
          name: f.name || ((v = c(i)) == null ? void 0 : v.name),
          disabled: c(a),
          onFocus: d[1] || (d[1] = (m) => r.value = !0),
          onBlur: d[2] || (d[2] = (m) => r.value = !1),
          onClick: d[3] || (d[3] = De(() => {
          }, ["stop"]))
        }, null, 42, C2), [
          [ei, c(s)]
        ]),
        R("span", {
          class: P(c(n).be("button", "inner")),
          style: Oe(c(s) === f.label ? c(u) : {}),
          onKeydown: d[4] || (d[4] = De(() => {
          }, ["stop"]))
        }, [
          te(f.$slots, "default", {}, () => [
            jt(me(f.label), 1)
          ])
        ], 38)
      ], 2);
    };
  }
});
var Wu = /* @__PURE__ */ ce(_2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);
const E2 = ye({
  id: {
    type: String,
    default: void 0
  },
  size: Kn,
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
}), $2 = Hu, T2 = ["id", "aria-label", "aria-labelledby"], O2 = H({
  name: "ElRadioGroup"
}), k2 = /* @__PURE__ */ H({
  ...O2,
  props: E2,
  emits: $2,
  setup(e, { emit: t }) {
    const n = e, o = oe("radio"), r = En(), l = k(), { formItem: a } = On(), { inputId: s, isLabeledByFormItem: i } = Do(n, {
      formItemContext: a
    }), u = (d) => {
      t(Fe, d), be(() => t("change", d));
    };
    Ie(() => {
      const d = l.value.querySelectorAll("[type=radio]"), v = d[0];
      !Array.from(d).some((m) => m.checked) && v && (v.tabIndex = 0);
    });
    const f = S(() => n.name || r.value);
    return Xe(Du, $n({
      ...Hn(n),
      changeEvent: u,
      name: f
    })), J(() => n.modelValue, () => {
      n.validateEvent && (a == null || a.validate("change").catch((d) => Ve(d)));
    }), (d, v) => (T(), L("div", {
      id: c(s),
      ref_key: "radioGroupRef",
      ref: l,
      class: P(c(o).b("group")),
      role: "radiogroup",
      "aria-label": c(i) ? void 0 : d.label || "radio-group",
      "aria-labelledby": c(i) ? c(a).labelId : void 0
    }, [
      te(d.$slots, "default")
    ], 10, T2));
  }
});
var Ku = /* @__PURE__ */ ce(k2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);
const x2 = tt(y2, {
  RadioButton: Wu,
  RadioGroup: Ku
}), P2 = Ft(Ku), A2 = Ft(Wu), ju = ye({
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
    values: zo,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), I2 = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, L2 = H({
  name: "ElTag"
}), N2 = /* @__PURE__ */ H({
  ...L2,
  props: ju,
  emits: I2,
  setup(e, { emit: t }) {
    const n = e, o = un(), r = oe("tag"), l = S(() => {
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
    return (i, u) => i.disableTransitions ? (T(), L("span", {
      key: 0,
      class: P(c(l)),
      style: Oe({ backgroundColor: i.color }),
      onClick: s
    }, [
      R("span", {
        class: P(c(r).e("content"))
      }, [
        te(i.$slots, "default")
      ], 2),
      i.closable ? (T(), W(c(Ne), {
        key: 0,
        class: P(c(r).e("close")),
        onClick: De(a, ["stop"])
      }, {
        default: D(() => [
          X(c(vr))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : V("v-if", !0)
    ], 6)) : (T(), W(mn, {
      key: 1,
      name: `${c(r).namespace.value}-zoom-in-center`,
      appear: ""
    }, {
      default: D(() => [
        R("span", {
          class: P(c(l)),
          style: Oe({ backgroundColor: i.color }),
          onClick: s
        }, [
          R("span", {
            class: P(c(r).e("content"))
          }, [
            te(i.$slots, "default")
          ], 2),
          i.closable ? (T(), W(c(Ne), {
            key: 0,
            class: P(c(r).e("close")),
            onClick: De(a, ["stop"])
          }, {
            default: D(() => [
              X(c(vr))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : V("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var R2 = /* @__PURE__ */ ce(N2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
const M2 = tt(R2), B2 = H({
  name: "ElContainer"
}), z2 = /* @__PURE__ */ H({
  ...B2,
  props: {
    direction: {
      type: String
    }
  },
  setup(e) {
    const t = e, n = No(), o = oe("container"), r = S(() => t.direction === "vertical" ? !0 : t.direction === "horizontal" ? !1 : n && n.default ? n.default().some((a) => {
      const s = a.type.name;
      return s === "ElHeader" || s === "ElFooter";
    }) : !1);
    return (l, a) => (T(), L("section", {
      class: P([c(o).b(), c(o).is("vertical", c(r))])
    }, [
      te(l.$slots, "default")
    ], 2));
  }
});
var F2 = /* @__PURE__ */ ce(z2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/container/src/container.vue"]]);
const H2 = H({
  name: "ElAside"
}), D2 = /* @__PURE__ */ H({
  ...H2,
  props: {
    width: {
      type: String,
      default: null
    }
  },
  setup(e) {
    const t = e, n = oe("aside"), o = S(() => t.width ? n.cssVarBlock({ width: t.width }) : {});
    return (r, l) => (T(), L("aside", {
      class: P(c(n).b()),
      style: Oe(c(o))
    }, [
      te(r.$slots, "default")
    ], 6));
  }
});
var Uu = /* @__PURE__ */ ce(D2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/container/src/aside.vue"]]);
const V2 = H({
  name: "ElFooter"
}), W2 = /* @__PURE__ */ H({
  ...V2,
  props: {
    height: {
      type: String,
      default: null
    }
  },
  setup(e) {
    const t = e, n = oe("footer"), o = S(() => t.height ? n.cssVarBlock({ height: t.height }) : {});
    return (r, l) => (T(), L("footer", {
      class: P(c(n).b()),
      style: Oe(c(o))
    }, [
      te(r.$slots, "default")
    ], 6));
  }
});
var qu = /* @__PURE__ */ ce(W2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/container/src/footer.vue"]]);
const K2 = H({
  name: "ElHeader"
}), j2 = /* @__PURE__ */ H({
  ...K2,
  props: {
    height: {
      type: String,
      default: null
    }
  },
  setup(e) {
    const t = e, n = oe("header"), o = S(() => t.height ? n.cssVarBlock({
      height: t.height
    }) : {});
    return (r, l) => (T(), L("header", {
      class: P(c(n).b()),
      style: Oe(c(o))
    }, [
      te(r.$slots, "default")
    ], 6));
  }
});
var Gu = /* @__PURE__ */ ce(j2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue"]]);
const U2 = H({
  name: "ElMain"
}), q2 = /* @__PURE__ */ H({
  ...U2,
  setup(e) {
    const t = oe("main");
    return (n, o) => (T(), L("main", {
      class: P(c(t).b())
    }, [
      te(n.$slots, "default")
    ], 2));
  }
});
var Yu = /* @__PURE__ */ ce(q2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/container/src/main.vue"]]);
const G2 = tt(F2, {
  Aside: Uu,
  Footer: qu,
  Header: Gu,
  Main: Yu
});
Ft(Uu);
const Y2 = Ft(qu);
Ft(Gu);
const X2 = Ft(Yu), Z2 = ye({
  mask: {
    type: Boolean,
    default: !0
  },
  customMaskEvent: {
    type: Boolean,
    default: !1
  },
  overlayClass: {
    type: de([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: de([String, Number])
  }
}), J2 = {
  click: (e) => e instanceof MouseEvent
}, Q2 = "overlay";
var ew = H({
  name: "ElOverlay",
  props: Z2,
  emits: J2,
  setup(e, { slots: t, emit: n }) {
    const o = oe(Q2), r = (i) => {
      n("click", i);
    }, { onClick: l, onMousedown: a, onMouseup: s } = Ab(e.customMaskEvent ? void 0 : r);
    return () => e.mask ? X("div", {
      class: [o.b(), e.overlayClass],
      style: {
        zIndex: e.zIndex
      },
      onClick: l,
      onMousedown: a,
      onMouseup: s
    }, [te(t, "default")], Qo.STYLE | Qo.CLASS | Qo.PROPS, ["onClick", "onMouseup", "onMousedown"]) : ae("div", {
      class: e.overlayClass,
      style: {
        zIndex: e.zIndex,
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      }
    }, [te(t, "default")]);
  }
});
const tw = ew, nw = ye({
  center: Boolean,
  alignCenter: Boolean,
  closeIcon: {
    type: Je
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
}), ow = ye({
  ...nw,
  appendToBody: Boolean,
  beforeClose: {
    type: de(Function)
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
}), rw = {
  open: () => !0,
  opened: () => !0,
  close: () => !0,
  closed: () => !0,
  [Fe]: (e) => bt(e),
  openAutoFocus: () => !0,
  closeAutoFocus: () => !0
}, lw = (e, t) => {
  var n;
  const r = $e().emit, { nextZIndex: l } = Lr();
  let a = "";
  const s = En(), i = En(), u = k(!1), f = k(!1), d = k(!1), v = k((n = e.zIndex) != null ? n : l());
  let m, p;
  const g = Nr("namespace", Co), y = S(() => {
    const Z = {}, ee = `--${g.value}-dialog`;
    return e.fullscreen || (e.top && (Z[`${ee}-margin-top`] = e.top), e.width && (Z[`${ee}-width`] = Sn(e.width))), Z;
  }), h = S(() => e.alignCenter ? { display: "flex" } : {});
  function w() {
    r("opened");
  }
  function C() {
    r("closed"), r(Fe, !1), e.destroyOnClose && (d.value = !1);
  }
  function b() {
    r("close");
  }
  function $() {
    p == null || p(), m == null || m(), e.openDelay && e.openDelay > 0 ? { stop: m } = Qr(() => A(), e.openDelay) : A();
  }
  function O() {
    m == null || m(), p == null || p(), e.closeDelay && e.closeDelay > 0 ? { stop: p } = Qr(() => F(), e.closeDelay) : F();
  }
  function _() {
    function Z(ee) {
      ee || (f.value = !0, u.value = !1);
    }
    e.beforeClose ? e.beforeClose(Z) : O();
  }
  function E() {
    e.closeOnClickModal && _();
  }
  function A() {
    ke && (u.value = !0);
  }
  function F() {
    u.value = !1;
  }
  function B() {
    r("openAutoFocus");
  }
  function M() {
    r("closeAutoFocus");
  }
  function G(Z) {
    var ee;
    ((ee = Z.detail) == null ? void 0 : ee.focusReason) === "pointer" && Z.preventDefault();
  }
  e.lockScroll && $0(u);
  function ne() {
    e.closeOnPressEscape && _();
  }
  return J(() => e.modelValue, (Z) => {
    Z ? (f.value = !1, $(), d.value = !0, v.value = xi(e.zIndex) ? l() : v.value++, be(() => {
      r("open"), t.value && (t.value.scrollTop = 0);
    })) : u.value && O();
  }), J(() => e.fullscreen, (Z) => {
    t.value && (Z ? (a = t.value.style.transform, t.value.style.transform = "") : t.value.style.transform = a);
  }), Ie(() => {
    e.modelValue && (u.value = !0, d.value = !0, $());
  }), {
    afterEnter: w,
    afterLeave: C,
    beforeLeave: b,
    handleClose: _,
    onModalClick: E,
    close: O,
    doClose: F,
    onOpenAutoFocus: B,
    onCloseAutoFocus: M,
    onCloseRequested: ne,
    onFocusoutPrevented: G,
    titleId: s,
    bodyId: i,
    closed: f,
    style: y,
    overlayDialogStyle: h,
    rendered: d,
    visible: u,
    zIndex: v
  };
}, aw = ye({
  ...ow,
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
}), sw = rw, iw = H({
  name: "ElDrawer",
  components: {
    ElOverlay: tw,
    ElFocusTrap: wu,
    ElIcon: Ne,
    Close: vr
  },
  inheritAttrs: !1,
  props: aw,
  emits: sw,
  setup(e, { slots: t }) {
    Po({
      scope: "el-drawer",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/drawer.html#slots"
    }, S(() => !!t.title)), Po({
      scope: "el-drawer",
      from: "custom-class",
      replacement: "class",
      version: "2.3.0",
      ref: "https://element-plus.org/en-US/component/drawer.html#attributes",
      type: "Attribute"
    }, S(() => !!e.customClass));
    const n = k(), o = k(), r = oe("drawer"), { t: l } = ft(), a = S(() => e.direction === "rtl" || e.direction === "ltr"), s = S(() => Sn(e.size));
    return {
      ...lw(e, n),
      drawerRef: n,
      focusStartRef: o,
      isHorizontal: a,
      drawerSize: s,
      ns: r,
      t: l
    };
  }
}), uw = ["aria-label", "aria-labelledby", "aria-describedby"], cw = ["id", "aria-level"], dw = ["aria-label"], fw = ["id"];
function pw(e, t, n, o, r, l) {
  const a = Le("close"), s = Le("el-icon"), i = Le("el-focus-trap"), u = Le("el-overlay");
  return T(), W(Js, {
    to: "body",
    disabled: !e.appendToBody
  }, [
    X(mn, {
      name: e.ns.b("fade"),
      onAfterEnter: e.afterEnter,
      onAfterLeave: e.afterLeave,
      onBeforeLeave: e.beforeLeave,
      persisted: ""
    }, {
      default: D(() => [
        Re(X(u, {
          mask: e.modal,
          "overlay-class": e.modalClass,
          "z-index": e.zIndex,
          onClick: e.onModalClick
        }, {
          default: D(() => [
            X(i, {
              loop: "",
              trapped: e.visible,
              "focus-trap-el": e.drawerRef,
              "focus-start-el": e.focusStartRef,
              onReleaseRequested: e.onCloseRequested
            }, {
              default: D(() => [
                R("div", mt({
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
                  R("span", {
                    ref: "focusStartRef",
                    class: P(e.ns.e("sr-focus")),
                    tabindex: "-1"
                  }, null, 2),
                  e.withHeader ? (T(), L("header", {
                    key: 0,
                    class: P(e.ns.e("header"))
                  }, [
                    e.$slots.title ? te(e.$slots, "title", { key: 1 }, () => [
                      V(" DEPRECATED SLOT ")
                    ]) : te(e.$slots, "header", {
                      key: 0,
                      close: e.handleClose,
                      titleId: e.titleId,
                      titleClass: e.ns.e("title")
                    }, () => [
                      e.$slots.title ? V("v-if", !0) : (T(), L("span", {
                        key: 0,
                        id: e.titleId,
                        role: "heading",
                        "aria-level": e.headerAriaLevel,
                        class: P(e.ns.e("title"))
                      }, me(e.title), 11, cw))
                    ]),
                    e.showClose ? (T(), L("button", {
                      key: 2,
                      "aria-label": e.t("el.drawer.close"),
                      class: P(e.ns.e("close-btn")),
                      type: "button",
                      onClick: t[0] || (t[0] = (...f) => e.handleClose && e.handleClose(...f))
                    }, [
                      X(s, {
                        class: P(e.ns.e("close"))
                      }, {
                        default: D(() => [
                          X(a)
                        ]),
                        _: 1
                      }, 8, ["class"])
                    ], 10, dw)) : V("v-if", !0)
                  ], 2)) : V("v-if", !0),
                  e.rendered ? (T(), L("div", {
                    key: 1,
                    id: e.bodyId,
                    class: P(e.ns.e("body"))
                  }, [
                    te(e.$slots, "default")
                  ], 10, fw)) : V("v-if", !0),
                  e.$slots.footer ? (T(), L("div", {
                    key: 2,
                    class: P(e.ns.e("footer"))
                  }, [
                    te(e.$slots, "footer")
                  ], 2)) : V("v-if", !0)
                ], 16, uw)
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
var vw = /* @__PURE__ */ ce(iw, [["render", pw], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/drawer/src/drawer.vue"]]);
const hw = tt(vw), gw = /* @__PURE__ */ H({
  inheritAttrs: !1
});
function mw(e, t, n, o, r, l) {
  return te(e.$slots, "default");
}
var bw = /* @__PURE__ */ ce(gw, [["render", mw], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);
const yw = /* @__PURE__ */ H({
  name: "ElCollectionItem",
  inheritAttrs: !1
});
function ww(e, t, n, o, r, l) {
  return te(e.$slots, "default");
}
var Cw = /* @__PURE__ */ ce(yw, [["render", ww], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);
const Sw = "data-el-collection-item", _w = (e) => {
  const t = `El${e}Collection`, n = `${t}Item`, o = Symbol(t), r = Symbol(n), l = {
    ...bw,
    name: t,
    setup() {
      const s = k(null), i = /* @__PURE__ */ new Map();
      Xe(o, {
        itemMap: i,
        getItems: () => {
          const f = c(s);
          if (!f)
            return [];
          const d = Array.from(f.querySelectorAll(`[${Sw}]`));
          return [...i.values()].sort((m, p) => d.indexOf(m.ref) - d.indexOf(p.ref));
        },
        collectionRef: s
      });
    }
  }, a = {
    ...Cw,
    name: n,
    setup(s, { attrs: i }) {
      const u = k(null), f = he(o, void 0);
      Xe(r, {
        collectionItemRef: u
      }), Ie(() => {
        const d = c(u);
        d && f.itemMap.set(d, {
          ref: d,
          ...i
        });
      }), zt(() => {
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
}, Xr = ye({
  trigger: Lo.trigger,
  effect: {
    ...Tt.effect,
    default: "light"
  },
  type: {
    type: de(String)
  },
  placement: {
    type: de(String),
    default: "bottom"
  },
  popperOptions: {
    type: de(Object),
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
    type: de([Number, String]),
    default: 0
  },
  maxHeight: {
    type: de([Number, String]),
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
    type: de(Object)
  },
  teleported: Tt.teleported
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
    type: Je
  }
});
ye({
  onKeydown: { type: de(Function) }
});
_w("Dropdown");
const Ew = {
  viewBox: "0 0 79 86",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
}, $w = ["id"], Tw = ["stop-color"], Ow = ["stop-color"], kw = ["id"], xw = ["stop-color"], Pw = ["stop-color"], Aw = ["id"], Iw = {
  id: "Illustrations",
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, Lw = {
  id: "B-type",
  transform: "translate(-1268.000000, -535.000000)"
}, Nw = {
  id: "Group-2",
  transform: "translate(1268.000000, 535.000000)"
}, Rw = ["fill"], Mw = ["fill"], Bw = {
  id: "Group-Copy",
  transform: "translate(34.500000, 31.500000) scale(-1, 1) rotate(-25.000000) translate(-34.500000, -31.500000) translate(7.000000, 10.000000)"
}, zw = ["fill"], Fw = ["fill"], Hw = ["fill"], Dw = ["fill"], Vw = ["fill"], Ww = {
  id: "Rectangle-Copy-17",
  transform: "translate(53.000000, 45.000000)"
}, Kw = ["fill", "xlink:href"], jw = ["fill", "mask"], Uw = ["fill"], qw = H({
  name: "ImgEmpty"
}), Gw = /* @__PURE__ */ H({
  ...qw,
  setup(e) {
    const t = oe("empty"), n = En();
    return (o, r) => (T(), L("svg", Ew, [
      R("defs", null, [
        R("linearGradient", {
          id: `linearGradient-1-${c(n)}`,
          x1: "38.8503086%",
          y1: "0%",
          x2: "61.1496914%",
          y2: "100%"
        }, [
          R("stop", {
            "stop-color": `var(${c(t).cssVarBlockName("fill-color-1")})`,
            offset: "0%"
          }, null, 8, Tw),
          R("stop", {
            "stop-color": `var(${c(t).cssVarBlockName("fill-color-4")})`,
            offset: "100%"
          }, null, 8, Ow)
        ], 8, $w),
        R("linearGradient", {
          id: `linearGradient-2-${c(n)}`,
          x1: "0%",
          y1: "9.5%",
          x2: "100%",
          y2: "90.5%"
        }, [
          R("stop", {
            "stop-color": `var(${c(t).cssVarBlockName("fill-color-1")})`,
            offset: "0%"
          }, null, 8, xw),
          R("stop", {
            "stop-color": `var(${c(t).cssVarBlockName("fill-color-6")})`,
            offset: "100%"
          }, null, 8, Pw)
        ], 8, kw),
        R("rect", {
          id: `path-3-${c(n)}`,
          x: "0",
          y: "0",
          width: "17",
          height: "36"
        }, null, 8, Aw)
      ]),
      R("g", Iw, [
        R("g", Lw, [
          R("g", Nw, [
            R("path", {
              id: "Oval-Copy-2",
              d: "M39.5,86 C61.3152476,86 79,83.9106622 79,81.3333333 C79,78.7560045 57.3152476,78 35.5,78 C13.6847524,78 0,78.7560045 0,81.3333333 C0,83.9106622 17.6847524,86 39.5,86 Z",
              fill: `var(${c(t).cssVarBlockName("fill-color-3")})`
            }, null, 8, Rw),
            R("polygon", {
              id: "Rectangle-Copy-14",
              fill: `var(${c(t).cssVarBlockName("fill-color-7")})`,
              transform: "translate(27.500000, 51.500000) scale(1, -1) translate(-27.500000, -51.500000) ",
              points: "13 58 53 58 42 45 2 45"
            }, null, 8, Mw),
            R("g", Bw, [
              R("polygon", {
                id: "Rectangle-Copy-10",
                fill: `var(${c(t).cssVarBlockName("fill-color-7")})`,
                transform: "translate(11.500000, 5.000000) scale(1, -1) translate(-11.500000, -5.000000) ",
                points: "2.84078316e-14 3 18 3 23 7 5 7"
              }, null, 8, zw),
              R("polygon", {
                id: "Rectangle-Copy-11",
                fill: `var(${c(t).cssVarBlockName("fill-color-5")})`,
                points: "-3.69149156e-15 7 38 7 38 43 -3.69149156e-15 43"
              }, null, 8, Fw),
              R("rect", {
                id: "Rectangle-Copy-12",
                fill: `url(#linearGradient-1-${c(n)})`,
                transform: "translate(46.500000, 25.000000) scale(-1, 1) translate(-46.500000, -25.000000) ",
                x: "38",
                y: "7",
                width: "17",
                height: "36"
              }, null, 8, Hw),
              R("polygon", {
                id: "Rectangle-Copy-13",
                fill: `var(${c(t).cssVarBlockName("fill-color-2")})`,
                transform: "translate(39.500000, 3.500000) scale(-1, 1) translate(-39.500000, -3.500000) ",
                points: "24 7 41 7 55 -3.63806207e-12 38 -3.63806207e-12"
              }, null, 8, Dw)
            ]),
            R("rect", {
              id: "Rectangle-Copy-15",
              fill: `url(#linearGradient-2-${c(n)})`,
              x: "13",
              y: "45",
              width: "40",
              height: "36"
            }, null, 8, Vw),
            R("g", Ww, [
              R("use", {
                id: "Mask",
                fill: `var(${c(t).cssVarBlockName("fill-color-8")})`,
                transform: "translate(8.500000, 18.000000) scale(-1, 1) translate(-8.500000, -18.000000) ",
                "xlink:href": `#path-3-${c(n)}`
              }, null, 8, Kw),
              R("polygon", {
                id: "Rectangle-Copy",
                fill: `var(${c(t).cssVarBlockName("fill-color-9")})`,
                mask: `url(#mask-4-${c(n)})`,
                transform: "translate(12.000000, 9.000000) scale(-1, 1) translate(-12.000000, -9.000000) ",
                points: "7 0 24 0 20 18 7 16.5"
              }, null, 8, jw)
            ]),
            R("polygon", {
              id: "Rectangle-Copy-18",
              fill: `var(${c(t).cssVarBlockName("fill-color-2")})`,
              transform: "translate(66.000000, 51.500000) scale(-1, 1) translate(-66.000000, -51.500000) ",
              points: "62 45 79 45 70 58 53 58"
            }, null, 8, Uw)
          ])
        ])
      ])
    ]));
  }
});
var Yw = /* @__PURE__ */ ce(Gw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/empty/src/img-empty.vue"]]);
const Xw = ye({
  image: {
    type: String,
    default: ""
  },
  imageSize: Number,
  description: {
    type: String,
    default: ""
  }
}), Zw = ["src"], Jw = { key: 1 }, Qw = H({
  name: "ElEmpty"
}), eC = /* @__PURE__ */ H({
  ...Qw,
  props: Xw,
  setup(e) {
    const t = e, { t: n } = ft(), o = oe("empty"), r = S(() => t.description || n("el.table.emptyText")), l = S(() => ({
      width: Sn(t.imageSize)
    }));
    return (a, s) => (T(), L("div", {
      class: P(c(o).b())
    }, [
      R("div", {
        class: P(c(o).e("image")),
        style: Oe(c(l))
      }, [
        a.image ? (T(), L("img", {
          key: 0,
          src: a.image,
          ondragstart: "return false"
        }, null, 8, Zw)) : te(a.$slots, "image", { key: 1 }, () => [
          X(Yw)
        ])
      ], 6),
      R("div", {
        class: P(c(o).e("description"))
      }, [
        a.$slots.description ? te(a.$slots, "description", { key: 0 }) : (T(), L("p", Jw, me(c(r)), 1))
      ], 2),
      a.$slots.default ? (T(), L("div", {
        key: 0,
        class: P(c(o).e("bottom"))
      }, [
        te(a.$slots, "default")
      ], 2)) : V("v-if", !0)
    ], 2));
  }
});
var tC = /* @__PURE__ */ ce(eC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/empty/src/empty.vue"]]);
const Xu = tt(tC), Zu = Symbol("elPaginationKey"), nC = ye({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  prevText: {
    type: String
  },
  prevIcon: {
    type: Je
  }
}), oC = {
  click: (e) => e instanceof MouseEvent
}, rC = ["disabled", "aria-label", "aria-disabled"], lC = { key: 0 }, aC = H({
  name: "ElPaginationPrev"
}), sC = /* @__PURE__ */ H({
  ...aC,
  props: nC,
  emits: oC,
  setup(e) {
    const t = e, { t: n } = ft(), o = S(() => t.disabled || t.currentPage <= 1);
    return (r, l) => (T(), L("button", {
      type: "button",
      class: "btn-prev",
      disabled: c(o),
      "aria-label": r.prevText || c(n)("el.pagination.prev"),
      "aria-disabled": c(o),
      onClick: l[0] || (l[0] = (a) => r.$emit("click", a))
    }, [
      r.prevText ? (T(), L("span", lC, me(r.prevText), 1)) : (T(), W(c(Ne), { key: 1 }, {
        default: D(() => [
          (T(), W(je(r.prevIcon)))
        ]),
        _: 1
      }))
    ], 8, rC));
  }
});
var iC = /* @__PURE__ */ ce(sC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue"]]);
const uC = ye({
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
    type: Je
  }
}), cC = ["disabled", "aria-label", "aria-disabled"], dC = { key: 0 }, fC = H({
  name: "ElPaginationNext"
}), pC = /* @__PURE__ */ H({
  ...fC,
  props: uC,
  emits: ["click"],
  setup(e) {
    const t = e, { t: n } = ft(), o = S(() => t.disabled || t.currentPage === t.pageCount || t.pageCount === 0);
    return (r, l) => (T(), L("button", {
      type: "button",
      class: "btn-next",
      disabled: c(o),
      "aria-label": r.nextText || c(n)("el.pagination.next"),
      "aria-disabled": c(o),
      onClick: l[0] || (l[0] = (a) => r.$emit("click", a))
    }, [
      r.nextText ? (T(), L("span", dC, me(r.nextText), 1)) : (T(), W(c(Ne), { key: 1 }, {
        default: D(() => [
          (T(), W(je(r.nextIcon)))
        ]),
        _: 1
      }))
    ], 8, cC));
  }
});
var vC = /* @__PURE__ */ ce(pC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue"]]);
const Ju = Symbol("ElSelectGroup"), Mr = Symbol("ElSelect");
function hC(e, t) {
  const n = he(Mr), o = he(Ju, { disabled: !1 }), r = S(() => Qe(e.value)), l = S(() => n.props.multiple ? d(n.props.modelValue, e.value) : v(e.value, n.props.modelValue)), a = S(() => {
    if (n.props.multiple) {
      const g = n.props.modelValue || [];
      return !l.value && g.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = S(() => e.label || (r.value ? "" : e.value)), i = S(() => e.value || e.label || ""), u = S(() => e.disabled || t.groupDisabled || a.value), f = $e(), d = (g = [], y) => {
    if (r.value) {
      const h = n.props.valueKey;
      return g && g.some((w) => Zn(lt(w, h)) === lt(y, h));
    } else
      return g && g.includes(y);
  }, v = (g, y) => {
    if (r.value) {
      const { valueKey: h } = n.props;
      return lt(g, h) === lt(y, h);
    } else
      return g === y;
  }, m = () => {
    !e.disabled && !o.disabled && (n.hoverIndex = n.optionsArray.indexOf(f.proxy));
  };
  J(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), J(() => e.value, (g, y) => {
    const { remote: h, valueKey: w } = n.props;
    if (Object.is(g, y) || (n.onOptionDestroy(y, f.proxy), n.onOptionCreate(f.proxy)), !e.created && !h) {
      if (w && Qe(g) && Qe(y) && g[w] === y[w])
        return;
      n.setSelected();
    }
  }), J(() => o.disabled, () => {
    t.groupDisabled = o.disabled;
  }, { immediate: !0 });
  const { queryChange: p } = Zn(n);
  return J(p, (g) => {
    const { query: y } = c(g), h = new RegExp(Dh(y), "i");
    t.visible = h.test(s.value) || e.created, t.visible || n.filteredOptionsCount--;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: s,
    currentValue: i,
    itemSelected: l,
    isDisabled: u,
    hoverItem: m
  };
}
const gC = H({
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
    const t = oe("select"), n = En(), o = S(() => [
      t.be("dropdown", "item"),
      t.is("disabled", c(s)),
      {
        selected: c(a),
        hover: c(d)
      }
    ]), r = $n({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hitState: !1,
      hover: !1
    }), { currentLabel: l, itemSelected: a, isDisabled: s, select: i, hoverItem: u } = hC(e, r), { visible: f, hover: d } = Hn(r), v = $e().proxy;
    i.onOptionCreate(v), zt(() => {
      const p = v.value, { selected: g } = i, h = (i.props.multiple ? g : [g]).some((w) => w.value === v.value);
      be(() => {
        i.cachedOptions.get(p) === v && !h && i.cachedOptions.delete(p);
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
}), mC = ["id", "aria-disabled", "aria-selected"];
function bC(e, t, n, o, r, l) {
  return Re((T(), L("li", {
    id: e.id,
    class: P(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMouseenter: t[0] || (t[0] = (...a) => e.hoverItem && e.hoverItem(...a)),
    onClick: t[1] || (t[1] = De((...a) => e.selectOptionClick && e.selectOptionClick(...a), ["stop"]))
  }, [
    te(e.$slots, "default", {}, () => [
      R("span", null, me(e.currentLabel), 1)
    ])
  ], 42, mC)), [
    [Rt, e.visible]
  ]);
}
var aa = /* @__PURE__ */ ce(gC, [["render", bC], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
const yC = H({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = he(Mr), t = oe("select"), n = S(() => e.props.popperClass), o = S(() => e.props.multiple), r = S(() => e.props.fitInputWidth), l = k("");
    function a() {
      var s;
      l.value = `${(s = e.selectWrapper) == null ? void 0 : s.offsetWidth}px`;
    }
    return Ie(() => {
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
function wC(e, t, n, o, r, l) {
  return T(), L("div", {
    class: P([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Oe({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    te(e.$slots, "default")
  ], 6);
}
var CC = /* @__PURE__ */ ce(yC, [["render", wC], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function SC(e) {
  const { t } = ft();
  return $n({
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
const _C = (e, t, n) => {
  const { t: o } = ft(), r = oe("select");
  Po({
    from: "suffixTransition",
    replacement: "override style scheme",
    version: "2.3.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/select.html#select-attributes"
  }, S(() => e.suffixTransition === !1));
  const l = k(null), a = k(null), s = k(null), i = k(null), u = k(null), f = k(null), d = k(null), v = k(null), m = k(), p = Rn({ query: "" }), g = Rn(""), y = k([]);
  let h = 0;
  const { form: w, formItem: C } = On(), b = S(() => !e.filterable || e.multiple || !t.visible), $ = S(() => e.disabled || (w == null ? void 0 : w.disabled)), O = S(() => {
    const x = e.multiple ? Array.isArray(e.modelValue) && e.modelValue.length > 0 : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== "";
    return e.clearable && !$.value && t.inputHovering && x;
  }), _ = S(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), E = S(() => r.is("reverse", _.value && t.visible && e.suffixTransition)), A = S(() => (w == null ? void 0 : w.statusIcon) && (C == null ? void 0 : C.validateState) && Mi[C == null ? void 0 : C.validateState]), F = S(() => e.remote ? 300 : 0), B = S(() => e.loading ? e.loadingText || o("el.select.loading") : e.remote && t.query === "" && t.options.size === 0 ? !1 : e.filterable && t.query && t.options.size > 0 && t.filteredOptionsCount === 0 ? e.noMatchText || o("el.select.noMatch") : t.options.size === 0 ? e.noDataText || o("el.select.noData") : null), M = S(() => {
    const x = Array.from(t.options.values()), z = [];
    return y.value.forEach((U) => {
      const ve = x.findIndex((ct) => ct.currentLabel === U);
      ve > -1 && z.push(x[ve]);
    }), z.length >= x.length ? z : x;
  }), G = S(() => Array.from(t.cachedOptions.values())), ne = S(() => {
    const x = M.value.filter((z) => !z.created).some((z) => z.currentLabel === t.query);
    return e.filterable && e.allowCreate && t.query !== "" && !x;
  }), Z = un(), ee = S(() => ["small"].includes(Z.value) ? "small" : "default"), K = S({
    get() {
      return t.visible && B.value !== !1;
    },
    set(x) {
      t.visible = x;
    }
  });
  J([() => $.value, () => Z.value, () => w == null ? void 0 : w.size], () => {
    be(() => {
      ie();
    });
  }), J(() => e.placeholder, (x) => {
    t.cachedPlaceHolder = t.currentPlaceholder = x, e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (t.currentPlaceholder = "");
  }), J(() => e.modelValue, (x, z) => {
    e.multiple && (ie(), x && x.length > 0 || a.value && t.query !== "" ? t.currentPlaceholder = "" : t.currentPlaceholder = t.cachedPlaceHolder, e.filterable && !e.reserveKeyword && (t.query = "", N(t.query))), se(), e.filterable && !e.multiple && (t.inputLength = 20), !pr(x, z) && e.validateEvent && (C == null || C.validate("change").catch((U) => Ve(U)));
  }, {
    flush: "post",
    deep: !0
  }), J(() => t.visible, (x) => {
    var z, U, ve, ct, ht;
    x ? ((U = (z = i.value) == null ? void 0 : z.updatePopper) == null || U.call(z), e.filterable && (t.filteredOptionsCount = t.optionsCount, t.query = e.remote ? "" : t.selectedLabel, (ct = (ve = s.value) == null ? void 0 : ve.focus) == null || ct.call(ve), e.multiple ? (ht = a.value) == null || ht.focus() : t.selectedLabel && (t.currentPlaceholder = `${t.selectedLabel}`, t.selectedLabel = ""), N(t.query), !e.multiple && !e.remote && (p.value.query = "", go(p), go(g)))) : (e.filterable && (at(e.filterMethod) && e.filterMethod(""), at(e.remoteMethod) && e.remoteMethod("")), t.query = "", t.previousQuery = null, t.selectedLabel = "", t.inputLength = 20, t.menuVisibleOnFocus = !1, _e(), be(() => {
      a.value && a.value.value === "" && t.selected.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }), e.multiple || (t.selected && (e.filterable && e.allowCreate && t.createdSelected && t.createdLabel ? t.selectedLabel = t.createdLabel : t.selectedLabel = t.selected.currentLabel, e.filterable && (t.query = t.selectedLabel)), e.filterable && (t.currentPlaceholder = t.cachedPlaceHolder))), n.emit("visible-change", x);
  }), J(() => t.options.entries(), () => {
    var x, z, U;
    if (!ke)
      return;
    (z = (x = i.value) == null ? void 0 : x.updatePopper) == null || z.call(x), e.multiple && ie();
    const ve = ((U = d.value) == null ? void 0 : U.querySelectorAll("input")) || [];
    (!e.filterable && !e.defaultFirstOption && !eo(e.modelValue) || !Array.from(ve).includes(document.activeElement)) && se(), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && re();
  }, {
    flush: "post"
  }), J(() => t.hoverIndex, (x) => {
    xe(x) && x > -1 ? m.value = M.value[x] || {} : m.value = {}, M.value.forEach((z) => {
      z.hover = m.value === z;
    });
  });
  const ie = () => {
    be(() => {
      var x, z;
      if (!l.value)
        return;
      const U = l.value.$el.querySelector("input");
      h = h || (U.clientHeight > 0 ? U.clientHeight + 2 : 0);
      const ve = f.value, ct = getComputedStyle(U).getPropertyValue(r.cssVarName("input-height")), ht = Number.parseFloat(ct) || a0(Z.value || (w == null ? void 0 : w.size)), It = Z.value || ht === h || h <= 0 ? ht : h;
      !(U.offsetParent === null) && (U.style.height = `${(t.selected.length === 0 ? It : Math.max(ve ? ve.clientHeight + (ve.clientHeight > It ? 6 : 0) : 0, It)) - 2}px`), t.visible && B.value !== !1 && ((z = (x = i.value) == null ? void 0 : x.updatePopper) == null || z.call(x));
    });
  }, N = async (x) => {
    if (!(t.previousQuery === x || t.isOnComposition)) {
      if (t.previousQuery === null && (at(e.filterMethod) || at(e.remoteMethod))) {
        t.previousQuery = x;
        return;
      }
      t.previousQuery = x, be(() => {
        var z, U;
        t.visible && ((U = (z = i.value) == null ? void 0 : z.updatePopper) == null || U.call(z));
      }), t.hoverIndex = -1, e.multiple && e.filterable && be(() => {
        if (!$.value) {
          const z = a.value.value.length * 15 + 20;
          t.inputLength = e.collapseTags ? Math.min(50, z) : z, j();
        }
        ie();
      }), e.remote && at(e.remoteMethod) ? (t.hoverIndex = -1, e.remoteMethod(x)) : at(e.filterMethod) ? (e.filterMethod(x), go(g)) : (t.filteredOptionsCount = t.optionsCount, p.value.query = x, go(p), go(g)), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && (await be(), re());
    }
  }, j = () => {
    t.currentPlaceholder !== "" && (t.currentPlaceholder = a.value.value ? "" : t.cachedPlaceHolder);
  }, re = () => {
    const x = M.value.filter((ve) => ve.visible && !ve.disabled && !ve.states.groupDisabled), z = x.find((ve) => ve.created), U = x[0];
    t.hoverIndex = st(M.value, z || U);
  }, se = () => {
    var x;
    if (e.multiple)
      t.selectedLabel = "";
    else {
      const U = ue(e.modelValue);
      (x = U.props) != null && x.created ? (t.createdLabel = U.props.value, t.createdSelected = !0) : t.createdSelected = !1, t.selectedLabel = U.currentLabel, t.selected = U, e.filterable && (t.query = t.selectedLabel);
      return;
    }
    const z = [];
    Array.isArray(e.modelValue) && e.modelValue.forEach((U) => {
      z.push(ue(U));
    }), t.selected = z, be(() => {
      ie();
    });
  }, ue = (x) => {
    let z;
    const U = Fr(x).toLowerCase() === "object", ve = Fr(x).toLowerCase() === "null", ct = Fr(x).toLowerCase() === "undefined";
    for (let Gt = t.cachedOptions.size - 1; Gt >= 0; Gt--) {
      const Lt = G.value[Gt];
      if (U ? lt(Lt.value, e.valueKey) === lt(x, e.valueKey) : Lt.value === x) {
        z = {
          value: x,
          currentLabel: Lt.currentLabel,
          isDisabled: Lt.isDisabled
        };
        break;
      }
    }
    if (z)
      return z;
    const ht = U ? x.label : !ve && !ct ? x : "", It = {
      value: x,
      currentLabel: ht
    };
    return e.multiple && (It.hitState = !1), It;
  }, _e = () => {
    setTimeout(() => {
      const x = e.valueKey;
      e.multiple ? t.selected.length > 0 ? t.hoverIndex = Math.min.apply(null, t.selected.map((z) => M.value.findIndex((U) => lt(U, x) === lt(z, x)))) : t.hoverIndex = -1 : t.hoverIndex = M.value.findIndex((z) => Se(z) === Se(t.selected));
    }, 300);
  }, Te = () => {
    var x, z;
    we(), (z = (x = i.value) == null ? void 0 : x.updatePopper) == null || z.call(x), e.multiple && ie();
  }, we = () => {
    var x;
    t.inputWidth = (x = l.value) == null ? void 0 : x.$el.offsetWidth;
  }, Me = () => {
    e.filterable && t.query !== t.selectedLabel && (t.query = t.selectedLabel, N(t.query));
  }, Ee = Qn(() => {
    Me();
  }, F.value), He = Qn((x) => {
    N(x.target.value);
  }, F.value), Pe = (x) => {
    pr(e.modelValue, x) || n.emit(to, x);
  }, Ge = (x) => Ph(x, (z) => !t.disabledOptions.has(z)), pt = (x) => {
    if (x.code !== an.delete) {
      if (x.target.value.length <= 0 && !ot()) {
        const z = e.modelValue.slice(), U = Ge(z);
        if (U < 0)
          return;
        z.splice(U, 1), n.emit(Fe, z), Pe(z);
      }
      x.target.value.length === 1 && e.modelValue.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }
  }, nt = (x, z) => {
    const U = t.selected.indexOf(z);
    if (U > -1 && !$.value) {
      const ve = e.modelValue.slice();
      ve.splice(U, 1), n.emit(Fe, ve), Pe(ve), n.emit("remove-tag", z.value);
    }
    x.stopPropagation(), Q();
  }, Ct = (x) => {
    x.stopPropagation();
    const z = e.multiple ? [] : "";
    if (!Ue(z))
      for (const U of t.selected)
        U.isDisabled && z.push(U.value);
    n.emit(Fe, z), Pe(z), t.hoverIndex = -1, t.visible = !1, n.emit("clear"), Q();
  }, vt = (x) => {
    var z;
    if (e.multiple) {
      const U = (e.modelValue || []).slice(), ve = st(U, x.value);
      ve > -1 ? U.splice(ve, 1) : (e.multipleLimit <= 0 || U.length < e.multipleLimit) && U.push(x.value), n.emit(Fe, U), Pe(U), x.created && (t.query = "", N(""), t.inputLength = 20), e.filterable && ((z = a.value) == null || z.focus());
    } else
      n.emit(Fe, x.value), Pe(x.value), t.visible = !1;
    Pt(), !t.visible && be(() => {
      it(x);
    });
  }, st = (x = [], z) => {
    if (!Qe(z))
      return x.indexOf(z);
    const U = e.valueKey;
    let ve = -1;
    return x.some((ct, ht) => Zn(lt(ct, U)) === lt(z, U) ? (ve = ht, !0) : !1), ve;
  }, Pt = () => {
    const x = a.value || l.value;
    x && (x == null || x.focus());
  }, it = (x) => {
    var z, U, ve, ct, ht;
    const It = Array.isArray(x) ? x[0] : x;
    let Gt = null;
    if (It != null && It.value) {
      const Lt = M.value.filter((Vo) => Vo.value === It.value);
      Lt.length > 0 && (Gt = Lt[0].$el);
    }
    if (i.value && Gt) {
      const Lt = (ct = (ve = (U = (z = i.value) == null ? void 0 : z.popperRef) == null ? void 0 : U.contentRef) == null ? void 0 : ve.querySelector) == null ? void 0 : ct.call(ve, `.${r.be("dropdown", "wrap")}`);
      Lt && jh(Lt, Gt);
    }
    (ht = v.value) == null || ht.handleScroll();
  }, St = (x) => {
    t.optionsCount++, t.filteredOptionsCount++, t.options.set(x.value, x), t.cachedOptions.set(x.value, x), x.disabled && t.disabledOptions.set(x.value, x);
  }, We = (x, z) => {
    t.options.get(x) === z && (t.optionsCount--, t.filteredOptionsCount--, t.options.delete(x));
  }, ut = (x) => {
    x.code !== an.backspace && ot(!1), t.inputLength = a.value.value.length * 15 + 20, ie();
  }, ot = (x) => {
    if (!Array.isArray(t.selected))
      return;
    const z = Ge(t.selected.map((ve) => ve.value)), U = t.selected[z];
    if (U)
      return x === !0 || x === !1 ? (U.hitState = x, x) : (U.hitState = !U.hitState, U.hitState);
  }, At = (x) => {
    const z = x.target.value;
    if (x.type === "compositionend")
      t.isOnComposition = !1, be(() => N(z));
    else {
      const U = z[z.length - 1] || "";
      t.isOnComposition = !zi(U);
    }
  }, q = () => {
    be(() => it(t.selected));
  }, I = (x) => {
    t.focused || ((e.automaticDropdown || e.filterable) && (e.filterable && !t.visible && (t.menuVisibleOnFocus = !0), t.visible = !0), t.focused = !0, n.emit("focus", x));
  }, Q = () => {
    var x, z;
    t.visible ? (x = a.value || l.value) == null || x.focus() : (z = l.value) == null || z.focus();
  }, Ce = () => {
    var x, z, U;
    t.visible = !1, (x = l.value) == null || x.blur(), (U = (z = s.value) == null ? void 0 : z.blur) == null || U.call(z);
  }, Ke = (x) => {
    var z, U, ve;
    (z = i.value) != null && z.isFocusInsideContent(x) || (U = u.value) != null && U.isFocusInsideContent(x) || (ve = d.value) != null && ve.contains(x.relatedTarget) || (t.visible && Y(), t.focused = !1, n.emit("blur", x));
  }, Ht = (x) => {
    Ct(x);
  }, Y = () => {
    t.visible = !1;
  }, le = (x) => {
    t.visible && (x.preventDefault(), x.stopPropagation(), t.visible = !1);
  }, ge = (x) => {
    x && !t.mouseEnter || $.value || (t.menuVisibleOnFocus ? t.menuVisibleOnFocus = !1 : (!i.value || !i.value.isFocusInsideContent()) && (t.visible = !t.visible), Q());
  }, fe = () => {
    t.visible ? M.value[t.hoverIndex] && vt(M.value[t.hoverIndex]) : ge();
  }, Se = (x) => Qe(x.value) ? lt(x.value, e.valueKey) : x.value, Be = S(() => M.value.filter((x) => x.visible).every((x) => x.disabled)), pe = S(() => e.multiple ? t.selected.slice(0, e.maxCollapseTags) : []), Ye = S(() => e.multiple ? t.selected.slice(e.maxCollapseTags) : []), rt = (x) => {
    if (!t.visible) {
      t.visible = !0;
      return;
    }
    if (!(t.options.size === 0 || t.filteredOptionsCount === 0) && !t.isOnComposition && !Be.value) {
      x === "next" ? (t.hoverIndex++, t.hoverIndex === t.options.size && (t.hoverIndex = 0)) : x === "prev" && (t.hoverIndex--, t.hoverIndex < 0 && (t.hoverIndex = t.options.size - 1));
      const z = M.value[t.hoverIndex];
      (z.disabled === !0 || z.states.groupDisabled === !0 || !z.visible) && rt(x), be(() => it(m.value));
    }
  }, vo = () => {
    t.mouseEnter = !0;
  }, jn = () => {
    t.mouseEnter = !1;
  }, ho = (x, z) => {
    var U, ve;
    nt(x, z), (ve = (U = u.value) == null ? void 0 : U.updatePopper) == null || ve.call(U);
  }, kn = S(() => ({
    maxWidth: `${c(t.inputWidth) - 32 - (A.value ? 22 : 0)}px`,
    width: "100%"
  }));
  return {
    optionList: y,
    optionsArray: M,
    hoverOption: m,
    selectSize: Z,
    handleResize: Te,
    debouncedOnInputChange: Ee,
    debouncedQueryChange: He,
    deletePrevTag: pt,
    deleteTag: nt,
    deleteSelected: Ct,
    handleOptionSelect: vt,
    scrollToOption: it,
    readonly: b,
    resetInputHeight: ie,
    showClose: O,
    iconComponent: _,
    iconReverse: E,
    showNewOption: ne,
    collapseTagSize: ee,
    setSelected: se,
    managePlaceholder: j,
    selectDisabled: $,
    emptyText: B,
    toggleLastOptionHitState: ot,
    resetInputState: ut,
    handleComposition: At,
    onOptionCreate: St,
    onOptionDestroy: We,
    handleMenuEnter: q,
    handleFocus: I,
    focus: Q,
    blur: Ce,
    handleBlur: Ke,
    handleClearClick: Ht,
    handleClose: Y,
    handleKeydownEscape: le,
    toggleMenu: ge,
    selectOption: fe,
    getValueKey: Se,
    navigateOptions: rt,
    handleDeleteTooltipTag: ho,
    dropMenuVisible: K,
    queryChange: p,
    groupQueryChange: g,
    showTagList: pe,
    collapseTagList: Ye,
    selectTagsStyle: kn,
    reference: l,
    input: a,
    iOSInput: s,
    tooltipRef: i,
    tagTooltipRef: u,
    tags: f,
    selectWrapper: d,
    scrollbar: v,
    handleMouseEnter: vo,
    handleMouseLeave: jn
  };
};
var EC = H({
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
          var v, m, p, g;
          const y = (v = (d == null ? void 0 : d.type) || {}) == null ? void 0 : v.name;
          y === "ElOptionGroup" ? u(!Ue(d.children) && !Array.isArray(d.children) && at((m = d.children) == null ? void 0 : m.default) ? (p = d.children) == null ? void 0 : p.default() : d.children) : y === "ElOption" ? i.push((g = d.props) == null ? void 0 : g.label) : Array.isArray(d.children) && u(d.children);
        });
      }
      return s.length && u((a = s[0]) == null ? void 0 : a.children), r(i, o) || (o = i, n("update-options", i)), s;
    };
  }
});
const Bs = "ElSelect", $C = H({
  name: Bs,
  componentName: Bs,
  components: {
    ElInput: fu,
    ElSelectMenu: CC,
    ElOption: aa,
    ElOptions: EC,
    ElTag: M2,
    ElScrollbar: ea,
    ElTooltip: la,
    ElIcon: Ne
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
      validator: Bi
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
    teleported: Tt.teleported,
    persistent: {
      type: Boolean,
      default: !0
    },
    clearIcon: {
      type: Je,
      default: Vl
    },
    fitInputWidth: Boolean,
    suffixIcon: {
      type: Je,
      default: Ni
    },
    tagType: { ...ju.type, default: "info" },
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
    Fe,
    to,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(e, t) {
    const n = oe("select"), o = oe("input"), { t: r } = ft(), l = En(), a = SC(e), {
      optionList: s,
      optionsArray: i,
      hoverOption: u,
      selectSize: f,
      readonly: d,
      handleResize: v,
      collapseTagSize: m,
      debouncedOnInputChange: p,
      debouncedQueryChange: g,
      deletePrevTag: y,
      deleteTag: h,
      deleteSelected: w,
      handleOptionSelect: C,
      scrollToOption: b,
      setSelected: $,
      resetInputHeight: O,
      managePlaceholder: _,
      showClose: E,
      selectDisabled: A,
      iconComponent: F,
      iconReverse: B,
      showNewOption: M,
      emptyText: G,
      toggleLastOptionHitState: ne,
      resetInputState: Z,
      handleComposition: ee,
      onOptionCreate: K,
      onOptionDestroy: ie,
      handleMenuEnter: N,
      handleFocus: j,
      focus: re,
      blur: se,
      handleBlur: ue,
      handleClearClick: _e,
      handleClose: Te,
      handleKeydownEscape: we,
      toggleMenu: Me,
      selectOption: Ee,
      getValueKey: He,
      navigateOptions: Pe,
      handleDeleteTooltipTag: Ge,
      dropMenuVisible: pt,
      reference: nt,
      input: Ct,
      iOSInput: vt,
      tooltipRef: st,
      tagTooltipRef: Pt,
      tags: it,
      selectWrapper: St,
      scrollbar: We,
      queryChange: ut,
      groupQueryChange: ot,
      handleMouseEnter: At,
      handleMouseLeave: q,
      showTagList: I,
      collapseTagList: Q,
      selectTagsStyle: Ce
    } = _C(e, a, t), {
      inputWidth: Ke,
      selected: Ht,
      inputLength: Y,
      filteredOptionsCount: le,
      visible: ge,
      selectedLabel: fe,
      hoverIndex: Se,
      query: Be,
      inputHovering: pe,
      currentPlaceholder: Ye,
      menuVisibleOnFocus: rt,
      isOnComposition: vo,
      options: jn,
      cachedOptions: ho,
      optionsCount: kn,
      prefixWidth: x
    } = Hn(a), z = S(() => {
      const _t = [n.b()], xn = c(f);
      return xn && _t.push(n.m(xn)), e.disabled && _t.push(n.m("disabled")), _t;
    }), U = S(() => [
      n.e("tags"),
      n.is("disabled", c(A))
    ]), ve = S(() => [
      n.b("tags-wrapper"),
      { "has-prefix": c(x) && c(Ht).length }
    ]), ct = S(() => [
      n.e("input"),
      n.is(c(f)),
      n.is("disabled", c(A))
    ]), ht = S(() => [
      n.e("input"),
      n.is(c(f)),
      n.em("input", "iOS")
    ]), It = S(() => [
      n.is("empty", !e.allowCreate && !!c(Be) && c(le) === 0)
    ]), Gt = S(() => ({ maxWidth: `${c(Ke) > 123 ? c(Ke) - 123 : c(Ke) - 75}px` })), Lt = S(() => ({
      marginLeft: `${c(x)}px`,
      flexGrow: 1,
      width: `${c(Y) / (c(Ke) - 32)}%`,
      maxWidth: `${c(Ke) - 42}px`
    }));
    Xe(Mr, $n({
      props: e,
      options: jn,
      optionsArray: i,
      cachedOptions: ho,
      optionsCount: kn,
      filteredOptionsCount: le,
      hoverIndex: Se,
      handleOptionSelect: C,
      onOptionCreate: K,
      onOptionDestroy: ie,
      selectWrapper: St,
      selected: Ht,
      setSelected: $,
      queryChange: ut,
      groupQueryChange: ot
    })), Ie(() => {
      a.cachedPlaceHolder = Ye.value = e.placeholder || (() => r("el.select.placeholder")), e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (Ye.value = ""), Jn(St, v), e.remote && e.multiple && O(), be(() => {
        const _t = nt.value && nt.value.$el;
        if (_t && (Ke.value = _t.getBoundingClientRect().width, t.slots.prefix)) {
          const xn = _t.querySelector(`.${o.e("prefix")}`);
          x.value = Math.max(xn.getBoundingClientRect().width + 11, 30);
        }
      }), $();
    }), e.multiple && !Array.isArray(e.modelValue) && t.emit(Fe, []), !e.multiple && Array.isArray(e.modelValue) && t.emit(Fe, "");
    const Vo = S(() => {
      var _t, xn;
      return (xn = (_t = st.value) == null ? void 0 : _t.popperRef) == null ? void 0 : xn.contentRef;
    });
    return {
      isIOS: ni,
      onOptionsRendered: (_t) => {
        s.value = _t;
      },
      prefixWidth: x,
      selectSize: f,
      readonly: d,
      handleResize: v,
      collapseTagSize: m,
      debouncedOnInputChange: p,
      debouncedQueryChange: g,
      deletePrevTag: y,
      deleteTag: h,
      handleDeleteTooltipTag: Ge,
      deleteSelected: w,
      handleOptionSelect: C,
      scrollToOption: b,
      inputWidth: Ke,
      selected: Ht,
      inputLength: Y,
      filteredOptionsCount: le,
      visible: ge,
      selectedLabel: fe,
      hoverIndex: Se,
      query: Be,
      inputHovering: pe,
      currentPlaceholder: Ye,
      menuVisibleOnFocus: rt,
      isOnComposition: vo,
      options: jn,
      resetInputHeight: O,
      managePlaceholder: _,
      showClose: E,
      selectDisabled: A,
      iconComponent: F,
      iconReverse: B,
      showNewOption: M,
      emptyText: G,
      toggleLastOptionHitState: ne,
      resetInputState: Z,
      handleComposition: ee,
      handleMenuEnter: N,
      handleFocus: j,
      focus: re,
      blur: se,
      handleBlur: ue,
      handleClearClick: _e,
      handleClose: Te,
      handleKeydownEscape: we,
      toggleMenu: Me,
      selectOption: Ee,
      getValueKey: He,
      navigateOptions: Pe,
      dropMenuVisible: pt,
      reference: nt,
      input: Ct,
      iOSInput: vt,
      tooltipRef: st,
      popperPaneRef: Vo,
      tags: it,
      selectWrapper: St,
      scrollbar: We,
      wrapperKls: z,
      tagsKls: U,
      tagWrapperKls: ve,
      inputKls: ct,
      iOSInputKls: ht,
      scrollbarKls: It,
      selectTagsStyle: Ce,
      nsSelect: n,
      tagTextStyle: Gt,
      inputStyle: Lt,
      handleMouseEnter: At,
      handleMouseLeave: q,
      showTagList: I,
      collapseTagList: Q,
      tagTooltipRef: Pt,
      contentId: l,
      hoverOption: u
    };
  }
}), TC = ["disabled", "autocomplete", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label"], OC = ["disabled"], kC = { style: { height: "100%", display: "flex", "justify-content": "center", "align-items": "center" } };
function xC(e, t, n, o, r, l) {
  const a = Le("el-tag"), s = Le("el-tooltip"), i = Le("el-icon"), u = Le("el-input"), f = Le("el-option"), d = Le("el-options"), v = Le("el-scrollbar"), m = Le("el-select-menu"), p = Ol("click-outside");
  return Re((T(), L("div", {
    ref: "selectWrapper",
    class: P(e.wrapperKls),
    onMouseenter: t[22] || (t[22] = (...g) => e.handleMouseEnter && e.handleMouseEnter(...g)),
    onMouseleave: t[23] || (t[23] = (...g) => e.handleMouseLeave && e.handleMouseLeave(...g)),
    onClick: t[24] || (t[24] = De((...g) => e.toggleMenu && e.toggleMenu(...g), ["stop"]))
  }, [
    X(s, {
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
        var g, y;
        return [
          R("div", {
            class: "select-trigger",
            onMouseenter: t[20] || (t[20] = (h) => e.inputHovering = !0),
            onMouseleave: t[21] || (t[21] = (h) => e.inputHovering = !1)
          }, [
            e.multiple ? (T(), L("div", {
              key: 0,
              ref: "tags",
              tabindex: "-1",
              class: P(e.tagsKls),
              style: Oe(e.selectTagsStyle),
              onClick: t[15] || (t[15] = (...h) => e.focus && e.focus(...h))
            }, [
              e.collapseTags && e.selected.length ? (T(), W(mn, {
                key: 0,
                onAfterLeave: e.resetInputHeight
              }, {
                default: D(() => [
                  R("span", {
                    class: P(e.tagWrapperKls)
                  }, [
                    (T(!0), L(ze, null, Kt(e.showTagList, (h) => (T(), W(a, {
                      key: e.getValueKey(h),
                      closable: !e.selectDisabled && !h.isDisabled,
                      size: e.collapseTagSize,
                      hit: h.hitState,
                      type: e.tagType,
                      "disable-transitions": "",
                      onClose: (w) => e.deleteTag(w, h)
                    }, {
                      default: D(() => [
                        R("span", {
                          class: P(e.nsSelect.e("tags-text")),
                          style: Oe(e.tagTextStyle)
                        }, me(h.currentLabel), 7)
                      ]),
                      _: 2
                    }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128)),
                    e.selected.length > e.maxCollapseTags ? (T(), W(a, {
                      key: 0,
                      closable: !1,
                      size: e.collapseTagSize,
                      type: e.tagType,
                      "disable-transitions": ""
                    }, {
                      default: D(() => [
                        e.collapseTagsTooltip ? (T(), W(s, {
                          key: 0,
                          ref: "tagTooltipRef",
                          disabled: e.dropMenuVisible,
                          "fallback-placements": ["bottom", "top", "right", "left"],
                          effect: e.effect,
                          placement: "bottom",
                          teleported: e.teleported
                        }, {
                          default: D(() => [
                            R("span", {
                              class: P(e.nsSelect.e("tags-text"))
                            }, "+ " + me(e.selected.length - e.maxCollapseTags), 3)
                          ]),
                          content: D(() => [
                            R("div", {
                              class: P(e.nsSelect.e("collapse-tags"))
                            }, [
                              (T(!0), L(ze, null, Kt(e.collapseTagList, (h) => (T(), L("div", {
                                key: e.getValueKey(h),
                                class: P(e.nsSelect.e("collapse-tag"))
                              }, [
                                X(a, {
                                  class: "in-tooltip",
                                  closable: !e.selectDisabled && !h.isDisabled,
                                  size: e.collapseTagSize,
                                  hit: h.hitState,
                                  type: e.tagType,
                                  "disable-transitions": "",
                                  style: { margin: "2px" },
                                  onClose: (w) => e.handleDeleteTooltipTag(w, h)
                                }, {
                                  default: D(() => [
                                    R("span", {
                                      class: P(e.nsSelect.e("tags-text")),
                                      style: Oe({
                                        maxWidth: e.inputWidth - 75 + "px"
                                      })
                                    }, me(h.currentLabel), 7)
                                  ]),
                                  _: 2
                                }, 1032, ["closable", "size", "hit", "type", "onClose"])
                              ], 2))), 128))
                            ], 2)
                          ]),
                          _: 1
                        }, 8, ["disabled", "effect", "teleported"])) : (T(), L("span", {
                          key: 1,
                          class: P(e.nsSelect.e("tags-text"))
                        }, "+ " + me(e.selected.length - e.maxCollapseTags), 3))
                      ]),
                      _: 1
                    }, 8, ["size", "type"])) : V("v-if", !0)
                  ], 2)
                ]),
                _: 1
              }, 8, ["onAfterLeave"])) : V("v-if", !0),
              e.collapseTags ? V("v-if", !0) : (T(), W(mn, {
                key: 1,
                onAfterLeave: e.resetInputHeight
              }, {
                default: D(() => [
                  R("span", {
                    class: P(e.tagWrapperKls),
                    style: Oe(e.prefixWidth && e.selected.length ? { marginLeft: `${e.prefixWidth}px` } : "")
                  }, [
                    (T(!0), L(ze, null, Kt(e.selected, (h) => (T(), W(a, {
                      key: e.getValueKey(h),
                      closable: !e.selectDisabled && !h.isDisabled,
                      size: e.collapseTagSize,
                      hit: h.hitState,
                      type: e.tagType,
                      "disable-transitions": "",
                      onClose: (w) => e.deleteTag(w, h)
                    }, {
                      default: D(() => [
                        R("span", {
                          class: P(e.nsSelect.e("tags-text")),
                          style: Oe({ maxWidth: e.inputWidth - 75 + "px" })
                        }, me(h.currentLabel), 7)
                      ]),
                      _: 2
                    }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128))
                  ], 6)
                ]),
                _: 1
              }, 8, ["onAfterLeave"])),
              e.filterable && !e.selectDisabled ? Re((T(), L("input", {
                key: 2,
                ref: "input",
                "onUpdate:modelValue": t[0] || (t[0] = (h) => e.query = h),
                type: "text",
                class: P(e.inputKls),
                disabled: e.selectDisabled,
                autocomplete: e.autocomplete,
                style: Oe(e.inputStyle),
                role: "combobox",
                "aria-activedescendant": ((g = e.hoverOption) == null ? void 0 : g.id) || "",
                "aria-controls": e.contentId,
                "aria-expanded": e.dropMenuVisible,
                "aria-label": e.ariaLabel,
                "aria-autocomplete": "none",
                "aria-haspopup": "listbox",
                onFocus: t[1] || (t[1] = (...h) => e.handleFocus && e.handleFocus(...h)),
                onBlur: t[2] || (t[2] = (...h) => e.handleBlur && e.handleBlur(...h)),
                onKeyup: t[3] || (t[3] = (...h) => e.managePlaceholder && e.managePlaceholder(...h)),
                onKeydown: [
                  t[4] || (t[4] = (...h) => e.resetInputState && e.resetInputState(...h)),
                  t[5] || (t[5] = $t(De((h) => e.navigateOptions("next"), ["prevent"]), ["down"])),
                  t[6] || (t[6] = $t(De((h) => e.navigateOptions("prev"), ["prevent"]), ["up"])),
                  t[7] || (t[7] = $t((...h) => e.handleKeydownEscape && e.handleKeydownEscape(...h), ["esc"])),
                  t[8] || (t[8] = $t(De((...h) => e.selectOption && e.selectOption(...h), ["stop", "prevent"]), ["enter"])),
                  t[9] || (t[9] = $t((...h) => e.deletePrevTag && e.deletePrevTag(...h), ["delete"])),
                  t[10] || (t[10] = $t((h) => e.visible = !1, ["tab"]))
                ],
                onCompositionstart: t[11] || (t[11] = (...h) => e.handleComposition && e.handleComposition(...h)),
                onCompositionupdate: t[12] || (t[12] = (...h) => e.handleComposition && e.handleComposition(...h)),
                onCompositionend: t[13] || (t[13] = (...h) => e.handleComposition && e.handleComposition(...h)),
                onInput: t[14] || (t[14] = (...h) => e.debouncedQueryChange && e.debouncedQueryChange(...h))
              }, null, 46, TC)), [
                [wc, e.query]
              ]) : V("v-if", !0)
            ], 6)) : V("v-if", !0),
            e.isIOS && !e.multiple && e.filterable && e.readonly ? (T(), L("input", {
              key: 1,
              ref: "iOSInput",
              class: P(e.iOSInputKls),
              disabled: e.selectDisabled,
              type: "text"
            }, null, 10, OC)) : V("v-if", !0),
            X(u, {
              id: e.id,
              ref: "reference",
              modelValue: e.selectedLabel,
              "onUpdate:modelValue": t[16] || (t[16] = (h) => e.selectedLabel = h),
              type: "text",
              placeholder: typeof e.currentPlaceholder == "function" ? e.currentPlaceholder() : e.currentPlaceholder,
              name: e.name,
              autocomplete: e.autocomplete,
              size: e.selectSize,
              disabled: e.selectDisabled,
              readonly: e.readonly,
              "validate-event": !1,
              class: P([e.nsSelect.is("focus", e.visible)]),
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
                t[17] || (t[17] = $t(De((h) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
                t[18] || (t[18] = $t(De((h) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
                $t(De(e.selectOption, ["stop", "prevent"]), ["enter"]),
                $t(e.handleKeydownEscape, ["esc"]),
                t[19] || (t[19] = $t((h) => e.visible = !1, ["tab"]))
              ]
            }, Cc({
              suffix: D(() => [
                e.iconComponent && !e.showClose ? (T(), W(i, {
                  key: 0,
                  class: P([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
                }, {
                  default: D(() => [
                    (T(), W(je(e.iconComponent)))
                  ]),
                  _: 1
                }, 8, ["class"])) : V("v-if", !0),
                e.showClose && e.clearIcon ? (T(), W(i, {
                  key: 1,
                  class: P([e.nsSelect.e("caret"), e.nsSelect.e("icon")]),
                  onClick: e.handleClearClick
                }, {
                  default: D(() => [
                    (T(), W(je(e.clearIcon)))
                  ]),
                  _: 1
                }, 8, ["class", "onClick"])) : V("v-if", !0)
              ]),
              _: 2
            }, [
              e.$slots.prefix ? {
                name: "prefix",
                fn: D(() => [
                  R("div", kC, [
                    te(e.$slots, "prefix")
                  ])
                ])
              } : void 0
            ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "aria-activedescendant", "aria-controls", "aria-expanded", "label", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
          ], 32)
        ];
      }),
      content: D(() => [
        X(m, null, {
          default: D(() => [
            Re(X(v, {
              id: e.contentId,
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: P(e.scrollbarKls),
              role: "listbox",
              "aria-label": e.ariaLabel,
              "aria-orientation": "vertical"
            }, {
              default: D(() => [
                e.showNewOption ? (T(), W(f, {
                  key: 0,
                  value: e.query,
                  created: !0
                }, null, 8, ["value"])) : V("v-if", !0),
                X(d, { onUpdateOptions: e.onOptionsRendered }, {
                  default: D(() => [
                    te(e.$slots, "default")
                  ]),
                  _: 3
                }, 8, ["onUpdateOptions"])
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label"]), [
              [Rt, e.options.size > 0 && !e.loading]
            ]),
            e.emptyText && (!e.allowCreate || e.loading || e.allowCreate && e.options.size === 0) ? (T(), L(ze, { key: 0 }, [
              e.$slots.empty ? te(e.$slots, "empty", { key: 0 }) : (T(), L("p", {
                key: 1,
                class: P(e.nsSelect.be("dropdown", "empty"))
              }, me(e.emptyText), 3))
            ], 64)) : V("v-if", !0)
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
var PC = /* @__PURE__ */ ce($C, [["render", xC], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
const AC = H({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = oe("select"), n = k(!0), o = $e(), r = k([]);
    Xe(Ju, $n({
      ...Hn(e)
    }));
    const l = he(Mr);
    Ie(() => {
      r.value = a(o.subTree);
    });
    const a = (i) => {
      const u = [];
      return Array.isArray(i.children) && i.children.forEach((f) => {
        var d;
        f.type && f.type.name === "ElOption" && f.component && f.component.proxy ? u.push(f.component.proxy) : (d = f.children) != null && d.length && u.push(...a(f));
      }), u;
    }, { groupQueryChange: s } = Zn(l);
    return J(s, () => {
      n.value = r.value.some((i) => i.visible === !0);
    }, { flush: "post" }), {
      visible: n,
      ns: t
    };
  }
});
function IC(e, t, n, o, r, l) {
  return Re((T(), L("ul", {
    class: P(e.ns.be("group", "wrap"))
  }, [
    R("li", {
      class: P(e.ns.be("group", "title"))
    }, me(e.label), 3),
    R("li", null, [
      R("ul", {
        class: P(e.ns.b("group"))
      }, [
        te(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [Rt, e.visible]
  ]);
}
var Qu = /* @__PURE__ */ ce(AC, [["render", IC], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
const ec = tt(PC, {
  Option: aa,
  OptionGroup: Qu
}), tc = Ft(aa);
Ft(Qu);
const sa = () => he(Zu, {}), LC = ye({
  pageSize: {
    type: Number,
    required: !0
  },
  pageSizes: {
    type: de(Array),
    default: () => Wl([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String
  },
  disabled: Boolean,
  teleported: Boolean,
  size: {
    type: String,
    values: zo
  }
}), NC = H({
  name: "ElPaginationSizes"
}), RC = /* @__PURE__ */ H({
  ...NC,
  props: LC,
  emits: ["page-size-change"],
  setup(e, { emit: t }) {
    const n = e, { t: o } = ft(), r = oe("pagination"), l = sa(), a = k(n.pageSize);
    J(() => n.pageSizes, (u, f) => {
      if (!pr(u, f) && Array.isArray(u)) {
        const d = u.includes(n.pageSize) ? n.pageSize : n.pageSizes[0];
        t("page-size-change", d);
      }
    }), J(() => n.pageSize, (u) => {
      a.value = u;
    });
    const s = S(() => n.pageSizes);
    function i(u) {
      var f;
      u !== a.value && (a.value = u, (f = l.handleSizeChange) == null || f.call(l, Number(u)));
    }
    return (u, f) => (T(), L("span", {
      class: P(c(r).e("sizes"))
    }, [
      X(c(ec), {
        "model-value": a.value,
        disabled: u.disabled,
        "popper-class": u.popperClass,
        size: u.size,
        teleported: u.teleported,
        "validate-event": !1,
        onChange: i
      }, {
        default: D(() => [
          (T(!0), L(ze, null, Kt(c(s), (d) => (T(), W(c(tc), {
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
var MC = /* @__PURE__ */ ce(RC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue"]]);
const BC = ye({
  size: {
    type: String,
    values: zo
  }
}), zC = ["disabled"], FC = H({
  name: "ElPaginationJumper"
}), HC = /* @__PURE__ */ H({
  ...FC,
  props: BC,
  setup(e) {
    const { t } = ft(), n = oe("pagination"), { pageCount: o, disabled: r, currentPage: l, changeEvent: a } = sa(), s = k(), i = S(() => {
      var d;
      return (d = s.value) != null ? d : l == null ? void 0 : l.value;
    });
    function u(d) {
      s.value = d ? +d : "";
    }
    function f(d) {
      d = Math.trunc(+d), a == null || a(d), s.value = void 0;
    }
    return (d, v) => (T(), L("span", {
      class: P(c(n).e("jump")),
      disabled: c(r)
    }, [
      R("span", {
        class: P([c(n).e("goto")])
      }, me(c(t)("el.pagination.goto")), 3),
      X(c(fu), {
        size: d.size,
        class: P([c(n).e("editor"), c(n).is("in-pagination")]),
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
      R("span", {
        class: P([c(n).e("classifier")])
      }, me(c(t)("el.pagination.pageClassifier")), 3)
    ], 10, zC));
  }
});
var DC = /* @__PURE__ */ ce(HC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue"]]);
const VC = ye({
  total: {
    type: Number,
    default: 1e3
  }
}), WC = ["disabled"], KC = H({
  name: "ElPaginationTotal"
}), jC = /* @__PURE__ */ H({
  ...KC,
  props: VC,
  setup(e) {
    const { t } = ft(), n = oe("pagination"), { disabled: o } = sa();
    return (r, l) => (T(), L("span", {
      class: P(c(n).e("total")),
      disabled: c(o)
    }, me(c(t)("el.pagination.total", {
      total: r.total
    })), 11, WC));
  }
});
var UC = /* @__PURE__ */ ce(jC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue"]]);
const qC = ye({
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
}), GC = ["onKeyup"], YC = ["aria-current", "aria-label", "tabindex"], XC = ["tabindex", "aria-label"], ZC = ["aria-current", "aria-label", "tabindex"], JC = ["tabindex", "aria-label"], QC = ["aria-current", "aria-label", "tabindex"], eS = H({
  name: "ElPaginationPager"
}), tS = /* @__PURE__ */ H({
  ...eS,
  props: qC,
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = e, o = oe("pager"), r = oe("icon"), { t: l } = ft(), a = k(!1), s = k(!1), i = k(!1), u = k(!1), f = k(!1), d = k(!1), v = S(() => {
      const b = n.pagerCount, $ = (b - 1) / 2, O = Number(n.currentPage), _ = Number(n.pageCount);
      let E = !1, A = !1;
      _ > b && (O > b - $ && (E = !0), O < _ - $ && (A = !0));
      const F = [];
      if (E && !A) {
        const B = _ - (b - 2);
        for (let M = B; M < _; M++)
          F.push(M);
      } else if (!E && A)
        for (let B = 2; B < b; B++)
          F.push(B);
      else if (E && A) {
        const B = Math.floor(b / 2) - 1;
        for (let M = O - B; M <= O + B; M++)
          F.push(M);
      } else
        for (let B = 2; B < _; B++)
          F.push(B);
      return F;
    }), m = S(() => [
      "more",
      "btn-quickprev",
      r.b(),
      o.is("disabled", n.disabled)
    ]), p = S(() => [
      "more",
      "btn-quicknext",
      r.b(),
      o.is("disabled", n.disabled)
    ]), g = S(() => n.disabled ? -1 : 0);
    Mn(() => {
      const b = (n.pagerCount - 1) / 2;
      a.value = !1, s.value = !1, n.pageCount > n.pagerCount && (n.currentPage > n.pagerCount - b && (a.value = !0), n.currentPage < n.pageCount - b && (s.value = !0));
    });
    function y(b = !1) {
      n.disabled || (b ? i.value = !0 : u.value = !0);
    }
    function h(b = !1) {
      b ? f.value = !0 : d.value = !0;
    }
    function w(b) {
      const $ = b.target;
      if ($.tagName.toLowerCase() === "li" && Array.from($.classList).includes("number")) {
        const O = Number($.textContent);
        O !== n.currentPage && t("change", O);
      } else
        $.tagName.toLowerCase() === "li" && Array.from($.classList).includes("more") && C(b);
    }
    function C(b) {
      const $ = b.target;
      if ($.tagName.toLowerCase() === "ul" || n.disabled)
        return;
      let O = Number($.textContent);
      const _ = n.pageCount, E = n.currentPage, A = n.pagerCount - 2;
      $.className.includes("more") && ($.className.includes("quickprev") ? O = E - A : $.className.includes("quicknext") && (O = E + A)), Number.isNaN(+O) || (O < 1 && (O = 1), O > _ && (O = _)), O !== E && t("change", O);
    }
    return (b, $) => (T(), L("ul", {
      class: P(c(o).b()),
      onClick: C,
      onKeyup: $t(w, ["enter"])
    }, [
      b.pageCount > 0 ? (T(), L("li", {
        key: 0,
        class: P([[
          c(o).is("active", b.currentPage === 1),
          c(o).is("disabled", b.disabled)
        ], "number"]),
        "aria-current": b.currentPage === 1,
        "aria-label": c(l)("el.pagination.currentPage", { pager: 1 }),
        tabindex: c(g)
      }, " 1 ", 10, YC)) : V("v-if", !0),
      a.value ? (T(), L("li", {
        key: 1,
        class: P(c(m)),
        tabindex: c(g),
        "aria-label": c(l)("el.pagination.prevPages", { pager: b.pagerCount - 2 }),
        onMouseenter: $[0] || ($[0] = (O) => y(!0)),
        onMouseleave: $[1] || ($[1] = (O) => i.value = !1),
        onFocus: $[2] || ($[2] = (O) => h(!0)),
        onBlur: $[3] || ($[3] = (O) => f.value = !1)
      }, [
        (i.value || f.value) && !b.disabled ? (T(), W(c(Wg), { key: 0 })) : (T(), W(c(Za), { key: 1 }))
      ], 42, XC)) : V("v-if", !0),
      (T(!0), L(ze, null, Kt(c(v), (O) => (T(), L("li", {
        key: O,
        class: P([[
          c(o).is("active", b.currentPage === O),
          c(o).is("disabled", b.disabled)
        ], "number"]),
        "aria-current": b.currentPage === O,
        "aria-label": c(l)("el.pagination.currentPage", { pager: O }),
        tabindex: c(g)
      }, me(O), 11, ZC))), 128)),
      s.value ? (T(), L("li", {
        key: 2,
        class: P(c(p)),
        tabindex: c(g),
        "aria-label": c(l)("el.pagination.nextPages", { pager: b.pagerCount - 2 }),
        onMouseenter: $[4] || ($[4] = (O) => y()),
        onMouseleave: $[5] || ($[5] = (O) => u.value = !1),
        onFocus: $[6] || ($[6] = (O) => h()),
        onBlur: $[7] || ($[7] = (O) => d.value = !1)
      }, [
        (u.value || d.value) && !b.disabled ? (T(), W(c(Yg), { key: 0 })) : (T(), W(c(Za), { key: 1 }))
      ], 42, JC)) : V("v-if", !0),
      b.pageCount > 1 ? (T(), L("li", {
        key: 3,
        class: P([[
          c(o).is("active", b.currentPage === b.pageCount),
          c(o).is("disabled", b.disabled)
        ], "number"]),
        "aria-current": b.currentPage === b.pageCount,
        "aria-label": c(l)("el.pagination.currentPage", { pager: b.pageCount }),
        tabindex: c(g)
      }, me(b.pageCount), 11, QC)) : V("v-if", !0)
    ], 42, GC));
  }
});
var nS = /* @__PURE__ */ ce(tS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue"]]);
const dt = (e) => typeof e != "number", oS = ye({
  pageSize: Number,
  defaultPageSize: Number,
  total: Number,
  pageCount: Number,
  pagerCount: {
    type: Number,
    validator: (e) => xe(e) && Math.trunc(e) === e && e > 4 && e < 22 && e % 2 === 1,
    default: 7
  },
  currentPage: Number,
  defaultCurrentPage: Number,
  layout: {
    type: String,
    default: ["prev", "pager", "next", "jumper", "->", "total"].join(", ")
  },
  pageSizes: {
    type: de(Array),
    default: () => Wl([10, 20, 30, 40, 50, 100])
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
    type: Je,
    default: () => ng
  },
  nextText: {
    type: String,
    default: ""
  },
  nextIcon: {
    type: Je,
    default: () => Dl
  },
  teleported: {
    type: Boolean,
    default: !0
  },
  small: Boolean,
  background: Boolean,
  disabled: Boolean,
  hideOnSinglePage: Boolean
}), rS = {
  "update:current-page": (e) => xe(e),
  "update:page-size": (e) => xe(e),
  "size-change": (e) => xe(e),
  "current-change": (e) => xe(e),
  "prev-click": (e) => xe(e),
  "next-click": (e) => xe(e)
}, zs = "ElPagination";
var lS = H({
  name: zs,
  props: oS,
  emits: rS,
  setup(e, { emit: t, slots: n }) {
    const { t: o } = ft(), r = oe("pagination"), l = $e().vnode.props || {}, a = "onUpdate:currentPage" in l || "onUpdate:current-page" in l || "onCurrentChange" in l, s = "onUpdate:pageSize" in l || "onUpdate:page-size" in l || "onSizeChange" in l, i = S(() => {
      if (dt(e.total) && dt(e.pageCount) || !dt(e.currentPage) && !a)
        return !1;
      if (e.layout.includes("sizes")) {
        if (dt(e.pageCount)) {
          if (!dt(e.total) && !dt(e.pageSize) && !s)
            return !1;
        } else if (!s)
          return !1;
      }
      return !0;
    }), u = k(dt(e.defaultPageSize) ? 10 : e.defaultPageSize), f = k(dt(e.defaultCurrentPage) ? 1 : e.defaultCurrentPage), d = S({
      get() {
        return dt(e.pageSize) ? u.value : e.pageSize;
      },
      set(C) {
        dt(e.pageSize) && (u.value = C), s && (t("update:page-size", C), t("size-change", C));
      }
    }), v = S(() => {
      let C = 0;
      return dt(e.pageCount) ? dt(e.total) || (C = Math.max(1, Math.ceil(e.total / d.value))) : C = e.pageCount, C;
    }), m = S({
      get() {
        return dt(e.currentPage) ? f.value : e.currentPage;
      },
      set(C) {
        let b = C;
        C < 1 ? b = 1 : C > v.value && (b = v.value), dt(e.currentPage) && (f.value = b), a && (t("update:current-page", b), t("current-change", b));
      }
    });
    J(v, (C) => {
      m.value > C && (m.value = C);
    });
    function p(C) {
      m.value = C;
    }
    function g(C) {
      d.value = C;
      const b = v.value;
      m.value > b && (m.value = b);
    }
    function y() {
      e.disabled || (m.value -= 1, t("prev-click", m.value));
    }
    function h() {
      e.disabled || (m.value += 1, t("next-click", m.value));
    }
    function w(C, b) {
      C && (C.props || (C.props = {}), C.props.class = [C.props.class, b].join(" "));
    }
    return Xe(Zu, {
      pageCount: v,
      disabled: S(() => e.disabled),
      currentPage: m,
      changeEvent: p,
      handleSizeChange: g
    }), () => {
      var C, b;
      if (!i.value)
        return Ve(zs, o("el.pagination.deprecationWarning")), null;
      if (!e.layout || e.hideOnSinglePage && v.value <= 1)
        return null;
      const $ = [], O = [], _ = ae("div", { class: r.e("rightwrapper") }, O), E = {
        prev: ae(iC, {
          disabled: e.disabled,
          currentPage: m.value,
          prevText: e.prevText,
          prevIcon: e.prevIcon,
          onClick: y
        }),
        jumper: ae(DC, {
          size: e.small ? "small" : "default"
        }),
        pager: ae(nS, {
          currentPage: m.value,
          pageCount: v.value,
          pagerCount: e.pagerCount,
          onChange: p,
          disabled: e.disabled
        }),
        next: ae(vC, {
          disabled: e.disabled,
          currentPage: m.value,
          pageCount: v.value,
          nextText: e.nextText,
          nextIcon: e.nextIcon,
          onClick: h
        }),
        sizes: ae(MC, {
          pageSize: d.value,
          pageSizes: e.pageSizes,
          popperClass: e.popperClass,
          disabled: e.disabled,
          teleported: e.teleported,
          size: e.small ? "small" : "default"
        }),
        slot: (b = (C = n == null ? void 0 : n.default) == null ? void 0 : C.call(n)) != null ? b : null,
        total: ae(UC, { total: dt(e.total) ? 0 : e.total })
      }, A = e.layout.split(",").map((B) => B.trim());
      let F = !1;
      return A.forEach((B) => {
        if (B === "->") {
          F = !0;
          return;
        }
        F ? O.push(E[B]) : $.push(E[B]);
      }), w($[0], r.is("first")), w($[$.length - 1], r.is("last")), F && O.length > 0 && (w(O[0], r.is("first")), w(O[O.length - 1], r.is("last")), $.push(_)), ae("div", {
        class: [
          r.b(),
          r.is("background", e.background),
          {
            [r.m("small")]: e.small
          }
        ]
      }, $);
    };
  }
});
const aS = tt(lS), sS = ye({
  trigger: Lo.trigger,
  placement: Xr.placement,
  disabled: Lo.disabled,
  visible: Tt.visible,
  transition: Tt.transition,
  popperOptions: Xr.popperOptions,
  tabindex: Xr.tabindex,
  content: Tt.content,
  popperStyle: Tt.popperStyle,
  popperClass: Tt.popperClass,
  enterable: {
    ...Tt.enterable,
    default: !0
  },
  effect: {
    ...Tt.effect,
    default: "light"
  },
  teleported: Tt.teleported,
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
}), iS = {
  "update:visible": (e) => bt(e),
  "before-enter": () => !0,
  "before-leave": () => !0,
  "after-enter": () => !0,
  "after-leave": () => !0
}, uS = "onUpdate:visible", cS = H({
  name: "ElPopover"
}), dS = /* @__PURE__ */ H({
  ...cS,
  props: sS,
  emits: iS,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = S(() => o[uS]), l = oe("popover"), a = k(), s = S(() => {
      var y;
      return (y = c(a)) == null ? void 0 : y.popperRef;
    }), i = S(() => [
      {
        width: Sn(o.width)
      },
      o.popperStyle
    ]), u = S(() => [l.b(), o.popperClass, { [l.m("plain")]: !!o.content }]), f = S(() => o.transition === `${l.namespace.value}-fade-in-linear`), d = () => {
      var y;
      (y = a.value) == null || y.hide();
    }, v = () => {
      n("before-enter");
    }, m = () => {
      n("before-leave");
    }, p = () => {
      n("after-enter");
    }, g = () => {
      n("update:visible", !1), n("after-leave");
    };
    return t({
      popperRef: s,
      hide: d
    }), (y, h) => (T(), W(c(la), mt({
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
      onHide: g
    }), {
      content: D(() => [
        y.title ? (T(), L("div", {
          key: 0,
          class: P(c(l).e("title")),
          role: "title"
        }, me(y.title), 3)) : V("v-if", !0),
        te(y.$slots, "default", {}, () => [
          jt(me(y.content), 1)
        ])
      ]),
      default: D(() => [
        y.$slots.reference ? te(y.$slots, "reference", { key: 0 }) : V("v-if", !0)
      ]),
      _: 3
    }, 16, ["trigger", "placement", "disabled", "visible", "transition", "popper-options", "tabindex", "content", "offset", "show-after", "hide-after", "auto-close", "show-arrow", "aria-label", "effect", "enterable", "popper-class", "popper-style", "teleported", "persistent", "gpu-acceleration", "onUpdate:visible"]));
  }
});
var fS = /* @__PURE__ */ ce(dS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue"]]);
const Fs = (e, t) => {
  const n = t.arg || t.value, o = n == null ? void 0 : n.popperRef;
  o && (o.triggerRef = e);
};
var pS = {
  mounted(e, t) {
    Fs(e, t);
  },
  updated(e, t) {
    Fs(e, t);
  }
};
const vS = "popover", hS = r0(pS, vS), gS = tt(fS, {
  directive: hS
}), mS = ye({
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
    validator: Bi
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
    type: Je
  },
  activeActionIcon: {
    type: Je
  },
  activeIcon: {
    type: Je
  },
  inactiveIcon: {
    type: Je
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
    type: de(Function)
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
}), bS = {
  [Fe]: (e) => bt(e) || Ue(e) || xe(e),
  [to]: (e) => bt(e) || Ue(e) || xe(e),
  [sl]: (e) => bt(e) || Ue(e) || xe(e)
}, yS = ["onClick"], wS = ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"], CS = ["aria-hidden"], SS = ["aria-hidden"], _S = ["aria-hidden"], lr = "ElSwitch", ES = H({
  name: lr
}), $S = /* @__PURE__ */ H({
  ...ES,
  props: mS,
  emits: bS,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = $e(), { formItem: l } = On(), a = un(), s = oe("switch");
    ((E) => {
      E.forEach((A) => {
        Po({
          from: A[0],
          replacement: A[1],
          scope: lr,
          version: "2.3.0",
          ref: "https://element-plus.org/en-US/component/switch.html#attributes",
          type: "Attribute"
        }, S(() => {
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
    const { inputId: u } = Do(o, {
      formItemContext: l
    }), f = fo(S(() => o.loading)), d = k(o.modelValue !== !1), v = k(), m = k(), p = S(() => [
      s.b(),
      s.m(a.value),
      s.is("disabled", f.value),
      s.is("checked", C.value)
    ]), g = S(() => [
      s.e("label"),
      s.em("label", "left"),
      s.is("active", !C.value)
    ]), y = S(() => [
      s.e("label"),
      s.em("label", "right"),
      s.is("active", C.value)
    ]), h = S(() => ({
      width: Sn(o.width)
    }));
    J(() => o.modelValue, () => {
      d.value = !0;
    }), J(() => o.value, () => {
      d.value = !1;
    });
    const w = S(() => d.value ? o.modelValue : o.value), C = S(() => w.value === o.activeValue);
    [o.activeValue, o.inactiveValue].includes(w.value) || (n(Fe, o.inactiveValue), n(to, o.inactiveValue), n(sl, o.inactiveValue)), J(C, (E) => {
      var A;
      v.value.checked = E, o.validateEvent && ((A = l == null ? void 0 : l.validate) == null || A.call(l, "change").catch((F) => Ve(F)));
    });
    const b = () => {
      const E = C.value ? o.inactiveValue : o.activeValue;
      n(Fe, E), n(to, E), n(sl, E), be(() => {
        v.value.checked = C.value;
      });
    }, $ = () => {
      if (f.value)
        return;
      const { beforeChange: E } = o;
      if (!E) {
        b();
        return;
      }
      const A = E();
      [
        wa(A),
        bt(A)
      ].includes(!0) || Or(lr, "beforeChange must return type `Promise<boolean>` or `boolean`"), wa(A) ? A.then((B) => {
        B && b();
      }).catch((B) => {
        Ve(lr, `some error occurred: ${B}`);
      }) : A && b();
    }, O = S(() => s.cssVarBlock({
      ...o.activeColor ? { "on-color": o.activeColor } : null,
      ...o.inactiveColor ? { "off-color": o.inactiveColor } : null,
      ...o.borderColor ? { "border-color": o.borderColor } : null
    })), _ = () => {
      var E, A;
      (A = (E = v.value) == null ? void 0 : E.focus) == null || A.call(E);
    };
    return Ie(() => {
      v.value.checked = C.value;
    }), t({
      focus: _,
      checked: C
    }), (E, A) => (T(), L("div", {
      class: P(c(p)),
      style: Oe(c(O)),
      onClick: De($, ["prevent"])
    }, [
      R("input", {
        id: c(u),
        ref_key: "input",
        ref: v,
        class: P(c(s).e("input")),
        type: "checkbox",
        role: "switch",
        "aria-checked": c(C),
        "aria-disabled": c(f),
        "aria-label": E.label,
        name: E.name,
        "true-value": E.activeValue,
        "false-value": E.inactiveValue,
        disabled: c(f),
        tabindex: E.tabindex,
        onChange: b,
        onKeydown: $t($, ["enter"])
      }, null, 42, wS),
      !E.inlinePrompt && (E.inactiveIcon || E.inactiveText) ? (T(), L("span", {
        key: 0,
        class: P(c(g))
      }, [
        E.inactiveIcon ? (T(), W(c(Ne), { key: 0 }, {
          default: D(() => [
            (T(), W(je(E.inactiveIcon)))
          ]),
          _: 1
        })) : V("v-if", !0),
        !E.inactiveIcon && E.inactiveText ? (T(), L("span", {
          key: 1,
          "aria-hidden": c(C)
        }, me(E.inactiveText), 9, CS)) : V("v-if", !0)
      ], 2)) : V("v-if", !0),
      R("span", {
        ref_key: "core",
        ref: m,
        class: P(c(s).e("core")),
        style: Oe(c(h))
      }, [
        E.inlinePrompt ? (T(), L("div", {
          key: 0,
          class: P(c(s).e("inner"))
        }, [
          E.activeIcon || E.inactiveIcon ? (T(), W(c(Ne), {
            key: 0,
            class: P(c(s).is("icon"))
          }, {
            default: D(() => [
              (T(), W(je(c(C) ? E.activeIcon : E.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : E.activeText || E.inactiveText ? (T(), L("span", {
            key: 1,
            class: P(c(s).is("text")),
            "aria-hidden": !c(C)
          }, me(c(C) ? E.activeText : E.inactiveText), 11, SS)) : V("v-if", !0)
        ], 2)) : V("v-if", !0),
        R("div", {
          class: P(c(s).e("action"))
        }, [
          E.loading ? (T(), W(c(Ne), {
            key: 0,
            class: P(c(s).is("loading"))
          }, {
            default: D(() => [
              X(c(kr))
            ]),
            _: 1
          }, 8, ["class"])) : E.activeActionIcon && c(C) ? (T(), W(c(Ne), { key: 1 }, {
            default: D(() => [
              (T(), W(je(E.activeActionIcon)))
            ]),
            _: 1
          })) : E.inactiveActionIcon && !c(C) ? (T(), W(c(Ne), { key: 2 }, {
            default: D(() => [
              (T(), W(je(E.inactiveActionIcon)))
            ]),
            _: 1
          })) : V("v-if", !0)
        ], 2)
      ], 6),
      !E.inlinePrompt && (E.activeIcon || E.activeText) ? (T(), L("span", {
        key: 1,
        class: P(c(y))
      }, [
        E.activeIcon ? (T(), W(c(Ne), { key: 0 }, {
          default: D(() => [
            (T(), W(je(E.activeIcon)))
          ]),
          _: 1
        })) : V("v-if", !0),
        !E.activeIcon && E.activeText ? (T(), L("span", {
          key: 1,
          "aria-hidden": !c(C)
        }, me(E.activeText), 9, _S)) : V("v-if", !0)
      ], 2)) : V("v-if", !0)
    ], 14, yS));
  }
});
var TS = /* @__PURE__ */ ce($S, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);
const nc = tt(TS);
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */
var OS = /["'&<>]/, kS = xS;
function xS(e) {
  var t = "" + e, n = OS.exec(t);
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
const PS = /* @__PURE__ */ W1(kS), Zr = function(e) {
  var t;
  return (t = e.target) == null ? void 0 : t.closest("td");
}, AS = function(e, t, n, o, r) {
  if (!t && !o && (!r || Array.isArray(r) && !r.length))
    return e;
  typeof n == "string" ? n = n === "descending" ? -1 : 1 : n = n && n < 0 ? -1 : 1;
  const l = o ? null : function(s, i) {
    return r ? (Array.isArray(r) || (r = [r]), r.map((u) => typeof u == "string" ? lt(s, u) : u(s, i, e))) : (t !== "$key" && Qe(s) && "$value" in s && (s = s.$value), [Qe(s) ? lt(s, t) : s]);
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
}, oc = function(e, t) {
  let n = null;
  return e.columns.forEach((o) => {
    o.id === t && (n = o);
  }), n;
}, IS = function(e, t) {
  let n = null;
  for (let o = 0; o < e.columns.length; o++) {
    const r = e.columns[o];
    if (r.columnKey === t) {
      n = r;
      break;
    }
  }
  return n || Or("ElTable", `No column matching with column-key: ${t}`), n;
}, Hs = function(e, t, n) {
  const o = (t.className || "").match(new RegExp(`${n}-table_[^\\s]+`, "gm"));
  return o ? oc(e, o[0]) : null;
}, Ze = (e, t) => {
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
    n[Ze(o, t)] = { row: o, index: r };
  }), n;
};
function LS(e, t) {
  const n = {};
  let o;
  for (o in e)
    n[o] = e[o];
  for (o in t)
    if (zn(t, o)) {
      const r = t[o];
      typeof r < "u" && (n[o] = r);
    }
  return n;
}
function ia(e) {
  return e === "" || e !== void 0 && (e = Number.parseInt(e, 10), Number.isNaN(e) && (e = "")), e;
}
function rc(e) {
  return e === "" || e !== void 0 && (e = ia(e), Number.isNaN(e) && (e = 80)), e;
}
function NS(e) {
  return typeof e == "number" ? e : typeof e == "string" ? /^\d+(?:px)?$/.test(e) ? Number.parseInt(e, 10) : e : null;
}
function RS(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...o) => t(n(...o)));
}
function Eo(e, t, n) {
  let o = !1;
  const r = e.indexOf(t), l = r !== -1, a = (s) => {
    s === "add" ? e.push(t) : e.splice(r, 1), o = !0, bn(t.children) && t.children.forEach((i) => {
      Eo(e, i, n ?? !l);
    });
  };
  return bt(n) ? n && !l ? a("add") : !n && l && a("remove") : a(l ? "remove" : "add"), o;
}
function MS(e, t, n = "children", o = "hasChildren") {
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
let on;
function BS(e, t, n, o, r) {
  r = Pi({
    enterable: !0,
    showArrow: !0
  }, r);
  const l = e == null ? void 0 : e.dataset.prefix, a = e == null ? void 0 : e.querySelector(`.${l}-scrollbar__wrap`);
  function s() {
    const y = r.effect === "light", h = document.createElement("div");
    return h.className = [
      `${l}-popper`,
      y ? "is-light" : "is-dark",
      r.popperClass || ""
    ].join(" "), n = PS(n), h.innerHTML = n, h.style.zIndex = String(o()), e == null || e.appendChild(h), h;
  }
  function i() {
    const y = document.createElement("div");
    return y.className = `${l}-popper__arrow`, y;
  }
  function u() {
    f && f.update();
  }
  on == null || on(), on = () => {
    try {
      f && f.destroy(), m && (e == null || e.removeChild(m)), t.removeEventListener("mouseenter", d), t.removeEventListener("mouseleave", v), a == null || a.removeEventListener("scroll", on), on = void 0;
    } catch {
    }
  };
  let f = null, d = u, v = on;
  r.enterable && ({ onOpen: d, onClose: v } = lu({
    showAfter: r.showAfter,
    hideAfter: r.hideAfter,
    open: u,
    close: on
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
  const g = r.popperOptions || {};
  return f = nu(t, m, {
    placement: r.placement || "top",
    strategy: "fixed",
    ...g,
    modifiers: g.modifiers ? p.concat(g.modifiers) : p
  }), t.addEventListener("mouseenter", d), t.addEventListener("mouseleave", v), a == null || a.addEventListener("scroll", on), f;
}
function lc(e) {
  return e.children ? Lh(e.children, lc) : [e];
}
function Ds(e, t) {
  return e + t.colSpan;
}
const ac = (e, t, n, o) => {
  let r = 0, l = e;
  const a = n.states.columns.value;
  if (o) {
    const i = lc(o[e]);
    r = a.slice(0, a.indexOf(i[0])).reduce(Ds, 0), l = r + i.reduce(Ds, 0) - 1;
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
}, ua = (e, t, n, o, r, l = 0) => {
  const a = [], { direction: s, start: i, after: u } = ac(t, n, o, r);
  if (s) {
    const f = s === "left";
    a.push(`${e}-fixed-column--${s}`), f && u + l === o.states.fixedLeafColumnsLength.value - 1 ? a.push("is-last-column") : !f && i - l === o.states.columns.value.length - o.states.rightFixedLeafColumnsLength.value && a.push("is-first-column");
  }
  return a;
};
function Vs(e, t) {
  return e + (t.realWidth === null || Number.isNaN(t.realWidth) ? Number(t.width) : t.realWidth);
}
const ca = (e, t, n, o) => {
  const {
    direction: r,
    start: l = 0,
    after: a = 0
  } = ac(e, t, n, o);
  if (!r)
    return;
  const s = {}, i = r === "left", u = n.states.columns.value;
  return i ? s.left = u.slice(0, l).reduce(Vs, 0) : s.right = u.slice(a + 1).reverse().reduce(Vs, 0), s;
}, io = (e, t) => {
  e && (Number.isNaN(e[t]) || (e[t] = `${e[t]}px`));
};
function zS(e) {
  const t = $e(), n = k(!1), o = k([]);
  return {
    updateExpandRows: () => {
      const i = e.data.value || [], u = e.rowKey.value;
      if (n.value)
        o.value = i.slice();
      else if (u) {
        const f = Nn(o.value, u);
        o.value = i.reduce((d, v) => {
          const m = Ze(v, u);
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
      return u ? !!Nn(o.value, u)[Ze(i, u)] : o.value.includes(i);
    },
    states: {
      expandRows: o,
      defaultExpandAll: n
    }
  };
}
function FS(e) {
  const t = $e(), n = k(null), o = k(null), r = (u) => {
    t.store.assertRowKey(), n.value = u, a(u);
  }, l = () => {
    n.value = null;
  }, a = (u) => {
    const { data: f, rowKey: d } = e;
    let v = null;
    d.value && (v = (c(f) || []).find((m) => Ze(m, d.value) === u)), o.value = v, t.emit("current-change", o.value, null);
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
          const v = Ze(d, u);
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
function HS(e) {
  const t = k([]), n = k({}), o = k(16), r = k(!1), l = k({}), a = k("hasChildren"), s = k("children"), i = $e(), u = S(() => {
    if (!e.rowKey.value)
      return {};
    const h = e.data.value || [];
    return d(h);
  }), f = S(() => {
    const h = e.rowKey.value, w = Object.keys(l.value), C = {};
    return w.length && w.forEach((b) => {
      if (l.value[b].length) {
        const $ = { children: [] };
        l.value[b].forEach((O) => {
          const _ = Ze(O, h);
          $.children.push(_), O[a.value] && !C[_] && (C[_] = { children: [] });
        }), C[b] = $;
      }
    }), C;
  }), d = (h) => {
    const w = e.rowKey.value, C = {};
    return MS(h, (b, $, O) => {
      const _ = Ze(b, w);
      Array.isArray($) ? C[_] = {
        children: $.map((E) => Ze(E, w)),
        level: O
      } : r.value && (C[_] = {
        children: [],
        lazy: !0,
        level: O
      });
    }, s.value, a.value), C;
  }, v = (h = !1, w = ((C) => (C = i.store) == null ? void 0 : C.states.defaultExpandAll.value)()) => {
    var C;
    const b = u.value, $ = f.value, O = Object.keys(b), _ = {};
    if (O.length) {
      const E = c(n), A = [], F = (M, G) => {
        if (h)
          return t.value ? w || t.value.includes(G) : !!(w || M != null && M.expanded);
        {
          const ne = w || t.value && t.value.includes(G);
          return !!(M != null && M.expanded || ne);
        }
      };
      O.forEach((M) => {
        const G = E[M], ne = { ...b[M] };
        if (ne.expanded = F(G, M), ne.lazy) {
          const { loaded: Z = !1, loading: ee = !1 } = G || {};
          ne.loaded = !!Z, ne.loading = !!ee, A.push(M);
        }
        _[M] = ne;
      });
      const B = Object.keys($);
      r.value && B.length && A.length && B.forEach((M) => {
        const G = E[M], ne = $[M].children;
        if (A.includes(M)) {
          if (_[M].children.length !== 0)
            throw new Error("[ElTable]children must be an empty array.");
          _[M].children = ne;
        } else {
          const { loaded: Z = !1, loading: ee = !1 } = G || {};
          _[M] = {
            lazy: !0,
            loaded: !!Z,
            loading: !!ee,
            expanded: F(G, M),
            children: ne,
            level: ""
          };
        }
      });
    }
    n.value = _, (C = i.store) == null || C.updateTableScrollY();
  };
  J(() => t.value, () => {
    v(!0);
  }), J(() => u.value, () => {
    v();
  }), J(() => f.value, () => {
    v();
  });
  const m = (h) => {
    t.value = h, v();
  }, p = (h, w) => {
    i.store.assertRowKey();
    const C = e.rowKey.value, b = Ze(h, C), $ = b && n.value[b];
    if (b && $ && "expanded" in $) {
      const O = $.expanded;
      w = typeof w > "u" ? !$.expanded : w, n.value[b].expanded = w, O !== w && i.emit("expand-change", h, w), i.store.updateTableScrollY();
    }
  }, g = (h) => {
    i.store.assertRowKey();
    const w = e.rowKey.value, C = Ze(h, w), b = n.value[C];
    r.value && b && "loaded" in b && !b.loaded ? y(h, C, b) : p(h, void 0);
  }, y = (h, w, C) => {
    const { load: b } = i.props;
    b && !n.value[w].loaded && (n.value[w].loading = !0, b(h, C, ($) => {
      if (!Array.isArray($))
        throw new TypeError("[ElTable] data must be an array");
      n.value[w].loading = !1, n.value[w].loaded = !0, n.value[w].expanded = !0, $.length && (l.value[w] = $), i.emit("expand-change", h, !0);
    }));
  };
  return {
    loadData: y,
    loadOrToggle: g,
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
const DS = (e, t) => {
  const n = t.sortingColumn;
  return !n || typeof n.sortable == "string" ? e : AS(e, t.sortProp, t.sortOrder, n.sortMethod, n.sortBy);
}, ar = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children && n.children.length > 0 ? t.push.apply(t, ar(n.children)) : t.push(n);
  }), t;
};
function VS() {
  var e;
  const t = $e(), { size: n } = Hn((e = t.proxy) == null ? void 0 : e.$props), o = k(null), r = k([]), l = k([]), a = k(!1), s = k([]), i = k([]), u = k([]), f = k([]), d = k([]), v = k([]), m = k([]), p = k([]), g = [], y = k(0), h = k(0), w = k(0), C = k(!1), b = k([]), $ = k(!1), O = k(!1), _ = k(null), E = k({}), A = k(null), F = k(null), B = k(null), M = k(null), G = k(null);
  J(r, () => t.state && K(!1), {
    deep: !0
  });
  const ne = () => {
    if (!o.value)
      throw new Error("[ElTable] prop row-key is required");
  }, Z = (Y) => {
    var le;
    (le = Y.children) == null || le.forEach((ge) => {
      ge.fixed = Y.fixed, Z(ge);
    });
  }, ee = () => {
    s.value.forEach((Se) => {
      Z(Se);
    }), f.value = s.value.filter((Se) => Se.fixed === !0 || Se.fixed === "left"), d.value = s.value.filter((Se) => Se.fixed === "right"), f.value.length > 0 && s.value[0] && s.value[0].type === "selection" && !s.value[0].fixed && (s.value[0].fixed = !0, f.value.unshift(s.value[0]));
    const Y = s.value.filter((Se) => !Se.fixed);
    i.value = [].concat(f.value).concat(Y).concat(d.value);
    const le = ar(Y), ge = ar(f.value), fe = ar(d.value);
    y.value = le.length, h.value = ge.length, w.value = fe.length, u.value = [].concat(ge).concat(le).concat(fe), a.value = f.value.length > 0 || d.value.length > 0;
  }, K = (Y, le = !1) => {
    Y && ee(), le ? t.state.doLayout() : t.state.debouncedUpdateLayout();
  }, ie = (Y) => b.value.includes(Y), N = () => {
    C.value = !1, b.value.length && (b.value = [], t.emit("selection-change", []));
  }, j = () => {
    let Y;
    if (o.value) {
      Y = [];
      const le = Nn(b.value, o.value), ge = Nn(r.value, o.value);
      for (const fe in le)
        zn(le, fe) && !ge[fe] && Y.push(le[fe].row);
    } else
      Y = b.value.filter((le) => !r.value.includes(le));
    if (Y.length) {
      const le = b.value.filter((ge) => !Y.includes(ge));
      b.value = le, t.emit("selection-change", le.slice());
    }
  }, re = () => (b.value || []).slice(), se = (Y, le = void 0, ge = !0) => {
    if (Eo(b.value, Y, le)) {
      const Se = (b.value || []).slice();
      ge && t.emit("select", Se, Y), t.emit("selection-change", Se);
    }
  }, ue = () => {
    var Y, le;
    const ge = O.value ? !C.value : !(C.value || b.value.length);
    C.value = ge;
    let fe = !1, Se = 0;
    const Be = (le = (Y = t == null ? void 0 : t.store) == null ? void 0 : Y.states) == null ? void 0 : le.rowKey.value;
    r.value.forEach((pe, Ye) => {
      const rt = Ye + Se;
      _.value ? _.value.call(null, pe, rt) && Eo(b.value, pe, ge) && (fe = !0) : Eo(b.value, pe, ge) && (fe = !0), Se += we(Ze(pe, Be));
    }), fe && t.emit("selection-change", b.value ? b.value.slice() : []), t.emit("select-all", b.value);
  }, _e = () => {
    const Y = Nn(b.value, o.value);
    r.value.forEach((le) => {
      const ge = Ze(le, o.value), fe = Y[ge];
      fe && (b.value[fe.index] = le);
    });
  }, Te = () => {
    var Y, le, ge;
    if (((Y = r.value) == null ? void 0 : Y.length) === 0) {
      C.value = !1;
      return;
    }
    let fe;
    o.value && (fe = Nn(b.value, o.value));
    const Se = function(rt) {
      return fe ? !!fe[Ze(rt, o.value)] : b.value.includes(rt);
    };
    let Be = !0, pe = 0, Ye = 0;
    for (let rt = 0, vo = (r.value || []).length; rt < vo; rt++) {
      const jn = (ge = (le = t == null ? void 0 : t.store) == null ? void 0 : le.states) == null ? void 0 : ge.rowKey.value, ho = rt + Ye, kn = r.value[rt], x = _.value && _.value.call(null, kn, ho);
      if (Se(kn))
        pe++;
      else if (!_.value || x) {
        Be = !1;
        break;
      }
      Ye += we(Ze(kn, jn));
    }
    pe === 0 && (Be = !1), C.value = Be;
  }, we = (Y) => {
    var le;
    if (!t || !t.store)
      return 0;
    const { treeData: ge } = t.store.states;
    let fe = 0;
    const Se = (le = ge.value[Y]) == null ? void 0 : le.children;
    return Se && (fe += Se.length, Se.forEach((Be) => {
      fe += we(Be);
    })), fe;
  }, Me = (Y, le) => {
    Array.isArray(Y) || (Y = [Y]);
    const ge = {};
    return Y.forEach((fe) => {
      E.value[fe.id] = le, ge[fe.columnKey || fe.id] = le;
    }), ge;
  }, Ee = (Y, le, ge) => {
    F.value && F.value !== Y && (F.value.order = null), F.value = Y, B.value = le, M.value = ge;
  }, He = () => {
    let Y = c(l);
    Object.keys(E.value).forEach((le) => {
      const ge = E.value[le];
      if (!ge || ge.length === 0)
        return;
      const fe = oc({
        columns: u.value
      }, le);
      fe && fe.filterMethod && (Y = Y.filter((Se) => ge.some((Be) => fe.filterMethod.call(null, Be, Se, fe))));
    }), A.value = Y;
  }, Pe = () => {
    r.value = DS(A.value, {
      sortingColumn: F.value,
      sortProp: B.value,
      sortOrder: M.value
    });
  }, Ge = (Y = void 0) => {
    Y && Y.filter || He(), Pe();
  }, pt = (Y) => {
    const { tableHeaderRef: le } = t.refs;
    if (!le)
      return;
    const ge = Object.assign({}, le.filterPanels), fe = Object.keys(ge);
    if (fe.length)
      if (typeof Y == "string" && (Y = [Y]), Array.isArray(Y)) {
        const Se = Y.map((Be) => IS({
          columns: u.value
        }, Be));
        fe.forEach((Be) => {
          const pe = Se.find((Ye) => Ye.id === Be);
          pe && (pe.filteredValue = []);
        }), t.store.commit("filterChange", {
          column: Se,
          values: [],
          silent: !0,
          multi: !0
        });
      } else
        fe.forEach((Se) => {
          const Be = u.value.find((pe) => pe.id === Se);
          Be && (Be.filteredValue = []);
        }), E.value = {}, t.store.commit("filterChange", {
          column: {},
          values: [],
          silent: !0
        });
  }, nt = () => {
    F.value && (Ee(null, null, null), t.store.commit("changeSortCondition", {
      silent: !0
    }));
  }, {
    setExpandRowKeys: Ct,
    toggleRowExpansion: vt,
    updateExpandRows: st,
    states: Pt,
    isRowExpanded: it
  } = zS({
    data: r,
    rowKey: o
  }), {
    updateTreeExpandKeys: St,
    toggleTreeExpansion: We,
    updateTreeData: ut,
    loadOrToggle: ot,
    states: At
  } = HS({
    data: r,
    rowKey: o
  }), {
    updateCurrentRowData: q,
    updateCurrentRow: I,
    setCurrentRowKey: Q,
    states: Ce
  } = FS({
    data: r,
    rowKey: o
  });
  return {
    assertRowKey: ne,
    updateColumns: ee,
    scheduleLayout: K,
    isSelected: ie,
    clearSelection: N,
    cleanSelection: j,
    getSelectionRows: re,
    toggleRowSelection: se,
    _toggleAllSelection: ue,
    toggleAllSelection: null,
    updateSelectionByRowKey: _e,
    updateAllSelected: Te,
    updateFilters: Me,
    updateCurrentRow: I,
    updateSort: Ee,
    execFilter: He,
    execSort: Pe,
    execQuery: Ge,
    clearFilter: pt,
    clearSort: nt,
    toggleRowExpansion: vt,
    setExpandRowKeysAdapter: (Y) => {
      Ct(Y), St(Y);
    },
    setCurrentRowKey: Q,
    toggleRowExpansionAdapter: (Y, le) => {
      u.value.some(({ type: fe }) => fe === "expand") ? vt(Y, le) : We(Y, le);
    },
    isRowExpanded: it,
    updateExpandRows: st,
    updateCurrentRowData: q,
    loadOrToggle: ot,
    updateTreeData: ut,
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
      updateOrderFns: g,
      leafColumnsLength: y,
      fixedLeafColumnsLength: h,
      rightFixedLeafColumnsLength: w,
      isAllSelected: C,
      selection: b,
      reserveSelection: $,
      selectOnIndeterminate: O,
      selectable: _,
      filters: E,
      filteredData: A,
      sortingColumn: F,
      sortProp: B,
      sortOrder: M,
      hoverRow: G,
      ...Pt,
      ...At,
      ...Ce
    }
  };
}
function Sl(e, t) {
  return e.map((n) => {
    var o;
    return n.id === t.id ? t : ((o = n.children) != null && o.length && (n.children = Sl(n.children, t)), n);
  });
}
function _l(e) {
  e.forEach((t) => {
    var n, o;
    t.no = (n = t.getColumnIndex) == null ? void 0 : n.call(t), (o = t.children) != null && o.length && _l(t.children);
  }), e.sort((t, n) => t.no - n.no);
}
function WS() {
  const e = $e(), t = VS();
  return {
    ns: oe("table"),
    ...t,
    mutations: {
      setData(a, s) {
        const i = c(a._data) !== s;
        a.data.value = s, a._data.value = s, e.store.execQuery(), e.store.updateCurrentRowData(), e.store.updateExpandRows(), e.store.updateTreeData(e.store.states.defaultExpandAll.value), c(a.reserveSelection) ? (e.store.assertRowKey(), e.store.updateSelectionByRowKey()) : i ? e.store.clearSelection() : e.store.cleanSelection(), e.store.updateAllSelected(), e.$ready && e.store.scheduleLayout();
      },
      insertColumn(a, s, i, u) {
        const f = c(a._columns);
        let d = [];
        i ? (i && !i.children && (i.children = []), i.children.push(s), d = Sl(f, i)) : (f.push(s), d = f), _l(d), a._columns.value = d, a.updateOrderFns.push(u), s.type === "selection" && (a.selectable.value = s.selectable, a.reserveSelection.value = s.reserveSelection), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
      },
      updateColumnOrder(a, s) {
        var i;
        ((i = s.getColumnIndex) == null ? void 0 : i.call(s)) !== s.no && (_l(a._columns.value), e.$ready && e.store.updateColumns());
      },
      removeColumn(a, s, i, u) {
        const f = c(a._columns) || [];
        if (i)
          i.children.splice(i.children.findIndex((v) => v.id === s.id), 1), be(() => {
            var v;
            ((v = i.children) == null ? void 0 : v.length) === 0 && delete i.children;
          }), a._columns.value = Sl(f, i);
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
      be(() => e.layout.updateScrollY.apply(e.layout));
    }
  };
}
const $o = {
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
function KS(e, t) {
  if (!e)
    throw new Error("Table is required.");
  const n = WS();
  return n.toggleAllSelection = Qn(n._toggleAllSelection, 10), Object.keys($o).forEach((o) => {
    sc(ic(t, o), o, n);
  }), jS(n, t), n;
}
function jS(e, t) {
  Object.keys($o).forEach((n) => {
    J(() => ic(t, n), (o) => {
      sc(o, n, e);
    });
  });
}
function sc(e, t, n) {
  let o = e, r = $o[t];
  typeof $o[t] == "object" && (r = r.key, o = o || $o[t].default), n.states[r].value = o;
}
function ic(e, t) {
  if (t.includes(".")) {
    const n = t.split(".");
    let o = e;
    return n.forEach((r) => {
      o = o[r];
    }), o;
  } else
    return e[t];
}
class US {
  constructor(t) {
    this.observers = [], this.table = null, this.store = null, this.columns = [], this.fit = !0, this.showHeader = !0, this.height = k(null), this.scrollX = k(!1), this.scrollY = k(!1), this.bodyWidth = k(null), this.fixedWidth = k(null), this.rightFixedWidth = k(null), this.gutterWidth = 0;
    for (const n in t)
      zn(t, n) && (Jt(this[n]) ? this[n].value = t[n] : this[n] = t[n]);
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
    if (!ke)
      return;
    const o = this.table.vnode.el;
    if (t = NS(t), this.height.value = Number(t), !o && (t || t === 0))
      return be(() => this.setHeight(t, n));
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
    if (!ke)
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
const { CheckboxGroup: qS } = so, GS = H({
  name: "ElTableFilterPanel",
  components: {
    ElCheckbox: so,
    ElCheckboxGroup: qS,
    ElScrollbar: ea,
    ElTooltip: la,
    ElIcon: Ne,
    ArrowDown: Ni,
    ArrowUp: pg
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
    const t = $e(), { t: n } = ft(), o = oe("table-filter"), r = t == null ? void 0 : t.parent;
    r.filterPanels.value[e.column.id] || (r.filterPanels.value[e.column.id] = t);
    const l = k(!1), a = k(null), s = S(() => e.column && e.column.filters), i = S({
      get: () => {
        var b;
        return (((b = e.column) == null ? void 0 : b.filteredValue) || [])[0];
      },
      set: (b) => {
        u.value && (typeof b < "u" && b !== null ? u.value.splice(0, 1, b) : u.value.splice(0, 1));
      }
    }), u = S({
      get() {
        return e.column ? e.column.filteredValue || [] : [];
      },
      set(b) {
        e.column && e.upDataColumn("filteredValue", b);
      }
    }), f = S(() => e.column ? e.column.filterMultiple : !0), d = (b) => b.value === i.value, v = () => {
      l.value = !1;
    }, m = (b) => {
      b.stopPropagation(), l.value = !l.value;
    }, p = () => {
      l.value = !1;
    }, g = () => {
      w(u.value), v();
    }, y = () => {
      u.value = [], w(u.value), v();
    }, h = (b) => {
      i.value = b, w(typeof b < "u" && b !== null ? u.value : []), v();
    }, w = (b) => {
      e.store.commit("filterChange", {
        column: e.column,
        values: b
      }), e.store.updateAllSelected();
    };
    J(l, (b) => {
      e.column && e.upDataColumn("filterOpened", b);
    }, {
      immediate: !0
    });
    const C = S(() => {
      var b, $;
      return ($ = (b = a.value) == null ? void 0 : b.popperRef) == null ? void 0 : $.contentRef;
    });
    return {
      tooltipVisible: l,
      multiple: f,
      filteredValue: u,
      filterValue: i,
      filters: s,
      handleConfirm: g,
      handleReset: y,
      handleSelect: h,
      isActive: d,
      t: n,
      ns: o,
      showFilterPanel: m,
      hideFilterPanel: p,
      popperPaneRef: C,
      tooltip: a
    };
  }
}), YS = { key: 0 }, XS = ["disabled"], ZS = ["label", "onClick"];
function JS(e, t, n, o, r, l) {
  const a = Le("el-checkbox"), s = Le("el-checkbox-group"), i = Le("el-scrollbar"), u = Le("arrow-up"), f = Le("arrow-down"), d = Le("el-icon"), v = Le("el-tooltip"), m = Ol("click-outside");
  return T(), W(v, {
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
      e.multiple ? (T(), L("div", YS, [
        R("div", {
          class: P(e.ns.e("content"))
        }, [
          X(i, {
            "wrap-class": e.ns.e("wrap")
          }, {
            default: D(() => [
              X(s, {
                modelValue: e.filteredValue,
                "onUpdate:modelValue": t[0] || (t[0] = (p) => e.filteredValue = p),
                class: P(e.ns.e("checkbox-group"))
              }, {
                default: D(() => [
                  (T(!0), L(ze, null, Kt(e.filters, (p) => (T(), W(a, {
                    key: p.value,
                    label: p.value
                  }, {
                    default: D(() => [
                      jt(me(p.text), 1)
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
        R("div", {
          class: P(e.ns.e("bottom"))
        }, [
          R("button", {
            class: P({ [e.ns.is("disabled")]: e.filteredValue.length === 0 }),
            disabled: e.filteredValue.length === 0,
            type: "button",
            onClick: t[1] || (t[1] = (...p) => e.handleConfirm && e.handleConfirm(...p))
          }, me(e.t("el.table.confirmFilter")), 11, XS),
          R("button", {
            type: "button",
            onClick: t[2] || (t[2] = (...p) => e.handleReset && e.handleReset(...p))
          }, me(e.t("el.table.resetFilter")), 1)
        ], 2)
      ])) : (T(), L("ul", {
        key: 1,
        class: P(e.ns.e("list"))
      }, [
        R("li", {
          class: P([
            e.ns.e("list-item"),
            {
              [e.ns.is("active")]: e.filterValue === void 0 || e.filterValue === null
            }
          ]),
          onClick: t[3] || (t[3] = (p) => e.handleSelect(null))
        }, me(e.t("el.table.clearFilter")), 3),
        (T(!0), L(ze, null, Kt(e.filters, (p) => (T(), L("li", {
          key: p.value,
          class: P([e.ns.e("list-item"), e.ns.is("active", e.isActive(p))]),
          label: p.value,
          onClick: (g) => e.handleSelect(p.value)
        }, me(p.text), 11, ZS))), 128))
      ], 2))
    ]),
    default: D(() => [
      Re((T(), L("span", {
        class: P([
          `${e.ns.namespace.value}-table__column-filter-trigger`,
          `${e.ns.namespace.value}-none-outline`
        ]),
        onClick: t[4] || (t[4] = (...p) => e.showFilterPanel && e.showFilterPanel(...p))
      }, [
        X(d, null, {
          default: D(() => [
            e.column.filterOpened ? (T(), W(u, { key: 0 })) : (T(), W(f, { key: 1 }))
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
var QS = /* @__PURE__ */ ce(GS, [["render", JS], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/filter-panel.vue"]]);
function uc(e) {
  const t = $e();
  Tl(() => {
    n.value.addObserver(t);
  }), Ie(() => {
    o(n.value), r(n.value);
  }), Ys(() => {
    o(n.value), r(n.value);
  }), yr(() => {
    n.value.removeObserver(t);
  });
  const n = S(() => {
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
const tn = Symbol("ElTable");
function e_(e, t) {
  const n = $e(), o = he(tn), r = (g) => {
    g.stopPropagation();
  }, l = (g, y) => {
    !y.filters && y.sortable ? p(g, y, !1) : y.filterable && !y.sortable && r(g), o == null || o.emit("header-click", y, g);
  }, a = (g, y) => {
    o == null || o.emit("header-contextmenu", y, g);
  }, s = k(null), i = k(!1), u = k({}), f = (g, y) => {
    if (ke && !(y.children && y.children.length > 0) && s.value && e.border) {
      i.value = !0;
      const h = o;
      t("set-drag-visible", !0);
      const C = (h == null ? void 0 : h.vnode.el).getBoundingClientRect().left, b = n.vnode.el.querySelector(`th.${y.id}`), $ = b.getBoundingClientRect(), O = $.left - C + 30;
      xo(b, "noclick"), u.value = {
        startMouseLeft: g.clientX,
        startLeft: $.right - C,
        startColumnLeft: $.left - C,
        tableLeft: C
      };
      const _ = h == null ? void 0 : h.refs.resizeProxy;
      _.style.left = `${u.value.startLeft}px`, document.onselectstart = function() {
        return !1;
      }, document.ondragstart = function() {
        return !1;
      };
      const E = (F) => {
        const B = F.clientX - u.value.startMouseLeft, M = u.value.startLeft + B;
        _.style.left = `${Math.max(O, M)}px`;
      }, A = () => {
        if (i.value) {
          const { startColumnLeft: F, startLeft: B } = u.value, G = Number.parseInt(_.style.left, 10) - F;
          y.width = y.realWidth = G, h == null || h.emit("header-dragend", y.width, B - F, y, g), requestAnimationFrame(() => {
            e.store.scheduleLayout(!1, !0);
          }), document.body.style.cursor = "", i.value = !1, s.value = null, u.value = {}, t("set-drag-visible", !1);
        }
        document.removeEventListener("mousemove", E), document.removeEventListener("mouseup", A), document.onselectstart = null, document.ondragstart = null, setTimeout(() => {
          Cn(b, "noclick");
        }, 0);
      };
      document.addEventListener("mousemove", E), document.addEventListener("mouseup", A);
    }
  }, d = (g, y) => {
    if (y.children && y.children.length > 0)
      return;
    const h = g.target;
    if (!wn(h))
      return;
    const w = h == null ? void 0 : h.closest("th");
    if (!(!y || !y.resizable) && !i.value && e.border) {
      const C = w.getBoundingClientRect(), b = document.body.style;
      C.width > 12 && C.right - g.pageX < 8 ? (b.cursor = "col-resize", Xn(w, "is-sortable") && (w.style.cursor = "col-resize"), s.value = y) : i.value || (b.cursor = "", Xn(w, "is-sortable") && (w.style.cursor = "pointer"), s.value = null);
    }
  }, v = () => {
    ke && (document.body.style.cursor = "");
  }, m = ({ order: g, sortOrders: y }) => {
    if (g === "")
      return y[0];
    const h = y.indexOf(g || null);
    return y[h > y.length - 2 ? 0 : h + 1];
  }, p = (g, y, h) => {
    var w;
    g.stopPropagation();
    const C = y.order === h ? null : h || m(y), b = (w = g.target) == null ? void 0 : w.closest("th");
    if (b && Xn(b, "noclick")) {
      Cn(b, "noclick");
      return;
    }
    if (!y.sortable)
      return;
    const $ = e.store.states;
    let O = $.sortProp.value, _;
    const E = $.sortingColumn.value;
    (E !== y || E === y && E.order === null) && (E && (E.order = null), $.sortingColumn.value = y, O = y.property), C ? _ = y.order = C : _ = y.order = null, $.sortProp.value = O, $.sortOrder.value = _, o == null || o.store.commit("changeSortCondition");
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
function t_(e) {
  const t = he(tn), n = oe("table");
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
      const m = ca(i, f.fixed, e.store, u);
      return io(m, "left"), io(m, "right"), Object.assign({}, v, m);
    },
    getHeaderCellClass: (s, i, u, f) => {
      const d = ua(n.b(), i, f.fixed, e.store, u), v = [
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
const cc = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children ? (t.push(n), t.push.apply(t, cc(n.children))) : t.push(n);
  }), t;
}, n_ = (e) => {
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
  return cc(e).forEach((l) => {
    l.children ? (l.rowSpan = 1, l.children.forEach((a) => a.isSubColumn = !0)) : l.rowSpan = t - l.level + 1, o[l.level - 1].push(l);
  }), o;
};
function o_(e) {
  const t = he(tn), n = S(() => n_(e.store.states.originColumns.value));
  return {
    isGroup: S(() => {
      const l = n.value.length > 1;
      return l && t && (t.state.isGroup.value = !0), l;
    }),
    toggleAllSelection: (l) => {
      l.stopPropagation(), t == null || t.store.commit("toggleAllSelection");
    },
    columnRows: n
  };
}
var r_ = H({
  name: "ElTableHeader",
  components: {
    ElCheckbox: so
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
    const n = $e(), o = he(tn), r = oe("table"), l = k({}), { onColumnsChange: a, onScrollableChange: s } = uc(o);
    Ie(async () => {
      await be(), await be();
      const { prop: O, order: _ } = e.defaultSort;
      o == null || o.store.commit("sort", { prop: O, order: _, init: !0 });
    });
    const {
      handleHeaderClick: i,
      handleHeaderContextMenu: u,
      handleMouseDown: f,
      handleMouseMove: d,
      handleMouseOut: v,
      handleSortClick: m,
      handleFilterClick: p
    } = e_(e, t), {
      getHeaderRowStyle: g,
      getHeaderRowClass: y,
      getHeaderCellStyle: h,
      getHeaderCellClass: w
    } = t_(e), { isGroup: C, toggleAllSelection: b, columnRows: $ } = o_(e);
    return n.state = {
      onColumnsChange: a,
      onScrollableChange: s
    }, n.filterPanels = l, {
      ns: r,
      filterPanels: l,
      onColumnsChange: a,
      onScrollableChange: s,
      columnRows: $,
      getHeaderRowClass: y,
      getHeaderRowStyle: g,
      getHeaderCellClass: w,
      getHeaderCellStyle: h,
      handleHeaderClick: i,
      handleHeaderContextMenu: u,
      handleMouseDown: f,
      handleMouseMove: d,
      handleMouseOut: v,
      handleSortClick: m,
      handleFilterClick: p,
      isGroup: C,
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
    let g = 1;
    return ae("thead", {
      class: { [e.is("group")]: t }
    }, n.map((y, h) => ae("tr", {
      class: l(h),
      key: h,
      style: a(h)
    }, y.map((w, C) => (w.rowSpan > g && (g = w.rowSpan), ae("th", {
      class: r(h, C, y, w),
      colspan: w.colSpan,
      key: `${w.id}-thead`,
      rowspan: w.rowSpan,
      style: o(h, C, y, w),
      onClick: (b) => s(b, w),
      onContextmenu: (b) => i(b, w),
      onMousedown: (b) => u(b, w),
      onMousemove: (b) => f(b, w),
      onMouseout: v
    }, [
      ae("div", {
        class: [
          "cell",
          w.filteredValue && w.filteredValue.length > 0 ? "highlight" : ""
        ]
      }, [
        w.renderHeader ? w.renderHeader({
          column: w,
          $index: C,
          store: m,
          _self: p
        }) : w.label,
        w.sortable && ae("span", {
          onClick: (b) => d(b, w),
          class: "caret-wrapper"
        }, [
          ae("i", {
            onClick: (b) => d(b, w, "ascending"),
            class: "sort-caret ascending"
          }),
          ae("i", {
            onClick: (b) => d(b, w, "descending"),
            class: "sort-caret descending"
          })
        ]),
        w.filterable && ae(QS, {
          store: m,
          placement: w.filterPlacement || "bottom-start",
          column: w,
          upDataColumn: (b, $) => {
            w[b] = $;
          }
        })
      ])
    ]))))));
  }
});
function l_(e) {
  const t = he(tn), n = k(""), o = k(ae("div")), { nextZIndex: r } = Lr(), l = (p, g, y) => {
    var h;
    const w = t, C = Zr(p);
    let b;
    const $ = (h = w == null ? void 0 : w.vnode.el) == null ? void 0 : h.dataset.prefix;
    C && (b = Hs({
      columns: e.store.states.columns.value
    }, C, $), b && (w == null || w.emit(`cell-${y}`, g, b, C, p))), w == null || w.emit(`row-${y}`, g, b, p);
  }, a = (p, g) => {
    l(p, g, "dblclick");
  }, s = (p, g) => {
    e.store.commit("setCurrentRow", g), l(p, g, "click");
  }, i = (p, g) => {
    l(p, g, "contextmenu");
  }, u = Qn((p) => {
    e.store.commit("setHoverRow", p);
  }, 30), f = Qn(() => {
    e.store.commit("setHoverRow", null);
  }, 30), d = (p) => {
    const g = window.getComputedStyle(p, null), y = Number.parseInt(g.paddingLeft, 10) || 0, h = Number.parseInt(g.paddingRight, 10) || 0, w = Number.parseInt(g.paddingTop, 10) || 0, C = Number.parseInt(g.paddingBottom, 10) || 0;
    return {
      left: y,
      right: h,
      top: w,
      bottom: C
    };
  };
  return {
    handleDoubleClick: a,
    handleClick: s,
    handleContextMenu: i,
    handleMouseEnter: u,
    handleMouseLeave: f,
    handleCellMouseEnter: (p, g, y) => {
      var h;
      const w = t, C = Zr(p), b = (h = w == null ? void 0 : w.vnode.el) == null ? void 0 : h.dataset.prefix;
      if (C) {
        const K = Hs({
          columns: e.store.states.columns.value
        }, C, b), ie = w.hoverState = { cell: C, column: K, row: g };
        w == null || w.emit("cell-mouse-enter", ie.row, ie.column, ie.cell, p);
      }
      if (!y)
        return;
      const $ = p.target.querySelector(".cell");
      if (!(Xn($, `${b}-tooltip`) && $.childNodes.length))
        return;
      const O = document.createRange();
      O.setStart($, 0), O.setEnd($, $.childNodes.length);
      let _ = O.getBoundingClientRect().width, E = O.getBoundingClientRect().height;
      _ - Math.floor(_) < 1e-3 && (_ = Math.floor(_)), E - Math.floor(E) < 1e-3 && (E = Math.floor(E));
      const { top: B, left: M, right: G, bottom: ne } = d($), Z = M + G, ee = B + ne;
      (_ + Z > $.offsetWidth || E + ee > $.offsetHeight || $.scrollWidth > $.offsetWidth) && BS(t == null ? void 0 : t.refs.tableWrapper, C, C.innerText || C.textContent, r, y);
    },
    handleCellMouseLeave: (p) => {
      if (!Zr(p))
        return;
      const y = t == null ? void 0 : t.hoverState;
      t == null || t.emit("cell-mouse-leave", y == null ? void 0 : y.row, y == null ? void 0 : y.column, y == null ? void 0 : y.cell, p);
    },
    tooltipContent: n,
    tooltipTrigger: o
  };
}
function a_(e) {
  const t = he(tn), n = oe("table");
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
      const g = ca(f, e == null ? void 0 : e.fixed, e.store);
      return io(g, "left"), io(g, "right"), Object.assign({}, p, g);
    },
    getCellClass: (u, f, d, v, m) => {
      const p = ua(n.b(), f, e == null ? void 0 : e.fixed, e.store, void 0, m), g = [v.id, v.align, v.className, ...p], y = t == null ? void 0 : t.props.cellClassName;
      return typeof y == "string" ? g.push(y) : typeof y == "function" && g.push(y.call(null, {
        rowIndex: u,
        columnIndex: f,
        row: d,
        column: v
      })), g.push(n.e("cell")), g.filter((h) => !!h).join(" ");
    },
    getSpan: (u, f, d, v) => {
      let m = 1, p = 1;
      const g = t == null ? void 0 : t.props.spanMethod;
      if (typeof g == "function") {
        const y = g({
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
function s_(e) {
  const t = he(tn), n = oe("table"), {
    handleDoubleClick: o,
    handleClick: r,
    handleContextMenu: l,
    handleMouseEnter: a,
    handleMouseLeave: s,
    handleCellMouseEnter: i,
    handleCellMouseLeave: u,
    tooltipContent: f,
    tooltipTrigger: d
  } = l_(e), {
    getRowStyle: v,
    getRowClass: m,
    getCellStyle: p,
    getCellClass: g,
    getSpan: y,
    getColspanRealWidth: h
  } = a_(e), w = S(() => e.store.states.columns.value.findIndex(({ type: _ }) => _ === "default")), C = (_, E) => {
    const A = t.props.rowKey;
    return A ? Ze(_, A) : E;
  }, b = (_, E, A, F = !1) => {
    const { tooltipEffect: B, tooltipOptions: M, store: G } = e, { indent: ne, columns: Z } = G.states, ee = m(_, E);
    let K = !0;
    return A && (ee.push(n.em("row", `level-${A.level}`)), K = A.display), ae("tr", {
      style: [K ? null : {
        display: "none"
      }, v(_, E)],
      class: ee,
      key: C(_, E),
      onDblclick: (N) => o(N, _),
      onClick: (N) => r(N, _),
      onContextmenu: (N) => l(N, _),
      onMouseenter: () => a(E),
      onMouseleave: s
    }, Z.value.map((N, j) => {
      const { rowspan: re, colspan: se } = y(_, N, E, j);
      if (!re || !se)
        return null;
      const ue = Object.assign({}, N);
      ue.realWidth = h(Z.value, se, j);
      const _e = {
        store: e.store,
        _self: e.context || t,
        column: ue,
        row: _,
        $index: E,
        cellIndex: j,
        expanded: F
      };
      j === w.value && A && (_e.treeNode = {
        indent: A.level * ne.value,
        level: A.level
      }, typeof A.expanded == "boolean" && (_e.treeNode.expanded = A.expanded, "loading" in A && (_e.treeNode.loading = A.loading), "noLazyChildren" in A && (_e.treeNode.noLazyChildren = A.noLazyChildren)));
      const Te = `${E},${j}`, we = ue.columnKey || ue.rawColumnKey || "", Me = $(j, N, _e), Ee = N.showOverflowTooltip && Pi({
        effect: B
      }, M, N.showOverflowTooltip);
      return ae("td", {
        style: p(E, j, _, N),
        class: g(E, j, _, N, se - 1),
        key: `${we}${Te}`,
        rowspan: re,
        colspan: se,
        onMouseenter: (He) => i(He, _, Ee),
        onMouseleave: u
      }, [Me]);
    }));
  }, $ = (_, E, A) => E.renderCell(A);
  return {
    wrappedRowRender: (_, E) => {
      const A = e.store, { isRowExpanded: F, assertRowKey: B } = A, { treeData: M, lazyTreeNodeMap: G, childrenColumnName: ne, rowKey: Z } = A.states, ee = A.states.columns.value;
      if (ee.some(({ type: ie }) => ie === "expand")) {
        const ie = F(_), N = b(_, E, void 0, ie), j = t.renderExpanded;
        return ie ? j ? [
          [
            N,
            ae("tr", {
              key: `expanded-row__${N.key}`
            }, [
              ae("td", {
                colspan: ee.length,
                class: `${n.e("cell")} ${n.e("expanded-cell")}`
              }, [j({ row: _, $index: E, store: A, expanded: ie })])
            ])
          ]
        ] : (console.error("[Element Error]renderExpanded is required."), N) : [[N]];
      } else if (Object.keys(M.value).length) {
        B();
        const ie = Ze(_, Z.value);
        let N = M.value[ie], j = null;
        N && (j = {
          expanded: N.expanded,
          level: N.level,
          display: !0
        }, typeof N.lazy == "boolean" && (typeof N.loaded == "boolean" && N.loaded && (j.noLazyChildren = !(N.children && N.children.length)), j.loading = N.loading));
        const re = [b(_, E, j)];
        if (N) {
          let se = 0;
          const ue = (Te, we) => {
            Te && Te.length && we && Te.forEach((Me) => {
              const Ee = {
                display: we.display && we.expanded,
                level: we.level + 1,
                expanded: !1,
                noLazyChildren: !1,
                loading: !1
              }, He = Ze(Me, Z.value);
              if (He == null)
                throw new Error("For nested data item, row-key is required.");
              if (N = { ...M.value[He] }, N && (Ee.expanded = N.expanded, N.level = N.level || Ee.level, N.display = !!(N.expanded && Ee.display), typeof N.lazy == "boolean" && (typeof N.loaded == "boolean" && N.loaded && (Ee.noLazyChildren = !(N.children && N.children.length)), Ee.loading = N.loading)), se++, re.push(b(Me, E + se, Ee)), N) {
                const Pe = G.value[He] || Me[ne.value];
                ue(Pe, N);
              }
            });
          };
          N.display = !0;
          const _e = G.value[ie] || _[ne.value];
          ue(_e, N);
        }
        return re;
      } else
        return b(_, E, void 0);
    },
    tooltipContent: f,
    tooltipTrigger: d
  };
}
const i_ = {
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
var u_ = H({
  name: "ElTableBody",
  props: i_,
  setup(e) {
    const t = $e(), n = he(tn), o = oe("table"), { wrappedRowRender: r, tooltipContent: l, tooltipTrigger: a } = s_(e), { onColumnsChange: s, onScrollableChange: i } = uc(n);
    return J(e.store.states.hoverRow, (u, f) => {
      !e.store.states.isComplex.value || !ke || s0(() => {
        const d = t == null ? void 0 : t.vnode.el, v = Array.from((d == null ? void 0 : d.children) || []).filter((g) => g == null ? void 0 : g.classList.contains(`${o.e("row")}`)), m = v[f], p = v[u];
        m && Cn(m, "hover-row"), p && xo(p, "hover-row");
      });
    }), yr(() => {
      var u;
      (u = on) == null || u();
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
    return ae("tbody", { tabIndex: -1 }, [
      n.reduce((o, r) => o.concat(e(r, o.length)), [])
    ]);
  }
});
function c_() {
  const e = he(tn), t = e == null ? void 0 : e.store, n = S(() => t.states.fixedLeafColumnsLength.value), o = S(() => t.states.rightFixedColumns.value.length), r = S(() => t.states.columns.value.length), l = S(() => t.states.fixedColumns.value.length), a = S(() => t.states.rightFixedColumns.value.length);
  return {
    leftFixedLeafCount: n,
    rightFixedLeafCount: o,
    columnsCount: r,
    leftFixedCount: l,
    rightFixedCount: a,
    columns: t.states.columns
  };
}
function d_(e) {
  const { columns: t } = c_(), n = oe("table");
  return {
    getCellClasses: (l, a) => {
      const s = l[a], i = [
        n.e("cell"),
        s.id,
        s.align,
        s.labelClassName,
        ...ua(n.b(), a, s.fixed, e.store)
      ];
      return s.className && i.push(s.className), s.children || i.push(n.is("leaf")), i;
    },
    getCellStyles: (l, a) => {
      const s = ca(a, l.fixed, e.store);
      return io(s, "left"), io(s, "right"), s;
    },
    columns: t
  };
}
var f_ = H({
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
    const { getCellClasses: t, getCellStyles: n, columns: o } = d_(e);
    return {
      ns: oe("table"),
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
        const g = Number(p);
        return Number.isNaN(+g) ? m : Number.parseFloat((m + p).toFixed(Math.min(v, 20)));
      }, 0);
    }), ae(ae("tfoot", [
      ae("tr", {}, [
        ...e.map((s, i) => ae("td", {
          key: i,
          colspan: s.colSpan,
          rowspan: s.rowSpan,
          class: n(e, i),
          style: t(s, i)
        }, [
          ae("div", {
            class: ["cell", s.labelClassName]
          }, [a[i]])
        ]))
      ])
    ]));
  }
});
function p_(e) {
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
function v_(e, t, n, o) {
  const r = k(!1), l = k(null), a = k(!1), s = (N) => {
    a.value = N;
  }, i = k({
    width: null,
    height: null,
    headerHeight: null
  }), u = k(!1), f = {
    display: "inline-block",
    verticalAlign: "middle"
  }, d = k(), v = k(0), m = k(0), p = k(0), g = k(0), y = k(0);
  Mn(() => {
    t.setHeight(e.height);
  }), Mn(() => {
    t.setMaxHeight(e.maxHeight);
  }), J(() => [e.currentRowKey, n.states.rowKey], ([N, j]) => {
    !c(j) || !c(N) || n.setCurrentRowKey(`${N}`);
  }, {
    immediate: !0
  }), J(() => e.data, (N) => {
    o.store.commit("setData", N);
  }, {
    immediate: !0,
    deep: !0
  }), Mn(() => {
    e.expandRowKeys && n.setExpandRowKeysAdapter(e.expandRowKeys);
  });
  const h = () => {
    o.store.commit("setHoverRow", null), o.hoverState && (o.hoverState = null);
  }, w = (N, j) => {
    const { pixelX: re, pixelY: se } = j;
    Math.abs(re) >= Math.abs(se) && (o.refs.bodyWrapper.scrollLeft += j.pixelX / 5);
  }, C = S(() => e.height || e.maxHeight || n.states.fixedColumns.value.length > 0 || n.states.rightFixedColumns.value.length > 0), b = S(() => ({
    width: t.bodyWidth.value ? `${t.bodyWidth.value}px` : ""
  })), $ = () => {
    C.value && t.updateElsHeight(), t.updateColumnsWidth(), requestAnimationFrame(A);
  };
  Ie(async () => {
    await be(), n.updateColumns(), F(), requestAnimationFrame($);
    const N = o.vnode.el, j = o.refs.headerWrapper;
    e.flexible && N && N.parentElement && (N.parentElement.style.minWidth = "0"), i.value = {
      width: d.value = N.offsetWidth,
      height: N.offsetHeight,
      headerHeight: e.showHeader && j ? j.offsetHeight : null
    }, n.states.columns.value.forEach((re) => {
      re.filteredValue && re.filteredValue.length && o.store.commit("filterChange", {
        column: re,
        values: re.filteredValue,
        silent: !0
      });
    }), o.$ready = !0;
  });
  const O = (N, j) => {
    if (!N)
      return;
    const re = Array.from(N.classList).filter((se) => !se.startsWith("is-scrolling-"));
    re.push(t.scrollX.value ? j : "is-scrolling-none"), N.className = re.join(" ");
  }, _ = (N) => {
    const { tableWrapper: j } = o.refs;
    O(j, N);
  }, E = (N) => {
    const { tableWrapper: j } = o.refs;
    return !!(j && j.classList.contains(N));
  }, A = function() {
    if (!o.refs.scrollBarRef)
      return;
    if (!t.scrollX.value) {
      const we = "is-scrolling-none";
      E(we) || _(we);
      return;
    }
    const N = o.refs.scrollBarRef.wrapRef;
    if (!N)
      return;
    const { scrollLeft: j, offsetWidth: re, scrollWidth: se } = N, { headerWrapper: ue, footerWrapper: _e } = o.refs;
    ue && (ue.scrollLeft = j), _e && (_e.scrollLeft = j);
    const Te = se - re - 1;
    j >= Te ? _("is-scrolling-right") : _(j === 0 ? "is-scrolling-left" : "is-scrolling-middle");
  }, F = () => {
    o.refs.scrollBarRef && (o.refs.scrollBarRef.wrapRef && Yt(o.refs.scrollBarRef.wrapRef, "scroll", A, {
      passive: !0
    }), e.fit ? Jn(o.vnode.el, B) : Yt(window, "resize", B), Jn(o.refs.bodyWrapper, () => {
      var N, j;
      B(), (j = (N = o.refs) == null ? void 0 : N.scrollBarRef) == null || j.update();
    }));
  }, B = () => {
    var N, j, re, se;
    const ue = o.vnode.el;
    if (!o.$ready || !ue)
      return;
    let _e = !1;
    const {
      width: Te,
      height: we,
      headerHeight: Me
    } = i.value, Ee = d.value = ue.offsetWidth;
    Te !== Ee && (_e = !0);
    const He = ue.offsetHeight;
    (e.height || C.value) && we !== He && (_e = !0);
    const Pe = e.tableLayout === "fixed" ? o.refs.headerWrapper : (N = o.refs.tableHeaderRef) == null ? void 0 : N.$el;
    e.showHeader && (Pe == null ? void 0 : Pe.offsetHeight) !== Me && (_e = !0), v.value = ((j = o.refs.tableWrapper) == null ? void 0 : j.scrollHeight) || 0, p.value = (Pe == null ? void 0 : Pe.scrollHeight) || 0, g.value = ((re = o.refs.footerWrapper) == null ? void 0 : re.offsetHeight) || 0, y.value = ((se = o.refs.appendWrapper) == null ? void 0 : se.offsetHeight) || 0, m.value = v.value - p.value - g.value - y.value, _e && (i.value = {
      width: Ee,
      height: He,
      headerHeight: e.showHeader && (Pe == null ? void 0 : Pe.offsetHeight) || 0
    }, $());
  }, M = un(), G = S(() => {
    const { bodyWidth: N, scrollY: j, gutterWidth: re } = t;
    return N.value ? `${N.value - (j.value ? re : 0)}px` : "";
  }), ne = S(() => e.maxHeight ? "fixed" : e.tableLayout), Z = S(() => {
    if (e.data && e.data.length)
      return null;
    let N = "100%";
    e.height && m.value && (N = `${m.value}px`);
    const j = d.value;
    return {
      width: j ? `${j}px` : "",
      height: N
    };
  }), ee = S(() => e.height ? {
    height: Number.isNaN(Number(e.height)) ? e.height : `${e.height}px`
  } : e.maxHeight ? {
    maxHeight: Number.isNaN(Number(e.maxHeight)) ? e.maxHeight : `${e.maxHeight}px`
  } : {}), K = S(() => e.height ? {
    height: "100%"
  } : e.maxHeight ? Number.isNaN(Number(e.maxHeight)) ? {
    maxHeight: `calc(${e.maxHeight} - ${p.value + g.value}px)`
  } : {
    maxHeight: `${e.maxHeight - p.value - g.value}px`
  } : {});
  return {
    isHidden: r,
    renderExpanded: l,
    setDragVisible: s,
    isGroup: u,
    handleMouseLeave: h,
    handleHeaderFooterMousewheel: w,
    tableSize: M,
    emptyBlockStyle: Z,
    handleFixedMousewheel: (N, j) => {
      const re = o.refs.bodyWrapper;
      if (Math.abs(j.spinY) > 0) {
        const se = re.scrollTop;
        j.pixelY < 0 && se !== 0 && N.preventDefault(), j.pixelY > 0 && re.scrollHeight - re.clientHeight > se && N.preventDefault(), re.scrollTop += Math.ceil(j.pixelY / 5);
      } else
        re.scrollLeft += Math.ceil(j.pixelX / 5);
    },
    resizeProxyVisible: a,
    bodyWidth: G,
    resizeState: i,
    doLayout: $,
    tableBodyStyles: b,
    tableLayout: ne,
    scrollbarViewStyle: f,
    tableInnerStyle: ee,
    scrollbarStyle: K
  };
}
function h_(e) {
  const t = k(), n = () => {
    const r = e.vnode.el.querySelector(".hidden-columns"), l = { childList: !0, subtree: !0 }, a = e.store.states.updateOrderFns;
    t.value = new MutationObserver(() => {
      a.forEach((s) => s());
    }), t.value.observe(r, l);
  };
  Ie(() => {
    n();
  }), yr(() => {
    var o;
    (o = t.value) == null || o.disconnect();
  });
}
var g_ = {
  data: {
    type: Array,
    default: () => []
  },
  size: Kn,
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
function dc(e) {
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
  return ae("colgroup", {}, n.map((r) => ae("col", o(r))));
}
dc.props = ["columns", "tableLayout"];
const m_ = () => {
  const e = k(), t = (l, a) => {
    const s = e.value;
    s && s.scrollTo(l, a);
  }, n = (l, a) => {
    const s = e.value;
    s && xe(a) && ["Top", "Left"].includes(l) && s[`setScroll${l}`](a);
  };
  return {
    scrollBarRef: e,
    scrollTo: t,
    setScrollTop: (l) => n("Top", l),
    setScrollLeft: (l) => n("Left", l)
  };
};
let b_ = 1;
const y_ = H({
  name: "ElTable",
  directives: {
    Mousewheel: X1
  },
  components: {
    TableHeader: r_,
    TableBody: u_,
    TableFooter: f_,
    ElScrollbar: ea,
    hColgroup: dc
  },
  props: g_,
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
    const { t } = ft(), n = oe("table"), o = $e();
    Xe(tn, o);
    const r = KS(o, e);
    o.store = r;
    const l = new US({
      store: o.store,
      table: o,
      fit: e.fit,
      showHeader: e.showHeader
    });
    o.layout = l;
    const a = S(() => (r.states.data.value || []).length === 0), {
      setCurrentRow: s,
      getSelectionRows: i,
      toggleRowSelection: u,
      clearSelection: f,
      clearFilter: d,
      toggleAllSelection: v,
      toggleRowExpansion: m,
      clearSort: p,
      sort: g
    } = p_(r), {
      isHidden: y,
      renderExpanded: h,
      setDragVisible: w,
      isGroup: C,
      handleMouseLeave: b,
      handleHeaderFooterMousewheel: $,
      tableSize: O,
      emptyBlockStyle: _,
      handleFixedMousewheel: E,
      resizeProxyVisible: A,
      bodyWidth: F,
      resizeState: B,
      doLayout: M,
      tableBodyStyles: G,
      tableLayout: ne,
      scrollbarViewStyle: Z,
      tableInnerStyle: ee,
      scrollbarStyle: K
    } = v_(e, l, r, o), { scrollBarRef: ie, scrollTo: N, setScrollLeft: j, setScrollTop: re } = m_(), se = Qn(M, 50), ue = `${n.namespace.value}-table_${b_++}`;
    o.tableId = ue, o.state = {
      isGroup: C,
      resizeState: B,
      doLayout: M,
      debouncedUpdateLayout: se
    };
    const _e = S(() => e.sumText || t("el.table.sumText")), Te = S(() => e.emptyText || t("el.table.emptyText"));
    return h_(o), {
      ns: n,
      layout: l,
      store: r,
      handleHeaderFooterMousewheel: $,
      handleMouseLeave: b,
      tableId: ue,
      tableSize: O,
      isHidden: y,
      isEmpty: a,
      renderExpanded: h,
      resizeProxyVisible: A,
      resizeState: B,
      isGroup: C,
      bodyWidth: F,
      tableBodyStyles: G,
      emptyBlockStyle: _,
      debouncedUpdateLayout: se,
      handleFixedMousewheel: E,
      setCurrentRow: s,
      getSelectionRows: i,
      toggleRowSelection: u,
      clearSelection: f,
      clearFilter: d,
      toggleAllSelection: v,
      toggleRowExpansion: m,
      clearSort: p,
      doLayout: M,
      sort: g,
      t,
      setDragVisible: w,
      context: o,
      computedSumText: _e,
      computedEmptyText: Te,
      tableLayout: ne,
      scrollbarViewStyle: Z,
      tableInnerStyle: ee,
      scrollbarStyle: K,
      scrollBarRef: ie,
      scrollTo: N,
      setScrollLeft: j,
      setScrollTop: re
    };
  }
}), w_ = ["data-prefix"], C_ = {
  ref: "hiddenColumns",
  class: "hidden-columns"
};
function S_(e, t, n, o, r, l) {
  const a = Le("hColgroup"), s = Le("table-header"), i = Le("table-body"), u = Le("table-footer"), f = Le("el-scrollbar"), d = Ol("mousewheel");
  return T(), L("div", {
    ref: "tableWrapper",
    class: P([
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
    style: Oe(e.style),
    "data-prefix": e.ns.namespace.value,
    onMouseleave: t[0] || (t[0] = (...v) => e.handleMouseLeave && e.handleMouseLeave(...v))
  }, [
    R("div", {
      class: P(e.ns.e("inner-wrapper")),
      style: Oe(e.tableInnerStyle)
    }, [
      R("div", C_, [
        te(e.$slots, "default")
      ], 512),
      e.showHeader && e.tableLayout === "fixed" ? Re((T(), L("div", {
        key: 0,
        ref: "headerWrapper",
        class: P(e.ns.e("header-wrapper"))
      }, [
        R("table", {
          ref: "tableHeader",
          class: P(e.ns.e("header")),
          style: Oe(e.tableBodyStyles),
          border: "0",
          cellpadding: "0",
          cellspacing: "0"
        }, [
          X(a, {
            columns: e.store.states.columns.value,
            "table-layout": e.tableLayout
          }, null, 8, ["columns", "table-layout"]),
          X(s, {
            ref: "tableHeaderRef",
            border: e.border,
            "default-sort": e.defaultSort,
            store: e.store,
            onSetDragVisible: e.setDragVisible
          }, null, 8, ["border", "default-sort", "store", "onSetDragVisible"])
        ], 6)
      ], 2)), [
        [d, e.handleHeaderFooterMousewheel]
      ]) : V("v-if", !0),
      R("div", {
        ref: "bodyWrapper",
        class: P(e.ns.e("body-wrapper"))
      }, [
        X(f, {
          ref: "scrollBarRef",
          "view-style": e.scrollbarViewStyle,
          "wrap-style": e.scrollbarStyle,
          always: e.scrollbarAlwaysOn
        }, {
          default: D(() => [
            R("table", {
              ref: "tableBody",
              class: P(e.ns.e("body")),
              cellspacing: "0",
              cellpadding: "0",
              border: "0",
              style: Oe({
                width: e.bodyWidth,
                tableLayout: e.tableLayout
              })
            }, [
              X(a, {
                columns: e.store.states.columns.value,
                "table-layout": e.tableLayout
              }, null, 8, ["columns", "table-layout"]),
              e.showHeader && e.tableLayout === "auto" ? (T(), W(s, {
                key: 0,
                ref: "tableHeaderRef",
                class: P(e.ns.e("body-header")),
                border: e.border,
                "default-sort": e.defaultSort,
                store: e.store,
                onSetDragVisible: e.setDragVisible
              }, null, 8, ["class", "border", "default-sort", "store", "onSetDragVisible"])) : V("v-if", !0),
              X(i, {
                context: e.context,
                highlight: e.highlightCurrentRow,
                "row-class-name": e.rowClassName,
                "tooltip-effect": e.tooltipEffect,
                "tooltip-options": e.tooltipOptions,
                "row-style": e.rowStyle,
                store: e.store,
                stripe: e.stripe
              }, null, 8, ["context", "highlight", "row-class-name", "tooltip-effect", "tooltip-options", "row-style", "store", "stripe"]),
              e.showSummary && e.tableLayout === "auto" ? (T(), W(u, {
                key: 1,
                class: P(e.ns.e("body-footer")),
                border: e.border,
                "default-sort": e.defaultSort,
                store: e.store,
                "sum-text": e.computedSumText,
                "summary-method": e.summaryMethod
              }, null, 8, ["class", "border", "default-sort", "store", "sum-text", "summary-method"])) : V("v-if", !0)
            ], 6),
            e.isEmpty ? (T(), L("div", {
              key: 0,
              ref: "emptyBlock",
              style: Oe(e.emptyBlockStyle),
              class: P(e.ns.e("empty-block"))
            }, [
              R("span", {
                class: P(e.ns.e("empty-text"))
              }, [
                te(e.$slots, "empty", {}, () => [
                  jt(me(e.computedEmptyText), 1)
                ])
              ], 2)
            ], 6)) : V("v-if", !0),
            e.$slots.append ? (T(), L("div", {
              key: 1,
              ref: "appendWrapper",
              class: P(e.ns.e("append-wrapper"))
            }, [
              te(e.$slots, "append")
            ], 2)) : V("v-if", !0)
          ]),
          _: 3
        }, 8, ["view-style", "wrap-style", "always"])
      ], 2),
      e.showSummary && e.tableLayout === "fixed" ? Re((T(), L("div", {
        key: 1,
        ref: "footerWrapper",
        class: P(e.ns.e("footer-wrapper"))
      }, [
        R("table", {
          class: P(e.ns.e("footer")),
          cellspacing: "0",
          cellpadding: "0",
          border: "0",
          style: Oe(e.tableBodyStyles)
        }, [
          X(a, {
            columns: e.store.states.columns.value,
            "table-layout": e.tableLayout
          }, null, 8, ["columns", "table-layout"]),
          X(u, {
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
      ]) : V("v-if", !0),
      e.border || e.isGroup ? (T(), L("div", {
        key: 2,
        class: P(e.ns.e("border-left-patch"))
      }, null, 2)) : V("v-if", !0)
    ], 6),
    Re(R("div", {
      ref: "resizeProxy",
      class: P(e.ns.e("column-resize-proxy"))
    }, null, 2), [
      [Rt, e.resizeProxyVisible]
    ])
  ], 46, w_);
}
var __ = /* @__PURE__ */ ce(y_, [["render", S_], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/table.vue"]]);
const E_ = {
  selection: "table-column--selection",
  expand: "table__expand-column"
}, $_ = {
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
}, T_ = (e) => E_[e] || "", O_ = {
  selection: {
    renderHeader({ store: e, column: t }) {
      function n() {
        return e.states.data.value && e.states.data.value.length === 0;
      }
      return ae(so, {
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
      return ae(so, {
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
      return typeof o == "number" ? n = t + o : typeof o == "function" && (n = o(t)), ae("div", {}, [n]);
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
      return n && r.push(o.em("expand-icon", "expanded")), ae("div", {
        class: r,
        onClick: function(a) {
          a.stopPropagation(), t.toggleRowExpansion(e);
        }
      }, {
        default: () => [
          ae(Ne, null, {
            default: () => [ae(Dl)]
          })
        ]
      });
    },
    sortable: !1,
    resizable: !1
  }
};
function k_({
  row: e,
  column: t,
  $index: n
}) {
  var o;
  const r = t.property, l = r && Vh(e, r).value;
  return t && t.formatter ? t.formatter(e, t, l, n) : ((o = l == null ? void 0 : l.toString) == null ? void 0 : o.call(l)) || "";
}
function x_({
  row: e,
  treeNode: t,
  store: n
}, o = !1) {
  const { ns: r } = n;
  if (!t)
    return o ? [
      ae("span", {
        class: r.e("placeholder")
      })
    ] : null;
  const l = [], a = function(s) {
    s.stopPropagation(), !t.loading && n.loadOrToggle(e);
  };
  if (t.indent && l.push(ae("span", {
    class: r.e("indent"),
    style: { "padding-left": `${t.indent}px` }
  })), typeof t.expanded == "boolean" && !t.noLazyChildren) {
    const s = [
      r.e("expand-icon"),
      t.expanded ? r.em("expand-icon", "expanded") : ""
    ];
    let i = Dl;
    t.loading && (i = kr), l.push(ae("div", {
      class: s,
      onClick: a
    }, {
      default: () => [
        ae(Ne, { class: { [r.is("loading")]: t.loading } }, {
          default: () => [ae(i)]
        })
      ]
    }));
  } else
    l.push(ae("span", {
      class: r.e("placeholder")
    }));
  return l;
}
function Ws(e, t) {
  return e.reduce((n, o) => (n[o] = o, n), t);
}
function P_(e, t) {
  const n = $e();
  return {
    registerComplexWatchers: () => {
      const l = ["fixed"], a = {
        realWidth: "width",
        realMinWidth: "minWidth"
      }, s = Ws(l, a);
      Object.keys(s).forEach((i) => {
        const u = a[i];
        zn(t, u) && J(() => t[u], (f) => {
          let d = f;
          u === "width" && i === "realWidth" && (d = ia(f)), u === "minWidth" && i === "realMinWidth" && (d = rc(f)), n.columnConfig.value[u] = d, n.columnConfig.value[i] = d;
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
      }, s = Ws(l, a);
      Object.keys(s).forEach((i) => {
        const u = a[i];
        zn(t, u) && J(() => t[u], (f) => {
          n.columnConfig.value[i] = f;
        });
      });
    }
  };
}
function A_(e, t, n) {
  const o = $e(), r = k(""), l = k(!1), a = k(), s = k(), i = oe("table");
  Mn(() => {
    a.value = e.align ? `is-${e.align}` : null, a.value;
  }), Mn(() => {
    s.value = e.headerAlign ? `is-${e.headerAlign}` : a.value, s.value;
  });
  const u = S(() => {
    let b = o.vnode.vParent || o.parent;
    for (; b && !b.tableId && !b.columnId; )
      b = b.vnode.vParent || b.parent;
    return b;
  }), f = S(() => {
    const { store: b } = o.parent;
    if (!b)
      return !1;
    const { treeData: $ } = b.states, O = $.value;
    return O && Object.keys(O).length > 0;
  }), d = k(ia(e.width)), v = k(rc(e.minWidth)), m = (b) => (d.value && (b.width = d.value), v.value && (b.minWidth = v.value), !d.value && v.value && (b.width = void 0), b.minWidth || (b.minWidth = 80), b.realWidth = Number(b.width === void 0 ? b.minWidth : b.width), b), p = (b) => {
    const $ = b.type, O = O_[$] || {};
    Object.keys(O).forEach((E) => {
      const A = O[E];
      E !== "className" && A !== void 0 && (b[E] = A);
    });
    const _ = T_($);
    if (_) {
      const E = `${c(i.namespace)}-${_}`;
      b.className = b.className ? `${b.className} ${E}` : E;
    }
    return b;
  }, g = (b) => {
    Array.isArray(b) ? b.forEach((O) => $(O)) : $(b);
    function $(O) {
      var _;
      ((_ = O == null ? void 0 : O.type) == null ? void 0 : _.name) === "ElTableColumn" && (O.vParent = o);
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
      e.renderHeader ? Ve("TableColumn", "Comparing to render-header, scoped-slot header is easier to use. We recommend users to use scoped-slot header.") : b.type !== "selection" && (b.renderHeader = (O) => {
        o.columnConfig.value.label;
        const _ = t.header;
        return _ ? _(O) : b.label;
      });
      let $ = b.renderCell;
      return b.type === "expand" ? (b.renderCell = (O) => ae("div", {
        class: "cell"
      }, [$(O)]), n.value.renderExpanded = (O) => t.default ? t.default(O) : t.default) : ($ = $ || k_, b.renderCell = (O) => {
        let _ = null;
        if (t.default) {
          const G = t.default(O);
          _ = G.some((ne) => ne.type !== Zs) ? G : $(O);
        } else
          _ = $(O);
        const { columns: E } = n.value.store.states, A = E.value.findIndex((G) => G.type === "default"), F = f.value && O.cellIndex === A, B = x_(O, F), M = {
          class: "cell",
          style: {}
        };
        return b.showOverflowTooltip && (M.class = `${M.class} ${c(i.namespace)}-tooltip`, M.style = {
          width: `${(O.column.realWidth || Number(O.column.width)) - 1}px`
        }), g(_), ae("div", M, [B, _]);
      }), b;
    },
    getPropsData: (...b) => b.reduce(($, O) => (Array.isArray(O) && O.forEach((_) => {
      $[_] = e[_];
    }), $), {}),
    getColumnElIndex: (b, $) => Array.prototype.indexOf.call(b, $),
    updateColumnOrder: () => {
      n.value.store.commit("updateColumnOrder", o.columnConfig.value);
    }
  };
}
var I_ = {
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
let L_ = 1;
var fc = H({
  name: "ElTableColumn",
  components: {
    ElCheckbox: so
  },
  props: I_,
  setup(e, { slots: t }) {
    const n = $e(), o = k({}), r = S(() => {
      let C = n.parent;
      for (; C && !C.tableId; )
        C = C.parent;
      return C;
    }), { registerNormalWatchers: l, registerComplexWatchers: a } = P_(r, e), {
      columnId: s,
      isSubColumn: i,
      realHeaderAlign: u,
      columnOrTableParent: f,
      setColumnWidth: d,
      setColumnForcedProps: v,
      setColumnRenders: m,
      getPropsData: p,
      getColumnElIndex: g,
      realAlign: y,
      updateColumnOrder: h
    } = A_(e, t, r), w = f.value;
    s.value = `${w.tableId || w.columnId}_column_${L_++}`, Tl(() => {
      i.value = r.value !== w;
      const C = e.type || "default", b = e.sortable === "" ? !0 : e.sortable, $ = eo(e.showOverflowTooltip) ? w.props.showOverflowTooltip : e.showOverflowTooltip, O = {
        ...$_[C],
        id: s.value,
        type: C,
        property: e.prop || e.property,
        align: y,
        headerAlign: u,
        showOverflowTooltip: $,
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
      let B = p([
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
      B = LS(O, B), B = RS(m, d, v)(B), o.value = B, l(), a();
    }), Ie(() => {
      var C;
      const b = f.value, $ = i.value ? b.vnode.el.children : (C = b.refs.hiddenColumns) == null ? void 0 : C.children, O = () => g($ || [], n.vnode.el);
      o.value.getColumnIndex = O, O() > -1 && r.value.store.commit("insertColumn", o.value, i.value ? b.columnConfig.value : null, h);
    }), zt(() => {
      r.value.store.commit("removeColumn", o.value, i.value ? w.columnConfig.value : null, h);
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
      return ae("div", r);
    } catch {
      return ae("div", []);
    }
  }
});
const pc = tt(__, {
  TableColumn: fc
}), vc = Ft(fc);
function N_(e) {
  let t;
  const n = k(!1), o = $n({
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
      p = Number.parseInt(p) - 1, p ? v.setAttribute("loading-number", p.toString()) : (Cn(v, m.bm("parent", "relative")), v.removeAttribute("loading-number")), Cn(v, m.bm("parent", "hidden"));
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
  const u = H({
    name: "ElLoading",
    setup(v, { expose: m }) {
      const { ns: p, zIndex: g } = du("loading");
      return m({
        ns: p,
        zIndex: g
      }), () => {
        const y = o.spinner || o.svg, h = ae("svg", {
          class: "circular",
          viewBox: o.svgViewBox ? o.svgViewBox : "0 0 50 50",
          ...y ? { innerHTML: y } : {}
        }, [
          ae("circle", {
            class: "path",
            cx: "25",
            cy: "25",
            r: "20",
            fill: "none"
          })
        ]), w = o.text ? ae("p", { class: p.b("text") }, [o.text]) : void 0;
        return ae(mn, {
          name: p.b("fade"),
          onAfterLeave: i
        }, {
          default: D(() => [
            Re(X("div", {
              style: {
                backgroundColor: o.background || ""
              },
              class: [
                p.b("mask"),
                o.customClass,
                o.fullscreen ? "is-fullscreen" : ""
              ]
            }, [
              ae("div", {
                class: p.b("spinner")
              }, [h, w])
            ]), [[Rt, o.visible]])
          ])
        });
      };
    }
  }), f = Sc(u), d = f.mount(document.createElement("div"));
  return {
    ...Hn(o),
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
const R_ = function(e = {}) {
  if (!ke)
    return;
  const t = M_(e);
  if (t.fullscreen && Jo)
    return Jo;
  const n = N_({
    ...t,
    closed: () => {
      var r;
      (r = t.closed) == null || r.call(t), t.fullscreen && (Jo = void 0);
    }
  });
  B_(t, t.parent, n), Ks(t, t.parent, n), t.parent.vLoadingAddClassList = () => Ks(t, t.parent, n);
  let o = t.parent.getAttribute("loading-number");
  return o ? o = `${Number.parseInt(o) + 1}` : o = "1", t.parent.setAttribute("loading-number", o), t.parent.appendChild(n.$el), be(() => n.visible.value = t.visible), t.fullscreen && (Jo = n), n;
}, M_ = (e) => {
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
}, B_ = async (e, t, n) => {
  const { nextZIndex: o } = n.vm.zIndex || n.vm._.exposed.zIndex, r = {};
  if (e.fullscreen)
    n.originalPosition.value = qn(document.body, "position"), n.originalOverflow.value = qn(document.body, "overflow"), r.zIndex = o();
  else if (e.parent === document.body) {
    n.originalPosition.value = qn(document.body, "position"), await be();
    for (const l of ["top", "left"]) {
      const a = l === "top" ? "scrollTop" : "scrollLeft";
      r[l] = `${e.target.getBoundingClientRect()[l] + document.body[a] + document.documentElement[a] - Number.parseInt(qn(document.body, `margin-${l}`), 10)}px`;
    }
    for (const l of ["height", "width"])
      r[l] = `${e.target.getBoundingClientRect()[l]}px`;
  } else
    n.originalPosition.value = qn(t, "position");
  for (const [l, a] of Object.entries(r))
    n.$el.style[l] = a;
}, Ks = (e, t, n) => {
  const o = n.vm.ns || n.vm._.exposed.ns;
  ["absolute", "fixed", "sticky"].includes(n.originalPosition.value) ? Cn(t, o.bm("parent", "relative")) : xo(t, o.bm("parent", "relative")), e.fullscreen && e.lock ? xo(t, o.bm("parent", "hidden")) : Cn(t, o.bm("parent", "hidden"));
}, El = Symbol("ElLoading"), js = (e, t) => {
  var n, o, r, l;
  const a = t.instance, s = (v) => Qe(t.value) ? t.value[v] : void 0, i = (v) => {
    const m = Ue(v) && (a == null ? void 0 : a[v]) || v;
    return m && k(m);
  }, u = (v) => i(s(v) || e.getAttribute(`element-loading-${Gc(v)}`)), f = (n = s("fullscreen")) != null ? n : t.modifiers.fullscreen, d = {
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
  e[El] = {
    options: d,
    instance: R_(d)
  };
}, z_ = (e, t) => {
  for (const n of Object.keys(t))
    Jt(t[n]) && (t[n].value = e[n]);
}, F_ = {
  mounted(e, t) {
    t.value && js(e, t);
  },
  updated(e, t) {
    const n = e[El];
    t.oldValue !== t.value && (t.value && !t.oldValue ? js(e, t) : t.value && t.oldValue ? Qe(t.value) && z_(t.value, n.options) : n == null || n.instance.close());
  },
  unmounted(e) {
    var t;
    (t = e[El]) == null || t.instance.close();
  }
}, hc = [
  "success",
  "info",
  "warning",
  "error"
], H_ = ye({
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
    type: Je
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: de([String, Object]),
    default: ""
  },
  offset: {
    type: Number,
    default: 0
  },
  onClick: {
    type: de(Function),
    default: () => {
    }
  },
  onClose: {
    type: de(Function),
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
    values: [...hc, ""],
    default: ""
  },
  zIndex: Number
}), D_ = {
  destroy: () => !0
}, V_ = ["id"], W_ = ["textContent"], K_ = { key: 0 }, j_ = ["innerHTML"], U_ = H({
  name: "ElNotification"
}), q_ = /* @__PURE__ */ H({
  ...U_,
  props: H_,
  emits: D_,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: r } = du("notification"), { nextZIndex: l, currentZIndex: a } = r, { Close: s } = n0, i = k(!1);
    let u;
    const f = S(() => {
      const C = n.type;
      return C && Ja[n.type] ? o.m(C) : "";
    }), d = S(() => n.type && Ja[n.type] || n.icon), v = S(() => n.position.endsWith("right") ? "right" : "left"), m = S(() => n.position.startsWith("top") ? "top" : "bottom"), p = S(() => {
      var C;
      return {
        [m.value]: `${n.offset}px`,
        zIndex: (C = n.zIndex) != null ? C : a.value
      };
    });
    function g() {
      n.duration > 0 && ({ stop: u } = Qr(() => {
        i.value && h();
      }, n.duration));
    }
    function y() {
      u == null || u();
    }
    function h() {
      i.value = !1;
    }
    function w({ code: C }) {
      C === an.delete || C === an.backspace ? y() : C === an.esc ? i.value && h() : g();
    }
    return Ie(() => {
      g(), l(), i.value = !0;
    }), Yt(document, "keydown", w), t({
      visible: i,
      close: h
    }), (C, b) => (T(), W(mn, {
      name: c(o).b("fade"),
      onBeforeLeave: C.onClose,
      onAfterLeave: b[1] || (b[1] = ($) => C.$emit("destroy")),
      persisted: ""
    }, {
      default: D(() => [
        Re(R("div", {
          id: C.id,
          class: P([c(o).b(), C.customClass, c(v)]),
          style: Oe(c(p)),
          role: "alert",
          onMouseenter: y,
          onMouseleave: g,
          onClick: b[0] || (b[0] = (...$) => C.onClick && C.onClick(...$))
        }, [
          c(d) ? (T(), W(c(Ne), {
            key: 0,
            class: P([c(o).e("icon"), c(f)])
          }, {
            default: D(() => [
              (T(), W(je(c(d))))
            ]),
            _: 1
          }, 8, ["class"])) : V("v-if", !0),
          R("div", {
            class: P(c(o).e("group"))
          }, [
            R("h2", {
              class: P(c(o).e("title")),
              textContent: me(C.title)
            }, null, 10, W_),
            Re(R("div", {
              class: P(c(o).e("content")),
              style: Oe(C.title ? void 0 : { margin: 0 })
            }, [
              te(C.$slots, "default", {}, () => [
                C.dangerouslyUseHTMLString ? (T(), L(ze, { key: 1 }, [
                  V(" Caution here, message could've been compromised, never use user's input as message "),
                  R("p", { innerHTML: C.message }, null, 8, j_)
                ], 2112)) : (T(), L("p", K_, me(C.message), 1))
              ])
            ], 6), [
              [Rt, C.message]
            ]),
            C.showClose ? (T(), W(c(Ne), {
              key: 0,
              class: P(c(o).e("closeBtn")),
              onClick: De(h, ["stop"])
            }, {
              default: D(() => [
                X(c(s))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : V("v-if", !0)
          ], 2)
        ], 46, V_), [
          [Rt, i.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave"]));
  }
});
var G_ = /* @__PURE__ */ ce(q_, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/notification/src/notification.vue"]]);
const br = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, $l = 16;
let Y_ = 1;
const uo = function(e = {}, t = null) {
  if (!ke)
    return { close: () => {
    } };
  (typeof e == "string" || Jr(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  br[n].forEach(({ vm: f }) => {
    var d;
    o += (((d = f.el) == null ? void 0 : d.offsetHeight) || 0) + $l;
  }), o += $l;
  const r = `notification_${Y_++}`, l = e.onClose, a = {
    ...e,
    offset: o,
    id: r,
    onClose: () => {
      X_(r, n, l);
    }
  };
  let s = document.body;
  wn(e.appendTo) ? s = e.appendTo : Ue(e.appendTo) && (s = document.querySelector(e.appendTo)), wn(s) || (Ve("ElNotification", "the appendTo option is not an HTMLElement. Falling back to document.body."), s = document.body);
  const i = document.createElement("div"), u = X(G_, a, Jr(a.message) ? {
    default: () => a.message
  } : null);
  return u.appContext = t ?? uo._context, u.props.onDestroy = () => {
    da(null, i);
  }, da(u, i), br[n].push({ vm: u }), s.appendChild(i.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
hc.forEach((e) => {
  uo[e] = (t = {}) => ((typeof t == "string" || Jr(t)) && (t = {
    message: t
  }), uo({
    ...t,
    type: e
  }));
});
function X_(e, t, n) {
  const o = br[t], r = o.findIndex(({ vm: u }) => {
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
      const { el: f, component: d } = o[u].vm, v = Number.parseInt(f.style[s], 10) - a - $l;
      d.props.offset = v;
    }
}
function Z_() {
  for (const e of Object.values(br))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
uo.closeAll = Z_;
uo._context = null;
const J_ = o0(uo, "$notify"), gc = {
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
}, Q_ = { class: "footer-wrap" }, e4 = /* @__PURE__ */ H({
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
    ], a = he("TableName"), s = k(!1), i = () => {
      s.value = !0;
    }, u = (d, v) => {
      if (d === "") {
        const m = o.columns;
        delete m[v].fixed, r("update:columns", m);
        return;
      }
    }, f = () => {
      gc.setSession(`columns-${a}`, o.columns), s.value = !1, J_.success({
        title: "保存成功",
        message: "自定义列设置已缓存"
      });
    };
    return t({
      open: i
    }), (d, v) => {
      const m = vc, p = nc, g = tc, y = ec, h = Xu, w = pc, C = X2, b = $u, $ = Y2, O = G2, _ = hw;
      return T(), W(_, {
        modelValue: s.value,
        "onUpdate:modelValue": v[1] || (v[1] = (E) => s.value = E),
        title: "列设置",
        size: "500"
      }, {
        default: D(() => [
          X(O, null, {
            default: D(() => [
              X(C, null, {
                default: D(() => [
                  X(w, {
                    data: d.columns,
                    "row-key": "prop"
                  }, {
                    empty: D(() => [
                      X(h, { description: "暂无可配置列" })
                    ]),
                    default: D(() => [
                      X(m, {
                        prop: "label",
                        align: "center",
                        label: "列名"
                      }),
                      X(m, {
                        prop: "isShow",
                        align: "center",
                        label: "显示"
                      }, {
                        default: D((E) => [
                          X(p, {
                            modelValue: E.row.isShow,
                            "onUpdate:modelValue": (A) => E.row.isShow = A
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      X(m, {
                        prop: "sortable",
                        align: "center",
                        label: "排序"
                      }, {
                        default: D((E) => [
                          X(p, {
                            modelValue: E.row.sortable,
                            "onUpdate:modelValue": (A) => E.row.sortable = A
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      X(m, {
                        prop: "fixed",
                        align: "center",
                        label: "固定"
                      }, {
                        default: D((E) => [
                          X(y, {
                            modelValue: E.row.fixed,
                            "onUpdate:modelValue": (A) => E.row.fixed = A,
                            onChange: (A) => u(A, E.$index)
                          }, {
                            default: D(() => [
                              (T(), L(ze, null, Kt(l, (A) => X(g, {
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
              X($, null, {
                default: D(() => [
                  R("div", Q_, [
                    X(b, {
                      onClick: v[0] || (v[0] = (E) => s.value = !1)
                    }, {
                      default: D(() => [
                        jt("取消")
                      ]),
                      _: 1
                    }),
                    X(b, {
                      type: "primary",
                      onClick: f
                    }, {
                      default: D(() => [
                        jt("保存")
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
}), t4 = (e = "id") => {
  const t = k(!1), n = k([]), o = S(() => n.value.map((l) => l[e]));
  return {
    isSelected: t,
    selected: n,
    selectedIds: o,
    selectionChange: (l) => {
      l.length ? t.value = !0 : t.value = !1, n.value = l;
    }
  };
}, Br = (e) => ($c("data-v-0f175741"), e = e(), Tc(), e), n4 = { class: "ex-table" }, o4 = /* @__PURE__ */ Br(() => /* @__PURE__ */ R("i", null, null, -1)), r4 = { class: "ex-table-pagination" }, l4 = { class: "ex-table-pagination__left" }, a4 = { class: "ex-table-pagination__right" }, s4 = { class: "ex-table-pagination__custom" }, i4 = /* @__PURE__ */ Br(() => /* @__PURE__ */ R("div", { class: "custom-label" }, "表格尺寸:", -1)), u4 = { class: "custom-field" }, c4 = /* @__PURE__ */ Br(() => /* @__PURE__ */ R("div", { class: "custom-label" }, "斑马纹:", -1)), d4 = { class: "custom-field" }, f4 = /* @__PURE__ */ Br(() => /* @__PURE__ */ R("div", { class: "custom-label" }, "边框:", -1)), p4 = { class: "custom-field" }, v4 = /* @__PURE__ */ H({
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
    border: { type: Boolean, default: !1 },
    stripe: { type: Boolean, default: !1 },
    rowKey: { default: "id" },
    size: { default: "default" },
    emptyText: { default: "暂无数据" },
    tableName: { default: "ExTable" },
    pageConfig: { default: () => ({
      layout: "total, sizes, prev, pager, next, jumper",
      pageSizes: [10, 25, 50, 100],
      hideOnSinglePage: !0,
      background: !0,
      small: !1
    }) },
    showColumnSetting: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const { data: n, columns: o, showColumnSetting: r, requestParams: l, requestAuto: a, isPage: s, requestApi: i, responseDataHandler: u, border: f, rowKey: d, size: v, stripe: m, emptyText: p, pageConfig: g, tableName: y } = e;
    Xe("TableName", y);
    const h = {
      pageNum: 1,
      pageSize: 10
    }, w = ["selection", "radio", "index", "expand"], C = [
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
    ], b = Gs(), $ = k(null), O = k(o), _ = S(() => O.value.map((q) => q.isShow === void 0 ? {
      ...q,
      isShow: !0
    } : q)), E = k([]), A = k([]);
    Mn(() => {
      E.value = _.value.filter((q) => w.includes(q == null ? void 0 : q.type)), A.value = _.value.filter((q) => !w.includes(q == null ? void 0 : q.type));
    });
    const F = k({}), B = k([]), M = S(() => n ? n.slice(
      (ue.value.pageNum - 1) * ue.value.pageSize,
      ue.value.pageSize * ue.value.pageNum
    ) : B.value), G = k(!1), ne = k(0), Z = k(0), ee = k(""), { isSelected: K, selected: ie, selectedIds: N, selectionChange: j } = t4(d), re = async (q = {}) => {
      if (!(!i || n))
        try {
          if (G.value = !0, Object.assign(F.value, l, q, s ? ue.value : {}), u && typeof u == "function") {
            const I = await i(F.value), { rows: Q, total: Ce } = u(I);
            B.value = Q, Z.value = Ce;
          } else {
            const I = await i(F.value), { rows: Q, total: Ce } = I;
            B.value = Q, Z.value = Ce;
          }
          G.value = !1;
        } catch (I) {
          console.log(I), G.value = !1;
        }
    };
    Ie(() => {
      !s && (se.value.layout = "total"), a && re(), n && Array.isArray(n) && (Z.value = n.length), r && Ge();
    }), _c(() => {
      var I;
      ((I = $.value) == null ? void 0 : I.$el.querySelector(".el-scrollbar__wrap")) && ne.value && be(() => {
        var Q;
        (Q = $.value) == null || Q.setScrollTop(ne.value);
      });
    }), Qs(() => {
      var I;
      const q = (I = $.value) == null ? void 0 : I.$el.querySelector(".el-scrollbar__wrap");
      q && (ne.value = q.scrollTop);
    });
    const se = k(g), ue = k({
      pageNum: h.pageNum,
      pageSize: h.pageSize
    }), _e = (q) => {
      ue.value.pageSize = q, ue.value.pageNum = h.pageNum, re();
    }, Te = () => {
      re();
    }, we = k({
      size: v || "default",
      stripe: m ?? !1,
      border: f ?? !1
    }), Me = () => {
      At();
    }, Ee = k(r), He = k(null), Pe = () => {
      Ee.value = !0, be(() => {
        var q;
        (q = He.value) == null || q.open();
      });
    }, Ge = () => {
      const q = gc.getSession(`columns-${y}`);
      q && Array.isArray(q) && q.length > 0 && (A.value = q);
    }, pt = () => {
      We(), re();
    }, nt = (q = {}) => {
      ue.value.pageNum = h.pageNum, ue.value.pageSize = h.pageSize, F.value = l, We(), ut(), ot(), re(q);
    }, Ct = (q = {}) => {
      ue.value.pageNum = h.pageNum, We(), re(q);
    }, vt = (q, I) => {
      B.value.splice(I, 0, q);
    }, st = (q) => B.value.find((I) => I[d] === q) || null, Pt = (q, I) => {
      const Q = B.value.findIndex((Ce) => Ce[d] === I);
      Q !== -1 && B.value.splice(Q, 1, q);
    }, it = (q) => {
      B.value = B.value.filter((I) => I[d] !== q);
    }, St = (q) => {
      B.value.splice(q, 1);
    }, We = () => {
      var q;
      (q = $.value) == null || q.clearSelection();
    }, ut = () => {
      var q;
      (q = $.value) == null || q.clearSort();
    }, ot = (q) => {
      var I;
      (I = $.value) == null || I.clearFilter(q);
    }, At = () => {
      var q;
      (q = $.value) == null || q.doLayout();
    };
    return t({
      el: $,
      tableParams: F,
      tableData: M,
      radio: ee,
      isSelected: K,
      selected: ie,
      selectedIds: N,
      getData: re,
      refresh: pt,
      reload: nt,
      search: Ct,
      insertRow: vt,
      getRowById: st,
      updateRowById: Pt,
      deleteRowById: it,
      deleteRowByIndex: St,
      clearSelection: We,
      clearSort: ut,
      clearFilter: ot
    }), (q, I) => {
      const Q = x2, Ce = vc, Ke = Xu, Ht = aS, Y = $u, le = A2, ge = P2, fe = nc, Se = gS, Be = F_;
      return T(), L(ze, null, [
        Re((T(), L("div", n4, [
          X(c(pc), mt({
            ref_key: "tableRef",
            ref: $,
            data: M.value,
            "row-key": d,
            border: we.value.border,
            size: we.value.size,
            stripe: we.value.stripe,
            onSelectionChange: c(j)
          }, c(b)), {
            append: D(() => [
              te(q.$slots, "append", {}, void 0, !0)
            ]),
            empty: D(() => [
              X(Ke, { description: p })
            ]),
            default: D(() => [
              (T(!0), L(ze, null, Kt(E.value, (pe) => (T(), W(Ce, mt({ key: pe }, pe, {
                align: pe.align ?? "center",
                "reserve-selection": pe.type === "selection"
              }), {
                default: D((Ye) => [
                  pe.type === "expand" ? te(q.$slots, pe.type, zr(mt({ key: 0 }, Ye)), void 0, !0) : V("", !0),
                  pe.type === "radio" ? (T(), W(Q, {
                    key: 1,
                    modelValue: ee.value,
                    "onUpdate:modelValue": I[0] || (I[0] = (rt) => ee.value = rt),
                    label: Ye.row[d]
                  }, {
                    default: D(() => [
                      o4
                    ]),
                    _: 2
                  }, 1032, ["modelValue", "label"])) : V("", !0)
                ]),
                _: 2
              }, 1040, ["align", "reserve-selection"]))), 128)),
              (T(!0), L(ze, null, Kt(A.value, (pe) => (T(), L(ze, { key: pe }, [
                pe.isShow ? (T(), W(Ce, zr(mt({ key: 0 }, pe)), {
                  default: D((Ye) => [
                    te(q.$slots, pe.prop, zr(Ec(Ye)), () => [
                      jt(me(pe.prop ? Ye.row[pe.prop] : null), 1)
                    ], !0)
                  ]),
                  _: 2
                }, 1040)) : V("", !0)
              ], 64))), 128)),
              te(q.$slots, "default", {}, void 0, !0),
              X(Ce, { "min-width": "1" })
            ]),
            _: 3
          }, 16, ["data", "border", "size", "stripe", "onSelectionChange"]),
          R("div", r4, [
            R("div", l4, [
              X(Ht, {
                background: se.value.background,
                small: se.value.small,
                layout: se.value.layout,
                "current-page": ue.value.pageNum,
                "onUpdate:currentPage": I[1] || (I[1] = (pe) => ue.value.pageNum = pe),
                total: Z.value,
                "page-size": ue.value.pageSize,
                "page-sizes": se.value.pageSizes,
                "hide-on-single-page": se.value.hideOnSinglePage,
                onSizeChange: _e,
                onCurrentChange: Te
              }, null, 8, ["background", "small", "layout", "current-page", "total", "page-size", "page-sizes", "hide-on-single-page"])
            ]),
            R("div", a4, [
              X(Se, {
                placement: "top",
                width: 220,
                trigger: "click"
              }, {
                reference: D(() => [
                  X(Y, {
                    circle: "",
                    icon: c(Mm)
                  }, null, 8, ["icon"])
                ]),
                default: D(() => [
                  R("div", s4, [
                    i4,
                    R("div", u4, [
                      X(ge, {
                        modelValue: we.value.size,
                        "onUpdate:modelValue": I[2] || (I[2] = (pe) => we.value.size = pe),
                        size: "small",
                        onChange: Me
                      }, {
                        default: D(() => [
                          (T(), L(ze, null, Kt(C, (pe) => X(le, {
                            label: pe.value
                          }, {
                            default: D(() => [
                              jt(me(pe.label), 1)
                            ]),
                            _: 2
                          }, 1032, ["label"])), 64))
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    c4,
                    R("div", d4, [
                      X(fe, {
                        modelValue: we.value.stripe,
                        "onUpdate:modelValue": I[3] || (I[3] = (pe) => we.value.stripe = pe)
                      }, null, 8, ["modelValue"])
                    ]),
                    f4,
                    R("div", p4, [
                      X(fe, {
                        modelValue: we.value.border,
                        "onUpdate:modelValue": I[4] || (I[4] = (pe) => we.value.border = pe)
                      }, null, 8, ["modelValue"])
                    ])
                  ])
                ]),
                _: 1
              }),
              Ee.value ? (T(), W(Y, {
                key: 0,
                circle: "",
                icon: c(Em),
                onClick: Pe
              }, null, 8, ["icon"])) : V("", !0),
              X(Y, {
                circle: "",
                icon: c(Pm),
                onClick: pt
              }, null, 8, ["icon"])
            ])
          ])
        ])), [
          [Be, G.value]
        ]),
        Ee.value ? (T(), W(e4, {
          key: 0,
          ref_key: "columnSettingRef",
          ref: He,
          columns: A.value,
          "onUpdate:columns": I[5] || (I[5] = (pe) => A.value = pe)
        }, null, 8, ["columns"])) : V("", !0)
      ], 64);
    };
  }
}), h4 = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, g4 = /* @__PURE__ */ h4(v4, [["__scopeId", "data-v-0f175741"]]), m4 = [g4], b4 = function(e) {
  m4.forEach((t) => {
    e.use(t);
  });
}, C4 = {
  install: b4
};
export {
  g4 as ExTable,
  C4 as default
};
