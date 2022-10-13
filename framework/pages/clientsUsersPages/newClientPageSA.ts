import { Locator } from '@playwright/test';

class NewClientPageSA {
  page: any;
  expect: any;
  clientNameField: Locator;
  emailField: Locator;
  firstNameField: Locator;
  lastNameField: Locator;
  selectIndustryField: Locator;
  selectIndustryValue: Locator;
  companyAddressField: Locator;
  monthlyTab: Locator;
  yearlyTab: Locator;
  customTab: Locator;
  productPackage: Locator;
  supportPackage: Locator;
  cancelButton: Locator;
  createButton: Locator;

  constructor(page: any) {
    this.page = page;
    this.clientNameField = page.locator('#client-details-client-name input');
    this.emailField = page.locator('#client-details-email input');
    this.firstNameField = page.locator('#client-details-first-name input');
    this.lastNameField = page.locator('#client-details-last-name input');
    this.selectIndustryField = page.locator('#client-details-select-industry');
    this.selectIndustryValue = page.locator('.mat-option >> text= Test Preparation ');
    this.companyAddressField = page.locator('#client-details-company-address input');
    this.monthlyTab = page.locator('.mat-tab-label >> text=MONTHLY');
    this.yearlyTab = page.locator('.mat-tab-label >> text=YEARLY');
    this.customTab = page.locator('.mat-tab-label >> text=CUSTOM');
    this.productPackage = page.locator('.subscription-item__name >> text=ClickTracts - PayTracts');
    this.supportPackage = page.locator('.subscription-item__name >> text=Small');
    this.cancelButton = page.locator('#client-details-cancel');
    this.createButton = page.locator('#client-details-create');
  }

  async clientNameFieldRandomFill(text:string) {
    await this.clientNameField.fill(text);
  }

  async emailFieldRandomFill(text:string) {
    await this.emailField.fill(text);
  }

  async firstNameFieldRandomFill(text:string) {
    await this.firstNameField.fill(text);
  }

  async lastNameFieldRandomFill(text:string) {
    await this.lastNameField.fill(text);
  }

  async selectIndustryAction() {
    await this.selectIndustryField.click();
    await this.page.waitForTimeout(1000);
    if (await this.selectIndustryValue.isHidden()) 
    {
        this.page.waitForTimeout(1000);
        this.selectIndustryField.click();
    }
    await this.page.waitForSelector('.mat-select-content');
    await this.selectIndustryValue.click();
  }

  async monthlyTabClick() {
    await this.monthlyTab.click();
    await this.page.waitForSelector('.subscription-item__name >> text=ClickTracts - PayTracts');
  }

  async yearlyTabClick() {
    await this.yearlyTab.click();
    await this.page.waitForSelector('.subscription-item__name >> text=Advanced');
  }

  async customTabClick() {
    await this.customTab.click();
    await this.page.waitForSelector('.subscription-item__name >> text=4 Days');
  }

  async cancelButtonClick() {
    await this.cancelButton.click();
    await this.page.waitForSelector('#clients-list-add-client');
  }

  async createButtonForErrors() {
    await this.createButton.click();
  }

  async createButtonClick() {
    await this.createButton.click();
    await this.page.waitForSelector('');
  }

}

export {
    NewClientPageSA
}