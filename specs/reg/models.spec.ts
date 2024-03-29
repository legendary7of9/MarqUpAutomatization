import { test , expect } from '@playwright/test'
import { SignInPage } from '../../framework'
import { UserBar, Users } from '../../framework'
import { SideBar } from '../../framework'
import { Pagination } from '../../framework'
import { ModelPage } from '../../framework'
import { NewEditCopyModelPage } from '../../framework'
import { Helpers } from '../../lib/helpers/randomCharactersAndDigits.preload'

// [webkit] › specs\reg\models.spec.ts:91:1 › paginationOnTheModelsPage @regChecklistNewLow @modelsPage 
// [chrome] › specs\reg\models.spec.ts:91:1 › paginationOnTheModelsPage @regChecklistNewLow @modelsPage 
// [webkit] › specs\reg\models.spec.ts:262:1 › templatesColumn @regChecklistNewLow @modelsPage
// [chrome] › specs\reg\models.spec.ts:262:1 › templatesColumn @regChecklistNewLow @modelsPage


test.beforeEach(async ({ page }) => {
    await page.goto('');
});

test('rediractionToTheModelsPage @regChecklistNewHigh @modelsPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const sideBarMenu = new SideBar(page);
    const addModelButton = page.locator('#models-list-add-model');
    console.log('modelsPage Rediraction To The Models Page');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await sideBarMenu.sideBarModelClick();
    await expect(page).toHaveURL('/models?&sort=name');
    await expect(addModelButton).toBeVisible();
    await userBar.logOutAction();
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await sideBarMenu.sideBarModelClick();
    await expect(page).toHaveURL('/models?&sort=name');
    await expect(addModelButton).toBeVisible();
    await userBar.logOutAction();
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await sideBarMenu.sideBarModelClick();
    await expect(page).toHaveURL('/models?&sort=name');
    await expect(addModelButton).toBeVisible();
});

test('sortingOnTheModelsPage @regChecklistNewLow @modelsPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const sideBarMenu = new SideBar(page);
    const model = new ModelPage(page);
    const modelNameValue1 = page.locator('.mat-column-modelName >> nth=1');
    console.log('modelsPage Sorting On The Models Page');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await sideBarMenu.sideBarModelClick();
    await expect(page).toHaveURL('/models?&sort=name');
    await expect(modelNameValue1).toHaveText('1autotestCopyExistModel');
    await model.modelFilterClick();
    await expect(page).toHaveURL('/models?&sort=-name');
    await model.modelTypeFilterClick();
    await expect(page).toHaveURL('/models?&sort=-model_type.name');
    await model.modelTypeFilterClick();
    await expect(page).toHaveURL('/models?&sort=model_type.name');
    await model.templatesFilterClick();
    await expect(page).toHaveURL('/models?&sort=-templatesCount');
    await model.templatesFilterClick();
    await expect(page).toHaveURL('/models?&sort=templatesCount');
    await model.descriptionFilterClick();
    await expect(page).toHaveURL('/models?&sort=-description');
    await model.descriptionFilterClick();
    await expect(page).toHaveURL('/models?&sort=description');
    await model.statusFilterClick();
    await expect(page).toHaveURL('/models?&sort=-is_archive');
    await model.statusFilterClick();
    await expect(page).toHaveURL('/models?&sort=is_archive');
    await model.dealsFilterClick();
    await expect(page).toHaveURL('/models?&sort=-dealCount');
    await model.dealsFilterClick();
    await expect(page).toHaveURL('/models?&sort=dealCount');
    await model.createFilterClick();
    await expect(page).toHaveURL('/models?&sort=-created_at');
    await model.createFilterClick();
    await expect(page).toHaveURL('/models?&sort=created_at');
    await model.editedFilterClick();
    await expect(page).toHaveURL('/models?&sort=-updated_at');
    await model.editedFilterClick();
    await expect(page).toHaveURL('/models?&sort=updated_at');
});

test('paginationOnTheModelsPage @regChecklistNewLow @modelsPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const sideBarMenu = new SideBar(page);
    const pagination = new Pagination(page);
    console.log('modelsPage Pagination On The Models Page');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await sideBarMenu.sideBarModelClick();
    await pagination.paginationLastPageClick();
    const lastPageReturnValue = await page.url();
    await expect(page).toHaveURL(lastPageReturnValue);
    await pagination.paginationPrevPageClick();
    const prevPageReturnValue = await page.url();
    await expect(page).toHaveURL(prevPageReturnValue);
    await pagination.paginationNextPageClick();
    const nextPageReturnValue = await page.url();
    await expect(page).toHaveURL(nextPageReturnValue);
    await pagination.paginationFirstPageClick();
    await expect(page).toHaveURL('/models?&sort=name');
    await pagination.paginationPage2Click();
    await expect(page).toHaveURL('/models?page=2&sort=name');
    await pagination.paginationPage1Click();
    await expect(page).toHaveURL('/models?&sort=name');
    await pagination.paginationPage3Click();
    await expect(page).toHaveURL('/models?page=3&sort=name');
});

test('modelNameColumn @regChecklistNewLow @modelsPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const sideBarMenu = new SideBar(page);
    const modelNameLink = page.locator('.model-name-column-link >> nth=0');
    console.log('modelsPage Model Name Column');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await sideBarMenu.sideBarModelClick();
    const getAttributeLink = await modelNameLink.getAttribute('href');
    console.log(getAttributeLink);
    await expect(getAttributeLink).toContain('/terms');
    await page.locator('.mat-column-modelName >> nth=1').click();
    await expect(page.url()).toContain('/terms?&sort=term');
});

test('modelTypeColumn @regChecklistNewLow @modelsPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const sideBarMenu = new SideBar(page);
    const model = new ModelPage(page);
    const modelColumn0 = page.locator('.mat-column-type >> nth=1');
    const modelColumn1 = page.locator('.mat-column-type >> nth=4');
    const modelColumn2 = page.locator('.mat-column-type >> nth=7');
    console.log('modelsPage Model Name Column');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await sideBarMenu.sideBarModelClick();
    await model.modelTypeFilterClick();
    await model.modelTypeFilterClick();
    await expect(modelColumn0).toBeVisible();
    await expect(modelColumn0).toHaveText(' 3 ');
    await expect(modelColumn1).toBeVisible();
    await expect(modelColumn1).toHaveText(' Custom TYPE ');
    await expect(modelColumn2).toBeVisible();
    await expect(modelColumn2).toHaveText(' Faster_Contracting_Company ');
});

test('clientNameColumn @regChecklistNewLow @modelsPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const sideBarMenu = new SideBar(page);
    const userBar = new UserBar(page);
    const model = new ModelPage(page);
    const clientColumn = page.locator('.mat-column-clientName >> nth=0');
    const clientColumnValue0 = page.locator('.client-column-link >> nth=0');
    console.log('modelsPage Client Name Column');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await sideBarMenu.sideBarModelClick();
    await expect(clientColumn).toBeHidden();
    await userBar.logOutAction();
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await sideBarMenu.sideBarModelClick();
    await expect(clientColumn).toBeHidden();
    await userBar.logOutAction();
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await sideBarMenu.sideBarModelClick();
    await expect(clientColumn).toBeVisible();
    await model.clientFilterClick();
    await model.clientFilterClick();
    await expect(clientColumnValue0).toHaveText('Apple');
    await expect(clientColumnValue0).toHaveAttribute('href', '/clients/322');
    await page.locator('.client-column-link >> nth=0').click();
    await expect(page).toHaveURL('/clients/322');
});

test('descriptionColumn @regChecklistNewLow @modelsPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const sideBarMenu = new SideBar(page);
    const model = new ModelPage(page);
    const descriptionColumn = page.locator('.mat-column-description >> nth=1');
    console.log('modelsPage Description Column');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await sideBarMenu.sideBarModelClick();
    await model.descriptionFilterClick();
    await expect(descriptionColumn).toBeVisible();
    await expect(descriptionColumn).toHaveText(' ww ');
    await model.descriptionFilterClick();
    await expect(descriptionColumn).toBeVisible();
    await expect(descriptionColumn).toHaveText('');
});

test('statusColumn @regChecklistNewLow @modelsPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const sideBarMenu = new SideBar(page);
    const model = new ModelPage(page);
    const statusColumnValue = page.locator('.mat-column-status >> nth=1');
    console.log('modelsPage Status Column');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await sideBarMenu.sideBarModelClick();
    await model.statusFilterClick();
    await expect(statusColumnValue).toBeVisible();
    await expect(statusColumnValue).toHaveText('Archived');
    await expect(statusColumnValue).toHaveCSS('color', 'rgb(20, 35, 54)');
    await model.statusFilterClick();
    await expect(statusColumnValue).toBeVisible();
    await expect(statusColumnValue).toHaveText('Active');
    await expect(statusColumnValue).toHaveCSS('color', 'rgb(92, 168, 8)');
});

test('dealsColumn @regChecklistNewLow @modelsPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const sideBarMenu = new SideBar(page);
    const model = new ModelPage(page);
    const dealsColumn = page.locator('.mat-column-deals >> nth=2');
    const dealsColumnValue = page.locator('.deals-column-link >> nth=1');
    console.log('modelsPage Deals Column');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await sideBarMenu.sideBarModelClick();
    await model.dealsFilterClick();
    await expect(dealsColumn).toBeVisible();
    await expect(dealsColumnValue).toBeVisible();
    await expect(dealsColumnValue).toHaveText(' 82 ');
    await expect(dealsColumnValue).toHaveAttribute('href', '/models/602/deals');
    await page.locator('.deals-column-link >> nth=1').click();
    await expect(page).toHaveURL('/models/602/deals?&sort=contract_name');
    await sideBarMenu.sideBarModelClick();
    await model.dealsFilterClick();
    await model.dealsFilterClick();
    await expect(dealsColumn).toBeVisible();
    await expect(dealsColumn).toHaveText('-');
});

test('templatesColumn @regChecklistNewLow @modelsPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const sideBarMenu = new SideBar(page);
    const userBar = new UserBar(page);
    const model = new ModelPage(page);
    const templateColumnLinkValue = page.locator('.templates-column-link >> nth=0');
    const templateColumnValue = page.locator('.mat-column-templates >> nth=1');
    const pageHeader = page.locator('.section__title');
    const templateWithVisibility = page.locator('.template-name-column-link >> text=automatizationTemplate1');
    const draftTemplate = page.locator('.template-name-column-link >> text=Test100TestTemplateDoNotRemove');
    const publishTemplate = page.locator('.template-name-column-link >> text=autotestTemplate1');
    console.log('modelsPage Templates Column');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await sideBarMenu.sideBarModelClick();
    await model.templatesFilterClick();
    await expect(templateColumnLinkValue).toBeVisible();
    await expect(templateColumnLinkValue).toHaveAttribute('href', '/contract-templates/list?filter%5Bmodel_id%5D=602');
    await templateColumnLinkValue.click();
    await expect(page).toHaveURL('/contract-templates/list?&sort=-updated_at&filter[model_id]=602');
    await expect(pageHeader).toBeVisible();
    await expect(pageHeader).toHaveText('Templates');
    await sideBarMenu.sideBarModelClick();
    await model.templatesFilterClick();
    await model.templatesFilterClick();
    await expect(templateColumnValue).toBeVisible();
    await expect(templateColumnValue).toHaveText('-');
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await signIn.email.fill('alexey.banshykov@mobindustry.net');
    await signIn.password.fill('Qwerty123!');
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-templates/list?&sort=-updated_at&filter[model_id]=805');
    await expect(templateWithVisibility).toBeVisible();
    await expect(draftTemplate).toBeVisible();
    await expect(publishTemplate).toBeVisible();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await signIn.email.fill('alexey.banshykov+1@mobindustry.net');
    await signIn.password.fill('Qwerty123!');
    await signIn.signInButton();
    await page.waitForURL('/clients/360');
    await page.goto('/contract-templates/list?&sort=-updated_at&filter[model_id]=805');
    await expect(templateWithVisibility).toBeHidden();
    await expect(draftTemplate).toBeHidden();
    await expect(publishTemplate).toBeVisible();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await signIn.email.fill('alexey.banshykov+2@mobindustry.net');
    await signIn.password.fill('Qwerty123!');
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-templates/list?&sort=-updated_at&filter[model_id]=805');
    await expect(templateWithVisibility).toBeHidden();
    await expect(draftTemplate).toBeVisible();
    await expect(publishTemplate).toBeVisible();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/contract-templates/list?&sort=-updated_at&filter[model_id]=805');
    await expect(templateWithVisibility).toBeVisible();
    await expect(draftTemplate).toBeVisible();
    await expect(publishTemplate).toBeVisible();
});

test('created/EditedColumn @regChecklistNewLow @modelsPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const sideBarMenu = new SideBar(page);
    const model = new ModelPage(page);
    const createColumn = page.locator('.mat-column-created >> nth=1');
    const editedColumn = page.locator('.mat-column-edited >> nth=1');
    console.log('modelsPage Created/Edited Column');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await sideBarMenu.sideBarModelClick();
    await model.createFilterClick();
    await model.createFilterClick();
    await expect(createColumn).toHaveText(' 01/29/20 ');
    await expect(editedColumn).toHaveText(' 04/13/21 ');
});

test('active/Archive3dotsMenu @regChecklistNewHigh @modelsPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const model = new ModelPage(page);
    const newModel = new NewEditCopyModelPage(page);
    const activateButton = page.locator('.context-menu-archive >> text=Activate');
    const archiveButton = page.locator('.context-menu-archive >> text=Archive');
    const archivePopup = page.locator('.mat-dialog-container');
    const archivePopupText = page.locator('.modal-header');
    const archivePopupCancelButton = page.locator('#confirm-active-cancel');
    const archivePopupArchiveButton = page.locator('#confirm-active-archive');
    const statusColumn = page.locator('.mat-column-status >> nth=1');
    console.log('modelsPage Active/Archive 3dots Menu');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/add-model');
    await newModel.nameFieldFill(Helpers.generateRandomString());
    await newModel.descriptionFieldFill(Helpers.generateRandomString());
    await newModel.typeDropDownChoose();
    await newModel.fromFieldFill(Helpers.generateRandomNumberNewModelFrom(1, 31));
    await newModel.toFieldFill(Helpers.generateRandomNumberNewModelTo(60, 100));
    await newModel.saveButtonClick();
    await page.goto('https://marqup.test.noredlines.com/models?&sort=-created_at');
    await model.threeDotsMenuButtonClick();
    await expect(activateButton).toBeVisible();
    await expect(archiveButton).toBeHidden();
    await expect(activateButton).toHaveText('Activate');
    await activateButton.click();
    await expect(statusColumn).toHaveText('Active')
    await model.threeDotsMenuButtonClick();
    await expect(archiveButton).toBeVisible();
    await expect(activateButton).toBeHidden();
    await expect(archiveButton).toHaveText('Archive');
    await expect(page).toHaveURL('/models?&sort=-created_at');
    await archiveButton.click();
    await expect(archivePopup).toBeVisible();
    await expect(archivePopupText).toBeVisible();
    await expect(archivePopupText).toHaveText(' Are you sure you want to archive this Model? Archived Models will not be available for Deal review.');
    await expect(archivePopupCancelButton).toBeVisible();
    await expect(archivePopupArchiveButton).toBeVisible();
    await archivePopupArchiveButton.click();
    await expect(statusColumn).toHaveText('Archived')
    await model.threeDotsMenuButtonClick();
    await expect(activateButton).toBeVisible();
});

test('validationActivateButtonForSubscriptionLimitUsers @regChecklistNewMedium @modelsPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const sideBarMenu = new SideBar(page);
    const userBar = new UserBar(page);
    const model = new ModelPage(page);
    const updateSubscriptionPopup = page.locator('.mat-dialog-container');
    const updateSubscriptionPopupText = page.locator('.modal-header');
    const updateSubscriptionPopupUpdateButton = page.locator('#not-available-popup-update-subscription');
    const updateSubscriptionPopupCloseButton = page.locator('#not-available-popup-close');
    console.log('modelsPage Validation Activate Button For Subscription  Limit Users');
    await users.AASubscriptionLimits();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await sideBarMenu.sideBarModelClick();
    await page.locator('.mat-icon-button >> nth=2').click();
    await model.threeDotsMenuActivateButtonClick();
    await expect(updateSubscriptionPopup).toBeVisible();
    await expect(updateSubscriptionPopupText).toBeVisible();
    await expect(updateSubscriptionPopupText).toHaveText('Please update your subscription to add more models');
    await expect(updateSubscriptionPopupUpdateButton).toBeVisible();
    await expect(updateSubscriptionPopupUpdateButton).toHaveCSS('background-color', 'rgb(69, 119, 210)');
    await expect(updateSubscriptionPopupCloseButton).toBeVisible();
    await updateSubscriptionPopupCloseButton.click();
    await expect(updateSubscriptionPopup).toBeHidden();
    await expect(page).toHaveURL('/models?&sort=name');
    await page.locator('.mat-icon-button >> nth=2').click();
    await model.threeDotsMenuActivateButtonClick();
    await updateSubscriptionPopupUpdateButton.click();
    await expect(page).toHaveURL('/clients/edit-client/383?update_plan=true');
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.AUSubscriptionLimits();
    await signIn.signInButton();
    await page.waitForURL('/clients/383');
    await sideBarMenu.sideBarModelClick();
    await page.locator('.mat-icon-button >> nth=2').click();
    await model.threeDotsMenuActivateButtonClick();
    await expect(updateSubscriptionPopup).toBeVisible();
    await expect(updateSubscriptionPopupText).toBeVisible();
    await expect(updateSubscriptionPopupText).toHaveText('Please contact your Account Admin to update your subscription and add more models');
    await expect(updateSubscriptionPopupUpdateButton).toBeHidden();
    await expect(updateSubscriptionPopupCloseButton).toBeVisible();
    await updateSubscriptionPopupCloseButton.click();
    await expect(updateSubscriptionPopup).toBeHidden();
    await expect(page).toHaveURL('/models?&sort=name');
});

test('validationArchiveButtonForModelWithPublishContract @regChecklistNewHigh @modelsPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const sideBarMenu = new SideBar(page);
    const model = new ModelPage(page);
    const canNotBeArchivedPopup = page.locator('.mat-dialog-container');
    const canNotBeArchivedPopupText = page.locator('.modal-header');
    const canNotBeArchivedPopupOkButton = page.locator('.mat-button >> text=OK');
    console.log('modelsPage Validation Archive Button For Model With Publish Contract');
    await users.AASubscriptionLimits();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await sideBarMenu.sideBarModelClick();
    await page.locator('.mat-icon-button >> nth=1').click();
    await model.threeDotsMenuArchiveButtonClick();
    await expect(canNotBeArchivedPopup).toBeVisible();
    await expect(canNotBeArchivedPopupText).toBeVisible();
    await expect(canNotBeArchivedPopupText).toHaveText(' This Model can not be archivised because of attached Contracts/Deals');
    await expect(canNotBeArchivedPopupOkButton).toBeVisible();
    await canNotBeArchivedPopupOkButton.click();
    await expect(canNotBeArchivedPopup).toBeHidden();
    await expect(page).toHaveURL('/models?&sort=name');
});

test('threeDotsMenuEditButton @regChecklistNewHigh @modelsPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const model = new ModelPage(page);
    const editModelPageHeader = page.locator('.section__header');
    console.log('modelsPage Three Dots Menu Edit Button');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models?&sort=-created_at');
    await model.threeDotsMenuButtonClick();
    await model.threeDotsMenuEditButtonClick();
    await expect(page.url()).toContain('/models/edit-model/');
    await expect(editModelPageHeader).toBeVisible();
    await expect(editModelPageHeader).toHaveText(' Edit Model ');
    await page.goto('/models?&sort=is_archive');
    await model.threeDotsMenuButtonClick();
    await model.threeDotsMenuEditButtonClick();
    await expect(page.url()).toContain('/models/edit-model/');
    await expect(editModelPageHeader).toBeVisible();
    await expect(editModelPageHeader).toHaveText(' Edit Model ');
});

test('threeDotsMenuSaveAsNewButton @regChecklistNewHigh @modelsPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const sideBarMenu = new SideBar(page);
    const userBar = new UserBar(page);
    const model = new ModelPage(page);
    const newModel = new NewEditCopyModelPage(page);
    const saveAsNewModelPageHeader = page.locator('.section__header');
    console.log('modelsPage Three Dots Menu Save As New Button');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models?&sort=-created_at');
    await model.threeDotsMenuButtonClick();
    await model.threeDotsMenuSaveAsNewButtonClick();
    await expect(page.url()).toContain('/models/clone-model/');
    await expect(saveAsNewModelPageHeader).toBeVisible();
    await expect(saveAsNewModelPageHeader).toHaveText('Copy Model');
    await page.goto('/models?&sort=is_archive');
    await model.threeDotsMenuButtonClick();
    await model.threeDotsMenuSaveAsNewButtonClick();
    await expect(page.url()).toContain('/models/clone-model/');
    await expect(saveAsNewModelPageHeader).toBeVisible();
    await expect(saveAsNewModelPageHeader).toHaveText('Copy Model');
});

test('nameOfTheDuplicateModelCopyModel/ModelsPage @regChecklistNewLow @modelsPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const model = new ModelPage(page);
    const editModel = new NewEditCopyModelPage(page);
    const nameCopyModelPage = page.locator('#form-control-name .mat-input-element');
    const nameModelsPage = page.locator('.model-name-column-link >> nth=0');
    console.log('modelsPage Name Of The Duplicate Model Copy Model/Models Page');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models?&sort=-name');
    await model.threeDotsMenuButtonClick();
    await model.threeDotsMenuSaveAsNewButtonClick();
    await expect(nameCopyModelPage).toHaveValue('Copy_1531_testModelForDealsDoNotRemove');
    await page.goto('/models?&sort=-created_at');
    await model.threeDotsMenuButtonClick();
    await model.threeDotsMenuSaveAsNewButtonClick();
    await editModel.saveButtonCopyPageClick();
    await page.goto('/models?&sort=-created_at');
    await expect(nameModelsPage).toContainText('Copy_');
});

test('validationSaveButtonCopyModelPage @regChecklistNewMedium @modelsPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const model = new ModelPage(page);
    const editModel = new NewEditCopyModelPage(page);
    const addTermButton = page.locator('#terms-list-add-term');
    console.log('modelsPage Validation Save Button Copy Model Page');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models?&sort=-created_at');
    await model.threeDotsMenuButtonClick();
    await model.threeDotsMenuSaveAsNewButtonClick();
    await editModel.saveButtonCopyPageClick();
    await expect(page.url()).toContain('/terms?&sort=term');
    await expect(addTermButton).toBeVisible();
});

   //functional was removed
test.skip('displayingDeleteButtonThreeDotsMenu @regChecklistNewLow @modelsPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const model = new ModelPage(page);
    const editModel = new NewEditCopyModelPage(page);
    const deleteButton = page.locator('.context-menu-delete');
    const deleteButtonOopsPopup = page.locator('.mat-dialog-container');
    const deleteButtonOopsPopupText = page.locator('.modal-header');
    const deleteButtonOopsPopupCancelButton = page.locator('.mat-button >> text=Cancel');
    const nameModelsPage = page.locator('.model-name-column-link >> nth=0');
    console.log('modelsPage Displaying Delete Button Three Dots Menu');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models?&sort=-created_at');
    await model.threeDotsMenuButtonClick();
    await expect(deleteButton).toBeHidden();
    await page.locator('.cdk-overlay-backdrop').click();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/models?&sort=-created_at');
    await model.threeDotsMenuButtonClick();
    await expect(deleteButton).toBeHidden();
    await page.locator('.cdk-overlay-backdrop').click();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models?&sort=is_archive');
    await model.threeDotsMenuButtonClick();
    await expect(deleteButton).toBeVisible();
    await model.threeDotsMenuDeleteButtonClick();
    await expect(deleteButtonOopsPopup).toBeVisible();
    await expect(deleteButtonOopsPopupText).toBeVisible();
    await expect(deleteButtonOopsPopupText).toHaveText(' Oops! You must first archive a Model before deleting.');
    await expect(deleteButtonOopsPopupCancelButton).toBeVisible();
    await deleteButtonOopsPopupCancelButton.click();
    await expect(page).toHaveURL('/models?&sort=is_archive');
    await page.goto('/models?&sort=-created_at');
    await model.threeDotsMenuButtonClick();
    await model.threeDotsMenuSaveAsNewButtonClick();
    await editModel.saveButtonCopyPageClick();
    await page.goto('/models?&sort=-created_at');
    await model.threeDotsMenuButtonClick();
    await model.threeDotsMenuDeleteButtonClick();
    await model.threeDotsMenuDeletePopupDeleteButtonClick();
    await expect(page).toHaveURL('/models?&sort=-created_at');
    await expect(nameModelsPage).not.toContainText('Copy_');
});

   //functional was removed
test.skip('behavbiorOfDeleteButtonModelWithPublishDraftContract/Template @regChecklistNewHigh @modelsPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const model = new ModelPage(page);
    const modelCanNotBeDeletedPopup = page.locator('.mat-dialog-container');
    const modelCanNotBeDeletedPopupText = page.locator('.modal-header');
    const modelCanNotBeDeletedPopupOkButton = page.locator('.mat-button >> text=OK');
    const areUSureToDeletePopup = page.locator('.mat-dialog-container');
    const areUSureToDeletePopupText = page.locator('.modal-header');
    const areUSureToDeletePopupCancelButton = page.locator('.mat-button >> text=Cancel');
    const areUSureToDeletePopupDeleteButton = page.locator('.mat-button >> text=Delete');
    console.log('modelsPage Behavbior Of Delete Button Model With Publish Draft Contract/Template');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models?&sort=name');
    await model.threeDotsMenuButtonClick();
    await model.threeDotsMenuDeleteButtonClick();
    await expect(modelCanNotBeDeletedPopup).toBeVisible();
    await expect(modelCanNotBeDeletedPopupText).toBeVisible();
    await expect(modelCanNotBeDeletedPopupText).toHaveText(' This Model can not be deleted because of attached Contracts/Deals');
    await expect(modelCanNotBeDeletedPopupOkButton).toBeVisible();
    await modelCanNotBeDeletedPopupOkButton.click();
    await page.locator('.mat-icon-button >> nth=1').click();
    await model.threeDotsMenuDeleteButtonClick();
    await expect(areUSureToDeletePopup).toBeVisible();
    await expect(areUSureToDeletePopupText).toBeVisible();
    await expect(areUSureToDeletePopupText).toHaveText(' There are attached templates to this Model. Are you sure you want to delete this Model?');
    await expect(areUSureToDeletePopupCancelButton).toBeVisible();
    await expect(areUSureToDeletePopupDeleteButton).toBeVisible();
    await areUSureToDeletePopupCancelButton.click();
    await page.locator('.mat-icon-button >> nth=2').click();
    await model.threeDotsMenuDeleteButtonClick();
    await expect(areUSureToDeletePopup).toBeVisible();
    await expect(areUSureToDeletePopupText).toBeVisible();
    await expect(areUSureToDeletePopupText).toHaveText(' There are attached templates to this Model. Are you sure you want to delete this Model?');
    await expect(areUSureToDeletePopupCancelButton).toBeVisible();
    await expect(areUSureToDeletePopupDeleteButton).toBeVisible();
    await areUSureToDeletePopupCancelButton.click();
});

test('addModelButton @regChecklistNewHigh @modelsPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const sideBarMenu = new SideBar(page);
    const model = new ModelPage(page);
    const addModelPopup = page.locator('.mat-dialog-container');
    const addModelPopupText = page.locator('.modal-header');
    const addModelPopupChooseAModelButton = page.locator('#choose-a-model');
    const addModelPopupNewModelButton = page.locator('#new-model');
    const addModelPopupCancelButton = page.locator('#cancel');
    console.log('modelsPage Add Model Button');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await sideBarMenu.sideBarModelClick();
    await model.addModelButtonClick();
    await expect(addModelPopup).toBeVisible();
    await expect(addModelPopupText).toBeVisible();
    await expect(addModelPopupText).toHaveText(' Would you like to use an existing model as a template?');
    await expect(addModelPopupChooseAModelButton).toBeVisible();
    await expect(addModelPopupChooseAModelButton).toHaveCSS('border-color', 'rgb(69, 119, 210)');
    await expect(addModelPopupNewModelButton).toBeVisible();
    await expect(addModelPopupNewModelButton).toHaveCSS('border-color', 'rgb(69, 119, 210)');
    await expect(addModelPopupCancelButton).toBeVisible();
    await expect(addModelPopupCancelButton).toHaveCSS('border-color', 'rgb(69, 119, 210)');
});

test('addModelPopupNewModelButton @regChecklistNewHigh @modelsPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const sideBarMenu = new SideBar(page);
    const model = new ModelPage(page);
    const pageHeader = page.locator('.section__header');
    console.log('modelsPage Add Model Popup New Model Button');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await sideBarMenu.sideBarModelClick();
    await model.addModelButtonClick();
    await model.addModalNewModalButtonClick();
    await expect(page).toHaveURL('/models/add-model');
    await expect(pageHeader).toBeVisible();
    await expect(pageHeader).toHaveText('New Model');
});

test('addModelPopupChooseAModelButton @regChecklistNewHigh @modelsPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const sideBarMenu = new SideBar(page);
    const model = new ModelPage(page);
    const pageHeader = page.locator('.section__header');
    console.log('modelsPage Add Model Popup Choose A Model Button');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await sideBarMenu.sideBarModelClick();
    await model.addModelButtonClick();
    await model.addModelChooseButtonClick();
    await expect(page).toHaveURL('/models/select-model');
    await expect(pageHeader).toBeVisible();
    await expect(pageHeader).toHaveText('Existing Model');
});

test('addModelPopupCancelButton @regChecklistNewLow @modelsPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const sideBarMenu = new SideBar(page);
    const model = new ModelPage(page);
    const addModelPopup = page.locator('.mat-dialog-container');
    const pageHeader = page.locator('.section__title');
    console.log('modelsPage Add Model Popup Cancel Button');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await sideBarMenu.sideBarModelClick();
    await model.addModelButtonClick();
    await model.addModalCancelButtonClick();
    await expect(addModelPopup).toBeHidden();
    await expect(page).toHaveURL('/models?&sort=name');
    await expect(pageHeader).toBeVisible();
    await expect(pageHeader).toHaveText('Models');
});