const { devices } = require('@playwright/test');

const config = {
  projects: [
    {
        name: 'Chrome',
        use: {
            browserName: 'chromium',
        },
    },
    {
        name: 'Safari',
        use: {
            browserName: 'webkit',
        }
    },
    {
        name: 'FireFox',
        use: {
            browserName: 'firefox',
        }
    },
  ],
  reporter: [
    ['line'], 
    ['experimental-allure-playwright']
  ],
};

module.exports = config;