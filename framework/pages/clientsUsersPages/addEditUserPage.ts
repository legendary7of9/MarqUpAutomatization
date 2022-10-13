import { Locator } from '@playwright/test';

class AddEditUserPage {
  page: any;
  expect: any;
  imageIcon: Locator;
  selectImageButton: Locator;
  removeButton: Locator;
  removePopupCancel: Locator;
  removePopupDelete: Locator;
  firstNameField: Locator;
  lastNameField: Locator;
  emailField: Locator;
  deactivateButton: Locator;
  activateButton: Locator;
  bioField: Locator;
  clientField: Locator;
  clientFieldValue: Locator;
  userAdminToggle: Locator;
  cancelButton: Locator;
  createButton: Locator;
  saveChangesButton: Locator;
  resetPasswordButton: Locator;
  resendLinkButton: Locator;
  deleteUserButton: Locator;

  constructor(page: any) {
    this.page = page;
    this.imageIcon = page.locator('.avatar');
    this.selectImageButton = page.locator('.btn >> text=select image');
    this.removeButton = page.locator('.btn >> text=remove');
    this.removePopupCancel = page.locator('#confirm-modal-cancel');
    this.removePopupDelete = page.locator('#confirm-modal-delete');
    this.firstNameField = page.locator('#user-details-first-name input');
    this.lastNameField = page.locator('#user-details-last-name input');
    this.emailField = page.locator('#user-details-email input');
    this.deactivateButton = page.locator('.btn >> text=deactivate');
    this.activateButton = page.locator('.btn >> text=activate');
    this.bioField = page.locator('#user-details-bio textarea');
    this.clientField = page.locator('#user-details-client');
    this.clientFieldValue = page.locator('.mat-option >> text= Client 1HT(test) ');
    this.userAdminToggle = page.locator('.mat-slide-toggle-bar');
    this.cancelButton = page.locator('.btn-cancel');
    this.createButton = page.locator('#user-details-save');
    this.saveChangesButton = page.locator('#user-details-save');
    this.resetPasswordButton = page.locator('#user-details-reset-password');
    this.resendLinkButton = page.locator('#user-details-resend-link');
    this.deleteUserButton = page.locator('#user-details-delete-user');
  }

  async imageIconClick() {
    await this.imageIcon.click();
  }

  async selectImageButtonClick() {
    await this.selectImageButton.click();
  }

  async removeButtonClick() {
    await this.removeButton.click();
    await this.page.waitForSelector('#confirm-modal-delete');
  }

  async removePopupCancelClick() {
    await this.removePopupCancel.click();
    await this.page.locator('#confirm-modal-delete').isHidden();
  }

  async removePopupDeleteClick() {
    await this.removePopupDelete.click();
    await this.page.waitForSelector('#users-list-add-user');
  }

  async firstNameFieldFill(text:string) {
    await this.firstNameField.fill(text);
  }

  async lastNameFieldFill(text:string) {
    await this.lastNameField.fill(text);
  }

  async emailFieldFill(text:string) {
    await this.emailField.fill(text);
  }

  async deactivateButtonClick() {
    await this.deactivateButton.click();
    await this.page.waitForSelector('.btn >> text=activate');
  }

  async activateButtonClick() {
    await this.activateButton.click();
    await this.page.waitForSelector('.btn >> text=deactivate');
  }

  async selectClientAction() {
    await this.clientField.click();
    await this.page.waitForTimeout(1000);
    if (await this.clientFieldValue.isHidden()) 
    {
        this.page.waitForTimeout(1000);
        this.clientField.click();
    }
    await this.page.waitForSelector('.mat-select-content');
    await this.clientFieldValue.click();
  }

  async userAdminToggleClick() {
    await this.userAdminToggle.click();
  }

  async cancelButtonClick() {
    await this.cancelButton.click();
    await this.page.waitForSelector('#users-list-add-user');
  }

  async createButtonForErrors() {
    await this.createButton.click();
  }

  async createButtonClick() {
    await this.createButton.click();
    await this.page.waitForSelector('#users-list-add-user');
  }

  async saveChangesButtonForErrors() {
    await this.saveChangesButton.click();
  }

  async saveChangesButtonClick() {
    await this.saveChangesButton.click();
    await this.page.waitForSelector('#users-list-add-user');
  }

  async resetPasswordButtonClick() {
    await this.resetPasswordButton.click();
    await this.page.waitForSelector('.mat-snack-bar-container');
  }

  async resendLinkButtonClick() {
    await this.resendLinkButton.click();
    await this.page.waitForSelector('.mat-snack-bar-container');
  }

  async deleteUserButtonClick() {
    await this.deleteUserButton.click();
    await this.page.waitForSelector('#confirm-modal-delete');
  }
}

export {
    AddEditUserPage
}