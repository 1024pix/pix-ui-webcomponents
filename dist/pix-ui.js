var ct = Object.defineProperty;
var ut = (n, t, e) => t in n ? ct(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var M = (n, t, e) => (ut(n, typeof t != "symbol" ? t + "" : t, e), e);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const N = window, J = N.ShadowRoot && (N.ShadyCSS === void 0 || N.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, K = Symbol(), Z = /* @__PURE__ */ new WeakMap();
let rt = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== K)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (J && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = Z.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && Z.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const pt = (n) => new rt(typeof n == "string" ? n : n + "", void 0, K), $t = (n, ...t) => {
  const e = n.length === 1 ? n[0] : t.reduce((s, i, r) => s + ((o) => {
    if (o._$cssResult$ === !0)
      return o.cssText;
    if (typeof o == "number")
      return o;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + n[r + 1], n[0]);
  return new rt(e, n, K);
}, vt = (n, t) => {
  J ? n.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet) : t.forEach((e) => {
    const s = document.createElement("style"), i = N.litNonce;
    i !== void 0 && s.setAttribute("nonce", i), s.textContent = e.cssText, n.appendChild(s);
  });
}, F = J ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules)
    e += s.cssText;
  return pt(e);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var k;
const T = window, G = T.trustedTypes, _t = G ? G.emptyScript : "", Q = T.reactiveElementPolyfillSupport, D = { toAttribute(n, t) {
  switch (t) {
    case Boolean:
      n = n ? _t : null;
      break;
    case Object:
    case Array:
      n = n == null ? n : JSON.stringify(n);
  }
  return n;
}, fromAttribute(n, t) {
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
} }, lt = (n, t) => t !== n && (t == t || n == n), L = { attribute: !0, type: String, converter: D, reflect: !1, hasChanged: lt }, V = "finalized";
let m = class extends HTMLElement {
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
    return this.elementProperties.forEach((e, s) => {
      const i = this._$Ep(s, e);
      i !== void 0 && (this._$Ev.set(i, s), t.push(i));
    }), t;
  }
  static createProperty(t, e = L) {
    if (e.state && (e.attribute = !1), this.finalize(), this.elementProperties.set(t, e), !e.noAccessor && !this.prototype.hasOwnProperty(t)) {
      const s = typeof t == "symbol" ? Symbol() : "__" + t, i = this.getPropertyDescriptor(t, s, e);
      i !== void 0 && Object.defineProperty(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    return { get() {
      return this[e];
    }, set(i) {
      const r = this[t];
      this[e] = i, this.requestUpdate(t, r, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || L;
  }
  static finalize() {
    if (this.hasOwnProperty(V))
      return !1;
    this[V] = !0;
    const t = Object.getPrototypeOf(this);
    if (t.finalize(), t.h !== void 0 && (this.h = [...t.h]), this.elementProperties = new Map(t.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const e = this.properties, s = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)];
      for (const i of s)
        this.createProperty(i, e[i]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const i of s)
        e.unshift(F(i));
    } else
      t !== void 0 && e.push(F(t));
    return e;
  }
  static _$Ep(t, e) {
    const s = e.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  u() {
    var t;
    this._$E_ = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), (t = this.constructor.h) === null || t === void 0 || t.forEach((e) => e(this));
  }
  addController(t) {
    var e, s;
    ((e = this._$ES) !== null && e !== void 0 ? e : this._$ES = []).push(t), this.renderRoot !== void 0 && this.isConnected && ((s = t.hostConnected) === null || s === void 0 || s.call(t));
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
    return vt(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var t;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$ES) === null || t === void 0 || t.forEach((e) => {
      var s;
      return (s = e.hostConnected) === null || s === void 0 ? void 0 : s.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$ES) === null || t === void 0 || t.forEach((e) => {
      var s;
      return (s = e.hostDisconnected) === null || s === void 0 ? void 0 : s.call(e);
    });
  }
  attributeChangedCallback(t, e, s) {
    this._$AK(t, s);
  }
  _$EO(t, e, s = L) {
    var i;
    const r = this.constructor._$Ep(t, s);
    if (r !== void 0 && s.reflect === !0) {
      const o = (((i = s.converter) === null || i === void 0 ? void 0 : i.toAttribute) !== void 0 ? s.converter : D).toAttribute(e, s.type);
      this._$El = t, o == null ? this.removeAttribute(r) : this.setAttribute(r, o), this._$El = null;
    }
  }
  _$AK(t, e) {
    var s;
    const i = this.constructor, r = i._$Ev.get(t);
    if (r !== void 0 && this._$El !== r) {
      const o = i.getPropertyOptions(r), d = typeof o.converter == "function" ? { fromAttribute: o.converter } : ((s = o.converter) === null || s === void 0 ? void 0 : s.fromAttribute) !== void 0 ? o.converter : D;
      this._$El = r, this[r] = d.fromAttribute(e, o.type), this._$El = null;
    }
  }
  requestUpdate(t, e, s) {
    let i = !0;
    t !== void 0 && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || lt)(this[t], e) ? (this._$AL.has(t) || this._$AL.set(t, e), s.reflect === !0 && this._$El !== t && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t, s))) : i = !1), !this.isUpdatePending && i && (this._$E_ = this._$Ej());
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
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((i, r) => this[r] = i), this._$Ei = void 0);
    let e = !1;
    const s = this._$AL;
    try {
      e = this.shouldUpdate(s), e ? (this.willUpdate(s), (t = this._$ES) === null || t === void 0 || t.forEach((i) => {
        var r;
        return (r = i.hostUpdate) === null || r === void 0 ? void 0 : r.call(i);
      }), this.update(s)) : this._$Ek();
    } catch (i) {
      throw e = !1, this._$Ek(), i;
    }
    e && this._$AE(s);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$ES) === null || e === void 0 || e.forEach((s) => {
      var i;
      return (i = s.hostUpdated) === null || i === void 0 ? void 0 : i.call(s);
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
    this._$EC !== void 0 && (this._$EC.forEach((e, s) => this._$EO(s, this[s], e)), this._$EC = void 0), this._$Ek();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
m[V] = !0, m.elementProperties = /* @__PURE__ */ new Map(), m.elementStyles = [], m.shadowRootOptions = { mode: "open" }, Q == null || Q({ ReactiveElement: m }), ((k = T.reactiveElementVersions) !== null && k !== void 0 ? k : T.reactiveElementVersions = []).push("1.6.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var j;
const O = window, g = O.trustedTypes, X = g ? g.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, W = "$lit$", v = `lit$${(Math.random() + "").slice(9)}$`, ht = "?" + v, At = `<${ht}>`, f = document, C = () => f.createComment(""), w = (n) => n === null || typeof n != "object" && typeof n != "function", at = Array.isArray, ft = (n) => at(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", z = `[ 	
\f\r]`, S = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Y = /-->/g, tt = />/g, _ = RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), et = /'/g, st = /"/g, dt = /^(?:script|style|textarea|title)$/i, mt = (n) => (t, ...e) => ({ _$litType$: n, strings: t, values: e }), gt = mt(1), y = Symbol.for("lit-noChange"), u = Symbol.for("lit-nothing"), it = /* @__PURE__ */ new WeakMap(), A = f.createTreeWalker(f, 129, null, !1), yt = (n, t) => {
  const e = n.length - 1, s = [];
  let i, r = t === 2 ? "<svg>" : "", o = S;
  for (let l = 0; l < e; l++) {
    const h = n[l];
    let $, a, c = -1, p = 0;
    for (; p < h.length && (o.lastIndex = p, a = o.exec(h), a !== null); )
      p = o.lastIndex, o === S ? a[1] === "!--" ? o = Y : a[1] !== void 0 ? o = tt : a[2] !== void 0 ? (dt.test(a[2]) && (i = RegExp("</" + a[2], "g")), o = _) : a[3] !== void 0 && (o = _) : o === _ ? a[0] === ">" ? (o = i ?? S, c = -1) : a[1] === void 0 ? c = -2 : (c = o.lastIndex - a[2].length, $ = a[1], o = a[3] === void 0 ? _ : a[3] === '"' ? st : et) : o === st || o === et ? o = _ : o === Y || o === tt ? o = S : (o = _, i = void 0);
    const P = o === _ && n[l + 1].startsWith("/>") ? " " : "";
    r += o === S ? h + At : c >= 0 ? (s.push($), h.slice(0, c) + W + h.slice(c) + v + P) : h + v + (c === -2 ? (s.push(void 0), l) : P);
  }
  const d = r + (n[e] || "<?>") + (t === 2 ? "</svg>" : "");
  if (!Array.isArray(n) || !n.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [X !== void 0 ? X.createHTML(d) : d, s];
};
class x {
  constructor({ strings: t, _$litType$: e }, s) {
    let i;
    this.parts = [];
    let r = 0, o = 0;
    const d = t.length - 1, l = this.parts, [h, $] = yt(t, e);
    if (this.el = x.createElement(h, s), A.currentNode = this.el.content, e === 2) {
      const a = this.el.content, c = a.firstChild;
      c.remove(), a.append(...c.childNodes);
    }
    for (; (i = A.nextNode()) !== null && l.length < d; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) {
          const a = [];
          for (const c of i.getAttributeNames())
            if (c.endsWith(W) || c.startsWith(v)) {
              const p = $[o++];
              if (a.push(c), p !== void 0) {
                const P = i.getAttribute(p.toLowerCase() + W).split(v), H = /([.?@])?(.*)/.exec(p);
                l.push({ type: 1, index: r, name: H[2], strings: P, ctor: H[1] === "." ? St : H[1] === "?" ? Ct : H[1] === "@" ? wt : R });
              } else
                l.push({ type: 6, index: r });
            }
          for (const c of a)
            i.removeAttribute(c);
        }
        if (dt.test(i.tagName)) {
          const a = i.textContent.split(v), c = a.length - 1;
          if (c > 0) {
            i.textContent = g ? g.emptyScript : "";
            for (let p = 0; p < c; p++)
              i.append(a[p], C()), A.nextNode(), l.push({ type: 2, index: ++r });
            i.append(a[c], C());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === ht)
          l.push({ type: 2, index: r });
        else {
          let a = -1;
          for (; (a = i.data.indexOf(v, a + 1)) !== -1; )
            l.push({ type: 7, index: r }), a += v.length - 1;
        }
      r++;
    }
  }
  static createElement(t, e) {
    const s = f.createElement("template");
    return s.innerHTML = t, s;
  }
}
function E(n, t, e = n, s) {
  var i, r, o, d;
  if (t === y)
    return t;
  let l = s !== void 0 ? (i = e._$Co) === null || i === void 0 ? void 0 : i[s] : e._$Cl;
  const h = w(t) ? void 0 : t._$litDirective$;
  return (l == null ? void 0 : l.constructor) !== h && ((r = l == null ? void 0 : l._$AO) === null || r === void 0 || r.call(l, !1), h === void 0 ? l = void 0 : (l = new h(n), l._$AT(n, e, s)), s !== void 0 ? ((o = (d = e)._$Co) !== null && o !== void 0 ? o : d._$Co = [])[s] = l : e._$Cl = l), l !== void 0 && (t = E(n, l._$AS(n, t.values), l, s)), t;
}
class Et {
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
    const { el: { content: s }, parts: i } = this._$AD, r = ((e = t == null ? void 0 : t.creationScope) !== null && e !== void 0 ? e : f).importNode(s, !0);
    A.currentNode = r;
    let o = A.nextNode(), d = 0, l = 0, h = i[0];
    for (; h !== void 0; ) {
      if (d === h.index) {
        let $;
        h.type === 2 ? $ = new U(o, o.nextSibling, this, t) : h.type === 1 ? $ = new h.ctor(o, h.name, h.strings, this, t) : h.type === 6 && ($ = new xt(o, this, t)), this._$AV.push($), h = i[++l];
      }
      d !== (h == null ? void 0 : h.index) && (o = A.nextNode(), d++);
    }
    return A.currentNode = f, r;
  }
  v(t) {
    let e = 0;
    for (const s of this._$AV)
      s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class U {
  constructor(t, e, s, i) {
    var r;
    this.type = 2, this._$AH = u, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = i, this._$Cp = (r = i == null ? void 0 : i.isConnected) === null || r === void 0 || r;
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
    t = E(this, t, e), w(t) ? t === u || t == null || t === "" ? (this._$AH !== u && this._$AR(), this._$AH = u) : t !== this._$AH && t !== y && this._(t) : t._$litType$ !== void 0 ? this.g(t) : t.nodeType !== void 0 ? this.$(t) : ft(t) ? this.T(t) : this._(t);
  }
  k(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  $(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
  }
  _(t) {
    this._$AH !== u && w(this._$AH) ? this._$AA.nextSibling.data = t : this.$(f.createTextNode(t)), this._$AH = t;
  }
  g(t) {
    var e;
    const { values: s, _$litType$: i } = t, r = typeof i == "number" ? this._$AC(t) : (i.el === void 0 && (i.el = x.createElement(i.h, this.options)), i);
    if (((e = this._$AH) === null || e === void 0 ? void 0 : e._$AD) === r)
      this._$AH.v(s);
    else {
      const o = new Et(r, this), d = o.u(this.options);
      o.v(s), this.$(d), this._$AH = o;
    }
  }
  _$AC(t) {
    let e = it.get(t.strings);
    return e === void 0 && it.set(t.strings, e = new x(t)), e;
  }
  T(t) {
    at(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, i = 0;
    for (const r of t)
      i === e.length ? e.push(s = new U(this.k(C()), this.k(C()), this, this.options)) : s = e[i], s._$AI(r), i++;
    i < e.length && (this._$AR(s && s._$AB.nextSibling, i), e.length = i);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var s;
    for ((s = this._$AP) === null || s === void 0 || s.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const i = t.nextSibling;
      t.remove(), t = i;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cp = t, (e = this._$AP) === null || e === void 0 || e.call(this, t));
  }
}
class R {
  constructor(t, e, s, i, r) {
    this.type = 1, this._$AH = u, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = r, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = u;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, e = this, s, i) {
    const r = this.strings;
    let o = !1;
    if (r === void 0)
      t = E(this, t, e, 0), o = !w(t) || t !== this._$AH && t !== y, o && (this._$AH = t);
    else {
      const d = t;
      let l, h;
      for (t = r[0], l = 0; l < r.length - 1; l++)
        h = E(this, d[s + l], e, l), h === y && (h = this._$AH[l]), o || (o = !w(h) || h !== this._$AH[l]), h === u ? t = u : t !== u && (t += (h ?? "") + r[l + 1]), this._$AH[l] = h;
    }
    o && !i && this.j(t);
  }
  j(t) {
    t === u ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class St extends R {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === u ? void 0 : t;
  }
}
const bt = g ? g.emptyScript : "";
class Ct extends R {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    t && t !== u ? this.element.setAttribute(this.name, bt) : this.element.removeAttribute(this.name);
  }
}
class wt extends R {
  constructor(t, e, s, i, r) {
    super(t, e, s, i, r), this.type = 5;
  }
  _$AI(t, e = this) {
    var s;
    if ((t = (s = E(this, t, e, 0)) !== null && s !== void 0 ? s : u) === y)
      return;
    const i = this._$AH, r = t === u && i !== u || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive, o = t !== u && (i === u || r);
    r && this.element.removeEventListener(this.name, this, i), o && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e, s;
    typeof this._$AH == "function" ? this._$AH.call((s = (e = this.options) === null || e === void 0 ? void 0 : e.host) !== null && s !== void 0 ? s : this.element, t) : this._$AH.handleEvent(t);
  }
}
class xt {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    E(this, t);
  }
}
const nt = O.litHtmlPolyfillSupport;
nt == null || nt(x, U), ((j = O.litHtmlVersions) !== null && j !== void 0 ? j : O.litHtmlVersions = []).push("2.7.4");
const Ut = (n, t, e) => {
  var s, i;
  const r = (s = e == null ? void 0 : e.renderBefore) !== null && s !== void 0 ? s : t;
  let o = r._$litPart$;
  if (o === void 0) {
    const d = (i = e == null ? void 0 : e.renderBefore) !== null && i !== void 0 ? i : null;
    r._$litPart$ = o = new U(t.insertBefore(C(), d), d, void 0, e ?? {});
  }
  return o._$AI(n), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var B, I;
class b extends m {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t, e;
    const s = super.createRenderRoot();
    return (t = (e = this.renderOptions).renderBefore) !== null && t !== void 0 || (e.renderBefore = s.firstChild), s;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Ut(e, this.renderRoot, this.renderOptions);
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
    return y;
  }
}
b.finalized = !0, b._$litElement$ = !0, (B = globalThis.litElementHydrateSupport) === null || B === void 0 || B.call(globalThis, { LitElement: b });
const ot = globalThis.litElementPolyfillSupport;
ot == null || ot({ LitElement: b });
((I = globalThis.litElementVersions) !== null && I !== void 0 ? I : globalThis.litElementVersions = []).push("3.3.2");
class q extends b {
  constructor() {
    super(), this.name = "World";
  }
  // Render the UI as a function of component state
  render() {
    return gt`<button>Hello, ${this.name}!</button>`;
  }
}
M(q, "properties", {
  name: {}
}), // Define scoped styles right with your component, in plain CSS
M(q, "styles", $t`
    :host {
      color: blue;
    }
  `);
customElements.define("pix-button", q);
export {
  q as PixButton
};
