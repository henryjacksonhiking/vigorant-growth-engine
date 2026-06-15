import { Megaphone, Target, BarChart2, Phone, DollarSign, ShieldCheck, Layout, Search } from "lucide-react";
import {
  PainPageLayout, PainHero, DarkSection, OffWhiteSection, WhiteSection,
  SectionHeader, Reveal, FAQAccordion, FinalCTA, CardGrid,
} from "@/components/site/PainPageShell";

const FAQS = [
  { q: "Why have my Google or Meta Ads failed before?", a: "Most healthcare ad accounts fail because of weak landing pages, missing conversion tracking, untracked phone calls, broad keyword targeting, low-quality form leads, and no front-desk handoff. The ad platform is rarely the real problem." },
  { q: "What's the difference between leads and booked patients?", a: "A lead is a click, call, or form. A booked patient is revenue. Vigorant optimizes for booked appointments and started treatment — not for the cheapest click or the most form submissions." },
  { q: "Will you run ads for any practice?", a: "No. Vigorant only activates paid media once the conversion foundation — site speed, tracking, landing pages, call handling, and follow-up — is ready. Otherwise the spend leaks." },
  { q: "What ad platforms do you manage?", a: "Google Search, Performance Max, YouTube, Meta (Facebook and Instagram), and retargeting. The right channel mix depends on your services, location, competition, and patient-acquisition goals." },
  { q: "Do you guarantee a cost per patient?", a: "No reputable agency can guarantee patient costs. Vigorant guarantees transparent reporting on cost per qualified lead and cost per booked appointment so you can decide what the spend is worth." },
  { q: "How do you handle HIPAA and healthcare ad policy?", a: "All campaigns follow Google's healthcare ad policies, Meta's restricted-category rules, and HIPAA-aware tracking — including server-side tagging and PHI-safe conversion measurement." },
  { q: "Can you fix campaigns from a previous agency?", a: "Yes. Vigorant frequently takes over underperforming accounts, audits the structure, rebuilds tracking, and rewires the funnel before scaling spend." },
];

const WHY_FAIL = [
  { Icon: Layout, h: "Weak landing pages", b: "Generic homepages instead of conversion-built service pages tank quality score and booking rate." },
  { Icon: Phone, h: "No call tracking", b: "Most patient inquiries come by phone — and most ad accounts can't see them." },
  { Icon: Target, h: "Broad targeting", b: "Generic keywords burn spend on the wrong intent and the wrong geography." },
  { Icon: ShieldCheck, h: "Tracking gaps", b: "Healthcare policy + browser changes break standard tracking. Server-side is mandatory." },
  { Icon: Search, h: "No front-desk loop", b: "Leads arrive faster than the office can respond, and convert at a fraction of their potential." },
  { Icon: DollarSign, h: "Optimizing for clicks", b: "Most agencies optimize for what the platform shows them, not what produces revenue." },
];

const SYSTEM = [
  { n: "01", h: "Fix the Conversion Foundation", b: "We review your website speed, tracking, landing pages, call handling, and follow-up process to identify what may be stopping interested patients from booking." },
  { n: "02", h: "Build a Patient-Focused Strategy", b: "We focus campaigns around the services that matter most to your practice, such as implants, orthodontics, cosmetic dentistry, and new-patient exams. The goal is to attract qualified patients, not just more clicks." },
  { n: "03", h: "Launch and Optimize Campaigns", b: "We build and launch campaigns across Search, Performance Max, Meta, YouTube, and retargeting with healthcare-policy-safe messaging and landing pages. Then we optimize weekly to improve cost per booked appointment." },
  { n: "04", h: "Report on Real Practice Growth", b: "You see clear reporting on calls, forms, booked appointments, started treatments, and revenue by campaign, so you know which marketing efforts are helping your practice grow." },
];

export default function ServicesPaidAds() {
  return (
    <PainPageLayout
      seoTitle="Paid Ads for Healthcare Practices — Google & Meta | Vigorant"
      seoDesc="Google and Meta ads for dental, medical, and chiropractic practices. Built for booked appointments — not clicks. Free Paid Ads Audit."
      canonical="https://vigorant.com/services/paid-ads"
      faqs={FAQS}
    >
      <PainHero
        breadcrumbLabel="Paid Advertising"
        breadcrumbTrail={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }]}
        chip="Google · Meta · YouTube · Retargeting"
        titleLines={[{ text: "Paid Ads That Produce" }, { text: "Booked Patients — Not Clicks.", gradient: true }]}
        subhead="Most practices don't have an ad problem. They have a system problem."
        paragraph="Vigorant manages paid media only after the conversion foundation is ready — then runs Google, Meta, and YouTube campaigns engineered for cost per booked appointment, not cost per click."
        primaryCTA={{ label: "Request Your Free Paid Ads Audit", href: "/free-audit" }}
        secondaryCTA={{ label: "See Patient Acquisition Results", href: "/results" }}
        proofStrip="No obligation. We review campaigns, landing pages, tracking, and acquisition gaps."
      />

      <DarkSection>
        <SectionHeader dark label="Why Ads Fail in Healthcare" title={<><span className="text-white">Six leaks that quietly burn </span><span className="gradient-text">your ad budget.</span></>} />
        <CardGrid className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] mx-auto list-none p-0">
          {WHY_FAIL.map((l, i) => (
            <li key={i}>
              <Reveal delay={i * 0.05} className="h-full">
                <article className="ui-card-dark backdrop-blur">
                  <div className="w-11 h-11 rounded-xl bg-brand-purple/15 border border-brand-purple/25 flex items-center justify-center text-brand-bright mb-4">
                    <l.Icon aria-hidden size={20} />
                  </div>
                  <h3 className="ui-card-heading-dark text-[17px]">{l.h}</h3>
                  <p className="ui-card-text-dark text-[15px]">{l.b}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </CardGrid>
      </DarkSection>

      <OffWhiteSection>
        <SectionHeader label="The Vigorant Paid System" title={<>Six steps from spend to <span className="gradient-text">booked patients.</span></>} />
        <ol className="mt-12 max-w-[960px] mx-auto flex flex-col gap-4 list-none p-0">
          {SYSTEM.map((p, i) => (
            <li key={i}>
              <Reveal delay={i * 0.05} className="h-full">
                <div className="bg-white rounded-2xl border border-brand-purple/12 p-6 sm:p-7 flex flex-col sm:flex-row gap-5 hover:shadow-md transition">
                  <div className="font-mono-ui text-[28px] font-bold gradient-text shrink-0 sm:w-16">{p.n}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-brand-deep text-[19px]">{p.h}</h3>
                    <p className="mt-2 text-text-secondary text-[15px] leading-[1.7]">{p.b}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </OffWhiteSection>

      <WhiteSection>
        <SectionHeader label="Compliance First" title={<>Healthcare ad policy, <span className="gradient-text">handled.</span></>} sub="Vigorant runs all campaigns under Google's healthcare advertising policies, Meta's restricted-category rules, and HIPAA-aware tracking — server-side tagging, PHI-safe events, and consent-aware measurement." />
      </WhiteSection>

      <OffWhiteSection>
        <SectionHeader label="Common Questions" title="Frequently Asked Questions About Healthcare Paid Ads" />
        <FAQAccordion faqs={FAQS} />
      </OffWhiteSection>

      <FinalCTA
        headline="Stop paying for clicks. Start paying for patients."
        sub="A free Paid Ads Audit reviews your campaigns, landing pages, tracking, and acquisition gaps — with a clear plan to fix what's leaking."
        ctaLabel="Request Your Free Paid Ads Audit"
        ctaHref="/free-audit"
      />
    </PainPageLayout>
  );
}
