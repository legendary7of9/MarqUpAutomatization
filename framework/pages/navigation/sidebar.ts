import { Locator, Page } from '@playwright/test';


class SideBar {
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
        this.dashboard = page.locator('#sidebar-dashboard');
        this.models = page.locator('#sidebar-models');
        this.deals = page.locator('#sidebar-deals');
        this.clicktracts = page.locator('.ic_template');
        this.clicktractsTempates = page.locator('#sidebar-templates-list');
        this.clicktractsContracts = page.locator('#sidebar-contracts-list');
        this.clicktractsSignatures = page.locator('#sidebar-signatures-list');
    }

    async sideBarDashboardClick() {
        await this.dashboard.click();
    }

    async sideBarModelClick() {
        await this.models.dblclick();
        await this.page.waitForTimeout(500);
    }

    async sideBarDealsClick() {
        await this.deals.click();
        await this.page.waitForTimeout(1000);
    }

    async clicktractsClick() {
        await this.clicktracts.click();
    }

    async clickTractsTemplatesClick() {
        await this.clicktractsTempates.click();
        await this.page.waitForSelector('#templates-list-add-template');
    }

    async clickTractsContractsClick() {
        await this.clicktractsContracts.click();
    }

    async clickTractsSignaturesClick() {
        await this.clicktracts.hover();
        await this.clicktractsSignatures.click();
    }




}


export {
    SideBar
}