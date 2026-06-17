import type { CaseStudy } from "@/types/case-study";

export const caseStudies: CaseStudy[] = [
  {
    slug: "dental-implant-specialist-california",
    specialty: "dental",
    template: "turnaround",
    tag: "Dental SEO + Paid Ads",
    initial: "DI",
    published: "2026-01-15",
    meta: {
      title: "Dental Implant Practice Reduces Cost-Per-Lead by 62% | Vigorant Case Study",
      description:
        "How a Southern California dental implant specialist reduced cost-per-lead from $187 to $71 and achieved top-3 rankings in 60 days with Vigorant's SEO and paid advertising system.",
    },
    practice: {
      type: "Dental Implant Specialist",
      location: "Southern California",
      size: "Solo practitioner, 1 location",
      anonymised: true,
    },
    hero: {
      headline: "From $187 to $71 Cost-Per-Lead in 90 Days",
      subheadline:
        "A Southern California dental implant practice had strong clinical results but poor digital visibility. Vigorant rebuilt their campaign structure and launched a targeted local SEO push.",
      primary_metric: { value: "$71", label: "Cost per implant consultation lead (from $187)" },
      hero_image_src: "https://images.unsplash.com/photo-1588776814546-1ffbb4a43abe?w=1400&q=80",
      hero_image_alt: "Modern dental practice reception area",
    },
    stats: [
      { value: "62%", label: "Reduction in cost-per-lead", source: "90-day campaign data" },
      { value: "+43%", label: "Implant consultations booked", source: "vs. prior quarter" },
      { value: "Top 3", label: "Local ranking for implant terms", source: "achieved in 60 days" },
      { value: "4.8★", label: "Average review rating", source: "Google Maps — post engagement" },
    ],
    turnaround: {
      situation_heading: "A Strong Practice With an Invisible Digital Presence",
      situation_body:
        "The practice had a loyal patient base and excellent clinical outcomes, but their website was generating minimal organic traffic and their paid ads were burning budget on unqualified clicks. Cost-per-lead had climbed to $187 — unsustainable for a high-value procedure practice.",
      before_items: [
        "$187 cost per implant consultation lead",
        "Page 4 ranking for primary implant keywords",
        "No Schema.org structured data on the website",
        "Ad campaigns targeting broad dental terms — not implant-specific intent",
        "Zero reviews requested or collected systematically",
      ],
      after_items: [
        "$71 cost per implant consultation lead",
        "Top 3 local ranking for implant-specific keywords",
        "Full Schema.org MedicalBusiness and Dentist markup deployed",
        "Procedure-specific paid campaigns with intent-matched landing pages",
        "Automated review request system generating 15+ new reviews/month",
      ],
      intervention_heading: "What We Changed — And Why It Worked",
      intervention_steps: [
        { icon: "Search", title: "Keyword Architecture Rebuild", body: "Replaced broad dental keyword targeting with a tightly scoped implant-specific keyword hierarchy — procedure intent, price intent, and location intent — mapped to dedicated landing pages." },
        { icon: "Code2", title: "Technical SEO & Schema Markup", body: "Deployed Schema.org Dentist and MedicalProcedure markup. Fixed Core Web Vitals. Restructured URL silo to match the new keyword architecture." },
        { icon: "Target", title: "Paid Campaign Restructure", body: "Rebuilt Google Ads account with single-keyword ad groups for high-value implant terms. Added negative keyword lists to eliminate irrelevant clicks. Switched to target CPA bidding." },
        { icon: "Star", title: "Reputation Automation", body: "Deployed automated post-visit SMS and email review request sequences, generating a consistent flow of new Google reviews to strengthen local pack performance." },
      ],
      before_image_src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      before_image_alt: "Dental practice front desk",
    },
    services_used: ["Healthcare SEO", "Google Ads", "Schema.org Markup", "Reputation Management", "Landing Page CRO"],
    results_summary:
      "Within 90 days, the practice achieved a 62% reduction in cost-per-lead and a 43% increase in implant consultations booked. The combination of technical SEO, procedure-specific paid campaigns, and reputation automation created a compounding effect that continued to improve month over month.",
    key_results: [
      { metric: "62%", label: "Lower cost-per-lead", context: "From $187 to $71 per implant consultation" },
      { metric: "+43%", label: "More consultations booked", context: "Compared to prior quarter" },
      { metric: "Top 3", label: "Local search ranking", context: "For primary implant keywords within 60 days" },
      { metric: "15+", label: "New reviews per month", context: "Via automated post-visit review requests" },
    ],
    quote: {
      text: "We had the patients but we couldn't find new ones. Now the phone rings every day.",
      attribution: "Practice Owner",
      role: "Dental Implant Specialist, Southern California",
    },
    geo_visibility: { present: false, platforms: [], description: "" },
    faqs: [
      { q: "How long does it take to see results from healthcare SEO?", a: "For competitive local healthcare terms, meaningful organic movement typically begins within 60–90 days. Paid advertising results are faster — often within the first 2–4 weeks of a well-structured campaign." },
      { q: "Is a 62% reduction in cost-per-lead typical for dental practices?", a: "No specific outcome can be guaranteed for any practice. This result reflects a specific combination of market conditions, campaign structure, and practice type." },
      { q: "What is Schema.org markup and why does it matter for dental practices?", a: "Schema.org markup is structured data that helps search engines understand your website content. For dental practices, implementing Dentist, MedicalProcedure, and LocalBusiness schema helps Google surface your practice in rich results and AI Overviews." },
      { q: "Do I need to sign a long-term contract with Vigorant?", a: "Vigorant engagement terms vary by service package and practice goals. Contact us directly for a transparent overview of how our engagements are structured." },
    ],
    related: ["6-location-dso-texas", "sports-chiropractic-florida"],
  },
  {
    slug: "6-location-dso-texas",
    specialty: "dental",
    template: "growth",
    tag: "Multi-Location SEO",
    initial: "DG",
    published: "2026-02-15",
    meta: {
      title: "6-Location Texas DSO Achieves 2.8x ROAS Across All Locations | Vigorant Case Study",
      description:
        "How a 6-location dental group in Texas unified their marketing infrastructure, reduced cost-per-lead by 61%, and scaled to 89 new patients per month.",
    },
    practice: {
      type: "6-Location DSO — Texas",
      location: "Texas (multi-location)",
      size: "6 locations, group practice",
      anonymised: true,
    },
    hero: {
      headline: "2.8x ROAS Across 6 Locations — Unified, Measurable, Scalable",
      subheadline:
        "A Texas dental group had 6 locations running 6 separate, disconnected marketing efforts. Vigorant consolidated the infrastructure, unified reporting, and scaled what was working.",
      primary_metric: { value: "2.8x", label: "Return on ad spend across all locations" },
      hero_image_src: "https://images.unsplash.com/photo-1629909615957-be38d48fbbe4?w=1400&q=80",
      hero_image_alt: "Multi-location dental group office exterior",
    },
    stats: [
      { value: "2.8x", label: "ROAS across all locations", source: "90-day average" },
      { value: "+89", label: "New patients per month", source: "net new vs. baseline" },
      { value: "61%", label: "Lower cost-per-lead", source: "vs. prior campaign structure" },
      { value: "6", label: "Locations unified", source: "single dashboard, one strategy" },
    ],
    growth: {
      ambition_heading: "Six Locations — One Growth Engine",
      ambition_body:
        "The group had strong clinical teams across all six locations but fragmented marketing — three different ad agencies, inconsistent branding, and no unified reporting. Leadership had no way to compare performance across locations or identify where budget was being wasted.",
      strategy_heading: "The Consolidation and Scale Strategy",
      strategy_steps: [
        { number: "01", title: "Infrastructure Audit", body: "Audited all 6 ad accounts, website analytics setups, and Google Business Profiles. Identified $4,200/month in wasted ad spend on duplicate keywords and broad-match inefficiency." },
        { number: "02", title: "Unified Dashboard Build", body: "Built a single real-time dashboard aggregating all 6 locations — cost-per-lead, conversion rate, review velocity, and organic visibility score per location." },
        { number: "03", title: "Location-Specific SEO", body: "Deployed individual SEO strategies per location based on local competitive analysis — each location targeting its own neighbourhood keyword clusters." },
        { number: "04", title: "Consolidated Ad Management", body: "Merged ad accounts under a single managed structure with shared negative keyword lists, cross-location audience learnings, and unified creative testing." },
      ],
      results_narrative:
        "Within 6 months, the DSO had eliminated redundant spend, unified its reporting, and scaled to 89 net new patients per month across all locations — with a clear attribution model showing exactly which locations and which channels were driving growth.",
      timeline_items: [
        { month: "Month 1", milestone: "Infrastructure audit complete, dashboard live", metric: "—" },
        { month: "Month 2", milestone: "Ad accounts consolidated, waste eliminated", metric: "-$4.2K/mo saved" },
        { month: "Month 3", milestone: "Location SEO strategies deployed", metric: "Rankings moving" },
        { month: "Month 4", milestone: "First ROAS measurement — all locations", metric: "1.9x ROAS" },
        { month: "Month 6", milestone: "Full scale achieved", metric: "2.8x ROAS, +89 patients/mo" },
      ],
      image_src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      image_alt: "Dental team reviewing multi-location dashboard",
    },
    services_used: ["Multi-Location SEO", "Google Ads Management", "Analytics & Reporting", "Google Business Profile", "Brand Consistency"],
    results_summary:
      "By unifying six disconnected marketing operations under a single strategic framework, the DSO eliminated wasted spend, gained full attribution visibility, and scaled patient acquisition to 89 new patients per month.",
    key_results: [
      { metric: "2.8x", label: "Return on ad spend", context: "Across all 6 locations" },
      { metric: "+89", label: "New patients per month", context: "Net new vs. pre-engagement baseline" },
      { metric: "61%", label: "Lower cost-per-lead", context: "After ad account consolidation" },
      { metric: "$4.2K", label: "Monthly waste eliminated", context: "Identified in Month 1 audit" },
    ],
    quote: {
      text: "We finally know where every dollar goes and what it produces. That visibility alone changed how we make decisions.",
      attribution: "Practice Group Director",
      role: "6-Location DSO, Texas",
    },
    geo_visibility: { present: false, platforms: [], description: "" },
    faqs: [
      { q: "Can Vigorant manage marketing across multiple practice locations?", a: "Yes. Multi-location dental groups and DSOs are a core part of our practice portfolio. We build unified reporting, consolidated ad management, and location-specific SEO strategies under one coordinated framework." },
      { q: "What does 'wasted ad spend' mean in practice?", a: "Wasted spend refers to advertising budget allocated to keywords, audiences, or placements that generate clicks but no qualified patient leads. Common sources include overly broad match types, duplicate keywords across campaigns, and campaigns without negative keyword lists." },
      { q: "How does Vigorant handle branding consistency across multiple locations?", a: "We build brand standards that apply consistently across all locations — ad creative, website copy, Google Business Profiles, and review response templates — while still allowing location-specific messaging." },
    ],
    related: ["dental-implant-specialist-california", "sports-chiropractic-florida"],
  },
  {
    slug: "sports-chiropractic-florida",
    specialty: "chiropractic",
    template: "deep-dive",
    tag: "AI Visibility + Local SEO",
    initial: "SC",
    published: "2026-03-15",
    meta: {
      title: "Sports Chiropractic Practice Ranks #1 and Appears in AI Overviews in 45 Days | Vigorant Case Study",
      description:
        "How a Florida sports chiropractic practice achieved #1 local ranking in 45 days and secured placement in Google AI Overviews through structured AIO content and local SEO.",
    },
    practice: {
      type: "Sports Chiropractic Practice",
      location: "Florida",
      size: "Solo practitioner, 1 location",
      anonymised: true,
    },
    hero: {
      headline: "#1 Local Ranking in 45 Days — And Featured in AI Overviews",
      subheadline:
        "A Florida sports chiropractic practice had strong patient outcomes and zero digital visibility. Vigorant built an AIO-optimised content and local SEO strategy from the ground up.",
      primary_metric: { value: "#1", label: "Local ranking for sports chiropractic keywords — 45 days" },
      hero_image_src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1400&q=80",
      hero_image_alt: "Chiropractic treatment room",
    },
    stats: [
      { value: "#1", label: "Local search ranking", source: "Achieved in 45 days" },
      { value: "+44%", label: "Organic phone calls", source: "vs. pre-engagement baseline" },
      { value: "3", label: "AI Overview appearances", source: "ChatGPT, Gemini, Perplexity" },
      { value: "4.9★", label: "Average review rating", source: "Post-engagement Google Maps" },
    ],
    deep_dive: {
      problem_statement: "Invisible in Search. Invisible in AI. Zero Digital Presence.",
      problem_context:
        "The practice had 4 years of strong patient outcomes in sports injury rehabilitation but ranked on page 5 for its primary service terms and had no structured content, no Schema.org markup, and no presence in AI-generated search answers.",
      methodology_heading: "How We Built Visibility From Zero — In 45 Days",
      methodology_steps: [
        { step: "01", title: "Competitive & Keyword Analysis", body: "Mapped all local competitors across organic and Google Maps. Identified 3 high-opportunity keyword clusters with strong intent and manageable competition.", chips: ["Local competitor gap analysis", "Intent-based keyword mapping", "Featured snippet opportunity scan"] },
        { step: "02", title: "Google Business Profile Optimisation", body: "Rebuilt the Google Business Profile from scratch — accurate category selection, full service list, weekly photo uploads, Q&A content seeding, and a structured review acquisition plan.", chips: ["Category optimisation", "Photo strategy", "Q&A seeding", "Review velocity system"] },
        { step: "03", title: "Schema.org Markup Implementation", body: "Deployed Chiropractor, MedicalBusiness, LocalBusiness, and FAQPage schema across all key pages. Added HealthcareProfessional entity markup to build E-E-A-T signals.", chips: ["Chiropractor schema", "FAQPage schema", "HealthcareProfessional entity", "BreadcrumbList"] },
        { step: "04", title: "AIO Content Strategy", body: "Built a structured content layer specifically designed to appear in AI-generated answers on ChatGPT, Gemini, and Perplexity. Each piece structured around a patient question, written with clinical accuracy, and marked up with FAQPage schema.", chips: ["FAQ-first content", "Institutional citations", "AI-crawlable structure", "E-E-A-T signals"] },
      ],
      insight_quote: "The practices that appear in AI-generated answers in 2026 are not the biggest — they are the most structurally authoritative.",
      insight_attribution: "Vigorant AIO Strategy Team",
      results_data_table: [
        { metric: "Local Search Ranking", before: "Page 5", after: "#1 Local Pack", change: "+40 positions" },
        { metric: "Organic Phone Calls", before: "Baseline", after: "+44%", change: "+44%" },
        { metric: "Google Business Views", before: "Baseline", after: "+180%", change: "+180%" },
        { metric: "Average Review Rating", before: "4.3★", after: "4.9★", change: "+0.6 stars" },
        { metric: "AI Overview Appearances", before: "0", after: "3 platforms", change: "New channel" },
        { metric: "Schema.org Coverage", before: "None", after: "5 entity types", change: "Full implementation" },
      ],
      image_src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
      image_alt: "Chiropractic practitioner performing sports injury treatment",
    },
    services_used: ["Local SEO", "Google Business Profile", "Schema.org Markup", "AIO Content Strategy", "Reputation Management"],
    results_summary:
      "In 45 days, a practice with zero digital infrastructure went from page 5 to the #1 local pack position, saw a 44% increase in organic phone calls, and achieved placement in AI-generated answers across three major AI platforms.",
    key_results: [
      { metric: "#1", label: "Local pack ranking", context: "From page 5 in 45 days" },
      { metric: "+44%", label: "Organic phone calls", context: "vs. pre-engagement baseline" },
      { metric: "+180%", label: "Google Business views", context: "Post GBP optimisation" },
      { metric: "3", label: "AI platform appearances", context: "ChatGPT, Gemini, Perplexity" },
    ],
    quote: {
      text: "Patients are now finding us on ChatGPT. I did not expect that to be a real thing in my city this quickly.",
      attribution: "Practice Owner",
      role: "Sports Chiropractic, Florida",
    },
    geo_visibility: {
      present: true,
      platforms: ["ChatGPT", "Google Gemini", "Perplexity"],
      description:
        "This practice's FAQ content and structured service pages now appear as cited sources in AI-generated answers when patients in their local market ask about sports injury chiropractic care.",
    },
    faqs: [
      { q: "What is AIO (AI Overview Optimisation) for chiropractic practices?", a: "AIO is the practice of structuring your website content to be cited by AI search engines like ChatGPT, Google Gemini, and Perplexity. It requires FAQ-format content, Schema.org markup, named clinical authors, and institutional citations." },
      { q: "How did the practice achieve #1 ranking in 45 days?", a: "The practice had zero existing competition for its specific keyword cluster combination, a clean domain with no technical issues, and a Google Business Profile that had never been properly optimised. Timeline results vary significantly by market." },
      { q: "Is it possible for every chiropractic practice to appear in AI Overviews?", a: "AI search visibility depends on content authority, Schema.org markup quality, E-E-A-T signals, and ongoing content production. There are no guaranteed outcomes." },
    ],
    related: ["dental-implant-specialist-california", "6-location-dso-texas"],
  },
];

export function findCaseStudy(slug?: string, specialty?: string) {
  if (!slug) return undefined;
  if (specialty) return caseStudies.find((c) => c.slug === slug && c.specialty === specialty);
  return caseStudies.find((c) => c.slug === slug);
}
