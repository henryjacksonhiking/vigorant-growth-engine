import { useEffect, useMemo, useState } from "react";
import type { FrameworkStep, ServiceLink, ServicePageData } from "../data/servicePages";
import { VigorantSEO } from "./VigorantSEO";
import "../styles/vigorantServicePages.css";

function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".vg-reveal, .vg-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

function useActiveStep(count: number) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-vg-step]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const index = Number(visible.target.getAttribute("data-vg-step"));
          if (!Number.isNaN(index)) setActive(index);
        }
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: "-20% 0px -35% 0px" }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [count]);
  return active;
}

function ArrowIcon() {
  return <span aria-hidden="true" className="vg-arrow">→</span>;
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="vg-check-list">
      {items.map((item) => (
        <li key={item}><span aria-hidden="true">✓</span>{item}</li>
      ))}
    </ul>
  );
}

function RelatedLinks({ links }: { links: ServiceLink[] }) {
  return (
    <div className="vg-link-grid">
      {links.map((link) => (
        <a key={link.href} href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined}>
          <span>{link.label}</span>
          <ArrowIcon />
        </a>
      ))}
    </div>
  );
}

function FAQBlock({ page }: { page: ServicePageData }) {
  const [open, setOpen] = useState(-1);
  return (
    <section className="vg-section vg-faq" aria-labelledby={`${page.slug}-faq`}>
      <div className="vg-container vg-faq-layout">
        <div className="vg-section-copy vg-reveal">
          <span className="vg-chip">FAQ</span>
          <h2 id={`${page.slug}-faq`}>Frequently asked questions</h2>
          <p>Answers aligned to the service scope, SEO intent, and patient-acquisition outcome.</p>
          <a href={page.externalAuthority.href} target="_blank" rel="noopener noreferrer" className="vg-authority-link">
            External reference: {page.externalAuthority.label}
          </a>
        </div>
        <div className="vg-faq-list vg-reveal">
          {page.faqs.map((faq, index) => (
            <div className={`vg-faq-item ${open === index ? "is-open" : ""}`} key={faq.question}>
              <h3 className="vg-faq-question">
                <button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? -1 : index)}>
                  <span>{faq.question}</span><span aria-hidden="true">+</span>
                </button>
              </h3>
              <div className="vg-faq-answer"><p>{faq.answer}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ page }: { page: ServicePageData }) {
  return (
    <section className="vg-section vg-final-cta vg-dark" aria-labelledby={`${page.slug}-cta`}>
      <div className="vg-container vg-final-cta-inner vg-reveal">
        <span className="vg-chip vg-chip-dark">Ready to move?</span>
        <h2 id={`${page.slug}-cta`}>Turn this page strategy into a working growth system.</h2>
        <p>{page.metaDescription}</p>
        <div className="vg-actions vg-center-actions">
          <a className="vg-btn vg-btn-primary" aria-label={page.primaryCta.label} href={page.primaryCta.href}>{page.primaryCta.label}<ArrowIcon /></a>
          <a className="vg-btn vg-btn-ghost" aria-label={page.secondaryCta.label} href={page.secondaryCta.href}>{page.secondaryCta.label}</a>
        </div>
      </div>
    </section>
  );
}

function HeroText({ page }: { page: ServicePageData }) {
  return (
    <div className="vg-hero-copy vg-reveal">
      <nav className="vg-breadcrumb" aria-label="Breadcrumb">
        <a href="/">Home</a><span>/</span><a href="/services">Services</a><span>/</span><span>{page.serviceName}</span>
      </nav>
      {page.lastUpdated && <p className="vg-last-updated">Last Updated: {page.lastUpdated}</p>}
      <span className="vg-chip"><span className="vg-dot" />{page.eyebrow}</span>
      <h1>{page.h1}</h1>
      <p className="vg-kicker">{page.heroKicker}</p>
      {page.heroBody.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      <div className="vg-actions">
        <a className="vg-btn vg-btn-primary" aria-label={page.primaryCta.label} href={page.primaryCta.href}>{page.primaryCta.label}<ArrowIcon /></a>
        <a className="vg-btn vg-btn-outline" aria-label={page.secondaryCta.label} href={page.secondaryCta.href}>{page.secondaryCta.label}</a>
      </div>
    </div>
  );
}

export function Template1EditorialNarrative({ page }: { page: ServicePageData }) {
  useReveal();
  return (
    <main className="vg-page vg-template-editorial">
      <VigorantSEO page={page} />
      <section className="vg-hero vg-hero-editorial">
        <div className="vg-container vg-hero-grid">
          <HeroText page={page} />
          <aside className="vg-editorial-panel vg-reveal" aria-label="Brand service summary">
            <div className="vg-panel-top">Perception system</div>
            <h2>{page.heroKicker}</h2>
            <p>{page.definitionIntro?.[0]}</p>
            <div className="vg-metric-stack">
              {page.definitionPoints?.slice(0, 4).map((item, index) => (
                <div key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="vg-section vg-dark vg-editorial-problem" aria-labelledby={`${page.slug}-why`}>
        <div className="vg-container vg-split">
          <div className="vg-section-copy vg-reveal">
            <span className="vg-chip vg-chip-dark">Why it matters</span>
            <h2 id={`${page.slug}-why`}>{page.whyTitle}</h2>
            {page.whyIntro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="vg-dark-list vg-reveal">
            {page.whyPoints.map((point, index) => <div key={point}><span>{String(index + 1).padStart(2, "0")}</span>{point}</div>)}
          </div>
        </div>
      </section>

      <section className="vg-section" aria-labelledby={`${page.slug}-definition`}>
        <div className="vg-container vg-ledger">
          <div className="vg-section-copy vg-reveal">
            <span className="vg-chip">Definition</span>
            <h2 id={`${page.slug}-definition`}>{page.definitionTitle}</h2>
            {page.definitionIntro?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="vg-ledger-list vg-reveal">
            {page.definitionPoints?.map((item) => <div key={item}>{item}</div>)}
          </div>
        </div>
      </section>

      <section className="vg-section vg-soft" aria-labelledby={`${page.slug}-framework`}>
        <div className="vg-container">
          <div className="vg-section-header vg-reveal"><span className="vg-chip">Framework</span><h2 id={`${page.slug}-framework`}>{page.frameworkTitle}</h2></div>
          <div className="vg-zigzag">
            {page.frameworkSteps.map((step, index) => (
              <article className={`vg-zigzag-row vg-reveal ${index % 2 ? "is-flipped" : ""}`} key={step.title}>
                <div className="vg-zigzag-visual"><span>{String(index + 1).padStart(2, "0")}</span></div>
                <div className="vg-zigzag-copy">
                  <p className="vg-mini-label">{step.label}</p>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  {step.bullets && <CheckList items={step.bullets} />}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="vg-section" aria-labelledby={`${page.slug}-included`}>
        <div className="vg-container vg-sticky-layout">
          <div className="vg-section-copy vg-reveal">
            <span className="vg-chip">What is included</span>
            <h2 id={`${page.slug}-included`}>{page.includedTitle}</h2>
            <p>{page.aiIntro[0]}</p>
            <CheckList items={page.includedItems} />
          </div>
          <aside className="vg-sticky-dark vg-reveal">
            <h3>{page.aiTitle}</h3>
            {page.aiIntro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <div className="vg-pill-cloud">{page.aiPoints.map((item) => <span key={item}>{item}</span>)}</div>
          </aside>
        </div>
      </section>

      <section className="vg-section vg-soft" aria-labelledby={`${page.slug}-links`}>
        <div className="vg-container vg-split">
          <div className="vg-section-copy vg-reveal"><span className="vg-chip">Fit</span><h2>{page.audienceTitle}</h2><CheckList items={page.audiences} /></div>
          <div className="vg-section-copy vg-reveal"><span className="vg-chip">Internal links</span><h2 id={`${page.slug}-links`}>{page.relatedTitle}</h2><RelatedLinks links={page.relatedLinks} /></div>
        </div>
      </section>
      <FAQBlock page={page} />
      <FinalCTA page={page} />
    </main>
  );
}

export function Template2ConversionLanding({ page }: { page: ServicePageData }) {
  useReveal();
  const [tab, setTab] = useState(0);
  const tabItems = useMemo(() => page.frameworkSteps.slice(0, 3), [page.frameworkSteps]);
  useEffect(() => {
    const id = window.setInterval(() => setTab((current) => (current + 1) % tabItems.length), 600);
    return () => window.clearInterval(id);
  }, [tabItems.length]);

  return (
    <main className="vg-page vg-template-conversion">
      <VigorantSEO page={page} />
      <section className="vg-hero vg-hero-conversion">
        <div className="vg-container vg-hero-grid">
          <HeroText page={page} />
          <aside className="vg-conversion-card vg-reveal" aria-label="Strategy first summary">
            <div className="vg-conversion-dark"><span>Strategy first</span><p>A social program performs best when audience, message, content pillars, and reporting are defined before publishing begins.</p></div>
            <div className="vg-conversion-rows">
              <div><span>Primary lever</span><strong>Trust-building content</strong></div>
              <div><span>Typical gap</span><strong>Inconsistent posting without clear audience, message, or conversion purpose.</strong></div>
              <div><span>Activation path</span><strong>Strategy → content calendar → publishing → engagement monitoring → reporting</strong></div>
            </div>
          </aside>
        </div>
      </section>

      <section className="vg-section vg-soft" aria-labelledby={`${page.slug}-why`}>
        <div className="vg-container vg-split vg-align-center">
          <div className="vg-section-copy vg-reveal"><span className="vg-chip">Why it matters</span><h2 id={`${page.slug}-why`}>{page.whyTitle}</h2>{page.whyIntro.map((p) => <p key={p}>{p}</p>)}</div>
          <div className="vg-before-after vg-reveal">
            <div><h3>Without this service</h3><p>Social channels operate as random posting activity instead of a growth strategy.</p></div>
            <div><h3>With Vigorant</h3><p>Content pillars connect every post to patient acquisition and long-term growth.</p></div>
            <div><h3>Without this service</h3><p>The practice looks inactive or inconsistent, weakening patient confidence.</p></div>
            <div><h3>With Vigorant</h3><p>Brand voice, visuals, and positioning stay consistent across platforms.</p></div>
            <div><h3>Without this service</h3><p>Content fails to reinforce SEO, AI visibility, reputation, and conversion goals.</p></div>
            <div><h3>With Vigorant</h3><p>Performance monitoring links engagement activity to business impact.</p></div>
          </div>
        </div>
      </section>

      <section className="vg-section" aria-labelledby={`${page.slug}-summary`}>
        <div className="vg-container vg-summary-band vg-reveal">
          <div><span>Audience</span><strong>{page.audiences.join(", ")}</strong></div>
          <div><span>Goal</span><strong>Patient trust and engagement</strong></div>
          <div><span>Primary channel</span><strong>Facebook, Instagram, LinkedIn, YouTube, TikTok, and Google Business Profile content</strong></div>
          <div><span>Measurement</span><strong>Engagement, reach, audience growth, reputation signals, and business impact</strong></div>
        </div>
      </section>

      <section className="vg-section vg-tab-section" aria-labelledby={`${page.slug}-framework`}>
        <div className="vg-container vg-tab-layout">
          <div className="vg-tab-nav vg-reveal" role="tablist" aria-label="Social media framework">
            {tabItems.map((item, index) => (
              <button key={item.title} type="button" className={tab === index ? "is-active" : ""} onClick={() => setTab(index)} role="tab" aria-selected={tab === index}>{item.label}<span>{String(index + 1).padStart(2, "0")}</span></button>
            ))}
          </div>
          <article className="vg-tab-card vg-reveal" role="tabpanel">
            <h2 id={`${page.slug}-framework`}>{tabItems[tab].title}</h2>
            <p>{tabItems[tab].description}</p>
            {tabItems[tab].bullets && <CheckList items={tabItems[tab].bullets!} />}
          </article>
        </div>
      </section>

      <section className="vg-section vg-dark" aria-labelledby={`${page.slug}-ai`}>
        <div className="vg-container vg-split">
          <div className="vg-section-copy vg-reveal"><span className="vg-chip vg-chip-dark">AI search</span><h2 id={`${page.slug}-ai`}>{page.aiTitle}</h2>{page.aiIntro.map((p) => <p key={p}>{p}</p>)}</div>
          <div className="vg-pill-cloud vg-reveal">{page.aiPoints.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </section>

      <section className="vg-section" aria-labelledby={`${page.slug}-included`}><div className="vg-container vg-split"><div className="vg-section-copy vg-reveal"><h2 id={`${page.slug}-included`}>{page.includedTitle}</h2><CheckList items={page.includedItems} /></div><div className="vg-section-copy vg-reveal"><h2>{page.benefitsTitle}</h2><CheckList items={page.benefits || []} /></div></div></section>
      <section className="vg-section vg-soft"><div className="vg-container vg-split"><div className="vg-section-copy vg-reveal"><h2>{page.relatedTitle}</h2><RelatedLinks links={page.relatedLinks} /></div><div className="vg-section-copy vg-reveal"><h2>{page.chooseTitle}</h2><CheckList items={page.choosePoints} /></div></div></section>
      <FAQBlock page={page} />
      <FinalCTA page={page} />
    </main>
  );
}

export function Template3ProcessWorkflow({ page }: { page: ServicePageData }) {
  useReveal();
  const active = useActiveStep(page.frameworkSteps.length);
  return (
    <main className="vg-page vg-template-process">
      <VigorantSEO page={page} />
      <section className="vg-hero vg-hero-process"><div className="vg-container vg-hero-grid"><HeroText page={page} /><div className="vg-funnel-visual vg-reveal"><span>Traffic</span><span>Trust</span><span>Action</span><strong>Patient inquiry</strong></div></div></section>
      <section className="vg-section vg-soft" aria-labelledby={`${page.slug}-why`}><div className="vg-container vg-split"><div className="vg-section-copy vg-reveal"><span className="vg-chip">Why it matters</span><h2 id={`${page.slug}-why`}>{page.whyTitle}</h2>{page.whyIntro.map((p) => <p key={p}>{p}</p>)}</div><div className="vg-ribbon-list vg-reveal">{page.whyPoints.map((p) => <span key={p}>{p}</span>)}</div></div></section>
      <section className="vg-section" aria-labelledby={`${page.slug}-framework`}>
        <div className="vg-container vg-process-layout">
          <aside className="vg-process-index vg-reveal">
            {page.frameworkSteps.slice(0, 4).map((step, index) => <a key={step.title} className={active === index ? "is-active" : ""} href={`#${page.slug}-step-${index}`}>{step.label}<span>{String(index + 1).padStart(2, "0")}</span></a>)}
          </aside>
          <div className="vg-process-rail"><h2 id={`${page.slug}-framework`} className="vg-sr-only">{page.frameworkTitle}</h2>{page.frameworkSteps.map((step, index) => <article data-vg-step={index} id={`${page.slug}-step-${index}`} className={`vg-process-step vg-reveal ${active === index ? "is-active" : ""}`} key={step.title}><div className="vg-step-number">{index + 1}</div><div><span className="vg-mini-label">Phase {String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.description}</p></div><aside><h4>Output</h4><p>{step.output}</p></aside></article>)}</div>
        </div>
      </section>
      <section className="vg-section vg-dark"><div className="vg-container vg-split"><div className="vg-section-copy vg-reveal"><h2>{page.benefitsTitle}</h2><p>Landing pages allow practices to maximize the value of every marketing dollar.</p></div><div className="vg-dark-list vg-reveal">{(page.benefits || []).map((b, i) => <div key={b}><span>{String(i + 1).padStart(2, "0")}</span>{b}</div>)}</div></div></section>
      <section className="vg-section vg-soft"><div className="vg-container vg-split"><div className="vg-section-copy vg-reveal"><h2>{page.aiTitle}</h2>{page.aiIntro.map((p) => <p key={p}>{p}</p>)}<div className="vg-pill-cloud">{page.aiPoints.map((p) => <span key={p}>{p}</span>)}</div></div><div className="vg-section-copy vg-reveal"><h2>{page.includedTitle}</h2><CheckList items={page.includedItems} /></div></div></section>
      <section className="vg-section"><div className="vg-container vg-split"><div className="vg-section-copy vg-reveal"><h2>{page.relatedTitle}</h2><RelatedLinks links={page.relatedLinks} /></div><div className="vg-section-copy vg-reveal"><h2>{page.chooseTitle}</h2><CheckList items={page.choosePoints} /></div></div></section>
      <FAQBlock page={page} />
      <FinalCTA page={page} />
    </main>
  );
}

export function Template4AuthorityMagazine({ page }: { page: ServicePageData }) {
  useReveal();
  const major = page.frameworkSteps.slice(0, 3);
  const active = useActiveStep(major.length);
  return (
    <main className="vg-page vg-template-authority">
      <VigorantSEO page={page} />
      <section className="vg-hero vg-hero-video"><div className="vg-container vg-video-hero-grid"><HeroText page={page} /><div className="vg-video-panel vg-reveal"><div className="vg-play" aria-hidden="true">▶</div><h2>Trust before booking</h2><p>{page.heroKicker}</p><div><span>Educate</span><span>Engage</span><span>Convert</span></div></div></div></section>
      <section className="vg-section vg-soft"><div className="vg-container vg-split"><div className="vg-section-copy vg-reveal"><h2>{page.whyTitle}</h2>{page.whyIntro.map((p) => <p key={p}>{p}</p>)}</div><div className="vg-chip-grid vg-reveal">{page.whyPoints.map((p) => <span key={p}>{p}</span>)}</div></div></section>
      <section className="vg-section" aria-labelledby={`${page.slug}-story`}><div className="vg-container vg-magazine-layout"><aside className="vg-mag-index vg-reveal">{major.map((m, i) => <a key={m.title} className={active === i ? "is-active" : ""} href={`#${page.slug}-article-${i}`}>{m.label}</a>)}</aside><div className="vg-mag-articles"><h2 id={`${page.slug}-story`} className="vg-sr-only">Video marketing principles</h2>{major.map((step, i) => <article data-vg-step={i} id={`${page.slug}-article-${i}`} className={`vg-mag-article vg-reveal ${active === i ? "is-active" : ""}`} key={step.title}><span>{String(i + 1).padStart(2, "0")}</span><h3>{i === 0 ? page.definitionTitle : step.title}</h3><p>{i === 0 ? page.definitionIntro?.join(" ") : step.description}</p>{step.bullets && <CheckList items={step.bullets} />}</article>)}</div></div></section>
      <section className="vg-section vg-dark"><div className="vg-container vg-split"><div className="vg-section-copy vg-reveal"><span className="vg-chip vg-chip-dark">AI and search</span><h2>{page.aiTitle}</h2>{page.aiIntro.map((p) => <p key={p}>{p}</p>)}</div><div className="vg-dark-list vg-reveal">{page.aiPoints.map((p, i) => <div key={p}><span>{String(i + 1).padStart(2, "0")}</span>{p}</div>)}</div></div></section>
      <section className="vg-section vg-soft"><div className="vg-container vg-split"><div className="vg-section-copy vg-reveal"><h2>{page.includedTitle}</h2><CheckList items={page.includedItems} /></div><div className="vg-section-copy vg-reveal"><h2>{page.benefitsTitle}</h2><CheckList items={page.benefits || []} /></div></div></section>
      <section className="vg-section"><div className="vg-container vg-split"><div className="vg-section-copy vg-reveal"><h2>{page.relatedTitle}</h2><RelatedLinks links={page.relatedLinks} /></div><div className="vg-section-copy vg-reveal"><h2>{page.chooseTitle}</h2><CheckList items={page.choosePoints} /></div></div></section>
      <FAQBlock page={page} />
      <FinalCTA page={page} />
    </main>
  );
}

export function Template5IndustrySolution({ page }: { page: ServicePageData }) {
  useReveal();
  return (
    <main className="vg-page vg-template-industry">
      <VigorantSEO page={page} />
      <section className="vg-hero vg-hero-industry"><div className="vg-container vg-hero-grid"><HeroText page={page} /><div className="vg-dashboard-visual vg-reveal"><div className="vg-dashboard-top"><span>Growth Strategy</span><strong>Connected plan</strong></div><div className="vg-dashboard-progress"><span style={{ width: "86%" }} /></div><div className="vg-dashboard-grid"><div>Goals</div><div>Patients</div><div>Channels</div><div>ROI</div></div></div></div></section>
      <section className="vg-section vg-soft"><div className="vg-container vg-split"><div className="vg-section-copy vg-reveal"><h2>{page.whyTitle}</h2>{page.whyIntro.map((p) => <p key={p}>{p}</p>)}</div><div className="vg-ribbon-list vg-reveal">{page.whyPoints.map((p) => <span key={p}>{p}</span>)}</div></div></section>
      <section className="vg-section"><div className="vg-container vg-ledger"><div className="vg-section-copy vg-reveal"><span className="vg-chip">Strategy definition</span><h2>{page.definitionTitle}</h2>{page.definitionIntro?.map((p) => <p key={p}>{p}</p>)}</div><div className="vg-ledger-list vg-reveal">{page.definitionPoints?.map((p) => <div key={p}>{p}</div>)}</div></div></section>
      <section className="vg-section vg-soft" aria-labelledby={`${page.slug}-blueprint`}><div className="vg-container"><div className="vg-section-header vg-reveal"><span className="vg-chip">Included</span><h2 id={`${page.slug}-blueprint`}>{page.includedTitle}</h2></div><div className="vg-blueprint-grid vg-reveal">{(page.benefits || []).map((item, i) => <article key={item}><span>{String(i + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</div></div></section>
      <section className="vg-section"><div className="vg-container"><div className="vg-section-header vg-reveal"><span className="vg-chip">Framework</span><h2>{page.frameworkTitle}</h2></div><div className="vg-framework-grid">{page.frameworkSteps.map((step, i) => <article className="vg-framework-card vg-reveal" key={step.title}><span>{String(i + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.description}</p><em>{step.output}</em></article>)}</div></div></section>
      <section className="vg-section vg-dark"><div className="vg-container vg-split"><div className="vg-section-copy vg-reveal"><h2>{page.aiTitle}</h2>{page.aiIntro.map((p) => <p key={p}>{p}</p>)}</div><div className="vg-pill-cloud vg-reveal">{page.aiPoints.map((p) => <span key={p}>{p}</span>)}</div></div></section>
      <section className="vg-section vg-soft"><div className="vg-container vg-split"><div className="vg-section-copy vg-reveal"><h2>{page.includedTitle}</h2><CheckList items={page.includedItems} /></div><div className="vg-section-copy vg-reveal"><h2>{page.relatedTitle}</h2><RelatedLinks links={page.relatedLinks} /></div></div></section>
      <FAQBlock page={page} />
      <FinalCTA page={page} />
    </main>
  );
}

export function VigorantServicePage({ page }: { page: ServicePageData }) {
  switch (page.template) {
    case "editorial": return <Template1EditorialNarrative page={page} />;
    case "conversion": return <Template2ConversionLanding page={page} />;
    case "process": return <Template3ProcessWorkflow page={page} />;
    case "authority": return <Template4AuthorityMagazine page={page} />;
    case "industry": return <Template5IndustrySolution page={page} />;
    default: return <Template1EditorialNarrative page={page} />;
  }
}
