import { test, expect } from "@playwright/test";

test("Login Setup", async({page}) => {

  await page.goto("https://account.tallyfy.com/login");

  await page.fill('input[type="email"]', "tallyfyautomation@gmail.com");

  await page.fill('input[type="password"]', "A@12345b");

  await page.click('button[type="submit"]');

  //await page.waitForURL(`https://go.tallyfy.com/543353672102507415b5d1bc66ec9064/dashboard`);

  await expect(page).toHaveTitle(/Tallyfy/);

  await page.context().storageState({path: "./playwright/.auth/auth.json"})

})
