import { test , expect, webkit, chromium, Browser, BrowserContext, Page } from '@playwright/test'
import { UserBar, Users } from '../../framework'
import { Search } from '../../framework'
import { SignInPage } from '../../framework'
import { SideBar } from '../../framework'
import { TemplatesPage } from '../../framework'
import { NewEditCopyTemplatePage } from '../../framework'
import { ViewTemplatePage } from '../../framework'
import { ContractsPage } from '../../framework'
import { NewEditContractPage } from '../../framework'
import { ViewContract } from '../../framework'
import { Helpers } from '../../lib/helpers/randomCharactersAndDigits.preload'



// 34 failed
// [webkit] › specs\reg\addEditContract.spec.ts:18:1 › displaying/NotDisplayingTheAlertIcon @regClickTractsHigh @addEditContract @generalCases 
// [webkit] › specs\reg\addEditContract.spec.ts:293:1 › displayingItemsInTheWarningPopup @regClickTractsMedium @addEditContract @generalCases 
// [webkit] › specs\reg\addEditContract.spec.ts:968:1 › checkingSwitchesBetweenStatuses/Iicon @regClickTractsMedium @addEditContract @generalCases 
// [webkit] › specs\reg\addEditContract.spec.ts:1123:1 › displayingTheVariableName @regClickTractsMedium @addEditContract @generalCases 
// [webkit] › specs\reg\addEditContract.spec.ts:1220:1 › hoveringTheVaariables @regClickTractsLow @addEditContract @generalCases 
// [webkit] › specs\reg\addEditContract.spec.ts:1320:1 › validationOfTheSaveButtonWarningFunctionality @regClickTractsHigh @addEditContract @generalCases 
// [webkit] › specs\reg\addEditContract.spec.ts:3677:1 › checkingDeletingTheNestedWithSavingTheContract @regClickTractsLow @addEditContract @variables @VariablesPanelTextarea 
// [webkit] › specs\reg\addEditContract.spec.ts:3842:1 › behaviorForInput/ListTextareaVariableWarningPopup @regClickTractsHigh @addEditContract @variables @variablesPanelTextarea 
// [webkit] › specs\reg\addEditContract.spec.ts:4528:1 › behaviorForInput/ListSignerVariableWarningPopup @regClickTractsHigh @addEditContract @variables @variablesPanelSignerVariables 
// [chrome] › specs\reg\addEditContract.spec.ts:18:1 › displaying/NotDisplayingTheAlertIcon @regClickTractsHigh @addEditContract @generalCases 
// [chrome] › specs\reg\addEditContract.spec.ts:164:1 › checkingHoveringTheAlertIcon @regClickTractsLow @addEditContract @generalCases 
// [chrome] › specs\reg\addEditContract.spec.ts:230:1 › validationOfTheAlertIcon @regClickTractsHigh @addEditContract @generalCases 
// [chrome] › specs\reg\addEditContract.spec.ts:293:1 › displayingItemsInTheWarningPopup @regClickTractsMedium @addEditContract @generalCases 
// [chrome] › specs\reg\addEditContract.spec.ts:369:1 › validationOfTheTemplateHyperlinkInTheWarningPopup @regClickTractsMedium @addEditContract @generalCases 
// [chrome] › specs\reg\addEditContract.spec.ts:447:1 › validationOfTheDoNotShowAgainCheckbox @regClickTractsLow @addEditContract @generalCases 
// [chrome] › specs\reg\addEditContract.spec.ts:632:1 › validationOfTheCancelButtonAlertPopup @regClickTractsLow @addEditContract @generalCases 
// [chrome] › specs\reg\addEditContract.spec.ts:700:1 › validationForTheContractTitleInputField @regClickTractsMedium @addEditContract @generalCases 
// [chrome] › specs\reg\addEditContract.spec.ts:798:1 › displaying/ValidationOfTheNotificationsField @regClickTractsLow @addEditContract @generalCases 
// [chrome] › specs\reg\addEditContract.spec.ts:930:1 › notificationsFieldSuggestionsPopup/Tooltip @regClickTractsLow @addEditContract @generalCases 
// [chrome] › specs\reg\addEditContract.spec.ts:968:1 › checkingSwitchesBetweenStatuses/Iicon @regClickTractsMedium @addEditContract @generalCases 
// [chrome] › specs\reg\addEditContract.spec.ts:1123:1 › displayingTheVariableName @regClickTractsMedium @addEditContract @generalCases 
// [chrome] › specs\reg\addEditContract.spec.ts:1320:1 › validationOfTheSaveButtonWarningFunctionality @regClickTractsHigh @addEditContract @generalCases 
// [chrome] › specs\reg\addEditContract.spec.ts:1547:1 › validationOfTheSaveAndGenerateLinkButtonWarningFunctionality @regClickTractsHigh @addEditContract @generalCases 
// [chrome] › specs\reg\addEditContract.spec.ts:1914:1 › validationOfTheSaveAndSubmitButtonWarningFunctionality @regClickTractsHigh @addEditContract @generalCases 
// [chrome] › specs\reg\addEditContract.spec.ts:2125:1 › validationOfThePreviewContractButtonWarningFunctional @regClickTractsHigh @addEditContract @generalCases 
// [chrome] › specs\reg\addEditContract.spec.ts:2222:1 › validationOfThePreviewButtonWhenTemplateAndContractEdited @regClickTractsHigh @addEditContract @generalCases 
// [chrome] › specs\reg\addEditContract.spec.ts:2342:1 › editDraftContractByAUCreatedByAAApprovalRequired @regClickTractsHigh @addEditContract @generalCases 
// [chrome] › specs\reg\addEditContract.spec.ts:2391:1 › savingByAUinTheDraftStatusAfterAAReject @regClickTractsHigh @addEditContract @generalCases 
// [chrome] › specs\reg\addEditContract.spec.ts:2536:1 › displayingACorrectImage @regClickTractsMedium @addEditContract @generalCases 
// [chrome] › specs\reg\addEditContract.spec.ts:2840:1 › validationOfTheTabKey @regClickTractsMedium @addEditContract @variables @variablesPanel 
// [chrome] › specs\reg\addEditContract.spec.ts:3220:1 › checkingTheDateContentType @regClickTractsHigh @addEditContract @variables @VariablesPanelInputTypes 
// [chrome] › specs\reg\addEditContract.spec.ts:3526:1 › checkingDisplayingTheCertainVariablesInTheTextEditor @regClickTractsHigh @addEditContract @variables @VariablesPanelTextarea 
// [chrome] › specs\reg\addEditContract.spec.ts:3575:1 › behaviorOfTheVariablesDropdownWhenNoContentTypesAreAdded @regClickTractsLow @addEditContract @variables @VariablesPanelTextarea 
// [chrome] › specs\reg\addEditContract.spec.ts:3677:1 › checkingDeletingTheNestedWithSavingTheContract @regClickTractsLow @addEditContract @variables @VariablesPanelTextarea 
// 6 flaky
// [webkit] › specs\reg\addEditContract.spec.ts:2125:1 › validationOfThePreviewContractButtonWarningFunctional @regClickTractsHigh @addEditContract @generalCases 
// [webkit] › specs\reg\addEditContract.spec.ts:2775:1 › editing/Re-editingTheVariables @regClickTractsHigh @addEditContract @variables @variablesPanel 
// [chrome] › specs\reg\addEditContract.spec.ts:552:1 › validationOfTheApplyButtonAlertPopup @regClickTractsHigh @addEditContract @generalCases 
// [chrome] › specs\reg\addEditContract.spec.ts:2325:1 › displayingTheWatermarkItems @regClickTractsLow @addEditContract @generalCases 
// [chrome] › specs\reg\addEditContract.spec.ts:3821:1 › checkingTheSymbolsCounterOfTheTextEditor @regClickTractsLow @addEditContract @variables @VariablesPanelTextarea 
// [chrome] › specs\reg\addEditContract.spec.ts:4528:1 › behaviorForInput/ListSignerVariableWarningPopup @regClickTractsHigh @addEditContract @variables @variablesPanelSignerVariables 


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

test('checkingHoveringTheAlertIcon @regClickTractsLow @addEditContract @generalCases', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const newContract = new NewEditContractPage(page);
    const viewTemplate = new ViewTemplatePage(page);
    const contracts = new ContractsPage(page);
    const templatesPage = new TemplatesPage(page);
    const templateName = page.locator('.template-name-column-link >> nth=0');
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const alertIcon = page.locator('.warning-icon');
    const tooltip = page.locator('.mat-tooltip');
    console.log('addEditContract Checking Hovering The Alert Icon');
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
    await newContract.saveButtonClick();
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
    await alertIcon.hover();
    await expect(tooltip).toBeVisible();
    await expect(tooltip).toHaveText('The template for this contract has been edited, click to apply changes.');
    await page.goto('/contracts/list?&sort=-created_at');
    const contractNameValue3 = await contractName.innerText();
    if (contractNameValue3.includes('autotest'))
    {
        await contracts.rightArrowClick();
        await contracts.threeDotsMenuDeleteButtonClick();
        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    }
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue3 = await templateName.innerText();
    if (templateNameValue3.includes('autotest'))
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

test('validationOfTheAlertIcon @regClickTractsHigh @addEditContract @generalCases', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const newContract = new NewEditContractPage(page);
    const viewTemplate = new ViewTemplatePage(page);
    const contracts = new ContractsPage(page);
    const templatesPage = new TemplatesPage(page);
    const templateName = page.locator('.template-name-column-link >> nth=0');
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const alertIconPopup = page.locator('app-warning-contract-update-by-template');
    console.log('addEditContract Validation Of The Alert Icon');
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
    await newContract.saveButtonClick();
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
    await newContract.alertIconClick();
    await expect(alertIconPopup).toBeVisible();
    await page.goto('/contracts/list?&sort=-created_at');
    const contractNameValue3 = await contractName.innerText();
    if (contractNameValue3.includes('autotest'))
    {
        await contracts.rightArrowClick();
        await contracts.threeDotsMenuDeleteButtonClick();
        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    }
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue3 = await templateName.innerText();
    if (templateNameValue3.includes('autotest'))
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

test('displayingItemsInTheWarningPopup @regClickTractsMedium @addEditContract @generalCases', async ({ page, browserName}) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const newContract = new NewEditContractPage(page);
    const viewTemplate = new ViewTemplatePage(page);
    const contracts = new ContractsPage(page);
    const templatesPage = new TemplatesPage(page);
    const templateName = page.locator('.template-name-column-link >> nth=0');
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const alertIconPopupIcon = page.locator('app-warning-contract-update-by-template .modal-header svg');
    const alertIconPopupText0 = page.locator('app-warning-contract-update-by-template .warning-text-1');
    const alertIconPopupText1 = page.locator('app-warning-contract-update-by-template .warning-text-2');
    const alertIconPopupDoNotShowCheckbox = page.locator('#confirm-create-deal-do-not-show-again'); //to be refactored
    const alertIconPopupApplyButton = page.locator('#copy-link-copy-link'); //to be refactored
    const alertIconPopupCancelButton = page.locator('#copy-link-cancel'); //to be refactored
    console.log('addEditContract Displaying Items In The Warning Popup');
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
    await newContract.saveButtonClick();
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
    await newContract.alertIconClick();
    await expect(alertIconPopupIcon).toBeVisible();
    await expect(alertIconPopupText0).toBeVisible();
    await expect(alertIconPopupText0).toHaveText("The Template for this Contract has been edited. Click ‘Apply’ to apply the changes to your draft and continue editing. Click ‘Cancel’ to ignore the changes and continue editing. ");
    await expect(alertIconPopupText1).toBeVisible();
    await expect(alertIconPopupText1).toHaveText('Caution: Data entered into variables may be lost depending on the changes to the Template.');
    await expect(alertIconPopupDoNotShowCheckbox).toBeVisible();
    await expect(alertIconPopupApplyButton).toBeVisible();
    await expect(alertIconPopupCancelButton).toBeVisible();
    await page.goto('/contracts/list?&sort=-created_at');
    const contractNameValue3 = await contractName.innerText();
    if (contractNameValue3.includes('autotest'))
    {
        await contracts.rightArrowClick();
        await contracts.threeDotsMenuDeleteButtonClick();
        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    }
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue3 = await templateName.innerText();
    if (templateNameValue3.includes('autotest'))
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

test('validationOfTheTemplateHyperlinkInTheWarningPopup @regClickTractsMedium @addEditContract @generalCases', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const newContract = new NewEditContractPage(page);
    const viewTemplate = new ViewTemplatePage(page);
    const contracts = new ContractsPage(page);
    const templatesPage = new TemplatesPage(page);
    const templateName = page.locator('.template-name-column-link >> nth=0');
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const theTemplateTextHyperlink = page.locator('.warning-text-1 a');
    console.log('addEditContract Validation Of The Template Hyperlink In The Warning Popup');
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
    await newContract.saveButtonClick();
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
    await newContract.alertIconClick();
    await expect(theTemplateTextHyperlink).toBeVisible();
    await expect(theTemplateTextHyperlink).toHaveText('The Template');
    const getTheTextLinkValue = await theTemplateTextHyperlink.getAttribute('href');
    await expect(getTheTextLinkValue).toContain('/contract-template/');
    await theTemplateTextHyperlink.click();
    const [page2] = await Promise.all([
        page.waitForEvent('popup'),
    ]);
    await page2.waitForLoadState();
    await expect(page2.url()).toContain('/contract-template/');
    const pageTitle = page2.locator('.section__title');
    const createContractButton = page2.locator('#template-view-create-contract');
    await expect(pageTitle).toHaveText('View Template');
    await expect(createContractButton).toBeVisible();
    await page2.close();
    await page.goto('/contracts/list?&sort=-created_at');
    const contractNameValue3 = await contractName.innerText();
    if (contractNameValue3.includes('autotest'))
    {
        await contracts.rightArrowClick();
        await contracts.threeDotsMenuDeleteButtonClick();
        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    }
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue3 = await templateName.innerText();
    if (templateNameValue3.includes('autotest'))
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

test('validationOfTheDoNotShowAgainCheckbox @regClickTractsLow @addEditContract @generalCases', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const newContract = new NewEditContractPage(page);
    const viewTemplate = new ViewTemplatePage(page);
    const contracts = new ContractsPage(page);
    const templatesPage = new TemplatesPage(page);
    const templateName = page.locator('.template-name-column-link >> nth=0');
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const alertIcon = page.locator('.warning-icon');
    console.log('addEditContract Validation Of The Do Not Show Again Checkbox');
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
    await newContract.saveButtonClick();
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
    await newContract.alertIconClick();
    await newContract.alertIconPopupDoNotShowCheckboxClick();
    await newContract.alertIconPopupCancelButtonClick();
    await expect(alertIcon).toBeHidden();
    await newContract.saveButtonClick();
    const contractNameValue1 = await contractName.innerText();
    if (contractNameValue1.includes('autotest'))
    {
        await contractName.click();
    }
    await expect(alertIcon).toBeHidden();
    await userBar.logOutAction();
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/contracts/list?&sort=-created_at');
    const contractNameValue3 = await contractName.innerText();
    if (contractNameValue3.includes('autotest'))
    {
        await contractName.click();
    }
    await expect(alertIcon).toBeVisible();
    await userBar.logOutAction();
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue1 = await templateName.innerText();
    if (templateNameValue1.includes('autotest'))
    {
        await templateName.click();
    }
    await viewTemplate.editTemplateButtonClick();
    await newTemplate.textEditorField.type('test100test');
    await newTemplate.saveButtonClick();
    await page.goto('/contracts/list?&sort=-created_at');
    const contractNameValue4 = await contractName.innerText();
    if (contractNameValue4.includes('autotest'))
    {
        await contractName.click();
    }
    await expect(alertIcon).toBeVisible();
    await page.goto('/contracts/list?&sort=-created_at');
    const contractNameValue5 = await contractName.innerText();
    if (contractNameValue5.includes('autotest'))
    {
        await contracts.rightArrowClick();
        await contracts.threeDotsMenuDeleteButtonClick();
        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    }
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue3 = await templateName.innerText();
    if (templateNameValue3.includes('autotest'))
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

test('validationOfTheApplyButtonAlertPopup @regClickTractsHigh @addEditContract @generalCases', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const newContract = new NewEditContractPage(page);
    const viewTemplate = new ViewTemplatePage(page);
    const contracts = new ContractsPage(page);
    const templatesPage = new TemplatesPage(page);
    const templateName = page.locator('.template-name-column-link >> nth=0');
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const textEditorField = page.locator('[role="textbox"] >> nth=0');
    const p0 = page.locator('p >> nth=0');
    const p1 = page.locator('p >> nth=1');
    const p2 = page.locator('p >> nth=2');
    console.log('addEditContract Validation Of The Apply Button Alert Popup');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-template/create');
    await newTemplate.templateTitleFieldFill(Helpers.generateRandomString());
    await newTemplate.selectCategoryName();
    await newTemplate.textEditorField.type('test100test \n test100test');
    await newTemplate.publishToggleClick();
    await newTemplate.createContractButtonClick();
    await newContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.contractDescriptionTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.saveButtonClick();
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue0 = await templateName.innerText();
    if (templateNameValue0.includes('autotest'))
    {
        await templateName.click();
    }
    await viewTemplate.editTemplateButtonClick();
    await textEditorField.click();
    await page.keyboard.press('Meta+A')
    await newTemplate.textEditorField.fill('');
    await newTemplate.textEditorField.type('test100test \n test100test \n test100test');
    await newTemplate.saveButtonClick();
    await page.goto('/contracts/list?&sort=-created_at');
    const contractNameValue0 = await contractName.innerText();
    if (contractNameValue0.includes('autotest'))
    {
        await contractName.click();
    }
    await expect(p0).toBeVisible();
    await expect(p0).toHaveText('test100test');
    await expect(p1).toBeVisible();
    await expect(p1).toHaveText('test100test');
    await expect(p2).toBeHidden();
    await newContract.alertIconClick();
    await newContract.alertIconPopupApplyButtonClickCheckboxNotChecked();
    await expect(p0).toBeVisible();
    await expect(p0).toHaveText('test100test');
    await expect(p1).toBeVisible();
    await expect(p1).toHaveText('test100test');
    await expect(p2).toBeVisible();
    await expect(p2).toHaveText('test100test');
    await page.goto('/contracts/list?&sort=-created_at');
    const contractNameValue5 = await contractName.innerText();
    if (contractNameValue5.includes('autotest'))
    {
        await contracts.rightArrowClick();
        await contracts.threeDotsMenuDeleteButtonClick();
        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    }
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue3 = await templateName.innerText();
    if (templateNameValue3.includes('autotest'))
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

test('validationOfTheCancelButtonAlertPopup @regClickTractsLow @addEditContract @generalCases', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const newContract = new NewEditContractPage(page);
    const viewTemplate = new ViewTemplatePage(page);
    const contracts = new ContractsPage(page);
    const templatesPage = new TemplatesPage(page);
    const templateName = page.locator('.template-name-column-link >> nth=0');
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const alertIconPopup = page.locator('app-warning-contract-update-by-template');
    console.log('addEditContract Validation Of The Cancel Button Alert Popup');
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
    await newContract.saveButtonClick();
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
    await newContract.alertIconClick();
    await newContract.alertIconPopupCancelButtonClick();
    await expect(alertIconPopup).toBeHidden();
    await newContract.alertIconClick();
    await newContract.alertIconPopupXButtonClick();
    await expect(alertIconPopup).toBeHidden();
    await page.goto('/contracts/list?&sort=-created_at');
    const contractNameValue5 = await contractName.innerText();
    if (contractNameValue5.includes('autotest'))
    {
        await contracts.rightArrowClick();
        await contracts.threeDotsMenuDeleteButtonClick();
        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    }
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue3 = await templateName.innerText();
    if (templateNameValue3.includes('autotest'))
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

test('validationForTheContractTitleInputField @regClickTractsMedium @addEditContract @generalCases', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const newContract = new NewEditContractPage(page);
    const viewTemplate = new ViewTemplatePage(page);
    const templatesPage = new TemplatesPage(page);
    const templateName = page.locator('.template-name-column-link >> nth=0');
    const contractTitleField = page.locator('#form-control-title input');
    const contractTitleFieldError = page.locator('#form-control-title mat-error');
    console.log('addEditContract Validation For The Contract Title Input Field');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-template/create');
    await newTemplate.templateTitleFieldFill(Helpers.generateRandomString());
    await newTemplate.selectCategoryName();
    await newTemplate.textEditorField.type('test100test');
    await newTemplate.publishToggleClick();
    await newTemplate.createContractButtonClick();
    await expect(contractTitleField).toBeVisible();
    await newContract.contractTitleField.fill('');
    await newContract.saveButtonForErrorClick();
    await expect(contractTitleFieldError).toBeVisible();
    await expect(contractTitleFieldError).toHaveText(' Please fill in this field ');
    await newContract.contractTitleField.fill('test100testtest100testtest100testtest100testtest100testtest100test');
    await newContract.saveButtonForErrorClick();
    await expect(contractTitleFieldError).toBeVisible();
    await expect(contractTitleFieldError).toHaveText(' The contract name can be up to 60 characters ');
    await newContract.contractTitleField.fill('@£%$$%£@');
    await newContract.saveButtonForErrorClick();
    await expect(contractTitleFieldError).toBeVisible();
    await expect(contractTitleFieldError).toHaveText(' Please do not use special symbols and characters in the contract title ');
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue3 = await templateName.innerText();
    if (templateNameValue3.includes('autotest'))
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

test('validationForTheContractDescriptionInputField @regClickTractsLow @addEditContract @generalCases', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const newContract = new NewEditContractPage(page);
    const viewTemplate = new ViewTemplatePage(page);
    const templatesPage = new TemplatesPage(page);
    const templateName = page.locator('.template-name-column-link >> nth=0');
    const contractDescriptionField = page.locator('#form-control-description textarea');
    const contractDescriptionFieldError = page.locator('#form-control-description mat-error');
    console.log('addEditContract Validation For The Contract Description Input Field');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-template/create');
    await newTemplate.templateTitleFieldFill(Helpers.generateRandomString());
    await newTemplate.selectCategoryName();
    await newTemplate.textEditorField.type('test100test');
    await newTemplate.publishToggleClick();
    await newTemplate.createContractButtonClick();
    await expect(contractDescriptionField).toBeVisible();
    await newContract.contractTitleField.fill('');
    await newContract.saveButtonForErrorClick();
    await expect(contractDescriptionFieldError).toBeHidden();
    await newContract.publishToggleClick();
    await newContract.saveAndGenerateLinkButtonForErrorClick();
    await expect(contractDescriptionFieldError).toBeVisible();
    await expect(contractDescriptionFieldError).toHaveText(' Please fill in this field ');
    await newContract.contractDescriptionTitleField.fill('test100testtest100testtest100testtest100testtest100testtest100testtest100testtest100testtest100testtest100testtest100testtest100testtest100testtest100testtest100testtest100testtest100testtest100testtest100test');
    await newContract.saveAndGenerateLinkButtonForErrorClick();
    await expect(contractDescriptionFieldError).toBeVisible();
    await expect(contractDescriptionFieldError).toHaveText(' The contract description can be up to 200 characters ');
    await newContract.contractDescriptionTitleField.fill('test100test@!£!@%$@$£%£@&!');
    await newContract.saveAndGenerateLinkButtonForErrorClick();
    await expect(contractDescriptionFieldError).toBeHidden();
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue3 = await templateName.innerText();
    if (templateNameValue3.includes('autotest'))
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

test('displaying/ValidationOfTheNotificationsField @regClickTractsLow @addEditContract @generalCases', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const newContract = new NewEditContractPage(page);
    const notificationField = page.locator('#contract-details-notifications');
    const notificationFieldTextarea = page.locator('#contract-details-notifications textarea');
    const notificationFieldError = page.locator('#contract-details-notifications mat-error');
    console.log('addEditContract Displaying/Validation Of The Notifications Field');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/3258');
    await newContract.contractTitleField.fill('');
    await expect(notificationField).toBeVisible();
    await expect(notificationFieldTextarea).toBeVisible();
    await expect(notificationFieldTextarea).toHaveAttribute('maxlength', '1000');
    await expect(notificationFieldTextarea).toHaveAttribute('pattern', '([a-zA-Z0-9_.\\+-]{1,}@[a-zA-Z0-9.-]{1,}[.]{1}[a-zA-Z]{2,}[,]?[ ]?)*');
    await newContract.saveButtonForErrorClick();
    await expect(notificationFieldError).toBeHidden();
    await newContract.publishToggleClick();
    await newContract.saveAndGenerateLinkButtonForErrorClick();
    await expect(notificationFieldError).toBeHidden();
    await newContract.draftToggleClick();
    await notificationFieldTextarea.type('test100test@.com');
    await newContract.saveButtonForErrorClick();
    await expect(notificationFieldError).toBeVisible();
    await expect(notificationFieldError).toHaveText(' Please fill in this field correctly ');
    await page.goto('');
    await userBar.logOutAction();
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/contract/create/3258');
    await newContract.contractTitleField.fill('');
    await expect(notificationField).toBeVisible();
    await newContract.saveButtonForErrorClick();
    await expect(notificationFieldError).toBeHidden();
    await newContract.publishToggleClick();
    await newContract.saveAndSubmitButtonForErrorClick();
    await expect(notificationFieldError).toBeHidden();
    await newContract.draftToggleClick();
    await notificationFieldTextarea.type('test100test@.com');
    await newContract.saveButtonForErrorClick();
    await expect(notificationFieldError).toBeVisible();
    await expect(notificationFieldError).toHaveText(' Please fill in this field correctly ');
});

  //unskip when bug will be fixed - https://jira-mi/browse/MU-2251
test.skip('savingTheEmailsInTheSuggestedEmailsDropDown @regClickTractsMedium @addEditContract @generalCases', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const newContract = new NewEditContractPage(page);
    const contracts = new ContractsPage(page);
    const notificationFieldTextarea = page.locator('#contract-details-notifications textarea');
    const notificationFieldAutocompletePanel = page.locator('.mat-autocomplete-panel');
    const notificationFieldAutocompletePanelOption = page.locator('.mat-autocomplete-panel mat-option >> nth=0');
    console.log('addEditContract Saving The Emails In The Suggested Emails DropDown');
    await users.AAForSignaturesOutbound();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/2481');
    await newContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.contractDescriptionTitleFieldFillRandom(Helpers.generateRandomString());
    await notificationFieldTextarea.type(Helpers.generateRandomString() + '@maildrop.cc');
    await expect(notificationFieldAutocompletePanel).toBeHidden();
    const getNotificationsInputValue0 = await notificationFieldTextarea.inputValue();
    await newContract.saveButtonClick();
    await page.goto('/contract/create/2481');
    await notificationFieldTextarea.type(getNotificationsInputValue0);
    await notificationFieldTextarea.click();
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await expect(notificationFieldAutocompletePanel).toBeVisible();
    await expect(notificationFieldAutocompletePanelOption).toHaveText(getNotificationsInputValue0);
    await page.goto('/contracts/list?&sort=-updated_at');
    await contracts.rightArrowClick();
    await contracts.threeDotsMenuDeleteButtonClick();
    await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    await page.goto('/contract/create/2481');
    await notificationFieldTextarea.type(getNotificationsInputValue0);
    await notificationFieldTextarea.click();
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await expect(notificationFieldAutocompletePanel).toBeVisible();
    await expect(notificationFieldAutocompletePanelOption).toHaveText(getNotificationsInputValue0);
    await page.goto('/contract/create/2481');
    await newContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.contractDescriptionTitleFieldFillRandom(Helpers.generateRandomString());
    await notificationFieldTextarea.type(Helpers.generateRandomString() + '@maildrop.cc');
    await expect(notificationFieldAutocompletePanel).toBeHidden();
    const getNotificationsInputValue1 = await notificationFieldTextarea.inputValue();
    await newContract.publishToggleClick();
    await newContract.saveAndGenerateLinkButtonClick();
    await page.goto('/contract/create/2481');
    await notificationFieldTextarea.type(getNotificationsInputValue1);
    await notificationFieldTextarea.click();
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await expect(notificationFieldAutocompletePanel).toBeVisible();
    await expect(notificationFieldAutocompletePanelOption).toHaveText(getNotificationsInputValue1);
    await page.goto('/contracts/list?&sort=-updated_at');
    await contracts.rightArrowClick();
    await contracts.threeDotsMenuDeleteButtonClick();
    await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    await page.goto('/contract/create/2481');
    await notificationFieldTextarea.type(getNotificationsInputValue1);
    await notificationFieldTextarea.click();
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await expect(notificationFieldAutocompletePanel).toBeVisible();
    await expect(notificationFieldAutocompletePanelOption).toHaveText(getNotificationsInputValue1);
    await userBar.logOutAction();
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/3258');
    await notificationFieldTextarea.type(getNotificationsInputValue0);
    await notificationFieldTextarea.click();
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await expect(notificationFieldAutocompletePanel).toBeHidden();
    await notificationFieldTextarea.fill('');
    await notificationFieldTextarea.type(getNotificationsInputValue1);
    await notificationFieldTextarea.click();
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await expect(notificationFieldAutocompletePanel).toBeHidden();
});

test('notificationsFieldSuggestionsPopup/Tooltip @regClickTractsLow @addEditContract @generalCases', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const notificationFieldTextarea = page.locator('#contract-details-notifications textarea');
    const notificationFieldAutocompletePanel = page.locator('.mat-autocomplete-panel');
    const notificationFieldAutocompletePanelOption0 = page.locator('.mat-autocomplete-panel mat-option >> nth=0');
    const notificationFieldAutocompletePanelOption1 = page.locator('.mat-autocomplete-panel mat-option >> nth=1');
    const notificationFieldExampleText = page.locator('#contract-details-notifications .mat-hint');
    const tooltip = page.locator('app-contract-details-notifications .popup-informer__content');
    console.log('addEditContract Notifications Field Suggestions Popup/Tooltip');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/3258');
    await notificationFieldExampleText.hover();
    await expect(tooltip).toBeVisible();
    await expect(tooltip).toHaveText(' This list will receive notifications when the contract is Signed. ');
    await notificationFieldTextarea.type('b');
    await expect(notificationFieldAutocompletePanel).toBeVisible();
    await expect(notificationFieldAutocompletePanelOption0).toBeVisible();
    await expect(notificationFieldAutocompletePanelOption0).toHaveText(' banshchykov@gmail.com ');
    await expect(notificationFieldAutocompletePanelOption1).toBeVisible();
    await expect(notificationFieldAutocompletePanelOption1).toHaveText(' alexey.banshykov@mobindustry.net ');
    await notificationFieldAutocompletePanelOption0.click();
    await expect(notificationFieldTextarea).toHaveValue('banshchykov@gmail.com, ');
    await notificationFieldTextarea.fill('');
    await notificationFieldTextarea.type('test100test@maildrop.cc,');
    await expect(notificationFieldAutocompletePanel).toBeVisible();
    await notificationFieldTextarea.fill('');
    await notificationFieldTextarea.type('b');
    await notificationFieldAutocompletePanelOption0.click();
    await notificationFieldTextarea.type('b');
    await expect(notificationFieldAutocompletePanelOption0).toBeVisible();
    await expect(notificationFieldAutocompletePanelOption0).not.toHaveText(' banshchykov@gmail.com ');
    await expect(notificationFieldAutocompletePanelOption0).toHaveText(' alexey.banshykov@mobindustry.net ');
    await expect(notificationFieldAutocompletePanelOption1).toBeHidden();
});

test('checkingSwitchesBetweenStatuses/Iicon @regClickTractsMedium @addEditContract @generalCases', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const newContract = new NewEditContractPage(page);
    const viewTemplate = new ViewTemplatePage(page);
    const contracts = new ContractsPage(page);
    const templatesPage = new TemplatesPage(page);
    const templateName = page.locator('.template-name-column-link >> nth=0');
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const publishToggle = page.locator('#contract-detail-status-publish');
    const draftToggle = page.locator('#contract-detail-status-draft');
    const iIcon = page.locator('#contract-detail-info');
    const copyLinkIcon = page.locator('//tbody/tr[1]/td[13]/div[1]/div[2]/a[1]');
    const tooltip = page.locator('.popup-informer__content >> nth=0');
    console.log('addEditContract Checking Switches Between Statuses/Iicon');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-template/create');
    await newTemplate.templateTitleFieldFill(Helpers.generateRandomString());
    await newTemplate.selectCategoryName();
    await newTemplate.textEditorField.type('test100test');
    await newTemplate.publishToggleClick();
    await newTemplate.createContractButtonClick();
    await expect(draftToggle).toBeVisible();
    await expect(draftToggle).toHaveClass('mat-button-toggle active');
    await expect(publishToggle).toBeVisible();
    await expect(publishToggle).toHaveClass('mat-button-toggle');
    await newContract.publishToggleClick();
    await expect(draftToggle).toHaveClass('mat-button-toggle');
    await expect(publishToggle).toHaveClass('mat-button-toggle cdk-focused cdk-mouse-focused active');
    await expect(iIcon).toBeVisible();
    await iIcon.hover();
    await expect(tooltip).toBeVisible();
    await expect(tooltip).toHaveText(' Select “Publish”, then press “Save and Generate Link” to finalize the contract and share it for signatures. Use “Preview Contract” to preview the contract before publishing. ');
    await newContract.draftToggleClick();
    await newContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.contractDescriptionTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.saveButtonClick();
    await contracts.rightArrowClick();
    await expect(copyLinkIcon).toBeHidden();
    await contracts.leftArrowClick();
    const contractNameValue0 = await contractName.innerText();
    if (contractNameValue0.includes('autotest'))
    {
        await contractName.click();
    }
    await newContract.publishToggleClick();
    await newContract.saveAndGenerateLinkButtonClick();
    await page.goto('/contracts/list?&sort=-updated_at');
    await contracts.rightArrowClick();
    await expect(copyLinkIcon).toBeVisible();
    const contractNameValue1 = await contractName.innerText();
    if (contractNameValue1.includes('autotest'))
    {
        await contracts.rightArrowClick();
        await contracts.threeDotsMenuDeleteButtonClick();
        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    }
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue0 = await templateName.innerText();
    if (templateNameValue0.includes('autotest'))
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

test('displaying/ValidationOfTheEditVariablesButton @regClickTractsHigh @addEditContract @generalCases', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const newContract = new NewEditContractPage(page);
    const viewTemplate = new ViewTemplatePage(page);
    const contracts = new ContractsPage(page);
    const templatesPage = new TemplatesPage(page);
    const templateName = page.locator('.template-name-column-link >> nth=0');
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const editVariablesButton = page.locator('.contract-values-wrapper-opener');
    const editVariablesPanel = page.locator('.contract-values-wrapper');
    const p0 = page.locator('.cke_enable_context_menu p >> nth=0');
    const alertIconPopup = page.locator('app-warning-contract-update-by-template');
    console.log('addEditContract Checking Switches Between Statuses/Iicon');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-template/create');
    await newTemplate.templateTitleFieldFill(Helpers.generateRandomString());
    await newTemplate.selectCategoryName();
    await newTemplate.textEditorField.type('test100test');
    await newTemplate.publishToggleClick();
    await newTemplate.createContractButtonClick();
    await expect(editVariablesButton).toBeHidden;
    await page.goto('/contracts/list?&sort=-created_at');
    const contractNameValue0 = await contractName.innerText();
    if (contractNameValue0.includes('autotest'))
    {
        await contracts.rightArrowClick();
        await contracts.threeDotsMenuDeleteButtonClick();
        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    }
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue0 = await templateName.innerText();
    if (templateNameValue0.includes('autotest'))
    {
        await templateName.click();
        await viewTemplate.editTemplateButtonClick();
        await newTemplate.draftToggleClick();
        await newTemplate.saveButtonClick();
        await page.goto('/contract-templates/list?&sort=-updated_at');
        await templatesPage.threeDotsMenuDeleteButtonClick();
        await templatesPage.deletePopupDeleteButtonClick();
    }
    await page.goto('/contract/create/2354');
    await page.waitForTimeout(2000);
    await expect(editVariablesButton).toBeVisible();
    await expect(editVariablesPanel).toHaveClass('contract-values-wrapper ng-star-inserted');
    await newContract.editVariablesConfiguratorClick();
    await expect(editVariablesPanel).toHaveClass('contract-values-wrapper ng-star-inserted expanded');
    await newContract.editVariablesConfiguratorClick();
    await expect(editVariablesPanel).toHaveClass('contract-values-wrapper ng-star-inserted');
    await newContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.contractDescriptionTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.saveButtonClick();
    await page.goto('/contract-template/edit/2354');
    await p0.click();
    await newTemplate.textEditorField.type('1');
    await newTemplate.saveButtonClick();
    await page.goto('/contracts/list?&sort=-created_at');
    const contractNameValue1 = await contractName.innerText();
    if (contractNameValue1.includes('autotest'))
    {
        await contractName.click();
    }
    await newContract.editVariablesConfiguratorClick();
    await newContract.alertIconClick();
    await expect(editVariablesPanel).toHaveClass('contract-values-wrapper ng-star-inserted');
    await expect(alertIconPopup).toBeVisible();
    await page.goto('/contracts/list?&sort=-created_at');
    const contractNameValue2 = await contractName.innerText();
    if (contractNameValue2.includes('autotest'))
    {
        await contracts.rightArrowClick();
        await contracts.threeDotsMenuDeleteButtonClick();
        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    }
});

test('displayingTheVariableName @regClickTractsMedium @addEditContract @generalCases', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const inputType = page.locator('[name="elementName_1"] >> nth=0');
    const listType = page.locator('[name="elementName_7"] >> nth=0');
    const signerType = page.locator('[name="elementName_14"] >> nth=0');
    const signerTypeValue = page.locator('[name="elementName_14"] input >> nth=0');
    const checkoxVariable = page.locator('[name="elementName_5"] >> nth=0');
    const multipleChoiceCheckboxVariable = page.locator('.multiple-choice-checkbox >> nth=0');
    const multipleChoiceRadioButtonVariable = page.locator('.multiple-choice-radio >> nth=0');
    const signerInputText = page.locator('[name="elementName_14"] input >> nth=0');
    const signerInputDate = page.locator('[name="elementName_15"] input >> nth=1');
    const signerInputNumber = page.locator('[name="elementName_16"] input >> nth=1');
    const signerInputUrl = page.locator('[name="elementName_17"] input >> nth=0');
    const signerListText = page.locator('[name="elementName_18"] select >> nth=2');
    const signerListDate = page.locator('[name="elementName_19"] select >> nth=1');
    const signerListNumber = page.locator('[name="elementName_20"] select >> nth=1');
    const signerListUrl = page.locator('[name="elementName_21"] select >> nth=2');
    console.log('addEditContract Displaying The Variable Name');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/2354');
    await expect(inputType).toBeVisible();
    await expect(inputType).toHaveText('{{ inputText }}');
    await expect(listType).toBeVisible();
    await expect(listType).toHaveText('{{ listText }}');
    await expect(signerType).toBeVisible();
    await expect(signerTypeValue).toHaveAttribute('placeholder', 'signerInputText');
    await expect(checkoxVariable).toBeVisible();
    await expect(checkoxVariable).toHaveAttribute('disabled', '');
    await expect(checkoxVariable).toHaveText('Hi lets try to use variables');
    await expect(multipleChoiceCheckboxVariable).toBeVisible();
    await expect(multipleChoiceCheckboxVariable).toHaveAttribute('disabled', '');
    await expect(multipleChoiceCheckboxVariable).toHaveText('checkbox 1checkbox 2checkbox 3');
    await expect(multipleChoiceRadioButtonVariable).toBeVisible();
    await expect(multipleChoiceRadioButtonVariable).toHaveAttribute('disabled', '');
    await expect(multipleChoiceRadioButtonVariable).toHaveText('Noneradio button 1radio button 2radio button 3');
    await expect(signerInputText).toBeVisible();
    await expect(signerInputText).toHaveAttribute('disabled', '');
    await expect(signerInputText).toHaveAttribute('type', 'text');
    await expect(signerInputText).toHaveAttribute('placeholder', 'signerInputText');
    await expect(signerInputDate).toBeVisible();
    await expect(signerInputDate).toHaveAttribute('disabled', '');
    await expect(signerInputDate).toHaveAttribute('type', 'date');
    await expect(signerInputDate).toHaveAttribute('placeholder', 'signerInputDate');
    await expect(signerInputNumber).toBeVisible();
    await expect(signerInputNumber).toHaveAttribute('disabled', '');
    await expect(signerInputNumber).toHaveAttribute('data-type', 'number');
    await expect(signerInputNumber).toHaveAttribute('placeholder', 'signerInputNumber');
    await expect(signerInputUrl).toBeVisible();
    await expect(signerInputUrl).toHaveAttribute('disabled', '');
    await expect(signerInputUrl).toHaveAttribute('type', 'url');
    await expect(signerInputUrl).toHaveAttribute('placeholder', 'signerInputUrl');
    await expect(signerListText).toBeVisible();
    await expect(signerListText).toHaveAttribute('disabled', '');
    await expect(signerListText).toHaveAttribute('selected', '');
    await expect(signerListDate).toBeVisible();
    await expect(signerListDate).toHaveAttribute('disabled', '');
    await expect(signerListDate).toHaveAttribute('selected', '');
    await expect(signerListNumber).toBeVisible();
    await expect(signerListNumber).toHaveAttribute('disabled', '');
    await expect(signerListNumber).toHaveAttribute('selected', '');
    await expect(signerListUrl).toBeVisible();
    await expect(signerListUrl).toHaveAttribute('disabled', '');
    await expect(signerListUrl).toHaveAttribute('selected', '');
});

test('validationTheVariableName @regClickTractsHigh @addEditContract @generalCases', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const editVariablesPanel = page.locator('.contract-values-wrapper');
    const inputTextContractBody = page.locator('[name="elementName_1"] >> nth=0');
    const listTextContractBody = page.locator('[name="elementName_7"] >> nth=0');
    const inputTextEditVariablesPanel = page.locator('#configurator-variable-elementName_1 mat-expansion-panel-header');
    const listTextEditVariablesPanel = page.locator('#configurator-variable-elementName_7 mat-expansion-panel-header');
    const inputUrlNestedContractBody = page.locator('[name="elementName_4"] >> nth=1');
    const inputUrlEditVariablesPanel = page.locator('#configurator-variable-elementName_4 mat-expansion-panel-header');
    console.log('addEditContract Validation The Variable Name');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/2354');
    await page.waitForTimeout(2000);
    await inputTextContractBody.click();
    await expect(editVariablesPanel).toHaveClass('contract-values-wrapper ng-star-inserted expanded');
    await expect(inputTextEditVariablesPanel).toHaveAttribute('aria-expanded', 'true');
    await expect(listTextEditVariablesPanel).toHaveAttribute('aria-expanded', 'false');
    await listTextContractBody.click();
    await expect(inputTextEditVariablesPanel).toHaveAttribute('aria-expanded', 'false');
    await expect(listTextEditVariablesPanel).toHaveAttribute('aria-expanded', 'true');
    await newContract.editVariablesConfiguratorClick();
    await inputUrlNestedContractBody.click();
    await expect(inputUrlEditVariablesPanel).toHaveAttribute('aria-expanded', 'true');
});

test('hoveringTheVaariables @regClickTractsLow @addEditContract @generalCases', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const inputTextContractBody = page.locator('[name="elementName_1"] >> nth=0');
    const inputUrlNestedContractBody = page.locator('[name="elementName_4"] >> nth=1');
    const signerTextContractBodyHover = page.locator('[name="elementName_14"] >> nth=0');
    const signerTextContractBodyColor = page.locator('[name="elementName_14"] input >> nth=0');
    console.log('addEditContract Hovering The Vaariables');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/2354');
    await inputTextContractBody.hover();
    await expect(inputTextContractBody).toHaveCSS('color', 'rgb(79, 120, 204)');
    await inputUrlNestedContractBody.hover();
    await expect(inputUrlNestedContractBody).toHaveCSS('color', 'rgb(0, 90, 255)');
    await signerTextContractBodyHover.hover();
    await expect(signerTextContractBodyColor).toHaveCSS('color', 'rgb(84, 84, 84)');
    await page.goto('/contract/create/3316');
    await signerTextContractBodyHover.hover();
    await expect(signerTextContractBodyColor).toHaveCSS('color', 'rgb(79, 120, 204)');
});

test('validationOfTheSignerVariable @regClickTractsHigh @addEditContract @generalCases', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const editVariablesPanel = page.locator('.contract-values-wrapper');
    const signerTextVariableContractBody = page.locator('[name="elementName_14"] >> nth=0');
    const reguralVariablesTab = page.locator('#contracts-details-regular-variables-button');
    const signerVariablesTab = page.locator('#contracts-details-signer-variables-button');
    const signerGroup = page.locator('#configurator-variable-group-0');
    const signerGroupStatus = page.locator('#configurator-variable-group-0 mat-expansion-panel-header');
    const signerGroupName = page.locator('#variables-list-form-control-value-0');
    const signerGroupChooseVariables = page.locator('[placeholder="Choose variables"]');
    const signerTextVariableChooseCheckbox = page.locator('#mat-checkbox-1');
    console.log('addEditContract Validation Of The Signer Variable');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/2354');
    await signerTextVariableContractBody.click();
    await expect(editVariablesPanel).toHaveClass('contract-values-wrapper ng-star-inserted');
    await page.goto('/contract/create/3316');
    await page.waitForTimeout(2000);
    await signerTextVariableContractBody.click();
    await expect(editVariablesPanel).toHaveClass('contract-values-wrapper ng-star-inserted expanded');
    await expect(reguralVariablesTab).toHaveAttribute('aria-pressed', 'false');
    await expect(signerVariablesTab).toHaveAttribute('aria-pressed', 'true');
    await expect(signerGroup).toBeVisible();
    await expect(signerGroupStatus).toHaveAttribute('aria-expanded', 'true');
    await signerGroupName.type('test100test');
    await signerGroupChooseVariables.click();
    await signerTextVariableChooseCheckbox.click();
    await newContract.editVariablesConfiguratorClick();
    await signerTextVariableContractBody.click();
    await expect(editVariablesPanel).toHaveClass('contract-values-wrapper ng-star-inserted expanded');
    await expect(reguralVariablesTab).toHaveAttribute('aria-pressed', 'false');
    await expect(signerVariablesTab).toHaveAttribute('aria-pressed', 'true');
    await expect(signerGroup).toBeVisible();
    await expect(signerGroupStatus).toHaveAttribute('aria-expanded', 'true');
});

test('validationOfTheSaveButton @regClickTractsHigh @addEditContract @generalCases', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const contracts = new ContractsPage(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const saveButton = page.locator('#contract-detail-save');
    const contractTitleFieldError = page.locator('#form-control-title mat-error');
    const contractDescriptionFieldError = page.locator('#form-control-description mat-error');
    console.log('addEditContract Validation Of The Save Button');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/2354');
    await expect(saveButton).toHaveAttribute('aria-disabled', 'false');
    await newContract.publishToggleClick();
    await expect(saveButton).toHaveAttribute('aria-disabled', 'true');
    await newContract.draftToggleClick();
    await expect(saveButton).toHaveAttribute('aria-disabled', 'false');
    await newContract.contractTitleField.fill('');
    await newContract.saveButtonForErrorClick();
    await expect(contractTitleFieldError).toBeVisible();
    await expect(contractTitleFieldError).toHaveText(' Please fill in this field ');
    await expect(contractDescriptionFieldError).toBeHidden();
    await newContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract. saveButtonClick();
    await expect(page).toHaveURL('/contracts/list?&sort=-updated_at');
    await expect(contractName).toContainText('autotest');
    const contractNameValue1 = await contractName.innerText();
    if (contractNameValue1.includes('autotest'))
    {
        await contracts.rightArrowClick();
        await contracts.threeDotsMenuDeleteButtonClick();
        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    }
});

test('validationOfTheSaveButtonWarningFunctionality @regClickTractsHigh @addEditContract @generalCases', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const newContract = new NewEditContractPage(page);
    const contracts = new ContractsPage(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const p0Template = page.locator('.cke_enable_context_menu p >> nth=0');
    const alertIcon = page.locator('.warning-icon');
    const p0Contract = page.locator('.contract-content p >> nth=0');
    const inputTextVariable = page.locator('[name="elementName_1"] >> nth=0');
    const inputTextVariableValue = page.locator('#variables-list-form-control-value-elementName_1');
    console.log('addEditContract Validation Of The Save Button Warning Functionality');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/2354');
    await newContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract. saveButtonClick();
    await page.goto('/contract-template/edit/2354');
    await p0Template.click();
    await newTemplate.textEditorField.type('1');
    await newTemplate.saveButtonClick();
    await page.goto('/contracts/list?&sort=-created_at');
    const contractNameValue0 = await contractName.innerText();
    if (contractNameValue0.includes('autotest'))
    {
        await contractName.click();
    }
    await expect(alertIcon).toBeVisible();
    await expect(p0Contract).toHaveText('Description:');
    await inputTextVariable.click();
    await page.waitForTimeout(1000);
    await inputTextVariableValue.type('test100test');
    await newContract.editVariablesConfiguratorClick();
    await page.waitForTimeout(1000);
    await newContract.saveButtonClick();
    const contractNameValue1 = await contractName.innerText();
    if (contractNameValue1.includes('autotest'))
    {
        await contractName.click();
    }
    await expect(alertIcon).toBeVisible();
    await expect(p0Contract).toHaveText('Description:');
    await expect(inputTextVariable).toHaveText('test100test');
    await newContract.alertIconClick();
    await newContract.alertIconPopupApplyButtonClickCheckboxNotChecked();
    await expect(alertIcon).toBeHidden();
    await expect(inputTextVariable).toHaveText('test100test');
    await expect(p0Contract).toHaveText('Description:1');
    await newContract.saveButtonClick();
    const contractNameValue2 = await contractName.innerText();
    if (contractNameValue2.includes('autotest'))
    {
        await contractName.click();
    }
    await expect(alertIcon).toBeHidden();
    await expect(inputTextVariable).toHaveText('test100test');
    await expect(p0Contract).toHaveText('Description:1');
    await page.goto('/contracts/list?&sort=-created_at');
    const contractNameValue3 = await contractName.innerText();
    if (contractNameValue3.includes('autotest'))
    {
        await contracts.rightArrowClick();
        await contracts.threeDotsMenuDeleteButtonClick();
        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    }
    await page.goto('/contract-template/edit/2354');
    await p0Template.click();
    await page.keyboard.press('Backspace');
    await newTemplate.saveButtonClick();
});

   //unskip when the bug will be fixed - https://jira-mi/browse/MU-2252
   test.skip('validationOfTheSaveButtonWhenTemplateAndContractEdited @regClickTractsHigh @addEditContract @generalCases', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const viewTemplate = new ViewTemplatePage(page);
    const contracts = new ContractsPage(page);
    const templatesPage = new TemplatesPage(page);
    const templateName = page.locator('.template-name-column-link >> nth=0');
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const p0Template = page.locator('.cke_enable_context_menu p >> nth=0');
    console.log('addEditContract Validation Of The Save Button When Template And Contract Edited');
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
    await newContract.saveButtonClick();
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue0 = await templateName.innerText();
    if (templateNameValue0.includes('autotest'))
    {
        await templateName.click();
        await viewTemplate.editTemplateButtonClick();
    }
    await p0Template.click();
    await newTemplate.textEditorField.type('test100test');
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const newPage = await context.newPage();
    await newPage.goto('');
    await newPage.locator('[formcontrolname="email"]').fill('test89.tete@i.ua');
    await newPage.locator('[formcontrolname="password"]').fill('Zaq123456!');
    await newPage.locator('#login-sign-in').click();
    await newPage.goto('/contracts/list?&sort=-updated_at');
    const contractNameNewPage = newPage.locator('.contracts-name-column-link >> nth=0');
    const contractNameNewPageValue0 = await contractNameNewPage.innerText();
    if (contractNameNewPageValue0.includes('autotest'))
    {
        await contractNameNewPage.click();
    }
    await newTemplate.saveButtonClick();
    await newPage.locator('#contract-detail-save').click();
    const alertPopupNewPage = newPage.locator('app-warning-contract-update-by-template');
    await expect(alertPopupNewPage).toBeVisible();
    await newPage.close();
    await context.close();
    await browser.close(); 
    await page.goto('/contracts/list?&sort=-updated_at');
    const contractNameValue1 = await contractName.innerText();
    if (contractNameValue1.includes('autotest'))
    {
        await contracts.rightArrowClick();
        await contracts.threeDotsMenuDeleteButtonClick();
        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    }
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
});

test('validationOfTheSaveAndGenerateLinkButton @regClickTractsHigh @addEditContract @generalCases', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const viewTemplate = new ViewTemplatePage(page);
    const contracts = new ContractsPage(page);
    const templatesPage = new TemplatesPage(page);
    const templateName = page.locator('.template-name-column-link >> nth=0');
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const saveAndGenerateLinkButton = page.locator('#contract-detail-save-and-generate');
    const contractTitleFieldError = page.locator('#form-control-title mat-error');
    const descriptionTitleFieldError = page.locator('#form-control-description mat-error');
    const inputTextContractBody = page.locator('[name="elementName_1"] >> nth=0');
    const listTextContractBody = page.locator('[name="elementName_7"] >> nth=0');
    const listUrlNestedContractBodyColor = page.locator('[name="elementName_4"] >> nth=1');
    const pageTitle = page.locator('.section__title');
    const copyLinkButton = page.locator('#contract-view-copy-link');
    console.log('addEditContract Validation Of The Save And Generate Link Button');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/2354');
    await expect(saveAndGenerateLinkButton).toHaveAttribute('aria-disabled', 'true');
    await newContract.publishToggleClick();
    await expect(saveAndGenerateLinkButton).toHaveAttribute('aria-disabled', 'false');
    await newContract.contractTitleField.fill('');
    await newContract.saveAndGenerateLinkButtonForErrorClick();
    await expect(contractTitleFieldError).toBeVisible();
    await expect(contractTitleFieldError).toHaveText(' Please fill in this field ');
    await expect(descriptionTitleFieldError).toBeVisible();
    await expect(descriptionTitleFieldError).toHaveText(' Please fill in this field ');
    await expect(inputTextContractBody).toBeVisible();
    await expect(inputTextContractBody).toHaveClass('variable-not-filled');
    await expect(inputTextContractBody).toHaveCSS('color', 'rgb(255, 0, 0)');
    await expect(listTextContractBody).toBeVisible();
    await expect(listTextContractBody).toHaveClass('variable-not-filled');
    await expect(listTextContractBody).toHaveCSS('color', 'rgb(255, 0, 0)');
    await expect(listUrlNestedContractBodyColor).toBeVisible();
    await expect(listUrlNestedContractBodyColor).toHaveClass('variable-not-filled');
    await expect(listUrlNestedContractBodyColor).toHaveCSS('color', 'rgb(255, 0, 0)');
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
    await expect(page.url()).toContain('/contract/');
    await expect(pageTitle).toContainText('autotest');
    await expect(copyLinkButton).toBeVisible();
    await page.goto('/contracts/list?&sort=-created_at');
    const contractNameValue0 = await contractName.innerText();
    if (contractNameValue0.includes('autotest'))
    {
        await contracts.rightArrowClick();
        await contracts.threeDotsMenuDeleteButtonClick();
        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    }
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue0 = await templateName.innerText();
    if (templateNameValue0.includes('autotest'))
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

test('validationOfTheSaveAndGenerateLinkButtonWarningFunctionality @regClickTractsHigh @addEditContract @generalCases', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const viewTemplate = new ViewTemplatePage(page);
    const contracts = new ContractsPage(page);
    const templatesPage = new TemplatesPage(page);
    const viewContract = new ViewContract(page);
    const templateName = page.locator('.template-name-column-link >> nth=0');
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const pageTitle = page.locator('.section__title');
    const copyLinkButton = page.locator('#contract-view-copy-link');
    const alertIcon = page.locator('.warning-icon');
    const p0Contract = page.locator('.contract-content p >> nth=0');
    const p0Template = page.locator('.cke_enable_context_menu p >> nth=0');
    console.log('addEditContract Validation Of The Save And Generate Link Button Warning Functionality');
    await users.AA3();
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
    await newContract.saveButtonClick();
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue0 = await templateName.innerText();
    if (templateNameValue0.includes('autotest'))
    {
        await templateName.click();
        await viewTemplate.editTemplateButtonClick();
    }
    await p0Template.click();
    await newTemplate.textEditorField.type('test100test');
    await page.waitForTimeout(500);
    await newTemplate.saveButtonClick();
    await page.goto('/contracts/list?&sort=-updated_at');
    const contractNameValue0 = await contractName.innerText();
    if (contractNameValue0.includes('autotest'))
    {
        await contractName.click();
    }
    await expect(alertIcon).toBeVisible();
    await expect(p0Contract).toHaveText('test100test');
    await newContract.alertIconClick();
    await newContract.alertIconPopupApplyButtonClickCheckboxNotChecked();
    await expect(alertIcon).toBeHidden();
    await expect(p0Contract).toHaveText('test100testtest100test');
    await newContract.publishToggleClick();
    await newContract.saveAndGenerateLinkButtonClick();
    await expect(page.url()).toContain('/contract/');
    await expect(pageTitle).toContainText('autotest');
    await expect(copyLinkButton).toBeVisible();
    await viewContract.backToDraftButtonClick();
    await expect(alertIcon).toBeHidden();
    await expect(p0Contract).toHaveText('test100testtest100test');
    await page.goto('/contracts/list?&sort=-updated_at');
    const contractNameValue1 = await contractName.innerText();
    if (contractNameValue1.includes('autotest'))
    {
        await contracts.rightArrowClick();
        await contracts.threeDotsMenuDeleteButtonClick();
        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    }
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
});

test('validationOfTheSaveAndGenerateLinkButtonMultipartyOn @regClickTractsHigh @addEditContract @generalCases', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const signerInputTextContractBody = page.locator('[name="elementName_14"] >> nth=0');
    const signerInputTextContractBodyValue = page.locator('[name="elementName_14"] input >> nth=0');
    const signerListDateContractBody = page.locator('[name="elementName_19"] >> nth=0');
    const signerListDateContractBodyValue = page.locator('[name="elementName_19"] select >> nth=0');
    const editVariablesPanel = page.locator('.contract-values-wrapper');
    const reguralVariablesTab = page.locator('#contracts-details-regular-variables-button');
    const signerVariablesTab = page.locator('#contracts-details-signer-variables-button');
    const signerGroup = page.locator('#configurator-variable-group-0');
    const signerGroupStatus = page.locator('#configurator-variable-group-0 mat-expansion-panel-header');
    console.log('addEditContract Validation Of The Save And Generate Link Button Multiparty On');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/3316');
    await newContract.publishToggleClick();
    await newContract.saveAndGenerateLinkButtonForErrorClick();
    await expect(signerInputTextContractBody).toBeVisible();
    await expect(signerInputTextContractBody).toHaveClass('signer-variable is-available variable-not-filled');
    await expect(signerInputTextContractBodyValue).toHaveCSS('border-color', 'rgb(255, 0, 0)');
    await expect(signerListDateContractBody).toBeVisible();
    await expect(signerListDateContractBody).toHaveClass('signer-variable is-available variable-not-filled');
    await expect(signerListDateContractBodyValue).toHaveCSS('border-color', 'rgb(255, 0, 0)');
    await signerInputTextContractBody.click();
    await expect(editVariablesPanel).toHaveClass('contract-values-wrapper ng-star-inserted expanded');
    await expect(reguralVariablesTab).toHaveAttribute('aria-pressed', 'false');
    await expect(signerVariablesTab).toHaveAttribute('aria-pressed', 'true');
    await expect(signerGroup).toBeVisible();
    await expect(signerGroupStatus).toHaveAttribute('aria-expanded', 'true');
});

test('validationOfSaveAndGenerate/SaveAndSubmitEmbededContractInDraft @regClickTractsHigh @addEditContract @generalCases', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const newContract = new NewEditContractPage(page);
    const editVariableVariable0 = page.locator('#configurator-variable-elementName_1');
    const editVariableVariable0TextField = page.locator('#variables-list-form-control-value-elementName_1');
    const publishTheContractPopup = page.locator('app-reference-contract-links');
    const publishTheContractPopupText = page.locator('app-reference-contract-links .modal-header');
    const publishTheContractPopupContractLink = page.locator('app-reference-contract-links section a');
    const publishTheContractPopupXButton = page.locator('app-reference-contract-links .close-button');
    const publishTheContractPopupOkButton = page.locator('app-reference-contract-links .btn >> text=Ok');
    console.log('addEditContract Validation Of Save And Generate/Save And Submit Embeded Contract In Draft');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/3327');
    await newContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.contractDescriptionTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.editVariablesConfiguratorClick();
    await editVariableVariable0.click();
    await editVariableVariable0TextField.fill('https://terms.test.noredlines.com/contract/5987/test100testContract10');
    await newContract.editVariablesConfiguratorClick();
    await newContract.publishToggleClick();
    await newContract.saveAndGenerateLinkButtonForErrorClick();
    await expect(publishTheContractPopup).toBeVisible();
    await expect(publishTheContractPopupText).toBeVisible();
    await expect(publishTheContractPopupText).toHaveText(' Please publish the following embedded contract(s) before publishing the contract ');
    await expect(publishTheContractPopupContractLink).toBeVisible();
    await expect(publishTheContractPopupContractLink).toHaveText('test100testContract10');
    await expect(publishTheContractPopupContractLink).toHaveAttribute('href', '/contract/edit/5987');
    await expect(publishTheContractPopupXButton).toBeVisible();
    await expect(publishTheContractPopupOkButton).toBeVisible();
    await publishTheContractPopupOkButton.click();
    await expect(publishTheContractPopup).toBeHidden();
    await newContract.saveAndGenerateLinkButtonForErrorClick();
    await publishTheContractPopupXButton.click();
    await expect(publishTheContractPopup).toBeHidden();
    await newContract.saveAndGenerateLinkButtonForErrorClick();
    await publishTheContractPopupContractLink.click();
    const [page1] = await Promise.all([
        page.waitForEvent('popup'),
      ]);
    await page1.waitForLoadState();
    await expect(page1).toHaveURL('/contract/edit/5987');
    const page1Title = page1.locator('.section__title');
    await expect(page1Title).toHaveText('Edit Contract');
    await page1.close();
    await publishTheContractPopupOkButton.click();
    await userBar.logOutAction();
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/contract/create/3327');
    await newContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.contractDescriptionTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.editVariablesConfiguratorClick();
    await editVariableVariable0.click();
    await editVariableVariable0TextField.fill('https://terms.test.noredlines.com/contract/5987/test100testContract10');
    await newContract.editVariablesConfiguratorClick();
    await newContract.publishToggleClick();
    await newContract.saveAndSubmitButtonForErrorClick();
    await expect(publishTheContractPopup).toBeVisible();
    await expect(publishTheContractPopupText).toBeVisible();
    await expect(publishTheContractPopupText).toHaveText(' Please publish the following embedded contract(s) before publishing the contract ');
    await expect(publishTheContractPopupContractLink).toBeVisible();
    await expect(publishTheContractPopupContractLink).toHaveText('test100testContract10');
    await expect(publishTheContractPopupContractLink).toHaveAttribute('href', '/contract/edit/5987');
    await expect(publishTheContractPopupXButton).toBeVisible();
    await expect(publishTheContractPopupOkButton).toBeVisible();
    await publishTheContractPopupOkButton.click();
    await expect(publishTheContractPopup).toBeHidden();
    await newContract.saveAndSubmitButtonForErrorClick();
    await publishTheContractPopupXButton.click();
    await expect(publishTheContractPopup).toBeHidden();
    await newContract.saveAndSubmitButtonForErrorClick();
    await publishTheContractPopupContractLink.click();
    const [page2] = await Promise.all([
        page.waitForEvent('popup'),
      ]);
    await page1.waitForLoadState();
    await expect(page2).toHaveURL('/contract/edit/5987');
    const page2Title = page2.locator('.section__title');
    await expect(page2Title).toHaveText('Edit Contract');
    await page1.close();
});

test('displayingSaveAndGenerateLinkButtonForAAPermissions @regClickTractsHigh @addEditContract @generalCases', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const contracts = new ContractsPage(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const saveAndGenerateLinkButton = page.locator('#contract-detail-save-and-generate');
    const saveAndSubmitButton = page.locator('#contract-detail-save-and-submit');
    console.log('addEditContract Displaying Save And Generate Link Button For AA Permissions');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/3329');
    await expect(saveAndGenerateLinkButton).toBeVisible();
    await expect(saveAndSubmitButton).toBeHidden();
    await newContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.contractDescriptionTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.publishToggleClick();
    await newContract.saveAndGenerateLinkButtonClick();
    await page.goto('/contracts/list?&sort=-updated_at');
    await expect(contractName).toContainText('autotest');
    const contractNameValue0 = await contractName.innerText();
    if (contractNameValue0.includes('autotest'))
    {
        await contracts.rightArrowClick();
        await contracts.threeDotsMenuDeleteButtonClick();
        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    }
    await page.goto('/contract/create/3330');
    await expect(saveAndGenerateLinkButton).toBeVisible();
    await expect(saveAndSubmitButton).toBeHidden();
    await newContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.contractDescriptionTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.publishToggleClick();
    await newContract.saveAndGenerateLinkButtonClick();
    await page.goto('/contracts/list?&sort=-updated_at');
    await expect(contractName).toContainText('autotest');
    const contractNameValue1 = await contractName.innerText();
    if (contractNameValue1.includes('autotest'))
    {
        await contracts.rightArrowClick();
        await contracts.threeDotsMenuDeleteButtonClick();
        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    }
    await page.goto('/contract/create/3331');
    await expect(saveAndGenerateLinkButton).toBeVisible();
    await expect(saveAndSubmitButton).toBeHidden();
    await newContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.contractDescriptionTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.publishToggleClick();
    await newContract.saveAndGenerateLinkButtonClick();
    await page.goto('/contracts/list?&sort=-updated_at');
    await expect(contractName).toContainText('autotest');
    const contractNameValue2 = await contractName.innerText();
    if (contractNameValue2.includes('autotest'))
    {
        await contracts.rightArrowClick();
        await contracts.threeDotsMenuDeleteButtonClick();
        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    }
    await page.goto('/contract/create/3258');
    await expect(saveAndGenerateLinkButton).toBeVisible();
    await expect(saveAndSubmitButton).toBeHidden();
    await newContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.contractDescriptionTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.publishToggleClick();
    await newContract.saveAndGenerateLinkButtonClick();
    await page.goto('/contracts/list?&sort=-updated_at');
    await expect(contractName).toContainText('autotest');
    const contractNameValue3 = await contractName.innerText();
    if (contractNameValue3.includes('autotest'))
    {
        await contracts.rightArrowClick();
        await contracts.threeDotsMenuDeleteButtonClick();
        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    }
});

test('displayingSaveAndGenerateLinkButtonForAUPermissions @regClickTractsHigh @addEditContract @generalCases', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const contracts = new ContractsPage(page);
    const contractName = page.locator('.contract-name-column-link >> nth=0');
    const saveAndGenerateLinkButton = page.locator('#contract-detail-save-and-generate');
    const saveAndSubmitButton = page.locator('#contract-detail-save-and-submit');
    console.log('addEditContract Displaying Save And Generate Link Button For AU Permissions');
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/contract/create/3258');
    await expect(saveAndGenerateLinkButton).toBeHidden();
    await expect(saveAndSubmitButton).toBeVisible();
    await newContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.contractDescriptionTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.publishToggleClick();
    await newContract.saveAndSubmitButtonClick();
    await page.goto('/contracts/list?&sort=-updated_at');
    await contracts.contractRequestsTabClick();
    await expect(contractName).toContainText('autotest');
    const contractNameValue3 = await contractName.innerText();
    if (contractNameValue3.includes('autotest'))
    {
        await contracts.threeDotsMenuDeleteButtonClick();
        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    }
});

test('validationSaveAndGenerateLinkButtonForAUPermissions @regClickTractsHigh @addEditContract @generalCases', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const contracts = new ContractsPage(page);
    const contractName = page.locator('.contract-name-column-link >> nth=0');
    const contractTitleFieldError = page.locator('#form-control-title mat-error');
    const descriptionTitleFieldError = page.locator('#form-control-description mat-error');
    const inputTextContractBody = page.locator('[name="elementName_1"] >> nth=0');
    const listTextContractBody = page.locator('[name="elementName_7"] >> nth=0');
    const listUrlNestedContractBodyColor = page.locator('[name="elementName_4"] >> nth=1');
    const pageTitle = page.locator('.section__title');
    const editButton = page.locator('#contract-view-edit');
    const saveAndSubmitButton = page.locator('#contract-detail-save-and-submit');
    console.log('addEditContract Validation Save And Generate Link Button For AU Permissions');
    await users.AA3AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/372');
    await page.goto('/contract/create/2354');
    await expect(saveAndSubmitButton).toHaveAttribute('aria-disabled', 'true');
    await newContract.publishToggleClick();
    await expect(saveAndSubmitButton).toHaveAttribute('aria-disabled', 'false');
    await newContract.contractTitleField.fill('');
    await newContract.saveAndSubmitButtonForErrorClick();
    await expect(contractTitleFieldError).toBeVisible();
    await expect(contractTitleFieldError).toHaveText(' Please fill in this field ');
    await expect(descriptionTitleFieldError).toBeVisible();
    await expect(descriptionTitleFieldError).toHaveText(' Please fill in this field ');
    await expect(inputTextContractBody).toBeVisible();
    await expect(inputTextContractBody).toHaveClass('variable-not-filled');
    await expect(inputTextContractBody).toHaveCSS('color', 'rgb(255, 0, 0)');
    await expect(listTextContractBody).toBeVisible();
    await expect(listTextContractBody).toHaveClass('variable-not-filled');
    await expect(listTextContractBody).toHaveCSS('color', 'rgb(255, 0, 0)');
    await expect(listUrlNestedContractBodyColor).toBeVisible();
    await expect(listUrlNestedContractBodyColor).toHaveClass('variable-not-filled');
    await expect(listUrlNestedContractBodyColor).toHaveCSS('color', 'rgb(255, 0, 0)');
    await page.goto('/contract/create/3332');
    await newContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.contractDescriptionTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.publishToggleClick();
    await newContract.saveAndSubmitButtonClick();
    await expect(page.url()).toContain('/contract/');
    await expect(pageTitle).toContainText('autotest');
    await expect(editButton).toBeVisible();
    await page.goto('/contracts/list?&sort=-created_at');
    await contracts.contractRequestsTabClick();
    await expect(contractName).toContainText('autotest');
    const contractNameValue0 = await contractName.innerText();
    if (contractNameValue0.includes('autotest'))
    {
        await contracts.threeDotsMenuDeleteButtonClick();
        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    }
});

test('validationOfTheSaveAndSubmitButtonWarningFunctionality @regClickTractsHigh @addEditContract @generalCases', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const newContract = new NewEditContractPage(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const viewTemplate = new ViewTemplatePage(page);
    const contracts = new ContractsPage(page);
    const templatesPage = new TemplatesPage(page);
    const viewContract = new ViewContract(page);
    const templateName = page.locator('.template-name-column-link >> nth=0');
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const contractNameCR = page.locator('.contract-name-column-link >> nth=0');
    const pageTitle = page.locator('.section__title');
    const editButton = page.locator('#contract-view-edit');
    const alertIcon = page.locator('.warning-icon');
    const p0Contract = page.locator('.contract-content p >> nth=0');
    const p0Template = page.locator('.cke_enable_context_menu p >> nth=0');
    console.log('addEditContract Validation Of The Save And Submit Button Warning Functionality');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-template/create');
    await newTemplate.templateTitleFieldFill(Helpers.generateRandomString());
    await newTemplate.selectCategoryName();
    await newTemplate.textEditorField.type('test100test');
    await newTemplate.permissionContractPublicationRequiredValueClick();
    await newTemplate.publishToggleClick();
    await newTemplate.saveButtonClick();
    await userBar.logOutAction();
    await users.AA3AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/372');
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue0 = await templateName.innerText();
    if (templateNameValue0.includes('autotest'))
    {
        await templateName.click();
        await viewTemplate.createContractButtonClick();
    }
    await newContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.contractDescriptionTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.saveButtonClick();
    await userBar.logOutAction();
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue1 = await templateName.innerText();
    if (templateNameValue1.includes('autotest'))
    {
        await templateName.click();
        await viewTemplate.editTemplateButtonClick();
    }
    await p0Template.click();
    await newTemplate.textEditorField.type('test100test');
    await page.waitForTimeout(500);
    await newTemplate.saveButtonClick();
    await userBar.logOutAction();
    await users.AA3AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/372');
    await page.goto('/contracts/list?&sort=-updated_at');
    const contractNameValue0 = await contractName.innerText();
    if (contractNameValue0.includes('autotest'))
    {
        await contractName.click();
    }
    await expect(alertIcon).toBeVisible();
    await expect(p0Contract).toHaveText('test100test');
    await newContract.alertIconClick();
    await newContract.alertIconPopupApplyButtonClickCheckboxNotChecked();
    await expect(alertIcon).toBeHidden();
    await expect(p0Contract).toHaveText('test100testtest100test');
    await newContract.publishToggleClick();
    await newContract.saveAndSubmitButtonClick();
    await expect(page.url()).toContain('/contract/');
    await expect(pageTitle).toContainText('autotest');
    await expect(editButton).toBeVisible();
    await viewContract.editButtonClick();
    await expect(alertIcon).toBeHidden();
    await expect(p0Contract).toHaveText('test100testtest100test');
    await page.goto('/contracts/list?&sort=-updated_at');
    await contracts.contractRequestsTabClick();
    const contractNameValue1 = await contractNameCR.innerText();
    if (contractNameValue1.includes('autotest'))
    {
        await contracts.threeDotsMenuDeleteButtonClick();
        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    }
    await userBar.logOutAction();
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue2 = await templateName.innerText();
    if (templateNameValue2.includes('autotest'))
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

test('validationOfTheSaveAndSubmitButtonMultipartyOn @regClickTractsHigh @addEditContract @generalCases', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const signerInputTextContractBody = page.locator('[name="elementName_14"] >> nth=0');
    const signerInputTextContractBodyValue = page.locator('[name="elementName_14"] input >> nth=0');
    const signerListDateContractBody = page.locator('[name="elementName_19"] >> nth=0');
    const signerListDateContractBodyValue = page.locator('[name="elementName_19"] select >> nth=0');
    const editVariablesPanel = page.locator('.contract-values-wrapper');
    const reguralVariablesTab = page.locator('#contracts-details-regular-variables-button');
    const signerVariablesTab = page.locator('#contracts-details-signer-variables-button');
    const signerGroup = page.locator('#configurator-variable-group-0');
    const signerGroupStatus = page.locator('#configurator-variable-group-0 mat-expansion-panel-header');
    console.log('addEditContract Validation Of The Save And Submit Button Multiparty On');
    await users.AA3AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/372');
    await page.goto('/contract/create/3316');
    await newContract.publishToggleClick();
    await newContract.saveAndSubmitButtonForErrorClick();
    await expect(signerInputTextContractBody).toBeVisible();
    await expect(signerInputTextContractBody).toHaveClass('signer-variable is-available variable-not-filled');
    await expect(signerInputTextContractBodyValue).toHaveCSS('border-color', 'rgb(255, 0, 0)');
    await expect(signerListDateContractBody).toBeVisible();
    await expect(signerListDateContractBody).toHaveClass('signer-variable is-available variable-not-filled');
    await expect(signerListDateContractBodyValue).toHaveCSS('border-color', 'rgb(255, 0, 0)');
    await signerInputTextContractBody.click();
    await expect(editVariablesPanel).toHaveClass('contract-values-wrapper ng-star-inserted expanded');
    await expect(reguralVariablesTab).toHaveAttribute('aria-pressed', 'false');
    await expect(signerVariablesTab).toHaveAttribute('aria-pressed', 'true');
    await expect(signerGroup).toBeVisible();
    await expect(signerGroupStatus).toHaveAttribute('aria-expanded', 'true');
});

test('displaying/ValidationOfThePreviewContractButton @regClickTractsMeium @addEditContract @generalCases', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const newContract = new NewEditContractPage(page);
    const contracts = new ContractsPage(page);
    const viewContract = new ViewContract(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const contractNameCR = page.locator('.contract-name-column-link >> nth=0');
    const previewContractButton = page.locator('#contract-detail-preview-contract');
    const pageTitle = page.locator('.section__title');
    const editButton = page.locator('#contract-view-edit');
    const exportButton = page.locator('#contract-view-export');
    const copyLinkButton = page.locator('#contract-view-copy-link');
    const statusColumn = page.locator('.status-column-draft >> nth=0');
    console.log('addEditContract Displaying/Validation Of The Preview Contract Button');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/3258');
    await expect(previewContractButton).toBeVisible();
    await newContract.publishToggleClick();
    await expect(previewContractButton).toBeHidden();
    await newContract.draftToggleClick();
    await expect(previewContractButton).toBeVisible();
    await userBar.logOutAction();
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/contract/create/3258');
    await newContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.contractDescriptionTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.publishToggleClick();
    await newContract.saveAndSubmitButtonClick();
    await viewContract.editButtonClick();
    await expect(previewContractButton).toBeHidden();
    await page.goto('/contracts/list?&sort=-updated_at');
    await contracts.contractRequestsTabClick();
    const contractNameValue0 = await contractNameCR.innerText();
    if (contractNameValue0.includes('autotest'))
    {
        await contracts.threeDotsMenuDeleteButtonClick();
        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    }
    await userBar.logOutAction();
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/3258');
    await newContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.contractDescriptionTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.previewContractButtonClick();
    await expect(page.url()).toContain('/contract/');
    await expect(pageTitle).toContainText('autotest');
    await expect(editButton).toBeVisible();
    await expect(exportButton).toBeVisible();
    await expect(copyLinkButton).toBeHidden();
    await page.goto('/contracts/list?&sort=-updated_at');
    await expect(contractName).toContainText('autotest');
    await expect(statusColumn).toBeVisible();
    const contractNameValue1 = await contractName.innerText();
    if (contractNameValue1.includes('autotest'))
    {
        await contracts.rightArrowClick();
        await contracts.threeDotsMenuDeleteButtonClick();
        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    }
});

test('validationOfThePreviewContractButtonWarningFunctional @regClickTractsHigh @addEditContract @generalCases', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const viewTemplate = new ViewTemplatePage(page);
    const contracts = new ContractsPage(page);
    const templatesPage = new TemplatesPage(page);
    const viewContract = new ViewContract(page);
    const templateName = page.locator('.template-name-column-link >> nth=0');
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const alertIcon = page.locator('.warning-icon');
    const p0Template = page.locator('.cke_enable_context_menu p >> nth=0');
    const p0PreviewContract = page.locator('p >> nth=0');
    const variable0 = page.locator('[name="elementName_1"]');
    const editVariablesPanelVariable0Panel = page.locator('#variables-list-form-control-value-elementName_1');
    const statusColumn = page.locator('.status-column-draft >> nth=0');
    console.log('addEditContract Validation Of The Preview Contract Button Warning Functional');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-template/clone/3327');
    await newTemplate.templateTitleFieldFill(Helpers.generateRandomString());
    await newTemplate.selectCategoryName();
    await newTemplate.publishToggleClick();
    await newTemplate.createContractButtonClick();
    await newContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.contractDescriptionTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.saveButtonClick();
    const contractNameValue0 = await contractName.innerText();
    if (contractNameValue0.includes('autotest'))
    {
        await contractName.click();
    }
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue0 = await templateName.innerText();
    if (templateNameValue0.includes('autotest'))
    {
        await templateName.click();
        await viewTemplate.editTemplateButtonClick();
    }
    await p0Template.click();
    await newTemplate.textEditorField.type('test100test');
    await newTemplate.saveButtonClick();
    await page.goto('/contracts/list?&sort=-updated_at');
    const contractNameValue1 = await contractName.innerText();
    if (contractNameValue1.includes('autotest'))
    {
        await contractName.click();
    }
    await variable0.click();
    await editVariablesPanelVariable0Panel.type('test100test');
    await newContract.editVariablesConfiguratorClick();
    await newContract.previewContractButtonClick();
    await expect(p0PreviewContract).toHaveText('test100test');
    await expect(variable0).toBeVisible();
    await expect(variable0).toHaveText('test100test');
    await page.goto('/contracts/list?&sort=-updated_at');
    await expect(contractName).toContainText('autotest');
    await expect(statusColumn).toBeVisible();
    const contractNameValue2 = await contractName.innerText();
    if (contractNameValue2.includes('autotest'))
    {
        await contractName.click();
    }
    await expect(alertIcon).toBeVisible();
    await newContract.alertIconClick();
    await newContract.alertIconPopupApplyButtonClickCheckboxNotChecked();
    await newContract.previewContractButtonClick();
    await expect(p0PreviewContract).toHaveText('test100testtest100test');
    await expect(variable0).toBeVisible();
    await expect(variable0).toHaveText('test100test');
    await viewContract.editButtonClick();
    await expect(alertIcon).toBeHidden();
    await newContract.saveButtonClick();
    const contractNameValue3 = await contractName.innerText();
    if (contractNameValue3.includes('autotest'))
    {
        await contracts.rightArrowClick();
        await contracts.threeDotsMenuDeleteButtonClick();
        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    }
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
});

   //unskip when the bug will be fixed - https://jira-mi/browse/MU-2252
test('validationOfThePreviewButtonWhenTemplateAndContractEdited @regClickTractsHigh @addEditContract @generalCases', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const viewTemplate = new ViewTemplatePage(page);
    const contracts = new ContractsPage(page);
    const templatesPage = new TemplatesPage(page);
    const templateName = page.locator('.template-name-column-link >> nth=0');
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const p0Template = page.locator('.cke_enable_context_menu p >> nth=0');
    console.log('addEditContract Saving By AU in The Draft Status After AA Reject');
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
    await newContract.saveButtonClick();
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue0 = await templateName.innerText();
    if (templateNameValue0.includes('autotest'))
    {
        await templateName.click();
        await viewTemplate.editTemplateButtonClick();
    }
    await p0Template.click();
    await newTemplate.textEditorField.type('test100test');
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const newPage = await context.newPage();
    await newPage.goto('');
    await newPage.locator('[formcontrolname="email"]').fill('test89.tete@i.ua');
    await newPage.locator('[formcontrolname="password"]').fill('Zaq123456!');
    await newPage.locator('#login-sign-in').click();
    await newPage.goto('/contracts/list?&sort=-updated_at');
    const contractNameNewPage = newPage.locator('.contracts-name-column-link >> nth=0');
    const contractNameNewPageValue0 = await contractNameNewPage.innerText();
    if (contractNameNewPageValue0.includes('autotest'))
    {
        await contractNameNewPage.click();
    }
    await newTemplate.saveButtonClick();
    await newPage.locator('#contract-detail-preview-contract').click();
    const alertPopupNewPage = newPage.locator('app-warning-contract-update-by-template');
    await expect(alertPopupNewPage).toBeVisible();
    await newPage.close();
    await context.close();
    await browser.close(); 
    await page.goto('/contracts/list?&sort=-updated_at');
    const contractNameValue1 = await contractName.innerText();
    if (contractNameValue1.includes('autotest'))
    {
        await contracts.rightArrowClick();
        await contracts.threeDotsMenuDeleteButtonClick();
        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    }
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
});

test('displayingTheForVariableThatInsertedSeperate @regClickTractsMedium @addEditContract @generalCases', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const editVariablesPanelListTextSelect = page.locator('#variables-list-form-control-value-elementName_7');
    const editVariablesPanelListTextOption1 = page.locator('.mat-option >> nth=1');
    const listTextVariable0 = page.locator('[name="elementName_7"] >> nth=0');
    const listTextVariable1 = page.locator('[name="elementName_7"] >> nth=1');
    const listTextVariable2 = page.locator('[name="elementName_7"] >> nth=2');
    console.log('addEditContract Displaying The For Variable That Inserted Seperate');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/2354');
    await listTextVariable0.click();
    await editVariablesPanelListTextSelect.click();
    await editVariablesPanelListTextOption1.click();
    await newContract.editVariablesConfiguratorClick();
    await expect(listTextVariable0).not.toHaveText('{{ listText }}');
    await expect(listTextVariable0).toHaveText('Kevin');
    await expect(listTextVariable1).not.toHaveText('{{ listText }}');
    await expect(listTextVariable1).toHaveText('Kevin');
    await expect(listTextVariable2).not.toHaveText('{{ listText }}');
    await expect(listTextVariable2).toHaveText('Kevin');
});

test('displayingTheWatermarkItems @regClickTractsLow @addEditContract @generalCases', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const watermarkItem = page.locator('.watermark');
    console.log('addEditContract Displaying The For Variable That Inserted Seperate');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/2354');
    await expect(watermarkItem).toBeVisible();
    await expect(watermarkItem).toContainText(' tmpl ');
    await page.goto('/contract/edit/5954');
    await expect(watermarkItem).toBeVisible();
    await expect(watermarkItem).toContainText(' tmpl ');
    await expect(watermarkItem).toContainText(' contract ');
});

test('editDraftContractByAUCreatedByAAApprovalRequired @regClickTractsHigh @addEditContract @generalCases', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const newContract = new NewEditContractPage(page);
    const contracts = new ContractsPage(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const contractNameCR = page.locator('.contract-name-column-link >> nth=0');
    const pageTitle = page.locator('.section__title');
    const saveAndSubmitButton = page.locator('#contract-detail-save-and-submit');
    console.log('addEditContract Edit Draft Contract By AU Created By AA Approval Required');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/3258');
    await newContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.contractDescriptionTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.saveButtonClick();
    await userBar.logOutAction();
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/contracts/list?&sort=-updated_at');
    await expect(contractName).toContainText('autotest');
        const contractNameValue0 = await contractName.innerText();
    if (contractNameValue0.includes('autotest'))
    {
        await contractName.click();
    }
    await expect(page.url()).toContain('/contract/edit/');
    await expect(pageTitle).toHaveText('Edit Contract');
    await expect(saveAndSubmitButton).toBeVisible();
    await newContract.publishToggleClick();
    await newContract.saveAndSubmitButtonClick();
    await expect(page.url()).toContain('/contract/');
    await expect(pageTitle).toContainText('autotest');
    await page.goto('/contracts/list?&sort=-updated_at');
    await expect(contractName).not.toContainText('autotest');
    await contracts.contractRequestsTabClick();
    await expect(contractNameCR).toContainText('autotest');
    const contractNameValue1 = await contractNameCR.innerText();
    if (contractNameValue1.includes('autotest'))
    {
        // await contracts.rightArrowClick();
        await contracts.threeDotsMenuDeleteButtonClick();
        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    }
});

test('savingByAUinTheDraftStatusAfterAAReject @regClickTractsHigh @addEditContract @generalCases', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const newContract = new NewEditContractPage(page);
    const contracts = new ContractsPage(page);
    const viewContract = new ViewContract(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const contractNameCR = page.locator('.contract-name-column-link >> nth=0');
    console.log('addEditContract Saving By AU in The Draft Status After AA Reject');
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/contract/create/3258');
    await newContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.contractDescriptionTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.publishToggleClick();
    await newContract.saveAndSubmitButtonClick();
    await userBar.logOutAction();
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-updated_at');
    await contracts.contractRequestsTabClick();
    const contractNameValue0 = await contractNameCR.innerText();
    if (contractNameValue0.includes('autotest'))
    {
        await contractNameCR.click();
    }
    await viewContract.rejectButtonClick();
    await viewContract.rejectPopupRejectButtonClick();
    await userBar.logOutAction();
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/contracts/list?&sort=-updated_at');
    await contracts.contractRequestsTabClick();
    const contractNameValue1 = await contractNameCR.innerText();
    if (contractNameValue1.includes('autotest'))
    {
        await contractNameCR.click();
    }
    await viewContract.editButtonClick();
    await newContract.draftToggleClick();
    await newContract.saveButtonClick();
    await contracts.contractRequestsTabClick();
    await expect(contractNameCR).not.toContainText('autotest');
    await contracts.contractsTabClick();
    await expect(contractName).toContainText('autotest');
    const contractNameValue2 = await contractName.innerText();
    if (contractNameValue2.includes('autotest'))
    {
        await contracts.rightArrowClick();
        await contracts.threeDotsMenuDeleteButtonClick();
        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    }
});

test('notChangingTheContextInContractIfTemplateWasChanged @regClickTractsMedium @addEditContract @generalCases', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const viewTemplate = new ViewTemplatePage(page);
    const contracts = new ContractsPage(page);
    const templatesPage = new TemplatesPage(page);
    const templateName = page.locator('.template-name-column-link >> nth=0');
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const p0Contract = page.locator('.contract-content p >> nth=0');
    const p0Template = page.locator('.cke_enable_context_menu p >> nth=0');
    console.log('addEditContract Not Changing The Context In Contract If Template Was Changed');
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
    await newContract.saveButtonClick();
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue0 = await templateName.innerText();
    if (templateNameValue0.includes('autotest'))
    {
        await templateName.click();
        await viewTemplate.editTemplateButtonClick();
    }
    await p0Template.click();
    await newTemplate.textEditorField.type('test100test');
    await page.waitForTimeout(500);
    await newTemplate.saveButtonClick();
    await page.goto('/contracts/list?&sort=-updated_at');
    const contractNameValue0 = await contractName.innerText();
    if (contractNameValue0.includes('autotest'))
    {
        await contractName.click();
    }
    await expect(p0Contract).toHaveText('test100test');
    await expect(p0Contract).not.toHaveText('test100testtest100test');
    await newContract.publishToggleClick();
    await newContract.saveAndGenerateLinkButtonClick();
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue1 = await templateName.innerText();
    if (templateNameValue1.includes('autotest'))
    {
        await templateName.click();
        await viewTemplate.editTemplateButtonClick();
    }
    await p0Template.click();
    await newTemplate.textEditorField.type('test100test');
    await page.waitForTimeout(500);
    await newTemplate.saveButtonClick();
    await page.goto('/contracts/list?&sort=-updated_at');
    const contractNameValue1 = await contractName.innerText();
    if (contractNameValue1.includes('autotest'))
    {
        await contractName.click();
    }
    await expect(p0Contract).toHaveText('test100test');
    await expect(p0Contract).not.toHaveText('test100testtest100testtest100test');
    await page.goto('/contracts/list?&sort=-updated_at');
    const contractNameValue2 = await contractName.innerText();
    if (contractNameValue2.includes('autotest'))
    {
        await contracts.rightArrowClick();
        await contracts.threeDotsMenuDeleteButtonClick();
        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    }
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue2 = await templateName.innerText();
    if (templateNameValue2.includes('autotest'))
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

test('displayingACorrectImage @regClickTractsMedium @addEditContract @generalCases', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const image = page.locator('img');
    console.log('addEditContract Displaying A Correct Image');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/2354');
    await expect(image).toBeVisible();
    await expect(image).toHaveAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png');
    await expect(image).toHaveCSS('width', '800px');
    await expect(image).toHaveCSS('height', '600px');
});

test('displayingTheVariablesPanelMultiPartyOff/On @regClickTractsHigh @addEditContract @variables @variablesPanel', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const editVariablesButton = page.locator('.contract-values-wrapper-opener');
    const editVariablesPanel = page.locator('#contract-values-configurator');
    const editVariablesPanelReguralVariablesTab = page.locator('#contracts-details-regular-variables-button');
    const editVariablesPanelSignerVariablesTab = page.locator('#contracts-details-signer-variables-button');
    console.log('addEditContract Displaying The Variables Panel Multi Party Off/On');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/2354');
    await expect(editVariablesButton).toBeVisible();
    await newContract.editVariablesConfiguratorClick();
    await expect(editVariablesPanel).toBeVisible();
    await expect(editVariablesPanelSignerVariablesTab).toBeHidden();
    await page.goto('/contract/create/3363');
    await expect(editVariablesButton).toBeHidden();
    await expect(editVariablesPanel).toBeHidden();
    await page.goto('/contract/create/3316');
    await expect(editVariablesButton).toBeVisible();
    await newContract.editVariablesConfiguratorClick();
    await expect(editVariablesPanel).toBeVisible();
    await expect(editVariablesPanelReguralVariablesTab).toBeVisible();
    await expect(editVariablesPanelSignerVariablesTab).toBeVisible();
});

test('displayingTheSearchField @regClickTractsMedium @addEditContract @variables @variablesPanel', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const searchField = page.locator('#configurator-search-field');
    console.log('addEditContract Displaying The Search Field');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/2354');
    await newContract.editVariablesConfiguratorClick();
    await expect(searchField).toBeVisible();
    await page.goto('/contract/create/3316');
    await newContract.editVariablesConfiguratorClick();
    await expect(searchField).toBeVisible();
});

test('stateOfVraiablesVariablesPanelOpened @regClickTractsLow @addEditContract @variables @variablesPanel', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const variablePanelInputText = page.locator('#configurator-variable-elementName_1 mat-expansion-panel-header');
    const variablePanelListText = page.locator('#configurator-variable-elementName_7 mat-expansion-panel-header');
    const variablePanelInputDate = page.locator('#configurator-variable-elementName_2 mat-expansion-panel-header');
    const variablePanelListDate = page.locator('#configurator-variable-elementName_8 mat-expansion-panel-header');
    const variablePanelInputNumber = page.locator('#configurator-variable-elementName_3 mat-expansion-panel-header');
    const variablePanelListNumber = page.locator('#configurator-variable-elementName_9 mat-expansion-panel-header');
    const variablePanelInputUrl = page.locator('#configurator-variable-elementName_4 mat-expansion-panel-header');
    const variablePanelListUrl = page.locator('#configurator-variable-elementName_10 mat-expansion-panel-header');
    const variablePanelInputTextarea = page.locator('#configurator-variable-elementName_6 mat-expansion-panel-header');
    const variablePanelListTriggeredText = page.locator('#configurator-variable-elementName_11 mat-expansion-panel-header');
    const variablePanelListTriggeredTextWithNested = page.locator('#configurator-variable-elementName_23 mat-expansion-panel-header');
    console.log('addEditContract State Of Vraiables Variables Panel Opened');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/2354');
    await newContract.editVariablesConfiguratorClick();
    await expect(variablePanelInputText).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputText).not.toHaveAttribute('aria-expanded', 'true');
    await expect(variablePanelListText).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListText).not.toHaveAttribute('aria-expanded', 'true');
    await expect(variablePanelInputDate).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputDate).not.toHaveAttribute('aria-expanded', 'true');
    await expect(variablePanelListDate).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListDate).not.toHaveAttribute('aria-expanded', 'true');
    await expect(variablePanelInputNumber).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputNumber).not.toHaveAttribute('aria-expanded', 'true');
    await expect(variablePanelListNumber).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListNumber).not.toHaveAttribute('aria-expanded', 'true');
    await expect(variablePanelInputUrl).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputUrl).not.toHaveAttribute('aria-expanded', 'true');
    await expect(variablePanelListUrl).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListUrl).not.toHaveAttribute('aria-expanded', 'true');
    await expect(variablePanelInputTextarea).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputTextarea).not.toHaveAttribute('aria-expanded', 'true');
    await expect(variablePanelListTriggeredText).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTriggeredText).not.toHaveAttribute('aria-expanded', 'true');
    await expect(variablePanelListTriggeredTextWithNested).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTriggeredTextWithNested).not.toHaveAttribute('aria-expanded', 'true');
});

test('checkingExpandingTheVariables @regClickTractsHigh @addEditContract @variables @variablesPanel', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const contractBodyInputText = page.locator('[name="elementName_1"] >> nth=0');
    const contractBodyListTriggeredText = page.locator('[name="elementName_11"] >> nth=0');
    const variablePanelInputText = page.locator('#configurator-variable-elementName_1 mat-expansion-panel-header');
    const variablePanel = page.locator('#contract-values-configurator');
    const variablePanelListTriggeredText = page.locator('#configurator-variable-elementName_11 mat-expansion-panel-header');
    console.log('addEditContract Checking Expanding The Variables');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/2354');
    await contractBodyInputText.click();
    await page.waitForTimeout(1500);
    await expect(variablePanel).toBeVisible();
    await expect(contractBodyInputText).toHaveCSS('color', 'rgb(79, 120, 204)');
    await expect(variablePanelInputText).toHaveAttribute('aria-expanded', 'true');
    await expect(variablePanelInputText).not.toHaveAttribute('aria-expanded', 'false');
    await contractBodyListTriggeredText.click();
    await page.waitForTimeout(1500);
    await expect(variablePanel).toBeVisible();
    await expect(contractBodyListTriggeredText).toHaveCSS('color', 'rgb(79, 120, 204)');
    await expect(variablePanelListTriggeredText).toHaveAttribute('aria-expanded', 'true');
    await expect(variablePanelListTriggeredText).not.toHaveAttribute('aria-expanded', 'false');
    await expect(contractBodyInputText).toHaveCSS('color', 'rgba(0, 0, 0, 0.87)');
    await expect(variablePanelInputText).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputText).not.toHaveAttribute('aria-expanded', 'true');
});

test('checkingCollapsingTheVariables @regClickTractsMedium @addEditContract @variables @variablesPanel', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const variablePanelInputText = page.locator('#configurator-variable-elementName_1');
    const variablePanelInputTextStatus = page.locator('#configurator-variable-elementName_1 mat-expansion-panel-header');
    const variablePanelInputUrl = page.locator('#configurator-variable-elementName_4');
    const variablePanelInputUrlStatus = page.locator('#configurator-variable-elementName_4 mat-expansion-panel-header');
    console.log('addEditContract Checking Collapsing The Variables');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/2354');
    await newContract.editVariablesConfiguratorClick();
    await page.waitForTimeout(1500);
    const removeAttributeVariable0 = await page.$('#configurator-variable-elementName_1 mat-expansion-panel-header');
    await removeAttributeVariable0.evaluate(node => node.removeAttribute('aria-disabled'));
    await variablePanelInputText.click();
    await expect(variablePanelInputTextStatus).toHaveAttribute('aria-expanded', 'true');
    await expect(variablePanelInputTextStatus).not.toHaveAttribute('aria-expanded', 'false');
    await variablePanelInputTextStatus.click();
    await expect(variablePanelInputTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputTextStatus).not.toHaveAttribute('aria-expanded', 'true');
    await variablePanelInputText.click();
    await variablePanelInputUrl.click();
    await expect(variablePanelInputTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputTextStatus).not.toHaveAttribute('aria-expanded', 'true');
    await expect(variablePanelInputUrlStatus).toHaveAttribute('aria-expanded', 'true');
    await expect(variablePanelInputUrlStatus).not.toHaveAttribute('aria-expanded', 'false');
});

test('checkingHoveringOverTheVariableName @regClickTractsLow @addEditContract @variables @variablesPanel', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const contractBodyInputText = page.locator('[name="elementName_1"] >> nth=0');
    const contractBodyListTriggeredText = page.locator('[name="elementName_11"] >> nth=0');
    const variablePanelInputText = page.locator('#configurator-variable-elementName_1');
    const variablePanelListTriggeredText = page.locator('#configurator-variable-elementName_11 mat-expansion-panel-header');
    console.log('addEditContract Checking Hovering Over The Variable Name');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/2354');
    await newContract.editVariablesConfiguratorClick();
    await page.waitForTimeout(1500);
    await expect(contractBodyInputText).toHaveCSS('color', 'rgba(0, 0, 0, 0.87)');
    await variablePanelInputText.hover();
    await expect(contractBodyInputText).toHaveCSS('color', 'rgb(79, 120, 204)');
    await expect(contractBodyListTriggeredText).toHaveCSS('color', 'rgba(0, 0, 0, 0.87)');
    await variablePanelListTriggeredText.hover();
    await expect(contractBodyListTriggeredText).toHaveCSS('color', 'rgb(79, 120, 204)');
});

test('displayingTheVariableContentOrVariablesAmount @regClickTractsLow @addEditContract @variables @variablesPanel', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const variablePanelInputTextContentType = page.locator('#configurator-variable-elementName_1 .rdl-variable-type-value');
    const variablePanelListDateContentType = page.locator('#configurator-variable-elementName_8 .rdl-variable-type-value');
    const variablePanelListTriggeredTextWithNestedContentType = page.locator('#configurator-variable-elementName_23 .rdl-variable-type-value');
    const signerVariablesTab = page.locator('#contracts-details-signer-variables');
    const signerVariablesTabAddButton = page.locator('#contract-detail-add-group');
    const signerVariablesTabVariableAmount = page.locator('#configurator-variable-group-0 .rdl-variable-type-value');
    const signerVariablesTabChooseVariables = page.locator('[placeholder="Choose variables"]');
    const signerVariablesTabChooseVariablesOption0 = page.locator('.variable-group-option >> nth=0');
    const signerVariablesTabChooseVariablesOption1 = page.locator('.variable-group-option >> nth=1');
    const signerVariablesTabChooseVariablesOption2 = page.locator('.variable-group-option >> nth=2');
    const signerVariablesTabChooseVariablesOption3 = page.locator('.variable-group-option >> nth=3');
    const signerVariablesTabChooseVariablesOption4 = page.locator('.variable-group-option >> nth=4');
    const signerVariablesTabChooseVariablesOption5 = page.locator('.variable-group-option >> nth=5');
    const signerVariablesTabChooseVariablesOption6 = page.locator('.variable-group-option >> nth=6');
    console.log('addEditContract Displaying The Variable Content Or Variables Amount');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/3316');
    await newContract.editVariablesConfiguratorClick();
    await page.waitForTimeout(1500);
    await expect(variablePanelInputTextContentType).toBeVisible();
    await expect(variablePanelInputTextContentType).toHaveText(' Input • text');
    await expect(variablePanelListDateContentType).toBeVisible();
    await expect(variablePanelListDateContentType).toHaveText(' List • 3 options');
    await expect(variablePanelListTriggeredTextWithNestedContentType).toBeVisible();
    await expect(variablePanelListTriggeredTextWithNestedContentType).toHaveText(' List • 4 options');
    await signerVariablesTab.click();
    await signerVariablesTabAddButton.click();
    await expect(signerVariablesTabVariableAmount).toBeVisible();
    await expect(signerVariablesTabVariableAmount).toHaveText(' Variables: 0 ');
    await signerVariablesTabChooseVariables.click();
    await signerVariablesTabChooseVariablesOption0.click();
    await expect(signerVariablesTabVariableAmount).toBeVisible();
    await expect(signerVariablesTabVariableAmount).toHaveText(' Variables: 1 ');
    await signerVariablesTabChooseVariablesOption2.click();
    await signerVariablesTabChooseVariablesOption4.click();
    await expect(signerVariablesTabVariableAmount).toHaveText(' Variables: 3 ');
    await signerVariablesTabChooseVariablesOption6.click();
    await signerVariablesTabChooseVariablesOption1.click();
    await expect(signerVariablesTabVariableAmount).toHaveText(' Variables: 5 ');
    await signerVariablesTabChooseVariablesOption3.click();
    await signerVariablesTabChooseVariablesOption5.click();
    await expect(signerVariablesTabVariableAmount).toHaveText(' Variables: 7 ');
});

test('editing/Re-editingTheVariables @regClickTractsHigh @addEditContract @variables @variablesPanel', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const contractBodyInputText = page.locator('[name="elementName_1"] >> nth=0');
    const contractBodyListNumber = page.locator('[name="elementName_9"] >> nth=0');
    const variablePanelInputText = page.locator('#configurator-variable-elementName_1');
    const variablePanelInputTextValue = page.locator('#variables-list-form-control-value-elementName_1');
    const variablePanelListNumber = page.locator('#configurator-variable-elementName_9');
    const variablePanelListNumberValue = page.locator('#variables-list-form-control-value-elementName_9');
    const variablePanelListNumberValueOption0 = page.locator('.mat-option >> nth=0');
    const variablePanelListNumberValueOption1 = page.locator('.mat-option >> nth=1');
    console.log('addEditContract Editing/Re-editing The Variables');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/3316');
    await newContract.editVariablesConfiguratorClick();
    await page.waitForTimeout(1500);
    await expect(contractBodyInputText).toContainText('{{ inputText }}');
    await variablePanelInputText.click();
    await variablePanelInputTextValue.type('test100test');
    await expect(contractBodyInputText).toContainText('test100test');
    await expect(contractBodyListNumber).toContainText('{{ listNumber }}');
    await variablePanelListNumber.click();
    await variablePanelListNumberValue.click();
    await variablePanelListNumberValueOption1.click();
    await expect(contractBodyListNumber).toContainText('56,544,566');
    await variablePanelListNumberValue.click();
    await variablePanelListNumberValueOption0.click();
    await expect(contractBodyListNumber).toContainText('13,412,234');
    await variablePanelInputText.click();
    await variablePanelInputTextValue.type('test100test');
    await expect(contractBodyInputText).toContainText('test100testtest100test');
});

test('checkingNotDisplayingVariablesInTheVariablesPanel @regClickTractsMedium @addEditContract @variables @variablesPanel', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const checkobxContractBody = page.locator('[name="elementName_5"] >> nth=0');
    const checkobxEditVariablePanel = page.locator('#contract-values-configurator mat-panel-title >> text=inputCheckbox');
    const multipleChoiceContractBody = page.locator('[name="elementName_24"] >> nth=0');
    const multipleChoiceVariablePanel = page.locator('#contract-values-configurator mat-panel-title >> text=listMultipleChoice');
    const signerInputTextContractBody = page.locator('[name="elementName_14"] >> nth=0');
    const signerInputTextVariablePanel = page.locator('#contract-values-configurator mat-panel-title >> text=signerInputText');
    const signerListNumberContractBody = page.locator('[name="elementName_20"] >> nth=0');
    const signerListNumberVariablePanel = page.locator('#contract-values-configurator mat-panel-title >> text=signerListNumber');
    console.log('addEditContract Checking Not Displaying Variables In The Variables Panel');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/2354');
    await newContract.editVariablesConfiguratorClick();
    await page.waitForTimeout(1500);
    await expect(checkobxContractBody).toBeVisible();
    await expect(checkobxEditVariablePanel).toBeHidden();
    await expect(multipleChoiceContractBody).toBeVisible();
    await expect(multipleChoiceVariablePanel).toBeHidden();
    await expect(signerInputTextContractBody).toBeVisible();
    await expect(signerInputTextVariablePanel).toBeHidden();
    await expect(signerListNumberContractBody).toBeVisible();
    await expect(signerListNumberVariablePanel).toBeHidden();
});

test('validationOfTheTabKey @regClickTractsMedium @addEditContract @variables @variablesPanel', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const editVariablePanelStatus = page.locator('.contract-values-wrapper');
    const variablePanelInputTextStatus = page.locator('#configurator-variable-elementName_1 mat-expansion-panel-header');
    const variablePanelListTextStatus = page.locator('#configurator-variable-elementName_7 mat-expansion-panel-header');
    const variablePanelInputDateStatus = page.locator('#configurator-variable-elementName_2 mat-expansion-panel-header');
    const variablePanelInputDate = page.locator('#configurator-variable-elementName_2');
    const variablePanelListDateStatus = page.locator('#configurator-variable-elementName_8 mat-expansion-panel-header');
    const variablePanelInputNumberStatus = page.locator('#configurator-variable-elementName_3 mat-expansion-panel-header');
    const variablePanelListNumberStatus = page.locator('#configurator-variable-elementName_9 mat-expansion-panel-header');
    const variablePanelInputUrlStatus = page.locator('#configurator-variable-elementName_4 mat-expansion-panel-header');
    const variablePanelListUrlStatus = page.locator('#configurator-variable-elementName_10 mat-expansion-panel-header');
    const variablePanelInputTextareaStatus = page.locator('#configurator-variable-elementName_6 mat-expansion-panel-header');
    const variablePanelListTriggeredTextStatus = page.locator('#configurator-variable-elementName_11 mat-expansion-panel-header');
    const variablePanelListTriggeredTextWithNestedStatus = page.locator('#configurator-variable-elementName_23 mat-expansion-panel-header');
    const regularVariablesTab = page.locator('#contracts-details-regular-variables');
    const signerVariablesTab = page.locator('#contracts-details-signer-variables');
    const signerVariablesTabAddButton = page.locator('#contract-detail-add-group');
    const signerVariablesTabGroupName0 = page.locator('#variables-list-form-control-value-0');
    const signerVariablesTabGroupName1 = page.locator('#variables-list-form-control-value-1');
    const signerVariablesTabGroupName2 = page.locator('#variables-list-form-control-value-2');
    const signerVariablesTabGroupName3 = page.locator('#variables-list-form-control-value-3');
    const signerVariablesTabChooseVariablesGroup0 = page.locator('[placeholder="Choose variables"] >> nth=0');
    const signerVariablesTabChooseVariablesGroup1 = page.locator('[placeholder="Choose variables"] >> nth=1');
    const signerVariablesTabChooseVariablesGroup2 = page.locator('[placeholder="Choose variables"] >> nth=2');
    const signerVariablesTabChooseVariablesGroup3 = page.locator('[placeholder="Choose variables"] >> nth=3');
    const signerVariablesTabChooseVariablesOption0 = page.locator('.variable-group-option >> nth=0');
    const signerVariablesTabChooseVariablesOption1 = page.locator('.variable-group-option >> nth=1');
    const signerVariablesTabGroup0Status = page.locator('#configurator-variable-group-0 mat-expansion-panel-header');
    const signerVariablesTabGroup1Status = page.locator('#configurator-variable-group-1 mat-expansion-panel-header');
    const signerVariablesTabGroup1 = page.locator('#configurator-variable-group-1');
    const signerVariablesTabGroup2Status = page.locator('#configurator-variable-group-2 mat-expansion-panel-header');
    const signerVariablesTabGroup3Status = page.locator('#configurator-variable-group-3 mat-expansion-panel-header');
    const listNumberContractBody = page.locator('[name="elementName_9"] >> nth=0');
    const signerInputUrlContractBody = page.locator('[name="elementName_17"] >> nth=0');
    console.log('addEditContract Abilitiy To Use Tab Key');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/3316');
    await page.keyboard.press('Tab');
    await expect(editVariablePanelStatus).toHaveClass('contract-values-wrapper ng-star-inserted');
    await expect(editVariablePanelStatus).not.toHaveClass('contract-values-wrapper ng-star-inserted expanded');
    await newContract.editVariablesConfiguratorClick();
    await signerVariablesTab.click();
    await signerVariablesTabAddButton.click();
    await signerVariablesTabGroupName0.fill('test0');
    await signerVariablesTabChooseVariablesGroup0.click();
    await signerVariablesTabChooseVariablesOption0.click();
    await signerVariablesTabChooseVariablesOption1.click();
    await signerVariablesTabAddButton.click();
    await signerVariablesTabGroupName1.fill('test1');
    await signerVariablesTabChooseVariablesGroup1.click();
    await signerVariablesTabChooseVariablesOption0.click();
    await signerVariablesTabChooseVariablesOption1.click();
    await signerVariablesTabAddButton.click();
    await signerVariablesTabGroupName2.fill('test2');
    await signerVariablesTabChooseVariablesGroup2.click();
    await signerVariablesTabChooseVariablesOption0.click();
    await signerVariablesTabChooseVariablesOption1.click();
    await signerVariablesTabAddButton.click();
    await signerVariablesTabGroupName3.fill('test3');
    await signerVariablesTabChooseVariablesGroup3.click();
    await signerVariablesTabChooseVariablesOption0.click();
    await signerVariablesTabChooseVariablesOption1.click();
    await newContract.editVariablesConfiguratorClick();
    await newContract.editVariablesConfiguratorClick();
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await expect(variablePanelInputTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputDateStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListDateStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputNumberStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListNumberStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputUrlStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListUrlStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputTextareaStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTriggeredTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTriggeredTextWithNestedStatus).toHaveAttribute('aria-expanded', 'false');
    await signerVariablesTab.click();
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await expect(signerVariablesTabGroup0Status).toHaveAttribute('aria-expanded', 'false');
    await expect(signerVariablesTabGroup1Status).toHaveAttribute('aria-expanded', 'false');
    await expect(signerVariablesTabGroup2Status).toHaveAttribute('aria-expanded', 'false');
    await expect(signerVariablesTabGroup3Status).toHaveAttribute('aria-expanded', 'false');
    await signerVariablesTabGroup1.click();
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    await expect(signerVariablesTabGroup0Status).toHaveAttribute('aria-expanded', 'false');
    await expect(signerVariablesTabGroup1Status).toHaveAttribute('aria-expanded', 'false');
    await expect(signerVariablesTabGroup2Status).toHaveAttribute('aria-expanded', 'true');
    await expect(signerVariablesTabGroup3Status).toHaveAttribute('aria-expanded', 'false');
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    await expect(signerVariablesTabGroup0Status).toHaveAttribute('aria-expanded', 'false');
    await expect(signerVariablesTabGroup1Status).toHaveAttribute('aria-expanded', 'false');
    await expect(signerVariablesTabGroup2Status).toHaveAttribute('aria-expanded', 'false');
    await expect(signerVariablesTabGroup3Status).toHaveAttribute('aria-expanded', 'true');
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    await expect(signerVariablesTabGroup0Status).toHaveAttribute('aria-expanded', 'true');
    await expect(signerVariablesTabGroup1Status).toHaveAttribute('aria-expanded', 'false');
    await expect(signerVariablesTabGroup2Status).toHaveAttribute('aria-expanded', 'false');
    await expect(signerVariablesTabGroup3Status).toHaveAttribute('aria-expanded', 'false');
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    await expect(signerVariablesTabGroup0Status).toHaveAttribute('aria-expanded', 'false');
    await expect(signerVariablesTabGroup1Status).toHaveAttribute('aria-expanded', 'true');
    await expect(signerVariablesTabGroup2Status).toHaveAttribute('aria-expanded', 'false');
    await expect(signerVariablesTabGroup3Status).toHaveAttribute('aria-expanded', 'false');
    await regularVariablesTab.click();
    await variablePanelInputDate.click();
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    await expect(variablePanelInputTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputDateStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListDateStatus).toHaveAttribute('aria-expanded', 'true');
    await expect(variablePanelInputNumberStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListNumberStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputUrlStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListUrlStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputTextareaStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTriggeredTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTriggeredTextWithNestedStatus).toHaveAttribute('aria-expanded', 'false');
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    await expect(variablePanelInputTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputDateStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListDateStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputNumberStatus).toHaveAttribute('aria-expanded', 'true');
    await expect(variablePanelListNumberStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputUrlStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListUrlStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputTextareaStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTriggeredTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTriggeredTextWithNestedStatus).toHaveAttribute('aria-expanded', 'false');
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    await expect(variablePanelInputTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputDateStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListDateStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputNumberStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListNumberStatus).toHaveAttribute('aria-expanded', 'true');
    await expect(variablePanelInputUrlStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListUrlStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputTextareaStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTriggeredTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTriggeredTextWithNestedStatus).toHaveAttribute('aria-expanded', 'false');
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    await expect(variablePanelInputTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputDateStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListDateStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputNumberStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListNumberStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputUrlStatus).toHaveAttribute('aria-expanded', 'true');
    await expect(variablePanelListUrlStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputTextareaStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTriggeredTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTriggeredTextWithNestedStatus).toHaveAttribute('aria-expanded', 'false');
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    await expect(variablePanelInputTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputDateStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListDateStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputNumberStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListNumberStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputUrlStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListUrlStatus).toHaveAttribute('aria-expanded', 'true');
    await expect(variablePanelInputTextareaStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTriggeredTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTriggeredTextWithNestedStatus).toHaveAttribute('aria-expanded', 'false');
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    await expect(variablePanelInputTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputDateStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListDateStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputNumberStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListNumberStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputUrlStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListUrlStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputTextareaStatus).toHaveAttribute('aria-expanded', 'true');
    await expect(variablePanelListTriggeredTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTriggeredTextWithNestedStatus).toHaveAttribute('aria-expanded', 'false');
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    await expect(variablePanelInputTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputDateStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListDateStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputNumberStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListNumberStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputUrlStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListUrlStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputTextareaStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTriggeredTextStatus).toHaveAttribute('aria-expanded', 'true');
    await expect(variablePanelListTriggeredTextWithNestedStatus).toHaveAttribute('aria-expanded', 'false');
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    await expect(variablePanelInputTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputDateStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListDateStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputNumberStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListNumberStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputUrlStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListUrlStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputTextareaStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTriggeredTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTriggeredTextWithNestedStatus).toHaveAttribute('aria-expanded', 'true');
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    await expect(variablePanelInputTextStatus).toHaveAttribute('aria-expanded', 'true');
    await expect(variablePanelListTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputDateStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListDateStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputNumberStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListNumberStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputUrlStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListUrlStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputTextareaStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTriggeredTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTriggeredTextWithNestedStatus).toHaveAttribute('aria-expanded', 'false');
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    await expect(variablePanelInputTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTextStatus).toHaveAttribute('aria-expanded', 'true');
    await expect(variablePanelInputDateStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListDateStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputNumberStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListNumberStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputUrlStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListUrlStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputTextareaStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTriggeredTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTriggeredTextWithNestedStatus).toHaveAttribute('aria-expanded', 'false');
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    await expect(variablePanelInputTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputDateStatus).toHaveAttribute('aria-expanded', 'true');
    await expect(variablePanelListDateStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputNumberStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListNumberStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputUrlStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListUrlStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputTextareaStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTriggeredTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTriggeredTextWithNestedStatus).toHaveAttribute('aria-expanded', 'false');
    await newContract.editVariablesConfiguratorClick();
    await listNumberContractBody.click();
    await expect(variablePanelInputTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputDateStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListDateStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputNumberStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListNumberStatus).toHaveAttribute('aria-expanded', 'true');
    await expect(variablePanelInputUrlStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListUrlStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputTextareaStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTriggeredTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTriggeredTextWithNestedStatus).toHaveAttribute('aria-expanded', 'false');
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    await expect(variablePanelInputTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputDateStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListDateStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputNumberStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListNumberStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputUrlStatus).toHaveAttribute('aria-expanded', 'true');
    await expect(variablePanelListUrlStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputTextareaStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTriggeredTextStatus).toHaveAttribute('aria-expanded', 'false');
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    await expect(variablePanelInputTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTextStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputDateStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListDateStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputNumberStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListNumberStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelInputUrlStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListUrlStatus).toHaveAttribute('aria-expanded', 'true');
    await expect(variablePanelInputTextareaStatus).toHaveAttribute('aria-expanded', 'false');
    await expect(variablePanelListTriggeredTextStatus).toHaveAttribute('aria-expanded', 'false');
    await newContract.editVariablesConfiguratorClick();
    await signerInputUrlContractBody.click();
    await page.waitForTimeout(500);
    await expect(signerVariablesTabGroup0Status).toHaveAttribute('aria-expanded', 'false');
    await expect(signerVariablesTabGroup1Status).toHaveAttribute('aria-expanded', 'false');
    await expect(signerVariablesTabGroup2Status).toHaveAttribute('aria-expanded', 'false');
    await expect(signerVariablesTabGroup3Status).toHaveAttribute('aria-expanded', 'true');
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    await expect(signerVariablesTabGroup0Status).toHaveAttribute('aria-expanded', 'true');
    await expect(signerVariablesTabGroup1Status).toHaveAttribute('aria-expanded', 'false');
    await expect(signerVariablesTabGroup2Status).toHaveAttribute('aria-expanded', 'false');
    await expect(signerVariablesTabGroup3Status).toHaveAttribute('aria-expanded', 'false');
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    await expect(signerVariablesTabGroup0Status).toHaveAttribute('aria-expanded', 'false');
    await expect(signerVariablesTabGroup1Status).toHaveAttribute('aria-expanded', 'true');
    await expect(signerVariablesTabGroup2Status).toHaveAttribute('aria-expanded', 'false');
    await expect(signerVariablesTabGroup3Status).toHaveAttribute('aria-expanded', 'false');
});

test('checkingBehaviorForTheReguralVariableTab @regClickTractsHigh @addEditContract @variables @variablesPanel', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const editVariablesPanelReguralVariablesTab = page.locator('#contracts-details-regular-variables');
    const editVariablesPanelReguralVariablesTabStatus = page.locator('#contracts-details-regular-variables button');
    const editVariablesPanelAddGroupButton = page.locator('#contract-detail-add-group');
    const editVariablesPanelNoReguralVariablesText = page.locator('.no-variables-text');
    const editVariablesPanelSignerVariablesTabStatus = page.locator('#contracts-details-signer-variables button');
    const signerVariablesTabGroup = page.locator('#configurator-variable-group-0');
    const signerVariablesTabGroupStatus = page.locator('#configurator-variable-group-0 mat-expansion-panel-header');
    console.log('addEditContract Checking Behavior For The Regural Variable Tab');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/2354');
    await newContract.editVariablesConfiguratorClick();
    await expect(editVariablesPanelReguralVariablesTab).toBeHidden();
    await expect(editVariablesPanelAddGroupButton).toBeHidden();
    await page.goto('/contract/create/3316');
    await newContract.editVariablesConfiguratorClick();
    await expect(editVariablesPanelReguralVariablesTab).toBeVisible();
    await expect(editVariablesPanelAddGroupButton).toBeVisible();
    await editVariablesPanelAddGroupButton.click();
    await expect(editVariablesPanelReguralVariablesTabStatus).toHaveAttribute('aria-pressed', 'false');
    await expect(editVariablesPanelSignerVariablesTabStatus).toHaveAttribute('aria-pressed', 'true');
    await expect(signerVariablesTabGroup).toBeVisible();
    await expect(signerVariablesTabGroupStatus).toHaveAttribute('aria-expanded', 'true');
    await page.goto('/contract/create/3364');
    await expect(editVariablesPanelReguralVariablesTab).toBeVisible();
    await expect(editVariablesPanelAddGroupButton).toBeVisible();
    await expect(editVariablesPanelNoReguralVariablesText).toBeVisible();
    await expect(editVariablesPanelNoReguralVariablesText).toHaveText(' No regular variables ');
});

test('checkingTheTextContentType @regClickTractsHigh @addEditContract @variables @VariablesPanelInputTypes', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const contractBodyInputText = page.locator('[name="elementName_1"] >> nth=0');
    const editVariablesPunnelInputText = page.locator('#configurator-variable-elementName_1');
    const editVariablesPunnelInputTextInputField = page.locator('#variables-list-form-control-value-elementName_1');
    console.log('addEditContract Checking The Text Content Type');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/2354');
    await expect(contractBodyInputText).toContainText('{{ inputText }}');
    await newContract.editVariablesConfiguratorClick();
    await editVariablesPunnelInputText.click();
    await expect(editVariablesPunnelInputTextInputField).toBeVisible();
    await expect(editVariablesPunnelInputTextInputField).toHaveAttribute('type', 'text');
    await editVariablesPunnelInputTextInputField.type("test100test'@!'@&<>");
    await expect(contractBodyInputText).toContainText("test100test'@!'@&<>");
    await newContract.editVariablesConfiguratorClick();
    await newContract.editVariablesConfiguratorClick();
    await editVariablesPunnelInputText.click();
    await expect(editVariablesPunnelInputTextInputField).toHaveValue("test100test'@!'@&<>");
    await expect(contractBodyInputText).toContainText("test100test'@!'@&<>");
});

test('checkingTheDateContentType @regClickTractsHigh @addEditContract @variables @VariablesPanelInputTypes', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const contractBodyInputDate = page.locator('[name="elementName_2"] >> nth=0');
    const editVariablesPunnelInputDate = page.locator('#configurator-variable-elementName_2');
    const editVariablesPunnelInputDateInputField = page.locator('#variables-list-form-control-value-elementName_2');
    const editVariablesPunnelInputDateInputFieldCalendar = page.locator('mat-calendar');
    console.log('addEditContract Checking The Date Content Type');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/2354');
    await expect(contractBodyInputDate).toContainText('{{ inputDate }}');
    await newContract.editVariablesConfiguratorClick();
    await editVariablesPunnelInputDate.click();
    await editVariablesPunnelInputDateInputField.click();
    await expect(editVariablesPunnelInputDateInputFieldCalendar).toBeVisible();
    await page.locator('.mat-calendar-period-button').click();
    await page.locator('.mat-calendar-body-cell-content >> text=2039').click();
    await page.locator('.mat-calendar-body-cell-content >> text=JUN').click();
    await page.locator('.mat-calendar-body-cell-content >> text=15').click();
    await expect(editVariablesPunnelInputDateInputField).toHaveValue('06/15/2039');
    await expect(contractBodyInputDate).toContainText('06/15/2039');
    await newContract.editVariablesConfiguratorClick();
    await newContract.editVariablesConfiguratorClick();
    await editVariablesPunnelInputDate.click();
    await expect(editVariablesPunnelInputDateInputField).toHaveValue('06/15/2039');
    await expect(contractBodyInputDate).toContainText('06/15/2039');
});

test('checkingTheNumberOption @regClickTractsHigh @addEditContract @variables @VariablesPanelInputTypes', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const contracts = new ContractsPage(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const contractBodyInputNumber = page.locator('[name="elementName_3"] >> nth=0');
    const editVariablesPunnelInputNumber = page.locator('#configurator-variable-elementName_3');
    const editVariablesPunnelInputNumberField = page.locator('#variables-list-form-control-value-elementName_3');
    console.log('addEditContract Checking The Number Option');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/2354');
    await expect(contractBodyInputNumber).toContainText('{{ inputNumber }}');
    await newContract.editVariablesConfiguratorClick();
    await editVariablesPunnelInputNumber.click();
    await editVariablesPunnelInputNumberField.type('test');
    await expect(editVariablesPunnelInputNumberField).toHaveValue('');
    await expect(contractBodyInputNumber).toContainText('{{ inputNumber }}');
    await editVariablesPunnelInputNumberField.type('1234');
    await expect(editVariablesPunnelInputNumberField).toHaveValue('1,234');
    await expect(contractBodyInputNumber).toContainText('1,234');
    await editVariablesPunnelInputNumberField.type('5');
    await expect(editVariablesPunnelInputNumberField).toHaveValue('12,345');
    await expect(contractBodyInputNumber).toContainText('12,345');
    await editVariablesPunnelInputNumberField.type('6');
    await expect(editVariablesPunnelInputNumberField).toHaveValue('123,456');
    await expect(contractBodyInputNumber).toContainText('123,456');
    await editVariablesPunnelInputNumberField.type('7');
    await expect(editVariablesPunnelInputNumberField).toHaveValue('1,234,567');
    await expect(contractBodyInputNumber).toContainText('1,234,567');
    await editVariablesPunnelInputNumberField.fill('');
    await editVariablesPunnelInputNumberField.type('12.3467');
    await expect(editVariablesPunnelInputNumberField).toHaveValue('12.3467');
    await expect(contractBodyInputNumber).toContainText('12.3467');
    await editVariablesPunnelInputNumberField.fill('');
    await editVariablesPunnelInputNumberField.type('.1234567');
    await newContract.editVariablesConfiguratorClick();
    await newContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.saveButtonClick();
    const contractNameValue0 = await contractName.innerText();
    if (contractNameValue0.includes('autotest'))
    {
        await contractName.click();
    }
    await newContract.editVariablesConfiguratorClick();
    await editVariablesPunnelInputNumber.click();
    await expect(editVariablesPunnelInputNumberField).toHaveValue('0.1234567');
    await expect(contractBodyInputNumber).toContainText('0.1234567');
    await page.goto('/contracts/list?&sort=-updated_at');
    const contractNameValue1 = await contractName.innerText();
    if (contractNameValue1.includes('autotest'))
    {
        await contracts.rightArrowClick();
        await contracts.threeDotsMenuDeleteButtonClick();
        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    }
});

test('checkingTheUrlOption @regClickTractsHigh @addEditContract @variables @VariablesPanelInputTypes', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const contracts = new ContractsPage(page);
    const viewContract = new ViewContract(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const contractBodyInputUrl = page.locator('[name="elementName_4"] >> nth=0');
    const editVariablesPunnelInputUrl = page.locator('#configurator-variable-elementName_4');
    const editVariablesPunnelInputUrlField = page.locator('#variables-list-form-control-value-elementName_4');
    const contractViewBodyInputUrl = page.locator('[name="elementName_4"] a >> nth=0');
    console.log('addEditContract Checking The Url Option');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/2354');
    await expect(contractBodyInputUrl).toContainText('{{ inputUrl }}');
    await newContract.editVariablesConfiguratorClick();
    await editVariablesPunnelInputUrl.click();
    await editVariablesPunnelInputUrlField.type('google.com');
    await expect(editVariablesPunnelInputUrlField).toHaveValue('google.com');
    await expect(contractBodyInputUrl).toContainText('google.com');
    await newContract.editVariablesConfiguratorClick();
    await newContract.editVariablesConfiguratorClick();
    await editVariablesPunnelInputUrl.click();
    await expect(editVariablesPunnelInputUrlField).toHaveValue('google.com');
    await expect(contractBodyInputUrl).toContainText('google.com');
    await newContract.editVariablesConfiguratorClick();
    await newContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.previewContractButtonClick();
    await expect(contractViewBodyInputUrl).toBeVisible();
    await expect(contractViewBodyInputUrl).toContainText('google.com');
    await expect(contractViewBodyInputUrl).toHaveAttribute('href', '//google.com');
    await viewContract.editButtonClick();
    await newContract.editVariablesConfiguratorClick();
    await editVariablesPunnelInputUrl.click();
    await editVariablesPunnelInputUrlField.fill('');
    await editVariablesPunnelInputUrlField.type('https://youtube.com');
    await expect(editVariablesPunnelInputUrlField).toHaveValue('https://youtube.com');
    await expect(contractBodyInputUrl).toContainText('https://youtube.com');
    await newContract.editVariablesConfiguratorClick();
    await newContract.previewContractButtonClick();
    await expect(contractViewBodyInputUrl).toBeVisible();
    await expect(contractViewBodyInputUrl).toContainText('https://youtube.com');
    await expect(contractViewBodyInputUrl).toHaveAttribute('href', 'https://youtube.com');
    await page.goto('/contracts/list?&sort=-updated_at');
    const contractNameValue1 = await contractName.innerText();
    if (contractNameValue1.includes('autotest'))
    {
        await contracts.rightArrowClick();
        await contracts.threeDotsMenuDeleteButtonClick();
        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    }
});

test('behaviorForInputVariableWarningPopup @regClickTractsHigh @addEditContract @variables @VariablesPanelInputTypes', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const templatesPage = new TemplatesPage(page);
    const contracts = new ContractsPage(page);
    const viewTemplate = new ViewTemplatePage(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const templateName = page.locator('.template-name-column-link >> nth=0');
    const templateP1 = page.locator('p >> nth=1');
    const templateP2 = page.locator('p >> nth=2');
    const variableNameField0EditVariablePanel = page.locator('#variables-list-form-control-value-0');
    const variable0ContentType = page.locator('[formcontrolname="input_type"] >> nth=0');
    const threeDotsEditVariablesPanelOption0 = page.locator('.variable-panel-three-dots >> nth=0');
    const variableNameField1EditVariablePanel = page.locator('#variables-list-form-control-value-1');
    const inputRadioButton1 = page.locator('#variables-list-form-control-type-1-Input');
    const variable1ContentType = page.locator('[formcontrolname="input_type"] >> nth=1');
    const threeDotsEditVariablesPanelOption1 = page.locator('.variable-panel-three-dots >> nth=1');
    const contractP0 = page.locator('p >> nth=0');
    const contractP1 = page.locator('p >> nth=1');
    const contractP2 = page.locator('p >> nth=2');
    const inputNumberVariableEditVariablePanel = page.locator('#configurator-variable-1');
    console.log('addEditContract Behavior For Input Variable Warning Popup');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-template/create');
    await newTemplate.templateTitleFieldFill(Helpers.generateRandomString());
    await newTemplate.selectCategoryName();
    await newTemplate.textEditorField.type('test100test \n \n \n');
    await templateP1.click();
    await newTemplate.editVariablePanelOpen();
    await newTemplate.newVariableBttonClick();
    await variableNameField0EditVariablePanel.fill('inputText');
    await newTemplate.inputRadioButtonClick();
    await variable0ContentType.click();
    await newTemplate.inputTextVariableClick();
    const removeAttributeVariable0 = await page.$('#configurator-variable-0 mat-expansion-panel-header');
    await removeAttributeVariable0.evaluate(node => node.removeAttribute('aria-disabled'));
    await threeDotsEditVariablesPanelOption0.click();
    await page.waitForSelector('.action-list');
    await newTemplate.threeDotsMenuVariablePanelInsertButtonClick();
    await newTemplate.newVariableBttonClick();
    await variableNameField1EditVariablePanel.fill('inputNumber');
    await inputRadioButton1.click();
    await variable1ContentType.click();
    await newTemplate.inputNumberVariableClick();
    const removeAttributeVariable1 = await page.$('#configurator-variable-1 mat-expansion-panel-header');
    await removeAttributeVariable1.evaluate(node => node.removeAttribute('aria-disabled'));
    await templateP2.click();
    await threeDotsEditVariablesPanelOption1.click();
    await newTemplate.threeDotsMenuVariablePanelInsertButtonClick();
    await newTemplate.editVariablePanelClose();
    await newTemplate.publishToggleClick();
    await newTemplate.createContractButtonClick();
    await newContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.contractDescriptionTitleFieldFillRandom(Helpers.generateRandomString());
    await expect(contractP0).toHaveText('test100test');
    await expect(contractP1).toContainText('{{ inputText }}');
    await expect(contractP2).toContainText('{{ inputNumber }}');
    await newContract.saveButtonClick();
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue0 = await templateName.innerText();
    if (templateNameValue0.includes('autotest'))
    {
        await templateName.click();
    }
    await viewTemplate.editTemplateButtonClick();
    await newTemplate.editVariablePanelOpen();
    await inputNumberVariableEditVariablePanel.click();
    await variableNameField1EditVariablePanel.click();
    await variableNameField1EditVariablePanel.type('Test100test');
    await newTemplate.editVariablePanelClose();
    await newTemplate.saveButtonClick();
    await page.goto('/contracts/list?&sort=-updated_at');
    const contractNameValue0 = await contractName.innerText();
    if (contractNameValue0.includes('autotest'))
    {
        await contractName.click();
    }
    await expect(contractP0).toHaveText('test100test');
    await expect(contractP1).toContainText('{{ inputText }}');
    await expect(contractP2).toContainText('{{ inputNumber }}');
    await newContract.alertIconClick();
    await newContract.alertIconPopupApplyButtonClickCheckboxNotChecked();
    await page.waitForTimeout(1000);
    await expect(contractP0).toHaveText('test100test');
    await expect(contractP1).toContainText('{{ inputTextTest100test }}‌');
    await expect(contractP2).toContainText('{{ inputNumber }}');
    await page.goto('/contracts/list?&sort=-updated_at');
    const contractNameValue1 = await contractName.innerText();
    if (contractNameValue1.includes('autotest'))
    {
        await contracts.rightArrowClick();
        await contracts.threeDotsMenuDeleteButtonClick();
        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    }
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
});

test('checkingTheTextEditor @regClickTractsMedium @addEditContract @variables @VariablesPanelTextarea', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const inputTextareaVariableEditVariablePanel = page.locator('#configurator-variable-elementName_6');
    const inputTextareaVariableTextEditorEditVariablePanel = page.locator('.cke_enable_context_menu');
    const inputTextareaVariableTextEditorCounterEditVariablePanel = page.locator('.triggered-text-counter-value');
    const inputTextareaVariableTextEditorErrorEditVariablePanel = page.locator('.triggered-text-counter mat-error');
    console.log('addEditContract Checking The Text Editor');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/2354');
    await newContract.editVariablesConfiguratorClick();
    await inputTextareaVariableEditVariablePanel.click();
    await expect(inputTextareaVariableTextEditorEditVariablePanel).toBeVisible();
    await expect(inputTextareaVariableTextEditorEditVariablePanel).toHaveAttribute('spellcheck', 'false');
    await expect(inputTextareaVariableTextEditorEditVariablePanel).toHaveAttribute('role', 'textbox');
    await expect(inputTextareaVariableTextEditorEditVariablePanel).toHaveAttribute('aria-multiline', 'true');
    await expect(inputTextareaVariableTextEditorCounterEditVariablePanel).toBeVisible();
    await expect(inputTextareaVariableTextEditorCounterEditVariablePanel).toHaveText('0 characters');
    await inputTextareaVariableTextEditorEditVariablePanel.type('test100test!@£)(*(^&*&^!@)(');
    await newContract.editVariablesConfiguratorClick();
    await newContract.publishToggleClick();
    await newContract.saveAndGenerateLinkButtonForErrorClick();
    await newContract.editVariablesConfiguratorClick();
    await inputTextareaVariableEditVariablePanel.click();
    await expect(inputTextareaVariableTextEditorErrorEditVariablePanel).toBeHidden();
});

test('displayingTheVariableDrodownInTheTextEditor @regClickTractsLow @addEditContract @variables @VariablesPanelTextarea', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const inputTextareaVariableEditVariablePanel = page.locator('#configurator-variable-elementName_6');
    const inputTextareaVariableTextEditorNestedDropDownEditVariablePanel = page.locator('.nested-variable-editor-toolbar');
    console.log('addEditContract Displaying The Variable Drodown In The Text Editor');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/2354');
    await newContract.editVariablesConfiguratorClick();
    await inputTextareaVariableEditVariablePanel.click();
    await expect(inputTextareaVariableTextEditorNestedDropDownEditVariablePanel).toBeVisible();
});

test('checkingDisplayingTheCertainVariablesInTheTextEditor @regClickTractsHigh @addEditContract @variables @VariablesPanelTextarea', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const inputTextareaVariableEditVariablePanel = page.locator('#configurator-variable-elementName_6');
    const inputTextareaVariableTextEditorNestedDropDownEditVariablePanel = page.locator('.nested-variable-editor-toolbar');
    const variableDropDownNestedVariable = page.frameLocator('.cke_panel_frame');
    console.log('addEditContract Checking Displaying The Certain Variables In The Text Editor');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/2354');
    await newContract.editVariablesConfiguratorClick();
    await inputTextareaVariableEditVariablePanel.click();
    await inputTextareaVariableTextEditorNestedDropDownEditVariablePanel.click();
    await expect(variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=0')).toBeVisible();
    await expect(variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=0')).toHaveText('inputDate');
    await expect(variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=1')).toBeVisible();
    await expect(variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=1')).toHaveText('inputNumber');
    await expect(variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=2')).toBeVisible();
    await expect(variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=2')).toHaveText('inputText');
    await expect(variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=3')).toBeVisible();
    await expect(variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=3')).toHaveText('inputUrl');
    await expect(variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=4')).toBeVisible();
    await expect(variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=4')).toHaveText('listDate');
    await expect(variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=5')).toBeVisible();
    await expect(variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=5')).toHaveText('listNumber');
    await expect(variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=6')).toBeVisible();
    await expect(variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=6')).toHaveText('listText');
    await expect(variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=7')).toBeVisible();
    await expect(variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=7')).toHaveText('listUrl');
    await expect(variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=8')).toBeVisible();
    await expect(variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=8')).toHaveText('signerInputDate');
    await expect(variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=9')).toBeVisible();
    await expect(variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=9')).toHaveText('signerInputNumber');
    await expect(variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=10')).toBeVisible();
    await expect(variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=10')).toHaveText('signerInputText');
    await expect(variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=11')).toBeVisible();
    await expect(variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=11')).toHaveText('signerInputUrl');
    await expect(variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=12')).toBeVisible();
    await expect(variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=12')).toHaveText('signerListDate');
    await expect(variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=13')).toBeVisible();
    await expect(variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=13')).toHaveText('signerListNumber');
    await expect(variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=14')).toBeVisible();
    await expect(variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=14')).toHaveText('signerListText');
    await expect(variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=15')).toBeVisible();
    await expect(variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=15')).toHaveText('signerListUrl');
});

test('behaviorOfTheVariablesDropdownWhenNoContentTypesAreAdded @regClickTractsLow @addEditContract @variables @VariablesPanelTextarea', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const templatesPage = new TemplatesPage(page);
    const viewTemplate = new ViewTemplatePage(page);
    const templateName = page.locator('.template-name-column-link >> nth=0');
    const threeDotsEditVariablesPanelOption0 = page.locator('.variable-panel-three-dots >> nth=0');
    const inputRadioButton0 = page.locator('#variables-list-form-control-type-0-Input');
    const variableContentType0 = page.locator('[formcontrolname="input_type"] >> nth=0');
    const inputTextareaVariableEditVariablePanel = page.locator('#configurator-variable-elementName_1');
    const inputTextareaVariableTextEditorNestedDropDownEditVariablePanel = page.locator('.nested-variable-editor-toolbar');
    const variableDropDownNestedVariable = page.frameLocator('.cke_panel_frame');
    console.log('addEditContract Checking Behavior Of The Variables Dropdown When No Content Types Are Added');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-template/create');
    await newTemplate.templateTitleFieldFill(Helpers.generateRandomString());
    await newTemplate.selectCategoryName();
    await newTemplate.textEditorField.type('test100test');
    await newTemplate.editVariablePanelOpen();
    await newTemplate.newVariableBttonClick();
    await inputRadioButton0.click();
    await variableContentType0.click();
    await newTemplate.inputTextareaVariableClick();
    const removeAttributeVariable0 = await page.$('#configurator-variable-0 mat-expansion-panel-header');
    await removeAttributeVariable0.evaluate(node => node.removeAttribute('aria-disabled'));
    await threeDotsEditVariablesPanelOption0.click();
    await page.waitForSelector('.action-list');
    await newTemplate.threeDotsMenuVariablePanelInsertButtonClick();
    await newTemplate.editVariablePanelClose();
    await newTemplate.publishToggleClick();
    await newTemplate.createContractButtonClick();
    await newContract.editVariablesConfiguratorClick();
    await inputTextareaVariableEditVariablePanel.click();
    await inputTextareaVariableTextEditorNestedDropDownEditVariablePanel.click();
    await expect(variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=0')).toBeVisible();
    await expect(variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=0')).toHaveText('No nested variables yet');
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
});

test('validationForTheTextEditorPublish/DraftContract @regClickTractsHigh @addEditContract @variables @VariablesPanelTextarea', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const inputTextareaVariableEditVariablePanel = page.locator('#configurator-variable-elementName_6');
    const inputTextareaVariableTextEditorErrorEditVariablePanel = page.locator('.triggered-text-counter mat-error');
    console.log('addEditContract Validation For The Text Editor Publish/Draft Contract');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/2354');
    await newContract.contractTitleField.fill('');
    await newContract.publishToggleClick();
    await newContract.saveAndGenerateLinkButtonForErrorClick();
    await newContract.editVariablesConfiguratorClick();
    await inputTextareaVariableEditVariablePanel.click();
    await expect(inputTextareaVariableTextEditorErrorEditVariablePanel).toBeVisible();
    await expect(inputTextareaVariableTextEditorErrorEditVariablePanel).toHaveText(' Please fill in this field ');
    await newContract.editVariablesConfiguratorClick();
    await newContract.draftToggleClick();
    await newContract.saveButtonForErrorClick();
    await newContract.editVariablesConfiguratorClick();
    await inputTextareaVariableEditVariablePanel.click();
    await expect(inputTextareaVariableTextEditorErrorEditVariablePanel).toBeHidden();
});

test('displayingTheNestedVariableInTheTextEditoer @regClickTractsHigh @addEditContract @variables @VariablesPanelTextarea', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const inputTextareaVariableEditVariablePanel = page.locator('#configurator-variable-elementName_6');
    const inputTextareaVariableTextEditorEditVariablePanel = page.locator('.cke_enable_context_menu');
    const inputTextareaVariableTextEditorNestedDropDownEditVariablePanel = page.locator('.nested-variable-editor-toolbar');
    const variableDropDownNestedVariable = page.frameLocator('.cke_panel_frame');
    console.log('addEditContract Validation For The Text Editor Publish/Draft Contract');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/2354');
    await newContract.editVariablesConfiguratorClick();
    await inputTextareaVariableEditVariablePanel.click();
    await inputTextareaVariableTextEditorEditVariablePanel.click();
    await inputTextareaVariableTextEditorNestedDropDownEditVariablePanel.click();
    await variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=0').click();
    await expect(inputTextareaVariableTextEditorEditVariablePanel).toContainText('{{ inputDate }}');
});

test('checkingDeletingTheNestedWithSavingTheContract @regClickTractsLow @addEditContract @variables @VariablesPanelTextarea', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const templatesPage = new TemplatesPage(page);
    const contracts = new ContractsPage(page);
    const viewTemplate = new ViewTemplatePage(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const templateName = page.locator('.template-name-column-link >> nth=0');
    const templateP1 = page.locator('p >> nth=1');
    const variableNameField0EditVariablePanel = page.locator('#variables-list-form-control-value-0');
    const variable0ContentType = page.locator('[formcontrolname="input_type"] >> nth=0');
    const variableNameField1EditVariablePanel = page.locator('#variables-list-form-control-value-1');
    const inputRadioButton1 = page.locator('#variables-list-form-control-type-1-Input');
    const variable1ContentType = page.locator('[formcontrolname="input_type"] >> nth=1');
    const threeDotsEditVariablesPanelOption1 = page.locator('.variable-panel-three-dots >> nth=1');
    const contractP1 = page.locator('p >> nth=1');
    const inputTextareaVariableEditVariablePanel1 = page.locator('#configurator-variable-elementName_6');
    const inputTextareaVariableEditVariablePanel0 = page.locator('#configurator-variable-elementName_2');
    const inputTextareaVariableTextEditorEditVariablePanel = page.locator('.cke_enable_context_menu');
    const inputTextareaVariableTextEditorNestedDropDownEditVariablePanel = page.locator('.nested-variable-editor-toolbar');
    const variableDropDownNestedVariable = page.frameLocator('.cke_panel_frame');
    const inputTextVariableEditVariablePanel = page.locator('#configurator-variable-elementName_1');
    const inputTextVariableTextFieldEditVariablePanel = page.locator('#variables-list-form-control-value-elementName_1');
    const inputTextareaContractBody = page.locator('[name="elementName_6"]');
    console.log('addEditContract Checking Deleting The Nested With Saving The Contract');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-template/create');
    await newTemplate.templateTitleFieldFill(Helpers.generateRandomString());
    await newTemplate.selectCategoryName();
    await newTemplate.textEditorField.type('test100test \n \n');
    await newTemplate.editVariablePanelOpen();
    await newTemplate.newVariableBttonClick();
    await variableNameField0EditVariablePanel.fill('inputText');
    await newTemplate.inputRadioButtonClick();
    await variable0ContentType.click();
    await newTemplate.inputTextVariableClick();
    await newTemplate.newVariableBttonClick();
    await variableNameField1EditVariablePanel.fill('inputTextarea');
    await inputRadioButton1.click();
    await variable1ContentType.click();
    await newTemplate.inputTextareaVariableClick();
    await templateP1.click();
    const removeAttributeVariable1 = await page.$('#configurator-variable-1 mat-expansion-panel-header');
    await removeAttributeVariable1.evaluate(node => node.removeAttribute('aria-disabled'));
    await threeDotsEditVariablesPanelOption1.click();
    await newTemplate.threeDotsMenuVariablePanelInsertButtonClick();
    await newTemplate.editVariablePanelClose();
    await newTemplate.publishToggleClick();
    await newTemplate.createContractButtonClick();
    await newContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.editVariablesConfiguratorClick();
    await inputTextareaVariableEditVariablePanel0.click();
    await inputTextareaVariableTextEditorEditVariablePanel.click();
    await inputTextareaVariableTextEditorNestedDropDownEditVariablePanel.click();
    await variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=0').click();
    await expect(inputTextVariableEditVariablePanel).toBeVisible();
    await inputTextVariableEditVariablePanel.click();
    await inputTextVariableTextFieldEditVariablePanel.type('test100test');
    await expect(contractP1).toContainText('test100test');
    await newContract.editVariablesConfiguratorClick();
    await newContract.saveButtonClick();
    const contractNameValue0 = await contractName.innerText();
    if (contractNameValue0.includes('autotest'))
    {
        await contractName.click();
    }
    await expect(contractP1).toContainText('test100test');
    await newContract.editVariablesConfiguratorClick();
    await expect(inputTextVariableEditVariablePanel).toBeVisible();
    await inputTextareaVariableEditVariablePanel0.click();
    await page.waitForTimeout(1000);
    await inputTextareaVariableTextEditorEditVariablePanel.click();
    await page.keyboard.press('Meta+A');
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(1000);
    await expect(contractP1).toContainText('{{ inputTextarea }}');
    await expect(inputTextVariableEditVariablePanel).toBeHidden();
    await inputTextareaVariableTextEditorEditVariablePanel.click();
    await inputTextareaVariableTextEditorNestedDropDownEditVariablePanel.click();
    await variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=0').click();
    await expect(contractP1).toContainText('{{ inputText }}');
    await page.goto('/contracts/list?&sort=-updated_at');
    const contractNameValue1 = await contractName.innerText();
    if (contractNameValue1.includes('autotest'))
    {
        await contracts.rightArrowClick();
        await contracts.threeDotsMenuDeleteButtonClick();
        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    }
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue0 = await templateName.innerText();
    if (templateNameValue0.includes('autotest'))
    {
        await templateName.click();
        await viewTemplate.editTemplateButtonClick();
        await newTemplate.draftToggleClick();
        await newTemplate.saveButtonClick();
        await page.goto('/contract-templates/list?&sort=-updated_at');
        await templatesPage.threeDotsMenuDeleteButtonClick();
        await templatesPage.deletePopupDeleteButtonClick();
    }
    await page.goto('/contract/create/2354');
    await newContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.editVariablesConfiguratorClick();
    await inputTextareaVariableEditVariablePanel1.click();
    await inputTextareaVariableTextEditorEditVariablePanel.click();
    await inputTextareaVariableTextEditorNestedDropDownEditVariablePanel.click();
    await variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=2').click();
    await inputTextVariableEditVariablePanel.click();
    await inputTextVariableTextFieldEditVariablePanel.type('test100test');
    await expect(inputTextareaContractBody).toContainText('test100test');
    await newContract.editVariablesConfiguratorClick();
    await newContract.saveButtonClick();
    const contractNameValue2 = await contractName.innerText();
    if (contractNameValue2.includes('autotest'))
    {
        await contractName.click();
    }
    await newContract.editVariablesConfiguratorClick();
    await inputTextareaVariableEditVariablePanel1.click();
    await inputTextareaVariableTextEditorEditVariablePanel.click();
    await page.waitForTimeout(1000);
    await inputTextareaVariableTextEditorEditVariablePanel.click();
    await page.keyboard.press('Meta+A');
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(1000);
    await inputTextareaVariableTextEditorEditVariablePanel.click();
    await inputTextareaVariableTextEditorNestedDropDownEditVariablePanel.click();
    await variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=2').click();
    await expect(inputTextareaContractBody).toContainText('test100test');
    await page.goto('/contracts/list?&sort=-updated_at');
    const contractNameValue3 = await contractName.innerText();
    if (contractNameValue3.includes('autotest'))
    {
        await contracts.rightArrowClick();
        await contracts.threeDotsMenuDeleteButtonClick();
        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    }
});

test('checkingTheSymbolsCounterOfTheTextEditor @regClickTractsLow @addEditContract @variables @VariablesPanelTextarea', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const inputTextareaVariableEditVariablePanel = page.locator('#configurator-variable-elementName_6');
    const inputTextareaVariableTextEditorEditVariablePanel = page.locator('.cke_enable_context_menu');
    const inputTextareaVariableTextEditorCounterEditVariablePanel = page.locator('.triggered-text-counter-value');
    console.log('addEditContract Checking The Symbols Counter Of The Text Editor');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/2354');
    await newContract.editVariablesConfiguratorClick();
    await inputTextareaVariableEditVariablePanel.click();
    await inputTextareaVariableTextEditorEditVariablePanel.click();
    await inputTextareaVariableTextEditorEditVariablePanel.type('test100test');
    await expect(inputTextareaVariableTextEditorCounterEditVariablePanel).toHaveText('11 characters including spaces ');
    await inputTextareaVariableTextEditorEditVariablePanel.type(' test 100 test');
    await expect(inputTextareaVariableTextEditorCounterEditVariablePanel).toHaveText('25 characters including spaces ');
});

test('behaviorForInput/ListTextareaVariableWarningPopup @regClickTractsHigh @addEditContract @variables @variablesPanelTextarea', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const templatesPage = new TemplatesPage(page);
    const contracts = new ContractsPage(page);
    const viewTemplate = new ViewTemplatePage(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const templateName = page.locator('.template-name-column-link >> nth=0');
    const templateP1 = page.locator('p >> nth=1');
    const templateP2 = page.locator('p >> nth=2');
    const templateP3 = page.locator('p >> nth=3');
    const variableNameField0EditVariablePanel = page.locator('#variables-list-form-control-value-0');
    const variable0ContentType = page.locator('[formcontrolname="input_type"] >> nth=0');
    const threeDotsEditVariablesPanelOption0 = page.locator('.variable-panel-three-dots >> nth=0');
    const variableNameField1EditVariablePanel = page.locator('#variables-list-form-control-value-1');
    const inputRadioButton1 = page.locator('#variables-list-form-control-type-1-Input');
    const variable1ContentType = page.locator('[formcontrolname="input_type"] >> nth=1');
    const checkboxTextEditor = page.locator('.cke_enable_context_menu >> nth=1');
    const checkboxNestedDropDown = page.locator('.nested-variable-editor-toolbar');
    const variableDropDownNestedVariable = page.frameLocator('.cke_panel_frame');
    const threeDotsEditVariablesPanelOption1 = page.locator('.variable-panel-three-dots >> nth=1');
    const contractP0 = page.locator('p >> nth=0');
    const contractP1 = page.locator('p >> nth=1');
    const contractP2 = page.locator('p >> nth=2');
    const contractP3 = page.locator('p >> nth=3');
    const inputTextVariableEditVariablePanel = page.locator('#configurator-variable-1');
    console.log('addEditContract Behavior For Input/List Textarea Variable Warning Popup');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-template/create');
    await newTemplate.templateTitleFieldFill(Helpers.generateRandomString());
    await newTemplate.selectCategoryName();
    await newTemplate.textEditorField.type('test100test \n \n \n');
    await templateP1.click();
    await newTemplate.editVariablePanelOpen();
    await newTemplate.newVariableBttonClick();
    await variableNameField0EditVariablePanel.fill('inputText');
    await newTemplate.inputRadioButtonClick();
    await variable0ContentType.click();
    await newTemplate.inputTextVariableClick();
    const removeAttributeVariable0 = await page.$('#configurator-variable-0 mat-expansion-panel-header');
    await removeAttributeVariable0.evaluate(node => node.removeAttribute('aria-disabled'));
    await threeDotsEditVariablesPanelOption0.click();
    await page.waitForSelector('.action-list');
    await newTemplate.threeDotsMenuVariablePanelInsertButtonClick();
    await newTemplate.newVariableBttonClick();
    await variableNameField1EditVariablePanel.fill('inputCheckbox');
    await inputRadioButton1.click();
    await variable1ContentType.click();
    await newTemplate.inputCheckboxVariableClick();
    await checkboxTextEditor.type('test100test \n');
    await checkboxNestedDropDown.click();
    await variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=0').click();
    const removeAttributeVariable1 = await page.$('#configurator-variable-1 mat-expansion-panel-header');
    await removeAttributeVariable1.evaluate(node => node.removeAttribute('aria-disabled'));
    await templateP2.click();
    await threeDotsEditVariablesPanelOption1.click();
    await newTemplate.threeDotsMenuVariablePanelInsertButtonClick();
    await newTemplate.editVariablePanelClose();
    await newTemplate.publishToggleClick();
    await newTemplate.createContractButtonClick();
    await newContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.contractDescriptionTitleFieldFillRandom(Helpers.generateRandomString());
    await expect(contractP0).toHaveText('test100test');
    await expect(contractP1).toContainText('{{ inputText }}');
    await expect(contractP2).toContainText('test100test {{ inputText }}');
    await newContract.saveButtonClick();
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue0 = await templateName.innerText();
    if (templateNameValue0.includes('autotest'))
    {
        await templateName.click();
    }
    await viewTemplate.editTemplateButtonClick();
    await newTemplate.editVariablePanelOpen();
    await inputTextVariableEditVariablePanel.click();
    await variableNameField1EditVariablePanel.click();
    await variableNameField1EditVariablePanel.type('Test100test');
    await newTemplate.editVariablePanelClose();
    await newTemplate.saveButtonClick();
    await page.goto('/contracts/list?&sort=-updated_at');
    const contractNameValue0 = await contractName.innerText();
    if (contractNameValue0.includes('autotest'))
    {
        await contractName.click();
    }
    await expect(contractP0).toHaveText('test100test');
    await expect(contractP1).toContainText('{{ inputText }}');
    await expect(contractP2).toContainText('test100test {{ inputText }}‌');
    await newContract.alertIconClick();
    await newContract.alertIconPopupApplyButtonClickCheckboxNotChecked();
    await page.waitForTimeout(1000);
    await expect(contractP0).toHaveText('test100test');
    await expect(contractP1).toContainText('{{ inputTextTest100test }}‌');
    await expect(contractP2).toContainText('test100test {{ inputTextTest100test }}‌');
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue1 = await templateName.innerText();
    if (templateNameValue1.includes('autotest'))
    {
        await templateName.click();
    }
    await viewTemplate.editTemplateButtonClick();
    await templateP3.click();
    await newTemplate.textEditorField.type('test100test');
    await newTemplate.saveButtonClick();
    await page.goto('/contracts/list?&sort=-updated_at');
    const contractNameValue1 = await contractName.innerText();
    if (contractNameValue1.includes('autotest'))
    {
        await contractName.click();
    }
    await expect(contractP0).toHaveText('test100test');
    await expect(contractP1).toContainText('{{ inputText }}');
    await expect(contractP2).toContainText('test100test {{ inputText }}‌');
    await expect(contractP3).toContainText('');
    await newContract.alertIconClick();
    await newContract.alertIconPopupApplyButtonClickCheckboxNotChecked();
    await page.waitForTimeout(1000);
    await expect(contractP0).toHaveText('test100test');
    await expect(contractP1).toContainText('{{ inputTextTest100test }}‌');
    await expect(contractP2).toContainText('test100test {{ inputTextTest100test }}‌');
    await expect(contractP3).toContainText('test100test');
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue2 = await templateName.innerText();
    if (templateNameValue2.includes('autotest'))
    {
        await templateName.click();
    }
    await viewTemplate.editTemplateButtonClick();
    const removeAttributeVariable2 = await page.$('#configurator-variable-1 mat-expansion-panel-header');
    await removeAttributeVariable2.evaluate(node => node.removeAttribute('aria-disabled'));
    await threeDotsEditVariablesPanelOption1.click();
    await newTemplate.threeDotsMenuVariablePanelDeleteButtonClick();
    await newTemplate.saveButtonClick();
    await page.goto('/contracts/list?&sort=-updated_at');
    const contractNameValue2 = await contractName.innerText();
    if (contractNameValue2.includes('autotest'))
    {
        await contractName.click();
    }
    await expect(contractP0).toHaveText('test100test');
    await expect(contractP1).toContainText('{{ inputText }}');
    await expect(contractP2).toContainText('test100test {{ inputText }}‌');
    await expect(contractP3).toContainText('');
    await newContract.alertIconClick();
    await newContract.alertIconPopupApplyButtonClickCheckboxNotChecked();
    await page.waitForTimeout(1000);
    await expect(contractP0).toHaveText('test100test');
    await expect(contractP1).toContainText('‌');
    await expect(contractP2).toContainText('test100test');
    await expect(contractP3).toContainText('test100test');
    await page.goto('/contracts/list?&sort=-updated_at');
    const contractNameValue3 = await contractName.innerText();
    if (contractNameValue3.includes('autotest'))
    {
        await contracts.rightArrowClick();
        await contracts.threeDotsMenuDeleteButtonClick();
        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    }
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue3 = await templateName.innerText();
    if (templateNameValue3.includes('autotest'))
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

test('displayingTheCheckboxVariableInTheContractBody @regClickTractsHigh @addEditContract @variables @VariablesPanelCheckbox', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const checkboxVariable = page.locator('[name="elementName_5"] >> nth=0');
    const checkboxVariableCheckbox = page.locator('[name="elementName_5"] #elementName_5');
    const checkboxVariableLabel = page.locator('[name="elementName_5"] .checkbox-variable-label');
    console.log('addEditContract Checking Deleting The Nested With Saving The Contract');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/2354');
    await expect(checkboxVariable).toBeVisible();
    await expect(checkboxVariableCheckbox).toHaveAttribute('disabled', '');
    await expect(checkboxVariableLabel).toBeVisible();
    await expect(checkboxVariableLabel).toHaveText('Hi lets try to use variables');
    await expect(checkboxVariable).toHaveClass('checkbox-text no-select');
});

test('displayingTheNestedVariableInTheCheckboxVariable @regClickTractsHigh @addEditContract @variables @VariablesPanelCheckbox', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const checkboxVariableWithNested = page.locator('[name="elementName_22"] p >> nth=0');
    console.log('addEditContract Displaying The Nested Variable In The Checkbox Variable');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/2354');
    const getSelecotrs = await checkboxVariableWithNested.innerHTML();
    await expect(getSelecotrs).toContain('name="elementName_4"');
    await expect(getSelecotrs).toContain('{{ inputUrl }}');
});

test('choosingTheOptionsForTheListContentType @regClickTractsHigh @addEditContract @variables @VariablesPanelListTypes', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const listTextContractBody = page.locator('[name="elementName_7"] >> nth=0');
    const listDateContractBody = page.locator('[name="elementName_8"] >> nth=0');
    const listNumberContractBody = page.locator('[name="elementName_9"] >> nth=0');
    const listUrlContractBody = page.locator('[name="elementName_10"] >> nth=0');
    const listTextVariableVariablesPanel = page.locator('#configurator-variable-elementName_7');
    const listTextVariableVariablesPanelSelect = page.locator('#variables-list-form-control-value-elementName_7');
    const listDateVariableVariablesPanel = page.locator('#configurator-variable-elementName_8');
    const listDateVariableVariablesPanelSelect = page.locator('#variables-list-form-control-value-elementName_8');
    const listNumberVariableVariablesPanel = page.locator('#configurator-variable-elementName_9');
    const listNumberVariableVariablesPanelSelect = page.locator('#variables-list-form-control-value-elementName_9');
    const listUrlVariableVariablesPanel = page.locator('#configurator-variable-elementName_10');
    const listUrlVariableVariablesPanelSelect = page.locator('#variables-list-form-control-value-elementName_10');
    const variablesPanelSelectOption0 = page.locator('.mat-option >> nth=0');
    const variablesPanelSelectOption1 = page.locator('.mat-option >> nth=1');
    const variablesPanelSelectOption2 = page.locator('.mat-option >> nth=2');
    console.log('addEditContract Choosing The Options For The List Content Type');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/2354');
    await newContract.editVariablesConfiguratorClick();
    await listTextVariableVariablesPanel.click();
    await listTextVariableVariablesPanelSelect.click();
    await expect(variablesPanelSelectOption0).toHaveText(' Robert ');
    await expect(variablesPanelSelectOption1).toHaveText(' Kevin ');
    await expect(variablesPanelSelectOption2).toHaveText(' Kane ');
    await variablesPanelSelectOption0.click();
    await expect(listTextContractBody).toContainText('Robert');
    await listTextVariableVariablesPanelSelect.click();
    await variablesPanelSelectOption1.click();
    await expect(listTextContractBody).toContainText('Kevin');
    await listTextVariableVariablesPanelSelect.click();
    await variablesPanelSelectOption2.click();
    await expect(listTextContractBody).toContainText('Kane');
    await listDateVariableVariablesPanel.click();
    await listDateVariableVariablesPanelSelect.click();
    await expect(variablesPanelSelectOption0).toHaveText(' 08/25/1996 ');
    await expect(variablesPanelSelectOption1).toHaveText(' 05/14/2004 ');
    await expect(variablesPanelSelectOption2).toHaveText(' 08/22/2023 ');
    await variablesPanelSelectOption0.click();
    await expect(listDateContractBody).toContainText('08/25/1996');
    await listDateVariableVariablesPanelSelect.click();
    await variablesPanelSelectOption1.click();
    await expect(listDateContractBody).toContainText('05/14/2004');
    await listDateVariableVariablesPanelSelect.click();
    await variablesPanelSelectOption2.click();
    await expect(listDateContractBody).toContainText('08/22/2023');
    await listNumberVariableVariablesPanel.click();
    await listNumberVariableVariablesPanelSelect.click();
    await expect(variablesPanelSelectOption0).toHaveText(' 13,412,234 ');
    await expect(variablesPanelSelectOption1).toHaveText(' 56,544,566 ');
    await expect(variablesPanelSelectOption2).toHaveText(' 3,123,123.312312312 ');
    await variablesPanelSelectOption0.click();
    await expect(listNumberContractBody).toContainText('13,412,234');
    await listNumberVariableVariablesPanelSelect.click();
    await variablesPanelSelectOption1.click();
    await expect(listNumberContractBody).toContainText('56,544,566');
    await listNumberVariableVariablesPanelSelect.click();
    await variablesPanelSelectOption2.click();
    await expect(listNumberContractBody).toContainText('3,123,123.312312312');
    await listUrlVariableVariablesPanel.click();
    await listUrlVariableVariablesPanelSelect.click();
    await expect(variablesPanelSelectOption0).toHaveText(' youtube.com ');
    await expect(variablesPanelSelectOption1).toHaveText(' github.com ');
    await expect(variablesPanelSelectOption2).toHaveText(' google.com ');
    await variablesPanelSelectOption0.click();
    await expect(listUrlContractBody).toContainText('youtube.com');
    await listUrlVariableVariablesPanelSelect.click();
    await variablesPanelSelectOption1.click();
    await expect(listUrlContractBody).toContainText('github.com');
    await listUrlVariableVariablesPanelSelect.click();
    await variablesPanelSelectOption2.click();
    await expect(listUrlContractBody).toContainText('google.com');
});

test('validationOfTheListContentTypes @regClickTractsMedium @addEditContract @variables @VariablesPanelListTypes', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const listTextContractBody = page.locator('[name="elementName_7"] >> nth=0');
    const listDateContractBody = page.locator('[name="elementName_8"] >> nth=0');
    const listNumberContractBody = page.locator('[name="elementName_9"] >> nth=0');
    const listUrlContractBody = page.locator('[name="elementName_10"] >> nth=0');
    const listTextVariableVariablesPanel = page.locator('#configurator-variable-elementName_7');
    const listTextVariableVariablesPanelBorderColor = page.locator('#configurator-variable-elementName_7 .mat-form-field-infix');
    const listDateVariableVariablesPanel = page.locator('#configurator-variable-elementName_8');
    const listDateVariableVariablesPanelBorderColor = page.locator('#configurator-variable-elementName_8 .mat-form-field-infix');
    const listNumberVariableVariablesPanel = page.locator('#configurator-variable-elementName_9');
    const listNumberVariableVariablesPanelBorderColor = page.locator('#configurator-variable-elementName_9 .mat-form-field-infix');
    const listUrlVariableVariablesPanel = page.locator('#configurator-variable-elementName_10');
    const listUrlVariableVariablesPanelBorderColor = page.locator('#configurator-variable-elementName_10 .mat-form-field-infix');
    console.log('addEditContract Validation Of The List Content Types');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/2354');
    await newContract.publishToggleClick();
    await newContract.saveAndGenerateLinkButtonForErrorClick();
    await expect(listTextContractBody).toHaveCSS('color', 'rgb(255, 0, 0)');
    await expect(listDateContractBody).toHaveCSS('color', 'rgb(255, 0, 0)');
    await expect(listNumberContractBody).toHaveCSS('color', 'rgb(255, 0, 0)');
    await expect(listUrlContractBody).toHaveCSS('color', 'rgb(255, 0, 0)');
    await newContract.editVariablesConfiguratorClick();
    await listTextVariableVariablesPanel.click();
    await expect(listTextVariableVariablesPanelBorderColor).toHaveCSS('border-color', 'rgb(255, 0, 0)');
    await listDateVariableVariablesPanel.click();
    await expect(listDateVariableVariablesPanelBorderColor).toHaveCSS('border-color', 'rgb(255, 0, 0)');
    await listNumberVariableVariablesPanel.click();
    await expect(listNumberVariableVariablesPanelBorderColor).toHaveCSS('border-color', 'rgb(255, 0, 0)');
    await listUrlVariableVariablesPanel.click();
    await expect(listUrlVariableVariablesPanelBorderColor).toHaveCSS('border-color', 'rgb(255, 0, 0)');
});

test('behaviorForListVariableWarningPopup @regClickTractsHigh @addEditContract @variables @VariablesPanelListTypes', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const templatesPage = new TemplatesPage(page);
    const contracts = new ContractsPage(page);
    const viewTemplate = new ViewTemplatePage(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const templateName = page.locator('.template-name-column-link >> nth=0');
    const templateP1 = page.locator('p >> nth=1');
    const templateP2 = page.locator('p >> nth=2');
    const variableNameField0EditVariablePanel = page.locator('#variables-list-form-control-value-0');
    const variable0ContentType = page.locator('[formcontrolname="input_type"] >> nth=0');
    const listTextOptionField = page.locator('.variables-list-form-control-option-value textarea >> nth=0');
    const threeDotsEditVariablesPanelOption0 = page.locator('.variable-panel-three-dots >> nth=0');
    const variableNameField1EditVariablePanel = page.locator('#variables-list-form-control-value-1');
    const listRadioButton1 = page.locator('#variables-list-form-control-type-1-List');
    const variable1ContentType = page.locator('[formcontrolname="input_type"] >> nth=1');
    const listNumberOptionField = page.locator('.variables-list-form-control-option-value textarea >> nth=1');
    const threeDotsEditVariablesPanelOption1 = page.locator('.variable-panel-three-dots >> nth=1');
    const contractP0 = page.locator('p >> nth=0');
    const contractP1 = page.locator('p >> nth=1');
    const contractP2 = page.locator('p >> nth=2');
    const listNumberVariableEditVariablePanel = page.locator('#configurator-variable-1');
    console.log('addEditContract Behavior For Input Variable Warning Popup');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-template/create');
    await newTemplate.templateTitleFieldFill(Helpers.generateRandomString());
    await newTemplate.selectCategoryName();
    await newTemplate.textEditorField.type('test100test \n \n \n');
    await templateP1.click();
    await newTemplate.editVariablePanelOpen();
    await newTemplate.newVariableBttonClick();
    await variableNameField0EditVariablePanel.fill('listText');
    await newTemplate.listRadioButtonClick();
    await variable0ContentType.click();
    await newTemplate.listTextVariableClick();
    await listTextOptionField.type('test100test');
    const removeAttributeVariable0 = await page.$('#configurator-variable-0 mat-expansion-panel-header');
    await removeAttributeVariable0.evaluate(node => node.removeAttribute('aria-disabled'));
    await threeDotsEditVariablesPanelOption0.click();
    await page.waitForSelector('.action-list');
    await newTemplate.threeDotsMenuVariablePanelInsertButtonClick();
    await newTemplate.newVariableBttonClick();
    await variableNameField1EditVariablePanel.fill('listNumber');
    await listRadioButton1.click();
    await variable1ContentType.click();
    await newTemplate.listNumberVariableClick();
    await listNumberOptionField.type('234234');
    const removeAttributeVariable1 = await page.$('#configurator-variable-1 mat-expansion-panel-header');
    await removeAttributeVariable1.evaluate(node => node.removeAttribute('aria-disabled'));
    await templateP2.click();
    await threeDotsEditVariablesPanelOption1.click();
    await newTemplate.threeDotsMenuVariablePanelInsertButtonClick();
    await newTemplate.editVariablePanelClose();
    await newTemplate.publishToggleClick();
    await newTemplate.createContractButtonClick();
    await newContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.contractDescriptionTitleFieldFillRandom(Helpers.generateRandomString());
    await expect(contractP0).toHaveText('test100test');
    await expect(contractP1).toContainText('{{ listText }}');
    await expect(contractP2).toContainText('{{ listNumber }}');
    await newContract.saveButtonClick();
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue0 = await templateName.innerText();
    if (templateNameValue0.includes('autotest'))
    {
        await templateName.click();
    }
    await viewTemplate.editTemplateButtonClick();
    await newTemplate.editVariablePanelOpen();
    await listNumberVariableEditVariablePanel.click();
    await variableNameField1EditVariablePanel.click();
    await variableNameField1EditVariablePanel.type('Test100test');
    await newTemplate.editVariablePanelClose();
    await newTemplate.saveButtonClick();
    await page.goto('/contracts/list?&sort=-updated_at');
    const contractNameValue0 = await contractName.innerText();
    if (contractNameValue0.includes('autotest'))
    {
        await contractName.click();
    }
    await expect(contractP0).toHaveText('test100test');
    await expect(contractP1).toContainText('{{ listText }}');
    await expect(contractP2).toContainText('{{ listNumber }}');
    await newContract.alertIconClick();
    await newContract.alertIconPopupApplyButtonClickCheckboxNotChecked();
    await page.waitForTimeout(1000);
    await expect(contractP0).toHaveText('test100test');
    await expect(contractP1).toContainText('{{ listTextTest100test }}‌');
    await expect(contractP2).toContainText('{{ listNumber }}');
    await page.goto('/contracts/list?&sort=-updated_at');
    const contractNameValue1 = await contractName.innerText();
    if (contractNameValue1.includes('autotest'))
    {
        await contracts.rightArrowClick();
        await contracts.threeDotsMenuDeleteButtonClick();
        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    }
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
});

test('checkingSelectAnyOfTheTriggerValues/HideOption @regClickTractsHigh @addEditContract @variables @VariablesPanelTriggered', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const triggerdVariableContractBody = page.locator('[name="elementName_11"] >> nth=0');
    const triggerdVariableVariablesPanel = page.locator('#configurator-variable-elementName_11');
    const triggerdVariableVariablesPanelStatus = page.locator('#configurator-variable-elementName_11 mat-expansion-panel-header');
    const triggerdVariableVariablesPanelSelect = page.locator('#variables-list-form-control-value-elementName_11');
    const triggerdVariableVariablesPanelSelectOptionHide = page.locator('.mat-option >> nth=0');
    const triggerdVariableVariablesPanelSelectOption0 = page.locator('.mat-option >> nth=1');
    const triggerdVariableVariablesPanelSelectOption1 = page.locator('.mat-option >> nth=2');
    const triggerdVariableVariablesPanelSelectOption2 = page.locator('.mat-option >> nth=3');
    const editVariablePanel = page.locator('.contract-values-wrapper');
    console.log('addEditContract Checking Select Any Of The Trigger Values/Hide Option');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/2354');
    await expect(triggerdVariableContractBody).toBeVisible();
    await expect(triggerdVariableContractBody).toContainText('{{ listTtriggeredText }}');
    await newContract.editVariablesConfiguratorClick();
    await triggerdVariableVariablesPanel.click();
    await triggerdVariableVariablesPanelSelect.click();
    await expect(triggerdVariableVariablesPanelSelectOptionHide).toBeVisible();
    await expect(triggerdVariableVariablesPanelSelectOptionHide).toHaveText(' Hide ');
    await expect(triggerdVariableVariablesPanelSelectOption0).toBeVisible();
    await expect(triggerdVariableVariablesPanelSelectOption0).toHaveText(' trigger1 ');
    await expect(triggerdVariableVariablesPanelSelectOption1).toBeVisible();
    await expect(triggerdVariableVariablesPanelSelectOption1).toHaveText(' trigger2 ');
    await expect(triggerdVariableVariablesPanelSelectOption2).toBeVisible();
    await expect(triggerdVariableVariablesPanelSelectOption2).toHaveText(' trigger3 ');
    await triggerdVariableVariablesPanelSelectOptionHide.click();
    await expect(triggerdVariableContractBody).toBeVisible();
    await expect(triggerdVariableContractBody).toContainText('{{ Hide }}');
    await newContract.editVariablesConfiguratorClick();
    await triggerdVariableContractBody.hover();
    await expect(triggerdVariableContractBody).toHaveCSS('color', 'rgb(79, 120, 204)');
    await triggerdVariableContractBody.click();
    await expect(editVariablePanel).toHaveClass('contract-values-wrapper ng-star-inserted expanded');
    await expect(triggerdVariableVariablesPanelStatus).toHaveAttribute('aria-expanded', 'true');
    await triggerdVariableVariablesPanelSelect.click();
    await triggerdVariableVariablesPanelSelectOption0.click();
    await expect(triggerdVariableContractBody).toBeVisible();
    await expect(triggerdVariableContractBody).toContainText('Hi world!');
    await triggerdVariableVariablesPanelSelect.click();
    await triggerdVariableVariablesPanelSelectOption1.click();
    await expect(triggerdVariableContractBody).toContainText('How are u?');
    await triggerdVariableVariablesPanelSelect.click();
    await triggerdVariableVariablesPanelSelectOption2.click();
    await expect(triggerdVariableContractBody).toContainText('Lets code');
});

test('validationOfTheTriggerContentTypes @regClickTractsMedium @addEditContract @variables @VariablesPanelTriggered', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const triggerdVariableContractBody = page.locator('[name="elementName_11"] >> nth=0');
    const triggerdVariableVariablesPanel = page.locator('#configurator-variable-elementName_11');
    const triggerdVariableVariablesPanelBorderColor = page.locator('#configurator-variable-elementName_11 .mat-form-field-infix');
    console.log('addEditContract Validation Of The Trigger Content Types');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/2354');
    await newContract.publishToggleClick();
    await newContract.saveAndGenerateLinkButtonForErrorClick();
    await expect(triggerdVariableContractBody).toHaveCSS('color', 'rgb(255, 0, 0)');
    await newContract.editVariablesConfiguratorClick();
    await triggerdVariableVariablesPanel.click();
    await expect(triggerdVariableVariablesPanelBorderColor).toHaveCSS('border-color', 'rgb(255, 0, 0)');
});

test('displayingTheNestedVariable @regClickTractsHigh @addEditContract @variables @VariablesPanelTriggered', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const variablesPanelSelectOption1 = page.locator('.mat-option >> nth=1');
    const triggerdNestedVariableContractBody = page.locator('[name="elementName_23"] >> nth=0');
    const triggerdNestedVariableContractBodyContent = page.locator('[name="elementName_23"] p >> nth=0');
    const triggerdNestedVariableVariablesPanel = page.locator('#configurator-variable-elementName_23');
    const triggerdNestedVariableVariablesPanelSelect = page.locator('#variables-list-form-control-value-elementName_23');
    console.log('addEditContract Displaying The Nested Variable');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/2354');
    await expect(triggerdNestedVariableContractBody).toContainText('{{ listTriggeredTextWithNested }}');
    await newContract.editVariablesConfiguratorClick();
    await triggerdNestedVariableVariablesPanel.click();
    await triggerdNestedVariableVariablesPanelSelect.click();
    await variablesPanelSelectOption1.click();
    await expect(triggerdNestedVariableContractBody).not.toContainText('{{ listTriggeredTextWithNested }}');
    await expect(triggerdNestedVariableContractBodyContent).toContainText('hi world {{ inputUrl }}‌ {{ listNumber }}‌ signerListDate‌ signerListNumber‌');
});

test('displayingTheMultipleChoiceVariable @regClickTractsHigh @addEditContract @variables @variablesPanelMultipleChoice', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const multipleRadioVariableContractBody = page.locator('[name="elementName_12"] >> nth=0');
    const multipleRadioVariableContractBodyString0RadioButton = page.locator('#elementName_12-none');
    const multipleRadioVariableContractBodyString0Label = page.locator('[for="elementName_12-none"]');
    const multipleRadioVariableContractBodyString1RadioButton = page.locator('#elementName_12-0');
    const multipleRadioVariableContractBodyString1Label = page.locator('[for="elementName_12-0"]');
    const multipleRadioVariableContractBodyString2RadioButton = page.locator('#elementName_12-1');
    const multipleRadioVariableContractBodyString2Label = page.locator('[for="elementName_12-1"]');
    const multipleRadioVariableContractBodyString3RadioButton = page.locator('#elementName_12-2');
    const multipleRadioVariableContractBodyString3Label = page.locator('[for="elementName_12-2"]');
    const multipleCheckboxVariableContractBody = page.locator('[name="elementName_23"] >> nth=0');
    const multipleCheckboxVariableContractBodyString0Checkbox = page.locator('#elementName_13-0');
    const multipleCheckboxVariableContractBodyString0Label = page.locator('[for="elementName_13-0"]');
    const multipleCheckboxVariableContractBodyString1Checkbox = page.locator('#elementName_13-1');
    const multipleCheckboxVariableContractBodyString1Label = page.locator('[for="elementName_13-1"]');
    const multipleCheckboxVariableContractBodyString2Checkbox = page.locator('#elementName_13-2');
    const multipleCheckboxVariableContractBodyString2Label = page.locator('[for="elementName_13-2"]');
    const multipleNestedVariableContractBody = page.locator('[name="elementName_24"] >> nth=0');
    const multipleNestedVariableContractBodyString0RadioButton = page.locator('#elementName_24-none');
    const multipleNestedVariableContractBodyString0Label = page.locator('[for="elementName_24-none"]');
    const multipleNestedVariableContractBodyString1RadioButton = page.locator('#elementName_24-0');
    const multipleNestedVariableContractBodyString1Label = page.locator('[for="elementName_24-0"]');
    const multipleNestedVariableContractBodyString2RadioButton = page.locator('#elementName_24-1');
    const multipleNestedVariableContractBodyString2Label = page.locator('[for="elementName_24-1"]');
    const multipleNestedVariableContractBodyString3RadioButton = page.locator('#elementName_24-2');
    const multipleNestedVariableContractBodyString3Label = page.locator('[for="elementName_24-2"]');
    console.log('addEditContract Displaying The Multiple Choice Variable');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/2354');
    await expect(multipleRadioVariableContractBody).toBeVisible();
    await expect(multipleRadioVariableContractBodyString0RadioButton).toBeVisible();
    await expect(multipleRadioVariableContractBodyString0RadioButton).toHaveAttribute('disabled', '');
    await expect(multipleRadioVariableContractBodyString0RadioButton).toHaveAttribute('checked', '');
    await expect(multipleRadioVariableContractBodyString0Label).toContainText('None');
    await expect(multipleRadioVariableContractBodyString1RadioButton).toBeVisible();
    await expect(multipleRadioVariableContractBodyString1RadioButton).toHaveAttribute('disabled', '');
    await expect(multipleRadioVariableContractBodyString1Label).toContainText('radio button 1');
    await expect(multipleRadioVariableContractBodyString2RadioButton).toBeVisible();
    await expect(multipleRadioVariableContractBodyString2RadioButton).toHaveAttribute('disabled', '');
    await expect(multipleRadioVariableContractBodyString2Label).toContainText('radio button 2');
    await expect(multipleRadioVariableContractBodyString3RadioButton).toBeVisible();
    await expect(multipleRadioVariableContractBodyString3RadioButton).toHaveAttribute('disabled', '');
    await expect(multipleRadioVariableContractBodyString3Label).toContainText('radio button 3');
    await expect(multipleCheckboxVariableContractBody).toBeVisible();
    await expect(multipleCheckboxVariableContractBodyString0Checkbox).toBeVisible();
    await expect(multipleCheckboxVariableContractBodyString0Checkbox).toHaveAttribute('disabled', '');
    await expect(multipleCheckboxVariableContractBodyString0Label).toContainText('checkbox 1');
    await expect(multipleCheckboxVariableContractBodyString1Checkbox).toBeVisible();
    await expect(multipleCheckboxVariableContractBodyString1Checkbox).toHaveAttribute('disabled', '');
    await expect(multipleCheckboxVariableContractBodyString1Label).toContainText('checkbox 2');
    await expect(multipleCheckboxVariableContractBodyString2Checkbox).toBeVisible();
    await expect(multipleCheckboxVariableContractBodyString2Checkbox).toHaveAttribute('disabled', '');
    await expect(multipleCheckboxVariableContractBodyString2Label).toContainText('checkbox 3');
    await expect(multipleNestedVariableContractBody).toBeVisible();
    await expect(multipleNestedVariableContractBodyString0RadioButton).toBeVisible();
    await expect(multipleNestedVariableContractBodyString0RadioButton).toHaveAttribute('disabled', '');
    await expect(multipleNestedVariableContractBodyString0RadioButton).toHaveAttribute('checked', '');
    await expect(multipleNestedVariableContractBodyString0Label).toContainText('None');
    await expect(multipleNestedVariableContractBodyString1RadioButton).toBeVisible();
    await expect(multipleNestedVariableContractBodyString1RadioButton).toHaveAttribute('disabled', '');
    await expect(multipleNestedVariableContractBodyString1Label).toContainText('Option1 {{ inputDate }}‌ {{ listDate }}‌ ‌ signerListDate‌');
    await expect(multipleNestedVariableContractBodyString2RadioButton).toBeVisible();
    await expect(multipleNestedVariableContractBodyString2RadioButton).toHaveAttribute('disabled', '');
    await expect(multipleNestedVariableContractBodyString2Label).toContainText('Option 2 {{ inputNumber }}‌ {{ listNumber }}‌');
    await expect(multipleNestedVariableContractBodyString3RadioButton).toBeVisible();
    await expect(multipleNestedVariableContractBodyString3RadioButton).toHaveAttribute('disabled', '');
    await expect(multipleNestedVariableContractBodyString3Label).toContainText('Option 3 {{ inputText }}‌ {{ inputUrl }}‌ {{ listText }}‌ {{ listUrl }}‌ signerListText‌ signerListUrl‌');
});

test('behaviorForTheSignerVariablesTab @regClickTractsHigh @addEditContract @variables @variablesPanelSignerVariables', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const addGroupButton = page.locator('#contract-detail-add-group');
    const signerVariablesTab = page.locator('#contracts-details-signer-variables');
    const group0 = page.locator('#configurator-variable-group-0');
    const trigger = page.locator('#configurator-variable-elementName_2');
    const triggerSelect = page.locator('#variables-list-form-control-value-elementName_2');
    const triggerSelectValue = page.locator('.mat-option >> nth=1');
    const textarea = page.locator('#configurator-variable-elementName_1');
    const textareaNestedDropDown = page.locator('.nested-variable-editor-toolbar');
    const variableDropDownNestedVariable = page.frameLocator('.cke_panel_frame');
    console.log('addEditContract Behavior For The Signer Variables Tab');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/3316');
    await newContract.editVariablesConfiguratorClick();
    await expect(addGroupButton).toBeVisible();
    await expect(signerVariablesTab).toBeVisible();
    await signerVariablesTab.click();
    await addGroupButton.click();
    await expect(group0).toBeVisible();
    await page.goto('/contract/create/3425');
    await newContract.editVariablesConfiguratorClick();
    await expect(addGroupButton).toHaveAttribute('disabled', '');
    await expect(signerVariablesTab).toBeVisible();
    await trigger.click();
    await triggerSelect.click();
    await triggerSelectValue.click();
    await expect(signerVariablesTab).toBeVisible();
    await addGroupButton.click();
    await expect(group0).toBeVisible();
    await page.reload();
    await newContract.editVariablesConfiguratorClick();
    await textarea.click();
    await textareaNestedDropDown.click();
    await variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=0').click();
    await addGroupButton.click();
    await expect(group0).toBeVisible();
});

test('behaviorForTheSignerVariablesTabNoSignerAdded @regClickTractsMedium @addEditContract @variables @variablesPanelSignerVariables', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const signerVariablesTab = page.locator('#contracts-details-signer-variables');
    const regularVariablesTab = page.locator('#contracts-details-regular-variables');
    const trigger = page.locator('#configurator-variable-elementName_2');
    const triggerSelect = page.locator('#variables-list-form-control-value-elementName_2');
    const triggerSelectValueHide = page.locator('.mat-option >> nth=0');
    const triggerSelectValue = page.locator('.mat-option >> nth=1');
    const noVariablesText = page.locator('.no-variables-text');
    console.log('addEditContract Behavior For The Signer Variables Tab No Signer Added');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/3425');
    await newContract.editVariablesConfiguratorClick();
    await signerVariablesTab.click();
    await expect(noVariablesText).toHaveText(' No signer variables ');
    await regularVariablesTab.click();
    await trigger.click();
    await triggerSelect.click();
    await triggerSelectValueHide.click();
    await signerVariablesTab.click();
    await expect(noVariablesText).toHaveText(' No signer variables ');
    await regularVariablesTab.click();
    await trigger.click();
    await triggerSelect.click();
    await triggerSelectValue.click();
    await signerVariablesTab.click();
    await expect(noVariablesText).not.toHaveText(' No signer variables ');
    await expect(noVariablesText).toHaveText(' Please add groups ');
});

test('behaviorForInput/ListSignerVariableWarningPopup @regClickTractsHigh @addEditContract @variables @variablesPanelSignerVariables', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const templatesPage = new TemplatesPage(page);
    const contracts = new ContractsPage(page);
    const viewTemplate = new ViewTemplatePage(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const templateName = page.locator('.template-name-column-link >> nth=0');
    const signerVariablesTab = page.locator('#contracts-details-signer-variables');
    const regularVariablesTab = page.locator('#contracts-details-regular-variables');
    const addGroupButton = page.locator('#contract-detail-add-group');
    const groupName0 = page.locator('#variables-list-form-control-value-0');
    const group0ChooseVariablesDropDown = page.locator('.signer-variables-input >> nth=0');
    const group0ChooseVariablesDropDownOption0 = page.locator('.variable-group-option >> nth=0');
    const group0ChooseVariablesDropDownOption1 = page.locator('.variable-group-option >> nth=1');
    const group0 = page.locator('#configurator-variable-group-0');
    const group0Title = page.locator('#configurator-variable-group-0 mat-panel-title');
    const addGroupsText = page.locator('.no-variables-text');
    const addGroupsVariablesCounter = page.locator('.rdl-variable-type-value');
    const templateP1 = page.locator('p >> nth=1');
    const templateP3 = page.locator('p >> nth=3');
    const variableNameField0EditVariablePanel = page.locator('#variables-list-form-control-value-0');
    const variable0ContentType = page.locator('[formcontrolname="input_type"] >> nth=0');
    const threeDotsEditVariablesPanelOption0 = page.locator('.variable-panel-three-dots >> nth=0');
    const variableNameField1EditVariablePanel = page.locator('#variables-list-form-control-value-1');
    const signerRadioButton1 = page.locator('#variables-list-form-control-type-1-Signer');
    const variable1ContentType = page.locator('[formcontrolname="input_type"] >> nth=1');
    const signerListTextOptionField = page.locator('.variables-list-form-control-option-value textarea >> nth=0');
    const variableNameField2EditVariablePanel = page.locator('#variables-list-form-control-value-2');
    const inputRadioButton2 = page.locator('#variables-list-form-control-type-2-Input');
    const variable2ContentType = page.locator('[formcontrolname="input_type"] >> nth=2');
    const threeDotsEditVariablesPanelOption2 = page.locator('.variable-panel-three-dots >> nth=2');
    const variableNameField3EditVariablePanel = page.locator('#variables-list-form-control-value-3');
    const listRadioButton3 = page.locator('#variables-list-form-control-type-3-List');
    const variable3ContentType = page.locator('[formcontrolname="input_type"] >> nth=3');
    const listTriggeredTriggerField = page.locator('.variables-list-form-control-option-key textarea >> nth=0');
    const listTriggeredTextEditor = page.locator('.cke_enable_context_menu >> nth=1');
    const threeDotsEditVariablesPanelOption3 = page.locator('.variable-panel-three-dots >> nth=3');
    const variableNameField4EditVariablePanel = page.locator('#variables-list-form-control-value-3');
    const signerRadioButton4 = page.locator('#variables-list-form-control-type-3-Signer');
    const variable4ContentType = page.locator('[formcontrolname="input_type"] >> nth=3');
    const contractP0 = page.locator('p >> nth=0');
    const contractP1 = page.locator('p >> nth=1');
    const contractP3 = page.locator('p >> nth=3');
    const inputTextareaVariableEditVariablePanel = page.locator('#configurator-variable-elementName_3');
    const textareaNestedDropDown = page.locator('.nested-variable-editor-toolbar');
    const variableDropDownNestedVariable = page.frameLocator('.cke_panel_frame');
    const inputTextareaVariableTextEditorEditVariablePanel = page.locator('.cke_enable_context_menu >> nth=0');
    const textareaP1 = page.locator('.cke_enable_context_menu p >> nth=1');
    const textareaP2 = page.locator('.cke_enable_context_menu p >> nth=2');
    console.log('addEditContract Behavior For Input/List Signer Variable Warning Popup');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-template/create');
    await newTemplate.templateTitleFieldFill(Helpers.generateRandomString());
    await newTemplate.selectCategoryName();
    await newTemplate.textEditorField.type('test100test \n \n \n \n \n');
    await templateP1.click();
    await newTemplate.editVariablePanelOpen();
    await newTemplate.newVariableBttonClick();
    await variableNameField0EditVariablePanel.fill('signerInputText');
    await newTemplate.signerRadioButtonClick();
    await variable0ContentType.click();
    await newTemplate.signerInputTextVariableClick();
    const removeAttributeVariable0 = await page.$('#configurator-variable-0 mat-expansion-panel-header');
    await removeAttributeVariable0.evaluate(node => node.removeAttribute('aria-disabled'));
    await threeDotsEditVariablesPanelOption0.click();
    await page.waitForSelector('.action-list');
    await newTemplate.threeDotsMenuVariablePanelInsertButtonClick();
    await newTemplate.newVariableBttonClick();
    await variableNameField1EditVariablePanel.fill('signerListText');
    await signerRadioButton1.click();
    await variable1ContentType.click();
    await newTemplate.signerListTextVariableClick();
    await signerListTextOptionField.type('test100test');
    await newTemplate.newVariableBttonClick();
    await variableNameField2EditVariablePanel.fill('inputTextarea');
    await inputRadioButton2.click();
    await variable2ContentType.click();
    await newTemplate.inputTextareaVariableClick();
    const removeAttributeVariable2 = await page.$('#configurator-variable-2 mat-expansion-panel-header');
    await removeAttributeVariable2.evaluate(node => node.removeAttribute('aria-disabled'));
    await templateP3.click();
    await threeDotsEditVariablesPanelOption2.click();
    await newTemplate.threeDotsMenuVariablePanelInsertButtonClick();
    await newTemplate.newVariableBttonClick();
    await variableNameField3EditVariablePanel.fill('listTriggeredText');
    await listRadioButton3.click();
    await variable3ContentType.click();
    await newTemplate.listTriggeredTextVariableClick();
    await listTriggeredTriggerField.fill('trigger1');
    await listTriggeredTextEditor.type('test100test');
    const removeAttributeVariable3 = await page.$('#configurator-variable-3 mat-expansion-panel-header');
    await removeAttributeVariable3.evaluate(node => node.removeAttribute('aria-disabled'));
    await threeDotsEditVariablesPanelOption3.click();
    await newTemplate.threeDotsMenuVariablePanelInsertButtonClick();
    await newTemplate.editVariablePanelClose();
    await newTemplate.multipartyToggleClick();
    await newTemplate.publishToggleClick();
    await newTemplate.createContractButtonClick();
    await newContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await newContract.contractDescriptionTitleFieldFillRandom(Helpers.generateRandomString());
    await expect(contractP0).toHaveText('test100test');
    const getHtml0 = await contractP1.innerHTML();
    await expect(getHtml0).toContain('placeholder="signerInputText"');
    const getHtml6 = await contractP3.innerHTML();
    await expect(getHtml6).toContain('{{ listTriggeredText }}');
    await expect(getHtml6).toContain('{{ inputTextarea }}');
    await newContract.editVariablesConfiguratorClick();
    await addGroupButton.click();
    await groupName0.type('test100test');
    await group0ChooseVariablesDropDown.click();
    await group0ChooseVariablesDropDownOption0.click();
    await newContract.editVariablesConfiguratorClick();
    await newContract.saveButtonClick();
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue0 = await templateName.innerText();
    if (templateNameValue0.includes('autotest'))
    {
        await templateName.click();
    }
    await viewTemplate.editTemplateButtonClick();
    await page.waitForTimeout(1500);
    await page.reload();
    await page.waitForTimeout(1500);
    await threeDotsEditVariablesPanelOption2.click();
    await page.waitForSelector('.action-list');
    await newTemplate.threeDotsMenuVariablePanelDeleteButtonClick();
    await newTemplate.saveButtonClick();
    await page.goto('/contracts/list?&sort=-updated_at');
    const contractNameValue0 = await contractName.innerText();
    if (contractNameValue0.includes('autotest'))
    {
        await contractName.click();
    }
    await expect(contractP0).toHaveText('test100test');
    const getHtml2 = await contractP1.innerHTML();
    await expect(getHtml2).toContain('placeholder="signerInputText"');
    const getHtml7 = await contractP3.innerHTML();
    await expect(getHtml7).toContain('{{ listTriggeredText }}');
    await expect(getHtml7).toContain('{{ inputTextarea }}');
    await newContract.editVariablesConfiguratorClick();
    await signerVariablesTab.click();
    await expect(group0).toBeVisible();
    await expect(group0Title).toHaveText('test100test');
    await newContract.editVariablesConfiguratorClick();
    await newContract.alertIconClick();
    await newContract.alertIconPopupApplyButtonClickCheckboxNotChecked();
    await page.waitForTimeout(1000);
    await expect(contractP0).toHaveText('test100test');
    const getHtml4 = await contractP1.innerHTML();
    await expect(getHtml4).not.toContain('placeholder="signerInputText"');
    const getHtml8 = await contractP3.innerHTML();
    await expect(getHtml8).toContain('{{ listTriggeredText }}');
    await expect(getHtml8).toContain('{{ inputTextarea }}');
    await newContract.editVariablesConfiguratorClick();
    await signerVariablesTab.click();
    await expect(group0).toBeHidden();
    await expect(addGroupsText).toBeVisible();
    await page.goto('/contracts/list?&sort=-updated_at');
    const contractNameValue3 = await contractName.innerText();
    if (contractNameValue3.includes('autotest'))
    {
        await contracts.rightArrowClick();
        await contracts.threeDotsMenuDeleteButtonClick();
        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    }
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue3 = await templateName.innerText();
    if (templateNameValue3.includes('autotest'))
    {
        await templateName.click();
    }
    await viewTemplate.editTemplateButtonClick();
    await page.waitForTimeout(1500);
    await page.reload();
    await page.waitForTimeout(1500);
    await newTemplate.editVariablePanelOpen();
    await newTemplate.newVariableBttonClick();
    await variableNameField4EditVariablePanel.fill('signerInputNumber');
    await signerRadioButton4.click();
    await variable4ContentType.click();
    await newTemplate.signerInputNumberVariableClick();
    await newTemplate.editVariablePanelClose();
    await newTemplate.createContractButtonClick();
    await newContract.editVariablesConfiguratorClick();
    await inputTextareaVariableEditVariablePanel.click();
    await inputTextareaVariableTextEditorEditVariablePanel.type('\n \n \n');
    await textareaP1.click();
    await textareaNestedDropDown.click();
    await variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=0').click();
    await textareaP2.click();
    await textareaNestedDropDown.click();
    await variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=1').click();
    await addGroupButton.click();
    await groupName0.fill('test100test');
    await group0ChooseVariablesDropDown.click();
    await expect(group0ChooseVariablesDropDownOption0).toBeVisible();
    await expect(group0ChooseVariablesDropDownOption0).toHaveText(' signerInputNumber ');
    await expect(group0ChooseVariablesDropDownOption1).toBeVisible();
    await expect(group0ChooseVariablesDropDownOption1).toHaveText(' signerListText ');
    await group0ChooseVariablesDropDownOption0.click();
    await group0ChooseVariablesDropDownOption1.click();
    await expect(addGroupsVariablesCounter).toHaveText(' Variables: 2 ');
    await regularVariablesTab.click();
    await inputTextareaVariableEditVariablePanel.click();
    await textareaP1.fill('');
    await signerVariablesTab.click();
    await expect(group0).toBeVisible();
    await expect(addGroupsText).toBeHidden();
    await group0.click();
    await expect(addGroupsVariablesCounter).toHaveText(' Variables: 1 ');
    await group0ChooseVariablesDropDown.click();
    await expect(group0ChooseVariablesDropDownOption1).toBeHidden();
    await expect(group0ChooseVariablesDropDownOption0).toBeVisible();
    await expect(group0ChooseVariablesDropDownOption0).not.toHaveText(' signerInputNumber ');
    await expect(group0ChooseVariablesDropDownOption0).toHaveText(' signerListText ');
    await regularVariablesTab.click();
    await inputTextareaVariableEditVariablePanel.click();
    await textareaP2.fill('');
    await signerVariablesTab.click();
    await expect(group0).toBeHidden();
    await expect(addGroupsText).toBeVisible();
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

test('displayingAndValidationAddGroupButton @regClickTractsHigh @addEditContract @variables @variablesPanelSignerVariables', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const addGroupButton = page.locator('#contract-detail-add-group');
    const signerVariablesTab = page.locator('#contracts-details-signer-variables');
    const group0 = page.locator('#configurator-variable-group-0');
    const group0Title = page.locator('#configurator-variable-group-0 mat-panel-title');
    const group0NameField = page.locator('#variables-list-form-control-value-0');
    const group0NameFieldErrorBorderColor = page.locator('.groups-list-group-name .mat-form-field-infix');
    const group0NameFieldError = page.locator('.groups-list-group-name mat-error');
    const group0ChooseVariablesDropDown = page.locator('.signer-variables-input >> nth=0');
    const group0ChooseVariablesDropDownErrorBorderColor = page.locator('.groups-list-group-choose-variables .mat-form-field-infix');
    const group0ChooseVariablesDropDownError = page.locator('.groups-list-group-choose-variables .custom-error');
    const group0ChooseVariablesDropDownOption0 = page.locator('.variable-group-option >> nth=0');
    const group0ChooseVariablesDropDownOption1 = page.locator('.variable-group-option >> nth=1');
    const group0ChooseVariablesDropDownOption2 = page.locator('.variable-group-option >> nth=2');
    const group0ChooseVariablesDropDownOption3 = page.locator('.variable-group-option >> nth=3');
    const group0ChooseVariablesDropDownOption4 = page.locator('.variable-group-option >> nth=4');
    const group0ChooseVariablesDropDownOption5 = page.locator('.variable-group-option >> nth=5');
    const group0ChooseVariablesDropDownOption6 = page.locator('.variable-group-option >> nth=6');
    const group0ChooseVariablesDropDownOption7 = page.locator('.variable-group-option >> nth=7');
    const trigger = page.locator('#configurator-variable-elementName_2');
    const triggerSelect = page.locator('#variables-list-form-control-value-elementName_2');
    const triggerSelectValue = page.locator('.mat-option >> nth=1');
    const textarea = page.locator('#configurator-variable-elementName_1');
    const textareaNestedDropDown = page.locator('.nested-variable-editor-toolbar');
    const variableDropDownNestedVariable = page.frameLocator('.cke_panel_frame');
    console.log('addEditContract Displaying And Validation Add Group Button');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/3425');
    await newContract.editVariablesConfiguratorClick();
    await expect(addGroupButton).toHaveAttribute('disabled', '');
    await expect(signerVariablesTab).toBeVisible();
    await trigger.click();
    await triggerSelect.click();
    await triggerSelectValue.click();
    await expect(signerVariablesTab).toBeVisible();
    await addGroupButton.click();
    await expect(group0).toBeVisible();
    await page.reload();
    await newContract.editVariablesConfiguratorClick();
    await expect(addGroupButton).toHaveAttribute('disabled', '');
    await textarea.click();
    await textareaNestedDropDown.click();
    await variableDropDownNestedVariable.locator('.cke_panel_listItem >> nth=0').click();
    await addGroupButton.click();
    await expect(group0).toBeVisible();
    await page.goto('/contract/create/3316');
    await newContract.editVariablesConfiguratorClick();
    await addGroupButton.click();
    await expect(group0).toBeVisible();
    await expect(group0Title).toBeVisible();
    await expect(group0Title).toHaveText(' New group ');
    await expect(group0NameField).toBeVisible();
    await expect(group0ChooseVariablesDropDown).toBeVisible();
    await addGroupButton.click();
    await expect(group0NameFieldErrorBorderColor).toHaveCSS('border-color', 'rgb(255, 0, 0)');
    await expect(group0NameFieldError).toBeVisible();
    await expect(group0NameFieldError).toHaveText(' Please fill in this field ');
    await expect(group0ChooseVariablesDropDownErrorBorderColor).toHaveCSS('border-color', 'rgb(255, 0, 0)');
    await expect(group0ChooseVariablesDropDownError).toBeVisible();
    await expect(group0ChooseVariablesDropDownError).toHaveText(' Choose variable ');
    await group0ChooseVariablesDropDown.click();
    await group0ChooseVariablesDropDownOption0.click();
    await group0ChooseVariablesDropDownOption1.click();
    await group0ChooseVariablesDropDownOption2.click();
    await group0ChooseVariablesDropDownOption3.click();
    await group0ChooseVariablesDropDownOption4.click();
    await group0ChooseVariablesDropDownOption5.click();
    await group0ChooseVariablesDropDownOption6.click();
    await group0ChooseVariablesDropDownOption7.click();
    await expect(addGroupButton).toHaveAttribute('disabled', '');
});

test('displayingOfTheGroupNameField @regClickTractsLow @addEditContract @variables @variablesPanelSignerVariables', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const addGroupButton = page.locator('#contract-detail-add-group');
    const group0Title = page.locator('#configurator-variable-group-0 mat-panel-title');
    const group0NameField = page.locator('#variables-list-form-control-value-0');
    console.log('addEditContract Displaying Of The Group Name Field');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/3316');
    await newContract.editVariablesConfiguratorClick();
    await addGroupButton.click();
    await expect(group0Title).toHaveText(' New group ');
    await expect(group0NameField).toHaveAttribute('placeholder', 'Type group name');
    await group0NameField.type('test100test');
    await expect(group0Title).toHaveText(' test100test ');
    await expect(group0NameField).toHaveValue('test100test');
});

test('validationOfTheGroupNameField @regClickTractsMedium @addEditContract @variables @variablesPanelSignerVariables', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const addGroupButton = page.locator('#contract-detail-add-group');
    const regularVariablesTab = page.locator('#contracts-details-regular-variables');
    const group0NameField = page.locator('#variables-list-form-control-value-0');
    const group1NameField = page.locator('#variables-list-form-control-value-1');
    const group0NameFieldError = page.locator('.groups-list-group-name mat-error');
    const group0ChooseVariablesDropDown = page.locator('.signer-variables-input >> nth=0');
    const group0ChooseVariablesDropDownOption0 = page.locator('.variable-group-option >> nth=0');
    console.log('addEditContract Validation Of The Group Name Field');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/3316');
    await newContract.editVariablesConfiguratorClick();
    await addGroupButton.click();
    await regularVariablesTab.click();
    await expect(group0NameFieldError).toBeVisible();
    await expect(group0NameFieldError).toHaveText(' Please fill in this field ');
    await group0NameField.type('test100test _ # . ~ -');
    await expect(group0NameFieldError).toBeHidden();
    await group0ChooseVariablesDropDown.click();
    await group0ChooseVariablesDropDownOption0.click();
    await addGroupButton.click();
    await group1NameField.type('test100test _ # . ~ -');
    await expect(group0NameFieldError).toBeVisible();
    await expect(group0NameFieldError).toHaveText(' Such Group name already exists ');
});

test('displaying/ValidationOfTheDeleteGroupButton @regClickTractsMedium @addEditContract @variables @variablesPanelSignerVariables', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const addGroupButton = page.locator('#contract-detail-add-group');
    const group0 = page.locator('#configurator-variable-group-0');
    const group0NameField = page.locator('#variables-list-form-control-value-0');
    const deleteGroupButton = page.locator('.remove-btn');
    const group0ChooseVariablesDropDown = page.locator('.signer-variables-input >> nth=0');
    const group0ChooseVariablesDropDownOption0 = page.locator('.variable-group-option >> nth=0');
    const group0ChooseVariablesDropDownOption1 = page.locator('.variable-group-option >> nth=1');
    const group0ChooseVariablesDropDownOption2 = page.locator('.variable-group-option >> nth=2');
    const group0ChooseVariablesDropDownOption3 = page.locator('.variable-group-option >> nth=3');
    const group0ChooseVariablesDropDownOption4 = page.locator('.variable-group-option >> nth=4');
    const group0ChooseVariablesDropDownOption5 = page.locator('.variable-group-option >> nth=5');
    const group0ChooseVariablesDropDownOption6 = page.locator('.variable-group-option >> nth=6');
    const group0ChooseVariablesDropDownOption7 = page.locator('.variable-group-option >> nth=7');
    const noVariablesText = page.locator('.no-variables-text');
    console.log('addEditContract Displaying/Validation Of The Delete Group Button');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/3316');
    await newContract.editVariablesConfiguratorClick();
    await addGroupButton.click();
    await expect(deleteGroupButton).toBeVisible();
    await deleteGroupButton.click();
    await expect(group0).toBeHidden();
    await expect(noVariablesText).toBeVisible();
    await addGroupButton.click();
    await group0NameField.type('test100test');
    await group0ChooseVariablesDropDown.click();
    await group0ChooseVariablesDropDownOption0.click();
    await group0ChooseVariablesDropDownOption1.click();
    await group0ChooseVariablesDropDownOption2.click();
    await group0ChooseVariablesDropDownOption3.click();
    await group0ChooseVariablesDropDownOption4.click();
    await group0ChooseVariablesDropDownOption5.click();
    await group0ChooseVariablesDropDownOption6.click();
    await group0ChooseVariablesDropDownOption7.click();
    await deleteGroupButton.click();
    await addGroupButton.click();
    await group0ChooseVariablesDropDown.click();
    await expect(group0ChooseVariablesDropDownOption0).toBeVisible();
    await expect(group0ChooseVariablesDropDownOption1).toBeVisible();
    await expect(group0ChooseVariablesDropDownOption2).toBeVisible();
    await expect(group0ChooseVariablesDropDownOption3).toBeVisible();
    await expect(group0ChooseVariablesDropDownOption4).toBeVisible();
    await expect(group0ChooseVariablesDropDownOption5).toBeVisible();
    await expect(group0ChooseVariablesDropDownOption6).toBeVisible();
    await expect(group0ChooseVariablesDropDownOption7).toBeVisible();
});

test('displayingTheVariablesField @regClickTractsLow @addEditContract @variables @variablesPanelSignerVariables', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const addGroupButton = page.locator('#contract-detail-add-group');
    const group0ChooseVariablesDropDown = page.locator('.signer-variables-input >> nth=0');
    const group0ChooseVariablesDropDownError = page.locator('.groups-list-group-choose-variables .custom-error');
    const group0ChooseVariablesDropDownOption0 = page.locator('.variable-group-option >> nth=0');
    const variablesCount = page.locator('.rdl-variable-type-value');
    console.log('addEditContract Displaying The Variables Field');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/3316');
    await newContract.editVariablesConfiguratorClick();
    await addGroupButton.click();
    await addGroupButton.click();
    await expect(group0ChooseVariablesDropDownError).toBeVisible();
    await expect(group0ChooseVariablesDropDownError).toHaveText(' Choose variable ');
    await expect(variablesCount).toHaveText(' Variables: 0 ');
    await group0ChooseVariablesDropDown.click();
    await group0ChooseVariablesDropDownOption0.click();
    await expect(variablesCount).toHaveText(' Variables: 1 ');
});

test('validationOfTheVariablesField @regClickTractsHigh @addEditContract @variables @variablesPanelSignerVariables', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const addGroupButton = page.locator('#contract-detail-add-group');
    const group0ChooseVariablesDropDownError = page.locator('.groups-list-group-choose-variables .custom-error');
    const inputTextContractBody = page.locator('[name="elementName_1"] >> nth=0');
    const signerInputTextContractBody = page.locator('[name="elementName_14"] >> nth=0');
    console.log('addEditContract Displaying The Variables Field');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/3316');
    await newContract.editVariablesConfiguratorClick();
    await addGroupButton.click();
    await addGroupButton.click();
    await expect(group0ChooseVariablesDropDownError).toBeVisible();
    await expect(group0ChooseVariablesDropDownError).toHaveText(' Choose variable ');
    await page.reload();
    await newContract.editVariablesConfiguratorClick();
    await addGroupButton.click();
    await inputTextContractBody.click();
    await expect(group0ChooseVariablesDropDownError).toBeVisible();
    await expect(group0ChooseVariablesDropDownError).toHaveText(' Choose variable ');
    await page.reload();
    await newContract.editVariablesConfiguratorClick();
    await addGroupButton.click();
    await signerInputTextContractBody.click();
    await expect(group0ChooseVariablesDropDownError).toBeVisible();
    await expect(group0ChooseVariablesDropDownError).toHaveText(' Choose variable ');
});

test('displayingTheSignerVariablesInTheVariablesDropDownField @regClickTractsHigh @addEditContract @variables @variablesPanelSignerVariables', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const addGroupButton = page.locator('#contract-detail-add-group');
    const group0NameField = page.locator('#variables-list-form-control-value-0');
    const group0ChooseVariablesDropDown = page.locator('.signer-variables-input >> nth=0');
    const group1ChooseVariablesDropDown = page.locator('.signer-variables-input >> nth=1');
    const group0ChooseVariablesDropDownOption0 = page.locator('.variable-group-option >> nth=0');
    const group0ChooseVariablesDropDownOption1 = page.locator('.variable-group-option >> nth=1');
    const group0ChooseVariablesDropDownOption2 = page.locator('.variable-group-option >> nth=2');
    const group0ChooseVariablesDropDownOption3 = page.locator('.variable-group-option >> nth=3');
    const group0ChooseVariablesDropDownOption4 = page.locator('.variable-group-option >> nth=4');
    const group0ChooseVariablesDropDownOption5 = page.locator('.variable-group-option >> nth=5');
    const group0ChooseVariablesDropDownOption6 = page.locator('.variable-group-option >> nth=6');
    const group0ChooseVariablesDropDownOption7 = page.locator('.variable-group-option >> nth=7');
    console.log('addEditContract Displaying The Signer Variables In The Variables DropDown Field');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/3316');
    await newContract.editVariablesConfiguratorClick();
    await addGroupButton.click();
    await group0NameField.type('test100test');
    await group0ChooseVariablesDropDown.click();
    await expect(group0ChooseVariablesDropDownOption0).toBeVisible();
    await expect(group0ChooseVariablesDropDownOption0).toHaveText(' signerInputText ');
    await expect(group0ChooseVariablesDropDownOption1).toBeVisible();
    await expect(group0ChooseVariablesDropDownOption1).toHaveText(' signerListText ');
    await expect(group0ChooseVariablesDropDownOption2).toBeVisible();
    await expect(group0ChooseVariablesDropDownOption2).toHaveText(' signerInputDate ');
    await expect(group0ChooseVariablesDropDownOption3).toBeVisible();
    await expect(group0ChooseVariablesDropDownOption3).toHaveText(' signerListDate ');
    await expect(group0ChooseVariablesDropDownOption4).toBeVisible();
    await expect(group0ChooseVariablesDropDownOption4).toHaveText(' signerInputNumber ');
    await expect(group0ChooseVariablesDropDownOption5).toBeVisible();
    await expect(group0ChooseVariablesDropDownOption5).toHaveText(' signerListNumber ');
    await expect(group0ChooseVariablesDropDownOption6).toBeVisible();
    await expect(group0ChooseVariablesDropDownOption6).toHaveText(' signerInputUrl ');
    await expect(group0ChooseVariablesDropDownOption7).toBeVisible();
    await expect(group0ChooseVariablesDropDownOption7).toHaveText(' signerListUrl ');
    await group0ChooseVariablesDropDownOption0.click();
    await group0ChooseVariablesDropDownOption1.click();
    await group0ChooseVariablesDropDownOption2.click();
    await group0ChooseVariablesDropDownOption3.click();
    await addGroupButton.click();
    await group1ChooseVariablesDropDown.click();
    await expect(group0ChooseVariablesDropDownOption0).toBeVisible();
    await expect(group0ChooseVariablesDropDownOption0).not.toHaveText(' signerInputText ');
    await expect(group0ChooseVariablesDropDownOption0).toHaveText(' signerInputNumber ');
    await expect(group0ChooseVariablesDropDownOption1).toBeVisible();
    await expect(group0ChooseVariablesDropDownOption1).not.toHaveText(' signerListText ');
    await expect(group0ChooseVariablesDropDownOption1).toHaveText(' signerListNumber ');
    await expect(group0ChooseVariablesDropDownOption2).toBeVisible();
    await expect(group0ChooseVariablesDropDownOption2).not.toHaveText(' signerInputDate ');
    await expect(group0ChooseVariablesDropDownOption2).toHaveText(' signerInputUrl ');
    await expect(group0ChooseVariablesDropDownOption3).toBeVisible();
    await expect(group0ChooseVariablesDropDownOption3).not.toHaveText(' signerListDate ');
    await expect(group0ChooseVariablesDropDownOption3).toHaveText(' signerListUrl ');
    await expect(group0ChooseVariablesDropDownOption4).toBeHidden();
    await expect(group0ChooseVariablesDropDownOption5).toBeHidden();
    await expect(group0ChooseVariablesDropDownOption6).toBeHidden();
    await expect(group0ChooseVariablesDropDownOption7).toBeHidden();
});

test('checkingThePossibilityOfUnattachingTheVariable @regClickTractsHigh @addEditContract @variables @variablesPanelSignerVariables', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const addGroupButton = page.locator('#contract-detail-add-group');
    const group0NameField = page.locator('#variables-list-form-control-value-0');
    const group0ChooseVariablesDropDown = page.locator('.signer-variables-input >> nth=0');
    const group0ChooseVariablesDropDownOption0 = page.locator('.variable-group-option >> nth=0');
    const group0ChooseVariablesDropDownOption0Checkbox = page.locator('#mat-checkbox-1-input');
    const group0ChooseVariablesDropDownOption1 = page.locator('.variable-group-option >> nth=1');
    const group0ChooseVariablesDropDownOption1Checkbox = page.locator('#mat-checkbox-1-input');
    const group0ChooseVariablesDropDownOption2 = page.locator('.variable-group-option >> nth=2');
    const group0ChooseVariablesDropDownOption2Checkbox = page.locator('#mat-checkbox-1-input');
    const group0ChooseVariablesDropDownOption3 = page.locator('.variable-group-option >> nth=3');
    const group0ChooseVariablesDropDownOption3Checkbox = page.locator('#mat-checkbox-1-input');
    console.log('addEditContract Checking The Possibility Of Unattaching The Variable');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/3316');
    await newContract.editVariablesConfiguratorClick();
    await addGroupButton.click();
    await group0NameField.type('test100test');
    await group0ChooseVariablesDropDown.click();
    await group0ChooseVariablesDropDownOption0.click();
    await expect(group0ChooseVariablesDropDownOption0Checkbox).toHaveAttribute('aria-checked', 'true');
    await group0ChooseVariablesDropDownOption1.click();
    await expect(group0ChooseVariablesDropDownOption1Checkbox).toHaveAttribute('aria-checked', 'true');
    await group0ChooseVariablesDropDownOption2.click();
    await expect(group0ChooseVariablesDropDownOption2Checkbox).toHaveAttribute('aria-checked', 'true');
    await group0ChooseVariablesDropDownOption3.click();
    await expect(group0ChooseVariablesDropDownOption3Checkbox).toHaveAttribute('aria-checked', 'true');
    await group0ChooseVariablesDropDownOption0.click();
    await expect(group0ChooseVariablesDropDownOption0Checkbox).toHaveAttribute('aria-checked', 'false');
    await group0ChooseVariablesDropDownOption1.click();
    await expect(group0ChooseVariablesDropDownOption1Checkbox).toHaveAttribute('aria-checked', 'false');
    await group0ChooseVariablesDropDownOption2.click();
    await expect(group0ChooseVariablesDropDownOption2Checkbox).toHaveAttribute('aria-checked', 'false');
    await group0ChooseVariablesDropDownOption3.click();
    await expect(group0ChooseVariablesDropDownOption3Checkbox).toHaveAttribute('aria-checked', 'false');
});

test('searchVariables @regClickTractsMedium @addEditContract @variables @variablesPanelSearch', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newContract = new NewEditContractPage(page);
    const addGroupButton = page.locator('#contract-detail-add-group');
    const signerVariablesTab = page.locator('#contracts-details-signer-variables');
    const group0NameField = page.locator('#variables-list-form-control-value-0');
    const group1NameField = page.locator('#variables-list-form-control-value-1');
    const group0ChooseVariablesDropDown = page.locator('.signer-variables-input >> nth=0');
    const group1ChooseVariablesDropDown = page.locator('.signer-variables-input >> nth=1');
    const group0ChooseVariablesDropDownOption0 = page.locator('.variable-group-option >> nth=0');
    const group0ChooseVariablesDropDownOption1 = page.locator('.variable-group-option >> nth=1');
    const group0ChooseVariablesDropDownOption2 = page.locator('.variable-group-option >> nth=2');
    const group0ChooseVariablesDropDownOption3 = page.locator('.variable-group-option >> nth=3');
    const noVariablesText = page.locator('.no-variables-text');
    const searchField = page.locator('#configurator-search-field');
    const variablesPanelListuUrl = page.locator('#configurator-variable-elementName_10');
    const variablesPanelInputText = page.locator('#configurator-variable-elementName_1');
    const variablesPanelListDate = page.locator('#configurator-variable-elementName_8');
    const variablesPanelInputTextarea = page.locator('#configurator-variable-elementName_6');
    const variablesPanelGroup0 = page.locator('#configurator-variable-group-0');
    const variablesPanelGroup0Status = page.locator('#configurator-variable-group-0 mat-expansion-panel-header');
    const variablesPanelGroup1 = page.locator('#configurator-variable-group-1');
    const variablesPanelGroup1Status = page.locator('#configurator-variable-group-1 mat-expansion-panel-header');
    console.log('addEditContract Checking The Possibility Of Unattaching The Variable');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/create/3316');
    await newContract.editVariablesConfiguratorClick();
    await searchField.type('listurl');
    await expect(variablesPanelListuUrl).toBeVisible();
    await expect(variablesPanelInputText).toBeHidden();
    await expect(variablesPanelListDate).toBeHidden();
    await expect(variablesPanelInputTextarea).toBeHidden();
    await searchField.fill('');
    await expect(variablesPanelListuUrl).toBeVisible();
    await expect(variablesPanelInputText).toBeVisible();
    await expect(variablesPanelListDate).toBeVisible();
    await expect(variablesPanelInputTextarea).toBeVisible();
    await addGroupButton.click();
    await group0NameField.type('cool');
    await group0ChooseVariablesDropDown.click();
    await group0ChooseVariablesDropDownOption0.click();
    await group0ChooseVariablesDropDownOption1.click();
    await group0ChooseVariablesDropDownOption2.click();
    await group0ChooseVariablesDropDownOption3.click();
    await addGroupButton.click();
    await group1NameField.type('mad');
    await group1ChooseVariablesDropDown.click();
    await group0ChooseVariablesDropDownOption0.click();
    await group0ChooseVariablesDropDownOption1.click();
    await group0ChooseVariablesDropDownOption2.click();
    await group0ChooseVariablesDropDownOption3.click();
    await searchField.click();
    await searchField.type('cool');
    await expect(variablesPanelGroup0).toBeVisible();
    await expect(variablesPanelGroup1).toBeHidden();
    await expect(variablesPanelGroup0Status).toHaveAttribute('aria-expanded', 'false');
    await searchField.fill('');
    await searchField.type('mad');
    await expect(variablesPanelGroup1).toBeVisible();
    await expect(variablesPanelGroup0).toBeHidden();
    await expect(variablesPanelGroup1Status).toHaveAttribute('aria-expanded', 'false');
    await searchField.fill('');
    await searchField.type('test100test100test');
    await expect(noVariablesText).toBeVisible();
    await expect(noVariablesText).toHaveText(' No search results ');
    await page.reload();
    await newContract.editVariablesConfiguratorClick();
    await signerVariablesTab.click();
    await searchField.type('test100test100test');
    await expect(noVariablesText).toBeVisible();
    await expect(noVariablesText).toHaveText(' Please add groups ');
    await page.goto('/contract/create/3364');
    await newContract.editVariablesConfiguratorClick();
    await searchField.type('test100test100test');
    await expect(noVariablesText).toBeVisible();
    await expect(noVariablesText).toHaveText(' No regular variables ');
});



test.afterEach(async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const templatesPage = new TemplatesPage(page);
    const editTemplate = new NewEditCopyTemplatePage(page);
    const contracts = new ContractsPage(page);
    const templateName = page.locator('.template-name-column-link >> nth=0');
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const changeStatusPopup = page.locator('.modal-header >> text=You must first change the Template status');
    await page.goto('');
    if (await page.locator('#login-sign-in').isVisible())
    {
        await users.AA();
        await signIn.signInButton();
        await page.waitForURL('/dashboard');
    }
    await userBar.logOutAction();
    await users.SA();
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
    await page.goto('/contracts/list?&sort=-updated_at');
    const contractNameValue = await contractName.innerText();
        if (contractNameValue.includes('autotest')) {
                await contracts.rightArrowClick();
                await contracts.threeDotsMenuDeleteButtonClick();
                await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
                await page.reload(); 
            }
                else if (contractNameValue.includes('autotest')) {
                        await contracts.rightArrowClick();
                        await contracts.threeDotsMenuDeleteButtonClick();
                        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
                        await page.reload(); 
                    }
                    else if (contractNameValue.includes('autotest')) {
                        await contracts.rightArrowClick();
                        await contracts.threeDotsMenuDeleteButtonClick();
                        await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
                        await page.reload(); 
                    }
});