import { Helmet } from "react-helmet-async";
import { FAQS } from "./FAQ";

export default function Seo() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vigorant",
    url: "https://vigorant.com",
    logo: "https://vigorant.com/logo.png",
    description: "Vigorant is a healthcare marketing agency specializing in dental SEO, AI visibility optimization, paid ads, and patient acquisition for dental, medical, and chiropractic practices.",
    foundingDate: "2018",
    areaServed: "United States",
    knowsAbout: ["Dental SEO", "Healthcare Marketing", "AI Visibility Optimization", "Local SEO for Healthcare", "Dental Paid Ads", "Chiropractic Marketing"],
    email: "info@vigorant.com",
    telephone: "+1-833-641-2200",
    sameAs: [
      "https://www.linkedin.com/company/vigorant",
      "https://www.facebook.com/vigorant",
      "https://twitter.com/vigorant",
    ],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Vigorant",
    image: "https://vigorant.com/logo.png",
    url: "https://vigorant.com",
    email: "info@vigorant.com",
    telephone: "+1-833-641-2200",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-833-641-2200",
        email: "info@vigorant.com",
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: ["English"],
      },
    ],
    areaServed: "United States",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "87",
      bestRating: "5",
    },
    priceRange: "$$",
  };

  const serviceList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Vigorant Healthcare Marketing Services",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Dental SEO", url: "/dental-seo" },
      { "@type": "ListItem", position: 2, name: "AI Visibility Optimization for Healthcare", url: "/ai-visibility" },
      { "@type": "ListItem", position: 3, name: "Healthcare Paid Ads Management", url: "/paid-ads" },
      { "@type": "ListItem", position: 4, name: "Medical Practice Website Design", url: "/website-design" },
      { "@type": "ListItem", position: 5, name: "Marketing Automation for Healthcare", url: "/automation" },
      { "@type": "ListItem", position: 6, name: "Chiropractic Marketing Agency", url: "/chiropractic-marketing" },
    ],
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

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hamid Sadeghipour",
    jobTitle: "CEO & Founder",
    worksFor: { "@type": "Organization", name: "Vigorant" },
    url: "https://vigorant.com/team",
    sameAs: ["https://www.linkedin.com/in/hamid-sadeghipour"],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Vigorant",
    url: "https://vigorant.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://vigorant.com/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Helmet>
      <title>Healthcare Marketing Agency for Practices | Vigorant</title>
      <meta name="description" content="AI-driven SEO, paid ads, and conversion websites for dental, medical, and chiropractic practices. Get your free practice growth audit." />
      <link rel="canonical" href="https://vigorant.com/" />
      <meta property="og:title" content="Healthcare Marketing Agency for Practices | Vigorant" />
      <meta property="og:description" content="More patients. More revenue. Less guesswork. Predictable patient growth systems for healthcare practices — free growth audit included." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://vigorant.com/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      <script type="application/ld+json">{JSON.stringify(organization)}</script>
      <script type="application/ld+json">{JSON.stringify(localBusiness)}</script>
      <script type="application/ld+json">{JSON.stringify(serviceList)}</script>
      <script type="application/ld+json">{JSON.stringify(faqPage)}</script>
      <script type="application/ld+json">{JSON.stringify(person)}</script>
      <script type="application/ld+json">{JSON.stringify(website)}</script>
    </Helmet>
  );
}
