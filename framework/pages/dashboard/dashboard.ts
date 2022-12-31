import { Locator, Page } from '@playwright/test';


class DashboardPage {
    test: any;
    page: Page;
    expect: any;
    createContractButton: Locator;
    createDealButton: Locator;
    createDealPopupChooseContractButton: Locator;
    createDealPopupNewDealButton: Locator;
    createDealPopupCancelButton: Locator;
    manageUsersButton: Locator;
    manageAccountButton: Locator;
    manageAccountsSAButton: Locator;
    showMoreDealLink: Locator;
    showMoreSignedContractsLink: Locator;
    showMoreExpiringLinksLink: Locator;
    showMoreActionReportLink: Locator;
    learnMoreContractRxHealthScoreLink: Locator;
    dealHelthScorePageBackButton: Locator;
    dealHelthScorePageExportButton: Locator;
    actionReportPageBackButton: Locator;
    actionReportPageExportButton: Locator;
    expiringLinksReportPageExportButton: Locator;
    tableToggle: Locator;
    diagramToggle: Locator;
    activeToggle: Locator;
    inactiveToggle: Locator;
    durationDropDown: Locator;
    durationDropDownThisYear: Locator;
    durationDropDownThisMonth: Locator;
    durationDropDownThreeMonths: Locator;
    durationDropDownThisQuarter: Locator;
    durationDropDownCustom: Locator;
    setCustomPeriodDropDownXButton: Locator;
    setCustomPeriodDropDownCancelButton: Locator;
    setCustomPeriodDropDownApplyButton: Locator;
    setCustomPeriodDropDownStartDate: Locator;
    setCustomPeriodDropDownEndDate: Locator;
    setCustomPeriodDropDownCalendarPreviousButton: Locator;
    customFilter: Locator;
    expiringLinksReportPage3dotsSendRemiderButton: Locator;
    expiringLinksReportPageThreeDotsMenuButton: Locator;
    expiringLinksReportPageSendReminderXButton: Locator;
    expiringLinksReportPageSendRemindeSendToField: Locator;
    expiringLinksReportPageSendRemindeCCField: Locator;
    expiringLinksReportPageSendRemindeTextArea: Locator;
    expiringLinksReportPageSendReminderSendButton: Locator;
    inboundContracts: Locator;
    outboundContracts: Locator;


    constructor(page: Page) {
        this.page = page;
        this.createContractButton = page.locator('#dashboard-create-contract');
        this.createDealButton = page.locator('#dashboard-create-deal');
        this.createDealPopupChooseContractButton = page.locator('#confirm-create-deal-choose-a-contract');
        this.createDealPopupNewDealButton = page.locator('#confirm-create-deal-new-deal');
        this.createDealPopupCancelButton = page.locator('#confirm-create-deal-cancel');
        this.manageUsersButton = page.locator('#dashboard-manage-users');
        this.manageAccountButton = page.locator('#dashboard-manage-account');
        this.manageAccountsSAButton = page.locator('#dashboard-manage-accounts');
        this.showMoreDealLink = page.locator('#dashboard-deal-show-more');
        this.showMoreSignedContractsLink = page.locator('#dashboard-recently-signed-contracts-show-more');
        this.showMoreExpiringLinksLink = page.locator('#dashboard-expiring-links-show-more');
        this.showMoreActionReportLink = page.locator('#dashboard-action-report-show-more');
        this.learnMoreContractRxHealthScoreLink = page.locator('#dashboard-health-score-learn-more');
        this.dealHelthScorePageBackButton = page.locator('#dashboard-deal-health-score-back');
        this.dealHelthScorePageExportButton = page.locator('#dashboard-deal-health-score-export');
        this.actionReportPageBackButton = page.locator('#dashboard-action-report-back');
        this.actionReportPageExportButton = page.locator('#dashboard-action-report-export');
        this.expiringLinksReportPageExportButton = page.locator('#deals-list-export');
        this.tableToggle = page.locator('#dashboard-deal-health-score-show-table');
        this.diagramToggle = page.locator('#dashboard-deal-health-score-show-diagram');
        this.activeToggle = page.locator('#contracts-list-contracts-link');
        this.inactiveToggle = page.locator('#contracts-list-contract-requests-link');
        this.durationDropDown = page.locator('#dashboard-deal-health-score-filter');
        this.durationDropDownThisYear = page.locator('.mat-option >> text= this year ');
        this.durationDropDownThisMonth = page.locator('.mat-option >> text= this month ');
        this.durationDropDownThreeMonths = page.locator('.mat-option >> text= three months ');
        this.durationDropDownThisQuarter = page.locator('.mat-option >> text= this quarter ');
        this.durationDropDownCustom = page.locator('.mat-option >> text= custom ');
        this.setCustomPeriodDropDownXButton = page.locator('#dashboard-deal-health-score-filter-modal-cross');
        this.setCustomPeriodDropDownCancelButton = page.locator('#dashboard-deal-health-score-filter-modal-cancel');
        this.setCustomPeriodDropDownApplyButton = page.locator('#dashboard-deal-health-score-filter-modal-apply');
        this.setCustomPeriodDropDownStartDate = page.locator('#dashboard-deal-health-score-filter-modal-filter-from');
        this.setCustomPeriodDropDownEndDate = page.locator('#dashboard-deal-health-score-filter-modal-filter-to');
        this.setCustomPeriodDropDownCalendarPreviousButton = page.locator('.mat-calendar-previous-button');
        this.customFilter = page.locator('#expiring-links-report-filter-change-selection');
        this.expiringLinksReportPageThreeDotsMenuButton = page.locator('.mat-icon-button >> nth=0');
        this.expiringLinksReportPage3dotsSendRemiderButton = page.locator('.context-menu-send-reminder');
        this.expiringLinksReportPageSendReminderXButton = page.locator('#connect-repository-cross');
        this.expiringLinksReportPageSendRemindeSendToField = page.locator('#send-reminder-to');
        this.expiringLinksReportPageSendRemindeCCField = page.locator('#send-reminder-cc');
        this.expiringLinksReportPageSendRemindeTextArea = page.locator('#cke_86_contents');
        this.expiringLinksReportPageSendReminderSendButton = page.locator('#send-reminder-send');
        this.inboundContracts = page.locator('#signed-users-list-inbound-contracts-button');
        this.outboundContracts = page.locator('#signed-users-list-outbound-contracts');
    }

    async createContractButtonClick() {
        await this.createContractButton.click();
        await this.page.waitForSelector('#templates-list-add-template');
    }

    async createDealButtonClick() {
        await this.createDealButton.click();
        await this.page.waitForSelector('app-confirm-create-deal-for-contract');
    }

    async createDealPopupChooseContractButtonClick() {
        await this.createDealPopupChooseContractButton.click();
        await this.page.waitForSelector('#choose-contract-next');
    }

    async createDealPopupNewDealButtonClick() {
        await this.createDealPopupNewDealButton.click();
        await this.page.waitForSelector('#deal-details-save');
    }

    async createDealPopupCancelButtonClick() {
        await this.createDealPopupCancelButton.click();
        await this.page.locator('app-confirm-create-deal-for-contract').isHidden();
    }

    async manageUsersButtonClick() {
        await this.manageUsersButton.click();
        await this.page.waitForSelector('#users-list-add-user');
    }

    async manageAccountButtonClick() {
        await this.manageAccountButton.click();
        await this.page.waitForSelector('#client-view-edit');
    }

    async manageAccountsSAButtonClick() {
        await this.manageAccountsSAButton.click();
        await this.page.waitForSelector('#clients-list-add-client');
    }

    async showMoreDealLinkClick() {
        await this.showMoreDealLink.click();
        await this.page.waitForSelector('#dashboard-deal-health-score-show-diagram-button');
    }

    async showMoreSignedContractsLinkClick() {
        await this.showMoreSignedContractsLink.click();
        await this.page.waitForSelector('#signed-users-list-outbound-contracts-button');
    }

    async showMoreActionReportLinkClick() {
        await this.showMoreActionReportLink.click();
        await this.page.waitForSelector('#contracts-list-contract-requests-link-button');
    }

    async showMoreExpiringLinksLinkClick() {
        await this.showMoreExpiringLinksLink.click();
        await this.page.waitForSelector('#dashboard-action-report-export');
    }

    async learnMoreContractRxHealthScoreLinkFocus() {
        await this.learnMoreContractRxHealthScoreLink.focus();
    }

    async dealHelthScorePageBackButtonClick() {
        await this.dealHelthScorePageBackButton.click();
        await this.page.waitForSelector('#dashboard-create-deal');
    }

    async dealHelthScorePageExportButtonClick() {
        await this.dealHelthScorePageExportButton.click();
        await this.page.waitForTimeout(1000);
    }

    async actionReportPageBackButtonClick() {
        await this.actionReportPageBackButton.click();
        await this.page.waitForSelector('#dashboard-create-deal');
    }

    async actionReportPageExportButtonClick() {
        await this.actionReportPageExportButton.click();
        await this.page.waitForTimeout(1000);
    }

    async expiringLinksReportPageExportButtonClick() {
        await this.expiringLinksReportPageExportButton.click();
        await this.page.waitForSelector('#dashboard-create-deal');
    }

    async tableToggleClick() {
        await this.tableToggle.click();
        await this.page.waitForTimeout(1000);
    }

    async diagramToggleClick() {
        await this.diagramToggle.click();
        await this.page.waitForTimeout(1000);
    }

    async activeToggleClick() {
        await this.activeToggle.click();
        await this.page.waitForTimeout(1000);
    }

    async inactiveToggleClick() {
        await this.inactiveToggle.click();
        await this.page.waitForTimeout(1000);
    }

    async durationDropDownClick() {
        await this.durationDropDown.click();
        await this.page.waitForTimeout(500);
    }

    async durationDropDownThisYearClick() {
        await this.durationDropDownThisYear.click();
        await this.page.waitForTimeout(2000);
    }

    async durationDropDownThisMonthCkick() {
        await this.durationDropDownThisMonth.click();
        await this.page.waitForTimeout(2000);
    }

    async durationDropDownThreeMonthsClick() {
        await this.durationDropDownThreeMonths.click();
        await this.page.waitForTimeout(2000);
    }

    async durationDropDownThisQuarterClick() {
        await this.durationDropDownThisQuarter.click();
        await this.page.waitForTimeout(2000);
    }

    async durationDropDownCustomClick() {
        await this.durationDropDownCustom.click();
        await this.page.waitForTimeout(500);
    }

    async setCustomPeriodDropDownXButtonClick() {
        await this.setCustomPeriodDropDownXButton.click();
        await this.page.waitForTimeout(500);
    }

    async setCustomPeriodDropDownCancelButtonClick() {
        await this.setCustomPeriodDropDownCancelButton.click();
        await this.page.waitForTimeout(500);
    }

    async setCustomPeriodDropDownApplyButtonClick() {
        await this.setCustomPeriodDropDownApplyButton.click();
        await this.page.waitForTimeout(2000);
    }

    async setCustomPeriodDropDownStartDateClick() {
        await this.setCustomPeriodDropDownStartDate.click();
        await this.page.waitForTimeout(500);
    }

    async customFilterClick() {
        await this.customFilter.click();
        await this.page.waitForTimeout(500);
    }

    async setCustomPeriodDropDownEndDateClick() {
        await this.setCustomPeriodDropDownEndDate.click();
        await this.page.waitForTimeout(500);
    }

    async setCustomPeriodDropDownCalendarPreviousButtonLastYear() {
        await this.setCustomPeriodDropDownCalendarPreviousButton.click();
        await this.setCustomPeriodDropDownCalendarPreviousButton.click();
        await this.setCustomPeriodDropDownCalendarPreviousButton.click();
        await this.setCustomPeriodDropDownCalendarPreviousButton.click();
        await this.setCustomPeriodDropDownCalendarPreviousButton.click();
        await this.setCustomPeriodDropDownCalendarPreviousButton.click();
        await this.setCustomPeriodDropDownCalendarPreviousButton.click();
    }

    async setCustomPeriodDropDownCalendarPreviousButtonLastYear1() {
        await this.setCustomPeriodDropDownCalendarPreviousButton.click();
    }

    async expiringLinksReportPage3dotsSendRemiderButtonClick() {
        await this.expiringLinksReportPageThreeDotsMenuButton.click();
        await this.expiringLinksReportPage3dotsSendRemiderButton.click();
        await this.page.waitForTimeout(500);
    }

    async expiringLinksReportPageSendReminderXButtonClick() {
        await this.expiringLinksReportPageSendReminderXButton.click();
        await this.page.waitForTimeout(1000);
    }

    async expiringLinksReportPageSendReminderSendButtonClick() {
        await this.expiringLinksReportPageSendReminderSendButton.click();
        await this.page.waitForTimeout(2000);
    }

    async inboundContractsClick() {
        await this.inboundContracts.click();
        await this.page.waitForTimeout(2000);
    }

    async outboundContractsClick() {
        await this.outboundContracts.click();
        await this.page.waitForTimeout(2000);
    }
}


export {
    DashboardPage
}