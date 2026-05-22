import Section, { Reveal, SectionLabel, H2 } from "./Section";
import { Search, Sparkles, MousePointerClick, Layout, Workflow, BarChart3, Star, Building2, ArrowRight } from "lucide-react";
import { SpecialtyGlyph } from "./Illustrations";

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
  return (
    <Section id="what-we-do" bg="white">
      <Reveal className="text-center max-w-3xl mx-auto">
        <SectionLabel>What We Do</SectionLabel>
        <H2>What Vigorant Actually Does for Your Practice</H2>
        <p className="mt-5 text-ink-secondary text-[16px] sm:text-[17px] italic">
          No vague promises. Here's exactly what we handle.
        </p>
        <div className="mt-6 flex items-center justify-center gap-2 opacity-70">
          <SpecialtyGlyph kind="medical" className="w-24 h-auto" />
        </div>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {tiles.map((t, i) => (
          <Reveal key={t.title} delay={i * 0.04}>
            <article
              className="h-full bg-white border border-brand-purple/15 rounded-2xl p-6 sm:p-7 flex gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-purple/40"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div
                aria-hidden
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 49% 15%))" }}
              >
                <t.icon size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-extrabold text-brand-deep text-[17px] leading-tight">{t.title}</h3>
                <p className="mt-2 text-ink-secondary text-[14px] leading-relaxed">{t.body}</p>
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
