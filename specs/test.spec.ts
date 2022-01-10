import { test , expect } from '@playwright/test'
import { ModelPage, NewEditModelPage, Users, SideBar, ViewingModelPage, UserBar } from '../framework'
import { NewEditTermPage } from '../framework'
import { SignInPage } from '../framework'
import { Helpers } from '../lib/helpers/randomCharactersAndDigits.preload'

test.beforeEach(async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    await page.goto('');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
}); 



test('addAnotherTermButton @regChecklistNewHigh @newTermPage', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const newTerm = new NewEditTermPage(page);
    const viewModel = new ViewingModelPage(page);
    const descriptionViewTermField = page.locator('td.mat-cell.cdk-column-description.mat-column-description.ng-star-inserted >> nth=0');
    const termPage = page.locator('#form-control-term');
    console.log('newTerm Add Another Term Button');
    await page.goto('/models/1460/terms?&sort=term');
    await viewModel.addTermButtonClick();
    await newTerm.termFieldFill(Helpers.generateRandomString());
    await newTerm.manualInputWeightFieldRandomFill(Helpers.generateRandomNumberNewTermWeight(31, 60));
    await newTerm.descriptionFieldFill();
    await newTerm.questionFieldFill(Helpers.generateRandomString());
    await newTerm.answerFieldFill(Helpers.generateRandomString());
    await newTerm.manualInputPointsFieldFill(Helpers.generateRandomNumberNewTermPoints());
    await newTerm.addAnotherTermButtonClick();
    await expect(termPage).toHaveText('Term');
    await page.goBack();
    await viewModel.listFirstItemTermClick(); 
    await expect(descriptionViewTermField).toHaveText('autotest');
    await viewModel.listFirstItemLinkTermClick();
    await newTerm.pushToArchiveButtonClick();
    await newTerm.pushToArchivePopupArchiveButtonClick();
    })