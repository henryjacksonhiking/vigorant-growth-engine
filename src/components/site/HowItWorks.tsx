import Section, { Reveal, SectionLabel, H2 } from "./Section";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ConnectorPath } from "./Illustrations";

const steps = [
  { n: "01", badge: "Week 1", title: "Practice Audit & Market Analysis", body: "We audit your digital presence, analyze local competition, and identify the patient acquisition gaps costing you revenue." },
  { n: "02", badge: "Days 7–30", title: "System Build & Launch", body: "We build or optimize your website, set up AI-optimized SEO, launch targeted ads, and configure call tracking and attribution." },
  { n: "03", badge: "Ongoing", title: "AI-Powered Optimization", body: "Our AI monitors rankings, ad performance, and patient calls weekly — surfacing improvements and reallocating budget automatically." },
  { n: "04", badge: "Monthly", title: "Transparent Reporting & Growth", body: "You see every metric that matters — patient volume, cost per acquisition, revenue attribution — in a live dashboard." },
];

export default function HowItWorks() {
  return (
    <Section id="how-it-works" bg="secondary">
      <Reveal className="text-center max-w-3xl mx-auto">
        <SectionLabel>The Process</SectionLabel>
        <H2>From audit to growth engine<br /><span className="gradient-text">in 4 steps.</span></H2>
      </Reveal>

      <ol className="relative mt-14 sm:mt-20 max-w-6xl mx-auto list-none p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
        <ConnectorPath
          aria-hidden
          className="hidden lg:block absolute top-3 left-[6%] right-[6%] h-12 pointer-events-none"
        />

        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.1} className="text-center relative">
            <li className="list-none">
              <div className="relative w-14 h-14 mx-auto">
                <div aria-hidden className="absolute inset-[-6px] rounded-full border-[1.5px] border-dashed border-brand-purple/40 spin-slow" />
                <div
                  aria-hidden
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-mono-ui font-bold text-lg relative z-10"
                  style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 49% 15%))", boxShadow: "0 6px 20px hsl(247 93% 64% / 0.35)" }}
                >
                  {s.n}
                </div>
              </div>
              <span className="inline-block mt-5 font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-purple bg-brand-purple/10 rounded-full px-3 py-1">
                <span className="sr-only">Step {Number(s.n)}, </span>{s.badge}
              </span>
              <h3 className="mt-3 font-extrabold text-brand-deep text-lg leading-tight">{s.title}</h3>
              <p className="mt-2 text-ink-secondary text-[14px] leading-relaxed">{s.body}</p>
            </li>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={0.3} className="text-center mt-14 sm:mt-16">
        <p className="text-ink-secondary mb-5 px-4">Start with a free audit — we walk you through exactly what this looks like for your practice.</p>
        <a href="#audit" className="btn-primary-grad inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold min-h-[48px]">
          Get My Free Audit <ArrowRight aria-hidden size={18} />
        </a>
      </Reveal>
    </Section>
  );
}
