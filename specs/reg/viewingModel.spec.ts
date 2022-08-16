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

test('columnsInTheTable @regChecklistNewLow @viewingModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const termColumn = page.locator('.mat-column-term >> nth=0');
    const descriptionColumn = page.locator('.mat-column-description >> nth=0');
    const weightColumn = page.locator('.mat-column-weight >> nth=0');
    const answerColumn = page.locator('.mat-column-answer >> nth=0');
    console.log('viewingModelPage Columns In The Table');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/1724/terms?&sort=term');
    await expect(termColumn).toBeVisible();
    await expect(termColumn).toHaveText(' Term ');
    await expect(termColumn).toHaveAttribute('role', 'columnheader');
    await expect(descriptionColumn).toBeVisible();
    await expect(descriptionColumn).toHaveText(' Description ');
    await expect(descriptionColumn).toHaveAttribute('role', 'columnheader');
    await expect(weightColumn).toBeVisible();
    await expect(weightColumn).toHaveText(' Weight ');
    await expect(weightColumn).toHaveAttribute('role', 'columnheader');
    await expect(answerColumn).toBeVisible();
    await expect(answerColumn).toHaveText(' Answer ');
    await expect(answerColumn).toHaveAttribute('role', 'columnheader');
});

test('displayingModelName @regChecklistNewLow @viewingModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const viewingModel = new ViewingModelPage(page);
    const pageTitle = page.locator('.section__title');
    const modelName = page.locator('#form-control-name textarea');
    console.log('viewingModelPage Displaying Model Name');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/1724/terms?&sort=term');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText(' test100test100DoNotRemove19 ');
    await viewingModel.editModelButtonClick();
    await expect(modelName).toHaveValue('test100test100DoNotRemove19');
});

test('validationPencilButton @regChecklistNewHigh @viewingModelPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const viewingModel = new ViewingModelPage(page);
    const pageTitle = page.locator('.section__title');
    const modelName = page.locator('#form-control-name textarea');
    console.log('viewingModelPage Validation Pencil Button');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/1724/terms?&sort=term');
    await viewingModel.editModelButtonClick();
    await expect(page).toHaveURL('/models/edit-model/1724');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText(' Edit Model ');
    await expect(modelName).toHaveValue('test100test100DoNotRemove19');
});

test('displayingClientNameForSA @regChecklistNewMedium @viewingModelPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const clientName = page.locator('.client-name');
    console.log('viewingModelPage Displaying Client Name For SA');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/1724/terms?&sort=term');
    await expect(clientName).toBeVisible();
    await expect(clientName).toHaveText(' Client: Client 1HT(test)');
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/1724/terms?&sort=term');
    await expect(clientName).toBeHidden();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/models/1724/terms?&sort=term');
    await expect(clientName).toBeHidden();
});

test('exportButton @regChecklistNewMedium @viewingModelPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const viewingModel = new ViewingModelPage(page);
    const exportButton = page.locator('#terms-list-export');
    console.log('viewingModelPage Export Button');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/1724/terms?&sort=term');
    await expect(exportButton).toBeVisible();
    const [ download ] = await Promise.all([
        page.waitForEvent('download'),
    await viewingModel.exportButtonClick()
    ]);
    await expect(await download.suggestedFilename()).toContain('test100test100DoNotRemove19.csv');
    await download.delete();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/1724/terms?&sort=term');
    await expect(exportButton).toBeVisible();
    const [ download1 ] = await Promise.all([
        page.waitForEvent('download'),
    await viewingModel.exportButtonClick()
    ]);
    await expect(await download1.suggestedFilename()).toContain('test100test100DoNotRemove19.csv');
    await download1.delete();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/models/1724/terms?&sort=term');
    await expect(exportButton).toBeHidden();
});

test('addTermButton @regChecklistNewHigh @viewingModelPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const viewingModel = new ViewingModelPage(page);
    const addTermButton = page.locator('#terms-list-add-term');
    const pageTitle = page.locator('.section__title');
    const addAnotherTermButton = page.locator('#term-detail-add-another-term');
    console.log('viewingModelPage Add Term Button');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/1724/terms?&sort=term');
    await expect(addTermButton).toBeVisible();
    await expect(addTermButton).toHaveCSS('background-color', 'rgb(69, 119, 210)');
    await viewingModel.addTermButtonClick();
    await expect(page).toHaveURL('/models/1724/terms/add-term');
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText('New Term');
    await expect(addAnotherTermButton).toBeVisible();
});

test('sortingNearTheColumns @regChecklistNewLow @viewingModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const viewingModel = new ViewingModelPage(page);
    const termField = page.locator('.mat-column-term >> nth=1');
    const descriptionField = page.locator('.mat-column-description >> nth=1');
    const weightField = page.locator('.mat-column-weight >> nth=1');
    console.log('viewingModelPage Sorting Near The Columns');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/1724/terms?&sort=term');
    await viewingModel.termFilterClick();
    await expect(page).toHaveURL('/models/1724/terms?&sort=-term');
    await expect(termField).toHaveText('term3');
    await viewingModel.termFilterClick();
    await expect(page).toHaveURL('/models/1724/terms?&sort=term');
    await expect(termField).toHaveText('term1');
    await viewingModel.descriptionFilterClick();
    await expect(page).toHaveURL('/models/1724/terms?&sort=-description');
    await expect(descriptionField).toHaveText('yo');
    await viewingModel.descriptionFilterClick();
    await expect(page).toHaveURL('/models/1724/terms?&sort=description');
    await expect(descriptionField).toHaveText('da');
    await viewingModel.weightFilterClick();
    await expect(page).toHaveURL('/models/1724/terms?&sort=-weight');
    await expect(weightField).toHaveText('7');
    await viewingModel.weightFilterClick();
    await expect(page).toHaveURL('/models/1724/terms?&sort=weight');
    await expect(weightField).toHaveText('3');
});

test('termColumnHyperlink @regChecklistNewMedium @viewingModelPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const termField = page.locator('.mat-column-term .td__link >> nth=0');
    console.log('viewingModelPage Term Column Hyperlink');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/1724/terms?&sort=term');
    await expect(termField).toHaveText('term1');
    await expect(termField).toHaveAttribute('href', '/models/1724/terms/edit-term/1995');
    await termField.click();
    await page.waitForSelector('#term-detail-save');
    await expect(page).toHaveURL('/models/1724/terms/edit-term/1995');
});

test('descriptionColumn @regChecklistNewLow @viewingModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const descriptionField = page.locator('.mat-column-description >> nth=1');
    console.log('viewingModelPage Description Column');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/1724/terms?&sort=term');
    await expect(descriptionField).toHaveText('da');
    await expect(descriptionField).toHaveAttribute('role', 'gridcell');
});

test('weightColumn @regChecklistNewLow @viewingModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const weightField = page.locator('.mat-column-weight >> nth=1');
    console.log('viewingModelPage Weight Column');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/1724/terms?&sort=term');
    await expect(weightField).toHaveText('3');
    await expect(weightField).toHaveAttribute('role', 'gridcell');
});

test('answerColumn @regChecklistNewLow @viewingModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const answerColumn = page.locator('.mat-column-answer >> nth=1');
    const answer0 = page.locator('.answer >> nth=0');
    const answer1 = page.locator('.answer >> nth=1');
    console.log('viewingModelPage Answer Column');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/1724/terms?&sort=term');
    await expect(answerColumn).toHaveAttribute('role', 'gridcell');
    await expect(answer0).toHaveText('-1.5  yes ');
    await expect(answer1).toHaveText('1.5  no ');
});

test('editButtonThreeDotsMenu @regChecklistNewHigh @viewingModelPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const viewingModel = new ViewingModelPage(page);
    const editButton = page.locator('.action-edit');
    const saveChangesButton = page.locator('#term-detail-save');
    console.log('viewingModelPage Edit Button Three Dots Menu');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/1724/terms?&sort=term');
    await viewingModel.threeDotsMenuClick();
    await expect(editButton).toBeVisible();
    await viewingModel.threeDotsMenuEditButtonClick();
    await expect(page).toHaveURL('/models/1724/terms/edit-term/1995');
    await expect(saveChangesButton).toBeVisible();
});

test('archiveButtonThreeDotsMenu @regChecklistNewHigh @viewingModelPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newTerm = new NewEditTermPage(page);
    const userBar = new UserBar(page);
    const viewingModel = new ViewingModelPage(page);
    const archiveButton = page.locator('.action-archive');
    const archivePopup = page.locator('.mat-dialog-container');
    const archivePopupText = page.locator('.modal-header');
    const archivePopupCancelButton = page.locator('#confirm-active-cancel');
    const archivePopupArchiveButton = page.locator('#confirm-active-archive');
    const descriptionColumn = page.locator('.mat-column-description >> text=autotest');
    const reactivateButton = page.locator('.action-active');
    const deleteButton = page.locator('.action-remove');
    console.log('viewingModelPage Archive Button Three Dots Menu');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/1724/terms?&sort=term');
    await viewingModel.addTermButtonClick();
    await newTerm.termFieldFill(Helpers.generateRandomString());
    await newTerm.manualInputWeightField.fill('5');
    await newTerm.descriptionFieldFill();
    await newTerm.questionFieldFill(Helpers.generateRandomString());
    await newTerm.answerFieldFill(Helpers.generateRandomString());
    await newTerm.manualInputPointsFieldFill(Helpers.generateRandomNumberNewTermPoints());
    await newTerm.saveButtonClick();
    await page.waitForTimeout(1500);
    await expect(descriptionColumn).toBeVisible();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/models/1724/terms?&sort=term');
    await expect(descriptionColumn).toBeVisible();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/1724/terms?&sort=term');
    await viewingModel.threeDotsMenuClick();
    await expect(archiveButton).toBeVisible();
    await viewingModel.threeDotsMenuArchiveButtonClick();
    await expect(archivePopup).toBeVisible();
    await expect(archivePopupText).toBeVisible();
    await expect(archivePopupText).toHaveText(' Are you sure you want to archive this Term? Archived Terms will not be available for Deal review.');
    await expect(archivePopupCancelButton).toBeVisible();
    await expect(archivePopupArchiveButton).toBeVisible();
    await viewingModel.archivePopupArchiveButtonClick();
    await expect(descriptionColumn).toBeHidden();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/models/1724/terms?&sort=term');
    await expect(descriptionColumn).toBeHidden();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/1724/terms?&sort=term');
    await expect(descriptionColumn).toBeVisible();
    await viewingModel.threeDotsMenuClick();
    await expect(reactivateButton).toBeVisible();
    await expect(deleteButton).toBeVisible();
    await viewingModel.threeDotsMenuDeleteButtonClick();
    await viewingModel.deletePopupDeleteClick();
});

test('archivePopupCancelButton @regChecklistNewLow @viewingModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const viewingModel = new ViewingModelPage(page);
    const archivePopup = page.locator('.mat-dialog-container');
    const archivePopupText = page.locator('.modal-header');
    console.log('viewingModelPage Archive Popup Cancel Button');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/1724/terms?&sort=term');
    await viewingModel.threeDotsMenuClick();
    await viewingModel.threeDotsMenuArchiveButtonClick();
    await viewingModel.archivePopupCancelButtonClick();
    await expect(archivePopup).toBeHidden();
    await expect(archivePopupText).toBeHidden();
});

test('archiveButtonOnArchivePopupForAA/SA @regChecklistNewMedium @viewingModelPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newTerm = new NewEditTermPage(page);
    const userBar = new UserBar(page);
    const viewingModel = new ViewingModelPage(page);
    const descriptionColumn = page.locator('.mat-column-description >> text=autotest');
    const termColumnLink = page.locator('.mat-column-term .td__link >> nth=0');
    console.log('viewingModelPage Archive Button On Archive Popup For AA/SA');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/1724/terms?&sort=term');
    await viewingModel.addTermButtonClick();
    await newTerm.termFieldFill(Helpers.generateRandomString());
    await newTerm.manualInputWeightField.fill('5');
    await newTerm.descriptionFieldFill();
    await newTerm.questionFieldFill(Helpers.generateRandomString());
    await newTerm.answerFieldFill(Helpers.generateRandomString());
    await newTerm.manualInputPointsFieldFill(Helpers.generateRandomNumberNewTermPoints());
    await newTerm.saveButtonClick();
    await page.waitForTimeout(1500);
    await expect(descriptionColumn).toBeVisible();
    await viewingModel.threeDotsMenuClick();
    await viewingModel.threeDotsMenuArchiveButtonClick();
    await viewingModel.archivePopupArchiveButtonClick();
    await expect(descriptionColumn).toBeHidden();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await page.waitForSelector('#login-sign-in');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/1724/terms?&sort=term');
    await expect(descriptionColumn).toBeVisible();
    await viewingModel.threeDotsMenuClick();
    await viewingModel.threeDotsMenuDeleteButtonClick();
    await viewingModel.deletePopupDeleteClick();
    await viewingModel.addTermButtonClick();
    await newTerm.termFieldFill(Helpers.generateRandomString());
    await newTerm.manualInputWeightField.fill('5');
    await newTerm.descriptionFieldFill();
    await newTerm.questionFieldFill(Helpers.generateRandomString());
    await newTerm.answerFieldFill(Helpers.generateRandomString());
    await newTerm.manualInputPointsFieldFill(Helpers.generateRandomNumberNewTermPoints());
    await newTerm.saveButtonClick();
    await page.waitForTimeout(1500);
    await viewingModel.threeDotsMenuClick();
    await viewingModel.threeDotsMenuArchiveButtonClick();
    await viewingModel.archivePopupArchiveButtonClick();
    await expect(descriptionColumn).toBeVisible();
    await expect(termColumnLink).toHaveCSS('color', 'rgb(128, 136, 146)');
    await viewingModel.threeDotsMenuClick();
    await viewingModel.threeDotsMenuDeleteButtonClick();
    await viewingModel.deletePopupDeleteClick();
});

test('deleteButtonOnDeletePopupForSA @regChecklistNewHigh @viewingModelPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newTerm = new NewEditTermPage(page);
    const viewingModel = new ViewingModelPage(page);
    const deletePopup = page.locator('.mat-dialog-container');
    const deletePopupText = page.locator('.modal-header');
    const deletePopupCancelButton = page.locator('#confirm-modal-cancel');
    const deletePopupDeleteButton = page.locator('#confirm-modal-delete');
    const descriptionColumn = page.locator('.mat-column-description >> text=autotest');
    const deleteButton = page.locator('.action-remove');
    console.log('viewingModelPage Delete Button On Delete Popup For SA');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/1724/terms?&sort=term');
    await viewingModel.addTermButtonClick();
    await newTerm.termFieldFill(Helpers.generateRandomString());
    await newTerm.manualInputWeightField.fill('5');
    await newTerm.descriptionFieldFill();
    await newTerm.questionFieldFill(Helpers.generateRandomString());
    await newTerm.answerFieldFill(Helpers.generateRandomString());
    await newTerm.manualInputPointsFieldFill(Helpers.generateRandomNumberNewTermPoints());
    await newTerm.saveButtonClick();
    await page.waitForTimeout(1500);
    await viewingModel.threeDotsMenuClick();
    await viewingModel.threeDotsMenuArchiveButtonClick();
    await viewingModel.archivePopupArchiveButtonClick();
    await page.waitForTimeout(1000);
    await viewingModel.threeDotsMenuClick();
    await expect(deleteButton).toBeVisible();
    await viewingModel.threeDotsMenuDeleteButtonClick();
    await expect(deletePopup).toBeVisible();
    await expect(deletePopupText).toBeVisible();
    await expect(deletePopupText).toHaveText(' Are you sure you want to delete this Term?');
    await expect(deletePopupCancelButton).toBeVisible();
    await expect(deletePopupDeleteButton).toBeVisible();
    await viewingModel.deletePopupDeleteClick();
    await expect(descriptionColumn).toBeHidden();
});

test('cancelButtonOnDeletePopupForSA @regChecklistNewLow @viewingModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newTerm = new NewEditTermPage(page);
    const viewingModel = new ViewingModelPage(page);
    const deletePopup = page.locator('.mat-dialog-container');
    const deletePopupText = page.locator('.modal-header');
    const deletePopupCancelButton = page.locator('#confirm-modal-cancel');
    const deletePopupDeleteButton = page.locator('#confirm-modal-delete');
    const descriptionColumn = page.locator('.mat-column-description >> text=autotest');
    const deleteButton = page.locator('.action-remove');
    console.log('viewingModelPage Cancel Button On Delete Popup For SA');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/1724/terms?&sort=term');
    await viewingModel.addTermButtonClick();
    await newTerm.termFieldFill(Helpers.generateRandomString());
    await newTerm.manualInputWeightField.fill('5');
    await newTerm.descriptionFieldFill();
    await newTerm.questionFieldFill(Helpers.generateRandomString());
    await newTerm.answerFieldFill(Helpers.generateRandomString());
    await newTerm.manualInputPointsFieldFill(Helpers.generateRandomNumberNewTermPoints());
    await newTerm.saveButtonClick();
    await page.waitForTimeout(1500);
    await viewingModel.threeDotsMenuClick();
    await viewingModel.threeDotsMenuArchiveButtonClick();
    await viewingModel.archivePopupArchiveButtonClick();
    await page.waitForTimeout(1000);
    await viewingModel.threeDotsMenuClick();
    await expect(deleteButton).toBeVisible();
    await viewingModel.threeDotsMenuDeleteButtonClick();
    await viewingModel.deletePopupCancelClick();
    await expect(deletePopup).toBeHidden();
    await expect(deletePopupText).toBeHidden();
    await expect(deletePopupCancelButton).toBeHidden();
    await expect(deletePopupDeleteButton).toBeHidden();
    await expect(descriptionColumn).toBeVisible();
    await viewingModel.threeDotsMenuClick();
    await viewingModel.threeDotsMenuDeleteButtonClick();
    await viewingModel.deletePopupDeleteClick();
});

test('deleteButtonForActiveTermThreeDotsMenu @regChecklistNewHigh @viewingModelPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const viewingModel = new ViewingModelPage(page);
    const oopsDeletePopup = page.locator('.mat-dialog-container');
    const oopsDeletePopupText = page.locator('.modal-header');
    const oopsDeletePopupCancelButton = page.locator('#confirm-modal-cancel');
    console.log('viewingModelPage Delete Button For Active Term Three Dots Menu');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/1724/terms?&sort=term');
    await viewingModel.threeDotsMenuClick();
    await viewingModel.threeDotsMenuDeleteButtonClick();
    await expect(oopsDeletePopup).toBeVisible();
    await expect(oopsDeletePopupText).toBeVisible();
    await expect(oopsDeletePopupText).toHaveText(' Oops! You must first archive a Term before deleting.');
    await expect(oopsDeletePopupCancelButton).toBeVisible();
});

test('cancelButtonOnTheOopsPopup @regChecklistNewLow @viewingModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const viewingModel = new ViewingModelPage(page);
    const oopsDeletePopup = page.locator('.mat-dialog-container');
    const oopsDeletePopupText = page.locator('.modal-header');
    const oopsDeletePopupCancelButton = page.locator('#confirm-modal-cancel');
    console.log('viewingModelPage Cancel Button On The Oops Popup');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/1724/terms?&sort=term');
    await viewingModel.threeDotsMenuClick();
    await viewingModel.threeDotsMenuDeleteButtonClick();
    await viewingModel.oopsDeletePopupCancelButtonClick();
    await expect(oopsDeletePopup).toBeHidden();
    await expect(oopsDeletePopupText).toBeHidden();
    await expect(oopsDeletePopupCancelButton).toBeHidden();
});

test('reactivateButtonThreeDotsMenuForSA @regChecklistNewHigh @viewingModelPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newTerm = new NewEditTermPage(page);
    const viewingModel = new ViewingModelPage(page);
    const archiveButton = page.locator('.action-archive');
    const termColumnLink = page.locator('.mat-column-term .td__link >> nth=0');
    console.log('viewingModelPage Reactivate Button Three Dots Menu For SA');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/1724/terms?&sort=term');
    await viewingModel.addTermButtonClick();
    await newTerm.termFieldFill(Helpers.generateRandomString());
    await newTerm.manualInputWeightField.fill('5');
    await newTerm.descriptionFieldFill();
    await newTerm.questionFieldFill(Helpers.generateRandomString());
    await newTerm.answerFieldFill(Helpers.generateRandomString());
    await newTerm.manualInputPointsFieldFill(Helpers.generateRandomNumberNewTermPoints());
    await newTerm.saveButtonClick();
    await page.waitForTimeout(1500);
    await viewingModel.threeDotsMenuClick();
    await viewingModel.threeDotsMenuArchiveButtonClick();
    await viewingModel.archivePopupArchiveButtonClick();
    await page.waitForTimeout(1000);
    await viewingModel.threeDotsMenuClick();
    await viewingModel.threeDotsMenuReactivateButtonClick();
    await page.waitForTimeout(1000);
    await expect(termColumnLink).toHaveCSS('color', 'rgb(69, 119, 210)');
    await viewingModel.threeDotsMenuClick();
    await expect(archiveButton).toBeVisible();
    await viewingModel.threeDotsMenuArchiveButtonClick();
    await viewingModel.archivePopupArchiveButtonClick();
    await page.waitForTimeout(1000);
    await viewingModel.threeDotsMenuClick();
    await viewingModel.threeDotsMenuDeleteButtonClick();
    await viewingModel.deletePopupDeleteClick();
});