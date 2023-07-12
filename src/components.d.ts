/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface PixButton {
        "_triggerAction": (event: MouseEvent) => Promise<void>;
        "backgroundColor": string;
        "isBorderVisible": boolean;
        "isDisabled": boolean;
        "isLoading": boolean;
        "shape": string;
        "size": string;
        "text": string;
        "triggerAction": Function;
        "type": string;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLPixButtonElement extends Components.PixButton, HTMLStencilElement {
    }
    var HTMLPixButtonElement: {
        prototype: HTMLPixButtonElement;
        new (): HTMLPixButtonElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "pix-button": HTMLPixButtonElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface PixButton {
        "backgroundColor"?: string;
        "isBorderVisible"?: boolean;
        "isDisabled"?: boolean;
        "isLoading"?: boolean;
        "shape"?: string;
        "size"?: string;
        "text"?: string;
        "triggerAction"?: Function;
        "type"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "pix-button": PixButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "pix-button": LocalJSX.PixButton & JSXBase.HTMLAttributes<HTMLPixButtonElement>;
        }
    }
}
