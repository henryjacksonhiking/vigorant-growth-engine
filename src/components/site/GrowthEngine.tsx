import Section, { Reveal, SectionLabel, H2 } from "./Section";
import { Eye, Target, MousePointerClick, Workflow, BarChart3, Repeat, ChevronRight } from "lucide-react";

const steps = [
  { icon: Eye, title: "Visibility", sub: "AI + Local SEO" },
  { icon: Target, title: "Acquisition", sub: "Paid Ads + Targeting" },
  { icon: MousePointerClick, title: "Conversion", sub: "Website + CRO" },
  { icon: Workflow, title: "Automation", sub: "Follow-up + Workflows" },
  { icon: BarChart3, title: "Analytics", sub: "Dashboard + Reporting" },
  { icon: Repeat, title: "Optimization", sub: "Continuous Improvement" },
];

export default function GrowthEngine() {
  return (
    <Section id="growth-engine" bg="white">
      <Reveal className="text-center max-w-3xl mx-auto">
        <SectionLabel>Our Framework</SectionLabel>
        <H2>
          The <span className="gradient-text">Vigorant Growth Engine™</span>
        </H2>
        <p className="mt-5 text-ink-secondary text-[16px] sm:text-[17px]">
          A six-stage operating system that turns local search demand into booked patient appointments — predictably.
        </p>
      </Reveal>

      <ol className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-2 max-w-6xl mx-auto list-none p-0">
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06} className="relative">
            <li className="list-none h-full bg-white border border-brand-purple/15 rounded-2xl p-5 text-center"
              style={{ boxShadow: "var(--shadow-card)" }}>
              <div
                aria-hidden
                className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 49% 15%))" }}
              >
                <s.icon size={20} className="text-white" />
              </div>
              <h3 className="mt-3 font-extrabold text-brand-deep text-[15px] leading-tight">
                <span className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-brand-purple block mb-1">
                  Stage {String(i + 1).padStart(2, "0")}
                </span>
                {s.title}
              </h3>
              <p className="mt-1.5 text-[12px] text-ink-secondary italic">{s.sub}</p>
            </li>
            {i < steps.length - 1 && (
              <ChevronRight
                aria-hidden
                size={20}
                className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 text-brand-purple/60"
              />
            )}
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
