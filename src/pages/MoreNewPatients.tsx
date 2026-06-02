import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useEffect, useId, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, ChevronRight, ChevronDown, TrendingDown, Search, Users, Globe, Layout, MessageSquare,
  Phone, CalendarCheck, RotateCcw, BarChart2, EyeOff, MapPin, Megaphone, MousePointerClick,
  Smile, Activity, Stethoscope, AlertTriangle, Check, Plus, X,
} from "lucide-react";
import GlobalFx, { Counter, useTilt } from "@/components/site/GlobalFx";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";

const ease = [0.16, 1, 0.3, 1] as const;
const CANONICAL = "https://vigorant.com/for-practices/more-new-patients";

/* ---------- atoms ---------- */
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease }}
      className={className}
    >{children}</motion.div>
  );
}

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span className="block" initial={{ y: "108%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay, ease }}>
        {children}
      </motion.span>
    </span>
  );
}

function ChipLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span className={dark ? "section-label-light" : "section-label inline-block px-3 py-1 rounded-full bg-brand-purple/8 border border-brand-purple/20"}>
      {children}
    </span>
  );
}

/* ---------- FAQ data — must match JSON-LD verbatim ---------- */
const FAQS = [
  {
    q: "Why am I not getting enough new patients online even though we provide great care?",
    a: "Because online patient acquisition depends on more than care quality. Patients must find your practice, trust your online presence, understand why you are the right choice, and easily book. If SEO, ads, website conversion, reviews, and follow-up are disconnected, good practices can still lose new patients online.",
  },
  {
    q: "How can a dental, medical, or chiropractic practice get more new patients online?",
    a: "A practice can get more new patients online by improving local search visibility, optimizing Google Business Profile, creating service-specific landing pages, running properly tracked paid campaigns, strengthening reviews, improving website conversion, and following up quickly with every lead.",
  },
  {
    q: "Why do competitors show up more online even if our care is better?",
    a: "Competitors may be investing in stronger SEO, Google Maps optimization, reviews, paid ads, website conversion, and content that matches what patients search for. Online visibility is not always a reflection of clinical quality; it reflects the strength of the digital patient acquisition system.",
  },
  {
    q: "Can SEO alone bring more new patients?",
    a: "SEO can help generate patient demand, but it usually works best when combined with conversion-focused website design, strong calls to action, reputation signals, tracking, content, and paid campaigns for high-intent services. SEO creates visibility; the full system turns visibility into booked appointments.",
  },
  {
    q: "Why are our ads getting clicks but not enough booked appointments?",
    a: "Ads may attract clicks without appointments if targeting is too broad, landing pages are weak, calls are not tracked, the offer is unclear, the booking process has friction, or follow-up is slow. Vigorant evaluates the full path from ad click to booked new patient.",
  },
  {
    q: "How does AI search affect new-patient acquisition?",
    a: "AI search affects patient acquisition because people increasingly ask tools like ChatGPT, Gemini, Perplexity, and Google AI experiences for recommendations, explanations, and comparisons. Practices need structured content, strong local authority, reviews, and clear service expertise to improve AI visibility.",
  },
  {
    q: "What should a practice track to know if marketing is working?",
    a: "A practice should track qualified calls, form submissions, booked appointments, new-patient sources, cost per lead, cost per booked patient, conversion rate, local rankings, Google Business Profile actions, and revenue impact when available.",
  },
  {
    q: "What does Vigorant's free growth audit include?",
    a: "The audit reviews your online visibility, Google and Maps presence, website conversion, paid ads, competitor gaps, AI visibility, tracking setup, and growth opportunities. The goal is to identify where your practice is losing potential new patients online.",
  },
];

/* ---------- SEO ---------- */
function MnpSeo() {
  const webPage = {
    "@context": "https://schema.org", "@type": "WebPage",
    "@id": `${CANONICAL}#webpage`,
    url: CANONICAL,
    name: "Getting More New Patients Online | Healthcare Patient Acquisition | Vigorant",
    description: "Vigorant helps healthcare practices turn SEO, paid ads, websites, AI visibility, and tracking into a measurable system for more booked new-patient appointments.",
    isPartOf: { "@id": "https://vigorant-growth-engine.lovable.app/#website" },
    publisher: { "@type": "Organization", name: "Vigorant", url: "https://vigorant-growth-engine.lovable.app" },
    about: [
      { "@type": "Thing", name: "Healthcare marketing" },
      { "@type": "Thing", name: "Patient acquisition" },
      { "@type": "Thing", name: "Dental marketing" },
      { "@type": "Thing", name: "Medical practice marketing" },
      { "@type": "Thing", name: "Chiropractic marketing" },
      { "@type": "Thing", name: "AI search visibility for healthcare" },
    ],
    breadcrumb: { "@id": `${CANONICAL}#breadcrumb` },
  };
  const breadcrumb = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "@id": `${CANONICAL}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://vigorant-growth-engine.lovable.app/" },
      { "@type": "ListItem", position: 2, name: "For Practices", item: "https://vigorant-growth-engine.lovable.app/for-practices" },
      { "@type": "ListItem", position: 3, name: "Getting More New Patients Online", item: CANONICAL },
    ],
  };
  const service = {
    "@context": "https://schema.org", "@type": "Service",
    "@id": `${CANONICAL}#service`,
    name: "Healthcare Patient Acquisition Marketing",
    provider: { "@type": "Organization", name: "Vigorant", url: "https://vigorant-growth-engine.lovable.app" },
    serviceType: "Digital marketing, SEO, paid advertising, website conversion optimization, and AI visibility optimization for healthcare practices",
    areaServed: { "@type": "Country", name: "United States" },
    audience: { "@type": "Audience", audienceType: "Dental, medical, and chiropractic practice owners" },
  };
  const faqPage = {
    "@context": "https://schema.org", "@type": "FAQPage",
    "@id": `${CANONICAL}#faq`,
    mainEntity: FAQS.map(f => ({
      "@type": "Question", name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <Helmet>
      <title>Get More New Patients Online | Vigorant</title>
      <meta name="description" content="Turn online visibility, SEO, and ads into booked new patients for dental, medical, and chiropractic practices. Free growth audit." />
      <link rel="canonical" href={CANONICAL} />
      <meta property="og:title" content="Getting More New Patients Online for Healthcare Practices" />
      <meta property="og:description" content="If your practice provides excellent care but online marketing is not producing enough new patients, Vigorant identifies where visibility, ads, SEO, website conversion, and follow-up are breaking down." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={CANONICAL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      <script type="application/ld+json">{JSON.stringify(webPage)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      <script type="application/ld+json">{JSON.stringify(service)}</script>
      <script type="application/ld+json">{JSON.stringify(faqPage)}</script>
    </Helmet>
  );
}

/* ---------- Section 1: Hero ---------- */
function Hero() {
  return (
    <section aria-labelledby="mnp-hero" className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24" style={{ minHeight: "88vh" }}>
      <div aria-hidden className="absolute inset-0 z-0 grid-overlay" />
      <div aria-hidden className="absolute -top-16 -right-16 w-[420px] sm:w-[480px] h-[420px] sm:h-[480px] rounded-full orb-a"
        style={{ background: "radial-gradient(circle, hsl(247 93% 64% / 0.18), transparent 70%)", filter: "blur(80px)" }} />
      <div aria-hidden className="absolute -bottom-16 -left-10 w-[280px] sm:w-[340px] h-[280px] sm:h-[340px] rounded-full orb-b"
        style={{ background: "radial-gradient(circle, hsl(248 100% 75% / 0.12), transparent 70%)", filter: "blur(60px)" }} />

      <div className="container relative z-10 text-center max-w-[820px]">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="font-mono-ui text-[11px] uppercase tracking-[0.12em] text-ink-secondary flex items-center justify-center gap-2 list-none p-0 flex-wrap">
            <li><Link to="/" className="hover:text-brand-purple">Home</Link></li>
            <li aria-hidden className="text-brand-purple/40">/</li>
            <li><Link to="/for-practices" className="hover:text-brand-purple">For Practices</Link></li>
            <li aria-hidden className="text-brand-purple/40">/</li>
            <li aria-current="page" className="text-brand-deep">Getting More New Patients Online</li>
          </ol>
        </nav>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex items-center gap-2 font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-purple bg-brand-purple/8 border border-brand-purple/20 rounded-full px-4 py-1.5">
          <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-brand-purple pulse-dot" />
          For Practices Providing Great Care But Not Enough Online Patient Flow
        </motion.div>

        <h1 id="mnp-hero" className="font-display font-bold text-brand-deep mt-6 leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(34px, 7vw, 72px)", letterSpacing: "-0.03em" }}>
          <Line delay={0.4}>Getting More</Line>
          <Line delay={0.55}><span className="gradient-text">New Patients Online.</span></Line>
        </h1>

        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.65 }}
          className="mt-4 text-brand-deep font-semibold max-w-[700px] mx-auto"
          style={{ fontSize: "clamp(20px, 2.5vw, 26px)", letterSpacing: "-0.02em" }}>
          Your practice may deliver excellent care — but online patients are not finding, trusting, or choosing you yet.
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.05 }}
          className="mt-6 text-[17px] sm:text-[18px] text-ink-secondary max-w-[640px] mx-auto leading-[1.75]">
          Vigorant helps dental, medical, and chiropractic practices turn online visibility, ads, SEO, AI search readiness, website conversion, and follow-up into a measurable system for booked new-patient appointments.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center flex-wrap">
          <Link to="/free-audit" data-analytics-event="page_hero_cta_click" data-cta="primary_audit"
            className="btn-primary-grad inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold min-h-[48px]">
            Request Your Free Growth Audit <ArrowRight aria-hidden size={18} />
          </Link>
          <a href="#diagnostic-funnel" data-analytics-event="page_hero_cta_click" data-cta="secondary_scroll"
            className="btn-secondary-outline inline-flex items-center justify-center gap-1.5 px-6 py-3.5 rounded-full font-semibold min-h-[48px]">
            See Where Patients Are Dropping Off <span aria-hidden>↓</span>
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.38 }}
          className="mt-10 mx-auto max-w-[700px] rounded-full px-6 py-3"
          style={{ background: "hsl(248 100% 98%)", border: "1px solid hsl(247 93% 64% / 0.12)" }}>
          <p className="font-mono-ui text-[11px] sm:text-[12px] text-brand-purple text-center">
            Healthcare-Focused <span className="text-brand-lavender mx-1">·</span> SEO + Paid Ads + CRO
            <span className="text-brand-lavender mx-1">·</span> AI Search-Ready
            <span className="text-brand-lavender mx-1">·</span> Trackable Patient Acquisition
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Section 2: Empathy ---------- */
function Empathy() {
  const cards = [
    { Icon: TrendingDown, body: "We spend on ads but calls are low — the budget runs but the phone doesn't ring." },
    { Icon: Search, body: "Our SEO reports look fine but patient volume isn't increasing month-to-month." },
    { Icon: Users, body: "Competitors with weaker care seem to rank higher and book more patients." },
  ];
  return (
    <section aria-labelledby="mnp-empathy" className="relative overflow-hidden py-20 sm:py-24" style={{ background: "hsl(248 49% 15%)" }}>
      <div aria-hidden className="absolute left-1/2 top-1/2 w-[560px] h-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(247 93% 64% / 0.10), transparent 70%)", filter: "blur(80px)" }} />
      <div className="container relative text-center">
        <Reveal><ChipLabel dark>You Are Not Alone</ChipLabel></Reveal>
        <Reveal delay={0.05} className="h-full">
          <h2 id="mnp-empathy" className="font-extrabold text-white mt-4 max-w-[720px] mx-auto leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(28px, 5.2vw, 50px)", letterSpacing: "-0.03em" }}>
            Many Good Practices Are <span className="gradient-text">Invisible Online.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="h-full">
          <p className="mt-6 text-white/65 max-w-[640px] mx-auto text-[15px] sm:text-[17px] leading-[1.78]">
            You may be doing everything right clinically. Your patients may love your team. Your care may be better than the practice down the street. But if your competitors appear more often in Google, Maps, reviews, paid results, and AI-driven answers — and if their websites make booking easier — they can win the new patient before your practice is even considered.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="h-full">
          <div className="mt-6 max-w-[640px] mx-auto rounded-xl px-5 py-4 text-left"
            style={{ background: "hsl(0 0% 100% / 0.05)", border: "1px solid hsl(0 0% 100% / 0.09)" }}>
            <div className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-brand-lavender/70 mb-1.5">Research Context</div>
            <p className="text-white/65 text-[14px] leading-[1.7]">
              Patients increasingly use digital channels to research health information and providers. CDC/NCHS data shows that 58.5% of U.S. adults used the internet to look for health or medical information during July–December 2022.{" "}
              <a
                href="https://www.cdc.gov/nchs/products/databriefs/db482.htm"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="CDC NCHS Data Brief on health information technology use among U.S. adults, opens in new tab"
                onClick={() => { /* analytics: cdc_link_click */ }}
                className="font-mono-ui text-[12px] text-brand-lavender underline hover:text-white"
              >CDC/NCHS Data Brief No. 482 (2022)</a>
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="h-full">
          <div className="mt-8 max-w-[760px] mx-auto rounded-2xl px-7 py-6 text-left"
            style={{ background: "hsl(0 0% 100% / 0.05)", border: "1px solid hsl(248 100% 75% / 0.18)" }}>
            <div className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-brand-lavender">Q&amp;A · AIO/GEO Ready</div>
            <p className="mt-3 font-semibold text-white text-[15px]">Why do good healthcare practices struggle to get new patients online?</p>
            <p className="mt-2 italic text-white/80 text-[15px] leading-[1.82]">
              Because patient acquisition depends on the full digital path, not only clinical quality. Patients must find the practice, trust the online presence, understand the offer, and easily complete a booking — before choosing any provider.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-[860px] mx-auto">
          {cards.map((c, i) => (
            <Reveal key={i} delay={0.1 + i * 0.06} className="h-full">
              <article className="text-left rounded-2xl p-5 h-full transition-all duration-300 hover:-translate-y-1"
                style={{ background: "hsl(250 45% 19%)", border: "1px solid hsl(0 0% 100% / 0.07)" }}>
                <div aria-hidden className="w-10 h-10 rounded-[10px] flex items-center justify-center"
                  style={{ background: "hsl(247 93% 64% / 0.2)" }}>
                  <c.Icon size={18} className="text-brand-bright" />
                </div>
                <div className="mt-2.5 font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-lavender/60">Sound Familiar?</div>
                <p className="mt-1.5 text-white text-[14px] font-medium leading-[1.6]">{c.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Section 3: Real Problem + Funnel ---------- */
const FUNNEL_STAGES = [
  { Icon: Globe, label: "Search / AI Visibility" },
  { Icon: Layout, label: "Landing Page" },
  { Icon: MessageSquare, label: "Offer / Message" },
  { Icon: Phone, label: "Call / Form" },
  { Icon: CalendarCheck, label: "Scheduling" },
  { Icon: RotateCcw, label: "Follow-Up" },
  { Icon: BarChart2, label: "Attribution" },
];
function RealProblem() {
  return (
    <section aria-labelledby="mnp-real" className="py-20 sm:py-24" style={{ background: "hsl(248 100% 98%)" }}>
      <div className="container">
        <div className="text-center max-w-[680px] mx-auto">
          <Reveal><ChipLabel>The Core Diagnosis</ChipLabel></Reveal>
          <Reveal delay={0.05} className="h-full">
            <h2 id="mnp-real" className="font-extrabold text-brand-deep mt-4 leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.03em" }}>
              The Real Problem Is Usually Not Your Care — <span className="gradient-text">It Is the Patient Acquisition System</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="h-full">
            <p className="mt-5 max-w-[600px] mx-auto text-ink-secondary text-[16px] sm:text-[17px] leading-[1.78]">
              A practice can rank, advertise, and post on social media and still lose patients if the system is fragmented. Visibility, trust, relevance, conversion, tracking, and follow-up must work together — or each element underperforms in isolation.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="h-full">
          <div
            id="diagnostic-funnel"
            role="img"
            aria-label="Patient acquisition funnel: Search / AI Visibility → Landing Page → Offer / Message → Call / Form → Scheduling → Follow-Up → Attribution"
            data-analytics-event="funnel_diagram_view"
            className="mt-12 max-w-[860px] mx-auto rounded-[20px] p-6 sm:p-8"
            style={{ background: "hsl(0 0% 100% / 0.88)", backdropFilter: "blur(16px)", border: "1px solid hsl(247 93% 64% / 0.12)" }}
          >
            <ol className="flex flex-col md:flex-row md:flex-wrap md:justify-between items-center gap-4 md:gap-2 list-none p-0">
              {FUNNEL_STAGES.map((s, i) => (
                <li key={s.label} className="flex md:flex-col items-center gap-3 md:gap-2 md:flex-1 md:min-w-0">
                  <div className="flex flex-col items-center">
                    <div aria-hidden className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))" }}>
                      <s.Icon size={22} className="text-white" />
                    </div>
                    <div className="mt-1.5 font-mono-ui text-[10px] uppercase tracking-[0.12em] text-brand-purple text-center max-w-[110px] leading-tight">
                      {s.label}
                    </div>
                  </div>
                  {i < FUNNEL_STAGES.length - 1 && (
                    <>
                      <ChevronRight aria-hidden size={20} className="hidden md:block text-brand-lavender flex-shrink-0" />
                      <ChevronDown aria-hidden size={20} className="md:hidden text-brand-lavender" />
                    </>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="h-full">
          <div className="mt-5 max-w-[640px] mx-auto rounded-xl px-5 py-3.5 text-center"
            style={{ background: "hsl(247 93% 64% / 0.06)", border: "1px solid hsl(247 93% 64% / 0.15)" }}>
            <p className="text-ink-secondary text-[14px] font-medium">
              A gap at any stage stops new patients from reaching your practice — regardless of care quality or marketing spend.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Section 4: Diagnostic Cards ---------- */
const GAPS = [
  { n: "01", Icon: EyeOff, h3: "Local & AI Visibility Gap", symptom: "Patients in your area don't see your practice in Google, Maps, or AI-driven answers (ChatGPT, Gemini, Perplexity).", impact: "Demand exists — it's going to competitors with stronger visibility systems.", fix: "Local SEO, GBP optimization, structured content, AEO/GEO readiness, and AI-search visibility.", link: "Healthcare SEO →", href: "/services/seo" },
  { n: "02", Icon: MessageSquare, h3: "AI Search Readiness Gap", symptom: "Your content isn't structured for how AI assistants extract and recommend providers.", impact: "Patients asking AI for recommendations are pointed elsewhere.", fix: "AEO/GEO content structuring, schema, entity authority, and AI-citation-ready pages.", link: "AI Engine Optimization →", href: "/services/seo/aeo" },
  { n: "03", Icon: Megaphone, h3: "Paid Acquisition Gap", symptom: "Ads run, clicks happen, but bookings don't follow. CPL is unclear or unmeasured.", impact: "Spend continues without attribution — the budget drains, the pipeline doesn't fill.", fix: "Specialty-targeted campaigns, call tracking, landing-page alignment, and CPL accountability.", link: "Paid Advertising →", href: "/services/paid-ads" },
  { n: "04", Icon: MousePointerClick, h3: "Website Conversion Gap", symptom: "Traffic arrives but doesn't convert. CTAs are weak, booking paths are buried, mobile is slow.", impact: "Money spent driving traffic returns no patients.", fix: "Conversion-first website redesign, clear CTAs, and booking flow optimization.", link: "Website Design & CRO →", href: "/services/website-design" },
  { n: "05", Icon: Phone, h3: "Call & Booking Gap", symptom: "Leads arrive but calls go unanswered, forms aren't followed up, or booking paths are too complex.", impact: "Interested patients choose the next practice that answers faster.", fix: "Call tracking, follow-up workflows, and friction-free booking integration.", link: "Healthcare Website Design →", href: "/services/website-design" },
  { n: "06", Icon: BarChart2, h3: "Reporting & Attribution Gap", symptom: "No clear view of which channels, keywords, or campaigns produced actual new patients.", impact: "Can't optimize spend — budget misallocated, poor results continue.", fix: "Call tracking, source attribution, dashboard reporting, and CPL measurement.", link: "How It Works →", href: "/how-it-works" },
];
function GapCard({ g, i }: { g: typeof GAPS[number]; i: number }) {
  const ref = useTilt<HTMLElement>();
  return (
    <Reveal delay={i * 0.05} className="h-full">
      <article
        ref={ref}
        data-analytics-event="diagnostic_card_click"
        data-gap-number={i + 1}
        data-gap-name={g.h3}
        className="h-full rounded-[18px] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_44px_-22px_hsl(248_49%_15%/0.35)]"
        style={{ background: "hsl(0 0% 100% / 0.90)", backdropFilter: "blur(16px)", border: "1px solid hsl(247 93% 64% / 0.10)" }}
      >
        <div aria-hidden className="h-1.5 w-full" style={{ background: "linear-gradient(90deg, hsl(247 93% 64%), hsl(248 100% 75%))" }} />
        <div className="p-6">
          <div className="flex items-center justify-between">
            <span className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-brand-purple px-2.5 py-1 rounded-full" style={{ background: "hsl(247 93% 64% / 0.08)" }}>Gap {g.n}</span>
            <div aria-hidden className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))" }}>
              <g.Icon size={18} className="text-white" />
            </div>
          </div>
          <h3 className="mt-4 font-extrabold text-brand-deep text-[18px] leading-tight">{g.h3}</h3>

          <div className="mt-4 space-y-2.5">
            <div>
              <div className="font-mono-ui text-[10px] uppercase tracking-[0.12em]" style={{ color: "hsl(38 92% 41%)" }}>Symptom</div>
              <p className="text-[13.5px] text-ink-secondary leading-[1.6]">{g.symptom}</p>
            </div>
            <div>
              <div className="font-mono-ui text-[10px] uppercase tracking-[0.12em]" style={{ color: "hsl(0 73% 57% / 0.85)" }}>Impact</div>
              <p className="text-[13.5px] text-ink-secondary leading-[1.6]">{g.impact}</p>
            </div>
            <div>
              <div className="font-mono-ui text-[10px] uppercase tracking-[0.12em]" style={{ color: "hsl(142 71% 36%)" }}>Vigorant Fix</div>
              <p className="text-[13.5px] text-ink-secondary leading-[1.6]">{g.fix}</p>
            </div>
          </div>

          <Link to={g.href} className="mt-5 inline-flex items-center gap-1.5 text-brand-purple text-[13px] font-bold hover:gap-2.5 transition-all">
            {g.link}
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
function DiagnosticGrid() {
  return (
    <section aria-labelledby="mnp-gaps" className="py-20 sm:py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-[640px] mx-auto">
          <Reveal><ChipLabel>Where Patients Are Being Lost</ChipLabel></Reveal>
          <Reveal delay={0.05} className="h-full">
            <h2 id="mnp-gaps" className="font-extrabold text-brand-deep mt-4 leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.03em" }}>
              Where Online New Patients <span className="gradient-text">Are Being Lost</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="h-full">
            <p className="mt-4 max-w-[520px] mx-auto text-ink-secondary text-[15px] sm:text-[16px] leading-[1.7]">
              Six of the most common points where online new patient flow breaks down — each with a measurable impact on booked appointments.
            </p>
          </Reveal>
        </div>
        <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px] max-w-[980px] mx-auto list-none p-0">
          {GAPS.map((g, i) => <li key={g.n}><GapCard g={g} i={i} /></li>)}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Section 5: Differentiation ---------- */
const COMP_ROWS = [
  ["Isolated SEO with ranking reports only", "SEO + AIO/GEO + local signals + AI-search readiness together"],
  ["Ads measured by clicks and impressions", "Campaigns measured by qualified calls, booked appointments, and CPL"],
  ["Generic website design without conversion focus", "Specialty-specific conversion architecture with tracking built in"],
  ["Monthly activity reports with no patient attribution", "Attribution-connected reporting: source → call → booked patient"],
  ["Treats dental, medical, and chiropractic identically", "Specialty-specific strategy, messaging, and patient-intent alignment"],
];
function Differentiation() {
  return (
    <section aria-labelledby="mnp-diff" className="relative overflow-hidden py-20 sm:py-24"
      style={{ background: "linear-gradient(160deg, hsl(248 49% 15%), hsl(250 45% 19%), hsl(248 49% 15%))" }}>
      <div aria-hidden className="absolute left-1/2 top-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(247 93% 64% / 0.08), transparent 70%)", filter: "blur(100px)" }} />
      <div className="container relative">
        <div className="text-center max-w-[680px] mx-auto">
          <Reveal><ChipLabel dark>Our Differentiation</ChipLabel></Reveal>
          <Reveal delay={0.05} className="h-full">
            <h2 id="mnp-diff" className="font-extrabold text-white mt-4 leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.03em" }}>
              What Makes Vigorant <span className="gradient-text">Different</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="h-full">
            <p className="mt-5 max-w-[600px] mx-auto text-white/65 text-[15px] sm:text-[17px] leading-[1.78]">
              Not isolated SEO. Not ads alone. Not a pretty website by itself. Vigorant builds a patient acquisition system that connects visibility, conversion, paid campaigns, SEO, AIO/GEO, reputation, tracking, and optimization.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="h-full">
          <div className="mt-10 max-w-[720px] mx-auto rounded-2xl px-7 py-6"
            style={{ background: "hsl(0 0% 100% / 0.05)", border: "1px solid hsl(248 100% 75% / 0.18)" }}>
            <div className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-brand-lavender">Definition · AIO/GEO Ready</div>
            <p className="mt-2 text-white/85 text-[15px] leading-[1.78]">
              A patient acquisition system connects SEO, AI visibility, paid advertising, website conversion, reputation signals, call tracking, and analytics into one measurable process — designed specifically to turn online patient interest into booked appointments.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="h-full">
          <div data-analytics-event="comparison_table_view"
            className="mt-10 max-w-[880px] mx-auto rounded-[18px] overflow-hidden"
            style={{ background: "hsl(0 0% 100% / 0.04)", border: "1px solid hsl(0 0% 100% / 0.07)" }}>
            <div className="hidden sm:grid grid-cols-2 text-[14px] font-semibold" style={{ borderBottom: "1px solid hsl(0 0% 100% / 0.06)" }}>
              <div className="px-5 sm:px-6 py-4 text-white/40" style={{ background: "hsl(0 0% 100% / 0.02)" }}>Traditional Marketing Vendor</div>
              <div className="px-5 sm:px-6 py-4 text-brand-bright" style={{ background: "hsl(247 93% 64% / 0.12)", borderLeft: "1px solid hsl(247 93% 64% / 0.2)" }}>Vigorant Growth System</div>
            </div>
            {COMP_ROWS.map(([left, right], i) => (
              <div key={i} className="grid grid-cols-1 sm:grid-cols-2 text-[13.5px]" style={{ borderBottom: i < COMP_ROWS.length - 1 ? "1px solid hsl(0 0% 100% / 0.04)" : "none" }}>
                <div className="px-5 sm:px-6 py-3.5 text-white/60 border-b sm:border-b-0 border-white/5">
                  <span className="font-mono-ui text-[10px] uppercase tracking-[0.1em] text-white/40 block sm:hidden mb-1">Traditional</span>
                  <span aria-hidden className="mr-1.5" style={{ color: "hsl(0 100% 70% / 0.65)" }}>✗</span>{left}
                </div>
                <div className="px-5 sm:px-6 py-3.5 text-white/85 sm:border-l border-white/5">
                  <span className="font-mono-ui text-[10px] uppercase tracking-[0.1em] text-brand-bright block sm:hidden mb-1">Vigorant</span>
                  <span aria-hidden className="mr-1.5 text-brand-bright">✓</span>{right}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.25} className="h-full">
          <div className="mt-10 text-center">
            <Link to="/how-it-works" className="inline-flex items-center gap-1.5 text-white/70 text-[15px] font-semibold hover:text-white transition-colors">
              See how our growth system works →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Section 6: 5-step system ---------- */
const STEPS = [
  { n: "01", badge: "Start Here", h3: "Diagnose the Gap", body: "Identify exactly where online new patient flow is breaking down.", bullets: ["Website, SEO, and GBP performance review", "Paid ads and call tracking audit", "Competitor visibility and AI-search gap analysis"], link: "Start with the free audit →", href: "/free-audit" },
  { n: "02", badge: "Visibility", h3: "Build Visibility", body: "Get the practice found — in Google, Maps, and AI search engines.", bullets: ["Local SEO, GBP optimization, and citation building", "AEO/GEO content structuring and schema", "Paid search and social campaigns for high-intent patient queries"], link: "Healthcare SEO & AI Search →", href: "/services/seo" },
  { n: "03", badge: "Conversion", h3: "Convert Demand", body: "Turn search traffic and ad clicks into booked appointments.", bullets: ["Specialty-specific landing pages and conversion-focused website design", "Clear CTAs, frictionless booking paths, and offer clarity", "Specialty-specific messaging aligned with patient intent"], link: "Website Design & CRO →", href: "/services/website-design" },
  { n: "04", badge: "Tracking", h3: "Track What Matters", body: "See which channels produce real patients — not just clicks.", bullets: ["Call tracking and form submission attribution", "New-patient source reporting and booked-appointment tracking", "Cost per lead and cost per booked patient measurement"], link: "How we track and report →", href: "/how-it-works" },
  { n: "05", badge: "Ongoing", h3: "Optimize Monthly", body: "Compound growth through continuous data-driven refinement.", bullets: ["Monthly performance review and channel optimization", "A/B testing on ads, landing pages, and booking flows", "AI-search visibility improvements as search behavior evolves"], link: "See results from the system →", href: "/results" },
];
function System() {
  return (
    <section aria-labelledby="mnp-system" className="py-20 sm:py-24" style={{ background: "hsl(248 100% 98%)" }}>
      <div className="container">
        <div className="text-center max-w-[640px] mx-auto">
          <Reveal><ChipLabel>The 5-Step System</ChipLabel></Reveal>
          <Reveal delay={0.05} className="h-full">
            <h2 id="mnp-system" className="font-extrabold text-brand-deep mt-4 leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.03em" }}>
              The Vigorant Patient <span className="gradient-text">Acquisition System</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="h-full">
            <p className="mt-4 max-w-[540px] mx-auto text-ink-secondary text-[15px] sm:text-[16px] leading-[1.7]">
              A branded 5-step process that diagnoses the gap, builds visibility, converts demand, tracks what matters, and optimizes every month.
            </p>
          </Reveal>
        </div>

        <ol className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-5 list-none p-0 max-w-[1100px] mx-auto">
          {STEPS.map((s, i) => (
            <li key={s.n}>
              <Reveal delay={i * 0.06} className="h-full">
                <article data-analytics-event="system_step_view" data-step={i + 1}
                  className="h-full rounded-2xl p-5 bg-white transition-all duration-300 hover:-translate-y-1"
                  style={{ border: "1px solid hsl(247 93% 64% / 0.12)", boxShadow: "0 8px 24px -16px hsl(248 49% 15% / 0.2)" }}>
                  <div className="flex flex-col items-start gap-2">
                    <div aria-hidden className="w-14 h-14 rounded-full flex items-center justify-center text-white font-mono-ui font-bold text-[16px]"
                      style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))" }}>
                      {s.n}
                    </div>
                    <span className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-brand-purple px-2 py-0.5 rounded-full" style={{ background: "hsl(247 93% 64% / 0.08)" }}>{s.badge}</span>
                  </div>
                  <h3 className="mt-3 font-extrabold text-brand-deep text-[15px]">{s.h3}</h3>
                  <p className="mt-2 text-ink-secondary text-[13px] leading-[1.65]">{s.body}</p>
                  <ul className="mt-3 space-y-1 list-none p-0">
                    {s.bullets.map(b => (
                      <li key={b} className="text-[12px] text-ink-muted leading-[1.55]">· {b}</li>
                    ))}
                  </ul>
                  <Link to={s.href} className="mt-3 inline-flex items-center gap-1 text-brand-purple text-[12px] font-bold hover:gap-2 transition-all">
                    {s.link}
                  </Link>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Section 7: Specialties ---------- */
const SPECIALTIES = [
  { tag: "Dental", Icon: Smile, h3: "Dental Practice Marketing", focus: "Implants · Cosmetic · New-Patient Exams · Emergency", body: "Dental practices need new-patient exams, high-value treatment inquiries (implants, Invisalign, cosmetic dentistry), emergency care visibility, and family care acquisition — with local SEO, paid search, reviews, and conversion-focused websites.", chips: ["New-Patient Exams", "Implants & Cosmetic", "Local SEO", "Google Ads"], cta: "Explore Dental Marketing →", href: "/solutions/dental", key: "dental" },
  { tag: "Chiropractic", Icon: Activity, h3: "Chiropractic Marketing", focus: "Local Demand · PI Care · Wellness · Reviews", body: "Chiropractic practices depend on local search dominance, high-intent symptom-based queries, strong reviews, fast booking conversion, and consistent patient flow across PI, wellness, and sports chiropractic models.", chips: ["Local SEO", "PI & Wellness", "Review Velocity", "Call Conversion"], cta: "Explore Chiropractic Marketing →", href: "/solutions/chiropractic", key: "chiropractic" },
  { tag: "Medical", Icon: Stethoscope, h3: "Medical Practice Marketing", focus: "Elective Services · Private Practice · Specialist Visibility", body: "Medical and specialty practices need visibility for elective and cash-pay services, trust signals that support high-consideration decisions, multi-provider visibility, and conversion paths built around longer patient research cycles.", chips: ["Elective Services", "Cash-Pay Growth", "Specialist SEO", "Trust Signals"], cta: "Explore Medical Marketing →", href: "/solutions/medical", key: "medical" },
];
function SpecialtyCard({ s, i }: { s: typeof SPECIALTIES[number]; i: number }) {
  const ref = useTilt<HTMLElement>();
  return (
    <Reveal delay={i * 0.06} className="h-full">
      <article ref={ref}
        data-analytics-event="specialty_card_click"
        data-specialty={s.key}
        className="h-full rounded-[20px] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_48px_-22px_hsl(248_49%_15%/0.35)]"
        style={{ background: "hsl(0 0% 100% / 0.88)", backdropFilter: "blur(16px)", border: "1px solid hsl(247 93% 64% / 0.12)" }}>
        <div className="flex items-center justify-between">
          <span className="font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-purple px-2.5 py-1 rounded-full" style={{ background: "hsl(247 93% 64% / 0.08)" }}>{s.tag}</span>
          <div aria-hidden className="w-[52px] h-[52px] rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))" }}>
            <s.Icon size={24} className="text-white" />
          </div>
        </div>
        <h3 className="mt-3 font-extrabold text-brand-deep text-[20px] leading-tight">{s.h3}</h3>
        <div className="mt-1 font-mono-ui text-[11px] text-ink-muted">{s.focus}</div>
        <p className="mt-3 text-ink-secondary text-[14px] leading-[1.68]">{s.body}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {s.chips.map(c => (
            <span key={c} className="font-mono-ui text-[10px] uppercase tracking-[0.10em] text-brand-purple px-2 py-1 rounded-full" style={{ background: "hsl(247 93% 64% / 0.07)" }}>{c}</span>
          ))}
        </div>
        <Link to={s.href} className="mt-4 inline-flex items-center gap-1.5 btn-primary-grad text-[13px] font-bold px-4 py-2 rounded-full">
          {s.cta}
        </Link>
      </article>
    </Reveal>
  );
}
function Specialties() {
  return (
    <section aria-labelledby="mnp-spec" className="py-20 sm:py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-[600px] mx-auto">
          <Reveal><ChipLabel>By Practice Type</ChipLabel></Reveal>
          <Reveal delay={0.05} className="h-full">
            <h2 id="mnp-spec" className="font-extrabold text-brand-deep mt-4 leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.03em" }}>
              Solutions by <span className="gradient-text">Practice Type</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="h-full">
            <p className="mt-4 max-w-[500px] mx-auto text-ink-secondary text-[15px] sm:text-[16px] leading-[1.7]">
              New patient acquisition looks different for each specialty. Select yours to see how Vigorant addresses your specific patient-flow challenges.
            </p>
          </Reveal>
        </div>
        <div className="mt-11 grid grid-cols-1 md:grid-cols-3 gap-[18px] max-w-[900px] mx-auto">
          {SPECIALTIES.map((s, i) => <SpecialtyCard key={s.key} s={s} i={i} />)}
        </div>
      </div>
    </section>
  );
}

/* ---------- Section 8: Marketing spend checklist ---------- */
const CHECKLIST = [
  "Targeting keywords patients don't actually search",
  "Landing pages that don't match the ad's promise",
  "Weak or unclear offer (no reason to choose your practice)",
  "No call tracking (can't see which channels produce calls)",
  "Google Business Profile not optimized or poorly maintained",
  "Phone calls going unanswered or not being logged",
  "Slow or absent lead follow-up",
  "No specialty-specific positioning or messaging",
  "No retargeting for website visitors who didn't convert",
  "No AEO/GEO structure for AI-powered search results",
  "Website not built for mobile speed and patient trust",
  "Marketing reports show activity, not patient attribution",
];
function SpendChecklist() {
  return (
    <section aria-labelledby="mnp-spend" className="py-20 sm:py-24" style={{ background: "hsl(248 100% 98%)" }} data-analytics-event="checklist_section_view">
      <div className="container">
        <div className="text-center max-w-[700px] mx-auto">
          <Reveal><ChipLabel>If Marketing Isn't Working</ChipLabel></Reveal>
          <Reveal delay={0.05} className="h-full">
            <h2 id="mnp-spend" className="font-extrabold text-brand-deep mt-4 leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(28px, 5vw, 46px)", letterSpacing: "-0.03em" }}>
              If You Are Already Spending on Marketing <span className="gradient-text">But Not Seeing Results</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="h-full">
            <p className="mt-5 max-w-[600px] mx-auto text-ink-secondary text-[16px] sm:text-[17px] leading-[1.78]">
              Spending on marketing that doesn't translate into new patients is a different problem — and a frustrating one. The issue is usually not the budget. It's the system.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="h-full">
          <div className="mt-11 max-w-[820px] mx-auto rounded-[18px] p-7 sm:p-9"
            style={{ background: "hsl(0 0% 100% / 0.90)", backdropFilter: "blur(16px)", border: "1px solid hsl(247 93% 64% / 0.12)" }}>
            <div className="flex items-center gap-2.5">
              <AlertTriangle aria-hidden size={22} style={{ color: "hsl(38 92% 41%)" }} />
              <h3 className="font-extrabold text-brand-deep text-[17px]">Common Reasons Marketing Spend Does Not Translate Into New Patients</h3>
            </div>
            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-1.5 list-none p-0">
              {CHECKLIST.map(item => (
                <li key={item} className="flex items-start gap-2.5">
                  <span aria-hidden className="mt-[3px] flex-shrink-0 w-[18px] h-[18px] rounded" style={{ background: "hsl(247 93% 64% / 0.06)", border: "1.5px solid hsl(247 93% 64% / 0.25)" }} />
                  <span className="text-[13px] text-ink-secondary leading-[1.6]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="h-full">
          <div className="mt-8 text-center">
            <p className="text-ink-secondary text-[15px] mb-3.5">Find out where your marketing spend is leaking.</p>
            <Link to="/free-audit" className="btn-primary-grad inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold min-h-[48px]">
              Request a Free Spend Analysis <ArrowRight aria-hidden size={18} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Section 9: Proof ---------- */
// TODO: replace with verified client data
const PROOF = [
  { tag: "Dental Practice · Phoenix, AZ", metric: 34, prefix: "+", suffix: "", label: "new patients / month", challenge: "Low online new-patient flow despite active ad spend", chips: ["Local SEO", "Google Ads", "Website CRO"], timeline: "within 60 days", quote: "We'd tried three agencies before Vigorant. This is the first time the phone actually rings.", key: "dental" },
  { tag: "Chiropractic Clinic · Austin, TX", metric: 28, prefix: "+", suffix: "", label: "new patients / month", challenge: "Google Maps invisible; poor review velocity", chips: ["Local SEO", "Reputation", "Paid Ads"], timeline: "within 90 days", quote: "The AI dashboard alone changed how I think about marketing spend.", key: "chiropractic" },
  { tag: "Medical Practice · Denver, CO", metric: 47, prefix: "↓", suffix: "%", label: "cost per patient", challenge: "Ads spending $4,500/month with no attribution", chips: ["Paid Ads", "Landing Pages", "Analytics"], timeline: "within 45 days", quote: "Finally a team that speaks in patient revenue, not impressions.", key: "medical" },
];
function Proof() {
  return (
    <section aria-labelledby="mnp-proof" className="relative overflow-hidden py-20 sm:py-24"
      style={{ background: "linear-gradient(135deg, hsl(248 49% 15%), hsl(250 45% 19%), hsl(248 49% 15%))" }}>
      <div aria-hidden className="absolute left-1/2 top-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(247 93% 64% / 0.08), transparent 70%)", filter: "blur(100px)" }} />
      <div className="container relative">
        <div className="text-center max-w-[560px] mx-auto">
          <Reveal><ChipLabel dark>Show the Math, Not Just the Marketing</ChipLabel></Reveal>
          <Reveal delay={0.05} className="h-full">
            <h2 id="mnp-proof" className="font-extrabold text-white mt-4 leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.03em" }}>
              Real Practices. <span className="gradient-text">Real New Patients.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="h-full">
            <p className="mt-4 max-w-[520px] mx-auto text-white/60 text-[15px] sm:text-[16px] leading-[1.7]">
              Three practices that turned a broken patient acquisition system into measurable new patient growth.
            </p>
          </Reveal>
        </div>

        <div className="mt-11 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[960px] mx-auto">
          {PROOF.map((p, i) => (
            <Reveal key={p.key} delay={i * 0.06} className="h-full">
              <article data-analytics-event="proof_card_click" data-specialty={p.key}
                className="h-full rounded-[18px] p-7 transition-all duration-300 hover:-translate-y-1"
                style={{ background: "hsl(250 45% 19%)", border: "1px solid hsl(0 0% 100% / 0.07)" }}>
                <div className="font-mono-ui text-[11px] text-white/40">{p.tag}</div>
                <div className="mt-4 font-display font-bold gradient-text leading-none" style={{ fontSize: "clamp(48px, 6vw, 64px)" }}>
                  {p.prefix}<Counter to={p.metric} />{p.suffix}
                </div>
                <div className="mt-1 font-mono-ui text-[12px] text-white/50">{p.label}</div>
                <p className="mt-3 text-[12.5px] text-white/60 leading-[1.6]">{p.challenge}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.chips.map(c => (
                    <span key={c} className="font-mono-ui text-[10px] uppercase tracking-[0.10em] text-white/70 px-2 py-1 rounded-full" style={{ background: "hsl(0 0% 100% / 0.06)" }}>{c}</span>
                  ))}
                </div>
                <div className="mt-3 inline-block font-mono-ui text-[10px] uppercase tracking-[0.10em] text-brand-lavender px-2 py-1 rounded-full" style={{ background: "hsl(247 93% 64% / 0.15)" }}>{p.timeline}</div>
                <p className="mt-3 text-white/75 italic text-[13.5px] leading-[1.65]">"{p.quote}"</p>
                <Link to="/results" className="mt-3 inline-flex items-center gap-1.5 text-brand-lavender text-[12.5px] font-bold hover:gap-2.5 transition-all">
                  Read case study →
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="h-full">
          <div className="mt-10 text-center">
            <Link to="/results" className="text-white/60 hover:text-white text-[14px] font-semibold transition-colors">View all case studies →</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Section 10: Audit offer ---------- */
const AUDIT_BULLETS = [
  "SEO and local visibility review",
  "AI visibility snapshot (ChatGPT, Gemini, Perplexity)",
  "Paid ads waste and opportunity check",
  "Competitor gap analysis",
  "Website conversion assessment",
  "Lead tracking and attribution review",
  "Growth opportunity summary and prioritized roadmap",
];
function AuditOffer() {
  return (
    <section id="audit" aria-labelledby="mnp-audit" className="py-20 sm:py-24" style={{ background: "hsl(248 100% 98%)" }} data-analytics-event="audit_section_view">
      <div className="container">
        <div className="text-center max-w-[580px] mx-auto">
          <Reveal><ChipLabel>The First Step</ChipLabel></Reveal>
          <Reveal delay={0.05} className="h-full">
            <h2 id="mnp-audit" className="font-extrabold text-brand-deep mt-4 leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.03em" }}>
              What Your Free <span className="gradient-text">Growth Audit Includes</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="h-full">
            <p className="mt-4 max-w-[520px] mx-auto text-ink-secondary text-[15px] sm:text-[16px] leading-[1.7]">
              Frame this as a diagnostic, not a sales call. You get clear findings whether or not we work together.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 max-w-[1000px] mx-auto items-start">
          <Reveal>
            <div>
              <p className="text-ink-secondary text-[15px] mb-4">In 20 minutes we review your complete online patient acquisition path and identify where patients are being lost.</p>
              <ul className="space-y-2.5 list-none p-0">
                {AUDIT_BULLETS.map(b => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span aria-hidden className="mt-0.5 flex-shrink-0 w-[18px] h-[18px] rounded-full flex items-center justify-center" style={{ background: "hsl(247 93% 64% / 0.1)" }}>
                      <Check size={11} style={{ color: "hsl(142 71% 36%)" }} strokeWidth={3} />
                    </span>
                    <span className="text-[14px] text-brand-deep font-medium">{b}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 font-mono-ui text-[11px] text-ink-muted">No obligation. Clear findings. Practical next steps.</p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <div className="rounded-[20px] p-8 bg-white"
              style={{ border: "1px solid hsl(247 93% 64% / 0.15)", boxShadow: "8px 8px 28px hsl(248 49% 15% / 0.08), -4px -4px 14px hsl(0 0% 100% / 0.9)" }}>
              <h3 className="font-extrabold text-brand-deep text-[20px]">Request Your Free Audit</h3>
              <p className="mt-2 text-ink-secondary text-[14px]">Identify exactly where your online patient flow is breaking down.</p>
              <Link to="/free-audit" className="btn-primary-grad mt-5 inline-flex w-full items-center justify-center gap-2 px-5 py-3.5 rounded-full font-bold min-h-[48px]">
                Request Your Free Practice Growth Audit <ArrowRight size={18} aria-hidden />
              </Link>
              <div className="mt-4 inline-block font-mono-ui text-[11px] text-brand-purple px-3 py-1.5 rounded-full" style={{ background: "hsl(247 93% 64% / 0.08)" }}>
                8 new audit slots per month · 3 remaining
              </div>
              <div className="mt-3.5 flex flex-wrap gap-2">
                {["No commitment", "24hr response", "HIPAA aware"].map(c => (
                  <span key={c} className="font-mono-ui text-[10px] uppercase tracking-[0.10em] text-brand-purple px-2.5 py-1 rounded-full" style={{ background: "hsl(247 93% 64% / 0.08)" }}>{c}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Section 11: FAQ ---------- */
function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section aria-labelledby="mnp-faq" className="py-20 sm:py-24 bg-white">
      <div className="container">
        <div className="text-center">
          <Reveal><ChipLabel>Common Questions</ChipLabel></Reveal>
          <Reveal delay={0.05} className="h-full">
            <h2 id="mnp-faq" className="font-extrabold text-brand-deep mt-4 max-w-[680px] mx-auto leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(26px, 4.6vw, 42px)", letterSpacing: "-0.03em" }}>
              Frequently Asked Questions About Getting More New Patients Online
            </h2>
          </Reveal>
        </div>

        <div className="mt-10 max-w-[760px] mx-auto flex flex-col gap-2.5">
          {FAQS.map((f, i) => {
            const isOpen = openIdx === i;
            const btnId = `mnp-faq-btn-${i}`;
            const panelId = `mnp-faq-panel-${i}`;
            return (
              <Reveal key={f.q} delay={i * 0.03} className="h-full">
                <div className="rounded-2xl bg-white" style={{ border: "1px solid hsl(247 93% 64% / 0.12)" }}>
                  <h3 className="m-0">
                    <button id={btnId} type="button" aria-expanded={isOpen} aria-controls={panelId}
                      onClick={() => { setOpenIdx(isOpen ? null : i); /* analytics: faq_expand */ }}
                      data-analytics-event="faq_expand"
                      className="w-full flex items-start justify-between gap-5 text-left px-5 sm:px-6 py-5 min-h-[56px] hover:bg-brand-purple/5 transition-colors rounded-2xl">
                      <span className="text-[16px] sm:text-[17px] font-semibold text-brand-deep">{f.q}</span>
                      <Plus aria-hidden size={20} className="text-brand-purple flex-shrink-0 mt-1 transition-transform duration-300"
                        style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0)" }} />
                    </button>
                  </h3>
                  <div id={panelId} role="region" aria-labelledby={btnId} hidden={!isOpen}>
                    <p className="px-5 sm:px-6 pb-6 text-[15px] text-ink-secondary leading-[1.82]">{f.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Section 12: Final CTA ---------- */
function FinalCTA() {
  return (
    <section aria-labelledby="mnp-final" className="relative overflow-hidden flex items-center justify-center"
      style={{ minHeight: 500, background: "linear-gradient(160deg, hsl(248 49% 15%) 0%, hsl(250 45% 19%) 45%, hsl(248 49% 15%) 100%)" }}>
      <div aria-hidden className="absolute -top-16 -right-16 w-[380px] h-[380px] rounded-full"
        style={{ background: "radial-gradient(circle, hsl(248 100% 75% / 0.15), transparent 70%)", filter: "blur(80px)" }} />
      <div aria-hidden className="absolute -bottom-16 -left-16 w-[300px] h-[300px] rounded-full"
        style={{ background: "radial-gradient(circle, hsl(247 93% 64% / 0.18), transparent 70%)", filter: "blur(60px)" }} />
      <div className="container relative py-20 sm:py-24 text-center max-w-2xl">
        <ChipLabel dark>Let's Find the Gap</ChipLabel>
        <h2 id="mnp-final" className="font-display font-bold text-white mt-5 leading-[1.15]"
          style={{ fontSize: "clamp(28px, 4.5vw, 50px)" }}>
          Let's Find the Gap Between Your Care Quality and Your Online Patient Flow.
        </h2>
        <p className="mt-5 max-w-[520px] mx-auto text-white/65 text-[15px] sm:text-[17px] leading-[1.72]">
          Request a free practice growth audit and see exactly where your online patient acquisition system is breaking down — and what to fix first.
        </p>
        <ul className="mt-6 inline-block text-left list-none p-0">
          {[
            "Online and AI visibility review",
            "Ads and conversion waste check",
            "Competitor gap analysis",
            "Growth opportunity roadmap — no obligation",
          ].map(b => (
            <li key={b} className="flex items-start gap-2.5 py-1 text-white/85 text-[15px] sm:text-[16px]">
              <span aria-hidden className="text-brand-bright">✦</span> {b}
            </li>
          ))}
        </ul>
        <div className="mt-5 font-mono-ui text-[12px] text-brand-lavender">
          8 new audit requests per month · 3 spots remaining
        </div>
        <Link to="/free-audit" data-analytics-event="final_cta_click" data-cta="primary"
          className="mt-7 inline-flex items-center gap-2 bg-white text-brand-deep font-bold text-[16px] sm:text-[17px] px-9 sm:px-11 py-4 rounded-full transition-all duration-300 hover:bg-brand-lavender hover:scale-[1.02] hover:shadow-[0_10px_36px_hsl(248_49%_15%/0.4)] min-h-[52px]">
          Request Your Free Growth Audit <ArrowRight size={18} aria-hidden />
        </Link>
        <div className="mt-5">
          <Link to="/services/seo" data-analytics-event="final_cta_click" data-cta="secondary"
            className="text-white/55 hover:text-white/85 text-[14px] font-semibold transition-colors">
            Explore Healthcare SEO & AI Search →
          </Link>
        </div>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {["HIPAA Aware", "Response Within 24 Hours", "No Long-Term Contracts"].map(t => (
            <span key={t} className="font-mono-ui text-[11px] text-white/60 px-4 py-1.5 rounded-full"
              style={{ background: "hsl(0 0% 100% / 0.08)", border: "1px solid hsl(0 0% 100% / 0.12)" }}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Mobile sticky ---------- */
function MobileStickyCTA() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("mnp-sticky-dismissed")) { setDismissed(true); return; }
    const onScroll = () => setShow(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (dismissed || !show) return null;
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 flex items-center gap-2 px-4 py-3"
      style={{ background: "hsl(248 49% 15%)", borderTop: "1px solid hsl(247 93% 64% / 0.2)", paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}>
      <Link to="/free-audit" className="btn-primary-grad flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-bold text-[15px] min-h-[44px]">
        Get Free Audit <ArrowRight size={16} aria-hidden />
      </Link>
      <button onClick={() => { sessionStorage.setItem("mnp-sticky-dismissed", "1"); setDismissed(true); }}
        aria-label="Dismiss sticky banner"
        className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white">
        <X size={18} aria-hidden />
      </button>
    </div>
  );
}

/* ---------- Page ---------- */
export default function MoreNewPatients() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <MnpSeo />
      <a href="#mnp-main" className="skip-link">Skip to main content</a>
      <GlobalFx />
      <Nav />
      <main id="mnp-main">
        <Hero />
        <Empathy />
        <RealProblem />
        <DiagnosticGrid />
        <Differentiation />
        <System />
        <Specialties />
        <SpendChecklist />
        <Proof />
        <AuditOffer />
        <FAQSection />
        <FinalCTA />
      </main>
      <MobileStickyCTA />
      <Footer />
    </>
  );
}
