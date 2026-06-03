import { useEffect } from "react";
import type { ServicePageData } from "../data/servicePages";

const ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vigorant",
  url: "https://vigorant.com",
  logo: "https://vigorant.com/logo.png",
  description: "AI-driven healthcare marketing agency for dental, medical, and chiropractic practices.",
  sameAs: []
};

function upsertMeta(selector: string, createAttrs: Record<string, string>, content?: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    Object.entries(createAttrs).forEach(([key, value]) => el!.setAttribute(key, value));
    document.head.appendChild(el);
  }
  if (content !== undefined) el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function buildStructuredData(page: ServicePageData) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${page.canonicalUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://vigorant.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://vigorant.com/services" },
      { "@type": "ListItem", position: 3, name: page.serviceName, item: page.canonicalUrl }
    ]
  };

  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${page.canonicalUrl}#webpage`,
    url: page.canonicalUrl,
    name: page.metaTitle,
    description: page.metaDescription,
    isPartOf: { "@type": "WebSite", "@id": "https://vigorant.com/#website", name: "Vigorant", url: "https://vigorant.com" },
    about: { "@id": `${page.canonicalUrl}#service` },
    breadcrumb,
    dateModified: page.lastUpdated
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${page.canonicalUrl}#service`,
    name: page.serviceName,
    description: page.schemaDescription || page.metaDescription,
    serviceType: page.serviceType,
    provider: { "@type": "Organization", name: "Vigorant", url: "https://vigorant.com" },
    areaServed: "United States",
    audience: page.audiences.map((audience) => ({ "@type": "Audience", audienceType: audience })),
    url: page.canonicalUrl,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: page.canonicalUrl
    }
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${page.canonicalUrl}#faq`,
    mainEntity: page.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  };

  const schemas: object[] = [service, faq, breadcrumb, ORGANIZATION, webpage];

  if (page.videoObject) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: page.videoObject.name,
      description: page.videoObject.description,
      thumbnailUrl: [page.videoObject.thumbnailUrl],
      uploadDate: page.videoObject.uploadDate,
      publisher: ORGANIZATION,
      mainEntityOfPage: page.canonicalUrl
    });
  }

  return schemas;
}

type VigorantSEOProps = {
  page: ServicePageData;
};

export function VigorantSEO({ page }: VigorantSEOProps) {
  useEffect(() => {
    document.title = page.metaTitle;

    upsertMeta('meta[name="description"]', { name: "description" }, page.metaDescription);
    upsertMeta('meta[name="keywords"]', { name: "keywords" }, page.keywords);
    upsertMeta('meta[name="robots"]', { name: "robots" }, "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    upsertMeta('meta[name="author"]', { name: "author" }, "Vigorant");

    upsertMeta('meta[property="og:type"]', { property: "og:type" }, "website");
    upsertMeta('meta[property="og:title"]', { property: "og:title" }, page.ogTitle || page.metaTitle);
    upsertMeta('meta[property="og:description"]', { property: "og:description" }, page.ogDescription || page.metaDescription);
    upsertMeta('meta[property="og:url"]', { property: "og:url" }, page.canonicalUrl);
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name" }, "Vigorant");

    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card" }, "summary_large_image");
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title" }, page.twitterTitle || page.metaTitle);
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description" }, page.twitterDescription || page.metaDescription);

    upsertLink("canonical", page.canonicalUrl);

    document.querySelectorAll('script[data-vigorant-jsonld="true"]').forEach((node) => node.remove());
    buildStructuredData(page).forEach((schema, index) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = `vigorant-jsonld-${page.slug}-${index + 1}`;
      script.setAttribute("data-vigorant-jsonld", "true");
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      document.querySelectorAll('script[data-vigorant-jsonld="true"]').forEach((node) => node.remove());
    };
  }, [page]);

  return null;
}
