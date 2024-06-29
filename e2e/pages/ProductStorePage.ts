import { expect, Locator, Page } from "@playwright/test";
import { assertVisual } from "../../utils/visual/visual";

/**
 * Example class page object model to be executed on BS
 */
export class ProductoStorePage {
  readonly page: Page;
  readonly getStartedLink: Locator;
  readonly gettingStartedHeader: Locator;
  readonly pomLink: Locator;
  readonly locators = {
    inputUser: "input#loginusername",
    inputPassword: "input#loginpassword",
    loginButton: "btn btn-primary",
    logInButtonOption: "a#login2",
  };

  /**
   * Constructor to initialize locators.
   * @param page page instance.
   */
  constructor(page: Page) {
    this.page = page;
    this.getStartedLink = page.locator(".AuthLayout__right-side .AuthLayout__greetings-title", {
      hasText: "Hello again!",
    });
    this.gettingStartedHeader = page.locator(".AuthLayout__right-side .AuthLayout__greetings-subtitle", {
      hasText: "Welcome Back",
    });
    this.pomLink = page.locator("a", { hasText: "Forgot password" });
  }

  async login(user: string, password: string) {
    this.page.locator(this.locators.logInButtonOption).click();
    const userInput = this.page.locator(this.locators.inputUser);
    const passwordInput = this.page.locator(this.locators.inputPassword);
    await userInput.fill(user);
    await passwordInput.fill(password);
    await this.page.locator(this.locators.loginButton).click();
    await this.page.pause();
  }

  async goto() {
    await this.page.goto("https://www.demoblaze.com"); /// aqui va el link de la pagina de prueba
  }

  async getStarted() {
    await this.getStartedLink.first().click();
    await expect(this.gettingStartedHeader).toBeVisible();
  }

  async pageObjectModel() {
    await this.getStarted();
    await this.pomLink.click();
  }

  async verifyLogInOut() {
    await assertVisual(this.page, "lodgerin-page-web-login-out.png", {
      fullPage: true,
      mask: [this.page.locator(".v-main > .AuthLayout")],
    });
  }
  async verifyLogIn() {
    await assertVisual(this.page, "lodgerin-page-web-login.png", {
      fullPage: true,
      mask: [],
    });
  }


}
