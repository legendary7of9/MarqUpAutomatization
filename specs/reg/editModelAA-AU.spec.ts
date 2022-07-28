import { test , expect } from '@playwright/test'
import { Users } from '../../framework'
import { SignInPage } from '../../framework'
import { ModelPage } from '../../framework'
import { NewEditCopyModelPage } from '../../framework'
import { NewEditContractPage } from '../../framework'

 

test.beforeEach(async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    await page.goto('');
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
}); 

test('nameField @regChecklistNewHigh @editModelPage', async ({ page }) => {
    const locator = page.locator('[formcontrolname="name"]');
    console.log('editModel Name Field');
    await page.goto('/models/edit-model/974');
    await expect(locator).toHaveAttribute('placeholder', 'Name');
    await expect(locator).toHaveAttribute('maxlength', '255');
});

test('nameFieldValidation @regChecklistNewLow @editModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const editModel = new NewEditCopyModelPage(page);
    const locator = page.locator('#form-control-name mat-error');
    console.log('editModel Name Field validation');
    await page.goto('/models/edit-model/974');
    await editModel.nameFieldClear();
    await editModel.saveChangesButtonClick();
    await expect(locator).toHaveText(['Please fill in this field']);
    })

test('descriptionField @regChecklistNewLow @editModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const locator = page.locator('[formcontrolname="description"]');
    console.log('editModel Description Field');
    await page.goto('/models/edit-model/974');
    await expect(locator).toHaveAttribute('placeholder', 'Description');
    await expect(locator).toHaveAttribute('maxlength', '255');
});

test('typeField @regChecklistNewHigh @editModelPage', async ({ page }) => {
    const locator = page.locator('[formcontrolname="type_id"]');
    console.log('editModel Type Field');
    await page.goto('/models/edit-model/974');
    await expect(locator).toHaveAttribute('placeholder', 'Type');
    await expect(locator).toHaveAttribute('role', 'listbox');
});

test('typeNameField @regChecklistNewHigh @editModelPage', async ({ page }) => {
    const editModel = new NewEditCopyModelPage(page);
    const locator = page.locator('[formcontrolname="type_id"]');
    const locator2 = page.locator('[formcontrolname="type_name"]');
    console.log('editModel Type Name Field');
    await page.goto('/models/edit-model/974');
    await editModel.typeDropDownClick();
    await editModel.typeDropDownOtherChoose();
    await expect(locator).toHaveText(['Other']);
    await expect(locator2).toBeVisible();
    await expect(locator2).toHaveAttribute('placeholder', 'Type Name');
});
    
test('typeNameFieldValidation @regChecklistNewLow @editModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const editModel = new NewEditCopyModelPage(page);
    const locator = page.locator('#form-control-type_name mat-error');
    console.log('editModel Type Name Field validation');
    await page.goto('/models/edit-model/974');
    await editModel.typeDropDownClick();
    await editModel.typeDropDownOtherChoose();
    await editModel.saveChangesButtonClick();
    await expect(locator).toHaveText(['Please fill in this field']);
});

test('infoIconWeightScale @regChecklistNewLow @editModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const editModel = new NewEditCopyModelPage(page);
    const locator = page.locator('text=The weighting scale is used as a range to assign different weights for terms in the model - e.g. 1 to 100.  The weighting is used to calculate the scoring for each term during deal making.');
    console.log('editModel Info Icon Weight Scale');
    await page.goto('/models/edit-model/974');
    await editModel.iIconClick();
    await expect(locator).toHaveText('The weighting scale is used as a range to assign different weights for terms in the model - e.g. 1 to 100.  The weighting is used to calculate the scoring for each term during deal making.');
});

test('weightScaleFrom @regChecklistNewHigh @editModelPage', async ({ page }) => {
    const locator = page.locator('[formcontrolname="weight_scale_from"]');
    console.log('editModel Weight Scale From');
    await page.goto('/models/edit-model/974');
    await expect(locator).toHaveAttribute('placeholder', 'From');
});
        
test('weightScaleFromValidation @regChecklistNewLow @editModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const editModel = new NewEditCopyModelPage(page);
    const locator = page.locator('#form-control-weight_scale_from mat-error');
    console.log('editModel Weight Scale From validation');
    await page.goto('/models/edit-model/974');
    await page.waitForTimeout(1500);
    await editModel.fromFieldClear();
    await editModel.saveChangesButtonClick();
    await expect(locator).toHaveText('Weight Scale From must be no less than 1.');
});

test('weightScaleTo @regChecklistNewHigh @editModelPage', async ({ page }) => {
    const locator = page.locator('[formcontrolname="weight_scale_to"]');
    console.log('editModel Weight Scale To');
    await page.goto('/models/edit-model/974');
    await expect(locator).toHaveAttribute('placeholder', 'To');
});
        
test('weightScaleToValidation @regChecklistNewLow @editModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const editModel = new NewEditCopyModelPage(page);
    const locator = page.locator('#form-control-weight_scale_to mat-error');
    console.log('editModel Weight Scale To validation');
    await page.goto('/models/edit-model/974');
    await editModel.toFieldClear();
    await editModel.saveChangesButtonClick();
    await expect(locator).toHaveText('Please fill in this field');
}); 

test('cancelButton @regChecklistNewMedium @editModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const editModel = new NewEditCopyModelPage(page);
    console.log('editModel Cancel Button');
    await page.goto('/models/edit-model/974');
    await editModel.cancelButtonClick();
    await expect(page).toHaveURL('/models?&sort=name');
});

test('saveChangesButton @regChecklistNewHigh @editModelPage', async ({ page }) => {
    const editModel = new NewEditCopyModelPage(page);
    const locator = page.locator('#form-control-type_id');
    console.log('editModel Save Changes Button');
    await page.goto('/models/edit-model/974');
    await editModel.typeDropDownEdit();
    await editModel.saveChangesButtonClick();
    await expect(page).toHaveURL('/models?&sort=name');
    await page.goto('/models/edit-model/974');
    await expect(locator).toHaveText('sdsddsdsdsType');
    await editModel.typeDropDownChoose();
    await editModel.saveChangesButtonClick();
});

test('activateButton @regChecklistNewHigh @editModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const editModel = new NewEditCopyModelPage(page);
    const locator = page.locator('#model-details-push-to-archive');
    console.log('editModel Activate Button');
    await page.goto('/models/edit-model/1028');
    await page.waitForTimeout(1000);
    await editModel.activateButtonClick();
    await expect(page).toHaveURL('/models?&sort=name');
    await page.goto('/models/edit-model/1028');
    await page.waitForTimeout(1000);
    await expect(locator).toHaveAttribute('id', 'model-details-push-to-archive');
    await editModel.pushToArchiveButtonClick();
    await editModel.pushToArchivePopupArchiveButtonClick();
    await page.waitForTimeout(1000);
});

test('pushToArchiveButton @regChecklistNewHigh @editModelPage', async ({ page }) => {
    const editModel = new NewEditCopyModelPage(page);
    const popup = page.locator('.mat-dialog-container');
    const cancel = page.locator('#confirm-active-cancel');
    const archive = page.locator('#confirm-active-archive');
    console.log('editModel Push To Archive Button');
    await page.goto('/models/edit-model/974');
    await editModel.pushToArchiveButtonClick();
    await expect(popup).toHaveText('Are you sure you want to archive this Model? Archived Models will not be available for Deal review. CancelArchive');
    await expect(cancel).toBeVisible();
    await expect(archive).toBeVisible();
});

test('pushToArchiveCancelButton @regChecklistNewLow @editModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const editModel = new NewEditCopyModelPage(page);
    const popup = page.locator('.mat-dialog-container');
    console.log('editModel Push To Archive Cancel Button');
    await page.goto('/models/edit-model/974');
    await editModel.pushToArchiveButtonClick();
    await editModel.pushToArchivePopupCancelButtonClick();
    await expect(popup).toBeHidden();
});

test('pushToArchiveArchiveButton @regChecklistNewMedium @editModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const editModel = new NewEditCopyModelPage(page);
    const activate = page.locator('#model-details-activate');
    console.log('editModel Push To Archive Archive Button');
    await page.goto('/models/edit-model/974');
    await editModel.pushToArchiveButtonClick();
    await editModel.pushToArchivePopupArchiveButtonClick();
    await expect(page).toHaveURL('/models?&sort=name');
    await page.goto('/models/edit-model/974');
    await expect(activate).toBeVisible();
    await editModel.activateButtonClick();
});

test('pushToArchiveArchiveButtonWithContract/Deal @regChecklistNewHigh @editModelPage', async ({ page }) => {
    const editModel = new NewEditCopyModelPage(page);
    const editContract = new NewEditContractPage(page);
    const pushToArchiveErrorPopup = page.locator('.mat-dialog-container');
    const pushToArchiveErrorText = page.locator('.modal-header');
    console.log('editModel Push To Archive Archive Button If There Is a Published(draft)Coontract/Deal For This Model');
    await page.goto('/models/edit-model/757');
    await editModel.pushToArchiveButtonClick();
    await expect(pushToArchiveErrorPopup).toBeVisible();
    await expect(pushToArchiveErrorText).toHaveText(' This Model can not be archivised because of attached Contracts/Deals');
    await page.goto('/contract/edit/3059');
    await editContract.publishToggleClick();
    await editContract.saveAndGenerateLinkButtonClick();
    await page.goto('/models/edit-model/757');
    await editModel.pushToArchiveButtonClick();
    await expect(pushToArchiveErrorPopup).toBeVisible();
    await expect(pushToArchiveErrorText).toHaveText(' This Model can not be archivised because of attached Contracts/Deals');
    await page.goto('/contract/edit/3059');
    await page.locator('.mat-button-wrapper >> text= Back to draft ').click();
    await editContract.saveButtonClick();
});