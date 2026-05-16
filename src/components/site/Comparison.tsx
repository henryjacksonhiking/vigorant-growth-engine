import Section, { Reveal, SectionLabel, H2 } from "./Section";
import { Check, Minus } from "lucide-react";

const rows = [
  { label: "Search Visibility", traditional: "Google only", vigorant: "Google + AI engines (ChatGPT, Gemini, Perplexity)" },
  { label: "Reporting", traditional: "Monthly PDF reports", vigorant: "Live real-time dashboard" },
  { label: "Specialization", traditional: "General marketing", vigorant: "Healthcare-exclusive" },
  { label: "Lead Tracking", traditional: "Limited attribution", vigorant: "Full patient journey tracking" },
  { label: "Ad Management", traditional: "Manual optimization", vigorant: "AI-assisted bid management" },
  { label: "Content Strategy", traditional: "Generic blog posts", vigorant: "AIO/GEO-optimized answer content" },
  { label: "Local SEO", traditional: "Basic GMB management", vigorant: "Full Maps + citations + reviews ecosystem" },
  { label: "Contracts", traditional: "12-month lock-in", vigorant: "Month-to-month available" },
];

export default function Comparison() {
  return (
    <Section id="comparison" bg="secondary">
      <Reveal className="text-center max-w-3xl mx-auto">
        <SectionLabel>Why Vigorant</SectionLabel>
        <H2>Traditional Marketing vs. AI-Powered Patient Acquisition</H2>
        <p className="mt-5 text-ink-secondary text-[16px] sm:text-[17px] italic">
          Here's why practices that switch to Vigorant see results faster.
        </p>
      </Reveal>

      <Reveal className="mt-12 max-w-5xl mx-auto">
        {/* Mobile: stacked cards */}
        <div className="md:hidden space-y-4">
          {rows.map((r) => (
            <div key={r.label} className="bg-white rounded-2xl border border-brand-purple/15 p-5" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="font-bold text-brand-deep text-[15px]">{r.label}</div>
              <div className="mt-3 flex items-start gap-2">
                <Minus aria-hidden size={16} className="text-ink-secondary/60 mt-1 flex-shrink-0" />
                <div className="text-[13px] text-ink-secondary"><span className="font-mono-ui text-[10px] uppercase tracking-[0.12em] block mb-0.5 text-ink-secondary/70">Traditional</span>{r.traditional}</div>
              </div>
              <div className="mt-3 flex items-start gap-2">
                <Check aria-hidden size={16} className="text-brand-purple mt-1 flex-shrink-0" />
                <div className="text-[13px] text-brand-deep"><span className="font-mono-ui text-[10px] uppercase tracking-[0.12em] block mb-0.5 text-brand-purple">Vigorant</span>{r.vigorant}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: table */}
        <div className="hidden md:block bg-white rounded-2xl border border-brand-purple/15 overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-brand-purple/15">
                <th scope="col" className="p-5 font-mono-ui text-[11px] uppercase tracking-[0.12em] text-ink-secondary w-1/4"></th>
                <th scope="col" className="p-5 font-bold text-brand-deep text-[15px]">Traditional Agency</th>
                <th scope="col" className="p-5 font-bold text-brand-deep text-[15px] bg-brand-purple/8 border-l-2 border-brand-purple">Vigorant</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.label} className={i < rows.length - 1 ? "border-b border-brand-purple/10" : ""}>
                  <th scope="row" className="p-5 font-semibold text-brand-deep text-[14px] align-top">{r.label}</th>
                  <td className="p-5 text-ink-secondary text-[14px] align-top">
                    <span className="inline-flex items-start gap-2"><Minus aria-hidden size={16} className="text-ink-secondary/60 mt-1 flex-shrink-0" />{r.traditional}</span>
                  </td>
                  <td className="p-5 text-brand-deep text-[14px] align-top bg-brand-purple/5 border-l-2 border-brand-purple">
                    <span className="inline-flex items-start gap-2"><Check aria-hidden size={16} className="text-brand-purple mt-1 flex-shrink-0" />{r.vigorant}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </Section>
  );
}
