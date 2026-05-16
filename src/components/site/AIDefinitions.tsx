import Section, { Reveal, SectionLabel, H2 } from "./Section";

const defs = [
  { term: "What is AIO (AI Overview Optimization)?", body: "AI Overview Optimization is the practice of structuring website content so it appears in Google's AI-generated answer panels — the summaries that appear above traditional search results. For healthcare practices, appearing in AI Overviews significantly increases brand visibility and patient trust before they even click a link." },
  { term: "What is GEO (Generative Engine Optimization)?", body: "Generative Engine Optimization (GEO) is the discipline of making your website content extractable, citable, and trustworthy to AI language models like ChatGPT, Gemini, Perplexity, and Claude. As more patients use AI assistants to research providers, GEO is becoming as critical as traditional SEO." },
  { term: "What is AI Visibility for Healthcare?", body: "AI Visibility refers to how prominently your practice appears across AI-generated search experiences. A practice with high AI Visibility is regularly cited, referenced, or recommended by AI tools when patients ask questions like 'Who is the best dentist near me?' or 'What should I look for in a chiropractor?'" },
  { term: "What is Semantic SEO?", body: "Semantic SEO is a content strategy that focuses on the meaning and context behind search queries — not just individual keywords. For healthcare practices, semantic SEO means creating content that answers the complete range of questions a patient might ask at every stage of their decision-making journey." },
  { term: "What is Healthcare Conversion Rate Optimization (CRO)?", body: "Healthcare CRO is the process of systematically improving your website and patient journey to increase the percentage of visitors who book an appointment. This includes improving page speed, simplifying appointment forms, strengthening trust signals, and optimizing calls-to-action — all without increasing your ad spend." },
];

export default function AIDefinitions() {
  return (
    <Section id="ai-definitions" bg="secondary">
      <Reveal className="text-center max-w-3xl mx-auto">
        <SectionLabel>AI Glossary</SectionLabel>
        <H2>Understanding AI-Driven Healthcare Marketing</H2>
        <p className="mt-5 text-ink-secondary text-[16px] sm:text-[17px] italic">
          The landscape of patient search is changing. Here's what you need to know.
        </p>
      </Reveal>

      <div className="mt-12 grid md:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto">
        {defs.map((d, i) => (
          <Reveal
            key={d.term}
            delay={i * 0.05}
            className={i === defs.length - 1 ? "md:col-span-2 md:max-w-xl md:mx-auto" : ""}
          >
            <article
              className="h-full bg-white border border-brand-purple/15 border-l-4 border-l-brand-purple rounded-2xl p-6 sm:p-7"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <h3 className="font-extrabold text-brand-deep text-[17px] sm:text-[18px] leading-snug">{d.term}</h3>
              <p className="mt-3 text-ink-secondary text-[14px] sm:text-[15px] leading-relaxed">{d.body}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="text-center mt-12 max-w-2xl mx-auto">
        <p className="font-display font-bold text-brand-deep text-[20px] sm:text-[24px] leading-snug">
          77% of patients research their provider online before booking an appointment.
        </p>
        <p className="mt-2 text-[12px] text-ink-secondary italic">
          Source: Pew Research / Healthcare Digital Marketing Report
        </p>
      </Reveal>
    </Section>
  );
}
