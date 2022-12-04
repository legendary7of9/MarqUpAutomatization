import { Locator, Page } from '@playwright/test';


class EndUserPage {
    test: any;
    page: Page;
    expect: any;
    logInButton: Locator;
    downloadPdfButton: Locator;
    firstNameField: Locator;
    lastNameField: Locator;
    legalEntityNameField: Locator;
    titleField: Locator;
    emailField: Locator;
    confirmEmailField: Locator;
    signatureField: Locator;
    iAgreeCheckbox: Locator;
    signButton: Locator;
    payContractFeeButton: Locator;
    payContractFeeEmailField: Locator;
    payContractFeeCardNumberField: Locator;
    payContractFeeCardExpiryField: Locator;
    payContractFeeCardCvcField: Locator;
    payContractFeeBillingNameField: Locator;
    payContractFeeSubscribeButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logInButton = page.locator('#login-btn');
        this.downloadPdfButton = page.locator('.pdf-button');
        this.firstNameField = page.locator('#contractsignform-first_name');
        this.lastNameField = page.locator('#contractsignform-last_name');
        this.legalEntityNameField = page.locator('#contractsignform-company_name');
        this.titleField = page.locator('#contractsignform-title');
        this.emailField = page.locator('#contractsignform-email');
        this.confirmEmailField = page.locator('#contractsignform-confirm_email');
        this.signatureField = page.locator('#contractsignform-signature');
        this.iAgreeCheckbox = page.locator('#contractsignform-agree');
        this.signButton = page.locator('#sign-btn');
        this.payContractFeeButton = page.locator('#checkout-button');
        this.payContractFeeEmailField = page.locator('#email');
        this.payContractFeeCardNumberField = page.locator('#cardNumber');
        this.payContractFeeCardExpiryField = page.locator('#cardExpiry');
        this.payContractFeeCardCvcField = page.locator('#cardCvc');
        this.payContractFeeBillingNameField = page.locator('#billingName');
        this.payContractFeeSubscribeButton = page.locator('.SubmitButton');
    }

    async logInButtonClick() {
        await this.logInButton.click();
        await this.page.waitForSelector('#login-sign-in');
    }

    async firstNameFieldRandomFill(text:string) {
        await this.firstNameField.fill(text);
    }

    async lastNameFieldRandomFill(text:string) {
        await this.lastNameField.fill(text);
    }

    async legalEntityNameFieldRandomFill(text:string) {
        await this.legalEntityNameField.fill(text);
    }

    async titleFieldRandomFill(text:string) {
        await this.titleField.fill(text);
    }

    async signatureFieldRandomFill(text:string) {
        await this.signatureField.fill(text);
    }

    async iAgreeCheckboxClick() {
        await this.iAgreeCheckbox.click();
    }

    async signButtonClick() {
        await this.signButton.click();
        await this.page.waitForSelector('.alert-success');
    }

    async payContractFeeButtonClick() {
        await this.payContractFeeButton.click();
        await this.page.waitForSelector('.SubmitButton');
    }

    async payContractFeePagePayment() {
        await this.payContractFeeEmailField.fill('alexey.banshykov@mobindustry.net');
        await this.payContractFeeCardNumberField.fill('4242424242424242');
        await this.payContractFeeCardExpiryField.fill('424');
        await this.payContractFeeCardCvcField.fill('242');
        await this.payContractFeeBillingNameField.fill('Mark Sheldon');
        await this.payContractFeeSubscribeButton.click();
        await this.page.waitForSelector('.alert-success');
    }
}


export {
    EndUserPage
}