#!/bin/bash

if [[ -n "$1" ]]; then
  commitMessage="$1"
else
  read -p "Enter the commit message: " commitMessage
fi
echo commitMessage

git add .
git commit -m "* $commitMessage"
git push
