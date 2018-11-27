# #!/bin/bash

# # print outputs and exit on first failure
# set -xe

# if [ $TRAVIS_BRANCH == "travis" ] ; then

#     # setup ssh agent, git config and remote
#     eval "$(ssh-agent -s)"
#     ssh-add ~/.ssh/travis_rsa
#     git remote add deploy "travis@206.189.96.128:/var/www/new.recipemug.club"
#     git config user.name "travis"
#     git config user.email "travis@recipemug.club"

#     # commit compressed files and push it to remote
#     rm -f .gitignore
#     # cp .travis/deployignore .gitignore
#     git add .
#     git status # debug
#     git commit -m "Travis eploy compressed files"
#     git push -f deploy HEAD:master

# else

#     echo "No deploy script for branch '$TRAVIS_BRANCH'"

# fi

#!/bin/bash
set -xe

if [ $TRAVIS_BRANCH == 'travis' ] ; then
  eval "$(ssh-agent -s)"
  ssh-add ~/.ssh/travis_rsa

  ## cd public
  git init

  git remote add deploy "travis@206.189.96.128:/var/www/new.recipemug.club"
  git config user.name "travis"
  git config user.email "travis@recipemug.club"

  git add .
  git commit -m "Travis deploy"
  git push --force deploy travis
else
  echo "Not deploying, since this branch isn't travis."
fi