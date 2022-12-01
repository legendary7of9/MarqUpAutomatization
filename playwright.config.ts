import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  timeout: 180000,
  workers: 1,
  projects: [
    {
      name: 'webkit',
      use: { browserName: 'webkit', }
    },
    {
      name: 'chrome',
      use: { browserName: 'chromium', }
    },
    // {
    //   name: 'firefox',
    //   use: { browserName: 'firefox', }
    // }
  ],
  
  use: {
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
    baseURL: 'https://marqup.test.noredlines.com',
    acceptDownloads: true
  },
  retries: 0, //2
  reporter: [
    ['list'],
    ['html', { open: 'on-failure' }],
    ['allure-playwright'],
    ['experimental-allure-playwright']
   ]
};

export default config;