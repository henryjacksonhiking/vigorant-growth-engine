import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, Plus, Check, X } from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import SharedFAQList from "@/components/site/SharedFAQ";

const ease = [0.16, 1, 0.3, 1] as const;
const CANONICAL = "https://vigorant.com/services/social-media-marketing";

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
  "Content strategy",
  "Brand consistency",
  "Patient engagement",
  "Reputation support",
];

const BAND = [
  { k: "STRATEGY", v: "Specialty-fit content plans" },
  { k: "CADENCE", v: "Monthly content calendars" },
  { k: "REACH", v: "Trust + engagement signals" },
  { k: "REPORTING", v: "Transparent performance" },
];

const COMPARE = [
  {
    label: "Approach",
    generic: "Generic templates posted across all clients",
    vigorant: "Specialty-fit strategy mapped to patient decision moments",
  },
  {
    label: "Content",
    generic: "Stock images and recycled captions",
    vigorant: "Educational, reputation-support, and brand-awareness content built for healthcare",
  },
  {
    label: "Engagement",
    generic: "Post and forget",
    vigorant: "Active monitoring with reputation-aware response support",
  },
  {
    label: "Reporting",
    generic: "Vanity follower counts",
    vigorant: "Trust, recall, and acquisition-support metrics tied to growth",
  },
  {
    label: "AI visibility",
    generic: "Ignored",
    vigorant: "Brand and entity consistency strengthened for AI discovery",
  },
];

const TABS = [
  {
    id: "t2a",
    label: "Strategy & Planning",
    h: "Social Media Audit & Content Strategy",
    body: "We audit the current social footprint across every relevant platform, map it to your specialty and patient profile, and build a content strategy that ties social signals to broader patient acquisition — not a stand-alone posting calendar.",
    bullets: [
      "Platform-by-platform audit with specialty benchmarking",
      "Audience definition tied to actual service-line economics",
      "Content pillars covering education, trust, and brand awareness",
      "Cadence and channel mix calibrated to capacity and goals",
    ],
    metrics: [
      { l: "Audit scope", v: 92 },
      { l: "Strategy depth", v: 88 },
      { l: "Specialty fit", v: 95 },
    ],
  },
  {
    id: "t2b",
    label: "Content & Production",
    h: "Monthly Calendar & Graphic Design Support",
    body: "A live monthly content calendar with educational posts, reputation-support content, and brand-awareness campaigns — produced with graphic design support tuned to healthcare standards and your visual identity.",
    bullets: [
      "Monthly content calendar planned across all active channels",
      "Educational content built for patient decision moments",
      "Reputation-support posts that reinforce review and trust signals",
      "Brand-awareness campaigns aligned with the practice identity",
    ],
    metrics: [
      { l: "Content quality", v: 94 },
      { l: "Brand consistency", v: 96 },
      { l: "Production cadence", v: 90 },
    ],
  },
  {
    id: "t2c",
    label: "Engagement & Reporting",
    h: "Community Engagement & Performance Reporting",
    body: "Active monitoring of comments, DMs, and brand mentions — paired with transparent reporting that ties social performance to trust, recall, and downstream patient acquisition support.",
    bullets: [
      "Community engagement monitoring and reputation management support",
      "Mention, comment, and DM workflow with response guidance",
      "Monthly performance reports with trust and acquisition-support metrics",
      "Quarterly reviews mapping social signals to growth KPIs",
    ],
    metrics: [
      { l: "Engagement lift", v: 87 },
      { l: "Response speed", v: 91 },
      { l: "Reporting clarity", v: 93 },
    ],
  },
];

const OBJECTIONS = [
  {
    h: "Inconsistent posting",
    p: "Gaps in cadence quietly erode credibility. A managed calendar removes the start-stop pattern patients notice before you do.",
  },
  {
    h: "Off-brand content",
    p: "Templated, generic posts dilute the brand. Every asset should reinforce the same voice, identity, and clinical standard.",
  },
  {
    h: "Low engagement",
    p: "Comments and DMs left unanswered signal a practice that isn't paying attention. Active monitoring turns engagement into trust.",
  },
  {
    h: "No measurable outcome",
    p: "Follower counts don't grow a practice. Reporting should tie back to trust, recall, and acquisition support — not vanity metrics.",
  },
  {
    h: "AI search invisibility",
    p: "AI-powered platforms evaluate brand consistency, content authority, and entity recognition. A well-managed social presence strengthens AI visibility signals.",
  },
];

const RELATED = [
  { to: "/services/reputation", label: "Reputation", sub: "Pair social engagement with active review and reputation management." },
  { to: "/services/branding-rebranding", label: "Branding", sub: "Anchor every post in a consistent brand voice and identity." },
  { to: "/services/marketing-strategy", label: "Marketing Strategy", sub: "Wire social signals into a measurable patient growth plan." },
  { to: "/services/seo", label: "SEO & AI Optimization", sub: "Reinforce entity recognition across search and AI discovery." },
];

const FAQS = [
  {
    q: "Is social media important for healthcare practices?",
    a: "Yes. Patients frequently evaluate providers through social media before contacting a practice. An active, consistent social presence builds credibility and influences patient decision-making before the first appointment.",
  },
  {
    q: "Which social media platform is best for healthcare practices?",
    a: "Platform selection depends on your specialty and target audience. Most healthcare practices benefit from a presence on Facebook, Instagram, and Google Business Profile. LinkedIn supports referral relationships, while YouTube and TikTok are effective for educational content where appropriate.",
  },
  {
    q: "Can social media generate new patients?",
    a: "While social media is primarily a trust-building and brand-awareness channel, it directly supports patient acquisition when integrated with broader marketing strategies including SEO, paid advertising, and reputation management.",
  },
  {
    q: "Does social media help SEO and AI visibility?",
    a: "Yes. Consistent content, engagement signals, and brand consistency across platforms contribute to broader digital authority. AI-powered search platforms increasingly evaluate social presence as part of entity recognition, trust signals, and reputation assessment.",
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
        "Healthcare Social Media Marketing",
        "Dental Social Media Marketing",
        "Medical Social Media Marketing",
        "Chiropractic Social Media Marketing",
        "Healthcare Content Marketing",
        "Healthcare Reputation Management",
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
      name: "Healthcare Social Media Marketing Services | Grow Trust & Patient Engagement | Vigorant",
      description:
        "Healthcare social media marketing services for dental, medical, and chiropractic practices, including strategy, content planning, brand consistency, community engagement, and performance reporting.",
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
        { "@type": "ListItem", position: 3, name: "Healthcare Social Media Marketing Services", item: CANONICAL },
      ],
    },
    {
      "@type": "Service",
      "@id": `${CANONICAL}#service`,
      name: "Healthcare Social Media Marketing Services",
      provider: { "@id": "https://vigorant.com/#organization" },
      description:
        "Healthcare social media marketing services for dental, medical, and chiropractic practices. Includes social media audit, content strategy, monthly content calendar, graphic design support, educational content creation, reputation-support content, brand-awareness campaigns, engagement monitoring, and performance reporting.",
      areaServed: "United States",
      serviceType: "Healthcare Social Media Marketing",
      audience: {
        "@type": "Audience",
        audienceType:
          "Dental Practices, Medical Clinics, Chiropractic Offices, Specialty Healthcare Providers, Multi-location Practices",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Social Media Marketing Deliverables",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Audit & Content Strategy" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Monthly Content Calendar & Graphic Design Support" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Educational Content & Reputation-Support Campaigns" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Community Engagement Monitoring" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Performance Reporting" } },
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

export default function SocialMediaMarketing() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState(0);

  const tab = TABS[activeTab];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Healthcare Social Media Marketing Services | Grow Trust & Patient Engagement | Vigorant</title>
        <meta
          name="description"
          content="Healthcare social media marketing for dental, medical, and chiropractic practices. Build trust, increase patient engagement, strengthen reputation, and support patient acquisition with Vigorant."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Healthcare Social Media Marketing Services | Grow Trust & Patient Engagement | Vigorant" />
        <meta
          property="og:description"
          content="Healthcare social media marketing for dental, medical, and chiropractic practices. Build trust, increase patient engagement, strengthen reputation, and support patient acquisition with Vigorant."
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
        <meta itemProp="name" content="Healthcare Social Media Marketing Services" />
        <meta itemProp="provider" content="Vigorant" />
        <meta itemProp="areaServed" content="United States" />

        {/* HERO + STICKY AUDIT RAIL */}
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
                <li aria-current="page" className="text-brand-deep">Healthcare Social Media Marketing</li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-[1.25fr_1fr] gap-10 lg:gap-14 items-start">
              <Reveal>
                <Eyebrow>Social Media Marketing</Eyebrow>
                <h1
                  id="hero-h1"
                  className="font-display text-brand-deep mt-4 leading-[1.05] tracking-tight"
                  style={{ fontSize: "clamp(34px, 6vw, 64px)", letterSpacing: "-0.03em" }}
                >
                  Grow Trust &{" "}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))" }}
                  >
                    Patient Engagement
                  </span>
                </h1>
                <p className="mt-6 text-[16.5px] sm:text-[18px] leading-[1.65] text-ink-muted max-w-2xl">
                  Patients vet practices on social media long before they pick up the phone. We run healthcare-grade social programs that build trust, support reputation, and make every other acquisition channel work harder.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/free-audit"
                    className="btn-primary-grad inline-flex items-center justify-center gap-2 font-bold text-[14px] sm:text-[16px] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full min-h-[46px] sm:min-h-[48px]"
                  >
                    Request a Social Audit <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/free-audit"
                    className="btn-secondary-outline inline-flex items-center justify-center gap-2 font-semibold text-[14px] sm:text-[15px] px-5 sm:px-6 py-3 sm:py-3.5 rounded-full min-h-[46px] sm:min-h-[48px]"
                  >
                    Book a Strategy Call
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

              {/* STICKY AUDIT RAIL */}
              <Reveal delay={0.1}>
                <aside
                  className="relative rounded-2xl p-6 sm:p-7 lg:sticky lg:top-28"
                  style={{
                    background: "hsl(0 0% 100% / 0.92)",
                    border: "1px solid hsl(247 93% 64% / 0.18)",
                    boxShadow: "0 28px 90px hsl(247 93% 64% / 0.14)",
                  }}
                >
                  {/* Score panel */}
                  <div
                    className="rounded-2xl p-5"
                    style={{ background: "var(--gradient-dark)" }}
                  >
                    <span className="font-mono-ui text-[10.5px] tracking-[0.14em] uppercase text-white/55">
                      Social Health Score
                    </span>
                    <div className="mt-2 flex items-end gap-3">
                      <strong
                        className="font-display text-white leading-none"
                        style={{ fontSize: "3.5rem", letterSpacing: "-0.06em", fontWeight: 700 }}
                      >
                        62
                      </strong>
                      <span className="font-mono-ui text-[11px] text-brand-lavender pb-2">/ 100 industry avg</span>
                    </div>
                    <p className="mt-3 text-[12.5px] leading-[1.55] text-white/65">
                      Most practices score between 40 and 70. We benchmark yours across cadence, consistency, engagement, and brand integrity.
                    </p>
                  </div>

                  {/* Audit micro fields */}
                  <ul className="mt-5 list-none p-0 border-t border-brand-purple/20">
                    {[
                      { l: "CADENCE", v: "Inconsistent" },
                      { l: "BRAND VOICE", v: "Drifting" },
                      { l: "ENGAGEMENT", v: "Low response" },
                      { l: "REPORTING", v: "Vanity metrics" },
                    ].map((m) => (
                      <li
                        key={m.l}
                        className="grid grid-cols-[1fr_auto] gap-3 py-3 border-b border-brand-purple/15 items-center"
                      >
                        <span className="font-mono-ui text-[11px] tracking-[0.1em] text-brand-deep/45">{m.l}</span>
                        <strong className="text-[13px] font-bold text-brand-deep">{m.v}</strong>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/free-audit"
                    className="btn-primary-grad mt-5 inline-flex w-full items-center justify-center gap-2 font-bold text-[14px] px-5 py-3 rounded-full"
                    style={{
                      background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%), hsl(248 49% 15%))",
                      boxShadow: "0 12px 32px hsl(247 93% 64% / 0.35)",
                    }}
                  >
                    Get my full audit <ArrowRight className="w-4 h-4" />
                  </Link>
                </aside>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 4-CELL BAND (not cards — single bordered strip) */}
        <section aria-label="At a glance" className="pb-20 sm:pb-24">
          <div className="container">
            <Reveal>
              <div
                className="grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl"
                style={{
                  background: "hsl(247 93% 64% / 0.18)",
                  border: "1px solid hsl(247 93% 64% / 0.18)",
                }}
              >
                {BAND.map((b) => (
                  <div
                    key={b.k}
                    className="bg-background p-5 sm:p-6 transition-colors hover:bg-surface-secondary"
                  >
                    <span className="font-mono-ui text-[11px] tracking-[0.12em] uppercase text-brand-deep/45">
                      {b.k}
                    </span>
                    <strong
                      className="block font-display text-brand-deep text-[17px] sm:text-[19px] leading-[1.25] mt-2"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      {b.v}
                    </strong>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* COMPARE — row-based, not cards */}
        <section
          aria-labelledby="compare-h2"
          className="py-20 sm:py-28 bg-surface-secondary border-y border-brand-purple/10"
        >
          <div className="container">
            <Reveal>
              <div className="max-w-3xl">
                <Eyebrow>Generic vs. Vigorant</Eyebrow>
                <h2
                  id="compare-h2"
                  className="font-display text-brand-deep mt-4 leading-[1.1] tracking-tight"
                  style={{ fontSize: "clamp(28px, 4.5vw, 46px)", letterSpacing: "-0.03em" }}
                >
                  What healthcare-grade social actually looks like.
                </h2>
              </div>
            </Reveal>

            <div
              className="mt-12 overflow-hidden rounded-2xl"
              style={{
                background: "hsl(0 0% 100% / 0.9)",
                border: "1px solid hsl(247 93% 64% / 0.18)",
                boxShadow: "0 18px 50px hsl(247 93% 64% / 0.08)",
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_1fr] font-mono-ui text-[11px] tracking-[0.12em] uppercase text-brand-purple border-b border-brand-purple/15">
                <div className="px-5 sm:px-7 py-4 bg-surface-secondary">Dimension</div>
                <div className="px-5 sm:px-7 py-4 border-t md:border-t-0 md:border-l border-brand-purple/15">Generic agency</div>
                <div className="px-5 sm:px-7 py-4 border-t md:border-t-0 md:border-l border-brand-purple/15 text-brand-deep">Vigorant</div>
              </div>
              {COMPARE.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-1 md:grid-cols-[180px_1fr_1fr] border-b border-brand-purple/15 last:border-b-0"
                >
                  <div className="px-5 sm:px-7 py-5 bg-surface-secondary font-mono-ui text-[12px] tracking-[0.08em] uppercase text-brand-deep/65 flex items-center">
                    {row.label}
                  </div>
                  <div className="px-5 sm:px-7 py-5 border-t md:border-t-0 md:border-l border-brand-purple/15 flex items-start gap-3 text-[14.5px] leading-[1.65] text-ink-muted">
                    <X className="w-4 h-4 mt-1 shrink-0 text-brand-deep/40" />
                    <span>{row.generic}</span>
                  </div>
                  <div className="px-5 sm:px-7 py-5 border-t md:border-t-0 md:border-l border-brand-purple/15 flex items-start gap-3 text-[14.5px] leading-[1.65] text-brand-deep">
                    <Check className="w-4 h-4 mt-1 shrink-0 text-brand-purple" />
                    <span>{row.vigorant}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TABS — buttons column + content panel (no card grid) */}
        <section aria-labelledby="tabs-h2" className="py-20 sm:py-28">
          <div className="container">
            <Reveal>
              <div className="max-w-3xl">
                <Eyebrow>What we run for you</Eyebrow>
                <h2
                  id="tabs-h2"
                  className="font-display text-brand-deep mt-4 leading-[1.1] tracking-tight"
                  style={{ fontSize: "clamp(28px, 4.5vw, 46px)", letterSpacing: "-0.03em" }}
                >
                  Three workstreams, one social engine.
                </h2>
              </div>
            </Reveal>

            <div className="mt-12 grid lg:grid-cols-[260px_1fr] gap-px lg:gap-0 rounded-2xl overflow-hidden"
              style={{
                background: "hsl(247 93% 64% / 0.18)",
                border: "1px solid hsl(247 93% 64% / 0.18)",
              }}
            >
              {/* Tab buttons */}
              <div className="flex flex-col bg-background">
                {TABS.map((t, i) => {
                  const active = i === activeTab;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setActiveTab(i)}
                      aria-pressed={active}
                      className={`text-left px-5 sm:px-7 py-5 border-b border-brand-purple/15 last:border-b-0 transition-colors font-extrabold ${
                        active ? "text-brand-purple bg-surface-secondary" : "text-brand-deep/55 hover:text-brand-purple"
                      }`}
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      <span className="font-mono-ui text-[10.5px] tracking-[0.14em] uppercase block mb-1 opacity-80">
                        Tab {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[15px]">{t.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active panel */}
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease }}
                className="bg-background p-7 sm:p-10"
              >
                <Eyebrow>{tab.label}</Eyebrow>
                <h3
                  className="font-display text-brand-deep mt-4 leading-[1.15] tracking-tight"
                  style={{ fontSize: "clamp(22px, 3.2vw, 32px)", letterSpacing: "-0.03em" }}
                >
                  {tab.h}
                </h3>
                <p className="mt-4 text-[15.5px] leading-[1.7] text-ink-muted max-w-2xl">{tab.body}</p>

                <ul className="mt-6 list-none p-0 grid sm:grid-cols-2 gap-x-8 gap-y-2">
                  {tab.bullets.map((bl, j) => (
                    <li key={j} className="flex items-start gap-3 py-2 text-[14.5px] leading-[1.6] text-brand-deep">
                      <span
                        aria-hidden
                        className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "hsl(247 93% 64%)" }}
                      />
                      {j === 0 && tab.id === "t2c" ? (
                        <span>
                          Community engagement monitoring and{" "}
                          <Link to="/services/reputation" className="text-brand-purple font-semibold underline underline-offset-4">
                            reputation management
                          </Link>{" "}
                          support
                        </span>
                      ) : (
                        bl
                      )}
                    </li>
                  ))}
                </ul>

                {/* Metric lanes (rows, not cards) */}
                <div className="mt-8 border-t border-brand-purple/15 pt-6 flex flex-col gap-4">
                  {tab.metrics.map((m) => (
                    <div key={m.l} className="grid grid-cols-[140px_1fr_44px] items-center gap-4">
                      <span className="font-mono-ui text-[11px] tracking-[0.1em] uppercase text-brand-deep/55">
                        {m.l}
                      </span>
                      <div
                        className="h-2 rounded-full overflow-hidden"
                        style={{ background: "hsl(250 100% 98%)" }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${m.v}%` }}
                          transition={{ duration: 0.9, ease }}
                          className="h-full rounded-full"
                          style={{
                            background: "linear-gradient(90deg, hsl(248 100% 75%), hsl(247 93% 64%))",
                          }}
                        />
                      </div>
                      <strong className="font-display text-brand-deep text-[16px] text-right">{m.v}</strong>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* OBJECTION STACK — dark */}
        <section
          aria-labelledby="obj-h2"
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
            <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16 items-start">
              <Reveal>
                <Eyebrow light>What social media needs to solve</Eyebrow>
                <h2
                  id="obj-h2"
                  className="font-display text-white mt-4 leading-[1.1] tracking-tight"
                  style={{ fontSize: "clamp(26px, 4.2vw, 42px)", letterSpacing: "-0.03em" }}
                >
                  The five quiet problems killing most practice social accounts.
                </h2>
                <p className="mt-5 text-[16px] leading-[1.7] text-white/75">
                  These are the patterns we see most often when we audit a practice's existing social presence — and the ones a healthcare-grade program is specifically built to fix.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="border-t border-white/14">
                  {OBJECTIONS.map((o, i) => (
                    <div key={o.h} className="grid grid-cols-[44px_1fr] gap-4 py-6 border-b border-white/14 items-start">
                      <span className="font-mono-ui text-[11px] uppercase tracking-[0.14em] text-brand-lavender/80 pt-1">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-extrabold text-white text-[17px] sm:text-[19px]" style={{ letterSpacing: "-0.01em" }}>
                          {o.h}
                        </h3>
                        <p className="mt-2 text-[14.5px] leading-[1.7] text-white/70">{o.p}</p>
                      </div>
                    </div>
                  ))}
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
                  What practices ask before committing to a healthcare social media program.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <SharedFAQList faqs={FAQS} />

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
              <Eyebrow light>Ready to run social like a growth channel?</Eyebrow>
              <h2
                id="cta-h2"
                className="font-display text-white mt-4 leading-[1.1] tracking-tight"
                style={{ fontSize: "clamp(30px, 5vw, 52px)", letterSpacing: "-0.03em" }}
              >
                Build a social presence patients actually trust.
              </h2>
              <p className="mt-5 text-[16.5px] leading-[1.7] text-white/75">
                Start with a social audit. We'll benchmark cadence, brand integrity, engagement, and AI visibility — then map the fastest path to a healthcare-grade program.
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
                  Request a Social Audit <ArrowRight className="w-4 h-4" />
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
