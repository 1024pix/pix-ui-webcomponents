
import { defineCustomElement } from 'vue';

import PixButton from './components/PixButton.vue';

const PixButtonWebComponent = defineCustomElement(PixButton);
window.customElements.define('pix-button', PixButtonWebComponent);

export { PixButtonWebComponent as 'PixButton' };
