#!/bin/bash
set -xe

if [ $TRAVIS_BRANCH == 'travis' ] ; then
  eval "$(ssh-agent -s)"
  ssh-add ~/.ssh/id_rsa

  #cd public
  #git init

  git remote add deploy "travis@206.189.96.128:/var/www/new.recipemug.club"
  git config user.name "travis"
  git config user.email "travis@recipemug.club"

  git add .
  git commit -m "travis deploy"
  git push --force deploy travis -y
else
  echo "Not deploying, since this branch isn't master."
fi