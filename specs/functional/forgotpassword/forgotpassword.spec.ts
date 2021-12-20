import { test, expect } from '@playwright/test';
import { PlaywrightTestConfig, devices } from '@playwright/test';
import { ForgotPasswordPage } from '../../../framework'
import { URL } from '../../../framework'

test('buttonBack', async ({ page }) => {
  
  console.log("buttonBack")
  const mainPage = new ForgotPasswordPage(page);
  const mainUrl = new URL(page);
  await mainUrl.goToUrl();
  await mainPage.buttonBack();
});