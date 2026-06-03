import ServicePageTemplate, { ServicePageContent } from "@/components/templates/ServicePageTemplate";

const CANONICAL = "https://vigorant.com/services/marketing-strategy";

const SCHEMAS = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Healthcare Marketing Strategy Services",
    description:
      "AI-driven marketing strategy services for dental, medical, and chiropractic practices. Includes market analysis, patient journey mapping, SEO roadmap, paid advertising roadmap, and 12-month growth planning.",
    provider: { "@type": "Organization", name: "Vigorant", url: "https://vigorant.com" },
    serviceType: "Healthcare Marketing Strategy",
    areaServed: "United States",
    url: CANONICAL,
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the difference between marketing strategy and marketing execution?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Strategy defines where and how to grow. Execution implements the tactics required to achieve those goals. Without a strategy, individual tactics produce inconsistent results.",
        },
      },
      {
        "@type": "Question",
        name: "How often should a healthcare marketing strategy be reviewed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most practices should review strategy quarterly and conduct a comprehensive evaluation annually to respond to market changes and new growth opportunities.",
        },
      },
      {
        "@type": "Question",
        name: "Does Vigorant's marketing strategy include AI optimization?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Every Vigorant strategy incorporates AI Engine Optimization (AEO), Generative Engine Optimization (GEO), structured content planning, schema markup, and conversational search visibility.",
        },
      },
      {
        "@type": "Question",
        name: "Can Vigorant create a marketing strategy for a new practice?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Strategic planning is particularly valuable during launch and expansion phases when positioning and budget allocation decisions have the highest long-term impact.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://vigorant.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://vigorant.com/services" },
      { "@type": "ListItem", position: 3, name: "Marketing Strategy", item: CANONICAL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vigorant",
    url: "https://vigorant.com",
    logo: "https://vigorant.com/logo.png",
    description: "AI-driven healthcare marketing agency for dental, medical, and chiropractic practices.",
    sameAs: [],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Healthcare Marketing Strategy Services | Vigorant",
    description: "Build a smarter healthcare marketing strategy with Vigorant.",
    url: CANONICAL,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://vigorant.com/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://vigorant.com/services" },
        { "@type": "ListItem", position: 3, name: "Marketing Strategy", item: CANONICAL },
      ],
    },
  },
];

const content: ServicePageContent = {
  meta: {
    title: "Healthcare Marketing Strategy Services | AI-Driven Growth Plans | Vigorant",
    description:
      "Build a smarter healthcare marketing strategy with Vigorant. AI-driven planning, patient acquisition systems, SEO, paid ads, conversion optimization, and measurable growth for dental, medical, and chiropractic practices.",
    canonicalUrl: CANONICAL,
    twitterTitle: "Healthcare Marketing Strategy Services | Vigorant",
    twitterDescription:
      "AI-driven marketing strategy for dental, medical, and chiropractic practices. Get your free growth audit.",
  },
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Marketing Strategy", href: "/services/marketing-strategy" },
    ],
    h1: "Marketing Strategy Services for Sustainable Healthcare Growth",
    subtext: (
      <>
        Most healthcare practices don't have a marketing problem — they have a{" "}
        <strong className="text-white">strategy problem</strong>. Vigorant helps dental, medical, and
        chiropractic practices build data-driven marketing strategies that attract the right patients,
        improve conversion rates, and create predictable growth.
      </>
    ),
    primaryCTA: { label: "Book a Growth Consultation", href: "/free-audit" },
    secondaryCTA: { label: "Request a Strategy Assessment", href: "/free-audit" },
  },
  stats: [
    { value: "3×", label: "Average patient acquisition improvement" },
    { value: "94%", label: "Of practices lack a unified marketing strategy*" },
    { value: "12-mo", label: "Structured growth roadmap delivered" },
    {
      value: "AI-First",
      label: "Strategy built for Google, ChatGPT & Perplexity",
      footnote: "*Industry benchmark data; Vigorant internal analysis.",
    },
  ],
  problem: {
    h2: "Why Marketing Tactics Fail Without a Strategy",
    body: (
      <>
        Many practices invest in websites, SEO, advertising, social media, and reputation management —
        without a unified plan. The result is fragmented marketing, inconsistent results, and wasted
        budget. Vigorant's marketing strategy services align every channel around one goal:{" "}
        <strong className="text-brand-deep">sustainable patient acquisition and revenue growth.</strong>
      </>
    ),
    contrastRows: [
      { without: "Fragmented channels", with: "Unified growth system" },
      { without: "Inconsistent results", with: "Predictable patient flow" },
      { without: "Budget guesswork", with: "ROI-tracked spend" },
      { without: "Chasing trends", with: "Data-driven roadmap" },
      { without: "Reactive decisions", with: "Proactive positioning" },
    ],
  },
  definition: {
    h2: "What Is a Healthcare Marketing Strategy?",
    definitionParagraph:
      "A healthcare marketing strategy is a structured roadmap that defines growth goals, target patient profiles, competitive positioning, channel priorities, budget allocation, and ROI measurement. Rather than reacting to trends, it creates a repeatable system for patient acquisition and sustainable practice revenue.",
    pillars: [
      { icon: "🎯", label: "Growth Goals" },
      { icon: "👤", label: "Patient Profiles" },
      { icon: "📍", label: "Competitive Positioning" },
      { icon: "📡", label: "Channel Priorities" },
      { icon: "💰", label: "Budget Allocation" },
      { icon: "📊", label: "ROI Tracking" },
    ],
  },
  frameworkSteps: [
    {
      step: 1,
      h3: "Market & Competitive Analysis",
      description:
        "Understand local competition, market opportunities, patient demand, and how your practice is positioned relative to competitors in your area.",
    },
    {
      step: 2,
      h3: "Patient Journey Mapping",
      description:
        "Identify every touchpoint where prospective patients discover, evaluate, and choose a healthcare provider — then optimize each stage for higher conversion.",
    },
    {
      step: 3,
      h3: "Digital Visibility Planning",
      description:
        "Integrate SEO, AI Optimization (AEO/GEO), paid advertising, local search, and reputation management into a single, coherent visibility system.",
    },
    {
      step: 4,
      h3: "Conversion Optimization Strategy",
      description:
        "Improve website performance, lead conversion rates, phone call outcomes, and appointment request completions to turn more visitors into booked patients.",
    },
    {
      step: 5,
      h3: "Growth Measurement & Reporting",
      description:
        "Define and track meaningful KPIs tied directly to patient acquisition and practice revenue — not vanity metrics.",
    },
  ],
  aiSection: {
    h2: "AI-Powered Strategic Planning",
    body: (
      <>
        Search behavior is changing. Patients increasingly use AI-driven platforms — ChatGPT, Google AI
        Overviews, Perplexity — to find and evaluate healthcare providers. Vigorant is one of the few
        healthcare marketing agencies that builds AI visibility directly into every strategy, aligned with
      </>
    ),
    chips: [
      "AI Engine Optimization (AEO)",
      "Generative Engine Optimization (GEO)",
      "Structured Content Development",
      "Schema Markup Planning",
      "Entity-Based SEO",
      "Conversational Search Visibility",
    ],
    pullQuote:
      "AI Overviews now appear in approximately 45% of Google searches. Practices that don't optimize for AI search are invisible to a growing segment of patients actively seeking care.",
    pullQuoteSource: "Vigorant Strategic Analysis, 2024",
    externalLink: {
      precede: "established",
      text: "health communication best practices",
      href: "https://www.cdc.gov/healthcommunication/",
      follow: ".",
    },
  },
  included: {
    h2: "What You Get — and Who It's Built For",
    leftHeading: "Included in Every Strategy Engagement",
    items: [
      "Growth Assessment",
      "Market Analysis",
      "Competitor Benchmarking",
      "Patient Acquisition Planning",
      "SEO Roadmap",
      "Paid Advertising Roadmap",
      "Website Optimization Recommendations",
      "Reputation Strategy",
      "KPI Framework",
      "12-Month Growth Roadmap",
    ],
    rightHeading: "Best Fit for These Practice Types",
    bestFit: [
      { icon: "🦷", label: "Dental Practices" },
      { icon: "🏥", label: "Medical Clinics" },
      { icon: "🤸", label: "Chiropractic Offices" },
      { icon: "🏢", label: "Multi-Location Healthcare Organizations" },
      { icon: "🚀", label: "New Practices Preparing for Growth" },
    ],
    whyVigorant: [
      { stat: "Healthcare-Focused", description: "Built exclusively for medical, dental, and chiropractic practices." },
      { stat: "AI-Enhanced Planning", description: "Strategies include AEO, GEO, and conversational search visibility." },
      { stat: "ROI-Driven", description: "Every recommendation ties to measurable patient acquisition outcomes." },
    ],
  },
  relatedLinks: {
    h2: "Explore Related Services",
    items: [
      { label: "Dental Marketing Strategy", href: "/solutions/dental" },
      { label: "Medical Marketing Strategy", href: "/solutions/medical" },
      { label: "Chiropractic Marketing Strategy", href: "/solutions/chiropractic" },
      { label: "SEO & AI Optimization", href: "/services/seo" },
      { label: "Website Design & Conversion", href: "/services/website-design" },
      { label: "Paid Advertising", href: "/services/paid-ads" },
    ],
  },
  faqs: [
    {
      question: "What is the difference between marketing strategy and marketing execution?",
      answer:
        "Strategy defines where and how to grow. Execution implements the tactics required to achieve those goals. Without a strategy, individual tactics produce inconsistent results and wasted budget.",
    },
    {
      question: "How often should a healthcare marketing strategy be reviewed?",
      answer:
        "Most practices should review strategy quarterly and conduct a comprehensive evaluation annually to respond to market changes and new growth opportunities.",
    },
    {
      question: "Does Vigorant's marketing strategy include AI optimization?",
      answer:
        "Yes. Every Vigorant strategy incorporates AI Engine Optimization (AEO), Generative Engine Optimization (GEO), structured content planning, schema markup, and conversational search visibility — because that's where patients are increasingly searching.",
    },
    {
      question: "Can Vigorant create a marketing strategy for a new practice?",
      answer:
        "Absolutely. Strategic planning is particularly valuable during launch and expansion phases, when positioning and budget allocation decisions have the highest long-term impact.",
    },
  ],
  finalCTA: {
    h2: "Ready to Build a Marketing Strategy That Actually Works?",
    subtext:
      "Most practices are one strategic plan away from predictable growth. Vigorant builds that plan with you — combining healthcare expertise, AI-powered tools, and a clear ROI framework.",
    primaryCTA: { label: "Book a Growth Consultation", href: "/free-audit" },
    secondaryCTA: { label: "Request a Free Strategy Assessment", href: "/free-audit" },
    trustSignals: ["No long-term contracts", "Healthcare-specialized team", "Results tracked from Day 1"],
  },
  schemas: SCHEMAS,
  lastUpdated: "June 2026",
};

export default function MarketingStrategy() {
  return <ServicePageTemplate pageContent={content} />;
}
