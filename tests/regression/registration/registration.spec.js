const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
  
    await page.goto('https://marqup.test.noredlines.com/sign-in');
    await page.click('text=Sign Up here');
    await page.waitForTimeout(3000);

    await page.goto('https://marqup.test.noredlines.com/sign-up');
    await page.waitForTimeout(3000);
    await page.close();
    
});