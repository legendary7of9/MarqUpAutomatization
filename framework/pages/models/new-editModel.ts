import { Locator, Page } from '@playwright/test';


class NewEditModelPage {
    page: Page;
    nameField: Locator;
    descriptionField: Locator;
    typeDropDown: Locator;
    typeDropDownValue: Locator;
    typeDropDownEditValue: Locator;
    typeDropDownOtherValue: Locator;
    typeName: Locator;
    clientDropDown: Locator;
    clientDropDownValue: Locator;
    clientDropDownEditValue: Locator;
    iIcon: Locator;
    fromField: Locator;
    toField: Locator;
    nextButton: Locator;
    cancelButton: Locator;
    saveButton: Locator;
    saveChangesButton: Locator;
    activateButton: Locator;
    activatePopupUpdateSubscriptionButton: Locator;
    activatePopupCloseButton: Locator;
    pushToArchiveButton: Locator;
    pushToArchivePopup: Locator;
    pushToArchivePopupCancelButton: Locator;
    pushToArchivePopupArchiveButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameField = page.locator('[formcontrolname="name"]');
        this.descriptionField = page.locator('[formcontrolname="description"]');
        this.typeDropDown = page.locator('[formcontrolname="type_id"]');
        this.typeDropDownValue = page.locator('mat-option >> nth=19');
        this.typeDropDownEditValue = page.locator('mat-option >> nth=14');
        this.typeDropDownOtherValue = page.locator('mat-option >> nth=21');
        this.typeName = page.locator('[formcontrolname="type_name"]');
        this.clientDropDown = page.locator('[formcontrolname="account_id"]');
        this.clientDropDownValue = page.locator('mat-option >> nth=82');
        this.clientDropDownEditValue = page.locator('#mat-option-480');
        this.iIcon = page.locator('#weight-scale-info');
        this.fromField = page.locator('[formcontrolname="weight_scale_from"]');
        this.toField = page.locator('[formcontrolname="weight_scale_to"]');
        this.nextButton = page.locator('#model-details-next');
        this.cancelButton = page.locator('#model-details-cancel');
        this.saveButton = page.locator('#model-details-save');
        this.saveChangesButton = page.locator('#model-details-save-changes');
        this.activateButton = page.locator('#model-details-activate');
        this.activatePopupUpdateSubscriptionButton = page.locator('#not-available-popup-update-subscription');
        this.activatePopupCloseButton = page.locator('#not-available-popup-close');
        this.pushToArchiveButton = page.locator('#model-details-push-to-archive');
        this.pushToArchivePopupCancelButton = page.locator('#confirm-active-cancel');
        this.pushToArchivePopupArchiveButton = page.locator('#confirm-active-archive');
    }

    async nameFieldFill(text:string) {
        await this.nameField.click();
        await this.nameField.fill(text);
    }

    async nameFieldClear() {
        await this.nameField.click();
        await this.nameField.fill('');
    }

    async descriptionFieldFill(text:string) {
        await this.descriptionField.click();
        await this.descriptionField.fill('text');
    }

    async descriptionFieldEdit() {
        await this.descriptionField.click();
        await this.descriptionField.fill('');
        await this.descriptionField.fill('text33');
    }

    async typeDropDownClick() {
        await this.typeDropDown.click();
    }

    async typeDropDownChoose() {
        await this.typeDropDown.click();
        await this.page.focus('mat-option >> nth=19');
        await this.typeDropDownValue.click();
    }

    async typeDropDownOtherChoose() {
        await this.typeDropDownOtherValue.click();
    }

    async typeDropDownEdit() {
        await this.typeDropDown.click();
        await this.typeDropDownEditValue.click();
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

    async fromFieldClear() {
        await this.fromField.click();
        await this.fromField.fill('');
    }

    async toFieldFill(number: string) {
        await this.toField.click();
        await this.toField.fill(number);
    }

    async toFieldFillSmaller() {
        await this.toField.click();
        await this.toField.fill('5');
    }

    async toFieldClear() {
        await this.toField.click();
        await this.toField.fill('');
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

    async saveChangesButtonClick() {
        await this.saveChangesButton.click();
    }

    async activateButtonClick() {
        await this.activateButton.click();
    }

    async pushToArchiveButtonClick() {
        await this.pushToArchiveButton.click();
    }

    async activatePopupUpdateSubscriptionButtonClick() {
        await this.activatePopupUpdateSubscriptionButton.click();
    }

    async activatePopupCloseButtonClick() {
    await this.activatePopupCloseButton.click();
    }

    async pushToArchivePopupCancelButtonClick() {
        await this.pushToArchivePopupCancelButton.click();
    }

    async pushToArchivePopupArchiveButtonClick() {
        await this.pushToArchivePopupArchiveButton.click();
    }
}

export {
    NewEditModelPage
}