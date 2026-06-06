import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Plus, Play } from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";

const ease = [0.16, 1, 0.3, 1] as const;
const CANONICAL = "https://vigorant.com/services/video-marketing";

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
  "Patient trust",
  "Higher engagement",
  "Stronger conversions",
  "AI-search visibility",
];

const WORKFLOW_MINI = [
  { n: "01", k: "Plan", v: "Strategy, formats & shot list tied to patient intent" },
  { n: "02", k: "Produce", v: "Doctor, patient, treatment & education scripts" },
  { n: "03", k: "Distribute", v: "YouTube, social cuts, ads, landing-page embeds" },
];

const FORMATS = [
  {
    code: "F-01",
    name: "Doctor Introduction",
    purpose: "Humanize the provider, reduce booking anxiety.",
    runtime: "60–90 sec",
    surface: "Homepage · Google Business · Ads",
  },
  {
    code: "F-02",
    name: "Patient Testimonial",
    purpose: "Unscripted social proof from real outcomes.",
    runtime: "45–75 sec",
    surface: "Landing pages · Social · YouTube",
  },
  {
    code: "F-03",
    name: "Treatment Explainer",
    purpose: "Resolve the “what does this involve?” question.",
    runtime: "90–150 sec",
    surface: "Service pages · YouTube · AI answers",
  },
  {
    code: "F-04",
    name: "Educational Health",
    purpose: "Long-tail authority for search and AI engines.",
    runtime: "2–5 min",
    surface: "YouTube · Blog · Newsletter",
  },
];

const PHASES = [
  {
    id: "phase-1",
    kicker: "Phase 01",
    nav: "Strategy",
    title: "Audience, intent & a content map you can actually shoot",
    body:
      "Before a camera is unboxed, we name the audience, the patient concern each video must resolve, and the surface it must perform on. The result is a content map — not a wishlist — built around real treatment demand and your team's bandwidth.",
    inputs: [
      "Specialty, services & treatment priorities",
      "Patient intent and review-mined objections",
      "Competitor video and YouTube gap analysis",
      "Brand voice and compliance guardrails",
    ],
    output: {
      kicker: "Deliverable",
      title: "Video content map",
      lines: [
        "Prioritized list of formats and topics",
        "Audience and surface for each asset",
        "12-week shoot and publish schedule",
      ],
    },
  },
  {
    id: "phase-2",
    kicker: "Phase 02",
    nav: "Production",
    title: "Scripts, shot lists, and direction made for healthcare",
    body:
      "We translate the map into provider-friendly scripts, shot lists, and on-camera direction. The goal is plain-spoken authenticity — doctors who sound like doctors, patients who sound like patients — not over-produced commercials that audiences scroll past.",
    inputs: [
      "Provider-friendly scripts & prompts",
      "Shot list and B-roll plan",
      "On-camera direction and pacing notes",
      "Brand and accessibility guardrails",
    ],
    output: {
      kicker: "Deliverable",
      title: "Production-ready packet",
      lines: [
        "Scripts vetted for clarity and compliance",
        "Shot list and equipment checklist",
        "Cut-down plan for shorts and ads",
      ],
    },
  },
  {
    id: "phase-3",
    kicker: "Phase 03",
    nav: "Optimization",
    title: "Titles, chapters, transcripts & schema that earn visibility",
    body:
      "Every video ships with the metadata search engines and AI answer engines actually read — keyword-aligned titles, descriptions, chapters, transcripts, captions, and VideoObject schema. One shoot becomes a long-term visibility asset across Google, YouTube, and AI answers.",
    inputs: [
      "Keyword and AI-query research",
      "Title, description and chapter copy",
      "Transcript, caption and thumbnail spec",
      "Video and FAQ schema implementation",
    ],
    output: {
      kicker: "Deliverable",
      title: "Discovery package",
      lines: [
        "Optimized YouTube metadata per asset",
        "Embed-ready transcript and chapters",
        "Schema markup for video, FAQ and author",
      ],
    },
  },
  {
    id: "phase-4",
    kicker: "Phase 04",
    nav: "Distribution & Reporting",
    title: "Cut once, distribute on purpose, report in plain English",
    body:
      "Each asset is cut into the formats every surface rewards — YouTube longform, social shorts, ad creative, and landing-page embeds. Performance is tracked against the patient actions that matter: appointment requests, calls, and form completions.",
    inputs: [
      "Per-surface cut and aspect ratio plan",
      "Paid creative and ad placement matrix",
      "Embed plan for landing pages and service pages",
      "Attribution to calls, forms and bookings",
    ],
    output: {
      kicker: "Deliverable",
      title: "Distribution & performance loop",
      lines: [
        "Multi-surface cut-down library",
        "Plain-English monthly performance report",
        "Ranked recommendations for the next cycle",
      ],
    },
  },
];

const HANDOFF = [
  { a: "You provide", b: "Provider availability, brand assets, treatment priorities, and goals." },
  { a: "We provide", b: "Strategy, scripts, direction, optimization, distribution and reporting." },
  { a: "You receive", b: "A library of patient-trust assets that compound across search, social and ads." },
];

const PRINCIPLES = [
  {
    h: "Plan before you shoot",
    p: "A strategy and content map tied to patient intent prevents the most expensive video mistake — producing assets no one watches or shares.",
  },
  {
    h: "Build trust, not commercials",
    p: "Healthcare audiences reward authenticity. Direct-to-camera, plain-spoken explanations consistently outperform polished ads.",
  },
  {
    h: "Optimize for discovery",
    p: "Titles, descriptions, transcripts, chapters and schema turn one video into a long-term visibility asset across Google, YouTube and AI engines.",
  },
  {
    h: "Distribute on purpose",
    p: "Cut each asset into the formats each surface rewards — YouTube longform, social shorts, landing-page embeds and ad creative.",
  },
];

const DARK_RIVER = [
  {
    h: "Why video is the fastest trust signal a practice has",
    p: "Patients evaluate a practice before they call. They watch how providers speak, how staff behave, and how clearly procedures are explained. Video lets prospective patients experience the practice — and experience is what removes hesitation.",
  },
  {
    h: "Which formats consistently produce the strongest results",
    p: "Doctor introductions humanize the provider. Patient testimonials provide unscripted social proof. Treatment explainers resolve procedural anxiety. Educational health content builds long-tail authority and AI visibility.",
  },
  {
    h: "Video in the AI search era",
    p: (
      <>
        AI-powered search platforms increasingly evaluate authority, engagement and expertise. Video creates additional surface area in Google results, video search, YouTube recommendations, and AI-generated answers.{" "}
        <Link to="/services/seo" className="text-brand-lavender font-semibold underline underline-offset-4">
          Learn how SEO &amp; AI Optimization supports video visibility.
        </Link>
      </>
    ),
  },
];

const RELATED = [
  { label: "Marketing Strategy", sub: "Set the plan", href: "/services/marketing-strategy" },
  { label: "SEO & AI Optimization", sub: "Get found", href: "/services/seo" },
  { label: "Social Media Marketing", sub: "Distribute", href: "/services/social-media-marketing" },
  { label: "Landing Pages", sub: "Convert", href: "/services/landing-pages" },
];

const FAQS = [
  {
    q: "Is video marketing effective for healthcare practices?",
    a: "Yes. Video helps healthcare practices build trust with prospective patients before the first appointment, educate patients about treatments and procedures, and improve conversion rates across websites, social media, and paid advertising campaigns.",
  },
  {
    q: "What types of videos perform best for healthcare practices?",
    a: "Doctor introductions, patient testimonial videos, treatment explanation videos, and educational health content typically deliver the strongest trust-building and conversion results for dental, medical, and chiropractic practices.",
  },
  {
    q: "Does video help SEO?",
    a: "Yes. Video content can improve engagement metrics, increase time on site, and create additional search visibility opportunities through Google Video results, YouTube search, and AI-generated answers and summaries.",
  },
  {
    q: "Can video support AI search visibility?",
    a: "Yes. Educational, authoritative video content contributes to broader content authority and visibility signals evaluated by AI-powered search platforms, including content authority, user engagement signals, brand consistency, and expertise indicators.",
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
        "Healthcare Video Marketing",
        "Dental Video Marketing",
        "Medical Video Marketing",
        "Chiropractic Video Marketing",
        "Patient Education Videos",
        "YouTube Optimization for Healthcare",
        "Video SEO",
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
      name: "Healthcare Video Marketing Services | Attract, Educate & Convert More Patients | Vigorant",
      description:
        "Healthcare video marketing services for dental, medical, and chiropractic practices, including video strategy, content planning, production guidance, distribution, YouTube optimization, video SEO, and reporting.",
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
        { "@type": "ListItem", position: 3, name: "Healthcare Video Marketing Services", item: CANONICAL },
      ],
    },
    {
      "@type": "Service",
      "@id": `${CANONICAL}#service`,
      name: "Healthcare Video Marketing Services",
      provider: { "@id": "https://vigorant.com/#organization" },
      description:
        "Healthcare video marketing services for dental, medical, and chiropractic practices. Includes video marketing strategy, content planning, production recommendations, script development guidance, distribution strategy, YouTube optimization, video SEO optimization, social media video planning, and performance reporting.",
      areaServed: "United States",
      serviceType: "Healthcare Video Marketing",
      audience: {
        "@type": "Audience",
        audienceType:
          "Dental Practices, Medical Clinics, Chiropractic Offices, Specialty Healthcare Providers, Multi-location Practices",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Video Marketing Service Deliverables",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Video Strategy & Content Planning" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Script Development & Production Guidance" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "YouTube Optimization & Video SEO" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Distribution Strategy & Social Media Video Planning" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Performance Reporting" } },
        ],
      },
    },
    {
      "@type": "VideoObject",
      "@id": `${CANONICAL}#videoobject`,
      name: "Healthcare Video Marketing Services — Vigorant",
      description:
        "Strategic video marketing for dental, medical, and chiropractic practices. Build patient trust, educate prospective patients, and improve conversion rates with professionally planned video content.",
      thumbnailUrl: "https://vigorant.com/og/video-marketing.jpg",
      uploadDate: "2026-01-01",
      publisher: { "@id": "https://vigorant.com/#organization" },
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

export default function VideoMarketing() {
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
        <title>Healthcare Video Marketing Services | Attract, Educate & Convert More Patients | Vigorant</title>
        <meta
          name="description"
          content="Healthcare video marketing for dental, medical, and chiropractic practices. Build trust, educate patients, improve conversions, and strengthen online visibility with strategic video from Vigorant."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Healthcare Video Marketing Services | Vigorant" />
        <meta
          property="og:description"
          content="Strategic video marketing for dental, medical, and chiropractic practices. Build patient trust before the first appointment."
        />
        <meta property="og:url" content={CANONICAL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
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
        <meta itemProp="name" content="Healthcare Video Marketing Services" />
        <meta itemProp="provider" content="Vigorant" />
        <meta itemProp="areaServed" content="United States" />

        {/* ─────────── HERO (dark) ─────────── */}
        <section
          className="relative overflow-hidden text-white"
          style={{ background: "var(--gradient-dark)" }}
        >
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full blur-3xl"
            style={{ background: "hsl(var(--brand-purple) / 0.35)" }}
            animate={{ x: [0, 30, -10, 0], y: [0, 20, -10, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -left-32 h-[480px] w-[480px] rounded-full blur-3xl"
            style={{ background: "hsl(var(--brand-lavender) / 0.22)" }}
            animate={{ x: [0, -20, 10, 0], y: [0, -10, 20, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />
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
                  <Link to="/" className="hover:text-white">Home</Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link to="/services" className="hover:text-white">Services</Link>
                </li>
                <li aria-hidden>/</li>
                <li aria-current="page" className="text-white">Video Marketing</li>
              </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-start">
              <Reveal>
                <Eyebrow light>Video Marketing · Authority</Eyebrow>
                <h1
                  className="font-display font-extrabold leading-[1.05] tracking-[-0.04em] mt-5 text-white"
                  style={{ fontSize: "clamp(40px, 6vw, 76px)" }}
                >
                  Video is the fastest trust signal{" "}
                  <span className="text-brand-lavender">a healthcare practice has.</span>
                </h1>
                <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/75 leading-relaxed">
                  Strategy, scripts, optimization and distribution for dental, medical and chiropractic
                  practices — built so one shoot becomes a year of trust assets across YouTube, search,
                  social, ads and landing pages.
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
                    Get a free video audit <ArrowRight className="w-4 h-4" />
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

              {/* Floating reel mini-panel */}
              <Reveal delay={0.15}>
                <motion.aside
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-2xl border border-white/15 bg-white/[0.05] backdrop-blur-sm p-6 sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="section-label text-brand-lavender">Live reel</span>
                    <span className="font-mono-ui text-[10px] uppercase tracking-[0.2em] text-white/40">
                      04 formats
                    </span>
                  </div>

                  {/* abstract reel visual — no card primitive */}
                  <div className="mt-6 relative h-32 rounded-xl overflow-hidden border border-white/10"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 50%, hsl(var(--brand-purple) / 0.35), transparent 60%), hsl(var(--brand-deep) / 0.6)",
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-white/90 text-brand-deep">
                        <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
                      </span>
                    </div>
                    {/* wave bars */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-end gap-1 h-8">
                      {Array.from({ length: 28 }).map((_, i) => (
                        <motion.span
                          key={i}
                          className="flex-1 rounded-sm"
                          style={{ background: "hsl(var(--brand-lavender) / 0.85)" }}
                          animate={{ height: ["20%", "90%", "35%", "70%", "20%"] }}
                          transition={{
                            duration: 1.6 + (i % 5) * 0.15,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.04,
                          }}
                        />
                      ))}
                    </div>
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
                { k: "Plan", v: "Content map tied to patient intent" },
                { k: "Produce", v: "Plain-spoken scripts, healthcare-fit" },
                { k: "Optimize", v: "Titles, chapters, transcripts, schema" },
                { k: "Distribute", v: "YouTube, social, ads, embeds" },
              ].map((b) => (
                <div key={b.k}>
                  <div className="section-label">{b.k}</div>
                  <div className="font-display text-xl text-brand-deep mt-2 leading-tight">{b.v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── FORMATS LEDGER (no cards) ─────────── */}
        <section className="py-24 sm:py-28">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-start">
              <Reveal>
                <Eyebrow>The Library</Eyebrow>
                <h2
                  className="font-display font-extrabold text-brand-deep mt-4 leading-[1.05] tracking-[-0.03em]"
                  style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
                >
                  Four formats. One trust-building library.
                </h2>
                <p className="mt-5 text-brand-deep/70 leading-relaxed">
                  Every healthcare practice we work with starts from the same four formats. Each one
                  resolves a specific point of patient hesitation — and each one earns visibility on the
                  surfaces where prospective patients actually decide.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="rounded-3xl border border-brand-purple/15 overflow-hidden bg-background">
                  <div className="hidden md:grid grid-cols-[80px_1.2fr_1.4fr_110px_1.2fr] px-6 py-4 border-b border-brand-purple/15 bg-surface-secondary font-mono-ui text-[10px] uppercase tracking-[0.18em] text-brand-deep/60">
                    <span>Code</span>
                    <span>Format</span>
                    <span>Purpose</span>
                    <span>Runtime</span>
                    <span>Surface</span>
                  </div>
                  {FORMATS.map((f, i) => (
                    <div
                      key={f.code}
                      className={`grid grid-cols-1 md:grid-cols-[80px_1.2fr_1.4fr_110px_1.2fr] gap-y-1 gap-x-4 px-6 py-5 transition-colors hover:bg-brand-purple/[0.03] ${
                        i < FORMATS.length - 1 ? "border-b border-brand-purple/12" : ""
                      }`}
                    >
                      <span className="font-mono-ui text-[11px] text-brand-purple tracking-[0.14em] pt-0.5">
                        {f.code}
                      </span>
                      <span className="font-display text-lg text-brand-deep leading-tight">{f.name}</span>
                      <span className="text-sm text-brand-deep/75 leading-relaxed">{f.purpose}</span>
                      <span className="font-mono-ui text-xs text-brand-deep/60">{f.runtime}</span>
                      <span className="text-sm text-brand-deep/75">{f.surface}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─────────── PROCESS / TIMELINE ─────────── */}
        <section className="py-24 sm:py-32 bg-surface-secondary border-y border-brand-purple/10">
          <div className="container">
            <div className="max-w-3xl">
              <Eyebrow>The Process</Eyebrow>
              <h2
                className="font-display font-extrabold text-brand-deep mt-4 leading-[1.05] tracking-[-0.03em]"
                style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
              >
                Four phases. One disciplined production loop.
              </h2>
              <p className="mt-5 text-lg text-brand-deep/70 leading-relaxed">
                Every video we ship moves through the same sequence — so each shoot starts from a brief,
                a script, and a distribution plan, not a blank page.
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
                                  ? "bg-background text-brand-purple"
                                  : "bg-background text-brand-deep/50"
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
                <div
                  aria-hidden
                  className="absolute left-3 top-0 bottom-0 w-[2px] rounded-full"
                  style={{ background: "hsl(var(--brand-purple) / 0.18)" }}
                />
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
                        <span
                          aria-hidden
                          className={`absolute -left-[42px] sm:-left-[54px] top-1 inline-flex h-8 w-8 items-center justify-center rounded-full font-mono-ui text-[11px] transition-all duration-500 ${
                            isActive
                              ? "text-white scale-110"
                              : isPassed
                              ? "bg-background text-brand-purple border-2 border-brand-purple/30"
                              : "bg-background text-brand-deep/45 border-2 border-brand-purple/20"
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
                              {/* Inputs */}
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

                              {/* Output panel */}
                              <div
                                className={`rounded-2xl border p-6 transition-all ${
                                  isActive
                                    ? "border-brand-purple/35 -translate-y-1 shadow-[0_18px_46px_hsl(var(--brand-purple)/0.15)]"
                                    : "border-brand-purple/15"
                                }`}
                                style={{ background: "hsl(var(--background))" }}
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

        {/* ─────────── PRINCIPLES (numbered rows, no cards) ─────────── */}
        <section className="py-24 sm:py-28">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-start">
              <Reveal>
                <Eyebrow>Operating Principles</Eyebrow>
                <h2
                  className="font-display font-extrabold text-brand-deep mt-4 leading-[1.05] tracking-[-0.03em]"
                  style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
                >
                  Four rules that decide whether a video earns its budget.
                </h2>
                <p className="mt-5 text-brand-deep/70 leading-relaxed">
                  These principles are how we keep healthcare video from becoming expensive content
                  nobody watches — and how we make sure each shoot pays back across surfaces.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <ul className="border-t border-brand-purple/15">
                  {PRINCIPLES.map((p, i) => (
                    <li
                      key={p.h}
                      className="grid grid-cols-[auto_1fr] gap-6 sm:gap-8 py-7 border-b border-brand-purple/15"
                    >
                      <span
                        className="font-mono-ui text-[11px] tracking-[0.18em] text-brand-purple pt-2"
                        aria-hidden
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-xl sm:text-2xl text-brand-deep tracking-tight">
                          {p.h}
                        </h3>
                        <p className="mt-2 text-brand-deep/75 leading-relaxed">{p.p}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─────────── HANDOFF LEDGER ─────────── */}
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

        {/* ─────────── DARK RIVER ─────────── */}
        <section
          className="relative py-24 sm:py-32 text-white overflow-hidden"
          style={{ background: "var(--gradient-dark)" }}
        >
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
                Three ideas that shape every video we ship.
              </h2>
            </div>

            <div
              className="mt-14 rounded-3xl overflow-hidden border border-white/15 shadow-[0_24px_80px_hsl(var(--brand-deep)/0.4)]"
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
                  Common questions about healthcare video marketing.
                </h2>
                <p className="mt-5 text-brand-deep/70 leading-relaxed">
                  Short, honest answers. Want to walk through your video plan with us? Request a free
                  audit and we'll review formats, distribution and visibility together.
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

        {/* ─────────── RELATED (ledger rows) ─────────── */}
        <section className="bg-surface-secondary py-20 border-y border-brand-purple/10">
          <div className="container">
            <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
              <div>
                <Eyebrow>Related services</Eyebrow>
                <h2 className="font-display font-extrabold text-brand-deep mt-4 leading-[1.05] tracking-[-0.03em]"
                  style={{ fontSize: "clamp(24px, 3vw, 36px)" }}>
                  Pair video with the rest of the engine.
                </h2>
              </div>
              <Link to="/services" className="font-mono-ui text-xs text-brand-purple uppercase tracking-[0.18em] hover:text-brand-deep">
                All services →
              </Link>
            </div>

            <ul className="rounded-3xl border border-brand-purple/15 bg-background overflow-hidden">
              {RELATED.map((r, i) => (
                <li key={r.href} className={i < RELATED.length - 1 ? "border-b border-brand-purple/12" : ""}>
                  <Link
                    to={r.href}
                    className="grid grid-cols-[auto_1fr_auto] items-center gap-6 px-6 sm:px-8 py-5 hover:bg-brand-purple/[0.04] transition-colors"
                  >
                    <span className="font-mono-ui text-[11px] text-brand-purple tracking-[0.18em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block font-display text-lg sm:text-xl text-brand-deep">{r.label}</span>
                      <span className="block text-sm text-brand-deep/65 mt-0.5">{r.sub}</span>
                    </span>
                    <ArrowRight className="w-4 h-4 text-brand-purple" />
                  </Link>
                </li>
              ))}
            </ul>
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
              Turn your next shoot into a year of patient trust.
            </h2>
            <p className="mt-5 text-white/75 text-lg leading-relaxed">
              We'll audit your current video presence, identify the formats your audience actually
              rewards, and lay out the fastest path to higher-trust patient inquiries.
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
              href="https://www.nlm.nih.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-purple underline underline-offset-2"
            >
              National Library of Medicine (NIH)
            </a>{" "}
            — referenced for patient education and health communication best practices.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
