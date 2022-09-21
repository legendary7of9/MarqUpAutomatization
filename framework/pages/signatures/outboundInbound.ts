import { Locator, Page } from '@playwright/test';


class OutboundInboundPage {
    test: any;
    page: Page;
    expect: any;
    outboundToggle: Locator;
    inboundToggle: Locator;
    contractsTimelineButton: Locator;
    dateAndTimeFilter: Locator;
    companyFilter: Locator;
    contractCreatorFilter: Locator;
    clientFilter: Locator;
    paymentFilter: Locator;
    contractFilter: Locator;
    descriptionFilter: Locator;
    signatoryFilter: Locator;
    emailFilter: Locator;
    threeDotsMenuButton: Locator;
    threeDotsMenuResendPaymentLinkButton: Locator;
    threeDotsMenuManualPaymentButton: Locator;
    threeDotsMenuManualPaymentPopupConfirmCheckbox: Locator;
    threeDotsMenuManualPaymentPopupCancelButton: Locator;
    threeDotsMenuManualPaymentPopupContractPaidButton: Locator;
    threeDotsMenuPayContractFeeButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.outboundToggle = page.locator('#signed-users-list-outbound-contracts-button');
        this.inboundToggle = page.locator('#signed-users-list-inbound-contracts-button');
        this.contractsTimelineButton = page.locator('#signature-list-contracts-timeline');
        this.dateAndTimeFilter = page.locator('#datetime-column-sort');
        this.companyFilter = page.locator('#company-column-sort');
        this.contractCreatorFilter = page.locator('#contract-creator-column-sort');
        this.clientFilter = page.locator('#client-column-sort');
        this.paymentFilter = page.locator('#payment-column-sort');
        this.contractFilter = page.locator('#contract-column-sort');
        this.descriptionFilter = page.locator('#description-column-sort');
        this.signatoryFilter = page.locator('#signature-column-sort');
        this.emailFilter = page.locator('#email-column-sort');
        this.threeDotsMenuButton = page.locator('.mat-icon-button >> nth=0');
        this.threeDotsMenuResendPaymentLinkButton = page.locator('.context-menu-resend-payment-link');
        this.threeDotsMenuManualPaymentButton = page.locator('.context-menu-manual-payment');
        this.threeDotsMenuManualPaymentPopupConfirmCheckbox = page.locator('[for="manual-payment-confirm-input"]');
        this.threeDotsMenuManualPaymentPopupCancelButton = page.locator('#manual-payment-cancel');
        this.threeDotsMenuManualPaymentPopupContractPaidButton = page.locator('#manual-payment-contract-paid');
        this.threeDotsMenuPayContractFeeButton = page.locator('.context-menu-pay-contract-fee');
    }

    async outboundToggleClick() {
        await this.outboundToggle.click();
        await this.page.waitForSelector('#payment-column-sort');
    }

    async inboundToggleClick() {
        await this.inboundToggle.click();
        await this.page.waitForSelector('#payment-column-sort');
    }

    async contractsTimelineButtonClick() {
        await this.contractsTimelineButton.click();
        await this.page.waitForSelector('.filter');
    }

    async dateAndTimeFilterClick() {
        await this.dateAndTimeFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async companyFilterClick() {
        await this.companyFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async contractCreatorFilterClick() {
        await this.contractCreatorFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async clientFilterClick() {
        await this.clientFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async paymentFilterClick() {
        await this.paymentFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async contractFilterClick() {
        await this.contractFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async descriptionFilterClick() {
        await this.descriptionFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async signatoryFilterClick() {
        await this.signatoryFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async emailFilterClick() {
        await this.emailFilter.click();
        await this.page.waitForTimeout(1000);
    }

    async threeDotsMenuButtonClick() {
        await this.threeDotsMenuButton.click();
        await this.page.waitForSelector('.action-list');
    }

    async threeDotsMenuResendPaymentLinkButtonClick() {
        await this.threeDotsMenuButton.click();
        await this.page.waitForSelector('.action-list');
        await Promise.all([
            this.page.waitForRequest('https://marqup.test.noredlines.com:8080/v1/hostedTerms/sign/1159/resend-payment-link'),
            this.page.waitForRequest('true'),
            await this.threeDotsMenuResendPaymentLinkButton.click(),
        ]);
    }

    async threeDotsMenuManualPaymentButtonClick() {
        await this.threeDotsMenuButton.click();
        await this.page.waitForSelector('.action-list');
        await this.threeDotsMenuManualPaymentButton.click();
        await this.page.waitForSelector('.mat-dialog-container');
    }

    async threeDotsMenuManualPaymentPopupConfirmCheckboxClick() {
        await this.threeDotsMenuManualPaymentPopupConfirmCheckbox.click();
        await this.page.waitForTimeout(500);
    }

    async threeDotsMenuManualPaymentPopupCancelButtonClick() {
        await this.threeDotsMenuManualPaymentPopupCancelButton.click();
        await this.page.waitForTimeout(2000);
        await this.page.locator('.mat-dialog-container').isHidden();
    }

    async threeDotsMenuManualPaymentPopupContractPaidButtonClick() {
        await this.threeDotsMenuManualPaymentPopupContractPaidButton.click();
        await this.page.waitForTimeout(2000);
        await this.page.locator('.mat-dialog-container').isHidden();
    }

    async threeDotsMenuPayContractFeeButtonClick() {
        await this.threeDotsMenuButton.click();
        await this.page.waitForSelector('.action-list');
        await this.threeDotsMenuPayContractFeeButton.click();
    }

    async threeDotsMenuClose() {
        await this.page.locator('.cdk-overlay-backdrop').click();
        await this.page.locator('.action-list').isHidden();
    }
}


export {
    OutboundInboundPage
}