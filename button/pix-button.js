export class PixButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const button = document.createElement("button");
    this.button = button;

    const style = document.createElement("style");
    this.customStyle = style

    shadow.appendChild(style);
    shadow.appendChild(button);

  }

  connectedCallback() {
    console.log('Custom square element added to page.');
    // updateStyle(this);

    this.button.textContent = this.getAttribute("my-text")

    this.customStyle.textContent = `
    button {
      width: ${this.getAttribute("width")}px;
      height: ${this.getAttribute("height")}px;
      background-color: ${this.getAttribute("background-color")};
    }
  `;
  }

  disconnectedCallback() {
    console.log('Custom square element removed from page.');
  }

  adoptedCallback() {
    console.log('Custom square element moved to new page.');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('Custom square element attributes changed.');
    // updateStyle(this);
  }

    static get observedAttributes() { return ['background-color', 'width', 'height']; }
}

window.customElements.define('pix-button', PixButton);
