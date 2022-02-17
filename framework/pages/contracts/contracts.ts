import { Locator, Page } from '@playwright/test';


class ContractsPage {
    test: any;
    page: Page;
    expect: any;
    filteredByTemplate: Locator;
    contractsTab: Locator;
    contractRequestsTab: Locator;
    contractNameFilter: Locator;
    visibilityFilter: Locator;
    statusFilter: Locator;
    templateNameFilter: Locator;
    payTractsFilter: Locator;
    userFilter: Locator;
    createdFilter: Locator;
    signaturesFilter: Locator;
    lastSignedFilter: Locator;
    copyLinkButton: Locator;
    threeDotsMenuButton: Locator;
    threeDotsMenuEditButton: Locator;
    threeDotsMenuSaveAsNewButton: Locator;
    threeDotsMenuShareAccessButton: Locator;
    threeDotsMenuCreateContractButton: Locator;
    threeDotsMenuDeleteButton: Locator;
    threeDotsMenuDeletePopupCancelButton: Locator;
    threeDotsMenuDeletePopupDeleteButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.filteredByTemplate = page.locator('');
        this.contractsTab = page.locator('');
        this.contractRequestsTab = page.locator('');
        this.contractNameFilter = page.locator('#contract-column-sort');
        this.visibilityFilter = page.locator('#visibility-column-sort');
        this.statusFilter = page.locator('#status-column-sort');
        this.templateNameFilter = page.locator('#template-name-column-sort');
        this.payTractsFilter = page.locator('#paytracts-column-sort');
        this.userFilter = page.locator('#user-column-sort');
        this.createdFilter = page.locator('#created-column-sort');
        this.signaturesFilter = page.locator('#signatures-column-sort');
        this.lastSignedFilter = page.locator('#last-signed-column-sort');
        this.copyLinkButton = page.locator('contracts-name-column-copy-link >> nth=0');
        this.threeDotsMenuButton = page.locator('.mat-icon-button >> nth=0');
        this.threeDotsMenuEditButton = page.locator('.context-menu-edit');
        this.threeDotsMenuSaveAsNewButton = page.locator('.context-menu-save-as-new');
        this.threeDotsMenuShareAccessButton = page.locator('.context-menu-share-access');
        this.threeDotsMenuCreateContractButton = page.locator('.context-menu-create-contract');
        this.threeDotsMenuDeleteButton = page.locator('.context-menu-delete');
        this.threeDotsMenuDeletePopupCancelButton = page.locator('.mat-button >> text=Cancel');
        this.threeDotsMenuDeletePopupDeleteButton = page.locator('.mat-button >> text=Delete');
    }

    async tamplateNameFilterClick() {
        await this.contractNameFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async visibilityFilterClick() {
        await this.visibilityFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async statusFilterClick() {
        await this.statusFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async templateNameFilterClick() {
        await this.templateNameFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async payTractsFilterClick() {
        await this.payTractsFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async userFilterClick() {
        await this.userFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async createdFilterClick() {
        await this.createdFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async signaturesFilterClick() {
        await this.signaturesFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async lastSignedFilterClick() {
        await this.lastSignedFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async copyLinkButtonClick() {
        await this.copyLinkButton.click();
        await this.page.waitForSelector('.mat-dialog-container');
    }

    async threeDotsMenuButtonClick() {
        await this.threeDotsMenuButton.click();
        await this.page.waitForTimeout(1000);
    }

    async threeDotsMenuEditButtonClick() {
        await this.threeDotsMenuButton.click();
        await this.page.waitForTimeout(1000);
        await this.threeDotsMenuEditButton.click();
        await this.page.waitForTimeout(1000);
    }

    async threeDotsMenuSaveAsNewButtonClick() {
        await this.threeDotsMenuButton.click();
        await this.page.waitForTimeout(1000);
        await this.threeDotsMenuSaveAsNewButton.click();
        await this.page.waitForTimeout(1000);
    }

    async threeDotsMenuShareAccessButtonClcik() {
        await this.threeDotsMenuButton.click();
        await this.page.waitForTimeout(1000);
        await this.threeDotsMenuShareAccessButton.click();
        await this.page.waitForTimeout(1000);
    }

    async threeDotsMenuCreateContractButtonClick() {
        await this.threeDotsMenuButton.click();
        await this.page.waitForTimeout(1000);
        await this.threeDotsMenuCreateContractButton.click();
        await this.page.waitForTimeout(1000);
    }

    async threeDotsMenuDeleteButtonClick() {
        await this.threeDotsMenuButton.click();
        await this.page.waitForTimeout(1000);
        await this.threeDotsMenuDeleteButton.click();
        await this.page.waitForTimeout(1000);
    }

    async threeDotsMenuDeletePopupCancelButtonClick() {
        await this.threeDotsMenuDeletePopupCancelButton.click();
    }

    async threeDotsMenuDeletePopupDeleteButtonClick() {
        await this.threeDotsMenuDeletePopupDeleteButton.click();
        await this.page.waitForTimeout(1000);
    }
}


export {
    ContractsPage
}