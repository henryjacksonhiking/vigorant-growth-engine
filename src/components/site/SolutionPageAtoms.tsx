import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

const ease = [0.16, 1, 0.3, 1] as const;

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease }}
      className={className}
    >{children}</motion.div>
  );
}

export function Line({ children, delay }: { children: ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span className="block" initial={{ y: "108%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay, ease }}>
        {children}
      </motion.span>
    </span>
  );
}

export function ChipLabel({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span className={
      dark
        ? "inline-block font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-lavender/85 px-3 py-1 rounded-full bg-white/8 border border-white/15"
        : "inline-block font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-purple px-3 py-1 rounded-full bg-brand-purple/8 border border-brand-purple/20"
    }>
      {children}
    </span>
  );
}

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center flex-wrap gap-1.5 font-mono-ui text-[11px] text-ink-muted list-none p-0 m-0">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {it.href ? (
              <Link to={it.href} className="hover:text-brand-purple transition-colors">{it.label}</Link>
            ) : (
              <span aria-current="page" className="text-brand-deep">{it.label}</span>
            )}
            {i < items.length - 1 && <span className="text-brand-lavender/70">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PrimaryCTA({ to, children, className = "", onDark = false }: { to: string; children: ReactNode; className?: string; onDark?: boolean }) {
  return (
    <Link
      to={to}
      className={`${onDark ? "btn-on-dark" : "btn-primary-grad"} inline-flex max-w-full items-center justify-center gap-2 font-bold text-[14px] sm:text-[16px] px-5 sm:px-8 py-3 sm:py-3.5 rounded-full whitespace-normal sm:whitespace-nowrap text-center leading-snug min-h-[46px] sm:min-h-[48px] ${className}`}
    >
      {children}
    </Link>
  );
}

export function SecondaryCTA({ to, onClick, children, onDark = false }: { to?: string; onClick?: () => void; children: ReactNode; onDark?: boolean }) {
  const cls = `${onDark ? "btn-on-dark-outline" : "btn-secondary-outline"} inline-flex max-w-full items-center justify-center gap-2 font-semibold text-[14px] sm:text-[15px] px-5 sm:px-6 py-3 sm:py-3.5 rounded-full whitespace-normal sm:whitespace-nowrap text-center leading-snug min-h-[46px] sm:min-h-[48px]`;
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  return <button onClick={onClick} className={cls}>{children}</button>;
}

export function GradientText({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`bg-clip-text text-transparent ${className}`}
      style={{ backgroundImage: "linear-gradient(135deg, hsl(247 93% 64%), hsl(252 100% 80%))" }}
    >
      {children}
    </span>
  );
}

export function GradientTextLight({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`bg-clip-text text-transparent ${className}`}
      style={{ backgroundImage: "linear-gradient(135deg, hsl(252 100% 75%), hsl(252 100% 90%))" }}
    >
      {children}
    </span>
  );
}

export function HeroOrbs() {
  return (
    <>
      <div aria-hidden className="pointer-events-none absolute -top-16 -right-16 w-[500px] h-[500px] rounded-full opacity-90"
        style={{ background: "radial-gradient(circle, hsl(247 93% 64% / 0.18), transparent 70%)", filter: "blur(80px)" }} />
      <div aria-hidden className="pointer-events-none absolute -bottom-8 -left-8 w-[340px] h-[340px] rounded-full opacity-90"
        style={{ background: "radial-gradient(circle, hsl(252 100% 80% / 0.12), transparent 70%)", filter: "blur(60px)" }} />
    </>
  );
}

export function DarkOrb() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div className="w-[560px] h-[560px] rounded-full"
        style={{ background: "radial-gradient(circle, hsl(247 93% 64% / 0.12), transparent 70%)", filter: "blur(80px)" }} />
    </div>
  );
}
