import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, BookOpen, BarChart3, Download, PlayCircle, Search, Brain,
  Smile, Activity, Stethoscope, FileText, Sparkles,
} from "lucide-react";
import GlobalFx, { useTilt } from "@/components/site/GlobalFx";
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

const ALBUMS = [
  { icon: BookOpen, h: "Blog", b: "Strategy articles, guides, playbooks for healthcare practice growth.", href: "/resources/blog" },
  { icon: BarChart3, h: "Infographics", b: "Visual breakdowns, data, and checklists you can save and share.", href: "/resources/infographics" },
  { icon: Download, h: "Ebooks & Playbooks", b: "Downloadable guides, calculators, and lead magnets.", href: "/resources/ebooks" },
  { icon: PlayCircle, h: "Videos", b: "Explainers, walkthroughs, and webinar highlights.", href: "/resources/videos" },
];

const FEATURED = [
  { tag: "Cornerstone guide", h: "The Healthcare Practice AI Search Playbook", b: "How dental, medical, and chiropractic practices win inside ChatGPT, Perplexity, and Google AI Overviews.", href: "/resources/blog/ai-search-playbook" },
  { tag: "Cornerstone guide", h: "The 2026 Patient Acquisition Benchmark Report", b: "Conversion rates, paid ROAS, SEO timelines, and AI visibility benchmarks across 1,000+ practices.", href: "/resources/blog/benchmark-2026" },
  { tag: "Cornerstone guide", h: "From Tactics to Engine: Building a Growth System", b: "Why disconnected marketing fails healthcare practices — and the four layers of a real growth engine.", href: "/resources/blog/growth-engine" },
];

const TOPICS = [
  "SEO & AI Search", "Paid Advertising", "Website & CRO", "Reputation",
  "Patient Acquisition", "Analytics", "Reviews & Reputation", "Branding",
];

const BY_PRACTICE = [
  { icon: Smile, h: "Dental practices", href: "/resources/dental" },
  { icon: Activity, h: "Chiropractic practices", href: "/resources/chiropractic" },
  { icon: Stethoscope, h: "Medical practices", href: "/resources/medical" },
];

const AI_KNOWLEDGE = [
  { h: "What is AEO?", b: "Answer Engine Optimization for healthcare practices." },
  { h: "What is GEO?", b: "Generative Engine Optimization explained for clinics." },
  { h: "AI Overviews", b: "How to appear inside Google's AI search results." },
  { h: "Schema for AI", b: "The structured-data foundation AI engines require." },
];

const LATEST = [
  { type: "Article", h: "Why patient reviews now drive 41% of AI search citations", href: "#" },
  { type: "Infographic", h: "The new patient research journey, mapped", href: "#" },
  { type: "Ebook", h: "Local SEO checklist for multi-location dental groups", href: "#" },
  { type: "Video", h: "GBP optimization walkthrough for chiropractors", href: "#" },
  { type: "Article", h: "Conversion-tracking setup for healthcare Google Ads", href: "#" },
  { type: "Article", h: "What 'helpful content' means for medical practices", href: "#" },
];

const EBOOKS = [
  { h: "The Patient Acquisition Playbook", b: "A 40-page system for predictable new-patient growth.", href: "#" },
  { h: "The AI Visibility Audit Worksheet", b: "Score your practice's AI search readiness in 15 minutes.", href: "#" },
  { h: "The Healthcare CRO Field Guide", b: "20 high-leverage website experiments for clinics.", href: "#" },
];

const VIDEOS = [
  { h: "How AI Overviews are rewriting patient discovery", href: "#" },
  { h: "Inside the Vigorant growth dashboard", href: "#" },
  { h: "Building a paid ad funnel for a dental implant practice", href: "#" },
];

const FAQS = [
  { q: "What is the Vigorant Resources Hub?", a: "The Resources Hub is Vigorant's educational library for healthcare practice owners. It includes articles, infographics, downloadable playbooks, and video walkthroughs covering SEO, AI search, paid advertising, website CRO, reputation, and analytics." },
  { q: "Is the content free?", a: "Yes. All articles, infographics, and videos are free. Some ebooks and playbooks require an email so we can deliver the file and track which resources are most useful." },
  { q: "Who writes the content?", a: "Content is written by Vigorant strategists who run real healthcare practice engagements. Every guide is grounded in client work, not theory." },
  { q: "How often is new content published?", a: "New articles and infographics publish weekly. Cornerstone playbooks and ebooks publish quarterly. Videos and webinars publish monthly." },
  { q: "Can I subscribe to updates?", a: "Yes. Subscribe to the Vigorant newsletter to receive new resources, benchmark reports, and AI search updates as they publish." },
  { q: "Do you cover AI search specifically?", a: "Yes. AI search — AEO, GEO, Google AI Overviews, ChatGPT, Perplexity, Claude — is one of our most active content areas. The AI Knowledge Hub centralizes the most important resources." },
];

function ResourcesSeo() {
  const webPage = {
    "@context": "https://schema.org", "@type": "CollectionPage",
    "@id": `${BASE}/resources#webpage`, url: `${BASE}/resources`,
    name: "Healthcare Practice Growth Resources | Vigorant",
    description: "Articles, playbooks, infographics, and videos on SEO, AI search, paid advertising, website CRO, reputation, and analytics for dental, chiropractic, and medical practices.",
  };
  const breadcrumb = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
      { "@type": "ListItem", position: 2, name: "Resources", item: `${BASE}/resources` },
    ],
  };
  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: FAQS.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <Helmet>
      <title>Healthcare Practice Marketing Resources | Vigorant</title>
      <meta name="description" content="Articles, playbooks, infographics, and videos on SEO, AI search, paid advertising, and growth for dental, chiropractic, and medical practices." />
      <link rel="canonical" href="/resources" />
      <meta property="og:title" content="Healthcare Practice Marketing Resources | Vigorant" />
      <meta property="og:description" content="Learn how to grow your practice with AI-forward marketing." />
      <meta property="og:url" content="/resources" />
      <meta name="robots" content="index,follow" />
      <script type="application/ld+json">{JSON.stringify(webPage)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      <script type="application/ld+json">{JSON.stringify(faq)}</script>
    </Helmet>
  );
}

export default function Resources() {
  return (
    <>
      <ResourcesSeo />
      <a href="#main" className="skip-link">Skip to main content</a>
      <GlobalFx />
      <Nav />
      <main id="main" className="overflow-x-hidden">
        {/* HERO */}
        <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24">
          <div className="absolute inset-0 -z-10 opacity-60" aria-hidden>
            <div className="absolute top-20 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: "hsl(var(--brand-bright) / 0.18)" }} />
          </div>
          <div className="container">
            <nav aria-label="Breadcrumb" className="text-sm text-text-muted mb-6">
              <Link to="/" className="hover:text-brand-purple">Home</Link>
              <span className="mx-2" aria-hidden>/</span>
              <span aria-current="page" className="text-text-secondary">Resources</span>
            </nav>
            <Reveal>
              <span className="section-label inline-block px-3 py-1 rounded-full bg-brand-purple/8 border border-brand-purple/20">Resources hub</span>
              <h1 className="font-display font-bold text-brand-deep leading-[1.05] mt-4"
                style={{ fontSize: "clamp(36px, 6.5vw, 72px)", letterSpacing: "-0.03em" }}>
                Learn how to{" "}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-text)" }}>grow your practice.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-text-secondary">
                Playbooks, articles, infographics, and videos on SEO, AI search, paid ads, website CRO, and reputation —
                built from real engagements with dental, chiropractic, and medical practices.
              </p>
            </Reveal>
          </div>
        </section>

        {/* WHY THIS HUB */}
        <section className="py-20 sm:py-28 text-white" style={{ background: "var(--gradient-dark)" }}>
          <div className="container max-w-3xl">
            <Reveal>
              <span className="section-label-light">Why this hub exists</span>
              <h2 className="font-extrabold mt-3" style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.03em" }}>
                Real expertise, given away.
              </h2>
              <p className="mt-5 text-white/80 text-lg">
                Practice owners deserve to understand what good marketing looks like before they ever hire someone. This
                hub is our way of raising the floor of the entire industry — and earning your trust before we earn your
                business.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ALBUMS */}
        <section className="py-20 sm:py-28 bg-surface-secondary">
          <div className="container">
            <Reveal className="max-w-2xl">
              <span className="section-label">Browse by format</span>
              <h2 className="font-extrabold text-brand-deep mt-3" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                Four ways to learn.
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
              {ALBUMS.map((a, i) => (
                <Reveal key={a.h} delay={i * 0.05} className="h-full">
                  <Link to={a.href} className="block h-full">
                    <TiltCard className="rounded-2xl bg-white border border-brand-purple/12 p-7 h-full hover:border-brand-purple/30 transition-colors">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "var(--gradient-brand)" }}>
                        <a.icon aria-hidden size={22} className="text-white" />
                      </div>
                      <h3 className="font-bold text-brand-deep text-xl">{a.h}</h3>
                      <p className="mt-2 text-text-secondary">{a.b}</p>
                      <span className="mt-5 inline-flex items-center text-brand-purple font-semibold">
                        Browse {a.h.toLowerCase()} <ArrowRight size={16} className="ml-1.5" aria-hidden />
                      </span>
                    </TiltCard>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED CORNERSTONE */}
        <section className="py-20 sm:py-28">
          <div className="container">
            <Reveal className="max-w-2xl">
              <span className="section-label">Featured cornerstone</span>
              <h2 className="font-extrabold text-brand-deep mt-3" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                Start with these.
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-5 mt-12">
              {FEATURED.map((f, i) => (
                <Reveal key={f.h} delay={i * 0.05} className="h-full">
                  <Link to={f.href} className="block h-full">
                    <article className="rounded-2xl bg-white border border-brand-purple/12 p-7 h-full hover:border-brand-purple/30 transition-colors">
                      <span className="font-mono-ui text-xs uppercase tracking-wider text-brand-purple">{f.tag}</span>
                      <h3 className="font-display text-2xl text-brand-deep mt-3 leading-tight">{f.h}</h3>
                      <p className="mt-3 text-text-secondary">{f.b}</p>
                      <span className="mt-5 inline-flex items-center text-brand-purple font-semibold">
                        Read guide <ArrowRight size={16} className="ml-1.5" aria-hidden />
                      </span>
                    </article>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* BY TOPIC */}
        <section className="py-20 sm:py-28 text-white" style={{ background: "var(--gradient-dark)" }}>
          <div className="container">
            <Reveal className="max-w-2xl">
              <span className="section-label-light">Browse by topic</span>
              <h2 className="font-extrabold mt-3" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                Pick a subject.
              </h2>
            </Reveal>
            <div className="flex flex-wrap gap-3 mt-10">
              {TOPICS.map(t => (
                <a key={t} href={`#topic-${t}`}
                  className="px-5 py-2.5 rounded-full bg-white/5 border border-white/15 hover:bg-white/10 hover:border-white/25 transition-colors text-sm font-semibold backdrop-blur">
                  {t}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* BY PRACTICE */}
        <section className="py-20 sm:py-28 bg-surface-secondary">
          <div className="container">
            <Reveal className="max-w-2xl">
              <span className="section-label">Browse by practice type</span>
              <h2 className="font-extrabold text-brand-deep mt-3" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                Specialty-specific.
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-5 mt-12">
              {BY_PRACTICE.map((p, i) => (
                <Reveal key={p.h} delay={i * 0.05} className="h-full">
                  <Link to={p.href} className="block h-full">
                    <TiltCard className="rounded-2xl bg-white border border-brand-purple/12 p-7 h-full hover:border-brand-purple/30 transition-colors flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--gradient-brand)" }}>
                        <p.icon aria-hidden size={22} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-brand-deep text-lg">{p.h}</h3>
                        <p className="text-sm text-text-muted">Targeted resources</p>
                      </div>
                      <ArrowRight size={18} className="ml-auto text-brand-purple" aria-hidden />
                    </TiltCard>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* AI KNOWLEDGE HUB */}
        <section id="ai-knowledge-hub" className="py-20 sm:py-28">
          <div className="container">
            <Reveal className="max-w-2xl">
              <span className="section-label">AI search knowledge hub</span>
              <h2 className="font-extrabold text-brand-deep mt-3" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                Everything you need to win AI search.
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
              {AI_KNOWLEDGE.map((a, i) => (
                <Reveal key={a.h} delay={i * 0.04} className="h-full">
                  <div className="rounded-2xl bg-white border border-brand-purple/12 p-6 h-full hover:border-brand-purple/30 transition-colors">
                    <Brain aria-hidden size={22} className="text-brand-purple" />
                    <h3 className="mt-3 font-bold text-brand-deep">{a.h}</h3>
                    <p className="mt-2 text-text-secondary text-sm">{a.b}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* LATEST GRID */}
        <section className="py-20 sm:py-28 bg-surface-secondary">
          <div className="container">
            <Reveal className="max-w-2xl">
              <span className="section-label">Latest resources</span>
              <h2 className="font-extrabold text-brand-deep mt-3" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                Fresh from the team.
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
              {LATEST.map((r, i) => (
                <Reveal key={r.h} delay={i * 0.04} className="h-full">
                  <a href={r.href} className="block h-full">
                    <article className="rounded-2xl bg-white border border-brand-purple/12 p-6 h-full hover:border-brand-purple/30 transition-colors">
                      <span className="font-mono-ui text-xs uppercase tracking-wider text-brand-purple">{r.type}</span>
                      <h3 className="mt-3 font-semibold text-brand-deep text-lg leading-snug">{r.h}</h3>
                    </article>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* EBOOKS */}
        <section className="py-20 sm:py-28">
          <div className="container">
            <Reveal className="max-w-2xl">
              <span className="section-label">Downloadable playbooks</span>
              <h2 className="font-extrabold text-brand-deep mt-3" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                Ebooks & calculators.
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-5 mt-12">
              {EBOOKS.map((e, i) => (
                <Reveal key={e.h} delay={i * 0.05} className="h-full">
                  <TiltCard className="rounded-2xl bg-white border border-brand-purple/12 p-7 h-full">
                    <Download aria-hidden size={26} className="text-brand-purple" />
                    <h3 className="font-bold text-brand-deep text-lg mt-4">{e.h}</h3>
                    <p className="mt-2 text-text-secondary">{e.b}</p>
                    <a href={e.href} className="mt-5 inline-flex items-center btn-primary-grad font-semibold px-5 py-2.5 rounded-full text-sm">
                      Download <Download size={14} className="ml-2" aria-hidden />
                    </a>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* VIDEOS */}
        <section className="py-20 sm:py-28 bg-surface-secondary">
          <div className="container">
            <Reveal className="max-w-2xl">
              <span className="section-label">Video education</span>
              <h2 className="font-extrabold text-brand-deep mt-3" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                Watch and learn.
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-5 mt-12">
              {VIDEOS.map((v, i) => (
                <Reveal key={v.h} delay={i * 0.05} className="h-full">
                  <a href={v.href} className="block h-full">
                    <article className="rounded-2xl bg-white border border-brand-purple/12 overflow-hidden h-full hover:border-brand-purple/30 transition-colors">
                      <div className="aspect-video flex items-center justify-center" style={{ background: "var(--gradient-dark)" }}>
                        <PlayCircle aria-hidden size={56} className="text-white/90" />
                      </div>
                      <div className="p-5">
                        <h3 className="font-semibold text-brand-deep leading-snug">{v.h}</h3>
                      </div>
                    </article>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 sm:py-28">
          <div className="container max-w-3xl">
            <Reveal>
              <span className="section-label">FAQ</span>
              <h2 className="font-extrabold text-brand-deep mt-3" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-0.03em" }}>
                Resources FAQ.
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
              <span className="section-label-light">Ready to apply this?</span>
              <h2 className="font-extrabold mt-3" style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.03em" }}>
                Turn this knowledge into a real growth plan.
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
