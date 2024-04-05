import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Page, Browser, expect } from '@playwright/test';
import { pageFixture } from "../../hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2);

Given('User navigates to the application', async function () {
    await pageFixture.page.goto(process.env.BASEURL);
    pageFixture.logger.info("Navigated to the application");
})

Given('User click on the login link', async function () {
    await pageFixture.page.locator("//span[text()='Login']").click();
});

Given('User enter the username as {string}', async function (username) {
    await pageFixture.page.locator("input[formcontrolname='username']").type(username);
});

Given('User enter the password as {string}', async function (password) {
    await pageFixture.page.locator("input[formcontrolname='password']").type(password);
})

When('User click on the login button', async function () {
    await pageFixture.page.locator("button[color='primary']").click();
});

Then('Login should be success', async function () {
    const user = pageFixture.page.locator("//button[contains(@class,'mat-focus-indicator mat-menu-trigger')]//span[1]");
    await expect(user).toBeVisible();
})

When('Login should fail', async function () {
    const failureMesssage = pageFixture.page.locator("mat-error[role='alert']");
    await expect(failureMesssage).toBeVisible();
});