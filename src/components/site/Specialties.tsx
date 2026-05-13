import Section, { Reveal, SectionLabel, H2 } from "./Section";
import { ArrowRight, Smile, Activity, HeartPulse } from "lucide-react";
import { useTilt } from "./GlobalFx";

const cards = [
  {
    tag: "Dental",
    icon: Smile,
    title: "Dental Practice Marketing",
    body: "AI-driven new patient acquisition for general, cosmetic, orthodontic, and pediatric dentistry. Conversion-built websites and SEO that ranks where it matters.",
    chips: ["Avg. +28 new patients/mo", "90-day results"],
    cta: "Dental marketing solutions",
  },
  {
    tag: "Chiropractic",
    icon: Activity,
    title: "Chiropractic Marketing",
    body: "Local SEO, paid ads, and reactivation systems built for PI, wellness, and sports chiropractic practices.",
    chips: ["Avg. +22 new patients/mo", "Local SEO focus"],
    cta: "Chiropractic marketing solutions",
  },
  {
    tag: "Medical",
    icon: HeartPulse,
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

      <div className="grid md:grid-cols-3 gap-6 mt-14">
        {cards.map((c, i) => <Card key={c.tag} {...c} delay={i * 0.07} />)}
      </div>
    </Section>
  );
}

function Card({ tag, icon: Icon, title, body, chips, cta, delay }: any) {
  const ref = useTilt<HTMLDivElement>(6);
  return (
    <Reveal delay={delay}>
      <div ref={ref}
        className="tilt-spotlight rounded-[20px] p-10 transition-all duration-300 hover:-translate-y-2 group"
        style={{
          background: "hsl(0 0% 100% / 0.85)",
          backdropFilter: "blur(20px) saturate(150%)",
          border: "1px solid hsl(0 0% 100% / 0.8)",
          boxShadow: "0 8px 32px hsl(254 91% 23% / 0.06)",
        }}>
        <div className="flex items-center justify-between mb-5">
          <span className="font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-purple bg-brand-purple/8 rounded-full px-3 py-1">{tag}</span>
          <div className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, hsl(248 93% 71%), hsl(254 91% 23%))" }}>
            <Icon size={22} className="text-white" />
          </div>
        </div>
        <h3 className="font-extrabold text-brand-deep text-[22px] leading-tight">{title}</h3>
        <p className="mt-3 text-ink-secondary text-[15px] leading-relaxed">{body}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {chips.map((c: string) => (
            <span key={c} className="font-mono-ui text-[11px] text-brand-deep bg-brand-purple/10 rounded-full px-3 py-1">{c}</span>
          ))}
        </div>
        <a href="#audit" className="mt-6 inline-flex items-center gap-1.5 text-brand-purple font-semibold group/cta">
          {cta}
          <ArrowRight size={16} className="transition-transform group-hover/cta:translate-x-1" />
        </a>
      </div>
    </Reveal>
  );
}
