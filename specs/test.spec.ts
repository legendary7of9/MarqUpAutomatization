import { test , expect, webkit, chromium, Browser, BrowserContext, Page } from '@playwright/test'
import { isStringObject } from 'util/types'
import { UserBar, Users } from '../framework'
import { Search } from '../framework'
import { SignInPage } from '../framework'
import { ForgotPasswordPage } from '../framework'
import { SideBar } from '../framework'
import { Pagination } from '../framework'
import { ManageDisplay } from '../framework'
import { DashboardPage } from '../framework'
import { TemplatesPage } from '../framework'
import { NewEditCopyTemplatePage } from '../framework'
import { ViewTemplatePage } from '../framework'
import { NewEditCopyModelPage } from '../framework'
import { DealsPage } from '../framework'
import { NewEditTermPage } from '../framework'
import { ViewingModelPage } from '../framework'
import { DealsRelatedToModelPage } from '../framework'
import { NewEditDealPage } from '../framework'
import { DealAnalysisPage } from '../framework'
import { ExistingModelPage } from '../framework'
import { ContractsPage } from '../framework'
import { NewEditContractPage } from '../framework'
import { ViewContract } from '../framework'
import { ModelPage } from '../framework'
import { OutboundInboundPage } from '../framework'
import { EndUserPage } from '../framework'
import { Helpers } from '../lib/helpers/randomCharactersAndDigits.preload'




test.beforeEach(async ({ page }, testInfo) => {
    await page.goto('');
});


test('displayingPayContractFee @regClickTractsHigh @outboundInbound @outboundContracts', async ({ page, browserName }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const sidebar = new SideBar(page);
    const userBar = new UserBar(page);
    const newContract = new NewEditContractPage(page);
    const viewContract = new ViewContract(page);
    const endUser = new EndUserPage(page);
    const signaturePage = new OutboundInboundPage(page);
    const pagination = new Pagination(page);
    const dateAndTimeColumn = page.locator('.mat-column-created_at >> nth=1');
    const companyColumn = page.locator('.company-column-link >> nth=0');
    const clientColumn = page.locator('.client-column-link >> nth=0');
    const contractColumn = page.locator('.contract-column-link >> nth=0');
    const emailColumn = page.locator('.mat-column-email >> nth=0');
    const firstOpened = page.locator('.context-menu-first-opened-by');
    const signedBy = page.locator('.context-menu-signed-by');
    const resendLink = page.locator('.context-menu-resend-payment-link');
    const manualPayment = page.locator('.context-menu-manual-payment');
    const manualPaymentPopup = page.locator('.mat-dialog-container');
    const manualPaymentPopupText = page.locator('.modal-header');
    const manualPaymentPopupCheckbox = page.locator('[for="manual-payment-confirm-input"]');
    const manualPaymentPopupContactPaidButton = page.locator('#manual-payment-contract-paid');
    const manualPaymentPopupCancelButton = page.locator('#manual-payment-cancel');
    const paymentColumnValue = page.locator('.mat-column-paytracts_status >> nth=1');
    const payFee = page.locator('.context-menu-pay-contract-fee');
    const paidAtInbound = page.locator('.context-menu-paid_at');
    const paidAtOutbaund = page.locator('.context-menu-paid-at');
    const pageTitle = page.locator('.section__title');
    const tooltip = page.locator('.mat-tooltip');
    const contractCreatorColumn = page.locator('.mat-column-contract_creator >> nth=0');
    const contractCreatorColumnValue = page.locator('.contract-creator-column-link >> nth=0');
    const cardNumberField = page.locator('#email');
    const payButton = page.locator('.SubmitButton');
    console.log('outboundContracts Displaying Pay Contract Fee');
    await users.AAForSignaturesOutbound();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/2480');
    await newContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.contractDescriptionTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.contractFeeValueChoose();
    await newContract.publishToggleClick();
    await newContract.saveAndGenerateLinkButtonClick();
    await viewContract.copyLinkButtonClick();
    const permanentLinkValue = await page.locator('[placeholder="Permanent Contract Link"]').inputValue();
    await viewContract.copyLinkPopupCancelButtonClick();
    await userBar.logOutAction();
    await users.AAForSignaturesInbound();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto(permanentLinkValue);
    await endUser.addressFieldRandomFill(Helpers.generateRandomStringSignatures());
    await endUser.signatureFieldRandomFill(Helpers.generateRandomStringSignatures());
    await endUser.iAgreeCheckboxClick();
    await endUser.signButtonClick();   
    // await endUser.payContractFeeButtonClick();
    // await endUser.payContractFeePagePayment();
    await page.goto('/signed-users/list?&sort=-created_at');
    await signaturePage.inboundToggleClick();
    await signaturePage.threeDotsMenuButtonClick();
    await expect(payFee).toBeHidden();
    await signaturePage.threeDotsMenuClose();
    await signaturePage.paymentFilterClick();
    await signaturePage.threeDotsMenuButtonClick();
    await expect(payFee).toBeVisible();
    const [page2] = await Promise.all([
        page.waitForEvent('popup'),
        await payFee.click()
      ]);
    await page2.waitForSelector('.SubmitButton');
    await expect(page2.url()).toContain('https://checkout.stripe.com/c/pay/');
    await expect(page2.locator('#email')).toBeVisible();
    await expect(page2.locator('.SubmitButton')).toBeVisible();

    // await users.AAForSignaturesOutbound();
    // await signIn.signInButton();
    // await page.waitForURL('/dashboard');
    // await page.goto('/signed-users/list?&sort=-created_at');
    // await signaturePage.threeDotsMenuButtonClick();
    // await expect(resendLink).toBeHidden();
    // await signaturePage.threeDotsMenuClose();
    // await signaturePage.paymentFilterClick();
    // await signaturePage.threeDotsMenuButtonClick();
    // await expect(resendLink).toBeVisible();

    // await userBar.logOutAction();
    // await users.AAForSignaturesInbound();
    // await signIn.signInButton();
    // await page.waitForURL('/dashboard');
    // await page.goto('/signed-users/list?&sort=-created_at');
    // await signaturePage.inboundToggleClick();
    // await signaturePage.threeDotsMenuButtonClick();

});





// test('validationOfTheClientName @regClickTractsMedium @outboundInbound @outboundContracts', async ({ page }) => {
//     const users = new Users(page);
//     const signIn = new SignInPage(page);
//     const signaturesPage = new OutboundInboundPage(page);
//     const search = new Search(page);
//     const userBar = new UserBar(page);
//     const pageTitle = page.locator('.section__title');
//     const historyText = page.locator('.card__title');
//     const withText = page.locator('.card__small-text');
//     const clientColumn = page.locator('.mat-column-account >> nth=0');
//     const clientColumnValue = page.locator('.client-column-link >> nth=0');
//     const clientColumnValueSearch = page.locator('.mat-column-account >> nth=1');
//     const editButton = page.locator('#client-view-edit');
//     console.log('outboundContracts Validation Of The Client Name');
//     await users.SA();
//     await signIn.signInButton();
//     await page.waitForURL('/dashboard');
//     await page.goto('/signed-users/list?&sort=-created_at');
//     await clientColumnValue.click();
//     await expect(page).toHaveURL('/clients/404');
//     await expect(pageTitle).toBeVisible();
//     await expect(pageTitle).toHaveText('AAForSignaturesOutbound');
//     await expect(editButton).toBeVisible();
// });



    // await page.goto('');
    // await endUser.firstNameFieldRandomFill(Helpers.generateRandomStringSignatures());
    // await endUser.lastNameFieldRandomFill(Helpers.generateRandomStringSignatures());
    // await endUser.legalEntityNameFieldRandomFill(Helpers.generateRandomStringSignatures());
    // await endUser.addressFieldRandomFill(Helpers.generateRandomStringSignatures());
    // await endUser.emailField.fill(Helpers.generateRandomStringSignatures() + '@maildrop.cc');
    // const getEmailValue = await page.locator('#contractsignform-email').inputValue();
    // await page.locator('#contractsignform-confirm_email').fill(getEmailValue);
    // await endUser.signatureFieldRandomFill(Helpers.generateRandomStringSignatures());
    // await endUser.iAgreeCheckboxClick();
    // await endUser.signButtonClick();


        // await page.locator('.contract-link >> nth=0').click();
    // const getPermLinkValue = await page.locator('[placeholder="Permanent Contract Link"]').inputValue();
    // // console.log(getPermLinkValue);
    // await page.goto(getPermLinkValue);




test.afterEach(async ({ page }) => {
    // const users = new Users(page);
    // const signIn = new SignInPage(page);
    // const userBar = new UserBar(page);
    // const contracts = new ContractsPage(page);
    // const contractName = page.locator('.contracts-name-column-link >> nth=0');
    // const contractNameCR = page.locator('.contract-name-column-link >> nth=0');
    // if (await page.locator('#copy-link-copy-link').isVisible())
    // {
    //     await contracts.copyLinkPopupCancelButtonClick();
    // }
    // else if (await page.locator('.mat-calendar').isVisible())
    // {
    //     await page.locator('.cdk-overlay-backdrop').click();
    //     await contracts.copyLinkPopupCancelButtonClick();
    // }
    // else if (await page.locator('.action-list').isVisible())
    // {
    //     await page.locator('.cdk-overlay-backdrop').click();
    // }
    // else if (await page.locator('.mat-option').isVisible())
    // {
    //     await page.locator('.cdk-overlay-backdrop').click();
    // }
    // else if (await page.locator('.manage-display-list').isVisible())
    // {
    //     await page.locator('.cdk-overlay-backdrop').click();
    // }
    // else if (await page.locator('#login-sign-in').isVisible())
    // {
    //     await users.AA();
    //     await signIn.signInButton();
    //     await page.waitForURL('/dashboard');
    // }
    // await userBar.logOutAction();
    // await users.AA();
    // await signIn.signInButton();
    // await page.waitForURL('/dashboard');
    // await page.goto('/contracts/list?&sort=-created_at');
    // const contractNameValue = await contractName.innerText();
    //     if (contractNameValue.includes('autotest'))
    //     {
    //         await contracts.rightArrowClick();
    //         await contracts.threeDotsMenuDeleteButtonClick();
    //         await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    //     }
    //     else if (contractNameValue.includes('autotest'))
    //     {
    //         await contracts.rightArrowClick();
    //         await contracts.threeDotsMenuDeleteButtonClick();
    //         await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    //     }
    //     else if (contractNameValue.includes('autotest'))
    //     {
    //         await contracts.rightArrowClick();
    //         await contracts.threeDotsMenuDeleteButtonClick();
    //         await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    //     }
    //     else if (contractNameValue.includes('autotest'))
    //     {
    //         await contracts.rightArrowClick();
    //         await contracts.threeDotsMenuDeleteButtonClick();
    //         await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    //     }
    // await contracts.contractRequestsTabClick();
    // const contractNameValueCR = await contractNameCR.innerText();
    //     if (contractNameValueCR.includes('autotest'))
    //     {
    //         await contracts.rightArrowClick();
    //         await contracts.threeDotsMenuDeleteButtonClick();
    //         await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    //     }
    //     else if (contractNameValueCR.includes('autotest'))
    //     {
    //         await contracts.rightArrowClick();
    //         await contracts.threeDotsMenuDeleteButtonClick();
    //         await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    //     }
    //     else if (contractNameValueCR.includes('autotest'))
    //     {
    //         await contracts.rightArrowClick();
    //         await contracts.threeDotsMenuDeleteButtonClick();
    //         await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    //     }
    //     else if (contractNameValueCR.includes('autotest'))
    //     {
    //         await contracts.rightArrowClick();
    //         await contracts.threeDotsMenuDeleteButtonClick();
    //         await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    //     }
});





//await page.frameLocator('.messagedata-iframe').locator('.mail-btn').click({modifiers: ['Meta']});



//const autologout = ['console.log(helloWorld)']
// page.on("console", (message) => {
//     autologout.push(message.text())
// })
// console.log(autologout)

