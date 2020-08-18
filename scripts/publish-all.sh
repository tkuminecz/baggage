#!/usr/bin/env bash
set -eo pipefail

for pkg in $(ls ./packages/); do
  cd ./packages/${pkg}
  yarn install --frozen-lockfile
  npm publish --public
done;
