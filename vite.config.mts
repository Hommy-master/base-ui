import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import svg from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';
import { viteMockServe } from 'vite-plugin-mock';

// https://vite.dev/config/
export default defineConfig({
  clearScreen: false,
  server: {
    port: 8008,
    proxy: {
      '/openapi': {
        // target: 'http://127.0.0.1:30000',
        // target: 'https://t.gogoshine.com',
        target: 'https://jcaigc.cn',
        //target: "https://weixin.gogoshine.com",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    rollupOptions: {
      treeshake: 'recommended',
    },
    sourcemap: process.env.GENERATE_SOURCEMAP === 'false' ? false : true,
    outDir: 'dist',
    assetsDir: '.',
  },
  plugins: [
    viteMockServe({
      mockPath: 'mock', // 指定 mock 目录（类似 Umi 结构）
      enable: process.env.NODE_ENV === 'development' && !!process.env.VITE_MOCK,
    }),
    tsconfigPaths(),
    react(),
    svg({ svgrOptions: { icon: true } }),
    createHtmlPlugin({
      minify: true,
    }),
  ],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  // base:"/"
  // root: 'src'
});
