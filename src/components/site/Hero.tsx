import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, TrendingUp } from "lucide-react";
import { useTilt, Counter } from "./GlobalFx";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div aria-hidden className="absolute inset-0 z-0 grid-overlay" />
      <div aria-hidden className="absolute -top-20 -right-16 w-[520px] h-[520px] rounded-full pointer-events-none orb-a"
        style={{ background: "radial-gradient(circle, hsl(248 93% 71% / 0.22), transparent 70%)", filter: "blur(80px)" }} />
      <div aria-hidden className="absolute bottom-16 right-48 w-[380px] h-[380px] rounded-full pointer-events-none orb-b"
        style={{ background: "radial-gradient(circle, hsl(188 100% 62% / 0.14), transparent 70%)", filter: "blur(60px)" }} />
      <div aria-hidden className="absolute top-48 -left-20 w-[320px] h-[320px] rounded-full pointer-events-none orb-c"
        style={{ background: "radial-gradient(circle, hsl(254 91% 23% / 0.10), transparent 70%)", filter: "blur(100px)" }} />

      <div className="container relative z-10 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2.5 font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-purple bg-brand-purple/8 border border-brand-purple/20 rounded-full px-3.5 py-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple pulse-dot" />
            AI-Powered Patient Acquisition System
          </motion.div>

          <h1 className="font-display font-bold text-brand-deep mt-7 leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(52px, 6.5vw, 82px)", letterSpacing: "-0.03em" }}>
            <Line delay={0.4}>More Patients.</Line>
            <Line delay={0.55}>Predictable Growth.</Line>
            <Line delay={0.7}><span className="gradient-text">Powered by AI.</span></Line>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.05 }}
            className="mt-7 text-[18px] text-ink-secondary max-w-[490px] leading-[1.72]"
          >
            We help dental, chiropractic, and medical practices attract more patients through AI-driven SEO, paid advertising, and conversion-focused websites. No guesswork. No long-term contracts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#audit" className="btn-primary-grad inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold">
              Get Your Free Practice Audit <ArrowRight size={18} />
            </a>
            <a href="#how-it-works" className="btn-secondary-outline inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium">
              See How It Works →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.38 }}
            className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 font-mono-ui text-[12px] text-ink-muted"
          >
            <span>★★★★★ 4.9 on Google</span>
            <Sep /> <span>120+ Practices</span>
            <Sep /> <span>No long-term contracts</span>
            <Sep /> <span>HIPAA Compliant</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
          className="lg:col-span-5"
        >
          <DashboardCard />
        </motion.div>
      </div>
    </section>
  );
}

function Sep() { return <span className="hidden sm:inline w-px h-3 bg-brand-purple/20" />; }

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
    <div className="float-card">
      <div ref={tiltRef}
        className="bg-white border border-black/[0.08] rounded-[22px] p-7 transition-transform duration-300"
        style={{ boxShadow: "0 24px 80px hsl(254 91% 23% / 0.09), 0 0 0 1px hsl(0 0% 100% / 0.9) inset" }}>
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-start gap-3">
            <div className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, hsl(248 93% 71%), hsl(254 91% 23%))" }}>
              <TrendingUp size={18} className="text-white" />
            </div>
            <div>
              <div className="font-bold text-[14px] text-brand-deep leading-tight">Sunrise Family Dental</div>
              <div className="font-mono-ui text-[11px] text-ink-muted mt-0.5">Generated by Vigorant AI · Live Preview</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 font-mono-ui text-[11px] text-emerald-600">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-dot" /> Live
          </div>
        </div>

        <div className="border-t border-black/[0.06] pt-4 space-y-3">
          <Row delay={1500} bg="bg-emerald-50" emoji="📅" label="New Patients Booked" sub="Automated re-engagement" value="+47" tone="text-emerald-600" />
          <Row delay={2000} bg="bg-amber-50" emoji="⭐" label="Google Reviews Collected" sub="Post-visit automation" value="+83" tone="text-amber-600" />
          <Row delay={2500} bg="bg-blue-50" emoji="💬" label="Reactivated Patients" sub="Dormant list win-back" value="+112" tone="text-blue-600" />
          <Row delay={3000} bg="bg-brand-purple/10" emoji="💰" label="Revenue Added" sub="90-day attribution" value="+$68k" tone="text-brand-purple" />
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
      <div className={`w-[30px] h-[30px] rounded-lg ${bg} flex items-center justify-center text-[14px]`}>{emoji}</div>
      <div className="flex-1 min-w-0">
        <div className="text-[13px] font-semibold text-brand-deep truncate">{label}</div>
        <div className="text-[11px] text-ink-muted truncate">{sub}</div>
      </div>
      <div className={`font-bold ${tone}`}>{value}</div>
    </div>
  );
}

function ProgressBar() {
  const [w, setW] = useState(0);
  useEffect(() => { const t = setTimeout(() => setW(78), 3400); return () => clearTimeout(t); }, []);
  return (
    <div className="h-1.5 rounded-full bg-brand-purple/10 overflow-hidden">
      <div className="h-full rounded-full transition-[width] duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ width: `${w}%`, background: "linear-gradient(135deg, hsl(248 93% 71%), hsl(254 91% 23%))" }} />
    </div>
  );
}
