import { Locator } from '@playwright/test';

class ClientPageSA {
  page: any;
  expect: any;
  addClientButton: Locator;
  clientsLink: Locator;
  usersLink: Locator;
  modelsLink: Locator;
  dealsLink: Locator;
  templatesLink: Locator;
  contractsLink: Locator;
  clientFilter: Locator;
  emailFilter: Locator;
  statusFilter: Locator;
  clicktractsFilter: Locator;
  createdFilter: Locator;
  createdByFilter: Locator;
  editedFilter: Locator;
  editedByFilter: Locator;
  threeDotsMenu: Locator;
  threeDotsMenuClose: Locator;
  threeDotsMenuEditButton: Locator;
  threeDotsMenuDeleteButton: Locator;
  threeDotsMenuDeletePopupCancelButton: Locator;
  threeDotsMenuDeletePopupDeleteButton: Locator;

  constructor(page: any) {
    this.page = page;
    this.addClientButton = page.locator('#clients-list-add-client');
    this.clientsLink = page.locator('#clients-list-statistics-clients');
    this.usersLink = page.locator('#clients-list-statistics-users');
    this.modelsLink = page.locator('#clients-list-statistics-models');
    this.dealsLink = page.locator('#clients-list-statistics-deals');
    this.templatesLink = page.locator('#clients-list-statistics-templates');
    this.contractsLink = page.locator('#clients-list-statistics-contracts');
    this.clientFilter = page.locator('#client-column-sort');
    this.emailFilter = page.locator('#email-column-sort');
    this.statusFilter = page.locator('#status-column-sort');
    this.clicktractsFilter = page.locator('#ht-access-column-sort');
    this.createdFilter = page.locator('#created-column-sort');
    this.createdByFilter = page.locator('#created-by-column-sort');
    this.editedFilter = page.locator('#edited-column-sort');
    this.editedByFilter = page.locator('#edited-by-column-sort');
    this.threeDotsMenu = page.locator('.mat-icon-button >> nth=0');
    this.threeDotsMenuClose = page.locator('.cdk-overlay-backdrop');
    this.threeDotsMenuEditButton = page.locator('.action-edit');
    this.threeDotsMenuDeleteButton = page.locator('.action-remove');
    this.threeDotsMenuDeletePopupCancelButton = page.locator('#confirm-modal-cancel');
    this.threeDotsMenuDeletePopupDeleteButton = page.locator('#confirm-modal-delete');
  }

  async addClientButtonClick() {
    await this.addClientButton.click();
    await this.page.waitForSelector('[placeholder="Client Name"]');
  }

  async clientsLinkClick() {
    await this.clientsLink.click();
    await this.page.waitForSelector('#clients-list-add-client');
  }

  async usersLinkClick() {
    await this.usersLink.click();
    await this.page.waitForSelector('#users-list-add-user');
  }

  async modelsLinkClick() {
    await this.modelsLink.click();
    await this.page.waitForSelector('#models-list-add-model');
  }

  async dealsLinkClick() {
    await this.dealsLink.click();
    await this.page.waitForSelector('#deals-list-add-deal');
  }

  async templatesLinkClick() {
    await this.templatesLink.click();
    await this.page.waitForSelector('#templates-list-add-template');
  }

  async contractsLinkClick() {
    await this.contractsLink.click();
    await this.page.waitForSelector('#contracts-list-filtered-by-template');
  }

  async clientFilterClick() {
    await this.clientFilter.click();
    await this.page.waitForTimeout(1000);
  }

  async emailFilterClick() {
    await this.emailFilter.click();
    await this.page.waitForTimeout(1000);
  }

  async statusFilterClick() {
    await this.statusFilter.click();
    await this.page.waitForTimeout(1000);
  }

  async clicktractsFilterClick() {
    await this.clicktractsFilter.click();
    await this.page.waitForTimeout(1000);
  }

  async createdFilterClick() {
    await this.createdFilter.click();
    await this.page.waitForTimeout(1000);
  }

  async createdByFilterClick() {
    await this.createdByFilter.click();
    await this.page.waitForTimeout(1000);
  }

  async editedFilterClick() {
    await this.editedFilter.click();
    await this.page.waitForTimeout(1000);
  }

  async editedByFilterClick() {
    await this.editedByFilter.click();
    await this.page.waitForTimeout(1000);
  }

  async threeDotsMenuClick() {
    await this.threeDotsMenu.click();
    await this.page.waitForSelector('.action-edit');
  }

  async threeDotsMenuCloseClick() {
    await this.threeDotsMenuClose.click();
    await this.page.locator('.action-list').isHidden();
  }

  async threeDotsMenuEditButtonClick() {
    await this.threeDotsMenu.click();
    await this.page.waitForSelector('.action-edit');
    await this.threeDotsMenuEditButton.click();
    await this.page.waitForSelector('[placeholder="Status"]');
  }

  async threeDotsMenuDeleteButtonClick() {
    await this.threeDotsMenu.click();
    await this.page.waitForSelector('.action-edit');
    await this.threeDotsMenuDeleteButton.click();
    await this.page.waitForSelector('#confirm-modal-delete');
  }

  async threeDotsMenuDeletePopupCancelButtonClick() {
    await this.threeDotsMenuDeletePopupCancelButton.click();
    await this.page.locator('#confirm-modal-delete').isHidden();
  }

  async threeDotsMenuDeletePopupDeleteButtonClick() {
    await this.threeDotsMenuDeletePopupDeleteButton.click();
    await this.page.locator('#confirm-modal-delete').isHidden();
  }

}

export {
    ClientPageSA
}