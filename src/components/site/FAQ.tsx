import { useId, useState } from "react";
import Section, { Reveal, SectionLabel, H2 } from "./Section";
import { Plus } from "lucide-react";

export const FAQS = [
  { q: "What makes healthcare SEO different from regular SEO?", a: "Healthcare SEO requires compliance awareness, local search dominance, and content strategies built around patient intent — not just keyword rankings. Vigorant specializes exclusively in healthcare, so our strategies are designed for the specific way patients search for providers." },
  { q: "How does AI optimization help dental and medical practices?", a: "AI optimization — also called AIO or GEO — helps your practice appear in AI-generated search results from tools like ChatGPT, Gemini, Perplexity, and Google AI Overviews. As more patients use these tools to find providers, being visible in AI answers is becoming as important as traditional Google rankings." },
  { q: "What is GEO and why does it matter for my practice?", a: "Generative Engine Optimization (GEO) is the practice of structuring your website content so that AI models can extract, understand, and cite it in their answers. Practices that invest in GEO now are building a significant long-term visibility advantage." },
  { q: "How long does dental SEO typically take to show results?", a: "Most practices see meaningful ranking improvements within 60–90 days, with significant lead generation improvements by month 4–6. Paid ads can deliver results within the first 30 days while organic SEO builds." },
  { q: "What marketing channels work best for dentists?", a: "The highest-ROI channels for dental practices are typically Google Local Services Ads, Google Maps optimization, organic SEO for high-intent procedures, and retargeting. The right mix depends on your specialty, market size, and growth goals." },
  { q: "Do you work with multi-location practices?", a: "Yes. We manage marketing for practices with 3 to 50+ locations. Our centralized dashboard gives you full visibility across all locations while allowing location-specific campaign optimization." },
  { q: "How does Vigorant improve website conversion rates?", a: "We analyze your existing patient journey and identify where visitors are dropping off. We then apply conversion rate optimization (CRO) including landing page restructuring, CTA testing, form optimization, and trust-signal improvements to increase the percentage of visitors who book appointments." },
  { q: "What platforms do you optimize for beyond Google?", a: "We optimize for Google Search, Google Maps, Bing, ChatGPT, Perplexity, Gemini, Google AI Overviews, Yelp, Healthgrades, and Zocdoc — covering the full spectrum of where patients discover providers today." },
  { q: "What does a typical engagement with Vigorant look like?", a: "We start with a free Practice Growth Audit to identify your biggest opportunities. From there, we build a custom strategy, onboard your accounts, and begin execution within 2 weeks. You receive monthly reporting through our live analytics dashboard." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();
  return (
    <Section id="faq" bg="white">
      <Reveal className="text-center max-w-3xl mx-auto">
        <SectionLabel>Common Questions</SectionLabel>
        <H2>Questions Practice Owners Ask Before Booking an Audit</H2>
      </Reveal>

      <div className="max-w-3xl mx-auto mt-12 sm:mt-14 space-y-3" role="list">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          const btnId = `${baseId}-q-${i}`;
          const panelId = `${baseId}-p-${i}`;
          return (
            <Reveal key={f.q} delay={i * 0.04}>
              <div className="bg-white rounded-xl border border-brand-purple/15 overflow-hidden" role="listitem">
                <h3 className="m-0">
                  <button
                    id={btnId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-4 sm:gap-6 text-left px-5 sm:px-6 py-5 min-h-[56px] hover:bg-brand-purple/5 transition-colors"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span className="text-[16px] sm:text-[17px] font-semibold text-brand-deep">{f.q}</span>
                    <Plus
                      aria-hidden
                      size={20}
                      className="text-brand-purple flex-shrink-0 mt-1 transition-transform duration-300"
                      style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0)" }}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  hidden={!isOpen}
                  className="overflow-hidden"
                >
                  <p className="px-5 sm:px-6 pb-6 text-ink-secondary leading-[1.8]">{f.a}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
