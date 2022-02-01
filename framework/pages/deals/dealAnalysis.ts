import { Locator, Page } from '@playwright/test';


class DealAnalysisPage {
    test: any;
    page: Page;
    expect: any;
    editDealPancil: Locator;
    summaryButton: Locator;
    exportButton: Locator;
    linkedDealLink: Locator;
    clearAllButton1stDraft: Locator;
    clearAllButtonFinalDraft: Locator;
    clearAllPopupCancel: Locator;
    clearAllPopupClear: Locator;
    firstDraftDropDown1: Locator;
    firstDraftDropDown2: Locator;
    firstDraftDropDown3: Locator;
    firstDraftDropDownValue0: Locator;
    firstDraftDropDownValue1: Locator;
    firstDraftDropDownValue2: Locator;
    firstDraftDropDownValue3: Locator;
    firstDraftDropDownValue4: Locator;
    firstDraftDropDownValue5: Locator;
    finalDraftDropDown1: Locator;
    finalDraftDropDown2: Locator;
    finalDraftDropDown3: Locator;
    finalDraftDropDownValue0: Locator;
    finalDraftDropDownValue1: Locator;
    finalDraftDropDownValue2: Locator;
    finalDraftDropDownValue3: Locator;
    finalDraftDropDownValue4: Locator;
    finalDraftDropDownValue5: Locator;
    noteField: Locator;
    viewLink: Locator;
    viewLinkPopupEditFieldButton: Locator;
    viewLinkPopupCopyFieldButton: Locator;
    viewLinkPopupSaveFieldButton: Locator;
    viewLinkPopupField: Locator;
    viewLinkPopupCloseButton: Locator;
    firstDraftFinishButton: Locator;
    finalDraftFinishButton: Locator;
    firstDraftReopenButton: Locator;
    finalDraftReopenButton: Locator;
    draftLinkField: Locator;
    draftLinkFieldOkIcon: Locator;
    draftLinkFieldCancelIcon: Locator;
    draftLink: Locator;
    draftLinkFieldEdit: Locator;
    draftLinkFieldCopy: Locator;
    finalLinkField: Locator;
    finalLinkFieldOkIcon: Locator;
    finalLinkFieldCancelIcon: Locator;
    finalLink: Locator;
    finalLinkFieldEdit: Locator;
    finalLinkFieldCopy: Locator;
    signatureField: Locator;
    signatureCalendarIcon: Locator;
    signatureOkIcon: Locator;
    signatureCancelIcon: Locator;
    signatureEditIcon: Locator;
    effectiveField: Locator;
    effectiveCalendarIcon: Locator;
    effectiveOkIcon: Locator;
    effectiveCancelIcon: Locator;
    effectiveEditIcon: Locator;
    preliminaryCheckbox: Locator;
    expirationField: Locator;
    expirationCalendarIcon: Locator;
    expirationOkIcon: Locator;
    expirationCancelIcon: Locator;
    expirationEditIcon: Locator;
    showHidePreviousScoreButton: Locator;
    datapickerPeriodButton: Locator;
    datapickerPeriod2022Value: Locator;
    datapickerPeriodJanValue: Locator;
    datapickerPreviousButton: Locator;
    datapickerNextButton: Locator;
    datapickerValue21: Locator;
    datapickerValue15: Locator;
    datapickerValue28: Locator;
    datapickerValue12: Locator;


    constructor(page: Page) {
        this.page = page;
        this.editDealPancil = page.locator('#deal-analysis-edit-deal');
        this.summaryButton = page.locator('#deal-analysis-summary');
        this.exportButton = page.locator('#deal-analysis-export');
        this.linkedDealLink = page.locator('#deal-analysis-linked-deal');
        this.clearAllButton1stDraft = page.locator('#deal-analysis-first-draft-clear-all');
        this.clearAllButtonFinalDraft = page.locator('#deal-analysis-final-draft-clear-all');
        this.clearAllPopupCancel = page.locator('#clear-deals-cancel');
        this.clearAllPopupClear = page.locator('#clear-deals-clear');
        this.firstDraftDropDown1 = page.locator('.mat-column-first_draft >> nth=1');
        this.firstDraftDropDown2 = page.locator('.mat-column-first_draft >> nth=2');
        this.firstDraftDropDown3 = page.locator('.mat-column-first_draft >> nth=3');
        this.firstDraftDropDownValue0 = page.locator('.mat-option >> text=test5');
        this.firstDraftDropDownValue1 = page.locator('.mat-option >> text=test2test2');
        this.firstDraftDropDownValue2 = page.locator('.mat-option >> text=test3test3test3');
        this.firstDraftDropDownValue3 = page.locator('.mat-option >> text=test5');
        this.firstDraftDropDownValue4 = page.locator('.mat-option >> text=test3test3');
        this.firstDraftDropDownValue5 = page.locator('.mat-option >> text=test6test6test6');
        this.finalDraftDropDown1 = page.locator('.mat-column-final_draft >> nth=1');
        this.finalDraftDropDown2 = page.locator('.mat-column-final_draft >> nth=2');
        this.finalDraftDropDown3 = page.locator('.mat-column-final_draft >> nth=3');
        this.finalDraftDropDownValue0 = page.locator('.mat-option >> text=test3');
        this.finalDraftDropDownValue1 = page.locator('.mat-option >> text=test5test5');
        this.finalDraftDropDownValue2 = page.locator('.mat-option >> text=test2test2test2');
        this.finalDraftDropDownValue3 = page.locator('.mat-option >> text=test5');
        this.finalDraftDropDownValue4 = page.locator('.mat-option >> text=test3test3');
        this.finalDraftDropDownValue5 = page.locator('.mat-option >> text=test6test6test6');
        this.noteField = page.locator('.mat-column-note');
        this.viewLink = page.locator('.deal-analysis-sample-view >> nth=0');
        this.viewLinkPopupEditFieldButton = page.locator('.show-sample-sample-edit >> nth=0');
        this.viewLinkPopupCopyFieldButton = page.locator('.show-sample-sample-copy >> nth=0');
        this.viewLinkPopupSaveFieldButton = page.locator('.show-sample-sample-save >> nth=0');
        this.viewLinkPopupField = page.locator('[formcontrolname="sample"]');
        this.viewLinkPopupCloseButton = page.locator('#show-sample-close');
        this.firstDraftFinishButton = page.locator('#btn-first-draft-finish');
        this.finalDraftFinishButton = page.locator('#btn-final-draft-finish');
        this.firstDraftReopenButton = page.locator('#btn-first-draft-reopen');
        this.finalDraftReopenButton = page.locator('#btn-final-draft-reopen');
        this.draftLinkField = page.locator('[name="draft_link"]');
        this.draftLinkFieldOkIcon = page.locator('#deal-analysis-form_link1-check');
        this.draftLinkFieldCancelIcon = page.locator('#deal-analysis-form_link1-close');
        this.draftLink = page.locator('#deal-analysis-link1');
        this.draftLinkFieldEdit = page.locator('#deal-analysis-link1-edit');
        this.draftLinkFieldCopy = page.locator('#deal-analysis-link1-copy');
        this.finalLinkField = page.locator('[name="final_link"]');
        this.finalLinkFieldOkIcon = page.locator('#deal-analysis-form_link2-check');
        this.finalLinkFieldCancelIcon = page.locator('#deal-analysis-form_link2-close');
        this.finalLink = page.locator('a.ng-star-inserted >> text=Final deal');
        this.finalLinkFieldEdit = page.locator('#deal-analysis-link2-edit');
        this.finalLinkFieldCopy = page.locator('#deal-analysis-link2-copy');
        this.signatureField = page.locator('#deal-analysis-signature-date');
        this.signatureCalendarIcon = page.locator('#deal-analysis-signature-date .mat-datepicker-toggle');
        this.signatureOkIcon = page.locator('#deal-analysis-signature-date-check');
        this.signatureCancelIcon = page.locator('#deal-analysis-signature-date-close');
        this.signatureEditIcon = page.locator('#deal-analysis-signature-date-edit');
        this.effectiveField = page.locator('#deal-analysis-effective-date');
        this.effectiveCalendarIcon = page.locator('#deal-analysis-effective-date .mat-datepicker-toggle');
        this.effectiveOkIcon = page.locator('#deal-analysis-effective-date-check');
        this.effectiveCancelIcon = page.locator('#deal-analysis-effective-date-close');
        this.effectiveEditIcon = page.locator('#deal-analysis-effective-date-edit');
        this.preliminaryCheckbox = page.locator('#deal-analysis-preliminary-date');
        this.expirationField = page.locator('#deal-analysis-expiration-date');
        this.expirationCalendarIcon = page.locator('#deal-analysis-expiration-date .mat-datepicker-toggle');
        this.expirationOkIcon = page.locator('#deal-analysis-expiration-date-check');
        this.expirationCancelIcon = page.locator('#deal-analysis-expiration-date-close');
        this.expirationEditIcon = page.locator('#deal-analysis-expiration-date-edit');
        this.showHidePreviousScoreButton = page.locator('#deal-analysis-show-hide-table-scores');
        this.datapickerPeriodButton = page.locator('.mat-calendar-period-button');
        this.datapickerPeriod2022Value = page.locator('.mat-calendar-body-cell-content >> text=2022');
        this.datapickerPeriodJanValue = page.locator('.mat-calendar-body-cell-content >> text=JAN');
        this.datapickerPreviousButton = page.locator('.mat-calendar-previous-button');
        this.datapickerNextButton = page.locator('.mat-calendar-next-button');
        this.datapickerValue21 = page.locator('.mat-calendar-body-cell-content >> text=21');
        this.datapickerValue15 = page.locator('.mat-calendar-body-cell-content >> text=15');
        this.datapickerValue28 = page.locator('.mat-calendar-body-cell-content >> text=28');
        this.datapickerValue12 = page.locator('.mat-calendar-body-cell-content >> text=12');
    }

    async editDealPancilClick() {
        await this.editDealPancil.click();
    }

    async summaryButtonClick() {
        await this.summaryButton.click();
    }

    async exportButtonClick() {
        await this.exportButton.click();
    }

    async linkedDealLinkClick() {
        await this.linkedDealLink.click();
    }

    async clearAllButton1stDraftClick() {
        await this.clearAllButton1stDraft.click();
    }

    async clearAllButtonFinalDraftClick() {
        await this.clearAllButtonFinalDraft.click();
    }

    async clearAllPopupClearButtonClick() {
        await this.clearAllPopupClear.click();
        await this.page.waitForTimeout(1500);
    }

    async clearAllPopupCancelButtonClick() {
        await this.clearAllPopupCancel.click();
    }

    async firstDraftDropDownChoose() {
        await this.firstDraftDropDown1.click();
        await this.finalDraftDropDownValue0.click();
        await this.page.waitForTimeout(1000);
        await this.firstDraftDropDown2.click();
        await this.finalDraftDropDownValue1.click();
        await this.page.waitForTimeout(1000);
        await this.firstDraftDropDown3.click();
        await this.finalDraftDropDownValue2.click();
    }

    async firstDraftDropDownChoose2() {
        await this.firstDraftDropDown1.click();
        await this.finalDraftDropDownValue3.click();
        await this.page.waitForTimeout(1000);
        await this.firstDraftDropDown2.click();
        await this.finalDraftDropDownValue4.click();
        await this.page.waitForTimeout(1000);
        await this.firstDraftDropDown3.click();
        await this.finalDraftDropDownValue5.click();
    }

    async finalDraftDropDownChoose() {
        await this.finalDraftDropDown1.click();
        await this.finalDraftDropDownValue0.click();
        await this.page.waitForTimeout(1000);
        await this.finalDraftDropDown2.click();
        await this.finalDraftDropDownValue1.click();
        await this.page.waitForTimeout(1000);
        await this.finalDraftDropDown3.click();
        await this.finalDraftDropDownValue2.click();
    }

    async finalDraftDropDownChoose2() {
        await this.finalDraftDropDown1.click();
        await this.finalDraftDropDownValue3.click();
        await this.page.waitForTimeout(1000);
        await this.finalDraftDropDown2.click();
        await this.finalDraftDropDownValue4.click();
        await this.page.waitForTimeout(1000);
        await this.finalDraftDropDown3.click();
        await this.finalDraftDropDownValue5.click();
    }

    async noteFieldFill() {
        await this.noteField.click();
        await this.noteField.fill('test');
    }

    async viewLinkClick() {
        await this.viewLink.click();
    }

    async viewLinkPopupEditFieldButtonClick() {
        await this.viewLinkPopupEditFieldButton.click();
    }

    async viewLinkPopupCopyFieldButtonClick() {
        await this.viewLinkPopupCopyFieldButton.click();
    }

    async viewLinkPopupSaveFieldButtonClick() {
        await this.viewLinkPopupSaveFieldButton.click();
        await this.page.waitForTimeout(1500)
    }

    async viewLinkPopupFieldFill() {
        await this.viewLinkPopupField.fill('');
        await this.viewLinkPopupField.fill('Sample 1 est test test test test test est test test test test test est test test test test test est test test test test test v');
    }

    async viewLinkPopupCloseButtonClick() {
        await this.viewLinkPopupCloseButton.click();
    }

    async firstDraftFinishButtonClick() {
        await this.firstDraftFinishButton.click();
        await this.page.waitForTimeout(1000);
    }

    async finalDraftFinishButtonClick() {
        await this.finalDraftFinishButton.click();
        await this.page.waitForTimeout(1000);
    }

    async firstDraftReopenButtonClick() {
        await this.firstDraftReopenButton.click();
        await this.page.waitForTimeout(1000);
    }

    async finalDraftReopenButtonClick() {
        await this.finalDraftReopenButton.click();
        await this.page.waitForTimeout(1000);
    }

    async draftLinkFieldFill() {
        await this.draftLinkField.click();
        await this.draftLinkField.fill('https://marqup.test.noredlines.com/deals/analysis-deal/8251');
    }

    async draftLinkFieldValidationFill() {
        await this.draftLinkField.click();
        await this.draftLinkField.fill('https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8');
    }

    async draftLinkFieldClear() {
        await this.draftLinkField.click();
        await this.draftLinkField.fill('');
    }

    async draftLinkFieldOkIconClick() {
        await this.draftLinkFieldOkIcon.click();
    }

    async draftLinkFieldCancelIconClick() {
        await this.draftLinkFieldCancelIcon.click();
    }

    async draftLinkClick() {
        await this.draftLink.click();
    }

    async draftLinkClickEditClick() {
        await this.draftLinkFieldEdit.click();
    }

    async draftLinkClickCopyClick() {
        await this.draftLinkFieldCopy.click();
    }

    async finalLinkFieldFill() {
        await this.finalLinkField.click();
        await this.finalLinkField.fill('https://marqup.test.noredlines.com/deals/analysis-deal/8251');
    }

    async finalLinkFieldValidationFill() {
        await this.finalLinkField.click();
        await this.finalLinkField.fill('https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250https://marqup.test.noredlines.com/deals/analysis-deal/8250');
    }

    async finalLinkFieldClear() {
        await this.finalLinkField.click();
        await this.finalLinkField.fill('');
    }

    async finalLinkFieldOkIconClick() {
        await this.finalLinkFieldOkIcon.click();
    }

    async finalLinkFieldCancelIconClick() {
        await this.finalLinkFieldCancelIcon.click();
    }

    async finalLinkClick() {
        await this.finalLink.click();
    }

    async finalLinkFieldEditClick() {
        await this.finalLinkFieldEdit.click();
    }

    async finalLinkFieldCopyClick() {
        await this.finalLinkFieldCopy.click();
    }

    async signatureFieldFill() {
        await this.signatureField.fill('');
    }

    async signatureCalendarIconClick() {
        await this.signatureCalendarIcon.click();
    }

    async signatureOkIconClick() {
        await this.signatureOkIcon.click();
        await this.page.waitForTimeout(1000);
    }

    async signatureCancelIconClick() {
        await this.signatureCancelIcon.click();
    }

    async signatureEditIconClick() {
        await this.signatureEditIcon.click();
    }

    async effectiveFieldFill() {
        await this.effectiveField.fill('');
    }

    async effectiveCalendarIconClick() {
        await this.effectiveCalendarIcon.click();
    }

    async effectiveOkIconClick() {
        await this.effectiveOkIcon.click();
    }

    async effectiveCancelIconClick() {
        await this.effectiveCancelIcon.click();
    }

    async effectiveEditIconClick() {
        await this.effectiveEditIcon.click();
    }

    async preliminaryCheckboxClick() {
        await this.preliminaryCheckbox.click();
        await this.page.waitForTimeout(1000);
    }

    async expirationFieldFill() {
        await this.expirationField.fill('');
    }

    async expirationCalendarIconClick() {
        await this.expirationCalendarIcon.click();
    }

    async expirationOkIconClick() {
        await this.expirationOkIcon.click();
    }

    async expirationCancelIconClick() {
        await this.expirationCancelIcon.click();
    }

    async expirationEditIconClick() {
        await this.expirationEditIcon.click();
    }

    async showHidePreviousScoreButtonClick() {
        await this.showHidePreviousScoreButton.click();
        await this.page.waitForTimeout(2000);
    }

    async datapickerPeriodButtonClick() {
        await this.datapickerPeriodButton.click();
    }

    async datapickerPeriod2022ValueChoose() {
        await this.datapickerPeriod2022Value.click();
    }

    async datapickerPeriodJanValueChoose() {
        await this.datapickerPeriodJanValue.click();
    }

    async datapickerPreviousButtonClick() {
        await this.datapickerPreviousButton.click();
    }

    async datapickerNextButtonClick() {
        await this.datapickerNextButton.click();
    }

    async datapickerValue21Choose() {
        await this.datapickerValue21.click();
    }

    async datapickerValue15Choose() {
        await this.datapickerValue15.click();
    }

    async datapickerValue28Choose() {
        await this.datapickerValue28.click();
    }

    async datapickerValue12Choose() {
        await this.datapickerValue12.click();
    }
}


export {
    DealAnalysisPage
}