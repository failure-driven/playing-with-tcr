#!/usr/bin/env bash

TEST_OUTPUT=tmp/tcr_ouput.log

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m'

test () {
  `python3 -m unittest discover fizzbuzz/test/` > $TEST_OUTPUT
}

commit () {
  cat $TEST_OUTPUT
  echo -e "${GREEN}Green!!!${NC}"
  git add -A
  git commit -m "$(date +%s)"
  exit 0
}

revert () {
  echo -e "${RED}Revert =(${NC}"
  git reset --hard
  git clean -fd
  exit 1
}

test && commit || revert
