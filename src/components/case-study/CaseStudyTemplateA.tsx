import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SharedFAQList from "@/components/site/SharedFAQ";
import type { CaseStudyContent } from "@/types/case-study-content";

/* ---------- primitives (no case-study-specific copy lives here) ---------- */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="font-mono-ui text-[11px] uppercase tracking-widest text-brand-purple mb-3">{children}</div>;
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-display font-bold text-brand-deep leading-[1.12] tracking-tight mb-5"
      style={{ fontSize: "clamp(24px,3.6vw,40px)", letterSpacing: "-0.02em" }}
    >
      {children}
    </h2>
  );
}

function Prose({ items }: { items: string[] }) {
  return (
    <>
      {items.map((p, i) => (
        <p key={i} className="text-ink-secondary text-[16px] sm:text-[17px] leading-[1.8] mb-4 last:mb-0">
          {p}
        </p>
      ))}
    </>
  );
}

function ImageDirection({ text }: { text: string }) {
  return (
    <figure className="my-10 rounded-2xl border-2 border-dashed border-brand-purple/30 bg-brand-purple/[0.03] p-6 sm:p-8">
      <figcaption className="font-mono-ui text-[11px] uppercase tracking-widest text-brand-purple mb-2">
        Image Direction
      </figcaption>
      <p className="text-[14px] sm:text-[15px] leading-[1.7] text-ink-secondary italic">{text}</p>
    </figure>
  );
}

/* ---------------------------- Template A -------------------------------- */

export default function CaseStudyTemplateA({ data }: { data: CaseStudyContent }) {
  return (
    <article>
      {/* 1 + 2. HERO INTRO, CTA, HERO IMAGE DIRECTION */}
      <section className="bg-white pt-28 sm:pt-32 pb-14 sm:pb-16">
        <div className="container max-w-[820px]">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 font-mono-ui text-[11px] uppercase tracking-widest text-brand-purple hover:gap-3 transition-all mb-8"
          >
            <ArrowLeft size={14} aria-hidden /> All Case Studies
          </Link>

          <div className="flex flex-wrap gap-2 mb-6">
            {data.tags.map((t) => (
              <span
                key={t}
                className="font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-purple bg-brand-purple/8 border border-brand-purple/20 rounded-full px-3.5 py-1.5"
              >
                {t}
              </span>
            ))}
          </div>

          <h1
            className="font-display font-bold text-brand-deep leading-[1.08] tracking-tight mb-7"
            style={{ fontSize: "clamp(30px,5vw,56px)", letterSpacing: "-0.03em" }}
          >
            {data.hero.h1}
          </h1>

          <Prose items={data.hero.paragraphs} />

          <div className="mt-8">
            <Link
              to={data.primaryCta.href}
              className="btn-primary-grad inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-white"
            >
              {data.primaryCta.label} <ArrowRight size={16} aria-hidden />
            </Link>
          </div>

          <ImageDirection text={data.heroImageDirection} />
        </div>
      </section>

      {/* 3. CHALLENGE AND CONTEXT */}
      <section className="py-14 sm:py-16" style={{ background: "hsl(248 30% 97%)" }}>
        <div className="container max-w-[820px]">
          <SectionLabel>The Challenge</SectionLabel>
          <H2>{data.challenge.h2}</H2>
          {data.challenge.h3 && (
            <h3 className="font-display font-bold text-brand-deep text-[19px] sm:text-[21px] mb-4">
              {data.challenge.h3}
            </h3>
          )}
          <Prose items={data.challenge.paragraphs} />
        </div>
      </section>

      {/* 4. BEFORE AND AFTER */}
      <section className="bg-white py-14 sm:py-16">
        <div className="container max-w-[900px]">
          <SectionLabel>Before &amp; After</SectionLabel>
          <H2>What Changed</H2>
          <div className="mt-8 -mx-4 sm:mx-0 px-4 sm:px-0 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-left">
              <thead>
                <tr>
                  {["Metric", "Before", "After"].map((c) => (
                    <th
                      key={c}
                      className="font-mono-ui text-[11px] uppercase tracking-widest text-brand-purple border-b border-brand-purple/20 pb-3 pr-6 whitespace-nowrap"
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.beforeAfter.rows.map((r) => (
                  <tr key={r.metric} className="border-b border-brand-purple/10 last:border-0">
                    <td className="py-4 pr-6 text-[15px] leading-[1.6] align-top font-semibold text-brand-deep">
                      {r.metric}
                    </td>
                    <td className="py-4 pr-6 text-[15px] leading-[1.6] align-top text-ink-secondary">{r.before}</td>
                    <td className="py-4 pr-6 text-[15px] leading-[1.6] align-top text-brand-deep font-medium">
                      {r.after}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. STRATEGY AND IMPLEMENTATION */}
      <section className="py-14 sm:py-16" style={{ background: "hsl(248 30% 97%)" }}>
        <div className="container max-w-[820px]">
          <SectionLabel>Strategy &amp; Implementation</SectionLabel>
          <H2>{data.strategy.h2}</H2>
          <div className="mt-8 space-y-6">
            {data.strategy.steps.map((s, i) => (
              <div key={s.h3} className="ui-card p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <span className="font-mono-ui text-[12px] text-brand-purple bg-brand-purple/8 border border-brand-purple/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="ui-card-heading text-[18px] text-brand-deep mb-2">{s.h3}</h3>
                    <p className="text-ink-secondary text-[15px] sm:text-[16px] leading-[1.75]">{s.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Prose items={data.strategy.paragraphs} />
          </div>
          <ImageDirection text={data.strategy.imageDirection} />
        </div>
      </section>

      {/* 6. RESULTS STAT TRAIL */}
      <section className="bg-white py-14 sm:py-16">
        <div className="container max-w-[1000px]">
          <SectionLabel>The Results</SectionLabel>
          <H2>What the Work Produced</H2>

          <ol className="mt-10 relative flex flex-col md:flex-row md:items-start gap-8 md:gap-0">
            <span
              aria-hidden
              className="absolute md:top-5 md:left-0 md:right-0 md:h-px left-5 top-0 bottom-0 w-px md:w-auto bg-brand-purple/20"
            />
            {data.statTrail.map((s) => (
              <li key={s.label} className="relative flex-1 md:px-4 pl-14 md:pl-4 md:pt-0">
                <span
                  aria-hidden
                  className="absolute left-[13px] top-2 md:static md:mb-6 md:block w-2.5 h-2.5 rounded-full bg-brand-purple ring-4 ring-white"
                />
                <div
                  className="font-display font-bold text-brand-deep leading-none tracking-tight"
                  style={{ fontSize: "clamp(32px,4.2vw,48px)" }}
                >
                  {s.value}
                </div>
                <div className="font-mono-ui text-[11px] uppercase tracking-widest text-ink-secondary mt-3 leading-[1.6]">
                  {s.label}
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-12">
            <div className="font-mono-ui text-[11px] uppercase tracking-widest text-ink-secondary mb-4">
              Services Used
            </div>
            <div className="flex flex-wrap gap-3">
              {data.servicesUsed.map((svc) => (
                <span
                  key={svc}
                  className="inline-flex items-center gap-2 font-semibold text-[13px] sm:text-[14px] text-brand-deep bg-white border border-brand-purple/20 rounded-full px-4 py-2 shadow-sm"
                >
                  <span aria-hidden className="w-2 h-2 rounded-full bg-brand-purple flex-shrink-0" />
                  {svc}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. QUOTE + CONCLUSION */}
      <section className="py-14 sm:py-16" style={{ background: "hsl(248 30% 97%)" }}>
        <div className="container max-w-[820px]">
          <figure className="rounded-2xl border-l-4 border-brand-purple bg-white p-6 sm:p-8 shadow-sm">
            <blockquote className="font-display font-bold text-brand-deep italic leading-[1.45] text-[19px] sm:text-[23px]">
              “{data.quote.text}”
            </blockquote>
            <figcaption className="font-mono-ui text-[11px] uppercase tracking-widest text-ink-secondary mt-5">
              — {data.quote.attribution}
              {data.quote.note && (
                <span className="block normal-case tracking-normal italic text-ink-secondary/70 mt-2">
                  ({data.quote.note})
                </span>
              )}
            </figcaption>
          </figure>

          <div className="mt-10">
            <Prose items={[data.conclusion.paragraph]} />
          </div>

          <div className="mt-8">
            <Link
              to={data.conclusion.ctaHref}
              className="btn-primary-grad inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-white"
            >
              {data.conclusion.ctaLabel} <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container">
          <div className="max-w-[580px] mx-auto text-center">
            <div className="font-mono-ui text-[11px] uppercase tracking-widest text-brand-purple mb-3">FAQ</div>
            <h2
              className="font-display font-bold text-brand-deep leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(26px,4vw,44px)" }}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <SharedFAQList faqs={data.faqs} defaultOpen={null} />
        </div>
      </section>
    </article>
  );
}
