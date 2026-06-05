import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, Plus, Check } from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";

const ease = [0.16, 1, 0.3, 1] as const;
const CANONICAL = "https://vigorant.com/services/branding-rebranding";

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

const BAND = [
  { k: "Audience", v: "Dental, medical, chiropractic, specialty, and multi-location practices" },
  { k: "Outcome", v: "Stronger trust, differentiation, and a brand that supports patient acquisition" },
  { k: "Core channels", v: "Website, SEO, advertising, reputation, social media, and patient communications" },
  { k: "AI signal", v: "Entity consistency and authority recognition across traditional and AI-powered search" },
];

const COMPARE = [
  {
    a: "The practice looks like every other option in the market. Patients have no clear reason to choose you.",
    b: "Clear positioning and consistent messaging give patients a compelling reason to choose and trust your practice.",
  },
  {
    a: "Inconsistent visuals, messaging, and tone erode patient confidence before the first appointment.",
    b: "Brand voice, visuals, and identity stay consistent across website, SEO, advertising, and patient communications.",
  },
  {
    a: "Weak brand signals reduce the effectiveness of every marketing investment — SEO, ads, and reputation tools all underperform.",
    b: "A unified brand amplifies marketing ROI. Every channel reinforces the same trust signals and patient story.",
  },
];

type TabContent = {
  num: string;
  label: string;
  h3: string;
  body: React.ReactNode;
  lanes?: { label: string; pct: number }[];
  bullets?: React.ReactNode[];
};

const TABS: TabContent[] = [
  {
    num: "01",
    label: "Brand Discovery & Research",
    h3: "Understand where the practice stands and where it needs to go.",
    body: "We conduct market analysis, competitive benchmarking, patient perception review, and positioning assessment to identify gaps and opportunities before any brand decisions are made.",
    lanes: [
      { label: "Market clarity", pct: 86 },
      { label: "Competitive gap", pct: 72 },
      { label: "Patient perception", pct: 55 },
    ],
  },
  {
    num: "02",
    label: "Positioning & Messaging",
    h3: "Define what makes the practice worth choosing.",
    body: "We develop the unique value proposition, market differentiation, and messaging framework that gives patients a clear, compelling reason to trust and select your practice.",
    bullets: [
      "Unique value proposition and differentiation strategy",
      "Messaging framework and brand voice guidelines",
      "Communication consistency across patient touchpoints",
    ],
  },
  {
    num: "03",
    label: "Visual Identity & Digital Alignment",
    h3: "Make the brand visible, consistent, and conversion-ready.",
    body: (
      <>
        We translate positioning and messaging into visual identity recommendations and ensure the brand is applied consistently across website,{" "}
        <Link to="/services/seo" className="text-brand-purple font-semibold underline-offset-4 hover:underline">
          SEO and AI optimization
        </Link>
        , advertising,{" "}
        <Link to="/services/reputation" className="text-brand-purple font-semibold underline-offset-4 hover:underline">
          reputation management
        </Link>
        , and patient communications.
      </>
    ),
    bullets: [
      "Color, typography, imagery, and design system recommendations",
      "Website and digital experience alignment",
      "Brand launch and rollout strategy",
    ],
  },
];

const OBJECTIONS = [
  { h: "Low patient trust", p: "Patients need consistent credibility signals — across website, reviews, social, and advertising — before they contact a practice." },
  { h: "Outdated identity", p: "A visual identity or messaging that no longer reflects the practice creates doubt and weakens every marketing channel it touches." },
  { h: "Inconsistent positioning", p: "When the brand message changes across channels, patients lose confidence. Consistency is the brand's most powerful trust signal." },
  { h: "Invisible to AI search", p: "AI-powered discovery platforms evaluate entity consistency, authority, and reputation signals. Strong branding directly improves AI visibility." },
];

const FAQS = [
  { q: "What is healthcare branding?", a: "Healthcare branding is the strategic process of shaping how patients perceive and experience your practice — encompassing positioning, messaging, visual identity, patient experience, online reputation, and communication consistency." },
  { q: "How long does a healthcare rebranding project take?", a: "Most healthcare rebranding projects range from several weeks to several months depending on scope, number of locations, and the complexity of visual and messaging changes required." },
  { q: "Can branding improve patient acquisition?", a: "Yes. A strong healthcare brand builds trust before the first appointment, improves conversion rates across digital channels, and increases the effectiveness of SEO, paid advertising, and reputation management." },
  { q: "Does branding affect SEO and AI visibility?", a: "Yes. Consistent branding strengthens authority signals, trust indicators, and entity recognition — all of which influence how traditional search engines and AI-powered discovery platforms evaluate and surface your practice." },
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
    },
    {
      "@type": "WebPage",
      "@id": CANONICAL + "#webpage",
      url: CANONICAL,
      name: "Healthcare Branding & Rebranding Services | Vigorant",
      description:
        "Healthcare branding and rebranding services for dental, medical, and chiropractic practices. Brand discovery, positioning, messaging, visual identity, digital alignment, and rollout.",
    },
    {
      "@type": "BreadcrumbList",
      "@id": CANONICAL + "#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://vigorant.com/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://vigorant.com/services" },
        { "@type": "ListItem", position: 3, name: "Healthcare Branding & Rebranding Services", item: CANONICAL },
      ],
    },
    {
      "@type": "Service",
      "@id": CANONICAL + "#service",
      name: "Healthcare Branding & Rebranding Services",
      provider: { "@id": "https://vigorant.com/#organization" },
      description:
        "Healthcare branding and rebranding services including brand audit, competitive analysis, positioning strategy, messaging framework, brand voice guidelines, visual identity recommendations, website alignment, reputation review, and a growth-oriented brand roadmap.",
      areaServed: "United States",
      serviceType: "Healthcare Brand Strategy",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Branding & Rebranding Deliverables",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand Audit & Competitive Analysis" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Positioning Strategy & Messaging Framework" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Visual Identity Recommendations" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website & Digital Experience Alignment" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Growth-Oriented Brand Roadmap" } },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": CANONICAL + "#faq",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function BrandingRebranding() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const tab = TABS[activeTab];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Healthcare Branding & Rebranding Services | Build a Practice Patients Remember | Vigorant</title>
        <meta
          name="description"
          content="Transform how patients perceive your practice with healthcare branding and rebranding services. Build trust, differentiate from competitors, and create a stronger patient acquisition engine with Vigorant."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Healthcare Branding & Rebranding Services | Vigorant" />
        <meta
          property="og:description"
          content="Build trust, differentiate from competitors, and create a stronger patient acquisition engine with healthcare branding from Vigorant."
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
        <meta itemProp="name" content="Healthcare Branding & Rebranding Services" />
        <meta itemProp="provider" content="Vigorant" />
        <meta itemProp="areaServed" content="United States" />

        {/* HERO — split with sticky audit rail */}
        <section aria-labelledby="hero-h1" className="relative overflow-hidden bg-background">
          <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full opacity-90"
            style={{ background: "radial-gradient(circle, hsl(247 93% 64% / 0.18), transparent 70%)", filter: "blur(80px)" }} />
          <div aria-hidden className="pointer-events-none absolute -bottom-12 -left-16 w-[360px] h-[360px] rounded-full opacity-80"
            style={{ background: "radial-gradient(circle, hsl(252 100% 80% / 0.14), transparent 70%)", filter: "blur(70px)" }} />

          <div className="container relative pt-10 sm:pt-14 pb-16 sm:pb-24">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center flex-wrap gap-1.5 font-mono-ui text-[11px] text-ink-muted list-none p-0 m-0">
                <li><Link to="/" className="hover:text-brand-purple transition-colors">Home</Link></li>
                <li className="text-brand-lavender/70">/</li>
                <li><Link to="/services" className="hover:text-brand-purple transition-colors">Services</Link></li>
                <li className="text-brand-lavender/70">/</li>
                <li aria-current="page" className="text-brand-deep">Healthcare Branding &amp; Rebranding Services</li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-[1fr_400px] gap-10 lg:gap-14 items-start">
              <Reveal>
                <Eyebrow>Branding &amp; Rebranding</Eyebrow>
                <h1
                  id="hero-h1"
                  className="font-display text-brand-deep mt-4 leading-[1.05] tracking-tight"
                  style={{ fontSize: "clamp(34px, 6vw, 64px)", letterSpacing: "-0.03em" }}
                >
                  Healthcare Branding &amp;{" "}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(135deg, hsl(247 93% 64%), hsl(252 100% 75%))" }}
                  >
                    Rebranding
                  </span>{" "}
                  Services
                </h1>
                <p className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] text-ink-muted max-w-2xl">
                  Build a brand patients trust, remember, and choose. Your brand is more than a logo — it is the perception patients form before they call, book, or visit your practice. Vigorant helps dental, medical, and chiropractic practices develop powerful brands that strengthen credibility, improve patient acquisition, and support long-term growth.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/free-audit"
                    className="inline-flex items-center justify-center gap-2 font-bold text-[14px] sm:text-[15px] text-white px-6 py-3 rounded-full transition-all hover:-translate-y-0.5"
                    style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(252 100% 75%))", boxShadow: "0 12px 32px hsl(247 93% 64% / 0.35)" }}
                  >
                    Schedule a Brand Strategy Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/free-audit"
                    className="inline-flex items-center justify-center gap-2 font-semibold text-[14px] sm:text-[15px] text-brand-deep px-5 py-3 rounded-full border-[1.5px] border-brand-purple/25 hover:border-brand-purple hover:bg-brand-purple/5 transition-all"
                  >
                    Request a Brand Assessment
                  </Link>
                </div>
              </Reveal>

              {/* Audit Rail (sticky on desktop) */}
              <Reveal delay={0.1}>
                <aside
                  className="relative lg:sticky lg:top-24 rounded-3xl p-7 sm:p-8 overflow-hidden"
                  style={{ background: "var(--gradient-dark)", border: "1px solid hsl(247 93% 64% / 0.25)" }}
                  data-dark="true"
                >
                  <div aria-hidden className="absolute inset-0 grid-overlay opacity-30" />
                  <div className="relative">
                    <span className="font-mono-ui text-[11px] uppercase tracking-[0.14em] text-brand-lavender/85">
                      Brand positioning
                    </span>
                    <p
                      className="mt-3 font-extrabold text-white leading-[1.18] tracking-tight"
                      style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.1rem)" }}
                    >
                      Trust before the first appointment.
                    </p>
                    <p className="mt-4 text-[14.5px] leading-[1.65] text-white/75">
                      A practice brand performs best when positioning, messaging, visual identity, and digital presence are unified around a single, patient-focused story.
                    </p>

                    <div className="mt-7 space-y-4 border-t border-white/10 pt-5">
                      {[
                        ["Primary lever", "Patient trust and credibility signals"],
                        ["Typical gap", "Inconsistent messaging, outdated visual identity, or a brand that no longer reflects the practice's direction."],
                        ["Activation path", "Brand audit → positioning → messaging → visual identity → digital alignment → rollout"],
                      ].map(([k, v]) => (
                        <div key={k} className="grid grid-cols-[110px_1fr] gap-3">
                          <span className="font-mono-ui text-[10.5px] uppercase tracking-[0.12em] text-brand-lavender/70 pt-0.5">{k}</span>
                          <strong className="text-[13.5px] text-white/90 font-semibold leading-[1.55]">{v}</strong>
                        </div>
                      ))}
                    </div>
                  </div>
                </aside>
              </Reveal>
            </div>
          </div>
        </section>

        {/* BAND — 4 cell strip */}
        <section aria-label="At a glance" className="border-y border-brand-purple/10 bg-surface-secondary">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-brand-purple/10">
              {BAND.map((b, i) => (
                <Reveal key={b.k} delay={i * 0.05}>
                  <div className="py-7 sm:py-8 px-5 sm:px-6">
                    <span className="font-mono-ui text-[10.5px] uppercase tracking-[0.14em] text-brand-purple">{b.k}</span>
                    <p className="mt-2.5 text-[14px] leading-[1.55] text-brand-deep font-medium">{b.v}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* WHY IT MATTERS — split + compare ledger */}
        <section aria-labelledby="why-h2" className="py-20 sm:py-28">
          <div className="container">
            <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
              <Reveal>
                <Eyebrow>Why it matters</Eyebrow>
                <h2
                  id="why-h2"
                  className="font-display text-brand-deep mt-4 leading-[1.1] tracking-tight"
                  style={{ fontSize: "clamp(28px, 4.5vw, 46px)", letterSpacing: "-0.03em" }}
                >
                  Why Branding Matters More Than Ever
                </h2>
                <p className="mt-5 text-[16.5px] leading-[1.7] text-ink-muted">
                  Patients often compare multiple providers before making a decision. When services, pricing, and locations appear similar, branding becomes the deciding factor. A strong healthcare brand increases patient trust, improves conversion rates, differentiates from competitors, and strengthens marketing performance across all channels.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="border-t border-brand-purple/15">
                  <div className="grid grid-cols-2 gap-6 py-4 border-b border-brand-purple/15">
                    <span className="font-mono-ui text-[11px] uppercase tracking-[0.14em] text-ink-muted">Without strong branding</span>
                    <span className="font-mono-ui text-[11px] uppercase tracking-[0.14em] text-brand-purple">With Vigorant branding</span>
                  </div>
                  {COMPARE.map((row, i) => (
                    <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 border-b border-brand-purple/10">
                      <p className="text-[14.5px] leading-[1.65] text-ink-muted">{row.a}</p>
                      <p className="text-[14.5px] leading-[1.65] text-brand-deep font-medium flex gap-2">
                        <Check className="w-4 h-4 mt-1 shrink-0 text-brand-purple" />
                        <span>{row.b}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* TABS — Branding system */}
        <section aria-labelledby="system-h2" className="bg-surface-secondary py-20 sm:py-28">
          <div className="container">
            <Reveal>
              <div className="max-w-3xl">
                <Eyebrow>Branding system</Eyebrow>
                <h2
                  id="system-h2"
                  className="font-display text-brand-deep mt-4 leading-[1.1] tracking-tight"
                  style={{ fontSize: "clamp(28px, 4.5vw, 46px)", letterSpacing: "-0.03em" }}
                >
                  Branding Is More Than a Logo
                </h2>
                <p className="mt-5 text-[16.5px] leading-[1.7] text-ink-muted">
                  Many practices treat branding as a visual exercise. Vigorant treats it as a strategic growth foundation. Every brand element should strengthen patient trust, support SEO and AI visibility, reinforce reputation, and improve conversion across every patient touchpoint.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid lg:grid-cols-[280px_1fr] gap-6 lg:gap-10 items-start">
              {/* Tab list */}
              <div className="lg:border-t border-brand-purple/20" role="tablist" aria-label="Branding system phases">
                {TABS.map((t, i) => {
                  const active = i === activeTab;
                  return (
                    <button
                      key={t.num}
                      role="tab"
                      aria-selected={active}
                      onClick={() => setActiveTab(i)}
                      className={`w-full flex items-center justify-between gap-4 py-5 text-left border-b border-brand-purple/15 transition-colors ${
                        active ? "text-brand-purple" : "text-brand-deep/55 hover:text-brand-deep"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className="font-mono-ui text-[11px] tracking-[0.14em]">{t.num}</span>
                        <span className="font-extrabold text-[14.5px] leading-snug" style={{ letterSpacing: "-0.01em" }}>
                          {t.label}
                        </span>
                      </span>
                      <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${active ? "translate-x-0" : "-translate-x-1 opacity-50"}`} />
                    </button>
                  );
                })}
              </div>

              {/* Panel */}
              <Reveal key={activeTab} delay={0}>
                <article className="rounded-3xl bg-background border border-brand-purple/15 p-7 sm:p-10 shadow-sm">
                  <span className="font-mono-ui text-[11px] uppercase tracking-[0.14em] text-brand-purple">
                    Phase {tab.num}
                  </span>
                  <h3 className="mt-3 font-extrabold text-brand-deep text-[22px] sm:text-[26px] leading-[1.25]" style={{ letterSpacing: "-0.02em" }}>
                    {tab.h3}
                  </h3>
                  <p className="mt-4 text-[15.5px] leading-[1.7] text-ink-muted">{tab.body}</p>

                  {tab.lanes && (
                    <div className="mt-7 space-y-4">
                      {tab.lanes.map((l) => (
                        <div key={l.label}>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-deep/70">{l.label}</span>
                            <span className="font-mono-ui text-[11px] text-brand-purple">{l.pct}%</span>
                          </div>
                          <div className="h-2 rounded-full overflow-hidden" style={{ background: "hsl(250 100% 96%)" }}>
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${l.pct}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.4, ease }}
                              className="h-full"
                              style={{ background: "linear-gradient(90deg, hsl(247 93% 64%), hsl(252 100% 75%))" }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {tab.bullets && (
                    <ul className="mt-6 space-y-3 list-none p-0">
                      {tab.bullets.map((b, i) => (
                        <li key={i} className="flex gap-3 text-[14.5px] text-brand-deep leading-[1.6]">
                          <span aria-hidden className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "hsl(247 93% 64%)" }} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        {/* DARK OBJECTION STACK */}
        <section
          aria-labelledby="objection-h2"
          className="relative overflow-hidden py-20 sm:py-28"
          style={{ background: "var(--gradient-dark)" }}
          data-dark="true"
        >
          <div aria-hidden className="absolute inset-0 grid-overlay opacity-25" />
          <div aria-hidden className="absolute inset-0 flex items-center justify-center">
            <div className="w-[640px] h-[640px] rounded-full"
              style={{ background: "radial-gradient(circle, hsl(247 93% 64% / 0.22), transparent 65%)", filter: "blur(80px)" }} />
          </div>

          <div className="container relative">
            <Reveal>
              <div className="max-w-3xl">
                <Eyebrow light>Brand clarity</Eyebrow>
                <h2
                  id="objection-h2"
                  className="font-display text-white mt-4 leading-[1.1] tracking-tight"
                  style={{ fontSize: "clamp(28px, 4.5vw, 46px)", letterSpacing: "-0.03em" }}
                >
                  What Branding Needs to Solve
                </h2>
                <p className="mt-5 text-[16.5px] leading-[1.7] text-white/70">
                  Strategic healthcare branding should not just look better. It should remove patient hesitation and build the trust that turns a search result into a booked appointment.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 border-t border-white/10">
              {OBJECTIONS.map((o, i) => (
                <Reveal key={o.h} delay={i * 0.05}>
                  <div className="grid grid-cols-1 md:grid-cols-[80px_1fr_2fr] gap-4 md:gap-8 py-7 border-b border-white/10 items-start">
                    <span className="font-mono-ui text-[11px] uppercase tracking-[0.14em] text-brand-lavender/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-white font-extrabold text-[18px] sm:text-[20px] leading-snug" style={{ letterSpacing: "-0.01em" }}>
                      {o.h}
                    </h3>
                    <p className="text-[14.5px] leading-[1.7] text-white/65">{o.p}</p>
                  </div>
                </Reveal>
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
                  Honest answers about brand strategy, timelines, and how branding influences patient acquisition and AI visibility.
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
                          <span className="font-extrabold text-brand-deep text-[16px] sm:text-[17.5px] leading-snug" style={{ letterSpacing: "-0.01em" }}>
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

        {/* RELATED LINK STRIP */}
        <section aria-label="Related services" className="border-t border-brand-purple/10 bg-surface-secondary py-14">
          <div className="container">
            <span className="font-mono-ui text-[11px] uppercase tracking-[0.14em] text-brand-purple">Continue exploring</span>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-purple/10 border border-brand-purple/10 rounded-2xl overflow-hidden">
              {[
                { to: "/services/marketing-strategy", label: "Marketing Strategy", sub: "Frameworks that align channels to growth goals." },
                { to: "/services/website-design", label: "Website Design & CRO", sub: "Convert brand trust into booked appointments." },
                { to: "/services/seo", label: "SEO & AI Optimization", sub: "Earn visibility across traditional and AI search." },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="group bg-background p-6 sm:p-7 flex flex-col gap-2 hover:bg-surface-secondary transition-colors"
                >
                  <span className="font-extrabold text-brand-deep text-[16px] flex items-center gap-2" style={{ letterSpacing: "-0.01em" }}>
                    {l.label}
                    <ArrowRight className="w-4 h-4 text-brand-purple transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="text-[13.5px] text-ink-muted leading-[1.55]">{l.sub}</span>
                </Link>
              ))}
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
            <div className="w-[640px] h-[640px] rounded-full"
              style={{ background: "radial-gradient(circle, hsl(247 93% 64% / 0.25), transparent 65%)", filter: "blur(80px)" }} />
          </div>
          <div className="container relative max-w-3xl text-center">
            <Reveal>
              <Eyebrow light>Ready to reposition?</Eyebrow>
              <h2
                id="cta-h2"
                className="font-display text-white mt-4 leading-[1.1] tracking-tight"
                style={{ fontSize: "clamp(30px, 5vw, 52px)", letterSpacing: "-0.03em" }}
              >
                Build a brand patients remember before they book.
              </h2>
              <p className="mt-5 text-[16.5px] leading-[1.7] text-white/75">
                Start with a brand assessment to identify where your practice is losing trust, clarity, or differentiation across the patient journey.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  to="/free-audit"
                  className="inline-flex items-center justify-center gap-2 font-bold text-[14px] sm:text-[15px] text-white px-6 py-3 rounded-full transition-all hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(252 100% 75%))", boxShadow: "0 12px 32px hsl(247 93% 64% / 0.4)" }}
                >
                  Book a Brand Strategy Consultation <ArrowRight className="w-4 h-4" />
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
              href="https://www.nih.gov"
              rel="noopener noreferrer"
              target="_blank"
              className="text-brand-purple underline underline-offset-4"
            >
              National Institutes of Health — Health Communication Resources
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
