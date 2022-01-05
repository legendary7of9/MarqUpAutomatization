import { test , expect } from '@playwright/test'
import { ModelPage, NewEditModelPage, Users, SideBar, ViewingModelPage } from '../framework'
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


test('saveButtonPointsFieldDidNotChoose @regChecklistNewMedium @newTermPage', async ({ page, browserName }) => {
    const newModel = new NewEditModelPage(page);
    const newTerm = new NewEditTermPage(page);
    const sideBarMenu = new SideBar(page);
    const model = new ModelPage(page);
    const viewModel = new ViewingModelPage(page);
    const descriptionViewTermField = page.locator('td.mat-cell.cdk-column-description.mat-column-description.ng-star-inserted >> nth=0');
    const termPage = page.locator('#form-control-term');
    console.log('newTerm Add Another Term Button');
    await page.goto('/models/add-model');
    await newModel.nameFieldFill(Helpers.generateRandomString());
    await newModel.descriptionFieldFill(Helpers.generateRandomString());
    await newModel.typeDropDownChoose();
    await newModel.fromFieldFill(Helpers.generateRandomNumberNewModelFrom(1, 31));
    await newModel.toFieldFill(Helpers.generateRandomNumberNewModelTo(60, 100));
    await newModel.nextButtonClick();
    await newTerm.termFieldFill(Helpers.generateRandomString());
    await newTerm.manualInputWeightFieldRandomFill(Helpers.generateRandomNumberNewTermWeight(31, 60));
    await newTerm.descriptionFieldFill();
    await newTerm.questionFieldFill(Helpers.generateRandomString());
    await newTerm.answerFieldFill(Helpers.generateRandomString());
    await newTerm.manualInputPointsFieldFill(Helpers.generateRandomNumberNewTermPoints());
    await newTerm.addSampleButtonClick();
    await newTerm.sampleFieldFill(Helpers.generateRandomString());
    await newTerm.addAnotherTermButtonClick();
    await expect(termPage).toHaveText('Term');
    await sideBarMenu.sideBarModelClick();
    await model.createFilterClick();
    await model.listFirstItemFocus();
    await model.linkFirstItemClick();
    await viewModel.listFirstItemTermClick(); 
    await expect(descriptionViewTermField).toHaveText('autotest');
    })