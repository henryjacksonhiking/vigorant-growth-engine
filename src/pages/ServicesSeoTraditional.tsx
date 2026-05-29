import { Search, MapPin, FileCode, Link2, Globe, BarChart2, Phone, Star } from "lucide-react";
import {
  PainPageLayout, PainHero, DarkSection, OffWhiteSection, WhiteSection,
  SectionHeader, Reveal, FAQAccordion, FinalCTA,
} from "@/components/site/PainPageShell";

const FAQS = [
  { q: "What does traditional SEO include for healthcare practices?", a: "Technical SEO, on-page content, local SEO and Google Business Profile, citations, link earning, schema, Core Web Vitals, and conversion-focused service pages — all tuned to high-intent patient queries." },
  { q: "How is local SEO different from organic SEO?", a: "Local SEO targets the Map pack and 'near me' searches via Google Business Profile, reviews, citations, and geo-relevant content. Organic SEO targets the standard blue-link results. Healthcare practices need both." },
  { q: "Why does my practice rank but still not get calls?", a: "Common causes: ranking for wrong intent, slow mobile pages, weak CTAs, missing call tracking, unclear service pages, no insurance/pricing guidance, and front-desk drop-off after the call connects." },
  { q: "Is SEO still worth it with AI search rising?", a: "Yes — traditional SEO is the foundation AI engines pull from. Without strong technical SEO, structured content, and authority signals, AEO and GEO cannot work." },
  { q: "How does Vigorant report SEO performance?", a: "Calls, form fills, bookings, and qualified patient inquiries by source — not just rankings or sessions. Reporting includes call tracking recordings and source attribution." },
  { q: "Do you do SEO for dental, chiropractic, and medical practices?", a: "Yes. Vigorant specializes in healthcare-only SEO across dental, chiropractic, medical, oral surgery, orthodontic, and cosmetic/elective practices." },
];

const SCOPE = [
  { Icon: FileCode, h: "Technical SEO", b: "Core Web Vitals, crawl, indexation, schema, HTTPS, mobile-first, structured data for healthcare entities." },
  { Icon: MapPin, h: "Local & Google Maps", b: "GBP optimization, categories, services, photos, posts, Q&A, geo-content, and citation cleanup." },
  { Icon: Search, h: "On-Page & Content", b: "Service pages, treatment pages, location pages, and FAQs structured for both ranking and answer extraction." },
  { Icon: Link2, h: "Authority & Links", b: "Healthcare-relevant citations, mentions, and link earning — never spam, never PBNs." },
  { Icon: Star, h: "Review Velocity", b: "Compliant review-generation workflow that lifts local pack ranking and trust signals together." },
  { Icon: BarChart2, h: "Patient Reporting", b: "Calls, forms, bookings by source. Call recordings to coach front desk. No vanity metrics." },
];

export default function ServicesSeoTraditional() {
  return (
    <PainPageLayout
      seoTitle="Traditional SEO (Google & Maps) for Healthcare Practices | Vigorant"
      seoDesc="Healthcare SEO for Google organic, Google Maps, and local-pack visibility. Built for patient calls, bookings, and revenue — not vanity rankings."
      canonical="https://vigorant.com/services/seo/search-engine-optimization"
      faqs={FAQS}
    >
      <PainHero
        breadcrumbLabel="Traditional SEO"
        breadcrumbTrail={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "SEO for Healthcare", href: "/services/seo" }]}
        chip="Google · Maps · Local Pack"
        titleLines={[{ text: "Get Found by the Patients" }, { text: "Already Searching For You.", gradient: true }]}
        subhead="Most healthcare SEO sells rankings. We build patient acquisition."
        paragraph="Vigorant builds the technical, local, on-page, and authority foundation that wins Google rankings, dominates the Map pack, and feeds the AI engines that decide what gets recommended next."
        primaryCTA={{ label: "Request Your Free SEO Audit", href: "/free-audit" }}
        secondaryCTA={{ label: "See SEO Case Studies", href: "/results" }}
        proofStrip="Technical · Local · On-page · Authority · Reporting"
      />

      <DarkSection>
        <SectionHeader dark label="Why Rankings Stop Converting" title={<><span className="text-white">Ranking ≠ </span><span className="gradient-text">booked patients.</span></>} sub="Generic agencies optimize for keywords. Vigorant optimizes for the calls, forms, and bookings those keywords are supposed to produce — across Google organic, Maps, and the local pack." />
      </DarkSection>

      <OffWhiteSection>
        <SectionHeader label="What's Inside" title={<>Six pillars of <span className="gradient-text">healthcare SEO.</span></>} />
        <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] mx-auto list-none p-0">
          {SCOPE.map((s, i) => (
            <li key={i}>
              <Reveal delay={i * 0.05} className="h-full">
                <article className="bg-white border border-brand-purple/12 rounded-2xl p-6 h-full hover:border-brand-purple/30 hover:shadow-lg transition-all">
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
      </OffWhiteSection>

      <WhiteSection>
        <SectionHeader label="AI-Ready Foundation" title={<>SEO done right is the <span className="gradient-text">AEO/GEO foundation.</span></>} sub="Every page is structured so answer engines and generative AI systems can extract, cite, and recommend your practice. Strong SEO today protects your visibility tomorrow." />
      </WhiteSection>

      <OffWhiteSection>
        <SectionHeader label="Common Questions" title="Frequently Asked Questions About Traditional SEO" />
        <FAQAccordion faqs={FAQS} />
      </OffWhiteSection>

      <FinalCTA
        headline="See exactly where your SEO leaks patients."
        sub="A free SEO audit shows the technical, local, and content gaps holding your practice back — with a clear plan to fix them."
        ctaLabel="Request Your Free SEO Audit"
        ctaHref="/free-audit"
      />
    </PainPageLayout>
  );
}
