import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
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

const PROOF_TAGS = [
  "Brand positioning",
  "Messaging framework",
  "Visual identity",
  "Reputation alignment",
];

const HERO_METRICS = [
  { n: "01", p: "Audit the brand against patient perception, market position, competitive set, and digital expression." },
  { n: "02", p: "Define positioning, voice, and identity that match how patients actually decide on a practice." },
  { n: "03", p: "Roll the brand across website, reputation, content, and paid media so every touchpoint reinforces trust." },
];

const FIT_ROWS = [
  { n: "01", h: "New or relaunching practices", p: "Establish a brand that signals trust and clinical confidence from day one — before patient acquisition spend ramps up." },
  { n: "02", h: "Multi-location and growing groups", p: "Unify the brand across locations so every market presents the same standard, voice, and patient experience." },
  { n: "03", h: "Practices that have outgrown their original brand", p: "When the visual identity, messaging, or website no longer reflects the quality of the clinical work — the brand becomes a ceiling on growth." },
  { n: "04", h: "Practices losing ground to better-branded competitors", p: "Rebrand to compete on perception as deliberately as you compete on outcomes." },
];

const PHASES = [
  {
    n: "01",
    nav: "Discovery",
    h: "Brand Audit & Competitive Analysis",
    paras: [
      "We start with a structured audit of the current brand — how the practice is described, presented, reviewed, and remembered. Patient perception, competitor positioning, market context, and digital expression all feed the brief.",
      "The output is a clear picture of where the brand is strong, where it leaks trust, and where competitors are winning the perception battle before the first appointment is ever booked.",
    ],
  },
  {
    n: "02",
    nav: "Positioning",
    h: "Positioning Strategy & Messaging Framework",
    paras: [
      "Positioning answers a simple question that most practices never fully resolve: why should a specific patient choose you over the alternative? We define the audience, the differentiator, and the proof — then translate it into messaging that holds up across channels.",
      "The messaging framework gives the practice a single, consistent narrative that the website, ads, reviews, content, and team conversations can all reinforce.",
    ],
  },
  {
    n: "03",
    nav: "Voice & Identity",
    h: "Brand Voice & Visual Identity Recommendations",
    paras: [
      "Brand voice defines how the practice sounds — to patients, in reviews responses, in ad copy, on hold messages, in every email. Visual identity recommendations cover logo direction, type, color, photography, and the design principles that bind every asset together.",
      "The goal is not aesthetic decoration. The goal is recognition — a brand that patients can identify in two seconds across any surface.",
    ],
  },
  {
    n: "04",
    nav: "Alignment",
    h: "Website, Reputation & Digital Alignment",
    paras: [
      "Brand only works when it is consistent. We map the new positioning, voice, and identity to the website, landing pages, reputation profiles, content templates, and paid media — so every patient touchpoint reinforces the same story.",
      "Reputation, Google Business Profile, healthcare directories, and AI-source citations all get aligned with the rebrand — not treated as separate workstreams.",
    ],
  },
  {
    n: "05",
    nav: "Rollout",
    h: "Growth-Oriented Brand Roadmap",
    paras: [
      "A rollout plan with phased priorities, dependencies, and KPI thresholds — built so the brand work compounds into measurable growth instead of sitting as a deck on a shared drive.",
      "Quarterly reviews track brand health, reputation signals, and downstream patient acquisition impact against the original brief.",
    ],
  },
];

const BLUEPRINT = [
  {
    area: "Discovery",
    label: "01",
    inputs: "Patient reviews, competitor brands, current website, paid media, internal interviews, market signals.",
    outputs: "Brand audit, competitive benchmark, perception gap map, prioritized brand risks.",
  },
  {
    area: "Positioning",
    label: "02",
    inputs: "Target audience profile, service-line economics, differentiators, leadership goals.",
    outputs: "Positioning statement, messaging framework, audience hierarchy, proof architecture.",
  },
  {
    area: "Voice & Identity",
    label: "03",
    inputs: "Positioning, brand archetype, existing assets, market norms, accessibility standards.",
    outputs: "Brand voice guidelines, visual identity direction, asset principles, do/don't reference.",
  },
  {
    area: "Alignment",
    label: "04",
    inputs: "Website pages, reputation profiles, ads, content templates, intake & follow-up touchpoints.",
    outputs: "Alignment plan across web, reputation, paid, content, and patient-experience surfaces.",
  },
  {
    area: "Rollout",
    label: "05",
    inputs: "All prior outputs, capacity constraints, leadership priorities, quarterly milestones.",
    outputs: "Brand roadmap, rollout sequence, KPI framework, review cadence.",
  },
];

const ADAPTER = [
  "Specialty positioning and target patient profile",
  "Service-line hierarchy and offer architecture",
  "Voice calibrated to clinical trust and approachability",
  "Local market and competitor differentiation",
  "Entity-based brand signals and conversational search visibility",
];

const RELATED = [
  { to: "/services/marketing-strategy", label: "Marketing Strategy", sub: "Plug the brand into a measurable 12-month patient growth plan." },
  { to: "/services/website-design", label: "Website Design & CRO", sub: "Express the rebrand in a website built to convert." },
  { to: "/services/reputation", label: "Reputation", sub: "Align reviews, profiles, and responses with the new brand voice." },
  { to: "/services/seo", label: "SEO & AI Optimization", sub: "Reinforce the brand as an entity across search and AI sources." },
];

const FAQS = [
  {
    q: "What is healthcare branding?",
    a: "Healthcare branding is the strategic process of shaping how patients perceive and experience your practice — encompassing positioning, messaging, visual identity, patient experience, online reputation, website presentation, and communication consistency.",
  },
  {
    q: "How long does a rebranding project take?",
    a: "Most healthcare rebranding projects range from several weeks to several months depending on scope, number of locations, and the complexity of the visual and messaging changes required.",
  },
  {
    q: "Can branding improve patient acquisition?",
    a: "Yes. A strong healthcare brand builds trust before the first appointment, improves conversion rates across digital channels, and increases the overall effectiveness of SEO, paid advertising, and reputation management.",
  },
  {
    q: "Does branding affect SEO and AI visibility?",
    a: "Yes. Consistent branding strengthens authority signals, trust indicators, and entity recognition — all of which influence how both traditional search engines and AI-powered discovery platforms evaluate and surface your practice.",
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
        "Healthcare Branding",
        "Healthcare Rebranding",
        "Medical Branding",
        "Dental Branding",
        "Chiropractic Branding",
        "Brand Strategy",
        "Healthcare Marketing",
        "AI Brand Visibility",
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
      name: "Healthcare Branding & Rebranding Services | Build a Practice Patients Remember | Vigorant",
      description:
        "Healthcare branding and rebranding services for dental, medical, and chiropractic practices, including brand strategy, messaging, visual identity recommendations, digital alignment, and rollout planning.",
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
        { "@type": "ListItem", position: 3, name: "Healthcare Branding & Rebranding Services", item: CANONICAL },
      ],
    },
    {
      "@type": "Service",
      "@id": `${CANONICAL}#service`,
      name: "Healthcare Branding & Rebranding Services",
      provider: { "@id": "https://vigorant.com/#organization" },
      description:
        "Healthcare branding and rebranding services for dental, medical, and chiropractic practices. Includes brand audit, competitive analysis, positioning strategy, messaging framework, brand voice guidelines, visual identity recommendations, website alignment recommendations, reputation review, and a growth-oriented brand roadmap.",
      areaServed: "United States",
      serviceType: "Healthcare Brand Strategy",
      audience: {
        "@type": "Audience",
        audienceType: "Dental Practices, Medical Clinics, Chiropractic Offices, Multi-location Healthcare Groups",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Branding & Rebranding Service Deliverables",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand Audit & Competitive Analysis" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Positioning Strategy & Messaging Framework" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand Voice Guidelines" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Visual Identity Recommendations" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Alignment & Growth-Oriented Brand Roadmap" } },
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

export default function BrandingRebranding() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activePhase, setActivePhase] = useState(0);

  return (
    <div className="min-h-screen bg-background no-card-hover">
      <Helmet>
        <title>Healthcare Branding & Rebranding Services | Build a Practice Patients Remember | Vigorant</title>
        <meta
          name="description"
          content="Transform how patients perceive your practice with healthcare branding and rebranding services. Build trust, differentiate from competitors, and create a stronger patient acquisition engine with Vigorant."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Healthcare Branding & Rebranding Services | Build a Practice Patients Remember | Vigorant" />
        <meta
          property="og:description"
          content="Transform how patients perceive your practice with healthcare branding and rebranding services. Build trust, differentiate from competitors, and create a stronger patient acquisition engine with Vigorant."
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
                <li aria-current="page" className="text-brand-deep">Healthcare Branding & Rebranding</li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-[1.25fr_1fr] gap-10 lg:gap-14 items-start">
              <Reveal>
                <Eyebrow>Branding & Rebranding</Eyebrow>
                <h1
                  id="hero-h1"
                  className="font-display text-brand-deep mt-4 leading-[1.05] tracking-tight"
                  style={{ fontSize: "clamp(34px, 6vw, 64px)", letterSpacing: "-0.03em" }}
                >
                  Build a Practice{" "}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))" }}
                  >
                    Patients Remember
                  </span>
                </h1>
                <p className="mt-6 text-[16.5px] sm:text-[18px] leading-[1.65] text-ink-muted max-w-2xl">
                  Patients choose practices they recognize and trust. We build healthcare brands that signal clinical confidence, differentiate against competitors, and make every downstream marketing dollar work harder.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/free-audit"
                    className="btn-primary-grad inline-flex items-center justify-center gap-2 font-bold text-[14px] sm:text-[16px] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full min-h-[46px] sm:min-h-[48px]"
                    style={{
                      background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))",
                      boxShadow: "0 12px 32px hsl(247 93% 64% / 0.4)",
                    }}
                  >
                    Request a Brand Audit <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/free-audit"
                    className="btn-secondary-outline inline-flex items-center justify-center gap-2 font-semibold text-[14px] sm:text-[15px] px-5 sm:px-6 py-3 sm:py-3.5 rounded-full min-h-[46px] sm:min-h-[48px]"
                  >
                    Book a Brand Strategy Call
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

              {/* Brand panel */}
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
                      <span>BRAND SYSTEM</span>
                      <span className="px-2 py-1 rounded-full bg-surface-secondary border border-brand-purple/20">
                        v2026
                      </span>
                    </div>

                    <h3
                      className="font-display text-brand-deep mt-4 leading-[1.15]"
                      style={{ fontSize: "clamp(20px, 2.4vw, 26px)", letterSpacing: "-0.025em" }}
                    >
                      Positioning · Voice · Identity
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
                          PRACTICE MARK
                        </span>
                        <strong className="block font-display text-white text-[20px] leading-tight mt-0.5">
                          Vigorant Dental Co.
                        </strong>
                        <span className="block font-mono-ui text-[11px] text-white/55 mt-1">
                          Trusted care. Modern delivery.
                        </span>
                      </div>
                    </div>

                    {/* Mini metrics */}
                    <div className="mt-5 grid grid-cols-3 gap-3">
                      {[
                        { l: "TRUST", v: "+46%", s: "perception" },
                        { l: "RECALL", v: "3.2×", s: "vs. control" },
                        { l: "CVR", v: "+28%", s: "site avg" },
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
                  A brand decides whether a patient trusts your practice before they ever meet you.
                </blockquote>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="border-l-[3px] border-brand-purple pl-6">
                  <Eyebrow>Why brand matters</Eyebrow>
                  <h2
                    id="thesis-h2"
                    className="font-display text-brand-deep mt-4 leading-[1.1] tracking-tight"
                    style={{ fontSize: "clamp(26px, 4.2vw, 42px)", letterSpacing: "-0.03em" }}
                  >
                    Brand is the multiplier on every other marketing investment.
                  </h2>
                  <p className="mt-5 text-[16.5px] leading-[1.7] text-ink-muted">
                    A strong healthcare brand builds trust before the first appointment, lifts conversion across every digital channel, and increases the effectiveness of SEO, paid advertising, and reputation work. A weak brand quietly taxes every other line item.
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
                  Built for healthcare practices ready to compete on perception, not just on clinical work.
                </h2>
              </div>
            </Reveal>

            <div className="mt-12 border-t border-brand-purple/20">
              {FIT_ROWS.map((r, i) => (
                <Reveal key={r.h} delay={i * 0.05}>
                  <div className="grid grid-cols-[64px_1fr] md:grid-cols-[80px_320px_1fr] gap-4 md:gap-10 py-8 border-b border-brand-purple/20 items-start">
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
                  How a Vigorant brand engagement actually runs.
                </h2>
              </div>
            </Reveal>

            <div className="mt-12 grid lg:grid-cols-[220px_1fr] gap-10 lg:gap-16 items-start">
              <nav aria-label="Phase index" className="hidden lg:block lg:sticky lg:top-28">
                <ol className="list-none p-0 m-0 border-t border-brand-purple/20">
                  {PHASES.map((e) => {
                    return (
                      <li key={e.n} className="border-b border-brand-purple/20">
                        <a
                          href={`#phase-${e.n}`}
                          className="block py-4 font-black text-brand-deep/55 hover:text-brand-purple"
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
                    <span className="section-label inline-block px-3 py-1 rounded-full bg-brand-purple/8 border border-brand-purple/20 text-brand-purple">
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
                  The branding blueprint.
                </h2>
                <p className="mt-5 text-[16px] leading-[1.7] text-ink-muted">
                  Every phase has defined inputs and defined deliverables — no mystery, no scope drift, no "design decks" without a strategy underneath.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 flex flex-col gap-4">
              {BLUEPRINT.map((b, i) => (
                <Reveal key={b.area} delay={i * 0.04}>
                  <div
                    className="grid grid-cols-1 md:grid-cols-[200px_1fr_1fr] rounded-2xl overflow-hidden"
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
                <Eyebrow light>Brand adapter</Eyebrow>
                <h2
                  id="adapter-h2"
                  className="font-display text-white mt-4 leading-[1.1] tracking-tight"
                  style={{ fontSize: "clamp(26px, 4.2vw, 42px)", letterSpacing: "-0.03em" }}
                >
                  The same framework, tuned to your specialty and market.
                </h2>
                <p className="mt-5 text-[16px] leading-[1.7] text-white/75">
                  Dental, medical, and chiropractic brands share the same physics — recognition, trust, and consistency. The expression adapts to the specifics of your specialty, patient profile, and local market.
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
                    What the brand customizes
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
                              Entity-based brand signals and{" "}
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
                  className="group bg-background p-6 sm:p-7 flex flex-col gap-2 transition-colors"
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
                  Common questions practices ask before committing to a branding or rebranding engagement.
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
              <Eyebrow light>Ready to be the brand patients remember?</Eyebrow>
              <h2
                id="cta-h2"
                className="font-display text-white mt-4 leading-[1.1] tracking-tight"
                style={{ fontSize: "clamp(30px, 5vw, 52px)", letterSpacing: "-0.03em" }}
              >
                Build a brand that earns trust before the first appointment.
              </h2>
              <p className="mt-5 text-[16.5px] leading-[1.7] text-white/75">
                Start with a brand audit. We'll map perception gaps, competitor positioning, and the highest-leverage moves to unlock growth across every channel you already run.
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
                  Request a Brand Audit <ArrowRight className="w-4 h-4" />
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
