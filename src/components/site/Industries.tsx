import Section, { Reveal, SectionLabel, H2 } from "./Section";
import { Stethoscope, Activity, Building2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Stories,
  StoriesContent,
  Story,
  StoryImage,
  StoryOverlay,
  StoryAuthor,
  StoryAuthorImage,
  StoryAuthorName,
  StoryTitle,
  StoryDescription,
} from "@/components/ui/stories-carousel";

function ToothIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      <path d="M12 3c-2.6 0-4 1-5.5 1S3 5 3 8c0 2 .8 3.2 1.4 5 .4 1.2.5 2.5.8 4 .4 2 .7 4 1.9 4 1.5 0 1.6-3 2.4-5 .4-1 .8-1.5 1.5-1.5h1c.7 0 1.1.5 1.5 1.5.8 2 .9 5 2.4 5 1.2 0 1.5-2 1.9-4 .3-1.5.4-2.8.8-4 .6-1.8 1.4-3 1.4-5 0-3-2-3-3.5-3S14.6 3 12 3Z" />
    </svg>
  );
}

function ScalpelIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      <path d="M14.5 3 21 9.5l-7 1.5-6 6-3-3 6-6 1.5-7Z" />
      <path d="m8 17-5 5" />
    </svg>
  );
}

const industries = [
  {
    Icon: ToothIcon,
    title: "Dental Marketing",
    tag: "Dental",
    fallback: "DT",
    href: "/solutions/dental",
    body: "SEO, ads, and conversion built for dental growth — from general dentistry to implant specialists.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
  },
  {
    Icon: Stethoscope,
    title: "Medical Practice Marketing",
    tag: "Medical",
    fallback: "MD",
    href: "/solutions/medical",
    body: "Patient acquisition strategies for primary care, specialists, and wellness centers.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    Icon: Activity,
    title: "Chiropractic Marketing",
    tag: "Chiro",
    fallback: "CH",
    href: "/solutions/chiropractic",
    body: "Local visibility and lead generation tailored to chiropractic practices.",
    image: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?auto=format&fit=crop&w=800&q=80",
  },
  {
    Icon: ScalpelIcon,
    title: "Oral Surgery & Specialists",
    tag: "Surgery",
    fallback: "OS",
    href: "/solutions/dental",
    body: "Targeted marketing for oral surgeons, periodontists, and specialty dental practices.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
  },
  {
    Icon: Building2,
    title: "Multi-Location Healthcare",
    tag: "DSO",
    fallback: "ML",
    href: "/for-practices/scale-your-practice",
    body: "Centralized marketing intelligence for practices with 3 or more locations.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
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

      <Reveal className="mt-12">
        <Stories>
          <StoriesContent>
            {industries.map((it) => (
              <Story key={it.title} className="aspect-[3/4] w-[240px] sm:w-[260px]">
                <Link to={it.href} className="block h-full w-full" aria-label={it.title}>
                  <StoryImage src={it.image} alt={it.title} />
                  <StoryOverlay />
                  <div className="absolute inset-x-4 bottom-4 z-10 min-h-[88px] flex flex-col justify-end">
                    <h3 className="font-bold text-white text-[17px] leading-tight drop-shadow line-clamp-2 min-h-[44px]">
                      {it.title}
                    </h3>
                    <p className="mt-2 text-[12px] leading-snug text-white/90 line-clamp-2 min-h-[32px]">
                      {it.body}
                    </p>
                  </div>
                </Link>
              </Story>
            ))}
          </StoriesContent>
        </Stories>
      </Reveal>

      <Reveal className="mt-12 max-w-3xl mx-auto text-center">
        <p className="text-ink-secondary text-[15px] sm:text-[16px] leading-[1.8]">
          Vigorant is a specialized healthcare marketing agency serving dental practices, medical clinics,
          chiropractic offices, and multi-location healthcare groups across the United States. Whether you
          are an independent dentist looking for dental SEO, a medical practice investing in local search
          visibility, or a growing DSO managing paid ads across multiple locations, our team builds custom
          growth strategies rooted in data, AI optimization, and deep healthcare expertise.
        </p>
        <Link
          to="/solutions"
          className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-deep hover:text-brand-purple transition-colors"
        >
          Explore all industries <ArrowRight aria-hidden size={18} />
        </Link>
      </Reveal>
    </Section>
  );
}
