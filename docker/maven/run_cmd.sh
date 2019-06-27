#!/bin/bash
cd /back
case $RUN_CMD in
start) mvn spring-boot:run ;;
test) mvn test ;;
*) echo "Defina um comando válido (start ou test) em 'RUN_CMD.env'"
esac