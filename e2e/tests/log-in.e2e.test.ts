import { test, expect } from "@playwright/test";
import { LodGerinPage } from "../pages/logInPage";
import { TAGS } from "../helpers/utils/tags";

test.describe("LodGerin page", () => {
  test(
    "LodGerin page contains the information correctly",
    {
      tag: [TAGS.REGRESSION, TAGS.VISUAL],
    },
    async ({ page }) => {
      const lodGerinPage = new LodGerinPage(page);
      await lodGerinPage.goto();
      await lodGerinPage.getStarted();
    }
  );
});
