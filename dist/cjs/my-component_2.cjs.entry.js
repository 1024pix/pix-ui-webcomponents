'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a8813fde.js');

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.first = undefined;
    this.middle = undefined;
    this.last = undefined;
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return (index.h("div", null, "Hello, World! I'm ", this.getText()));
  }
};
MyComponent.style = myComponentCss;

const pixButtonCss = ":host{display:block}.primary{display:block;justify-content:center;align-items:center;text-decoration:none;background-color:#3D68FF;padding:12px 24px;border-radius:4px;color:#FFFFFF;font-size:0.875rem;font-weight:500;white-space:nowrap;cursor:pointer}";

const PixButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.first = undefined;
    this.middle = undefined;
    this.last = undefined;
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return index.h("button", { class: "primary" }, "HelloPix ", this.getText());
  }
};
PixButton.style = pixButtonCss;

exports.my_component = MyComponent;
exports.pix_button = PixButton;

//# sourceMappingURL=my-component_2.cjs.entry.js.map