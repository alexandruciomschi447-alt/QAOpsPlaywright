// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  timeout: 40 * 1000,

  expect: {
    timeout: 40 * 1000,
  },

  reporter: 'html',

  use: {
    browserName: 'chromium',
    headless: false,          // pune true dacă nu vrei să vezi browserul
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',  // colectează trace la retry
  },
});