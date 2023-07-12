import { LitElement, html, css, unsafeCSS, nothing } from 'lit';

import style from "../colors.css?inline";
import buttonBaseStyle from "../pix-button.css?inline";
import buttonStyle from "../_pix-button.css?inline";

export class PixButton extends LitElement {
  static properties = {
   type: {
     type: String,
     reflect: true
   } ,
   size: {
     type: String,
     reflect: true
   },
   shape: {
     type: String,
     reflect: true
   },
   backgroundColor: {
     type: String,
     reflect: true
   },
   isBorderVisible: {
     type: Boolean,
     reflect: true
   },
   isDisabled: {
     type: Boolean,
     reflect: true
   },
   isLoading: {type: Boolean, reflect: true},
   icon: {type: String, reflect: true},
   triggerAction: {type: Object, reflect: true},
   isTriggering: {type: Boolean},
   classNames: {type: Array},
  };
  
  // Define scoped styles right with your component, in plain CSS
  static styles = [
    unsafeCSS(style),
    unsafeCSS(buttonBaseStyle),
    unsafeCSS(buttonStyle),
    css`
    :host {
      color: blue;
    }
 `];

  constructor() {
    super();
  this.type = "button";

  this.size = 'big';

  this.shape = 'squircle';

  this.backgroundColor = 'blue'

  this.isBorderVisible = false;

  this.boolean = false;

  this.classNames = [
      'pix-button',
      `pix-button--shape-${this.shape}`,
      `pix-button--size-${this.size}`,
      `pix-button--background-${this.backgroundColor}`,
    ];
  }

  get isLoadingOrTriggering() {
    return this.isLoading || this.isTriggering;
  }

  getIsDisabled() {
    return this.isLoadingOrTriggering || this.isDisabled;
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
    if (this.isDisabled || (this.type === 'submit' && !this.triggerAction)) return;

    if (!this.triggerAction) {
      throw new Error('@triggerAction params is required for PixButton !');
    }
    try {
      this.isTriggering = true;
      console.log('when triggered !', this.triggerAction);
      await this.triggerAction(event);
    } finally {
      console.log('triggering done ! ');
      this.isTriggering = false;
    }
  }
  // Render the UI as a function of component state
  render() {
   let template;
    if (this.isLoadingOrTriggering) {
      template = html`
        <div class="loader loader--blue">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
        </div>
        <span class="loader__not-visible-text"><slot name="text"/></span>
      `
    } else {
      template = html`<slot name="text"/>`
    }


    return html`<button
        @click=${this._triggerAction}
        type=${this.type}
        class=${this.updateClassNames()}
        ?disabled=${this.getIsDisabled()}
        ?aria-disabled=${this.getIsDisabled()}
      >
        ${template} 
    </button>`

  }
}

customElements.define('pix-button', PixButton);
