'use strict';

module.exports = {
  extends: ['./base', './jest', './prettier', './typescript'],
  env: {
    es6: true,
    node: true,
  },
};
