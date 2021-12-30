import { test , expect } from '@playwright/test'
import { Users } from '../../framework'
import { SignInPage } from '../../framework'


test.beforeEach(async ({ page }) => {
    test.setTimeout(120000);
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

    test('sign-inAA @regChecklistnewHigh @login', async ({ page }) => {
        const signIn = new SignInPage(page);
        const users = new Users(page);
        const locator = page.locator('#user-info');
        console.log('login Account Admin');
        await users.AA();
        await signIn.signInButton();
        await expect(page).toHaveURL('/dashboard');
        await expect(locator).toHaveText(['Owner AA W Client test test test testW Client 2 test test test test test test']);
        }),

    test('sign-inAU @regChecklistnewHigh @login', async ({ page }) => {
        const signIn = new SignInPage(page);
        const users = new Users(page);
        const locator = page.locator('#user-info');
        console.log('login Account User');
        await users.AU();
        await signIn.signInButton();
        await expect(page).toHaveURL('/clients/268');
        await expect(locator).toHaveText(['Account user W client 2W Client 2 test test test test test test']);
        }),

    test('homeButton @regChecklistnewLow @login', async ({ page }) => {
        console.log('homeButtonValidation');
        const signIn = new SignInPage(page);
        const locator = page.locator('#login-sign-in');
        await signIn.homeButton();
        await expect(page).toHaveURL('/sign-in');
        await expect(locator).toHaveId('login-sign-in');
        }),

    test('forgotPasswordLink @regChecklistnewMedium @login', async ({ page }) => {
        console.log('forgotPasswordValidation');
        const signIn = new SignInPage(page);
        const locator = page.locator('#forgot-password-send');
        await signIn.forgotPasswordLink();
        await expect(page).toHaveURL('/forgot-password');
        await expect(locator).toHaveId('forgot-password-send');
        }),

    test('signUpHere @regChecklistnewHigh @login', async ({ page }) => {
        console.log('signUpHereValidation');
        const signIn = new SignInPage(page);
        const locator = page.locator('#registration-signup');
        await signIn.signUpLink();
        await expect(page).toHaveURL('/sign-up');
        await expect(locator).toHaveId('registration-signup');
        }),

     test('eyeToggle @regChecklistnewLow @login', async ({ page }) => {
        console.log('eyeToggleValidation');
        const signIn = new SignInPage(page);
        const locator = page.locator('#toggle-show-pass');
        await signIn.passwordField();
        await signIn.eyeToggle();
        await expect(locator).toHaveClass('toggle-ps hide');
        await signIn.eyeToggle();
        await expect(locator).toHaveClass('toggle-ps');
        }),
        
     test('placeholdersValidation @regChecklistnewLow @login', async ({ page }) => {
        console.log('placeholdersValidation');
        const email = page.locator('[placeholder="Email"]');
        const pass = page.locator('[placeholder="Password"]');
        await expect(email).toHaveId('mat-input-0');
        await expect(pass).toHaveId('mat-input-1');
            
        }),

     test('emptyFieldsValidation @regChecklistnewMedium @login', async ({ page }) => {
        console.log('emptyFieldsValidation');
        const signIn = new SignInPage(page);
        const locator = page.locator('text=Please fill in this field');
        await signIn.signInButton();
        await expect(locator).toHaveText(['Please fill in this field', 'Please fill in this field']);
    }),

    test('incorrectEmailValidation @regChecklistnewHigh @login', async ({ page }) => {
        console.log('incorrectEmailValidation');
        const signIn = new SignInPage(page);
        const locator = page.locator('text=Please enter a valid email address');
        await signIn.emailField();
        await signIn.signInButton();
        await expect(locator).toHaveText(['Please enter a valid email address']);
    }),

    test('passwordLessThen6 @regChecklistnewHigh @login', async ({ page }) => {
        console.log('passwordLessThen6');
        const signIn = new SignInPage(page);
        const locator = page.locator('text=Password must be at least 6 characters long');
        await signIn.passwordField();
        await signIn.signInButton();
        await expect(locator).toHaveText(['Password must be at least 6 characters long']);
    }),

    test('inactivePendingNotexistUsers @regChecklistnewHigh @login', async ({ page }) => {
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

 

