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
    scoreFilter: Locator;
    createdFilter: Locator;
    signaturesFilter: Locator;
    lastSignedFilter: Locator;
    contractsFilterCR: Locator;
    statusFilterCR: Locator;
    templateFilterCR: Locator;
    userFilterCR: Locator;
    paytractsFilterCR: Locator;
    submittedFilterCR: Locator;
    reviwedFilterCR: Locator;
    reviwerFilterCR: Locator;
    reviwerNotesFilterCR: Locator;
    rightArrow: Locator;
    leftArrow: Locator;
    linkedIcon: Locator;
    linkedIconPopupXButton: Locator;
    linkedIconPopupDoneButton: Locator;
    copyLinkButton: Locator;
    copyLinkPopupCopyLinkButtonPermanent: Locator;
    copyLinkPopupCopyLinkButtonExpiry: Locator;

    copyLinkPopupCancelButton: Locator;
    copyLinkPopupXButton: Locator;
    copyLinkPopupPermanentRadioButton: Locator;
    copyLinkPopupExpiringRadioButton: Locator;
    copyLinkPopupDataPickerButton: Locator;
    copyLinkPopupExpirtaionDateField: Locator;
    copyLinkPopupGetLinkButton: Locator;
    CopyContractLinkPopupContractWithModelDoNotShowCheckbox: Locator;
    CopyContractLinkPopupContractWithModelCreateButton: Locator;
    CopyContractLinkPopupContractWithModelCancelButton: Locator;
    
    createDealForContractPopupDoNotShowCheckbox: Locator;
    createDealForContractPopupCreateButton: Locator;
    createDealForContractPopupCancelButton: Locator;

    updateSubscriptionPopupUpdateSubscriptionButton: Locator;
    updateSubscriptionPopupCloseButton: Locator;
    contactYourAAPopupCloseButton: Locator;
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
        this.filteredByTemplate = page.locator('#contracts-list-filtered-by-template');
        this.contractsTab = page.locator('#contracts-list-contracts-link-button');
        this.contractRequestsTab = page.locator('#contracts-list-contract-requests-link-button');
        this.contractNameFilter = page.locator('#contract-column-sort');
        this.visibilityFilter = page.locator('#visibility-column-sort');
        this.statusFilter = page.locator('#status-column-sort');
        this.templateNameFilter = page.locator('#template-name-column-sort');
        this.payTractsFilter = page.locator('#paytracts-column-sort');
        this.userFilter = page.locator('#user-column-sort');
        this.scoreFilter = page.locator('#score-column-sort');
        this.createdFilter = page.locator('#created-column-sort');
        this.signaturesFilter = page.locator('#signatures-column-sort');
        this.lastSignedFilter = page.locator('#last-signed-column-sort');
        this.contractsFilterCR = page.locator('#contract-name-column-sort');
        this.statusFilterCR = page.locator('#request-status-column-sort');
        this.templateFilterCR = page.locator('#template-name-column-sort');
        this.userFilterCR = page.locator('#user-column-sort');
        this.paytractsFilterCR = page.locator('#paytracts-column-sort');
        this.submittedFilterCR = page.locator('#submitted-column-sort');
        this.reviwedFilterCR = page.locator('#reviewed-column-sort');
        this.reviwerFilterCR = page.locator('#reviewer-column-sort');

        this.reviwerNotesFilterCR = page.locator('#reviewer-notes-column-sort');
        this.rightArrow = page.locator('.right-arrow');
        this.leftArrow = page.locator('.left-arrow');
        this.linkedIcon = page.locator('.contract-reference-links');
        this.linkedIconPopupXButton = page.locator('.close-ic'); //to be refactored
        this.linkedIconPopupDoneButton = page.locator('.mat-button >> text=DONE'); //to be refactored
        this.copyLinkButton = page.locator('.contracts-name-column-copy-link >> nth=0');

        this.copyLinkPopupCopyLinkButtonPermanent = page.locator('#copy-link-permanent-copy-link');
        this.copyLinkPopupCopyLinkButtonExpiry = page.locator('#copy-link-permanent-copy-link');

        this.copyLinkPopupCancelButton = page.locator('#copy-link-cancel');
        this.copyLinkPopupXButton = page.locator('#copy-link-cancel-cross');
        this.copyLinkPopupPermanentRadioButton = page.locator('.mat-radio-label-content >> text=Permanent Link');
        this.copyLinkPopupExpiringRadioButton = page.locator('.mat-radio-label-content >> text=Expiring Link');
        this.copyLinkPopupDataPickerButton = page.locator('.mat-datepicker-toggle');
        this.copyLinkPopupGetLinkButton = page.locator('.expiring-date-btn');
        this.copyLinkPopupExpirtaionDateField = page.locator('#expiringLink input');
        this.CopyContractLinkPopupContractWithModelDoNotShowCheckbox = page.locator('.mat-checkbox');
        this.CopyContractLinkPopupContractWithModelCreateButton = page.locator('.btn >> text=Create');
        this.CopyContractLinkPopupContractWithModelCancelButton = page.locator('.btn >> text=Cancel');

        this.createDealForContractPopupDoNotShowCheckbox = page.locator('#confirm-create-deal-do-not-show-again');
        this.createDealForContractPopupCreateButton = page.locator('#confirm-create-deal-create');
        this.createDealForContractPopupCancelButton = page.locator('#confirm-create-deal-cancel');


        this.updateSubscriptionPopupUpdateSubscriptionButton = page.locator('#not-available-popup-update-subscription');
        this.updateSubscriptionPopupCloseButton = page.locator('#not-available-popup-close');
        this.contactYourAAPopupCloseButton = page.locator('#not-available-popup-close');
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

    async filteredByTemplateClick() {
        await this.filteredByTemplate.click();
        await this.page.waitForTimeout(500);
    }

    async contractsTabClick() {
        await this.contractsTab.click();
        await this.page.waitForTimeout(1000);
    }

    async contractRequestsTabClick() {
        await this.contractRequestsTab.click();
        await this.page.waitForTimeout(1000);
    }

    async contractNameFilterClick() {
        await this.contractNameFilter.click();
        await this.page.waitForTimeout(500);
    }

    async visibilityFilterClick() {
        await this.visibilityFilter.click();
        await this.page.waitForTimeout(500);
    }

    async statusFilterClick() {
        await this.statusFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async templateNameFilterClick() {
        await this.templateNameFilter.click();
        await this.page.waitForTimeout(500);
    }

    async payTractsFilterClick() {
        await this.payTractsFilter.click();
        await this.page.waitForTimeout(500);
    }

    async userFilterClick() {
        await this.userFilter.click();
        await this.page.waitForTimeout(500);
    }

    async scoreFilterClick() {
        await this.scoreFilter.click();
        await this.page.waitForTimeout(500);
    }

    async createdFilterClick() {
        await this.createdFilter.click();
        await this.page.waitForTimeout(500);
    }

    async signaturesFilterClick() {
        await this.signaturesFilter.click();
        await this.page.waitForTimeout(500);
    }

    async lastSignedFilterClick() {
        await this.lastSignedFilter.click();
        await this.page.waitForTimeout(500);
    }

    async contractsFilterCRClick() {
        await this.contractsFilterCR.click();
        await this.page.waitForTimeout(500);
    }

    async statusFilterCRClick() {
        await this.statusFilterCR.click();
        await this.page.waitForTimeout(500);
    }

    async templateFilterCRClick() {
        await this.templateFilterCR.click();
        await this.page.waitForTimeout(500);
    }

    async userFilterCRClick() {
        await this.userFilterCR.click();
        await this.page.waitForTimeout(500);
    }

    async paytractsFilterCRClick() {
        await this.paytractsFilterCR.click();
        await this.page.waitForTimeout(500);
    }

    async submittedFilterCRClick() {
        await this.submittedFilterCR.click();
        await this.page.waitForTimeout(500);
    }

    async reviwedFilterCRClick() {
        await this.reviwedFilterCR.click();
        await this.page.waitForTimeout(500);
    }

    async reviwerFilterCRClick() {
        await this.reviwerFilterCR.click();
        await this.page.waitForTimeout(500);
    }

    async reviwerNotesFilterCRClick() {
        await this.reviwerNotesFilterCR.click();
        await this.page.waitForTimeout(500);
    }

    async rightArrowClick() {
        await this.rightArrow.click();
        await this.page.waitForTimeout(500);
    }

    async leftArrowClick() {
        await this.leftArrow.click();
        await this.page.waitForTimeout(500);
    }

    async linkedIconClick() {
        await this.linkedIcon.click();
        await this.page.waitForSelector('.mat-dialog-container');
    }

    async linkedIconPopupXButtonClick() {
        await this.linkedIconPopupXButton.click();
        await this.page.waitForSelector('#contracts-list-contracts-link-button');
    }

    async linkedIconPopupDoneButtonClick() {
        await this.linkedIconPopupDoneButton.click();
        await this.page.waitForSelector('#contracts-list-contracts-link-button');
    }

    async copyLinkButtonClickAAAU() {
        await this.copyLinkButton.click();
        await this.page.waitForSelector('.mat-dialog-container');
    }

    async copyLinkButtonClickSA() {
        await this.copyLinkButton.click();
    }

    async copyLinkPopupCopyLinkButtonPermanentClick() {
        await this.copyLinkPopupCopyLinkButtonPermanent.click();
    }

    async copyLinkPopupCopyLinkButtonExpiryClick() {
        await this.copyLinkPopupCopyLinkButtonExpiry.click();
    }

    async copyLinkPopupCancelButtonClick() {
        await this.copyLinkPopupCancelButton.click();
        await this.page.waitForTimeout(1500);
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
        await this.page.waitForTimeout(1000);
    }

    async copyLinkPopupExpirtaionDateFieldPastValueFill() {
        await this.copyLinkPopupExpirtaionDateField.fill('08/08/2010');
    }

    async copyLinkPopupExpirtaionDateFieldPositiveValueFill() {
        await this.copyLinkPopupExpirtaionDateField.fill('08/08/2033');
    }

    async copyContractLinkPopupContractWithModelDoNotShowCheckboxClick() {
        await this.CopyContractLinkPopupContractWithModelDoNotShowCheckbox.click();
        await this.page.waitForTimeout(2000);
    }

    async copyContractLinkPopupContractWithModelCreateButtonClick() {
        await this.CopyContractLinkPopupContractWithModelCreateButton.click();
        await this.page.waitForTimeout(1500);
    }

    async copyContractLinkPopupContractWithModelCancelButtonClick() {
        await this.CopyContractLinkPopupContractWithModelCancelButton.click();
        await this.page.waitForTimeout(1500);
    }

    async skipCreateDealForContractPopup() {
        if (await this.createDealForContractPopupDoNotShowCheckbox.isVisible()) 
        {
            await this.createDealForContractPopupDoNotShowCheckbox.click();
            await this.createDealForContractPopupCancelButton.click();
        }
    }

    async updateSubscriptionPopupUpdateSubscriptionButtonClick() {
        await this.updateSubscriptionPopupUpdateSubscriptionButton.click();
        await this.page.waitForTimeout(1000);
    }

    async updateSubscriptionPopupCloseButtonClick() {
        await this.updateSubscriptionPopupCloseButton.click();
    }

    async contactYourAAPopupCloseButtonClick() {
        await this.contactYourAAPopupCloseButton.click();
    }

    async threeDotsMenuButtonClick() {
        await this.threeDotsMenuButton.click();
        await this.page.waitForSelector('.action-list');
    }

    async threeDotsMenuEditButtonClick() {
        await this.threeDotsMenuButton.click();
        await this.page.waitForTimeout(200);
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
        await this.page.waitForTimeout(500);
        await this.threeDotsMenuDeleteButton.click();
        await this.page.waitForTimeout(500);
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
        await this.page.waitForTimeout(1500);
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