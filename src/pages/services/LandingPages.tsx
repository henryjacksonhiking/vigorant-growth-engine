import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight, Plus, Workflow, Target, Layers, BarChart3 } from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";

const ease = [0.16, 1, 0.3, 1] as const;
const CANONICAL = "https://vigorant.com/services/landing-pages";

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
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
        "inline-flex items-center gap-2 font-mono-ui text-[11px] uppercase tracking-[0.12em] px-3 py-1.5 rounded-full border " +
        (light
          ? "bg-white/10 border-white/20 text-brand-lavender"
          : "bg-surface-secondary border-brand-purple/20 text-brand-purple")
      }
    >
      <span aria-hidden className={"w-1.5 h-1.5 rounded-full " + (light ? "bg-brand-lavender" : "bg-brand-purple")} />
      {children}
    </span>
  );
}

const PROOF_TAGS = [
  "Conversion-focused",
  "Built for Google Ads",
  "Mobile-first",
  "AI-search ready",
];

const WORKFLOW_MINI = [
  { n: "01", h: "Intent in", p: "Patient lands from ad, search, or referral with a specific question." },
  { n: "02", h: "Single decision", p: "One page, one offer, one next step — no menu maze." },
  { n: "03", h: "Booked appointment", p: "Form submit, call, or chat — measured end-to-end." },
];

const STEPS = [
  {
    id: "step-research",
    kicker: "Phase 01 — Research",
    h: "Decode the intent behind the click",
    p: "Every landing page begins with the audience and the campaign feeding it. We map keywords, ad copy, demographics, and the question a prospective patient is actually asking when they arrive — then design the page around answering it.",
    output: "Intent brief + keyword/offer map",
    Icon: Target,
  },
  {
    id: "step-design",
    kicker: "Phase 02 — Design",
    h: "A single page, a single decision",
    p: "Pages are designed around one conversion goal. Clear hero, credible proof, treatment explanation, and an obvious next step — appointment request, consultation booking, or treatment inquiry. No navigation distractions.",
    output: "Wireframe + high-fidelity comp",
    Icon: Layers,
  },
  {
    id: "step-build",
    kicker: "Phase 03 — Build",
    h: "Performance, accessibility, and trust signals",
    p: "Built mobile-first with fast load times, semantic structure, schema markup, accessible forms, and trust signals — reviews, credentials, real photos. Engineered to meet Quality Score and Core Web Vitals thresholds.",
    output: "Live page + tracking validated",
    Icon: Workflow,
  },
  {
    id: "step-optimize",
    kicker: "Phase 04 — Optimize",
    h: "Measure, learn, iterate",
    p: "Once live, we monitor scroll depth, form abandonment, click maps, and conversion-by-source. Findings feed an iteration cadence — hero, headline, proof block, form length — until the page is your highest-converting asset.",
    output: "Monthly CRO report + test backlog",
    Icon: BarChart3,
  },
];

const HANDOFF = [
  { a: "Strategy & Research", b: "Intent mapping, audience definition, offer framing, keyword-to-message alignment, competitive teardown of comparable healthcare landing pages." },
  { a: "Design & Build", b: "Conversion-focused layout, mobile-first responsive build, accessible forms, schema markup, fast load times, trust signal integration, ongoing hosting hand-off." },
  { a: "Tracking & CRO", b: "Conversion tracking setup, GA4 + Google Ads validation, heatmap and session recording integration, monthly CRO report with prioritized test backlog." },
];

const RIVER = [
  {
    h: "Landing pages outperform homepages",
    p: "Homepages serve many audiences and goals. A landing page is designed around one specific conversion — appointment, consult, treatment inquiry — and consistently outperforms general pages for paid and campaign traffic.",
  },
  {
    h: "Quality Score and Ad ROI",
    p: "A landing page aligned with the ad's message, audience intent, and conversion goal improves Quality Score, reduces cost per click, and increases conversion rates — improving overall campaign ROI.",
  },
  {
    h: "Landing pages in the AI search era",
    p: "AI-powered search rewards pages with clear answers, structured content, relevant intent matching, and trustworthy information.",
    link: { href: "/services/seo", label: "Learn how SEO & AI Optimization supports this." },
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

export default function LandingPages() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeStep, setActiveStep] = useState<string>(STEPS[0].id);

  useEffect(() => {
    const els = STEPS.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveStep(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0.01 }
    );
    els.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const activeIdx = STEPS.findIndex((s) => s.id === activeStep);

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
        "@type": "WebPage",
        "@id": CANONICAL + "#webpage",
        url: CANONICAL,
        name: "Healthcare Landing Page Design Services | Convert More Patient Traffic | Vigorant",
        description:
          "Conversion-focused landing pages for dental, medical, and chiropractic practices — built around campaign intent, designed for a single decision, and engineered for Google Ads and AI search.",
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://vigorant.com/" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://vigorant.com/services" },
          { "@type": "ListItem", position: 3, name: "Healthcare Landing Page Design", item: CANONICAL },
        ],
      },
      {
        "@type": "Service",
        name: "Healthcare Landing Page Design Services",
        provider: { "@id": "https://vigorant.com/#organization" },
        description:
          "Landing page design and optimization for dental, medical, and chiropractic practices: strategy, mobile-first build, conversion tracking, and CRO.",
        areaServed: "United States",
        serviceType: "Healthcare Landing Page Design",
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Healthcare Landing Page Design | Convert More Patients | Vigorant</title>
        <meta
          name="description"
          content="Conversion-focused landing pages for dental, medical, and chiropractic practices — built around campaign intent, engineered for Google Ads and AI search."
        />
        <link rel="canonical" href={CANONICAL} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>


      <Nav />

      <main id="main" itemScope itemType="https://schema.org/Service">
        <meta itemProp="name" content="Healthcare Landing Page Design Services" />
        <meta itemProp="provider" content="Vigorant" />
        <meta itemProp="areaServed" content="United States" />

        {/* ── HERO — LIGHT BACKGROUND ── */}
        <section
          aria-labelledby="hero-heading"
          className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20"
          style={{
            background:
              "radial-gradient(circle at 10% 12%, hsl(var(--brand-purple) / 0.10), transparent 28%), radial-gradient(circle at 88% 18%, hsl(var(--brand-bright) / 0.18), transparent 32%), linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--surface-secondary)) 100%)",
          }}
        >
          <div
            aria-hidden
            className="absolute -right-64 top-10 w-[620px] h-[620px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, hsl(var(--brand-purple) / 0.16), transparent 65%)",
              animation: "lpOrb 9s ease-in-out infinite",
            }}
          />
          {/* Subtle grid */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(90deg, hsl(var(--brand-purple) / 0.06) 1px, transparent 1px), linear-gradient(180deg, hsl(var(--brand-purple) / 0.06) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
              maskImage: "linear-gradient(to bottom, #000, transparent 86%)",
              WebkitMaskImage: "linear-gradient(to bottom, #000, transparent 86%)",
            }}
          />

          <div className="container relative z-10">
            <Reveal>
              <nav aria-label="Breadcrumb" className="flex gap-2 items-center text-[13px] font-semibold text-ink-secondary mb-6">
                <Link to="/" className="text-brand-purple">Home</Link>
                <span aria-hidden>/</span>
                <Link to="/services" className="text-brand-purple">Services</Link>
                <span aria-hidden>/</span>
                <span className="text-ink-muted">Landing Pages</span>
              </nav>
            </Reveal>

            <div className="grid gap-12 lg:gap-16 lg:grid-cols-[1.05fr_0.95fr] items-center">
              {/* LEFT: copy */}
              <div>
                <Reveal>
                  <Eyebrow>Landing Pages · Healthcare</Eyebrow>
                </Reveal>
                <Reveal delay={0.05}>
                  <h1
                    id="hero-heading"
                    className="font-display font-bold text-brand-deep mt-5 leading-[1.02] tracking-tight"
                    style={{ fontSize: "clamp(2.7rem, 5.4vw, 4.8rem)", letterSpacing: "-0.045em" }}
                  >
                    One page. One decision. <span className="gradient-text">More booked patients.</span>
                  </h1>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-5 text-[17px] leading-[1.8] text-ink-secondary max-w-[620px]">
                    Conversion-focused landing pages for dental, medical, and chiropractic practices — designed around campaign intent, engineered for Google Ads Quality Score, and built to perform across mobile, search, and AI-powered answers.
                  </p>
                </Reveal>

                <Reveal delay={0.15}>
                  <ul className="flex flex-wrap gap-2.5 mt-6 list-none p-0">
                    {PROOF_TAGS.map((t) => (
                      <li
                        key={t}
                        className="inline-flex items-center font-mono-ui text-[12px] tracking-[0.06em] px-3.5 py-2 rounded-full border border-brand-purple/20 bg-white/75 text-brand-deep/75 shadow-[var(--shadow-card)]"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="flex flex-wrap gap-3 mt-8">
                    <Link
                      to="/free-audit"
                      className="btn-primary-grad inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[15px]"
                    >
                      Request Your Free Growth Audit <ArrowRight size={18} />
                    </Link>
                    <Link
                      to="/services"
                      className="btn-secondary-outline inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold text-[15px]"
                    >
                      Explore all services
                    </Link>
                  </div>
                </Reveal>
              </div>

              {/* RIGHT: workflow-mini (light, lesser-card style) */}
              <Reveal delay={0.1}>
                <div
                  className="relative rounded-2xl p-2 border border-brand-purple/18 bg-white/80"
                  style={{
                    boxShadow: "0 30px 80px hsl(var(--brand-purple) / 0.14)",
                    backdropFilter: "blur(8px)",
                    animation: "lpFloat 6s ease-in-out infinite",
                  }}
                >
                  <div className="rounded-2xl border border-brand-purple/12 px-6 py-5">
                    <div className="flex items-center justify-between border-b border-brand-purple/15 pb-3 mb-2">
                      <span className="font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-purple">
                        Conversion workflow
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-mono-ui text-[11px] text-ink-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-purple pulse-dot" />
                        Live
                      </span>
                    </div>
                    {WORKFLOW_MINI.map((row, i) => (
                      <div
                        key={row.n}
                        className={
                          "grid grid-cols-[48px_1fr] gap-4 py-4 " +
                          (i < WORKFLOW_MINI.length - 1 ? "border-b border-brand-purple/15" : "")
                        }
                      >
                        <span className="w-11 h-11 rounded-full bg-brand-purple/10 text-brand-purple grid place-items-center font-mono-ui font-black">
                          {row.n}
                        </span>
                        <div>
                          <h4 className="font-bold text-brand-deep text-[1rem]">{row.h}</h4>
                          <p className="text-ink-secondary text-[0.88rem] leading-[1.55] mt-0.5">{row.p}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── PROCESS MAP: sticky nav + 4-step timeline ── */}
        <section className="py-20 sm:py-28">
          <div className="container">
            <Reveal>
              <Eyebrow>Process · 4 phases</Eyebrow>
              <h2 className="font-display font-bold text-brand-deep mt-4 max-w-3xl" style={{ fontSize: "clamp(2rem, 3.4vw, 3.2rem)", letterSpacing: "-0.035em" }}>
                How a Vigorant landing page comes together.
              </h2>
            </Reveal>

            <div className="grid gap-12 lg:gap-20 lg:grid-cols-[300px_1fr] mt-12 items-start">
              {/* Sticky process nav */}
              <aside className="lg:sticky lg:top-24 border-t border-brand-purple/18">
                <nav aria-label="Process index">
                  {STEPS.map((s, i) => {
                    const active = activeStep === s.id;
                    const passed = i < activeIdx;
                    return (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        className={
                          "flex items-center justify-between gap-4 py-4 px-2 border-b border-brand-purple/18 font-extrabold rounded-xl transition-all " +
                          (active
                            ? "text-brand-purple translate-x-2 bg-brand-purple/[0.045]"
                            : passed
                            ? "text-brand-deep/70 hover:text-brand-purple"
                            : "text-brand-deep/55 hover:text-brand-purple")
                        }
                      >
                        <span className="truncate">{s.kicker.split("—")[1]?.trim() || s.kicker}</span>
                        <span
                          className={
                            "min-w-[34px] h-7 px-2 rounded-full inline-grid place-items-center font-mono-ui text-[12px] transition-all " +
                            (active
                              ? "bg-brand-purple text-white scale-105 shadow-[var(--shadow-glow)]"
                              : passed
                              ? "bg-surface-secondary text-brand-purple"
                              : "bg-transparent text-ink-muted border border-brand-purple/18")
                          }
                        >
                          0{i + 1}
                        </span>
                      </a>
                    );
                  })}
                </nav>
              </aside>

              {/* Timeline */}
              <div className="relative pl-12 sm:pl-14">
                {/* Static track */}
                <div aria-hidden className="absolute top-0 bottom-0 left-[18px] w-[2px] bg-brand-purple/18" />
                {/* Dynamic fill */}
                <div
                  aria-hidden
                  className="absolute top-0 left-[18px] w-[2px] bg-gradient-to-b from-brand-lavender to-brand-purple transition-all duration-300"
                  style={{
                    height: `${Math.max(8, ((activeIdx + 1) / STEPS.length) * 100)}%`,
                    boxShadow: "0 0 22px hsl(var(--brand-purple) / 0.35)",
                  }}
                />

                {STEPS.map((s, i) => {
                  const active = activeStep === s.id;
                  const passed = i < activeIdx;
                  const Icon = s.Icon;
                  return (
                    <article
                      key={s.id}
                      id={s.id}
                      className={
                        "relative pb-14 mb-2 " +
                        (i < STEPS.length - 1 ? "border-b border-brand-purple/18" : "")
                      }
                    >
                      {/* Step dot */}
                      <span
                        aria-hidden
                        className={
                          "absolute -left-[3.45rem] top-1 w-[38px] h-[38px] rounded-full grid place-items-center font-mono-ui font-black z-[2] transition-all " +
                          (active
                            ? " text-white scale-110 shadow-[var(--shadow-glow)] border-2 border-brand-purple"
                            : passed
                            ? "bg-surface-secondary text-brand-purple border-2 border-brand-lavender"
                            : "bg-background text-ink-muted border-2 border-brand-purple/18")
                        }
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <div className="grid lg:grid-cols-[1fr_260px] gap-6 lg:gap-8 items-start pb-6">
                        <div>
                          <p className="font-mono-ui text-[12px] uppercase tracking-[0.10em] text-brand-purple mb-2">
                            {s.kicker}
                          </p>
                          <h3 className="font-display font-bold text-brand-deep" style={{ fontSize: "clamp(1.5rem, 2.4vw, 2.1rem)", letterSpacing: "-0.035em", lineHeight: 1.14 }}>
                            {s.h}
                          </h3>
                          <p className="mt-3 text-[1rem] leading-[1.8] text-ink-secondary max-w-[640px]">{s.p}</p>
                        </div>

                        {/* Output panel */}
                        <div
                          className={
                            "rounded-2xl p-5 border bg-surface-secondary transition-all " +
                            (active ? "border-brand-purple/32 -translate-y-1 shadow-[0_18px_46px_hsl(var(--brand-purple)/0.15)]" : "border-brand-purple/18")
                          }
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-9 h-9 rounded-full bg-brand-purple/10 text-brand-purple grid place-items-center">
                              <Icon size={16} />
                            </span>
                            <span className="font-mono-ui text-[11px] uppercase tracking-[0.10em] text-brand-purple">
                              Output
                            </span>
                          </div>
                          <strong className="block mt-3 font-bold text-brand-deep text-[1rem]">{s.output}</strong>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── HANDOFF (what's included) — lesser-card row ledger ── */}
        <section className="bg-surface-secondary py-20 sm:py-28">
          <div className="container">
            <Reveal>
              <Eyebrow>What's included</Eyebrow>
              <h2 className="font-display font-bold text-brand-deep mt-4 max-w-3xl" style={{ fontSize: "clamp(1.9rem, 3.2vw, 3rem)", letterSpacing: "-0.035em" }}>
                Everything that ships with a Vigorant landing page engagement.
              </h2>
            </Reveal>

            <div className="mt-12 rounded-2xl overflow-hidden border border-brand-purple/18 bg-background transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
              {HANDOFF.map((row, i) => (
                <div
                  key={row.a}
                  className={
                    "grid sm:grid-cols-[260px_1fr] transition-colors hover:bg-brand-purple/[0.035] " +
                    (i < HANDOFF.length - 1 ? "border-b border-brand-purple/18" : "")
                  }
                >
                  <div className="p-5 sm:p-6 bg-surface-secondary font-mono-ui text-[12px] uppercase tracking-[0.08em] text-brand-purple font-medium">
                    {row.a}
                  </div>
                  <div className="p-5 sm:p-6 text-ink-secondary leading-[1.75]">{row.b}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DARK RIVER — 3 columns ── */}
        <section
          className="py-20 sm:py-28 relative overflow-hidden"
          style={{ background: "var(--gradient-dark)" }}
          data-dark="true"
        >
          <div className="container relative z-10">
            <Reveal>
              <Eyebrow light>Context</Eyebrow>
              <h2 className="font-display font-bold text-white mt-4 max-w-3xl" style={{ fontSize: "clamp(1.9rem, 3.2vw, 3rem)", letterSpacing: "-0.035em" }}>
                Why dedicated landing pages outperform — for paid, organic, and AI search.
              </h2>
            </Reveal>

            <div
              className="grid md:grid-cols-3 mt-12 rounded-2xl overflow-hidden border border-white/14"
              style={{ background: "hsl(0 0% 100% / 0.14)", gap: "1px" }}
            >
              {RIVER.map((r, i) => (
                <Reveal key={r.h} delay={i * 0.06}>
                  <article className="bg-white/[0.04] p-8 h-full transition-all hover:-translate-y-2 hover:bg-white/[0.075]">
                    <h3 className="font-bold text-white text-[1.18rem] leading-[1.25]">{r.h}</h3>
                    <p className="mt-3 text-white/70 leading-[1.7] text-[15px]">
                      {r.p}
                      {r.link && (
                        <>
                          {" "}
                          <Link to={r.link.href} className="text-brand-lavender font-semibold underline">
                            {r.link.label}
                          </Link>
                        </>
                      )}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ SPLIT ── */}
        <section className="bg-surface-secondary py-20 sm:py-28">
          <div className="container">
            <div className="grid gap-12 lg:gap-20 lg:grid-cols-[1fr_1.6fr] items-start">
              <Reveal>
                <Eyebrow>FAQ</Eyebrow>
                <h2 className="font-display font-bold text-brand-deep mt-4" style={{ fontSize: "clamp(1.9rem, 3.2vw, 3rem)", letterSpacing: "-0.035em" }}>
                  Questions practices ask before they invest in landing pages.
                </h2>
                <p className="mt-4 text-ink-secondary leading-[1.75] max-w-md">
                  Short answers to the most common questions about conversion-focused pages, Google Ads alignment, and AI-search visibility.
                </p>
              </Reveal>

              <div className="border-t border-brand-purple/18">
                {FAQS.map((f, i) => {
                  const open = openFaq === i;
                  return (
                    <div key={f.q} className="border-b border-brand-purple/18">
                      <button
                        type="button"
                        aria-expanded={open}
                        onClick={() => setOpenFaq(open ? null : i)}
                        className="w-full flex justify-between gap-4 items-start py-5 text-left font-extrabold text-brand-deep text-[16px] hover:text-brand-purple transition-colors"
                      >
                        <span>{f.q}</span>
                        <span
                          aria-hidden
                          className={
                            "w-7 h-7 rounded-full grid place-items-center flex-shrink-0 transition-all " +
                            (open ? "bg-brand-purple text-white rotate-45" : "bg-background text-brand-purple")
                          }
                        >
                          <Plus size={16} />
                        </span>
                      </button>
                      <div className="overflow-hidden transition-all duration-500" style={{ maxHeight: open ? 400 : 0 }}>
                        <p className="pb-5 text-ink-secondary leading-[1.75] max-w-2xl">{f.a}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA (DARK) ── */}
        <section
          className="relative overflow-hidden text-center py-24 sm:py-32"
          style={{ background: "hsl(var(--brand-deep))" }}
          data-dark="true"
        >
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, hsl(var(--brand-purple) / 0.55), hsl(var(--brand-deep) / 0.18) 45%, transparent 72%)",
              animation: "lpCtaGlow 7s ease-in-out infinite",
            }}
          />
          <div className="container relative z-10">
            <Eyebrow light>Next step</Eyebrow>
            <h2 className="font-display font-bold text-white max-w-3xl mx-auto mt-4" style={{ fontSize: "clamp(2rem, 3.6vw, 3.2rem)", letterSpacing: "-0.04em" }}>
              Turn your campaign traffic into booked appointments.
            </h2>
            <p className="mt-4 text-white/70 max-w-xl mx-auto leading-[1.7]">
              Request a free growth audit. We&apos;ll review your current landing experience, identify the highest-leverage conversion fixes, and map a page program tied to your campaigns and patient mix.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link
                to="/free-audit"
                className="btn-primary-grad inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[15px]"
              >
                Request Your Free Growth Audit <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold text-[15px] border border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                Explore all services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Page-local keyframes (no global token changes) */}
      <style>{`
        @keyframes lpOrb { 0%,100% { transform: translate3d(0,0,0) scale(1); } 50% { transform: translate3d(-30px, 28px, 0) scale(1.08); } }
        @keyframes lpFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes lpCtaGlow { 0%,100% { transform: scale(1); } 50% { transform: scale(1.08); } }
      `}</style>
    </div>
  );
}
