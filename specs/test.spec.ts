import { test , expect } from '@playwright/test'
import { url } from 'inspector'
import { UserBar, Users } from '../framework'
import { SignInPage } from '../framework'
import { SideBar } from '../framework'
import { TemplatesPage } from '../framework'
import { Helpers } from '../lib/helpers/randomCharactersAndDigits.preload'

test.beforeEach(async ({ page }) => {
    await page.goto('');
}); 

test('SAcanSeeClickTracts @regClickTractsLow @accessToClickTrackts', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const subscriptionDetailsClientPage = page.locator('.subscription-item');
    const subscriptionDetailsEditClientPage = page.locator('.subscription-item');
    const changeSubscriptionButton = page.locator('.mat-button >> text=change'); //to be refactored
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/clients/265');
    await expect(subscriptionDetailsClientPage).toBeVisible();
    await page.goto('/clients/edit-client/265');
    await expect(subscriptionDetailsEditClientPage).toBeVisible();
    await expect(changeSubscriptionButton).toBeVisible();
    })