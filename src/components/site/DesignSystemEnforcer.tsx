import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ROUTE_CHECKLIST = [
  "/",
  "/for-practices",
  "/for-practices/more-new-patients",
  "/for-practices/online-visibility",
  "/for-practices/marketing-roi",
  "/for-practices/lead-conversion",
  "/for-practices/online-reputation",
  "/for-practices/predictable-patient-flow",
  "/for-practices/scale-your-practice",
  "/for-practices/high-value-patients",
  "/solutions",
  "/solutions/dental",
  "/solutions/chiropractic",
  "/solutions/medical",
  "/services",
  "/services/seo",
  "/services/seo/search-engine-optimization",
  "/services/seo/aeo",
  "/services/seo/geo",
  "/services/paid-ads",
  "/services/website-design",
  "/services/reputation",
  "/services/marketing-strategy",
  "/services/branding-rebranding",
  "/services/social-media-marketing",
  "/services/landing-pages",
  "/services/video-marketing",
  "/services/email-marketing",
  "/services/local-listings-gbp",
  "/services/analytics-and-reporting",
  "/services/content-marketing",
  "/how-it-works",
  "/results",
  "/resources",
  "/about",
  "/free-audit",
  "/case-studies",
  "/privacy",
  "/terms",
] as const;

const PRIMARY_CTA_RE = /audit|request|get a free|schedule/i;
const SECONDARY_CTA_RE = /book|explore|see all|all services|how it works|learn more|results|strategy call|growth call/i;

function removeInlineVisualOverrides(el: HTMLElement) {
  el.style.removeProperty("background");
  el.style.removeProperty("background-image");
  el.style.removeProperty("box-shadow");
  el.style.removeProperty("border-radius");
}

function enforceRoute(pathname: string) {
  const main = document.querySelector<HTMLElement>("main");
  if (!main) return;

  document.body.dataset.designSystemRoute = ROUTE_CHECKLIST.includes(pathname as typeof ROUTE_CHECKLIST[number]) ? pathname : "dynamic";
  document.body.classList.add("homepage-design-standard");

  main.querySelectorAll<HTMLElement>("article, aside, div[class*='rounded-3xl'], div[class*='rounded-[']").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.width < 140 || rect.height < 70 || el.matches("nav, header, footer, form, button, [role='dialog']")) return;
    el.classList.add("homepage-card-standard", "tilt-spotlight");
    removeInlineVisualOverrides(el);
  });

  main.querySelectorAll<HTMLAnchorElement | HTMLButtonElement>("a, button").forEach((el) => {
    const text = el.textContent ?? "";
    const href = el instanceof HTMLAnchorElement ? el.getAttribute("href") ?? "" : "";
    if (PRIMARY_CTA_RE.test(text)) {
      el.classList.add("homepage-cta-standard", "btn-primary-grad");
      removeInlineVisualOverrides(el);
    } else if (SECONDARY_CTA_RE.test(text)) {
      el.classList.add("homepage-cta-standard", "btn-secondary-outline");
      removeInlineVisualOverrides(el);
    }
  });

  main.querySelectorAll<HTMLElement>(".grid").forEach((grid) => {
    const cards = grid.querySelectorAll(":scope > .homepage-card-standard, :scope > * > .homepage-card-standard, :scope > article, :scope > * > article");
    if (cards.length > 1) grid.classList.add("ui-card-grid");
  });
}

export default function DesignSystemEnforcer() {
  const location = useLocation();

  useEffect(() => {
    const run = () => enforceRoute(location.pathname);
    run();
    const frame = window.requestAnimationFrame(run);
    const timer = window.setTimeout(run, 400);
    const observer = new MutationObserver(run);
    const main = document.querySelector("main");
    if (main) observer.observe(main, { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] });
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      observer.disconnect();
    };
  }, [location.pathname]);

  return null;
}