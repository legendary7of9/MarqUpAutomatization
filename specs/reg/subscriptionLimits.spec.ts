import { test , expect } from '@playwright/test'
import { Users } from '../../framework'
import { SignInPage } from '../../framework'
import { SideBar } from '../../framework'
import { ModelPage } from '../../framework'
import { NewEditModelPage } from '../../framework'
import { UserBar } from '../../framework'

test.beforeEach(async ({ page }) => {
    await page.goto('');
}); 

test('subscriptionLimitEditModelPage @regChecklistNewMedium @editModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const editModel = new NewEditModelPage(page);
    const userbar = new UserBar(page);
    const popup = page.locator('.mat-dialog-container');
    const updateSubscription = page.locator('#not-available-popup-update-subscription');
    const close = page.locator('#not-available-popup-close');
    console.log('Subscription Limit Edit Model Page');
    await users.AASubscriptionLimits();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/edit-model/966');
    await editModel.activateButtonClick();
    await expect(popup).toHaveText('Please update your subscription to add more modelsUpdate subscriptionClose');
    await expect(updateSubscription).toBeVisible();
    await expect(close).toBeVisible();
    await editModel.activatePopupCloseButtonClick();
    await expect(popup).toBeHidden();
    await userbar.userInfoButtonClick();
    await userbar.signOutButtonClick();
    await users.AUSubscriptionLimits();
    await signIn.signInButton();
    await page.waitForURL('/clients/383');
    await page.goto('/models/edit-model/966');
    await editModel.activateButtonClick();
    await expect(popup).toHaveText('Please contact your Account Admin to update your subscription and add more modelsClose');
    await expect(close).toBeVisible();
    await expect(updateSubscription).toBeHidden();
    await editModel.activatePopupCloseButtonClick();
    await expect(popup).toBeHidden();
    await userbar.userInfoButtonClick();
    await userbar.signOutButtonClick();
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/edit-model/966');
    await editModel.activateButtonClick();
    await expect(popup).toHaveText('Please update your subscription to add more modelsUpdate subscriptionClose');
    await expect(close).toBeVisible();
    await expect(updateSubscription).toBeVisible();
    await editModel.activatePopupCloseButtonClick();
    await expect(popup).toBeHidden();
    })

test('subscriptionLimitPopupUpdateSubscriptionButtonEditModelPage @regChecklistNewMedium @editModelPage', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit');
    const users = new Users(page);
    const signIn = new SignInPage(page);
    const editModel = new NewEditModelPage(page);
    const userbar = new UserBar(page);
    console.log('Subscription LimitPopup Update Subscription Button Edit Model Page');
    await users.AASubscriptionLimits();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/edit-model/966');
    await editModel.activateButtonClick();
    await editModel.activatePopupUpdateSubscriptionButtonClick();
    await expect(page).toHaveURL('/clients/edit-client/383?update_plan=true');
    await userbar.userInfoButtonClick();
    await userbar.signOutButtonClick();
    await users.SA();
    await signIn.signInButton();
    await page.waitForURL('/dashboard');
    await page.goto('/models/edit-model/966');
    await editModel.activateButtonClick();
    await editModel.activatePopupUpdateSubscriptionButtonClick();
    await expect(page).toHaveURL('/clients/edit-client/383?update_plan=true');
})