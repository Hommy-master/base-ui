module.exports = {
  extends: [
    'stylelint-config-standard',          // 官方标准规则
    'stylelint-config-tailwindcss',       // 让 @apply 不报错
  ],
  rules: {
    // 如果你们用 CSS Modules（*.module.css），可以关闭类名命名规则
    'selector-class-pattern': null,
    // 允许使用未知的 at-rule（如 Tailwind 的 @layer）
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen', 'layer'],
      },
    ],
  },
};