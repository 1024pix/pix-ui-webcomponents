import {LitElement, html, css} from 'lit';

export class PixButton extends LitElement {
  static properties = {
    name: {},
  };
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      color: blue;
    }
  `;

  constructor() {
    super();
    // Declare reactive properties
    this.name = 'World';
  }

  // Render the UI as a function of component state
  render() {
    return html`<button>Hello, ${this.name}!</button>`;
  }
}
customElements.define('pix-button', PixButton);