import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Search, Map, BarChart3, Plus } from "lucide-react";
import { useState } from "react";
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
    >{children}</motion.div>
  );
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <span className={light ? "section-label-light" : "section-label inline-block px-3 py-1 rounded-full bg-brand-purple/8 border border-brand-purple/20"}>{children}</span>;
}

const FAQS = [
  {
    q: "What is the difference between marketing strategy and marketing execution?",
    a: "Strategy defines where and how to grow — it sets goals, identifies target patients, allocates budget, and prioritizes channels. Execution implements the tactics required to achieve those goals. Without a strategy, execution becomes fragmented and produces inconsistent results.",
  },
  {
    q: "How often should a healthcare marketing strategy be reviewed?",
    a: "Most practices should review strategy quarterly to assess performance against KPIs, and conduct a comprehensive annual evaluation to reset goals, reallocate budget, and update competitive positioning.",
  },
  {
    q: "Does the strategy include AI optimization?",
    a: "Yes. We incorporate AEO, GEO, structured content, schema markup planning, entity-based SEO, and conversational search visibility to ensure your practice is discoverable across both traditional and AI-powered search platforms.",
  },
  {
    q: "Can you create a strategy for a new practice?",
    a: "Absolutely. Strategic planning is particularly valuable during launch and expansion phases, when establishing correct positioning and channel priorities from the outset prevents costly course corrections later.",
  },
];

const PHASES = [
  {
    num: "01",
    icon: Search,
    h3: "Market & Competitive Analysis",
    body: "We assess local competition, market opportunities, patient demand patterns, and positioning gaps to identify exactly where your practice can win.",
    bullets: [
      "Local market analysis and competitor benchmarking",
      "Patient demand and search behavior assessment",
      "Unique value proposition and differentiation strategy",
    ],
  },
  {
    num: "02",
    icon: Map,
    h3: "Patient Journey Mapping & Digital Visibility",
    body: (
      <>
        We map how prospective patients discover, evaluate, and choose providers — then build a visibility plan across{" "}
        <Link to="/services/seo" className="text-brand-purple font-semibold underline-offset-4 hover:underline">
          AI Engine Optimization (AEO) and Generative Engine Optimization (GEO)
        </Link>
        , paid advertising, local search, and reputation management.
      </>
    ),
    bullets: [
      "Patient journey mapping from search to booked appointment",
      "SEO, AEO, GEO, and local search visibility planning",
      "Paid advertising and reputation management roadmap",
    ],
  },
  {
    num: "03",
    icon: BarChart3,
    h3: "Conversion Optimization & Growth Measurement",
    body: "We identify where prospective patients drop off — website, phone, booking flow — and define the KPI framework that connects marketing activity to actual practice revenue.",
    bullets: [
      "Website and lead conversion optimization recommendations",
      "Phone call and appointment request improvement strategy",
      "KPI framework tied to patient acquisition and revenue",
    ],
  },
];

const LEDGER = [
  ["Growth goals", "Define where the practice needs to grow — new patients, specific services, geographic expansion — and translate those into measurable targets."],
  ["Target patient profile", "Identify the ideal patient demographics, concerns, decision triggers, and search behaviors the strategy must address."],
  ["Channel priorities", "Determine which channels — SEO, paid search, reputation, social, referral — deliver the highest return for this specific practice."],
  ["Measurement", "Establish KPIs tied directly to patient acquisition and revenue, not vanity metrics like impressions or followers."],
];

const INCLUDED = [
  "Growth assessment and current-state review",
  "Market analysis and competitor benchmarking",
  "Patient acquisition and targeting plan",
  "SEO and AI optimization roadmap",
  "Paid advertising roadmap",
  "Website conversion optimization recommendations",
  "Reputation strategy",
  "KPI and measurement framework",
  "12-month growth roadmap",
];

const AI_PANEL = [
  "AI Engine Optimization (AEO)",
  "Generative Engine Optimization (GEO)",
  "Structured content development",
  "Schema markup planning",
  "Entity-based SEO",
  "Conversational search visibility",
];

const RELATED = [
  { label: "Dental Marketing Strategy", sub: "Tailor the strategy for dental patient acquisition.", href: "/solutions/dental" },
  { label: "Medical Marketing Strategy", sub: "Build a growth roadmap for medical clinics.", href: "/solutions/medical" },
  { label: "SEO & AI Optimization", sub: "Execute the visibility layer of your strategy.", href: "/services/seo" },
];

const SCHEMA_GRAPH = {
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
      knowsAbout: ["Healthcare Marketing Strategy", "Patient Acquisition", "SEO for Healthcare", "AI Engine Optimization", "Generative Engine Optimization", "Dental Marketing", "Medical Marketing", "Chiropractic Marketing"],
    },
    {
      "@type": "WebPage",
      "@id": `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: "Healthcare Marketing Strategy Services | Vigorant",
      description: "AI-driven healthcare marketing strategy services for dental, medical, and chiropractic practices.",
      breadcrumb: { "@id": `${CANONICAL}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://vigorant.com/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://vigorant.com/services" },
        { "@type": "ListItem", position: 3, name: "Marketing Strategy", item: CANONICAL },
      ],
    },
    {
      "@type": "Service",
      "@id": `${CANONICAL}#service`,
      name: "Healthcare Marketing Strategy Services",
      provider: { "@id": "https://vigorant.com/#organization" },
      description: "A structured healthcare marketing strategy service for dental, medical, and chiropractic practices including market analysis, patient journey mapping, SEO/AEO/GEO, conversion optimization, and a 12-month growth plan.",
      areaServed: "United States",
      serviceType: "Healthcare Marketing Strategy",
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default function MarketingStrategy() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Healthcare Marketing Strategy Services | AI-Driven Growth Plans | Vigorant</title>
        <meta name="description" content="Build a smarter healthcare marketing strategy with Vigorant. AI-driven planning, patient acquisition systems, SEO, paid ads, conversion optimization, and measurable growth for dental, medical, and chiropractic practices." />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Healthcare Marketing Strategy Services | AI-Driven Growth Plans | Vigorant" />
        <meta property="og:description" content="Build a smarter healthcare marketing strategy with Vigorant. AI-driven planning, patient acquisition systems, SEO, paid ads, and measurable growth." />
        <meta property="og:url" content={CANONICAL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Healthcare Marketing Strategy Services | Vigorant" />
        <meta name="twitter:description" content="AI-driven marketing strategy for dental, medical, and chiropractic practices." />
        <script type="application/ld+json">{JSON.stringify(SCHEMA_GRAPH)}</script>
      </Helmet>

      <Nav />

      <main id="main" itemScope itemType="https://schema.org/Service">
        <meta itemProp="name" content="Healthcare Marketing Strategy Services" />
        <meta itemProp="provider" content="Vigorant" />
        <meta itemProp="areaServed" content="United States" />

        {/* ============== HERO ============== */}
        <section aria-labelledby="hero-h1" className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
          <div className="absolute inset-0 grid-overlay opacity-60 pointer-events-none" aria-hidden />
          <div className="container relative">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-1.5 text-[12px] font-mono-ui uppercase tracking-wider text-ink-secondary">
                <li><Link to="/" className="hover:text-brand-purple transition-colors">Home</Link></li>
                <li aria-hidden>/</li>
                <li><Link to="/services" className="hover:text-brand-purple transition-colors">Services</Link></li>
                <li aria-hidden>/</li>
                <li aria-current="page" className="text-brand-purple">Marketing Strategy</li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-[1.35fr_1fr] gap-10 lg:gap-14 items-start">
              <Reveal>
                <Eyebrow>Marketing Strategy</Eyebrow>
                <h1
                  id="hero-h1"
                  className="font-display font-bold text-brand-deep mt-5"
                  style={{ fontSize: "clamp(36px, 6vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.03em" }}
                >
                  Marketing Strategy Services for Sustainable Healthcare Growth
                </h1>
                <p className="mt-6 text-[17px] sm:text-[18px] leading-[1.7] text-ink-secondary max-w-[60ch]">
                  Most healthcare practices do not have a marketing problem — they have a <strong className="text-brand-deep">strategy problem</strong>. Vigorant helps dental, medical, and chiropractic practices build data-driven marketing strategies that attract the right patients, improve conversion rates, and create predictable growth.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/free-audit" className="btn-primary-grad inline-flex items-center gap-2 rounded-full px-6 py-3 font-extrabold">
                    Book a Growth Consultation <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/free-audit" className="btn-secondary-outline inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold bg-background">
                    Request a Strategy Assessment
                  </Link>
                </div>
              </Reveal>

              {/* Proof aside */}
              <Reveal delay={0.1}>
                <aside
                  aria-label="At a glance"
                  className="rounded-3xl bg-background p-7 sm:p-8"
                  style={{ border: "1px solid hsl(247 93% 64% / 0.18)", boxShadow: "0 6px 18px hsl(248 49% 15% / 0.10)" }}
                >
                  <p className="section-label">At a glance</p>
                  <dl className="mt-5 space-y-5">
                    {[
                      ["Primary outcome", "A structured growth roadmap that aligns every marketing channel around predictable patient acquisition and revenue growth."],
                      ["Best for", "Practices investing in websites, SEO, advertising, or social without a unified plan that ties everything together."],
                      ["Core deliverables", "Market analysis, competitive benchmarking, patient acquisition plan, SEO roadmap, 12-month growth roadmap."],
                    ].map(([k, v]) => (
                      <div key={k} className="grid grid-cols-[110px_1fr] sm:grid-cols-[130px_1fr] gap-3 pb-5 last:pb-0 border-b last:border-0" style={{ borderColor: "hsl(247 93% 64% / 0.14)" }}>
                        <dt className="font-mono-ui text-[10px] uppercase tracking-wider text-brand-purple pt-0.5">{k}</dt>
                        <dd className="text-[14px] leading-[1.6] text-ink-secondary">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </aside>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============== DEFINITION ============== */}
        <section aria-labelledby="definition-h2" className="bg-surface-secondary py-20 sm:py-28">
          <div className="container">
            <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16">
              <Reveal>
                <Eyebrow>Definition</Eyebrow>
                <h2
                  id="definition-h2"
                  className="font-display font-bold text-brand-deep mt-4"
                  style={{ fontSize: "clamp(28px, 4.4vw, 48px)", lineHeight: 1.08, letterSpacing: "-0.025em" }}
                >
                  What Is a Healthcare Marketing Strategy?
                </h2>
                <p className="mt-6 text-[16px] sm:text-[17px] leading-[1.75] text-ink-secondary">
                  A healthcare marketing strategy is a structured roadmap that defines growth goals, target patient profiles, competitive positioning, channel priorities, budget allocation, and measurement frameworks. Rather than chasing trends, we create systems that generate measurable outcomes.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <dl className="divide-y" style={{ borderTop: "1px solid hsl(247 93% 64% / 0.18)", borderBottom: "1px solid hsl(247 93% 64% / 0.18)" }}>
                  {LEDGER.map(([k, v]) => (
                    <div key={k} className="grid sm:grid-cols-[180px_1fr] gap-2 sm:gap-6 py-5" style={{ borderColor: "hsl(247 93% 64% / 0.18)" }}>
                      <dt className="font-mono-ui text-[11px] uppercase tracking-wider text-brand-purple pt-1">{k}</dt>
                      <dd className="text-[15px] leading-[1.7] text-brand-deep">{v}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============== FRAMEWORK / PHASES ============== */}
        <section aria-labelledby="framework-h2" className="py-20 sm:py-28">
          <div className="container">
            <Reveal className="max-w-3xl">
              <Eyebrow>Framework</Eyebrow>
              <h2
                id="framework-h2"
                className="font-display font-bold text-brand-deep mt-4"
                style={{ fontSize: "clamp(28px, 4.4vw, 48px)", lineHeight: 1.08, letterSpacing: "-0.025em" }}
              >
                Our Marketing Strategy Framework
              </h2>
              <p className="mt-5 text-[16px] sm:text-[17px] leading-[1.7] text-ink-secondary">
                A structured approach to align every marketing channel around sustainable patient acquisition and revenue growth.
              </p>
            </Reveal>

            <div className="mt-14 space-y-10 sm:space-y-14">
              {PHASES.map((p, i) => {
                const Icon = p.icon;
                return (
                  <Reveal key={p.num} delay={i * 0.08}>
                    <article className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-14 items-start rounded-3xl p-7 sm:p-10" style={{ background: "linear-gradient(135deg, hsl(250 100% 98%), hsl(0 0% 100%))", border: "1px solid hsl(247 93% 64% / 0.18)" }}>
                      {/* Visual */}
                      <div className="relative aspect-[5/4] rounded-2xl overflow-hidden flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(250 100% 98%), hsl(0 0% 100%))", border: "1px solid hsl(247 93% 64% / 0.18)" }}>
                        <span
                          aria-hidden
                          className="absolute inset-0 flex items-center justify-center font-display font-extrabold select-none"
                          style={{
                            fontSize: "clamp(120px, 22vw, 260px)",
                            color: "transparent",
                            WebkitTextStroke: "1px hsl(247 93% 64% / 0.22)",
                            letterSpacing: "-0.04em",
                            lineHeight: 1,
                          }}
                        >
                          {p.num}
                        </span>
                        <div
                          className="relative flex h-20 w-20 items-center justify-center rounded-3xl text-white"
                          style={{
                            background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))",
                            boxShadow: "0 22px 60px hsl(247 93% 64% / 0.32)",
                          }}
                        >
                          <Icon className="h-9 w-9" />
                        </div>
                      </div>

                      {/* Content */}
                      <div>
                        <span className="font-mono-ui text-[12px] tracking-[0.2em] text-brand-purple">{p.num}</span>
                        <h3 className="mt-2 text-brand-deep font-extrabold" style={{ fontSize: "clamp(22px, 2.6vw, 30px)", lineHeight: 1.2 }}>
                          {p.h3}
                        </h3>
                        <p className="mt-4 text-[16px] leading-[1.75] text-ink-secondary">{p.body}</p>
                        <ul className="mt-5 space-y-3">
                          {p.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-3 text-[15px] leading-[1.6] text-brand-deep">
                              <span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 rounded-full shrink-0" style={{ background: "hsl(247 93% 64%)" }} />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============== INCLUDED + AI PANEL ============== */}
        <section aria-labelledby="included-h2" className="bg-surface-secondary py-20 sm:py-28">
          <div className="container">
            <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-start">
              <Reveal>
                <Eyebrow>Included</Eyebrow>
                <h2
                  id="included-h2"
                  className="font-display font-bold text-brand-deep mt-4"
                  style={{ fontSize: "clamp(28px, 4.4vw, 44px)", lineHeight: 1.08, letterSpacing: "-0.025em" }}
                >
                  What Is Included in Our Marketing Strategy Service?
                </h2>
                <p className="mt-5 text-[16px] sm:text-[17px] leading-[1.7] text-ink-secondary">
                  Each strategy engagement produces a complete growth plan — aligned across channels, grounded in data, and built to drive measurable patient acquisition.
                </p>
                <ul className="mt-8 grid sm:grid-cols-2 gap-3.5">
                  {INCLUDED.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] leading-[1.55] text-brand-deep">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ background: "hsl(247 93% 64% / 0.12)", color: "hsl(247 93% 64%)" }}>
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.1}>
                <aside
                  className="rounded-3xl p-7 sm:p-9 text-white relative overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, hsl(248 49% 15%) 0%, hsl(250 45% 19%) 100%)",
                    border: "1px solid hsl(0 0% 100% / 0.10)",
                  }}
                  aria-label="AI-Powered Strategy"
                >
                  <div className="absolute inset-0 pointer-events-none" aria-hidden style={{ background: "radial-gradient(ellipse at 20% 100%, hsl(247 93% 64% / 0.28), transparent 65%)" }} />
                  <div className="relative">
                    <span className="section-label-light">AI-Powered Strategy</span>
                    <h3 className="mt-4 font-display font-bold text-white" style={{ fontSize: "clamp(22px, 2.4vw, 28px)", lineHeight: 1.2 }}>
                      Built for AI-driven search
                    </h3>
                    <p className="mt-3 text-[14px] leading-[1.65] text-white/70">
                      Every strategy includes a visibility layer engineered for both traditional search and conversational AI platforms.
                    </p>
                    <ul className="mt-6 space-y-3">
                      {AI_PANEL.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[15px] leading-[1.5] text-white/90">
                          <span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 rounded-full shrink-0" style={{ background: "hsl(248 100% 75%)" }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </aside>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============== RELATED LINK STRIP ============== */}
        <section aria-labelledby="related-h2" className="py-20 sm:py-24">
          <div className="container">
            <Reveal>
              <Eyebrow>Related services</Eyebrow>
              <h2
                id="related-h2"
                className="font-display font-bold text-brand-deep mt-4"
                style={{ fontSize: "clamp(26px, 3.4vw, 40px)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
              >
                Related Strategy and Growth Pages
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div
                className="mt-10 grid md:grid-cols-3 rounded-3xl overflow-hidden"
                style={{ background: "hsl(247 93% 64% / 0.18)", border: "1px solid hsl(247 93% 64% / 0.18)", gap: "1px" }}
              >
                {RELATED.map((l) => (
                  <Link
                    key={l.href}
                    to={l.href}
                    className="group bg-background p-7 sm:p-8 transition-colors duration-300 hover:bg-surface-secondary"
                  >
                    <span className="font-mono-ui text-[11px] uppercase tracking-wider text-brand-purple">Related</span>
                    <h3 className="mt-3 text-brand-deep font-extrabold text-[20px] leading-[1.25] group-hover:text-brand-purple transition-colors">
                      {l.label}
                    </h3>
                    <p className="mt-3 text-[14px] leading-[1.6] text-ink-secondary">{l.sub}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-purple">
                      Explore <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                ))}
              </div>

              {/* Authority cite */}
              <p className="mt-10 pt-6 text-[12px] font-mono-ui text-ink-muted/70" style={{ borderTop: "1px solid hsl(247 93% 64% / 0.12)" }}>
                External reference:{" "}
                <a href="https://www.cdc.gov/healthcommunication/" rel="noopener noreferrer" target="_blank" className="text-brand-purple underline">
                  CDC Health Communication Resources
                </a>{" "}
                — referenced in strategic communication planning for healthcare practices.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ============== FAQ ============== */}
        <section aria-labelledby="faq-h2" className="bg-surface-secondary py-20 sm:py-28">
          <div className="container">
            <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16 items-start">
              <Reveal>
                <Eyebrow>FAQ</Eyebrow>
                <h2
                  id="faq-h2"
                  className="font-display font-bold text-brand-deep mt-4"
                  style={{ fontSize: "clamp(28px, 4.4vw, 44px)", lineHeight: 1.08, letterSpacing: "-0.025em" }}
                >
                  Frequently Asked Questions
                </h2>
                <p className="mt-5 text-[15px] leading-[1.7] text-ink-secondary">
                  Key questions healthcare practices ask before starting a marketing strategy engagement.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <ul className="divide-y" style={{ borderTop: "1px solid hsl(247 93% 64% / 0.18)", borderBottom: "1px solid hsl(247 93% 64% / 0.18)" }}>
                  {FAQS.map((f, i) => {
                    const open = openFaq === i;
                    return (
                      <li key={f.q} style={{ borderColor: "hsl(247 93% 64% / 0.18)" }}>
                        <button
                          type="button"
                          aria-expanded={open}
                          onClick={() => setOpenFaq(open ? null : i)}
                          className="w-full flex items-center justify-between gap-4 py-6 text-left"
                        >
                          <span className="font-extrabold text-brand-deep text-[16px] sm:text-[18px] leading-[1.4]">{f.q}</span>
                          <span
                            aria-hidden
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300"
                            style={{
                              background: open ? "hsl(247 93% 64%)" : "hsl(250 100% 98%)",
                              color: open ? "hsl(0 0% 100%)" : "hsl(247 93% 64%)",
                              transform: open ? "rotate(45deg)" : "rotate(0deg)",
                            }}
                          >
                            <Plus className="h-4 w-4" />
                          </span>
                        </button>
                        <div
                          className="grid transition-all duration-300 ease-out"
                          style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                        >
                          <div className="overflow-hidden">
                            <p className="pb-6 pr-12 text-[15px] leading-[1.7] text-ink-secondary">{f.a}</p>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============== FINAL CTA ============== */}
        <section aria-labelledby="cta-h2" className="relative py-24 sm:py-32 overflow-hidden text-white" style={{ background: "var(--gradient-dark)" }}>
          <div className="absolute inset-0 pointer-events-none" aria-hidden style={{ background: "radial-gradient(circle at 50% 100%, hsl(247 93% 64% / 0.28), transparent 70%)" }} />
          <div className="container relative text-center">
            <Reveal>
              <span className="section-label-light">Ready to grow strategically?</span>
              <h2
                id="cta-h2"
                className="font-display font-bold text-white mt-6 max-w-4xl mx-auto"
                style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.08, letterSpacing: "-0.025em" }}
              >
                Stop guessing. Build a strategy that fills your schedule.
              </h2>
              <p className="mt-6 text-[16px] sm:text-[18px] leading-[1.7] text-white/75 max-w-2xl mx-auto">
                Start with a strategy assessment to identify where your practice is losing patients, wasting budget, or missing growth opportunities across digital channels.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Link to="/free-audit" className="btn-primary-grad inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-extrabold">
                  Book a Growth Consultation <ArrowRight className="h-4 w-4" />
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
