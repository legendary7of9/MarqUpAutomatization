import { Locator, Page } from '@playwright/test';


class NewEditContractPage {
    test: any;
    page: Page;
    alertIcon: Locator;
    alertIconPopupXButton: Locator;
    alertIconPopupDoNotShowCheckbox: Locator;
    alertIconPopupApplyButton: Locator;
    alertIconPopupCancelButton: Locator;
    contractTitleField: Locator;
    contractDescriptionTitleField: Locator;
    saveAndGenerateLinkButton: Locator;
    saveButton: Locator;
    saveAndSubmitButton: Locator;
    publishToggle: Locator;
    draftToggle: Locator;
    iIcon: Locator;
    previewContractButton: Locator;
    contractFee: Locator;
    contractFeeValue: Locator;
    editVariablesConfigurator: Locator;
    configuratorVariableValue0: Locator;
    configuratorVariableValueOption0: Locator;
    configuratorVariableValueTextarea: Locator;

    constructor(page: Page) {
        this.page = page;
        this.alertIcon = page.locator('.warning-icon');
        this.alertIconPopupXButton = page.locator('#warning-cancel-cross');
        this.alertIconPopupDoNotShowCheckbox = page.locator('#warning-do-not-show-again');
        this.alertIconPopupApplyButton = page.locator('#warning-apply');
        this.alertIconPopupCancelButton = page.locator('#warning-cancel');
        this.contractTitleField = page.locator('[formcontrolname="title"]');
        this.contractDescriptionTitleField = page.locator('[formcontrolname="description"]');
        this.saveAndGenerateLinkButton = page.locator('#contract-detail-save-and-generate');
        this.saveButton = page.locator('#contract-detail-save');
        this.saveAndSubmitButton = page.locator('#contract-detail-save-and-submit');
        this.publishToggle = page.locator('#contract-detail-status-publish');
        this.draftToggle = page.locator('#contract-detail-status-draft');
        this.iIcon = page.locator('#contract-detail-info');
        this.previewContractButton = page.locator('#contract-detail-preview-contract');
        this.contractFee = page.locator('#paytracts-contract-fee-select');
        this.contractFeeValue = page.locator('.mat-option >> nth=1');
        this.editVariablesConfigurator = page.locator('.contract-values-wrapper-opener');
        this.configuratorVariableValue0 = page.locator('#configurator-variable-elementName_1');
        this.configuratorVariableValueOption0 = page.locator('#variables-list-form-control-value-elementName_1');
        this.configuratorVariableValueTextarea = page.locator('[aria-label="variable name"]');
    }

    async alertIconClick() {
        await this.alertIcon.click();
        await this.page.waitForSelector('.mat-dialog-container');
    }

    async alertIconPopupXButtonClick() {
        await this.alertIconPopupXButton.click();
        await this.page.waitForSelector('#contract-detail-save');
    }

    async alertIconPopupDoNotShowCheckboxClick() {
        await this.alertIconPopupDoNotShowCheckbox.click();
    }

    async alertIconPopupApplyButtonClickCheckboxChecked() {
        await this.alertIconPopupApplyButton.click();
        await this.page.waitForSelector('#contract-detail-save');
    }

    async alertIconPopupApplyButtonClickCheckboxNotChecked() {
        await this.alertIconPopupApplyButton.click();
        await this.page.waitForSelector('#contract-detail-save');
    }

    async alertIconPopupCancelButtonClick() {
        await this.alertIconPopupCancelButton.click();
        await this.page.waitForSelector('#contract-detail-save');
    }

    async contractTitleFieldFillRandom(text:string) {
        await this.contractTitleField.click();
        await this.contractTitleField.fill(text);
    }

    async contractDescriptionTitleFieldFillRandom(text:string) {
        await this.contractDescriptionTitleField.click();
        await this.contractDescriptionTitleField.fill(text);
    }

    async saveAndGenerateLinkButtonClick() {
        await this.saveAndGenerateLinkButton.click();
        await this.page.waitForSelector('#contract-view-copy-link');
    }

    async saveAndGenerateLinkButtonForErrorClick() {
        await this.saveAndGenerateLinkButton.click();
    }

    async saveButtonClick() {
        await this.saveButton.click();
        await this.page.waitForURL('/contracts/list?&sort=-updated_at');
    }

    async saveButtonForErrorClick() {
        await this.saveButton.click();
    }

    async saveAndSubmitButtonClick() {
        await this.saveAndSubmitButton.click();
        await this.page.waitForSelector('#contract-view-edit');
    }

    async saveAndSubmitButtonForErrorClick() {
        await this.saveAndSubmitButton.click();
    }

    async publishToggleClick() {
        await this.publishToggle.click();
    }

    async draftToggleClick() {
        await this.draftToggle.click();
    }

    async iIconFocus() {
        await this.iIcon.focus();
    }

    async previewContractButtonClick() {
        await this.previewContractButton.click();
        await this.page.waitForSelector('#contract-view-edit');
    }

    async contractFeeValueChoose() {
        await this.contractFee.click();
        await this.page.waitForTimeout(1500);
        if (await this.contractFeeValue.isHidden()) 
        {
            this.page.waitForTimeout(1500);
            this.contractFee.click();
            this.page.waitForTimeout(1500);
        }
        await this.page.waitForSelector('.mat-select-content');
        await this.contractFeeValue.click();
    }

    async editVariablesConfiguratorClick() {
        await this.editVariablesConfigurator.click();
        await this.page.waitForTimeout(1000);
    }

    async configuratorVariableValue0Click() {
        await this.configuratorVariableValue0.click();
        await this.page.waitForTimeout(500);
    }
}


export {
    NewEditContractPage
}