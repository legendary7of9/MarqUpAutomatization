import { test , expect } from '@playwright/test'
import { kMaxLength, kStringMaxLength } from 'buffer'
import { USERS } from '../../framework'
import { signInPage } from '../../framework'
import { modelPage } from '../../framework'
import { newModelPageAAAU } from '../../framework'
import { Helpers } from '../../lib/helpers/randomCharactersAndDigits.preload'

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

test('nameField @regChecklistnewHigh @newModelPage', async ({ page }) => {
    const locator = page.locator('[formcontrolname="name"]');
    await expect(locator).toHaveAttribute('placeholder', 'Name');
    await expect(locator).toHaveAttribute('maxlength', '255');
    })

test('nameFieldValidation @regChecklistnewLow @newModelPage', async ({ page }) => {
    const nameField = new newModelPageAAAU(page);
    await nameField.nameFieldFill('');
    await page.click('text=New Model');
    const locator = page.locator('text=Please fill in this field');
    await expect(locator).toHaveText(['Please fill in this field']);
    })

test('descriptionField @regChecklistnewHigh @newModelPage', async ({ page }) => {
    const locator = page.locator('[formcontrolname="description"]');
    await expect(locator).toHaveAttribute('placeholder', 'Description');
    await expect(locator).toHaveAttribute('maxlength', '255');
    })

test('typeField @regChecklistnewHigh @newModelPage', async ({ page }) => {
    const locator = page.locator('[formcontrolname="type_id"]');
    await expect(locator).toHaveAttribute('placeholder', 'Type');
    await expect(locator).toHaveAttribute('role', 'listbox');
    })

    //to be refactored
test('typeDropDownValidation @regChecklistnewLow @newModelPage', async ({ page }) => {
    const typeDropDown = new newModelPageAAAU(page);
    await typeDropDown.typeDropDownClick();
    await page.click('text=New Model');
    const locator = page.locator('text=Please fill in this field');
    await expect(locator).toHaveText(['Please fill in this field']);
    })    