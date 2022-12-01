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
import { Helpers } from '../lib/helpers/randomCharactersAndDigits.preload'





test.beforeEach(async ({ page }, testInfo) => {
    await page.goto('');
});


test('displaying/NotDisplayingTheAlertIcon @regClickTractsHigh @addEditContract @generalCases', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const newContract = new NewEditContractPage(page);
    const viewTemplate = new ViewTemplatePage(page);
    const viewContract = new ViewContract(page);
    const contracts = new ContractsPage(page);
    const templatesPage = new TemplatesPage(page);
    const templateName = page.locator('.template-name-column-link >> nth=0');
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const alertIcon = page.locator('.warning-icon');
    console.log('addEditContract Displaying/Not Displaying The Alert Icon');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-template/create');
    await newTemplate.templateTitleFieldFill(Helpers.generateRandomString());
    await newTemplate.selectCategoryName();
    await newTemplate.textEditorField.type('test100test');
    await newTemplate.publishToggleClick();
    await newTemplate.createContractButtonClick();
    await newContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.contractDescriptionTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.publishToggleClick();
    await newContract.saveAndGenerateLinkButtonClick();
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue0 = await templateName.innerText();
    if (templateNameValue0.includes('autotest'))
    {
        await templateName.click();
    }
    await viewTemplate.editTemplateButtonClick();
    await newTemplate.textEditorField.type('test100test100test');
    await newTemplate.saveButtonClick();
    await page.goto('/contracts/list?&sort=-created_at');
    const contractNameValue0 = await contractName.innerText();
    if (contractNameValue0.includes('autotest'))
    {
        await contractName.click();
    }
    await expect(alertIcon).toBeHidden();
    await viewContract.backToDraftButtonClick();
    await newContract.saveButtonClick();
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue1 = await templateName.innerText();
    if (templateNameValue1.includes('autotest'))
    {
        await templateName.click();
    }
    await viewTemplate.editTemplateButtonClick();
    await newTemplate.textEditorField.type('test100test');
    await newTemplate.draftToggleClick();
    await newTemplate.saveButtonClick();
    await page.goto('/contracts/list?&sort=-created_at');
    const contractNameValue1 = await contractName.innerText();
    if (contractNameValue1.includes('autotest'))
    {
        await contractName.click();
    }
    await expect(alertIcon).toBeHidden();
    await newContract.saveButtonClick();
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue2 = await templateName.innerText();
    if (templateNameValue2.includes('autotest'))
    {
        await templateName.click();
    }
    await viewTemplate.editTemplateButtonClick();
    await newTemplate.textEditorField.type('test100test100test');
    await newTemplate.publishToggleClick();
    await newTemplate.saveButtonClick();
    await page.goto('/contracts/list?&sort=-created_at');
    const contractNameValue2 = await contractName.innerText();
    if (contractNameValue2.includes('autotest'))
    {
        await contractName.click();
    }
    await expect(alertIcon).toBeVisible();
    await userBar.logOutAction();
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    const contractNameValueSA = await contractName.innerText();
    if (contractNameValueSA.includes('autotest'))
    {
        await contractName.click();
    }
    await expect(alertIcon).toBeHidden();
    await userBar.logOutAction();
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    const contractNameValue3 = await contractName.innerText();
    if (contractNameValue3.includes('autotest'))
    {
        await contractName.click();
    }
    await expect(alertIcon).toBeVisible();
    await newContract.alertIconClick();
    await newContract.alertIconPopupDoNotShowCheckboxClick();
    await newContract.alertIconPopupApplyButtonClickCheckboxChecked();
    await expect(alertIcon).toBeHidden();
    await newContract.saveButtonClick();
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue3 = await templateName.innerText();
    if (templateNameValue3.includes('autotest'))
    {
        await templateName.click();
    }
    await viewTemplate.editTemplateButtonClick();
    await newTemplate.textEditorField.type('test100test100test100test');
    await newTemplate.publishToggleClick();
    await newTemplate.saveButtonClick();
    await page.goto('/contracts/list?&sort=-created_at');
    const contractNameValue4 = await contractName.innerText();
    if (contractNameValue4.includes('autotest'))
    {
        await contractName.click();
    }
    await expect(alertIcon).toBeHidden();
    await newContract.saveButtonClick();
    const contractNameValue5 = await contractName.innerText();
    if (contractNameValue5.includes('autotest'))
    {
        await contracts.rightArrowClick();
        await contracts.threeDotsMenuDeleteButtonClick();
        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    }
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue4 = await templateName.innerText();
    if (templateNameValue4.includes('autotest'))
    {
        await templateName.click();
        await viewTemplate.editTemplateButtonClick();
        await newTemplate.draftToggleClick();
        await newTemplate.saveButtonClick();
        await page.goto('/contract-templates/list?&sort=-updated_at');
        await templatesPage.threeDotsMenuDeleteButtonClick();
        await templatesPage.deletePopupDeleteButtonClick();
    }
});


// await page.goto('/contract-template/edit/2354');
// await page.goto('/contract-template/create');
// await page.goto('/contract-template/edit/2968');




// const systemAlert0 = await page.$('#sidebar-dashboard');
// page.on('dialog', (dialog) => {
//     const messageValue = dialog.message();
//     // console.log('Default Value: ' + dialog.defaultValue());
//     // console.log('Type: ' + dialog.type());
//     expect(messageValue).toMatch('This page is asking you to confirm that you want to leave - data you have entered may not be saved.');
//     const alertType = dialog.type();
//     dialog.dismiss();
// })
// await systemAlert0?.click();

    // await page.locator('#configurator-variable-5').click();
    // await page.locator('[name="paytracts-contract-fee"]').scrollIntoViewIfNeeded();
    // await page.locator('[name="elementName_1"] >> nth=0').scrollIntoViewIfNeeded();
    // expect(await page.locator('[role="textbox"]').evaluate(() => window.onscroll))

    // console.log(await page.locator('[role="textbox"]').evaluate(() => window.onscroll));


    // const [result] = await Promise.all([
    //     page.waitForFunction(() => console.log(page.locator('[role="textbox"]').evaluate(() => window.onscroll))),
    //     page.locator('#configurator-variable-5').click()
    //   ]);
    //   console.log(result);

    //   const ti = await page.locator('[role="textbox"]').evaluate(() => window.onscroll) {
        
    //   }

    //   const result = await page.locator('[role="textbox"]').evaluate(() => window.onscroll)) {
    //     return Promise.resolve(x * y);
    //   }, [7, 8]);
    //   console.log(result);


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

