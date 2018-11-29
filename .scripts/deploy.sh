#!/bin/bash
set -xe

if [ $TRAVIS_BRANCH == 'travis' ] ; then
  #eval "$(ssh-agent -s)"
  #ssh-add ~/.ssh/id_rsa
tar -czf package.tgz build
scp package.tgz $REMOTE_USER@$REMOTE_HOST:$REMOTE_TEST_DIR
ssh $REMOTE_USER@$REMOTE_HOST 'bash -s' < ./.scripts/untar.sh
  #cd public
  #git init

  #git remote add deploy "travis@206.189.96.128:/var/www/new.recipemug.club"
  #git config user.name "travis"
  #git config user.email "travis@recipemug.club"

  #git add .
  #git commit -m "travis deploy"
  #git push --force deploy master
else
  echo "Not deploying, since this branch isn't master."
fi


set -x

