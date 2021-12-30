import { test , expect } from '@playwright/test'
import { Users } from '../framework'
import { SignInPage } from '../framework'
import { SideBar } from '../framework'
import { ModelPage } from '../framework'
import { NewModelPage } from '../framework'
import { Helpers } from '../lib/helpers/randomCharactersAndDigits.preload'

test.beforeEach(async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const sideBarMenu = new SideBar(page);
    const model = new ModelPage(page);
    const newModel = new NewModelPage(page);
    await page.goto('');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await sideBarMenu.sideBarModelClick();
    await model.addModelButtonClick();
    await model.addModalNewModalButtonClick();
    await newModel.nameFieldFill(Helpers.generateRandomString());
    await newModel.descriptionFieldFill(Helpers.generateRandomString());
    await newModel.typeDropDownChoose();
    await newModel.fromFieldFill(Helpers.generateRandomNumberNewDealFrom(1, 31));
    await newModel.toFieldFill(Helpers.generateRandomNumberNewDealTo(60, 100));
    await newModel.nextButtonClick();
});  

    test.skip('qwerty @regChecklistNewHigh @login', async ({ page }) => {
        const name = new NewModelPage(page);
        //const randomString = Helpers.generateRandomString();
        await name.nameFieldFill(Helpers.generateRandomString());
        })

        //test('qwerty2 @regChecklistNewHigh @login', async ({ page }) => {
            //const name = new newModelPageAAAU(page);
            //const randomString = Helpers.generateRandomString();
            //await name.toFieldFill(Helpers.generateRandomNumber());
            //await name.fromFieldFill(Helpers.generateRandomNumber());
            //})

            test('descriptionField @regChecklistNewLow @newTermPage', async ({ page }) => {
                const locator = page.locator('[formcontrolname="description"]');
                await expect(locator).toHaveAttribute('placeholder', 'Description');
                await expect(locator).toHaveAttribute('maxlength', '255');
                })