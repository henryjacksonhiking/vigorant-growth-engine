import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Smile, Activity, Stethoscope, FileText, Megaphone, Search, Sparkles, Layout, Star, Video, Phone, Bell, BarChart2, Check, Minus, ExternalLink, X, CheckCircle } from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import GlobalFx from "@/components/site/GlobalFx";
import StickyCTA from "@/components/site/StickyCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal, Line, ChipLabel, Breadcrumb, PrimaryCTA, SecondaryCTA, GradientText, GradientTextLight, HeroOrbs, DarkOrb } from "@/components/site/SolutionPageAtoms";

const CANONICAL = "https://vigorant.com/for-practices/high-value-patients";
const CTA1 = "Request Your Free Growth Audit";

const FAQS = [
  { q: "Why is my practice fully booked but not profitable?", a: "A practice can be fully booked but not profitable when the schedule is dominated by low-production visits, weak treatment acceptance, low-value inquiries, or poor service-line positioning. Growth may require improving patient mix, not simply increasing appointment volume." },
  { q: "How can a dental practice attract more implant patients?", a: "A dental practice can attract more implant patients by building dedicated implant landing pages, improving local SEO for implant-related searches, running high-intent paid campaigns, using strong reviews and case education, and tracking consult-to-treatment conversion." },
  { q: "What are high-production patients?", a: "High-production patients are patients whose needs align with higher-value or strategically important services, such as dental implants, cosmetic dentistry, crowns, clear aligners, elective medical procedures, cash-pay chiropractic care, or longer-term care plans." },
  { q: "Is it better to get more patients or better patients?", a: "Most practices need both, but a full schedule with the wrong patient mix can limit growth. Better-fit patients can improve production, reduce wasted chair time, and support healthier revenue without overwhelming the team." },
  { q: "Can paid ads help attract higher-value patients?", a: "Yes, when paid ads are structured around specific high-intent services, location, search intent, landing page quality, and conversion tracking. Generic ads often create low-quality leads, while service-specific campaigns can attract better-fit inquiries." },
  { q: "Do high-value patients need a different website experience?", a: "Yes. Higher-value patients usually need more education, proof, trust, financing clarity, provider credibility, and FAQs before booking. A generic service page often under-converts these visitors." },
  { q: "How does AI visibility affect high-value patient acquisition?", a: "AI visibility matters because patients increasingly ask AI tools for recommendations, comparisons, and explanations. Practices with clear service pages, reviews, structured content, and authority signals are more likely to be understood and surfaced by AI search experiences." },
  { q: "What should be tracked for high-production patient campaigns?", a: "Track qualified inquiries, booked consults, show rates, treatment acceptance, production value, acquisition source, cost per qualified opportunity, and revenue attribution where possible." },
  { q: "Does this apply only to dentists?", a: "No. The concept applies to dental, chiropractic, and medical practices, but the target patient type differs by specialty. Dentists may focus on implants or cosmetics, chiropractors on cash-pay or wellness plans, and medical clinics on elective or private-pay services." },
  { q: "What is the first step to attracting high-production patients?", a: "The first step is identifying which services should drive growth, then auditing whether your website, SEO, ads, reviews, landing pages, and follow-up system are aligned around those services." },
];

const SPECS = [
  { tag: "Dental", icon: Smile, h3: "Dental High-Production Patients", focus: "Implants · Cosmetic · Crowns · Aligners", body: "Implant patients, cosmetic dentistry patients, full-mouth treatment candidates, clear aligner patients, and high-value crown cases generate significantly more production per visit than routine hygiene — and they require targeted visibility, specific service pages, and trust content to convert.", chips: ["Dental Implants", "Cosmetic Dentistry", "Clear Aligners", "Crown Cases"], cta: { label: "Dental Practice Marketing", to: "/solutions/dental" } },
  { tag: "Chiropractic", icon: Activity, h3: "Chiropractic High-Production Patients", focus: "Cash-Pay · Wellness Plans · Sports · PI", body: "Cash-pay wellness patients, recurring chiropractic care plan patients, sports performance patients, and higher-intent injury or PI patients who complete full care plans typically produce more revenue than single-visit injury visits.", chips: ["Cash-Pay Wellness", "Care Plan Patients", "Sports Performance", "Multi-Visit Plans"], cta: { label: "Chiropractic Marketing Solutions", to: "/solutions/chiropractic" } },
  { tag: "Medical & Elective", icon: Stethoscope, h3: "Medical and Elective High-Production Patients", focus: "Elective Consults · Cash-Pay · Specialty · Concierge", body: "Elective procedure patients, cash-pay and private-pay patients, specialty service seekers, and patients interested in concierge or functional medicine practices represent higher revenue per case with stronger loyalty and referral potential.", chips: ["Elective Procedures", "Cash-Pay Services", "Concierge Medicine", "Specialty Care"], cta: { label: "Medical Marketing Solutions", to: "/solutions/medical" } },
];

const STEPS = [
  { n: "01", h: "Identify the Services That Should Drive Growth", body: "Prioritize by production value, margin, provider capacity, treatment acceptance potential, and local demand — so campaigns focus on procedures that actually improve revenue per schedule.", link: { label: "Understand our full service approach", to: "/services" }, bullets: ["Service-line revenue and margin review", "Demand signals by procedure and market", "Priority setting before any campaign investment"] },
  { n: "02", h: "Build Campaigns Around Intent, Not General Awareness", body: "Paid ads, SEO pages, and AI-ready content should target high-intent service searches — dental implants, veneers, clear aligners, cash-pay chiropractic, elective consults — not broad awareness queries.", link: { label: "Paid ads for high-intent patient acquisition", to: "/services/paid-ads" }, bullets: ["High-intent keyword and audience targeting", "Service-specific ad creative and messaging", "AEO/GEO content for AI search discovery"] },
  { n: "03", h: "Create Landing Pages That Pre-Sell the Right Patient", body: "High-production patients need more trust, education, and proof before booking. A procedure-specific landing page with the right elements converts these visitors at higher rates than a generic service page.", link: { label: "Conversion-focused healthcare landing pages", to: "/services/website-design" }, bullets: ["Service eligibility and patient fit content", "Trust proof: reviews, credentials, before/after", "Financing, FAQ, and consultation CTA"] },
  { n: "04", h: "Improve Conversion Before Increasing Spend", body: "High-value patients have longer consideration cycles. They research more, compare more, and need more consistent follow-up. The booking path must match their decision-making process.", link: { label: "Improve lead conversion for better-fit patients", to: "/for-practices/lead-conversion" }, bullets: ["Consideration-length follow-up sequences", "Phone and form response improvement", "Treatment-plan consultation support"] },
  { n: "05", h: "Track Which Campaigns Create Real Production", body: "Measure qualified inquiries, consult bookings, show rates, treatment acceptance, and revenue attribution per channel — not just impressions or generic form submissions.", link: { label: "Measure marketing ROI from real patient opportunities", to: "/for-practices/marketing-roi" }, bullets: ["Consult-to-treatment attribution", "Production value by source and campaign", "CPL and cost-per-qualified-opportunity"] },
];

const STACK = [
  { icon: FileText, h: "Service Pages", body: "Dedicated pages for implants, cosmetic, elective, and specialty services" },
  { icon: Megaphone, h: "Google Ads", body: "High-intent service-specific campaigns with production-oriented targeting" },
  { icon: Search, h: "Local SEO", body: "Rankings for implant, cosmetic, and specialty searches in your market" },
  { icon: Sparkles, h: "AI Visibility", body: "AEO/GEO content for AI-driven patient research and discovery" },
  { icon: Layout, h: "Landing Pages", body: "Procedure-specific pages with trust proof, FAQ, and consultation CTA" },
  { icon: Star, h: "Reviews", body: "Case-specific testimonials and treatment proof near conversion points" },
  { icon: Video, h: "Video", body: "Provider introductions, procedure explainers, and patient testimonials" },
  { icon: Phone, h: "Call-to-Book Flow", body: "Scripts and workflows designed for longer-consideration calls" },
  { icon: Bell, h: "Follow-Up", body: "Multi-touch nurture for patients in the consideration phase" },
  { icon: BarChart2, h: "Reporting", body: "Attribution to production value and consult conversion rate" },
];

export default function HighValuePatients() {
  return (
    <>
      <Helmet>
        <title>Attract High-Production Patients for Healthcare Practices | Vigorant</title>
        <meta name="description" content="Vigorant helps dental, chiropractic, and medical practices attract higher-production patients for implants, cosmetic care, elective procedures, and cash-pay services through targeted positioning, SEO, paid ads, landing pages, and conversion optimization." />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:title" content="Attract High-Production Patients for Healthcare Practices | Vigorant" />
        <meta property="og:url" content={CANONICAL} />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "@id": `${CANONICAL}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://vigorant.com/" }, { "@type": "ListItem", position: 2, name: "For Practices", item: "https://vigorant.com/for-practices" }, { "@type": "ListItem", position: 3, name: "Attract High-Production Patients", item: CANONICAL }] })}</script>
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "@id": `${CANONICAL}#service`, name: "High-Value Patient Acquisition for Healthcare Practices", provider: { "@type": "Organization", name: "Vigorant", url: "https://vigorant.com" }, areaServed: { "@type": "Country", name: "United States" } })}</script>
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
                <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "For Practices", href: "/for-practices" }, { label: "Attract High-Production Patients" }]} />
                <span className="inline-flex items-center gap-2 bg-brand-purple/8 border border-brand-purple/20 rounded-full px-4 py-1.5 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse" />
                  <span className="font-mono-ui text-[11px] uppercase tracking-[0.1em] text-brand-purple">For practices that are busy but not as profitable as they should be</span>
                </span>
                <h1 className="font-serif font-bold text-brand-deep leading-[1.05] tracking-tight" style={{ fontSize: "clamp(34px, 6vw, 60px)", letterSpacing: "-0.025em" }}>
                  <Line delay={0.1}>Attract High-Production Patients,</Line>
                  <Line delay={0.24}><GradientText>Not Just More Appointments.</GradientText></Line>
                </h1>
                <p className="mt-6 text-ink-secondary text-[16px] sm:text-[17px] leading-[1.75] max-w-xl">If your schedule is full but production is not where it should be, the issue may not be patient volume. It may be patient mix, service positioning, conversion quality, and how your marketing filters demand.</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <PrimaryCTA to="/free-audit">{CTA1} <ArrowRight size={16} /></PrimaryCTA>
                  <SecondaryCTA onClick={() => document.getElementById("acquisition-system")?.scrollIntoView({ behavior: "smooth" })}>See How We Improve Patient Mix</SecondaryCTA>
                </div>
                <ul className="list-none p-0 m-0 mt-6 space-y-1.5 max-w-md">
                  {["Service-specific campaigns aligned with high-intent searches", "Landing pages that pre-sell and convert higher-value patients", "Attribution connecting campaigns to production and revenue indicators"].map(b => (
                    <li key={b} className="flex items-start gap-2 text-[14px] text-brand-deep font-medium"><CheckCircle size={15} className="text-brand-purple flex-shrink-0 mt-0.5" />{b}</li>
                  ))}
                </ul>
              </div>

              {/* Schedule mix card */}
              <Reveal delay={0.2}>
                <div className="bg-background border border-brand-purple/15 rounded-[22px] p-6" style={{ boxShadow: "0 24px 80px hsl(248 49% 15% / 0.09)" }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 49% 15%))" }}><Calendar size={16} className="text-white" /></div>
                      <div className="font-bold text-brand-deep text-[14px]">Schedule Production Mix</div>
                    </div>
                  </div>
                  <div className="h-px bg-brand-purple/10 my-3" />
                  <div>
                    <div className="font-mono-ui text-[10px] uppercase text-rose-600/70 mb-2">Current Schedule</div>
                    {["Hygiene · $120", "Check-up · $80", "Hygiene · $120", "Crown + Hygiene", "Hygiene · $120", "Implant Consult", "Check-up · $80"].map((l, i) => (
                      <div key={i} className="flex items-center gap-2 mb-1">
                        <div className="flex-1 h-5 rounded bg-amber-300/30" />
                        <span className="font-mono-ui text-[10px] text-ink-muted min-w-[110px]">{l}</span>
                      </div>
                    ))}
                    <p className="font-mono-ui text-[11px] text-rose-600/70 mt-2 mb-0">Full schedule · Low production</p>
                  </div>
                  <div className="text-center my-3"><ArrowRight size={16} className="text-brand-purple inline-block rotate-90" /></div>
                  <div>
                    <div className="font-mono-ui text-[10px] uppercase text-emerald-600 mb-2">Target Mix</div>
                    {["Implant Case · $3,200", "Crown + Hygiene", "Cosmetic Consult · $850", "Implant Case · $3,200", "Clear Aligner + Exam", "Cosmetic Case", "Implant Surgery · $4,100"].map((l, i) => (
                      <div key={i} className="flex items-center gap-2 mb-1">
                        <div className="flex-1 h-5 rounded" style={{ background: "linear-gradient(90deg, hsl(247 93% 64%), hsl(248 100% 75%))" }} />
                        <span className="font-mono-ui text-[10px] text-brand-deep min-w-[110px]">{l}</span>
                      </div>
                    ))}
                    <p className="font-mono-ui text-[11px] text-emerald-600 mt-2 mb-0">Same hours · Higher production</p>
                  </div>
                  <p className="font-mono-ui text-[10px] text-ink-muted text-center mt-3 mb-0">Illustrative. Actual production depends on specialty, market, and case mix.</p>
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
              <ChipLabel dark>The Patient-Mix Problem</ChipLabel>
              <h2 className="font-extrabold text-white leading-[1.1] mt-4" style={{ fontSize: "clamp(28px, 5vw, 46px)", letterSpacing: "-0.03em" }}>Fully Booked but Still Not Profitable?<br /><GradientTextLight>This Is the Patient-Mix Problem.</GradientTextLight></h2>
              <p className="mt-5 text-white/65 text-[16px] leading-[1.78] max-w-2xl mx-auto">Chair time is finite. If the schedule is consistently full of low-production visits while implant, cosmetic, elective, or cash-pay cases remain inconsistent, profitability cannot grow — regardless of how hard the team works.</p>
            </Reveal>
            <div className="max-w-3xl mx-auto mt-9 space-y-2">
              {[
                "Schedule dominated by hygiene and low-production check-up visits",
                "Low treatment acceptance for crowns, implants, and higher-value care",
                "Few inbound inquiries specifically requesting high-value services",
                "Patients choosing competitors who explain high-value services more clearly online",
                "Paid ads and SEO generating volume but not procedure-specific demand",
                "Chair time consumed by low-margin visits while high-production slots go unfilled",
              ].map(b => (
                <div key={b} className="flex items-start gap-3 bg-white/4 border border-white/8 rounded-[10px] p-3.5">
                  <Minus size={14} className="text-amber-500/80 flex-shrink-0 mt-1" />
                  <span className="text-white/72 text-[14px]">{b}</span>
                </div>
              ))}
            </div>
            <Reveal delay={0.1} className="max-w-3xl mx-auto mt-8">
              <div className="bg-white/5 border border-brand-lavender/20 rounded-[16px] p-7">
                <div className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-brand-lavender">Definition · AIO/GEO Ready</div>
                <p className="mt-2 font-semibold text-white text-[15px]">How do healthcare practices attract high-production patients?</p>
                <p className="mt-2 text-white/82 text-[15px] leading-[1.85] italic m-0">"Healthcare practices attract high-production patients by aligning service positioning, search visibility, paid campaigns, landing pages, reviews, financing communication, and follow-up around higher-value services such as implants, cosmetic care, elective procedures, or cash-pay treatment plans."</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* COMPARISON + ADA */}
        <section className="bg-surface-secondary py-20">
          <div className="container">
            <Reveal className="text-center max-w-2xl mx-auto">
              <ChipLabel>The Real Issue</ChipLabel>
              <h2 className="font-extrabold text-brand-deep leading-[1.1] mt-4" style={{ fontSize: "clamp(26px, 4.5vw, 40px)", letterSpacing: "-0.03em" }}>Why More Traffic Alone <GradientText>Will Not Fix a Low-Production Schedule</GradientText></h2>
            </Reveal>
            <Reveal delay={0.08} className="max-w-3xl mx-auto mt-10">
              <div className="border border-brand-purple/12 rounded-[16px] overflow-hidden bg-white">
                <div className="grid grid-cols-2 border-b border-brand-purple/10">
                  <div className="bg-amber-50/60 px-5 py-3 font-semibold text-amber-700 text-[13px]">More Patients (Volume Approach)</div>
                  <div className="bg-brand-purple/8 px-5 py-3 font-semibold text-brand-purple text-[13px]">Better Patient Mix (Production Approach)</div>
                </div>
                {[
                  ["Fill every appointment slot", "Fill higher-production slots with the right cases"],
                  ["Broad keyword targeting: 'dentist near me'", "Service-specific targeting: 'dental implants near me'"],
                  ["Generic homepage as landing page", "Procedure-specific landing pages that pre-qualify intent"],
                  ["Measure success by lead volume", "Measure by consult quality, treatment acceptance, and production"],
                  ["Same workflow for all leads", "High-value patient follow-up designed for longer consideration cycles"],
                ].map(([l, r], i, a) => (
                  <div key={i} className={`grid grid-cols-2 ${i < a.length - 1 ? "border-b border-brand-purple/8" : ""} ${i % 2 ? "bg-brand-purple/3" : ""}`}>
                    <div className="px-5 py-3 text-[13px] text-ink-secondary"><span className="text-amber-600 mr-1">·</span>{l}</div>
                    <div className="px-5 py-3 text-[13px] text-brand-deep"><span className="text-emerald-600 mr-1">✓</span>{r}</div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.12} className="max-w-3xl mx-auto mt-5">
              <div className="bg-white/85 border border-brand-purple/10 rounded-[12px] p-4 flex gap-2.5">
                <ExternalLink size={14} className="text-brand-purple flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono-ui text-[10px] uppercase tracking-[0.1em] text-ink-muted mb-1">ADA Health Policy Institute</div>
                  <p className="text-[13px] text-ink-secondary leading-[1.65] m-0">The ADA Health Policy Institute tracks dental care utilization, expenditures, and dental economy trends, which reinforces why practices need to evaluate not only patient volume but also service mix, treatment demand, and production strategy.{" "}
                    <a href="https://www.ada.org/resources/research/health-policy-institute/dental-care-market" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-purple font-semibold underline">ADA Health Policy Institute — The dental care market</a>.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SPECIALTIES */}
        <section className="bg-background py-20 sm:py-24">
          <div className="container">
            <Reveal className="text-center max-w-2xl mx-auto">
              <ChipLabel>By Specialty</ChipLabel>
              <h2 className="font-extrabold text-brand-deep leading-[1.1] mt-4" style={{ fontSize: "clamp(26px, 4.5vw, 42px)", letterSpacing: "-0.03em" }}>What High-Production Patients <GradientText>Look Like by Specialty</GradientText></h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-5 mt-12 max-w-5xl mx-auto">
              {SPECS.map((s, i) => (
                <Reveal key={s.tag} delay={i * 0.07}>
                  <article className="h-full bg-white/95 border border-white/70 rounded-[20px] p-7 hover:border-brand-purple/35 hover:-translate-y-1.5 transition-all">
                    <span className="font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-purple bg-brand-purple/8 px-2.5 py-1 rounded-full">{s.tag}</span>
                    <div className="mt-3 w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 49% 15%))" }}><s.icon size={20} className="text-white" /></div>
                    <h3 className="font-bold text-brand-deep text-[18px] mt-3">{s.h3}</h3>
                    <div className="font-mono-ui text-[11px] text-ink-muted mt-1">{s.focus}</div>
                    <p className="mt-3 text-[13px] text-ink-secondary leading-relaxed">{s.body}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">{s.chips.map(c => <span key={c} className="font-mono-ui text-[10px] text-brand-purple bg-brand-purple/7 rounded-full px-2 py-0.5">{c}</span>)}</div>
                    <Link to={s.cta.to} className="mt-4 inline-flex items-center gap-2 font-bold text-white text-[13px] px-5 py-2.5 rounded-full" style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(252 100% 75%))" }}>{s.cta.label} <ArrowRight size={13} /></Link>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SYSTEM — dark */}
        <section id="acquisition-system" className="relative overflow-hidden py-24" style={{ background: "linear-gradient(160deg, hsl(248 49% 15%), hsl(250 45% 19%), hsl(248 49% 15%))" }}>
          <DarkOrb />
          <div className="container relative z-10">
            <Reveal className="text-center max-w-2xl mx-auto">
              <ChipLabel dark>The 5-Part Acquisition System</ChipLabel>
              <h2 className="font-extrabold text-white leading-[1.1] mt-4" style={{ fontSize: "clamp(28px, 5vw, 46px)", letterSpacing: "-0.03em" }}>The Vigorant High-Value<br /><GradientTextLight>Patient Acquisition System</GradientTextLight></h2>
            </Reveal>
            <ol className="list-none p-0 m-0 max-w-5xl mx-auto flex flex-col gap-4 mt-12">
              {STEPS.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.05}>
                  <li className="bg-white/6 border border-white/10 rounded-[18px] overflow-hidden hover:border-brand-bright/30 hover:-translate-y-1 transition-all">
                    <div className="grid md:grid-cols-[1fr_240px]">
                      <div className="p-7">
                        <div className="font-mono-ui font-bold text-[24px]"><GradientTextLight>{s.n}</GradientTextLight></div>
                        <h3 className="font-bold text-white text-[16px] mt-2">{s.h}</h3>
                        <p className="mt-2 text-white/62 text-[13px] leading-[1.68] max-w-md">{s.body}</p>
                        <Link to={s.link.to} className="mt-3 inline-flex items-center gap-1.5 text-brand-bright font-semibold text-[12px]">{s.link.label} <ArrowRight size={12} /></Link>
                      </div>
                      <div className="md:border-l border-white/8 bg-white/3 p-6">
                        <div className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-brand-lavender/60 mb-2">What This Does</div>
                        <ul className="list-none p-0 m-0 space-y-1.5">
                          {s.bullets.map(b => (
                            <li key={b} className="flex items-start gap-2 text-[12px] text-white/68"><Check size={11} className="text-brand-bright flex-shrink-0 mt-1" />{b}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
            <div className="text-center mt-10"><Link to="/free-audit" className="inline-flex items-center gap-2 bg-white text-brand-deep font-bold text-[14px] px-7 py-3 rounded-full hover:bg-brand-lavender">See Where High-Value Patients Are Dropping Off <ArrowRight size={15} /></Link></div>
          </div>
        </section>

        {/* STACK */}
        <section className="bg-background py-20">
          <div className="container">
            <Reveal className="text-center max-w-2xl mx-auto">
              <ChipLabel>The Optimization Stack</ChipLabel>
              <h2 className="font-extrabold text-brand-deep leading-[1.1] mt-4" style={{ fontSize: "clamp(26px, 4.5vw, 40px)", letterSpacing: "-0.03em" }}>What We Optimize to <GradientText>Attract Better-Fit Patients</GradientText></h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-12 max-w-5xl mx-auto">
              {STACK.map((c, i) => (
                <Reveal key={c.h} delay={i * 0.03}>
                  <div className="bg-surface-secondary border border-brand-purple/10 rounded-[12px] p-4 text-center hover:border-brand-purple/25 hover:-translate-y-1 transition-all h-full">
                    <div className="w-9 h-9 mx-auto rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))" }}><c.icon size={16} className="text-white" /></div>
                    <h3 className="font-bold text-brand-deep text-[12px] mt-2">{c.h}</h3>
                    <p className="text-ink-muted text-[11px] mt-1 leading-[1.55]">{c.body}</p>
                  </div>
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
              <h2 className="font-extrabold text-brand-deep leading-[1.1] mt-4" style={{ fontSize: "clamp(26px, 4.5vw, 38px)", letterSpacing: "-0.03em" }}>High-Value Patient Acquisition — FAQ</h2>
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
            <ChipLabel dark>Shift From Volume to Production</ChipLabel>
            <h2 className="font-serif font-bold text-white mt-4 leading-[1.15]" style={{ fontSize: "clamp(30px, 4.5vw, 50px)" }}>Request Your High-Value Patient Opportunity Analysis.</h2>
            <p className="mt-5 text-white/65 text-[16px] max-w-xl mx-auto leading-[1.72]">See where high-value patients are slipping past your practice — and which campaigns, pages, and tracking changes will shift your patient mix.</p>
            <div className="mt-7"><Link to="/free-audit" className="inline-flex items-center gap-2 bg-white text-brand-deep font-bold text-[16px] px-10 py-4 rounded-full hover:bg-brand-lavender">{CTA1} <ArrowRight size={16} /></Link></div>
          </div>
        </section>
      </main>
      <Footer /><StickyCTA />
    </>
  );
}
