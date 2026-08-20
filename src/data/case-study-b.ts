/**
 * Template B content schema (9-section structure).
 *
 * A case study record tagged `template: "B"` is rendered by
 * `src/components/case-study/CaseStudyB.tsx`. The component is fully
 * data-driven: every string it renders comes from this object.
 *
 * Upload workflow: author the JSON, set `template: "B"`, add it to
 * `caseStudyBContent` keyed by slug. No component changes required.
 *
 * Word-count targets (guidance only — not validated in code):
 *  1 Hero 90–110 · 2 Practice Background 70–80 · 3 Problem Story 130–150
 *  4 Holding Back 90–110 · 5 Turning Point 60–70 · 6 Strategy 170–190
 *  7 Results 90–110 · 8 Quote + Takeaway 80–90 · 9 FAQ 100–120
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

export interface CSBComparisonTable {
  leftHeader: string;
  rightHeader: string;
  rows: Array<{ left: string; right: string }>;
}

export interface CaseStudyBContent {
  slug: string;
  template: "B";
  /** Specialty / vertical, e.g. "dental" | "chiropractic" | "medical". */
  category: string;
  tags: string[];
  /** Small muted hero disclaimer line. Optional. */
  disclaimer?: string;

  /** 1. Hero */
  hero: {
    h1: string;
    /** Two intro paragraphs. */
    paragraphs: string[];
    /** Imported image URL. Omit to render the IMAGE DIRECTION placeholder. */
    image?: string;
    imageDirection: string;
    ctaPrimary: CSBCta;
    ctaSecondary: CSBCta;
  };

  /** 2. Practice Background and Ambition */
  practiceBackground: {
    h2: string;
    paragraph: string;
  };

  /** 3. The Problem Story — 3–4 short paragraphs. */
  problemStory: {
    h2: string;
    paragraphs: string[];
  };

  /** 4. What Was Holding the Practice Back — bullets OR comparison table. */
  holdingBack: {
    h2: string;
    intro?: string;
    bullets?: string[];
    comparisonTable?: CSBComparisonTable;
    closingLine?: string;
  };

  /** 5. The Turning Point */
  turningPoint: {
    h2: string;
    paragraph: string;
    /** Imported image URL. Omit to render the IMAGE DIRECTION placeholder. */
    image?: string;
    imageDirection?: string;
  };

  /** 6. Strategy and Implementation */
  strategy: {
    h2: string;
    intro?: string;
    cards: CSBStrategyCard[];
  };

  /** 7. Results and Business Impact */
  results: {
    h2: string;
    intro?: string;
    kpis: CSBKpi[];
    impactParagraph?: string;
  };

  /** 8. Client Quote and Final Takeaway */
  quoteAndTakeaway: {
    quote: { text: string; attribution: string; note?: string };
    h2: string;
    paragraphs: string[];
    ctaPrimary: CSBCta;
    ctaSecondary: CSBCta;
  };

  /** 9. FAQ — four concise Q&As. */
  faqs: Array<{ question: string; answer: string }>;

  servicesUsed: string[];
}

import dsoHero from "@/assets/cs-dso-hero.jpg";
import dsoStrategy from "@/assets/cs-dso-strategy.jpg";
import convHero from "@/assets/cs-conv-hero.jpg";
import convStrategy from "@/assets/cs-conv-strategy.jpg";

/** Slug -> Template B content. */
export const caseStudyBContent: Record<string, CaseStudyBContent> = {
  "dental-website-conversion-houston": {
    slug: "dental-website-conversion-houston",
    template: "B",
    category: "dental",
    tags: ["Website Conversion Optimization", "Houston, Texas", "Family & Cosmetic Dentistry"],
    disclaimer: "Illustrative example based on common patterns. Practice name and results are not tied to a verified client engagement.",
    hero: {
      h1: "Getting Website Traffic but Few Appointments? How a Dental Practice Could Improve Conversions",
      paragraphs: [
        "Dr. Lila at Prentice Dental in Houston, Texas, had been experiencing several ups and downs in her practice. Website traffic was increasing, service pages were appearing in local searches, and more potential patients were discovering the office. Yet the appointment calendar did not reflect that growing online visibility.",
        "The problem was not attracting visitors. It was converting those visitors into appointment requests. By improving the website's messaging, patient journey, and conversion points, the practice could turn more existing traffic into meaningful inquiries — without relying entirely on a larger advertising budget.",
      ],
      image: convHero,
      imageDirection:
        "A dentist at the front desk of a modern Houston family practice reviewing patient inquiries on a tablet.",
      ctaPrimary: { label: "Request a Website Conversion Review", href: "/free-audit" },
      ctaSecondary: { label: "Explore Healthcare Marketing Solutions", href: "/solutions" },
    },
    practiceBackground: {
      h2: "A Growing Practice With a Clear Ambition",
      paragraph:
        "Prentice Dental wanted to become a trusted choice for family and cosmetic dentistry in Houston. Dr. Lila's goal was to welcome more qualified patients, strengthen recognition in the local community, and build a more predictable appointment pipeline. The practice had already invested in dental SEO, website content, and digital advertising. Traffic was arriving, but too few visitors were taking the next step.",
    },
    problemStory: {
      h2: "When More Website Visitors Did Not Mean More Patients",
      paragraphs: [
        "At first, the traffic reports appeared encouraging. Every month, hundreds of people visited the website after searching for services such as cosmetic dentistry, dental implants, emergency dental care, and a dentist in Houston, Texas.",
        "But Dr. Lila noticed a frustrating pattern. The phone remained quiet during certain parts of the week, online appointment requests were inconsistent, and many visitors left without contacting the practice. Her marketing generated attention but not enough patient conversions.",
        "She initially assumed the practice needed more traffic. Additional service content was published, advertising continued, and minor design changes were made. Visitor numbers improved again, but appointment growth remained limited.",
        "The uncertainty became exhausting. Dr. Lila could see potential patients reaching the website, yet she could not understand where or why they were disappearing. The front-desk team also struggled to explain the gap because the website provided little visibility into visitor behavior.",
      ],
    },
    holdingBack: {
      h2: "What Was Preventing Visitors From Booking?",
      intro:
        "The issue was not one dramatic website failure. Several smaller barriers were creating friction throughout the patient journey.",
      comparisonTable: {
        leftHeader: "Before Optimization",
        rightHeader: "Conversion Barrier",
        rows: [
          {
            left: "Generic homepage messaging",
            right: "Visitors could not immediately identify why they should choose the practice",
          },
          {
            left: "Important details spread across pages",
            right: "Patients had to search for services, insurance information, and office details",
          },
          {
            left: "Inconsistent appointment buttons",
            right: "The next step was unclear on high-traffic pages",
          },
          {
            left: "Long mobile contact form",
            right: "Potential patients abandoned the process before submitting",
          },
          {
            left: "Limited conversion tracking",
            right: "The practice could not identify where inquiries were being lost",
          },
        ],
      },
      closingLine:
        "These issues weakened the dental website conversion rate even though traffic was growing. Adding more visitors to the same journey would likely have produced more exits — not proportionally more appointments.",
    },
    turningPoint: {
      h2: "The Moment the Strategy Changed",
      paragraph:
        "The turning point came when Dr. Lila stopped asking, \"How do we get more website traffic?\" and began asking, \"What happens after a potential patient reaches our website?\" That question led Prentice Dental to Vigorant. Instead of immediately recommending more advertising, Vigorant examined the complete journey — from the patient's Google search and landing page experience to the final appointment request.",
      image: convStrategy,
      imageDirection:
        "A simplified mobile appointment request form beside a laptop showing conversion tracking for the practice website.",
    },
    strategy: {
      h2: "How Vigorant Improved the Conversion Journey",
      intro:
        "Vigorant developed a dental website conversion optimization strategy around patient intent, trust, accessibility, and measurable actions.",
      cards: [
        {
          label: "01",
          title: "Clarifying the Practice's Value",
          description:
            "The homepage and key service pages were revised to communicate who the practice served, which services it provided, and what patients could do next. Generic marketing language was replaced with clearer, patient-focused information. Visitors looking for a Houston dentist could quickly understand the practice's services, location, scheduling options, and approach to care. Stronger heading hierarchy also made the pages easier to scan.",
        },
        {
          label: "02",
          title: "Strengthening High-Intent Service Pages",
          description:
            "Pages receiving valuable organic traffic were reviewed individually. Each page was aligned with the likely concerns behind its target search. Information about treatment goals, consultation expectations, common patient questions, and next steps was organized more clearly. Internal links directed visitors toward relevant services instead of leaving them at the end of a page with nowhere useful to go.",
        },
        {
          label: "03",
          title: "Simplifying Appointment Requests",
          description:
            "Vigorant introduced consistent calls to action across desktop and mobile pages. Appointment buttons became easier to find, and the contact form requested only the information needed to begin a conversation. Click-to-call options were emphasized for mobile visitors, reducing unnecessary steps between discovering Prentice Dental and contacting its team.",
        },
        {
          label: "04",
          title: "Measuring Meaningful Actions",
          description:
            "Conversion tracking was configured around appointment-form submissions, calls, CTA clicks, and visits to high-intent pages. The data revealed which pages supported new-patient inquiries and which required further refinement. The strategy was adjusted according to visitor behavior rather than traffic volume alone.",
        },
      ],
    },
    results: {
      h2: "Results That Reached Beyond Website Traffic",
      intro:
        "Within the illustrative 90-day period, Prentice Dental began seeing a healthier relationship between website activity and patient inquiries.",
      kpis: [
        { value: "+34%", label: "Appointment-form completions" },
        { value: "+27%", label: "Mobile click-to-call actions" },
        { value: "18%", label: "Lower service-page exit rate" },
        { value: "2.2% → 3.1%", label: "Visitor-to-inquiry conversion rate" },
      ],
      impactParagraph:
        "These gains did more than improve a marketing report. The front desk received more structured inquiries, Dr. Lila gained greater confidence in her digital investment, and existing website traffic began contributing more consistently to appointment opportunities.",
    },
    quoteAndTakeaway: {
      quote: {
        text: "We did not need more people briefly visiting our website. We needed the right visitors to understand us, trust us, and feel comfortable taking the next step.",
        attribution: "Dr. Lila, Prentice Dental",
        note: "Illustrative preview content — results shown reflect a demonstrative 90-day period",
      },
      h2: "Turn Existing Traffic Into Patient Opportunities",
      paragraphs: [
        "A dental website should do more than attract clicks. It should answer important questions, establish confidence, and create a clear path from search to appointment.",
        "For practices receiving website traffic but few patient inquiries, conversion optimization may reveal more immediate opportunities than simply increasing ad spend. Vigorant helps healthcare practices identify digital barriers and build clearer, more effective patient journeys.",
      ],
      ctaPrimary: { label: "Request a Conversion Review", href: "/free-audit" },
      ctaSecondary: { label: "Speak With Vigorant", href: "/free-audit" },
    },
    faqs: [
      {
        question: "Why is my dental website not converting?",
        answer:
          "Unclear messaging, weak calls to action, poor mobile usability, limited trust signals, or complicated forms may prevent interested visitors from contacting the practice.",
      },
      {
        question: "What is a good dental conversion rate?",
        answer:
          "Conversion rates vary by traffic source, service, location, and measurement method. Practices should compare performance against their own qualified traffic and historical results.",
      },
      {
        question: "Can SEO traffic produce more appointments?",
        answer:
          "Yes. Relevant dental SEO traffic can support appointments when service pages match patient intent and provide a simple, trustworthy path to contact the practice.",
      },
      {
        question: "How can dentists improve website conversions?",
        answer:
          "Dentists can improve conversions by clarifying their value, strengthening service pages, simplifying forms, improving mobile usability, and tracking calls and appointment requests.",
      },
    ],
    servicesUsed: ["Conversion Rate Optimization", "Dental SEO", "Website UX", "Analytics & Tracking"],
  },

  "6-location-dso-texas": {
    slug: "6-location-dso-texas",
    template: "B",
    category: "dental",
    tags: ["Multi-Location DSO", "Texas", "6 Locations"],
    disclaimer: "Practice identity anonymized per client agreement.",
    hero: {
      h1: "2.8x ROAS Across 6 Locations — Unified, Measurable, Scalable",
      paragraphs: [
        "A Texas dental group ran six locations as six disconnected marketing efforts. Each office had strong clinical teams and loyal local patients, but no shared infrastructure tied the group together.",
        "Consolidating reporting, ad management, and location-level SEO turned fragmented spend into one coordinated growth engine — with a single view of what every dollar produced across all six markets.",
      ],
      image: dsoHero,
      imageDirection:
        "The operations director at a desk with a multi-location dashboard on screen, a map of six Texas markets in the background.",
      ctaPrimary: { label: "Get a Multi-Location Audit", href: "/free-audit" },
      ctaSecondary: { label: "See the Results", href: "#results" },
    },
    practiceBackground: {
      h2: "A Growing Group Without Shared Infrastructure",
      paragraph:
        "The group's ambition was straightforward: scale to more locations without losing control of marketing performance. Each office served its own neighborhood market with general and cosmetic dentistry, and leadership wanted a predictable new-patient pipeline across all of them. What was missing was a shared system — three agencies managed different subsets of locations, each with its own reporting cadence and definition of success.",
    },
    problemStory: {
      h2: "Six Locations, Six Different Stories",
      paragraphs: [
        "Every month, leadership received separate reports in separate formats from separate agencies. Comparing performance between locations required manual spreadsheet work that nobody had time to do consistently.",
        "Because each agency defined a \"lead\" differently, the numbers could not be trusted side by side. One location looked like a top performer purely because form fills and calls were counted more generously there.",
        "Branding drifted too. Ads, websites, and Google Business Profiles used different messaging and imagery, so patients in adjacent markets encountered what felt like different practices.",
        "As the group looked to scale, the bottleneck was never patient demand or clinical capacity — it was the inability to see clearly enough to make good decisions.",
      ],
    },
    holdingBack: {
      h2: "What Was Holding the Group Back",
      intro:
        "An infrastructure audit across all six ad accounts, analytics setups, and Google Business Profiles surfaced problems nobody could see from inside a single location.",
      bullets: [
        "Three agencies, three conflicting definitions of a lead",
        "No cross-location reporting or shared metrics",
        "$4,200/month lost to duplicate keywords and broad match",
        "Inconsistent branding across ads, sites, and profiles",
      ],
      closingLine:
        "None of these were dramatic failures on their own. Together they made it impossible to know which locations deserved more budget and which needed structural fixes.",
    },
    turningPoint: {
      h2: "The Dashboard Changed the Conversation",
      paragraph:
        "The first time leadership saw all six locations on one screen, a location long written off as \"underperforming\" turned out to be losing budget to duplicate keyword bidding — not lacking patient demand. Visibility, not more spend, was the unlock.",
      image: dsoStrategy,
      imageDirection:
        "Close-up of the unified dashboard interface showing cost-per-lead and ROAS trending across all six locations side by side.",
    },
    strategy: {
      h2: "Building One Growth Engine From Six",
      intro:
        "Vigorant consolidated the group's marketing infrastructure before changing a single campaign budget.",
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
      h2: "The Business Impact",
      intro: "Within six months, the group's spend and results were finally measured on the same terms.",
      kpis: [
        { value: "2.8x", label: "ROAS across all 6 locations" },
        { value: "+89", label: "Net new patients per month vs. baseline" },
        { value: "61%", label: "Lower cost-per-lead vs. prior structure" },
        { value: "$4,200", label: "Monthly ad spend waste eliminated" },
      ],
      impactParagraph:
        "The numbers changed how leadership made decisions. Budget moved toward the markets that could absorb it, underperforming locations got structural fixes instead of more spend, and expansion planning rested on attribution rather than instinct.",
    },
    quoteAndTakeaway: {
      quote: {
        text: "We finally know where every dollar goes and what it produces. That visibility alone changed how we make decisions.",
        attribution: "Practice Group Director, 6-Location DSO, Texas",
        note: "Practice identity anonymized per client agreement",
      },
      h2: "What This Means Going Forward",
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
          "Yes. Multi-location dental groups and DSOs are core to the portfolio, including unified reporting, consolidated ad management, and location-specific SEO under one framework.",
      },
      {
        question: "What does \"wasted ad spend\" mean in practice?",
        answer:
          "Budget spent on keywords, audiences, or placements that generate clicks but no qualified patient leads — usually from broad match, duplicate keywords, or missing negative keyword lists.",
      },
      {
        question: "How is branding kept consistent across locations?",
        answer:
          "Brand standards apply across ad creative, website copy, Google Business Profiles, and review responses, while still allowing location-specific messaging where local markets differ.",
      },
      {
        question: "How long before multi-location reporting is useful?",
        answer:
          "A unified dashboard typically produces trustworthy cross-location comparisons within the first full reporting month, once tracking definitions are standardized across every account.",
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
