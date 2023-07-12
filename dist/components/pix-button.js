import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const PixButton$1 = /*@__PURE__*/ proxyCustomElement(class PixButton extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.type = "button";
    this.size = 'big';
    this.shape = 'squircle';
    this.backgroundColor = 'blue';
    this.isBorderVisible = false;
    this.isDisabled = undefined;
    this.isLoading = undefined;
    this.triggerAction = undefined;
    this.isTriggering = false;
  }
  getIsLoading() {
    return this.isLoading || this.isTriggering;
  }
  getIsDisabled() {
    return this.getIsLoading() || this.isDisabled;
  }
  updateClassNames() {
    const classNames = [
      'pix-button',
      `pix-button--shape-${this.shape}`,
      `pix-button--size-${this.size}`,
      `pix-button--background-${this.backgroundColor}`,
    ];
    this.isBorderVisible && classNames.push('pix-button--border');
    this.getIsDisabled() && classNames.push('pix-button--disabled');
    return classNames.join(' ');
  }
  async _triggerAction(event) {
    console.log({ type: this.type });
    console.log('is it triggering ? ', this.isTriggering);
    if (this.isDisabled || (this.type === 'submit' && !this.triggerAction))
      return;
    if (!this.triggerAction) {
      throw new Error('@triggerAction params is required for PixButton !');
    }
    try {
      this.isTriggering = true;
      console.log('when triggered !', this.triggerAction);
      await this.triggerAction(event);
    }
    finally {
      console.log('triggering done ! ');
      this.isTriggering = false;
    }
  }
  render() {
    return (h("button", { onClick: this._triggerAction.bind(this), type: this.type, class: this.updateClassNames(), disabled: this.getIsDisabled(), "aria-disabled": this.getIsDisabled() }, h("slot", null)));
  }
  static get watchers() { return {
    "isLoading": ["getIsLoading", "getIsDisabled", "updateClassNames"],
    "isTriggering": ["getIsLoading", "getIsDisabled", "updateClassNames"],
    "isDisabled": ["getIsDisabled", "updateClassNames"]
  }; }
}, [6, "pix-button", {
    "type": [1],
    "size": [1],
    "shape": [1],
    "backgroundColor": [1, "background-color"],
    "isBorderVisible": [4, "is-border-visible"],
    "isDisabled": [4, "is-disabled"],
    "isLoading": [4, "is-loading"],
    "triggerAction": [16],
    "isTriggering": [32],
    "_triggerAction": [64]
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