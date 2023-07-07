import { h } from "@stencil/core";
import { format } from "../../utils/utils";
export class PixButton {
  constructor() {
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
  static get is() { return "pix-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["pix-button.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["pix-button.css"]
    };
  }
  static get properties() {
    return {
      "first": {
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
          "text": "The first name"
        },
        "attribute": "first",
        "reflect": false
      },
      "middle": {
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
          "text": "The middle name"
        },
        "attribute": "middle",
        "reflect": false
      },
      "last": {
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
          "text": "The last name"
        },
        "attribute": "last",
        "reflect": false
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
          "text": "disable button"
        },
        "attribute": "is-disabled",
        "reflect": false
      }
    };
  }
  static get events() {
    return [{
        "method": "click",
        "name": "click",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
}
//# sourceMappingURL=pix-button.js.map
