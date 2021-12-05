import { test, expect } from '@playwright/test';
import { PlaywrightTestConfig, devices } from '@playwright/test';
import { LoginPage } from '../../../framework'
import { URL } from '../../../framework'


test('homeButtonValidation', async ({ page }) => {
  
  console.log("Forgot your password validation")
  const mainPage = new LoginPage(page);
  const mainUrl = new URL(page);
  await mainUrl.goToUrl();
  await mainPage.homeButtonValidation();
});

test('forgotYourPassword', async ({ page }) => {
  
  console.log("Forgot your password validation")
  const mainPage = new LoginPage(page);
  const mainUrl = new URL(page);
  await mainUrl.goToUrl();
  await mainPage.forgotYourPassword();
});

test('signUpHere', async ({ page }) => {
  
  console.log("Sign Up here")
  const mainPage = new LoginPage(page);
  const mainUrl = new URL(page);
  await mainUrl.goToUrl();
  await mainPage.signUpHere();
});

test('emptyFields', async ({ page }) => {
  
  console.log("emptyFields")
  const mainPage = new LoginPage(page);
  const mainUrl = new URL(page);
  await mainUrl.goToUrl();
  await mainPage.emptyFields();
});

test('shortPasswordValidation', async ({ page }) => {
  
  console.log("shortPasswordValidation")
  const mainPage = new LoginPage(page);
  const mainUrl = new URL(page);
  await mainUrl.goToUrl();
  await mainPage.shortPasswordValidation();
});

test('incorrectEmailFormat', async ({ page }) => {
  
  console.log("incorrectEmailFormat")
  const mainPage = new LoginPage(page);
  const mainUrl = new URL(page);
  await mainUrl.goToUrl();
  await mainPage.incorrectEmailFormat();
});

