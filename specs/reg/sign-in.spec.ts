import { test , expect } from '@playwright/test'
import { USERS } from '../../framework'
import { signInPage } from '../../framework'


test.beforeEach(async ({ page }) => {
    await page.goto('');

});    

    test('sign-inSA @regChecklistnewHigh @login', async ({ page }) => {
            const signIn = new signInPage(page);
            const users = new USERS(page);
            console.log('login Solution Admin');
            await users.SA();
            await signIn.signInButton();
            await expect(page).toHaveURL('/dashboard');
            const locator = page.locator('#user-info');
            await expect(locator).toHaveText(['sAdmin1 sAdmin']);
    }),

    test.skip('sign-inAA @regChecklistnewHigh @login', async ({ page }) => {
            const signIn = new signInPage(page);
            const users = new USERS(page);
            console.log('login Account Admin');
            await users.AA();
            await signIn.signInButton();
            await expect(page).toHaveURL('/dashboard');
            const locator = page.locator('#user-info');
            await expect(locator).toHaveText(['Owner AA W Client test test test testW Client 2 test test test test test test']);
    }),

    test.skip('sign-inAU @regChecklistnewHigh @login', async ({ page }) => {
            const signIn = new signInPage(page);
            const users = new USERS(page);
            console.log('login Account User');
            await users.AU();
            await signIn.signInButton();
            await expect(page).toHaveURL('/clients/268');
            const locator = page.locator('#user-info');
            await expect(locator).toHaveText(['Account user W client 2W Client 2 test test test test test test']);
    }),

    test.skip('homeButton @regChecklistnewLow @login', async ({ page }) => {
        console.log('homeButtonValidation');
        const signIn = new signInPage(page);
        await signIn.homeButton();
        await expect(page).toHaveURL('/sign-in');
        const locator = page.locator('#login-sign-in');
        await expect(locator).toHaveClass('btn btn-submit-authorize');
    })
