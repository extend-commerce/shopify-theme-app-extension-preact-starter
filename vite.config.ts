import preact from '@preact/preset-vite';
import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';

const entrypointsDir = path.resolve(import.meta.dirname, 'src', 'entrypoints');
const extensionDir = path.resolve(
  import.meta.dirname,
  '..',
  'extensions',
  'theme-extension',
);

const entrypoints = fs.readdirSync(entrypointsDir);
const input: Record<string, string> = {};
for (const entrypoint of entrypoints) {
  input[entrypoint] = path.resolve(entrypointsDir, entrypoint);
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: {
      '~': path.resolve(import.meta.dirname, 'src'),
    },
  },
  build: {
    outDir: path.resolve(extensionDir, 'assets'),
    assetsDir: '',
    emptyOutDir: true,
    // NOTE: For rolldown compatibility just change rollupOptions to rolldownOptions
    rollupOptions: {
      input,
      output: {
        entryFileNames: chunkInfo => path.parse(chunkInfo.name).name + '.js',
        assetFileNames: '[name].[ext]',
      },
      perf: true,
      treeshake: true,
    },
  },
});
