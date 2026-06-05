import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";

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

const WORKFLOW = [
  {
    n: "01",
    h: "Strategy before content",
    p: "Goals, audience segments, content pillars, platform priorities, and messaging themes are defined before any content is published.",
  },
  {
    n: "02",
    h: "Content that builds trust",
    p: "Educational, promotional, and reputation-support content — delivered consistently across Facebook, Instagram, Google Business Profile, LinkedIn, YouTube, and TikTok.",
  },
  {
    n: "03",
    h: "Measurement and accountability",
    p: "Engagement, reach, audience growth, and business impact tracked and reported to make the channel measurable and growth-oriented.",
  },
];

const STEPS = [
  {
    id: "step-1",
    nav: "Strategy",
    kicker: "Phase 01",
    h: "Social Media Strategy Development",
    lead: "We define goals, audience segments, content pillars, messaging themes, platform priorities, and growth objectives before a single post is created. Strategy first ensures every piece of content contributes to patient acquisition.",
    out: "A documented social media strategy defining audience, platform mix, content pillars, messaging tone, and growth KPIs.",
  },
  {
    id: "step-2",
    nav: "Content",
    kicker: "Phase 02",
    h: "Content Planning & Creation",
    lead: "We develop a monthly content calendar combining educational content, promotional posts, trust-building patient stories, and engagement-focused formats — all maintaining consistent brand voice, visual identity, and positioning across every platform.",
    out: "Monthly content calendar, graphic design assets, educational content, and reputation-support posts ready for publishing.",
  },
  {
    id: "step-3",
    nav: "Engagement",
    kicker: "Phase 03",
    h: "Community Engagement & Brand Consistency",
    lead: "We monitor patient interaction, reviews, comments, and shares while ensuring messaging, tone, visual identity, and positioning remain consistent across Facebook, Instagram, LinkedIn, Google Business Profile, YouTube, and TikTok where appropriate.",
    out: "Consistent brand presence across all active platforms with engagement monitoring and community response support.",
  },
  {
    id: "step-4",
    nav: "Reporting",
    kicker: "Phase 04",
    h: "Performance Monitoring & Reporting",
    lead: "We track engagement rates, reach, audience growth, reputation signals, and business impact — connecting social media activity to practice-level outcomes and identifying optimization opportunities month over month.",
    out: "Performance reports linking social engagement to visibility, reputation, and patient acquisition support metrics.",
  },
];

const HANDOFF = [
  {
    a: "Strategy + content",
    b: "Social media audit, content strategy, monthly content calendar, and graphic design support.",
  },
  {
    a: "Trust + engagement",
    b: "Educational content creation, reputation-support content, brand-awareness campaigns, and community engagement monitoring.",
  },
  {
    a: "Measurement",
    b: "Reach, engagement, and audience growth tracking with performance reporting tied to practice goals.",
  },
];

const RIVER = [
  {
    h: "Why Social Media Matters",
    p: "Patients increasingly research providers online before deciding who to contact. A practice's social presence influences trust, perceived expertise, brand recognition, and conversion rates — often before the first appointment.",
  },
  {
    h: "Why Practices Underperform",
    p: "Most practices post inconsistently, without a defined audience, content strategy, or conversion purpose. Random posting creates noise without building the trust signals that move patients to action.",
  },
  {
    h: "Social Media in the AI Search Era",
    p: "AI-powered discovery platforms evaluate brand consistency, content authority, engagement signals, reputation indicators, and entity recognition. A well-managed social presence contributes directly to broader digital authority and AI visibility.",
  },
];

const FAQS = [
  {
    q: "Is social media important for healthcare practices?",
    a: "Yes. Patients frequently evaluate providers through social media before contacting a practice. An active, consistent social presence builds credibility and influences patient decision-making before the first appointment.",
  },
  {
    q: "Which social media platform is best for healthcare practices?",
    a: "Platform selection depends on your specialty and target audience. Most healthcare practices benefit from Facebook, Instagram, and Google Business Profile content. LinkedIn supports referral relationships, while YouTube and TikTok are effective for educational content where appropriate.",
  },
  {
    q: "Can social media generate new patients?",
    a: "While social media is primarily a trust-building channel, it directly supports patient acquisition when integrated with SEO, paid advertising, and reputation management as part of a broader growth strategy.",
  },
  {
    q: "Does social media help SEO and AI visibility?",
    a: "Yes. Consistent content, engagement, and brand signals contribute to broader digital authority. AI-powered platforms increasingly evaluate social presence as part of entity recognition, trust signals, and reputation assessment.",
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
      "@type": "BreadcrumbList",
      "@id": `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://vigorant.com/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://vigorant.com/services" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Healthcare Social Media Marketing Services",
          item: CANONICAL,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${CANONICAL}#service`,
      name: "Healthcare Social Media Marketing Services",
      provider: { "@id": "https://vigorant.com/#organization" },
      description:
        "Strategic social media marketing for dental, medical, and chiropractic practices. Includes social media audit, content strategy, monthly content calendar, graphic design support, educational content creation, reputation-support content, brand-awareness campaigns, engagement monitoring, and performance reporting.",
      areaServed: "United States",
      serviceType: "Healthcare Social Media Marketing",
      audience: {
        "@type": "Audience",
        audienceType:
          "Dental Practices, Medical Clinics, Chiropractic Offices, Specialty Healthcare Providers, Multi-location Practices",
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
  const [activeStep, setActiveStep] = useState(0);

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
        <meta property="og:title" content="Healthcare Social Media Marketing Services | Vigorant" />
        <meta
          property="og:description"
          content="Build trust, increase patient engagement, strengthen reputation, and support patient acquisition with strategic healthcare social media marketing from Vigorant."
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

        {/* HERO — dark, with workflow mini */}
        <section
          aria-labelledby="hero-h1"
          className="relative overflow-hidden"
          style={{ background: "var(--gradient-dark)" }}
          data-dark="true"
        >
          <div aria-hidden className="absolute inset-0 grid-overlay opacity-30" />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -right-24 w-[560px] h-[560px] rounded-full orb-a"
            style={{
              background: "radial-gradient(circle, hsl(247 93% 64% / 0.35), transparent 65%)",
              filter: "blur(70px)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-24 w-[460px] h-[460px] rounded-full orb-b"
            style={{
              background: "radial-gradient(circle, hsl(248 100% 75% / 0.30), transparent 65%)",
              filter: "blur(70px)",
            }}
          />

          <div className="container relative pt-10 sm:pt-14 pb-20 sm:pb-28">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center flex-wrap gap-1.5 font-mono-ui text-[11px] text-brand-lavender/80 list-none p-0 m-0">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-brand-lavender/50">/</li>
                <li>
                  <Link to="/services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li className="text-brand-lavender/50">/</li>
                <li aria-current="page" className="text-white">
                  Social Media Marketing for Healthcare Practices
                </li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-14 items-start">
              <Reveal>
                <Eyebrow light>Social Media Marketing</Eyebrow>
                <h1
                  id="hero-h1"
                  className="font-display text-white mt-4 leading-[1.05] tracking-tight"
                  style={{ fontSize: "clamp(34px, 6vw, 64px)", letterSpacing: "-0.03em" }}
                >
                  Social Media Marketing for{" "}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, hsl(248 100% 75%), hsl(247 100% 88%))",
                    }}
                  >
                    Healthcare Practices
                  </span>
                </h1>
                <p className="mt-6 text-[16.5px] sm:text-[18px] leading-[1.65] text-white/75 max-w-2xl">
                  Build trust. Stay visible. Turn attention into patients. Social media is no longer just a branding channel. For modern healthcare practices, it plays a critical role in building trust, strengthening reputation, increasing visibility, and influencing patient decisions long before the first appointment. Vigorant helps dental, medical, and chiropractic practices create strategic social media programs designed to support patient acquisition and long-term growth.
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
                    Book a Social Media Strategy Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/free-audit"
                    className="inline-flex items-center justify-center gap-2 font-semibold text-[14px] sm:text-[15px] text-white px-5 py-3 rounded-full border-[1.5px] border-white/25 hover:border-white/60 hover:bg-white/5 transition-all"
                  >
                    Request a Social Media Audit
                  </Link>
                </div>
              </Reveal>

              {/* WORKFLOW MINI — row-based, not card-grid */}
              <Reveal delay={0.1}>
                <aside
                  className="relative rounded-3xl p-6 sm:p-7 overflow-hidden"
                  style={{
                    background: "hsl(0 0% 100% / 0.04)",
                    border: "1px solid hsl(247 100% 88% / 0.18)",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  <span className="font-mono-ui text-[10.5px] uppercase tracking-[0.14em] text-brand-lavender/85">
                    How it works
                  </span>
                  <div className="mt-5 divide-y divide-white/10">
                    {WORKFLOW.map((w) => (
                      <div key={w.n} className="grid grid-cols-[44px_1fr] gap-4 py-5 first:pt-0 last:pb-0">
                        <span className="font-mono-ui text-[12px] uppercase tracking-[0.14em] text-brand-bright pt-0.5">
                          {w.n}
                        </span>
                        <div>
                          <h4
                            className="text-white font-extrabold text-[15.5px] leading-snug"
                            style={{ letterSpacing: "-0.01em" }}
                          >
                            {w.h}
                          </h4>
                          <p className="mt-1.5 text-[13.5px] leading-[1.6] text-white/70">{w.p}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </aside>
              </Reveal>
            </div>
          </div>
        </section>

        {/* TIMELINE — sticky process nav + scroll steps */}
        <section
          aria-labelledby="process-h2"
          className="py-20 sm:py-28"
        >
          <div className="container">
            <Reveal>
              <div className="max-w-3xl">
                <Eyebrow>Process map</Eyebrow>
                <h2
                  id="process-h2"
                  className="font-display text-brand-deep mt-4 leading-[1.1] tracking-tight"
                  style={{ fontSize: "clamp(28px, 4.5vw, 46px)", letterSpacing: "-0.03em" }}
                >
                  Our Social Media Marketing Framework
                </h2>
                <p className="mt-5 text-[16.5px] leading-[1.7] text-ink-muted">
                  A four-phase system that turns a posting schedule into a measurable trust-building growth channel.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid lg:grid-cols-[220px_1fr] gap-10 lg:gap-16 items-start">
              {/* Process nav */}
              <nav
                aria-label="Process navigation"
                className="hidden lg:block lg:sticky lg:top-28"
              >
                <ol className="list-none p-0 m-0 border-l border-brand-purple/15">
                  {STEPS.map((s, i) => {
                    const active = i === activeStep;
                    return (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          onClick={() => setActiveStep(i)}
                          className={`block pl-5 -ml-px py-3 border-l-2 transition-all ${
                            active
                              ? "border-brand-purple text-brand-purple"
                              : "border-transparent text-brand-deep/45 hover:text-brand-deep"
                          }`}
                        >
                          <span className="font-mono-ui text-[10.5px] uppercase tracking-[0.14em] block">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="font-black text-[14.5px]" style={{ letterSpacing: "-0.01em" }}>
                            {s.nav}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ol>
              </nav>

              {/* Steps */}
              <div className="space-y-16 sm:space-y-24">
                {STEPS.map((s, i) => (
                  <motion.article
                    key={s.id}
                    id={s.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30% 0px -40% 0px" }}
                    onViewportEnter={() => setActiveStep(i)}
                    transition={{ duration: 0.7, ease }}
                    className="relative scroll-mt-32"
                  >
                    <span className="font-mono-ui text-[11px] uppercase tracking-[0.14em] text-brand-purple">
                      {s.kicker}
                    </span>
                    <h3
                      className="font-display text-brand-deep mt-3 leading-[1.1] tracking-tight"
                      style={{ fontSize: "clamp(24px, 3.6vw, 36px)", letterSpacing: "-0.03em" }}
                    >
                      {s.h}
                    </h3>
                    <p className="mt-4 text-[16px] leading-[1.7] text-ink-muted max-w-2xl">{s.lead}</p>

                    {/* Output panel — ledger row, not a card */}
                    <div className="mt-7 grid grid-cols-[100px_1fr] gap-5 sm:gap-7 border-t border-brand-purple/15 pt-5">
                      <strong className="font-mono-ui text-[11px] uppercase tracking-[0.14em] text-brand-purple not-italic">
                        Output
                      </strong>
                      <p className="text-[14.5px] leading-[1.65] text-brand-deep font-medium">{s.out}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* HANDOFF TABLE — what is included */}
        <section
          aria-labelledby="handoff-h2"
          className="bg-surface-secondary py-20 sm:py-28 border-y border-brand-purple/10"
        >
          <div className="container">
            <Reveal>
              <div className="max-w-3xl">
                <Eyebrow>What's included</Eyebrow>
                <h2
                  id="handoff-h2"
                  className="font-display text-brand-deep mt-4 leading-[1.1] tracking-tight"
                  style={{ fontSize: "clamp(28px, 4.5vw, 46px)", letterSpacing: "-0.03em" }}
                >
                  What Is Included in Our Social Media Marketing Services?
                </h2>
                <p className="mt-5 text-[16.5px] leading-[1.7] text-ink-muted">
                  Social media work should create a complete trust and growth system, not just a posting schedule.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-12 border-t border-brand-purple/20">
                {HANDOFF.map((row, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-4 md:gap-10 py-7 border-b border-brand-purple/15 items-start"
                  >
                    <span className="font-mono-ui text-[11px] uppercase tracking-[0.14em] text-brand-purple">
                      {row.a}
                    </span>
                    <p className="text-[15.5px] leading-[1.7] text-brand-deep font-medium">{row.b}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* DARK RIVER — 3 column dark section as ledger rows */}
        <section
          aria-labelledby="river-h2"
          className="relative overflow-hidden py-20 sm:py-28"
          style={{ background: "var(--gradient-dark)" }}
          data-dark="true"
        >
          <div aria-hidden className="absolute inset-0 grid-overlay opacity-25" />
          <div aria-hidden className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-[640px] h-[640px] rounded-full orb-c"
              style={{
                background: "radial-gradient(circle, hsl(247 93% 64% / 0.22), transparent 65%)",
                filter: "blur(80px)",
              }}
            />
          </div>

          <div className="container relative">
            <Reveal>
              <div className="max-w-3xl">
                <Eyebrow light>Growth context</Eyebrow>
                <h2
                  id="river-h2"
                  className="font-display text-white mt-4 leading-[1.1] tracking-tight"
                  style={{ fontSize: "clamp(28px, 4.5vw, 46px)", letterSpacing: "-0.03em" }}
                >
                  Social Media and Patient Acquisition
                </h2>
                <p className="mt-5 text-[16.5px] leading-[1.7] text-white/70">
                  Social media performs best when it is treated as a strategic growth channel — not a posting obligation. Every platform, post, and interaction should contribute to the trust signals that move patients from awareness to appointment.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 border-t border-white/10">
              {RIVER.map((r, i) => (
                <Reveal key={r.h} delay={i * 0.05}>
                  <div className="grid grid-cols-1 md:grid-cols-[80px_1fr_2fr] gap-4 md:gap-8 py-8 border-b border-white/10 items-start">
                    <span className="font-mono-ui text-[11px] uppercase tracking-[0.14em] text-brand-lavender/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className="text-white font-extrabold text-[18px] sm:text-[20px] leading-snug"
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      {r.h}
                    </h3>
                    <p className="text-[14.5px] leading-[1.7] text-white/70">{r.p}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SPLIT */}
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
                  Key questions healthcare practices ask before starting a social media marketing program.
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

        {/* RELATED LINK STRIP */}
        <section aria-label="Related services" className="border-t border-brand-purple/10 bg-surface-secondary py-14">
          <div className="container">
            <span className="font-mono-ui text-[11px] uppercase tracking-[0.14em] text-brand-purple">
              Continue exploring
            </span>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-purple/10 border border-brand-purple/10 rounded-2xl overflow-hidden">
              {[
                { to: "/services/reputation", label: "Reputation & Reviews", sub: "Turn patient feedback into a measurable trust engine." },
                { to: "/services/branding-rebranding", label: "Branding & Rebranding", sub: "Unified positioning that strengthens every channel." },
                { to: "/services/marketing-strategy", label: "Marketing Strategy", sub: "Align social with SEO, ads, and conversion goals." },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="group bg-background p-6 sm:p-7 flex flex-col gap-2 hover:bg-surface-secondary transition-colors"
                >
                  <span
                    className="font-extrabold text-brand-deep text-[16px] flex items-center gap-2"
                    style={{ letterSpacing: "-0.01em" }}
                  >
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
              <Eyebrow light>Ready to improve social visibility?</Eyebrow>
              <h2
                id="cta-h2"
                className="font-display text-white mt-4 leading-[1.1] tracking-tight"
                style={{ fontSize: "clamp(30px, 5vw, 52px)", letterSpacing: "-0.03em" }}
              >
                Turn social media into a trust-building growth channel.
              </h2>
              <p className="mt-5 text-[16.5px] leading-[1.7] text-white/75">
                Start with a social media audit to identify content gaps, consistency issues, and missed opportunities to strengthen patient confidence and support long-term acquisition.
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
                  Book a Social Media Strategy Consultation <ArrowRight className="w-4 h-4" />
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
              href="https://www.cdc.gov/healthcommunication/"
              rel="noopener noreferrer"
              target="_blank"
              className="text-brand-purple underline underline-offset-4"
            >
              CDC Health Communication Resources
            </a>{" "}
            — referenced in healthcare content strategy and patient communication planning.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
