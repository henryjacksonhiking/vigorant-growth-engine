import Section, { Reveal, SectionLabel, H2 } from "./Section";
import { ArrowRight } from "lucide-react";

const steps = [
  { n: "01", title: "Practice Audit & Market Analysis", body: "We audit your digital presence, analyze local market competition, and identify the patient acquisition gaps costing you revenue.", t: "Week 1" },
  { n: "02", title: "System Build & Launch", body: "We build or optimize your website for conversion, set up AI-optimized SEO, launch targeted ads, and configure call tracking.", t: "Days 7–30" },
  { n: "03", title: "AI-Powered Optimization", body: "Our AI monitors search rankings, ad performance, and patient call data weekly — automatically surfacing what to improve and where to reallocate budget.", t: "Ongoing" },
  { n: "04", title: "Transparent Reporting & Growth", body: "You see every metric that matters — patient volume, cost per acquisition, revenue attribution — in a live dashboard. No vanity metrics.", t: "Monthly" },
];

export default function HowItWorks() {
  return (
    <Section id="how-it-works" bg="secondary">
      <Reveal className="text-center max-w-2xl mx-auto">
        <SectionLabel>The Process</SectionLabel>
        <H2>How Vigorant Builds Your Patient Acquisition System</H2>
      </Reveal>

      <div className="grid md:grid-cols-4 gap-8 mt-16 relative">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.08}>
            <div className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px border-t border-dashed border-brand-purple/30 -translate-y-1/2" />
              )}
              <div className="font-mono-ui font-medium text-brand-purple/30 text-5xl leading-none">{s.n}</div>
              <h3 className="text-lg font-bold text-brand-deep mt-5">{s.title}</h3>
              <p className="text-ink-secondary text-[15px] mt-2.5 leading-relaxed">{s.body}</p>
              <span className="inline-block mt-4 font-mono-ui text-[11px] uppercase tracking-wider text-brand-purple bg-brand-purple/10 px-2 py-1 rounded">
                {s.t}
              </span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3} className="text-center mt-16">
        <p className="text-ink-secondary mb-6 max-w-xl mx-auto">
          Start with a free audit — we walk you through exactly what this looks like for your practice.
        </p>
        <a href="#audit" className="btn-primary-grad inline-flex items-center gap-2 px-8 py-4 rounded-[10px] font-semibold">
          Get My Free Audit <ArrowRight size={18} />
        </a>
      </Reveal>
    </Section>
  );
}
