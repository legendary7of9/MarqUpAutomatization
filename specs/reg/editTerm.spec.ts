import { test , expect } from '@playwright/test'
import { Users, ViewingModelPage } from '../../framework'
import { NewEditTermPage, NewEditModelPage, UserBar } from '../../framework'
import { SignInPage } from '../../framework'
import { Helpers } from '../../lib/helpers/randomCharactersAndDigits.preload'


test.beforeEach(async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    await page.goto('');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
}); 


test('termField @regChecklistNewHigh @editTermPage', async ({ page }) => {
    const termField = page.locator('[formcontrolname="term"]');
    console.log('editTerm Term Field');
    await page.goto('/models/1112/terms/edit-term/1510');
    await expect(termField).toHaveAttribute('placeholder', 'Term');
    await expect(termField).toHaveAttribute('maxlength', '200');
    })

test('termFieldValidation @regChecklistNewLow @editTermPage', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const editTerm = new NewEditTermPage(page);
    const termField = page.locator('#form-control-term mat-error');
    console.log('editTerm Term Field validation');
    await page.goto('/models/1112/terms/edit-term/1510');
    await editTerm.termFieldClearFill();
    await editTerm.saveChangesButtonClick();
    await expect(termField).toHaveText('Please fill in this field');
    })

test('weightFieldSlider @regChecklistNewHigh @editTermPage', async ({ page }) => {
    const editTerm = new NewEditTermPage(page);
    const valueSlider = page.locator('#form-control-weight');
    const valueManual = page.locator('#form-control-weight-manual input');
    console.log('editTerm Weight Field Slider');
    await page.goto('/models/1112/terms/edit-term/1510');
    await expect(valueSlider).toHaveAttribute('aria-valuemin', '1');
    await expect(valueSlider).toHaveAttribute('aria-valuemax', '100');
    await expect(valueSlider).toHaveAttribute('aria-valuenow', '30');
    await editTerm.weightSliderUseUp();
    await expect(valueSlider).toHaveAttribute('aria-valuenow', '56');
    await expect(valueManual).toHaveValue('56');
    await editTerm.weightSliderUseDown();
    await expect(valueSlider).toHaveAttribute('aria-valuenow', '53');
    await expect(valueManual).toHaveValue('53');
    })

test('weightFieldManual @regChecklistNewHigh @editTermPage', async ({ page }) => {
    const editTerm = new NewEditTermPage(page);
    const valueSlider = page.locator('#form-control-weight');
    const valueManual = page.locator('#form-control-weight-manual input');
    console.log('editTerm Weight Field Manual');
    await page.goto('/models/1112/terms/edit-term/1510');
    await editTerm.manualInputWeightFieldFill();
    await expect(valueManual).toHaveValue('60');
    await expect(valueSlider).toHaveAttribute('aria-valuenow', '60');
    })

test('weightFieldManualValidation @regChecklistNewLow @editTermPage', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const editTerm = new NewEditTermPage(page);
    const valueManual = page.locator('#form-control-weight-manual mat-error');
    console.log('editTerm Weight Field Manual validation');
    await page.goto('/models/1112/terms/edit-term/1510');
    await editTerm.manualInputWeightFieldClear();
    await expect(valueManual).toHaveText('Weight must be from 1 to 100');
    })

test('descriptionField @regChecklistNewLow @editTermPage', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const descriptionField = page.locator('[formcontrolname="description"]');
    console.log('editTerm Description Field');
    await page.goto('/models/1112/terms/edit-term/1510');
    await expect(descriptionField).toHaveAttribute('placeholder', 'Description');
    await expect(descriptionField).toHaveAttribute('maxlength', '255');
    })

test('questionField @regChecklistNewHigh @editTermPage', async ({ page }) => {
    const questionField = page.locator('[formcontrolname="question"]');
    console.log('editTerm Question Field');
    await page.goto('/models/1112/terms/edit-term/1510');
    await expect(questionField).toHaveAttribute('placeholder', 'Question');
    await expect(questionField).toHaveAttribute('maxlength', '255');
    })

test('questionFieldValidation @regChecklistNewLow @editTermPage', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const editTerm = new NewEditTermPage(page);
    const questionField = page.locator('#form-control-question mat-error');
    console.log('editTerm Question Field validation');
    await page.waitForURL('/dashboard');
    await page.goto('/models/1112/terms/edit-term/1510');
    await editTerm.questionFieldClearFill();
    await editTerm.saveChangesButtonClick();
    await expect(questionField).toHaveText('Please fill in this field');
    })

test('answerField @regChecklistNewHigh @editTermPage', async ({ page }) => {
    const answerField = page.locator('[formcontrolname="answer"]');
    console.log('editTerm Answer Field');
    await page.goto('/models/1112/terms/edit-term/1510');
    await expect(answerField).toHaveAttribute('placeholder', 'None');
    await expect(answerField).toHaveAttribute('maxlength', '255');
    })
    
test('answerFieldValidation @regChecklistNewLow @editTermPage', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const editTerm = new NewEditTermPage(page);
    const answerField = page.locator('#form-control-answer-1 mat-error');
    console.log('editTerm Add Answer Field validation');
    await page.goto('/models/1112/terms/edit-term/1510');
    await editTerm.addAnswerButtonClick();
    await editTerm.saveChangesButtonClick();
    await expect(answerField).toHaveText('Please fill in this field');
    })

test('pointsFieldSlider @regChecklistNewHigh @editTermPage', async ({ page }) => {
    const editTerm = new NewEditTermPage(page);
    const valueSlider = page.locator('#form-control-answer-weight-0');
    const valueManual = page.locator('#form-control-answer-weight-manual-0 input');
    console.log('editTerm Weight Field Slider');
    await page.goto('/models/1112/terms/edit-term/1510');
    await expect(valueSlider).toHaveAttribute('aria-valuemin', '-5');
    await expect(valueSlider).toHaveAttribute('aria-valuemax', '5');
    await expect(valueSlider).toHaveAttribute('aria-valuenow', '-0.5');
    await editTerm.pointSliderUseUp();
    await expect(valueSlider).toHaveAttribute('aria-valuenow', '1.5');
    await expect(valueManual).toHaveValue('1.5');
    await editTerm.pointSliderUseDown();
    await expect(valueSlider).toHaveAttribute('aria-valuenow', '-1.5');
    await expect(valueManual).toHaveValue('-1.5');
    })

test('answerRadioButton @regChecklistNewMedium @editTermPage', async ({ page }) => {
    const editTerm = new NewEditTermPage(page);
    const radioButton0 = page.locator('#form-control-is_model-0 mat-radio-button');
    const radioButton1 = page.locator('#form-control-is_model-1 mat-radio-button');
    const radioButton2 = page.locator('#form-control-is_model-2 mat-radio-button');
    const radioButton3 = page.locator('#form-control-is_model-3 mat-radio-button');
    const radioButton4 = page.locator('#form-control-is_model-4 mat-radio-button');
    console.log('editTerm Answer Radio Button');
    await page.goto('/models/1112/terms/edit-term/1510');
    await expect(radioButton0).toHaveClass('mat-radio-button mat-primary mat-radio-checked');
    await editTerm.addAnswerButtonClick();
    await editTerm.addAnswerButtonClick();
    await editTerm.addAnswerButtonClick();
    await editTerm.addAnswerButtonClick();
    await expect(radioButton0).toHaveClass('mat-radio-button mat-primary mat-radio-checked');
    await expect(radioButton1).toHaveClass('mat-radio-button mat-primary');
    await expect(radioButton2).toHaveClass('mat-radio-button mat-primary');
    await expect(radioButton3).toHaveClass('mat-radio-button mat-primary');
    await expect(radioButton4).toHaveClass('mat-radio-button mat-primary');
    await editTerm.radioButtonClickOne();
    await expect(radioButton0).toHaveClass('mat-radio-button mat-primary');
    await expect(radioButton1).toHaveClass('mat-radio-button mat-primary mat-radio-checked');
    await expect(radioButton2).toHaveClass('mat-radio-button mat-primary');
    await expect(radioButton3).toHaveClass('mat-radio-button mat-primary');
    await expect(radioButton4).toHaveClass('mat-radio-button mat-primary');
    await editTerm.radioButtonClickTwo();
    await expect(radioButton0).toHaveClass('mat-radio-button mat-primary');
    await expect(radioButton1).toHaveClass('mat-radio-button mat-primary');
    await expect(radioButton2).toHaveClass('mat-radio-button mat-primary mat-radio-checked');
    await expect(radioButton3).toHaveClass('mat-radio-button mat-primary');
    await expect(radioButton4).toHaveClass('mat-radio-button mat-primary');
    await editTerm.radioButtonClickThree();
    await expect(radioButton0).toHaveClass('mat-radio-button mat-primary');
    await expect(radioButton1).toHaveClass('mat-radio-button mat-primary');
    await expect(radioButton2).toHaveClass('mat-radio-button mat-primary');
    await expect(radioButton3).toHaveClass('mat-radio-button mat-primary mat-radio-checked');
    await expect(radioButton4).toHaveClass('mat-radio-button mat-primary');
    await editTerm.radioButtonClickFour();
    await expect(radioButton0).toHaveClass('mat-radio-button mat-primary');
    await expect(radioButton1).toHaveClass('mat-radio-button mat-primary');
    await expect(radioButton2).toHaveClass('mat-radio-button mat-primary');
    await expect(radioButton3).toHaveClass('mat-radio-button mat-primary');
    await expect(radioButton4).toHaveClass('mat-radio-button mat-primary mat-radio-checked');
    await editTerm.radioButtonClickZero();
    await expect(radioButton0).toHaveClass('mat-radio-button mat-primary mat-radio-checked');
    await expect(radioButton1).toHaveClass('mat-radio-button mat-primary');
    await expect(radioButton2).toHaveClass('mat-radio-button mat-primary');
    await expect(radioButton3).toHaveClass('mat-radio-button mat-primary');
    await expect(radioButton4).toHaveClass('mat-radio-button mat-primary');
    })

test('addAnswerButton @regChecklistNewHigh @editTermPage', async ({ page }) => {
    const editTerm = new NewEditTermPage(page);
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
    console.log('editTerm Add Answer Button');
    await page.goto('/models/1112/terms/edit-term/1510');
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
    await editTerm.addAnswerButtonClick();
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
    await editTerm.addAnswerButtonClick();
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
    await editTerm.addAnswerButtonClick();
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
    await editTerm.addAnswerButtonClick();
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

test('deleteAnswerIcon @regChecklistNewMedium @editTermPage', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const editTerm = new NewEditTermPage(page);
    const answerBlock0 = page.locator('#form-control-is_model-0');
    const answerBlock1 = page.locator('#form-control-is_model-1');
    const answerBlock2 = page.locator('#form-control-is_model-2');
    const answerBlock3 = page.locator('#form-control-is_model-3');
    const answerBlock4 = page.locator('#form-control-is_model-4');
    const deleteIconZero = page.locator('#form-control-delete-0');
    console.log('editTerm Delete Answer Icon');
    await page.goto('/models/1112/terms/edit-term/1510');
    await editTerm.addAnswerButtonClick();
    await editTerm.addAnswerButtonClick();
    await editTerm.addAnswerButtonClick();
    await editTerm.addAnswerButtonClick();
    await editTerm.answerDeleteIconClickFour();
    await expect(answerBlock4).toBeHidden();
    await expect(deleteIconZero).toBeHidden();
    await editTerm.answerDeleteIconClickThree();
    await expect(answerBlock3).toBeHidden();
    await expect(deleteIconZero).toBeHidden();
    await editTerm.answerDeleteIconClickTwo();
    await expect(answerBlock2).toBeHidden();
    await expect(deleteIconZero).toBeHidden();
    await editTerm.answerDeleteIconClickOne();
    await expect(answerBlock1).toBeHidden();
    await expect(deleteIconZero).toBeHidden();
    await expect(answerBlock0).toBeVisible();
    await expect(deleteIconZero).toBeHidden();
    })

test('answerFieldsValidation @regChecklistNewLow @editTermPage', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const editTerm = new NewEditTermPage(page);
    const answerField = page.locator('#form-control-answer-0 mat-error');
    const answerField1 = page.locator('#form-control-answer-1 mat-error');
    const answerField2 = page.locator('#form-control-answer-2 mat-error');
    const answerField3 = page.locator('#form-control-answer-3 mat-error');
    const answerField4 = page.locator('#form-control-answer-4 mat-error');
    console.log('editTerm Add Answer Field validation');
    await page.goto('/models/1112/terms/edit-term/1510');
    await expect(answerField).toBeHidden();
    await editTerm.addAnswerButtonClick();
    await editTerm.saveChangesButtonClick();
    await expect(answerField1).toHaveText('Please fill in this field');
    await editTerm.addAnswerButtonClick();
    await editTerm.saveChangesButtonClick();
    await expect(answerField2).toHaveText('Please fill in this field');
    await editTerm.addAnswerButtonClick();
    await editTerm.saveChangesButtonClick();
    await expect(answerField3).toHaveText('Please fill in this field');
    await editTerm.addAnswerButtonClick();
    await editTerm.saveChangesButtonClick();
    await expect(answerField4).toHaveText('Please fill in this field');
    })

    //to be refactored
test.skip('sortingAnswers @regChecklistNewLow @editTermPage', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    console.log('newTerm Sorting Answers');
    await page.goto('/models/1112/terms/edit-term/1510');
    })

test('addSampleButton @regChecklistNewHigh @editTermPage', async ({ page }) => {
    const editTerm = new NewEditTermPage(page);
    const sampleField0 = page.locator('#form-control-sample-0');
    const sampleField1 = page.locator('#form-control-sample-1');
    const sampleField2 = page.locator('#form-control-sample-2');
    const addSampleButton = page.locator('#term-detail-add-sample');
    console.log('editTerm Add Sample Button');
    await page.goto('/models/1112/terms/edit-term/1510');
    await expect(sampleField0).toBeHidden();
    await expect(sampleField1).toBeHidden();
    await expect(sampleField2).toBeHidden();
    await editTerm.addSampleButtonClick();
    await expect(sampleField0).toBeVisible();
    await editTerm.addSampleButtonClick();
    await expect(sampleField0).toBeVisible();
    await expect(sampleField1).toBeVisible();
    await editTerm.addSampleButtonClick();
    await expect(sampleField0).toBeVisible();
    await expect(sampleField1).toBeVisible();
    await expect(sampleField2).toBeVisible();
    await expect(addSampleButton).toHaveAttribute('disabled', '');
    })    

test('sampleFieldsValidation @regChecklistNewLow @editTermPage', async ({ page, browserName}) => {
    test.skip(browserName === 'chromium');
    const editTerm = new NewEditTermPage(page);
    const sampeFieldProperties = page.locator('[formcontrolname="sample"]');
    const sampleFieldValidation = page.locator('#form-control-sample-0 mat-error');
    console.log('editTerm Sample Fields validation');
    await page.goto('/models/1112/terms/edit-term/1510');
    await editTerm.addSampleButtonClick();
    await expect(sampeFieldProperties).toHaveAttribute('placeholder', 'Sample');
    await expect(sampeFieldProperties).toHaveAttribute('maxlength', '2000');
    await editTerm.saveChangesButtonClick();
    await expect(sampleFieldValidation).toHaveText('Please fill in this field');
    })

test('activateButton @regChecklistNewHigh @editTermPage', async ({ page, browserName}) => {
    test.skip(browserName === 'webkit');
    const editTerm = new NewEditTermPage(page);
    const viewModel = new ViewingModelPage(page);
    const term = page.locator('tr.mat-row.ng-star-inserted >> nth=0');
    const termNameColor = page.locator('a.td__link.ng-star-inserted >> nth=0');
    console.log('editTerm Activate Button');
    await page.goto('/models/1119/terms/edit-term/1517');
    await editTerm.activateButtonClick();
    await expect(page).toHaveURL('/models/1119/terms?&sort=term');
    await expect(term).toBeVisible();
    await expect(termNameColor).toHaveClass('td__link ng-star-inserted');
    await viewModel.listFirstItemLinkTermClick();
    await editTerm.pushToArchiveButtonClick();
    await editTerm.pushToArchivePopupArchiveButtonClick();
    })

test('cancelButton @regChecklistNewLow @editTermPage', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const editTerm = new NewEditTermPage(page);
    console.log('editTerm Cancel Button');
    await page.goto('/models/1112/terms/edit-term/1510');
    await editTerm.cancelButtonClick();
    await expect(page).toHaveURL('/models/1112/terms?&sort=term');
    })

test('saveChangesButton @regChecklistNewHigh @editTermPage', async ({ page }) => {
    const newModel = new NewEditModelPage(page);
    const editTerm = new NewEditTermPage(page);
    const viewModel = new ViewingModelPage(page);
    const termFieldValidation = page.locator('#form-control-term mat-error');
    const questionFieldValidation = page.locator('#form-control-question mat-error');
    const descriptionViewTermField = page.locator('td.mat-cell.cdk-column-description.mat-column-description.ng-star-inserted >> nth=0');
    console.log('editTerm Save Changes Button');
    await page.goto('/models/add-model');
    await newModel.nameFieldFill(Helpers.generateRandomString());
    await newModel.descriptionFieldFill(Helpers.generateRandomString());
    await newModel.typeDropDownChoose();
    await newModel.clientDropDownChoose();
    await newModel.fromFieldFill(Helpers.generateRandomNumberNewModelFrom(1, 31));
    await newModel.toFieldFill(Helpers.generateRandomNumberNewModelTo(60, 100));
    await newModel.nextButtonClick();
    await editTerm.termFieldFill(Helpers.generateRandomString());
    await editTerm.manualInputWeightFieldRandomFill(Helpers.generateRandomNumberNewTermWeight(31, 60));
    await editTerm.descriptionFieldFill();
    await editTerm.questionFieldFill(Helpers.generateRandomString());
    await editTerm.answerFieldFill(Helpers.generateRandomString());
    await editTerm.manualInputPointsFieldFill(Helpers.generateRandomNumberNewTermPoints());
    await editTerm.saveButtonClick();
    await viewModel.listFirstItemLinkTermClick();
    await page.waitForTimeout(500);
    await editTerm.termFieldClearFill();
    await editTerm.questionFieldClearFill();
    await editTerm.saveChangesButtonClick();
    await expect(termFieldValidation).toHaveText('Please fill in this field');
    await expect(questionFieldValidation).toHaveText('Please fill in this field');
    await editTerm.termFieldFill(Helpers.generateRandomString());
    await editTerm.descriptionFieldFillEdit();
    await editTerm.questionFieldFill(Helpers.generateRandomString());
    await editTerm.saveChangesButtonClick();
    await expect(descriptionViewTermField).toHaveText('autotest33');
    })

test('saveChangesButtonPointsFieldDidNotChoose @regChecklistNewHigh @editTermPage', async ({ page }) => {
    const editTerm = new NewEditTermPage(page);
    const oopsPopup = page.locator('.mat-dialog-container');
    const oopsPopupText = page.locator('.mat-dialog-container header');
    const oopsPopupClose = page.locator('.mat-dialog-container button');
    console.log('newTerm Save Button Points Field Did Not Choose');
    await page.goto('/models/1112/terms/edit-term/1510');
    await editTerm.manualInputPointsFieldFillZeroValue();
    await editTerm.saveChangesButtonClick();
    await expect(oopsPopup).toBeVisible();
    await expect(oopsPopupText).toHaveText('Oops! The current total score of your Model is 0. Please review your Model answer point(s).');
    await expect(oopsPopupClose).toHaveClass('btn simple-btn mat-button mat-primary');
    await editTerm.saveButtonOopsPopupCloseButtonClick();
    await expect(oopsPopup).toBeHidden();
    await expect(page).toHaveURL('/models/1112/terms/edit-term/1510');
    })

test('pushToArchiveButton @regChecklistNewHigh @editTermPage', async ({ page }) => {
    const editTerm = new NewEditTermPage(page);
    const popup = page.locator('.mat-dialog-container');
    const popupText = page.locator('.mat-dialog-container header');
    const popupCancelButton = page.locator('#confirm-active-cancel');
    const popupArchiveButton = page.locator('#confirm-active-archive');
    await page.goto('/models/1131/terms/edit-term/1528');
    await editTerm.pushToArchiveButtonClick();
    await expect(popup).toBeVisible();
    await expect(popupText).toHaveText('Are you sure you want to archive this Term? Archived Terms will not be available for Deal review.');
    await expect(popupCancelButton).toHaveText('Cancel');
    await expect(popupArchiveButton).toHaveText('Archive');
    })

test('pushToArchivePopupCancelButton @regChecklistNewLow @editTermPage', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const editTerm = new NewEditTermPage(page);
    const popup = page.locator('.mat-dialog-container');
    console.log('editTerm Push To Archive Popup Cancel Button');
    await page.goto('/models/1131/terms/edit-term/1528');
    await editTerm.pushToArchiveButtonClick();
    await editTerm.pushToArchivePopupCloseButtonClick();
    await expect(popup).toBeHidden();
    await expect(page).toHaveURL('/models/1131/terms/edit-term/1528');
    })

test('pushToArchivePopupArchiveButton @regChecklistNewHigh @editTermPage', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const editTerm = new NewEditTermPage(page);
    const viewModel = new ViewingModelPage(page);
    const userBar = new UserBar(page);
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newModel = new NewEditModelPage(page);
    const term = page.locator('tr.mat-row.ng-star-inserted >> nth=0');
    const termNameColor = page.locator('a.td__link.ng-star-inserted >> nth=0');
    console.log('editTerm Push To Archive Popup ArchiveButton For SA');
    await page.goto('/models/1132/terms/edit-term/1529');
    await editTerm.pushToArchiveButtonClick();
    await editTerm.pushToArchivePopupArchiveButtonClick();
    await expect(page).toHaveURL('/models/1132/terms?&sort=term');
    await expect(term).toBeVisible();
    await expect(termNameColor).toHaveClass('td__link inactive ng-star-inserted');
    await viewModel.listFirstItemLinkTermClick();
    await editTerm.activateButtonClick();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    console.log('editTerm Push To Archive Popup ArchiveButton For AA');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/1446/terms?&sort=term');
    await viewModel.addTermButtonClick();
    await editTerm.termFieldFill(Helpers.generateRandomString());
    await editTerm.manualInputWeightFieldRandomFill(Helpers.generateRandomNumberNewTermWeight(31, 60));
    await editTerm.descriptionFieldFill();
    await editTerm.questionFieldFill(Helpers.generateRandomString());
    await editTerm.answerFieldFill(Helpers.generateRandomString());
    await editTerm.manualInputPointsFieldFill(Helpers.generateRandomNumberNewTermPoints());
    await editTerm.saveButtonClick();
    await expect(term).toBeVisible();
    await expect(termNameColor).toHaveClass('td__link ng-star-inserted');
    await viewModel.listFirstItemLinkTermClick();
    await editTerm.pushToArchiveButtonClick();
    await editTerm.pushToArchivePopupArchiveButtonClick();
    await expect(term).toBeHidden();
    })