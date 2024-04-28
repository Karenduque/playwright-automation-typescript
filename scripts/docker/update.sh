#!/bin/bash
COMMAND=$0
TAGS=$1

rm -rf results.txt output.log
echo "Running TEST with UPDATE SNAPSHOTS"

if [ -z $COMMAND ]; then
    echo "COMMAND is not provided. Please specifi a COMMAND to be executed"
    exit 1
fi

mkfifo pipe
tee output.log <pipe &

if [ -z $TAGS ]; then
    echo "Running with all test..."
    npm run test:e2e:update >pipe
else
    echo "Running TAGS=$TAGS ..."
    npm run test:e2e:update -- --grep $TAGS >pipe
fi

if [ $? -eq 0 ]; then
    echo "PASS $(date)" >results.txt
fi

sh /run/scripts/docker/result.sh
