import { Locator, Page } from '@playwright/test';


class NewModelPage {
    page: Page;
    nameField: Locator;
    descriptionField: Locator;
    typeDropDown: Locator;
    typeDropDownValue: Locator;
    typeDropDownOtherValue: Locator;
    typeName: Locator;
    clientDropDown: Locator;
    clientDropDownValue: Locator;
    iIcon: Locator;
    fromField: Locator;
    toField: Locator;
    nextButton: Locator;
    cancelButton: Locator;
    saveButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameField = page.locator('[formcontrolname="name"]');
        this.descriptionField = page.locator('[formcontrolname="description"]');
        this.typeDropDown = page.locator('[formcontrolname="type_id"]');
        this.typeDropDownValue = page.locator('#mat-option-19');
        this.typeDropDownOtherValue = page.locator('#mat-option-21');
        this.typeName = page.locator('[formcontrolname="type_name"]');
        this.clientDropDown = page.locator('[formcontrolname="account_id"]');
        this.clientDropDownValue = page.locator('#mat-option-126');
        this.iIcon = page.locator('#weight-scale-info');
        this.fromField = page.locator('[formcontrolname="weight_scale_from"]');
        this.toField = page.locator('[formcontrolname="weight_scale_to"]');
        this.nextButton = page.locator('#model-details-next');
        this.cancelButton = page.locator('#model-details-cancel');
        this.saveButton = page.locator('#model-details-save');
    }

    async nameFieldFill(text:string) {
        await this.nameField.click();
        await this.nameField.fill(text);
    }

    async descriptionFieldFill(text:string) {
        await this.descriptionField.click();
        await this.descriptionField.fill('text');
    }

    async typeDropDownClick() {
        await this.typeDropDown.click();
    }

    async typeDropDownChoose() {
        await this.typeDropDown.click();
        await this.typeDropDownValue.click();
    }

    async typeDropDownOtherChoose() {
        await this.typeDropDownOtherValue.click();
    }

    async clientDropDownChoose() {
        await this.clientDropDown.click();
        await this.clientDropDownValue.click();
    }

    async iIconClick() {
        await this.iIcon.click();
    }

    async fromFieldFill(number: string) {
        await this.fromField.click();
        await this.fromField.fill(number);
    }

    async fromFieldFillSmaller() {
        await this.fromField.click();
        await this.fromField.fill('8');
    }

    async fromFieldValidation() {
        await this.fromField.click();
        await this.fromField.fill('8');
        await this.page.keyboard.press('Backspace');
    }

    async toFieldFill(number: string) {
        await this.toField.click();
        await this.toField.fill(number);
    }

    async toFieldFillSmaller() {
        await this.toField.click();
        await this.toField.fill('5');
    }

    async nextButtonClick() {
        await this.nextButton.click();
    }

    async cancelButtonClick() {
        await this.cancelButton.click();
    }

    async saveButtonClick() {
        await this.saveButton.click();
    }



}


export {
    NewModelPage
}