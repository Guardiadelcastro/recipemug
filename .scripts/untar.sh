#!/usr/bin/env sh
set -x

# export NODE_ENV=production
# export NVM_BIN=$HOME/.nvm/versions/node/v6.9.0/bin

cd $REMOTE_NEW_DIR
tar zxvf package.tgz -C .
# mv build/package.json .
# npm i
# npm run build