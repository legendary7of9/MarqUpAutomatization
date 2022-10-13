import { Locator } from '@playwright/test';

class UsersPageAASA {
  page: any;
  expect: any;
  deleteUsersButton: Locator;
  deleteUsersPopupCancelButton: Locator;
  deleteUsersPopupDeleteButton: Locator;
  addUserButton: Locator;
  userFilter: Locator;
  userRoleFilter: Locator;
  statusFilter: Locator;
  clientFilter: Locator;
  createdFilter: Locator;
  createdByFilter: Locator;
  lastLoginFilter: Locator;
  checkboxSelectAll: Locator;
  checkboxSelectFirst: Locator;
  threeDotsMenu: Locator;
  threeDotsMenuClose: Locator;
  threeDotsMenuEditButton: Locator;
  threeDotsMenuDeleteButton: Locator;
  threeDotsMenuReactivateButton: Locator;


  constructor(page: any) {
    this.page = page;
    this.deleteUsersButton = page.locator('#users-list-delete-users');
    this.deleteUsersPopupCancelButton = page.locator('#confirm-modal-cancel');
    this.deleteUsersPopupDeleteButton = page.locator('#confirm-modal-delete');
    this.addUserButton = page.locator('#users-list-add-user');
    this.userFilter = page.locator('#user-column-sort');
    this.userRoleFilter = page.locator('#user-role-column-sort');
    this.statusFilter = page.locator('#status-column-sort');
    this.clientFilter = page.locator('#client-column-sort');
    this.createdFilter = page.locator('#created-column-sort');
    this.createdByFilter = page.locator('#created-by-column-sort');
    this.lastLoginFilter = page.locator('#last-login-column-sort');
    this.checkboxSelectAll = page.locator('.mat-checkbox >> nth=0');
    this.checkboxSelectFirst = page.locator('.mat-checkbox >> nth=1');
    this.threeDotsMenu = page.locator('.mat-icon-button >> nth=0');
    this.threeDotsMenuClose = page.locator('.cdk-overlay-backdrop');
    this.threeDotsMenuEditButton = page.locator('.action-edit');
    this.threeDotsMenuDeleteButton = page.locator('.action-remove');
    this.threeDotsMenuReactivateButton = page.locator('.action-active');
  }

  async deleteUsersButtonClick() {
    await this.deleteUsersButton.click();
  }

  async deleteUsersPopupCancelButtonClick() {
    await this.deleteUsersPopupCancelButton.click();
    await this.page.locator('#confirm-modal-delete').isHidden();
  }

  async deleteUsersPopupDeleteButtonClick() {
    await this.deleteUsersPopupDeleteButton.click();
    await this.page.locator('#confirm-modal-delete').isHidden();
  }

  async addUserButtonClick() {
    await this.addUserButton.click();
    await this.page.waitForSelector('#user-details-save');
  }

  async userFilterClick() {
    await this.userFilter.click();
    await this.page.waitForTimeout(1000);
  }

  async userRoleFilterClick() {
    await this.userRoleFilter.click();
    await this.page.waitForTimeout(1000);
  }

  async statusFilterClick() {
    await this.statusFilter.click();
    await this.page.waitForTimeout(1000);
  }

  async clientFilterClick() {
    await this.clientFilter.click();
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

  async lastLoginFilterClick() {
    await this.lastLoginFilter.click();
    await this.page.waitForTimeout(1000);
  }

  async checkboxSelectAllClick() {
    await this.checkboxSelectAll.click();
  }

  async checkboxSelectFirstClick() {
    await this.checkboxSelectFirst.click();
  }

  async threeDotsMenuClick() {
    await this.threeDotsMenu.click();
    await this.page.waitForSelector('.action-list');
  }

  async threeDotsMenuCloseAction() {
    await this.threeDotsMenuClose.click();
    await this.page.locator('.mat-menu-content').isHidden();
  }

  async threeDotsMenuEditButtonClick() {
    await this.threeDotsMenu.click();
    await this.page.waitForSelector('.action-list');
    await this.threeDotsMenuEditButton.click();
    await this.page.waitForSelector('#user-details-reset-password');
  }

  async threeDotsMenuDeleteButtonClick() {
    await this.threeDotsMenu.click();
    await this.page.waitForSelector('.action-list');
    await this.threeDotsMenuDeleteButton.click();
    await this.page.waitForSelector('#confirm-modal-delete');
    await this.page.waitForTimeout(1000);
  }

  async threeDotsMenuReactivateButtonClick() {
    await this.threeDotsMenu.click();
    await this.page.waitForSelector('.action-list');
    await this.threeDotsMenuReactivateButton.click();
    await this.page.waitForTimeout(2500);
  }
}

export {
    UsersPageAASA
}