import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'pix-ui-webcomponents',
  globalStyle: './node_modules/@1024pix/pix-ui-themes/dist/pix-theme-default.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
