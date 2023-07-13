var uo = Object.defineProperty;
var go = (t, o, r) => o in t ? uo(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r;
var O = (t, o, r) => (go(t, typeof o != "symbol" ? o + "" : o, r), r);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const U = window, J = U.ShadowRoot && (U.ShadyCSS === void 0 || U.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, ao = Symbol(), K = /* @__PURE__ */ new WeakMap();
let bo = class {
  constructor(o, r, e) {
    if (this._$cssResult$ = !0, e !== ao)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = o, this.t = r;
  }
  get styleSheet() {
    let o = this.o;
    const r = this.t;
    if (J && o === void 0) {
      const e = r !== void 0 && r.length === 1;
      e && (o = K.get(r)), o === void 0 && ((this.o = o = new CSSStyleSheet()).replaceSync(this.cssText), e && K.set(r, o));
    }
    return o;
  }
  toString() {
    return this.cssText;
  }
};
const lo = (t) => new bo(typeof t == "string" ? t : t + "", void 0, ao), ho = (t, o) => {
  J ? t.adoptedStyleSheets = o.map((r) => r instanceof CSSStyleSheet ? r : r.styleSheet) : o.forEach((r) => {
    const e = document.createElement("style"), i = U.litNonce;
    i !== void 0 && e.setAttribute("nonce", i), e.textContent = r.cssText, t.appendChild(e);
  });
}, F = J ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((o) => {
  let r = "";
  for (const e of o.cssRules)
    r += e.cssText;
  return lo(r);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var H;
const R = window, G = R.trustedTypes, vo = G ? G.emptyScript : "", Q = R.reactiveElementPolyfillSupport, V = {
  toAttribute(t, o) {
    switch (o) {
      case Boolean:
        t = t ? vo : null;
        break;
      case Object:
      case Array:
        t = t == null ? t : JSON.stringify(t);
    }
    return t;
  },
  fromAttribute(t, o) {
    let r = t;
    switch (o) {
      case Boolean:
        r = t !== null;
        break;
      case Number:
        r = t === null ? null : Number(t);
        break;
      case Object:
      case Array:
        try {
          r = JSON.parse(t);
        } catch {
          r = null;
        }
    }
    return r;
  }
}, po = (t, o) => o !== t && (o == o || t == t), j = {
  attribute: !0,
  type: String,
  converter: V,
  reflect: !1,
  hasChanged: po
}, q = "finalized";
let f = class extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u();
  }
  static addInitializer(o) {
    var r;
    this.finalize(), ((r = this.h) !== null && r !== void 0 ? r : this.h = []).push(o);
  }
  static get observedAttributes() {
    this.finalize();
    const o = [];
    return this.elementProperties.forEach((r, e) => {
      const i = this._$Ep(e, r);
      i !== void 0 && (this._$Ev.set(i, e), o.push(i));
    }), o;
  }
  static createProperty(o, r = j) {
    if (r.state && (r.attribute = !1), this.finalize(), this.elementProperties.set(o, r), !r.noAccessor && !this.prototype.hasOwnProperty(o)) {
      const e = typeof o == "symbol" ? Symbol() : "__" + o, i = this.getPropertyDescriptor(o, e, r);
      i !== void 0 && Object.defineProperty(this.prototype, o, i);
    }
  }
  static getPropertyDescriptor(o, r, e) {
    return {
      get() {
        return this[r];
      },
      set(i) {
        const a = this[o];
        this[r] = i, this.requestUpdate(o, a, e);
      },
      configurable: !0,
      enumerable: !0
    };
  }
  static getPropertyOptions(o) {
    return this.elementProperties.get(o) || j;
  }
  static finalize() {
    if (this.hasOwnProperty(q))
      return !1;
    this[q] = !0;
    const o = Object.getPrototypeOf(this);
    if (o.finalize(), o.h !== void 0 && (this.h = [...o.h]), this.elementProperties = new Map(o.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const r = this.properties, e = [...Object.getOwnPropertyNames(r), ...Object.getOwnPropertySymbols(r)];
      for (const i of e)
        this.createProperty(i, r[i]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }
  static finalizeStyles(o) {
    const r = [];
    if (Array.isArray(o)) {
      const e = new Set(o.flat(1 / 0).reverse());
      for (const i of e)
        r.unshift(F(i));
    } else
      o !== void 0 && r.push(F(o));
    return r;
  }
  static _$Ep(o, r) {
    const e = r.attribute;
    return e === !1 ? void 0 : typeof e == "string" ? e : typeof o == "string" ? o.toLowerCase() : void 0;
  }
  u() {
    var o;
    this._$E_ = new Promise((r) => this.enableUpdating = r), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), (o = this.constructor.h) === null || o === void 0 || o.forEach((r) => r(this));
  }
  addController(o) {
    var r, e;
    ((r = this._$ES) !== null && r !== void 0 ? r : this._$ES = []).push(o), this.renderRoot !== void 0 && this.isConnected && ((e = o.hostConnected) === null || e === void 0 || e.call(o));
  }
  removeController(o) {
    var r;
    (r = this._$ES) === null || r === void 0 || r.splice(this._$ES.indexOf(o) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((o, r) => {
      this.hasOwnProperty(r) && (this._$Ei.set(r, this[r]), delete this[r]);
    });
  }
  createRenderRoot() {
    var o;
    const r = (o = this.shadowRoot) !== null && o !== void 0 ? o : this.attachShadow(this.constructor.shadowRootOptions);
    return ho(r, this.constructor.elementStyles), r;
  }
  connectedCallback() {
    var o;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (o = this._$ES) === null || o === void 0 || o.forEach((r) => {
      var e;
      return (e = r.hostConnected) === null || e === void 0 ? void 0 : e.call(r);
    });
  }
  enableUpdating(o) {
  }
  disconnectedCallback() {
    var o;
    (o = this._$ES) === null || o === void 0 || o.forEach((r) => {
      var e;
      return (e = r.hostDisconnected) === null || e === void 0 ? void 0 : e.call(r);
    });
  }
  attributeChangedCallback(o, r, e) {
    this._$AK(o, e);
  }
  _$EO(o, r, e = j) {
    var i;
    const a = this.constructor._$Ep(o, e);
    if (a !== void 0 && e.reflect === !0) {
      const n = (((i = e.converter) === null || i === void 0 ? void 0 : i.toAttribute) !== void 0 ? e.converter : V).toAttribute(r, e.type);
      this._$El = o, n == null ? this.removeAttribute(a) : this.setAttribute(a, n), this._$El = null;
    }
  }
  _$AK(o, r) {
    var e;
    const i = this.constructor, a = i._$Ev.get(o);
    if (a !== void 0 && this._$El !== a) {
      const n = i.getPropertyOptions(a), s = typeof n.converter == "function" ? {
        fromAttribute: n.converter
      } : ((e = n.converter) === null || e === void 0 ? void 0 : e.fromAttribute) !== void 0 ? n.converter : V;
      this._$El = a, this[a] = s.fromAttribute(r, n.type), this._$El = null;
    }
  }
  requestUpdate(o, r, e) {
    let i = !0;
    o !== void 0 && (((e = e || this.constructor.getPropertyOptions(o)).hasChanged || po)(this[o], r) ? (this._$AL.has(o) || this._$AL.set(o, r), e.reflect === !0 && this._$El !== o && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(o, e))) : i = !1), !this.isUpdatePending && i && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
    } catch (r) {
      Promise.reject(r);
    }
    const o = this.scheduleUpdate();
    return o != null && await o, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var o;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((i, a) => this[a] = i), this._$Ei = void 0);
    let r = !1;
    const e = this._$AL;
    try {
      r = this.shouldUpdate(e), r ? (this.willUpdate(e), (o = this._$ES) === null || o === void 0 || o.forEach((i) => {
        var a;
        return (a = i.hostUpdate) === null || a === void 0 ? void 0 : a.call(i);
      }), this.update(e)) : this._$Ek();
    } catch (i) {
      throw r = !1, this._$Ek(), i;
    }
    r && this._$AE(e);
  }
  willUpdate(o) {
  }
  _$AE(o) {
    var r;
    (r = this._$ES) === null || r === void 0 || r.forEach((e) => {
      var i;
      return (i = e.hostUpdated) === null || i === void 0 ? void 0 : i.call(e);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(o)), this.updated(o);
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
  shouldUpdate(o) {
    return !0;
  }
  update(o) {
    this._$EC !== void 0 && (this._$EC.forEach((r, e) => this._$EO(e, this[e], r)), this._$EC = void 0), this._$Ek();
  }
  updated(o) {
  }
  firstUpdated(o) {
  }
};
f[q] = !0, f.elementProperties = /* @__PURE__ */ new Map(), f.elementStyles = [], f.shadowRootOptions = {
  mode: "open"
}, Q == null || Q({
  ReactiveElement: f
}), ((H = R.reactiveElementVersions) !== null && H !== void 0 ? H : R.reactiveElementVersions = []).push("1.6.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var M;
const T = window, m = T.trustedTypes, X = m ? m.createPolicy("lit-html", {
  createHTML: (t) => t
}) : void 0, W = "$lit$", b = `lit$${(Math.random() + "").slice(9)}$`, co = "?" + b, _o = `<${co}>`, _ = document, z = () => _.createComment(""), A = (t) => t === null || typeof t != "object" && typeof t != "function", so = Array.isArray, fo = (t) => so(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", L = `[ 	
\f\r]`, k = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Y = /-->/g, oo = />/g, h = RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ro = /'/g, eo = /"/g, xo = /^(?:script|style|textarea|title)$/i, mo = (t) => (o, ...r) => ({
  _$litType$: t,
  strings: o,
  values: r
}), B = mo(1), y = Symbol.for("lit-noChange"), d = Symbol.for("lit-nothing"), io = /* @__PURE__ */ new WeakMap(), v = _.createTreeWalker(_, 129, null, !1), yo = (t, o) => {
  const r = t.length - 1, e = [];
  let i, a = o === 2 ? "<svg>" : "", n = k;
  for (let l = 0; l < r; l++) {
    const p = t[l];
    let g, c, x = -1, u = 0;
    for (; u < p.length && (n.lastIndex = u, c = n.exec(p), c !== null); )
      u = n.lastIndex, n === k ? c[1] === "!--" ? n = Y : c[1] !== void 0 ? n = oo : c[2] !== void 0 ? (xo.test(c[2]) && (i = RegExp("</" + c[2], "g")), n = h) : c[3] !== void 0 && (n = h) : n === h ? c[0] === ">" ? (n = i ?? k, x = -1) : c[1] === void 0 ? x = -2 : (x = n.lastIndex - c[2].length, g = c[1], n = c[3] === void 0 ? h : c[3] === '"' ? eo : ro) : n === eo || n === ro ? n = h : n === Y || n === oo ? n = k : (n = h, i = void 0);
    const C = n === h && t[l + 1].startsWith("/>") ? " " : "";
    a += n === k ? p + _o : x >= 0 ? (e.push(g), p.slice(0, x) + W + p.slice(x) + b + C) : p + b + (x === -2 ? (e.push(void 0), l) : C);
  }
  const s = a + (t[r] || "<?>") + (o === 2 ? "</svg>" : "");
  if (!Array.isArray(t) || !t.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [X !== void 0 ? X.createHTML(s) : s, e];
};
class E {
  constructor({
    strings: o,
    _$litType$: r
  }, e) {
    let i;
    this.parts = [];
    let a = 0, n = 0;
    const s = o.length - 1, l = this.parts, [p, g] = yo(o, r);
    if (this.el = E.createElement(p, e), v.currentNode = this.el.content, r === 2) {
      const c = this.el.content, x = c.firstChild;
      x.remove(), c.append(...x.childNodes);
    }
    for (; (i = v.nextNode()) !== null && l.length < s; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) {
          const c = [];
          for (const x of i.getAttributeNames())
            if (x.endsWith(W) || x.startsWith(b)) {
              const u = g[n++];
              if (c.push(x), u !== void 0) {
                const C = i.getAttribute(u.toLowerCase() + W).split(b), P = /([.?@])?(.*)/.exec(u);
                l.push({
                  type: 1,
                  index: a,
                  name: P[2],
                  strings: C,
                  ctor: P[1] === "." ? ko : P[1] === "?" ? zo : P[1] === "@" ? Ao : N
                });
              } else
                l.push({
                  type: 6,
                  index: a
                });
            }
          for (const x of c)
            i.removeAttribute(x);
        }
        if (xo.test(i.tagName)) {
          const c = i.textContent.split(b), x = c.length - 1;
          if (x > 0) {
            i.textContent = m ? m.emptyScript : "";
            for (let u = 0; u < x; u++)
              i.append(c[u], z()), v.nextNode(), l.push({
                type: 2,
                index: ++a
              });
            i.append(c[x], z());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === co)
          l.push({
            type: 2,
            index: a
          });
        else {
          let c = -1;
          for (; (c = i.data.indexOf(b, c + 1)) !== -1; )
            l.push({
              type: 7,
              index: a
            }), c += b.length - 1;
        }
      a++;
    }
  }
  static createElement(o, r) {
    const e = _.createElement("template");
    return e.innerHTML = o, e;
  }
}
function w(t, o, r = t, e) {
  var i, a, n, s;
  if (o === y)
    return o;
  let l = e !== void 0 ? (i = r._$Co) === null || i === void 0 ? void 0 : i[e] : r._$Cl;
  const p = A(o) ? void 0 : o._$litDirective$;
  return (l == null ? void 0 : l.constructor) !== p && ((a = l == null ? void 0 : l._$AO) === null || a === void 0 || a.call(l, !1), p === void 0 ? l = void 0 : (l = new p(t), l._$AT(t, r, e)), e !== void 0 ? ((n = (s = r)._$Co) !== null && n !== void 0 ? n : s._$Co = [])[e] = l : r._$Cl = l), l !== void 0 && (o = w(t, l._$AS(t, o.values), l, e)), o;
}
class wo {
  constructor(o, r) {
    this._$AV = [], this._$AN = void 0, this._$AD = o, this._$AM = r;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(o) {
    var r;
    const {
      el: {
        content: e
      },
      parts: i
    } = this._$AD, a = ((r = o == null ? void 0 : o.creationScope) !== null && r !== void 0 ? r : _).importNode(e, !0);
    v.currentNode = a;
    let n = v.nextNode(), s = 0, l = 0, p = i[0];
    for (; p !== void 0; ) {
      if (s === p.index) {
        let g;
        p.type === 2 ? g = new S(n, n.nextSibling, this, o) : p.type === 1 ? g = new p.ctor(n, p.name, p.strings, this, o) : p.type === 6 && (g = new Eo(n, this, o)), this._$AV.push(g), p = i[++l];
      }
      s !== (p == null ? void 0 : p.index) && (n = v.nextNode(), s++);
    }
    return v.currentNode = _, a;
  }
  v(o) {
    let r = 0;
    for (const e of this._$AV)
      e !== void 0 && (e.strings !== void 0 ? (e._$AI(o, e, r), r += e.strings.length - 2) : e._$AI(o[r])), r++;
  }
}
class S {
  constructor(o, r, e, i) {
    var a;
    this.type = 2, this._$AH = d, this._$AN = void 0, this._$AA = o, this._$AB = r, this._$AM = e, this.options = i, this._$Cp = (a = i == null ? void 0 : i.isConnected) === null || a === void 0 || a;
  }
  get _$AU() {
    var o, r;
    return (r = (o = this._$AM) === null || o === void 0 ? void 0 : o._$AU) !== null && r !== void 0 ? r : this._$Cp;
  }
  get parentNode() {
    let o = this._$AA.parentNode;
    const r = this._$AM;
    return r !== void 0 && (o == null ? void 0 : o.nodeType) === 11 && (o = r.parentNode), o;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(o, r = this) {
    o = w(this, o, r), A(o) ? o === d || o == null || o === "" ? (this._$AH !== d && this._$AR(), this._$AH = d) : o !== this._$AH && o !== y && this._(o) : o._$litType$ !== void 0 ? this.g(o) : o.nodeType !== void 0 ? this.$(o) : fo(o) ? this.T(o) : this._(o);
  }
  k(o) {
    return this._$AA.parentNode.insertBefore(o, this._$AB);
  }
  $(o) {
    this._$AH !== o && (this._$AR(), this._$AH = this.k(o));
  }
  _(o) {
    this._$AH !== d && A(this._$AH) ? this._$AA.nextSibling.data = o : this.$(_.createTextNode(o)), this._$AH = o;
  }
  g(o) {
    var r;
    const {
      values: e,
      _$litType$: i
    } = o, a = typeof i == "number" ? this._$AC(o) : (i.el === void 0 && (i.el = E.createElement(i.h, this.options)), i);
    if (((r = this._$AH) === null || r === void 0 ? void 0 : r._$AD) === a)
      this._$AH.v(e);
    else {
      const n = new wo(a, this), s = n.u(this.options);
      n.v(e), this.$(s), this._$AH = n;
    }
  }
  _$AC(o) {
    let r = io.get(o.strings);
    return r === void 0 && io.set(o.strings, r = new E(o)), r;
  }
  T(o) {
    so(this._$AH) || (this._$AH = [], this._$AR());
    const r = this._$AH;
    let e, i = 0;
    for (const a of o)
      i === r.length ? r.push(e = new S(this.k(z()), this.k(z()), this, this.options)) : e = r[i], e._$AI(a), i++;
    i < r.length && (this._$AR(e && e._$AB.nextSibling, i), r.length = i);
  }
  _$AR(o = this._$AA.nextSibling, r) {
    var e;
    for ((e = this._$AP) === null || e === void 0 || e.call(this, !1, !0, r); o && o !== this._$AB; ) {
      const i = o.nextSibling;
      o.remove(), o = i;
    }
  }
  setConnected(o) {
    var r;
    this._$AM === void 0 && (this._$Cp = o, (r = this._$AP) === null || r === void 0 || r.call(this, o));
  }
}
class N {
  constructor(o, r, e, i, a) {
    this.type = 1, this._$AH = d, this._$AN = void 0, this.element = o, this.name = r, this._$AM = i, this.options = a, e.length > 2 || e[0] !== "" || e[1] !== "" ? (this._$AH = Array(e.length - 1).fill(new String()), this.strings = e) : this._$AH = d;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(o, r = this, e, i) {
    const a = this.strings;
    let n = !1;
    if (a === void 0)
      o = w(this, o, r, 0), n = !A(o) || o !== this._$AH && o !== y, n && (this._$AH = o);
    else {
      const s = o;
      let l, p;
      for (o = a[0], l = 0; l < a.length - 1; l++)
        p = w(this, s[e + l], r, l), p === y && (p = this._$AH[l]), n || (n = !A(p) || p !== this._$AH[l]), p === d ? o = d : o !== d && (o += (p ?? "") + a[l + 1]), this._$AH[l] = p;
    }
    n && !i && this.j(o);
  }
  j(o) {
    o === d ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, o ?? "");
  }
}
class ko extends N {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(o) {
    this.element[this.name] = o === d ? void 0 : o;
  }
}
const $o = m ? m.emptyScript : "";
class zo extends N {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(o) {
    o && o !== d ? this.element.setAttribute(this.name, $o) : this.element.removeAttribute(this.name);
  }
}
class Ao extends N {
  constructor(o, r, e, i, a) {
    super(o, r, e, i, a), this.type = 5;
  }
  _$AI(o, r = this) {
    var e;
    if ((o = (e = w(this, o, r, 0)) !== null && e !== void 0 ? e : d) === y)
      return;
    const i = this._$AH, a = o === d && i !== d || o.capture !== i.capture || o.once !== i.once || o.passive !== i.passive, n = o !== d && (i === d || a);
    a && this.element.removeEventListener(this.name, this, i), n && this.element.addEventListener(this.name, this, o), this._$AH = o;
  }
  handleEvent(o) {
    var r, e;
    typeof this._$AH == "function" ? this._$AH.call((e = (r = this.options) === null || r === void 0 ? void 0 : r.host) !== null && e !== void 0 ? e : this.element, o) : this._$AH.handleEvent(o);
  }
}
class Eo {
  constructor(o, r, e) {
    this.element = o, this.type = 6, this._$AN = void 0, this._$AM = r, this.options = e;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(o) {
    w(this, o);
  }
}
const to = T.litHtmlPolyfillSupport;
to == null || to(E, S), ((M = T.litHtmlVersions) !== null && M !== void 0 ? M : T.litHtmlVersions = []).push("2.7.4");
const So = (t, o, r) => {
  var e, i;
  const a = (e = r == null ? void 0 : r.renderBefore) !== null && e !== void 0 ? e : o;
  let n = a._$litPart$;
  if (n === void 0) {
    const s = (i = r == null ? void 0 : r.renderBefore) !== null && i !== void 0 ? i : null;
    a._$litPart$ = n = new S(o.insertBefore(z(), s), s, void 0, r ?? {});
  }
  return n._$AI(t), n;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var D, I;
class $ extends f {
  constructor() {
    super(...arguments), this.renderOptions = {
      host: this
    }, this._$Do = void 0;
  }
  createRenderRoot() {
    var o, r;
    const e = super.createRenderRoot();
    return (o = (r = this.renderOptions).renderBefore) !== null && o !== void 0 || (r.renderBefore = e.firstChild), e;
  }
  update(o) {
    const r = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(o), this._$Do = So(r, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var o;
    super.connectedCallback(), (o = this._$Do) === null || o === void 0 || o.setConnected(!0);
  }
  disconnectedCallback() {
    var o;
    super.disconnectedCallback(), (o = this._$Do) === null || o === void 0 || o.setConnected(!1);
  }
  render() {
    return y;
  }
}
$.finalized = !0, $._$litElement$ = !0, (D = globalThis.litElementHydrateSupport) === null || D === void 0 || D.call(globalThis, {
  LitElement: $
});
const no = globalThis.litElementPolyfillSupport;
no == null || no({
  LitElement: $
});
((I = globalThis.litElementVersions) !== null && I !== void 0 ? I : globalThis.litElementVersions = []).push("3.3.2");
const Co = `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:normal;font-size:16px;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}body{margin:0;font-family:var(--pix-font-roboto)}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;color:inherit;cursor:pointer}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{border-width:0;padding:0;margin:0}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}*,*:before,*:after{box-sizing:border-box}button{background-color:transparent;color:inherit;border-width:0;padding:0;cursor:pointer}figure{margin:0}input::-moz-focus-inner{border:0;padding:0;margin:0}ul,ol{margin:0;padding:0;list-style:none}dl,dt,dd{margin:0}h1,h2,h3,h4,h5,h6{margin:0;font-size:inherit;font-weight:inherit}p{margin:0}cite{font-style:normal}:root{--pix-color-primary-5: #f2f9ff;--pix-color-primary-10: #dcf1ff;--pix-color-primary-20: #c4e6ff;--pix-color-primary-30: #88beff;--pix-color-primary-40: #5b94ff;--pix-color-primary: #3d68ff;--pix-color-primary-60: #2044dc;--pix-color-primary-70: #0d25b3;--pix-color-primary-80: #000e87;--pix-color-secondary-5: #fff9e6;--pix-color-secondary-10: #fff1c5;--pix-color-secondary-20: #ffe381;--pix-color-secondary: #ffd235;--pix-color-secondary-40: #ffbe00;--pix-color-secondary-50: #eaa600;--pix-color-secondary-60: #d87016;--pix-color-secondary-70: #a95800;--pix-color-secondary-80: #874d00;--pix-color-secondary-certif-5: #ccf6f5;--pix-color-secondary-certif-10: #9aedeb;--pix-color-secondary-certif-20: #67e4e0;--pix-color-secondary-certif-30: #34dbd6;--pix-color-secondary-certif: #20b4af;--pix-color-secondary-certif-50: #17817e;--pix-color-secondary-certif-60: #126765;--pix-color-secondary-certif-70: #0e4d4c;--pix-color-secondary-certif-80: #093432;--pix-color-secondary-orga-5: #d5f9ff;--pix-color-secondary-orga-10: #aaf4ff;--pix-color-secondary-orga-20: #80eeff;--pix-color-secondary-orga-30: #55e8ff;--pix-color-secondary-orga: #00ddff;--pix-color-secondary-orga-50: #00c1df;--pix-color-secondary-orga-60: #00a6bf;--pix-color-secondary-orga-70: #008a9f;--pix-color-secondary-orga-80: #006e80;--pix-color-tertiary-5: #ebe1ff;--pix-color-tertiary-10: #d8c2ff;--pix-color-tertiary-20: #c4a4ff;--pix-color-tertiary-30: #b186ff;--pix-color-tertiary: #9d67ff;--pix-color-tertiary-50: #8a49ff;--pix-color-tertiary-60: #6712ff;--pix-color-tertiary-70: #4e00db;--pix-color-tertiary-80: #3b00a4;--pix-color-success-5: #ecfdf5;--pix-color-success-10: #d1fae5;--pix-color-success-20: #a7f3d0;--pix-color-success-30: #6ee7b7;--pix-color-success: #34d399;--pix-color-success-50: #27b481;--pix-color-success-60: #14865d;--pix-color-success-70: #176c4d;--pix-color-success-80: #104834;--pix-color-warning-5: #fff9e6;--pix-color-warning-10: #fff1c5;--pix-color-warning-20: #ffe381;--pix-color-warning-30: #ffd235;--pix-color-warning-40: #ffbe00;--pix-color-warning-50: #eaa600;--pix-color-warning-60: #d87016;--pix-color-warning-70: #a95800;--pix-color-warning-80: #874d00;--pix-color-error-5: #fef2f2;--pix-color-error-10: #fee2e2;--pix-color-error-20: #fecaca;--pix-color-error-30: #fca5a5;--pix-color-error-40: #f87171;--pix-color-error-50: #ef4444;--pix-color-error-60: #dc2626;--pix-color-error-70: #b91c1c;--pix-color-error-80: #991b1b;--pix-color-error-90: #861212;--pix-color-neutral-0: #ffffff;--pix-color-neutral-5: #fafbfc;--pix-color-neutral-10: #f4f5f7;--pix-color-neutral-15: #eaecf0;--pix-color-neutral-20: #dfe1e6;--pix-color-neutral-22: #c1c7d0;--pix-color-neutral-25: #a5adba;--pix-color-neutral-30: #97a0af;--pix-color-neutral-35: #8993a4;--pix-color-neutral-40: #7a869a;--pix-color-neutral-45: #6b778c;--pix-color-neutral-50: #5e6c84;--pix-color-neutral-60: #505f79;--pix-color-neutral-70: #344563;--pix-color-neutral-80: #253858;--pix-color-neutral-90: #172b4d;--pix-color-neutral-100: #091e42;--pix-color-neutral-110: #07142e;--pix-color-shades-100: #000000;--pix-color-information-dark: #f24645;--pix-color-information-light: #f1a141;--pix-color-content-dark: #1a8c89;--pix-color-content-light: #52d987;--pix-color-communication-dark: #3d68ff;--pix-color-communication-light: #12a3ff;--pix-color-security-dark: #ac008d;--pix-color-security-light: #ff3f94;--pix-color-environment-dark: #5e2563;--pix-color-environment-light: #564da6;--pix-color-primary-app-gradient: linear-gradient( 91.59deg, #3d68ff 0%, #8845ff 100% );--pix-color-secondary-app-gradient: linear-gradient( 91.59deg, #fedc41 0%, #ff9f00 100% );--pix-color-primary-certif-gradient: linear-gradient( 91.59deg, #52d987 0%, #1a8c89 100% );--pix-color-primary-orga-gradient: linear-gradient( 91.59deg, #00ddff 0%, #0095c0 100% );--pix-color-secondary-orga-gradient: linear-gradient( 91.59deg, #0d7dc4 0%, #213371 100% );--pix-color-information-gradient: linear-gradient( 180deg, #f24645 0%, #f1a141 100% );--pix-color-content-gradient: linear-gradient( 180deg, #1a8c89 0%, #52d987 100% );--pix-color-communication-gradient: linear-gradient( 180deg, #3d68ff 0%, #12a3ff 100% );--pix-color-security-gradient: linear-gradient( 180deg, #ac008d 0%, #ff3f94 100% );--pix-color-environment-gradient: linear-gradient( 180deg, #5e2563 0%, #564da6 100% );--pix-font-open-sans: "Open Sans", Arial, sans-serif;--pix-font-roboto: "Roboto", Arial, sans-serif;--pix-font-normal: 400;--pix-font-medium: 500;--pix-font-bold: 700;--pix-spacing-spacing-xxs: 4px;--pix-spacing-spacing-xs: 8px;--pix-spacing-spacing-s: 16px;--pix-spacing-spacing-m: 24px;--pix-spacing-spacing-l: 32px;--pix-spacing-spacing-xl: 40px;--pix-spacing-spacing-xxl: 48px}@font-face{font-family:Open Sans;src:url(/fonts/OpenSans/OpenSans-Medium.ttf);font-weight:500;font-style:normal}@font-face{font-family:Roboto;src:url(/fonts/Roboto/Roboto-Regular.ttf);font-weight:400;font-style:normal}@font-face{font-family:Roboto;src:url(/fonts/Roboto/Roboto-Medium.ttf);font-weight:500;font-style:normal}@font-face{font-family:Roboto;src:url(/fonts/Roboto/Roboto-Bold.ttf);font-weight:700;font-style:normal}.pix-shadow-xs{box-shadow:0 4px 8px #07142e14}.pix-shadow-sm{box-shadow:0 6px 12px #07142e14}.pix-shadow-md{box-shadow:0 8px 16px #07142e14}.pix-shadow-lg{box-shadow:0 10px 20px #07142e14}.pix-shadow-xl{box-shadow:0 12px 24px #07142e14}.pix-modal__title,.pix-title-xs,.pix-sidebar__title,.pix-title-s,.indicator-card__value,.pix-title-m,.pix-title-l{font-family:var(--pix-font-open-sans);font-weight:500}.pix-title-l{font-size:2rem;line-height:1.25;letter-spacing:-.04em}@media (min-width: 769px){.pix-title-l{font-size:2.5rem}}@media (min-width: 992px){.pix-title-l{font-size:3rem}}.indicator-card__value,.pix-title-m{font-size:1.625rem;line-height:1.3;letter-spacing:-.02em}@media (min-width: 769px){.indicator-card__value,.pix-title-m{font-size:2rem;line-height:1.25;letter-spacing:-.04em}}@media (min-width: 992px){.indicator-card__value,.pix-title-m{font-size:2.25rem}}.pix-sidebar__title,.pix-title-s{font-size:1.375rem;line-height:1.3;letter-spacing:-.02em}@media (min-width: 769px){.pix-sidebar__title,.pix-title-s{font-size:1.5rem}}@media (min-width: 992px){.pix-sidebar__title,.pix-title-s{font-size:1.75rem}}.pix-modal__title,.pix-title-xs{font-size:1.25rem;line-height:1.4;letter-spacing:-.02em}.pix-tag--compact,.pix-body-xs,.indicator-card__sub,.pix-toggle__on,.pix-toggle__off,.pix-selectable-tag,.pix-modal__content,.pix-tag,.pix-select-search__input,.pix-select-options-category__option,.pix-select-options-category__name,.pix-select-button__dropdown-icon,.pix-select-button,.pix-select__empty-search-message,.progress-gauge__sub-title,.progress-gauge__text,.pix-multi-select-header__dropdown-icon,.pix-body-s,.pix-toggle__label,.pix-body-m,.indicator-card__title,.pix-body-l{font-family:var(--pix-font-roboto);font-weight:400}.indicator-card__title,.pix-body-l{font-size:1rem;line-height:1.5}@media (min-width: 769px){.indicator-card__title,.pix-body-l{font-size:1.125rem}}.pix-toggle__label,.pix-body-m{font-size:.875rem;line-height:1.5}@media (min-width: 769px){.pix-toggle__label,.pix-body-m{font-size:1rem}}.indicator-card__sub,.pix-toggle__on,.pix-toggle__off,.pix-selectable-tag,.pix-modal__content,.pix-tag,.pix-select-search__input,.pix-select-options-category__option,.pix-select-options-category__name,.pix-select-button__dropdown-icon,.pix-select-button,.pix-select__empty-search-message,.progress-gauge__sub-title,.progress-gauge__text,.pix-multi-select-header__dropdown-icon,.pix-body-s{font-size:.875rem;line-height:1.5}.pix-tag--compact,.pix-body-xs{font-size:.75rem;line-height:1.5;letter-spacing:.02em}.pix-body-weight-medium{font-weight:500}.pix-body-weight-bold{font-weight:700}.screen-reader-only,.screen-reader-only>*{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.pix-background-header{position:relative;padding:68px 24px 0}.pix-background-header__background{position:absolute;top:0;left:0;z-index:-1;width:100%;min-height:270px;background:var(--pix-color-primary-app-gradient);box-shadow:0 2px 8px #0000001a;color:var(--pix-color-neutral-0)}.pix-background-header__content{max-width:980px;margin:0 auto}.pix-banner{padding:16px 24px;display:flex;align-items:center;font-size:.875rem;box-shadow:0 4px 8px #07142e14}.pix-banner__action{text-decoration:underline;color:inherit}.pix-banner__action .external-link{margin-left:4px;font-size:.875rem}.pix-banner__close{display:flex;margin-left:auto;padding-left:8px}.pix-banner__icon{font-size:1.125rem;margin-right:var(--pix-spacing-xs)}.pix-banner--information,.pix-banner--information .pix-icon-button{background-color:var(--pix-color-primary-5);color:var(--pix-color-primary-70)}.pix-banner--information .pix-icon-button:hover:enabled,.pix-banner--information .pix-icon-button:focus:enabled,.pix-banner--information .pix-icon-button:active:enabled{background-color:var(--pix-color-primary-10);color:var(--pix-color-primary-70)}.pix-banner--information .pix-icon-button:focus:enabled{outline-color:var(--pix-color-primary-70)}.pix-banner--warning,.pix-banner--warning .pix-icon-button{background-color:var(--pix-color-warning-5);color:var(--pix-color-warning-70)}.pix-banner--warning .pix-icon-button:hover:enabled,.pix-banner--warning .pix-icon-button:focus:enabled,.pix-banner--warning .pix-icon-button:active:enabled{background-color:var(--pix-color-warning-10);color:var(--pix-color-warning-70)}.pix-banner--warning .pix-icon-button:focus:enabled{outline-color:var(--pix-color-warning-70)}.pix-banner--error,.pix-banner--error .pix-icon-button{background-color:var(--pix-color-error-5);color:var(--pix-color-error-70)}.pix-banner--error .pix-icon-button:hover:enabled,.pix-banner--error .pix-icon-button:focus:enabled,.pix-banner--error .pix-icon-button:active:enabled{background-color:var(--pix-color-error-10);color:var(--pix-color-error-70)}.pix-banner--error .pix-icon-button:focus:enabled{outline-color:var(--pix-color-error-70)}.pix-banner--communication{background-color:var(--pix-color-primary);color:var(--pix-color-neutral-0)}.pix-banner--communication-orga{background-color:var(--pix-color-secondary-orga-80);color:var(--pix-color-neutral-0)}.pix-banner--communication-certif{background-color:var(--pix-color-secondary-certif-50);color:var(--pix-color-neutral-0)}.pix-block{position:relative;background-color:var(--pix-color-neutral-0);border-radius:5px}.pix-block--shadow-light{box-shadow:0 4px 8px rgba(var(--pix-color-neutral-110),.08)}.pix-block--shadow-heavy{box-shadow:0 12px 24px rgba(var(--pix-color-neutral-110),.08)}.pix-button{color:var(--pix-color-neutral-0);font-size:.875rem;font-weight:var(--pix-font-medium);white-space:nowrap;cursor:pointer;border:1px solid transparent;outline:none;display:flex;justify-content:center;align-items:center;text-decoration:none;padding:12px 24px;border-radius:4px;background-color:var(--pix-color-primary)}.pix-button--shape-rounded{border-radius:25px}.pix-button--size-small.pix-button--shape-rounded{padding:8px 24px}.pix-button--size-small.pix-button--shape-squircle{padding:8px 16px}.pix-button--disabled{opacity:.5;cursor:not-allowed}.pix-button:not(.pix-button--disabled):hover{background-color:var(--pix-color-primary-60)}.pix-button:not(.pix-button--disabled):focus,.pix-button:not(.pix-button--disabled):focus-visible{background-color:var(--pix-color-primary-60);outline:1px solid var(--pix-color-neutral-0);outline-offset:-4px}.pix-button:not(.pix-button--disabled):active{background-color:var(--pix-color-primary-70);outline:none}.pix-button--background-green{background-color:var(--pix-color-success-60)}.pix-button--background-green:not(.pix-button--disabled):hover{background-color:var(--pix-color-success-70)}.pix-button--background-green:not(.pix-button--disabled):focus,.pix-button--background-green:not(.pix-button--disabled):focus-visible{background-color:var(--pix-color-success-70);outline:1px solid var(--pix-color-neutral-0);outline-offset:-4px}.pix-button--background-green:not(.pix-button--disabled):active{background-color:var(--pix-color-success-80);outline:none}.pix-button--background-yellow{color:var(--pix-color-neutral-100);background-color:var(--pix-color-warning-40)}.pix-button--background-yellow:not(.pix-button--disabled):hover{background-color:var(--pix-color-warning-50)}.pix-button--background-yellow:not(.pix-button--disabled):focus,.pix-button--background-yellow:not(.pix-button--disabled):focus-visible{background-color:var(--pix-color-warning-50);outline:1px solid var(--pix-color-neutral-0);outline-offset:-4px}.pix-button--background-yellow:not(.pix-button--disabled):active{background-color:var(--pix-color-warning-60);outline:none}.pix-button--background-red{color:var(--pix-color-neutral-0);background-color:var(--pix-color-error-70)}.pix-button--background-red:not(.pix-button--disabled):hover{background-color:var(--pix-color-error-80)}.pix-button--background-red:not(.pix-button--disabled):focus,.pix-button--background-red:not(.pix-button--disabled):focus-visible{background-color:var(--pix-color-error-70);outline:1px solid var(--pix-color-neutral-0);outline-offset:-4px}.pix-button--background-red:not(.pix-button--disabled):active{background-color:var(--pix-color-error-90);outline:none}.pix-button--background-grey{color:var(--pix-color-neutral-90);background-color:var(--pix-color-neutral-20)}.pix-button--background-grey:not(.pix-button--disabled):hover{background-color:var(--pix-color-neutral-22)}.pix-button--background-grey:not(.pix-button--disabled):focus,.pix-button--background-grey:not(.pix-button--disabled):focus-visible{background-color:var(--pix-color-neutral-90);color:var(--pix-color-neutral-0);outline:1px solid var(--pix-color-neutral-0);outline-offset:-4px}.pix-button--background-grey:not(.pix-button--disabled):active{background-color:var(--pix-color-neutral-25);color:var(--pix-color-neutral-90);outline:none}.pix-button--background-transparent{background-color:transparent;color:var(--pix-color-neutral-50);border:1px solid var(--pix-color-neutral-50)}.pix-button--background-transparent-light{color:var(--pix-color-neutral-90);background-color:transparent}.pix-button--background-transparent-light.pix-button--border{border:1px solid var(--pix-color-neutral-50)}.pix-button--background-transparent-light:not(.pix-button--disabled):hover{background-color:var(--pix-color-neutral-60);color:var(--pix-color-neutral-0);border:1px solid transparent}.pix-button--background-transparent-light:not(.pix-button--disabled):focus,.pix-button--background-transparent-light:not(.pix-button--disabled):focus-visible{background-color:var(--pix-color-neutral-90);color:var(--pix-color-neutral-0);outline:1px solid var(--pix-color-neutral-0);outline-offset:-4px}.pix-button--background-transparent-light:not(.pix-button--disabled):active{background-color:var(--pix-color-neutral-70);outline:none}.pix-button--background-transparent-dark{color:var(--pix-color-neutral-0);background-color:transparent}.pix-button--background-transparent-dark.pix-button--border{border:1px solid var(--pix-color-neutral-0)}.pix-button--background-transparent-dark:not(.pix-button--disabled):hover{background-color:var(--pix-color-neutral-10);color:var(--pix-color-neutral-90);border:1px solid transparent}.pix-button--background-transparent-dark:not(.pix-button--disabled):focus,.pix-button--background-transparent-dark:not(.pix-button--disabled):focus-visible{background-color:var(--pix-color-neutral-10);color:var(--pix-color-neutral-90);outline:1px solid var(--pix-color-neutral-90);outline-offset:-4px}.pix-button--background-transparent-dark:not(.pix-button--disabled):active{background-color:var(--pix-color-neutral-20);outline:none}.pix-button__icon{height:1rem}.pix-button__icon--before{margin-right:var(--pix-spacing-xs)}.pix-button__icon--after{margin-left:var(--pix-spacing-xs)}.pix-button .loader{position:absolute}.pix-button .loader__not-visible-text{visibility:hidden}.loader>div{width:10px;height:10px;background-color:var(--pix-neutral-0);border-radius:100%;display:inline-block;animation:sk-bouncedelay 1.4s infinite ease-in-out both}.loader--white>div{background-color:var(--pix-neutral-0)}.loader--grey>div{background-color:var(--pix-neutral-80)}.loader .bounce1{animation-delay:-.32s}.loader .bounce2{animation-delay:-.16s}@keyframes sk-bouncedelay{0%,80%,to{transform:scale(0)}40%{transform:scale(1)}}.pix-button-upload__input{display:none}.pix-collapsible{border:1px solid var(--pix-color-neutral-20);background-color:var(--pix-color-neutral-0)}.pix-collapsible:first-child,.pix-collapsible:first-child .pix-collapsible__title{border-top-left-radius:.5rem;border-top-right-radius:.5rem}.pix-collapsible:last-child,.pix-collapsible:last-child .pix-collapsible__title:not([aria-expanded=true]){border-bottom-left-radius:.5rem;border-bottom-right-radius:.5rem}.pix-collapsible:not(:first-child){border-top:none}.pix-collapsible__title{display:flex;justify-content:space-between;align-items:center;width:100%;padding:var(--pix-spacing-s);border:none;color:var(--pix-color-neutral-90);font-size:1rem;line-height:1.25}.pix-collapsible__title:hover,.pix-collapsible__title:focus,.pix-collapsible__title[aria-expanded=true]{background-color:var(--pix-color-neutral-10)}.pix-collapsible__title[aria-expanded=true]{border-bottom:1px solid var(--pix-color-neutral-20)}.pix-collapsible-title__container{display:flex;align-items:center;flex-grow:1}.pix-collapsible-title__icon{margin-right:var(--pix-spacing-xs);color:var(--pix-color-neutral-50)}.pix-collapsible-title__toggle-icon{width:1rem;height:1rem;padding:.5rem;margin-left:var(--pix-spacing-xs);border-radius:50%}.pix-collapsible__title:hover .pix-collapsible-title__toggle-icon{background-color:var(--pix-color-neutral-20)}.pix-collapsible__content{padding:var(--pix-spacing-s);font-size:.875rem;line-height:1.25rem;color:var(--pix-color-neutral-60)}.pix-collapsible__content[aria-hidden=true]{display:none}.pix-filter-banner{display:flex;flex-direction:column;position:relative;gap:var(--pix-spacing-xs);width:100%;background-color:var(--pix-color-neutral-0);box-shadow:0 2px 5px 0 rgba(var(--pix-color-neutral-110),.05);min-height:64px;padding:var(--pix-spacing-s) var(--pix-spacing-m)}.pix-filter-banner__title{color:var(--pix-color-neutral-60);font-size:.875rem;margin:0}.pix-filter-banner__container-filter{display:flex;flex-direction:column;gap:var(--pix-spacing-s)}.pix-filter-banner__container-action{display:flex;flex-direction:column;align-items:center;border-top:1px solid var(--pix-color-neutral-15)}.pix-filter-banner__details{color:var(--pix-color-neutral-60);font-weight:var(--pix-font-medium);padding:var(--pix-spacing-xs) 0 var(--pix-spacing-xs) 0;margin:0;font-size:.875rem}.pix-filter-banner__button{font-size:.875rem}.pix-filter-banner-button__icon{padding-right:var(--pix-spacing-xxs)}@media (min-width: 769px){.pix-filter-banner{align-items:center;flex-direction:row;gap:var(--pix-spacing-m)}.pix-filter-banner__container-title{display:flex;align-items:center}.pix-filter-banner__container-filter{flex-direction:row;flex-wrap:wrap;align-items:center;flex-grow:2}.pix-filter-banner__container-action{flex-direction:row;border:none}.pix-filter-banner__details{padding:0 var(--pix-spacing-s) 0 0;text-align:center;border:none}.pix-filter-banner__button-container{border-left:1px solid var(--pix-color-neutral-15);padding-left:var(--pix-spacing-s)}}.pix-icon-button{border-radius:50%;cursor:pointer;border:none;outline:none;padding:0;display:inline-flex;align-items:center;justify-content:center;background-color:transparent;color:var(--pix-color-neutral-60)}.pix-icon-button:disabled{opacity:.5;cursor:not-allowed}.pix-icon-button:hover:enabled{background-color:var(--pix-color-neutral-20);outline:0;color:var(--pix-color-neutral-60)}.pix-icon-button:focus:enabled{background-color:var(--pix-color-neutral-60);outline:1px solid var(--pix-color-neutral-0);outline-offset:-3px;color:var(--pix-color-neutral-0)}.pix-icon-button:active:enabled{background-color:var(--pix-color-neutral-22);outline:0;color:var(--pix-color-neutral-60)}.pix-icon-button--background{background-color:var(--pix-color-neutral-10)}.pix-icon-button--small{width:2rem;min-width:2rem;height:2rem;font-size:1rem}.pix-icon-button--big{width:2.375rem;min-width:2.375rem;height:2.375rem;font-size:1.25rem}.pix-message{margin:0;padding:.75rem 1rem;font-size:.875rem;border-radius:4px;align-items:center;display:flex}.pix-message.pix-message--info{color:var(--pix-color-primary-70);background-color:var(--pix-color-primary-5)}.pix-message.pix-message--alert,.pix-message.pix-message--error{color:var(--pix-color-error-70);background-color:var(--pix-color-error-5)}.pix-message.pix-message--success{color:var(--pix-color-success-70);background-color:var(--pix-color-success-5)}.pix-message.pix-message--warning{color:var(--pix-color-warning-70);background-color:var(--pix-color-warning-5)}.pix-message svg{margin-right:8px}.pix-multi-select{display:inline-block;position:relative}.pix-multi-select__label{display:block;font-size:.875rem;line-height:1.375rem;color:var(--pix-color-neutral-90);margin-bottom:var(--pix-color-spacing-xxs);font-weight:var(--pix-font-medium)}.pix-multi-select-header{display:flex;flex-direction:row;align-items:center;position:relative;border:1px var(--pix-color-neutral-40) solid;height:36px;padding:0 32px 0 16px;width:100%;background-color:var(--pix-color-neutral-0);border-radius:4px;outline:none;font-size:.875rem;cursor:pointer;color:var(--pix-color-neutral-90)}.pix-multi-select-header:hover{box-shadow:inset 0 0 0 .6px var(--pix-color-neutral-70);background-color:var(--pix-color-neutral-5)}.pix-multi-select-header:focus-within{border-color:var(--pix-color-primary);box-shadow:inset 0 0 0 .6px var(--pix-color-primary);outline:none}.pix-multi-select-header--big{height:44px}.pix-multi-select-header__search-icon{color:var(--pix-color-neutral-30)}.pix-multi-select-header__title{position:absolute;opacity:0;width:0;height:0}.pix-multi-select-header input.pix-multi-select-header__search-input{height:inherit;width:100%;border:none;outline:none;padding:0 10px;border-radius:3px;font-size:.875rem;color:var(--pix-color-neutral-90);background:transparent}.pix-multi-select-header__dropdown-icon{color:var(--pix-color-neutral-60);right:10px;top:calc(50% - 6px);position:absolute;pointer-events:none}.pix-multi-select-list{width:100%;margin:0;z-index:200;background-color:var(--pix-color-neutral-0);position:absolute;border-top:none;border-radius:0 0 4px 4px;overflow-y:auto;max-height:200px;list-style-type:none;padding:0;box-shadow:0 6px 12px #07142e14;transition:all .1s ease-in-out;margin-top:var(--pix-spacing-xxs)}.pix-multi-select-list__item-label{padding:var(--pix-spacing-xs) var(--pix-spacing-m)}.pix-multi-select-list--hidden{visibility:hidden;opacity:0}.pix-multi-select-list::-webkit-scrollbar{width:11px}.pix-multi-select-list::-webkit-scrollbar-track{border-radius:4px;border:1px solid var(--pix-color-neutral-20);background:var(--pix-color-neutral-0)}.pix-multi-select-list::-webkit-scrollbar-thumb{border-radius:4px;background:var(--pix-color-neutral-30)}.pix-multi-select-list::-webkit-scrollbar-thumb:hover{background:var(--pix-color-neutral-35)}.pix-multi-select-list li.pix-multi-select-list__item{position:relative;list-style:none}.pix-multi-select-list li.pix-multi-select-list__item:hover,.pix-multi-select-list li.pix-multi-select-list__item:focus{outline:none;cursor:pointer;background-color:var(--pix-color-neutral-10)}.pix-multi-select-list li.pix-multi-select-list__item--no-result{text-align:center;padding:12px 0}.pix-multi-select-list li.pix-multi-select-list__item:last-of-type{border-bottom:none}.progress-gauge{position:relative;display:grid;grid-template-areas:"text progressbar" "subtitle subtitle";grid-template-columns:auto 1fr;align-items:center;width:100%;min-width:6rem;border-radius:5px}.progress-gauge__bar{grid-area:progressbar;inline-size:unset;flex-grow:1;height:.875rem;border:2px solid var(--pix-color-neutral-20);border-radius:1.625rem;overflow:hidden}.progress-gauge__bar::-webkit-progress-value{background-color:var(--pix-color-primary);border-radius:1.625rem}.progress-gauge__bar::-moz-progress-bar{background-color:var(--pix-color-primary);border-radius:1.625rem}.progress-gauge__bar::-webkit-progress-bar{background-color:var(--pix-color-neutral-20)}.progress-gauge__text{grid-area:text;min-width:5ch;margin-right:var(--pix-spacing-xxs);white-space:nowrap;font-weight:500;line-height:1}.progress-gauge__sub-title{grid-area:subtitle;width:100%;margin:6px 0;color:var(--pix-color-primary-60);letter-spacing:.4px;text-transform:uppercase;text-overflow:ellipsis;overflow:hidden}.progress-gauge--theme-dark .progress-gauge__bar{border:2px solid var(--pix-color-neutral-0)}.progress-gauge--theme-dark .progress-gauge__bar::-webkit-progress-bar{background-color:var(--pix-color-neutral-0)}.progress-gauge--theme-dark .progress-gauge__text,.progress-gauge--theme-dark .progress-gauge__sub-title{color:var(--pix-color-neutral-0)}.progress-gauge--content-blue .progress-gauge__bar::-webkit-progress-value{background-color:var(--pix-color-primary)}.progress-gauge--content-blue .progress-gauge__bar::-moz-progress-bar{background-color:var(--pix-color-primary)}.progress-gauge--content-blue:not(.progress-gauge--theme-dark) .progress-gauge__text,.progress-gauge--content-blue:not(.progress-gauge--theme-dark) .progress-gauge__sub-title{color:var(--pix-color-primary)}.progress-gauge--content-green .progress-gauge__bar::-webkit-progress-value{background-color:var(--pix-color-success-60)}.progress-gauge--content-green .progress-gauge__bar::-moz-progress-bar{background-color:var(--pix-color-success-60)}.progress-gauge--content-green:not(.progress-gauge--theme-dark) .progress-gauge__text,.progress-gauge--content-green:not(.progress-gauge--theme-dark) .progress-gauge__sub-title{color:var(--pix-color-success-60)}.progress-gauge--content-purple .progress-gauge__bar::-webkit-progress-value{background-color:var(--pix-color-tertiary-60)}.progress-gauge--content-purple .progress-gauge__bar::-moz-progress-bar{background-color:var(--pix-color-tertiary-60)}.progress-gauge--content-purple:not(.progress-gauge--theme-dark) .progress-gauge__text,.progress-gauge--content-purple:not(.progress-gauge--theme-dark) .progress-gauge__sub-title{color:var(--pix-color-tertiary-60)}.pix-return-to{font-size:1rem;font-weight:var(--pix-font-medium);letter-spacing:.15px;display:inline-flex;align-items:center;border-bottom:transparent solid 2px;text-decoration:none}.pix-return-to__icon{position:relative;z-index:3;padding:4px 7px;font-size:1rem}.pix-return-to__icon:before{content:"";position:absolute;z-index:-1;width:100%;height:100%;top:0;left:0;opacity:0;border-radius:50%;transition:.3s ease opacity}.pix-return-to__text{margin-left:4px}.pix-return-to:hover,.pix-return-to:active{cursor:pointer;background-color:transparent;border-bottom-color:transparent}.pix-return-to:hover :before,.pix-return-to:active :before{opacity:.2}.pix-return-to:focus-visible{background-color:var(--pix-color-warning-40);border-bottom:var(--pix-color-neutral-100) solid 2px}.pix-return-to:focus-visible .pix-return-to__text{padding-right:6px}.pix-return-to--white{color:var(--pix-neutral-10)}.pix-return-to--white .pix-return-to__icon,.pix-return-to--white:hover,.pix-return-to--white:active{color:var(--pix-color-neutral-0)}.pix-return-to--white:hover :before,.pix-return-to--white:active :before{background-color:var(--pix-color-neutral-0)}.pix-return-to--black{color:var(--pix-color-neutral-80)}.pix-return-to--black .pix-return-to__icon{color:var(--pix-color-neutral-60)}.pix-return-to--black:hover,.pix-return-to--black:active{color:var(--pix-color-neutral-110)}.pix-return-to--black:hover :before,.pix-return-to--black:active :before{background-color:var(--pix-color-neutral-60)}.pix-return-to--blue,.pix-return-to--blue .pix-return-to__icon{color:var(--pix-communication-dark)}.pix-return-to--blue:hover,.pix-return-to--blue:active{color:var(--pix-color-primary-60)}.pix-return-to--blue:hover :before,.pix-return-to--blue:active :before{background-color:var(--pix-communication-dark)}.pix-select{display:inline-block;position:relative}.pix-select__label{display:block;font-size:.875rem;line-height:1.375rem;color:var(--pix-color-neutral-90);margin-bottom:var(--pix-color-spacing-xxs);font-weight:var(--pix-font-medium)}.pix-select__sub-label{display:block;font-size:.875rem;line-height:1.375rem;color:var(--pix-color-neutral-90);margin-bottom:var(--pix-color-spacing-xxs);font-weight:var(--pix-font-medium);font-size:.813rem;line-height:1rem;color:var(--pix-color-neutral-60);font-weight:var(--pix-font-normal)}.pix-select__dropdown{z-index:200;position:absolute;max-height:12.5rem;width:inherit;border-top:none;border-radius:0 0 var(--pix-spacing-xxs) var(--pix-spacing-xxs);list-style-type:none;padding:0;background-color:var(--pix-color-neutral-0);box-shadow:0 6px 12px #07142e14;transition:all .1s ease-in-out;white-space:nowrap;margin-top:var(--pix-spacing-xxs);overflow-y:auto}.pix-select__dropdown::-webkit-scrollbar{width:.5rem}.pix-select__dropdown::-webkit-scrollbar-track{border-radius:var(--pix-spacing-xxs);border:1px solid var(--pix-color-neutral-20);background:var(--pix-color-neutral-20)}.pix-select__dropdown::-webkit-scrollbar-thumb{border-radius:var(--pix-spacing-xxs);width:.375rem;background:var(--pix-color-neutral-30)}.pix-select__dropdown::-webkit-scrollbar-thumb:hover{background:var(--pix-color-neutral-35)}.pix-select__dropdown--closed{visibility:hidden;opacity:0}.pix-select__empty-search-message{color:var(--pix-color-neutral-70);text-align:center}.pix-select__search{display:flex;border-bottom:2px solid var(--pix-color-neutral-22);margin:var(--pix-spacing-s) var(--pix-spacing-m);color:var(--pix-color-neutral-30);border-radius:var(--pix-spacing-xxs) var(--pix-spacing-xxs) 0 0}.pix-select__search:focus-within{background:var(--pix-color-neutral-10);border-bottom:2px solid var(--pix-color-primary)}.pix-select__options{border-top:1px solid var(--pix-color-neutral-20)}.pix-select__error-message{font-size:.75rem;color:var(--pix-color-error-70);margin-top:var(--pix-color-spacing-xxs)}.pix-select-button{display:flex;align-items:center;position:relative;border:1px var(--pix-color-neutral-45) solid;padding:0 var(--pix-spacing-s) 0 var(--pix-spacing-s);width:100%;background-color:var(--pix-color-neutral-0);border-radius:var(--pix-spacing-xxs);outline:none;height:2.25rem;cursor:pointer;color:var(--pix-color-neutral-90);justify-content:space-between}.pix-select-button:hover{box-shadow:inset 0 0 0 .6px var(--pix-color-neutral-70);background-color:var(--pix-color-neutral-5)}.pix-select-button:focus-within{border-color:var(--pix-color-primary);box-shadow:inset 0 0 0 .6px var(--pix-color-primary);outline:none}.pix-select-button--disabled{background-color:var(--pix-color-neutral-20)}.pix-select-button--disabled:hover{box-shadow:inset 0 0 0 .6px var(--pix-color-neutral-70);background-color:var(--pix-color-neutral-20)}.pix-select-button--error{border-color:var(--pix-color-error-70);box-shadow:inset 0 0 0 .6px var(--pix-color-error-70)}.pix-select-button__text{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.pix-select-button__dropdown-icon{margin-left:var(--pix-spacing-xs);color:var(--pix-color-neutral-60);pointer-events:none}.pix-select-options__category{list-style:none;padding:0;margin:0}.pix-select-options-category__name{padding:var(--pix-spacing-s) var(--pix-spacing-m) var(--pix-spacing-xs) var(--pix-spacing-m);text-transform:uppercase;color:var(--pix-color-neutral-45)}.pix-select-options-category__option{display:flex;justify-content:space-between;padding:var(--pix-spacing-xs) var(--pix-spacing-m);color:var(--pix-color-neutral-70)}.pix-select-options-category__option:hover,.pix-select-options-category__option:focus{outline:none;cursor:pointer;background-color:var(--pix-color-neutral-10)}.pix-select-options-category__option svg{visibility:hidden;opacity:0;font-size:1.125rem}.pix-select-options-category__option--selected{background-color:var(--pix-color-primary-5);align-items:center}.pix-select-options-category__option--selected svg{visibility:visible;opacity:1}.pix-select-options-category__option--hidden{visibility:hidden;height:0;padding-top:0;padding-bottom:0}.pix-select-search__input{width:100%;border:none;padding-left:var(--pix-spacing-xs);margin:var(--pix-spacing-xxs)}.pix-select-search__input:focus{outline:none;background:var(--pix-color-neutral-10)}.pix-select-search__icon{margin:auto var(--pix-spacing-xxs)}.pix-stars{display:flex;height:2.25rem}.pix-stars *+*{margin-left:var(--pix-spacing-xxs)}.pix-stars__item{height:100%;fill:var(--pix-color-neutral-5);stroke:var(--pix-color-neutral-40)}.pix-stars__item[data-acquired]{fill:var(--pix-color-secondary-40);stroke:var(--pix-color-secondary-60)}.pix-stars__item--color-blue[data-acquired]{fill:var(--pix-color-primary-40);stroke:var(--pix-color-primary-60)}.pix-stars__item--color-grey{fill:var(--pix-color-neutral-0);stroke:var(--pix-color-neutral-40)}.pix-stars__item--color-grey[data-acquired]{fill:var(--pix-color-neutral-40);stroke:var(--pix-color-neutral-40)}.pix-tag{display:inline-block;text-align:center;vertical-align:baseline;white-space:nowrap;padding:4px 16px;border:1px solid transparent;border-radius:.95rem;color:var(--pix-color-neutral-0);background-color:var(--pix-color-primary);font-weight:var(--pix-font-medium)}.pix-tag--blue-light{color:var(--pix-color-primary-80);background-color:var(--pix-color-primary-10)}.pix-tag--green{background-color:var(--pix-color-success-70)}.pix-tag--green-light{color:var(--pix-color-success-80);background-color:var(--pix-color-success-10)}.pix-tag--purple{background-color:var(--pix-color-tertiary-60)}.pix-tag--purple-light{color:var(--pix-color-tertiary-80);background-color:var(--pix-color-tertiary-5)}.pix-tag--yellow{color:var(--pix-color-neutral-90);background-color:var(--pix-color-warning-40)}.pix-tag--yellow-light{color:var(--pix-color-warning-80);background-color:var(--pix-color-warning-10)}.pix-tag--orange{background-color:var(--pix-color-warning-70)}.pix-tag--orange-light{color:var(--pix-color-warning-80);background-color:var(--pix-color-warning-10)}.pix-tag--grey{color:var(--pix-color-neutral-15);background-color:var(--pix-color-neutral-60)}.pix-tag--grey-light{color:var(--pix-color-neutral-90);background-color:var(--pix-color-neutral-20)}.pix-tag--compact{font-weight:var(--pix-font-medium);text-transform:uppercase;padding:4px 13px;line-height:inherit}.pix-textarea textarea{width:100%;border:1px solid var(--pix-color-neutral-40);border-style:solid;border-radius:4px;padding:10px 16px;color:var(--pix-color-neutral-90);font-size:.875rem;resize:vertical}.pix-textarea textarea:hover{box-shadow:inset 0 0 0 .6px var(--pix-color-neutral-70);background-color:var(--pix-color-neutral-5)}.pix-textarea textarea:focus{border-color:var(--pix-color-primary);box-shadow:inset 0 0 0 .6px var(--pix-color-primary);outline:none}.pix-textarea textarea.pix-textarea--error{border-color:var(--pix-color-error-70);box-shadow:inset 0 0 0 .6px var(--pix-color-error-70)}.pix-textarea p{color:var(--pix-color-neutral-45);margin-top:6px;font-size:12px;display:flex;flex-direction:row-reverse;margin-bottom:0}.pix-textarea__label{display:block;font-size:.875rem;line-height:1.375rem;color:var(--pix-color-neutral-90);margin-bottom:var(--pix-color-spacing-xxs);font-weight:var(--pix-font-medium)}.pix-textarea__error-message{font-size:.75rem;color:var(--pix-color-error-70);margin-top:var(--pix-color-spacing-xxs)}.pix-tooltip{position:relative;display:flex;justify-content:center;align-items:center}.pix-tooltip__trigger-element{display:block;width:100%}.pix-tooltip__content{display:none;opacity:0;pointer-events:none;background-color:var(--pix-color-neutral-100);position:absolute;z-index:100;padding:8px 16px;left:auto;color:var(--pix-color-neutral-0);font-size:.875rem;border-radius:6px;line-height:1.4rem;transition:opacity .3s}.pix-tooltip__content--visible{display:block;opacity:1}.pix-tooltip__content--inline{white-space:nowrap}.pix-tooltip__content:before{content:"";position:absolute;border-width:5px;border-style:solid}.pix-tooltip__content--wide{width:382px}.pix-tooltip__content--light{font-weight:var(--pix-font-medium);background-color:var(--pix-color-neutral-0);color:var(--pix-color-neutral-60);box-shadow:0 6px 24px 0 rgba(var(--pix-color-neutral-70),.14)}.pix-tooltip__content--light:before{border-width:0;height:8px;width:8px;background-color:var(--pix-color-neutral-0)}.pix-tooltip__content--right{left:calc(100% + 10px)}.pix-tooltip__content--right:before{top:calc(50% - 5px);left:-10px;border-color:transparent var(--pix-color-neutral-100) transparent transparent}.pix-tooltip__content--right.pix-tooltip__content--light:before{left:-5px;transform:rotate(315deg);border-color:var(--pix-color-neutral-40) transparent transparent var(--pix-color-neutral-40)}.pix-tooltip__content--top{bottom:calc(100% + 10px);left:50%;transform:translate(-50%)}.pix-tooltip__content--top:before{top:100%;left:calc(50% - 5px);border-color:var(--pix-color-neutral-100) transparent transparent transparent}.pix-tooltip__content--top.pix-tooltip__content--light:before{top:calc(100% - 5px);transform:rotate(225deg);border-color:var(--pix-color-neutral-40) transparent transparent var(--pix-color-neutral-40)}.pix-tooltip__content--top-left{bottom:calc(100% + 10px);transform:translate(calc(-50% + 22px))}.pix-tooltip__content--top-left:before{top:100%;left:calc(100% - 27px);border-color:var(--pix-color-neutral-100) transparent transparent transparent}.pix-tooltip__content--top-left.pix-tooltip__content--light:before{top:calc(100% - 5px);left:calc(100% - 26px);transform:rotate(225deg);border-color:var(--pix-color-neutral-40) transparent transparent var(--pix-color-neutral-40)}.pix-tooltip__content--top-right{bottom:calc(100% + 10px);transform:translate(calc(50% - 22px))}.pix-tooltip__content--top-right:before{top:100%;border-color:var(--pix-color-neutral-100) transparent transparent transparent}.pix-tooltip__content--top-right.pix-tooltip__content--light:before{top:calc(100% - 5px);transform:rotate(225deg);border-color:var(--pix-color-neutral-40) transparent transparent var(--pix-color-neutral-40)}.pix-tooltip__content--bottom{top:calc(100% + 10px);left:50%;transform:translate(-50%)}.pix-tooltip__content--bottom:before{top:-10px;left:calc(50% - 5px);border-color:transparent transparent var(--pix-color-neutral-100) transparent}.pix-tooltip__content--bottom.pix-tooltip__content--light:before{top:-5px;transform:rotate(45deg);border-color:var(--pix-color-neutral-40) transparent transparent var(--pix-color-neutral-40)}.pix-tooltip__content--bottom-left{top:calc(100% + 10px);transform:translate(calc(-50% + 22px))}.pix-tooltip__content--bottom-left:before{top:-10px;left:calc(100% - 27px);border-color:transparent transparent var(--pix-color-neutral-100) transparent}.pix-tooltip__content--bottom-left.pix-tooltip__content--light:before{top:-5px;left:calc(100% - 26px);transform:rotate(45deg);border-color:var(--pix-color-neutral-40) transparent transparent var(--pix-color-neutral-40)}.pix-tooltip__content--bottom-right{top:calc(100% + 10px);transform:translate(calc(50% - 22px))}.pix-tooltip__content--bottom-right:before{top:-10px;border-color:transparent transparent var(--pix-color-neutral-100) transparent}.pix-tooltip__content--bottom-right.pix-tooltip__content--light:before{top:-5px;transform:rotate(45deg);border-color:var(--pix-color-neutral-40) transparent transparent var(--pix-color-neutral-40)}.pix-tooltip__content--left{right:calc(100% + 10px)}.pix-tooltip__content--left:before{top:calc(50% - 5px);right:-10px;border-color:transparent transparent transparent var(--pix-color-neutral-100)}.pix-tooltip__content--left.pix-tooltip__content--light:before{right:-5px;transform:rotate(135deg);border-color:var(--pix-color-neutral-40) transparent transparent var(--pix-color-neutral-40)}.pix-input{display:flex;flex-direction:column;position:relative}.pix-input__label{display:block;font-size:.875rem;line-height:1.375rem;color:var(--pix-color-neutral-90);margin-bottom:var(--pix-color-spacing-xxs);font-weight:var(--pix-font-medium)}.pix-input__information{display:block;font-size:.875rem;line-height:1.375rem;color:var(--pix-color-neutral-90);margin-bottom:var(--pix-color-spacing-xxs);font-weight:var(--pix-font-medium);font-size:.813rem;line-height:1rem;color:var(--pix-color-neutral-60);font-weight:var(--pix-font-normal)}.pix-input__container{position:relative}.pix-input svg{position:absolute;color:var(--pix-color-neutral-0);border-radius:50%;font-size:.6rem;padding:2px;bottom:11px;right:12px;width:10px;height:10px}.pix-input svg.pix-input__error-icon{background:var(--pix-color-error-70)}.pix-input svg.pix-input__success-icon{background:var(--pix-color-success-60)}.pix-input__error-message{font-size:.75rem;color:var(--pix-color-error-70);margin-top:var(--pix-color-spacing-xxs)}.pix-input__input--default{width:100%;height:36px;border:1px solid var(--pix-color-neutral-40);font-size:.875rem;font-weight:var(--pix-font-normal);color:var(--pix-color-neutral-90);border-radius:var(--pix-color-spacing-xxs);padding:0 var(--pix-color-spacing-s) 0 var(--pix-color-spacing-s)}.pix-input__input--default:hover{box-shadow:inset 0 0 0 .6px var(--pix-color-neutral-70);background-color:var(--pix-color-neutral-5)}.pix-input__input--default:focus{border-color:var(--pix-color-primary);box-shadow:inset 0 0 0 .6px var(--pix-color-primary);outline:none}.pix-input__input--default::placeholder{color:var(--pix-color-neutral-30)}.pix-input__input--error{padding-right:var(--pix-spacing-l);border-color:var(--pix-color-error-70);box-shadow:inset 0 0 0 .6px var(--pix-color-error-70)}.pix-input__input--success{padding-right:var(--pix-spacing-l);border-color:var(--pix-color-success-60);box-shadow:inset 0 0 0 .6px var(--pix-color-success-60)}.pix-input-password{display:flex;flex-direction:column;position:relative}.pix-input-password__container{position:relative;display:flex;align-items:center;border:1px solid var(--pix-color-neutral-40);border-radius:var(--pix-spacing-xxs);padding:1px 0 1px 1px}.pix-input-password__container:hover{box-shadow:inset 0 0 0 .6px var(--pix-color-neutral-70);background-color:var(--pix-color-neutral-5)}.pix-input-password__container:focus-within{border-color:var(--pix-color-primary);box-shadow:inset 0 0 0 .6px var(--pix-color-primary)}.pix-input-password__container input{font-size:.875rem;font-weight:var(--pix-font-normal);color:var(--pix-color-neutral-90);border-radius:var(--pix-color-spacing-xxs);padding:0 var(--pix-color-spacing-s) 0 var(--pix-color-spacing-s);height:34px;border:none;outline:none;flex-grow:1}.pix-input-password__with-prefix input{padding-left:0}.pix-input-password__prefix{padding:0 4px 0 8px}.pix-input-password__button{margin-right:var(--pix-spacing-xxs)}.pix-input-password__button:hover,.pix-input-password__button:active,.pix-input-password__button:focus{background-color:transparent;color:var(--pix-color-neutral-90)}.pix-input-password__error-container{padding-right:var(--pix-spacing-m);border-color:var(--pix-color-error-70);box-shadow:inset 0 0 0 .6px var(--pix-color-error-70)}.pix-input-password__success-container{padding-right:var(--pix-spacing-m);border-color:var(--pix-color-success-60);box-shadow:inset 0 0 0 .6px var(--pix-color-success-60)}.pix-input-password__icon{position:absolute;color:var(--pix-color-neutral-0);border-radius:50%;font-size:.6rem;padding:2px;right:12px;width:10px;height:10px}.pix-input-password__error-icon{background:var(--pix-color-error-70)}.pix-input-password__success-icon{background:var(--pix-color-success-60)}.pix-input-password__error-message{font-size:.75rem;color:var(--pix-color-error-70);margin-top:var(--pix-color-spacing-xxs)}.pix-radio-button{display:flex;align-items:center}.pix-radio-button+.pix-radio-button{margin-top:var(--pix-spacing-s)}.pix-radio-button__label{padding-left:12px;color:var(--pix-color-neutral-90);font-size:1rem;line-height:1.5;cursor:pointer}.pix-radio-button__input{position:relative;width:1rem;height:1rem;flex-shrink:0;background-color:var(--pix-color-neutral-0);border:1.5px solid var(--pix-color-neutral-70);border-radius:50%;appearance:none;cursor:pointer}.pix-radio-button__input:before{content:"";position:absolute;z-index:-1;top:50%;left:50%;width:1rem;height:1rem;transform:translate(-50%,-50%) scale(1);border-radius:50%;background-color:var(--pix-color-neutral-15);visibility:hidden;opacity:0;transition:all .3s ease}.pix-radio-button__input:hover:before,.pix-radio-button__input:focus-visible:before,.pix-radio-button__input:active:before{visibility:visible;opacity:1;transform:translate(-50%,-50%) scale(1.75)}.pix-radio-button__input:active:before{background-color:var(--pix-color-neutral-22)}.pix-radio-button__input:checked{border-color:var(--pix-color-primary)}.pix-radio-button__input:checked:after{content:"";position:absolute;top:50%;left:50%;height:62.5%;width:62.5%;transform:translate(-50%,-50%);background-color:var(--pix-color-primary);border-radius:50%}.pix-radio-button__input:disabled{background-color:var(--pix-color-neutral-10);border-color:var(--pix-color-neutral-30);cursor:not-allowed}.pix-radio-button__input:disabled+.pix-radio-button__label{cursor:not-allowed}.pix-radio-button__input:disabled:before{display:none}.pix-radio-button__input:disabled:checked:after{background-color:var(--pix-color-neutral-30)}.pix-modal__overlay{position:fixed;z-index:1000;top:0;bottom:0;left:0;right:0;overflow-y:auto;text-align:center;padding:var(--pix-spacing-xs) 0;background-color:#344563b3;transition:all .3s ease-in-out}.pix-modal__overlay:after{content:"";display:inline-block;vertical-align:middle;height:100%;width:0}.pix-modal__overlay--hidden{visibility:hidden;opacity:0}.pix-modal{display:inline-block;vertical-align:middle;width:512px;max-width:calc(100% - var(--pix-spacing-s));text-align:initial;background-color:var(--pix-color-neutral-10);box-shadow:1px 1px 5px #0000001a;border-radius:4px;overflow:hidden}.pix-modal__header{background:var(--pix-color-neutral-0);border-bottom:1px solid var(--pix-color-neutral-20);padding:24px;display:flex;align-items:flex-start;justify-content:space-between}.pix-modal__close-button{flex-shrink:0;margin-top:-4px}@media (min-width: 769px){.pix-modal__close-button{height:40px;width:40px}}.pix-modal__title{margin-bottom:0;color:var(--pix-color-neutral-90);padding-right:40px}@media (min-width: 769px){.pix-modal__title{padding-right:48px}}.pix-modal__content{padding:24px;color:var(--pix-color-neutral-90)}.pix-modal__content p:last-child{margin-bottom:0}.pix-modal__footer{padding:0 24px 8px}.pix-sidebar__overlay{position:fixed;z-index:1000;top:0;bottom:0;left:0;right:0;overflow-y:scroll;background-color:#344563b3;transition:all .3s ease-in-out}.pix-sidebar__overlay--hidden{visibility:hidden;opacity:0}.pix-sidebar{display:flex;flex-direction:column;height:100%;max-width:320px;box-shadow:1px 1px 5px #0000001a;background:var(--pix-color-neutral-0);transform:translate(0);transition:transform .3s ease-in-out}.pix-sidebar--hidden{transform:translate(-100%)}.pix-sidebar__header{border-bottom:1px solid var(--pix-color-neutral-20);padding:16px;display:flex;align-items:center;justify-content:space-between}.pix-sidebar__close-button{flex-shrink:0}@media (min-width: 769px){.pix-sidebar__close-button{height:40px;width:40px}}.pix-sidebar__content{flex-grow:1;overflow:auto}.pix-sidebar__title{margin-bottom:0;color:var(--pix-color-neutral-90);padding-right:40px}@media (min-width: 769px){.pix-sidebar__title{padding-right:48px}}.pix-sidebar__footer{padding:16px;border-top:1px solid var(--pix-color-neutral-20)}.pix-input-code{display:flex}.pix-input-code input[type=number]{-moz-appearance:textfield}.pix-input-code input[type=number]::-webkit-inner-spin-button,.pix-input-code input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none}.pix-input-code fieldset legend,.pix-input-code #pix-input-code__details-of-use{display:none}.pix-input-code input:nth-of-type(3n + 4){margin-left:12px}.pix-input-code input.pix-input-code__input{display:inline-block;height:44px;width:38px;padding:10px 12px 8px;background-color:var(--pix-color-neutral-10);border:1.4px solid var(--pix-color-neutral-50);font-size:1.25rem;color:var(--pix-color-neutral-90);border-radius:4px;text-align:center;outline:none}.pix-input-code input.pix-input-code__input:hover{box-shadow:inset 0 0 0 .6px var(--pix-color-neutral-70);background-color:var(--pix-color-neutral-5);border-color:var(--pix-color-neutral-70)}.pix-input-code input.pix-input-code__input:not(:first-child){margin-left:4px}.pix-input-code input.pix-input-code__input::placeholder{color:var(--pix-color-neutral-50)}.pix-input-code input.pix-input-code__input:active,.pix-input-code input.pix-input-code__input:focus{border-color:var(--pix-color-primary);background-color:var(--pix-color-neutral-0)}.pix-input-code input.pix-input-code__input:active::placeholder,.pix-input-code input.pix-input-code__input:focus::placeholder{opacity:0}.pix-input-code input.pix-input-code__input.filled{background-color:var(--pix-color-neutral-0)}.pix-selectable-tag{display:inline-block;text-align:center;position:relative;padding:3px calc(8px + .5315rem);letter-spacing:.009rem;border-radius:.95rem;border:var(--pix-color-neutral-30) solid 1px;color:var(--pix-color-neutral-60);background-color:var(--pix-color-neutral-0);cursor:pointer;font-weight:var(--pix-font-medium)}.pix-selectable-tag input{position:absolute;opacity:0;cursor:pointer;width:100%;height:100%;left:0;top:0}.pix-selectable-tag label{cursor:pointer}.pix-selectable-tag:hover{background-color:var(--pix-color-neutral-22);border:var(--pix-color-neutral-25) solid 1px;color:var(--pix-color-neutral-70)}.pix-selectable-tag--checked{border:var(--pix-color-neutral-22) solid 1px;background-color:var(--pix-color-neutral-20);color:var(--pix-color-neutral-70);padding:3px 8px}.pix-selectable-tag--checked input[type=checkbox]:checked+label:before{position:absolute;top:10px;left:10px;width:.625rem;height:.3125rem;border:2px solid;border-color:var(--pix-color-neutral-70);border-top:none;border-right:none;transform:rotate(-45deg);content:""}.pix-selectable-tag--checked:hover{background-color:var(--pix-color-neutral-22);border:var(--pix-color-neutral-25) solid 1px;color:var(--pix-color-neutral-70)}.pix-selectable-tag--checked:hover input[type=checkbox]:checked+label:before{position:absolute;top:10px;left:10px;width:.625rem;height:.3125rem;border:2px solid;border-color:var(--pix-color-neutral-70);border-top:none;border-right:none;transform:rotate(-45deg);content:""}.pix-selectable-tag--checked label{padding-left:1.063rem}.pix-selectable-tag:focus-within{background-color:var(--pix-color-neutral-60);color:var(--pix-color-neutral-0);box-shadow:0 0 0 1px var(--pix-color-neutral-60);border-color:var(--pix-color-neutral-0);outline:none}.pix-selectable-tag:focus-within input[type=checkbox]:checked+label:before{position:absolute;top:10px;left:10px;width:.625rem;height:.3125rem;border:2px solid;border-color:var(--pix-color-neutral-0);border-top:none;border-right:none;transform:rotate(-45deg);content:""}.pix-selectable-tag:focus-within:hover{color:var(--pix-color-neutral-70);background-color:var(--pix-color-neutral-22);border:var(--pix-color-neutral-25) solid 1px}.pix-selectable-tag:focus-within:hover input[type=checkbox]:checked+label:before{position:absolute;top:10px;left:10px;width:.625rem;height:.3125rem;border:2px solid;border-color:var(--pix-color-neutral-70);border-top:none;border-right:none;transform:rotate(-45deg);content:""}.pix-dropdown{width:100%;position:relative}.pix-dropdown button{margin:0;text-align:left;cursor:pointer}.pix-dropdown__label{display:block;font-size:.875rem;line-height:1.375rem;color:var(--pix-color-neutral-90);margin-bottom:var(--pix-color-spacing-xxs);font-weight:var(--pix-font-medium)}.pix-dropdown__controller{width:100%;position:relative}.pix-dropdown__controller--placeholder{width:100%;min-width:250px;min-height:34px;border:1px solid var(--pix-color-neutral-40);border-radius:var(--pix-spacing-xxs);padding:0;background:var(--pix-color-neutral-0)}.pix-dropdown__controller--placeholder:hover{box-shadow:inset 0 0 0 .6px var(--pix-color-neutral-70);background-color:var(--pix-color-neutral-5)}.pix-dropdown__controller--placeholder:focus{border-color:var(--pix-color-primary);box-shadow:inset 0 0 0 .6px var(--pix-color-primary);outline:none}.pix-dropdown__controller--placeholder.expanded{border-bottom-left-radius:0;border-bottom-right-radius:0}.pix-dropdown__controller--placeholder-text{color:var(--pix-color-neutral-90);margin:0;font-size:.875rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:8px 68px 8px 16px}.pix-dropdown__controller--placeholder-text.default{color:var(--pix-color-neutral-60);padding-right:36px}.pix-dropdown__controller--clear{background:transparent;font-size:1rem;color:var(--pix-color-neutral-50);position:absolute;padding:8px 8px 6px;border:none;border-right:2px solid var(--pix-color-neutral-40);right:38px;top:1px;width:fit-content}.pix-dropdown__controller--clear:hover{color:var(--pix-color-neutral-70)}.pix-dropdown__controller--chevron{background:transparent;border:none;padding:0;position:absolute;top:9px;right:12px;color:var(--pix-color-neutral-50);cursor:pointer}.pix-dropdown__controller--chevron:hover{color:var(--pix-color-neutral-70)}.pix-dropdown__menu{background:var(--pix-color-neutral-0);position:absolute;top:100%;width:100%;max-height:0;transition:max-height ease-in .5s;overflow:hidden;overflow-y:auto;z-index:1}.pix-dropdown__menu.expanded{max-height:300px;border:1px solid var(--pix-color-neutral-40);border-top:none;border-radius:0 0 var(--pix-spacing-xxs) var(--pix-spacing-xxs)}.pix-dropdown__menu--search{display:flex;position:relative}.pix-dropdown__menu--search-icon{color:var(--pix-color-neutral-30);margin:4px;position:absolute;left:16px;top:12px}.pix-dropdown__menu--search-input{border:none;border-bottom:1px solid var(--pix-color-neutral-40);font-size:.875rem;flex-grow:1;margin:12px 12px 8px;padding:4px 4px 4px 32px;outline:none}.pix-dropdown__menu--search-input:hover{box-shadow:inset 0 -.7px 0 0 var(--pix-color-neutral-40)}.pix-dropdown__menu--search-input:focus{box-shadow:inset 0 -.7px 0 0 var(--pix-color-primary);border-color:var(--pix-color-primary)}.pix-dropdown__menu--search-input-label{height:0;width:0;overflow:hidden}.pix-dropdown__menu--option{padding:8px 12px;font-size:.875rem;cursor:pointer}.pix-dropdown__menu--option.selected{color:var(--pix-color-neutral-70)}.pix-dropdown__menu--option:focus,.pix-dropdown__menu--option:hover{outline:none;background:var(--pix-color-neutral-15)}.pix-pagination,.pix-pagination-condensed{display:flex;justify-content:center;color:var(--pix-color-neutral-60);font-size:.875rem}.pix-pagination__size,.pix-pagination-condensed__size{display:none;align-items:center;padding:0}.pix-pagination__size .pagination-size__label,.pix-pagination-condensed__size .pagination-size__label{margin-right:16px}.pix-pagination__size select.pagination__choice,.pix-pagination-condensed__size select.pagination__choice{height:36px;font-size:.8rem;padding-left:8px;padding-right:24px}.pix-pagination__navigation,.pix-pagination-condensed__navigation{display:flex;align-items:center;padding:0;gap:12px;flex-direction:column}.pix-pagination-navigation__action{display:flex;align-items:center}.pix-pagination-navigation__action-button{margin:0 8px}@media (min-width: 769px){.pix-pagination{justify-content:space-between}.pix-pagination>.pix-pagination__size{display:flex}.pix-pagination>.pix-pagination__navigation{gap:initial;flex-direction:initial}}.pix-checkbox{position:relative;z-index:0;align-items:center;display:flex;color:var(--pix-color-neutral-70)}.pix-checkbox+.pix-checkbox{margin-top:var(--pix-spacing-s)}.pix-checkbox__label{padding-left:12px;color:var(--pix-color-neutral-90);font-size:1rem;line-height:1.5;cursor:pointer}.pix-checkbox__label--small{font-size:.875rem}.pix-checkbox__label--large{font-size:1.125rem}.pix-checkbox__input{position:relative;width:1rem;height:1rem;flex-shrink:0;background-color:var(--pix-color-neutral-0);border:1.5px solid var(--pix-color-neutral-70);border-radius:2px;appearance:none;cursor:pointer}.pix-checkbox__input:before{content:"";position:absolute;z-index:-1;top:50%;left:50%;width:1rem;height:1rem;transform:translate(-50%,-50%) scale(1);border-radius:50%;background-color:var(--pix-color-neutral-15);visibility:hidden;opacity:0;transition:all .3s ease}.pix-checkbox__input:hover,.pix-checkbox__input:focus-visible,.pix-checkbox__input:active{border-color:var(--pix-color-neutral-90)}.pix-checkbox__input:hover:before,.pix-checkbox__input:focus-visible:before,.pix-checkbox__input:active:before{visibility:visible;opacity:1;transform:translate(-50%,-50%) scale(1.75)}.pix-checkbox__input:active:before{background-color:var(--pix-color-neutral-22)}.pix-checkbox__input:checked{background:var(--pix-color-primary);border-color:var(--pix-color-primary)}.pix-checkbox__input:checked:hover,.pix-checkbox__input:checked:focus-visible,.pix-checkbox__input:checked:active{background:var(--pix-color-primary-60);border-color:var(--pix-color-primary-60)}.pix-checkbox__input:checked:after{content:"";position:absolute;inset:10%;background-repeat:no-repeat;background-position:center;background-size:contain;background-image:url("data:image/svg+xml,%3Csvg width='13' height='10' viewBox='0 0 13 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.5 3L0 4.5L5 9.5L13 1.5L11.5 0L5 6.5L1.5 3Z' fill='white'/%3E%3C/svg%3E%0A")}.pix-checkbox__input--indeterminate:checked{background:var(--pix-color-neutral-70);border-color:var(--pix-color-neutral-70)}.pix-checkbox__input--indeterminate:checked:hover,.pix-checkbox__input--indeterminate:checked:focus-visible,.pix-checkbox__input--indeterminate:checked:active{background:var(--pix-color-neutral-90);border-color:var(--pix-color-neutral-90)}.pix-checkbox__input--indeterminate:checked:after{inset:15%;background-image:url("data:image/svg+xml,%3Csvg width='10' height='2' viewBox='0 0 10 2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='10' height='2' fill='white'/%3E%3C/svg%3E%0A")}.pix-checkbox__input:disabled,.pix-checkbox__input--indeterminate:disabled{background:var(--pix-color-neutral-10);border-color:var(--pix-color-neutral-30);cursor:not-allowed}.pix-checkbox__input:disabled+.pix-checkbox__label,.pix-checkbox__input--indeterminate:disabled+.pix-checkbox__label{cursor:not-allowed}.pix-checkbox__input:disabled:checked,.pix-checkbox__input--indeterminate:disabled:checked{background:var(--pix-color-neutral-30);border-color:var(--pix-color-neutral-30)}.pix-checkbox__input:disabled:before,.pix-checkbox__input--indeterminate:disabled:before{display:none}.pix-toggle{display:flex;flex-direction:column}.pix-toggle__label{color:var(--pix-color-neutral-90)}.pix-toggle__button{width:fit-content;background-color:transparent;border:1px solid var(--pix-color-neutral-30);border-radius:4px;padding:var(--pix-spacing-xxs);margin-top:var(--pix-spacing-xxs)}.pix-toggle__on,.pix-toggle__off{display:inline-block;border-radius:4px;padding:var(--pix-spacing-xs);color:var(--pix-color-neutral-70)}.pix-toggle__off{background-color:var(--pix-color-neutral-45);color:var(--pix-color-neutral-0)}.pix-toggle--inline{flex-direction:row;align-items:center;gap:var(--pix-spacing-xxs)}.pix-toggle--inline .pix-toggle__button,.pix-toggle--screen-reader-only .pix-toggle__button{margin-top:0}.pix-toggle--pressed .pix-toggle__on{background-color:var(--pix-color-neutral-45);color:var(--pix-color-neutral-0)}.pix-toggle--pressed .pix-toggle__off{background-color:transparent;color:inherit}.indicator-card{display:flex;width:100%;background-color:var(--pix-color-neutral-0);border-radius:8px;min-height:112px;box-shadow:0 4px 8px rgba(var(--pix-color-neutral-110),.05);padding:0}.indicator-card__icon{display:flex;justify-content:center;align-items:center;border-radius:8px 0 0 8px;min-width:96px;font-size:2.5rem}.indicator-card__icon--grey{color:var(--pix-color-neutral-60);background-color:var(--pix-color-neutral-5)}.indicator-card__icon--blue{color:var(--pix-color-primary-60);background-color:var(--pix-color-primary-5)}.indicator-card__icon--green{color:var(--pix-color-success-60);background-color:var(--pix-color-success-5)}.indicator-card__icon--purple{color:var(--pix-color-tertiary-60);background-color:var(--pix-color-tertiary-5)}.indicator-card__content{display:flex;flex-direction:column;justify-content:center;color:var(--pix-color-neutral-60);padding:var(--pix-spacing-s) var(--pix-spacing-m)}.indicator-card__title{display:flex;align-items:center;font-weight:var(--pix-font-medium);font-size:1rem;line-height:1.375rem;margin-bottom:var(--pix-spacing-xxs)}.indicator-card__value{margin-bottom:var(--pix-spacing-xxs)}.indicator-card__sub{font-weight:var(--pix-font-normal);display:flex;gap:10px}.indicator-card__tooltip{font-weight:var(--pix-font-normal)}.indicator-card__tooltip-icon{color:var(--pix-color-neutral-30);margin:0 var(--pix-spacing-xs)}.body__trap-focus{overflow:hidden}.pix-search-input{display:flex;flex-direction:column;position:relative}.pix-search-input__label{font-size:.875rem;color:var(--pix-color-neutral-70);margin-bottom:4px}.pix-search-input__input-container{position:relative}.pix-search-input__input-container svg{position:absolute;bottom:calc(50% - 9px);left:6px;color:var(--pix-color-neutral-60);font-size:.6rem;padding-left:2px;width:18px;height:18px}.pix-search-input__input{font-size:.875rem;font-weight:var(--pix-font-normal);color:var(--pix-color-neutral-90);border-radius:var(--pix-color-spacing-xxs);padding:0 var(--pix-color-spacing-s) 0 var(--pix-color-spacing-s);width:100%;height:36px;border:1px solid var(--pix-color-neutral-40);padding-left:var(--pix-spacing-xl)}.pix-search-input__input:hover{box-shadow:inset 0 0 0 .6px var(--pix-color-neutral-70);background-color:var(--pix-color-neutral-5)}.pix-search-input__input:focus{border-color:var(--pix-color-primary);box-shadow:inset 0 0 0 .6px var(--pix-color-primary);outline:none}.pix-search-input__input::placeholder{color:var(--pix-color-neutral-30)}.pix-filterable-and-searchable-select{display:flex;width:fit-content;border:1px var(--pix-color-neutral-45) solid;border-radius:4px}.pix-filterable-and-searchable-select--error{border-color:var(--pix-color-error-70);box-shadow:inset 0 0 0 .6px var(--pix-color-error-70)}.pix-filterable-and-searchable-select__label{display:block;font-size:.875rem;line-height:1.375rem;color:var(--pix-color-neutral-90);margin-bottom:var(--pix-color-spacing-xxs);font-weight:var(--pix-font-medium)}.pix-filterable-and-searchable-select__sub-label{display:block;font-size:.875rem;line-height:1.375rem;color:var(--pix-color-neutral-90);margin-bottom:var(--pix-color-spacing-xxs);font-weight:var(--pix-font-medium);font-size:.813rem;line-height:1rem;color:var(--pix-color-neutral-60);font-weight:var(--pix-font-normal)}.pix-filterable-and-searchable-select__pix-multi-select,.pix-filterable-and-searchable-select__pix-select{border:none}.pix-filterable-and-searchable-select__pix-multi-select:hover,.pix-filterable-and-searchable-select__pix-select:hover{border:none;box-shadow:none}.pix-filterable-and-searchable-select__error-message{font-size:.75rem;color:var(--pix-color-error-70);margin-top:var(--pix-color-spacing-xxs)}.pix-filterable-and-searchable-select .pix-multi-select{margin-right:2px}.pix-filterable-and-searchable-select .pix-multi-select [role=menu]{width:fit-content}.pix-filterable-and-searchable-select__pix-multi-select{border-radius:4px 0 0 4px;position:relative}.pix-filterable-and-searchable-select__pix-multi-select:after{height:22px;width:2px;content:"";background-color:var(--pix-color-neutral-22);position:absolute;right:-2px;border-radius:50px}.pix-filterable-and-searchable-select__pix-select{border-radius:0 4px 4px 0}
`;
class Z extends $ {
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
    const o = ["pix-button", `pix-button--shape-${this.shape}`, `pix-button--size-${this.size}`, `pix-button--background-${this.backgroundColor}`];
    return this.isBorderVisible && o.push("pix-button--border"), this.getIsDisabled() && o.push("pix-button--disabled"), o.join(" ");
  }
  async _triggerAction(o) {
    if (!(this.isDisabled || this.type === "submit" && !this.triggerAction)) {
      if (!this.triggerAction)
        throw new Error("@triggerAction params is required for PixButton !");
      try {
        this.isTriggering = !0, console.log("when triggered !", this.triggerAction), await this.triggerAction(o);
      } finally {
        console.log("triggering done ! "), this.isTriggering = !1;
      }
    }
  }
  // Render the UI as a function of component state
  render() {
    let o;
    return this.isLoadingOrTriggering ? o = B`
        <div class="loader loader--blue">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
        </div>
        <span class="loader__not-visible-text"><slot name="text"/></span>
      ` : o = B`<slot name="text"/>`, B`<button
        @click=${this._triggerAction}
        type=${this.type}
        class=${this.updateClassNames()}
        ?disabled=${this.getIsDisabled()}
        ?aria-disabled=${this.getIsDisabled()}
      >
        ${o} 
        <slot name="icon"></slot>
    </button>`;
  }
}
O(Z, "properties", {
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
O(Z, "styles", [
  lo(Co)
  /* unsafeCSS(buttonBaseStyle),
   unsafeCSS(buttonStyle),*/
]);
customElements.define("pix-button", Z);
export {
  Z as PixButton
};
