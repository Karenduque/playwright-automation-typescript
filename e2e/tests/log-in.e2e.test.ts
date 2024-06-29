import { test, expect } from "@playwright/test";
import { ProductoStorePage } from "../pages/logInPage";
import { TAGS } from "../helpers/utils/tags";

test.describe("LodGerin page", () => {
  test(
    "LodGerin page contains the information correctly",
    {
      tag: [TAGS.REGRESSION, TAGS.VISUAL],
    },
    async ({ page }) => {
      const ProductoStorePage = new ProductoStorePage(page);
      await ProductoStorePage.goto();
      await ProductoStorePage.getStarted();
    }
  );
});
