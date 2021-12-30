import { test , expect } from '@playwright/test'
import { Users } from '../../framework'
import { SignInPage } from '../../framework'
import { SideBar } from '../../framework'
import { ModelPage } from '../../framework'
import { NewModelPage } from '../../framework'

test.beforeEach(async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const sideBarMenu = new SideBar(page);
    const model = new ModelPage(page);
    await page.goto('');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await sideBarMenu.sideBarModelClick();
    await model.addModelButtonClick();
    await model.addModalNewModalButtonClick();
}); 

test('clientFieldSA @regChecklistnewHigh @newModelPage', async ({ page }) => {
    const locator = page.locator('[formcontrolname="account_id"]');
    await expect(locator).toHaveAttribute('placeholder', 'Client');
    await expect(locator).toHaveAttribute('role', 'listbox');
    })

test('clientFieldValidationSA @regChecklistnewHigh @newModelPage', async ({ page }) => {
    const newModel = new NewModelPage(page);
    const locator = page.locator('#form-control-account_id');
    await newModel.nextButtonClick();
    await expect(locator).toHaveText('ClientClient Please fill in this field');
    })