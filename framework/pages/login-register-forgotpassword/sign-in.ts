import { Locator, Page } from '@playwright/test';


class SignInPage {
    test: any;
    page: Page;
    expect: any;
    home: Locator;
    email: Locator;
    password: Locator;
    eye: Locator;
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
    this.eye = page.locator('#toggle-show-pass');
    this.signinButton = page.locator('#login-sign-in');
    this.forgotPassword = page.locator('#login-forgon-password');
    this.signup = page.locator('#login-sign-up');
  }
  
async homeButton() {
    await this.home.click();
}

async emailField() {
    await this.email.click();
    await this.email.fill('qwerty');
}

async passwordField() {
    await this.password.click();
    await this.password.fill('qwe');
}

async eyeToggle() {
    await this.eye.click();
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
    SignInPage
}