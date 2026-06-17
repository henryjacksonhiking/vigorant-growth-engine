import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { CSHero, CSStatRail, CSKeyResults, CSServicesUsed, CSGeoVisibility, CSFaqAccordion, CSRelated, CSCTABanner } from "@/components/case-study/CSShared";
import type { CaseStudy } from "@/types/case-study";

function renderProblem(text: string) {
  const words = text.trim().split(/\s+/);
  if (words.length < 4) return text;
  const head = words.slice(0, -3).join(" ");
  const tail = words.slice(-3).join(" ");
  return (
    <>
      {head}{" "}
      <span style={{ background: "linear-gradient(90deg, hsl(247 93% 64%), hsl(248 100% 75%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{tail}</span>
    </>
  );
}

export default function CaseStudyDeepDive({ study, all }: { study: CaseStudy; all: CaseStudy[] }) {
  const d = study.deep_dive!;
  const [open, setOpen] = useState(0);
  const isPositive = (change: string) => /^[+#]|↑|new/i.test(change.trim()) || /^\+/.test(change.trim()) || /positions|stars|implementation|channel|%/i.test(change);
  const isNegative = (change: string) => /^-|↓|decrease/i.test(change.trim()) && !/^\+/.test(change.trim());

  return (
    <>
      <CSHero study={study} />

      {/* Problem Statement */}
      <section className="relative overflow-hidden py-20 sm:py-24" style={{ background: "linear-gradient(135deg, hsl(248 49% 15%) 0%, hsl(250 45% 19%) 50%, hsl(248 49% 12%) 100%)" }}>
        <div aria-hidden className="grid-overlay absolute inset-0 opacity-30" />
        <div aria-hidden className="orb-a absolute -top-20 -right-20 w-[360px] h-[360px] pointer-events-none" />
        <div aria-hidden className="orb-b absolute -bottom-20 -left-20 w-[360px] h-[360px] pointer-events-none" />
        <div className="container relative z-10 max-w-[860px] mx-auto">
          <div className="font-mono-ui text-[11px] uppercase tracking-[0.18em] text-white/55 mb-6 sm:mb-8 text-center">THE PROBLEM</div>
          <h2 className="font-display font-bold text-white leading-[1.08] tracking-tight text-center mb-8 sm:mb-10" style={{ fontSize: "clamp(28px,5vw,62px)" }}>
            {renderProblem(d.problem_statement)}
          </h2>
          <p className="text-[17px] leading-[1.75] max-w-[640px] mx-auto text-center" style={{ color: "hsl(248 100% 88% / 0.75)" }}>{d.problem_context}</p>
          <img src={d.image_src} alt={d.image_alt} loading="lazy" className="mt-12 sm:mt-14 rounded-2xl w-full aspect-[21/9] sm:aspect-[21/8] object-cover shadow-2xl" />
        </div>
      </section>

      <CSStatRail study={study} />

      {/* Methodology Accordion */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container max-w-3xl mx-auto">
          <div className="max-w-[540px] mx-auto text-center mb-12 sm:mb-14">
            <div className="font-mono-ui text-[11px] uppercase tracking-widest text-brand-purple mb-3">The Methodology</div>
            <h2 className="font-display font-bold text-brand-deep leading-[1.1] tracking-tight" style={{ fontSize: "clamp(26px,4vw,44px)" }}>{d.methodology_heading}</h2>
          </div>
          <div>
            {d.methodology_steps.map((s, i) => {
              const isOpen = open === i;
              return (
                <div key={s.step} className="border border-brand-purple/15 rounded-2xl mb-3 overflow-hidden bg-white">
                  <button onClick={() => setOpen(isOpen ? -1 : i)} className="w-full px-5 sm:px-6 py-5 flex items-center gap-4 cursor-pointer hover:bg-brand-purple/[0.03] transition-colors text-left" aria-expanded={isOpen}>
                    <span className="w-8 h-8 rounded-lg flex items-center justify-center font-mono-ui text-[12px] font-bold text-white flex-shrink-0" style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 49% 15%))" }}>{s.step}</span>
                    <span className="font-bold text-brand-deep text-[15px] sm:text-[16px] flex-1">{s.title}</span>
                    <ChevronDown size={20} className="text-brand-purple transition-transform flex-shrink-0" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0)" }} aria-hidden />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6">
                      <p className="text-ink-secondary text-[15px] leading-[1.75]">{s.body}</p>
                      {s.chips && s.chips.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {s.chips.map((c) => (
                            <span key={c} className="font-mono-ui text-[11px] text-brand-deep bg-brand-purple/8 border border-brand-purple/15 rounded-full px-3 py-1">{c}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Data Results Table */}
      <section className="py-16 sm:py-20" style={{ background: "hsl(248 30% 97%)" }}>
        <div className="container">
          <div className="max-w-[540px] mx-auto text-center mb-10">
            <div className="font-mono-ui text-[11px] uppercase tracking-widest text-brand-purple mb-3">The Evidence</div>
            <h2 className="font-display font-bold text-brand-deep leading-[1.1] tracking-tight" style={{ fontSize: "clamp(26px,4vw,44px)" }}>Before vs. After — The Data</h2>
          </div>
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden border border-brand-purple/15 shadow-sm bg-white overflow-x-auto">
            <table className="w-full text-left min-w-[560px]">
              <thead className="bg-brand-deep text-white">
                <tr>
                  {["Metric", "Before", "After", "Change"].map((h) => (
                    <th key={h} className="font-mono-ui text-[11px] uppercase tracking-widest py-4 px-6 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {d.results_data_table.map((row, i) => (
                  <tr key={row.metric} className={i % 2 === 0 ? "bg-white" : "bg-[hsl(248_30%_97%)]"}>
                    <td className="font-semibold text-brand-deep text-[14px] py-4 px-6 border-b border-brand-purple/8">{row.metric}</td>
                    <td className="text-ink-secondary text-[14px] py-4 px-6 border-b border-brand-purple/8">{row.before}</td>
                    <td className="font-semibold text-brand-deep text-[14px] py-4 px-6 border-b border-brand-purple/8">{row.after}</td>
                    <td className="font-bold text-[14px] py-4 px-6 border-b border-brand-purple/8" style={{ color: isNegative(row.change) ? "hsl(0 70% 50%)" : isPositive(row.change) ? "hsl(142 71% 35%)" : "hsl(248 49% 15%)" }}>{row.change}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[12px] text-ink-secondary/60 font-mono-ui italic mt-4 text-center">All metrics are from real client data. Practice identity anonymised. Results reflect this specific engagement and are not guaranteed for other practices.</p>
        </div>
      </section>

      {/* Insight pull-quote */}
      <section className="relative overflow-hidden py-16 sm:py-20" style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 49% 15%))" }}>
        <div aria-hidden className="orb-a absolute -top-20 -right-20 w-[360px] h-[360px] pointer-events-none opacity-50" />
        <div aria-hidden className="orb-b absolute -bottom-20 -left-20 w-[360px] h-[360px] pointer-events-none opacity-50" />
        <div className="container relative z-10 max-w-[760px] mx-auto text-center">
          <div className="font-mono-ui text-[11px] uppercase tracking-[0.18em] text-white/55 mb-6 sm:mb-8">THE INSIGHT</div>
          <blockquote className="font-display font-bold text-white leading-[1.2] italic mb-6" style={{ fontSize: "clamp(20px,3.5vw,38px)" }}>"{d.insight_quote}"</blockquote>
          <div className="font-mono-ui text-[12px] uppercase tracking-widest text-white/55">— {d.insight_attribution}</div>
        </div>
      </section>

      <CSKeyResults study={study} />
      <CSServicesUsed study={study} />
      <CSGeoVisibility study={study} />
      <CSFaqAccordion study={study} />
      <CSRelated study={study} all={all} />
      <CSCTABanner />
    </>
  );
}
