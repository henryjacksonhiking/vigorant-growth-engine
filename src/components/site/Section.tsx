import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  id?: string;
  bg?: "white" | "secondary" | "tertiary";
  className?: string;
  children: ReactNode;
}

export default function Section({ id, bg = "white", className = "", children }: Props) {
  const bgClass = bg === "secondary" ? "bg-surface-secondary" : bg === "tertiary" ? "bg-surface-tertiary" : "bg-background";
  return (
    <section id={id} className={`${bgClass} py-24 md:py-32 ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
}

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return <span className="section-label">{children}</span>;
}

export function H2({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`font-bold text-brand-deep leading-[1.1] tracking-tight mt-3 ${className}`}
      style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
    >
      {children}
    </h2>
  );
}
