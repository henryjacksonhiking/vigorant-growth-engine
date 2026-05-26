import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ReactNode, useState } from "react";
import { ArrowRight, Check, Plus, ChevronRight } from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import GlobalFx, { Counter } from "@/components/site/GlobalFx";

const ease = [0.16, 1, 0.3, 1] as const;

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease }} className={className}>
      {children}
    </motion.div>
  );
}

export function Line({ children, delay }: { children: ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span className="block" initial={{ y: "108%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay, ease }}>
        {children}
      </motion.span>
    </span>
  );
}

export type HeroProps = {
  breadcrumbLabel: string;
  chip: string;
  titleLines: { text: string; gradient?: boolean }[];
  subhead: string;
  paragraph?: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA: { label: string; href: string };
  proofStrip?: string;
};

export function PainHero({ breadcrumbLabel, chip, titleLines, subhead, paragraph, primaryCTA, secondaryCTA, proofStrip }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24" style={{ minHeight: "88vh" }}>
      <div aria-hidden className="absolute inset-0 z-0 grid-overlay" />
      <div aria-hidden className="absolute -top-16 -right-16 w-[480px] h-[480px] rounded-full orb-a"
        style={{ background: "radial-gradient(circle, hsl(247 93% 64% / 0.18), transparent 70%)", filter: "blur(80px)" }} />
      <div aria-hidden className="absolute -bottom-16 -left-10 w-[340px] h-[340px] rounded-full orb-b"
        style={{ background: "radial-gradient(circle, hsl(248 100% 75% / 0.12), transparent 70%)", filter: "blur(60px)" }} />

      <div className="container relative z-10 text-center max-w-[840px]">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="font-mono-ui text-[11px] uppercase tracking-[0.12em] text-text-muted flex items-center justify-center gap-2 list-none p-0">
            <li><Link to="/" className="hover:text-brand-purple">Home</Link></li>
            <li aria-hidden className="text-brand-purple/40">/</li>
            <li><Link to="/for-practices" className="hover:text-brand-purple">For Practices</Link></li>
            <li aria-hidden className="text-brand-purple/40">/</li>
            <li aria-current="page" className="text-brand-deep">{breadcrumbLabel}</li>
          </ol>
        </nav>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex items-center gap-2 font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-purple bg-brand-purple/8 border border-brand-purple/20 rounded-full px-4 py-1.5">
          <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-brand-purple pulse-dot" />
          {chip}
        </motion.div>

        <h1 className="font-display font-bold text-brand-deep mt-6 leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(34px, 7vw, 68px)", letterSpacing: "-0.03em" }}>
          {titleLines.map((l, i) => (
            <Line key={i} delay={0.4 + i * 0.15}>
              {l.gradient ? <span className="gradient-text">{l.text}</span> : l.text}
            </Line>
          ))}
        </h1>

        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-6 text-[18px] sm:text-[20px] font-semibold text-brand-deep max-w-[720px] mx-auto leading-[1.4]">
          {subhead}
        </motion.p>

        {paragraph && (
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-4 text-[16px] sm:text-[17px] text-text-secondary max-w-[660px] mx-auto leading-[1.75]">
            {paragraph}
          </motion.p>
        )}

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center flex-wrap">
          <Link to={primaryCTA.href} className="btn-primary-grad inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold min-h-[48px]">
            {primaryCTA.label} <ArrowRight aria-hidden size={18} />
          </Link>
          <a href={secondaryCTA.href} className="btn-secondary-outline inline-flex items-center justify-center gap-1.5 px-6 py-3.5 rounded-full font-semibold min-h-[48px]">
            {secondaryCTA.label}
          </a>
        </motion.div>

        {proofStrip && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.38 }}
            className="mt-10 inline-block bg-surface-secondary border border-brand-purple/12 rounded-full px-7 py-3 max-w-[700px]">
            <p className="font-mono-ui text-[12px] text-brand-purple">{proofStrip}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export function DarkSection({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <section id={id} className="relative overflow-hidden py-20 sm:py-24" style={{ background: "var(--gradient-dark)" }}>
      <div aria-hidden className="absolute inset-0 rounded-full opacity-50"
        style={{ background: "radial-gradient(circle at 50% 50%, hsl(247 93% 64% / 0.1), transparent 70%)", filter: "blur(80px)" }} />
      <div className="container relative z-10">{children}</div>
    </section>
  );
}

export function OffWhiteSection({ children, id }: { children: ReactNode; id?: string }) {
  return <section id={id} className="bg-surface-secondary py-20 sm:py-24"><div className="container">{children}</div></section>;
}

export function WhiteSection({ children, id }: { children: ReactNode; id?: string }) {
  return <section id={id} className="bg-background py-20 sm:py-24"><div className="container">{children}</div></section>;
}

export function SectionHeader({ label, title, sub, dark = false, gradientWord }: { label: string; title: ReactNode; sub?: string; dark?: boolean; gradientWord?: string }) {
  return (
    <Reveal className="max-w-[760px] mx-auto text-center">
      <span className={dark ? "section-label-light" : "section-label inline-block px-3 py-1 rounded-full bg-brand-purple/8 border border-brand-purple/20"}>{label}</span>
      <h2 className={`font-extrabold mt-4 leading-[1.1] tracking-tight ${dark ? "text-white" : "text-brand-deep"}`} style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.03em" }}>
        {title}
      </h2>
      {sub && <p className={`mt-5 text-[16px] sm:text-[17px] leading-[1.75] max-w-[640px] mx-auto ${dark ? "text-white/65" : "text-text-secondary"}`}>{sub}</p>}
    </Reveal>
  );
}

export function FAQAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="max-w-[760px] mx-auto mt-10 flex flex-col gap-2.5">
      {faqs.map((f, i) => (
        <Reveal key={i} delay={i * 0.04}>
          <div className={`bg-white rounded-xl border transition-all ${open === i ? "border-brand-purple/25 shadow-md" : "border-brand-purple/10"}`}>
            <button onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 text-left p-5 sm:p-6"
              aria-expanded={open === i}>
              <span className="font-semibold text-[15px] sm:text-[17px] text-brand-deep">{f.q}</span>
              <Plus aria-hidden size={18} className={`text-brand-purple shrink-0 transition-transform ${open === i ? "rotate-45" : ""}`} />
            </button>
            {open === i && (
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-[15px] text-text-secondary leading-[1.82]">{f.a}</div>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function FinalCTA({ headline, sub, ctaLabel, ctaHref }: { headline: string; sub: string; ctaLabel: string; ctaHref: string }) {
  return (
    <DarkSection>
      <Reveal className="max-w-[760px] mx-auto text-center">
        <h2 className="font-extrabold text-white leading-[1.1] tracking-tight" style={{ fontSize: "clamp(30px, 5vw, 52px)", letterSpacing: "-0.03em" }}>
          {headline}
        </h2>
        <p className="mt-5 text-white/70 text-[17px] leading-[1.75] max-w-[600px] mx-auto">{sub}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center flex-wrap">
          <Link to={ctaHref} className="bg-white text-brand-deep inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold min-h-[48px] hover:bg-white/90 transition">
            {ctaLabel} <ArrowRight aria-hidden size={18} />
          </Link>
          <Link to="/how-it-works" className="border border-white/25 text-white inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold min-h-[48px] hover:bg-white/5 transition">
            See How It Works
          </Link>
        </div>
      </Reveal>
    </DarkSection>
  );
}

export function PainPageLayout({ seoTitle, seoDesc, canonical, faqs, children }: { seoTitle: string; seoDesc: string; canonical: string; faqs?: { q: string; a: string }[]; children: ReactNode }) {
  const faqLd = faqs && {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        {faqLd && <script type="application/ld+json">{JSON.stringify(faqLd)}</script>}
      </Helmet>
      <GlobalFx />
      <Nav />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}

export { Counter, ChevronRight, Check };
