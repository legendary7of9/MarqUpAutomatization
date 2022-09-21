import { Locator, Page } from '@playwright/test';


class UserBar {
    test: any;
    page: Page;
    expect: any;
    userInfoButton: Locator;
    myProfileButton: Locator;
    configurationButton: Locator;
    signOutButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.userInfoButton = page.locator('#user-info');
        this.myProfileButton = page.locator('#user-info-profile');
        this.configurationButton = page.locator('#user-info-configuration');
        this.signOutButton = page.locator('#user-info-sign-out');
    }

    async userInfoButtonClick() {
        await this.userInfoButton.click();
    }

    async myProfileButtonClick() {
        await this.myProfileButton.dblclick();
    }

    async configurationButtonClick() {
        await this.configurationButton.click();
    }

    async signOutButtonClick() {
        await this.signOutButton.click();
        await this.page.waitForSelector('#login-sign-in');
    }

    async logOutAction() {
        await this.userInfoButton.click();
        await this.page.waitForSelector('#user-info-sign-out');
        await this.signOutButton.click();
        await this.page.waitForSelector('#login-sign-in');
    }
}


export {
    UserBar
}