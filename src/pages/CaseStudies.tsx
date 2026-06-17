import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useSearchParams } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { caseStudies } from "@/data/case-studies";
import { CSCard, CSCTABanner } from "@/components/case-study/CSShared";
import type { CaseStudySpecialty, CaseStudyTemplate } from "@/types/case-study";

const SPECIALTIES: Array<{ key: "all" | CaseStudySpecialty; label: string }> = [
  { key: "all", label: "All" },
  { key: "dental", label: "Dental" },
  { key: "medical", label: "Medical" },
  { key: "chiropractic", label: "Chiropractic" },
];
const TEMPLATES: Array<{ key: "all" | CaseStudyTemplate; label: string }> = [
  { key: "all", label: "All Templates" },
  { key: "turnaround", label: "Turnaround" },
  { key: "growth", label: "Growth" },
  { key: "deep-dive", label: "Deep Dive" },
];

const PAGE_SIZE = 9;

export default function CaseStudies() {
  const [params, setParams] = useSearchParams();
  const specParam = (params.get("specialty") as any) || "all";
  const tplParam = (params.get("template") as any) || "all";
  const [specialty, setSpecialty] = useState<"all" | CaseStudySpecialty>(specParam);
  const [template, setTemplate] = useState<"all" | CaseStudyTemplate>(tplParam);
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () =>
      caseStudies.filter(
        (c) => (specialty === "all" || c.specialty === specialty) && (template === "all" || c.template === template),
      ),
    [specialty, template],
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, totalPages);
  const pageItems = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  const updateFilter = (next: { specialty?: string; template?: string }) => {
    const p = new URLSearchParams(params);
    if (next.specialty) next.specialty === "all" ? p.delete("specialty") : p.set("specialty", next.specialty);
    if (next.template) next.template === "all" ? p.delete("template") : p.set("template", next.template);
    setParams(p, { replace: true });
    setPage(1);
  };

  return (
    <>
      <Helmet>
        <title>Healthcare Marketing Case Studies — Real Results | Vigorant</title>
        <meta name="description" content="Explore real results from dental, medical, and chiropractic practices that partnered with Vigorant. Every metric is from a real engagement." />
        <link rel="canonical" href="https://vigorant.com/case-studies" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "CollectionPage", "@id": "https://vigorant.com/case-studies#page", name: "Healthcare Marketing Case Studies", url: "https://vigorant.com/case-studies", publisher: { "@type": "Organization", name: "Vigorant", url: "https://vigorant.com" } },
            { "@type": "BreadcrumbList", itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://vigorant.com" },
              { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://vigorant.com/case-studies" },
            ] },
          ],
        })}</script>
      </Helmet>
      <a href="#main" className="skip-link">Skip to main content</a>
      <Nav />
      <main id="main">
        {/* Hero (light) */}
        <section className="relative bg-white pt-32 pb-16 overflow-hidden">
          <div aria-hidden className="orb-a absolute -top-32 -right-32 w-[420px] h-[420px] pointer-events-none" />
          <div className="container relative">
            <nav aria-label="Breadcrumb" className="font-mono-ui text-[11px] uppercase tracking-widest text-brand-purple/70 mb-6 flex items-center gap-2">
              <Link to="/" className="hover:text-brand-purple">Home</Link>
              <span className="opacity-60">›</span>
              <span className="text-ink-secondary">Case Studies</span>
            </nav>
            <span className="inline-flex items-center gap-2 font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-purple bg-brand-purple/8 border border-brand-purple/20 rounded-full px-3.5 py-1.5 mb-6">
              <span className="pulse-dot" aria-hidden /> Real Results From Real Practices
            </span>
            <h1 className="font-display font-bold text-brand-deep leading-[1.06] tracking-tight mb-5" style={{ fontSize: "clamp(34px,5.5vw,64px)", letterSpacing: "-0.03em" }}>
              Every Number Here Is <span className="gradient-text">Real.</span>
            </h1>
            <p className="text-ink-secondary text-[16px] sm:text-[18px] leading-[1.7] max-w-[640px]">
              Dental, medical, and chiropractic practices — real data from real Vigorant engagements. No projections, no composites, no guarantees.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 font-mono-ui text-[12px] text-ink-secondary">
              <ShieldCheck size={16} className="text-brand-purple" aria-hidden />
              All practices anonymised per client agreement unless permission granted
            </div>
          </div>
        </section>

        {/* Filter bar */}
        <section className="py-4 sm:py-5 border-y border-brand-purple/10" style={{ background: "hsl(248 30% 97%)" }}>
          <div className="container space-y-3">
            <div className="flex flex-wrap gap-2 justify-center">
              {SPECIALTIES.map((s) => (
                <button
                  key={s.key}
                  onClick={() => { setSpecialty(s.key); updateFilter({ specialty: s.key }); }}
                  className={`font-mono-ui text-[11px] uppercase tracking-[0.1em] px-4 py-2 rounded-full transition-all ${specialty === s.key ? "bg-brand-purple text-white" : "bg-white text-ink-secondary border border-brand-purple/15 hover:border-brand-purple/40"}`}
                >
                  {s.label}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {TEMPLATES.map((t) => (
                <button
                  key={t.key}
                  onClick={() => { setTemplate(t.key); updateFilter({ template: t.key }); }}
                  className={`font-mono-ui text-[11px] uppercase tracking-[0.1em] px-4 py-2 rounded-full transition-all ${template === t.key ? "bg-brand-purple text-white" : "bg-white text-ink-secondary border border-brand-purple/15 hover:border-brand-purple/40"}`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="bg-white py-16 sm:py-20">
          <div className="container">
            {pageItems.length === 0 ? (
              <p className="text-ink-secondary text-center py-16 italic">No case studies match this filter yet. Check back soon.</p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pageItems.map((c) => <CSCard key={c.slug} study={c} />)}
              </div>
            )}

            {totalPages > 1 && (
              <nav aria-label="Pagination" className="mt-12 flex justify-center items-center gap-2">
                <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={current === 1} className="px-4 py-2 rounded-full text-[13px] font-semibold border border-brand-purple/20 text-brand-deep disabled:opacity-40 hover:bg-brand-purple/5">Prev</button>
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button key={i} onClick={() => setPage(i + 1)} className={`w-9 h-9 rounded-full font-mono-ui text-[12px] ${current === i + 1 ? "bg-brand-purple text-white" : "text-ink-secondary hover:bg-brand-purple/10"}`}>{i + 1}</button>
                ))}
                <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={current === totalPages} className="px-4 py-2 rounded-full text-[13px] font-semibold border border-brand-purple/20 text-brand-deep disabled:opacity-40 hover:bg-brand-purple/5">Next</button>
              </nav>
            )}
          </div>
        </section>

        <CSCTABanner headline="Ready to Be Our Next Case Study?" />
      </main>
      <Footer />
    </>
  );
}
