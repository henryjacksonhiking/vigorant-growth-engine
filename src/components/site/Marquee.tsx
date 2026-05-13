const items = [
  "Patient Reactivation Sequences",
  "AI-Powered SEO for Dental",
  "New Patient Acquisition Funnels",
  "Revenue Attribution Dashboard",
  "Chiropractic Local SEO",
  "Recall & Retention Campaigns",
  "Healthcare Google Ads Management",
  "Generative Engine Optimization",
  "Conversion-Optimized Websites",
  "48-Hour Onboarding · No IT Required",
];

export default function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="bg-surface-secondary border-y border-brand-purple/10 py-5 overflow-hidden relative">
      <div aria-hidden className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-surface-secondary to-transparent" />
      <div aria-hidden className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-surface-secondary to-transparent" />
      <div className="flex marquee whitespace-nowrap" style={{ width: "max-content" }}>
        {loop.map((t, i) => (
          <span key={i} className="flex items-center gap-2.5 px-8 font-mono-ui text-[13px] text-ink-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
