/**
 * Template B content schema.
 *
 * A case study record tagged `template: "B"` is rendered by
 * `src/components/case-study/CaseStudyB.tsx`. The component is fully
 * data-driven: every string it renders comes from this object.
 *
 * Upload workflow: author the JSON, set `template: "B"`, add it to
 * `caseStudyBContent` keyed by slug. No component changes required.
 */

export interface CSBCta {
  label: string;
  href: string;
}

export interface CSBStrategyCard {
  /** Optional short label/number shown above the title (e.g. "01", "SEO"). */
  label?: string;
  title: string;
  description: string;
}

export interface CSBKpi {
  /** Large display value, e.g. "62%", "3.4x", "$187 → $71". */
  value: string;
  label: string;
}

export interface CaseStudyBContent {
  slug: string;
  template: "B";
  /** Specialty / vertical, e.g. "dental" | "chiropractic" | "medical". */
  category: string;
  tags: string[];

  hero: {
    h1: string;
    subhead: string;
    /** Imported image URL. Omit to render the IMAGE DIRECTION placeholder. */
    image?: string;
    imageDirection: string;
    ctaPrimary: CSBCta;
    ctaSecondary: CSBCta;
  };

  problemStory: {
    /** Exactly two short paragraphs. */
    paragraphs: string[];
    /** 3–4 scannable symptom fragments. */
    bullets: string[];
  };

  turningPoint: {
    heading?: string;
    paragraph: string;
    /** Imported image URL. Omit to render the IMAGE DIRECTION placeholder. */
    image?: string;
    imageDirection: string;
  };

  strategy: {
    heading?: string;
    /** 3–4 minimalist cards. */
    cards: CSBStrategyCard[];
  };

  results: {
    heading?: string;
    /** 3–4 KPI counters. */
    kpis: CSBKpi[];
  };

  quote: {
    text: string;
    /** Preserve anonymized attribution exactly as authored. */
    attribution: string;
    note?: string;
  };

  takeaway: {
    heading?: string;
    /** Two short closing paragraphs. */
    paragraphs: string[];
    ctaPrimary: CSBCta;
    ctaSecondary: CSBCta;
  };

  faqs: Array<{ question: string; answer: string }>;

  servicesUsed: string[];
}

/** Slug -> Template B content. Empty until case studies are authored for B. */
export const caseStudyBContent: Record<string, CaseStudyBContent> = {};
