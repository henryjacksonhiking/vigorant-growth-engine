import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

/** Custom cursor + scroll progress bar + mouse glow. Disabled on touch / coarse pointers. */
export default function GlobalFx() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [enabled, setEnabled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);
    document.body.classList.add("has-custom-cursor");

    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let gx = mx, gy = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dotRef.current) dotRef.current.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
      const t = e.target as HTMLElement;
      const interactive = t.closest("a, button, [role='button'], input, textarea, select");
      if (ringRef.current) ringRef.current.dataset.hover = interactive ? "1" : "0";
      if (dotRef.current) dotRef.current.dataset.hover = interactive ? "1" : "0";
    };

    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      gx += (mx - gx) * 0.055;
      gy += (my - gy) * 0.055;
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      if (glowRef.current) glowRef.current.style.transform = `translate(${gx - 280}px, ${gy - 280}px)`;
      raf = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    raf = requestAnimationFrame(tick);
    onScroll();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  const fx = (
    <>
      {/* Scroll progress */}
      <div
        aria-hidden
        className="fixed top-0 left-0 h-[2.5px] z-[9999] pointer-events-none"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, hsl(247 93% 64%), hsl(248 100% 75%), hsl(248 49% 15%))",
          transition: "width 80ms linear",
        }}
      />
      {enabled && (
        <>
          <div aria-hidden className="fixed inset-0 z-[9997] pointer-events-none overflow-visible">
            <div
              ref={glowRef}
              className="fixed top-0 left-0 w-[560px] h-[560px] pointer-events-none"
              style={{
                background: "radial-gradient(circle, hsl(247 93% 64% / 0.08), transparent 70%)",
                willChange: "transform",
              }}
            />
          </div>
          <div
            ref={ringRef}
            aria-hidden
            className="fixed top-0 left-0 w-9 h-9 rounded-full pointer-events-none z-[9998] transition-[width,height,opacity,border-color] duration-200 ease-out data-[hover='1']:w-[52px] data-[hover='1']:h-[52px] data-[hover='1']:opacity-70"
            style={{
              border: "1.5px solid hsl(0 0% 100% / 0.85)",
              mixBlendMode: "difference",
              willChange: "transform",
            }}
          />
          <div
            ref={dotRef}
            aria-hidden
            className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none z-[9998] transition-[width,height,opacity] duration-200 ease-out data-[hover='1']:w-[18px] data-[hover='1']:h-[18px] data-[hover='1']:opacity-90"
            style={{
              background: "hsl(0 0% 100%)",
              mixBlendMode: "difference",
              willChange: "transform",
            }}
          />
        </>
      )}
    </>
  );

  return mounted ? createPortal(fx, document.body) : null;
}

/** Adds 3D tilt + cursor spotlight to children via CSS variables. */
export function useTilt<T extends HTMLElement>(maxDeg = 6) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      el.style.setProperty("--mx", `${x * 100}%`);
      el.style.setProperty("--my", `${y * 100}%`);
      const ry = (x - 0.5) * 2 * maxDeg;
      const rx = -(y - 0.5) * 2 * maxDeg;
      el.style.transform = `perspective(800px) rotateY(${ry}deg) rotateX(${rx}deg) translateZ(4px)`;
    };
    const onLeave = () => { el.style.transform = ""; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [maxDeg]);
  return ref;
}

/** Animated counter from 0 → target on first viewport entry. */
export function Counter({ to, suffix = "", prefix = "", duration = 1800, decimals = 0 }: {
  to: number; suffix?: string; prefix?: string; duration?: number; decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 4);
            setVal(to * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{prefix}{val.toFixed(decimals)}{suffix}</span>;
}
