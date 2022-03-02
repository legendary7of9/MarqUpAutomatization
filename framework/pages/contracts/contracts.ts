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
    copyLinkPopupCopyLinkButton: Locator;
    copyLinkPopupCancelButton: Locator;
    copyLinkPopupXButton: Locator;
    copyLinkPopupPermanentRadioButton: Locator;
    copyLinkPopupExpiringRadioButton: Locator;
    copyLinkPopupDataPickerButton: Locator;
    copyLinkPopupExpirtaionDateField: Locator;
    copyLinkPopupGetLinkButton: Locator;
    threeDotsMenuButton: Locator;
    threeDotsMenuEditButton: Locator;
    threeDotsMenuSaveAsNewButton: Locator;
    threeDotsMenuShareAccessButton: Locator;
    threeDotsMenuCreateContractButton: Locator;
    threeDotsMenuDeleteButton: Locator;
    threeDotsMenuDeletePopupCancelButton: Locator;
    threeDotsMenuDeletePopupDeleteButton: Locator;
    threeDotsMenuDisableSignaturesButton: Locator;
    threeDotsMenuEnableSignaturesButton: Locator;
    threeDotsMenuDisablePaytractsButton: Locator;
    threeDotsMenuDisablePaytractsPopupDoneButton: Locator;
    threeDotsMenuDisablePaytractsPopupCancelButton: Locator;
    threeDotsMenuDisablePaytractsPopupXButton: Locator;

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
        this.copyLinkButton = page.locator('.contracts-name-column-copy-link >> nth=0');
        this.copyLinkPopupCopyLinkButton = page.locator('#copy-link-copy-link');
        this.copyLinkPopupCancelButton = page.locator('#copy-link-cancel');
        this.copyLinkPopupXButton = page.locator('#copy-link-cancel-cross');
        this.copyLinkPopupPermanentRadioButton = page.locator('.mat-radio-label-content >> text=Permanent Link');
        this.copyLinkPopupExpiringRadioButton = page.locator('.mat-radio-label-content >> text=Expiring Link');
        this.copyLinkPopupDataPickerButton = page.locator('.mat-datepicker-toggle');
        this.copyLinkPopupGetLinkButton = page.locator('.expiring-date-btn');
        this.copyLinkPopupExpirtaionDateField = page.locator('#expiringLink input');
        this.threeDotsMenuButton = page.locator('.mat-icon-button >> nth=0');
        this.threeDotsMenuEditButton = page.locator('.context-menu-edit');
        this.threeDotsMenuSaveAsNewButton = page.locator('.context-menu-save-as-new');
        this.threeDotsMenuShareAccessButton = page.locator('.context-menu-share-access');
        this.threeDotsMenuCreateContractButton = page.locator('.context-menu-create-contract');
        this.threeDotsMenuDeleteButton = page.locator('.context-menu-delete');
        this.threeDotsMenuDeletePopupCancelButton = page.locator('.mat-button >> text=Cancel');
        this.threeDotsMenuDeletePopupDeleteButton = page.locator('.mat-button >> text=Delete');
        this.threeDotsMenuDisableSignaturesButton = page.locator('.context-menu-disable-signature');
        this.threeDotsMenuEnableSignaturesButton = page.locator('.context-menu-enable-signature');
        this.threeDotsMenuDisablePaytractsButton = page.locator('.context-menu-disable-paytracts');
        this.threeDotsMenuDisablePaytractsPopupDoneButton = page.locator('.mat-raised-button');
        this.threeDotsMenuDisablePaytractsPopupCancelButton = page.locator('.btn-cancel');
        this.threeDotsMenuDisablePaytractsPopupXButton = page.locator('.close-button');
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

    async copyLinkButtonClickAAAU() {
        await this.copyLinkButton.click();
        await this.page.waitForSelector('.mat-dialog-container');
    }

    async copyLinkButtonClickSA() {
        await this.copyLinkButton.click();
    }

    async copyLinkPopupCopyLinkButtonClick() {
        await this.copyLinkPopupCopyLinkButton.click();
    }

    async copyLinkPopupCancelButtonClick() {
        await this.copyLinkPopupCancelButton.click();
    }

    async copyLinkPopupXButtonClick() {
        await this.copyLinkPopupXButton.click();
    }

    async copyLinkPopupPermanentRadioButtonClick() {
        await this.copyLinkPopupPermanentRadioButton.click();
    }

    async copyLinkPopupExpiringRadioButtonClick() {
        await this.copyLinkPopupExpiringRadioButton.click();
    }

    async copyLinkPopupDataPickerButtonClick() {
        await this.copyLinkPopupDataPickerButton.click();
    }

    async copyLinkPopupGetLinkButtonClick() {
        await this.copyLinkPopupGetLinkButton.click();
    }

    async copyLinkPopupExpirtaionDateFieldPastValueFill() {
        await this.copyLinkPopupExpirtaionDateField.fill('08/08/2010');
    }

    async copyLinkPopupExpirtaionDateFieldPositiveValueFill() {
        await this.copyLinkPopupExpirtaionDateField.fill('08/08/2033');
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

    async threeDotsMenuDisableSignaturesButtonClick() {
        await this.threeDotsMenuButton.click();
        await this.page.waitForTimeout(1000);
        await this.threeDotsMenuDisableSignaturesButton.click();
        await this.page.waitForTimeout(1000);
    }

    async threeDotsMenuEnableSignaturesButtonClick() {
        await this.threeDotsMenuButton.click();
        await this.page.waitForTimeout(1000);
        await this.threeDotsMenuEnableSignaturesButton.click();
        await this.page.waitForTimeout(1000);
    }

    async threeDotsMenuDisablePaytractsButtonClick() {
        await this.threeDotsMenuButton.click();
        await this.page.waitForTimeout(1000);
        await this.threeDotsMenuDisablePaytractsButton.click();
        await this.page.waitForTimeout(1000);
    }

    async threeDotsMenuDeletePopupCancelButtonClick() {
        await this.threeDotsMenuDeletePopupCancelButton.click();
    }

    async threeDotsMenuDeletePopupDeleteButtonClick() {
        await this.threeDotsMenuDeletePopupDeleteButton.click();
        await this.page.waitForTimeout(1000);
    }

    async threeDotsMenuDisablePaytractsPopupDoneButtonClick() {
        await this.threeDotsMenuDisablePaytractsPopupDoneButton.click();
        await this.page.waitForTimeout(2500);
    }

    async threeDotsMenuDisablePaytractsPopupCancelButtonClick() {
        await this.threeDotsMenuDisablePaytractsPopupCancelButton.click();
    }

    async threeDotsMenuDisablePaytractsPopupXButtonClick() {
        await this.threeDotsMenuDisablePaytractsPopupXButton.click();
    }
}


export {
    ContractsPage
}