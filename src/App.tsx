import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import HowItWorks from "./pages/HowItWorks.tsx";
import Results from "./pages/Results.tsx";
import Resources from "./pages/Resources.tsx";
import About from "./pages/About.tsx";
import FreeAudit from "./pages/FreeAudit.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
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
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/results" element={<Results />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
