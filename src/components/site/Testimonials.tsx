import { useMemo, useState } from "react";
import Section, { Reveal, SectionLabel, H2 } from "./Section";
import { Star } from "lucide-react";
import { ScrollTiltedItem } from "@/components/ui/scroll-tilted-grid";

type Cat = "Dental" | "Medical" | "Chiropractic";

interface Testimonial {
  practice: string;
  doctor: string;
  specialty: string;
  city: string;
  problem: string;
  metric: string;
  emotion: string;
  category: Cat;
}

const TESTIMONIALS: Testimonial[] = [
  { practice: "One Dental SF", doctor: "Dr. Aja Hall", specialty: "General Dentistry", city: "San Francisco, CA", problem: "Vigorant has been instrumental in enhancing our dental office's marketing strategies. Their team consistently provides prompt and efficient responses to all our management's requests.", metric: "Exceptional service & professional support", emotion: "We recommend Vigorant for their exceptional service and professional support.", category: "Dental" },
  { practice: "Round Hill Dental", doctor: "Dr. Shabnam S.", specialty: "General Dentistry", city: "Brentwood, CA", problem: "I couldn't be happier with the work done by Vigorant. They designed a functional website. Their attention to detail and technical expertise were evident throughout the entire process.", metric: "Functional, conversion-ready website", emotion: "They were incredibly responsive, patient, and accommodating throughout the entire process.", category: "Dental" },
  { practice: "Elder Real Estate Fund, LLC", doctor: "Julian E.", specialty: "Multi-Practice Operator", city: "California", problem: "Hamid and his team at Vigorant have been wonderful to work with. Our company was looking for a professional, sleek design to update our aging website.", metric: "A professional, sleek new website", emotion: "I've been impressed with their thoughtful approach — we found no better solution than Vigorant.", category: "Medical" },
  { practice: "Noble Dental Care", doctor: "Dr. Sayeedi", specialty: "General Dentistry", city: "Union City, CA", problem: "We struggled with low-quality leads and inconsistent patient flow.", metric: "Significant lift in implant consultations", emotion: "For the first time, we had full visibility into where our patients were coming from.", category: "Dental" },
  { practice: "Top Pinole Dental", doctor: "Practice Team", specialty: "General Dentistry", city: "Pinole, CA", problem: "Local visibility was weak and competition kept us out of the top map results.", metric: "Stronger local search visibility", emotion: "The team built a real growth system instead of just running ads.", category: "Dental" },
  { practice: "Albany-Pinole Oral & Maxillofacial Surgery", doctor: "Surgery Team", specialty: "Oral & Maxillofacial Surgery", city: "Albany, CA", problem: "We needed referral-grade visibility and a website that built trust before the first call.", metric: "Higher-quality patient inquiries", emotion: "Vigorant treats our practice like a long-term partner, not a short-term campaign.", category: "Medical" },
];

const tabs: ("All" | Cat)[] = ["All", "Dental", "Medical", "Chiropractic"];

export default function Testimonials() {
  const [active, setActive] = useState<(typeof tabs)[number]>("All");
  const filtered = useMemo(
    () => (active === "All" ? TESTIMONIALS : TESTIMONIALS.filter((t) => t.category === active)),
    [active]
  );

  return (
    <Section id="testimonials" bg="white">
      <Reveal className="text-center max-w-3xl mx-auto">
        <SectionLabel>Client Stories</SectionLabel>
        <H2>What Our Clients Are Saying</H2>
        <p className="mt-5 text-ink-secondary text-[16px] sm:text-[17px]">
          Real results from real healthcare practices across the country.
        </p>
        <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 text-[14px]" aria-label="Aggregate rating 4.9 out of 5 based on real verified client experiences">
          <span aria-hidden className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, k) => (
              <Star key={k} size={16} className="text-brand-purple fill-brand-purple" />
            ))}
          </span>
          <span className="font-bold text-brand-deep">4.9 out of 5</span>
          <span className="text-ink-secondary">· Verified client experiences</span>
        </div>
      </Reveal>

      <div role="tablist" aria-label="Filter testimonials by specialty" className="mt-10 flex flex-wrap justify-center gap-2">
        {tabs.map((t) => {
          const sel = t === active;
          return (
            <button
              key={t}
              role="tab"
              aria-selected={sel}
              onClick={() => setActive(t)}
              className={`min-h-[40px] px-5 py-2 rounded-full font-mono-ui text-[12px] uppercase tracking-[0.12em] transition-colors ${
                sel
                  ? "bg-brand-deep text-white shadow-[0_6px_18px_hsl(248_49%_15%/0.25)]"
                  : "bg-brand-purple/8 text-brand-deep hover:bg-brand-purple/15"
              }`}
            >
              {t}
            </button>
          );
        })}
      </div>

      <div className="ui-card-grid mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {filtered.map((t, i) => (
          <ScrollTiltedItem key={t.practice} side={i % 2 === 0 ? "L" : "R"} className="h-full">
            <article
              className="ui-card relative overflow-hidden"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <header className="flex items-center gap-3 min-w-0">
                <div
                  aria-hidden
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 49% 15%))" }}
                >
                  {t.doctor.replace("Dr. ", "").charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="ui-card-heading text-[15px] truncate min-h-0">{t.practice}</div>
                  <div className="mt-0.5 flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-[12px] leading-relaxed text-ink-secondary">
                    <span className="whitespace-nowrap">{t.doctor}</span>
                    <span aria-hidden className="text-brand-purple/35">•</span>
                    <span className="whitespace-nowrap">{t.specialty}</span>
                    <span aria-hidden className="text-brand-purple/35">•</span>
                    <span className="whitespace-nowrap">{t.city}</span>
                  </div>
                </div>
              </header>

              <div className="mt-3 flex items-center gap-0.5" aria-label="5 out of 5 star rating">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} aria-hidden size={14} className="text-brand-purple fill-brand-purple" />
                ))}
              </div>

              <p className="ui-card-text italic text-[14px]">
                “{t.problem}”
              </p>

              <span className="mt-5 self-start inline-flex items-center text-white font-bold text-[13px] px-3.5 py-1.5 rounded-full"
                style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 49% 15%))" }}>
                {t.metric}
              </span>

              <p className="mt-5 italic text-brand-deep leading-relaxed text-[14px] border-t border-brand-purple/10 pt-4">
                “{t.emotion}”
              </p>

              <div className="mt-auto pt-5 flex items-center justify-between gap-2 flex-wrap">
                <span className="inline-flex min-h-[28px] items-center font-mono-ui text-[10px] uppercase tracking-[0.12em] text-brand-purple bg-brand-purple/10 px-2.5 py-1 rounded-full">
                  {t.category}
                </span>
                <span className="inline-flex min-h-[28px] items-center gap-1 font-mono-ui text-[10px] uppercase tracking-[0.08em] text-brand-purple bg-brand-purple/12 border border-brand-purple/25 px-2 py-1 rounded-full">
                  <span aria-hidden>✓</span> Verified Client
                </span>
              </div>
            </article>
          </ScrollTiltedItem>
        ))}
      </div>

      <Reveal className="mt-16">
        <h3 className="text-center font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-purple">
          Practices That Trust Vigorant
        </h3>
        <div
          className="mt-8 relative overflow-hidden group/marquee"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <ul className="flex gap-4 sm:gap-6 w-max list-none p-0 py-2 animate-logo-marquee group-hover/marquee:[animation-play-state:paused]">
            {(() => {
              const logos = [
                { src: "/clients/noble-dental-care.png", name: "Noble Dental Care" },
                { src: "/clients/top-pinole-dental.png", name: "Top Pinole Dental" },
                { src: "/clients/top-concord-dental.png", name: "Top Concord Dental" },
                { src: "/clients/silicon-valley-smile-solutions.png", name: "Silicon Valley Smile Solutions" },
                { src: "/clients/lafayette-dental-group.png", name: "Lafayette Dental Group" },
                { src: "/clients/one-dental-studio-city.png", name: "One Dental Studio City" },
                { src: "/clients/one-dental-sf.png", name: "One Dental SF" },
                { src: "/clients/one-dental-livermore.png", name: "One Dental Livermore" },
                { src: "/clients/studio-city-dental-group.png", name: "Studio City Dental Group" },
                { src: "/clients/sf-aesthetic-dentistry.png", name: "San Francisco Aesthetic Dentistry" },
                { src: "/clients/round-hill-dental.png", name: "Round Hill Dental" },
                { src: "/clients/redwood-dental.png", name: "Redwood Dental" },
                { src: "/clients/creative-dentistry-santa-rosa.png", name: "Creative Dentistry of Santa Rosa" },
                { src: "/clients/albany-pinole-oral-surgery.png", name: "Albany-Pinole Oral & Maxillofacial Surgery" },
              ];
              return [...logos, ...logos].map((logo, i) => (
                <li
                  key={`${logo.name}-${i}`}
                  className="shrink-0 w-[44vw] sm:w-[30vw] md:w-[22vw] lg:w-[calc((min(1200px,92vw)-4.5rem)/4)] max-w-[280px] h-32 sm:h-36 rounded-xl bg-white border border-brand-purple/15 flex items-center justify-center px-4 py-3"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    loading="lazy"
                    className="block h-full w-full object-contain"
                    style={{ transform: logo.name === "Top Pinole Dental" ? "scale(0.627)" : "scale(1)" }}
                  />
                </li>
              ));
            })()}
          </ul>
        </div>
      </Reveal>


    </Section>
  );
}
