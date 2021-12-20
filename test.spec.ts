import { test , expect } from '@playwright/test'
import { USERS } from './framework'
import { signInPage } from './framework'


test.beforeEach(async ({ page }) => {
    await page.goto('');
});   

test('homeButton @regChecklistnewLow @login', async ({ page }) => {
    console.log('homeButtonValidation');
    const signIn = new signInPage(page);
    await signIn.homeButton();
    await expect(page).toHaveURL('/sign-in');
    const locator = page.locator('#login-sign-in');
    await expect(locator).toHaveClass('btn btn-submit-authorize');
});