import { Link } from "react-router-dom";
import { MousePointerClick, Phone, CalendarCheck, MessageSquare, Smartphone, Clock, FileText, Bell } from "lucide-react";
import {
  PainPageLayout, PainHero, DarkSection, OffWhiteSection, WhiteSection,
  SectionHeader, Reveal, FAQAccordion, FinalCTA, Counter,
} from "@/components/site/PainPageShell";

const FAQS = [
  { q: "Why am I getting website visitors but not more patients?", a: "Traffic alone does not guarantee patient growth. Healthcare practices often lose potential patients through unclear service pages, weak CTAs, slow mobile pages, confusing forms, missed calls, delayed follow-up, or poor appointment confirmation workflows." },
  { q: "Why do patients call but not book appointments?", a: "Patients may call without booking because the office misses the call, does not answer objections clearly, lacks insurance or pricing guidance, has limited appointment availability, or does not follow up quickly after the call." },
  { q: "How can a healthcare practice improve lead conversion?", a: "A healthcare practice can improve lead conversion by simplifying website CTAs, tracking calls and forms, improving front-desk scripts, responding faster, using treatment-specific landing pages, adding trust proof, and creating reminder and follow-up workflows." },
  { q: "What is the difference between getting more leads and improving lead conversion?", a: "Getting more leads increases volume. Improving lead conversion increases the percentage of existing visitors, calls, and inquiries that become booked and showed patients. Practices often need both, but conversion should be fixed before increasing spend." },
  { q: "How do no-shows affect marketing ROI?", a: "No-shows reduce marketing ROI because the practice may pay to generate a lead and book an appointment, but no revenue is produced if the patient does not arrive. Reminder systems, confirmation workflows, and follow-up can reduce appointment leakage." },
  { q: "What does Vigorant review in a conversion audit?", a: "Vigorant reviews website messaging, landing pages, calls-to-action, forms, mobile experience, call tracking, source attribution, booking workflow, follow-up, reminder systems, and reporting to identify where potential patients are dropping off." },
  { q: "Does this apply to dental, medical, and chiropractic practices?", a: "Yes. The exact conversion leaks differ by specialty, but all healthcare practices need a clear path from visibility to inquiry, inquiry to appointment, appointment to show-up, and show-up to production or treatment revenue." },
  { q: "Can AI visibility help lead conversion?", a: "AI visibility can increase qualified discovery, but conversion still depends on what happens after the patient finds the practice. AI-optimized content should lead to clear pages, strong proof, and simple booking paths." },
];

const LEAKS = [
  { Icon: Smartphone, h: "Weak website CTAs", b: "Patients don't know how to book or which next step matters most." },
  { Icon: Phone, h: "Missed or fumbled calls", b: "Calls go to voicemail, or front desk doesn't convert the inquiry." },
  { Icon: FileText, h: "Long, confusing forms", b: "Multi-step forms drop 60%+ of qualified inquiries before submit." },
  { Icon: Clock, h: "Slow follow-up", b: "More than 5 minutes to first contact = sharp drop in booking rate." },
  { Icon: CalendarCheck, h: "No reminder workflow", b: "Booked patients no-show because no confirmation cadence exists." },
  { Icon: Bell, h: "No reactivation", b: "Patients who didn't book are never re-engaged." },
];

const BRIDGE = [
  { n: "01", h: "Audit the funnel", b: "Trace every visitor, call, form, booking, show, and start." },
  { n: "02", h: "Fix high-friction CTAs", b: "Single clear action per page; mobile-first; under 3 form fields." },
  { n: "03", h: "Install call tracking", b: "Source attribution + recordings to coach front-desk handling." },
  { n: "04", h: "Speed-to-lead", b: "Auto-text/email under 60s; live booking when possible." },
  { n: "05", h: "Confirmation cadence", b: "Multi-channel reminders cut no-shows materially." },
  { n: "06", h: "Reactivation flow", b: "Re-engage non-bookers in 24h, 3d, 7d windows with value-led messaging." },
  { n: "07", h: "Measure & iterate", b: "Booking rate, show rate, start rate — reported monthly with next actions." },
];

export default function LeadConversion() {
  return (
    <PainPageLayout
      seoTitle="Improve Lead Conversion for Your Healthcare Practice | Vigorant"
      seoDesc="Turn website visitors, calls, and inquiries into booked, showed, and producing patients. Free Conversion Audit for dental, medical, and chiropractic practices."
      canonical="https://vigorant.com/for-practices/lead-conversion"
      faqs={FAQS}
    >
      <PainHero
        breadcrumbLabel="Improve Lead Conversion"
        chip="For Practices With Traffic But Not Enough Bookings"
        titleLines={[{ text: "Getting Visitors and Calls," }, { text: "But Not Enough Booked Patients?", gradient: true }]}
        subhead="Your practice may not need 'more marketing' first. It may need a better conversion system."
        paragraph="Vigorant helps healthcare practices turn website visitors, phone calls, form submissions, and appointment requests into booked, showed, and revenue-producing patients."
        primaryCTA={{ label: "Find Your Conversion Leaks", href: "/free-audit" }}
        secondaryCTA={{ label: "See How the System Works", href: "/how-it-works" }}
        proofStrip="Website CRO · Call Tracking · Booking Optimization · No-Show Reduction"
      />

      <DarkSection>
        <SectionHeader dark label="The Real Problem" title={<><span className="text-white">More traffic won't fix </span><span className="gradient-text">a leaky funnel.</span></>} sub="Practices that scale ad spend on top of weak conversion just spend more to lose the same patients. The leverage is in the bridge between attention and revenue — not in pouring in more attention." />
      </DarkSection>

      <OffWhiteSection>
        <SectionHeader label="Where Patients Are Lost" title={<>Six common <span className="gradient-text">conversion leaks.</span></>} />
        <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] mx-auto list-none p-0">
          {LEAKS.map((l, i) => (
            <li key={i}>
              <Reveal delay={i * 0.05}>
                <article className="bg-white border border-brand-purple/12 rounded-2xl p-6 h-full hover:border-brand-purple/30 hover:shadow-lg transition-all">
                  <div className="w-11 h-11 rounded-xl bg-brand-purple/8 border border-brand-purple/15 flex items-center justify-center text-brand-purple mb-4">
                    <l.Icon aria-hidden size={20} />
                  </div>
                  <h3 className="font-bold text-brand-deep text-[17px] mb-2">{l.h}</h3>
                  <p className="text-text-secondary text-[15px] leading-[1.7]">{l.b}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </OffWhiteSection>

      <WhiteSection>
        <SectionHeader label="The Vigorant Conversion Bridge" title={<>Seven steps from inquiry to <span className="gradient-text">started treatment.</span></>} />
        <ol className="mt-12 max-w-[960px] mx-auto flex flex-col gap-4 list-none p-0">
          {BRIDGE.map((p, i) => (
            <li key={i}>
              <Reveal delay={i * 0.05}>
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
      </WhiteSection>

      <OffWhiteSection>
        <SectionHeader label="Common Questions" title="Frequently Asked Questions About Healthcare Lead Conversion" />
        <FAQAccordion faqs={FAQS} />
      </OffWhiteSection>

      <FinalCTA
        headline="Stop paying for visitors who never become patients."
        sub="A free Conversion Audit shows exactly where your patient pipeline leaks — and what to fix first."
        ctaLabel="Find Your Conversion Leaks"
        ctaHref="/free-audit"
      />
    </PainPageLayout>
  );
}
