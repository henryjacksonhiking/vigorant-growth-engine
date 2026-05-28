import { Star, MessageSquare, ShieldCheck, AlertTriangle, ThumbsUp, Activity, Smile, Stethoscope, TrendingUp } from "lucide-react";
import {
  PainPageLayout, PainHero, DarkSection, OffWhiteSection, WhiteSection,
  SectionHeader, Reveal, FAQAccordion, FinalCTA, Counter,
} from "@/components/site/PainPageShell";

const FAQS = [
  { q: "How can a healthcare practice get more Google reviews?", a: "A healthcare practice can get more Google reviews by building a consistent, ethical review-request workflow after positive patient experiences, training staff on timing, simplifying the review path, and monitoring follow-through. The process should never pressure patients or condition incentives on positive reviews." },
  { q: "Do bad reviews hurt new patient growth?", a: "Yes. Bad reviews can reduce trust before a patient calls, especially when the practice has a low rating, few recent positive reviews, or no professional response. The impact is strongest in local search and high-trust services such as dental, chiropractic, and medical care." },
  { q: "Should my practice respond to negative patient reviews?", a: "Yes, but responses must be professional, concise, and privacy-aware. In healthcare, replies should avoid confirming patient status or discussing protected health details. The goal is to show empathy, accountability, and a path for offline resolution." },
  { q: "Can Vigorant remove negative Google reviews?", a: "Vigorant can help identify reviews that may violate platform policies and guide the reporting process, but legitimate unfavorable reviews usually cannot simply be removed. The stronger strategy is to respond correctly, improve review volume, and build a reputation system that reflects the quality of care." },
  { q: "How do online reviews affect healthcare SEO?", a: "Online reviews can influence local SEO because they contribute to trust, engagement, profile activity, and patient decision behavior. Review quality, quantity, recency, and response activity can all support stronger local visibility and conversion performance." },
  { q: "Do AI tools like ChatGPT or Claude consider online reviews?", a: "AI tools can use publicly available reputation signals when forming summaries or recommendations, depending on their data access and retrieval method. Strong reviews, clear profiles, consistent entity information, and authoritative mentions make it easier for AI systems to understand and recommend a practice." },
  { q: "What is a good review strategy for dental practices?", a: "A good dental review strategy focuses on requesting feedback consistently after positive experiences, highlighting high-value services such as implants or cosmetic dentistry, responding to negative feedback appropriately, and using reviews across the website, Google Business Profile, and conversion pages." },
  { q: "How long does it take to improve online reputation?", a: "Meaningful improvement can begin within weeks if review requests, response workflows, and profile optimization are implemented quickly. However, rebuilding trust after a low rating or visible negative review usually requires consistent effort over several months." },
];

const GAPS = [
  { Icon: MessageSquare, h: "No systematic review request", b: "Requests happen randomly, not after every positive visit." },
  { Icon: AlertTriangle, h: "Old negative review unaddressed", b: "One unresponded 1-star can shape first impressions for years." },
  { Icon: Activity, h: "Low review velocity", b: "Recency matters as much as volume — stale reviews lose impact." },
  { Icon: ShieldCheck, h: "No response strategy", b: "Negative and positive reviews need professional, privacy-aware replies." },
  { Icon: Star, h: "Reviews not used on-site", b: "Star schema, testimonials, and review widgets are missing from key pages." },
];

const METHOD = [
  { n: "01", h: "Ethical review-request workflow", b: "Triggered after positive visits — never incentivized for stars." },
  { n: "02", h: "Friction-free review path", b: "One-tap link, SMS-first, branded landing page." },
  { n: "03", h: "Professional response strategy", b: "HIPAA-aware replies that show empathy and accountability." },
  { n: "04", h: "Policy violation reporting", b: "Identify and report reviews that violate Google policies." },
  { n: "05", h: "Reputation surfacing", b: "Schema, widgets, and on-site proof across high-intent pages." },
  { n: "06", h: "Ongoing monitoring", b: "Weekly review of velocity, rating drift, sentiment, response time." },
];

export default function OnlineReputation() {
  return (
    <PainPageLayout
      seoTitle="Improve Online Reputation & Reviews for Your Practice | Vigorant"
      seoDesc="Build a systematic, ethical review and reputation strategy for dental, medical, and chiropractic practices. Free Reputation & Growth Audit."
      canonical="https://vigorant.com/for-practices/online-reputation"
      faqs={FAQS}
    >
      <PainHero
        breadcrumbLabel="Improve Online Reputation & Reviews"
        chip="For Practices Where Reviews Are Hurting First Impressions"
        titleLines={[{ text: "Improve Online Reputation" }, { text: "& Reviews for Your" }, { text: "Healthcare Practice.", gradient: true }]}
        subhead="If your practice delivers excellent care but your Google rating, review volume, or one old negative review is hurting first impressions, Vigorant can help."
        paragraph="A systematic reputation and review-growth strategy that supports patient trust, local SEO, and AI visibility — built ethically and within platform policies."
        primaryCTA={{ label: "Request a Free Reputation & Growth Audit", href: "/free-audit" }}
        secondaryCTA={{ label: "See How Reviews Affect Acquisition ↓", href: "#review-system" }}
        proofStrip="Ethical Review Growth · Professional Responses · Policy-Aware Reporting · FTC-Compliant"
      />

      <DarkSection>
        <SectionHeader dark label="Patients Decide Before They Call" title={<><span className="text-white">Reviews are the first conversation </span><span className="gradient-text">patients have about your practice.</span></>} sub="A 4.8 with 60 recent reviews beats a 4.9 with 8 old ones every time. Patients use review quality, quantity, recency, and response activity as proxies for clinical quality — before they ever pick up the phone." />
      </DarkSection>

      <OffWhiteSection>
        <SectionHeader label="The Real Problem" title={<>It's <span className="gradient-text">not one bad review</span> — it's the system around it.</>} />
        <ul className="mt-12 max-w-[860px] mx-auto flex flex-col gap-4 list-none p-0">
          {GAPS.map((g, i) => (
            <li key={i}>
              <Reveal delay={i * 0.05} className="h-full">
                <article className="bg-white rounded-2xl border border-brand-purple/12 p-6 flex gap-5 hover:shadow-md transition">
                  <div className="w-11 h-11 rounded-xl bg-brand-purple/8 border border-brand-purple/15 flex items-center justify-center text-brand-purple shrink-0">
                    <g.Icon aria-hidden size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-deep text-[17px]">{g.h}</h3>
                    <p className="mt-1.5 text-text-secondary text-[15px] leading-[1.7]">{g.b}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </OffWhiteSection>

      <DarkSection id="review-system">
        <SectionHeader dark label="How Vigorant Improves Reviews" title={<><span className="text-white">A six-part reputation system, </span><span className="gradient-text">built ethically.</span></>} />
        <ol className="mt-12 max-w-[960px] mx-auto flex flex-col gap-4 list-none p-0">
          {METHOD.map((p, i) => (
            <li key={i}>
              <Reveal delay={i * 0.06} className="h-full">
                <div className="bg-white/5 border border-white/12 backdrop-blur rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row gap-5">
                  <div className="font-mono-ui text-[28px] font-bold gradient-text shrink-0 sm:w-16">{p.n}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-[19px]">{p.h}</h3>
                    <p className="mt-2 text-white/65 text-[15px] leading-[1.7]">{p.b}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-center font-mono-ui text-[11px] text-white/50">
          Vigorant follows the <a href="https://www.ftc.gov/legal-library/browse/rules/16-cfr-part-465-rule-use-consumer-reviews-and-testimonials" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-white/70">FTC Consumer Reviews and Testimonials Rule</a> and Google's review policies. We never fabricate, incentivize, or filter reviews.
        </p>
      </DarkSection>

      <OffWhiteSection>
        <SectionHeader label="Common Questions" title="Frequently Asked Questions About Healthcare Reputation and Reviews" />
        <FAQAccordion faqs={FAQS} />
      </OffWhiteSection>

      <FinalCTA
        headline="Turn your reputation into a patient acquisition asset."
        sub="A Free Reputation & Growth Audit shows your current review position, competitor benchmark, and the highest-impact next steps."
        ctaLabel="Request a Free Reputation & Growth Audit"
        ctaHref="/free-audit"
      />
    </PainPageLayout>
  );
}
