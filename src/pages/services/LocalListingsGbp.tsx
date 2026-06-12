import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import Nav from "@/components/site/Nav";
import GlobalFx from "@/components/site/GlobalFx";
import Footer from "@/components/site/Footer";

const ease = [0.16, 1, 0.3, 1] as const;
const CANONICAL = "https://vigorant.com/services/local-listings-gbp";

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
  "Google Business Profile",
  "Local citations",
  "Maps visibility",
  "Review alignment",
];

const HERO_METRICS = [
  { n: "01", p: "Audit profile accuracy, categories, services, reviews, photos, citations, competitors, and local search signals." },
  { n: "02", p: "Optimize location data, service relevance, business attributes, and listing consistency around patient intent." },
  { n: "03", p: "Align GBP, directories, website pages, reviews, and reporting so local visibility turns into measurable calls." },
];

const FIT_ROWS = [
  { n: "01", h: "New or relocated practices", p: "Establish accurate listings, categories, hours, and service signals before patient acquisition spend ramps up in the new market." },
  { n: "02", h: "Multi-location and growing groups", p: "Unify profile standards across locations so every office presents consistent data, services, photos, and reputation signals." },
  { n: "03", h: "Practices with weak Maps visibility", p: "When competitors appear above you for high-intent searches, profile relevance, citations, reviews, and website alignment often need repair." },
  { n: "04", h: "Practices with messy directory data", p: "Clean conflicting names, addresses, phone numbers, hours, categories, and duplicate listings before they dilute local trust." },
];

const PHASES = [
  {
    n: "01",
    nav: "Discovery",
    h: "GBP Audit & Local Competitive Analysis",
    paras: [
      "We start with a structured audit of the Google Business Profile — categories, services, hours, photos, reviews, attributes, booking links, duplicate risks, and how the profile appears across Search and Maps.",
      "The output is a clear picture of where local visibility is strong, where trust signals are leaking, and where competitors are winning patient attention before a website visit happens.",
    ],
  },
  {
    n: "02",
    nav: "Profile",
    h: "Google Business Profile Optimization",
    paras: [
      "Profile optimization answers a practical question: does Google understand the practice, location, specialty, services, and relevance well enough to show it for the right patient searches? We refine categories, services, descriptions, attributes, photos, and action paths.",
      "The profile framework gives each location a consistent local identity that reviews, website pages, citations, and patient actions can all reinforce.",
    ],
  },
  {
    n: "03",
    nav: "Citations",
    h: "NAP Consistency & Local Listing Cleanup",
    paras: [
      "Local listings define how the practice appears across directories, map platforms, healthcare sites, and data aggregators. We check name, address, phone, hours, categories, URLs, and duplicate records that can confuse search systems.",
      "The goal is not directory busywork. The goal is consistency — a local entity that patients and search engines can recognize across every important surface.",
    ],
  },
  {
    n: "04",
    nav: "Alignment",
    h: "Reviews, Website & Local SEO Alignment",
    paras: [
      "Local visibility only compounds when the profile, website, reviews, service pages, and location signals tell the same story. We align GBP details with landing pages, local SEO content, review themes, and conversion paths.",
      "Reputation, Google Business Profile, healthcare directories, and AI-source citations are managed as connected local authority signals — not separate workstreams.",
    ],
  },
  {
    n: "05",
    nav: "Reporting",
    h: "Maps Visibility & Local Growth Roadmap",
    paras: [
      "A local roadmap with phased priorities, tracking needs, and KPI thresholds — built so listings work turns into measurable calls, direction requests, website visits, and booked appointment opportunities.",
      "Quarterly reviews track profile health, citation consistency, review signals, and downstream patient acquisition impact against the original local visibility brief.",
    ],
  },
];

const BLUEPRINT = [
  {
    area: "Discovery",
    label: "01",
    inputs: "GBP access, competitor profiles, current listings, reviews, website pages, market signals.",
    outputs: "Local audit, competitor benchmark, visibility gap map, prioritized listing risks.",
  },
  {
    area: "Profile",
    label: "02",
    inputs: "Primary services, categories, location data, hours, attributes, photos, patient actions.",
    outputs: "GBP optimization plan, category strategy, service hierarchy, action-path recommendations.",
  },
  {
    area: "Citations",
    label: "03",
    inputs: "NAP records, directory profiles, duplicate listings, aggregator data, location variations.",
    outputs: "Citation cleanup plan, listing accuracy standards, duplicate-risk notes, directory priorities.",
  },
  {
    area: "Alignment",
    label: "04",
    inputs: "Website location pages, reviews, GBP posts, services, intake and tracking touchpoints.",
    outputs: "Alignment plan across GBP, directories, reviews, website, and patient-conversion surfaces.",
  },
  {
    area: "Reporting",
    label: "05",
    inputs: "All prior outputs, tracking constraints, leadership priorities, quarterly milestones.",
    outputs: "Local roadmap, reporting sequence, KPI framework, review cadence.",
  },
];

const ADAPTER = [
  "Specialty categories and target patient intent",
  "Service-line hierarchy and GBP service architecture",
  "Profile language calibrated to trust and accessibility",
  "Local market and competitor differentiation",
  "Entity-based listing signals and conversational search visibility",
];

const RELATED = [
  { to: "/services/marketing-strategy", label: "Marketing Strategy", sub: "Plug local visibility into a measurable 12-month patient growth plan." },
  { to: "/services/seo", label: "SEO & AI Optimization", sub: "Strengthen Maps, organic search, and AI-source visibility together." },
  { to: "/services/reputation", label: "Reputation", sub: "Align reviews, responses, and profile trust signals with local demand." },
  { to: "/services/analytics-and-reporting", label: "Analytics & Reporting", sub: "Track calls, directions, website visits, listings health, and local ROI." },
];

const FAQS = [
  {
    q: "What are healthcare local listings?",
    a: "Healthcare local listings are the online business profiles, citations, directories, map listings, and search platforms that show a practice's name, address, phone number, hours, services, reviews, and location information to patients.",
  },
  {
    q: "Why is Google Business Profile important for practices?",
    a: "Google Business Profile influences how a practice appears on Google Search and Maps. An optimized profile can improve local visibility, calls, directions, appointment actions, service discovery, and patient trust before the first website visit.",
  },
  {
    q: "Can local listings improve patient acquisition?",
    a: "Yes. Accurate listings, stronger categories, consistent NAP information, service details, photos, reviews, and local landing page alignment can help patients find the practice and take action faster.",
  },
  {
    q: "Do local listings affect SEO and AI visibility?",
    a: "Yes. Consistent local entities, citations, reviews, business attributes, and service information help search engines and AI-powered discovery systems understand the practice, its locations, and the services it provides.",
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
        "Healthcare Local SEO",
        "Google Business Profile Optimization",
        "Local Listings Management",
        "Healthcare Citations",
        "Dental Google Business Profile",
        "Medical Local SEO",
        "Chiropractic Local Listings",
        "Maps Visibility",
        "Healthcare Reputation Signals",
        "AI Local Visibility",
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
      name: "Healthcare Local Listings & GBP Services | Rank on Maps & Get More Calls | Vigorant",
      description:
        "Healthcare local listings and Google Business Profile optimization services for dental, medical, and chiropractic practices, including GBP audit, category strategy, NAP cleanup, citation alignment, services optimization, review signals, posting recommendations, and local reporting.",
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
        { "@type": "ListItem", position: 3, name: "Healthcare Local Listings & GBP Services", item: CANONICAL },
      ],
    },
    {
      "@type": "Service",
      "@id": `${CANONICAL}#service`,
      name: "Healthcare Local Listings & Google Business Profile Services",
      provider: { "@id": "https://vigorant.com/#organization" },
      description:
        "Healthcare local listings and Google Business Profile optimization for dental, medical, and chiropractic practices. Includes GBP audit, profile optimization, category and service strategy, NAP consistency cleanup, citation management, review signal alignment, photo and post recommendations, local landing page alignment, Maps visibility tracking, and performance reporting.",
      areaServed: "United States",
      serviceType: "Healthcare Local Listings and Google Business Profile Optimization",
      audience: {
        "@type": "Audience",
        audienceType: "Dental Practices, Medical Clinics, Chiropractic Offices, Multi-location Healthcare Groups",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Local Listings & GBP Service Deliverables",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Business Profile Audit & Optimization" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Category, Services & Attribute Strategy" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "NAP Consistency & Citation Cleanup" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Review Signal & Local Reputation Alignment" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Maps Visibility Reporting & Local Growth Roadmap" } },
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

export default function LocalListingsGbp() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activePhase, setActivePhase] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Healthcare Local Listings & GBP Services | Rank on Maps & Get More Calls | Vigorant</title>
        <meta
          name="description"
          content="Healthcare local listings and Google Business Profile optimization for dental, medical, and chiropractic practices. Improve Maps visibility, local SEO, calls, directions, reviews, and patient acquisition."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Healthcare Local Listings & GBP Services | Rank on Maps & Get More Calls | Vigorant" />
        <meta
          property="og:description"
          content="Optimize Google Business Profile, local listings, citations, reviews, categories, services, and location signals for dental, medical, and chiropractic patient acquisition."
        />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:image" content="https://vigorant.com/og/local-listings-gbp.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Healthcare Local Listings & GBP Services | Vigorant" />
        <meta
          name="twitter:description"
          content="Google Business Profile and local listings optimization for healthcare practices that need more visibility, calls, directions, and appointments."
        />
        <meta name="twitter:image" content="https://vigorant.com/og/local-listings-gbp.jpg" />
        <script type="application/ld+json">{JSON.stringify(JSONLD)}</script>
      </Helmet>

      <GlobalFx />
      <Nav />

      <main
        id="main"
        itemScope
        itemType="https://schema.org/Service"
        className="pt-24"
      >
        <meta itemProp="name" content="Healthcare Local Listings & Google Business Profile Services" />
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
                <li aria-current="page" className="text-brand-deep">Local Listings & GBP</li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-[1.25fr_1fr] gap-10 lg:gap-14 items-start">
              <Reveal>
                <Eyebrow>Local Listings & GBP</Eyebrow>
                <h1
                  id="hero-h1"
                  className="font-display text-brand-deep mt-4 leading-[1.05] tracking-tight"
                  style={{ fontSize: "clamp(34px, 6vw, 64px)", letterSpacing: "-0.03em" }}
                >
                  Show Up Where Local{" "}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))" }}
                  >
                    Patients Search
                  </span>
                </h1>
                <p className="mt-6 text-[16.5px] sm:text-[18px] leading-[1.65] text-ink-muted max-w-2xl">
                  Patients choose practices they can find and trust. We optimize Google Business Profile and local listings so dental, medical, and chiropractic practices improve Maps visibility, calls, directions, and appointment discovery.
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
                    Request a Local Visibility Audit <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/free-audit"
                    className="inline-flex items-center justify-center gap-2 font-semibold text-[14px] sm:text-[15px] text-brand-deep px-5 py-3 rounded-full border-[1.5px] border-brand-purple/25 hover:border-brand-purple hover:bg-surface-secondary transition-all"
                  >
                    Book a GBP Strategy Call
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

              {/* Local panel */}
              <Reveal delay={0.1}>
                <aside
                  className="relative rounded-3xl p-6 sm:p-7 overflow-hidden"
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
                      <span>LOCAL SYSTEM</span>
                      <span className="px-2 py-1 rounded-full bg-surface-secondary border border-brand-purple/20">
                        v2026
                      </span>
                    </div>

                    <h3
                      className="font-display text-brand-deep mt-4 leading-[1.15]"
                      style={{ fontSize: "clamp(20px, 2.4vw, 26px)", letterSpacing: "-0.025em" }}
                    >
                      Profile · Citations · Maps
                    </h3>

                    {/* Identity sample */}
                    <div
                      className="mt-5 rounded-2xl p-5 flex items-center gap-4"
                      style={{
                        background: "linear-gradient(135deg, hsl(248 49% 15%), hsl(250 45% 19%))",
                        border: "1px solid hsl(0 0% 100% / 0.12)",
                      }}
                    >
                      <div
                        className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center font-display text-white text-[24px]"
                        style={{
                          background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))",
                          boxShadow: "0 10px 30px hsl(247 93% 64% / 0.45)",
                        }}
                      >
                        V
                      </div>
                      <div className="min-w-0">
                        <span className="block font-mono-ui text-[10.5px] tracking-[0.12em] text-brand-lavender/80">
                          LOCAL PROFILE
                        </span>
                        <strong className="block font-display text-white text-[20px] leading-tight mt-0.5">
                          Vigorant Dental Co.
                        </strong>
                        <span className="block font-mono-ui text-[11px] text-white/55 mt-1">
                          Visible care. Trusted nearby.
                        </span>
                      </div>
                    </div>

                    {/* Mini metrics */}
                    <div className="mt-5 grid grid-cols-3 gap-3">
                      {[
                        { l: "MAPS", v: "+41%", s: "visibility" },
                        { l: "CALLS", v: "2.8×", s: "intent" },
                        { l: "NAP", v: "+92%", s: "accuracy" },
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
                  Local visibility decides whether nearby patients find your practice before they find a competitor.
                </blockquote>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="border-l-[3px] border-brand-purple pl-6">
                  <Eyebrow>Why local matters</Eyebrow>
                  <h2
                    id="thesis-h2"
                    className="font-display text-brand-deep mt-4 leading-[1.1] tracking-tight"
                    style={{ fontSize: "clamp(26px, 4.2vw, 42px)", letterSpacing: "-0.03em" }}
                  >
                    Local listings are the trust layer beneath Maps, search, and patient action.
                  </h2>
                  <p className="mt-5 text-[16.5px] leading-[1.7] text-ink-muted">
                    A strong local presence helps patients confirm who you are, where you are, what you offer, and why they should contact you. Inaccurate listings quietly weaken SEO, ads, reputation, and every location-based acquisition effort.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FIT — numbered editorial rows */}
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
                  Built for healthcare practices that need to win local searches, not just own a profile.
                </h2>
              </div>
            </Reveal>

            <div className="mt-12 border-t border-brand-purple/20">
              {FIT_ROWS.map((r, i) => (
                <Reveal key={r.h} delay={i * 0.05}>
                  <div className="grid grid-cols-[64px_1fr] md:grid-cols-[80px_320px_1fr] gap-4 md:gap-10 py-8 border-b border-brand-purple/20 items-start transition-transform hover:translate-x-2">
                    <span className="font-mono-ui font-black text-brand-purple text-[22px] leading-none rounded-lg bg-surface-secondary px-3 py-2 inline-flex items-center justify-center">
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

        {/* PHASES — sticky sidebar */}
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
                  How a Vigorant local visibility engagement actually runs.
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
                {PHASES.map((e, i) => (
                  <motion.article
                    key={e.n}
                    id={`phase-${e.n}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30% 0px -40% 0px" }}
                    onViewportEnter={() => setActivePhase(i)}
                    transition={{ duration: 0.7, ease }}
                    className="py-10 sm:py-14 border-b border-brand-purple/20 first:pt-0 scroll-mt-32"
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

        {/* BLUEPRINT — row-based, not cards */}
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
                  The local listings blueprint.
                </h2>
                <p className="mt-5 text-[16px] leading-[1.7] text-ink-muted">
                  Every phase has defined inputs and defined deliverables — no vague citation work, no profile edits without a local visibility strategy underneath.
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

                    <div className="p-6 sm:p-7 border-t md:border-t-0 md:border-l border-brand-purple/15 bg-white">
                      <small className="font-mono-ui text-[11px] tracking-[0.1em] text-brand-purple block">
                        INPUTS
                      </small>
                      <p className="mt-2 text-[14.5px] leading-[1.65] text-ink-muted">{b.inputs}</p>
                    </div>

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

        {/* ADAPTER DARK */}
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
                <Eyebrow light>Local adapter</Eyebrow>
                <h2
                  id="adapter-h2"
                  className="font-display text-white mt-4 leading-[1.1] tracking-tight"
                  style={{ fontSize: "clamp(26px, 4.2vw, 42px)", letterSpacing: "-0.03em" }}
                >
                  The same framework, tuned to your specialty and market.
                </h2>
                <p className="mt-5 text-[16px] leading-[1.7] text-white/75">
                  Dental, medical, and chiropractic listings share the same physics — proximity, relevance, prominence, and trust. The execution adapts to your specialty, service mix, patient profile, and local competition.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div
                  className="rounded-3xl p-8 sm:p-10"
                  style={{
                    background: "hsl(0 0% 100% / 0.05)",
                    border: "1px solid hsl(0 0% 100% / 0.12)",
                  }}
                >
                  <h3 className="font-extrabold text-white text-[18px] sm:text-[20px]">
                    What the local strategy customizes
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
                              Entity-based listing signals and{" "}
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
                  Common questions practices ask before committing to a local listings or Google Business Profile engagement.
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
              <Eyebrow light>Ready to be found by local patients?</Eyebrow>
              <h2
                id="cta-h2"
                className="font-display text-white mt-4 leading-[1.1] tracking-tight"
                style={{ fontSize: "clamp(30px, 5vw, 52px)", letterSpacing: "-0.03em" }}
              >
                Build a local presence that earns trust before the first call.
              </h2>
              <p className="mt-5 text-[16.5px] leading-[1.7] text-white/75">
                Start with a local visibility audit. We'll map GBP gaps, citation issues, competitor signals, and the highest-leverage moves to improve Maps visibility and patient actions.
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
                  Request a Local Visibility Audit <ArrowRight className="w-4 h-4" />
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
              href="https://support.google.com/business/answer/3038177?hl=en"
              rel="noopener noreferrer"
              target="_blank"
              className="text-brand-purple underline underline-offset-4"
            >
              Google Business Profile Guidelines
            </a>{" "}
            — referenced for profile quality.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
