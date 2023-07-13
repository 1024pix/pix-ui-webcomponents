import {Component, Prop, Method, h, Watch, State, Fragment, Element } from '@stencil/core';

@Component({
  tag: 'pix-button',
  styleUrl: 'pix-button.css',
  shadow: true,
  // scoped: true,
})
export class PixButton {

  @Prop() type: string = "button";

  @Prop() size: string = 'big';

  @Prop() shape: string = 'squircle';

  @Prop() backgroundColor: string = 'blue'

  @Prop() isBorderVisible: boolean = false;

  @Prop() isDisabled: boolean;

  @Prop() isLoading: boolean;

  @Prop() triggerAction: Function;

  @State() isTriggering: boolean = false;

  @Element() el;

  @Watch('isLoading')
  @Watch('isTriggering')
  private getIsLoading() : boolean {
    return this.isLoading || this.isTriggering;
  }
  @Watch('isLoading')
  @Watch('isTriggering')
  @Watch('isDisabled')
  private getIsDisabled(): boolean {
    return this.getIsLoading() || this.isDisabled;
  }

  @Watch('isLoading')
  @Watch('isTriggering')
  @Watch('isDisabled')
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

  @Method()
  async _triggerAction(event: MouseEvent) {
    console.log({type: this.type});
    console.log('is it triggering ? ', this.isTriggering);
    if (this.isDisabled) return;
    if (this.type === 'submit' && !this.triggerAction) this._handleClick();

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
  @Method()
  async _handleClick() {
    const form = this.el.closest('form');
    if (form) {
      await form.requestSubmit();
    }
  }

  render() {
    let template: any;
    if(this.getIsLoading()) {
      template = (
        <Fragment>
          <div class="loader loader--blue">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
          </div>
          <span class="loader__not-visible-text"><slot name="text"></slot></span>
        </Fragment>
      )
    } else {
      template = <Fragment><slot name="text"></slot></Fragment>
    }

    return (
      <button
        onClick={this._triggerAction.bind(this)}
        type={this.type}
        class={this.updateClassNames()}
        disabled={this.getIsDisabled()}
        aria-disabled={this.getIsDisabled()}
      >
         {/* {this.getTemplate()}  */}
          {template}
         {/* <slot name="icon"/> */}
      </button>
      )
    }
  }

  // render() {
  //   return (
  //     <button
  //       onClick={this._triggerAction.bind(this)}
  //       type={this.type}
  //       class={this.updateClassNames()}
  //       disabled={this.getIsDisabled()}
  //       aria-disabled={this.getIsDisabled()}
  //     >
  //       <slot/>
  //     </button>
  //   );
  // }

/*
<button
  type={{this.type}}
  class={{this.className}}
  {{on "click" this.triggerAction}}
    ...attributes
disabled={{this.isDisabled}}
aria-disabled="{{this.isDisabled}}"
  >
  {{#if this.isLoading}}
<div class="loader loader--{{this.loadingColor}}">
  <div class="bounce1"></div>
  <div class="bounce2"></div>
  <div class="bounce3"></div>
</div>
<span class="loader__not-visible-text">{{yield}}</span>
{{else}}
{{#if @iconBefore}}
<FaIcon
  class="pix-button__icon pix-button__icon--before"
          @icon={{@iconBefore}}
@prefix={{@prefixIconBefore}}
/>
{{/if}}
  {{yield}}
  {{#if @iconAfter}}
  <FaIcon
    class="pix-button__icon pix-button__icon--after"
          @icon={{@iconAfter}}
@prefix={{@prefixIconAfter}}
  />
  {{/if}}
    {{/if}}
    </button>*/
