import { useRef } from "react";
import Section, { Reveal, SectionLabel, H2 } from "./Section";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Compass, Wrench, Rocket, LineChart } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Compass,
    badge: "Week 1",
    title: "Practice Audit & Market Analysis",
    body: "We audit your digital presence, analyze local competition, and identify the patient acquisition gaps costing you revenue.",
  },
  {
    n: "02",
    icon: Wrench,
    badge: "Days 7–30",
    title: "System Build & Launch",
    body: "We build or optimize your website, set up AI-optimized SEO, launch targeted ads, and configure call tracking and attribution.",
  },
  {
    n: "03",
    icon: Rocket,
    badge: "Ongoing",
    title: "AI-Powered Optimization",
    body: "Our AI monitors rankings, ad performance, and patient calls weekly — surfacing improvements and reallocating budget automatically.",
  },
  {
    n: "04",
    icon: LineChart,
    badge: "Monthly",
    title: "Transparent Reporting & Growth",
    body: "You see every metric that matters — patient volume, cost per acquisition, revenue attribution — in a live dashboard.",
  },
];

export default function HowItWorks() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 75%", "end 25%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Section id="how-it-works" bg="secondary">
      <Reveal className="text-center max-w-3xl mx-auto">
        <SectionLabel>The Process</SectionLabel>
        <H2>
          From audit to growth engine<br />
          <span className="gradient-text">in 4 steps.</span>
        </H2>
      </Reveal>

      <div ref={trackRef} className="relative mt-16 sm:mt-20 max-w-4xl mx-auto">
        {/* Static rail */}
        <div
          aria-hidden
          className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
          style={{ background: "hsl(var(--brand-purple) / 0.18)" }}
        />
        {/* Animated progress */}
        <motion.div
          aria-hidden
          className="absolute left-6 md:left-1/2 top-0 w-[2px] -translate-x-1/2 origin-top"
          style={{
            height: lineHeight,
            background:
              "linear-gradient(180deg, hsl(247 93% 64%), hsl(248 100% 75%))",
            boxShadow: "0 0 18px hsl(248 100% 75% / 0.6)",
          }}
        />

        <ol className="relative list-none p-0 m-0 space-y-12 md:space-y-20">
          {steps.map((s, i) => {
            const right = i % 2 === 1;
            const Icon = s.icon;
            return (
              <li key={s.n} className="relative">
                <div className="grid md:grid-cols-2 md:gap-12 items-center">
                  {/* Spacer for alternating sides on desktop */}
                  {right && <div className="hidden md:block" />}

                  <Reveal delay={i * 0.05} className={right ? "md:order-2" : ""}>
                    <div
                      className={`relative ml-16 md:ml-0 rounded-2xl border bg-background p-6 sm:p-7 ${
                        right ? "md:mr-12" : "md:ml-12"
                      }`}
                      style={{
                        borderColor: "hsl(var(--brand-purple) / 0.14)",
                        boxShadow: "var(--shadow-card)",
                      }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-purple bg-brand-purple/10 rounded-full px-2.5 py-1">
                          Step {Number(s.n)} · {s.badge}
                        </span>
                      </div>
                      <h3 className="font-extrabold text-brand-deep text-xl sm:text-2xl leading-tight">
                        {s.title}
                      </h3>
                      <p className="mt-2.5 text-ink-secondary text-[15px] leading-relaxed">
                        {s.body}
                      </p>
                    </div>
                  </Reveal>

                  {/* Empty cell to preserve grid on left-side rows */}
                  {!right && <div className="hidden md:block" />}
                </div>

                {/* Node on the rail */}
                <div
                  aria-hidden
                  className="absolute top-6 md:top-1/2 left-6 md:left-1/2 -translate-x-1/2 md:-translate-y-1/2"
                >
                  <motion.div
                    initial={{ scale: 0.4, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                  >
                    <div
                      aria-hidden
                      className="absolute inset-[-8px] rounded-full border border-dashed border-brand-purple/40 spin-slow"
                    />
                    <div
                      className="relative w-12 h-12 rounded-full flex items-center justify-center text-white"
                      style={{
                        background:
                          "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 49% 15%))",
                        boxShadow:
                          "0 6px 20px hsl(247 93% 64% / 0.45), 0 0 0 4px hsl(0 0% 100%)",
                      }}
                    >
                      <Icon aria-hidden size={20} />
                    </div>
                  </motion.div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <Reveal delay={0.2} className="text-center mt-14 sm:mt-16">
        <p className="text-ink-secondary mb-5 px-4">
          Start with a free audit — we walk you through exactly what this looks like for your practice.
        </p>
        <a
          href="/free-audit"
          className="btn-primary-grad inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold min-h-[48px]"
        >
          Get My Free Audit <ArrowRight aria-hidden size={18} />
        </a>
      </Reveal>
    </Section>
  );
}
