import { expect, Locator, Page } from '@playwright/test';


class signInPage {
    test: any;
    page: Page;
    expect:any;
    home: Locator;
    email: Locator;
    password: Locator;
    eyeToggle: Locator;
    eyeToggleHide: Locator;
    signinButton: Locator;
    forgotPassword: Locator;
    signup: Locator;

constructor(page: Page) {
    this.page = page;
    //To be refactored
    this.home = page.locator('#sign-in-home');
    this.email = page.locator('[formcontrolname="email"]');
    this.password = page.locator('[formcontrolname="password"]');
    this.eyeToggle = page.locator('toggle-ps');
    this.eyeToggleHide = page.locator('toggle-ps hide');
    this.signinButton = page.locator('#login-sign-in');
    this.forgotPassword = page.locator('#login-forgon-password');
    this.signup = page.locator('#login-sign-up');
  }
  
async homeButton() {
    await this.home.click();
}

async emailField() {
    await this.email.click();
    await this.email.fill('');
}

async passwordField() {
    await this.password.click();
    await this.password.fill('');
}

async eyeVisible() {
    await this.eyeToggle.click();
}

async eyeHide() {
    await this.eyeToggleHide.click();
}

  async signInButton() {
    await this.signinButton.click();
  }
  
  async forgotPasswordLink() {
    await this.forgotPassword.click();
}

async signUpLink() {
    await this.signup.click();
}

}



export {
    signInPage
}