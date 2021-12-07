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
    }
    async loginAA() {
        //Should be refactored
        await this.page.fill('[placeholder="Email"]', 'iryna.nema+3333@mobindustry.net')
        await this.page.fill('[placeholder="Password"]', 'Zaq1234567!')
        await this.page.click('button:has-text("sign in")')
        await expect(this.page).toHaveURL('https://marqup.test.noredlines.com/dashboard');
    }
    async loginAU() {
        //Should be refactored
        await this.page.fill('[placeholder="Email"]', 'iryna.nema+485220@mobindustry.net')
        await this.page.fill('[placeholder="Password"]', 'Zaq123456!')
        await this.page.click('button:has-text("sign in")')
        await expect(this.page).toHaveURL('https://marqup.test.noredlines.com/clients/268');
    }
    async logout() {
        //Shold be refactored
        await this.page.fill('[placeholder="Email"]', 'sadmin1@marqup.com')
        await this.page.fill('[placeholder="Password"]', '123qwe')
        await this.page.click('button:has-text("sign in")')
        await this.page.click('text=searchsAdmin1 sAdmin >> :nth-match(div, 4)')
        await this.page.click('text=Sign Out')
        await expect(this.page).toHaveURL('https://marqup.test.noredlines.com/sign-in');
    }
    async homeButtonValidation() {
        //Shold be refactored
        await this.page.click('a');
        await expect(this.page).toHaveURL('https://marqup.test.noredlines.com/sign-in');
    }
    async forgotYourPassword() {
        //Shold be refactored
        await this.page.click('text=Forgot your password?');
        await expect(this.page).toHaveURL('https://marqup.test.noredlines.com/forgot-password');
    }
    async signUpHere() {
        //Shold be refactored
        await this.page.click('text=Sign Up here');
        await expect(this.page).toHaveURL('https://marqup.test.noredlines.com/sign-up');
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
        await this.page.click('text=EmailPasswordsign in >> a');
        const content = await this.page.textContent('[placeholder="Password"]');
        expect(content).toBe('qwerty');
    }
}

export {
    LoginPage
}