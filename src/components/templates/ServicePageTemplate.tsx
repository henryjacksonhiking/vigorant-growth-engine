import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { ArrowRight, Check, ExternalLink, Quote, X as XIcon } from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { Reveal } from "@/components/site/PainPageShell";
import SharedFAQList from "@/components/site/SharedFAQ";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export interface ServicePageContent {
  meta: {
    title: string;
    description: string;
    canonicalUrl: string;
    ogTitle?: string;
    ogDescription?: string;
    twitterTitle?: string;
    twitterDescription?: string;
  };
  hero: {
    breadcrumbs: { label: string; href: string }[];
    h1: string;
    subtext: ReactNode;
    primaryCTA: { label: string; href: string };
    secondaryCTA: { label: string; href: string };
  };
  stats: { value: string; label: string; footnote?: string }[];
  problem: {
    h2: string;
    body: ReactNode;
    contrastRows: { without: string; with: string }[];
  };
  definition: {
    h2: string;
    definitionParagraph: string;
    pillars: { icon: string; label: string }[];
  };
  frameworkSteps: { step: number; h3: string; description: string }[];
  aiSection: {
    h2: string;
    body: ReactNode;
    chips: string[];
    pullQuote: string;
    pullQuoteSource?: string;
    externalLink?: { precede: string; text: string; href: string; follow: string };
  };
  included: { h2: string; leftHeading: string; items: string[]; rightHeading: string; bestFit: { icon: string; label: string }[]; whyVigorant: { stat: string; description: string }[] };
  relatedLinks: { h2: string; items: { label: string; href: string }[] };
  faqs: { question: string; answer: string }[];
  finalCTA: {
    h2: string;
    subtext: string;
    primaryCTA: { label: string; href: string };
    secondaryCTA: { label: string; href: string };
    trustSignals: string[];
  };
  schemas: object[];
  lastUpdated: string;
}

export default function ServicePageTemplate({ pageContent: c }: { pageContent: ServicePageContent }) {
  return (
    <>
      <Helmet>
        <title>{c.meta.title}</title>
        <meta name="description" content={c.meta.description} />
        <link rel="canonical" href={c.meta.canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={c.meta.ogTitle ?? c.meta.title} />
        <meta property="og:description" content={c.meta.ogDescription ?? c.meta.description} />
        <meta property="og:url" content={c.meta.canonicalUrl} />
        <meta property="og:site_name" content="Vigorant" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={c.meta.twitterTitle ?? c.meta.title} />
        <meta name="twitter:description" content={c.meta.twitterDescription ?? c.meta.description} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        {c.schemas.map((s, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
        ))}
      </Helmet>

      <Nav />
      <main id="main">
        {/* SECTION 1 — HERO (dark, two columns, no cards) */}
        <section
          className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20"
          style={{ background: "var(--gradient-dark)" }}
        >
          <div aria-hidden className="absolute inset-0 z-0 grid-overlay opacity-30" />
          <div
            aria-hidden
            className="absolute -top-20 -right-20 w-[480px] h-[480px] rounded-full orb-a"
            style={{ background: "radial-gradient(circle, hsl(247 93% 64% / 0.30), transparent 70%)", filter: "blur(80px)" }}
          />
          <div className="container relative z-10 grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
            <div>
              <nav aria-label="Breadcrumb" className="mb-5">
                <ol className="font-mono-ui text-[11px] uppercase tracking-[0.12em] text-white/60 flex flex-wrap items-center gap-2 list-none p-0">
                  {c.hero.breadcrumbs.map((b, i) => {
                    const last = i === c.hero.breadcrumbs.length - 1;
                    return (
                      <span key={b.href + i} className="contents">
                        <li>
                          {last ? (
                            <span aria-current="page" className="text-white">{b.label}</span>
                          ) : (
                            <Link to={b.href} className="hover:text-brand-bright transition-colors">{b.label}</Link>
                          )}
                        </li>
                        {!last && <li aria-hidden className="text-white/30">/</li>}
                      </span>
                    );
                  })}
                </ol>
              </nav>

              <h1
                className="font-display font-bold text-white leading-[1.05] tracking-tight"
                style={{ fontSize: "clamp(34px, 6.5vw, 64px)", letterSpacing: "-0.03em" }}
              >
                {c.hero.h1}
              </h1>

              <p className="mt-6 text-[17px] sm:text-[19px] text-white/85 leading-[1.6] max-w-[620px]">
                {c.hero.subtext}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to={c.hero.primaryCTA.href}
                  className="btn-primary-grad inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold min-h-[48px]"
                  aria-label={c.hero.primaryCTA.label}
                >
                  {c.hero.primaryCTA.label} <ArrowRight aria-hidden size={18} />
                </Link>
                <Link
                  to={c.hero.secondaryCTA.href}
                  className="btn-on-dark-outline inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold min-h-[48px]"
                >
                  {c.hero.secondaryCTA.label}
                </Link>
              </div>

              <p className="mt-6 font-mono-ui text-[11px] uppercase tracking-[0.12em] text-white/55">
                Last updated · {c.lastUpdated}
              </p>
            </div>

            {/* Right: animated abstract strategy network SVG */}
            <div className="relative h-[320px] sm:h-[420px] lg:h-[460px] hidden md:block" aria-hidden>
              <StrategyNetworkSVG />
            </div>
          </div>
        </section>

        {/* SECTION 2 — STAT RAIL */}
        <section className="bg-surface-secondary border-y border-brand-purple/10">
          <div className="container py-10 sm:py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0 items-center text-center">
              {c.stats.map((s, i) => (
                <div key={s.label} className="relative px-4 md:px-6">
                  <div className="font-display font-bold text-brand-deep" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", lineHeight: 1 }}>
                    {s.value}
                  </div>
                  <div className="mt-2 text-[13px] sm:text-[14px] text-text-secondary leading-snug">
                    {s.label}
                  </div>
                  {i < c.stats.length - 1 && (
                    <div aria-hidden className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 h-10 w-px bg-brand-purple/15" />
                  )}
                </div>
              ))}
            </div>
            {c.stats.some((s) => s.footnote) && (
              <p className="mt-6 text-center font-mono-ui text-[11px] text-text-muted">
                {c.stats.find((s) => s.footnote)?.footnote}
              </p>
            )}
          </div>
        </section>

        {/* SECTION 3 — PROBLEM (two-column split, contrast table) */}
        <section className="bg-background py-20 sm:py-24">
          <div className="container grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <Reveal>
              <span className="section-label inline-block px-3 py-1 rounded-full bg-brand-purple/8 border border-brand-purple/20">The Problem</span>
              <h2 className="mt-4 font-extrabold text-brand-deep leading-[1.1]" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                {c.problem.h2}
              </h2>
              <p className="mt-5 text-[16px] sm:text-[17px] text-text-secondary leading-[1.75]">
                {c.problem.body}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl overflow-hidden border border-brand-purple/12 bg-white">
                <div className="grid grid-cols-2 text-[11px] uppercase tracking-[0.12em] font-mono-ui">
                  <div className="px-4 py-3 bg-destructive/8 text-destructive border-b border-brand-purple/10">Without Strategy</div>
                  <div className="px-4 py-3 bg-brand-purple/8 text-brand-purple border-b border-brand-purple/10">With Strategy</div>
                </div>
                {c.problem.contrastRows.map((r, i) => (
                  <div key={i} className={`grid grid-cols-2 ${i < c.problem.contrastRows.length - 1 ? "border-b border-brand-purple/8" : ""}`}>
                    <div className="px-4 py-3 sm:py-4 flex items-start gap-2 text-[14px] sm:text-[15px] text-text-secondary">
                      <XIcon aria-hidden size={16} className="mt-0.5 shrink-0 text-destructive/70" />
                      <span>{r.without}</span>
                    </div>
                    <div className="px-4 py-3 sm:py-4 flex items-start gap-2 text-[14px] sm:text-[15px] text-brand-deep font-medium bg-brand-purple/4">
                      <Check aria-hidden size={16} className="mt-0.5 shrink-0 text-brand-purple" />
                      <span>{r.with}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* SECTION 4 — DEFINITION + PILLAR ROW (no cards) */}
        <section className="bg-surface-secondary py-20 sm:py-24">
          <div className="container max-w-[920px] mx-auto text-center">
            <Reveal>
              <span className="section-label inline-block px-3 py-1 rounded-full bg-brand-purple/8 border border-brand-purple/20">Definition</span>
              <h2 className="mt-4 font-extrabold text-brand-deep leading-[1.1]" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                {c.definition.h2}
              </h2>
              <p className="mt-6 text-[17px] sm:text-[19px] text-text-secondary leading-[1.7] max-w-[760px] mx-auto">
                {c.definition.definitionParagraph}
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-10">
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 sm:gap-6">
                {c.definition.pillars.map((p) => (
                  <div key={p.label} className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-[20px]" aria-hidden>
                      {p.icon}
                    </div>
                    <div className="mt-3 text-[13px] sm:text-[14px] font-semibold text-brand-deep leading-snug">
                      {p.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* SECTION 5 — FRAMEWORK (vertical timeline stepper, dark) */}
        <section className="relative overflow-hidden py-20 sm:py-24" style={{ background: "var(--gradient-dark)" }}>
          <div className="container max-w-[860px] mx-auto">
            <Reveal className="text-center">
              <span className="section-label-light">Framework</span>
              <h2 className="mt-4 font-extrabold text-white leading-[1.1]" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                Our Marketing Strategy Framework
              </h2>
            </Reveal>

            <ol className="mt-12 relative list-none p-0">
              <div aria-hidden className="absolute left-5 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-brand-bright/60 via-brand-purple/40 to-transparent" />
              {c.frameworkSteps.map((s, i) => (
                <li key={s.step} className="relative pl-16 sm:pl-20 pb-10 last:pb-0">
                  <div className="absolute left-0 top-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-display font-bold text-white text-[16px] sm:text-[18px] shadow-[var(--shadow-glow)]" style={{ background: "var(--gradient-brand)" }}>
                    {s.step}
                  </div>
                  <Reveal delay={i * 0.06}>
                    <h3 className="text-white font-bold text-[18px] sm:text-[22px] leading-[1.25]">{s.h3}</h3>
                    <p className="mt-2 text-white/80 text-[15px] sm:text-[16px] leading-[1.7]">{s.description}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* SECTION 6 — AI POWERED (chips cluster) */}
        <section className="bg-background py-20 sm:py-24">
          <div className="container grid lg:grid-cols-[1fr_1fr] gap-12 items-start">
            <Reveal>
              <span className="section-label inline-block px-3 py-1 rounded-full bg-brand-purple/8 border border-brand-purple/20">AI Visibility</span>
              <h2 className="mt-4 font-extrabold text-brand-deep leading-[1.1]" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                {c.aiSection.h2}
              </h2>
              <p className="mt-5 text-[16px] sm:text-[17px] text-text-secondary leading-[1.75]">
                {c.aiSection.body}
                {c.aiSection.externalLink && (
                  <>
                    {" "}{c.aiSection.externalLink.precede}{" "}
                    <a
                      href={c.aiSection.externalLink.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-purple font-semibold underline underline-offset-4 hover:text-brand-deep inline-flex items-center gap-1"
                    >
                      {c.aiSection.externalLink.text}
                      <ExternalLink aria-hidden size={13} />
                    </a>
                    {c.aiSection.externalLink.follow}
                  </>
                )}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {c.aiSection.chips.map((chip, i) => (
                  <Badge
                    key={chip}
                    variant="secondary"
                    className={`text-[13px] sm:text-[14px] font-medium px-4 py-2 rounded-full border transition-all hover:-translate-y-0.5 ${
                      i % 3 === 0
                        ? "bg-brand-purple/10 text-brand-purple border-brand-purple/25"
                        : i % 3 === 1
                        ? "bg-brand-bright/15 text-brand-deep border-brand-bright/30"
                        : "bg-surface-secondary text-brand-deep border-brand-purple/15"
                    }`}
                  >
                    {chip}
                  </Badge>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="container mt-12">
            <Reveal>
              <blockquote className="relative max-w-[920px] mx-auto pl-6 sm:pl-8 py-5 sm:py-6 border-l-4 border-brand-purple bg-surface-secondary rounded-r-xl">
                <Quote aria-hidden size={20} className="absolute -left-3 top-5 bg-background rounded-full text-brand-purple" />
                <p className="text-[16px] sm:text-[18px] text-brand-deep leading-[1.7] font-medium italic">
                  "{c.aiSection.pullQuote}"
                </p>
                {c.aiSection.pullQuoteSource && (
                  <footer className="mt-3 font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-purple">
                    — {c.aiSection.pullQuoteSource}
                  </footer>
                )}
              </blockquote>
            </Reveal>
          </div>
        </section>

        {/* SECTION 7 — INCLUDED / BEST FIT / WHY (dark, two cols, checklist + icon rows) */}
        <section className="relative overflow-hidden py-20 sm:py-24" style={{ background: "var(--gradient-dark)" }}>
          <div className="container">
            <Reveal className="text-center max-w-[760px] mx-auto">
              <span className="section-label-light">What You Get</span>
              <h2 className="mt-4 font-extrabold text-white leading-[1.1]" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                {c.included.h2}
              </h2>
            </Reveal>

            <div className="mt-12 grid lg:grid-cols-2 gap-10 lg:gap-16">
              {/* Left checklist */}
              <Reveal>
                <h3 className="text-white font-bold text-[18px] sm:text-[20px] mb-5">{c.included.leftHeading}</h3>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 list-none p-0">
                  {c.included.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-white/90 text-[15px] leading-[1.55]">
                      <span aria-hidden className="mt-0.5 w-5 h-5 rounded-full bg-brand-bright/20 border border-brand-bright/40 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-brand-bright" />
                      </span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* Right best-fit + why */}
              <Reveal delay={0.1}>
                <h3 className="text-white font-bold text-[18px] sm:text-[20px] mb-5">{c.included.rightHeading}</h3>
                <ul className="space-y-3 list-none p-0">
                  {c.included.bestFit.map((b) => (
                    <li key={b.label} className="flex items-center gap-3 text-white/90 text-[15px]">
                      <span aria-hidden className="text-[20px] w-9 h-9 rounded-full bg-white/8 border border-white/15 flex items-center justify-center">
                        {b.icon}
                      </span>
                      <span>{b.label}</span>
                    </li>
                  ))}
                </ul>

                <Separator className="my-8 bg-white/10" />

                <div className="space-y-4">
                  {c.included.whyVigorant.map((w) => (
                    <div key={w.stat} className="flex gap-4 items-start">
                      <div className="font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-bright shrink-0 pt-1 min-w-[150px]">
                        {w.stat}
                      </div>
                      <p className="text-white/85 text-[14px] leading-[1.6]">{w.description}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SECTION 8 — RELATED LINKS (pill links, not cards) */}
        <section className="bg-background py-16 sm:py-20">
          <div className="container">
            <h2 className="font-mono-ui text-[12px] uppercase tracking-[0.14em] text-text-muted text-center">
              {c.relatedLinks.h2}
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-2.5 sm:gap-3">
              {c.relatedLinks.items.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-full border border-brand-purple/20 bg-surface-secondary text-[13px] sm:text-[14px] font-medium text-brand-deep hover:border-brand-purple hover:bg-brand-purple/8 hover:text-brand-purple transition-colors"
                >
                  {l.label}
                  <ArrowRight aria-hidden size={14} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9 — FAQ (accordion, not cards) */}
        <section className="bg-surface-secondary py-20 sm:py-24">
          <div className="container max-w-[820px] mx-auto">
            <Reveal className="text-center">
              <span className="section-label inline-block px-3 py-1 rounded-full bg-brand-purple/8 border border-brand-purple/20">FAQ</span>
              <h2 className="mt-4 font-extrabold text-brand-deep leading-[1.1]" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                Frequently Asked Questions
              </h2>
            </Reveal>

            <SharedFAQList faqs={c.faqs} />

          </div>
        </section>

        {/* SECTION 10 — FINAL CTA */}
        <section className="relative overflow-hidden py-20 sm:py-24" style={{ background: "var(--gradient-dark)" }}>
          <div
            aria-hidden
            className="absolute inset-0 opacity-40"
            style={{ background: "radial-gradient(circle at 50% 0%, hsl(247 93% 64% / 0.35), transparent 60%)", filter: "blur(80px)" }}
          />
          <div className="container relative max-w-[760px] mx-auto text-center">
            <Reveal>
              <h2 className="font-extrabold text-white leading-[1.1]" style={{ fontSize: "clamp(30px, 5vw, 52px)", letterSpacing: "-0.03em" }}>
                {c.finalCTA.h2}
              </h2>
              <p className="mt-5 text-white/90 text-[16px] sm:text-[17px] leading-[1.75] max-w-[620px] mx-auto">
                {c.finalCTA.subtext}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center flex-wrap">
                <Link
                  to={c.finalCTA.primaryCTA.href}
                  className="btn-on-dark inline-flex items-center justify-center gap-2 rounded-full inline-flex items-center justify-center gap-2 px-7 py-3.5 font-bold"
                >
                  {c.finalCTA.primaryCTA.label} <ArrowRight aria-hidden size={18} />
                </Link>
                <Link
                  to={c.finalCTA.secondaryCTA.href}
                  className="btn-on-dark-outline inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold min-h-[48px]"
                >
                  {c.finalCTA.secondaryCTA.label}
                </Link>
              </div>
              <p className="mt-8 font-mono-ui text-[11px] uppercase tracking-[0.12em] text-white/70">
                {c.finalCTA.trustSignals.join(" · ")}
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function StrategyNetworkSVG() {
  return (
    <svg viewBox="0 0 460 460" className="w-full h-full" role="img" aria-label="Abstract strategy network graphic">
      <defs>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(248 100% 75%)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="hsl(247 93% 64%)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(248 100% 75%)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="hsl(247 93% 64%)" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      {[
        ["230,80", "120,180"], ["230,80", "340,180"],
        ["120,180", "80,320"], ["120,180", "230,260"],
        ["340,180", "230,260"], ["340,180", "380,320"],
        ["230,260", "80,320"], ["230,260", "380,320"],
        ["80,320", "230,380"], ["380,320", "230,380"],
        ["230,260", "230,380"],
      ].map(([a, b], i) => {
        const [x1, y1] = a.split(",").map(Number);
        const [x2, y2] = b.split(",").map(Number);
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#lineGrad)" strokeWidth="1.2" />
        );
      })}
      {[
        [230, 80, 8], [120, 180, 6], [340, 180, 6], [230, 260, 10], [80, 320, 6], [380, 320, 6], [230, 380, 7],
      ].map(([x, y, r], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={(r as number) * 3} fill="url(#nodeGlow)" opacity="0.55">
            <animate attributeName="opacity" values="0.25;0.7;0.25" dur={`${3 + (i % 3)}s`} repeatCount="indefinite" />
          </circle>
          <circle cx={x} cy={y} r={r as number} fill="hsl(248 100% 88%)" />
        </g>
      ))}
    </svg>
  );
}
