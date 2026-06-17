export type CaseStudySpecialty = "dental" | "medical" | "chiropractic";
export type CaseStudyTemplate = "turnaround" | "growth" | "deep-dive";

export interface CaseStudy {
  slug: string;
  specialty: CaseStudySpecialty;
  template: CaseStudyTemplate;
  tag: string;
  initial: string;
  published: string;
  meta: { title: string; description: string; og_image?: string };
  practice: {
    type: string;
    location: string;
    size: string;
    anonymised: boolean;
    display_name?: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    primary_metric: { value: string; label: string };
    hero_image_src: string;
    hero_image_alt: string;
  };
  stats: Array<{ value: string; label: string; source?: string }>;
  turnaround?: {
    situation_heading: string;
    situation_body: string;
    before_items: string[];
    after_items: string[];
    intervention_heading: string;
    intervention_steps: Array<{ icon: string; title: string; body: string }>;
    before_image_src: string;
    before_image_alt: string;
  };
  growth?: {
    ambition_heading: string;
    ambition_body: string;
    strategy_heading: string;
    strategy_steps: Array<{ number: string; title: string; body: string }>;
    results_narrative: string;
    timeline_items: Array<{ month: string; milestone: string; metric?: string }>;
    image_src: string;
    image_alt: string;
  };
  deep_dive?: {
    problem_statement: string;
    problem_context: string;
    methodology_heading: string;
    methodology_steps: Array<{ step: string; title: string; body: string; chips?: string[] }>;
    insight_quote: string;
    insight_attribution: string;
    results_data_table: Array<{ metric: string; before: string; after: string; change: string }>;
    image_src: string;
    image_alt: string;
  };
  services_used: string[];
  results_summary: string;
  key_results: Array<{ metric: string; label: string; context?: string }>;
  quote?: { text: string; attribution: string; role: string };
  geo_visibility?: { present: boolean; platforms: string[]; description: string };
  faqs: Array<{ q: string; a: string }>;
  related: string[];
}

export function buildCaseStudySchema(study: CaseStudy) {
  const base = `https://vigorant.com/case-studies/${study.specialty}/${study.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${base}#article`,
        headline: study.hero.headline,
        description: study.meta.description,
        image: study.meta.og_image || study.hero.hero_image_src,
        author: { "@type": "Organization", name: "Vigorant", url: "https://vigorant.com" },
        publisher: {
          "@type": "Organization",
          name: "Vigorant",
          logo: { "@type": "ImageObject", url: "https://vigorant.com/logo.png" },
        },
        datePublished: study.published,
        dateModified: study.published,
        mainEntityOfPage: base,
        about: { "@type": "MedicalBusiness", name: study.practice.type },
        keywords: [study.specialty + " marketing", "healthcare marketing case study", ...study.services_used],
        articleSection: "Case Studies",
      },
      {
        "@type": "FAQPage",
        mainEntity: study.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://vigorant.com" },
          { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://vigorant.com/case-studies" },
          { "@type": "ListItem", position: 3, name: study.practice.type, item: base },
        ],
      },
    ],
  };
}
