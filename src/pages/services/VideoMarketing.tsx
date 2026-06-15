import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight, Play, Plus } from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";

const ease = [0.16, 1, 0.3, 1] as const;
const CANONICAL = "https://vigorant.com/services/video-marketing";

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className={
        "inline-flex items-center gap-2 font-mono-ui text-[11px] uppercase tracking-[0.12em] px-3 py-1.5 rounded-full border " +
        (light
          ? "bg-white/10 border-white/20 text-brand-lavender"
          : "bg-surface-secondary border-brand-purple/20 text-brand-purple")
      }
    >
      <span aria-hidden className={"w-1.5 h-1.5 rounded-full " + (light ? "bg-brand-lavender" : "bg-brand-purple")} />
      {children}
    </span>
  );
}

const PROOF_TAGS = [
  "Video strategy",
  "Production guidance",
  "YouTube optimization",
  "Distribution & reporting",
];

const HERO_METRICS = [
  { n: "01", p: "Patient education videos reduce pre-appointment anxiety and improve consult-to-treatment conversion." },
  { n: "02", p: "Doctor introductions humanize the practice and lift booked-call rates from website visitors." },
  { n: "03", p: "Testimonial reels compress months of trust-building into 60 seconds of social proof." },
];

const EVIDENCE = [
  {
    h: "Trust before the first visit",
    p: "Prospective patients screen practices on video before they call. A clear face, a calm voice, and an honest explanation often decide the booking.",
  },
  {
    h: "Education that converts",
    p: "Treatment explanation videos shorten the decision cycle by removing the unknowns that cause patients to delay or shop competitors.",
  },
  {
    h: "Visibility across surfaces",
    p: "Video earns placement in Google video results, YouTube search, social feeds, and AI-generated answers — surfaces text alone cannot reach.",
  },
];

const ESSAY = [
  {
    id: "essay-strategy",
    eyebrow: "01 — Strategy",
    h: "Video as an editorial program, not a one-off shoot",
    body: [
      "Practices that win with video treat it as an editorial program: a steady rhythm of doctor introductions, treatment explanations, patient stories, and education pieces that map directly to the questions prospective patients ask before booking.",
      "Each video has a job. A doctor introduction reduces anxiety. A treatment explainer compresses the consult. A patient story builds social proof. A clinical FAQ reduces no-shows. Strategy decides which jobs matter most for your specialty, geography, and patient mix.",
    ],
  },
  {
    id: "essay-trust",
    eyebrow: "02 — Trust",
    h: "Authority is produced one frame at a time",
    body: [
      "Patients form judgments about a practice in seconds — long before they read a paragraph. Lighting, framing, sound, and pacing all communicate competence. Production quality is not vanity; it is the visible surface of clinical credibility.",
      "The most effective healthcare video is also the most restrained: clear sound, honest light, calm cuts, no music tricks. Patients are shopping for a clinician, not a commercial.",
    ],
  },
  {
    id: "essay-distribution",
    eyebrow: "03 — Distribution",
    h: "A video that no one finds is not a video",
    body: [
      "Distribution is the work most practices skip. The same asset belongs on the website service page, the YouTube channel, the GMB profile, paid placements, and short-form social — each cut and titled for its surface.",
      "Optimized titles, descriptions, transcripts, and chapter markers move video into Google video results, YouTube search, and AI-generated answers and summaries.",
    ],
  },
];

const PRINCIPLES = [
  {
    h: "Clinical clarity over cinematic flourish",
    p: "Healthcare video earns trust through restraint. Clear explanation beats stylistic ambition every time.",
  },
  {
    h: "Every video answers a real question",
    p: "Briefs start from the questions patients actually ask in consults — not from internal marketing themes.",
  },
  {
    h: "Reuse beats reshoot",
    p: "One well-shot interview becomes a hero film, a YouTube long-form, six short-form cuts, and a dozen quote graphics.",
  },
  {
    h: "Distribution is part of the brief",
    p: "Titles, thumbnails, transcripts, and placements are designed before the camera turns on — not after the edit lands.",
  },
];

const SOURCES = [
  "National Library of Medicine — patient education and healthcare communication",
  "AMA — physician communication and patient trust research",
  "Google — Video best practices for health and YMYL queries",
  "Pew Research — video consumption patterns in patient decision making",
];

const RELATED = [
  { h: "Marketing Strategy", k: "Plan", href: "/services/marketing-strategy" },
  { h: "Social Media Marketing", k: "Distribute", href: "/services/social-media-marketing" },
  { h: "Landing Pages", k: "Convert", href: "/services/landing-pages" },
  { h: "SEO & AI Optimization", k: "Be found", href: "/services/seo" },
];

const FAQS = [
  {
    q: "Is video marketing effective for healthcare practices?",
    a: "Yes. Video helps healthcare practices build trust with prospective patients before the first appointment, educate patients about treatments and procedures, and improve conversion rates across websites, social media, and paid advertising campaigns.",
  },
  {
    q: "What types of videos perform best for healthcare practices?",
    a: "Doctor introductions, patient testimonial videos, treatment explanation videos, and educational health content typically deliver the strongest trust-building and conversion results for dental, medical, and chiropractic practices.",
  },
  {
    q: "Does video help SEO?",
    a: "Yes. Video content can improve engagement metrics, increase time on site, and create additional search visibility opportunities through Google Video results, YouTube search, and AI-generated answers and summaries.",
  },
  {
    q: "Can video support AI search visibility?",
    a: "Yes. Educational, authoritative video content contributes to broader content authority and visibility signals evaluated by AI-powered search platforms, including user engagement signals, brand consistency, and expertise indicators.",
  },
];

export default function VideoMarketing() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeEssay, setActiveEssay] = useState<string>(ESSAY[0].id);

  useEffect(() => {
    const sections = ESSAY.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveEssay(e.target.id);
        });
      },
      { rootMargin: "-18% 0px -42% 0px", threshold: 0.01 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://vigorant.com/#organization",
        name: "Vigorant",
        url: "https://vigorant.com",
        logo: "https://vigorant.com/logo.png",
        description:
          "Healthcare-exclusive growth marketing agency providing AI-driven patient acquisition for dental, medical, and chiropractic practices.",
        areaServed: "United States",
        knowsAbout: [
          "Healthcare Video Marketing",
          "Dental Video Marketing",
          "Medical Video Marketing",
          "Patient Education Videos",
          "YouTube Optimization",
          "Video SEO",
          "AI Visibility for Healthcare",
        ],
      },
      {
        "@type": "WebPage",
        "@id": CANONICAL + "#webpage",
        url: CANONICAL,
        name: "Healthcare Video Marketing Services | Attract, Educate & Convert More Patients | Vigorant",
        description:
          "Healthcare video marketing services for dental, medical, and chiropractic practices, including video strategy, content planning, production guidance, distribution, YouTube optimization, video SEO, and reporting.",
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://vigorant.com/" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://vigorant.com/services" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Healthcare Video Marketing Services",
            item: CANONICAL,
          },
        ],
      },
      {
        "@type": "Service",
        name: "Healthcare Video Marketing Services",
        provider: { "@id": "https://vigorant.com/#organization" },
        description:
          "Healthcare video marketing for dental, medical, and chiropractic practices. Includes video strategy, content planning, script guidance, distribution, YouTube optimization, video SEO, social media video planning, and performance reporting.",
        areaServed: "United States",
        serviceType: "Healthcare Video Marketing",
      },
      {
        "@type": "VideoObject",
        name: "Healthcare Video Marketing Services — Vigorant",
        description: "Strategic video marketing for dental, medical, and chiropractic practices.",
        thumbnailUrl: "https://vigorant.com/og/video-marketing.jpg",
        uploadDate: "2026-01-01",
        publisher: { "@id": "https://vigorant.com/#organization" },
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground no-card-hover">
      <Helmet>
        <title>Healthcare Video Marketing Services | Attract, Educate & Convert More Patients | Vigorant</title>
        <meta
          name="description"
          content="Healthcare video marketing for dental, medical, and chiropractic practices: strategy, production guidance, YouTube optimization, video SEO, and distribution."
        />
        <link rel="canonical" href={CANONICAL} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>


      <Nav />

      <main id="main" itemScope itemType="https://schema.org/Service">
        <meta itemProp="name" content="Healthcare Video Marketing Services" />
        <meta itemProp="provider" content="Vigorant" />
        <meta itemProp="areaServed" content="United States" />

        {/* ── HERO — WHITE BACKGROUND ── */}
        <section
          aria-labelledby="hero-heading"
          className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20"
          style={{
            background:
              "radial-gradient(circle at 10% 12%, hsl(var(--brand-purple) / 0.10), transparent 28%), radial-gradient(circle at 88% 18%, hsl(var(--brand-bright) / 0.18), transparent 32%), linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--surface-secondary)) 100%)",
          }}
        >
          <div
            aria-hidden
            className="absolute -right-64 top-10 w-[620px] h-[620px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, hsl(var(--brand-purple) / 0.16), transparent 65%)",
              animation: "vmOrb 9s ease-in-out infinite",
            }}
          />

          <div className="container relative z-10">
            <Reveal>
              <nav aria-label="Breadcrumb" className="flex gap-2 items-center text-[13px] font-semibold text-ink-secondary mb-6">
                <Link to="/" className="text-brand-purple">Home</Link>
                <span aria-hidden>/</span>
                <Link to="/services" className="text-brand-purple">Services</Link>
                <span aria-hidden>/</span>
                <span className="text-ink-muted">Video Marketing</span>
              </nav>
            </Reveal>

            <div className="grid gap-12 lg:gap-16 lg:grid-cols-[1.05fr_0.95fr] items-center">
              {/* LEFT: copy */}
              <div>
                <Reveal>
                  <Eyebrow>Video Marketing · Healthcare</Eyebrow>
                </Reveal>
                <Reveal delay={0.05}>
                  <h1
                    id="hero-heading"
                    className="font-display font-bold text-brand-deep mt-5 leading-[1.02] tracking-tight"
                    style={{ fontSize: "clamp(2.7rem, 5.4vw, 4.8rem)", letterSpacing: "-0.045em" }}
                  >
                    Video that earns trust <span className="gradient-text">before the first call.</span>
                  </h1>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-5 text-[17px] leading-[1.8] text-ink-secondary max-w-[620px]">
                    Strategic healthcare video — doctor introductions, treatment explainers, patient stories, and educational content — produced to convert prospective patients and built to be found across Google, YouTube, social, and AI answers.
                  </p>
                </Reveal>

                <Reveal delay={0.15}>
                  <ul className="flex flex-wrap gap-2.5 mt-6 list-none p-0">
                    {PROOF_TAGS.map((t) => (
                      <li
                        key={t}
                        className="inline-flex items-center font-mono-ui text-[12px] tracking-[0.06em] px-3.5 py-2 rounded-full border border-brand-purple/20 bg-white/75 text-brand-deep/75 shadow-[var(--shadow-card)]"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="flex flex-wrap gap-3 mt-8">
                    <Link
                      to="/free-audit"
                      className="btn-primary-grad inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[15px]"
                    >
                      Request Your Free Growth Audit <ArrowRight size={18} />
                    </Link>
                    <Link
                      to="/services"
                      className="btn-secondary-outline inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold text-[15px]"
                    >
                      Explore all services
                    </Link>
                  </div>
                </Reveal>
              </div>

              {/* RIGHT: CONTAINED DARK VISUAL PANEL */}
              <Reveal delay={0.1}>
                <div
                  className="relative rounded-2xl p-5 border border-white/10 overflow-hidden text-white min-h-[520px] flex flex-col justify-between"
                  style={{
                    background:
                      "linear-gradient(145deg, hsl(var(--brand-deep)), hsl(250 45% 19%) 58%, hsl(var(--brand-deep)))",
                    boxShadow: "0 36px 90px hsl(var(--brand-deep) / 0.28)",
                  }}
                >
                  <div
                    aria-hidden
                    className="absolute -inset-[30%] pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle at 72% 18%, hsl(var(--brand-bright) / 0.30), transparent 32%), radial-gradient(circle at 12% 88%, hsl(var(--brand-purple) / 0.28), transparent 38%)",
                      animation: "vmVisualGlow 7s ease-in-out infinite",
                    }}
                  />

                  {/* Video stage */}
                  <div
                    className="relative z-10 min-h-[300px] rounded-2xl border border-white/15 grid place-items-center overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(0 0% 100% / 0.10), hsl(0 0% 100% / 0.04))",
                    }}
                  >
                    <span
                      aria-hidden
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(120deg, transparent 0%, hsl(0 0% 100% / 0.10) 45%, transparent 65%)",
                        transform: "translateX(-100%)",
                        animation: "vmShimmer 4.5s ease-in-out infinite",
                      }}
                    />

                    <span className="absolute top-4 left-4 inline-flex items-center gap-2 font-mono-ui text-[11px] uppercase tracking-[0.10em] px-3 py-1.5 rounded-full border border-white/15 bg-white/10 text-white/85">
                      <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-brand-lavender" />
                      Live Reel · 60s
                    </span>

                    <div
                      className="relative w-[94px] h-[94px] rounded-full grid place-items-center text-white"
                      style={{
                        background:
                          "linear-gradient(135deg, hsl(var(--brand-bright)), hsl(var(--brand-purple)))",
                        boxShadow:
                          "0 0 0 16px hsl(var(--brand-bright) / 0.16), 0 20px 55px hsl(var(--brand-purple) / 0.45)",
                        animation: "vmPlayPulse 2.6s ease-in-out infinite",
                      }}
                    >
                      <Play size={26} className="ml-0.5" fill="currentColor" />
                    </div>

                    {/* Audio wave bars */}
                    <div className="absolute left-5 right-5 bottom-5 grid grid-cols-4 gap-2 h-[42px] items-end">
                      {[40, 70, 50, 82].map((h, i) => (
                        <span
                          key={i}
                          className="block rounded-full bg-white/20"
                          style={{
                            height: `${h}%`,
                            animation: `vmBars 1.4s ease-in-out infinite`,
                            animationDelay: `${i * 0.15}s`,
                            transformOrigin: "bottom",
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Metric cards */}
                  <div className="relative z-10 grid gap-3 mt-4">
                    {HERO_METRICS.map((m) => (
                      <div
                        key={m.n}
                        className="grid grid-cols-[54px_1fr] gap-4 items-start rounded-2xl p-4 border border-white/12 bg-white/8"
                        style={{ backdropFilter: "blur(2px)" }}
                      >
                        <strong className="font-display text-[1.05rem] font-bold text-brand-lavender">{m.n}</strong>
                        <span className="text-[0.92rem] leading-[1.55] text-white/85">{m.p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Hero thesis card */}
            <Reveal delay={0.2}>
              <div
                className="mt-16 rounded-2xl p-8 sm:p-10 border border-brand-purple/20"
                style={{
                  background: "hsl(0 0% 100% / 0.70)",
                  boxShadow: "0 18px 60px hsl(var(--brand-purple) / 0.08)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <p
                  className="font-display font-bold text-brand-deep leading-[1.22] tracking-tight relative"
                  style={{ fontSize: "clamp(1.45rem, 2.6vw, 2.25rem)", letterSpacing: "-0.04em" }}
                >
                  <span aria-hidden className="block text-brand-bright font-display text-[5rem] leading-[0.55]">“</span>
                  Patients hire clinicians they can see, hear, and trust. Video is the shortest distance between a search query and a booked appointment.
                </p>
                <h2 className="mt-6 font-display text-brand-deep tracking-tight" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", letterSpacing: "-0.035em" }}>
                  Video marketing built for healthcare — strategy, production, and distribution under one program.
                </h2>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── EVIDENCE STRIP ── */}
        <section className="bg-surface-secondary py-20 sm:py-28">
          <div className="container">
            <Reveal>
              <Eyebrow>Why video, why now</Eyebrow>
              <h2 className="font-display font-bold text-brand-deep mt-4 max-w-3xl" style={{ fontSize: "clamp(1.9rem, 3.2vw, 3rem)", letterSpacing: "-0.035em" }}>
                Three reasons healthcare practices invest in video this year.
              </h2>
            </Reveal>

            <div
              className="grid sm:grid-cols-3 mt-12 border-y border-brand-purple/18"
              role="list"
            >
              {EVIDENCE.map((e, i) => (
                <Reveal key={e.h} delay={i * 0.06}>
                  <article
                    role="listitem"
                    className={
                      "p-8 " +
                      (i < EVIDENCE.length - 1 ? "sm:border-r border-brand-purple/18" : "")
                    }
                  >
                    <h3 className="font-bold text-brand-deep text-[1.15rem]">{e.h}</h3>
                    <p className="mt-3 text-ink-secondary leading-[1.7] text-[15px]">{e.p}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── ESSAY LAYOUT ── */}
        <section className="py-20 sm:py-28">
          <div className="container">
            <Reveal>
              <Eyebrow>Editorial · Long form</Eyebrow>
              <h2 className="font-display font-bold text-brand-deep mt-4 max-w-3xl" style={{ fontSize: "clamp(2rem, 3.4vw, 3.2rem)", letterSpacing: "-0.035em" }}>
                A field guide to video marketing for clinical practices.
              </h2>
            </Reveal>

            <div className="grid gap-12 lg:gap-20 lg:grid-cols-[320px_1fr] mt-12 items-start">
              {/* Sticky index */}
              <aside className="lg:sticky lg:top-24 border-t border-brand-purple/18">
                <nav aria-label="Essay index">
                  {ESSAY.map((s) => {
                    return (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        className="block py-4 border-b border-brand-purple/18 font-bold relative text-brand-deep/55 hover:text-brand-purple"
                      >
                        {s.eyebrow}
                      </a>
                    );
                  })}
                </nav>
              </aside>

              {/* Essay content */}
              <div>
                {ESSAY.map((s, i) => (
                  <article
                    key={s.id}
                    id={s.id}
                    className={
                      "pb-14 mb-14 " +
                      (i < ESSAY.length - 1 ? "border-b border-brand-purple/18" : "")
                    }
                  >
                    <Eyebrow>{s.eyebrow}</Eyebrow>
                    <h3 className="font-display font-bold text-brand-deep mt-4" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.4rem)", letterSpacing: "-0.035em", lineHeight: 1.12 }}>
                      {s.h}
                    </h3>
                    {s.body.map((p, j) => (
                      <p key={j} className="mt-4 text-[1.02rem] leading-[1.85] text-ink-secondary">
                        {p}
                      </p>
                    ))}
                    {s.id === "essay-distribution" && (
                      <p className="mt-4 text-[1.02rem] leading-[1.85] text-ink-secondary">
                        Video creates additional opportunities to appear in Google results, video search results, YouTube recommendations, and AI-generated answers.{" "}
                        <Link to="/services/seo" className="text-brand-purple font-bold underline">
                          Learn how SEO &amp; AI Optimization supports video visibility.
                        </Link>
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PRINCIPLES ── */}
        <section className="bg-surface-secondary py-20 sm:py-28">
          <div className="container">
            <Reveal>
              <Eyebrow>Operating principles</Eyebrow>
              <h2 className="font-display font-bold text-brand-deep mt-4 max-w-3xl" style={{ fontSize: "clamp(1.9rem, 3.2vw, 3rem)", letterSpacing: "-0.035em" }}>
                Four principles that govern every brief we accept.
              </h2>
            </Reveal>

            <div className="mt-12 border-t border-brand-purple/18">
              {PRINCIPLES.map((p, i) => (
                <Reveal key={p.h} delay={i * 0.05}>
                  <article className="grid grid-cols-[64px_1fr] sm:grid-cols-[90px_1fr] gap-5 py-6 border-b border-brand-purple/18">
                    <span className="font-display font-black text-brand-purple text-[1.7rem] leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-bold text-brand-deep text-[1.15rem]">{p.h}</h3>
                      <p className="mt-2 text-ink-secondary leading-[1.7]">{p.p}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── AUTHORITY DARK ── */}
        <section
          className="py-20 sm:py-28 relative overflow-hidden"
          style={{ background: "var(--gradient-dark)" }}
          data-dark="true"
        >
          <div className="container relative z-10">
            <Reveal>
              <Eyebrow light>Authority</Eyebrow>
              <h2 className="font-display font-bold text-white mt-4 max-w-3xl" style={{ fontSize: "clamp(1.9rem, 3.2vw, 3rem)", letterSpacing: "-0.035em" }}>
                Where the evidence and best-practice guidance comes from.
              </h2>
            </Reveal>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mt-12 items-start">
              <Reveal>
                <div className="rounded-2xl p-8 sm:p-10 border border-white/12 bg-white/5">
                  <blockquote className="font-display font-bold text-white leading-[1.45] tracking-tight" style={{ fontSize: "clamp(1.25rem, 2vw, 1.55rem)", letterSpacing: "-0.03em" }}>
                    “Patient education improves outcomes, satisfaction, and adherence — and the medium matters. Video is a uniquely effective format for explaining procedures, risks, and follow-up care.”
                  </blockquote>
                  <p className="mt-5 font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-lavender">
                    — Healthcare communication research, NIH / NLM
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <ul className="border-t border-white/14">
                  {SOURCES.map((s) => (
                    <li
                      key={s}
                      className="py-4 border-b border-white/14 text-white/75 leading-[1.55]"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── RELATED COLUMNS ── */}
        <section className="py-20 sm:py-28">
          <div className="container">
            <Reveal>
              <Eyebrow>Adjacent services</Eyebrow>
              <h2 className="font-display font-bold text-brand-deep mt-4 max-w-3xl" style={{ fontSize: "clamp(1.9rem, 3.2vw, 3rem)", letterSpacing: "-0.035em" }}>
                Video works best inside a broader patient acquisition system.
              </h2>
            </Reveal>

            <div
              className="grid sm:grid-cols-2 lg:grid-cols-4 mt-12 rounded-2xl overflow-hidden border border-brand-purple/18"
              style={{ background: "hsl(var(--brand-purple) / 0.18)", gap: "1px" }}
            >
              {RELATED.map((r) => (
                <Link
                  key={r.h}
                  to={r.href}
                  className="bg-background p-6 font-extrabold text-brand-deep transition-colors hover:text-brand-purple"
                >
                  {r.h}
                  <span className="block font-mono-ui text-[12px] font-medium text-ink-muted mt-1.5">
                    {r.k} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-surface-secondary py-20 sm:py-28">
          <div className="container max-w-4xl">
            <Reveal>
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="font-display font-bold text-brand-deep mt-4" style={{ fontSize: "clamp(1.9rem, 3.2vw, 3rem)", letterSpacing: "-0.035em" }}>
                Questions practices ask before they invest in video.
              </h2>
            </Reveal>

            <div className="mt-10 border-t border-brand-purple/18">
              {FAQS.map((f, i) => {
                const open = openFaq === i;
                return (
                  <div key={f.q} className="border-b border-brand-purple/18">
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="w-full flex justify-between gap-4 items-start py-5 text-left font-bold text-brand-deep text-[16px] hover:text-brand-purple transition-colors"
                    >
                      <span>{f.q}</span>
                      <span
                        aria-hidden
                        className={
                          "w-7 h-7 rounded-full grid place-items-center flex-shrink-0 transition-all " +
                          (open
                            ? "bg-brand-purple text-white rotate-45"
                            : "bg-surface-tertiary text-brand-purple")
                        }
                      >
                        <Plus size={16} />
                      </span>
                    </button>
                    <div
                      className="overflow-hidden transition-all duration-500"
                      style={{ maxHeight: open ? 400 : 0 }}
                    >
                      <p className="pb-5 text-ink-secondary leading-[1.75] max-w-2xl">{f.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA (DARK) ── */}
        <section
          className="relative overflow-hidden text-center py-24 sm:py-32"
          style={{ background: "hsl(var(--brand-deep))" }}
          data-dark="true"
        >
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, hsl(var(--brand-purple) / 0.55), hsl(var(--brand-deep) / 0.18) 45%, transparent 72%)",
              animation: "vmCtaGlow 7s ease-in-out infinite",
            }}
          />
          <div className="container relative z-10">
            <Eyebrow light>Next step</Eyebrow>
            <h2 className="font-display font-bold text-white max-w-3xl mx-auto mt-4" style={{ fontSize: "clamp(2rem, 3.6vw, 3.2rem)", letterSpacing: "-0.04em" }}>
              Plan a video program that earns trust and books more patients.
            </h2>
            <p className="mt-4 text-white/70 max-w-xl mx-auto leading-[1.7]">
              Request a free growth audit. We&apos;ll review your current video footprint, surface the highest-leverage assets to produce next, and map distribution across the channels your patients actually use.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link
                to="/free-audit"
                className="btn-primary-grad inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[15px]"
              >
                Request Your Free Growth Audit <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold text-[15px] border border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                Explore all services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Page-local keyframes (no global token changes) */}
      <style>{`
        @keyframes vmOrb { 0%,100% { transform: translate3d(0,0,0) scale(1); } 50% { transform: translate3d(-30px, 28px, 0) scale(1.08); } }
        @keyframes vmVisualGlow { 0%,100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-18px) rotate(4deg); } }
        @keyframes vmShimmer { 0%,45% { transform: translateX(-100%); } 75%,100% { transform: translateX(100%); } }
        @keyframes vmPlayPulse {
          0%,100% { transform: scale(1); box-shadow: 0 0 0 16px hsl(var(--brand-bright) / 0.16), 0 20px 55px hsl(var(--brand-purple) / 0.45); }
          50% { transform: scale(1.05); box-shadow: 0 0 0 24px hsl(var(--brand-bright) / 0.08), 0 26px 72px hsl(var(--brand-purple) / 0.58); }
        }
        @keyframes vmBars { 0%,100% { transform: scaleY(0.55); } 50% { transform: scaleY(1); } }
        @keyframes vmCtaGlow { 0%,100% { transform: scale(1); } 50% { transform: scale(1.08); } }
      `}</style>
    </div>
  );
}
