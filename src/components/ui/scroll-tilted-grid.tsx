"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
  cubicBezier,
} from "framer-motion";
import { ReactNode, useRef } from "react";

const easeIntoFocus = cubicBezier(0.22, 1, 0.36, 1);
const easeOutOfFocus = cubicBezier(0, 0, 0.58, 1);
const focusEase: [typeof easeIntoFocus, typeof easeOutOfFocus] = [
  easeIntoFocus,
  easeOutOfFocus,
];

export type ScrollTiltedItemProps = {
  children: ReactNode;
  /** "L" tilts/slides from the left, "R" from the right. */
  side?: "L" | "R";
  perspective?: number;
  maxTilt?: number;
  maxBlur?: number;
  className?: string;
};

/**
 * Wraps arbitrary children with an editorial scroll-tilted entrance.
 * The element rises from below tipped forward, settles into a clean focus,
 * then tilts back as it exits the viewport.
 */
export function ScrollTiltedItem({
  children,
  side = "L",
  perspective = 1100,
  maxTilt = 28,
  maxBlur = 6,
  className,
}: ScrollTiltedItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: p } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const reduce = useReducedMotion();
  const sign = side === "L" ? -1 : 1;

  const blur = useTransform(p, [0, 0.5, 1], [maxBlur, 0, maxBlur], { ease: focusEase });
  const ty = useTransform(p, [0, 0.5, 1], ["20%", "0%", "-20%"], { ease: focusEase });
  const rx = useTransform(p, [0, 0.5, 1], [maxTilt, 0, -maxTilt], { ease: focusEase });
  const tx = useTransform(p, [0, 0.5, 1], [`${sign * 12}%`, "0%", `${sign * 12}%`], { ease: focusEase });
  const rot = useTransform(p, [0, 0.5, 1], [-sign * 3, 0, sign * 3], { ease: focusEase });
  const opacity = useTransform(p, [0, 0.25, 0.75, 1], [0.2, 1, 1, 0.2], { ease: focusEase });
  const filter = useMotionTemplate`blur(${blur}px)`;

  if (reduce) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{ perspective: `${perspective}px`, transformStyle: "preserve-3d" }}
    >
      <motion.div
        style={{
          translateY: ty,
          translateX: tx,
          rotateX: rx,
          rotate: rot,
          opacity,
          filter,
          willChange: "transform, filter, opacity",
          height: "100%",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
