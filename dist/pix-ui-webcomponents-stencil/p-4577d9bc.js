const t="pix-ui-webcomponents-stencil";let n;let e;let s=false;const o=(t,n="")=>{{return()=>{}}};const c=(t,n)=>{{return()=>{}}};const l="{visibility:hidden}.hydrated{visibility:inherit}";const i=t=>t!=null;const f=t=>{t=typeof t;return t==="object"||t==="function"};function r(t){var n,e,s;return(s=(e=(n=t.head)===null||n===void 0?void 0:n.querySelector('meta[name="csp-nonce"]'))===null||e===void 0?void 0:e.getAttribute("content"))!==null&&s!==void 0?s:undefined}const u=(t,n,...e)=>{let s=null;let o=false;let c=false;const l=[];const i=n=>{for(let e=0;e<n.length;e++){s=n[e];if(Array.isArray(s)){i(s)}else if(s!=null&&typeof s!=="boolean"){if(o=typeof t!=="function"&&!f(s)){s=String(s)}if(o&&c){l[l.length-1].t+=s}else{l.push(o?a(null,s):s)}c=o}}};i(e);const r=a(t,null);r.o=n;if(l.length>0){r.l=l}return r};const a=(t,n)=>{const e={i:0,u:t,t:n,p:null,l:null};return e};const d={};const p=t=>t&&t.u===d;const h=(t,n)=>{if(t!=null&&!f(t)){if(n&1){return String(t)}return t}return t};const $=(t,n,e)=>{const s=et.ce(n,e);t.dispatchEvent(s);return s};const m=new WeakMap;const y=(t,n,e)=>{let s=Z.get(t);if(ot&&e){s=s||new CSSStyleSheet;if(typeof s==="string"){s=n}else{s.replaceSync(n)}}else{s=n}Z.set(t,s)};const w=(t,n,e)=>{var s;const o=S(n);const c=Z.get(o);t=t.nodeType===11?t:nt;if(c){if(typeof c==="string"){t=t.head||t;let n=m.get(t);let e;if(!n){m.set(t,n=new Set)}if(!n.has(o)){{e=nt.createElement("style");e.innerHTML=c;const n=(s=et.h)!==null&&s!==void 0?s:r(nt);if(n!=null){e.setAttribute("nonce",n)}t.insertBefore(e,t.querySelector("link"))}if(n){n.add(o)}}}else if(!t.adoptedStyleSheets.includes(c)){t.adoptedStyleSheets=[...t.adoptedStyleSheets,c]}}return o};const b=t=>{const n=t.$;const e=t.m;const s=n.i;const c=o("attachStyles",n.S);const l=w(e.shadowRoot?e.shadowRoot:e.getRootNode(),n);if(s&10){e["s-sc"]=l;e.classList.add(l+"-h")}c()};const S=(t,n)=>"sc-"+t.S;const v=(t,e,s,o)=>{const c=e.l[s];let l=0;let f;let r;if(c.t!==null){f=c.p=nt.createTextNode(c.t)}else{f=c.p=nt.createElement(c.u);if(i(n)&&f["s-si"]!==n){f.classList.add(f["s-si"]=n)}if(c.l){for(l=0;l<c.l.length;++l){r=v(t,c,l);if(r){f.appendChild(r)}}}}return f};const g=(t,n,s,o,c,l)=>{let i=t;let f;if(i.shadowRoot&&i.tagName===e){i=i.shadowRoot}for(;c<=l;++c){if(o[c]){f=v(null,s,c);if(f){o[c].p=f;i.insertBefore(f,n)}}}};const M=(t,n,e)=>{for(let s=n;s<=e;++s){const n=t[s];if(n){const t=n.p;if(t){t.remove()}}}};const j=(t,n,e,s)=>{let o=0;let c=0;let l=n.length-1;let i=n[0];let f=n[l];let r=s.length-1;let u=s[0];let a=s[r];let d;while(o<=l&&c<=r){if(i==null){i=n[++o]}else if(f==null){f=n[--l]}else if(u==null){u=s[++c]}else if(a==null){a=s[--r]}else if(k(i,u)){C(i,u);i=n[++o];u=s[++c]}else if(k(f,a)){C(f,a);f=n[--l];a=s[--r]}else if(k(i,a)){C(i,a);t.insertBefore(i.p,f.p.nextSibling);i=n[++o];a=s[--r]}else if(k(f,u)){C(f,u);t.insertBefore(f.p,i.p);f=n[--l];u=s[++c]}else{{d=v(n&&n[c],e,c);u=s[++c]}if(d){{i.p.parentNode.insertBefore(d,i.p)}}}}if(o>l){g(t,s[r+1]==null?null:s[r+1].p,e,s,c,r)}else if(c>r){M(n,o,l)}};const k=(t,n)=>{if(t.u===n.u){return true}return false};const C=(t,n)=>{const e=n.p=t.p;const s=t.l;const o=n.l;const c=n.t;if(c===null){if(s!==null&&o!==null){j(e,s,n,o)}else if(o!==null){if(t.t!==null){e.textContent=""}g(e,null,n,o,0,o.length-1)}else if(s!==null){M(s,0,s.length-1)}}else if(t.t!==c){e.data=c}};const O=(t,s)=>{const o=t.m;const c=t.v||a(null,null);const l=p(s)?s:u(null,null,s);e=o.tagName;l.u=null;l.i|=4;t.v=l;l.p=c.p=o.shadowRoot||o;{n=o["s-sc"]}C(c,l)};const P=(t,n)=>{if(n&&!t.g&&n["s-p"]){n["s-p"].push(new Promise((n=>t.g=n)))}};const x=(t,n)=>{{t.i|=16}if(t.i&4){t.i|=512;return}P(t,t.M);const e=()=>U(t,n);return at(e)};const U=(t,n)=>{const e=o("scheduleUpdate",t.$.S);const s=t.j;let c;e();return E(c,(()=>T(t,s,n)))};const E=(t,n)=>N(t)?t.then(n):n();const N=t=>t instanceof Promise||t&&t.then&&typeof t.then==="function";const T=async(t,n,e)=>{var s;const c=t.m;const l=o("update",t.$.S);const i=c["s-rc"];if(e){b(t)}const f=o("render",t.$.S);{A(t,n)}if(i){i.map((t=>t()));c["s-rc"]=undefined}f();l();{const n=(s=c["s-p"])!==null&&s!==void 0?s:[];const e=()=>L(t);if(n.length===0){e()}else{Promise.all(n).then(e);t.i|=4;n.length=0}}};const A=(t,n,e)=>{try{n=n.render();{t.i&=~16}{t.i|=2}{{{O(t,n)}}}}catch(n){Q(n,t.m)}return null};const L=t=>{const n=t.$.S;const e=t.m;const s=o("postUpdate",n);const c=t.M;if(!(t.i&64)){t.i|=64;{W(e)}s();{t.k(e);if(!c){R()}}}else{s()}{if(t.g){t.g();t.g=undefined}if(t.i&512){ut((()=>x(t,false)))}t.i&=~(4|512)}};const R=n=>{{W(nt.documentElement)}ut((()=>$(tt,"appload",{detail:{namespace:t}})))};const W=t=>t.classList.add("hydrated");const q=(t,n)=>G(t).C.get(n);const F=(t,n,e,s)=>{const o=G(t);const c=o.C.get(n);const l=o.i;const i=o.j;e=h(e,s.O[n][0]);const f=Number.isNaN(c)&&Number.isNaN(e);const r=e!==c&&!f;if((!(l&8)||c===undefined)&&r){o.C.set(n,e);if(i){if((l&(2|16))===2){x(o,false)}}}};const H=(t,n,e)=>{if(n.O){const s=Object.entries(n.O);const o=t.prototype;s.map((([t,[s]])=>{if(s&31||e&2&&s&32){Object.defineProperty(o,t,{get(){return q(this,t)},set(e){F(this,t,e,n)},configurable:true,enumerable:true})}}));if(e&1){const n=new Map;o.attributeChangedCallback=function(t,e,s){et.jmp((()=>{const e=n.get(t);if(this.hasOwnProperty(e)){s=this[e];delete this[e]}else if(o.hasOwnProperty(e)&&typeof this[e]==="number"&&this[e]==s){return}this[e]=s===null&&typeof this[e]==="boolean"?false:s}))};t.observedAttributes=s.filter((([t,n])=>n[0]&15)).map((([t,e])=>{const s=e[1]||t;n.set(s,t);return s}))}}return t};const I=async(t,n,e,s,l)=>{if((n.i&32)===0){n.i|=32;{l=Y(e);if(l.then){const t=c();l=await l;t()}if(!l.isProxied){H(l,e,2);l.isProxied=true}const t=o("createInstance",e.S);{n.i|=8}try{new l(n)}catch(t){Q(t)}{n.i&=~8}t()}if(l.style){let t=l.style;const n=S(e);if(!Z.has(n)){const s=o("registerStyles",e.S);y(n,t,!!(e.i&1));s()}}}const i=n.M;const f=()=>x(n,true);if(i&&i["s-rc"]){i["s-rc"].push(f)}else{f()}};const V=t=>{if((et.i&1)===0){const n=G(t);const e=n.$;const s=o("connectedCallback",e.S);if(!(n.i&1)){n.i|=1;{let e=t;while(e=e.parentNode||e.host){if(e["s-p"]){P(n,n.M=e);break}}}if(e.O){Object.entries(e.O).map((([n,[e]])=>{if(e&31&&t.hasOwnProperty(n)){const e=t[n];delete t[n];t[n]=e}}))}{I(t,n,e)}}s()}};const _=t=>{if((et.i&1)===0){G(t)}};const z=(t,n={})=>{var e;const s=o();const c=[];const i=n.exclude||[];const f=tt.customElements;const u=nt.head;const a=u.querySelector("meta[charset]");const d=nt.createElement("style");const p=[];let h;let $=true;Object.assign(et,n);et.P=new URL(n.resourcesUrl||"./",nt.baseURI).href;t.map((t=>{t[1].map((n=>{const e={i:n[0],S:n[1],O:n[2],U:n[3]};{e.O=n[2]}const s=e.S;const o=class extends HTMLElement{constructor(t){super(t);t=this;K(t,e);if(e.i&1){{{t.attachShadow({mode:"open"})}}}}connectedCallback(){if(h){clearTimeout(h);h=null}if($){p.push(this)}else{et.jmp((()=>V(this)))}}disconnectedCallback(){et.jmp((()=>_(this)))}componentOnReady(){return G(this).N}};e.T=t[0];if(!i.includes(s)&&!f.get(s)){c.push(s);f.define(s,H(o,e,1))}}))}));{d.innerHTML=c+l;d.setAttribute("data-styles","");const t=(e=et.h)!==null&&e!==void 0?e:r(nt);if(t!=null){d.setAttribute("nonce",t)}u.insertBefore(d,a?a.nextSibling:u.firstChild)}$=false;if(p.length){p.map((t=>t.connectedCallback()))}else{{et.jmp((()=>h=setTimeout(R,30)))}}s()};const B=t=>et.h=t;const D=new WeakMap;const G=t=>D.get(t);const J=(t,n)=>D.set(n.j=t,n);const K=(t,n)=>{const e={i:0,m:t,$:n,C:new Map};{e.N=new Promise((t=>e.k=t));t["s-p"]=[];t["s-rc"]=[]}return D.set(t,e)};const Q=(t,n)=>(0,console.error)(t,n);const X=new Map;const Y=(t,n,e)=>{const s=t.S.replace(/-/g,"_");const o=t.T;const c=X.get(o);if(c){return c[s]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${o}.entry.js${""}`).then((t=>{{X.set(o,t)}return t[s]}),Q)};const Z=new Map;const tt=typeof window!=="undefined"?window:{};const nt=tt.document||{head:{}};const et={i:0,P:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,n,e,s)=>t.addEventListener(n,e,s),rel:(t,n,e,s)=>t.removeEventListener(n,e,s),ce:(t,n)=>new CustomEvent(t,n)};const st=t=>Promise.resolve(t);const ot=(()=>{try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(t){}return false})();const ct=[];const lt=[];const it=(t,n)=>e=>{t.push(e);if(!s){s=true;if(n&&et.i&4){ut(rt)}else{et.raf(rt)}}};const ft=t=>{for(let n=0;n<t.length;n++){try{t[n](performance.now())}catch(t){Q(t)}}t.length=0};const rt=()=>{ft(ct);{ft(lt);if(s=ct.length>0){et.raf(rt)}}};const ut=t=>st().then(t);const at=it(lt,true);export{z as b,u as h,st as p,J as r,B as s};
//# sourceMappingURL=p-4577d9bc.js.map