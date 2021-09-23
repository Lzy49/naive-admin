import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { viteMockServe } from 'vite-plugin-mock';
import { resolve } from 'path';
export default ({ command }) => {
  return defineConfig({
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
      open: true,
      proxy: {
        // '/api': {
        //   target: 'http://rap2api.taobao.org/',
        //   changeOrigin: true,
        //   rewrite: (path) => {
        //     return path.replace(/^\/api/, '');
        //   }
        // }
      }
    },
    resolve: {
      alias: {
        '@': resolve('./src'),
        '@css': resolve('./src/assets/css'),
        '@img': resolve('./src/assets/img'),
        '@api': resolve('./src/utils/request/api')
      }
    }
  });
};
