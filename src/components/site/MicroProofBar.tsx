import { Counter } from "./GlobalFx";
import { Reveal } from "./Section";

const metrics = [
  { value: 100, suffix: "+", label: "Healthcare Practices Served", sub: "Dental, Medical & Chiro" },
  { value: 250, suffix: "+", label: "Locations Managed", sub: "Across the U.S." },
  { value: 3.8, suffix: " Yrs", label: "Avg. Client Retention", decimals: 1, sub: "Industry avg: 1.2 years" },
  { value: 250, suffix: "k+", prefix: "$", label: "Monthly Ad Spend Managed", sub: "Google, Meta & More" },
  { value: 500, suffix: "+", label: "AI Visibility Wins", sub: "AI Overview Citations" },
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
        <dl className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-5 md:gap-y-0 md:gap-0">
          {metrics.map((m, i) => (
            <Reveal
              key={m.label}
              delay={i * 0.06}
              className={`flex flex-col items-center text-center px-1 sm:px-2 md:px-4 ${i > 0 ? "md:border-l md:border-white/15" : ""}`}
            >
              <dt className="sr-only">{m.label}</dt>
              <dd className="flex flex-col items-center w-full">
                <div className="font-display font-bold text-white leading-none flex items-end justify-center min-h-[44px] sm:min-h-[52px] w-full"
                  style={{ fontSize: "clamp(28px, 4.4vw, 44px)" }}>
                  <Counter
                    to={m.value}
                    prefix={m.prefix ?? ""}
                    suffix={m.suffix ?? ""}
                    decimals={m.decimals ?? 0}
                    duration={1600}
                  />
                </div>
                <div className="mt-3 font-mono-ui text-[10px] sm:text-[12px] uppercase tracking-[0.12em] text-white/80 px-1 sm:px-2 min-h-[3.4em] sm:min-h-[2.8em] flex items-center justify-center text-center w-full">
                  {m.label}
                </div>
                <div className="mt-1 text-[11px] text-white/55 px-1 sm:px-2 text-center min-h-[2.8em] sm:min-h-[1.6em] flex items-start justify-center w-full">{m.sub}</div>
              </dd>
            </Reveal>
          ))}
        </dl>
        <p className="mt-10 text-center text-white/70 text-[13px] sm:text-[14px]">
          Trusted by independent practices and multi-location groups across the United States
        </p>
      </div>
    </section>
  );
}
