#!/bin/bash

set -x
check=$(prettier --list-different .)

if [ -z "$check" ]; then
  echo "########################################"
  echo "Prettier passed, proceeding with commit"
  echo "########################################"
  exit 0
fi

echo "$check" | xargs ./node_modules/.bin/prettier --ignore-unknown --write 2> /dev/null

if [ $? -eq 1 ]; then
  echo "########################################"
  echo "Prettier failed also during the write step. Please fix this mess manually"
  echo "########################################"
  exit 1
fi
echo "########################################"
echo "Prettier failed but has fixed the errors, try to commit again"
echo "########################################"
exit 1

