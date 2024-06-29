import { test, expect } from "@playwright/test";
import { ProductoStorePage } from "../pages/ProductStorePage";
import { TAGS } from "../helpers/utils/tags";
import { users } from "../helpers/utils/users";

test.describe(
  "LogIn ProductStore page visual testing",
  () => {
    test.beforeEach(async ({ page }) => {
      let log_in_page = new ProductoStorePage(page);
      await log_in_page.goto();
    });
    test.only("LogIn", async ({
      page,
    }) => {
      const log_in_page = new ProductoStorePage(page);
      await log_in_page.login(users.user, users.password);
    });
  }
);
