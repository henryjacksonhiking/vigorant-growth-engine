export interface NarrativeSection {
  label: string;
  heading: string;
  paragraphs: string[];
}

export interface NarrativeStep {
  title: string;
  body: string;
}

export interface NarrativeTable {
  columns: string[];
  rows: string[][];
}

export interface NarrativeCaseStudy {
  slug: string;
  specialty: string;
  tags: string[];
  h1: string;
  opening: string;
  cta: { label: string; href: string };
  image_direction_1: string;
  image_direction_2: string;
  assumption: NarrativeSection;
  root_cause: NarrativeSection & { bullets?: string[]; table?: NarrativeTable };
  rebuild: { label: string; heading: string; intro?: string; steps: NarrativeStep[] };
  turning_point: NarrativeSection;
  results: {
    stats: Array<{ value: string; label: string }>;
    beyond_dashboard: string;
    quote?: { text: string; attribution: string; note?: string };
  };
  closing: { heading: string; paragraphs: string[] };
  final_cta: { headline: string; line: string; label: string; href: string };
  faqs: Array<{ q: string; a: string }>;
  services_used: string[];
}

export const caseStudyNarratives: Record<string, NarrativeCaseStudy> = {
  "dental-implant-specialist-california": {
    slug: "dental-implant-specialist-california",
    specialty: "dental",
    tags: ["Dental Implants", "Southern California", "Solo Practice, 1 Location"],
    h1: "Not Getting Consultation Calls? How a California Implant Practice Cut Cost-Per-Lead by 62%",
    opening:
      "The practice had strong clinical results but poor digital visibility. Cost-per-lead for a single implant consultation had reached an unsustainable $187, and the ad campaign was still spending against generic dental keywords that had nothing to do with implants. Chairside conversion was excellent — almost no one was getting to the chair.",
    cta: { label: "Get an Implant Marketing Audit", href: "/free-audit" },
    image_direction_1:
      "A wide shot of a quiet implant consultation room mid-afternoon — empty operator chair, treatment plan on the monitor, natural light. Conveys clinical capability without patient demand.",
    image_direction_2:
      "Over-the-shoulder shot of the front desk coordinator taking a consultation call, appointment book visible and filling up. Conveys restored demand without showing patient faces.",
    assumption: {
      label: "The Assumption vs. Reality",
      heading: "Reputation Was Supposed to Do the Work",
      paragraphs: [
        "The practice had strong clinical outcomes and loyal patients, and assumed that reputation would eventually translate into search visibility on its own. Referrals covered the gap for a while.",
        "Then referral volume leveled off and the problem became visible: the website ranked on page 4 for the core implant keywords, and the ad account targeted broad dental terms rather than implant-specific intent.",
      ],
    },
    root_cause: {
      label: "The Root Cause",
      heading: "A Dental Marketing Setup Running an Implant Practice",
      paragraphs: [
        "The surface problem was cost-per-lead. The structural problem was that every layer of the digital presence — rankings, markup, ad targeting, review flow — was built for general dentistry.",
      ],
      bullets: [
        "Page 4 ranking for core implant keywords",
        "No Schema.org structured data",
        "Ad campaigns targeting broad dental terms rather than implant-specific intent",
        "No systematic review collection process",
      ],
      table: {
        columns: ["Metric", "Before", "After"],
        rows: [
          ["Cost per implant consultation lead", "$187", "$71"],
          ["Organic ranking position", "Page 4", "Top 3 local"],
          ["Schema markup", "None", "Full MedicalBusiness & Dentist"],
          ["Ad targeting approach", "Broad dental terms", "Procedure-specific, intent-matched landing pages"],
          ["Review generation", "No systematic collection", "15+ reviews/month, automated"],
        ],
      },
    },
    rebuild: {
      label: "The Rebuild",
      heading: "What Was Actually Rebuilt",
      steps: [
        {
          title: "Keyword Architecture Rebuild",
          body: "Generalized dental keyword targeting was replaced with an implant-specific hierarchy, segmented by procedure, pricing intent, and location intent. Each segment was mapped to its own dedicated landing page rather than funnelled into a single general services page.",
        },
        {
          title: "Technical SEO & Schema Markup",
          body: "Dentist and MedicalProcedure Schema.org markup was implemented across the site, Core Web Vitals issues were resolved, and the URL hierarchy was restructured to match the new keyword architecture.",
        },
        {
          title: "Paid Campaign Restructure",
          body: "Google Ads was rebuilt with single-keyword ad groups for high-value implant terms, negative keyword lists were added to remove irrelevant traffic, and bidding was switched to target-CPA.",
        },
        {
          title: "Reputation Automation",
          body: "Automated post-visit SMS and email review request sequences were deployed to generate consistent Google review flow rather than occasional manual asks.",
        },
      ],
    },
    turning_point: {
      label: "The Turning Point",
      heading: "The Question That Changed the Engagement",
      paragraphs: [
        "Vigorant didn't lead with the usual keyword and bidding checklist. The reframing question was whether the marketing was actually built for an implant patient or just a dental patient.",
        "A high-consideration, high-cost decision was being marketed with generic dental language. Once that framing changed, every subsequent decision — page structure, ad copy, markup, review cadence — followed from it.",
      ],
    },
    results: {
      stats: [
        { value: "62%", label: "Reduction in cost-per-lead (from $187 to $71)" },
        { value: "+43%", label: "Increase in implant consultations booked vs. prior quarter" },
        { value: "Top 3", label: "Local ranking achieved within 60 days for implant keywords" },
        { value: "15+", label: "New reviews/month via automated requests, 4.8★ average rating" },
      ],
      beyond_dashboard:
        "Beyond the dashboard, the change showed up at the front desk. Consultation calls arrived from people who already knew they were researching implants, which shortened conversations and made the schedule more predictable week to week.",
      quote: {
        text: "We had the patients but we couldn't find new ones. Now the phone rings every day.",
        attribution: "Practice Owner, Dental Implant Specialist, Southern California",
        note: "Practice identity anonymized per client agreement",
      },
    },
    closing: {
      heading: "What Changed — And What Didn't",
      paragraphs: [
        "Within 90 days, cost-per-lead fell from $187 to $71, implant consultations rose 43% against the prior quarter, and the practice held a top-3 local position for its core implant terms.",
        "None of that changed the clinical work. The surgical outcomes and chairside conversion were already strong — that was never the problem, and marketing can't replace it. What the rebuild fixed was visibility: making sure the people already searching for this procedure could actually find the practice doing it well.",
      ],
    },
    final_cta: {
      headline: "Is Your Implant Marketing Built for Implant Patients?",
      line: "A free audit shows where your budget is going and which searches you're missing.",
      label: "Get a Free Practice Audit",
      href: "/free-audit",
    },
    faqs: [
      {
        q: "How long until healthcare SEO results appear?",
        a: "Meaningful organic movement for competitive local terms typically begins within 60–90 days. Paid ads show faster results, often within 2–4 weeks.",
      },
      {
        q: "Is a 62% cost-per-lead reduction typical?",
        a: "No guarantees apply. This outcome reflects specific market conditions, campaign structure, and practice type.",
      },
      {
        q: "Why does Schema.org markup matter for dental practices?",
        a: "It helps search engines understand content, enabling rich results and AI Overview visibility for Dentist, MedicalProcedure, and LocalBusiness data.",
      },
      {
        q: "What are Vigorant's contract requirements?",
        a: "Engagement terms vary by service package. Direct contact needed for specifics.",
      },
    ],
    services_used: ["Healthcare SEO", "Google Ads", "Schema.org Markup", "Reputation Management", "Landing Page CRO"],
  },

  "6-location-dso-texas": {
    slug: "6-location-dso-texas",
    specialty: "dental",
    tags: ["Dental Group / DSO", "Texas", "6 Locations"],
    h1: "2.8x ROAS Across 6 Locations — Unified, Measurable, Scalable",
    opening:
      "A Texas dental group had 6 locations running 6 separate, disconnected marketing efforts — three different agencies, inconsistent branding, no unified reporting. Leadership had no way to compare performance across locations or identify where budget was being wasted.",
    cta: { label: "Talk to Our Multi-Location Team", href: "/free-audit" },
    image_direction_1:
      "A leadership meeting room with six location reports spread across the table, each formatted differently. Conveys fragmentation before consolidation.",
    image_direction_2:
      "A single wall-mounted dashboard screen showing all six locations side by side, operations lead reviewing it. Conveys unified visibility.",
    assumption: {
      label: "The Assumption vs. Reality",
      heading: "Fragmentation Felt Survivable",
      paragraphs: [
        "Each location had strong clinical teams and loyal local patients, and the fragmentation seemed tolerable while each location was independently profitable.",
        "As the group looked to scale, the real bottleneck wasn't patient demand or clinical capacity — it was the inability to see performance clearly enough to make good decisions.",
      ],
    },
    root_cause: {
      label: "The Root Cause",
      heading: "Waste That Was Invisible by Design",
      paragraphs: [
        "An infrastructure audit of all 6 ad accounts, website analytics setups, and Google Business Profiles identified $4,200/month in wasted ad spend from duplicate keywords and broad-match inefficiency — invisible without a unified account view.",
      ],
      table: {
        columns: ["Month", "Milestone", "Notable Metric"],
        rows: [
          ["Month 1", "Infrastructure audit complete, dashboard live", "—"],
          ["Month 2", "Ad accounts consolidated, waste eliminated", "$4.2K/month saved"],
          ["Month 3", "Location SEO strategies deployed", "Rankings moving"],
          ["Month 4", "First ROAS measurement across all locations", "1.9x ROAS"],
          ["Month 6", "Full scale achieved", "2.8x ROAS, +89 patients/month"],
        ],
      },
    },
    rebuild: {
      label: "The Rebuild",
      heading: "Consolidating Six Efforts Into One System",
      steps: [
        {
          title: "Infrastructure Audit",
          body: "All 6 ad accounts, website analytics setups, and Google Business Profiles were audited together, which surfaced $4,200/month in wasted ad spend from duplicate keywords and broad-match inefficiency.",
        },
        {
          title: "Unified Dashboard Build",
          body: "A single real-time dashboard was created to aggregate all 6 locations, tracking cost-per-lead, conversion rate, review velocity, and organic visibility score per location.",
        },
        {
          title: "Location-Specific SEO",
          body: "Individual SEO strategies were deployed per location based on local competitive analysis, each targeting neighborhood-specific keyword clusters instead of one group-wide term set.",
        },
        {
          title: "Consolidated Ad Management",
          body: "Ad accounts were merged under unified management with shared negative keyword lists, cross-location audience learnings, and unified creative testing.",
        },
      ],
    },
    turning_point: {
      label: "The Turning Point",
      heading: "One Dashboard, One Set of Definitions",
      paragraphs: [
        "The moment that changed decision-making wasn't a strategy meeting — it was the first time all six locations appeared on one dashboard using one set of definitions.",
        "That surfaced that a location leadership had written off as \"underperforming\" was actually losing budget to duplicate keyword bidding, not lacking patient demand.",
      ],
    },
    results: {
      stats: [
        { value: "2.8x", label: "ROAS across all 6 locations" },
        { value: "+89", label: "Net new patients/month vs. baseline" },
        { value: "61%", label: "Lower cost-per-lead vs. prior campaign structure" },
        { value: "$4,200", label: "Per month in identified ad spend waste eliminated" },
      ],
      beyond_dashboard:
        "Within 6 months, the DSO had eliminated redundant spend, unified its reporting, and scaled to 89 net new patients per month across all locations — with a clear attribution model showing exactly which locations and channels were driving growth.",
      quote: {
        text: "We finally know where every dollar goes and what it produces. That visibility alone changed how we make decisions.",
        attribution: "Practice Group Director, 6-Location DSO, Texas",
        note: "Practice identity anonymized per client agreement",
      },
    },
    closing: {
      heading: "What Changed — And What Didn't",
      paragraphs: [
        "The group didn't add locations or change its clinical model. It changed how performance was measured, then acted on what the measurement revealed.",
        "The clinical teams were already the reason patients stayed — no reporting layer replaces that. What the rebuild fixed was visibility: leadership could finally see which locations and channels were producing growth, and fund them accordingly.",
      ],
    },
    final_cta: {
      headline: "Can You Compare All Your Locations on One Screen?",
      line: "We audit multi-location groups and show exactly where spend is leaking.",
      label: "Get a Free Practice Audit",
      href: "/free-audit",
    },
    faqs: [
      {
        q: "Can Vigorant manage marketing across multiple practice locations?",
        a: "Yes. Multi-location dental groups and DSOs are core to the practice portfolio, including unified reporting, consolidated ad management, and location-specific SEO strategies under one coordinated framework.",
      },
      {
        q: "What does \"wasted ad spend\" mean in practice?",
        a: "Advertising budget spent on keywords, audiences, or placements that generate clicks but no qualified patient leads — commonly from overly broad match types, duplicate keywords across campaigns, or missing negative keyword lists.",
      },
      {
        q: "How does Vigorant handle branding consistency across multiple locations?",
        a: "Brand standards apply consistently across ad creative, website copy, Google Business Profiles, and review response templates, while still allowing location-specific messaging.",
      },
    ],
    services_used: [
      "Multi-Location SEO",
      "Google Ads Management",
      "Analytics & Reporting",
      "Google Business Profile",
      "Brand Consistency",
    ],
  },

  "sports-chiropractic-florida": {
    slug: "sports-chiropractic-florida",
    specialty: "chiropractic",
    tags: ["Sports Chiropractic", "Florida", "Solo Practice, 1 Location"],
    h1: "#1 Local Ranking in 45 Days — And Featured in AI Overviews",
    opening:
      "A Florida sports chiropractic practice had 4 years of strong patient outcomes in sports injury rehabilitation but ranked on page 5 for its primary service terms, with no structured content, no Schema.org markup, and no presence in AI-generated search answers.",
    cta: { label: "Get an AI Visibility Audit", href: "/free-audit" },
    image_direction_1:
      "A sports rehab bay with resistance bands and a treatment table, athletic tape on the counter — capable clinical space, no patients waiting.",
    image_direction_2:
      "A clinician reviewing a phone showing a search result page listing the practice first in the local pack. Conveys new visibility without staged celebration.",
    assumption: {
      label: "The Assumption vs. Reality",
      heading: "Word of Mouth Was the Whole Strategy",
      paragraphs: [
        "Growth had come entirely from word of mouth — coaches, athletic trainers, and physical therapists referring patients directly. That network was strong enough that the website never needed attention.",
        "The gap didn't show up as a crisis; it showed up as invisibility — competing practices with less clinical experience ranked above this one simply because they had structured content and this practice didn't.",
      ],
    },
    root_cause: {
      label: "The Root Cause",
      heading: "Nothing for Search Engines or AI Systems to Confirm",
      paragraphs: [
        "No Schema.org entities meant search engines had no reliable way to confirm the practice's specialty. No FAQ-format content or named clinical authorship meant AI systems had nothing to cite. A 4.3★ average rating wasn't generating the review velocity needed to compete with more visible providers.",
      ],
      table: {
        columns: ["Metric", "Before", "After", "Change"],
        rows: [
          ["Local Search Ranking", "Page 5", "#1 Local Pack", "+40 positions"],
          ["Organic Phone Calls", "Baseline", "+44%", "+44%"],
          ["Google Business Views", "Baseline", "+180%", "+180%"],
          ["Average Review Rating", "4.3★", "4.9★", "+0.6 stars"],
          ["AI Overview Appearances", "0", "3 platforms", "New channel"],
          ["Schema.org Coverage", "None", "5 entity types", "Full implementation"],
        ],
      },
    },
    rebuild: {
      label: "The Rebuild",
      heading: "Making the Practice Structurally Legible",
      steps: [
        {
          title: "Competitive & Keyword Analysis",
          body: "All local competitors were mapped across organic and Google Maps, and 3 high-opportunity keyword clusters were identified with strong intent and manageable competition — combining local competitor gap analysis, intent-based keyword mapping, and a featured snippet opportunity scan.",
        },
        {
          title: "Google Business Profile Optimization",
          body: "Categories, hours, and service listings were corrected so the profile accurately described a sports injury rehabilitation practice.",
        },
        {
          title: "Schema.org Markup Implementation",
          body: "Structured data was implemented across the site so search engines and AI systems could reliably identify the practice's specialty.",
        },
        {
          title: "AIO Content Strategy",
          body: "FAQ-format pages, named clinical authorship, and structured answers were built around the questions injured athletes actually ask.",
        },
      ],
    },
    turning_point: {
      label: "The Turning Point",
      heading: "Structure Beats Size",
      paragraphs: [
        "The reframing wasn't about producing more content — it was that AI systems don't cite the biggest practice, they cite the most structurally legible one.",
        "A smaller, single-location practice with clean Schema.org markup and clearly authored expertise can outrank and out-cite a much larger competitor that never structured its content.",
      ],
    },
    results: {
      stats: [
        { value: "#1", label: "Local pack ranking — from page 5 in 45 days" },
        { value: "+44%", label: "Organic phone calls vs. pre-engagement baseline" },
        { value: "+180%", label: "Google Business views post GBP optimization" },
        { value: "3", label: "AI platform appearances — ChatGPT, Gemini, Perplexity" },
      ],
      beyond_dashboard:
        "In 45 days, a practice with zero digital infrastructure went from page 5 to the #1 local pack position, saw a 44% increase in organic phone calls, and achieved placement in AI-generated answers across three major AI platforms.",
      quote: {
        text: "The practices that appear in AI-generated answers in 2026 are not the biggest — they are the most structurally authoritative.",
        attribution: "Vigorant AIO Strategy Team",
      },
    },
    closing: {
      heading: "What Changed — And What Didn't",
      paragraphs: [
        "The practice didn't change how it treats athletes. Four years of outcomes in sports injury rehabilitation were already the strongest asset it had.",
        "Marketing can't replace that clinical quality, and it never tried to. What the rebuild fixed was visibility — giving search engines and AI systems a reliable way to confirm what this practice does and who it does it for.",
      ],
    },
    final_cta: {
      headline: "Would an AI Search Engine Cite Your Practice?",
      line: "We audit Schema coverage, content structure, and local visibility in one pass.",
      label: "Get a Free Practice Audit",
      href: "/free-audit",
    },
    faqs: [
      {
        q: "What is AIO (AI Overview Optimization) for chiropractic practices?",
        a: "Structuring website content to be cited by AI search engines like ChatGPT, Google Gemini, and Perplexity — FAQ-format content, Schema.org markup, named clinical authors, and institutional citations.",
      },
      {
        q: "How did the practice achieve #1 ranking in 45 days?",
        a: "The practice had zero existing competition for its specific keyword cluster combination, a clean domain with no technical issues, and a Google Business Profile that had never been properly optimized. Timeline results vary significantly by market.",
      },
      {
        q: "Is it possible for every chiropractic practice to appear in AI Overviews?",
        a: "AI search visibility depends on content authority, Schema.org markup quality, E-E-A-T signals, and ongoing content production. There are no guaranteed outcomes.",
      },
    ],
    services_used: [
      "Local SEO",
      "Google Business Profile",
      "Schema.org Markup",
      "AIO Content Strategy",
      "Reputation Management",
    ],
  },
};
