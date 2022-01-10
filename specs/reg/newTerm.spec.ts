import { test , expect } from '@playwright/test'
import { Users } from '../../framework'
import { SideBar } from '../../framework'
import { NewEditTermPage } from '../../framework'
import { SignInPage } from '../../framework'
import { ModelPage } from '../../framework'
import { NewEditModelPage } from '../../framework'
import { ViewingModelPage } from '../../framework'
import { Helpers } from '../../lib/helpers/randomCharactersAndDigits.preload'

test.beforeEach(async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    await page.goto('');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
}); 

test('termField @regChecklistNewMedium @newTermPage', async ({ page, browserName}) => {
    test.skip(browserName === 'chromium');
    const termField = page.locator('[formcontrolname="term"]');
    console.log('newTerm Term Field');
    await page.goto('/models/1048/terms/add-term');
    await expect(termField).toHaveAttribute('placeholder', 'Term');
    await expect(termField).toHaveAttribute('maxlength', '200');
    })

test('termFieldValidation @regChecklistNewLow @newTermPage', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const newTerm = new NewEditTermPage(page);
    const termField = page.locator('#form-control-term mat-error');
    console.log('newTerm Term Field validation');
    await page.goto('/models/1048/terms/add-term');
    await newTerm.addAnotherTermButtonClick();
    await expect(termField).toHaveText('Please fill in this field');
    })
    
test('weightFieldSlider @regChecklistNewHigh @newTermPage', async ({ page }) => {
    const newTerm = new NewEditTermPage(page);
    const valueSlider = page.locator('#form-control-weight');
    const valueManual = page.locator('#form-control-weight-manual input');
    console.log('newTerm Weight Field Slider');
    await page.goto('/models/1048/terms/add-term');
    await expect(valueSlider).toHaveAttribute('aria-valuemin', '22');
    await expect(valueSlider).toHaveAttribute('aria-valuemax', '88');
    await expect(valueSlider).toHaveAttribute('aria-valuenow', '22');
    await newTerm.weightSliderUseUp();
    await expect(valueSlider).toHaveAttribute('aria-valuenow', '60');
    await expect(valueManual).toHaveValue('60');
    await newTerm.weightSliderUseDown();
    await expect(valueSlider).toHaveAttribute('aria-valuenow', '57');
    await expect(valueManual).toHaveValue('57');
    })
    
test('weightFieldManual @regChecklistNewMedium @newTermPage', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const newTerm = new NewEditTermPage(page);
    const valueSlider = page.locator('#form-control-weight');
    const valueManual = page.locator('#form-control-weight-manual input');
    console.log('newTerm Weight Field Manual');
    await page.goto('/models/1048/terms/add-term');
    await newTerm.manualInputWeightFieldFill();
    await expect(valueManual).toHaveValue('60');
    await expect(valueSlider).toHaveAttribute('aria-valuenow', '60');
    })
    
test('weightFieldManualValidation @regChecklistNewLow @newTermPage', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const newTerm = new NewEditTermPage(page);
    const valueManual = page.locator('#form-control-weight-manual mat-error');
    console.log('newTerm Weight Field Manual validation');
    await page.goto('/models/1048/terms/add-term');
    await newTerm.manualInputWeightFieldClear();
    await expect(valueManual).toHaveText('Weight must be from 22 to 88');
    })

test('descriptionField @regChecklistNewLow @newTermPage', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const descriptionField = page.locator('[formcontrolname="description"]');
    console.log('newTerm Description Field');
    await page.goto('/models/1048/terms/add-term');
    await expect(descriptionField).toHaveAttribute('placeholder', 'Description');
    await expect(descriptionField).toHaveAttribute('maxlength', '255');
    })

test('questionField @regChecklistNewHigh @newTermPage', async ({ page }) => {
    const questionField = page.locator('[formcontrolname="question"]');
    console.log('newTerm Question Field');
    await page.goto('/models/1048/terms/add-term');
    await expect(questionField).toHaveAttribute('placeholder', 'Question');
    await expect(questionField).toHaveAttribute('maxlength', '255');
    })

test('questionFieldValidation @regChecklistNewLow @newTermPage', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const newTerm = new NewEditTermPage(page);
    const questionField = page.locator('#form-control-question mat-error');
    console.log('newTerm Question Field validation');
    await page.goto('/models/1048/terms/add-term');
    await newTerm.addAnotherTermButtonClick();
    await expect(questionField).toHaveText('Please fill in this field');
    })

test('answerField @regChecklistNewHigh @newTermPage', async ({ page }) => {
    const answerField = page.locator('[formcontrolname="answer"]');
    console.log('newTerm Answer Field');
    await page.goto('/models/1048/terms/add-term');
    await expect(answerField).toHaveAttribute('placeholder', 'None');
    await expect(answerField).toHaveAttribute('maxlength', '255');
    })

test('answerFieldValidation @regChecklistNewLow @newTermPage', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const newTerm = new NewEditTermPage(page);
    const answerField = page.locator('#form-control-answer-0 mat-error');
    console.log('newTerm Answer Field validation');
    await page.goto('/models/1048/terms/add-term');
    await newTerm.addAnotherTermButtonClick();
    await expect(answerField).toHaveText('Please fill in this field');
    })

test('pointsFieldSlider @regChecklistNewHigh @newTermPage', async ({ page }) => {
    const newTerm = new NewEditTermPage(page);
    const valueSlider = page.locator('#form-control-answer-weight-0');
    const valueManual = page.locator('#form-control-answer-weight-manual-0 input');
    console.log('newTerm Weight Field Slider');
    await page.goto('/models/1048/terms/add-term');
    await expect(valueSlider).toHaveAttribute('aria-valuemin', '-5');
    await expect(valueSlider).toHaveAttribute('aria-valuemax', '5');
    await expect(valueSlider).toHaveAttribute('aria-valuenow', '0');
    await newTerm.pointSliderUseUp();
    await expect(valueSlider).toHaveAttribute('aria-valuenow', '1.5');
    await expect(valueManual).toHaveValue('1.5');
    await newTerm.pointSliderUseDown();
    await expect(valueSlider).toHaveAttribute('aria-valuenow', '-1.5');
    await expect(valueManual).toHaveValue('-1.5');
    })

test('pointsFieldManual @regChecklistNewMedium @newTermPage', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const newTerm = new NewEditTermPage(page);
    const valueSlider = page.locator('#form-control-answer-weight-0');
    const valueManual = page.locator('#form-control-answer-weight-manual-0 input');
    console.log('newTerm Points Field Manual');
    await page.goto('/models/1048/terms/add-term');
    await newTerm.manualInputPointsFieldFillPositiveValue();
    await expect(valueManual).toHaveValue('4.5');
    await expect(valueSlider).toHaveAttribute('aria-valuenow', '4.5');
    await newTerm.manualInputPointsFieldFillNegativeValue();
    await expect(valueManual).toHaveValue('-2.5');
    await expect(valueSlider).toHaveAttribute('aria-valuenow', '-2.5');
    await newTerm.manualInputPointsFieldFillZeroValue();
    await expect(valueManual).toHaveValue('0');
    await expect(valueSlider).toHaveAttribute('aria-valuenow', '0');
    })

test('answerRadioButton @regChecklistNewMedium @newTermPage', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const newTerm = new NewEditTermPage(page);
    const radioButton0 = page.locator('#form-control-is_model-0 mat-radio-button');
    const radioButton1 = page.locator('#form-control-is_model-1 mat-radio-button');
    const radioButton2 = page.locator('#form-control-is_model-2 mat-radio-button');
    const radioButton3 = page.locator('#form-control-is_model-3 mat-radio-button');
    const radioButton4 = page.locator('#form-control-is_model-4 mat-radio-button');
    console.log('newTerm Answer Radio Button');
    await page.goto('/models/1048/terms/add-term');
    await expect(radioButton0).toHaveClass('mat-radio-button mat-primary mat-radio-checked');
    await newTerm.addAnswerButtonClick();
    await newTerm.addAnswerButtonClick();
    await newTerm.addAnswerButtonClick();
    await newTerm.addAnswerButtonClick();
    await expect(radioButton0).toHaveClass('mat-radio-button mat-primary mat-radio-checked');
    await expect(radioButton1).toHaveClass('mat-radio-button mat-primary');
    await expect(radioButton2).toHaveClass('mat-radio-button mat-primary');
    await expect(radioButton3).toHaveClass('mat-radio-button mat-primary');
    await expect(radioButton4).toHaveClass('mat-radio-button mat-primary');
    await newTerm.radioButtonClickOne();
    await expect(radioButton0).toHaveClass('mat-radio-button mat-primary');
    await expect(radioButton1).toHaveClass('mat-radio-button mat-primary mat-radio-checked');
    await expect(radioButton2).toHaveClass('mat-radio-button mat-primary');
    await expect(radioButton3).toHaveClass('mat-radio-button mat-primary');
    await expect(radioButton4).toHaveClass('mat-radio-button mat-primary');
    await newTerm.radioButtonClickTwo();
    await expect(radioButton0).toHaveClass('mat-radio-button mat-primary');
    await expect(radioButton1).toHaveClass('mat-radio-button mat-primary');
    await expect(radioButton2).toHaveClass('mat-radio-button mat-primary mat-radio-checked');
    await expect(radioButton3).toHaveClass('mat-radio-button mat-primary');
    await expect(radioButton4).toHaveClass('mat-radio-button mat-primary');
    await newTerm.radioButtonClickThree();
    await expect(radioButton0).toHaveClass('mat-radio-button mat-primary');
    await expect(radioButton1).toHaveClass('mat-radio-button mat-primary');
    await expect(radioButton2).toHaveClass('mat-radio-button mat-primary');
    await expect(radioButton3).toHaveClass('mat-radio-button mat-primary mat-radio-checked');
    await expect(radioButton4).toHaveClass('mat-radio-button mat-primary');
    await newTerm.radioButtonClickFour();
    await expect(radioButton0).toHaveClass('mat-radio-button mat-primary');
    await expect(radioButton1).toHaveClass('mat-radio-button mat-primary');
    await expect(radioButton2).toHaveClass('mat-radio-button mat-primary');
    await expect(radioButton3).toHaveClass('mat-radio-button mat-primary');
    await expect(radioButton4).toHaveClass('mat-radio-button mat-primary mat-radio-checked');
    await newTerm.radioButtonClickZero();
    await expect(radioButton0).toHaveClass('mat-radio-button mat-primary mat-radio-checked');
    await expect(radioButton1).toHaveClass('mat-radio-button mat-primary');
    await expect(radioButton2).toHaveClass('mat-radio-button mat-primary');
    await expect(radioButton3).toHaveClass('mat-radio-button mat-primary');
    await expect(radioButton4).toHaveClass('mat-radio-button mat-primary');
    })

test('addAnswerButton @regChecklistNewHigh @newTermPage', async ({ page }) => {
    const newTerm = new NewEditTermPage(page);
    const answerBlock0 = page.locator('#form-control-is_model-0');
    const answerBlock0Locator0 = page.locator('#form-control-is_model-0 mat-radio-button');
    const answerBlock0Locator1 = page.locator('#form-control-answer-0');
    const answerBlock0Locator2 = page.locator('#form-control-answer-weight-0');
    const answerBlock0Locator3 = page.locator('#form-control-answer-weight-manual-0');
    const answerBlock0Locator4 = page.locator('#form-control-delete-0');
    const answerBlock1= page.locator('#form-control-is_model-1');
    const answerBlock1Locator0 = page.locator('#form-control-is_model-1 mat-radio-button');
    const answerBlock1Locator1 = page.locator('#form-control-answer-1');
    const answerBlock1Locator2 = page.locator('#form-control-answer-weight-1');
    const answerBlock1Locator3 = page.locator('#form-control-answer-weight-manual-1');
    const answerBlock1Locator4 = page.locator('#form-control-delete-1');
    const answerBlock2 = page.locator('#form-control-is_model-2');
    const answerBlock2Locator0 = page.locator('#form-control-is_model-2 mat-radio-button');
    const answerBlock2Locator1 = page.locator('#form-control-answer-2');
    const answerBlock2Locator2 = page.locator('#form-control-answer-weight-2');
    const answerBlock2Locator3 = page.locator('#form-control-answer-weight-manual-2');
    const answerBlock2Locator4 = page.locator('#form-control-delete-2');
    const answerBlock3 = page.locator('#form-control-is_model-3');
    const answerBlock3Locator0 = page.locator('#form-control-is_model-3 mat-radio-button');
    const answerBlock3Locator1 = page.locator('#form-control-answer-3');
    const answerBlock3Locator2 = page.locator('#form-control-answer-weight-3');
    const answerBlock3Locator3 = page.locator('#form-control-answer-weight-manual-3');
    const answerBlock3Locator4 = page.locator('#form-control-delete-3');
    const answerBlock4 = page.locator('#form-control-is_model-4');
    const answerBlock4Locator0 = page.locator('#form-control-is_model-4 mat-radio-button');
    const answerBlock4Locator1 = page.locator('#form-control-answer-4');
    const answerBlock4Locator2 = page.locator('#form-control-answer-weight-4');
    const answerBlock4Locator3 = page.locator('#form-control-answer-weight-manual-4');
    const answerBlock4Locator4 = page.locator('#form-control-delete-4');
    const answerButton = page.locator('#term-detail-add-answer');
    console.log('newTerm Add Answer Button');
    await page.goto('/models/1048/terms/add-term');
    await expect(answerBlock0).toBeVisible();
    await expect(answerBlock0Locator0).toBeVisible();
    await expect(answerBlock0Locator1).toBeVisible();
    await expect(answerBlock0Locator2).toBeVisible();
    await expect(answerBlock0Locator3).toBeVisible();
    await expect(answerBlock0Locator4).toBeHidden();
    await expect(answerBlock1).toBeHidden();
    await expect(answerBlock2).toBeHidden();
    await expect(answerBlock3).toBeHidden();
    await expect(answerBlock4).toBeHidden();
    await newTerm.addAnswerButtonClick();
    await expect(answerBlock0).toBeVisible();
    await expect(answerBlock1).toBeVisible();
    await expect(answerBlock1Locator0).toBeVisible();
    await expect(answerBlock1Locator1).toBeVisible();
    await expect(answerBlock1Locator2).toBeVisible();
    await expect(answerBlock1Locator3).toBeVisible();
    await expect(answerBlock1Locator4).toBeVisible();
    await expect(answerBlock0Locator4).toBeHidden();
    await expect(answerBlock2).toBeHidden();
    await expect(answerBlock3).toBeHidden();
    await expect(answerBlock4).toBeHidden();
    await newTerm.addAnswerButtonClick();
    await expect(answerBlock0).toBeVisible();
    await expect(answerBlock1).toBeVisible();
    await expect(answerBlock2).toBeVisible();
    await expect(answerBlock2Locator0).toBeVisible();
    await expect(answerBlock2Locator1).toBeVisible();
    await expect(answerBlock2Locator2).toBeVisible();
    await expect(answerBlock2Locator3).toBeVisible();
    await expect(answerBlock2Locator4).toBeVisible();
    await expect(answerBlock0Locator4).toBeHidden();
    await expect(answerBlock3).toBeHidden();
    await expect(answerBlock4).toBeHidden();
    await newTerm.addAnswerButtonClick();
    await expect(answerBlock0).toBeVisible();
    await expect(answerBlock1).toBeVisible();
    await expect(answerBlock2).toBeVisible();
    await expect(answerBlock3).toBeVisible();
    await expect(answerBlock3Locator0).toBeVisible();
    await expect(answerBlock3Locator1).toBeVisible();
    await expect(answerBlock3Locator2).toBeVisible();
    await expect(answerBlock3Locator3).toBeVisible();
    await expect(answerBlock3Locator4).toBeVisible();
    await expect(answerBlock0Locator4).toBeHidden();
    await expect(answerBlock4).toBeHidden();
    await newTerm.addAnswerButtonClick();
    await expect(answerButton).toHaveAttribute('disabled', '');
    await expect(answerBlock0).toBeVisible();
    await expect(answerBlock1).toBeVisible();
    await expect(answerBlock2).toBeVisible();
    await expect(answerBlock3).toBeVisible();
    await expect(answerBlock4).toBeVisible();
    await expect(answerBlock4Locator0).toBeVisible();
    await expect(answerBlock4Locator1).toBeVisible();
    await expect(answerBlock4Locator2).toBeVisible();
    await expect(answerBlock4Locator3).toBeVisible();
    await expect(answerBlock4Locator4).toBeVisible();
    await expect(answerBlock0Locator4).toBeHidden();
    })


test('deleteAnswerIcon @regChecklistNewHigh @newTermPage', async ({ page }) => {
    const newTerm = new NewEditTermPage(page);
    const answerBlock0 = page.locator('#form-control-is_model-0');
    const answerBlock1 = page.locator('#form-control-is_model-1');
    const answerBlock2 = page.locator('#form-control-is_model-2');
    const answerBlock3 = page.locator('#form-control-is_model-3');
    const answerBlock4 = page.locator('#form-control-is_model-4');
    const deleteIconZero = page.locator('#form-control-delete-0');
    console.log('newTerm Delete Answer Icon');
    await page.goto('/models/1048/terms/add-term');
    await newTerm.addAnswerButtonClick();
    await newTerm.addAnswerButtonClick();
    await newTerm.addAnswerButtonClick();
    await newTerm.addAnswerButtonClick();
    await newTerm.answerDeleteIconClickFour();
    await expect(answerBlock4).toBeHidden();
    await expect(deleteIconZero).toBeHidden();
    await newTerm.answerDeleteIconClickThree();
    await expect(answerBlock3).toBeHidden();
    await expect(deleteIconZero).toBeHidden();
    await newTerm.answerDeleteIconClickTwo();
    await expect(answerBlock2).toBeHidden();
    await expect(deleteIconZero).toBeHidden();
    await newTerm.answerDeleteIconClickOne();
    await expect(answerBlock1).toBeHidden();
    await expect(deleteIconZero).toBeHidden();
    await expect(answerBlock0).toBeVisible();
    await expect(deleteIconZero).toBeHidden();
    })

test('addAnswerButtonValidation @regChecklistNewLow @newTermPage', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const newTerm = new NewEditTermPage(page);
    const answerField = page.locator('#form-control-answer-0 mat-error');
    console.log('newTerm Add Answer Button validation');
    await page.goto('/models/1048/terms/add-term');
    await newTerm.addAnotherTermButtonClick();
    await expect(answerField).toHaveText('Please fill in this field');
    })

test('addSampleButton @regChecklistNewHigh @newTermPage', async ({ page }) => {
    const newTerm = new NewEditTermPage(page);
    const sampleField0 = page.locator('#form-control-sample-0');
    const sampleField1 = page.locator('#form-control-sample-1');
    const sampleField2 = page.locator('#form-control-sample-2');
    const addSampleButton = page.locator('#term-detail-add-sample');
    console.log('newTerm Add Sample Button');
    await page.goto('/models/1048/terms/add-term');
    await expect(sampleField0).toBeHidden();
    await expect(sampleField1).toBeHidden();
    await expect(sampleField2).toBeHidden();
    await newTerm.addSampleButtonClick();
    await expect(sampleField0).toBeVisible();
    await newTerm.addSampleButtonClick();
    await expect(sampleField0).toBeVisible();
    await expect(sampleField1).toBeVisible();
    await newTerm.addSampleButtonClick();
    await expect(sampleField0).toBeVisible();
    await expect(sampleField1).toBeVisible();
    await expect(sampleField2).toBeVisible();
    await expect(addSampleButton).toHaveAttribute('disabled', '');
    })

test('sampleFieldsValidation @regChecklistNewLow @newTermPage', async ({ page, browserName}) => {
    test.skip(browserName === 'chromium');
    const newTerm = new NewEditTermPage(page);
    const sampeFieldProperties = page.locator('[formcontrolname="sample"]');
    const sampleFieldValidation = page.locator('#form-control-sample-0 mat-error');
    console.log('newTerm Sample Fields validation');
    await page.goto('/models/1048/terms/add-term');
    await newTerm.addSampleButtonClick();
    await expect(sampeFieldProperties).toHaveAttribute('placeholder', 'Sample');
    await expect(sampeFieldProperties).toHaveAttribute('maxlength', '2000');
    await newTerm.addAnotherTermButtonClick();
    await expect(sampleFieldValidation).toHaveText('Please fill in this field');
    })

test('cancelButton @regChecklistNewLow @newTermPage', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const newTerm = new NewEditTermPage(page);
    console.log('newTerm Cancel Button');
    await page.goto('/models/1048/terms/add-term');
    await newTerm.cancelButtonClick();
    await expect(page).toHaveURL('/models/1048/terms?&sort=term');
    })

test('saveButton @regChecklistNewHigh @newTermPage', async ({ page }) => {
    const newModel = new NewEditModelPage(page);
    const newTerm = new NewEditTermPage(page);
    const termFieldValidation = page.locator('#form-control-term mat-error');
    const questionFieldValidation = page.locator('#form-control-question mat-error');
    const answerFieldValidation = page.locator('#form-control-answer-0 mat-error');
    const sampleFieldValidation = page.locator('#form-control-sample-0 mat-error');
    const descriptionViewTermField = page.locator('td.mat-cell.cdk-column-description.mat-column-description.ng-star-inserted >> nth=0');
    console.log('newTerm Save Button');
    await page.goto('/models/add-model');
    await newModel.nameFieldFill(Helpers.generateRandomString());
    await newModel.descriptionFieldFill(Helpers.generateRandomString());
    await newModel.typeDropDownChoose();
    await newModel.fromFieldFill(Helpers.generateRandomNumberNewModelFrom(1, 31));
    await newModel.toFieldFill(Helpers.generateRandomNumberNewModelTo(60, 100));
    await newModel.nextButtonClick();
    await newTerm.addSampleButtonClick();
    await newTerm.saveButtonClick();
    await expect(termFieldValidation).toHaveText('Please fill in this field');
    await expect(questionFieldValidation).toHaveText('Please fill in this field');
    await expect(answerFieldValidation).toHaveText('Please fill in this field');
    await expect(sampleFieldValidation).toHaveText('Please fill in this field');
    await newTerm.termFieldFill(Helpers.generateRandomString());
    await newTerm.manualInputWeightFieldRandomFill(Helpers.generateRandomNumberNewTermWeight(31, 60));
    await newTerm.descriptionFieldFill();
    await newTerm.questionFieldFill(Helpers.generateRandomString());
    await newTerm.answerFieldFill(Helpers.generateRandomString());
    await newTerm.manualInputPointsFieldFill(Helpers.generateRandomNumberNewTermPoints());
    await newTerm.sampleFieldFill(Helpers.generateRandomString());
    await newTerm.saveButtonClick();
    await expect(descriptionViewTermField).toHaveText('autotest');
    })

test('saveButtonPointsFieldDidNotChoose @regChecklistNewMedium @newTermPage', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const newTerm = new NewEditTermPage(page);
    const oopsPopup = page.locator('.mat-dialog-container');
    const oopsPopupText = page.locator('.mat-dialog-container header');
    const oopsPopupClose = page.locator('.mat-dialog-container button');
    console.log('newTerm Save Button Points Field Did Not Choose');
    await page.goto('/models/1048/terms/add-term');
    await newTerm.termFieldFill(Helpers.generateRandomString());
    await newTerm.questionFieldFill(Helpers.generateRandomString());
    await newTerm.answerFieldFill(Helpers.generateRandomString());
    await newTerm.saveButtonClick();
    await expect(oopsPopup).toBeVisible();
    await expect(oopsPopupText).toHaveText('Oops! The current total score of your Model is 0. Please review your Model answer point(s).');
    await expect(oopsPopupClose).toHaveClass('btn simple-btn mat-button mat-primary');
    await newTerm.saveButtonOopsPopupCloseButtonClick();
    await expect(oopsPopup).toBeHidden();
    await expect(page).toHaveURL('/models/1048/terms/add-term');
    })

test('addAnotherTermButtonPointsFieldDidNotChoose @regChecklistNewHigh @newTermPage', async ({ page }) => {
    const newTerm = new NewEditTermPage(page);
    const oopsPopup = page.locator('.mat-dialog-container');
    const oopsPopupText = page.locator('.mat-dialog-container header');
    const oopsPopupClose = page.locator('.mat-dialog-container button');
    console.log('newTerm Add Another Term Button Points Field Did Not Choose');
    await page.goto('/models/1048/terms/add-term');
    await newTerm.termFieldFill(Helpers.generateRandomString());
    await newTerm.questionFieldFill(Helpers.generateRandomString());
    await newTerm.answerFieldFill(Helpers.generateRandomString());
    await newTerm.addAnotherTermButtonClick();
    await expect(oopsPopup).toBeVisible();
    await expect(oopsPopupText).toHaveText('Oops! The current total score of your Model is 0. Please review your Model answer point(s).');
    await expect(oopsPopupClose).toHaveClass('btn simple-btn mat-button mat-primary');
    await newTerm.saveButtonOopsPopupCloseButtonClick();
    await expect(oopsPopup).toBeHidden();
    await expect(page).toHaveURL('/models/1048/terms/add-term');
    })

test('addAnotherTermButton @regChecklistNewHigh @newTermPage', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const newTerm = new NewEditTermPage(page);
    const viewModel = new ViewingModelPage(page);
    const descriptionViewTermField = page.locator('td.mat-cell.cdk-column-description.mat-column-description.ng-star-inserted >> nth=0');
    const termPage = page.locator('#form-control-term');
    console.log('newTerm Add Another Term Button');
    await page.goto('/models/1460/terms?&sort=term');
    await viewModel.addTermButtonClick();
    await newTerm.termFieldFill(Helpers.generateRandomString());
    await newTerm.manualInputWeightFieldRandomFill(Helpers.generateRandomNumberNewTermWeight(31, 60));
    await newTerm.descriptionFieldFill();
    await newTerm.questionFieldFill(Helpers.generateRandomString());
    await newTerm.answerFieldFill(Helpers.generateRandomString());
    await newTerm.manualInputPointsFieldFill(Helpers.generateRandomNumberNewTermPoints());
    await newTerm.addAnotherTermButtonClick();
    await expect(termPage).toHaveText('Term');
    await page.goBack();
    await viewModel.listFirstItemTermClick(); 
    await expect(descriptionViewTermField).toHaveText('autotest');
    await viewModel.listFirstItemLinkTermClick();
    await newTerm.pushToArchiveButtonClick();
    await newTerm.pushToArchivePopupArchiveButtonClick();
    })