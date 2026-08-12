/**
 * Case study content schema.
 *
 * Long-term workflow: each case study is delivered as a JSON (or TS object) file
 * conforming to this schema and routed to a template by its `template` field.
 * Template "A" is the narrative template implemented in
 * `src/components/case-study/CaseStudyTemplateA.tsx`.
 * Template "B" does not exist yet — adding it should be a data change
 * (`"template": "B"`), not a markup change.
 *
 * No case-study-specific copy may live inside a template component.
 */

export type CaseStudyTemplateId = "A" | "B";

export interface CSCta {
  label: string;
  href: string;
}

export interface CSBeforeAfterRow {
  metric: string;
  before: string;
  after: string;
}

export interface CSStrategyStep {
  /** Supporting H3 inside the strategy section. */
  h3: string;
  description: string;
}

export interface CSStat {
  /** Big number, e.g. "62%" or "#1". */
  value: string;
  /** Short supporting label. */
  label: string;
}

export interface CSQuote {
  text: string;
  /** Anonymized role attribution — never a real person's name. */
  attribution: string;
  /** Disclaimer / provenance note, e.g. anonymization statement. */
  note?: string;
}

export interface CSFaq {
  question: string;
  answer: string;
}

export interface CaseStudyContent {
  /** Route slug — must match the slug segment of the live route. */
  slug: string;
  /** Which visual template renders this record. */
  template: CaseStudyTemplateId;
  /** Route category segment, e.g. "dental" | "chiropractic" | "medical". */
  category: string;
  /** Practice descriptor chips shown above the H1. */
  tags: string[];

  /** 1. Hero introduction: one H1 + two short paragraphs. */
  hero: {
    h1: string;
    paragraphs: string[];
  };

  /** 2. Primary CTA + hero image direction placeholder. */
  primaryCta: CSCta;
  heroImageDirection: string;

  /** 3. Challenge and context. */
  challenge: {
    h2: string;
    h3?: string;
    paragraphs: string[];
  };

  /** 4. Before-and-after comparison table. */
  beforeAfter: {
    rows: CSBeforeAfterRow[];
  };

  /** 5. Strategy and implementation. */
  strategy: {
    h2: string;
    steps: CSStrategyStep[];
    paragraphs: string[];
    imageDirection: string;
  };

  /** 6. Results stat trail — 3–5 connected statistics. */
  statTrail: CSStat[];

  /** 7. Client quote + conclusion + closing CTA. */
  quote: CSQuote;
  conclusion: {
    paragraph: string;
    ctaLabel: string;
    ctaHref: string;
  };

  /** 8. FAQ — 4–6 concise entries, collapsed by default. */
  faqs: CSFaq[];

  /** Services chips rendered with the results section. */
  servicesUsed: string[];
}
