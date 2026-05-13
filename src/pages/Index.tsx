import Seo from "@/components/site/Seo";
import GlobalFx from "@/components/site/GlobalFx";
import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import Marquee from "@/components/site/Marquee";
import Problem from "@/components/site/Problem";
import Difference from "@/components/site/Difference";
import SocialProof from "@/components/site/SocialProof";
import Specialties from "@/components/site/Specialties";
import Bento from "@/components/site/Bento";
import HowItWorks from "@/components/site/HowItWorks";
import CaseStudies from "@/components/site/CaseStudies";
import AILayer from "@/components/site/AILayer";
import FAQ from "@/components/site/FAQ";
import FinalCTA from "@/components/site/FinalCTA";
import Footer from "@/components/site/Footer";

const Index = () => (
  <>
    <Seo />
    <GlobalFx />
    <Nav />
    <main>
      <Hero />
      <Marquee />
      <Problem />
      <Difference />
      <SocialProof />
      <Specialties />
      <Bento />
      <HowItWorks />
      <CaseStudies />
      <AILayer />
      <FAQ />
      <FinalCTA />
    </main>
    <Footer />
  </>
);

export default Index;
