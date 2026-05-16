import { motion } from "framer-motion";

const offers = [
  "Full review of your current online visibility",
  "Competitor gap analysis for your local market",
  "Patient acquisition opportunity estimate",
  "Custom growth roadmap — no obligation",
];

export default function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden flex items-center justify-center"
      style={{ minHeight: 520, background: "linear-gradient(160deg, hsl(248 49% 15%) 0%, hsl(252 44% 33%) 45%, hsl(248 49% 12%) 100%)" }}>
      <a id="audit" aria-hidden className="absolute" />
      <div aria-hidden className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(248 100% 75% / 0.12), transparent 70%)", filter: "blur(80px)" }} />
      <div aria-hidden className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(247 93% 64% / 0.20), transparent 70%)", filter: "blur(60px)" }} />

      <div className="container relative py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-white max-w-[600px] mx-auto leading-[1.15]"
          style={{ fontSize: "clamp(32px, 5vw, 56px)" }}>
          Find Out Exactly How Many Patients Your Practice Is Missing Each Month
        </motion.h2>

        <ul className="mt-9 inline-block text-left">
          {offers.map((o, i) => (
            <motion.li key={o}
              initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
              className="text-white/85 text-base flex items-center gap-3" style={{ lineHeight: 2.2 }}>
              <span className="text-brand-cyan">✦</span> {o}
            </motion.li>
          ))}
        </ul>

        <div className="mt-6 font-mono-ui text-xs text-brand-cyan/85">
          We accept 8 new audit requests per month. 3 spots remaining.
        </div>

        <a href="#" className="mt-8 inline-flex items-center bg-white text-brand-deep font-bold text-[16px] sm:text-[17px] px-8 sm:px-10 py-4 rounded-full transition-all duration-300 hover:bg-[hsl(248_100%_75%)] hover:text-white hover:scale-[1.02] hover:shadow-[0_8px_32px_hsl(248_100%_75%/0.45)] min-h-[52px]">
          Claim My Free Practice Audit <span aria-hidden className="ml-1">→</span>
        </a>

        <div className="mt-4 text-white/75 text-sm">
          No commitment. No hard sell. Just clarity on what's possible for your practice.
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {["HIPAA Compliant", "Live in 48 Hours", "No Long-Term Contracts"].map((t) => (
            <span key={t} className="font-mono-ui text-[11px] text-white/70 bg-white/10 border border-white/20 rounded-full px-4 py-1.5">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
