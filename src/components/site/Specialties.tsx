import Section, { Reveal, SectionLabel, H2 } from "./Section";
import { ArrowRight } from "lucide-react";
import { useTilt } from "./GlobalFx";
import { SpecialtyGlyph } from "./Illustrations";

const cards = [
  {
    tag: "Dental",
    kind: "dental" as const,
    title: "Dental Practice Marketing",
    body: "AI-driven new patient acquisition for general, cosmetic, orthodontic, and pediatric dentistry. Conversion-built websites and SEO that ranks where it matters.",
    chips: ["Avg. +28 new patients/mo", "90-day results"],
    cta: "Dental marketing solutions",
  },
  {
    tag: "Chiropractic",
    kind: "chiro" as const,
    title: "Chiropractic Marketing",
    body: "Local SEO, paid ads, and reactivation systems built for PI, wellness, and sports chiropractic practices.",
    chips: ["Avg. +22 new patients/mo", "Local SEO focus"],
    cta: "Chiropractic marketing solutions",
  },
  {
    tag: "Medical",
    kind: "medical" as const,
    title: "Medical Practice Marketing",
    body: "Patient acquisition for independent physicians and specialty clinics — combining paid and organic search with HIPAA-aware tracking.",
    chips: ["Avg. +19 new patients/mo", "Paid + organic"],
    cta: "Medical marketing solutions",
  },
];

export default function Specialties() {
  return (
    <Section id="specialties" bg="secondary">
      <Reveal className="text-center max-w-3xl mx-auto">
        <SectionLabel>Built for Your Specialty</SectionLabel>
        <H2>Built for Your Specialty —<br /><span className="gradient-text">Not Generic Healthcare</span></H2>
      </Reveal>

      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-12 sm:mt-14 list-none p-0">
        {cards.map((c, i) => <Card key={c.tag} {...c} delay={i * 0.07} />)}
      </ul>
    </Section>
  );
}

function Card({ tag, kind, title, body, chips, cta, delay }: any) {
  const ref = useTilt<HTMLDivElement>(6);
  return (
    <Reveal delay={delay}>
      <li ref={ref as any}
        className="tilt-spotlight rounded-[20px] p-7 sm:p-10 transition-all duration-300 hover:-translate-y-2 group list-none"
        style={{
          background: "hsl(0 0% 100% / 0.85)",
          backdropFilter: "blur(20px) saturate(150%)",
          border: "1px solid hsl(0 0% 100% / 0.8)",
          boxShadow: "0 8px 32px hsl(248 49% 15% / 0.06)",
        }}>
        <div className="flex items-center justify-between mb-5">
          <span className="font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-purple bg-brand-purple/10 rounded-full px-3 py-1">{tag}</span>
          <SpecialtyGlyph kind={kind} className="w-16 h-12" />
        </div>
        <h3 className="font-extrabold text-brand-deep text-[20px] sm:text-[22px] leading-tight">{title}</h3>
        <p className="mt-3 text-ink-secondary text-[15px] leading-relaxed">{body}</p>
        <ul className="mt-5 flex flex-wrap gap-2 list-none p-0">
          {chips.map((c: string) => (
            <li key={c} className="font-mono-ui text-[11px] text-brand-deep bg-brand-purple/12 rounded-full px-3 py-1">{c}</li>
          ))}
        </ul>
        <a
          href="#audit"
          className="mt-6 inline-flex items-center gap-1.5 text-brand-purple font-semibold group/cta min-h-[44px]"
          aria-label={`${cta} — request audit`}
        >
          {cta}
          <ArrowRight aria-hidden size={16} className="transition-transform group-hover/cta:translate-x-1" />
        </a>
      </li>
    </Reveal>
  );
}
