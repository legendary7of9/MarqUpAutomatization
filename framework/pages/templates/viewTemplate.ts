import { Locator, Page } from '@playwright/test';


class ViewTemplatePage {
    test: any;
    page: Page;
    expect: any;
    createContractButton: Locator;
    editTemplateButton: Locator;
    exportButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.createContractButton = page.locator('#template-view-create-contract');
        this.editTemplateButton = page.locator(''); //to be refactored
        this.exportButton = page.locator('#template-view-export');
    }

    async createContractButtonClick() {
        await this.createContractButton.click();
        await this.page.waitForSelector('#contract-detail-save-and-generate');
    }

    async editTemplateButtonClick() {
        await this.editTemplateButton.click();
        await this.page.waitForTimeout(1000);
    }

    async exportButtonClick() {
        await this.exportButton.click();
        await this.page.waitForTimeout(1000);
    }
}


export {
    ViewTemplatePage
}