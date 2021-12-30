import { test , expect } from '@playwright/test'
import { NewTermPage, Users } from '../../framework'
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
    const newModel = new NewModelPage(page);
    await page.goto('');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await sideBarMenu.sideBarModelClick();
    await model.addModelButtonClick();
    await model.addModalNewModalButtonClick();
    await newModel.nameFieldFill(Helpers.generateRandomString());
    await newModel.descriptionFieldFill(Helpers.generateRandomString());
    await newModel.typeDropDownChoose();
    await newModel.fromFieldFill(Helpers.generateRandomNumberNewDealFrom(1, 31));
    await newModel.toFieldFill(Helpers.generateRandomNumberNewDealTo(60, 100));
    await newModel.nextButtonClick();
}); 

test('termField @regChecklistNewMedium @newTermPage', async ({ page }) => {
    const locator = page.locator('[formcontrolname="term"]');
    await expect(locator).toHaveAttribute('placeholder', 'Term');
    await expect(locator).toHaveAttribute('maxlength', '200');
    })

    //to be refactored
test('termFieldValidation @regChecklistNewLow @newTermPage', async ({ page }) => {

    })
    
    //to be refactored
test('weightFieldSlider @regChecklistNewHigh @newTermPage', async ({ page }) => {

    })
    
    //to be refactored
test('weightFieldManual @regChecklistNewMedium @newTermPage', async ({ page }) => {

    })
    
    //to be refactored
test('weightFieldManualValidation @regChecklistNewLow @newTermPage', async ({ page }) => {

    })

test('descriptionField @regChecklistNewLow @newTermPage', async ({ page }) => {
    const locator = page.locator('[formcontrolname="description"]');
    await expect(locator).toHaveAttribute('placeholder', 'Description');
    await expect(locator).toHaveAttribute('maxlength', '255');
    })

test('questionField @regChecklistNewHigh @newTermPage', async ({ page }) => {
    const locator = page.locator('[formcontrolname="question"]');
    await expect(locator).toHaveAttribute('placeholder', 'Question');
    await expect(locator).toHaveAttribute('maxlength', '255');
    })

    //to be refactored
test('questionFieldValidation @regChecklistNewLow @newTermPage', async ({ page }) => {

    })

test('answerField @regChecklistNewHigh @newTermPage', async ({ page }) => {
    const locator = page.locator('[formcontrolname="answer"]');
    await expect(locator).toHaveAttribute('placeholder', 'None');
    await expect(locator).toHaveAttribute('maxlength', '255');
    })

    //to be refactored
test('answerFieldValidation @regChecklistNewLow @newTermPage', async ({ page }) => {

    })

    //to be refactored
test('pointsFieldSlider @regChecklistNewHigh @newTermPage', async ({ page }) => {

    })

    //to be refactored
test('pointsFieldManual @regChecklistNewMedium @newTermPage', async ({ page }) => {

    })

    //to be refactored
test('answerRadioButton @regChecklistNewMedium @newTermPage', async ({ page }) => {

    })

    //to be refactored
test('addAnswerButton @regChecklistNewHigh @newTermPage', async ({ page }) => {

    })

    //to be refactored
test('deleteAnswerIcon @regChecklistNewHigh @newTermPage', async ({ page }) => {

    })

    //to be refactored
test('addAnswerButtonValidation @regChecklistNewLow @newTermPage', async ({ page }) => {

    })

    //to be refactored
test('addSampleButton @regChecklistNewHigh @newTermPage', async ({ page }) => {

    })

    //to be refactored
test('sampleFieldsValidation @regChecklistNewLow @newTermPage', async ({ page }) => {
    const newTerm = new NewTermPage(page);
    const locator = page.locator('[formcontrolname="sample"]');
    const locator2 = page.locator('');
    await newTerm.addSampleButtonClick();
    await expect(locator).toHaveAttribute('placeholder', 'Sample');
    await expect(locator).toHaveAttribute('maxlength', '2000');
    await expect(locator2).toHaveText('');
    })

    //to be refactored
test('cancelButton @regChecklistNewLow @newTermPage', async ({ page }) => {

    })

    //to be refactored
test('saveButton @regChecklistNewHigh @newTermPage', async ({ page }) => {

    })

    //to be refactored
test('saveButtonPointsFieldDidNotChoose @regChecklistNewMedium @newTermPage', async ({ page }) => {

    })

    //to be refactored
test('addAnotherTermButtonPointsFieldDidNotChoose @regChecklistNewHigh @newTermPage', async ({ page }) => {

    })

    //to be refactored
test('addAnotherTermButton @regChecklistNewHigh @newTermPage', async ({ page }) => {

    })

