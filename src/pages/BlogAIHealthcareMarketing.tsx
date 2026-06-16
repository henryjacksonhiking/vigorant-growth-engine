import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Search, Bot, TrendingUp, Mail, Globe, Star, BarChart3, Lightbulb,
  ShieldOff, HeartHandshake, Stethoscope, Compass, FileQuestion, UserCheck,
  Code2, ExternalLink, BookOpen, Zap, ShieldCheck, Palette, ArrowRight,
} from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";

const BASE = "https://vigorant.com";
const CANON = `${BASE}/blog/ai-healthcare-marketing-results`;

const HERO_IMG =
  "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=900&q=80";

const TIMELINE = [
  {
    Icon: Search,
    title: "Smarter Patient Acquisition Through AI-Powered SEO",
    body:
      "Search engine optimisation for healthcare has grown exponentially more complex. Patients are no longer searching just for 'dentist near me' — they ask nuanced, intent-rich questions. AI-powered SEO tools analyse thousands of search queries simultaneously, identifying keyword clusters, semantic relationships, and content gaps.",
    chips: [
      "Condition-specific content",
      "Local SEO silo structures",
      "Schema.org markup",
      "Content velocity",
    ],
    note:
      "All AI-generated healthcare content must be reviewed by a clinical specialist before publication to meet YMYL/E-E-A-T standards.",
    img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=700&q=80",
    alt: "SEO analytics dashboard showing healthcare keyword performance",
  },
  {
    Icon: Bot,
    title: "AEO and GEO: Getting Found in AI-Generated Answers",
    body:
      "When a patient asks ChatGPT, Google Gemini, Perplexity, or Microsoft Copilot 'Who is the best periodontist in Austin?', the AI assembles its answer from web content it has indexed and evaluated for authority. Answer Engine Optimisation (AEO) and Generative Engine Optimisation (GEO) are the disciplines that help healthcare practices be selected as a source in these AI-generated answers.",
    chips: [
      "Structured FAQ content",
      "Named clinical authors",
      "Schema.org markup",
      "Institutional citations",
      "Domain authority",
    ],
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=700&q=80",
    alt: "AI chat interface showing healthcare provider recommendations",
  },
  {
    Icon: TrendingUp,
    title: "AI-Optimised Paid Advertising for Patient Acquisition",
    body:
      "Pay-per-click advertising remains one of the most effective patient acquisition channels for dental, medical, and chiropractic practices. Modern AI-powered ad platforms — including Google's Performance Max and Meta's Advantage+ — adjust bids in real time, dynamically assemble ad copy, suppress irrelevant audiences, and allocate spend across channels automatically.",
    note:
      "For healthcare advertising, AI optimisation must be combined with human oversight to ensure compliance with advertising regulations and appropriate claim hedging.",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&q=80",
    alt: "Digital advertising dashboard showing Google Ads performance metrics for healthcare",
  },
  {
    Icon: Mail,
    title: "Personalised Patient Communication at Scale",
    body:
      "AI-powered email and SMS marketing platforms enable automated welcome sequences for new patients, post-appointment follow-ups that request reviews, reactivation campaigns for patients not seen in 12+ months, care gap outreach for overdue routine procedures, and seasonal campaign triggers. AI segmentation tools analyse patient behaviour and engagement patterns to identify which patients are most likely to respond.",
    chips: [
      "Welcome sequences",
      "Review requests",
      "Reactivation campaigns",
      "Care gap outreach",
      "Seasonal triggers",
    ],
    img: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=700&q=80",
    alt: "Healthcare professional reading personalised patient communication on smartphone",
  },
  {
    Icon: Globe,
    title: "AI-Assisted Healthcare Website Design and CRO",
    body:
      "AI web development tools are changing how websites are built and optimised. AI adds value by generating initial site frameworks, producing content drafts, running automated accessibility checks, and generating A/B test variants. However, specialist healthcare website design remains essential for HIPAA-aware architecture, custom brand identity, deep SEO structure, ADA compliance, and patient trust design.",
    cta: { label: "Explore Vigorant's Web Design Service", href: "/services/website-design-cro" },
    img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=700&q=80",
    alt: "Healthcare website design mockup on laptop and mobile showing custom dental practice site",
  },
  {
    Icon: Star,
    title: "AI-Powered Online Reputation Management",
    body:
      "Online reviews are among the most powerful patient acquisition levers available. AI reputation management tools monitor review platforms in real time, automatically send post-visit review request messages, perform sentiment analysis across all reviews, and generate suggested response drafts for negative reviews. Proactive AI-assisted reputation management typically produces a measurable improvement in average star rating within three to six months.",
    chips: [
      "Real-time monitoring",
      "Review requests",
      "Sentiment analysis",
      "Response drafting",
    ],
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&q=80",
    alt: "Five-star online review display for a healthcare practice",
  },
  {
    Icon: BarChart3,
    title: "Predictive Analytics and Marketing Intelligence",
    body:
      "Perhaps the most powerful long-term application of AI for healthcare marketing owners is predictive analytics: the ability to use historical practice data to forecast future outcomes and make better resource allocation decisions. AI-driven platforms predict which channels will generate the most new patients in the next 90 days, identify seasonal demand peaks, forecast patient lifetime value by treatment type, and alert owners when a KPI is trending toward underperformance.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80",
    alt: "Predictive analytics dashboard showing healthcare marketing performance trends",
  },
];

const FLIP_CARDS: { fn: string; without: string; withAI: string }[] = [
  { fn: "Patient Targeting", without: "Broad, demographic-only", withAI: "Behavioural, intent-based, hyper-local" },
  { fn: "Content Production", without: "Days to weeks per asset", withAI: "Hours per asset with AI drafting" },
  { fn: "SEO Strategy", without: "Manual keyword research", withAI: "AI-driven keyword clustering + AEO/GEO" },
  { fn: "Ad Optimisation", without: "Weekly manual bid adjustments", withAI: "Real-time algorithmic bidding" },
  { fn: "Patient Communication", without: "Generic batch emails", withAI: "Personalised AI-segmented sequences" },
  { fn: "Online Reputation", without: "Reactive — manual monitoring", withAI: "Proactive — AI sentiment alerts" },
  { fn: "Website Performance", without: "Periodic manual CRO reviews", withAI: "Continuous AI-assisted A/B testing" },
  { fn: "Analytics & Reporting", without: "Monthly static dashboards", withAI: "Live predictive dashboards" },
  { fn: "Cost Efficiency", without: "Higher cost per lead", withAI: "Lower CPL through automated optimisation" },
  { fn: "Patient Retention", without: "Appointment reminders only", withAI: "AI-driven reactivation + care gap outreach" },
  { fn: "Competitive Intelligence", without: "Ad hoc research", withAI: "Automated real-time monitoring" },
];

const LIMITATIONS = [
  {
    Icon: ShieldOff,
    title: "AI Cannot Guarantee Compliance",
    body:
      "No AI tool automatically ensures that a healthcare website, ad campaign, or email communication meets HIPAA requirements, FTC advertising guidelines, or applicable state-level healthcare marketing regulations. Compliance requires human legal and regulatory review — every time.",
  },
  {
    Icon: HeartHandshake,
    title: "AI Cannot Build Authentic Patient Trust",
    body:
      "The trust signals that convert a website visitor into a booked patient — real physician bios, genuine testimonials with proper consent, authentic photography, community involvement — cannot be fabricated or automated. They require human storytelling.",
  },
  {
    Icon: Stethoscope,
    title: "AI Cannot Replace Clinical Expertise in Content",
    body:
      "AI-generated healthcare content may contain clinical inaccuracies, outdated protocols, or oversimplified explanations. All AI-produced healthcare content must be reviewed and approved by a qualified clinician before publication. Publishing unchecked AI content creates patient safety risk and E-E-A-T deficits.",
  },
  {
    Icon: Compass,
    title: "AI Cannot Provide Strategic Judgment",
    body:
      "Deciding which services to prioritise, how to position against specific local competitors, which patient demographics to target, or how to recover from a reputational crisis requires strategic human judgment that no AI tool can replicate.",
  },
];

const PLATFORMS = [
  { emoji: "🤖", name: "ChatGPT", desc: "Conversational AI with 180M+ users. Patients ask it for provider recommendations by specialty and location." },
  { emoji: "💎", name: "Google Gemini", desc: "Integrated into Google Search. Powers AI Overviews that appear above organic results for health queries." },
  { emoji: "🔍", name: "Perplexity", desc: "AI-native search engine rapidly adopted by younger patients seeking healthcare research." },
  { emoji: "🪟", name: "Microsoft Copilot", desc: "Embedded in Bing and Microsoft 365. Handles healthcare queries across enterprise and consumer contexts." },
  { emoji: "🧠", name: "Claude", desc: "Anthropic's AI assistant, increasingly used for nuanced healthcare research and provider comparisons." },
];

const REQUIREMENTS = [
  { Icon: FileQuestion, title: "Structured FAQ Content", desc: "Directly answers the exact questions patients ask AI assistants" },
  { Icon: UserCheck, title: "Named Clinical Authors", desc: "Verifiable credentials and institutional affiliations cited on content pages" },
  { Icon: Code2, title: "Schema.org Markup", desc: "MedicalBusiness, Physician, FAQPage entities correctly implemented" },
  { Icon: ExternalLink, title: "Institutional Citations", desc: "Links to peer-reviewed or government health authority sources" },
  { Icon: BookOpen, title: "Topical Authority", desc: "Broad, consistent library of expert-level healthcare content in your specialty" },
  { Icon: Zap, title: "Technical Performance", desc: "Fast-loading, mobile-first, error-free website that AI crawlers can index completely" },
];

const FAQS = [
  { q: "How can AI improve marketing results for healthcare practices?", a: "AI improves healthcare marketing by automating repetitive tasks, enabling hyper-personalised patient communication, optimising paid advertising bids in real time, accelerating SEO content production, and providing predictive analytics that identify which marketing channels deliver the best return. For dental, medical, and chiropractic practices, AI-powered tools reduce cost per lead, increase appointment booking rates, and improve patient retention — all without requiring a larger marketing team." },
  { q: "Is AI website design suitable for dental and medical practices?", a: "AI website builders can generate a basic dental or medical website quickly and at low cost. However, they do not automatically address HIPAA-awareness, ADA accessibility compliance, healthcare-specific SEO architecture, E-E-A-T signals, or patient trust optimisation. A specialist healthcare website design agency like Vigorant uses AI as a production accelerator within a human-led strategy — combining the efficiency of AI web development with the depth of clinical domain expertise." },
  { q: "What is AEO and GEO, and why do healthcare practices need it?", a: "AEO (Answer Engine Optimisation) and GEO (Generative Engine Optimisation) are strategies that help your practice appear in AI-generated answers on platforms like ChatGPT, Google Gemini, Perplexity, Microsoft Copilot, and Claude. As more patients use AI assistants to find healthcare providers, practices whose content is structured, authoritative, and correctly marked up with Schema.org are significantly more likely to be cited as a recommended source. Vigorant's marketing strategies incorporate AEO and GEO alongside traditional SEO." },
  { q: "Can AI help with patient retention, not just new patient acquisition?", a: "Yes. AI is particularly effective for patient retention through automated, personalised communication sequences — reactivation emails for lapsed patients, care gap reminders, post-appointment follow-ups, and loyalty-focused content. AI segmentation tools identify which patients are at risk of churning and trigger outreach at the optimal time, significantly reducing voluntary patient attrition compared to manual follow-up processes." },
  { q: "Will AI replace my marketing team or marketing agency?", a: "No. AI is a force multiplier for skilled healthcare marketers, not a replacement for them. AI tools automate data analysis, content drafting, bid management, and campaign monitoring — but the strategic judgment, compliance awareness, clinical content review, brand positioning, and patient relationship understanding that drive real practice growth still require experienced human expertise. The most effective healthcare marketing outcomes come from AI-assisted, human-led strategy." },
  { q: "How does AI affect healthcare advertising on Google and social media?", a: "AI dramatically improves the performance of Google Ads and social media advertising for healthcare practices by enabling real-time bid adjustments based on conversion probability, dynamic ad copy personalisation based on user intent signals, automated audience segmentation, predictive budget allocation across channels, and continuous creative testing. Practices using AI-optimised paid advertising typically achieve lower cost-per-click and higher conversion rates than those using manual campaign management." },
  { q: "What healthcare marketing tasks can AI realistically automate?", a: "AI can reliably automate: appointment reminder and confirmation messages, review request sequences after patient visits, social media scheduling and basic caption drafting, keyword research and content brief generation, PPC bid management, reputation monitoring and alert generation, basic chatbot responses for common patient inquiries, and analytics report generation. Tasks requiring clinical accuracy, empathy, legal review, or complex brand judgment should remain human-led." },
  { q: "How do I choose the right AI-powered healthcare marketing partner?", a: "Choose a healthcare marketing agency that demonstrates verified experience with dental, medical, or chiropractic practices; uses AI tools within a structured, human-reviewed strategy; understands HIPAA-aware data practices; offers transparent performance reporting; and builds fully custom healthcare websites — not AI-generated templates. Avoid any agency that promises guaranteed search rankings or guaranteed patient volumes, which no ethical firm can deliver." },
];

// ── small components ─────────────────────────────────────────────

function ReadingProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      aria-hidden
      className="fixed top-0 left-0 h-[3px] z-[9999] pointer-events-none transition-[width] duration-150"
      style={{
        width: `${p}%`,
        background:
          "linear-gradient(90deg, hsl(247 93% 64%), hsl(248 100% 75%), hsl(248 49% 15%))",
      }}
    />
  );
}

function Counter({ end, prefix = "", suffix = "" }: { end: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1400;
            const t0 = performance.now();
            const tick = (t: number) => {
              const k = Math.min(1, (t - t0) / duration);
              const eased = 1 - Math.pow(1 - k, 3);
              setVal(end * eased);
              if (k < 1) requestAnimationFrame(tick);
              else setVal(end);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end]);
  const display =
    end % 1 !== 0 ? val.toFixed(2) : Math.round(val).toLocaleString();
  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

function FlipCard({ fn, without, withAI }: { fn: string; without: string; withAI: string }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className="group [perspective:1000px] cursor-pointer min-h-[180px]"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        className="relative w-full h-full min-h-[180px] transition-transform duration-500 [transform-style:preserve-3d]"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* front */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl bg-[hsl(248_30%_97%)] border border-[hsl(248_20%_88%)] p-5 flex flex-col">
          <span className="font-mono-ui text-[10px] uppercase tracking-widest text-[hsl(38_92%_50%)] mb-3">
            WITHOUT AI
          </span>
          <h3 className="font-bold text-brand-deep text-[15px] mb-2 leading-snug">
            {fn}
          </h3>
          <p className="text-ink-secondary text-[13px] leading-[1.6] mt-auto">
            {without}
          </p>
        </div>
        {/* back */}
        <div
          className="absolute inset-0 [backface-visibility:hidden] rounded-2xl p-5 flex flex-col [transform:rotateY(180deg)]"
          style={{
            background:
              "linear-gradient(135deg, hsl(248 49% 15%), hsl(250 45% 19%))",
          }}
        >
          <span className="font-mono-ui text-[10px] uppercase tracking-widest text-[hsl(248_100%_85%)] mb-3">
            WITH AI ✦
          </span>
          <h3 className="font-bold text-white text-[15px] mb-2 leading-snug">
            {fn}
          </h3>
          <p className="text-[hsl(248_100%_88%)] text-[13px] leading-[1.6] mt-auto">
            {withAI}
          </p>
        </div>
      </div>
    </div>
  );
}

// ── page ─────────────────────────────────────────────────────────

export default function BlogAIHealthcareMarketing() {
  const ldGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${CANON}#article`,
        headline:
          "How Can AI Help Healthcare Business Owners Achieve Better Marketing Results",
        description:
          "A comprehensive, evidence-based guide for dental, medical, and chiropractic practice owners on using artificial intelligence to improve patient acquisition, SEO, paid advertising, content marketing, reputation management, and website performance.",
        image: `${BASE}/images/blog/ai-healthcare-marketing-results.jpg`,
        author: {
          "@type": "Organization",
          name: "Vigorant",
          url: BASE,
          logo: { "@type": "ImageObject", url: `${BASE}/logo.png` },
        },
        publisher: {
          "@type": "Organization",
          name: "Vigorant",
          logo: { "@type": "ImageObject", url: `${BASE}/logo.png` },
        },
        datePublished: "2026-06-15",
        dateModified: "2026-06-15",
        mainEntityOfPage: CANON,
        keywords: [
          "AI healthcare marketing", "AI website builder", "AI website design",
          "AI web development", "AI-generated websites", "healthcare website design",
          "dental website design", "website design agency", "patient acquisition",
          "AEO optimization", "GEO optimization", "healthcare SEO",
        ],
        articleSection: "Healthcare Marketing",
        wordCount: "2450",
        inLanguage: "en-US",
        about: { "@type": "Thing", name: "Artificial Intelligence in Healthcare Marketing" },
        citation: {
          "@type": "CreativeWork",
          name: "Conceptual Model for the Integration of Marketing Strategies and Biomedical Innovation in Patient-Centered Care",
          url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12772582/",
          author: { "@type": "Organization", name: "National Institutes of Health" },
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
          { "@type": "ListItem", position: 3, name: "How AI Helps Healthcare Marketing", item: CANON },
        ],
      },
      {
        "@type": "Organization",
        "@id": `${BASE}#organization`,
        name: "Vigorant",
        url: BASE,
        logo: `${BASE}/logo.png`,
        description:
          "Vigorant is a healthcare-exclusive growth marketing agency serving dental, medical, and chiropractic practices across the United States.",
        areaServed: "United States",
        knowsAbout: [
          "Healthcare Marketing", "Dental SEO", "Medical Website Design",
          "AI Marketing Strategy", "Patient Acquisition", "Healthcare Website Design Agency",
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>How AI Is Transforming Healthcare Marketing — A Practice Owner's Complete Guide | Vigorant</title>
        <meta
          name="description"
          content="Discover how AI-powered marketing helps dental, medical, and chiropractic practices attract more patients, cut costs, and grow faster. Vigorant explains exactly where AI delivers results — and where human expertise still leads."
        />
        <link rel="canonical" href={CANON} />
        <meta property="og:title" content="How AI Helps Healthcare Practice Owners Get Better Marketing Results | Vigorant" />
        <meta property="og:description" content="From AI-powered SEO and AEO to smarter ad campaigns, personalised patient emails, and AI-assisted website design — Vigorant breaks down every way artificial intelligence can improve your dental, medical, or chiropractic marketing strategy." />
        <meta property="og:image" content={`${BASE}/images/blog/ai-healthcare-marketing-results.jpg`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={CANON} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(ldGraph)}</script>
        <style>{`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </Helmet>

      <ReadingProgress />
      <Nav />

      {/* SECTION 1 — SPLIT-SCREEN HERO */}
      <section className="relative flex flex-col lg:flex-row lg:min-h-[calc(100vh-5rem)] pt-24 lg:pt-20">
        {/* Mobile image top */}
        <div className="lg:hidden relative w-full aspect-[16/9] overflow-hidden">
          <img
            src={HERO_IMG}
            alt="Healthcare professional reviewing AI-powered marketing analytics dashboard"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, hsl(248 49% 12% / 0.85) 0%, transparent 60%)",
            }}
          />
        </div>

        {/* Left panel (light) */}
        <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-20 py-16 lg:py-0 min-h-[60vh] lg:min-h-screen">
          <nav className="text-[11px] font-mono-ui text-[hsl(247_93%_64%/0.75)] tracking-widest uppercase mb-6">
            <Link to="/" className="hover:text-[hsl(247_93%_64%)] transition-colors">Home</Link>
            <span className="mx-2 text-ink-secondary/50">›</span>
            <Link to="/blog" className="hover:text-[hsl(247_93%_64%)] transition-colors">Blog</Link>
            <span className="mx-2 text-ink-secondary/50">›</span>
            <span className="text-ink-secondary">Healthcare Marketing</span>
          </nav>

          <span className="inline-flex items-center gap-2 font-mono-ui text-[11px] uppercase tracking-[0.12em] text-[hsl(247_93%_64%)] bg-[hsl(247_93%_64%/0.08)] border border-[hsl(247_93%_64%/0.2)] rounded-full px-3.5 py-1.5 mb-8 self-start">
            <span className="pulse-dot inline-block w-1.5 h-1.5 rounded-full bg-[hsl(247_93%_64%)]" />
            AI + Healthcare Marketing
          </span>

          <h1 className="font-display font-bold text-brand-deep leading-[1.06] tracking-tight mb-6"
              style={{ fontSize: "clamp(34px, 5.5vw, 64px)", letterSpacing: "-0.03em" }}>
            How Can AI Help Healthcare Business Owners Achieve{" "}
            <span
              style={{
                background: "linear-gradient(90deg, hsl(247 93% 64%), hsl(248 100% 75%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Better Marketing Results
            </span>
          </h1>

          <p className="text-ink-secondary text-[17px] sm:text-[18px] leading-[1.7] max-w-[480px] mb-8">
            Running a dental, medical, or chiropractic practice in 2026 means competing in the most patient-selective market in history. AI is the force multiplier that changes the equation — when applied correctly.
          </p>

          <div className="flex items-center flex-wrap gap-x-4 gap-y-1 text-[13px] font-mono-ui text-ink-secondary mb-10">
            <span>Vigorant Healthcare Marketing Team</span>
            <span>·</span>
            <span>June 2026</span>
            <span>·</span>
            <span>12 min read</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#seven-ways"
              className="btn-primary-grad inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-white text-[15px]"
            >
              See the 7 AI Strategies <ArrowRight className="size-4" />
            </a>
            <Link
              to="/services/website-design-cro"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-[hsl(247_93%_64%)] border border-[hsl(247_93%_64%/0.4)] hover:bg-[hsl(247_93%_64%/0.06)] transition-colors text-[15px]"
            >
              Explore Our Services
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-4 gap-y-2 text-[12px] font-mono-ui text-ink-secondary">
            <span>● HIPAA-Aware Strategy</span>
            <span>● Healthcare-Exclusive</span>
            <span>● AI + Human Expertise</span>
          </div>
        </div>

        {/* Right panel (dark image) */}
        <div className="hidden lg:block w-1/2 relative overflow-hidden min-h-screen">
          <img
            src={HERO_IMG}
            alt="Healthcare professional reviewing AI-powered marketing analytics dashboard"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, hsl(248 49% 12% / 0.9) 0%, transparent 60%)",
            }}
          />
          <div
            className="absolute bottom-10 left-8 right-8 rounded-2xl px-6 py-5"
            style={{
              background: "hsl(248 49% 15% / 0.85)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid hsl(247 93% 64% / 0.25)",
            }}
          >
            <div className="grid grid-cols-3 gap-4">
              {[
                { n: "$14.92B", l: "AI Healthcare", s: "Market 2024" },
                { n: "66%", l: "Physicians", s: "Using AI in 2024" },
                { n: "$3.20", l: "ROI per $1", s: "Invested" },
              ].map((s) => (
                <div key={s.n}>
                  <div className="font-display font-bold text-white text-[clamp(18px,2vw,26px)] leading-none">{s.n}</div>
                  <div className="font-mono-ui text-[10px] uppercase tracking-wider text-[hsl(248_100%_88%)] mt-2">{s.l}</div>
                  <div className="font-mono-ui text-[10px] text-white/55 mt-0.5">{s.s}</div>
                </div>
              ))}
            </div>
            <div className="text-[10px] text-white/40 mt-3 font-mono-ui">
              Sources: MarketsandMarkets 2025 · AMA 2024 · Microsoft-IDC 2024
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — STAT RAIL (DARK) */}
      <section
        className="relative py-12 sm:py-14 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, hsl(248 49% 15%) 0%, hsl(250 45% 19%) 50%, hsl(248 49% 12%) 100%)",
        }}
      >
        <div aria-hidden className="grid-overlay absolute inset-0 opacity-30" />
        <div className="container relative">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { n: <Counter prefix="$" end={110} suffix="B" />, l: "Projected AI Healthcare Market", s: "by 2030 (MarketsandMarkets)" },
              { n: <Counter end={66} suffix="%" />, l: "Physicians Using AI", s: "in 2024 — up 78% YoY (AMA)" },
              { n: <Counter end={79} suffix="%" />, l: "Healthcare Orgs Using AI", s: "Microsoft-IDC Study 2024" },
              { n: <Counter prefix="$" end={3.20} />, l: "ROI per $1 Invested", s: "avg. realised in 14 months" },
              { n: <Counter end={38.6} suffix="%" />, l: "Market CAGR", s: "2024–2030 compound growth" },
            ].map((s, i) => (
              <div key={i}>
                <div className="font-display font-bold text-white leading-none"
                     style={{ fontSize: "clamp(32px,4vw,52px)" }}>
                  {s.n}
                </div>
                <div className="font-mono-ui text-[11px] uppercase tracking-[0.12em] text-white/75 mt-3">{s.l}</div>
                <div className="text-[11px] text-white/45 mt-1">{s.s}</div>
              </div>
            ))}
          </div>
          <div className="text-white/55 text-[12px] font-mono-ui mt-8 text-center">
            Data: MarketsandMarkets 2025 · AMA Survey 2024 · Microsoft-IDC 2024
          </div>
        </div>
      </section>

      {/* SECTION 3 — INTRO CONTEXT (LIGHT) */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container grid lg:grid-cols-[1fr_420px] gap-16 items-start">
          <div className="max-w-[620px]">
            <div className="font-mono-ui text-[11px] uppercase tracking-[0.12em] text-[hsl(247_93%_64%)] mb-4">
              THE OPPORTUNITY
            </div>
            <h2 className="font-display font-bold text-brand-deep leading-[1.1] tracking-tight mb-6"
                style={{ fontSize: "clamp(28px,4vw,50px)", letterSpacing: "-0.025em" }}>
              AI Adoption in Healthcare Is No Longer Optional — It Is Already the Standard
            </h2>
            <div className="text-ink-secondary leading-[1.78] space-y-4 text-[16px]">
              <p>
                The global AI in healthcare market was valued at approximately $14.92 billion in 2024 and is projected to reach $110.61 billion by 2030 — a compound annual growth rate of 38.6%. These are not projections about the distant future; they reflect investment decisions being made right now by practices and health systems across the United States.
              </p>
              <p>
                Marketing AI — which operates at the patient acquisition and engagement layer — is growing in parallel. The practices that understand how to apply AI strategically to their marketing stack are building meaningful competitive advantages over those that do not.
              </p>
            </div>

            <blockquote
              className="my-8"
              style={{
                borderLeft: "4px solid hsl(247 93% 64%)",
                background:
                  "linear-gradient(135deg, hsl(247 93% 64% / 0.05), hsl(248 100% 75% / 0.05))",
                borderRadius: "0 12px 12px 0",
                padding: "24px 28px",
              }}
            >
              <p className="italic text-[16px] leading-[1.7] text-brand-deep font-medium">
                "The increasing integration of biomedical technology and digital marketing is quickly transforming how patients engage with health care. AI platforms and health care marketing strategies are now inseparable dimensions of effective patient-centred care."
              </p>
              <div className="font-mono-ui text-[11px] uppercase tracking-wide text-ink-secondary mt-3">
                — National Institutes of Health, PubMed Central PMC12772582 (2026)
              </div>
            </blockquote>
          </div>

          <div className="lg:sticky lg:top-28">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
              alt="AI-powered marketing analytics dashboard with healthcare data"
              className="rounded-2xl w-full aspect-[4/3] object-cover shadow-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80"
              alt="Healthcare practice team using digital marketing tools"
              className="rounded-2xl w-[85%] aspect-[4/3] object-cover shadow-xl border-4 border-white relative -ml-5 -mt-10"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4 — 7 WAYS TIMELINE (LIGHT) */}
      <section id="seven-ways" className="bg-[hsl(248_30%_97%)] py-24 sm:py-32">
        <div className="container">
          <div className="max-w-[640px] mx-auto text-center mb-20">
            <span className="inline-flex items-center gap-2 font-mono-ui text-[11px] uppercase tracking-[0.12em] text-[hsl(247_93%_64%)] bg-[hsl(247_93%_64%/0.08)] border border-[hsl(247_93%_64%/0.2)] rounded-full px-3.5 py-1.5 mb-6">
              ● 7 AI Strategies
            </span>
            <h2 className="font-display font-bold text-brand-deep leading-[1.1] tracking-tight mb-5"
                style={{ fontSize: "clamp(28px,4vw,50px)" }}>
              7 Ways AI Delivers Better Marketing Results for Healthcare Practices
            </h2>
            <p className="text-ink-secondary text-[17px] italic">
              Each of these strategies is in active use by leading dental, medical, and chiropractic practices today.
            </p>
          </div>

          {/* desktop timeline */}
          <div className="hidden md:block relative">
            <div
              aria-hidden
              className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, hsl(247 93% 64% / 0.4), transparent)",
              }}
            />
            {TIMELINE.map((item, i) => {
              const odd = i % 2 === 0;
              return (
                <div key={i} className="grid grid-cols-2 gap-12 items-center mb-20 last:mb-0 relative">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-12 h-12 rounded-full bg-[hsl(247_93%_64%)] flex items-center justify-center shadow-lg shadow-[hsl(247_93%_64%/0.35)]">
                      <span className="font-mono-ui text-white font-bold text-[13px]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  {odd ? (
                    <>
                      <TimelineContent item={item} />
                      <TimelineImage item={item} />
                    </>
                  ) : (
                    <>
                      <TimelineImage item={item} />
                      <TimelineContent item={item} />
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* mobile fallback */}
          <div className="md:hidden border-l-2 border-[hsl(247_93%_64%/0.25)] pl-6 space-y-10">
            {TIMELINE.map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[35px] top-0 w-10 h-10 rounded-full bg-[hsl(247_93%_64%)] flex items-center justify-center shadow-md">
                  <span className="font-mono-ui text-white font-bold text-[12px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <TimelineContent item={item} />
                <img
                  src={item.img}
                  alt={item.alt}
                  className="rounded-2xl w-full aspect-[4/3] object-cover shadow-lg mt-4"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — MAGAZINE PULL-QUOTE (DARK/VIOLET) */}
      <section
        className="relative overflow-hidden py-20 sm:py-24"
        style={{
          background:
            "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 49% 15%))",
        }}
      >
        <div
          aria-hidden
          className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, hsl(248 100% 75% / 0.3), transparent 60%)",
            filter: "blur(80px)",
          }}
        />
        <div
          aria-hidden
          className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, hsl(248 49% 12% / 0.5), transparent 60%)",
            filter: "blur(60px)",
          }}
        />
        <div className="container relative z-10 text-center max-w-[860px] mx-auto">
          <div className="font-mono-ui text-[11px] uppercase tracking-[0.18em] text-white/60 mb-8">
            NIH — PUBMED CENTRAL · PMC12772582
          </div>
          <p
            className="font-display font-bold text-white leading-[1.15] tracking-tight mb-8"
            style={{ fontSize: "clamp(26px,4.5vw,52px)" }}
          >
            "Artificial intelligence in healthcare is not about replacing human expertise — it is about augmenting it. The most impactful uses of AI are those where human clinical and strategic knowledge directs the system."
          </p>
          <div className="font-mono-ui text-[13px] text-white/65 uppercase tracking-widest">
            — National Library of Medicine, National Institutes of Health (2025)
          </div>
          <div className="w-16 h-px bg-white/30 mx-auto my-6" />
          <p className="text-white/55 text-[14px] max-w-[480px] mx-auto">
            For peer-reviewed research on AI in healthcare marketing, see the NIH / PubMed Central study linked in the footer of this page.
          </p>
        </div>
      </section>

      {/* SECTION 6 — BEFORE/AFTER FLIP CARDS (LIGHT) */}
      <section className="bg-white py-24 sm:py-28">
        <div className="container">
          <div className="max-w-[640px] mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 font-mono-ui text-[11px] uppercase tracking-[0.12em] text-[hsl(247_93%_64%)] bg-[hsl(247_93%_64%/0.08)] border border-[hsl(247_93%_64%/0.2)] rounded-full px-3.5 py-1.5 mb-6">
              Without AI vs. With AI
            </span>
            <h2 className="font-display font-bold text-brand-deep leading-[1.1] tracking-tight mb-5"
                style={{ fontSize: "clamp(28px,4vw,50px)" }}>
              Healthcare Marketing: Transformed by AI
            </h2>
            <p className="italic text-ink-secondary text-[17px]">
              See how AI assistance changes every dimension of healthcare marketing for dental, medical, and chiropractic practices.
            </p>
            <p className="text-[12px] font-mono-ui text-ink-secondary mt-3">
              Hover or tap each card to flip
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {FLIP_CARDS.map((c, i) => (
              <FlipCard key={i} {...c} />
            ))}
          </div>

          <div className="bg-[hsl(247_93%_64%/0.06)] border border-[hsl(247_93%_64%/0.2)] rounded-2xl p-6 mt-10 flex gap-4 items-start max-w-3xl mx-auto">
            <Lightbulb className="text-[hsl(247_93%_64%)] size-6 shrink-0 mt-0.5" />
            <p className="text-brand-deep text-[15px] leading-[1.7]">
              AI does not replace the need for strategy, domain expertise, or human judgment in healthcare marketing. It accelerates execution and provides decision-quality data at a speed and scale that human teams cannot match alone. The practices winning in 2026 are combining both.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7 — HUMAN BOUNDARY (LIGHT, diagonal top) */}
      <section
        className="bg-[hsl(248_30%_97%)] pb-24 sm:pb-28"
        style={{
          clipPath: "polygon(0 40px, 100% 0, 100% 100%, 0 100%)",
          marginTop: "-40px",
          paddingTop: "calc(64px + 40px)",
        }}
      >
        <div className="container">
          <div className="max-w-[640px] mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 font-mono-ui text-[11px] uppercase tracking-[0.12em] rounded-full px-3.5 py-1.5 mb-6 border"
                  style={{
                    color: "hsl(38 92% 50%)",
                    background: "hsl(38 92% 50% / 0.1)",
                    borderColor: "hsl(38 92% 50% / 0.3)",
                  }}>
              Know the Limits
            </span>
            <h2 className="font-display font-bold text-brand-deep leading-[1.1] tracking-tight mb-5"
                style={{ fontSize: "clamp(28px,4vw,50px)" }}>
              What AI Cannot Do in Healthcare Marketing — The Human Boundary
            </h2>
            <p className="text-ink-secondary text-[17px]">
              Understanding these limits helps practice owners make investment decisions with clear, realistic expectations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {LIMITATIONS.map(({ Icon, title, body }, i) => (
              <div
                key={i}
                className="ui-card p-7 bg-white rounded-2xl"
                style={{ borderTop: "4px solid hsl(38 92% 50%)" }}
              >
                <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center"
                     style={{ background: "hsl(38 92% 50% / 0.1)" }}>
                  <Icon className="size-5" style={{ color: "hsl(38 92% 50%)" }} />
                </div>
                <h3 className="font-bold text-brand-deep text-[17px] mb-3 leading-snug">{title}</h3>
                <p className="text-ink-secondary text-[14px] leading-[1.7]">{body}</p>
              </div>
            ))}
          </div>

          <div className="bg-brand-deep rounded-2xl p-8 sm:p-10 mt-10 text-center">
            <p className="text-white font-bold leading-[1.4] max-w-2xl mx-auto"
               style={{ fontSize: "clamp(17px,2.5vw,22px)" }}>
              "Artificial intelligence in healthcare is not about replacing human expertise — it is about augmenting it."
            </p>
            <div className="font-mono-ui text-[11px] uppercase tracking-widest text-white/55 mt-4">
              — National Library of Medicine, NIH · PubMed Central 2025
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — GEO / AIO STRIP (LIGHT, diagonal bottom) */}
      <section
        className="bg-white py-24 sm:py-28"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 40px), 0 100%)",
        }}
      >
        <div className="container">
          <div className="max-w-[680px] mx-auto text-center mb-12">
            <span className="inline-flex items-center gap-2 font-mono-ui text-[11px] uppercase tracking-[0.12em] rounded-full px-3.5 py-1.5 mb-6 border"
                  style={{
                    color: "hsl(195 100% 44%)",
                    background: "hsl(195 100% 44% / 0.1)",
                    borderColor: "hsl(195 100% 44% / 0.3)",
                  }}>
              AI Search Era
            </span>
            <h2 className="font-display font-bold text-brand-deep leading-[1.1] tracking-tight mb-5"
                style={{ fontSize: "clamp(28px,4vw,50px)" }}>
              GEO and AIO: Preparing Your Practice for the AI Search Era
            </h2>
            <p className="text-ink-secondary text-[17px] leading-[1.75]">
              In 2026, a growing share of healthcare provider searches begin on AI interfaces — not Google's standard results page. Patients type questions into ChatGPT, Gemini, Perplexity, and Claude. Whether your practice is cited depends entirely on your content's structural authority.
            </p>
          </div>

          <div className="overflow-x-auto pb-4 mb-12 scrollbar-hide -mx-4 px-4">
            <div className="flex gap-4 min-w-max">
              {PLATFORMS.map((p) => (
                <div
                  key={p.name}
                  className="w-64 flex-shrink-0 rounded-2xl border border-[hsl(247_93%_64%/0.15)] p-6 bg-white shadow-sm"
                >
                  <div className="text-4xl mb-3">{p.emoji}</div>
                  <div className="font-bold text-brand-deep text-[17px] mb-2">{p.name}</div>
                  <p className="text-ink-secondary text-[13px] leading-[1.6]">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="font-mono-ui text-[11px] uppercase tracking-widest text-ink-secondary mb-6 text-center">
            What Makes Your Practice Citable by AI Assistants
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {REQUIREMENTS.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-4 items-start p-5 rounded-xl bg-[hsl(248_30%_97%)] border border-[hsl(247_93%_64%/0.1)]"
              >
                <Icon className="text-[hsl(247_93%_64%)] size-5 mt-0.5 shrink-0" />
                <div>
                  <div className="font-bold text-brand-deep text-[15px] mb-1">{title}</div>
                  <p className="text-ink-secondary text-[13px] leading-[1.6]">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services/search-engine-optimization"
              className="btn-primary-grad inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white text-[16px]"
            >
              Explore Our SEO &amp; AEO Services <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 9 — SERVICE CTA SPLIT (LIGHT right) */}
      <section className="flex flex-col lg:flex-row">
        <div className="hidden lg:block lg:w-1/2 relative min-h-[600px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80"
            alt="Vigorant healthcare marketing team reviewing custom dental website on multiple screens"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, hsl(248 49% 12% / 0.5) 0%, transparent 100%)" }}
          />
          <div
            className="absolute top-8 left-8 rounded-xl px-4 py-3"
            style={{
              background: "hsl(247 93% 64% / 0.9)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          >
            <span className="font-mono-ui text-white text-[12px] uppercase tracking-widest">
              ★ Healthcare-Exclusive Agency
            </span>
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-20 py-20 lg:py-24">
          <span className="inline-flex items-center gap-2 font-mono-ui text-[11px] uppercase tracking-[0.12em] text-[hsl(247_93%_64%)] bg-[hsl(247_93%_64%/0.08)] border border-[hsl(247_93%_64%/0.2)] rounded-full px-3.5 py-1.5 mb-6 self-start">
            Vigorant's Approach
          </span>
          <h2 className="font-display font-bold text-brand-deep leading-[1.1] tracking-tight mb-6"
              style={{ fontSize: "clamp(28px,4vw,50px)" }}>
            Every AI Strategy in This Guide — Built Into Your Practice Marketing
          </h2>
          <p className="text-ink-secondary text-[16px] leading-[1.78] mb-8 max-w-[480px]">
            Vigorant is a healthcare-exclusive growth marketing agency. We apply AI across every dimension of your marketing — website, SEO, AEO, paid advertising, email, reputation, and analytics — within a human-led strategy built specifically around your practice and your patients.
          </p>

          <div className="space-y-4">
            {[
              { Icon: Palette, t: "Custom healthcare websites engineered for patient acquisition and compliance" },
              { Icon: Search, t: "AI-powered SEO with AEO and GEO for ChatGPT, Gemini, Claude, and Perplexity" },
              { Icon: TrendingUp, t: "AI-optimised paid advertising with HIPAA-aware creative oversight" },
              { Icon: Mail, t: "Personalised patient communication sequences — acquisition and retention" },
              { Icon: Star, t: "Proactive AI reputation management across all major review platforms" },
              { Icon: BarChart3, t: "Predictive analytics with live dashboards and monthly strategy reviews" },
            ].map(({ Icon, t }, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center bg-[hsl(247_93%_64%/0.1)]">
                  <Icon className="text-[hsl(247_93%_64%)] size-4" />
                </div>
                <p className="text-[15px] text-brand-deep font-medium leading-snug">{t}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              to="/services/website-design-cro"
              className="btn-primary-grad inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-white text-[15px]"
            >
              Explore Our Web Design Service
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-[hsl(247_93%_64%)] border border-[hsl(247_93%_64%/0.4)] hover:bg-[hsl(247_93%_64%/0.06)] transition-colors text-[15px]"
            >
              Get a Free Practice Audit
            </Link>
          </div>

          <div className="mt-8 text-[12px] font-mono-ui text-ink-secondary flex flex-wrap gap-x-4 gap-y-2">
            <span>HIPAA-Aware</span><span>·</span>
            <span>ADA Compliant</span><span>·</span>
            <span>Healthcare-Exclusive</span><span>·</span>
            <span>AI + Human Strategy</span>
          </div>
        </div>
      </section>

      {/* SECTION 10 — FAQ (LIGHT) */}
      <section className="bg-[hsl(248_30%_97%)] py-24 sm:py-28">
        <div className="container">
          <div className="max-w-[640px] mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 font-mono-ui text-[11px] uppercase tracking-[0.12em] text-[hsl(247_93%_64%)] bg-[hsl(247_93%_64%/0.08)] border border-[hsl(247_93%_64%/0.2)] rounded-full px-3.5 py-1.5 mb-6">
              FAQ
            </span>
            <h2 className="font-display font-bold text-brand-deep leading-[1.1] tracking-tight mb-5"
                style={{ fontSize: "clamp(28px,4vw,50px)" }}>
              Frequently Asked Questions
            </h2>
            <p className="italic text-ink-secondary text-[17px]">
              Everything healthcare practice owners need to know about AI marketing, patient acquisition, and choosing the right AI-powered strategy.
            </p>
          </div>

          <Accordion type="single" collapsible className="max-w-[760px] mx-auto space-y-3">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white rounded-xl border border-brand-purple/15 overflow-hidden px-5"
              >
                <AccordionTrigger className="text-left font-semibold text-brand-deep text-[16px] hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-ink-secondary text-[15px] leading-[1.75] pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* SECTION 11 — FINAL CTA (DARK) */}
      <section
        className="relative overflow-hidden py-24 sm:py-28"
        style={{
          background:
            "linear-gradient(135deg, hsl(248 49% 15%) 0%, hsl(250 45% 19%) 50%, hsl(248 49% 12%) 100%)",
        }}
      >
        <div
          aria-hidden
          className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, hsl(247 93% 64% / 0.2), transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          aria-hidden
          className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, hsl(248 100% 75% / 0.15), transparent 70%)",
            filter: "blur(70px)",
          }}
        />

        <div className="container relative z-10 text-center max-w-[720px] mx-auto">
          <div className="font-mono-ui text-[11px] uppercase tracking-[0.18em] text-white/55 mb-6">
            READY TO GROW?
          </div>
          <h2 className="font-display font-bold text-white leading-[1.08] tracking-tight mb-6"
              style={{ fontSize: "clamp(32px,5vw,60px)" }}>
            The Practices Leading Their Markets in 2026 Are Applying AI Strategically.
          </h2>
          <p className="text-[hsl(248_100%_88%)] text-[17px] sm:text-[18px] leading-[1.7] max-w-[540px] mx-auto mb-10">
            Vigorant is a healthcare-exclusive growth marketing agency serving dental, medical, and chiropractic practices across the United States. We apply AI within a human-led strategy built for your practice, your patients, and your growth objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services/website-design-cro"
              className="btn-primary-grad inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-bold text-white text-[16px]"
            >
              Explore Our Web Design Service
            </Link>
            <Link
              to="/services/search-engine-optimization"
              className="border-2 border-white/25 text-white font-bold px-10 py-4 rounded-full hover:bg-white/10 transition-all inline-flex items-center justify-center"
            >
              Explore Our SEO Service
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-[600px] mx-auto">
            {[
              { Icon: ShieldCheck, l: "HIPAA-Aware" },
              { Icon: Globe, l: "Healthcare-Exclusive" },
              { Icon: Bot, l: "AI + Human Strategy" },
              { Icon: TrendingUp, l: "Conversion-First" },
            ].map(({ Icon, l }) => (
              <div key={l} className="text-center">
                <Icon className="text-[hsl(247_93%_64%)] mb-2 mx-auto size-6" />
                <div className="font-mono-ui text-[11px] uppercase tracking-wide text-white/65">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12 — FOOTER CREDIT LINE */}
      <div
        style={{
          textAlign: "center",
          fontSize: "11px",
          color: "hsl(248 15% 55%)",
          padding: "20px 16px",
          borderTop: "1px solid hsl(247 93% 64% / 0.1)",
          background: "#fff",
        }}
      >
        External Reference: NIH / PubMed Central — "Conceptual Model for the Integration of Marketing Strategies and Biomedical Innovation in Patient-Centered Care" (PMC12772582, 2026) —{" "}
        <a
          href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12772582/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "hsl(247 93% 64%)", textDecoration: "underline" }}
        >
          pmc.ncbi.nlm.nih.gov/articles/PMC12772582/
        </a>
        &nbsp;(Non-commercial institutional resource — NIH / National Library of Medicine)
      </div>

      <Footer />
    </div>
  );
}

// ── timeline sub-components ──────────────────────────────────────

function TimelineContent({ item }: { item: typeof TIMELINE[number] }) {
  const { Icon, title, body, chips, note, cta } = item;
  return (
    <div className="ui-card p-7 sm:p-8 bg-white rounded-2xl shadow-sm border border-[hsl(248_20%_92%)]">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
        style={{
          background:
            "linear-gradient(135deg, hsl(247 93% 64% / 0.12), hsl(248 100% 75% / 0.18))",
        }}
      >
        <Icon className="size-5 text-[hsl(247_93%_64%)]" />
      </div>
      <h3 className="font-bold text-brand-deep text-[19px] sm:text-[21px] mb-3 leading-snug">
        {title}
      </h3>
      <p className="text-ink-secondary text-[15px] leading-[1.75]">{body}</p>
      {chips && (
        <div className="flex flex-wrap gap-2 mt-4">
          {chips.map((c) => (
            <span
              key={c}
              className="text-[12px] font-mono-ui text-[hsl(247_93%_64%)] bg-[hsl(247_93%_64%/0.08)] border border-[hsl(247_93%_64%/0.2)] rounded-full px-3 py-1"
            >
              {c}
            </span>
          ))}
        </div>
      )}
      {note && (
        <p className="text-[13px] text-ink-secondary italic mt-3 leading-[1.6]">
          {note}
        </p>
      )}
      {cta && (
        <a
          href={cta.href}
          className="inline-flex items-center gap-1.5 font-semibold text-[hsl(247_93%_64%)] text-[14px] hover:underline mt-4"
        >
          {cta.label} →
        </a>
      )}
    </div>
  );
}

function TimelineImage({ item }: { item: typeof TIMELINE[number] }) {
  return (
    <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
      <img src={item.img} alt={item.alt} className="w-full h-full object-cover" />
    </div>
  );
}
