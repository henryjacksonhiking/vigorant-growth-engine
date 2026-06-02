import { test, expect } from "@playwright/test";
import { ROUTES } from "./routes";
import { preparePageForVisuals } from "./helpers";

/**
 * Visual regression baselines for every route at every configured viewport.
 *
 * First run (or after intentional UI changes):
 *   npm run test:visual:update
 *
 * Subsequent runs fail if any pixel diffs exceed the threshold configured
 * in playwright.config.ts (maxDiffPixelRatio: 0.01).
 *
 * Snapshots are stored next to this file in __screenshots__/.
 */
test.describe("@visual", () => {
  for (const route of ROUTES) {
    test(`page snapshot — ${route.name}`, async ({ page }, testInfo) => {
      await page.goto(route.path, { waitUntil: "domcontentloaded" });
      await preparePageForVisuals(page);

      await expect(page).toHaveScreenshot(`${route.name}.png`, {
        fullPage: true,
        // Mask elements that legitimately differ between runs.
        mask: [
          page.locator("video"),
          page.locator('[data-testid="live-clock"]'),
        ],
      });

      // Tag the report with viewport + project for easier triage
      testInfo.annotations.push({
        type: "viewport",
        description: `${page.viewportSize()?.width}x${page.viewportSize()?.height}`,
      });
    });
  }
});
