import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Shield, Heart, Activity, Users, Layers, Search, Megaphone, MousePointerClick, Star, BarChart2, Eye, ShieldCheck, RefreshCw, Lightbulb, Palette, Layout, Share2, Video, FileText, Mail, AlertCircle, Check, ExternalLink, SearchX, ShieldAlert, TrendingDown, ChevronRight } from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import StickyCTA from "@/components/site/StickyCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal, Line, ChipLabel, Breadcrumb, PrimaryCTA, SecondaryCTA, GradientText, GradientTextLight, HeroOrbs, DarkOrb } from "@/components/site/SolutionPageAtoms";

const CANONICAL = "https://vigorant.com/solutions/chiropractic";
const AUDIT = "Get a Free Chiropractic Growth Audit";

const FAQS = [
  { q: "What is the best marketing strategy for a chiropractic practice?", a: "The best chiropractic marketing strategy combines local SEO, Google Maps visibility, website conversion, review generation, paid campaigns for high-intent services, social proof, patient education, and follow-up systems. The right mix depends on whether the practice focuses on personal injury, wellness, sports chiropractic, family care, or specialty services." },
  { q: "How do chiropractors get more local patients?", a: "Chiropractors get more local patients by improving visibility for nearby searches, strengthening Google Business Profile relevance and prominence, creating service-specific website pages, earning credible reviews, running targeted paid ads, and making it easy for visitors to call or book." },
  { q: "Is SEO worth it for chiropractors?", a: "SEO is usually worth it for chiropractors because patients often search locally before booking care. Strong SEO can improve visibility for terms such as chiropractor near me, back pain chiropractor, sports chiropractor, personal injury chiropractor, and chiropractic care in a specific city or neighborhood." },
  { q: "Should chiropractors use Google Ads?", a: "Google Ads can work well for chiropractors when campaigns target high-intent searches, use dedicated landing pages, track calls and forms, and separate campaign goals by service type. Ads are less effective when they send traffic to a generic homepage without strong conversion tracking." },
  { q: "How important are reviews for chiropractic marketing?", a: "Reviews are very important because patients often compare nearby chiropractors before calling. Reviews influence trust, conversion, and local prominence signals. A systematic review strategy should be paired with ethical request processes and strong patient experience." },
  { q: "How can a chiropractic website convert more visitors into patients?", a: "A chiropractic website converts better when it has clear service pages, fast mobile speed, visible phone and booking CTAs, provider trust signals, patient education, reviews, insurance and payment clarity, location details, and landing pages matched to specific campaigns." },
  { q: "Can Vigorant help personal injury chiropractors?", a: "Yes. Personal injury chiropractic marketing requires specific messaging around accident-related care, fast appointment access, documentation confidence, local search, paid ads, landing pages, and trust-building content. It should be handled differently from wellness or family chiropractic marketing." },
  { q: "How does AI search affect chiropractic practices?", a: "AI search affects chiropractors because patients increasingly use AI-assisted search tools and AI summaries to compare care options. Practices with clear content, strong reviews, structured data, local authority, and complete service information are better positioned to be understood and recommended." },
];

const SEGMENTS = [
  { tag: "Personal Injury", icon: Shield, h3: "Personal Injury Chiropractic Marketing", intent: "car accident chiropractor; personal injury chiropractor near me; whiplash treatment; neck pain after accident", channels: ["Google Ads", "Landing Pages", "Local SEO", "Reviews"], conv: "Fast availability, documentation confidence, injury-focused care proof, local trust.", link: { label: "PI Landing Pages", to: "/solutions/chiropractic/landing-pages" } },
  { tag: "Wellness", icon: Heart, h3: "Wellness Chiropractic Marketing", intent: "wellness chiropractor; preventative chiropractic care; chiropractic maintenance; ongoing mobility", channels: ["SEO", "Email", "Social", "Video", "Patient Education"], conv: "Recurring care relationship, lifestyle benefit messaging, family trust, plan value.", link: { label: "Predictable Patient Flow", to: "/for-practices/predictable-patient-flow" } },
  { tag: "Sports", icon: Activity, h3: "Sports Chiropractic Marketing", intent: "sports chiropractor near me; athlete chiropractic care; sports injury recovery; performance care", channels: ["Paid Ads", "Video", "Local SEO", "Social"], conv: "Performance, recovery speed, athlete-specific credibility, fast return to activity.", link: { label: "High-Value Patient Marketing", to: "/for-practices/high-value-patients" } },
  { tag: "Family", icon: Users, h3: "Family Chiropractic Marketing", intent: "family chiropractor; chiropractor for kids; pediatric chiropractor; family wellness chiropractic", channels: ["Local SEO", "Reviews", "Social Media", "Education Content"], conv: "Comfort, trust, long-term family wellness, multi-member care plans.", link: { label: "Chiropractic Reputation", to: "/for-practices/online-reputation" } },
  { tag: "Corrective Care", icon: Layers, h3: "Corrective Care & Decompression Marketing", intent: "spinal decompression; corrective chiropractic care; disc treatment; posture correction", channels: ["Paid Ads", "SEO Landing Pages", "Video", "Educational Content"], conv: "Condition-specific education, treatment explanation, consultation-focused CTA.", link: { label: "Chiropractic Landing Pages", to: "/solutions/chiropractic/landing-pages" } },
];

const ENGINE = [
  { n: "01", icon: Eye, h: "Visibility", body: "Google Search, Maps, and AI search presence where local patients discover chiropractors.", link: { label: "Chiropractic SEO", to: "/solutions/chiropractic/seo" } },
  { n: "02", icon: ShieldCheck, h: "Authority", body: "Reviews, trust content, provider credibility, and condition-specific expertise signals.", link: { label: "Reputation", to: "/for-practices/online-reputation" } },
  { n: "03", icon: MousePointerClick, h: "Conversion", body: "Website UX, booking flows, call handling, and landing pages that turn visitors into patients.", link: { label: "Chiropractic Website", to: "/solutions/chiropractic/website-design" } },
  { n: "04", icon: Megaphone, h: "Paid Acquisition", body: "High-intent campaigns for PI, decompression, sports care, new patient offers, and retargeting.", link: { label: "Chiropractic Ads", to: "/solutions/chiropractic/paid-ads" } },
  { n: "05", icon: RefreshCw, h: "Follow-Up & Retention", body: "Recall, reactivation, care-plan nurture, and patient loyalty systems that stabilize schedule.", link: { label: "Predictable Flow", to: "/for-practices/predictable-patient-flow" } },
  { n: "06", icon: BarChart2, h: "Analytics & Optimization", body: "Attribution, source tracking, CPL, and monthly optimization connected to real patient outcomes.", link: { label: "How We Track", to: "/how-it-works" } },
];

const SERVICES = [
  { icon: Lightbulb, name: "Chiropractic Marketing Strategy", body: "Build a local growth plan around patient type, location, service mix, competition, and revenue goals.", href: "/solutions/chiropractic/marketing-strategy" },
  { icon: Palette, name: "Chiropractic Branding & Rebranding", body: "Clarify positioning for PI, wellness, sports, family, or corrective-care practices.", href: "/solutions/chiropractic/branding" },
  { icon: Layout, name: "Chiropractic Website Design", body: "Fast, mobile-first website that converts searchers into calls, forms, and booked appointments.", href: "/solutions/chiropractic/website-design" },
  { icon: Search, name: "Chiropractic SEO", body: "Improve visibility in Google, Maps, local organic results, and AI-assisted search experiences.", href: "/solutions/chiropractic/seo" },
  { icon: Megaphone, name: "Google Ads for Chiropractors", body: "High-intent campaigns for back pain, neck pain, injury care, sports, new patient offers, and retargeting.", href: "/solutions/chiropractic/paid-ads" },
  { icon: Share2, name: "Chiropractic Social Media", body: "Educational content, testimonials, and local engagement that build patient trust and referrals.", href: "/solutions/chiropractic/social-media" },
  { icon: Video, name: "Chiropractic Video Marketing", body: "Doctor expertise, patient education, and care explanations as trust-building video content.", href: "/solutions/chiropractic/video-marketing" },
  { icon: FileText, name: "Chiropractic Landing Pages", body: "Campaign-specific pages for PI, decompression, consultation, sports injury, and wellness care.", href: "/solutions/chiropractic/landing-pages" },
  { icon: Mail, name: "Chiropractic Email Marketing", body: "Reactivate past patients, support recall, promote seasonal offers, and build patient relationships.", href: "/solutions/chiropractic/email-marketing" },
];

const JOURNEY = [
  { chip: "NOT FOUND", icon: SearchX, l: "Not Found on Google or Maps", p: "Practice invisible for key local searches" },
  { chip: "FOUND BUT", icon: ShieldAlert, l: "Found But Not Trusted", p: "Weak reviews, missing info, thin content" },
  { chip: "TRUSTED BUT", icon: MousePointerClick, l: "Trusted But Not Converting", p: "Website and booking path loses patients" },
  { chip: "CONVERTING", icon: TrendingDown, l: "Converting But Not Predictable", p: "No recall, reactivation, or retention system" },
];

export default function SolutionsChiropractic() {
  return (
    <>
      <Helmet>
        <title>Chiropractic Marketing Agency for Local Patient Growth | Vigorant</title>
        <meta name="description" content="Vigorant helps chiropractic practices grow with local SEO, Google Maps, paid ads, websites, reviews, video, email, and AI visibility — built for PI, wellness, sports, family, and corrective care." />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:title" content="Chiropractic Marketing Agency for Local Patient Growth | Vigorant" />
        <meta property="og:url" content={CANONICAL} />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "@id": `${CANONICAL}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://vigorant.com/" }, { "@type": "ListItem", position: 2, name: "Solutions", item: "https://vigorant.com/solutions" }, { "@type": "ListItem", position: 3, name: "Chiropractic Marketing", item: CANONICAL }] })}</script>
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "@id": `${CANONICAL}#service`, name: "Chiropractic Practice Marketing", provider: { "@type": "Organization", name: "Vigorant", url: "https://vigorant.com" }, description: "Vigorant helps chiropractic practices grow through local SEO, Google Maps, paid ads, websites, reviews, and AI visibility.", areaServed: { "@type": "Country", name: "United States" } })}</script>
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "ItemList", "@id": `${CANONICAL}#servicelist`, name: "Chiropractic Marketing Services", itemListElement: SERVICES.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.name, url: `https://vigorant.com${s.href}` })) })}</script>
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "@id": `${CANONICAL}#faq`, mainEntity: FAQS.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) })}</script>
      </Helmet>

      <Nav />
      <main className="text-center sm:text-left">
        {/* HERO */}
        <section className="relative overflow-hidden bg-background pt-28 pb-20 sm:pt-32 sm:pb-24">
          <HeroOrbs />
          <div aria-hidden className="absolute inset-0 bg-grid pointer-events-none" />
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-[1.27fr_1fr] gap-12 items-center">
              <div>
                <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Solutions", href: "/solutions" }, { label: "Chiropractic Marketing" }]} />
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {["Local SEO", "Google Maps", "Paid Ads", "Websites", "Reviews", "AI Visibility"].map(c => <span key={c} className="font-mono-ui text-[11px] text-brand-purple bg-brand-purple/8 border border-brand-purple/15 rounded-full px-3 py-1">{c}</span>)}
                </div>
                <h1 className="font-serif font-bold text-brand-deep leading-[1.05] tracking-tight" style={{ fontSize: "clamp(34px, 6vw, 60px)", letterSpacing: "-0.025em" }}>
                  <Line delay={0.1}>Chiropractic Marketing That Helps You</Line>
                  <Line delay={0.22}>Get Found, Chosen, and Booked</Line>
                  <Line delay={0.34}><GradientText>by Local Patients.</GradientText></Line>
                </h1>
                <p className="mt-6 text-ink-secondary text-[16px] sm:text-[17px] leading-[1.75] max-w-xl">
                  Vigorant helps chiropractic practices increase local visibility, attract higher-quality patients, improve website and phone conversion, and build predictable patient flow through SEO, Google Maps optimization, paid ads, websites, social media, video, email, and AI-ready content.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <PrimaryCTA to="/free-audit">{AUDIT} <ArrowRight size={16} /></PrimaryCTA>
                  <SecondaryCTA onClick={() => document.getElementById("chiropractic-services")?.scrollIntoView({ behavior: "smooth" })}>Explore Chiropractic Growth Services ↓</SecondaryCTA>
                </div>
                <p className="mt-5 font-mono-ui text-[12px] text-ink-muted">No obligation. We review your website, Google visibility, competitors, and patient-conversion gaps.</p>
              </div>
              <Reveal delay={0.2}>
                <div className="bg-background border border-brand-purple/15 rounded-2xl p-6 sm:p-7" style={{ boxShadow: "0 24px 80px hsl(248 49% 15% / 0.09)" }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 49% 15%))" }}><MapPin size={16} className="text-white" /></div>
                      <div className="font-bold text-brand-deep text-[14px]">Local Chiropractic Visibility</div>
                    </div>
                    <span className="font-mono-ui text-[11px] text-brand-purple">Your Market View</span>
                  </div>
                  <div className="h-px bg-brand-purple/10 my-3" />
                  <ul className="list-none p-0 m-0">
                    {[
                      ["Google Maps Rank — Key Terms", "#1–3", "text-emerald-600"],
                      ["Monthly GBP Profile Views", "+43%", "text-brand-purple"],
                      ["Call Clicks from Maps", "68 this month", "text-brand-purple"],
                      ["Review Rating", "4.8★ (81 reviews)", "text-amber-600"],
                      ["AI Search Visibility Score", "78 / 100", "text-brand-purple"],
                    ].map(([l, v, c], i, a) => (
                      <li key={l} className={`flex justify-between items-center py-2 ${i < a.length - 1 ? "border-b border-brand-purple/8" : ""}`}>
                        <span className="font-mono-ui text-[10px] uppercase text-ink-muted">{l}</span>
                        <span className={`font-bold text-[13px] ${c}`}>{v}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-mono-ui text-[11px] text-ink-muted text-center mt-3 mb-0">Illustrative example · Results vary by market and competition.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* WHY DIFFERENT — dark */}
        <section className="relative overflow-hidden py-20 sm:py-24" style={{ background: "hsl(var(--brand-deep))" }}>
          <DarkOrb />
          <div className="container relative z-10">
            <Reveal className="text-center max-w-3xl mx-auto">
              <ChipLabel dark>Why This Is Different</ChipLabel>
              <h2 className="font-extrabold text-white leading-[1.1] mt-4" style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.03em" }}>Why Chiropractic Practices Need<br /><GradientTextLight>a Different Marketing Strategy.</GradientTextLight></h2>
              <p className="mt-5 text-white/90 text-[16px] leading-[1.78] max-w-2xl mx-auto">Chiropractic is proximity-sensitive and intent-specific. Patients usually search for care near their home, workplace, school, or accident route — and they search with specific pain or condition intent. Generic healthcare marketing campaigns miss the local, recurring, and condition-specific factors that drive chiropractic appointments.</p>
            </Reveal>
            <Reveal delay={0.1} className="max-w-3xl mx-auto mt-7">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex gap-2.5">
                <ExternalLink size={14} className="text-brand-bright flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono-ui text-[10px] uppercase tracking-[0.1em] text-brand-lavender/60 mb-1">NCCIH — National Institutes of Health</div>
                  <p className="text-[13px] text-white/90 leading-[1.65] m-0">NCCIH reports that chiropractic care is used by U.S. adults primarily for pain management, confirming consistent national and local demand for chiropractic services. <a href="https://www.nccih.nih.gov/health/chiropractic-in-depth" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-bright font-semibold underline">NCCIH: Chiropractic In Depth</a>.</p>
                </div>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-3.5 mt-9 max-w-4xl mx-auto">
              {[
                { i: MapPin, h: "Proximity-First Search Behavior", p: "Most patients search within 5–10 miles of home or work. Local search, Maps visibility, and proximity signals are the foundation of chiropractic patient acquisition." },
                { i: AlertCircle, h: "Pain and Condition Specific Intent", p: "Patients search for back pain chiropractor, sports chiropractor, personal injury chiropractor, and neck pain relief — not generic healthcare. Campaigns must match this intent." },
                { i: RefreshCw, h: "Recurring Care and Retention", p: "Unlike episodic healthcare, chiropractic patients can become recurring, wellness, or care-plan patients. Systems that support retention and reactivation are as important as new patient acquisition." },
              ].map((c, i) => (
                <Reveal key={i} delay={i * 0.06} className="h-full">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 h-full">
                    <div className="w-10 h-10 rounded-lg bg-brand-purple/20 flex items-center justify-center"><c.i size={18} className="text-brand-bright" /></div>
                    <h3 className="font-bold text-white text-[14px] mt-3">{c.h}</h3>
                    <p className="text-white/95 text-[13px] mt-1.5 leading-[1.6]">{c.p}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section className="bg-surface-secondary py-20">
          <div className="container">
            <Reveal className="text-center max-w-2xl mx-auto">
              <ChipLabel>The Common Growth Problem</ChipLabel>
              <h2 className="font-extrabold text-brand-deep leading-[1.1] mt-4" style={{ fontSize: "clamp(26px, 4.5vw, 42px)", letterSpacing: "-0.03em" }}>You Are Nearby, <GradientText>But Not Always Visible Enough</GradientText></h2>
            </Reveal>
            <div className="flex flex-col md:flex-row gap-3 md:gap-2 items-stretch justify-center mt-12 max-w-5xl mx-auto">
              {JOURNEY.map((n, i, a) => (
                <div key={n.chip} className="flex flex-col md:flex-row items-stretch md:flex-1 md:min-w-0">
                  <Reveal delay={i * 0.06} className="flex-1 w-full md:w-auto md:flex">
                    <div className="flex-1 w-full bg-white/90 border border-brand-purple/12 rounded-2xl p-6 text-center hover:border-brand-purple/30 transition-all flex flex-col">
                      <div className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-brand-purple">{n.chip}</div>
                      <div className="w-10 h-10 mx-auto mt-3 rounded-full flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 49% 15%))" }}><n.icon size={18} className="text-white" /></div>
                      <div className="font-bold text-brand-deep text-[14px] mt-3 min-h-[2.6em] flex items-center justify-center">{n.l}</div>
                      <div className="text-ink-muted text-[12px] mt-1.5 italic flex-1">{n.p}</div>
                    </div>
                  </Reveal>
                  {i < a.length - 1 && <div className="hidden md:flex items-center px-1"><ChevronRight size={18} className="text-brand-lavender flex-shrink-0" /></div>}
                </div>
              ))}
            </div>
            <div className="text-center mt-7">
              <Link to="/for-practices/online-visibility" className="text-brand-purple font-semibold text-[14px] inline-flex items-center gap-1.5">Find where your practice is losing local patients <ArrowRight size={14} /></Link>
            </div>
          </div>
        </section>

        {/* SEGMENTS */}
        <section className="bg-background py-20 sm:py-24">
          <div className="container">
            <Reveal className="text-center max-w-2xl mx-auto">
              <ChipLabel>By Patient Type</ChipLabel>
              <h2 className="font-extrabold text-brand-deep leading-[1.1] mt-4" style={{ fontSize: "clamp(26px, 4.5vw, 42px)", letterSpacing: "-0.03em" }}>Chiropractic Marketing <GradientText>by Patient Type</GradientText></h2>
            </Reveal>
            <ul className="ui-card-grid list-none p-0 m-0 grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 max-w-5xl mx-auto">
              {SEGMENTS.map((s, i) => (
                <Reveal key={s.tag} delay={i * 0.06} className="h-full">
                  <li>
                    <article className="ui-card bg-white/95 border-brand-purple/10 rounded-2xl p-0 overflow-hidden hover:border-brand-purple/35 hover:-translate-y-1.5 transition-all">
                      <div className="h-1" style={{ background: "linear-gradient(90deg, hsl(247 93% 64%), hsl(248 100% 75%))" }} />
                      <div className="p-6 ui-card-body">
                        <div className="flex items-start gap-3">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 49% 15%))" }}><s.icon size={20} className="text-white" /></div>
                          <div className="min-w-0 flex-1">
                            <span className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-brand-purple block mb-1">{s.tag}</span>
                            <h3 className="ui-card-heading text-[16px]">{s.h3}</h3>
                          </div>
                        </div>
                        <p className="mt-2 text-[13px] text-ink-secondary"><span className="font-mono-ui text-[10px] uppercase text-ink-muted">Intent: </span>{s.intent}</p>
                        <div className="ui-pill-row mt-2">{s.channels.map(c => <span key={c} className="inline-flex min-h-[24px] items-center font-mono-ui text-[10px] text-brand-purple bg-brand-purple/7 rounded-full px-2 py-0.5">{c}</span>)}</div>
                        <p className="mt-3 text-[12px] text-ink-secondary"><span className="font-mono-ui text-[10px] uppercase text-emerald-600">Conversion: </span>{s.conv}</p>
                        <Link to={s.link.to} className="ui-card-cta text-brand-purple text-[12px]">{s.link.label} <ArrowRight size={12} /></Link>
                      </div>
                    </article>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* GROWTH ENGINE — dark */}
        <section className="relative overflow-hidden py-24" style={{ background: "linear-gradient(160deg, hsl(248 49% 15%), hsl(250 45% 19%), hsl(248 49% 15%))" }}>
          <DarkOrb />
          <div className="container relative z-10">
            <Reveal className="text-center max-w-2xl mx-auto">
              <ChipLabel dark>The Vigorant Chiropractic Growth Engine</ChipLabel>
              <h2 className="font-extrabold text-white leading-[1.1] mt-4" style={{ fontSize: "clamp(28px, 5vw, 46px)", letterSpacing: "-0.03em" }}>The Vigorant <GradientTextLight>Chiropractic Growth Engine</GradientTextLight></h2>
            </Reveal>
            <div className="ui-card-grid grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 max-w-5xl mx-auto">
              {ENGINE.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.05} className="h-full">
                  <div className="ui-card-dark rounded-2xl text-center hover:border-brand-bright/30 hover:-translate-y-1 transition-all">
                    <div className="font-mono-ui font-bold text-[28px]"><GradientTextLight>{s.n}</GradientTextLight></div>
                    <div className="w-11 h-11 mx-auto mt-2 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))" }}><s.icon size={20} className="text-white" /></div>
                    <h3 className="ui-card-heading-dark mt-3 text-[14px]">{s.h}</h3>
                    <p className="ui-card-text-dark text-[12px]">{s.body}</p>
                    <Link to={s.link.to} className="ui-card-cta text-brand-bright text-[11px]">{s.link.label} <ArrowRight size={11} /></Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section id="chiropractic-services" className="bg-surface-secondary py-20 sm:py-24">
          <div className="container">
            <Reveal className="text-center max-w-2xl mx-auto">
              <ChipLabel>Chiropractic Marketing Services</ChipLabel>
              <h2 className="font-extrabold text-brand-deep leading-[1.1] mt-4" style={{ fontSize: "clamp(26px, 4.5vw, 42px)", letterSpacing: "-0.03em" }}>Chiropractic Marketing Services<br /><GradientText>Connected Into One Growth System</GradientText></h2>
            </Reveal>
            <ul className="ui-card-grid list-none p-0 m-0 grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mt-12 max-w-5xl mx-auto">
              {SERVICES.map((s, i) => (
                <Reveal key={s.name} delay={i * 0.04} className="h-full">
                  <li>
                    <article className="ui-card bg-white/95 border-brand-purple/10 rounded-2xl p-5 hover:border-brand-purple/30 hover:-translate-y-1 transition-all text-center">
                      <div className="w-10 h-10 mx-auto rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))" }}><s.icon size={18} className="text-white" /></div>
                      <h3 className="ui-card-heading mt-2.5 text-[13px]">{s.name}</h3>
                      <p className="ui-card-text text-[12px]">{s.body}</p>
                      <Link to={s.href} className="ui-card-cta text-brand-purple text-[11px]">Explore <ArrowRight size={11} /></Link>
                    </article>
                  </li>
                </Reveal>
              ))}
            </ul>
            <div className="text-center mt-10"><PrimaryCTA to="/free-audit">{AUDIT} <ArrowRight size={16} /></PrimaryCTA></div>
          </div>
        </section>

        {/* PROOF */}
        <section className="bg-background py-20">
          <div className="container">
            <Reveal className="text-center max-w-2xl mx-auto">
              <ChipLabel>Chiropractic Practice Results</ChipLabel>
              <h2 className="font-extrabold text-brand-deep leading-[1.1] mt-4" style={{ fontSize: "clamp(26px, 4.5vw, 40px)", letterSpacing: "-0.03em" }}>Real Results From <GradientText>Chiropractic Practices</GradientText></h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-5 mt-12 max-w-5xl mx-auto">
              {[
                { who: "Chiropractic Clinic · Austin, TX", n: "+28", l: "new patients / month", problem: "Invisible in Maps for PI and wellness searches.", chips: ["Local SEO", "Google Maps", "Reviews"], when: "within 90 days", quote: "The maps campaign alone changed everything. Patients started finding us before they even looked at our website." },
                { who: "Sports Chiropractic · Denver, CO", n: "+18", l: "sports care inquiries / month", problem: "No service-specific pages or campaigns for sports chiropractic.", chips: ["Sports Landing Pages", "Paid Ads", "Video"], when: "within 60 days", quote: "Finally showing up for athlete searches. The video content drove real trust before they called." },
                { who: "Family Chiropractic · Phoenix, AZ", n: "↓38%", l: "cost per new patient", problem: "Generic ads sending traffic to homepage — poor conversion.", chips: ["Dedicated Landing Pages", "Call Tracking", "GBP"], when: "within 45 days", quote: "Service-specific landing pages cut our cost per patient by nearly half." },
              ].map((p, i) => (
                <Reveal key={p.who} delay={i * 0.08} className="h-full">
                  <article className="bg-white/95 border border-brand-purple/10 rounded-2xl p-7 hover:border-brand-purple/30 hover:-translate-y-1.5 transition-all h-full flex flex-col">
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
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-surface-secondary py-20">
          <div className="container">
            <Reveal className="text-center max-w-3xl mx-auto">
              <ChipLabel>Frequently Asked Questions</ChipLabel>
              <h2 className="font-extrabold text-brand-deep leading-[1.1] mt-4" style={{ fontSize: "clamp(26px, 4.5vw, 38px)", letterSpacing: "-0.03em" }}>Chiropractic Marketing, SEO, and AI Visibility — FAQ</h2>
            </Reveal>
            <div className="max-w-3xl mx-auto mt-10">
              <Accordion type="single" collapsible className="space-y-2">
                {FAQS.map((f, i) => (
                  <AccordionItem key={i} value={`f${i}`} className="border border-brand-purple/12 rounded-2xl px-5 bg-white/90">
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
            <ChipLabel dark>Build Predictable Local Patient Flow</ChipLabel>
            <h2 className="font-serif font-bold text-white mt-4 leading-[1.15]" style={{ fontSize: "clamp(30px, 4.5vw, 50px)" }}>Get Your Free Chiropractic Growth Audit.</h2>
            <p className="mt-5 text-white/90 text-[16px] max-w-xl mx-auto leading-[1.72]">See where your chiropractic practice is losing local visibility, leads, and appointments — and the priority fixes for your market.</p>
            <div className="mt-7"><Link to="/free-audit" className="btn-on-dark inline-flex items-center justify-center gap-2 rounded-full inline-flex items-center gap-2 font-bold text-[16px] px-10 py-4">{AUDIT} <ArrowRight size={16} /></Link></div>
            <div className="mt-5 font-mono-ui text-[12px] text-brand-lavender">8 audit slots per month · 3 remaining</div>
          </div>
        </section>
      </main>
      <Footer /><StickyCTA />
    </>
  );
}
