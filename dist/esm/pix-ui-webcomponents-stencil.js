import { p as promiseResolve, b as bootstrapLazy } from './index-a3f28bde.js';
export { s as setNonce } from './index-a3f28bde.js';

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
  return bootstrapLazy([["my-component_2",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}],[1,"pix-button",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});

//# sourceMappingURL=pix-ui-webcomponents-stencil.js.map