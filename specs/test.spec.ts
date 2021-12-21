import { test , expect } from '@playwright/test'
import { USERS } from '../framework'
import { signInPage } from '../framework'


test.beforeEach(async ({ page }) => {
    await page.goto('');
});   

test.skip('placeholdersValidation @regChecklistnewLow ', async ({ page }) => {
    console.log('placeholdersValidation');
    const email = page.locator('[placeholder="Email"]');
    await expect(email).toHaveId('mat-input-0');
    const pass = page.locator('[placeholder="Password"]');
    await expect(pass).toHaveId('mat-input-1');

}),

test.skip('signUpHere @regChecklistnewHigh @login', async ({ page }) => {
    console.log('signUpHereValidation');
    const signIn = new signInPage(page);
    const locator = page.locator('#registration-signup');
    await signIn.signUpLink();
    await expect(page).toHaveURL('/sign-up');
    await expect(locator).toHaveId('registration-signup');
    }),

    test('passwordLessThen6 @regChecklistnewHigh @login', async ({ page }) => {
        console.log('passwordLessThen6');
        const signIn = new signInPage(page);
        const locator = page.locator('text=Password must be at least 6 characters long');
        await signIn.passwordField();
        await signIn.signInButton();
        await expect(locator).toHaveText(['Password must be at least 6 characters long']);
    })