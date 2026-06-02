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
          <div
            aria-hidden
            className="absolute top-0 bottom-0 w-px hidden md:block z-0"
            style={{ left: "50%", transform: "translateX(-50%)", background: "hsl(var(--brand-purple) / 0.15)" }}
          />

          {rows.map((r, i) => {
            const isLast = i === rows.length - 1;
            return (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group relative z-10 flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-0"
              >
                {/* Traditional */}
                <div
                  className="flex-1 rounded-2xl p-5 md:p-6 transition-transform duration-300 md:group-hover:-translate-x-2 md:text-right md:mr-8"
                  style={{
                    background: "hsl(0 0% 100%)",
                    border: "1px solid hsl(var(--brand-purple) / 0.10)",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <div className="flex md:flex-row-reverse items-center gap-3">
                    <span
                      className="w-7 h-7 rounded-full inline-flex items-center justify-center shrink-0"
                      style={{ background: "hsl(var(--text-secondary) / 0.10)" }}
                    >
                      <X aria-hidden size={14} className="text-ink-secondary/70" />
                    </span>
                    <div>
                      <span className="font-mono-ui text-[10px] uppercase tracking-[0.14em] text-ink-secondary/70 block mb-0.5">
                        Traditional Agency
                      </span>
                      <p className="text-ink-secondary text-[14px]">{r.traditional}</p>
                    </div>
                  </div>
                </div>

                {/* VS badge */}
                <div
                  className="absolute top-1/2 hidden md:flex items-center justify-center text-[10px] font-extrabold tracking-wider z-20 shadow-md"
                  style={{
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 40,
                    height: 40,
                    borderRadius: "9999px",
                    background: "hsl(var(--brand-deep))",
                    color: "white",
                    border: "4px solid hsl(var(--surface-secondary))",
                  }}
                >
                  VS
                </div>

                {/* Vigorant */}
                <div
                  className="flex-1 rounded-2xl p-5 md:p-6 transition-all duration-300 md:group-hover:translate-x-2 md:ml-8 relative overflow-hidden"
                  style={{
                    background: "hsl(0 0% 100%)",
                    border: "2px solid transparent",
                    boxShadow: "var(--shadow-card), 0 0 0 1px hsl(var(--brand-purple) / 0.10) inset",
                  }}
                >
                  <div className="flex items-center gap-3 relative">
                    <span
                      className="w-7 h-7 rounded-full inline-flex items-center justify-center shrink-0"
                      style={{ background: "hsl(var(--brand-purple) / 0.12)" }}
                    >
                      <Check aria-hidden size={14} strokeWidth={3} className="text-brand-purple" />
                    </span>
                    <div>
                      <span className="font-mono-ui text-[10px] uppercase tracking-[0.14em] block mb-0.5 text-brand-purple">
                        {r.label}
                      </span>
                      <p className="text-[14px] font-semibold text-brand-deep">
                        {r.vigorant}
                      </p>
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
