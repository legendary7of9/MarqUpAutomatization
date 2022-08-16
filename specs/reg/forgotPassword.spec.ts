import { test , expect } from '@playwright/test'
import { SignInPage } from '../../framework'
import { ForgotPasswordPage } from '../../framework'


test.beforeEach(async ({ page }) => {
    await page.goto('');
});

test('emailField @regChecklistnewMedium @forgotPassword', async ({ page }) => {
    const signIn = new SignInPage(page);
    const emailField = page.locator('#forgot-password-email .mat-input-element');
    console.log('forgotPassword Email Field');
    await signIn.forgotPasswordLink();
    await expect(emailField).toHaveAttribute('placeholder', 'Email');
    await expect(emailField).toHaveAttribute('pattern', '[a-zA-Z0-9_.\\+-]{1,}@[0-9a-zA-Z.-]{1,}[.]{1}[a-zA-Z]{2,}');
});

test('displayingEmailFieldPlaceholder @regChecklistnewLow @forgotPassword', async ({ page }) => {
    const signIn = new SignInPage(page);
    const forgotPassword = new ForgotPasswordPage(page);
    const emailField = page.locator('#forgot-password-email .mat-input-element');
    console.log('forgotPassword Displaying Email Field Placeholder');
    await signIn.forgotPasswordLink();
    await expect(emailField).toHaveClass('mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-pristine ng-invalid');
    await forgotPassword.emailFieldFill();
    await expect(emailField).toHaveClass('mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-dirty ng-valid');
});

test('validationOfTheSendButton @regChecklistnewHigh @forgotPassword', async ({ page }) => {
    const signIn = new SignInPage(page);
    const forgotPassword = new ForgotPasswordPage(page);
    const tooltip = page.locator('.mat-snack-bar-container');
    const tooltipText = page.locator('.mat-simple-snackbar');
    const resetMassageRow = page.locator('.messagelist-row-link >> nth=0');
    const frame = page.locator('.messagedata-iframe');
    const frameResetPasswordButton = page.frameLocator('.messagedata-iframe').locator('.mail-btn');
    const framePasswordLink = page.frameLocator('.messagedata-iframe').locator('.content');
    const authorizedPopup = page.locator('.authorized-popup');
    console.log('forgotPassword Validation Of The Send Button');
    await signIn.forgotPasswordLink();
    await forgotPassword.emailFieldFill();
    await forgotPassword.sendButtonClick();
    await page.waitForSelector('.mat-snack-bar-container');
    await expect(tooltip).toBeVisible();
    await expect(tooltipText).toHaveText('Email has been sent successfully');
    await page.waitForURL('/sign-in');
    await expect(page).toHaveURL('/sign-in');
    await page.waitForTimeout(30000);
    await page.goto('https://maildrop.cc/inbox/accountadmin4');
    await page.waitForSelector('.messagelist-row-link >> nth=0');
    await expect(resetMassageRow).toBeVisible();
    await page.locator('.messagelist-row-link >> nth=0').click(),
    await page.waitForTimeout(2000);
    await expect(frame).toBeVisible();
    await expect(frameResetPasswordButton).toBeVisible();
    await expect(frameResetPasswordButton).toHaveText('Reset Password');
    await expect(framePasswordLink).toBeVisible();
    await expect(framePasswordLink).toContainText('https://marqup.test.noredlines.com/reset-password?token=');
    await page.goto('https://marqup.test.noredlines.com/reset-password?token=VkJiU4l_8UUAk-chqyw9qx5Qoe4OciRj');
    await expect(authorizedPopup).toBeVisible();
    await expect(authorizedPopup).toContainText('This link has been expired');
});

test('validationOfTheSendButtonEmptyEmailField @regChecklistnewMedium @forgotPassword', async ({ page }) => {
    const signIn = new SignInPage(page);
    const forgotPassword = new ForgotPasswordPage(page);
    const error = page.locator('#forgot-password-email mat-error');
    console.log('forgotPassword Validation Of The Send Button Empty Email Field');
    await signIn.forgotPasswordLink();
    await forgotPassword.emailFieldEmptyFill();
    await forgotPassword.sendButtonClick();
    await expect(error).toBeVisible();
    await expect(error).toHaveText(' Please fill in this field ');
});

test('validationOfTheSendButtonIncorrectEmailFormat @regChecklistnewHigh @forgotPassword', async ({ page }) => {
    const signIn = new SignInPage(page);
    const forgotPassword = new ForgotPasswordPage(page);
    const error = page.locator('#forgot-password-email mat-error');
    console.log('forgotPassword Validation Of The Send Button Incorrect Email Format');
    await signIn.forgotPasswordLink();
    await forgotPassword.incorrectEmailFieldFill();
    await forgotPassword.sendButtonClick();
    await expect(error).toBeVisible();
    await expect(error).toHaveText(' Please enter a valid email address ');
});

test('validationOfTheArrow/LinkBack @regChecklistnewMedium @forgotPassword', async ({ page }) => {
    const signIn = new SignInPage(page);
    const forgotPassword = new ForgotPasswordPage(page);
    console.log('forgotPassword Validation Of The Arrow/Link Back');
    await signIn.forgotPasswordLink();
    await forgotPassword.backButtonClick();
    await expect(page).toHaveURL('/sign-in');
    await signIn.forgotPasswordLink();
    await forgotPassword.backToSignInLinkClick();
    await expect(page).toHaveURL('/sign-in');
});

test('emailInfoForResetPasswordProcess @regChecklistnewLow @forgotPasswordResetPassword/SetUpPassword', async ({ page }) => {
    const signIn = new SignInPage(page);
    const forgotPassword = new ForgotPasswordPage(page);
    const messageSubject = page.locator('.messagelist-subject >> nth=0');
    const iframeHeader = page.frameLocator('.messagedata-iframe').locator('.header');
    const iframeResetButton = page.frameLocator('.messagedata-iframe').locator('.mail-btn');
    const iframeResetLogo = page.frameLocator('.messagedata-iframe').locator('.logo');
    const iframeResetBody = page.frameLocator('.messagedata-iframe').locator('.content');
    const iframeResetFooter = page.frameLocator('.messagedata-iframe').locator('.footer');
    console.log('forgotPasswordResetPassword/SetUpPassword Email Info For Reset Password Process');
    await signIn.forgotPasswordLink();
    await forgotPassword.emailFieldFill();
    await forgotPassword.sendButtonClick();
    await page.waitForSelector('.mat-snack-bar-container');
    await page.waitForURL('/sign-in');
    await page.waitForTimeout(30000);
    await page.goto('https://maildrop.cc/inbox/accountadmin4');
    await page.waitForSelector('.messagelist-row-link >> nth=0');
    await expect(messageSubject).toBeVisible();
    await expect(messageSubject).toHaveText('Password reset for MARQUP');
    await page.locator('.messagelist-row-link >> nth=0').click(),
    await page.waitForTimeout(2000);
    await expect(iframeHeader).toBeVisible();
    await expect(iframeHeader).toHaveText('Reset Password');
    await expect(iframeResetButton).toBeVisible();
    await expect(iframeResetButton).toHaveText('Reset Password');
    await expect(iframeResetLogo).toBeVisible();
    await expect(iframeResetBody).toBeVisible();
    await expect(iframeResetBody).toContainText('Hello AccountAdimnThird,');
    await expect(iframeResetBody).toContainText('Follow the link below to reset your password:');
    await expect(iframeResetBody).toContainText('https://marqup.test.noredlines.com/reset-password?token=');
    await expect(iframeResetFooter).toBeVisible();
    await expect(iframeResetFooter).toContainText(' If you have questions, please visit ');
    await expect(iframeResetFooter).toContainText('www.marqup.noredlines.com');
});

test('validationOfResetPasswordButton/Link @regChecklistnewHigh @forgotPasswordResetPassword/SetUpPassword', async ({ page }) => {
    const signIn = new SignInPage(page);
    const forgotPassword = new ForgotPasswordPage(page);
    const resetPasswordButton = page.locator('#reset-password-reset');
    console.log('forgotPasswordResetPassword/SetUpPassword Validation Of Reset Password Button/Link');
    await signIn.forgotPasswordLink();
    await forgotPassword.emailFieldFill();
    await forgotPassword.sendButtonClick();
    await page.waitForSelector('.mat-snack-bar-container');
    await page.waitForURL('/sign-in');
    await page.waitForTimeout(30000);
    await page.goto('https://maildrop.cc/inbox/accountadmin4');
    await page.waitForSelector('.messagelist-row-link >> nth=0');
    await page.locator('.messagelist-row-link >> nth=0').click(),
    await page.waitForTimeout(2000);
    const resetButtonLink = await page.frameLocator('.messagedata-iframe').locator('.mail-btn').getAttribute('href');
    await page.goto(resetButtonLink);
    await expect(page.url()).toContain('/reset-password?token=');
    await expect(resetPasswordButton).toBeVisible();
    await expect(resetPasswordButton).toHaveText('reset');
});

test('openingTheResetPasswordAfter30min @regChecklistnewMedium @forgotPasswordResetPassword/SetUpPassword', async ({ page }) => {
    const authorizedPopup = page.locator('.authorized-popup');
    console.log('forgotPasswordResetPassword/SetUpPassword Opening The Reset Password After 30min');
    await page.goto('https://marqup.test.noredlines.com/reset-password?token=VkJiU4l_8UUAk-chqyw9qx5Qoe4OciRj');
    await expect(authorizedPopup).toBeVisible();
    await expect(authorizedPopup).toContainText('This link has been expired');
});

test('validationHomeButtonResetPasswordPage @regChecklistnewLow @forgotPasswordResetPassword/SetUpPassword', async ({ page }) => {
    const signIn = new SignInPage(page);
    const forgotPassword = new ForgotPasswordPage(page);
    console.log('forgotPasswordResetPassword/SetUpPassword Validation Home Button Reset Password Page');
    await signIn.forgotPasswordLink();
    await forgotPassword.emailFieldFill();
    await forgotPassword.sendButtonClick();
    await page.waitForSelector('.mat-snack-bar-container');
    await page.waitForURL('/sign-in');
    await page.waitForTimeout(30000);
    await page.goto('https://maildrop.cc/inbox/accountadmin4');
    await page.waitForSelector('.messagelist-row-link >> nth=0');
    await page.locator('.messagelist-row-link >> nth=0').click(),
    await page.waitForTimeout(2000);
    const resetButtonLink = await page.frameLocator('.messagedata-iframe').locator('.mail-btn').getAttribute('href');
    await page.goto(resetButtonLink);
    await forgotPassword.resetPasswordPageHomeButtonClick();
    await expect(page).toHaveURL('/sign-in');
});

test('new/ConfirmPasswordFields @regChecklistnewMedium @forgotPasswordResetPassword/SetUpPassword', async ({ page }) => {
    const signIn = new SignInPage(page);
    const forgotPassword = new ForgotPasswordPage(page);
    const newPassField = page.locator('#reset-password-new-password .mat-input-element');
    const confirmPassField = page.locator('#reset-password-confirm-password .mat-input-element');
    console.log('forgotPasswordResetPassword/SetUpPassword New/Confirm Password Fields');
    await signIn.forgotPasswordLink();
    await forgotPassword.emailFieldFill();
    await forgotPassword.sendButtonClick();
    await page.waitForSelector('.mat-snack-bar-container');
    await page.waitForURL('/sign-in');
    await page.waitForTimeout(30000);
    await page.goto('https://maildrop.cc/inbox/accountadmin4');
    await page.waitForSelector('.messagelist-row-link >> nth=0');
    await page.locator('.messagelist-row-link >> nth=0').click(),
    await page.waitForTimeout(2000);
    const resetButtonLink = await page.frameLocator('.messagedata-iframe').locator('.mail-btn').getAttribute('href');
    await page.goto(resetButtonLink);
    await expect(newPassField).toHaveAttribute('formcontrolname', 'password');
    await expect(newPassField).toHaveAttribute('placeholder', 'New Password');
    await expect(confirmPassField).toHaveAttribute('formcontrolname', 'confirm_password');
    await expect(confirmPassField).toHaveAttribute('placeholder', 'Confirm Password');
});

test('displayingPlaceholderForNew/ConfirmPasswordFields @regChecklistnewLow @forgotPasswordResetPassword/SetUpPassword', async ({ page }) => {
    const signIn = new SignInPage(page);
    const forgotPassword = new ForgotPasswordPage(page);
    const newPassField = page.locator('[placeholder="New Password"]');
    const confirmPassField = page.locator('[placeholder="Confirm Password"]');
    console.log('forgotPasswordResetPassword/SetUpPassword Displaying Placeholder For New/Confirm Password Fields');
    await signIn.forgotPasswordLink();
    await forgotPassword.emailFieldFill();
    await forgotPassword.sendButtonClick();
    await page.waitForSelector('.mat-snack-bar-container');
    await page.waitForURL('/sign-in');
    await page.waitForTimeout(30000);
    await page.goto('https://maildrop.cc/inbox/accountadmin4');
    await page.waitForSelector('.messagelist-row-link >> nth=0');
    await page.locator('.messagelist-row-link >> nth=0').click(),
    await page.waitForTimeout(2000);
    const resetButtonLink = await page.frameLocator('.messagedata-iframe').locator('.mail-btn').getAttribute('href');
    await page.goto(resetButtonLink);
    await expect(newPassField).toHaveId('mat-input-0');
    await expect(confirmPassField).toHaveId('mat-input-1');  
});

test('validationEyeIconForNew/ConfirmPasswordFields @regChecklistnewLow @forgotPasswordResetPassword/SetUpPassword', async ({ page }) => {
    const signIn = new SignInPage(page);
    const forgotPassword = new ForgotPasswordPage(page);
    const newPassField = page.locator('[placeholder="New Password"]');
    const confirmPassField = page.locator('[placeholder="Confirm Password"]');
    console.log('forgotPasswordResetPassword/SetUpPassword Validation Eye Icon For New/Confirm Password Fields');
    await signIn.forgotPasswordLink();
    await forgotPassword.emailFieldFill();
    await forgotPassword.sendButtonClick();
    await page.waitForSelector('.mat-snack-bar-container');
    await page.waitForURL('/sign-in');
    await page.waitForTimeout(30000);
    await page.goto('https://maildrop.cc/inbox/accountadmin4');
    await page.waitForSelector('.messagelist-row-link >> nth=0');
    await page.locator('.messagelist-row-link >> nth=0').click(),
    await page.waitForTimeout(2000);
    const resetButtonLink = await page.frameLocator('.messagedata-iframe').locator('.mail-btn').getAttribute('href');
    await page.goto(resetButtonLink);
    await forgotPassword.resetPasswordPageNewPassFieldFill();
    await forgotPassword.resetPasswordPageConfirmPassFieldFill();
    await expect(newPassField).toHaveAttribute('type', 'password');
    await expect(newPassField).not.toHaveAttribute('type', 'text');
    await expect(confirmPassField).toHaveAttribute('type', 'password');
    await expect(confirmPassField).not.toHaveAttribute('type', 'text');
    await forgotPassword.resetPasswordPageNewPassFieldShowPassIconClick();
    await forgotPassword.resetPasswordPageConfirmPassFieldShowPassIconClick();
    await expect(newPassField).not.toHaveAttribute('type', 'password');
    await expect(newPassField).toHaveAttribute('type', 'text');
    await expect(confirmPassField).not.toHaveAttribute('type', 'password');
    await expect(confirmPassField).toHaveAttribute('type', 'text');
    await forgotPassword.resetPasswordPageNewPassFieldShowPassIconClick();
    await forgotPassword.resetPasswordPageConfirmPassFieldShowPassIconClick();
    await expect(newPassField).toHaveAttribute('type', 'password');
    await expect(newPassField).not.toHaveAttribute('type', 'text');
    await expect(confirmPassField).toHaveAttribute('type', 'password');
    await expect(confirmPassField).not.toHaveAttribute('type', 'text');
});

test('validationResetPasswordButton @regChecklistnewHigh @forgotPasswordResetPassword/SetUpPassword', async ({ page }) => {
    const signIn = new SignInPage(page);
    const forgotPassword = new ForgotPasswordPage(page);
    const userInfoName = page.locator('.user-info__name');
    const userInfoAccountName = page.locator('.user-info__account-name');
    console.log('forgotPasswordResetPassword/SetUpPassword Validation Reset Password Button');
    await signIn.forgotPasswordLink();
    await forgotPassword.emailFieldFill();
    await forgotPassword.sendButtonClick();
    await page.waitForSelector('.mat-snack-bar-container');
    await page.waitForURL('/sign-in');
    await page.waitForTimeout(30000);
    await page.goto('https://maildrop.cc/inbox/accountadmin4');
    await page.waitForSelector('.messagelist-row-link >> nth=0');
    await page.locator('.messagelist-row-link >> nth=0').click(),
    await page.waitForTimeout(2000);
    const resetButtonLink = await page.frameLocator('.messagedata-iframe').locator('.mail-btn').getAttribute('href');
    await page.goto(resetButtonLink);
    await forgotPassword.resetPasswordPageNewPassFieldFill();
    await forgotPassword.resetPasswordPageConfirmPassFieldFill();
    await forgotPassword.resetPasswordPageResetButtonClick();
    await expect(page).toHaveURL('/dashboard');
    await expect(userInfoName).toHaveText('AccountAdimnThird AOThird');
    await expect(userInfoAccountName).toHaveText('BanCompany4');
});

test('validationResetPasswordButtonLessThenSix @regChecklistnewMedium @forgotPasswordResetPassword/SetUpPassword', async ({ page }) => {
    const signIn = new SignInPage(page);
    const forgotPassword = new ForgotPasswordPage(page);
    const newPassField = page.locator('#reset-password-new-password .mat-error');
    const confirmPassField = page.locator('#reset-password-confirm-password .mat-error');
    console.log('forgotPasswordResetPassword/SetUpPassword Validation Reset Password Button Less Then Six');
    await signIn.forgotPasswordLink();
    await forgotPassword.emailFieldFill();
    await forgotPassword.sendButtonClick();
    await page.waitForSelector('.mat-snack-bar-container');
    await page.waitForURL('/sign-in');
    await page.waitForTimeout(30000);
    await page.goto('https://maildrop.cc/inbox/accountadmin4');
    await page.waitForSelector('.messagelist-row-link >> nth=0');
    await page.locator('.messagelist-row-link >> nth=0').click(),
    await page.waitForTimeout(2000);
    const resetButtonLink = await page.frameLocator('.messagedata-iframe').locator('.mail-btn').getAttribute('href');
    await page.goto(resetButtonLink);
    await forgotPassword.resetPasswordPageNewPassField.fill('a');
    await forgotPassword.resetPasswordPageConfirmPassField.fill('a');
    await forgotPassword.resetPasswordPageResetButtonClick();
    await expect(newPassField).toBeVisible();
    await expect(newPassField).toHaveText(' New Password must be at least 6 characters long ');
    await expect(confirmPassField).toBeVisible();
    await expect(confirmPassField).toHaveText(' Password must be at least 6 characters long ');
});

test('validationResetPasswordButtonOnlyNumbers/Letters @regChecklistnewMedium @forgotPasswordResetPassword/SetUpPassword', async ({ page }) => {
    const signIn = new SignInPage(page);
    const forgotPassword = new ForgotPasswordPage(page);
    const newPassField = page.locator('#reset-password-new-password .mat-error');
    console.log('forgotPasswordResetPassword/SetUpPassword Validation Reset Password Button Only Numbers/Letters');
    await signIn.forgotPasswordLink();
    await forgotPassword.emailFieldFill();
    await forgotPassword.sendButtonClick();
    await page.waitForSelector('.mat-snack-bar-container');
    await page.waitForURL('/sign-in');
    await page.waitForTimeout(30000);
    await page.goto('https://maildrop.cc/inbox/accountadmin4');
    await page.waitForSelector('.messagelist-row-link >> nth=0');
    await page.locator('.messagelist-row-link >> nth=0').click(),
    await page.waitForTimeout(2000);
    const resetButtonLink = await page.frameLocator('.messagedata-iframe').locator('.mail-btn').getAttribute('href');
    await page.goto(resetButtonLink);
    await forgotPassword.resetPasswordPageNewPassField.fill('111111');
    await forgotPassword.resetPasswordPageConfirmPassField.fill('111111');
    await forgotPassword.resetPasswordPageResetButtonClick();
    await expect(newPassField).toBeVisible();
    await expect(newPassField).toHaveText(' Your new password should be at least 6 characters, contain uppercase letters, lowercase letters, numbers, and special characters. ');
    await forgotPassword.resetPasswordPageNewPassField.fill('aaaaaa');
    await forgotPassword.resetPasswordPageConfirmPassField.fill('aaaaaa');
    await forgotPassword.resetPasswordPageResetButtonClick();
    await expect(newPassField).toBeVisible();
    await expect(newPassField).toHaveText(' Your new password should be at least 6 characters, contain uppercase letters, lowercase letters, numbers, and special characters. ');
});

test('validationResetPasswordButtonEmptyFields @regChecklistnewMedium @forgotPasswordResetPassword/SetUpPassword', async ({ page }) => {
    const signIn = new SignInPage(page);
    const forgotPassword = new ForgotPasswordPage(page);
    const newPassField = page.locator('#reset-password-new-password .mat-error');
    const confirmPassField = page.locator('#reset-password-confirm-password .mat-error');
    console.log('forgotPasswordResetPassword/SetUpPassword Validation Reset Password Button Empty Fields');
    await signIn.forgotPasswordLink();
    await forgotPassword.emailFieldFill();
    await forgotPassword.sendButtonClick();
    await page.waitForSelector('.mat-snack-bar-container');
    await page.waitForURL('/sign-in');
    await page.waitForTimeout(30000);
    await page.goto('https://maildrop.cc/inbox/accountadmin4');
    await page.waitForSelector('.messagelist-row-link >> nth=0');
    await page.locator('.messagelist-row-link >> nth=0').click(),
    await page.waitForTimeout(2000);
    const resetButtonLink = await page.frameLocator('.messagedata-iframe').locator('.mail-btn').getAttribute('href');
    await page.goto(resetButtonLink);
    await forgotPassword.resetPasswordPageResetButtonClick();
    await expect(newPassField).toBeVisible();
    await expect(newPassField).toHaveText(' Please fill in this field ');
    await expect(confirmPassField).toBeVisible();
    await expect(confirmPassField).toHaveText(' Please fill in this field ');
});

test('validationResetPasswordButtonPasswordsDoNotMatch @regChecklistnewHigh @forgotPasswordResetPassword/SetUpPassword', async ({ page }) => {
    const signIn = new SignInPage(page);
    const forgotPassword = new ForgotPasswordPage(page);
    const confirmPassField = page.locator('#reset-password-confirm-password .mat-error');
    console.log('forgotPasswordResetPassword/SetUpPassword Validation Reset Password Button Passwords Do Not Match');
    await signIn.forgotPasswordLink();
    await forgotPassword.emailFieldFill();
    await forgotPassword.sendButtonClick();
    await page.waitForSelector('.mat-snack-bar-container');
    await page.waitForURL('/sign-in');
    await page.waitForTimeout(30000);
    await page.goto('https://maildrop.cc/inbox/accountadmin4');
    await page.waitForSelector('.messagelist-row-link >> nth=0');
    await page.locator('.messagelist-row-link >> nth=0').click(),
    await page.waitForTimeout(2000);
    const resetButtonLink = await page.frameLocator('.messagedata-iframe').locator('.mail-btn').getAttribute('href');
    await page.goto(resetButtonLink);
    await forgotPassword.resetPasswordPageNewPassField.fill('aaaaaa');
    await forgotPassword.resetPasswordPageConfirmPassField.fill('111111');
    await forgotPassword.resetPasswordPageResetButtonClick();
    await expect(confirmPassField).toBeVisible();
    await expect(confirmPassField).toHaveText(' The passwords do not match ');
});