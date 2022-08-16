import { test , expect, webkit, chromium, Browser, BrowserContext, Page } from '@playwright/test'
import { UserBar, Users } from '../framework'
import { Search } from '../framework'
import { SignInPage } from '../framework'
import { ForgotPasswordPage } from '../framework'
import { SideBar } from '../framework'
import { Pagination } from '../framework'
import { ManageDisplay } from '../framework'
import { DashboardPage } from '../framework'
import { TemplatesPage } from '../framework'
import { NewEditCopyTemplatePage } from '../framework'
import { ViewTemplatePage } from '../framework'
import { NewEditCopyModelPage } from '../framework'
import { DealsPage } from '../framework'
import { NewEditTermPage } from '../framework'
import { ViewingModelPage } from '../framework'
import { DealsRelatedToModelPage } from '../framework'
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

// test.use({
//     viewport: {
//         height: 1080,
//         width: 1920
//     }
// })

test('deleteButton3dotsMenu @regClickTractsMedium @templates @templates3dotsMenu', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const templatesPage = new TemplatesPage(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const displayingDeleteButton = page.locator('.context-menu-delete');
    const deletedTemplate = page.locator('.mat-column-templateName >> nth=1');
    console.log('template3dotsMenu Delete Button 3dots Menu');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');

    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');

    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');

});








//await page.frameLocator('.messagedata-iframe').locator('.mail-btn').click({modifiers: ['Meta']});



//const autologout = ['console.log(helloWorld)']
// page.on("console", (message) => {
//     autologout.push(message.text())
// })
// console.log(autologout)

