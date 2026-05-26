import { Link } from "react-router-dom";
import { TrendingDown, BarChart2, DollarSign, Activity, AlertTriangle, Target, Phone, CalendarCheck, MousePointerClick, Eye } from "lucide-react";
import {
  PainPageLayout, PainHero, DarkSection, OffWhiteSection, WhiteSection,
  SectionHeader, Reveal, FAQAccordion, FinalCTA, Counter,
} from "@/components/site/PainPageShell";

const FAQS = [
  { q: "How do I know if my healthcare marketing is actually working?", a: "Your marketing is working when you can connect campaigns to meaningful patient actions, such as qualified calls, appointment requests, booked visits, and revenue. Rankings, clicks, and impressions matter, but they are incomplete unless they are tied to patient acquisition outcomes." },
  { q: "Why do my SEO reports look good but I am not getting more patients?", a: "SEO reports can show rankings and traffic growth without showing whether those visitors are local, qualified, ready to book, or reaching the right service pages. A practice can gain visibility but still lose patients through weak conversion paths, poor call handling, or disconnected tracking." },
  { q: "What marketing metrics should a dental or medical practice track?", a: "A practice should track cost per qualified lead, cost per booked appointment, call-to-booking rate, website conversion rate, channel source, patient acquisition cost, and revenue influenced by marketing. These metrics are more useful than impressions or clicks alone." },
  { q: "Can Google Ads look successful while still wasting money?", a: "Yes. Google Ads can report conversions that include low-quality calls, accidental clicks, unqualified form submissions, or non-patient inquiries. Healthcare ad performance should be judged by qualified patient actions and booked appointments, not platform conversions alone." },
  { q: "What is patient acquisition cost?", a: "Patient acquisition cost is the total marketing and sales cost required to generate one new patient. For healthcare practices, it should ideally account for ad spend, agency fees, tracking costs, lead quality, appointment booking, and patient value." },
  { q: "How does Vigorant improve marketing ROI?", a: "Vigorant improves marketing ROI by auditing the full patient acquisition path, connecting marketing channels to patient actions, improving SEO and ad targeting, optimizing landing pages and websites, and reporting on business outcomes rather than disconnected activity metrics." },
  { q: "Should I stop marketing if ROI is unclear?", a: "Not usually. Unclear ROI often means the tracking and attribution system is incomplete, not that marketing cannot work. The better first step is to audit channels, conversion paths, and reporting so budget can be shifted toward what actually produces patients." },
  { q: "How long does it take to improve marketing ROI?", a: "Some tracking and conversion improvements can show early signals within weeks, especially in paid ads and landing pages. SEO and AI visibility usually take longer, but proper measurement should begin immediately so progress can be evaluated accurately." },
  { q: "What is the difference between marketing reports and ROI reporting?", a: "Marketing reports often summarize activity, rankings, clicks, impressions, and traffic. ROI reporting connects those metrics to qualified leads, booked appointments, patient acquisition cost, and revenue impact, which is what practice owners need for budget decisions." },
];

const BLIND_SPOTS = [
  { Icon: Phone, h: "Calls not tracked to source", b: "You can't tell if calls came from ads, SEO, or referrals." },
  { Icon: MousePointerClick, h: "Clicks ≠ patients", b: "Clicks and impressions report activity, not booked appointments." },
  { Icon: Eye, h: "Vanity metrics", b: "Rankings and traffic without conversion proof don't pay providers." },
  { Icon: DollarSign, h: "No cost per booked patient", b: "Without CPA-by-channel, you can't shift budget intelligently." },
  { Icon: CalendarCheck, h: "Bookings not back-attributed", b: "Calendar bookings and revenue never reach the marketing report." },
  { Icon: AlertTriangle, h: "Platform-reported conversions", b: "Google/Meta count form fills that aren't real patient inquiries." },
  { Icon: Target, h: "No lead quality scoring", b: "All leads counted equally — new patients vs. price shoppers vs. spam." },
  { Icon: BarChart2, h: "Activity reports, not outcomes", b: "Monthly decks show effort, not patient acquisition or production." },
];

const COMPARISON = [
  ["Vanity Metric", "What It Reports", "What It Misses"],
  ["Impressions", "Times your ad was shown", "Whether anyone qualified saw it"],
  ["Clicks", "Visits to your site", "Whether they were local or ready"],
  ["Rankings", "Position in search", "Whether that traffic converts"],
  ["Form fills", "Submission count", "Whether they became patients"],
  ["Cost per click", "Ad efficiency", "Cost per booked patient"],
];

const FIX_STEPS = [
  { n: "01", h: "Audit the full path", b: "From keyword to booked appointment — find every disconnection." },
  { n: "02", h: "Install attribution", b: "Call tracking, form tracking, source tagging, CRM/PMS bridges." },
  { n: "03", h: "Define qualified actions", b: "What counts as a real patient lead vs. noise." },
  { n: "04", h: "Optimize highest-CPA channels", b: "Reallocate budget to channels actually producing bookings." },
  { n: "05", h: "Report on outcomes monthly", b: "CPA, booked appointments, channel mix, revenue impact — not impressions." },
];

export default function MarketingRoi() {
  return (
    <PainPageLayout
      seoTitle="Fix Poor Marketing ROI for Your Healthcare Practice | Vigorant"
      seoDesc="Connect SEO, ads, and website activity to real patients and revenue. Vigorant's Free Marketing ROI Audit shows where dental, medical, and chiropractic budgets leak."
      canonical="https://vigorant.com/for-practices/marketing-roi"
      faqs={FAQS}
    >
      <PainHero
        breadcrumbLabel="Fix Poor Marketing ROI"
        chip="For Practices Paying for Marketing Without Clear Patient Attribution"
        titleLines={[{ text: "Fix Poor Marketing ROI" }, { text: "for Your Healthcare Practice.", gradient: true }]}
        subhead="Spending on marketing but still not sure what is bringing patients?"
        paragraph="If your reports show rankings, clicks, and impressions but you cannot connect them to real calls, bookings, and production, your marketing system is missing the most important layer: revenue attribution."
        primaryCTA={{ label: "Request a Free Marketing ROI Audit", href: "/free-audit" }}
        secondaryCTA={{ label: "See How Our System Works", href: "/how-it-works" }}
        proofStrip="Clicks are not patients · Rankings are not revenue · Leads are not bookings"
      />

      <DarkSection>
        <SectionHeader dark label="The Real Problem" title={<><span className="text-white">The Problem Is Not Always the Marketing Spend —</span><br /><span className="gradient-text">It Is the Missing Connection to Patients.</span></>} sub="Most practice owners aren't underspending. They're under-attributing. The bridge between marketing activity and booked patients is broken, so every report looks like effort, not outcomes." />
      </DarkSection>

      <OffWhiteSection>
        <SectionHeader label="Vanity vs. Reality" title={<>What reports show <span className="gradient-text">vs. what runs your practice.</span></>} />
        <div className="mt-12 max-w-[860px] mx-auto bg-white border border-brand-purple/12 rounded-2xl overflow-hidden">
          {COMPARISON.map((row, i) => (
            <div key={i} className={`grid grid-cols-3 gap-3 px-4 sm:px-6 py-4 ${i === 0 ? "bg-brand-purple/8 font-bold text-brand-deep" : "border-t border-brand-purple/8"} text-[14px] sm:text-[15px]`}>
              <div className={i === 0 ? "" : "font-semibold text-brand-deep"}>{row[0]}</div>
              <div className={i === 0 ? "" : "text-text-secondary"}>{row[1]}</div>
              <div className={i === 0 ? "" : "text-text-secondary"}>{row[2]}</div>
            </div>
          ))}
        </div>
      </OffWhiteSection>

      <WhiteSection>
        <SectionHeader label="ROI Blind Spots" title={<>Eight reasons your reports look fine but <span className="gradient-text">growth doesn't.</span></>} />
        <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1100px] mx-auto list-none p-0">
          {BLIND_SPOTS.map((b, i) => (
            <li key={i}>
              <Reveal delay={i * 0.04}>
                <article className="bg-white border border-brand-purple/12 rounded-2xl p-5 h-full hover:border-brand-purple/30 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 rounded-xl bg-brand-purple/8 border border-brand-purple/15 flex items-center justify-center text-brand-purple mb-3">
                    <b.Icon aria-hidden size={18} />
                  </div>
                  <h3 className="font-bold text-brand-deep text-[16px] mb-1.5">{b.h}</h3>
                  <p className="text-text-secondary text-[14px] leading-[1.65]">{b.b}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </WhiteSection>

      <DarkSection>
        <SectionHeader dark label="The Vigorant ROI Framework" title={<><span className="text-white">Five steps to make every marketing dollar </span><span className="gradient-text">accountable.</span></>} />
        <ol className="mt-12 max-w-[960px] mx-auto flex flex-col gap-4 list-none p-0">
          {FIX_STEPS.map((p, i) => (
            <li key={i}>
              <Reveal delay={i * 0.06}>
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
      </DarkSection>

      <OffWhiteSection>
        <SectionHeader label="Common Questions" title="Frequently Asked Questions About Healthcare Marketing ROI" />
        <FAQAccordion faqs={FAQS} />
      </OffWhiteSection>

      <FinalCTA
        headline="Find out what your marketing is actually producing."
        sub="A Free Marketing ROI Audit connects your spend to real calls, booked appointments, and patient revenue."
        ctaLabel="Request a Free Marketing ROI Audit"
        ctaHref="/free-audit"
      />
    </PainPageLayout>
  );
}
