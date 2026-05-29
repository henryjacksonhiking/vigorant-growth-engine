import { Brain, MessageSquare, Sparkles, FileText, Globe, BarChart2 } from "lucide-react";
import {
  PainPageLayout, PainHero, DarkSection, OffWhiteSection, WhiteSection,
  SectionHeader, Reveal, FAQAccordion, FinalCTA,
} from "@/components/site/PainPageShell";

const FAQS = [
  { q: "What is GEO?", a: "GEO (Generative Engine Optimization) is the discipline of becoming a recommended, cited, and understood entity inside generative AI outputs — ChatGPT, Gemini, Claude, Perplexity, and Google's AI experiences — when patients ask for provider recommendations." },
  { q: "How is GEO different from AEO and SEO?", a: "SEO wins rankings. AEO wins concise extracted answers. GEO wins recommendations and citations inside long-form conversational AI responses. GEO is the layer where AI explains and suggests providers, not just lists results." },
  { q: "Do patients really use ChatGPT to find healthcare providers?", a: "Yes — and the share is growing fast. Patients ask AI tools to compare providers, explain treatments, summarize reviews, and recommend nearby practices. If your practice isn't represented, the AI recommends someone else." },
  { q: "Can you guarantee my practice will be recommended by ChatGPT?", a: "No reputable agency can guarantee generative AI behavior. Vigorant guarantees the methodology — entity authority, citation strategy, training-data presence, and prompt monitoring — that gives your practice the strongest chance of being cited and recommended." },
  { q: "How does Vigorant measure GEO?", a: "Prompt panels across ChatGPT, Gemini, Claude, and Perplexity; citation and mention tracking; competitive share-of-voice; and downstream attribution to calls and bookings." },
  { q: "Is GEO worth it now, or should I wait?", a: "First-mover advantage in GEO is real. Practices that build entity authority now will be embedded in the AI recommendation layer before competitors realize the channel exists." },
];

const SCOPE = [
  { Icon: Brain, h: "Entity Authority Building", b: "Make your practice unambiguous, citable, and trusted across the web AI systems train on." },
  { Icon: FileText, h: "Citation Strategy", b: "Earn references in the publications, directories, and sources generative AI pulls from." },
  { Icon: MessageSquare, h: "Prompt Panel Monitoring", b: "Track real patient prompts across ChatGPT, Gemini, Claude, and Perplexity in your market." },
  { Icon: Sparkles, h: "Generative-Ready Content", b: "Long-form, structured, evidence-rich pages that AI systems can summarize and cite cleanly." },
  { Icon: Globe, h: "Cross-Platform Consistency", b: "Aligned entity data across GBP, schema, directories, and social so AI doesn't see contradictions." },
  { Icon: BarChart2, h: "Attribution to Patients", b: "Connect AI recommendations to inbound calls and booked appointments." },
];

export default function ServicesSeoGeo() {
  return (
    <PainPageLayout
      seoTitle="GEO for Healthcare — Generative Engine Optimization | Vigorant"
      seoDesc="Become the practice recommended inside ChatGPT, Gemini, Claude, and Perplexity. First-mover GEO for dental, medical, and chiropractic practices."
      canonical="https://vigorant.com/services/seo/geo"
      faqs={FAQS}
    >
      <PainHero
        breadcrumbLabel="GEO"
        breadcrumbTrail={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "SEO for Healthcare", href: "/services/seo" }]}
        chip="Generative Engine Optimization"
        titleLines={[{ text: "Be Recommended When Patients" }, { text: "Ask ChatGPT, Gemini & Claude.", gradient: true }]}
        subhead="Generative AI is becoming the new word-of-mouth."
        paragraph="Vigorant builds the entity authority, citations, and structured content that get your practice cited and recommended inside conversational AI — before your competitors realize the channel exists."
        primaryCTA={{ label: "Request Your Free AI Visibility Audit", href: "/free-audit" }}
        secondaryCTA={{ label: "See AI Visibility Results", href: "/results" }}
        proofStrip="ChatGPT · Gemini · Claude · Perplexity · Google AI"
      />

      <DarkSection>
        <SectionHeader dark label="The Recommendation Layer" title={<><span className="text-white">If AI doesn't know your practice, </span><span className="gradient-text">it recommends someone else.</span></>} sub="Patients are asking AI tools the same questions they used to type into Google — but they're getting a single recommended provider, not a list. GEO determines whether that recommendation is yours." />
      </DarkSection>

      <OffWhiteSection>
        <SectionHeader label="The GEO System" title={<>Six layers of <span className="gradient-text">generative-AI readiness.</span></>} />
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
        <SectionHeader label="First-Mover Window" title={<>The practices that move <span className="gradient-text">now own the layer.</span></>} sub="Generative AI recommendations compound. Practices that build entity authority today become the default suggestion tomorrow — and dislodging an incumbent recommendation is far harder than earning one." />
      </WhiteSection>

      <OffWhiteSection>
        <SectionHeader label="Common Questions" title="Frequently Asked Questions About GEO" />
        <FAQAccordion faqs={FAQS} />
      </OffWhiteSection>

      <FinalCTA
        headline="Find out what ChatGPT says about your practice."
        sub="A free AI Visibility Audit shows whether you're cited, recommended, or invisible inside the generative AI layer — and what to build next."
        ctaLabel="Request Your Free AI Visibility Audit"
        ctaHref="/free-audit"
      />
    </PainPageLayout>
  );
}
