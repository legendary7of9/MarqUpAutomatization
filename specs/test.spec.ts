import { test , expect, webkit, chromium } from '@playwright/test'
import { url } from 'inspector'
import { UserBar, Users } from '../framework'
import { SignInPage } from '../framework'
import { SideBar } from '../framework'
import { TemplatesPage } from '../framework'
import { NewEditCopyTemplatePage } from '../framework'
import { ViewTemplatePage } from '../framework'
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

//test('validationOfTheDeleteButtonOnTheDeletePopup @regClickTractsHigh @contracts3dotsMenu', async ({ page, browserName }) => {
    //test.skip(browserName === 'chromium');
    //const users = new Users(page);
    //const signIn = new SignInPage(page);
    //const userBar = new UserBar(page);
    //const contractsPage = new ContractsPage(page);
    //const newContract = new NewEditContractPage(page);
    //console.log('contracts3dotsMenu Validation Of The Delete Button On The Delete Popup');
    //await users.AA();
    //await signIn.signInButton();
    //await page.waitForURL('/dashboard');
    //await page.goto('/contract-templates/list?&sort=-created_at');
        //while (true) {
           //if ((await page.$$('.template-name-column-link >> text=For testing of Template  AA 18.02')).length > 0)  {
               //console.log('ttttt');
               //break;
            //}
           //else {
               //console.log('eeee');
               //await page.click('.next-page');
            //}
        //}
    //await page.click('.template-name-column-link >> text=For testing of Template  AA 18.02');

//});

   //to be refactored
   test('availibilityOfTheDisableSignaturesButton @regClickTractsMedium @contracts3dotsMenu', async ({ page,browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const contractsPage = new ContractsPage(page);
    const disableSingatureButton = page.locator('.context-menu-disable-signature');
    console.log('contracts3dotsMenu Availibility Of The Disable Signatures Button');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractsPage.statusFilterClick();
    await contractsPage.threeDotsMenuButtonClick();
    await expect(disableSingatureButton).toBeVisible();
    await page.click('.cdk-overlay-backdrop');
    await contractsPage.statusFilterClick();
    await contractsPage.threeDotsMenuButtonClick();
    await expect(disableSingatureButton).toBeHidden();
    await page.click('.cdk-overlay-backdrop');
    await contractsPage.signaturesFilterClick();
    await contractsPage.threeDotsMenuButtonClick();
    await expect(disableSingatureButton).toBeVisible();
    await page.click('.cdk-overlay-backdrop');
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractsPage.statusFilterClick();
    await contractsPage.threeDotsMenuButtonClick();
    await expect(disableSingatureButton).toBeVisible();
    await page.click('.cdk-overlay-backdrop');
    await contractsPage.statusFilterClick();
    await contractsPage.threeDotsMenuButtonClick();
    await expect(disableSingatureButton).toBeHidden();
    await page.click('.cdk-overlay-backdrop');
    await contractsPage.signaturesFilterClick();
    await contractsPage.threeDotsMenuButtonClick();
    await expect(disableSingatureButton).toBeVisible();
    await page.click('.cdk-overlay-backdrop');
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractsPage.statusFilterClick();
    await contractsPage.threeDotsMenuButtonClick();
    await expect(disableSingatureButton).toBeHidden();
    await page.click('.cdk-overlay-backdrop');
    await contractsPage.statusFilterClick();
    await contractsPage.threeDotsMenuButtonClick();
    await expect(disableSingatureButton).toBeHidden();
    await page.click('.cdk-overlay-backdrop');
    await contractsPage.signaturesFilterClick();
    await contractsPage.threeDotsMenuButtonClick();
    await expect(disableSingatureButton).toBeHidden();
});