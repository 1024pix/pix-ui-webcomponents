import { LitElement, html, css, unsafeCSS, nothing } from 'lit';

import defaultStyles from '@1024pix/pix-ui-themes/dist/pix-theme-default.css';

export class PixFruitsQcm extends LitElement {
  static properties = {
    proposals: {
      type: Array,
    },
  };

  // Define scoped styles right with your component, in plain CSS
  static styles = [unsafeCSS(defaultStyles)];

  // Render the UI as a function of component state
  render() {
    return html`<form>
        <h1>QCM</h1>
        <label><input type="checkbox" name="qcm" value="1"> banana</label>
        <label><input type="checkbox" name="qcm" value="2"> orange</label>
        <label><input type="checkbox" name="qcm" value="3"> pineapple</label>
    </form>`;
  }
}

customElements.define('pix-fruits-qcm', PixFruitsQcm);
