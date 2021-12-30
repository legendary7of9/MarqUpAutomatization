import { Locator, Page } from '@playwright/test';


class NewTermPage {
    page: Page;
    termField: Locator;
    weightSlider: Locator;
    manualInputWeightField: Locator;
    descriptionField: Locator;
    questionField: Locator;
    radioButton:Locator;
    answerField: Locator;
    pointsSlider: Locator;
    manualInputPointsField: Locator;
    addAnswerButton: Locator;
    answerDeleteIcon: Locator;
    addSampleButton: Locator;
    sampleField: Locator;
    addAnotherTermButton: Locator;
    cancelButton: Locator;
    saveButton: Locator;

constructor(page: Page) {
    this.page = page;
    this.termField = page.locator('[formcontrolname="term"]');
    this.weightSlider = page.locator('[formcontrolname="weight"]');
    this.manualInputWeightField = page.locator('[formcontrolname="weight"]'); //to be refactored
    this.descriptionField = page.locator('[formcontrolname="description"]');
    this.questionField = page.locator('[formcontrolname="question"]');
    this.radioButton = page.locator(''); //to be refactored
    this.answerField = page.locator('[formcontrolname="answer"]');
    this.pointsSlider = page.locator('[formcontrolname="weight"]'); //to be refactored
    this.manualInputPointsField = page.locator('[formcontrolname="weight"]'); //to be refactored
    this.addAnswerButton = page.locator(''); //to be refactored
    this.answerDeleteIcon = page.locator(''); //to be refactored
    this.addSampleButton = page.locator(''); //to be refactored
    this.sampleField = page.locator('[formcontrolname="sample"]');
    this.addAnotherTermButton = page.locator(''); //to be refactored
    this.cancelButton = page.locator(''); //to be refactored
    this.saveButton = page.locator(''); //to be refactored
}    

async termFieldFill(text:string) {
    await this.termField.click();
    await this.termField.fill(text);
}

//to be refactored
async weightSliderClick() {

}

async manualInputWeightFieldFill(number:string) {
    await this.manualInputWeightField.click();
    await this.manualInputWeightField.fill(number);
}

async descriptionFieldFill(text:string) {
    await this.descriptionField.click();
    await this.descriptionField.fill(text);
}

async questionFieldFill(text:string) {
    await this.questionField.click();
    await this.questionField.fill(text);
}

async radioButtonClick() {
    await this.radioButton.click();
}

async answerFieldFill(text:string) {
    await this.answerField.click();
    await this.answerField.fill(text);
}

//to be refactored
async pointsSliderClick() {
    await this.pointsSlider.click();
}

async manualInputPointsFieldFill(number:string) {
    await this.manualInputPointsField.click();
    await this.manualInputPointsField.fill(number);
}

async addAnswerButtonClick() {
    await this.addAnswerButton.click();
}

async answerDeleteIconClick() {
    await this.answerDeleteIcon.click();
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


}

export {
    NewTermPage
}