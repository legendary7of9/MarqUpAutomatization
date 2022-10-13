import { test , expect } from '@playwright/test'
import { UserBar, Users } from '../../framework'
import { Search } from '../../framework'
import { SignInPage } from '../../framework'
import { Pagination } from '../../framework'
import { ClientPageSA } from '../../framework'
import { EditClientSA } from '../../framework'
import { NewClientPageSA } from '../../framework'




test.beforeEach(async ({ page }, testInfo) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    await page.goto('');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/clients?&sort=name');
});

test('displayingTheClientPage @regChecklistNewHigh @clientPageSA', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const manageAccountsButton = page.locator('#dashboard-manage-accounts');
    const addClientButton = page.locator('#clients-list-add-client');
    console.log('clientPageSA Displaying The User Menu Box');
    await page.goto('/dashboard');
    await expect(manageAccountsButton).toBeVisible();
    await manageAccountsButton.click();
    await expect(page).toHaveURL('/clients?&sort=name');
    await expect(addClientButton).toBeVisible();
    await userBar.logOutAction();
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await expect(addClientButton).toBeHidden();
    await userBar.logOutAction();
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await expect(addClientButton).toBeHidden();
});

test('validationTheAddClientButton @regChecklistNewHigh @clientPageSA', async ({ page }) => {
    const clientsPage = new ClientPageSA(page);
    const addClientButton = page.locator('#clients-list-add-client');
    const pageTitle = page.locator('.section__title');
    const clientNameField = page.locator('[placeholder="Client Name"]');
    console.log('clientPageSA Validation The Add Client Button');
    await expect(addClientButton).toBeVisible();
    await clientsPage.addClientButtonClick();
    await expect(page).toHaveURL('/clients/add-client');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText('New Client');
    await expect(clientNameField).toBeVisible();
});

test('displayingSummaryText @regChecklistNewLow @clientPageSA', async ({ page }) => {
    const summaryText = page.locator('.summary-statistics');
    console.log('clientPageSA Displaying Summary Text');
    await expect(summaryText).toContainText('Summary');
});

test('displaying/validationSimpleStatisticPanel @regChecklistNewMedium @clientPageSA', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const clientsPage = new ClientPageSA(page);
    const pageTitle = page.locator('.section__title');
    const clientsLink = page.locator('#clients-list-statistics-clients');
    const usersLink = page.locator('#clients-list-statistics-users');
    const modelsLink = page.locator('#clients-list-statistics-models');
    const dealsLink = page.locator('#clients-list-statistics-deals');
    const templatesLink = page.locator('#clients-list-statistics-templates');
    const contractsLink = page.locator('#clients-list-statistics-contracts');
    const addClientButton = page.locator('#clients-list-add-client');
    const addUserButton = page.locator('#users-list-add-user');
    const addModelButton = page.locator('#models-list-add-model');
    const addDealButton = page.locator('#deals-list-add-deal');
    const addTemplateButton = page.locator('#templates-list-add-template');
    const filteredBy = page.locator('#contracts-list-filtered-by-template');
    console.log('clientPageSA Displaying/Validation Simple Statistic Panel');
    await expect(clientsLink).toBeVisible();
    await expect(clientsLink).toContainText('Clients (');
    await expect(usersLink).toBeVisible();
    await expect(usersLink).toContainText('Users (');
    await expect(modelsLink).toBeVisible();
    await expect(modelsLink).toContainText('Models (');
    await expect(dealsLink).toBeVisible();
    await expect(dealsLink).toContainText('Deals (');
    await expect(templatesLink).toBeVisible();
    await expect(templatesLink).toContainText('Templates (');
    await expect(contractsLink).toBeVisible();
    await expect(contractsLink).toContainText('Contracts (');
    await clientsPage.clientsLinkClick();
    await expect(page).toHaveURL('/clients?&sort=name');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText('Client');
    await expect(addClientButton).toBeVisible();
    await page.goto('/clients?&sort=name');
    await clientsPage.usersLinkClick();
    await expect(page).toHaveURL('/users?&sort=first_name');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText('Users');
    await expect(addUserButton).toBeVisible();
    await page.goto('/clients?&sort=name');
    await clientsPage.modelsLinkClick();
    await expect(page).toHaveURL('/models?&sort=name');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText('Models');
    await expect(addModelButton).toBeVisible();
    await page.goto('/clients?&sort=name');
    await clientsPage.dealsLinkClick();
    await expect(page).toHaveURL('/deals?&sort=contract_name');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText('Deals');
    await expect(addDealButton).toBeVisible();
    await page.goto('/clients?&sort=name');
    await clientsPage.templatesLinkClick();
    await expect(page).toHaveURL('/contract-templates/list?&sort=-updated_at');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText('Templates');
    await expect(addTemplateButton).toBeVisible();
    await page.goto('/clients?&sort=name');
    await clientsPage.contractsLinkClick();
    await expect(page).toHaveURL('/contracts/list?&sort=-created_at');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText('Contracts');
    await expect(filteredBy).toBeVisible();
});

test('displayingTheListOfClients @regChecklistNewMedium @clientPageSA', async ({ page }) => {
    const clientColumn = page.locator('.mat-column-client >> nth=0');
    const emailColumn = page.locator('.mat-column-email >> nth=0');
    const statusColumn = page.locator('.mat-column-status >> nth=0');
    const clicktractsColumn = page.locator('.mat-column-htAccess >> nth=0');
    const createdColumn = page.locator('.mat-column-created >> nth=0');
    const createdByColumn = page.locator('.mat-column-createdBy >> nth=0');
    const editedColumn = page.locator('.mat-column-edited >> nth=0');
    const editedByColumn = page.locator('.mat-column-editedBy >> nth=0');
    console.log('clientPageSA Displaying The List Of Clients');
    await expect(clientColumn).toBeVisible();
    await expect(emailColumn).toBeVisible();
    await expect(statusColumn).toBeVisible();
    await expect(clicktractsColumn).toBeVisible();
    await expect(createdColumn).toBeVisible();
    await expect(createdByColumn).toBeVisible();
    await expect(editedColumn).toBeVisible();
    await expect(editedByColumn).toBeVisible();
});

test('sortingOfTheListOfClients @regChecklistNewLow @clientPageSA', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const clientsPage = new ClientPageSA(page);
    console.log('clientPageSA Sorting Of The List Of Clients');
    await clientsPage.clientFilterClick();
    await expect(page).toHaveURL('/clients?&sort=-name'); 
    await clientsPage.clientFilterClick();
    await expect(page).toHaveURL('/clients?&sort=name'); 
    await clientsPage.emailFilterClick();
    await expect(page).toHaveURL('/clients?&sort=-email');
    await clientsPage.emailFilterClick();
    await expect(page).toHaveURL('/clients?&sort=email');
    await clientsPage.statusFilterClick();
    await expect(page).toHaveURL('/clients?&sort=-status');
    await clientsPage.statusFilterClick();
    await expect(page).toHaveURL('/clients?&sort=status');
    await clientsPage.clicktractsFilterClick();
    await expect(page).toHaveURL('/clients?&sort=-hosted_terms_en');
    await clientsPage.clicktractsFilterClick();
    await expect(page).toHaveURL('/clients?&sort=hosted_terms_en');
    await clientsPage.createdFilterClick();
    await expect(page).toHaveURL('/clients?&sort=-created_at');
    await clientsPage.createdFilterClick();
    await expect(page).toHaveURL('/clients?&sort=created_at');
    await clientsPage.createdByFilterClick();
    await expect(page).toHaveURL('/clients?&sort=-createdBy.first_name');
    await clientsPage.createdByFilterClick();
    await expect(page).toHaveURL('/clients?&sort=createdBy.first_name');
    await clientsPage.editedFilterClick();
    await expect(page).toHaveURL('/clients?&sort=-updated_at');
    await clientsPage.editedFilterClick();
    await expect(page).toHaveURL('/clients?&sort=updated_at');
    await clientsPage.editedByFilterClick();
    await expect(page).toHaveURL('/clients?&sort=-updatedBy.first_name');
    await clientsPage.editedByFilterClick();
    await expect(page).toHaveURL('/clients?&sort=updatedBy.first_name');
});

test('theClientColumn @regChecklistNewMedium @clientPageSA', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const clientsPage = new ClientPageSA(page);
    const pageTitle = page.locator('.section__title');
    const clientColumnValue = page.locator('.client-column-link >> nth=0');
    const clientEditButton = page.locator('#client-view-edit');
    console.log('clientPageSA The Client Column');
    await clientsPage.clicktractsFilterClick();
    await expect(clientColumnValue).toHaveAttribute('href', '/clients/265');
    await expect(clientColumnValue).toHaveText('Client 1HT(test)');
    await clientColumnValue.click();
    await expect(page).toHaveURL('/clients/265');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText('Client 1HT(test)');
    await expect(clientEditButton).toBeVisible();
});

test('theEmailColumn @regChecklistNewLow @clientPageSA', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const clientsPage = new ClientPageSA(page);
    const emailColumnValue = page.locator('.mat-column-email >> nth=1');
    const tooltip = page.locator('.mat-tooltip');
    console.log('clientPageSA The Email Column');
    await clientsPage.clicktractsFilterClick();
    await expect(emailColumnValue).toHaveText('iryna.nema+1111@mobindustry.net ');
    await emailColumnValue.hover();
    await expect(tooltip).toBeVisible();
    await expect(tooltip).toHaveText('iryna.nema+1111@mobindustry.net');
});

test('theStatusColumn @regChecklistNewMedium @clientPageSA', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const clientsPage = new ClientPageSA(page);
    const activeStatus = page.locator('.active >> nth=0');
    const inactiveStatus = page.locator('.inactive >> nth=0');
    const deactivatedStatus = page.locator('.deactivated >> nth=0');
    console.log('clientPageSA The Status Column');
    await clientsPage.clicktractsFilterClick();
    await expect(activeStatus).toBeVisible();
    await expect(activeStatus).toHaveText('Active');
    await expect(activeStatus).toHaveCSS('color', 'rgb(92, 168, 8)');
    await expect(inactiveStatus).toBeVisible();
    await expect(inactiveStatus).toHaveText('Inactive');
    await expect(inactiveStatus).toHaveCSS('color', 'rgb(255, 22, 66)');
    await clientsPage.statusFilterClick();
    await expect(deactivatedStatus).toBeVisible();
    await expect(deactivatedStatus).toHaveText('Deactivated');
    await expect(deactivatedStatus).toHaveCSS('color', 'rgb(20, 35, 54)');
});

test('theClicktractsColumn @regChecklistNewLow @clientPageSA', async ({ page }) => {
    const clientsPage = new ClientPageSA(page);
    const clicktractsValue = page.locator('.mat-column-htAccess >> nth=1');
    console.log('clientPageSA The Clicktracts Column');
    await clientsPage.clicktractsFilterClick();
    await expect(clicktractsValue).toHaveText('Yes');
    await expect(clicktractsValue).toHaveCSS('color', 'rgb(92, 168, 8)');
    await clientsPage.clicktractsFilterClick();
    await expect(clicktractsValue).toHaveText('No');
    await expect(clicktractsValue).toHaveCSS('color', 'rgb(20, 35, 54)');
});

test('theCreatedColumn @regChecklistNewLow @clientPageSA', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const clientsPage = new ClientPageSA(page);
    const createdColumnValue = page.locator('.mat-column-created >> nth=2');
    console.log('clientPageSA The Created Column');
    await clientsPage.clicktractsFilterClick();
    await expect(createdColumnValue).toHaveText(' 01/28/20 ');
});

test('theCreatedByColumn @regChecklistNewLow @clientPageSA', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const clientsPage = new ClientPageSA(page);
    const createdByColumnValue = page.locator('.mat-column-createdBy >> nth=2');
    console.log('clientPageSA The Created By Column');
    await clientsPage.clicktractsFilterClick();
    await expect(createdByColumnValue).toHaveText(' sAdmin1 sAdmin ');
});

test('theEditedColumn @regChecklistNewLow @clientPageSA', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const clientsPage = new ClientPageSA(page);
    const editedColumnValue = page.locator('.mat-column-edited >> nth=2');
    console.log('clientPageSA The Edited Column');
    await clientsPage.clicktractsFilterClick();
    await expect(editedColumnValue).toHaveText('01/11/21 ');
});

test('theEditedByColumn @regChecklistNewLow @clientPageSA', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const clientsPage = new ClientPageSA(page);
    const editedByColumnValue = page.locator('.mat-column-editedBy >> nth=2');
    console.log('clientPageSA The Edited By Column');
    await clientsPage.clicktractsFilterClick();
    await expect(editedByColumnValue).toHaveText(' Ramon Rhymes ');
});

test('validationOfTheThreeDotsMenu @regChecklistNewMedium @clientPageSA', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const clientsPage = new ClientPageSA(page);
    const threeDotsMenu = page.locator('.action-list');
    const threeDotsMenuEditButton = page.locator('.action-edit');
    const threeDotsMenuDeleteButton = page.locator('.action-remove');
    console.log('clientPageSA Validation Of The Three Dots Menu');
    await clientsPage.statusFilterClick();
    await clientsPage.statusFilterClick();
    await clientsPage.threeDotsMenuClick();
    await expect(threeDotsMenu).toBeVisible();
    await expect(threeDotsMenuEditButton).toBeVisible();
    await expect(threeDotsMenuDeleteButton).toBeVisible();
});

test('displayingTheEditButtonThreeDotsMenu @regChecklistNewMedium @clientPageSA', async ({ page }) => {
    const clientsPage = new ClientPageSA(page);
    const threeDotsMenuEditButton = page.locator('.action-edit');
    console.log('clientPageSA Displaying The Edit Button Three Dots Menu');
    await clientsPage.statusFilterClick();
    await clientsPage.threeDotsMenuClick();
    await expect(threeDotsMenuEditButton).toBeVisible();
    await clientsPage.threeDotsMenuCloseClick();
    await clientsPage.statusFilterClick();
    await clientsPage.threeDotsMenuClick();
    await expect(threeDotsMenuEditButton).toBeVisible();
    await clientsPage.threeDotsMenuCloseClick();
    await clientsPage.clicktractsFilterClick();
    await clientsPage.threeDotsMenuClick();
    await expect(threeDotsMenuEditButton).toBeVisible();
});

test('displayingTheDeleteButtonThreeDotsMenu @regChecklistNewHigh @clientPageSA', async ({ page }) => {
    const clientsPage = new ClientPageSA(page);
    const threeDotsMenuDeleteButton = page.locator('.action-remove');
    console.log('clientPageSA Displaying The Delete Button Three Dots Menu');
    await clientsPage.statusFilterClick();
    await clientsPage.threeDotsMenuClick();
    await expect(threeDotsMenuDeleteButton).toBeHidden();
    await clientsPage.threeDotsMenuCloseClick();
    await clientsPage.statusFilterClick();
    await clientsPage.threeDotsMenuClick();
    await expect(threeDotsMenuDeleteButton).toBeVisible();
    await clientsPage.threeDotsMenuCloseClick();
    await clientsPage.clicktractsFilterClick();
    await clientsPage.threeDotsMenuClick();
    await expect(threeDotsMenuDeleteButton).toBeHidden();
});

test('validationOfTheDeleteButtonInThreeDotsMenu @regChecklistNewHigh @clientPageSA', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const clientsPage = new ClientPageSA(page);
    const threeDotsMenuDeletePopup = page.locator('.mat-dialog-container');
    const threeDotsMenuDeletePopupText = page.locator('.modal-header');
    const threeDotsMenuDeletePopupCancelButton = page.locator('#confirm-modal-cancel');
    const threeDotsMenuDeletePopupDeleteButton = page.locator('#confirm-modal-delete');
    console.log('clientPageSA Validation Of The Delete Button In Three Dots Menu');
    await clientsPage.statusFilterClick();
    await clientsPage.statusFilterClick();
    await clientsPage.threeDotsMenuDeleteButtonClick();
    await expect(threeDotsMenuDeletePopup).toBeVisible();
    await expect(threeDotsMenuDeletePopupText).toBeVisible();
    await expect(threeDotsMenuDeletePopupText).toHaveText(' Are you sure you want to delete this Account?');
    await expect(threeDotsMenuDeletePopupCancelButton).toBeVisible();
    await expect(threeDotsMenuDeletePopupDeleteButton).toBeVisible();
});

test('validationOfTheCancelButtonOnTheDeletePopup @regChecklistNewLow @clientPageSA', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const clientsPage = new ClientPageSA(page);
    const pageTitle = page.locator('.section__title');
    const threeDotsMenuDeletePopup = page.locator('.mat-dialog-container');
    const addClientButton = page.locator('#clients-list-add-client');
    console.log('clientPageSA Validation Of The Cancel Button On The Delete Popup');
    await clientsPage.statusFilterClick();
    await clientsPage.statusFilterClick();
    await clientsPage.threeDotsMenuDeleteButtonClick();
    await clientsPage.threeDotsMenuDeletePopupCancelButtonClick();
    await expect(threeDotsMenuDeletePopup).toBeHidden();
    await expect(page).toHaveURL('/clients?&sort=status');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText('Client');
    await expect(addClientButton).toBeVisible();
});

test('validationOfTheDeleteButtonOnTheDeletePopup @regChecklistNewHigh @clientPageSA', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const clientsPage = new ClientPageSA(page);
    const search = new Search(page);
    const editClient = new EditClientSA(page);
    const clientLink = page.locator('.client-column-link >> nth=0');
    const statusColumnValue = page.locator('.mat-column-status >> nth=1');
    console.log('clientPageSA Validation Of The Delete Button On The Delete Popup');
    await clientsPage.editedFilterClick();
    const getClientLinkValue = await clientLink.textContent();
    if (!getClientLinkValue.includes('test100testAutotestClient')) {
        await search.searchField.fill('test100testAutotestClient');
        await search.searchButtonClick();
        await search.clientToggleClick();
    }
    await clientsPage.threeDotsMenuDeleteButtonClick();
    await clientsPage.threeDotsMenuDeletePopupDeleteButtonClick();
    if (!getClientLinkValue.includes('test100testAutotestClient')) {
        await search.searchField.fill('test100testAutotestClient');
        await search.searchButtonClick();
        await search.clientToggleClick();
    }
    await expect(statusColumnValue).toHaveText('Deactivated');
    await page.goto('/clients/edit-client/406');
    await editClient.reactivateButtonClick();
    await editClient.saveChangesButtonClick();
});

test('paginationOnTheClientPageSA @regChecklistNewLow @clientPageSA', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const pagination = new Pagination(page);
    console.log('clientPageSA Pagination On The Client Page SA');
    await pagination.paginationLastPageClick();
    const lastPageReturnValue = await page.url();
    await expect(page).toHaveURL(lastPageReturnValue);
    await pagination.paginationPrevPageClick();
    const prevPageReturnValue = await page.url();
    await expect(page).toHaveURL(prevPageReturnValue);
    await pagination.paginationFirstPageClick();
    await expect(page).toHaveURL('/clients?&sort=name');
    await pagination.paginationPage2Click();
    await expect(page).toHaveURL('/clients?page=2&sort=name');
    await pagination.paginationPage1Click();
    await expect(page).toHaveURL('/clients?&sort=name');
});

test('validationOfTheClientNameField @regChecklistNewMedium @newClientSA', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const newClient = new NewClientPageSA(page);
    const clientNameField = page.locator('#client-details-client-name input');
    const clientNameFieldError = page.locator('#client-details-client-name mat-error');
    console.log('newClientSA Validation Of The Client Name Field');
    await page.goto('/clients/add-client');
    await expect(clientNameField).toBeVisible();
    await expect(clientNameField).toHaveAttribute('placeholder', 'Client Name');
    await newClient.clientNameField.fill('');
    await newClient.createButtonForErrors();
    await expect(clientNameFieldError).toHaveText(' Please fill in this field ');
    await newClient.clientNameField.fill('s');
    await newClient.createButtonForErrors();
    await expect(clientNameFieldError).toHaveText(' Client Name must be at least 2 characters long ');
});

test('validationOfTheEmailField @regChecklistNewMedium @newClientSA', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const newClient = new NewClientPageSA(page);
    const emailField = page.locator('#client-details-email input');
    const emailFieldError = page.locator('#client-details-email mat-error');
    console.log('newClientSA Validation Of The Email Field');
    await page.goto('/clients/add-client');
    await expect(emailField).toBeVisible();
    await expect(emailField).toHaveAttribute('pattern', '[a-zA-Z0-9_.\\+-]{1,}@[0-9a-zA-Z.-]{1,}[.]{1}[a-zA-Z]{2,}');
    await expect(emailField).toHaveAttribute('placeholder', 'Email');
    await newClient.emailField.fill('');
    await newClient.createButtonForErrors();
    await expect(emailFieldError).toHaveText(' Please fill in this field ');
    await newClient.emailField.fill('test');
    await newClient.createButtonForErrors();
    await expect(emailFieldError).toHaveText(' Please enter a valid email address ');
    await newClient.clientNameField.fill('testTest');
    await newClient.emailField.fill('alexey.banshykov@mobindustry.net');
    await newClient.firstNameField.fill('test');
    await newClient.lastNameField.fill('Test');
    await newClient.selectIndustryAction();
    await newClient.createButtonForErrors();
    await expect(emailFieldError).toHaveText(' Please use a unique email address ');
});

test('validationOfTheFirstNameField @regChecklistNewMedium @newClientSA', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const newClient = new NewClientPageSA(page);
    const firstNameField = page.locator('#client-details-first-name input');
    const firstNameFieldError = page.locator('#client-details-first-name mat-error');
    console.log('newClientSA Validation Of The First Name Field');
    await page.goto('/clients/add-client');
    await expect(firstNameField).toBeVisible();
    await expect(firstNameField).toHaveAttribute('placeholder', 'First Name');
    await newClient.firstNameField.fill('');
    await newClient.createButtonForErrors();
    await expect(firstNameFieldError).toHaveText(' Please fill in this field ');
    await newClient.firstNameField.fill('s');
    await newClient.createButtonForErrors();
    await expect(firstNameFieldError).toHaveText(' First Name must be at least 2 characters long ');
});

test('validationOfTheLastNameField @regChecklistNewMedium @newClientSA', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const newClient = new NewClientPageSA(page);
    const lastNameField = page.locator('#client-details-last-name input');
    const lastNameFieldError = page.locator('#client-details-last-name mat-error');
    console.log('newClientSA Validation Of The Last Name Field');
    await page.goto('/clients/add-client');
    await expect(lastNameField).toBeVisible();
    await expect(lastNameField).toHaveAttribute('placeholder', 'Last Name');
    await newClient.lastNameField.fill('');
    await newClient.createButtonForErrors();
    await expect(lastNameFieldError).toHaveText(' Please fill in this field ');
    await newClient.lastNameField.fill('s');
    await newClient.createButtonForErrors();
    await expect(lastNameFieldError).toHaveText(' Last Name must be at least 2 characters long ');
});

test('validationOfTheSelectIndustryField @regChecklistNewMedium @newClientSA', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const newClient = new NewClientPageSA(page);
    const selectIndustryField = page.locator('#client-details-select-industry mat-select');
    const selectIndustryFieldError = page.locator('#client-details-select-industry mat-error');
    const selectIndustryPanel = page.locator('.mat-select-panel');
    console.log('newClientSA Validation Of The Select Industry Field');
    await page.goto('/clients/add-client');
    await expect(selectIndustryField).toBeVisible();
    await expect(selectIndustryField).toHaveAttribute('placeholder', 'Select Industry');
    await expect(selectIndustryField).toHaveAttribute('role', 'listbox');
    await expect(selectIndustryField).toHaveText('Select Industry');
    await newClient.createButtonForErrors();
    await expect(selectIndustryFieldError).toHaveText(' Please fill in this field ');
    await newClient.selectIndustryField.click();
    if (await selectIndustryPanel.isHidden()) {
        newClient.selectIndustryField.click();
        page.waitForSelector('.mat-select-panel');
    }
    await page.waitForSelector('.mat-select-panel');
    await expect(selectIndustryPanel).toBeVisible();
    await newClient.selectIndustryValue.click();
    await selectIndustryPanel.isHidden();
    await expect(selectIndustryField).toHaveText('Test Preparation');
});

test('validationOfTheStatusField @regChecklistNewLow @newClientSA', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const statusField = page.locator('#client-details-status .mat-form-field-infix');
    console.log('newClientSA Validation Of The Status Field');
    await page.goto('/clients/add-client');
    await expect(statusField).toBeVisible();
    await expect(statusField).toHaveText('InactiveStatus');
});

test('validationOfTheCompnayAdressField @regChecklistNewLow @newClientSA', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const clientNameField = page.locator('#client-details-company-address input');
    console.log('newClientSA Validation Of The Company Adress Field');
    await page.goto('/clients/add-client');
    await expect(clientNameField).toBeVisible();
    await expect(clientNameField).toHaveAttribute('placeholder', 'Company Address');
});

test('displayingSubscriptionDetailsBlock @regChecklistNewHigh @newClientSA', async ({ page }) => {
    const newClient = new NewClientPageSA(page);
    const subscriptionDetailsBlock = page.locator('app-subscriptions');
    const monthlyTab = page.locator('.mat-tab-label >> text=MONTHLY');
    const yearlyTab = page.locator('.mat-tab-label >> text=YEARLY');
    const customTab = page.locator('.mat-tab-label >> text=CUSTOM');
    const productPackage = page.locator('.subscription-item >> nth=4');
    console.log('newClientSA Displaying Subscription Details Block');
    await page.goto('/clients/add-client');
    await expect(subscriptionDetailsBlock).toBeVisible();
    await expect(monthlyTab).toBeVisible();
    await expect(yearlyTab).toBeVisible();
    await expect(customTab).toBeVisible();
    await newClient.monthlyTabClick();
    await expect(productPackage).toBeVisible();
    await newClient.productPackage.click();
    await expect(productPackage).toHaveClass('subscription-item selected');
});

test('validationOfTheCancelButton @regChecklistNewLow @newClientSA', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const newClient = new NewClientPageSA(page);
    const addClientButton = page.locator('#clients-list-add-client');
    console.log('newClientSA Validation Of The Cancel Button');
    await page.goto('/clients/add-client');
    await newClient.cancelButtonClick();
    await expect(page).toHaveURL('/clients?&sort=name');
    await expect(addClientButton).toBeVisible();
});



test('valiadaionForTheCreateButtonIfFieldsAreInvalid @regChecklistNewMedium @newClientSA', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const newClient = new NewClientPageSA(page);
    const clientNameFieldError = page.locator('#client-details-client-name mat-error');
    const emailFieldError = page.locator('#client-details-email mat-error');
    const firstNameFieldError = page.locator('#client-details-first-name mat-error');
    const lastNameFieldError = page.locator('#client-details-last-name mat-error');
    const selectIndustryFieldError = page.locator('#client-details-select-industry mat-error');
    console.log('newClientSA Valiadaion For The Create Button If Fields Are Invalid');
    await page.goto('/clients/add-client');
    await newClient.createButtonForErrors();
    await expect(clientNameFieldError).toBeVisible();
    await expect(clientNameFieldError).toHaveText(' Please fill in this field ');
    await expect(emailFieldError).toBeVisible();
    await expect(emailFieldError).toHaveText(' Please fill in this field ');
    await expect(firstNameFieldError).toBeVisible();
    await expect(firstNameFieldError).toHaveText(' Please fill in this field ');
    await expect(lastNameFieldError).toBeVisible();
    await expect(lastNameFieldError).toHaveText(' Please fill in this field ');
    await expect(selectIndustryFieldError).toBeVisible();
    await expect(selectIndustryFieldError).toHaveText(' Please fill in this field ');
});