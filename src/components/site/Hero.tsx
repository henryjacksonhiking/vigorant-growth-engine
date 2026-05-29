import { motion } from "framer-motion";
import { ArrowRight, Calendar, Star, MessageCircle, DollarSign, TrendingUp } from "lucide-react";
import { useTilt } from "./GlobalFx";
import { LotusOrbit } from "./Illustrations";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[88vh] flex items-center pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 z-0 grid-overlay" />
      <div aria-hidden className="absolute -top-20 -right-16 w-[420px] sm:w-[520px] h-[420px] sm:h-[520px] rounded-full pointer-events-none orb-a"
        style={{ background: "radial-gradient(circle, hsl(247 93% 64% / 0.22), transparent 70%)", filter: "blur(80px)" }} />
      <div aria-hidden className="absolute bottom-16 right-10 sm:right-48 w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] rounded-full pointer-events-none orb-b"
        style={{ background: "radial-gradient(circle, hsl(248 100% 75% / 0.14), transparent 70%)", filter: "blur(60px)" }} />

      <div className="container relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        <div className="w-full max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2.5 font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-purple bg-brand-purple/8 border border-brand-purple/20 rounded-full px-3.5 py-1.5"
          >
            <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-brand-purple pulse-dot" />
            AI-Powered Patient Acquisition System
          </motion.div>

          <h1
            id="hero-heading"
            className="font-display font-bold text-brand-deep mt-6 sm:mt-7 leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(36px, 7vw, 76px)", letterSpacing: "-0.03em" }}
          >
            <Line delay={0.4}>More Patients.</Line>
            <Line delay={0.55}>More Revenue.</Line>
            <Line delay={0.7}><span className="gradient-text">Less Guesswork.</span></Line>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.05 }}
            className="mt-6 sm:mt-7 text-base sm:text-[18px] text-ink-secondary max-w-[560px] leading-[1.7]"
          >
            Vigorant helps dental, medical, and chiropractic practices dominate local search, run profitable paid ads, and convert more website visitors into booked appointments — powered by AI and built specifically for healthcare.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <a
              href="/free-audit"
              className="btn-primary-grad inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold min-h-[48px]"
            >
              Request Your Free Growth Audit <ArrowRight aria-hidden size={18} />
            </a>
            <a
              href="#testimonials"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 font-semibold text-brand-purple hover:text-brand-deep transition-colors min-h-[44px]"
            >
              See Client Results <span aria-hidden>→</span>
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.3 }}
            className="mt-3 text-[13px] text-ink-secondary"
          >
            No long-term contracts. No setup fees. Results-first approach.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.38 }}
            className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono-ui text-[12px] text-ink-secondary list-none p-0"
            aria-label="Trust signals"
          >
            <li><span aria-hidden>★★★★★</span> 4.9 on Google</li>
            <li aria-hidden><Sep /></li>
            <li>120+ Practices</li>
            <li aria-hidden><Sep /></li>
            <li>No long-term contracts</li>
            <li aria-hidden><Sep /></li>
            <li>HIPAA Compliant</li>
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
          className="w-full relative"
        >
          <LotusOrbit
            className="absolute inset-0 -z-10 m-auto w-[120%] h-[120%] -top-8 sm:-top-12 pointer-events-none opacity-90"
          />
          <StatsCard />
        </motion.div>
      </div>
    </section>
  );
}

function Sep() { return <span className="hidden sm:inline w-px h-3 bg-brand-purple/30" />; }

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span className="block" initial={{ y: "108%" }} animate={{ y: 0 }} transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}>
        {children}
      </motion.span>
    </span>
  );
}

const STATS = [
  { icon: Calendar, label: "New Patients Booked", sub: "Automated re-engagement", value: "+47" },
  { icon: Star, label: "Google Reviews Collected", sub: "Post-visit automation", value: "+83" },
  { icon: MessageCircle, label: "Reactivated Patients", sub: "Dormant list win-back", value: "+112" },
  { icon: DollarSign, label: "Revenue Added", sub: "90-day attribution", value: "+$68k" },
];

function StatsCard() {
  const tiltRef = useTilt<HTMLDivElement>(6);

  return (
    <div className="float-card" role="region" aria-label="Vigorant AI live preview — Sunrise Family Dental results">
      <div
        ref={tiltRef}
        className="relative rounded-[22px] bg-white border border-brand-purple/15 p-5 sm:p-6 transition-transform duration-300"
        style={{ boxShadow: "0 24px 80px hsl(248 49% 15% / 0.12), 0 0 0 1px hsl(0 0% 100%) inset" }}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-purple to-brand-bright flex items-center justify-center text-white shadow-md">
              <TrendingUp size={20} aria-hidden />
            </div>
            <div>
              <div className="font-display font-bold text-brand-deep text-[16px] leading-tight">Sunrise Family Dental</div>
              <div className="text-[12px] text-ink-secondary mt-0.5">Generated by Vigorant AI · Live Preview</div>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 font-mono-ui text-[11px] text-brand-purple">
            <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-brand-purple pulse-dot" />
            Live
          </span>
        </div>

        <div className="my-4 h-px bg-brand-purple/10" />

        <ul className="flex flex-col gap-3.5">
          {STATS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.li
                key={s.label}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-brand-purple/8 flex items-center justify-center text-brand-purple shrink-0">
                  <Icon size={16} aria-hidden />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-brand-deep text-[14px] leading-tight">{s.label}</div>
                  <div className="text-[12px] text-ink-secondary mt-0.5">{s.sub}</div>
                </div>
                <div className="font-display font-bold text-brand-purple text-[18px] tabular-nums">{s.value}</div>
              </motion.li>
            );
          })}
        </ul>

        <div className="my-4 h-px bg-brand-purple/10" />

        <div className="flex items-center justify-between mb-2">
          <div className="font-semibold text-brand-deep text-[13px]">Activation Progress</div>
          <div className="font-mono-ui text-[12px] text-brand-purple">78%</div>
        </div>
        <div className="h-2 rounded-full bg-brand-purple/10 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "78%" }}
            transition={{ duration: 1.2, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
            className="h-full rounded-full bg-gradient-to-r from-brand-purple to-brand-bright"
          />
        </div>
      </div>
    </div>
  );
}
