import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        cssCodeSplit: true,
        rollupOptions: {
            output: {
              manualChunks: (id) => {
                if (id.includes('themes/')) {
                  return id.slice(id.lastIndexOf('themes/') + 7, id.lastIndexOf('.scss'));
                }
              },
              assetFileNames: (assetInfo) => {
                return assetInfo.name;
              },
            },
        },
    },

});