import { test , expect } from '@playwright/test'
import { Users } from '../../framework'
import { SignInPage } from '../../framework'


test.beforeEach(async ({ page }) => {
    await page.goto('');

}); 
     test('sign-inSA @regChecklistnewHigh @login', async ({ page }) => {
        const signIn = new SignInPage(page);
        const users = new Users(page);
        const locator = page.locator('#user-info');
        console.log('login Solution Admin');
        await users.SA();
        await signIn.signInButton();
        await expect(page).toHaveURL('/dashboard');
        await expect(locator).toHaveText(['sAdmin1 sAdmin']);
        }),

    test('sign-inAA @regChecklistNewHigh @login', async ({ page }) => {
        const signIn = new SignInPage(page);
        const users = new Users(page);
        const locator = page.locator('#user-info');
        console.log('login Account Admin');
        await users.AA();
        await signIn.signInButton();
        await expect(page).toHaveURL('/dashboard');
        await expect(locator).toHaveText(['AA Client HTClient 1HT(test)']);
        }),

    test('sign-inAU @regChecklistNewHigh @login', async ({ page }) => {
        const signIn = new SignInPage(page);
        const users = new Users(page);
        const locator = page.locator('#user-info');
        console.log('login Account User');
        await users.AU();
        await signIn.signInButton();
        await expect(page).toHaveURL('/clients/265');
        await expect(locator).toHaveText(['account User TestClient 1HT(test)']);
        }),

    test('homeButton @regChecklistNewLow @login', async ({ page, browserName }) => {
        test.skip(browserName === 'chromium');
        test.skip(browserName === 'firefox');
        console.log('homeButtonValidation');
        const signIn = new SignInPage(page);
        const locator = page.locator('#login-sign-in');
        await signIn.homeButton();
        await expect(page).toHaveURL('/sign-in');
        await expect(locator).toHaveId('login-sign-in');
        }),

    test('forgotPasswordLink @regChecklistNewMedium @login', async ({ page, browserName }) => {
        test.skip(browserName === 'webkit');
        test.skip(browserName === 'firefox');
        console.log('forgotPasswordValidation');
        const signIn = new SignInPage(page);
        const locator = page.locator('#forgot-password-send');
        await signIn.forgotPasswordLink();
        await expect(page).toHaveURL('/forgot-password');
        await expect(locator).toHaveId('forgot-password-send');
        }),

    test('signUpHere @regChecklistNewHigh @login', async ({ page }) => {
        console.log('signUpHereValidation');
        const signIn = new SignInPage(page);
        const locator = page.locator('#registration-signup');
        await signIn.signUpLink();
        await expect(page).toHaveURL('/sign-up');
        await expect(locator).toHaveId('registration-signup');
        }),

     test('eyeToggle @regChecklistNewLow @login', async ({ page, browserName }) => {
        test.skip(browserName === 'webkit');
        test.skip(browserName === 'chromium');
        console.log('eyeToggleValidation');
        const signIn = new SignInPage(page);
        const locator = page.locator('#toggle-show-pass');
        await signIn.passwordField();
        await signIn.eyeToggle();
        await expect(locator).toHaveClass('toggle-ps hide');
        await signIn.eyeToggle();
        await expect(locator).toHaveClass('toggle-ps');
        }),
        
     test('placeholdersValidation @regChecklistNewLow @login', async ({ page, browserName }) => {
        test.skip(browserName === 'chromium');
        test.skip(browserName === 'firefox');
        console.log('placeholdersValidation');
        const email = page.locator('[placeholder="Email"]');
        const pass = page.locator('[placeholder="Password"]');
        await expect(email).toHaveId('mat-input-0');
        await expect(pass).toHaveId('mat-input-1');
            
        }),

     test('emptyFieldsValidation @regChecklistNewMedium @login', async ({ page, browserName }) => {
        test.skip(browserName === 'webkit');
        test.skip(browserName === 'firefox');
        console.log('emptyFieldsValidation');
        const signIn = new SignInPage(page);
        const locator = page.locator('text=Please fill in this field');
        await signIn.signInButton();
        await expect(locator).toHaveText(['Please fill in this field', 'Please fill in this field']);
    }),

    test('incorrectEmailValidation @regChecklistNewHigh @login', async ({ page }) => {
        console.log('incorrectEmailValidation');
        const signIn = new SignInPage(page);
        const locator = page.locator('text=Please enter a valid email address');
        await signIn.emailField();
        await signIn.signInButton();
        await expect(locator).toHaveText(['Please enter a valid email address']);
    }),

    test('passwordLessThen6 @regChecklistNewHigh @login', async ({ page }) => {
        console.log('passwordLessThen6');
        const signIn = new SignInPage(page);
        const locator = page.locator('text=Password must be at least 6 characters long');
        await signIn.passwordField();
        await signIn.signInButton();
        await expect(locator).toHaveText(['Password must be at least 6 characters long']);
    }),

    test('inactivePendingNotexistUsers @regChecklistNewHigh @login', async ({ page }) => {
        const signIn = new SignInPage(page);
        const users = new Users(page);
        const locator = page.locator('text=The user name or password is incorrect');
        console.log('inactiveUser');
        await users.inactiveUser();
        await signIn.signInButton();
        await page.waitForSelector('text=The user name or password is incorrect');
        await expect(locator).toHaveText(['The user name or password is incorrect']);
        await page.reload();
        console.log('pendingUser');
        await users.pendingUser();
        await signIn.signInButton();
        await page.waitForSelector('text=The user name or password is incorrect');
        await expect(locator).toHaveText(['The user name or password is incorrect']);
        await page.reload();
        console.log('notExistUser');
        await users.notexistingUser();
        await signIn.signInButton();
        await expect(locator).toHaveText(['The user name or password is incorrect']);
    })

 

