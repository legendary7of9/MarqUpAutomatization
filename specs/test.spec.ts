import { test , expect, webkit, chromium, Browser, BrowserContext, Page } from '@playwright/test'
import { isStringObject } from 'util/types'
import { EditClientSA, UserBar, Users } from '../framework'
import { Search } from '../framework'
import { SignInPage } from '../framework'
import { ForgotPasswordPage } from '../framework'
import { SideBar } from '../framework'
import { UserMenuBox } from '../framework'
import { EditMyProfile } from '../framework'
import { Configuration } from '../framework'
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
import { ClientPageSA } from '../framework'
import { NewClientPageSA } from '../framework'
import { UsersPageAASA } from '../framework'
import { AddEditUserPage } from '../framework'
import { Helpers } from '../lib/helpers/randomCharactersAndDigits.preload'





test.beforeEach(async ({ page }, testInfo) => {
    await page.goto('');
});

test('validationOfTheDeleteUserButton @regChecklistNewHigh @usersPageAASA', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const pagination = new Pagination(page);
    const userBar = new UserBar(page);
    const usersPage = new UsersPageAASA(page);
    const newUser = new AddEditUserPage(page);
    const search = new Search(page);
    const pageTitle = page.locator('.section__title');
    const removeButton = page.locator('.btn >> text=remove');
    const deactivateButton = page.locator('.btn >> text=deactivate');
    const activateButton = page.locator('.btn >> text=activate');
    const clientField = page.locator('#user-details-client');
    const clientFieldDropDown = page.locator('.mat-select-content');
    const clientFieldValue = page.locator('#user-details-client mat-select');
    const userAdminField = page.locator('#user-details-role');
    const userAdminFieldToggle = page.locator('.mat-slide-toggle');
    const firstNameFieldError = page.locator('#user-details-first-name mat-error');
    const lastNameFieldError = page.locator('#user-details-last-name mat-error');
    const emailFieldError = page.locator('#user-details-email mat-error');
    const resetPasswordButton = page.locator('#user-details-reset-password');
    const resendLinkButton = page.locator('#user-details-resend-link');
    const emailSentPopup = page.locator('.mat-snack-bar-container');
    const deleteUserPopup = page.locator('.mat-dialog-container');
    const deleteUserPopupText = page.locator('.modal-header');
    const deleteUserPopupCancelButton = page.locator('#confirm-modal-cancel');
    const deleteUserPopupDeleteButton = page.locator('#confirm-modal-delete');
    const saveChangesButton = page.locator('#user-details-save');
    const addUserButton = page.locator('#users-list-add-user');
    const userLink = page.locator('.link-name >> nth=0');
    const statusColumnValue = page.locator('.mat-column-status >> nth=1');


    console.log('usersPageAASA Validation Of The Delete User Button');

    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/users/edit-user/717');
    await newUser.deleteUserButtonClick();
    await expect(deleteUserPopup).toBeVisible();
    await expect(deleteUserPopupText).toBeVisible();
    await expect(deleteUserPopupText).toHaveText(' Are you sure you want to delete this user?');
    await expect(deleteUserPopupCancelButton).toBeVisible();
    await expect(deleteUserPopupDeleteButton).toBeVisible();
    await newUser.removePopupCancelClick();
    await expect(deleteUserPopup).toBeHidden();
    await expect(page).toHaveURL('/users/edit-user/717');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText('Edit User');
    await expect(saveChangesButton).toBeVisible();
    await newUser.deleteUserButtonClick();
    await newUser.removePopupDeleteClick();
    await expect(deleteUserPopup).toBeHidden();
    await expect(page).toHaveURL('/users?&sort=first_name');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText('Users');
    await expect(addUserButton).toBeVisible();
    await usersPage.createdFilterClick();
    const getUserLinkValue = await userLink.textContent();
    if (!getUserLinkValue.includes('test100test AutotestUser ')) {
        await search.searchField.fill('test100testautotestuser');
        await search.searchButtonClick();
        await search.userToggleClick();
    }
    await expect(statusColumnValue).toHaveText('Deactivated');
    await usersPage.threeDotsMenuReactivateButtonClick();
});


// test.afterEach(async ({ page }) => {
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
// });





//await page.frameLocator('.messagedata-iframe').locator('.mail-btn').click({modifiers: ['Meta']});



//const autologout = ['console.log(helloWorld)']
// page.on("console", (message) => {
//     autologout.push(message.text())
// })
// console.log(autologout)

