import type { CaseStudyContent } from "@/types/case-study-content";

const content: CaseStudyContent = {
  slug: "6-location-dso-texas",
  template: "A",
  category: "dental",
  tags: ["Multi-Location DSO", "Texas", "6 Locations"],
  hero: {
    h1: "2.8x ROAS Across 6 Locations — Unified, Measurable, Scalable",
    paragraphs: [
      "A Texas dental group had 6 locations running 6 separate, disconnected marketing efforts — three different agencies, inconsistent branding, and no unified reporting. Leadership had strong clinical teams at every location but no way to compare performance across them or identify where budget was being wasted.",
      "Vigorant consolidated the infrastructure, unified reporting, and scaled what was already working — turning six fragmented efforts into one coordinated growth engine.",
    ],
  },
  primaryCta: { label: "Get a Multi-Location Audit", href: "/free-audit" },
  heroImageDirection:
    "The operations director at a desk with a multi-location dashboard on screen, a map of six Texas markets in the background.",
  challenge: {
    h2: "Six Locations — One Growth Engine",
    h3: "The Problem Was Bigger Than Reporting",
    paragraphs: [
      "Each location had strong clinical teams and loyal local patients, but the group had no shared marketing infrastructure. Three different agencies managed different subsets of locations, each with its own branding conventions, ad account structure, and definition of a \u201clead.\u201d As the group looked to scale, the actual bottleneck wasn't patient demand or clinical capacity — it was the inability to see clearly enough to make good decisions.",
      "An infrastructure audit across all 6 ad accounts, website analytics setups, and Google Business Profiles identified $4,200/month in wasted ad spend — largely duplicate keywords across overlapping campaigns and broad-match targeting never tightened after launch. No one had caught it, because no one could see all six accounts side by side.",
    ],
  },
  beforeAfter: {
    rows: [
      {
        metric: "Marketing infrastructure",
        before: "3 separate agencies, inconsistent branding",
        after: "Unified management, consistent brand standards",
      },
      {
        metric: "Performance visibility",
        before: "No cross-location reporting",
        after: "Single real-time dashboard, all 6 locations",
      },
      { metric: "Monthly ad spend waste", before: "$4,200 (duplicate keywords, broad match)", after: "Eliminated" },
      { metric: "Return on ad spend", before: "Unmeasured / inconsistent", after: "2.8x ROAS across all locations" },
      { metric: "New patients per month", before: "Baseline", after: "+89 net new" },
    ],
  },
  strategy: {
    h2: "Building One Growth Engine From Six",
    steps: [
      {
        h3: "Infrastructure Audit",
        description:
          "Audited all 6 ad accounts, website analytics setups, and Google Business Profiles; identified $4,200/month in wasted ad spend from duplicate keywords and broad-match inefficiency.",
      },
      {
        h3: "Unified Dashboard Build",
        description:
          "Built a single real-time dashboard aggregating all 6 locations, tracking cost-per-lead, conversion rate, review velocity, and organic visibility score per location.",
      },
      {
        h3: "Location-Specific SEO",
        description:
          "Deployed individual SEO strategies per location based on local competitive analysis, each targeting neighborhood-specific keyword clusters.",
      },
      {
        h3: "Consolidated Ad Management",
        description:
          "Merged ad accounts under unified management with shared negative keyword lists, cross-location audience learnings, and unified creative testing.",
      },
    ],
    paragraphs: [
      "The audit came first, so leadership could see exactly where budget was leaking before any new spend went out. From there, the dashboard gave every location a shared set of metrics for the first time.",
      "Month by month: Month 1 — audit complete, dashboard live. Month 2 — ad accounts consolidated, $4.2K/month saved. Month 3 — location SEO deployed, rankings moving. Month 4 — first group-wide ROAS measurement, 1.9x. Month 6 — full scale achieved, 2.8x ROAS and +89 patients/month. The dashboard itself became the turning point — the first time leadership could see that a location written off as \u201cunderperforming\u201d was actually losing budget to duplicate keyword bidding, not lacking patient demand.",
    ],
    imageDirection:
      "Close-up of the unified dashboard interface showing cost-per-lead and ROAS trending across all six locations side by side.",
  },
  statTrail: [
    { value: "2.8x", label: "ROAS across all 6 locations" },
    { value: "+89", label: "Net new patients/month vs. baseline" },
    { value: "61%", label: "Lower cost-per-lead vs. prior campaign structure" },
    { value: "$4,200", label: "Monthly ad spend waste identified and eliminated" },
  ],
  quote: {
    text: "We finally know where every dollar goes and what it produces. That visibility alone changed how we make decisions.",
    attribution: "Practice Group Director, 6-Location DSO, Texas",
    note: "Practice identity anonymized per client agreement",
  },
  conclusion: {
    paragraph:
      "Within 6 months, the DSO had eliminated redundant spend, unified its reporting, and scaled to 89 net new patients per month across all locations — with a clear attribution model showing exactly which locations and channels were driving growth. The group's six locations were never the problem; what was missing was a single system to see and manage them as one business.",
    ctaLabel: "Request Your Free Audit",
    ctaHref: "/free-audit",
  },
  faqs: [
    {
      question: "Can Vigorant manage marketing across multiple practice locations?",
      answer:
        "Yes. Multi-location dental groups and DSOs are core to the practice portfolio, including unified reporting, consolidated ad management, and location-specific SEO strategies under one coordinated framework.",
    },
    {
      question: "What does \u201cwasted ad spend\u201d mean in practice?",
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
};

export default content;
