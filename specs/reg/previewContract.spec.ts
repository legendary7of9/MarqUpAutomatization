import { test , expect, webkit, chromium, Browser, BrowserContext, Page } from '@playwright/test'
import { isContext } from 'vm'
import { UserBar, Users } from '../../framework'
import { Search } from '../../framework'
import { SignInPage } from '../../framework'
import { ForgotPasswordPage } from '../../framework'
import { SideBar } from '../../framework'
import { Pagination } from '../../framework'
import { ManageDisplay } from '../../framework'
import { DashboardPage } from '../../framework'
import { TemplatesPage } from '../../framework'
import { NewEditCopyTemplatePage } from '../../framework'
import { ViewTemplatePage } from '../../framework'
import { NewEditCopyModelPage } from '../../framework'
import { DealsPage } from '../../framework'
import { NewEditTermPage } from '../../framework'
import { ViewingModelPage } from '../../framework'
import { DealsRelatedToModelPage } from '../../framework'
import { NewEditDealPage } from '../../framework'
import { DealAnalysisPage } from '../../framework'
import { ExistingModelPage } from '../../framework'
import { ContractsPage } from '../../framework'
import { NewEditContractPage } from '../../framework'
import { ViewContract } from '../../framework'
import { ModelPage } from '../../framework'
import { Helpers } from '../../lib/helpers/randomCharactersAndDigits.preload'
import { HelpersText } from '../../lib/helpers/textForTemplates.preload'


test.describe("test", () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

test.beforeAll(async () => {
    const browser = await webkit.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('');
    await page.locator('[formcontrolname="email"]').fill('accountadmin4@maildrop.cc'); //login
    await page.locator('[formcontrolname="password"]').fill('Qwerty123@'); //login
    await page.locator('#login-sign-in').click(); //login
    await page.waitForURL('/dashboard'); //login
    await page.goto('/contract-template/clone/2354'); //saveAsNewTemplate
    await page.waitForSelector('[name="elementName_1"]'); //saveAsNewTemplate
    await page.locator('[formcontrolname="title"]').fill(Helpers.generateRandomString()); //saveAsNewTemplate
    await page.locator('#template-detail-status-publish-button').click(); //saveAsNewTemplate
    await page.locator('#template-detail-create-contract').click(); //saveAsNewTemplate
    await page.locator('[formcontrolname="description"]').fill(Helpers.generateRandomString()); //createContract
    await page.locator('.contract-values-wrapper-opener').click(); //createContract
    await page.locator('#configurator-variable-elementName_1').click(); //inputText
    await page.locator('#variables-list-form-control-value-elementName_1').fill('Hi World!'); //inputText
    await page.locator('#configurator-variable-elementName_7').click(); //listText
    await page.locator('#variables-list-form-control-value-elementName_7').click(); //listText
    await page.locator('.mat-option >> nth=2').click(); //listText
    await page.locator('#configurator-variable-elementName_2').click(); //inputDate
    await page.locator('#variables-list-form-control-value-elementName_2').click(); //inputDate
    await page.waitForSelector('.mat-calendar-body-cell-content >> text=22'); //inputDate
    await page.locator('.mat-calendar-body-cell-content >> text=22').click(); //inputDate
    await page.locator('#configurator-variable-elementName_9').click(); //listNumber
    await page.locator('#variables-list-form-control-value-elementName_9').click(); //listNumber
    await page.locator('.mat-option >> nth=2').click(); //listNumber
    await page.locator('#configurator-variable-elementName_3').click(); //inputNumber
    await page.locator('#variables-list-form-control-value-elementName_3').type('324234256'); //inputNumber
    await page.locator('#configurator-variable-elementName_8').click(); //listDate
    await page.locator('#variables-list-form-control-value-elementName_8').click(); //listDate
    await page.locator('.mat-option >> nth=2').click(); //listDate
    await page.locator('#configurator-variable-elementName_4').click(); //inputUrl
    await page.locator('#variables-list-form-control-value-elementName_4').fill('playwright.dev'); //inputUrl
    await page.locator('#configurator-variable-elementName_6').click(); //inputTextarea
    await page.locator('[role="textbox"]').fill('Hi, we gonna try to use Textarea variable! '); //inputTextarea
    await page.locator('[title="Variables"]').click(); //inputTextarea
    await page.frameLocator('.cke_panel_frame').locator('[title="inputText"]').click(); //inputTextarea
    await page.locator('[title="Variables"]').click(); //inputTextarea
    await page.frameLocator('.cke_panel_frame').locator('[title="listNumber"]').click(); //inputTextarea
    await page.locator('[title="Variables"]').click(); //inputTextarea
    await page.frameLocator('.cke_panel_frame').locator('[title="signerInputDate"]').click(); //inputTextarea
    await page.locator('[title="Variables"]').click(); //inputTextarea
    await page.frameLocator('.cke_panel_frame').locator('[title="signerListUrl"]').click(); //inputTextarea
    await page.locator('#configurator-variable-elementName_10').click(); //listUrl
    await page.locator('#variables-list-form-control-value-elementName_10').click(); //listUrl
    await page.locator('.mat-option >> nth=2').click(); //listUrl
    await page.locator('#configurator-variable-elementName_11').click(); //listTriggeredText
    await page.locator('#variables-list-form-control-value-elementName_11').click(); //listTriggeredText
    await page.locator('.mat-option >> nth=3').click(); //listTriggeredText
    await page.locator('#configurator-variable-elementName_23').click(); //listTriggeredTextWithNested
    await page.locator('#variables-list-form-control-value-elementName_23').click(); //listTriggeredTextWithNested
    await page.locator('.mat-option >> nth=3').click(); //listTriggeredTextWithNested
    await page.locator('.contract-values-wrapper-opener').click(); //createContract
    await page.locator('#paytracts-contract-fee-select').click(); //createContract
    await page.locator('.mat-option >> nth=2').click(); //createContract
    await page.locator('#contract-detail-status-publish-button').click(); //createContract
    await page.locator('#contract-detail-save-and-generate').click(); //createContract
    await page.waitForSelector('#contract-view-backtodraft'); //createContract
    await page.close();
    await context.close();
    await browser.close();
});



test.beforeEach(async ({ page }) => {
    await page.goto('');
});

test('viewOfThePreviewContractPages @regClickTractsMedium @previewContract @previewContractGeneral', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const bodyText = page.locator('.mat-card');
    const table0 = page.locator('table >> nth=0');
    const inputTextVariable = page.locator('[name="elementName_1"] >> nth=0');
    const inputDateVariable = page.locator('[name="elementName_2"] >> nth=0');
    const inputNumberVariable = page.locator('[name="elementName_3"] >> nth=0');
    const listTextVariable = page.locator('[name="elementName_7"] >> nth=0');
    const listDateVariable = page.locator('[name="elementName_8"] >> nth=0');
    const listNumberVariable = page.locator('[name="elementName_9"] >> nth=0');
    const inputUrlVariable = page.locator('[name="elementName_4"] >> nth=0');
    const signersInputDate = page.locator('input[name="elementName_15"] >> nth=0');
    const signersListUrl = page.locator('select[name="elementName_21"] >> nth=0');
    const image = page.locator('img');
    const listUrlVariable = page.locator('[name="elementName_10"] >> nth=0');
    const inputCheckbox = page.locator('#elementName_5');
    const inputCheckboxText = page.locator('[for="elementName_5"]');
    const inputCheckboxWithNested = page.locator('#elementName_22');
    const inputCheckboxWithNestedText = page.locator('[for="elementName_5"]');
    const multipleChoiceRadio = page.locator('.multiple-choice-radio >> nth=0');
    const multipleChoiceRadioNone = page.locator('#elementName_12-none');
    const multipleChoiceRadioNoneText = page.locator('[for="elementName_12-none"]');
    const multipleChoiceRadioButton0 = page.locator('#elementName_12-0');
    const multipleChoiceRadioButton0Text = page.locator('[for="elementName_12-0"]');
    const multipleChoiceRadioButton1 = page.locator('#elementName_12-1');
    const multipleChoiceRadioButton1Text = page.locator('[for="elementName_12-1"]');
    const multipleChoiceRadioButton2 = page.locator('#elementName_12-2');
    const multipleChoiceRadioButton2Text = page.locator('[for="elementName_12-2"]');
    const multipleChoiceCheckbox = page.locator('.multiple-choice-radio >> nth=1');
    const multipleChoiceCheckbox2Button0Text = page.locator('[for="elementName_13-0"]');
    const multipleChoiceCheckbox2Button1Text = page.locator('[for="elementName_13-1"]');
    const multipleChoiceCheckbox2Button2Text = page.locator('[for="elementName_13-2"]');
    const table1 = page.locator('table >> nth=1');
    const signerInputText = page.locator('input[name="elementName_14"] >> nth=0');
    const signerInputNumber = page.locator('input[name="elementName_16"] >> nth=0');
    const signerInputUrl = page.locator('input[name="elementName_17"] >> nth=0');
    const signerListText = page.locator('select[name="elementName_18"] >> nth=0');
    const signerListDate = page.locator('select[name="elementName_19"] >> nth=0');
    const signerListNumber = page.locator('select[name="elementName_20"] >> nth=0');
    const multipleChoiceWithNested = page.locator('.multiple-choice-radio >> nth=1');
    const multipleChoiceWithNestedNone = page.locator('#elementName_24-none');
    const multipleChoiceWithNestedNoneText = page.locator('[for="elementName_24-none"]');
    const multipleChoiceWithNestedButton0 = page.locator('#elementName_24-0');
    const multipleChoiceWithNestedButton0Text = page.locator('[for="elementName_24-0"]');
    const multipleChoiceWithNestedButton1 = page.locator('#elementName_24-1');
    const multipleChoiceWithNestedButton1Text = page.locator('[for="elementName_24-1"]');
    const multipleChoiceWithNestedButton2 = page.locator('#elementName_24-2');
    const multipleChoiceWithNestedButton2Text = page.locator('[for="elementName_24-2"]');
    const paytracts0 = page.locator('[name="paytracts-contract-fee"]');
    const paytracts1 = page.locator('.stripe-contract-view');
    console.log('previewContract View Of The Preview Contract Pages');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractName.click();
    await page.waitForSelector('[name="elementName_1"] >> nth=0');
    await expect(bodyText).toContainText('Currently on the add/edit Template page variables field has limited area to be edited. To expand that area and to make UX easier adding/editing variables must be performed in the Edit Variables panel.')
    await expect(table0).toBeVisible();
    await expect(inputTextVariable).toBeVisible();
    await expect(inputTextVariable).toHaveText('Hi World!');
    await expect(inputDateVariable).toBeVisible();
    await expect(inputDateVariable).toHaveText('09/22/2022');
    await expect(inputNumberVariable).toBeVisible();
    await expect(inputNumberVariable).toHaveText('324,234,256');
    await expect(listTextVariable).toBeVisible();
    await expect(listTextVariable).toHaveText('Kane');
    await expect(listNumberVariable).toBeVisible();
    await expect(listNumberVariable).toHaveText('3,123,123.312312312');
    await expect(listDateVariable).toBeVisible();
    await expect(listDateVariable).toHaveText('08/22/2023');
    await expect(bodyText).toContainText('Req.EditVariables.Panel.30. Validation for all fields on the focus change, TAB key press and when the user clicks on the Save/Create Contract button.')
    await expect(inputUrlVariable).toBeVisible();
    await expect(inputUrlVariable).toHaveText('playwright.dev');
    await expect(bodyText).toContainText('Req.EditVariables.Panel.60. When the user expands already inserted variable in the Edit Variable panel, Template body must be scrolled to the expanded variable placement.')
    await expect(signersInputDate).toBeVisible();
    await expect(signersInputDate).toHaveAttribute('data-type', 'date');
    await expect(signersInputDate).toHaveAttribute('placeholder', 'signerInputDate');
    await expect(signersInputDate).toHaveAttribute('disabled', '');
    await expect(signersListUrl).toBeVisible();
    await expect(signersListUrl).toHaveText('signerListUrllinkedin.commaildrop.cctwitch.tv');
    await expect(signersListUrl).toHaveAttribute('disabled', '');
    await expect(image).toBeVisible();
    await expect(image).toHaveAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png');
    await expect(bodyText).toContainText('Requirements URL variables.');
    await expect(listUrlVariable).toBeVisible();
    await expect(listUrlVariable).toHaveText('google.com');
    await expect(inputCheckbox).toBeVisible();
    await expect(inputCheckbox).toHaveAttribute('type', 'checkbox');
    await expect(inputCheckbox).toHaveAttribute('disabled', '');
    await expect(inputCheckboxText).toHaveText('Hi lets try to use variables');
    await expect(inputCheckboxWithNested).toBeVisible();
    await expect(inputCheckboxWithNested).toHaveAttribute('type', 'checkbox');
    await expect(inputCheckboxWithNested).toHaveAttribute('disabled', '');
    await expect(inputCheckboxWithNestedText).toHaveText('Hi lets try to use variables');
    await expect(bodyText).toContainText('Req.Number.Variable.30. If the user enters a point symbol before the number, the “zero” is added automatically when saving the template (after the user presses the Save button).');
    await expect(multipleChoiceRadio).toBeVisible();
    await expect(multipleChoiceRadioNone).toBeVisible();
    await expect(multipleChoiceRadioNone).toHaveAttribute('disabled', '');
    await expect(multipleChoiceRadioNoneText).toHaveText('None');
    await expect(multipleChoiceRadioButton0).toBeVisible();
    await expect(multipleChoiceRadioButton0).toHaveAttribute('disabled', '');
    await expect(multipleChoiceRadioButton0Text).toHaveText('radio button 1');
    await expect(multipleChoiceRadioButton1).toBeVisible();
    await expect(multipleChoiceRadioButton1).toHaveAttribute('disabled', '');
    await expect(multipleChoiceRadioButton1Text).toHaveText('radio button 2');
    await expect(multipleChoiceRadioButton2).toBeVisible();
    await expect(multipleChoiceRadioButton2).toHaveAttribute('disabled', '');
    await expect(multipleChoiceRadioButton2Text).toHaveText('radio button 3');
    await expect(multipleChoiceCheckbox).toBeVisible();
    await expect(multipleChoiceCheckbox2Button0Text).toHaveText('checkbox 1');
    await expect(multipleChoiceCheckbox2Button1Text).toHaveText('checkbox 2');
    await expect(multipleChoiceCheckbox2Button2Text).toHaveText('checkbox 3');
    await expect(bodyText).toContainText('Req.Number.Variable.50. The variables of the Content Type Number (both Input and List) should automatically place commas every three digits before the point divider.');
    await expect(table1).toBeVisible();
    await expect(signerInputText).toBeVisible();
    await expect(signerInputText).toHaveAttribute('data-type', 'text');
    await expect(signerInputText).toHaveAttribute('placeholder', 'signerInputText');
    await expect(signerInputText).toHaveAttribute('disabled', '');
    await expect(signerInputNumber).toBeVisible();
    await expect(signerInputNumber).toHaveAttribute('data-type', 'number');
    await expect(signerInputNumber).toHaveAttribute('placeholder', 'signerInputNumber');
    await expect(signerInputNumber).toHaveAttribute('disabled', '');
    await expect(signerInputUrl).toBeVisible();
    await expect(signerInputUrl).toHaveAttribute('data-type', 'url');
    await expect(signerInputUrl).toHaveAttribute('placeholder', 'signerInputUrl');
    await expect(signerInputUrl).toHaveAttribute('disabled', '');
    await expect(signerListText).toBeVisible();
    await expect(signerListText).toHaveText('signerListTextHiYesNo');
    await expect(signerListText).toHaveAttribute('disabled', '');
    await expect(signerListDate).toBeVisible();
    await expect(signerListDate).toHaveText('signerListDate09/11/201311/16/202605/28/1998');
    await expect(signerListDate).toHaveAttribute('disabled', '');
    await expect(signerListNumber).toBeVisible();
    await expect(signerListNumber).toHaveText('signerListNumber2,131,23234,324,324456,456,456');
    await expect(signerListNumber).toHaveAttribute('disabled', '');
    await expect(bodyText).toContainText('If the cursor was in-between the text, the existing template text will be broken with a new checkbox variable as a new paragraph line');
    await expect(bodyText).toContainText('On the Edit Variables panel the variable title matching the search criteria should be displayed. Variables matching the search criteria are collapsed. ');
    await expect(multipleChoiceWithNested).toBeVisible();
    await expect(multipleChoiceWithNestedNone).toBeVisible();
    await expect(multipleChoiceWithNestedNone).toHaveAttribute('disabled', '');
    await expect(multipleChoiceWithNestedNoneText).toHaveText('None');
    await expect(multipleChoiceWithNestedButton0).toBeVisible();
    await expect(multipleChoiceWithNestedButton0).toHaveAttribute('disabled', '');
    await expect(multipleChoiceWithNestedButton0Text).toHaveText('Option1 09/22/2022‌ 08/22/2023‌ ‌ signerListDate09/11/201311/16/202605/28/1998‌ ');
    await expect(multipleChoiceWithNestedButton1).toBeVisible();
    await expect(multipleChoiceWithNestedButton1).toHaveAttribute('disabled', '');
    await expect(multipleChoiceWithNestedButton1Text).toHaveText('Option 2 324,234,256‌ 3,123,123.312312312‌ ‌ ');
    await expect(multipleChoiceWithNestedButton2).toBeVisible();
    await expect(multipleChoiceWithNestedButton2).toHaveAttribute('disabled', '');
    await expect(multipleChoiceWithNestedButton2Text).toHaveText('Option 3 Hi World!‌ playwright.dev‌ Kane‌ google.com‌ signerListTextHiYesNo‌ signerListUrllinkedin.commaildrop.cctwitch.tv‌ ');
    await expect(paytracts0).toBeVisible();
    await expect(paytracts1).toHaveText(' Contract Fee: 999,999.99 EUR Recurring 6 days');
    await expect(paytracts1).toBeVisible();
    await expect(paytracts1).toHaveText(' Contract Fee: 999,999.99 EUR Recurring 6 days');
});

test('displayingDealHyperlink @regClickTractsMedium @previewContract @previewContractGeneral', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const linkedDeal = page.locator('.section__header-deal');
    const summaryButton = page.locator('#deal-analysis-summary');
    console.log('previewContract Displaying Deal Hyperlink');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/3199');
    await expect(linkedDeal).toBeVisible();
    await expect(linkedDeal).toHaveText('Deal:test100testContract5');
    await linkedDeal.click();
    await expect(page.url()).toContain('/deals/analysis-deal/')
    await expect(summaryButton).toBeVisible();
});

test('displayingTheNotificationField @regClickTractsLow @previewContract @previewContractGeneral', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const notificationsField = page.locator('.section__header-emails');
    const approvedBy = page.locator('.section__header-securx');
    console.log('previewContract Displaying The Notification Field');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/3202');
    await expect(notificationsField).toBeVisible();
    await expect(notificationsField).toHaveText('Notifications: banshchykov@gmail.com, alexey.banshykov@mobindustry.net ');
});

test('displayingTheSignerVariables @regClickTractsMedium @previewContract @previewContractGeneral', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const signerInputText = page.locator('input[name="elementName_14"] >> nth=1');
    const signerListText = page.locator('select[name="elementName_18"] >> nth=2');
    const signerInputDate = page.locator('input[name="elementName_15"] >> nth=2');
    const signerListDate = page.locator('select[name="elementName_19"] >> nth=2');
    const signerInputNumber = page.locator('input[name="elementName_16"] >> nth=1');
    const signerListNumber = page.locator('select[name="elementName_20"] >> nth=1');
    const signerInputUrl = page.locator('input[name="elementName_17"] >> nth=1');
    const signerListUrl = page.locator('select[name="elementName_21"] >> nth=3');
    console.log('previewContract Displaying The Signer Variables');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractName.click();
    await expect(signerInputText).toHaveAttribute('data-type', 'text');
    await expect(signerInputText).toHaveAttribute('placeholder', 'signerInputText');
    await expect(signerInputText).toHaveAttribute('disabled', '');
    await expect(signerListText).toHaveAttribute('disabled', '');
    await expect(signerListText).toContainText('signerListText');
    await expect(signerListText).toContainText('Hi');
    await expect(signerListText).toContainText('Yes');
    await expect(signerListText).toContainText('No');
    await expect(signerInputDate).toHaveAttribute('data-type', 'date');
    await expect(signerInputDate).toHaveAttribute('placeholder', 'signerInputDate');
    await expect(signerInputDate).toHaveAttribute('disabled', '');
    await expect(signerListDate).toHaveAttribute('disabled', '');
    await expect(signerListDate).toContainText('signerListDate');
    await expect(signerListDate).toContainText('09/11/2013');
    await expect(signerListDate).toContainText('11/16/2026');
    await expect(signerListDate).toContainText('05/28/1998');
    await expect(signerInputNumber).toHaveAttribute('data-type', 'number');
    await expect(signerInputNumber).toHaveAttribute('placeholder', 'signerInputNumber');
    await expect(signerInputNumber).toHaveAttribute('disabled', '');
    await expect(signerListNumber).toHaveAttribute('disabled', '');
    await expect(signerListNumber).toContainText('signerListNumber');
    await expect(signerListNumber).toContainText('2,131,232');
    await expect(signerListNumber).toContainText('34,324,324');
    await expect(signerListNumber).toContainText('456,456,456');
    await expect(signerInputUrl).toHaveAttribute('data-type', 'url');
    await expect(signerInputUrl).toHaveAttribute('placeholder', 'signerInputUrl');
    await expect(signerInputUrl).toHaveAttribute('disabled', '');
    await expect(signerListUrl).toHaveAttribute('disabled', '');
    await expect(signerListUrl).toContainText('signerListUrl');
    await expect(signerListUrl).toContainText('linkedin.com');
    await expect(signerListUrl).toContainText('maildrop.cc');
    await expect(signerListUrl).toContainText('twitch.tv');
});

test('displayingTheNameOfUnchoosenVariables @regClickTractsLow @previewContract @previewContractGeneral', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const viewContract = new ViewContract(page);
    const editContract = new NewEditContractPage(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const inputText = page.locator('[name="elementName_1"] >> nth=0');
    const inputTextConfig = page.locator('#configurator-variable-elementName_1');
    const inputTextValue = page.locator('#variables-list-form-control-value-elementName_1');
    console.log('previewContract Displaying The Name Of Unchoosen Variables');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractName.click();
    await viewContract.backToDraftButtonClick();
    await editContract.editVariablesConfiguratorClick();
    await inputTextConfig.click();
    await inputTextValue.fill('');
    await editContract.editVariablesConfiguratorClick();
    await editContract.previewContractButtonClick();
    await expect(inputText).toHaveText('{{ inputText }}');
    await viewContract.editButtonClick();
    await editContract.editVariablesConfiguratorClick();
    await inputTextConfig.click();
    await inputTextValue.fill('Hi World!');
    await editContract.editVariablesConfiguratorClick();
    await editContract.publishToggleClick();
    await editContract.saveAndGenerateLinkButtonClick();
});

test('behaviorOfTheVariableThatWasAddedMoreThenOnePlace @regClickTractsMedium @previewContract @previewContractGeneral', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const listText0 = page.locator('[name="elementName_7"] >> nth=0');
    const listText1 = page.locator('[name="elementName_7"] >> nth=1');
    const listText2 = page.locator('[name="elementName_7"] >> nth=2');
    console.log('previewContract Behavior Of The Variable That Was Added More Then One Place');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractName.click();
    await expect(listText0).toBeVisible();
    await expect(listText0).toHaveText('Kane');
    await expect(listText1).toBeVisible();
    await expect(listText1).toHaveText('Kane');
    await expect(listText2).toBeVisible();
    await expect(listText2).toHaveText('Kane');
});

test('displayingCorrectImage @regClickTractsLow @previewContract @previewContractGeneral', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const imgage = page.locator('img');
    console.log('previewContract Displaying Correct Image');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractName.click();
    await expect(imgage).toBeVisible();
    await expect(imgage).toHaveAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png');
});

test('behaviorForContractFee @regClickTractsMedium @previewContract @previewContractGeneral', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const contractFee0 = page.locator('[name="paytracts-contract-fee"]');
    const contractFee1 = page.locator('.stripe-contract-view');
    console.log('previewContract Behavior For Contract Fee');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractName.click();
    await expect(contractFee0).toBeVisible();
    await expect(contractFee0).toHaveText(' Contract Fee: 999,999.99 EUR Recurring 6 days');
    await expect(contractFee1).toBeVisible();
    await expect(contractFee1).toHaveText(' Contract Fee: 999,999.99 EUR Recurring 6 days');
    await expect(contractFee1).toHaveCSS('font-weight', '700');
});

test('displayingTriggeredText @regClickTractsLow @previewContract @previewContractGeneral', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const viewContract = new ViewContract(page);
    const editContract = new NewEditContractPage(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const triggeredText = page.locator('//p[text()="Lets code"]');
    const triggeredTextConf = page.locator('#configurator-variable-elementName_11');
    const triggeredTextConfDropDown = page.locator('#variables-list-form-control-value-elementName_11');
    const triggeredTextConfDropDownHide = page.locator('.mat-option >> text= Hide ');
    const triggeredTextConfDropDownOption3 = page.locator('.mat-option >> nth=3');
    const triggeredTextHide = page.locator('//p[text()="Hide"]');
    console.log('previewContract Displaying Triggered Text');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractName.click();
    await expect(triggeredText).toBeVisible();
    await viewContract.backToDraftButtonClick();
    await editContract.editVariablesConfiguratorClick();
    await triggeredTextConf.click();
    await triggeredTextConfDropDown.click();
    await triggeredTextConfDropDownHide.click();
    await editContract.editVariablesConfiguratorClick();
    await editContract.previewContractButtonClick();
    await expect(triggeredText).toBeHidden();
    await expect(triggeredTextHide).toBeHidden();
    await viewContract.editButtonClick();
    await editContract.editVariablesConfiguratorClick();
    await triggeredTextConf.click();
    await triggeredTextConfDropDown.click();
    await triggeredTextConfDropDownOption3.click();
    await editContract.editVariablesConfiguratorClick();
    await editContract.publishToggleClick();
    await editContract.saveAndGenerateLinkButtonClick();
});

test('displayingCheckboxAndMultipleChoiceVariables @regClickTractsLow @previewContract @previewContractGeneral', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const checkbxoVariable = page.locator('#elementName_5');
    const checkbxoVariableParagraph = page.locator('//p[contains(text(),"Hi lets try to use variables")]');
    const checkbxoVariableText = page.locator('[for="elementName_5"]');
    const multipleChoiceCheckboxVariable = page.locator('.multiple-choice-checkbox');
    const multipleChoiceCheckboxVariableValue0 = page.locator('#elementName_13-0');
    const multipleChoiceCheckboxVariableValue0Text = page.locator('[for="elementName_13-0"]');
    const multipleChoiceCheckboxVariableValue1 = page.locator('#elementName_13-1');
    const multipleChoiceCheckboxVariableValue1Text = page.locator('[for="elementName_13-1"]');
    const multipleChoiceCheckboxVariableValue2 = page.locator('#elementName_13-2');
    const multipleChoiceCheckboxVariableValue2Text = page.locator('[for="elementName_13-2"]');
    const multipleChoiceRadioButtonVariable = page.locator('.multiple-choice-radio >> nth=0');
    const multipleChoiceRadioButtonVariableValue0 = page.locator('#elementName_12-none');
    const multipleChoiceRadioButtonVariableValue0Text = page.locator('[for="elementName_12-none"]');
    const multipleChoiceRadioButtonVariableValue1 = page.locator('#elementName_12-0');
    const multipleChoiceRadioButtonVariableValue1Text = page.locator('[for="elementName_12-0"]');
    const multipleChoiceRadioButtonVariableValue2 = page.locator('#elementName_12-1');
    const multipleChoiceRadioButtonVariableValue2Text = page.locator('[for="elementName_12-1"]');
    const multipleChoiceRadioButtonVariableValue3 = page.locator('#elementName_12-2');
    const multipleChoiceRadioButtonVariableValue3Text = page.locator('[for="elementName_12-2"]');
    console.log('previewContract Displaying Checkbox And Multiple Choice Variables');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractName.click();
    await expect(checkbxoVariable).toBeVisible();
    await expect(checkbxoVariable).toHaveAttribute('type', 'checkbox');
    await expect(checkbxoVariable).toHaveAttribute('disabled', '');
    await expect(checkbxoVariableParagraph).toBeVisible();
    await expect(checkbxoVariableText).toBeVisible();
    await expect(checkbxoVariableText).toHaveText('Hi lets try to use variables');
    await expect(multipleChoiceCheckboxVariable).toBeVisible();
    await expect(multipleChoiceCheckboxVariableValue0).toBeVisible();
    await expect(multipleChoiceCheckboxVariableValue0).toHaveAttribute('type', 'checkbox');
    await expect(multipleChoiceCheckboxVariableValue0).toHaveAttribute('disabled', '');
    await expect(multipleChoiceCheckboxVariableValue0Text).toBeVisible();
    await expect(multipleChoiceCheckboxVariableValue0Text).toHaveText('checkbox 1');
    await expect(multipleChoiceCheckboxVariableValue1).toBeVisible();
    await expect(multipleChoiceCheckboxVariableValue1).toHaveAttribute('type', 'checkbox');
    await expect(multipleChoiceCheckboxVariableValue1).toHaveAttribute('disabled', '');
    await expect(multipleChoiceCheckboxVariableValue1Text).toBeVisible();
    await expect(multipleChoiceCheckboxVariableValue1Text).toHaveText('checkbox 2');
    await expect(multipleChoiceCheckboxVariableValue2).toBeVisible();
    await expect(multipleChoiceCheckboxVariableValue2).toHaveAttribute('type', 'checkbox');
    await expect(multipleChoiceCheckboxVariableValue2).toHaveAttribute('disabled', '');
    await expect(multipleChoiceCheckboxVariableValue2Text).toBeVisible();
    await expect(multipleChoiceCheckboxVariableValue2Text).toHaveText('checkbox 3');
    await expect(multipleChoiceRadioButtonVariable).toBeVisible();
    await expect(multipleChoiceRadioButtonVariableValue0).toBeVisible();
    await expect(multipleChoiceRadioButtonVariableValue0).toHaveAttribute('type', 'radio');
    await expect(multipleChoiceRadioButtonVariableValue0).toHaveAttribute('disabled', '');
    await expect(multipleChoiceRadioButtonVariableValue0Text).toBeVisible();
    await expect(multipleChoiceRadioButtonVariableValue0Text).toHaveText('None');
    await expect(multipleChoiceRadioButtonVariable).toBeVisible();
    await expect(multipleChoiceRadioButtonVariableValue1).toBeVisible();
    await expect(multipleChoiceRadioButtonVariableValue1).toHaveAttribute('type', 'radio');
    await expect(multipleChoiceRadioButtonVariableValue1).toHaveAttribute('disabled', '');
    await expect(multipleChoiceRadioButtonVariableValue1Text).toBeVisible();
    await expect(multipleChoiceRadioButtonVariableValue1Text).toHaveText('radio button 1');
    await expect(multipleChoiceRadioButtonVariableValue2).toBeVisible();
    await expect(multipleChoiceRadioButtonVariableValue2).toHaveAttribute('type', 'radio');
    await expect(multipleChoiceRadioButtonVariableValue2).toHaveAttribute('disabled', '');
    await expect(multipleChoiceRadioButtonVariableValue2Text).toBeVisible();
    await expect(multipleChoiceRadioButtonVariableValue2Text).toHaveText('radio button 2');
    await expect(multipleChoiceRadioButtonVariableValue3).toBeVisible();
    await expect(multipleChoiceRadioButtonVariableValue3).toHaveAttribute('type', 'radio');
    await expect(multipleChoiceRadioButtonVariableValue3).toHaveAttribute('disabled', '');
    await expect(multipleChoiceRadioButtonVariableValue3Text).toBeVisible();
    await expect(multipleChoiceRadioButtonVariableValue3Text).toHaveText('radio button 3');
});

test('displayingPreviewContractPageForPublishedContracts @regClickTractsHigh @previewContract @previewContractPublished', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const viewContract = new ViewContract(page);
    const editContract = new NewEditContractPage(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const copyLinkButton = page.locator('#contract-view-copy-link');
    console.log('previewContract Displaying Preview Contract Page For Published Contracts');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractName.click();
    await viewContract.backToDraftButtonClick();
    await editContract.publishToggleClick();
    await editContract.saveAndGenerateLinkButtonClick();
    await expect(page.url()).toContain('/contract/');
    await expect(copyLinkButton).toBeVisible();
});

test('notDisplayingTheBackToDraftButton @regClickTractsHigh @previewContract @previewContractPublished', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dealLink = page.locator('.section__header-deal');
    const backTodraftButton = page.locator('#contract-view-backtodraft');
    console.log('previewContract Not Displaying The Back To Draft Button');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/3199');
    await expect(dealLink).toBeVisible();
    await expect(backTodraftButton).toBeHidden();
});

test('displayingBackToDraftButtonForPublishedContracts @regClickTractsMedium @previewContract @previewContractPublished', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const copyLinkButton = page.locator('#contract-view-copy-link');
    const backTodraftButton = page.locator('#contract-view-backtodraft');
    console.log('previewContract Displaying The Back To Draft Button For Published Contracts');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/3202');
    await expect(copyLinkButton).toBeVisible();
    await expect(backTodraftButton).toBeVisible();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.AA2();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/3202');
    await expect(copyLinkButton).toBeVisible();
    await expect(backTodraftButton).toBeVisible();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/contract/3202');
    await expect(copyLinkButton).toBeVisible();
    await expect(backTodraftButton).toBeVisible();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.AANoPaytracts();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/3598');
    await expect(copyLinkButton).toBeVisible();
    await expect(backTodraftButton).toBeVisible();
});

test('notDisplayingTheBackToDraftButtonForPublishedContracts @regClickTractsMedium @previewContract @previewContractPublished', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const copyLinkButton = page.locator('#contract-view-copy-link');
    const backTodraftButton = page.locator('#contract-view-backtodraft');
    console.log('previewContract Not Displaying The Back To Draft Button For Published Contracts');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/2353');
    await expect(copyLinkButton).toBeVisible();
    await expect(backTodraftButton).toBeHidden();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.AANoPaytracts();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/1228');
    await expect(copyLinkButton).toBeVisible();
    await expect(backTodraftButton).toBeHidden();
});

test('validationTheBackToDraftButtonAA/AUAndProcced @regClickTractsHigh @previewContract @previewContractPublished', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const viewingTemplate = new ViewTemplatePage(page);
    const viewContract = new ViewContract(page);
    const editContract = new NewEditContractPage(page);
    const contracts = new ContractsPage(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const contractNameCR = page.locator('.contract-name-column-link >> nth=0');
    const pageTitle = page.locator('.section__title');
    const saveAndGenerateButton = page.locator('#contract-detail-save-and-generate');
    const draftToggle = page.locator('#contract-detail-status-draft-button');
    const changeStatusPopup = page.locator('.mat-dialog-container');
    console.log('previewContract Validation The Back To Draft Button AA/AU And Procced');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/3202');
    await viewContract.backToDraftButtonClick();
    await expect(page.url()).toContain('/contract/edit/');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText('Edit Contract');
    await expect(saveAndGenerateButton).toBeVisible();
    await expect(draftToggle).toBeVisible();
    await editContract.publishToggleClick();
    await editContract.saveAndGenerateLinkButtonClick();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.AANoPaytracts();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/3598');
    await viewContract.backToDraftButtonClick();
    await expect(page.url()).toContain('/contract/edit/');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText('Edit Contract');
    await expect(saveAndGenerateButton).toBeVisible();
    await expect(draftToggle).toBeVisible();
    await editContract.publishToggleClick();
    await editContract.saveAndGenerateLinkButtonClick();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/contract/3202');
    await viewContract.backToDraftButtonClick();
    await expect(page.url()).toContain('/contract/edit/');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText('Edit Contract');
    await expect(saveAndGenerateButton).toBeVisible();
    await expect(draftToggle).toBeVisible();
    await editContract.publishToggleClick();
    await editContract.saveAndGenerateLinkButtonClick();
    await page.goto('/contract-template/2239');
    await viewingTemplate.createContractButtonClick();
    await editContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await editContract.contractDescriptionTitleFieldFillRandom(Helpers.generateRandomString());
    await editContract.publishToggleClick();
    await editContract.saveAndSubmitButtonClick();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contracts.contractRequestsTabClick();
    await contractNameCR.click();
    await viewContract.approveButtonClick();
    await viewContract.backToDraftButtonClick();
    await expect(page.url()).toContain('/contract/edit/');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText('Edit Contract');
    await expect(saveAndGenerateButton).toBeVisible();
    await expect(draftToggle).toBeVisible();
    await editContract.saveButtonClick();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractName.click();
    await editContract.publishToggleClick();
    await editContract.saveAndSubmitButtonClick();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contracts.contractRequestsTabClick();
    await contractNameCR.click();
    await viewContract.approveButtonClick();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractName.click();
    await viewContract.backToDraftButtonClickProccedPopup();
    await expect(changeStatusPopup).toBeVisible();
    await viewContract.backToDraftPopupProceedButtonClick();
    await expect(page.url()).toContain('/contract/edit/');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText('Edit Contract');
    await editContract.saveButtonClick();
    await contracts.rightArrowClick();
    await contracts.threeDotsMenuDeleteButtonClick();
    await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
});

test('displayingConfirmChangeContractStatusPopup @regClickTractsLow @previewContract @previewContractPublished', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const viewingTemplate = new ViewTemplatePage(page);
    const viewContract = new ViewContract(page);
    const editContract = new NewEditContractPage(page);
    const contracts = new ContractsPage(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const contractNameCR = page.locator('.contract-name-column-link >> nth=0');
    const changeStatusPopup = page.locator('.mat-dialog-container');
    const changeStatusPopupText = page.locator('.mb-0');
    const changeStatusPopupProccedButton = page.locator('#modal-backtodraft-cancel');
    const changeStatusPopupCancelButton = page.locator('#modal-backtodraft-proceed');
    const backToDraftButton = page.locator('#contract-view-backtodraft');
    console.log('previewContract Displaying Confirm Change Contract Status Popup');
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/contract-template/2239');
    await viewingTemplate.createContractButtonClick();
    await editContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await editContract.contractDescriptionTitleFieldFillRandom(Helpers.generateRandomString());
    await editContract.publishToggleClick();
    await editContract.saveAndSubmitButtonClick();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contracts.contractRequestsTabClick();
    await contractNameCR.click();
    await viewContract.approveButtonClick();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractName.click();
    await viewContract.backToDraftButtonClickProccedPopup();
    await expect(changeStatusPopup).toBeVisible();
    await expect(changeStatusPopupText).toBeVisible();
    await expect(changeStatusPopupText).toHaveText('This contract will require Administrator\'s re-approval after its publication. Are you sure you want to switch it back to Draft?');
    await expect(changeStatusPopupProccedButton).toBeVisible();
    await expect(changeStatusPopupCancelButton).toBeVisible();
    await viewContract.backToDraftPopupCancelButtonClick();
    await expect(changeStatusPopup).toBeHidden();
    await expect(page.url()).toContain('/contract/');
    await expect(backToDraftButton).toBeVisible();
    await viewContract.backToDraftButtonClickProccedPopup();
    await viewContract.backToDraftPopupProceedButtonClick();
    await editContract.saveButtonClick();
    await contracts.rightArrowClick();
    await contracts.threeDotsMenuDeleteButtonClick();
    await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
});

test('changingContractStatusAnUnlimitedNumerOfTimes @regClickTractsMedium @previewContract @previewContractPublished', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const viewContract = new ViewContract(page);
    const editContract = new NewEditContractPage(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const pageTitle = page.locator('.section__title');
    const saveAndGenerateButton = page.locator('#contract-detail-save-and-generate');
    const backToDraftButton = page.locator('#contract-view-backtodraft');
    const copyLinkButton = page.locator('#contract-view-copy-link');
    console.log('previewContract Changing Contract Status An Unlimited Numer Of Times');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractName.click();
    await viewContract.backToDraftButtonClick();
    await expect(page.url()).toContain('/contract/edit/');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText('Edit Contract');
    await expect(saveAndGenerateButton).toBeVisible();
    await editContract.publishToggleClick();
    await editContract.saveAndGenerateLinkButtonClick();
    await expect(page.url()).toContain('/contract/');
    await expect(backToDraftButton).toBeVisible();
    await expect(copyLinkButton).toBeVisible();
    await viewContract.backToDraftButtonClick();
    await expect(page.url()).toContain('/contract/edit/');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText('Edit Contract');
    await expect(saveAndGenerateButton).toBeVisible();
    await editContract.publishToggleClick();
    await editContract.saveAndGenerateLinkButtonClick();
    await expect(page.url()).toContain('/contract/');
    await expect(backToDraftButton).toBeVisible();
    await expect(copyLinkButton).toBeVisible();
    await viewContract.backToDraftButtonClick();
    await expect(page.url()).toContain('/contract/edit/');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText('Edit Contract');
    await expect(saveAndGenerateButton).toBeVisible();
    await editContract.publishToggleClick();
    await editContract.saveAndGenerateLinkButtonClick();
    await expect(page.url()).toContain('/contract/');
    await expect(backToDraftButton).toBeVisible();
    await expect(copyLinkButton).toBeVisible();
});

test('displayingCopyLinkButton @regClickTractsHigh @previewContract @previewContractPublished', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const viewContract = new ViewContract(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const copyLinkButton = page.locator('#contract-view-copy-link');
    const copyLinkPopup = page.locator('.mat-dialog-container');
    const copyLinkPopupText = page.locator('.modal-header');
    const copyLinkPopupXButton = page.locator('#copy-link-cancel-cross');
    const permanentLinkRadioButton = page.locator('.mat-radio-button >> nth=0');
    const permanentLinkBlock = page.locator('#permanentContractLink');
    const permanentLinkLabel = page.locator('#permanentContractLink .mat-form-field-label');
    const permanentLinkInputValue = page.locator('#permanentContractLink .mat-input-element');
    const expiringLinkRadioButton = page.locator('.mat-radio-button >> nth=1');
    const expirationDateField = page.locator('#expiringLink');
    const getLink = page.locator('.expiring-date-btn');
    const tooltip = page.locator('.mat-tooltip');
    console.log('previewContract Displaying Copy Link Button');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractName.click();
    await expect(copyLinkButton).toBeVisible();
    await viewContract.copyLinkButtonClick();
    await expect(copyLinkPopup).toBeVisible();
    await expect(copyLinkPopupText).toBeVisible();
    await expect(copyLinkPopupText).toHaveText(' Copy Contract Link ');
    await expect(copyLinkPopupXButton).toBeVisible();
    await expect(permanentLinkRadioButton).toBeVisible();
    await expect(permanentLinkRadioButton).toHaveText('Permanent Link');
    await expect(permanentLinkBlock).toBeVisible();
    await expect(permanentLinkLabel).toBeVisible();
    await expect(permanentLinkLabel).toHaveText('Permanent Contract Link');
    await expect(permanentLinkInputValue).toBeVisible();
    const getPermanentLink = await permanentLinkInputValue.inputValue();
    await expect(getPermanentLink).toContain('https://signdoc.contractsrx.com/');
    await expect(expiringLinkRadioButton).toBeVisible();
    await expect(expiringLinkRadioButton).toHaveText('Expiring Link');
    await viewContract.copyLinkPopupExpiringCheckboxButtonClick();
    await expect(expirationDateField).toBeVisible();
    await expect(getLink).toBeVisible();
    await viewContract.copyLinkPopupXButtonClick();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/contract/3059');
    await viewContract.copyLinkButtonClick();
    await expect(copyLinkPopup).toBeVisible();
    await viewContract.copyLinkPopupXButtonClick();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/3202');
    await viewContract.copyLinkButtonClickSA();
    await expect(copyLinkPopup).toBeHidden();
    await expect(tooltip).toBeVisible();
    await expect(tooltip).toHaveText('Link is copied');
});

test('displayingTheNestedVariable @regClickTractsMedium @previewContract @previewContractPublished', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const checkboxWithNestedCheckbox = page.locator('#elementName_22');
    const checkboxWithNestedLabel = page.locator('[for="elementName_22"]');
    const checkboxWithNestedElement0 = page.locator('[name="elementName_18"] >> nth=0');
    const checkboxWithNestedElement1 = page.locator('[name="elementName_21"] >> nth=2');
    const checkboxWithNestedElement2 = page.locator('[name="elementName_7"] >> nth=1');
    const checkboxWithNestedElement3 = page.locator('[name="elementName_4"] >> nth=1');
    const checkboxWithNestedElementText = page.locator('[for="elementName_22"]');
    const checkboxWithNestedElement4 = page.locator('[name="elementName_2"] >> nth=1');
    const checkboxWithNestedElement5 = page.locator('[name="elementName_20"] >> nth=0');
    console.log('previewContract Displaying The Nested Variable');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractName.click();
    await expect(checkboxWithNestedCheckbox).toBeVisible();
    await expect(checkboxWithNestedLabel).toBeVisible();
    await expect(checkboxWithNestedElement0).toBeVisible();
    await expect(checkboxWithNestedElement1).toBeVisible();
    await expect(checkboxWithNestedElement2).toBeVisible();
    await expect(checkboxWithNestedElement3).toBeVisible();
    await expect(checkboxWithNestedElementText).toBeVisible();
    await expect(checkboxWithNestedElementText).toContainText('‌ Checkbox with nested variables it is very important feature, so let\'s try it! ');
    await expect(checkboxWithNestedElement4).toBeVisible();
    await expect(checkboxWithNestedElement5).toBeVisible();
});

test('behaviorForSingatureBlock @regClickTractsLow @previewContract @previewContractPublished', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const signaturesBlock = page.locator('.user-sign-form');
    const signaturesBlockFirstNameField = page.locator('[aria-label="First name"]');
    const signaturesBlockFirstNameFieldPlaceholder = page.locator('.mat-form-field-label >> nth=0');
    const signaturesBlockLastNameField = page.locator('[aria-label="Last name"]');
    const signaturesBlockLastNameFieldPlaceholder = page.locator('.mat-form-field-label >> nth=1');
    const signaturesBlockLegalEntityField = page.locator('[aria-label="Company Name (or signer\’s name if signing as an individual)"]');
    const signaturesBlockLegalEntityFieldPlaceholder = page.locator('.mat-form-field-label >> nth=2');
    const signaturesBlockAaddressField = page.locator('[aria-label="Address"]');
    const signaturesBlockAddressFieldPlaceholder = page.locator('.mat-form-field-label >> nth=3');
    const signaturesBlockEmaiField = page.locator('[aria-label="Email"]');
    const signaturesBlockEmailFieldPlaceholder = page.locator('.mat-form-field-label >> nth=4');
    const signaturesBlockConfirmEmailField = page.locator('[aria-label="Confirm email"]');
    const signaturesBlockConfirmEmailFieldPlaceholder = page.locator('.mat-form-field-label >> nth=5');
    const signaturesBlockSignatureField = page.locator('[aria-label="Signature"]');
    const signaturesBlockSignatureFieldPlaceholder = page.locator('.mat-form-field-label >> nth=6');
    console.log('previewContract Behavior For Singature Block');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractName.click();
    await expect(signaturesBlock).toBeVisible();
    await expect(signaturesBlockFirstNameField).toBeVisible();
    await expect(signaturesBlockFirstNameField).toHaveAttribute('disabled', '');
    await expect(signaturesBlockFirstNameFieldPlaceholder).toHaveText('First name');
    await expect(signaturesBlockLastNameField).toBeVisible();
    await expect(signaturesBlockLastNameField).toHaveAttribute('disabled', '');
    await expect(signaturesBlockLastNameFieldPlaceholder).toHaveText('Last name');
    await expect(signaturesBlockLegalEntityField).toBeVisible();
    await expect(signaturesBlockLegalEntityField).toHaveAttribute('disabled', '');
    await expect(signaturesBlockLegalEntityFieldPlaceholder).toHaveText('Legal entity name (or signer\’s name if signing as an individual)');
    await expect(signaturesBlockAaddressField).toBeVisible();
    await expect(signaturesBlockAaddressField).toHaveAttribute('disabled', '');
    await expect(signaturesBlockAddressFieldPlaceholder).toHaveText('Address');
    await expect(signaturesBlockEmaiField).toBeVisible();
    await expect(signaturesBlockEmaiField).toHaveAttribute('disabled', '');
    await expect(signaturesBlockEmailFieldPlaceholder).toHaveText('Email');
    await expect(signaturesBlockConfirmEmailField).toBeVisible();
    await expect(signaturesBlockConfirmEmailField).toHaveAttribute('disabled', '');
    await expect(signaturesBlockConfirmEmailFieldPlaceholder).toHaveText('Confirm email');
    await expect(signaturesBlockSignatureField).toBeVisible();
    await expect(signaturesBlockSignatureField).toHaveAttribute('disabled', '');
    await expect(signaturesBlockSignatureFieldPlaceholder).toHaveText('Signature (Enter your full name in capital letters)');
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/3825');
    await expect(signaturesBlock).toBeHidden();
});

test('displayingApprovedByAndDateFormatForPermissionsContracts @regClickTractsHigh @previewContract @previewContractPublished', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const viewingTemplate = new ViewTemplatePage(page);
    const viewContract = new ViewContract(page);
    const editContract = new NewEditContractPage(page);
    const contracts = new ContractsPage(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const contractNameCR = page.locator('.contract-name-column-link >> nth=0');
    const statusContraactBlock = page.locator('.section__header-securx');
    console.log('previewContract Displaying Approved And Date Format By For Permissions Contracts');
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/contract-template/2239');
    await viewingTemplate.createContractButtonClick();
    await editContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await editContract.contractDescriptionTitleFieldFillRandom(Helpers.generateRandomString());
    await editContract.publishToggleClick();
    await editContract.saveAndSubmitButtonClick();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contracts.contractRequestsTabClick();
    await contractNameCR.click();
    await viewContract.approveButtonClick();
    await expect(statusContraactBlock).toBeVisible();
    await expect(statusContraactBlock).toContainText(' Approved by AA Client HT' + ' ' + Helpers.currentDateAndTime());
    await viewContract.backToDraftButtonClick();
    await editContract.saveButtonClick();
    await contracts.rightArrowClick();
    await contracts.threeDotsMenuDeleteButtonClick();
    await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractName.click();
    await expect(statusContraactBlock).toBeHidden();
});

test('displayingWatermarkOfTheTMPLAndContract @regClickTractsLow @previewContract @previewContractPublished', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const watermarkBlock = page.locator('.watermark');
    const watermarkTmpl = page.locator('.watermark-wrap-item >> nth=0');
    const watermarkContract = page.locator('.watermark-wrap-item >> nth=1');
    console.log('previewContract Displaying Watermark Of The TMPL And Contract');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractName.click();
    await expect(watermarkBlock).toBeVisible();
    await expect(watermarkTmpl).toBeVisible();
    await expect(watermarkTmpl).toContainText('tmpl');
    await expect(watermarkContract).toBeVisible();
    await expect(watermarkContract).toContainText('contract');
});

test('displayingTheExportButton @regClickTractsMedium @previewContract @previewContractPublished', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const exportButton = page.locator('#contract-view-export');
    console.log('previewContract Displaying The Export Button');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractName.click();
    await expect(exportButton).toBeVisible();
    await expect(exportButton).toHaveCSS('color', 'rgb(255, 255, 255)');
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/contract/3202');
    await expect(exportButton).toBeVisible();
    await expect(exportButton).toHaveCSS('color', 'rgb(255, 255, 255)');
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/3202');
    await expect(exportButton).toBeVisible();
    await expect(exportButton).toHaveCSS('color', 'rgb(255, 255, 255)');
});

test('validationOfExportButton @regClickTractsHigh @previewContract @previewContractPublished', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const viewContract = new ViewContract(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    console.log('previewContract Validation Of Export Button');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractName.click();
    const [ download ] = await Promise.all([
    page.waitForEvent('download'),
    await viewContract.exportButtonClick()
    ]);
    expect(download.suggestedFilename()).toContain('autotest');
    await download.delete();
});

test('namingOfExportedFileIntoTheWord-formattedFile @regClickTractsLow @previewContract @previewContractPublished', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const viewContract = new ViewContract(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    console.log('previewContract Naming Of Exported File Into The Word-formatted File');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractName.click();
    const [ download ] = await Promise.all([
    page.waitForEvent('download'),
    await viewContract.exportButtonClick()
    ]);
    expect(download.suggestedFilename()).toContain('.docx');
    await download.delete();
});

test('displayingThePreviewContractScreen @regClickTractsHigh @previewContract @previewContractDraft', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const viewContract = new ViewContract(page);
    const editContract = new NewEditContractPage(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const pageTitle = page.locator('.section__title');
    const editButton = page.locator('#contract-view-edit');
    const exportButton = page.locator('#contract-view-export');
    console.log('previewContract Displaying The Preview Contract Screen');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractName.click();
    await viewContract.backToDraftButtonClick();
    await editContract.previewContractButtonClick();
    await expect(page.url()).toContain('/contract/');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toContainText('autotest');
    await expect(editButton).toBeVisible();
    await expect(exportButton).toBeVisible();
    await viewContract.editButtonClick();
    await editContract.publishToggleClick();
    await editContract.saveAndGenerateLinkButtonClick();
});

test('validationTheEditButton @regClickTractsHigh @previewContract @previewContractDraft', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const viewContract = new ViewContract(page);
    const editContract = new NewEditContractPage(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const pageTitle = page.locator('.section__title');
    const publishToggle = page.locator('#contract-detail-status-publish-button');
    const saveAndGenerateButton = page.locator('#contract-detail-save-and-generate');
    console.log('previewContract Validation The Edit Button');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractName.click();
    await viewContract.backToDraftButtonClick();
    await editContract.previewContractButtonClick();
    await viewContract.editButtonClick();
    await expect(page.url()).toContain('/contract/edit/');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText('Edit Contract');
    await expect(publishToggle).toBeVisible();
    await expect(saveAndGenerateButton).toBeVisible();
    await editContract.publishToggleClick();
    await editContract.saveAndGenerateLinkButtonClick();
});

test('displayingTheExportButtonDraft @regClickTractsMedium @previewContract @previewContractDraft', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const viewContract = new ViewContract(page);
    const editContract = new NewEditContractPage(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const exportButton = page.locator('#contract-view-export');
    console.log('previewContract Displaying The Export Button Draft');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractName.click();
    await viewContract.backToDraftButtonClick();
    await editContract.previewContractButtonClick();
    await expect(exportButton).toBeVisible();
    await viewContract.editButtonClick();
    await editContract.publishToggleClick();
    await editContract.saveAndGenerateLinkButtonClick();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/contract/edit/3254');
    await editContract.previewContractButtonClick();
    await expect(exportButton).toBeVisible();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract/3254');
    await expect(exportButton).toBeVisible();
});

test('validationOfExportButtonDraft @regClickTractsHigh @previewContract @previewContractDraft', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const viewContract = new ViewContract(page);
    const editContract = new NewEditContractPage(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    console.log('previewContract Validation Of Export Button Draft');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractName.click();
    await viewContract.backToDraftButtonClick();
    await editContract.previewContractButtonClick();
    const [ download ] = await Promise.all([
        page.waitForEvent('download'),
        await viewContract.exportButtonClick()
        ]);
        expect(download.suggestedFilename()).toContain('autotest');
        await download.delete();
    await viewContract.editButtonClick();
    await editContract.publishToggleClick();
    await editContract.saveAndGenerateLinkButtonClick();

});

test('displayingTheNestedVariableForDraftContract @regClickTractsMedium @previewContract @previewContractDraft', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const viewContract = new ViewContract(page);
    const editContract = new NewEditContractPage(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const inputText = page.locator('#configurator-variable-elementName_1');
    const inputTextValue = page.locator('#variables-list-form-control-value-elementName_1');
    const inputTextVariable = page.locator('[name="elementName_1"] >> nth=0');
    console.log('previewContract Displaying The Nested Variable For Draft Contract');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractName.click();
    await viewContract.backToDraftButtonClick();
    await editContract.editVariablesConfiguratorClick();
    await inputText.click();
    await inputTextValue.fill('');
    await editContract.editVariablesConfiguratorClick();
    await editContract.previewContractButtonClick();
    await expect(inputTextVariable).toBeVisible();
    await expect(inputTextVariable).toHaveText('{{ inputText }}');
    await viewContract.editButtonClick();
    await editContract.editVariablesConfiguratorClick();
    await inputText.click();
    await inputTextValue.fill('Hi World!');
    await editContract.editVariablesConfiguratorClick();
    await editContract.previewContractButtonClick();
    await expect(inputTextVariable).toBeVisible();
    await expect(inputTextVariable).toHaveText('Hi World!');
    await viewContract.editButtonClick();
    await editContract.publishToggleClick();
    await editContract.saveAndGenerateLinkButtonClick();
});

test('namingOfExportedFileOfDraftContract @regClickTractsLow @previewContract @previewContractDraft', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const viewContract = new ViewContract(page);
    const editContract = new NewEditContractPage(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    console.log('previewContract Naming Of Exported File Of Draft Contract');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractName.click();
    await viewContract.backToDraftButtonClick();
    await editContract.previewContractButtonClick();
    const [ download ] = await Promise.all([
        page.waitForEvent('download'),
        await viewContract.exportButtonClick()
        ]);
        expect(download.suggestedFilename()).toContain('.docx');
        await download.delete();
    await viewContract.editButtonClick();
    await editContract.publishToggleClick();
    await editContract.saveAndGenerateLinkButtonClick();
});

test('displayingWatermarkOfTheTMPLAndContractDraft @regClickTractsLow @previewContract @previewContractDraft', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const viewContract = new ViewContract(page);
    const editContract = new NewEditContractPage(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const watermarkBlock = page.locator('.watermark');
    const watermarkTmpl = page.locator('.watermark-wrap-item >> nth=0');
    const watermarkContract = page.locator('.watermark-wrap-item >> nth=1');
    console.log('previewContract Displaying Watermark Of The TMPL And Contract Draft');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractName.click();
    await viewContract.backToDraftButtonClick();
    await editContract.previewContractButtonClick();
    await expect(watermarkBlock).toBeVisible();
    await expect(watermarkTmpl).toBeVisible();
    await expect(watermarkTmpl).toContainText('tmpl');
    await expect(watermarkContract).toBeVisible();
    await expect(watermarkContract).toContainText('contract');
    await viewContract.editButtonClick();
    await editContract.publishToggleClick();
    await editContract.saveAndGenerateLinkButtonClick();
});

test('openingPreviewScreenAUDisplayingApprovalText/RejectedTextWatermark @regClickTractsHigh @previewContract @previewContractRequestAU', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const viewingTemplate = new ViewTemplatePage(page);
    const viewContract = new ViewContract(page);
    const editContract = new NewEditContractPage(page);
    const contracts = new ContractsPage(page);
    const contractNameCR = page.locator('.contract-name-column-link >> nth=0');
    const pageTitle = page.locator('.section__title');
    const editButton = page.locator('#contract-view-edit');
    const statusContractBlock = page.locator('.section__header-securx');
    const watermarkBlock = page.locator('.watermark');
    const watermarkTmpl = page.locator('.watermark-wrap-item >> nth=0');
    const watermarkContract = page.locator('.watermark-wrap-item >> nth=1');
    console.log('previewContract Opening Preview Contract Screen By AU');
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/contract-template/2239');
    await viewingTemplate.createContractButtonClick();
    await editContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await editContract.contractDescriptionTitleFieldFillRandom(Helpers.generateRandomString());
    await editContract.publishToggleClick();
    await editContract.saveAndSubmitButtonClick();
    await expect(page.url()).toContain('/contract/');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toContainText('autotest');
    await expect(editButton).toBeVisible();
    console.log('previewContract Displaying The Approval Pending Text And Correct Date And Time');
    await expect(statusContractBlock).toBeVisible();
    await expect(statusContractBlock).toContainText('Approval Pending:' + ' ' + Helpers.currentDateAndTime());
    console.log('previewContract Displaying Watermark');
    await expect(watermarkBlock).toBeVisible();
    await expect(watermarkTmpl).toBeVisible();
    await expect(watermarkTmpl).toContainText('tmpl');
    await expect(watermarkContract).toBeVisible();
    await expect(watermarkContract).toContainText('contract');
    console.log('previewContract Displaying Rejected Text And Correct Date And Time');
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contracts.contractRequestsTabClick();
    await contractNameCR.click();
    await viewContract.rejectButtonClick();
    await viewContract.rejectPopupRejectButtonClick();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/contracts/list?&sort=-created_at');
    await contracts.contractRequestsTabClick();
    await contractNameCR.click();
    await expect(statusContractBlock).toBeVisible();
    await expect(statusContractBlock).toContainText(' Rejected by AA Client HT' + ' ' + Helpers.currentDateAndTime());
    await page.goto('/contracts/list?&sort=-created_at');
    await contracts.contractRequestsTabClick();
    await contracts.threeDotsMenuDeleteButtonClick();
    await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
});

test('displaying/ValidationOfTheEditButton @regClickTractsHigh @previewContract @previewContractRequestAU', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const viewingTemplate = new ViewTemplatePage(page);
    const viewContract = new ViewContract(page);
    const editContract = new NewEditContractPage(page);
    const contracts = new ContractsPage(page);
    const contractNameCR = page.locator('.contract-name-column-link >> nth=0');
    const pageTitle = page.locator('.section__title');
    const editButton = page.locator('#contract-view-edit');
    const publishToggle = page.locator('#contract-detail-status-publish-button');
    const saveAndSubmitButton = page.locator('#contract-detail-save-and-submit');
    const saveAndGenerateButton = page.locator('#contract-detail-save-and-generate');
    console.log('previewContract Displaying/Validation Of The Edit Button');
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/contract-template/2239');
    await viewingTemplate.createContractButtonClick();
    await editContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await editContract.contractDescriptionTitleFieldFillRandom(Helpers.generateRandomString());
    await editContract.publishToggleClick();
    await editContract.saveAndSubmitButtonClick();
    await expect(editButton).toBeVisible();
    await viewContract.editButtonClick();
    await expect(page.url()).toContain('/contract/edit/');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText('Edit Contract');
    await expect(publishToggle).toBeVisible();
    await expect(saveAndSubmitButton).toBeVisible();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contracts.contractRequestsTabClick();
    await contractNameCR.click();
    await expect(editButton).toBeHidden();
    await viewContract.rejectButtonClick();
    await viewContract.rejectPopupRejectButtonClick();
    await contractNameCR.click();
    await expect(editButton).toBeVisible();
    await viewContract.editButtonClick();
    await expect(page.url()).toContain('/contract/edit/');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText('Edit Contract');
    await expect(publishToggle).toBeVisible();
    await expect(saveAndGenerateButton).toBeVisible();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/contracts/list?&sort=-created_at');
    await contracts.contractRequestsTabClick();
    await contractNameCR.click();
    await expect(editButton).toBeVisible();
    await viewContract.editButtonClick();
    await expect(page.url()).toContain('/contract/edit/');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText('Edit Contract');
    await expect(publishToggle).toBeVisible();
    await expect(saveAndSubmitButton).toBeVisible();
    await page.goto('/contracts/list?&sort=-created_at');
    await contracts.contractRequestsTabClick();
    await contracts.threeDotsMenuDeleteButtonClick();
    await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
});

test('openingPreviewByAADisplayingApprovalPendingTextAndCorrectDateAndTimeWatermark @regClickTractsHigh @previewContract @previewContractRequestAA', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const viewingTemplate = new ViewTemplatePage(page);
    const viewContract = new ViewContract(page);
    const editContract = new NewEditContractPage(page);
    const contracts = new ContractsPage(page);
    const contractNameCR = page.locator('.contract-name-column-link >> nth=0');
    const pageTitle = page.locator('.section__title');
    const approveButton = page.locator('#contract-view-approve');
    const rejectButton = page.locator('#contract-view-reject');
    const statusContractBlock = page.locator('.section__header-securx');
    const watermarkBlock = page.locator('.watermark');
    const watermarkTmpl = page.locator('.watermark-wrap-item >> nth=0');
    const watermarkContract = page.locator('.watermark-wrap-item >> nth=1');
    console.log('previewContract Opening Preview Screen By AA');
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/contract-template/2239');
    await viewingTemplate.createContractButtonClick();
    await editContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await editContract.contractDescriptionTitleFieldFillRandom(Helpers.generateRandomString());
    await editContract.publishToggleClick();
    await editContract.saveAndSubmitButtonClick();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contracts.contractRequestsTabClick();
    await contractNameCR.click();
    await expect(page.url()).toContain('/contract/');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toContainText('autotest');
    await expect(approveButton).toBeVisible();
    await expect(rejectButton).toBeVisible();
    console.log('previewContract Displaying Approval Pending Text And Correct Date And Time');
    await expect(statusContractBlock).toBeVisible();
    await expect(statusContractBlock).toContainText('Approval Pending:' + ' ' + Helpers.currentDateAndTime());
    console.log('previewContract Displaying Watermark');
    await expect(watermarkBlock).toBeVisible();
    await expect(watermarkTmpl).toBeVisible();
    await expect(watermarkTmpl).toContainText('tmpl');
    await expect(watermarkContract).toBeVisible();
    await expect(watermarkContract).toContainText('contract');
    await viewContract.rejectButtonClick();
    await viewContract.rejectPopupRejectButtonClick();
    await contracts.contractRequestsTabClick();
    await contracts.threeDotsMenuDeleteButtonClick();
    await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
});

test('allAAOfParticularClientCanApproveRejectContract @regClickTractsMedium @previewContract @previewContractRequestAA', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const viewingTemplate = new ViewTemplatePage(page);
    const viewContract = new ViewContract(page);
    const editContract = new NewEditContractPage(page);
    const contracts = new ContractsPage(page);
    const contractNameCR = page.locator('.contract-name-column-link >> nth=0');
    const approveButton = page.locator('#contract-view-approve');
    const rejectButton = page.locator('#contract-view-reject');
    console.log('previewContract All AA Of Particular Client Can Approve Reject Contract');
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/contract-template/2239');
    await viewingTemplate.createContractButtonClick();
    await editContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await editContract.contractDescriptionTitleFieldFillRandom(Helpers.generateRandomString());
    await editContract.publishToggleClick();
    await editContract.saveAndSubmitButtonClick();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contracts.contractRequestsTabClick();
    await contractNameCR.click();
    await expect(approveButton).toBeVisible();
    await expect(rejectButton).toBeVisible();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.AA2();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contracts.contractRequestsTabClick();
    await contractNameCR.click();
    await expect(approveButton).toBeVisible();
    await expect(rejectButton).toBeVisible();
    await viewContract.rejectButtonClick();
    await viewContract.rejectPopupRejectButtonClick();
    await contracts.contractRequestsTabClick();
    await contracts.threeDotsMenuDeleteButtonClick();
    await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
});

test('validationOfTheApprove/RejectButton @regClickTractsMedium @previewContract @previewContractRequestAA', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const viewingTemplate = new ViewTemplatePage(page);
    const viewContract = new ViewContract(page);
    const editContract = new NewEditContractPage(page);
    const contracts = new ContractsPage(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const contractNameCR = page.locator('.contract-name-column-link >> nth=0');
    const pageTitle = page.locator('.section__title');
    const exportButton = page.locator('#contract-view-export');
    const backToDraftButton = page.locator('#contract-view-backtodraft');
    const copyLinkButton = page.locator('#contract-view-copy-link');
    const approveButton = page.locator('#contract-view-approve');
    const rejectButton = page.locator('#contract-view-reject');
    const statusContractBlock = page.locator('.section__header-securx');
    const rejectPopup = page.locator('.mat-dialog-container');
    const rejectPopupText = page.locator('.modal-header');
    const rejectPopupCancelButton = page.locator('#modal-reject-cancel');
    const rejectPopupRejectButton = page.locator('#modal-reject-reject');
    const statusIcon = page.locator('.status-column-rejected >> nth=0');
    console.log('previewContract Validation Of The Approve Button');
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/contract-template/2239');
    await viewingTemplate.createContractButtonClick();
    await editContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await editContract.contractDescriptionTitleFieldFillRandom(Helpers.generateRandomString());
    await editContract.publishToggleClick();
    await editContract.saveAndSubmitButtonClick();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contracts.contractRequestsTabClick();
    await contractNameCR.click();
    await viewContract.approveButtonClick();
    await expect(page.url()).toContain('/contract/');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toContainText('autotest');
    await expect(backToDraftButton).toBeVisible();
    await expect(copyLinkButton).toBeVisible();
    await expect(exportButton).toBeVisible();
    await expect(approveButton).toBeHidden();
    await expect(rejectButton).toBeHidden();
    await expect(statusContractBlock).not.toContainText('Approval Pending:');
    await expect(statusContractBlock).toContainText(' Approved by AA Client HT' + ' ' + Helpers.currentDateAndTime());
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    console.log('previewContract Validation Of The Reject Button');
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/contracts/list?&sort=-created_at');
    await contractName.click();
    await expect(backToDraftButton).toBeVisible();
    await expect(copyLinkButton).toBeVisible();
    await expect(exportButton).toBeVisible();
    await viewContract.backToDraftButtonClickProccedPopup();
    await viewContract.backToDraftPopupProceedButtonClick();
    await editContract.publishToggleClick();
    await editContract.saveAndSubmitButtonClick();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contracts.contractRequestsTabClick();
    await contractNameCR.click();
    await viewContract.rejectButtonClick();
    await expect(rejectPopup).toBeVisible();
    await expect(rejectPopupText).toBeVisible();
    await expect(rejectPopupText).toHaveText(' Reject ');
    await expect(rejectPopupCancelButton).toBeVisible();
    await expect(rejectPopupRejectButton).toBeVisible();
    console.log('previewContract Validation Of The Reject Button On The Reject Popup');
    await viewContract.rejectPopupRejectButtonClick();
    await expect(page).toHaveURL('/contracts/requests?&sort=-created_at');
    await expect(contractNameCR).toContainText('autotest');
    await expect(statusIcon).toBeVisible();
    await contracts.threeDotsMenuDeleteButtonClick();
    await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
});

test('notesTab/CloseCancelRejectPopup @regClickTractsLow @previewContract @previewContractRequestAA', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const viewingTemplate = new ViewTemplatePage(page);
    const viewContract = new ViewContract(page);
    const editContract = new NewEditContractPage(page);
    const contracts = new ContractsPage(page);
    const contractNameCR = page.locator('.contract-name-column-link >> nth=0');
    const rejectPopup = page.locator('.mat-dialog-container');
    const notesField = page.locator('#modal-reject-notes');
    const notesFieldOptions = page.locator('[name="notesRejectingContract"]');
    console.log('previewContract Notes Tab');
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/contract-template/2239');
    await viewingTemplate.createContractButtonClick();
    await editContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await editContract.contractDescriptionTitleFieldFillRandom(Helpers.generateRandomString());
    await editContract.publishToggleClick();
    await editContract.saveAndSubmitButtonClick();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contracts.contractRequestsTabClick();
    await contractNameCR.click();
    await viewContract.rejectButtonClick();
    await expect(notesField).toBeVisible();
    await expect(notesFieldOptions).toHaveAttribute('maxlength', '255');
    await expect(notesFieldOptions).toHaveAttribute('rows', '1');
    await expect(notesFieldOptions).toHaveAttribute('type', 'text');
    await expect(notesFieldOptions).toHaveAttribute('aria-required', 'false');
    console.log('previewContract Close And Cancel Buttons');
    await viewContract.rejectPopupXButtonClick();
    await expect(rejectPopup).toBeHidden();
    await viewContract.rejectButtonClick();
    await viewContract.rejectPopupCancelButtonClick();
    await expect(rejectPopup).toBeHidden();
    await viewContract.rejectButtonClick();
    await viewContract.rejectPopupRejectButtonClick();
    await contracts.threeDotsMenuDeleteButtonClick();
    await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
});

test('validationOfTheEditButton @regClickTractsMedium @previewContract @previewContractRequestAA', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const viewingTemplate = new ViewTemplatePage(page);
    const viewContract = new ViewContract(page);
    const editContract = new NewEditContractPage(page);
    const contracts = new ContractsPage(page);
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    const contractNameCR = page.locator('.contract-name-column-link >> nth=0');
    const pageTitle = page.locator('.section__title');
    const editButton = page.locator('#contract-view-edit');
    const publishToggle = page.locator('#contract-detail-status-publish-button');
    const saveAndGenereateButton = page.locator('#contract-detail-save-and-generate');
    console.log('previewContract Validation Of The Edit Button');
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/contract-template/2239');
    await viewingTemplate.createContractButtonClick();
    await editContract.contractTitleFieldFillRandom(Helpers.generateRandomString());
    await editContract.contractDescriptionTitleFieldFillRandom(Helpers.generateRandomString());
    await editContract.publishToggleClick();
    await editContract.saveAndSubmitButtonClick();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contracts/list?&sort=-created_at');
    await contracts.contractRequestsTabClick();
    await contractNameCR.click();
    await viewContract.rejectButtonClick();
    await viewContract.rejectPopupRejectButtonClick();
    await contractNameCR.click();
    await expect(editButton).toBeVisible();
    await viewContract.editButtonClick();
    await expect(page.url()).toContain('/contract/edit/');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText('Edit Contract');
    await expect(publishToggle).toBeVisible();
    await expect(saveAndGenereateButton).toBeVisible();
    await editContract.draftToggleClick();
    await editContract.saveButtonClick();
    await expect(contractName).toContainText('autotest');
    await contracts.contractRequestsTabClick();
    await expect(contractNameCR).not.toContainText('autotest');
    await contracts.contractsTabClick();
    await contracts.rightArrowClick();
    await contracts.threeDotsMenuDeleteButtonClick();
    await contracts.threeDotsMenuDeletePopupDeleteButtonClick();
});

});





test.afterAll(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    const contractName = page.locator('.contracts-name-column-link >> nth=0');
    await page.goto('');
    await page.locator('[formcontrolname="email"]').fill('accountadmin4@maildrop.cc'); //login
    await page.locator('[formcontrolname="password"]').fill('Qwerty123@'); //login
    await page.locator('#login-sign-in').click(); //login
    await page.waitForURL('/dashboard'); //login
    await page.goto('/contracts/list?&sort=-created_at');
    await contractName.click(); //deleteContract
    await page.locator('#contract-view-backtodraft').click(); //deleteContract
    await page.locator('#contract-detail-save').click(); //deleteContract
    await page.locator('.right-arrow').click(); //deleteContract
    await page.locator('.mat-icon-button >> nth=0').click(); //deleteContract
    await page.waitForSelector('.action-remove'); //deleteContract
    await page.locator('.action-remove').click(); //deleteContract
    await page.waitForSelector('#confirm-modal-delete'); //deleteContract
    await page.locator('#confirm-modal-delete').click(); //deleteContract
    await page.waitForTimeout(1000); //deleteContract
    await page.goto('/contract-templates/list?&sort=-updated_at');
    await page.locator('.mat-icon-button >> nth=0').click(); //deleteTemplate
    await page.waitForSelector('.action-edit'); //deleteTemplate
    await page.locator('.action-edit').click(); //deleteTemplate
    await page.waitForSelector('[name="elementName_1"]'); //deleteTemplate
    await page.locator('#template-detail-status-draft-button').click(); //deleteTemplate
    await page.locator('#template-detail-save').click(); //deleteTemplate
    await page.goto('/contract-templates/list?&sort=-updated_at'); //deleteTemplate
    await page.locator('.mat-icon-button >> nth=0').click(); //deleteTemplate
    await page.waitForTimeout(1000);
    await page.locator('.action-remove').click(); //deleteTemplate
    await page.waitForTimeout(1000);
    await page.locator('#confirm-modal-delete').click(); //deleteTemplate
    await page.waitForTimeout(1000); //deleteTemplate
    await page.close();
    await context.close();
    await browser.close();
});