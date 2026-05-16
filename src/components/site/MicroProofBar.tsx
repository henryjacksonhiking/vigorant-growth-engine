import { Counter } from "./GlobalFx";
import { Reveal } from "./Section";

const metrics = [
  { value: 100, suffix: "+", label: "Healthcare Practices Served" },
  { value: 250, suffix: "+", label: "Locations Managed" },
  { value: 3.8, suffix: " Yrs", label: "Avg. Client Retention", decimals: 1 },
  { value: 250, suffix: "k+", prefix: "$", label: "Monthly Ad Spend Managed" },
  { value: 500, suffix: "+", label: "AI Visibility Optimizations" },
];

export default function MicroProofBar() {
  return (
    <section
      aria-label="Vigorant key metrics"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, hsl(248 49% 15%) 0%, hsl(250 45% 19%) 50%, hsl(248 49% 12%) 100%)" }}
    >
      <div aria-hidden className="absolute -top-24 -right-20 w-[360px] h-[360px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(248 100% 75% / 0.18), transparent 70%)", filter: "blur(70px)" }} />
      <div className="container relative py-10 sm:py-14">
        <dl className="grid grid-cols-2 md:grid-cols-5 gap-y-8 md:gap-0">
          {metrics.map((m, i) => (
            <Reveal
              key={m.label}
              delay={i * 0.06}
              className={`text-center md:px-4 ${i > 0 ? "md:border-l md:border-white/15" : ""}`}
            >
              <dt className="sr-only">{m.label}</dt>
              <dd>
                <div className="font-display font-bold text-white leading-none"
                  style={{ fontSize: "clamp(28px, 4.4vw, 44px)" }}>
                  <Counter
                    to={m.value}
                    prefix={m.prefix ?? ""}
                    suffix={m.suffix ?? ""}
                    decimals={m.decimals ?? 0}
                    duration={1600}
                  />
                </div>
                <div className="mt-2 font-mono-ui text-[11px] sm:text-[12px] uppercase tracking-[0.12em] text-white/70 px-2">
                  {m.label}
                </div>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
