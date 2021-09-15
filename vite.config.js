import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { viteMockServe } from 'vite-plugin-mock';
import { resolve } from 'path';
export default ({ command }) => {
  return defineConfig({
    // base: 'https://cdn.max-digital.cn/H5/test/naive-ui/',
    plugins: [
      vue({
        script: {
          refSugar: true
        }
      }),
      vueJsx({}),
      viteMockServe({
        ignore: /^\_/,
        localEnabled: true,
        prodEnabled: false,
        supportTs: false,
        watchFiles: true
      })
    ],
    server: {
      open: true
    },
    resolve: {
      alias: {
        '@': resolve('./src'),
        '@css': resolve('./src/assets/css'),
        '@img': resolve('./src/assets/img'),
        '@mock': resolve('./mock')
      }
    }
  });
};
