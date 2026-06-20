/// <reference types="vitest/config" />
import { defineConfig, loadEnv } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import svg from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';
import { viteMockServe } from 'vite-plugin-mock';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    clearScreen: false,
    server: {
      port: 8008,
      proxy: {
        '/openapi': {
          target: env.VITE_API_PROXY_TARGET || 'http://127.0.0.1:3000',
          changeOrigin: true,
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
        mockPath: 'mock',
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
    test: {
      environment: 'jsdom',
      setupFiles: './src/setupTests.ts',
      include: ['src/**/*.{test,spec}.{ts,tsx}'],
    },
  };
});
