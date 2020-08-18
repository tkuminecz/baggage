module.exports = {
  extends: 'semantic-release-monorepo',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'eslint',
      },
    ],
  ],
};
