import { expect, Locator, Page } from '@playwright/test';


class ViewingModelPage {
    test: any;
    page: Page;
    expect: any;
    addTermButton: Locator;
    listFirstTermItem: Locator;
    linkFirstItemTerm: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addTermButton = page.locator('#terms-list-add-term');

        this.listFirstTermItem = page.locator('tr.mat-row.ng-star-inserted >> nth=0');
        this.linkFirstItemTerm = page.locator('a.td__link.ng-star-inserted >> nth=0');


    }

    async addTermButtonClick() {
        await this.addTermButton.click();
    }

    async listFirstItemTermFocus() {
        await this.listFirstTermItem.focus();
    }

    async listFirstItemTermClick() {
        await this.listFirstTermItem.click();
    }

    async listFirstItemLinkTermClick() {
        await this.linkFirstItemTerm.click();
    }
}


export {
    ViewingModelPage
}