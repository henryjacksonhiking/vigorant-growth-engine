import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Counter } from "./GlobalFx";

export default function Problem() {
  return (
    <section className="relative py-32 overflow-hidden" style={{ background: "hsl(var(--charcoal))" }}>
      <div aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(248 93% 71% / 0.10), transparent 70%)" }} />
      <div className="container relative grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="section-label-light">The Problem</span>
          <h2 className="text-white font-extrabold mt-5 leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.04em" }}>
            <Reveal>Most practices leave</Reveal>
            <Reveal delay={0.1}><span className="gradient-text">60–70% of revenue</span></Reveal>
            <Reveal delay={0.2}>on the table.</Reveal>
          </h2>
          <p className="mt-7 text-white/60 max-w-[440px] leading-[1.75]">
            Missed follow-ups, unfilled cancellations, and zero AI search visibility quietly drain your schedule every month. You're too busy treating patients to notice — until growth flatlines.
          </p>
          <a href="#why" className="mt-7 inline-flex items-center gap-2 text-brand-purple font-bold group">
            See how Vigorant fixes this
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="space-y-4">
          <Stat n={67} suffix="%" label="of cancelled appointments never rebooked" note="Average across dental & chiropractic" />
          <Stat n={4.2} decimals={1} suffix="×" label="more expensive to acquire vs. reactivate a patient" note="Industry benchmark, 2024" />
          <Stat n={180} prefix="$" suffix="k" label="avg annual revenue left unrealized per practice" note="Based on client audits" />
        </div>
      </div>
    </section>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.span className="block"
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}>{children}</motion.span>
  );
}

function Stat({ n, suffix = "", prefix = "", decimals = 0, label, note }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl p-7 transition-all duration-300 hover:translate-x-2"
      style={{ background: "hsl(var(--charcoal-2))", border: "1px solid hsl(0 0% 100% / 0.06)" }}
    >
      <div className="font-extrabold text-[2.8rem] leading-none gradient-text" style={{ letterSpacing: "-0.06em" }}>
        <Counter to={n} prefix={prefix} suffix={suffix} decimals={decimals} />
      </div>
      <div className="mt-3 text-white/85 font-medium">{label}</div>
      <div className="mt-1 text-white/40 text-sm font-mono-ui">{note}</div>
    </motion.div>
  );
}
