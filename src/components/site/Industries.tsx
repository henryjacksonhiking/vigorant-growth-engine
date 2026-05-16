import Section, { Reveal, SectionLabel, H2 } from "./Section";
import { Stethoscope, HeartPulse, Activity, Building2, Scissors, ArrowRight } from "lucide-react";

const industries = [
  {
    icon: Stethoscope,
    title: "Dental Marketing",
    href: "/dental-marketing",
    body: "From general dentistry to implant specialists — SEO, ads, and conversion built for dental growth.",
  },
  {
    icon: HeartPulse,
    title: "Medical Practice Marketing",
    href: "/medical-marketing",
    body: "Patient acquisition strategies for primary care, specialists, and wellness centers.",
  },
  {
    icon: Activity,
    title: "Chiropractic Marketing",
    href: "/chiropractic-marketing",
    body: "Local visibility and lead generation tailored to chiropractic practices.",
  },
  {
    icon: Scissors,
    title: "Oral Surgery & Specialists",
    href: "/oral-surgery-marketing",
    body: "Targeted marketing for oral surgeons, periodontists, endodontists, and specialty dental practices.",
  },
  {
    icon: Building2,
    title: "Multi-Location Healthcare",
    href: "/multi-location",
    body: "Centralized marketing intelligence for practices with 3 or more locations.",
  },
];

export default function Industries() {
  return (
    <Section id="industries" bg="white">
      <Reveal className="text-center max-w-3xl mx-auto">
        <SectionLabel>Industries</SectionLabel>
        <H2>Local SEO for Dentists, Chiropractors, and Medical Practices</H2>
        <p className="mt-5 text-ink-secondary text-[16px] sm:text-[17px]">
          Specialized marketing for every corner of healthcare.
        </p>
      </Reveal>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {industries.map((it, i) => (
          <Reveal key={it.title} delay={i * 0.06}>
            <a
              href={it.href}
              className="group h-full flex flex-col bg-white border border-brand-purple/15 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-purple/40"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div
                aria-hidden
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 49% 15%))" }}
              >
                <it.icon size={20} className="text-white" />
              </div>
              <h3 className="mt-5 font-extrabold text-brand-deep text-[17px] leading-tight">{it.title}</h3>
              <p className="mt-2 text-ink-secondary text-[14px] leading-relaxed flex-1">{it.body}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-brand-purple text-[14px] group-hover:gap-2.5 transition-all">
                Learn More <ArrowRight aria-hidden size={16} />
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 max-w-3xl mx-auto text-center">
        <p className="text-ink-secondary text-[15px] sm:text-[16px] leading-[1.8]">
          Vigorant is a specialized healthcare marketing agency serving dental practices, medical clinics,
          chiropractic offices, and multi-location healthcare groups across the United States. Whether you
          are an independent dentist looking for dental SEO, a medical practice investing in local search
          visibility, or a growing DSO managing paid ads across multiple locations, our team builds custom
          growth strategies rooted in data, AI optimization, and deep healthcare expertise.
        </p>
      </Reveal>
    </Section>
  );
}
