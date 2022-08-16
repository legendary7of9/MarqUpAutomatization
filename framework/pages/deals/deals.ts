import { expect, Locator, Page } from '@playwright/test';


class DealsPage {
    test: any;
    page: Page;
    expect: any;
    addDealButton: Locator;
    addDealPopupNewDealButton: Locator;
    addDealPopupChooseContractButton: Locator;
    addDealPopupCancelButton: Locator;
    chooseContractPageNextButton: Locator;
    chooseContractPageCancelButton: Locator;
    updateSubscriptionPopupUpdateSubscriptionButton: Locator;
    updateSubscriptionPopupCloseButton: Locator;
    updateSubscriptionPopupContactAACloseButton: Locator;
    exportButton: Locator;
    exportPopupXbutton: Locator;
    exportPopupExportAllRadioButton: Locator;
    exportPopupExportOnlySelectedRadioButton: Locator;
    exportPopupCancelbutton: Locator;
    exportPopupExportbutton: Locator;
    emailSentPopupXButton: Locator;
    emailSentPopupDoneButton: Locator;
    dealFilter: Locator;
    modelFilter: Locator;
    effectiveDateFilter: Locator;
    expirationDateFilter: Locator;
    statusFilter: Locator;
    scoreFilter: Locator;
    contractFilter: Locator;
    createFilter: Locator;
    editedFilter: Locator;
    rightArrow: Locator;
    leftArrow: Locator;
    checkboxSelectAll: Locator;
    checkboxSelect0: Locator;
    checkboxSelect1: Locator;
    checkboxSelect2: Locator;
    checkboxSelect3: Locator;
    checkboxSelect4: Locator;
    checkboxSelect5: Locator;
    checkboxSelect6: Locator;
    checkboxSelect7: Locator;
    checkboxSelect8: Locator;
    checkboxSelect9: Locator;
    threeDotsMenuButton: Locator;
    threeDotsMenuEditButton: Locator;
    threeDotsMenuSaveAsNewButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.addDealButton = page.locator('#deals-list-add-deal');
        this.addDealPopupNewDealButton = page.locator('#confirm-create-deal-new-deal');
        this.addDealPopupChooseContractButton = page.locator('#confirm-create-deal-choose-a-contract');
        this.addDealPopupCancelButton = page.locator('#confirm-create-deal-cancel');
        this.chooseContractPageNextButton = page.locator('#choose-contract-next');
        this.chooseContractPageCancelButton = page.locator('#choose-contract-cancel');
        this.updateSubscriptionPopupUpdateSubscriptionButton = page.locator('#not-available-popup-update-subscription');
        this.updateSubscriptionPopupCloseButton = page.locator('#not-available-popup-close');
        this.updateSubscriptionPopupContactAACloseButton = page.locator('#not-available-popup-close');
        this.exportButton = page.locator('#deals-list-export');
        this.exportPopupXbutton = page.locator('#export-deals-cross-cancel');
        this.exportPopupExportAllRadioButton = page.locator('.mat-radio-button >> nth=0');
        this.exportPopupExportOnlySelectedRadioButton = page.locator('.mat-radio-button >> nth=1');
        this.exportPopupCancelbutton = page.locator('#export-deals-cancel');
        this.exportPopupExportbutton = page.locator('#export-deals-export');
        this.emailSentPopupXButton = page.locator('.close-ic');
        this.emailSentPopupDoneButton = page.locator('.mat-button >> text=Done');
        this.dealFilter = page.locator('#deal-column-sort');
        this.modelFilter = page.locator('#models-column-sort');
        this.effectiveDateFilter = page.locator('#effective-date-sort');
        this.expirationDateFilter = page.locator('#expiration-date-sort');
        this.statusFilter = page.locator('#status-column-sort');
        this.scoreFilter = page.locator('#score-column-sort');
        this.contractFilter = page.locator('#contract-column-sort');
        this.createFilter = page.locator('#created-column-sort');
        this.editedFilter = page.locator('#edited-column-sort');
        this.rightArrow = page.locator('.right-arrow');
        this.leftArrow = page.locator('.left-arrow');
        this.checkboxSelectAll = page.locator('#deals-list-select-all');
        this.checkboxSelect0 = page.locator('.deals-list-select >> nth=0');
        this.checkboxSelect1 = page.locator('.deals-list-select >> nth=1');
        this.checkboxSelect2 = page.locator('.deals-list-select >> nth=2');
        this.checkboxSelect3 = page.locator('.deals-list-select >> nth=3');
        this.checkboxSelect4 = page.locator('.deals-list-select >> nth=4');
        this.checkboxSelect5 = page.locator('.deals-list-select >> nth=5');
        this.checkboxSelect6 = page.locator('.deals-list-select >> nth=6');
        this.checkboxSelect7 = page.locator('.deals-list-select >> nth=7');
        this.checkboxSelect8 = page.locator('.deals-list-select >> nth=8');
        this.checkboxSelect9 = page.locator('.deals-list-select >> nth=9');
        this.threeDotsMenuButton = page.locator('.mat-icon-button >> nth=0');
        this.threeDotsMenuEditButton = page.locator('.context-menu-edit');
        this.threeDotsMenuSaveAsNewButton = page.locator('.context-menu-save-as-new');
    }

    async addDealButtonClick() {
        await this.addDealButton.click();
        await this.page.waitForTimeout(1000);
    }

    async addDealPopupNewDealButtonClick() {
        await this.page.waitForTimeout(1000);
        await this.addDealPopupNewDealButton.click();
    }

    async addDealPopupChooseContractButtonClick() {
        await this.addDealPopupChooseContractButton.click();
        await this.page.waitForTimeout(1000);
    }

    async addDealPopupCancelButtonClick() {
        await this.addDealPopupCancelButton.click();
    }

    async chooseContractPageNextButtonClick() {
        await this.chooseContractPageNextButton.click();
        await this.page.waitForSelector('#deal-details-save');
    }

    async chooseContractPageCancelButtonClick() {
        await this.chooseContractPageCancelButton.click();
        await this.page.waitForSelector('#deals-list-add-deal');
    }

    async updateSubscriptionPopupUpdateSubscriptionButtonClick() {
        await this.updateSubscriptionPopupUpdateSubscriptionButton.click();
        await this.page.waitForTimeout(1000);
    }

    async updateSubscriptionPopupCloseButtonClick() {
        await this.updateSubscriptionPopupCloseButton.click();
    }

    async updateSubscriptionPopupContactAACloseButtonClick() {
        await this.updateSubscriptionPopupContactAACloseButton.click();
    }

    async exportButtonClick() {
        await this.exportButton.click();
    }

    async exportPopupXbuttonClick() {
        await this.exportPopupXbutton.click();
    }

    async exportPopupExportAllRadioButtonClick() {
        await this.exportPopupExportAllRadioButton.click();
    }

    async exportPopupExportOnlySelectedRadioButtonClick() {
        await this.exportPopupExportOnlySelectedRadioButton.click();
    }

    async exportPopupCancelbuttonClick() {
        await this.exportPopupCancelbutton.click();
    }

    async exportPopupExportbuttonClick() {
        await this.exportPopupExportbutton.click();
        await this.page.waitForTimeout(1500);
    }

    async emailSentPopupXButtonClick() {
        await this.emailSentPopupXButton.click();
    }

    async emailSentPopupDoneButtonClick() {
        await this.emailSentPopupDoneButton.click();
    }

    async dealFilterClick() {
        await this.dealFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async modelFilterClick() {
        await this.modelFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async effectiveDateFilterClick() {
        await this.effectiveDateFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async expirationDateFilterClick() {
        await this.expirationDateFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async statusFilterClick() {
        await this.statusFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async scoreFilterClick() {
        await this.scoreFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async contractFilterClick() {
        await this.contractFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async createFilterClick() {
        await this.createFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async editedFilterClick() {
        await this.editedFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async rightArrowClick() {
        await this.rightArrow.click();
        await this.page.waitForTimeout(1000);
    }

    async leftArrowClick() {
        await this.leftArrow.click();
        await this.page.waitForTimeout(1000);
    }

    async checkboxSelectAllClick() {
        await this.checkboxSelectAll.click();
        await this.page.waitForTimeout(1000);
    }

    async checkboxSelect0Click() {
        await this.checkboxSelect0.click();
        await this.page.waitForTimeout(500);
    }

    async checkboxSelect1Click() {
        await this.checkboxSelect1.click();
        await this.page.waitForTimeout(500);
    }

    async checkboxSelect2Click() {
        await this.checkboxSelect2.click();
        await this.page.waitForTimeout(500);
    }

    async checkboxSelect3Click() {
        await this.checkboxSelect3.click();
        await this.page.waitForTimeout(500);
    }

    async checkboxSelect4Click() {
        await this.checkboxSelect4.click();
        await this.page.waitForTimeout(500);
    }

    async checkboxSelect5Click() {
        await this.checkboxSelect5.click();
        await this.page.waitForTimeout(500);
    }

    async checkboxSelect6Click() {
        await this.checkboxSelect6.click();
        await this.page.waitForTimeout(500);
    }

    async checkboxSelect7Click() {
        await this.checkboxSelect7.click();
        await this.page.waitForTimeout(500);
    }

    async checkboxSelect8Click() {
        await this.checkboxSelect8.click();
        await this.page.waitForTimeout(500);
    }

    async checkboxSelect9Click() {
        await this.checkboxSelect9.click();
        await this.page.waitForTimeout(500);
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