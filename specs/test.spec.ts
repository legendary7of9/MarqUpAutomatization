import { test, expect } from '@playwright/test';
import { PlaywrightTestConfig, devices } from '@playwright/test';
import { LoginPage } from '../framework'
import { URL } from '../framework'


test('eyeButtonValidation', async ({ page }) => {
  
    console.log("eyeButtonValidation")
    const mainPage = new LoginPage(page);
    const mainUrl = new URL(page);
    await mainUrl.goToUrl();
    await mainPage.eyeButtonValidation();
  });