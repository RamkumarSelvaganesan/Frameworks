import { PlaywrightTestConfig } from '@playwright/test';
import { trace } from 'console';
import { on } from 'events';

const config: PlaywrightTestConfig = {
  // Specify the test files or directories to run tests from
  testMatch: '**/*.specs.ts',

  // Specify the browsers to run tests in
  use: {
    // Use Chromium browser
    browserName: 'chromium',
    // Or uncomment the lines below to use Firefox and WebKit browsers
    // browserName: 'firefox',
    // channel: 'nightly',
    // browserName: 'webkit',
    headless: false,
    trace: 'on'
  },

  // Optionally, specify additional configuration options
  // For example, setting retries and timeout
  //retries: 3,
  
  timeout: 120*1000,
  reporter: [
    ['junit', { outputFile: 'results.xml' }],
    ['list'],
    ['html'],
    ["line"],
    [
      "allure-playwright",
      {
        detail: true,
        outputFolder: "allure-results",
        suiteTitle: true,
        categories: [
          {
            name: "Outdated tests",
            messageRegex: ".*FileNotFound.*",
          },
        ],
        environmentInfo: {
          framework: "playwright",
        },
      },
    ],
  ],

};

export default config;