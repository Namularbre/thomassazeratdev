import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
    build: {
        // don't create an asset dir to keep all the files in /dist
        assetsDir: '',
        // Place all files in /dist
        rollupOptions: {
            output: {
                assetFileNames: `[name].[ext]`,
                entryFileNames: `[name].js`,
            },
        },
    },
});
