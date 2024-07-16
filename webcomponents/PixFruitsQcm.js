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

  onChange() {
    const checkboxes = Array.from(this.renderRoot.querySelectorAll('input'));
    const checkedCheckboxes = checkboxes.filter((checkbox) => checkbox.checked);
    const checkedCheckboxesValues = checkedCheckboxes.map((checkbox) => checkbox.value);

    const event = new CustomEvent('PixFruitsQcmChanges', {
      bubbles: false,
      composed: false,
      detail: {
        values: checkedCheckboxesValues,
      },
    });
    this.dispatchEvent(event);
  }

  // Render the UI as a function of component state
  render() {
    return html`<form>
        <h1>QCM</h1>
        <label><input type="checkbox" name="qcm" value="1" @change=${this.onChange}> banana</label>
        <label><input type="checkbox" name="qcm" value="2" @change=${this.onChange}> orange</label>
        <label><input type="checkbox" name="qcm" value="3" @change=${this.onChange}> pineapple</label>
    </form>`;
  }
}

customElements.define('pix-fruits-qcm', PixFruitsQcm);
