import { r as registerInstance, h } from './index-a3f28bde.js';

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";

const MyComponent = class {
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
    return (h("div", null, "Hello, World! I'm ", this.getText()));
  }
};
MyComponent.style = myComponentCss;

const pixButtonCss = ":host{display:block}";

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
    return h("button", null, "HelloPix ", this.getText());
  }
};
PixButton.style = pixButtonCss;

export { MyComponent as my_component, PixButton as pix_button };

//# sourceMappingURL=my-component_2.entry.js.map