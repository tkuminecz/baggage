'use strict';

module.exports = {
  extends: ['plugin:prettier/recommended'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['prettier'],
    },
  ],
};
