import Seo from "@/components/site/Seo";
import GlobalFx from "@/components/site/GlobalFx";
import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import Marquee from "@/components/site/Marquee";
import MicroProofBar from "@/components/site/MicroProofBar";
import Problem from "@/components/site/Problem";
import Specialties from "@/components/site/Specialties";
import Difference from "@/components/site/Difference";
import SocialProof from "@/components/site/SocialProof";
import HowItWorks from "@/components/site/HowItWorks";
import GrowthEngine from "@/components/site/GrowthEngine";
import Bento from "@/components/site/Bento";
import AILayer from "@/components/site/AILayer";
import Industries from "@/components/site/Industries";
import Testimonials from "@/components/site/Testimonials";
import VideoTestimonials from "@/components/site/VideoTestimonials";
import ResultsSnapshot from "@/components/site/ResultsSnapshot";
import FAQ from "@/components/site/FAQ";
import FinalCTA from "@/components/site/FinalCTA";
import StickyCTA from "@/components/site/StickyCTA";
import Footer from "@/components/site/Footer";

const Index = () => (
  <>
    <Seo />
    <a href="#main" className="skip-link">Skip to main content</a>
    <GlobalFx />
    <Nav />
    <main id="main">
      <Hero />
      <Marquee />
      <MicroProofBar />
      <Problem />
      <Specialties />
      <Difference />
      <SocialProof />
      <HowItWorks />
      <GrowthEngine />
      <Bento />
      <AILayer />
      <Industries />
      <Testimonials />
      <VideoTestimonials />
      <ResultsSnapshot />
      <FAQ />
      <FinalCTA />
    </main>
    <StickyCTA />
    <Footer />
  </>
);

export default Index;
