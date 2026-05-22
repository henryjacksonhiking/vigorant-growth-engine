import Section, { Reveal, SectionLabel, H2 } from "./Section";
import { Eye, Target, MousePointerClick, Workflow, BarChart3, Repeat, ChevronRight, Check, X } from "lucide-react";
import { GrowthArc, ConnectorPath } from "./Illustrations";

const steps = [
  { icon: Eye, title: "Visibility", body: "We make your practice discoverable on Google, Maps, and AI search engines." },
  { icon: Target, title: "Acquisition", body: "We run targeted paid campaigns that attract high-intent patients at the lowest possible cost." },
  { icon: MousePointerClick, title: "Conversion", body: "We optimize your website and patient journey to turn visitors into booked appointments." },
  { icon: Workflow, title: "Automation", body: "We automate follow-up, reminders, and reputation requests to reduce front-desk burden." },
  { icon: BarChart3, title: "Analytics", body: "We give you a live dashboard so you always know exactly where your patients are coming from." },
  { icon: Repeat, title: "Optimization", body: "We continuously refine every channel based on real data — not guesses." },
];

const before = [
  "Spending on ads with no visibility into ROI",
  "Ranking on page 2 or 3 for key procedures",
  "Website generating leads but not converting them",
  "No system for collecting reviews or following up with leads",
];

const after = [
  "Full real-time dashboard showing cost-per-patient by channel",
  "Ranking top 3 for high-value procedure keywords",
  "Website conversion rate increased by 2–3x",
  "Automated review collection generating 20+ reviews per month",
];

export default function GrowthEngine() {
  return (
    <Section id="process" bg="white">
      <Reveal className="text-center max-w-3xl mx-auto">
        <SectionLabel>Our Framework</SectionLabel>
        <H2>
          The <span className="gradient-text">Vigorant Growth Engine™</span>
        </H2>
        <p className="mt-5 text-ink-secondary text-[16px] sm:text-[17px] italic">
          A proven 6-stage system for predictable, sustainable patient acquisition.
        </p>
      </Reveal>

      <ol className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto list-none p-0">
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06} className="relative">
            <li className="list-none h-full bg-white border border-brand-purple/15 rounded-2xl p-6"
              style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="flex items-start gap-4">
                <div
                  aria-hidden
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 49% 15%))" }}
                >
                  <s.icon size={20} className="text-white" />
                </div>
                <div>
                  <span className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-brand-purple block mb-1">
                    Stage {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-extrabold text-brand-deep text-[17px] leading-tight">{s.title}</h3>
                  <p className="mt-2 text-[14px] text-ink-secondary leading-relaxed">{s.body}</p>
                </div>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-14 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-brand-purple/15 bg-brand-purple/5 p-6 sm:p-7">
            <h3 className="font-mono-ui text-[11px] uppercase tracking-[0.12em] text-ink-secondary">Before Vigorant</h3>
            <ul className="mt-4 space-y-3">
              {before.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[14px] text-ink-secondary">
                  <X aria-hidden size={16} className="mt-1 text-ink-secondary/70 flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="rounded-2xl border-2 border-brand-purple/40 p-6 sm:p-7"
            style={{ background: "linear-gradient(135deg, hsl(247 93% 64% / 0.10), hsl(248 100% 75% / 0.08))", boxShadow: "var(--shadow-card)" }}
          >
            <h3 className="font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-purple">With Vigorant</h3>
            <ul className="mt-4 space-y-3">
              {after.map((a) => (
                <li key={a} className="flex items-start gap-3 text-[14px] text-brand-deep">
                  <Check aria-hidden size={16} className="mt-1 text-brand-purple flex-shrink-0" />
                  <span className="font-semibold">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
