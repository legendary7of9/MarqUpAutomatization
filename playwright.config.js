const { devices } = require('@playwright/test');

const config = {
  projects: [
    {
        name: 'chrome',
        use: {
            browserName: 'chromium',
        },
    },
    {
        name: 'webkit',
        use: {
            browserName: 'webkit',
        }
    },
    {
        name: 'firefox',
        use: {
            browserName: 'firefox',
        }
    },
  ], 
  reporter: [
    ['line'], 
    ['experimental-allure-playwright'],
  ],
};

module.exports = config;