import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useRef, useState } from "react";
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

      <div className="container relative z-10 flex flex-col items-center gap-12 lg:gap-16">
        <div className="w-full max-w-3xl text-center">
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
            <Line delay={0.55}>More Revenue.</Line>
            <Line delay={0.7}><span className="gradient-text">Less Guesswork.</span></Line>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.05 }}
            className="mt-6 sm:mt-7 text-base sm:text-[18px] text-ink-secondary max-w-[640px] mx-auto leading-[1.7]"
          >
            Vigorant helps dental, medical, and chiropractic practices dominate local search, run profitable paid ads, and convert more website visitors into booked appointments — powered by AI and built specifically for healthcare.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap justify-center items-stretch sm:items-center gap-3 sm:gap-4"
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
            className="mt-7 grid grid-cols-2 sm:flex sm:flex-wrap justify-center items-center gap-x-5 gap-y-2 font-mono-ui text-[12px] text-ink-secondary list-none p-0 max-w-[320px] sm:max-w-none mx-auto"
            aria-label="Trust signals"
          >
            <li className="text-center sm:text-left"><span aria-hidden>★★★★★</span> 4.9 on Google</li>
            <li aria-hidden><Sep /></li>
            <li className="text-center sm:text-left">120+ Practices</li>
            <li aria-hidden><Sep /></li>
            <li className="text-center sm:text-left">No long-term contracts</li>
            <li aria-hidden><Sep /></li>
            <li className="text-center sm:text-left">HIPAA Compliant</li>
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
          className="w-full max-w-5xl mx-auto relative"
        >
          <LotusOrbit
            className="absolute inset-0 -z-10 m-auto w-[110%] h-[110%] -top-8 sm:-top-12 pointer-events-none opacity-90"
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
  const tiltRef = useTilt<HTMLDivElement>(4);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.controls = true;
    v.play().catch(() => {});
    setPlaying(true);
  };

  return (
    <div
      className="float-card"
      role="region"
      aria-label="Client testimonials video — trusted digital marketing partner for healthcare professionals"
    >
      <div
        ref={tiltRef}
        className="relative rounded-[22px] overflow-hidden bg-brand-deep border border-white/10 transition-transform duration-300"
        style={{ boxShadow: "0 24px 80px hsl(248 49% 15% / 0.18), 0 0 0 1px hsl(0 0% 100% / 0.9) inset" }}
      >
        <div className="aspect-video w-full bg-brand-deep">
          <video
            ref={videoRef}
            src="/videos/client-testimonials-combined.mp4"
            poster="/videos/thumb-hosseini-six-years.jpg"
            className="w-full h-full object-cover"
            playsInline
            preload="metadata"
          />
        </div>
        {!playing && (
          <button
            type="button"
            onClick={handlePlay}
            aria-label="Play client testimonials video"
            className="absolute inset-0 flex items-center justify-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-brand-deep/85 via-brand-deep/30 to-brand-deep/40 transition-opacity group-hover:opacity-90" />
            <span aria-hidden className="absolute top-4 left-4 right-4 flex items-center gap-2 font-mono-ui text-[11px] uppercase tracking-[0.12em] text-white/90">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-bright pulse-dot" />
              Client Testimonials · Watch Now
            </span>
            <span className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/95 flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110 pulse-dot">
              <Play size={18} className="text-brand-deep ml-0.5" fill="currentColor" />
            </span>
            <span aria-hidden className="absolute bottom-4 left-4 right-4 text-white font-bold text-[15px] sm:text-[16px] leading-snug drop-shadow-md">
              Trusted by healthcare leaders across the U.S.
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
