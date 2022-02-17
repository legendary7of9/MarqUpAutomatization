import { test , expect } from '@playwright/test'
import { NewEditCopyModelPage, Users } from '../../framework'
import { SignInPage } from '../../framework'
import { SideBar } from '../../framework'
import { UserBar } from '../../framework'
import { ModelPage } from '../../framework'
import { ExistingModelPage } from '../../framework'
import { Helpers } from '../../lib/helpers/randomCharactersAndDigits.preload'

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

test('displayingAllExistingModels @regChecklistNewHigh @existingModelPage', async ({ page }) => {
    const existingModel = new ExistingModelPage(page);
    const displayingModels0 = page.locator('.mat-column-name >> nth=3');
    const displayingModels1 = page.locator('.mat-column-name >> nth=6');
    const displayingModels2 = page.locator('.mat-column-name >> nth=8');
    const displayingModels3 = page.locator('.mat-column-name >> nth=9');
    const radioButtonsNoneSelected = page.locator('.btn-group button');
    const displayingNextButton = page.locator('.mat-raised-button');
    const displayingCancelButton = page.locator('.btn-cancel');
    console.log('existingModelPage Displaying All Existing Models');
    await page.waitForSelector('.mat-column-name >> nth=1');
    await existingModel.searchModelsUse();
    await page.waitForSelector('.mat-column-name >> nth=1');
    await expect(displayingModels0).toContainText('test100test100DoNotRemove');
    await expect(displayingModels1).toContainText('test100test100DoNotRemove');
    await expect(displayingModels2).toContainText('test100test100DoNotRemove');
    await expect(displayingModels3).toContainText('test100test100DoNotRemove');
    await expect(radioButtonsNoneSelected).toHaveClass('btn mat-raised-button disabled mat-primary');
    await expect(displayingNextButton).toHaveText('Next');
    await expect(displayingCancelButton).toHaveText('cancel');
    })

test('searchByModels @regChecklistNewMedium @existingModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const userMenu = new UserBar(page);
    const model = new ModelPage(page);
    const sideBarMenu = new SideBar(page);
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const existingModel = new ExistingModelPage(page);
    const searchResult = page.locator('.mat-column-name >> nth=1');
    console.log('existingModelPage Search By Models AA');
    await page.waitForSelector('.mat-column-name >> nth=1');
    await existingModel.searchModelsUse();
    await expect(searchResult).toBeVisible();
    await expect(searchResult).toContainText('test100test100DoNotRemove');
    await userMenu.userInfoButtonClick();
    await userMenu.signOutButtonClick();
    console.log('existingModelPage Search By Models AU');
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await sideBarMenu.sideBarModelClick();
    await model.addModelButtonClick();
    await model.addModelChooseButtonClick();
    await page.waitForSelector('.mat-column-name >> nth=1');
    await existingModel.searchModelsUse();
    await expect(searchResult).toBeVisible();
    await expect(searchResult).toContainText('test100test100DoNotRemove');
    await userMenu.userInfoButtonClick();
    await userMenu.signOutButtonClick();
    console.log('existingModelPage Search By Models SA');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await sideBarMenu.sideBarModelClick();
    await model.addModelButtonClick();
    await model.addModelChooseButtonClick();
    await page.waitForSelector('.mat-column-name >> nth=1');
    await existingModel.searchModelsUse();
    await expect(searchResult).toBeVisible();
    await expect(searchResult).toContainText('test100test100DoNotRemove');
    })

test('choosingExistingModel @regChecklistNewHigh @existingModelPage', async ({ page }) => {
    const existingModel = new ExistingModelPage(page);
    const checkedUnchecked0 = page.locator('mat-radio-button >> nth=0');
    const checkedUnchecked1 = page.locator('mat-radio-button >> nth=1');
    const checkedUnchecked2 = page.locator('mat-radio-button >> nth=2');
    console.log('existingModelPage Choosing Existing Model');
    await existingModel.searchModelsUse();
    await expect(checkedUnchecked0).toHaveClass('select-model-item mat-radio-button mat-primary');
    await expect(checkedUnchecked1).toHaveClass('select-model-item mat-radio-button mat-primary');
    await expect(checkedUnchecked2).toHaveClass('select-model-item mat-radio-button mat-primary');
    await page.locator('.mat-radio-button >> nth=0').click();
    await expect(checkedUnchecked0).toHaveClass('select-model-item mat-radio-button mat-primary mat-radio-checked');
    await expect(checkedUnchecked1).toHaveClass('select-model-item mat-radio-button mat-primary');
    await expect(checkedUnchecked2).toHaveClass('select-model-item mat-radio-button mat-primary');
    await page.locator('.mat-radio-button >> nth=1').click();
    await expect(checkedUnchecked0).toHaveClass('select-model-item mat-radio-button mat-primary');
    await expect(checkedUnchecked1).toHaveClass('select-model-item mat-radio-button mat-primary mat-radio-checked');
    await expect(checkedUnchecked2).toHaveClass('select-model-item mat-radio-button mat-primary');
    await page.locator('.mat-radio-button >> nth=2').click();
    await expect(checkedUnchecked0).toHaveClass('select-model-item mat-radio-button mat-primary');
    await expect(checkedUnchecked1).toHaveClass('select-model-item mat-radio-button mat-primary');
    await expect(checkedUnchecked2).toHaveClass('select-model-item mat-radio-button mat-primary mat-radio-checked'); 
    })

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
    await page.waitForSelector('.mat-column-name >> text=test100test100DoNotRemove15');
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

test('cancelButtonExistingPage @regChecklistNewLow @existingModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const existingModel = new ExistingModelPage(page);
    console.log('existingModelPage Cancel Button Existing Page');
    await existingModel.cancelButtonClick();
    await expect(page).toHaveURL('/models?&sort=name');
    })

test('cancelButtonNewModelExistingPage @regChecklistNewLow @existingModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const existingModel = new ExistingModelPage(page);
    const copyModel = new NewEditCopyModelPage(page);
    console.log('existingModelPage Cancel Button New Model Existing Page');
    await existingModel.searchModelsUse();
    await page.waitForSelector('.mat-column-name >> nth=1');
    await existingModel.radioButtonChoose();
    await existingModel.nextButtonClick();
    await copyModel.cancelButtonCopyPageClick();
    await expect(page).toHaveURL('/models?&sort=name');
    })

test('saveButtonNewModelExistingPage @regChecklistNewHigh @existingModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const newModel = new NewEditCopyModelPage(page);
    const existingModel = new ExistingModelPage(page);
    const model = new ModelPage(page);
    const addTermButton = page.locator('#terms-list-add-term');
    console.log('existingModelPage Save Button New Model Existing Page');
    await page.goto('/models?&sort=name');
    await model.addModelButtonClick();
    await model.addModalNewModalButtonClick();
    await newModel.nameFieldCopyFill();
    await newModel.descriptionFieldFill(Helpers.generateRandomString());
    await newModel.typeDropDownChoose();
    await newModel.fromFieldFill(Helpers.generateRandomNumberNewModelFrom(1, 31));
    await newModel.toFieldFill(Helpers.generateRandomNumberNewModelTo(60, 100));
    await newModel.saveButtonClick();
    await page.goto('/models?&sort=name');
    await model.addModelButtonClick();
    await model.addModelChooseButtonClick();
    await page.waitForSelector('.mat-column-name >> nth=1');
    await existingModel.firstMoedlFieldChoose();
    await existingModel.nextButtonClick();
    await page.waitForTimeout(1500);
    await newModel.nameFieldEditAfterCopyFill();
    await newModel.saveButtonCopyPageClick();
    await expect(addTermButton).toHaveAttribute('id','terms-list-add-term');
    await page.goto('/models?&sort=name');
    await model.createFilterClick();
    await page.waitForTimeout(1500);
    await model.threeDotsMenuButtonClick();
    await model.threeDotsMenuEditButtonClick();
    await page.waitForTimeout(1500);
    await newModel.nameFieldFill(Helpers.generateRandomString());
    await newModel.saveChangesButtonClick();
    await page.waitForTimeout(1500);
    await model.threeDotsMenuButtonClick2();
    await model.threeDotsMenuEditButtonClick();
    await page.waitForTimeout(1500);
    await newModel.nameFieldFill(Helpers.generateRandomString());
    await newModel.saveChangesButtonClick();         
    })

test('saveButtonValidationNewModelExistingPage @regChecklistNewHigh @existingModelPage', async ({ page }) => {
    const existingModel = new ExistingModelPage(page);
    const copyModel = new NewEditCopyModelPage(page);
    const nameFieldValidation = page.locator('#form-control-name mat-error');
    console.log('existingModelPage Save Button Validation New Model Existing Page');
    await existingModel.radioButtonChoose();
    await existingModel.nextButtonClick();
    await page.waitForTimeout(2000);
    await copyModel.nameFieldCopyExistFill();
    await copyModel.saveButtonCopyPageClick();
    await page.waitForSelector('#form-control-name mat-error');
    await expect(nameFieldValidation).toHaveText('Name "test100test100DoNotRemove15" has already been taken.');
    })