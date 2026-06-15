import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useEffect, useId, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Smile, Bone, Stethoscope, Check, Search, Route, DollarSign,
  MousePointerClick, MapPin, Brain, Users, Star, BarChart2, Sparkles,
  Megaphone, Layout, Plus, X,
} from "lucide-react";
import GlobalFx, { Counter, useTilt } from "@/components/site/GlobalFx";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";

const ease = [0.16, 1, 0.3, 1] as const;

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease }}
      className={className}
    >{children}</motion.div>
  );
}

function ChipLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span className={dark ? "section-label-light" : "section-label inline-block px-3 py-1 rounded-full bg-brand-purple/8 border border-brand-purple/20"}>
      {children}
    </span>
  );
}

/* ---------- FAQ ---------- */
const FAQS = [
  { q: "What types of healthcare practices does Vigorant work with?", a: "Vigorant works with dental, chiropractic, and medical practices that need stronger patient acquisition, better online visibility, higher-quality leads, and clearer marketing ROI. The strategy changes by specialty because each practice type has different search behavior, patient intent, competitive pressure, and conversion needs." },
  { q: "Why should a dental practice use a specialty-specific marketing strategy?", a: "Dental practices often need growth around new patients, dental implants, cosmetic dentistry, emergency care, hygiene, and family dentistry. A specialty-specific strategy aligns local SEO, Google Ads, website messaging, reviews, and conversion tracking around the treatments that drive the highest value." },
  { q: "How is chiropractic marketing different from dental or medical marketing?", a: "Chiropractic marketing depends heavily on local search visibility, trust, patient education, fast booking, recurring care awareness, and review strength. The messaging must convert nearby patients searching for pain relief, wellness care, auto injury care, or sports-related treatment." },
  { q: "What makes medical practice marketing different?", a: "Medical practice marketing varies by specialty, provider mix, payer model, and patient intent. A private practice may need elective patient growth, referral support, multi-provider visibility, reputation development, and conversion-focused landing pages that build trust before patients schedule." },
  { q: "How does AI optimization help healthcare practices?", a: "AI optimization helps healthcare practices become easier for AI-powered search systems to understand, reference, and recommend. This includes structured content, schema markup, answer-focused copy, authoritative service pages, strong reputation signals, and clear entity relationships across the website." },
  { q: "Should we start with SEO, paid ads, or website improvements?", a: "The right starting point depends on the practice's current bottleneck. If visibility is low, SEO and AI visibility come first. If traffic exists but leads do not convert, website CRO matters most. If immediate demand is needed, paid ads can accelerate results when tracking and landing pages are ready." },
  { q: "Do multi-location practices need a different solution?", a: "Yes. Multi-location practices need location-level SEO, consistent brand positioning, provider and service page architecture, centralized reporting, local landing pages, reputation systems, and campaign segmentation so each location can grow without weakening the overall brand." },
  { q: "What is the best next step for choosing the right solution?", a: "The best next step is a practice growth audit. Vigorant reviews your website, search visibility, AI visibility, competitors, conversion path, reputation, and current marketing gaps to identify which growth pathway fits your specialty and business goals." },
];

/* ---------- SEO ---------- */
function SolutionsSeo() {
  const BASE = "https://vigorant.com";
  const webPage = {
    "@context": "https://schema.org", "@type": "WebPage",
    "@id": `${BASE}/solutions#webpage`,
    url: `${BASE}/solutions`,
    name: "Healthcare Marketing Solutions for Dental, Medical & Chiropractic Practices | Vigorant",
    description: "Specialty-specific marketing solutions for dental, chiropractic, and medical practices, including SEO, AI optimization, paid ads, website CRO, reputation, and analytics.",
    isPartOf: { "@id": `${BASE}/#website` },
    about: { "@id": `${BASE}/solutions#service` },
    breadcrumb: { "@id": `${BASE}/solutions#breadcrumb` },
  };
  const service = {
    "@context": "https://schema.org", "@type": "Service",
    "@id": `${BASE}/solutions#service`,
    name: "Healthcare Marketing Solutions",
    serviceType: "Healthcare digital marketing, patient acquisition, SEO, AI optimization, paid advertising, website conversion optimization",
    provider: { "@type": "Organization", name: "Vigorant", url: BASE },
    areaServed: { "@type": "Country", name: "United States" },
    audience: [
      { "@type": "Audience", audienceType: "Dental practices" },
      { "@type": "Audience", audienceType: "Chiropractic practices" },
      { "@type": "Audience", audienceType: "Medical practices" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Specialty-Specific Healthcare Marketing Solutions",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dental Practice Marketing", url: `${BASE}/solutions/dental` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chiropractic Marketing", url: `${BASE}/solutions/chiropractic` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Medical Practice Marketing", url: `${BASE}/solutions/medical` } },
      ],
    },
  };
  const breadcrumb = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "@id": `${BASE}/solutions#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
      { "@type": "ListItem", position: 2, name: "Solutions", item: `${BASE}/solutions` },
    ],
  };
  const faqPage = {
    "@context": "https://schema.org", "@type": "FAQPage",
    "@id": `${BASE}/solutions#faq`,
    mainEntity: FAQS.map(f => ({
      "@type": "Question", name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <Helmet>
      <title>Healthcare Marketing Solutions by Specialty | Vigorant</title>
      <meta name="description" content="Specialty marketing for dental, medical, and chiropractic practices: SEO, AI visibility, paid ads, and conversion websites." />
      <link rel="canonical" href={`${BASE}/solutions`} />
      <meta property="og:title" content="Healthcare Marketing Solutions for Dental, Medical & Chiropractic | Vigorant" />
      <meta property="og:description" content="Specialty-specific marketing solutions for dental, chiropractic, and medical practices." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${BASE}/solutions`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      <script type="application/ld+json">{JSON.stringify(webPage)}</script>
      <script type="application/ld+json">{JSON.stringify(service)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      <script type="application/ld+json">{JSON.stringify(faqPage)}</script>
    </Helmet>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-background" style={{ minHeight: "90vh", padding: "120px 0 80px" }} aria-labelledby="solutions-h1">
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute orb-a" style={{ top: "-80px", right: "-60px", width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle, hsl(247 93% 64% / 0.20), transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute orb-b" style={{ bottom: 60, left: "-60px", width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, hsl(248 100% 75% / 0.13), transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute orb-c" style={{ top: "40%", right: "10%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, hsl(247 100% 88% / 0.12), transparent 70%)", filter: "blur(100px)" }} />
        <div className="absolute inset-0 grid-overlay" />
      </div>

      <div className="container relative z-10">
        <nav aria-label="Breadcrumb" className="mb-6 flex justify-center">
          <ol className="flex items-center gap-2 font-mono-ui text-[11px] text-text-muted">
            <li><Link to="/" className="hover:text-brand-purple transition-colors">Home</Link></li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="text-brand-purple">Solutions</li>
          </ol>
        </nav>

        <div className="max-w-[820px] mx-auto text-center">
          <h1 id="solutions-h1" className="font-display font-bold mt-2 leading-[1.05]" style={{ fontSize: "clamp(36px, 6.5vw, 72px)", letterSpacing: "-0.02em" }}>
            {["Healthcare Marketing Solutions", "Built for Your Specialty."].map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "108%" }} animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.4 + i * 0.15, ease }}
                  className={`block ${i === 1 ? "gradient-text" : "text-brand-deep"}`}
                >{line}</motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05, duration: 0.7, ease }}
            className="mt-6 text-text-secondary max-w-[640px] mx-auto"
            style={{ fontSize: 18, lineHeight: 1.75 }}
          >
            Dental, chiropractic, and medical practices compete for patients in different ways. Vigorant builds AI-powered growth systems that align your SEO, AI visibility, paid ads, website, reputation, and analytics around the exact patient journey your specialty depends on.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.7, ease }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Link to="/free-audit" className="btn-primary-grad font-bold rounded-full" style={{ padding: "14px 30px", fontSize: 16 }}>
              Get a Free Practice Growth Audit
            </Link>
            <a href="#specialty-cards" className="btn-secondary-outline font-semibold rounded-full" style={{ padding: "14px 26px", fontSize: 16 }}>
              Choose Your Specialty ↓
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- One System Three Paths ---------- */
function OneSystem() {
  const rows = [
    { label: "Patient Intent", d: "New patients, implants, cosmetic, emergency, family care", c: "Pain relief, wellness, sports, auto injury care", m: "Specialist referrals, elective, concierge, cash-pay" },
    { label: "Top Channels", d: "Local SEO, Google Ads, Maps, reviews, website CRO", c: "Local SEO, Google Maps, paid social, reputation", m: "SEO, paid search, content, referral, paid social" },
    { label: "High-Value Services", d: "Implants, Invisalign, cosmetic, sleep apnea, veneers", c: "Wellness plans, sports chiro, cash-pay recurring care", m: "Elective procedures, concierge memberships, specialty care" },
    { label: "Conversion Concern", d: "Form fills, call conversion, case acceptance rate", c: "Speed to appointment, first-visit show rate", m: "Trust signals, consultation booking, referral path" },
    { label: "Vigorant Focus", d: "High-value patient targeting + treatment-specific SEO", c: "Local dominance + review velocity + booking flow", m: "Elective demand + authority content + ROI tracking" },
  ];
  return (
    <section className="relative overflow-hidden py-[88px]" style={{ background: "#1b1338" }} aria-labelledby="one-system-h2">
      <div aria-hidden className="absolute pointer-events-none" style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, hsl(247 93% 64% / 0.1), transparent 70%)", filter: "blur(80px)" }} />
      <div className="container relative z-10">
        <Reveal className="text-center">
          <ChipLabel dark>Why Specialty Matters</ChipLabel>
          <h2 id="one-system-h2" className="font-extrabold mt-4 max-w-[720px] mx-auto" style={{ fontSize: "clamp(28px,5vw,46px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            <span className="block text-white">One Healthcare Growth System.</span>
            <span className="block gradient-text">Three Specialty-Specific Paths.</span>
          </h2>
          <p className="mt-6 max-w-[620px] mx-auto" style={{ fontSize: 17, lineHeight: 1.78, color: "rgba(255,255,255,0.88)" }}>
            A dentist needs implant, cosmetic, hygiene, and family-patient demand. A chiropractor needs local trust, fast appointment conversion, and recurring care awareness. A medical practice may need elective, cash-pay, referral, or multi-provider growth. The marketing engine must match the business model — or it will underperform regardless of budget.
          </p>
        </Reveal>

        <div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1100px] mx-auto"
          style={{ gridTemplateRows: `auto repeat(${rows.length}, auto)` }}
        >
          {[
            { icon: Smile, label: "Dental", accent: "from-brand-purple to-brand-bright", key: "d" as const },
            { icon: Bone, label: "Chiropractic", accent: "from-brand-bright to-brand-purple", key: "c" as const },
            { icon: Stethoscope, label: "Medical", accent: "from-brand-purple to-brand-lavender", key: "m" as const },
          ].map(({ icon: Icon, label, accent, key }, colIdx) => (
            <Reveal
              key={label}
              delay={0.1 + colIdx * 0.1}
              className="md:row-span-full md:grid md:[grid-template-rows:subgrid]"
            >
              <article
                className="group relative h-full rounded-2xl p-6 sm:p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1 md:grid md:[grid-template-rows:subgrid] md:row-span-full md:gap-0"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
                }}
              >
                <div aria-hidden className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${accent} opacity-80`} />
                <div aria-hidden className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(circle, hsl(247 93% 64% / 0.25), transparent 70%)", filter: "blur(40px)" }} />

                <div className="relative flex items-center gap-3 pb-4">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/8 border border-white/12 text-brand-bright transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon aria-hidden size={22} />
                  </span>
                  <h3 className="text-white font-bold text-[18px] tracking-tight">{label}</h3>
                </div>

                {rows.map((r, i) => (
                  <div
                    key={r.label}
                    className={`relative py-4 ${i === 0 ? "" : "border-t border-white/10"} md:grid md:content-start`}
                  >
                    <div className="font-mono-ui text-[10.5px] uppercase tracking-[0.10em] text-brand-bright/85">
                      {r.label}
                    </div>
                    <div className="mt-1.5 text-[13.5px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.92)" }}>
                      {r[key]}
                    </div>
                  </div>
                ))}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Specialty cards ---------- */
type SpecialtyCard = {
  tag: string; icon: typeof Smile; h3: string; body: string;
  links: { label: string; href: string }[];
  cta: { label: string; href: string };
  address: string[];
  services: string[];
};
const SPECIALTIES: SpecialtyCard[] = [
  {
    tag: "Dental", icon: Smile,
    h3: "Dental Practice Marketing",
    body: "For dental practices that need more new patients, stronger local visibility, better implant and cosmetic case flow, and a website that turns search traffic into booked appointments. We align every channel around the services that drive your highest production.",
    links: [
      { label: "Getting More New Patients", href: "/for-practices/more-new-patients" },
      { label: "Dental SEO Strategy", href: "/services/seo" },
      { label: "Attract High-Value Patients", href: "/for-practices/high-value-patients" },
    ],
    cta: { label: "Explore Dental Practice Marketing", href: "/solutions/dental" },
    address: [
      "New patient volume and local search visibility",
      "Demand generation across the treatments that drive your highest production",
      "Website conversion and appointment booking flow",
      "Review growth and Google Maps ranking",
    ],
    services: ["Local SEO", "Google Ads", "AIO/GEO", "Website CRO", "Review Engine", "Dental Paid Ads"],
  },
  {
    tag: "Chiropractic", icon: Bone,
    h3: "Chiropractic Marketing",
    body: "For chiropractic practices that need predictable local demand, stronger Google Maps visibility, better patient education, and campaigns that convert nearby searchers into booked visits — whether for pain relief, wellness care, or sports treatment.",
    links: [
      { label: "Predictable Patient Flow", href: "/for-practices/predictable-patient-flow" },
      { label: "Online Reputation", href: "/for-practices/online-reputation" },
      { label: "Local SEO Services", href: "/services/seo" },
    ],
    cta: { label: "Explore Chiropractic Marketing", href: "/solutions/chiropractic" },
    address: [
      "Local search visibility and Google Maps dominance",
      "Demand generation across the care types your patients search for most",
      "Booking conversion and appointment show rate",
      "Review velocity and reputation management",
    ],
    services: ["Local SEO", "Google Maps", "Paid Ads", "Reputation", "Website CRO", "Social Proof"],
  },
  {
    tag: "Medical", icon: Stethoscope,
    h3: "Medical Practice Marketing",
    body: "For medical and specialty practices that need better patient acquisition, higher-value service demand, stronger trust signals, and measurable marketing ROI — whether you run a single-provider clinic or a growing multi-location group.",
    links: [
      { label: "Scale Your Practice", href: "/for-practices/scale-your-practice" },
      { label: "Online Visibility", href: "/for-practices/online-visibility" },
      { label: "Website Design & CRO", href: "/services/website-design" },
    ],
    cta: { label: "Explore Medical Practice Marketing", href: "/solutions/medical" },
    address: [
      "Elective and cash-pay patient acquisition",
      "Demand generation across the service lines that matter most to your practice",
      "Trust signals and authority content strategy",
      "Marketing attribution and ROI accountability",
    ],
    services: ["SEO", "Paid Ads", "AI Visibility", "Website CRO", "Analytics", "Reputation"],
  },
];

function SpecialtyCardBlock({ card, delay }: { card: SpecialtyCard; delay: number }) {
  const tilt = useTilt(4);
  const Icon = card.icon;
  return (
    <Reveal delay={delay}>
      <article
        ref={tilt as any}
        className="grid md:grid-cols-[1.4fr_1fr] overflow-hidden rounded-[22px] border border-white/80 tilt-spotlight transition-all duration-[400ms]"
        style={{ background: "rgba(255,255,255,0.88)", backdropFilter: "blur(20px) saturate(150%)", boxShadow: "0 8px 36px rgba(27,19,56,0.07)" }}
      >
        <div className="p-9 sm:p-10 flex flex-col">
          <div className="flex items-center">
            <span className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))" }}>
              <Icon aria-hidden size={24} className="text-white" />
            </span>
          </div>
          <h3 className="font-bold text-brand-deep mt-4" style={{ fontSize: 22, letterSpacing: "-0.025em" }}>
            {card.h3}
          </h3>
          <p className="text-text-secondary mt-2.5 max-w-[420px]" style={{ fontSize: 15, lineHeight: 1.7 }}>
            {card.body}
          </p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
            {card.links.map(l => (
              <Link key={l.label} to={l.href} className="text-brand-purple font-medium text-[13px] hover:underline">
                → {l.label}
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              to={card.cta.href}
              aria-label={`${card.cta.label.toLowerCase()} solutions`}
              className="inline-flex items-center btn-primary-grad font-bold rounded-full px-6 py-3 text-[14px]"
            >
              {card.cta.label} <ArrowRight aria-hidden size={16} className="ml-1.5" />
            </Link>
          </div>
        </div>

        <div className="p-9 sm:p-7 flex flex-col gap-4" style={{ background: "rgba(100,79,249,0.04)", borderLeft: "1px solid rgba(100,79,249,0.1)" }}>
          <div className="font-mono-ui uppercase text-[11px] tracking-[0.08em] text-text-muted mb-1">
            What We Address
          </div>
          {card.address.map((row) => (
            <div key={row} className="flex items-start gap-3">
              <span className="w-[18px] h-[18px] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(100,79,249,0.1)" }}>
                <Check aria-hidden size={11} className="text-brand-purple" />
              </span>
              <span className="text-[13px] font-medium text-brand-deep">{row}</span>
            </div>
          ))}
          <div className="mt-auto pt-4 border-t flex flex-wrap gap-1.5" style={{ borderColor: "rgba(100,79,249,0.1)" }}>
            {card.services.map(s => (
              <span key={s} className="font-mono-ui text-[10px] px-2.5 py-1 rounded-full text-brand-purple border border-brand-purple/12" style={{ background: "rgba(100,79,249,0.07)" }}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function SpecialtyCards() {
  return (
    <section id="specialty-cards" className="py-24 bg-surface-secondary" aria-labelledby="specialty-cards-h2">
      <div className="container">
        <Reveal className="text-center max-w-[620px] mx-auto">
          <h2 id="specialty-cards-h2" className="font-extrabold mt-2" style={{ fontSize: "clamp(28px,5vw,46px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            <span className="block text-brand-deep">Choose the Type of Practice</span>
            <span className="block gradient-text">You Want to Grow</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-[520px] mx-auto" style={{ fontSize: 16 }}>
            Each specialty path includes dedicated strategy, channel selection, messaging, and a focused audit for your specific practice type and market.
          </p>
        </Reveal>

        <div className="mt-13 max-w-[960px] mx-auto flex flex-col gap-6 mt-12">
          {SPECIALTIES.map((c, i) => (
            <SpecialtyCardBlock key={c.tag} card={c} delay={0.1 + i * 0.1} />
          ))}
        </div>

        <Reveal delay={0.2} className="text-center mt-12">
          <p className="text-text-secondary text-[15px]">Not sure which specialty path is right for you?</p>
          <Link to="/free-audit" className="inline-flex items-center mt-4 btn-primary-grad font-bold rounded-full px-7 py-3.5 text-[15px]">
            Not Sure? Start with the Free Audit <ArrowRight aria-hidden size={16} className="ml-2" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Why Specialty Converts ---------- */
function WhyConverts() {
  const blocks = [
    { icon: Search, tag: "Search Intent", h3: "Aligned Search Targeting", body: "Patients searching for 'dental implants near me' have different intent from those searching 'chiropractor for back pain'. Specialty-specific keyword strategy reaches each patient at the right moment with the right message — reducing wasted spend and improving lead quality." },
    { icon: Route, tag: "Decision Journey", h3: "Mapped Patient Decision Paths", body: "A cosmetic dental patient researches for weeks before booking. A chiropractic patient in pain wants to book within hours. A medical specialist referral requires trust and authority content. Each journey needs a different content architecture, ad sequence, and conversion path." },
    { icon: DollarSign, tag: "High-Value Services", h3: "Treatment-Specific Demand Generation", body: "Implant campaigns perform differently from hygiene recall campaigns. Wellness chiro campaigns look nothing like PI injury campaigns. We build specialty-specific ad creative, landing pages, and SEO content for the services that actually drive your revenue." },
    { icon: MousePointerClick, tag: "Conversion Flow", h3: "Optimized Conversion Architecture", body: "The right conversion path for a dental implant inquiry — multi-step form with consultation framing — is completely wrong for a chiro walk-in booking. Specialty-specific CRO means the path from first visit to booked appointment matches how your patients actually decide." },
  ];
  return (
    <section className="py-[88px] bg-background" aria-labelledby="why-converts-h2">
      <div className="container">
        <Reveal className="text-center max-w-[640px] mx-auto">
          <ChipLabel>The Conversion Advantage</ChipLabel>
          <h2 id="why-converts-h2" className="font-extrabold mt-4" style={{ fontSize: "clamp(28px,5vw,46px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            <span className="block text-brand-deep">Why Specialty-Specific Marketing</span>
            <span className="block gradient-text">Converts Better</span>
          </h2>
          <p className="mt-5 text-text-secondary max-w-[600px] mx-auto" style={{ fontSize: 17, lineHeight: 1.75 }}>
            Generic marketing produces generic traffic. Specialty-specific marketing creates better targeting, stronger messaging, more relevant landing pages, better patient intent alignment, and more accurate ROI tracking — because every element speaks directly to one type of practice and one type of patient.
          </p>
        </Reveal>

        <div className="mt-13 grid md:grid-cols-2 gap-5 max-w-[900px] mx-auto mt-12">
          {blocks.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.tag} delay={0.05 * i} className="h-full">
                <article className="rounded-2xl border border-brand-purple/10 bg-surface-secondary p-7 transition-all hover:-translate-y-1 hover:border-brand-purple/25 tilt-spotlight">
                  <span className="font-mono-ui text-[11px] uppercase px-2.5 py-1 rounded-full text-brand-purple" style={{ background: "rgba(100,79,249,0.07)" }}>
                    {b.tag}
                  </span>
                  <div className="mt-3 w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))" }}>
                    <Icon aria-hidden size={20} className="text-white" />
                  </div>
                  <h3 className="mt-3 font-bold text-brand-deep" style={{ fontSize: 17 }}>{b.h3}</h3>
                  <p className="mt-2 text-text-secondary" style={{ fontSize: 14, lineHeight: 1.65 }}>{b.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2} className="text-center mt-10">
          <Link to="/how-it-works" className="inline-flex items-center text-brand-purple font-semibold text-[15px] hover:underline">
            See How Vigorant Builds Your Growth System <ArrowRight aria-hidden size={15} className="ml-1.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Definitions ---------- */
function Definitions() {
  const defs = [
    { title: "Healthcare Marketing Solutions", body: "Healthcare marketing solutions are specialty-specific strategies that help dental, chiropractic, and medical practices attract, convert, and retain patients through SEO, AI search optimization, paid advertising, conversion-focused websites, reputation signals, and marketing analytics." },
    { title: "Why Specialty-Specific Marketing Matters", body: "Specialty-specific marketing matters because patients search, compare, and book differently across dental, chiropractic, and medical care. The best strategy aligns keywords, ads, landing pages, reputation signals, and conversion paths with the practice's specialty, services, market, and patient decision journey." },
    { title: "AI Visibility for Healthcare Practices", body: "AI visibility for healthcare practices means being discoverable and credible when patients use AI-powered search tools, Google AI Overviews, ChatGPT, Gemini, Claude, or Perplexity to compare providers, ask treatment questions, or request local recommendations." },
  ];
  return (
    <section className="py-20 bg-surface-secondary" aria-labelledby="defs-h2">
      <div className="container">
        <Reveal className="text-center">
          <ChipLabel>Definitions · AIO/GEO Ready</ChipLabel>
          <h2 id="defs-h2" className="font-extrabold mt-4 max-w-[600px] mx-auto text-brand-deep" style={{ fontSize: "clamp(26px,4.5vw,40px)", letterSpacing: "-0.03em" }}>
            What These Terms Mean for Your Practice
          </h2>
        </Reveal>
        <div className="mt-10 max-w-[1020px] mx-auto grid md:grid-cols-3 gap-5">
          {defs.map((d, i) => (
            <Reveal key={d.title} delay={0.05 * i} className="h-full">
              <div className="bg-background border-l-[3px] border-brand-purple rounded-r-[14px] p-6 shadow-sm h-full" style={{ boxShadow: "0 4px 20px rgba(100,79,249,0.05)" }}>
                <div className="font-mono-ui text-[10px] uppercase tracking-[0.1em] text-brand-purple mb-2">Definition · {d.title}</div>
                <p className="text-brand-deep italic" style={{ fontSize: 15, lineHeight: 1.85 }}>
                  <span aria-hidden className="font-display float-left mr-1.5 text-brand-lavender" style={{ fontSize: "3rem", lineHeight: 0.8 }}>“</span>
                  {d.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Growth Engine ---------- */
function GrowthEngine() {
  const steps = [
    { n: "01", icon: MapPin, h: "Visibility", b: "Google, Maps, local SEO, and AI engine presence — everywhere patients discover providers" },
    { n: "02", icon: Brain, h: "AI Optimization", b: "AEO and GEO structuring so your practice is cited in ChatGPT, Gemini, Perplexity, and Google AI Overviews" },
    { n: "03", icon: Users, h: "Patient Acquisition", b: "Specialty-targeted campaigns and content that attract the patients most valuable to your practice" },
    { n: "04", icon: MousePointerClick, h: "Conversion Optimization", b: "Website, landing pages, booking flow, and call handling — turning interest into appointments" },
    { n: "05", icon: Star, h: "Reputation Signals", b: "Review velocity, response strategy, and social proof that influence both patient trust and AI recommendations" },
    { n: "06", icon: BarChart2, h: "Analytics & Growth", b: "Attribution, performance visibility, and continuous optimization — knowing what works and why" },
  ];
  return (
    <section className="relative overflow-hidden py-24" style={{ background: "linear-gradient(160deg, #1b1338, #221a45, #1b1338)" }} aria-labelledby="growth-h2">
      <div aria-hidden className="absolute pointer-events-none orb-a" style={{ top: "10%", left: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, hsl(247 93% 64% / 0.12), transparent 70%)", filter: "blur(80px)" }} />
      <div aria-hidden className="absolute pointer-events-none orb-b" style={{ bottom: "5%", right: "5%", width: 380, height: 380, borderRadius: "50%", background: "radial-gradient(circle, hsl(248 100% 75% / 0.1), transparent 70%)", filter: "blur(80px)" }} />
      <div className="container relative z-10">
        <Reveal className="text-center">
          <ChipLabel dark>The Framework</ChipLabel>
          <h2 id="growth-h2" className="font-extrabold mt-4 max-w-[680px] mx-auto" style={{ fontSize: "clamp(28px,5vw,46px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            <span className="block text-white">The Vigorant Growth Engine</span>
            <span className="block gradient-text">for Healthcare Practices</span>
          </h2>
          <p className="mt-5 mx-auto max-w-[600px]" style={{ fontSize: 17, lineHeight: 1.78, color: "rgba(255,255,255,0.88)" }}>
            Vigorant doesn't treat SEO, paid ads, websites, reputation, and reporting as separate activities. We connect them into one growth engine so your practice can see where demand is coming from, where patients are dropping off, and what to improve next — all within a specialty-specific framework.
          </p>
        </Reveal>

        <div className="mt-13 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1060px] mx-auto mt-12">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.n} delay={0.05 * i} className="h-full">
                <div className="rounded-2xl p-6 h-full transition-all hover:-translate-y-1 tilt-spotlight" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="font-mono-ui font-bold gradient-text" style={{ fontSize: 32 }}>{s.n}</div>
                  <div className="mt-2 w-11 h-11 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))" }}>
                    <Icon aria-hidden size={20} className="text-white" />
                  </div>
                  <h3 className="text-white font-bold mt-3" style={{ fontSize: 15 }}>{s.h}</h3>
                  <p className="mt-1.5" style={{ fontSize: 13, lineHeight: 1.65, color: "rgba(255,255,255,0.85)" }}>{s.b}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 max-w-[720px] mx-auto rounded-2xl p-7" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(143,125,255,0.2)" }}>
            <div className="font-mono-ui uppercase tracking-[0.1em]" style={{ fontSize: 10, color: "#c8c1ff" }}>
              AI-Powered Healthcare Marketing — Defined
            </div>
            <p className="mt-2.5 italic" style={{ fontSize: 15, lineHeight: 1.85, color: "rgba(255,255,255,0.78)" }}>
              AI-powered healthcare marketing is an integrated approach that connects SEO, AI search optimization, paid advertising, website conversion, and reputation management into one measurable growth system — built around the unique patient journey and revenue model of each healthcare specialty.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Capabilities ---------- */
function Capabilities() {
  const caps = [
    { icon: Search, tag: "SEO", h: "SEO & Local Search", b: "Google, Maps, and entity-level local optimization so your practice appears where patients are searching in your market.", link: "Healthcare SEO", href: "/services/seo" },
    { icon: Sparkles, tag: "AIO/GEO", h: "AI Engine Optimization", b: "AEO and GEO structuring that makes your practice discoverable and citable by ChatGPT, Gemini, Perplexity, and Google AI Overviews.", link: "AI search optimization", href: "/services/seo/aeo" },
    { icon: Megaphone, tag: "Paid Ads", h: "Paid Advertising", b: "Specialty-targeted Google and Meta campaigns with HIPAA-aware tracking, call attribution, and ROI measurement built in.", link: "Healthcare paid ads", href: "/services/paid-ads" },
    { icon: Layout, tag: "Website", h: "Website Design & CRO", b: "Conversion-first websites and landing pages built for the way each specialty's patients discover, evaluate, and book care.", link: "Website design & CRO", href: "/services/website-design" },
    { icon: Star, tag: "Reputation", h: "Reputation & Social Proof", b: "Review velocity strategy, response management, and social content that builds the trust patients need before booking — and that AI engines use as credibility signals.", link: "Reputation management", href: "/services/reputation" },
    { icon: BarChart2, tag: "Analytics", h: "Analytics & ROI Tracking", b: "Attribution, performance dashboards, and patient acquisition cost tracking so every marketing decision is grounded in real practice economics.", link: "See how it works", href: "/how-it-works" },
  ];
  return (
    <section className="py-[88px] bg-surface-secondary" aria-labelledby="caps-h2">
      <div className="container">
        <Reveal className="text-center max-w-[620px] mx-auto">
          <ChipLabel>Core Capabilities</ChipLabel>
          <h2 id="caps-h2" className="font-extrabold mt-4" style={{ fontSize: "clamp(28px,5vw,46px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            <span className="block text-brand-deep">What We Optimize</span>
            <span className="block gradient-text">Across Every Specialty</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-[520px] mx-auto" style={{ fontSize: 16 }}>
            These capabilities form the integrated foundation of every specialty solution.
          </p>
        </Reveal>

        <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1000px] mx-auto">
          {caps.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.tag} delay={0.04 * i} className="h-full">
                <li>
                  <article className="rounded-2xl p-6 h-full border border-white/80 transition-all hover:-translate-y-1 hover:border-brand-purple/30 tilt-spotlight" style={{ background: "rgba(255,255,255,0.88)", backdropFilter: "blur(16px)", boxShadow: "0 4px 18px rgba(27,19,56,0.04)" }}>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))" }}>
                      <Icon aria-hidden size={20} className="text-white" />
                    </div>
                    <h3 className="font-bold text-brand-deep mt-3" style={{ fontSize: 15 }}>{c.h}</h3>
                    
                    <p className="text-text-secondary mt-2" style={{ fontSize: 13, lineHeight: 1.6 }}>{c.b}</p>
                    <Link to={c.href} className="inline-flex items-center mt-3 text-brand-purple font-semibold text-[13px] group">
                      {c.link} <ArrowRight aria-hidden size={13} className="ml-1 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </article>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Decision Guide ---------- */
function DecisionGuide() {
  const rows = [
    { s: "New practice, launching online presence", p: "Start with a specialty and build visibility first", w: "Choose your specialty", href: "#specialty-cards" },
    { s: "Established practice, slow new patient growth", p: "More New Patients + SEO + Paid Ads", w: "More new patients", href: "/for-practices/more-new-patients" },
    { s: "Good traffic but appointments not converting", p: "Lead Conversion + Website CRO", w: "Lead conversion", href: "/for-practices/lead-conversion" },
    { s: "Multi-location or group practice", p: "Scale Your Practice + All specialties", w: "Scale your practice", href: "/for-practices/scale-your-practice" },
    { s: "Busy but not profitable — wrong patient mix", p: "High-Value Patients + Specialty targeting", w: "High-value patients", href: "/for-practices/high-value-patients" },
    { s: "Paying for marketing with no clear ROI", p: "Fix Poor Marketing ROI + Attribution setup", w: "Marketing ROI", href: "/for-practices/marketing-roi" },
  ];
  return (
    <section className="py-[88px] bg-background" aria-labelledby="decision-h2">
      <div className="container">
        <Reveal className="text-center max-w-[600px] mx-auto">
          <ChipLabel>Find Your Fit</ChipLabel>
          <h2 id="decision-h2" className="font-extrabold mt-4" style={{ fontSize: "clamp(28px,5vw,46px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            <span className="block text-brand-deep">Which Solution Fits</span>
            <span className="block gradient-text">Your Practice Right Now?</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-[520px] mx-auto" style={{ fontSize: 16 }}>
            Different growth stages need different starting points. Use this guide to identify your situation and the recommended path.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 max-w-[920px] mx-auto">
          <div className="overflow-hidden rounded-2xl border border-brand-purple/12">
            <table className="w-full text-left">
              <thead>
                <tr style={{ background: "linear-gradient(135deg, rgba(100,79,249,0.08), rgba(143,125,255,0.06))", borderBottom: "1px solid rgba(100,79,249,0.1)" }}>
                  <th scope="col" className="font-mono-ui text-[11px] uppercase px-5 py-4 text-brand-purple">Your Situation</th>
                  <th scope="col" className="font-mono-ui text-[11px] uppercase px-5 py-4 text-brand-purple">Recommended Path</th>
                  <th scope="col" className="font-mono-ui text-[11px] uppercase px-5 py-4 text-brand-purple">Where to Start</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.s} style={{ background: i % 2 === 1 ? "rgba(100,79,249,0.02)" : "transparent", borderBottom: i < rows.length - 1 ? "1px solid rgba(100,79,249,0.06)" : "none" }}>
                    <td className="px-5 py-4 text-[13px] font-medium text-brand-deep">{r.s}</td>
                    <td className="px-5 py-4 text-[13px] text-text-secondary">{r.p}</td>
                    <td className="px-5 py-4 text-[13px]">
                      {r.href.startsWith("/") || r.href.startsWith("#") ? (
                        r.href.startsWith("#") ? (
                          <a href={r.href} className="font-semibold text-brand-purple underline">{r.w} →</a>
                        ) : (
                          <Link to={r.href} className="font-semibold text-brand-purple underline">{r.w} →</Link>
                        )
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="text-center mt-9">
          <p className="text-text-secondary text-[15px] max-w-[520px] mx-auto">
            Still not sure? Let us review your practice and recommend the right path.
          </p>
          <Link to="/free-audit" className="inline-flex items-center mt-4 btn-primary-grad font-bold rounded-full px-7 py-3.5 text-[15px]">
            Get a Free Practice Growth Audit <ArrowRight aria-hidden size={16} className="ml-2" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Proof ---------- */
function Proof() {
  const cards = [
    { tag: "Dental Practice", loc: "Phoenix, AZ", num: 34, prefix: "+", label: "new patients / month", time: "within 60 days", quote: "We'd tried three agencies before Vigorant. This is the first time the phone actually rings." },
    { tag: "Chiropractic Clinic", loc: "Austin, TX", num: 28, prefix: "+", label: "new patients / month", time: "within 90 days", quote: "The AI dashboard alone changed how I think about marketing spend." },
    { tag: "Medical Practice", loc: "Denver, CO", num: 47, prefix: "↓", suffix: "%", label: "cost per patient", time: "within 45 days", quote: "Finally a team that speaks in patient revenue, not impressions." },
  ];
  return (
    <section className="relative overflow-hidden py-[88px]" style={{ background: "linear-gradient(135deg, #1b1338, #221a45, #1b1338)" }} aria-labelledby="proof-h2">
      <div aria-hidden className="absolute pointer-events-none" style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, hsl(247 93% 64% / 0.08), transparent 70%)", filter: "blur(100px)" }} />
      <div className="container relative z-10">
        <Reveal className="text-center">
          <ChipLabel dark>Proof That Specialty Matters</ChipLabel>
          <h2 id="proof-h2" className="font-extrabold mt-4" style={{ fontSize: "clamp(28px,5vw,46px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            <span className="block text-white">Results From Practices</span>
            <span className="block gradient-text">Like Yours</span>
          </h2>
          <p className="mt-4 max-w-[540px] mx-auto" style={{ fontSize: 17, color: "rgba(255,255,255,0.85)" }}>
            Real numbers from real practices — organized by specialty so you can see what's possible for your specific market.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-5 max-w-[960px] mx-auto">
          {cards.map((c, i) => (
            <Reveal key={c.tag} delay={0.05 * i} className="h-full">
              <article className="rounded-[18px] p-7 h-full tilt-spotlight transition-all hover:-translate-y-1" style={{ background: "#221a45", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="flex items-center justify-between font-mono-ui text-[11px]" style={{ color: "rgba(255,255,255,0.75)" }}>
                  <span>{c.tag}</span><span style={{ color: "rgba(255,255,255,0.7)" }}>{c.loc}</span>
                </div>
                <div className="mt-4 font-display font-bold gradient-text leading-none" style={{ fontSize: "clamp(52px, 7vw, 68px)" }}>
                  {c.prefix}<Counter to={c.num} />{c.suffix ?? ""}
                </div>
                <div className="font-mono-ui mt-1" style={{ fontSize: 13, color: "rgba(255,255,255,0.8)" }}>{c.label}</div>
                <span className="inline-block mt-4 font-mono-ui text-[11px] px-2.5 py-1 rounded-full" style={{ background: "rgba(100,79,249,0.2)", border: "1px solid rgba(100,79,249,0.3)", color: "#c8c1ff" }}>
                  {c.time}
                </span>
                <p className="mt-5 italic border-l-2 pl-3" style={{ fontSize: 14, color: "rgba(255,255,255,0.88)", borderColor: "rgba(143,125,255,0.3)" }}>
                  {c.quote}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FaqBlock() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();
  return (
    <section className="py-[88px] bg-surface-secondary" aria-labelledby="faq-h2">
      <div className="container">
        <Reveal className="text-center max-w-[620px] mx-auto">
          <ChipLabel>Common Questions</ChipLabel>
          <h2 id="faq-h2" className="font-extrabold mt-4 text-brand-deep" style={{ fontSize: "clamp(26px,4.5vw,40px)", letterSpacing: "-0.03em" }}>
            Frequently Asked Questions About Healthcare Marketing Solutions
          </h2>
        </Reveal>
        <div className="max-w-[760px] mx-auto mt-10 flex flex-col gap-2.5">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            const btnId = `${baseId}-q-${i}`;
            const panelId = `${baseId}-p-${i}`;
            return (
              <Reveal key={f.q} delay={i * 0.03} className="h-full">
                <div className={`bg-background rounded-xl border transition-all ${isOpen ? "border-brand-purple/25 shadow-[0_8px_24px_rgba(100,79,249,0.07)]" : "border-brand-purple/10"}`}>
                  <h3 className="m-0">
                    <button
                      id={btnId} aria-expanded={isOpen} aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-start justify-between gap-4 text-left px-5 sm:px-6 py-5 hover:bg-brand-purple/5"
                    >
                      <span className="text-[16px] sm:text-[17px] font-semibold text-brand-deep">{f.q}</span>
                      <Plus aria-hidden size={20} className="text-brand-purple flex-shrink-0 mt-1 transition-transform" style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0)" }} />
                    </button>
                  </h3>
                  <div id={panelId} role="region" aria-labelledby={btnId} hidden={!isOpen}>
                    <p className="px-5 sm:px-6 pb-6 text-text-secondary" style={{ fontSize: 15, lineHeight: 1.82 }}>{f.a}</p>
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

/* ---------- Final CTA ---------- */
function FinalCta() {
  return (
    <section id="audit" className="relative overflow-hidden flex items-center justify-center" style={{ minHeight: 500, background: "linear-gradient(160deg, #1b1338 0%, #221a45 45%, #1b1338 100%)" }} aria-labelledby="final-h2">
      <div aria-hidden className="absolute pointer-events-none orb-a" style={{ top: "10%", right: "5%", width: 380, height: 380, borderRadius: "50%", background: "radial-gradient(circle, hsl(248 100% 75% / 0.15), transparent 70%)", filter: "blur(80px)" }} />
      <div aria-hidden className="absolute pointer-events-none orb-b" style={{ bottom: "5%", left: "5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, hsl(247 93% 64% / 0.18), transparent 70%)", filter: "blur(60px)" }} />
      <div className="container relative z-10 text-center max-w-[640px] py-20">
        <ChipLabel dark>Find Your Growth Path</ChipLabel>
        <h2 id="final-h2" className="font-display font-bold text-white mt-5 leading-[1.15]" style={{ fontSize: "clamp(30px, 4.5vw, 52px)" }}>
          Find the Right Growth Path for Your Practice
        </h2>
        <p className="mt-6 max-w-[500px] mx-auto" style={{ fontSize: 17, lineHeight: 1.75, color: "rgba(255,255,255,0.9)" }}>
          Choose your specialty and get a clear view of where your practice is losing visibility, leads, and conversions — and what to do next.
        </p>
        <ul className="mt-7 inline-block text-left mx-auto">
          {[
            "SEO and AI visibility review",
            "Competitor gap analysis by specialty",
            "Website conversion assessment",
            "Patient acquisition opportunity estimate",
            "Prioritized growth roadmap — no obligation",
          ].map((b) => (
            <li key={b} className="flex items-start gap-2" style={{ lineHeight: 2.1, fontSize: 15, color: "rgba(255,255,255,0.82)" }}>
              <span aria-hidden className="text-brand-bright">✦</span> <span>{b}</span>
            </li>
          ))}
        </ul>
        <p className="mt-7 font-mono-ui" style={{ fontSize: 12, color: "#c8c1ff" }}>
          We accept 8 new audit requests per month · 3 spots remaining
        </p>
        <div className="mt-6">
          <Link
            to="/free-audit"
            className="inline-flex items-center justify-center rounded-full font-bold transition-all hover:scale-[1.02]"
            style={{ background: "white", color: "#1b1338", padding: "18px 44px", fontSize: 17, boxShadow: "0 4px 24px rgba(0,0,0,0.2)" }}
          >
            Request Your Free Growth Audit <ArrowRight aria-hidden size={18} className="ml-2" />
          </Link>
        </div>
        <p className="mt-4" style={{ fontSize: 14, color: "rgba(255,255,255,0.75)" }}>
          No commitment. No hard sell. Just clarity on what your practice needs to grow.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {["HIPAA Compliant", "Response Within 24 Hours", "No Long-Term Contracts"].map((c) => (
            <span key={c} className="font-mono-ui rounded-full px-3 py-1" style={{ fontSize: 11, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.85)" }}>
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Mobile sticky CTA ---------- */
function MobileStickyCta() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("solutions-sticky-dismissed") === "1") {
      setDismissed(true); return;
    }
    const onScroll = () => setShow(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (dismissed || !show) return null;
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-[200] flex items-center gap-3" style={{ background: "#1b1338", borderTop: "1px solid rgba(100,79,249,0.2)", padding: "12px 20px calc(12px + env(safe-area-inset-bottom)) 20px" }}>
      <Link to="/free-audit" className="flex-1 btn-primary-grad font-bold rounded-full text-center py-3 text-[14px]">
        Get Free Audit
      </Link>
      <button
        aria-label="Dismiss"
        onClick={() => { sessionStorage.setItem("solutions-sticky-dismissed", "1"); setDismissed(true); }}
        className="text-white/70 hover:text-white p-2"
      >
        <X aria-hidden size={20} />
      </button>
    </div>
  );
}

/* ---------- Page ---------- */
export default function Solutions() {
  return (
    <>
      <SolutionsSeo />
      <a href="#main" className="skip-link">Skip to main content</a>
      <GlobalFx />
      <Nav />
      <main id="main">
        <Hero />
        <OneSystem />
        <SpecialtyCards />
        <WhyConverts />
        <Definitions />
        <GrowthEngine />
        <Capabilities />
        <DecisionGuide />
        <Proof />
        <FaqBlock />
        <FinalCta />
      </main>
      <MobileStickyCta />
      <Footer />
    </>
  );
}
