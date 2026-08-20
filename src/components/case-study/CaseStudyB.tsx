import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SharedFAQList from "@/components/site/SharedFAQ";
import { Reveal } from "@/components/site/Section";
import type { CaseStudyBContent, CSBCta } from "@/data/case-study-b";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono-ui text-[11px] uppercase tracking-widest text-brand-purple mb-3">{children}</div>
  );
}

function H2({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <h2
      className={`font-display font-bold leading-[1.12] tracking-tight ${onDark ? "text-white" : "text-brand-deep"}`}
      style={{ fontSize: "clamp(24px,3.6vw,40px)", letterSpacing: "-0.02em" }}
    >
      {children}
    </h2>
  );
}

/** Shared "photo pending" callout — same visual language as Template A. */
function ImageDirection({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-brand-purple/40 bg-brand-purple/5 p-6 sm:p-8">
      <div className="font-mono-ui text-[11px] uppercase tracking-widest text-brand-purple mb-2">Image Direction</div>
      <p className="text-ink-secondary italic text-[14px] sm:text-[15px] leading-[1.7]">{text}</p>
    </div>
  );
}

function Visual({ src, direction, priority }: { src?: string; direction: string; priority?: boolean }) {
  if (!src) return <ImageDirection text={direction} />;
  return (
    <figure className="m-0">
      <img
        src={src}
        alt={direction}
        width={1600}
        height={1200}
        loading={priority ? "eager" : "lazy"}
        className="w-full h-auto rounded-2xl border border-brand-purple/15 shadow-sm object-cover"
      />
      <figcaption className="mt-3 text-[13px] leading-[1.6] text-ink-secondary/80 italic">{direction}</figcaption>
    </figure>
  );
}

function PrimaryCta({ cta }: { cta: CSBCta }) {
  return (
    <Link
      to={cta.href}
      className="btn-primary-grad inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-white"
    >
      {cta.label} <ArrowRight size={16} aria-hidden />
    </Link>
  );
}

function SecondaryCta({ cta }: { cta: CSBCta }) {
  const classes =
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-brand-deep border border-brand-purple/30 bg-white hover:border-brand-purple/60 hover:bg-brand-purple/5 transition-colors";
  if (cta.href.startsWith("#")) {
    return (
      <a href={cta.href} className={classes}>
        {cta.label}
      </a>
    );
  }
  return (
    <Link to={cta.href} className={classes}>
      {cta.label}
    </Link>
  );
}

/** Count-up on scroll; falls back to the literal string when it has no digits. */
function KpiValue({ value }: { value: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(value);
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/s);

  useEffect(() => {
    if (!match) return;
    const el = ref.current;
    if (!el) return;
    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr);
    const decimals = (numStr.split(".")[1] || "").length;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 1100;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setShown(`${prefix}${(target * eased).toFixed(decimals)}${suffix}`);
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <div
      ref={ref}
      className="font-display font-bold text-brand-deep leading-none tracking-tight tabular-nums"
      style={{ fontSize: "clamp(34px,4.6vw,54px)" }}
    >
      {shown}
    </div>
  );
}

export default function CaseStudyB({ data }: { data: CaseStudyBContent }) {
  const table = data.holdingBack.comparisonTable;
  const bullets = data.holdingBack.bullets;

  return (
    <article>
      {/* 1. HERO */}
      <section className="bg-white pt-28 sm:pt-32 pb-14 sm:pb-16">
        <div className="container">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 font-mono-ui text-[11px] uppercase tracking-widest text-brand-purple hover:gap-3 transition-all mb-8"
          >
            <ArrowLeft size={14} aria-hidden /> All Case Studies
          </Link>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="min-w-0">
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
                className="font-display font-bold text-brand-deep leading-[1.08] tracking-tight mb-5"
                style={{ fontSize: "clamp(28px,4.4vw,48px)", letterSpacing: "-0.03em" }}
              >
                {data.hero.h1}
              </h1>
              {data.hero.paragraphs.map((p, i) => (
                <p key={i} className="text-ink-secondary text-[16px] sm:text-[17px] leading-[1.8] mb-4 last:mb-0">
                  {p}
                </p>
              ))}
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryCta cta={data.hero.ctaPrimary} />
                <SecondaryCta cta={data.hero.ctaSecondary} />
              </div>
            </div>
            <div className="min-w-0">
              <Visual src={data.hero.image} direction={data.hero.imageDirection} priority />
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRACTICE BACKGROUND AND AMBITION */}
      <section className="py-14 sm:py-16" style={{ background: "hsl(248 30% 97%)" }}>
        <div className="container max-w-[820px]">
          <SectionLabel>Background &amp; Ambition</SectionLabel>
          <H2>{data.practiceBackground.h2}</H2>
          <p className="mt-5 text-ink-secondary text-[16px] sm:text-[17px] leading-[1.8]">
            {data.practiceBackground.paragraph}
          </p>
        </div>
      </section>

      {/* 3. THE PROBLEM STORY */}
      <section className="bg-white py-14 sm:py-16">
        <div className="container max-w-[820px]">
          <SectionLabel>The Problem</SectionLabel>
          <H2>{data.problemStory.h2}</H2>
          <div className="mt-5">
            {data.problemStory.paragraphs.map((p, i) => (
              <p key={i} className="text-ink-secondary text-[16px] sm:text-[17px] leading-[1.8] mb-4 last:mb-0">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHAT WAS HOLDING THE PRACTICE BACK */}
      <section className="py-14 sm:py-16" style={{ background: "hsl(248 30% 97%)" }}>
        <div className="container max-w-[900px]">
          <SectionLabel>What Was Holding Them Back</SectionLabel>
          <H2>{data.holdingBack.h2}</H2>
          {data.holdingBack.intro && (
            <p className="mt-5 text-ink-secondary text-[16px] sm:text-[17px] leading-[1.8]">
              {data.holdingBack.intro}
            </p>
          )}

          {table && (
            <div className="mt-8 -mx-4 sm:mx-0 px-4 sm:px-0 overflow-x-auto">
              <table className="w-full min-w-[600px] border-collapse text-left">
                <thead>
                  <tr>
                    {[table.leftHeader, table.rightHeader].map((c) => (
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
                  {table.rows.map((r) => (
                    <tr key={r.left} className="border-b border-brand-purple/10 last:border-0">
                      <td className="py-4 pr-6 text-[15px] leading-[1.6] align-top font-semibold text-brand-deep w-[38%]">
                        {r.left}
                      </td>
                      <td className="py-4 pr-6 text-[15px] leading-[1.6] align-top text-ink-secondary">{r.right}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {bullets && bullets.length > 0 && (
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 bg-white border border-brand-purple/15 rounded-xl px-4 py-3.5 text-[15px] leading-[1.6] text-brand-deep font-medium"
                >
                  <span aria-hidden className="w-2 h-2 rounded-full bg-brand-purple mt-2 flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          )}

          {data.holdingBack.closingLine && (
            <p className="mt-8 text-ink-secondary text-[16px] sm:text-[17px] leading-[1.8]">
              {data.holdingBack.closingLine}
            </p>
          )}
        </div>
      </section>

      {/* 5. THE TURNING POINT */}
      <section className="bg-white py-14 sm:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="min-w-0">
              <SectionLabel>The Turning Point</SectionLabel>
              <H2>{data.turningPoint.h2}</H2>
              <p className="mt-5 text-ink-secondary text-[16px] sm:text-[17px] leading-[1.8]">
                {data.turningPoint.paragraph}
              </p>
            </div>
            {(data.turningPoint.image || data.turningPoint.imageDirection) && (
              <div className="min-w-0">
                <Visual src={data.turningPoint.image} direction={data.turningPoint.imageDirection ?? ""} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. STRATEGY AND IMPLEMENTATION */}
      <section className="py-14 sm:py-16" style={{ background: "hsl(248 30% 97%)" }}>
        <div className="container">
          <SectionLabel>The Strategy</SectionLabel>
          <H2>{data.strategy.h2}</H2>
          {data.strategy.intro && (
            <p className="mt-5 max-w-[820px] text-ink-secondary text-[16px] sm:text-[17px] leading-[1.8]">
              {data.strategy.intro}
            </p>
          )}
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.strategy.cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <div className="ui-card h-full p-6">
                  <div className="font-mono-ui text-[11px] uppercase tracking-widest text-brand-purple mb-3">
                    {c.label ?? String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="ui-card-heading text-[17px] text-brand-deep mb-2">{c.title}</h3>
                  <p className="text-ink-secondary text-[15px] leading-[1.7]">{c.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. RESULTS AND BUSINESS IMPACT */}
      <section id="results" className="bg-white py-14 sm:py-16">
        <div className="container">
          <SectionLabel>The Results</SectionLabel>
          <H2>{data.results.h2}</H2>
          {data.results.intro && (
            <p className="mt-5 max-w-[820px] text-ink-secondary text-[16px] sm:text-[17px] leading-[1.8]">
              {data.results.intro}
            </p>
          )}
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
            {data.results.kpis.map((k, i) => (
              <Reveal key={k.label} delay={i * 0.06}>
                <div className="border-t-2 border-brand-purple/25 pt-5">
                  <KpiValue value={k.value} />
                  <div className="font-mono-ui text-[11px] uppercase tracking-widest text-ink-secondary mt-3 leading-[1.6]">
                    {k.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {data.results.impactParagraph && (
            <p className="mt-10 max-w-[820px] text-ink-secondary text-[16px] sm:text-[17px] leading-[1.8]">
              {data.results.impactParagraph}
            </p>
          )}

          {data.servicesUsed.length > 0 && (
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
          )}
        </div>
      </section>

      {/* 8a. QUOTE BAND (dark) */}
      <section className="py-16 sm:py-20 bg-brand-deep">
        <div className="container max-w-[900px] text-center">
          <blockquote
            className="font-display font-bold text-white leading-[1.35] tracking-tight"
            style={{ fontSize: "clamp(22px,3.4vw,38px)", letterSpacing: "-0.02em" }}
          >
            “{data.quoteAndTakeaway.quote.text}”
          </blockquote>
          <div className="font-mono-ui text-[11px] uppercase tracking-widest text-white/70 mt-7">
            — {data.quoteAndTakeaway.quote.attribution}
            {data.quoteAndTakeaway.quote.note && (
              <span className="block normal-case tracking-normal italic text-white/50 mt-2">
                ({data.quoteAndTakeaway.quote.note})
              </span>
            )}
          </div>
        </div>
      </section>

      {/* 8b. FINAL TAKEAWAY + CTAs (light) */}
      <section className="bg-white py-14 sm:py-16">
        <div className="container max-w-[820px]">
          <SectionLabel>The Takeaway</SectionLabel>
          <H2>{data.quoteAndTakeaway.h2}</H2>
          <div className="mt-5">
            {data.quoteAndTakeaway.paragraphs.map((p, i) => (
              <p key={i} className="text-ink-secondary text-[16px] sm:text-[17px] leading-[1.8] mb-4 last:mb-0">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryCta cta={data.quoteAndTakeaway.ctaPrimary} />
            <SecondaryCta cta={data.quoteAndTakeaway.ctaSecondary} />
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-16 sm:py-20" style={{ background: "hsl(248 30% 97%)" }}>
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
