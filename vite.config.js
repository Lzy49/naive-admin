import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
export default defineConfig({
  base: 'https://cdn.max-digital.cn/H5/test/naive-ui/',
  plugins: [
    vue({
      script: {
        refSugar: true
      }
    }),
    vueJsx({})
  ],
  server: {
    open: true
  },
  resolve: {
    alias: {
      '@': resolve('./src'),
      '@css': resolve('./src/assets/css'),
      '@img': resolve('./src/assets/img')
    }
  },
});
