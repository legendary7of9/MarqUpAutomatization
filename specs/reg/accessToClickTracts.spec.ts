import { test , expect, chromium } from '@playwright/test'
import { Users } from '../../framework'
import { SignInPage } from '../../framework'
import { UserBar } from '../../framework'

test.beforeEach(async ({ page }) => {
    await page.goto('');
}); 

test('AAAUcanSeeClickTracts @regClickTractsHigh @accessToClickTrackts', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const userBar = new UserBar(page);
    const clickTracts = page.locator('.sidebar-menu__item-link >> text=ClickTracts'); //to be refactored
    await users.AA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await expect(clickTracts).toBeVisible();
    await userBar.userInfoButtonClick();
    await userBar.signOutButtonClick();
    await users.AU();
    await signIn.signInButton();
    await page.waitForURL('/clients/265');
    await expect(clickTracts).toBeVisible();
});

test('SAcanSeeClickTracts @regClickTractsHigh @accessToClickTrackts', async ({ page }) => {
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const clickTracts = page.locator('.sidebar-menu__item-link >> text=ClickTracts'); //to be refactored
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await expect(clickTracts).toBeVisible();
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
});