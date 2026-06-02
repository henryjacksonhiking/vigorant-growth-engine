import { useEffect, useState } from "react";
import { X, Phone } from "lucide-react";

const STORAGE_KEY = "vg-sticky-cta-dismissed";
const PHONE = "+18336412200";

export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "1") return;
    const onScroll = () => {
      const h = document.documentElement;
      const pct = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      const mobile = window.matchMedia("(max-width: 639px)").matches;
      setShow(pct > (mobile ? 0.55 : 0.3));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const applyInset = () => {
      if (window.matchMedia("(max-width: 639px)").matches) {
        document.body.style.paddingBottom = "";
      } else {
        document.body.style.paddingBottom = "";
      }
    };

    applyInset();
    window.addEventListener("resize", applyInset);

    return () => {
      window.removeEventListener("resize", applyInset);
      document.body.style.paddingBottom = "";
    };
  }, [show]);

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setShow(false);
  };

  return (
    <div
      role="region"
      aria-label="Get your free Vigorant growth audit"
      aria-hidden={!show}
      className={`fixed z-[90] left-3 right-3 bottom-3 sm:left-auto sm:right-6 sm:bottom-6 transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="sm:hidden hidden" aria-hidden />

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
