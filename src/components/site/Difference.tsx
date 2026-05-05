import Section, { Reveal, SectionLabel, H2 } from "./Section";
import { Brain, Stethoscope, Target, Eye } from "lucide-react";

const traditional = [
  "Monthly reports with vanity metrics",
  "Disconnected services, no attribution",
  "Quarterly strategy reviews",
  "Service-hour billing",
  "Guesswork optimization",
];
const vigorant = [
  "Live patient acquisition dashboard",
  "Fully integrated system with attribution",
  "AI optimization running daily",
  "Outcome-based measurement",
  "Predictable, repeatable growth",
];

const pillars = [
  { icon: Brain, title: "AI-Enhanced", body: "Our AI layer monitors and optimizes your campaigns daily — not monthly." },
  { icon: Stethoscope, title: "Healthcare-Only", body: "We serve one industry. Dental, chiropractic, and medical — nothing else." },
  { icon: Target, title: "ROI-First", body: "Every dollar is measured against new patients acquired, not clicks or impressions." },
  { icon: Eye, title: "Fully Transparent", body: "Live dashboard. No black boxes. You own your data." },
];

export default function Difference() {
  return (
    <Section id="why" bg="white">
      <Reveal className="text-center max-w-3xl mx-auto">
        <SectionLabel>Why Vigorant</SectionLabel>
        <H2>We're Not a Marketing Agency. We're a Patient Acquisition System.</H2>
      </Reveal>

      <Reveal delay={0.1} className="max-w-2xl mx-auto mt-12">
        <div
          className="rounded-r-2xl p-7 border-l-[3px] border-brand-purple"
          style={{ background: "linear-gradient(135deg, hsl(254 91% 23% / 0.03), hsl(248 93% 71% / 0.06))" }}
        >
          <p className="text-base text-ink leading-[1.8]">
            A patient acquisition system is a structured, repeatable marketing framework that combines AI-driven search optimization, paid advertising, and data attribution to generate a predictable flow of new patients for healthcare practices — as opposed to disconnected marketing services managed separately.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.15} className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto mt-14">
        <div className="bg-[#fafafa] rounded-2xl p-7">
          <h4 className="font-semibold text-ink-secondary mb-5">Traditional Agency</h4>
          <ul className="space-y-3">
            {traditional.map((t) => (
              <li key={t} className="flex gap-3 text-ink-muted text-[15px]">
                <span aria-hidden>✗</span>{t}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="rounded-2xl p-7 text-white"
          style={{ background: "linear-gradient(135deg, hsl(254 91% 23%), hsl(252 70% 32%))" }}
        >
          <h4 className="font-semibold mb-5">Vigorant System</h4>
          <ul className="space-y-3">
            {vigorant.map((t) => (
              <li key={t} className="flex gap-3 text-white/90 text-[15px]">
                <span className="text-brand-cyan" aria-hidden>✓</span>{t}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto mt-10">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <article className="bg-white border border-brand-purple/10 rounded-2xl p-7 h-full hover:border-brand-purple/30 transition">
              <div className="w-11 h-11 rounded-lg bg-brand-purple/10 text-brand-purple flex items-center justify-center mb-4">
                <p.icon size={20} />
              </div>
              <h3 className="text-lg font-bold text-brand-deep mb-2">{p.title}</h3>
              <p className="text-ink-secondary text-[15px] leading-relaxed">{p.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
