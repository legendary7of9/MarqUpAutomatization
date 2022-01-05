import { test , expect } from '@playwright/test'
import { Users } from '../../framework'
import { SignInPage } from '../../framework'
import { SideBar } from '../../framework'
import { ModelPage } from '../../framework'
import { NewEditModelPage } from '../../framework'
import { Helpers } from '../../lib/helpers/randomCharactersAndDigits.preload'

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
    })

test('clientFieldValidationSA @regChecklistNewLow @newModelPage', async ({ page }) => {
    const newModel = new NewEditModelPage(page);
    const locator = page.locator('#form-control-account_id mat-error');
    console.log('newModel Client Field SA valiadtion');
    await newModel.nextButtonClick();
    await expect(locator).toHaveText('Please fill in this field');
    })

test('editClientFieldSA @regChecklistNewHigh @editModelPage', async ({ page }) => {
    const sideBarMenu = new SideBar(page);
    const model = new ModelPage(page);
    const editModel = new NewEditModelPage(page);
    console.log('editModel Client Field SA');
    await editModel.nameFieldFill(Helpers.generateRandomString());
    await editModel.descriptionFieldFill(Helpers.generateRandomString());
    await editModel.typeDropDownChoose();
    await editModel.clientDropDownChoose();
    await editModel.fromFieldFill(Helpers.generateRandomNumberNewModelFrom(1, 31));
    await editModel.toFieldFill(Helpers.generateRandomNumberNewModelTo(60, 100));
    await editModel.nextButtonClick();
    await sideBarMenu.sideBarModelClick();
    await model.createFilterClick();
    await page.focus('tr.mat-row.ng-star-inserted >> nth=0');
    await model.threeDotsMenuButtonClick();
    await model.threeDotsMenuEditButtonClick();
    const locator = page.locator('[formcontrolname="account_id"]');
    await expect(locator).toHaveAttribute('placeholder', 'Client');
    await expect(locator).toHaveAttribute('role', 'listbox');
    })