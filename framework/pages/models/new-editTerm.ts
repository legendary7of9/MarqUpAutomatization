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
    pointsSlider0: Locator;
    manualInputPointsField0: Locator;
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
    saveButtonOopsPopupCloseButton: Locator;

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
    this.pointsSlider0 = page.locator('#form-control-answer-weight-0');
    this.manualInputPointsField0 = page.locator('#form-control-answer-weight-manual-0 input');
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
    this.saveButtonOopsPopupCloseButton = page.locator('.mat-dialog-container button');
}    

async termFieldFill(text:string) {
    await this.termField.click();
    await this.termField.fill(text);
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

async questionFieldFill(text:string) {
    await this.questionField.click();
    await this.questionField.fill(text);
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

async saveButtonOopsPopupCloseButtonClick() {
    await this.saveButtonOopsPopupCloseButton.click();
}

}

export {
    NewEditTermPage
}