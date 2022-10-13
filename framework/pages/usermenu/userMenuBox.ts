import { expect, Locator } from '@playwright/test';

class UserMenuBox {
  page: any;
  expect: any;
  menuBox: Locator;
  myProfileButton: Locator;
  configurationButton: Locator;
  signOutButton: Locator;
  

  constructor(page: any) {
    this.page = page;
    this.menuBox = page.locator('#user-info');
    this.myProfileButton = page.locator('#user-info-profile');
    this.configurationButton = page.locator('#user-info-configuration');
    this.signOutButton = page.locator('#user-info-sign-out');
  }

  async userMenuDropdownClick() {
    await this.menuBox.click();
    await this.page.waitForSelector('#user-info-profile');
  }

  async myProfileButtonClick() {
    await this.menuBox.click();
    await this.page.waitForSelector('#user-info-profile');
    await this.myProfileButton.click();
    await this.page.waitForSelector('#profile-save');
  }

  async configurationButtonClick() {
    await this.menuBox.click();
    await this.page.waitForSelector('#user-info-configuration');
    await this.configurationButton.click();
    await this.page.waitForSelector('#configuration-save');
  }

  async signOutClick() {
    await this.signOutButton.click();
    await this.page.waitForSelector('#login-sign-in');
  }
}

export {
    UserMenuBox
}