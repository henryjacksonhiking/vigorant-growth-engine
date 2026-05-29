import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, ShieldCheck, ExternalLink, Minus, Building2, Sparkles, Stethoscope, Network, Heart, Clock, Users, Target, Search, Layout, Megaphone, Star, BarChart2, Lightbulb, Palette, Share2, Video, FileText, Mail, Check, Phone, RotateCcw, CalendarCheck, MousePointerClick } from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import GlobalFx from "@/components/site/GlobalFx";
import StickyCTA from "@/components/site/StickyCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal, Line, ChipLabel, Breadcrumb, PrimaryCTA, SecondaryCTA, GradientText, GradientTextLight, HeroOrbs, DarkOrb } from "@/components/site/SolutionPageAtoms";

const CANONICAL = "https://vigorant.com/solutions/medical";
const AUDIT = "Request Your Free Medical Practice Growth Audit";

const FAQS = [
  { q: "What is medical practice marketing?", a: "Medical practice marketing helps clinics attract, educate, and convert patients through healthcare SEO, local visibility, paid ads, website conversion, reputation signals, patient education, and performance reporting." },
  { q: "How do medical practices get more patients online?", a: "Medical practices get more patients online by improving local SEO, ranking for service-line searches, strengthening reviews, creating conversion-focused service pages, using paid ads for high-intent queries, and tracking calls and forms to actual appointment opportunities." },
  { q: "What is the difference between medical SEO and medical paid ads?", a: "Medical SEO builds long-term visibility in Google, Maps, and AI-driven search, while paid ads generate more immediate traffic for targeted services. The strongest growth system usually uses both after the website is ready to convert." },
  { q: "How should medical practices market elective or cash-pay services?", a: "Elective and cash-pay services need targeted landing pages, high-intent paid search, provider credibility, educational content, strong reputation signals, retargeting, and follow-up sequences that support longer patient decision cycles." },
  { q: "Can Vigorant help multi-location medical clinics?", a: "Yes. Multi-location medical marketing requires location-page architecture, market-level SEO, centralized brand consistency, scalable paid media structure, and reporting that separates performance by location and service line." },
  { q: "How does AI search affect medical practice marketing?", a: "AI search affects medical marketing because patients may ask tools like ChatGPT, Claude, Gemini, or Perplexity for provider suggestions, symptom guidance, or service comparisons. Practices need structured, authoritative, answer-focused content to be more discoverable in AI-assisted research." },
  { q: "Is medical marketing different from dental or chiropractic marketing?", a: "Yes. Medical marketing often involves more specialty complexity, higher patient trust barriers, longer research cycles, stricter privacy concerns, and more distinction between insurance-based, elective, and cash-pay services." },
  { q: "What should a medical practice audit include?", a: "A medical practice growth audit should review SEO, Google Business Profile visibility, AI search readiness, website conversion, service-line pages, reviews, paid ads, tracking setup, and gaps between traffic and booked appointments." },
];

const AUDIENCES = [
  { icon: Building2, tag: "PRIVATE PRACTICE", h: "Private & Physician Practices", p: "Qualified patients, local SEO, and website conversion.", link: { label: "More New Patients", to: "/for-practices/more-new-patients" } },
  { icon: Sparkles, tag: "ELECTIVE & CASH-PAY", h: "Elective and Cash-Pay Clinics", p: "Higher-value consults, landing pages, paid ads, elective funnels.", link: { label: "High-Value Patients", to: "/for-practices/high-value-patients" } },
  { icon: Stethoscope, tag: "SPECIALTY CLINICS", h: "Specialty Medical Clinics", p: "Service-line visibility, procedure education, reputation trust.", link: { label: "Online Visibility", to: "/for-practices/online-visibility" } },
  { icon: Network, tag: "MULTI-LOCATION", h: "Multi-Location Medical Groups", p: "Market-level reporting, scalable brand, location-level SEO.", link: { label: "Scale Your Practice", to: "/for-practices/scale-your-practice" } },
  { icon: Heart, tag: "MED SPA & AESTHETIC", h: "Med Spas and Aesthetic Clinics", p: "High-intent paid search, social proof, conversion landing pages.", link: { label: "Med Spa Marketing", to: "/solutions/medical/med-spa-marketing" } },
  { icon: Clock, tag: "URGENT & PRIMARY CARE", h: "Urgent Care and Primary Care", p: "Local demand, Maps, reviews, appointment access, and booking flow.", link: { label: "Improve Visibility", to: "/for-practices/online-visibility" } },
  { icon: Users, tag: "PHYSICIAN GROUPS & MSOs", h: "Physician Groups and MSOs", p: "Centralized strategy, content governance, multi-market reporting.", link: { label: "How It Works", to: "/how-it-works" } },
];

const PILLARS = [
  { tag: "STRATEGY", icon: Target, h: "Strategy and Market Positioning", body: "Clarify your highest-value service lines, target geography, competitor gaps, growth goals, and patient acquisition priorities before investing in any channel.", link: { label: "Medical Marketing Strategy", to: "/solutions/medical/marketing-strategy" }, outcomes: ["Service-line growth priority map", "Competitor gap analysis", "Patient acquisition KPI framework"] },
  { tag: "VISIBILITY", icon: Search, h: "Search and AI Visibility", body: "Build Google, Maps, and AI-search visibility through healthcare SEO, structured content, schema, local optimization, and answer-focused pages designed for AI extraction.", link: { label: "Medical SEO & AI Search Optimization", to: "/solutions/medical/search-engine-optimization" }, outcomes: ["Local and service-line SEO rankings", "AI Overviews and answer-engine inclusion", "Google Maps and directory prominence"] },
  { tag: "CONVERSION", icon: Layout, h: "Website and Landing Page Conversion", body: "Turn traffic into appointment requests with credibility-rich service pages, clear CTAs, strong mobile UX, trust signals, patient education, and conversion-focused forms.", link: { label: "Medical Website Design", to: "/solutions/medical/website-design" }, outcomes: ["Website conversion rate improvement", "Consult request volume", "Mobile and page speed performance"] },
  { tag: "ACQUISITION", icon: Megaphone, h: "Paid Patient Acquisition", body: "Use Google Ads, Meta, retargeting, and service-line campaigns where the funnel is ready to convert — especially for elective, cash-pay, and high-consideration services.", link: { label: "Medical Paid Ads", to: "/solutions/medical/paid-ads" }, outcomes: ["Qualified consult inquiries from paid", "Cost per qualified lead", "Campaign performance by service line"] },
  { tag: "REPUTATION", icon: Star, h: "Reputation and Social Proof", body: "Strengthen review signals, testimonial placement, provider credibility, and educational content so patients feel safer taking action — particularly for elective and high-trust services.", link: { label: "Reputation and Social Proof", to: "/services/reputation" }, outcomes: ["Review velocity and rating trajectory", "Trust signal placement near conversion", "Provider authority and credibility signals"] },
  { tag: "INTELLIGENCE", icon: BarChart2, h: "Reporting and Optimization", body: "Connect rankings, clicks, calls, forms, campaigns, and appointment opportunities into a clear performance story — then optimize monthly around what is actually producing patients.", link: { label: "How We Track and Report", to: "/how-it-works" }, outcomes: ["Source-to-appointment attribution", "Cost per consult opportunity", "Monthly optimization cycle"] },
];

const SERVICES = [
  { icon: Lightbulb, name: "Medical Marketing Strategy", body: "Growth roadmap, ICP, market positioning, channel priorities, service-line planning, KPI structure.", href: "/solutions/medical/marketing-strategy" },
  { icon: Palette, name: "Medical Branding & Rebranding", body: "Position the clinic around trust, clarity, differentiation, and the right patient population.", href: "/solutions/medical/branding-rebranding" },
  { icon: Layout, name: "Medical Website Design & Dev", body: "Mobile-first, credibility-rich, conversion-focused websites for private practices and clinics.", href: "/solutions/medical/website-design" },
  { icon: Search, name: "Medical SEO & AI Visibility", body: "Google, Maps, AI Overviews, ChatGPT/Claude visibility, schema, service-line content, local SEO.", href: "/solutions/medical/search-engine-optimization" },
  { icon: Megaphone, name: "Medical Paid Ads Campaigns", body: "High-intent Google Ads, retargeting, Meta, and elective/cash-pay patient acquisition funnels.", href: "/solutions/medical/paid-ads" },
  { icon: Share2, name: "Medical Social Media Marketing", body: "Educational, trust-building social content that supports reputation and retargeting.", href: "/solutions/medical/social-media-marketing" },
  { icon: Video, name: "Medical Video Marketing", body: "Provider introduction videos, procedure explainers, patient education, and testimonials.", href: "/solutions/medical/video-marketing" },
  { icon: FileText, name: "Medical Landing Pages", body: "Dedicated service-line and campaign pages built for consult requests and paid traffic conversion.", href: "/solutions/medical/landing-pages" },
  { icon: Mail, name: "Medical Email Marketing", body: "Lead nurture, reactivation, consult follow-up, educational sequences, and long-cycle decision support.", href: "/solutions/medical/email-marketing" },
];

const AEO = [
  { q: "How does AI search affect medical practice marketing?", a: "AI search affects medical marketing because patients may ask tools like ChatGPT, Claude, Gemini, or Perplexity for provider suggestions, symptom guidance, or service comparisons. Practices need structured, authoritative, answer-focused content to be more discoverable in AI-assisted research.", link: { label: "AI Engine Optimization for Healthcare", to: "/services/seo/aeo" } },
  { q: "What is medical SEO?", a: "Medical SEO is the process of improving a medical practice's visibility in Google Search, Google Maps, healthcare directories, and AI-powered search experiences through service-line content, local optimization, schema markup, review signals, and authoritative patient education pages.", link: { label: "Healthcare SEO services", to: "/services/seo" } },
  { q: "What is GEO for medical practices?", a: "GEO, or Generative Engine Optimization, for medical practices focuses on structuring content, authority signals, and entity consistency so generative AI platforms such as ChatGPT, Claude, Gemini, and Perplexity can understand, summarize, and recommend the practice when patients ask AI tools for provider options.", link: { label: "Generative Engine Optimization", to: "/services/seo/geo" } },
];

const FUNNEL = [
  { icon: Search, l: "Search / Ad", s: "High-intent service query" },
  { icon: Layout, l: "Landing Page", s: "Service education + trust" },
  { icon: Phone, l: "Consult Request", s: "Form or call inquiry" },
  { icon: RotateCcw, l: "Nurture / Follow-Up", s: "Long-cycle decision support" },
  { icon: CalendarCheck, l: "Appointment", s: "Patient acquired" },
];

const DIFF = [
  { icon: Stethoscope, h: "Healthcare-Specific Strategy", p: "Dental, chiropractic, and medical experience — not broad small-business marketing adapted for healthcare. We understand medical practice economics, patient behavior, and service-line nuance." },
  { icon: Sparkles, h: "AI Search Readiness", p: "Content, schema, and visibility strategy built for Google, AI Overviews, ChatGPT, Claude, Gemini, and Perplexity. Not an afterthought — built in from the start." },
  { icon: MousePointerClick, h: "Conversion-First Websites", p: "Not just design. Every website is built around appointment and consultation actions, mobile performance, trust signals, provider credibility, and measurable conversion outcomes." },
  { icon: BarChart2, h: "Performance Reporting", p: "Rankings, clicks, calls, forms, appointment opportunities, and campaign attribution connected into a clear performance story — not a monthly activity report." },
];

const COMPARE = [
  ["Generic healthcare lead gen", "Medical-specific strategy by clinic type and service line"],
  ["Clicks and traffic reports", "Source-to-consult attribution and appointment opportunity tracking"],
  ["One-size SEO approach", "Service-line SEO + AI visibility + local optimization combined"],
  ["Template websites", "Credibility-rich, conversion-focused medical websites"],
];

const PROOF = [
  { who: "Private Medical Practice · Denver, CO", n: "↓47%", l: "cost per patient", problem: "Single-location internal medicine clinic invisible in local and specialty searches.", chips: ["Local SEO", "Website CRO", "GBP"], when: "within 90 days", quote: "We went from nearly zero web-driven appointments to filling our new patient slots consistently." },
  { who: "Elective Clinic · Phoenix, AZ", n: "+22", l: "elective consults / month", problem: "Aesthetic clinic running ads to homepage — no service-specific landing pages or follow-up.", chips: ["Landing Pages", "Paid Ads", "Retargeting"], when: "within 60 days", quote: "The procedure-specific pages made an immediate difference. Patients arrived knowing what they wanted." },
  { who: "Multi-Location Group · Austin, TX", n: "+3", l: "locations under management", problem: "Expanding group with no consistent digital infrastructure across markets.", chips: ["Multi-Market SEO", "Brand Governance", "Attribution"], when: "within 120 days", quote: "For the first time we can see each location's performance separately and make real decisions." },
];

export default function SolutionsMedical() {
  return (
    <>
      <Helmet>
        <title>Medical Practice Marketing Agency | Get More Patients | Vigorant</title>
        <meta name="description" content="Grow your medical practice with AI-driven SEO, paid ads, websites, and conversion systems built for patient acquisition, elective care, and multi-location clinics. Get a free growth audit." />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:title" content="Medical Practice Marketing That Turns Visibility Into Patient Growth" />
        <meta property="og:description" content="Vigorant helps private practices, specialty clinics, and multi-location medical groups attract qualified patients through SEO, paid ads, conversion-focused websites, and performance reporting." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CANONICAL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", "@id": `${CANONICAL}#webpage`, url: CANONICAL, name: "Medical Practice Marketing Agency | Get More Patients | Vigorant", description: "Vigorant helps private practices, specialty clinics, elective and cash-pay clinics, and multi-location medical groups attract qualified patients through SEO, paid ads, conversion-focused websites, reputation, and performance reporting.", isPartOf: { "@id": "https://vigorant.com/#website" }, publisher: { "@type": "Organization", name: "Vigorant", url: "https://vigorant.com" }, breadcrumb: { "@id": `${CANONICAL}#breadcrumb` } })}</script>
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "@id": `${CANONICAL}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://vigorant.com/" }, { "@type": "ListItem", position: 2, name: "Solutions", item: "https://vigorant.com/solutions" }, { "@type": "ListItem", position: 3, name: "Medical Practice Marketing", item: CANONICAL }] })}</script>
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "@id": `${CANONICAL}#service`, name: "Medical Practice Marketing", serviceType: "Medical practice marketing, healthcare SEO, AI search visibility, paid advertising for medical practices, medical website design, landing pages, reputation management, email marketing, social media, and video marketing", provider: { "@type": "Organization", name: "Vigorant", url: "https://vigorant.com" }, description: "Vigorant helps private practices, specialty clinics, elective and cash-pay clinics, and multi-location medical groups attract qualified patients through strategic patient acquisition systems.", areaServed: { "@type": "Country", name: "United States" } })}</script>
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "ItemList", "@id": `${CANONICAL}#servicelist`, name: "Medical Practice Marketing Services", itemListElement: SERVICES.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.name, url: `https://vigorant.com${s.href}` })) })}</script>
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "@id": `${CANONICAL}#faq`, mainEntity: FAQS.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) })}</script>
      </Helmet>

      <Nav /><GlobalFx />
      <main className="text-left">
        {/* HERO */}
        <section className="relative overflow-hidden bg-background pt-28 pb-20 sm:pt-32 sm:pb-24">
          <HeroOrbs />
          <div aria-hidden className="absolute inset-0 bg-grid pointer-events-none" />
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-[1.27fr_1fr] gap-12 items-center">
              <div>
                <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Solutions", href: "/solutions" }, { label: "Medical Practice Marketing" }]} />
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {["AI-Driven SEO", "Paid Ads", "Websites", "Elective & Cash-Pay", "Multi-Location"].map(c => <span key={c} className="font-mono-ui text-[11px] text-brand-purple bg-brand-purple/8 border border-brand-purple/15 rounded-full px-3 py-1">{c}</span>)}
                </div>
                <h1 className="font-serif font-bold text-brand-deep leading-[1.05] tracking-tight" style={{ fontSize: "clamp(34px, 6vw, 60px)", letterSpacing: "-0.025em" }}>
                  <Line delay={0.1}>Medical Practice Marketing That</Line>
                  <Line delay={0.22}>Turns Visibility Into</Line>
                  <Line delay={0.34}><GradientText>Patient Growth.</GradientText></Line>
                </h1>
                <p className="mt-6 text-ink-secondary text-[16px] sm:text-[17px] leading-[1.75] max-w-xl">
                  Vigorant helps private practices, specialty clinics, and multi-location medical groups attract qualified patients through AI-driven SEO, paid ads, conversion-focused websites, landing pages, reputation strategy, and performance reporting built around real patient acquisition outcomes.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <PrimaryCTA to="/free-audit">{AUDIT} <ArrowRight size={16} /></PrimaryCTA>
                  <SecondaryCTA to="/how-it-works">See How Our Growth System Works</SecondaryCTA>
                </div>
                <div className="mt-5 inline-flex items-center gap-1.5 font-mono-ui text-[11px] text-brand-purple bg-brand-purple/7 border border-brand-purple/12 rounded-full px-3 py-1.5">
                  <ShieldCheck size={11} /> Privacy-conscious marketing approach
                </div>
                <p className="mt-4 font-mono-ui text-[12px] text-ink-muted">Healthcare-Focused · SEO + AI Search + Paid Ads + CRO · Single & Multi-Location · Transparent Reporting</p>
              </div>
              <Reveal delay={0.2}>
                <div className="bg-background border border-brand-purple/15 rounded-[22px] p-6 sm:p-7" style={{ boxShadow: "0 24px 80px hsl(248 49% 15% / 0.09)" }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 49% 15%))" }}><TrendingUp size={16} className="text-white" /></div>
                      <div className="font-bold text-brand-deep text-[14px]">Medical Growth System</div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 font-mono-ui text-[11px] text-emerald-600"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> System View</span>
                  </div>
                  <div className="h-px bg-brand-purple/10 my-3" />
                  <ul className="list-none p-0 m-0">
                    {[
                      ["Market Positioning", "STRATEGY", "bg-brand-purple/10 text-brand-purple"],
                      ["Search & AI Visibility", "ACTIVE", "bg-emerald-500/10 text-emerald-600"],
                      ["Website & Landing Pages", "LIVE", "bg-brand-purple/10 text-brand-purple"],
                      ["Paid Patient Acquisition", "CAMPAIGN", "bg-amber-500/10 text-amber-600"],
                      ["Reputation & Trust", "GROWING", "bg-emerald-500/10 text-emerald-600"],
                      ["Reporting & Optimization", "MONTHLY", "bg-brand-purple/10 text-brand-purple"],
                    ].map(([l, v, c], i, a) => (
                      <li key={l} className={`flex justify-between items-center py-2 ${i < a.length - 1 ? "border-b border-brand-purple/8" : ""}`}>
                        <span className="text-[12px] text-ink-secondary font-medium">{l}</span>
                        <span className={`font-mono-ui text-[10px] px-2 py-0.5 rounded-full ${c}`}>{v}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-mono-ui text-[11px] text-ink-muted text-center mt-3 mb-0">Illustrative example · Results vary by market and clinic type.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* PROBLEM — dark */}
        <section className="relative overflow-hidden py-20 sm:py-24" style={{ background: "hsl(var(--brand-deep))" }}>
          <DarkOrb />
          <div className="container relative z-10">
            <Reveal className="text-center max-w-3xl mx-auto">
              <ChipLabel dark>The Patient Growth Problem</ChipLabel>
              <h2 className="font-extrabold text-white leading-[1.1] mt-4" style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.03em" }}>Most Medical Practices Are<br /><GradientTextLight>Clinically Strong but Digitally Under-Positioned.</GradientTextLight></h2>
            </Reveal>
            <Reveal delay={0.08} className="max-w-3xl mx-auto mt-8">
              <div className="bg-white/5 border border-white/10 rounded-[14px] p-6">
                <h3 className="font-bold text-white text-[17px]">You may have strong clinical expertise, but still be invisible online</h3>
                <p className="mt-2.5 text-white/68 text-[15px] leading-[1.75]">Patients now compare providers online, consult AI tools, read reviews, evaluate websites, and expect easy scheduling. Many clinics are clinically strong but digitally under-positioned — leaving patient acquisition to chance rather than system.</p>
              </div>
            </Reveal>
            <ul className="list-none p-0 mt-6 max-w-3xl mx-auto flex flex-col gap-1.5">
              {[
                "Website may not rank for the procedures, symptoms, and specialty searches your patients use",
                "Google Business Profile and Maps visibility may underperform vs. nearby competitors",
                "Service pages explain what you do but do not convert visitors into scheduled consults",
                "Paid ads generate clicks but not high-quality appointment or consult requests",
                "Practice depends too heavily on referrals, insurance networks, or word-of-mouth alone",
              ].map((b, i) => (
                <Reveal key={i} delay={i * 0.04}>
                  <li className="bg-white/[0.04] border border-white/[0.07] rounded-[10px] px-4 py-2.5 flex gap-3 items-start">
                    <Minus size={14} className="text-amber-500/70 flex-shrink-0 mt-1" />
                    <span className="text-white/72 text-[14px]">{b}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.1} className="max-w-3xl mx-auto mt-8">
              <div className="bg-white/5 border border-brand-lavender/20 rounded-[16px] p-7">
                <div className="font-mono-ui text-[10px] uppercase text-brand-lavender">Definition · AIO/GEO Ready</div>
                <h3 className="font-bold text-white text-[15px] mt-2">What is medical practice marketing?</h3>
                <p className="mt-2 text-white/80 text-[15px] leading-[1.85] italic">"Medical practice marketing is the strategy of helping healthcare clinics attract, educate, convert, and retain patients through search visibility, AI-ready content, paid advertising, reputation signals, website conversion, and patient communication systems. Effective medical marketing connects online visibility to booked appointments, consults, and measurable patient acquisition outcomes."</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* WHO — off-white */}
        <section className="bg-surface-secondary py-20 sm:py-24">
          <div className="container">
            <Reveal className="text-center max-w-2xl mx-auto">
              <ChipLabel>Who Vigorant Serves</ChipLabel>
              <h2 className="font-extrabold text-brand-deep leading-[1.1] mt-4" style={{ fontSize: "clamp(26px, 4.5vw, 42px)", letterSpacing: "-0.03em" }}>Medical Practices and Clinics<br /><GradientText>Vigorant Helps Grow</GradientText></h2>
              <p className="mt-5 text-ink-secondary text-[16px] max-w-lg mx-auto">The medical marketing strategy, channel mix, and conversion approach vary significantly by clinic type. Select the model that best reflects your practice.</p>
            </Reveal>
            <ul className="ui-card-grid list-none p-0 m-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-12 max-w-6xl mx-auto">
              {AUDIENCES.map((a, i) => (
                <Reveal key={a.tag} delay={i * 0.04} className="h-full">
                  <li className="h-full">
                    <article className="ui-card bg-white/90 border-brand-purple/10 rounded-[14px] p-5 hover:border-brand-purple/30 hover:-translate-y-1 transition-all text-center">
                      <div className="w-10 h-10 mx-auto rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))" }}><a.icon size={16} className="text-white" /></div>
                      <div className="font-mono-ui text-[10px] uppercase text-brand-purple mt-2.5">{a.tag}</div>
                      <h3 className="ui-card-heading mt-1 text-[13px]">{a.h}</h3>
                      <p className="ui-card-text text-[11px]">{a.p}</p>
                      <Link to={a.link.to} className="ui-card-cta justify-center text-brand-purple text-[11px]">{a.link.label} <ArrowRight size={11} /></Link>
                    </article>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* GROWTH SYSTEM — white */}
        <section className="bg-background py-20 sm:py-24">
          <div className="container">
            <Reveal className="text-center max-w-2xl mx-auto">
              <ChipLabel>The Vigorant Growth System</ChipLabel>
              <h2 className="font-extrabold text-brand-deep leading-[1.1] mt-4" style={{ fontSize: "clamp(26px, 4.5vw, 42px)", letterSpacing: "-0.03em" }}>The Vigorant Growth System<br /><GradientText>for Medical Practices</GradientText></h2>
              <p className="mt-5 text-ink-secondary text-[16px] max-w-lg mx-auto">A six-stage system that builds demand, converts traffic, acquires patients, and measures everything. Each stage solves a specific medical growth bottleneck.</p>
            </Reveal>
            <div className="mt-12 max-w-5xl mx-auto flex flex-col gap-4">
              {PILLARS.map((p, i) => (
                <Reveal key={p.tag} delay={i * 0.05}>
                  <article className="bg-white/95 border border-brand-purple/10 rounded-[20px] overflow-hidden hover:border-brand-purple/35 hover:-translate-y-1 transition-all flex flex-col md:flex-row">
                    <div className="flex-1 p-7">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))" }}><p.icon size={16} className="text-white" /></div>
                        <span className="font-mono-ui text-[10px] uppercase text-brand-purple bg-brand-purple/8 px-2.5 py-1 rounded-full">{p.tag}</span>
                      </div>
                      <h3 className="font-bold text-brand-deep text-[19px] mt-3.5">{p.h}</h3>
                      <p className="mt-2 text-ink-secondary text-[14px] leading-[1.7]">{p.body}</p>
                      <Link to={p.link.to} className="mt-3 inline-flex items-center gap-1.5 text-brand-purple font-semibold text-[13px]">{p.link.label} <ArrowRight size={13} /></Link>
                    </div>
                    <div className="md:border-l md:border-brand-purple/10 bg-brand-purple/[0.03] p-6 md:min-w-[240px]">
                      <div className="font-mono-ui text-[10px] uppercase text-brand-purple mb-3">Key Outcomes</div>
                      <ul className="list-none p-0 m-0 flex flex-col gap-2">
                        {p.outcomes.map(o => (
                          <li key={o} className="flex gap-2 items-start text-brand-deep text-[12px] font-medium">
                            <span className="w-4 h-4 rounded-full bg-brand-purple/10 flex items-center justify-center flex-shrink-0 mt-0.5"><Check size={10} className="text-brand-purple" /></span>
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES — dark */}
        <section id="medical-services" className="relative overflow-hidden py-24" style={{ background: "linear-gradient(160deg, hsl(248 49% 15%), hsl(250 45% 19%), hsl(248 49% 15%))" }}>
          <DarkOrb />
          <div className="container relative z-10">
            <Reveal className="text-center max-w-2xl mx-auto">
              <ChipLabel dark>Medical Marketing Services</ChipLabel>
              <h2 className="font-extrabold text-white leading-[1.1] mt-4" style={{ fontSize: "clamp(28px, 5vw, 46px)", letterSpacing: "-0.03em" }}>Medical Marketing Services<br /><GradientTextLight>Connected Into One Growth System</GradientTextLight></h2>
              <p className="mt-5 text-white/62 text-[16px] max-w-lg mx-auto">Nine specialty-specific services, each with a dedicated page. Connected into one patient acquisition system.</p>
            </Reveal>
            <ul className="ui-card-grid list-none p-0 m-0 grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mt-12 max-w-5xl mx-auto">
              {SERVICES.map((s, i) => (
                <Reveal key={s.name} delay={i * 0.04} className="h-full">
                  <li className="h-full">
                    <article className="ui-card-dark rounded-[14px] p-5 hover:border-brand-bright/30 hover:-translate-y-1 transition-all text-center">
                      <div className="w-10 h-10 mx-auto rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))" }}><s.icon size={18} className="text-white" /></div>
                      <h3 className="ui-card-heading-dark mt-2.5 text-[13px]">{s.name}</h3>
                      <p className="ui-card-text-dark text-[12px]">{s.body}</p>
                      <Link to={s.href} className="ui-card-cta justify-center text-brand-bright text-[11px]">Explore <ArrowRight size={11} /></Link>
                    </article>
                  </li>
                </Reveal>
              ))}
            </ul>
            <div className="text-center mt-10">
              <Link to="/free-audit" className="inline-flex items-center gap-2 bg-white text-brand-deep font-bold text-[15px] px-8 py-3.5 rounded-full hover:bg-brand-lavender transition-all">Get a Free Medical Practice Growth Audit <ArrowRight size={15} /></Link>
            </div>
          </div>
        </section>

        {/* SEO & AI — off-white */}
        <section className="bg-surface-secondary py-20 sm:py-24">
          <div className="container">
            <Reveal className="text-center max-w-2xl mx-auto">
              <ChipLabel>Medical SEO & AI Visibility</ChipLabel>
              <h2 className="font-extrabold text-brand-deep leading-[1.1] mt-4" style={{ fontSize: "clamp(26px, 4.5vw, 42px)", letterSpacing: "-0.03em" }}>Medical SEO, AI Search,<br /><GradientText>and Local Visibility</GradientText></h2>
              <p className="mt-5 text-ink-secondary text-[16px] max-w-lg mx-auto leading-[1.75]">Patients increasingly discover providers through Google, Maps, review platforms, medical directories, and AI-powered search experiences. Vigorant builds medical practice visibility by aligning service-line content, local SEO, structured data, reputation signals, and AI-readable answers around the way patients actually search.</p>
            </Reveal>
            <div className="mt-10 max-w-4xl mx-auto flex flex-col gap-3.5">
              {AEO.map((c, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <article className="bg-white border-l-[3px] border-brand-purple rounded-r-[14px] p-6 shadow-sm">
                    <div className="font-mono-ui text-[10px] uppercase text-brand-purple">Q&amp;A · AIO/GEO Ready</div>
                    <h3 className="font-bold text-brand-deep text-[15px] mt-2">{c.q}</h3>
                    <p className="mt-2 text-brand-deep text-[14px] leading-[1.82] italic">{c.a}</p>
                    <Link to={c.link.to} className="mt-2.5 inline-flex items-center gap-1.5 text-brand-purple font-semibold text-[13px]">{c.link.label} <ArrowRight size={13} /></Link>
                  </article>
                </Reveal>
              ))}
            </div>
            <div className="flex flex-wrap gap-2.5 justify-center mt-7">
              {[{ l: "Healthcare SEO", to: "/services/seo" }, { l: "AI Engine Optimization", to: "/services/seo/aeo" }, { l: "GEO for Healthcare", to: "/services/seo/geo" }].map(c => (
                <Link key={c.l} to={c.to} className="font-mono-ui text-[11px] text-white px-4 py-1.5 rounded-full hover:opacity-90" style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))" }}>{c.l} →</Link>
              ))}
            </div>
          </div>
        </section>

        {/* ELECTIVE — white */}
        <section className="bg-background py-20 sm:py-24">
          <div className="container">
            <Reveal className="text-center max-w-2xl mx-auto">
              <ChipLabel>Elective &amp; Cash-Pay Acquisition</ChipLabel>
              <h2 className="font-extrabold text-brand-deep leading-[1.1] mt-4" style={{ fontSize: "clamp(26px, 4.5vw, 42px)", letterSpacing: "-0.03em" }}>Elective and Cash-Pay<br /><GradientText>Patient Acquisition</GradientText></h2>
              <p className="mt-5 text-ink-secondary text-[16px] max-w-lg mx-auto leading-[1.75]">The goal is not more traffic. The goal is better-fit patients who understand the value, trust the provider, and are ready to schedule a consult. Elective and cash-pay services require a different marketing system than insurance-based volume acquisition.</p>
            </Reveal>
            <Reveal delay={0.08} className="mt-10 max-w-4xl mx-auto">
              <div className="bg-white/92 border border-brand-purple/12 rounded-[16px] p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono-ui text-[11px] uppercase text-brand-purple">Elective Patient Acquisition Funnel</span>
                  <span className="font-mono-ui text-[11px] text-ink-muted">Illustrative</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-0">
                  {FUNNEL.map((f, i) => (
                    <div key={f.l} className={`text-center p-3 ${i < FUNNEL.length - 1 ? "sm:border-r border-brand-purple/10" : ""}`}>
                      <div className="w-9 h-9 mx-auto rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))" }}><f.icon size={14} className="text-white" /></div>
                      <div className="font-mono-ui text-[10px] uppercase text-brand-purple mt-2">{f.l}</div>
                      <div className="text-ink-muted text-[11px] mt-1">{f.s}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <div className="flex flex-wrap gap-2 justify-center mt-7 max-w-3xl mx-auto">
              {["Dermatology", "Plastic Surgery", "Ophthalmology", "Fertility", "Med Spa", "Pain Management", "Concierge Medicine", "Functional Medicine"].map(c => (
                <span key={c} className="font-mono-ui text-[10px] text-brand-purple bg-brand-purple/7 border border-brand-purple/14 rounded-full px-3 py-1">{c}</span>
              ))}
            </div>
            <Reveal delay={0.1} className="mt-7 max-w-3xl mx-auto">
              <div className="bg-white/88 border border-brand-purple/12 rounded-[14px] p-6">
                <h3 className="font-bold text-brand-deep text-[15px]">Recommended Conversion Assets for Elective Services</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mt-3">
                  {["Service-line landing pages", "Provider credibility blocks", "Educational FAQ sections", "Consultation-focused CTAs", "Video procedure explainers", "Review and testimonial proof", "Retargeting campaigns", "Lead nurture sequences"].map(a => (
                    <div key={a} className="flex gap-2 items-center text-brand-deep text-[13px]"><span className="w-4 h-4 rounded-full bg-brand-purple/10 flex items-center justify-center"><Check size={10} className="text-brand-purple" /></span>{a}</div>
                  ))}
                </div>
              </div>
            </Reveal>
            <div className="text-center mt-8"><PrimaryCTA to="/free-audit">Build a Patient Acquisition Plan for Your High-Value Services <ArrowRight size={16} /></PrimaryCTA></div>
          </div>
        </section>

        {/* SINGLE vs MULTI — off-white */}
        <section className="bg-surface-secondary py-20">
          <div className="container">
            <Reveal className="text-center max-w-2xl mx-auto">
              <ChipLabel>Single vs Multi-Location</ChipLabel>
              <h2 className="font-extrabold text-brand-deep leading-[1.1] mt-4" style={{ fontSize: "clamp(26px, 4.5vw, 40px)", letterSpacing: "-0.03em" }}>Single-Location vs<br /><GradientText>Multi-Location Medical Marketing</GradientText></h2>
              <p className="mt-5 text-ink-secondary text-[16px] max-w-lg mx-auto">The strategy, infrastructure, and reporting requirements are fundamentally different. Vigorant adapts to both.</p>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-5 mt-12 max-w-4xl mx-auto">
              {[
                { tag: "Single-Location Clinic", h: "Compete Locally, Build Trust, Improve Conversion", body: "Compete locally, build trust, improve website conversion, capture nearby demand, and acquire patients efficiently before expanding.", rows: ["Local SEO and Google Business Profile", "Conversion-first website and service pages", "Reviews and reputation signals", "Focused campaigns for high-value services"], link: { l: "More New Patients", to: "/for-practices/more-new-patients" } },
                { tag: "Multi-Location Group", h: "Scale Demand Consistently Across Markets", body: "Scale demand consistently across markets while preserving brand and reporting control across every location.", rows: ["Location-page architecture and market-level SEO", "Multi-market tracking and reporting", "Content governance and brand consistency", "Centralized paid media structure"], link: { l: "Scale Your Practice", to: "/for-practices/scale-your-practice" } },
              ].map((c, i) => (
                <Reveal key={c.tag} delay={i * 0.06} className="h-full">
                  <article className="h-full bg-white/90 border border-brand-purple/12 rounded-[18px] p-7 flex flex-col">
                    <div className="font-mono-ui text-[10px] uppercase text-brand-purple">{c.tag}</div>
                    <h3 className="font-bold text-brand-deep text-[17px] mt-2">{c.h}</h3>
                    <p className="mt-2 text-ink-secondary text-[14px] leading-[1.7]">{c.body}</p>
                    <ul className="list-none p-0 mt-4 flex flex-col gap-2 flex-1">
                      {c.rows.map(r => <li key={r} className="flex gap-2 items-center text-brand-deep text-[13px]"><span className="w-4 h-4 rounded-full bg-brand-purple/10 flex items-center justify-center"><Check size={10} className="text-brand-purple" /></span>{r}</li>)}
                    </ul>
                    <Link to={c.link.to} className="mt-4 inline-flex items-center gap-1.5 text-brand-purple font-semibold text-[13px]">{c.link.l} <ArrowRight size={13} /></Link>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* COMPLIANCE — dark */}
        <section className="relative overflow-hidden py-20" style={{ background: "hsl(var(--brand-deep))" }}>
          <DarkOrb />
          <div className="container relative z-10">
            <Reveal className="text-center max-w-2xl mx-auto">
              <ChipLabel dark>Privacy-Conscious Marketing</ChipLabel>
              <h2 className="font-extrabold text-white leading-[1.1] mt-4" style={{ fontSize: "clamp(26px, 4.5vw, 40px)", letterSpacing: "-0.03em" }}>Medical Marketing With<br /><GradientTextLight>Compliance in Mind</GradientTextLight></h2>
              <p className="mt-5 text-white/90 text-[16px] leading-[1.78]">Medical practices must be aware that digital tracking, paid advertising, and website analytics tools may carry privacy obligations under HIPAA. Vigorant uses a privacy-conscious approach to marketing setup, tracking, and campaign management — and recommends that practices work with their legal and compliance teams regarding tracking technology choices.</p>
            </Reveal>
            <Reveal delay={0.08} className="mt-9 max-w-3xl mx-auto">
              <div className="bg-white/5 border border-white/10 rounded-[14px] p-6">
                <div className="font-mono-ui text-[10px] uppercase text-brand-lavender mb-2">Important Notice</div>
                <p className="text-white/72 text-[14px] leading-[1.75] m-0">The U.S. Department of Health and Human Services has issued guidance on online tracking technologies for HIPAA-covered entities. Medical practices using pixels, analytics, and advertising platforms should review this guidance with their compliance advisors.</p>
              </div>
            </Reveal>
            <Reveal delay={0.12} className="mt-3 max-w-3xl mx-auto">
              <div className="bg-white/5 border border-white/10 rounded-[12px] p-4 flex gap-2.5">
                <ExternalLink size={14} className="text-brand-bright flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono-ui text-[10px] uppercase tracking-[0.1em] text-brand-lavender/60 mb-1">HHS Official Guidance</div>
                  <p className="text-[13px] text-white/90 leading-[1.65] m-0">The HHS has published guidance on how the HIPAA Privacy Rule may apply to the use of online tracking technologies by HIPAA-covered entities and business associates. <a href="https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/hipaa-online-tracking/index.html" target="_blank" rel="noopener noreferrer nofollow" aria-label="HHS guidance on online tracking technologies for HIPAA-covered entities, opens in new tab" className="text-brand-bright font-semibold underline">HHS guidance on online tracking technologies for HIPAA-covered entities</a>.</p>
                </div>
              </div>
            </Reveal>
            <p className="font-mono-ui text-[11px] text-white/35 text-center mt-4 max-w-2xl mx-auto">Vigorant does not provide legal or compliance advice. Medical practices should consult qualified legal counsel regarding HIPAA and tracking obligations.</p>
            <div className="flex flex-wrap gap-2 justify-center mt-6">
              {["Privacy-aware tracking setup", "Compliant analytics guidance", "No guaranteed HIPAA claim", "Recommend legal review"].map(c => (
                <span key={c} className="font-mono-ui text-[10px] text-white/55 bg-white/7 rounded-full px-3 py-1">{c}</span>
              ))}
            </div>
          </div>
        </section>

        {/* WHY VIGORANT — white */}
        <section className="bg-background py-20">
          <div className="container">
            <Reveal className="text-center max-w-2xl mx-auto">
              <ChipLabel>Why Vigorant</ChipLabel>
              <h2 className="font-extrabold text-brand-deep leading-[1.1] mt-4" style={{ fontSize: "clamp(26px, 4.5vw, 40px)", letterSpacing: "-0.03em" }}>Why Medical Practices<br /><GradientText>Choose Vigorant</GradientText></h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-4 mt-12 max-w-4xl mx-auto">
              {DIFF.map((d, i) => (
                <Reveal key={d.h} delay={i * 0.06} className="h-full">
                  <article className="h-full bg-white/92 border border-brand-purple/10 rounded-[16px] p-6 hover:border-brand-purple/30 hover:-translate-y-1 transition-all">
                    <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))" }}><d.icon size={20} className="text-white" /></div>
                    <h3 className="font-bold text-brand-deep text-[15px] mt-3">{d.h}</h3>
                    <p className="mt-1.5 text-ink-secondary text-[13px] leading-[1.68]">{d.p}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.12} className="max-w-4xl mx-auto mt-8">
              <div className="border border-brand-purple/12 rounded-[12px] overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="bg-amber-500/[0.06] text-amber-600 font-bold text-[13px] px-5 py-3">Generic Agency Approach</div>
                  <div className="bg-brand-purple/8 text-brand-purple font-bold text-[13px] px-5 py-3">Vigorant Medical System</div>
                </div>
                {COMPARE.map((row, i) => (
                  <div key={i} className={`grid grid-cols-2 ${i < COMPARE.length - 1 ? "border-b border-brand-purple/8" : ""}`}>
                    <div className="px-5 py-3 text-ink-secondary text-[13px] flex gap-2"><span className="text-amber-600">·</span>{row[0]}</div>
                    <div className="px-5 py-3 text-brand-deep text-[13px] flex gap-2"><span className="text-emerald-600">✓</span>{row[1]}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* PROOF — off-white */}
        <section className="bg-surface-secondary py-20">
          <div className="container">
            <Reveal className="text-center max-w-2xl mx-auto">
              <ChipLabel>Medical Practice Results</ChipLabel>
              <h2 className="font-extrabold text-brand-deep leading-[1.1] mt-4" style={{ fontSize: "clamp(26px, 4.5vw, 40px)", letterSpacing: "-0.03em" }}>Real Results From<br /><GradientText>Medical Practice Campaigns</GradientText></h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-5 mt-12 max-w-5xl mx-auto">
              {PROOF.map((p, i) => (
                <Reveal key={p.who} delay={i * 0.08} className="h-full">
                  <article className="bg-white/92 border border-brand-purple/10 rounded-[18px] p-7 hover:border-brand-purple/30 hover:-translate-y-1.5 transition-all h-full flex flex-col">
                    <div className="font-mono-ui text-[11px] text-ink-muted">{p.who}</div>
                    <div className="font-extrabold text-[38px] mt-2 leading-none"><GradientText>{p.n}</GradientText></div>
                    <div className="text-[13px] text-ink-secondary mt-1">{p.l}</div>
                    <p className="mt-4 text-[13px] text-ink-secondary leading-relaxed"><span className="font-mono-ui text-[10px] uppercase text-amber-600">Problem: </span>{p.problem}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">{p.chips.map(c => <span key={c} className="font-mono-ui text-[10px] text-brand-purple bg-brand-purple/8 rounded-full px-2 py-0.5">{c}</span>)}</div>
                    <div className="font-mono-ui text-[11px] text-emerald-600 mt-3">{p.when}</div>
                    <p className="mt-3 text-[13px] text-brand-deep italic flex-1">"{p.quote}"</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <div className="text-center mt-8"><Link to="/results" className="text-brand-purple font-semibold text-[14px] inline-flex items-center gap-1.5">View all healthcare marketing case studies <ArrowRight size={14} /></Link></div>
          </div>
        </section>

        {/* FAQ — white */}
        <section className="bg-background py-20 sm:py-24">
          <div className="container">
            <Reveal className="text-center max-w-3xl mx-auto">
              <ChipLabel>Frequently Asked Questions</ChipLabel>
              <h2 className="font-extrabold text-brand-deep leading-[1.1] mt-4" style={{ fontSize: "clamp(26px, 4.5vw, 38px)", letterSpacing: "-0.03em" }}>FAQ: Medical Practice Marketing, SEO, Ads, and AI Visibility</h2>
            </Reveal>
            <div className="max-w-3xl mx-auto mt-10">
              <Accordion type="single" collapsible className="space-y-2">
                {FAQS.map((f, i) => (
                  <AccordionItem key={i} value={`f${i}`} className="border border-brand-purple/12 rounded-[12px] px-5 bg-white/90">
                    <AccordionTrigger className="text-brand-deep font-bold text-[15px] text-left hover:no-underline">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-ink-secondary text-[14px] leading-[1.7]">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden flex items-center justify-center min-h-[500px] py-20" style={{ background: "linear-gradient(160deg, hsl(248 49% 15%) 0%, hsl(250 45% 19%) 45%, hsl(248 49% 15%) 100%)" }}>
          <DarkOrb />
          <div className="container relative z-10 text-center max-w-2xl">
            <ChipLabel dark>Get a Clear Roadmap to More Qualified Patients</ChipLabel>
            <h2 className="font-serif font-bold text-white mt-4 leading-[1.15]" style={{ fontSize: "clamp(30px, 4.5vw, 50px)" }}>Get a Free Medical Practice Growth Audit.</h2>
            <p className="mt-5 text-white/90 text-[16px] max-w-xl mx-auto leading-[1.72]">See where your medical practice or clinic is losing visibility, qualified leads, and appointment opportunities — and get a clear, prioritized roadmap for what to fix first.</p>
            <ul className="list-none p-0 mt-6 inline-flex flex-col gap-1 text-left text-white/95 text-[15px]">
              {["Google and AI search visibility review", "Website and landing page conversion assessment", "Paid ads and campaign opportunity check", "Competitor gap analysis by service line", "Reputation and trust signal review", "Prioritized medical growth roadmap — no obligation"].map(b => <li key={b} className="flex gap-2"><span className="text-brand-bright">✦</span>{b}</li>)}
            </ul>
            <div className="mt-7 font-mono-ui text-[12px] text-brand-lavender">8 audit slots per month · 3 remaining</div>
            <div className="mt-5"><Link to="/free-audit" className="inline-flex items-center gap-2 bg-white text-brand-deep font-bold text-[16px] px-10 py-4 rounded-full hover:bg-brand-lavender transition-all">{AUDIT} <ArrowRight size={16} /></Link></div>
            <div className="mt-4"><Link to="/results" className="text-white/55 hover:text-white font-semibold text-[14px]">View Healthcare Marketing Results &amp; Case Studies →</Link></div>
            <div className="mt-5 flex flex-wrap gap-2 justify-center font-mono-ui text-[11px] text-white/55">
              {["Privacy-Conscious Approach", "Response Within 24 Hours", "No Long-Term Contracts"].map(c => <span key={c} className="bg-white/7 rounded-full px-3 py-1">{c}</span>)}
            </div>
          </div>
        </section>
      </main>
      <Footer /><StickyCTA />
    </>
  );
}
