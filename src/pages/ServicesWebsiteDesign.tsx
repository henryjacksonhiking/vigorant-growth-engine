import { Layout, Zap, Smartphone, ShieldCheck, MousePointerClick, Search, Accessibility, BarChart2 } from "lucide-react";
import {
  PainPageLayout, PainHero, DarkSection, OffWhiteSection, WhiteSection,
  SectionHeader, Reveal, FAQAccordion, FinalCTA,
} from "@/components/site/PainPageShell";

const FAQS = [
  { q: "Why isn't my current website converting patients?", a: "Common causes include slow mobile performance, weak or unclear CTAs, confusing service navigation, missing trust signals, long forms, no call tracking, and unstructured content that hurts both SEO and AI visibility." },
  { q: "Is a website redesign worth it?", a: "If your site is slow, hard to read on mobile, doesn't communicate trust, or doesn't have clear booking paths, a redesign typically pays back in higher booking rate, better SEO foundation, and lower paid-ad costs." },
  { q: "Does Vigorant build HIPAA-aware websites?", a: "Yes. All builds use HIPAA-aware tracking practices, secure forms, consent-aware analytics, and PHI-safe conversion measurement." },
  { q: "Will the new site be SEO and AI-search ready?", a: "Yes. Vigorant websites ship with technical SEO, schema, structured content, Core Web Vitals tuning, and answer-engine-ready content blocks for AEO and GEO readiness." },
  { q: "Do you offer CRO after launch?", a: "Yes. CRO is part of the engagement — A/B testing, landing pages, form simplification, and call-to-action experimentation focused on calls, bookings, and started treatment." },
  { q: "How long does a healthcare website take to build?", a: "Most healthcare practice sites launch in 6–10 weeks depending on scope, content readiness, and integrations. Vigorant runs a structured discovery, design, build, and launch process." },
];

const SCOPE = [
  { Icon: Zap, h: "Speed & Core Web Vitals", b: "Sub-2-second mobile loads, optimized images, lazy loading, and clean code." },
  { Icon: Smartphone, h: "Mobile-First UX", b: "Most patients book on a phone. Every page is designed for thumb, scroll, and tap first." },
  { Icon: MousePointerClick, h: "Conversion-Built Pages", b: "Service pages with clear CTAs, trust signals, FAQs, and frictionless booking paths." },
  { Icon: Search, h: "SEO + AI-Search Foundation", b: "Schema, structured content, answer blocks, and entity signals built in from day one." },
  { Icon: ShieldCheck, h: "HIPAA-Aware Tracking", b: "Server-side tagging, consent-aware analytics, secure forms, and PHI-safe events." },
  { Icon: Accessibility, h: "Accessibility (WCAG)", b: "Inclusive design that meets accessibility standards and expands your patient reach." },
  { Icon: Layout, h: "Modular Design System", b: "Reusable components for service lines, locations, providers, and landing pages." },
  { Icon: BarChart2, h: "CRO After Launch", b: "Ongoing testing of CTAs, forms, and pages — tied to bookings, not bounce rate." },
];

export default function ServicesWebsiteDesign() {
  return (
    <PainPageLayout
      seoTitle="Healthcare Website Design & CRO | Vigorant"
      seoDesc="Fast, accessible, HIPAA-aware healthcare websites engineered for calls, bookings, and SEO/AI search. Dental, medical, and chiropractic practices."
      canonical="https://vigorant.com/services/website-design"
      faqs={FAQS}
    >
      <PainHero
        breadcrumbLabel="Website Design & CRO"
        breadcrumbTrail={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }]}
        titleLines={[{ text: "Websites Built to Book Patients —" }, { text: "Not Just Look Modern.", gradient: true }]}
        subhead="Your website is your most important front-desk asset."
        paragraph="Vigorant designs healthcare websites that load fast, communicate trust, rank in Google and AI search, and turn visitors into booked appointments — with HIPAA-aware tracking from day one."
        primaryCTA={{ label: "Request Your Free Website Growth Audit", href: "/free-audit" }}
        secondaryCTA={{ label: "See Website & Patient Growth Results", href: "/results" }}
      />

      <DarkSection>
        <SectionHeader dark label="Design as Patient Acquisition" title={<><span className="text-white">A modern site is not a brochure. </span><span className="gradient-text">It's a conversion system.</span></>} sub="Every typography choice, page structure, form field, and load-time decision either earns or loses a booked patient. We design with that scoreboard visible at all times." />
      </DarkSection>

      <OffWhiteSection>
        <SectionHeader label="What's Inside Every Build" title={<>Eight layers of the <span className="gradient-text">Vigorant website system.</span></>} />
        <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1180px] mx-auto list-none p-0">
          {SCOPE.map((s, i) => (
            <li key={i}>
              <Reveal delay={i * 0.04} className="h-full">
                <article className="bg-white border border-brand-purple/12 rounded-2xl p-6 h-full hover:border-brand-purple/30 hover:shadow-lg transition-all">
                  <div className="w-11 h-11 rounded-xl bg-brand-purple/8 border border-brand-purple/15 flex items-center justify-center text-brand-purple mb-4">
                    <s.Icon aria-hidden size={20} />
                  </div>
                  <h3 className="font-bold text-brand-deep text-[16px] mb-2">{s.h}</h3>
                  <p className="text-text-secondary text-[14px] leading-[1.7]">{s.b}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </OffWhiteSection>

      <WhiteSection>
        <SectionHeader label="Process" title={<>Discovery → Design → Build → <span className="gradient-text">Launch → Optimize.</span></>} sub="A structured 6–10 week process with clear milestones, content support, and HIPAA-aware tracking validated before launch — followed by ongoing CRO." />
      </WhiteSection>

      <OffWhiteSection>
        <SectionHeader label="Common Questions" title="Frequently Asked Questions About Healthcare Website Design" />
        <FAQAccordion faqs={FAQS} />
      </OffWhiteSection>

      <FinalCTA
        headline="Find out why your website isn't converting patients."
        sub="A free Website Growth Audit shows the speed, trust, conversion, SEO, and tracking gaps holding your site back."
        ctaLabel="Request Your Free Website Audit"
        ctaHref="/free-audit"
      />
    </PainPageLayout>
  );
}
