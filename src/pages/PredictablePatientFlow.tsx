import { Activity, TrendingUp, TrendingDown, RotateCcw, Eye, MousePointerClick, Star, BarChart2, CalendarCheck } from "lucide-react";
import {
  PainPageLayout, PainHero, DarkSection, OffWhiteSection, WhiteSection,
  SectionHeader, Reveal, FAQAccordion, FinalCTA, Counter,
} from "@/components/site/PainPageShell";

const FAQS = [
  { q: "How can a healthcare practice create more predictable patient flow?", a: "A healthcare practice can create more predictable patient flow by combining demand generation, local SEO, AI visibility, paid campaigns, website conversion, reputation growth, patient retention, reactivation, and clear reporting. The goal is to reduce dependence on one channel and build a measurable pipeline of appointments." },
  { q: "Why is my practice busy one month and slow the next?", a: "A practice often becomes busy one month and slow the next when growth depends on referrals, seasonality, disconnected ads, weak follow-up, or inconsistent visibility. Without a system that tracks demand, conversion, retention, and reactivation, patient volume naturally becomes unstable." },
  { q: "What is the difference between patient acquisition and predictable patient flow?", a: "Patient acquisition focuses on bringing in new patients. Predictable patient flow is broader: it includes new patient generation, conversion, retention, recall, reactivation, reputation, and measurement. Acquisition creates demand; patient flow management makes growth more consistent." },
  { q: "Can SEO help make patient flow more consistent?", a: "SEO can improve patient flow consistency by creating ongoing visibility for high-intent searches in Google and Maps. It works best when paired with conversion-focused website design, reputation management, AI visibility, and tracking that connects searches to calls and booked appointments." },
  { q: "How does patient retention reduce feast-or-famine growth?", a: "Patient retention reduces feast-or-famine growth by keeping existing patients engaged, encouraging preventive visits, supporting recall, and reactivating patients who have not returned. Retention can stabilize the schedule instead of forcing the practice to rely only on new patient campaigns." },
  { q: "Do paid ads create predictable patient flow?", a: "Paid ads can support predictable patient flow when campaigns are tracked, optimized, and paired with strong landing pages and follow-up systems. Ads alone are not enough; predictable growth requires attribution, conversion tracking, patient quality review, and continuous optimization." },
  { q: "How does online reputation affect predictable patient flow?", a: "Online reputation affects patient flow because patients often compare star ratings, review volume, and review quality before contacting a practice. Strong reputation signals can improve trust, conversion, local visibility, and AI-driven recommendation potential." },
  { q: "What should a patient flow audit include?", a: "A patient flow audit should include visibility analysis, local SEO review, AI search visibility review, website conversion review, reputation review, paid advertising assessment, follow-up workflow review, retention and reactivation opportunities, and reporting gaps." },
  { q: "How long does it take to build predictable patient flow?", a: "The timeline depends on the practice's current visibility, reputation, website performance, service mix, competition, and tracking maturity. Paid ads and conversion fixes may create faster feedback, while SEO, reputation, and retention systems usually compound over several months." },
];

const CAUSES = [
  { Icon: TrendingDown, h: "Referral dependence", b: "When referrals slow, the schedule does too — with no backup pipeline." },
  { Icon: Activity, h: "Seasonality without offset", b: "Slow seasons aren't offset by demand generation or retention work." },
  { Icon: MousePointerClick, h: "Disconnected ads", b: "Ads turned on for emergencies, off when busy — no compounding effect." },
  { Icon: RotateCcw, h: "No retention or reactivation", b: "Patients churn quietly; no recall workflow brings them back." },
  { Icon: Eye, h: "Inconsistent visibility", b: "Local and AI visibility fluctuate without sustained signal work." },
  { Icon: BarChart2, h: "No leading indicators", b: "You see slow months when they arrive — not weeks in advance." },
];

const SYSTEM = [
  { n: "01", Icon: Eye, h: "Visibility", b: "Google, Maps, AI engines — always-on demand surface." },
  { n: "02", Icon: MousePointerClick, h: "Conversion", b: "Website, calls, forms, booking — patients move forward easily." },
  { n: "03", Icon: Star, h: "Reputation", b: "Reviews and trust signals support every other channel." },
  { n: "04", Icon: RotateCcw, h: "Retention & Reactivation", b: "Recall, reminders, and re-engagement smooth volume." },
  { n: "05", Icon: BarChart2, h: "Reporting", b: "Leading indicators — see slow months coming, intervene early." },
];

export default function PredictablePatientFlow() {
  return (
    <PainPageLayout
      seoTitle="Predictable Patient Flow for Healthcare Practices | Vigorant"
      seoDesc="End feast-or-famine months. Vigorant builds integrated visibility, conversion, retention, and reporting systems for predictable patient flow in dental, medical, and chiropractic practices."
      canonical="https://vigorant.com/for-practices/predictable-patient-flow"
      faqs={FAQS}
    >
      <PainHero
        breadcrumbLabel="Predictable & Sustainable Patient Flow"
        chip="For Practices Stuck in Feast-or-Famine Patient Volume"
        titleLines={[{ text: "Predictable Patient Flow" }, { text: "for Healthcare Practices.", gradient: true }]}
        subhead="Some months are full. Some months are quiet. There's a better way to plan."
        paragraph="Vigorant helps dental, medical, and chiropractic practices build a more consistent flow of qualified patients through SEO, AI visibility, conversion systems, retention, reactivation, reputation, and smarter reporting."
        primaryCTA={{ label: "Get a Free Patient Flow Audit", href: "/free-audit" }}
        secondaryCTA={{ label: "See How Our Growth System Works", href: "/how-it-works" }}
        proofStrip="Visibility → Conversion → Retention → Reporting → Predictable Growth"
      />

      <DarkSection>
        <SectionHeader dark label="The Pattern" title={<><span className="text-white">Feast-or-famine isn't a marketing problem. </span><span className="gradient-text">It's a system problem.</span></>} sub="Most practices have growth tactics but not a growth system. When one channel goes quiet, nothing absorbs the swing. The fix isn't a louder ad — it's a connected pipeline." />
      </DarkSection>

      <OffWhiteSection>
        <SectionHeader label="Why Volume Swings" title={<>Six causes of <span className="gradient-text">unpredictable months.</span></>} />
        <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] mx-auto list-none p-0">
          {CAUSES.map((c, i) => (
            <li key={i}>
              <Reveal delay={i * 0.05} className="h-full">
                <article className="bg-white border border-brand-purple/12 rounded-2xl p-6 h-full hover:border-brand-purple/30 hover:shadow-lg transition-all">
                  <div className="w-11 h-11 rounded-xl bg-brand-purple/8 border border-brand-purple/15 flex items-center justify-center text-brand-purple mb-4">
                    <c.Icon aria-hidden size={20} />
                  </div>
                  <h3 className="font-bold text-brand-deep text-[17px] mb-2">{c.h}</h3>
                  <p className="text-text-secondary text-[15px] leading-[1.7]">{c.b}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </OffWhiteSection>

      <WhiteSection>
        <SectionHeader label="The Patient Flow System" title={<>Five layers that <span className="gradient-text">smooth the swings.</span></>} />
        <ol className="mt-12 max-w-[960px] mx-auto flex flex-col gap-4 list-none p-0">
          {SYSTEM.map((p, i) => (
            <li key={i}>
              <Reveal delay={i * 0.06} className="h-full">
                <div className="bg-white rounded-2xl border border-brand-purple/12 p-6 sm:p-7 flex flex-col sm:flex-row gap-5 hover:shadow-md transition">
                  <div className="font-mono-ui text-[28px] font-bold gradient-text shrink-0 sm:w-16">{p.n}</div>
                  <div className="w-11 h-11 rounded-xl bg-brand-purple/8 border border-brand-purple/15 flex items-center justify-center text-brand-purple shrink-0">
                    <p.Icon aria-hidden size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-brand-deep text-[19px]">{p.h}</h3>
                    <p className="mt-2 text-text-secondary text-[15px] leading-[1.7]">{p.b}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </WhiteSection>

      <WhiteSection>
        <SectionHeader label="Common Questions" title="Predictable Patient Flow — Frequently Asked Questions" />
        <FAQAccordion faqs={FAQS} />
      </WhiteSection>

      <FinalCTA
        headline="Stop guessing what next month looks like."
        sub="A Free Patient Flow Audit maps your current pipeline and shows where stability is leaking."
        ctaLabel="Get a Free Patient Flow Audit"
        ctaHref="/free-audit"
      />
    </PainPageLayout>
  );
}
