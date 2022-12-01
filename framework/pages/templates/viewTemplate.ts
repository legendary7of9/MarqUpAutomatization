import { Locator, Page } from '@playwright/test';


class ViewTemplatePage {
    test: any;
    page: Page;
    expect: any;
    createContractButton: Locator;
    editTemplateButton: Locator;
    exportButton: Locator;
    editVariablesPanel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.createContractButton = page.locator('#template-view-create-contract');
        this.editTemplateButton = page.locator('#template-view-edit-template');
        this.exportButton = page.locator('#template-view-export');
        this.editVariablesPanel = page.locator('.contract-values-wrapper-opener');
    }

    async createContractButtonClick() {
        await this.createContractButton.click();
        await this.page.waitForSelector('#contract-detail-save');
    }

    async editTemplateButtonClick() {
        await this.editTemplateButton.click();
        await this.page.waitForSelector('#template-detail-save');
    }

    async exportButtonClick() {
        await this.exportButton.click();
        await this.page.waitForTimeout(1000);
    }

    async editVariablesPanelOpen() {
        await this.editVariablesPanel.click();
        await (await this.page.waitForSelector('.contract-values-wrapper')).isVisible();
    }

    async editVariablesPanelClose() {
        await this.editVariablesPanel.click();
        await (await this.page.waitForSelector('.contract-values-wrapper')).isHidden();
    }
}


export {
    ViewTemplatePage
}