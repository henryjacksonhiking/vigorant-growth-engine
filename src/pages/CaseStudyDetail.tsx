import { Helmet } from "react-helmet-async";
import { Navigate, useParams } from "react-router-dom";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { caseStudies, findCaseStudy } from "@/data/case-studies";
import { buildCaseStudySchema } from "@/types/case-study";
import { caseStudyNarratives } from "@/data/case-study-narratives";
import CaseStudyNarrative from "@/components/case-study/CaseStudyNarrative";
import CaseStudyTurnaround from "@/templates/CaseStudyTurnaround";
import CaseStudyGrowth from "@/templates/CaseStudyGrowth";
import CaseStudyDeepDive from "@/templates/CaseStudyDeepDive";
import { CSRelated } from "@/components/case-study/CSShared";

export default function CaseStudyDetail() {
  const { specialty, slug } = useParams<{ specialty?: string; slug: string }>();
  const study = findCaseStudy(slug, specialty);

  if (!study) return <Navigate to="/case-studies" replace />;
  // If routed via legacy /case-studies/:slug, redirect to canonical
  if (!specialty) return <Navigate to={`/case-studies/${study.specialty}/${study.slug}`} replace />;

  const narrative = caseStudyNarratives[study.slug];

  const Tpl =
    study.template === "turnaround" ? CaseStudyTurnaround :
    study.template === "growth" ? CaseStudyGrowth :
    CaseStudyDeepDive;

  return (
    <>
      <Helmet>
        <title>{study.meta.title}</title>
        <meta name="description" content={study.meta.description} />
        <link rel="canonical" href={`https://vigorant.com/case-studies/${study.specialty}/${study.slug}`} />
        <meta property="og:title" content={study.meta.title} />
        <meta property="og:description" content={study.meta.description} />
        <meta property="og:image" content={study.meta.og_image || study.hero.hero_image_src} />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(buildCaseStudySchema(study))}</script>
      </Helmet>
      <a href="#main" className="skip-link">Skip to main content</a>
      <Nav />
      <main id="main">
        {narrative ? (
          <>
            <CaseStudyNarrative data={narrative} />
            <CSRelated study={study} all={caseStudies} />
          </>
        ) : (
          <Tpl study={study} all={caseStudies} />
        )}
      </main>
      <Footer />
    </>
  );
}

