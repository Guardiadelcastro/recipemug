#!/bin/bash
set -xe

if [ $TRAVIS_BRANCH == 'master' ] ; then

tar -czf package.tgz build
scp package.tgz $REMOTE_USER@$REMOTE_HOST:$REMOTE_PROD_DIR
ssh $REMOTE_USER@$REMOTE_HOST 'bash -s' < ./.scripts/deploy-prod.sh

elif [ $TRAVIS_BRANCH == "travis" ] ; then

tar -czf package.tgz build
scp package.tgz $REMOTE_USER@$REMOTE_HOST:$REMOTE_DEV_DIR
ssh $REMOTE_USER@$REMOTE_HOST 'bash -s' < ./.scripts/deploy-dev.sh

else
  echo "Not deploying, since this branch isn't master."
fi


set -x
