import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const bullets = [
  "Free Growth Audit — no cost, no obligation",
  "Delivered by a real healthcare marketing strategist",
  "Includes local SEO analysis, AI visibility scan, and ad account review",
];

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden flex items-center justify-center"
      style={{ minHeight: 520, background: "linear-gradient(160deg, hsl(248 49% 15%) 0%, hsl(252 44% 33%) 45%, hsl(248 49% 12%) 100%)" }}
    >
      <a id="audit" aria-hidden className="absolute" />
      <div aria-hidden className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(248 100% 75% / 0.12), transparent 70%)", filter: "blur(80px)" }} />
      <div aria-hidden className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(247 93% 64% / 0.20), transparent 70%)", filter: "blur(60px)" }} />

      <div className="container relative py-20 sm:py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-white max-w-[720px] mx-auto leading-[1.15]"
          style={{ fontSize: "clamp(28px, 5vw, 52px)" }}
        >
          Ready to See Exactly Where Your Practice Is Losing Patients?
        </motion.h2>

        <p className="mt-6 text-white/85 max-w-2xl mx-auto text-[15px] sm:text-[17px] leading-[1.7]">
          Our free Practice Growth Audit identifies your biggest visibility gaps, conversion leaks, and growth opportunities — specific to your specialty, your market, and your goals. No pitch. No pressure. Just clarity.
        </p>

        <ul className="mt-8 inline-block text-left list-none p-0">
          {bullets.map((b, i) => (
            <motion.li
              key={b}
              initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
              className="text-white/90 text-[14px] sm:text-[15px] flex items-start gap-3 py-1.5"
            >
              <span aria-hidden className="text-brand-bright mt-0.5">✓</span> {b}
            </motion.li>
          ))}
        </ul>

        <div className="mt-6 font-mono-ui text-xs text-brand-bright/90">
          We accept 8 new audit requests per month. 3 spots remaining.
        </div>

        <Link
          to="/free-audit"
          className="mt-8 inline-flex items-center bg-white text-brand-deep font-bold text-[16px] sm:text-[17px] px-8 sm:px-10 py-4 rounded-full transition-all duration-300 hover:bg-[hsl(248_100%_75%)] hover:text-white hover:scale-[1.02] hover:shadow-[0_8px_32px_hsl(248_100%_75%/0.45)] min-h-[52px]"
        >
          Request Your Free Growth Audit <span aria-hidden className="ml-1">→</span>
        </Link>

        <p className="mt-5 text-white/80 text-[14px]">
          Prefer to talk first? Call us at{" "}
          <a href="tel:+18336412200" className="font-semibold text-white underline-offset-2 hover:underline">(833) 641-2200</a>{" "}
          or email{" "}
          <a href="mailto:info@vigorant.com" className="font-semibold text-white underline-offset-2 hover:underline">info@vigorant.com</a>
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {["HIPAA Compliant", "Live in 48 Hours", "No Long-Term Contracts"].map((t) => (
            <span key={t} className="font-mono-ui text-[11px] text-white/70 bg-white/10 border border-white/20 rounded-full px-4 py-1.5">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
