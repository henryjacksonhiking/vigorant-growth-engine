export type ServicePageTemplate = "editorial" | "conversion" | "process" | "authority" | "industry";

export type ServiceLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type FrameworkStep = {
  label: string;
  title: string;
  description: string;
  bullets?: string[];
  output?: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type ServicePageData = {
  slug: string;
  template: ServicePageTemplate;
  route: string;
  canonicalUrl: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  schemaTypes: string[];
  schemaDescription?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  lastUpdated?: string;
  serviceName: string;
  serviceType: string;
  eyebrow: string;
  h1: string;
  heroKicker: string;
  heroBody: string[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  whyTitle: string;
  whyIntro: string[];
  whyPoints: string[];
  definitionTitle?: string;
  definitionIntro?: string[];
  definitionPoints?: string[];
  frameworkTitle: string;
  frameworkSteps: FrameworkStep[];
  aiTitle: string;
  aiIntro: string[];
  aiPoints: string[];
  includedTitle: string;
  includedItems: string[];
  benefitsTitle?: string;
  benefits?: string[];
  audienceTitle: string;
  audiences: string[];
  relatedTitle: string;
  relatedLinks: ServiceLink[];
  chooseTitle: string;
  choosePoints: string[];
  faqs: FAQ[];
  externalAuthority: ServiceLink;
  videoObject?: {
    name: string;
    description: string;
    thumbnailUrl: string;
    uploadDate: string;
  };
};

const siteUrl = "https://vigorant.com";

export const servicePages: Record<string, ServicePageData> = {
  brandingRebranding: {
    slug: "branding-rebranding",
    template: "editorial",
    route: "/services/branding-rebranding",
    canonicalUrl: `${siteUrl}/services/branding-rebranding`,
    metaTitle: "Healthcare Branding & Rebranding Services | Build a Practice Patients Remember | Vigorant",
    metaDescription: "Transform how patients perceive your practice with healthcare branding and rebranding services. Build trust, differentiate from competitors, and create a stronger patient acquisition engine with Vigorant.",
    keywords: "healthcare branding, healthcare rebranding, medical branding agency, dental branding services, chiropractic branding, healthcare brand strategy, practice rebranding, healthcare marketing agency",
    schemaTypes: ["Service", "FAQPage", "BreadcrumbList", "Organization", "WebPage"],
    lastUpdated: "June 3, 2026",
    serviceName: "Healthcare Branding & Rebranding Services",
    serviceType: "Healthcare Branding and Rebranding",
    eyebrow: "Branding & Rebranding",
    h1: "Healthcare Branding & Rebranding Services",
    heroKicker: "Build a Brand Patients Trust, Remember, and Choose.",
    heroBody: [
      "Your brand is more than a logo. It is the perception patients form before they call, book, or visit your practice.",
      "Vigorant helps dental, medical, and chiropractic practices develop powerful brands that strengthen credibility, improve patient acquisition, and support long-term growth."
    ],
    primaryCta: { label: "Book a Brand Strategy Consultation", href: "/free-audit" },
    secondaryCta: { label: "Request a Brand Assessment", href: "/contact" },
    whyTitle: "Why Branding Matters More Than Ever",
    whyIntro: [
      "Patients often compare multiple providers before making a decision.",
      "When services, pricing, and locations appear similar, branding becomes the deciding factor."
    ],
    whyPoints: [
      "Increase patient trust",
      "Improve conversion rates",
      "Differentiate from competitors",
      "Support premium positioning",
      "Strengthen online reputation",
      "Improve marketing performance across all channels"
    ],
    definitionTitle: "What Is Healthcare Branding?",
    definitionIntro: [
      "Healthcare branding is the strategic process of defining how your practice is perceived by prospective and existing patients.",
      "A successful healthcare brand creates trust before the first appointment."
    ],
    definitionPoints: [
      "Brand positioning",
      "Brand messaging",
      "Visual identity",
      "Patient experience alignment",
      "Online reputation",
      "Website presentation",
      "Communication consistency"
    ],
    frameworkTitle: "Our Branding & Rebranding Framework",
    frameworkSteps: [
      { label: "Discovery", title: "Brand Discovery & Research", description: "Market analysis, competitive benchmarking, patient perception review, and positioning assessment.", bullets: ["Market and competitor review", "Patient perception scan", "Current brand gap analysis"], output: "A clear view of how your brand is currently perceived." },
      { label: "Position", title: "Brand Positioning Strategy", description: "Define your unique value proposition and market differentiation.", bullets: ["Value proposition", "Market differentiation", "Positioning narrative"], output: "A defensible brand position that separates the practice from similar providers." },
      { label: "Message", title: "Messaging Development", description: "Develop clear messaging that resonates with your ideal patients.", bullets: ["Brand voice", "Service messaging", "Patient-focused value statements"], output: "Messaging that improves clarity and conversion across channels." },
      { label: "Identity", title: "Visual Identity Enhancement", description: "Brand colors, typography, design systems, imagery, and visual consistency recommendations.", bullets: ["Color and type direction", "Imagery style", "Design-system consistency"], output: "A consistent visual system for website, social, ads, and communications." },
      { label: "Align", title: "Website & Digital Experience Alignment", description: "Ensure your website, SEO, advertising, and patient communications reinforce your brand.", bullets: ["Website alignment", "SEO and campaign consistency", "Patient communication review"], output: "A digital experience that reinforces trust at every touchpoint." },
      { label: "Rollout", title: "Brand Launch & Rollout Strategy", description: "Create a practical implementation roadmap.", bullets: ["Rollout priorities", "Asset sequencing", "Launch governance"], output: "A practical path to implement the brand without disrupting operations." }
    ],
    aiTitle: "Branding in the Age of AI Search",
    aiIntro: ["Modern branding extends beyond traditional marketing.", "AI-driven search platforms increasingly evaluate authority, trustworthiness, consistency, reputation signals, entity recognition, and patient reviews."],
    aiPoints: ["Authority", "Trustworthiness", "Consistency", "Reputation signals", "Entity recognition", "Patient reviews"],
    includedTitle: "What Is Included in Our Branding Services?",
    includedItems: ["Brand audit", "Competitive analysis", "Positioning strategy", "Messaging framework", "Brand voice guidelines", "Visual identity recommendations", "Website alignment recommendations", "Reputation review", "Growth-oriented brand roadmap"],
    benefitsTitle: "Branding vs Rebranding",
    benefits: ["Branding creates a new identity and market position.", "Rebranding modernizes or repositions an existing practice to support growth, differentiation, or strategic change."],
    audienceTitle: "Industries We Serve",
    audiences: ["Dental Practices", "Medical Clinics", "Chiropractic Offices", "Multi-location Healthcare Groups"],
    relatedTitle: "Related Pages",
    relatedLinks: [
      { label: "Marketing Strategy", href: "/services/marketing-strategy" },
      { label: "Website Design & Conversion", href: "/services/website-design" },
      { label: "SEO & AI Optimization", href: "/services/seo-ai-optimization" },
      { label: "Dental Branding & Rebranding", href: "/solutions/dental-marketing/dental-branding-rebranding" },
      { label: "Medical Branding & Rebranding", href: "/solutions/medical-marketing/medical-branding-rebranding" },
      { label: "Chiropractic Branding & Rebranding", href: "/solutions/chiropractic-marketing/chiropractic-branding-rebranding" }
    ],
    chooseTitle: "Why Healthcare Practices Choose Vigorant",
    choosePoints: ["Healthcare-focused expertise", "Strategic positioning approach", "AI-aware brand development", "Conversion-focused methodology", "Growth-oriented execution"],
    faqs: [
      { question: "What is healthcare branding?", answer: "Healthcare branding is the strategic process of shaping how patients perceive and experience your practice." },
      { question: "How long does a rebranding project take?", answer: "Most projects range from several weeks to several months depending on complexity." },
      { question: "Can branding improve patient acquisition?", answer: "Yes. Strong brands build trust, improve conversion rates, and increase marketing effectiveness." },
      { question: "Does branding affect SEO and AI visibility?", answer: "Yes. Consistent branding strengthens authority, trust signals, and entity recognition." }
    ],
    externalAuthority: { label: "National Institutes of Health (NIH) Health Communication Resources", href: "https://www.nih.gov", external: true }
  },

  socialMediaMarketing: {
    slug: "social-media-marketing",
    template: "conversion",
    route: "/services/social-media-marketing",
    canonicalUrl: `${siteUrl}/services/social-media-marketing`,
    metaTitle: "Healthcare Social Media Marketing Services | Grow Trust & Patient Engagement | Vigorant",
    metaDescription: "Healthcare social media marketing for dental, medical, and chiropractic practices. Build trust, increase patient engagement, strengthen reputation, and support patient acquisition with Vigorant.",
    keywords: "healthcare social media marketing, dental social media marketing, medical social media marketing, chiropractic social media marketing, social media management for healthcare, healthcare content marketing, healthcare reputation management",
    schemaTypes: ["Service", "FAQPage", "BreadcrumbList", "Organization", "WebPage"],
    lastUpdated: "June 3, 2026",
    serviceName: "Healthcare Social Media Marketing Services",
    serviceType: "Social Media Marketing for Healthcare",
    eyebrow: "Social Media Marketing",
    h1: "Social Media Marketing for Healthcare Practices",
    heroKicker: "Build Trust. Stay Visible. Turn Attention into Patients.",
    heroBody: [
      "Social media is no longer just a branding channel. For modern healthcare practices, it plays a critical role in building trust, strengthening reputation, increasing visibility, and influencing patient decisions long before the first appointment.",
      "Vigorant helps dental, medical, and chiropractic practices create strategic social media programs designed to support patient acquisition and long-term growth."
    ],
    primaryCta: { label: "Book a Social Media Strategy Consultation", href: "/free-audit" },
    secondaryCta: { label: "Request a Social Media Audit", href: "/contact" },
    whyTitle: "Why Social Media Matters for Healthcare Practices",
    whyIntro: ["Patients increasingly research healthcare providers online before making decisions.", "An inactive or inconsistent social presence can weaken confidence, while a strategic presence reinforces authority and trust."],
    whyPoints: ["Trust and credibility", "Perceived expertise", "Brand recognition", "Patient engagement", "Online reputation", "Conversion rates"],
    definitionTitle: "Social Media Is More Than Posting Content",
    definitionIntro: ["Many practices treat social media as a posting activity.", "We treat it as a growth strategy. Every post should contribute to a larger patient acquisition strategy."],
    definitionPoints: ["Strengthen your brand", "Support SEO and AI visibility", "Build patient trust", "Reinforce reputation", "Increase engagement", "Support conversion goals"],
    frameworkTitle: "Our Social Media Marketing Framework",
    frameworkSteps: [
      { label: "01", title: "Social Media Strategy Development", description: "Define goals, audience segments, content pillars, messaging themes, and growth objectives.", bullets: ["Audience segments", "Content pillars", "Growth objectives"], output: "Strategy before publishing." },
      { label: "02", title: "Content Planning & Creation", description: "Develop educational, promotional, trust-building, and engagement-focused content.", bullets: ["Monthly content calendar", "Educational content", "Reputation-support content"], output: "A consistent content system." },
      { label: "03", title: "Brand Consistency", description: "Maintain consistent messaging, tone, visual identity, and positioning across platforms.", bullets: ["Tone alignment", "Visual consistency", "Positioning control"], output: "A recognizable practice presence." },
      { label: "04", title: "Community Engagement", description: "Encourage patient interaction, reviews, shares, comments, and relationship building.", bullets: ["Engagement monitoring", "Community response rhythm", "Reputation reinforcement"], output: "Better trust signals." },
      { label: "05", title: "Performance Monitoring", description: "Track engagement, reach, audience growth, and business impact.", bullets: ["Reach", "Engagement", "Business impact"], output: "Visible ROI from social activity." }
    ],
    aiTitle: "Social Media in the AI Search Era",
    aiIntro: ["Social media increasingly influences AI-powered search visibility.", "A well-managed social presence contributes to overall digital authority and strengthens your online footprint."],
    aiPoints: ["Brand consistency", "Content authority", "Engagement signals", "Reputation indicators", "Entity recognition", "Cross-platform trust signals"],
    includedTitle: "What Is Included in Our Social Media Marketing Services?",
    includedItems: ["Social media audit", "Content strategy", "Monthly content calendar", "Graphic design support", "Educational content creation", "Reputation-support content", "Brand-awareness campaigns", "Engagement monitoring", "Performance reporting"],
    benefitsTitle: "Benefits of Healthcare Social Media Marketing",
    benefits: ["Increase brand awareness", "Improve patient trust", "Support patient acquisition", "Strengthen online reputation", "Enhance local visibility", "Support SEO and AI optimization efforts"],
    audienceTitle: "Who Benefits Most?",
    audiences: ["Dental Practices", "Medical Clinics", "Chiropractic Offices", "Specialty Healthcare Providers", "Multi-location Practices"],
    relatedTitle: "Related Internal Pages",
    relatedLinks: [
      { label: "Reputation & Review Management", href: "/services/reputation-review-management" },
      { label: "Branding & Rebranding", href: "/services/branding-rebranding" },
      { label: "Marketing Strategy", href: "/services/marketing-strategy" },
      { label: "SEO & AI Optimization", href: "/services/seo-ai-optimization" },
      { label: "Dental Social Media Marketing", href: "/solutions/dental-marketing/dental-social-media-marketing" },
      { label: "Medical Social Media Marketing", href: "/solutions/medical-marketing/medical-social-media-marketing" },
      { label: "Chiropractic Social Media Marketing", href: "/solutions/chiropractic-marketing/chiropractic-social-media-marketing" }
    ],
    chooseTitle: "Why Healthcare Practices Choose Vigorant",
    choosePoints: ["Healthcare-focused expertise", "AI-aware marketing strategies", "Conversion-focused execution", "Data-driven decision making", "Consistent brand management"],
    faqs: [
      { question: "Is social media important for healthcare practices?", answer: "Yes. Patients frequently evaluate providers through social media before contacting a practice." },
      { question: "Which social media platform is best?", answer: "It depends on your specialty and target audience. Most healthcare practices benefit from Facebook, Instagram, and Google Business Profile content." },
      { question: "Can social media generate new patients?", answer: "While social media is primarily a trust-building channel, it can support patient acquisition when integrated with broader marketing strategies." },
      { question: "Does social media help SEO and AI visibility?", answer: "Yes. Consistent content, engagement, and brand signals contribute to broader digital authority." }
    ],
    externalAuthority: { label: "CDC Health Communication Resources", href: "https://www.cdc.gov/healthcommunication/", external: true }
  },

  landingPages: {
    slug: "landing-pages",
    template: "process",
    route: "/services/landing-pages",
    canonicalUrl: `${siteUrl}/services/landing-pages`,
    metaTitle: "Healthcare Landing Page Design Services | Convert More Visitors into Patients | Vigorant",
    metaDescription: "High-converting landing pages for dental, medical, and chiropractic practices. Increase patient inquiries, appointment requests, and marketing ROI with conversion-focused landing page design from Vigorant.",
    keywords: "healthcare landing pages, dental landing pages, medical landing pages, chiropractic landing pages, healthcare landing page design, landing page optimization, healthcare conversion optimization, patient acquisition landing pages",
    schemaTypes: ["Service", "FAQPage", "BreadcrumbList", "Organization", "WebPage"],
    lastUpdated: "June 3, 2026",
    serviceName: "Healthcare Landing Page Design Services",
    serviceType: "Landing Page Design and Optimization for Healthcare",
    eyebrow: "Landing Pages",
    h1: "High-Converting Landing Pages for Healthcare Practices",
    heroKicker: "Turn More Clicks into Patients.",
    heroBody: [
      "Driving traffic is only half the battle. If visitors do not take action, your marketing investment is wasted.",
      "Vigorant creates healthcare landing pages designed to convert visitors into appointment requests, phone calls, consultations, and new patients. Every landing page is strategically built to maximize conversion rates and improve marketing ROI."
    ],
    primaryCta: { label: "Request a Landing Page Audit", href: "/free-audit" },
    secondaryCta: { label: "Book a Conversion Strategy Consultation", href: "/contact" },
    whyTitle: "Why Landing Pages Matter",
    whyIntro: ["Most healthcare websites are designed to provide information.", "Landing pages are designed to generate action. Dedicated landing pages improve conversion performance compared to sending campaign traffic to a general website page."],
    whyPoints: ["Google Ads", "Meta Ads", "Local SEO campaigns", "Email marketing", "Social media campaigns"],
    definitionTitle: "What Is a Landing Page?",
    definitionIntro: ["A landing page is a focused marketing page created to achieve a specific conversion goal.", "Unlike traditional website pages, landing pages eliminate distractions and guide visitors toward a single action."],
    definitionPoints: ["Appointment requests", "Consultation bookings", "Treatment inquiries", "New patient offers", "Service-specific campaigns", "Location-specific campaigns"],
    frameworkTitle: "Our Landing Page Optimization Framework",
    frameworkSteps: [
      { label: "Discovery", title: "Audience & Offer Analysis", description: "Identify patient intent, motivations, concerns, and conversion barriers.", output: "A focused conversion brief that defines the page goal, audience, offer, and primary call-to-action." },
      { label: "Build", title: "Conversion-Focused Messaging", description: "Develop compelling headlines, value propositions, and calls-to-action.", output: "A persuasive page narrative designed around appointment requests, consultation bookings, or treatment inquiries." },
      { label: "Launch", title: "Trust & Credibility Building", description: "Integrate testimonials, provider credentials, reviews, certifications, and proof elements.", output: "A page that answers patient doubts before they become abandonment points." },
      { label: "Optimize", title: "User Experience Optimization", description: "Reduce friction and simplify the patient decision-making process.", output: "A cleaner, faster path from click to inquiry." },
      { label: "Measure", title: "Performance Measurement", description: "Track conversions, appointment requests, calls, and campaign effectiveness.", output: "A reporting loop that shows which pages and campaigns are producing patient demand." }
    ],
    aiTitle: "Landing Pages in the AI Search Era",
    aiIntro: ["Search behavior is changing.", "AI-powered search experiences increasingly reward pages that provide clear answers, strong engagement, structured content, relevant intent matching, and trustworthy information."],
    aiPoints: ["Clear answers", "Strong user engagement", "Structured content", "Relevant intent matching", "Trustworthy information"],
    includedTitle: "What Is Included in Our Landing Page Services?",
    includedItems: ["Landing page strategy", "Conversion optimization", "Copywriting", "UX recommendations", "Mobile optimization", "Trust signal implementation", "A/B testing recommendations", "Analytics integration", "Performance reporting"],
    benefitsTitle: "Landing Pages and Patient Acquisition",
    benefits: ["Higher conversion rates", "Better lead quality", "Lower acquisition costs", "Improved advertising ROI", "More appointment requests", "Better campaign performance"],
    audienceTitle: "Who Benefits Most?",
    audiences: ["Dental Practices", "Medical Clinics", "Chiropractic Offices", "Specialty Healthcare Providers", "Multi-location Practices"],
    relatedTitle: "Related Internal Pages",
    relatedLinks: [
      { label: "Website Design & Conversion", href: "/services/website-design" },
      { label: "Paid Advertising", href: "/services/paid-advertising" },
      { label: "Marketing Strategy", href: "/services/marketing-strategy" },
      { label: "SEO & AI Optimization", href: "/services/seo-ai-optimization" },
      { label: "Dental Landing Pages", href: "/solutions/dental-marketing/dental-landing-pages" },
      { label: "Medical Landing Pages", href: "/solutions/medical-marketing/medical-landing-pages" },
      { label: "Chiropractic Landing Pages", href: "/solutions/chiropractic-marketing/chiropractic-landing-pages" }
    ],
    chooseTitle: "Why Healthcare Practices Choose Vigorant",
    choosePoints: ["Healthcare-focused expertise", "Conversion-first methodology", "Data-driven optimization", "AI-aware content strategies", "Patient acquisition focus"],
    faqs: [
      { question: "Why not send traffic directly to my homepage?", answer: "Landing pages are designed around a specific goal and typically convert better than general website pages." },
      { question: "Do landing pages improve Google Ads performance?", answer: "Yes. Better user experience and conversion rates can improve campaign efficiency and ROI." },
      { question: "Can landing pages help SEO?", answer: "When strategically implemented, landing pages can support local SEO, treatment-specific visibility, and conversion optimization." },
      { question: "Do landing pages support AI visibility?", answer: "Yes. Structured content, clear messaging, and strong relevance signals align with modern AI search principles." }
    ],
    externalAuthority: { label: "National Institute of Standards and Technology (NIST) – Usability Resources", href: "https://www.nist.gov/", external: true }
  },

  videoMarketing: {
    slug: "video-marketing",
    template: "authority",
    route: "/services/video-marketing",
    canonicalUrl: `${siteUrl}/services/video-marketing`,
    metaTitle: "Healthcare Video Marketing Services | Attract, Educate & Convert More Patients | Vigorant",
    metaDescription: "Healthcare video marketing for dental, medical, and chiropractic practices. Build trust, educate patients, improve conversions, and strengthen your online visibility with strategic video content from Vigorant.",
    keywords: "healthcare video marketing, dental video marketing, medical video marketing, chiropractic video marketing, healthcare video production, patient education videos, healthcare content marketing, healthcare marketing videos",
    schemaTypes: ["Service", "FAQPage", "BreadcrumbList", "Organization", "WebPage", "VideoObject"],
    lastUpdated: "June 3, 2026",
    serviceName: "Healthcare Video Marketing Services",
    serviceType: "Video Marketing for Healthcare",
    eyebrow: "Video Marketing",
    h1: "Video Marketing Services for Healthcare Practices",
    heroKicker: "Build Trust Before the First Appointment.",
    heroBody: [
      "Patients want to know who you are, how you work, and why they should trust your practice before they ever call or book an appointment.",
      "Vigorant helps dental, medical, and chiropractic practices create high-impact video content designed to attract, engage, and convert prospective patients."
    ],
    primaryCta: { label: "Book a Video Marketing Consultation", href: "/free-audit" },
    secondaryCta: { label: "Request a Video Marketing Audit", href: "/contact" },
    whyTitle: "Why Video Marketing Matters for Healthcare Practices",
    whyIntro: ["Today's patients consume more video content than ever before.", "Video allows patients to connect with your practice long before they visit your office."],
    whyPoints: ["Build trust faster", "Increase patient engagement", "Improve website conversion rates", "Strengthen brand authority", "Educate prospective patients", "Improve social media performance", "Support SEO and AI visibility"],
    definitionTitle: "Video Marketing Is More Than Producing Videos",
    definitionIntro: ["Many healthcare practices create videos without a clear strategy.", "The objective is not simply generating views—it is generating trust and patient demand."],
    definitionPoints: ["Patient acquisition", "Brand awareness", "Reputation building", "Treatment acceptance", "Website conversions", "Patient education"],
    frameworkTitle: "Our Video Marketing Framework",
    frameworkSteps: [
      { label: "Strategy", title: "Video Strategy Development", description: "Identify target audiences, content themes, patient concerns, and business objectives.", output: "A focused plan for what to film, why it matters, and where it will be used." },
      { label: "Planning", title: "Content Planning", description: "Develop a strategic content calendar aligned with practice growth goals.", output: "A production-ready content roadmap." },
      { label: "Production", title: "Video Production Guidance", description: "Support the creation of professional, educational, testimonial, and promotional videos.", output: "Video concepts aligned to trust, education, and conversion." },
      { label: "Distribution", title: "Video Distribution Strategy", description: "Deploy content across websites, YouTube, social media, email campaigns, and local search assets.", output: "A channel plan that turns content into reach and patient demand." },
      { label: "Analysis", title: "Performance Analysis", description: "Measure engagement, watch time, conversions, and business impact.", output: "A reporting model tied to business outcomes, not views only." }
    ],
    aiTitle: "Video Marketing in the AI Search Era",
    aiIntro: ["Video content increasingly influences search visibility and AI-powered discovery experiences.", "Video creates additional opportunities to appear in Google search results, video search, YouTube recommendations, and AI-generated answers and summaries."],
    aiPoints: ["Content authority", "User engagement signals", "Brand consistency", "Educational value", "Expertise indicators"],
    includedTitle: "What Is Included in Our Video Marketing Services?",
    includedItems: ["Video marketing strategy", "Content planning", "Production recommendations", "Script development guidance", "Distribution strategy", "YouTube optimization", "Video SEO optimization", "Social media video planning", "Performance reporting"],
    benefitsTitle: "Benefits of Healthcare Video Marketing",
    benefits: ["Increase patient trust", "Improve conversion rates", "Support SEO efforts", "Strengthen brand authority", "Increase engagement", "Improve treatment acceptance", "Enhance online visibility"],
    audienceTitle: "Who Benefits Most?",
    audiences: ["Dental Practices", "Medical Clinics", "Chiropractic Offices", "Specialty Healthcare Providers", "Multi-location Practices"],
    relatedTitle: "Related Internal Pages",
    relatedLinks: [
      { label: "Website Design & Conversion", href: "/services/website-design" },
      { label: "Social Media Marketing", href: "/services/social-media-marketing" },
      { label: "Branding & Rebranding", href: "/services/branding-rebranding" },
      { label: "Reputation & Review Management", href: "/services/reputation-review-management" },
      { label: "SEO & AI Optimization", href: "/services/seo-ai-optimization" },
      { label: "Dental Video Marketing", href: "/solutions/dental-marketing/dental-video-marketing" },
      { label: "Medical Video Marketing", href: "/solutions/medical-marketing/medical-video-marketing" },
      { label: "Chiropractic Video Marketing", href: "/solutions/chiropractic-marketing/chiropractic-video-marketing" }
    ],
    chooseTitle: "Why Healthcare Practices Choose Vigorant",
    choosePoints: ["Healthcare-focused expertise", "Strategy-first approach", "AI-aware content planning", "Conversion-focused execution", "Data-driven optimization"],
    faqs: [
      { question: "Is video marketing effective for healthcare practices?", answer: "Yes. Video helps build trust, educate patients, and improve conversion rates across multiple channels." },
      { question: "What types of videos perform best?", answer: "Doctor introductions, patient testimonials, educational videos, and treatment explanations often deliver the strongest results." },
      { question: "Does video help SEO?", answer: "Yes. Video can improve engagement metrics, increase time on site, and create additional search visibility opportunities." },
      { question: "Can video support AI search visibility?", answer: "Yes. Educational, authoritative video content contributes to broader content authority and visibility signals." }
    ],
    externalAuthority: { label: "National Library of Medicine (NIH)", href: "https://www.nlm.nih.gov/", external: true },
    videoObject: {
      name: "Healthcare Video Marketing Services Overview",
      description: "An overview of how healthcare video marketing helps practices build trust, educate patients, improve conversions, and support SEO and AI visibility.",
      thumbnailUrl: `${siteUrl}/images/video-marketing-thumbnail.jpg`,
      uploadDate: "2025-01-01"
    }
  },

  marketingStrategy: {
    slug: "marketing-strategy",
    template: "industry",
    route: "/services/marketing-strategy",
    canonicalUrl: `${siteUrl}/services/marketing-strategy`,
    metaTitle: "Healthcare Marketing Strategy Services | AI-Driven Growth Plans | Vigorant",
    metaDescription: "Build a smarter healthcare marketing strategy with Vigorant. AI-driven planning, patient acquisition systems, SEO, paid ads, conversion optimization, and measurable growth for dental, medical, and chiropractic practices.",
    keywords: "healthcare marketing strategy, marketing strategy services, healthcare growth strategy, patient acquisition strategy, digital marketing strategy, AI marketing strategy, dental marketing strategy, medical marketing strategy, chiropractic marketing strategy",
    schemaTypes: ["Service", "FAQPage", "BreadcrumbList", "Organization", "WebPage"],
    schemaDescription: "AI-driven marketing strategy services for dental, medical, and chiropractic practices. Includes market analysis, patient journey mapping, SEO roadmap, paid advertising roadmap, and 12-month growth planning.",
    twitterTitle: "Healthcare Marketing Strategy Services | Vigorant",
    twitterDescription: "AI-driven marketing strategy for dental, medical, and chiropractic practices. Get your free growth audit.",
    lastUpdated: "June 3, 2026",
    serviceName: "Healthcare Marketing Strategy Services",
    serviceType: "Healthcare Marketing Strategy",
    eyebrow: "Marketing Strategy",
    h1: "Marketing Strategy Services for Sustainable Healthcare Growth",
    heroKicker: "Strategy before spend.",
    heroBody: [
      "Most healthcare practices do not have a marketing problem—they have a strategy problem.",
      "Vigorant helps dental, medical, and chiropractic practices build data-driven marketing strategies that attract the right patients, improve conversion rates, and create predictable growth."
    ],
    primaryCta: { label: "Book a Growth Consultation", href: "/contact" },
    secondaryCta: { label: "Request a Marketing Strategy Assessment", href: "/contact" },
    whyTitle: "Why Marketing Tactics Fail Without a Strategy",
    whyIntro: ["Many practices invest in websites, SEO, advertising, social media, and reputation management without a unified plan.", "Our marketing strategy services align every channel around one goal: sustainable patient acquisition and revenue growth."],
    whyPoints: ["Fragmented marketing", "Inconsistent results", "Wasted budget", "Unclear channel priorities", "Weak ROI tracking"],
    definitionTitle: "What Is a Healthcare Marketing Strategy?",
    definitionIntro: ["A healthcare marketing strategy is a structured roadmap that defines growth goals, target patient profiles, competitive positioning, channel priorities, budget allocation, and ROI measurement. Rather than reacting to trends, it creates a repeatable system for patient acquisition and sustainable practice revenue."],
    definitionPoints: ["Growth goals", "Target patient profiles", "Competitive positioning", "Channel priorities", "Budget allocation", "Measurement and ROI tracking"],
    frameworkTitle: "Our Marketing Strategy Framework",
    frameworkSteps: [
      { label: "01", title: "Market & Competitive Analysis", description: "Understand local competition, market opportunities, patient demand, and positioning.", output: "Market and competitor clarity." },
      { label: "02", title: "Patient Journey Mapping", description: "Identify how prospective patients discover, evaluate, and choose healthcare providers.", output: "Clear patient decision pathways." },
      { label: "03", title: "Digital Visibility Planning", description: "Integrate SEO, AI Optimization (AEO/GEO), paid advertising, local search, and reputation management.", output: "One visibility system across channels." },
      { label: "04", title: "Conversion Optimization Strategy", description: "Improve website performance, lead conversion, phone call outcomes, and appointment requests.", output: "Fewer leaks between traffic and bookings." },
      { label: "05", title: "Growth Measurement & Reporting", description: "Track meaningful KPIs tied to patient acquisition and revenue.", output: "Reporting tied to business outcomes." }
    ],
    aiTitle: "AI-Powered Strategic Planning",
    aiIntro: ["Search behavior is changing. Patients increasingly use AI-driven platforms including ChatGPT, Google AI Overviews, and Perplexity to find and evaluate healthcare providers.", "Vigorant builds AI visibility directly into the strategy through AEO, GEO, structured content, schema markup planning, entity-based SEO, and conversational search visibility."],
    aiPoints: ["AI Engine Optimization (AEO)", "Generative Engine Optimization (GEO)", "Structured content development", "Schema markup planning", "Entity-based SEO", "Conversational search visibility"],
    includedTitle: "What Is Included in Our Marketing Strategy Service?",
    includedItems: ["Growth assessment", "Market analysis", "Competitor benchmarking", "Patient acquisition planning", "SEO roadmap", "Paid advertising roadmap", "Website optimization recommendations", "Reputation strategy", "KPI framework", "12-month growth roadmap"],
    benefitsTitle: "Strategy Service Blueprint",
    benefits: ["Research and assessment clarify goals, market opportunities, target patient profiles, and competitor positioning.", "Channel roadmap connects SEO, paid ads, website conversion, reputation, and AI visibility.", "Measurement ties marketing decisions to patient acquisition and revenue instead of activity metrics only."],
    audienceTitle: "Who Benefits Most?",
    audiences: ["Dental practices", "Medical clinics", "Chiropractic offices", "Multi-location healthcare organizations", "New practices preparing for growth"],
    relatedTitle: "Related Internal Pages",
    relatedLinks: [
      { label: "SEO & AI Optimization", href: "/services/seo-ai-optimization" },
      { label: "Dental Marketing Strategy", href: "/solutions/dental-marketing/dental-marketing-strategy" },
      { label: "Medical Marketing Strategy", href: "/solutions/medical-marketing/medical-marketing-strategy" },
      { label: "Chiropractic Marketing Strategy", href: "/solutions/chiropractic-marketing/chiropractic-marketing-strategy" },
      { label: "Website Design & Conversion", href: "/services/website-design" },
      { label: "Paid Advertising", href: "/services/paid-advertising" }
    ],
    chooseTitle: "Why Healthcare Practices Choose Vigorant",
    choosePoints: ["Healthcare-focused expertise", "AI-enhanced strategic planning", "Data-driven decision making", "ROI-focused methodology", "Long-term growth perspective"],
    faqs: [
      { question: "What is the difference between marketing strategy and marketing execution?", answer: "Strategy defines where and how to grow. Execution implements the tactics required to achieve those goals. Without a strategy, individual tactics produce inconsistent results and wasted budget." },
      { question: "How often should a healthcare marketing strategy be reviewed?", answer: "Most practices should review strategy quarterly and conduct a comprehensive evaluation annually to respond to market changes and new growth opportunities." },
      { question: "Does Vigorant's marketing strategy include AI optimization?", answer: "Yes. Every Vigorant strategy incorporates AI Engine Optimization (AEO), Generative Engine Optimization (GEO), structured content planning, schema markup, and conversational search visibility — because that's where patients are increasingly searching." },
      { question: "Can Vigorant create a marketing strategy for a new practice?", answer: "Absolutely. Strategic planning is particularly valuable during launch and expansion phases, when positioning and budget allocation decisions have the highest long-term impact." }
    ],
    externalAuthority: { label: "health communication best practices", href: "https://www.cdc.gov/healthcommunication/", external: true }
  }
};

export const servicePageList = Object.values(servicePages);
