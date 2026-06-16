import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "./Section";

export type FAQItem = {
  q?: string;
  a?: string;
  question?: string;
  answer?: string;
};

type Props = {
  faqs: FAQItem[];
  /** Visual variant — light is default (works on white & off-white). dark = on dark bg. */
  variant?: "light" | "dark";
  /** Default open index. Pass null for all collapsed. Default: 0 */
  defaultOpen?: number | null;
  className?: string;
};

/**
 * Site-wide standardized FAQ accordion.
 * Visual + behavior baseline = homepage FAQ (src/components/site/FAQ.tsx).
 * Use inside any section heading wrapper; this renders the list only.
 */
export default function SharedFAQList({ faqs, variant = "light", defaultOpen = 0, className = "" }: Props) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();
  const isDark = variant === "dark";

  return (
    <div
      className={`max-w-3xl mx-auto mt-10 sm:mt-12 space-y-3 px-1 sm:px-0 ${className}`}
      role="list"
    >
      {faqs.map((f, i) => {
        const q = f.q ?? f.question ?? "";
        const a = f.a ?? f.answer ?? "";
        const isOpen = open === i;
        const btnId = `${baseId}-q-${i}`;
        const panelId = `${baseId}-p-${i}`;
        return (
          <Reveal key={`${q}-${i}`} delay={i * 0.04}>
            <div
              className={[
                "rounded-xl overflow-hidden min-w-0 border transition-colors",
                isDark
                  ? "bg-white/[0.04] border-white/15 hover:border-white/25"
                  : "bg-white border-brand-purple/15 hover:border-brand-purple/30",
              ].join(" ")}
              role="listitem"
            >
              <h3 className="m-0">
                <button
                  id={btnId}
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={[
                    "w-full min-w-0 flex items-start justify-between gap-3 sm:gap-6 text-left px-4 sm:px-6 py-5 min-h-[56px] transition-colors",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/60 focus-visible:ring-offset-0",
                    isDark ? "hover:bg-white/[0.04]" : "hover:bg-brand-purple/5",
                  ].join(" ")}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span
                    className={[
                      "text-[15px] sm:text-[17px] font-semibold min-w-0 flex-1 break-words pr-1",
                      isDark ? "text-white" : "text-brand-deep",
                    ].join(" ")}
                  >
                    {q}
                  </span>
                  <Plus
                    aria-hidden
                    size={20}
                    className={[
                      "flex-shrink-0 mt-1 transition-transform duration-300",
                      isDark ? "text-white/80" : "text-brand-purple",
                    ].join(" ")}
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0)" }}
                  />
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={btnId}
                hidden={!isOpen}
                className="overflow-hidden"
              >
                <p
                  className={[
                    "px-4 sm:px-6 pb-6 leading-[1.8] break-words text-[15px] sm:text-[16px]",
                    isDark ? "text-white/80" : "text-ink-secondary",
                  ].join(" ")}
                >
                  {a}
                </p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
