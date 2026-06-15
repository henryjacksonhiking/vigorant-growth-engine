import Seo from "@/components/site/Seo";
import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import Marquee from "@/components/site/Marquee";
import MicroProofBar from "@/components/site/MicroProofBar";
import WhatWeDo from "@/components/site/WhatWeDo";
import Comparison from "@/components/site/Comparison";
import Industries from "@/components/site/Industries";
import MiniCaseStudies from "@/components/site/MiniCaseStudies";
import GrowthEngine from "@/components/site/GrowthEngine";
import AIDefinitions from "@/components/site/AIDefinitions";
import Testimonials from "@/components/site/Testimonials";
import VideoTestimonials from "@/components/site/VideoTestimonials";
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
      <WhatWeDo />
      <Comparison />
      <Industries />
      <MiniCaseStudies />
      <GrowthEngine />
      <AIDefinitions />
      <Testimonials />
      <VideoTestimonials />
      <FAQ />
      <FinalCTA />
    </main>
    <StickyCTA />
    <Footer />
  </>
);

export default Index;
