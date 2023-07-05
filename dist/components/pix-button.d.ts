import type { Components, JSX } from "../types/components";

interface PixButton extends Components.PixButton, HTMLElement {}
export const PixButton: {
  prototype: PixButton;
  new (): PixButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
