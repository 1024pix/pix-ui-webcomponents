import {Component, Prop, Method, h, Watch, State } from '@stencil/core';

@Component({
  tag: 'pix-button',
  styleUrl: 'pix-button.css',
  shadow: true,
})
export class PixButton {

  @Prop() type: string = "button";

  @Prop() isDisabled: boolean;

  @Prop() isLoading: boolean;

  @Prop() triggerAction: Function;

  @State() isTriggering: boolean = false;

  private getType() : string | undefined {
    return this.type || 'button';
  }
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

  @Method()
  async _triggerAction(event: MouseEvent) {
    console.log('is it triggering ? ', this.isTriggering);
    // this.trigger.emit();
    if (this.isDisabled || (this.getType() === 'submit' && !this.triggerAction)) {
      event.stopPropagation();
      return;
    }
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

 /* private getText(): string {
    return format(this.first, this.middle, this.last);
  }*/

  render() {
    return (
      <button
        onClick={this._triggerAction.bind(this)}
        type={this.getType()}
        class={'primary'}
        disabled={this.getIsDisabled()}
        aria-disabled={this.getIsDisabled()}
      >
        <slot name="content"/>
      </button>
    );
  }
}
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
