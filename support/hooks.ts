import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser } from '@playwright/test';
import { CustomWorld } from './world';

let browser: Browser;

setDefaultTimeout(30 * 1000);

Before(async function (this: CustomWorld) {
    browser = await chromium.launch({
        headless: false
    });

    const context = await browser.newContext();
    this.page = await context.newPage();
});

After(async function () {
    await browser.close();
});