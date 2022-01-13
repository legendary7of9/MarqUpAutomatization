import { Locator, Page } from '@playwright/test';


class NewEditTermPage {
    page: Page;
    termField: Locator;
    weightSlider: Locator;
    manualInputWeightField: Locator;
    descriptionField: Locator;
    questionField: Locator;
    radioButton0:Locator;
    radioButton1:Locator;
    radioButton2:Locator;
    radioButton3:Locator;
    radioButton4:Locator;
    answerField: Locator;
    answerField0: Locator;
    answerField1: Locator;
    answerField2: Locator;
    answerField3: Locator;
    answerField4: Locator;
    pointsSlider0: Locator;
    manualInputPointsField0: Locator;
    manualInputPointsField1: Locator;
    manualInputPointsField2: Locator;
    manualInputPointsField3: Locator;
    manualInputPointsField4: Locator;
    addAnswerButton: Locator;
    answerDeleteIcon1: Locator;
    answerDeleteIcon2: Locator;
    answerDeleteIcon3: Locator;
    answerDeleteIcon4: Locator;
    addSampleButton: Locator;
    sampleField: Locator;
    addAnotherTermButton: Locator;
    cancelButton: Locator;
    saveButton: Locator;
    saveChangesButton: Locator;
    saveButtonOopsPopupCloseButton: Locator;
    pushToArchiveButton: Locator;
    pushToArchivePopupCancelButton: Locator;
    pushToArchivePopupArchiveButton: Locator;
    activateButton: Locator;

constructor(page: Page) {
    this.page = page;
    this.termField = page.locator('[formcontrolname="term"]');
    this.weightSlider = page.locator('#form-control-weight');
    this.manualInputWeightField = page.locator('#form-control-weight-manual input');
    this.descriptionField = page.locator('[formcontrolname="description"]');
    this.questionField = page.locator('[formcontrolname="question"]');
    this.radioButton0 = page.locator('#form-control-is_model-0 mat-radio-button');
    this.radioButton1 = page.locator('#form-control-is_model-1 mat-radio-button');
    this.radioButton2 = page.locator('#form-control-is_model-2 mat-radio-button');
    this.radioButton3 = page.locator('#form-control-is_model-3 mat-radio-button');
    this.radioButton4 = page.locator('#form-control-is_model-4 mat-radio-button');
    this.answerField = page.locator('[formcontrolname="answer"]');
    this.answerField0 = page.locator('#form-control-answer-0 textarea');
    this.answerField1 = page.locator('#form-control-answer-1 textarea');
    this.answerField2 = page.locator('#form-control-answer-2 textarea');
    this.answerField3 = page.locator('#form-control-answer-3 textarea');
    this.answerField4 = page.locator('#form-control-answer-4 textarea');
    this.pointsSlider0 = page.locator('#form-control-answer-weight-0');
    this.manualInputPointsField0 = page.locator('#form-control-answer-weight-manual-0 input');
    this.manualInputPointsField1 = page.locator('#form-control-answer-weight-manual-1 input');
    this.manualInputPointsField2 = page.locator('#form-control-answer-weight-manual-2 input');
    this.manualInputPointsField3 = page.locator('#form-control-answer-weight-manual-3 input');
    this.manualInputPointsField4 = page.locator('#form-control-answer-weight-manual-4 input');
    this.addAnswerButton = page.locator('#term-detail-add-answer');
    this.answerDeleteIcon1 = page.locator('#form-control-delete-1');
    this.answerDeleteIcon2 = page.locator('#form-control-delete-2');
    this.answerDeleteIcon3 = page.locator('#form-control-delete-3');
    this.answerDeleteIcon4 = page.locator('#form-control-delete-4');
    this.addSampleButton = page.locator('#term-detail-add-sample');
    this.sampleField = page.locator('[formcontrolname="sample"]');
    this.addAnotherTermButton = page.locator('#term-detail-add-another-term');
    this.cancelButton = page.locator('#term-detail-cancel');
    this.saveButton = page.locator('#term-detail-save');
    this.saveChangesButton = page.locator('#term-detail-save');
    this.saveButtonOopsPopupCloseButton = page.locator('.mat-dialog-container button');
    this.pushToArchiveButton = page.locator('#term-detail-push-to-archive');
    this.pushToArchivePopupCancelButton = page.locator('#confirm-active-cancel');
    this.pushToArchivePopupArchiveButton = page.locator('#confirm-active-archive');
    this.activateButton = page.locator('#term-detail-activate');
}    

async termFieldFill(text:string) {
    await this.termField.click();
    await this.termField.fill(text);
}

async termFieldClearFill() {
    await this.termField.click();
    await this.termField.fill('');
}

async weightSliderUseUp() {
    await this.weightSlider.click();
    await this.weightSlider.press('ArrowUp');
    await this.weightSlider.press('ArrowUp');
    await this.weightSlider.press('ArrowUp');
    await this.weightSlider.press('ArrowUp');
    await this.weightSlider.press('ArrowUp');
}

async weightSliderUseDown() {
    await this.weightSlider.focus();
    await this.weightSlider.press('ArrowDown');
    await this.weightSlider.press('ArrowDown');
    await this.weightSlider.press('ArrowDown');
}

async manualInputWeightFieldRandomFill(number:string) {
    await this.manualInputWeightField.click();
    await this.manualInputWeightField.fill(number);
}

async manualInputWeightFieldFill() {
    await this.manualInputWeightField.click();
    await this.manualInputWeightField.fill('60');
}

async manualInputWeightFieldClear() {
    await this.manualInputWeightField.click();
    await this.manualInputWeightField.fill('');
}

async descriptionFieldFill() {
    await this.descriptionField.click();
    await this.descriptionField.fill('autotest');
}

async descriptionFieldFillEdit() {
    await this.descriptionField.click();
    await this.descriptionField.fill('autotest33');
}

async questionFieldFill(text:string) {
    await this.questionField.click();
    await this.questionField.fill(text);
}

async questionFieldClearFill() {
    await this.questionField.click();
    await this.questionField.fill('');
}

async radioButtonClickZero() {
    await this.radioButton0.click();
}

async radioButtonClickOne() {
    await this.radioButton1.click();
}

async radioButtonClickTwo() {
    await this.radioButton2.click();
}

async radioButtonClickThree() {
    await this.radioButton3.click();
}

async radioButtonClickFour() {
    await this.radioButton4.click();
}

async answerFieldFill(text:string) {
    await this.answerField.click();
    await this.answerField.fill(text);
}

async answerFieldFillZero() {
    await this.answerField0.click();
    await this.answerField0.fill('autotest0');
}

async answerFieldFillOne() {
    await this.answerField1.click();
    await this.answerField1.fill('autotest1');
}

async answerFieldFillTwo() {
    await this.answerField2.click();
    await this.answerField2.fill('autotest2');
}

async answerFieldFillThree() {
    await this.answerField3.click();
    await this.answerField3.fill('autotest3');
}

async answerFieldFillFour() {
    await this.answerField4.click();
    await this.answerField4.fill('autotest4');
}

async answerFieldClearFill() {
    await this.answerField.click();
    await this.answerField.fill('');
}

async pointSliderUseUp() {
    await this.pointsSlider0.click();
    await this.pointsSlider0.press('ArrowUp');
    await this.pointsSlider0.press('ArrowUp');
    await this.pointsSlider0.press('ArrowUp');
}

async pointSliderUseDown() {
    await this.pointsSlider0.click();
    await this.pointsSlider0.press('ArrowDown');
    await this.pointsSlider0.press('ArrowDown');
    await this.pointsSlider0.press('ArrowDown');
}

async manualInputPointsFieldFill(number:string) {
    await this.manualInputPointsField0.click();
    await this.manualInputPointsField0.fill(number);
}

async manualInputPointsFieldFillPositiveValue() {
    await this.manualInputPointsField0.click();
    await this.manualInputPointsField0.fill('4.5');
}

async manualInputPointsFieldFillNegativeValue() {
    await this.manualInputPointsField0.click();
    await this.manualInputPointsField0.fill('-2.5');
}

async manualInputPointsFieldFillZeroValue() {
    await this.manualInputPointsField0.click();
    await this.manualInputPointsField0.fill('0');
}

async manualInputPointsFieldZeroFill() {
    await this.manualInputPointsField0.click();
    await this.manualInputPointsField0.fill('2');
}

async manualInputPointsFieldOneFill() {
    await this.manualInputPointsField1.click();
    await this.manualInputPointsField1.fill('3.5');
}

async manualInputPointsFieldTwoFill() {
    await this.manualInputPointsField2.click();
    await this.manualInputPointsField2.fill('1');
}

async manualInputPointsFieldThreeFill() {
    await this.manualInputPointsField3.click();
    await this.manualInputPointsField3.fill('-4');
}

async manualInputPointsFieldFourFill() {
    await this.manualInputPointsField4.click();
    await this.manualInputPointsField4.fill('-1.5');
}

async addAnswerButtonClick() {
    await this.addAnswerButton.click();
}

async answerDeleteIconClickOne() {
    await this.answerDeleteIcon1.click();
}

async answerDeleteIconClickTwo() {
    await this.answerDeleteIcon2.click();
}

async answerDeleteIconClickThree() {
    await this.answerDeleteIcon3.click();
}

async answerDeleteIconClickFour() {
    await this.answerDeleteIcon4.click();
}

async addSampleButtonClick() {
    await this.addSampleButton.click();
}

async sampleFieldFill(text:string) {
    await this.sampleField.click();
    await this.sampleField.fill(text);
}

async addAnotherTermButtonClick() {
    await this.addAnotherTermButton.click();
}

async cancelButtonClick() {
    await this.cancelButton.click();
}

async saveButtonClick() {
    await this.saveButton.click();
}

async saveChangesButtonClick() {
    await this.saveChangesButton.click();
}

async saveButtonOopsPopupCloseButtonClick() {
    await this.saveButtonOopsPopupCloseButton.click();
}

async pushToArchiveButtonClick() {
    await this.pushToArchiveButton.click();
}

async pushToArchivePopupCloseButtonClick() {
    await this.pushToArchivePopupCancelButton.click();
}

async pushToArchivePopupArchiveButtonClick() {
    await this.pushToArchivePopupArchiveButton.click();
}

async activateButtonClick() {
    await this.activateButton.click();
}

}

export {
    NewEditTermPage
}