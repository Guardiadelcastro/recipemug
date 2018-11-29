#!/usr/bin/env sh
set -x

cd /var/www/recipemug.club
tar zxvf package.tgz -C .
mv build/* .
rm -rf package.tgz build report.html