import { test , expect, webkit, chromium, Browser, BrowserContext, Page } from '@playwright/test'
import { UserBar, Users } from '../framework'
import { Search } from '../framework'
import { SignInPage } from '../framework'
import { SideBar } from '../framework'
import { TemplatesPage } from '../framework'
import { NewEditCopyTemplatePage } from '../framework'
import { ViewTemplatePage } from '../framework'
import { ContractsPage } from '../framework'
import { NewEditContractPage } from '../framework'
import { ViewContract } from '../framework'
import { EndUserPage } from '../framework'
import { Helpers } from '../lib/helpers/randomCharactersAndDigits.preload'





test.beforeEach(async ({ page }, testInfo) => {
    await page.goto('');
});


test('checkingThatProductNameIsOnlyDisplayedInTheContractFeeDropDown @regClickTractsMedium @previewTemplatePage @paytracts', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const templatesPage = new TemplatesPage(page);
    const viewTemplate = new ViewTemplatePage(page);
    const templateName = page.locator('.template-name-column-link >> nth=0');
    const pageTitle = page.locator('.section__title');
    const tooltip = page.locator('.mat-tooltip');
    const payTractsPanel = page.locator('app-contract-template-details-paytracts');
    const payTractsPanelToggle = page.locator('#form-control-is_paytracts input');
    const payTractsPanelHover = page.locator('#paytracts-toggle');
    const payTractsPanelPaymentProductsList = page.locator('.payment-products__list');
    const payTractsContractFeeText = page.locator("//div[contains(@class,'flx-col flx-end')]");
    const payTractsUpdatePlanButton = page.locator('#template-detail-update-plan');
    const paytractsPanelIicon = page.locator('#template-detail-paytracts-info');
    const paytractsPanelIiconTooltip = page.locator('app-contract-template-details-paytracts .popup-informer__content');
    const refreshIcon = page.locator('#template-detail-paytracts-refresh-icon');
    const refreshCircle = page.locator('app-contract-template-details-paytracts mat-spinner');
    const product0 = page.locator('.payment-products__item >> nth=0');
    const product0Number = page.locator('.payment-products__item .number-column >> nth=0');
    const product0Price = page.locator('.payment-products__item .left-column >> nth=0');
    const product0Name = page.locator('.payment-products__item .right-column >> nth=0');

    const product1 = page.locator('.payment-products__item >> nth=1');
    const product1Number = page.locator('.payment-products__item .number-column >> nth=1');
    const product1Price = page.locator('.payment-products__item .left-column >> nth=1');
    const product1Name = page.locator('.payment-products__item .right-column >> nth=1');
    const templateBodyPaytractsVariable0 = page.locator('[name="paytracts-contract-fee"] >> nth=0');
    const templateBodyPaytractsVariable1 = page.locator('[name="paytracts-contract-fee"] >> nth=1');
    const templateBodyPaytractsVariable2 = page.locator('[name="paytracts-contract-fee"] >> nth=2');
    const addButton = page.locator('#template-detail-paytracts-add2');
    const connectButton = page.locator('#template-detail-paytracts-connect');
    const connectStripePopup = page.locator('connect-paytracts');
    const editTemplateButton = page.locator('#template-view-edit-template');
    const createContractButton = page.locator('#template-view-create-contract');
    const exportButton = page.locator('#template-view-export');
    const templateArea = page.locator('#content-area');
    const templateAreaContent = page.locator('#content-area .contract-content');
    const templateAreaSignForm = page.locator('#content-area .user-sign-form');
    const editVariablesPanel = page.locator('.contract-values-wrapper');
    const inputTextVariable = page.locator('[name="elementName_1"] >> nth=0');

    const signerInputText = page.locator('[name="elementName_14"] input >> nth=0');
    const signerInputDate = page.locator('[name="elementName_15"] input >> nth=0');
    const signerInputNumber = page.locator('[name="elementName_16"] input >> nth=0');
    const signerInputUrl = page.locator('[name="elementName_17"] input >> nth=0');
    const signerListText = page.locator('[name="elementName_18"] select >> nth=0');
    const signerListTextOption = page.locator('[name="elementName_18"] select option >> nth=0');
    const signerListDate = page.locator('[name="elementName_19"] select >> nth=0');
    const signerListDateOption = page.locator('[name="elementName_19"] select option >> nth=0');

    const signerListNumber = page.locator('[name="elementName_20"] select >> nth=0');
    const signerListNumberOption = page.locator('[name="elementName_20"] select option >> nth=0');
    const signerListUrl = page.locator('[name="elementName_21"] select >> nth=0');
    const signerListUrlOption = page.locator('[name="elementName_21"] select option >> nth=0');

    const checkboxNestedListTextVariable = page.locator('[for="elementName_22"]');
    const miltipleChoiceNestedListTextVariable = page.locator('[for="elementName_24-0"]');

    const textareaVariable = page.locator('[name="elementName_6"]');
    const listTextNestedVariable = page.locator('.checkbox-variable [name="elementName_7"]');


    const contractConfigurator = page.locator('#contract-values-configurator');

    const newVariableBtton = page.locator('#variables-list-add-new-variable');

    const collapsedVariable0 = page.locator('#configurator-variable-elementName_7');
    const collapsedVariable0Collapsed = page.locator('#configurator-variable-elementName_7 mat-expansion-panel-header');
    const collapsedVariable1 = page.locator('#configurator-variable-elementName_3');
    const collapsedVariable1Collapsed = page.locator('#configurator-variable-elementName_3 mat-expansion-panel-header');
    const collapsedVariable2 = page.locator('#configurator-variable-elementName_11');
    const collapsedVariable2Collapsed = page.locator('#configurator-variable-elementName_11 mat-expansion-panel-header');
    const multipleChoiceCheckboxVariable = page.locator('[name="elementName_13"] >> nth=0');
    const multipleChoiceCheckboxVariable0Value = page.locator('#elementName_13-0');
    const multipleChoiceCheckboxVariable0Text = page.locator('[for="elementName_13-0"]');
    const multipleChoiceCheckboxVariable1Value = page.locator('#elementName_13-1');
    const multipleChoiceCheckboxVariable1Text = page.locator('[for="elementName_13-1"]');
    const multipleChoiceCheckboxVariable2Value = page.locator('#elementName_13-2');
    const multipleChoiceCheckboxVariable2Text = page.locator('[for="elementName_13-2"]');

    const multipleChoiceRadioButtonVariable = page.locator('[name="elementName_12"] >> nth=0');
    const multipleChoiceRadioButtonVariable0Value = page.locator('#elementName_12-none');
    const multipleChoiceRadioButtonVariable0Text = page.locator('[for="elementName_12-none"]');
    const multipleChoiceRadioButtonVariable1Value = page.locator('#elementName_12-0');
    const multipleChoiceRadioButtonVariable1Text = page.locator('[for="elementName_12-0"]');
    const multipleChoiceRadioButtonVariable2Value = page.locator('#elementName_12-1');
    const multipleChoiceRadioButtonVariable2Text = page.locator('[for="elementName_12-1"]');
    const multipleChoiceRadioButtonVariable3Value = page.locator('#elementName_12-2');
    const multipleChoiceRadioButtonVariable3Text = page.locator('[for="elementName_12-2"]');

    const editButton = page.locator('#template-view-edit-template');
    const contractTitleField = page.locator('#form-control-title');
    const newTemplateCreateContractButton = page.locator('#template-detail-create-contract');
    const saveAndGenerateLinkButton = page.locator('#contract-detail-save-and-generate');
    const paytractsBlock = page.locator('.paytracts-product');
    const paytractsDropDown = page.locator('.paytracts-product mat-select');
    const paytractsDropDownValue0 = page.locator('mat-option >> text= 1 USD Recurring 1 months (product_ new) ');
    const paytractsDropDownValue1 = page.locator('mat-option >> text= 99 USD One time (Test AK product) ');


    console.log('previewTemplatePage Checking That Product Name Is Only Displayed In The Contract Fee Drop Down');
    await users.AAForEnduser();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    // await page.goto('/contract-template/create');
    await page.goto('/contract-template/clone/3500');
    await page.waitForSelector('[name="elementName_1"] >> nth=0');
    await newTemplate.templateTitleFieldFill(Helpers.generateRandomString());
    // await newTemplate.textEditorField.type('test100test \n \n \n');
    // await newTemplate.selectCategoryName();
    // await newTemplate.publishToggleClick();
    await newTemplate.saveButtonClick();
    await expect(paytractsBlock).toBeVisible();
    await expect(paytractsDropDown).toBeVisible();
    await expect(paytractsDropDownValue0).toBeHidden();
    await expect(paytractsDropDownValue1).toBeHidden();
    await paytractsDropDown.click();
    if (paytractsDropDownValue1.isHidden()) {
        await paytractsDropDown.click();
    }
    await expect(paytractsDropDownValue0).toBeVisible();
    await expect(paytractsDropDownValue1).toBeVisible();



    // await page.goto('/contract-templates/list?&sort=-updated_at');
    // const templateNameValue0 = await templateName.innerText();
    // if (templateNameValue0.includes('autotest'))
    // {
    //     await templateName.click();
    // }
});





test.afterEach(async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const templatesPage = new TemplatesPage(page);
    const editTemplate = new NewEditCopyTemplatePage(page);
    const templateName = page.locator('.template-name-column-link >> nth=0');
    const changeStatusPopup = page.locator('.modal-header >> text=You must first change the Template status');
    await page.goto('');
    if (await page.locator('#login-sign-in').isVisible())
    {
        await users.AA();
        await signIn.signInButton();
        await page.waitForURL('/dashboard');
    }
    await userBar.logOutAction();
    await users.AAForEnduser();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValueSA = await templateName.innerText();
        if (templateNameValueSA.includes('autotest'))
        {
            await page.waitForTimeout(500);
            await templatesPage.threeDotsMenuDeleteButtonClick();
            await page.waitForTimeout(500);
                if (await changeStatusPopup.isHidden()) {
                    await page.waitForTimeout(500);
                    await templatesPage.deletePopupDeleteButtonClick();
                }
                else if (await changeStatusPopup.isVisible()) {
                    await page.locator('#confirm-modal-cancel').click();
                    await templatesPage.threeDotsMenuEditButtonClick();
                    await editTemplate.draftToggleClick();
                    await editTemplate.saveButtonClick();
                    await page.goto('/contract-templates/list?&sort=-updated_at');
                    await page.waitForTimeout(500);
                    await templatesPage.threeDotsMenuDeleteButtonClick();
                    await page.waitForTimeout(500);
                    await templatesPage.deletePopupDeleteButtonClick();
                }
        }
        else if (templateNameValueSA.includes('autotest'))
        {
            await page.waitForTimeout(500);
            await templatesPage.threeDotsMenuDeleteButtonClick();
            await page.waitForTimeout(500);
                if (await changeStatusPopup.isHidden()) {
                    await page.waitForTimeout(500);
                    await templatesPage.deletePopupDeleteButtonClick();
                }
                else if (await changeStatusPopup.isVisible()) {
                    await page.locator('#confirm-modal-cancel').click();
                    await templatesPage.threeDotsMenuEditButtonClick();
                    await editTemplate.draftToggleClick();
                    await editTemplate.saveButtonClick();
                    await page.goto('/contract-templates/list?&sort=-updated_at');
                    await page.waitForTimeout(500);
                    await templatesPage.threeDotsMenuDeleteButtonClick();
                    await page.waitForTimeout(500);
                    await templatesPage.deletePopupDeleteButtonClick();
                }
        }
        else if (templateNameValueSA.includes('autotest'))
        {
            await page.waitForTimeout(500);
            await templatesPage.threeDotsMenuDeleteButtonClick();
            await page.waitForTimeout(500);
                if (await changeStatusPopup.isHidden()) {
                    await page.waitForTimeout(500);
                    await templatesPage.deletePopupDeleteButtonClick();
                }
                else if (await changeStatusPopup.isVisible()) {
                    await page.locator('#confirm-modal-cancel').click();
                    await templatesPage.threeDotsMenuEditButtonClick();
                    await editTemplate.draftToggleClick();
                    await editTemplate.saveButtonClick();
                    await page.goto('/contract-templates/list?&sort=-updated_at');
                    await page.waitForTimeout(500);
                    await templatesPage.threeDotsMenuDeleteButtonClick();
                    await page.waitForTimeout(500);
                    await templatesPage.deletePopupDeleteButtonClick();
                }
        }          
});



// test.afterEach(async ({ page }) => {
//     const users = new Users(page);
//     const signIn = new SignInPage(page);
//     const userBar = new UserBar(page);
//     const templatesPage = new TemplatesPage(page);
//     const editTemplate = new NewEditCopyTemplatePage(page);
//     const templateName = page.locator('.template-name-column-link >> nth=0');
//     const changeStatusPopup = page.locator('.modal-header >> text=You must first change the Template status');
//     await page.goto('');
//     if (await page.locator('#login-sign-in').isVisible())
//     {
//         await users.AA();
//         await signIn.signInButton();
//         await page.waitForURL('/dashboard');
//     }
//     await userBar.logOutAction();
//     await users.SA();
//     await signIn.signInButton();
//     await page.waitForURL('/dashboard');
//     await page.goto('/contract-templates/list?&sort=-updated_at');
//     const templateNameValueSA = await templateName.innerText();
//         if (templateNameValueSA.includes('autotest'))
//         {
//             await page.waitForTimeout(500);
//             await templatesPage.threeDotsMenuDeleteButtonClick();
//             await page.waitForTimeout(500);
//                 if (await changeStatusPopup.isHidden()) {
//                     await page.waitForTimeout(500);
//                     await templatesPage.deletePopupDeleteButtonClick();
//                 }
//                 else if (await changeStatusPopup.isVisible()) {
//                     await page.locator('#confirm-modal-cancel').click();
//                     await templatesPage.threeDotsMenuEditButtonClick();
//                     await editTemplate.draftToggleClick();
//                     await editTemplate.saveButtonClick();
//                     await page.goto('/contract-templates/list?&sort=-updated_at');
//                     await page.waitForTimeout(500);
//                     await templatesPage.threeDotsMenuDeleteButtonClick();
//                     await page.waitForTimeout(500);
//                     await templatesPage.deletePopupDeleteButtonClick();
//                 }
//         }
//         else if (templateNameValueSA.includes('autotest'))
//         {
//             await page.waitForTimeout(500);
//             await templatesPage.threeDotsMenuDeleteButtonClick();
//             await page.waitForTimeout(500);
//                 if (await changeStatusPopup.isHidden()) {
//                     await page.waitForTimeout(500);
//                     await templatesPage.deletePopupDeleteButtonClick();
//                 }
//                 else if (await changeStatusPopup.isVisible()) {
//                     await page.locator('#confirm-modal-cancel').click();
//                     await templatesPage.threeDotsMenuEditButtonClick();
//                     await editTemplate.draftToggleClick();
//                     await editTemplate.saveButtonClick();
//                     await page.goto('/contract-templates/list?&sort=-updated_at');
//                     await page.waitForTimeout(500);
//                     await templatesPage.threeDotsMenuDeleteButtonClick();
//                     await page.waitForTimeout(500);
//                     await templatesPage.deletePopupDeleteButtonClick();
//                 }
//         }
//         else if (templateNameValueSA.includes('autotest'))
//         {
//             await page.waitForTimeout(500);
//             await templatesPage.threeDotsMenuDeleteButtonClick();
//             await page.waitForTimeout(500);
//                 if (await changeStatusPopup.isHidden()) {
//                     await page.waitForTimeout(500);
//                     await templatesPage.deletePopupDeleteButtonClick();
//                 }
//                 else if (await changeStatusPopup.isVisible()) {
//                     await page.locator('#confirm-modal-cancel').click();
//                     await templatesPage.threeDotsMenuEditButtonClick();
//                     await editTemplate.draftToggleClick();
//                     await editTemplate.saveButtonClick();
//                     await page.goto('/contract-templates/list?&sort=-updated_at');
//                     await page.waitForTimeout(500);
//                     await templatesPage.threeDotsMenuDeleteButtonClick();
//                     await page.waitForTimeout(500);
//                     await templatesPage.deletePopupDeleteButtonClick();
//                 }
//         }          
// });

//await page.frameLocator('.messagedata-iframe').locator('.mail-btn').click({modifiers: ['Meta']});



//const autologout = ['console.log(helloWorld)']
// page.on("console", (message) => {
//     autologout.push(message.text())
// })
// console.log(autologout)

