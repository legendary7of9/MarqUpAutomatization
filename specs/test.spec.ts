import { test , expect } from '@playwright/test'
import { USERS } from '../framework'
import { signInPage } from '../framework'
import { modelPage } from '../framework'
import { newModelPageAAAU } from '../framework'
import { Helpers } from '../lib/helpers/randomCharactersAndDigits.preload'

test.beforeEach(async ({ page }) => {
    const users = new USERS(page);
    const signIn = new signInPage(page);

    const addModel = new modelPage(page);
    test.setTimeout(120000);
    await page.goto('');
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models?&sort=name');
    await addModel.addModelButton();
    await addModel.addModalNewModalButton();
});   

    test.skip('qwerty @regChecklistnewHigh @login', async ({ page }) => {
        const name = new newModelPageAAAU(page);
        //const randomString = Helpers.generateRandomString();
        await name.nameFieldFill(Helpers.generateRandomString());
        })

        //test('qwerty2 @regChecklistnewHigh @login', async ({ page }) => {
            //const name = new newModelPageAAAU(page);
            //const randomString = Helpers.generateRandomString();
            //await name.toFieldFill(Helpers.generateRandomNumber());
            //await name.fromFieldFill(Helpers.generateRandomNumber());
            //})

            test('typeDropDownValidation @regChecklistnewLow @newModelPage', async ({ page }) => {
                const typeDropDown = new newModelPageAAAU(page);
                await typeDropDown.typeDropDownClick();
                await page.click('body:nth-child(2) div.cdk-overlay-container:nth-child(8) > div.cdk-overlay-backdrop.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing');
                const locator = page.locator('text=Please fill in this field');
                await expect(locator).toHaveText(['Please fill in this field']);
                })    