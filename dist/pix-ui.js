var ht = Object.defineProperty;
var xt = (n, t, e) => t in n ? ht(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var H = (n, t, e) => (xt(n, typeof t != "symbol" ? t + "" : t, e), e);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const B = window, K = B.ShadowRoot && (B.ShadyCSS === void 0 || B.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Z = Symbol(), G = /* @__PURE__ */ new WeakMap();
let lt = class {
  constructor(t, e, i) {
    if (this._$cssResult$ = !0, i !== Z)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (K && t === void 0) {
      const i = e !== void 0 && e.length === 1;
      i && (t = G.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), i && G.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const U = (n) => new lt(typeof n == "string" ? n : n + "", void 0, Z), gt = (n, ...t) => {
  const e = n.length === 1 ? n[0] : t.reduce((i, r, s) => i + ((o) => {
    if (o._$cssResult$ === !0)
      return o.cssText;
    if (typeof o == "number")
      return o;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(r) + n[s + 1], n[0]);
  return new lt(e, n, Z);
}, bt = (n, t) => {
  K ? n.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet) : t.forEach((e) => {
    const i = document.createElement("style"), r = B.litNonce;
    r !== void 0 && i.setAttribute("nonce", r), i.textContent = e.cssText, n.appendChild(i);
  });
}, Q = K ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const i of t.cssRules)
    e += i.cssText;
  return U(e);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var O;
const P = window, X = P.trustedTypes, vt = X ? X.emptyScript : "", Y = P.reactiveElementPolyfillSupport, V = {
  toAttribute(n, t) {
    switch (t) {
      case Boolean:
        n = n ? vt : null;
        break;
      case Object:
      case Array:
        n = n == null ? n : JSON.stringify(n);
    }
    return n;
  },
  fromAttribute(n, t) {
    let e = n;
    switch (t) {
      case Boolean:
        e = n !== null;
        break;
      case Number:
        e = n === null ? null : Number(n);
        break;
      case Object:
      case Array:
        try {
          e = JSON.parse(n);
        } catch {
          e = null;
        }
    }
    return e;
  }
}, dt = (n, t) => t !== n && (t == t || n == n), R = {
  attribute: !0,
  type: String,
  converter: V,
  reflect: !1,
  hasChanged: dt
}, q = "finalized";
let y = class extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u();
  }
  static addInitializer(t) {
    var e;
    this.finalize(), ((e = this.h) !== null && e !== void 0 ? e : this.h = []).push(t);
  }
  static get observedAttributes() {
    this.finalize();
    const t = [];
    return this.elementProperties.forEach((e, i) => {
      const r = this._$Ep(i, e);
      r !== void 0 && (this._$Ev.set(r, i), t.push(r));
    }), t;
  }
  static createProperty(t, e = R) {
    if (e.state && (e.attribute = !1), this.finalize(), this.elementProperties.set(t, e), !e.noAccessor && !this.prototype.hasOwnProperty(t)) {
      const i = typeof t == "symbol" ? Symbol() : "__" + t, r = this.getPropertyDescriptor(t, i, e);
      r !== void 0 && Object.defineProperty(this.prototype, t, r);
    }
  }
  static getPropertyDescriptor(t, e, i) {
    return {
      get() {
        return this[e];
      },
      set(r) {
        const s = this[t];
        this[e] = r, this.requestUpdate(t, s, i);
      },
      configurable: !0,
      enumerable: !0
    };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || R;
  }
  static finalize() {
    if (this.hasOwnProperty(q))
      return !1;
    this[q] = !0;
    const t = Object.getPrototypeOf(this);
    if (t.finalize(), t.h !== void 0 && (this.h = [...t.h]), this.elementProperties = new Map(t.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const e = this.properties, i = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)];
      for (const r of i)
        this.createProperty(r, e[r]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const r of i)
        e.unshift(Q(r));
    } else
      t !== void 0 && e.push(Q(t));
    return e;
  }
  static _$Ep(t, e) {
    const i = e.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  u() {
    var t;
    this._$E_ = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), (t = this.constructor.h) === null || t === void 0 || t.forEach((e) => e(this));
  }
  addController(t) {
    var e, i;
    ((e = this._$ES) !== null && e !== void 0 ? e : this._$ES = []).push(t), this.renderRoot !== void 0 && this.isConnected && ((i = t.hostConnected) === null || i === void 0 || i.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$ES) === null || e === void 0 || e.splice(this._$ES.indexOf(t) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t, e) => {
      this.hasOwnProperty(e) && (this._$Ei.set(e, this[e]), delete this[e]);
    });
  }
  createRenderRoot() {
    var t;
    const e = (t = this.shadowRoot) !== null && t !== void 0 ? t : this.attachShadow(this.constructor.shadowRootOptions);
    return bt(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var t;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$ES) === null || t === void 0 || t.forEach((e) => {
      var i;
      return (i = e.hostConnected) === null || i === void 0 ? void 0 : i.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$ES) === null || t === void 0 || t.forEach((e) => {
      var i;
      return (i = e.hostDisconnected) === null || i === void 0 ? void 0 : i.call(e);
    });
  }
  attributeChangedCallback(t, e, i) {
    this._$AK(t, i);
  }
  _$EO(t, e, i = R) {
    var r;
    const s = this.constructor._$Ep(t, i);
    if (s !== void 0 && i.reflect === !0) {
      const o = (((r = i.converter) === null || r === void 0 ? void 0 : r.toAttribute) !== void 0 ? i.converter : V).toAttribute(e, i.type);
      this._$El = t, o == null ? this.removeAttribute(s) : this.setAttribute(s, o), this._$El = null;
    }
  }
  _$AK(t, e) {
    var i;
    const r = this.constructor, s = r._$Ev.get(t);
    if (s !== void 0 && this._$El !== s) {
      const o = r.getPropertyOptions(s), p = typeof o.converter == "function" ? {
        fromAttribute: o.converter
      } : ((i = o.converter) === null || i === void 0 ? void 0 : i.fromAttribute) !== void 0 ? o.converter : V;
      this._$El = s, this[s] = p.fromAttribute(e, o.type), this._$El = null;
    }
  }
  requestUpdate(t, e, i) {
    let r = !0;
    t !== void 0 && (((i = i || this.constructor.getPropertyOptions(t)).hasChanged || dt)(this[t], e) ? (this._$AL.has(t) || this._$AL.set(t, e), i.reflect === !0 && this._$El !== t && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t, i))) : r = !1), !this.isUpdatePending && r && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((r, s) => this[s] = r), this._$Ei = void 0);
    let e = !1;
    const i = this._$AL;
    try {
      e = this.shouldUpdate(i), e ? (this.willUpdate(i), (t = this._$ES) === null || t === void 0 || t.forEach((r) => {
        var s;
        return (s = r.hostUpdate) === null || s === void 0 ? void 0 : s.call(r);
      }), this.update(i)) : this._$Ek();
    } catch (r) {
      throw e = !1, this._$Ek(), r;
    }
    e && this._$AE(i);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$ES) === null || e === void 0 || e.forEach((i) => {
      var r;
      return (r = i.hostUpdated) === null || r === void 0 ? void 0 : r.call(i);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$Ek() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$EC !== void 0 && (this._$EC.forEach((e, i) => this._$EO(i, this[i], e)), this._$EC = void 0), this._$Ek();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
y[q] = !0, y.elementProperties = /* @__PURE__ */ new Map(), y.elementStyles = [], y.shadowRootOptions = {
  mode: "open"
}, Y == null || Y({
  ReactiveElement: y
}), ((O = P.reactiveElementVersions) !== null && O !== void 0 ? O : P.reactiveElementVersions = []).push("1.6.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var M;
const N = window, f = N.trustedTypes, tt = f ? f.createPolicy("lit-html", {
  createHTML: (n) => n
}) : void 0, W = "$lit$", g = `lit$${(Math.random() + "").slice(9)}$`, pt = "?" + g, $t = `<${pt}>`, $ = document, F = () => $.createComment(""), k = (n) => n === null || typeof n != "object" && typeof n != "function", ut = Array.isArray, yt = (n) => ut(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", z = `[ 	
\f\r]`, m = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, et = /-->/g, it = />/g, b = RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), rt = /'/g, nt = /"/g, ct = /^(?:script|style|textarea|title)$/i, ft = (n) => (t, ...e) => ({
  _$litType$: n,
  strings: t,
  values: e
}), L = ft(1), A = Symbol.for("lit-noChange"), c = Symbol.for("lit-nothing"), ot = /* @__PURE__ */ new WeakMap(), v = $.createTreeWalker($, 129, null, !1), At = (n, t) => {
  const e = n.length - 1, i = [];
  let r, s = t === 2 ? "<svg>" : "", o = m;
  for (let a = 0; a < e; a++) {
    const l = n[a];
    let x, d, u = -1, h = 0;
    for (; h < l.length && (o.lastIndex = h, d = o.exec(l), d !== null); )
      h = o.lastIndex, o === m ? d[1] === "!--" ? o = et : d[1] !== void 0 ? o = it : d[2] !== void 0 ? (ct.test(d[2]) && (r = RegExp("</" + d[2], "g")), o = b) : d[3] !== void 0 && (o = b) : o === b ? d[0] === ">" ? (o = r ?? m, u = -1) : d[1] === void 0 ? u = -2 : (u = o.lastIndex - d[2].length, x = d[1], o = d[3] === void 0 ? b : d[3] === '"' ? nt : rt) : o === nt || o === rt ? o = b : o === et || o === it ? o = m : (o = b, r = void 0);
    const w = o === b && n[a + 1].startsWith("/>") ? " " : "";
    s += o === m ? l + $t : u >= 0 ? (i.push(x), l.slice(0, u) + W + l.slice(u) + g + w) : l + g + (u === -2 ? (i.push(void 0), a) : w);
  }
  const p = s + (n[e] || "<?>") + (t === 2 ? "</svg>" : "");
  if (!Array.isArray(n) || !n.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [tt !== void 0 ? tt.createHTML(p) : p, i];
};
class C {
  constructor({
    strings: t,
    _$litType$: e
  }, i) {
    let r;
    this.parts = [];
    let s = 0, o = 0;
    const p = t.length - 1, a = this.parts, [l, x] = At(t, e);
    if (this.el = C.createElement(l, i), v.currentNode = this.el.content, e === 2) {
      const d = this.el.content, u = d.firstChild;
      u.remove(), d.append(...u.childNodes);
    }
    for (; (r = v.nextNode()) !== null && a.length < p; ) {
      if (r.nodeType === 1) {
        if (r.hasAttributes()) {
          const d = [];
          for (const u of r.getAttributeNames())
            if (u.endsWith(W) || u.startsWith(g)) {
              const h = x[o++];
              if (d.push(u), h !== void 0) {
                const w = r.getAttribute(h.toLowerCase() + W).split(g), D = /([.?@])?(.*)/.exec(h);
                a.push({
                  type: 1,
                  index: s,
                  name: D[2],
                  strings: w,
                  ctor: D[1] === "." ? mt : D[1] === "?" ? Ft : D[1] === "@" ? kt : T
                });
              } else
                a.push({
                  type: 6,
                  index: s
                });
            }
          for (const u of d)
            r.removeAttribute(u);
        }
        if (ct.test(r.tagName)) {
          const d = r.textContent.split(g), u = d.length - 1;
          if (u > 0) {
            r.textContent = f ? f.emptyScript : "";
            for (let h = 0; h < u; h++)
              r.append(d[h], F()), v.nextNode(), a.push({
                type: 2,
                index: ++s
              });
            r.append(d[u], F());
          }
        }
      } else if (r.nodeType === 8)
        if (r.data === pt)
          a.push({
            type: 2,
            index: s
          });
        else {
          let d = -1;
          for (; (d = r.data.indexOf(g, d + 1)) !== -1; )
            a.push({
              type: 7,
              index: s
            }), d += g.length - 1;
        }
      s++;
    }
  }
  static createElement(t, e) {
    const i = $.createElement("template");
    return i.innerHTML = t, i;
  }
}
function _(n, t, e = n, i) {
  var r, s, o, p;
  if (t === A)
    return t;
  let a = i !== void 0 ? (r = e._$Co) === null || r === void 0 ? void 0 : r[i] : e._$Cl;
  const l = k(t) ? void 0 : t._$litDirective$;
  return (a == null ? void 0 : a.constructor) !== l && ((s = a == null ? void 0 : a._$AO) === null || s === void 0 || s.call(a, !1), l === void 0 ? a = void 0 : (a = new l(n), a._$AT(n, e, i)), i !== void 0 ? ((o = (p = e)._$Co) !== null && o !== void 0 ? o : p._$Co = [])[i] = a : e._$Cl = a), a !== void 0 && (t = _(n, a._$AS(n, t.values), a, i)), t;
}
class _t {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    var e;
    const {
      el: {
        content: i
      },
      parts: r
    } = this._$AD, s = ((e = t == null ? void 0 : t.creationScope) !== null && e !== void 0 ? e : $).importNode(i, !0);
    v.currentNode = s;
    let o = v.nextNode(), p = 0, a = 0, l = r[0];
    for (; l !== void 0; ) {
      if (p === l.index) {
        let x;
        l.type === 2 ? x = new S(o, o.nextSibling, this, t) : l.type === 1 ? x = new l.ctor(o, l.name, l.strings, this, t) : l.type === 6 && (x = new Ct(o, this, t)), this._$AV.push(x), l = r[++a];
      }
      p !== (l == null ? void 0 : l.index) && (o = v.nextNode(), p++);
    }
    return v.currentNode = $, s;
  }
  v(t) {
    let e = 0;
    for (const i of this._$AV)
      i !== void 0 && (i.strings !== void 0 ? (i._$AI(t, i, e), e += i.strings.length - 2) : i._$AI(t[e])), e++;
  }
}
class S {
  constructor(t, e, i, r) {
    var s;
    this.type = 2, this._$AH = c, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = i, this.options = r, this._$Cp = (s = r == null ? void 0 : r.isConnected) === null || s === void 0 || s;
  }
  get _$AU() {
    var t, e;
    return (e = (t = this._$AM) === null || t === void 0 ? void 0 : t._$AU) !== null && e !== void 0 ? e : this._$Cp;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = _(this, t, e), k(t) ? t === c || t == null || t === "" ? (this._$AH !== c && this._$AR(), this._$AH = c) : t !== this._$AH && t !== A && this._(t) : t._$litType$ !== void 0 ? this.g(t) : t.nodeType !== void 0 ? this.$(t) : yt(t) ? this.T(t) : this._(t);
  }
  k(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  $(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
  }
  _(t) {
    this._$AH !== c && k(this._$AH) ? this._$AA.nextSibling.data = t : this.$($.createTextNode(t)), this._$AH = t;
  }
  g(t) {
    var e;
    const {
      values: i,
      _$litType$: r
    } = t, s = typeof r == "number" ? this._$AC(t) : (r.el === void 0 && (r.el = C.createElement(r.h, this.options)), r);
    if (((e = this._$AH) === null || e === void 0 ? void 0 : e._$AD) === s)
      this._$AH.v(i);
    else {
      const o = new _t(s, this), p = o.u(this.options);
      o.v(i), this.$(p), this._$AH = o;
    }
  }
  _$AC(t) {
    let e = ot.get(t.strings);
    return e === void 0 && ot.set(t.strings, e = new C(t)), e;
  }
  T(t) {
    ut(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let i, r = 0;
    for (const s of t)
      r === e.length ? e.push(i = new S(this.k(F()), this.k(F()), this, this.options)) : i = e[r], i._$AI(s), r++;
    r < e.length && (this._$AR(i && i._$AB.nextSibling, r), e.length = r);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var i;
    for ((i = this._$AP) === null || i === void 0 || i.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const r = t.nextSibling;
      t.remove(), t = r;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cp = t, (e = this._$AP) === null || e === void 0 || e.call(this, t));
  }
}
class T {
  constructor(t, e, i, r, s) {
    this.type = 1, this._$AH = c, this._$AN = void 0, this.element = t, this.name = e, this._$AM = r, this.options = s, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = c;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, e = this, i, r) {
    const s = this.strings;
    let o = !1;
    if (s === void 0)
      t = _(this, t, e, 0), o = !k(t) || t !== this._$AH && t !== A, o && (this._$AH = t);
    else {
      const p = t;
      let a, l;
      for (t = s[0], a = 0; a < s.length - 1; a++)
        l = _(this, p[i + a], e, a), l === A && (l = this._$AH[a]), o || (o = !k(l) || l !== this._$AH[a]), l === c ? t = c : t !== c && (t += (l ?? "") + s[a + 1]), this._$AH[a] = l;
    }
    o && !r && this.j(t);
  }
  j(t) {
    t === c ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class mt extends T {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === c ? void 0 : t;
  }
}
const Et = f ? f.emptyScript : "";
class Ft extends T {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    t && t !== c ? this.element.setAttribute(this.name, Et) : this.element.removeAttribute(this.name);
  }
}
class kt extends T {
  constructor(t, e, i, r, s) {
    super(t, e, i, r, s), this.type = 5;
  }
  _$AI(t, e = this) {
    var i;
    if ((t = (i = _(this, t, e, 0)) !== null && i !== void 0 ? i : c) === A)
      return;
    const r = this._$AH, s = t === c && r !== c || t.capture !== r.capture || t.once !== r.once || t.passive !== r.passive, o = t !== c && (r === c || s);
    s && this.element.removeEventListener(this.name, this, r), o && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e, i;
    typeof this._$AH == "function" ? this._$AH.call((i = (e = this.options) === null || e === void 0 ? void 0 : e.host) !== null && i !== void 0 ? i : this.element, t) : this._$AH.handleEvent(t);
  }
}
class Ct {
  constructor(t, e, i) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    _(this, t);
  }
}
const st = N.litHtmlPolyfillSupport;
st == null || st(C, S), ((M = N.litHtmlVersions) !== null && M !== void 0 ? M : N.litHtmlVersions = []).push("2.7.4");
const St = (n, t, e) => {
  var i, r;
  const s = (i = e == null ? void 0 : e.renderBefore) !== null && i !== void 0 ? i : t;
  let o = s._$litPart$;
  if (o === void 0) {
    const p = (r = e == null ? void 0 : e.renderBefore) !== null && r !== void 0 ? r : null;
    s._$litPart$ = o = new S(t.insertBefore(F(), p), p, void 0, e ?? {});
  }
  return o._$AI(n), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var j, I;
class E extends y {
  constructor() {
    super(...arguments), this.renderOptions = {
      host: this
    }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t, e;
    const i = super.createRenderRoot();
    return (t = (e = this.renderOptions).renderBefore) !== null && t !== void 0 || (e.renderBefore = i.firstChild), i;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = St(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) === null || t === void 0 || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) === null || t === void 0 || t.setConnected(!1);
  }
  render() {
    return A;
  }
}
E.finalized = !0, E._$litElement$ = !0, (j = globalThis.litElementHydrateSupport) === null || j === void 0 || j.call(globalThis, {
  LitElement: E
});
const at = globalThis.litElementPolyfillSupport;
at == null || at({
  LitElement: E
});
((I = globalThis.litElementVersions) !== null && I !== void 0 ? I : globalThis.litElementVersions = []).push("3.3.2");
const wt = `*{--pix-primary-5: #F2F9FF;--pix-primary-10: #DCF1FF;--pix-primary-20: #C4E6FF;--pix-primary-30: #88BEFF;--pix-primary-40: #5B94FF;--pix-primary: #3D68FF;--pix-primary-60: #2044DC;--pix-primary-70: #0D25B3;--pix-primary-80: #000E87;--pix-secondary-5: #FFF9E6;--pix-secondary-10: #FFF1C5;--pix-secondary-20: #FFE381;--pix-secondary: #FFD235;--pix-secondary-40: #FFBE00;--pix-secondary-50: #EAA600;--pix-secondary-60: #D87016;--pix-secondary-70: #A95800;--pix-secondary-80: #874D00;--pix-secondary-certif-5: #CCF6F5;--pix-secondary-certif-10: #9AEDEB;--pix-secondary-certif-20: #67E4E0;--pix-secondary-certif-30: #34DBD6;--pix-secondary-certif: #20B4AF;--pix-secondary-certif-50: #17817E;--pix-secondary-certif-60: #126765;--pix-secondary-certif-70: #0E4D4C;--pix-secondary-certif-80: #093432;--pix-secondary-orga-5: #D5F9FF;--pix-secondary-orga-10: #AAF4FF;--pix-secondary-orga-20: #80EEFF;--pix-secondary-orga-30: #55E8FF;--pix-secondary-orga: #00DDFF;--pix-secondary-orga-50: #00C1DF;--pix-secondary-orga-60: #00A6BF;--pix-secondary-orga-70: #008A9F;--pix-secondary-orga-80: #006E80;--pix-tertiary-5: #EBE1FF;--pix-tertiary-10: #D8C2FF;--pix-tertiary-20: #C4A4FF;--pix-tertiary-30: #B186FF;--pix-tertiary: #9D67FF;--pix-tertiary-50: #8A49FF;--pix-tertiary-60: #6712FF;--pix-tertiary-70: #4E00DB;--pix-tertiary-80: #3B00A4;--pix-success-5: #ECFDF5;--pix-success-10: #D1FAE5;--pix-success-20: #A7F3D0;--pix-success-30: #6EE7B7;--pix-success: #34D399;--pix-success-50: #27B481;--pix-success-60: #14865D;--pix-success-70: #176C4D;--pix-success-80: #104834;--pix-warning-5: #FFF9E6;--pix-warning-10: #FFF1C5;--pix-warning-20: #FFE381;--pix-warning-30: #FFD235;--pix-warning-40: #FFBE00;--pix-warning-50: #EAA600;--pix-warning-60: #D87016;--pix-warning-70: #A95800;--pix-warning-80: #874D00;--pix-error-5: #FEF2F2;--pix-error-10: #FEE2E2;--pix-error-20: #FECACA;--pix-error-30: #FCA5A5;--pix-error-40: #F87171;--pix-error-50: #EF4444;--pix-error-60: #DC2626;--pix-error-70: #B91C1C;--pix-error-80: #991B1B;--pix-error-90: #861212;--pix-neutral-0: #FFFFFF;--pix-neutral-5: #FAFBFC;--pix-neutral-10: #F4F5F7;--pix-neutral-15: #EAECF0;--pix-neutral-20: #DFE1E6;--pix-neutral-22: #C1C7D0;--pix-neutral-25: #A5ADBA;--pix-neutral-30: #97A0AF;--pix-neutral-35: #8993A4;--pix-neutral-40: #7A869A;--pix-neutral-45: #6B778C;--pix-neutral-50: #5E6C84;--pix-neutral-60: #505F79;--pix-neutral-70: #344563;--pix-neutral-80: #253858;--pix-neutral-90: #172B4D;--pix-neutral-100: #091E42;--pix-neutral-110: #07142E;--pix-shades-100: #000000;--pix-information-dark: #F24645;--pix-information-light: #F1A141;--pix-content-dark: #1A8C89;--pix-content-light: #52D987;--pix-communication-dark: #3D68FF;--pix-communication-light: #12A3FF;--pix-security-dark: #AC008D;--pix-security-light: #FF3F94;--pix-environment-dark: #5E2563;--pix-environment-light: #564DA6;--pix-primary-app-gradient: linear-gradient(91.59deg, #3D68FF 0%, #8845FF 100%);--pix-secondary-app-gradient: linear-gradient(91.59deg, #FEDC41 0%, #FF9F00 100%);--pix-primary-certif-gradient: linear-gradient(91.59deg, #52D987 0%, #1A8C89 100%);--pix-primary-orga-gradient: linear-gradient(91.59deg, #00DDFF 0%, #0095C0 100%);--pix-secondary-orga-gradient: linear-gradient(91.59deg, #0D7DC4 0%, #213371 100%);--pix-information-gradient: linear-gradient(180deg, #F24645 0%, #F1A141 100%);--pix-content-gradient: linear-gradient(180deg, #1A8C89 0%, #52D987 100%);--pix-communication-gradient: linear-gradient(180deg, #3D68FF 0%, #12A3FF 100%);--pix-security-gradient: linear-gradient(180deg, #AC008D 0%, #FF3F94 100%);--pix-environment-gradient: linear-gradient(180deg, #5E2563 0%, #564DA6 100%)}
`, Dt = `.pix-button{color:var(--pix-neutral-0);font-size:.875rem;font-weight:var(--font-medium);white-space:nowrap;cursor:pointer;background-color:var(--pix-primary);border:1px solid transparent;outline:none;display:flex;justify-content:center;align-items:center;text-decoration:none}.pix-button--shape-rounded{border-radius:25px}.pix-button--shape-squircle{border-radius:4px}.pix-button--size-big{padding:12px 24px}.pix-button--size-small.pix-button--shape-rounded{padding:8px 24px}.pix-button--size-small.pix-button--shape-squircle{padding:8px 16px}.pix-button--disabled{opacity:.5;cursor:not-allowed}.pix-button--background-blue{background-color:var(--pix-primary)}.pix-button--background-blue:not(.pix-button--disabled):hover{background-color:var(--pix-primary-60)}.pix-button--background-blue:not(.pix-button--disabled):focus,.pix-button--background-blue:not(.pix-button--disabled):focus-visible{background-color:var(--pix-primary-60);outline:1px solid var(--pix-neutral-0);outline-offset:-4px}.pix-button--background-blue:not(.pix-button--disabled):active{background-color:var(--pix-primary-70);outline:none}.pix-button--background-green{background-color:var(--pix-success-60)}.pix-button--background-green:not(.pix-button--disabled):hover{background-color:var(--pix-success-70)}.pix-button--background-green:not(.pix-button--disabled):focus,.pix-button--background-green:not(.pix-button--disabled):focus-visible{background-color:var(--pix-success-70);outline:1px solid var(--pix-neutral-0);outline-offset:-4px}.pix-button--background-green:not(.pix-button--disabled):active{background-color:var(--pix-success-80);outline:none}.pix-button--background-yellow{color:var(--pix-neutral-100);background-color:var(--pix-warning-40)}.pix-button--background-yellow:not(.pix-button--disabled):hover{background-color:var(--pix-warning-50)}.pix-button--background-yellow:not(.pix-button--disabled):focus,.pix-button--background-yellow:not(.pix-button--disabled):focus-visible{background-color:var(--pix-warning-50);outline:1px solid var(--pix-neutral-0);outline-offset:-4px}.pix-button--background-yellow:not(.pix-button--disabled):active{background-color:var(--pix-warning-60);outline:none}.pix-button--background-red{color:var(--pix-neutral-0);background-color:var(--pix-error-70)}.pix-button--background-red:not(.pix-button--disabled):hover{background-color:var(--pix-error-80)}.pix-button--background-red:not(.pix-button--disabled):focus,.pix-button--background-red:not(.pix-button--disabled):focus-visible{background-color:var(--pix-error-70);outline:1px solid var(--pix-neutral-0);outline-offset:-4px}.pix-button--background-red:not(.pix-button--disabled):active{background-color:var(--pix-error-90);outline:none}.pix-button--background-grey{color:var(--pix-neutral-90);background-color:var(--pix-neutral-20)}.pix-button--background-grey:not(.pix-button--disabled):hover{background-color:var(--pix-neutral-22)}.pix-button--background-grey:not(.pix-button--disabled):focus,.pix-button--background-grey:not(.pix-button--disabled):focus-visible{background-color:var(--pix-neutral-90);color:var(--pix-neutral-0);outline:1px solid var(--pix-neutral-0);outline-offset:-4px}.pix-button--background-grey:not(.pix-button--disabled):active{background-color:var(--pix-neutral-25);color:var(--pix-neutral-90);outline:none}.pix-button--background-transparent{background-color:transparent;color:var(--pix-neutral-50);border:1px solid var(--pix-neutral-50)}.pix-button--background-transparent-light{color:var(--pix-neutral-90);background-color:transparent}.pix-button--background-transparent-light.pix-button--border{border:1px solid var(--pix-neutral-50)}.pix-button--background-transparent-light:not(.pix-button--disabled):hover{background-color:var(--pix-neutral-60);color:var(--pix-neutral-0);border:1px solid transparent}.pix-button--background-transparent-light:not(.pix-button--disabled):focus,.pix-button--background-transparent-light:not(.pix-button--disabled):focus-visible{background-color:var(--pix-neutral-90);color:var(--pix-neutral-0);outline:1px solid var(--pix-neutral-0);outline-offset:-4px}.pix-button--background-transparent-light:not(.pix-button--disabled):active{background-color:var(--pix-neutral-70);outline:none}.pix-button--background-transparent-dark{color:var(--pix-neutral-0);background-color:transparent}.pix-button--background-transparent-dark.pix-button--border{border:1px solid var(--pix-neutral-0)}.pix-button--background-transparent-dark:not(.pix-button--disabled):hover{background-color:var(--pix-neutral-10);color:var(--pix-neutral-90);border:1px solid transparent}.pix-button--background-transparent-dark:not(.pix-button--disabled):focus,.pix-button--background-transparent-dark:not(.pix-button--disabled):focus-visible{background-color:var(--pix-neutral-10);color:var(--pix-neutral-90);outline:1px solid var(--pix-neutral-90);outline-offset:-4px}.pix-button--background-transparent-dark:not(.pix-button--disabled):active{background-color:var(--pix-neutral-20);outline:none}.pix-button--background-blue{background:var(--pix-primary-certif-gradient);color:var(--pix-primary-5)}
`, Bt = `.pix-button__icon{height:1rem}.pix-button__icon--before{margin-right:var(--pix-spacing-xs)}.pix-button__icon--after{margin-left:var(--pix-spacing-xs)}.pix-button .loader{position:absolute}.pix-button .loader__not-visible-text{visibility:hidden}.loader>div{width:10px;height:10px;background-color:var(--pix-neutral-0);border-radius:100%;display:inline-block;animation:sk-bouncedelay 1.4s infinite ease-in-out both}.loader--white>div{background-color:var(--pix-neutral-0)}.loader--grey>div{background-color:var(--pix-neutral-80)}.loader .bounce1{animation-delay:-.32s}.loader .bounce2{animation-delay:-.16s}@keyframes sk-bouncedelay{0%,80%,to{transform:scale(0)}40%{transform:scale(1)}}
`;
class J extends E {
  constructor() {
    super(), this.type = "button", this.size = "big", this.shape = "squircle", this.backgroundColor = "blue", this.isBorderVisible = !1, this.boolean = !1, this.classNames = ["pix-button", `pix-button--shape-${this.shape}`, `pix-button--size-${this.size}`, `pix-button--background-${this.backgroundColor}`];
  }
  get isLoadingOrTriggering() {
    return this.isLoading || this.isTriggering;
  }
  getIsDisabled() {
    return this.isLoadingOrTriggering || this.isDisabled;
  }
  updateClassNames() {
    const t = ["pix-button", `pix-button--shape-${this.shape}`, `pix-button--size-${this.size}`, `pix-button--background-${this.backgroundColor}`];
    return this.isBorderVisible && t.push("pix-button--border"), this.getIsDisabled() && t.push("pix-button--disabled"), t.join(" ");
  }
  async _triggerAction(t) {
    if (!(this.isDisabled || this.type === "submit" && !this.triggerAction)) {
      if (!this.triggerAction)
        throw new Error("@triggerAction params is required for PixButton !");
      try {
        this.isTriggering = !0, console.log("when triggered !", this.triggerAction), await this.triggerAction(t);
      } finally {
        console.log("triggering done ! "), this.isTriggering = !1;
      }
    }
  }
  // Render the UI as a function of component state
  render() {
    let t;
    return this.isLoadingOrTriggering ? t = L`
        <div class="loader loader--blue">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
        </div>
        <span class="loader__not-visible-text"><slot name="text"/></span>
      ` : t = L`<slot name="text"/>`, L`<button
        @click=${this._triggerAction}
        type=${this.type}
        class=${this.updateClassNames()}
        ?disabled=${this.getIsDisabled()}
        ?aria-disabled=${this.getIsDisabled()}
      >
        ${t} 
    </button>`;
  }
}
H(J, "properties", {
  type: {
    type: String,
    reflect: !0
  },
  size: {
    type: String,
    reflect: !0
  },
  shape: {
    type: String,
    reflect: !0
  },
  backgroundColor: {
    type: String,
    reflect: !0
  },
  isBorderVisible: {
    type: Boolean,
    reflect: !0
  },
  isDisabled: {
    type: Boolean,
    reflect: !0
  },
  isLoading: {
    type: Boolean,
    reflect: !0
  },
  icon: {
    type: String,
    reflect: !0
  },
  triggerAction: {
    type: Object,
    reflect: !0
  },
  isTriggering: {
    type: Boolean
  },
  classNames: {
    type: Array
  }
}), // Define scoped styles right with your component, in plain CSS
H(J, "styles", [U(wt), U(Dt), U(Bt), gt`
    :host {
      color: blue;
    }
 `]);
customElements.define("pix-button", J);
export {
  J as PixButton
};
