import { test , expect } from '@playwright/test'
import { USERS } from './framework'
import { signInPage } from './framework'


test.beforeEach(async ({ page }) => {
    await page.goto('');
});   

test('eyeToggle @regChecklistnewLow @login', async ({ page }) => {
    console.log('signUpHereValidation');
    const signIn = new signInPage(page);
    await signIn.passwordField();
    await signIn.eyeVisible();
    const locator = page.locator('text=EmailPasswordsign in >> a');
    await expect(locator).toHaveClass('toggle-ps hide');
    await signIn.eyeHide();
    await expect(locator).toHaveClass('toggle-ps');
})