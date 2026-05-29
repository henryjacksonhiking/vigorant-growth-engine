import Section, { Reveal, SectionLabel, H2 } from "./Section";
import { Stethoscope, Activity, Building2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/** Inline tooth icon — used for Dental Marketing. */
function ToothIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M12 3c-2.6 0-4 1-5.5 1S3 5 3 8c0 2 .8 3.2 1.4 5 .4 1.2.5 2.5.8 4 .4 2 .7 4 1.9 4 1.5 0 1.6-3 2.4-5 .4-1 .8-1.5 1.5-1.5h1c.7 0 1.1.5 1.5 1.5.8 2 .9 5 2.4 5 1.2 0 1.5-2 1.9-4 .3-1.5.4-2.8.8-4 .6-1.8 1.4-3 1.4-5 0-3-2-3-3.5-3S14.6 3 12 3Z" />
    </svg>
  );
}

/** Inline scalpel icon — used for Oral Surgery. */
function ScalpelIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M14.5 3 21 9.5l-7 1.5-6 6-3-3 6-6 1.5-7Z" />
      <path d="m8 17-5 5" />
    </svg>
  );
}

const industries = [
  {
    Icon: ToothIcon,
    title: "Dental Marketing",
    href: "/solutions/dental",
    body: "From general dentistry to implant specialists — SEO, ads, and conversion built for dental growth.",
  },
  {
    Icon: Stethoscope,
    title: "Medical Practice Marketing",
    href: "/solutions/medical",
    body: "Patient acquisition strategies for primary care, specialists, and wellness centers.",
  },
  {
    Icon: Activity,
    title: "Chiropractic Marketing",
    href: "/solutions/chiropractic",
    body: "Local visibility and lead generation tailored to chiropractic practices.",
  },
  {
    Icon: ScalpelIcon,
    title: "Oral Surgery & Specialists",
    href: "/solutions/dental",
    body: "Targeted marketing for oral surgeons, periodontists, endodontists, and specialty dental practices.",
  },
  {
    Icon: Building2,
    title: "Multi-Location Healthcare",
    href: "/for-practices/scale-your-practice",
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

      <div className="ui-card-grid mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {industries.map((it, i) => (
          <Reveal key={it.title} delay={i * 0.06} className="h-full">
            <Link
              to={it.href}
              className="ui-card group transition-all duration-300 hover:-translate-y-1 hover:border-brand-purple/40"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div
                aria-hidden
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 49% 15%))" }}
              >
                <it.Icon size={20} className="text-white" />
              </div>
              <h3 className="ui-card-heading mt-5 text-[17px]">{it.title}</h3>
              <p className="ui-card-text">{it.body}</p>
              <span className="ui-card-cta text-brand-purple text-[14px] group-hover:gap-2.5 transition-all">
                Learn More <ArrowRight aria-hidden size={16} />
              </span>
            </Link>
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
