'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ac03e578.js');

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return index.bootstrapLazy([["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["pix-button.cjs",[[1,"pix-button",{"type":[1],"size":[1],"shape":[1],"backgroundColor":[1,"background-color"],"isBorderVisible":[4,"is-border-visible"],"isDisabled":[4,"is-disabled"],"isLoading":[4,"is-loading"],"triggerAction":[16],"isTriggering":[32],"_triggerAction":[64],"_handleClick":[64]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map