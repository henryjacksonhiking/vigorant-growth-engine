import { Reveal } from "./Section";

const stats = [
  { v: "120+", l: "Healthcare Practices Served" },
  { v: "4,800+", l: "New Patients/Month Attributed" },
  { v: "4.9★", l: "Average Client Rating" },
  { v: "$14M+", l: "Patient Revenue Generated" },
];

const logos = ["Bright Smile Dental", "Mountain Spine Chiro", "Ridgeline Family Med", "Coastal Ortho", "Summit Wellness", "Vista Pediatric"];

export default function SocialProof() {
  return (
    <section
      className="py-20"
      style={{ background: "linear-gradient(135deg, hsl(254 91% 23%) 0%, hsl(252 65% 32%) 100%)" }}
    >
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/15">
          {stats.map((s, i) => (
            <Reveal key={s.v} delay={i * 0.08} className="text-center md:px-6">
              <div
                className="font-bold text-white leading-none"
                style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
              >
                {s.v}
              </div>
              <div className="text-sm text-white/60 mt-3">{s.l}</div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-12 text-center">
          <p className="text-[13px] text-white/50 mb-5">Trusted by practices across the US</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-white/30 text-xs uppercase tracking-widest font-mono-ui">
            {logos.map((l) => <span key={l}>{l}</span>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
