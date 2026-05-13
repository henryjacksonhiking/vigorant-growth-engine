import { Counter } from "./GlobalFx";

const stats = [
  { n: 120, suffix: "+", label: "Healthcare Practices Served" },
  { n: 4800, suffix: "+", label: "New Patients/Month Attributed" },
  { n: 4.9, suffix: "★", decimals: 1, label: "Average Client Rating" },
  { n: 14, prefix: "$", suffix: "M+", label: "Patient Revenue Generated" },
];

const practices = ["Sunrise Family Dental", "Mountain Spine Chiro", "Ridgeline Family Med", "Coastal Smile Studio", "Apex Wellness Group", "Cedar Peak Pediatrics"];

export default function SocialProof() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(254 91% 23%) 0%, hsl(252 70% 32%) 50%, hsl(254 80% 22%) 100%)" }}>
      <div className="container relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10">
          {stats.map((s, i) => (
            <div key={s.label} className={`text-center ${i > 0 ? "lg:border-l border-white/10" : ""} px-6`}>
              <div className="font-extrabold text-white" style={{ fontSize: "clamp(40px, 5vw, 64px)", letterSpacing: "-0.03em" }}>
                <Counter to={s.n} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </div>
              <div className="mt-2 text-white/60 text-sm">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 text-center">
          <div className="font-mono-ui text-[12px] text-white/40 uppercase tracking-[0.12em]">Trusted by practices across the United States</div>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {practices.map((p) => (
              <span key={p} className="text-white/50 text-sm px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
