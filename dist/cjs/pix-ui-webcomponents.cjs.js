'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ac03e578.js');

/*
 Stencil Client Patch Browser v4.0.1 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('pix-ui-webcomponents.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["pix-button.cjs",[[1,"pix-button",{"type":[1],"size":[1],"shape":[1],"backgroundColor":[1,"background-color"],"isBorderVisible":[4,"is-border-visible"],"isDisabled":[4,"is-disabled"],"isLoading":[4,"is-loading"],"triggerAction":[16],"isTriggering":[32],"_triggerAction":[64],"_handleClick":[64]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=pix-ui-webcomponents.cjs.js.map