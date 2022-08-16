import { expect, Locator, Page } from '@playwright/test';


class ViewingModelPage {
    test: any;
    page: Page;
    expect: any;
    editModelButton: Locator;
    exportButton: Locator;
    addTermButton: Locator;
    termFilter: Locator;
    descriptionFilter: Locator;
    weightFilter: Locator;
    listFirstTermItem: Locator;
    linkFirstItemTerm: Locator;
    threeDotsMenu: Locator;
    threeDotsMenuEditButton: Locator;
    threeDotsMenuArchiveButton: Locator;
    threeDotsMenuReactivateButton: Locator;
    threeDotsMenuDeleteButton: Locator;
    deletePopupCancel: Locator;
    deletePopupDelete: Locator;
    oopsDeletePopupCancelButton: Locator;
    archivePopupCancelButton: Locator;
    archivePopupArchiveButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.editModelButton = page.locator('#terms-list-edit-model');
        this.exportButton = page.locator('#terms-list-export');
        this.addTermButton = page.locator('#terms-list-add-term');
        this.termFilter = page.locator('#term-column-sort');
        this.descriptionFilter = page.locator('#description-column-sort');
        this.weightFilter = page.locator('#weight-column-sort');
        this.listFirstTermItem = page.locator('tr.mat-row.ng-star-inserted >> nth=0');
        this.linkFirstItemTerm = page.locator('a.td__link.ng-star-inserted >> nth=0');
        this.threeDotsMenu = page.locator('.mat-icon-button >> nth=0');
        this.threeDotsMenuEditButton = page.locator('.action-edit');
        this.threeDotsMenuArchiveButton = page.locator('.action-archive');
        this.threeDotsMenuReactivateButton = page.locator('.action-active');
        this.threeDotsMenuDeleteButton = page.locator('.action-remove');
        this.deletePopupCancel = page.locator('#confirm-modal-cancel');
        this.deletePopupDelete = page.locator('#confirm-modal-delete');
        this.oopsDeletePopupCancelButton = page.locator('#confirm-modal-cancel');
        this.archivePopupCancelButton = page.locator('#confirm-active-cancel');
        this.archivePopupArchiveButton = page.locator('#confirm-active-archive');
    }

    async editModelButtonClick() {
        await this.editModelButton.click();
    }

    async exportButtonClick() {
        await this.exportButton.click();
    }

    async addTermButtonClick() {
        await this.addTermButton.click();
        await this.page.waitForSelector('#term-detail-save');
    }

    async termFilterClick() {
        await this.termFilter.click();
    }

    async descriptionFilterClick() {
        await this.descriptionFilter.click();
    }

    async weightFilterClick() {
        await this.weightFilter.click();
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

    async threeDotsMenuClick() {
        await this.threeDotsMenu.click();
        await this.page.waitForTimeout(500);
    }

    async threeDotsMenuEditButtonClick() {
        await this.threeDotsMenuEditButton.click();
        await this.page.waitForSelector('#term-detail-save');
    }

    async threeDotsMenuArchiveButtonClick() {
        await this.threeDotsMenuArchiveButton.click();
        await this.page.waitForTimeout(500);
    }

    async threeDotsMenuReactivateButtonClick() {
        await this.threeDotsMenuReactivateButton.click();
        await this.page.waitForTimeout(500);
    }

    async threeDotsMenuDeleteButtonClick() {
        await this.threeDotsMenuDeleteButton.click();
        await this.page.waitForTimeout(500);
    }

    async deletePopupCancelClick() {
        await this.deletePopupCancel.click();
    }

    async deletePopupDeleteClick() {
        await this.deletePopupDelete.click();
        await this.page.waitForTimeout(1500);
    }

    async oopsDeletePopupCancelButtonClick() {
        await this.oopsDeletePopupCancelButton.click();
    }

    async archivePopupCancelButtonClick() {
        await this.archivePopupCancelButton.click();
    }

    async archivePopupArchiveButtonClick() {
        await this.archivePopupArchiveButton.click();
        await this.page.waitForTimeout(1500);
    }
}


export {
    ViewingModelPage
}