import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'node:path';

import { defineConfig } from 'vite';
import babel from 'vite-plugin-babel';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './index.js'),
      name: 'PixUI',
      // the proper extensions will be added
      fileName: 'pix-ui',
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [
    babel({
        extensions: ['.js'],
        babelHelpers: 'runtime',
        plugins: ['@babel/plugin-transform-runtime'],
        presets: [
          [
            '@babel/preset-env',
            {
              useBuiltIns: false,
              targets: {
                browsers: ['last 2 versions', '> 1%', 'not ie <= 11', 'Firefox ESR', 'Firefox 58'],
              },
            },
          ],
        ],
    }),
  ]
})
