import { Page } from "@playwright/test";

/**
 * Prepare the page for stable visual snapshots:
 *  - disable CSS animations/transitions
 *  - freeze framer-motion animations to their final state
 *  - wait for fonts + images + lazy content
 *  - scroll the full page to trigger IntersectionObserver Reveal animations,
 *    then jump back to the top
 */
export async function preparePageForVisuals(page: Page) {
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation-duration: 0s !important;
        animation-delay: 0s !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
        scroll-behavior: auto !important;
      }
      html { scroll-behavior: auto !important; }
      /* Hide marquees / autoplay elements that never settle */
      .animate-logo-marquee { animation: none !important; }
      [data-testid="live-clock"], video { visibility: hidden !important; }
    `,
  });

  // Wait for web fonts
  await page.evaluate(async () => {
    if ("fonts" in document) {
      // @ts-ignore
      await (document as any).fonts.ready;
    }
  });

  // Scroll the page bottom-to-top to force lazy images + Reveal motion to commit
  await page.evaluate(async () => {
    const total = document.documentElement.scrollHeight;
    const step = Math.max(window.innerHeight * 0.8, 200);
    for (let y = 0; y < total; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 50));
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 100));
  });

  // Wait for all images to finish loading (or fail)
  await page.evaluate(async () => {
    const imgs = Array.from(document.images);
    await Promise.all(
      imgs.map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise((res) => {
              img.addEventListener("load", res, { once: true });
              img.addEventListener("error", res, { once: true });
            }),
      ),
    );
  });

  await page.waitForLoadState("networkidle").catch(() => {});
}

/**
 * Returns horizontal-overflow data so the test can assert AND
 * include the offending elements in failure messages.
 */
export async function getHorizontalOverflow(page: Page) {
  return page.evaluate(() => {
    const doc = document.documentElement;
    const docOverflow = doc.scrollWidth - doc.clientWidth;

    const offenders: { tag: string; cls: string; w: number; left: number }[] = [];
    if (docOverflow > 1) {
      const all = Array.from(document.body.querySelectorAll<HTMLElement>("*"));
      for (const el of all) {
        const r = el.getBoundingClientRect();
        if (r.right - doc.clientWidth > 1 && r.width > 0) {
          offenders.push({
            tag: el.tagName.toLowerCase(),
            cls: (el.className && typeof el.className === "string"
              ? el.className
              : ""
            ).slice(0, 120),
            w: Math.round(r.width),
            left: Math.round(r.left),
          });
          if (offenders.length >= 10) break;
        }
      }
    }

    return {
      viewport: doc.clientWidth,
      scrollWidth: doc.scrollWidth,
      overflowBy: Math.max(0, docOverflow),
      offenders,
    };
  });
}
