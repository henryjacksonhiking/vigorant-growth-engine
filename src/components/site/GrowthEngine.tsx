import Section, { Reveal, SectionLabel, H2 } from "./Section";
import { Check, X } from "lucide-react";
import {
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover,
} from "@/components/ui/animated-slideshow";

const steps = [
  {
    title: "Visibility",
    body: "We make your practice discoverable on Google, Maps, and AI search engines.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2400&auto=format&fit=crop",
  },
  {
    title: "Acquisition",
    body: "We run targeted paid campaigns that attract high-intent patients at the lowest possible cost.",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2400&auto=format&fit=crop",
  },
  {
    title: "Conversion",
    body: "We optimize your website and patient journey to turn visitors into booked appointments.",
    imageUrl:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2400&auto=format&fit=crop",
  },
  {
    title: "Automation",
    body: "We automate follow-up, reminders, and reputation requests to reduce front-desk burden.",
    imageUrl:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2400&auto=format&fit=crop",
  },
  {
    title: "Analytics",
    body: "We give you a live dashboard so you always know exactly where your patients are coming from.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2400&auto=format&fit=crop",
  },
  {
    title: "Optimization",
    body: "We continuously refine every channel based on real data — not guesses.",
    imageUrl:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2400&auto=format&fit=crop",
  },
];

const before = [
  "Spending on ads with no visibility into ROI",
  "Ranking on page 2 or 3 for key procedures",
  "Website generating leads but not converting them",
  "No system for collecting reviews or following up with leads",
];

const after = [
  "Full real-time dashboard showing cost-per-patient by channel",
  "Ranking top 3 for high-value procedure keywords",
  "Website conversion rate increased by 2–3x",
  "Automated review collection generating 20+ reviews per month",
];

export default function GrowthEngine() {
  return (
    <Section id="process" bg="white">
      <Reveal className="text-center max-w-3xl mx-auto">
        <SectionLabel>Our Framework</SectionLabel>
        <H2>
          The <span className="gradient-text">Vigorant Growth Engine™</span>
        </H2>
        <p className="mt-5 text-ink-secondary text-[16px] sm:text-[17px] italic">
          A proven 6-stage system for predictable, sustainable patient acquisition.
        </p>
      </Reveal>

      <Reveal className="mt-12 max-w-6xl mx-auto">
        <HoverSlider className="rounded-3xl border border-brand-purple/15 bg-surface-secondary p-6 sm:p-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="flex flex-col gap-3">
              {steps.map((s, i) => (
                <div key={s.title} className="group">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-purple/70 w-8 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <TextStaggerHover
                      text={s.title}
                      index={i}
                      className="font-extrabold text-brand-deep leading-[1.05] tracking-tight text-[28px] sm:text-[36px] lg:text-[44px]"
                    />
                  </div>
                  <p className="mt-1 ml-11 text-ink-secondary text-[14px] sm:text-[15px] max-w-md">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>

            <HoverSliderImageWrap className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-brand-deep/5 shadow-[var(--shadow-card)]">
              {steps.map((s, i) => (
                <HoverSliderImage
                  key={s.title}
                  index={i}
                  imageUrl={s.imageUrl}
                  alt={s.title}
                  className="rounded-2xl"
                />
              ))}
            </HoverSliderImageWrap>
          </div>
        </HoverSlider>
      </Reveal>

      <Reveal className="mt-14 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-brand-purple/15 bg-brand-purple/5 p-6 sm:p-7">
            <h3 className="font-mono-ui text-[11px] uppercase tracking-[0.12em] text-ink-secondary">Before Vigorant</h3>
            <ul className="ui-list">
              {before.map((b) => (
                <li key={b} className="ui-list-item text-[14px] text-ink-secondary">
                  <X aria-hidden size={16} className="ui-list-icon text-ink-secondary/70" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="rounded-2xl border-2 border-brand-purple/40 p-6 sm:p-7"
            style={{ background: "linear-gradient(135deg, hsl(247 93% 64% / 0.10), hsl(248 100% 75% / 0.08))", boxShadow: "var(--shadow-card)" }}
          >
            <h3 className="font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-purple">With Vigorant</h3>
            <ul className="ui-list">
              {after.map((a) => (
                <li key={a} className="ui-list-item text-[14px] text-brand-deep">
                  <Check aria-hidden size={16} className="ui-list-icon text-brand-purple" />
                  <span className="font-semibold">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
