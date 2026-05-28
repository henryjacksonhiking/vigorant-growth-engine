import Section, { Reveal, SectionLabel, H2 } from "./Section";
import { ArrowRight } from "lucide-react";

interface Study {
  type: string;
  tag: string;
  problem: string;
  strategy: string;
  results: string[];
  initial: string;
}

const studies: Study[] = [
  {
    type: "Dental Implant Specialist — California",
    tag: "Dental SEO + Paid Ads",
    initial: "DI",
    problem: "The practice was spending $8,000/month on Google Ads with a $187 cost-per-lead and inconsistent implant case volume.",
    strategy: "We rebuilt their campaign structure, rewrote landing pages for conversion, and launched a local SEO push targeting 'dental implants [city]' keywords.",
    results: ["Cost-per-lead dropped from $187 → $71", "+43% increase in implant consultations", "Ranked top 3 for primary implant keyword in 60 days"],
  },
  {
    type: "6-Location DSO — Texas",
    tag: "Multi-Location SEO + Google Ads",
    initial: "DG",
    problem: "The group had no centralized marketing strategy. Each location ran independently with no shared analytics or brand consistency.",
    strategy: "We implemented a unified dashboard, consolidated ad accounts, and deployed a location-specific local SEO strategy for all 6 offices.",
    results: ["2.8x ROAS across all locations", "+89 new patients per month across the group", "61% reduction in average cost-per-lead"],
  },
  {
    type: "Sports Chiropractic Practice — Florida",
    tag: "AI Visibility + Local SEO",
    initial: "SC",
    problem: "The practice relied entirely on word-of-mouth. They had zero Google Maps presence and were invisible in local search.",
    strategy: "We built out their Google Business Profile, launched an AIO content strategy, and optimized their website for local intent keywords.",
    results: ["Ranked #1 for primary chiropractic keyword in 45 days", "+44% increase in organic phone calls", "Now appearing in Google AI Overviews for key queries"],
  },
];

export default function MiniCaseStudies() {
  return (
    <Section id="case-studies" bg="white">
      <Reveal className="text-center max-w-3xl mx-auto">
        <SectionLabel>Case Studies</SectionLabel>
        <H2>Real Results From Real Practices</H2>
        <p className="mt-5 text-ink-secondary text-[16px] sm:text-[17px] italic">
          Every result below is from a real Vigorant client. Real metrics. Real growth.
        </p>
      </Reveal>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {studies.map((s, i) => (
          <Reveal key={s.type} delay={i * 0.06} className="h-full">
            <article
              className="h-full bg-white border border-brand-purple/15 rounded-2xl p-6 sm:p-7 flex flex-col"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <header className="flex items-center gap-3">
                <div
                  aria-hidden
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-[13px] flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 49% 15%))" }}
                >
                  {s.initial}
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-brand-deep text-[14px] leading-tight">{s.type}</div>
                  <div className="mt-1 inline-flex font-mono-ui text-[10px] uppercase tracking-[0.12em] text-brand-purple bg-brand-purple/10 px-2 py-0.5 rounded-full">
                    {s.tag}
                  </div>
                </div>
              </header>

              <dl className="mt-5 space-y-4 flex-1">
                <div>
                  <dt className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-ink-secondary">Problem</dt>
                  <dd className="mt-1 text-[14px] text-ink-secondary leading-relaxed">{s.problem}</dd>
                </div>
                <div>
                  <dt className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-ink-secondary">Strategy</dt>
                  <dd className="mt-1 text-[14px] text-ink-secondary leading-relaxed">{s.strategy}</dd>
                </div>
                <div>
                  <dt className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-brand-purple">Results</dt>
                  <dd>
                    <ul className="mt-2 space-y-1.5">
                      {s.results.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-[13px] text-brand-deep">
                          <span aria-hidden className="text-brand-purple mt-0.5">▲</span>
                          <span className="font-semibold">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>

              <a href="#" className="mt-6 inline-flex items-center gap-1.5 font-semibold text-brand-purple text-[14px] hover:gap-2.5 transition-all min-h-[44px]">
                Read Full Case Study <ArrowRight aria-hidden size={16} />
              </a>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="text-center mt-10">
        <a href="/case-studies" className="inline-flex items-center gap-2 font-semibold text-brand-deep hover:text-brand-purple transition-colors min-h-[44px]">
          View All Case Studies <ArrowRight aria-hidden size={18} />
        </a>
      </Reveal>
    </Section>
  );
}
