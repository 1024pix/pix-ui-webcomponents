import { r as registerInstance, h, F as Fragment, g as getElement } from './index-8e9a09ce.js';

const pixButtonCss = ".pix-button{color:var(--pix-neutral-0);font-size:0.875rem;font-weight:var(--font-medium);white-space:nowrap;cursor:pointer;background-color:var(--pix-secondary);border:1px solid transparent;outline:none;display:flex;justify-content:center;align-items:center;text-decoration:none;}.pix-button--shape-rounded{border-radius:25px}.pix-button--shape-squircle{border-radius:4px}.pix-button--size-big{padding:12px 24px}.pix-button--size-small.pix-button--shape-rounded{padding:8px 24px}.pix-button--size-small.pix-button--shape-squircle{padding:8px 16px}.pix-button--disabled{opacity:0.5;cursor:not-allowed}.pix-button--background-blue{background-color:var(--pix-primary)}.pix-button--background-blue:not(.pix-button--disabled):hover{background-color:var(--pix-primary-60)}.pix-button--background-blue:not(.pix-button--disabled):focus,.pix-button--background-blue:not(.pix-button--disabled):focus-visible{background-color:var(--pix-primary-60);outline:1px solid v--pix-neutral-0;outline-offset:-4px}.pix-button--background-blue:not(.pix-button--disabled):active{background-color:var(--pix-primary-70);outline:none}.pix-button--background-green{background-color:#f0f}.pix-button--background-green:not(.pix-button--disabled):hover{background-color:var(--pix-success-70)}.pix-button--background-green:not(.pix-button--disabled):focus,.pix-button--background-green:not(.pix-button--disabled):focus-visible{background-color:var(--pix-success-70);outline:1px solid var(--pix-neutral-0);outline-offset:-4px}.pix-button--background-green:not(.pix-button--disabled):active{background-color:var(--pix-success-80);outline:none}.pix-button--background-yellow{color:var(--pix-neutral-100);background-color:var(--pix-warning-40)}.pix-button--background-yellow:not(.pix-button--disabled):hover{background-color:var(--pix-warning-50)}.pix-button--background-yellow:not(.pix-button--disabled):focus,.pix-button--background-yellow:not(.pix-button--disabled):focus-visible{background-color:var(--pix-warning-50);outline:1px solid var(--pix-neutral-0);outline-offset:-4px}.pix-button--background-yellow:not(.pix-button--disabled):active{background-color:var(--pix-warning-60);outline:none}.pix-button--background-red{color:var(--pix-neutral-0);background-color:var(--pix-error-70)}.pix-button--background-red:not(.pix-button--disabled):hover{background-color:var(--pix-error-80)}.pix-button--background-red:not(.pix-button--disabled):focus,.pix-button--background-red:not(.pix-button--disabled):focus-visible{background-color:var(--pix-error-70);outline:1px solid var(--pix-neutral-0);outline-offset:-4px}.pix-button--background-red:not(.pix-button--disabled):active{background-color:var(--pix-error-90);outline:none}.pix-button--background-grey{color:var(--pix-neutral-90);background-color:var(--pix-neutral-20)}.pix-button--background-grey:not(.pix-button--disabled):hover{background-color:var(--pix-neutral-22)}.pix-button--background-grey:not(.pix-button--disabled):focus,.pix-button--background-grey:not(.pix-button--disabled):focus-visible{background-color:--pix-neutral-90;color:--pix-neutral-0;outline:1px solid --pix-neutral-0;outline-offset:-4px}.pix-button--background-grey:not(.pix-button--disabled):active{background-color:--pix-neutral-25;color:--pix-neutral-90;outline:none}.pix-button--background-transparent{background-color:transparent;color:--pix-neutral-50;border:1px solid --pix-neutral-50}.pix-button--background-transparent-light{color:--pix-neutral-90;background-color:transparent}.pix-button--background-transparent-light.pix-button--border{border:1px solid --pix-neutral-50}.pix-button--background-transparent-light:not(.pix-button--disabled):hover{background-color:--pix-neutral-60;color:--pix-neutral-0;border:1px solid transparent}.pix-button--background-transparent-light:not(.pix-button--disabled):focus,.pix-button--background-transparent-light:not(.pix-button--disabled):focus-visible{background-color:--pix-neutral-90;color:--pix-neutral-0;outline:1px solid --pix-neutral-0;outline-offset:-4px}.pix-button--background-transparent-light:not(.pix-button--disabled):active{background-color:--pix-neutral-70;outline:none}.pix-button--background-transparent-dark{color:--pix-neutral-0;background-color:transparent}.pix-button--background-transparent-dark.pix-button--border{border:1px solid --pix-neutral-0}.pix-button--background-transparent-dark:not(.pix-button--disabled):hover{background-color:--pix-neutral-10;color:--pix-neutral-90;border:1px solid transparent}.pix-button--background-transparent-dark:not(.pix-button--disabled):focus,.pix-button--background-transparent-dark:not(.pix-button--disabled):focus-visible{background-color:--pix-neutral-10;color:--pix-neutral-90;outline:1px solid --pix-neutral-90;outline-offset:-4px}.pix-button--background-transparent-dark:not(.pix-button--disabled):active{background-color:--pix-neutral-20;outline:none}.pix-button__icon{height:1rem}.pix-button__icon--before{margin-right:var(--pix-spacing-xs)}.pix-button__icon--after{margin-left:var(--pix-spacing-xs)}.pix-button .loader{position:absolute}.pix-button .loader__not-visible-text{visibility:hidden}.loader>div{width:10px;height:10px;background-color:var(--pix-neutral-0);border-radius:100%;display:inline-block;animation:sk-bouncedelay 1.4s infinite ease-in-out both}.loader--white>div{background-color:var(--pix-neutral-0)}.loader--grey>div{background-color:var(--pix-neutral-80)}.loader .bounce1{animation-delay:-0.32s}.loader .bounce2{animation-delay:-0.16s}@keyframes sk-bouncedelay{0%,80%,100%{transform:scale(0)}40%{transform:scale(1)}}";

const PixButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    if (this.isDisabled)
      return;
    if (this.type === 'submit' && !this.triggerAction)
      this._handleClick();
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
  async _handleClick() {
    const form = this.el.closest('form');
    if (form) {
      await form.requestSubmit();
    }
  }
  // getTemplate() {
  //   if(this.getIsLoading()) {
  //     return (
  //       <div>
  //         <div class="loader loader--blue">
  //         <div class="bounce1"></div>
  //         <div class="bounce2"></div>
  //         <div class="bounce3"></div>
  //         </div>
  //         <span class="loader__not-visible-text"><slot name="text"/></span>
  //       </div>
  //     )
  //   }
  //   return <slot name="text"/>
  // }
  render() {
    let template;
    if (this.getIsLoading()) {
      template = (h(Fragment, null, h("div", { class: "loader loader--blue" }, h("div", { class: "bounce1" }), h("div", { class: "bounce2" }), h("div", { class: "bounce3" })), h("span", { class: "loader__not-visible-text" }, h("slot", { name: "text" }))));
    }
    else {
      template = h(Fragment, null, h("slot", { name: "text" }));
    }
    return (h("button", { onClick: this._triggerAction.bind(this), type: this.type, class: this.updateClassNames(), disabled: this.getIsDisabled(), "aria-disabled": this.getIsDisabled() }, template));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "isLoading": ["getIsLoading", "getIsDisabled", "updateClassNames"],
    "isTriggering": ["getIsLoading", "getIsDisabled", "updateClassNames"],
    "isDisabled": ["getIsDisabled", "updateClassNames"]
  }; }
};
PixButton.style = pixButtonCss;

export { PixButton as pix_button };

//# sourceMappingURL=pix-button.entry.js.map