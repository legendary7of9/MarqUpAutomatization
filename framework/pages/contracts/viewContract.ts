import { Locator, Page } from '@playwright/test';


class ViewContract {
    test: any;
    page: Page;
    expect: any;
    backToDraftButton: Locator;
    backToDraftPopupProceedButton: Locator;
    backToDraftPopupCancelButton: Locator;
    copyLinkButton: Locator;
    copyLinkPopupXButton: Locator;
    copyLinkPopupPermanentCheckboxButton: Locator;
    copyLinkPopupExpiringCheckboxButton: Locator;
    copyLinkPopupExpiringDateField: Locator;
    copyLinkPopupExpiringDateDataPickerButton: Locator;
    copyLinkPopupExpiringDateDataPickerValueButton: Locator;
    copyLinkPopupExpiringDateGetLink: Locator;
    copyLinkPopupCancelButton: Locator;
    copyLinkPopupCopyLinkButton: Locator;
    exportButton: Locator;
    editButton: Locator;
    approveButton: Locator;
    rejectButton: Locator;
    rejectPopupXButton: Locator;
    rejectPopupNotesField: Locator;
    rejectPopupRejectButton: Locator;
    rejectPopupCancelButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.backToDraftButton = page.locator('#contract-view-backtodraft');
        this.backToDraftPopupProceedButton = page.locator('#modal-backtodraft-proceed');
        this.backToDraftPopupCancelButton = page.locator('#modal-backtodraft-cancel');
        this.copyLinkButton = page.locator('#contract-view-copy-link');

        this.copyLinkPopupXButton = page.locator('#copy-link-cancel-cross');
        this.copyLinkPopupPermanentCheckboxButton = page.locator('.mat-radio-label-content >> text=Permanent Link');
        this.copyLinkPopupExpiringCheckboxButton = page.locator('.mat-radio-label-content >> text=Expiring Link');
        this.copyLinkPopupExpiringDateField = page.locator('#expiringLink .mat-input-element');
        this.copyLinkPopupExpiringDateDataPickerButton = page.locator('.mat-datepicker-toggle');
        this.copyLinkPopupExpiringDateDataPickerValueButton = page.locator('.mat-calendar-body-cell-content >> text=24');
        this.copyLinkPopupExpiringDateGetLink = page.locator('.expiring-date-btn');
        this.copyLinkPopupCancelButton = page.locator('#copy-link-cancel');
        this.copyLinkPopupCopyLinkButton = page.locator('#copy-link-copy-link');

        this.exportButton = page.locator('#contract-view-export');
        this.editButton = page.locator('#contract-view-edit');
        this.approveButton = page.locator('#contract-view-approve');
        this.rejectButton = page.locator('#contract-view-reject');
        this.rejectPopupXButton = page.locator('#modal-reject-cancel-cross');
        this.rejectPopupNotesField = page.locator('[name="notesRejectingContract"]');
        this.rejectPopupRejectButton = page.locator('#modal-reject-reject');
        this.rejectPopupCancelButton = page.locator('#modal-reject-cancel');
    }

    async backToDraftButtonClick() {
        await this.backToDraftButton.click();
        await this.page.waitForSelector('#contract-detail-save');
    }

    async backToDraftButtonClickProccedPopup() {
        await this.backToDraftButton.click();
        await this.page.waitForSelector('.mat-dialog-container');
    }

    async backToDraftPopupProceedButtonClick() {
        await this.backToDraftPopupProceedButton.click();
        await this.page.waitForSelector('#contract-detail-save');
    }

    async backToDraftPopupCancelButtonClick() {
        await this.backToDraftPopupCancelButton.click();
        await this.page.waitForSelector('#contract-view-backtodraft');
    }

    async copyLinkButtonClick() {
        await this.copyLinkButton.click();
        await this.page.waitForSelector('.mat-dialog-container');
    }

    async copyLinkButtonClickSA() {
        await this.copyLinkButton.click();
    }

    async copyLinkPopupXButtonClick() {
        await this.copyLinkPopupXButton.click();
        await this.page.locator('.mat-dialog-container').isHidden();
    }

    async copyLinkPopupPermanentCheckboxButtonClick() {
        await this.copyLinkPopupPermanentCheckboxButton.click();
        await this.page.waitForSelector('#permanentContractLink');
    }

    async copyLinkPopupExpiringCheckboxButtonClick() {
        await this.copyLinkPopupExpiringCheckboxButton.click();
        await this.page.waitForSelector('#expiringLink');
    }

    async copyLinkPopupExpiringDateFieldFill() {
        await this.copyLinkPopupExpiringDateField.fill('09/24/2027');
    }

    async copyLinkPopupExpiringDateDataPickerChooseValue() {
        await this.copyLinkPopupExpiringDateDataPickerButton.click();
        await this.page.waitForSelector('.mat-calendar');
        await this.copyLinkPopupExpiringDateDataPickerValueButton.click();
        await this.page.locator('.mat-calendar').isHidden();
    }

    async copyLinkPopupExpiringDateGetLinkClick() {
        await this.copyLinkPopupExpiringCheckboxButton.click();
        await this.page.waitForSelector('[placeholder="Expiring Contract Link"]');
    }

    async copyLinkPopupCancelButtonClick() {
        await this.copyLinkPopupCancelButton.click();
        await this.page.locator('.mat-dialog-container').isHidden();
    }

    async copyLinkPopupCopyLinkButtonClick() {
        await this.copyLinkPopupCopyLinkButton.click();
        await this.page.locator('.mat-dialog-container').isHidden();
    }

    async exportButtonClick() {
        await this.exportButton.click();
        await this.page.waitForEvent('download');
    }

    async editButtonClick() {
        await this.editButton.click();
        await this.page.waitForSelector('#contract-detail-save');
    }

    async approveButtonClick() {
        await this.approveButton.click();
        await this.page.waitForSelector('#contract-view-copy-link');
    }

    async rejectButtonClick() {
        await this.rejectButton.click();
        await this.page.waitForSelector('.mat-dialog-container');
    }

    async rejectPopupXButtonClick() {
        await this.rejectPopupXButton.click();
        await this.page.waitForSelector('#contract-view-reject');
    }

    async rejectPopupNotesFieldFill() {
        await this.rejectPopupNotesField.fill('test100testAutotest');
    }

    async rejectPopupRejectButtonClick() {
        await this.rejectPopupRejectButton.click();
        await this.page.waitForURL('/contracts/requests?&sort=-created_at');
    }

    async rejectPopupCancelButtonClick() {
        await this.rejectPopupCancelButton.click();
        await this.page.waitForSelector('#contract-view-reject');
    }
}


export {
    ViewContract
}