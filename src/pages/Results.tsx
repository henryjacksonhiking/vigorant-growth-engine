import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, Smile, Activity, Stethoscope, Star, TrendingUp, Search,
  Megaphone, Layout, Quote, BarChart2,
} from "lucide-react";
import GlobalFx, { Counter, useTilt } from "@/components/site/GlobalFx";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";

const ease = [0.16, 1, 0.3, 1] as const;
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease }} className={className}>{children}</motion.div>
  );
}
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useTilt();
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
  { q: "Do you work with practices outside dental, chiropractic, and medical?", a: "No. Vigorant specializes exclusively in these three specialties. Compound expertise requires saying no to everything else." },
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
      <title>Results & Case Studies | Healthcare Marketing Proof | Vigorant</title>
      <meta name="description" content="Real outcomes from dental, chiropractic, and medical practices: booked patients, ROAS, conversions, and AI search visibility. The proof behind the Vigorant growth engine." />
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
      <GlobalFx />
      <Nav />
      <main id="main" className="overflow-x-hidden">
        {/* HERO (dark — reversed) */}
        <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 text-white" style={{ background: "var(--gradient-dark)" }}>
          <div className="absolute inset-0 -z-0 opacity-50" aria-hidden>
            <div className="absolute top-20 -right-20 w-96 h-96 rounded-full blur-3xl" style={{ background: "hsl(var(--brand-bright) / 0.25)" }} />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl" style={{ background: "hsl(var(--brand-purple) / 0.22)" }} />
          </div>
          <div className="container relative z-10">
            <nav aria-label="Breadcrumb" className="text-sm text-white/60 mb-6">
              <Link to="/" className="hover:text-brand-lavender">Home</Link>
              <span className="mx-2" aria-hidden>/</span>
              <span aria-current="page" className="text-white/80">Results</span>
            </nav>
            <Reveal>
              <span className="section-label-light">Proof, not promises</span>
              <h1 className="font-display font-bold leading-[1.05] mt-4"
                style={{ fontSize: "clamp(36px, 6.5vw, 72px)", letterSpacing: "-0.03em" }}>
                Real practices.{" "}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-text)" }}>Real numbers.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-white/80">
                Booked patients, ROAS lift, conversion gains, AI search visibility — the measurable outcomes behind
                every Vigorant engagement.
              </p>
              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5">
                {[
                  { n: 312, suf: "%", h: "Avg patient growth" },
                  { n: 4.2, suf: "x", h: "Avg paid ROAS", d: 1 },
                  { n: 68, suf: "%", h: "Avg CRO lift" },
                  { n: 92, suf: "%", h: "Client retention" },
                ].map(m => (
                  <div key={m.h} className="rounded-2xl bg-white/5 border border-white/15 p-5 backdrop-blur">
                    <div className="text-3xl font-extrabold bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-text)" }}>
                      <Counter end={m.n} decimals={m.d ?? 0} suffix={m.suf} />
                    </div>
                    <p className="mt-1 text-white/70 text-sm">{m.h}</p>
                  </div>
                ))}
              </div>
            </Reveal>
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
                <Reveal key={c.client} delay={i * 0.05}>
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
                <Reveal key={c.h} delay={i * 0.05}>
                  <div className="rounded-2xl bg-white/5 border border-white/15 p-6 backdrop-blur text-center">
                    <c.icon aria-hidden size={26} className="mx-auto text-brand-lavender" />
                    <div className="mt-4 text-4xl font-extrabold bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-text)" }}>
                      <Counter end={c.n} decimals={c.d ?? 0} suffix={c.suf} />
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
                <Reveal key={t.name} delay={i * 0.05}>
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
            <dl className="mt-10 space-y-3">
              {FAQS.map((f, i) => (
                <Reveal key={f.q} delay={i * 0.03}>
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
              <span className="section-label-light">Become the next case study</span>
              <h2 className="font-extrabold mt-3" style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.03em" }}>
                What numbers could your practice be hitting?
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
