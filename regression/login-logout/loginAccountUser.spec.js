const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
  
    await page.goto('https://marqup.test.noredlines.com/sign-in');
    await expect(page).toHaveURL('https://marqup.test.noredlines.com/sign-in');
    await page.click('[placeholder="Email"]');
    await page.fill('[placeholder="Email"]', 'iryna.nema+485220@mobindustry.net');
    await page.click('[placeholder="Password"]');
    await page.fill('[placeholder="Password"]', 'Zaq1234567!');
    await page.click('button:has-text("sign in")');
    await expect(page).toHaveURL('https://marqup.test.noredlines.com/dashboard');

    await page.click('span');
    await page.click('text=Sign Out');
    await expect(page).toHaveURL('https://marqup.test.noredlines.com/sign-in');
    await page.close();
});