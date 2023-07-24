'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bffde51d.js');

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return index.bootstrapLazy([["my-component_2.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}],[1,"pix-button",{"first":[1],"middle":[1],"last":[1],"isDisabled":[4,"is-disabled"]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map