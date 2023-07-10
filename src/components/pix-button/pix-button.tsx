import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';
// import { format } from '../../utils/utils';

@Component({
  tag: 'pix-button',
  styleUrl: 'pix-button.css',
  shadow: true,
})
export class PixButton {

  @Prop() type: string;

  @Prop() isDisabled: boolean;

  @Prop() isLoading: boolean;

  isTriggering: boolean = false;

  private getType() : string | undefined {
    return this.type || 'button';
  }

  private getIsLoading() : boolean {
    return this.isLoading || this.isTriggering;
  }

  private getIsDisabled(): boolean {
    return this.getIsLoading() || this.isDisabled;
  }

  // @Event() trigger: EventEmitter<any>
  async triggerAction(event: MouseEvent) {
    // this.trigger.emit();
    if (this.isDisabled || (this.getType() === 'submit' && !this.triggerAction)) return;
    if (!this.triggerAction) {
      throw new Error('@triggerAction params is required for PixButton !');
    }
    try {
      this.isTriggering = true;
      await this.triggerAction(event);
    } finally {
      this.isTriggering = false;
    }
  }

 /* private getText(): string {
    return format(this.first, this.middle, this.last);
  }*/

  render() {
    return (<div>
      <button
        type={this.getType()}
        class={'primary'}
        onClick={ev => this.triggerAction(ev)}
        disabled={this.getIsDisabled()}
        aria-disabled={this.getIsDisabled()}
      >
        <slot name="content"/>
      </button>
    </div>);
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
