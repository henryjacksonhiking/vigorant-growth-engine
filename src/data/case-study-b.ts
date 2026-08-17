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

import dsoHero from "@/assets/cs-dso-hero.jpg";
import dsoStrategy from "@/assets/cs-dso-strategy.jpg";

/** Slug -> Template B content. */
export const caseStudyBContent: Record<string, CaseStudyBContent> = {
  "6-location-dso-texas": {
    slug: "6-location-dso-texas",
    template: "B",
    category: "dental",
    tags: ["Multi-Location DSO", "Texas", "6 Locations"],
    hero: {
      h1: "2.8x ROAS Across 6 Locations — Unified, Measurable, Scalable",
      subhead:
        "A Texas dental group ran six locations as six disconnected marketing efforts. Consolidating the infrastructure turned fragmented spend into one coordinated growth engine.",
      image: dsoHero,
      imageDirection:
        "The operations director at a desk with a multi-location dashboard on screen, a map of six Texas markets in the background.",
      ctaPrimary: { label: "Get a Multi-Location Audit", href: "/free-audit" },
      ctaSecondary: { label: "See the Results", href: "#results" },
    },
    problemStory: {
      paragraphs: [
        "Each location had strong clinical teams and loyal local patients, but the group had no shared marketing infrastructure. Three different agencies managed different subsets of locations, each with its own branding conventions, ad account structure, and definition of a \"lead.\"",
        "As the group looked to scale, the bottleneck was never patient demand or clinical capacity — it was the inability to see clearly enough to make good decisions. An infrastructure audit across all six ad accounts, analytics setups, and Google Business Profiles surfaced $4,200/month in wasted spend that nobody had caught, because nobody could see all six accounts side by side.",
      ],
      bullets: [
        "Three agencies, three conflicting definitions of a lead",
        "No cross-location reporting or shared metrics",
        "$4,200/month lost to duplicate keywords and broad match",
        "Inconsistent branding across ads, sites, and profiles",
      ],
    },
    turningPoint: {
      heading: "The Dashboard Changed the Conversation",
      paragraph:
        "The first time leadership saw all six locations on one screen, a location long written off as \"underperforming\" turned out to be losing budget to duplicate keyword bidding — not lacking patient demand. Visibility, not more spend, was the unlock.",
      image: dsoStrategy,
      imageDirection:
        "Close-up of the unified dashboard interface showing cost-per-lead and ROAS trending across all six locations side by side.",
    },
    strategy: {
      heading: "Building One Growth Engine From Six",
      cards: [
        {
          label: "01",
          title: "Infrastructure Audit",
          description:
            "Audited all 6 ad accounts, analytics setups, and Google Business Profiles; identified $4,200/month in wasted spend from duplicate keywords and broad-match inefficiency.",
        },
        {
          label: "02",
          title: "Unified Dashboard",
          description:
            "Built one real-time dashboard aggregating all 6 locations — cost-per-lead, conversion rate, review velocity, and organic visibility score per location.",
        },
        {
          label: "03",
          title: "Location-Specific SEO",
          description:
            "Deployed individual SEO strategies per location based on local competitive analysis, each targeting neighborhood-specific keyword clusters.",
        },
        {
          label: "04",
          title: "Consolidated Ads",
          description:
            "Merged ad accounts under unified management with shared negative keyword lists, cross-location audience learnings, and unified creative testing.",
        },
      ],
    },
    results: {
      heading: "The Business Impact",
      kpis: [
        { value: "2.8x", label: "ROAS across all 6 locations" },
        { value: "+89", label: "Net new patients per month vs. baseline" },
        { value: "61%", label: "Lower cost-per-lead vs. prior structure" },
        { value: "$4,200", label: "Monthly ad spend waste eliminated" },
      ],
    },
    quote: {
      text: "We finally know where every dollar goes and what it produces. That visibility alone changed how we make decisions.",
      attribution: "Practice Group Director, 6-Location DSO, Texas",
      note: "Practice identity anonymized per client agreement",
    },
    takeaway: {
      heading: "What This Means Going Forward",
      paragraphs: [
        "Within 6 months, the DSO had eliminated redundant spend, unified reporting, and scaled to 89 net new patients per month across all locations — with a clear attribution model showing exactly which locations and channels drove growth.",
        "The six locations were never the problem. What was missing was a single system to see and manage them as one business.",
      ],
      ctaPrimary: { label: "Request Your Free Audit", href: "/free-audit" },
      ctaSecondary: { label: "More Case Studies", href: "/case-studies" },
    },
    faqs: [
      {
        question: "Can Vigorant manage marketing across multiple practice locations?",
        answer:
          "Yes. Multi-location dental groups and DSOs are core to the practice portfolio, including unified reporting, consolidated ad management, and location-specific SEO strategies under one coordinated framework.",
      },
      {
        question: "What does \"wasted ad spend\" mean in practice?",
        answer:
          "Advertising budget spent on keywords, audiences, or placements that generate clicks but no qualified patient leads — commonly from overly broad match types, duplicate keywords across campaigns, or missing negative keyword lists.",
      },
      {
        question: "How does Vigorant handle branding consistency across multiple locations?",
        answer:
          "Brand standards apply consistently across ad creative, website copy, Google Business Profiles, and review response templates, while still allowing location-specific messaging.",
      },
    ],
    servicesUsed: [
      "Multi-Location SEO",
      "Google Ads Management",
      "Analytics & Reporting",
      "Google Business Profile",
      "Brand Consistency",
    ],
  },
};
