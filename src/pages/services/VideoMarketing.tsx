import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
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

const HERO_METRICS = [
  { n: "2.4×", k: "Avg. time on page with video" },
  { n: "+38%", k: "Lift in form completions" },
  { n: "1st", k: "Trust signal before booking" },
];

const EVIDENCE = [
  { k: "Trust before the visit", v: "Faces, voice, and tone shorten the time from interest to booking." },
  { k: "Clarity over copy", v: "30 seconds of video answers what a page of text often cannot." },
  { k: "Distribution multiplier", v: "One asset adapts to YouTube, ads, social, and landing pages." },
];

const ESSAY = [
  {
    id: "authority-1",
    n: "01",
    nav: "Why video matters in healthcare",
    title: "Video is the fastest trust signal a healthcare practice has",
    body:
      "Most patients evaluate a practice before they pick up the phone. They watch how a doctor speaks, how the staff behaves, and how clearly procedures are explained. Static images and copy can describe a practice. Video lets patients experience it — and that experience is what reduces hesitation and moves a prospect to schedule.",
  },
  {
    id: "authority-2",
    n: "02",
    nav: "What kinds of videos perform",
    title: "Four formats consistently produce the strongest results",
    body:
      "Doctor introductions humanize the provider and remove anxiety. Patient testimonials provide unscripted social proof. Treatment explanation videos resolve the 'what does this actually involve?' question that keeps patients on competitor sites. Educational health content builds long-tail authority and supports both search and AI visibility.",
  },
  {
    id: "authority-3",
    n: "03",
    nav: "Video in the AI search era",
    title: "Video marketing in the AI search era",
    body: (
      <>
        AI-powered search platforms increasingly evaluate authority, engagement, and expertise. Video creates additional opportunities to appear in Google results, video search results, YouTube recommendations, and AI-generated answers and summaries.{" "}
        <Link
          to="/services/seo"
          className="text-brand-purple font-semibold underline underline-offset-4 hover:text-brand-deep"
        >
          Learn how SEO &amp; AI Optimization supports video visibility.
        </Link>
      </>
    ),
  },
];

const PRINCIPLES = [
  {
    h: "Plan before you shoot",
    p: "A strategy and content map tied to patient intent prevents the most expensive video mistake — producing assets nobody watches or shares.",
  },
  {
    h: "Build trust, not commercials",
    p: "Healthcare audiences reward authenticity. Direct-to-camera, plain-spoken explanations consistently outperform polished ads.",
  },
  {
    h: "Optimize for discovery",
    p: "Titles, descriptions, transcripts, chapters, and schema turn one video into a long-term visibility asset across Google, YouTube, and AI engines.",
  },
  {
    h: "Distribute on purpose",
    p: "Cut each asset into the formats each surface rewards — YouTube longform, social shorts, landing-page embeds, and ad creative.",
  },
];

const SOURCES = [
  "Patient education research from the National Library of Medicine (NIH).",
  "Healthcare communication guidelines from the CDC.",
  "Public reporting on video search behaviour from Google and YouTube.",
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
        {
          "@type": "ListItem",
          position: 3,
          name: "Healthcare Video Marketing Services",
          item: CANONICAL,
        },
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
  const [activeEssay, setActiveEssay] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const handler = () => {
      const triggerY = window.innerHeight * 0.4;
      let idx = 0;
      ESSAY.forEach((p, i) => {
        const el = document.getElementById(p.id);
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.top <= triggerY) idx = i;
      });
      setActiveEssay(idx);
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
        <meta
          property="og:title"
          content="Healthcare Video Marketing Services | Attract, Educate & Convert More Patients | Vigorant"
        />
        <meta
          property="og:description"
          content="Strategic video marketing for dental, medical, and chiropractic practices. Build patient trust before the first appointment."
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
        <meta itemProp="name" content="Healthcare Video Marketing Services" />
        <meta itemProp="provider" content="Vigorant" />
        <meta itemProp="areaServed" content="United States" />

        {/* ─────────── HERO ─────────── */}
        <section
          className="relative overflow-hidden"
          style={{
            background:
              "radial-gradient(circle at 10% 12%, hsl(var(--brand-purple) / 0.10), transparent 28%), radial-gradient(circle at 88% 18%, hsl(var(--brand-lavender) / 0.18), transparent 32%), linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--surface-secondary)) 100%)",
          }}
        >
          <motion.div
            aria-hidden
            className="pointer-events-none absolute top-10 right-[8%] h-[420px] w-[420px] rounded-full blur-3xl"
            style={{ background: "hsl(var(--brand-purple) / 0.16)" }}
            animate={{ x: [0, 24, -12, 0], y: [0, 18, -8, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="container relative pt-32 pb-20 sm:pt-40 sm:pb-28">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-deep/60">
                <li><Link to="/" className="hover:text-brand-purple">Home</Link></li>
                <li aria-hidden>/</li>
                <li><Link to="/services" className="hover:text-brand-purple">Services</Link></li>
                <li aria-hidden>/</li>
                <li aria-current="page" className="text-brand-deep">Video Marketing</li>
              </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-12 lg:gap-16 items-start">
              <Reveal>
                <Eyebrow>Video Marketing · Authority</Eyebrow>
                <h1
                  className="font-display font-extrabold leading-[1.05] tracking-[-0.04em] mt-5 text-brand-deep"
                  style={{ fontSize: "clamp(40px, 6vw, 76px)" }}
                >
                  Attract, educate, and convert{" "}
                  <span className="text-brand-purple">with healthcare video that builds trust.</span>
                </h1>
                <p className="mt-6 max-w-2xl text-base sm:text-lg text-brand-deep/75 leading-relaxed">
                  A thought-leadership approach to video marketing for dental, medical, and
                  chiropractic practices — designed to shorten the path from interest to
                  appointment, and to make your expertise visible across search, social, and AI.
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
                    Get a free video strategy audit <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-brand-deep border border-brand-purple/20 bg-white hover:border-brand-purple hover:text-brand-purple transition"
                  >
                    See all services
                  </Link>
                </div>

                <ul className="mt-10 flex flex-wrap gap-2">
                  {PROOF_TAGS.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-brand-purple/20 bg-white/70 px-3 py-1 font-mono-ui text-[11px] uppercase tracking-[0.08em] text-brand-deep/75"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* Dark hero-visual panel (lesser-card editorial) */}
              <Reveal delay={0.15}>
                <motion.aside
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative overflow-hidden rounded-3xl border border-white/12 p-6 sm:p-8 text-white"
                  style={{ background: "var(--gradient-dark)" }}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(circle at 72% 18%, hsl(var(--brand-lavender) / 0.30), transparent 32%), radial-gradient(circle at 12% 88%, hsl(var(--brand-purple) / 0.28), transparent 38%)",
                    }}
                  />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="font-mono-ui text-[10px] uppercase tracking-[0.18em] text-brand-lavender">
                        Live Reel
                      </span>
                      <span className="font-mono-ui text-[10px] uppercase tracking-[0.2em] text-white/45">
                        Authority Format
                      </span>
                    </div>

                    {/* Video stage */}
                    <div
                      className="relative mt-5 rounded-2xl border border-white/15 overflow-hidden"
                      style={{
                        background:
                          "linear-gradient(135deg, hsl(0 0% 100% / 0.10), hsl(0 0% 100% / 0.04))",
                        minHeight: 220,
                      }}
                    >
                      <motion.div
                        aria-hidden
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(120deg, transparent 0%, hsl(0 0% 100% / 0.10) 45%, transparent 65%)",
                        }}
                        animate={{ x: ["-100%", "120%"] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <div className="absolute inset-0 grid place-items-center">
                        <motion.div
                          className="grid place-items-center rounded-full w-16 h-16"
                          style={{
                            background:
                              "linear-gradient(135deg, hsl(var(--brand-lavender)), hsl(var(--brand-purple)))",
                            boxShadow:
                              "0 0 0 16px hsl(var(--brand-lavender) / 0.16), 0 20px 55px hsl(var(--brand-purple) / 0.45)",
                          }}
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <Play className="w-6 h-6 fill-white text-white" />
                        </motion.div>
                      </div>
                      {/* wave bars */}
                      <div className="absolute left-5 bottom-4 right-5 flex items-end gap-[3px] h-6">
                        {Array.from({ length: 28 }).map((_, i) => (
                          <motion.span
                            key={i}
                            className="flex-1 rounded-sm"
                            style={{ background: "hsl(0 0% 100% / 0.22)" }}
                            animate={{ scaleY: [0.3, 1, 0.5, 0.8, 0.3] }}
                            transition={{
                              duration: 1.4,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: (i % 7) * 0.12,
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <ul className="mt-5 grid grid-cols-3 gap-2">
                      {HERO_METRICS.map((m) => (
                        <li
                          key={m.k}
                          className="rounded-xl border border-white/12 bg-white/[0.06] px-3 py-3"
                        >
                          <strong className="font-display text-2xl text-brand-lavender block leading-none">
                            {m.n}
                          </strong>
                          <span className="mt-1.5 block text-[11px] leading-snug text-white/80">
                            {m.k}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.aside>
              </Reveal>
            </div>
          </div>

          {/* hero bottom divider */}
          <div
            aria-hidden
            className="h-px w-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, hsl(var(--brand-purple) / 0.18), transparent)",
            }}
          />
        </section>

        {/* ─────────── EVIDENCE STRIP ─────────── */}
        <section className="border-y border-brand-purple/15 bg-background">
          <div className="container">
            <ul className="grid grid-cols-1 md:grid-cols-3">
              {EVIDENCE.map((e, i) => (
                <li
                  key={e.k}
                  className={`py-10 md:py-12 ${
                    i < EVIDENCE.length - 1 ? "md:border-r border-brand-purple/15" : ""
                  } ${i > 0 ? "border-t md:border-t-0 border-brand-purple/15" : ""} md:px-8 first:md:pl-0 last:md:pr-0`}
                >
                  <span className="font-mono-ui text-[11px] uppercase tracking-[0.16em] text-brand-purple">
                    {e.k}
                  </span>
                  <p className="mt-3 text-brand-deep/80 leading-relaxed">{e.v}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ─────────── ESSAY LAYOUT ─────────── */}
        <section className="py-24 sm:py-32 bg-background">
          <div className="container">
            <Reveal>
              <Eyebrow>Editorial · Perspective</Eyebrow>
              <h2
                className="font-display font-extrabold leading-[1.08] tracking-[-0.035em] mt-4 text-brand-deep max-w-3xl"
                style={{ fontSize: "clamp(30px, 4.4vw, 52px)" }}
              >
                A three-part view on what makes healthcare video actually work.
              </h2>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-20">
              {/* Sidebar index */}
              <aside className="lg:sticky lg:top-28 h-max">
                <ol className="border-t border-brand-purple/18">
                  {ESSAY.map((s, i) => {
                    const active = activeEssay === i;
                    return (
                      <li key={s.id} className="border-b border-brand-purple/18">
                        <a
                          href={`#${s.id}`}
                          className={`relative block py-4 font-bold transition-all ${
                            active
                              ? "text-brand-purple pl-5"
                              : "text-brand-deep/55 hover:text-brand-purple"
                          }`}
                        >
                          <span
                            aria-hidden
                            className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-brand-purple transition-all"
                            style={{ width: active ? "0.8rem" : "0px" }}
                          />
                          <span className="font-mono-ui text-[11px] tracking-[0.12em] uppercase text-brand-deep/45 mr-3">
                            {s.n}
                          </span>
                          {s.nav}
                        </a>
                      </li>
                    );
                  })}
                </ol>
              </aside>

              {/* Essay sections */}
              <div className="space-y-4">
                {ESSAY.map((s, i) => {
                  const active = activeEssay === i;
                  return (
                    <article
                      key={s.id}
                      id={s.id}
                      className="border-b border-brand-purple/18 pb-12 pt-2"
                    >
                      <span
                        className={`inline-block px-3 py-1 rounded-full font-mono-ui text-[11px] uppercase tracking-[0.12em] border transition-all ${
                          active
                            ? "text-white border-transparent shadow-[0_10px_30px_hsl(var(--brand-purple)/0.28)]"
                            : "text-brand-purple bg-surface-secondary border-brand-purple/20"
                        }`}
                        style={
                          active
                            ? {
                                background:
                                  "linear-gradient(135deg, hsl(var(--brand-lavender)), hsl(var(--brand-purple)))",
                              }
                            : undefined
                        }
                      >
                        Section {s.n}
                      </span>
                      <h3
                        className="font-display font-extrabold mt-5 text-brand-deep leading-[1.15] tracking-[-0.03em]"
                        style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
                      >
                        {s.title}
                      </h3>
                      <p className="mt-5 text-brand-deep/80 leading-relaxed text-[17px]">
                        {s.body}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ─────────── PRINCIPLES LIST (numbered, no cards) ─────────── */}
        <section className="py-24 sm:py-32 bg-surface-secondary">
          <div className="container">
            <Reveal>
              <Eyebrow>Operating Principles</Eyebrow>
              <h2
                className="font-display font-extrabold mt-4 text-brand-deep tracking-[-0.035em] leading-[1.1] max-w-3xl"
                style={{ fontSize: "clamp(28px, 4.2vw, 48px)" }}
              >
                Four principles we apply to every healthcare video engagement.
              </h2>
            </Reveal>

            <ol className="mt-12 border-t border-brand-purple/18">
              {PRINCIPLES.map((p, i) => (
                <li
                  key={p.h}
                  className="grid grid-cols-[auto_1fr] gap-6 sm:gap-10 border-b border-brand-purple/18 py-8 sm:py-10 transition-all hover:-translate-y-[2px]"
                >
                  <span
                    className="font-display font-extrabold text-brand-purple leading-none"
                    style={{ fontSize: "clamp(28px, 3vw, 40px)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-bold text-brand-deep text-xl sm:text-2xl">{p.h}</h3>
                    <p className="mt-2 text-brand-deep/75 leading-relaxed max-w-2xl">{p.p}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ─────────── AUTHORITY DARK SECTION ─────────── */}
        <section
          className="relative overflow-hidden text-white py-24 sm:py-32"
          style={{ background: "var(--gradient-dark)" }}
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--brand-lavender)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--brand-lavender)) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
          <div className="container relative">
            <Reveal>
              <span className="section-label text-brand-lavender">External Authority</span>
              <h2
                className="font-display font-extrabold mt-4 text-white tracking-[-0.035em] leading-[1.1] max-w-3xl"
                style={{ fontSize: "clamp(28px, 4.2vw, 48px)" }}
              >
                Video reflects how patients actually research healthcare today.
              </h2>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
              <Reveal>
                <div
                  className="rounded-3xl border border-white/12 p-8 sm:p-10 transition-all hover:-translate-y-1"
                  style={{ background: "hsl(0 0% 100% / 0.05)" }}
                >
                  <blockquote
                    className="font-display font-bold text-white tracking-[-0.025em]"
                    style={{ fontSize: "clamp(20px, 2.2vw, 26px)", lineHeight: 1.45 }}
                  >
                    "Clear patient education materials — including video — measurably improve
                    comprehension, recall, and adherence, and are foundational to modern healthcare
                    communication."
                  </blockquote>
                  <p className="mt-6 font-mono-ui text-[11px] uppercase tracking-[0.14em] text-brand-lavender">
                    Paraphrased from public patient-education research
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <span className="section-label text-brand-lavender">Source pattern</span>
                <ul className="mt-4 border-t border-white/14">
                  {SOURCES.map((s) => (
                    <li
                      key={s}
                      className="border-b border-white/14 py-4 text-white/75 leading-relaxed"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─────────── FAQ ─────────── */}
        <section className="py-24 sm:py-32 bg-background">
          <div className="container max-w-4xl">
            <Reveal>
              <Eyebrow>FAQ</Eyebrow>
              <h2
                className="font-display font-extrabold mt-4 text-brand-deep tracking-[-0.035em] leading-[1.1]"
                style={{ fontSize: "clamp(28px, 4.2vw, 48px)" }}
              >
                Common questions about healthcare video marketing.
              </h2>
            </Reveal>

            <ul className="mt-12 border-t border-brand-purple/18">
              {FAQS.map((f, i) => {
                const open = openFaq === i;
                return (
                  <li key={f.q} className="border-b border-brand-purple/18">
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="w-full grid grid-cols-[1fr_auto] items-center gap-6 py-6 text-left font-bold text-brand-deep text-lg sm:text-xl transition-colors hover:text-brand-purple"
                    >
                      <span>{f.q}</span>
                      <span
                        className={`grid place-items-center h-9 w-9 rounded-full transition-all ${
                          open
                            ? "bg-brand-purple text-white rotate-45"
                            : "bg-surface-secondary text-brand-purple"
                        }`}
                      >
                        <Plus className="w-4 h-4" />
                      </span>
                    </button>
                    <div
                      className="overflow-hidden transition-all"
                      style={{
                        maxHeight: open ? 400 : 0,
                        opacity: open ? 1 : 0,
                      }}
                    >
                      <p className="pb-6 pr-14 text-brand-deep/75 leading-relaxed">{f.a}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ─────────── RELATED COLUMNS ─────────── */}
        <section className="pb-24 sm:pb-32 bg-background">
          <div className="container">
            <Reveal>
              <Eyebrow>Where this fits</Eyebrow>
              <h2
                className="font-display font-extrabold mt-4 text-brand-deep tracking-[-0.035em] leading-[1.1] max-w-3xl"
                style={{ fontSize: "clamp(26px, 3.6vw, 40px)" }}
              >
                Video works hardest when paired with the rest of your growth engine.
              </h2>
            </Reveal>

            <div
              className="mt-10 grid grid-cols-2 md:grid-cols-4 rounded-3xl overflow-hidden border border-brand-purple/18"
              style={{ background: "hsl(var(--brand-purple) / 0.18)", gap: 1 }}
            >
              {RELATED.map((r) => (
                <Link
                  key={r.href}
                  to={r.href}
                  className="bg-background p-6 sm:p-8 font-bold text-brand-deep transition-all hover:bg-surface-secondary hover:text-brand-purple"
                >
                  <span className="block text-base sm:text-lg">{r.label}</span>
                  <span className="block mt-1.5 font-mono-ui text-[12px] font-medium tracking-[0.08em] text-brand-deep/45">
                    {r.sub}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── FINAL CTA ─────────── */}
        <section
          className="relative overflow-hidden text-white py-24 sm:py-32"
          style={{ background: "var(--gradient-dark)" }}
        >
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, hsl(var(--brand-purple) / 0.55), hsl(var(--brand-deep) / 0.18) 45%, transparent 72%)",
            }}
          />
          <div className="container relative text-center">
            <Reveal>
              <span className="section-label text-brand-lavender">Get started</span>
              <h2
                className="font-display font-extrabold mt-4 text-white tracking-[-0.035em] leading-[1.05] max-w-3xl mx-auto"
                style={{ fontSize: "clamp(32px, 5vw, 60px)" }}
              >
                Ready to put video to work for your practice?
              </h2>
              <p className="mt-6 text-white/75 max-w-2xl mx-auto">
                We&apos;ll review how video can fit into your patient acquisition system — strategy,
                content, distribution, and measurement — and show where it will move the needle first.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Link
                  to="/free-audit"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_28px_hsl(var(--brand-purple)/0.45)] transition-transform hover:-translate-y-0.5"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(var(--brand-purple)), hsl(var(--brand-lavender)), hsl(var(--brand-deep)))",
                  }}
                >
                  Request a free audit <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white border border-white/20 bg-white/10 hover:bg-white/15 transition"
                >
                  Browse all services
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ─────────── AUTHORITY REFERENCE ─────────── */}
        <div className="border-t border-brand-purple/10 py-5 px-6 text-center bg-background">
          <p className="font-mono-ui text-[12px] text-brand-deep/45">
            External reference:{" "}
            <a
              href="https://www.nlm.nih.gov/"
              rel="noopener noreferrer"
              target="_blank"
              className="text-brand-purple underline hover:text-brand-deep"
            >
              National Library of Medicine (NIH)
            </a>{" "}
            — referenced in patient education and healthcare communication strategy.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
