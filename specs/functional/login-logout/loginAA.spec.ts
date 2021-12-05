import { test, expect } from '@playwright/test';
import { PlaywrightTestConfig, devices } from '@playwright/test';
import { LoginPage } from '../../../framework'
import { URL } from '../../../framework'



test('loginAA', async ({ page }) => {
  
  console.log("Successful login")
  const mainPage = new LoginPage(page);
  const mainUrl = new URL(page);
  await mainUrl.goToUrl();
  await mainPage.loginAA();
});