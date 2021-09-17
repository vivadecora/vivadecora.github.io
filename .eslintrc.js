module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    './../../decore/eslint-config-vivadecora'
  ],
  plugins: [
  ],
  // add custom rules in decore/eslint-config-vivadecora/.eslintrc.js
  rules: {
    '@typescript-eslint/no-extra-semi': 0,
    '@typescript-eslint/semi': 0,
    '@typescript-eslint/no-unused-vars': 0
  }
}
