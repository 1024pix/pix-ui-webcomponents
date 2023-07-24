'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-698cacb9.js');

/*
 Stencil Client Patch Browser v4.0.1 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('pix-ui-webcomponents-stencil.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["my-component_2.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}],[1,"pix-button",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=pix-ui-webcomponents-stencil.cjs.js.map