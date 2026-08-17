import { Helmet } from "react-helmet-async";
import { Navigate, useParams } from "react-router-dom";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { caseStudies, findCaseStudy } from "@/data/case-studies";
import { buildCaseStudySchema } from "@/types/case-study";
import { caseStudyNarratives } from "@/data/case-study-narratives";
import { caseStudyBContent } from "@/data/case-study-b";
import CaseStudyNarrative from "@/components/case-study/CaseStudyNarrative";
import CaseStudyB from "@/components/case-study/CaseStudyB";
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

  // Template seam: a case study's `template` field decides which component renders it.
  const templateB = caseStudyBContent[study.slug];
  const narrative = templateB ? undefined : caseStudyNarratives[study.slug];
...
      <main id="main">
        {templateB ? (
          <>
            <CaseStudyB data={templateB} />
            <CSRelated study={study} all={caseStudies} />
          </>
        ) : narrative ? (
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

