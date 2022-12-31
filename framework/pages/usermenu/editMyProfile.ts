import { expect, Locator } from '@playwright/test';

class EditMyProfile {
  page: any;
  expect: any;
  selectImageButton: Locator;
  removeImageButton: Locator;
  removeImagePopupCancelButton: Locator;
  removeImagePopupRemoveButton: Locator;
  firstNameField: Locator;
  lastNameField: Locator;
  emailField: Locator;
  bioField: Locator;
  changePasswordButton: Locator;
  currentPasswordField: Locator;
  newPasswordField: Locator;
  confirmPasswordField: Locator;
  changePassPopupCancelButton: Locator;
  changePassPopupChangePasswordButton: Locator;
  cancelButton: Locator;
  saveChangesButton: Locator;

  constructor(page: any) {
    this.page = page;
    this.selectImageButton = page.locator('.btn >> text=select image');
    this.removeImageButton = page.locator('#profile-remove-photo');
    this.removeImagePopupCancelButton = page.locator('#confirm-modal-cancel');
    this.removeImagePopupRemoveButton = page.locator('#confirm-modal-delete');
    this.firstNameField = page.locator('#profile-first-name input');
    this.lastNameField = page.locator('#profile-last-name input');
    this.emailField = page.locator('#profile-email input');
    this.bioField = page.locator('#profile-bio textarea');
    this.changePasswordButton = page.locator('#profile-show-change-password');
    this.currentPasswordField = page.locator('#profile-current-password input');
    this.newPasswordField = page.locator('#profile-new-password input');
    this.confirmPasswordField = page.locator('#profile-confirm-password input');
    this.changePassPopupCancelButton = page.locator('#change-password-cancel');
    this.changePassPopupChangePasswordButton = page.locator('#change-password-apply');
    this.cancelButton = page.locator('#profile-cancel');
    this.saveChangesButton = page.locator('#profile-save');
  }


  async selectImageButtonClick() {
    await this.selectImageButton.click();
  }

  async removeImageButtonClick() {
    await this.removeImageButton.click();
    await this.page.waitForSelector('#confirm-modal-delete');
  }

  async removeImagePopupCancelButtonClick() {
    await this.removeImagePopupCancelButton.click();
    await this.page.locator('.mat-dialog-container').isHidden();
  }

  async removeImagePopupRemoveButtonClick() {
    await this.removeImagePopupRemoveButton.click();
    await this.page.locator('.mat-dialog-container').isHidden();
  }

  async changePasswordButtonClick() {
    await this.changePasswordButton.click();
    await this.page.waitForSelector('[placeholder="Current Password"]');
  }

  async cancelButtonClickAASA() {
    await this.cancelButton.click();
    await this.page.waitForSelector('#users-list-add-user');
  }

  async cancelButtonClickAU() {
    await this.cancelButton.click();
    await this.page.waitForSelector('#models-list-add-model');
  }
  
  async changePassPopupCancelButtonClick() {
    await this.changePassPopupCancelButton.click();
    await this.page.locator('app-change-password').isHidden();
  }

  async changePassPopupChangePasswordButtonClick() {
    await this.changePassPopupChangePasswordButton.click();
    await this.page.locator('app-change-password').isHidden();
  }

  async changePassPopupChangePasswordButtonForErrorClick() {
    await this.changePassPopupChangePasswordButton.click();
    await this.page.waitForSelector('mat-error >> nth=0');
  }

  async saveChangesButtonClick() {
    await this.saveChangesButton.click();
    await this.page.waitForSelector('#client-view-edit');
  }

  async saveChangesButtonClickFieldErrors() {
    await this.saveChangesButton.click();
    await this.page.waitForSelector('mat-error >> nth=0');
  }

}

export {
    EditMyProfile
}