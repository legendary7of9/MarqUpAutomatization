import { test , expect } from '@playwright/test'
import { Users } from '../../framework'
import { SignInPage } from '../../framework'
import { SideBar } from '../../framework'
import { ModelPage } from '../../framework'
import { NewModelPage } from '../../framework'
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
    await model.addModalNewModalButtonClick();
});   

test('nameField @regChecklistnewHigh @newModelPage', async ({ page }) => {
    const locator = page.locator('[formcontrolname="name"]');
    await expect(locator).toHaveAttribute('placeholder', 'Name');
    await expect(locator).toHaveAttribute('maxlength', '255');
    })

test('nameFieldValidation @regChecklistnewLow @newModelPage', async ({ page }) => {
    const newModel = new NewModelPage(page);
    const locator = page.locator('#form-control-name');
    await newModel.nextButtonClick();
    await expect(locator).toHaveText(['Name Please fill in this field']);
    })

test('descriptionField @regChecklistnewHigh @newModelPage', async ({ page }) => {
    const locator = page.locator('[formcontrolname="description"]');
    await expect(locator).toHaveAttribute('placeholder', 'Description');
    await expect(locator).toHaveAttribute('maxlength', '255');
    })

test('typeField @regChecklistnewHigh @newModelPage', async ({ page }) => {
    const locator = page.locator('[formcontrolname="type_id"]');
    await expect(locator).toHaveAttribute('placeholder', 'Type');
    await expect(locator).toHaveAttribute('role', 'listbox');
    })

test('typeDropDownValidation @regChecklistnewLow @newModelPage', async ({ page }) => {
    const newModel = new NewModelPage(page);
    const locator = page.locator('#form-control-type_id');
    await newModel.nextButtonClick();
    await expect(locator).toHaveText(['TypeType Please fill in this field']);
    })

test('typeNameField @regChecklistnewHigh @newModelPage', async ({ page }) => {
    const newModel = new NewModelPage(page);
    const locator = page.locator('[formcontrolname="type_id"]');
    const locator2 = page.locator('[formcontrolname="type_name"]');
    await newModel.typeDropDownClick();
    await newModel.typeDropDownOtherChoose();
    await expect(locator).toHaveText(['Other']);
    await expect(locator2).toBeVisible();
    await expect(locator2).toHaveAttribute('placeholder', 'Type Name');
    })

test('typeNameFieldValidation @regChecklistnewLow @newModelPage', async ({ page }) => {
    const newModel = new NewModelPage(page);
    const locator = page.locator('#form-control-type_name');
    await newModel.typeDropDownClick();
    await newModel.typeDropDownOtherChoose();
    await newModel.nextButtonClick();
    await expect(locator).toHaveText(['Type Name Please fill in this field']);
    })

test('infoIconWeightScale @regChecklistnewLow @newModelPage', async ({ page }) => {
    const newModel = new NewModelPage(page);
    const locator = page.locator('text=The weighting scale is used as a range to assign different weights for terms in the model - e.g. 1 to 100.  The weighting is used to calculate the scoring for each term during deal making.');
    await newModel.iIconClick();
    await expect(locator).toHaveText('The weighting scale is used as a range to assign different weights for terms in the model - e.g. 1 to 100.  The weighting is used to calculate the scoring for each term during deal making.');
    })

test('weightScaleFrom @regChecklistnewLow @newModelPage', async ({ page }) => {
    const locator = page.locator('[formcontrolname="weight_scale_from"]');
    await expect(locator).toHaveAttribute('placeholder', 'From');
    })
    
test('weightScaleFromValidation @regChecklistnewHigh @newModelPage', async ({ page }) => {
    const newModel = new NewModelPage(page);
    const locator = page.locator('#form-control-weight_scale_from');
    await newModel.nextButtonClick();
    await expect(locator).toHaveText('From Please fill in this field');
    await newModel.fromFieldValidation();
    await expect(locator).toHaveText('From Weight Scale From must be no less than 1.');
    })
    
test('weightScaleTo @regChecklistnewLow @newModelPage', async ({ page }) => {
    const locator = page.locator('[formcontrolname="weight_scale_to"]');
    await expect(locator).toHaveAttribute('placeholder', 'To');
    })
    
test('weightScaleToValidation @regChecklistnewHigh @newModelPage', async ({ page }) => {
    const newModel = new NewModelPage(page);
    const locator = page.locator('#form-control-weight_scale_to');
    await newModel.nextButtonClick();
    await expect(locator).toHaveText('To Please fill in this field');
    })  

test('nextButton @regChecklistnewHigh @newModelPage', async ({ page }) => {
    const newModel = new NewModelPage(page);
    const locator = page.locator('text=New Term');
    await newModel.nameFieldFill(Helpers.generateRandomString());
    await newModel.typeDropDownChoose();
    await newModel.fromFieldFill(Helpers.generateRandomNumberFrom());
    await newModel.toFieldFill(Helpers.generateRandomNumberTo());
    await newModel.nextButtonClick();
    await page.waitForSelector('text=New Term');
    await expect(locator).toHaveText('New Term');
    })

test('nextButtonEmptyFields @regChecklistnewMedium @newModelPage', async ({ page }) => {
    const newModel = new NewModelPage(page);
    const locator = page.locator('text=Please fill in this field');
    await newModel.nextButtonClick();
    await expect(locator).toHaveText(['Please fill in this field', 'Please fill in this field', 'Please fill in this field', 'Please fill in this field']);
    })

test('nextButtonToSmallterThenFrom @regChecklistnewHigh @newModelPage', async ({ page }) => {
    const newModel = new NewModelPage(page);
    const locator = page.locator('text=Minimum weight cannot be bigger than maximum weight');
    await newModel.nameFieldFill(Helpers.generateRandomString());
    await newModel.typeDropDownChoose();
    await newModel.fromFieldFillSmaller();
    await newModel.toFieldFillSmaller();
    await newModel.nextButtonClick();
    await expect(locator).toHaveText(['Minimum weight cannot be bigger than maximum weight']);
    })
    
test('saveButton @regChecklistnewHigh @newModelPage', async ({ page }) => {
    const newModel = new NewModelPage(page);
    const locator = page.locator('text=There are no terms yet. You can add new term here');
    await newModel.nameFieldFill(Helpers.generateRandomString());
    await newModel.typeDropDownChoose();
    await newModel.fromFieldFill(Helpers.generateRandomNumberFrom());
    await newModel.toFieldFill(Helpers.generateRandomNumberTo());
    await newModel.saveButtonClick();
    await page.waitForSelector('text=There are no terms yet. You can add new term here');
    await expect(locator).toHaveText('There are no terms yet. You can add new term here');
    })

test('saveButtonEmptyFields @regChecklistnewMedium @newModelPage', async ({ page }) => {
    const newModel = new NewModelPage(page);
    const locator = page.locator('text=Please fill in this field');
    await newModel.saveButtonClick();
    await expect(locator).toHaveText(['Please fill in this field', 'Please fill in this field', 'Please fill in this field', 'Please fill in this field']);
    })

test('saveButtonToSmallterThenFrom @regChecklistnewMedium @newModelPage', async ({ page }) => {
    const newModel = new NewModelPage(page);
    const locator = page.locator('text=Minimum weight cannot be bigger than maximum weight');
    await newModel.nameFieldFill(Helpers.generateRandomString());
    await newModel.typeDropDownChoose();
    await newModel.fromFieldFillSmaller();
    await newModel.toFieldFillSmaller();
    await newModel.saveButtonClick();
    await expect(locator).toHaveText(['Minimum weight cannot be bigger than maximum weight']);
    })
 
test('cancelButton @regChecklistnewMedium @newModelPage', async ({ page }) => {
    const newModel = new NewModelPage(page);
    await newModel.cancelButtonClick();
    await expect(page).toHaveURL('/models?&sort=name');
    })
    
test('createdModelsArchived @regChecklistnewHigh @newModelPage', async ({ page }) => {
    const newModel = new NewModelPage(page);
    const sideBarMenu = new SideBar(page);
    const model = new ModelPage(page);
    const locator = page.locator('td.mat-column-status >> nth=0');
    await newModel.nameFieldFill(Helpers.generateRandomString());
    await newModel.typeDropDownChoose();
    await newModel.fromFieldFillSmaller();
    await newModel.toFieldFillSmaller();
    await newModel.nextButtonClick();
    await sideBarMenu.sideBarModelClick();
    await model.createFilterClick();
    await expect(locator).toHaveText('Archived');
    })     


