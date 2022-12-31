import { test , expect } from '@playwright/test'
import { Users } from '../../framework'
import { SignInPage } from '../../framework'
import { SideBar } from '../../framework'
import { ModelPage } from '../../framework'
import { NewEditCopyModelPage } from '../../framework'

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

test('clientFieldSA @regChecklistNewHigh @newModelPage', async ({ page }) => {
    const locator = page.locator('[formcontrolname="account_id"]');
    console.log('newModel Client Field SA');
    await expect(locator).toHaveAttribute('placeholder', 'Client');
    await expect(locator).toHaveAttribute('role', 'listbox');
});

test('clientFieldValidationSA @regChecklistNewLow @newModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const newModel = new NewEditCopyModelPage(page);
    const locator = page.locator('#form-control-account_id mat-error');
    console.log('newModel Client Field SA valiadtion');
    await newModel.nextButtonClick();
    await expect(locator).toHaveText('Please fill in this field');
});

test('editClientFieldSA @regChecklistNewHigh @editModelPage', async ({ page, browserName }) => {
    const editModel = new NewEditCopyModelPage(page);
    const clientField = page.locator('[formcontrolname="account_id"]');
    const clientFieldEditedValue = page.locator('.mat-select-value >> nth=1');
    console.log('editModel Client Field SA');
    await page.goto('/models/edit-model/1495');
    await page.waitForSelector('#model-details-activate');
    await expect(clientField).toHaveAttribute('placeholder', 'Client');
    await expect(clientField).toHaveAttribute('role', 'listbox');
    await editModel.clientDropDownEdit();
    await editModel.saveChangesButtonClick();
    await page.goto('/models/edit-model/1495');
    await page.waitForSelector('#model-details-activate');
    await expect(clientFieldEditedValue).toHaveText('BanCompany');
    await editModel.clientDropDownChoose();
    await editModel.saveChangesButtonClick();
});