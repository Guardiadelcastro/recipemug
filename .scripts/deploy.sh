#!/bin/bash
set -xe

if [ $TRAVIS_BRANCH == 'master' ] ; then

tar -czf package.tgz build
scp package.tgz $REMOTE_USER@$REMOTE_HOST:$REMOTE_PROD_DIR
rsync -rauz src/assets/ $REMOTE_USER@$REMOTE_HOST:$REMOTE_ASSETS_DIR
ssh $REMOTE_USER@$REMOTE_HOST 'bash -s' < ./.scripts/deploy-prod.sh

elif [ $TRAVIS_BRANCH == "develop" ] ; then

tar -czf package.tgz build
rsync build/ $REMOTE_USER@$REMOTE_HOST:$REMOTE_DEV_DIR
rsync -rauz src/assets/ $REMOTE_USER@$REMOTE_HOST:$REMOTE_ASSETS_DIR
# ssh $REMOTE_USER@$REMOTE_HOST 'bash -s' < ./.scripts/deploy-dev.sh

else
  echo "Not deploying, since this branch isn't master."
fi


set -x
