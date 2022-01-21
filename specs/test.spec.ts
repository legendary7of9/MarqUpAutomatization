import { test , expect } from '@playwright/test'
import { UserBar, Users } from '../framework'
import { SignInPage } from '../framework'
import { SideBar } from '../framework'
import { ModelPage } from '../framework'
import { DealsPage } from '../framework'
import { NewEditDealPage } from '../framework'
import { Helpers } from '../lib/helpers/randomCharactersAndDigits.preload'

test.beforeEach(async ({ page }) => {
    await page.goto('');
}); 

test('createSaveChangesButton @regChecklistNewHigh @newEditModelPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const deal = new DealsPage(page);
    const newEditDeal = new NewEditDealPage(page);
    const modelField = page.locator('#form-control-model_id mat-error');
    const contractName = page.locator('#form-control-contract_name mat-error');
    const nameOfOtherParty = page.locator('#form-control-name_of_the_other_party mat-error');
    const estimatedValue = page.locator('#form-control-estimated_value mat-error');
    const analysisPage = page.locator('.deal-scores');
    console.log('NewEditModel Create/Save Changes Button');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals?&sort=contract_name');
    await deal.addDealButtonClick();
    await newEditDeal.createButtonClick();
    await expect(modelField).toHaveText('Please fill in this field');
    await expect(contractName).toHaveText('Please fill in this field');
    await expect(nameOfOtherParty).toHaveText('Please fill in this field');
    await expect(estimatedValue).toHaveText('Please fill in this field');
    await newEditDeal.modelDropDownChoose();
    await newEditDeal.contractNameFieldFill(Helpers.generateRandomString());
    await newEditDeal.nameOfTheOtherPartyFieldFill(Helpers.generateRandomString());
    await newEditDeal.esimatedValueFieldFill();
    await newEditDeal.createButtonClick();
    await expect(analysisPage).toBeVisible();
    await page.goto('/deals?&sort=contract_name');
    await deal.createFilterClick();
    await page.waitForTimeout(500);
    await deal.threeDotsMenuEditButtonClick();
    await newEditDeal.contractNameFieldClear();
    await newEditDeal.nameOfTheOtherPartyFieldClear();
    await newEditDeal.esimatedValueFieldClear();
    await newEditDeal.saveChangesButtonClick();
    await expect(contractName).toHaveText('Please fill in this field');
    await expect(nameOfOtherParty).toHaveText('Please fill in this field');
    await expect(estimatedValue).toHaveText('Please fill in this field');
    await newEditDeal.contractNameFieldFill(Helpers.generateRandomString());
    await newEditDeal.nameOfTheOtherPartyFieldFill(Helpers.generateRandomString());
    await newEditDeal.esimatedValueFieldFill();
    await newEditDeal.saveChangesButtonClick();
    await expect(analysisPage).toBeVisible();
})