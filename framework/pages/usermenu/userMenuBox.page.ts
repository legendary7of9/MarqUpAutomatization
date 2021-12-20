import { expect, Locator } from '@playwright/test';

class UserMenuBox {
  page: any;
  expect: any;
  menuBox: Locator;
  signOutButton: Locator;
  

  constructor(page: any) {
    this.page = page;
    //To be refactored
    this.menuBox = page.locator('#user-info');
    this.signOutButton = page.locator('text=Sign Out');
  }


  async userMenuDropdown() {
    await this.menuBox.click();
    await expect(this.signOutButton).toBeVisible();
  }

  async signOut() {
    await this.signOutButton.click();
  }
}

export {
    UserMenuBox
}