import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight, Plus, Workflow, Target, Layers, BarChart3 } from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import SharedFAQList from "@/components/site/SharedFAQ";

const ease = [0.16, 1, 0.3, 1] as const;
const CANONICAL = "https://vigorant.com/services/analytics-and-reporting";

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
  "Marketing ROI",
  "Channel clarity",
  "Call tracking",
  "Smarter decisions",
];

const WORKFLOW_MINI = [
  { n: "01", h: "Define", p: "KPIs, sources & reporting goals" },
  { n: "02", h: "Connect", p: "Dashboards, calls, forms, campaigns" },
  { n: "03", h: "Improve", p: "Insights, trends, actions, ROI review" },
];

const PILLARS = [
  { key: "KPI", val: "Metrics tied to growth" },
  { key: "Source", val: "Clear channel attribution" },
  { key: "Funnel", val: "Calls, forms, bookings" },
  { key: "Loop", val: "Reports + action steps" },
];

const STEPS = [
  {
    id: "step-kpi",
    navLabel: "KPI Framework",
    kicker: "Phase 01",
    h: "KPI framework, goals, and source-of-truth planning",
    p: "Before a dashboard is built, we define what the practice needs to know: marketing ROI, channel contribution, patient acquisition cost, call quality, form volume, booked appointment trends, and the difference between visibility metrics and revenue-driving indicators.",
    inputs: [
      "Practice goals and service priorities",
      "Current reports and dashboard gaps",
      "Channel mix and campaign structure",
      "Leadership questions and KPI needs",
    ],
    outputKicker: "Deliverable",
    outputTitle: "Reporting brief",
    outputLines: [
      "Named KPIs and definitions",
      "Source-of-truth measurement map",
      "Executive questions the report must answer",
    ],
    Icon: Target,
  },
  {
    id: "step-tracking",
    navLabel: "Tracking Setup",
    kicker: "Phase 02",
    h: "Tracking setup across calls, forms, campaigns, and visibility",
    p: "Healthcare growth often gets misread because phone calls, forms, website actions, Google Business Profile activity, paid campaigns, SEO traffic, and missed opportunities sit in separate tools. We organize the tracking layer so performance can be interpreted accurately.",
    inputs: [
      "GA4 and Search Console access",
      "Call tracking and form sources",
      "Google Ads and social campaigns",
      "GBP, reviews, and location data",
    ],
    outputKicker: "Deliverable",
    outputTitle: "Measurement setup",
    outputLines: [
      "Tracking requirements and gaps",
      "Channel and conversion source mapping",
      "Dashboard-ready data structure",
    ],
    Icon: Layers,
  },
  {
    id: "step-dashboard",
    navLabel: "Dashboard & Report",
    kicker: "Phase 03",
    h: "Dashboard design, reporting views, and executive summaries",
    p: "We translate raw data into views practice owners can use: traffic quality, source performance, lead trends, booked appointment signals, campaign ROI, content visibility, reputation health, and location-level comparisons. The goal is clarity, not data overload.",
    inputs: [
      "Dashboard priorities and user roles",
      "Channel and conversion metrics",
      "Service-line and location needs",
      "Monthly and quarterly reporting cadence",
    ],
    outputKicker: "Deliverable",
    outputTitle: "Reporting system",
    outputLines: [
      "Executive dashboard structure",
      "Plain-English monthly report format",
      "Channel, funnel, and ROI views",
    ],
    Icon: Workflow,
  },
  {
    id: "step-insights",
    navLabel: "Insights & Action",
    kicker: "Phase 04",
    h: "Insights, recommendations, and performance improvement loops",
    p: "Reporting only matters when it changes decisions. Each cycle identifies what to scale, what to fix, what to pause, and what to test next across SEO, paid ads, content, reputation, landing pages, and patient intake performance.",
    inputs: [
      "Monthly trend analysis",
      "Channel and conversion attribution",
      "Missed opportunity review",
      "Quarterly performance priorities",
    ],
    outputKicker: "Deliverable",
    outputTitle: "Growth loop",
    outputLines: [
      "Prioritized action recommendations",
      "Budget and channel adjustment insights",
      "Next-cycle testing and reporting plan",
    ],
    Icon: BarChart3,
  },
];

const HANDOFF = [
  { a: "You provide", b: "Access to analytics, ad platforms, call tracking, forms, and business goals." },
  { a: "We provide", b: "KPI structure, reporting logic, dashboard direction, and insight framework." },
  { a: "You receive", b: "A clear reporting system tied to visibility, leads, appointments, and ROI." },
];

const RIVER = [
  {
    h: "Why most healthcare reports underperform",
    p: "Most reports list numbers without explaining what they mean. Practice leaders need to know which channels produce calls, which campaigns waste spend, where conversion breaks, and what action should happen next.",
  },
  {
    h: "Reporting built around patient acquisition economics",
    p: "The right dashboard connects impressions, clicks, calls, forms, booked appointments, service-line value, and acquisition cost. That context turns marketing analytics into a business decision tool.",
  },
  {
    h: "Analytics in the AI search era",
    p: "AI-powered discovery adds new visibility signals. Reporting should connect SEO, content engagement, local authority, entity coverage, and patient behavior so practices understand where authority is growing.",
    link: { href: "/services/seo", label: "Learn how SEO & AI Optimization supports this." },
  },
];

// Visible accordion answers (display-optimized short form)
const FAQS = [
  {
    q: "What should healthcare marketing reports include?",
    a: "Reports should connect visibility, traffic, calls, forms, booked appointments, channel performance, conversion rates, and ROI. The goal is not more charts; it is clarity about what is producing patient growth.",
  },
  {
    q: "Can analytics show which channels generate patients?",
    a: "Yes. With proper tracking across campaigns, calls, forms, landing pages, search visibility, and intake data, reports can show which channels create inquiries and which ones contribute to booked appointments.",
  },
  {
    q: "Do analytics reports help reduce wasted marketing spend?",
    a: "Yes. Clear reporting reveals weak campaigns, low-quality traffic, missed calls, poor conversion paths, and budget allocation problems before they continue draining marketing dollars.",
  },
  {
    q: "Does reporting support AI visibility strategy?",
    a: "Yes. Analytics can track search impressions, content engagement, local visibility, and authority signals, helping practices understand where AI and search visibility are improving or where gaps remain.",
  },
];

export default function AnalyticsReporting() {
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
          "Healthcare Analytics and Reporting",
          "Healthcare Marketing Reporting",
          "Dental Analytics Dashboard",
          "Medical Marketing Analytics",
          "Chiropractic Reporting Dashboard",
          "Patient Acquisition Analytics",
          "Healthcare KPI Reporting",
          "Marketing ROI Reporting",
          "Call Tracking Analytics",
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
        "@id": CANONICAL + "#webpage",
        url: CANONICAL,
        name: "Healthcare Analytics & Reporting Services | Track ROI, Patients & Growth | Vigorant",
        description:
          "Healthcare analytics and reporting services for dental, medical, and chiropractic practices, including dashboard setup, KPI tracking, call tracking, attribution, channel reporting, ROI analysis, and growth recommendations.",
        isPartOf: { "@id": "https://vigorant.com/#website" },
        about: { "@id": CANONICAL + "#service" },
        breadcrumb: { "@id": CANONICAL + "#breadcrumb" },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": CANONICAL + "#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://vigorant.com/" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://vigorant.com/services" },
          { "@type": "ListItem", position: 3, name: "Healthcare Analytics and Reporting Services", item: CANONICAL },
        ],
      },
      {
        "@type": "Service",
        "@id": CANONICAL + "#service",
        name: "Healthcare Analytics and Reporting Services",
        provider: { "@id": "https://vigorant.com/#organization" },
        description:
          "Healthcare analytics and reporting for dental, medical, and chiropractic practices. Includes KPI framework, dashboard planning, GA4 and Search Console reporting, call tracking analysis, lead source attribution, channel performance reporting, appointment funnel analysis, ROI interpretation, and executive growth recommendations.",
        areaServed: "United States",
        serviceType: "Healthcare Analytics and Reporting",
        audience: {
          "@type": "Audience",
          audienceType: "Dental Practices, Medical Clinics, Chiropractic Offices, Specialty Healthcare Providers, Multi-location Practices",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Analytics and Reporting Service Deliverables",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "KPI Framework and Dashboard Planning" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Call Tracking and Lead Source Attribution" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Channel Performance and ROI Reporting" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Appointment Funnel and Conversion Analysis" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Executive Reporting and Growth Recommendations" } },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": CANONICAL + "#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What should healthcare marketing reports include?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Healthcare marketing reports should connect visibility, traffic, calls, forms, booked appointments, channel performance, cost per lead, conversion rate, and ROI so practice leaders can understand which activities produce measurable patient growth.",
            },
          },
          {
            "@type": "Question",
            name: "Can analytics show which marketing channels generate patients?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. With proper tracking across phone calls, forms, landing pages, campaigns, search visibility, and CRM or intake data, analytics can show which channels generate inquiries and which ones contribute to booked appointments.",
            },
          },
          {
            "@type": "Question",
            name: "Do analytics reports help reduce wasted marketing spend?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Clear reporting helps practices identify underperforming campaigns, weak conversion paths, missed call issues, low-quality traffic, and budget allocation problems before they continue wasting money.",
            },
          },
          {
            "@type": "Question",
            name: "Does reporting support AI and search visibility strategy?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Reporting can track search impressions, content engagement, entity coverage, local visibility, and AI-related discovery signals, helping practices understand where visibility is improving and where authority gaps remain.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Healthcare Analytics &amp; Reporting Services | Track ROI, Patients &amp; Growth | Vigorant</title>
        <meta
          name="description"
          content="Healthcare analytics and reporting for dental, medical, and chiropractic practices. Track marketing ROI, calls, leads, booked appointments, channel performance, and patient growth with Vigorant."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Healthcare Analytics & Reporting Services | Track ROI, Patients & Growth | Vigorant" />
        <meta property="og:description" content="Clear healthcare marketing analytics and reporting for dental, medical, and chiropractic practices. Understand what drives calls, leads, appointments, ROI, and growth." />
        <meta property="og:url" content={CANONICAL} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>


      <Nav />

      <main id="main" itemScope itemType="https://schema.org/Service">
        <meta itemProp="name" content="Healthcare Analytics and Reporting Services" />
        <meta itemProp="provider" content="Vigorant" />
        <meta itemProp="areaServed" content="United States" />

        {/* ── HERO — DARK BACKGROUND ── */}
        <section
          aria-labelledby="hero-heading"
          className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20"
          style={{ background: "var(--gradient-dark)" }}
          data-dark="true"
        >
          <div
            aria-hidden
            className="absolute -right-64 top-10 w-[620px] h-[620px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, hsl(var(--brand-purple) / 0.22), transparent 65%)",
              animation: "lpOrb 9s ease-in-out infinite",
            }}
          />
          {/* Subtle grid */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(90deg, hsl(var(--brand-purple) / 0.07) 1px, transparent 1px), linear-gradient(180deg, hsl(var(--brand-purple) / 0.07) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
              maskImage: "linear-gradient(to bottom, #000, transparent 86%)",
              WebkitMaskImage: "linear-gradient(to bottom, #000, transparent 86%)",
            }}
          />

          <div className="container relative z-10">
            <Reveal>
              <nav aria-label="Breadcrumb" className="flex gap-2 items-center text-[13px] font-semibold text-brand-lavender/70 mb-6">
                <Link to="/" className="text-brand-lavender/70 hover:text-brand-lavender transition-colors">Home</Link>
                <span aria-hidden>/</span>
                <Link to="/services" className="text-brand-lavender/70 hover:text-brand-lavender transition-colors">Services</Link>
                <span aria-hidden>/</span>
                <span className="text-white" aria-current="page">Analytics &amp; Reporting</span>
              </nav>
            </Reveal>

            <div className="grid gap-12 lg:gap-16 lg:grid-cols-[1.3fr_1fr] items-center">
              {/* LEFT: copy */}
              <div>
                <Reveal>
                  <Eyebrow light>Analytics &amp; Reporting · Process</Eyebrow>
                </Reveal>
                <Reveal delay={0.05}>
                  <h1
                    id="hero-heading"
                    className="font-display font-bold mt-5 leading-[1.02] tracking-tight"
                    style={{ fontSize: "clamp(2.7rem, 5.4vw, 4.8rem)", letterSpacing: "-0.045em" }}
                  >
                    <span className="text-white">Clear healthcare reporting,</span>{" "}
                    <span className="text-brand-lavender">built around decisions that grow practices.</span>
                  </h1>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-5 text-[17px] leading-[1.8] text-white/70 max-w-[620px]">
                    A 4-phase analytics process for dental, medical, and chiropractic practices that connects marketing activity to calls, leads, booked appointments, channel performance, and ROI — so leaders can see what is working and what needs to change.
                  </p>
                </Reveal>

                <Reveal delay={0.15}>
                  <ul className="flex flex-wrap gap-2.5 mt-6 list-none p-0">
                    {PROOF_TAGS.map((t) => (
                      <li
                        key={t}
                        className="inline-flex items-center font-mono-ui text-[12px] tracking-[0.06em] px-3.5 py-2 rounded-full border border-white/15 bg-white/[0.06] text-white/85"
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
                      Get a free reporting audit <ArrowRight size={18} />
                    </Link>
                    <Link
                      to="/services"
                      className="btn-on-dark-outline inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold text-[15px]"
                    >
                      See all services
                    </Link>
                  </div>
                </Reveal>
              </div>

              {/* RIGHT: workflow-mini (dark glassmorphism card) */}
              <Reveal delay={0.1}>
                <div
                  className="relative rounded-2xl p-2 border border-white/15"
                  style={{
                    background: "hsl(0 0% 100% / 0.05)",
                    backdropFilter: "blur(8px)",
                    boxShadow: "0 30px 80px hsl(var(--brand-purple) / 0.20)",
                    animation: "lpFloat 6s ease-in-out infinite",
                  }}
                >
                  <div className="rounded-2xl border border-white/10 px-6 py-5">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-2">
                      <span className="font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-lavender">
                        Workflow at a glance
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-mono-ui text-[11px] text-white/50">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-lavender pulse-dot" />
                        04 phases
                      </span>
                    </div>
                    {WORKFLOW_MINI.map((row, i) => (
                      <div
                        key={row.n}
                        className={
                          "grid grid-cols-[48px_1fr] gap-4 py-4 " +
                          (i < WORKFLOW_MINI.length - 1 ? "border-b border-white/10" : "")
                        }
                      >
                        <span className="w-11 h-11 rounded-full bg-brand-lavender/15 text-brand-lavender grid place-items-center font-mono-ui font-black">
                          {row.n}
                        </span>
                        <div>
                          <h4 className="font-bold text-white text-[1rem]">{row.h}</h4>
                          <p className="text-white/60 text-[0.88rem] leading-[1.55] mt-0.5">{row.p}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── PILLARS BAR ── */}
        <section className="bg-surface-secondary border-y border-brand-purple/10 py-10">
          <div className="container">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {PILLARS.map((p, i) => (
                <Reveal key={p.key} delay={i * 0.05}>
                  <div className="flex flex-col gap-1">
                    <span className="font-mono-ui text-[11px] uppercase tracking-[0.10em] text-brand-purple">{p.key}</span>
                    <span className="font-bold text-brand-deep text-[1.05rem]">{p.val}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS MAP: sticky nav + 4-step timeline ── */}
        <section className="py-20 sm:py-28">
          <div className="container">
            <Reveal>
              <Eyebrow>The Process</Eyebrow>
              <h2 className="font-display font-bold text-brand-deep mt-4 max-w-3xl" style={{ fontSize: "clamp(2rem, 3.4vw, 3.2rem)", letterSpacing: "-0.035em" }}>
                Four phases. One source of truth.
              </h2>
              <p className="mt-4 text-[1rem] leading-[1.8] text-ink-secondary max-w-[680px]">
                Every analytics engagement moves through a disciplined sequence — so your reports become a decision system, not a monthly PDF nobody trusts.
              </p>
            </Reveal>

            <div className="grid gap-12 lg:gap-20 lg:grid-cols-[300px_1fr] mt-12 items-start">
              {/* Sticky process nav */}
              <aside className="lg:sticky lg:top-24 border-t border-brand-purple/18">
                <nav aria-label="Process map">
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
                        <span className="truncate">{s.navLabel}</span>
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
                        "relative pb-14 mb-2 scroll-mt-28 " +
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
                          <ul className="mt-4 space-y-1.5 list-none p-0">
                            {s.inputs.map((inp) => (
                              <li key={inp} className="flex items-start gap-2 text-[0.93rem] text-ink-secondary">
                                <span aria-hidden className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-purple/50 flex-shrink-0" />
                                {inp}
                              </li>
                            ))}
                          </ul>
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
                              {s.outputKicker}
                            </span>
                          </div>
                          <strong className="block mt-3 font-bold text-brand-deep text-[1rem]">{s.outputTitle}</strong>
                          <ul className="mt-3 space-y-1.5 list-none p-0">
                            {s.outputLines.map((line) => (
                              <li key={line} className="flex items-start gap-2 text-[0.88rem] text-ink-secondary">
                                <span aria-hidden className="mt-1.5 w-1 h-1 rounded-full bg-brand-purple/40 flex-shrink-0" />
                                {line}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── HANDOFF (what's included) ── */}
        <section className="bg-surface-secondary py-20 sm:py-28">
          <div className="container">
            <Reveal>
              <Eyebrow>Handoff</Eyebrow>
              <h2 className="font-display font-bold text-brand-deep mt-4 max-w-3xl" style={{ fontSize: "clamp(1.9rem, 3.2vw, 3rem)", letterSpacing: "-0.035em" }}>
                What you give us — and what you get back.
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

        {/* ── DARK RIVER — 3 principles ── */}
        <section
          className="py-20 sm:py-28 relative overflow-hidden"
          style={{ background: "var(--gradient-dark)" }}
          data-dark="true"
        >
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
              <Eyebrow light>Perspective</Eyebrow>
              <h2 className="font-display font-bold text-white mt-4 max-w-3xl" style={{ fontSize: "clamp(1.9rem, 3.2vw, 3rem)", letterSpacing: "-0.035em" }}>
                Three principles that shape every report we deliver.
              </h2>
            </Reveal>

            <div
              className="grid md:grid-cols-3 mt-12 rounded-2xl overflow-hidden border border-white/14"
              style={{ background: "hsl(0 0% 100% / 0.14)", gap: "1px" }}
            >
              {RIVER.map((r, i) => (
                <Reveal key={r.h} delay={i * 0.06}>
                  <article className="bg-white/[0.04] p-8 h-full transition-all hover:-translate-y-2 hover:bg-white/[0.075]">
                    <span className="font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-lavender/60 block mb-3">0{i + 1}</span>
                    <h3 className="font-bold text-white text-[1.18rem] leading-[1.25]">{r.h}</h3>
                    <p className="mt-3 text-white/70 leading-[1.7] text-[15px]">
                      {r.p}
                      {r.link && (
                        <>
                          {" "}
                          <Link to={r.link.href} className="text-brand-lavender font-semibold underline underline-offset-4">
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
            <div className="grid gap-12 lg:gap-20 lg:grid-cols-[1fr_1.4fr] items-start">
              <Reveal>
                <Eyebrow>Questions</Eyebrow>
                <h2 className="font-display font-bold text-brand-deep mt-4" style={{ fontSize: "clamp(1.9rem, 3.2vw, 3rem)", letterSpacing: "-0.035em" }}>
                  Common questions about healthcare analytics and reporting.
                </h2>
                <p className="mt-4 text-ink-secondary leading-[1.75] max-w-md">
                  Short, honest answers. Want to understand your numbers? Get a free reporting audit and we'll walk through the gaps together.
                </p>
                <Link
                  to="/free-audit"
                  className="btn-primary-grad inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[15px] mt-8"
                >
                  Request your audit <ArrowRight size={18} />
                </Link>
              </Reveal>

              <SharedFAQList faqs={FAQS} />

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
            <Eyebrow light>Ready when you are</Eyebrow>
            <h2 className="font-display font-bold text-white max-w-3xl mx-auto mt-4" style={{ fontSize: "clamp(2rem, 3.6vw, 3.2rem)", letterSpacing: "-0.04em" }}>
              Turn your marketing data into better growth decisions.
            </h2>
            <p className="mt-4 text-white/70 max-w-xl mx-auto leading-[1.7]">
              We&apos;ll audit your current reports, identify the tracking gaps, and show you the fastest path to clearer ROI, stronger attribution, and better patient acquisition decisions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link
                to="/free-audit"
                className="btn-primary-grad inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[15px]"
              >
                Get a free audit <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold text-[15px] border border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                Explore services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Page-local keyframes */}
      <style>{`
        @keyframes lpOrb { 0%,100% { transform: translate3d(0,0,0) scale(1); } 50% { transform: translate3d(-30px, 28px, 0) scale(1.08); } }
        @keyframes lpFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes lpCtaGlow { 0%,100% { transform: scale(1); } 50% { transform: scale(1.08); } }
      `}</style>
    </div>
  );
}
