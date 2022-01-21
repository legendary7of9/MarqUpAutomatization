import { Locator, Page } from '@playwright/test';


class NewEditDealPage {
    test: any;
    page: Page;
    expect: any;
    clientDropDown: Locator;
    clientDropDownValueNew: Locator;
    clientDropDownValueNew2: Locator;
    modelDropDown: Locator;
    modelDropDownValueNew: Locator;
    contractNameField:Locator;
    myCompanySubsidiaryField: Locator;
    nameOfTheOtherPartyField: Locator;
    esimatedValueField: Locator;
    currencyDropDown: Locator;
    currencyDropDownUSD: Locator;
    currencyDropDownEUR: Locator;
    overviewField: Locator;
    notesField: Locator;
    crmIdField: Locator;
    createButton: Locator;
    saveChangesButton: Locator;
    cancelButton: Locator;
    linkToExistingDealButton: Locator;
    linkToExistingDealPopupSearch: Locator;
    linkToExistingDealPopupSortStatus: Locator;
    linkToExistingDealPopupSortDeal: Locator;
    linkToExistingDealPopupSelectButton: Locator;
    linkToExistingDealPopupCloseButton: Locator;
    linkToExistingDealPopupRadioButtonForSelect: Locator;
    linkToExistingDealPopupRadioButtonForSelect2: Locator;
    agreementNoField: Locator;

    constructor(page: Page) {
        this.page = page;
        this.clientDropDown = page.locator('[formcontrolname="account_id"]');
        this.clientDropDownValueNew = page.locator('mat-option >> nth=19');
        this.clientDropDownValueNew2 = page.locator('mat-option >> nth=112');
        this.modelDropDown = page.locator('[formcontrolname="model_id"]');
        this.modelDropDownValueNew = page.locator('mat-option >> nth=12');
        this.contractNameField = page.locator('[formcontrolname="contract_name"]');
        this.myCompanySubsidiaryField = page.locator('[formcontrolname="company_name"]');
        this.nameOfTheOtherPartyField = page.locator('[formcontrolname="name_of_the_other_party"]');
        this.esimatedValueField = page.locator('[formcontrolname="estimated_value"]');
        this.currencyDropDown = page.locator('[formcontrolname="estimated_value_currency"]');
        this.currencyDropDownUSD = page.locator('mat-option >> nth=0');
        this.currencyDropDownEUR = page.locator('mat-option >> nth=1');
        this.overviewField = page.locator('[formcontrolname="description"]');
        this.notesField = page.locator('[formcontrolname="notes"]');
        this.crmIdField = page.locator('[formcontrolname="sf_contract_id"]');
        this.agreementNoField = page.locator('[formcontrolname="sf_contract_number"]');
        this.createButton = page.locator('#deal-details-save');
        this.saveChangesButton = page.locator('#deal-details-save');
        this.cancelButton = page.locator('#deal-details-cancel');
        this.linkToExistingDealButton = page.locator('#deal-details-link-to-existing-deal');
        this.linkToExistingDealPopupSearch = page.locator('#linking-deal-search');
        this.linkToExistingDealPopupSortStatus = page.locator('#status-column-sort');
        this.linkToExistingDealPopupSortDeal = page.locator('#deal-column-sort');
        this.linkToExistingDealPopupSelectButton = page.locator('#linking-deal-select');
        this.linkToExistingDealPopupCloseButton = page.locator('#linking-deal-close');
        this.linkToExistingDealPopupRadioButtonForSelect = page.locator('.mat-radio-button >> nth=0');
        this.linkToExistingDealPopupRadioButtonForSelect2 = page.locator('.mat-radio-button >> nth=15');
    }

    async clientDropDownChoose() {
        await this.clientDropDown.click();
        await this.clientDropDownValueNew.click();
    }

    async clientDropDownChoose2() {
        await this.clientDropDown.click();
        await this.clientDropDownValueNew2.click();
    }

    async modelDropDownChoose() {
        await this.modelDropDown.click();
        await this.modelDropDownValueNew.click();
    }

    async contractNameFieldFill(text:string) {
        await this.contractNameField.click();
        await this.contractNameField.fill(text);
    }

    async contractNameFieldEdit() {
        await this.contractNameField.click();
        await this.contractNameField.fill('testModelForDealsDoNotRemove4444');
    }

    async contractNameFieldFillAfterEdit() {
        await this.contractNameField.click();
        await this.contractNameField.fill('testModelForDealsDoNotRemove2');
    }

    async contractNameFieldClear() {
        await this.contractNameField.click();
        await this.contractNameField.fill('');
    }
   
    async myCompanySubsidiaryFieldClick() {
        await this.myCompanySubsidiaryField.click();
    }

    async myCompanySubsidiaryFieldFill() {
        await this.myCompanySubsidiaryField.click();
        await this.myCompanySubsidiaryField.fill('dsf');
    }

    async myCompanySubsidiaryFieldClear() {
        await this.myCompanySubsidiaryField.click();
        await this.myCompanySubsidiaryField.fill('');
    }

    async nameOfTheOtherPartyFieldFill(text:string) {
        await this.nameOfTheOtherPartyField.click();
        await this.nameOfTheOtherPartyField.fill(text);
    }

    async nameOfTheOtherPartyFieldClear() {
        await this.nameOfTheOtherPartyField.click();
        await this.nameOfTheOtherPartyField.fill('');
    }

    async esimatedValueFieldFill() {
        await this.esimatedValueField.click();
        await this.esimatedValueField.fill('');
        await this.esimatedValueField.type('22ss22dd22qq2');
    }

    async esimatedValueFieldClear() {
        await this.esimatedValueField.click();
        await this.esimatedValueField.fill('');
    }

    async currencyDropDownClick() {
        await this.currencyDropDown.click();
    }

    async currencyDropDownChooseUSD() {
        await this.currencyDropDown.click();
        await this.currencyDropDownUSD.click();
    }

    async currencyDropDownChooseEUR() {
        await this.currencyDropDown.click();
        await this.currencyDropDownEUR.click();
    }

    async overviewFieldFill(text:string) {
        await this.overviewField.click();
        await this.overviewField.fill(text);
    }

    async overviewFieldFillMoreThanMax() {
        await this.overviewField.click();
        await this.overviewField.fill('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq');
    }

    async overviewFieldFillTenDigits() {
        await this.overviewField.click();
        await this.overviewField.fill('qqqqqqqqqq');
    }

    async overviewFieldClear() {
        await this.overviewField.click();
        await this.overviewField.fill('');
    }

    async notesFieldFill(text:string) {
        await this.notesField.click();
        await this.notesField.fill(text);
    }

    async notesFieldFillMoreThanMax() {
        await this.notesField.click();
        await this.notesField.fill('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq');
    }

    async notesFieldFillTenDigits() {
        await this.notesField.click();
        await this.notesField.fill('qqqqqqqqqq');
    }

    async notesFieldClear() {
        await this.notesField.click();
        await this.notesField.fill('');
    }

    async crmIdFieldFill(text:string) {
        await this.crmIdField.click();
        await this.crmIdField.fill(text);
    }

    async agreementNoFieldFill(text:string) {
        await this.agreementNoField.click();
        await this.agreementNoField.fill(text);
    }

    async createButtonClick() {
        await this.createButton.click();
    }

    async saveChangesButtonClick() {
        await this.saveChangesButton.click();
    }

    async cancelButtonClick() {
        await this.cancelButton.click();
    }

    async linkToExistingDealButtonClick() {
        await this.linkToExistingDealButton.click();
    }

    async linkToExistingDealPopupSearchUse() {
        await this.linkToExistingDealPopupSearch.click();
        await this.linkToExistingDealPopupSearch.type('Cont122 12Test OTHER');
    }

    async linkToExistingDealPopupSortStatusUse() {
        await this.linkToExistingDealPopupSortStatus.click();
    }

    async linkToExistingDealPopupSortDealUse() {
        await this.linkToExistingDealPopupSortDeal.click();
    }

    async linkToExistingDealPopupSelectButtonClick() {
        await this.linkToExistingDealPopupSelectButton.click();
    }

    async linkToExistingDealPopupCloseButtonClick() {
        await this.linkToExistingDealPopupCloseButton.click();
    }

    async linkToExistingDealPopupRadioButtonForSelectClick() {
        await this.linkToExistingDealPopupRadioButtonForSelect.click();
    }

    async linkToExistingDealPopupRadioButtonForSelectClick2() {
        await this.linkToExistingDealPopupRadioButtonForSelect2.click();
    }
}

export {
    NewEditDealPage
}