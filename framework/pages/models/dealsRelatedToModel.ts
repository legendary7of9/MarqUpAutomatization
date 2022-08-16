import { expect, Locator, Page } from '@playwright/test';


class DealsRelatedToModelPage {
    test: any;
    page: Page;
    expect: any;
    editButton: Locator;
    exportButton: Locator;
    addDealButton: Locator;
    addDealPopupChooseAContractButton: Locator;
    addDealPopupNewDealButton: Locator;
    addDealPopupCancelButton: Locator;
    addDealSubscriptionLimitsUpdateButton: Locator;
    addDealSubscriptionLimitsCancelButton: Locator;

    checkboxSelectAll: Locator;
    dealsFilter: Locator;
    firstDraftFilter: Locator;
    finalDraftFilter: Locator;
    statusFilter: Locator;
    threeDotsMenuButton: Locator;
    threeDotsMenuEditButton: Locator;
    threeDotsMenuViewSummaryButton: Locator;
    threeDotsMenuSaveAsNewButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.editButton = page.locator('#deals-list-edit-model');
        this.exportButton = page.locator('#deals-list-export');
        this.addDealButton = page.locator('#deals-list-add-deal');
        this.addDealPopupChooseAContractButton = page.locator('#confirm-create-deal-choose-a-contract');
        this.addDealPopupNewDealButton = page.locator('#confirm-create-deal-new-deal');
        this.addDealPopupCancelButton = page.locator('#confirm-create-deal-cancel');
        this.addDealSubscriptionLimitsUpdateButton = page.locator('#not-available-popup-update-subscription');
        this.addDealSubscriptionLimitsCancelButton = page.locator('#not-available-popup-close');


        this.checkboxSelectAll = page.locator('#deals-list-select-all');
        this.dealsFilter = page.locator('#deals-column-sort');
        this.firstDraftFilter = page.locator('#first-draft-column-sort');
        this.finalDraftFilter = page.locator('#final-draft-column-sort');
        this.statusFilter = page.locator('#status-column-sort');
        this.threeDotsMenuButton = page.locator('.mat-icon-button >> nth=0');
        this.threeDotsMenuEditButton = page.locator('.action-edit');
        this.threeDotsMenuViewSummaryButton = page.locator('.action-summary');
        this.threeDotsMenuSaveAsNewButton = page.locator('.action-save');
    }

    async editButtonClick() {
        await this.editButton.click();
        await this.page.waitForSelector('#model-details-save-changes');
    }

    async exportButtonClick() {
        await this.exportButton.click();
    }

    async addDealButtonClick() {
        await this.addDealButton.click();
        await this.page.waitForTimeout(1000);
    }

    async addDealPopupChooseAContractButtonClick() {
        await this.addDealPopupChooseAContractButton.click();
    }

    async addDealPopupNewDealButtonClick() {
        await this.addDealPopupNewDealButton.click();
    }

    async addDealPopupCancelButtonClick() {
        await this.addDealPopupCancelButton.click();
    }

    async addDealSubscriptionLimitsUpdateButtonClick() {
        await this.addDealSubscriptionLimitsUpdateButton.click();
        await this.page.waitForTimeout(1000);
    }

    async addDealSubscriptionLimitsCancelButtonClick() {
        await this.addDealSubscriptionLimitsCancelButton.click();
    }

    async checkboxSelectAllClick() {
        await this.checkboxSelectAll.click();
        await this.page.waitForTimeout(1000);
    }

    async dealsFilterClick() {
        await this.dealsFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async firstDraftFilterClick() {
        await this.firstDraftFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async finalDraftFilterClick() {
        await this.finalDraftFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async statusFilterClick() {
        await this.statusFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async threeDotsMenuButtonClick() {
        await this.threeDotsMenuButton.click();
        await this.page.waitForTimeout(500);
    }

    async threeDotsMenuEditButtonClick() {
        await this.threeDotsMenuEditButton.click();
        await this.page.waitForTimeout(1000);
    }

    async threeDotsMenuViewSummaryButtonClick() {
        await this.threeDotsMenuViewSummaryButton.click();
        await this.page.waitForTimeout(1000);
    }

    async threeDotsMenuSaveAsNewButtonClick() {
        await this.threeDotsMenuSaveAsNewButton.click();
        await this.page.waitForTimeout(1000);
    }
}


export {
    DealsRelatedToModelPage
}