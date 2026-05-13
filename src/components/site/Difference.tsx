import Section, { Reveal, SectionLabel, H2 } from "./Section";
import { Brain, Stethoscope, TrendingUp, Eye, Check, X } from "lucide-react";
import { useTilt } from "./GlobalFx";

const traditional = [
  "Monthly reports with vanity metrics",
  "Disconnected services, no attribution",
  "Quarterly optimization reviews",
  "Focus on hours billed, not patients acquired",
  "Guesswork targeting",
];
const vigorant = [
  "Live patient acquisition dashboard",
  "Fully integrated system with attribution",
  "AI optimization running daily",
  "Outcome-based measurement only",
  "Predictable, repeatable growth",
];

const pillars = [
  { icon: Brain, title: "AI-Enhanced", body: "Our AI layer monitors and adjusts your campaigns daily — not monthly." },
  { icon: Stethoscope, title: "Healthcare-Only", body: "We serve one industry. Dental, chiropractic, and medical — nothing else." },
  { icon: TrendingUp, title: "ROI-First", body: "Every dollar measured against new patients acquired, not clicks." },
  { icon: Eye, title: "Fully Transparent", body: "Live dashboard. No black boxes. You own your data." },
];

export default function Difference() {
  return (
    <Section id="why" bg="white">
      <Reveal className="text-center max-w-3xl mx-auto">
        <SectionLabel>Why Vigorant</SectionLabel>
        <H2>
          We're Not a Marketing Agency.<br />
          <span className="gradient-text">We're a Patient Acquisition System.</span>
        </H2>
      </Reveal>

      <Reveal delay={0.1} className="max-w-[680px] mx-auto mt-12">
        <div className="rounded-r-xl px-7 py-6"
          style={{ background: "linear-gradient(135deg, hsl(248 49% 15% / 0.03), hsl(247 93% 64% / 0.06))", borderLeft: "3px solid hsl(247 93% 64%)" }}>
          <div className="font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-purple mb-2">Definition</div>
          <p className="text-[16px] text-ink leading-[1.8]">
            A patient acquisition system is a structured, repeatable marketing framework that combines AI-driven search optimization, paid advertising, and data attribution to generate a predictable flow of new patients for healthcare practices — as opposed to disconnected marketing services managed separately.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-16">
        <Reveal>
          <div className="rounded-2xl bg-white border border-black/5 p-7">
            <div className="font-bold text-ink-secondary mb-4">Traditional Agency</div>
            <ul className="space-y-3">
              {traditional.map((t) => (
                <li key={t} className="flex items-start gap-3 text-ink-secondary">
                  <X size={18} className="text-[#e24b4a] flex-shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl p-7 text-white"
            style={{ background: "linear-gradient(135deg, hsl(248 49% 15%), hsl(252 44% 33%))", boxShadow: "0 20px 60px hsl(248 49% 15% / 0.25)" }}>
            <div className="font-bold mb-4">Vigorant System</div>
            <ul className="space-y-3">
              {vigorant.map((t) => (
                <li key={t} className="flex items-start gap-3 text-white/90">
                  <Check size={18} className="text-brand-cyan flex-shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto mt-16">
        {pillars.map((p, i) => <Pillar key={p.title} {...p} delay={i * 0.05} />)}
      </div>
    </Section>
  );
}

function Pillar({ icon: Icon, title, body, delay }: any) {
  const ref = useTilt<HTMLDivElement>(5);
  return (
    <Reveal delay={delay}>
      <div ref={ref} className="tilt-spotlight bg-white rounded-2xl p-7 border border-brand-purple/12 transition-transform duration-300"
        style={{ boxShadow: "var(--shadow-card)" }}>
        <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
          style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 49% 15%))" }}>
          <Icon size={20} className="text-white" />
        </div>
        <h3 className="font-extrabold text-brand-deep text-lg">{title}</h3>
        <p className="text-ink-secondary text-[15px] mt-2 leading-relaxed">{body}</p>
      </div>
    </Reveal>
  );
}
