import { h } from "@stencil/core";
export class PixButton {
  constructor() {
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
  static get is() { return "pix-button"; }
  static get encapsulation() { return "scoped"; }
  static get properties() {
    return {
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "\"button\""
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "'big'"
      },
      "shape": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "shape",
        "reflect": false,
        "defaultValue": "'squircle'"
      },
      "backgroundColor": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "background-color",
        "reflect": false,
        "defaultValue": "'blue'"
      },
      "isBorderVisible": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "is-border-visible",
        "reflect": false,
        "defaultValue": "false"
      },
      "isDisabled": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "is-disabled",
        "reflect": false
      },
      "isLoading": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "is-loading",
        "reflect": false
      },
      "triggerAction": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "Function",
          "resolved": "Function",
          "references": {
            "Function": {
              "location": "global",
              "id": "global::Function"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        }
      }
    };
  }
  static get states() {
    return {
      "isTriggering": {}
    };
  }
  static get methods() {
    return {
      "_triggerAction": {
        "complexType": {
          "signature": "(event: MouseEvent) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global",
              "id": "global::Promise"
            },
            "MouseEvent": {
              "location": "global",
              "id": "global::MouseEvent"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      }
    };
  }
  static get watchers() {
    return [{
        "propName": "isLoading",
        "methodName": "getIsLoading"
      }, {
        "propName": "isTriggering",
        "methodName": "getIsLoading"
      }, {
        "propName": "isLoading",
        "methodName": "getIsDisabled"
      }, {
        "propName": "isTriggering",
        "methodName": "getIsDisabled"
      }, {
        "propName": "isDisabled",
        "methodName": "getIsDisabled"
      }, {
        "propName": "isLoading",
        "methodName": "updateClassNames"
      }, {
        "propName": "isTriggering",
        "methodName": "updateClassNames"
      }, {
        "propName": "isDisabled",
        "methodName": "updateClassNames"
      }];
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
//# sourceMappingURL=pix-button.js.map
