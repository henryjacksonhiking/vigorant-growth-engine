import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";

const ease = [0.16, 1, 0.3, 1] as const;
const CANONICAL = "https://vigorant.com/services/landing-pages";

/* ─────────────────────────── helpers ─────────────────────────── */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <span
      className={
        light
          ? "section-label inline-block px-3 py-1 rounded-full bg-brand-purple/15 border border-brand-purple/20 text-brand-lavender"
          : "section-label inline-block px-3 py-1 rounded-full bg-brand-purple/8 border border-brand-purple/20"
      }
    >
      {children}
    </span>
  );
}

/* ─────────────────────────── content ─────────────────────────── */

const PROOF_TAGS = [
  "Higher conversion",
  "Better lead quality",
  "Lower ad costs",
  "More appointments",
];

const WORKFLOW_MINI = [
  { n: "01", k: "Intent", v: "Audience, offer & single conversion goal" },
  { n: "02", k: "Build", v: "Headline, trust signals, frictionless CTA" },
  { n: "03", k: "Measure", v: "Calls, forms, requests, A/B improvements" },
];

const PHASES = [
  {
    id: "phase-1",
    kicker: "Phase 01",
    nav: "Audience & Offer",
    title: "Audience, offer, and single conversion goal",
    body:
      "Before a single word is written, we identify patient intent, the campaign source, the audience's motivations and concerns, and the single conversion action the page exists to produce — appointment request, consultation booking, or treatment inquiry.",
    inputs: [
      "Campaign source & intent",
      "Audience anxieties & objections",
      "Competitor landing pages",
      "Compliance and brand guardrails",
    ],
    output: {
      kicker: "Deliverable",
      title: "Conversion brief",
      lines: [
        "Single, named conversion goal",
        "Audience intent map and hesitations",
        "Offer architecture and proof shortlist",
      ],
    },
  },
  {
    id: "phase-2",
    kicker: "Phase 02",
    nav: "Messaging & Copy",
    title: "Conversion-focused messaging built around patient intent",
    body:
      "Healthcare decisions are personal. Patients comparing options on a landing page are often anxious about cost, process, or outcomes. We write the headline, value proposition, service explanation, and CTA to address those concerns directly and remove hesitation.",
    inputs: [
      "Patient psychology research",
      "Service-level differentiators",
      "Ad-message alignment",
      "Voice of customer review mining",
    ],
    output: {
      kicker: "Deliverable",
      title: "Message map",
      lines: [
        "Headline, sub-head, and supporting copy",
        "Objection-resolving sections",
        "One primary, one secondary CTA",
      ],
    },
  },
  {
    id: "phase-3",
    kicker: "Phase 03",
    nav: "Trust & UX",
    title: "Trust signals, mobile UX, and frictionless flow",
    body:
      "We layer in testimonials, provider credentials, reviews, certifications, and proof — then sequence the page so the conversion action is always one decision away. Mobile is the primary canvas; the design system stays consistent with the practice brand.",
    inputs: [
      "Testimonials and review pulls",
      "Provider and credential assets",
      "Brand system + accessibility audit",
      "Mobile-first layout direction",
    ],
    output: {
      kicker: "Deliverable",
      title: "Build-ready spec",
      lines: [
        "Section-by-section UX direction",
        "Trust-signal placement plan",
        "Mobile-first layout and CTA hierarchy",
      ],
    },
  },
  {
    id: "phase-4",
    kicker: "Phase 04",
    nav: "Measure & Iterate",
    title: "Analytics, reporting, and A/B test recommendations",
    body:
      "Every page ships with analytics integration tied to appointment requests, calls, and form completions. Performance reporting is honest. A/B test recommendations turn each campaign cycle into a structured improvement loop.",
    inputs: [
      "Conversion tracking instrumentation",
      "Call and form attribution",
      "A/B test backlog",
      "Quarterly performance review",
    ],
    output: {
      kicker: "Deliverable",
      title: "Performance loop",
      lines: [
        "Live conversion dashboard",
        "Plain-English monthly report",
        "Ranked A/B test recommendations",
      ],
    },
  },
];

const HANDOFF = [
  { a: "You provide", b: "Practice background, offer, brand assets, and campaign goal." },
  { a: "We provide", b: "Strategy, copy, UX direction, trust signal plan, and tracking spec." },
  { a: "You receive", b: "A build-ready landing page system tied to a single conversion goal." },
];

const DARK_RIVER = [
  {
    h: "Why most healthcare landing pages underperform",
    p: "Weak messaging, missing trust signals, too many choices, and unclear calls-to-action. The goal is not a beautiful page — it is one that produces appointment requests at the lowest possible cost.",
  },
  {
    h: "Conversion-focused messaging and patient psychology",
    p: "The right headline, value proposition, trust signals, and call-to-action — built around a specific audience and campaign intent — reduce hesitation and guide patients toward the single action the page is designed to produce.",
  },
  {
    h: "Landing pages in the AI search era",
    p: (
      <>
        AI-powered search increasingly rewards pages that provide clear answers, structured content, relevant intent matching, trustworthy information, and strong user engagement.{" "}
        <Link to="/services/seo" className="text-brand-lavender font-semibold underline underline-offset-4">
          Learn how SEO &amp; AI Optimization supports this.
        </Link>
      </>
    ),
  },
];

const FAQS = [
  {
    q: "Why not send traffic directly to my homepage?",
    a: "Homepages are designed to serve multiple audiences and goals. Landing pages are designed around a single, specific conversion goal — appointment request, consultation booking, or treatment inquiry — and consistently outperform general website pages for paid and campaign traffic.",
  },
  {
    q: "Do landing pages improve Google Ads performance?",
    a: "Yes. A landing page aligned with the ad's message, audience intent, and conversion goal improves Quality Score, reduces cost per click, and increases conversion rates — improving overall campaign ROI.",
  },
  {
    q: "Can landing pages help SEO?",
    a: "When strategically implemented, landing pages can support local SEO, treatment-specific search visibility, and conversion optimization. Service-specific and location-specific pages can rank for intent-driven queries that general website pages do not target.",
  },
  {
    q: "Do landing pages support AI visibility?",
    a: "Yes. Well-structured landing pages with clear answers, relevant intent matching, trustworthy information, and strong content signals align with how AI-powered search platforms evaluate and surface healthcare content.",
  },
];

/* ───────────────────────── JSON-LD ───────────────────────── */

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://vigorant.com/#organization",
      name: "Vigorant",
      url: "https://vigorant.com",
      logo: "https://vigorant.com/logo.png",
      description:
        "Healthcare-exclusive growth marketing agency providing AI-driven patient acquisition for dental, medical, and chiropractic practices.",
      areaServed: "United States",
      knowsAbout: [
        "Healthcare Landing Page Design",
        "Landing Page Optimization",
        "Healthcare Conversion Optimization",
        "Patient Acquisition Landing Pages",
        "Google Ads Landing Pages",
        "Healthcare CRO",
        "AI Visibility for Healthcare",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://vigorant.com/#website",
      url: "https://vigorant.com",
      name: "Vigorant",
      publisher: { "@id": "https://vigorant.com/#organization" },
    },
    {
      "@type": "WebPage",
      "@id": `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: "Healthcare Landing Page Design Services | Convert More Visitors into Patients | Vigorant",
      description:
        "Healthcare landing page design and optimization services for dental, medical, and chiropractic practices, including strategy, copywriting, UX recommendations, trust signals, analytics integration, and reporting.",
      isPartOf: { "@id": "https://vigorant.com/#website" },
      about: { "@id": `${CANONICAL}#service` },
      breadcrumb: { "@id": `${CANONICAL}#breadcrumb` },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://vigorant.com/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://vigorant.com/services" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Healthcare Landing Page Design Services",
          item: CANONICAL,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${CANONICAL}#service`,
      name: "Healthcare Landing Page Design Services",
      provider: { "@id": "https://vigorant.com/#organization" },
      description:
        "Healthcare landing page design and optimization for dental, medical, and chiropractic practices. Includes landing page strategy, conversion optimization, copywriting, UX recommendations, mobile optimization, trust signal implementation, A/B testing recommendations, analytics integration, and performance reporting.",
      areaServed: "United States",
      serviceType: "Healthcare Landing Page Design",
      audience: {
        "@type": "Audience",
        audienceType:
          "Dental Practices, Medical Clinics, Chiropractic Offices, Specialty Healthcare Providers, Multi-location Practices",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Landing Page Service Deliverables",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landing Page Strategy & Copywriting" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Conversion Optimization & UX Recommendations" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trust Signal & Mobile Optimization" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "A/B Testing Recommendations" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Analytics Integration & Performance Reporting" } },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${CANONICAL}#faq`,
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

/* ─────────────────────── page ─────────────────────── */

export default function LandingPages() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activePhase, setActivePhase] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 60%", "end 40%"],
  });
  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handler = () => {
      const triggerY = window.innerHeight * 0.46;
      let idx = 0;
      PHASES.forEach((p, i) => {
        const el = document.getElementById(p.id);
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.top <= triggerY) idx = i;
      });
      setActivePhase(idx);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <Helmet>
        <title>Healthcare Landing Page Design Services | Convert More Visitors into Patients | Vigorant</title>
        <meta
          name="description"
          content="High-converting landing pages for dental, medical, and chiropractic practices. Increase patient inquiries, appointment requests, and marketing ROI with conversion-focused landing page design from Vigorant."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Healthcare Landing Page Design Services | Convert More Visitors into Patients | Vigorant"
        />
        <meta
          property="og:description"
          content="High-converting landing pages for dental, medical, and chiropractic practices. Increase patient inquiries, appointment requests, and marketing ROI with conversion-focused landing page design from Vigorant."
        />
        <meta property="og:url" content={CANONICAL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Nav />

      <main
        id="main"
        itemScope
        itemType="https://schema.org/Service"
        className="bg-background"
      >
        <meta itemProp="name" content="Healthcare Landing Page Design Services" />
        <meta itemProp="provider" content="Vigorant" />
        <meta itemProp="areaServed" content="United States" />

        {/* ─────────── HERO (dark) ─────────── */}
        <section
          className="relative overflow-hidden text-white"
          style={{ background: "var(--gradient-dark)" }}
        >
          {/* animated orb */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full blur-3xl"
            style={{ background: "hsl(var(--brand-purple) / 0.35)" }}
            animate={{ x: [0, 30, -10, 0], y: [0, 20, -10, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* grid overlay */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--brand-lavender)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--brand-lavender)) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />

          <div className="container relative pt-32 pb-24 sm:pt-40 sm:pb-32">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-lavender/70">
                <li>
                  <Link to="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link to="/services" className="hover:text-white">
                    Services
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li aria-current="page" className="text-white">
                  Landing Pages
                </li>
              </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-start">
              <Reveal>
                <Eyebrow light>Landing Pages · Process</Eyebrow>
                <h1
                  className="font-display font-extrabold leading-[1.05] tracking-[-0.04em] mt-5 text-white"
                  style={{ fontSize: "clamp(40px, 6vw, 76px)" }}
                >
                  Conversion-focused landing pages,{" "}
                  <span className="text-brand-lavender">built one decision at a time.</span>
                </h1>
                <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/75 leading-relaxed">
                  A 4-phase process for dental, medical, and chiropractic practices that turns paid
                  traffic and campaign clicks into appointment requests — without spreading attention
                  across a generic homepage.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  <Link
                    to="/free-audit"
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-[0_8px_28px_hsl(var(--brand-purple)/0.45)] transition-transform hover:-translate-y-0.5"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(var(--brand-purple)), hsl(var(--brand-lavender)), hsl(var(--brand-deep)))",
                    }}
                  >
                    Get a free landing page audit <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white border border-white/20 bg-white/10 hover:bg-white/15 transition"
                  >
                    See all services
                  </Link>
                </div>

                <ul className="mt-10 flex flex-wrap gap-2">
                  {PROOF_TAGS.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[12px] font-medium text-white/85"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* Floating workflow-mini panel — bordered, not card primitive */}
              <Reveal delay={0.15}>
                <motion.aside
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-2xl border border-white/15 bg-white/[0.05] backdrop-blur-sm p-6 sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="section-label text-brand-lavender">Workflow at a glance</span>
                    <span className="font-mono-ui text-[10px] uppercase tracking-[0.2em] text-white/40">
                      04 phases
                    </span>
                  </div>
                  <ul className="mt-6 divide-y divide-white/10">
                    {WORKFLOW_MINI.map((w) => (
                      <li key={w.n} className="grid grid-cols-[auto_1fr] gap-4 py-4 first:pt-0">
                        <span className="font-mono-ui text-xs text-brand-lavender pt-0.5">{w.n}</span>
                        <div>
                          <h4 className="font-bold text-white text-base">{w.k}</h4>
                          <p className="text-sm text-white/65 mt-1 leading-relaxed">{w.v}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.aside>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─────────── SOFT BAND ─────────── */}
        <section className="bg-surface-secondary py-12 border-y border-brand-purple/10">
          <div className="container">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-10">
              {[
                { k: "Goal", v: "One named conversion per page" },
                { k: "Audience", v: "Specialty-fit patient intent" },
                { k: "Trust", v: "Credentials, reviews, proof" },
                { k: "Loop", v: "Analytics + A/B improvements" },
              ].map((b) => (
                <div key={b.k}>
                  <div className="section-label">{b.k}</div>
                  <div className="font-display text-xl text-brand-deep mt-2 leading-tight">{b.v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── PROCESS / WORKFLOW ─────────── */}
        <section className="py-24 sm:py-32">
          <div className="container">
            <div className="max-w-3xl">
              <Eyebrow>The Process</Eyebrow>
              <h2
                className="font-display font-extrabold text-brand-deep mt-4 leading-[1.05] tracking-[-0.03em]"
                style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
              >
                Four phases. One conversion goal.
              </h2>
              <p className="mt-5 text-lg text-brand-deep/70 leading-relaxed">
                Every landing page we build moves through the same disciplined sequence — so each
                campaign starts from a brief, not a blank page.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-20">
              {/* Sticky process nav */}
              <aside className="hidden lg:block">
                <div className="sticky top-28">
                  <div className="section-label mb-4">Process map</div>
                  <ul className="border-t border-brand-purple/15">
                    {PHASES.map((p, i) => {
                      const isActive = i === activePhase;
                      const isPassed = i < activePhase;
                      return (
                        <li key={p.id}>
                          <a
                            href={`#${p.id}`}
                            className={`flex items-center gap-4 py-4 border-b border-brand-purple/15 transition-all duration-300 font-bold ${
                              isActive
                                ? "translate-x-2 text-brand-purple bg-brand-purple/5 pl-3"
                                : isPassed
                                ? "text-brand-purple/80"
                                : "text-brand-deep/55 hover:text-brand-purple"
                            }`}
                          >
                            <span
                              className={`inline-flex h-7 w-7 items-center justify-center rounded-full font-mono-ui text-[11px] transition ${
                                isActive
                                  ? "bg-brand-purple text-white shadow-[0_8px_18px_hsl(var(--brand-purple)/0.35)] scale-[1.05]"
                                  : isPassed
                                  ? "bg-surface-secondary text-brand-purple"
                                  : "bg-surface-secondary text-brand-deep/50"
                              }`}
                            >
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="text-sm tracking-tight">{p.nav}</span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </aside>

              {/* Timeline */}
              <div ref={timelineRef} className="relative pl-10 sm:pl-14">
                {/* static rail */}
                <div
                  aria-hidden
                  className="absolute left-3 top-0 bottom-0 w-[2px] rounded-full"
                  style={{ background: "hsl(var(--brand-purple) / 0.18)" }}
                />
                {/* animated fill */}
                <motion.div
                  aria-hidden
                  className="absolute left-3 top-0 w-[2px] rounded-full"
                  style={{
                    height: fillHeight,
                    background:
                      "linear-gradient(hsl(var(--brand-lavender)), hsl(var(--brand-purple)))",
                    boxShadow: "0 0 22px hsl(var(--brand-purple) / 0.35)",
                  }}
                />

                <div className="space-y-20">
                  {PHASES.map((p, i) => {
                    const isActive = i === activePhase;
                    const isPassed = i < activePhase;
                    return (
                      <article key={p.id} id={p.id} className="relative scroll-mt-28">
                        {/* step dot */}
                        <span
                          aria-hidden
                          className={`absolute -left-[42px] sm:-left-[54px] top-1 inline-flex h-8 w-8 items-center justify-center rounded-full font-mono-ui text-[11px] transition-all duration-500 ${
                            isActive
                              ? "text-white scale-110"
                              : isPassed
                              ? "bg-surface-secondary text-brand-purple border-2 border-brand-purple/30"
                              : "bg-white text-brand-deep/45 border-2 border-brand-purple/20"
                          }`}
                          style={
                            isActive
                              ? {
                                  background:
                                    "linear-gradient(135deg, hsl(var(--brand-lavender)), hsl(var(--brand-purple)))",
                                  boxShadow:
                                    "0 0 0 8px hsl(var(--brand-purple) / 0.12), 0 14px 32px hsl(var(--brand-purple) / 0.30)",
                                }
                              : undefined
                          }
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        <Reveal>
                          <div
                            className={`pb-10 border-b transition-colors ${
                              isActive ? "border-brand-purple/40" : "border-brand-purple/15"
                            }`}
                          >
                            <div className="font-mono-ui text-[11px] uppercase tracking-[0.18em] text-brand-purple">
                              {p.kicker}
                            </div>
                            <h3
                              className={`font-display font-extrabold mt-3 leading-[1.1] tracking-[-0.02em] transition-colors ${
                                isActive ? "text-brand-deep" : "text-brand-deep/85"
                              }`}
                              style={{ fontSize: "clamp(24px, 2.6vw, 34px)" }}
                            >
                              {p.title}
                            </h3>
                            <p className="mt-4 text-brand-deep/70 text-base sm:text-lg leading-relaxed max-w-2xl">
                              {p.body}
                            </p>

                            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                              {/* Inputs (no card — bordered ledger) */}
                              <div>
                                <div className="section-label mb-3">Inputs</div>
                                <ul className="divide-y divide-brand-purple/10 border-t border-brand-purple/10">
                                  {p.inputs.map((line) => (
                                    <li
                                      key={line}
                                      className="py-3 text-sm text-brand-deep/80 flex gap-3"
                                    >
                                      <span
                                        aria-hidden
                                        className="mt-2 h-1 w-1 rounded-full bg-brand-purple flex-none"
                                      />
                                      <span>{line}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Output panel — bordered, lavender wash */}
                              <div
                                className={`rounded-2xl border p-6 transition-all ${
                                  isActive
                                    ? "border-brand-purple/35 -translate-y-1 shadow-[0_18px_46px_hsl(var(--brand-purple)/0.15)]"
                                    : "border-brand-purple/15"
                                }`}
                                style={{ background: "hsl(var(--surface-secondary))" }}
                              >
                                <div className="font-mono-ui text-[11px] uppercase tracking-[0.18em] text-brand-purple">
                                  {p.output.kicker}
                                </div>
                                <h4 className="font-display text-xl text-brand-deep mt-2">
                                  {p.output.title}
                                </h4>
                                <ul className="mt-4 space-y-2">
                                  {p.output.lines.map((l) => (
                                    <li
                                      key={l}
                                      className="text-sm text-brand-deep/80 flex gap-2"
                                    >
                                      <span
                                        aria-hidden
                                        className="mt-2 h-1 w-1 rounded-full bg-brand-purple flex-none"
                                      />
                                      <span>{l}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </Reveal>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────── HANDOFF LEDGER (no cards) ─────────── */}
        <section className="bg-surface-secondary py-24 sm:py-28 border-y border-brand-purple/10">
          <div className="container">
            <div className="max-w-3xl">
              <Eyebrow>Handoff</Eyebrow>
              <h2
                className="font-display font-extrabold text-brand-deep mt-4 leading-[1.05] tracking-[-0.03em]"
                style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
              >
                What you give us — and what you get back.
              </h2>
            </div>

            <div className="mt-12 rounded-3xl border border-brand-purple/15 bg-background overflow-hidden">
              {HANDOFF.map((row, i) => (
                <div
                  key={row.a}
                  className={`grid grid-cols-1 md:grid-cols-[260px_1fr] ${
                    i < HANDOFF.length - 1 ? "border-b border-brand-purple/15" : ""
                  }`}
                >
                  <div
                    className="px-6 sm:px-8 py-6 font-mono-ui text-xs uppercase tracking-[0.14em] text-brand-purple"
                    style={{ background: "hsl(var(--surface-secondary))" }}
                  >
                    {row.a}
                  </div>
                  <div className="px-6 sm:px-8 py-6 text-brand-deep/80 text-base">{row.b}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── DARK RIVER (3-column) ─────────── */}
        <section className="relative py-24 sm:py-32 text-white overflow-hidden" style={{ background: "var(--gradient-dark)" }}>
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--brand-lavender)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--brand-lavender)) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
          <div className="container relative">
            <div className="max-w-3xl">
              <Eyebrow light>Perspective</Eyebrow>
              <h2
                className="font-display font-extrabold text-white mt-4 leading-[1.05] tracking-[-0.03em]"
                style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
              >
                Three principles that shape every page we ship.
              </h2>
            </div>

            <div className="mt-14 rounded-3xl overflow-hidden border border-white/15 shadow-[0_24px_80px_hsl(var(--brand-deep)/0.4)]"
              style={{ background: "hsl(0 0% 100% / 0.06)" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
                {DARK_RIVER.map((r, i) => (
                  <Reveal key={r.h} delay={i * 0.08}>
                    <div className="p-8 sm:p-10 transition-colors hover:bg-white/[0.04] h-full">
                      <div className="font-mono-ui text-[11px] uppercase tracking-[0.18em] text-brand-lavender">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="mt-3 font-bold text-white text-xl leading-snug">{r.h}</h3>
                      <p className="mt-3 text-white/70 leading-relaxed">{r.p}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─────────── FAQ SPLIT ─────────── */}
        <section className="py-24 sm:py-32">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
              <div className="lg:sticky lg:top-28 self-start">
                <Eyebrow>Questions</Eyebrow>
                <h2
                  className="font-display font-extrabold text-brand-deep mt-4 leading-[1.05] tracking-[-0.03em]"
                  style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
                >
                  Common questions about healthcare landing pages.
                </h2>
                <p className="mt-5 text-brand-deep/70 leading-relaxed">
                  Short, honest answers. Want to talk through your campaign? Get a free landing page
                  audit and we'll walk through it together.
                </p>
                <Link
                  to="/free-audit"
                  className="mt-8 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(var(--brand-purple)), hsl(var(--brand-lavender)), hsl(var(--brand-deep)))",
                  }}
                >
                  Request your audit <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <ul className="border-t border-brand-purple/15">
                {FAQS.map((f, i) => {
                  const open = openFaq === i;
                  return (
                    <li key={f.q} className="border-b border-brand-purple/15">
                      <button
                        aria-expanded={open}
                        onClick={() => setOpenFaq(open ? null : i)}
                        className="w-full flex items-center justify-between gap-6 py-6 text-left font-bold text-brand-deep hover:text-brand-purple transition"
                      >
                        <span className="text-lg sm:text-xl tracking-tight">{f.q}</span>
                        <span
                          className={`flex-none inline-flex items-center justify-center h-9 w-9 rounded-full transition-all ${
                            open ? "bg-brand-purple text-white rotate-45" : "bg-surface-secondary text-brand-purple"
                          }`}
                        >
                          <Plus className="w-4 h-4" />
                        </span>
                      </button>
                      <motion.div
                        initial={false}
                        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                        transition={{ duration: 0.35, ease }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-12 text-brand-deep/75 leading-relaxed">{f.a}</p>
                      </motion.div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* ─────────── FINAL CTA ─────────── */}
        <section
          className="relative overflow-hidden py-24 sm:py-32 text-white"
          style={{ background: "hsl(var(--brand-deep))" }}
        >
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            animate={{ opacity: [0.45, 0.7, 0.45] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, hsl(var(--brand-purple) / 0.55), hsl(var(--brand-deep) / 0.18) 45%, transparent 72%)",
            }}
          />
          <div className="container relative text-center max-w-3xl">
            <Eyebrow light>Ready when you are</Eyebrow>
            <h2
              className="font-display font-extrabold text-white mt-4 leading-[1.05] tracking-[-0.03em]"
              style={{ fontSize: "clamp(32px, 5vw, 60px)" }}
            >
              Turn your next campaign into appointment requests.
            </h2>
            <p className="mt-5 text-white/75 text-lg leading-relaxed">
              We'll audit your current landing pages, identify the conversion gaps, and show you the
              fastest path to higher-quality patient inquiries.
            </p>
            <div className="mt-9 flex flex-wrap gap-3 justify-center">
              <Link
                to="/free-audit"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_28px_hsl(var(--brand-purple)/0.45)] transition-transform hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--brand-purple)), hsl(var(--brand-lavender)), hsl(var(--brand-deep)))",
                }}
              >
                Get a free audit <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white border border-white/20 bg-white/10 hover:bg-white/15 transition"
              >
                Explore services
              </Link>
            </div>
          </div>
        </section>

        {/* ─────────── Authority reference ─────────── */}
        <div className="border-t border-brand-purple/10 py-5 px-6 text-center">
          <p className="font-mono-ui text-[12px] text-brand-deep/40">
            External reference:{" "}
            <a
              href="https://www.nist.gov/itl/iad/visualization-and-usability-group"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-purple underline underline-offset-2"
            >
              NIST — Visualization &amp; Usability Group
            </a>{" "}
            — referenced in UX and usability optimization for healthcare digital experiences.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
