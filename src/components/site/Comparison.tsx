import Section, { Reveal, SectionLabel, H2 } from "./Section";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

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

      <div className="mt-14 max-w-5xl mx-auto">
        <div className="relative flex flex-col gap-5">
          {/* center spine */}
          <div aria-hidden className="absolute left-1/2 top-0 bottom-0 w-px bg-brand-purple/15 hidden md:block -translate-x-1/2 z-0" />

          {rows.map((r, i) => {
            const isLast = i === rows.length - 1;
            return (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group relative z-10 grid md:grid-cols-2 gap-3 md:gap-12 items-center"
              >
                {/* Traditional */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-brand-purple/10 transition-all duration-300 md:group-hover:-translate-x-2 md:text-right"
                  style={{ boxShadow: "var(--shadow-card)" }}>
                  <div className="flex md:flex-row-reverse items-start md:items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-ink-secondary/10 flex items-center justify-center shrink-0">
                      <X aria-hidden size={14} className="text-ink-secondary/70" />
                    </div>
                    <div>
                      <span className="font-mono-ui text-[10px] uppercase tracking-[0.14em] text-ink-secondary/70 block mb-0.5">Traditional Agency</span>
                      <p className="text-ink-secondary text-[14px]">{r.traditional}</p>
                    </div>
                  </div>
                </div>

                {/* VS badge */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-deep text-white items-center justify-center text-[10px] font-extrabold border-4 border-surface-secondary hidden md:flex shadow-md z-20 tracking-wider">
                  VS
                </div>

                {/* Vigorant */}
                <div className={`p-5 md:p-6 rounded-2xl border-2 transition-all duration-300 md:group-hover:translate-x-2 md:group-hover:shadow-[0_20px_40px_-15px_hsl(var(--brand-purple)/0.25)] relative overflow-hidden
                  ${isLast
                    ? "bg-brand-deep border-brand-purple text-white"
                    : "bg-white border-transparent ring-1 ring-brand-purple/10"}`}
                  style={!isLast ? { boxShadow: "var(--shadow-card)" } : undefined}>
                  {isLast && (
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full md:group-hover:translate-x-full transition-transform duration-[1100ms]" />
                  )}
                  <div className="flex items-center gap-3 relative">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${isLast ? "bg-brand-purple" : "bg-brand-purple/10"}`}>
                      <Check aria-hidden size={14} className={isLast ? "text-white" : "text-brand-purple"} strokeWidth={3} />
                    </div>
                    <div>
                      <span className={`font-mono-ui text-[10px] uppercase tracking-[0.14em] block mb-0.5 ${isLast ? "text-white/60" : "text-brand-purple"}`}>{r.label}</span>
                      <p className={`text-[14px] font-semibold ${isLast ? "text-white" : "text-brand-deep"}`}>{r.vigorant}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
