import { test, expect } from "@playwright/test";
import { ROUTES } from "./routes";
import { getHorizontalOverflow, preparePageForVisuals } from "./helpers";

/**
 * Fast structural check: no page should produce horizontal scroll
 * at any of the mobile/tablet viewports configured in playwright.config.ts.
 *
 * A 1px tolerance covers sub-pixel rounding from scaled CSS.
 */
for (const route of ROUTES) {
  test(`no horizontal overflow @ ${route.name}`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));

    await page.goto(route.path, { waitUntil: "domcontentloaded" });
    await preparePageForVisuals(page);

    const result = await getHorizontalOverflow(page);

    expect(
      result.overflowBy,
      `Page ${route.path} overflows horizontally by ${result.overflowBy}px ` +
        `(scrollWidth=${result.scrollWidth}, viewport=${result.viewport}).\n` +
        `First offenders:\n` +
        result.offenders
          .map((o) => `  <${o.tag} class="${o.cls}"> width=${o.w} left=${o.left}`)
          .join("\n"),
    ).toBeLessThanOrEqual(1);

    expect(errors, `Unhandled page errors on ${route.path}:\n${errors.join("\n")}`).toHaveLength(0);
  });
}
