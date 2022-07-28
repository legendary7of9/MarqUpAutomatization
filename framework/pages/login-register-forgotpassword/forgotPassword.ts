import { Locator, Page } from '@playwright/test';


class ForgotPasswordPage {
    test: any;
    page: Page;
    backButton: Locator;
    emailField: Locator;
    sendButton: Locator;
    backToSignInLink: Locator;
    resetPasswordPageHomeButton: Locator;

constructor(page: Page) {
    this.page = page;
    this.backButton = page.locator('#forgot-password-home');
    this.emailField = page.locator('#forgot-password-email .mat-input-element');
    this.sendButton = page.locator('#forgot-password-send');
    this.backToSignInLink = page.locator('#forgot-password-back');
    this.resetPasswordPageHomeButton = page.locator('#reset-password-home');
  }
  
async backButtonClick() {
    await this.backButton.click();
}

async emailFieldFill() {
    await this.emailField.fill('accountadmin4@maildrop.cc'); 
}

async emailFieldEmptyFill() {
    await this.emailField.fill('');
}

async incorrectEmailFieldFill() {
    await this.emailField.fill('dfdfdfgmail.com');
}

async inactiveEmailFieldFill() {
    await this.emailField.fill('BanBanBanBan@maildrop.cc');
}

async pendingEmailFieldFill() {
    await this.emailField.fill('lokitor@maildrop.cc');
}

async notExistingEmailFieldFill() {
    await this.emailField.fill('ososos@maildrop.cc');
}

async sendButtonClick() {
    await this.sendButton.click();
}

async backToSignInLinkClick() {
    await this.backToSignInLink.click();
}

async resetPasswordPageHomeButtonClick() {
    await this.resetPasswordPageHomeButton.click();
}
}

export {
    ForgotPasswordPage
}