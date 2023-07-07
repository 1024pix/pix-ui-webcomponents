import { r as registerInstance, h, c as createEvent } from './index-1e9d0942.js';

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

const pixButtonCss = ":host{display:block}.primary{display:block;justify-content:center;align-items:center;text-decoration:none;background-color:#3D68FF;padding:12px 24px;border-radius:4px;color:#FFFFFF;font-size:0.875rem;font-weight:500;white-space:nowrap;cursor:pointer}.primary:disabled{cursor:not-allowed;background:#000}";

const PixButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.click = createEvent(this, "click", 7);
    this.first = undefined;
    this.middle = undefined;
    this.last = undefined;
    this.isDisabled = undefined;
  }
  handleClick(ev) {
    console.log(ev);
  }
  testClick(e) {
    console.log('test', e);
    return this.click.emit(e);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return (h("div", null, h("button", { disabled: this.isDisabled, class: 'primary', onClick: this.testClick.bind(this) }, "HelloPix ", this.getText())));
  }
};
PixButton.style = pixButtonCss;

export { MyComponent as my_component, PixButton as pix_button };

//# sourceMappingURL=my-component_2.entry.js.map