import { Locator } from '@playwright/test';

class EditClientSA {
  page: any;
  expect: any;
  clientNameField: Locator;
  emailField: Locator;
  selectIndustryField: Locator;
  selectIndustryValue: Locator;
  reactivateButton: Locator;
  companyAdressField: Locator;
  changeButton: Locator;

  cancelButton: Locator;
  saveChangesButton: Locator;


  constructor(page: any) {
    this.page = page;
    this.clientNameField = page.locator('#client-details-client-name input');
    this.emailField = page.locator('#client-details-email input');
    this.selectIndustryField = page.locator('#client-details-select-industry');
    this.selectIndustryValue = page.locator('');
    this.reactivateButton = page.locator('.btn-change-status');
    this.companyAdressField = page.locator('#client-details-company-address input');
    this.changeButton = page.locator('#client-details-update-plan');

    this.cancelButton = page.locator('#client-details-cancel');
    this.saveChangesButton = page.locator('#client-details-save');
  }

  async reactivateButtonClick() {
    await this.reactivateButton.click();
  }

  async saveChangesButtonClick() {
    await this.saveChangesButton.click();
    await this.page.waitForSelector('#clients-list-add-client');
  }

}

export {
    EditClientSA
}