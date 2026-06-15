import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";

const ease = [0.16, 1, 0.3, 1] as const;
const CANONICAL = "https://vigorant.com/services/content-marketing";

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
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

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className={
        light
          ? "section-label inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-brand-lavender"
          : "section-label inline-block px-3 py-1 rounded-full bg-brand-purple/8 border border-brand-purple/20"
      }
    >
      {children}
    </span>
  );
}

const PROOF_TAGS = [
  "Patient education content",
  "SEO topic clusters",
  "AI-ready content structure",
  "Conversion-focused copy",
];

const HERO_METRICS = [
  { n: "01", p: "Audit content gaps, patient search intent, service-line priorities, and local demand before any article is assigned." },
  { n: "02", p: "Build topic clusters around treatments, symptoms, questions, locations, and decision-stage concerns that influence booking." },
  { n: "03", p: "Tie every content asset to a role: rank, educate, earn trust, support ads, improve conversion, or strengthen AI visibility." },
];

const FIT_ROWS = [
  { n: "01", h: "Practices competing in crowded local markets", p: "When many providers offer similar services, stronger content helps your practice explain why patients should choose you." },
  { n: "02", h: "Practices with underperforming service pages", p: "Improve thin or generic pages with clearer patient education, stronger search intent alignment, and conversion-focused copy." },
  { n: "03", h: "Practices publishing blogs without results", p: "Replace random posting with topic clusters, internal links, keyword intent, and measurable content priorities." },
  { n: "04", h: "Specialty practices with complex treatments", p: "High-value services need content that explains conditions, procedures, benefits, risks, alternatives, and next steps clearly." },
];

const PHASES = [
  {
    n: "01",
    nav: "Research",
    h: "Content Audit & Patient Intent Research",
    paras: [
      "We start with the signals that reveal what patients actually need — current rankings, content gaps, service priorities, local search demand, competitor coverage, and the questions patients ask before they book.",
      "The output is a clear map of what content should be created, refreshed, merged, or removed to support visibility and conversion.",
    ],
  },
  {
    n: "02",
    nav: "Architecture",
    h: "Topic Cluster & Content Architecture",
    paras: [
      "Content planning is organized around service lines, patient problems, treatment questions, locations, and decision-stage intent. Every page has a defined purpose within the broader authority system.",
      "Core service pages, supporting blogs, FAQs, internal links, and schema work together instead of competing with each other.",
    ],
  },
  {
    n: "03",
    nav: "Creation",
    h: "SEO Content Creation & Patient Education",
    paras: [
      "We create content that is medically responsible, easy to understand, and optimized for search. The goal is not keyword stuffing; it is helpful explanation that earns trust and guides action.",
      "Articles, service pages, comparison content, and FAQs are written to serve patients first while giving search engines and AI systems clear entity signals.",
    ],
  },
  {
    n: "04",
    nav: "Optimization",
    h: "AI Visibility, Schema & Conversion Optimization",
    paras: [
      "Content is structured for traditional SEO, local discovery, answer engines, and generative search. Headings, summaries, entities, internal links, and schema help machines understand the expertise behind the page.",
      "Conversion elements are built in so visitors have obvious next steps: call, book, request an audit, or explore related services.",
    ],
  },
  {
    n: "05",
    nav: "Refresh",
    h: "Performance Reporting & Content Refresh Roadmap",
    paras: [
      "Content is monitored for rankings, engagement, conversions, search impressions, and opportunities for refresh. Strong pages are expanded; weak pages are improved or consolidated.",
      "Quarterly reviews recalibrate the content roadmap against actual demand, competitive movement, AI visibility, and appointment growth.",
    ],
  },
];

const BLUEPRINT = [
  {
    area: "Research",
    label: "01",
    inputs: "Current rankings, content gaps, service priorities, local search demand, competitor coverage, patient questions before booking.",
    outputs: "Content audit report, gap map, refresh priorities, create vs. remove decisions.",
  },
  {
    area: "Architecture",
    label: "02",
    inputs: "Service lines, patient problems, treatment questions, locations, decision-stage intent, competitor content structure.",
    outputs: "Topic cluster map, page hierarchy, internal link plan, content calendar framework.",
  },
  {
    area: "Creation",
    label: "03",
    inputs: "Approved topic clusters, keyword intent, patient education goals, brand voice, compliance requirements.",
    outputs: "SEO articles, service page content, FAQs, comparison pages, entity-rich patient education content.",
  },
  {
    area: "Optimization",
    label: "04",
    inputs: "Published content, schema audit, heading structure, entity coverage, conversion analytics, AI search behavior.",
    outputs: "Schema markup plan, structured content updates, conversion element additions, AI visibility improvements.",
  },
  {
    area: "Refresh",
    label: "05",
    inputs: "Rankings, impressions, engagement, conversions, competitive movement, AI visibility data.",
    outputs: "Performance report, content refresh roadmap, quarterly recalibration, expansion and consolidation plan.",
  },
];

const ADAPTER = [
  "Specialty-specific topic clusters and patient intent",
  "Service-line content priorities and conversion goals",
  "Local SEO pages, blog themes, and internal links",
  "Patient education tone, reading level, and compliance awareness",
  "Entity-based SEO and conversational search visibility",
];

const RELATED = [
  { to: "/solutions/dental", label: "Dental Content Marketing", sub: "Content planning for general, cosmetic, implant, orthodontic, and specialty dental practices." },
  { to: "/solutions/medical", label: "Medical Content Marketing", sub: "Patient education content for primary care, specialty, and multi-location clinics." },
  { to: "/solutions/chiropractic", label: "Chiropractic Content Marketing", sub: "Condition, treatment, and wellness content for chiropractic patient acquisition." },
  { to: "/services/seo", label: "SEO & AI Optimization", sub: "Turn content into stronger visibility across search engines and AI platforms." },
];

const FAQS = [
  {
    q: "What is healthcare content marketing?",
    a: "Healthcare content marketing is the strategic creation of patient-focused content that educates people, improves search visibility, builds trust, and helps dental, medical, and chiropractic practices convert qualified visitors into appointments.",
  },
  {
    q: "How often should a practice publish content?",
    a: "Publishing frequency depends on competition, service priorities, and current authority. Many practices benefit from a monthly or biweekly cadence, but quality, intent alignment, and refresh strategy matter more than volume alone.",
  },
  {
    q: "Does content marketing support AI optimization?",
    a: "Yes. Strong content helps AI systems understand your expertise, services, locations, patient questions, and topical authority. Structured headings, FAQs, schema, and entity-rich explanations improve eligibility for answer engines and AI-generated summaries.",
  },
  {
    q: "Can content marketing help a new healthcare practice?",
    a: "Absolutely. Content is especially valuable during launch because it establishes service authority, local relevance, patient education, and long-term search visibility before paid campaigns become the only acquisition source.",
  },
];

const JSONLD = {
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
        "Healthcare Content Marketing",
        "Dental Content Marketing",
        "Medical Content Marketing",
        "Chiropractic Content Marketing",
        "Patient Education Content",
        "Healthcare SEO Content",
        "Content Strategy for Healthcare",
        "AI Engine Optimization",
        "Generative Engine Optimization",
        "Topical Authority for Healthcare",
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
      name: "Healthcare Content Marketing Services | Build Authority, Rank & Convert | Vigorant",
      description:
        "Healthcare content marketing services for dental, medical, and chiropractic practices, including content strategy, SEO topic clusters, patient education articles, service-page content, AI-ready content structure, schema planning, and conversion optimization.",
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
        { "@type": "ListItem", position: 3, name: "Healthcare Content Marketing Services", item: CANONICAL },
      ],
    },
    {
      "@type": "Service",
      "@id": `${CANONICAL}#service`,
      name: "Healthcare Content Marketing Services",
      provider: { "@id": "https://vigorant.com/#organization" },
      description:
        "Healthcare content marketing services for dental, medical, and chiropractic practices. Includes content strategy, topic cluster planning, patient education content, service page content, SEO blog writing, content refreshes, E-E-A-T optimization, schema recommendations, AI visibility planning, and performance reporting.",
      areaServed: "United States",
      serviceType: "Healthcare Content Marketing",
      audience: {
        "@type": "Audience",
        audienceType:
          "Dental Practices, Medical Clinics, Chiropractic Offices, Multi-location Healthcare Organizations, Specialty Healthcare Providers",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Content Marketing Service Deliverables",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Content Strategy & Topic Cluster Planning" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Blog Writing & Patient Education Content" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Service Page Content & Conversion Copy" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Visibility, Schema & Entity Optimization" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Content Performance Reporting & Refresh Planning" } },
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

export default function ContentMarketing() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activePhase, setActivePhase] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Healthcare Content Marketing Services | Build Authority, Rank & Convert | Vigorant</title>
        <meta
          name="description"
          content="Healthcare content marketing for dental, medical, and chiropractic practices. Build authority, improve SEO and AI visibility, educate patients, and convert search traffic into appointments."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Healthcare Content Marketing Services | Build Authority, Rank & Convert | Vigorant" />
        <meta
          property="og:description"
          content="Strategic healthcare content marketing for dental, medical, and chiropractic practices. Build topical authority, support SEO and AI visibility, educate patients, and generate more appointments."
        />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:image" content="https://vigorant.com/og/content-marketing.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Healthcare Content Marketing Services | Vigorant" />
        <meta name="twitter:description" content="SEO-driven, AI-ready healthcare content marketing for dental, medical, and chiropractic practices." />
        <meta name="twitter:image" content="https://vigorant.com/og/content-marketing.jpg" />
        <script type="application/ld+json">{JSON.stringify(JSONLD)}</script>
      </Helmet>

      <Nav />

      <main
        id="main"
        itemScope
        itemType="https://schema.org/Service"
        className="pt-24"
      >
        <meta itemProp="name" content="Healthcare Content Marketing Services" />
        <meta itemProp="provider" content="Vigorant" />
        <meta itemProp="areaServed" content="United States" />

        {/* HERO */}
        <section aria-labelledby="hero-h1" className="relative overflow-hidden bg-background">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full"
            style={{
              background: "radial-gradient(circle, hsl(247 93% 64% / 0.10), transparent 65%)",
              filter: "blur(60px)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 right-0 w-[560px] h-[560px] rounded-full"
            style={{
              background: "radial-gradient(circle, hsl(248 100% 75% / 0.18), transparent 65%)",
              filter: "blur(70px)",
            }}
          />

          <div className="container relative pt-10 sm:pt-14 pb-20 sm:pb-28">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center flex-wrap gap-1.5 font-mono-ui text-[11px] text-ink-muted list-none p-0 m-0">
                <li><Link to="/" className="hover:text-brand-purple transition-colors">Home</Link></li>
                <li className="text-ink-muted/50">/</li>
                <li><Link to="/services" className="hover:text-brand-purple transition-colors">Services</Link></li>
                <li className="text-ink-muted/50">/</li>
                <li aria-current="page" className="text-brand-deep">Healthcare Content Marketing</li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-[1.25fr_1fr] gap-10 lg:gap-14 items-start">
              <Reveal>
                <Eyebrow>Content Marketing</Eyebrow>
                <h1
                  id="hero-h1"
                  className="font-display text-brand-deep mt-4 leading-[1.05] tracking-tight"
                  style={{ fontSize: "clamp(34px, 6vw, 64px)", letterSpacing: "-0.03em" }}
                >
                  SEO-Driven Content That Builds{" "}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))" }}
                  >
                    Healthcare Authority
                  </span>
                </h1>
                <p className="mt-6 text-[16.5px] sm:text-[18px] leading-[1.65] text-ink-muted max-w-2xl">
                  Most healthcare content fails because it is written as filler, not as a growth asset. We build content systems that answer patient questions, strengthen topical authority, support SEO and AI visibility, and turn education into booked appointments.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/free-audit"
                    className="btn-primary-grad inline-flex items-center justify-center gap-2 font-bold text-[14px] sm:text-[16px] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full min-h-[46px] sm:min-h-[48px]"
                    style={{
                      background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))",
                      boxShadow: "0 12px 32px hsl(247 93% 64% / 0.4)",
                    }}
                  >
                    Request a Content Audit <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/free-audit"
                    className="btn-secondary-outline inline-flex items-center justify-center gap-2 font-semibold text-[14px] sm:text-[15px] px-5 sm:px-6 py-3 sm:py-3.5 rounded-full min-h-[46px] sm:min-h-[48px]"
                  >
                    Book a Content Strategy Call
                  </Link>
                </div>

                <ul className="mt-8 flex flex-wrap gap-2 list-none p-0">
                  {PROOF_TAGS.map((t) => (
                    <li
                      key={t}
                      className="font-mono-ui text-[11.5px] tracking-[0.06em] text-brand-deep/75 px-3 py-1.5 rounded-full bg-white/75 border border-brand-purple/20"
                      style={{ boxShadow: "0 10px 28px hsl(247 93% 64% / 0.07)" }}
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* Content OS dashboard panel */}
              <Reveal delay={0.1}>
                <aside
                  className="relative rounded-2xl p-6 sm:p-7 overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(0 0% 100% / 0.86), hsl(250 100% 98% / 0.78))",
                    border: "1px solid hsl(247 93% 64% / 0.18)",
                    boxShadow: "0 28px 90px hsl(247 93% 64% / 0.16)",
                  }}
                >
                  <div aria-hidden className="absolute inset-0 grid-overlay opacity-30" />
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute -top-20 -right-10 w-72 h-72 rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle, hsl(248 100% 75% / 0.40), transparent 65%)",
                      filter: "blur(50px)",
                    }}
                    animate={{ y: [0, 10, 0], x: [0, -8, 0] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                  />

                  <div className="relative">
                    <div className="flex items-center justify-between font-mono-ui text-[11px] tracking-[0.12em] text-brand-purple">
                      <span>CONTENT OS</span>
                      <span className="px-2 py-1 rounded-full bg-surface-secondary border border-brand-purple/20">
                        v2026
                      </span>
                    </div>

                    <h3
                      className="font-display text-brand-deep mt-4 leading-[1.15]"
                      style={{ fontSize: "clamp(20px, 2.4vw, 26px)", letterSpacing: "-0.025em" }}
                    >
                      Healthcare Content Authority Plan
                    </h3>

                    {/* Progress bar */}
                    <div className="mt-5 h-2 rounded-full overflow-hidden" style={{ background: "hsl(250 100% 98%)" }}>
                      <motion.span
                        className="block h-full rounded-full"
                        style={{
                          background:
                            "linear-gradient(90deg, hsl(248 100% 75%), hsl(247 93% 64%))",
                        }}
                        animate={{ width: ["20%", "92%", "60%"] }}
                        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </div>

                    {/* Mini metrics */}
                    <div className="mt-5 grid grid-cols-3 gap-3">
                      {[
                        { l: "TOPICS", v: "+42%", s: "coverage" },
                        { l: "SEARCH", v: "3.4×", s: "visibility" },
                        { l: "AI VIS.", v: "4.1×", s: "AEO/GEO" },
                      ].map((m) => (
                        <div
                          key={m.l}
                          className="rounded-xl p-3"
                          style={{
                            background: "hsl(0 0% 100% / 0.9)",
                            border: "1px solid hsl(247 93% 64% / 0.18)",
                            boxShadow: "0 16px 42px hsl(247 93% 64% / 0.10)",
                          }}
                        >
                          <span className="block font-mono-ui text-[10.5px] tracking-[0.1em] text-brand-purple">
                            {m.l}
                          </span>
                          <strong className="block font-display text-brand-deep text-[22px] leading-none mt-1">
                            {m.v}
                          </strong>
                          <small className="block text-[10.5px] text-brand-deep/45 mt-1">{m.s}</small>
                        </div>
                      ))}
                    </div>

                    {/* Flow strip */}
                    <div
                      className="mt-5 rounded-xl p-3 flex items-center gap-2 flex-wrap"
                      style={{
                        background: "hsl(0 0% 100%)",
                        border: "1px solid hsl(247 93% 64% / 0.18)",
                        boxShadow: "0 16px 44px hsl(247 93% 64% / 0.11)",
                      }}
                    >
                      {["Research", "Map", "Create", "Refresh"].map((s, i, arr) => (
                        <span key={s} className="flex items-center gap-2">
                          <span
                            className="px-2.5 py-1 rounded-full font-mono-ui text-[10.5px] tracking-[0.08em]"
                            style={{ background: "hsl(250 100% 98%)", color: "hsl(247 93% 64%)" }}
                          >
                            {s}
                          </span>
                          {i < arr.length - 1 && (
                            <span
                              aria-hidden
                              className="block w-6 h-[2px] rounded-full"
                              style={{
                                background:
                                  "linear-gradient(90deg, hsl(248 100% 75%), hsl(247 93% 64%))",
                              }}
                            />
                          )}
                        </span>
                      ))}
                    </div>

                    {/* HERO mini ledger */}
                    <div className="mt-5 divide-y divide-brand-purple/15 border-t border-brand-purple/15">
                      {HERO_METRICS.map((m) => (
                        <div key={m.n} className="grid grid-cols-[36px_1fr] gap-3 py-3">
                          <strong
                            className="font-display text-[18px] leading-none not-italic"
                            style={{ color: "hsl(247 93% 64%)" }}
                          >
                            {m.n}
                          </strong>
                          <p className="text-[12.5px] leading-[1.55] text-brand-deep/75">{m.p}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </aside>
              </Reveal>
            </div>
          </div>
        </section>

        {/* THESIS */}
        <section
          aria-labelledby="thesis-h2"
          className="py-20 sm:py-28 bg-surface-secondary border-y border-brand-purple/10"
        >
          <div className="container">
            <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-start">
              <Reveal>
                <blockquote
                  className="relative pl-10 font-display text-brand-deep text-[22px] sm:text-[26px] leading-[1.35]"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  <span
                    aria-hidden
                    className="absolute left-0 -top-3 font-display"
                    style={{ color: "hsl(248 100% 75%)", fontSize: "5rem", lineHeight: 0.55 }}
                  >
                    "
                  </span>
                  Content only works when it is built to answer real patient questions and support measurable growth.
                </blockquote>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="border-l-[3px] border-brand-purple pl-6">
                  <Eyebrow>Why content matters</Eyebrow>
                  <h2
                    id="thesis-h2"
                    className="font-display text-brand-deep mt-4 leading-[1.1] tracking-tight"
                    style={{ fontSize: "clamp(26px, 4.2vw, 42px)", letterSpacing: "-0.03em" }}
                  >
                    Content is what connects patient questions to your services, authority, and appointments.
                  </h2>
                  <p className="mt-5 text-[16.5px] leading-[1.7] text-ink-muted">
                    Most practices have disconnected pages, thin blogs, and generic service copy. What's missing is a structured content system that aligns patient intent, local demand, clinical expertise, and conversion goals. That system is the work.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* MARKET FIT */}
        <section aria-labelledby="fit-h2" className="py-20 sm:py-28">
          <div className="container">
            <Reveal>
              <div className="max-w-3xl">
                <Eyebrow>Who it's for</Eyebrow>
                <h2
                  id="fit-h2"
                  className="font-display text-brand-deep mt-4 leading-[1.1] tracking-tight"
                  style={{ fontSize: "clamp(28px, 4.5vw, 46px)", letterSpacing: "-0.03em" }}
                >
                  Built for healthcare practices that need content to rank, educate, and convert.
                </h2>
              </div>
            </Reveal>

            <div className="mt-12 border-t border-brand-purple/20">
              {FIT_ROWS.map((r, i) => (
                <Reveal key={r.h} delay={i * 0.05}>
                  <div
                    className="grid grid-cols-[64px_1fr] md:grid-cols-[80px_320px_1fr] gap-4 md:gap-10 py-8 border-b border-brand-purple/20 items-start transition-transform hover:translate-x-2"
                  >
                    <span
                      className="font-mono-ui font-black text-brand-purple text-[22px] leading-none rounded-lg bg-surface-secondary px-3 py-2 inline-flex items-center justify-center"
                    >
                      {r.n}
                    </span>
                    <h3
                      className="font-extrabold text-brand-deep text-[18px] sm:text-[20px] leading-snug"
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      {r.h}
                    </h3>
                    <p className="text-[14.5px] leading-[1.7] text-ink-muted col-span-2 md:col-span-1">
                      {r.p}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PHASES — sticky sidebar long-form */}
        <section
          aria-labelledby="phases-h2"
          className="py-20 sm:py-28 bg-surface-secondary border-y border-brand-purple/10"
        >
          <div className="container">
            <Reveal>
              <div className="max-w-3xl">
                <Eyebrow>The 5-phase framework</Eyebrow>
                <h2
                  id="phases-h2"
                  className="font-display text-brand-deep mt-4 leading-[1.1] tracking-tight"
                  style={{ fontSize: "clamp(28px, 4.5vw, 46px)", letterSpacing: "-0.03em" }}
                >
                  How a Vigorant content marketing system is built.
                </h2>
              </div>
            </Reveal>

            <div className="mt-12 grid lg:grid-cols-[220px_1fr] gap-10 lg:gap-16 items-start">
              <nav aria-label="Phase index" className="hidden lg:block lg:sticky lg:top-28">
                <ol className="list-none p-0 m-0 border-t border-brand-purple/20">
                  {PHASES.map((e, i) => {
                    const active = activePhase === i;
                    return (
                      <li key={e.n} className="border-b border-brand-purple/20">
                        <a
                          href={`#phase-${e.n}`}
                          onClick={() => setActivePhase(i)}
                          className={`block py-4 transition-all font-black ${
                            active ? "text-brand-purple pl-5" : "text-brand-deep/55 hover:text-brand-purple"
                          }`}
                          style={{ letterSpacing: "-0.01em" }}
                        >
                          <span className="font-mono-ui text-[10.5px] uppercase tracking-[0.14em] block mb-1 opacity-80">
                            {e.n}
                          </span>
                          {e.nav}
                        </a>
                      </li>
                    );
                  })}
                </ol>
              </nav>

              <div>
                {PHASES.map((e, i) => (
                  <motion.article
                    key={e.n}
                    id={`phase-${e.n}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30% 0px -40% 0px" }}
                    onViewportEnter={() => setActivePhase(i)}
                    transition={{ duration: 0.7, ease }}
                    className="py-10 sm:py-14 border-b border-brand-purple/20 first:pt-0 scroll-mt-32"
                  >
                    <span
                      className={`section-label inline-block px-3 py-1 rounded-full transition-all ${
                        activePhase === i
                          ? "text-white border border-transparent"
                          : "bg-brand-purple/8 border border-brand-purple/20 text-brand-purple"
                      }`}
                      style={
                        activePhase === i
                          ? {
                              background:
                                "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))",
                              boxShadow: "0 10px 30px hsl(247 93% 64% / 0.28)",
                            }
                          : undefined
                      }
                    >
                      Phase {e.n}
                    </span>
                    <h3
                      className="font-display text-brand-deep mt-4 leading-[1.1] tracking-tight"
                      style={{ fontSize: "clamp(24px, 3.6vw, 36px)", letterSpacing: "-0.03em" }}
                    >
                      {e.h}
                    </h3>
                    {e.paras.map((p, j) => (
                      <p key={j} className="mt-4 text-[16px] leading-[1.75] text-ink-muted max-w-2xl">
                        {p}
                      </p>
                    ))}
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BLUEPRINT TABLE */}
        <section aria-labelledby="blueprint-h2" className="py-20 sm:py-28">
          <div className="container">
            <Reveal>
              <div className="max-w-3xl">
                <Eyebrow>Inputs & outputs</Eyebrow>
                <h2
                  id="blueprint-h2"
                  className="font-display text-brand-deep mt-4 leading-[1.1] tracking-tight"
                  style={{ fontSize: "clamp(28px, 4.5vw, 46px)", letterSpacing: "-0.03em" }}
                >
                  The content marketing blueprint.
                </h2>
                <p className="mt-5 text-[16px] leading-[1.7] text-ink-muted">
                  Each phase has defined inputs and defined deliverables. No mystery, no scope drift.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 flex flex-col gap-4">
              {BLUEPRINT.map((b, i) => (
                <Reveal key={b.area} delay={i * 0.04}>
                  <div
                    className="grid grid-cols-1 md:grid-cols-[200px_1fr_1fr] rounded-2xl overflow-hidden transition-all hover:-translate-y-1"
                    style={{
                      background: "hsl(0 0% 100% / 0.72)",
                      border: "1px solid hsl(247 93% 64% / 0.18)",
                      boxShadow: "0 18px 50px hsl(247 93% 64% / 0.08)",
                    }}
                  >
                    {/* Area cell — dark */}
                    <div
                      className="p-6 sm:p-7 flex flex-col gap-3 justify-center"
                      style={{
                        background:
                          "linear-gradient(135deg, hsl(248 49% 15%), hsl(250 45% 19%))",
                      }}
                    >
                      <span
                        className="self-start font-mono-ui font-black text-white text-[11px] tracking-[0.14em] px-2.5 py-1 rounded-full"
                        style={{
                          background: "hsl(0 0% 100% / 0.12)",
                          border: "1px solid hsl(0 0% 100% / 0.18)",
                        }}
                      >
                        {b.label}
                      </span>
                      <strong
                        className="font-display text-white text-[22px] leading-[1.15]"
                        style={{ letterSpacing: "-0.025em" }}
                      >
                        {b.area}
                      </strong>
                    </div>

                    {/* Inputs cell */}
                    <div className="p-6 sm:p-7 border-t md:border-t-0 md:border-l border-brand-purple/15 bg-white">
                      <small className="font-mono-ui text-[11px] tracking-[0.1em] text-brand-purple block">
                        INPUTS
                      </small>
                      <p className="mt-2 text-[14.5px] leading-[1.65] text-ink-muted">{b.inputs}</p>
                    </div>

                    {/* Outputs cell */}
                    <div
                      className="p-6 sm:p-7 border-t md:border-t-0 md:border-l border-brand-purple/15"
                      style={{
                        background: "linear-gradient(135deg, #ffffff, hsl(250 100% 98%))",
                      }}
                    >
                      <small className="font-mono-ui text-[11px] tracking-[0.1em] text-brand-purple block">
                        OUTPUTS
                      </small>
                      <p className="mt-2 text-[14.5px] leading-[1.65] text-brand-deep">{b.outputs}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ADAPTER DARK */}
        <section
          aria-labelledby="adapter-h2"
          className="relative overflow-hidden py-20 sm:py-28"
          style={{ background: "var(--gradient-dark)" }}
          data-dark="true"
        >
          <div aria-hidden className="absolute inset-0 grid-overlay opacity-25" />
          <div aria-hidden className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-[640px] h-[640px] rounded-full"
              style={{
                background: "radial-gradient(circle, hsl(247 93% 64% / 0.22), transparent 65%)",
                filter: "blur(80px)",
              }}
            />
          </div>

          <div className="container relative">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <Reveal>
                <Eyebrow light>Content adapter</Eyebrow>
                <h2
                  id="adapter-h2"
                  className="font-display text-white mt-4 leading-[1.1] tracking-tight"
                  style={{ fontSize: "clamp(26px, 4.2vw, 42px)", letterSpacing: "-0.03em" }}
                >
                  The same framework, adapted to your specialty.
                </h2>
                <p className="mt-5 text-[16px] leading-[1.7] text-white/75">
                  Dental, medical, and chiropractic practices all need content that builds trust and visibility. The content strategy adapts to your services, patient concerns, local market, and clinical decision journey.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div
                  className="rounded-2xl p-8 sm:p-10"
                  style={{
                    background: "hsl(0 0% 100% / 0.05)",
                    border: "1px solid hsl(0 0% 100% / 0.12)",
                  }}
                >
                  <h3 className="font-extrabold text-white text-[18px] sm:text-[20px]">
                    What the content strategy customizes
                  </h3>
                  <ul className="mt-6 list-none p-0 border-t border-white/14">
                    {ADAPTER.map((t, i) => (
                      <li
                        key={i}
                        className="grid grid-cols-[44px_1fr] gap-4 py-4 border-b border-white/14 items-start"
                      >
                        <span className="font-mono-ui text-[11px] uppercase tracking-[0.14em] text-brand-lavender/80 pt-0.5">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="text-[14.5px] leading-[1.65] text-white/80">
                          {i === ADAPTER.length - 1 ? (
                            <>
                              Entity-based SEO and{" "}
                              <Link
                                to="/services/seo"
                                className="text-brand-lavender font-semibold underline underline-offset-4"
                              >
                                conversational search visibility
                              </Link>
                            </>
                          ) : (
                            t
                          )}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section
          aria-label="Related services"
          className="border-t border-brand-purple/10 bg-surface-secondary py-14"
        >
          <div className="container">
            <span className="font-mono-ui text-[11px] uppercase tracking-[0.14em] text-brand-purple">
              Related services
            </span>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-px bg-brand-purple/15 border border-brand-purple/15 rounded-2xl overflow-hidden">
              {RELATED.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="group bg-background p-6 sm:p-7 flex flex-col gap-2 hover:bg-surface-secondary transition-colors"
                >
                  <span
                    className="font-extrabold text-brand-deep text-[15.5px] flex items-center gap-2"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {l.label}
                    <ArrowRight className="w-4 h-4 text-brand-purple transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="font-mono-ui text-[11.5px] text-ink-muted/75 leading-[1.55]">
                    {l.sub}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-h2" className="py-20 sm:py-28">
          <div className="container">
            <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16 items-start">
              <Reveal>
                <Eyebrow>FAQ</Eyebrow>
                <h2
                  id="faq-h2"
                  className="font-display text-brand-deep mt-4 leading-[1.1] tracking-tight"
                  style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}
                >
                  Frequently Asked Questions
                </h2>
                <p className="mt-5 text-[15.5px] leading-[1.7] text-ink-muted">
                  Common questions practices ask before investing in healthcare content marketing.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="border-t border-brand-purple/20">
                  {FAQS.map((f, i) => {
                    const open = openFaq === i;
                    return (
                      <div key={i} className="border-b border-brand-purple/15">
                        <button
                          onClick={() => setOpenFaq(open ? null : i)}
                          aria-expanded={open}
                          className="w-full flex items-center justify-between gap-6 py-5 text-left"
                        >
                          <span
                            className="font-extrabold text-brand-deep text-[16px] sm:text-[17.5px] leading-snug"
                            style={{ letterSpacing: "-0.01em" }}
                          >
                            {f.q}
                          </span>
                          <span
                            aria-hidden
                            className={`shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full transition-all ${
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
                          <p className="pb-5 pr-12 text-[14.5px] leading-[1.7] text-ink-muted">{f.a}</p>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          aria-labelledby="cta-h2"
          className="relative overflow-hidden py-20 sm:py-28"
          style={{ background: "var(--gradient-dark)" }}
          data-dark="true"
        >
          <div aria-hidden className="absolute inset-0 grid-overlay opacity-25" />
          <div aria-hidden className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-[640px] h-[640px] rounded-full"
              style={{
                background: "radial-gradient(circle, hsl(247 93% 64% / 0.25), transparent 65%)",
                filter: "blur(80px)",
              }}
            />
          </div>
          <div className="container relative max-w-3xl text-center">
            <Reveal>
              <Eyebrow light>Ready for better content?</Eyebrow>
              <h2
                id="cta-h2"
                className="font-display text-white mt-4 leading-[1.1] tracking-tight"
                style={{ fontSize: "clamp(30px, 5vw, 52px)", letterSpacing: "-0.03em" }}
              >
                Stop publishing filler. Start building authority.
              </h2>
              <p className="mt-5 text-[16.5px] leading-[1.7] text-white/75">
                We'll audit your existing content, identify the strongest ranking and conversion opportunities, and outline a content roadmap built around SEO, patient education, local demand, and AI visibility.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  to="/free-audit"
                  className="btn-primary-grad inline-flex items-center justify-center gap-2 font-bold text-[14px] sm:text-[16px] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full min-h-[46px] sm:min-h-[48px]"
                  style={{
                    background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))",
                    boxShadow: "0 12px 32px hsl(247 93% 64% / 0.4)",
                  }}
                >
                  Request a Content Audit <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Authority reference */}
        <div className="border-t border-brand-purple/10 py-5 px-6 text-center">
          <p className="font-mono-ui text-[11.5px] text-ink-muted/70">
            External reference:{" "}
            <a
              href="https://www.cdc.gov/health-literacy/php/develop-materials/plain-language.html"
              rel="noopener noreferrer"
              target="_blank"
              className="text-brand-purple underline underline-offset-4"
            >
              CDC Plain Language Materials
            </a>{" "}
            — used for health-literate patient education and clear healthcare content.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
