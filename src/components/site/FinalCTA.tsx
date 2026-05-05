import { Reveal } from "./Section";
import { ArrowRight } from "lucide-react";

const offers = [
  "Full review of your current online visibility",
  "Competitor gap analysis for your local market",
  "Patient acquisition opportunity estimate",
  "Custom growth roadmap — no obligation",
];

export default function FinalCTA() {
  return (
    <section
      id="audit"
      className="py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, hsl(254 91% 23%) 0%, hsl(252 70% 39%) 50%, hsl(254 80% 28%) 100%)" }}
    >
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(188 100% 62% / 0.15) 0%, transparent 70%)", filter: "blur(80px)" }}
      />
      <div className="container relative">
        <Reveal className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-bold text-white leading-[1.1]" style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
            Find Out Exactly How Many Patients Your Practice Is Missing Each Month
          </h2>

          <ul className="mt-10 space-y-2.5 text-white text-base inline-block text-left">
            {offers.map((o) => (
              <li key={o} className="flex gap-3">
                <span className="text-brand-cyan">✦</span>{o}
              </li>
            ))}
          </ul>

          <p className="mt-8 font-mono-ui text-xs text-brand-cyan/80">
            We accept 8 new audit requests per month to ensure quality. 3 spots remaining.
          </p>

          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 bg-white text-brand-deep font-bold text-base px-10 py-4 rounded-[10px] transition-all duration-200 hover:bg-brand-cyan hover:shadow-[0_8px_32px_rgba(62,230,255,0.4)]"
          >
            Claim My Free Practice Audit <ArrowRight size={18} />
          </a>

          <p className="mt-5 text-sm text-white/50">
            No commitment. No hard sell. Just clarity on what's possible for your practice.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
