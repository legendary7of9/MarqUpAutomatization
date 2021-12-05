import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  workers: 3,
  projects: [
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'], }
    },
    {
        name: 'chromium',
        use: { ...devices['Desktop Chrome'], },
    },
    {
        name: 'firefox',
        use: { ...devices['Desktop Firefox'], }
    },
  ],
  
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  retries: 0,
  reporter: [
    ['list'],
    ['allure-playwright'],
    ['experimental-allure-playwright']
   ]
};

export default config;