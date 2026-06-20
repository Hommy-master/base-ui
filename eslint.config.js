import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: { prettier: prettierPlugin },
    rules: {
      'prettier/prettier': 'error',
      // 你之前习惯的规则可以放这里
    },
    ignores: ['dist', 'node_modules', '*.config.js'],
  },
  prettierConfig, // 关掉与 Prettier 冲突的规则
);