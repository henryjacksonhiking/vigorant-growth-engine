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
    <section
      aria-label="Social proof and key metrics"
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{ background: "linear-gradient(135deg, hsl(248 49% 15%) 0%, hsl(252 44% 33%) 50%, hsl(248 49% 12%) 100%)" }}
    >
      <div className="container relative">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-y-10">
          {stats.map((s, i) => (
            <div key={s.label} className={`text-center ${i > 0 ? "lg:border-l border-white/15" : ""} px-3 sm:px-6`}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-extrabold text-white" style={{ fontSize: "clamp(32px, 6vw, 64px)", letterSpacing: "-0.03em" }}>
                <Counter to={s.n} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </dd>
              <dd aria-hidden className="mt-2 text-white/85 text-sm">{s.label}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 sm:mt-14 pt-8 border-t border-white/15 text-center">
          <h2 className="font-mono-ui text-[12px] text-white/75 uppercase tracking-[0.12em]">Trusted by practices across the United States</h2>
          <ul className="mt-5 flex flex-wrap justify-center gap-2.5 sm:gap-3 list-none p-0">
            {practices.map((p) => (
              <li key={p} className="text-white/90 text-sm px-3.5 py-1.5 rounded-full border border-white/20 bg-white/10">{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
