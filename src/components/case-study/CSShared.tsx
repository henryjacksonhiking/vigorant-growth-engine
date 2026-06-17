import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Check } from "lucide-react";
import SharedFAQList from "@/components/site/SharedFAQ";
import type { CaseStudy } from "@/types/case-study";

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/* ---------- HERO ---------- */
export function CSHero({ study }: { study: CaseStudy }) {
  return (
    <section className="relative bg-white pt-28 pb-16 sm:pb-20 overflow-hidden">
      <div aria-hidden className="orb-a absolute -top-32 -right-32 w-[420px] h-[420px] pointer-events-none" />
      <div className="container relative">
        <nav aria-label="Breadcrumb" className="font-mono-ui text-[11px] uppercase tracking-widest text-brand-purple/70 mb-6 sm:mb-8 flex flex-wrap items-center gap-2">
          <Link to="/" className="hover:text-brand-purple">Home</Link>
          <span className="opacity-60">›</span>
          <Link to="/case-studies" className="hover:text-brand-purple">Case Studies</Link>
          <span className="opacity-60">›</span>
          <Link to={`/case-studies?specialty=${study.specialty}`} className="hover:text-brand-purple">{cap(study.specialty)}</Link>
          <span className="opacity-60">›</span>
          <span className="text-ink-secondary">{study.practice.type}</span>
        </nav>

        <span className="inline-flex items-center gap-2 font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-purple bg-brand-purple/8 border border-brand-purple/20 rounded-full px-3.5 py-1.5 mb-6 sm:mb-8">
          <span className="pulse-dot" aria-hidden /> {study.tag}
        </span>

        <h1 className="font-display font-bold text-brand-deep leading-[1.06] tracking-tight mb-6" style={{ fontSize: "clamp(32px,5.5vw,62px)", letterSpacing: "-0.03em" }}>
          {study.hero.headline}
        </h1>
        <p className="text-ink-secondary text-[16px] sm:text-[18px] leading-[1.7] max-w-[640px] mb-8">{study.hero.subheadline}</p>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono-ui text-[12px] text-ink-secondary mb-10">
          <span>{study.practice.anonymised ? study.practice.type : study.practice.display_name ?? study.practice.type}</span>
          <span className="opacity-50">·</span><span>{study.practice.location}</span>
          <span className="opacity-50">·</span><span>{study.practice.size}</span>
          <span className="opacity-50">·</span><span>Published {study.published}</span>
        </div>

        <div className="inline-flex flex-col items-start gap-1 px-6 py-4 rounded-2xl border border-brand-purple/20 bg-brand-purple/5 mb-10">
          <span className="font-display font-bold text-brand-deep leading-none" style={{ fontSize: "clamp(40px,6vw,72px)" }}>{study.hero.primary_metric.value}</span>
          <span className="font-mono-ui text-[11px] uppercase tracking-widest text-ink-secondary mt-2">{study.hero.primary_metric.label}</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link to="/free-audit" className="btn-primary-grad inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-white">Talk to Our Team <ArrowRight size={16} /></Link>
          <Link to="/case-studies" className="inline-flex items-center justify-center border border-brand-purple/40 text-brand-purple font-semibold px-7 py-3.5 rounded-full hover:bg-brand-purple/6 transition-colors">View All Case Studies</Link>
        </div>

        <img src={study.hero.hero_image_src} alt={study.hero.hero_image_alt} loading="eager" className="mt-12 sm:mt-14 rounded-2xl w-full aspect-[21/9] sm:aspect-[21/8] object-cover object-center shadow-2xl" />
      </div>
    </section>
  );
}

/* ---------- STAT RAIL ---------- */
export function CSStatRail({ study }: { study: CaseStudy }) {
  return (
    <section className="py-12 sm:py-14 relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(248 49% 15%) 0%, hsl(250 45% 19%) 50%, hsl(248 49% 12%) 100%)" }}>
      <div aria-hidden className="grid-overlay absolute inset-0 opacity-30" />
      <div className="container relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {study.stats.map((s) => (
          <div key={s.label}>
            <div className="font-display font-bold text-white leading-none" style={{ fontSize: "clamp(28px,4vw,52px)" }}>{s.value}</div>
            <div className="font-mono-ui text-[11px] uppercase tracking-[0.12em] text-white/75 mt-3">{s.label}</div>
            {s.source && <div className="text-[11px] text-white/45 mt-1">{s.source}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- KEY RESULTS ---------- */
export function CSKeyResults({ study }: { study: CaseStudy }) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container">
        <div className="max-w-[540px] mx-auto text-center mb-10">
          <div className="font-mono-ui text-[11px] uppercase tracking-widest text-brand-purple mb-3">Key Results</div>
          <h2 className="font-display font-bold text-brand-deep leading-[1.1] tracking-tight" style={{ fontSize: "clamp(26px,4vw,44px)" }}>The Measurable Outcomes</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {study.key_results.map((r) => (
            <div key={r.label} className="ui-card p-6 sm:p-7">
              <div className="font-display font-bold text-brand-deep leading-none tracking-tight" style={{ fontSize: "clamp(34px,4.5vw,56px)" }}>{r.metric}</div>
              <div className="font-mono-ui text-[11px] uppercase tracking-widest text-brand-purple mt-3">{r.label}</div>
              {r.context && <p className="text-ink-secondary text-[14px] leading-[1.6] mt-2">{r.context}</p>}
            </div>
          ))}
        </div>
        <p className="text-ink-secondary text-[16px] leading-[1.75] max-w-2xl mx-auto text-center mt-10">{study.results_summary}</p>
      </div>
    </section>
  );
}

/* ---------- QUOTE ---------- */
export function CSQuote({ study }: { study: CaseStudy }) {
  if (!study.quote) return null;
  return (
    <section className="py-12 sm:py-14 relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(248 49% 15%), hsl(250 45% 19%))" }}>
      <div aria-hidden className="orb-b absolute -bottom-20 -left-20 w-[360px] h-[360px] pointer-events-none" />
      <div className="container relative z-10 max-w-[780px] mx-auto text-center">
        <div className="font-display font-bold select-none" style={{ fontSize: 100, lineHeight: 0.6, color: "hsl(247 93% 64% / 0.3)" }}>“</div>
        <blockquote className="font-display font-bold text-white leading-[1.3] italic my-6" style={{ fontSize: "clamp(20px,3vw,30px)" }}>
          "{study.quote.text}"
        </blockquote>
        <div className="font-mono-ui text-[11px] uppercase tracking-widest text-white/50 mt-6">— {study.quote.attribution}, {study.quote.role}</div>
        {study.practice.anonymised && (
          <p className="text-[11px] text-white/35 font-mono-ui mt-4 italic">Quote used with practice consent. Practice identity anonymised per client agreement.</p>
        )}
      </div>
    </section>
  );
}

/* ---------- SERVICES USED ---------- */
export function CSServicesUsed({ study }: { study: CaseStudy }) {
  return (
    <section className="py-12 sm:py-14" style={{ background: "hsl(248 30% 97%)" }}>
      <div className="container">
        <div className="font-mono-ui text-[11px] uppercase tracking-widest text-ink-secondary mb-6 text-center">Services Used in This Engagement</div>
        <div className="flex flex-wrap gap-3 justify-center">
          {study.services_used.map((svc) => (
            <span key={svc} className="inline-flex items-center gap-2 font-semibold text-[13px] sm:text-[14px] text-brand-deep bg-white border border-brand-purple/20 rounded-full px-4 py-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-purple flex-shrink-0" />{svc}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- GEO VISIBILITY ---------- */
export function CSGeoVisibility({ study }: { study: CaseStudy }) {
  if (!study.geo_visibility?.present) return null;
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="container max-w-3xl mx-auto">
        <div className="rounded-2xl p-6 sm:p-8 border border-brand-purple/20 bg-brand-purple/5">
          <div className="font-mono-ui text-[11px] uppercase tracking-widest text-brand-purple mb-4">AI Search Visibility</div>
          <h3 className="font-display font-bold text-brand-deep text-[20px] sm:text-[22px] mb-4">This Practice Now Appears in AI-Generated Answers</h3>
          <p className="text-ink-secondary text-[15px] leading-[1.75] mb-6">{study.geo_visibility.description}</p>
          <div className="flex flex-wrap gap-3">
            {study.geo_visibility.platforms.map((p) => (
              <span key={p} className="inline-flex items-center gap-2 font-mono-ui text-[12px] text-brand-deep bg-white border border-brand-purple/15 rounded-full px-4 py-2 shadow-sm">{p}</span>
            ))}
          </div>
          <p className="text-[11px] text-ink-secondary/60 italic mt-5">AI search visibility depends on content authority, Schema.org markup, and ongoing optimisation. Results vary by market and query type.</p>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
export function CSFaqAccordion({ study }: { study: CaseStudy }) {
  return (
    <section className="py-16 sm:py-20" style={{ background: "hsl(248 30% 97%)" }}>
      <div className="container">
        <div className="max-w-[580px] mx-auto text-center mb-2">
          <div className="font-mono-ui text-[11px] uppercase tracking-widest text-brand-purple mb-3">FAQ</div>
          <h2 className="font-display font-bold text-brand-deep leading-[1.1] tracking-tight" style={{ fontSize: "clamp(26px,4vw,44px)" }}>Frequently Asked Questions</h2>
        </div>
        <SharedFAQList faqs={study.faqs} />
      </div>
    </section>
  );
}

/* ---------- RELATED ---------- */
export function CSRelated({ study, all }: { study: CaseStudy; all: CaseStudy[] }) {
  const related = all.filter((c) => study.related.includes(c.slug));
  if (!related.length) return null;
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="container">
        <div className="font-mono-ui text-[11px] uppercase tracking-widest text-ink-secondary mb-8 text-center">More Case Studies</div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {related.map((c) => <CSCard key={c.slug} study={c} />)}
        </div>
        <div className="mt-8 text-center">
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-brand-purple font-semibold hover:gap-3 transition-all">View All Case Studies <ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- INDEX CARD ---------- */
export function CSCard({ study }: { study: CaseStudy }) {
  const primary = study.key_results[0];
  return (
    <Link to={`/case-studies/${study.specialty}/${study.slug}`} className="group ui-card p-6 sm:p-7 flex flex-col h-full hover:-translate-y-1 transition-transform">
      <div className="flex items-center justify-between mb-5">
        <span className="font-mono-ui text-[10px] uppercase tracking-[0.14em] text-brand-purple bg-brand-purple/8 border border-brand-purple/15 rounded-full px-3 py-1">{cap(study.specialty)}</span>
        <span className="font-mono-ui text-[10px] uppercase tracking-widest text-ink-secondary">{study.tag}</span>
      </div>
      <div className="font-display font-bold text-brand-deep leading-none mb-3" style={{ fontSize: "clamp(32px,4vw,44px)" }}>{primary?.metric}</div>
      <div className="font-mono-ui text-[11px] uppercase tracking-widest text-ink-secondary mb-4">{primary?.label}</div>
      <h3 className="ui-card-heading text-[17px] text-brand-deep group-hover:text-brand-purple transition-colors">{study.hero.headline}</h3>
      <p className="ui-card-text text-ink-secondary text-[14px] mt-3 line-clamp-3">{study.practice.type} · {study.practice.location}</p>
      <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-brand-purple text-sm font-semibold">Read case study <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></span>
    </Link>
  );
}

/* ---------- CTA BANNER ---------- */
export function CSCTABanner({ headline = "Results Like These Start With One Conversation." }: { headline?: string }) {
  return (
    <section className="py-20 sm:py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(248 49% 15%) 0%, hsl(250 45% 19%) 50%, hsl(248 49% 12%) 100%)" }}>
      <div aria-hidden className="orb-a absolute -top-32 -right-32 w-[420px] h-[420px] pointer-events-none" />
      <div aria-hidden className="orb-b absolute -bottom-32 -left-32 w-[420px] h-[420px] pointer-events-none" />
      <div className="container relative z-10 text-center max-w-[680px] mx-auto">
        <div className="font-mono-ui text-[11px] uppercase tracking-[0.18em] text-white/55 mb-6">READY TO GROW?</div>
        <h2 className="font-display font-bold text-white leading-[1.08] tracking-tight mb-6" style={{ fontSize: "clamp(28px,4.5vw,52px)" }}>{headline}</h2>
        <p className="text-[hsl(248_100%_88%)] text-[16px] sm:text-[17px] leading-[1.7] max-w-[520px] mx-auto mb-10">
          Vigorant is a healthcare-exclusive growth marketing agency. We build AI-augmented, human-led marketing systems for dental, medical, and chiropractic practices.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/free-audit" className="btn-primary-grad inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 rounded-full font-bold text-white">Get a Free Practice Audit</Link>
          <Link to="/case-studies" className="inline-flex items-center justify-center border border-white/20 text-white/85 font-semibold px-8 sm:px-10 py-4 rounded-full hover:bg-white/10 transition-all">View All Case Studies</Link>
        </div>
        <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 justify-center font-mono-ui text-[11px] uppercase tracking-wide text-white/55">
          <span className="inline-flex items-center gap-1.5"><ShieldCheck size={12} aria-hidden /> HIPAA-Aware</span>
          <span>·</span><span>Healthcare-Exclusive</span>
          <span>·</span><span>AI + Human Strategy</span>
          <span>·</span><span>No Guaranteed Results</span>
        </div>
      </div>
    </section>
  );
}

/* re-export utility */
export { Check };
