import { test , expect } from '@playwright/test'
import { UserBar, Users } from '../../framework'
import { Search } from '../../framework'
import { SignInPage } from '../../framework'
import { SideBar } from '../../framework'
import { DashboardPage } from '../../framework'
import { TemplatesPage } from '../../framework'
import { ContractsPage } from '../../framework'
import { NewEditCopyTemplatePage } from '../../framework'
import { ViewTemplatePage } from '../../framework'
import { NewEditContractPage } from '../../framework'
import { DealAnalysisPage } from '../../framework'
import { Helpers } from '../../lib/helpers/randomCharactersAndDigits.preload'



// [webkit] › specs/reg/dashboard.spec.ts:378:1 › displayingType/Contract/OtherPartyLonger15SymbolsActionReport @regChecklistNewLow @dashboard 
// [chrome] › specs/reg/dashboard.spec.ts:378:1 › displayingType/Contract/OtherPartyLonger15SymbolsActionReport @regChecklistNewLow @dashboard 
// [webkit] › specs/reg/dashboard.spec.ts:735:1 › displayingInfoInTheEventColumnActionReportPage @regChecklistNewMedium @dashboard 
// [chrome] › specs/reg/dashboard.spec.ts:735:1 › displayingInfoInTheEventColumnActionReportPage @regChecklistNewMedium @dashboard 
// [webkit] › specs/reg/dashboard.spec.ts:795:1 › displayingInfoInTheDateColumnActionReportPage @regChecklistNewHigh @dashboard 
// [chrome] › specs/reg/dashboard.spec.ts:795:1 › displayingInfoInTheDateColumnActionReportPage @regChecklistNewHigh @dashboard 



// [webkit] › specs/reg/dashboard.spec.ts:856:1 › displayingInfo/ValidationInTheContractColumnActionReportPage @regChecklistNewMedium @dashboard 
// [webkit] › specs/reg/dashboard.spec.ts:884:1 › displayingInfoInTheOtherPartyColumnActionReportPage @regChecklistNewLow @dashboard 
// [webkit] › specs/reg/dashboard.spec.ts:1264:1 › validationChangeSelectionFieldDealHealthScorePage @regChecklistNewHigh @dashboard 
// [webkit] › specs/reg/dashboard.spec.ts:1363:1 › year/MonthColumnDealHealthScorePageTableView @regChecklistNewLow @dashboard 
// [webkit] › specs/reg/dashboard.spec.ts:1391:1 › numberOfDealsColumnDealHealthScorePageTableView @regChecklistNewHigh @dashboard 
// [webkit] › specs/reg/dashboard.spec.ts:1455:1 › 0ValueNumberOfDealsColumnDealHealthScorePageTableView @regChecklistNewLow @dashboard 
// [webkit] › specs/reg/dashboard.spec.ts:1485:1 › growthToPreviousMonthDealsColumnDealHealthScorePageTableView @regChecklistNewHigh @dashboard 
// [webkit] › specs/reg/dashboard.spec.ts:1513:1 › displaying"-"GrowthColumnDealHealthScorePageTableView @regChecklistNewMedium @dashboard 
// [webkit] › specs/reg/dashboard.spec.ts:1542:1 › paginationAndRediractionBetweenPagesDealHealthScorePageTableView @regChecklistNewMedium @dashboard 
// [webkit] › specs/reg/dashboard.spec.ts:1610:1 › dateColumnPreviewReportRecentlySignedContractsPage @regChecklistNewLow @dashboard 
// [webkit] › specs/reg/dashboard.spec.ts:1623:1 › signedByColumnPreviewReportRecentlySignedContractsPage @regChecklistNewLow @dashboard 
// [webkit] › specs/reg/dashboard.spec.ts:1672:1 › displayingContractCreatedByAUThatWasDeletedSignedRecentlySignedContractsPage @regChecklistNewMedium @dashboard 



// [chrome] › specs/reg/dashboard.spec.ts:856:1 › displayingInfo/ValidationInTheContractColumnActionReportPage @regChecklistNewMedium @dashboard 
// [chrome] › specs/reg/dashboard.spec.ts:884:1 › displayingInfoInTheOtherPartyColumnActionReportPage @regChecklistNewLow @dashboard 
// [chrome] › specs/reg/dashboard.spec.ts:1610:1 › dateColumnPreviewReportRecentlySignedContractsPage @regChecklistNewLow @dashboard 
// [chrome] › specs/reg/dashboard.spec.ts:1623:1 › signedByColumnPreviewReportRecentlySignedContractsPage @regChecklistNewLow @dashboard 

test.beforeEach(async ({ page }) => {
    await page.goto('');
});

test('displayingDashboardSA/AA @regChecklistNewHigh @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const dealHealthScoreOverviewBlock = page.locator('.dashboard-item >> nth=0');
    const recentlySignedContractsBlock = page.locator('.dashboard-item >> nth=1');
    const expiringLinksReportBlock = page.locator('.dashboard-item >> nth=2');
    const actionReportBlock = page.locator('.dashboard-item >> nth=3');
    console.log('dashboard Displaying Dashboard SA/AA');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await expect(page).toHaveURL('/dashboard');
    await expect(dealHealthScoreOverviewBlock).toBeVisible();
    await expect(recentlySignedContractsBlock).toBeVisible();
    await expect(expiringLinksReportBlock).toBeVisible();
    await expect(actionReportBlock).toBeVisible();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await expect(page).toHaveURL('/dashboard');
    await expect(dealHealthScoreOverviewBlock).toBeVisible();
    await expect(recentlySignedContractsBlock).toBeVisible();
    await expect(expiringLinksReportBlock).toBeVisible();
    await expect(actionReportBlock).toBeVisible();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await expect(page).toHaveURL('/clients/265');
    await expect(dealHealthScoreOverviewBlock).toBeHidden();
    await expect(recentlySignedContractsBlock).toBeHidden();
    await expect(expiringLinksReportBlock).toBeHidden();
    await expect(actionReportBlock).toBeHidden();
});

test('displayingDashboardMenuIcon @regChecklistNewLow @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const dashboardMenuIcon = page.locator('#sidebar-dashboard');
    console.log('dashboard displayingDashboardMenuIcon');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await expect(dashboardMenuIcon).toBeVisible();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await expect(dashboardMenuIcon).toBeVisible();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await expect(dashboardMenuIcon).toBeHidden();
});

test('validationOfTheCreateButton @regChecklistNewHigh @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const dashboard = new DashboardPage(page);
    const createContractButton = page.locator('#dashboard-create-contract');
    console.log('dashboard Validation Of The Create Button');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await expect(createContractButton).toBeVisible();
    await dashboard.createContractButtonClick();
    await expect(page).toHaveURL('/contract-templates/list?&sort=-updated_at&filter[status]=1');
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await expect(createContractButton).toBeHidden();
});

test('validationOfTheCreateDealButton @regChecklistNewHigh @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const dashboard = new DashboardPage(page);
    const createDealForExistingPopup = page.locator('.mat-dialog-container');
    const createDealForExistingPopupText = page.locator('.modal-header');
    const createDealForExistingPopupChooseContractButton = page.locator('#confirm-create-deal-choose-a-contract');
    const createDealForExistingPopupNewDealButton = page.locator('#confirm-create-deal-new-deal');
    const createDealForExistingPopupCancelButton = page.locator('#confirm-create-deal-cancel');
    console.log('dashboard Validation Of The Create Deal Button');
    await users.AA4();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.createDealButtonClick();
    await expect(page).toHaveURL('/deals/add-deal');
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.waitForTimeout(1000);
    await dashboard.createDealButtonClick();
    await expect(createDealForExistingPopup).toBeVisible();
    await expect(createDealForExistingPopupText).toHaveText(' Would you like to create deal for an existing contract? ');
    await expect(createDealForExistingPopupChooseContractButton).toBeVisible();
    await expect(createDealForExistingPopupNewDealButton).toBeVisible();
    await expect(createDealForExistingPopupCancelButton).toBeVisible();
});

test('validationOfTheManageUsersButton @regChecklistNewHigh @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const dashboard = new DashboardPage(page);
    const userOfAA = page.locator('.link-name >> text=AA Client HT ');
    const userOfSA = page.locator('.link-name >> text=AA another W Client ');
    console.log('dashboard Validation Of The Manage Users Button');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.manageUsersButtonClick();
    await expect(page).toHaveURL('/users?&sort=first_name');
    await expect(userOfAA).toBeVisible();
    await expect(userOfSA).toBeHidden();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.manageUsersButtonClick();
    await expect(page).toHaveURL('/users?&sort=first_name');
    await expect(userOfAA).toBeVisible();
    await expect(userOfSA).toBeVisible();
});


test('validationOfTheChooseContract/NewDealButtonCreateDealPopup @regChecklistNewMedium @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const dashboard = new DashboardPage(page);
    const selectExistingContractText = page.locator('.card-subtitle');
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
    console.log('dashboard Validation Of The Choose Contract/New deal Button Create Deal Popup');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.waitForTimeout(2000);
    await dashboard.createDealButtonClick();
    await dashboard.createDealPopupChooseContractButtonClick();
    await expect(page).toHaveURL('/contracts/select');
    await expect(selectExistingContractText).toBeVisible();
    await expect(selectExistingContractText).toHaveText(' Select an existing contract from the available contracts below ');
    await page.locator('.mat-radio-label-content >> text= test100testContract4 ').click();
    await page.locator('.btn >> text=Next').click();
    await page.waitForTimeout(1000);
    await expect(modelFieldDisabled).toHaveAttribute('aria-disabled', 'true');
    await expect(modelFieldValue).toHaveText('MODEL cloned 22222');
    await expect(contractNameField).toHaveAttribute('disabled', '');
    await expect(contractNameField).toHaveValue('test100testContract4');
    await expect(subsidaryField).not.toHaveAttribute('aria-disabled', 'true');
    await expect(subsidaryField).toHaveValue('Client 1HT(test)');
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
    await page.goto('/dashboard');
    await page.waitForTimeout(2000);
    await dashboard.createDealButtonClick();
    await dashboard.createDealPopupNewDealButtonClick();
    await expect(page).toHaveURL('/deals/add-deal');
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.waitForTimeout(2000);
    await dashboard.createDealButtonClick();
    await dashboard.createDealPopupChooseContractButtonClick();
    await expect(page).toHaveURL('/contracts/select');
    await expect(selectExistingContractText).toBeVisible();
    await expect(selectExistingContractText).toHaveText(' Select an existing contract from the available contracts below ');
    await page.locator('.mat-radio-button >> nth=0').click();
    await page.locator('.btn >> text=Next').click();
    await page.waitForTimeout(1000);
    await expect(clientFieldDisabledSA).toHaveAttribute('aria-disabled', 'true');
    await expect(clientFieldValueSA).toHaveText('W Client 2 test test test test test test');
    await expect(modelFieldDisabled).toHaveAttribute('aria-disabled', 'true');
    await expect(modelFieldValue).toHaveText('2222 Regress model 09/01');
    await expect(contractNameField).toHaveAttribute('disabled', '');
    await expect(contractNameField).toHaveValue('01 test');
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

test('validationOfTheCancelButtonCreateDealPopup @regChecklistNewLow @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dashboard = new DashboardPage(page);
    const createDealPopup = page.locator('.mat-dialog-container');
    console.log('dashboard Validation Of The Cancel Button Create Deal Popup');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.waitForTimeout(2000);
    await dashboard.createDealButtonClick();
    await dashboard.createDealPopupCancelButtonClick();
    await expect(createDealPopup).toBeHidden();
});

test('notDisplayingPublishContracts @regChecklistNewHigh @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const dashboard = new DashboardPage(page);
    const contractWithDeal = page.locator('.mat-radio-label-content >> text=test100testContract3');
    console.log('dashboard Not Displaying Publish Contracts');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.waitForTimeout(2000);
    await dashboard.createDealButtonClick();
    await dashboard.createDealPopupChooseContractButtonClick();
    await expect(contractWithDeal).toBeHidden();
});

test('validationOfTheManageAccount/AccountsButton @regChecklistNewHigh @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const dashboard = new DashboardPage(page);
    console.log('dashboard Validation Of The Manage Account/Accounts Button');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.manageAccountButtonClick();
    await expect(page).toHaveURL('/clients/265');
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.manageAccountsSAButtonClick();
    await expect(page).toHaveURL('/clients?&sort=name');
});

test('displayingActionReportPreviewGridOnTheDashboard @regChecklistNewMedium @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const actionReport = page.locator('.dashboard-item >> nth=3');
    const actionReportShowMoreLink = page.locator('#dashboard-action-report-show-more');
    const row0Type = page.locator('.cell-xs >> nth=5');
    const row1Event = page.locator('.cell-xs >> nth=11');
    const row2Date = page.locator('.cell-xs >> nth=17');
    const row3Contract = page.locator('.cell-xs >> nth=23');
    const row4OtherParty = page.locator('.cell-xs >> nth=29');
    const noDealsToShowText = page.locator('.dashboard-item-content >> nth=3');
    console.log('dashboard Displaying Action Report Preview Grid On The Dashboard');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await expect(actionReport).toBeVisible();
    await expect(actionReportShowMoreLink).toBeVisible();
    await expect(row0Type).not.toHaveText('-');
    await expect(row1Event).not.toHaveText('-');
    await expect(row2Date).not.toHaveText('-');
    await expect(row3Contract).not.toHaveText('-');
    await expect(row4OtherParty).not.toHaveText('-');
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await expect(actionReport).toBeVisible();
    await expect(actionReportShowMoreLink).toBeVisible();
    await expect(row0Type).not.toHaveText('-');
    await expect(row1Event).toHaveText('-');
    await expect(row2Date).toHaveText('-');
    await expect(row3Contract).toHaveText('-');
    await expect(row4OtherParty).toHaveText('-');
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await expect(noDealsToShowText).toHaveText(' No deals to show ');
    await expect(actionReportShowMoreLink).toBeHidden();
});

test('displaying/ValidationShowMoreLinkActionReport @regChecklistNewHigh @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const dashboard = new DashboardPage(page);
    const actionReportShowMoreLink = page.locator('#dashboard-action-report-show-more');
    const titleActionReport = page.locator('.section__title');
    console.log('dashboard Displaying/Validation Show More Link Action Report');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await expect(actionReportShowMoreLink).toBeHidden();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.showMoreActionReportLinkClick();
    await expect(page).toHaveURL('/dashboard?&sort=expiration_date');
    await expect(titleActionReport).toBeVisible();
    await expect(titleActionReport).toHaveText('Action Report (30-60-90)');
});

test('displayingType/Contract/OtherPartyLonger15SymbolsActionReport @regChecklistNewLow @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dealAnalysis = new DealAnalysisPage(page);
    const tooltip = page.locator('.mat-tooltip');
    const typeColumn = page.locator('.mat-column-type >> nth=1');
    const contractColumn = page.locator('.deal-column-link');
    const otherPartyColumn = page.locator('.other-party-column >> nth=1');
    console.log('Displaying Displaying Type/Contract/Other Party Longer 15 Symbols Action Report');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals/analysis-deal/8577');
    await dealAnalysis.autorenewCheckboxClick();
    await dealAnalysis.expirationEditIconClick();
    await dealAnalysis.expirationField.fill(Helpers.currentDateDashboardPlus1Month());
    await dealAnalysis.expirationOkIconClick();
    await dealAnalysis.finalDraftFinishButtonClick();
    await page.goto('/dashboard');
    await expect(typeColumn).toHaveText(' Master Services... ');
    await page.locator('.mat-column-type >> nth=1').click();
    await page.waitForTimeout(500);
    await expect(tooltip).toBeVisible();
    await expect(tooltip).toHaveText('Master Services Agreement - Customer');
    await expect(contractColumn).toHaveText(' test1test2test3... ');
    await expect(otherPartyColumn).toHaveText(' test1test2test3t... ');
    await page.locator('.other-party-column >> nth=1').click();
    await page.waitForTimeout(500);
    await expect(tooltip).toBeVisible();
    await expect(tooltip).toHaveText('test1test2test3test4');
    await page.goto('/deals/analysis-deal/8577');
    await dealAnalysis.finalDraftReopenButtonClick();
    await dealAnalysis.firstDraftFinishButtonClick();
});

test('displayingTheDealHealthScoreOverviewReport @regChecklistNewMedium @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const dealHealthScoreOverviewTitle = page.locator('.dashboard-item-header >> nth=0');
    const dealHealthScoreOverviewDiagram = page.locator('.dashboard-item-content >> nth=0');
    const dealHealthScoreOverviewDiagramShowMoreLink = page.locator('#dashboard-deal-show-more');
    console.log('dashboard Displaying The Deal Health Score Overview Report');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await expect(dealHealthScoreOverviewTitle).toBeVisible();
    await expect(dealHealthScoreOverviewTitle).toHaveText('Deal Health Score OverviewShow more');
    await expect(dealHealthScoreOverviewDiagram).toBeVisible();
    await expect(dealHealthScoreOverviewDiagramShowMoreLink).toBeVisible();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.AA4();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await expect(dealHealthScoreOverviewTitle).toBeVisible();
    await expect(dealHealthScoreOverviewTitle).toHaveText('Deal Health Score Overview');
    await expect(dealHealthScoreOverviewDiagram).toBeVisible();
    await expect(dealHealthScoreOverviewDiagramShowMoreLink).toBeHidden();
    await expect(dealHealthScoreOverviewDiagram).toHaveText(' Please add some deals ');
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await expect(dealHealthScoreOverviewTitle).toBeVisible();
    await expect(dealHealthScoreOverviewTitle).toHaveText('Deal Health Score OverviewShow more');
    await expect(dealHealthScoreOverviewDiagram).toBeVisible();
    await expect(dealHealthScoreOverviewDiagramShowMoreLink).toBeVisible();
    await expect(dealHealthScoreOverviewDiagram).toHaveText(' Please add some deals ');
});

test('validationShowMoreLinkDealHealthScoreOverviewReport @regChecklistNewHigh @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dashboard = new DashboardPage(page);
    const healthScoreFilter = page.locator('#dashboard-deal-health-score-filter');
    const tableToggle = page.locator('#dashboard-deal-health-score-show-table');
    const diagramToggle = page.locator('#dashboard-deal-health-score-show-diagram');
    const diagram = page.locator('.chartjs-render-monitor');
    const lastUpdateText = page.locator('.last-update-text');
    console.log('dashboard Validation Show More Link Deal Health Score Overview Report');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.showMoreDealLinkClick();
    await expect(page).toHaveURL('/dashboard?&sort=signed_at');
    await expect(healthScoreFilter).toBeVisible();
    await expect(tableToggle).toBeVisible();
    await expect(diagramToggle).toBeVisible();
    await expect(diagram).toBeVisible();
    await expect(lastUpdateText).toBeVisible();
});

test('displayingTheRecentlySignedContractsReport @regChecklistNewMedium @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const recentlySignedContractsBlock = page.locator('.dashboard-item >> nth=1');
    const recentlySignedContractsTitle = page.locator('.dashboard-item-header >> nth=1');
    const recentlySignedContractsGrid = page.locator('#dashboard-recently-signed-contracts-table');
    const recentlySignedContractsShowMoreLink = page.locator('#dashboard-recently-signed-contracts-show-more');
    console.log('dashboard Displaying The Recently Signed Contracts Report');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.waitForTimeout(2000);
    await expect(recentlySignedContractsBlock).toBeVisible();
    await expect(recentlySignedContractsTitle).toBeVisible();
    await expect(recentlySignedContractsTitle).toHaveText('Recently Signed ContractsShow more');
    await expect(recentlySignedContractsGrid).toBeVisible();
    await expect(recentlySignedContractsShowMoreLink).toBeVisible();
});

test('validationShowMoreLinkRecentlySignedContractsReport @regChecklistNewHigh @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dashboard = new DashboardPage(page);
    const outboundContracts = page.locator('.mat-button-toggle-label-content >> text=Outbound contracts');
    const inboundContracts = page.locator('.mat-button-toggle-label-content >> text=Inbound contracts');
    console.log('dashboard Validation Show More Link Recently Signed Contracts Report');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.showMoreSignedContractsLinkClick();
    await expect(page).toHaveURL('/signed-users/list?&sort=-created_at');
    await expect(outboundContracts).toBeVisible();
    await expect(inboundContracts).toBeVisible();
});

test('displayingInfoInThePreviewReportRecentlySignedContracts @regChecklistNewMedium @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const row0Date = page.locator('.cell-md >> nth=1');
    const row1SignedBy = page.locator('.cell-sm >> nth=2');
    const row2Contract = page.locator('.cell-lg >> nth=3');
    const row3Date = page.locator('.cell-md >> nth=4');
    const row4SingedBy = page.locator('.cell-sm >> nth=5');
    const row5NotVisible = page.locator('.cell-md >> nth=6');
    const noDealsToShowText = page.locator('.dashboard-item-content >> nth=1');
    console.log('dashboard Displaying Info In The Preview Report Recently Signed Contracts');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await expect(row0Date).not.toHaveText('-');
    await expect(row1SignedBy).not.toHaveText('-');
    await expect(row2Contract).not.toHaveText('-');
    await expect(row3Date).not.toHaveText('-');
    await expect(row4SingedBy).not.toHaveText('-');
    await expect(row5NotVisible).toBeHidden();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await expect(row0Date).not.toHaveText('-');
    await expect(row1SignedBy).not.toHaveText('-');
    await expect(row2Contract).not.toHaveText('-');
    await expect(row3Date).not.toHaveText('-');
    await expect(row4SingedBy).not.toHaveText('-');
    await expect(row5NotVisible).toBeHidden();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.AASubscriptionLimits();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await expect(noDealsToShowText).toBeVisible();
    await expect(noDealsToShowText).toHaveText(' There are no signatures yet. Please create contracts and share them with clients for signing ');
});

test('displayingTheExpiringLinksPreviewReport @regChecklistNewMedium @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const expiringLinksReportBlock = page.locator('.dashboard-item >> nth=2');
    const expiringLinksReportTitle = page.locator('.dashboard-item-header >> nth=2');
    const expiringLinksReportGrid = page.locator('#dashboard-expiring-links-table');
    const expiringLinksReportShowMoreLink = page.locator('#dashboard-expiring-links-show-more');
    const noExpiringLinksText = page.locator('.dashboard-item-content >> nth=2');
    console.log('dashboard Displaying The Expiring Links Preview Report');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.waitForTimeout(2000);
    await expect(expiringLinksReportBlock).toBeVisible();
    await expect(expiringLinksReportTitle).toBeVisible();
    await expect(expiringLinksReportTitle).toHaveText('Links ReportShow more');
    await expect(expiringLinksReportGrid).toBeVisible();
    await expect(expiringLinksReportShowMoreLink).toBeVisible();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.AASubscriptionLimits();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.waitForTimeout(2000);
    await expect(noExpiringLinksText).toBeVisible();
    await expect(noExpiringLinksText).toHaveText(' No Expiring Links ');
});

test('validationShowMoreLinkExpiringLinksPreviewReport @regChecklistNewHigh @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const dashboard = new DashboardPage(page);
    const showMoreLink = page.locator('#dashboard-expiring-links-show-more');
    console.log('dashboard Validation Show More Link Recently Signed Contracts Report');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.waitForTimeout(2000);
    await expect(showMoreLink).toBeVisible();
    await dashboard.showMoreExpiringLinksLinkClick();
    await expect(page).toHaveURL('/expiring-links/list?&sort=expired_at');
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.waitForTimeout(2000);
    await expect(showMoreLink).toBeHidden();
});

test('displayingInfoInThePrivewExpiringLinksReport @regChecklistNewMedium @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const row0Contract = page.locator('.cell-lg >> nth=7');
    const row1Link = page.locator('.cell-sm >> nth=10');
    const row2ExpirationDate = page.locator('.cell-sm >> nth=13');
    const row3Contract = page.locator('.cell-lg >> nth=10');
    const row4Link = page.locator('.cell-sm >> nth=16');
    const row5NotVisible = page.locator('.cell-lg >> nth=12');
    const noDealsToShowText = page.locator('.dashboard-item-content >> nth=2');
    console.log('dashboard Displaying Info In The Preview Expiring Links Report');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.waitForTimeout(2000);
    await expect(row0Contract).not.toHaveText('-');
    await expect(row1Link).not.toHaveText('-');
    await expect(row2ExpirationDate).toHaveText('-');
    await expect(row3Contract).toHaveText('-');
    await expect(row4Link).toHaveText('-');
    await expect(row5NotVisible).toBeHidden();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.AASubscriptionLimits();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.waitForTimeout(2000);
    await expect(noDealsToShowText).toBeVisible();
    await expect(noDealsToShowText).toHaveText(' No Expiring Links ');
});

test('validationContractNameOnThePrivewExpiringLinksReport @regChecklistNewHigh @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const copyLinkButton = page.locator('.btn >> text= Copy link ');
    const exportButton = page.locator('.btn >> text= Export ');
    console.log('dashboard Validation Contract Name On The Preview Expiring Links Report');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.waitForTimeout(2000);
    await page.locator('.cell-lg >> nth=7').click();
    await page.waitForSelector('.btn >> text= Copy link ');
    await expect(page.url()).toContain('/contract/')
    await expect(copyLinkButton).toBeVisible();
    await expect(exportButton).toBeVisible();
});

test('displayingLastUpdateTextOnTheDashboard @regChecklistNewLow @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dealAnalysis = new DealAnalysisPage(page);
    const lastUpdateText = page.locator('.last-update-text');
    console.log('dashboard Displaying Last Update Text On The Dashboard');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals/analysis-deal/8580');
    await dealAnalysis.finalDraftFinishButtonClick();
    await page.goto('/dashboard');
    await page.waitForTimeout(2000);
    await expect(lastUpdateText).toContainText(Helpers.currentDateLastUpdate());
    await page.goto('/deals/analysis-deal/8580');
    await dealAnalysis.finalDraftReopenButtonClick();
    await dealAnalysis.firstDraftFinishButtonClick();
});

test('dispayingTheHeaderOnTheActionReportPage @regChecklistNewLow @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dashboard = new DashboardPage(page);
    const actionReportTitle = page.locator('.section__title');
    console.log('dashboard Dispaying The Header On The Action Report Page');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.showMoreActionReportLinkClick();
    await expect(actionReportTitle).toBeVisible();
    await expect(actionReportTitle).toHaveText('Action Report (30-60-90)');
});

test('validationOfTheBackButtonActionReportPage @regChecklistNewLow @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dashboard = new DashboardPage(page);
    console.log('dashboard Validation Of The Back Button Action Report Page');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.showMoreActionReportLinkClick();
    await dashboard.actionReportPageBackButtonClick();
    await expect(page).toHaveURL('/dashboard?&sort=expiration_date');
});

test('validationOfTheExportButtonActionReportPage @regChecklistNewMedium @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dashboard = new DashboardPage(page);
    console.log('dashboard Validation Of The Export Button Action Report Page');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.showMoreActionReportLinkClick();
    const [ download ] = await Promise.all([
        page.waitForEvent('download'),
        await dashboard.actionReportPageExportButtonClick()
    ]);
    await expect(await download.suggestedFilename()).toContain('Action_report_');
    await download.delete();
});

test('displayingInfoInTheTypeColumnActionReportPage @regChecklistNewLow @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dashboard = new DashboardPage(page);
    const typeColumn = page.locator('.cell-xs >> nth=3');
    const typeColumnHint = page.locator('.mat-tooltip-panel');
    console.log('dashboard Displaying Info In The Type Column Action Report Page');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.showMoreActionReportLinkClick();
    await expect(typeColumn).toBeVisible();
    await page.locator('.cell-xs >> nth=3').click();
    await expect(typeColumnHint).toBeVisible;
});

test('displayingInfoInTheEventColumnActionReportPage @regChecklistNewMedium @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dealAnalysis = new DealAnalysisPage(page);
    const dashboard = new DashboardPage(page);
    const expiryIcon = page.locator('.action-report-event-icon.expiry');
    const autoRenewIcon = page.locator('.action-report-event-icon.auto-renew');
    const terminationIcon = page.locator('.action-report-event-icon.termination-right');
    console.log('dashboard Displaying Info In The Event Column Action Report Page');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals/analysis-deal/8576');
    await dealAnalysis.autorenewCheckboxClick();
    await dealAnalysis.finalDraftFinishButtonClick();
    await page.goto('/dashboard');
    await dashboard.showMoreActionReportLinkClick();
    await expect(expiryIcon).toBeVisible();
    await expect(autoRenewIcon).toBeHidden();
    await expect(terminationIcon).toBeHidden();
    await page.goto('/deals/analysis-deal/8576');
    await dealAnalysis.finalDraftReopenButtonClick();
    await dealAnalysis.firstDraftFinishButtonClick();
    await dealAnalysis.terminationRightCheckboxClick();
    await dealAnalysis.finalDraftFinishButtonClick();
    await page.goto('/dashboard');
    await dashboard.showMoreActionReportLinkClick();
    await expect(expiryIcon).toBeHidden();
    await expect(autoRenewIcon).toBeHidden();
    await expect(terminationIcon).toBeVisible();
    await page.goto('/deals/analysis-deal/8576');
    await dealAnalysis.finalDraftReopenButtonClick();
    await dealAnalysis.firstDraftFinishButtonClick();
    await dealAnalysis.autorenewCheckboxClick();
    await dealAnalysis.autorenewDurationField.type('2');
    await dealAnalysis.terminationRightCheckboxClick();
    await page.waitForTimeout(500);
    await dealAnalysis.finalDraftFinishButtonClick();
    await page.goto('/dashboard');
    await dashboard.showMoreActionReportLinkClick();
    await expect(expiryIcon).toBeHidden();
    await expect(autoRenewIcon).toBeVisible();
    await expect(terminationIcon).toBeHidden();
    await page.goto('/deals/analysis-deal/8576');
    await dealAnalysis.finalDraftReopenButtonClick();
    await dealAnalysis.firstDraftFinishButtonClick();
    await dealAnalysis.terminationRightCheckboxClick();
    await dealAnalysis.finalDraftFinishButtonClick();
    await page.goto('/dashboard');
    await dashboard.showMoreActionReportLinkClick();
    await expect(expiryIcon).toBeHidden();
    await expect(autoRenewIcon).toBeVisible();
    await expect(terminationIcon).toBeVisible();
    await page.goto('/deals/analysis-deal/8576');
    await dealAnalysis.finalDraftReopenButtonClick();
    await dealAnalysis.firstDraftFinishButtonClick();
    await dealAnalysis.autorenewCheckboxClick();
    await dealAnalysis.terminationRightCheckboxClick();
});

test('displayingInfoInTheDateColumnActionReportPage @regChecklistNewHigh @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dealAnalysis = new DealAnalysisPage(page);
    const dashboard = new DashboardPage(page);
    const dateValueRed = page.locator('.color-high >> nth=1');
    const dateValueHint = page.locator('.mat-tooltip');
    const dateValueAmber = page.locator('.color-medium >> nth=1');
    const dateValueGreen = page.locator('.color-low >> nth=1');
    console.log('dashboard Displaying Info In The Date Column Action Report Page');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals/analysis-deal/8575');
    await dealAnalysis.autorenewCheckboxClick();
    await dealAnalysis.expirationEditIconClick();
    await dealAnalysis.expirationField.fill(Helpers.currentDateDashboard());
    await dealAnalysis.expirationOkIconClick();
    await dealAnalysis.finalDraftFinishButtonClick();
    await page.goto('/dashboard');
    await dashboard.showMoreActionReportLinkClick();
    await expect(dateValueRed).toContainText(Helpers.currentDateDashboard());
    await expect(dateValueRed).toHaveCSS('color', 'rgb(207, 72, 72)');
    await page.locator('.color-high >> nth=1').click();
    await expect(dateValueHint).toBeVisible();
    await expect(dateValueHint).toHaveText('0 days');
    await page.goto('/deals/analysis-deal/8575');
    await dealAnalysis.finalDraftReopenButtonClick();
    await dealAnalysis.firstDraftFinishButtonClick();
    await dealAnalysis.autorenewCheckboxClick();
    await dealAnalysis.expirationEditIconClick();
    await dealAnalysis.expirationField.fill(Helpers.currentDateDashboardPlus1Month());
    await dealAnalysis.expirationOkIconClick();
    await dealAnalysis.finalDraftFinishButtonClick();
    await page.goto('/dashboard');
    await dashboard.showMoreActionReportLinkClick();
    await expect(dateValueAmber).toContainText(Helpers.currentDateDashboardPlus1Month());
    await expect(dateValueAmber).toHaveCSS('color', 'rgb(255, 191, 116)');
    await page.locator('.color-medium >> nth=1').click();
    await expect(dateValueHint).toBeVisible();
    await expect(dateValueHint).toHaveText('31 days');
    await page.goto('/deals/analysis-deal/8575');
    await dealAnalysis.finalDraftReopenButtonClick();
    await dealAnalysis.firstDraftFinishButtonClick();
    await dealAnalysis.autorenewCheckboxClick();
    await dealAnalysis.expirationEditIconClick();
    await dealAnalysis.expirationField.fill(Helpers.currentDateDashboardPlus2Month());
    await dealAnalysis.expirationOkIconClick();
    await dealAnalysis.finalDraftFinishButtonClick();
    await page.goto('/dashboard');
    await dashboard.showMoreActionReportLinkClick();
    await expect(dateValueGreen).toContainText(Helpers.currentDateDashboardPlus2Month());
    await expect(dateValueGreen).toHaveCSS('color', 'rgb(131, 207, 72)');
    await page.locator('.color-low >> nth=1').click();
    await expect(dateValueHint).toBeVisible();
    await expect(dateValueHint).toHaveText('62 days');
    await page.goto('/deals/analysis-deal/8575');
    await dealAnalysis.finalDraftReopenButtonClick();
    await dealAnalysis.firstDraftFinishButtonClick();
});

test('displayingInfo/ValidationInTheContractColumnActionReportPage @regChecklistNewMedium @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dealAnalysis = new DealAnalysisPage(page);
    const dashboard = new DashboardPage(page);
    const contractLink = page.locator('.deal-column-link');
    const summaryTitle = page.locator('.section__title');
    console.log('dashboard Displaying Info/Validation In The Contract Column Action Report Page');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals/analysis-deal/8574');
    await dealAnalysis.autorenewCheckboxClick();
    await dealAnalysis.expirationEditIconClick();
    await dealAnalysis.expirationField.fill(Helpers.currentDateDashboardPlus1Month());
    await dealAnalysis.expirationOkIconClick();
    await dealAnalysis.finalDraftFinishButtonClick();
    await page.goto('/dashboard');
    await dashboard.showMoreActionReportLinkClick();
    await expect(contractLink).toHaveText(' test100TestDealDoNotRemove1 ');
    await page.locator('.deal-column-link').click();
    await expect(page).toHaveURL('/deals/summary-report/8574');
    await expect(summaryTitle).toHaveText(' test100TestDealDoNotRemove1 -  BanCompany4 -  test > Summary ');
    await page.goto('/deals/analysis-deal/8574');
    await dealAnalysis.finalDraftReopenButtonClick();
    await dealAnalysis.firstDraftFinishButtonClick();
});

test('displayingInfoInTheOtherPartyColumnActionReportPage @regChecklistNewLow @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dealAnalysis = new DealAnalysisPage(page);
    const dashboard = new DashboardPage(page);
    const otherParty = page.locator('.other-party-column >> nth=1');
    const otherPartyTitle = page.locator('.mat-tooltip');
    console.log('dashboard Displaying Info In The Other Party Column Action Report Page');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals/analysis-deal/8574');
    await dealAnalysis.autorenewCheckboxClick();
    await dealAnalysis.expirationEditIconClick();
    await dealAnalysis.expirationField.fill(Helpers.currentDateDashboardPlus1Month());
    await dealAnalysis.expirationOkIconClick();
    await dealAnalysis.finalDraftFinishButtonClick();
    await page.goto('/dashboard');
    await dashboard.showMoreActionReportLinkClick();
    await expect(otherParty).toHaveText(' test ');
    await page.locator('.other-party-column >> text= test ').click();
    await expect(otherPartyTitle).toBeVisible();
    await expect(otherPartyTitle).toHaveText(' test ');
    await page.goto('/deals/analysis-deal/8574');
    await dealAnalysis.finalDraftReopenButtonClick();
    await dealAnalysis.firstDraftFinishButtonClick();
});

test('displayingDiagramViewByDefaultDealHealthScorePage @regChecklistNewMedium @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dashboard = new DashboardPage(page);
    const diagramToggle = page.locator('#dashboard-deal-health-score-show-diagram-button');
    const diagram = page.locator('.chartjs-render-monitor');
    console.log('dashboard Displaying Diagram View By Default Deal Health Score Page');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.showMoreDealLinkClick();
    await expect(page).toHaveURL('/dashboard?&sort=signed_at');
    await expect(diagramToggle).toHaveAttribute('aria-pressed', 'true');
    await expect(diagram).toBeVisible();
});

test('displayingHeaderDealHealthScorePage @regChecklistNewLow @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dashboard = new DashboardPage(page);
    const header = page.locator('.section__title');
    console.log('dashboard Displaying Header Deal Health Score Page');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.showMoreDealLinkClick();
    await expect(page).toHaveURL('/dashboard?&sort=signed_at');
    await expect(header).toBeVisible();
    await expect(header).toHaveText('Deal Health Score Overview');
});

test('validationBackButtonDealHealthScorePage @regChecklistNewLow @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dashboard = new DashboardPage(page);
    const createDealButton = page.locator('#dashboard-create-deal');
    console.log('dashboard Validation Back Button Deal Health Score Page');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.showMoreDealLinkClick();
    await dashboard.dealHelthScorePageBackButtonClick();
    await expect(page).toHaveURL('/dashboard?&sort=signed_at');
    await expect(createDealButton).toBeVisible();
});

test('validationDiagramAndTableToggleDealHealthScorePage @regChecklistNewMedium @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dashboard = new DashboardPage(page);
    const diagramView = page.locator('.chartjs-render-monitor');
    const tableView = page.locator('.mat-table');
    console.log('dashboard Validation Diagram And Table Toggle Deal Health Score Page');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.showMoreDealLinkClick();
    await dashboard.tableToggleClick();
    await expect(tableView).toBeVisible();
    await expect(diagramView).toBeHidden();
    await dashboard.diagramToggleClick();
    await expect(diagramView).toBeVisible();
    await expect(tableView).toBeHidden();
});

test('displayingOptionsDropDownDealHealthScorePage @regChecklistNewMedium @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dashboard = new DashboardPage(page);
    const durationByDefault = page.locator('#dashboard-deal-health-score-filter .mat-select-value-text');
    const durationYear = page.locator('.mat-option >> nth=0');
    const durationMonth = page.locator('.mat-option >> nth=1');
    const durationMonths = page.locator('.mat-option >> nth=2');
    const durationQuarter = page.locator('.mat-option >> nth=3');
    const durationCustom = page.locator('.mat-option >> nth=4');
    console.log('dashboard Displaying Options Drop Down Deal Health Score Page');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.showMoreDealLinkClick();
    await expect(durationByDefault).toBeVisible();
    await expect(durationByDefault).toHaveText(' this year ');
    await dashboard.durationDropDownClick();
    await expect(durationYear).toBeVisible();
    await expect(durationYear).toHaveText('this year');
    await expect(durationMonth).toBeVisible();
    await expect(durationMonth).toHaveText(' this month ');
    await expect(durationMonths).toBeVisible();
    await expect(durationMonths).toHaveText(' three months ');
    await expect(durationQuarter).toBeVisible();
    await expect(durationQuarter).toHaveText(' this quarter ');
    await expect(durationCustom).toBeVisible();
    await expect(durationCustom).toHaveText(' custom ');
});

test('validationCustomOptionDealHealthScorePage @regChecklistNewHigh @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dashboard = new DashboardPage(page);
    const durationCustomPopup = page.locator('.mat-dialog-container');
    const durationCustomTitle = page.locator('.modal-header');
    console.log('dashboard Validation Custom Option Deal Health Score Page');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.showMoreDealLinkClick();
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownCustomClick();
    await expect(durationCustomPopup).toBeVisible();
    await expect(durationCustomTitle).toBeVisible();
    await expect(durationCustomTitle).toHaveText(' Set custom period ');
});

test('displayingInfoInTheCalendarPopupDealHealthScorePage @regChecklistNewMedium @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dashboard = new DashboardPage(page);
    const durationCustomTitle = page.locator('.modal-header');
    const durationCustomXButton = page.locator('#dashboard-deal-health-score-filter-modal-cross');
    const durationCustomStartDateField = page.locator('#dashboard-deal-health-score-filter-modal-filter-from');
    const durationCustomEndDateField = page.locator('#dashboard-deal-health-score-filter-modal-filter-to');
    const durationCustomApplyButton = page.locator('#dashboard-deal-health-score-filter-modal-apply');
    const durationCustomCancelButton = page.locator('#dashboard-deal-health-score-filter-modal-cancel');
    console.log('dashboard Displaying Info In The Calendar Popup Deal Health Score Page');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.showMoreDealLinkClick();
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownCustomClick();
    await expect(durationCustomTitle).toBeVisible();
    await expect(durationCustomTitle).toHaveText(' Set custom period ');
    await expect(durationCustomXButton).toBeVisible();
    await expect(durationCustomStartDateField).toBeVisible();
    await expect(durationCustomEndDateField).toBeVisible();
    await expect(durationCustomApplyButton).toBeVisible();
    await expect(durationCustomCancelButton).toBeVisible();
});

test('displayingCorrectDateForStart/EndDatesCalendarPopupDealHealthScorePage @regChecklistNewMedium @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dashboard = new DashboardPage(page);
    const durationCustomStartDateFieldValue = page.locator('#dashboard-deal-health-score-filter-modal-filter-from');
    const durationCustomEndDateFieldValue = page.locator('#dashboard-deal-health-score-filter-modal-filter-to');
    console.log('dashboard Displaying Correct Date For Start/End Dates Calendar Popup Deal Health Score Page');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.showMoreDealLinkClick();
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownCustomClick();
    await expect(durationCustomStartDateFieldValue).toHaveValue(Helpers.currentDateFirstDayOfMonth());
    await expect(durationCustomEndDateFieldValue).toHaveValue(Helpers.currentDateLastDayOfMonth());
});

test('manualInputForStart/EndDatesCalendarPopupDealHealthScorePage @regChecklistNewLow @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dashboard = new DashboardPage(page);
    const durationCustomStartDateField = page.locator('#dashboard-deal-health-score-filter-modal-filter-from');
    const durationCustomEndDateField = page.locator('#dashboard-deal-health-score-filter-modal-filter-to');
    console.log('dashboard Manual Input For Start/End Dates Calendar Popup Deal Health Score Page');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.showMoreDealLinkClick();
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownCustomClick();
    await expect(durationCustomStartDateField).toHaveAttribute('readonly', '');
    await expect(durationCustomEndDateField).toHaveAttribute('readonly', '');
});

test('validationOfStart/EndDateFieldsCalendarPopupDealHealthScorePage @regChecklistNewMedium @dashboard', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dashboard = new DashboardPage(page);
    const dataPicker = page.locator('.mat-calendar');
    const dataPickerNextMonth = page.locator('.mat-calendar-next-button');
    const dataPickerYearLable = page.locator('.mat-calendar-body-label');
    console.log('dashboard Validation Of Start/End Date Fields Calendar Popup Deal Health Score Page');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.showMoreDealLinkClick();
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownCustomClick();
    await dashboard.setCustomPeriodDropDownStartDateClick();
    await expect(dataPicker).toBeVisible();
    await expect(dataPickerNextMonth).toBeVisible();
    await expect(dataPickerNextMonth).toHaveAttribute('disabled', '');
    await expect(dataPickerNextMonth).toBeVisible();
    await expect(dataPickerYearLable).toHaveText(Helpers.currentYear());
    await page.locator('.mat-calendar-previous-button').click();
    await expect(dataPickerYearLable).toHaveText(Helpers.currentYearMinus1());
    await page.locator('.cdk-overlay-backdrop >> nth=1').click();
    await dashboard.setCustomPeriodDropDownEndDateClick();
    await expect(dataPicker).toBeVisible();
    await expect(dataPickerNextMonth).toBeVisible();
    await expect(dataPickerNextMonth).toHaveAttribute('disabled', '');
    await expect(dataPickerNextMonth).toBeVisible();
    await expect(dataPickerYearLable).toHaveText(Helpers.currentYear());
    await page.locator('.mat-calendar-previous-button').click();
    await expect(dataPickerYearLable).toHaveText(Helpers.currentYearMinus1());
});

test('validationOfX/CancelButtonCalendarPopupDealHealthScorePage @regChecklistNewLow @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dashboard = new DashboardPage(page);
    const dropDownValue = page.locator('#dashboard-deal-health-score-filter .mat-select-value-text');
    console.log('dashboard Validation Of X/Cancel Button Calendar Popup Deal Health Score Page');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.showMoreDealLinkClick();
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownCustomClick();
    await dashboard.setCustomPeriodDropDownXButtonClick();
    await expect(dropDownValue).toHaveText(' this year ');
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownCustomClick();
    await dashboard.setCustomPeriodDropDownCancelButtonClick();
    await expect(dropDownValue).toHaveText(' this year ');
    await dashboard.tableToggleClick();
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownThisMonthCkick();
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownCustomClick();
    await dashboard.setCustomPeriodDropDownXButtonClick();
    await expect(dropDownValue).toHaveText('this month');
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownCustomClick();
    await dashboard.setCustomPeriodDropDownCancelButtonClick();
    await expect(dropDownValue).toHaveText('this month');
    await dashboard.diagramToggleClick();
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownThreeMonthsClick();
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownCustomClick();
    await dashboard.setCustomPeriodDropDownXButtonClick();
    await expect(dropDownValue).toHaveText('three months');
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownCustomClick();
    await dashboard.setCustomPeriodDropDownCancelButtonClick();
    await expect(dropDownValue).toHaveText('three months');
    await dashboard.tableToggleClick();
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownThisQuarterClick();
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownCustomClick();
    await dashboard.setCustomPeriodDropDownXButtonClick();
    await expect(dropDownValue).toHaveText('this quarter');
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownCustomClick();
    await dashboard.setCustomPeriodDropDownCancelButtonClick();
    await expect(dropDownValue).toHaveText('this quarter');
});

test('validationOfApplyButtonCalendarPopupDealHealthScorePage @regChecklistNewHigh @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dashboard = new DashboardPage(page);
    const dropDownValue = page.locator('#dashboard-deal-health-score-filter .mat-select-value-text');
    console.log('dashboard Validation Of Apply Button Calendar Popup Deal Health Score Page');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.showMoreDealLinkClick();
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownCustomClick();
    await dashboard.setCustomPeriodDropDownApplyButtonClick();
    await expect(dropDownValue).toHaveText('custom');
    await dashboard.tableToggleClick();
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownThisMonthCkick();
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownCustomClick();
    await dashboard.setCustomPeriodDropDownApplyButtonClick();
    await expect(dropDownValue).toHaveText('custom');
    await dashboard.diagramToggleClick();
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownThreeMonthsClick();
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownCustomClick();
    await dashboard.setCustomPeriodDropDownApplyButtonClick();
    await expect(dropDownValue).toHaveText('custom');
    await dashboard.tableToggleClick();
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownThisQuarterClick();
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownCustomClick();
    await dashboard.setCustomPeriodDropDownApplyButtonClick();
    await expect(dropDownValue).toHaveText('custom');
});

test('displayingChangeSelectionFieldDealHealthScorePage @regChecklistNewMedium @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dashboard = new DashboardPage(page);
    const changeSelectionDropDownValue = page.locator('#dashboard-deal-health-score-filter-change-selection');
    console.log('dashboard Displaying Change Selection Field Deal Health Score Page');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.showMoreDealLinkClick();
    await expect(changeSelectionDropDownValue).toBeHidden();
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownCustomClick();
    await dashboard.setCustomPeriodDropDownApplyButtonClick();
    await expect(changeSelectionDropDownValue).toBeVisible();
    await dashboard.tableToggleClick();
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownThisMonthCkick();
    await expect(changeSelectionDropDownValue).toBeHidden();
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownCustomClick();
    await dashboard.setCustomPeriodDropDownApplyButtonClick();
    await expect(changeSelectionDropDownValue).toBeVisible();
});

test('displayingCorrectDatesChangeSelectionFieldDealHealthScorePage @regChecklistNewMedium @dashboard', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dashboard = new DashboardPage(page);
    const changeSelectionDropDownValue = page.locator('#dashboard-deal-health-score-filter-change-selection');
    console.log('dashboard Displaying Correct Dates Change Selection Field Deal Health Score Page');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.showMoreDealLinkClick();
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownCustomClick();
    await dashboard.setCustomPeriodDropDownStartDateClick();
    await page.locator('.mat-calendar-previous-button').click();
    await page.locator('.mat-calendar-body-cell-content >> text=MAR').click();
    await dashboard.setCustomPeriodDropDownApplyButtonClick();
    await expect(changeSelectionDropDownValue).toContainText(Helpers.dateForDashboardDealHealthScore0());
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownThisYearClick();
    await dashboard.tableToggleClick();
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownCustomClick();
    await dashboard.setCustomPeriodDropDownStartDateClick();
    await page.locator('.mat-calendar-previous-button').click();
    await page.locator('.mat-calendar-body-cell-content >> text=AUG').click();
    await dashboard.setCustomPeriodDropDownApplyButtonClick();
    await expect(changeSelectionDropDownValue).toContainText(Helpers.dateForDashboardDealHealthScore1());
});

test('validationChangeSelectionFieldDealHealthScorePage @regChecklistNewHigh @dashboard', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dashboard = new DashboardPage(page);
    const changeSelectionDropDownValue = page.locator('#dashboard-deal-health-score-filter-change-selection');
    const customPopup = page.locator('.mat-dialog-container');
    const customPopupTitle = page.locator('.modal-header');
    console.log('dashboard Validation Change Selection Field Deal Health Score Page');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.showMoreDealLinkClick();
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownCustomClick();
    await dashboard.setCustomPeriodDropDownApplyButtonClick();
    await page.locator('#dashboard-deal-health-score-filter-change-selection').click();
    await expect(customPopup).toBeVisible();
    await expect(customPopupTitle).toHaveText(' Set custom period ');
    await dashboard.setCustomPeriodDropDownStartDateClick();
    await page.locator('.mat-calendar-previous-button').click();
    await page.locator('.mat-calendar-body-cell-content >> text=JUN').click();
    await dashboard.setCustomPeriodDropDownApplyButtonClick();
    await expect(changeSelectionDropDownValue).toContainText(Helpers.dateForDashboardDealHealthScore2());
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownThisYearClick();
    await dashboard.tableToggleClick();
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownCustomClick();
    await dashboard.setCustomPeriodDropDownApplyButtonClick();
    await page.locator('#dashboard-deal-health-score-filter-change-selection').click();
    await expect(customPopup).toBeVisible();
    await expect(customPopupTitle).toHaveText(' Set custom period ');
    await dashboard.setCustomPeriodDropDownStartDateClick();
    await page.locator('.mat-calendar-previous-button').click();
    await page.locator('.mat-calendar-body-cell-content >> text=NOV').click();
    await dashboard.setCustomPeriodDropDownApplyButtonClick();
    await expect(changeSelectionDropDownValue).toContainText(Helpers.dateForDashboardDealHealthScore3());
});

test('validationCustomOptionAfterApplyingCustomOptionDealHealthScorePage @regChecklistNewLow @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dashboard = new DashboardPage(page);
    const customFilter = page.locator('.mat-option >> nth=4');
    console.log('dashboard Validation Custom Option After Applying Custom Option Deal Health Score Page');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.showMoreDealLinkClick();
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownCustomClick();
    await dashboard.setCustomPeriodDropDownApplyButtonClick();
    await dashboard.durationDropDownClick();
    await expect(customFilter).toHaveAttribute('aria-disabled', 'true');
});

test('displayingInfoLastUpdateDealHealthScorePage @regChecklistNewLow @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dealAnalysis = new DealAnalysisPage(page);
    const dashboard = new DashboardPage(page);
    const lastUpdateLabel = page.locator('.last-update-text');
    console.log('dashboard Displaying Info Last Update Deal Health Score Page');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals/analysis-deal/8578');
    await dealAnalysis.finalDraftFinishButtonClick();
    await page.goto('/dashboard');
    await dashboard.showMoreDealLinkClick();
    await expect(lastUpdateLabel).toContainText(Helpers.currentDateLastUpdate());
    await dashboard.tableToggleClick();
    await expect(lastUpdateLabel).toContainText(Helpers.currentDateLastUpdate());
    await page.goto('/deals/analysis-deal/8578');
    await dealAnalysis.finalDraftReopenButtonClick();
    await dealAnalysis.firstDraftFinishButtonClick();
});

test('validationExportButtonDealHealthScorePageTableView @regChecklistNewMedium @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dashboard = new DashboardPage(page);
    const exportButton = page.locator('#dashboard-deal-health-score-export');
    console.log('dashboard Validation Export Button Deal Health Score Page Table View');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.showMoreDealLinkClick();
    await dashboard.tableToggleClick();
    await expect(exportButton).toBeVisible();
    const [ download ] = await Promise.all([
        page.waitForEvent('download'),
        await dashboard.dealHelthScorePageExportButtonClick()
    ]);
    await expect(await download.suggestedFilename()).toContain('Deal Health Score Overview table.csv');
    await download.delete();
});

test('year/MonthColumnDealHealthScorePageTableView @regChecklistNewLow @dashboard', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dashboard = new DashboardPage(page);
    const currentYear = page.locator('.mat-column-year >> nth=1');
    const currentMonth = page.locator('.mat-column-month >> nth=1');
    const lastYear = page.locator('.mat-column-year >> nth=8');
    const lastMonth = page.locator('.mat-column-month >> nth=8');
    console.log('dashboard Year/Month Column Deal Health Score Page Table View');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.showMoreDealLinkClick();
    await dashboard.tableToggleClick();
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownCustomClick();
    await dashboard.setCustomPeriodDropDownStartDateClick();
    await dashboard.setCustomPeriodDropDownCalendarPreviousButtonLastYear();
    await page.locator('.mat-calendar-body-cell >> text=JUL').click();
    await dashboard.setCustomPeriodDropDownApplyButtonClick();
    await expect(currentYear).toHaveText(Helpers.currentYear());
    await expect(currentMonth).toHaveText(Helpers.currentMonth());
    await page.locator('.pagination-item.last-page:nth-child(7)').click();
    await expect(lastYear).toHaveText(' 2017 ');
    await expect(lastMonth).toHaveText(' August ');
});

test('numberOfDealsColumnDealHealthScorePageTableView @regChecklistNewHigh @dashboard', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dashboard = new DashboardPage(page);
    const numberOfDealsLow = page.locator('.mat-column-numberLow >> nth=1');
    const numberOfDealsMedium = page.locator('.mat-column-numberMedium >> nth=1');
    const numberOfDealsHigh = page.locator('.mat-column-numberHigh >> nth=1');
    console.log('dashboard Number Of Deals Column Deal Health Score Page Table View');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.showMoreDealLinkClick();
    await dashboard.tableToggleClick();
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownCustomClick();
    await dashboard.setCustomPeriodDropDownStartDateClick();
    await dashboard.setCustomPeriodDropDownCalendarPreviousButtonLastYear();
    await page.locator('.mat-calendar-body-cell >> text=JUL').click();
    await dashboard.setCustomPeriodDropDownEndDateClick();
    await dashboard.setCustomPeriodDropDownCalendarPreviousButtonLastYear1();
    await page.locator('.mat-calendar-body-cell >> text=NOV').click();
    await dashboard.setCustomPeriodDropDownApplyButtonClick();
    await expect(numberOfDealsLow).toHaveText('22');
    await page.locator('.mat-column-numberLow >> nth=1').click();
    const [page2] = await Promise.all([
        page.waitForEvent('popup'),
      ]);
      await page2.waitForLoadState();
    await expect(page2).toHaveURL('/deals?&sort=contract_name&risk_level=Low&date=November,%202021');
    const firstScoreLow = page2.locator('.low-risk >> nth=0');
    const lastScoreLow = page2.locator('.low-risk >> nth=1');
    await expect(firstScoreLow).toHaveText('133');
    await page2.locator('.pagination-item.last-page').click();
    await expect(lastScoreLow).toHaveText('95');
    await page2.close();
    await expect(numberOfDealsMedium).toHaveText('21');
    await page.locator('.mat-column-numberMedium >> nth=1').click();
    const [page3] = await Promise.all([
        page.waitForEvent('popup'),
      ]);
      await page3.waitForLoadState();
    await expect(page3).toHaveURL('/deals?&sort=contract_name&risk_level=Medium&date=November,%202021');
    const firstScoreMedium = page3.locator('.medium-risk >> nth=0');
    const lastScoreMedium = page3.locator('.medium-risk >> nth=0');
    await expect(firstScoreMedium).toHaveText('66');
    await page3.locator('.pagination-item.last-page').click();
    await expect(lastScoreMedium).toHaveText('65');
    await page3.close();
    await expect(numberOfDealsHigh).toHaveText('574');
    await page.locator('.mat-column-numberHigh >> nth=1').click();
    const [page4] = await Promise.all([
        page.waitForEvent('popup'),
      ]);
      await page4.waitForLoadState();
    await expect(page4).toHaveURL('/deals?&sort=contract_name&risk_level=High&date=November,%202021');
    const firstScoreHigh = page4.locator('.high-risk >> nth=0');
    const lastScoreHigh = page4.locator('.high-risk >> nth=3');
    await expect(firstScoreHigh).toHaveText('-28');
    await page4.locator('.pagination-item.last-page').click();
    await expect(lastScoreHigh).toHaveText('0');
    await page4.close();
});

test('0ValueNumberOfDealsColumnDealHealthScorePageTableView @regChecklistNewLow @dashboard', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dashboard = new DashboardPage(page);
    const numberOfDealsLow0Value = page.locator('.mat-column-numberLow >> nth=10');
    const numberOfDealsMedium0Value = page.locator('.mat-column-numberMedium >> nth=9');
    const numberOfDealsHigh0Value = page.locator('.mat-column-numberHigh >> nth=10');
    console.log('dashboard 0 Value Number Of Deals Column Deal Health Score Page Table View');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.showMoreDealLinkClick();
    await dashboard.tableToggleClick();
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownCustomClick();
    await dashboard.setCustomPeriodDropDownStartDateClick();
    await dashboard.setCustomPeriodDropDownCalendarPreviousButtonLastYear();
    await page.locator('.mat-calendar-body-cell >> text=JUL').click();
    await dashboard.setCustomPeriodDropDownEndDateClick();
    await dashboard.setCustomPeriodDropDownCalendarPreviousButtonLastYear1();
    await page.locator('.mat-calendar-body-cell >> text=NOV').click();
    await dashboard.setCustomPeriodDropDownApplyButtonClick();
    await page.locator('.pagination-item.last-page').click();
    await expect(numberOfDealsLow0Value).toHaveText(' 0 ');
    await expect(numberOfDealsMedium0Value).toHaveText(' 0 ');
    await expect(numberOfDealsHigh0Value).toHaveText(' 0 ');
});

    //to be refactored(should think about maths)
test('growthToPreviousMonthDealsColumnDealHealthScorePageTableView @regChecklistNewHigh @dashboard', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dashboard = new DashboardPage(page);
    const growthOfDealsLow = page.locator('.status-progress__percent >> nth=0');
    const growthOfDealsMedium = page.locator('.status-progress__percent >> nth=1');
    const growthOfDealsHigh = page.locator('.status-progress__percent >> nth=2');
    console.log('dashboard Growth To Previous Month Deals Column Deal Health Score Page Table View');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.showMoreDealLinkClick();
    await dashboard.tableToggleClick();
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownCustomClick();
    await dashboard.setCustomPeriodDropDownStartDateClick();
    await dashboard.setCustomPeriodDropDownCalendarPreviousButtonLastYear();
    await page.locator('.mat-calendar-body-cell >> text=JUL').click();
    await dashboard.setCustomPeriodDropDownEndDateClick();
    await dashboard.setCustomPeriodDropDownCalendarPreviousButtonLastYear1();
    await page.locator('.mat-calendar-body-cell >> text=NOV').click();
    await dashboard.setCustomPeriodDropDownApplyButtonClick();
    await expect(growthOfDealsLow).toHaveText(' 4.76% ');
    await expect(growthOfDealsMedium).toHaveText(' 0.0% ');
    await expect(growthOfDealsHigh).toHaveText(' 1.95% ');
});

test('displaying"-"GrowthColumnDealHealthScorePageTableView @regChecklistNewMedium @dashboard', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dashboard = new DashboardPage(page);
    const growOfDealsLow = page.locator('.mat-column-growthLow >> nth=10');
    const growOfDealsMedium = page.locator('.mat-column-growthMedium >> nth=10');
    const growOfDealsHigh = page.locator('.mat-column-growthHigh >> nth=10');
    console.log('dashboard Displaying "-" Growths Column Deal Health Score Page Table View');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.showMoreDealLinkClick();
    await dashboard.tableToggleClick();
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownCustomClick();
    await dashboard.setCustomPeriodDropDownStartDateClick();
    await dashboard.setCustomPeriodDropDownCalendarPreviousButtonLastYear();
    await page.locator('.mat-calendar-body-cell >> text=JUL').click();
    await dashboard.setCustomPeriodDropDownEndDateClick();
    await dashboard.setCustomPeriodDropDownCalendarPreviousButtonLastYear1();
    await page.locator('.mat-calendar-body-cell >> text=NOV').click();
    await dashboard.setCustomPeriodDropDownApplyButtonClick();
    await page.locator('.pagination-item.last-page').click();
    await expect(growOfDealsLow).toHaveText(' - ');
    await expect(growOfDealsMedium).toHaveText(' - ');
    await expect(growOfDealsHigh).toHaveText(' - ');
});

test('paginationAndRediractionBetweenPagesDealHealthScorePageTableView @regChecklistNewMedium @dashboard', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dashboard = new DashboardPage(page);
    const row0 = page.locator('.mat-row >> nth=0');
    const row1 = page.locator('.mat-row >> nth=1');
    const row2 = page.locator('.mat-row >> nth=2');
    const row3 = page.locator('.mat-row >> nth=3');
    const row4 = page.locator('.mat-row >> nth=4');
    const row5 = page.locator('.mat-row >> nth=5');
    const row6 = page.locator('.mat-row >> nth=6');
    const row7 = page.locator('.mat-row >> nth=7');
    const row8 = page.locator('.mat-row >> nth=8');
    const row9 = page.locator('.mat-row >> nth=9');
    console.log('dashboard Pagination And Rediraction Between Pages Column Deal Health Score Page Table View');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.showMoreDealLinkClick();
    await dashboard.tableToggleClick();
    await dashboard.durationDropDownClick();
    await dashboard.durationDropDownCustomClick();
    await dashboard.setCustomPeriodDropDownStartDateClick();
    await dashboard.setCustomPeriodDropDownCalendarPreviousButtonLastYear();
    await page.locator('.mat-calendar-body-cell >> text=JUL').click();
    await dashboard.setCustomPeriodDropDownEndDateClick();
    await dashboard.setCustomPeriodDropDownCalendarPreviousButtonLastYear1();
    await page.locator('.mat-calendar-body-cell >> text=NOV').click();
    await dashboard.setCustomPeriodDropDownApplyButtonClick();
    await expect(row0).toBeVisible();
    await expect(row1).toBeVisible();
    await expect(row2).toBeVisible();
    await expect(row3).toBeVisible();
    await expect(row4).toBeVisible();
    await expect(row5).toBeVisible();
    await expect(row6).toBeVisible();
    await expect(row7).toBeVisible();
    await expect(row8).toBeVisible();
    await expect(row9).toBeVisible();
    await page.locator('.pagination-item.last-page').click();
    await expect(page).toHaveURL('/dashboard?page=2&sort=signed_at');
    await expect(row0).toBeVisible();
    await expect(row1).toBeVisible();
    await expect(row2).toBeVisible();
    await expect(row3).toBeVisible();
    await expect(row4).toBeVisible();
    await expect(row5).toBeVisible();
    await expect(row6).toBeVisible();
    await expect(row7).toBeVisible();
    await expect(row8).toBeVisible();
    await expect(row9).toBeVisible();
});

test('headerTextRecentlySignedContractsPage @regChecklistNewLow @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dashboard = new DashboardPage(page);
    const signaturesHeader = page.locator('.section__title');
    console.log('dashboard Header Text Recently Signed Contracts Page');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.showMoreSignedContractsLinkClick();
    await expect(signaturesHeader).toBeVisible();
    await expect(signaturesHeader).toHaveText('Signatures (On ContractsRx)');
});

test('dateColumnPreviewReportRecentlySignedContractsPage @regChecklistNewLow @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dashboard = new DashboardPage(page);
    const createdAt = page.locator('.mat-column-created_at >> nth=2');
    console.log('dashboard Date Column Preview Report Recently Signed Contracts Page');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.showMoreSignedContractsLinkClick();
    await expect(createdAt).toContainText(' 07/23/22');
});

test('signedByColumnPreviewReportRecentlySignedContractsPage @regChecklistNewLow @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dashboard = new DashboardPage(page);
    const signedBy = page.locator('.mat-column-name >> nth=2');
    console.log('dashboard Signed By Column Preview Report Recently Signed Contracts Page');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.showMoreSignedContractsLinkClick();
    await expect(signedBy).toHaveText('AccountAdimnThird AOThird ');
});

test('contractNameColumnPreviewReportRecentlySignedContractsPage @regChecklistNewMedium @dashboard', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dashboard = new DashboardPage(page);
    console.log('dashboard Contract Name Column Preview Report Recently Signed Contracts Page');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.showMoreSignedContractsLinkClick();
    await page.locator('.mat-column-contract >> nth=2').click();
    const [page2] = await Promise.all([
        page.waitForEvent('popup'),
      ]);
      await page2.waitForLoadState();
    await expect(page2.url()).toContain('terms.test.noredlines.com/contract/3379/pdf/');
    await page2.close();
});

test('displayingTextNoContractsSignedRecentlySignedContractsPage @regChecklistNewMedium @dashboard', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dashboard = new DashboardPage(page);
    const noSignaturesText = page.locator('.no-results-no-arrow');
    console.log('dashboard Displaying Text No Contracts Signed Preview Report Recently Signed Contracts Page');
    await users.AASubscriptionLimits();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/signed-users/list?&sort=-created_at');
    await expect(noSignaturesText).toBeVisible();
    await expect(noSignaturesText).toHaveText(' There are no signatures yet.  Please create contracts and share them with clients for signing ');
    await dashboard.inboundContractsClick();
    await expect(noSignaturesText).toBeVisible();
    await expect(noSignaturesText).toHaveText(' There are no signatures yet.  Signatures for contracts created by other ContractsRX companies will appear in this list ');
});

test('displayingContractCreatedByAUThatWasDeletedSignedRecentlySignedContractsPage @regChecklistNewMedium @dashboard', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const dashboard = new DashboardPage(page);
    const contractDeletedAU = page.locator('.mat-column-contract >> nth=1');
    console.log('dashboard displaying Contract Created By AU That Was Deleted Recently Signed Contracts Page');
    await users.AA3();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await dashboard.showMoreSignedContractsLinkClick();
    await expect(contractDeletedAU).toBeVisible();
    await expect(contractDeletedAU).toHaveText(' test100testContractDoNotRemove1 ');
    await page.locator('.mat-column-contract >> nth=1').click();
    const [page2] = await Promise.all([
        page.waitForEvent('popup'),
      ]);
      await page2.waitForLoadState();
    await expect(page2.url()).toContain('terms.test.noredlines.com/contract/3380/pdf/');
    await page2.close();
});