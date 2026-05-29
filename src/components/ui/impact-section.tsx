"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CASE_STUDIES } from "@/data/caseStudies";

type CardPalette = { bg: string; text: string; subtle: string };

const UNIFIED: CardPalette = { bg: "bg-brand-deep", text: "text-white", subtle: "text-white/80" };
const PALETTES: CardPalette[] = [UNIFIED, UNIFIED, UNIFIED, UNIFIED];

const IMAGES = [
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=1200&q=80",
];

function extractMetric(result: string): { metric: string; label: string } {
  // Look for first number with optional symbol/unit
  const match = result.match(/([+\-]?\$?\d+(?:\.\d+)?(?:x|%|\+)?)/i);
  if (match) {
    const metric = match[1];
    const label = result.replace(match[0], "").replace(/^[\s—:–-]+/, "").trim();
    return { metric, label: label || result };
  }
  return { metric: "★", label: result };
}

export default function ImpactSection() {
  const [openCard, setOpenCard] = useState(0);

  const cards = CASE_STUDIES.slice(0, 4).map((cs, i) => {
    const { metric, label } = extractMetric(cs.results[0]);
    return {
      ...cs,
      metric,
      label,
      palette: PALETTES[i % PALETTES.length],
      image: IMAGES[i % IMAGES.length],
    };
  });

  return (
    <section className="bg-background py-16 sm:py-20 md:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end mb-10">
          <div className="max-w-2xl">
            <span className="section-label">Case Studies</span>
            <h2
              className="mt-3 font-extrabold text-brand-deep leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(28px,5.5vw,52px)", letterSpacing: "-0.03em" }}
            >
              Results that speak for themselves
            </h2>
            <p className="mt-5 text-ink-secondary text-[16px] sm:text-[17px]">
              From cost-per-lead to ROAS, our clients see measurable impact across every
              metric that matters.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3 md:h-[460px]">
          {cards.map((card, idx) => {
            const isOpen = openCard === idx;
            return (
              <motion.div
                key={card.slug}
                onMouseEnter={() => setOpenCard(idx)}
                onFocus={() => setOpenCard(idx)}
                onClick={() => setOpenCard(idx)}
                tabIndex={0}
                animate={{ flex: isOpen ? 4.8 : 1.2 }}
                transition={{ type: "spring", stiffness: 220, damping: 28 }}
                className={`${card.palette.bg} ${card.palette.text} relative overflow-hidden rounded-2xl border border-black/5 h-[300px] md:h-full cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-brand-purple`}
                style={{ minWidth: 0 }}
              >
                {isOpen ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    className="h-full w-full grid grid-cols-1 md:grid-cols-2"
                  >
                    <div className="p-7 md:p-9 flex flex-col justify-between min-w-0">
                      <div>
                        <span className="font-mono-ui text-[11px] uppercase tracking-[0.14em] opacity-80">
                          {card.tag}
                        </span>
                        <h3 className="mt-3 font-extrabold leading-[1.1] text-[24px] md:text-[30px]">
                          {card.client}
                        </h3>
                        <p className={`mt-4 text-[14px] leading-relaxed ${card.palette.subtle}`}>
                          {card.challenge.length > 180
                            ? card.challenge.slice(0, 180) + "…"
                            : card.challenge}
                        </p>
                      </div>
                      <Link
                        to={`/case-studies/${card.slug}`}
                        className="mt-6 inline-flex items-center gap-2 font-bold text-[14px] hover:gap-3 transition-all"
                      >
                        Read case study <ArrowRight size={16} aria-hidden />
                      </Link>
                    </div>
                    <div className="relative h-full min-h-[200px]">
                      <img
                        src={card.image}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/55 backdrop-blur px-4 py-3 text-white">
                        <div className="font-extrabold text-[28px] leading-none">{card.metric}</div>
                        <div className="mt-1 text-[12px] opacity-90 line-clamp-2">{card.label}</div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="h-full w-full p-5 flex flex-col justify-between">
                    <span className="font-mono-ui text-[10px] uppercase tracking-[0.14em] opacity-80 [writing-mode:vertical-rl] md:[writing-mode:vertical-rl] rotate-180 self-end">
                      {card.tag}
                    </span>
                    <div>
                      <div className="font-extrabold text-[34px] leading-none">{card.metric}</div>
                      <div className={`mt-2 text-[13px] font-medium ${card.palette.subtle} line-clamp-2`}>
                        {card.label}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-ink-secondary text-[15px]">
            See your potential. Estimate your growth with our{" "}
            <Link to="/free-audit" className="text-brand-purple font-semibold hover:underline">
              free ROI calculator
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
