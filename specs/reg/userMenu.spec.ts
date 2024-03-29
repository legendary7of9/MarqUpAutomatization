import { test , expect } from '@playwright/test'
import { UserBar, Users } from '../../framework'
import { SignInPage } from '../../framework'
import { UserMenuBox } from '../../framework'
import { EditMyProfile } from '../../framework'
import { Configuration } from '../../framework'


test.beforeEach(async ({ page }, testInfo) => {
    await page.goto('');
});

test('displayingTheUserMenuBox @regChecklistNewLow @userMenu', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const userMenuBox = page.locator('#user-info');
    const userMenuBoxAvatar = page.locator('.user-info__avatar');
    const userMenuBoxName = page.locator('.user-info__name');
    const userMenuBoxAccountName = page.locator('.user-info__account-name');
    console.log('userMenu Displaying The User Menu Box');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await expect(userMenuBox).toBeVisible();
    await expect(userMenuBoxAvatar).toBeVisible();
    await expect(userMenuBoxName).toBeVisible();
    await expect(userMenuBoxName).toHaveText('AA Client HT');
    await expect(userMenuBoxAccountName).toBeVisible();
    await expect(userMenuBoxAccountName).toHaveText('Client 1HT(test)');
    await userBar.logOutAction();
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await expect(userMenuBox).toBeVisible();
    await expect(userMenuBoxAvatar).toBeVisible();
    await expect(userMenuBoxName).toBeVisible();
    await expect(userMenuBoxName).toHaveText('account User Test');
    await expect(userMenuBoxAccountName).toBeVisible();
    await expect(userMenuBoxAccountName).toHaveText('Client 1HT(test)');
});

test('validationOfTheUserMenuBox @regChecklistNewMedium @userMenu', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const userMenu = new UserMenuBox(page);
    const myProfileButton = page.locator('#user-info-profile');
    const configurationButton = page.locator('#user-info-configuration');
    const signOutButton = page.locator('#user-info-sign-out');
    console.log('userMenu Validation Of The User Menu Box');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await userMenu.userMenuDropdownClick();
    await expect(myProfileButton).toBeVisible();
    await expect(configurationButton).toBeVisible();
    await expect(signOutButton).toBeVisible();
    await userMenu.signOutClick();
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await userMenu.userMenuDropdownClick();
    await expect(myProfileButton).toBeVisible();
    await expect(configurationButton).toBeHidden();
    await expect(signOutButton).toBeVisible();
    await userMenu.signOutClick();
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await userMenu.userMenuDropdownClick();
    await expect(myProfileButton).toBeVisible();
    await expect(configurationButton).toBeHidden();
    await expect(signOutButton).toBeVisible();
});

test('validationOfTheMyProfile/ConfigurationButton @regChecklistNewMedium @userMenu', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userMenu = new UserMenuBox(page);
    const editProfileChangePasswordButton = page.locator('#profile-show-change-password');
    const configurationSaveChangesButton = page.locator('#configuration-save');
    const pageTitle = page.locator('.section__title');
    console.log('userMenu Validation Of The My Profile/Configuration Button');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await userMenu.myProfileButtonClick();
    await expect(page).toHaveURL('/profile/458');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText('Edit My Profile');
    await expect(editProfileChangePasswordButton).toBeVisible();
    await userMenu.configurationButtonClick();
    await expect(page).toHaveURL('/configuration');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText('Configuration');
    await expect(configurationSaveChangesButton).toBeVisible();
});

test('validationOfTheSignOutButton @regChecklistNewHigh @userMenu', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userMenu = new UserMenuBox(page);
    const signInButton = page.locator('#login-sign-in');
    console.log('userMenu Validation Of The Sign Out Button');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await userMenu.userMenuDropdownClick();
    await userMenu.signOutClick();
    await expect(page).toHaveURL('/sign-in');
    await expect(signInButton).toBeVisible();
});

test('validationOfTheSelectImageButton/DisplayingEditAndRemoveButtons/ValidationOfEditButton @regChecklistNewLow @userMenu @editMyProfile', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userMenu = new UserMenuBox(page);
    const myProfile = new EditMyProfile(page);
    // const avatarUpload0 = '/Users/user/Desktop/MarqUpAutomatization/lib/imgForUpload/avatarImg.jpeg' //macOS
    const avatarUpload0 = 'lib/imgForUpload/avatarImg.jpeg' //windows
    const avatarUpload1 = 'lib/imgForUpload/avatarImg2.jpe' //windows
    const removeButton = page.locator('#profile-remove-photo');
    const editButton = page.locator('#profile-edit-photo');
    const avatar = page.locator('.avatar');
    console.log('userMenu Validation Of The Select Image Button/Displaying Edit And Remove Buttons/Validation Of Edit Button');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await userMenu.myProfileButtonClick();
    await avatar.blur();
    await expect(removeButton).toBeHidden();
    await expect(editButton).toBeHidden();
    page.on('filechooser', async (filechooser) =>  {
        await filechooser.setFiles(avatarUpload0);
    })
    await page.click('.select-image svg', { force: true });
    await avatar.blur();
    await expect(removeButton).toBeVisible();
    await expect(editButton).toBeVisible();
    const getAvatarUrl0 = await avatar.getAttribute('style');
    await expect(getAvatarUrl0).toContain('data:image/jpeg;base64');
    await avatar.blur();
    page.on('filechooser', async (filechooser) =>  {
        await filechooser.setFiles(avatarUpload1);
    })
    await page.click('#profile-edit-photo', { force: true });
    const getAvatarUrl1 = await avatar.getAttribute('style');
    await expect(getAvatarUrl1).toContain('data:image/jpeg;base64');
    await myProfile.removeImageButtonClick();
    await myProfile.removeImagePopupRemoveButtonClick();
});

test('validationTheRemoveButton @regChecklistNewLow @userMenu @editMyProfile', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userMenu = new UserMenuBox(page);
    const myProfile = new EditMyProfile(page);
    // const avatarUpload = '/Users/user/Desktop/MarqUpAutomatization/lib/imgForUpload/avatarImg.jpeg' //macOS
    const avatarUpload = 'lib/imgForUpload/avatarImg.jpeg' //windows
    const removeButton = page.locator('#profile-remove-photo');
    const avatar = page.locator('.avatar');
    const removePopup = page.locator('.mat-dialog-container');
    const removePopupText = page.locator('.modal-header');
    const removePopupCancelButton = page.locator('#confirm-modal-cancel');
    const removePopupRemoveButton = page.locator('#confirm-modal-delete');
    console.log('userMenu Validation The Remove Button');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await userMenu.myProfileButtonClick();
    await avatar.blur();
    await expect(removeButton).toBeHidden();
    page.on('filechooser', async (filechooser) =>  {
        await filechooser.setFiles(avatarUpload);
    })
    await page.click('.select-image svg', { force: true });
    await avatar.blur();
    await expect(removeButton).toBeVisible();
    await myProfile.removeImageButtonClick();
    await expect(removePopup).toBeVisible();
    await expect(removePopupText).toBeVisible();
    await expect(removePopupText).toHaveText(' Are you sure you want to delete this image?');
    await expect(removePopupCancelButton).toBeVisible();
    await expect(removePopupRemoveButton).toBeVisible();
    await myProfile.removeImagePopupCancelButtonClick();
    await expect(removePopup).toBeHidden();
    const getAvatarUrl = await avatar.getAttribute('style');
    await expect(getAvatarUrl).toContain('data:image/jpeg;base64');
    await avatar.click({ force: true });
    await avatar.blur();
    await myProfile.removeImageButtonClick();
    await myProfile.removeImagePopupRemoveButtonClick();
    await avatar.blur();
    await expect(removeButton).toBeHidden();
    await expect(avatar).toHaveAttribute('style', 'background-image: url("");');
});

test('validationTheFirst/LastNameFields @regChecklistNewLow @userMenu @editMyProfile', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userMenu = new UserMenuBox(page);
    const myProfile = new EditMyProfile(page);
    const firstNameFieldInput = page.locator('#profile-first-name input');
    const lastNameFieldInput = page.locator('#profile-last-name input');
    const firstNameFieldError = page.locator('#profile-first-name mat-error');
    const lastNameFieldError = page.locator('#profile-last-name mat-error');
    console.log('userMenu Validation The First/Last Name Fields');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await userMenu.myProfileButtonClick();
    await expect(firstNameFieldInput).toHaveAttribute('placeholder', 'First Name');
    await expect(lastNameFieldInput).toHaveAttribute('placeholder', 'Last Name');
    await myProfile.firstNameField.fill('');
    await page.locator('.section__header').click();
    await expect(firstNameFieldError).toHaveText(' Please fill in this field ');
    await myProfile.firstNameField.fill('AA');
    await myProfile.lastNameField.fill('');
    await page.locator('.section__header').click();
    await expect(lastNameFieldError).toHaveText(' Please fill in this field ');
    await myProfile.lastNameField.fill('Client HT');
});

test('validationTheEmailField @regChecklistNewLow @userMenu @editMyProfile', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userMenu = new UserMenuBox(page);
    const myProfile = new EditMyProfile(page);
    const emailFieldInput = page.locator('#profile-email input');
    const emailFieldError = page.locator('#profile-email mat-error');
    console.log('userMenu Validation The Email Field');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await userMenu.myProfileButtonClick();
    await expect(emailFieldInput).toHaveAttribute('placeholder', 'Email');
    await expect(emailFieldInput).toHaveAttribute('pattern', '[a-zA-Z0-9_.\\+-]{1,}@[0-9a-zA-Z.-]{1,}[.]{1}[a-zA-Z]{2,}');
    await myProfile.emailField.fill('');
    await page.locator('.section__header').click();
    await expect(emailFieldError).toHaveText(' Please fill in this field ');
    await myProfile.emailField.fill('testestest');
    await page.locator('.section__header').click();
    await expect(emailFieldError).toHaveText(' Please enter a valid email address ');
    await myProfile.emailField.fill('alexey.banshykov@mobindustry.net');
    await myProfile.saveChangesButtonClickFieldErrors();
    await expect(emailFieldError).toHaveText(' An account with this email address already exists ');
    await myProfile.emailField.fill('iryna.nema+1111@mobindustry.net');
});

test('theClientField @regChecklistNewLow @userMenu @editMyProfile', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userMenu = new UserMenuBox(page);
    const clientFieldInput = page.locator('#profile-client input');
    console.log('userMenu The Client Field');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await userMenu.myProfileButtonClick();
    await expect(clientFieldInput).toBeVisible();
    await expect(clientFieldInput).toHaveAttribute('placeholder', 'Client');
    await expect(clientFieldInput).toBeDisabled();
    await expect(clientFieldInput).toHaveValue('Client 1HT(test)');
});

test('theBioField @regChecklistNewLow @userMenu @editMyProfile', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userMenu = new UserMenuBox(page);
    const myProfile = new EditMyProfile(page);
    const bioFieldInput = page.locator('#profile-bio textarea');
    const bioFieldCounter = page.locator('#profile-bio .field-counter');
    console.log('userMenu The Bio Field');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await userMenu.myProfileButtonClick();
    await expect(bioFieldInput).toBeVisible();
    await expect(bioFieldInput).toHaveAttribute('placeholder', 'Bio');
    await expect(bioFieldInput).toHaveAttribute('maxlength', '400');
    await expect(bioFieldCounter).toBeVisible();
    await expect(bioFieldCounter).toHaveText('0/400');
    await myProfile.bioField.fill('test')
    await expect(bioFieldCounter).toHaveText('4/400');
});

test('checkingTheChangePasswordLink/ValidationOfCancelButtonChangePassPopup @regChecklistNewMedium @userMenu @editMyProfile', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userMenu = new UserMenuBox(page);
    const myProfile = new EditMyProfile(page);
    const changePassowrdPopup = page.locator('mat-dialog-container');
    const currentPasswordField = page.locator('#profile-current-password');
    const newPasswordField = page.locator('#profile-new-password');
    const confirmPasswordField = page.locator('#profile-confirm-password');
    const cancelButton = page.locator('#change-password-cancel');
    const changePasswordButton = page.locator('#change-password-apply');
    console.log('userMenu Checking The Change Password Link/Validation Of Cancel Button Change Pass Popup');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await userMenu.myProfileButtonClick();
    await myProfile.changePasswordButtonClick();
    await expect(changePassowrdPopup).toBeVisible();
    await expect(currentPasswordField).toBeVisible();
    await expect(newPasswordField).toBeVisible();
    await expect(confirmPasswordField).toBeVisible();
    await expect(cancelButton).toBeVisible();
    await expect(changePasswordButton).toBeVisible();
    await myProfile.changePassPopupCancelButtonClick();
    await expect(changePassowrdPopup).toBeHidden();
    await expect(currentPasswordField).toBeHidden();
    await expect(newPasswordField).toBeHidden();
    await expect(confirmPasswordField).toBeHidden();
    await expect(cancelButton).toBeHidden();
    await expect(changePasswordButton).toBeHidden();
});

test('validationOfTheCurrent/New/ConfirmPasswordFields @regChecklistNewMedium @userMenu @editMyProfile', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userMenu = new UserMenuBox(page);
    const myProfile = new EditMyProfile(page);
    const currentPasswordField = page.locator('#profile-current-password input');
    const newPasswordField = page.locator('#profile-new-password input');
    const confirmPasswordField = page.locator('#profile-confirm-password input');
    console.log('userMenu Validation Of The Current/New/Confirm Password Fields');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await userMenu.myProfileButtonClick();
    await myProfile.changePasswordButtonClick();
    await expect(currentPasswordField).toHaveAttribute('placeholder', 'Current Password');
    await expect(currentPasswordField).toHaveAttribute('type', 'password');
    await expect(newPasswordField).toHaveAttribute('placeholder', 'New Password');
    await expect(newPasswordField).toHaveAttribute('type', 'password');
    await expect(confirmPasswordField).toHaveAttribute('placeholder', 'Confirm Password');
    await expect(confirmPasswordField).toHaveAttribute('type', 'password');
});

test('validationOfTheSaveChangesButton/ValidationOfChangePassButton @regChecklistNewHigh @userMenu @editMyProfile', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userMenu = new UserMenuBox(page);
    const myProfile = new EditMyProfile(page);
    const editUserButton = page.locator('#client-view-edit');
    const firstNameFieldError = page.locator('#profile-first-name mat-error');
    const lastNameFieldError = page.locator('#profile-last-name mat-error');
    const emailFieldError = page.locator('#profile-email mat-error');
    const changePasswordPopup = page.locator('app-change-password');
    const currentPasswordFieldError = page.locator('#profile-current-password mat-error');
    const newPasswordFieldError = page.locator('#profile-new-password mat-error');
    const confirmPasswordFieldError = page.locator('#profile-confirm-password mat-error');
    console.log('userMenu Validation Of The Save Changes Button/Validation Of Change Pass Button');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await userMenu.myProfileButtonClick();
    await page.waitForTimeout(1500);
    await myProfile.saveChangesButtonClick();
    await expect(page).toHaveURL('/clients/265');
    await expect(editUserButton).toBeVisible();
    await userMenu.myProfileButtonClick();
    await page.waitForTimeout(1500);
    await myProfile.firstNameField.fill('');
    await myProfile.lastNameField.fill('');
    await myProfile.emailField.fill('');
    await myProfile.saveChangesButtonClickFieldErrors();
    await expect(firstNameFieldError).toBeVisible();
    await expect(firstNameFieldError).toHaveText(' Please fill in this field ');
    await expect(lastNameFieldError).toBeVisible();
    await expect(lastNameFieldError).toHaveText(' Please fill in this field ');
    await expect(emailFieldError).toBeVisible();
    await expect(emailFieldError).toHaveText(' Please fill in this field ');
    await myProfile.cancelButtonClickAASA();
    await userMenu.myProfileButtonClick();
    await page.waitForTimeout(1500);
    await myProfile.changePasswordButtonClick();
    await expect(changePasswordPopup).toBeVisible();
    await myProfile.currentPasswordField.fill('test');
    await myProfile.newPasswordField.fill('test');
    await myProfile.confirmPasswordField.fill('test');
    await myProfile.changePassPopupChangePasswordButtonForErrorClick();
    await expect(currentPasswordFieldError).toBeVisible();
    await expect(currentPasswordFieldError).toHaveText(' The password is incorrect. ');
    await myProfile.currentPasswordField.fill('Zaq123456!');
    await myProfile.newPasswordField.fill('test');
    await myProfile.confirmPasswordField.fill('test');
    await myProfile.changePassPopupChangePasswordButtonForErrorClick();
    await expect(newPasswordFieldError).toBeVisible();
    await expect(newPasswordFieldError).toHaveText(' Password should contain at least 6 characters. ');
    await myProfile.currentPasswordField.fill('Zaq123456!');
    await myProfile.newPasswordField.fill('test');
    await myProfile.confirmPasswordField.fill('a');
    await myProfile.changePassPopupChangePasswordButtonForErrorClick();
    await expect(confirmPasswordFieldError).toBeVisible();
    await expect(confirmPasswordFieldError).toHaveText(' The passwords do not match ');
});

test('validationOfTheCancelButton @regChecklistNewLow @userMenu @editMyProfile', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const userMenu = new UserMenuBox(page);
    const myProfile = new EditMyProfile(page);
    const addUserButton = page.locator('#users-list-add-user');
    const addModelButton = page.locator('#models-list-add-model');
    console.log('userMenu Validation Of The Cancel Button');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await userMenu.myProfileButtonClick();
    await myProfile.cancelButtonClickAASA();
    await expect(page).toHaveURL('/users?&sort=first_name');
    await expect(addUserButton).toBeVisible();
    await userBar.logOutAction();
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/users/edit-user/458');
    await userMenu.myProfileButtonClick();
    await myProfile.cancelButtonClickAASA();
    await expect(page).toHaveURL('/users?&sort=first_name');
    await expect(addUserButton).toBeVisible();
    await userBar.logOutAction();
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await userMenu.myProfileButtonClick();
    await myProfile.cancelButtonClickAU();
    await expect(page).toHaveURL('/models?&sort=name');
    await expect(addModelButton).toBeVisible();
});

test('possibleColorsForTheAnswers/AAHasThreeRiskLevel @regChecklistNewMedium @userMenu @configuration', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userMenu = new UserMenuBox(page);
    const lowRiskColor = page.locator('.low-risk');
    const lowRiskValue = page.locator('#configuration-low-risk input');
    const lowRiskText = page.locator('.risk__name >> nth=1');
    const mediumRiskColor = page.locator('.medium-risk');
    const mediumRiskValue = page.locator('#configuration-medium-risk input');
    const mediumRiskText = page.locator('.risk__name >> nth=2');
    const highRiskColor = page.locator('.high-risk');
    const highRiskValue = page.locator('#configuration-high-risk input');
    const highRiskText = page.locator('.risk__name >> nth=3');
    console.log('userMenu Possible Colors For The Answers/AA Has Three Risk Level');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await userMenu.configurationButtonClick();
    await expect(lowRiskColor).toBeVisible();
    await expect(lowRiskColor).toHaveCSS('background-color', 'rgb(12, 198, 134)');
    await expect(lowRiskValue).toHaveValue('75');
    await expect(lowRiskText).toHaveText('Low Risk');
    await expect(mediumRiskColor).toBeVisible();
    await expect(mediumRiskColor).toHaveCSS('background-color', 'rgb(255, 163, 94)');
    await expect(mediumRiskValue).toHaveValue('45');
    await expect(mediumRiskText).toHaveText('Medium Risk');
    await expect(highRiskColor).toBeVisible();
    await expect(highRiskColor).toHaveCSS('background-color', 'rgb(255, 83, 132)');
    await expect(highRiskValue).toHaveValue('<45');
    await expect(highRiskText).toHaveText('High Risk');
});

test('answersMustBeColor-codedForPages @regChecklistNewMedium @userMenu @configuration', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const lowRiskDealAnalysis = page.locator('.low-risk >> nth=1');
    const mediumRiskDealAnalysis = page.locator('.medium-risk >> nth=1');
    const highRiskDealAnalysis = page.locator('.high-risk >> nth=1');
    const riskDealSummary = page.locator('.current-deal-value');
    console.log('userMenu Answers Must Be Color-coded For Pages');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals/analysis-deal/433');
    await expect(lowRiskDealAnalysis).toHaveCSS('color', 'rgb(12, 198, 134)');
    await page.goto('/deals/summary-report/433');
    await expect(riskDealSummary).toHaveCSS('color', 'rgb(12, 198, 134)');
    await page.goto('/deals/analysis-deal/8572');
    await expect(mediumRiskDealAnalysis).toHaveCSS('color', 'rgb(255, 163, 94)');
    await page.goto('/deals/summary-report/8572');
    await expect(riskDealSummary).toHaveCSS('color', 'rgb(255, 163, 94)');
    await page.goto('/deals/analysis-deal/8570');
    await expect(highRiskDealAnalysis).toHaveCSS('color', 'rgb(255, 83, 132)');
    await page.goto('/deals/summary-report/8570');
    await expect(riskDealSummary).toHaveCSS('color', 'rgb(255, 83, 132)');
});

test('onlyAAHasPossibilityToConfigureTheRiskScore @regChecklistNewMedium @userMenu @configuration', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userMenu = new UserMenuBox(page);
    const configurationButton = page.locator('#user-info-configuration');
    console.log('userMenu Only AA Has Possibility To Configure The Risk Score');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await userMenu.userMenuDropdownClick();
    await expect(configurationButton).toBeVisible();
    await userMenu.signOutClick();
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await userMenu.userMenuDropdownClick();
    await expect(configurationButton).toBeHidden();
    await userMenu.signOutClick();
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await userMenu.userMenuDropdownClick();
    await expect(configurationButton).toBeHidden();
});

test('theMiniumumScoreBlock @regChecklistNewHigh @userMenu @configuration', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userMenu = new UserMenuBox(page);
    const lowRiskValue = page.locator('#configuration-low-risk input')
    const mediumRiskValue = page.locator('#configuration-medium-risk input');
    const highRiskValue = page.locator('#configuration-high-risk input');
    console.log('userMenu The Miniumum Score Block');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await userMenu.configurationButtonClick();
    await expect(lowRiskValue).toHaveValue('75');
    await expect(mediumRiskValue).toHaveValue('45');
    await expect(highRiskValue).toHaveValue('<45');
    await expect(highRiskValue).toHaveAttribute('disabled', '');
});

test('userCantEditTheColorBlock @regChecklistNewLow @userMenu @configuration', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userMenu = new UserMenuBox(page);
    const lowRiskColor = page.locator('.low-risk');
    const mediumRiskColor = page.locator('.medium-risk');
    const highRiskColor = page.locator('.high-risk');
    console.log('userMenu User Cant Edit The Color Block');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await userMenu.configurationButtonClick();
    await lowRiskColor.click();
    await expect(lowRiskColor).toBeTruthy();
    await mediumRiskColor.click();
    await expect(mediumRiskColor).toBeTruthy();
    await highRiskColor.click();
    await expect(highRiskColor).toBeTruthy();
});

test('validationOfTheSaveChangesButton @regChecklistNewHigh @userMenu @configuration', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userMenu = new UserMenuBox(page);
    const configuration = new Configuration(page);
    const addDealButton = page.locator('#deals-list-add-deal');
    const lowRiskError = page.locator('#configuration-low-risk');
    const mediumRiskError = page.locator('#configuration-medium-risk');
    console.log('userMenu Validation Of The Save Changes Button');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await userMenu.configurationButtonClick();
    await configuration.saveChangesButtonClick();
    await expect(page).toHaveURL('/deals?&sort=contract_name');
    await expect(addDealButton).toBeVisible();
    await userMenu.configurationButtonClick();
    await configuration.lowRiskField.fill('');
    await configuration.mediumRiskField.fill('');
    await configuration.saveChangesButtonClickError();
    await expect(lowRiskError).toContainText(' Please fill in this field ');
    await expect(mediumRiskError).toContainText(' Please fill in this field ');
    await configuration.lowRiskField.fill('2');
    await configuration.mediumRiskField.fill('15');
    await configuration.saveChangesButtonClickError();
    await expect(lowRiskError).toContainText(' Low Risk must be greater than "Medium Risk". ');
    await expect(mediumRiskError).toContainText(' Medium Risk must be less than "Low Risk". ');
});