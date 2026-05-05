import { useState } from "react";
import Section, { Reveal, SectionLabel, H2 } from "./Section";
import { Plus, Minus } from "lucide-react";

export const FAQS = [
  {
    q: "What is a patient acquisition system and how is it different from a marketing agency?",
    a: "A patient acquisition system is a structured, repeatable marketing framework that combines AI-driven search optimization, paid advertising, and data attribution to generate a predictable flow of new patients for healthcare practices — as opposed to disconnected marketing services managed separately.",
  },
  {
    q: "How long does it take to see new patients from digital marketing?",
    a: "Most practices see measurable new patient growth within 30–60 days from paid advertising campaigns and 90–180 days from SEO. The exact timeline depends on your market competitiveness, current website performance, and specialty. Vigorant provides a free practice audit to estimate your specific timeline.",
  },
  {
    q: "Does Vigorant work with dental, chiropractic, and medical practices?",
    a: "Yes. Vigorant specializes exclusively in healthcare practices across three verticals: dental (general, cosmetic, orthodontic, pediatric), chiropractic (PI, wellness, sports), and medical (independent physicians and specialty clinics).",
  },
  {
    q: "How does AI improve healthcare marketing results?",
    a: "Our AI monitors search rankings and patient call data daily, automatically identifying which keywords, ads, and content are driving booked appointments — and reallocating budget in real time rather than waiting for monthly reviews. This continuous optimization is what makes Vigorant's results faster and more predictable than traditional agencies.",
  },
  {
    q: "How much does healthcare digital marketing cost?",
    a: "Most practices invest between $2,000 and $8,000 per month depending on specialty, practice size, competitive market, and services required. Our free growth audit gives you an exact recommendation based on your specific goals — no generic packages.",
  },
  {
    q: "What makes Vigorant different from other healthcare marketing agencies?",
    a: "Three things: we serve only healthcare practices (not general businesses), we use AI-driven optimization that adjusts daily rather than monthly, and we measure success exclusively by patient acquisition outcomes — not vanity metrics like impressions or clicks.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq" bg="secondary">
      <Reveal className="text-center max-w-2xl mx-auto">
        <SectionLabel>Common Questions</SectionLabel>
        <H2>Questions Practice Owners Ask Before Booking an Audit</H2>
      </Reveal>

      <div className="max-w-3xl mx-auto mt-14">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={f.q} delay={i * 0.04}>
              <div className="bg-white border-b border-brand-purple/10 last:rounded-b-xl first:rounded-t-xl">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-6 text-left px-6 py-5"
                  aria-expanded={isOpen}
                >
                  <span className="text-[17px] font-semibold text-brand-deep">{f.q}</span>
                  <span className="text-brand-purple flex-shrink-0 mt-1">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300 ease-out"
                  style={{ maxHeight: isOpen ? "400px" : "0" }}
                >
                  <p className="px-6 pb-6 text-ink-secondary leading-relaxed">{f.a}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
