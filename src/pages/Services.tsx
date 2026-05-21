import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, Search, Megaphone, Layout, Star, BarChart2, Mail, Video,
  PenSquare, Palette, FileText, MapPin, Brain, Sparkles, Check, ChevronRight,
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
  const ref = useTilt() as React.RefObject<HTMLDivElement>;
  return <div ref={ref} className={className}>{children}</div>;
}

const BASE = "https://vigorant.com";

const PRIMARY = [
  { icon: Search, h: "SEO & AI Search", b: "Rank in Google and answer engines (AEO, GEO, GBP). Win the new front door of patient research.", href: "/services/seo", bullets: ["Technical + content SEO", "AEO / GEO optimization", "Google Business Profile"] },
  { icon: Megaphone, h: "Paid Advertising", b: "Conversion-tracked Google, Meta, YouTube, and retargeting campaigns engineered for booked patients.", href: "/services/paid-ads", bullets: ["Google Ads (Search, PMax)", "Meta + YouTube", "Conversion tracking"] },
  { icon: Layout, h: "Website Design & CRO", b: "Fast, accessible, conversion-engineered websites that turn intent into booked visits.", href: "/services/website-design", bullets: ["WCAG-compliant builds", "Landing pages", "A/B testing + CRO"] },
  { icon: Star, h: "Reputation & Social", b: "Build the trust layer: reviews, social presence, and review-response workflows that compound.", href: "/services/reputation", bullets: ["Review generation", "Reputation monitoring", "Social management"] },
];

const SUPPORTING = [
  { icon: Brain, h: "Marketing Strategy", href: "#" },
  { icon: Palette, h: "Branding & Rebranding", href: "#" },
  { icon: Sparkles, h: "Social Media Marketing", href: "#" },
  { icon: Video, h: "Video Marketing", href: "#" },
  { icon: Layout, h: "Landing Pages", href: "#" },
  { icon: Mail, h: "Email Marketing", href: "#" },
  { icon: PenSquare, h: "Content Marketing", href: "#" },
  { icon: BarChart2, h: "Analytics & Reporting", href: "#" },
  { icon: MapPin, h: "Local Listings & GBP", href: "#" },
];

const MATRIX = [
  { challenge: "Practice not visible online", service: "SEO + AEO + GBP", href: "/services/seo" },
  { challenge: "Spending money on ads, no results", service: "Paid Ads + CRO", href: "/services/paid-ads" },
  { challenge: "Traffic but no bookings", service: "Website Design + CRO", href: "/services/website-design" },
  { challenge: "Reputation hurting conversions", service: "Reputation Management", href: "/services/reputation" },
  { challenge: "No clarity on what is working", service: "Analytics & Reporting", href: "#" },
  { challenge: "Stagnant new patient growth", service: "Full Growth Engine", href: "/for-practices/more-new-patients" },
];

const FAQS = [
  { q: "What services does Vigorant offer to healthcare practices?", a: "Vigorant offers four primary growth services — SEO and AI search, paid advertising, website design and conversion optimization, and reputation and social management — plus nine supporting services. All services are designed to plug into one integrated growth engine." },
  { q: "Do we have to buy every service?", a: "No. Most practices begin with one or two services that match their biggest gap and add others as growth compounds. Engagement scope is shaped by the audit findings, not a fixed package." },
  { q: "How is Vigorant different from a typical full-service agency?", a: "Most agencies sell services as separate line items. Vigorant builds an integrated growth engine where every channel reinforces the others — visibility feeds traffic, traffic feeds conversion, conversion feeds reputation, and reputation feeds visibility again." },
  { q: "What is AEO and GEO?", a: "AEO (Answer Engine Optimization) makes a practice the answer that AI engines like ChatGPT, Perplexity, and Google AI Overviews surface. GEO (Generative Engine Optimization) goes further — structuring entities, schema, and authoritative content so generative engines cite and recommend the practice." },
  { q: "Can Vigorant manage Google Ads and Meta Ads together?", a: "Yes. Paid advertising is run as one performance system across Google Search, Performance Max, Meta, YouTube, and retargeting — with shared conversion tracking and a single reporting dashboard." },
  { q: "Do you build new websites or work with the one we have?", a: "Both. For most practices, a high-converting website is the lever with the biggest ROI. We rebuild when it is the bottleneck, optimize when it is not." },
  { q: "How long until we see results?", a: "Paid advertising produces measurable lift within weeks. SEO and AI visibility compound across months. The audit defines the realistic timeline for your specific practice and market." },
  { q: "What does engagement actually look like month-to-month?", a: "A dedicated strategist, a shared dashboard, a monthly strategy call, and a clear scoreboard. No vague reports, no jargon, no surprises." },
];

function ServicesSeo() {
  const webPage = {
    "@context": "https://schema.org", "@type": "CollectionPage",
    "@id": `${BASE}/services#webpage`, url: `${BASE}/services`,
    name: "Healthcare Marketing Services — SEO, Paid Ads, Web, Reputation | Vigorant",
    description: "Full-spectrum healthcare marketing services for dental, chiropractic, and medical practices: SEO, AI search, paid ads, website design and CRO, reputation, and more.",
  };
  const breadcrumb = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${BASE}/services` },
    ],
  };
  const itemList = {
    "@context": "https://schema.org", "@type": "ItemList",
    name: "Vigorant marketing services",
    itemListElement: PRIMARY.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.h, url: `${BASE}${s.href}` })),
  };
  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: FAQS.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <Helmet>
      <title>Healthcare Marketing Services | Vigorant</title>
      <meta name="description" content="Integrated growth for healthcare practices: SEO, AI search, paid ads, website CRO, reputation, and analytics." />
      <link rel="canonical" href="/services" />
      <meta property="og:title" content="Healthcare Marketing Services | Vigorant" />
      <meta property="og:description" content="Integrated growth services for dental, chiropractic, and medical practices." />
      <meta property="og:url" content="/services" />
      <meta name="robots" content="index,follow" />
      <script type="application/ld+json">{JSON.stringify(webPage)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      <script type="application/ld+json">{JSON.stringify(itemList)}</script>
      <script type="application/ld+json">{JSON.stringify(faq)}</script>
    </Helmet>
  );
}

export default function Services() {
  return (
    <>
      <ServicesSeo />
      <a href="#main" className="skip-link">Skip to main content</a>
      <GlobalFx />
      <Nav />
      <main id="main" className="overflow-x-hidden">
        {/* HERO */}
        <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24">
          <div className="absolute inset-0 -z-10 opacity-60" aria-hidden>
            <div className="absolute top-20 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: "hsl(var(--brand-purple) / 0.18)" }} />
          </div>
          <div className="container">
            <nav aria-label="Breadcrumb" className="text-sm text-text-muted mb-6">
              <Link to="/" className="hover:text-brand-purple">Home</Link>
              <span className="mx-2" aria-hidden>/</span>
              <span aria-current="page" className="text-text-secondary">Services</span>
            </nav>
            <Reveal>
              <span className="section-label inline-block px-3 py-1 rounded-full bg-brand-purple/8 border border-brand-purple/20">Capability hub</span>
              <h1 className="font-display font-bold text-brand-deep leading-[1.05] mt-4"
                style={{ fontSize: "clamp(36px, 6.5vw, 72px)", letterSpacing: "-0.03em" }}>
                Every service your practice needs,{" "}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-text)" }}>built as one engine.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-text-secondary">
                SEO, AI search, paid ads, website CRO, reputation, social, analytics — connected into one measurable
                growth system instead of a stack of disconnected vendors.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#core-services" className="btn-primary-grad font-semibold px-6 py-3 rounded-full inline-flex items-center">
                  See core services <ArrowRight aria-hidden className="ml-2" size={18} />
                </a>
                <a href="#audit" className="px-6 py-3 rounded-full border border-brand-purple/25 text-brand-deep font-semibold hover:bg-brand-purple/5">
                  Get a free audit
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* DEFINITION BLOCK */}
        <section className="py-20 sm:py-28 text-white" style={{ background: "var(--gradient-dark)" }}>
          <div className="container max-w-3xl">
            <Reveal>
              <span className="section-label-light">What we mean by "growth engine"</span>
              <h2 className="font-extrabold mt-3" style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.03em" }}>
                Services are not the product. The engine is.
              </h2>
              <p className="mt-5 text-white/80 text-lg">
                A growth engine is a system in which every layer compounds the next. Visibility creates traffic. Traffic
                converts because the website is engineered for it. Conversions create reviews and referrals. Reviews and
                referrals raise visibility. Vigorant builds and operates the engine — each service is just one moving part.
              </p>
            </Reveal>
          </div>
        </section>

        {/* PRIMARY SERVICE CARDS */}
        <section id="core-services" className="py-20 sm:py-28">
          <div className="container">
            <Reveal className="max-w-2xl">
              <span className="section-label">Primary services</span>
              <h2 className="font-extrabold text-brand-deep mt-3" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                Four engines that power patient acquisition.
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-5 mt-12">
              {PRIMARY.map((s, i) => (
                <Reveal key={s.h} delay={i * 0.05}>
                  <TiltCard className="rounded-2xl bg-white border border-brand-purple/12 p-7 h-full hover:border-brand-purple/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "var(--gradient-brand)" }}>
                      <s.icon aria-hidden size={22} className="text-white" />
                    </div>
                    <h3 className="font-bold text-brand-deep text-xl">{s.h}</h3>
                    <p className="mt-2 text-text-secondary">{s.b}</p>
                    <ul className="mt-4 space-y-2">
                      {s.bullets.map(b => (
                        <li key={b} className="flex gap-2 text-sm text-text-secondary">
                          <Check size={16} className="text-brand-purple flex-shrink-0 mt-0.5" aria-hidden /> {b}
                        </li>
                      ))}
                    </ul>
                    <Link to={s.href} className="mt-5 inline-flex items-center text-brand-purple font-semibold hover:text-brand-deep">
                      Explore {s.h.toLowerCase()} <ArrowRight size={16} className="ml-1.5" aria-hidden />
                    </Link>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* AEO DEFINITION */}
        <section className="py-20 sm:py-28 text-white" style={{ background: "var(--gradient-dark)" }}>
          <div className="container grid lg:grid-cols-2 gap-10">
            <Reveal>
              <div className="rounded-2xl bg-white/5 border border-white/15 p-7 backdrop-blur">
                <span className="font-mono-ui text-xs uppercase tracking-wider text-brand-lavender">AEO</span>
                <h3 className="font-bold text-2xl mt-2">Answer Engine Optimization</h3>
                <p className="mt-3 text-white/80">
                  AEO makes your practice the answer that AI engines surface — ChatGPT, Perplexity, Claude, Google AI
                  Overviews — when patients ask conversational questions about care, providers, or treatment options.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-2xl bg-white/5 border border-white/15 p-7 backdrop-blur">
                <span className="font-mono-ui text-xs uppercase tracking-wider text-brand-lavender">GEO</span>
                <h3 className="font-bold text-2xl mt-2">Generative Engine Optimization</h3>
                <p className="mt-3 text-white/80">
                  GEO structures entities, schema, and authoritative content so generative engines understand who your
                  practice is, what you do, and why you deserve to be cited and recommended.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SUPPORTING SERVICES */}
        <section className="py-20 sm:py-28 bg-surface-secondary">
          <div className="container">
            <Reveal className="max-w-2xl">
              <span className="section-label">Supporting services</span>
              <h2 className="font-extrabold text-brand-deep mt-3" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                Nine more capabilities. All connected.
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
              {SUPPORTING.map((s, i) => (
                <Reveal key={s.h} delay={i * 0.03}>
                  <a href={s.href} className="rounded-xl bg-white border border-brand-purple/12 p-5 flex items-center gap-4 hover:border-brand-purple/30 hover:-translate-y-0.5 transition-all">
                    <div className="w-10 h-10 rounded-lg bg-brand-purple/10 flex items-center justify-center flex-shrink-0">
                      <s.icon aria-hidden size={18} className="text-brand-purple" />
                    </div>
                    <span className="font-semibold text-brand-deep">{s.h}</span>
                    <ChevronRight size={16} className="ml-auto text-text-muted" aria-hidden />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CHALLENGE → SERVICE MATRIX */}
        <section className="py-20 sm:py-28">
          <div className="container max-w-4xl">
            <Reveal className="max-w-2xl">
              <span className="section-label">Challenge → Service</span>
              <h2 className="font-extrabold text-brand-deep mt-3" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                Find the right starting point.
              </h2>
            </Reveal>
            <div className="mt-10 rounded-2xl bg-white border border-brand-purple/12 overflow-hidden">
              {MATRIX.map((m, i) => (
                <Link key={m.challenge} to={m.href}
                  className={`flex items-center justify-between gap-4 p-5 hover:bg-brand-purple/5 transition-colors ${i > 0 ? "border-t border-brand-purple/10" : ""}`}>
                  <span className="text-text-primary font-medium">{m.challenge}</span>
                  <span className="hidden sm:inline text-brand-purple font-semibold">{m.service}</span>
                  <ArrowRight size={18} className="text-brand-purple flex-shrink-0" aria-hidden />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* PROOF */}
        <section className="py-20 sm:py-28 text-white" style={{ background: "var(--gradient-dark)" }}>
          <div className="container">
            <Reveal className="max-w-2xl">
              <span className="section-label-light">Proof</span>
              <h2 className="font-extrabold mt-3" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                Services that move the only metrics that matter.
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-3 gap-5 mt-12">
              {[
                { n: 312, suf: "%", h: "Avg new patient growth in 12 months" },
                { n: 4.2, suf: "x", h: "Avg paid ROAS lift", d: 1 },
                { n: 68, suf: "%", h: "Avg website conversion lift" },
              ].map((m, i) => (
                <Reveal key={m.h} delay={i * 0.05}>
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
                Common questions about services.
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
              <span className="section-label-light">Start with the audit</span>
              <h2 className="font-extrabold mt-3" style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.03em" }}>
                Find the services that will move your numbers most.
              </h2>
              <p className="mt-5 text-white/80 text-lg">
                We will audit your visibility, conversion, paid efficiency, and reputation — and tell you exactly where
                investment will create the largest patient flow.
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
