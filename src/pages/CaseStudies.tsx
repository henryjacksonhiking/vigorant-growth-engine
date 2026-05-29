import { Helmet } from "react-helmet-async";
import GlobalFx from "@/components/site/GlobalFx";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import FinalCTA from "@/components/site/FinalCTA";
import ImpactSection from "@/components/ui/impact-section";

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
        <ImpactSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

