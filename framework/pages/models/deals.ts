import { expect, Locator, Page } from '@playwright/test';


class DealsPage {
    test: any;
    page: Page;
    expect: any;
    addDealButton: Locator;
    createFilter: Locator;
    threeDotsMenuButton: Locator;
    threeDotsMenuEditButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.addDealButton = page.locator('#deals-list-add-deal');
        this.createFilter = page.locator('#created-column-sort');
        this.threeDotsMenuButton = page.locator('.mat-icon-button >> nth=0');
        this.threeDotsMenuEditButton = page.locator('.context-menu-edit');
    }

    async addDealButtonClick() {
        await this.addDealButton.click();
    }

    async createFilterClick() {
        await this.createFilter.click();
    }

    async threeDotsMenuEditButtonClick() {
        await this.threeDotsMenuButton.click();
        await this.threeDotsMenuEditButton.click();
    }
}


export {
    DealsPage
}