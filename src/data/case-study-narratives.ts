export interface CSStep {
  title: string;
  body: string;
}

export interface CSComparisonRow {
  metric: string;
  before: string;
  after: string;
}

export interface NarrativeCaseStudy {
  slug: string;
  specialty: string;
  tags: string[];
  /* 1. Hero introduction */
  h1: string;
  intro: string[];
  /* 2. Primary CTA + hero image */
  cta: { label: string; href: string };
  hero_image_direction: string;
  /* 3. Challenge & context */
  challenge: { heading: string; subheading?: string; paragraphs: string[] };
  /* 4. Before / after */
  comparison: CSComparisonRow[];
  /* 5. Strategy & implementation */
  strategy: {
    heading: string;
    steps: CSStep[];
    paragraphs: string[];
    image_direction: string;
  };
  /* 6. Results stat trail */
  stats: Array<{ value: string; label: string }>;
  /* 7. Quote + conclusion */
  quote: { text: string; attribution: string; note?: string };
  conclusion: string;
  final_cta: { headline: string; line: string; label: string; href: string };
  /* 8. FAQ */
  faqs: Array<{ q: string; a: string }>;
  services_used: string[];
}

export const caseStudyNarratives: Record<string, NarrativeCaseStudy> = {
  "dental-implant-specialist-california": {
    slug: "dental-implant-specialist-california",
    specialty: "dental",
    tags: ["Dental Implants", "Southern California", "Solo Practice, 1 Location"],
    h1: "Not Getting Consultation Calls? How a California Implant Practice Cut Cost-Per-Lead by 62%",
    intro: [
      "A Southern California dental implant specialist had strong clinical outcomes, loyal patients, and an excellent chairside conversion rate — but almost no one was reaching the chair. Cost-per-lead for a single implant consultation had reached an unsustainable $187, and the practice's organic visibility for implant searches had stalled on page 4.",
      "The gap wasn't clinical, it was structural: broad dental ad targeting, no Schema.org markup identifying the practice as an implant specialist, and no systematic way to turn satisfied patients into visible reviews.",
    ],
    cta: { label: "See What's Costing You Leads", href: "/free-audit" },
    hero_image_direction:
      "The practice owner reviewing a paid-ads dashboard at a quiet front desk, implant model visible on the counter beside him.",
    challenge: {
      heading: "A Skilled Practice That Couldn't Convert Interest",
      subheading: "The Problem Was Bigger Than the Ad Budget",
      paragraphs: [
        "The practice had built its reputation on clinical outcomes — careful case selection, a low revision rate, patients who left reviews unprompted — and assumed that reputation would eventually show up in search on its own. Referrals covered the gap for a while, which made the ranking problem easy to postpone. When referral volume leveled off, the gap became visible: page 4 rankings for the implant terms that mattered most, and an ad account still built around broad \"dentist near me\" language rather than implant-specific intent.",
        "A closer audit showed the $187 cost-per-lead wasn't a bidding problem, it was structural. Challenges identified: page 4 ranking for core implant keywords; no Schema.org structured data; ad campaigns targeting broad dental terms rather than implant-specific intent; no systematic review collection process. Individually minor, together they meant the practice was investing in visibility without ever reaching the right patient at the right moment.",
      ],
    },
    comparison: [
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
    strategy: {
      heading: "Rebuilding the Path From Search to Consultation",
      steps: [
        {
          title: "Keyword Architecture Rebuild",
          body: "Replaced generalized dental keyword targeting with an implant-specific hierarchy, segmented by procedure, pricing intent, and location intent, each mapped to its own dedicated landing page.",
        },
        {
          title: "Technical SEO & Schema Markup",
          body: "Implemented Dentist and MedicalProcedure Schema.org markup, resolved Core Web Vitals issues, restructured URL hierarchy.",
        },
        {
          title: "Paid Campaign Restructure",
          body: "Rebuilt Google Ads with single-keyword ad groups for high-value implant terms, added negative keyword lists, switched to target-CPA bidding.",
        },
        {
          title: "Reputation Automation",
          body: "Deployed automated post-visit SMS and email review request sequences for consistent Google review generation.",
        },
      ],
      paragraphs: [
        "Each piece addressed a specific gap from the audit — the keyword rebuild and landing pages fixed intent-matching, the schema and technical fixes gave search engines a clear signal of what the practice specialized in.",
        "Together, the changes reframed the whole campaign around one question: is this marketing built for an implant patient, or just a dental patient? Once campaign, landing pages, and schema markup were rebuilt around implant-specific intent, ranking and cost improvements followed within weeks.",
      ],
      image_direction:
        "Split view of the rebuilt implant-specific landing page next to the original generalized homepage, showing the messaging shift.",
    },
    stats: [
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
    conclusion:
      "The practice didn't need better clinical outcomes, it already had those. It needed a digital presence built for the specific patient it was trying to reach, instead of a generic dental audience that was never going to book a $6,000+ procedure. A rebuilt keyword structure and clean Schema.org foundation can't replace clinical skill — what it can do is make sure the right patient finds the practice before a competitor does.",
    final_cta: {
      headline: "Find Out What's Costing You Consultations",
      line: "We'll review your rankings, ad structure, and schema markup, and show you where the leaks are.",
      label: "Request Your Free Audit",
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
    services_used: [
      "Healthcare SEO",
      "Google Ads",
      "Schema.org Markup",
      "Reputation Management",
      "Landing Page CRO",
    ],
  },

  "6-location-dso-texas": {
    slug: "6-location-dso-texas",
    specialty: "dental",
    tags: ["Multi-Location DSO", "Texas", "6 Locations"],
    h1: "2.8x ROAS Across 6 Locations — Unified, Measurable, Scalable",
    intro: [
      "A Texas dental group had 6 locations running 6 separate, disconnected marketing efforts — three different agencies, inconsistent branding, and no unified reporting. Leadership had strong clinical teams at every location but no way to compare performance across them or identify where budget was being wasted.",
      "Vigorant consolidated the infrastructure, unified reporting, and scaled what was already working — turning six fragmented efforts into one coordinated growth engine.",
    ],
    cta: { label: "Get a Multi-Location Audit", href: "/free-audit" },
    hero_image_direction:
      "The operations director at a desk with a multi-location dashboard on screen, a map of six Texas markets in the background.",
    challenge: {
      heading: "Six Locations — One Growth Engine",
      subheading: "The Problem Was Bigger Than Reporting",
      paragraphs: [
        "Each location had strong clinical teams and loyal local patients, but the group had no shared marketing infrastructure. Three different agencies managed different subsets of locations, each with its own branding conventions, ad account structure, and definition of a \"lead.\" As the group looked to scale, the actual bottleneck wasn't patient demand or clinical capacity — it was the inability to see clearly enough to make good decisions.",
        "An infrastructure audit across all 6 ad accounts, website analytics setups, and Google Business Profiles identified $4,200/month in wasted ad spend — largely duplicate keywords across overlapping campaigns and broad-match targeting never tightened after launch. No one had caught it, because no one could see all six accounts side by side.",
      ],
    },
    comparison: [
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
    strategy: {
      heading: "Building One Growth Engine From Six",
      steps: [
        {
          title: "Infrastructure Audit",
          body: "Audited all 6 ad accounts, website analytics setups, and Google Business Profiles; identified $4,200/month in wasted ad spend from duplicate keywords and broad-match inefficiency.",
        },
        {
          title: "Unified Dashboard Build",
          body: "Built a single real-time dashboard aggregating all 6 locations, tracking cost-per-lead, conversion rate, review velocity, and organic visibility score per location.",
        },
        {
          title: "Location-Specific SEO",
          body: "Deployed individual SEO strategies per location based on local competitive analysis, each targeting neighborhood-specific keyword clusters.",
        },
        {
          title: "Consolidated Ad Management",
          body: "Merged ad accounts under unified management with shared negative keyword lists, cross-location audience learnings, and unified creative testing.",
        },
      ],
      paragraphs: [
        "The audit came first, so leadership could see exactly where budget was leaking before any new spend went out. From there, the dashboard gave every location a shared set of metrics for the first time.",
        "Month by month: Month 1 — audit complete, dashboard live. Month 2 — ad accounts consolidated, $4.2K/month saved. Month 3 — location SEO deployed, rankings moving. Month 4 — first group-wide ROAS measurement, 1.9x. Month 6 — full scale achieved, 2.8x ROAS and +89 patients/month. The dashboard itself became the turning point — the first time leadership could see that a location written off as \"underperforming\" was actually losing budget to duplicate keyword bidding, not lacking patient demand.",
      ],
      image_direction:
        "Close-up of the unified dashboard interface showing cost-per-lead and ROAS trending across all six locations side by side.",
    },
    stats: [
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
    conclusion:
      "Within 6 months, the DSO had eliminated redundant spend, unified its reporting, and scaled to 89 net new patients per month across all locations — with a clear attribution model showing exactly which locations and channels were driving growth. The group's six locations were never the problem; what was missing was a single system to see and manage them as one business.",
    final_cta: {
      headline: "See Every Location in One View",
      line: "We'll audit your accounts, find the wasted spend, and show you what unified reporting would surface.",
      label: "Request Your Free Audit",
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
    tags: ["Sports Chiropractic", "Florida", "Single Location"],
    h1: "#1 Local Ranking in 45 Days — And Featured in AI Overviews",
    intro: [
      "A Florida sports chiropractic practice had 4 years of strong patient outcomes in sports injury rehabilitation but ranked on page 5 for its primary service terms, with no structured content, no Schema.org markup, and no presence in AI-generated search answers.",
      "Vigorant built an AIO-optimized content and local SEO strategy from the ground up, taking the practice from invisible to the #1 local pack position, and into AI Overviews across three platforms, in 45 days.",
    ],
    cta: { label: "Check Your AI Search Visibility", href: "/free-audit" },
    hero_image_direction:
      "The chiropractor at a laptop in a treatment room, sports tape and rehab equipment visible in the background.",
    challenge: {
      heading: "Invisible in Search. Invisible in AI. Zero Digital Presence.",
      subheading: "The Problem Was Bigger Than Ranking",
      paragraphs: [
        "Growth had come entirely from word of mouth — coaches, athletic trainers, and physical therapists referring patients directly. That network was strong enough that the website never needed attention. The gap didn't show up as a crisis, it showed up as invisibility: competing practices with less clinical experience ranked above this one simply because they had structured content and this practice didn't.",
        "A full audit showed the practice was structurally absent from the systems modern patients use to evaluate a provider. No Schema.org entities meant search engines had no reliable way to confirm the practice's specialty. No FAQ-format content or named clinical authorship meant AI systems had nothing to cite. A 4.3★ average rating wasn't generating the review velocity needed to compete with more visible providers.",
      ],
    },
    comparison: [
      { metric: "Local Search Ranking", before: "Page 5", after: "#1 Local Pack" },
      { metric: "Organic Phone Calls", before: "Baseline", after: "+44%" },
      { metric: "Google Business Views", before: "Baseline", after: "+180%" },
      { metric: "Average Review Rating", before: "4.3★", after: "4.9★" },
      { metric: "AI Overview Appearances", before: "0 platforms", after: "3 platforms" },
      { metric: "Schema.org Coverage", before: "None", after: "5 entity types" },
    ],
    strategy: {
      heading: "How We Built Visibility From Zero — In 45 Days",
      steps: [
        {
          title: "Competitive & Keyword Analysis",
          body: "Mapped all local competitors across organic and Google Maps; identified 3 high-opportunity keyword clusters with strong intent and manageable competition (local competitor gap analysis, intent-based keyword mapping, featured snippet opportunity scan).",
        },
        {
          title: "Google Business Profile Optimization",
          body: "Corrected categories, hours, and service listings.",
        },
        {
          title: "Schema.org Markup Implementation",
          body: "Structured data across the site so search engines and AI systems could reliably identify the practice's specialty.",
        },
        {
          title: "AIO Content Strategy",
          body: "FAQ-format pages, named clinical authorship, and structured answers to the questions injured athletes actually ask.",
        },
      ],
      paragraphs: [
        "The practice had almost no existing competition for its specific keyword cluster and a clean domain with no technical debt to work around, so once the structural pieces were in place, results moved quickly.",
        "The reframing that made the difference: AI systems don't cite the biggest practice, they cite the most structurally legible one. A smaller, single-location practice with clean Schema.org markup and clearly authored expertise can outrank and out-cite a much larger competitor that never structured its content.",
      ],
      image_direction:
        "Before/after of the Google Business Profile, showing corrected categories and expanded service listings.",
    },
    stats: [
      { value: "#1", label: "Local pack ranking — from page 5 in 45 days" },
      { value: "+44%", label: "Organic phone calls vs. pre-engagement baseline" },
      { value: "+180%", label: "Google Business profile views post-optimization" },
      { value: "3", label: "AI platform appearances — ChatGPT, Gemini, Perplexity" },
    ],
    quote: {
      text: "The practices that appear in AI-generated answers in 2026 are not the biggest — they are the most structurally authoritative.",
      attribution: "Vigorant AIO Strategy Team",
      note: "Practice identity anonymized per client agreement",
    },
    conclusion:
      "In 45 days, a practice with zero digital infrastructure went from page 5 to the #1 local pack position, saw a 44% increase in organic phone calls, and achieved placement in AI-generated answers across three major AI platforms. Schema.org markup and AIO content can't replace four years of clinical trust — what they can do is make sure that trust is visible the moment someone searches, human or AI.",
    final_cta: {
      headline: "Find Out If AI Can See Your Practice",
      line: "We'll check your Schema.org coverage, local pack position, and AI Overview visibility.",
      label: "Request Your Free Audit",
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
