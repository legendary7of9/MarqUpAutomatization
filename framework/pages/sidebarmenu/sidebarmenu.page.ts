import { expect, Locator, Page } from '@playwright/test';


class sidebarAAAU {
    test: any;
    page: Page;
    expect: any;
    dashboard: Locator;
    models: Locator;
    deals: Locator;
    clicktracts: Locator;
    clicktractsTempates: Locator;
    clicktractsContracts: Locator;
    clicktractsSignatures: Locator;



    constructor(page: Page) {
        this.page = page;
        this.dashboard = page.locator('');
        this.models = page.locator('');
        this.deals = page.locator('');
        this.clicktracts = page.locator('');
        this.clicktractsTempates = page.locator('');
        this.clicktractsContracts = page.locator('');
        this.clicktractsSignatures = page.locator('');
    }

    async addModelButton() {
        await this.models.click();
    }



}


export {
    sidebarAAAU
}