import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";

const ease = [0.16, 1, 0.3, 1] as const;
const CANONICAL = "https://vigorant.com/services/marketing-strategy";

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
  "Patient acquisition planning",
  "AI visibility roadmap",
  "12-month growth plan",
  "KPI framework",
];

const HERO_METRICS = [
  { n: "01", p: "Audit growth assumptions, market position, competitive set, and demand signals before any tactic is selected." },
  { n: "02", p: "Prioritize the few channels that match your specialty, geography, and patient lifetime value — and budget accordingly." },
  { n: "03", p: "Tie every initiative to an outcome metric: new patient calls, booked consults, revenue per channel." },
];

const FIT_ROWS = [
  { n: "01", h: "Practices scaling to multiple locations", p: "When ad spend, SEO, and reputation efforts have to align across markets — strategy prevents fragmented, contradictory campaigns." },
  { n: "02", h: "New or relaunching practices", p: "Establish positioning, channel priorities, and patient acquisition systems from the outset to avoid costly course corrections later." },
  { n: "03", h: "Practices stuck on a growth plateau", p: "Diagnose the bottleneck — visibility, conversion, retention, or capacity — and rebuild the plan around the real constraint." },
  { n: "04", h: "Specialty practices with high-value cases", p: "Higher LTV demands a more deliberate plan: targeted demand, qualified lead capture, and consult-stage conversion." },
];

const PHASES = [
  {
    n: "01",
    nav: "Discovery",
    h: "Growth Assessment & Market Analysis",
    paras: [
      "We start with the data that actually moves a practice forward — current performance, competitive positioning, patient demographics, and the demand patterns specific to your specialty and geography.",
      "The output is a clear picture of where growth is leaking, which markets are addressable, and which assumptions in the existing plan no longer hold up.",
    ],
  },
  {
    n: "02",
    nav: "Acquisition",
    h: "Patient Acquisition Planning",
    paras: [
      "Channel selection is built around patient intent and lifetime value — not vendor preference. We map the journey from first impression to booked appointment and assign budget against the steps that actually predict revenue.",
      "Every channel — SEO, paid ads, reputation, referrals, content — has a defined role, a measurable outcome, and a stop-loss threshold.",
    ],
  },
  {
    n: "03",
    nav: "Visibility",
    h: "SEO & AI Visibility Roadmap",
    paras: [
      "The roadmap covers traditional SEO, local search, and the AI-driven discovery layer — AEO, GEO, structured content, schema, and conversational search visibility — so the practice shows up regardless of how patients ask the question.",
      "Topical authority, entity coverage, and citation strategy are sequenced against demand, not against a generic content checklist.",
    ],
  },
  {
    n: "04",
    nav: "Conversion",
    h: "Paid Ads, Website & Reputation Strategy",
    paras: [
      "Paid media plans are built with clear creative, audience, and offer hypotheses — and a testing budget that protects the core spend. Website and landing page recommendations focus on the points of friction that actually drop conversion rate.",
      "Reputation strategy turns the patient experience into a compounding acquisition asset across Google, Yelp, healthcare directories, and AI sources.",
    ],
  },
  {
    n: "05",
    nav: "Roadmap",
    h: "KPI Framework & 12-Month Growth Roadmap",
    paras: [
      "A 12-month roadmap with quarterly milestones, KPI thresholds, and decision points — so leadership can read the plan in five minutes and the operating team can execute it weekly.",
      "Quarterly reviews recalibrate budget allocation, channel mix, and creative direction against actual results — not against the original assumptions.",
    ],
  },
];

const BLUEPRINT = [
  {
    area: "Discovery",
    label: "01",
    inputs: "Practice goals, financial benchmarks, capacity, competitor data, market demand signals, current channel performance.",
    outputs: "Growth assessment, competitive benchmark, opportunity map, prioritized constraints.",
  },
  {
    area: "Acquisition",
    label: "02",
    inputs: "Patient demographics, LTV by service line, channel cost data, historical campaign performance.",
    outputs: "Channel mix recommendation, budget allocation, audience strategy, acquisition funnel.",
  },
  {
    area: "Visibility",
    label: "03",
    inputs: "Keyword universe, intent clusters, current rankings, AI search behavior, schema audit, citation profile.",
    outputs: "SEO roadmap, AEO/GEO plan, content priorities, structured data plan.",
  },
  {
    area: "Conversion",
    label: "04",
    inputs: "Ad account audits, website analytics, landing page heuristics, review profile, intake friction points.",
    outputs: "Paid media plan, website CRO priorities, landing page brief, reputation strategy.",
  },
  {
    area: "Roadmap",
    label: "05",
    inputs: "All prior outputs, capacity & finance constraints, leadership priorities, quarterly milestones.",
    outputs: "12-month roadmap, KPI framework, quarterly review cadence, decision-point thresholds.",
  },
];

const ADAPTER = [
  "Specialty positioning and target patient profile",
  "Service-line prioritization and offer architecture",
  "Channel mix calibrated to patient LTV and capacity",
  "Local market and competitor differentiation",
  "Entity-based SEO and conversational search visibility",
];

const RELATED = [
  { to: "/solutions/dental", label: "Dental Marketing Strategy", sub: "Strategy tailored to general, cosmetic, and specialty dental practices." },
  { to: "/solutions/medical", label: "Medical Marketing Strategy", sub: "Growth planning for primary care, specialty, and multi-location clinics." },
  { to: "/solutions/chiropractic", label: "Chiropractic Marketing Strategy", sub: "Patient acquisition systems for chiropractic and wellness practices." },
  { to: "/services/seo", label: "SEO & AI Optimization", sub: "Execute the visibility roadmap across traditional and AI search." },
];

const FAQS = [
  {
    q: "What is the difference between marketing strategy and marketing execution?",
    a: "Strategy defines where and how to grow — it sets goals, identifies target patients, prioritizes channels, and allocates budget. Execution implements the specific tactics required to achieve those goals. Without a clear strategy, execution becomes fragmented and produces inconsistent results.",
  },
  {
    q: "How often should a healthcare marketing strategy be reviewed?",
    a: "Most healthcare practices should review their marketing strategy quarterly to assess performance against KPIs, and conduct a comprehensive annual evaluation to reset goals, reallocate budget, and update competitive positioning.",
  },
  {
    q: "Does the marketing strategy include AI optimization?",
    a: "Yes. Vigorant's marketing strategy incorporates AI Engine Optimization (AEO), Generative Engine Optimization (GEO), structured content development, schema markup planning, entity-based SEO, and conversational search visibility to ensure practices are discoverable across both traditional and AI-powered search platforms.",
  },
  {
    q: "Can you create a marketing strategy for a new healthcare practice?",
    a: "Absolutely. Strategic planning is particularly valuable during launch and expansion phases, when establishing correct positioning, channel priorities, and patient acquisition systems from the outset prevents costly course corrections later.",
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
        "Healthcare Marketing Strategy",
        "Patient Acquisition Strategy",
        "AI Engine Optimization",
        "Generative Engine Optimization",
        "Healthcare SEO",
        "Dental Marketing Strategy",
        "Medical Marketing Strategy",
        "Chiropractic Marketing Strategy",
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
      name: "Healthcare Marketing Strategy Services | AI-Driven Growth Plans | Vigorant",
      description:
        "AI-driven marketing strategy services for dental, medical, and chiropractic practices, including market analysis, patient acquisition planning, SEO roadmap, AI visibility strategy, and 12-month growth planning.",
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
        { "@type": "ListItem", position: 3, name: "Healthcare Marketing Strategy Services", item: CANONICAL },
      ],
    },
    {
      "@type": "Service",
      "@id": `${CANONICAL}#service`,
      name: "Healthcare Marketing Strategy Services",
      provider: { "@id": "https://vigorant.com/#organization" },
      description:
        "AI-driven marketing strategy services for dental, medical, and chiropractic practices. Includes growth assessment, market and competitor analysis, patient acquisition planning, SEO roadmap, paid advertising roadmap, website optimization recommendations, reputation strategy, KPI framework, and 12-month growth roadmap.",
      areaServed: "United States",
      serviceType: "Healthcare Marketing Strategy",
      audience: {
        "@type": "Audience",
        audienceType:
          "Dental Practices, Medical Clinics, Chiropractic Offices, Multi-location Healthcare Organizations, New Healthcare Practices",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Marketing Strategy Service Deliverables",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Growth Assessment & Market Analysis" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Competitor Benchmarking & Patient Acquisition Planning" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO & AI Visibility Roadmap" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Paid Advertising & Website Optimization Roadmap" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "KPI Framework & 12-Month Growth Roadmap" } },
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

export default function MarketingStrategy() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activePhase, setActivePhase] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Healthcare Marketing Strategy Services | AI-Driven Growth Plans | Vigorant</title>
        <meta
          name="description"
          content="Build a smarter healthcare marketing strategy with Vigorant. AI-driven planning, patient acquisition systems, SEO, paid ads, conversion optimization, and measurable growth for dental, medical, and chiropractic practices."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Healthcare Marketing Strategy Services | AI-Driven Growth Plans | Vigorant" />
        <meta
          property="og:description"
          content="Build a smarter healthcare marketing strategy with Vigorant. AI-driven planning, patient acquisition systems, SEO, paid ads, conversion optimization, and measurable growth for dental, medical, and chiropractic practices."
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
        <meta itemProp="name" content="Healthcare Marketing Strategy Services" />
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
                <li aria-current="page" className="text-brand-deep">Healthcare Marketing Strategy</li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-[1.25fr_1fr] gap-10 lg:gap-14 items-start">
              <Reveal>
                <Eyebrow>Marketing Strategy</Eyebrow>
                <h1
                  id="hero-h1"
                  className="font-display text-brand-deep mt-4 leading-[1.05] tracking-tight"
                  style={{ fontSize: "clamp(34px, 6vw, 64px)", letterSpacing: "-0.03em" }}
                >
                  AI-Driven Growth Plans for{" "}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))" }}
                  >
                    Healthcare Practices
                  </span>
                </h1>
                <p className="mt-6 text-[16.5px] sm:text-[18px] leading-[1.65] text-ink-muted max-w-2xl">
                  Most healthcare marketing fails not from a lack of effort, but from a lack of strategy. We build the plan that decides what to do, what to stop, and what to measure — across SEO, paid media, reputation, and the AI visibility layer.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/free-audit"
                    className="btn-primary-grad inline-flex items-center justify-center gap-2 font-bold text-[14px] sm:text-[16px] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full min-h-[46px] sm:min-h-[48px]"
                  >
                    Request a Strategy Audit <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/free-audit"
                    className="btn-secondary-outline inline-flex items-center justify-center gap-2 font-semibold text-[14px] sm:text-[15px] px-5 sm:px-6 py-3 sm:py-3.5 rounded-full min-h-[46px] sm:min-h-[48px]"
                  >
                    Book a Growth Strategy Call
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

              {/* Strategy dashboard panel — editorial, no card grid */}
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
                      <span>STRATEGY OS</span>
                      <span className="px-2 py-1 rounded-full bg-surface-secondary border border-brand-purple/20">
                        v2026
                      </span>
                    </div>

                    <h3
                      className="font-display text-brand-deep mt-4 leading-[1.15]"
                      style={{ fontSize: "clamp(20px, 2.4vw, 26px)", letterSpacing: "-0.025em" }}
                    >
                      12-Month Patient Growth Plan
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
                        { l: "PIPELINE", v: "+38%", s: "Q-on-Q" },
                        { l: "CAC", v: "−21%", s: "blended" },
                        { l: "AI VIS.", v: "4.6×", s: "AEO/GEO" },
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
                      {["Discover", "Plan", "Execute", "Measure"].map((s, i, arr) => (
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
                  Without a clear strategy, execution becomes fragmented — and inconsistent results follow.
                </blockquote>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="border-l-[3px] border-brand-purple pl-6">
                  <Eyebrow>Why strategy matters</Eyebrow>
                  <h2
                    id="thesis-h2"
                    className="font-display text-brand-deep mt-4 leading-[1.1] tracking-tight"
                    style={{ fontSize: "clamp(26px, 4.2vw, 42px)", letterSpacing: "-0.03em" }}
                  >
                    Strategy is what decides where to spend, what to ignore, and how to measure.
                  </h2>
                  <p className="mt-5 text-[16.5px] leading-[1.7] text-ink-muted">
                    Most practices have plenty of tactics — a vendor for ads, a contractor for SEO, a tool for reviews. What's missing is the single plan that aligns them around the same patient, the same economics, and the same outcomes. That plan is the work.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* MARKET FIT — numbered row layout, not cards */}
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
                  Built for healthcare practices where the plan has to hold up under pressure.
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
                  How a Vigorant marketing strategy is built.
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
                <div className="flex flex-col gap-6">
                {PHASES.map((e, i) => (
                  <motion.article
                    key={e.n}
                    id={`phase-${e.n}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30% 0px -40% 0px" }}
                    onViewportEnter={() => setActivePhase(i)}
                    transition={{ duration: 0.7, ease }}
                    className="rounded-2xl bg-white border border-brand-purple/15 p-6 sm:p-10 scroll-mt-32"
                    style={{ boxShadow: "0 18px 48px hsl(247 93% 64% / 0.06)" }}
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
                      className="font-display text-brand-deep mt-5 leading-[1.15] tracking-tight"
                      style={{ fontSize: "clamp(22px, 3.2vw, 32px)", letterSpacing: "-0.03em" }}
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
          </div>
        </section>

        {/* BLUEPRINT TABLE — row-based, not cards */}
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
                  The marketing strategy blueprint.
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

        {/* ADAPTER DARK — strategy adapts to specialty */}
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
                <Eyebrow light>Strategy adapter</Eyebrow>
                <h2
                  id="adapter-h2"
                  className="font-display text-white mt-4 leading-[1.1] tracking-tight"
                  style={{ fontSize: "clamp(26px, 4.2vw, 42px)", letterSpacing: "-0.03em" }}
                >
                  The same framework, adapted to your specialty.
                </h2>
                <p className="mt-5 text-[16px] leading-[1.7] text-white/75">
                  Dental, medical, and chiropractic practices share the same growth physics — visibility, conversion, retention. The strategy adapts to the specifics of your specialty, market, and patient economics.
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
                    What the strategy customizes
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
                  Common questions practices ask before committing to a marketing strategy engagement.
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
              <Eyebrow light>Ready for a real plan?</Eyebrow>
              <h2
                id="cta-h2"
                className="font-display text-white mt-4 leading-[1.1] tracking-tight"
                style={{ fontSize: "clamp(30px, 5vw, 52px)", letterSpacing: "-0.03em" }}
              >
                Stop running tactics. Start running a strategy.
              </h2>
              <p className="mt-5 text-[16.5px] leading-[1.7] text-white/75">
                We'll audit current performance, identify the real growth constraint, and outline the 12-month plan to fix it — across SEO, paid, reputation, and AI visibility.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  to="/free-audit"
                  className="btn-on-dark inline-flex items-center justify-center gap-2 font-bold text-[14px] sm:text-[16px] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full min-h-[46px] sm:min-h-[48px]"
                >
                  Request a Strategy Audit <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
