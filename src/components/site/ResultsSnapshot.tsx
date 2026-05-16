import Section, { Reveal, SectionLabel, H2 } from "./Section";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Dental Implant Practice",
    location: "California",
    metrics: ["+72% organic visibility", "+38% conversion rate", "+51 new monthly leads"],
  },
  {
    title: "Multi-Location Dental Group",
    location: "Texas",
    metrics: ["2.8x ROAS on Google Ads", "-62% cost per lead", "+89 new patients/month"],
  },
  {
    title: "Chiropractic Clinic",
    location: "Florida",
    metrics: ["Ranked #1 for primary keyword", "+44% organic calls", "+3.2x website conversions"],
  },
  {
    title: "Medical Wellness Practice",
    location: "Colorado",
    metrics: ["+61% organic traffic", "Top 3 rankings in 60 days", "+29% treatment acceptance"],
  },
];

export default function ResultsSnapshot() {
  return (
    <Section id="case-studies" bg="white">
      <Reveal className="text-center max-w-3xl mx-auto">
        <SectionLabel>Results Snapshot</SectionLabel>
        <H2>Results That Speak for Themselves</H2>
      </Reveal>

      <div className="mt-12 grid sm:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06}>
            <article
              className="h-full rounded-2xl p-7 bg-white border border-brand-purple/15 transition-transform duration-300 hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex items-baseline justify-between gap-3 flex-wrap">
                <h3 className="font-extrabold text-brand-deep text-[18px] leading-tight">{c.title}</h3>
                <span className="font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-purple">{c.location}</span>
              </div>
              <div aria-hidden className="my-5 h-px bg-gradient-to-r from-brand-purple/40 via-brand-purple/20 to-transparent" />
              <ul className="space-y-2.5">
                {c.metrics.map((m) => (
                  <li key={m} className="flex items-start gap-2.5 text-brand-deep text-[15px]">
                    <span className="text-brand-purple font-bold mt-0.5" aria-hidden>▲</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-1.5 text-brand-purple font-semibold text-[14px] hover:gap-2.5 transition-all"
              >
                View Full Case Study <ArrowRight aria-hidden size={16} />
              </a>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} className="text-center mt-12">
        <a
          href="#case-studies"
          className="btn-primary-grad inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold min-h-[48px]"
        >
          See All Case Studies <ArrowRight aria-hidden size={18} />
        </a>
      </Reveal>
    </Section>
  );
}
