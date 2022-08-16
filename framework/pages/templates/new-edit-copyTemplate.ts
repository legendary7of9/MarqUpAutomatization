import { Locator, Page } from '@playwright/test';


class NewEditCopyTemplatePage {
    test: any;
    page: Page;
    expect: any;
    templateTitleField: Locator;
    notesField: Locator;
    textEditorField: Locator;
    createContractButton: Locator;
    saveButton: Locator;
    publishToggle: Locator;
    draftToggle: Locator;
    permissionVisibilityDropDown: Locator;
    permissionVisibilityEvryoneValue: Locator;
    permissionVisibilityOnlyAAValue: Locator;
    permissionVisibilityOnlyMeValue: Locator;
    shareAccessButton: Locator;
    shareAccessPopupSearchField: Locator;
    shareAccessPopupAddButton: Locator;
    shareAccessPopupCloseButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.templateTitleField = page.locator('[formcontrolname="title"]');
        this.notesField = page.locator('[formcontrolname="notes"]');
        this.textEditorField = page.locator('[role="textbox"]');
        this.createContractButton = page.locator('#template-detail-create-contract');
        this.saveButton = page.locator('#template-detail-save');
        this.publishToggle = page.locator('#template-detail-status-publish-button');
        this.draftToggle = page.locator('#template-detail-status-draft-button');
        this.permissionVisibilityDropDown = page.locator('#form-control-visibility_status');
        this.permissionVisibilityEvryoneValue = page.locator('.mat-option-text >> text=Everyone at the company');
        this.permissionVisibilityOnlyAAValue = page.locator('.mat-option-text >> text=Only Account Admins');
        this.permissionVisibilityOnlyMeValue = page.locator('.mat-option-text >> text=Only Me');
        this.shareAccessButton = page.locator('#template-detail-share-access');
        this.shareAccessPopupSearchField = page.locator('#modal-share-access-search');
        this.shareAccessPopupAddButton = page.locator('#modal-share-access-add');
        this.shareAccessPopupCloseButton = page.locator('#modal-share-access-close');
    }

    async templateTitleFieldFill(text:string) {
        await this.templateTitleField.click();
        await this.templateTitleField.fill(text);
    }

    async notesFieldFill(text:string) {
        await this.notesField.click();
        await this.notesField.fill(text);
    }

    async textEditorFieldRandomFill(text:string) {
        await this.textEditorField.click();
        await this.textEditorField.type(text);
    }

    async createContractButtonClick(text:string) {
        await this.createContractButton.click();
    }

    async saveButtonClick() {
        await this.saveButton.click();
        await this.page.waitForTimeout(1500);
    }

    async publishToggleClick() {
        await this.publishToggle.click();
        await this.page.waitForTimeout(500);
    }

    async draftToggleClick() {
        await this.draftToggle.click();
    }

    async permissionVisibilityEvryoneValueChoose() {
        await this.permissionVisibilityDropDown.click();
        await this.permissionVisibilityEvryoneValue.click();
    }

    async permissionVisibilityOnlyAAValueChoose() {
        await this.permissionVisibilityDropDown.click();
        await this.permissionVisibilityOnlyAAValue.click();
    }

    async permissionVisibilityOnlyMeValueChoose() {
        await this.permissionVisibilityDropDown.click();
        await this.permissionVisibilityOnlyMeValue.click();
    }

    async shareAccessButtonClick() {
        await this.shareAccessButton.click();
    }

    async shareAccessPopupSearchFieldFill() {
        await this.shareAccessPopupSearchField.click();
        await this.shareAccessPopupSearchField.type('Client 1HT(test)');
        await this.page.waitForTimeout(500);
    }

    async shareAccessPopupAddButtonClick() {
        await this.shareAccessPopupAddButton.click();
        await this.page.waitForTimeout(1000);
    }

    async shareAccessPopupCloseButtonClick() {
        await this.shareAccessPopupCloseButton.click();
    }

}


export {
    NewEditCopyTemplatePage
}