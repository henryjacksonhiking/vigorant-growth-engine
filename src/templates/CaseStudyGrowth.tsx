import { CSHero, CSStatRail, CSKeyResults, CSQuote, CSServicesUsed, CSGeoVisibility, CSFaqAccordion, CSRelated, CSCTABanner } from "@/components/case-study/CSShared";
import type { CaseStudy } from "@/types/case-study";

export default function CaseStudyGrowth({ study, all }: { study: CaseStudy; all: CaseStudy[] }) {
  const g = study.growth!;
  const primaryStat = study.stats[0];
  return (
    <>
      <CSHero study={study} />
      <CSStatRail study={study} />

      {/* Ambition */}
      <section className="py-16 sm:py-20" style={{ background: "hsl(248 30% 97%)" }}>
        <div className="container grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="font-mono-ui text-[11px] uppercase tracking-widest text-brand-purple mb-4">The Ambition</div>
            <h2 className="font-display font-bold text-brand-deep leading-[1.1] tracking-tight mb-6" style={{ fontSize: "clamp(26px,4vw,44px)" }}>{g.ambition_heading}</h2>
            <p className="text-ink-secondary text-[16px] leading-[1.78]">{g.ambition_body}</p>
            {primaryStat && (
              <div className="mt-8 inline-flex flex-col gap-1 bg-white rounded-2xl p-6 border border-brand-purple/20 shadow-sm">
                <span className="font-display font-bold text-brand-deep leading-none" style={{ fontSize: "clamp(42px,5vw,64px)" }}>{primaryStat.value}</span>
                <span className="font-mono-ui text-[11px] uppercase tracking-widest text-ink-secondary mt-2">{primaryStat.label}</span>
              </div>
            )}
          </div>
          <img src={g.image_src} alt={g.image_alt} loading="lazy" className="rounded-2xl object-cover w-full aspect-[4/3] shadow-xl" />
        </div>
      </section>

      {/* Strategy steps (dark) */}
      <section className="py-16 sm:py-20" style={{ background: "linear-gradient(135deg, hsl(248 49% 15%) 0%, hsl(250 45% 19%) 50%, hsl(248 49% 12%) 100%)" }}>
        <div className="container">
          <div className="max-w-[540px] mx-auto text-center mb-12 sm:mb-14">
            <div className="font-mono-ui text-[11px] uppercase tracking-widest text-brand-purple-light mb-3">The Strategy</div>
            <h2 className="font-display font-bold text-white leading-[1.1] tracking-tight" style={{ fontSize: "clamp(26px,4vw,44px)" }}>{g.strategy_heading}</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {g.strategy_steps.map((s) => (
              <div key={s.number} className="rounded-2xl p-6 sm:p-7 border border-brand-purple/20 bg-brand-deep-mid">
                <div className="font-display font-bold leading-none mb-3" style={{ fontSize: 56, color: "hsl(247 93% 64% / 0.25)" }}>{s.number}</div>
                <h3 className="font-bold text-white text-[17px] mb-3">{s.title}</h3>
                <p className="text-[14px] leading-[1.7]" style={{ color: "hsl(248 100% 88% / 0.75)" }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestone Timeline (light, between two dark sections is fine: dark→light→dark stat above is fine — note: stat rail is before ambition so order: dark stat → light ambition → dark strategy → light timeline → light key results... acceptable) */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container">
          <div className="max-w-[540px] mx-auto text-center mb-12 sm:mb-14">
            <div className="font-mono-ui text-[11px] uppercase tracking-widest text-brand-purple mb-3">The Progression</div>
            <h2 className="font-display font-bold text-brand-deep leading-[1.1] tracking-tight" style={{ fontSize: "clamp(26px,4vw,44px)" }}>Month-by-Month Milestones</h2>
          </div>

          {/* Desktop alternating */}
          <div className="hidden md:block relative max-w-3xl mx-auto">
            <div aria-hidden className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-brand-purple/30 to-transparent" />
            <ul className="space-y-2">
              {g.timeline_items.map((it, i) => (
                <li key={it.month} className="grid grid-cols-2 relative py-6">
                  <div className={i % 2 === 0 ? "pr-12 text-right" : "col-start-2 pl-12 text-left"}>
                    <div className="font-mono-ui text-[10px] uppercase tracking-widest text-brand-purple mb-2">{it.month}</div>
                    <div className="font-bold text-brand-deep text-[15px] leading-snug">{it.milestone}</div>
                    {it.metric && <div className="font-display font-bold text-brand-purple text-[20px] sm:text-[24px] mt-2">{it.metric}</div>}
                  </div>
                  <span aria-hidden className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-brand-purple ring-4 ring-white shadow-lg z-10" />
                </li>
              ))}
            </ul>
          </div>
          {/* Mobile */}
          <ul className="md:hidden border-l-2 border-brand-purple/20 pl-6 space-y-8 max-w-md mx-auto">
            {g.timeline_items.map((it) => (
              <li key={it.month} className="relative">
                <span aria-hidden className="absolute -left-[34px] top-1 w-3 h-3 rounded-full bg-brand-purple ring-4 ring-white" />
                <div className="font-mono-ui text-[10px] uppercase tracking-widest text-brand-purple mb-1">{it.month}</div>
                <div className="font-bold text-brand-deep text-[15px] leading-snug">{it.milestone}</div>
                {it.metric && <div className="font-display font-bold text-brand-purple text-[18px] mt-1">{it.metric}</div>}
              </li>
            ))}
          </ul>

          <p className="text-ink-secondary text-[16px] leading-[1.75] max-w-2xl mx-auto text-center mt-12">{g.results_narrative}</p>
        </div>
      </section>

      <CSKeyResults study={study} />
      <CSQuote study={study} />
      <CSServicesUsed study={study} />
      <CSGeoVisibility study={study} />
      <CSFaqAccordion study={study} />
      <CSRelated study={study} all={all} />
      <CSCTABanner />
    </>
  );
}
