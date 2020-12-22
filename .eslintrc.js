module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'linebreak-style': ['off', 'windows'],
    indent: ['error', 2],
    'max-len': ['error', { code: 150 }], // 没行最大长度
    '@typescript-eslint/no-var-requires': ['off'], // 应许使用requires引入文件
    '@typescript-eslint/no-explicit-any': ['off'], // 应许ts中使用any类型
    'no-underscore-dangle': ['off'], // 允许使用下划线
  },
};
