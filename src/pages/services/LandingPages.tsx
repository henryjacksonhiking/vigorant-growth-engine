import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, Plus, Play } from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";

const ease = [0.16, 1, 0.3, 1] as const;
const CANONICAL = "https://vigorant.com/services/landing-pages";

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

const PROOF_TAGS = ["Higher conversion", "Better lead quality", "Lower ad costs", "More appointments"];

const HERO_METRICS = [
  { n: "01", p: "Define the page goal, audience, campaign source, and single conversion action before writing a word." },
  { n: "02", p: "Build compelling headlines, trust signals, social proof, and frictionless calls-to-action around patient intent." },
  { n: "03", p: "Track appointment requests, phone calls, form completions, and A/B test improvements over time." },
];

const EVIDENCE = [
  { h: "Strategy and copy", p: "Landing page strategy, conversion optimization, copywriting, and UX recommendations tailored to the campaign goal and patient audience." },
  { h: "Trust and build-ready elements", p: "Mobile optimization direction, trust signal implementation — testimonials, credentials, reviews — and campaign-specific content structure." },
  { h: "Measurement and reporting", p: "Analytics integration, performance reporting tied to appointment requests and conversions, and A/B testing recommendations for continued optimization." },
];

const ESSAYS = [
  {
    id: "authority-1",
    nav: "Conversion",
    n: "01",
    h: "Why Most Healthcare Landing Pages Underperform",
    paras: [
      "Many landing pages fail to convert because they have weak messaging, lack trust signals, create confusion, present too many options, ignore patient psychology, or lack clear calls-to-action.",
      "Successful landing pages combine persuasive messaging, strategic design, and trust-building elements. The goal is not a beautiful page — it is a page that generates appointment requests, consultation bookings, and new patient inquiries at the lowest possible cost.",
    ],
  },
  {
    id: "authority-2",
    nav: "Messaging",
    n: "02",
    h: "Conversion-Focused Messaging and Patient Psychology",
    paras: [
      "Healthcare decisions are personal. Patients evaluating a practice through a landing page are often anxious, comparing options, or uncertain about cost, process, or outcomes. Effective landing page messaging addresses those concerns directly.",
      "The right headline, value proposition, trust signals, and call-to-action — built around a specific audience and campaign intent — reduce hesitation and guide patients toward the one action the page is designed to produce.",
    ],
  },
  {
    id: "authority-3",
    nav: "AI Search",
    n: "03",
    h: "Landing Pages in the AI Search Era",
    paras: [
      "Search behavior is changing. AI-powered search experiences increasingly reward pages that provide clear answers, strong user engagement, structured content, relevant intent matching, and trustworthy information.",
      "Well-designed landing pages support both traditional search performance and AI-driven visibility strategies. Pages built around specific patient intent, structured with clear headings, and populated with credible content are more likely to be surfaced in AI-generated answers and local search results.",
    ],
  },
];

const PRINCIPLES = [
  { h: "Audience & Offer Analysis", p: "Identify patient intent, motivations, concerns, campaign source, and conversion barriers before the page is structured or a word is written." },
  { h: "Conversion-Focused Messaging", p: "Develop compelling headlines, value propositions, service explanations, and calls-to-action that match patient intent and remove hesitation." },
  { h: "Trust & Credibility Building", p: "Integrate testimonials, provider credentials, patient reviews, certifications, and proof elements that support patient decision-making." },
  { h: "Performance Measurement", p: "Track conversions, appointment requests, phone calls, and campaign effectiveness with analytics integration and A/B testing recommendations." },
];

const PAGE_TYPES = [
  "Google Ads, Meta Ads, and paid campaign landing pages designed for maximum conversion efficiency",
  "Treatment-specific, new patient offer, and specialty service pages aligned with patient search intent",
  "Location-specific, multi-location, and promotional campaign pages built around local patient demand",
];

const RELATED = [
  { to: "/services/website-design", label: "Website Design & CRO", sub: "Apply conversion principles across the full practice website." },
  { to: "/services/paid-ads", label: "Paid Advertising", sub: "Build landing pages that maximize ad spend ROI." },
  { to: "/services/marketing-strategy", label: "Marketing Strategy", sub: "Align landing pages with a broader patient acquisition plan." },
  { to: "/services/seo", label: "SEO & AI Optimization", sub: "Support search visibility with intent-matched content." },
];

const FAQS = [
  { q: "Why not send traffic directly to my homepage?", a: "Homepages are designed to serve multiple audiences and goals. Landing pages are designed around a single, specific conversion goal and consistently outperform general website pages for paid and campaign traffic." },
  { q: "Do landing pages improve Google Ads performance?", a: "Yes. A landing page aligned with the ad's message, audience intent, and conversion goal improves Quality Score, reduces cost per click, and increases conversion rates — improving overall campaign ROI." },
  { q: "Can landing pages help SEO?", a: "When strategically implemented, landing pages can support local SEO, treatment-specific search visibility, and conversion optimization. Service-specific and location-specific pages can rank for intent-driven queries that general pages do not target." },
  { q: "Do landing pages support AI visibility?", a: "Yes. Well-structured landing pages with clear answers, relevant intent matching, and strong content signals align with how AI-powered search platforms evaluate and surface healthcare content." },
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
      description: "Healthcare-exclusive growth marketing agency providing AI-driven patient acquisition for dental, medical, and chiropractic practices.",
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
      "@type": "BreadcrumbList",
      "@id": `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://vigorant.com/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://vigorant.com/services" },
        { "@type": "ListItem", position: 3, name: "Healthcare Landing Page Design Services", item: CANONICAL },
      ],
    },
    {
      "@type": "Service",
      "@id": `${CANONICAL}#service`,
      name: "Healthcare Landing Page Design Services",
      provider: { "@id": "https://vigorant.com/#organization" },
      description: "Conversion-focused landing page design for healthcare practices. Includes landing page strategy, conversion optimization, copywriting, UX recommendations, mobile optimization, trust signal implementation, A/B testing recommendations, analytics integration, and performance reporting.",
      areaServed: "United States",
      serviceType: "Healthcare Landing Page Design",
      audience: {
        "@type": "Audience",
        audienceType: "Dental Practices, Medical Clinics, Chiropractic Offices, Specialty Healthcare Providers, Multi-location Practices",
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

export default function LandingPages() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeEssay, setActiveEssay] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Healthcare Landing Page Design Services | Convert More Visitors into Patients | Vigorant</title>
        <meta
          name="description"
          content="High-converting landing pages for dental, medical, and chiropractic practices. Increase patient inquiries, appointment requests, and marketing ROI with conversion-focused landing page design from Vigorant."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Healthcare Landing Page Design Services | Convert More Visitors into Patients | Vigorant" />
        <meta
          property="og:description"
          content="High-converting landing pages for dental, medical, and chiropractic practices. Increase patient inquiries, appointment requests, and marketing ROI with conversion-focused design from Vigorant."
        />
        <meta property="og:url" content={CANONICAL} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(JSONLD)}</script>
      </Helmet>

      <Nav />

      <main
        id="main"
        itemScope
        itemType="https://schema.org/Service"
        className="pt-24"
      >
        <meta itemProp="name" content="Healthcare Landing Page Design Services" />
        <meta itemProp="provider" content="Vigorant" />
        <meta itemProp="areaServed" content="United States" />

        {/* HERO — dual-glow light hero with dark visual panel */}
        <section
          aria-labelledby="hero-h1"
          className="relative overflow-hidden bg-background"
        >
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
                <li aria-current="page" className="text-brand-deep">Healthcare Landing Page Design Services</li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-[1.25fr_1fr] gap-10 lg:gap-14 items-start">
              <Reveal>
                <Eyebrow>Landing Pages</Eyebrow>
                <h1
                  id="hero-h1"
                  className="font-display text-brand-deep mt-4 leading-[1.05] tracking-tight"
                  style={{ fontSize: "clamp(34px, 6vw, 64px)", letterSpacing: "-0.03em" }}
                >
                  High-Converting Landing Pages for{" "}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))" }}
                  >
                    Healthcare Practices
                  </span>
                </h1>
                <p className="mt-6 text-[16.5px] sm:text-[18px] leading-[1.65] text-ink-muted max-w-2xl">
                  Turn more clicks into patients. Driving traffic is only half the battle — if visitors do not take action, your marketing investment is wasted. Vigorant creates healthcare landing pages designed to convert visitors into appointment requests, phone calls, consultations, and new patients.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/free-audit"
                    className="inline-flex items-center justify-center gap-2 font-bold text-[14px] sm:text-[15px] text-white px-6 py-3 rounded-full transition-all hover:-translate-y-0.5"
                    style={{
                      background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))",
                      boxShadow: "0 12px 32px hsl(247 93% 64% / 0.4)",
                    }}
                  >
                    Request a Landing Page Audit <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/free-audit"
                    className="inline-flex items-center justify-center gap-2 font-semibold text-[14px] sm:text-[15px] text-brand-deep px-5 py-3 rounded-full border-[1.5px] border-brand-purple/25 hover:border-brand-purple hover:bg-surface-secondary transition-all"
                  >
                    Book a Conversion Strategy Consultation
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

              {/* Dark visual panel — editorial, not card-grid */}
              <Reveal delay={0.1}>
                <aside
                  className="relative rounded-3xl p-6 sm:p-7 overflow-hidden"
                  style={{
                    background: "var(--gradient-dark)",
                    border: "1px solid hsl(248 100% 88% / 0.18)",
                    boxShadow: "0 36px 90px hsl(248 49% 15% / 0.28)",
                  }}
                >
                  <div aria-hidden className="absolute inset-0 grid-overlay opacity-20" />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-20 -right-10 w-72 h-72 rounded-full"
                    style={{
                      background: "radial-gradient(circle, hsl(248 100% 75% / 0.30), transparent 65%)",
                      filter: "blur(50px)",
                    }}
                  />

                  <div className="relative">
                    <span className="inline-flex items-center gap-2 font-mono-ui text-[10.5px] uppercase tracking-[0.14em] text-white/85 px-3 py-1.5 rounded-full bg-white/10 border border-white/15">
                      Conversion-first landing system
                    </span>

                    {/* Stage with play ring */}
                    <div
                      className="mt-5 relative rounded-2xl overflow-hidden aspect-[16/10] flex items-center justify-center"
                      style={{
                        border: "1px solid hsl(0 0% 100% / 0.16)",
                        background: "linear-gradient(135deg, hsl(0 0% 100% / 0.10), hsl(0 0% 100% / 0.04))",
                      }}
                    >
                      <motion.span
                        aria-hidden
                        className="relative inline-flex items-center justify-center w-20 h-20 rounded-full"
                        style={{
                          background: "linear-gradient(135deg, hsl(248 100% 75%), hsl(247 93% 64%))",
                          boxShadow: "0 0 0 16px hsl(248 100% 75% / 0.16), 0 20px 55px hsl(247 93% 64% / 0.45)",
                        }}
                        animate={{ scale: [1, 1.06, 1] }}
                        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Play className="w-7 h-7 text-white" fill="currentColor" />
                      </motion.span>

                      {/* Wave bars */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-end gap-1.5 h-8">
                        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                          <motion.span
                            key={i}
                            className="block w-1 rounded-full bg-white/20"
                            animate={{ height: ["20%", "100%", "30%", "70%", "20%"] }}
                            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.12 }}
                            style={{ height: "30%" }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Metrics ledger — row-based, not card grid */}
                    <div className="mt-6 divide-y divide-white/10">
                      {HERO_METRICS.map((m) => (
                        <div key={m.n} className="grid grid-cols-[44px_1fr] gap-4 py-4 first:pt-0 last:pb-0">
                          <strong
                            className="font-display text-[22px] leading-none not-italic"
                            style={{ color: "hsl(248 100% 75%)" }}
                          >
                            {m.n}
                          </strong>
                          <p className="text-[13.5px] leading-[1.6] text-white/80">{m.p}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </aside>
              </Reveal>
            </div>
          </div>
        </section>

        {/* THESIS BLOCK */}
        <section aria-labelledby="thesis-h2" className="py-20 sm:py-28 bg-surface-secondary border-y border-brand-purple/10">
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
                  A landing page designed around one goal consistently outperforms a homepage built to serve many.
                </blockquote>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="border-l-[3px] border-brand-purple pl-6">
                  <Eyebrow>Why it matters</Eyebrow>
                  <h2
                    id="thesis-h2"
                    className="font-display text-brand-deep mt-4 leading-[1.1] tracking-tight"
                    style={{ fontSize: "clamp(26px, 4.2vw, 42px)", letterSpacing: "-0.03em" }}
                  >
                    Why Landing Pages Matter for Healthcare Practices
                  </h2>
                  <p className="mt-5 text-[16.5px] leading-[1.7] text-ink-muted">
                    Most healthcare websites are designed to provide information. Landing pages are designed to generate action. Whether patients arrive from Google Ads, Meta Ads, local SEO campaigns, email marketing, or social media — a dedicated, conversion-focused landing page dramatically improves performance compared to sending traffic to a general website page.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* EVIDENCE STRIP — 3 columns, divider lines, not cards */}
        <section aria-label="What we deliver" className="py-16 sm:py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-brand-purple/20">
              {EVIDENCE.map((e, i) => (
                <Reveal key={e.h} delay={i * 0.05}>
                  <article
                    className={`py-8 px-2 md:px-6 ${i < EVIDENCE.length - 1 ? "md:border-r border-brand-purple/20" : ""}`}
                  >
                    <h3
                      className="font-extrabold text-brand-deep text-[18px]"
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      {e.h}
                    </h3>
                    <p className="mt-3 text-[14.5px] leading-[1.65] text-ink-muted">{e.p}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ESSAY LAYOUT — sticky sidebar + 3 long-form sections */}
        <section aria-labelledby="essays-h2" className="py-20 sm:py-28 bg-surface-secondary border-y border-brand-purple/10">
          <div className="container">
            <Reveal>
              <div className="max-w-3xl">
                <Eyebrow>Field notes</Eyebrow>
                <h2
                  id="essays-h2"
                  className="font-display text-brand-deep mt-4 leading-[1.1] tracking-tight"
                  style={{ fontSize: "clamp(28px, 4.5vw, 46px)", letterSpacing: "-0.03em" }}
                >
                  How healthcare landing pages actually convert.
                </h2>
              </div>
            </Reveal>

            <div className="mt-12 grid lg:grid-cols-[220px_1fr] gap-10 lg:gap-16 items-start">
              <nav aria-label="Essay index" className="hidden lg:block lg:sticky lg:top-28">
                <ol className="list-none p-0 m-0 border-t border-brand-purple/20">
                  {ESSAYS.map((e, i) => {
                    const active = activeEssay === i;
                    return (
                      <li key={e.id} className="border-b border-brand-purple/20">
                        <a
                          href={`#${e.id}`}
                          onClick={() => setActiveEssay(i)}
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
                {ESSAYS.map((e, i) => (
                  <motion.article
                    key={e.id}
                    id={e.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30% 0px -40% 0px" }}
                    onViewportEnter={() => setActiveEssay(i)}
                    transition={{ duration: 0.7, ease }}
                    className="py-10 sm:py-14 border-b border-brand-purple/20 first:pt-0 scroll-mt-32"
                  >
                    <span
                      className={`section-label inline-block px-3 py-1 rounded-full transition-all ${
                        activeEssay === i
                          ? "text-white border border-transparent"
                          : "bg-brand-purple/8 border border-brand-purple/20 text-brand-purple"
                      }`}
                      style={
                        activeEssay === i
                          ? {
                              background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))",
                              boxShadow: "0 10px 30px hsl(247 93% 64% / 0.28)",
                            }
                          : undefined
                      }
                    >
                      {e.n}
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

        {/* PRINCIPLES — counter rows, not card grid */}
        <section aria-labelledby="principles-h2" className="py-20 sm:py-28">
          <div className="container">
            <Reveal>
              <div className="max-w-3xl">
                <Eyebrow>Our framework</Eyebrow>
                <h2
                  id="principles-h2"
                  className="font-display text-brand-deep mt-4 leading-[1.1] tracking-tight"
                  style={{ fontSize: "clamp(28px, 4.5vw, 46px)", letterSpacing: "-0.03em" }}
                >
                  Our Landing Page Optimization Framework
                </h2>
              </div>
            </Reveal>

            <div className="mt-12 border-t border-brand-purple/20">
              {PRINCIPLES.map((p, i) => (
                <Reveal key={p.h} delay={i * 0.05}>
                  <div className="grid grid-cols-[64px_1fr] md:grid-cols-[80px_280px_1fr] gap-4 md:gap-10 py-8 border-b border-brand-purple/20 items-start">
                    <span
                      className="font-display text-brand-purple text-[28px] leading-none"
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className="font-extrabold text-brand-deep text-[18px] sm:text-[20px] leading-snug"
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      {p.h}
                    </h3>
                    <p className="text-[14.5px] leading-[1.7] text-ink-muted col-span-2 md:col-span-1">{p.p}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* AUTHORITY DARK — quote panel + page types list */}
        <section
          aria-labelledby="authority-h2"
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
                <div
                  className="rounded-3xl p-8 sm:p-10"
                  style={{
                    background: "hsl(0 0% 100% / 0.05)",
                    border: "1px solid hsl(0 0% 100% / 0.12)",
                  }}
                >
                  <blockquote
                    className="font-display text-white text-[22px] sm:text-[26px] leading-[1.4]"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    "The objective is not a polished page. The objective is more appointment requests at a lower acquisition cost."
                  </blockquote>
                  <p className="mt-5 font-mono-ui text-[11.5px] uppercase tracking-[0.14em] text-brand-lavender/85">
                    Vigorant landing page conversion principle
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <Eyebrow light>Page types</Eyebrow>
                <h2
                  id="authority-h2"
                  className="font-display text-white mt-4 leading-[1.1] tracking-tight"
                  style={{ fontSize: "clamp(26px, 4.2vw, 42px)", letterSpacing: "-0.03em" }}
                >
                  Types of Landing Pages We Create
                </h2>
                <p className="mt-5 text-[16px] leading-[1.7] text-white/75">
                  The right page type depends on the campaign source, patient intent, specialty, and conversion goal. Each type is built to maximize relevance and action.
                </p>

                <ul className="mt-8 list-none p-0 border-t border-white/14">
                  {PAGE_TYPES.map((t, i) => (
                    <li
                      key={i}
                      className="grid grid-cols-[44px_1fr] gap-4 py-5 border-b border-white/14 items-start"
                    >
                      <span className="font-mono-ui text-[11px] uppercase tracking-[0.14em] text-brand-lavender/75 pt-1">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-[14.5px] leading-[1.7] text-white/80">{t}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* RELATED — 4 link strip */}
        <section aria-label="Related services" className="border-t border-brand-purple/10 bg-surface-secondary py-14">
          <div className="container">
            <span className="font-mono-ui text-[11px] uppercase tracking-[0.14em] text-brand-purple">
              Continue exploring
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
                  <span className="font-mono-ui text-[11.5px] text-ink-muted/75 leading-[1.55]">{l.sub}</span>
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
                  Common questions healthcare practices ask before commissioning a landing page program.
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
              <Eyebrow light>Ready to convert more traffic?</Eyebrow>
              <h2
                id="cta-h2"
                className="font-display text-white mt-4 leading-[1.1] tracking-tight"
                style={{ fontSize: "clamp(30px, 5vw, 52px)", letterSpacing: "-0.03em" }}
              >
                Build landing pages that turn campaign spend into patient action.
              </h2>
              <p className="mt-5 text-[16.5px] leading-[1.7] text-white/75">
                Start with a landing page audit to identify friction, message gaps, trust gaps, and missed conversion opportunities across your current campaigns.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  to="/free-audit"
                  className="inline-flex items-center justify-center gap-2 font-bold text-[14px] sm:text-[15px] text-white px-6 py-3 rounded-full transition-all hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))",
                    boxShadow: "0 12px 32px hsl(247 93% 64% / 0.4)",
                  }}
                >
                  Request a Landing Page Audit <ArrowRight className="w-4 h-4" />
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
              href="https://www.nist.gov/"
              rel="noopener noreferrer"
              target="_blank"
              className="text-brand-purple underline underline-offset-4"
            >
              NIST — National Institute of Standards and Technology, Usability Resources
            </a>{" "}
            — referenced in UX and usability optimization for healthcare digital experiences.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
