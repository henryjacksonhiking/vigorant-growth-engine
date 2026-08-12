import type { CaseStudyContent } from "@/types/case-study-content";

const content: CaseStudyContent = {
  slug: "dental-implant-specialist-california",
  template: "A",
  category: "dental",
  tags: ["Dental Implants", "Southern California", "Solo Practice, 1 Location"],
  hero: {
    h1: "Not Getting Consultation Calls? How a California Implant Practice Cut Cost-Per-Lead by 62%",
    paragraphs: [
      "A Southern California dental implant specialist had strong clinical outcomes, loyal patients, and an excellent chairside conversion rate — but almost no one was reaching the chair. Cost-per-lead for a single implant consultation had reached an unsustainable $187, and the practice's organic visibility for implant searches had stalled on page 4.",
      "The gap wasn't clinical, it was structural: broad dental ad targeting, no Schema.org markup identifying the practice as an implant specialist, and no systematic way to turn satisfied patients into visible reviews.",
    ],
  },
  primaryCta: { label: "See What's Costing You Leads", href: "/free-audit" },
  heroImageDirection:
    "The practice owner reviewing a paid-ads dashboard at a quiet front desk, implant model visible on the counter beside him.",
  challenge: {
    h2: "A Skilled Practice That Couldn't Convert Interest",
    h3: "The Problem Was Bigger Than the Ad Budget",
    paragraphs: [
      "The practice had built its reputation on clinical outcomes — careful case selection, a low revision rate, patients who left reviews unprompted — and assumed that reputation would eventually show up in search on its own. Referrals covered the gap for a while, which made the ranking problem easy to postpone. When referral volume leveled off, the gap became visible: page 4 rankings for the implant terms that mattered most, and an ad account still built around broad \u201cdentist near me\u201d language rather than implant-specific intent.",
      "A closer audit showed the $187 cost-per-lead wasn't a bidding problem, it was structural. Challenges identified: page 4 ranking for core implant keywords; no Schema.org structured data; ad campaigns targeting broad dental terms rather than implant-specific intent; no systematic review collection process. Individually minor, together they meant the practice was investing in visibility without ever reaching the right patient at the right moment.",
    ],
  },
  beforeAfter: {
    rows: [
      { metric: "Cost per implant consultation lead", before: "$187", after: "$71" },
      { metric: "Organic ranking position", before: "Page 4", after: "Top 3 local" },
      { metric: "Schema markup", before: "None", after: "Full MedicalBusiness & Dentist" },
      {
        metric: "Ad targeting approach",
        before: "Broad dental terms",
        after: "Procedure-specific, intent-matched landing pages",
      },
      { metric: "Review generation", before: "No systematic collection", after: "15+ reviews/month, automated" },
    ],
  },
  strategy: {
    h2: "Rebuilding the Path From Search to Consultation",
    steps: [
      {
        h3: "Keyword Architecture Rebuild",
        description:
          "Replaced generalized dental keyword targeting with an implant-specific hierarchy, segmented by procedure, pricing intent, and location intent, each mapped to its own dedicated landing page.",
      },
      {
        h3: "Technical SEO & Schema Markup",
        description:
          "Implemented Dentist and MedicalProcedure Schema.org markup, resolved Core Web Vitals issues, restructured URL hierarchy.",
      },
      {
        h3: "Paid Campaign Restructure",
        description:
          "Rebuilt Google Ads with single-keyword ad groups for high-value implant terms, added negative keyword lists, switched to target-CPA bidding.",
      },
      {
        h3: "Reputation Automation",
        description:
          "Deployed automated post-visit SMS and email review request sequences for consistent Google review generation.",
      },
    ],
    paragraphs: [
      "Each piece addressed a specific gap from the audit — the keyword rebuild and landing pages fixed intent-matching, the schema and technical fixes gave search engines a clear signal of what the practice specialized in.",
      "Together, the changes reframed the whole campaign around one question: is this marketing built for an implant patient, or just a dental patient? Once campaign, landing pages, and schema markup were rebuilt around implant-specific intent, ranking and cost improvements followed within weeks.",
    ],
    imageDirection:
      "Split view of the rebuilt implant-specific landing page next to the original generalized homepage, showing the messaging shift.",
  },
  statTrail: [
    { value: "62%", label: "Reduction in cost-per-lead (from $187 to $71)" },
    { value: "+43%", label: "Increase in implant consultations booked vs. prior quarter" },
    { value: "Top 3", label: "Local ranking achieved within 60 days for implant keywords" },
    { value: "15+", label: "New reviews/month via automated requests, 4.8★ average rating" },
  ],
  quote: {
    text: "We had the patients but we couldn't find new ones. Now the phone rings every day.",
    attribution: "Practice Owner, Dental Implant Specialist, Southern California",
    note: "Practice identity anonymized per client agreement",
  },
  conclusion: {
    paragraph:
      "The practice didn't need better clinical outcomes, it already had those. It needed a digital presence built for the specific patient it was trying to reach, instead of a generic dental audience that was never going to book a $6,000+ procedure. A rebuilt keyword structure and clean Schema.org foundation can't replace clinical skill — what it can do is make sure the right patient finds the practice before a competitor does.",
    ctaLabel: "Request Your Free Audit",
    ctaHref: "/free-audit",
  },
  faqs: [
    {
      question: "How long until healthcare SEO results appear?",
      answer:
        "Meaningful organic movement for competitive local terms typically begins within 60–90 days. Paid ads show faster results, often within 2–4 weeks.",
    },
    {
      question: "Is a 62% cost-per-lead reduction typical?",
      answer:
        "No guarantees apply. This outcome reflects specific market conditions, campaign structure, and practice type.",
    },
    {
      question: "Why does Schema.org markup matter for dental practices?",
      answer:
        "It helps search engines understand content, enabling rich results and AI Overview visibility for Dentist, MedicalProcedure, and LocalBusiness data.",
    },
    {
      question: "What are Vigorant's contract requirements?",
      answer: "Engagement terms vary by service package. Direct contact needed for specifics.",
    },
  ],
  servicesUsed: [
    "Healthcare SEO",
    "Google Ads",
    "Schema.org Markup",
    "Reputation Management",
    "Landing Page CRO",
  ],
};

export default content;
