const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
  
    await page.goto('https://marqup.test.noredlines.com/sign-in');
    await page.click('[placeholder="Email"]');
    await page.fill('[placeholder="Email"]', 'sadmin1@marqup.com');
    await page.click('[placeholder="Password"]');
    await page.fill('[placeholder="Password"]', '123qwe');
    await page.click('button:has-text("sign in")');
    await page.close();
});