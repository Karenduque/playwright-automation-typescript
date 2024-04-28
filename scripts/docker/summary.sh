#!/bin/bash
RESULT_FILE=$PWD/results.txt

if [ -f "$RESULT_FILE" ]; then
    echo "Test run has passed 🎉"
else
    echo "Test run has failed 😥"
    echo "See the file output.log 🗒️ for full details."
    echo "Or run 'yarn report' for the html 📋 report."
    exit 1
fi
