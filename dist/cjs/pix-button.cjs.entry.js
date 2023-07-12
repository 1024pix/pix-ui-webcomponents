'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3a848691.js');

const PixButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h("button", { onClick: this._triggerAction.bind(this), type: this.type, class: this.updateClassNames(), disabled: this.getIsDisabled(), "aria-disabled": this.getIsDisabled() }, index.h("slot", null)));
  }
  static get watchers() { return {
    "isLoading": ["getIsLoading", "getIsDisabled", "updateClassNames"],
    "isTriggering": ["getIsLoading", "getIsDisabled", "updateClassNames"],
    "isDisabled": ["getIsDisabled", "updateClassNames"]
  }; }
};

exports.pix_button = PixButton;

//# sourceMappingURL=pix-button.cjs.entry.js.map