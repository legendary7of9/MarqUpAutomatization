import { test , expect } from '@playwright/test'
import { UserBar, Users } from '../../framework'
import { SignInPage } from '../../framework'
import { SideBar } from '../../framework'
import { TemplatesPage } from '../../framework'
import { Helpers } from '../../lib/helpers/randomCharactersAndDigits.preload'

test.beforeEach(async ({ page }) => {
    await page.goto('');
}); 

test('buttonsOf3dotsMenuDraftStatus @regClickTractsMedium @template3dotsMenu', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const templatesPage = new TemplatesPage(page);
    const editButton = page.locator('.context-menu-edit');
    const saveAsNewButton = page.locator('.context-menu-save-as-new');
    const shareAccessButton = page.locator('.context-menu-share-access');
    const createContractButton = page.locator('.context-menu-create-contract');
    const deleteButton = page.locator('.context-menu-delete');
    console.log('template3dotsMenu Buttons Of 3dots Menu Draft Status');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-templates/list?&sort=-created_at');
    await templatesPage.statusFilterClick();
    await templatesPage.statusFilterClick();
    await templatesPage.threeDotsMenuButtonClick();
    await expect(editButton).toBeVisible();
    await expect(saveAsNewButton).toBeVisible();
    await expect(shareAccessButton).toBeVisible();
    await expect(createContractButton).toBeHidden();
    await expect(deleteButton).toBeVisible();
    await page.click('.cdk-overlay-backdrop');
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-templates/list?&sort=-created_at');
    await templatesPage.statusFilterClick();
    await templatesPage.statusFilterClick();
    await templatesPage.threeDotsMenuButtonClick();
    await expect(editButton).toBeVisible();
    await expect(saveAsNewButton).toBeVisible();
    await expect(shareAccessButton).toBeHidden();
    await expect(createContractButton).toBeHidden();
    await expect(deleteButton).toBeVisible();
    })

    //to be refacotred
test('buttonsOf3dotsMenuPublishedStatus @regClickTractsMedium @template3dotsMenu', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const templatesPage = new TemplatesPage(page);
    const editButton = page.locator('.context-menu-edit');
    const saveAsNewButton = page.locator('.context-menu-save-as-new');
    const shareAccessButton = page.locator('.context-menu-share-access');
    const createContractButton = page.locator('.context-menu-create-contract');
    const deleteButton = page.locator('.context-menu-delete');
    console.log('template3dotsMenu Buttons Of 3dots Menu Published Status');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-templates/list?&sort=-created_at');
    await templatesPage.statusFilterClick();
    await templatesPage.threeDotsMenuButtonClick();
    await expect(editButton).toBeVisible();
    await expect(saveAsNewButton).toBeVisible();
    await expect(shareAccessButton).toBeHidden();
    await expect(createContractButton).toBeHidden();
    await expect(deleteButton).toBeVisible();
    await page.click('.cdk-overlay-backdrop');
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-templates/list?&sort=-created_at');
    await templatesPage.statusFilterClick();
    await templatesPage.threeDotsMenuButtonClick();
    await expect(editButton).toBeVisible();
    await expect(saveAsNewButton).toBeVisible();
    await expect(shareAccessButton).toBeHidden();
    await expect(createContractButton).toBeVisible();
    await expect(deleteButton).toBeVisible();
    await page.click('.cdk-overlay-backdrop');
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/contract-templates/list?&sort=-created_at');
    await templatesPage.threeDotsMenuButtonClick();
    await expect(editButton).toBeHidden();
    await expect(saveAsNewButton).toBeHidden();
    await expect(shareAccessButton).toBeHidden();
    await expect(createContractButton).toBeVisible();
    await expect(deleteButton).toBeHidden();
    })

test('editButton3dotsMenu @regClickTractsMedium @template3dotsMenu', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const templatesPage = new TemplatesPage(page);
    console.log('template3dotsMenu Edit Button 3dots Menu');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-templates/list?&sort=-created_at');
    await templatesPage.threeDotsMenuEditButtonClick();
    await expect(page.url()).toContain('/contract-template/edit/');
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-templates/list?&sort=-created_at');
    await templatesPage.threeDotsMenuEditButtonClick();
    await expect(page.url()).toContain('/contract-template/edit/');
    })

    //to be refactored
test('saveAsNewButton3dotsMenu @regClickTractsMedium @template3dotsMenu', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const templatesPage = new TemplatesPage(page);
    const copiedTemplateName = page.locator('[formcontrolname="title"] input');
    console.log('template3dotsMenu Save As New Button 3dots Menu');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-templates/list?&sort=-created_at');
    await templatesPage.threeDotsMenuSaveAsNewButtonClick();
    await page.waitForSelector('[formcontrolname="title"]');
    await expect(page.url()).toContain('/contract-template/clone/');
    await expect(copiedTemplateName).toContainEqual('Copy of');
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-templates/list?&sort=-created_at');
    await templatesPage.threeDotsMenuSaveAsNewButtonClick();
    await page.waitForSelector('[formcontrolname="title"]');
    await expect(page.url()).toContain('/contract-template/clone/');
    await expect(copiedTemplateName).toContainText('Copy of');
    })