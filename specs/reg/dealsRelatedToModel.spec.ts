import { test , expect, webkit, chromium, Browser, BrowserContext, Page } from '@playwright/test'
import { UserBar, Users } from '../../framework'
import { Search } from '../../framework'
import { SignInPage } from '../../framework'
import { ForgotPasswordPage } from '../../framework'
import { SideBar } from '../../framework'
import { Pagination } from '../../framework'
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
import { ModelPage } from '../../framework'
import { Helpers } from '../../lib/helpers/randomCharactersAndDigits.preload'


test.beforeEach(async ({ page }) => {
    await page.goto('');
});

test('validationOfThePencilButton @regChecklistNewMedium @dealsRelatedToModel', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dealsRelatedToModel = new DealsRelatedToModelPage(page);
    const pageTitle = page.locator('.section__title');
    const saveChangesButton = page.locator('#model-details-save-changes');
    console.log('dealsRelatedToModel Validation Of The Pencil Button');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/602/deals?&sort=contract_name');
    await dealsRelatedToModel.editButtonClick();
    await expect(page).toHaveURL('/models/edit-model/602');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText(' Edit Model ');
    await expect(saveChangesButton).toBeVisible();
});

test('displayingTheClientName @regChecklistNewLow @dealsRelatedToModel', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const clientName = page.locator('.client-name');
    console.log('dealsRelatedToModel Displaying The Client Name');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/602/deals?&sort=contract_name');
    await expect(clientName).toBeHidden();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/models/602/deals?&sort=contract_name');
    await expect(clientName).toBeHidden();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/602/deals?&sort=contract_name');
    await expect(clientName).toBeVisible();
    await expect(clientName).toHaveText(' Client: Client 1HT(test) ');
});

test('addDealButtonNoContractBasedOnTemplate @regChecklistNewHigh @dealsRelatedToModel', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dealsRelatedToModel = new DealsRelatedToModelPage(page);
    const pageTitle = page.locator('.section__title');
    const modelField = page.locator('#form-control-model_id mat-select');
    console.log('dealsRelatedToModel Add Deal Button No Contract Based On Template');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/610/deals?&sort=contract_name');
    await dealsRelatedToModel.addDealButtonClick();
    await expect(page).toHaveURL('/deals/add-deal?model_id=610&account_id=265');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText('New Deal');
    await expect(modelField).toHaveText('NEW Model Client 1');
    await page.goto('/models/1543/deals?&sort=contract_name');
    await dealsRelatedToModel.addDealButtonClick();
    await expect(page).toHaveURL('/deals/add-deal?model_id=1543&account_id=265');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText('New Deal');
    await expect(modelField).toHaveText('Model');
});

test('addDealButtonContractBasedOnTemplate @regChecklistNewHigh @dealsRelatedToModel', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dealsRelatedToModel = new DealsRelatedToModelPage(page);
    const addDealPopup = page.locator('.mat-dialog-container');
    const addDealPopupText = page.locator('.modal-header');
    const addDealPopupChooseAContractButton = page.locator('#confirm-create-deal-choose-a-contract');
    const addDealPopupNewDealButton = page.locator('#confirm-create-deal-new-deal');
    const addDealPopupCancelButton = page.locator('#confirm-create-deal-cancel');
    console.log('dealsRelatedToModel Add Deal Button Contract Based On Template');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/1686/deals?&sort=contract_name');
    await dealsRelatedToModel.addDealButtonClick();
    await expect(addDealPopup).toBeVisible();
    await expect(addDealPopupText).toBeVisible();
    await expect(addDealPopupText).toHaveText(' Would you like to create deal for an existing contract? ');
    await expect(addDealPopupChooseAContractButton).toBeVisible();
    await expect(addDealPopupNewDealButton).toBeVisible();
    await expect(addDealPopupCancelButton).toBeVisible();
});

test('chooseAContractButtonExistingContractPopup @regChecklistNewMedium @dealsRelatedToModel', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const deals = new DealsPage(page);
    const dealsRelatedToModel = new DealsRelatedToModelPage(page);
    const pageTitle = page.locator('.section__title');
    const pageSubtitle = page.locator('.card-subtitle');
    const clientFieldDisabledSA = page.locator('#form-control-account_id .mat-select');
    const clientFieldValueSA = page.locator('#form-control-account_id .mat-select-value-text');
    const modelFieldDisabled = page.locator('#form-control-model_id .mat-select');
    const modelFieldValue = page.locator('#form-control-model_id .mat-select-value-text');
    const contractNameField = page.locator('#form-control-contract_name .mat-input-element');
    const subsidaryField = page.locator('#form-control-company_name .mat-input-element');
    const nameOfTheOtherPartyField = page.locator('#form-control-name_of_the_other_party .mat-input-element');
    const estimatedValueField = page.locator('#form-control-estimated_value .mat-input-element');
    const overviewField = page.locator('#form-control-description .mat-input-element');
    const notesField = page.locator('#form-control-notes .mat-input-element');
    const crmId = page.locator('#form-control-sf_contract_id .mat-input-element');
    console.log('dealsRelatedToModel Choose A Contract Button Existing Contract Popup');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/1686/deals?&sort=contract_name');
    await dealsRelatedToModel.addDealButtonClick();
    await dealsRelatedToModel.addDealPopupChooseAContractButtonClick();
    await expect(pageTitle).toHaveText(' Choose a Contract ');
    await expect(pageSubtitle).toHaveText(' Select an existing contract from the available contracts below ');
    await page.locator('.mat-radio-group >> nth=0').click();
    await deals.chooseContractPageNextButtonClick();
    await expect(modelFieldDisabled).toHaveAttribute('aria-disabled', 'true');
    await expect(modelFieldValue).toHaveText('test100testModelDoNotRemove');
    await expect(contractNameField).toHaveAttribute('disabled', '');
    await expect(contractNameField).toHaveValue('test100testContractDoNotRemove');
    await expect(subsidaryField).not.toHaveAttribute('aria-disabled', 'true');
    await expect(subsidaryField).toHaveValue('BanCompany4');
    await expect(nameOfTheOtherPartyField).not.toHaveAttribute('aria-disabled', 'true');
    await expect(nameOfTheOtherPartyField).toHaveValue('');
    await expect(estimatedValueField).not.toHaveAttribute('aria-disabled', 'true');
    await expect(estimatedValueField).toHaveValue('');
    await expect(overviewField).not.toHaveAttribute('aria-disabled', 'true');
    await expect(overviewField).toHaveValue('');
    await expect(notesField).not.toHaveAttribute('aria-disabled', 'true');
    await expect(notesField).toHaveValue('');
    await expect(crmId).not.toHaveAttribute('aria-disabled', 'true');
    await expect(crmId).toHaveValue('');
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/1686/deals?&sort=contract_name');
    await dealsRelatedToModel.addDealButtonClick();
    await dealsRelatedToModel.addDealPopupChooseAContractButtonClick();
    await expect(pageTitle).toHaveText(' Choose a Contract ');
    await expect(pageSubtitle).toHaveText(' Select an existing contract from the available contracts below ');
    await page.locator('.mat-radio-group >> nth=0').click();
    await deals.chooseContractPageNextButtonClick();
    await expect(clientFieldDisabledSA).toHaveAttribute('aria-disabled', 'true');
    await expect(clientFieldValueSA).toHaveText('BanCompany4');
    await expect(modelFieldDisabled).toHaveAttribute('aria-disabled', 'true');
    await expect(modelFieldValue).toHaveText('test100testModelDoNotRemove');
    await expect(contractNameField).toHaveAttribute('disabled', '');
    await expect(contractNameField).toHaveValue('test100testContractDoNotRemove');
    await expect(nameOfTheOtherPartyField).not.toHaveAttribute('aria-disabled', 'true');
    await expect(nameOfTheOtherPartyField).toHaveValue('');
    await expect(estimatedValueField).not.toHaveAttribute('aria-disabled', 'true');
    await expect(estimatedValueField).toHaveValue('');
    await expect(overviewField).not.toHaveAttribute('aria-disabled', 'true');
    await expect(overviewField).toHaveValue('');
    await expect(notesField).not.toHaveAttribute('aria-disabled', 'true');
    await expect(notesField).toHaveValue('');
    await expect(crmId).not.toHaveAttribute('aria-disabled', 'true');
    await expect(crmId).toHaveValue('');
});

test('newDealButtonExistingContractPopup @regChecklistNewMedium @dealsRelatedToModel', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dealsRelatedToModel = new DealsRelatedToModelPage(page);
    const pageTitle = page.locator('.section__title');
    const createButton = page.locator('#deal-details-save');
    console.log('dealsRelatedToModel New Deal Button Existing Contract Popup');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/1686/deals?&sort=contract_name');
    await dealsRelatedToModel.addDealButtonClick();
    await dealsRelatedToModel.addDealPopupNewDealButtonClick();
    await expect(page).toHaveURL('/deals/add-deal?model_id=1686&account_id=372');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText('New Deal');
    await expect(createButton).toBeVisible();
});

test('cancelButtonExistingContractPopup @regChecklistNewLow @dealsRelatedToModel', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dealsRelatedToModel = new DealsRelatedToModelPage(page);
    const pageTitle = page.locator('.section__title');
    const addDealButton = page.locator('#deals-list-add-deal');
    console.log('dealsRelatedToModel Cancel Button Existing Contract Popup');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/1686/deals?&sort=contract_name');
    await dealsRelatedToModel.addDealButtonClick();
    await dealsRelatedToModel.addDealPopupCancelButtonClick();
    await expect(page).toHaveURL('/models/1686/deals?&sort=contract_name');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText(' test100testModelDoNotRemove ');
    await expect(addDealButton).toBeVisible();
});

test('notDisplayingSomePublishContractsOnChooseContractPage @regChecklistNewHigh @dealsRelatedToModel', async ({ page }) => {
    const signIn = new SignInPage(page);
    const dealsRelatedToModel = new DealsRelatedToModelPage(page);
    const existingContract = page.locator('.mat-radio-label-content >> text= autotestContract1 ');
    console.log('dealsRelatedToModel Not Displaying Some Publish Contracts On Choose Contract Page');
    await signIn.email.fill('alexey.banshykov@mobindustry.net');
    await signIn.password.fill('Qwerty123!');
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/805/deals?&sort=contract_name');
    await dealsRelatedToModel.addDealButtonClick();
    await dealsRelatedToModel.addDealPopupCancelButtonClick();
    await expect(existingContract).toBeHidden();
});
 
    //to be refactored, bug in part with SA, uncomment code when bug will be fixed
test('behaviorForTheAddDealButtonSubscriptionLimits @regChecklistNewMedium @dealsRelatedToModel', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const newDeal = new NewEditDealPage(page);
    const dealsRelatedToModel = new DealsRelatedToModelPage(page);
    const pageTitle = page.locator('.section__title');
    const addDealButton = page.locator('#deals-list-add-deal');
    const createButton = page.locator('#deal-details-save');
    const subscriptionLimitsPopup = page.locator('.mat-dialog-container');
    const subscriptionLimitsPopupText = page.locator('.modal-header');
    const subscriptionLimitsPopupUpdateButton = page.locator('#not-available-popup-update-subscription');
    const subscriptionLimitsPopupCloseButton = page.locator('#not-available-popup-close');
    console.log('dealsRelatedToModel Behavior For The Add Deal Button Subscription Limits');
    await users.AASubscriptionLimits();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/1709/deals?&sort=contract_name');
    await dealsRelatedToModel.addDealButtonClick();
    await expect(subscriptionLimitsPopup).toBeVisible();
    await expect(subscriptionLimitsPopupText).toBeVisible();
    await expect(subscriptionLimitsPopupText).toHaveText('Please update your subscription to add more deals.');
    await expect(subscriptionLimitsPopupUpdateButton).toBeVisible();
    await expect(subscriptionLimitsPopupUpdateButton).toHaveCSS('background-color', 'rgb(69, 119, 210)');
    await expect(subscriptionLimitsPopupCloseButton).toBeVisible();
    await dealsRelatedToModel.addDealSubscriptionLimitsCancelButtonClick();
    await expect(subscriptionLimitsPopup).toBeHidden();
    await expect(page).toHaveURL('/models/1709/deals?&sort=contract_name');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText(' test100testModel ');
    await expect(addDealButton).toBeVisible();
    await dealsRelatedToModel.addDealButtonClick();
    await dealsRelatedToModel.addDealSubscriptionLimitsUpdateButtonClick();
    await expect(page).toHaveURL('/clients/edit-client/383?update_plan=true');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText('Edit Client');
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.AUSubscriptionLimits();
    await signIn.signInButton();
    await page.waitForURL('/clients/383');
    await page.goto('/models/1709/deals?&sort=contract_name');
    await dealsRelatedToModel.addDealButtonClick();
    await expect(subscriptionLimitsPopup).toBeVisible();
    await expect(subscriptionLimitsPopupText).toBeVisible();
    await expect(subscriptionLimitsPopupText).toHaveText('Please contact your Account Admin to update your subscription and add more deals.');
    await expect(subscriptionLimitsPopupCloseButton).toBeVisible();
    await expect(subscriptionLimitsPopupUpdateButton).toBeHidden();
    await dealsRelatedToModel.addDealSubscriptionLimitsCancelButtonClick();
    await expect(subscriptionLimitsPopup).toBeHidden();
    await expect(page).toHaveURL('/models/1709/deals?&sort=contract_name');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText(' test100testModel ');
    await expect(addDealButton).toBeVisible();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    // await users.SA();
    // await signIn.signInButton();
    // await page.waitForURL('/dashboard');
    // await page.goto('/models/1709/deals?&sort=contract_name');
    // await dealsRelatedToModel.addDealButtonClick();
    // await newDeal.contractNameField.fill('test');
    // await newDeal.nameOfTheOtherPartyField.fill('test');
    // await newDeal.esimatedValueField.type('444');
    // await newDeal.createButtonClick();
    // await expect(subscriptionLimitsPopup).toBeVisible();
    // await expect(subscriptionLimitsPopupText).toBeVisible();
    // await expect(subscriptionLimitsPopupText).toHaveText('Please update your subscription to add more deals.');
    // await expect(subscriptionLimitsPopupUpdateButton).toBeVisible();
    // await expect(subscriptionLimitsPopupUpdateButton).toHaveCSS('background-color', 'rgb(69, 119, 210)');
    // await expect(subscriptionLimitsPopupCloseButton).toBeVisible();
    // await dealsRelatedToModel.addDealSubscriptionLimitsCancelButtonClick();
    // await expect(subscriptionLimitsPopup).toBeHidden();
    // await expect(page).toHaveURL('/deals/add-deal?model_id=1709&account_id=383');
    // await expect(pageTitle).toBeVisible();
    // await expect(pageTitle).toHaveText('New Deal');
    // await expect(createButton).toBeVisible();
    // await newDeal.createButtonClick();
    // await dealsRelatedToModel.addDealSubscriptionLimitsUpdateButtonClick();
    // await expect(page).toHaveURL('/clients/edit-client/383?update_plan=true');
    // await expect(pageTitle).toBeVisible();
    // await expect(pageTitle).toHaveText('Edit Client');
});

test('exportButton @regChecklistNewLow @dealsRelatedToModel', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dealsRelatedToModel = new DealsRelatedToModelPage(page);
    console.log('dealsRelatedToModel Export Button');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/602/deals?&sort=contract_name');
    await dealsRelatedToModel.checkboxSelectAllClick();
    const [ download ] = await Promise.all([
        page.waitForEvent('download'),
    await dealsRelatedToModel.exportButtonClick(),
    ]);
    await expect(await download.suggestedFilename()).toContain('deals-associated-with-a-Model-model.csv');
    await download.delete();
});

test('displayingAccordingInfoOfTheListOfDeals @regChecklistNewLow @dealsRelatedToModel', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dealLink0 = page.locator('.deals-column-link >> nth=0');
    const dealLink1 = page.locator('.deals-column-link >> nth=5');
    const dealLink2 = page.locator('.deals-column-link >> nth=5');
    console.log('dealsRelatedToModel Displaying According Info Of The List Of Deals');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/602/deals?&sort=contract_name');
    await expect(page).toHaveURL('/models/602/deals?&sort=contract_name');
    await expect(dealLink0).toHaveText('BB TEST - other party 12345');
    await page.click('.pagination-item >> text=3');
    await page.waitForTimeout(1000);
    await expect(dealLink1).toHaveText('Cont122 - 12Test OTHER');
    await page.click('.pagination-item >> text=4');
    await page.waitForTimeout(1000);
    await page.click('.pagination-item >> text=5');
    await page.waitForTimeout(1000);
    await page.click('.pagination-item >> text=6');
    await page.waitForTimeout(1000);
    await page.click('.pagination-item >> text=7');
    await page.waitForTimeout(1000);
    await page.click('.pagination-item >> text=8');
    await page.waitForTimeout(1000);
    await expect(dealLink2).toHaveText('RT - EWAE');
});

test('behaviorDealNameColumn @regChecklistNewMedium @dealsRelatedToModel', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dealLink = page.locator('.deals-column-link >> nth=0');
    console.log('dealsRelatedToModel Behavior Deal Name Column');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/602/deals?&sort=contract_name');
    await expect(dealLink).toHaveText('BB TEST - other party 12345');
    await expect(dealLink).toHaveAttribute('href', '/deals/analysis-deal/426');
    await dealLink.click();
    await page.waitForSelector('#btn-first-draft-finish');
    await expect(page).toHaveURL('/deals/analysis-deal/426');
});

test('displayingTheScoreFirstDraftColumn @regChecklistNewHigh @dealsRelatedToModel', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dealsRelatedToModel = new DealsRelatedToModelPage(page);
    const firstDraftColumn = page.locator('.mat-column-firstDraft >> nth=2');
    const dealColumnLink = page.locator('.deals-column-link >> nth=1');
    const firstDraftValue = page.locator('.deal-scores .mat-column-first_draft');
    console.log('dealsRelatedToModel Displaying The Score First Draft Column');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/602/deals?&sort=contract_name');
    await dealsRelatedToModel.firstDraftFilterClick();
    await dealsRelatedToModel.firstDraftFilterClick();
    await expect(firstDraftColumn).toHaveText(' -233 ');
    await dealColumnLink.click();
    await expect(firstDraftValue).toHaveText('-233');
});



test('displayingTheScoreFinalDraftColumn @regChecklistNewHigh @dealsRelatedToModel', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dealsRelatedToModel = new DealsRelatedToModelPage(page);
    const finalDraftColumn = page.locator('.mat-column-finalDraft >> nth=3');
    const dealColumnLink = page.locator('.deals-column-link >> nth=2');
    const firstDraftValue = page.locator('.deal-scores .mat-column-final_draft');
    console.log('dealsRelatedToModel Displaying The Score Final Draft Column');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/602/deals?&sort=contract_name');
    await dealsRelatedToModel.finalDraftFilterClick();
    await expect(finalDraftColumn).toHaveText('700');
    await dealColumnLink.click();
    await expect(firstDraftValue).toHaveText('700');
});



test('displayingStatusColumn @regChecklistNewLow @dealsRelatedToModel', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dealsRelatedToModel = new DealsRelatedToModelPage(page);
    const statusColumn = page.locator('.mat-column-status >> nth=1');
    const statusColumnProgress0 = page.locator('.status-progress__percent >> nth=0');
    const statusColumnProgressColor0 = page.locator('.status-progress__color-bar >> nth=0');
    const statusColumnProgress1 = page.locator('.status-progress__percent >> nth=2');
    const statusColumnProgressColor1 = page.locator('.status-progress__color-bar >> nth=2');
    console.log('dealsRelatedToModel Displaying Status Column');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/602/deals?&sort=contract_name');
    await expect(statusColumn).toBeVisible();
    await expect(statusColumnProgress0).toHaveText(' 40% ');
    await expect(statusColumnProgressColor0).toHaveCSS('background-color', 'rgb(126, 211, 33)');
    await dealsRelatedToModel.statusFilterClick();
    await expect(statusColumn).toBeVisible();
    await expect(statusColumnProgress0).toHaveText(' 100% ');
    await expect(statusColumnProgressColor0).toHaveCSS('background-color', 'rgb(126, 211, 33)');
    await expect(statusColumnProgress1).toHaveText(' 95% ');
    await expect(statusColumnProgressColor1).toHaveCSS('background-color', 'rgb(255, 242, 84)');
    await dealsRelatedToModel.statusFilterClick();
    await expect(statusColumnProgress0).toHaveText(' 20% ');
    await expect(statusColumnProgressColor0).toHaveCSS('background-color', 'rgb(126, 211, 33)');
});

test('openingThreeDotsMenu @regChecklistNewMedium @dealsRelatedToModel', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dealsRelatedToModel = new DealsRelatedToModelPage(page);
    const threeDotsMenu = page.locator('.action-list');
    const editButton = page.locator('.action-edit');
    const viewSummaryButton = page.locator('.action-summary');
    const saveAsNewButton = page.locator('.action-save');
    console.log('dealsRelatedToModel Opening Three Dots Menu');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/602/deals?&sort=contract_name');
    await dealsRelatedToModel.statusFilterClick();
    await dealsRelatedToModel.threeDotsMenuButtonClick();
    await expect(threeDotsMenu).toBeVisible();
    await expect(editButton).toBeVisible();
    await expect(viewSummaryButton).toBeVisible();
    await expect(saveAsNewButton).toBeVisible();
});

test('editDealButtonThreeDotsMenu @regChecklistNewMedium @dealsRelatedToModel', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dealsRelatedToModel = new DealsRelatedToModelPage(page);
    const pageTitle = page.locator('.section__title');
    const saveChangesButton = page.locator('#deal-details-save');
    console.log('dealsRelatedToModel Edit Deal Button Three Dots Menu');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/602/deals?&sort=contract_name');
    await dealsRelatedToModel.statusFilterClick();
    await dealsRelatedToModel.threeDotsMenuButtonClick();
    await dealsRelatedToModel.threeDotsMenuEditButtonClick();
    await expect(page).toHaveURL('/deals/edit-deal/433');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText('Edit Deal');
    await expect(saveChangesButton).toBeVisible();
});



test('summaryButtonThreeDotsMenu @regChecklistNewMedium @dealsRelatedToModel', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dealsRelatedToModel = new DealsRelatedToModelPage(page);
    const pageTitle = page.locator('.section__title');
    const viewSummaryButton = page.locator('.action-summary');
    console.log('dealsRelatedToModel Summary Button Three Dots Menu');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/602/deals?&sort=contract_name');
    await dealsRelatedToModel.threeDotsMenuButtonClick();
    await expect(viewSummaryButton).toBeHidden();
    await page.click('.cdk-overlay-backdrop');
    await dealsRelatedToModel.statusFilterClick();
    await dealsRelatedToModel.threeDotsMenuButtonClick();
    await dealsRelatedToModel.threeDotsMenuViewSummaryButtonClick();
    await expect(page).toHaveURL('/deals/summary-report/433');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText(' Cont122 -  Client 1HT(test) -  12Test OTHER > Summary ');
});

test('saveAsNewButtonThreeDotsMenu @regChecklistNewHigh @dealsRelatedToModel', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dealsRelatedToModel = new DealsRelatedToModelPage(page);
    const pageTitle = page.locator('.section__title');
    const saveAsNewButton = page.locator('.action-save');
    const createButton = page.locator('#deal-details-save');
    const modelFieldDisabled = page.locator('#form-control-model_id .mat-select');
    const modelFieldValue = page.locator('#form-control-model_id .mat-select-value-text');
    const contractNameField = page.locator('#form-control-contract_name .mat-input-element');
    const subsidaryField = page.locator('#form-control-company_name .mat-input-element');
    const nameOfTheOtherPartyField = page.locator('#form-control-name_of_the_other_party .mat-input-element');
    const estimatedValueField = page.locator('#form-control-estimated_value .mat-input-element');
    const estimatedCurrencyField = page.locator('#form-control-estimated_value_currency .mat-select-value');
    const overviewField = page.locator('#form-control-description .mat-input-element');
    const notesField = page.locator('#form-control-notes .mat-input-element');
    const crmId = page.locator('#form-control-sf_contract_id .mat-input-element');
    console.log('dealsRelatedToModel Save As New Button Three Dots Menu');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/602/deals?&sort=contract_name');
    await dealsRelatedToModel.threeDotsMenuButtonClick();
    await expect(saveAsNewButton).toBeHidden();
    await page.click('.cdk-overlay-backdrop');
    await dealsRelatedToModel.statusFilterClick();
    await dealsRelatedToModel.threeDotsMenuButtonClick();
    await dealsRelatedToModel.threeDotsMenuSaveAsNewButtonClick();
    await expect(page).toHaveURL('/deals/clone-deal/433');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText('New Deal');
    await expect(createButton).toBeVisible();
    await expect(modelFieldDisabled).toHaveAttribute('aria-disabled', 'true');
    await expect(modelFieldValue).toHaveText('Model');
    await expect(contractNameField).toHaveAttribute('disabled', '');
    await expect(contractNameField).toHaveValue('Cont122');
    await expect(subsidaryField).not.toHaveAttribute('aria-disabled', 'true');
    await expect(subsidaryField).toHaveValue('Client 1HT(test)');
    await expect(nameOfTheOtherPartyField).not.toHaveAttribute('aria-disabled', 'true');
    await expect(nameOfTheOtherPartyField).toHaveValue('12Test OTHER');
    await expect(estimatedValueField).not.toHaveAttribute('aria-disabled', 'true');
    await expect(estimatedValueField).toHaveValue('234,567');
    await expect(estimatedCurrencyField).toHaveText('EUR');
    await expect(overviewField).not.toHaveAttribute('aria-disabled', 'true');
    await expect(overviewField).toHaveValue('test');
    await expect(notesField).not.toHaveAttribute('aria-disabled', 'true');
    await expect(notesField).toHaveValue('');
    await expect(crmId).not.toHaveAttribute('aria-disabled', 'true');
    await expect(crmId).toHaveValue('');
});

test('saveAsNewThreeDotsMenuSubscriptionLimits @regChecklistNewMedium @dealsRelatedToModel', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const newDeal = new NewEditDealPage(page);
    const dealsRelatedToModel = new DealsRelatedToModelPage(page);
    const pageTitle = page.locator('.section__title');
    const addDealButton = page.locator('#deals-list-add-deal');
    const createButton = page.locator('#deal-details-save');
    const subscriptionLimitsPopup = page.locator('.mat-dialog-container');
    const subscriptionLimitsPopupText = page.locator('.modal-header');
    const subscriptionLimitsPopupUpdateButton = page.locator('#not-available-popup-update-subscription');
    const subscriptionLimitsPopupCloseButton = page.locator('#not-available-popup-close');
    console.log('dealsRelatedToModel Save As New Three Dots Menu Subscription Limits');
    await users.AASubscriptionLimits();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/1709/deals?&sort=contract_name');
    await dealsRelatedToModel.threeDotsMenuButtonClick();
    await dealsRelatedToModel.threeDotsMenuSaveAsNewButtonClick();
    await expect(subscriptionLimitsPopup).toBeVisible();
    await expect(subscriptionLimitsPopupText).toBeVisible();
    await expect(subscriptionLimitsPopupText).toHaveText('Please update your subscription to add more deals.');
    await expect(subscriptionLimitsPopupUpdateButton).toBeVisible();
    await expect(subscriptionLimitsPopupUpdateButton).toHaveCSS('background-color', 'rgb(69, 119, 210)');
    await expect(subscriptionLimitsPopupCloseButton).toBeVisible();
    await dealsRelatedToModel.addDealSubscriptionLimitsCancelButtonClick();
    await expect(subscriptionLimitsPopup).toBeHidden();
    await expect(page).toHaveURL('/models/1709/deals?&sort=contract_name');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText(' test100testModel ');
    await expect(addDealButton).toBeVisible();
    await dealsRelatedToModel.threeDotsMenuButtonClick();
    await dealsRelatedToModel.threeDotsMenuSaveAsNewButtonClick();
    await dealsRelatedToModel.addDealSubscriptionLimitsUpdateButtonClick();
    await expect(page).toHaveURL('/clients/edit-client/383?update_plan=true');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText('Edit Client');
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.AUSubscriptionLimits();
    await signIn.signInButton();
    await page.waitForURL('/clients/383');
    await page.goto('/models/1709/deals?&sort=contract_name');
    await dealsRelatedToModel.threeDotsMenuButtonClick();
    await dealsRelatedToModel.threeDotsMenuSaveAsNewButtonClick();
    await expect(subscriptionLimitsPopup).toBeVisible();
    await expect(subscriptionLimitsPopupText).toBeVisible();
    await expect(subscriptionLimitsPopupText).toHaveText('Please contact your Account Admin to update your subscription and add more deals.');
    await expect(subscriptionLimitsPopupCloseButton).toBeVisible();
    await expect(subscriptionLimitsPopupUpdateButton).toBeHidden();
    await dealsRelatedToModel.addDealSubscriptionLimitsCancelButtonClick();
    await expect(subscriptionLimitsPopup).toBeHidden();
    await expect(page).toHaveURL('/models/1709/deals?&sort=contract_name');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText(' test100testModel ');
    await expect(addDealButton).toBeVisible();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/1709/deals?&sort=contract_name');
    await dealsRelatedToModel.threeDotsMenuButtonClick();
    await dealsRelatedToModel.threeDotsMenuSaveAsNewButtonClick();
    await newDeal.createButtonClick();
    await expect(subscriptionLimitsPopup).toBeVisible();
    await expect(subscriptionLimitsPopupText).toBeVisible();
    await expect(subscriptionLimitsPopupText).toHaveText('Please update your subscription to add more deals.');
    await expect(subscriptionLimitsPopupUpdateButton).toBeVisible();
    await expect(subscriptionLimitsPopupUpdateButton).toHaveCSS('background-color', 'rgb(69, 119, 210)');
    await expect(subscriptionLimitsPopupCloseButton).toBeVisible();
    await dealsRelatedToModel.addDealSubscriptionLimitsCancelButtonClick();
    await expect(subscriptionLimitsPopup).toBeHidden();
    await expect(page).toHaveURL('/deals/clone-deal/8585');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText('New Deal');
    await expect(createButton).toBeVisible();
    await newDeal.createButtonClick();
    await dealsRelatedToModel.addDealSubscriptionLimitsUpdateButtonClick();
    await expect(page).toHaveURL('/clients/edit-client/383?update_plan=true');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText('Edit Client');
});

test('paginationOnTheDealsRelatedToModelPage @regChecklistNewLow @modelsPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const sideBarMenu = new SideBar(page);
    const pagination = new Pagination(page);
    console.log('modelsPage Pagination On The Deals Related To Model Page');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/602/deals?&sort=contract_name');
    await pagination.paginationPage3Click();
    await pagination.paginationPrevPageClick();
    const prevPageReturnValue = await page.url();
    await expect(page).toHaveURL(prevPageReturnValue);
    await pagination.paginationNextPageClick();
    const nextPageReturnValue = await page.url();
    await expect(page).toHaveURL(nextPageReturnValue);
    await pagination.paginationFirstPageClick();
    await expect(page).toHaveURL('/models/602/deals?&sort=contract_name');
    await pagination.paginationPage2Click();
    await expect(page).toHaveURL('/models/602/deals?page=2&sort=contract_name');
    await pagination.paginationPage1Click();
    await expect(page).toHaveURL('/models/602/deals?&sort=contract_name');
    await pagination.paginationPage3Click();
    await expect(page).toHaveURL('/models/602/deals?page=3&sort=contract_name');
});