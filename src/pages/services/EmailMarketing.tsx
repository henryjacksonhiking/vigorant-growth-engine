import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight, Mail, Plus } from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";

const ease = [0.16, 1, 0.3, 1] as const;
const CANONICAL = "https://vigorant.com/services/email-marketing";

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
  "Patient retention",
  "Recall growth",
  "Reactivation",
  "AI-search support",
];

const HERO_METRICS = [
  { n: "3.1×", p: "Higher engagement from segmentation" },
  { n: "+42%", p: "More recall response opportunities" },
  { n: "1st", p: "Owned channel before paid media" },
];

const EVIDENCE = [
  {
    h: "Retention before acquisition",
    p: "Your patient database can drive visits before you buy more leads.",
  },
  {
    h: "Education that converts",
    p: "Helpful emails reduce hesitation around care decisions.",
  },
  {
    h: "Automation multiplier",
    p: "One system supports recall, reactivation, follow-up, referrals, and reviews.",
  },
];

const ESSAY = [
  {
    id: "essay-why-email",
    eyebrow: "01 — Why email matters in healthcare",
    navLabel: "Why email matters in healthcare",
    h: "Email is the most underused growth channel inside most practices",
    body: [
      "Most practices chase new patients while existing relationships sit untouched. Email keeps you visible between visits, reminds patients about recommended care, educates them before decisions, and brings inactive patients back. Strategically, it becomes a retention and revenue system.",
    ],
    link: null,
  },
  {
    id: "essay-campaigns",
    eyebrow: "02 — What kinds of campaigns perform",
    navLabel: "What kinds of campaigns perform",
    h: "Six campaign types consistently produce the strongest results",
    body: [
      "Recall campaigns bring overdue patients back. Reactivation emails recover quiet patients. Treatment follow-ups improve acceptance. Educational newsletters build authority. Review and referral campaigns increase social proof. Seasonal awareness emails create timely reasons to book.",
    ],
    link: null,
  },
  {
    id: "essay-ai",
    eyebrow: "03 — Email in the AI search era",
    navLabel: "Email in the AI search era",
    h: "Email marketing in the AI search era",
    body: [
      "AI-powered search favors brands with expertise, consistency, and engagement. Email distributes educational content, increases return visits, strengthens trust, and reinforces authority signals that support search visibility and AI-generated recommendations.",
    ],
    link: {
      text: "Learn how SEO & AI Optimization strengthens patient visibility beyond email.",
      href: "/services/seo",
    },
  },
];

const PRINCIPLES = [
  {
    h: "Segment before you send",
    p: "Recall, reactivation, nurture, treatment follow-up, and referral campaigns need different timing, audience segmentation, and message intent.",
  },
  {
    h: "Educate before you promote",
    p: "Plain-language education, care reminders, and useful guidance outperform discount-heavy healthcare promotions.",
  },
  {
    h: "Automate the lifecycle",
    p: "Triggered sequences and campaign calendars turn email into a consistent patient engagement system.",
  },
  {
    h: "Measure appointments, not opens",
    p: "Measure scheduled appointments, reactivated patients, treatment starts, referrals, reviews, and retention impact — not opens alone.",
  },
];

const SOURCES = [
  "CDC health literacy guidance.",
  "Plain-language patient education standards.",
  "Recall and follow-up communication best practices.",
];

const RELATED = [
  { h: "Marketing Strategy", k: "Plan", href: "/services/marketing-strategy" },
  { h: "SEO & AI Optimization", k: "Be found", href: "/services/seo" },
  { h: "Social Media Marketing", k: "Distribute", href: "/services/social-media-marketing" },
  { h: "Landing Pages", k: "Convert", href: "/services/landing-pages" },
];

const FAQS = [
  {
    q: "Does email marketing work for healthcare practices?",
    a: "Yes. Email helps practices increase recall, reactivate inactive patients, educate people about care options, and improve retention without relying only on new lead acquisition.",
  },
  {
    q: "What types of email campaigns perform best for practices?",
    a: "Recall reminders, reactivation campaigns, treatment follow-ups, newsletters, review prompts, referral requests, seasonal awareness campaigns, and post-visit care emails usually perform best.",
  },
  {
    q: "Can email marketing help patient retention?",
    a: "Yes. Relevant, well-timed communication keeps the practice visible between visits and encourages patients to return before they drift to competitors.",
  },
  {
    q: "Can healthcare email marketing support AI search visibility?",
    a: "Yes. Email distributes expert content, increases engagement with practice-owned resources, and reinforces brand authority signals.",
  },
];

export default function EmailMarketing() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeEssay, setActiveEssay] = useState<string>(ESSAY[0].id);

  useEffect(() => {
    const sections = ESSAY.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveEssay(e.target.id);
        });
      },
      { rootMargin: "-18% 0px -42% 0px", threshold: 0.01 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

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
          "Healthcare Email Marketing",
          "Dental Email Marketing",
          "Medical Email Marketing",
          "Chiropractic Email Marketing",
          "Patient Retention Marketing",
          "Patient Reactivation Campaigns",
          "Recall Campaigns",
          "Healthcare Marketing Automation",
          "Patient Newsletter Marketing",
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
        name: "Healthcare Email Marketing Services | Retain, Reactivate & Convert More Patients | Vigorant",
        description:
          "Healthcare email marketing services for dental, medical, and chiropractic practices, including patient retention campaigns, recall sequences, reactivation campaigns, newsletters, automation, segmentation, performance reporting, and conversion optimization.",
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
          {
            "@type": "ListItem",
            position: 3,
            name: "Healthcare Email Marketing Services",
            item: CANONICAL,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": CANONICAL + "#service",
        name: "Healthcare Email Marketing Services",
        provider: { "@id": "https://vigorant.com/#organization" },
        description:
          "Healthcare email marketing services for dental, medical, and chiropractic practices. Includes patient retention strategy, database segmentation, recall campaigns, inactive-patient reactivation, treatment follow-up sequences, educational newsletters, referral campaigns, automation planning, compliance-conscious messaging, and performance reporting.",
        areaServed: "United States",
        serviceType: "Healthcare Email Marketing",
        audience: {
          "@type": "Audience",
          audienceType:
            "Dental Practices, Medical Clinics, Chiropractic Offices, Specialty Healthcare Providers, Multi-location Practices",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Email Marketing Service Deliverables",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Email Strategy & Patient Lifecycle Planning" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Audience Segmentation & Campaign Calendar" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Recall, Reactivation & Follow-Up Campaigns" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Newsletter, Referral & Education Campaigns" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Performance Reporting & Conversion Optimization" } },
          ],
        },
      },
      {
        "@type": "CreativeWork",
        "@id": CANONICAL + "#campaign-framework",
        name: "Healthcare Email Marketing Campaign Framework — Vigorant",
        description:
          "A strategic campaign framework for dental, medical, and chiropractic practices covering patient retention, recall, reactivation, treatment follow-up, education, referrals, and measurable appointment growth.",
        publisher: { "@id": "https://vigorant.com/#organization" },
        about: { "@id": CANONICAL + "#service" },
        inLanguage: "en-US",
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Healthcare Email Marketing Services | Retain, Reactivate &amp; Convert More Patients | Vigorant</title>
        <meta
          name="description"
          content="Healthcare email marketing for dental, medical, and chiropractic practices. Improve retention, recall, reactivation, treatment acceptance, and patient engagement with Vigorant."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Healthcare Email Marketing Services | Retain, Reactivate & Convert More Patients | Vigorant" />
        <meta property="og:description" content="Strategic email marketing for dental, medical, and chiropractic practices. Retain patients, reactivate missed opportunities, and drive more appointments." />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:image" content="https://vigorant.com/og/email-marketing.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Healthcare Email Marketing Services | Vigorant" />
        <meta name="twitter:description" content="Patient retention, recall, reactivation, and healthcare email automation for dental, medical, and chiropractic practices." />
        <meta name="twitter:image" content="https://vigorant.com/og/email-marketing.jpg" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <a href="#main" className="sr-only focus:not-sr-only">Skip to main content</a>

      <Nav />

      <main id="main" itemScope itemType="https://schema.org/Service">
        <meta itemProp="name" content="Healthcare Email Marketing Services" />
        <meta itemProp="provider" content="Vigorant" />
        <meta itemProp="areaServed" content="United States" />

        {/* ── HERO — WHITE BACKGROUND ── */}
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
              background:
                "radial-gradient(circle, hsl(var(--brand-purple) / 0.16), transparent 65%)",
              animation: "emOrb 9s ease-in-out infinite",
            }}
          />

          <div className="container relative z-10">
            <Reveal>
              <nav aria-label="Breadcrumb" className="flex gap-2 items-center text-[13px] font-semibold text-ink-secondary mb-6">
                <Link to="/" className="text-brand-purple">Home</Link>
                <span aria-hidden>/</span>
                <Link to="/services" className="text-brand-purple">Services</Link>
                <span aria-hidden>/</span>
                <span className="text-ink-muted" aria-current="page">Email Marketing</span>
              </nav>
            </Reveal>

            <div className="grid gap-12 lg:gap-16 lg:grid-cols-[1.05fr_0.95fr] items-center">
              {/* LEFT: copy */}
              <div>
                <Reveal>
                  <Eyebrow>Email Marketing · Retention</Eyebrow>
                </Reveal>
                <Reveal delay={0.05}>
                  <h1
                    id="hero-heading"
                    className="font-display font-bold text-brand-deep mt-5 leading-[1.02] tracking-tight"
                    style={{ fontSize: "clamp(2.7rem, 5.4vw, 4.8rem)", letterSpacing: "-0.045em" }}
                  >
                    Retain, reactivate, and convert{" "}
                    <span className="gradient-text">with healthcare email marketing that drives appointments.</span>
                  </h1>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-5 text-[17px] leading-[1.8] text-ink-secondary max-w-[620px]">
                    Patient-lifecycle email marketing for dental, medical, and chiropractic practices — built to improve recall, reactivate inactive patients, support treatment acceptance, and turn your database into measurable appointment growth.
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
                      Get a free email marketing audit <ArrowRight size={18} />
                    </Link>
                    <Link
                      to="/services"
                      className="btn-secondary-outline inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold text-[15px]"
                    >
                      See all services
                    </Link>
                  </div>
                </Reveal>
              </div>

              {/* RIGHT: CONTAINED DARK VISUAL PANEL */}
              <Reveal delay={0.1}>
                <div
                  className="relative rounded-2xl p-5 border border-white/10 overflow-hidden text-white min-h-[520px] flex flex-col justify-between"
                  style={{
                    background:
                      "linear-gradient(145deg, hsl(var(--brand-deep)), hsl(250 45% 19%) 58%, hsl(var(--brand-deep)))",
                    boxShadow: "0 36px 90px hsl(var(--brand-deep) / 0.28)",
                  }}
                >
                  <div
                    aria-hidden
                    className="absolute -inset-[30%] pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle at 72% 18%, hsl(var(--brand-bright) / 0.30), transparent 32%), radial-gradient(circle at 12% 88%, hsl(var(--brand-purple) / 0.28), transparent 38%)",
                      animation: "emVisualGlow 7s ease-in-out infinite",
                    }}
                  />

                  {/* Email / envelope stage */}
                  <div
                    className="relative z-10 min-h-[300px] rounded-2xl border border-white/15 grid place-items-center overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(0 0% 100% / 0.10), hsl(0 0% 100% / 0.04))",
                    }}
                  >
                    <span
                      aria-hidden
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(120deg, transparent 0%, hsl(0 0% 100% / 0.10) 45%, transparent 65%)",
                        transform: "translateX(-100%)",
                        animation: "emShimmer 4.5s ease-in-out infinite",
                      }}
                    />

                    <span className="absolute top-4 left-4 inline-flex items-center gap-2 font-mono-ui text-[11px] uppercase tracking-[0.10em] px-3 py-1.5 rounded-full border border-white/15 bg-white/10 text-white/85">
                      <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-brand-lavender" />
                      Live Campaign
                    </span>

                    <span className="absolute top-4 right-4 inline-flex items-center gap-2 font-mono-ui text-[11px] uppercase tracking-[0.10em] px-3 py-1.5 rounded-full border border-white/15 bg-white/10 text-white/85">
                      Retention Format
                    </span>

                    {/* Envelope icon with pulse */}
                    <div
                      className="relative w-[94px] h-[94px] rounded-full grid place-items-center text-white"
                      style={{
                        background:
                          "linear-gradient(135deg, hsl(var(--brand-bright)), hsl(var(--brand-purple)))",
                        boxShadow:
                          "0 0 0 16px hsl(var(--brand-bright) / 0.16), 0 20px 55px hsl(var(--brand-purple) / 0.45)",
                        animation: "emEnvPulse 2.6s ease-in-out infinite",
                      }}
                    >
                      <Mail size={36} />
                    </div>

                    {/* Engagement waveform bars */}
                    <div className="absolute left-5 right-5 bottom-5 grid grid-cols-4 gap-2 h-[42px] items-end">
                      {[40, 70, 50, 82].map((h, i) => (
                        <span
                          key={i}
                          className="block rounded-full bg-white/20"
                          style={{
                            height: `${h}%`,
                            animation: `emBars 1.4s ease-in-out infinite`,
                            animationDelay: `${i * 0.15}s`,
                            transformOrigin: "bottom",
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Metric cards */}
                  <div className="relative z-10 grid gap-3 mt-4">
                    {HERO_METRICS.map((m) => (
                      <div
                        key={m.n}
                        className="grid grid-cols-[54px_1fr] gap-4 items-start rounded-2xl p-4 border border-white/12 bg-white/8 hover:bg-white/12 hover:border-white/24 transition-all"
                        style={{ backdropFilter: "blur(2px)" }}
                      >
                        <strong className="font-display text-[1.05rem] font-bold text-brand-lavender">{m.n}</strong>
                        <span className="text-[0.92rem] leading-[1.55] text-white/85">{m.p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Hero thesis card */}
            <Reveal delay={0.2}>
              <div
                className="mt-16 rounded-2xl p-8 sm:p-10 border border-brand-purple/20"
                style={{
                  background: "hsl(0 0% 100% / 0.70)",
                  boxShadow: "0 18px 60px hsl(var(--brand-purple) / 0.08)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <p
                  className="font-display font-bold text-brand-deep leading-[1.22] tracking-tight relative"
                  style={{ fontSize: "clamp(1.45rem, 2.6vw, 2.25rem)", letterSpacing: "-0.04em" }}
                >
                  <span aria-hidden className="block text-brand-bright font-display text-[5rem] leading-[0.55]">"</span>
                  Your patient database is your most valuable growth asset. Email turns it into a system that recalls, reactivates, and retains — without buying every appointment from a platform.
                </p>
                <h2 className="mt-6 font-display text-brand-deep tracking-tight" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", letterSpacing: "-0.035em" }}>
                  Email marketing built for healthcare — retention, reactivation, and conversion under one program.
                </h2>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── EVIDENCE STRIP ── */}
        <section className="bg-surface-secondary py-20 sm:py-28">
          <div className="container">
            <Reveal>
              <Eyebrow>Why email, why now</Eyebrow>
              <h2 className="font-display font-bold text-brand-deep mt-4 max-w-3xl" style={{ fontSize: "clamp(1.9rem, 3.2vw, 3rem)", letterSpacing: "-0.035em" }}>
                Three reasons healthcare practices invest in email this year.
              </h2>
            </Reveal>

            <div
              className="grid sm:grid-cols-3 mt-12 border-y border-brand-purple/18"
              role="list"
            >
              {EVIDENCE.map((e, i) => (
                <Reveal key={e.h} delay={i * 0.06}>
                  <article
                    role="listitem"
                    className={
                      "p-8 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)] hover:border-brand-purple/30 " +
                      (i < EVIDENCE.length - 1 ? "sm:border-r border-brand-purple/18" : "")
                    }
                  >
                    <h3 className="font-bold text-brand-deep text-[1.15rem]">{e.h}</h3>
                    <p className="mt-3 text-ink-secondary leading-[1.7] text-[15px]">{e.p}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── ESSAY LAYOUT ── */}
        <section className="py-20 sm:py-28">
          <div className="container">
            <Reveal>
              <Eyebrow>Editorial · Perspective</Eyebrow>
              <h2 className="font-display font-bold text-brand-deep mt-4 max-w-3xl" style={{ fontSize: "clamp(2rem, 3.4vw, 3.2rem)", letterSpacing: "-0.035em" }}>
                A three-part view on what makes healthcare email marketing work.
              </h2>
            </Reveal>

            <div className="grid gap-12 lg:gap-20 lg:grid-cols-[320px_1fr] mt-12 items-start">
              {/* Sticky index */}
              <aside className="lg:sticky lg:top-24 border-t border-brand-purple/18">
                <nav aria-label="Essay index">
                  {ESSAY.map((s) => {
                    const active = activeEssay === s.id;
                    return (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        className={
                          "block py-4 border-b border-brand-purple/18 font-bold relative transition-all " +
                          (active
                            ? "text-brand-purple pl-5"
                            : "text-brand-deep/55 hover:text-brand-purple")
                        }
                      >
                        {active && (
                          <span
                            aria-hidden
                            className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-brand-purple rounded-full"
                            style={{ width: "0.8rem" }}
                          />
                        )}
                        {s.navLabel}
                      </a>
                    );
                  })}
                </nav>
              </aside>

              {/* Essay content */}
              <div>
                {ESSAY.map((s, i) => (
                  <article
                    key={s.id}
                    id={s.id}
                    className={
                      "pb-14 mb-14 " +
                      (i < ESSAY.length - 1 ? "border-b border-brand-purple/18" : "")
                    }
                  >
                    <Eyebrow>{s.eyebrow}</Eyebrow>
                    <h3 className="font-display font-bold text-brand-deep mt-4" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.4rem)", letterSpacing: "-0.035em", lineHeight: 1.12 }}>
                      {s.h}
                    </h3>
                    {s.body.map((p, j) => (
                      <p key={j} className="mt-4 text-[1.02rem] leading-[1.85] text-ink-secondary">
                        {p}
                      </p>
                    ))}
                    {s.link && (
                      <p className="mt-4 text-[1.02rem] leading-[1.85] text-ink-secondary">
                        <Link to={s.link.href} className="text-brand-purple font-bold underline">
                          {s.link.text}
                        </Link>
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PRINCIPLES ── */}
        <section className="bg-surface-secondary py-20 sm:py-28">
          <div className="container">
            <Reveal>
              <Eyebrow>Operating Principles</Eyebrow>
              <h2 className="font-display font-bold text-brand-deep mt-4 max-w-3xl" style={{ fontSize: "clamp(1.9rem, 3.2vw, 3rem)", letterSpacing: "-0.035em" }}>
                Four principles we apply to every healthcare email engagement.
              </h2>
            </Reveal>

            <div className="mt-12 border-t border-brand-purple/18">
              {PRINCIPLES.map((p, i) => (
                <Reveal key={p.h} delay={i * 0.05}>
                  <article className="grid grid-cols-[64px_1fr] sm:grid-cols-[90px_1fr] gap-5 py-6 border-b border-brand-purple/18 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)] hover:border-brand-purple/30">
                    <span className="font-display font-black text-brand-purple text-[1.7rem] leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-bold text-brand-deep text-[1.15rem]">{p.h}</h3>
                      <p className="mt-2 text-ink-secondary leading-[1.7]">{p.p}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── AUTHORITY DARK ── */}
        <section
          className="py-20 sm:py-28 relative overflow-hidden"
          style={{ background: "var(--gradient-dark)" }}
          data-dark="true"
        >
          <div className="container relative z-10">
            <Reveal>
              <Eyebrow light>External Authority</Eyebrow>
              <h2 className="font-display font-bold text-white mt-4 max-w-3xl" style={{ fontSize: "clamp(1.9rem, 3.2vw, 3rem)", letterSpacing: "-0.035em" }}>
                Effective email helps patients understand and act.
              </h2>
            </Reveal>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mt-12 items-start">
              <Reveal>
                <div className="rounded-2xl p-8 sm:p-10 border border-white/12 bg-white/5 transition-all hover:-translate-y-1 hover:border-white/24">
                  <blockquote className="font-display font-bold text-white leading-[1.45] tracking-tight" style={{ fontSize: "clamp(1.25rem, 2vw, 1.55rem)", letterSpacing: "-0.03em" }}>
                    "Plain language helps people understand and use health information the first time they read it."
                  </blockquote>
                  <p className="mt-5 font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-lavender">
                    — Adapted from CDC health literacy guidance
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <p className="font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-lavender mb-4">Source pattern</p>
                <ul className="border-t border-white/14">
                  {SOURCES.map((s) => (
                    <li
                      key={s}
                      className="py-4 border-b border-white/14 text-white/75 leading-[1.55]"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── RELATED COLUMNS ── */}
        <section className="py-20 sm:py-28">
          <div className="container">
            <Reveal>
              <Eyebrow>Adjacent services</Eyebrow>
              <h2 className="font-display font-bold text-brand-deep mt-4 max-w-3xl" style={{ fontSize: "clamp(1.9rem, 3.2vw, 3rem)", letterSpacing: "-0.035em" }}>
                Email works best inside a broader patient acquisition system.
              </h2>
            </Reveal>

            <div
              className="grid sm:grid-cols-2 lg:grid-cols-4 mt-12 rounded-2xl overflow-hidden border border-brand-purple/18"
              style={{ background: "hsl(var(--brand-purple) / 0.18)", gap: "1px" }}
            >
              {RELATED.map((r) => (
                <Link
                  key={r.h}
                  to={r.href}
                  className="bg-background p-6 font-extrabold text-brand-deep transition-all hover:-translate-y-1 hover:text-brand-purple hover:bg-surface-secondary"
                >
                  {r.h}
                  <span className="block font-mono-ui text-[12px] font-medium text-ink-muted mt-1.5">
                    {r.k} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-surface-secondary py-20 sm:py-28">
          <div className="container max-w-4xl">
            <Reveal>
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="font-display font-bold text-brand-deep mt-4" style={{ fontSize: "clamp(1.9rem, 3.2vw, 3rem)", letterSpacing: "-0.035em" }}>
                Common questions about healthcare email marketing.
              </h2>
            </Reveal>

            <div className="mt-10 border-t border-brand-purple/18">
              {FAQS.map((f, i) => {
                const open = openFaq === i;
                return (
                  <div key={f.q} className="border-b border-brand-purple/18">
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="w-full flex justify-between gap-4 items-start py-5 text-left font-bold text-brand-deep text-[16px] hover:text-brand-purple transition-colors"
                    >
                      <span>{f.q}</span>
                      <span
                        aria-hidden
                        className={
                          "w-7 h-7 rounded-full grid place-items-center flex-shrink-0 transition-all " +
                          (open
                            ? "bg-brand-purple text-white rotate-45"
                            : "bg-surface-tertiary text-brand-purple")
                        }
                      >
                        <Plus size={16} />
                      </span>
                    </button>
                    <div
                      className="overflow-hidden transition-all duration-500"
                      style={{ maxHeight: open ? 400 : 0 }}
                    >
                      <p className="pb-5 text-ink-secondary leading-[1.75] max-w-2xl">{f.a}</p>
                    </div>
                  </div>
                );
              })}
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
              animation: "emCtaGlow 7s ease-in-out infinite",
            }}
          />
          <div className="container relative z-10">
            <Eyebrow light>Next step</Eyebrow>
            <h2 className="font-display font-bold text-white max-w-3xl mx-auto mt-4" style={{ fontSize: "clamp(2rem, 3.6vw, 3.2rem)", letterSpacing: "-0.04em" }}>
              Build an email program that retains patients and books more appointments.
            </h2>
            <p className="mt-4 text-white/70 max-w-xl mx-auto leading-[1.7]">
              Request a free growth audit. We&apos;ll review your current email footprint, surface the highest-leverage campaign opportunities, and map a patient lifecycle strategy for your practice.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link
                to="/free-audit"
                className="btn-primary-grad inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[15px]"
              >
                Request a free audit <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold text-[15px] border border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                Browse all services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Page-local keyframes (no global token changes) */}
      <style>{`
        @keyframes emOrb { 0%,100% { transform: translate3d(0,0,0) scale(1); } 50% { transform: translate3d(-30px, 28px, 0) scale(1.08); } }
        @keyframes emVisualGlow { 0%,100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-18px) rotate(4deg); } }
        @keyframes emShimmer { 0%,45% { transform: translateX(-100%); } 75%,100% { transform: translateX(100%); } }
        @keyframes emEnvPulse {
          0%,100% { transform: scale(1); box-shadow: 0 0 0 16px hsl(var(--brand-bright) / 0.16), 0 20px 55px hsl(var(--brand-purple) / 0.45); }
          50% { transform: scale(1.05); box-shadow: 0 0 0 24px hsl(var(--brand-bright) / 0.08), 0 26px 72px hsl(var(--brand-purple) / 0.58); }
        }
        @keyframes emBars { 0%,100% { transform: scaleY(0.55); } 50% { transform: scaleY(1); } }
        @keyframes emCtaGlow { 0%,100% { transform: scale(1); } 50% { transform: scale(1.08); } }
      `}</style>
    </div>
  );
}
