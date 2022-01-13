import { test , expect } from '@playwright/test'
import { existsSync } from 'fs'
import { ModelPage, NewEditCopyModelPage, Users, SideBar, ViewingModelPage, UserBar, ExistingModelPage } from '../framework'
import { NewEditTermPage } from '../framework'
import { SignInPage } from '../framework'
import { Helpers } from '../lib/helpers/randomCharactersAndDigits.preload'

test.beforeEach(async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const sideBarMenu = new SideBar(page);
    const model = new ModelPage(page);
    await page.goto('');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await sideBarMenu.sideBarModelClick();
    await model.addModelButtonClick();
    await model.addModelChooseButtonClick();
}); 

test('nextButtonExistingPage @regChecklistNewHigh @existingModelPage', async ({ page }) => {
    const existingModel = new ExistingModelPage(page);
    const titleOfCopyModel = page.locator('.section__header h1');
    const nameFieldOfCopyModel = page.locator('#form-control-name textarea');
    const descriptionFieldOfCopyModel = page.locator('#form-control-description textarea');
    const typeFieldOfCopyModel = page.locator('#form-control-type_id mat-select');
    const weightFromFieldOfCopyModel = page.locator('#form-control-weight_scale_from input');
    const weightToFieldOfCopyModel = page.locator('#form-control-weight_scale_to input');
    console.log('existingModelPage Next Button Existing Page');
    await existingModel.searchModelsUse();
    await page.waitForSelector('.mat-column-name >> nth=1');
    await existingModel.radioButtonChoose();
    await existingModel.nextButtonClick();
    await expect(page).toHaveURL('/models/clone-model/1505');
    await expect(titleOfCopyModel).toHaveText('Copy Model');
    await expect(nameFieldOfCopyModel).toHaveValue('Copy_1505_test100test100DoNotRemove15');
    await expect(descriptionFieldOfCopyModel).toHaveValue('test');
    await expect(typeFieldOfCopyModel).toHaveText('Test');
    await expect(weightFromFieldOfCopyModel).toHaveValue('1');
    await expect(weightToFieldOfCopyModel).toHaveValue('100');
    })