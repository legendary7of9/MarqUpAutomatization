import { expect, Locator, Page } from '@playwright/test';


class newModelPageAAAU {
    test: any;
    page: Page;
    expect: any;
    nameField: Locator;
    descriptionField: Locator;
    typeDropDown: Locator;
    typeDropDownValue: Locator;
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
        this.typeName = page.locator('[formcontrolname="type_name"]');
        this.clientDropDown = page.locator('[formcontrolname="account_id"]');
        this.clientDropDownValue = page.locator('#mat-option-104');
        this.iIcon = page.locator('app-site-layout.ng-star-inserted:nth-child(2) div.container:nth-child(3) div.content app-model.ng-star-inserted:nth-child(3) section.section mat-card.card.mat-card form.ng-invalid.ng-touched.ng-dirty div.form-subtitle.popup-informer:nth-child(4) > mat-icon.popup-informer__ic.mat-icon.material-icons');
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

    async descriptionFieldFill() {
        await this.descriptionField.click();
        await this.descriptionField.fill('Autotest');
    }

    async typeDropDownClick() {
        await this.typeDropDown.click();
    }

    async typeDropDownChoose() {
        await this.typeDropDown.click();
        await this.typeDropDownValue.click();
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
        await this.fromField.type(number);
    }

    async toFieldFill(number: string) {
        await this.toField.click();
        await this.toField.fill(number);
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
    newModelPageAAAU
}