import { Locator, Page } from '@playwright/test';


class NewEditContractPage {
    test: any;
    page: Page;
    expect: any;
    contractTitleField: Locator;
    contractDescriptionTitleField: Locator;
    saveAndGenerateLinkButton: Locator;
    saveButton: Locator;
    publishToggle: Locator;
    draftToggle: Locator;
    iIcon: Locator;
    previewContractButton: Locator;
    contractFee: Locator;
    contractFeeValue: Locator;
    editVariablesConfigurator: Locator;
    configuratorVariableValue0: Locator;
    configuratorVariableValueOption0: Locator;

    constructor(page: Page) {
        this.page = page;
        this.contractTitleField = page.locator('[formcontrolname="title"]');
        this.contractDescriptionTitleField = page.locator('[formcontrolname="description"]');
        this.saveAndGenerateLinkButton = page.locator('#contract-detail-save-and-generate');
        this.saveButton = page.locator('#contract-detail-save');
        this.publishToggle = page.locator('#contract-detail-status-publish-button');
        this.draftToggle = page.locator('#contract-detail-status-draft-button');
        this.iIcon = page.locator('#contract-detail-info');
        this.previewContractButton = page.locator('#contract-detail-preview-contract');
        this.contractFee = page.locator('#paytracts-contract-fee-select');
        this.contractFeeValue = page.locator('.mat-option >> nth=0');
        this.editVariablesConfigurator = page.locator('.contract-values-wrapper-opener');
        this.configuratorVariableValue0 = page.locator('#configurator-variable-elementName_1');
        this.configuratorVariableValueOption0 = page.locator('#variables-list-form-control-value-elementName_1');
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
        await this.page.waitForTimeout(2500);
    }

    async saveButtonClick() {
        await this.saveButton.click();
        await this.page.waitForURL('/contracts/list?&sort=-created_at');
    }

    async publishToggleClick() {
        await this.publishToggle.click();
    }

    async draftToggleClick() {
        await this.publishToggle.click();
    }

    async iIconFocus() {
        await this.iIcon.focus();
    }

    async previewContractButtonClick() {
        await this.previewContractButton.click();
    }

    async contractFeeValueChoose() {
        await this.contractFee.click();
        await this.page.waitForTimeout(2000);
        await this.contractFeeValue.click();
    }

    async editVariablesConfiguratorClick() {
        await this.editVariablesConfigurator.click();
        await this.page.waitForTimeout(1500);
    }

    async configuratorVariableValue0Click() {
        await this.configuratorVariableValue0.click();
        await this.page.waitForTimeout(1000);
    }
}


export {
    NewEditContractPage
}