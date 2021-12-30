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
    await page.goto('');
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await sideBarMenu.sideBarModelClick();
    await model.addModelButtonClick();
    await model.addModalNewModalButtonClick();
});   

    test.skip('qwerty @regChecklistnewHigh @login', async ({ page }) => {
        const name = new NewModelPage(page);
        //const randomString = Helpers.generateRandomString();
        await name.nameFieldFill(Helpers.generateRandomString());
        })

        //test('qwerty2 @regChecklistnewHigh @login', async ({ page }) => {
            //const name = new newModelPageAAAU(page);
            //const randomString = Helpers.generateRandomString();
            //await name.toFieldFill(Helpers.generateRandomNumber());
            //await name.fromFieldFill(Helpers.generateRandomNumber());
            //})

            test('clientFieldSA @regChecklistnewHigh @newModelPage', async ({ page }) => {
                const locator = page.locator('[formcontrolname="account_id"]');
                await expect(locator).toHaveAttribute('placeholder', 'Client');
                await expect(locator).toHaveAttribute('role', 'listbox');
                })