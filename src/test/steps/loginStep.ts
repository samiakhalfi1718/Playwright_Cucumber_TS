import { Given ,When , Then ,setDefaultTimeout} from "@cucumber/cucumber";
import{chromium,Page,Browser, expect}from "@playwright/test";
import{fixture}from "../../hooks/pageFixture";
setDefaultTimeout(60 * 4000 * 2)
Given('User navigates to the application', async function () {
  await fixture.page.goto("https://bookcart.azurewebsites.net/");
  await fixture.page.waitForTimeout(4000);
});

Given('User click on the login link', async function () {
  await fixture.page.locator("//span[text()='Login']").click();
});

Given('User enter the username as {string}', async function (username) {
  await fixture.page.locator("input[formcontrolname='username']").type(username);
});

Given('User enter the password as {string}', async function (password) {
  await fixture.page.locator("input[formcontrolname='password']").type(password);
});

When('User click on the login button', async function () {
  await fixture.page.locator("button[color='primary']").click();
  await fixture.page.waitForLoadState();
});

Then('Login should be success', async function () {
  const text= await fixture.page.locator("//button[contains(@class,'mat-focus-indicator mat-menu-trigger')]//span[1]").textContent();
  console.log("username is "+ text);
});

When('Login should fail', async function () {
  const msgFail= fixture.page.locator("mat-error[role='alert']");
  await expect(msgFail).toBeVisible();
});