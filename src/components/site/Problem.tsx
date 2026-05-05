import Section, { Reveal, SectionLabel, H2 } from "./Section";
import { TrendingDown, FileX, FileQuestion } from "lucide-react";

const cards = [
  {
    icon: TrendingDown,
    title: "SEO That Ranks But Never Rings",
    body: "You're on page one for something. But the phone isn't ringing. Rankings without patient calls aren't marketing — they're decoration.",
  },
  {
    icon: FileX,
    title: "Ad Spend With Nothing to Show",
    body: "Every month your budget burns. Every month the report looks busy. But you still can't tell us your actual cost per new patient.",
  },
  {
    icon: FileQuestion,
    title: "Reports, Not Results",
    body: "Your agency sends dashboards full of impressions and sessions. But when you ask 'how many new patients did this bring?' — silence.",
  },
];

export default function Problem() {
  return (
    <Section bg="secondary">
      <Reveal className="text-center max-w-2xl mx-auto">
        <SectionLabel>The Problem</SectionLabel>
        <H2>If Your Marketing Agency Isn't Delivering Patients, It's Delivering Excuses</H2>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6 mt-16">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08}>
            <article className="bg-white border border-brand-purple/10 rounded-2xl p-8 h-full transition-all duration-300 hover:-translate-y-1 hover:border-brand-purple/30 hover:shadow-[0_12px_40px_rgba(30,5,112,0.08)]">
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-500 mb-5">
                <c.icon size={22} />
              </div>
              <h3 className="text-xl font-bold text-brand-deep mb-3">{c.title}</h3>
              <p className="text-ink-secondary leading-relaxed">{c.body}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="text-center max-w-xl mx-auto mt-14">
        <p className="text-lg text-ink-secondary">
          We built Vigorant because healthcare practices deserve better than this. Not promises — a system.
        </p>
      </Reveal>
    </Section>
  );
}
