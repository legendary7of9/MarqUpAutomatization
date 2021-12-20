import { expect } from "@playwright/test"

class LoginPage {
  page: any
  expect: any

    constructor(page: any) {
        this.page = page
    }
  
    async loginSA() {
        //Should be refactored
        await this.page.fill('[placeholder="Email"]', 'sadmin1@marqup.com')
        await this.page.fill('[placeholder="Password"]', '123qwe')
        await this.page.click('button:has-text("sign in")')
        await expect(this.page).toHaveURL('https://marqup.test.noredlines.com/dashboard');
        const locator = this.page.locator('app-site-layout.ng-star-inserted:nth-child(2) div.header__wr div.container div.header div.user-info-wr div.ng-star-inserted div.user-info > div.user-info__name');
        await expect(locator).toHaveText(['sAdmin1 sAdmin']);
    }
    async loginAA() {
        //Should be refactored
        await this.page.fill('[placeholder="Email"]', 'iryna.nema+3333@mobindustry.net')
        await this.page.fill('[placeholder="Password"]', 'Zaq1234567!')
        await this.page.click('button:has-text("sign in")')
        await expect(this.page).toHaveURL('https://marqup.test.noredlines.com/dashboard');
        const locator = this.page.locator('app-site-layout.ng-star-inserted:nth-child(2) div.header__wr div.container div.header div.user-info-wr div.ng-star-inserted div.user-info > div.user-info__name');
        await expect(locator).toHaveText(['Owner AA W Client test test test test']);
    }
    async loginAU() {
        //Should be refactored
        await this.page.fill('[placeholder="Email"]', 'iryna.nema+485220@mobindustry.net')
        await this.page.fill('[placeholder="Password"]', 'Zaq123456!')
        await this.page.click('button:has-text("sign in")')
        await expect(this.page).toHaveURL('https://marqup.test.noredlines.com/clients/268');
        const locator = this.page.locator('app-site-layout.ng-star-inserted:nth-child(2) div.header__wr div.container div.header div.user-info-wr div.ng-star-inserted div.user-info > div.user-info__name');
        await expect(locator).toHaveText(['Account user W client 2']);
    }
    async logout() {
        //Shold be refactored
        await this.page.fill('[placeholder="Email"]', 'sadmin1@marqup.com')
        await this.page.fill('[placeholder="Password"]', '123qwe')
        await this.page.click('button:has-text("sign in")')
        await this.page.click('text=searchsAdmin1 sAdmin >> :nth-match(div, 4)')
        await this.page.click('text=Sign Out')
        await expect(this.page).toHaveURL('https://marqup.test.noredlines.com/sign-in');
        const locator = this.page.locator('app-login.ng-star-inserted:nth-child(2) div.not-authorized:nth-child(2) div.authorized-popup div.authorized-popup__breadcrumbs > span.current-state.ng-star-inserted');
        await expect(locator).toHaveText(['Sign In']);
    }
    async homeButtonValidation() {
        //Shold be refactored
        await this.page.click('a');
        await expect(this.page).toHaveURL('https://marqup.test.noredlines.com/sign-in');
        const locator = this.page.locator('app-login.ng-star-inserted:nth-child(2) div.not-authorized:nth-child(2) div.authorized-popup div.authorized-popup__breadcrumbs > span.current-state.ng-star-inserted');
        await expect(locator).toHaveText(['Sign In']);
    }
    async forgotYourPassword() {
        //Shold be refactored
        await this.page.click('text=Forgot your password?');
        await expect(this.page).toHaveURL('https://marqup.test.noredlines.com/forgot-password');
        const locator = this.page.locator('app-forgot-password.ng-star-inserted:nth-child(2) div.not-authorized.forgot-password:nth-child(2) div.authorized-popup div.authorized-popup__breadcrumbs > span.current-state');
        await expect(locator).toHaveText(['Forgot Your Password?']);
    }
    async signUpHere() {
        //Shold be refactored
        await this.page.click('text=Sign Up here');
        await expect(this.page).toHaveURL('https://marqup.test.noredlines.com/sign-up');
        const locator = this.page.locator('app-registration.ng-star-inserted:nth-child(2) div.not-authorized:nth-child(2) div.authorized-popup.signup-popup div.authorized-popup__breadcrumbs > span.current-state');
        await expect(locator).toHaveText(['Sign Up']);
    }
    async emptyFields() {
        //Shold be refactored
        await this.page.click('button:has-text("sign in")');
        const locator = this.page.locator('text=Please fill in this field');
        await expect(locator).toHaveText(['Please fill in this field', 'Please fill in this field']);
    }
    async shortPasswordValidation() {
        //Shold be refactored
        await this.page.click('button:has-text("sign in")');
        await this.page.fill('[placeholder="Password"]', 'qwe');
        const locator = this.page.locator('text=Password must be at least 6 characters long');
        await expect(locator).toHaveText(['Password must be at least 6 characters long']);
    }
    async incorrectEmailFormat() {
        //Shold be refactored
        await this.page.click('button:has-text("sign in")');
        await this.page.fill('[placeholder="Email"]', 'wehwjhdhwj@xzxsax');
        const locator = this.page.locator('text=Please enter a valid email address');
        await expect(locator).toHaveText(['Please enter a valid email address']);
    }
    async eyeButtonValidation() {
        //Shold be refactored
        await this.page.fill('[placeholder="Password"]', 'qwerty');
        const locator = this.page.locator('text=EmailPasswordsign in >> a');
        await expect(locator).toHaveClass('toggle-ps');
        await this.page.click('text=EmailPasswordsign in >> a');
        await expect(locator).toHaveClass('toggle-ps hide');

    }
}

export {
    LoginPage
}