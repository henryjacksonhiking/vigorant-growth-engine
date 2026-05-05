import Section, { Reveal, SectionLabel, H2 } from "./Section";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    chip: "Dental",
    title: "Dental Practice Marketing",
    body: "From general dentistry to cosmetic and orthodontic practices, we help dentists attract high-value patients and reduce cost-per-acquisition.",
    metrics: ["Avg. +28 new patients/mo", "90-day results"],
    cta: "Dental marketing solutions",
  },
  {
    chip: "Chiropractic",
    title: "Chiropractic Marketing",
    body: "We understand PI patients, wellness patients, and sports chiro. Our systems are built around the economics of your specific practice model.",
    metrics: ["Avg. +22 new patients/mo", "Local SEO focus"],
    cta: "Chiropractic solutions",
  },
  {
    chip: "Medical",
    title: "Medical Practice Marketing",
    body: "Independent physicians and specialty clinics. We optimize for elective and cash-pay patient acquisition where margin is highest.",
    metrics: ["Avg. +19 new patients/mo", "Paid + organic"],
    cta: "Medical practice solutions",
  },
];

export default function Specialties() {
  return (
    <Section id="specialties" bg="secondary">
      <Reveal className="text-center max-w-2xl mx-auto">
        <SectionLabel>Built for Your Specialty</SectionLabel>
        <H2>Built for Your Specialty — Not Generic Healthcare</H2>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6 mt-16">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08}>
            <article className="glass-strong rounded-3xl p-10 h-full transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-purple/40 group cursor-pointer">
              <span className="font-mono-ui text-[11px] uppercase tracking-[0.1em] text-brand-purple bg-brand-purple/10 px-2.5 py-1 rounded-md">
                {c.chip}
              </span>
              <h3 className="text-2xl font-bold text-brand-deep mt-5">{c.title}</h3>
              <p className="text-ink-secondary mt-3 leading-relaxed">{c.body}</p>
              <div className="flex flex-col gap-1.5 mt-6 font-mono-ui text-xs text-ink-muted">
                {c.metrics.map((m) => <span key={m}>· {m}</span>)}
              </div>
              <div className="mt-6 inline-flex items-center gap-1.5 text-brand-purple font-medium text-sm group-hover:gap-2.5 transition-all">
                {c.cta} <ArrowRight size={15} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
