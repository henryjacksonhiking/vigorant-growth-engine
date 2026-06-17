import * as Icons from "lucide-react";
import { TrendingDown, TrendingUp, X, CheckCircle2, ArrowRight } from "lucide-react";
import { CSHero, CSStatRail, CSKeyResults, CSQuote, CSServicesUsed, CSGeoVisibility, CSFaqAccordion, CSRelated, CSCTABanner } from "@/components/case-study/CSShared";
import type { CaseStudy } from "@/types/case-study";

export default function CaseStudyTurnaround({ study, all }: { study: CaseStudy; all: CaseStudy[] }) {
  const t = study.turnaround!;
  return (
    <>
      <CSHero study={study} />
      <CSStatRail study={study} />

      {/* Situation */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container grid lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-start">
          <div>
            <div className="font-mono-ui text-[11px] uppercase tracking-widest text-brand-purple mb-4">The Situation</div>
            <h2 className="font-display font-bold text-brand-deep leading-[1.1] tracking-tight mb-6" style={{ fontSize: "clamp(26px,4vw,44px)" }}>{t.situation_heading}</h2>
            <p className="text-ink-secondary text-[16px] leading-[1.78]">{t.situation_body}</p>
          </div>
          <img src={t.before_image_src} alt={t.before_image_alt} loading="lazy" className="rounded-2xl object-cover w-full aspect-[4/3] shadow-xl lg:sticky lg:top-28" />
        </div>
      </section>

      {/* Before / After split panel */}
      <section className="relative grid lg:grid-cols-2 min-h-[520px] lg:min-h-[600px]">
        <div className="px-6 sm:px-12 py-12 sm:py-14" style={{ background: "hsl(248 30% 97%)" }}>
          <div className="font-mono-ui text-[11px] uppercase tracking-widest mb-4 sm:mb-6" style={{ color: "hsl(38 92% 45%)" }}>BEFORE VIGORANT</div>
          <TrendingDown className="mb-4" size={32} style={{ color: "hsl(38 92% 45%)" }} aria-hidden />
          <ul className="space-y-4">
            {t.before_items.map((i) => (
              <li key={i} className="flex gap-3 items-start">
                <X size={20} className="mt-0.5 shrink-0" style={{ color: "hsl(38 92% 45%)" }} aria-hidden />
                <span className="text-[15px] text-brand-deep font-medium leading-[1.6]">{i}</span>
              </li>
            ))}
          </ul>
        </div>
        <div aria-hidden className="hidden lg:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 flex-col items-center z-20 pointer-events-none">
          <div className="flex-1 w-px bg-gradient-to-b from-transparent to-brand-purple/40" />
          <div className="w-10 h-10 rounded-full bg-white border-2 border-brand-purple flex items-center justify-center shadow-lg"><ArrowRight size={16} className="text-brand-purple" /></div>
          <div className="flex-1 w-px bg-gradient-to-b from-brand-purple/40 to-transparent" />
        </div>
        <div className="px-6 sm:px-12 py-12 sm:py-14" style={{ background: "linear-gradient(135deg, hsl(248 49% 15%), hsl(250 45% 19%))" }}>
          <div className="font-mono-ui text-[11px] uppercase tracking-widest text-brand-purple-light mb-4 sm:mb-6">WITH VIGORANT</div>
          <TrendingUp className="text-brand-purple-light mb-4" size={32} aria-hidden />
          <ul className="space-y-4">
            {t.after_items.map((i) => (
              <li key={i} className="flex gap-3 items-start">
                <CheckCircle2 size={20} className="text-brand-purple-light mt-0.5 shrink-0" aria-hidden />
                <span className="text-[15px] text-white font-medium leading-[1.6]">{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Intervention steps */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container">
          <div className="max-w-[540px] mx-auto text-center mb-12 sm:mb-14">
            <div className="font-mono-ui text-[11px] uppercase tracking-widest text-brand-purple mb-3">The Intervention</div>
            <h2 className="font-display font-bold text-brand-deep leading-[1.1] tracking-tight" style={{ fontSize: "clamp(26px,4vw,44px)" }}>{t.intervention_heading}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.intervention_steps.map((s, i) => {
              const Icon = (Icons as any)[s.icon] ?? Icons.Sparkles;
              return (
                <div key={s.title} className="ui-card p-6 sm:p-7">
                  <div className="w-12 h-12 rounded-xl mb-5 flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 49% 15%))" }}>
                    <Icon size={20} className="text-white" aria-hidden />
                  </div>
                  <div className="font-mono-ui text-[10px] uppercase tracking-widest text-brand-purple mb-2">Step {String(i + 1).padStart(2, "0")}</div>
                  <h3 className="ui-card-heading text-[17px]">{s.title}</h3>
                  <p className="ui-card-text mt-2">{s.body}</p>
                </div>
              );
            })}
          </div>
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
