import { test, expect } from '@playwright/test';
import { PlaywrightTestConfig, devices } from '@playwright/test';
import { LoginPage } from '../../../framework'
import { URL } from '../../../framework'


test('homeButtonValidation @login @high', async ({ page }) => {
  
  console.log("Home button validation")
  const mainPage = new LoginPage(page);
  const mainUrl = new URL(page);
  await mainUrl.goToUrl();
  await mainPage.homeButtonValidation();
});

test('forgotYourPassword @login', async ({ page }) => {
  
  console.log("Forgot your password validation")
  const mainPage = new LoginPage(page);
  const mainUrl = new URL(page);
  await mainUrl.goToUrl();
  await mainPage.forgotYourPassword();
});

test('signUpHere @login', async ({ page }) => {
  
  console.log("Sign Up here")
  const mainPage = new LoginPage(page);
  const mainUrl = new URL(page);
  await mainUrl.goToUrl();
  await mainPage.signUpHere();
});

test('emptyFields @login', async ({ page }) => {
  
  console.log("Empty fields")
  const mainPage = new LoginPage(page);
  const mainUrl = new URL(page);
  await mainUrl.goToUrl();
  await mainPage.emptyFields();
});

test('shortPasswordValidation @login', async ({ page }) => {
  
  console.log("Short password validation")
  const mainPage = new LoginPage(page);
  const mainUrl = new URL(page);
  await mainUrl.goToUrl();
  await mainPage.shortPasswordValidation();
});

test('incorrectEmailFormat @login', async ({ page }) => {
  
  console.log("Incorrect email format")
  const mainPage = new LoginPage(page);
  const mainUrl = new URL(page);
  await mainUrl.goToUrl();
  await mainPage.incorrectEmailFormat();
});

test('eyeButtonValidation @login', async ({ page }) => {
  
  console.log("Eye button validation")
  const mainPage = new LoginPage(page);
  const mainUrl = new URL(page);
  await mainUrl.goToUrl();
  await mainPage.eyeButtonValidation();
});

