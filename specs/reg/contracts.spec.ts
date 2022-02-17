import { test , expect } from '@playwright/test'
import { UserBar, Users } from '../../framework'
import { SignInPage } from '../../framework'
import { SideBar } from '../../framework'
import { TemplatesPage } from '../../framework'
import { ContractsPage } from '../../framework'
import { NewEditCopyTemplatePage } from '../../framework'
import { NewEditContractPage } from '../../framework'
import { Helpers } from '../../lib/helpers/randomCharactersAndDigits.preload'

test.beforeEach(async ({ page }) => {
    await page.goto('');
}); 

test('displaying3dotsMenu @regClickTractsLow @contracts3dotsMenu', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const templatesPage = new TemplatesPage(page);
    const contractsPage = new ContractsPage(page);
    const threeDotsMenu = page.locator('.mat-icon-button >> nth=0');
    console.log('contracts3dotsMenu Displaying 3dots Menu');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractsPage.statusFilterClick();
    await expect(threeDotsMenu).toBeVisible();
    await contractsPage.statusFilterClick();
    await expect(threeDotsMenu).toBeVisible();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractsPage.statusFilterClick();
    await expect(threeDotsMenu).toBeVisible();
    await contractsPage.statusFilterClick();
    await expect(threeDotsMenu).toBeVisible();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractsPage.statusFilterClick();
    await expect(threeDotsMenu).toBeVisible();
    await contractsPage.statusFilterClick();
    await expect(threeDotsMenu).toBeVisible();
    })

test('availabilityOfTheEditButton @regClickTractsHigh @contracts3dotsMenu', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const contractsPage = new ContractsPage(page);
    const editButtonThreeDotsMenu = page.locator('.context-menu-edit');
    console.log('contracts3dotsMenu Availability Of The Edit Button');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractsPage.statusFilterClick();
    await contractsPage.threeDotsMenuButtonClick();
    await expect(editButtonThreeDotsMenu).toBeHidden();
    await page.click('.cdk-overlay-backdrop');
    await contractsPage.statusFilterClick();
    await contractsPage.threeDotsMenuButtonClick();
    await expect(editButtonThreeDotsMenu).toBeVisible();
    await page.click('.cdk-overlay-backdrop');
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractsPage.statusFilterClick();
    await contractsPage.threeDotsMenuButtonClick();
    await expect(editButtonThreeDotsMenu).toBeHidden();
    await page.click('.cdk-overlay-backdrop');
    await contractsPage.statusFilterClick();
    await contractsPage.threeDotsMenuButtonClick();
    await expect(editButtonThreeDotsMenu).toBeVisible();
    await page.click('.cdk-overlay-backdrop');
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractsPage.threeDotsMenuButtonClick();
    await expect(editButtonThreeDotsMenu).toBeHidden();
    })

test('availabilityOfTheEditButton @regClickTractsHigh @contracts3dotsMenu', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const contractsPage = new ContractsPage(page);
    console.log('contracts3dotsMenu Validation Of The Edit Button');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractsPage.statusFilterClick();
    await contractsPage.statusFilterClick();
    await contractsPage.threeDotsMenuEditButtonClick();
    expect(page.url()).toContain('/contract/edit/');
    })

test('availabilityOfTheDeleteButton @regClickTractsLow @contracts3dotsMenu', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const contractsPage = new ContractsPage(page);
    const deleteButtonThreeDotsMenu = page.locator('.context-menu-delete');
    console.log('contracts3dotsMenu Validation Of The Delete Button');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractsPage.signaturesFilterClick();
    await contractsPage.threeDotsMenuButtonClick();
    await expect(deleteButtonThreeDotsMenu).toBeHidden();
    await page.click('.cdk-overlay-backdrop');
    await contractsPage.signaturesFilterClick();
    await contractsPage.threeDotsMenuButtonClick();
    await expect(deleteButtonThreeDotsMenu).toBeVisible();
    await page.click('.cdk-overlay-backdrop');
    await contractsPage.statusFilterClick();
    await contractsPage.threeDotsMenuButtonClick();
    await expect(deleteButtonThreeDotsMenu).toBeVisible();
    await page.click('.cdk-overlay-backdrop');
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractsPage.signaturesFilterClick();
    await contractsPage.threeDotsMenuButtonClick();
    await expect(deleteButtonThreeDotsMenu).toBeHidden();
    await page.click('.cdk-overlay-backdrop');
    await contractsPage.signaturesFilterClick();
    await contractsPage.threeDotsMenuButtonClick();
    await expect(deleteButtonThreeDotsMenu).toBeVisible();
    await page.click('.cdk-overlay-backdrop');
    await contractsPage.statusFilterClick();
    await contractsPage.threeDotsMenuButtonClick();
    await expect(deleteButtonThreeDotsMenu).toBeVisible();
    await page.click('.cdk-overlay-backdrop');
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractsPage.statusFilterClick();
    await contractsPage.threeDotsMenuButtonClick();
    await expect(deleteButtonThreeDotsMenu).toBeVisible();
    await page.click('.cdk-overlay-backdrop');
    await contractsPage.signaturesFilterClick();
    await contractsPage.threeDotsMenuButtonClick();
    await expect(deleteButtonThreeDotsMenu).toBeHidden();
    })

test('validationOfTheDeleteButton @regClickTractsMedium @contracts3dotsMenu', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const contractsPage = new ContractsPage(page);
    const deletePopup = page.locator('.mat-dialog-container');
    const deletePopupText = page.locator('.modal-header');
    const deletePopupCancelButton = page.locator('.mat-button >> text=Cancel');
    const deletePopupDeleteButton = page.locator('.mat-button >> text=Delete');
    console.log('contracts3dotsMenu Validation Of The Delete Button');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractsPage.signaturesFilterClick();
    await contractsPage.signaturesFilterClick();
    await contractsPage.threeDotsMenuDeleteButtonClick();
    await expect(deletePopup).toBeVisible();
    await expect(deletePopupText).toBeVisible();
    await expect(deletePopupText).toHaveText('Are you sure you want to delete this contract?');
    await expect(deletePopupCancelButton).toBeVisible();
    await expect(deletePopupDeleteButton).toBeVisible();
    await contractsPage.threeDotsMenuDeletePopupCancelButtonClick();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractsPage.signaturesFilterClick();
    await contractsPage.signaturesFilterClick();
    await contractsPage.threeDotsMenuDeleteButtonClick();
    await expect(deletePopup).toBeVisible();
    await expect(deletePopupText).toBeVisible();
    await expect(deletePopupText).toHaveText('Are you sure you want to delete this contract?');
    await expect(deletePopupCancelButton).toBeVisible();
    await expect(deletePopupDeleteButton).toBeVisible();
    await contractsPage.threeDotsMenuDeletePopupCancelButtonClick();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractsPage.signaturesFilterClick();
    await contractsPage.signaturesFilterClick();
    await contractsPage.threeDotsMenuDeleteButtonClick();
    await expect(deletePopup).toBeVisible();
    await expect(deletePopupText).toBeVisible();
    await expect(deletePopupText).toHaveText('Are you sure you want to delete this contract?');
    await expect(deletePopupCancelButton).toBeVisible();
    await expect(deletePopupDeleteButton).toBeVisible();
    await contractsPage.threeDotsMenuDeletePopupCancelButtonClick();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    })

test('validationOfTheDeleteButtonOnTheDeletePopup @regClickTractsHigh @contracts3dotsMenu', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const contractsPage = new ContractsPage(page);
    const newContract = new NewEditContractPage(page);
    const deletePopup = page.locator('.mat-dialog-container');
    const deletedContract = page.locator('.contracts-name-column-link >> nth=0');
    console.log('contracts3dotsMenu Validation Of The Delete Button On The Delete Popup');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/1507');
    await newContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.contractDescriptionTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.saveButtonClick();
    await page.goto('/contracts/list?&sort=-created_at');
    await contractsPage.threeDotsMenuDeleteButtonClick();
    await contractsPage.threeDotsMenuDeletePopupDeleteButtonClick();
    await expect(deletePopup).toBeHidden();
    await expect(deletedContract).not.toContainText('autotest');
    await page.goto('/contract/create/1507');
    await newContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.contractDescriptionTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.saveButtonClick();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractsPage.threeDotsMenuDeleteButtonClick();
    await contractsPage.threeDotsMenuDeletePopupDeleteButtonClick();
    await expect(deletePopup).toBeHidden();
    await expect(deletedContract).not.toContainText('autotest');
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/1507');
    await newContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.contractDescriptionTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.saveButtonClick();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractsPage.threeDotsMenuDeleteButtonClick();
    await contractsPage.threeDotsMenuDeletePopupDeleteButtonClick();
    await expect(deletePopup).toBeHidden();
    await expect(deletedContract).not.toContainText('autotest');
    })