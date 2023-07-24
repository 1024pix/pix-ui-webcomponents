
import { defineCustomElement } from 'vue';

import PixButton from './components/PixButton.ce.vue';

const PixButtonElement = defineCustomElement(PixButton);
customElements.define('pix-button', PixButtonElement);

export { PixButtonElement as 'PixButton' };
