import { expect, type Locator, type Page } from "@playwright/test";
//require("dotenv").config();

export class NavigateToHomePage {
  readonly page: Page;
 // readonly emailField: Locator;
 // readonly passwordField: Locator;
 // readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
   // this.emailField = page.locator('input[type="email"]');
   // this.passwordField = page.locator('input[type="password"]');
   // this.loginButton = page.locator('button[type="submit"]');
  }

  async navigateToHomePage() {
    await this.page.goto("https://go.tallyfy.com/543353672102507415b5d1bc66ec9064/dashboard");

   // await this.emailField.fill(`${process.env.EMAIL_ID}`);

   // await this.passwordField.fill(`${process.env.PASSWORD}`);

   // await this.loginButton.click();

   // await this.page.waitForURL(
   //   `https://go.tallyfy.com/${process.env.ORG_ID}/dashboard`
   // );

    await expect(this.page).toHaveTitle(/Tallyfy/);
  }
}
