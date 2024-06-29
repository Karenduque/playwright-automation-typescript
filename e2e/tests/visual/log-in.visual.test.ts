import { test, expect } from "@playwright/test";
import { ProductoStorePage } from "../../pages/logInPage";
import { TAGS } from "../../helpers/utils/tags";

test.beforeEach(async ({ page }) => {
  const ProductoStorePage = new ProductoStorePage(page);
  await ProductoStorePage.goto();
});

test.describe(
  "LodGerin page visual testing",
  {
    tag: [TAGS.REGRESSION, TAGS.VISUAL],
  },
  () => {
    test("get started Forgot password link [ @functional ]", async ({
      page,
    }) => {
      // Click the get started link.
      await page.getByRole("link", { name: "Forgot password" }).click();
      // Expects the URL to contain sign-in.
      await expect(page).toHaveURL(/.*sign-in/);
    });

    test("Verify the LodGerin page desing [ @visual ]", async ({ page }) => {
      const ProductoStorePage = new ProductoStorePage(page);
      await ProductoStorePage.verifyLogIn();
    });
  }
);
