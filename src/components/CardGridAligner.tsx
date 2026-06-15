import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const CONTAINER_SELECTOR = [
  "main .ui-card-grid",
  "main .grid",
  "main [class*='flex'][class*='md:flex-row']",
  "main [class*='flex'][class*='lg:flex-row']",
].join(",");

const SLOT_SELECTORS = [
  ":scope > *",
  "h3, h4",
  "p:not(:empty)",
  "ul, ol, .ui-pill-row",
  ".font-mono-ui:not(a), .section-label, .section-label-light",
  ".ui-card-cta, a:last-child",
];

function isHTMLElement(node: Element | null): node is HTMLElement {
  return node instanceof HTMLElement;
}

function isCardLike(el: HTMLElement) {
  const className = el.className.toString();
  const rect = el.getBoundingClientRect();
  if (rect.width < 140 || rect.height < 70) return false;
  if (el.matches("button, input, textarea, select, [role='dialog'], [data-radix-popper-content-wrapper]")) return false;
  if (className.includes("rounded-full")) return false;
  return (
    el.tagName === "ARTICLE" ||
    className.includes("ui-card") ||
    className.includes("rounded-2xl") ||
    className.includes("rounded-xl") ||
    className.includes("rounded-[")
  );
}

function findCardRoot(root: HTMLElement, depth = 0): HTMLElement | null {
  if (isCardLike(root)) return root;
  if (depth > 3) return null;
  for (const child of Array.from(root.children)) {
    if (!isHTMLElement(child)) continue;
    const found = findCardRoot(child, depth + 1);
    if (found) return found;
  }
  return null;
}

function visibleSlots(card: HTMLElement, selector: string) {
  return Array.from(card.querySelectorAll<HTMLElement>(selector)).filter((slot) => {
    if (slot.closest("svg, [aria-hidden='true']")) return false;
    const rect = slot.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
  });
}

function groupByVisualRow(cards: HTMLElement[], container: HTMLElement) {
  const style = window.getComputedStyle(container);
  const columns = style.display === "grid" ? style.gridTemplateColumns.split(" ").filter(Boolean).length : cards.length;
  if (columns <= 1) return [cards];

  const rows: HTMLElement[][] = [];
  cards.forEach((card) => {
    const top = card.getBoundingClientRect().top;
    const row = rows.find((items) => Math.abs(items[0].getBoundingClientRect().top - top) < 8);
    if (row) row.push(card);
    else rows.push([card]);
  });
  return rows.filter((row) => row.length > 1);
}

function equalizeHeights(items: HTMLElement[]) {
  let max = 0;
  items.forEach((item) => {
    item.style.minHeight = "";
    max = Math.max(max, item.getBoundingClientRect().height);
  });
  if (max > 0) {
    items.forEach((item) => {
      item.dataset.cardAlignSlot = "true";
      item.style.minHeight = `${Math.ceil(max)}px`;
    });
  }
}

function alignCardGroup(cards: HTMLElement[], container: HTMLElement) {
  groupByVisualRow(cards, container).forEach((row) => {
    equalizeHeights(row);

    SLOT_SELECTORS.forEach((selector) => {
      const slotsByCard = row.map((card) => visibleSlots(card, selector));
      const longest = Math.max(0, ...slotsByCard.map((slots) => slots.length));
      for (let index = 0; index < longest; index += 1) {
        const matchingSlots = slotsByCard
          .map((slots) => slots[index])
          .filter((slot): slot is HTMLElement => Boolean(slot));
        if (matchingSlots.length > 1) equalizeHeights(matchingSlots);
      }
    });
  });
}

function resetAlignment() {
  document.querySelectorAll<HTMLElement>("[data-card-align-slot='true']").forEach((el) => {
    el.style.minHeight = "";
    delete el.dataset.cardAlignSlot;
  });
}

function runAlignment() {
  resetAlignment();
  const processed = new WeakSet<HTMLElement>();

  Array.from(document.querySelectorAll<HTMLElement>(CONTAINER_SELECTOR)).forEach((container) => {
    const cards = Array.from(container.children)
      .map((child) => (isHTMLElement(child) ? findCardRoot(child) : null))
      .filter((card): card is HTMLElement => Boolean(card) && !processed.has(card));

    if (cards.length < 2) return;
    cards.forEach((card) => processed.add(card));
    alignCardGroup(cards, container);
  });
}

export default function CardGridAligner() {
  const location = useLocation();

  useEffect(() => {
    let frame = 0;
    const schedule = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => window.requestAnimationFrame(runAlignment));
    };

    schedule();
    const timer = window.setTimeout(schedule, 400);
    window.addEventListener("resize", schedule, { passive: true });
    document.fonts?.ready.then(schedule).catch(() => undefined);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      window.removeEventListener("resize", schedule);
      resetAlignment();
    };
  }, [location.pathname]);

  return null;
}