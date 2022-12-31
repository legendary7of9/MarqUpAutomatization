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

test.beforeEach(async ({ page }, testInfo) => {
    await page.goto('');
});

test('checkingRedirectionToPreviewTemplatePage @regClickTractsMedium @previewTemplatePage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const viewTemplate = new ViewTemplatePage(page);
    const templateName = page.locator('.template-name-column-link >> nth=0');
    const editTemplateButton = page.locator('#template-view-edit-template');
    console.log('previewTemplatePage Checking Redirection To Preview Template Page');
    await users.AAForEnduser();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-template/create');
    await newTemplate.templateTitleFieldFill(Helpers.generateRandomString());
    await newTemplate.selectCategoryName();
    await newTemplate.textEditorFieldRandomFill(Helpers.generateRandomString());
    await newTemplate.saveButtonClick();
    await expect(page.url()).toContain('/contract-template/');
    await expect(editTemplateButton).toBeVisible();
    await page.goto('/contract-templates/list?&sort=-updated_at');
    const templateNameValue0 = await templateName.innerText();
    if (templateNameValue0.includes('autotest'))
    {
        await templateName.click();
    }
    await expect(page.url()).toContain('/contract-template/');
    await expect(editTemplateButton).toBeVisible();
    await viewTemplate.editTemplateButtonClick();
    await newTemplate.publishToggleClick();
    await newTemplate.saveButtonClick();
    await expect(page.url()).toContain('/contract-template/');
    await expect(editTemplateButton).toBeVisible();
});

test('displayingCorrectInformation @regClickTractsMedium @previewTemplatePage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const pageTitle = page.locator('.section__title');
    const editTemplateButton = page.locator('#template-view-edit-template');
    const createContractButton = page.locator('#template-view-create-contract');
    const exportButton = page.locator('#template-view-export');
    const templateArea = page.locator('#content-area');
    const templateAreaContent = page.locator('#content-area .contract-content');
    const templateAreaSignForm = page.locator('#content-area .user-sign-form');
    console.log('previewTemplatePage Displaying Correct Information');
    await users.AAForEnduser();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-template/create');
    await newTemplate.templateTitleFieldFill(Helpers.generateRandomString());
    await newTemplate.selectCategoryName();
    await newTemplate.textEditorFieldRandomFill(Helpers.generateRandomString());
    await newTemplate.publishToggleClick();
    await newTemplate.saveButtonClick();
    await expect(pageTitle).toHaveText('View Template');
    await expect(createContractButton).toBeVisible();
    await expect(editTemplateButton).toBeVisible();
    await expect(exportButton).toBeVisible();
    await expect(templateArea).toBeVisible();
    await expect(templateAreaContent).toBeVisible();
    await expect(templateAreaSignForm).toBeVisible();
    const pageGetLink = await page.url();
    await userBar.logOutAction();
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto(pageGetLink);
    await expect(createContractButton).toBeVisible();
    await userBar.logOutAction();
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto(pageGetLink);
    await expect(createContractButton).toBeHidden();
});

test('displayingTheVariables @regClickTractsMedium @previewTemplatePage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const editVariablesPanel = page.locator('.contract-values-wrapper');
    const inputTextVariable = page.locator('[name="elementName_1"] >> nth=0');
    console.log('previewTemplatePage Displaying The Variables');
    await users.AAForEnduser();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-template/clone/3500');
    await newTemplate.templateTitleFieldFill(Helpers.generateRandomString());
    await newTemplate.selectCategoryName();
    await newTemplate.publishToggleClick();
    await newTemplate.saveButtonClick();
    await expect(inputTextVariable).toBeVisible();
    await expect(inputTextVariable).toContainText('{{ inputText }}');
    await expect(editVariablesPanel).toHaveClass('contract-values-wrapper ng-star-inserted');
    await page.waitForTimeout(1000);
    await inputTextVariable.click();
    await page.waitForTimeout(1000);
    await expect(editVariablesPanel).toHaveClass('contract-values-wrapper ng-star-inserted expanded')
});

test('displayingTheSignerVariables @regClickTractsMedium @previewTemplatePage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const viewTemplate = new ViewTemplatePage(page);
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
    const contractConfigurator = page.locator('#contract-values-configurator');
    console.log('previewTemplatePage Displaying The Signer Variables');
    await users.AAForEnduser();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-template/clone/3500');
    await newTemplate.templateTitleFieldFill(Helpers.generateRandomString());
    await newTemplate.selectCategoryName();
    await newTemplate.publishToggleClick();
    await newTemplate.saveButtonClick();
    await expect(signerInputText).toBeVisible();
    await expect(signerInputText).toBeDisabled();
    await expect(signerInputText).toHaveAttribute('data-type', 'text');
    await expect(signerInputText).toHaveAttribute('placeholder', 'signerInputText');
    await expect(signerInputDate).toBeVisible();
    await expect(signerInputDate).toBeDisabled();
    await expect(signerInputDate).toHaveAttribute('data-type', 'date');
    await expect(signerInputDate).toHaveAttribute('placeholder', 'signerInputDate');
    await expect(signerInputNumber).toBeVisible();
    await expect(signerInputNumber).toBeDisabled();
    await expect(signerInputNumber).toHaveAttribute('data-type', 'number');
    await expect(signerInputNumber).toHaveAttribute('placeholder', 'signerInputNumber');
    await expect(signerInputUrl).toBeVisible();
    await expect(signerInputUrl).toBeDisabled();
    await expect(signerInputUrl).toHaveAttribute('data-type', 'url');
    await expect(signerInputUrl).toHaveAttribute('placeholder', 'signerInputUrl');
    await expect(signerListText).toBeVisible();
    await expect(signerListText).toBeDisabled();
    await expect(signerListTextOption).toBeDisabled();
    await expect(signerListTextOption).toHaveText('signerListText');
    await expect(signerListDate).toBeVisible();
    await expect(signerListDate).toBeDisabled();
    await expect(signerListDateOption).toBeDisabled();
    await expect(signerListDateOption).toHaveText('signerListDate');
    await expect(signerListNumber).toBeVisible();
    await expect(signerListNumber).toBeDisabled();
    await expect(signerListNumberOption).toBeDisabled();
    await expect(signerListNumberOption).toHaveText('signerListNumber');
    await expect(signerListUrl).toBeVisible();
    await expect(signerListUrl).toBeDisabled();
    await expect(signerListUrlOption).toBeDisabled();
    await expect(signerListUrlOption).toHaveText('signerListUrl');
    await viewTemplate.editVariablesPanelOpen();
    await page.waitForTimeout(1000);
    await expect(contractConfigurator).not.toContainText('signerInputText');
    await expect(contractConfigurator).not.toContainText('signerInputDate');
    await expect(contractConfigurator).not.toContainText('signerInputNumber');
    await expect(contractConfigurator).not.toContainText('signerInputUrl');
    await expect(contractConfigurator).not.toContainText('signerListText');
    await expect(contractConfigurator).not.toContainText('signerListDate');
    await expect(contractConfigurator).not.toContainText('signerListNumber');
    await expect(contractConfigurator).not.toContainText('signerListUrl');
    await page.goto('/contract-template/clone/3501');
    await newTemplate.templateTitleFieldFill(Helpers.generateRandomString());
    await newTemplate.selectCategoryName();
    await newTemplate.publishToggleClick();
    await newTemplate.saveButtonClick();
    await expect(signerInputText).toBeVisible();
    await expect(signerInputText).toBeDisabled();
    await expect(signerInputText).toHaveAttribute('data-type', 'text');
    await expect(signerInputText).toHaveAttribute('placeholder', 'signerInputText');
    await expect(signerInputDate).toBeVisible();
    await expect(signerInputDate).toBeDisabled();
    await expect(signerInputDate).toHaveAttribute('data-type', 'date');
    await expect(signerInputDate).toHaveAttribute('placeholder', 'signerInputDate');
    await expect(signerInputNumber).toBeVisible();
    await expect(signerInputNumber).toBeDisabled();
    await expect(signerInputNumber).toHaveAttribute('data-type', 'number');
    await expect(signerInputNumber).toHaveAttribute('placeholder', 'signerInputNumber');
    await expect(signerInputUrl).toBeVisible();
    await expect(signerInputUrl).toBeDisabled();
    await expect(signerInputUrl).toHaveAttribute('data-type', 'url');
    await expect(signerInputUrl).toHaveAttribute('placeholder', 'signerInputUrl');
    await expect(signerListText).toBeVisible();
    await expect(signerListText).toBeDisabled();
    await expect(signerListTextOption).toBeDisabled();
    await expect(signerListTextOption).toHaveText('signerListText');
    await expect(signerListDate).toBeVisible();
    await expect(signerListDate).toBeDisabled();
    await expect(signerListDateOption).toBeDisabled();
    await expect(signerListDateOption).toHaveText('signerListDate');
    await expect(signerListNumber).toBeVisible();
    await expect(signerListNumber).toBeDisabled();
    await expect(signerListNumberOption).toBeDisabled();
    await expect(signerListNumberOption).toHaveText('signerListNumber');
    await expect(signerListUrl).toBeVisible();
    await expect(signerListUrl).toBeDisabled();
    await expect(signerListUrlOption).toBeDisabled();
    await expect(signerListUrlOption).toHaveText('signerListUrl');
    await viewTemplate.editVariablesPanelOpen();
    await page.waitForTimeout(1000);
    await expect(contractConfigurator).not.toContainText('signerInputText');
    await expect(contractConfigurator).not.toContainText('signerInputDate');
    await expect(contractConfigurator).not.toContainText('signerInputNumber');
    await expect(contractConfigurator).not.toContainText('signerInputUrl');
    await expect(contractConfigurator).not.toContainText('signerListText');
    await expect(contractConfigurator).not.toContainText('signerListDate');
    await expect(contractConfigurator).not.toContainText('signerListNumber');
    await expect(contractConfigurator).not.toContainText('signerListUrl');
});



test('checkingTheEditVariablesPanel/Closing @regClickTractsMedium @previewTemplatePage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const viewTemplate = new ViewTemplatePage(page);
    const editVariablesPanel = page.locator('.contract-values-wrapper');
    const collapsedVariable0 = page.locator('#configurator-variable-elementName_7');
    const collapsedVariable0Collapsed = page.locator('#configurator-variable-elementName_7 mat-expansion-panel-header');
    const collapsedVariable1 = page.locator('#configurator-variable-elementName_3');
    const collapsedVariable1Collapsed = page.locator('#configurator-variable-elementName_3 mat-expansion-panel-header');
    const collapsedVariable2 = page.locator('#configurator-variable-elementName_11');
    const collapsedVariable2Collapsed = page.locator('#configurator-variable-elementName_11 mat-expansion-panel-header');
    console.log('previewTemplatePage Checking The Edit Variables Panel/Closing');
    await users.AAForEnduser();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-template/clone/3500');
    await page.waitForSelector('[name="elementName_1"] >> nth=0');
    await newTemplate.templateTitleFieldFill(Helpers.generateRandomString());
    await newTemplate.saveButtonClick();
    await viewTemplate.editVariablesPanelOpen();
    await expect(editVariablesPanel).toBeVisible();
    await expect(editVariablesPanel).toHaveClass('contract-values-wrapper ng-star-inserted expanded');
    await expect(collapsedVariable0).toBeVisible();
    await expect(collapsedVariable0Collapsed).toHaveAttribute('aria-expanded', 'false');
    await expect(collapsedVariable1).toBeVisible();
    await expect(collapsedVariable1Collapsed).toHaveAttribute('aria-expanded', 'false');
    await expect(collapsedVariable2).toBeVisible();
    await expect(collapsedVariable2Collapsed).toHaveAttribute('aria-expanded', 'false');
    await viewTemplate.editVariablesPanelClose();
    await expect(editVariablesPanel).toHaveClass('contract-values-wrapper ng-star-inserted');
});

test('displayingTheNestedVariable @regClickTractsMedium @previewTemplatePage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const checkboxNestedListTextVariable = page.locator('[for="elementName_22"]');
    const miltipleChoiceNestedListTextVariable = page.locator('[for="elementName_24-0"]');
    console.log('previewTemplatePage Displaying The Nested Variable');
    await users.AAForEnduser();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-template/clone/3500');
    await page.waitForSelector('[name="elementName_1"] >> nth=0');
    await newTemplate.templateTitleFieldFill(Helpers.generateRandomString());
    await newTemplate.saveButtonClick();
    const checkboxNestedListTextVariableGetHtml = await checkboxNestedListTextVariable.innerHTML();
    await expect(checkboxNestedListTextVariableGetHtml).toContain('name="elementName_18"');
    await expect(checkboxNestedListTextVariable).toContainText('{{ listText }}');
    const miltipleChoiceNestedListTextVariableGetHtml = await miltipleChoiceNestedListTextVariable.innerHTML();
    await expect(miltipleChoiceNestedListTextVariableGetHtml).toContain('name="elementName_2"');
    await expect(checkboxNestedListTextVariable).toContainText('{{ inputDate }}');
});

test('hoveringTheVariable @regClickTractsMedium @previewTemplatePage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const textareaVariable = page.locator('[name="elementName_6"]');
    const listTextNestedVariable = page.locator('.checkbox-variable [name="elementName_7"]');
    console.log('previewTemplatePage Hovering The Variable');
    await users.AAForEnduser();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-template/clone/3500');
    await page.waitForSelector('[name="elementName_1"] >> nth=0');
    await newTemplate.templateTitleFieldFill(Helpers.generateRandomString());
    await newTemplate.saveButtonClick();
    await textareaVariable.hover();
    await expect(textareaVariable).toHaveCSS('color', 'rgb(79, 120, 204)');
    await listTextNestedVariable.hover();
    await expect(listTextNestedVariable).toHaveCSS('color', 'rgb(0, 90, 255)');
});

test('checkingBehaviorForSignatureBlock @regClickTractsLow @previewTemplatePage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const viewTemplate = new ViewTemplatePage(page);
    const templateAreaSignForm = page.locator('#content-area .user-sign-form');
    console.log('previewTemplatePage Checking Behavior For Signature Block');
    await users.AAForEnduser();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-template/create');
    await newTemplate.templateTitleFieldFill(Helpers.generateRandomString());
    await newTemplate.textEditorField.type('test100test \n \n \n');
    await newTemplate.disableSignatureCheckboxClick();
    await newTemplate.saveButtonClick();
    await expect(templateAreaSignForm).toBeHidden();
    await viewTemplate.editTemplateButtonClick();
    await newTemplate.disableSignatureCheckboxClick();
    await newTemplate.saveButtonClick();
    await expect(templateAreaSignForm).toBeVisible();
});

test('validationOfTheEditButton @regClickTractsMedium @previewTemplatePage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const viewTemplate = new ViewTemplatePage(page);
    const editButton = page.locator('#template-view-edit-template');
    const titleField = page.locator('#form-control-title');
    const newTemplateCreateContractButton = page.locator('#template-detail-create-contract');
    console.log('previewTemplatePage Validation Of The Edit Button');
    await users.AAForEnduser();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-template/clone/3500');
    await page.waitForSelector('[name="elementName_1"] >> nth=0');
    await newTemplate.templateTitleFieldFill(Helpers.generateRandomString());
    await newTemplate.saveButtonClick();
    await expect(editButton).toBeVisible();
    await expect(editButton).toHaveCSS('background-color', 'rgb(69, 119, 210)');
    await viewTemplate.editTemplateButtonClick();
    await expect(page.url()).toContain('contract-template/edit/');
    await expect(titleField).toBeVisible();
    await expect(newTemplateCreateContractButton).toBeVisible();
});

test('validationOfTheCreateContractButton/Deactiavtion @regClickTractsHigh @previewTemplatePage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const viewTemplate = new ViewTemplatePage(page);
    const tooltip = page.locator('.mat-tooltip');
    const createContractButton = page.locator('#template-view-create-contract');
    const contractTitleField = page.locator('#form-control-title');
    const saveAndGenerateLinkButton = page.locator('#contract-detail-save-and-generate');
    console.log('previewTemplatePage Validation Of The Create Contract Button/Deactiavtion');
    await users.AAForEnduser();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-template/clone/3500');
    await page.waitForSelector('[name="elementName_1"] >> nth=0');
    await newTemplate.templateTitleFieldFill(Helpers.generateRandomString());
    await newTemplate.selectCategoryName();
    await newTemplate.publishToggleClick();
    await newTemplate.saveButtonClick();
    await expect(createContractButton).toBeVisible();
    await expect(createContractButton).not.toBeDisabled();
    await expect(createContractButton).toHaveCSS('border-color', 'rgb(69, 119, 210)');
    await expect(createContractButton).toHaveCSS('color', 'rgb(69, 119, 210)');
    await viewTemplate.createContractButtonClick();
    await expect(page.url()).toContain('/contract/create/');
    await expect(contractTitleField).toBeVisible();
    await expect(saveAndGenerateLinkButton).toBeVisible();
    await page.goto('');
    await userBar.logOutAction();
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-template/1981');
    await expect(createContractButton).toBeDisabled();
    await createContractButton.hover();
    await expect(tooltip).toBeVisible();
    await expect(tooltip).toHaveText('This Template is connected to a Model that is not active (archived). Please activate the Model or edit the Template to remove the inactive Model');
});

test('displayingTheMultipleChoiceVariable @regClickTractsMedium @previewTemplatePage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
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
    console.log('previewTemplatePage Displaying The Multiple Choice Variable');
    await users.AAForEnduser();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-template/clone/3500');
    await page.waitForSelector('[name="elementName_1"] >> nth=0');
    await newTemplate.templateTitleFieldFill(Helpers.generateRandomString());
    await newTemplate.saveButtonClick();
    await expect(multipleChoiceCheckboxVariable).toBeVisible();
    await expect(multipleChoiceCheckboxVariable0Value).not.toBeChecked();
    await expect(multipleChoiceCheckboxVariable0Value).toBeDisabled();
    await expect(multipleChoiceCheckboxVariable0Text).toContainText('checkbox 1');
    await expect(multipleChoiceCheckboxVariable1Value).not.toBeChecked();
    await expect(multipleChoiceCheckboxVariable1Value).toBeDisabled();
    await expect(multipleChoiceCheckboxVariable1Text).toContainText('checkbox 2');
    await expect(multipleChoiceCheckboxVariable2Value).not.toBeChecked();
    await expect(multipleChoiceCheckboxVariable2Value).toBeDisabled();
    await expect(multipleChoiceCheckboxVariable2Text).toContainText('checkbox 3');
    await expect(multipleChoiceRadioButtonVariable).toBeVisible();
    await expect(multipleChoiceRadioButtonVariable0Value).toBeChecked();
    await expect(multipleChoiceRadioButtonVariable0Value).toBeDisabled();
    await expect(multipleChoiceRadioButtonVariable0Text).toContainText('None');
    await expect(multipleChoiceRadioButtonVariable1Value).not.toBeChecked();
    await expect(multipleChoiceRadioButtonVariable1Value).toBeDisabled();
    await expect(multipleChoiceRadioButtonVariable1Text).toContainText('radio button 1');
    await expect(multipleChoiceRadioButtonVariable2Value).not.toBeChecked();
    await expect(multipleChoiceRadioButtonVariable2Value).toBeDisabled();
    await expect(multipleChoiceRadioButtonVariable2Text).toContainText('radio button 2');
    await expect(multipleChoiceRadioButtonVariable3Value).not.toBeChecked();
    await expect(multipleChoiceRadioButtonVariable3Value).toBeDisabled();
    await expect(multipleChoiceRadioButtonVariable3Text).toContainText('radio button 3');
});

test('displaying/ValidationOfTheExportButton @regClickTractsHigh @previewTemplatePage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const viewTemplate = new ViewTemplatePage(page);
    const exportButton = page.locator('#template-view-export');
    console.log('previewTemplatePage Displaying/Validation Of The Export Button');
    await users.AAForEnduser();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-template/clone/3500');
    await page.waitForSelector('[name="elementName_1"] >> nth=0');
    await newTemplate.templateTitleFieldFill(Helpers.generateRandomString());
    await newTemplate.saveButtonClick();
    const getPageUrl = await page.url();
    await expect(exportButton).toBeVisible();
    await expect(exportButton).toHaveCSS('background-color', 'rgb(69, 119, 210)');
    const [ download ] = await Promise.all([
        page.waitForEvent('download'),
        await viewTemplate.exportButtonClick()
    ]);
    expect(download.suggestedFilename()).toContain('autotest');
    expect(download.suggestedFilename()).toContain('.docx');
    await download.delete();
    await page.goto('');
    await userBar.logOutAction();
    await users.AUForEnduser();
    await signIn.signInButton();
    await page.waitForURL('/clients/411');
    await page.goto(getPageUrl);
    await expect(exportButton).toBeVisible();
    await expect(exportButton).toHaveCSS('background-color', 'rgb(69, 119, 210)');
    await userBar.logOutAction();
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto(getPageUrl);
    await expect(exportButton).toBeVisible();
    await expect(exportButton).toHaveCSS('background-color', 'rgb(69, 119, 210)');
});

test('checkingTheTabKey @regClickTractsMedium @previewTemplatePage @tabKey', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const editVariablePanelVariableStatus0 = page.locator('#configurator-variable-elementName_1 mat-expansion-panel-header');
    const editVariablePanelVariableStatus1 = page.locator('#configurator-variable-elementName_7 mat-expansion-panel-header');
    const editVariablePanelVariableStatus2 = page.locator('#configurator-variable-elementName_2 mat-expansion-panel-header');
    const editVariablePanelVariableStatus3 = page.locator('#configurator-variable-elementName_8 mat-expansion-panel-header');
    const editVariablePanelVariableStatus4 = page.locator('#configurator-variable-elementName_3 mat-expansion-panel-header');
    const editVariablePanelVariableStatus5 = page.locator('#configurator-variable-elementName_9 mat-expansion-panel-header');
    const editVariablePanelVariableStatus6 = page.locator('#configurator-variable-elementName_4 mat-expansion-panel-header');
    const editVariablePanelVariableStatus7 = page.locator('#configurator-variable-elementName_10 mat-expansion-panel-header');
    const editVariablePanelVariableStatus8 = page.locator('#configurator-variable-elementName_6 mat-expansion-panel-header');
    const editVariablePanelVariableStatus9 = page.locator('#configurator-variable-elementName_11 mat-expansion-panel-header');
    const editVariablePanelVariableStatus10 = page.locator('#configurator-variable-elementName_23 mat-expansion-panel-header');
    const contractBodyNumberVariable = page.locator('[name="elementName_3"] >> nth=0')
    console.log('previewTemplatePage Checking The Tab Key');
    await users.AAForEnduser();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-template/clone/3500');
    await page.waitForSelector('[name="elementName_1"] >> nth=0');
    await newTemplate.templateTitleFieldFill(Helpers.generateRandomString());
    await newTemplate.saveButtonClick();
    await page.waitForSelector('[name="elementName_3"] >> nth=0');
    await page.waitForTimeout(2500);
    await contractBodyNumberVariable.click();
    await page.waitForTimeout(1500);
    await expect(editVariablePanelVariableStatus0).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus1).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus2).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus3).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus4).toHaveAttribute('aria-expanded', 'true');
    await expect(editVariablePanelVariableStatus5).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus6).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus7).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus8).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus9).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus10).toHaveAttribute('aria-expanded', 'false');
    await page.keyboard.press('Tab');
    await page.waitForTimeout(1000);
    await expect(editVariablePanelVariableStatus0).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus1).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus2).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus3).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus4).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus5).toHaveAttribute('aria-expanded', 'true');
    await expect(editVariablePanelVariableStatus6).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus7).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus8).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus9).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus10).toHaveAttribute('aria-expanded', 'false');
    await page.keyboard.press('Tab');
    await page.waitForTimeout(1000);
    await expect(editVariablePanelVariableStatus0).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus1).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus2).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus3).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus4).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus5).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus6).toHaveAttribute('aria-expanded', 'true');
    await expect(editVariablePanelVariableStatus7).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus8).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus9).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus10).toHaveAttribute('aria-expanded', 'false');
    await page.keyboard.press('Tab');
    await page.waitForTimeout(1000);
    await expect(editVariablePanelVariableStatus0).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus1).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus2).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus3).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus4).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus5).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus6).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus7).toHaveAttribute('aria-expanded', 'true');
    await expect(editVariablePanelVariableStatus8).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus9).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus10).toHaveAttribute('aria-expanded', 'false');
    await page.keyboard.press('Tab');
    await page.waitForTimeout(1000);
    await expect(editVariablePanelVariableStatus0).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus1).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus2).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus3).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus4).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus5).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus6).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus7).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus8).toHaveAttribute('aria-expanded', 'true');
    await expect(editVariablePanelVariableStatus9).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus10).toHaveAttribute('aria-expanded', 'false');
    await page.keyboard.press('Tab');
    await page.waitForTimeout(1000);
    await expect(editVariablePanelVariableStatus0).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus1).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus2).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus3).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus4).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus5).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus6).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus7).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus8).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus9).toHaveAttribute('aria-expanded', 'true');
    await expect(editVariablePanelVariableStatus10).toHaveAttribute('aria-expanded', 'false');
    await page.keyboard.press('Tab');
    await page.waitForTimeout(1000);
    await expect(editVariablePanelVariableStatus0).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus1).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus2).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus3).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus4).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus5).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus6).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus7).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus8).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus9).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus10).toHaveAttribute('aria-expanded', 'true');
    await page.keyboard.press('Tab');
    await page.waitForTimeout(1000);
    await expect(editVariablePanelVariableStatus0).toHaveAttribute('aria-expanded', 'true');
    await expect(editVariablePanelVariableStatus1).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus2).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus3).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus4).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus5).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus6).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus7).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus8).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus9).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus10).toHaveAttribute('aria-expanded', 'false');
    await page.keyboard.press('Tab');
    await page.waitForTimeout(1000);
    await expect(editVariablePanelVariableStatus0).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus1).toHaveAttribute('aria-expanded', 'true');
    await expect(editVariablePanelVariableStatus2).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus3).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus4).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus5).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus6).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus7).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus8).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus9).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus10).toHaveAttribute('aria-expanded', 'false');
    await page.keyboard.press('Tab');
    await page.waitForTimeout(1000);
    await expect(editVariablePanelVariableStatus0).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus1).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus2).toHaveAttribute('aria-expanded', 'true');
    await expect(editVariablePanelVariableStatus3).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus4).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus5).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus6).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus7).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus8).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus9).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus10).toHaveAttribute('aria-expanded', 'false');
    await page.keyboard.press('Tab');
    await page.waitForTimeout(1000);
    await expect(editVariablePanelVariableStatus0).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus1).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus2).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus3).toHaveAttribute('aria-expanded', 'true');
    await expect(editVariablePanelVariableStatus4).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus5).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus6).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus7).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus8).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus9).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus10).toHaveAttribute('aria-expanded', 'false');
    await page.keyboard.press('Tab');
    await page.waitForTimeout(1000);
    await expect(editVariablePanelVariableStatus0).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus1).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus2).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus3).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus4).toHaveAttribute('aria-expanded', 'true');
    await expect(editVariablePanelVariableStatus5).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus6).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus7).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus8).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus9).toHaveAttribute('aria-expanded', 'false');
    await expect(editVariablePanelVariableStatus10).toHaveAttribute('aria-expanded', 'false');
});

test('checkingThatProductNameIsOnlyDisplayedInTheContractFeeDropDown @regClickTractsMedium @previewTemplatePage @paytracts', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newTemplate = new NewEditCopyTemplatePage(page);
    const paytractsBlock = page.locator('.paytracts-product');
    const paytractsDropDown = page.locator('.paytracts-product mat-select');
    const paytractsDropDownValue0 = page.locator('mat-option >> text= 1 USD Recurring 1 months (product_ new) ');
    const paytractsDropDownValue1 = page.locator('mat-option >> text= 99 USD One time (Test AK product) ');
    console.log('previewTemplatePage Checking That Product Name Is Only Displayed In The Contract Fee Drop Down');
    await users.AAForEnduser();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-template/clone/3500');
    await page.waitForSelector('[name="elementName_1"] >> nth=0');
    await newTemplate.templateTitleFieldFill(Helpers.generateRandomString());
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