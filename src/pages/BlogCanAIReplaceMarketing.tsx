import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BarChart3, FileText, TrendingUp, Calendar, Eye, LineChart,
  Compass, Stethoscope, ShieldCheck, HeartHandshake, AlertTriangle, Brain,
  Bot, Users, Check, X, Lightbulb, ChevronDown, Scale, CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";

const BASE = "https://vigorant.com";
const CANON = `${BASE}/blog/can-ai-replace-marketing-team`;

/* ---------- CONTENT DATA ---------- */

const AI_CAN = [
  { Icon: BarChart3, title: "Data Analysis at Scale", body: "Analysing large datasets to identify patterns in customer behaviour, campaign performance, and market trends — faster and more comprehensively than any human team." },
  { Icon: FileText, title: "Content Drafting & Generation", body: "Generating blog posts, email copy, social captions, and ad variations at a pace no human team can match. Output requires clinical expert review before healthcare publication." },
  { Icon: TrendingUp, title: "Real-Time Ad Bid Optimisation", body: "Adjusting advertising bids in real time based on conversion probability signals across Google Ads, Meta, and programmatic platforms — continuously, without manual intervention." },
  { Icon: Calendar, title: "Scheduling & Publishing", body: "Publishing content across multiple channels, sending appointment reminders, triggering reactivation sequences, and managing email send-time optimisation automatically." },
  { Icon: Eye, title: "Reputation Monitoring", body: "Monitoring review platforms (Google, Healthgrades, Yelp, Zocdoc) in real time, triggering sentiment alerts, and generating suggested response drafts for human review." },
  { Icon: LineChart, title: "Reporting & Performance Dashboards", body: "Generating automated reports, visualising campaign data in live dashboards, detecting performance anomalies, and producing attribution modelling outputs." },
];

const AI_CANNOT = [
  { Icon: Compass, title: "Market Positioning Strategy", body: "Formulating a strategy that differentiates a practice from specific local competitors requires local market knowledge, clinical domain understanding, and strategic judgment no AI currently replicates." },
  { Icon: Stethoscope, title: "Clinical Content Accuracy Review", body: "Verifying that healthcare content is clinically accurate, uses current treatment protocols, and doesn't oversimplify complex conditions. A qualified clinician or expert copywriter must review everything before publication." },
  { Icon: ShieldCheck, title: "Healthcare Advertising Compliance", body: "Navigating FTC guidelines, state health authority rules, and HIPAA-aware data requirements in ad copy and patient communications. AI frequently generates language that crosses into unsubstantiated outcome claims." },
  { Icon: HeartHandshake, title: "Authentic Patient Trust Building", body: "Creating real physician bios, authentic patient testimonials used with proper consent, community involvement narratives, and the human storytelling that converts a website visitor into a booked patient." },
  { Icon: AlertTriangle, title: "Crisis & Reputation Management", body: "Managing the reputational fallout of sensitive patient complaints, negative media coverage, or a compliance incident. This requires human empathy, legal coordination, and real-time judgment under pressure." },
  { Icon: Brain, title: "Strategic Decision-Making Under Ambiguity", body: "Making complex strategic trade-offs when campaign data is contradictory, when a new competitor enters the market, or when a practice needs to pivot — these require senior strategic judgment, not pattern matching." },
];

const MARQUEE_ITEMS = [
  "Keyword Research", "PPC Bid Management", "Content Briefs", "Email Automation",
  "Social Scheduling", "Review Monitoring", "Analytics Dashboards", "A/B Testing",
  "Sentiment Analysis", "Lead Scoring", "Meta Tag Generation", "Audience Segmentation",
  "Performance Forecasting", "Appointment Reminders", "Report Generation", "Caption Drafting",
];

const TABS = [
  { label: "SEO & Content", ai: ["Keyword research", "Content brief generation", "Meta tag creation", "Internal link mapping", "On-page technical audits"], human: ["Clinical accuracy review and approval", "E-E-A-T author credentialing", "Brand voice consistency", "YMYL compliance oversight"] },
  { label: "Paid Advertising", ai: ["Real-time bid optimisation", "Audience segmentation", "Ad performance monitoring", "Budget pacing and allocation"], human: ["Campaign strategy and positioning", "Healthcare ad compliance review", "Offer and creative direction", "Unsubstantiated claim removal"] },
  { label: "Website Design", ai: ["Layout template generation", "Mobile responsiveness checks", "AI-generated copy drafts", "Page speed auditing"], human: ["HIPAA-aware architecture and BAA documentation", "ADA/WCAG 2.1 accessibility engineering", "Custom brand identity", "Patient trust design", "CRO strategy"] },
  { label: "Email Marketing", ai: ["Automated sequence deployment", "Send-time optimisation", "A/B subject line testing", "List segmentation"], human: ["Strategic lifecycle mapping", "Regulatory compliance review", "Healthcare-sensitive tone and messaging", "Clinical accuracy check"] },
  { label: "Social Media", ai: ["Post scheduling", "Hashtag research", "Caption drafting", "Engagement tracking"], human: ["Community management", "Reputation crisis response", "Authentic storytelling and content strategy", "Cultural sensitivity review"] },
  { label: "Reputation Mgmt", ai: ["Review monitoring across platforms", "Sentiment alerts", "Automated review request sequences"], human: ["Negative review response strategy", "Patient relationship nuance", "Escalation coordination with clinical and legal teams"] },
  { label: "Analytics", ai: ["Automated dashboard generation", "Anomaly detection", "Performance forecasting", "Attribution modelling"], human: ["Interpreting results in strategic business context", "Deciding when to pivot campaign direction", "Communicating findings to leadership"] },
  { label: "Brand & Positioning", ai: ["Competitor monitoring", "Trend identification", "Market gap analysis"], human: ["Brand narrative development", "Differentiation strategy", "Culture-based messaging", "Physician personal brand building"] },
  { label: "Patient Comms", ai: ["Appointment reminders and confirmations", "Care gap outreach", "Post-visit follow-up sequences", "FAQ chatbot responses"], human: ["Complex patient queries requiring clinical knowledge", "Sensitive health conversations requiring empathy", "Crisis support communications"] },
];

const SCALE_AI = [
  { t: "Speed & Scale", s: "Executes at machine velocity" },
  { t: "Pattern Recognition", s: "Finds signals in large data sets" },
  { t: "Automation", s: "24/7 campaign execution" },
  { t: "Cost Efficiency", s: "Reduces repetitive task cost" },
];
const SCALE_HUMAN = [
  { t: "Strategic Judgment", s: "Sees the full competitive picture" },
  { t: "Clinical Accuracy", s: "Protects patients and practice" },
  { t: "Compliance Expertise", s: "Navigates HIPAA and FTC rules" },
  { t: "Authentic Trust", s: "Converts visitors into patients" },
];

const RISKS = [
  { sev: "HIGH IMPACT", color: "hsl(0 70% 55%)", title: "Clinical Content Inaccuracies", body: "AI-generated healthcare content may contain clinical errors, outdated protocols, or oversimplified explanations that mislead patients and expose the practice to liability." },
  { sev: "HIGHEST RISK", color: "hsl(0 70% 45%)", title: "HIPAA Compliance Exposure", body: "AI marketing tools do not automatically comply with HIPAA. Deploying AI-generated forms or automated patient communications without specialist review creates real regulatory exposure and potential penalties.", strong: true },
  { sev: "MODERATE RISK", color: "hsl(38 92% 50%)", title: "Generic Website Underperformance", body: "AI-generated websites lack patient trust signals, healthcare SEO architecture, and the authentic brand identity that drives appointment conversion. The result is a digital presence that looks adequate but performs poorly." },
  { sev: "COMMON RISK", color: "hsl(38 92% 50%)", title: "Ad Copy Compliance Violations", body: "AI-generated ad copy defaults to unsubstantiated performance language — 'eliminate back pain permanently' — that violates FTC healthcare advertising guidelines. Human review of every ad before deployment is mandatory." },
];

const FAQS = [
  { q: "Can AI fully replace a healthcare marketing team?", a: "No. AI cannot fully replace a healthcare marketing team. While AI tools automate data analysis, content drafts, bid management, scheduling, and performance monitoring effectively, they lack the clinical knowledge, strategic judgment, empathy, compliance expertise, and brand storytelling capability that healthcare marketing requires. The World Economic Forum's Future of Jobs Report 2025 confirms that AI is transforming — not eliminating — marketing roles, with the highest-value work shifting toward strategy, creativity, and human relationship management." },
  { q: "What marketing tasks can AI handle reliably for a dental or medical practice?", a: "AI can reliably handle: keyword research and SEO content brief generation, PPC bid management and ad performance monitoring, email automation and send-time optimisation, appointment reminder sequences, review request messages, social media post scheduling, basic caption drafting, analytics dashboard generation, and real-time reputation monitoring. All AI outputs in healthcare must be reviewed by a qualified specialist before publication or deployment." },
  { q: "Is an AI website builder good enough for a dental or chiropractic practice website?", a: "AI website builders can produce a basic, functional site quickly and at low cost, but they do not automatically address the requirements that healthcare practice websites need: HIPAA-aware data collection architecture, ADA/WCAG accessibility compliance, custom brand identity that builds patient trust, deep healthcare SEO structure, E-E-A-T signals, and conversion rate optimisation. For practices relying on their website as a primary patient acquisition channel, a specialist healthcare website design agency consistently delivers better long-term results than an AI-generated website." },
  { q: "What are the biggest risks of using AI alone for healthcare marketing?", a: "The biggest risks include: publishing clinically inaccurate content that creates patient safety risk or regulatory liability; failing to meet HIPAA requirements for patient data handling; deploying generic AI-generated websites that lack patient trust signals and underperform on healthcare SEO; missing compliance requirements in advertising copy; and losing the authentic brand voice and human connection that drives patient loyalty. Each of these risks requires human expertise to prevent and manage." },
  { q: "How does AI website design differ from a professionally built healthcare website?", a: "AI website design produces template-based layouts quickly, with AI-generated copy and auto-selected stock imagery. A professionally built healthcare website is custom-designed around the practice's brand identity, real physicians and staff, verified patient trust signals, HIPAA-aware forms, healthcare-specific SEO architecture — including Schema.org structured data for medical entities — ADA-compliant accessibility, and a patient journey optimised for appointment conversions." },
  { q: "Will AI reduce the cost of marketing for my healthcare practice?", a: "AI can reduce the cost of executing certain marketing tasks — particularly content production, ad management, and automated patient communications — by reducing the human hours required. However, using AI without skilled human oversight often produces poor results that waste budget. The most cost-effective approach is an AI-augmented human-led strategy, where AI handles volume and speed while experienced specialists handle quality control, compliance, and strategic direction." },
  { q: "What is the difference between AEO, GEO, and traditional SEO for healthcare practices?", a: "Traditional SEO optimises your website to rank in conventional Google search results. AEO (Answer Engine Optimisation) structures your content to be selected as the source for direct answers in Google's AI Overviews and featured snippets. GEO (Generative Engine Optimisation) goes further — it structures your content to be cited by generative AI assistants like ChatGPT, Google Gemini, Perplexity, Microsoft Copilot, and Claude when patients ask those tools for healthcare provider recommendations." },
  { q: "How should a healthcare practice owner think about AI versus hiring a marketing agency?", a: "AI tools and a specialist marketing agency serve different functions and are not mutually exclusive. AI tools accelerate execution of specific, defined tasks. A specialist healthcare marketing agency like Vigorant provides strategic direction, compliance expertise, custom healthcare website design and development, integrated campaign management, and the domain-specific knowledge that no AI tool currently replicates. The strongest outcomes come from working with an agency that uses AI intelligently within a human-led strategic framework — not from choosing one over the other." },
];

/* ---------- Reveal-on-scroll hook ---------- */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

const Reveal = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 600ms cubic-bezier(0.16,1,0.3,1), transform 600ms cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {children}
    </div>
  );
};

/* ---------- JSON-LD ---------- */
const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${CANON}#article`,
      headline: "Can AI Replace Your Marketing Team? The Truth Every Business Owner Should Know",
      description: "An evidence-based guide examining what AI marketing tools can and cannot do, where human expertise remains irreplaceable, and how the hybrid AI-plus-human model delivers the strongest marketing results.",
      author: { "@type": "Organization", name: "Vigorant", url: BASE },
      publisher: { "@type": "Organization", name: "Vigorant", logo: { "@type": "ImageObject", url: `${BASE}/logo.png` } },
      datePublished: "2026-06-15",
      dateModified: "2026-06-15",
      mainEntityOfPage: CANON,
      inLanguage: "en-US",
      citation: {
        "@type": "CreativeWork",
        name: "Future of Jobs Report 2025",
        url: "https://www.weforum.org/publications/the-future-of-jobs-report-2025/",
        author: { "@type": "Organization", name: "World Economic Forum" },
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
        { "@type": "ListItem", position: 3, name: "Can AI Replace Your Marketing Team?", item: CANON },
      ],
    },
  ],
};

/* ---------- PAGE ---------- */

export default function BlogCanAIReplaceMarketing() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Can AI Replace Your Marketing Team? The Truth Every Business Owner Needs to Know | Vigorant</title>
        <meta name="description" content="Can AI really replace your marketing team? Get the evidence-based answer — what AI does well, where human expertise is irreplaceable, and what this means specifically for dental, medical, and chiropractic practice owners." />
        <link rel="canonical" href={CANON} />
        <meta property="og:title" content="Can AI Replace Your Marketing Team? What Healthcare Practice Owners Must Know in 2026" />
        <meta property="og:description" content="World Economic Forum data, real AI limitations, and what it all means for your dental, medical, or chiropractic practice marketing." />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(SCHEMA)}</script>
      </Helmet>

      <Nav />

      {/* ============ SECTION 1 — LIGHT "QUESTION" HERO ============ */}
      <section
        className="relative overflow-hidden bg-white"
        style={{ paddingTop: "9rem", paddingBottom: "5rem" }}
      >
        {/* soft animated decorative blobs */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-32 -right-24 w-[600px] h-[600px] rounded-full"
            style={{
              background: "radial-gradient(circle, hsl(247 93% 64% / 0.14), transparent 70%)",
              filter: "blur(80px)",
              animation: "bgShift 9s ease-in-out infinite",
            }}
          />
          <div
            className="absolute -bottom-24 -left-16 w-[480px] h-[480px] rounded-full"
            style={{
              background: "radial-gradient(circle, hsl(248 100% 75% / 0.16), transparent 70%)",
              filter: "blur(70px)",
              animation: "bgShift 11s ease-in-out infinite reverse",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "radial-gradient(hsl(248 49% 15% / 0.08) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
        </div>

        <style>{`
          @keyframes bgShift { 0%,100%{transform:translate(0,0) scale(1);opacity:1} 50%{transform:translate(10px,-10px) scale(1.05);opacity:0.85} }
          @keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        `}</style>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="font-mono-ui text-[11px] uppercase tracking-widest text-ink-secondary/70 mb-8"
          >
            <Link to="/" className="hover:text-brand-purple transition-colors">Home</Link>
            <span className="mx-2 opacity-50">›</span>
            <Link to="/blog" className="hover:text-brand-purple transition-colors">Blog</Link>
            <span className="mx-2 opacity-50">›</span>
            <span className="text-brand-deep">AI Strategy</span>
          </nav>

          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 font-mono-ui text-[11px] uppercase tracking-[0.14em] mb-8 rounded-full px-4 py-1.5"
            style={{
              color: "hsl(247 93% 64%)",
              background: "hsl(247 93% 64% / 0.08)",
              border: "1px solid hsl(247 93% 64% / 0.25)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse" />
            The Question Every Practice Owner Is Asking
          </div>

          {/* THE QUESTION */}
          <h1
            className="font-display font-bold text-brand-deep text-center leading-[1.04] tracking-[-0.03em] mb-0 max-w-[1100px]"
            style={{ fontSize: "clamp(36px, 7vw, 88px)" }}
          >
            Can AI{" "}
            <span
              style={{
                background: "linear-gradient(90deg, hsl(247 93% 64%), hsl(248 100% 75%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Replace
            </span>
            <br className="hidden sm:block" />{" "}
            Your Marketing Team?
          </h1>

          {/* Divider */}
          <div className="w-16 h-px mx-auto mt-10 mb-6" style={{ background: "hsl(247 93% 64% / 0.4)" }} />

          {/* The Short Answer */}
          <div className="font-mono-ui uppercase tracking-[0.2em] text-[12px] mb-3" style={{ color: "hsl(247 93% 64%)" }}>
            The Short Answer
          </div>
          <p
            className="text-brand-deep font-bold max-w-[720px] leading-[1.4]"
            style={{ fontSize: "clamp(17px, 2.4vw, 24px)" }}
          >
            No — but it is fundamentally reshaping what marketing teams do, how they do it,
            and what skills drive competitive advantage.
          </p>

          {/* Meta row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono-ui text-[12px] text-ink-secondary">
            <span>Vigorant Healthcare Marketing Team</span>
            <span className="opacity-40">·</span>
            <span>June 2026</span>
            <span className="opacity-40">·</span>
            <span>11 min read</span>
            <span className="opacity-40">·</span>
            <span>Source: WEF Future of Jobs Report 2025</span>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#breakdown"
              className="btn-primary-grad px-8 py-4 rounded-full font-bold text-white inline-flex items-center justify-center gap-2"
            >
              See the Full Breakdown <ArrowRight className="size-4" />
            </a>
            <Link
              to="/services/website-design"
              className="border border-brand-deep/15 text-brand-deep font-semibold px-8 py-4 rounded-full hover:bg-brand-deep/5 transition-all inline-flex items-center justify-center"
            >
              Explore Our Services
            </Link>
          </div>

          {/* WEF banner */}
          <div
            className="mt-14 max-w-[680px] w-full mx-auto px-6 py-5 rounded-2xl flex flex-col sm:flex-row items-center gap-4 text-left"
            style={{
              border: "1px solid hsl(247 93% 64% / 0.2)",
              background: "hsl(247 93% 64% / 0.04)",
            }}
          >
            <div
              className="font-display font-bold leading-none shrink-0"
              style={{ fontSize: "48px", color: "hsl(247 93% 64%)" }}
            >
              86%
            </div>
            <div className="hidden sm:block w-px h-12 bg-brand-deep/10" />
            <div>
              <div className="font-bold text-brand-deep text-[15px]">
                of businesses will be affected by AI and information processing by 2030
              </div>
              <div className="font-mono-ui text-[11px] text-ink-secondary uppercase tracking-widest mt-1">
                — World Economic Forum · Future of Jobs Report 2025
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-12 flex flex-col items-center gap-2">
            <div className="font-mono-ui text-[10px] uppercase tracking-widest text-ink-secondary/50">
              Scroll for the evidence
            </div>
            <ChevronDown className="text-brand-purple/50 size-5 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ============ SECTION 2 — LIGHT CAPABILITY MARQUEE ============ */}
      <section
        className="relative py-6 border-y overflow-hidden"
        style={{
          background: "hsl(248 30% 97%)",
          borderColor: "hsl(247 93% 64% / 0.12)",
        }}
      >
        <div className="absolute inset-y-0 left-0 w-16 sm:w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, hsl(248 30% 97%), transparent)" }} />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, hsl(248 30% 97%), transparent)" }} />
        <div className="flex gap-0 animate-logo-marquee w-max">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <div key={i} className="shrink-0 flex items-center gap-3 px-6 font-mono-ui text-[12px] text-ink-secondary whitespace-nowrap">
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "hsl(247 93% 64% / 0.5)" }} />
            </div>
          ))}
        </div>
      </section>

      {/* ============ SECTION 3 — AI CAN / AI CANNOT SPLIT ============ */}
      <section id="breakdown" className="relative">
        <div className="grid lg:grid-cols-2">
          {/* LEFT — Dark */}
          <div
            className="px-6 sm:px-10 lg:px-14 py-20 lg:py-28"
            style={{ background: "linear-gradient(135deg, hsl(248 49% 15%), hsl(250 45% 19%))" }}
          >
            <Reveal>
              <div className="mb-12 max-w-[480px]">
                <div className="font-mono-ui text-[11px] uppercase tracking-[0.14em] mb-3" style={{ color: "hsl(247 93% 64%)" }}>
                  AI Handles This Well
                </div>
                <h2 className="font-display font-bold text-white leading-[1.1] tracking-tight" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
                  What AI Can<br />Actually Do
                </h2>
                <p className="text-[15px] mt-3 leading-[1.7]" style={{ color: "hsl(248 100% 88% / 0.7)" }}>
                  Modern AI marketing tools automate specific, well-defined tasks with remarkable efficiency — reducing time and cost of execution.
                </p>
              </div>
            </Reveal>
            <div>
              {AI_CAN.map((item, i) => (
                <Reveal key={i}>
                  <div className="flex gap-4 items-start py-5 border-b last:border-0" style={{ borderColor: "hsl(247 93% 64% / 0.15)" }}>
                    <div
                      className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, hsl(247 93% 64% / 0.2), hsl(248 100% 75% / 0.15))" }}
                    >
                      <item.Icon className="size-5" style={{ color: "hsl(247 93% 64%)" }} />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-white text-[16px] mb-1">{item.title}</div>
                      <div className="text-[14px] leading-[1.68]" style={{ color: "hsl(248 100% 88% / 0.65)" }}>{item.body}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* RIGHT — Light */}
          <div className="bg-white px-6 sm:px-10 lg:px-14 py-20 lg:py-28">
            <Reveal>
              <div className="mb-12 max-w-[480px]">
                <div className="font-mono-ui text-[11px] uppercase tracking-[0.14em] mb-3" style={{ color: "hsl(38 92% 50%)" }}>
                  This Still Needs Humans
                </div>
                <h2 className="font-display font-bold text-brand-deep leading-[1.1] tracking-tight" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
                  What AI Cannot<br />Replace
                </h2>
                <p className="text-ink-secondary text-[15px] mt-3 leading-[1.7]">
                  The tasks that most directly drive patient acquisition and retention in healthcare sit in the domain of human judgment, empathy, and expertise.
                </p>
              </div>
            </Reveal>
            <div>
              {AI_CANNOT.map((item, i) => (
                <Reveal key={i}>
                  <div className="flex gap-4 items-start py-5 border-b last:border-0" style={{ borderColor: "hsl(248 20% 90%)" }}>
                    <div className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center" style={{ background: "hsl(38 92% 50% / 0.1)" }}>
                      <item.Icon className="size-5" style={{ color: "hsl(38 92% 50%)" }} />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-brand-deep text-[16px] mb-1">{item.title}</div>
                      <div className="text-ink-secondary text-[14px] leading-[1.68]">{item.body}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 4 — LIGHT — WEF EVIDENCE ============ */}
      <section className="py-20 sm:py-24" style={{ background: "hsl(248 30% 97%)" }}>
        <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-[1fr_440px] gap-12 lg:gap-16 items-center">
          <Reveal>
            <div>
              <div className="font-mono-ui text-[11px] uppercase tracking-widest mb-4" style={{ color: "hsl(247 93% 64%)" }}>
                The Evidence
              </div>
              <h2 className="font-display font-bold text-brand-deep leading-[1.1] tracking-tight mb-6" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
                AI Is Transforming Roles —<br />Not Eliminating Them
              </h2>
              <div className="text-ink-secondary text-[16px] leading-[1.78] space-y-4">
                <p>According to the World Economic Forum's Future of Jobs Report 2025, AI and information processing are projected to affect 86% of businesses by 2030. The WEF study of over 1,000 global employers found that while 40% anticipate reducing headcount in roles AI can automate, 80% plan to upskill their workers.</p>
                <p>This is the dominant business response to AI: integration, not replacement. The highest-value marketing work is shifting toward strategy, creativity, and human relationship management — precisely the dimensions that are most critical in healthcare marketing.</p>
              </div>

              <div
                className="relative mt-10 rounded-2xl p-7 sm:p-8 bg-white"
                style={{ border: "1px solid hsl(247 93% 64% / 0.2)" }}
              >
                <span className="absolute -top-6 left-5 font-display font-bold leading-none select-none" style={{ fontSize: "80px", color: "hsl(247 93% 64% / 0.18)" }}>"</span>
                <p className="font-bold text-brand-deep text-[17px] leading-[1.6] italic">
                  "AI and information processing will affect 86% of businesses by 2030. The evidence suggests AI will create more jobs than it displaces — but only if companies invest deliberately in people and redesign work."
                </p>
                <div className="font-mono-ui text-[11px] uppercase tracking-widest text-ink-secondary mt-4">
                  — World Economic Forum · Future of Jobs Report 2025
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative mx-auto max-w-[420px]">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
                alt="Business strategy meeting showing team reviewing data on whiteboard and laptop"
                className="rounded-2xl object-cover w-full aspect-[3/4] shadow-xl"
                loading="lazy"
              />
              <div
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 w-[200px] shadow-xl"
                style={{ border: "1px solid hsl(247 93% 64% / 0.15)" }}
              >
                <div className="font-display font-bold text-brand-deep leading-none" style={{ fontSize: "42px" }}>80%</div>
                <div className="font-mono-ui text-[11px] uppercase tracking-wide text-ink-secondary mt-2">of employers plan to upskill workers</div>
                <div className="font-mono-ui text-[10px] mt-1" style={{ color: "hsl(247 93% 64%)" }}>WEF 2025</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ SECTION 5 — LIGHT — TABBED BREAKDOWN ============ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="max-w-[680px] mx-auto text-center mb-10">
              <div className="inline-block font-mono-ui text-[11px] uppercase tracking-[0.14em] mb-4 rounded-full px-4 py-1.5"
                style={{ color: "hsl(247 93% 64%)", background: "hsl(247 93% 64% / 0.08)", border: "1px solid hsl(247 93% 64% / 0.25)" }}>
                AI vs. Human — Function by Function
              </div>
              <h2 className="font-display font-bold text-brand-deep leading-[1.1] tracking-tight" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
                Every Marketing Function,<br />Honestly Evaluated
              </h2>
              <p className="italic text-ink-secondary text-[17px] mt-5">
                Select a marketing function below to see exactly where AI excels and where human expertise remains essential for healthcare practices.
              </p>
            </div>
          </Reveal>

          {/* Tab strip */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {TABS.map((t, i) => {
              const active = i === activeTab;
              return (
                <button
                  key={t.label}
                  onClick={() => setActiveTab(i)}
                  className="font-mono-ui text-[11px] uppercase tracking-[0.1em] px-4 py-2 rounded-full transition-all"
                  style={
                    active
                      ? { background: "hsl(247 93% 64%)", color: "white", border: "1px solid hsl(247 93% 64%)" }
                      : { background: "transparent", color: "hsl(248 15% 45%)", border: "1px solid hsl(247 93% 64% / 0.2)" }
                  }
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          {/* Tab panel */}
          <div
            key={activeTab}
            className="rounded-2xl p-6 sm:p-10 grid lg:grid-cols-2 gap-6 lg:gap-10"
            style={{
              background: "hsl(248 30% 97%)",
              animation: "fadeIn 400ms cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <style>{`@keyframes fadeIn { from {opacity:0; transform:translateY(8px)} to {opacity:1; transform:translateY(0)} }`}</style>
            {/* AI sub-panel */}
            <div className="rounded-xl p-6" style={{ background: "hsl(247 93% 64% / 0.06)", border: "1px solid hsl(247 93% 64% / 0.15)" }}>
              <div className="flex items-center gap-2 mb-5">
                <Bot className="size-5" style={{ color: "hsl(247 93% 64%)" }} />
                <span className="font-mono-ui text-[11px] uppercase tracking-widest" style={{ color: "hsl(247 93% 64%)" }}>
                  AI Handles Well
                </span>
              </div>
              <ul>
                {TABS[activeTab].ai.map((b, i) => (
                  <li key={i} className="flex gap-2 items-start text-[14px] text-brand-deep mb-3">
                    <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: "hsl(247 93% 64%)" }} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Human sub-panel */}
            <div className="rounded-xl p-6" style={{ background: "hsl(38 92% 50% / 0.05)", border: "1px solid hsl(38 92% 50% / 0.2)" }}>
              <div className="flex items-center gap-2 mb-5">
                <Users className="size-5" style={{ color: "hsl(38 92% 50%)" }} />
                <span className="font-mono-ui text-[11px] uppercase tracking-widest" style={{ color: "hsl(38 92% 50%)" }}>
                  Human Expertise Essential
                </span>
              </div>
              <ul>
                {TABS[activeTab].human.map((b, i) => (
                  <li key={i} className="flex gap-2 items-start text-[14px] text-brand-deep mb-3">
                    <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: "hsl(38 92% 50%)" }} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="font-mono-ui text-[12px] text-center text-ink-secondary mt-8 italic max-w-2xl mx-auto">
            Key Pattern: In every function, AI excels at volume, speed, and data processing. Human expertise handles accuracy, judgment, compliance, and authentic connection.
          </p>
        </div>
      </section>

      {/* ============ SECTION 6 — DARK — SCALES METAPHOR ============ */}
      <section
        className="py-20 sm:py-28 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, hsl(248 49% 15%) 0%, hsl(250 45% 19%) 50%, hsl(248 49% 12%) 100%)" }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-12 max-w-[640px] mx-auto">
              <div className="inline-block font-mono-ui text-[11px] uppercase tracking-[0.14em] mb-4 rounded-full px-4 py-1.5"
                style={{ color: "hsl(247 93% 64%)", background: "hsl(247 93% 64% / 0.12)", border: "1px solid hsl(247 93% 64% / 0.3)" }}>
                The Balance
              </div>
              <h2 className="font-display font-bold text-white leading-[1.1] tracking-tight" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
                Why the Best Practices Use Both —<br />Not One or the Other
              </h2>
              <p className="text-[17px] mt-5" style={{ color: "hsl(248 100% 88% / 0.7)" }}>
                AI and human expertise are not in competition. They are complementary weights that, together, create a marketing operation greater than either alone.
              </p>
            </div>
          </Reveal>

          {/* Desktop scales */}
          <div className="hidden lg:grid grid-cols-2 gap-8 max-w-5xl mx-auto mt-12 relative">
            <div>
              <div className="text-center font-mono-ui text-[11px] uppercase tracking-widest mb-4" style={{ color: "hsl(247 93% 64%)" }}>
                AI Capabilities
              </div>
              <div className="space-y-2 pb-3 border-b-2" style={{ borderColor: "hsl(247 93% 64% / 0.5)" }}>
                {SCALE_AI.map((w, i) => (
                  <div key={i} className="rounded-lg p-3 text-center" style={{ background: "hsl(247 93% 64% / 0.12)", border: "1px solid hsl(247 93% 64% / 0.2)" }}>
                    <div className="font-bold text-white text-[13px]">{w.t}</div>
                    <div className="text-[11px] mt-0.5" style={{ color: "hsl(248 100% 88% / 0.6)" }}>{w.s}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-center font-mono-ui text-[11px] uppercase tracking-widest mb-4" style={{ color: "hsl(38 92% 50%)" }}>
                Human Expertise
              </div>
              <div className="space-y-2 pb-3 border-b-2" style={{ borderColor: "hsl(38 92% 50% / 0.5)" }}>
                {SCALE_HUMAN.map((w, i) => (
                  <div key={i} className="rounded-lg p-3 text-center" style={{ background: "hsl(38 92% 50% / 0.1)", border: "1px solid hsl(38 92% 50% / 0.25)" }}>
                    <div className="font-bold text-white text-[13px]">{w.t}</div>
                    <div className="text-[11px] mt-0.5" style={{ color: "hsl(248 100% 88% / 0.6)" }}>{w.s}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Center fulcrum */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "hsl(247 93% 64%)", boxShadow: "0 0 28px hsl(247 93% 64% / 0.6)" }}>
                <Scale className="text-white size-5" />
              </div>
            </div>
          </div>

          {/* Mobile fallback */}
          <div className="lg:hidden grid gap-6 mt-8">
            <div>
              <div className="font-mono-ui text-[11px] uppercase tracking-widest mb-3" style={{ color: "hsl(247 93% 64%)" }}>
                ▼ AI Capabilities
              </div>
              <div className="space-y-2">
                {SCALE_AI.map((w, i) => (
                  <div key={i} className="rounded-lg p-3" style={{ background: "hsl(247 93% 64% / 0.12)", border: "1px solid hsl(247 93% 64% / 0.2)" }}>
                    <div className="font-bold text-white text-[13px]">{w.t}</div>
                    <div className="text-[11px] mt-0.5" style={{ color: "hsl(248 100% 88% / 0.6)" }}>{w.s}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="font-mono-ui text-[11px] uppercase tracking-widest mb-3" style={{ color: "hsl(38 92% 50%)" }}>
                ▼ Human Expertise
              </div>
              <div className="space-y-2">
                {SCALE_HUMAN.map((w, i) => (
                  <div key={i} className="rounded-lg p-3" style={{ background: "hsl(38 92% 50% / 0.1)", border: "1px solid hsl(38 92% 50% / 0.25)" }}>
                    <div className="font-bold text-white text-[13px]">{w.t}</div>
                    <div className="text-[11px] mt-0.5" style={{ color: "hsl(248 100% 88% / 0.6)" }}>{w.s}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center text-[13px] mt-12 font-mono-ui uppercase tracking-wider" style={{ color: "hsl(248 100% 88% / 0.5)" }}>
            The strongest healthcare marketing outcomes come from both sides in balance.
          </p>
        </div>
      </section>

      {/* ============ SECTION 7 — LIGHT — AI WEBSITE BUILDER ============ */}
      <section className="py-20 sm:py-24" style={{ background: "hsl(248 30% 97%)" }}>
        <div className="container mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center max-w-[680px] mx-auto mb-12">
              <h2 className="font-display font-bold text-brand-deep leading-[1.1] tracking-tight" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
                AI Website Builders — The Honest Trade-Off
              </h2>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <Reveal>
              <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid hsl(247 93% 64% / 0.15)" }}>
                <div className="px-6 py-4 border-b" style={{ background: "hsl(247 93% 64% / 0.08)", borderColor: "hsl(247 93% 64% / 0.1)" }}>
                  <span className="font-mono-ui text-[11px] uppercase tracking-widest" style={{ color: "hsl(247 93% 64%)" }}>
                    AI Website Builders — What You Get
                  </span>
                </div>
                <div className="bg-white px-6 py-6 space-y-4">
                  {[
                    "A functional, mobile-responsive website generated within hours",
                    "AI-drafted copy for service pages, About pages, and contact sections",
                    "Auto-selected stock imagery and a basic colour scheme",
                    "Template-based on-page SEO fields — title tag, meta description",
                    "Basic contact form with standard fields",
                  ].map((t, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <Check className="size-4 mt-1 shrink-0" style={{ color: "hsl(247 93% 64%)" }} />
                      <span className="text-[14px] text-brand-deep leading-[1.6]">{t}</span>
                    </div>
                  ))}
                  <div className="rounded-xl p-4 mt-4 italic text-[13px] text-ink-secondary"
                    style={{ background: "hsl(247 93% 64% / 0.04)", border: "1px solid hsl(247 93% 64% / 0.1)" }}>
                    For a new practice that needs an immediate placeholder presence while investing in full custom development, this may be a reasonable short-term solution.
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-2xl overflow-hidden" style={{ border: "2px solid hsl(38 92% 50% / 0.35)" }}>
                <div className="px-6 py-4 border-b" style={{ background: "hsl(38 92% 50% / 0.08)", borderColor: "hsl(38 92% 50% / 0.15)" }}>
                  <span className="font-mono-ui text-[11px] uppercase tracking-widest" style={{ color: "hsl(38 92% 50%)" }}>
                    What's Missing — The Critical Gaps
                  </span>
                </div>
                <div className="bg-white px-6 py-6 space-y-4">
                  {[
                    "HIPAA-aware form architecture with encrypted data handling and BAA documentation",
                    "ADA / WCAG 2.1 accessibility compliance engineered into the design system",
                    "Custom brand identity reflecting real physicians and real patient community",
                    "Healthcare SEO architecture: condition-specific landing pages, Schema.org medical entity markup",
                    "AEO and GEO optimisation for ChatGPT, Gemini, Perplexity, Copilot, and Claude",
                    "Conversion rate optimisation based on patient psychology research",
                    "E-E-A-T signals: verified author credentials, clinical citations, institutional affiliations",
                  ].map((t, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <X className="size-4 mt-1 shrink-0" style={{ color: "hsl(38 92% 50%)" }} />
                      <span className="text-[14px] text-brand-deep leading-[1.6]">{t}</span>
                    </div>
                  ))}
                  <div className="mt-6">
                    <Link to="/services/website-design" className="btn-primary-grad inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white text-[14px]">
                      See Our Healthcare Web Design Service <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-10 px-6 py-5 rounded-2xl bg-white flex gap-4 items-start" style={{ border: "1px solid hsl(247 93% 64% / 0.18)" }}>
              <Lightbulb className="size-5 mt-0.5 shrink-0" style={{ color: "hsl(247 93% 64%)" }} />
              <div>
                <p className="text-brand-deep text-[14px] leading-[1.7]">
                  The gap between an AI-generated website and a purpose-built healthcare website is not cosmetic. It directly affects how many patients book appointments, how well the site ranks for competitive local search terms, and whether the site survives an ADA compliance review.
                </p>
                <Link to="/services/website-design" className="font-mono-ui text-[11px] mt-2 inline-block hover:underline" style={{ color: "hsl(247 93% 64%)" }}>
                  Vigorant Website Design & CRO →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ SECTION 8 — LIGHT — RISK MATRIX ============ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center max-w-[640px] mx-auto mb-12">
              <div className="inline-block font-mono-ui text-[11px] uppercase tracking-[0.14em] mb-4 rounded-full px-4 py-1.5"
                style={{ color: "hsl(38 92% 50%)", background: "hsl(38 92% 50% / 0.08)", border: "1px solid hsl(38 92% 50% / 0.3)" }}>
                Risk Assessment
              </div>
              <h2 className="font-display font-bold text-brand-deep leading-[1.1] tracking-tight" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
                The 4 Biggest Risks of Using AI Alone in Healthcare Marketing
              </h2>
              <p className="italic text-ink-secondary text-[17px] mt-5">
                Each of these risks requires specific human expertise to prevent and manage. They are not hypothetical — they are active compliance and patient safety concerns.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {RISKS.map((r, i) => (
              <Reveal key={i}>
                <div
                  className="rounded-2xl p-6 h-full"
                  style={{
                    background: `${r.color.replace(")", " / 0.08)").replace("hsl(", "hsl(")}`,
                    border: `${r.strong ? "2px" : "1px"} solid ${r.color.replace(")", " / 0.3)").replace("hsl(", "hsl(")}`,
                  }}
                >
                  <div className="inline-flex items-center gap-1.5 font-mono-ui text-[10px] uppercase tracking-wide rounded-full px-3 py-1 mb-4"
                    style={{ color: r.color, background: r.color.replace(")", " / 0.1)").replace("hsl(", "hsl(") }}>
                    ● {r.sev}
                  </div>
                  <div className="font-bold text-brand-deep text-[15px] mb-2">{r.title}</div>
                  <div className="text-ink-secondary text-[13px] leading-[1.6]">{r.body}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80"
              alt="Healthcare compliance and risk management professional reviewing marketing documentation"
              className="mt-14 rounded-2xl w-full aspect-[21/7] object-cover object-center shadow-lg"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      {/* ============ SECTION 9 — LIGHT — THE MODEL THAT WORKS ============ */}
      <section className="py-20 sm:py-24" style={{ background: "hsl(248 30% 97%)" }}>
        <div className="container mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center max-w-[640px] mx-auto mb-12">
              <div className="inline-block font-mono-ui text-[11px] uppercase tracking-[0.14em] mb-4 rounded-full px-4 py-1.5"
                style={{ color: "hsl(247 93% 64%)", background: "hsl(247 93% 64% / 0.08)", border: "1px solid hsl(247 93% 64% / 0.25)" }}>
                The Answer
              </div>
              <h2 className="font-display font-bold text-brand-deep leading-[1.1] tracking-tight" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
                The Model That Actually Works:<br />AI-Augmented, Human-Led
              </h2>
              <p className="text-ink-secondary text-[17px] mt-5">
                The practices achieving the strongest marketing results in 2026 have rejected the false choice between AI and human expertise. They use both.
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 mt-10">
            <Reveal>
              <div className="bg-white rounded-2xl p-6 sm:p-8 h-full" style={{ border: "1px solid hsl(247 93% 64% / 0.15)" }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "hsl(247 93% 64% / 0.1)" }}>
                    <Bot className="size-5" style={{ color: "hsl(247 93% 64%)" }} />
                  </div>
                  <span className="font-bold text-brand-deep text-[17px]">AI Handles</span>
                </div>
                {[
                  "Data collection, analysis, and pattern identification across large datasets",
                  "Content drafting that experienced specialists then edit for clinical accuracy, brand voice, and E-E-A-T compliance",
                  "Ad platform bid management and performance monitoring within human-approved parameters",
                  "Automated patient communications designed and approved by strategy-level experts",
                  "Reputation monitoring and alert generation that humans then respond to with appropriate nuance",
                ].map((t, i) => (
                  <div key={i} className="flex gap-3 items-start mb-5 last:mb-0">
                    <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: "hsl(247 93% 64%)" }} />
                    <span className="text-[15px] text-ink-secondary leading-[1.7]">{t}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <div className="bg-white rounded-2xl p-6 sm:p-8 h-full" style={{ border: "1px solid hsl(38 92% 50% / 0.25)" }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "hsl(38 92% 50% / 0.1)" }}>
                    <Users className="size-5" style={{ color: "hsl(38 92% 50%)" }} />
                  </div>
                  <span className="font-bold text-brand-deep text-[17px]">Specialists Handle</span>
                </div>
                {[
                  "Market positioning, competitive differentiation, and growth strategy",
                  "Clinical content review and approval before any publication",
                  "HIPAA-aware system architecture and vendor compliance documentation",
                  "Custom website design with authentic brand identity and patient trust engineering",
                  "AEO and GEO content structuring for AI search visibility on ChatGPT, Gemini, Perplexity, Claude",
                ].map((t, i) => (
                  <div key={i} className="flex gap-3 items-start mb-5 last:mb-0">
                    <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: "hsl(38 92% 50%)" }} />
                    <span className="text-[15px] text-ink-secondary leading-[1.7]">{t}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div
              className="rounded-2xl p-8 sm:p-10 mt-10 max-w-3xl mx-auto text-center"
              style={{ background: "linear-gradient(135deg, hsl(248 49% 15%), hsl(250 45% 19%))" }}
            >
              <p className="font-bold text-white text-[18px] sm:text-[20px] leading-[1.45] italic">
                "The businesses and individuals who integrate AI seamlessly into their workflows will be the ones leading the next wave of innovation. AI is reshaping work environments — those who see it as a tool rather than a threat will carve out new roles and competitive advantages."
              </p>
              <div className="font-mono-ui text-[11px] uppercase tracking-widest text-white/45 mt-5">
                — McKinsey & Company · State of AI 2025
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ SECTION 10 — LIGHT — GEO / AIO ============ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="relative max-w-[520px] mx-auto">
              <img
                src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80"
                alt="AI chat interface showing patient asking for healthcare provider recommendations"
                className="rounded-2xl object-cover w-full aspect-[4/3] shadow-xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-white rounded-2xl p-5 w-[220px] shadow-xl" style={{ border: "1px solid hsl(247 93% 64% / 0.15)" }}>
                <div className="font-mono-ui text-[10px] uppercase tracking-wide text-ink-secondary mb-2">Patients are asking:</div>
                <div className="font-bold text-brand-deep text-[13px] leading-[1.5]">
                  "Who is the best dentist in [city] for dental implants?"
                </div>
                <div className="font-mono-ui text-[10px] mt-3" style={{ color: "hsl(247 93% 64%)" }}>
                  Asked on ChatGPT & Gemini daily
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <div className="font-mono-ui text-[11px] uppercase tracking-widest mb-4" style={{ color: "hsl(195 100% 44%)" }}>
                GEO & AIO
              </div>
              <h2 className="font-display font-bold text-brand-deep leading-[1.1] tracking-tight mb-6" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
                The Next Frontier Your Marketing Strategy Must Address
              </h2>
              <div className="text-ink-secondary text-[16px] leading-[1.78] space-y-4">
                <p>One of the most significant shifts in patient behaviour over the last 18 months is the movement of initial provider searches from conventional Google results to AI-generated answers.</p>
                <p>Patients increasingly ask ChatGPT, Google Gemini, Perplexity, Microsoft Copilot, and Claude for healthcare provider recommendations. Whether your practice appears in those answers depends entirely on whether your content meets the structural, authoritative, and semantic requirements these AI systems use.</p>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  "FAQ content structured to directly answer questions patients ask AI assistants",
                  "Schema.org markup identifying your practice as a MedicalBusiness or Physician entity",
                  "Named clinical authors with verifiable credentials cited on every content page",
                  "External citations from peer-reviewed or institutional health sources",
                  "Topical authority from a broad, consistent library of expert-level healthcare content",
                ].map((t, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="size-5 mt-0.5 shrink-0" style={{ color: "hsl(247 93% 64%)" }} />
                    <span className="text-[15px] text-brand-deep font-medium">{t}</span>
                  </div>
                ))}
              </div>

              <Link to="/services/seo" className="inline-flex items-center gap-2 font-semibold text-[15px] hover:underline mt-8" style={{ color: "hsl(247 93% 64%)" }}>
                Explore Our SEO & AEO Services <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ SECTION 11 — DARK — VERDICT ============ */}
      <section
        className="py-20 sm:py-28 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, hsl(248 49% 15%) 0%, hsl(250 45% 19%) 50%, hsl(248 49% 12%) 100%)" }}
      >
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-12 w-[400px] h-[400px] rounded-full" style={{ background: "radial-gradient(circle, hsl(247 93% 64% / 0.18), transparent 70%)", filter: "blur(80px)" }} />
          <div className="absolute -bottom-24 -right-12 w-[400px] h-[400px] rounded-full" style={{ background: "radial-gradient(circle, hsl(248 100% 75% / 0.12), transparent 70%)", filter: "blur(70px)" }} />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-[960px]">
          <Reveal>
            <div className="inline-flex flex-wrap items-center gap-3 mb-8">
              <span className="font-mono-ui text-[11px] uppercase tracking-[0.2em] px-4 py-2 rounded-lg" style={{ color: "hsl(247 93% 64%)", border: "1px solid hsl(247 93% 64% / 0.3)" }}>
                VERDICT
              </span>
              <span className="font-mono-ui text-[11px] uppercase tracking-[0.1em] text-white/35">
                Vigorant · June 2026
              </span>
            </div>
            <h2 className="font-display font-bold text-white leading-[1.08] tracking-tight mb-10" style={{ fontSize: "clamp(28px, 4.5vw, 54px)" }}>
              AI is not replacing marketing teams. It is{" "}
              <span style={{
                background: "linear-gradient(90deg, hsl(247 93% 64%), hsl(248 100% 75%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                raising
              </span>{" "}
              the bar for what effective marketing looks like.
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-6 mb-14 py-10 border-t border-b" style={{ borderColor: "hsl(247 93% 64% / 0.15)" }}>
            {[
              { n: "86%", l: "of businesses affected by AI", s: "by 2030 (WEF 2025)" },
              { n: "80%", l: "of employers upskilling workers", s: "not replacing them (WEF 2025)" },
              { n: "40%", l: "expect AI will automate some roles", s: "but new roles emerge (WEF 2025)" },
            ].map((c, i) => (
              <Reveal key={i}>
                <div className="text-center">
                  <div className="font-display font-bold text-white leading-none" style={{ fontSize: "clamp(38px, 5vw, 52px)" }}>{c.n}</div>
                  <div className="font-mono-ui text-[11px] uppercase tracking-widest mt-3" style={{ color: "hsl(247 93% 64%)" }}>{c.l}</div>
                  <div className="text-[13px] mt-2" style={{ color: "hsl(248 100% 88% / 0.55)" }}>{c.s}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="space-y-5 mb-14">
            {[
              "The practices that achieve the strongest marketing results in 2026 are running an AI-augmented, human-led strategy — not choosing between the two.",
              "For dental, medical, and chiropractic practices, the stakes are higher than for general consumer businesses. Your marketing operates in a regulated environment where accuracy, compliance, and authentic human trust are foundational requirements — not optional features.",
              "Vigorant is a healthcare-exclusive growth marketing agency. We build AI-augmented, human-led marketing strategies for practices that want measurable growth, not just a digital presence.",
            ].map((t, i) => (
              <Reveal key={i}>
                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1" style={{ background: "hsl(247 93% 64% / 0.2)", border: "1px solid hsl(247 93% 64% / 0.4)" }}>
                    <span className="text-[11px] font-bold" style={{ color: "hsl(247 93% 64%)" }}>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="text-[15px] leading-[1.75]" style={{ color: "hsl(248 100% 88% / 0.8)" }}>{t}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services/website-design" className="btn-primary-grad px-10 py-4 rounded-full font-bold text-white text-[16px] inline-flex items-center justify-center gap-2">
              Explore Our Web Design Service <ArrowRight className="size-4" />
            </Link>
            <Link to="/services/seo" className="border border-white/20 text-white/80 font-semibold px-10 py-4 rounded-full hover:bg-white/10 transition-all inline-flex items-center justify-center">
              Explore SEO & AEO
            </Link>
          </div>
        </div>
      </section>

      {/* ============ SECTION 12 — LIGHT — FAQ ============ */}
      <section className="py-20 sm:py-24" style={{ background: "hsl(248 30% 97%)" }}>
        <div className="container mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center max-w-[640px] mx-auto mb-12">
              <div className="inline-block font-mono-ui text-[11px] uppercase tracking-[0.14em] mb-4 rounded-full px-4 py-1.5"
                style={{ color: "hsl(247 93% 64%)", background: "hsl(247 93% 64% / 0.08)", border: "1px solid hsl(247 93% 64% / 0.25)" }}>
                FAQ
              </div>
              <h2 className="font-display font-bold text-brand-deep leading-[1.1] tracking-tight" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
                Frequently Asked Questions
              </h2>
              <p className="italic text-ink-secondary text-[17px] mt-5">
                Evidence-based answers for dental, medical, and chiropractic practice owners on AI, human marketing expertise, and everything in between.
              </p>
            </div>
          </Reveal>

          <SharedFAQList faqs={FAQS} />

        </div>
      </section>

      {/* ============ FOOTER CREDIT LINE ============ */}
      <div
        className="text-center px-4 py-5 text-[11px]"
        style={{ color: "hsl(248 15% 55%)", borderTop: "1px solid hsl(247 93% 64% / 0.1)" }}
      >
        External Reference: World Economic Forum —{" "}
        <a
          href="https://www.weforum.org/publications/the-future-of-jobs-report-2025/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "hsl(247 93% 64%)", textDecoration: "underline" }}
        >
          Future of Jobs Report 2025 (weforum.org)
        </a>{" "}
        — Non-commercial institutional source. Swiss non-profit foundation.
      </div>

      <Footer />
    </div>
  );
}
