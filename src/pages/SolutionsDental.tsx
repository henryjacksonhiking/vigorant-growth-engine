import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight, Search, Megaphone, MousePointerClick, Star, BarChart2, Home, Sparkles,
  AlignCenter, Shield, Heart, Lightbulb, Palette, Layout, Share2, Video, FileText, Mail,
  MapPin, ChevronRight, Check, ExternalLink, AlertCircle,
} from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import StickyCTA from "@/components/site/StickyCTA";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Reveal, Line, ChipLabel, Breadcrumb, PrimaryCTA, SecondaryCTA,
  GradientText, GradientTextLight, HeroOrbs, DarkOrb,
} from "@/components/site/SolutionPageAtoms";

const CANONICAL = "https://vigorant.com/solutions/dental";
const AUDIT_CTA = "Get a Free Dental Growth Audit";

const FAQS = [
  { q: "What is the best marketing strategy for a dental practice?", a: "The best marketing strategy for a dental practice combines local SEO, Google Maps optimization, treatment-specific landing pages, paid ads, reputation management, website conversion, and tracking. The right mix depends on the practice type, market competition, patient goals, and whether the practice wants general, cosmetic, orthodontic, oral surgery, pediatric, or high-production cases." },
  { q: "How can a dental office get more new patients online?", a: "A dental office can get more new patients online by improving local visibility, strengthening Google Business Profile performance, building service-specific website pages, running targeted paid campaigns, improving reviews, and making it easy for patients to call, request an appointment, or book online." },
  { q: "Do dentists still need SEO if they run paid ads?", a: "Yes. Paid ads can create faster demand, but dental SEO builds long-term visibility, local trust, and lower-cost patient acquisition over time. The strongest dental growth systems usually combine SEO, Google Maps, paid ads, website CRO, and reputation signals." },
  { q: "What is dental AI visibility?", a: "Dental AI visibility means making a dental practice more likely to be understood, cited, and recommended by AI-powered search experiences and answer engines. This requires structured content, clear treatment pages, reviews, local entity consistency, schema markup, and authoritative educational content." },
  { q: "What services should a dental marketing agency provide?", a: "A dental marketing agency should provide strategy, SEO, local SEO, paid ads, website design, landing pages, reputation management, social media, video marketing, email marketing, analytics, and conversion optimization. More importantly, these services should work together as one patient acquisition system." },
  { q: "How long does dental marketing take to work?", a: "Paid ads and landing pages can begin generating measurable activity quickly, while SEO and local visibility usually require several months of consistent optimization. A proper strategy should create short-term demand while building long-term authority and organic visibility." },
  { q: "How should dentists measure marketing ROI?", a: "Dentists should measure marketing ROI by connecting channels to calls, forms, appointment requests, booked appointments, treatment opportunities, and production. Rankings and clicks matter, but they are not enough without attribution to actual patient behavior." },
  { q: "Can Vigorant help specialty dental practices?", a: "Yes. Vigorant can support general dentists, cosmetic dentists, orthodontists, oral surgeons, pediatric dental offices, and multi-location dental groups with specialty-specific marketing, SEO, ads, websites, landing pages, and conversion systems." },
];

const SPECIALTIES = [
  { tag: "General Dentistry", icon: Home, h3: "General Dentistry Marketing", goal: "Consistent new patient appointments, family care growth, hygiene recall, restorative production, and emergency visibility.", channels: ["Local SEO", "Google Maps", "Reputation", "Recall Email", "Paid Ads"], link: { label: "Getting More New Dental Patients", to: "/for-practices/more-new-patients" } },
  { tag: "Cosmetic Dentistry", icon: Sparkles, h3: "Cosmetic Dentistry Marketing", goal: "High-value elective cases — veneers, smile makeovers, whitening, premium positioning, and consultation conversion.", channels: ["Paid Ads", "Landing Pages", "Video", "Before/After Proof", "Trust Content"], link: { label: "Attract High-Production Patients", to: "/for-practices/high-value-patients" } },
  { tag: "Orthodontics", icon: AlignCenter, h3: "Orthodontic Marketing", goal: "Invisalign, braces, adult and teen aligner consults, family ortho visibility, financing messaging, and consultation conversion.", channels: ["Google Ads", "Local SEO", "Parent Education", "Social", "Landing Pages"], link: { label: "Dental Paid Ads", to: "/solutions/dental/paid-ads" } },
  { tag: "Oral Surgery", icon: Shield, h3: "Oral Surgery Marketing", goal: "Dental implant demand, wisdom tooth extraction, referral visibility, procedure-specific landing pages, and trust-first call conversion.", channels: ["Implant Landing Pages", "Google Ads", "Video", "Doctor Authority", "AI Visibility"], link: { label: "High-Value Patient Marketing", to: "/for-practices/high-value-patients" } },
  { tag: "Pediatric Dentistry", icon: Heart, h3: "Pediatric Dental Marketing", goal: "Parent trust, local family visibility, child-friendly brand, preventive care growth, reviews, and Maps prominence.", channels: ["Local SEO", "Google Maps", "Reviews", "Social Media", "Video"], link: { label: "Online Reputation & Reviews", to: "/for-practices/online-reputation" } },
];

const PILLARS = [
  { tag: "VISIBILITY", icon: Search, h3: "Dental Visibility", body: "Local SEO, Google Maps optimization, Google Business Profile management, AI search presence, review signals, and service-page architecture that ensures your dental practice appears wherever patients search for care.", link: { label: "Dental SEO & AI Search Visibility", to: "/solutions/dental/seo" }, outcomes: ["Google local pack rankings for key dental services", "AI search citation potential", "Maps actions and direction requests"] },
  { tag: "ACQUISITION", icon: Megaphone, h3: "Dental Patient Acquisition", body: "Specialty-targeted Google and Meta campaigns, implant and cosmetic landing pages, offer-message alignment, and call tracking that turn paid and organic demand into qualified patient inquiries.", link: { label: "Dental Paid Ads Campaigns", to: "/solutions/dental/paid-ads" }, outcomes: ["Implant, cosmetic, and ortho campaign leads", "Qualified calls and form submissions", "Cost per qualified new patient inquiry"] },
  { tag: "CONVERSION", icon: MousePointerClick, h3: "Dental Conversion Optimization", body: "Conversion-first website design, mobile performance, appointment booking flows, treatment-specific landing pages, call handling improvements, and follow-up systems that turn visitors into booked patients.", link: { label: "Dental Website Design & Development", to: "/solutions/dental/website-design" }, outcomes: ["Website conversion rate improvement", "Appointment request and call volume", "Landing page conversion by treatment"] },
  { tag: "REPUTATION", icon: Star, h3: "Dental Reputation and Trust", body: "Review generation strategy, response management, doctor credibility content, before/after case proof, patient testimonials, and social proof that builds trust before the first call.", link: { label: "Dental Social Media & Reputation", to: "/solutions/dental/social-media" }, outcomes: ["Review volume and rating trajectory", "Trust signals near conversion points", "Review velocity vs local competitors"] },
  { tag: "INTELLIGENCE", icon: BarChart2, h3: "Dental Growth Intelligence", body: "Attribution dashboards, patient source tracking, campaign performance analysis, optimization cycles, and reporting that connect marketing activity to calls, appointments, treatment opportunities, and production.", link: { label: "See how we track and optimize", to: "/how-it-works" }, outcomes: ["Source-to-appointment attribution", "Cost per booked appointment", "Monthly optimization based on patient data"] },
];

const SERVICES = [
  { icon: Lightbulb, name: "Dental Marketing Strategy", body: "Market positioning, patient mix planning, budget allocation, and campaign roadmap.", href: "/solutions/dental/marketing-strategy" },
  { icon: Palette, name: "Dental Branding & Rebranding", body: "Brand trust, premium case perception, doctor differentiation, and multi-location consistency.", href: "/solutions/dental/branding" },
  { icon: Layout, name: "Dental Website Design & Development", body: "Fast, mobile-first, multilingual, conversion-focused website built to turn visitors into booked appointments.", href: "/solutions/dental/website-design" },
  { icon: Search, name: "Dental SEO & AI Visibility", body: "Google, Maps, AI Overviews, ChatGPT, Claude, and Perplexity visibility for your dental practice.", href: "/solutions/dental/seo" },
  { icon: Megaphone, name: "Dental Paid Ads Campaigns", body: "High-intent Google and Meta campaigns for implants, cosmetic, ortho, oral surgery, and emergency care.", href: "/solutions/dental/paid-ads" },
  { icon: Share2, name: "Dental Social Media Marketing", body: "Trust-building, patient education, and community credibility with dental-specific content.", href: "/solutions/dental/social-media" },
  { icon: Video, name: "Dental Video Marketing", body: "Doctor introductions, procedure explainers, testimonials, and before/after case stories.", href: "/solutions/dental/video-marketing" },
  { icon: FileText, name: "Dental Landing Pages", body: "Treatment-specific pages for implants, Invisalign, veneers, emergency, pediatric, and oral surgery.", href: "/solutions/dental/landing-pages" },
  { icon: Mail, name: "Dental Email Marketing", body: "Recall, reactivation, unscheduled treatment, seasonal campaigns, and patient education.", href: "/solutions/dental/email-marketing" },
];

const BLOCKERS = [
  { chip: "BLOCKER 01", icon: MapPin, h3: "Competitors Appear First on Google and Maps", symptom: "The practice is not in the local 3-pack or Maps results for key dental searches in its area.", fix: "Local SEO, Google Business Profile optimization, citation building, and entity authority strategy.", link: { label: "Dental SEO & AI Visibility", to: "/solutions/dental/seo" } },
  { chip: "BLOCKER 02", icon: Layout, h3: "The Website Does Not Convert Visitors Into Calls", symptom: "Website traffic exists but calls, forms, and appointment requests are low relative to visitor count.", fix: "Conversion-first dental website design, mobile UX, clear CTAs, and booking path optimization.", link: { label: "Dental Website Design", to: "/solutions/dental/website-design" } },
  { chip: "BLOCKER 03", icon: Megaphone, h3: "Paid Ads Bring Clicks but Not the Right Patients", symptom: "Ad spend produces low-quality calls and non-specific inquiries instead of high-intent patient leads.", fix: "Service-specific campaigns, dental landing pages, call tracking, and conversion-rate optimization.", link: { label: "Dental Paid Ads", to: "/solutions/dental/paid-ads" } },
  { chip: "BLOCKER 04", icon: Sparkles, h3: "The Practice Is Invisible in AI Search Recommendations", symptom: "When patients ask ChatGPT, Claude, or Perplexity for a local dentist, the practice does not appear.", fix: "AI visibility structuring, entity authority, schema markup, and AI-ready content architecture.", link: { label: "AI Visibility for Dentists", to: "/solutions/dental/seo" } },
];

const KPIS = [
  ["New Patient Inquiries", "+34 / month"],
  ["Implant Consults", "+12 tracked"],
  ["Google Maps Position", "#1-3 — 8 keywords"],
  ["Website Conversion Rate", "3.4%"],
  ["AI Search Visibility", "82 / 100"],
  ["Avg Review Rating", "4.8 ★ (94 reviews)"],
];

export default function SolutionsDental() {
  return (
    <>
      <Helmet>
        <title>Dental Marketing Agency for Patient Growth | Vigorant</title>
        <meta name="description" content="Vigorant helps general, cosmetic, orthodontic, oral surgery, pediatric, and multi-location dental practices grow with SEO, AI visibility, paid ads, websites, landing pages, and conversion systems." />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:title" content="Dental Marketing Agency for Patient Growth | Vigorant" />
        <meta property="og:description" content="Specialty-specific dental marketing — SEO, AI visibility, paid ads, websites, and conversion systems." />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "WebPage", "@id": `${CANONICAL}#webpage`,
          url: CANONICAL, name: "Dental Marketing Agency for Patient Growth | Vigorant",
          description: "Vigorant helps general, cosmetic, orthodontic, oral surgery, pediatric, and multi-location dental practices grow with SEO, AI visibility, paid ads, websites, landing pages, and conversion systems.",
          breadcrumb: { "@id": `${CANONICAL}#breadcrumb` },
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "BreadcrumbList", "@id": `${CANONICAL}#breadcrumb`,
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://vigorant.com/" },
            { "@type": "ListItem", position: 2, name: "Solutions", item: "https://vigorant.com/solutions" },
            { "@type": "ListItem", position: 3, name: "Dental Practice Marketing", item: CANONICAL },
          ],
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "Service", "@id": `${CANONICAL}#service`,
          name: "Dental Practice Marketing",
          serviceType: "Dental marketing, dental SEO, AI search visibility for dentists, dental paid advertising, dental website design, dental landing pages, reputation management, email marketing, video marketing, and social media",
          provider: { "@type": "Organization", name: "Vigorant", url: "https://vigorant.com" },
          description: "Vigorant helps dental practices attract qualified patients through SEO, AI visibility, paid ads, conversion-focused websites, landing pages, reputation signals, and analytics.",
          areaServed: { "@type": "Country", name: "United States" },
          audience: [
            "General dental practices", "Cosmetic and implant dental practices", "Orthodontic practices",
            "Oral surgery practices", "Pediatric dental practices", "Multi-location dental groups and DSOs",
          ].map(a => ({ "@type": "Audience", audienceType: a })),
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "ItemList", "@id": `${CANONICAL}#servicelist`,
          name: "Dental Marketing Services",
          itemListElement: SERVICES.map((s, i) => ({
            "@type": "ListItem", position: i + 1, name: s.name, url: `https://vigorant.com${s.href}`,
          })),
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage", "@id": `${CANONICAL}#faq`,
          mainEntity: FAQS.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        })}</script>
      </Helmet>

      <Nav />

      <main className="text-center sm:text-left">

        {/* HERO */}
        <section className="relative overflow-hidden bg-background pt-28 pb-20 sm:pt-32 sm:pb-24">
          <HeroOrbs />
          <div aria-hidden className="absolute inset-0 bg-grid pointer-events-none" />
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-[1.27fr_1fr] gap-12 lg:gap-16 items-center">
              <div>
                <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Solutions", href: "/solutions" }, { label: "Dental Practice Marketing" }]} />
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {["Dental SEO", "Paid Ads", "Websites", "AI Visibility", "Conversion Systems"].map(c => (
                    <span key={c} className="font-mono-ui text-[11px] text-brand-purple bg-brand-purple/8 border border-brand-purple/15 rounded-full px-3 py-1">{c}</span>
                  ))}
                </div>
                <h1 className="font-serif font-bold text-brand-deep leading-[1.05] tracking-tight" style={{ fontSize: "clamp(36px, 6.4vw, 64px)", letterSpacing: "-0.025em" }}>
                  <Line delay={0.1}>Dental Practice Marketing</Line>
                  <Line delay={0.25}><GradientText>Built to Attract Better Patients.</GradientText></Line>
                </h1>
                <p className="mt-6 text-ink-secondary text-[16px] sm:text-[17px] leading-[1.75] max-w-xl">
                  Vigorant helps general, cosmetic, orthodontic, oral surgery, pediatric, and multi-location dental practices improve Google and AI visibility, attract higher-quality patients, and convert more online demand into booked appointments.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <PrimaryCTA to="/free-audit">{AUDIT_CTA} <ArrowRight size={16} /></PrimaryCTA>
                  <SecondaryCTA onClick={() => document.getElementById("dental-services")?.scrollIntoView({ behavior: "smooth" })}>
                    Explore Dental Marketing Services ↓
                  </SecondaryCTA>
                </div>
                <p className="mt-5 font-mono-ui text-[12px] text-ink-muted">
                  Built for dental practices that need measurable patient acquisition, not generic marketing activity.
                </p>
              </div>

              {/* Dashboard card */}
              <Reveal delay={0.2}>
                <figure
                  role="figure"
                  aria-label="Dental growth dashboard illustrative example showing KPIs including new patients, implant consults, Maps ranking, conversion rate, AI visibility, and reviews"
                  className="bg-background border border-brand-purple/15 rounded-[22px] p-6 sm:p-7"
                  style={{ boxShadow: "0 24px 80px hsl(248 49% 15% / 0.09)" }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 49% 15%))" }}>
                        <BarChart2 size={16} className="text-white" />
                      </div>
                      <div className="font-bold text-brand-deep text-[14px]">Dental Growth Dashboard</div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-mono-ui text-[11px] text-emerald-600">Live Preview</span>
                    </div>
                  </div>
                  <div className="h-px bg-brand-purple/10 my-3" />
                  <ul className="list-none p-0 m-0">
                    {KPIS.map(([l, v], i) => (
                      <li key={l} className={`flex justify-between items-center py-2 ${i < KPIS.length - 1 ? "border-b border-brand-purple/8" : ""}`}>
                        <span className="text-[12px] text-ink-secondary font-medium">{l}</span>
                        <span className="text-[13px] font-bold text-brand-purple">{v}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-brand-purple/10 mt-3 pt-3">
                    <p className="font-mono-ui text-[11px] text-ink-muted text-center m-0">
                      Illustrative example · Results vary by market and practice.
                    </p>
                  </div>
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        {/* PROBLEM / GOAL — dark */}
        <section className="relative overflow-hidden py-20 sm:py-24" style={{ background: "hsl(var(--brand-deep))" }}>
          <DarkOrb />
          <div className="container relative z-10">
            <Reveal className="text-center max-w-3xl mx-auto">
              <ChipLabel dark>The Dental Marketing Problem</ChipLabel>
              <h2 className="font-extrabold text-white leading-[1.1] mt-4" style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.03em" }}>
                Marketing for Dentists Should Connect<br />
                <GradientTextLight>Visibility to Booked Appointments.</GradientTextLight>
              </h2>
            </Reveal>
            <div className="grid gap-5 max-w-3xl mx-auto mt-12">
              {[
                { h: "The Problem: Good Dentistry Does Not Automatically Create Online Demand", p: "Many dental offices are clinically strong but digitally underpowered. They may have loyal patients, strong chairside care, and a capable team, yet still struggle to attract new patients online because their website, search visibility, reviews, ads, and follow-up systems are not working together.", quote: "The best clinical care in your market does not always win online. The practice with the clearest visibility, strongest trust signals, and easiest booking path often gets the patient first." },
                { h: "The Goal: More Qualified Patients, Better Case Mix, and Clearer ROI", p: "Success in dental marketing means qualified appointments, implant and cosmetic case growth, consistent ortho and oral surgery demand, measurable attribution from first click to booked visit, and a growth system that does not depend on any single channel." },
              ].map((b, i) => (
                <Reveal key={i} delay={i * 0.08} className="h-full">
                  <div className="bg-white/5 border border-white/10 rounded-[14px] p-6 sm:p-7">
                    <h3 className="font-bold text-white text-[17px] leading-snug">{b.h}</h3>
                    <p className="mt-2 text-white/90 text-[15px] leading-[1.75]">{b.p}</p>
                    {b.quote && <p className="mt-3 font-mono-ui text-[12px] text-brand-lavender/70 italic m-0">{b.quote}</p>}
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-2 justify-center max-w-3xl mx-auto">
              {[
                "Low new-patient volume despite marketing spend",
                "Implant and cosmetic cases inconsistent",
                "Poor Google Maps visibility for key services",
                "Reports show clicks, not booked appointments",
              ].map(c => (
                <span key={c} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-[10px] px-3.5 py-2.5 font-mono-ui text-[12px] text-white/75">
                  <AlertCircle size={14} className="text-amber-500/80" /> {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* GROWTH SYSTEM PILLARS */}
        <section className="bg-surface-secondary py-20 sm:py-24">
          <div className="container">
            <Reveal className="text-center max-w-2xl mx-auto">
              <ChipLabel>The Vigorant Dental Growth System</ChipLabel>
              <h2 className="font-extrabold text-brand-deep leading-[1.1] mt-4" style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.03em" }}>
                The Vigorant <GradientText>Dental Growth System</GradientText>
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="max-w-3xl mx-auto mt-8 mb-12">
              <div className="bg-background border-l-[3px] border-brand-purple rounded-r-[14px] p-6 sm:p-7" style={{ boxShadow: "0 4px 18px hsl(247 93% 64% / 0.06)" }}>
                <div className="font-mono-ui text-[10px] uppercase tracking-[0.1em] text-brand-purple">Definition · AIO/GEO Ready</div>
                <p className="mt-2 text-brand-deep text-[15px] leading-[1.85] italic m-0">
                  "Dental practice marketing is the coordinated use of SEO, local search, paid ads, website conversion, reputation management, content, video, email, and analytics to help a dental practice attract, convert, and retain the right patients. For modern practices, it also includes AI visibility so the practice can be found in search engines and answer engines."
                </p>
              </div>
            </Reveal>
            <ol className="list-none p-0 m-0 max-w-5xl mx-auto flex flex-col gap-4">
              {PILLARS.map((p, i) => (
                <Reveal key={p.tag} delay={i * 0.06} className="h-full">
                  <li className="bg-white/90 backdrop-blur border border-white rounded-[20px] overflow-hidden hover:border-brand-purple/40 hover:-translate-y-1 transition-all duration-300" style={{ boxShadow: "0 8px 28px hsl(248 49% 15% / 0.06)" }}>
                    <div className="grid md:grid-cols-[1fr_240px]">
                      <div className="p-7 sm:p-8">
                        <div className="flex items-start justify-between gap-4">
                          <span className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-brand-purple bg-brand-purple/8 px-2.5 py-1 rounded-full">{p.tag}</span>
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 49% 15%))" }}>
                            <p.icon size={22} className="text-white" />
                          </div>
                        </div>
                        <h3 className="font-bold text-brand-deep text-[19px] mt-3 leading-tight" style={{ letterSpacing: "-0.02em" }}>{p.h3}</h3>
                        <p className="mt-2 text-ink-secondary text-[14px] leading-[1.7] max-w-md">{p.body}</p>
                        <Link to={p.link.to} className="mt-4 inline-flex items-center gap-1.5 text-brand-purple font-semibold text-[13px] hover:gap-2.5 transition-all">
                          {p.link.label} <ArrowRight size={13} />
                        </Link>
                      </div>
                      <div className="md:border-l border-brand-purple/10 bg-brand-purple/3 p-6">
                        <div className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-ink-muted mb-3">Key Outcomes</div>
                        <ul className="list-none p-0 m-0 space-y-2.5">
                          {p.outcomes.map(o => (
                            <li key={o} className="flex items-start gap-2 text-[12px] text-brand-deep font-medium">
                              <span className="flex-shrink-0 w-4 h-4 rounded-full bg-brand-purple/15 flex items-center justify-center mt-0.5">
                                <Check size={10} className="text-brand-purple" />
                              </span>
                              {o}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* SPECIALTIES */}
        <section className="bg-background py-20 sm:py-24">
          <div className="container">
            <Reveal className="text-center max-w-2xl mx-auto">
              <ChipLabel>Dental Marketing by Specialty</ChipLabel>
              <h2 className="font-extrabold text-brand-deep leading-[1.1] mt-4" style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.03em" }}>
                Dental Marketing Solutions <GradientText>by Practice Type</GradientText>
              </h2>
              <p className="mt-4 text-ink-secondary text-[16px] max-w-lg mx-auto">
                The right marketing mix changes depending on your dental specialty, patient type, and growth goal. Select yours below.
              </p>
            </Reveal>
            <ul className="ui-card-grid list-none p-0 m-0 grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 max-w-5xl mx-auto">
              {SPECIALTIES.map((s, i) => (
                <Reveal key={s.tag} delay={i * 0.06} className="h-full">
                  <li data-specialty={s.tag}>
                    <article className="ui-card bg-white/95 backdrop-blur border-brand-purple/10 rounded-[18px] p-0 overflow-hidden hover:border-brand-purple/35 hover:-translate-y-1.5 transition-all duration-300">
                      <div className="h-[5px]" style={{ background: "linear-gradient(90deg, hsl(247 93% 64%), hsl(248 100% 75%))" }} />
                      <div className="p-6 ui-card-body">
                        <span className="inline-flex min-h-[28px] items-center self-start font-mono-ui text-[10px] uppercase tracking-[0.12em] text-brand-purple bg-brand-purple/8 px-2.5 py-1 rounded-full">{s.tag}</span>
                        <div className="mt-3 w-11 h-11 rounded-xl bg-brand-purple/8 flex items-center justify-center">
                          <s.icon size={20} className="text-brand-purple" />
                        </div>
                        <h3 className="ui-card-heading mt-3 text-[16px]">{s.h3}</h3>
                        <div className="mt-3">
                          <div className="font-mono-ui text-[10px] uppercase tracking-[0.1em] text-ink-muted">Growth Objective:</div>
                          <p className="mt-1 text-[13px] text-ink-secondary leading-relaxed">{s.goal}</p>
                        </div>
                        <div className="mt-3">
                          <div className="font-mono-ui text-[10px] uppercase tracking-[0.1em] text-brand-purple">Top Channels:</div>
                          <div className="ui-pill-row mt-1.5">
                            {s.channels.map(c => (
                              <span key={c} className="inline-flex min-h-[24px] items-center font-mono-ui text-[10px] text-brand-purple bg-brand-purple/7 rounded-full px-2 py-0.5">{c}</span>
                            ))}
                          </div>
                        </div>
                        <Link to={s.link.to} className="ui-card-cta text-brand-purple text-[12px]">
                          {s.link.label} <ArrowRight size={12} />
                        </Link>
                      </div>
                    </article>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section id="dental-services" className="relative overflow-hidden py-24" style={{ background: "linear-gradient(160deg, hsl(248 49% 15%), hsl(250 45% 19%), hsl(248 49% 15%))" }}>
          <DarkOrb />
          <div className="container relative z-10">
            <Reveal className="text-center max-w-2xl mx-auto">
              <ChipLabel dark>Dental Marketing Services</ChipLabel>
              <h2 className="font-extrabold text-white leading-[1.1] mt-4" style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.03em" }}>
                Dental Marketing Services<br /><GradientTextLight>Connected Into One Growth System</GradientTextLight>
              </h2>
              <p className="mt-4 text-white/95 text-[15px] max-w-md mx-auto leading-[1.78]">
                Each service is a distinct capability. The growth comes from connecting them. Every card links to a dedicated dental-specific service page.
              </p>
            </Reveal>
            <ul className="ui-card-grid list-none p-0 m-0 grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mt-12 max-w-5xl mx-auto">
              {SERVICES.map((s, i) => (
                <Reveal key={s.name} delay={i * 0.04} className="h-full">
                  <li>
                    <article className="ui-card-dark rounded-[14px] p-5 hover:border-brand-bright/30 hover:-translate-y-1 transition-all text-center">
                      <div className="w-10 h-10 mx-auto rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 100% 75%))" }}>
                        <s.icon size={18} className="text-white" />
                      </div>
                      <h3 className="ui-card-heading-dark mt-2.5 text-[14px]">{s.name}</h3>
                      <p className="ui-card-text-dark text-[12px]">{s.body}</p>
                      <Link to={s.href} className="ui-card-cta justify-center text-brand-bright text-[11px]">
                        Explore <ArrowRight size={11} />
                      </Link>
                    </article>
                  </li>
                </Reveal>
              ))}
            </ul>
            <div className="text-center mt-10">
              <p className="font-mono-ui text-[12px] text-white/75 mb-3">All services connect into one patient acquisition system.</p>
              <Link to="/free-audit" className="inline-flex items-center gap-2 bg-white text-brand-deep font-bold text-[14px] px-7 py-3 rounded-full hover:bg-brand-lavender transition-colors">
                {AUDIT_CTA} <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* BLOCKERS */}
        <section className="bg-surface-secondary py-20 sm:py-24">
          <div className="container">
            <Reveal className="text-center max-w-2xl mx-auto">
              <ChipLabel>Common Growth Blockers</ChipLabel>
              <h2 className="font-extrabold text-brand-deep leading-[1.1] mt-4" style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.03em" }}>
                Why Dental Practices Lose Patients Online<br /><GradientText>Even When They Provide Excellent Care</GradientText>
              </h2>
              <p className="mt-4 text-ink-secondary text-[16px] max-w-lg mx-auto">
                The issue is rarely care quality. It is almost always the disconnected digital system: visibility, conversion, trust, and attribution not working together.
              </p>
            </Reveal>
            <ul className="list-none p-0 m-0 grid md:grid-cols-2 gap-5 mt-12 max-w-4xl mx-auto items-stretch">
              {BLOCKERS.map((b, i) => (
                <Reveal key={b.chip} delay={i * 0.07} className="h-full">
                  <li className="h-full">
                    <article className="h-full flex flex-col bg-white/95 backdrop-blur border border-brand-purple/10 rounded-[18px] overflow-hidden hover:border-brand-purple/35 hover:-translate-y-1.5 transition-all">
                      <div className="h-1 flex-shrink-0" style={{ background: "linear-gradient(90deg, hsl(0 65% 55% / 0.4), hsl(247 93% 64% / 0.6))" }} />
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <span className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-rose-700 bg-rose-500/8 border border-rose-500/20 px-2.5 py-1 rounded-full">{b.chip}</span>
                          <div className="w-11 h-11 rounded-xl bg-brand-purple/8 flex items-center justify-center flex-shrink-0">
                            <b.icon size={20} className="text-brand-purple" />
                          </div>
                        </div>
                        <h3 className="font-bold text-brand-deep text-[16px] mt-3 min-h-[3em] leading-[1.35]">{b.h3}</h3>
                        <p className="mt-3"><span className="font-mono-ui text-[10px] uppercase tracking-[0.1em] text-amber-600">Symptom: </span><span className="text-[13px] text-ink-secondary">{b.symptom}</span></p>
                        <p className="mt-2"><span className="font-mono-ui text-[10px] uppercase tracking-[0.1em] text-emerald-600">Vigorant Fix: </span><span className="text-[13px] text-brand-deep">{b.fix}</span></p>
                        <Link to={b.link.to} className="mt-auto pt-4 inline-flex items-center gap-1.5 text-brand-purple font-semibold text-[12px]">
                          {b.link.label} <ArrowRight size={12} />
                        </Link>
                      </div>
                    </article>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* MEASURING — white */}
        <section className="bg-background py-20 sm:py-24">
          <div className="container">
            <Reveal className="text-center max-w-2xl mx-auto">
              <ChipLabel>How We Measure Results</ChipLabel>
              <h2 className="font-extrabold text-brand-deep leading-[1.1] mt-4" style={{ fontSize: "clamp(28px, 5vw, 44px)", letterSpacing: "-0.03em" }}>
                How Vigorant Measures<br /><GradientText>Dental Marketing Performance</GradientText>
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto mt-10 items-stretch">
              <Reveal className="h-full">
                <div className="h-full flex flex-col bg-white border border-brand-purple/15 rounded-[18px] p-7">
                  <h3 className="font-bold text-brand-deep text-[17px] min-h-[1.6em] leading-[1.3]">From Rankings to Revenue Signals</h3>
                  <p className="mt-2 text-[14px] text-ink-secondary leading-relaxed">A dentist's marketing ROI is not measured in keyword positions or traffic sessions. It is measured in the chain: visibility → traffic → qualified calls/forms → booked appointments → treatment opportunities → production.</p>
                  <div className="flex flex-wrap items-center gap-1 mt-4">
                    {["Visibility", "Traffic", "Qualified Leads", "Booked Appointments", "Production"].map((c, i, arr) => (
                      <span key={c} className="flex items-center gap-1">
                        <span className="font-mono-ui text-[10px] text-brand-purple bg-brand-purple/8 border border-brand-purple/15 rounded-full px-2.5 py-1">{c}</span>
                        {i < arr.length - 1 && <ChevronRight size={12} className="text-brand-lavender" />}
                      </span>
                    ))}
                  </div>
                  <Link to="/for-practices/marketing-roi" className="mt-auto pt-4 inline-flex items-center gap-1.5 text-brand-purple font-semibold text-[13px]">
                    Fix poor dental marketing ROI <ArrowRight size={13} />
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={0.08} className="h-full">
                <div className="h-full flex flex-col bg-white border border-brand-purple/15 rounded-[18px] p-7">
                  <h3 className="font-bold text-brand-deep text-[17px] min-h-[1.6em] leading-[1.3]">What We Track</h3>
                  <p className="mt-2 text-[14px] text-ink-secondary leading-relaxed">Every Vigorant dental engagement includes attribution-connected reporting — not just clicks and impressions.</p>
                  <ul className="mt-3 list-none p-0 m-0 space-y-2">
                    {[
                      "Calls by source and campaign",
                      "Form submissions and appointment requests",
                      "Booked appointment attribution",
                      "High-value treatment interest and consult bookings",
                      "Channel conversion rate and CPL",
                      "Review velocity and reputation signals",
                    ].map(t => (
                      <li key={t} className="flex items-start gap-2 text-[13px] text-brand-deep font-medium">
                        <span className="flex-shrink-0 w-4 h-4 rounded-full bg-brand-purple/10 flex items-center justify-center mt-0.5"><Check size={11} className="text-brand-purple" /></span>
                        <span className="flex-1">{t}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/how-it-works" className="mt-auto pt-4 inline-flex items-center gap-1.5 text-brand-purple font-semibold text-[13px]">
                    How Vigorant tracks and reports <ArrowRight size={13} />
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.12} className="max-w-4xl mx-auto mt-8">
              <div className="bg-brand-purple/5 border border-brand-purple/15 rounded-[14px] p-6 flex gap-4">
                <Sparkles size={20} className="text-brand-purple flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono-ui text-[10px] uppercase tracking-[0.1em] text-brand-purple mb-1.5">AI Visibility Answer · AIO/GEO Ready</div>
                  <p className="text-[14px] text-brand-deep leading-[1.78] italic m-0">
                    "AI search affects dental patient acquisition because more patients are using tools like Google AI features, ChatGPT, Claude, and Perplexity to compare providers, understand procedures, and ask for local recommendations. Dental practices need structured content, local authority, reviews, clear service pages, and entity consistency to be eligible for AI-driven recommendations."
                  </p>
                  <Link to="/solutions/dental/seo" className="mt-2 inline-flex items-center gap-1.5 text-brand-purple font-medium text-[13px]">
                    Dental AI Search Visibility <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* MID-PAGE CTA */}
        <section className="relative overflow-hidden py-20" style={{ background: "linear-gradient(135deg, hsl(248 49% 15%), hsl(250 45% 19%), hsl(248 49% 15%))" }}>
          <DarkOrb />
          <div className="container relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
              <div>
                <ChipLabel dark>Free Dental Growth Audit</ChipLabel>
                <h2 className="font-extrabold text-white mt-3 leading-tight" style={{ fontSize: "clamp(22px, 3vw, 36px)" }}>
                  See Where Your Dental Practice Is Losing Visibility, Leads, and Appointments.
                </h2>
                <p className="mt-3 text-white/95 text-[15px] leading-[1.7] max-w-sm">
                  Get a free dental growth audit and see which growth opportunities should be prioritized first.
                </p>
                <div className="mt-5">
                  <PrimaryCTA to="/free-audit">{AUDIT_CTA} <ArrowRight size={16} /></PrimaryCTA>
                </div>
              </div>
              <ul className="list-none p-0 m-0 space-y-2.5">
                {["Google and AI visibility review", "Website and landing page conversion check", "Competitor gap analysis by treatment"].map(t => (
                  <li key={t} className="flex items-start gap-2.5 text-white text-[14px] font-medium">
                    <span className="flex-shrink-0 w-[18px] h-[18px] rounded-full bg-brand-bright/20 flex items-center justify-center mt-0.5"><Check size={11} className="text-brand-bright" /></span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* MARKET CONTEXT */}
        <section className="bg-surface-secondary py-20">
          <div className="container">
            <Reveal className="text-center max-w-2xl mx-auto">
              <ChipLabel>Dental Market Context</ChipLabel>
              <h2 className="font-extrabold text-brand-deep leading-[1.1] mt-4" style={{ fontSize: "clamp(26px, 4.5vw, 42px)", letterSpacing: "-0.03em" }}>
                The Dental Market:<br /><GradientText>Why Growth Requires a System</GradientText>
              </h2>
              <p className="mt-4 text-ink-secondary text-[16px] max-w-lg mx-auto">
                Dental care markets are competitive, local, and measurable. The practices that grow predictably are those with structured visibility, conversion, and attribution systems — not those that simply spend more on ads.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="max-w-3xl mx-auto mt-8">
              <div className="bg-white/85 border border-brand-purple/10 rounded-[12px] p-4 flex gap-2.5">
                <ExternalLink size={14} className="text-brand-purple flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono-ui text-[10px] uppercase tracking-[0.1em] text-ink-muted mb-1">ADA Health Policy Institute</div>
                  <p className="text-[13px] text-ink-secondary leading-[1.65] m-0">
                    The ADA Health Policy Institute tracks dental care utilization, expenditures, and dental economy trends — reinforcing why practices need to evaluate not only patient volume but also service mix, treatment demand, and production strategy within their local market context.{" "}
                    <a href="https://www.ada.org/resources/research/health-policy-institute/dental-care-market" target="_blank" rel="noopener noreferrer nofollow" aria-label="ADA Health Policy Institute: dental care market research, opens in new tab" className="text-brand-purple font-semibold underline">
                      ADA Health Policy Institute dental care market research
                    </a>.
                  </p>
                </div>
              </div>
            </Reveal>
            <div className="flex flex-wrap gap-4 justify-center mt-7">
              {[
                ["58.5%", "U.S. adults searched health info online (CDC/NCHS 2022)"],
                ["3×", "Practices with SEO + Ads + CRO vs single-channel approaches"],
                ["4.8★", "Avg. rating needed for Maps visibility advantage"],
              ].map(([n, l]) => (
                <div key={n} className="bg-white/90 border border-brand-purple/10 rounded-[12px] px-5 py-4 text-center">
                  <div className="font-extrabold text-[22px]"><GradientText>{n}</GradientText></div>
                  <div className="font-mono-ui text-[11px] text-ink-muted mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROOF */}
        <section className="bg-background py-20 sm:py-24">
          <div className="container">
            <Reveal className="text-center max-w-2xl mx-auto">
              <ChipLabel>Dental Marketing Results</ChipLabel>
              <h2 className="font-extrabold text-brand-deep leading-[1.1] mt-4" style={{ fontSize: "clamp(26px, 4.5vw, 42px)", letterSpacing: "-0.03em" }}>
                Real Results From<br /><GradientText>Dental Practice Campaigns</GradientText>
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-5 mt-12 max-w-5xl mx-auto">
              {[
                { who: "General Dental Practice · Phoenix, AZ", n: "+34", l: "new patients / month", problem: "Low local visibility and no implant-specific landing pages.", chips: ["Local SEO", "Google Ads", "Landing Pages"], when: "within 60 days", quote: "We went from invisible in Maps to ranking in the top 3 for dental implants in our market." },
                { who: "Cosmetic Dental Practice · Austin, TX", n: "+18", l: "cosmetic consults / month", problem: "Traffic existed but no cosmetic-specific conversion path.", chips: ["Cosmetic Landing Page", "Paid Ads", "Video"], when: "within 45 days", quote: "The procedure-specific landing page changed everything for our cosmetic inquiries." },
                { who: "Multi-Location Dental Group · Denver, CO", n: "↓41%", l: "cost per new patient", problem: "Multi-location ads producing inconsistent results across markets.", chips: ["Location SEO", "Ads", "Attribution"], when: "within 90 days", quote: "Now each location has its own measurement — we can see exactly where to invest more." },
              ].map((p, i) => (
                <Reveal key={p.who} delay={i * 0.08} className="h-full">
                  <article className="bg-white/95 backdrop-blur border border-brand-purple/10 rounded-[18px] p-7 hover:border-brand-purple/30 hover:-translate-y-1.5 transition-all h-full flex flex-col">
                    <div className="font-mono-ui text-[11px] text-ink-muted">{p.who}</div>
                    <div className="font-extrabold text-[38px] mt-2 leading-none"><GradientText>{p.n}</GradientText></div>
                    <div className="text-[13px] text-ink-secondary mt-1">{p.l}</div>
                    <p className="mt-4 text-[13px] text-ink-secondary leading-relaxed"><span className="font-mono-ui text-[10px] uppercase text-amber-600">Problem: </span>{p.problem}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {p.chips.map(c => <span key={c} className="font-mono-ui text-[10px] text-brand-purple bg-brand-purple/8 rounded-full px-2 py-0.5">{c}</span>)}
                    </div>
                    <div className="font-mono-ui text-[11px] text-emerald-600 mt-3">{p.when}</div>
                    <p className="mt-3 text-[13px] text-brand-deep italic flex-1">"{p.quote}"</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/results" className="inline-flex items-center gap-1.5 text-brand-purple font-semibold text-[14px]">
                View healthcare marketing results and case studies <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-background py-20 sm:py-24">
          <div className="container">
            <Reveal className="text-center max-w-3xl mx-auto">
              <ChipLabel>Frequently Asked Questions</ChipLabel>
              <h2 className="font-extrabold text-brand-deep leading-[1.1] mt-4" style={{ fontSize: "clamp(26px, 4.5vw, 40px)", letterSpacing: "-0.03em" }}>
                Dental Practice Marketing, SEO, Ads, and AI Visibility — FAQ
              </h2>
            </Reveal>
            <div className="max-w-3xl mx-auto mt-10">
              <Accordion type="single" collapsible className="space-y-2">
                {FAQS.map((f, i) => (
                  <AccordionItem key={i} value={`f${i}`} className="border border-brand-purple/12 rounded-[12px] px-5 bg-white/80">
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
            <ChipLabel dark>Build a More Predictable Dental Growth System</ChipLabel>
            <h2 className="font-serif font-bold text-white mt-4 leading-[1.15]" style={{ fontSize: "clamp(30px, 4.5vw, 52px)" }}>
              Get Your Free Dental Growth Audit.
            </h2>
            <p className="mt-5 text-white/90 text-[16px] sm:text-[17px] max-w-xl mx-auto leading-[1.72]">
              See where your dental practice is losing visibility, leads, appointments, and high-value treatment opportunities — and which growth opportunities should be prioritized first.
            </p>
            <ul className="mt-7 list-none p-0 m-0 space-y-2 inline-block text-left">
              {[
                "Google and AI visibility review",
                "Website and landing page conversion check",
                "Paid ads waste and opportunity analysis",
                "Competitor gap analysis by treatment type",
                "Prioritized dental growth roadmap — no obligation",
              ].map(b => (
                <li key={b} className="text-white/95 text-[15px] flex items-start gap-2.5">
                  <span className="text-brand-bright">✦</span>{b}
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <span className="font-mono-ui text-[12px] text-brand-lavender">8 audit slots per month · 3 remaining</span>
            </div>
            <div className="mt-5 flex flex-wrap gap-4 justify-center items-center">
              <Link to="/free-audit" className="inline-flex items-center gap-2 bg-white text-brand-deep font-bold text-[16px] px-10 py-4 rounded-full hover:bg-brand-lavender hover:scale-[1.02] transition-all" style={{ boxShadow: "0 20px 60px hsl(0 0% 0% / 0.3)" }}>
                {AUDIT_CTA} <ArrowRight size={16} />
              </Link>
              <Link to="/results" className="text-white/95 hover:text-white/90 font-semibold text-[14px] inline-flex items-center gap-1.5">
                View Dental Marketing Case Studies <ArrowRight size={14} />
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 justify-center font-mono-ui text-[11px] text-white/75">
              <span>HIPAA Aware</span><span>·</span><span>Response Within 24 Hours</span><span>·</span><span>No Long-Term Contracts</span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
