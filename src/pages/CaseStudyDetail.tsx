import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import FinalCTA from "@/components/site/FinalCTA";
import Section, { Reveal, SectionLabel } from "@/components/site/Section";
import { ArrowLeft, Check } from "lucide-react";
import { CASE_STUDIES } from "@/data/caseStudies";

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const study = CASE_STUDIES.find((s) => s.slug === slug);

  if (!study) return <Navigate to="/case-studies" replace />;

  return (
    <>
      <Helmet>
        <title>{`${study.client} — Case Study | Vigorant`}</title>
        <meta name="description" content={study.challenge.slice(0, 155)} />
        <link rel="canonical" href={`https://vigorant.com/case-studies/${study.slug}`} />
      </Helmet>
      <a href="#main" className="skip-link">Skip to main content</a>

      <Nav />
      <main id="main" className="pt-28">
        <Section bg="white">
          <Reveal className="max-w-3xl mx-auto">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-brand-purple font-semibold text-[14px] hover:gap-3 transition-all">
              <ArrowLeft aria-hidden size={16} /> All case studies
            </Link>
            <div className="mt-6">
              <SectionLabel>{study.tag}</SectionLabel>
              <h1
                className="mt-3 font-extrabold text-brand-deep leading-[1.1] tracking-tight"
                style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.03em" }}
              >
                {study.client}
              </h1>
              <p className="mt-3 font-mono-ui text-[12px] uppercase tracking-[0.12em] text-ink-secondary">
                {study.location}
              </p>
            </div>

            <div className="mt-10 grid gap-8">
              <article>
                <h2 className="font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-purple">Challenge</h2>
                <p className="mt-3 text-ink-secondary text-[16px] leading-[1.8]">{study.challenge}</p>
              </article>
              <article>
                <h2 className="font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-purple">Solution</h2>
                <p className="mt-3 text-ink-secondary text-[16px] leading-[1.8]">{study.solution}</p>
              </article>
              <article>
                <h2 className="font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-purple">Results</h2>
                <ul className="ui-list mt-4">
                  {study.results.map((r) => (
                    <li
                      key={r}
                      className="ui-list-item rounded-xl border border-brand-purple/15 bg-brand-purple/5 px-4 py-3 text-brand-deep font-semibold text-[15px]"
                    >
                      <Check size={18} className="ui-list-icon text-brand-purple" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </Reveal>
        </Section>
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
