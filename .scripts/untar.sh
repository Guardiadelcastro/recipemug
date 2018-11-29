#!/usr/bin/env sh
set -x

if [ $TRAVIS_BRANCH == 'master' ] ; then
cd /var/www/recipemug.club
tar zxvf package.tgz -C .
mv build/* .
rm -rf package.tgz build report.html

elif [ $TRAVIS_BRANCH == "travis" ] ; then

cd /var/www/new.recipemug.club
tar zxvf package.tgz -C .
mv build/* .
rm -rf package.tgz build report.html

else
  echo "Not deploying, since this branch isn't master."
fi


set -x