import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, Target, Compass, Brain, Stethoscope, Activity, Smile,
  Sparkles, Check, X, Users, Award, BarChart2, ShieldCheck, Heart,
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

const BASE = "https://vigorant.com";

const FAQS = [
  { q: "Who founded Vigorant?", a: "Vigorant was founded by Hamid Baher, who leads the company as Founder and CEO. The agency was built around a single conviction: that healthcare practices deserve a marketing partner who treats growth as a measurable system, not a stack of disconnected tactics." },
  { q: "Why does Vigorant focus only on healthcare practices?", a: "Healthcare practices have unique patient acquisition dynamics — local intent, regulated trust signals, specialty-specific search behavior, and high-stakes booking decisions. Focusing exclusively on dental, chiropractic, and medical practices lets Vigorant compound expertise that horizontal agencies never develop." },
  { q: "What makes Vigorant different from a typical marketing agency?", a: "Typical agencies sell tasks. Vigorant sells a growth system. Every engagement is built around a unified patient acquisition engine that connects SEO, AI search visibility, paid advertising, website conversion, and reputation into one measurable flywheel." },
  { q: "What is the Vigorant Growth Engine?", a: "The Vigorant Growth Engine is the integrated framework that ties together visibility, traffic, conversion, retention, and measurement. It is the operating system that turns marketing spend into predictable new patient flow." },
  { q: "Is Vigorant AI-forward?", a: "Yes. Vigorant builds for both classic search engines and AI-powered answer engines — Google AI Overviews, ChatGPT, Perplexity, Claude, and Gemini — so practices appear in the new generation of patient research journeys." },
  { q: "How does Vigorant measure success?", a: "Success is measured by booked patients, qualified leads, channel ROI, and visibility share — not impressions or vanity metrics. Every engagement has a clear scoreboard that the practice owner can read at a glance." },
  { q: "Is my practice the right fit for Vigorant?", a: "Vigorant fits practices that want measurable, system-driven growth and are willing to invest in long-term compounding visibility. It is not a fit for owners looking for the cheapest possible vendor or one-month miracles." },
  { q: "How do I start working with Vigorant?", a: "The first step is a Free Practice Growth Audit. Vigorant reviews your current visibility, website, competitor landscape, AI search presence, and conversion gaps and gives you a prioritized growth plan." },
];

const VALUES = [
  { icon: Target, h: "Outcomes over outputs", b: "We measure success in booked patients, not deliverables. Every dashboard rolls up to revenue." },
  { icon: Brain, h: "Systems over tactics", b: "Tactics decay. Systems compound. Every engagement plugs into one growth engine." },
  { icon: ShieldCheck, h: "Transparency over theater", b: "Real numbers, real dashboards, real meetings. No vanity slides, no hidden math." },
  { icon: Heart, h: "Specialization over scale", b: "We say no to industries we do not understand. Healthcare practices are the only thing we do." },
];

const TEAM = [
  { name: "Hamid Baher", role: "Founder & CEO", bio: "Leads strategy, partnerships, and the long-term direction of Vigorant.", initials: "HB" },
  { name: "Growth Strategy", role: "Senior Strategists", bio: "Specialty leads embedded with dental, medical, and chiropractic accounts.", initials: "GS" },
  { name: "AI Search Practice", role: "AEO / GEO Engineers", bio: "Build entity graphs, schema architectures, and answer-engine readiness.", initials: "AI" },
  { name: "Paid Media", role: "Performance Team", bio: "Run conversion-tracked paid campaigns across Google, Meta, and YouTube.", initials: "PM" },
  { name: "Web & CRO", role: "Design + Engineering", bio: "Ship fast, accessible websites engineered to convert intent into booked visits.", initials: "WE" },
  { name: "Reputation & Content", role: "Editorial + RM", bio: "Build the trust layer: reviews, narrative, social proof, and editorial authority.", initials: "RC" },
];

const RIGHT_FIT = [
  "You want predictable, measurable growth",
  "You value long-term compounding visibility",
  "You want a single partner across SEO, AI, paid, web, and reputation",
  "You will invest in a real growth system, not the cheapest vendor",
  "You want clarity in reporting and accountability in execution",
];
const WRONG_FIT = [
  "You want guaranteed page-one in 30 days",
  "You want the lowest-priced vendor available",
  "You expect marketing to compensate for operational gaps",
  "You are not prepared to share booking and revenue data",
  "You want a vendor, not a strategic partner",
];

function AboutSeo() {
  const webPage = {
    "@context": "https://schema.org", "@type": "AboutPage",
    "@id": `${BASE}/about#webpage`, url: `${BASE}/about`,
    name: "About Vigorant — Healthcare Practice Growth System",
    description: "Vigorant is a healthcare-only growth agency for dental, medical, and chiropractic practices. Meet our founder, mission, team, and the Vigorant Growth Engine framework.",
  };
  const breadcrumb = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
      { "@type": "ListItem", position: 2, name: "About", item: `${BASE}/about` },
    ],
  };
  const org = {
    "@context": "https://schema.org", "@type": "Organization",
    "@id": `${BASE}/#organization`, name: "Vigorant", url: BASE,
    description: "Healthcare-only marketing agency for dental, medical, and chiropractic practices.",
    founder: { "@type": "Person", name: "Hamid Baher", jobTitle: "Founder & CEO" },
    areaServed: "United States",
  };
  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: FAQS.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <Helmet>
      <title>About Vigorant | Healthcare Growth System for Practices</title>
      <meta name="description" content="Healthcare-only marketing agency building patient acquisition systems for dental, medical, and chiropractic practices." />
      <link rel="canonical" href="/about" />
      <meta property="og:title" content="About Vigorant — Healthcare Growth System" />
      <meta property="og:description" content="The team, mission, and growth engine behind Vigorant." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="/about" />
      <meta name="robots" content="index,follow" />
      <script type="application/ld+json">{JSON.stringify(webPage)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      <script type="application/ld+json">{JSON.stringify(org)}</script>
      <script type="application/ld+json">{JSON.stringify(faq)}</script>
    </Helmet>
  );
}

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useTilt() as React.RefObject<HTMLDivElement>;
  return <div ref={ref} className={className}>{children}</div>;
}

export default function About() {
  return (
    <>
      <AboutSeo />
      <a href="#main" className="skip-link">Skip to main content</a>

      <Nav />
      <main id="main" className="overflow-x-hidden">
        {/* HERO */}
        <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 bg-background overflow-hidden">
          <div aria-hidden className="absolute inset-0 z-0 grid-overlay" />
          <div aria-hidden className="absolute -top-16 -right-16 w-[420px] sm:w-[520px] h-[420px] sm:h-[520px] rounded-full pointer-events-none orb-a"
            style={{ background: "radial-gradient(circle, hsl(247 93% 64% / 0.20), transparent 70%)", filter: "blur(80px)" }} />
          <div aria-hidden className="absolute -bottom-16 -left-10 w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] rounded-full pointer-events-none orb-b"
            style={{ background: "radial-gradient(circle, hsl(248 100% 75% / 0.14), transparent 70%)", filter: "blur(60px)" }} />
          <div className="container relative z-10">
            <nav aria-label="Breadcrumb" className="text-sm text-text-muted mb-6">
              <Link to="/" className="hover:text-brand-purple">Home</Link>
              <span className="mx-2" aria-hidden>/</span>
              <span aria-current="page" className="text-text-secondary">About</span>
            </nav>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-purple bg-brand-purple/8 border border-brand-purple/20 rounded-full px-4 py-1.5">
              <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-brand-purple pulse-dot" />
              About Vigorant
            </motion.div>
            <h1 className="font-display font-bold text-brand-deep leading-[1.05] tracking-tight mt-5"
              style={{ fontSize: "clamp(36px, 6.5vw, 72px)", letterSpacing: "-0.03em" }}>
              <Line delay={0.4}>We build the growth engine</Line>
              <Line delay={0.55}><span className="gradient-text">healthcare practices deserve.</span></Line>
            </h1>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.0 }}
              className="mt-6 max-w-2xl text-lg text-text-secondary leading-[1.7]">
              Vigorant is a healthcare-only marketing agency for dental, medical, and chiropractic practices. We are
              not a tactics shop. We build measurable, integrated patient acquisition systems that compound — month
              after month, year after year.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.15 }}
              className="mt-8 flex flex-wrap gap-3">
              <a href="#audit" className="btn-primary-grad font-semibold px-6 py-3 rounded-full inline-flex items-center transition-transform hover:-translate-y-0.5">
                Get a free growth audit <ArrowRight aria-hidden className="ml-2" size={18} />
              </a>
              <Link to="/how-it-works" className="px-6 py-3 rounded-full border border-brand-purple/25 text-brand-deep font-semibold hover:bg-brand-purple/5 hover:border-brand-purple transition-all">
                See how we work
              </Link>
            </motion.div>
          </div>
        </section>

        {/* MISSION */}
        <section className="py-20 sm:py-28 text-white" style={{ background: "var(--gradient-dark)" }}>
          <div className="container max-w-4xl">
            <Reveal>
              <span className="section-label-light">Our mission</span>
              <h2 className="font-extrabold leading-[1.1] tracking-tight mt-3"
                style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.03em" }}>
                To make healthcare practices{" "}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-text)" }}>
                  unmissable
                </span>{" "}
                in the era of AI search.
              </h2>
              <p className="mt-6 text-lg text-white/80">
                The way patients find care has changed forever. AI Overviews, ChatGPT, Perplexity, Claude, and Gemini are
                rewriting the front door of every practice in America. Most agencies are still optimizing for a world that
                no longer exists. Vigorant is built for the world that is replacing it.
              </p>
              <p className="mt-4 text-lg text-white/80">
                We exist to give practice owners one thing: a system they can trust to grow the business they have spent
                their career building.
              </p>
            </Reveal>
          </div>
        </section>

        {/* WHY WE EXIST */}
        <section className="py-20 sm:py-28 bg-surface-secondary">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <Reveal>
                <span className="section-label">Why we exist</span>
                <h2 className="font-extrabold text-brand-deep leading-[1.1] mt-3" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                  Practice owners deserve better than tactic vendors.
                </h2>
                <p className="mt-5 text-text-secondary text-lg">
                  Every founder we meet tells the same story: they have paid agencies for SEO, for ads, for websites, for
                  social, and none of it connected. Each vendor claimed their slice of credit. Nobody owned the patient.
                </p>
                <p className="mt-4 text-text-secondary text-lg">
                  Vigorant was built to end that pattern. One partner. One engine. One scoreboard.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <TiltCard className="rounded-2xl glass p-8 border border-brand-purple/15">
                  <p className="font-display text-2xl text-brand-deep leading-snug">
                    "I did not start Vigorant to be another agency. I started it because every practice owner I talked to
                    had been failed by the agency model itself."
                  </p>
                  <p className="mt-6 text-text-muted text-sm">— Hamid Baher, Founder & CEO</p>
                </TiltCard>
              </Reveal>
            </div>
          </div>
        </section>

        {/* VALUES / WHAT MAKES US DIFFERENT */}
        <section className="py-20 sm:py-28">
          <div className="container">
            <Reveal className="max-w-2xl">
              <span className="section-label">What makes us different</span>
              <h2 className="font-extrabold text-brand-deep mt-3" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                Four principles that govern every engagement.
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-5 mt-12">
              {VALUES.map((v, i) => (
                <Reveal key={v.h} delay={i * 0.05} className="h-full">
                  <TiltCard className="h-full rounded-2xl bg-white border border-brand-purple/12 p-7 hover:border-brand-purple/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "var(--gradient-brand)" }}>
                      <v.icon aria-hidden size={22} className="text-white" />
                    </div>
                    <h3 className="font-bold text-brand-deep text-xl">{v.h}</h3>
                    <p className="mt-2 text-text-secondary">{v.b}</p>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SPECIALTY FOCUS */}
        <section className="py-20 sm:py-28 text-white" style={{ background: "var(--gradient-dark)" }}>
          <div className="container">
            <Reveal className="max-w-2xl">
              <span className="section-label-light">Specialty focus</span>
              <h2 className="font-extrabold mt-3" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                Three specialties. Zero distractions.
              </h2>
              <p className="mt-5 text-white/75 text-lg">
                We turned away every other industry on purpose. Compound expertise only happens when you specialize.
              </p>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-5 mt-12">
              {[
                { icon: Smile, label: "Dental", body: "Implants, cosmetic, hygiene, family, emergency, ortho.", href: "/solutions/dental" },
                { icon: Activity, label: "Chiropractic", body: "Local pain relief, wellness care, auto injury, sports.", href: "/solutions/chiropractic" },
                { icon: Stethoscope, label: "Medical", body: "Private practice, specialty groups, multi-provider.", href: "/solutions/medical" },
              ].map((s, i) => (
                <Reveal key={s.label} delay={i * 0.06} className="h-full">
                  <TiltCard className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur p-7 h-full">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/10 mb-5">
                      <s.icon aria-hidden size={22} />
                    </div>
                    <h3 className="font-bold text-xl">{s.label}</h3>
                    <p className="mt-2 text-white/75">{s.body}</p>
                    <Link to={s.href} className="mt-5 inline-flex items-center text-brand-lavender hover:text-white font-semibold">
                      Explore {s.label.toLowerCase()} solutions <ArrowRight size={16} className="ml-1.5" aria-hidden />
                    </Link>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* GROWTH ENGINE */}
        <section className="py-20 sm:py-28 bg-surface-secondary">
          <div className="container">
            <Reveal className="max-w-2xl">
              <span className="section-label">The Vigorant Growth Engine</span>
              <h2 className="font-extrabold text-brand-deep mt-3" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                Five layers. One integrated system.
              </h2>
            </Reveal>
            <ol className="grid md:grid-cols-5 gap-4 mt-12">
              {[
                { n: "01", h: "Visibility", b: "SEO, AEO, GEO, GBP, local pack" },
                { n: "02", h: "Demand", b: "Paid search, social, retargeting" },
                { n: "03", h: "Conversion", b: "Website, landing pages, CRO" },
                { n: "04", h: "Trust", b: "Reputation, reviews, content authority" },
                { n: "05", h: "Measurement", b: "Booked-patient analytics" },
              ].map((s, i) => (
                <Reveal key={s.n} delay={i * 0.05} className="h-full">
                  <li className="rounded-2xl bg-white border border-brand-purple/12 p-6 h-full">
                    <span className="font-mono-ui text-sm text-brand-purple">{s.n}</span>
                    <h3 className="font-bold text-brand-deep mt-2">{s.h}</h3>
                    <p className="mt-2 text-text-secondary text-sm">{s.b}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* TEAM */}
        <section className="py-20 sm:py-28">
          <div className="container">
            <Reveal className="max-w-2xl">
              <span className="section-label">Leadership & team</span>
              <h2 className="font-extrabold text-brand-deep mt-3" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                Real operators behind the system.
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
              {TEAM.map((t, i) => (
                <Reveal key={t.name} delay={i * 0.05} className="h-full">
                  <TiltCard className="rounded-2xl bg-white border border-brand-purple/12 p-7 h-full">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ background: "var(--gradient-brand)" }}>
                      {t.initials}
                    </div>
                    <h3 className="font-bold text-brand-deep text-lg mt-4">{t.name}</h3>
                    <p className="text-sm text-brand-purple font-semibold">{t.role}</p>
                    <p className="mt-3 text-text-secondary">{t.bio}</p>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* HOW WE MEASURE */}
        <section className="py-20 sm:py-28 bg-surface-secondary">
          <div className="container">
            <Reveal className="max-w-2xl">
              <span className="section-label">How we measure success</span>
              <h2 className="font-extrabold text-brand-deep mt-3" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                Booked patients. Channel ROI. Visibility share.
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 mt-12">
              {[
                { n: 312, suf: "%", h: "Avg new patient growth" },
                { n: 4.9, suf: "★", h: "Avg client rating", d: 1 },
                { n: 87, suf: "%", h: "Avg lead-to-booking lift" },
                { n: 24, suf: "mo", h: "Avg client retention" },
              ].map((m, i) => (
                <Reveal key={m.h} delay={i * 0.05} className="h-full">
                  <div className="rounded-2xl bg-white border border-brand-purple/12 p-6 text-center">
                    <div className="text-4xl font-extrabold bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-text)" }}>
                      <Counter to={m.n} decimals={m.d ?? 0} suffix={m.suf} />
                    </div>
                    <p className="mt-2 text-text-secondary text-sm">{m.h}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* RIGHT FIT / NOT RIGHT FIT */}
        <section className="py-20 sm:py-28">
          <div className="container">
            <Reveal className="max-w-2xl">
              <span className="section-label">Right fit / not right fit</span>
              <h2 className="font-extrabold text-brand-deep mt-3" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                We are honest about who we serve.
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-5 mt-12">
              <Reveal>
                <div className="rounded-2xl bg-white border-2 border-emerald-200 p-7 h-full">
                  <h3 className="font-bold text-emerald-700 text-xl">A great fit if…</h3>
                  <ul className="mt-5 space-y-3">
                    {RIGHT_FIT.map(item => (
                      <li key={item} className="flex gap-3">
                        <Check size={20} className="text-emerald-600 flex-shrink-0 mt-1" aria-hidden />
                        <span className="text-text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="rounded-2xl bg-white border-2 border-rose-200 p-7 h-full">
                  <h3 className="font-bold text-rose-700 text-xl">Not a fit if…</h3>
                  <ul className="mt-5 space-y-3">
                    {WRONG_FIT.map(item => (
                      <li key={item} className="flex gap-3">
                        <X size={20} className="text-rose-500 flex-shrink-0 mt-1" aria-hidden />
                        <span className="text-text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 sm:py-28 bg-surface-secondary">
          <div className="container max-w-3xl">
            <Reveal>
              <span className="section-label">FAQ</span>
              <h2 className="font-extrabold text-brand-deep mt-3" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                Questions, answered.
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
              <span className="section-label-light">Start with a free audit</span>
              <h2 className="font-extrabold mt-3" style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.03em" }}>
                Find out what your growth engine is missing.
              </h2>
              <p className="mt-5 text-white/80 text-lg">
                A free, no-obligation review of your visibility, website, AI presence, and conversion gaps — with a
                prioritized 90-day plan.
              </p>
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
