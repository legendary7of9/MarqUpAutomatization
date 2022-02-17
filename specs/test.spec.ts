import { test , expect } from '@playwright/test'
import { url } from 'inspector'
import { UserBar, Users } from '../framework'
import { SignInPage } from '../framework'
import { SideBar } from '../framework'
import { TemplatesPage } from '../framework'
import { NewEditCopyTemplatePage } from '../framework'
import { NewEditCopyModelPage } from '../framework'
import { DealsPage } from '../framework'
import { NewEditTermPage } from '../framework'
import { ViewingModelPage } from '../framework'
import { NewEditDealPage } from '../framework'
import { DealAnalysisPage } from '../framework'
import { ExistingModelPage } from '../framework'
import { ContractsPage } from '../framework'
import { NewEditContractPage } from '../framework'
import { ModelPage } from '../framework'
import { Helpers } from '../lib/helpers/randomCharactersAndDigits.preload'

test.beforeEach(async ({ page }) => {
    await page.goto('');
}); 

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