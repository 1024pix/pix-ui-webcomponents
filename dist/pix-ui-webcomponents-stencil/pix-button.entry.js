import { r as registerInstance, h } from './index-b98144a6.js';
import { f as format } from './utils-6837ff93.js';

const pixButtonCss = ":host{display:block}.primary{display:block;justify-content:center;align-items:center;text-decoration:none;background-color:#3D68FF;padding:12px 24px;border-radius:4px;color:#FFFFFF;font-size:0.875rem;font-weight:500;white-space:nowrap;cursor:pointer}";

const PixButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.first = undefined;
    this.middle = undefined;
    this.last = undefined;
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return h("div", null, h("button", { class: 'primary' }, "HelloPix ", this.getText()));
  }
};
PixButton.style = pixButtonCss;

export { PixButton as pix_button };

//# sourceMappingURL=pix-button.entry.js.map