import { expect, Locator, Page } from '@playwright/test';


class DealsPage {
    test: any;
    page: Page;
    expect: any;
    addDealButton: Locator;
    statusFilter: Locator;
    createFilter: Locator;
    threeDotsMenuButton: Locator;
    threeDotsMenuEditButton: Locator;
    threeDotsMenuSaveAsNewButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.addDealButton = page.locator('#deals-list-add-deal');
        this.statusFilter = page.locator('#status-column-sort');
        this.createFilter = page.locator('#created-column-sort');
        this.threeDotsMenuButton = page.locator('.mat-icon-button >> nth=0');
        this.threeDotsMenuEditButton = page.locator('.context-menu-edit');
        this.threeDotsMenuSaveAsNewButton = page.locator('.context-menu-save-as-new');
    }

    async addDealButtonClick() {
        await this.addDealButton.click();
    }

    async statusFilterClick() {
        await this.statusFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async createFilterClick() {
        await this.createFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async threeDotsMenuEditButtonClick() {
        await this.threeDotsMenuButton.click();
        await this.threeDotsMenuEditButton.click();
    }

    async threeDotsMenuSaveAsNewButtonClick() {
        await this.threeDotsMenuButton.click();
        await this.threeDotsMenuSaveAsNewButton.click();
        await this.page.waitForTimeout(1000);
    }
}


export {
    DealsPage
}