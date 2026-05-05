import { Helmet } from "react-helmet-async";
import { FAQS } from "./FAQ";

export default function Seo() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vigorant",
    description: "AI-driven patient acquisition system for dental, chiropractic, and medical practices. Healthcare marketing agency specializing in SEO, paid ads, and conversion optimization.",
    url: "https://vigorant.com",
    logo: "https://vigorant.com/logo.png",
    areaServed: "United States",
    knowsAbout: ["Healthcare Marketing", "Patient Acquisition", "Dental Marketing", "Chiropractic Marketing", "AI Search Optimization", "Generative Engine Optimization"],
    sameAs: ["https://www.linkedin.com/company/vigorant", "https://clutch.co/profile/vigorant"],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Vigorant Builds a Patient Acquisition System for Healthcare Practices",
    description: "A 4-phase AI-driven process for generating predictable new patient growth for dental, chiropractic, and medical practices.",
    step: [
      { "@type": "HowToStep", name: "Practice Audit and Market Analysis", text: "We audit your current digital presence, analyze your local market competition, and identify the patient acquisition gaps costing you revenue." },
      { "@type": "HowToStep", name: "System Build and Launch", text: "We build or optimize your website for conversion, establish your AI-optimized SEO foundation, launch targeted advertising campaigns, and configure call tracking and patient attribution." },
      { "@type": "HowToStep", name: "AI-Powered Optimization", text: "Our AI layer monitors search rankings, ad performance, and patient call data weekly, automatically surfacing optimization opportunities and budget reallocations." },
      { "@type": "HowToStep", name: "Transparent Reporting and Growth", text: "Clients access a live dashboard showing new patient volume, cost per acquisition, and revenue attribution. Monthly strategy reviews ensure the system continues to improve." },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Vigorant",
    url: "https://vigorant.com",
    description: "AI-driven patient acquisition and healthcare marketing for dental, chiropractic, and medical practices.",
  };

  return (
    <Helmet>
      <title>Healthcare Marketing Agency | AI-Driven Patient Acquisition | Vigorant</title>
      <meta name="description" content="Vigorant helps dental, chiropractic, and medical practices get more patients through AI-driven SEO, paid ads, and conversion-optimized websites. Free practice growth audit — see exactly where you're losing patients." />
      <link rel="canonical" href="https://vigorant.com/" />
      <meta property="og:title" content="AI-Driven Patient Acquisition for Dental, Chiro & Medical Practices | Vigorant" />
      <meta property="og:description" content="Predictable patient growth systems powered by AI and data. Free practice audit included." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://vigorant.com/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      <script type="application/ld+json">{JSON.stringify(organization)}</script>
      <script type="application/ld+json">{JSON.stringify(faqPage)}</script>
      <script type="application/ld+json">{JSON.stringify(howTo)}</script>
      <script type="application/ld+json">{JSON.stringify(website)}</script>
    </Helmet>
  );
}
