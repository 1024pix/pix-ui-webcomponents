import { p as promiseResolve, b as bootstrapLazy } from './index-6a6fbfb5.js';
export { s as setNonce } from './index-6a6fbfb5.js';

/*
 Stencil Client Patch Browser v4.0.1 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["pix-button",[[6,"pix-button",{"type":[1],"size":[1],"shape":[1],"backgroundColor":[1,"background-color"],"isBorderVisible":[4,"is-border-visible"],"isDisabled":[4,"is-disabled"],"isLoading":[4,"is-loading"],"triggerAction":[16],"isTriggering":[32],"_triggerAction":[64]}]]]], options);
});

//# sourceMappingURL=pix-ui-webcomponents.js.map