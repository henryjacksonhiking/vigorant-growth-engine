export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: string;
  date: string; // ISO
  readMinutes: number;
  featured?: boolean;
};

export const BLOG_CATEGORIES = [
  "All",
  "AI Search",
  "SEO",
  "Paid Ads",
  "Website & CRO",
  "Reputation",
  "Patient Acquisition",
  "Analytics",
  "Branding",
] as const;

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ai-website-design-pros-cons",
    title: "Design a New Website By AI: Advantages, Disadvantages & What Healthcare Practices Need to Know",
    excerpt: "AI website builders promise speed and savings. For dental, medical, and chiropractic practices, the real story is more complicated — and the stakes are much higher.",
    category: "Website & CRO",
    tags: ["AI", "Website Design", "Healthcare"],
    author: "Vigorant Healthcare Marketing Team",
    date: "2026-06-15",
    readMinutes: 10,
    featured: true,
  },
  {
    slug: "ai-search-playbook",
    title: "The Healthcare Practice AI Search Playbook",
    excerpt: "How dental, medical, and chiropractic practices win inside ChatGPT, Perplexity, and Google AI Overviews.",
    category: "AI Search",
    tags: ["AEO", "GEO", "AI Overviews"],
    author: "Vigorant Strategy Team",
    date: "2026-05-28",
    readMinutes: 14,
    featured: true,
  },
  {
    slug: "benchmark-2026",
    title: "The 2026 Patient Acquisition Benchmark Report",
    excerpt: "Conversion rates, paid ROAS, SEO timelines, and AI visibility benchmarks across 1,000+ practices.",
    category: "Analytics",
    tags: ["Benchmarks", "ROI"],
    author: "Vigorant Research",
    date: "2026-05-12",
    readMinutes: 18,
    featured: true,
  },
  {
    slug: "growth-engine",
    title: "From Tactics to Engine: Building a Real Growth System",
    excerpt: "Why disconnected marketing fails healthcare practices — and the four layers of a real growth engine.",
    category: "Patient Acquisition",
    tags: ["Strategy", "System"],
    author: "Hamid Baher",
    date: "2026-04-30",
    readMinutes: 9,
  },
  {
    slug: "reviews-drive-ai-citations",
    title: "Why patient reviews now drive 41% of AI search citations",
    excerpt: "Reviews are no longer just trust signals — they are training data for the AI engines patients ask first.",
    category: "Reputation",
    tags: ["Reviews", "AI Search"],
    author: "Vigorant Reputation Team",
    date: "2026-04-18",
    readMinutes: 7,
  },
  {
    slug: "google-ads-conversion-tracking",
    title: "Conversion-tracking setup for healthcare Google Ads",
    excerpt: "Stop optimizing on clicks. Here is the exact conversion architecture we deploy for every practice.",
    category: "Paid Ads",
    tags: ["Google Ads", "Tracking"],
    author: "Vigorant Performance",
    date: "2026-04-04",
    readMinutes: 8,
  },
  {
    slug: "local-seo-multi-location-dental",
    title: "Local SEO checklist for multi-location dental groups",
    excerpt: "The structural SEO architecture that lets a DSO rank in every market without cannibalizing itself.",
    category: "SEO",
    tags: ["Local SEO", "Dental"],
    author: "Vigorant SEO Team",
    date: "2026-03-22",
    readMinutes: 11,
  },
  {
    slug: "helpful-content-medical",
    title: "What 'helpful content' really means for medical practices",
    excerpt: "Google's YMYL bar is higher than ever. Here is what actually passes — and what gets quietly suppressed.",
    category: "SEO",
    tags: ["E-E-A-T", "YMYL"],
    author: "Vigorant Editorial",
    date: "2026-03-08",
    readMinutes: 9,
  },
  {
    slug: "schema-for-ai",
    title: "Schema markup for AI: the structured data foundation answer engines require",
    excerpt: "The minimum Schema.org graph every healthcare site needs to be eligible for AI-generated answers.",
    category: "AI Search",
    tags: ["Schema", "Technical SEO"],
    author: "Vigorant AI Practice",
    date: "2026-02-24",
    readMinutes: 10,
  },
  {
    slug: "cro-experiments-clinics",
    title: "20 high-leverage CRO experiments for healthcare clinics",
    excerpt: "Conversion lifts we have repeatedly measured across dental, medical, and chiropractic websites.",
    category: "Website & CRO",
    tags: ["CRO", "Experiments"],
    author: "Vigorant Web & CRO",
    date: "2026-02-10",
    readMinutes: 12,
  },
  {
    slug: "rebrand-without-losing-seo",
    title: "How to rebrand a healthcare practice without losing SEO equity",
    excerpt: "Domain changes, name changes, and visual rebrands — done correctly, you keep every ranking.",
    category: "Branding",
    tags: ["Rebrand", "Migration"],
    author: "Vigorant Strategy Team",
    date: "2026-01-28",
    readMinutes: 8,
  },
  {
    slug: "gbp-walkthrough-chiropractors",
    title: "Google Business Profile optimization walkthrough for chiropractors",
    excerpt: "The exact GBP setup we ship for chiropractic practices targeting local pain and wellness searches.",
    category: "SEO",
    tags: ["GBP", "Local"],
    author: "Vigorant Local SEO",
    date: "2026-01-14",
    readMinutes: 7,
  },
];
