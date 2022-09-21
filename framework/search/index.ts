import { Locator, Page } from '@playwright/test';


class Search {
    test: any;
    page: Page;
    expect: any;
    searchField: Locator;
    searchButton: Locator;
    contractToggle: Locator;
    signatureToggle: Locator;


    constructor(page: Page) {
        this.page = page;
        this.searchField = page.locator('[name="search"]');
        this.searchButton = page.locator('.btn >> text=search');
        this.contractToggle = page.locator('.mat-button-toggle-label-content >> text=Contract');
        this.signatureToggle = page.locator('.mat-button-toggle-label-content >> text=Signature');
    }

    async searchButtonClick() {
        await this.searchButton.click();
        await this.page.waitForTimeout(1500);
    }

    async contractToggleClick() {
        await this.contractToggle.click();
        await this.page.waitForTimeout(1500);
    }

    async signatureToggleClick() {
        await this.signatureToggle.click();
        await this.page.waitForTimeout(1500);
    }
}


export {
    Search
}