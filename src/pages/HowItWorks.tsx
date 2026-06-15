import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, Search, Wrench, Rocket, TrendingUp, Brain, Check, X,
  BarChart2, Calendar, ShieldCheck, Eye,
} from "lucide-react";
import { Counter, useTilt } from "@/components/site/GlobalFx";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";

const ease = [0.16, 1, 0.3, 1] as const;
function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span className="block" initial={{ y: "108%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay, ease }}>{children}</motion.span>
    </span>
  );
}
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease }} className={className}>{children}</motion.div>
  );
}
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useTilt() as React.RefObject<HTMLDivElement>;
  return <div ref={ref} className={className}>{children}</div>;
}

const BASE = "https://vigorant.com";

const PHASES = [
  { n: "01", icon: Search, h: "Diagnose", b: "Audit visibility, website, paid, AI presence, reputation, and conversion gaps. Build a prioritized 90-day plan.", deliverables: ["Full visibility audit", "Competitor gap analysis", "AI search readiness score", "Prioritized roadmap"] },
  { n: "02", icon: Wrench, h: "Build", b: "Fix the foundation: technical SEO, GBP, schema, tracking, website CRO, landing pages, paid infrastructure.", deliverables: ["Tracking + analytics setup", "Schema + entity graph", "Landing pages + CRO", "Ads account architecture"] },
  { n: "03", icon: Rocket, h: "Launch", b: "Activate the engine: SEO content, AI search assets, paid campaigns, reputation flows, reporting dashboard.", deliverables: ["Content + AI asset rollout", "Paid campaigns live", "Review + reputation flows", "Dashboard go-live"] },
  { n: "04", icon: TrendingUp, h: "Compound", b: "Optimize, expand, and compound. Monthly strategy calls, weekly experiments, quarterly system reviews.", deliverables: ["Monthly strategy calls", "Weekly optimization cycles", "Quarterly system reviews", "Continuous expansion"] },
];

const FIRST_90 = [
  { d: "Days 1–14", h: "Diagnose & plan", b: "Audits complete, scoreboard defined, 90-day roadmap delivered." },
  { d: "Days 15–45", h: "Build & instrument", b: "Tracking, schema, CRO, paid infrastructure, content engine — all in place." },
  { d: "Days 46–90", h: "Launch & accelerate", b: "Campaigns live, content publishing, AI assets indexed, first lift measured." },
];

const ANTI = [
  "We will never guarantee #1 rankings.",
  "We will never lock you into a long contract you cannot exit.",
  "We will never hide where your spend goes.",
  "We will never charge for vanity metrics or impressions.",
  "We will never run paid campaigns without conversion tracking.",
];

const FAQS = [
  { q: "What is the Vigorant process?", a: "Vigorant runs a four-phase system: Diagnose, Build, Launch, Compound. Each engagement begins with a full audit and a prioritized 90-day roadmap, then moves into instrumentation, activation, and continuous optimization." },
  { q: "How is this different from a typical agency engagement?", a: "Typical agencies sell deliverables and check them off a list. Vigorant operates an integrated growth engine where every layer feeds the next, governed by a single scoreboard the practice owner can read at a glance." },
  { q: "How transparent is reporting?", a: "Every client gets a live dashboard, monthly strategy calls, and the exact pipeline metrics that map marketing spend to booked patients. No black boxes, no vanity slides." },
  { q: "How long until we see results?", a: "Paid advertising lifts within weeks. SEO and AI visibility compound over months. Your roadmap defines the realistic timeline for your specialty, market, and starting point." },
  { q: "Do you require a long-term contract?", a: "No. Engagements are month-to-month after the initial build phase. We earn the next month every month." },
  { q: "Who runs my account day-to-day?", a: "A dedicated strategist owns your account and coordinates the specialist pods — SEO, paid, web, AI, reputation — that contribute to your engine." },
  { q: "How does Vigorant use AI in the process?", a: "AI accelerates research, content production, entity mapping, and reporting — but every output is reviewed by a human strategist. We use AI to compound expertise, never to replace it." },
  { q: "What happens if results are not where they should be?", a: "We diagnose, adjust, and report transparently. The scoreboard makes underperformance visible immediately — and recovery plans are part of every monthly review." },
];

function HowSeo() {
  const webPage = {
    "@context": "https://schema.org", "@type": "WebPage",
    "@id": `${BASE}/how-it-works#webpage`, url: `${BASE}/how-it-works`,
    name: "How Vigorant Works — Diagnose, Build, Launch, Compound",
    description: "The Vigorant four-phase growth process: Diagnose, Build, Launch, Compound. Transparent reporting, no long contracts, no vanity metrics.",
  };
  const breadcrumb = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
      { "@type": "ListItem", position: 2, name: "How It Works", item: `${BASE}/how-it-works` },
    ],
  };
  const howTo = {
    "@context": "https://schema.org", "@type": "HowTo",
    name: "How Vigorant builds a healthcare practice growth engine",
    step: PHASES.map((p, i) => ({ "@type": "HowToStep", position: i + 1, name: p.h, text: p.b })),
  };
  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: FAQS.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <Helmet>
      <title>How Vigorant Works | 4-Phase Healthcare Growth Process</title>
      <meta name="description" content="Diagnose, Build, Launch, Compound — the transparent 4-phase Vigorant growth process for healthcare practices. No vague promises, no vanity metrics." />
      <link rel="canonical" href="/how-it-works" />
      <meta property="og:title" content="How Vigorant Works | 4-Phase Growth Process" />
      <meta property="og:description" content="Transparent process. Real reporting. Booked-patient outcomes." />
      <meta property="og:url" content="/how-it-works" />
      <meta name="robots" content="index,follow" />
      <script type="application/ld+json">{JSON.stringify(webPage)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      <script type="application/ld+json">{JSON.stringify(howTo)}</script>
      <script type="application/ld+json">{JSON.stringify(faq)}</script>
    </Helmet>
  );
}

export default function HowItWorks() {
  return (
    <>
      <HowSeo />
      <a href="#main" className="skip-link">Skip to main content</a>

      <Nav />
      <main id="main" className="overflow-x-hidden">
        {/* HERO */}
        <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
          <div aria-hidden className="absolute inset-0 z-0 grid-overlay" />
          <div aria-hidden className="absolute -top-16 -right-16 w-[420px] sm:w-[520px] h-[420px] sm:h-[520px] rounded-full pointer-events-none orb-a"
            style={{ background: "radial-gradient(circle, hsl(247 93% 64% / 0.20), transparent 70%)", filter: "blur(80px)" }} />
          <div aria-hidden className="absolute -bottom-12 -left-10 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full pointer-events-none orb-b"
            style={{ background: "radial-gradient(circle, hsl(248 100% 75% / 0.14), transparent 70%)", filter: "blur(60px)" }} />
          <div className="container relative z-10">
            <nav aria-label="Breadcrumb" className="text-sm text-text-muted mb-6">
              <Link to="/" className="hover:text-brand-purple">Home</Link>
              <span className="mx-2" aria-hidden>/</span>
              <span aria-current="page" className="text-text-secondary">How it works</span>
            </nav>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-purple bg-brand-purple/8 border border-brand-purple/20 rounded-full px-4 py-1.5">
              <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-brand-purple pulse-dot" />
              Our process
            </motion.div>
            <h1 className="font-display font-bold text-brand-deep leading-[1.05] mt-5"
              style={{ fontSize: "clamp(36px, 6.5vw, 72px)", letterSpacing: "-0.03em" }}>
              <Line delay={0.4}>Predictable growth,</Line>
              <Line delay={0.55}><span className="gradient-text">built as a system.</span></Line>
            </h1>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.0 }}
              className="mt-6 max-w-2xl text-lg text-text-secondary leading-[1.7]">
              Vigorant runs a four-phase growth process — Diagnose, Build, Launch, Compound — with transparent
              dashboards, monthly strategy calls, and a single scoreboard that maps spend to booked patients.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.15 }}
              className="mt-8 flex flex-wrap gap-3">
              <a href="#phase-system" className="btn-primary-grad font-semibold px-6 py-3 rounded-full inline-flex items-center transition-transform hover:-translate-y-0.5">
                See the system <ArrowRight aria-hidden className="ml-2" size={18} />
              </a>
              <a href="#audit" className="btn-secondary-outline inline-flex items-center justify-center gap-2 rounded-full font-semibold px-6 py-3">
                Book a free audit
              </a>
            </motion.div>
          </div>
        </section>

        {/* CONTRAST */}
        <section className="py-20 sm:py-28 text-white" style={{ background: "var(--gradient-dark)" }}>
          <div className="container">
            <Reveal className="max-w-2xl">
              <span className="section-label-light">Why most engagements fail</span>
              <h2 className="font-extrabold mt-3" style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.03em" }}>
                Tactics decay. Systems compound.
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-5 mt-12">
              {[
                { h: "The tactic-vendor model", items: ["Sells deliverables, not outcomes", "Black-box reporting", "Disconnected channels", "Credit-claiming over patients won"] },
                { h: "The Vigorant growth system", items: ["Sells booked patients", "Live dashboards, monthly calls", "One integrated engine", "Scoreboard ties spend to revenue"] },
              ].map((b, i) => (
                <Reveal key={b.h} delay={i * 0.06} className="h-full">
                  <div className="rounded-2xl bg-white/5 border border-white/15 p-7 backdrop-blur h-full">
                    <h3 className="font-bold text-xl">{b.h}</h3>
                    <ul className="mt-4 space-y-3">
                      {b.items.map(it => (
                        <li key={it} className="flex gap-3 text-white/85">
                          {i === 0
                            ? <X size={18} className="text-rose-300 flex-shrink-0 mt-1" aria-hidden />
                            : <Check size={18} className="text-emerald-300 flex-shrink-0 mt-1" aria-hidden />}
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 4-PHASE SYSTEM */}
        <section id="phase-system" className="py-20 sm:py-28 bg-surface-secondary">
          <div className="container">
            <Reveal className="max-w-2xl">
              <span className="section-label">The 4-phase system</span>
              <h2 className="font-extrabold text-brand-deep mt-3" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                Diagnose. Build. Launch. Compound.
              </h2>
            </Reveal>
            <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
              {PHASES.map((p, i) => (
                <Reveal key={p.n} delay={i * 0.05} className="h-full">
                  <li className="rounded-2xl bg-white border border-brand-purple/12 p-6 h-full">
                    <div className="flex items-center gap-3">
                      <span className="font-mono-ui text-sm text-brand-purple">{p.n}</span>
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-brand)" }}>
                        <p.icon aria-hidden size={18} className="text-white" />
                      </div>
                    </div>
                    <h3 className="font-bold text-brand-deep text-xl mt-4">{p.h}</h3>
                    <p className="mt-2 text-text-secondary text-sm">{p.b}</p>
                    <ul className="mt-4 space-y-1.5">
                      {p.deliverables.map(d => (
                        <li key={d} className="flex gap-2 text-xs text-text-muted">
                          <Check size={14} className="text-brand-purple flex-shrink-0 mt-0.5" aria-hidden /> {d}
                        </li>
                      ))}
                    </ul>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* AI LAYER */}
        <section className="py-20 sm:py-28 text-white" style={{ background: "var(--gradient-dark)" }}>
          <div className="container grid lg:grid-cols-2 gap-10 items-center">
            <Reveal>
              <span className="section-label-light">The AI layer</span>
              <h2 className="font-extrabold mt-3" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                AI accelerates the system. Humans run it.
              </h2>
              <p className="mt-5 text-white/80 text-lg">
                We use AI to compound research, content production, entity mapping, and reporting. Every output is
                reviewed by a strategist. The result: more depth, more speed, no shortcuts.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <TiltCard className="rounded-2xl bg-white/5 border border-white/15 p-7 backdrop-blur">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Brain, h: "Entity intelligence" },
                    { icon: Search, h: "AI search readiness" },
                    { icon: BarChart2, h: "Anomaly detection" },
                    { icon: Eye, h: "Visibility monitoring" },
                  ].map(x => (
                    <div key={x.h} className="rounded-xl bg-white/5 p-4 border border-white/10">
                      <x.icon aria-hidden size={20} className="text-brand-lavender" />
                      <p className="mt-2 font-semibold">{x.h}</p>
                    </div>
                  ))}
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </section>

        {/* REPORTING */}
        <section className="py-20 sm:py-28 bg-surface-secondary">
          <div className="container">
            <Reveal className="max-w-2xl">
              <span className="section-label">Reporting & dashboard</span>
              <h2 className="font-extrabold text-brand-deep mt-3" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                One scoreboard. Updated live.
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
              {[
                { icon: Eye, h: "Visibility share" },
                { icon: BarChart2, h: "Channel performance" },
                { icon: Calendar, h: "Booked patients" },
                { icon: ShieldCheck, h: "Reputation health" },
              ].map((m, i) => (
                <Reveal key={m.h} delay={i * 0.05} className="h-full">
                  <div className="rounded-2xl bg-white border border-brand-purple/12 p-6 text-center">
                    <m.icon aria-hidden className="mx-auto text-brand-purple" size={28} />
                    <p className="mt-3 font-bold text-brand-deep">{m.h}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FIRST 90 DAYS */}
        <section className="py-20 sm:py-28">
          <div className="container">
            <Reveal className="max-w-2xl">
              <span className="section-label">First 90 days</span>
              <h2 className="font-extrabold text-brand-deep mt-3" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                What the first quarter looks like.
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-5 mt-12">
              {FIRST_90.map((p, i) => (
                <Reveal key={p.h} delay={i * 0.06} className="h-full">
                  <TiltCard className="rounded-2xl bg-white border border-brand-purple/12 p-7 h-full">
                    <span className="font-mono-ui text-sm text-brand-purple">{p.d}</span>
                    <h3 className="font-bold text-brand-deep text-xl mt-2">{p.h}</h3>
                    <p className="mt-3 text-text-secondary">{p.b}</p>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ANTI-PROMISES */}
        <section className="py-20 sm:py-28 bg-surface-secondary">
          <div className="container max-w-3xl">
            <Reveal>
              <span className="section-label">Our anti-promises</span>
              <h2 className="font-extrabold text-brand-deep mt-3" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                What we will never do.
              </h2>
            </Reveal>
            <ul className="mt-10 space-y-3">
              {ANTI.map((a, i) => (
                <Reveal key={a} delay={i * 0.04} className="h-full">
                  <li className="flex gap-3 rounded-xl bg-white border border-brand-purple/12 p-5">
                    <X size={20} className="text-rose-500 flex-shrink-0 mt-0.5" aria-hidden />
                    <span className="text-text-secondary">{a}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* PROOF */}
        <section className="py-20 sm:py-28 text-white" style={{ background: "var(--gradient-dark)" }}>
          <div className="container">
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { n: 92, suf: "%", h: "Client retention beyond 12 months" },
                { n: 4.9, suf: "★", h: "Avg practice satisfaction", d: 1 },
                { n: 312, suf: "%", h: "Avg patient growth in 12 months" },
              ].map((m, i) => (
                <Reveal key={m.h} delay={i * 0.05} className="h-full">
                  <div className="rounded-2xl bg-white/5 border border-white/15 p-7 text-center backdrop-blur">
                    <div className="text-5xl font-extrabold bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-text)" }}>
                      <Counter to={m.n} decimals={m.d ?? 0} suffix={m.suf} />
                    </div>
                    <p className="mt-3 text-white/80">{m.h}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 sm:py-28 bg-surface-secondary">
          <div className="container max-w-3xl">
            <Reveal>
              <span className="section-label">FAQ</span>
              <h2 className="font-extrabold text-brand-deep mt-3" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                Process questions, answered.
              </h2>
            </Reveal>
            <dl className="mt-10 space-y-3">
              {FAQS.map((f, i) => (
                <Reveal key={f.q} delay={i * 0.03} className="h-full">
                  <details className="group rounded-xl bg-white border border-brand-purple/12 p-5 open:border-brand-purple/30">
                    <summary className="cursor-pointer flex justify-between items-start gap-4 font-semibold text-brand-deep list-none">
                      <span>{f.q}</span>
                      <span className="text-brand-purple transition-transform group-open:rotate-45 text-2xl leading-none flex-shrink-0">+</span>
                    </summary>
                    <p className="mt-3 text-text-secondary">{f.a}</p>
                  </details>
                </Reveal>
              ))}
            </dl>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="audit" className="py-20 sm:py-28 text-white" style={{ background: "var(--gradient-dark)" }}>
          <div className="container max-w-3xl text-center">
            <Reveal>
              <span className="section-label-light">Start the system</span>
              <h2 className="font-extrabold mt-3" style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.03em" }}>
                See exactly what your first 90 days would look like.
              </h2>
              <a href="#book" className="mt-8 inline-flex items-center px-7 py-3.5 rounded-full bg-white text-brand-deep font-bold hover:bg-brand-lavender transition-colors">
                Book your free audit <ArrowRight size={18} className="ml-2" aria-hidden />
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
