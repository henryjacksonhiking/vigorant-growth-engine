import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, CheckCircle, Target, Rocket, GitBranch, User, MapPin, MousePointerClick, BarChart2, UserPlus, Building2, DollarSign, Shield, Network, Eye, Users, RefreshCw, Search, Megaphone, Layout, Star, Lightbulb, FileText, Mail, Video, Check, ExternalLink, Minus } from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import SharedFAQList from "@/components/site/SharedFAQ";
import StickyCTA from "@/components/site/StickyCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal, Line, ChipLabel, Breadcrumb, PrimaryCTA, SecondaryCTA, GradientText, GradientTextLight, HeroOrbs, DarkOrb } from "@/components/site/SolutionPageAtoms";

const CANONICAL = "https://vigorant.com/for-practices/scale-your-practice";
const CTA1 = "Request Your Free Growth Audit";

const FAQS = [
  { q: "How do I know if my practice is ready to scale?", a: "A practice is usually ready to scale when it has strong patient satisfaction, stable operations, provider or schedule capacity, clear financial targets, and a marketing system that can generate predictable demand beyond referrals." },
  { q: "How can marketing help me open a second practice location?", a: "Marketing supports a second location by validating local demand, building location-specific SEO visibility, launching paid campaigns, creating landing pages, and tracking which channels produce qualified patient inquiries." },
  { q: "Should I hire an associate before or after increasing marketing?", a: "Many practices should build demand before or alongside associate hiring. An associate can only succeed if the practice has enough patient volume, appointment mix, operatory support, and provider-specific marketing." },
  { q: "What is a scalable patient acquisition system?", a: "A scalable patient acquisition system combines local SEO, AI visibility, paid advertising, conversion-focused website design, reputation management, tracking, and ongoing optimization so growth does not depend only on referrals." },
  { q: "Can Vigorant help multi-location practices?", a: "Yes. Vigorant can support multi-location healthcare growth through location-level SEO, Google Business Profile optimization, paid ads, conversion-focused pages, reputation management, and reporting by location." },
  { q: "How does AI visibility affect practice scaling?", a: "AI visibility matters because patients increasingly use AI-powered search experiences to compare providers. Practices with stronger structured content, reviews, service pages, and authority signals are more likely to be discovered and recommended." },
  { q: "What should I fix before expanding my practice?", a: "Before expanding, review your market visibility, conversion rate, patient acquisition cost, review profile, provider capacity, brand positioning, and reporting. Weakness in any of these areas can make scaling more expensive and risky." },
  { q: "What services are most important for scaling a healthcare practice?", a: "The most important services are healthcare SEO, AI search optimization, paid advertising, conversion-focused website design, reputation management, landing pages, and performance reporting." },
  { q: "How long does it take to build a growth system for expansion?", a: "The first strategic roadmap can be built after an audit, but meaningful traction usually requires a phased 90-day launch and ongoing optimization over several months, depending on competition, market, budget, and current assets." },
  { q: "Is this page only for dental practices?", a: "No. The scale-your-practice strategy applies to dental, medical, and chiropractic practices, but the campaign mix and messaging should be adapted to each specialty and local market." },
];

const CEILINGS = [
  { chip: "CEILING 01", icon: GitBranch, h3: "Referral dependency limits scalability", body: "A practice built on the owner's referral network cannot scale unless demand generation works independently of the owner's personal relationships.", impact: "New locations and associates inherit the referral gap, not the demand." },
  { chip: "CEILING 02", icon: User, h3: "Owner-brand dependency cannot transfer", body: "When patients choose the practice because of the owner's personal reputation, adding providers or locations requires a brand system that works at the practice level, not the person level.", impact: "Associate production underperforms. New locations struggle to win local trust." },
  { chip: "CEILING 03", icon: MapPin, h3: "Local visibility limits are already reached", body: "In competitive markets, organic referrals and a single-location GBP profile may have maximized their reach without multi-channel visibility and AI search presence.", impact: "Market share plateaus without an active demand generation system." },
  { chip: "CEILING 04", icon: MousePointerClick, h3: "Weak conversion infrastructure cannot support added capacity", body: "More chairs, more providers, and more locations all require more patients. If the website, booking path, follow-up, and tracking cannot support current demand efficiently, adding capacity makes the problem worse.", impact: "Higher overhead. Same or lower patient acquisition efficiency." },
  { chip: "CEILING 05", icon: BarChart2, h3: "No multi-location tracking or attribution", body: "Without location-level reporting, it is impossible to know which markets are underperforming, which channels produce the best patients by location, or where to invest the next dollar of growth budget.", impact: "Budget is misallocated. Individual locations cannot improve without data." },
];

const FRAMEWORK = [
  { n: "01", icon: Target, h3: "Market Positioning", body: "Establish brand clarity, competitive differentiation, and target-patient definition at the practice and location level.", why: "Associates and locations inherit a clear identity, not ambiguity." },
  { n: "02", icon: Eye, h3: "Local & AI Visibility", body: "Build multi-location search visibility, Google Maps presence, entity authority, and AI-search readiness across all markets served.", why: "New locations get found before their GBP profile matures organically." },
  { n: "03", icon: Users, h3: "Patient Acquisition", body: "Specialty-targeted paid campaigns, content marketing, and AEO/GEO structuring that produce qualified patients by service, location, and provider.", why: "Each associate and location has a demand system, not just a brand presence." },
  { n: "04", icon: MousePointerClick, h3: "Conversion Infrastructure", body: "Conversion-focused websites, location-specific landing pages, service-specific pages, booking workflows, and call tracking at scale.", why: "Growth in traffic does not outpace the system's ability to convert it." },
  { n: "05", icon: BarChart2, h3: "Multi-Location Tracking", body: "Attribution dashboards by location, provider, service, and campaign — with reporting connected to patient acquisition cost and production.", why: "Decisions about where to invest the next $1,000 are data-driven, not guessed." },
  { n: "06", icon: RefreshCw, h3: "Continuous Optimization", body: "Monthly performance reviews, budget reallocation, A/B testing, and compounding improvements — per location and provider.", why: "Scaling compounds instead of plateauing again at the next level." },
];

const PATHS = [
  { chip: "ADD AN ASSOCIATE", icon: UserPlus, h3: "Add an Associate Provider", chal: "An associate can only succeed if the practice has enough patient volume, the right schedule mix, and provider-specific marketing.", need: "Demand generation, provider-specific landing pages, appointment-mix reporting, and a brand system that does not depend on the owner." },
  { chip: "SECOND LOCATION", icon: Building2, h3: "Open a Second Location", chal: "A second location requires local-market demand validation, location-specific SEO, Google Business Profile strategy, launch campaigns, and tracking.", need: "Location-level SEO, paid launch campaigns, landing pages, GBP optimization, and attribution by location." },
  { chip: "HIGH-VALUE SERVICES", icon: DollarSign, h3: "Expand High-Value Services", chal: "Growth should improve production per patient, not just appointment volume. Campaigns must target procedures that support profitability.", need: "Treatment-specific campaigns, specialty landing pages, trust content, and conversion tracking by service." },
  { chip: "COMPETE AGAINST GROUPS", icon: Shield, h3: "Compete Against Larger Groups and DSOs", chal: "Independent practices can compete by owning local search, strong reviews, niche positioning, and a patient experience narrative that large groups cannot match.", need: "Local SEO dominance, review velocity, AI-search visibility, and positioning content that amplifies independence as a differentiator." },
  { chip: "MULTI-LOCATION BRAND", icon: Network, h3: "Build a Multi-Location Brand", chal: "Scaling requires brand consistency plus location-level customization, reporting, and search visibility for each market.", need: "Unified brand system, location-specific landing pages, multi-location reporting, and marketing governance across all locations." },
];

const CHECKLIST = [
  "Consistent patient demand — the schedule fills without extreme effort",
  "Provider or schedule capacity is the growth constraint, not demand",
  "Strong clinical reputation and patient satisfaction",
  "Leadership bandwidth and operational readiness to support expansion",
  "There is a clear opportunity in a nearby market or underserved segment",
  "A financial model and growth targets are already defined",
  "Willingness to invest in marketing infrastructure, not just more ad spend",
  "Current tracking shows which channels produce patients — and at what cost",
];

export default function ScaleYourPractice() {
  return (
    <>
      <Helmet>
        <title>Scale Your Healthcare Practice with a Growth System | Vigorant</title>
        <meta name="description" content="Vigorant builds scalable patient acquisition systems for dental, medical, and chiropractic practices ready to add providers, open second locations, or expand high-value services." />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:title" content="Scale Your Healthcare Practice with a Growth System | Vigorant" />
        <meta property="og:url" content={CANONICAL} />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "@id": `${CANONICAL}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://vigorant.com/" }, { "@type": "ListItem", position: 2, name: "For Practices", item: "https://vigorant.com/for-practices" }, { "@type": "ListItem", position: 3, name: "Scale Your Practice", item: CANONICAL }] })}</script>
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "@id": `${CANONICAL}#service`, name: "Healthcare Practice Growth and Scaling Strategy", provider: { "@type": "Organization", name: "Vigorant", url: "https://vigorant.com" }, areaServed: { "@type": "Country", name: "United States" } })}</script>
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
                <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "For Practices", href: "/for-practices" }, { label: "Scale Your Practice" }]} />
                <span className="inline-flex items-center gap-2 bg-brand-purple/8 border border-brand-purple/20 rounded-full px-4 py-1.5 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse" />
                  <span className="font-mono-ui text-[11px] uppercase tracking-[0.1em] text-brand-purple">For practices ready to break through the growth ceiling</span>
                </span>
                <h1 className="font-serif font-bold text-brand-deep leading-[1.05] tracking-tight" style={{ fontSize: "clamp(34px, 6vw, 60px)", letterSpacing: "-0.025em" }}>
                  <Line delay={0.1}>Scale Your Practice</Line>
                  <Line delay={0.22}>with a Growth System</Line>
                  <Line delay={0.34}><GradientText>Built for the Next Stage.</GradientText></Line>
                </h1>
                <p className="mt-6 text-ink-secondary text-[16px] sm:text-[17px] leading-[1.75] max-w-xl">You have built a reputable practice. Now you need a growth system that can support the next stage — adding an associate, opening another location, expanding high-value services, or growing beyond word-of-mouth.</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <PrimaryCTA to="/free-audit">{CTA1} <ArrowRight size={16} /></PrimaryCTA>
                  <SecondaryCTA to="/how-it-works">See How the Growth System Works</SecondaryCTA>
                </div>
                <div className="mt-6 inline-flex flex-wrap items-center gap-2 bg-surface-secondary rounded-full px-5 py-2.5 font-mono-ui text-[12px] text-brand-purple max-w-fit">
                  <span>120+ Practices Served</span><span className="text-brand-lavender">·</span><span>3 Specialties</span><span className="text-brand-lavender">·</span><span>SEO + Paid Ads + Website + AI</span>
                </div>
              </div>

              {/* Growth Trajectory Card */}
              <Reveal delay={0.2}>
                <div className="bg-background border border-brand-purple/15 rounded-2xl p-6 sm:p-7" style={{ boxShadow: "0 24px 80px hsl(248 49% 15% / 0.09)" }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 49% 15%))" }}><TrendingUp size={16} className="text-white" /></div>
                      <div className="font-bold text-brand-deep text-[14px]">Practice Growth Trajectory</div>
                    </div>
                    <span className="font-mono-ui text-[11px] text-brand-purple">Scale Readiness View</span>
                  </div>
                  <div className="h-px bg-brand-purple/10 my-3" />
                  <div className="space-y-3">
                    {[
                      { i: CheckCircle, l: "Stage 1: Established Practice", s: "Strong referrals · Loyal patients · Good care", chip: "COMPLETE", style: "bg-emerald-50 border-emerald-200 text-emerald-700", iconC: "text-emerald-600" },
                      { i: Target, l: "Stage 2: Growth Ceiling", s: "Referrals plateauing · Ad results inconsistent", chip: "WHERE YOU ARE", style: "bg-brand-purple/8 border-brand-purple/30", iconC: "text-brand-purple", primary: true },
                      { i: Rocket, l: "Stage 3: Scalable System", s: "Predictable demand · Multi-location ready", chip: "THE GOAL", style: "bg-white border-brand-purple/12", iconC: "text-brand-bright" },
                    ].map(s => (
                      <div key={s.l} className={`flex items-center gap-3 rounded-2xl border p-3 ${s.style}`}>
                        <s.i size={16} className={s.iconC} />
                        <div className="flex-1 min-w-0">
                          <div className={`text-[13px] text-brand-deep ${s.primary ? "font-bold" : "font-semibold"}`}>{s.l}</div>
                          <div className="font-mono-ui text-[11px] text-ink-muted truncate">{s.s}</div>
                        </div>
                        <span className={`font-mono-ui text-[10px] rounded-full px-2 py-0.5 ${s.primary ? "text-white" : s.chip === "COMPLETE" ? "bg-emerald-100 text-emerald-700" : "bg-brand-purple/10 text-brand-purple"}`} style={s.primary ? { background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))" } : undefined}>{s.chip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* BREAKING CEILING — dark */}
        <section className="relative overflow-hidden py-20 sm:py-24" style={{ background: "hsl(var(--brand-deep))" }}>
          <DarkOrb />
          <div className="container relative z-10">
            <Reveal className="text-center max-w-3xl mx-auto">
              <ChipLabel dark>The Growth Ceiling</ChipLabel>
              <h2 className="font-extrabold text-white leading-[1.1] mt-4" style={{ fontSize: "clamp(28px, 5vw, 46px)", letterSpacing: "-0.03em" }}>You Are Not Starting From Zero —<br /><GradientTextLight>You Are Trying to Break Through the Ceiling.</GradientTextLight></h2>
              <p className="mt-5 text-white/65 text-[16px] leading-[1.78] max-w-2xl mx-auto">Many successful practices do not fail because of poor care. They plateau because the owner's reputation, referrals, and existing marketing cannot support the next level of growth. Growth gets more complex when you are no longer trying to survive — you are trying to scale intelligently.</p>
            </Reveal>
            <Reveal delay={0.1} className="max-w-3xl mx-auto mt-8">
              <div className="bg-white/5 border border-brand-lavender/20 rounded-2xl p-7">
                <div className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-brand-lavender">Definition · AIO/GEO Ready</div>
                <p className="mt-2 font-semibold text-white text-[15px]">What does scaling a healthcare practice actually mean?</p>
                <p className="mt-2 text-white/82 text-[15px] leading-[1.85] italic m-0">"Scaling a healthcare practice means creating repeatable patient demand, consistent brand visibility, conversion systems, and measurable growth infrastructure that can support additional providers, services, or locations."</p>
              </div>
            </Reveal>
            <div className="max-w-3xl mx-auto mt-9 space-y-2">
              {[
                "Schedule is consistently busy but the revenue ceiling has not moved",
                "A new associate cannot succeed without enough patient demand to fill their chair",
                "A second location feels risky without predictable new-patient infrastructure",
                "Paid ads produce inconsistent results when the landing-page and tracking foundation is weak",
                "Competitors — including DSOs and larger groups — seem to grow faster without proportionally better care",
              ].map(b => (
                <div key={b} className="flex items-start gap-3 bg-white/4 border border-white/8 rounded-2xl p-3.5">
                  <Minus size={14} className="text-amber-500/80 flex-shrink-0 mt-1" />
                  <span className="text-white/72 text-[14px]">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CEILINGS */}
        <section className="bg-background py-20 sm:py-24">
          <div className="container">
            <Reveal className="text-center max-w-2xl mx-auto">
              <ChipLabel>The Ceiling Diagnosis</ChipLabel>
              <h2 className="font-extrabold text-brand-deep leading-[1.1] mt-4" style={{ fontSize: "clamp(26px, 4.5vw, 42px)", letterSpacing: "-0.03em" }}>Why Successful Practices <GradientText>Often Hit a Growth Ceiling</GradientText></h2>
            </Reveal>
            <ul className="list-none p-0 m-0 grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 max-w-5xl mx-auto">
              {CEILINGS.map((c, i) => (
                <Reveal key={c.chip} delay={i * 0.06} className="h-full">
                  <li>
                    <article className="h-full bg-white/95 border border-brand-purple/10 rounded-2xl overflow-hidden hover:border-brand-purple/35 hover:-translate-y-1.5 transition-all">
                      <div className="h-1" style={{ background: "linear-gradient(90deg, hsl(38 92% 50% / 0.4), hsl(247 93% 64% / 0.6))" }} />
                      <div className="p-6">
                        <div className="flex items-start gap-3">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 49% 15%))" }}><c.icon size={20} className="text-white" /></div>
                          <div className="min-w-0 flex-1">
                            <span className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-amber-700 block mb-1">{c.chip}</span>
                            <h3 className="font-bold text-brand-deep text-[16px] leading-tight">{c.h3}</h3>
                          </div>
                        </div>
                        <p className="text-[13px] text-ink-secondary mt-1.5 leading-[1.65]">{c.body}</p>
                        <p className="mt-3 text-[12px] text-ink-muted"><span className="font-mono-ui text-[10px] uppercase text-amber-600">Scale Risk: </span>{c.impact}</p>
                      </div>
                    </article>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* SBA reference + scaling perspective */}
        <section className="bg-surface-secondary py-20">
          <div className="container">
            <Reveal className="text-center max-w-2xl mx-auto">
              <ChipLabel>A Strategic Perspective</ChipLabel>
              <h2 className="font-extrabold text-brand-deep leading-[1.1] mt-4" style={{ fontSize: "clamp(26px, 4.5vw, 40px)", letterSpacing: "-0.03em" }}>Scaling Requires More Than <GradientText>More Marketing</GradientText></h2>
              <p className="mt-4 text-ink-secondary text-[16px] max-w-lg mx-auto leading-[1.75]">Before you invest in expansion, paid campaigns, or an associate search, the growth infrastructure must be ready to support additional demand.</p>
            </Reveal>
            <Reveal delay={0.1} className="max-w-3xl mx-auto mt-8">
              <div className="bg-white/85 border border-brand-purple/10 rounded-2xl p-4 flex gap-2.5">
                <ExternalLink size={14} className="text-brand-purple flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono-ui text-[10px] uppercase tracking-[0.1em] text-ink-muted mb-1">U.S. Small Business Administration</div>
                  <p className="text-[13px] text-ink-secondary leading-[1.65] m-0">The SBA advises businesses preparing to expand to a new location to update their marketing plan, conduct a local market and competitor review, and build financial forecasts.{" "}
                    <a href="https://www.sba.gov/business-guide/grow-your-business/expand-new-locations" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-purple font-semibold underline">U.S. SBA — Expand to new locations</a>.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SCALE FRAMEWORK — dark */}
        <section className="relative overflow-hidden py-24" style={{ background: "linear-gradient(160deg, hsl(248 49% 15%), hsl(250 45% 19%), hsl(248 49% 15%))" }}>
          <DarkOrb />
          <div className="container relative z-10">
            <Reveal className="text-center max-w-2xl mx-auto">
              <ChipLabel dark>The Vigorant Scale Framework</ChipLabel>
              <h2 className="font-extrabold text-white leading-[1.1] mt-4" style={{ fontSize: "clamp(28px, 5vw, 46px)", letterSpacing: "-0.03em" }}>The Vigorant <GradientTextLight>Scale Framework</GradientTextLight></h2>
              <p className="mt-5 text-white/60 text-[15px] max-w-md mx-auto leading-[1.78]">A 6-stage infrastructure model that prepares a healthcare practice for scalable, multi-location, or multi-provider growth.</p>
            </Reveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 max-w-5xl mx-auto">
              {FRAMEWORK.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.05} className="h-full">
                  <div className="bg-white/6 border border-white/10 rounded-2xl p-6 text-center hover:border-brand-bright/30 hover:-translate-y-1 transition-all h-full">
                    <div className="font-mono-ui font-bold text-[28px]"><GradientTextLight>{s.n}</GradientTextLight></div>
                    <div className="w-11 h-11 mx-auto mt-2 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))" }}><s.icon size={20} className="text-white" /></div>
                    <h3 className="font-bold text-white text-[15px] mt-3">{s.h3}</h3>
                    <p className="mt-2 text-white/60 text-[12px] leading-[1.65]">{s.body}</p>
                    <p className="mt-2 font-mono-ui text-[10px] text-brand-lavender/60 italic">{s.why}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="text-center mt-12"><Link to="/free-audit" className="btn-on-dark inline-flex items-center justify-center gap-2 rounded-full inline-flex items-center gap-2 font-bold text-[14px] px-7 py-3">{CTA1} <ArrowRight size={15} /></Link></div>
          </div>
        </section>

        {/* GROWTH PATHS */}
        <section className="bg-background py-20 sm:py-24">
          <div className="container">
            <Reveal className="text-center max-w-2xl mx-auto">
              <ChipLabel>Choose Your Growth Path</ChipLabel>
              <h2 className="font-extrabold text-brand-deep leading-[1.1] mt-4" style={{ fontSize: "clamp(26px, 4.5vw, 42px)", letterSpacing: "-0.03em" }}>Growth Paths We Help <GradientText>Healthcare Practices Support</GradientText></h2>
            </Reveal>
            <ul className="list-none p-0 m-0 grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 max-w-5xl mx-auto">
              {PATHS.map((p, i) => (
                <Reveal key={p.chip} delay={i * 0.06} className="h-full">
                  <li>
                    <article className="h-full bg-white/95 border border-brand-purple/10 rounded-2xl overflow-hidden hover:border-brand-purple/35 hover:-translate-y-1.5 transition-all">
                      <div className="h-[5px]" style={{ background: "linear-gradient(90deg, hsl(247 93% 64%), hsl(248 100% 75%))" }} />
                      <div className="p-6">
                        <div className="flex items-start gap-3">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 49% 15%))" }}><p.icon size={20} className="text-white" /></div>
                          <div className="min-w-0 flex-1">
                            <span className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-brand-purple block mb-1">{p.chip}</span>
                            <h3 className="font-bold text-brand-deep text-[16px] leading-tight">{p.h3}</h3>
                          </div>
                        </div>
                        <p className="mt-3 text-[13px] text-ink-secondary"><span className="font-mono-ui text-[10px] uppercase text-amber-600">Challenge: </span>{p.chal}</p>
                        <p className="mt-2 text-[13px] text-ink-secondary"><span className="font-mono-ui text-[10px] uppercase text-brand-purple">What You Need: </span>{p.need}</p>
                      </div>
                    </article>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* CHECKLIST */}
        <section className="bg-surface-secondary py-20 sm:py-24">
          <div className="container">
            <Reveal className="text-center max-w-2xl mx-auto">
              <ChipLabel>Scale Readiness Self-Assessment</ChipLabel>
              <h2 className="font-extrabold text-brand-deep leading-[1.1] mt-4" style={{ fontSize: "clamp(26px, 4.5vw, 40px)", letterSpacing: "-0.03em" }}>Signs Your Practice <GradientText>Is Ready to Scale</GradientText></h2>
            </Reveal>
            <Reveal delay={0.1} className="max-w-3xl mx-auto mt-10">
              <div className="bg-white/95 border border-brand-purple/15 rounded-2xl p-8" style={{ boxShadow: "0 16px 60px hsl(248 49% 15% / 0.08)" }}>
                <div className="font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-purple mb-4">Scale Readiness Checklist</div>
                <ul className="list-none p-0 m-0 space-y-1">
                  {CHECKLIST.map((c, i) => (
                    <li key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-brand-purple/3">
                      <span className="w-5 h-5 rounded border-[1.5px] border-brand-purple/30 flex items-center justify-center flex-shrink-0 mt-0.5"><Check size={11} className="text-brand-purple opacity-40" /></span>
                      <span className="text-[14px] text-brand-deep font-medium">{c}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-brand-purple/10 mt-5 pt-5 flex flex-wrap justify-between items-center gap-3">
                  <span className="font-mono-ui text-[12px] text-brand-purple">5+ checked: You are likely ready to build a growth system.</span>
                  <Link to="/free-audit" className="btn-primary-grad inline-flex items-center justify-center gap-2 rounded-full inline-flex items-center gap-1.5 font-bold text-[13px] px-5 py-2.5">Check Your Scale Readiness <ArrowRight size={13} /></Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-background py-20">
          <div className="container">
            <Reveal className="text-center max-w-3xl mx-auto">
              <ChipLabel>Frequently Asked Questions</ChipLabel>
              <h2 className="font-extrabold text-brand-deep leading-[1.1] mt-4" style={{ fontSize: "clamp(26px, 4.5vw, 38px)", letterSpacing: "-0.03em" }}>Scaling a Healthcare Practice — FAQ</h2>
            </Reveal>
            <SharedFAQList faqs={FAQS} />

          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden flex items-center justify-center min-h-[500px] py-20" style={{ background: "linear-gradient(160deg, hsl(248 49% 15%) 0%, hsl(250 45% 19%) 45%, hsl(248 49% 15%) 100%)" }}>
          <DarkOrb />
          <div className="container relative z-10 text-center max-w-2xl">
            <ChipLabel dark>Build the Next Stage of Your Practice</ChipLabel>
            <h2 className="font-serif font-bold text-white mt-4 leading-[1.15]" style={{ fontSize: "clamp(30px, 4.5vw, 50px)" }}>Free Scale Readiness Audit.</h2>
            <p className="mt-5 text-white/65 text-[16px] max-w-xl mx-auto leading-[1.72]">Get a clear view of what's between your current ceiling and a scalable growth system — before you hire, expand, or increase spend.</p>
            <div className="mt-7"><Link to="/free-audit" className="btn-on-dark inline-flex items-center justify-center gap-2 rounded-full inline-flex items-center gap-2 font-bold text-[16px] px-10 py-4">{CTA1} <ArrowRight size={16} /></Link></div>
          </div>
        </section>
      </main>
      <Footer /><StickyCTA />
    </>
  );
}
