import Section, { Reveal, SectionLabel, H2 } from "./Section";
import { ArrowRight } from "lucide-react";
import { useTilt } from "./GlobalFx";

const cases = [
  { type: "Dental Practice · Phoenix, AZ", metric: "+34", label: "new patients/month", chip: "within 60 days",
    quote: "We'd tried three agencies before Vigorant. This is the first time the phone actually rings.", author: "Dr. J. Martinez, DDS" },
  { type: "Chiropractic Clinic · Austin, TX", metric: "+28", label: "new patients/month", chip: "within 90 days",
    quote: "The AI dashboard alone changed how I think about marketing spend.", author: "Dr. R. Patel, DC" },
  { type: "Medical Practice · Denver, CO", metric: "↓47%", label: "cost per patient", chip: "within 45 days",
    quote: "Finally a team that speaks in patient revenue, not impressions.", author: "Dr. S. Chen, MD" },
];

export default function CaseStudies() {
  return (
    <Section id="results" bg="white">
      <Reveal className="text-center max-w-3xl mx-auto">
        <SectionLabel>Real Results</SectionLabel>
        <H2>Real Practices. Real Patients.<br /><span className="gradient-text">Measurable Results.</span></H2>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6 mt-14">
        {cases.map((c, i) => <CaseCard key={c.type} {...c} delay={i * 0.07} />)}
      </div>

      <Reveal delay={0.2} className="text-center mt-12">
        <a href="#" className="inline-flex items-center gap-1.5 text-brand-purple font-semibold">
          View all results <ArrowRight size={16} />
        </a>
      </Reveal>
    </Section>
  );
}

function CaseCard({ type, metric, label, chip, quote, author, delay }: any) {
  const ref = useTilt<HTMLDivElement>(5);
  return (
    <Reveal delay={delay} className="h-full">
      <div ref={ref}
        className="tilt-spotlight rounded-[20px] p-8 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
        style={{
          background: "hsl(0 0% 100% / 0.85)",
          backdropFilter: "blur(20px)",
          border: "1px solid hsl(247 93% 64% / 0.12)",
          boxShadow: "0 8px 32px hsl(248 49% 15% / 0.06)",
        }}>
        <div className="font-mono-ui text-[11px] uppercase tracking-[0.1em] text-ink-muted">{type}</div>
        <div className="mt-4 font-display font-bold text-brand-deep" style={{ fontSize: "64px", lineHeight: 1 }}>{metric}</div>
        <div className="font-mono-ui text-[13px] text-ink-muted mt-1">{label}</div>
        <span className="inline-block self-start mt-4 text-brand-purple bg-brand-purple/8 border border-brand-purple/20 rounded-full px-3 py-1 text-xs font-semibold">{chip}</span>
        <blockquote className="mt-5 italic text-[14px] text-ink-secondary border-l-2 border-brand-purple/25 pl-3">"{quote}"</blockquote>
        <div className="mt-2 text-xs text-ink-muted">— {author}</div>
        <a href="#" className="mt-auto pt-5 inline-flex items-center gap-1.5 text-brand-purple text-sm font-semibold">
          Read full case study <ArrowRight size={14} />
        </a>
      </div>
    </Reveal>
  );
}
