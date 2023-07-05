'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-698cacb9.js');

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

const pixButtonCss = ":host{display:block}";

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
    return index.h("button", null, "HelloPix ", this.getText());
  }
};
PixButton.style = pixButtonCss;

exports.my_component = MyComponent;
exports.pix_button = PixButton;

//# sourceMappingURL=my-component_2.cjs.entry.js.map