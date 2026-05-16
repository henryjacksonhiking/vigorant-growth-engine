import { useEffect, useState } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "vg-sticky-cta-dismissed";

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
      aria-label="Get Your Free Practice Growth Audit"
      aria-hidden={!show}
      className={`fixed z-[90] left-0 right-0 bottom-0 sm:left-auto sm:right-6 sm:bottom-6 transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="flex items-center gap-3 px-4 py-3 sm:py-2.5 sm:pr-2 sm:pl-5 sm:rounded-full text-white shadow-[0_16px_48px_hsl(248_49%_15%/0.35)]"
        style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 49% 15%))" }}
      >
        <a
          href="#contact"
          className="flex-1 sm:flex-initial inline-flex items-center justify-center font-bold text-[14px] sm:text-[15px] sm:bg-white sm:text-brand-deep sm:px-5 sm:py-2.5 sm:rounded-full min-h-[44px]"
        >
          Get Your Free Practice Growth Audit <span aria-hidden className="ml-1.5">→</span>
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
