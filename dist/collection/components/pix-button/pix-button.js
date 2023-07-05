import { h } from "@stencil/core";
import { format } from "../../utils/utils";
export class PixButton {
  constructor() {
    this.first = undefined;
    this.middle = undefined;
    this.last = undefined;
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return h("button", { class: 'primary' }, "HelloPix ", this.getText());
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
      }
    };
  }
}
//# sourceMappingURL=pix-button.js.map
