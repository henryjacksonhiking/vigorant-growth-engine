import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useEffect, useId, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Users, Eye, TrendingDown, Filter, Star, Activity, Building2,
  DollarSign, MapPin, Megaphone, MousePointerClick, ShieldCheck, BarChart2,
  EyeOff, BarChart, CalendarX, Plus, Check, Smile, Stethoscope, X
} from "lucide-react";
import GlobalFx, { Counter, useTilt } from "@/components/site/GlobalFx";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";

/* ---------- Shared atoms ---------- */
const ease = [0.16, 1, 0.3, 1] as const;

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease }}
      className={className}
    >{children}</motion.div>
  );
}

function ChipLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span className={dark ? "section-label-light" : "section-label inline-block px-3 py-1 rounded-full bg-brand-purple/8 border border-brand-purple/20"}>
      {children}
    </span>
  );
}

function H2({ children, white = false, className = "" }: { children: React.ReactNode; white?: boolean; className?: string }) {
  return (
    <h2 className={`font-extrabold leading-[1.1] tracking-tight mt-4 ${white ? "text-white" : "text-brand-deep"} ${className}`}
      style={{ fontSize: "clamp(28px, 5.2vw, 50px)", letterSpacing: "-0.03em" }}>
      {children}
    </h2>
  );
}

/* ---------- SEO ---------- */
function ForPracticesSeo() {
  const webPage = {
    "@context": "https://schema.org", "@type": "WebPage",
    "@id": "https://vigorant.com/for-practices#webpage",
    url: "https://vigorant.com/for-practices",
    name: "For Practices That Need More Predictable Growth | Vigorant",
    description: "A pain-point hub for dental, medical, and chiropractic practices struggling with patient acquisition, visibility, marketing ROI, lead conversion, reputation, or scalable growth.",
    isPartOf: { "@id": "https://vigorant.com/#website" },
    about: [
      { "@type": "Thing", name: "Healthcare practice growth" },
      { "@type": "Thing", name: "Patient acquisition for healthcare practices" },
      { "@type": "Thing", name: "AI visibility for healthcare practices" },
    ],
  };
  const breadcrumb = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://vigorant.com/" },
      { "@type": "ListItem", position: 2, name: "For Practices", item: "https://vigorant.com/for-practices" },
    ],
  };
  const itemList = {
    "@context": "https://schema.org", "@type": "ItemList",
    name: "Healthcare practice growth challenges",
    itemListElement: PAIN_CARDS.map((c, i) => ({
      "@type": "ListItem", position: i + 1, name: c.h3, url: `https://vigorant.com${c.href}`,
    })),
  };
  const service = {
    "@context": "https://schema.org", "@type": "Service",
    name: "Healthcare Marketing and Patient Acquisition",
    provider: { "@type": "Organization", name: "Vigorant", url: "https://vigorant.com" },
    serviceType: "Healthcare Marketing and Patient Acquisition",
    description: "Vigorant builds integrated patient acquisition systems for dental, chiropractic, and medical practices combining SEO, AI search optimization, paid advertising, website conversion, and reputation management.",
    areaServed: "United States",
    audience: { "@type": "Audience", audienceType: "Healthcare Practices" },
  };
  const faqPage = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: FAQS.map(f => ({
      "@type": "Question", name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <Helmet>
      <title>Healthcare Practice Growth Problems? Get More Patients | Vigorant</title>
      <meta name="description" content="Struggling to get more patients? Vigorant helps dental, medical, and chiropractic practices improve visibility, ROI, and lead conversion with AI-driven marketing." />
      <link rel="canonical" href="https://vigorant.com/for-practices" />
      <meta property="og:title" content="For Practices That Need More Predictable Growth | Vigorant" />
      <meta property="og:description" content="Struggling with low visibility, poor marketing ROI, weak lead conversion, or inconsistent patient flow? See how Vigorant helps dental, medical, and chiropractic practices grow." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://vigorant.com/for-practices" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      <script type="application/ld+json">{JSON.stringify(webPage)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      <script type="application/ld+json">{JSON.stringify(itemList)}</script>
      <script type="application/ld+json">{JSON.stringify(service)}</script>
      <script type="application/ld+json">{JSON.stringify(faqPage)}</script>
    </Helmet>
  );
}

/* ---------- Data ---------- */
const PAIN_CARDS = [
  { Icon: Users, n: "#1 Most Common", h3: "Getting More New Patients Online", q: "Why isn't our marketing bringing in more new faces?", body: "Your website, ads, and SEO may be getting activity, but not enough qualified patient inquiries. We help practices build visibility, landing pages, campaigns, and conversion paths that support measurable new patient growth.", cta: "Improve New Patient Flow", href: "/for-practices/more-new-patients" },
  { Icon: Eye, n: "#2 Competitive Edge", h3: "Improve Online & AI Visibility", q: "Are we even showing up where patients are searching?", body: "If patients can't find you on Google, Maps, AI Overviews, ChatGPT, Gemini, or Perplexity, you're losing demand before the first click. Vigorant structures your presence for both search engines and AI engines.", cta: "Improve Visibility", href: "/for-practices/online-visibility" },
  { Icon: TrendingDown, n: "#3 High Cost", h3: "Fix Poor Marketing ROI", q: "Why can't we connect our ad spend to actual patients?", body: "If reports show clicks, impressions, and rankings but not actual patient growth, your marketing lacks revenue accountability. We connect campaigns to leads, bookings, and business outcomes.", cta: "Fix ROI Gaps", href: "/for-practices/marketing-roi" },
  { Icon: Filter, n: "#4 Efficiency Gap", h3: "Improve Lead Conversion", q: "We get traffic — why aren't people booking?", body: "More traffic doesn't help if visitors don't call, forms don't convert, calls don't book, or follow-up is weak. We identify where patients drop off and improve the path from interest to appointment.", cta: "Convert More Leads", href: "/for-practices/lead-conversion" },
  { Icon: Star, n: "#5 Trust Builder", h3: "Improve Online Reputation & Reviews", q: "Do our reviews reflect how good we actually are?", body: "Reviews influence local rankings, patient trust, and AI recommendations. We help practices build a stronger review presence, respond strategically, and turn reputation into a patient acquisition asset.", cta: "Strengthen Reputation", href: "/for-practices/online-reputation" },
  { Icon: Activity, n: "#6 Stability", h3: "Predictable & Sustainable Patient Flow", q: "Why do we have great months and terrible months?", body: "If your schedule swings between busy and slow months, you need more than campaigns. You need a balanced system for acquisition, retention, reactivation, and visibility across the patient journey.", cta: "Stabilize Patient Flow", href: "/for-practices/predictable-patient-flow" },
  { Icon: Building2, n: "#7 Growth Stage", h3: "Scale Your Practice", q: "We're doing well — how do we build on it systematically?", body: "Adding providers, expanding locations, or growing beyond referrals requires scalable marketing infrastructure. Vigorant builds systems for multi-location visibility, reporting, campaigns, and conversion.", cta: "Build a Scalable Growth System", href: "/for-practices/scale-your-practice" },
  { Icon: DollarSign, n: "#8 Revenue Mix", h3: "Attract High-Production Patients", q: "We're busy — so why aren't we more profitable?", body: "Being busy isn't the same as being profitable. We help practices improve positioning, campaigns, and conversion paths for higher-value services like implants, cosmetic dentistry, elective care, and premium treatments.", cta: "Attract Better-Fit Patients", href: "/for-practices/high-value-patients" },
];

const PILLARS = [
  { n: "01", Icon: MapPin, t: "Visibility", b: "Google, Maps, local SEO, AI engines — everywhere patients search" },
  { n: "02", Icon: Megaphone, t: "Demand", b: "SEO, paid ads, social proof, content that attracts qualified patients" },
  { n: "03", Icon: MousePointerClick, t: "Conversion", b: "Website, landing pages, calls, forms — turning interest into bookings" },
  { n: "04", Icon: ShieldCheck, t: "Trust", b: "Reviews, testimonials, authority signals — why patients choose you" },
  { n: "05", Icon: BarChart2, t: "Intelligence", b: "Analytics, attribution, optimization — knowing what works and why" },
];

const COMPARISON = [
  ["Focus", "Services and activity", "Practice growth constraints and measurable patient acquisition"],
  ["Search Visibility", "Google rankings and basic SEO", "Google, Maps, AI Overviews, ChatGPT, Gemini, Perplexity, and entity-based visibility"],
  ["Reporting", "Clicks, impressions, and generic rankings", "Visibility, conversion, lead quality, patient flow, and next-step decisions"],
  ["Website Role", "A digital brochure", "A conversion system built to turn visitors into booked appointments"],
  ["Healthcare Context", "Often generic across industries", "Built around dental, chiropractic, and medical practice economics"],
  ["Strategy", "Channel-by-channel execution", "Integrated visibility, conversion, reputation, ads, SEO, and analytics"],
];

const SPECIALTIES = [
  { tag: "Dental", Icon: Smile, h3: "Dental Practice Marketing", body: "General, cosmetic, orthodontic, and pediatric practices. Key challenges: attracting implant and cosmetic cases, managing new patient cost, and competing in saturated local markets.", metrics: ["High-value patient targeting", "Implant & cosmetic SEO"], href: "/solutions/dental" },
  { tag: "Chiropractic", Icon: Activity, h3: "Chiropractic Marketing", body: "PI, wellness, and sports chiro practices. Key challenges: consistent local patient flow, review velocity, and transitioning from PI dependency to sustainable wellness volume.", metrics: ["Local SEO & Maps focus", "Review engine system"], href: "/solutions/chiropractic" },
  { tag: "Medical", Icon: Stethoscope, h3: "Medical Practice Marketing", body: "Independent physicians and specialty clinics. Key challenges: attracting elective and cash-pay patients, escaping insurance dependency, and scaling beyond a single-provider model.", metrics: ["Elective patient targeting", "Private practice growth"], href: "/solutions/medical" },
];

const PROOF = [
  { tag: "Dental Practice · Phoenix, AZ", metric: 34, prefix: "+", suffix: "", label: "new patients / month", timeline: "within 60 days", quote: "We'd tried three agencies before Vigorant. This is the first time the phone actually rings." },
  { tag: "Chiropractic Clinic · Austin, TX", metric: 28, prefix: "+", suffix: "", label: "new patients / month", timeline: "within 90 days", quote: "The AI dashboard alone changed how I think about marketing spend." },
  { tag: "Medical Practice · Denver, CO", metric: 47, prefix: "↓", suffix: "%", label: "cost per patient", timeline: "within 45 days", quote: "Finally a team that speaks in patient revenue, not impressions." },
];

const FAQS = [
  { q: "How can a healthcare practice get more new patients online?", a: "A healthcare practice can get more new patients online by improving local visibility, creating conversion-focused service pages, running targeted paid campaigns, strengthening reviews, and tracking which channels turn into actual appointments. The strongest results come when SEO, ads, website conversion, reputation, and follow-up work together." },
  { q: "Why is my practice getting traffic but not enough booked appointments?", a: "Traffic does not automatically become appointments. Patients may drop off because the website lacks clear calls-to-action, the offer is unclear, the practice has weak reviews, forms are too long, calls are missed, or follow-up is slow. Lead conversion improves when the entire path from search to booked appointment is optimized." },
  { q: "What is AI visibility for healthcare practices?", a: "AI visibility for healthcare practices means being discoverable and accurately represented when patients use AI-powered search tools such as Google AI Overviews, ChatGPT, Gemini, Claude, or Perplexity to compare providers, ask for recommendations, or research local care options." },
  { q: "How is Vigorant different from a traditional healthcare marketing agency?", a: "Vigorant focuses on building an integrated growth system, not isolated marketing tasks. The approach connects SEO, AI visibility, paid ads, website conversion, reputation, analytics, and ongoing optimization so practice owners can understand what is working and where growth is being lost." },
  { q: "What types of practices does Vigorant work with?", a: "Vigorant focuses on dental, chiropractic, and medical practices, including single-location practices, growing private practices, multi-location groups, and practices that need better visibility, stronger patient acquisition, improved lead conversion, or a more scalable marketing system." },
  { q: "What does a free practice growth audit include?", a: "A free practice growth audit includes a review of online visibility, AI search presence, website conversion, local rankings, reputation signals, competitor gaps, paid traffic opportunities, and the biggest growth barriers currently limiting patient acquisition or revenue growth." },
  { q: "Is SEO still important if patients are using AI search tools?", a: "Yes. AI search tools rely heavily on structured, authoritative, well-organized web content and local entity signals. Healthcare practices now need both traditional search visibility and AI-readable content that can be understood, trusted, and cited by AI engines." },
  { q: "What should a practice fix first: SEO, ads, website, or reviews?", a: "The first priority depends on the practice's biggest constraint. If no one can find the practice, visibility comes first. If traffic exists but patients do not book, conversion comes first. If reviews are weak, trust comes first. Vigorant's audit identifies the highest-leverage starting point." },
];

/* ---------- Sections ---------- */
function Hero() {
  return (
    <section aria-labelledby="fp-hero" className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24" style={{ minHeight: "90vh" }}>
      <div aria-hidden className="absolute inset-0 z-0 grid-overlay" />
      <div aria-hidden className="absolute -top-16 -right-16 w-[420px] sm:w-[480px] h-[420px] sm:h-[480px] rounded-full orb-a"
        style={{ background: "radial-gradient(circle, hsl(247 93% 64% / 0.18), transparent 70%)", filter: "blur(80px)" }} />
      <div aria-hidden className="absolute -bottom-16 -left-10 w-[280px] sm:w-[340px] h-[280px] sm:h-[340px] rounded-full orb-b"
        style={{ background: "radial-gradient(circle, hsl(248 100% 75% / 0.13), transparent 70%)", filter: "blur(60px)" }} />

      <div className="container relative z-10 text-center max-w-[780px]">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="font-mono-ui text-[11px] uppercase tracking-[0.12em] text-ink-secondary flex items-center justify-center gap-2 list-none p-0">
            <li><Link to="/" className="hover:text-brand-purple">Home</Link></li>
            <li aria-hidden className="text-brand-purple/40">/</li>
            <li aria-current="page" className="text-brand-deep">For Practices</li>
          </ol>
        </nav>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex items-center gap-2 font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-purple bg-brand-purple/8 border border-brand-purple/20 rounded-full px-4 py-1.5">
          <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-brand-purple pulse-dot" />
          For Dental, Medical &amp; Chiropractic Practices
        </motion.div>

        <h1 id="fp-hero" className="font-display font-bold text-brand-deep mt-6 leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(34px, 7vw, 72px)", letterSpacing: "-0.03em" }}>
          <Line delay={0.4}>For Practices That Need</Line>
          <Line delay={0.55}><span className="gradient-text">More Predictable Growth.</span></Line>
        </h1>

        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-6 text-[16px] sm:text-[18px] text-ink-secondary max-w-[620px] mx-auto leading-[1.75]">
          Whether you're struggling with low online visibility, inconsistent new patient flow, poor marketing ROI, weak lead conversion, or an outdated brand presence — Vigorant turns disconnected marketing efforts into a measurable patient acquisition system.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center flex-wrap">
          <a href="#audit" className="btn-primary-grad inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold min-h-[48px]">
            Get Your Free Practice Growth Audit <ArrowRight aria-hidden size={18} />
          </a>
          <a href="#pain-grid" className="btn-secondary-outline inline-flex items-center justify-center gap-1.5 px-6 py-3.5 rounded-full font-semibold min-h-[48px]">
            Find Your Biggest Growth Barrier <span aria-hidden>↓</span>
          </a>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.38 }}
          className="mt-5 font-mono-ui text-[12px] text-ink-secondary">
          No obligation · Clear findings · Actionable recommendations for your practice.
        </motion.p>

        <motion.dl initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-10 flex flex-wrap justify-center items-center gap-6 sm:gap-10">
          {[
            { v: <Counter to={120} suffix="+" />, l: "Practices Served" },
            { v: <><Counter to={4.9} decimals={1} />★</>, l: "Average Rating" },
            { v: <Counter to={4800} suffix="+" />, l: "Patients / Month Attributed" },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center px-2">
              <dt className="sr-only">{s.l}</dt>
              <dd className="font-bold text-[24px] sm:text-[26px] text-brand-purple m-0">{s.v}</dd>
              <div className="font-mono-ui text-[11px] text-ink-secondary mt-1">{s.l}</div>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span className="block" initial={{ y: "108%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay, ease }}>
        {children}
      </motion.span>
    </span>
  );
}

function ProblemReframe() {
  const cards = [
    { Icon: EyeOff, t: "Low Visibility", b: "Invisible on Google, Maps, and AI search engines" },
    { Icon: BarChart, t: "Unclear ROI", b: "Spending on marketing with no link to actual patients" },
    { Icon: CalendarX, t: "Leads Not Booking", b: "Traffic and calls exist but appointments aren't following" },
  ];
  return (
    <section aria-labelledby="fp-problem" className="relative overflow-hidden py-20 sm:py-24" style={{ background: "hsl(248 49% 15%)" }}>
      <div aria-hidden className="absolute left-1/2 top-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(247 93% 64% / 0.10), transparent 70%)", filter: "blur(80px)" }} />
      <div className="container relative text-center">
        <Reveal><ChipLabel dark>The Core Problem</ChipLabel></Reveal>
        <Reveal delay={0.05}>
          <h2 id="fp-problem" className="font-extrabold text-white mt-4 max-w-[720px] mx-auto leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(28px, 5.2vw, 50px)", letterSpacing: "-0.03em" }}>
            Your Practice May Not Have a Marketing Problem.<br className="hidden sm:block" />{" "}
            <span className="gradient-text">It May Have a Growth System Problem.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-white/65 max-w-[640px] mx-auto text-[15px] sm:text-[17px] leading-[1.78]">
            Most practices don't lose patients because they lack effort. They lose patients because visibility, reputation, website conversion, follow-up, paid ads, SEO, and reporting aren't working together. Vigorant connects these pieces into one healthcare growth engine designed to increase qualified patient demand and turn more interest into booked appointments.
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {cards.map((c, i) => (
            <Reveal key={c.t} delay={0.1 + i * 0.06}>
              <div className="text-left rounded-2xl p-6 h-full transition-all duration-300 hover:-translate-y-1"
                style={{ background: "hsl(250 45% 19%)", border: "1px solid hsl(0 0% 100% / 0.07)" }}>
                <div aria-hidden className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))" }}>
                  <c.Icon size={20} className="text-white" />
                </div>
                <div className="font-bold text-[15px] text-white">{c.t}</div>
                <div className="text-[13px] text-white/55 mt-1.5 leading-[1.6]">{c.b}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PainCard({ c, i }: { c: typeof PAIN_CARDS[number]; i: number }) {
  const ref = useTilt<HTMLAnchorElement>(5);
  return (
    <Reveal delay={i * 0.05}>
      <Link
        ref={ref as any}
        to={c.href}
        aria-label={`Learn more about ${c.h3}`}
        className="group block h-full rounded-2xl p-6 sm:p-7 transition-all duration-[400ms] hover:-translate-y-1.5"
        style={{
          background: "hsl(0 0% 100% / 0.85)",
          backdropFilter: "blur(20px) saturate(150%)",
          border: "1px solid hsl(0 0% 100% / 0.8)",
          boxShadow: "0 6px 24px hsl(248 49% 15% / 0.07)",
        }}
      >
        <div aria-hidden className="w-11 h-11 rounded-xl flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))" }}>
          <c.Icon size={20} className="text-white" />
        </div>
        <div className="font-mono-ui text-[11px] text-brand-lavender mt-3 uppercase tracking-[0.08em]">{c.n}</div>
        <h3 className="font-bold text-[16px] text-brand-deep mt-2 leading-snug">{c.h3}</h3>
        <p className="italic text-[13px] text-ink-secondary mt-1">{c.q}</p>
        <p className="text-[13px] text-ink-secondary mt-2.5 leading-[1.65]">{c.body}</p>
        <div className="my-4 h-px bg-brand-purple/10" />
        <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-purple group-hover:text-brand-bright transition-all">
          {c.cta} <ArrowRight size={14} aria-hidden className="transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </Reveal>
  );
}

function PainGrid() {
  return (
    <section id="pain-grid" aria-labelledby="fp-paingrid" className="py-20 sm:py-24" style={{ background: "hsl(250 100% 98%)" }}>
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto">
          <ChipLabel>Your Biggest Challenge</ChipLabel>
          <h2 id="fp-paingrid" className="font-extrabold text-brand-deep mt-4 leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(28px, 5.2vw, 50px)", letterSpacing: "-0.03em" }}>
            Choose the Challenge That Sounds <span className="gradient-text">Most Like Your Practice</span>
          </h2>
          <p className="mt-4 text-[16px] text-ink-secondary max-w-xl mx-auto">
            Each challenge below has its own dedicated page with the specific causes, solutions, and Vigorant services most relevant to that problem.
          </p>
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 list-none p-0">
          {PAIN_CARDS.map((c, i) => (
            <li key={c.h3} className="h-full">
              <article className="h-full"><PainCard c={c} i={i} /></article>
            </li>
          ))}
        </ul>

        <div className="text-center mt-12">
          <p className="text-[15px] text-ink-secondary mb-4">Not sure which challenge is costing you the most?</p>
          <a href="#audit" className="btn-primary-grad inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold min-h-[48px]">
            Get a Growth Audit <ArrowRight size={18} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}

function GrowthEngine() {
  return (
    <section aria-labelledby="fp-engine" className="py-20 sm:py-24 bg-background">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto">
          <ChipLabel>How It Connects</ChipLabel>
          <h2 id="fp-engine" className="font-extrabold text-brand-deep mt-4 leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(28px, 5.2vw, 50px)", letterSpacing: "-0.03em" }}>
            The Vigorant Growth Engine: <span className="gradient-text">One System for Visibility, Conversion, and Growth</span>
          </h2>
          <p className="mt-5 text-[16px] sm:text-[17px] text-ink-secondary max-w-xl mx-auto leading-[1.75]">
            Vigorant doesn't treat SEO, paid ads, websites, reputation, and reporting as separate activities. We connect them into one growth system so your practice can see where demand is coming from, where patients are dropping off, and what to improve next.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {PILLARS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.06}>
              <div className="text-center rounded-2xl p-6 h-full transition-all duration-300 hover:-translate-y-1"
                style={{ background: "hsl(250 100% 98%)", border: "1px solid hsl(247 93% 64% / 0.1)" }}>
                <div className="font-mono-ui font-bold text-[28px] gradient-text">{p.n}</div>
                <div aria-hidden className="mx-auto mt-3 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))" }}>
                  <p.Icon size={22} className="text-white" />
                </div>
                <div className="font-bold text-[15px] text-brand-deep mt-3">{p.t}</div>
                <div className="text-[13px] text-ink-secondary mt-1.5 leading-[1.6]">{p.b}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Definitions() {
  const defs = [
    { tag: "Definition · Patient Acquisition", text: "Patient acquisition for healthcare practices is the process of attracting, converting, and retaining qualified patients through search visibility, paid campaigns, reputation signals, website conversion, follow-up systems, and analytics. A strong patient acquisition system connects marketing activity to booked appointments and measurable practice growth." },
    { tag: "Definition · AI Visibility", text: "AI visibility for healthcare practices means your practice can be found, understood, and recommended by AI-powered search systems when patients ask questions about local providers, treatments, specialties, reviews, availability, or trusted care options." },
  ];
  return (
    <section aria-labelledby="fp-defs" className="py-20 sm:py-24" style={{ background: "hsl(250 100% 98%)" }}>
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto">
          <ChipLabel>Definitions · AI / GEO Ready</ChipLabel>
          <h2 id="fp-defs" className="font-extrabold text-brand-deep mt-4 leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(26px, 4.8vw, 42px)", letterSpacing: "-0.03em" }}>
            What These Terms Mean for Your Practice
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {defs.map((d, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="bg-white p-6 sm:p-7 h-full"
                style={{ borderLeft: "3px solid hsl(247 93% 64%)", borderRadius: "0 14px 14px 0", boxShadow: "0 4px 20px hsl(247 93% 64% / 0.06)" }}>
                <div className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-brand-purple">{d.tag}</div>
                <p className="mt-3 italic text-[15px] sm:text-[16px] text-brand-deep leading-[1.85]">
                  <span aria-hidden className="text-brand-lavender float-left mr-2" style={{ fontSize: "3rem", lineHeight: 0.8, marginTop: "0.5rem" }}>"</span>
                  {d.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  return (
    <section aria-labelledby="fp-comp" className="relative overflow-hidden py-20 sm:py-24"
      style={{ background: "linear-gradient(160deg, hsl(248 49% 15%), hsl(250 45% 19%), hsl(248 49% 15%))" }}>
      <div aria-hidden className="absolute -top-20 -right-16 w-[400px] h-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, hsl(247 93% 64% / 0.10), transparent 70%)", filter: "blur(80px)" }} />
      <div className="container relative">
        <Reveal className="text-center max-w-2xl mx-auto">
          <ChipLabel dark>Why Vigorant</ChipLabel>
          <h2 id="fp-comp" className="font-extrabold text-white mt-4 leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(28px, 5.2vw, 50px)", letterSpacing: "-0.03em" }}>
            Why Practice Owners Choose Vigorant <span className="gradient-text">Instead of a Traditional Agency</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 max-w-4xl mx-auto rounded-2xl overflow-hidden"
            style={{ background: "hsl(0 0% 100% / 0.04)", border: "1px solid hsl(0 0% 100% / 0.08)" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 text-[13px] sm:text-[14px]">
              <div className="px-5 sm:px-6 py-4 font-semibold text-white/45"
                style={{ background: "hsl(0 0% 100% / 0.02)", borderBottom: "1px solid hsl(0 0% 100% / 0.06)" }}>
                Traditional Marketing Agency
              </div>
              <div className="px-5 sm:px-6 py-4 font-semibold text-brand-bright"
                style={{ background: "hsl(247 93% 64% / 0.12)", borderLeft: "1px solid hsl(247 93% 64% / 0.2)", borderBottom: "1px solid hsl(0 0% 100% / 0.06)" }}>
                Vigorant Growth System
              </div>
              {COMPARISON.map(([cat, left, right]) => (
                <div key={cat} className="contents">
                  <div className="px-5 sm:px-6 py-4 text-white/75 leading-[1.65]"
                    style={{ borderBottom: "1px solid hsl(0 0% 100% / 0.04)" }}>
                    <div className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-white/40 mb-1.5">{cat}</div>
                    <span aria-hidden className="text-[hsl(0_75%_72%)] mr-2">✗</span>{left}
                  </div>
                  <div className="px-5 sm:px-6 py-4 text-white leading-[1.65]"
                    style={{ borderLeft: "1px solid hsl(247 93% 64% / 0.15)", borderBottom: "1px solid hsl(0 0% 100% / 0.04)" }}>
                    <div className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-brand-bright/70 mb-1.5 md:invisible">{cat}</div>
                    <span aria-hidden className="text-brand-bright mr-2">✓</span>{right}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Economics() {
  const chips = [
    ["$200–600", "Avg. new patient value / visit (dental)"],
    ["67%", "Cancelled appointments never rebooked (avg.)"],
    ["4.8★", "Min. star rating for AI recommendation eligibility"],
    ["4.2×", "Cost to acquire vs. reactivate a patient"],
  ];
  return (
    <section aria-labelledby="fp-econ" className="py-20 sm:py-24 bg-background">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto">
          <ChipLabel>Healthcare Expertise</ChipLabel>
          <h2 id="fp-econ" className="font-extrabold text-brand-deep mt-4 leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(28px, 5.2vw, 50px)", letterSpacing: "-0.03em" }}>
            Built for the Real Economics <span className="gradient-text">of Healthcare Practices</span>
          </h2>
          <p className="mt-5 text-[16px] sm:text-[17px] text-ink-secondary max-w-2xl mx-auto leading-[1.78]">
            We understand new patient lifetime value, procedure mix, treatment acceptance rates, call conversion benchmarks, local trust signals, review velocity requirements, provider capacity constraints, and patient acquisition cost by specialty. Your marketing strategy should be built around these realities — not adapted from a generic agency playbook.
          </p>
        </Reveal>
        <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
          {chips.map(([v, l]) => (
            <div key={l} className="text-center px-5 py-4 rounded-xl bg-white"
              style={{ border: "1px solid hsl(247 93% 64% / 0.12)" }}>
              <div className="font-extrabold text-[22px] gradient-text">{v}</div>
              <div className="font-mono-ui text-[11px] text-ink-secondary mt-1">{l}</div>
            </div>
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="mt-12 max-w-2xl mx-auto p-6 sm:p-7"
            style={{
              background: "linear-gradient(135deg, hsl(247 93% 64% / 0.04), hsl(248 100% 75% / 0.07))",
              borderLeft: "3px solid hsl(247 93% 64%)",
              borderRadius: "0 12px 12px 0",
            }}>
            <div className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-brand-purple">Why Visibility Alone Isn't Enough</div>
            <p className="mt-3 text-[15px] text-brand-deep leading-[1.8]">
              Visibility creates opportunity, but conversion turns opportunity into revenue. A practice may rank well and still lose patients if the website, offer, reviews, call handling, forms, or follow-up process fails to turn interest into appointments.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Specialties() {
  return (
    <section aria-labelledby="fp-spec" className="py-20 sm:py-24" style={{ background: "hsl(250 100% 98%)" }}>
      <div className="container">
        <Reveal className="text-center max-w-xl mx-auto">
          <ChipLabel>Choose Your Specialty</ChipLabel>
          <h2 id="fp-spec" className="font-extrabold text-brand-deep mt-4 leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(26px, 4.8vw, 42px)", letterSpacing: "-0.03em" }}>
            Which Type of Practice Are You Growing?
          </h2>
          <p className="mt-4 text-[16px] text-ink-secondary">
            Each specialty has unique patient economics, growth constraints, and marketing requirements. Select yours for tailored strategies.
          </p>
        </Reveal>
        <nav aria-label="Practice specialties">
          <ul className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 list-none p-0">
            {SPECIALTIES.map((s, i) => (
              <li key={s.tag}>
                <Reveal delay={i * 0.07}>
                  <Link to={s.href} aria-label={`${s.h3} solutions`}
                    className="group block h-full rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "hsl(0 0% 100% / 0.85)",
                      backdropFilter: "blur(20px) saturate(150%)",
                      border: "1px solid hsl(0 0% 100% / 0.8)",
                      boxShadow: "0 6px 24px hsl(248 49% 15% / 0.07)",
                    }}>
                    <span className="font-mono-ui text-[11px] uppercase tracking-[0.08em] text-brand-purple bg-brand-purple/8 rounded-full px-3 py-1 inline-block">{s.tag}</span>
                    <div aria-hidden className="w-13 h-13 mt-4 rounded-full flex items-center justify-center"
                      style={{ width: 52, height: 52, background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))" }}>
                      <s.Icon size={24} className="text-white" />
                    </div>
                    <h3 className="mt-4 font-bold text-[20px] text-brand-deep">{s.h3}</h3>
                    <p className="mt-2.5 text-[14px] text-ink-secondary leading-[1.68]">{s.body}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {s.metrics.map(m => (
                        <span key={m} className="font-mono-ui text-[11px] px-3 py-1 rounded-full text-brand-purple"
                          style={{ background: "hsl(247 93% 64% / 0.07)", border: "1px solid hsl(247 93% 64% / 0.12)" }}>{m}</span>
                      ))}
                    </div>
                    <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-[14px] text-brand-purple">
                      {s.tag} solutions <ArrowRight size={14} aria-hidden className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section aria-labelledby="fp-proof" className="relative overflow-hidden py-20 sm:py-24"
      style={{ background: "linear-gradient(135deg, hsl(248 49% 15%), hsl(250 45% 19%), hsl(248 49% 15%))" }}>
      <div aria-hidden className="absolute left-1/2 top-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, hsl(247 93% 64% / 0.08), transparent 70%)", filter: "blur(100px)" }} />
      <div className="container relative">
        <Reveal className="text-center max-w-2xl mx-auto">
          <ChipLabel dark>Real Results</ChipLabel>
          <h2 id="fp-proof" className="font-extrabold text-white mt-4 leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(28px, 5.2vw, 50px)", letterSpacing: "-0.03em" }}>
            Proof That Growth Improves <span className="gradient-text">When the System Works Together</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {PROOF.map((p, i) => (
            <Reveal key={p.tag} delay={i * 0.07}>
              <div className="h-full rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
                style={{ background: "hsl(250 45% 19%)", border: "1px solid hsl(0 0% 100% / 0.07)" }}>
                <div className="font-mono-ui text-[11px] uppercase tracking-[0.08em] text-white/40">{p.tag}</div>
                <div className="font-display font-bold gradient-text mt-3" style={{ fontSize: "clamp(44px, 6.5vw, 62px)", lineHeight: 1 }}>
                  {p.prefix}<Counter to={p.metric} />{p.suffix}
                </div>
                <div className="font-mono-ui text-[13px] text-white/45 mt-1">{p.label}</div>
                <div className="mt-4 inline-block font-mono-ui text-[11px] px-3 py-1 rounded-full text-brand-lavender"
                  style={{ background: "hsl(247 93% 64% / 0.2)", border: "1px solid hsl(247 93% 64% / 0.3)" }}>{p.timeline}</div>
                <p className="mt-4 italic text-[14px] text-white/65 leading-[1.65] pl-3" style={{ borderLeft: "2px solid hsl(247 93% 64% / 0.4)" }}>
                  "{p.quote}"
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#audit" className="inline-flex items-center gap-2 bg-white text-brand-deep font-bold text-[15px] sm:text-[16px] px-8 py-4 rounded-full transition-all duration-300 hover:bg-brand-lavender hover:scale-[1.02] hover:shadow-[0_8px_28px_hsl(248_49%_15%/0.35)] min-h-[48px]">
            Get a Growth Plan Like This for Your Practice <ArrowRight size={18} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}

function AuditOffer() {
  const items = [
    "Online visibility review (Google, Maps, AI engines)",
    "AI search presence snapshot",
    "Website conversion assessment",
    "Local competitor gap analysis",
    "Online reputation review",
    "Paid traffic opportunity assessment",
    "Prioritized growth roadmap",
  ];
  return (
    <section id="audit" aria-labelledby="fp-audit" className="py-20 sm:py-24 bg-background">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto">
          <ChipLabel>The Next Step</ChipLabel>
          <h2 id="fp-audit" className="font-extrabold text-brand-deep mt-4 leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(26px, 4.8vw, 42px)", letterSpacing: "-0.03em" }}>
            What You Get in a Free Practice Growth Audit
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 max-w-6xl mx-auto items-start">
          <div>
            <p className="text-[16px] sm:text-[17px] text-ink-secondary max-w-md leading-[1.75]">
              In a free 20-minute session, we review your practice's complete growth picture and identify the highest-leverage improvements.
            </p>
            <ul className="mt-6 space-y-3 list-none p-0">
              {items.map(it => (
                <li key={it} className="flex items-start gap-3">
                  <span aria-hidden className="w-5 h-5 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check size={12} />
                  </span>
                  <span className="font-medium text-[15px] text-brand-deep">{it}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 inline-block font-mono-ui text-[12px] text-brand-purple bg-brand-purple/8 px-4 py-2 rounded-full"
              style={{ border: "1px solid hsl(247 93% 64% / 0.2)" }}>
              We accept 8 new audit requests per month · 3 spots remaining
            </div>
          </div>

          <div className="rounded-2xl p-7 sm:p-9 bg-white"
            style={{ border: "1px solid hsl(247 93% 64% / 0.15)", boxShadow: "8px 8px 28px hsl(252 80% 23% / 0.08), -4px -4px 14px hsl(0 0% 100% / 0.9)" }}>
            <h3 className="font-bold text-[20px] text-brand-deep">Request Your Free Audit</h3>
            <p className="mt-2 text-[14px] text-ink-secondary">No commitment. No hard sell. Just clarity.</p>
            <a href="#" className="btn-primary-grad mt-5 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold min-h-[52px] text-[15px]">
              Request Your Free Practice Growth Audit <ArrowRight size={18} aria-hidden />
            </a>
            <div className="mt-5 flex flex-wrap gap-2 justify-center">
              {["No long-term contracts", "Response within 24hrs", "HIPAA compliant"].map(t => (
                <span key={t} className="font-mono-ui text-[11px] text-brand-purple bg-brand-purple/8 rounded-full px-3 py-1"
                  style={{ border: "1px solid hsl(247 93% 64% / 0.15)" }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();
  return (
    <section aria-labelledby="fp-faq" className="py-20 sm:py-24" style={{ background: "hsl(250 100% 98%)" }}>
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto">
          <ChipLabel>Common Questions</ChipLabel>
          <h2 id="fp-faq" className="font-extrabold text-brand-deep mt-4 leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(26px, 4.8vw, 40px)", letterSpacing: "-0.03em" }}>
            Questions Practice Owners Ask Before Booking an Audit
          </h2>
        </Reveal>
        <div className="max-w-3xl mx-auto mt-12 space-y-2.5" role="list">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            const btnId = `${baseId}-q-${i}`;
            const panelId = `${baseId}-p-${i}`;
            return (
              <Reveal key={f.q} delay={i * 0.03}>
                <div className="bg-white rounded-xl overflow-hidden transition-all"
                  style={{
                    border: `1px solid hsl(247 93% 64% / ${isOpen ? "0.25" : "0.1"})`,
                    boxShadow: isOpen ? "0 8px 24px hsl(247 93% 64% / 0.07)" : "none",
                  }} role="listitem">
                  <h3 className="m-0">
                    <button id={btnId} onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen} aria-controls={panelId}
                      className="w-full flex items-start justify-between gap-5 text-left px-5 sm:px-6 py-5 min-h-[56px] hover:bg-brand-purple/5 transition-colors">
                      <span className="text-[16px] sm:text-[17px] font-semibold text-brand-deep">{f.q}</span>
                      <Plus aria-hidden size={20} className="text-brand-purple flex-shrink-0 mt-1 transition-transform duration-300"
                        style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0)" }} />
                    </button>
                  </h3>
                  <div id={panelId} role="region" aria-labelledby={btnId} hidden={!isOpen}>
                    <p className="px-5 sm:px-6 pb-6 text-[15px] text-ink-secondary leading-[1.82]">{f.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section aria-labelledby="fp-final" className="relative overflow-hidden flex items-center justify-center"
      style={{ minHeight: 480, background: "linear-gradient(160deg, hsl(248 49% 15%) 0%, hsl(250 45% 19%) 45%, hsl(248 49% 15%) 100%)" }}>
      <div aria-hidden className="absolute -top-16 -right-16 w-[380px] h-[380px] rounded-full"
        style={{ background: "radial-gradient(circle, hsl(248 100% 75% / 0.15), transparent 70%)", filter: "blur(80px)" }} />
      <div aria-hidden className="absolute -bottom-16 -left-16 w-[300px] h-[300px] rounded-full"
        style={{ background: "radial-gradient(circle, hsl(247 93% 64% / 0.18), transparent 70%)", filter: "blur(60px)" }} />
      <div className="container relative py-20 sm:py-24 text-center max-w-2xl">
        <ChipLabel dark>Start Today</ChipLabel>
        <h2 id="fp-final" className="font-display font-bold text-white mt-5 leading-[1.15]"
          style={{ fontSize: "clamp(28px, 4.5vw, 50px)" }}>
          Find Out Exactly How Many Patients Your Practice Is Missing Each Month
        </h2>
        <ul className="mt-7 inline-block text-left list-none p-0">
          {[
            "Online visibility and AI search presence review",
            "Website conversion assessment",
            "Local competitor gap analysis",
            "Prioritized growth roadmap — no obligation",
          ].map(b => (
            <li key={b} className="flex items-start gap-2.5 py-1 text-white/85 text-[15px] sm:text-[16px]">
              <span aria-hidden className="text-brand-bright">✦</span> {b}
            </li>
          ))}
        </ul>
        <div className="mt-5 font-mono-ui text-[12px] text-brand-lavender">
          We accept 8 new audit requests per month. 3 spots remaining this month.
        </div>
        <a href="#" className="mt-7 inline-flex items-center gap-2 bg-white text-brand-deep font-bold text-[16px] sm:text-[17px] px-9 sm:px-11 py-4 rounded-full transition-all duration-300 hover:bg-brand-lavender hover:scale-[1.02] hover:shadow-[0_10px_36px_hsl(248_49%_15%/0.4)] min-h-[52px]">
          Claim My Free Practice Growth Audit <ArrowRight size={18} aria-hidden />
        </a>
        <p className="mt-4 text-white/55 text-[14px]">No commitment. No hard sell. Just clarity on what's possible for your practice.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {["HIPAA Compliant", "Response Within 24 Hours", "No Long-Term Contracts"].map(t => (
            <span key={t} className="font-mono-ui text-[11px] text-white/60 px-4 py-1.5 rounded-full"
              style={{ background: "hsl(0 0% 100% / 0.08)", border: "1px solid hsl(0 0% 100% / 0.12)" }}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function MobileStickyCTA() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("fp-sticky-dismissed")) { setDismissed(true); return; }
    const onScroll = () => setShow(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (dismissed || !show) return null;
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 flex items-center gap-2 px-4 py-3"
      style={{ background: "hsl(248 49% 15%)", borderTop: "1px solid hsl(247 93% 64% / 0.2)", paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}>
      <a href="#audit" className="btn-primary-grad flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-bold text-[15px] min-h-[44px]">
        Get Free Audit <ArrowRight size={16} aria-hidden />
      </a>
      <button onClick={() => { sessionStorage.setItem("fp-sticky-dismissed", "1"); setDismissed(true); }}
        aria-label="Dismiss sticky banner"
        className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white">
        <X size={18} aria-hidden />
      </button>
    </div>
  );
}

/* ---------- Page ---------- */
export default function ForPractices() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <ForPracticesSeo />
      <a href="#fp-main" className="skip-link">Skip to main content</a>
      <GlobalFx />
      <Nav />
      <main id="fp-main">
        <Hero />
        <ProblemReframe />
        <PainGrid />
        <GrowthEngine />
        <Definitions />
        <Comparison />
        <Economics />
        <Specialties />
        <Proof />
        <AuditOffer />
        <FAQSection />
        <FinalCTA />
      </main>
      <MobileStickyCTA />
      <Footer />
    </>
  );
}
