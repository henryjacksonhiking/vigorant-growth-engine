export interface CaseStudy {
  slug: string;
  client: string;
  tag: string;
  location: string;
  challenge: string;
  solution: string;
  results: string[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "dental-implant-specialist-california",
    client: "Dental Implant Specialist — California",
    tag: "Dental SEO + Paid Ads",
    location: "California",
    challenge:
      "The practice was spending $8,000/month on Google Ads with a $187 cost-per-lead and inconsistent implant case volume. Their landing pages were not built for conversion and they were not ranking for high-intent implant keywords.",
    solution:
      "We rebuilt their campaign structure with tighter ad groups, rewrote landing pages focused on a single conversion goal, added click-to-call and form variants, and launched a local SEO push targeting 'dental implants [city]' keywords with supporting content and citations.",
    results: [
      "Cost-per-lead dropped from $187 → $71",
      "+43% increase in implant consultations",
      "Ranked top 3 for primary implant keyword in 60 days",
    ],
  },
  {
    slug: "6-location-dso-texas",
    client: "6-Location DSO — Texas",
    tag: "Multi-Location SEO + Google Ads",
    location: "Texas",
    challenge:
      "The group had no centralized marketing strategy. Each location ran independently with no shared analytics or brand consistency, making it impossible to see which locations were profitable.",
    solution:
      "We implemented a unified reporting dashboard, consolidated ad accounts under a managed structure, and deployed a location-specific local SEO strategy for all 6 offices with shared brand templates and per-location landing pages.",
    results: [
      "2.8x ROAS across all locations",
      "+89 new patients per month across the group",
      "61% reduction in average cost-per-lead",
    ],
  },
  {
    slug: "sports-chiropractic-florida",
    client: "Sports Chiropractic Practice — Florida",
    tag: "AI Visibility + Local SEO",
    location: "Florida",
    challenge:
      "The practice relied entirely on word-of-mouth. They had zero Google Maps presence, no review strategy, and were invisible in local search.",
    solution:
      "We built out their Google Business Profile end-to-end, launched an AIO content strategy targeting question-style queries, and optimized their website for local intent keywords with structured data and review surfacing.",
    results: [
      "Ranked #1 for primary chiropractic keyword in 45 days",
      "+44% increase in organic phone calls",
      "Now appearing in Google AI Overviews for key queries",
    ],
  },
];
