import { Link } from "react-router-dom";
import { Search, MapPin, Sparkles, Brain, BarChart2, Globe, Phone, ArrowRight } from "lucide-react";
import {
  PainPageLayout, PainHero, DarkSection, OffWhiteSection, WhiteSection,
  SectionHeader, Reveal, FAQAccordion, FinalCTA,
} from "@/components/site/PainPageShell";

const FAQS = [
  { q: "What is healthcare SEO?", a: "Healthcare SEO is the practice of optimizing a dental, medical, or chiropractic website and Google Business Profile so the practice appears for high-intent patient searches across Google Search, Google Maps, and AI-powered search experiences." },
  { q: "Why are my rankings up but patients aren't?", a: "Rankings for the wrong terms, weak local signals, slow pages, unclear service pages, no call tracking, and poor conversion paths all break the link between visibility and booked patients. Vigorant audits the entire funnel, not just keywords." },
  { q: "What is the difference between SEO, AEO, and GEO?", a: "SEO drives rankings in traditional search results and Google Maps. AEO (Answer Engine Optimization) prepares your content to be selected as the concise answer inside AI Overviews and answer engines. GEO (Generative Engine Optimization) ensures your practice is referenced, cited, and recommended inside long-form generative AI responses from ChatGPT, Gemini, Claude, and Perplexity." },
  { q: "Do I need SEO, AEO, and GEO?", a: "Most growing healthcare practices benefit from all three. Traditional SEO is the foundation. AEO and GEO protect future visibility as patients move from typing keywords into Google to asking AI systems for provider recommendations." },
  { q: "How long until I see results?", a: "Local SEO and Maps wins can move within 60–120 days. Competitive organic keywords typically take 4–9 months. AI visibility signals build alongside content authority and citations." },
  { q: "Does Vigorant guarantee rankings?", a: "No reputable agency can guarantee rankings. Vigorant guarantees methodology, transparency, and patient-acquisition reporting — calls, forms, bookings — not ranking promises." },
];

const PILLARS = [
  { Icon: Search, h: "Traditional SEO (Google & Maps)", b: "Technical, on-page, content, and local-pack visibility for the high-intent searches that actually book patients.", href: "/services/seo/search-engine-optimization" },
  { Icon: Sparkles, h: "AEO — AI Engine Optimization", b: "Structure your authority so answer engines and AI Overviews pull your practice as the trusted response.", href: "/services/seo/aeo" },
  { Icon: Brain, h: "GEO — Generative Engine Optimization", b: "Become the recommended provider inside ChatGPT, Gemini, Claude, and Perplexity conversations.", href: "/services/seo/geo" },
];

const SYSTEM = [
  { Icon: MapPin, h: "Local & Maps Dominance", b: "GBP optimization, citations, geo-content, and review velocity tuned for the local pack." },
  { Icon: Globe, h: "Technical Foundation", b: "Core Web Vitals, crawlability, schema, internal linking, and HIPAA-aware tracking." },
  { Icon: BarChart2, h: "Patient Acquisition Reporting", b: "Calls, forms, bookings by source — not vanity rankings or traffic charts." },
  { Icon: Phone, h: "Conversion-Ready Content", b: "Service pages structured for both Google ranking and AI answer extraction." },
];

export default function ServicesSeo() {
  return (
    <PainPageLayout
      seoTitle="SEO for Healthcare Practices | Google, Maps & AI Search | Vigorant"
      seoDesc="Healthcare SEO that builds Google rankings, Maps visibility, and AI search recommendation. Dental, chiropractic, and medical practices. Free SEO & AI Visibility Audit."
      canonical="https://vigorant.com/services/seo"
      faqs={FAQS}
    >
      <PainHero
        breadcrumbLabel="SEO for Healthcare"
        breadcrumbTrail={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }]}
        chip="Rank · Get Found · Get Booked"
        titleLines={[{ text: "Healthcare SEO Built For" }, { text: "Patients — Not Just Rankings.", gradient: true }]}
        subhead="Rankings without patients is just expensive traffic."
        paragraph="Vigorant connects traditional SEO, local Maps visibility, and AI-search readiness into one integrated patient-acquisition system for dental, chiropractic, and medical practices."
        primaryCTA={{ label: "Request Your Free SEO & AI Visibility Audit", href: "/free-audit" }}
        secondaryCTA={{ label: "See Healthcare SEO Results", href: "/results" }}
        proofStrip="Google · Maps · AI Overviews · ChatGPT · Gemini · Perplexity"
      />

      <DarkSection>
        <SectionHeader dark label="The Modern Search Landscape" title={<><span className="text-white">Three layers of visibility. </span><span className="gradient-text">One integrated system.</span></>} sub="Patients no longer search in one place. They search Google, scan the Map pack, ask ChatGPT, and read AI Overviews — sometimes in the same minute. Each layer needs its own optimization, and they reinforce each other." />
      </DarkSection>

      <OffWhiteSection>
        <SectionHeader label="The Three Pillars" title={<>SEO, AEO, and <span className="gradient-text">GEO — explained.</span></>} />
        <ul className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1100px] mx-auto list-none p-0">
          {PILLARS.map((p, i) => (
            <li key={i}>
              <Reveal delay={i * 0.06} className="h-full">
                <Link to={p.href} className="block h-full">
                  <article className="bg-white border border-brand-purple/12 rounded-2xl p-7 h-full hover:border-brand-purple/30 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 rounded-xl bg-brand-purple/8 border border-brand-purple/15 flex items-center justify-center text-brand-purple mb-5">
                      <p.Icon aria-hidden size={22} />
                    </div>
                    <h3 className="font-bold text-brand-deep text-[19px] mb-2.5">{p.h}</h3>
                    <p className="text-text-secondary text-[15px] leading-[1.7]">{p.b}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-brand-purple text-[13px] font-semibold">Learn more <ArrowRight aria-hidden size={14} /></span>
                  </article>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </OffWhiteSection>

      <WhiteSection>
        <SectionHeader label="What's Inside Every Engagement" title={<>The Vigorant <span className="gradient-text">SEO system.</span></>} />
        <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[1000px] mx-auto list-none p-0">
          {SYSTEM.map((s, i) => (
            <li key={i}>
              <Reveal delay={i * 0.05} className="h-full">
                <article className="bg-white rounded-2xl border border-brand-purple/12 p-6 h-full hover:shadow-md transition">
                  <div className="w-11 h-11 rounded-xl bg-brand-purple/8 border border-brand-purple/15 flex items-center justify-center text-brand-purple mb-4">
                    <s.Icon aria-hidden size={20} />
                  </div>
                  <h3 className="font-bold text-brand-deep text-[17px] mb-2">{s.h}</h3>
                  <p className="text-text-secondary text-[15px] leading-[1.7]">{s.b}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </WhiteSection>

      <OffWhiteSection>
        <SectionHeader label="Common Questions" title="Frequently Asked Questions About Healthcare SEO" />
        <FAQAccordion faqs={FAQS} />
      </OffWhiteSection>

      <FinalCTA
        headline="See where your practice ranks — and where it's invisible."
        sub="A free SEO & AI Visibility Audit shows your Google, Maps, and AI-search standing — and exactly what to fix first."
        ctaLabel="Request Your Free Audit"
        ctaHref="/free-audit"
      />
    </PainPageLayout>
  );
}
