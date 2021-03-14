module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript',
    'airbnb-base',
  ],
  plugins: ['vue'],
  rules: {
    'vue/max-attributes-per-line': [1, {
      singleline: 3,
      multiline: {
        max: 1,
        allowFirstLine: false,
      },
    }],
    'space-before-function-paren': [1, 'always'],

    'import/extensions': 0,
    'import/no-unresolved': 0,
  },
};
