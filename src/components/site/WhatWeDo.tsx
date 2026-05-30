import { useRef } from "react";
import Section, { Reveal, SectionLabel, H2 } from "./Section";
import {
  Search, Sparkles, MousePointerClick, Layout, Workflow,
  BarChart3, Star, Building2, ArrowRight,
} from "lucide-react";

const tiles = [
  {
    icon: Sparkles,
    title: "AI Visibility Optimization (AIO/GEO)",
    body: "We make sure your practice appears in AI-generated answers from ChatGPT, Gemini, Perplexity, and Google AI Overviews — the new front page of healthcare search.",
    featured: true,
  },
  { icon: Search, title: "SEO & Local SEO", body: "Rank for the exact procedures your ideal patients are searching for." },
  { icon: MousePointerClick, title: "Google & Meta Paid Ads", body: "Profitable ad campaigns with every dollar tracked to ROI." },
  { icon: Layout, title: "Website Design & CRO", body: "Sites engineered to convert visitors into booked appointments." },
  { icon: Workflow, title: "Marketing Automation", body: "Reminders, follow-ups, and reputation requests — automated." },
  { icon: BarChart3, title: "Analytics & Reporting", body: "Live dashboard of CAC, lead sources, ROAS, rankings." },
  { icon: Star, title: "Reputation Management", body: "Systematically grow reviews across every major platform." },
  { icon: Building2, title: "Multi-Location Marketing", body: "Centralized strategy, customized execution for each location." },
];

function SpotlightTile({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`group relative overflow-hidden rounded-2xl border bg-background transition-all duration-300 hover:-translate-y-0.5 ${className}`}
      style={{
        borderColor: "hsl(var(--brand-purple) / 0.14)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), hsl(248 100% 75% / 0.18), transparent 55%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

export default function WhatWeDo() {
  const [featured, ...rest] = tiles;
  const FIcon = featured.icon;

  return (
    <Section id="what-we-do" bg="white">
      <Reveal className="text-center max-w-3xl mx-auto">
        <SectionLabel>What We Do</SectionLabel>
        <H2>What Vigorant Actually Does for Your Practice</H2>
        <p className="mt-5 text-ink-secondary text-[16px] sm:text-[17px] italic">
          No vague promises. Here's exactly what we handle.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[auto_auto] gap-4 sm:gap-5">
        {/* Featured 2x2 tile */}
        <Reveal className="lg:col-span-2 lg:row-span-2 h-full">
          <SpotlightTile className="h-full">
            <div className="relative p-8 sm:p-10 h-full flex flex-col">
              {/* Decorative orb */}
              <div
                aria-hidden
                className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-60 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, hsl(248 100% 75% / 0.45), transparent 70%)",
                }}
              />
              <span className="font-mono-ui text-[11px] uppercase tracking-[0.14em] text-brand-purple bg-brand-purple/10 rounded-full px-3 py-1 self-start">
                Flagship capability
              </span>
              <div
                className="mt-6 w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 49% 15%))",
                  boxShadow: "0 10px 30px hsl(247 93% 64% / 0.4)",
                }}
              >
                <FIcon size={28} className="text-white" aria-hidden />
              </div>
              <h3 className="mt-6 font-extrabold text-brand-deep text-2xl sm:text-3xl leading-[1.15]">
                {featured.title}
              </h3>
              <p className="mt-3 text-ink-secondary text-[15px] sm:text-base leading-relaxed max-w-md">
                {featured.body}
              </p>
              <a
                href="/services"
                className="mt-auto pt-6 inline-flex items-center gap-1.5 font-semibold text-brand-purple hover:gap-3 transition-all"
              >
                Explore AI visibility <ArrowRight size={16} aria-hidden />
              </a>
            </div>
          </SpotlightTile>
        </Reveal>

        {/* Smaller tiles */}
        {rest.map((t, i) => {
          const Icon = t.icon;
          return (
            <Reveal key={t.title} delay={i * 0.04} className="h-full">
              <SpotlightTile className="h-full">
                <div className="p-6 h-full flex flex-col">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 49% 15%))",
                    }}
                  >
                    <Icon size={18} className="text-white" aria-hidden />
                  </div>
                  <h3 className="mt-4 font-bold text-brand-deep text-[16px] leading-snug">
                    {t.title}
                  </h3>
                  <p className="mt-1.5 text-ink-secondary text-[13.5px] leading-relaxed">
                    {t.body}
                  </p>
                </div>
              </SpotlightTile>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="text-center mt-12">
        <a
          href="#process"
          className="inline-flex items-center gap-2 font-semibold text-brand-purple hover:text-brand-deep transition-colors min-h-[44px]"
        >
          See How It All Works Together <ArrowRight aria-hidden size={18} />
        </a>
      </Reveal>
    </Section>
  );
}
