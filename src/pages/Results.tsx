import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, Smile, Activity, Stethoscope, Star, TrendingUp, Search,
  Megaphone, Layout, Quote, BarChart2,
} from "lucide-react";
import { Counter, useTilt } from "@/components/site/GlobalFx";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import SharedFAQList from "@/components/site/SharedFAQ";

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

type Case = {
  specialty: "Dental" | "Chiropractic" | "Medical";
  icon: any; client: string; window: string;
  metrics: { value: string; label: string; color: "green" | "blue" | "amber" }[];
  summary: string; quote: string;
};
const CASES: Case[] = [
  {
    specialty: "Dental", icon: Smile, client: "Multi-location dental group, TX", window: "12 months",
    metrics: [
      { value: "+412%", label: "Organic new patients", color: "green" },
      { value: "4.9★", label: "Avg review rating", color: "amber" },
      { value: "+68%", label: "Booking conversion", color: "blue" },
    ],
    summary: "Rebuilt SEO + GBP architecture across four locations, launched conversion-tracked Google Ads, and replaced the legacy website. New-patient pipeline became predictable inside two quarters.",
    quote: "We finally know which marketing dollar is bringing in which patient.",
  },
  {
    specialty: "Chiropractic", icon: Activity, client: "Wellness chiropractic practice, FL", window: "9 months",
    metrics: [
      { value: "+287%", label: "Lead volume", color: "green" },
      { value: "+54%", label: "Booked appointments", color: "blue" },
      { value: "4.8★", label: "Reputation lift", color: "amber" },
    ],
    summary: "Local SEO + reputation system + paid retargeting. Booking flow rebuilt around mobile patients searching pain-relief queries.",
    quote: "Calls went from a trickle to a flood, and our front desk stopped guessing where they came from.",
  },
  {
    specialty: "Medical", icon: Stethoscope, client: "Specialty medical group, CA", window: "12 months",
    metrics: [
      { value: "+248%", label: "Qualified leads", color: "green" },
      { value: "+3.9x", label: "Paid ROAS", color: "blue" },
      { value: "+62%", label: "AI search citations", color: "amber" },
    ],
    summary: "AEO + GEO programme, paid funnel overhaul, and provider-level entity architecture. The practice now appears across Google AI Overviews, Perplexity, and ChatGPT for treatment queries.",
    quote: "We are the practice AI engines now recommend. That changed everything.",
  },
];

const BY_CHANNEL = [
  { icon: Search, h: "SEO & AI Search", n: 312, suf: "%", b: "Avg organic patient growth" },
  { icon: Megaphone, h: "Paid Advertising", n: 4.2, suf: "x", b: "Avg ROAS lift", d: 1 },
  { icon: Layout, h: "Website & CRO", n: 68, suf: "%", b: "Avg conversion lift" },
  { icon: Star, h: "Reputation", n: 4.9, suf: "★", b: "Avg rating delivered", d: 1 },
];

const TESTIMONIALS = [
  { quote: "Vigorant treats our practice like an actual business, not a marketing experiment. Every dollar is accounted for.", name: "Dr. M. Patel", role: "Dental group owner, TX" },
  { quote: "I have used five agencies in twelve years. Vigorant is the first one that actually understood healthcare.", name: "Dr. R. Alvarez", role: "Medical specialty group, CA" },
  { quote: "The dashboard alone is worth it. I open it before my coffee.", name: "Dr. S. Kim", role: "Chiropractic, FL" },
];

const FAQS = [
  { q: "Are these results typical?", a: "Results vary by specialty, market competitiveness, starting visibility, and operational capacity to convert leads into booked patients. The numbers above represent real Vigorant engagements and the methodology that produced them is repeatable." },
  { q: "How does Vigorant measure success?", a: "Success is measured by booked patients, qualified leads, channel ROI, and visibility share. Every client has a live dashboard mapping marketing spend to revenue outcomes." },
  { q: "How long until we see meaningful results?", a: "Paid advertising produces measurable lift in weeks. SEO and AI visibility compound over 3-12 months. Your audit defines a realistic timeline for your specialty and market." },
  { q: "What if results are not where they should be?", a: "Monthly reviews surface underperformance immediately. Adjustments, recovery plans, and pivots are part of the engagement, not exceptions." },
  { q: "Do you work with practices outside dental, chiropractic, and medical?", a: "Our focus is healthcare. We specialize in helping dental, medical, and chiropractic practices grow through advanced digital marketing, AI-powered strategies, and patient acquisition systems. While healthcare is our primary area of expertise, our team brings experience from a variety of industries and business sectors. As a result, we occasionally consider select opportunities that align with our expertise, values, and ability to deliver meaningful results." },
  { q: "Can we talk to one of your clients?", a: "Yes. After the initial audit conversation we can connect you with current clients in your specialty for direct reference calls." },
];

function ResultsSeo() {
  const webPage = {
    "@context": "https://schema.org", "@type": "CollectionPage",
    "@id": `${BASE}/results#webpage`, url: `${BASE}/results`,
    name: "Healthcare Practice Marketing Results & Case Studies | Vigorant",
    description: "Real case studies from dental, chiropractic, and medical practices. Booked patients, ROAS, conversion lifts, and AI search visibility — the proof behind Vigorant's growth engine.",
  };
  const breadcrumb = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
      { "@type": "ListItem", position: 2, name: "Results", item: `${BASE}/results` },
    ],
  };
  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: FAQS.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <Helmet>
      <title>Results & Case Studies | Vigorant</title>
      <meta name="description" content="Real outcomes from dental, chiropractic, and medical practices: booked patients, ROAS, conversions, and AI search wins." />
      <link rel="canonical" href="/results" />
      <meta property="og:title" content="Results & Case Studies | Vigorant" />
      <meta property="og:description" content="Real numbers from real practices." />
      <meta property="og:url" content="/results" />
      <meta name="robots" content="index,follow" />
      <script type="application/ld+json">{JSON.stringify(webPage)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      <script type="application/ld+json">{JSON.stringify(faq)}</script>
    </Helmet>
  );
}

const metricColor = (c: "green" | "blue" | "amber") =>
  c === "green" ? "text-emerald-600" : c === "blue" ? "text-blue-600" : "text-amber-600";

export default function Results() {
  return (
    <>
      <ResultsSeo />
      <a href="#main" className="skip-link">Skip to main content</a>

      <Nav />
      <main id="main" className="overflow-x-hidden">
        {/* HERO */}
        <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 bg-background overflow-hidden">
          <div aria-hidden className="absolute inset-0 z-0 grid-overlay" />
          <div aria-hidden className="absolute -top-16 -right-16 w-[420px] sm:w-[520px] h-[420px] sm:h-[520px] rounded-full pointer-events-none orb-a"
            style={{ background: "radial-gradient(circle, hsl(247 93% 64% / 0.20), transparent 70%)", filter: "blur(80px)" }} />
          <div aria-hidden className="absolute -bottom-16 -left-10 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full pointer-events-none orb-b"
            style={{ background: "radial-gradient(circle, hsl(248 100% 75% / 0.14), transparent 70%)", filter: "blur(60px)" }} />
          <div className="container relative z-10">
            <nav aria-label="Breadcrumb" className="text-sm text-text-muted mb-6">
              <Link to="/" className="hover:text-brand-purple">Home</Link>
              <span className="mx-2" aria-hidden>/</span>
              <span aria-current="page" className="text-text-secondary">Results</span>
            </nav>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-purple bg-brand-purple/8 border border-brand-purple/20 rounded-full px-4 py-1.5">
              <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-brand-purple pulse-dot" />
              Proof, not promises
            </motion.div>
            <h1 className="font-display font-bold text-brand-deep leading-[1.05] mt-5"
              style={{ fontSize: "clamp(36px, 6.5vw, 72px)", letterSpacing: "-0.03em" }}>
              <Line delay={0.4}>Real practices.</Line>
              <Line delay={0.55}><span className="gradient-text">Real numbers.</span></Line>
            </h1>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.0 }}
              className="mt-6 max-w-2xl text-lg text-text-secondary leading-[1.7]">
              Booked patients, ROAS lift, conversion gains, AI search visibility — the measurable outcomes behind
              every Vigorant engagement.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.15 }}
              className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { n: 312, suf: "%", h: "Avg patient growth" },
                { n: 4.2, suf: "x", h: "Avg paid ROAS", d: 1 },
                { n: 68, suf: "%", h: "Avg CRO lift" },
                { n: 92, suf: "%", h: "Client retention" },
              ].map(m => (
                <div key={m.h} className="rounded-2xl bg-white border border-black/[0.08] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-purple/30 hover:shadow-lg" style={{ boxShadow: "var(--shadow-card)" }}>
                  <div className="text-3xl font-extrabold bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-text)" }}>
                    <Counter to={m.n} decimals={m.d ?? 0} suffix={m.suf} />
                  </div>
                  <p className="mt-1 text-text-secondary text-sm">{m.h}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* PROOF PHILOSOPHY */}
        <section className="py-20 sm:py-28">
          <div className="container max-w-3xl">
            <Reveal>
              <span className="section-label">Our proof philosophy</span>
              <h2 className="font-extrabold text-brand-deep mt-3" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                Numbers before stories. Outcomes before opinions.
              </h2>
              <p className="mt-5 text-text-secondary text-lg">
                Every case study leads with hard metrics: patient volume, qualified leads, ROAS, conversion lift,
                visibility share. The story is real, but the numbers are what you came for.
              </p>
            </Reveal>
          </div>
        </section>

        {/* CASE STUDY GRID */}
        <section id="case-grid" className="py-20 sm:py-28 bg-surface-secondary">
          <div className="container">
            <Reveal className="max-w-2xl">
              <span className="section-label">Case studies</span>
              <h2 className="font-extrabold text-brand-deep mt-3" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                Specialty by specialty.
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-5 mt-12">
              {CASES.map((c, i) => (
                <Reveal key={c.client} delay={i * 0.05} className="h-full">
                  <TiltCard className="rounded-2xl bg-white border border-brand-purple/12 p-7 h-full flex flex-col">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-brand)" }}>
                        <c.icon aria-hidden size={18} className="text-white" />
                      </div>
                      <span className="font-mono-ui text-xs uppercase tracking-wider text-brand-purple">{c.specialty}</span>
                    </div>
                    <h3 className="font-bold text-brand-deep text-lg mt-4">{c.client}</h3>
                    <p className="text-sm text-text-muted">Window: {c.window}</p>
                    <dl className="mt-5 space-y-3">
                      {c.metrics.map(m => (
                        <div key={m.label} className="flex items-baseline justify-between gap-3 border-b border-brand-purple/10 pb-2">
                          <dt className="text-sm text-text-secondary">{m.label}</dt>
                          <dd className={`font-extrabold text-xl ${metricColor(m.color)}`}>{m.value}</dd>
                        </div>
                      ))}
                    </dl>
                    <p className="mt-5 text-text-secondary text-sm">{c.summary}</p>
                    <blockquote className="mt-5 text-sm italic text-brand-deep border-l-2 border-brand-purple pl-4">
                      "{c.quote}"
                    </blockquote>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTS BY CHANNEL */}
        <section className="py-20 sm:py-28 text-white" style={{ background: "var(--gradient-dark)" }}>
          <div className="container">
            <Reveal className="max-w-2xl">
              <span className="section-label-light">Results by channel</span>
              <h2 className="font-extrabold mt-3" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                Every channel earns its place.
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
              {BY_CHANNEL.map((c, i) => (
                <Reveal key={c.h} delay={i * 0.05} className="h-full">
                  <div className="rounded-2xl bg-white/5 border border-white/15 p-6 backdrop-blur text-center">
                    <c.icon aria-hidden size={26} className="mx-auto text-brand-lavender" />
                    <div className="mt-4 text-4xl font-extrabold bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-text)" }}>
                      <Counter to={c.n} decimals={c.d ?? 0} suffix={c.suf} />
                    </div>
                    <p className="mt-2 font-bold">{c.h}</p>
                    <p className="text-sm text-white/70">{c.b}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 sm:py-28 bg-surface-secondary">
          <div className="container">
            <Reveal className="max-w-2xl">
              <span className="section-label">In their words</span>
              <h2 className="font-extrabold text-brand-deep mt-3" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                Testimonials from practice owners.
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-5 mt-12">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={t.name} delay={i * 0.05} className="h-full">
                  <TiltCard className="rounded-2xl bg-white border border-brand-purple/12 p-7 h-full">
                    <Quote aria-hidden size={28} className="text-brand-purple/40" />
                    <p className="mt-3 text-text-primary font-medium">"{t.quote}"</p>
                    <p className="mt-5 font-bold text-brand-deep">{t.name}</p>
                    <p className="text-sm text-text-muted">{t.role}</p>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* AIO/GEO AUTHORITY */}
        <section className="py-20 sm:py-28">
          <div className="container max-w-3xl">
            <Reveal>
              <span className="section-label">AI search authority</span>
              <h2 className="font-extrabold text-brand-deep mt-3" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                The practices AI engines now cite.
              </h2>
              <p className="mt-5 text-text-secondary text-lg">
                Our clients appear inside Google AI Overviews, Perplexity answers, ChatGPT search citations, and
                Claude responses for treatment, provider, and local-intent queries. This is the new front door of
                patient research — and we built it for them.
              </p>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 sm:py-28 bg-surface-secondary">
          <div className="container max-w-3xl">
            <Reveal>
              <span className="section-label">FAQ</span>
              <h2 className="font-extrabold text-brand-deep mt-3" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                Questions about results.
              </h2>
            </Reveal>
            <SharedFAQList faqs={FAQS} />

          </div>
        </section>

        {/* FINAL CTA */}
        <section id="audit" className="py-20 sm:py-28 text-white" style={{ background: "var(--gradient-dark)" }}>
          <div className="container max-w-3xl text-center">
            <Reveal>
              <span className="section-label-light">Become the next case study</span>
              <h2 className="font-extrabold mt-3" style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.03em" }}>
                What numbers could your practice be hitting?
              </h2>
              <a href="#book" className="mt-8 btn-on-dark inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold">
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
