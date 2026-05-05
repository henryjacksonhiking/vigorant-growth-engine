import Seo from "@/components/site/Seo";
import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import Problem from "@/components/site/Problem";
import Difference from "@/components/site/Difference";
import SocialProof from "@/components/site/SocialProof";
import Specialties from "@/components/site/Specialties";
import AILayer from "@/components/site/AILayer";
import HowItWorks from "@/components/site/HowItWorks";
import Results from "@/components/site/Results";
import FAQ from "@/components/site/FAQ";
import FinalCTA from "@/components/site/FinalCTA";
import Footer from "@/components/site/Footer";

const Index = () => (
  <>
    <Seo />
    <Nav />
    <main>
      <Hero />
      <Problem />
      <Difference />
      <SocialProof />
      <Specialties />
      <AILayer />
      <HowItWorks />
      <Results />
      <FAQ />
      <FinalCTA />
    </main>
    <Footer />
  </>
);

export default Index;
