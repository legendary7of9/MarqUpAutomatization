import { test , expect } from '@playwright/test'
import { UserBar, Users } from '../../framework'
import { SignInPage } from '../../framework'
import { SideBar } from '../../framework'
import { ModelPage } from '../../framework'
import { DealsPage } from '../../framework'
import { NewEditDealPage } from '../../framework'
import { Helpers } from '../../lib/helpers/randomCharactersAndDigits.preload'

test.beforeEach(async ({ page }) => {
    await page.goto('');
}); 


test('clientsField @regChecklistNewLow @newEditModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userMenu = new UserBar(page);
    const deals = new DealsPage(page);
    const clientsField = page.locator('[formcontrolname="account_id"]');
    console.log('NewEditModel Clients Field');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals?&sort=contract_name');
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await deals.addDealButtonClick();
    await expect(page).toHaveURL('/deals/add-deal');
    await expect(clientsField).toBeVisible();
    await page.goto('/deals/edit-deal/8200');
    await expect(clientsField).toBeVisible();
    await userMenu.userInfoButtonClick();
    await userMenu.signOutButtonClick();
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals?&sort=contract_name');
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await deals.addDealButtonClick();
    await expect(page).toHaveURL('/deals/add-deal');
    await expect(clientsField).toBeHidden();
    await page.goto('/deals/edit-deal/8200');
    await expect(clientsField).toBeHidden();
    await userMenu.userInfoButtonClick();
    await userMenu.signOutButtonClick();
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/deals?&sort=contract_name');
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await deals.addDealButtonClick();
    await expect(page).toHaveURL('/deals/add-deal');
    await expect(clientsField).toBeHidden();
    await page.goto('/deals/edit-deal/8200');
    await expect(clientsField).toBeHidden();
    })

test('clientsFieldNotEditableBySa @regChecklistNewMedium @newEditModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const clientsFieldNotEditable = page.locator('[formcontrolname="account_id"]');
    const modelFieldNotEditable = page.locator('[formcontrolname="model_id"]');
    console.log('NewEditModel Clients Field Not Editable By SA');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals/edit-deal/8200');
    await expect(clientsFieldNotEditable).toHaveAttribute('aria-disabled', 'true');
    await expect(modelFieldNotEditable).toHaveAttribute('aria-disabled', 'true');
    })

test('modelField @regChecklistNewHigh @newEditModelPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const deals = new DealsPage(page);
    const modelFieldNotEditableSelected = page.locator('[formcontrolname="model_id"]');
    console.log('NewEditModel Clients Field Not Editable By SA');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals?&sort=contract_name');
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await deals.addDealButtonClick();
    await expect(modelFieldNotEditableSelected).toHaveAttribute('role', 'listbox');
    await expect(modelFieldNotEditableSelected).toHaveClass('mat-select ng-tns-c6-12 ng-untouched ng-pristine ng-star-inserted ng-invalid');
    await expect(modelFieldNotEditableSelected).toHaveAttribute('aria-disabled', 'false');
    await page.goto('/deals/edit-deal/8200');
    await expect(modelFieldNotEditableSelected).toHaveAttribute('aria-disabled', 'true');
    })

test('modelFieldChanged @regChecklistNewMedium @newEditModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const newEditModel = new NewEditDealPage(page);
    const dealDetailsNameOfDeal = page.locator('h1.section__title');
    console.log('NewEditModel Model Field');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals/edit-deal/8201');
    await newEditModel.contractNameFieldEdit();
    await newEditModel.saveChangesButtonClick();
    await expect(dealDetailsNameOfDeal).toHaveText(' testModelForDealsDoNotRemove4444 -  Client 1HT(test) -  test 20%');
    await page.goto('/deals/edit-deal/8201');
    await newEditModel.contractNameFieldFillAfterEdit();
    await newEditModel.saveChangesButtonClick();
    })

test('contractNameField @regChecklistNewLow @newEditModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const deal = new DealsPage(page);
    const contractField = page.locator('[formcontrolname="contract_name"]');
    const contractFieldPreFilled = page.locator('#form-control-contract_name textarea');
    console.log('NewEditModel Contract Name Field');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals?&sort=contract_name');
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await deal.addDealButtonClick();
    await expect(contractField).toHaveAttribute('placeholder', 'Contract Name');
    await expect(contractField).toHaveAttribute('maxlength', '255');
    await page.goto('/deals/edit-deal/8200');
    await expect(contractField).toHaveAttribute('placeholder', 'Contract Name');
    await expect(contractField).toHaveAttribute('maxlength', '255');
    await expect(contractFieldPreFilled).toHaveValue('testDealDoNotRemove');
    })

    test('myCompanySubsidiaryField @regChecklistNewHigh @newEditModelPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userMenu = new UserBar(page);
    const deal = new DealsPage(page);
    const myCompanySubsidiaryField = page.locator('[formcontrolname="company_name"]');
    const myCompanySubsidiaryFieldPreFilled = page.locator('#form-control-company_name input');
    console.log('NewEditModel My Company Subsidiary Field');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals?&sort=contract_name');
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await deal.addDealButtonClick();
    await expect(myCompanySubsidiaryField).toBeVisible();
    await expect(myCompanySubsidiaryFieldPreFilled).toHaveValue('Client 1HT(test)');
    await page.goto('/deals/edit-deal/8200');
    await expect(myCompanySubsidiaryField).toBeVisible();
    await expect(myCompanySubsidiaryFieldPreFilled).toHaveValue('Client 1HT(test)');
    await userMenu.userInfoButtonClick();
    await userMenu.signOutButtonClick();
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals?&sort=contract_name');
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await deal.addDealButtonClick();
    await expect(myCompanySubsidiaryField).toBeHidden();
    await page.goto('/deals/edit-deal/8200');
    await expect(myCompanySubsidiaryField).toBeHidden();
    await userMenu.userInfoButtonClick();
    await userMenu.signOutButtonClick();
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/deals?&sort=contract_name');
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await deal.addDealButtonClick();
    await expect(myCompanySubsidiaryField).toBeVisible();
    await expect(myCompanySubsidiaryFieldPreFilled).toHaveValue('Client 1HT(test)');
    await page.goto('/deals/edit-deal/8200');
    await expect(myCompanySubsidiaryField).toBeVisible();
    await expect(myCompanySubsidiaryFieldPreFilled).toHaveValue('Client 1HT(test)');
    })

test('myCompanySubsidiaryFieldValidation @regChecklistNewHigh @newEditModelPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const deal = new DealsPage(page);
    const newEditDeals = new NewEditDealPage(page);
    const myCompanySubsidiaryField = page.locator('[formcontrolname="company_name"]');
    const myCompanySubsidiaryFieldError = page.locator('#form-control-company_name mat-error');
    console.log('NewEditModel My Company Subsidiary Field Validation');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals?&sort=contract_name');
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await deal.addDealButtonClick();
    await page.waitForTimeout(1000);
    await expect(myCompanySubsidiaryField).toHaveAttribute('placeholder', 'My Company (Subsidiary)');
    await expect(myCompanySubsidiaryField).toHaveAttribute('maxlength', '255');
    await newEditDeals.myCompanySubsidiaryFieldClear();
    await newEditDeals.createButtonClick();
    await expect(myCompanySubsidiaryFieldError).toHaveText('Please fill in this field');
    await page.goto('/deals/edit-deal/8200');
    await page.waitForTimeout(1000);
    await expect(myCompanySubsidiaryField).toHaveAttribute('placeholder', 'My Company (Subsidiary)');
    await expect(myCompanySubsidiaryField).toHaveAttribute('maxlength', '255');
    await newEditDeals.myCompanySubsidiaryFieldClear();
    await newEditDeals.saveChangesButtonClick();
    await expect(myCompanySubsidiaryFieldError).toHaveText('Please fill in this field');
    })

test('myCompanySubsidiaryFieldDropDown @regChecklistNewMedium @newEditModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const deal = new DealsPage(page);
    const newEditDeals = new NewEditDealPage(page);
    const myCompanySubsidiaryDropDown = page.locator('.mat-autocomplete-visible');
    const myCompanySubsidiaryDropDownOption1 = page.locator('mat-option >> nth=0');
    const myCompanySubsidiaryDropDownOption2 = page.locator('mat-option >> nth=1');
    const myCompanySubsidiaryDropDownOption3 = page.locator('mat-option >> nth=2');
    const myCompanySubsidiaryDropDownOptionSearch1 = page.locator('.mat-option-text >> nth=0');
    const myCompanySubsidiaryDropDownOptionSearch2 = page.locator('.mat-option-text >> nth=1');
    console.log('NewEditModel My Company Subsidiary Field DropDown');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals?&sort=contract_name');
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await deal.addDealButtonClick();
    await newEditDeals.myCompanySubsidiaryFieldClick();
    await expect(myCompanySubsidiaryDropDown).toBeVisible();
    await expect(myCompanySubsidiaryDropDownOption1).toBeVisible();
    await expect(myCompanySubsidiaryDropDownOption2).toBeVisible();
    await expect(myCompanySubsidiaryDropDownOption3).toBeVisible();
    await expect(myCompanySubsidiaryDropDownOption1).toHaveClass('mat-option main ng-star-inserted');
    await newEditDeals.myCompanySubsidiaryFieldFill();
    await expect(myCompanySubsidiaryDropDownOptionSearch1).toHaveText('dsf');
    await expect(myCompanySubsidiaryDropDownOptionSearch2).toHaveText('dsfds');
    await page.goto('/deals/edit-deal/8200');
    await newEditDeals.myCompanySubsidiaryFieldClick();
    await expect(myCompanySubsidiaryDropDown).toBeVisible();
    await expect(myCompanySubsidiaryDropDownOption1).toBeVisible();
    await expect(myCompanySubsidiaryDropDownOption2).toBeVisible();
    await expect(myCompanySubsidiaryDropDownOption3).toBeVisible();
    await expect(myCompanySubsidiaryDropDownOption1).toHaveClass('mat-option main ng-star-inserted');
    await newEditDeals.myCompanySubsidiaryFieldFill();
    await expect(myCompanySubsidiaryDropDownOptionSearch1).toHaveText('dsf');
    await expect(myCompanySubsidiaryDropDownOptionSearch2).toHaveText('dsfds');
})

test('myCompanySubsidiaryFieldSA @regChecklistNewLow @newEditModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const deal = new DealsPage(page);
    const myCompanySubsidiaryField = page.locator('[formcontrolname="company_name"]');
    console.log('NewEditModel My Company Subsidiary Field SA');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals?&sort=contract_name');
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await deal.addDealButtonClick();
    await expect(myCompanySubsidiaryField).toBeHidden();
    await page.goto('/deals/edit-deal/8200');
    await expect(myCompanySubsidiaryField).toBeHidden();
})

test('nameOfTheOtherPartyField @regChecklistNewLow @newEditModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const deal = new DealsPage(page);
    const nameOfTheOtherPartyField = page.locator('[formcontrolname="name_of_the_other_party"]');
    const nameOfTheOtherPartyFieldFilled = page.locator('#form-control-name_of_the_other_party textarea');
    console.log('NewEditModel Name Of The Other Party Field');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals?&sort=contract_name');
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await deal.addDealButtonClick();
    await expect(nameOfTheOtherPartyField).toHaveAttribute('placeholder', 'Name of the Other Party');
    await expect(nameOfTheOtherPartyField).toHaveAttribute('maxlength', '255');
    await page.goto('/deals/edit-deal/8200');
    await expect(nameOfTheOtherPartyField).toHaveAttribute('placeholder', 'Name of the Other Party');
    await expect(nameOfTheOtherPartyField).toHaveAttribute('maxlength', '255');
    await expect(nameOfTheOtherPartyFieldFilled).toHaveValue('test');
})

test('estimatedValueField @regChecklistNewLow @newEditModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const deal = new DealsPage(page);
    const newEditDeal = new NewEditDealPage(page);
    const estimatedValueField = page.locator('[formcontrolname="estimated_value"]');
    const myCompanySubsidiaryFieldFilled = page.locator('#form-control-estimated_value input');
    console.log('NewEditModel Estimated Value Field');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals?&sort=contract_name');
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await deal.addDealButtonClick();
    await expect(estimatedValueField).toHaveAttribute('placeholder', 'Estimated Value');
    await expect(estimatedValueField).toHaveAttribute('maxlength', '13');
    await newEditDeal.esimatedValueFieldFill()
    await expect(myCompanySubsidiaryFieldFilled).toHaveValue('2,222,222');
    await page.goto('/deals/edit-deal/8200');
    await expect(estimatedValueField).toHaveAttribute('placeholder', 'Estimated Value');
    await expect(estimatedValueField).toHaveAttribute('maxlength', '13');
    await expect(myCompanySubsidiaryFieldFilled).toHaveValue('1,111,111,111');
    await newEditDeal.esimatedValueFieldFill()
    await expect(myCompanySubsidiaryFieldFilled).toHaveValue('2,222,222');
})

test('currencyField @regChecklistNewLow @newEditModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const deal = new DealsPage(page);
    const newEditDeal = new NewEditDealPage(page);
    const currencyDefaultValue = page.locator('#form-control-estimated_value_currency mat-select');
    const currencyValue1 = page.locator('.mat-option >> nth=0');
    const currencyValue2 = page.locator('.mat-option >> nth=1');
    console.log('NewEditModel Currency Field');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals?&sort=contract_name');
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await deal.addDealButtonClick();
    await expect(currencyDefaultValue).toHaveText('USD');
    await newEditDeal.currencyDropDownClick();
    await expect(currencyValue1).toBeVisible();
    await expect(currencyValue2).toBeVisible();
    await page.goto('/deals/edit-deal/8200');
    await expect(currencyDefaultValue).toHaveText('USD');
    await newEditDeal.currencyDropDownClick();
    await expect(currencyValue1).toBeVisible();
    await expect(currencyValue2).toBeVisible();
})

test('overviewField @regChecklistNewLow @newEditModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const deal = new DealsPage(page);
    const newEditDeal = new NewEditDealPage(page);
    const overviewField = page.locator('[formcontrolname="description"]');
    const overviewFieldOptional = page.locator('#form-control-description mat-error');
    const overviewFieldCounter = page.locator('.textarea-counter__counter >> nth=0');
    console.log('NewEditModel Overview Field');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals?&sort=contract_name');
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await deal.addDealButtonClick();
    await expect(overviewField).toHaveAttribute('placeholder', 'Overview');
    await expect(overviewField).toHaveAttribute('matautosizemaxrows', '12');
    await expect(overviewField).toHaveAttribute('matautosizeminrows', '2');
    await newEditDeal.createButtonClick();
    await expect(overviewFieldOptional).toBeHidden();
    await expect(overviewFieldCounter).toBeVisible();
    await expect(overviewFieldCounter).toHaveText('0 / 2000');
    await newEditDeal.overviewFieldFillTenDigits();
    await expect(overviewFieldCounter).toHaveText('10 / 2000');
    await newEditDeal.overviewFieldFillMoreThanMax();
    await expect(overviewFieldCounter).toHaveText('2160 / 2000');
    await newEditDeal.createButtonClick();
    await expect(overviewFieldOptional).toHaveText('Overview is 2000 characters maximum');
    await page.goto('/deals/edit-deal/8200');
    await expect(overviewField).toHaveAttribute('placeholder', 'Overview');
    await expect(overviewField).toHaveAttribute('matautosizemaxrows', '12');
    await expect(overviewField).toHaveAttribute('matautosizeminrows', '2');
    await newEditDeal.myCompanySubsidiaryFieldClear();
    await newEditDeal.overviewFieldClear();
    await newEditDeal.saveChangesButtonClick();
    await expect(overviewFieldOptional).toBeHidden();
    await expect(overviewFieldCounter).toBeVisible();
    await newEditDeal.overviewFieldFillTenDigits();
    await expect(overviewFieldCounter).toHaveText('10 / 2000');
    await newEditDeal.overviewFieldFillMoreThanMax();
    await expect(overviewFieldCounter).toHaveText('2160 / 2000');
    await newEditDeal.saveChangesButtonClick();
    await expect(overviewFieldOptional).toHaveText('Overview is 2000 characters maximum');
})

test('notesField @regChecklistNewLow @newEditModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const deal = new DealsPage(page);
    const newEditDeal = new NewEditDealPage(page);
    const notesField = page.locator('[formcontrolname="notes"]');
    const notesFieldOptional = page.locator('#form-control-notes mat-error');
    const notesFieldCounter = page.locator('.textarea-counter__counter >> nth=1');
    console.log('NewEditModel Notes Field');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals?&sort=contract_name');
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await deal.addDealButtonClick();
    await expect(notesField).toHaveAttribute('placeholder', 'Notes (internal)');
    await expect(notesField).toHaveAttribute('matautosizemaxrows', '12');
    await expect(notesField).toHaveAttribute('matautosizeminrows', '2');
    await newEditDeal.createButtonClick();
    await expect(notesFieldOptional).toBeHidden();
    await expect(notesFieldCounter).toBeVisible();
    await expect(notesFieldCounter).toHaveText('0 / 2000');
    await newEditDeal.notesFieldFillTenDigits();
    await expect(notesFieldCounter).toHaveText('10 / 2000');
    await newEditDeal.notesFieldFillMoreThanMax();
    await expect(notesFieldCounter).toHaveText('2160 / 2000');
    await newEditDeal.createButtonClick();
    await expect(notesFieldOptional).toHaveText('Internal Notes are 2000 characters maximum');
    await page.goto('/deals/edit-deal/8200');
    await expect(notesField).toHaveAttribute('placeholder', 'Notes (internal)');
    await expect(notesField).toHaveAttribute('matautosizemaxrows', '12');
    await expect(notesField).toHaveAttribute('matautosizeminrows', '2');
    await newEditDeal.myCompanySubsidiaryFieldClear();
    await newEditDeal.notesFieldClear();
    await newEditDeal.saveChangesButtonClick();
    await expect(notesFieldOptional).toBeHidden();
    await expect(notesFieldCounter).toBeVisible();
    await newEditDeal.notesFieldFillTenDigits();
    await expect(notesFieldCounter).toHaveText('10 / 2000');
    await newEditDeal.notesFieldFillMoreThanMax();
    await expect(notesFieldCounter).toHaveText('2160 / 2000');
    await newEditDeal.saveChangesButtonClick();
    await expect(notesFieldOptional).toHaveText('Internal Notes are 2000 characters maximum');
})

test('agreementNoField @regChecklistNewLow @newEditModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userMenu = new UserBar(page);
    const deal = new DealsPage(page);
    const agreementNoField = page.locator('[formcontrolname="sf_contract_number"]');
    const agreementNoFieldValue = page.locator('[formcontrolname="sf_contract_number"]');
    console.log('NewEditModel Agreement No Field AA');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals?&sort=contract_name');
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await deal.addDealButtonClick();
    await expect(agreementNoField).toBeHidden();
    await page.goto('/deals/edit-deal/8200');
    await expect(agreementNoField).toBeHidden();
    await userMenu.userInfoButtonClick();
    await userMenu.signOutButtonClick();
    console.log('NewEditModel Agreement No Field AU');
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/deals?&sort=contract_name');
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await deal.addDealButtonClick();
    await expect(agreementNoField).toBeHidden();
    await page.goto('/deals/edit-deal/8200');
    await expect(agreementNoField).toBeHidden();
    await userMenu.userInfoButtonClick();
    await userMenu.signOutButtonClick();
    console.log('NewEditModel Agreement No Field SA');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals?&sort=contract_name');
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await deal.addDealButtonClick();
    await expect(agreementNoField).toBeVisible();
    await expect(agreementNoFieldValue).toHaveText('');
    await page.goto('/deals/edit-deal/8200');
    await expect(agreementNoField).toBeVisible();
    await expect(agreementNoFieldValue).toHaveText('');
})

test('displayingLinkToExistingDealButton @regChecklistNewMedium @newEditModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userMenu = new UserBar(page);
    const deal = new DealsPage(page);
    const newEditDeal = new NewEditDealPage(page);
    const linkToExistingDealButton = page.locator('#deal-details-link-to-existing-deal');
    const linkTOExistingDealButtonDisabledEnabled = page.locator('.mat-dialog-container');
    console.log('NewEditModel Displaying Link To Existing Deal Button AA');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals?&sort=contract_name');
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await deal.addDealButtonClick();
    await expect(linkToExistingDealButton).toBeVisible();
    await newEditDeal.linkToExistingDealButtonClick();
    await expect(linkTOExistingDealButtonDisabledEnabled).toBeVisible();
    await page.goto('/deals/edit-deal/8200');
    await expect(linkToExistingDealButton).toBeHidden();
    await userMenu.userInfoButtonClick();
    await userMenu.signOutButtonClick();
    console.log('NewEditModel Displaying Link To Existing Deal Button AU');
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await page.goto('/deals?&sort=contract_name');
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await deal.addDealButtonClick();
    await expect(linkToExistingDealButton).toBeVisible();
    await newEditDeal.linkToExistingDealButtonClick();
    await expect(linkTOExistingDealButtonDisabledEnabled).toBeVisible();
    await page.goto('/deals/edit-deal/8200');
    await expect(linkToExistingDealButton).toBeHidden();
    await userMenu.userInfoButtonClick();
    await userMenu.signOutButtonClick();
    console.log('NewEditModel Displaying Link To Existing Deal Button SA');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals?&sort=contract_name');
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await deal.addDealButtonClick();
    await page.waitForTimeout(500);
    await expect(linkToExistingDealButton).toBeVisible();
    await expect(linkToExistingDealButton).toHaveAttribute('disabled', '');
    await newEditDeal.clientDropDownChoose();
    await expect(linkToExistingDealButton).toBeVisible();
    await newEditDeal.linkToExistingDealButtonClick();
    await expect(linkTOExistingDealButtonDisabledEnabled).toBeVisible();
    await page.goto('/deals/edit-deal/8200');
    await expect(linkToExistingDealButton).toBeHidden();
})

test('linkToExistingDealButtonValidation @regChecklistNewHigh @newEditModelPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const deal = new DealsPage(page);
    const newEditDeal = new NewEditDealPage(page);
    const linkTOExistingDealButtonDisabledEnabled = page.locator('.mat-dialog-container');
    console.log('NewEditModel Link To Existing Deal Button Validation');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals?&sort=contract_name');
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await deal.addDealButtonClick();
    await newEditDeal.linkToExistingDealButtonClick();
    await expect(linkTOExistingDealButtonDisabledEnabled).toBeVisible();
})

test('linkToExistingDealPopup @regChecklistNewLow @newEditModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userMenu = new UserBar(page);
    const deal = new DealsPage(page);
    const newEditDeal = new NewEditDealPage(page);
    const LinkToExistingDealPopupRow0 = page.locator('tr.mat-row.ng-star-inserted >> nth=0');
    const LinkToExistingDealPopupRow1 = page.locator('tr.mat-row.ng-star-inserted >> nth=1');
    const LinkToExistingDealPopupRow2 = page.locator('tr.mat-row.ng-star-inserted >> nth=2');
    console.log('NewEditModel Link To Existing Deal Popup AA');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals?&sort=contract_name');
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await deal.addDealButtonClick();
    await newEditDeal.linkToExistingDealButtonClick();
    await expect(LinkToExistingDealPopupRow0).toBeVisible();
    await expect(LinkToExistingDealPopupRow0).toHaveText(' BB test 12Test OTHER 100% ');
    await expect(LinkToExistingDealPopupRow1).toBeVisible();
    await expect(LinkToExistingDealPopupRow1).toHaveText(' Cont122 12Test OTHER 100% ');
    await expect(LinkToExistingDealPopupRow2).toBeVisible();
    await expect(LinkToExistingDealPopupRow2).toHaveText(' Deal apr Other 100% ');
    await newEditDeal.linkToExistingDealPopupSortStatusUse();
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await expect(LinkToExistingDealPopupRow0).toHaveText(' Cont122 12Test OTHER 100% ');
    await newEditDeal.linkToExistingDealPopupSortDealUse();
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await expect(LinkToExistingDealPopupRow0).toHaveText(' BB test 12Test OTHER 100% ');
    await newEditDeal.linkToExistingDealPopupCloseButtonClick();
    await userMenu.userInfoButtonClick();
    await userMenu.signOutButtonClick();
    console.log('NewEditModel Displaying Link To Existing Deal Popup SA');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals?&sort=contract_name');
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await deal.addDealButtonClick();
    await page.waitForTimeout(500);
    await newEditDeal.clientDropDownChoose();
    await newEditDeal.linkToExistingDealButtonClick();
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await expect(LinkToExistingDealPopupRow0).toBeVisible();
    await expect(LinkToExistingDealPopupRow0).toHaveText(' BB test 12Test OTHER 100% ');
    await expect(LinkToExistingDealPopupRow1).toBeVisible();
    await expect(LinkToExistingDealPopupRow1).toHaveText(' Cont122 12Test OTHER 100% ');
    await expect(LinkToExistingDealPopupRow2).toBeVisible()
    await expect(LinkToExistingDealPopupRow2).toHaveText(' Deal apr Other 100% ');
    await newEditDeal.linkToExistingDealPopupSortStatusUse();
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await expect(LinkToExistingDealPopupRow0).toHaveText(' Cont122 12Test OTHER 100% ');
    await newEditDeal.linkToExistingDealPopupSortDealUse();
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await expect(LinkToExistingDealPopupRow0).toHaveText(' BB test 12Test OTHER 100% ');
})

test('linkToExistingDealPopupSearch @regChecklistNewMedium @newEditModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const deal = new DealsPage(page);
    const newEditDeal = new NewEditDealPage(page);
    const LinkToExistingDealPopupRow0 = page.locator('tr.mat-row.ng-star-inserted >> nth=0');
    const LinkToExistingDealPopupRow1 = page.locator('tr.mat-row.ng-star-inserted >> nth=1');
    const LinkToExistingDealPopupRow2 = page.locator('tr.mat-row.ng-star-inserted >> nth=2');
    console.log('NewEditModel Link To Existing Deal Popup Search');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals?&sort=contract_name');
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await deal.addDealButtonClick();
    await newEditDeal.linkToExistingDealButtonClick();
    await newEditDeal.linkToExistingDealPopupSearchUse();
    await expect(LinkToExistingDealPopupRow0).toBeVisible();
    await expect(LinkToExistingDealPopupRow0).toHaveText(' Cont122 12Test OTHER 100% ');
    await expect(LinkToExistingDealPopupRow1).toBeHidden();
    await expect(LinkToExistingDealPopupRow2).toBeHidden();
})

test('linkToExistingDealPopupDealStatusColumns @regChecklistNewLow @newEditModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const deal = new DealsPage(page);
    const newEditDeal = new NewEditDealPage(page);
    const LinkToExistingDealPopupDeal0 = page.locator('td.mat-cell.cdk-column-deal.mat-column-deal.ng-star-inserted >> nth=0');
    const LinkToExistingDealPopupDeal1 = page.locator('td.mat-cell.cdk-column-deal.mat-column-deal.ng-star-inserted >> nth=1');
    const LinkToExistingDealPopupDeal2 = page.locator('td.mat-cell.cdk-column-deal.mat-column-deal.ng-star-inserted >> nth=2');
    const LinkToExistingDealPopupStatus0 = page.locator('span.status-progress__percent >> nth=0');
    const LinkToExistingDealPopupStatus1 = page.locator('span.status-progress__percent >> nth=1');
    const LinkToExistingDealPopupStatus2 = page.locator('span.status-progress__percent >> nth=2');
    console.log('NewEditModel Link To Existing Deal Popup Deal/Status Columns');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals?&sort=contract_name');
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await deal.addDealButtonClick();
    await newEditDeal.linkToExistingDealButtonClick();
    await expect(LinkToExistingDealPopupDeal0).toBeVisible();
    await expect(LinkToExistingDealPopupDeal0).toHaveText('BB test 12Test OTHER');
    await expect(LinkToExistingDealPopupDeal1).toBeVisible();
    await expect(LinkToExistingDealPopupDeal1).toHaveText('Cont122 12Test OTHER');
    await expect(LinkToExistingDealPopupDeal2).toBeVisible();
    await expect(LinkToExistingDealPopupDeal2).toHaveText('Deal apr Other');
    await expect(LinkToExistingDealPopupStatus0).toBeVisible();
    await expect(LinkToExistingDealPopupStatus0).toHaveText('100%');
    await expect(LinkToExistingDealPopupStatus1).toBeVisible();
    await expect(LinkToExistingDealPopupStatus1).toHaveText('100%');
    await expect(LinkToExistingDealPopupStatus2).toBeVisible();
    await expect(LinkToExistingDealPopupStatus2).toHaveText('100%');
})

test('linkToExistingDealPopupSelectButton @regChecklistNewHigh @newEditModelPage', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const deal = new DealsPage(page);
    const newEditDeal = new NewEditDealPage(page);
    const selectButton = page.locator('#linking-deal-select');
    const selectedDealTitle = page.locator('.title');
    const selectedDealName = page.locator('.name');
    console.log('NewEditModel Link To Existing Deal Popup Select Button');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals?&sort=contract_name');
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await deal.addDealButtonClick();
    await newEditDeal.linkToExistingDealButtonClick();
    await expect(selectButton).toHaveAttribute('disabled', '');
    await newEditDeal.linkToExistingDealPopupRadioButtonForSelectClick();
    await newEditDeal.linkToExistingDealPopupSelectButtonClick();
    await expect(selectedDealTitle).toBeVisible();
    await expect(selectedDealTitle).toHaveText('Link to existing Deal');
    await expect(selectedDealName).toBeVisible();
    await expect(selectedDealName).toHaveText('BB test');
})

test('linkToExistingDealPopupCancelButton @regChecklistNewLow @newEditModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const deal = new DealsPage(page);
    const newEditDeal = new NewEditDealPage(page);
    const selectPopup = page.locator('.mat-dialog-container');
    const selectedDealTitle = page.locator('.title');
    const selectedDealName = page.locator('.name');
    console.log('NewEditModel Link To Existing Deal Popup Cancel Button');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals?&sort=contract_name');
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await deal.addDealButtonClick();
    await newEditDeal.linkToExistingDealButtonClick();
    await newEditDeal.linkToExistingDealPopupRadioButtonForSelectClick();
    await newEditDeal.linkToExistingDealPopupCloseButtonClick();
    await expect(selectPopup).toBeHidden();
    await expect(selectedDealTitle).toBeHidden();
    await expect(selectedDealName).toBeHidden();
})

test('linkToExistingDealPopupALotOfDeals @regChecklistNewMedium @newEditModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const deal = new DealsPage(page);
    const newEditDeal = new NewEditDealPage(page);
    const selectPopupRow1 = page.locator('tr.mat-row.ng-star-inserted >> nth=11');
    const selectPopupRow2 = page.locator('tr.mat-row.ng-star-inserted >> nth=23');
    const selectPopupRow3 = page.locator('tr.mat-row.ng-star-inserted >> nth=49');
    const selectPopup = page.locator('.mat-dialog-container');
    const selectedDealTitle = page.locator('.title');
    const selectedDealName = page.locator('.name');
    console.log('NewEditModel Link To Existing Deal Popup A Lot Of Deals');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals?&sort=contract_name');
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await deal.addDealButtonClick();
    await page.waitForTimeout(500);
    await newEditDeal.clientDropDownChoose2();
    await newEditDeal.linkToExistingDealButtonClick();
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=49');
    await expect(selectPopupRow1).toBeVisible();
    await expect(selectPopupRow2).toBeVisible();
    await expect(selectPopupRow3).toBeVisible();
    await newEditDeal.linkToExistingDealPopupRadioButtonForSelectClick2();
    await newEditDeal.linkToExistingDealPopupSelectButtonClick();
    await expect(selectPopup).toBeHidden();
    await expect(selectedDealTitle).toBeVisible();
    await expect(selectedDealTitle).toHaveText('Link to existing Deal');
    await expect(selectedDealName).toBeVisible();
    await expect(selectedDealName).toHaveText('Deal 1');
})

test('dealStatus @regChecklistNewLow @newEditModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const deal = new DealsPage(page);
    const dealStatusProgressBar = page.locator('.mat-progress-bar')
    const dealStatusPercentage = page.locator('.deal-status')
    console.log('NewEditModel Deal Status');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals?&sort=contract_name');
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await deal.addDealButtonClick();
    await expect(dealStatusProgressBar).toBeVisible();
    await expect(dealStatusPercentage).toHaveText('Deal Status: 0%');
    await page.goto('/deals/edit-deal/8200');
    await page.waitForTimeout(500);
    await expect(dealStatusProgressBar).toBeVisible();
    await expect(dealStatusPercentage).toHaveText('Deal Status: 20%');
})

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
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await deal.addDealButtonClick();
    await newEditDeal.createButtonClick();
    await page.waitForSelector('#form-control-model_id mat-error');
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
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await deal.createFilterClick();
    await page.waitForTimeout(1000);
    await deal.threeDotsMenuEditButtonClick();
    await newEditDeal.contractNameFieldClear();
    await newEditDeal.nameOfTheOtherPartyFieldClear();
    await newEditDeal.esimatedValueFieldClear();
    await newEditDeal.saveChangesButtonClick();
    await page.waitForSelector('#form-control-contract_name mat-error');
    await expect(contractName).toHaveText('Please fill in this field');
    await expect(nameOfOtherParty).toHaveText('Please fill in this field');
    await expect(estimatedValue).toHaveText('Please fill in this field');
    await newEditDeal.contractNameFieldFill(Helpers.generateRandomString());
    await newEditDeal.nameOfTheOtherPartyFieldFill(Helpers.generateRandomString());
    await newEditDeal.esimatedValueFieldFill();
    await newEditDeal.saveChangesButtonClick();
    await expect(analysisPage).toBeVisible();
})

test('cancelButton @regChecklistNewLow @newEditModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const deal = new DealsPage(page);
    const newEditDeal = new NewEditDealPage(page);
    console.log('NewEditModel Cancel Button');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals?&sort=contract_name');
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await deal.addDealButtonClick();
    await newEditDeal.cancelButtonClick();
    await expect(page).toHaveURL('/deals?&sort=contract_name');
    await page.goto('/deals?&sort=contract_name');
    await deal.threeDotsMenuEditButtonClick();
    await newEditDeal.cancelButtonClick();
    await expect(page).toHaveURL('/deals?&sort=contract_name');
})

test('modelId @regChecklistNewLow @newEditModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const deal = new DealsPage(page);
    const modelId = page.locator('.watermark-wrap-item >> nth=0');
    console.log('NewEditModel Model ID');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals?&sort=contract_name');
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await deal.addDealButtonClick();
    await expect(modelId).toBeHidden();
    await page.goto('/deals/edit-deal/8200');
    await expect(modelId).toBeVisible();
    await expect(modelId).toHaveText('Model 1531');
})

test('dealId @regChecklistNewLow @newEditModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const deal = new DealsPage(page);
    const dealId = page.locator('.watermark-wrap-item >> nth=1');
    console.log('NewEditModel Deal ID');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/deals?&sort=contract_name');
    await page.waitForSelector('tr.mat-row.ng-star-inserted >> nth=0');
    await deal.addDealButtonClick();
    await expect(dealId).toBeHidden();
    await page.goto('/deals/edit-deal/8200');
    await expect(dealId).toBeVisible();
    await expect(dealId).toHaveText('Deal 8200');
})