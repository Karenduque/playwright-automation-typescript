#!/bin/bash
cd /run

cp -R e2e /target/

# remove old report artifacts
rm -rf /target/playwright-report /target/output.log /target/results.txt
# copy new report artifacts
cp -R playwright-report /target/ 2>/dev/null || true
cp -R test-results /target/ 2>/dev/null || true
cp output.log /target/output.log 2>/dev/null || true
cp results.txt /target/results.txt 2>/dev/null || true

# persist docker yarn.lock
cp yarn.lock /target/yarn.lock.docker
