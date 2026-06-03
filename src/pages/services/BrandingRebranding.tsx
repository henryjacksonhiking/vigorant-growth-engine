import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import GlobalFx from "@/components/site/GlobalFx";
import StickyCTA from "@/components/site/StickyCTA";
import { servicePages } from "@/data/servicePages";
import { VigorantServicePage } from "@/components/VigorantServiceTemplates";

export default function BrandingRebranding() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <GlobalFx />
      <Nav />
      <div id="main">
        <VigorantServicePage page={servicePages.brandingRebranding} />
      </div>
      <StickyCTA />
      <Footer />
    </>
  );
}
