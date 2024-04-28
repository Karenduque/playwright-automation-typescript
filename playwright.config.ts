import { defineConfig, devices } from "@playwright/test";
import path from "path";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: path.join(__dirname, "e2e/tests"),
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [["list"], ["html", { open: "never" }], ["json", { outputFile: "test-results/test-results.json" }]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://st-users.lodgerin.com/api',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "retain-on-failure",

    screenshot: "only-on-failure",

    video: "off",

    contextOptions: {
      ignoreHTTPSErrors: true,
    },
  },

  expect: {
    toMatchSnapshot: {
      maxDiffPixelRatio: 0.01,
      threshold: 0.2,
      // _comparator: "ssim - cie94", // is in beta right now, coming soon;
    },
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.01,
      threshold: 0.2,
      // _comparator: "ssim - cie94", // is in beta right now, coming soon.
    },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "Desktop Chrome",
      use: { ...devices["Desktop Chrome"] },
      //dependencies: ["setup", "api-test"],
    },
    //{
      //name: "chromium",
     // use: { ...devices["Desktop Chrome"] },
   // },

   // {
    //  name: "firefox",
    //  use: { ...devices["Desktop Firefox"] },
    //},

    //{
   //   name: "webkit",
    //  use: { ...devices["Desktop Safari"] },
   //},
//
    /* Test against mobile viewports. */
    //{
    //  name: "Mobile Chrome",
    //  use: { ...devices["Pixel 5"] },
    //},
    //{
    //  name: "Mobile Safari",
   //   use: { ...devices["iPhone 12"] },
   // },
    /* Test against branded browsers. */
    // {
    //   name: "Microsoft Edge",
    //   use: { ...devices["Desktop Edge"], channel: "msedge" },
    // },
    // {
    //   name: "Google Chrome",
    //   use: { ...devices["Desktop Chrome"], channel: "chrome" },
    // },
  ],
});
