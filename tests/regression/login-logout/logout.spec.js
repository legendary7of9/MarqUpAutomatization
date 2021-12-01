const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
  
    console.log("Step1: login")
    await page.goto('https://marqup.test.noredlines.com/sign-in');
    await page.click('[placeholder="Email"]');
    await page.fill('[placeholder="Email"]', 'sadmin1@marqup.com');
    await page.click('[placeholder="Password"]');
    await page.fill('[placeholder="Password"]', '123qwe');
    await page.click('button:has-text("sign in")');

    await page.click('text=Sign Out');
    await page.click('text=Sign Out');
    console.log("Step2: logout")
    await expect(page).toHaveURL('https://marqup.test.noredlines.com/sign-in');
    await page.close();
});