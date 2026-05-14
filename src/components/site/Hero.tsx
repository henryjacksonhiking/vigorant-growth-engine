import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, TrendingUp } from "lucide-react";
import { useTilt, Counter } from "./GlobalFx";
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

      <div className="container relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7 order-2 lg:order-1">
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
            style={{ fontSize: "clamp(36px, 8vw, 82px)", letterSpacing: "-0.03em" }}
          >
            <Line delay={0.4}>More Patients.</Line>
            <Line delay={0.55}>Predictable Growth.</Line>
            <Line delay={0.7}><span className="gradient-text">Powered by AI.</span></Line>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.05 }}
            className="mt-6 sm:mt-7 text-base sm:text-[18px] text-ink-secondary max-w-[490px] leading-[1.7]"
          >
            We help dental, chiropractic, and medical practices attract more patients through AI-driven SEO, paid advertising, and conversion-focused websites. No guesswork. No long-term contracts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <a
              href="#audit"
              className="btn-primary-grad inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold min-h-[48px]"
            >
              Get Your Free Practice Audit <ArrowRight aria-hidden size={18} />
            </a>
            <a
              href="#how-it-works"
              className="btn-secondary-outline inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-medium min-h-[48px]"
            >
              See How It Works <span aria-hidden>→</span>
            </a>
          </motion.div>

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
          className="lg:col-span-5 order-1 lg:order-2 relative"
        >
          <LotusOrbit
            className="absolute inset-0 -z-10 m-auto w-[120%] h-[120%] -top-8 sm:-top-12 pointer-events-none opacity-90"
          />
          <DashboardCard />
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

function DashboardCard() {
  const tiltRef = useTilt<HTMLDivElement>(5);
  return (
    <div
      className="float-card"
      role="img"
      aria-label="Live preview of Vigorant patient acquisition dashboard for Sunrise Family Dental, showing 47 new patients booked, 83 reviews collected, 112 reactivated patients and 68 thousand dollars in added revenue."
    >
      <div ref={tiltRef}
        className="bg-white border border-black/[0.08] rounded-[22px] p-5 sm:p-7 transition-transform duration-300"
        style={{ boxShadow: "0 24px 80px hsl(248 49% 15% / 0.09), 0 0 0 1px hsl(0 0% 100% / 0.9) inset" }}>
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-start gap-3">
            <div aria-hidden className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 49% 15%))" }}>
              <TrendingUp size={18} className="text-white" />
            </div>
            <div>
              <div className="font-bold text-[14px] text-brand-deep leading-tight">Sunrise Family Dental</div>
              <div className="font-mono-ui text-[11px] text-ink-secondary mt-0.5">Generated by Vigorant AI · Live Preview</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 font-mono-ui text-[11px] text-brand-purple">
            <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-brand-purple pulse-dot" /> Live
          </div>
        </div>

        <div className="border-t border-black/[0.06] pt-4 space-y-3">
          <Row delay={1500} bg="bg-brand-purple/8" emoji="📅" label="New Patients Booked" sub="Automated re-engagement" value="+47" tone="text-brand-purple" />
          <Row delay={2000} bg="bg-brand-deep/8" emoji="⭐" label="Google Reviews Collected" sub="Post-visit automation" value="+83" tone="text-brand-deep" />
          <Row delay={2500} bg="bg-[hsl(248_100%_75%/0.14)]" emoji="💬" label="Reactivated Patients" sub="Dormant list win-back" value="+112" tone="text-[hsl(248_100%_55%)]" />
          <Row delay={3000} bg="bg-brand-purple/12" emoji="💰" label="Revenue Added" sub="90-day attribution" value="+$68k" tone="text-brand-purple" />
        </div>

        <div className="mt-5 pt-4 border-t border-black/[0.06]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[12px] font-semibold text-brand-deep">Activation Progress</span>
            <span className="font-mono-ui text-[12px] text-brand-purple"><Counter to={78} suffix="%" duration={1400} /></span>
          </div>
          <ProgressBar />
        </div>
      </div>
    </div>
  );
}

function Row({ delay, bg, emoji, label, sub, value, tone }: any) {
  const [show, setShow] = useState(false);
  useEffect(() => { const t = setTimeout(() => setShow(true), delay); return () => clearTimeout(t); }, [delay]);
  return (
    <div className="flex items-center gap-3 transition-all duration-500 ease-out"
      style={{ opacity: show ? 1 : 0, transform: show ? "translateX(0)" : "translateX(-8px)" }}>
      <div aria-hidden className={`w-[30px] h-[30px] rounded-lg ${bg} flex items-center justify-center text-[14px]`}>{emoji}</div>
      <div className="flex-1 min-w-0">
        <div className="text-[13px] font-semibold text-brand-deep truncate">{label}</div>
        <div className="text-[11px] text-ink-secondary truncate">{sub}</div>
      </div>
      <div className={`font-bold ${tone}`}>{value}</div>
    </div>
  );
}

function ProgressBar() {
  const [w, setW] = useState(0);
  useEffect(() => { const t = setTimeout(() => setW(78), 3400); return () => clearTimeout(t); }, []);
  return (
    <div
      className="h-1.5 rounded-full bg-brand-purple/10 overflow-hidden"
      role="progressbar"
      aria-valuenow={78}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Activation progress"
    >
      <div className="h-full rounded-full transition-[width] duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ width: `${w}%`, background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 49% 15%))" }} />
    </div>
  );
}
