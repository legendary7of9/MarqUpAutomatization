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


test('behaviorForHasAlreadyInsertedVariableAfterChangingTheContentType @regClickTractsHigh @addEditTemplate @generalCases', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const templatesPage = new TemplatesPage(page);
    const viewTemplate = new ViewTemplatePage(page);
    const variable0ContentType = page.locator('[formcontrolname="input_type"] >> nth=0');
    const optionField0 = page.locator('[placeholder="Enter option"] >> nth=0');
    const templateName = page.locator('.template-name-column-link >> nth=0');
    const threeDotsVariablesPanelOption0 = page.locator('.mat-icon-button >> nth=0');
    const variable0 = page.locator('[name="elementName_1"] >> nth=0');
    const variableContentTypeValue = page.locator('#configurator-variable-elementName_1 .rdl-variable-type-value');
    const variableLabelValue = page.locator('#configurator-variable-elementName_1 mat-form-field mat-label');
    console.log('addEditTemplate Behavior For Has Already Inserted Variable After Changing The Content Type');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-template/create');
    await newTemplate.templateTitleFieldFill(Helpers.generateRandomString());
    await newTemplate.selectCategoryName();
    await newTemplate.textEditorField.type('test100testAutotest \n \n \n');
    await newTemplate.editVariablePanelOpen();
    await newTemplate.newVariableBttonClick();
    await newTemplate.listRadioButtonClick();
    await variable0ContentType.click();
    await newTemplate.listNumberVariableClick();
    await optionField0.type('567892');
    await newTemplate.editVariablePanelClose();
    await newTemplate.textEditorField.click();
    await page.waitForTimeout(500);
    await threeDotsVariablesPanelOption0.click();
    await page.waitForSelector('.action-list');
    await page.waitForTimeout(1000);
    if (await page.locator('.action-list').isHidden()) {
        await threeDotsVariablesPanelOption0.click();
        await page.waitForSelector('.action-list');
        await page.waitForTimeout(1000);
    }
    await newTemplate.threeDotsMenuVariablePanelInsertButtonClick();
    await newTemplate.publishToggleClick();
    await newTemplate.saveButtonClick();
    await variable0.click();
    await expect(variableContentTypeValue).toHaveText(' List • 1 option');
    await expect(variableLabelValue).toHaveText('number');
    await viewTemplate.editVariablesPanelClose();
    await viewTemplate.createContractButtonClick();
    await variable0.click();
    await expect(variableContentTypeValue).toHaveText(' List • 1 option');
    await expect(variableLabelValue).toHaveText('number');
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue0 = await templateName.innerText();
    if (templateNameValue0.includes('autotest')) {
        await templateName.click();
    }
    await viewTemplate.editTemplateButtonClick();
    await variable0.click();
    await newTemplate.inputRadioButtonClick();
    await variable0ContentType.click();
    await newTemplate.inputTextVariableClick();
    await newTemplate.editVariablePanelClose();
    await newTemplate.saveButtonClick();
    await variable0.click();
    await expect(variableContentTypeValue).toHaveText(' Input • text');
    await expect(variableLabelValue).toHaveText('text');
    await viewTemplate.editVariablesPanelClose();
    await viewTemplate.createContractButtonClick();
    await variable0.click();
    await expect(variableContentTypeValue).toHaveText(' Input • text');
    await expect(variableLabelValue).toHaveText('text');
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue1 = await templateName.innerText();
    if (templateNameValue1.includes('autotest'))
    {
        await templateName.click();
        await viewTemplate.editTemplateButtonClick();
        await newTemplate.draftToggleClick();
        await newTemplate.saveButtonClick();
        await page.goto('/contract-templates/list?&sort=-updated_at');
        await templatesPage.threeDotsMenuDeleteButtonClick();
        await templatesPage.deletePopupDeleteButtonClick();
    }
    await page.goto('');
});


// test.skip(browserName === 'chromium');


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

