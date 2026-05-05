import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden">
      {/* Atmospheric orbs */}
      <div aria-hidden className="absolute inset-0 z-0 dot-grid opacity-60" />
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full pointer-events-none float-slow"
        style={{
          background: "radial-gradient(circle, hsl(248 93% 71% / 0.18) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none float-slow"
        style={{
          background: "radial-gradient(circle, hsl(188 100% 62% / 0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
          animationDelay: "3s",
        }}
      />
      <div
        aria-hidden
        className="absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(254 91% 23% / 0.08) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="container relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 font-mono-ui text-[11px] uppercase tracking-[0.1em] text-brand-purple bg-brand-purple/10 border border-brand-purple/20 rounded-full px-3.5 py-1.5"
          >
            <Sparkles size={12} /> AI-Powered Patient Acquisition System
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-brand-deep mt-6 leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(48px, 6vw, 76px)" }}
          >
            More Patients.
            <br />
            Predictable Growth.
            <br />
            <span className="gradient-text">Powered by AI.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-7 text-lg text-ink-secondary max-w-[520px] leading-relaxed"
          >
            We help dental, chiropractic, and medical practices attract more patients through AI-driven SEO, paid advertising, and conversion-focused websites. No guesswork. No long-term contracts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#audit"
              className="btn-primary-grad inline-flex items-center gap-2 px-8 py-4 rounded-[10px] font-semibold text-base"
            >
              Get Your Free Practice Audit <ArrowRight size={18} />
            </a>
            <a
              href="#how-it-works"
              className="text-brand-purple font-medium hover:underline underline-offset-4"
            >
              See How It Works ↓
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono-ui text-xs text-ink-muted"
          >
            <span>★★★★★ 4.9 on Google</span>
            <span className="hidden sm:inline w-px h-3 bg-brand-purple/20" />
            <span>120+ Healthcare Practices</span>
            <span className="hidden sm:inline w-px h-3 bg-brand-purple/20" />
            <span>No long-term contracts</span>
          </motion.div>
        </div>

        {/* Right - Dashboard card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5"
        >
          <DashboardCard />
        </motion.div>
      </div>
    </section>
  );
}

function DashboardCard() {
  return (
    <div
      className="glass-strong rounded-3xl p-6 transition-transform duration-500 ease-out lg:[transform:perspective(1000px)_rotateY(-8deg)_rotateX(4deg)] hover:[transform:perspective(1000px)_rotateY(0deg)_rotateX(0deg)]"
    >
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-[13px] font-semibold text-brand-deep">Practice Growth Dashboard</h3>
          <p className="text-[11px] text-ink-muted mt-0.5">Updated 2m ago</p>
        </div>
        <div className="flex items-center gap-1.5 font-mono-ui text-[11px] text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-dot" /> Live
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-5">
        <Stat value="+34" label="New Patients" tone="text-brand-deep" />
        <Stat value="↓42%" label="Cost / Patient" tone="text-emerald-600" />
        <Stat value="4.9★" label="Reviews" tone="text-amber-600" />
      </div>

      <div className="bg-surface-secondary rounded-xl p-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-medium text-ink-secondary">Patient calls — 30 days</span>
          <span className="font-mono-ui text-[11px] text-brand-purple">+18.4%</span>
        </div>
        <Sparkline />
      </div>

      <div className="space-y-2 mb-4">
        <CallRow color="bg-brand-purple" text="Bright Smile Dental — 3 new appts today" />
        <CallRow color="bg-brand-cyan" text="Mountain Spine Chiro — 2 new appts today" />
        <CallRow color="bg-emerald-500" text="Ridgeline Family Med — 4 new appts today" />
      </div>

      <div className="flex items-center gap-2 bg-brand-cyan/10 border border-brand-cyan/30 rounded-lg px-3 py-2">
        <span className="w-2 h-2 rounded-full bg-brand-cyan pulse-dot" />
        <span className="text-[12px] font-medium text-brand-deep font-mono-ui">AI Optimization Active</span>
      </div>
    </div>
  );
}

function Stat({ value, label, tone }: { value: string; label: string; tone: string }) {
  return (
    <div className="bg-white/60 border border-brand-purple/10 rounded-xl p-3">
      <div className={`font-bold text-xl ${tone}`}>{value}</div>
      <div className="text-[11px] text-ink-muted mt-0.5">{label}</div>
    </div>
  );
}

function CallRow({ color, text }: { color: string; text: string }) {
  return (
    <div className="flex items-center gap-2.5 text-[12px] text-ink-secondary">
      <span className={`w-1.5 h-1.5 rounded-full ${color}`} />
      <span className="truncate">{text}</span>
    </div>
  );
}

function Sparkline() {
  return (
    <svg viewBox="0 0 200 50" className="w-full h-12">
      <defs>
        <linearGradient id="spark" x1="0" x2="1">
          <stop offset="0%" stopColor="hsl(248 93% 71%)" />
          <stop offset="100%" stopColor="hsl(188 100% 62%)" />
        </linearGradient>
        <linearGradient id="sparkFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="hsl(248 93% 71%)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="hsl(248 93% 71%)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 40 L20 35 L40 38 L60 28 L80 32 L100 22 L120 25 L140 18 L160 14 L180 10 L200 6"
        fill="none" stroke="url(#spark)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M0 40 L20 35 L40 38 L60 28 L80 32 L100 22 L120 25 L140 18 L160 14 L180 10 L200 6 L200 50 L0 50 Z"
        fill="url(#sparkFill)" />
      <circle cx="200" cy="6" r="3.5" fill="hsl(188 100% 62%)" />
    </svg>
  );
}
