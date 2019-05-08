#!/bin/bash
echo 'begin to git push...'
git add .
git commit -m $1
git push
echo 'git push completed!'