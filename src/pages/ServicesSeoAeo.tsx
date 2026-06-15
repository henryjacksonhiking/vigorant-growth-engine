import { Sparkles, MessageSquare, FileText, Search, Brain, BarChart2 } from "lucide-react";
import {
  PainPageLayout, PainHero, DarkSection, OffWhiteSection, WhiteSection,
  SectionHeader, Reveal, FAQAccordion, FinalCTA,
} from "@/components/site/PainPageShell";

const FAQS = [
  { q: "What is AEO?", a: "AEO (Answer Engine Optimization) is the discipline of structuring a website and its content so AI-powered answer engines — Google AI Overviews, Bing Copilot, ChatGPT search, and Perplexity — extract and present your practice as the concise authoritative answer." },
  { q: "How is AEO different from SEO?", a: "SEO targets blue-link rankings and Map results. AEO targets the answer surface above the results — the box that increasingly replaces clicks. AEO requires structured, concise, evidence-backed content with strong schema and entity signals." },
  { q: "How is AEO different from GEO?", a: "AEO focuses on concise extracted answers inside answer engines. GEO focuses on full conversational recommendations and citations inside generative AI tools like ChatGPT, Gemini, and Claude." },
  { q: "Will AEO replace SEO?", a: "No. AEO builds on top of SEO. Without crawlability, authority, and structured content, answer engines cannot select or trust your practice." },
  { q: "Can you guarantee my practice appears in AI Overviews?", a: "No reputable agency can guarantee AI inclusion. Vigorant guarantees the methodology — structured answer blocks, schema, entity consistency, and authority — that gives your practice the best possible chance." },
  { q: "How do you measure AEO?", a: "Tracked prompts across answer engines, share-of-voice in AI Overviews, citation tracking, and downstream calls/bookings attributed to AI-driven discovery." },
];

const SCOPE = [
  { Icon: MessageSquare, h: "Answer Block Engineering", b: "Concise, structured, citation-ready answers placed where extraction engines look." },
  { Icon: FileText, h: "Schema & Structured Data", b: "MedicalBusiness, FAQ, HowTo, Service, and Physician schema tuned for healthcare entities." },
  { Icon: Search, h: "Entity & E-E-A-T Signals", b: "Consistent practice entity, provider bios, credentials, and trust markers across the web." },
  { Icon: Brain, h: "Prompt-Aligned Content", b: "Pages built around real patient prompts — not just keywords." },
  { Icon: Sparkles, h: "AI Overview Monitoring", b: "Track which prompts trigger AI Overviews in your market and who gets cited." },
  { Icon: BarChart2, h: "Attribution to Bookings", b: "Connect AI-driven discovery to calls, forms, and booked patients." },
];

export default function ServicesSeoAeo() {
  return (
    <PainPageLayout
      seoTitle="AEO for Healthcare — AI Engine Optimization | Vigorant"
      seoDesc="Get cited as the answer inside Google AI Overviews, Bing Copilot, ChatGPT search, and Perplexity. Healthcare AEO for dental, medical, and chiropractic practices."
      canonical="https://vigorant.com/services/seo/aeo"
      faqs={FAQS}
    >
      <PainHero
        breadcrumbLabel="AEO"
        breadcrumbTrail={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "SEO for Healthcare", href: "/services/seo" }]}
        chip="Answer Engine Optimization"
        titleLines={[{ text: "Be the Answer When Patients" }, { text: "Ask AI About Your Practice.", gradient: true }]}
        subhead="Search results are shrinking. Answers are taking over."
        paragraph="Vigorant structures your website, content, and entity signals so AI Overviews, Copilot, Perplexity, and ChatGPT search pick your practice as the concise, trustworthy answer."
        primaryCTA={{ label: "Request Your Free AI Visibility Audit", href: "/free-audit" }}
        secondaryCTA={{ label: "See AI Visibility Results", href: "/results" }}
        
      />

      <DarkSection>
        <SectionHeader dark label="The New Front Door" title={<><span className="text-white">When the answer is given, </span><span className="gradient-text">the click disappears.</span></>} sub="Answer engines are pulling traffic out of traditional results. If your practice isn't the cited answer, you're invisible in the moment a patient is deciding who to call." />
      </DarkSection>

      <OffWhiteSection>
        <SectionHeader label="The AEO System" title={<>Six layers of <span className="gradient-text">answer-engine readiness.</span></>} />
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
        <SectionHeader label="SEO vs AEO vs GEO" title={<>Where AEO <span className="gradient-text">fits.</span></>} sub="SEO earns the ranking. AEO earns the extracted answer. GEO earns the recommendation inside generative AI. AEO is the bridge — and most healthcare practices have nothing in place for it." />
      </WhiteSection>

      <OffWhiteSection>
        <SectionHeader label="Common Questions" title="Frequently Asked Questions About AEO" />
        <FAQAccordion faqs={FAQS} />
      </OffWhiteSection>

      <FinalCTA
        headline="Find out if AI is already answering for someone else."
        sub="A free AI Visibility Audit shows whether your practice is being cited — and how to take the answer back."
        ctaLabel="Request Your Free AI Visibility Audit"
        ctaHref="/free-audit"
      />
    </PainPageLayout>
  );
}
