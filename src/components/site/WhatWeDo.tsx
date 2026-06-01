import { useState, useEffect } from "react";
import Section, { Reveal, SectionLabel, H2 } from "./Section";
import { Search, Sparkles, MousePointerClick, Layout, Workflow, BarChart3, Star, Building2, ArrowRight } from "lucide-react";

const tiles = [
  { icon: Search, title: "SEO & Local SEO", body: "We get your practice ranked on Google for the exact procedures your ideal patients are searching for." },
  { icon: Sparkles, title: "AI Visibility Optimization (AIO/GEO)", body: "We make sure your practice appears in AI-generated answers from ChatGPT, Gemini, Perplexity, and Google AI Overviews." },
  { icon: MousePointerClick, title: "Google & Meta Paid Ads", body: "We run profitable ad campaigns that bring in high-intent patients — and we track every dollar to your ROI." },
  { icon: Layout, title: "Website Design & CRO", body: "We build and optimize healthcare websites that convert visitors into booked appointments." },
  { icon: Workflow, title: "Marketing Automation", body: "We automate appointment reminders, follow-up sequences, and reputation requests so your front desk can focus on patients." },
  { icon: BarChart3, title: "Analytics & Reporting Dashboard", body: "You get a live dashboard showing patient acquisition cost, lead sources, ROAS, rankings, and more — in real time." },
  { icon: Star, title: "Reputation Management", body: "We systematically grow your Google reviews and monitor your online reputation across all major platforms." },
  { icon: Building2, title: "Multi-Location Marketing", body: "We centralize strategy while customizing execution for each location — ideal for DSOs and group practices." },
];

export default function WhatWeDo() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const ActiveIcon = tiles[active].icon;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((p) => (p + 1) % tiles.length);
    }, 2000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <Section id="what-we-do" bg="white">
      <Reveal className="text-center max-w-3xl mx-auto">
        <SectionLabel>What We Do</SectionLabel>
        <H2>What Vigorant Actually Does for Your Practice</H2>
        <p className="mt-5 text-ink-secondary text-[16px] sm:text-[17px] italic">
          No vague promises. Here's exactly what we handle.
        </p>
      </Reveal>

      {/* Desktop / tablet: circular orbit */}
      <div className="hidden md:block mt-16">
        <div
          className="relative mx-auto"
          style={{ width: "min(720px, 92vw)", aspectRatio: "1 / 1" }}
        >
          {/* Decorative orbit rings */}
          <div aria-hidden className="absolute inset-0 rounded-full border border-brand-purple/15" />
          <div aria-hidden className="absolute inset-[6%] rounded-full border border-dashed border-brand-purple/20" />
          <div aria-hidden className="absolute inset-[12%] rounded-full border border-brand-purple/10" />
          <div
            aria-hidden
            className="absolute inset-[18%] rounded-full"
            style={{ background: "radial-gradient(circle at 50% 50%, hsl(247 93% 64% / 0.06), transparent 70%)" }}
          />

          {/* Orbit nodes */}
          {tiles.map((t, i) => {
            const angle = (i / tiles.length) * 2 * Math.PI - Math.PI / 2;
            const r = 47; // % from center
            const x = 50 + r * Math.cos(angle);
            const y = 50 + r * Math.sin(angle);
            const isActive = active === i;
            const Icon = t.icon;
            return (
              <button
                key={t.title}
                onClick={() => setActive(i)}
                aria-label={t.title}
                aria-pressed={isActive}
                className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none flex flex-col items-center gap-1.5"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <span
                  className={`flex items-center justify-center rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-20 h-20 lg:w-24 lg:h-24 scale-110 shadow-[var(--shadow-glow)]"
                      : "w-16 h-16 lg:w-20 lg:h-20 hover:scale-105"
                  }`}
                  style={{
                    background: isActive
                      ? "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 49% 15%))"
                      : "linear-gradient(135deg, hsl(247 93% 64% / 0.92), hsl(248 49% 22%))",
                    boxShadow: isActive
                      ? "0 12px 40px hsl(247 93% 64% / 0.45), 0 0 0 6px hsl(247 93% 64% / 0.12)"
                      : "0 8px 24px hsl(248 49% 15% / 0.18)",
                  }}
                >
                  <Icon size={isActive ? 30 : 26} className="text-white" />
                </span>
                <span
                  className={`text-[10px] lg:text-[11px] font-mono-ui uppercase tracking-[0.06em] text-center max-w-[100px] lg:max-w-[120px] leading-tight transition-colors duration-300 ${
                    isActive ? "text-brand-purple font-bold" : "text-ink-secondary group-hover:text-brand-purple"
                  }`}
                >
                  {t.title}
                </span>
              </button>
            );
          })}

          {/* Center card */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white text-center px-8 py-10 flex flex-col items-center justify-center"
            style={{
              width: "44%",
              aspectRatio: "1 / 1",
              boxShadow: "var(--shadow-glass)",
              border: "1px solid hsl(247 93% 64% / 0.18)",
            }}
          >
            <div
              aria-hidden
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
              style={{ background: "linear-gradient(135deg, hsl(247 93% 64% / 0.12), hsl(248 100% 75% / 0.18))" }}
            >
              <ActiveIcon size={22} className="text-brand-purple" />
            </div>
            <h3 className="font-extrabold text-brand-deep text-[17px] lg:text-[19px] leading-tight">
              {tiles[active].title}
            </h3>
            <p className="mt-2 text-ink-secondary text-[13px] lg:text-[14px] leading-relaxed line-clamp-5">
              {tiles[active].body}
            </p>
            <a
              href="#process"
              className="mt-4 inline-flex items-center gap-1.5 text-brand-purple font-semibold text-sm"
            >
              Know more <ArrowRight aria-hidden size={14} />
            </a>
          </div>
        </div>

        {/* Labels grid below for clarity */}
        <div className="mt-8 grid grid-cols-4 gap-3 max-w-4xl mx-auto">
          {tiles.map((t, i) => (
            <button
              key={t.title}
              onClick={() => setActive(i)}
              className={`text-left text-[12px] font-mono-ui uppercase tracking-[0.08em] px-3 py-2 rounded-lg transition-colors ${
                active === i
                  ? "bg-brand-purple/10 text-brand-purple"
                  : "text-ink-secondary hover:text-brand-purple hover:bg-brand-purple/5"
              }`}
            >
              {t.title}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile: stacked cards */}
      <div className="md:hidden mt-10 grid grid-cols-1 gap-4">
        {tiles.map((t, i) => (
          <Reveal key={t.title} delay={i * 0.03}>
            <article
              className="ui-card gap-4 flex flex-row"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div
                aria-hidden
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 49% 15%))" }}
              >
                <t.icon size={20} className="text-white" />
              </div>
              <div className="ui-card-body">
                <h3 className="ui-card-heading text-[16px]">{t.title}</h3>
                <p className="ui-card-text">{t.body}</p>
              </div>
            </article>
          </Reveal>
        ))}
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
