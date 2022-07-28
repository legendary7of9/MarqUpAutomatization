import { test , expect, webkit, chromium, Browser, BrowserContext, Page } from '@playwright/test'
import { isContext } from 'vm'
import { UserBar, Users } from '../framework'
import { Search } from '../framework'
import { SignInPage } from '../framework'
import { ForgotPasswordPage } from '../framework'
import { SideBar } from '../framework'
import { Pagination } from '../framework'
import { DashboardPage } from '../framework'
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

// test.use({
//     viewport: {
//         height: 1080,
//         width: 1920
//     }
// })


test('templatesColumn @regChecklistNewLow @modelsPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const sideBarMenu = new SideBar(page);
    const userBar = new UserBar(page);
    const model = new ModelPage(page);
    const newModel = new NewEditCopyModelPage(page);
    const editModel = new NewEditCopyModelPage(page);
    const templateColumnLinkValue = page.locator('.deals-column-link >> nth=0'); //should be class for template
    const templateColumnValue = page.locator('.mat-column-templates >> nth=1');
    const pageHeader = page.locator('.section__title');
    const templateWithVisibility = page.locator('.template-name-column-link >> text=automatizationTemplate1');
    const draftTemplate = page.locator('.template-name-column-link >> text=Test100TestTemplateDoNotRemove');
    const publishTemplate = page.locator('.template-name-column-link >> text=autotestTemplate1');
    console.log('modelsPage Templates Column');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await sideBarMenu.sideBarModelClick();
    await model.templatesFilterClick();
    await expect(templateColumnLinkValue).toBeVisible();
    await expect(templateColumnLinkValue).toHaveAttribute('href', '/contract-templates/list?filter%5Bmodel_id%5D=602');
    await templateColumnLinkValue.click();
    await expect(page).toHaveURL('/contract-templates/list?&sort=-updated_at&filter[model_id]=602');
    await expect(pageHeader).toBeVisible();
    await expect(pageHeader).toHaveText('Templates');
    await sideBarMenu.sideBarModelClick();
    await model.templatesFilterClick();
    await model.templatesFilterClick();
    await expect(templateColumnValue).toBeVisible();
    await expect(templateColumnValue).toHaveText('-');
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await signIn.email.fill('alexey.banshykov@mobindustry.net');
    await signIn.password.fill('Qwerty123!');
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-templates/list?&sort=-updated_at&filter[model_id]=805');
    await expect(templateWithVisibility).toBeVisible();
    await expect(draftTemplate).toBeVisible();
    await expect(publishTemplate).toBeVisible();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await signIn.email.fill('alexey.banshykov+1@mobindustry.net');
    await signIn.password.fill('Qwerty123!');
    await signIn.signInButton();
    await page.waitForURL('/clients/360');
    await page.goto('/contract-templates/list?&sort=-updated_at&filter[model_id]=805');
    await expect(templateWithVisibility).toBeHidden();
    await expect(draftTemplate).toBeHidden();
    await expect(publishTemplate).toBeVisible();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await signIn.email.fill('alexey.banshykov+2@mobindustry.net');
    await signIn.password.fill('Qwerty123!');
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-templates/list?&sort=-updated_at&filter[model_id]=805');
    await expect(templateWithVisibility).toBeHidden();
    await expect(draftTemplate).toBeVisible();
    await expect(publishTemplate).toBeVisible();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-templates/list?&sort=-updated_at&filter[model_id]=805');
    await expect(templateWithVisibility).toBeVisible();
    await expect(draftTemplate).toBeVisible();
    await expect(publishTemplate).toBeVisible();
});




//await page.frameLocator('.messagedata-iframe').locator('.mail-btn').click({modifiers: ['Meta']});



//const autologout = ['console.log(helloWorld)']
// page.on("console", (message) => {
//     autologout.push(message.text())
// })
// console.log(autologout)

