import { useEffect, useState } from "react";
import { X, Phone } from "lucide-react";

const STORAGE_KEY = "vg-sticky-cta-dismissed";
const PHONE = "+18000000000";

export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "1") return;
    const onScroll = () => {
      const h = document.documentElement;
      const pct = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      setShow(pct > 0.3);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setShow(false);
  };

  return (
    <div
      role="region"
      aria-label="Get your free Vigorant growth audit"
      aria-hidden={!show}
      className={`fixed z-[90] left-0 right-0 bottom-0 sm:left-auto sm:right-6 sm:bottom-6 transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      {/* Mobile: two-button bar */}
      <div className="sm:hidden flex items-stretch gap-2 p-3 bg-white border-t border-brand-purple/15 shadow-[0_-8px_24px_hsl(248_49%_15%/0.10)]">
        <a
          href="/free-audit"
          className="flex-1 inline-flex items-center justify-center font-bold text-[14px] text-white rounded-full px-4 min-h-[48px]"
          style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 49% 15%))" }}
        >
          Free Audit
        </a>
        <a
          href={`tel:${PHONE}`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 font-bold text-[14px] text-brand-deep border-2 border-brand-purple/40 rounded-full px-4 min-h-[48px]"
        >
          <Phone aria-hidden size={16} /> Call Us
        </a>
        <button
          onClick={dismiss}
          aria-label="Dismiss"
          className="text-ink-secondary p-2 min-w-[44px] min-h-[44px] inline-flex items-center justify-center"
        >
          <X aria-hidden size={18} />
        </button>
      </div>

      {/* Desktop: pill */}
      <div
        className="hidden sm:flex items-center gap-3 py-2 pr-2 pl-5 rounded-full text-white shadow-[0_16px_48px_hsl(248_49%_15%/0.35)]"
        style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 49% 15%))" }}
      >
        <a
          href="/free-audit"
          className="inline-flex flex-col items-start font-bold text-[14px] bg-white text-brand-deep px-5 py-2 rounded-full min-h-[44px] justify-center leading-tight"
        >
          <span>Get Your Free Growth Audit — No Commitment</span>
          <span className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-brand-purple font-normal mt-0.5">
            Takes less than 2 minutes
          </span>
        </a>
        <button
          onClick={dismiss}
          aria-label="Dismiss"
          className="text-white/90 hover:text-white p-2 min-w-[44px] min-h-[44px] inline-flex items-center justify-center"
        >
          <X aria-hidden size={18} />
        </button>
      </div>
    </div>
  );
}
