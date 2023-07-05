import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { f as format } from './utils.js';

const pixButtonCss = ":host{display:block}.primary{display:block;justify-content:center;align-items:center;text-decoration:none;background-color:#3D68FF;padding:12px 24px;border-radius:4px;color:#FFFFFF;font-size:0.875rem;font-weight:500;white-space:nowrap;cursor:pointer}";

const PixButton$1 = /*@__PURE__*/ proxyCustomElement(class PixButton extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.first = undefined;
    this.middle = undefined;
    this.last = undefined;
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return h("button", { class: "primary" }, "HelloPix ", this.getText());
  }
  static get style() { return pixButtonCss; }
}, [1, "pix-button", {
    "first": [1],
    "middle": [1],
    "last": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["pix-button"];
  components.forEach(tagName => { switch (tagName) {
    case "pix-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, PixButton$1);
      }
      break;
  } });
}

const PixButton = PixButton$1;
const defineCustomElement = defineCustomElement$1;

export { PixButton, defineCustomElement };

//# sourceMappingURL=pix-button.js.map