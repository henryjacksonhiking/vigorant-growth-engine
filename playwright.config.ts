import { defineConfig, devices } from "@playwright/test";

/**
 * Visual regression + overflow tests on mobile breakpoints.
 *
 * Run locally:
 *   npx playwright install --with-deps   (one-time)
 *   npm run test:e2e                     (assertions only — fast)
 *   npm run test:visual                  (visual snapshots)
 *   npm run test:visual:update           (update snapshots after intentional UI changes)
 */
export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? "http://127.0.0.1:4173",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  // Stable snapshots: small pixel/ratio tolerance for sub-pixel font rendering diffs.
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.01,
      animations: "disabled",
      caret: "hide",
    },
  },
  projects: [
    {
      name: "mobile-iphone-se",
      use: { ...devices["iPhone SE"] }, // 375x667
    },
    {
      name: "mobile-iphone-12",
      use: { ...devices["iPhone 12"] }, // 390x844
    },
    {
      name: "mobile-pixel-5",
      use: { ...devices["Pixel 5"] }, // 393x851
    },
    {
      name: "mobile-iphone-14-pro-max",
      use: { ...devices["iPhone 14 Pro Max"] }, // 430x932
    },
    {
      name: "tablet-ipad-mini",
      use: { ...devices["iPad Mini"] }, // 768x1024
    },
  ],
  webServer: process.env.PLAYWRIGHT_BASE_URL
    ? undefined
    : {
        command: "npm run build && npm run preview -- --port 4173 --strictPort",
        url: "http://127.0.0.1:4173",
        reuseExistingServer: !process.env.CI,
        timeout: 180_000,
      },
});
