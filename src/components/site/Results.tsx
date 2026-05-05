import Section, { Reveal, SectionLabel, H2 } from "./Section";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    tag: "Dental Practice · Phoenix, AZ",
    metric: "+34",
    sub: "new patients / month",
    timeline: "within 60 days",
    quote: "We'd tried three agencies before Vigorant. This is the first time the phone actually rings.",
    author: "Dr. R. Patel, Owner",
  },
  {
    tag: "Chiropractic Clinic · Austin, TX",
    metric: "+28",
    sub: "new patients / month",
    timeline: "within 90 days",
    quote: "The AI dashboard alone changed how I think about marketing spend.",
    author: "Dr. M. Chen, Founder",
  },
  {
    tag: "Medical Practice · Denver, CO",
    metric: "↓47%",
    sub: "cost per patient",
    timeline: "within 45 days",
    quote: "Finally a team that speaks in patient revenue, not impressions.",
    author: "Dr. L. Williams, MD",
  },
];

export default function Results() {
  return (
    <Section id="results" bg="white">
      <Reveal className="text-center max-w-2xl mx-auto">
        <SectionLabel>Real Results</SectionLabel>
        <H2>Real Practices. Real Patients. Measurable Results.</H2>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6 mt-16">
        {cases.map((c, i) => (
          <Reveal key={c.tag} delay={i * 0.08}>
            <article className="bg-white border border-brand-purple/10 rounded-2xl p-8 h-full transition-all duration-300 hover:-translate-y-1 hover:glass-strong">
              <p className="font-mono-ui text-[11px] uppercase tracking-wider text-ink-muted">{c.tag}</p>
              <div className="font-display font-bold text-brand-deep mt-4 leading-none" style={{ fontSize: "64px" }}>
                {c.metric}
              </div>
              <p className="text-ink-secondary mt-2 text-sm">{c.sub}</p>
              <span className="inline-block mt-3 font-mono-ui text-[11px] text-brand-purple bg-brand-purple/10 px-2 py-1 rounded">
                {c.timeline}
              </span>
              <blockquote className="mt-6 text-ink leading-relaxed border-l-2 border-brand-purple/30 pl-4">
                "{c.quote}"
              </blockquote>
              <p className="mt-3 text-sm text-ink-muted">— {c.author}</p>
              <a href="#" className="mt-5 inline-flex items-center gap-1.5 text-brand-purple text-sm font-medium hover:gap-2.5 transition-all">
                Read full case study <ArrowRight size={14} />
              </a>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="text-center mt-12">
        <a href="#" className="text-brand-purple font-medium hover:underline underline-offset-4">View all case studies →</a>
      </Reveal>
    </Section>
  );
}
