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
        this.clicktracts = page.locator('');
        this.clicktractsTempates = page.locator('#sidebar-templates-list');
        this.clicktractsContracts = page.locator('#sidebar-contracts-list');
        this.clicktractsSignatures = page.locator('#sidebar-signatures-list');
    }

    async sideBarDashboardClick() {
        await this.dashboard.click();
    }

    async sideBarModelClick() {
        await this.models.dblclick();
    }

    async sideBarDealsClick() {
        await this.deals.click();
    }



    async sideBarClickTractsTemplatesClick() {
        await this.clicktractsTempates.click();
        await this.page.waitForSelector('#templates-list-add-template');
    }

    async sideBarClickTractsContractsClick() {
        await this.clicktractsContracts.click();
    }

    async sideBarClickTractsSignaturesClick() {
        await this.clicktractsSignatures.click();
    }




}


export {
    SideBar
}