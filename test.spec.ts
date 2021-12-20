import { test , expect } from '@playwright/test'
import { USERS } from './framework'
import { signInPage } from './framework'


test.beforeEach(async ({ page }) => {
    await page.goto('');
});   

test('incorrectEmailValidation @regChecklistnewHigh @login', async ({ page }) => {
    console.log('incorrectEmailValidation');
    const signIn = new signInPage(page);
    await signIn.emailField();
    await signIn.signInButton();
    const locator = page.locator('text=Please enter a valid email address');
    await expect(locator).toHaveText('Please enter a valid email address');
    })