/**
 * Vigorant-inspired structured SVG illustrations.
 * All illustrations are decorative (aria-hidden) and respect prefers-reduced-motion.
 * Palette is restricted to the violet brand tokens.
 */
import { motion } from "framer-motion";

const PURPLE = "hsl(247 93% 64%)";
const BRIGHT = "hsl(248 100% 75%)";
const LAVENDER = "hsl(247 100% 88%)";
const DEEP = "hsl(248 49% 15%)";

/** Lotus-inspired orbit. Sits behind hero dashboard. */
export function LotusOrbit({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 480 480"
      className={className}
      role="presentation"
    >
      <defs>
        <radialGradient id="lo-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={BRIGHT} stopOpacity="0.35" />
          <stop offset="70%" stopColor={PURPLE} stopOpacity="0.05" />
          <stop offset="100%" stopColor={PURPLE} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lo-petal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={BRIGHT} />
          <stop offset="100%" stopColor={PURPLE} />
        </linearGradient>
      </defs>
      <circle cx="240" cy="240" r="220" fill="url(#lo-glow)" />
      {/* Dashed orbits */}
      {[210, 165, 120].map((r, i) => (
        <motion.circle
          key={r}
          cx="240"
          cy="240"
          r={r}
          fill="none"
          stroke={PURPLE}
          strokeOpacity={0.18 - i * 0.04}
          strokeDasharray="4 8"
          strokeWidth="1"
          initial={{ rotate: 0 }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 60 + i * 20, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "240px 240px" }}
        />
      ))}
      {/* Lotus petals */}
      <g style={{ transformOrigin: "240px 240px" }}>
        {[0, 60, 120, 180, 240, 300].map((a) => (
          <motion.path
            key={a}
            d="M240 150 C 215 185, 215 235, 240 270 C 265 235, 265 185, 240 150 Z"
            fill="url(#lo-petal)"
            fillOpacity="0.12"
            stroke={PURPLE}
            strokeOpacity="0.35"
            strokeWidth="1"
            transform={`rotate(${a} 240 240)`}
            initial={{ scale: 0.94, opacity: 0.6 }}
            animate={{ scale: [0.94, 1, 0.94], opacity: [0.6, 0.95, 0.6] }}
            transition={{ duration: 6, repeat: Infinity, delay: a / 120, ease: "easeInOut" }}
          />
        ))}
      </g>
      {/* Floating dots */}
      {[
        [80, 240], [400, 240], [240, 80], [240, 400],
        [130, 130], [350, 130], [130, 350], [350, 350],
      ].map(([x, y], i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={y}
          r="3"
          fill={BRIGHT}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
    </svg>
  );
}

/** Revenue-leak: bars losing height, droplets falling. Used in Problem. */
export function RevenueLeakChart({ className = "" }: { className?: string }) {
  const bars = [
    { x: 20, full: 110, lost: 70 },
    { x: 70, full: 130, lost: 55 },
    { x: 120, full: 150, lost: 95 },
    { x: 170, full: 140, lost: 50 },
    { x: 220, full: 160, lost: 105 },
  ];
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 280 220"
      className={className}
      role="presentation"
    >
      <defs>
        <linearGradient id="rl-actual" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={BRIGHT} />
          <stop offset="100%" stopColor={PURPLE} />
        </linearGradient>
      </defs>
      {/* baseline */}
      <line x1="10" y1="190" x2="270" y2="190" stroke={LAVENDER} strokeOpacity="0.35" strokeWidth="1" />
      {bars.map((b, i) => (
        <g key={i}>
          {/* full potential outline */}
          <rect
            x={b.x}
            y={190 - b.full}
            width="32"
            height={b.full}
            rx="6"
            fill="none"
            stroke={LAVENDER}
            strokeOpacity="0.4"
            strokeDasharray="3 3"
          />
          {/* actual */}
          <motion.rect
            x={b.x}
            y={190 - b.lost}
            width="32"
            height={b.lost}
            rx="6"
            fill="url(#rl-actual)"
            initial={{ scaleY: 0, transformOrigin: `${b.x + 16}px 190px` }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformBox: "fill-box", transformOrigin: "bottom" }}
          />
          {/* leak droplet */}
          <motion.circle
            cx={b.x + 16}
            cy={190 - b.full + 8}
            r="3"
            fill={BRIGHT}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: [0, 60, 60], opacity: [0, 1, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.4 }}
          />
        </g>
      ))}
    </svg>
  );
}

/** Connector path for stepper. */
export function ConnectorPath({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1000 60"
      preserveAspectRatio="none"
      className={className}
      role="presentation"
    >
      <defs>
        <linearGradient id="cp-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={PURPLE} stopOpacity="0.1" />
          <stop offset="50%" stopColor={BRIGHT} stopOpacity="0.6" />
          <stop offset="100%" stopColor={PURPLE} stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <motion.path
        d="M 20 30 Q 250 -10, 500 30 T 980 30"
        fill="none"
        stroke="url(#cp-line)"
        strokeWidth="2"
        strokeDasharray="6 8"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
}

/** AI citation graph: a query node fanning out to cited practice node. */
export function AICitationGraph({ className = "" }: { className?: string }) {
  const sources = [
    { x: 60, y: 50, label: "ChatGPT" },
    { x: 60, y: 110, label: "Perplexity" },
    { x: 60, y: 170, label: "Google AI" },
    { x: 60, y: 230, label: "Claude" },
  ];
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 360 280"
      className={className}
      role="presentation"
    >
      <defs>
        <radialGradient id="ai-target" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={BRIGHT} />
          <stop offset="100%" stopColor={PURPLE} />
        </radialGradient>
      </defs>
      {/* lines */}
      {sources.map((s, i) => (
        <motion.path
          key={i}
          d={`M ${s.x + 30} ${s.y} Q 180 ${s.y}, 290 140`}
          stroke={PURPLE}
          strokeOpacity="0.35"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: i * 0.15 }}
        />
      ))}
      {/* source pills */}
      {sources.map((s, i) => (
        <g key={s.label}>
          <rect
            x={s.x - 30}
            y={s.y - 14}
            width="120"
            height="28"
            rx="14"
            fill={LAVENDER}
            fillOpacity="0.25"
            stroke={PURPLE}
            strokeOpacity="0.4"
          />
          <text
            x={s.x + 30}
            y={s.y + 4}
            textAnchor="middle"
            fontFamily="DM Mono, monospace"
            fontSize="11"
            fill={DEEP}
          >
            {s.label}
          </text>
          <motion.circle
            cx={s.x + 90}
            cy={s.y}
            r="3"
            fill={BRIGHT}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          />
        </g>
      ))}
      {/* target practice */}
      <motion.circle
        cx="290"
        cy="140"
        r="44"
        fill="url(#ai-target)"
        initial={{ scale: 0.8 }}
        whileInView={{ scale: [0.8, 1.05, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.6 }}
      />
      <circle cx="290" cy="140" r="58" fill="none" stroke={PURPLE} strokeOpacity="0.25" strokeDasharray="3 6" />
      <text x="290" y="135" textAnchor="middle" fontFamily="Plus Jakarta Sans" fontSize="11" fontWeight="700" fill="white">
        Your
      </text>
      <text x="290" y="150" textAnchor="middle" fontFamily="Plus Jakarta Sans" fontSize="11" fontWeight="700" fill="white">
        Practice
      </text>
    </svg>
  );
}

/** Per-specialty inline glyphs (tooth, spine, pulse) styled with brand violet. */
export function SpecialtyGlyph({ kind, className = "" }: { kind: "dental" | "chiro" | "medical"; className?: string }) {
  const common = {
    "aria-hidden": true,
    focusable: "false" as const,
    role: "presentation",
    viewBox: "0 0 120 80",
    className,
  };
  const stroke = PURPLE;
  if (kind === "dental") {
    return (
      <svg {...common}>
        <defs>
          <linearGradient id="g-tooth" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor={BRIGHT} stopOpacity="0.18" />
            <stop offset="100%" stopColor={PURPLE} stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <path
          d="M60 12c-10 0-18 4-22 4s-10-2-12 4 2 18 6 28 6 22 12 22 6-14 16-14 10 14 16 14 8-12 12-22 8-22 6-28-8-4-12-4-12-4-22-4z"
          fill="url(#g-tooth)"
          stroke={stroke}
          strokeWidth="1.4"
        />
        <path d="M50 30c4 4 16 4 20 0" stroke={stroke} strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === "chiro") {
    return (
      <svg {...common}>
        <defs>
          <linearGradient id="g-spine" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={BRIGHT} />
            <stop offset="100%" stopColor={PURPLE} />
          </linearGradient>
        </defs>
        {[14, 26, 38, 50, 62].map((y, i) => (
          <g key={y} transform={`translate(${60 + (i % 2 === 0 ? -2 : 2)}, ${y})`}>
            <ellipse cx="0" cy="0" rx="14" ry="5" fill="url(#g-spine)" fillOpacity="0.18" stroke={stroke} strokeWidth="1.2" />
          </g>
        ))}
        <path d="M60 8 C 70 30, 50 50, 60 72" stroke={stroke} strokeOpacity="0.5" strokeWidth="1" fill="none" strokeDasharray="3 3" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <defs>
        <linearGradient id="g-pulse" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor={PURPLE} />
          <stop offset="100%" stopColor={BRIGHT} />
        </linearGradient>
      </defs>
      <path
        d="M8 40 H 36 L 44 22 L 56 58 L 68 30 L 78 48 L 90 40 H 112"
        fill="none"
        stroke="url(#g-pulse)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="112" cy="40" r="4" fill={BRIGHT}>
        <animate attributeName="r" values="3;5;3" dur="1.6s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** Trust shield with medical cross + soft pulse ring. Conveys HIPAA / safety. */
export function TrustShieldPlus({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 160 180" className={className}>
      <defs>
        <linearGradient id="ts-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={BRIGHT} stopOpacity="0.18" />
          <stop offset="100%" stopColor={PURPLE} stopOpacity="0.06" />
        </linearGradient>
        <linearGradient id="ts-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={BRIGHT} />
          <stop offset="100%" stopColor={PURPLE} />
        </linearGradient>
      </defs>
      <motion.circle
        cx="80" cy="90" r="74" fill="none" stroke={PURPLE} strokeOpacity="0.18" strokeDasharray="3 6"
        initial={{ rotate: 0 }} animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "80px 90px" }}
      />
      <path
        d="M80 14 L 140 36 V 96 C 140 132, 112 158, 80 168 C 48 158, 20 132, 20 96 V 36 Z"
        fill="url(#ts-fill)" stroke="url(#ts-stroke)" strokeWidth="1.6"
      />
      <g stroke="url(#ts-stroke)" strokeWidth="6" strokeLinecap="round">
        <line x1="80" y1="58" x2="80" y2="118" />
        <line x1="50" y1="88" x2="110" y2="88" />
      </g>
    </svg>
  );
}

/** Upward growth arc over a clinical grid. Trustworthy, conversion-focused. */
export function GrowthArc({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 320 160" className={className}>
      <defs>
        <linearGradient id="ga-line" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor={PURPLE} />
          <stop offset="100%" stopColor={BRIGHT} />
        </linearGradient>
        <linearGradient id="ga-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={BRIGHT} stopOpacity="0.22" />
          <stop offset="100%" stopColor={PURPLE} stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1="10" y1={30 + i * 32} x2="310" y2={30 + i * 32}
          stroke={LAVENDER} strokeOpacity="0.35" strokeDasharray="2 6" />
      ))}
      <motion.path
        d="M 10 130 C 80 120, 120 100, 170 80 S 260 30, 310 18 L 310 150 L 10 150 Z"
        fill="url(#ga-fill)"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />
      <motion.path
        d="M 10 130 C 80 120, 120 100, 170 80 S 260 30, 310 18"
        fill="none" stroke="url(#ga-line)" strokeWidth="2.4" strokeLinecap="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      />
      {[[60, 122], [130, 96], [210, 62], [280, 30]].map(([x, y], i) => (
        <motion.circle key={i} cx={x} cy={y} r="3.5" fill={BRIGHT}
          initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 + i * 0.15 }}
        />
      ))}
      <circle cx="310" cy="18" r="6" fill="url(#ga-line)" />
    </svg>
  );
}

/** Subtle ambient pulse-grid backdrop. Used behind dark CTA sections. */
export function PulseGrid({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice" className={className}>
      <defs>
        <linearGradient id="pg-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={BRIGHT} stopOpacity="0" />
          <stop offset="50%" stopColor={BRIGHT} stopOpacity="0.5" />
          <stop offset="100%" stopColor={BRIGHT} stopOpacity="0" />
        </linearGradient>
      </defs>
      {Array.from({ length: 7 }).map((_, i) => (
        <line key={i} x1="0" y1={40 + i * 36} x2="600" y2={40 + i * 36}
          stroke="white" strokeOpacity="0.05" />
      ))}
      <motion.path
        d="M 0 150 H 220 L 240 110 L 260 190 L 280 130 L 300 170 L 320 150 H 600"
        fill="none" stroke="url(#pg-line)" strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 2.2, ease: "easeOut" }}
      />
    </svg>
  );
}
