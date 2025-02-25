import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import inject from "@rollup/plugin-inject";
import path from "path"

export default defineConfig({
  plugins: [
    react(),
    inject({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
     
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Define `@` as `src`
    },
  },
});