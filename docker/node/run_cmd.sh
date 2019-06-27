#!/bin/sh
cd /front
yarn install
case $RUN_CMD in
start) yarn start ;;
test) yarn test ;;
*) echo "Defina um comando válido (start ou test) em 'RUN_CMD.env'"
esac