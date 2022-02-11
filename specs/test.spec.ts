import { test , expect } from '@playwright/test'
import { url } from 'inspector'
import { UserBar, Users } from '../framework'
import { SignInPage } from '../framework'
import { SideBar } from '../framework'
import { TemplatesPage } from '../framework'
import { NewEditCopyModelPage } from '../framework'
import { DealsPage } from '../framework'
import { NewEditTermPage } from '../framework'
import { ViewingModelPage } from '../framework'
import { NewEditDealPage } from '../framework'
import { DealAnalysisPage } from '../framework'
import { ExistingModelPage } from '../framework'
import { ModelPage } from '../framework'
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

test('choosingExistingModel @regChecklistNewHigh @existingModelPage', async ({ page }) => {
    const existingModel = new ExistingModelPage(page);
    const checkedUnchecked0 = page.locator('mat-radio-button >> nth=3');
    const checkedUnchecked1 = page.locator('mat-radio-button >> nth=6');
    const checkedUnchecked2 = page.locator('mat-radio-button >> nth=8');
    console.log('existingModelPage Choosing Existing Model');
    await existingModel.searchModelsUse();
    await expect(checkedUnchecked0).toHaveClass('select-model-item mat-radio-button mat-primary');
    await expect(checkedUnchecked1).toHaveClass('select-model-item mat-radio-button mat-primary');
    await expect(checkedUnchecked2).toHaveClass('select-model-item mat-radio-button mat-primary');
    await existingModel.radioButtonChooseZero();
    await expect(checkedUnchecked0).toHaveClass('select-model-item mat-radio-button mat-primary mat-radio-checked');
    await expect(checkedUnchecked1).toHaveClass('select-model-item mat-radio-button mat-primary');
    await expect(checkedUnchecked2).toHaveClass('select-model-item mat-radio-button mat-primary');
    await existingModel.radioButtonChooseOne();
    await expect(checkedUnchecked0).toHaveClass('select-model-item mat-radio-button mat-primary');
    await expect(checkedUnchecked1).toHaveClass('select-model-item mat-radio-button mat-primary mat-radio-checked');
    await expect(checkedUnchecked2).toHaveClass('select-model-item mat-radio-button mat-primary');
    await existingModel.radioButtonChooseTwo();
    await expect(checkedUnchecked0).toHaveClass('select-model-item mat-radio-button mat-primary');
    await expect(checkedUnchecked1).toHaveClass('select-model-item mat-radio-button mat-primary');
    await expect(checkedUnchecked2).toHaveClass('select-model-item mat-radio-button mat-primary mat-radio-checked');   
    })