import { expect, Locator } from '@playwright/test';

class Configuration {
  page: any;
  expect: any;
  lowRiskField: Locator;
  mediumRiskField: Locator;
  cancelButton: Locator;
  saveChangesButton: Locator;

  constructor(page: any) {
    this.page = page;
    this.lowRiskField = page.locator('#configuration-low-risk input');
    this.mediumRiskField = page.locator('#configuration-medium-risk input');
    this.cancelButton = page.locator('#configuration-cancel');
    this.saveChangesButton = page.locator('#configuration-save');
  }


  async cancelButtonClick() {
    await this.cancelButton.click();
    await this.page.waitForSelector('#client-view-edit');
  }

  async saveChangesButtonClick() {
    await this.saveChangesButton.click();
    await this.page.waitForSelector('#deals-list-add-deal');
  }

  async saveChangesButtonClickError() {
    await this.saveChangesButton.click();
  }

}

export {
    Configuration
}