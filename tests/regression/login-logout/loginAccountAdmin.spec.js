const { test, expect } = require('@playwright/test');
const { devices } = require('@playwright/test');


test('test', async ({ page }) => {
  
    await page.goto('https://marqup.test.noredlines.com/sign-in');
    console.log("Step1: login")
    await expect(page).toHaveURL('https://marqup.test.noredlines.com/sign-in');
    await page.click('[placeholder="Email"]');
    await page.fill('[placeholder="Email"]', 'iryna.nema+3333@mobindustry.net');
    await page.click('[placeholder="Password"]');
    await page.fill('[placeholder="Password"]', 'Zaq1234567!');
    await page.click('button:has-text("sign in")');
    await expect(page).toHaveURL('https://marqup.test.noredlines.com/dashboard');

    await page.close();
});