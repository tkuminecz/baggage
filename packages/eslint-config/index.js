'use strict'

module.exports = {
  extends: [
    '@tkuminecz/eslint-config/typescript',
    '@tkuminecz/eslint-config/prettier',
    'plugin:jest/recommended',
  ],
  plugins: ['jest'],
  env: {
    es6: true,
    node: true,
  },
}
