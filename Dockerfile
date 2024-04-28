FROM mcr.microsoft.com/playwright:v1.43.0

# Target where the test results are created.
VOLUME [ "/target" ]

# Docker image comes with bundled binaries installed
# so, we skip the download of those
# https://playwright.dev/docs/browsers#skip-browser-downloads
ENV PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1

# Location to house the test code
# referenced in scripts/docker/*.sh scripts if you want to change it
WORKDIR /run
COPY package.json package.json
COPY yarn.lock.docker yarn.lock

# Install the dependencies before copying all the test data
RUN yarn
# Copy all the framework src code
COPY . .

# Run the test script, then depending the test output copy the results folders
ENTRYPOINT [ "sh", "/run/scripts/docker/test.sh" ]