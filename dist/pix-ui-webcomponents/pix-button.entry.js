import { r as registerInstance, a as createEvent, h } from './index-94937b52.js';
import { f as format } from './utils-6837ff93.js';

const pixButtonCss = ":host{display:block}.primary{display:block;justify-content:center;align-items:center;text-decoration:none;background-color:#3D68FF;padding:12px 24px;border-radius:4px;color:#FFFFFF;font-size:0.875rem;font-weight:500;white-space:nowrap;cursor:pointer}";

const PixButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.clic = createEvent(this, "clic", 7);
    this.first = undefined;
    this.middle = undefined;
    this.last = undefined;
  }
  handleClick(ev) {
    console.log(ev);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return h("div", null, h("button", { class: 'primary', onClick: (e) => this.clic.emit(e) }, "HelloPix ", this.getText()));
  }
};
PixButton.style = pixButtonCss;

export { PixButton as pix_button };

//# sourceMappingURL=pix-button.entry.js.map