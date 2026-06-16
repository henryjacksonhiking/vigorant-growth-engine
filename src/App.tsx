import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import DarkSectionTagger from "./components/DarkSectionTagger";
import CardGridAligner from "./components/CardGridAligner";
import GlobalFx from "./components/site/GlobalFx";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import ForPractices from "./pages/ForPractices.tsx";
import MoreNewPatients from "./pages/MoreNewPatients.tsx";
import OnlineVisibility from "./pages/OnlineVisibility.tsx";
import MarketingRoi from "./pages/MarketingRoi.tsx";
import LeadConversion from "./pages/LeadConversion.tsx";
import OnlineReputation from "./pages/OnlineReputation.tsx";
import PredictablePatientFlow from "./pages/PredictablePatientFlow.tsx";
import Solutions from "./pages/Solutions.tsx";
import SolutionsDental from "./pages/SolutionsDental.tsx";
import SolutionsChiropractic from "./pages/SolutionsChiropractic.tsx";
import SolutionsMedical from "./pages/SolutionsMedical.tsx";
import ScaleYourPractice from "./pages/ScaleYourPractice.tsx";
import HighValuePatients from "./pages/HighValuePatients.tsx";
import Services from "./pages/Services.tsx";
import ServicesSeo from "./pages/ServicesSeo.tsx";
import ServicesSeoTraditional from "./pages/ServicesSeoTraditional.tsx";
import ServicesSeoAeo from "./pages/ServicesSeoAeo.tsx";
import ServicesSeoGeo from "./pages/ServicesSeoGeo.tsx";
import ServicesPaidAds from "./pages/ServicesPaidAds.tsx";
import ServicesWebsiteDesign from "./pages/ServicesWebsiteDesign.tsx";
import ServicesReputation from "./pages/ServicesReputation.tsx";
import ServicesMarketingStrategy from "./pages/services/MarketingStrategy.tsx";
import ServicesBrandingRebranding from "./pages/services/BrandingRebranding.tsx";
import ServicesSocialMediaMarketing from "./pages/services/SocialMediaMarketing.tsx";
import ServicesLandingPages from "./pages/services/LandingPages.tsx";
import ServicesVideoMarketing from "./pages/services/VideoMarketing.tsx";
import ServicesEmailMarketing from "./pages/services/EmailMarketing.tsx";
import ServicesLocalListingsGbp from "./pages/services/LocalListingsGbp.tsx";
import ServicesAnalyticsReporting from "./pages/services/AnalyticsReporting.tsx";
import ServicesContentMarketing from "./pages/services/ContentMarketing.tsx";
import HowItWorks from "./pages/HowItWorks.tsx";
import Results from "./pages/Results.tsx";
import Resources from "./pages/Resources.tsx";
import Blog from "./pages/Blog.tsx";
import BlogAIWebsiteDesign from "./pages/BlogAIWebsiteDesign.tsx";
import BlogAIHealthcareMarketing from "./pages/BlogAIHealthcareMarketing.tsx";
import BlogCanAIReplaceMarketing from "./pages/BlogCanAIReplaceMarketing.tsx";
import About from "./pages/About.tsx";
import FreeAudit from "./pages/FreeAudit.tsx";
import CaseStudies from "./pages/CaseStudies.tsx";
import CaseStudyDetail from "./pages/CaseStudyDetail.tsx";
import Privacy from "./pages/Privacy.tsx";
import Terms from "./pages/Terms.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <DarkSectionTagger />
          <CardGridAligner />
          <GlobalFx />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/for-practices" element={<ForPractices />} />
            <Route path="/for-practices/more-new-patients" element={<MoreNewPatients />} />
            <Route path="/for-practices/online-visibility" element={<OnlineVisibility />} />
            <Route path="/for-practices/marketing-roi" element={<MarketingRoi />} />
            <Route path="/for-practices/lead-conversion" element={<LeadConversion />} />
            <Route path="/for-practices/online-reputation" element={<OnlineReputation />} />
            <Route path="/for-practices/predictable-patient-flow" element={<PredictablePatientFlow />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/dental" element={<SolutionsDental />} />
            <Route path="/solutions/chiropractic" element={<SolutionsChiropractic />} />
            <Route path="/solutions/medical" element={<SolutionsMedical />} />
            <Route path="/for-practices/scale-your-practice" element={<ScaleYourPractice />} />
            <Route path="/for-practices/high-value-patients" element={<HighValuePatients />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/seo" element={<ServicesSeo />} />
            <Route path="/services/seo/search-engine-optimization" element={<ServicesSeoTraditional />} />
            <Route path="/services/seo/aeo" element={<ServicesSeoAeo />} />
            <Route path="/services/seo/geo" element={<ServicesSeoGeo />} />
            <Route path="/services/paid-ads" element={<ServicesPaidAds />} />
            <Route path="/services/website-design" element={<ServicesWebsiteDesign />} />
            <Route path="/services/reputation" element={<ServicesReputation />} />
            <Route path="/services/marketing-strategy" element={<ServicesMarketingStrategy />} />
            <Route path="/services/branding-rebranding" element={<ServicesBrandingRebranding />} />
            <Route path="/services/social-media-marketing" element={<ServicesSocialMediaMarketing />} />
            <Route path="/services/landing-pages" element={<ServicesLandingPages />} />
            <Route path="/services/video-marketing" element={<ServicesVideoMarketing />} />
            <Route path="/services/email-marketing" element={<ServicesEmailMarketing />} />
            <Route path="/services/local-listings-gbp" element={<ServicesLocalListingsGbp />} />
            <Route path="/services/analytics-and-reporting" element={<ServicesAnalyticsReporting />} />
            <Route path="/services/content-marketing" element={<ServicesContentMarketing />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/results" element={<Results />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/resources/blog" element={<Blog />} />
            <Route path="/blog/ai-website-design-pros-cons" element={<BlogAIWebsiteDesign />} />
            <Route path="/resources/blog/ai-website-design-pros-cons" element={<BlogAIWebsiteDesign />} />
            <Route path="/blog/ai-healthcare-marketing-results" element={<BlogAIHealthcareMarketing />} />
            <Route path="/resources/blog/ai-healthcare-marketing-results" element={<BlogAIHealthcareMarketing />} />
            <Route path="/blog/can-ai-replace-marketing-team" element={<BlogCanAIReplaceMarketing />} />
            <Route path="/resources/blog/can-ai-replace-marketing-team" element={<BlogCanAIReplaceMarketing />} />
            <Route path="/about" element={<About />} />
            <Route path="/free-audit" element={<FreeAudit />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
