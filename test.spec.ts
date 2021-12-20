import { test , expect } from '@playwright/test'
import { USERS } from './framework'
import { signInPage } from './framework'


test.beforeEach(async ({ page }) => {
    await page.goto('');
});   

test('signUpHere @regChecklistnewMedium @login', async ({ page }) => {
    console.log('signUpHereValidation');
    const signIn = new signInPage(page);
    await signIn.signUpLink();
    await expect(page).toHaveURL('/sign-up');
    const locator = page.locator('#registration-signup');
    await expect(locator).toHaveId('registration-signup');
})