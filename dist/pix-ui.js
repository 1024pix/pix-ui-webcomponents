function mo(e, o) {
  const t = /* @__PURE__ */ Object.create(null), r = e.split(",");
  for (let i = 0; i < r.length; i++)
    t[r[i]] = !0;
  return o ? (i) => !!t[i.toLowerCase()] : (i) => !!t[i];
}
const L = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, go = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Z = () => {
}, gi = () => !1, yn = /^on[^a-z]/, Fo = (e) => yn.test(e), nt = (e) => e.startsWith("onUpdate:"), U = Object.assign, lr = (e, o) => {
  const t = e.indexOf(o);
  t > -1 && e.splice(t, 1);
}, wn = Object.prototype.hasOwnProperty, P = (e, o) => wn.call(e, o), V = Array.isArray, ho = (e) => xt(e) === "[object Map]", En = (e) => xt(e) === "[object Set]", T = (e) => typeof e == "function", q = (e) => typeof e == "string", ar = (e) => typeof e == "symbol", B = (e) => e !== null && typeof e == "object", cr = (e) => B(e) && T(e.then) && T(e.catch), Nn = Object.prototype.toString, xt = (e) => Nn.call(e), pr = (e) => xt(e).slice(8, -1), kn = (e) => xt(e) === "[object Object]", ur = (e) => q(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Xo = /* @__PURE__ */ mo(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), On = /* @__PURE__ */ mo(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), gt = (e) => {
  const o = /* @__PURE__ */ Object.create(null);
  return (t) => o[t] || (o[t] = e(t));
}, Dn = /-(\w)/g, Te = gt((e) => e.replace(Dn, (o, t) => t ? t.toUpperCase() : "")), Vn = /\B([A-Z])/g, se = gt(
  (e) => e.replace(Vn, "-$1").toLowerCase()
), ht = gt(
  (e) => e.charAt(0).toUpperCase() + e.slice(1)
), Ye = gt(
  (e) => e ? `on${ht(e)}` : ""
), Po = (e, o) => !Object.is(e, o), wo = (e, o) => {
  for (let t = 0; t < e.length; t++)
    e[t](o);
}, st = (e, o, t) => {
  Object.defineProperty(e, o, {
    configurable: !0,
    enumerable: !1,
    value: t
  });
}, Cn = (e) => {
  const o = parseFloat(e);
  return isNaN(o) ? e : o;
}, Ir = (e) => {
  const o = q(e) ? Number(e) : NaN;
  return isNaN(o) ? e : o;
};
let Rr;
const lt = () => Rr || (Rr = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : typeof global != "undefined" ? global : {});
function dr(e) {
  if (V(e)) {
    const o = {};
    for (let t = 0; t < e.length; t++) {
      const r = e[t], i = q(r) ? Pn(r) : dr(r);
      if (i)
        for (const n in i)
          o[n] = i[n];
    }
    return o;
  } else {
    if (q(e))
      return e;
    if (B(e))
      return e;
  }
}
const Tn = /;(?![^(]*\))/g, $n = /:([^]+)/, zn = /\/\*[^]*?\*\//g;
function Pn(e) {
  const o = {};
  return e.replace(zn, "").split(Tn).forEach((t) => {
    if (t) {
      const r = t.split($n);
      r.length > 1 && (o[r[0].trim()] = r[1].trim());
    }
  }), o;
}
function bt(e) {
  let o = "";
  if (q(e))
    o = e;
  else if (V(e))
    for (let t = 0; t < e.length; t++) {
      const r = bt(e[t]);
      r && (o += r + " ");
    }
  else if (B(e))
    for (const t in e)
      e[t] && (o += t + " ");
  return o.trim();
}
const In = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Rn = /* @__PURE__ */ mo(In);
function hi(e) {
  return !!e || e === "";
}
function Lt(e, ...o) {
  console.warn(`[Vue warn] ${e}`, ...o);
}
let de;
class An {
  constructor(o = !1) {
    this.detached = o, this._active = !0, this.effects = [], this.cleanups = [], this.parent = de, !o && de && (this.index = (de.scopes || (de.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(o) {
    if (this._active) {
      const t = de;
      try {
        return de = this, o();
      } finally {
        de = t;
      }
    } else
      process.env.NODE_ENV !== "production" && Lt("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    de = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    de = this.parent;
  }
  stop(o) {
    if (this._active) {
      let t, r;
      for (t = 0, r = this.effects.length; t < r; t++)
        this.effects[t].stop();
      for (t = 0, r = this.cleanups.length; t < r; t++)
        this.cleanups[t]();
      if (this.scopes)
        for (t = 0, r = this.scopes.length; t < r; t++)
          this.scopes[t].stop(!0);
      if (!this.detached && this.parent && !o) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Mn(e, o = de) {
  o && o.active && o.effects.push(e);
}
function jn() {
  return de;
}
const Io = (e) => {
  const o = new Set(e);
  return o.w = 0, o.n = 0, o;
}, bi = (e) => (e.w & Be) > 0, _i = (e) => (e.n & Be) > 0, Sn = ({ deps: e }) => {
  if (e.length)
    for (let o = 0; o < e.length; o++)
      e[o].w |= Be;
}, Fn = (e) => {
  const { deps: o } = e;
  if (o.length) {
    let t = 0;
    for (let r = 0; r < o.length; r++) {
      const i = o[r];
      bi(i) && !_i(i) ? i.delete(e) : o[t++] = i, i.w &= ~Be, i.n &= ~Be;
    }
    o.length = t;
  }
}, Bt = /* @__PURE__ */ new WeakMap();
let Oo = 0, Be = 1;
const Ut = 30;
let re;
const Qe = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Kt = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class fr {
  constructor(o, t = null, r) {
    this.fn = o, this.scheduler = t, this.active = !0, this.deps = [], this.parent = void 0, Mn(this, r);
  }
  run() {
    if (!this.active)
      return this.fn();
    let o = re, t = Le;
    for (; o; ) {
      if (o === this)
        return;
      o = o.parent;
    }
    try {
      return this.parent = re, re = this, Le = !0, Be = 1 << ++Oo, Oo <= Ut ? Sn(this) : Ar(this), this.fn();
    } finally {
      Oo <= Ut && Fn(this), Be = 1 << --Oo, re = this.parent, Le = t, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    re === this ? this.deferStop = !0 : this.active && (Ar(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Ar(e) {
  const { deps: o } = e;
  if (o.length) {
    for (let t = 0; t < o.length; t++)
      o[t].delete(e);
    o.length = 0;
  }
}
let Le = !0;
const mi = [];
function no() {
  mi.push(Le), Le = !1;
}
function so() {
  const e = mi.pop();
  Le = e === void 0 ? !0 : e;
}
function Q(e, o, t) {
  if (Le && re) {
    let r = Bt.get(e);
    r || Bt.set(e, r = /* @__PURE__ */ new Map());
    let i = r.get(t);
    i || r.set(t, i = Io());
    const n = process.env.NODE_ENV !== "production" ? { effect: re, target: e, type: o, key: t } : void 0;
    Wt(i, n);
  }
}
function Wt(e, o) {
  let t = !1;
  Oo <= Ut ? _i(e) || (e.n |= Be, t = !bi(e)) : t = !e.has(re), t && (e.add(re), re.deps.push(e), process.env.NODE_ENV !== "production" && re.onTrack && re.onTrack(
    U(
      {
        effect: re
      },
      o
    )
  ));
}
function ke(e, o, t, r, i, n) {
  const s = Bt.get(e);
  if (!s)
    return;
  let a = [];
  if (o === "clear")
    a = [...s.values()];
  else if (t === "length" && V(e)) {
    const u = Number(r);
    s.forEach((x, d) => {
      (d === "length" || d >= u) && a.push(x);
    });
  } else
    switch (t !== void 0 && a.push(s.get(t)), o) {
      case "add":
        V(e) ? ur(t) && a.push(s.get("length")) : (a.push(s.get(Qe)), ho(e) && a.push(s.get(Kt)));
        break;
      case "delete":
        V(e) || (a.push(s.get(Qe)), ho(e) && a.push(s.get(Kt)));
        break;
      case "set":
        ho(e) && a.push(s.get(Qe));
        break;
    }
  const p = process.env.NODE_ENV !== "production" ? { target: e, type: o, key: t, newValue: r, oldValue: i, oldTarget: n } : void 0;
  if (a.length === 1)
    a[0] && (process.env.NODE_ENV !== "production" ? fo(a[0], p) : fo(a[0]));
  else {
    const u = [];
    for (const x of a)
      x && u.push(...x);
    process.env.NODE_ENV !== "production" ? fo(Io(u), p) : fo(Io(u));
  }
}
function fo(e, o) {
  const t = V(e) ? e : [...e];
  for (const r of t)
    r.computed && Mr(r, o);
  for (const r of t)
    r.computed || Mr(r, o);
}
function Mr(e, o) {
  (e !== re || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(U({ effect: e }, o)), e.scheduler ? e.scheduler() : e.run());
}
const Hn = /* @__PURE__ */ mo("__proto__,__v_isRef,__isVue"), vi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ar)
), Ln = /* @__PURE__ */ _t(), Bn = /* @__PURE__ */ _t(!1, !0), Un = /* @__PURE__ */ _t(!0), Kn = /* @__PURE__ */ _t(!0, !0), jr = /* @__PURE__ */ Wn();
function Wn() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((o) => {
    e[o] = function(...t) {
      const r = z(this);
      for (let n = 0, s = this.length; n < s; n++)
        Q(r, "get", n + "");
      const i = r[o](...t);
      return i === -1 || i === !1 ? r[o](...t.map(z)) : i;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((o) => {
    e[o] = function(...t) {
      no();
      const r = z(this)[o].apply(this, t);
      return so(), r;
    };
  }), e;
}
function qn(e) {
  const o = z(this);
  return Q(o, "has", e), o.hasOwnProperty(e);
}
function _t(e = !1, o = !1) {
  return function(r, i, n) {
    if (i === "__v_isReactive")
      return !e;
    if (i === "__v_isReadonly")
      return e;
    if (i === "__v_isShallow")
      return o;
    if (i === "__v_raw" && n === (e ? o ? Vi : Di : o ? Oi : ki).get(r))
      return r;
    const s = V(r);
    if (!e) {
      if (s && P(jr, i))
        return Reflect.get(jr, i, n);
      if (i === "hasOwnProperty")
        return qn;
    }
    const a = Reflect.get(r, i, n);
    return (ar(i) ? vi.has(i) : Hn(i)) || (e || Q(r, "get", i), o) ? a : Y(a) ? s && ur(i) ? a : a.value : B(a) ? e ? Ci(a) : gr(a) : a;
  };
}
const Jn = /* @__PURE__ */ yi(), Yn = /* @__PURE__ */ yi(!0);
function yi(e = !1) {
  return function(t, r, i, n) {
    let s = t[r];
    if (Ue(s) && Y(s) && !Y(i))
      return !1;
    if (!e && (!at(i) && !Ue(i) && (s = z(s), i = z(i)), !V(t) && Y(s) && !Y(i)))
      return s.value = i, !0;
    const a = V(t) && ur(r) ? Number(r) < t.length : P(t, r), p = Reflect.set(t, r, i, n);
    return t === z(n) && (a ? Po(i, s) && ke(t, "set", r, i, s) : ke(t, "add", r, i)), p;
  };
}
function Zn(e, o) {
  const t = P(e, o), r = e[o], i = Reflect.deleteProperty(e, o);
  return i && t && ke(e, "delete", o, void 0, r), i;
}
function Xn(e, o) {
  const t = Reflect.has(e, o);
  return (!ar(o) || !vi.has(o)) && Q(e, "has", o), t;
}
function Qn(e) {
  return Q(e, "iterate", V(e) ? "length" : Qe), Reflect.ownKeys(e);
}
const wi = {
  get: Ln,
  set: Jn,
  deleteProperty: Zn,
  has: Xn,
  ownKeys: Qn
}, Ei = {
  get: Un,
  set(e, o) {
    return process.env.NODE_ENV !== "production" && Lt(
      `Set operation on key "${String(o)}" failed: target is readonly.`,
      e
    ), !0;
  },
  deleteProperty(e, o) {
    return process.env.NODE_ENV !== "production" && Lt(
      `Delete operation on key "${String(o)}" failed: target is readonly.`,
      e
    ), !0;
  }
}, Gn = /* @__PURE__ */ U(
  {},
  wi,
  {
    get: Bn,
    set: Yn
  }
), es = /* @__PURE__ */ U(
  {},
  Ei,
  {
    get: Kn
  }
), xr = (e) => e, mt = (e) => Reflect.getPrototypeOf(e);
function Ko(e, o, t = !1, r = !1) {
  e = e.__v_raw;
  const i = z(e), n = z(o);
  t || (o !== n && Q(i, "get", o), Q(i, "get", n));
  const { has: s } = mt(i), a = r ? xr : t ? hr : Ro;
  if (s.call(i, o))
    return a(e.get(o));
  if (s.call(i, n))
    return a(e.get(n));
  e !== i && e.get(o);
}
function Wo(e, o = !1) {
  const t = this.__v_raw, r = z(t), i = z(e);
  return o || (e !== i && Q(r, "has", e), Q(r, "has", i)), e === i ? t.has(e) : t.has(e) || t.has(i);
}
function qo(e, o = !1) {
  return e = e.__v_raw, !o && Q(z(e), "iterate", Qe), Reflect.get(e, "size", e);
}
function Sr(e) {
  e = z(e);
  const o = z(this);
  return mt(o).has.call(o, e) || (o.add(e), ke(o, "add", e, e)), this;
}
function Fr(e, o) {
  o = z(o);
  const t = z(this), { has: r, get: i } = mt(t);
  let n = r.call(t, e);
  n ? process.env.NODE_ENV !== "production" && Ni(t, r, e) : (e = z(e), n = r.call(t, e));
  const s = i.call(t, e);
  return t.set(e, o), n ? Po(o, s) && ke(t, "set", e, o, s) : ke(t, "add", e, o), this;
}
function Hr(e) {
  const o = z(this), { has: t, get: r } = mt(o);
  let i = t.call(o, e);
  i ? process.env.NODE_ENV !== "production" && Ni(o, t, e) : (e = z(e), i = t.call(o, e));
  const n = r ? r.call(o, e) : void 0, s = o.delete(e);
  return i && ke(o, "delete", e, void 0, n), s;
}
function Lr() {
  const e = z(this), o = e.size !== 0, t = process.env.NODE_ENV !== "production" ? ho(e) ? new Map(e) : new Set(e) : void 0, r = e.clear();
  return o && ke(e, "clear", void 0, void 0, t), r;
}
function Jo(e, o) {
  return function(r, i) {
    const n = this, s = n.__v_raw, a = z(s), p = o ? xr : e ? hr : Ro;
    return !e && Q(a, "iterate", Qe), s.forEach((u, x) => r.call(i, p(u), p(x), n));
  };
}
function Yo(e, o, t) {
  return function(...r) {
    const i = this.__v_raw, n = z(i), s = ho(n), a = e === "entries" || e === Symbol.iterator && s, p = e === "keys" && s, u = i[e](...r), x = t ? xr : o ? hr : Ro;
    return !o && Q(
      n,
      "iterate",
      p ? Kt : Qe
    ), {
      // iterator protocol
      next() {
        const { value: d, done: m } = u.next();
        return m ? { value: d, done: m } : {
          value: a ? [x(d[0]), x(d[1])] : x(d),
          done: m
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function je(e) {
  return function(...o) {
    if (process.env.NODE_ENV !== "production") {
      const t = o[0] ? `on key "${o[0]}" ` : "";
      console.warn(
        `${ht(e)} operation ${t}failed: target is readonly.`,
        z(this)
      );
    }
    return e === "delete" ? !1 : this;
  };
}
function os() {
  const e = {
    get(n) {
      return Ko(this, n);
    },
    get size() {
      return qo(this);
    },
    has: Wo,
    add: Sr,
    set: Fr,
    delete: Hr,
    clear: Lr,
    forEach: Jo(!1, !1)
  }, o = {
    get(n) {
      return Ko(this, n, !1, !0);
    },
    get size() {
      return qo(this);
    },
    has: Wo,
    add: Sr,
    set: Fr,
    delete: Hr,
    clear: Lr,
    forEach: Jo(!1, !0)
  }, t = {
    get(n) {
      return Ko(this, n, !0);
    },
    get size() {
      return qo(this, !0);
    },
    has(n) {
      return Wo.call(this, n, !0);
    },
    add: je("add"),
    set: je("set"),
    delete: je("delete"),
    clear: je("clear"),
    forEach: Jo(!0, !1)
  }, r = {
    get(n) {
      return Ko(this, n, !0, !0);
    },
    get size() {
      return qo(this, !0);
    },
    has(n) {
      return Wo.call(this, n, !0);
    },
    add: je("add"),
    set: je("set"),
    delete: je("delete"),
    clear: je("clear"),
    forEach: Jo(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((n) => {
    e[n] = Yo(
      n,
      !1,
      !1
    ), t[n] = Yo(
      n,
      !0,
      !1
    ), o[n] = Yo(
      n,
      !1,
      !0
    ), r[n] = Yo(
      n,
      !0,
      !0
    );
  }), [
    e,
    t,
    o,
    r
  ];
}
const [
  ts,
  rs,
  is,
  ns
] = /* @__PURE__ */ os();
function vt(e, o) {
  const t = o ? e ? ns : is : e ? rs : ts;
  return (r, i, n) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(
    P(t, i) && i in r ? t : r,
    i,
    n
  );
}
const ss = {
  get: /* @__PURE__ */ vt(!1, !1)
}, ls = {
  get: /* @__PURE__ */ vt(!1, !0)
}, as = {
  get: /* @__PURE__ */ vt(!0, !1)
}, cs = {
  get: /* @__PURE__ */ vt(!0, !0)
};
function Ni(e, o, t) {
  const r = z(t);
  if (r !== t && o.call(e, r)) {
    const i = pr(e);
    console.warn(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const ki = /* @__PURE__ */ new WeakMap(), Oi = /* @__PURE__ */ new WeakMap(), Di = /* @__PURE__ */ new WeakMap(), Vi = /* @__PURE__ */ new WeakMap();
function ps(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function us(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ps(pr(e));
}
function gr(e) {
  return Ue(e) ? e : yt(
    e,
    !1,
    wi,
    ss,
    ki
  );
}
function ds(e) {
  return yt(
    e,
    !1,
    Gn,
    ls,
    Oi
  );
}
function Ci(e) {
  return yt(
    e,
    !0,
    Ei,
    as,
    Di
  );
}
function Do(e) {
  return yt(
    e,
    !0,
    es,
    cs,
    Vi
  );
}
function yt(e, o, t, r, i) {
  if (!B(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(o && e.__v_isReactive))
    return e;
  const n = i.get(e);
  if (n)
    return n;
  const s = us(e);
  if (s === 0)
    return e;
  const a = new Proxy(
    e,
    s === 2 ? r : t
  );
  return i.set(e, a), a;
}
function Ge(e) {
  return Ue(e) ? Ge(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ue(e) {
  return !!(e && e.__v_isReadonly);
}
function at(e) {
  return !!(e && e.__v_isShallow);
}
function qt(e) {
  return Ge(e) || Ue(e);
}
function z(e) {
  const o = e && e.__v_raw;
  return o ? z(o) : e;
}
function Ti(e) {
  return st(e, "__v_skip", !0), e;
}
const Ro = (e) => B(e) ? gr(e) : e, hr = (e) => B(e) ? Ci(e) : e;
function $i(e) {
  Le && re && (e = z(e), process.env.NODE_ENV !== "production" ? Wt(e.dep || (e.dep = Io()), {
    target: e,
    type: "get",
    key: "value"
  }) : Wt(e.dep || (e.dep = Io())));
}
function zi(e, o) {
  e = z(e);
  const t = e.dep;
  t && (process.env.NODE_ENV !== "production" ? fo(t, {
    target: e,
    type: "set",
    key: "value",
    newValue: o
  }) : fo(t));
}
function Y(e) {
  return !!(e && e.__v_isRef === !0);
}
function Eo(e) {
  return fs(e, !1);
}
function fs(e, o) {
  return Y(e) ? e : new xs(e, o);
}
class xs {
  constructor(o, t) {
    this.__v_isShallow = t, this.dep = void 0, this.__v_isRef = !0, this._rawValue = t ? o : z(o), this._value = t ? o : Ro(o);
  }
  get value() {
    return $i(this), this._value;
  }
  set value(o) {
    const t = this.__v_isShallow || at(o) || Ue(o);
    o = t ? o : z(o), Po(o, this._rawValue) && (this._rawValue = o, this._value = t ? o : Ro(o), zi(this, o));
  }
}
function gs(e) {
  return Y(e) ? e.value : e;
}
const hs = {
  get: (e, o, t) => gs(Reflect.get(e, o, t)),
  set: (e, o, t, r) => {
    const i = e[o];
    return Y(i) && !Y(t) ? (i.value = t, !0) : Reflect.set(e, o, t, r);
  }
};
function Pi(e) {
  return Ge(e) ? e : new Proxy(e, hs);
}
class bs {
  constructor(o, t, r, i) {
    this._setter = t, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new fr(o, () => {
      this._dirty || (this._dirty = !0, zi(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = r;
  }
  get value() {
    const o = z(this);
    return $i(o), (o._dirty || !o._cacheable) && (o._dirty = !1, o._value = o.effect.run()), o._value;
  }
  set value(o) {
    this._setter(o);
  }
}
function _s(e, o, t = !1) {
  let r, i;
  const n = T(e);
  n ? (r = e, i = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : Z) : (r = e.get, i = e.set);
  const s = new bs(r, i, n || !i, t);
  return process.env.NODE_ENV !== "production" && o && !t && (s.effect.onTrack = o.onTrack, s.effect.onTrigger = o.onTrigger), s;
}
const eo = [];
function Qo(e) {
  eo.push(e);
}
function Go() {
  eo.pop();
}
function w(e, ...o) {
  if (process.env.NODE_ENV === "production")
    return;
  no();
  const t = eo.length ? eo[eo.length - 1].component : null, r = t && t.appContext.config.warnHandler, i = ms();
  if (r)
    $e(
      r,
      t,
      11,
      [
        e + o.join(""),
        t && t.proxy,
        i.map(
          ({ vnode: n }) => `at <${Vt(t, n.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const n = [`[Vue warn]: ${e}`, ...o];
    i.length && n.push(`
`, ...vs(i)), console.warn(...n);
  }
  so();
}
function ms() {
  let e = eo[eo.length - 1];
  if (!e)
    return [];
  const o = [];
  for (; e; ) {
    const t = o[0];
    t && t.vnode === e ? t.recurseCount++ : o.push({
      vnode: e,
      recurseCount: 0
    });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return o;
}
function vs(e) {
  const o = [];
  return e.forEach((t, r) => {
    o.push(...r === 0 ? [] : [`
`], ...ys(t));
  }), o;
}
function ys({ vnode: e, recurseCount: o }) {
  const t = o > 0 ? `... (${o} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, i = ` at <${Vt(
    e.component,
    e.type,
    r
  )}`, n = ">" + t;
  return e.props ? [i, ...ws(e.props), n] : [i + n];
}
function ws(e) {
  const o = [], t = Object.keys(e);
  return t.slice(0, 3).forEach((r) => {
    o.push(...Ii(r, e[r]));
  }), t.length > 3 && o.push(" ..."), o;
}
function Ii(e, o, t) {
  return q(o) ? (o = JSON.stringify(o), t ? o : [`${e}=${o}`]) : typeof o == "number" || typeof o == "boolean" || o == null ? t ? o : [`${e}=${o}`] : Y(o) ? (o = Ii(e, z(o.value), !0), t ? o : [`${e}=Ref<`, o, ">"]) : T(o) ? [`${e}=fn${o.name ? `<${o.name}>` : ""}`] : (o = z(o), t ? o : [`${e}=`, o]);
}
const br = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function $e(e, o, t, r) {
  let i;
  try {
    i = r ? e(...r) : e();
  } catch (n) {
    wt(n, o, t);
  }
  return i;
}
function ge(e, o, t, r) {
  if (T(e)) {
    const n = $e(e, o, t, r);
    return n && cr(n) && n.catch((s) => {
      wt(s, o, t);
    }), n;
  }
  const i = [];
  for (let n = 0; n < e.length; n++)
    i.push(ge(e[n], o, t, r));
  return i;
}
function wt(e, o, t, r = !0) {
  const i = o ? o.vnode : null;
  if (o) {
    let n = o.parent;
    const s = o.proxy, a = process.env.NODE_ENV !== "production" ? br[t] : t;
    for (; n; ) {
      const u = n.ec;
      if (u) {
        for (let x = 0; x < u.length; x++)
          if (u[x](e, s, a) === !1)
            return;
      }
      n = n.parent;
    }
    const p = o.appContext.config.errorHandler;
    if (p) {
      $e(
        p,
        null,
        10,
        [e, s, a]
      );
      return;
    }
  }
  Es(e, t, i, r);
}
function Es(e, o, t, r = !0) {
  if (process.env.NODE_ENV !== "production") {
    const i = br[o];
    if (t && Qo(t), w(`Unhandled error${i ? ` during execution of ${i}` : ""}`), t && Go(), r)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Ao = !1, Jt = !1;
const G = [];
let we = 0;
const bo = [];
let ye = null, Se = 0;
const Ri = /* @__PURE__ */ Promise.resolve();
let _r = null;
const Ns = 100;
function Ai(e) {
  const o = _r || Ri;
  return e ? o.then(this ? e.bind(this) : e) : o;
}
function ks(e) {
  let o = we + 1, t = G.length;
  for (; o < t; ) {
    const r = o + t >>> 1;
    Mo(G[r]) < e ? o = r + 1 : t = r;
  }
  return o;
}
function Et(e) {
  (!G.length || !G.includes(
    e,
    Ao && e.allowRecurse ? we + 1 : we
  )) && (e.id == null ? G.push(e) : G.splice(ks(e.id), 0, e), Mi());
}
function Mi() {
  !Ao && !Jt && (Jt = !0, _r = Ri.then(Fi));
}
function Os(e) {
  const o = G.indexOf(e);
  o > we && G.splice(o, 1);
}
function ji(e) {
  V(e) ? bo.push(...e) : (!ye || !ye.includes(
    e,
    e.allowRecurse ? Se + 1 : Se
  )) && bo.push(e), Mi();
}
function Br(e, o = Ao ? we + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); o < G.length; o++) {
    const t = G[o];
    if (t && t.pre) {
      if (process.env.NODE_ENV !== "production" && mr(e, t))
        continue;
      G.splice(o, 1), o--, t();
    }
  }
}
function Si(e) {
  if (bo.length) {
    const o = [...new Set(bo)];
    if (bo.length = 0, ye) {
      ye.push(...o);
      return;
    }
    for (ye = o, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ye.sort((t, r) => Mo(t) - Mo(r)), Se = 0; Se < ye.length; Se++)
      process.env.NODE_ENV !== "production" && mr(e, ye[Se]) || ye[Se]();
    ye = null, Se = 0;
  }
}
const Mo = (e) => e.id == null ? 1 / 0 : e.id, Ds = (e, o) => {
  const t = Mo(e) - Mo(o);
  if (t === 0) {
    if (e.pre && !o.pre)
      return -1;
    if (o.pre && !e.pre)
      return 1;
  }
  return t;
};
function Fi(e) {
  Jt = !1, Ao = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), G.sort(Ds);
  const o = process.env.NODE_ENV !== "production" ? (t) => mr(e, t) : Z;
  try {
    for (we = 0; we < G.length; we++) {
      const t = G[we];
      if (t && t.active !== !1) {
        if (process.env.NODE_ENV !== "production" && o(t))
          continue;
        $e(t, null, 14);
      }
    }
  } finally {
    we = 0, G.length = 0, Si(e), Ao = !1, _r = null, (G.length || bo.length) && Fi(e);
  }
}
function mr(e, o) {
  if (!e.has(o))
    e.set(o, 1);
  else {
    const t = e.get(o);
    if (t > Ns) {
      const r = o.ownerInstance, i = r && bn(r.type);
      return w(
        `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      e.set(o, t + 1);
  }
}
let oo = !1;
const uo = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (lt().__VUE_HMR_RUNTIME__ = {
  createRecord: Pt(Hi),
  rerender: Pt(Ts),
  reload: Pt($s)
});
const io = /* @__PURE__ */ new Map();
function Vs(e) {
  const o = e.type.__hmrId;
  let t = io.get(o);
  t || (Hi(o, e.type), t = io.get(o)), t.instances.add(e);
}
function Cs(e) {
  io.get(e.type.__hmrId).instances.delete(e);
}
function Hi(e, o) {
  return io.has(e) ? !1 : (io.set(e, {
    initialDef: To(o),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function To(e) {
  return _n(e) ? e.__vccOpts : e;
}
function Ts(e, o) {
  const t = io.get(e);
  t && (t.initialDef.render = o, [...t.instances].forEach((r) => {
    o && (r.render = o, To(r.type).render = o), r.renderCache = [], oo = !0, r.update(), oo = !1;
  }));
}
function $s(e, o) {
  const t = io.get(e);
  if (!t)
    return;
  o = To(o), Ur(t.initialDef, o);
  const r = [...t.instances];
  for (const i of r) {
    const n = To(i.type);
    uo.has(n) || (n !== t.initialDef && Ur(n, o), uo.add(n)), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (uo.add(n), i.ceReload(o.styles), uo.delete(n)) : i.parent ? Et(i.parent.update) : i.appContext.reload ? i.appContext.reload() : typeof window != "undefined" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  ji(() => {
    for (const i of r)
      uo.delete(
        To(i.type)
      );
  });
}
function Ur(e, o) {
  U(e, o);
  for (const t in e)
    t !== "__file" && !(t in o) && delete e[t];
}
function Pt(e) {
  return (o, t) => {
    try {
      return e(o, t);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Ee, Vo = [], Yt = !1;
function Ho(e, ...o) {
  Ee ? Ee.emit(e, ...o) : Yt || Vo.push({ event: e, args: o });
}
function Li(e, o) {
  var t, r;
  Ee = e, Ee ? (Ee.enabled = !0, Vo.forEach(({ event: i, args: n }) => Ee.emit(i, ...n)), Vo = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window != "undefined" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((r = (t = window.navigator) == null ? void 0 : t.userAgent) != null && r.includes("jsdom")) ? ((o.__VUE_DEVTOOLS_HOOK_REPLAY__ = o.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((n) => {
    Li(n, o);
  }), setTimeout(() => {
    Ee || (o.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Yt = !0, Vo = []);
  }, 3e3)) : (Yt = !0, Vo = []);
}
function zs(e, o) {
  Ho("app:init", e, o, {
    Fragment: le,
    Text: Lo,
    Comment: ae,
    Static: tt
  });
}
function Ps(e) {
  Ho("app:unmount", e);
}
const Is = /* @__PURE__ */ vr(
  "component:added"
  /* COMPONENT_ADDED */
), Bi = /* @__PURE__ */ vr(
  "component:updated"
  /* COMPONENT_UPDATED */
), Rs = /* @__PURE__ */ vr(
  "component:removed"
  /* COMPONENT_REMOVED */
), As = (e) => {
  Ee && typeof Ee.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Ee.cleanupBuffer(e) && Rs(e);
};
function vr(e) {
  return (o) => {
    Ho(
      e,
      o.appContext.app,
      o.uid,
      o.parent ? o.parent.uid : void 0,
      o
    );
  };
}
const Ms = /* @__PURE__ */ Ui(
  "perf:start"
  /* PERFORMANCE_START */
), js = /* @__PURE__ */ Ui(
  "perf:end"
  /* PERFORMANCE_END */
);
function Ui(e) {
  return (o, t, r) => {
    Ho(e, o.appContext.app, o.uid, o, t, r);
  };
}
function Ss(e, o, t) {
  Ho(
    "component:emit",
    e.appContext.app,
    e,
    o,
    t
  );
}
function Fs(e, o, ...t) {
  if (e.isUnmounted)
    return;
  const r = e.vnode.props || L;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: x,
      propsOptions: [d]
    } = e;
    if (x)
      if (!(o in x))
        (!d || !(Ye(o) in d)) && w(
          `Component emitted event "${o}" but it is neither declared in the emits option nor as an "${Ye(o)}" prop.`
        );
      else {
        const m = x[o];
        T(m) && (m(...t) || w(
          `Invalid event arguments: event validation failed for event "${o}".`
        ));
      }
  }
  let i = t;
  const n = o.startsWith("update:"), s = n && o.slice(7);
  if (s && s in r) {
    const x = `${s === "modelValue" ? "model" : s}Modifiers`, { number: d, trim: m } = r[x] || L;
    m && (i = t.map((O) => q(O) ? O.trim() : O)), d && (i = t.map(Cn));
  }
  if (process.env.NODE_ENV !== "production" && Ss(e, o, i), process.env.NODE_ENV !== "production") {
    const x = o.toLowerCase();
    x !== o && r[Ye(x)] && w(
      `Event "${x}" is emitted in component ${Vt(
        e,
        e.type
      )} but the handler is registered for "${o}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${se(o)}" instead of "${o}".`
    );
  }
  let a, p = r[a = Ye(o)] || // also try camelCase event handler (#2249)
  r[a = Ye(Te(o))];
  !p && n && (p = r[a = Ye(se(o))]), p && ge(
    p,
    e,
    6,
    i
  );
  const u = r[a + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, ge(
      u,
      e,
      6,
      i
    );
  }
}
function Ki(e, o, t = !1) {
  const r = o.emitsCache, i = r.get(e);
  if (i !== void 0)
    return i;
  const n = e.emits;
  let s = {}, a = !1;
  if (!T(e)) {
    const p = (u) => {
      const x = Ki(u, o, !0);
      x && (a = !0, U(s, x));
    };
    !t && o.mixins.length && o.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  return !n && !a ? (B(e) && r.set(e, null), null) : (V(n) ? n.forEach((p) => s[p] = null) : U(s, n), B(e) && r.set(e, s), s);
}
function Nt(e, o) {
  return !e || !Fo(o) ? !1 : (o = o.slice(2).replace(/Once$/, ""), P(e, o[0].toLowerCase() + o.slice(1)) || P(e, se(o)) || P(e, o));
}
let ee = null, Wi = null;
function ct(e) {
  const o = ee;
  return ee = e, Wi = e && e.type.__scopeId || null, o;
}
function Hs(e, o = ee, t) {
  if (!o || e._n)
    return e;
  const r = (...i) => {
    r._d && ti(-1);
    const n = ct(o);
    let s;
    try {
      s = e(...i);
    } finally {
      ct(n), r._d && ti(1);
    }
    return process.env.NODE_ENV !== "production" && Bi(o), s;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
let Zt = !1;
function pt() {
  Zt = !0;
}
function It(e) {
  const {
    type: o,
    vnode: t,
    proxy: r,
    withProxy: i,
    props: n,
    propsOptions: [s],
    slots: a,
    attrs: p,
    emit: u,
    render: x,
    renderCache: d,
    data: m,
    setupState: O,
    ctx: j,
    inheritAttrs: R
  } = e;
  let K, J;
  const he = ct(e);
  process.env.NODE_ENV !== "production" && (Zt = !1);
  try {
    if (t.shapeFlag & 4) {
      const $ = i || r;
      K = fe(
        x.call(
          $,
          $,
          d,
          n,
          O,
          m,
          j
        )
      ), J = p;
    } else {
      const $ = o;
      process.env.NODE_ENV !== "production" && p === n && pt(), K = fe(
        $.length > 1 ? $(
          n,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return pt(), p;
            },
            slots: a,
            emit: u
          } : { attrs: p, slots: a, emit: u }
        ) : $(
          n,
          null
          /* we know it doesn't need it */
        )
      ), J = o.props ? p : Bs(p);
    }
  } catch ($) {
    zo.length = 0, wt($, e, 1), K = Ne(ae);
  }
  let S = K, be;
  if (process.env.NODE_ENV !== "production" && K.patchFlag > 0 && K.patchFlag & 2048 && ([S, be] = Ls(K)), J && R !== !1) {
    const $ = Object.keys(J), { shapeFlag: We } = S;
    if ($.length) {
      if (We & 7)
        s && $.some(nt) && (J = Us(
          J,
          s
        )), S = Ke(S, J);
      else if (process.env.NODE_ENV !== "production" && !Zt && S.type !== ae) {
        const Pe = Object.keys(p), Ie = [], ce = [];
        for (let Oe = 0, Re = Pe.length; Oe < Re; Oe++) {
          const pe = Pe[Oe];
          Fo(pe) ? nt(pe) || Ie.push(pe[2].toLowerCase() + pe.slice(3)) : ce.push(pe);
        }
        ce.length && w(
          `Extraneous non-props attributes (${ce.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), Ie.length && w(
          `Extraneous non-emits event listeners (${Ie.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return t.dirs && (process.env.NODE_ENV !== "production" && !Kr(S) && w(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), S = Ke(S), S.dirs = S.dirs ? S.dirs.concat(t.dirs) : t.dirs), t.transition && (process.env.NODE_ENV !== "production" && !Kr(S) && w(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), S.transition = t.transition), process.env.NODE_ENV !== "production" && be ? be(S) : K = S, ct(he), K;
}
const Ls = (e) => {
  const o = e.children, t = e.dynamicChildren, r = qi(o);
  if (!r)
    return [e, void 0];
  const i = o.indexOf(r), n = t ? t.indexOf(r) : -1, s = (a) => {
    o[i] = a, t && (n > -1 ? t[n] = a : a.patchFlag > 0 && (e.dynamicChildren = [...t, a]));
  };
  return [fe(r), s];
};
function qi(e) {
  let o;
  for (let t = 0; t < e.length; t++) {
    const r = e[t];
    if (Ot(r)) {
      if (r.type !== ae || r.children === "v-if") {
        if (o)
          return;
        o = r;
      }
    } else
      return;
  }
  return o;
}
const Bs = (e) => {
  let o;
  for (const t in e)
    (t === "class" || t === "style" || Fo(t)) && ((o || (o = {}))[t] = e[t]);
  return o;
}, Us = (e, o) => {
  const t = {};
  for (const r in e)
    (!nt(r) || !(r.slice(9) in o)) && (t[r] = e[r]);
  return t;
}, Kr = (e) => e.shapeFlag & 7 || e.type === ae;
function Ks(e, o, t) {
  const { props: r, children: i, component: n } = e, { props: s, children: a, patchFlag: p } = o, u = n.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (i || a) && oo || o.dirs || o.transition)
    return !0;
  if (t && p >= 0) {
    if (p & 1024)
      return !0;
    if (p & 16)
      return r ? Wr(r, s, u) : !!s;
    if (p & 8) {
      const x = o.dynamicProps;
      for (let d = 0; d < x.length; d++) {
        const m = x[d];
        if (s[m] !== r[m] && !Nt(u, m))
          return !0;
      }
    }
  } else
    return (i || a) && (!a || !a.$stable) ? !0 : r === s ? !1 : r ? s ? Wr(r, s, u) : !0 : !!s;
  return !1;
}
function Wr(e, o, t) {
  const r = Object.keys(o);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < r.length; i++) {
    const n = r[i];
    if (o[n] !== e[n] && !Nt(t, n))
      return !0;
  }
  return !1;
}
function Ws({ vnode: e, parent: o }, t) {
  for (; o && o.subTree === e; )
    (e = o.vnode).el = t, o = o.parent;
}
const qs = (e) => e.__isSuspense;
function Js(e, o) {
  o && o.pendingBranch ? V(e) ? o.effects.push(...e) : o.effects.push(e) : ji(e);
}
const Zo = {};
function Rt(e, o, t) {
  return process.env.NODE_ENV !== "production" && !T(o) && w(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Ji(e, o, t);
}
function Ji(e, o, { immediate: t, deep: r, flush: i, onTrack: n, onTrigger: s } = L) {
  var a;
  process.env.NODE_ENV !== "production" && !o && (t !== void 0 && w(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && w(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const p = ($) => {
    w(
      "Invalid watch source: ",
      $,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = jn() === ((a = X) == null ? void 0 : a.scope) ? X : null;
  let x, d = !1, m = !1;
  if (Y(e) ? (x = () => e.value, d = at(e)) : Ge(e) ? (x = () => e, r = !0) : V(e) ? (m = !0, d = e.some(($) => Ge($) || at($)), x = () => e.map(($) => {
    if (Y($))
      return $.value;
    if (Ge($))
      return xo($);
    if (T($))
      return $e($, u, 2);
    process.env.NODE_ENV !== "production" && p($);
  })) : T(e) ? o ? x = () => $e(e, u, 2) : x = () => {
    if (!(u && u.isUnmounted))
      return O && O(), ge(
        e,
        u,
        3,
        [j]
      );
  } : (x = Z, process.env.NODE_ENV !== "production" && p(e)), o && r) {
    const $ = x;
    x = () => xo($());
  }
  let O, j = ($) => {
    O = S.onStop = () => {
      $e($, u, 4);
    };
  }, R;
  if (So)
    if (j = Z, o ? t && ge(o, u, 3, [
      x(),
      m ? [] : void 0,
      j
    ]) : x(), i === "sync") {
      const $ = oa();
      R = $.__watcherHandles || ($.__watcherHandles = []);
    } else
      return Z;
  let K = m ? new Array(e.length).fill(Zo) : Zo;
  const J = () => {
    if (S.active)
      if (o) {
        const $ = S.run();
        (r || d || (m ? $.some(
          (We, Pe) => Po(We, K[Pe])
        ) : Po($, K))) && (O && O(), ge(o, u, 3, [
          $,
          // pass undefined as the old value when it's changed for the first time
          K === Zo ? void 0 : m && K[0] === Zo ? [] : K,
          j
        ]), K = $);
      } else
        S.run();
  };
  J.allowRecurse = !!o;
  let he;
  i === "sync" ? he = J : i === "post" ? he = () => ne(J, u && u.suspense) : (J.pre = !0, u && (J.id = u.uid), he = () => Et(J));
  const S = new fr(x, he);
  process.env.NODE_ENV !== "production" && (S.onTrack = n, S.onTrigger = s), o ? t ? J() : K = S.run() : i === "post" ? ne(
    S.run.bind(S),
    u && u.suspense
  ) : S.run();
  const be = () => {
    S.stop(), u && u.scope && lr(u.scope.effects, S);
  };
  return R && R.push(be), be;
}
function Ys(e, o, t) {
  const r = this.proxy, i = q(e) ? e.includes(".") ? Yi(r, e) : () => r[e] : e.bind(r, r);
  let n;
  T(o) ? n = o : (n = o.handler, t = o);
  const s = X;
  _o(this);
  const a = Ji(i, n.bind(r), t);
  return s ? _o(s) : ro(), a;
}
function Yi(e, o) {
  const t = o.split(".");
  return () => {
    let r = e;
    for (let i = 0; i < t.length && r; i++)
      r = r[t[i]];
    return r;
  };
}
function xo(e, o) {
  if (!B(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Set(), o.has(e)))
    return e;
  if (o.add(e), Y(e))
    xo(e.value, o);
  else if (V(e))
    for (let t = 0; t < e.length; t++)
      xo(e[t], o);
  else if (En(e) || ho(e))
    e.forEach((t) => {
      xo(t, o);
    });
  else if (kn(e))
    for (const t in e)
      xo(e[t], o);
  return e;
}
function Zi(e) {
  On(e) && w("Do not use built-in directive ids as custom directive id: " + e);
}
function qe(e, o, t, r) {
  const i = e.dirs, n = o && o.dirs;
  for (let s = 0; s < i.length; s++) {
    const a = i[s];
    n && (a.oldValue = n[s].value);
    let p = a.dir[r];
    p && (no(), ge(p, t, 8, [
      e.el,
      a,
      e,
      o
    ]), so());
  }
}
function Zs(e, o) {
  return T(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => U({ name: e.name }, o, { setup: e }))()
  ) : e;
}
const $o = (e) => !!e.type.__asyncLoader, yr = (e) => e.type.__isKeepAlive;
function Xs(e, o) {
  Xi(e, "a", o);
}
function Qs(e, o) {
  Xi(e, "da", o);
}
function Xi(e, o, t = X) {
  const r = e.__wdc || (e.__wdc = () => {
    let i = t;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (kt(o, r, t), t) {
    let i = t.parent;
    for (; i && i.parent; )
      yr(i.parent.vnode) && Gs(r, o, t, i), i = i.parent;
  }
}
function Gs(e, o, t, r) {
  const i = kt(
    o,
    e,
    r,
    !0
    /* prepend */
  );
  Gi(() => {
    lr(r[o], i);
  }, t);
}
function kt(e, o, t = X, r = !1) {
  if (t) {
    const i = t[e] || (t[e] = []), n = o.__weh || (o.__weh = (...s) => {
      if (t.isUnmounted)
        return;
      no(), _o(t);
      const a = ge(o, t, e, s);
      return ro(), so(), a;
    });
    return r ? i.unshift(n) : i.push(n), n;
  } else if (process.env.NODE_ENV !== "production") {
    const i = Ye(br[e].replace(/ hook$/, ""));
    w(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const ze = (e) => (o, t = X) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!So || e === "sp") && kt(e, (...r) => o(...r), t)
), el = ze("bm"), Qi = ze("m"), ol = ze("bu"), tl = ze("u"), rl = ze("bum"), Gi = ze("um"), il = ze("sp"), nl = ze(
  "rtg"
), sl = ze(
  "rtc"
);
function ll(e, o = X) {
  kt("ec", e, o);
}
const al = Symbol.for("v-ndc");
function At(e, o, t = {}, r, i) {
  if (ee.isCE || ee.parent && $o(ee.parent) && ee.parent.isCE)
    return o !== "default" && (t.name = o), Ne("slot", t, r && r());
  let n = e[o];
  process.env.NODE_ENV !== "production" && n && n.length > 1 && (w(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), n = () => []), n && n._c && (n._d = !1), rt();
  const s = n && en(n(t)), a = jl(
    le,
    {
      key: t.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      s && s.key || `_${o}`
    },
    s || (r ? r() : []),
    s && e._ === 1 ? 64 : -2
  );
  return !i && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), n && n._c && (n._d = !0), a;
}
function en(e) {
  return e.some((o) => Ot(o) ? !(o.type === ae || o.type === le && !en(o.children)) : !0) ? e : null;
}
const Xt = (e) => e ? gn(e) ? Dr(e) || e.proxy : Xt(e.parent) : null, to = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ U(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Do(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Do(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Do(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Do(e.refs) : e.refs,
    $parent: (e) => Xt(e.parent),
    $root: (e) => Xt(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Er(e),
    $forceUpdate: (e) => e.f || (e.f = () => Et(e.update)),
    $nextTick: (e) => e.n || (e.n = Ai.bind(e.proxy)),
    $watch: (e) => Ys.bind(e)
  })
), wr = (e) => e === "_" || e === "$", Mt = (e, o) => e !== L && !e.__isScriptSetup && P(e, o), on = {
  get({ _: e }, o) {
    const { ctx: t, setupState: r, data: i, props: n, accessCache: s, type: a, appContext: p } = e;
    if (process.env.NODE_ENV !== "production" && o === "__isVue")
      return !0;
    let u;
    if (o[0] !== "$") {
      const O = s[o];
      if (O !== void 0)
        switch (O) {
          case 1:
            return r[o];
          case 2:
            return i[o];
          case 4:
            return t[o];
          case 3:
            return n[o];
        }
      else {
        if (Mt(r, o))
          return s[o] = 1, r[o];
        if (i !== L && P(i, o))
          return s[o] = 2, i[o];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && P(u, o)
        )
          return s[o] = 3, n[o];
        if (t !== L && P(t, o))
          return s[o] = 4, t[o];
        Qt && (s[o] = 0);
      }
    }
    const x = to[o];
    let d, m;
    if (x)
      return o === "$attrs" ? (Q(e, "get", o), process.env.NODE_ENV !== "production" && pt()) : process.env.NODE_ENV !== "production" && o === "$slots" && Q(e, "get", o), x(e);
    if (
      // css module (injected by vue-loader)
      (d = a.__cssModules) && (d = d[o])
    )
      return d;
    if (t !== L && P(t, o))
      return s[o] = 4, t[o];
    if (
      // global properties
      m = p.config.globalProperties, P(m, o)
    )
      return m[o];
    process.env.NODE_ENV !== "production" && ee && (!q(o) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    o.indexOf("__v") !== 0) && (i !== L && wr(o[0]) && P(i, o) ? w(
      `Property ${JSON.stringify(
        o
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === ee && w(
      `Property ${JSON.stringify(o)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, o, t) {
    const { data: r, setupState: i, ctx: n } = e;
    return Mt(i, o) ? (i[o] = t, !0) : process.env.NODE_ENV !== "production" && i.__isScriptSetup && P(i, o) ? (w(`Cannot mutate <script setup> binding "${o}" from Options API.`), !1) : r !== L && P(r, o) ? (r[o] = t, !0) : P(e.props, o) ? (process.env.NODE_ENV !== "production" && w(`Attempting to mutate prop "${o}". Props are readonly.`), !1) : o[0] === "$" && o.slice(1) in e ? (process.env.NODE_ENV !== "production" && w(
      `Attempting to mutate public property "${o}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && o in e.appContext.config.globalProperties ? Object.defineProperty(n, o, {
      enumerable: !0,
      configurable: !0,
      value: t
    }) : n[o] = t, !0);
  },
  has({
    _: { data: e, setupState: o, accessCache: t, ctx: r, appContext: i, propsOptions: n }
  }, s) {
    let a;
    return !!t[s] || e !== L && P(e, s) || Mt(o, s) || (a = n[0]) && P(a, s) || P(r, s) || P(to, s) || P(i.config.globalProperties, s);
  },
  defineProperty(e, o, t) {
    return t.get != null ? e._.accessCache[o] = 0 : P(t, "value") && this.set(e, o, t.value, null), Reflect.defineProperty(e, o, t);
  }
};
process.env.NODE_ENV !== "production" && (on.ownKeys = (e) => (w(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function cl(e) {
  const o = {};
  return Object.defineProperty(o, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(to).forEach((t) => {
    Object.defineProperty(o, t, {
      configurable: !0,
      enumerable: !1,
      get: () => to[t](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Z
    });
  }), o;
}
function pl(e) {
  const {
    ctx: o,
    propsOptions: [t]
  } = e;
  t && Object.keys(t).forEach((r) => {
    Object.defineProperty(o, r, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[r],
      set: Z
    });
  });
}
function ul(e) {
  const { ctx: o, setupState: t } = e;
  Object.keys(z(t)).forEach((r) => {
    if (!t.__isScriptSetup) {
      if (wr(r[0])) {
        w(
          `setup() return property ${JSON.stringify(
            r
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(o, r, {
        enumerable: !0,
        configurable: !0,
        get: () => t[r],
        set: Z
      });
    }
  });
}
function qr(e) {
  return V(e) ? e.reduce(
    (o, t) => (o[t] = null, o),
    {}
  ) : e;
}
function dl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (o, t) => {
    e[t] ? w(`${o} property "${t}" is already defined in ${e[t]}.`) : e[t] = o;
  };
}
let Qt = !0;
function fl(e) {
  const o = Er(e), t = e.proxy, r = e.ctx;
  Qt = !1, o.beforeCreate && Jr(o.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: n,
    methods: s,
    watch: a,
    provide: p,
    inject: u,
    // lifecycle
    created: x,
    beforeMount: d,
    mounted: m,
    beforeUpdate: O,
    updated: j,
    activated: R,
    deactivated: K,
    beforeDestroy: J,
    beforeUnmount: he,
    destroyed: S,
    unmounted: be,
    render: $,
    renderTracked: We,
    renderTriggered: Pe,
    errorCaptured: Ie,
    serverPrefetch: ce,
    // public API
    expose: Oe,
    inheritAttrs: Re,
    // assets
    components: pe,
    directives: Bo,
    filters: Cr
  } = o, Ae = process.env.NODE_ENV !== "production" ? dl() : null;
  if (process.env.NODE_ENV !== "production") {
    const [A] = e.propsOptions;
    if (A)
      for (const M in A)
        Ae("Props", M);
  }
  if (u && xl(u, r, Ae), s)
    for (const A in s) {
      const M = s[A];
      T(M) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(r, A, {
        value: M.bind(t),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[A] = M.bind(t), process.env.NODE_ENV !== "production" && Ae("Methods", A)) : process.env.NODE_ENV !== "production" && w(
        `Method "${A}" has type "${typeof M}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    process.env.NODE_ENV !== "production" && !T(i) && w(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const A = i.call(t, t);
    if (process.env.NODE_ENV !== "production" && cr(A) && w(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !B(A))
      process.env.NODE_ENV !== "production" && w("data() should return an object.");
    else if (e.data = gr(A), process.env.NODE_ENV !== "production")
      for (const M in A)
        Ae("Data", M), wr(M[0]) || Object.defineProperty(r, M, {
          configurable: !0,
          enumerable: !0,
          get: () => A[M],
          set: Z
        });
  }
  if (Qt = !0, n)
    for (const A in n) {
      const M = n[A], _e = T(M) ? M.bind(t, t) : T(M.get) ? M.get.bind(t, t) : Z;
      process.env.NODE_ENV !== "production" && _e === Z && w(`Computed property "${A}" has no getter.`);
      const Ct = !T(M) && T(M.set) ? M.set.bind(t) : process.env.NODE_ENV !== "production" ? () => {
        w(
          `Write operation failed: computed property "${A}" is readonly.`
        );
      } : Z, vo = nr({
        get: _e,
        set: Ct
      });
      Object.defineProperty(r, A, {
        enumerable: !0,
        configurable: !0,
        get: () => vo.value,
        set: (lo) => vo.value = lo
      }), process.env.NODE_ENV !== "production" && Ae("Computed", A);
    }
  if (a)
    for (const A in a)
      tn(a[A], r, t, A);
  if (p) {
    const A = T(p) ? p.call(t) : p;
    Reflect.ownKeys(A).forEach((M) => {
      vl(M, A[M]);
    });
  }
  x && Jr(x, e, "c");
  function ie(A, M) {
    V(M) ? M.forEach((_e) => A(_e.bind(t))) : M && A(M.bind(t));
  }
  if (ie(el, d), ie(Qi, m), ie(ol, O), ie(tl, j), ie(Xs, R), ie(Qs, K), ie(ll, Ie), ie(sl, We), ie(nl, Pe), ie(rl, he), ie(Gi, be), ie(il, ce), V(Oe))
    if (Oe.length) {
      const A = e.exposed || (e.exposed = {});
      Oe.forEach((M) => {
        Object.defineProperty(A, M, {
          get: () => t[M],
          set: (_e) => t[M] = _e
        });
      });
    } else
      e.exposed || (e.exposed = {});
  $ && e.render === Z && (e.render = $), Re != null && (e.inheritAttrs = Re), pe && (e.components = pe), Bo && (e.directives = Bo);
}
function xl(e, o, t = Z) {
  V(e) && (e = Gt(e));
  for (const r in e) {
    const i = e[r];
    let n;
    B(i) ? "default" in i ? n = et(
      i.from || r,
      i.default,
      !0
      /* treat default function as factory */
    ) : n = et(i.from || r) : n = et(i), Y(n) ? Object.defineProperty(o, r, {
      enumerable: !0,
      configurable: !0,
      get: () => n.value,
      set: (s) => n.value = s
    }) : o[r] = n, process.env.NODE_ENV !== "production" && t("Inject", r);
  }
}
function Jr(e, o, t) {
  ge(
    V(e) ? e.map((r) => r.bind(o.proxy)) : e.bind(o.proxy),
    o,
    t
  );
}
function tn(e, o, t, r) {
  const i = r.includes(".") ? Yi(t, r) : () => t[r];
  if (q(e)) {
    const n = o[e];
    T(n) ? Rt(i, n) : process.env.NODE_ENV !== "production" && w(`Invalid watch handler specified by key "${e}"`, n);
  } else if (T(e))
    Rt(i, e.bind(t));
  else if (B(e))
    if (V(e))
      e.forEach((n) => tn(n, o, t, r));
    else {
      const n = T(e.handler) ? e.handler.bind(t) : o[e.handler];
      T(n) ? Rt(i, n, e) : process.env.NODE_ENV !== "production" && w(`Invalid watch handler specified by key "${e.handler}"`, n);
    }
  else
    process.env.NODE_ENV !== "production" && w(`Invalid watch option: "${r}"`, e);
}
function Er(e) {
  const o = e.type, { mixins: t, extends: r } = o, {
    mixins: i,
    optionsCache: n,
    config: { optionMergeStrategies: s }
  } = e.appContext, a = n.get(o);
  let p;
  return a ? p = a : !i.length && !t && !r ? p = o : (p = {}, i.length && i.forEach(
    (u) => ut(p, u, s, !0)
  ), ut(p, o, s)), B(o) && n.set(o, p), p;
}
function ut(e, o, t, r = !1) {
  const { mixins: i, extends: n } = o;
  n && ut(e, n, t, !0), i && i.forEach(
    (s) => ut(e, s, t, !0)
  );
  for (const s in o)
    if (r && s === "expose")
      process.env.NODE_ENV !== "production" && w(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = gl[s] || t && t[s];
      e[s] = a ? a(e[s], o[s]) : o[s];
    }
  return e;
}
const gl = {
  data: Yr,
  props: Zr,
  emits: Zr,
  // objects
  methods: Co,
  computed: Co,
  // lifecycle
  beforeCreate: te,
  created: te,
  beforeMount: te,
  mounted: te,
  beforeUpdate: te,
  updated: te,
  beforeDestroy: te,
  beforeUnmount: te,
  destroyed: te,
  unmounted: te,
  activated: te,
  deactivated: te,
  errorCaptured: te,
  serverPrefetch: te,
  // assets
  components: Co,
  directives: Co,
  // watch
  watch: bl,
  // provide / inject
  provide: Yr,
  inject: hl
};
function Yr(e, o) {
  return o ? e ? function() {
    return U(
      T(e) ? e.call(this, this) : e,
      T(o) ? o.call(this, this) : o
    );
  } : o : e;
}
function hl(e, o) {
  return Co(Gt(e), Gt(o));
}
function Gt(e) {
  if (V(e)) {
    const o = {};
    for (let t = 0; t < e.length; t++)
      o[e[t]] = e[t];
    return o;
  }
  return e;
}
function te(e, o) {
  return e ? [...new Set([].concat(e, o))] : o;
}
function Co(e, o) {
  return e ? U(/* @__PURE__ */ Object.create(null), e, o) : o;
}
function Zr(e, o) {
  return e ? V(e) && V(o) ? [.../* @__PURE__ */ new Set([...e, ...o])] : U(
    /* @__PURE__ */ Object.create(null),
    qr(e),
    qr(o != null ? o : {})
  ) : o;
}
function bl(e, o) {
  if (!e)
    return o;
  if (!o)
    return e;
  const t = U(/* @__PURE__ */ Object.create(null), e);
  for (const r in o)
    t[r] = te(e[r], o[r]);
  return t;
}
function rn() {
  return {
    app: null,
    config: {
      isNativeTag: gi,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let _l = 0;
function ml(e, o) {
  return function(r, i = null) {
    T(r) || (r = U({}, r)), i != null && !B(i) && (process.env.NODE_ENV !== "production" && w("root props passed to app.mount() must be an object."), i = null);
    const n = rn();
    process.env.NODE_ENV !== "production" && Object.defineProperty(n.config, "unwrapInjectedRef", {
      get() {
        return !0;
      },
      set() {
        w(
          "app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API."
        );
      }
    });
    const s = /* @__PURE__ */ new Set();
    let a = !1;
    const p = n.app = {
      _uid: _l++,
      _component: r,
      _props: i,
      _container: null,
      _context: n,
      _instance: null,
      version: si,
      get config() {
        return n.config;
      },
      set config(u) {
        process.env.NODE_ENV !== "production" && w(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(u, ...x) {
        return s.has(u) ? process.env.NODE_ENV !== "production" && w("Plugin has already been applied to target app.") : u && T(u.install) ? (s.add(u), u.install(p, ...x)) : T(u) ? (s.add(u), u(p, ...x)) : process.env.NODE_ENV !== "production" && w(
          'A plugin must either be a function or an object with an "install" function.'
        ), p;
      },
      mixin(u) {
        return n.mixins.includes(u) ? process.env.NODE_ENV !== "production" && w(
          "Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")
        ) : n.mixins.push(u), p;
      },
      component(u, x) {
        return process.env.NODE_ENV !== "production" && rr(u, n.config), x ? (process.env.NODE_ENV !== "production" && n.components[u] && w(`Component "${u}" has already been registered in target app.`), n.components[u] = x, p) : n.components[u];
      },
      directive(u, x) {
        return process.env.NODE_ENV !== "production" && Zi(u), x ? (process.env.NODE_ENV !== "production" && n.directives[u] && w(`Directive "${u}" has already been registered in target app.`), n.directives[u] = x, p) : n.directives[u];
      },
      mount(u, x, d) {
        if (a)
          process.env.NODE_ENV !== "production" && w(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && u.__vue_app__ && w(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const m = Ne(
            r,
            i
          );
          return m.appContext = n, process.env.NODE_ENV !== "production" && (n.reload = () => {
            e(Ke(m), u, d);
          }), x && o ? o(m, u) : e(m, u, d), a = !0, p._container = u, u.__vue_app__ = p, process.env.NODE_ENV !== "production" && (p._instance = m.component, zs(p, si)), Dr(m.component) || m.component.proxy;
        }
      },
      unmount() {
        a ? (e(null, p._container), process.env.NODE_ENV !== "production" && (p._instance = null, Ps(p)), delete p._container.__vue_app__) : process.env.NODE_ENV !== "production" && w("Cannot unmount an app that is not mounted.");
      },
      provide(u, x) {
        return process.env.NODE_ENV !== "production" && u in n.provides && w(
          `App already provides property with key "${String(u)}". It will be overwritten with the new value.`
        ), n.provides[u] = x, p;
      },
      runWithContext(u) {
        dt = p;
        try {
          return u();
        } finally {
          dt = null;
        }
      }
    };
    return p;
  };
}
let dt = null;
function vl(e, o) {
  if (!X)
    process.env.NODE_ENV !== "production" && w("provide() can only be used inside setup().");
  else {
    let t = X.provides;
    const r = X.parent && X.parent.provides;
    r === t && (t = X.provides = Object.create(r)), t[e] = o;
  }
}
function et(e, o, t = !1) {
  const r = X || ee;
  if (r || dt) {
    const i = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : dt._context.provides;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return t && T(o) ? o.call(r && r.proxy) : o;
    process.env.NODE_ENV !== "production" && w(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && w("inject() can only be used inside setup() or functional components.");
}
function yl(e, o, t, r = !1) {
  const i = {}, n = {};
  st(n, Dt, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), nn(e, o, i, n);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  process.env.NODE_ENV !== "production" && ln(o || {}, i, e), t ? e.props = r ? i : ds(i) : e.type.props ? e.props = i : e.props = n, e.attrs = n;
}
function wl(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function El(e, o, t, r) {
  const {
    props: i,
    attrs: n,
    vnode: { patchFlag: s }
  } = e, a = z(i), [p] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && wl(e)) && (r || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const x = e.vnode.dynamicProps;
      for (let d = 0; d < x.length; d++) {
        let m = x[d];
        if (Nt(e.emitsOptions, m))
          continue;
        const O = o[m];
        if (p)
          if (P(n, m))
            O !== n[m] && (n[m] = O, u = !0);
          else {
            const j = Te(m);
            i[j] = er(
              p,
              a,
              j,
              O,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          O !== n[m] && (n[m] = O, u = !0);
      }
    }
  } else {
    nn(e, o, i, n) && (u = !0);
    let x;
    for (const d in a)
      (!o || // for camelCase
      !P(o, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((x = se(d)) === d || !P(o, x))) && (p ? t && // for camelCase
      (t[d] !== void 0 || // for kebab-case
      t[x] !== void 0) && (i[d] = er(
        p,
        a,
        d,
        void 0,
        e,
        !0
        /* isAbsent */
      )) : delete i[d]);
    if (n !== a)
      for (const d in n)
        (!o || !P(o, d)) && (delete n[d], u = !0);
  }
  u && ke(e, "set", "$attrs"), process.env.NODE_ENV !== "production" && ln(o || {}, i, e);
}
function nn(e, o, t, r) {
  const [i, n] = e.propsOptions;
  let s = !1, a;
  if (o)
    for (let p in o) {
      if (Xo(p))
        continue;
      const u = o[p];
      let x;
      i && P(i, x = Te(p)) ? !n || !n.includes(x) ? t[x] = u : (a || (a = {}))[x] = u : Nt(e.emitsOptions, p) || (!(p in r) || u !== r[p]) && (r[p] = u, s = !0);
    }
  if (n) {
    const p = z(t), u = a || L;
    for (let x = 0; x < n.length; x++) {
      const d = n[x];
      t[d] = er(
        i,
        p,
        d,
        u[d],
        e,
        !P(u, d)
      );
    }
  }
  return s;
}
function er(e, o, t, r, i, n) {
  const s = e[t];
  if (s != null) {
    const a = P(s, "default");
    if (a && r === void 0) {
      const p = s.default;
      if (s.type !== Function && !s.skipFactory && T(p)) {
        const { propsDefaults: u } = i;
        t in u ? r = u[t] : (_o(i), r = u[t] = p.call(
          null,
          o
        ), ro());
      } else
        r = p;
    }
    s[
      0
      /* shouldCast */
    ] && (n && !a ? r = !1 : s[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === se(t)) && (r = !0));
  }
  return r;
}
function sn(e, o, t = !1) {
  const r = o.propsCache, i = r.get(e);
  if (i)
    return i;
  const n = e.props, s = {}, a = [];
  let p = !1;
  if (!T(e)) {
    const x = (d) => {
      p = !0;
      const [m, O] = sn(d, o, !0);
      U(s, m), O && a.push(...O);
    };
    !t && o.mixins.length && o.mixins.forEach(x), e.extends && x(e.extends), e.mixins && e.mixins.forEach(x);
  }
  if (!n && !p)
    return B(e) && r.set(e, go), go;
  if (V(n))
    for (let x = 0; x < n.length; x++) {
      process.env.NODE_ENV !== "production" && !q(n[x]) && w("props must be strings when using array syntax.", n[x]);
      const d = Te(n[x]);
      Xr(d) && (s[d] = L);
    }
  else if (n) {
    process.env.NODE_ENV !== "production" && !B(n) && w("invalid props options", n);
    for (const x in n) {
      const d = Te(x);
      if (Xr(d)) {
        const m = n[x], O = s[d] = V(m) || T(m) ? { type: m } : U({}, m);
        if (O) {
          const j = Gr(Boolean, O.type), R = Gr(String, O.type);
          O[
            0
            /* shouldCast */
          ] = j > -1, O[
            1
            /* shouldCastTrue */
          ] = R < 0 || j < R, (j > -1 || P(O, "default")) && a.push(d);
        }
      }
    }
  }
  const u = [s, a];
  return B(e) && r.set(e, u), u;
}
function Xr(e) {
  return e[0] !== "$" ? !0 : (process.env.NODE_ENV !== "production" && w(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function or(e) {
  const o = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return o ? o[2] : e === null ? "null" : "";
}
function Qr(e, o) {
  return or(e) === or(o);
}
function Gr(e, o) {
  return V(o) ? o.findIndex((t) => Qr(t, e)) : T(o) && Qr(o, e) ? 0 : -1;
}
function ln(e, o, t) {
  const r = z(o), i = t.propsOptions[0];
  for (const n in i) {
    let s = i[n];
    s != null && Nl(
      n,
      r[n],
      s,
      !P(e, n) && !P(e, se(n))
    );
  }
}
function Nl(e, o, t, r) {
  const { type: i, required: n, validator: s, skipCheck: a } = t;
  if (n && r) {
    w('Missing required prop: "' + e + '"');
    return;
  }
  if (!(o == null && !n)) {
    if (i != null && i !== !0 && !a) {
      let p = !1;
      const u = V(i) ? i : [i], x = [];
      for (let d = 0; d < u.length && !p; d++) {
        const { valid: m, expectedType: O } = Ol(o, u[d]);
        x.push(O || ""), p = m;
      }
      if (!p) {
        w(Dl(e, o, x));
        return;
      }
    }
    s && !s(o) && w('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const kl = /* @__PURE__ */ mo(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Ol(e, o) {
  let t;
  const r = or(o);
  if (kl(r)) {
    const i = typeof e;
    t = i === r.toLowerCase(), !t && i === "object" && (t = e instanceof o);
  } else
    r === "Object" ? t = B(e) : r === "Array" ? t = V(e) : r === "null" ? t = e === null : t = e instanceof o;
  return {
    valid: t,
    expectedType: r
  };
}
function Dl(e, o, t) {
  let r = `Invalid prop: type check failed for prop "${e}". Expected ${t.map(ht).join(" | ")}`;
  const i = t[0], n = pr(o), s = ei(o, i), a = ei(o, n);
  return t.length === 1 && oi(i) && !Vl(i, n) && (r += ` with value ${s}`), r += `, got ${n} `, oi(n) && (r += `with value ${a}.`), r;
}
function ei(e, o) {
  return o === "String" ? `"${e}"` : o === "Number" ? `${Number(e)}` : `${e}`;
}
function oi(e) {
  return ["string", "number", "boolean"].some((t) => e.toLowerCase() === t);
}
function Vl(...e) {
  return e.some((o) => o.toLowerCase() === "boolean");
}
const an = (e) => e[0] === "_" || e === "$stable", Nr = (e) => V(e) ? e.map(fe) : [fe(e)], Cl = (e, o, t) => {
  if (o._n)
    return o;
  const r = Hs((...i) => (process.env.NODE_ENV !== "production" && X && w(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Nr(o(...i))), t);
  return r._c = !1, r;
}, cn = (e, o, t) => {
  const r = e._ctx;
  for (const i in e) {
    if (an(i))
      continue;
    const n = e[i];
    if (T(n))
      o[i] = Cl(i, n, r);
    else if (n != null) {
      process.env.NODE_ENV !== "production" && w(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const s = Nr(n);
      o[i] = () => s;
    }
  }
}, pn = (e, o) => {
  process.env.NODE_ENV !== "production" && !yr(e.vnode) && w(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const t = Nr(o);
  e.slots.default = () => t;
}, Tl = (e, o) => {
  if (e.vnode.shapeFlag & 32) {
    const t = o._;
    t ? (e.slots = z(o), st(o, "_", t)) : cn(
      o,
      e.slots = {}
    );
  } else
    e.slots = {}, o && pn(e, o);
  st(e.slots, Dt, 1);
}, $l = (e, o, t) => {
  const { vnode: r, slots: i } = e;
  let n = !0, s = L;
  if (r.shapeFlag & 32) {
    const a = o._;
    a ? process.env.NODE_ENV !== "production" && oo ? (U(i, o), ke(e, "set", "$slots")) : t && a === 1 ? n = !1 : (U(i, o), !t && a === 1 && delete i._) : (n = !o.$stable, cn(o, i)), s = o;
  } else
    o && (pn(e, o), s = { default: 1 });
  if (n)
    for (const a in i)
      !an(a) && !(a in s) && delete i[a];
};
function tr(e, o, t, r, i = !1) {
  if (V(e)) {
    e.forEach(
      (m, O) => tr(
        m,
        o && (V(o) ? o[O] : o),
        t,
        r,
        i
      )
    );
    return;
  }
  if ($o(r) && !i)
    return;
  const n = r.shapeFlag & 4 ? Dr(r.component) || r.component.proxy : r.el, s = i ? null : n, { i: a, r: p } = e;
  if (process.env.NODE_ENV !== "production" && !a) {
    w(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const u = o && o.r, x = a.refs === L ? a.refs = {} : a.refs, d = a.setupState;
  if (u != null && u !== p && (q(u) ? (x[u] = null, P(d, u) && (d[u] = null)) : Y(u) && (u.value = null)), T(p))
    $e(p, a, 12, [s, x]);
  else {
    const m = q(p), O = Y(p);
    if (m || O) {
      const j = () => {
        if (e.f) {
          const R = m ? P(d, p) ? d[p] : x[p] : p.value;
          i ? V(R) && lr(R, n) : V(R) ? R.includes(n) || R.push(n) : m ? (x[p] = [n], P(d, p) && (d[p] = x[p])) : (p.value = [n], e.k && (x[e.k] = p.value));
        } else
          m ? (x[p] = s, P(d, p) && (d[p] = s)) : O ? (p.value = s, e.k && (x[e.k] = s)) : process.env.NODE_ENV !== "production" && w("Invalid template ref type:", p, `(${typeof p})`);
      };
      s ? (j.id = -1, ne(j, t)) : j();
    } else
      process.env.NODE_ENV !== "production" && w("Invalid template ref type:", p, `(${typeof p})`);
  }
}
let No, He;
function Ve(e, o) {
  e.appContext.config.performance && ft() && He.mark(`vue-${o}-${e.uid}`), process.env.NODE_ENV !== "production" && Ms(e, o, ft() ? He.now() : Date.now());
}
function Ce(e, o) {
  if (e.appContext.config.performance && ft()) {
    const t = `vue-${o}-${e.uid}`, r = t + ":end";
    He.mark(r), He.measure(
      `<${Vt(e, e.type)}> ${o}`,
      t,
      r
    ), He.clearMarks(t), He.clearMarks(r);
  }
  process.env.NODE_ENV !== "production" && js(e, o, ft() ? He.now() : Date.now());
}
function ft() {
  return No !== void 0 || (typeof window != "undefined" && window.performance ? (No = !0, He = window.performance) : No = !1), No;
}
function zl() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const o = e.length > 1;
    console.warn(
      `Feature flag${o ? "s" : ""} ${e.join(", ")} ${o ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const ne = Js;
function Pl(e) {
  return Il(e);
}
function Il(e, o) {
  zl();
  const t = lt();
  t.__VUE__ = !0, process.env.NODE_ENV !== "production" && Li(t.__VUE_DEVTOOLS_GLOBAL_HOOK__, t);
  const {
    insert: r,
    remove: i,
    patchProp: n,
    createElement: s,
    createText: a,
    createComment: p,
    setText: u,
    setElementText: x,
    parentNode: d,
    nextSibling: m,
    setScopeId: O = Z,
    insertStaticContent: j
  } = e, R = (l, c, f, h = null, g = null, v = null, E = !1, _ = null, y = process.env.NODE_ENV !== "production" && oo ? !1 : !!c.dynamicChildren) => {
    if (l === c)
      return;
    l && !ko(l, c) && (h = Uo(l), Me(l, g, v, !0), l = null), c.patchFlag === -2 && (y = !1, c.dynamicChildren = null);
    const { type: b, ref: k, shapeFlag: N } = c;
    switch (b) {
      case Lo:
        K(l, c, f, h);
        break;
      case ae:
        J(l, c, f, h);
        break;
      case tt:
        l == null ? he(c, f, h, E) : process.env.NODE_ENV !== "production" && S(l, c, f, E);
        break;
      case le:
        Bo(
          l,
          c,
          f,
          h,
          g,
          v,
          E,
          _,
          y
        );
        break;
      default:
        N & 1 ? We(
          l,
          c,
          f,
          h,
          g,
          v,
          E,
          _,
          y
        ) : N & 6 ? Cr(
          l,
          c,
          f,
          h,
          g,
          v,
          E,
          _,
          y
        ) : N & 64 || N & 128 ? b.process(
          l,
          c,
          f,
          h,
          g,
          v,
          E,
          _,
          y,
          ao
        ) : process.env.NODE_ENV !== "production" && w("Invalid VNode type:", b, `(${typeof b})`);
    }
    k != null && g && tr(k, l && l.ref, v, c || l, !c);
  }, K = (l, c, f, h) => {
    if (l == null)
      r(
        c.el = a(c.children),
        f,
        h
      );
    else {
      const g = c.el = l.el;
      c.children !== l.children && u(g, c.children);
    }
  }, J = (l, c, f, h) => {
    l == null ? r(
      c.el = p(c.children || ""),
      f,
      h
    ) : c.el = l.el;
  }, he = (l, c, f, h) => {
    [l.el, l.anchor] = j(
      l.children,
      c,
      f,
      h,
      l.el,
      l.anchor
    );
  }, S = (l, c, f, h) => {
    if (c.children !== l.children) {
      const g = m(l.anchor);
      $(l), [c.el, c.anchor] = j(
        c.children,
        f,
        g,
        h
      );
    } else
      c.el = l.el, c.anchor = l.anchor;
  }, be = ({ el: l, anchor: c }, f, h) => {
    let g;
    for (; l && l !== c; )
      g = m(l), r(l, f, h), l = g;
    r(c, f, h);
  }, $ = ({ el: l, anchor: c }) => {
    let f;
    for (; l && l !== c; )
      f = m(l), i(l), l = f;
    i(c);
  }, We = (l, c, f, h, g, v, E, _, y) => {
    E = E || c.type === "svg", l == null ? Pe(
      c,
      f,
      h,
      g,
      v,
      E,
      _,
      y
    ) : Oe(
      l,
      c,
      g,
      v,
      E,
      _,
      y
    );
  }, Pe = (l, c, f, h, g, v, E, _) => {
    let y, b;
    const { type: k, props: N, shapeFlag: D, transition: C, dirs: I } = l;
    if (y = l.el = s(
      l.type,
      v,
      N && N.is,
      N
    ), D & 8 ? x(y, l.children) : D & 16 && ce(
      l.children,
      y,
      null,
      h,
      g,
      v && k !== "foreignObject",
      E,
      _
    ), I && qe(l, null, h, "created"), Ie(y, l, l.scopeId, E, h), N) {
      for (const F in N)
        F !== "value" && !Xo(F) && n(
          y,
          F,
          null,
          N[F],
          v,
          l.children,
          h,
          g,
          De
        );
      "value" in N && n(y, "value", null, N.value), (b = N.onVnodeBeforeMount) && ve(b, h, l);
    }
    process.env.NODE_ENV !== "production" && (Object.defineProperty(y, "__vnode", {
      value: l,
      enumerable: !1
    }), Object.defineProperty(y, "__vueParentComponent", {
      value: h,
      enumerable: !1
    })), I && qe(l, null, h, "beforeMount");
    const H = (!g || g && !g.pendingBranch) && C && !C.persisted;
    H && C.beforeEnter(y), r(y, c, f), ((b = N && N.onVnodeMounted) || H || I) && ne(() => {
      b && ve(b, h, l), H && C.enter(y), I && qe(l, null, h, "mounted");
    }, g);
  }, Ie = (l, c, f, h, g) => {
    if (f && O(l, f), h)
      for (let v = 0; v < h.length; v++)
        O(l, h[v]);
    if (g) {
      let v = g.subTree;
      if (process.env.NODE_ENV !== "production" && v.patchFlag > 0 && v.patchFlag & 2048 && (v = qi(v.children) || v), c === v) {
        const E = g.vnode;
        Ie(
          l,
          E,
          E.scopeId,
          E.slotScopeIds,
          g.parent
        );
      }
    }
  }, ce = (l, c, f, h, g, v, E, _, y = 0) => {
    for (let b = y; b < l.length; b++) {
      const k = l[b] = _ ? Fe(l[b]) : fe(l[b]);
      R(
        null,
        k,
        c,
        f,
        h,
        g,
        v,
        E,
        _
      );
    }
  }, Oe = (l, c, f, h, g, v, E) => {
    const _ = c.el = l.el;
    let { patchFlag: y, dynamicChildren: b, dirs: k } = c;
    y |= l.patchFlag & 16;
    const N = l.props || L, D = c.props || L;
    let C;
    f && Je(f, !1), (C = D.onVnodeBeforeUpdate) && ve(C, f, c, l), k && qe(c, l, f, "beforeUpdate"), f && Je(f, !0), process.env.NODE_ENV !== "production" && oo && (y = 0, E = !1, b = null);
    const I = g && c.type !== "foreignObject";
    if (b ? (Re(
      l.dynamicChildren,
      b,
      _,
      f,
      h,
      I,
      v
    ), process.env.NODE_ENV !== "production" && ot(l, c)) : E || _e(
      l,
      c,
      _,
      null,
      f,
      h,
      I,
      v,
      !1
    ), y > 0) {
      if (y & 16)
        pe(
          _,
          c,
          N,
          D,
          f,
          h,
          g
        );
      else if (y & 2 && N.class !== D.class && n(_, "class", null, D.class, g), y & 4 && n(_, "style", N.style, D.style, g), y & 8) {
        const H = c.dynamicProps;
        for (let F = 0; F < H.length; F++) {
          const W = H[F], ue = N[W], co = D[W];
          (co !== ue || W === "value") && n(
            _,
            W,
            ue,
            co,
            g,
            l.children,
            f,
            h,
            De
          );
        }
      }
      y & 1 && l.children !== c.children && x(_, c.children);
    } else
      !E && b == null && pe(
        _,
        c,
        N,
        D,
        f,
        h,
        g
      );
    ((C = D.onVnodeUpdated) || k) && ne(() => {
      C && ve(C, f, c, l), k && qe(c, l, f, "updated");
    }, h);
  }, Re = (l, c, f, h, g, v, E) => {
    for (let _ = 0; _ < c.length; _++) {
      const y = l[_], b = c[_], k = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        y.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (y.type === le || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ko(y, b) || // - In the case of a component, it could contain anything.
        y.shapeFlag & 70) ? d(y.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          f
        )
      );
      R(
        y,
        b,
        k,
        null,
        h,
        g,
        v,
        E,
        !0
      );
    }
  }, pe = (l, c, f, h, g, v, E) => {
    if (f !== h) {
      if (f !== L)
        for (const _ in f)
          !Xo(_) && !(_ in h) && n(
            l,
            _,
            f[_],
            null,
            E,
            c.children,
            g,
            v,
            De
          );
      for (const _ in h) {
        if (Xo(_))
          continue;
        const y = h[_], b = f[_];
        y !== b && _ !== "value" && n(
          l,
          _,
          b,
          y,
          E,
          c.children,
          g,
          v,
          De
        );
      }
      "value" in h && n(l, "value", f.value, h.value);
    }
  }, Bo = (l, c, f, h, g, v, E, _, y) => {
    const b = c.el = l ? l.el : a(""), k = c.anchor = l ? l.anchor : a("");
    let { patchFlag: N, dynamicChildren: D, slotScopeIds: C } = c;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (oo || N & 2048) && (N = 0, y = !1, D = null), C && (_ = _ ? _.concat(C) : C), l == null ? (r(b, f, h), r(k, f, h), ce(
      c.children,
      f,
      k,
      g,
      v,
      E,
      _,
      y
    )) : N > 0 && N & 64 && D && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (Re(
      l.dynamicChildren,
      D,
      f,
      g,
      v,
      E,
      _
    ), process.env.NODE_ENV !== "production" ? ot(l, c) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (c.key != null || g && c === g.subTree) && ot(
        l,
        c,
        !0
        /* shallow */
      )
    )) : _e(
      l,
      c,
      f,
      k,
      g,
      v,
      E,
      _,
      y
    );
  }, Cr = (l, c, f, h, g, v, E, _, y) => {
    c.slotScopeIds = _, l == null ? c.shapeFlag & 512 ? g.ctx.activate(
      c,
      f,
      h,
      E,
      y
    ) : Ae(
      c,
      f,
      h,
      g,
      v,
      E,
      y
    ) : ie(l, c, y);
  }, Ae = (l, c, f, h, g, v, E) => {
    const _ = l.component = Kl(
      l,
      h,
      g
    );
    if (process.env.NODE_ENV !== "production" && _.type.__hmrId && Vs(_), process.env.NODE_ENV !== "production" && (Qo(l), Ve(_, "mount")), yr(l) && (_.ctx.renderer = ao), process.env.NODE_ENV !== "production" && Ve(_, "init"), ql(_), process.env.NODE_ENV !== "production" && Ce(_, "init"), _.asyncDep) {
      if (g && g.registerDep(_, A), !l.el) {
        const y = _.subTree = Ne(ae);
        J(null, y, c, f);
      }
      return;
    }
    A(
      _,
      l,
      c,
      f,
      g,
      v,
      E
    ), process.env.NODE_ENV !== "production" && (Go(), Ce(_, "mount"));
  }, ie = (l, c, f) => {
    const h = c.component = l.component;
    if (Ks(l, c, f))
      if (h.asyncDep && !h.asyncResolved) {
        process.env.NODE_ENV !== "production" && Qo(c), M(h, c, f), process.env.NODE_ENV !== "production" && Go();
        return;
      } else
        h.next = c, Os(h.update), h.update();
    else
      c.el = l.el, h.vnode = c;
  }, A = (l, c, f, h, g, v, E) => {
    const _ = () => {
      if (l.isMounted) {
        let { next: k, bu: N, u: D, parent: C, vnode: I } = l, H = k, F;
        process.env.NODE_ENV !== "production" && Qo(k || l.vnode), Je(l, !1), k ? (k.el = I.el, M(l, k, E)) : k = I, N && wo(N), (F = k.props && k.props.onVnodeBeforeUpdate) && ve(F, C, k, I), Je(l, !0), process.env.NODE_ENV !== "production" && Ve(l, "render");
        const W = It(l);
        process.env.NODE_ENV !== "production" && Ce(l, "render");
        const ue = l.subTree;
        l.subTree = W, process.env.NODE_ENV !== "production" && Ve(l, "patch"), R(
          ue,
          W,
          // parent may have changed if it's in a teleport
          d(ue.el),
          // anchor may have changed if it's in a fragment
          Uo(ue),
          l,
          g,
          v
        ), process.env.NODE_ENV !== "production" && Ce(l, "patch"), k.el = W.el, H === null && Ws(l, W.el), D && ne(D, g), (F = k.props && k.props.onVnodeUpdated) && ne(
          () => ve(F, C, k, I),
          g
        ), process.env.NODE_ENV !== "production" && Bi(l), process.env.NODE_ENV !== "production" && Go();
      } else {
        let k;
        const { el: N, props: D } = c, { bm: C, m: I, parent: H } = l, F = $o(c);
        if (Je(l, !1), C && wo(C), !F && (k = D && D.onVnodeBeforeMount) && ve(k, H, c), Je(l, !0), N && zt) {
          const W = () => {
            process.env.NODE_ENV !== "production" && Ve(l, "render"), l.subTree = It(l), process.env.NODE_ENV !== "production" && Ce(l, "render"), process.env.NODE_ENV !== "production" && Ve(l, "hydrate"), zt(
              N,
              l.subTree,
              l,
              g,
              null
            ), process.env.NODE_ENV !== "production" && Ce(l, "hydrate");
          };
          F ? c.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !l.isUnmounted && W()
          ) : W();
        } else {
          process.env.NODE_ENV !== "production" && Ve(l, "render");
          const W = l.subTree = It(l);
          process.env.NODE_ENV !== "production" && Ce(l, "render"), process.env.NODE_ENV !== "production" && Ve(l, "patch"), R(
            null,
            W,
            f,
            h,
            l,
            g,
            v
          ), process.env.NODE_ENV !== "production" && Ce(l, "patch"), c.el = W.el;
        }
        if (I && ne(I, g), !F && (k = D && D.onVnodeMounted)) {
          const W = c;
          ne(
            () => ve(k, H, W),
            g
          );
        }
        (c.shapeFlag & 256 || H && $o(H.vnode) && H.vnode.shapeFlag & 256) && l.a && ne(l.a, g), l.isMounted = !0, process.env.NODE_ENV !== "production" && Is(l), c = f = h = null;
      }
    }, y = l.effect = new fr(
      _,
      () => Et(b),
      l.scope
      // track it in component's effect scope
    ), b = l.update = () => y.run();
    b.id = l.uid, Je(l, !0), process.env.NODE_ENV !== "production" && (y.onTrack = l.rtc ? (k) => wo(l.rtc, k) : void 0, y.onTrigger = l.rtg ? (k) => wo(l.rtg, k) : void 0, b.ownerInstance = l), b();
  }, M = (l, c, f) => {
    c.component = l;
    const h = l.vnode.props;
    l.vnode = c, l.next = null, El(l, c.props, h, f), $l(l, c.children, f), no(), Br(), so();
  }, _e = (l, c, f, h, g, v, E, _, y = !1) => {
    const b = l && l.children, k = l ? l.shapeFlag : 0, N = c.children, { patchFlag: D, shapeFlag: C } = c;
    if (D > 0) {
      if (D & 128) {
        vo(
          b,
          N,
          f,
          h,
          g,
          v,
          E,
          _,
          y
        );
        return;
      } else if (D & 256) {
        Ct(
          b,
          N,
          f,
          h,
          g,
          v,
          E,
          _,
          y
        );
        return;
      }
    }
    C & 8 ? (k & 16 && De(b, g, v), N !== b && x(f, N)) : k & 16 ? C & 16 ? vo(
      b,
      N,
      f,
      h,
      g,
      v,
      E,
      _,
      y
    ) : De(b, g, v, !0) : (k & 8 && x(f, ""), C & 16 && ce(
      N,
      f,
      h,
      g,
      v,
      E,
      _,
      y
    ));
  }, Ct = (l, c, f, h, g, v, E, _, y) => {
    l = l || go, c = c || go;
    const b = l.length, k = c.length, N = Math.min(b, k);
    let D;
    for (D = 0; D < N; D++) {
      const C = c[D] = y ? Fe(c[D]) : fe(c[D]);
      R(
        l[D],
        C,
        f,
        null,
        g,
        v,
        E,
        _,
        y
      );
    }
    b > k ? De(
      l,
      g,
      v,
      !0,
      !1,
      N
    ) : ce(
      c,
      f,
      h,
      g,
      v,
      E,
      _,
      y,
      N
    );
  }, vo = (l, c, f, h, g, v, E, _, y) => {
    let b = 0;
    const k = c.length;
    let N = l.length - 1, D = k - 1;
    for (; b <= N && b <= D; ) {
      const C = l[b], I = c[b] = y ? Fe(c[b]) : fe(c[b]);
      if (ko(C, I))
        R(
          C,
          I,
          f,
          null,
          g,
          v,
          E,
          _,
          y
        );
      else
        break;
      b++;
    }
    for (; b <= N && b <= D; ) {
      const C = l[N], I = c[D] = y ? Fe(c[D]) : fe(c[D]);
      if (ko(C, I))
        R(
          C,
          I,
          f,
          null,
          g,
          v,
          E,
          _,
          y
        );
      else
        break;
      N--, D--;
    }
    if (b > N) {
      if (b <= D) {
        const C = D + 1, I = C < k ? c[C].el : h;
        for (; b <= D; )
          R(
            null,
            c[b] = y ? Fe(c[b]) : fe(c[b]),
            f,
            I,
            g,
            v,
            E,
            _,
            y
          ), b++;
      }
    } else if (b > D)
      for (; b <= N; )
        Me(l[b], g, v, !0), b++;
    else {
      const C = b, I = b, H = /* @__PURE__ */ new Map();
      for (b = I; b <= D; b++) {
        const oe = c[b] = y ? Fe(c[b]) : fe(c[b]);
        oe.key != null && (process.env.NODE_ENV !== "production" && H.has(oe.key) && w(
          "Duplicate keys found during update:",
          JSON.stringify(oe.key),
          "Make sure keys are unique."
        ), H.set(oe.key, b));
      }
      let F, W = 0;
      const ue = D - I + 1;
      let co = !1, $r = 0;
      const yo = new Array(ue);
      for (b = 0; b < ue; b++)
        yo[b] = 0;
      for (b = C; b <= N; b++) {
        const oe = l[b];
        if (W >= ue) {
          Me(oe, g, v, !0);
          continue;
        }
        let me;
        if (oe.key != null)
          me = H.get(oe.key);
        else
          for (F = I; F <= D; F++)
            if (yo[F - I] === 0 && ko(oe, c[F])) {
              me = F;
              break;
            }
        me === void 0 ? Me(oe, g, v, !0) : (yo[me - I] = b + 1, me >= $r ? $r = me : co = !0, R(
          oe,
          c[me],
          f,
          null,
          g,
          v,
          E,
          _,
          y
        ), W++);
      }
      const zr = co ? Rl(yo) : go;
      for (F = zr.length - 1, b = ue - 1; b >= 0; b--) {
        const oe = I + b, me = c[oe], Pr = oe + 1 < k ? c[oe + 1].el : h;
        yo[b] === 0 ? R(
          null,
          me,
          f,
          Pr,
          g,
          v,
          E,
          _,
          y
        ) : co && (F < 0 || b !== zr[F] ? lo(me, f, Pr, 2) : F--);
      }
    }
  }, lo = (l, c, f, h, g = null) => {
    const { el: v, type: E, transition: _, children: y, shapeFlag: b } = l;
    if (b & 6) {
      lo(l.component.subTree, c, f, h);
      return;
    }
    if (b & 128) {
      l.suspense.move(c, f, h);
      return;
    }
    if (b & 64) {
      E.move(l, c, f, ao);
      return;
    }
    if (E === le) {
      r(v, c, f);
      for (let N = 0; N < y.length; N++)
        lo(y[N], c, f, h);
      r(l.anchor, c, f);
      return;
    }
    if (E === tt) {
      be(l, c, f);
      return;
    }
    if (h !== 2 && b & 1 && _)
      if (h === 0)
        _.beforeEnter(v), r(v, c, f), ne(() => _.enter(v), g);
      else {
        const { leave: N, delayLeave: D, afterLeave: C } = _, I = () => r(v, c, f), H = () => {
          N(v, () => {
            I(), C && C();
          });
        };
        D ? D(v, I, H) : H();
      }
    else
      r(v, c, f);
  }, Me = (l, c, f, h = !1, g = !1) => {
    const {
      type: v,
      props: E,
      ref: _,
      children: y,
      dynamicChildren: b,
      shapeFlag: k,
      patchFlag: N,
      dirs: D
    } = l;
    if (_ != null && tr(_, null, f, l, !0), k & 256) {
      c.ctx.deactivate(l);
      return;
    }
    const C = k & 1 && D, I = !$o(l);
    let H;
    if (I && (H = E && E.onVnodeBeforeUnmount) && ve(H, c, l), k & 6)
      vn(l.component, f, h);
    else {
      if (k & 128) {
        l.suspense.unmount(f, h);
        return;
      }
      C && qe(l, null, c, "beforeUnmount"), k & 64 ? l.type.remove(
        l,
        c,
        f,
        g,
        ao,
        h
      ) : b && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (v !== le || N > 0 && N & 64) ? De(
        b,
        c,
        f,
        !1,
        !0
      ) : (v === le && N & 384 || !g && k & 16) && De(y, c, f), h && Tt(l);
    }
    (I && (H = E && E.onVnodeUnmounted) || C) && ne(() => {
      H && ve(H, c, l), C && qe(l, null, c, "unmounted");
    }, f);
  }, Tt = (l) => {
    const { type: c, el: f, anchor: h, transition: g } = l;
    if (c === le) {
      process.env.NODE_ENV !== "production" && l.patchFlag > 0 && l.patchFlag & 2048 && g && !g.persisted ? l.children.forEach((E) => {
        E.type === ae ? i(E.el) : Tt(E);
      }) : mn(f, h);
      return;
    }
    if (c === tt) {
      $(l);
      return;
    }
    const v = () => {
      i(f), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (l.shapeFlag & 1 && g && !g.persisted) {
      const { leave: E, delayLeave: _ } = g, y = () => E(f, v);
      _ ? _(l.el, v, y) : y();
    } else
      v();
  }, mn = (l, c) => {
    let f;
    for (; l !== c; )
      f = m(l), i(l), l = f;
    i(c);
  }, vn = (l, c, f) => {
    process.env.NODE_ENV !== "production" && l.type.__hmrId && Cs(l);
    const { bum: h, scope: g, update: v, subTree: E, um: _ } = l;
    h && wo(h), g.stop(), v && (v.active = !1, Me(E, l, c, f)), _ && ne(_, c), ne(() => {
      l.isUnmounted = !0;
    }, c), c && c.pendingBranch && !c.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === c.pendingId && (c.deps--, c.deps === 0 && c.resolve()), process.env.NODE_ENV !== "production" && As(l);
  }, De = (l, c, f, h = !1, g = !1, v = 0) => {
    for (let E = v; E < l.length; E++)
      Me(l[E], c, f, h, g);
  }, Uo = (l) => l.shapeFlag & 6 ? Uo(l.component.subTree) : l.shapeFlag & 128 ? l.suspense.next() : m(l.anchor || l.el), Tr = (l, c, f) => {
    l == null ? c._vnode && Me(c._vnode, null, null, !0) : R(c._vnode || null, l, c, null, null, null, f), Br(), Si(), c._vnode = l;
  }, ao = {
    p: R,
    um: Me,
    m: lo,
    r: Tt,
    mt: Ae,
    mc: ce,
    pc: _e,
    pbc: Re,
    n: Uo,
    o: e
  };
  let $t, zt;
  return o && ([$t, zt] = o(
    ao
  )), {
    render: Tr,
    hydrate: $t,
    createApp: ml(Tr, $t)
  };
}
function Je({ effect: e, update: o }, t) {
  e.allowRecurse = o.allowRecurse = t;
}
function ot(e, o, t = !1) {
  const r = e.children, i = o.children;
  if (V(r) && V(i))
    for (let n = 0; n < r.length; n++) {
      const s = r[n];
      let a = i[n];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[n] = Fe(i[n]), a.el = s.el), t || ot(s, a)), a.type === Lo && (a.el = s.el), process.env.NODE_ENV !== "production" && a.type === ae && !a.el && (a.el = s.el);
    }
}
function Rl(e) {
  const o = e.slice(), t = [0];
  let r, i, n, s, a;
  const p = e.length;
  for (r = 0; r < p; r++) {
    const u = e[r];
    if (u !== 0) {
      if (i = t[t.length - 1], e[i] < u) {
        o[r] = i, t.push(r);
        continue;
      }
      for (n = 0, s = t.length - 1; n < s; )
        a = n + s >> 1, e[t[a]] < u ? n = a + 1 : s = a;
      u < e[t[n]] && (n > 0 && (o[r] = t[n - 1]), t[n] = r);
    }
  }
  for (n = t.length, s = t[n - 1]; n-- > 0; )
    t[n] = s, s = o[s];
  return t;
}
const Al = (e) => e.__isTeleport, le = Symbol.for("v-fgt"), Lo = Symbol.for("v-txt"), ae = Symbol.for("v-cmt"), tt = Symbol.for("v-stc"), zo = [];
let xe = null;
function rt(e = !1) {
  zo.push(xe = e ? null : []);
}
function Ml() {
  zo.pop(), xe = zo[zo.length - 1] || null;
}
let jo = 1;
function ti(e) {
  jo += e;
}
function un(e) {
  return e.dynamicChildren = jo > 0 ? xe || go : null, Ml(), jo > 0 && xe && xe.push(e), e;
}
function jt(e, o, t, r, i, n) {
  return un(
    Xe(
      e,
      o,
      t,
      r,
      i,
      n,
      !0
      /* isBlock */
    )
  );
}
function jl(e, o, t, r, i) {
  return un(
    Ne(
      e,
      o,
      t,
      r,
      i,
      !0
      /* isBlock: prevent a block from tracking itself */
    )
  );
}
function Ot(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ko(e, o) {
  return process.env.NODE_ENV !== "production" && o.shapeFlag & 6 && uo.has(o.type) ? (e.shapeFlag &= -257, o.shapeFlag &= -513, !1) : e.type === o.type && e.key === o.key;
}
const Sl = (...e) => fn(
  ...e
), Dt = "__vInternal", dn = ({ key: e }) => e != null ? e : null, it = ({
  ref: e,
  ref_key: o,
  ref_for: t
}) => (typeof e == "number" && (e = "" + e), e != null ? q(e) || Y(e) || T(e) ? { i: ee, r: e, k: o, f: !!t } : e : null);
function Xe(e, o = null, t = null, r = 0, i = null, n = e === le ? 0 : 1, s = !1, a = !1) {
  const p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: o,
    key: o && dn(o),
    ref: o && it(o),
    scopeId: Wi,
    slotScopeIds: null,
    children: t,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: n,
    patchFlag: r,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: ee
  };
  return a ? (kr(p, t), n & 128 && e.normalize(p)) : t && (p.shapeFlag |= q(t) ? 8 : 16), process.env.NODE_ENV !== "production" && p.key !== p.key && w("VNode created with invalid key (NaN). VNode type:", p.type), jo > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  xe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (p.patchFlag > 0 || n & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  p.patchFlag !== 32 && xe.push(p), p;
}
const Ne = process.env.NODE_ENV !== "production" ? Sl : fn;
function fn(e, o = null, t = null, r = 0, i = null, n = !1) {
  if ((!e || e === al) && (process.env.NODE_ENV !== "production" && !e && w(`Invalid vnode type when creating vnode: ${e}.`), e = ae), Ot(e)) {
    const a = Ke(
      e,
      o,
      !0
      /* mergeRef: true */
    );
    return t && kr(a, t), jo > 0 && !n && xe && (a.shapeFlag & 6 ? xe[xe.indexOf(e)] = a : xe.push(a)), a.patchFlag |= -2, a;
  }
  if (_n(e) && (e = e.__vccOpts), o) {
    o = Fl(o);
    let { class: a, style: p } = o;
    a && !q(a) && (o.class = bt(a)), B(p) && (qt(p) && !V(p) && (p = U({}, p)), o.style = dr(p));
  }
  const s = q(e) ? 1 : qs(e) ? 128 : Al(e) ? 64 : B(e) ? 4 : T(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && s & 4 && qt(e) && (e = z(e), w(
    "Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Xe(
    e,
    o,
    t,
    r,
    i,
    s,
    n,
    !0
  );
}
function Fl(e) {
  return e ? qt(e) || Dt in e ? U({}, e) : e : null;
}
function Ke(e, o, t = !1) {
  const { props: r, ref: i, patchFlag: n, children: s } = e, a = o ? Ll(r || {}, o) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && dn(a),
    ref: o && o.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      t && i ? V(i) ? i.concat(it(o)) : [i, it(o)] : it(o)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && n === -1 && V(s) ? s.map(xn) : s,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: o && e.type !== le ? n === -1 ? 16 : n | 16 : n,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ke(e.ssContent),
    ssFallback: e.ssFallback && Ke(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function xn(e) {
  const o = Ke(e);
  return V(e.children) && (o.children = e.children.map(xn)), o;
}
function Hl(e = " ", o = 0) {
  return Ne(Lo, null, e, o);
}
function fe(e) {
  return e == null || typeof e == "boolean" ? Ne(ae) : V(e) ? Ne(
    le,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Fe(e) : Ne(Lo, null, String(e));
}
function Fe(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ke(e);
}
function kr(e, o) {
  let t = 0;
  const { shapeFlag: r } = e;
  if (o == null)
    o = null;
  else if (V(o))
    t = 16;
  else if (typeof o == "object")
    if (r & 65) {
      const i = o.default;
      i && (i._c && (i._d = !1), kr(e, i()), i._c && (i._d = !0));
      return;
    } else {
      t = 32;
      const i = o._;
      !i && !(Dt in o) ? o._ctx = ee : i === 3 && ee && (ee.slots._ === 1 ? o._ = 1 : (o._ = 2, e.patchFlag |= 1024));
    }
  else
    T(o) ? (o = { default: o, _ctx: ee }, t = 32) : (o = String(o), r & 64 ? (t = 16, o = [Hl(o)]) : t = 8);
  e.children = o, e.shapeFlag |= t;
}
function Ll(...e) {
  const o = {};
  for (let t = 0; t < e.length; t++) {
    const r = e[t];
    for (const i in r)
      if (i === "class")
        o.class !== r.class && (o.class = bt([o.class, r.class]));
      else if (i === "style")
        o.style = dr([o.style, r.style]);
      else if (Fo(i)) {
        const n = o[i], s = r[i];
        s && n !== s && !(V(n) && n.includes(s)) && (o[i] = n ? [].concat(n, s) : s);
      } else
        i !== "" && (o[i] = r[i]);
  }
  return o;
}
function ve(e, o, t, r = null) {
  ge(e, o, 7, [
    t,
    r
  ]);
}
const Bl = rn();
let Ul = 0;
function Kl(e, o, t) {
  const r = e.type, i = (o ? o.appContext : e.appContext) || Bl, n = {
    uid: Ul++,
    vnode: e,
    type: r,
    parent: o,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new An(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: o ? o.provides : Object.create(i.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: sn(r, i),
    emitsOptions: Ki(r, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: L,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: L,
    data: L,
    props: L,
    attrs: L,
    slots: L,
    refs: L,
    setupState: L,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: t,
    suspenseId: t ? t.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? n.ctx = cl(n) : n.ctx = { _: n }, n.root = o ? o.root : n, n.emit = Fs.bind(null, n), e.ce && e.ce(n), n;
}
let X = null, Or, po, ri = "__VUE_INSTANCE_SETTERS__";
(po = lt()[ri]) || (po = lt()[ri] = []), po.push((e) => X = e), Or = (e) => {
  po.length > 1 ? po.forEach((o) => o(e)) : po[0](e);
};
const _o = (e) => {
  Or(e), e.scope.on();
}, ro = () => {
  X && X.scope.off(), Or(null);
}, Wl = /* @__PURE__ */ mo("slot,component");
function rr(e, o) {
  const t = o.isNativeTag || gi;
  (Wl(e) || t(e)) && w(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function gn(e) {
  return e.vnode.shapeFlag & 4;
}
let So = !1;
function ql(e, o = !1) {
  So = o;
  const { props: t, children: r } = e.vnode, i = gn(e);
  yl(e, t, i, o), Tl(e, r);
  const n = i ? Jl(e, o) : void 0;
  return So = !1, n;
}
function Jl(e, o) {
  var t;
  const r = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (r.name && rr(r.name, e.appContext.config), r.components) {
      const n = Object.keys(r.components);
      for (let s = 0; s < n.length; s++)
        rr(n[s], e.appContext.config);
    }
    if (r.directives) {
      const n = Object.keys(r.directives);
      for (let s = 0; s < n.length; s++)
        Zi(n[s]);
    }
    r.compilerOptions && Yl() && w(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Ti(new Proxy(e.ctx, on)), process.env.NODE_ENV !== "production" && pl(e);
  const { setup: i } = r;
  if (i) {
    const n = e.setupContext = i.length > 1 ? Xl(e) : null;
    _o(e), no();
    const s = $e(
      i,
      e,
      0,
      [process.env.NODE_ENV !== "production" ? Do(e.props) : e.props, n]
    );
    if (so(), ro(), cr(s)) {
      if (s.then(ro, ro), o)
        return s.then((a) => {
          ii(e, a, o);
        }).catch((a) => {
          wt(a, e, 0);
        });
      if (e.asyncDep = s, process.env.NODE_ENV !== "production" && !e.suspense) {
        const a = (t = r.name) != null ? t : "Anonymous";
        w(
          `Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      ii(e, s, o);
  } else
    hn(e, o);
}
function ii(e, o, t) {
  T(o) ? e.type.__ssrInlineRender ? e.ssrRender = o : e.render = o : B(o) ? (process.env.NODE_ENV !== "production" && Ot(o) && w(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = o), e.setupState = Pi(o), process.env.NODE_ENV !== "production" && ul(e)) : process.env.NODE_ENV !== "production" && o !== void 0 && w(
    `setup() should return an object. Received: ${o === null ? "null" : typeof o}`
  ), hn(e, t);
}
let ir;
const Yl = () => !ir;
function hn(e, o, t) {
  const r = e.type;
  if (!e.render) {
    if (!o && ir && !r.render) {
      const i = r.template || Er(e).template;
      if (i) {
        process.env.NODE_ENV !== "production" && Ve(e, "compile");
        const { isCustomElement: n, compilerOptions: s } = e.appContext.config, { delimiters: a, compilerOptions: p } = r, u = U(
          U(
            {
              isCustomElement: n,
              delimiters: a
            },
            s
          ),
          p
        );
        r.render = ir(i, u), process.env.NODE_ENV !== "production" && Ce(e, "compile");
      }
    }
    e.render = r.render || Z;
  }
  _o(e), no(), fl(e), so(), ro(), process.env.NODE_ENV !== "production" && !r.render && e.render === Z && !o && (r.template ? w(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : w("Component is missing template or render function."));
}
function ni(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    process.env.NODE_ENV !== "production" ? {
      get(o, t) {
        return pt(), Q(e, "get", "$attrs"), o[t];
      },
      set() {
        return w("setupContext.attrs is readonly."), !1;
      },
      deleteProperty() {
        return w("setupContext.attrs is readonly."), !1;
      }
    } : {
      get(o, t) {
        return Q(e, "get", "$attrs"), o[t];
      }
    }
  ));
}
function Zl(e) {
  return e.slotsProxy || (e.slotsProxy = new Proxy(e.slots, {
    get(o, t) {
      return Q(e, "get", "$slots"), o[t];
    }
  }));
}
function Xl(e) {
  const o = (t) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && w("expose() should be called only once per setup()."), t != null)) {
      let r = typeof t;
      r === "object" && (V(t) ? r = "array" : Y(t) && (r = "ref")), r !== "object" && w(
        `expose() should be passed a plain object, received ${r}.`
      );
    }
    e.exposed = t || {};
  };
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return ni(e);
    },
    get slots() {
      return Zl(e);
    },
    get emit() {
      return (t, ...r) => e.emit(t, ...r);
    },
    expose: o
  }) : {
    get attrs() {
      return ni(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: o
  };
}
function Dr(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Pi(Ti(e.exposed)), {
      get(o, t) {
        if (t in o)
          return o[t];
        if (t in to)
          return to[t](e);
      },
      has(o, t) {
        return t in o || t in to;
      }
    }));
}
const Ql = /(?:^|[-_])(\w)/g, Gl = (e) => e.replace(Ql, (o) => o.toUpperCase()).replace(/[-_]/g, "");
function bn(e, o = !0) {
  return T(e) ? e.displayName || e.name : e.name || o && e.__name;
}
function Vt(e, o, t = !1) {
  let r = bn(o);
  if (!r && o.__file) {
    const i = o.__file.match(/([^/\\]+)\.\w+$/);
    i && (r = i[1]);
  }
  if (!r && e && e.parent) {
    const i = (n) => {
      for (const s in n)
        if (n[s] === o)
          return s;
    };
    r = i(
      e.components || e.parent.type.components
    ) || i(e.appContext.components);
  }
  return r ? Gl(r) : t ? "App" : "Anonymous";
}
function _n(e) {
  return T(e) && "__vccOpts" in e;
}
const nr = (e, o) => _s(e, o, So), ea = Symbol.for("v-scx"), oa = () => {
  {
    const e = et(ea);
    return e || process.env.NODE_ENV !== "production" && w(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function St(e) {
  return !!(e && e.__v_isShallow);
}
function ta() {
  if (process.env.NODE_ENV === "production" || typeof window == "undefined")
    return;
  const e = { style: "color:#3ba776" }, o = { style: "color:#0b1bc9" }, t = { style: "color:#b62e24" }, r = { style: "color:#9d288c" }, i = {
    header(d) {
      return B(d) ? d.__isVue ? ["div", e, "VueInstance"] : Y(d) ? [
        "div",
        {},
        ["span", e, x(d)],
        "<",
        a(d.value),
        ">"
      ] : Ge(d) ? [
        "div",
        {},
        ["span", e, St(d) ? "ShallowReactive" : "Reactive"],
        "<",
        a(d),
        `>${Ue(d) ? " (readonly)" : ""}`
      ] : Ue(d) ? [
        "div",
        {},
        ["span", e, St(d) ? "ShallowReadonly" : "Readonly"],
        "<",
        a(d),
        ">"
      ] : null : null;
    },
    hasBody(d) {
      return d && d.__isVue;
    },
    body(d) {
      if (d && d.__isVue)
        return [
          "div",
          {},
          ...n(d.$)
        ];
    }
  };
  function n(d) {
    const m = [];
    d.type.props && d.props && m.push(s("props", z(d.props))), d.setupState !== L && m.push(s("setup", d.setupState)), d.data !== L && m.push(s("data", z(d.data)));
    const O = p(d, "computed");
    O && m.push(s("computed", O));
    const j = p(d, "inject");
    return j && m.push(s("injected", j)), m.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: d }]
    ]), m;
  }
  function s(d, m) {
    return m = U({}, m), Object.keys(m).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        d
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(m).map((O) => [
          "div",
          {},
          ["span", r, O + ": "],
          a(m[O], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function a(d, m = !0) {
    return typeof d == "number" ? ["span", o, d] : typeof d == "string" ? ["span", t, JSON.stringify(d)] : typeof d == "boolean" ? ["span", r, d] : B(d) ? ["object", { object: m ? z(d) : d }] : ["span", t, String(d)];
  }
  function p(d, m) {
    const O = d.type;
    if (T(O))
      return;
    const j = {};
    for (const R in d.ctx)
      u(O, R, m) && (j[R] = d.ctx[R]);
    return j;
  }
  function u(d, m, O) {
    const j = d[O];
    if (V(j) && j.includes(m) || B(j) && m in j || d.extends && u(d.extends, m, O) || d.mixins && d.mixins.some((R) => u(R, m, O)))
      return !0;
  }
  function x(d) {
    return St(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const si = "3.3.4", ra = "http://www.w3.org/2000/svg", Ze = typeof document != "undefined" ? document : null, li = Ze && /* @__PURE__ */ Ze.createElement("template"), ia = {
  insert: (e, o, t) => {
    o.insertBefore(e, t || null);
  },
  remove: (e) => {
    const o = e.parentNode;
    o && o.removeChild(e);
  },
  createElement: (e, o, t, r) => {
    const i = o ? Ze.createElementNS(ra, e) : Ze.createElement(e, t ? { is: t } : void 0);
    return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
  },
  createText: (e) => Ze.createTextNode(e),
  createComment: (e) => Ze.createComment(e),
  setText: (e, o) => {
    e.nodeValue = o;
  },
  setElementText: (e, o) => {
    e.textContent = o;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ze.querySelector(e),
  setScopeId(e, o) {
    e.setAttribute(o, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, o, t, r, i, n) {
    const s = t ? t.previousSibling : o.lastChild;
    if (i && (i === n || i.nextSibling))
      for (; o.insertBefore(i.cloneNode(!0), t), !(i === n || !(i = i.nextSibling)); )
        ;
    else {
      li.innerHTML = r ? `<svg>${e}</svg>` : e;
      const a = li.content;
      if (r) {
        const p = a.firstChild;
        for (; p.firstChild; )
          a.appendChild(p.firstChild);
        a.removeChild(p);
      }
      o.insertBefore(a, t);
    }
    return [
      // first
      s ? s.nextSibling : o.firstChild,
      // last
      t ? t.previousSibling : o.lastChild
    ];
  }
};
function na(e, o, t) {
  const r = e._vtc;
  r && (o = (o ? [o, ...r] : [...r]).join(" ")), o == null ? e.removeAttribute("class") : t ? e.setAttribute("class", o) : e.className = o;
}
function sa(e, o, t) {
  const r = e.style, i = q(t);
  if (t && !i) {
    if (o && !q(o))
      for (const n in o)
        t[n] == null && sr(r, n, "");
    for (const n in t)
      sr(r, n, t[n]);
  } else {
    const n = r.display;
    i ? o !== t && (r.cssText = t) : o && e.removeAttribute("style"), "_vod" in e && (r.display = n);
  }
}
const la = /[^\\];\s*$/, ai = /\s*!important$/;
function sr(e, o, t) {
  if (V(t))
    t.forEach((r) => sr(e, o, r));
  else if (t == null && (t = ""), process.env.NODE_ENV !== "production" && la.test(t) && w(
    `Unexpected semicolon at the end of '${o}' style value: '${t}'`
  ), o.startsWith("--"))
    e.setProperty(o, t);
  else {
    const r = aa(e, o);
    ai.test(t) ? e.setProperty(
      se(r),
      t.replace(ai, ""),
      "important"
    ) : e[r] = t;
  }
}
const ci = ["Webkit", "Moz", "ms"], Ft = {};
function aa(e, o) {
  const t = Ft[o];
  if (t)
    return t;
  let r = Te(o);
  if (r !== "filter" && r in e)
    return Ft[o] = r;
  r = ht(r);
  for (let i = 0; i < ci.length; i++) {
    const n = ci[i] + r;
    if (n in e)
      return Ft[o] = n;
  }
  return o;
}
const pi = "http://www.w3.org/1999/xlink";
function ca(e, o, t, r, i) {
  if (r && o.startsWith("xlink:"))
    t == null ? e.removeAttributeNS(pi, o.slice(6, o.length)) : e.setAttributeNS(pi, o, t);
  else {
    const n = Rn(o);
    t == null || n && !hi(t) ? e.removeAttribute(o) : e.setAttribute(o, n ? "" : t);
  }
}
function pa(e, o, t, r, i, n, s) {
  if (o === "innerHTML" || o === "textContent") {
    r && s(r, i, n), e[o] = t == null ? "" : t;
    return;
  }
  const a = e.tagName;
  if (o === "value" && a !== "PROGRESS" && // custom elements may use _value internally
  !a.includes("-")) {
    e._value = t;
    const u = a === "OPTION" ? e.getAttribute("value") : e.value, x = t == null ? "" : t;
    u !== x && (e.value = x), t == null && e.removeAttribute(o);
    return;
  }
  let p = !1;
  if (t === "" || t == null) {
    const u = typeof e[o];
    u === "boolean" ? t = hi(t) : t == null && u === "string" ? (t = "", p = !0) : u === "number" && (t = 0, p = !0);
  }
  try {
    e[o] = t;
  } catch (u) {
    process.env.NODE_ENV !== "production" && !p && w(
      `Failed setting prop "${o}" on <${a.toLowerCase()}>: value ${t} is invalid.`,
      u
    );
  }
  p && e.removeAttribute(o);
}
function ua(e, o, t, r) {
  e.addEventListener(o, t, r);
}
function da(e, o, t, r) {
  e.removeEventListener(o, t, r);
}
function fa(e, o, t, r, i = null) {
  const n = e._vei || (e._vei = {}), s = n[o];
  if (r && s)
    s.value = r;
  else {
    const [a, p] = xa(o);
    if (r) {
      const u = n[o] = ba(r, i);
      ua(e, a, u, p);
    } else
      s && (da(e, a, s, p), n[o] = void 0);
  }
}
const ui = /(?:Once|Passive|Capture)$/;
function xa(e) {
  let o;
  if (ui.test(e)) {
    o = {};
    let r;
    for (; r = e.match(ui); )
      e = e.slice(0, e.length - r[0].length), o[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : se(e.slice(2)), o];
}
let Ht = 0;
const ga = /* @__PURE__ */ Promise.resolve(), ha = () => Ht || (ga.then(() => Ht = 0), Ht = Date.now());
function ba(e, o) {
  const t = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= t.attached)
      return;
    ge(
      _a(r, t.value),
      o,
      5,
      [r]
    );
  };
  return t.value = e, t.attached = ha(), t;
}
function _a(e, o) {
  if (V(o)) {
    const t = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      t.call(e), e._stopped = !0;
    }, o.map((r) => (i) => !i._stopped && r && r(i));
  } else
    return o;
}
const di = /^on[a-z]/, ma = (e, o, t, r, i = !1, n, s, a, p) => {
  o === "class" ? na(e, r, i) : o === "style" ? sa(e, t, r) : Fo(o) ? nt(o) || fa(e, o, t, r, s) : (o[0] === "." ? (o = o.slice(1), !0) : o[0] === "^" ? (o = o.slice(1), !1) : va(e, o, r, i)) ? pa(
    e,
    o,
    r,
    n,
    s,
    a,
    p
  ) : (o === "true-value" ? e._trueValue = r : o === "false-value" && (e._falseValue = r), ca(e, o, r, i));
};
function va(e, o, t, r) {
  return r ? !!(o === "innerHTML" || o === "textContent" || o in e && di.test(o) && T(t)) : o === "spellcheck" || o === "draggable" || o === "translate" || o === "form" || o === "list" && e.tagName === "INPUT" || o === "type" && e.tagName === "TEXTAREA" || di.test(o) && q(t) ? !1 : o in e;
}
function ya(e, o) {
  const t = Zs(e);
  class r extends Vr {
    constructor(n) {
      super(t, n, o);
    }
  }
  return r.def = t, r;
}
const wa = typeof HTMLElement != "undefined" ? HTMLElement : class {
};
class Vr extends wa {
  constructor(o, t = {}, r) {
    super(), this._def = o, this._props = t, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this.shadowRoot && r ? r(this._createVNode(), this.shadowRoot) : (process.env.NODE_ENV !== "production" && this.shadowRoot && w(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, Ai(() => {
      this._connected || (xi(null, this.shadowRoot), this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    this._resolved = !0;
    for (let r = 0; r < this.attributes.length; r++)
      this._setAttr(this.attributes[r].name);
    new MutationObserver((r) => {
      for (const i of r)
        this._setAttr(i.attributeName);
    }).observe(this, { attributes: !0 });
    const o = (r, i = !1) => {
      const { props: n, styles: s } = r;
      let a;
      if (n && !V(n))
        for (const p in n) {
          const u = n[p];
          (u === Number || u && u.type === Number) && (p in this._props && (this._props[p] = Ir(this._props[p])), (a || (a = /* @__PURE__ */ Object.create(null)))[Te(p)] = !0);
        }
      this._numberProps = a, i && this._resolveProps(r), this._applyStyles(s), this._update();
    }, t = this._def.__asyncLoader;
    t ? t().then((r) => o(r, !0)) : o(this._def);
  }
  _resolveProps(o) {
    const { props: t } = o, r = V(t) ? t : Object.keys(t || {});
    for (const i of Object.keys(this))
      i[0] !== "_" && r.includes(i) && this._setProp(i, this[i], !0, !1);
    for (const i of r.map(Te))
      Object.defineProperty(this, i, {
        get() {
          return this._getProp(i);
        },
        set(n) {
          this._setProp(i, n);
        }
      });
  }
  _setAttr(o) {
    let t = this.getAttribute(o);
    const r = Te(o);
    this._numberProps && this._numberProps[r] && (t = Ir(t)), this._setProp(r, t, !1);
  }
  /**
   * @internal
   */
  _getProp(o) {
    return this._props[o];
  }
  /**
   * @internal
   */
  _setProp(o, t, r = !0, i = !0) {
    t !== this._props[o] && (this._props[o] = t, i && this._instance && this._update(), r && (t === !0 ? this.setAttribute(se(o), "") : typeof t == "string" || typeof t == "number" ? this.setAttribute(se(o), t + "") : t || this.removeAttribute(se(o))));
  }
  _update() {
    xi(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const o = Ne(this._def, U({}, this._props));
    return this._instance || (o.ce = (t) => {
      this._instance = t, t.isCE = !0, process.env.NODE_ENV !== "production" && (t.ceReload = (n) => {
        this._styles && (this._styles.forEach((s) => this.shadowRoot.removeChild(s)), this._styles.length = 0), this._applyStyles(n), this._instance = null, this._update();
      });
      const r = (n, s) => {
        this.dispatchEvent(
          new CustomEvent(n, {
            detail: s
          })
        );
      };
      t.emit = (n, ...s) => {
        r(n, s), se(n) !== n && r(se(n), s);
      };
      let i = this;
      for (; i = i && (i.parentNode || i.host); )
        if (i instanceof Vr) {
          t.parent = i._instance, t.provides = i._instance.provides;
          break;
        }
    }), o;
  }
  _applyStyles(o) {
    o && o.forEach((t) => {
      const r = document.createElement("style");
      r.textContent = t, this.shadowRoot.appendChild(r), process.env.NODE_ENV !== "production" && (this._styles || (this._styles = [])).push(r);
    });
  }
}
const Ea = /* @__PURE__ */ U({ patchProp: ma }, ia);
let fi;
function Na() {
  return fi || (fi = Pl(Ea));
}
const xi = (...e) => {
  Na().render(...e);
};
function ka() {
  ta();
}
process.env.NODE_ENV !== "production" && ka();
const Oa = `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:normal;font-size:16px;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}body{margin:0;font-family:var(--pix-font-roboto)}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;color:inherit;cursor:pointer}abbr[title]{border-bottom:none;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{border-width:0;padding:0;margin:0}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}*,*:before,*:after{box-sizing:border-box}button{background-color:transparent;color:inherit;border-width:0;padding:0;cursor:pointer}figure{margin:0}input::-moz-focus-inner{border:0;padding:0;margin:0}ul,ol{margin:0;padding:0;list-style:none}dl,dt,dd{margin:0}h1,h2,h3,h4,h5,h6{margin:0;font-size:inherit;font-weight:inherit}p{margin:0}cite{font-style:normal}:root{--pix-color-primary-5: #f2f9ff;--pix-color-primary-10: #dcf1ff;--pix-color-primary-20: #c4e6ff;--pix-color-primary-30: #88beff;--pix-color-primary-40: #5b94ff;--pix-color-primary: #3d68ff;--pix-color-primary-60: #2044dc;--pix-color-primary-70: #0d25b3;--pix-color-primary-80: #000e87;--pix-color-secondary-5: #fff9e6;--pix-color-secondary-10: #fff1c5;--pix-color-secondary-20: #ffe381;--pix-color-secondary: #ffd235;--pix-color-secondary-40: #ffbe00;--pix-color-secondary-50: #eaa600;--pix-color-secondary-60: #d87016;--pix-color-secondary-70: #a95800;--pix-color-secondary-80: #874d00;--pix-color-secondary-certif-5: #ccf6f5;--pix-color-secondary-certif-10: #9aedeb;--pix-color-secondary-certif-20: #67e4e0;--pix-color-secondary-certif-30: #34dbd6;--pix-color-secondary-certif: #20b4af;--pix-color-secondary-certif-50: #17817e;--pix-color-secondary-certif-60: #126765;--pix-color-secondary-certif-70: #0e4d4c;--pix-color-secondary-certif-80: #093432;--pix-color-secondary-orga-5: #d5f9ff;--pix-color-secondary-orga-10: #aaf4ff;--pix-color-secondary-orga-20: #80eeff;--pix-color-secondary-orga-30: #55e8ff;--pix-color-secondary-orga: #00ddff;--pix-color-secondary-orga-50: #00c1df;--pix-color-secondary-orga-60: #00a6bf;--pix-color-secondary-orga-70: #008a9f;--pix-color-secondary-orga-80: #006e80;--pix-color-tertiary-5: #ebe1ff;--pix-color-tertiary-10: #d8c2ff;--pix-color-tertiary-20: #c4a4ff;--pix-color-tertiary-30: #b186ff;--pix-color-tertiary: #9d67ff;--pix-color-tertiary-50: #8a49ff;--pix-color-tertiary-60: #6712ff;--pix-color-tertiary-70: #4e00db;--pix-color-tertiary-80: #3b00a4;--pix-color-success-5: #ecfdf5;--pix-color-success-10: #d1fae5;--pix-color-success-20: #a7f3d0;--pix-color-success-30: #6ee7b7;--pix-color-success: #34d399;--pix-color-success-50: #27b481;--pix-color-success-60: #14865d;--pix-color-success-70: #176c4d;--pix-color-success-80: #104834;--pix-color-warning-5: #fff9e6;--pix-color-warning-10: #fff1c5;--pix-color-warning-20: #ffe381;--pix-color-warning-30: #ffd235;--pix-color-warning-40: #ffbe00;--pix-color-warning-50: #eaa600;--pix-color-warning-60: #d87016;--pix-color-warning-70: #a95800;--pix-color-warning-80: #874d00;--pix-color-error-5: #fef2f2;--pix-color-error-10: #fee2e2;--pix-color-error-20: #fecaca;--pix-color-error-30: #fca5a5;--pix-color-error-40: #f87171;--pix-color-error-50: #ef4444;--pix-color-error-60: #dc2626;--pix-color-error-70: #b91c1c;--pix-color-error-80: #991b1b;--pix-color-error-90: #861212;--pix-color-neutral-0: #ffffff;--pix-color-neutral-5: #fafbfc;--pix-color-neutral-10: #f4f5f7;--pix-color-neutral-15: #eaecf0;--pix-color-neutral-20: #dfe1e6;--pix-color-neutral-22: #c1c7d0;--pix-color-neutral-25: #a5adba;--pix-color-neutral-30: #97a0af;--pix-color-neutral-35: #8993a4;--pix-color-neutral-40: #7a869a;--pix-color-neutral-45: #6b778c;--pix-color-neutral-50: #5e6c84;--pix-color-neutral-60: #505f79;--pix-color-neutral-70: #344563;--pix-color-neutral-80: #253858;--pix-color-neutral-90: #172b4d;--pix-color-neutral-100: #091e42;--pix-color-neutral-110: #07142e;--pix-color-shades-100: #000000;--pix-color-information-dark: #f24645;--pix-color-information-light: #f1a141;--pix-color-content-dark: #1a8c89;--pix-color-content-light: #52d987;--pix-color-communication-dark: #3d68ff;--pix-color-communication-light: #12a3ff;--pix-color-security-dark: #ac008d;--pix-color-security-light: #ff3f94;--pix-color-environment-dark: #5e2563;--pix-color-environment-light: #564da6;--pix-color-primary-app-gradient: linear-gradient( 91.59deg, #3d68ff 0%, #8845ff 100% );--pix-color-secondary-app-gradient: linear-gradient( 91.59deg, #fedc41 0%, #ff9f00 100% );--pix-color-primary-certif-gradient: linear-gradient( 91.59deg, #52d987 0%, #1a8c89 100% );--pix-color-primary-orga-gradient: linear-gradient( 91.59deg, #00ddff 0%, #0095c0 100% );--pix-color-secondary-orga-gradient: linear-gradient( 91.59deg, #0d7dc4 0%, #213371 100% );--pix-color-information-gradient: linear-gradient( 180deg, #f24645 0%, #f1a141 100% );--pix-color-content-gradient: linear-gradient( 180deg, #1a8c89 0%, #52d987 100% );--pix-color-communication-gradient: linear-gradient( 180deg, #3d68ff 0%, #12a3ff 100% );--pix-color-security-gradient: linear-gradient( 180deg, #ac008d 0%, #ff3f94 100% );--pix-color-environment-gradient: linear-gradient( 180deg, #5e2563 0%, #564da6 100% );--pix-font-open-sans: "Open Sans", Arial, sans-serif;--pix-font-roboto: "Roboto", Arial, sans-serif;--pix-font-normal: 400;--pix-font-medium: 500;--pix-font-bold: 700;--pix-spacing-xxs: 4px;--pix-spacing-xs: 8px;--pix-spacing-s: 16px;--pix-spacing-m: 24px;--pix-spacing-l: 32px;--pix-spacing-xl: 40px;--pix-spacing-xxl: 48px}@font-face{font-family:Open Sans;src:url(/fonts/OpenSans/OpenSans-Medium.ttf);font-weight:500;font-style:normal}@font-face{font-family:Roboto;src:url(/fonts/Roboto/Roboto-Regular.ttf);font-weight:400;font-style:normal}@font-face{font-family:Roboto;src:url(/fonts/Roboto/Roboto-Medium.ttf);font-weight:500;font-style:normal}@font-face{font-family:Roboto;src:url(/fonts/Roboto/Roboto-Bold.ttf);font-weight:700;font-style:normal}.pix-shadow-xs{box-shadow:0 4px 8px #07142e14}.pix-shadow-sm{box-shadow:0 6px 12px #07142e14}.pix-shadow-md{box-shadow:0 8px 16px #07142e14}.pix-shadow-lg{box-shadow:0 10px 20px #07142e14}.pix-shadow-xl{box-shadow:0 12px 24px #07142e14}.pix-modal__title,.pix-title-xs,.pix-sidebar__title,.pix-title-s,.indicator-card__value,.pix-title-m,.pix-title-l{font-family:var(--pix-font-open-sans);font-weight:500}.pix-title-l{font-size:2rem;line-height:1.25;letter-spacing:-.04em}@media (min-width: 769px){.pix-title-l{font-size:2.5rem}}@media (min-width: 992px){.pix-title-l{font-size:3rem}}.indicator-card__value,.pix-title-m{font-size:1.625rem;line-height:1.3;letter-spacing:-.02em}@media (min-width: 769px){.indicator-card__value,.pix-title-m{font-size:2rem;line-height:1.25;letter-spacing:-.04em}}@media (min-width: 992px){.indicator-card__value,.pix-title-m{font-size:2.25rem}}.pix-sidebar__title,.pix-title-s{font-size:1.375rem;line-height:1.3;letter-spacing:-.02em}@media (min-width: 769px){.pix-sidebar__title,.pix-title-s{font-size:1.5rem}}@media (min-width: 992px){.pix-sidebar__title,.pix-title-s{font-size:1.75rem}}.pix-modal__title,.pix-title-xs{font-size:1.25rem;line-height:1.4;letter-spacing:-.02em}.pix-tag--compact,.pix-body-xs,.indicator-card__sub,.pix-toggle__on,.pix-toggle__off,.pix-selectable-tag,.pix-modal__content,.pix-tag,.pix-select-search__input,.pix-select-options-category__option,.pix-select-options-category__name,.pix-select-button__dropdown-icon,.pix-select-button,.pix-select__empty-search-message,.progress-gauge__sub-title,.progress-gauge__text,.pix-multi-select-header__dropdown-icon,.pix-body-s,.pix-toggle__label,.pix-body-m,.indicator-card__title,.pix-body-l{font-family:var(--pix-font-roboto);font-weight:400}.indicator-card__title,.pix-body-l{font-size:1rem;line-height:1.5}@media (min-width: 769px){.indicator-card__title,.pix-body-l{font-size:1.125rem}}.pix-toggle__label,.pix-body-m{font-size:.875rem;line-height:1.5}@media (min-width: 769px){.pix-toggle__label,.pix-body-m{font-size:1rem}}.indicator-card__sub,.pix-toggle__on,.pix-toggle__off,.pix-selectable-tag,.pix-modal__content,.pix-tag,.pix-select-search__input,.pix-select-options-category__option,.pix-select-options-category__name,.pix-select-button__dropdown-icon,.pix-select-button,.pix-select__empty-search-message,.progress-gauge__sub-title,.progress-gauge__text,.pix-multi-select-header__dropdown-icon,.pix-body-s{font-size:.875rem;line-height:1.5}.pix-tag--compact,.pix-body-xs{font-size:.75rem;line-height:1.5;letter-spacing:.02em}.pix-body-weight-medium{font-weight:500}.pix-body-weight-bold{font-weight:700}.screen-reader-only,.screen-reader-only>*{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.pix-background-header{position:relative;padding:68px 24px 0}.pix-background-header__background{position:absolute;top:0;left:0;z-index:-1;width:100%;min-height:270px;background:var(--pix-color-primary-app-gradient);box-shadow:0 2px 8px #0000001a;color:var(--pix-color-neutral-0)}.pix-background-header__content{max-width:980px;margin:0 auto}.pix-banner{padding:16px 24px;display:flex;align-items:center;font-size:.875rem;box-shadow:0 4px 8px #07142e14}.pix-banner__action{text-decoration:underline;color:inherit}.pix-banner__action .external-link{margin-left:4px;font-size:.875rem}.pix-banner__close{display:flex;margin-left:auto;padding-left:8px}.pix-banner__icon{font-size:1.125rem;margin-right:var(--pix-spacing-xs)}.pix-banner--information,.pix-banner--information .pix-icon-button{background-color:var(--pix-color-primary-5);color:var(--pix-color-primary-70)}.pix-banner--information .pix-icon-button:hover:enabled,.pix-banner--information .pix-icon-button:focus:enabled,.pix-banner--information .pix-icon-button:active:enabled{background-color:var(--pix-color-primary-10);color:var(--pix-color-primary-70)}.pix-banner--information .pix-icon-button:focus:enabled{outline-color:var(--pix-color-primary-70)}.pix-banner--warning,.pix-banner--warning .pix-icon-button{background-color:var(--pix-color-warning-5);color:var(--pix-color-warning-70)}.pix-banner--warning .pix-icon-button:hover:enabled,.pix-banner--warning .pix-icon-button:focus:enabled,.pix-banner--warning .pix-icon-button:active:enabled{background-color:var(--pix-color-warning-10);color:var(--pix-color-warning-70)}.pix-banner--warning .pix-icon-button:focus:enabled{outline-color:var(--pix-color-warning-70)}.pix-banner--error,.pix-banner--error .pix-icon-button{background-color:var(--pix-color-error-5);color:var(--pix-color-error-70)}.pix-banner--error .pix-icon-button:hover:enabled,.pix-banner--error .pix-icon-button:focus:enabled,.pix-banner--error .pix-icon-button:active:enabled{background-color:var(--pix-color-error-10);color:var(--pix-color-error-70)}.pix-banner--error .pix-icon-button:focus:enabled{outline-color:var(--pix-color-error-70)}.pix-banner--communication{background-color:var(--pix-color-primary);color:var(--pix-color-neutral-0)}.pix-banner--communication-orga{background-color:var(--pix-color-secondary-orga-80);color:var(--pix-color-neutral-0)}.pix-banner--communication-certif{background-color:var(--pix-color-secondary-certif-50);color:var(--pix-color-neutral-0)}.pix-block{position:relative;background-color:var(--pix-color-neutral-0);border-radius:5px}.pix-block--shadow-light{box-shadow:0 4px 8px rgba(var(--pix-color-neutral-110),.08)}.pix-block--shadow-heavy{box-shadow:0 12px 24px rgba(var(--pix-color-neutral-110),.08)}.pix-button{color:var(--pix-color-neutral-0);font-size:.875rem;font-weight:var(--pix-font-medium);white-space:nowrap;cursor:pointer;border:1px solid transparent;outline:none;display:flex;justify-content:center;align-items:center;text-decoration:none;padding:12px 24px;border-radius:4px;background-color:var(--pix-color-primary)}.pix-button--shape-rounded{border-radius:25px}.pix-button--size-small.pix-button--shape-rounded{padding:8px 24px}.pix-button--size-small.pix-button--shape-squircle{padding:8px 16px}.pix-button--disabled{opacity:.5;cursor:not-allowed}.pix-button:not(.pix-button--disabled):hover{background-color:var(--pix-color-primary-60)}.pix-button:not(.pix-button--disabled):focus,.pix-button:not(.pix-button--disabled):focus-visible{background-color:var(--pix-color-primary-60);outline:1px solid var(--pix-color-neutral-0);outline-offset:-4px}.pix-button:not(.pix-button--disabled):active{background-color:var(--pix-color-primary-70);outline:none}.pix-button--background-green{background-color:var(--pix-color-success-60)}.pix-button--background-green:not(.pix-button--disabled):hover{background-color:var(--pix-color-success-70)}.pix-button--background-green:not(.pix-button--disabled):focus,.pix-button--background-green:not(.pix-button--disabled):focus-visible{background-color:var(--pix-color-success-70);outline:1px solid var(--pix-color-neutral-0);outline-offset:-4px}.pix-button--background-green:not(.pix-button--disabled):active{background-color:var(--pix-color-success-80);outline:none}.pix-button--background-yellow{color:var(--pix-color-neutral-100);background-color:var(--pix-color-warning-40)}.pix-button--background-yellow:not(.pix-button--disabled):hover{background-color:var(--pix-color-warning-50)}.pix-button--background-yellow:not(.pix-button--disabled):focus,.pix-button--background-yellow:not(.pix-button--disabled):focus-visible{background-color:var(--pix-color-warning-50);outline:1px solid var(--pix-color-neutral-0);outline-offset:-4px}.pix-button--background-yellow:not(.pix-button--disabled):active{background-color:var(--pix-color-warning-60);outline:none}.pix-button--background-red{color:var(--pix-color-neutral-0);background-color:var(--pix-color-error-70)}.pix-button--background-red:not(.pix-button--disabled):hover{background-color:var(--pix-color-error-80)}.pix-button--background-red:not(.pix-button--disabled):focus,.pix-button--background-red:not(.pix-button--disabled):focus-visible{background-color:var(--pix-color-error-70);outline:1px solid var(--pix-color-neutral-0);outline-offset:-4px}.pix-button--background-red:not(.pix-button--disabled):active{background-color:var(--pix-color-error-90);outline:none}.pix-button--background-grey{color:var(--pix-color-neutral-90);background-color:var(--pix-color-neutral-20)}.pix-button--background-grey:not(.pix-button--disabled):hover{background-color:var(--pix-color-neutral-22)}.pix-button--background-grey:not(.pix-button--disabled):focus,.pix-button--background-grey:not(.pix-button--disabled):focus-visible{background-color:var(--pix-color-neutral-90);color:var(--pix-color-neutral-0);outline:1px solid var(--pix-color-neutral-0);outline-offset:-4px}.pix-button--background-grey:not(.pix-button--disabled):active{background-color:var(--pix-color-neutral-25);color:var(--pix-color-neutral-90);outline:none}.pix-button--background-transparent{background-color:transparent;color:var(--pix-color-neutral-50);border:1px solid var(--pix-color-neutral-50)}.pix-button--background-transparent-light{color:var(--pix-color-neutral-90);background-color:transparent}.pix-button--background-transparent-light.pix-button--border{border:1px solid var(--pix-color-neutral-50)}.pix-button--background-transparent-light:not(.pix-button--disabled):hover{background-color:var(--pix-color-neutral-60);color:var(--pix-color-neutral-0);border:1px solid transparent}.pix-button--background-transparent-light:not(.pix-button--disabled):focus,.pix-button--background-transparent-light:not(.pix-button--disabled):focus-visible{background-color:var(--pix-color-neutral-90);color:var(--pix-color-neutral-0);outline:1px solid var(--pix-color-neutral-0);outline-offset:-4px}.pix-button--background-transparent-light:not(.pix-button--disabled):active{background-color:var(--pix-color-neutral-70);outline:none}.pix-button--background-transparent-dark{color:var(--pix-color-neutral-0);background-color:transparent}.pix-button--background-transparent-dark.pix-button--border{border:1px solid var(--pix-color-neutral-0)}.pix-button--background-transparent-dark:not(.pix-button--disabled):hover{background-color:var(--pix-color-neutral-10);color:var(--pix-color-neutral-90);border:1px solid transparent}.pix-button--background-transparent-dark:not(.pix-button--disabled):focus,.pix-button--background-transparent-dark:not(.pix-button--disabled):focus-visible{background-color:var(--pix-color-neutral-10);color:var(--pix-color-neutral-90);outline:1px solid var(--pix-color-neutral-90);outline-offset:-4px}.pix-button--background-transparent-dark:not(.pix-button--disabled):active{background-color:var(--pix-color-neutral-20);outline:none}.pix-button__icon{height:1rem}.pix-button__icon--before{margin-right:var(--pix-spacing-xs)}.pix-button__icon--after{margin-left:var(--pix-spacing-xs)}.pix-button .loader{position:absolute}.pix-button .loader__not-visible-text{visibility:hidden}.loader>div{width:10px;height:10px;background-color:var(--pix-color-neutral-0);border-radius:100%;display:inline-block;animation:sk-bouncedelay 1.4s infinite ease-in-out both}.loader--white>div{background-color:var(--pix-color-neutral-0)}.loader--grey>div{background-color:var(--pix-color-neutral-80)}.loader .bounce1{animation-delay:-.32s}.loader .bounce2{animation-delay:-.16s}@keyframes sk-bouncedelay{0%,80%,to{transform:scale(0)}40%{transform:scale(1)}}.pix-button-upload__input{display:none}.pix-collapsible{border:1px solid var(--pix-color-neutral-20);background-color:var(--pix-color-neutral-0)}.pix-collapsible:first-child,.pix-collapsible:first-child .pix-collapsible__title{border-top-left-radius:.5rem;border-top-right-radius:.5rem}.pix-collapsible:last-child,.pix-collapsible:last-child .pix-collapsible__title:not([aria-expanded=true]){border-bottom-left-radius:.5rem;border-bottom-right-radius:.5rem}.pix-collapsible:not(:first-child){border-top:none}.pix-collapsible__title{display:flex;justify-content:space-between;align-items:center;width:100%;padding:var(--pix-spacing-s);border:none;color:var(--pix-color-neutral-90);font-size:1rem;line-height:1.25}.pix-collapsible__title:hover,.pix-collapsible__title:focus,.pix-collapsible__title[aria-expanded=true]{background-color:var(--pix-color-neutral-10)}.pix-collapsible__title[aria-expanded=true]{border-bottom:1px solid var(--pix-color-neutral-20)}.pix-collapsible-title__container{display:flex;align-items:center;flex-grow:1}.pix-collapsible-title__icon{margin-right:var(--pix-spacing-xs);color:var(--pix-color-neutral-50)}.pix-collapsible-title__toggle-icon{width:1rem;height:1rem;padding:.5rem;margin-left:var(--pix-spacing-xs);border-radius:50%}.pix-collapsible__title:hover .pix-collapsible-title__toggle-icon{background-color:var(--pix-color-neutral-20)}.pix-collapsible__content{padding:var(--pix-spacing-s);font-size:.875rem;line-height:1.25rem;color:var(--pix-color-neutral-60)}.pix-collapsible__content[aria-hidden=true]{display:none}.pix-filter-banner{display:flex;flex-direction:column;position:relative;gap:var(--pix-spacing-xs);width:100%;background-color:var(--pix-color-neutral-0);box-shadow:0 2px 5px 0 rgba(var(--pix-color-neutral-110),.05);min-height:64px;padding:var(--pix-spacing-s) var(--pix-spacing-m)}.pix-filter-banner__title{color:var(--pix-color-neutral-60);font-size:.875rem;margin:0}.pix-filter-banner__container-filter{display:flex;flex-direction:column;gap:var(--pix-spacing-s)}.pix-filter-banner__container-action{display:flex;flex-direction:column;align-items:center;border-top:1px solid var(--pix-color-neutral-15)}.pix-filter-banner__details{color:var(--pix-color-neutral-60);font-weight:var(--pix-font-medium);padding:var(--pix-spacing-xs) 0 var(--pix-spacing-xs) 0;margin:0;font-size:.875rem}.pix-filter-banner__button{font-size:.875rem}.pix-filter-banner-button__icon{padding-right:var(--pix-spacing-xxs)}@media (min-width: 769px){.pix-filter-banner{align-items:center;flex-direction:row;gap:var(--pix-spacing-m)}.pix-filter-banner__container-title{display:flex;align-items:center}.pix-filter-banner__container-filter{flex-direction:row;flex-wrap:wrap;align-items:center;flex-grow:2}.pix-filter-banner__container-action{flex-direction:row;border:none}.pix-filter-banner__details{padding:0 var(--pix-spacing-s) 0 0;text-align:center;border:none}.pix-filter-banner__button-container{border-left:1px solid var(--pix-color-neutral-15);padding-left:var(--pix-spacing-s)}}.pix-icon-button{border-radius:50%;cursor:pointer;border:none;outline:none;padding:0;display:inline-flex;align-items:center;justify-content:center;background-color:transparent;color:var(--pix-color-neutral-60)}.pix-icon-button:disabled{opacity:.5;cursor:not-allowed}.pix-icon-button:hover:enabled{background-color:var(--pix-color-neutral-20);outline:0;color:var(--pix-color-neutral-60)}.pix-icon-button:focus:enabled{background-color:var(--pix-color-neutral-60);outline:1px solid var(--pix-color-neutral-0);outline-offset:-3px;color:var(--pix-color-neutral-0)}.pix-icon-button:active:enabled{background-color:var(--pix-color-neutral-22);outline:0;color:var(--pix-color-neutral-60)}.pix-icon-button--background{background-color:var(--pix-color-neutral-10)}.pix-icon-button--small{width:2rem;min-width:2rem;height:2rem;font-size:1rem}.pix-icon-button--big{width:2.375rem;min-width:2.375rem;height:2.375rem;font-size:1.25rem}.pix-message{margin:0;padding:.75rem 1rem;font-size:.875rem;border-radius:4px;align-items:center;display:flex}.pix-message.pix-message--info{color:var(--pix-color-primary-70);background-color:var(--pix-color-primary-5)}.pix-message.pix-message--alert,.pix-message.pix-message--error{color:var(--pix-color-error-70);background-color:var(--pix-color-error-5)}.pix-message.pix-message--success{color:var(--pix-color-success-70);background-color:var(--pix-color-success-5)}.pix-message.pix-message--warning{color:var(--pix-color-warning-70);background-color:var(--pix-color-warning-5)}.pix-message svg{margin-right:8px}.pix-multi-select{display:inline-block;position:relative}.pix-multi-select__label{display:block;font-size:.875rem;line-height:1.375rem;color:var(--pix-color-neutral-90);margin-bottom:var(--pix-color-spacing-xxs);font-weight:var(--pix-font-medium)}.pix-multi-select-header{display:flex;flex-direction:row;align-items:center;position:relative;border:1px var(--pix-color-neutral-40) solid;height:36px;padding:0 32px 0 16px;width:100%;background-color:var(--pix-color-neutral-0);border-radius:4px;outline:none;font-size:.875rem;cursor:pointer;color:var(--pix-color-neutral-90)}.pix-multi-select-header:hover{box-shadow:inset 0 0 0 .6px var(--pix-color-neutral-70);background-color:var(--pix-color-neutral-5)}.pix-multi-select-header:focus-within{border-color:var(--pix-color-primary);box-shadow:inset 0 0 0 .6px var(--pix-color-primary);outline:none}.pix-multi-select-header--big{height:44px}.pix-multi-select-header__search-icon{color:var(--pix-color-neutral-30)}.pix-multi-select-header__title{position:absolute;opacity:0;width:0;height:0}.pix-multi-select-header input.pix-multi-select-header__search-input{height:inherit;width:100%;border:none;outline:none;padding:0 10px;border-radius:3px;font-size:.875rem;color:var(--pix-color-neutral-90);background:transparent}.pix-multi-select-header__dropdown-icon{color:var(--pix-color-neutral-60);right:10px;top:calc(50% - 6px);position:absolute;pointer-events:none}.pix-multi-select-list{width:100%;margin:0;z-index:200;background-color:var(--pix-color-neutral-0);position:absolute;border-top:none;border-radius:0 0 4px 4px;overflow-y:auto;max-height:200px;list-style-type:none;padding:0;box-shadow:0 6px 12px #07142e14;transition:all .1s ease-in-out;margin-top:var(--pix-spacing-xxs)}.pix-multi-select-list__item-label{padding:var(--pix-spacing-xs) var(--pix-spacing-m)}.pix-multi-select-list--hidden{visibility:hidden;opacity:0}.pix-multi-select-list::-webkit-scrollbar{width:11px}.pix-multi-select-list::-webkit-scrollbar-track{border-radius:4px;border:1px solid var(--pix-color-neutral-20);background:var(--pix-color-neutral-0)}.pix-multi-select-list::-webkit-scrollbar-thumb{border-radius:4px;background:var(--pix-color-neutral-30)}.pix-multi-select-list::-webkit-scrollbar-thumb:hover{background:var(--pix-color-neutral-35)}.pix-multi-select-list li.pix-multi-select-list__item{position:relative;list-style:none}.pix-multi-select-list li.pix-multi-select-list__item:hover,.pix-multi-select-list li.pix-multi-select-list__item:focus{outline:none;cursor:pointer;background-color:var(--pix-color-neutral-10)}.pix-multi-select-list li.pix-multi-select-list__item--no-result{text-align:center;padding:12px 0}.pix-multi-select-list li.pix-multi-select-list__item:last-of-type{border-bottom:none}.progress-gauge{position:relative;display:grid;grid-template-areas:"text progressbar" "subtitle subtitle";grid-template-columns:auto 1fr;align-items:center;width:100%;min-width:6rem;border-radius:5px}.progress-gauge__bar{grid-area:progressbar;inline-size:unset;flex-grow:1;height:.875rem;border:2px solid var(--pix-color-neutral-20);border-radius:1.625rem;overflow:hidden}.progress-gauge__bar::-webkit-progress-value{background-color:var(--pix-color-primary);border-radius:1.625rem}.progress-gauge__bar::-moz-progress-bar{background-color:var(--pix-color-primary);border-radius:1.625rem}.progress-gauge__bar::-webkit-progress-bar{background-color:var(--pix-color-neutral-20)}.progress-gauge__text{grid-area:text;min-width:5ch;margin-right:var(--pix-spacing-xxs);white-space:nowrap;font-weight:500;line-height:1}.progress-gauge__sub-title{grid-area:subtitle;width:100%;margin:6px 0;color:var(--pix-color-primary-60);letter-spacing:.4px;text-transform:uppercase;text-overflow:ellipsis;overflow:hidden}.progress-gauge--theme-dark .progress-gauge__bar{border:2px solid var(--pix-color-neutral-0)}.progress-gauge--theme-dark .progress-gauge__bar::-webkit-progress-bar{background-color:var(--pix-color-neutral-0)}.progress-gauge--theme-dark .progress-gauge__text,.progress-gauge--theme-dark .progress-gauge__sub-title{color:var(--pix-color-neutral-0)}.progress-gauge--content-blue .progress-gauge__bar::-webkit-progress-value{background-color:var(--pix-color-primary)}.progress-gauge--content-blue .progress-gauge__bar::-moz-progress-bar{background-color:var(--pix-color-primary)}.progress-gauge--content-blue:not(.progress-gauge--theme-dark) .progress-gauge__text,.progress-gauge--content-blue:not(.progress-gauge--theme-dark) .progress-gauge__sub-title{color:var(--pix-color-primary)}.progress-gauge--content-green .progress-gauge__bar::-webkit-progress-value{background-color:var(--pix-color-success-60)}.progress-gauge--content-green .progress-gauge__bar::-moz-progress-bar{background-color:var(--pix-color-success-60)}.progress-gauge--content-green:not(.progress-gauge--theme-dark) .progress-gauge__text,.progress-gauge--content-green:not(.progress-gauge--theme-dark) .progress-gauge__sub-title{color:var(--pix-color-success-60)}.progress-gauge--content-purple .progress-gauge__bar::-webkit-progress-value{background-color:var(--pix-color-tertiary-60)}.progress-gauge--content-purple .progress-gauge__bar::-moz-progress-bar{background-color:var(--pix-color-tertiary-60)}.progress-gauge--content-purple:not(.progress-gauge--theme-dark) .progress-gauge__text,.progress-gauge--content-purple:not(.progress-gauge--theme-dark) .progress-gauge__sub-title{color:var(--pix-color-tertiary-60)}.pix-return-to{font-size:1rem;font-weight:var(--pix-font-medium);letter-spacing:.15px;display:inline-flex;align-items:center;border-bottom:transparent solid 2px;text-decoration:none}.pix-return-to__icon{position:relative;z-index:3;padding:4px 7px;font-size:1rem}.pix-return-to__icon:before{content:"";position:absolute;z-index:-1;width:100%;height:100%;top:0;left:0;opacity:0;border-radius:50%;transition:.3s ease opacity}.pix-return-to__text{margin-left:4px}.pix-return-to:hover,.pix-return-to:active{cursor:pointer;background-color:transparent;border-bottom-color:transparent}.pix-return-to:hover :before,.pix-return-to:active :before{opacity:.2}.pix-return-to:focus-visible{background-color:var(--pix-color-warning-40);border-bottom:var(--pix-color-neutral-100) solid 2px}.pix-return-to:focus-visible .pix-return-to__text{padding-right:6px}.pix-return-to--white{color:var(--pix-color-neutral-10)}.pix-return-to--white .pix-return-to__icon,.pix-return-to--white:hover,.pix-return-to--white:active{color:var(--pix-color-neutral-0)}.pix-return-to--white:hover :before,.pix-return-to--white:active :before{background-color:var(--pix-color-neutral-0)}.pix-return-to--black{color:var(--pix-color-neutral-80)}.pix-return-to--black .pix-return-to__icon{color:var(--pix-color-neutral-60)}.pix-return-to--black:hover,.pix-return-to--black:active{color:var(--pix-color-neutral-110)}.pix-return-to--black:hover :before,.pix-return-to--black:active :before{background-color:var(--pix-color-neutral-60)}.pix-return-to--blue,.pix-return-to--blue .pix-return-to__icon{color:var(--pix-communication-dark)}.pix-return-to--blue:hover,.pix-return-to--blue:active{color:var(--pix-color-primary-60)}.pix-return-to--blue:hover :before,.pix-return-to--blue:active :before{background-color:var(--pix-communication-dark)}.pix-select{display:inline-block;position:relative}.pix-select__label{display:block;font-size:.875rem;line-height:1.375rem;color:var(--pix-color-neutral-90);margin-bottom:var(--pix-color-spacing-xxs);font-weight:var(--pix-font-medium)}.pix-select__sub-label{display:block;margin-bottom:var(--pix-color-spacing-xxs);font-size:.813rem;line-height:1rem;color:var(--pix-color-neutral-60);font-weight:var(--pix-font-normal)}.pix-select__dropdown{z-index:200;position:absolute;max-height:12.5rem;width:inherit;border-top:none;border-radius:0 0 var(--pix-spacing-xxs) var(--pix-spacing-xxs);list-style-type:none;padding:0;background-color:var(--pix-color-neutral-0);box-shadow:0 6px 12px #07142e14;transition:all .1s ease-in-out;white-space:nowrap;margin-top:var(--pix-spacing-xxs);overflow-y:auto}.pix-select__dropdown::-webkit-scrollbar{width:.5rem}.pix-select__dropdown::-webkit-scrollbar-track{border-radius:var(--pix-spacing-xxs);border:1px solid var(--pix-color-neutral-20);background:var(--pix-color-neutral-20)}.pix-select__dropdown::-webkit-scrollbar-thumb{border-radius:var(--pix-spacing-xxs);width:.375rem;background:var(--pix-color-neutral-30)}.pix-select__dropdown::-webkit-scrollbar-thumb:hover{background:var(--pix-color-neutral-35)}.pix-select__dropdown--closed{visibility:hidden;opacity:0}.pix-select__empty-search-message{color:var(--pix-color-neutral-70);text-align:center}.pix-select__search{display:flex;border-bottom:2px solid var(--pix-color-neutral-22);margin:var(--pix-spacing-s) var(--pix-spacing-m);color:var(--pix-color-neutral-30);border-radius:var(--pix-spacing-xxs) var(--pix-spacing-xxs) 0 0}.pix-select__search:focus-within{background:var(--pix-color-neutral-10);border-bottom:2px solid var(--pix-color-primary)}.pix-select__options{border-top:1px solid var(--pix-color-neutral-20)}.pix-select__error-message{font-size:.75rem;color:var(--pix-color-error-70);margin-top:var(--pix-color-spacing-xxs)}.pix-select-button{display:flex;align-items:center;position:relative;border:1px var(--pix-color-neutral-45) solid;padding:0 var(--pix-spacing-s) 0 var(--pix-spacing-s);width:100%;background-color:var(--pix-color-neutral-0);border-radius:var(--pix-spacing-xxs);outline:none;height:2.25rem;cursor:pointer;color:var(--pix-color-neutral-90);justify-content:space-between}.pix-select-button:hover{box-shadow:inset 0 0 0 .6px var(--pix-color-neutral-70);background-color:var(--pix-color-neutral-5)}.pix-select-button:focus-within{border-color:var(--pix-color-primary);box-shadow:inset 0 0 0 .6px var(--pix-color-primary);outline:none}.pix-select-button--disabled{background-color:var(--pix-color-neutral-20)}.pix-select-button--disabled:hover{box-shadow:inset 0 0 0 .6px var(--pix-color-neutral-70);background-color:var(--pix-color-neutral-20)}.pix-select-button--error{border-color:var(--pix-color-error-70);box-shadow:inset 0 0 0 .6px var(--pix-color-error-70)}.pix-select-button__text{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.pix-select-button__dropdown-icon{margin-left:var(--pix-spacing-xs);color:var(--pix-color-neutral-60);pointer-events:none}.pix-select-options__category{list-style:none;padding:0;margin:0}.pix-select-options-category__name{padding:var(--pix-spacing-s) var(--pix-spacing-m) var(--pix-spacing-xs) var(--pix-spacing-m);text-transform:uppercase;color:var(--pix-color-neutral-45)}.pix-select-options-category__option{display:flex;justify-content:space-between;padding:var(--pix-spacing-xs) var(--pix-spacing-m);color:var(--pix-color-neutral-70)}.pix-select-options-category__option:hover,.pix-select-options-category__option:focus{outline:none;cursor:pointer;background-color:var(--pix-color-neutral-10)}.pix-select-options-category__option svg{visibility:hidden;opacity:0;font-size:1.125rem}.pix-select-options-category__option--selected{background-color:var(--pix-color-primary-5);align-items:center}.pix-select-options-category__option--selected svg{visibility:visible;opacity:1}.pix-select-options-category__option--hidden{visibility:hidden;height:0;padding-top:0;padding-bottom:0}.pix-select-search__input{width:100%;border:none;padding-left:var(--pix-spacing-xs);margin:var(--pix-spacing-xxs)}.pix-select-search__input:focus{outline:none;background:var(--pix-color-neutral-10)}.pix-select-search__icon{margin:auto var(--pix-spacing-xxs)}.pix-stars{display:flex;height:2.25rem}.pix-stars *+*{margin-left:var(--pix-spacing-xxs)}.pix-stars__item{height:100%;fill:var(--pix-color-neutral-5);stroke:var(--pix-color-neutral-40)}.pix-stars__item[data-acquired]{fill:var(--pix-color-secondary-40);stroke:var(--pix-color-secondary-60)}.pix-stars__item--color-blue[data-acquired]{fill:var(--pix-color-primary-40);stroke:var(--pix-color-primary-60)}.pix-stars__item--color-grey{fill:var(--pix-color-neutral-0);stroke:var(--pix-color-neutral-40)}.pix-stars__item--color-grey[data-acquired]{fill:var(--pix-color-neutral-40);stroke:var(--pix-color-neutral-40)}.pix-tag{display:inline-block;text-align:center;vertical-align:baseline;white-space:nowrap;padding:4px 16px;border:1px solid transparent;border-radius:.95rem;color:var(--pix-color-neutral-0);background-color:var(--pix-color-primary);font-weight:var(--pix-font-medium)}.pix-tag--blue-light{color:var(--pix-color-primary-80);background-color:var(--pix-color-primary-10)}.pix-tag--green{background-color:var(--pix-color-success-70)}.pix-tag--green-light{color:var(--pix-color-success-80);background-color:var(--pix-color-success-10)}.pix-tag--purple{background-color:var(--pix-color-tertiary-60)}.pix-tag--purple-light{color:var(--pix-color-tertiary-80);background-color:var(--pix-color-tertiary-5)}.pix-tag--yellow{color:var(--pix-color-neutral-90);background-color:var(--pix-color-warning-40)}.pix-tag--yellow-light{color:var(--pix-color-warning-80);background-color:var(--pix-color-warning-10)}.pix-tag--orange{background-color:var(--pix-color-warning-70)}.pix-tag--orange-light{color:var(--pix-color-warning-80);background-color:var(--pix-color-warning-10)}.pix-tag--grey{color:var(--pix-color-neutral-15);background-color:var(--pix-color-neutral-60)}.pix-tag--grey-light{color:var(--pix-color-neutral-90);background-color:var(--pix-color-neutral-20)}.pix-tag--compact{font-weight:var(--pix-font-medium);text-transform:uppercase;padding:4px 13px;line-height:inherit}.pix-textarea textarea{width:100%;border:1px solid var(--pix-color-neutral-40);border-style:solid;border-radius:4px;padding:10px 16px;color:var(--pix-color-neutral-90);font-size:.875rem;resize:vertical}.pix-textarea textarea:hover{box-shadow:inset 0 0 0 .6px var(--pix-color-neutral-70);background-color:var(--pix-color-neutral-5)}.pix-textarea textarea:focus{border-color:var(--pix-color-primary);box-shadow:inset 0 0 0 .6px var(--pix-color-primary);outline:none}.pix-textarea textarea.pix-textarea--error{border-color:var(--pix-color-error-70);box-shadow:inset 0 0 0 .6px var(--pix-color-error-70)}.pix-textarea p{color:var(--pix-color-neutral-45);margin-top:6px;font-size:12px;display:flex;flex-direction:row-reverse;margin-bottom:0}.pix-textarea__label{display:block;font-size:.875rem;line-height:1.375rem;color:var(--pix-color-neutral-90);margin-bottom:var(--pix-color-spacing-xxs);font-weight:var(--pix-font-medium)}.pix-textarea__error-message{font-size:.75rem;color:var(--pix-color-error-70);margin-top:var(--pix-color-spacing-xxs)}.pix-tooltip{position:relative;display:flex;justify-content:center;align-items:center}.pix-tooltip__trigger-element{display:block;width:100%}.pix-tooltip__content{display:none;opacity:0;pointer-events:none;background-color:var(--pix-color-neutral-100);position:absolute;z-index:100;padding:8px 16px;left:auto;color:var(--pix-color-neutral-0);font-size:.875rem;border-radius:6px;line-height:1.4rem;transition:opacity .3s}.pix-tooltip__content--visible{display:block;opacity:1}.pix-tooltip__content--inline{white-space:nowrap}.pix-tooltip__content:before{content:"";position:absolute;border-width:5px;border-style:solid}.pix-tooltip__content--wide{width:382px}.pix-tooltip__content--light{font-weight:var(--pix-font-medium);background-color:var(--pix-color-neutral-0);color:var(--pix-color-neutral-60);box-shadow:0 6px 24px 0 rgba(var(--pix-color-neutral-70),.14)}.pix-tooltip__content--light:before{border-width:0;height:8px;width:8px;background-color:var(--pix-color-neutral-0)}.pix-tooltip__content--right{left:calc(100% + 10px)}.pix-tooltip__content--right:before{top:calc(50% - 5px);left:-10px;border-color:transparent var(--pix-color-neutral-100) transparent transparent}.pix-tooltip__content--right.pix-tooltip__content--light:before{left:-5px;transform:rotate(315deg);border-color:var(--pix-color-neutral-40) transparent transparent var(--pix-color-neutral-40)}.pix-tooltip__content--top{bottom:calc(100% + 10px);left:50%;transform:translate(-50%)}.pix-tooltip__content--top:before{top:100%;left:calc(50% - 5px);border-color:var(--pix-color-neutral-100) transparent transparent transparent}.pix-tooltip__content--top.pix-tooltip__content--light:before{top:calc(100% - 5px);transform:rotate(225deg);border-color:var(--pix-color-neutral-40) transparent transparent var(--pix-color-neutral-40)}.pix-tooltip__content--top-left{bottom:calc(100% + 10px);transform:translate(calc(-50% + 22px))}.pix-tooltip__content--top-left:before{top:100%;left:calc(100% - 27px);border-color:var(--pix-color-neutral-100) transparent transparent transparent}.pix-tooltip__content--top-left.pix-tooltip__content--light:before{top:calc(100% - 5px);left:calc(100% - 26px);transform:rotate(225deg);border-color:var(--pix-color-neutral-40) transparent transparent var(--pix-color-neutral-40)}.pix-tooltip__content--top-right{bottom:calc(100% + 10px);transform:translate(calc(50% - 22px))}.pix-tooltip__content--top-right:before{top:100%;border-color:var(--pix-color-neutral-100) transparent transparent transparent}.pix-tooltip__content--top-right.pix-tooltip__content--light:before{top:calc(100% - 5px);transform:rotate(225deg);border-color:var(--pix-color-neutral-40) transparent transparent var(--pix-color-neutral-40)}.pix-tooltip__content--bottom{top:calc(100% + 10px);left:50%;transform:translate(-50%)}.pix-tooltip__content--bottom:before{top:-10px;left:calc(50% - 5px);border-color:transparent transparent var(--pix-color-neutral-100) transparent}.pix-tooltip__content--bottom.pix-tooltip__content--light:before{top:-5px;transform:rotate(45deg);border-color:var(--pix-color-neutral-40) transparent transparent var(--pix-color-neutral-40)}.pix-tooltip__content--bottom-left{top:calc(100% + 10px);transform:translate(calc(-50% + 22px))}.pix-tooltip__content--bottom-left:before{top:-10px;left:calc(100% - 27px);border-color:transparent transparent var(--pix-color-neutral-100) transparent}.pix-tooltip__content--bottom-left.pix-tooltip__content--light:before{top:-5px;left:calc(100% - 26px);transform:rotate(45deg);border-color:var(--pix-color-neutral-40) transparent transparent var(--pix-color-neutral-40)}.pix-tooltip__content--bottom-right{top:calc(100% + 10px);transform:translate(calc(50% - 22px))}.pix-tooltip__content--bottom-right:before{top:-10px;border-color:transparent transparent var(--pix-color-neutral-100) transparent}.pix-tooltip__content--bottom-right.pix-tooltip__content--light:before{top:-5px;transform:rotate(45deg);border-color:var(--pix-color-neutral-40) transparent transparent var(--pix-color-neutral-40)}.pix-tooltip__content--left{right:calc(100% + 10px)}.pix-tooltip__content--left:before{top:calc(50% - 5px);right:-10px;border-color:transparent transparent transparent var(--pix-color-neutral-100)}.pix-tooltip__content--left.pix-tooltip__content--light:before{right:-5px;transform:rotate(135deg);border-color:var(--pix-color-neutral-40) transparent transparent var(--pix-color-neutral-40)}.pix-input{display:flex;flex-direction:column;position:relative}.pix-input__label{display:block;font-size:.875rem;line-height:1.375rem;color:var(--pix-color-neutral-90);margin-bottom:var(--pix-color-spacing-xxs);font-weight:var(--pix-font-medium)}.pix-input__information{display:block;margin-bottom:var(--pix-color-spacing-xxs);font-size:.813rem;line-height:1rem;color:var(--pix-color-neutral-60);font-weight:var(--pix-font-normal)}.pix-input__container{position:relative}.pix-input svg{position:absolute;color:var(--pix-color-neutral-0);border-radius:50%;font-size:.6rem;padding:2px;bottom:11px;right:12px;width:10px;height:10px}.pix-input svg.pix-input__error-icon{background:var(--pix-color-error-70)}.pix-input svg.pix-input__success-icon{background:var(--pix-color-success-60)}.pix-input__error-message{font-size:.75rem;color:var(--pix-color-error-70);margin-top:var(--pix-color-spacing-xxs)}.pix-input__input--default{width:100%;height:36px;border:1px solid var(--pix-color-neutral-40);font-size:.875rem;font-weight:var(--pix-font-normal);color:var(--pix-color-neutral-90);border-radius:var(--pix-color-spacing-xxs);padding:0 var(--pix-color-spacing-s) 0 var(--pix-color-spacing-s)}.pix-input__input--default:hover{box-shadow:inset 0 0 0 .6px var(--pix-color-neutral-70);background-color:var(--pix-color-neutral-5)}.pix-input__input--default:focus{border-color:var(--pix-color-primary);box-shadow:inset 0 0 0 .6px var(--pix-color-primary);outline:none}.pix-input__input--default::placeholder{color:var(--pix-color-neutral-30)}.pix-input__input--error{padding-right:var(--pix-spacing-l);border-color:var(--pix-color-error-70);box-shadow:inset 0 0 0 .6px var(--pix-color-error-70)}.pix-input__input--success{padding-right:var(--pix-spacing-l);border-color:var(--pix-color-success-60);box-shadow:inset 0 0 0 .6px var(--pix-color-success-60)}.pix-input-password{display:flex;flex-direction:column;position:relative}.pix-input-password__container{position:relative;display:flex;align-items:center;border:1px solid var(--pix-color-neutral-40);border-radius:var(--pix-spacing-xxs);padding:1px 0 1px 1px}.pix-input-password__container:hover{box-shadow:inset 0 0 0 .6px var(--pix-color-neutral-70);background-color:var(--pix-color-neutral-5)}.pix-input-password__container:focus-within{border-color:var(--pix-color-primary);box-shadow:inset 0 0 0 .6px var(--pix-color-primary)}.pix-input-password__container input{font-size:.875rem;font-weight:var(--pix-font-normal);color:var(--pix-color-neutral-90);border-radius:var(--pix-color-spacing-xxs);padding:0 var(--pix-color-spacing-s) 0 var(--pix-color-spacing-s);height:34px;border:none;outline:none;flex-grow:1}.pix-input-password__with-prefix input{padding-left:0}.pix-input-password__prefix{padding:0 4px 0 8px}.pix-input-password__button{margin-right:var(--pix-spacing-xxs)}.pix-input-password__button:hover,.pix-input-password__button:active,.pix-input-password__button:focus{background-color:transparent;color:var(--pix-color-neutral-90)}.pix-input-password__error-container{padding-right:var(--pix-spacing-m);border-color:var(--pix-color-error-70);box-shadow:inset 0 0 0 .6px var(--pix-color-error-70)}.pix-input-password__success-container{padding-right:var(--pix-spacing-m);border-color:var(--pix-color-success-60);box-shadow:inset 0 0 0 .6px var(--pix-color-success-60)}.pix-input-password__icon{position:absolute;color:var(--pix-color-neutral-0);border-radius:50%;font-size:.6rem;padding:2px;right:12px;width:10px;height:10px}.pix-input-password__error-icon{background:var(--pix-color-error-70)}.pix-input-password__success-icon{background:var(--pix-color-success-60)}.pix-input-password__error-message{font-size:.75rem;color:var(--pix-color-error-70);margin-top:var(--pix-color-spacing-xxs)}.pix-radio-button{display:flex;align-items:center}.pix-radio-button+.pix-radio-button{margin-top:var(--pix-spacing-s)}.pix-radio-button__label{padding-left:12px;color:var(--pix-color-neutral-90);font-size:1rem;line-height:1.5;cursor:pointer}.pix-radio-button__input{position:relative;width:1rem;height:1rem;flex-shrink:0;background-color:var(--pix-color-neutral-0);border:1.5px solid var(--pix-color-neutral-70);border-radius:50%;appearance:none;cursor:pointer}.pix-radio-button__input:before{content:"";position:absolute;z-index:-1;top:50%;left:50%;width:1rem;height:1rem;transform:translate(-50%,-50%) scale(1);border-radius:50%;background-color:var(--pix-color-neutral-15);visibility:hidden;opacity:0;transition:all .3s ease}.pix-radio-button__input:hover:before,.pix-radio-button__input:focus-visible:before,.pix-radio-button__input:active:before{visibility:visible;opacity:1;transform:translate(-50%,-50%) scale(1.75)}.pix-radio-button__input:active:before{background-color:var(--pix-color-neutral-22)}.pix-radio-button__input:checked{border-color:var(--pix-color-primary)}.pix-radio-button__input:checked:after{content:"";position:absolute;top:50%;left:50%;height:62.5%;width:62.5%;transform:translate(-50%,-50%);background-color:var(--pix-color-primary);border-radius:50%}.pix-radio-button__input:disabled{background-color:var(--pix-color-neutral-10);border-color:var(--pix-color-neutral-30);cursor:not-allowed}.pix-radio-button__input:disabled+.pix-radio-button__label{cursor:not-allowed}.pix-radio-button__input:disabled:before{display:none}.pix-radio-button__input:disabled:checked:after{background-color:var(--pix-color-neutral-30)}.pix-modal__overlay{position:fixed;z-index:1000;inset:0;overflow-y:auto;text-align:center;padding:var(--pix-spacing-xs) 0;background-color:#344563b3;transition:all .3s ease-in-out}.pix-modal__overlay:after{content:"";display:inline-block;vertical-align:middle;height:100%;width:0}.pix-modal__overlay--hidden{visibility:hidden;opacity:0}.pix-modal{display:inline-block;vertical-align:middle;width:512px;max-width:calc(100% - var(--pix-spacing-s));text-align:initial;background-color:var(--pix-color-neutral-10);box-shadow:1px 1px 5px #0000001a;border-radius:4px;overflow:hidden}.pix-modal__header{background:var(--pix-color-neutral-0);border-bottom:1px solid var(--pix-color-neutral-20);padding:24px;display:flex;align-items:flex-start;justify-content:space-between}.pix-modal__close-button{flex-shrink:0;margin-top:-4px}@media (min-width: 769px){.pix-modal__close-button{height:40px;width:40px}}.pix-modal__title{margin-bottom:0;color:var(--pix-color-neutral-90);padding-right:40px}@media (min-width: 769px){.pix-modal__title{padding-right:48px}}.pix-modal__content{padding:24px;color:var(--pix-color-neutral-90)}.pix-modal__content p:last-child{margin-bottom:0}.pix-modal__footer{padding:0 24px 8px}.pix-sidebar__overlay{position:fixed;z-index:1000;inset:0;overflow-y:scroll;background-color:#344563b3;transition:all .3s ease-in-out}.pix-sidebar__overlay--hidden{visibility:hidden;opacity:0}.pix-sidebar{display:flex;flex-direction:column;height:100%;max-width:320px;box-shadow:1px 1px 5px #0000001a;background:var(--pix-color-neutral-0);transform:translate(0);transition:transform .3s ease-in-out}.pix-sidebar--hidden{transform:translate(-100%)}.pix-sidebar__header{border-bottom:1px solid var(--pix-color-neutral-20);padding:16px;display:flex;align-items:center;justify-content:space-between}.pix-sidebar__close-button{flex-shrink:0}@media (min-width: 769px){.pix-sidebar__close-button{height:40px;width:40px}}.pix-sidebar__content{flex-grow:1;overflow:auto}.pix-sidebar__title{margin-bottom:0;color:var(--pix-color-neutral-90);padding-right:40px}@media (min-width: 769px){.pix-sidebar__title{padding-right:48px}}.pix-sidebar__footer{padding:16px;border-top:1px solid var(--pix-color-neutral-20)}.pix-input-code{display:flex}.pix-input-code input[type=number]{-moz-appearance:textfield}.pix-input-code input[type=number]::-webkit-inner-spin-button,.pix-input-code input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none}.pix-input-code fieldset legend,.pix-input-code #pix-input-code__details-of-use{display:none}.pix-input-code input:nth-of-type(3n + 4){margin-left:12px}.pix-input-code input.pix-input-code__input{display:inline-block;height:44px;width:38px;padding:10px 12px 8px;background-color:var(--pix-color-neutral-10);border:1.4px solid var(--pix-color-neutral-50);font-size:1.25rem;color:var(--pix-color-neutral-90);border-radius:4px;text-align:center;outline:none}.pix-input-code input.pix-input-code__input:hover{box-shadow:inset 0 0 0 .6px var(--pix-color-neutral-70);background-color:var(--pix-color-neutral-5);border-color:var(--pix-color-neutral-70)}.pix-input-code input.pix-input-code__input:not(:first-child){margin-left:4px}.pix-input-code input.pix-input-code__input::placeholder{color:var(--pix-color-neutral-50)}.pix-input-code input.pix-input-code__input:active,.pix-input-code input.pix-input-code__input:focus{border-color:var(--pix-color-primary);background-color:var(--pix-color-neutral-0)}.pix-input-code input.pix-input-code__input:active::placeholder,.pix-input-code input.pix-input-code__input:focus::placeholder{opacity:0}.pix-input-code input.pix-input-code__input.filled{background-color:var(--pix-color-neutral-0)}.pix-selectable-tag{display:inline-block;text-align:center;position:relative;padding:3px calc(8px + .5315rem);letter-spacing:.009rem;border-radius:.95rem;border:var(--pix-color-neutral-30) solid 1px;color:var(--pix-color-neutral-60);background-color:var(--pix-color-neutral-0);cursor:pointer;font-weight:var(--pix-font-medium)}.pix-selectable-tag input{position:absolute;opacity:0;cursor:pointer;width:100%;height:100%;left:0;top:0}.pix-selectable-tag label{cursor:pointer}.pix-selectable-tag:hover{background-color:var(--pix-color-neutral-22);border:var(--pix-color-neutral-25) solid 1px;color:var(--pix-color-neutral-70)}.pix-selectable-tag--checked{border:var(--pix-color-neutral-22) solid 1px;background-color:var(--pix-color-neutral-20);color:var(--pix-color-neutral-70);padding:3px 8px}.pix-selectable-tag--checked input[type=checkbox]:checked+label:before{position:absolute;top:10px;left:10px;width:.625rem;height:.3125rem;border:2px solid;border-color:var(--pix-color-neutral-70);border-top:none;border-right:none;transform:rotate(-45deg);content:""}.pix-selectable-tag--checked:hover{background-color:var(--pix-color-neutral-22);border:var(--pix-color-neutral-25) solid 1px;color:var(--pix-color-neutral-70)}.pix-selectable-tag--checked:hover input[type=checkbox]:checked+label:before{position:absolute;top:10px;left:10px;width:.625rem;height:.3125rem;border:2px solid;border-color:var(--pix-color-neutral-70);border-top:none;border-right:none;transform:rotate(-45deg);content:""}.pix-selectable-tag--checked label{padding-left:1.063rem}.pix-selectable-tag:focus-within{background-color:var(--pix-color-neutral-60);color:var(--pix-color-neutral-0);box-shadow:0 0 0 1px var(--pix-color-neutral-60);border-color:var(--pix-color-neutral-0);outline:none}.pix-selectable-tag:focus-within input[type=checkbox]:checked+label:before{position:absolute;top:10px;left:10px;width:.625rem;height:.3125rem;border:2px solid;border-color:var(--pix-color-neutral-0);border-top:none;border-right:none;transform:rotate(-45deg);content:""}.pix-selectable-tag:focus-within:hover{color:var(--pix-color-neutral-70);background-color:var(--pix-color-neutral-22);border:var(--pix-color-neutral-25) solid 1px}.pix-selectable-tag:focus-within:hover input[type=checkbox]:checked+label:before{position:absolute;top:10px;left:10px;width:.625rem;height:.3125rem;border:2px solid;border-color:var(--pix-color-neutral-70);border-top:none;border-right:none;transform:rotate(-45deg);content:""}.pix-dropdown{width:100%;position:relative}.pix-dropdown button{margin:0;text-align:left;cursor:pointer}.pix-dropdown__label{display:block;font-size:.875rem;line-height:1.375rem;color:var(--pix-color-neutral-90);margin-bottom:var(--pix-color-spacing-xxs);font-weight:var(--pix-font-medium)}.pix-dropdown__controller{width:100%;position:relative}.pix-dropdown__controller--placeholder{width:100%;min-width:250px;min-height:34px;border:1px solid var(--pix-color-neutral-40);border-radius:var(--pix-spacing-xxs);padding:0;background:var(--pix-color-neutral-0)}.pix-dropdown__controller--placeholder:hover{box-shadow:inset 0 0 0 .6px var(--pix-color-neutral-70);background-color:var(--pix-color-neutral-5)}.pix-dropdown__controller--placeholder:focus{border-color:var(--pix-color-primary);box-shadow:inset 0 0 0 .6px var(--pix-color-primary);outline:none}.pix-dropdown__controller--placeholder.expanded{border-bottom-left-radius:0;border-bottom-right-radius:0}.pix-dropdown__controller--placeholder-text{color:var(--pix-color-neutral-90);margin:0;font-size:.875rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:8px 68px 8px 16px}.pix-dropdown__controller--placeholder-text.default{color:var(--pix-color-neutral-60);padding-right:36px}.pix-dropdown__controller--clear{background:transparent;font-size:1rem;color:var(--pix-color-neutral-50);position:absolute;padding:8px 8px 6px;border:none;border-right:2px solid var(--pix-color-neutral-40);right:38px;top:1px;width:fit-content}.pix-dropdown__controller--clear:hover{color:var(--pix-color-neutral-70)}.pix-dropdown__controller--chevron{background:transparent;border:none;padding:0;position:absolute;top:9px;right:12px;color:var(--pix-color-neutral-50);cursor:pointer}.pix-dropdown__controller--chevron:hover{color:var(--pix-color-neutral-70)}.pix-dropdown__menu{background:var(--pix-color-neutral-0);position:absolute;top:100%;width:100%;max-height:0;transition:max-height ease-in .5s;overflow:hidden;overflow-y:auto;z-index:1}.pix-dropdown__menu.expanded{max-height:300px;border:1px solid var(--pix-color-neutral-40);border-top:none;border-radius:0 0 var(--pix-spacing-xxs) var(--pix-spacing-xxs)}.pix-dropdown__menu--search{display:flex;position:relative}.pix-dropdown__menu--search-icon{color:var(--pix-color-neutral-30);margin:4px;position:absolute;left:16px;top:12px}.pix-dropdown__menu--search-input{border:none;border-bottom:1px solid var(--pix-color-neutral-40);font-size:.875rem;flex-grow:1;margin:12px 12px 8px;padding:4px 4px 4px 32px;outline:none}.pix-dropdown__menu--search-input:hover{box-shadow:inset 0 -.7px 0 0 var(--pix-color-neutral-40)}.pix-dropdown__menu--search-input:focus{box-shadow:inset 0 -.7px 0 0 var(--pix-color-primary);border-color:var(--pix-color-primary)}.pix-dropdown__menu--search-input-label{height:0;width:0;overflow:hidden}.pix-dropdown__menu--option{padding:8px 12px;font-size:.875rem;cursor:pointer}.pix-dropdown__menu--option.selected{color:var(--pix-color-neutral-70)}.pix-dropdown__menu--option:focus,.pix-dropdown__menu--option:hover{outline:none;background:var(--pix-color-neutral-15)}.pix-pagination,.pix-pagination-condensed{display:flex;justify-content:center;color:var(--pix-color-neutral-60);font-size:.875rem}.pix-pagination__size,.pix-pagination-condensed__size{display:none;align-items:center;padding:0}.pix-pagination__size .pagination-size__label,.pix-pagination-condensed__size .pagination-size__label{margin-right:16px}.pix-pagination__size select.pagination__choice,.pix-pagination-condensed__size select.pagination__choice{height:36px;font-size:.8rem;padding-left:8px;padding-right:24px}.pix-pagination__navigation,.pix-pagination-condensed__navigation{display:flex;align-items:center;padding:0;gap:12px;flex-direction:column}.pix-pagination-navigation__action{display:flex;align-items:center}.pix-pagination-navigation__action-button{margin:0 8px}@media (min-width: 769px){.pix-pagination{justify-content:space-between}.pix-pagination>.pix-pagination__size{display:flex}.pix-pagination>.pix-pagination__navigation{gap:initial;flex-direction:initial}}.pix-checkbox{position:relative;z-index:0;align-items:center;display:flex;color:var(--pix-color-neutral-70)}.pix-checkbox+.pix-checkbox{margin-top:var(--pix-spacing-s)}.pix-checkbox__label{padding-left:12px;color:var(--pix-color-neutral-90);font-size:1rem;line-height:1.5;cursor:pointer}.pix-checkbox__label--small{font-size:.875rem}.pix-checkbox__label--large{font-size:1.125rem}.pix-checkbox__input{position:relative;width:1rem;height:1rem;flex-shrink:0;background-color:var(--pix-color-neutral-0);border:1.5px solid var(--pix-color-neutral-70);border-radius:2px;appearance:none;cursor:pointer}.pix-checkbox__input:before{content:"";position:absolute;z-index:-1;top:50%;left:50%;width:1rem;height:1rem;transform:translate(-50%,-50%) scale(1);border-radius:50%;background-color:var(--pix-color-neutral-15);visibility:hidden;opacity:0;transition:all .3s ease}.pix-checkbox__input:hover,.pix-checkbox__input:focus-visible,.pix-checkbox__input:active{border-color:var(--pix-color-neutral-90)}.pix-checkbox__input:hover:before,.pix-checkbox__input:focus-visible:before,.pix-checkbox__input:active:before{visibility:visible;opacity:1;transform:translate(-50%,-50%) scale(1.75)}.pix-checkbox__input:active:before{background-color:var(--pix-color-neutral-22)}.pix-checkbox__input:checked{background:var(--pix-color-primary);border-color:var(--pix-color-primary)}.pix-checkbox__input:checked:hover,.pix-checkbox__input:checked:focus-visible,.pix-checkbox__input:checked:active{background:var(--pix-color-primary-60);border-color:var(--pix-color-primary-60)}.pix-checkbox__input:checked:after{content:"";position:absolute;inset:10%;background-repeat:no-repeat;background-position:center;background-size:contain;background-image:url("data:image/svg+xml,%3Csvg width='13' height='10' viewBox='0 0 13 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.5 3L0 4.5L5 9.5L13 1.5L11.5 0L5 6.5L1.5 3Z' fill='white'/%3E%3C/svg%3E%0A")}.pix-checkbox__input--indeterminate:checked{background:var(--pix-color-neutral-70);border-color:var(--pix-color-neutral-70)}.pix-checkbox__input--indeterminate:checked:hover,.pix-checkbox__input--indeterminate:checked:focus-visible,.pix-checkbox__input--indeterminate:checked:active{background:var(--pix-color-neutral-90);border-color:var(--pix-color-neutral-90)}.pix-checkbox__input--indeterminate:checked:after{inset:15%;background-image:url("data:image/svg+xml,%3Csvg width='10' height='2' viewBox='0 0 10 2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='10' height='2' fill='white'/%3E%3C/svg%3E%0A")}.pix-checkbox__input:disabled,.pix-checkbox__input--indeterminate:disabled{background:var(--pix-color-neutral-10);border-color:var(--pix-color-neutral-30);cursor:not-allowed}.pix-checkbox__input:disabled+.pix-checkbox__label,.pix-checkbox__input--indeterminate:disabled+.pix-checkbox__label{cursor:not-allowed}.pix-checkbox__input:disabled:checked,.pix-checkbox__input--indeterminate:disabled:checked{background:var(--pix-color-neutral-30);border-color:var(--pix-color-neutral-30)}.pix-checkbox__input:disabled:before,.pix-checkbox__input--indeterminate:disabled:before{display:none}.pix-toggle{display:flex;flex-direction:column}.pix-toggle__label{color:var(--pix-color-neutral-90)}.pix-toggle__button{width:fit-content;background-color:transparent;border:1px solid var(--pix-color-neutral-30);border-radius:4px;padding:var(--pix-spacing-xxs);margin-top:var(--pix-spacing-xxs)}.pix-toggle__on,.pix-toggle__off{display:inline-block;border-radius:4px;padding:var(--pix-spacing-xs);color:var(--pix-color-neutral-70)}.pix-toggle__off{background-color:var(--pix-color-neutral-45);color:var(--pix-color-neutral-0)}.pix-toggle--inline{flex-direction:row;align-items:center;gap:var(--pix-spacing-xxs)}.pix-toggle--inline .pix-toggle__button,.pix-toggle--screen-reader-only .pix-toggle__button{margin-top:0}.pix-toggle--pressed .pix-toggle__on{background-color:var(--pix-color-neutral-45);color:var(--pix-color-neutral-0)}.pix-toggle--pressed .pix-toggle__off{background-color:transparent;color:inherit}.indicator-card{display:flex;width:100%;background-color:var(--pix-color-neutral-0);border-radius:8px;min-height:112px;box-shadow:0 4px 8px rgba(var(--pix-color-neutral-110),.05);padding:0}.indicator-card__icon{display:flex;justify-content:center;align-items:center;border-radius:8px 0 0 8px;min-width:96px;font-size:2.5rem}.indicator-card__icon--grey{color:var(--pix-color-neutral-60);background-color:var(--pix-color-neutral-5)}.indicator-card__icon--blue{color:var(--pix-color-primary-60);background-color:var(--pix-color-primary-5)}.indicator-card__icon--green{color:var(--pix-color-success-60);background-color:var(--pix-color-success-5)}.indicator-card__icon--purple{color:var(--pix-color-tertiary-60);background-color:var(--pix-color-tertiary-5)}.indicator-card__content{display:flex;flex-direction:column;justify-content:center;color:var(--pix-color-neutral-60);padding:var(--pix-spacing-s) var(--pix-spacing-m)}.indicator-card__title{display:flex;align-items:center;font-weight:var(--pix-font-medium);font-size:1rem;line-height:1.375rem;margin-bottom:var(--pix-spacing-xxs)}.indicator-card__value{margin-bottom:var(--pix-spacing-xxs)}.indicator-card__sub{font-weight:var(--pix-font-normal);display:flex;gap:10px}.indicator-card__tooltip{font-weight:var(--pix-font-normal)}.indicator-card__tooltip-icon{color:var(--pix-color-neutral-30);margin:0 var(--pix-spacing-xs)}.body__trap-focus{overflow:hidden}.pix-search-input{display:flex;flex-direction:column;position:relative}.pix-search-input__label{font-size:.875rem;color:var(--pix-color-neutral-70);margin-bottom:4px}.pix-search-input__input-container{position:relative}.pix-search-input__input-container svg{position:absolute;bottom:calc(50% - 9px);left:6px;color:var(--pix-color-neutral-60);font-size:.6rem;padding-left:2px;width:18px;height:18px}.pix-search-input__input{font-size:.875rem;font-weight:var(--pix-font-normal);color:var(--pix-color-neutral-90);border-radius:var(--pix-color-spacing-xxs);padding:0 var(--pix-color-spacing-s) 0 var(--pix-color-spacing-s);width:100%;height:36px;border:1px solid var(--pix-color-neutral-40);padding-left:var(--pix-spacing-xl)}.pix-search-input__input:hover{box-shadow:inset 0 0 0 .6px var(--pix-color-neutral-70);background-color:var(--pix-color-neutral-5)}.pix-search-input__input:focus{border-color:var(--pix-color-primary);box-shadow:inset 0 0 0 .6px var(--pix-color-primary);outline:none}.pix-search-input__input::placeholder{color:var(--pix-color-neutral-30)}.pix-filterable-and-searchable-select{display:flex;width:fit-content;border:1px var(--pix-color-neutral-45) solid;border-radius:4px}.pix-filterable-and-searchable-select--error{border-color:var(--pix-color-error-70);box-shadow:inset 0 0 0 .6px var(--pix-color-error-70)}.pix-filterable-and-searchable-select__label{display:block;font-size:.875rem;line-height:1.375rem;color:var(--pix-color-neutral-90);margin-bottom:var(--pix-color-spacing-xxs);font-weight:var(--pix-font-medium)}.pix-filterable-and-searchable-select__sub-label{display:block;margin-bottom:var(--pix-color-spacing-xxs);font-size:.813rem;line-height:1rem;color:var(--pix-color-neutral-60);font-weight:var(--pix-font-normal)}.pix-filterable-and-searchable-select__pix-multi-select,.pix-filterable-and-searchable-select__pix-select{border:none}.pix-filterable-and-searchable-select__pix-multi-select:hover,.pix-filterable-and-searchable-select__pix-select:hover{border:none;box-shadow:none}.pix-filterable-and-searchable-select__error-message{font-size:.75rem;color:var(--pix-color-error-70);margin-top:var(--pix-color-spacing-xxs)}.pix-filterable-and-searchable-select .pix-multi-select{margin-right:2px}.pix-filterable-and-searchable-select .pix-multi-select [role=menu]{width:fit-content}.pix-filterable-and-searchable-select__pix-multi-select{border-radius:4px 0 0 4px;position:relative}.pix-filterable-and-searchable-select__pix-multi-select:after{height:22px;width:2px;content:"";background-color:var(--pix-color-neutral-22);position:absolute;right:-2px;border-radius:50px}.pix-filterable-and-searchable-select__pix-select{border-radius:0 4px 4px 0}
`, Da = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [r, i] of o)
    t[r] = i;
  return t;
}, Va = ["type"], Ca = { key: 0 }, Ta = /* @__PURE__ */ Xe("div", { className: "loader loader--blue" }, [
  /* @__PURE__ */ Xe("div", { className: "bounce1" }),
  /* @__PURE__ */ Xe("div", { className: "bounce2" }),
  /* @__PURE__ */ Xe("div", { className: "bounce3" })
], -1), $a = { className: "loader__not-visible-text" }, za = { key: 1 }, Pa = {
  __name: "PixButton.ce",
  props: {
    type: {
      type: String,
      default: "button"
    },
    shape: {
      type: String,
      default: "squircle"
    },
    size: {
      type: String,
      default: "big"
    },
    backgroundColor: {
      type: String,
      default: "blue"
    }
  },
  setup(e) {
    const o = e, t = nr(() => n.value || s.value), r = nr(() => (a.value && u.value.push("pix-button--border"), u.value.join(" "))), i = Eo(), n = Eo(!1), s = Eo(!1), a = Eo(!0);
    let p;
    Qi(() => {
      p = i.value.getRootNode().host;
    });
    const u = Eo([
      "pix-button",
      `pix-button--shape-${o.shape}`,
      `pix-button--size-${o.size}`,
      `pix-button--background-${o.backgroundColor}`
    ]);
    function x(d) {
      console.log("handleClick", d), console.log({ hostNode: p }), o.type === "submit" && p.closest("form").dispatchEvent(new Event("submit", { cancelable: !0 }));
    }
    return (d, m) => (rt(), jt("button", {
      ref_key: "button",
      ref: i,
      type: e.type,
      onClick: x,
      class: bt(r.value)
    }, [
      t.value ? (rt(), jt("div", Ca, [
        Ta,
        Xe("span", $a, [
          At(d.$slots, "default")
        ])
      ])) : (rt(), jt("div", za, [
        At(d.$slots, "default"),
        At(d.$slots, "icon")
      ]))
    ], 10, Va));
  }
}, Ia = /* @__PURE__ */ Da(Pa, [["styles", [Oa]]]), Ra = ya(Ia);
customElements.define("pix-button", Ra);
export {
  Ra as PixButton
};
