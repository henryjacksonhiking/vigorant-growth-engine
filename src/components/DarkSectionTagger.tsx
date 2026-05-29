import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Tags any <section> whose effective background is dark (low luminance)
 * with `data-dark="true"`. Global CSS in index.css then promotes
 * low-contrast text, labels, eyebrows, and icons inside such sections
 * to readable colors automatically.
 *
 * Runs on every route change and on window resize, and observes DOM
 * mutations so dynamically rendered sections get tagged too.
 */
export default function DarkSectionTagger() {
  const location = useLocation();

  useEffect(() => {
    const isDark = (el: Element) => {
      const cs = window.getComputedStyle(el);
      const bg = cs.backgroundColor;
      const bgImg = cs.backgroundImage;
      // Parse rgb / rgba
      const m = bg.match(/rgba?\(([^)]+)\)/);
      let darkBg = false;
      if (m) {
        const parts = m[1].split(",").map((s) => parseFloat(s));
        const [r, g, b] = parts;
        const a = parts[3] ?? 1;
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        if (a > 0.5 && luminance < 0.25) darkBg = true;
      }
      // Detect dark gradients (common pattern in this site)
      if (!darkBg && /linear-gradient|radial-gradient/.test(bgImg)) {
        if (/rgb\(\s*(?:1[0-9]|2[0-9]|3[0-9])\s*,\s*(?:1[0-9]|2[0-9]|3[0-9])\s*,\s*(?:[2-6][0-9])\s*\)/.test(bgImg)
            || /hsl\([^)]*49%\s+1[0-9]%\)/.test(bgImg)
            || /hsl\([^)]*45%\s+19%\)/.test(bgImg)) {
          darkBg = true;
        }
      }
      return darkBg;
    };

    const tag = () => {
      const els = document.querySelectorAll<HTMLElement>("section, footer, aside, header, div[data-darkable]");
      els.forEach((el) => {
        if (isDark(el)) el.setAttribute("data-dark", "true");
        else if (el.getAttribute("data-dark") === "true") el.removeAttribute("data-dark");
      });
    };

    // Tag now, then again after layout/animations settle.
    tag();
    const t1 = window.setTimeout(tag, 50);
    const t2 = window.setTimeout(tag, 300);

    const onResize = () => tag();
    window.addEventListener("resize", onResize);

    const mo = new MutationObserver(() => tag());
    mo.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["style", "class"] });

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener("resize", onResize);
      mo.disconnect();
    };
  }, [location.pathname]);

  return null;
}
