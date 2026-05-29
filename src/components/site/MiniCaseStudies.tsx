import Section, { Reveal, SectionLabel, H2 } from "./Section";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

interface Study {
  type: string;
  tag: string;
  summary: string;
  headline: { metric: string; label: string };
  results: string[];
  initial: string;
  slug: string;
}

const studies: Study[] = [
  {
    type: "Dental Implant Specialist",
    tag: "Dental SEO + Paid Ads",
    initial: "DI",
    slug: "dental-implant-specialist-california",
    summary:
      "Rebuilt campaign structure and launched a local SEO push targeting high-intent implant keywords.",
    headline: { metric: "$71", label: "Cost-per-lead (from $187)" },
    results: ["+43% implant consultations", "Top 3 ranking in 60 days"],
  },
  {
    type: "6-Location DSO — Texas",
    tag: "Multi-Location SEO",
    initial: "DG",
    slug: "6-location-dso-texas",
    summary:
      "Unified dashboard, consolidated ad accounts, and deployed location-specific SEO across all 6 offices.",
    headline: { metric: "2.8x", label: "ROAS across all locations" },
    results: ["+89 new patients/month", "61% lower cost-per-lead"],
  },
  {
    type: "Sports Chiropractic — Florida",
    tag: "AI Visibility + Local SEO",
    initial: "SC",
    slug: "sports-chiropractic-florida",
    summary:
      "Built out Google Business Profile and launched an AIO content strategy for local intent keywords.",
    headline: { metric: "#1", label: "Ranked in 45 days" },
    results: ["+44% organic phone calls", "Featured in AI Overviews"],
  },
];

export default function MiniCaseStudies() {
  return (
    <Section id="case-studies" bg="white">
      <Reveal className="text-center max-w-3xl mx-auto">
        <SectionLabel>Case Studies</SectionLabel>
        <H2>Real Results From Real Practices</H2>
        <p className="mt-5 text-ink-secondary text-[16px] sm:text-[17px]">
          Every result below is from a real Vigorant client.
        </p>
      </Reveal>

      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {studies.map((s, i) => (
          <Reveal key={s.type} delay={i * 0.06} className="h-full">
            <article
              className="group relative h-full flex flex-col rounded-2xl bg-white border border-brand-purple/10 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-purple/30"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              {/* Header */}
              <header className="flex items-center gap-3">
                <div
                  aria-hidden
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold text-[13px] flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 49% 15%))" }}
                >
                  {s.initial}
                </div>
                <div className="min-w-0">
                  <div className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-brand-purple">
                    {s.tag}
                  </div>
                  <h3 className="mt-0.5 font-bold text-brand-deep text-[15px] leading-snug truncate">
                    {s.type}
                  </h3>
                </div>
              </header>

              {/* Headline metric */}
              <div className="mt-6 rounded-xl bg-brand-purple/5 border border-brand-purple/10 px-5 py-4">
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-bold text-brand-deep text-[40px] leading-none tracking-tight">
                    {s.headline.metric}
                  </span>
                  <TrendingUp size={18} className="text-brand-purple" aria-hidden />
                </div>
                <div className="mt-2 text-[13px] text-ink-secondary font-medium">
                  {s.headline.label}
                </div>
              </div>

              {/* Summary */}
              <p className="mt-5 text-[14px] leading-relaxed text-ink-secondary">
                {s.summary}
              </p>

              {/* Secondary results */}
              <ul className="mt-5 space-y-2 flex-1">
                {s.results.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-[13px] text-brand-deep">
                    <span aria-hidden className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-purple flex-shrink-0" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                to={`/case-studies/${s.slug}`}
                className="mt-6 pt-5 border-t border-brand-purple/10 inline-flex items-center gap-1.5 text-brand-purple text-[14px] font-semibold group-hover:gap-2.5 transition-all"
              >
                Read full case study <ArrowRight aria-hidden size={15} />
              </Link>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="text-center mt-12">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 font-semibold text-brand-deep hover:text-brand-purple transition-colors min-h-[44px]"
        >
          View All Case Studies <ArrowRight aria-hidden size={18} />
        </Link>
      </Reveal>
    </Section>
  );
}
