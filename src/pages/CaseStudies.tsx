import { Helmet } from "react-helmet-async";
import GlobalFx from "@/components/site/GlobalFx";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import FinalCTA from "@/components/site/FinalCTA";
import Section, { Reveal, SectionLabel, H2 } from "@/components/site/Section";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CASE_STUDIES } from "@/data/caseStudies";

export default function CaseStudies() {
  return (
    <>
      <Helmet>
        <title>Healthcare Marketing Case Studies | Vigorant</title>
        <meta name="description" content="Real results from real dental, medical, and chiropractic practices. Cost-per-lead, ROAS, and ranking outcomes from Vigorant clients." />
        <link rel="canonical" href="https://vigorant.com/case-studies" />
      </Helmet>
      <a href="#main" className="skip-link">Skip to main content</a>
      <GlobalFx />
      <Nav />
      <main id="main" className="pt-28">
        <Section bg="white">
          <Reveal className="text-center max-w-3xl mx-auto">
            <SectionLabel>Case Studies</SectionLabel>
            <H2>Real Results From Real Practices</H2>
            <p className="mt-5 text-ink-secondary text-[16px] sm:text-[17px]">
              Every case below is from a real Vigorant client engagement.
            </p>
          </Reveal>

          <div className="ui-card-grid mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.06} className="h-full">
                <Link
                  to={`/case-studies/${s.slug}`}
                  className="ui-card group transition-all duration-300 hover:-translate-y-1 hover:border-brand-purple/40"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="inline-flex min-h-[24px] items-center font-mono-ui text-[10px] uppercase tracking-[0.12em] text-brand-purple bg-brand-purple/10 self-start px-2 py-0.5 rounded-full">
                    {s.tag}
                  </div>
                  <h3 className="ui-card-heading mt-3 text-[18px]">{s.client}</h3>
                  <p className="ui-card-text text-[14px]">{s.challenge}</p>
                  <ul className="ui-list">
                    {s.results.slice(0, 2).map((r) => (
                      <li key={r} className="ui-list-item text-[13px] text-brand-deep">
                        <span aria-hidden className="ui-list-icon text-brand-purple">▲</span>
                        <span className="font-semibold">{r}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="ui-card-cta text-brand-purple text-[14px] group-hover:gap-2.5 transition-all">
                    Read Full Case Study <ArrowRight aria-hidden size={16} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
