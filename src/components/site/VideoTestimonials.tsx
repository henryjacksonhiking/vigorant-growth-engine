import { useEffect, useRef, useState } from "react";
import Section, { Reveal, SectionLabel, H2 } from "./Section";
import { Play, X } from "lucide-react";

interface VideoCard {
  doctor: string;
  practice: string;
  overlay: string;
  summary: string;
  watchTime: string;
  metrics: string[];
  embed: string;
}

const VIDEOS: VideoCard[] = [
  {
    doctor: "Dr. Sayeedi",
    practice: "Noble Dental Care",
    overlay: "More Implant Cases",
    summary: "How Noble Dental Care improved local visibility and patient acquisition with Vigorant.",
    watchTime: "2:14 min",
    metrics: ["+58% organic traffic", "+41% appointment calls", "Lower Google Ads CPL"],
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    doctor: "Dr. Rivera",
    practice: "Peak Performance Chiropractic",
    overlay: "Best SEO Results We've Had",
    summary: "How Peak Performance Chiropractic went from invisible to top 3 in local search.",
    watchTime: "1:58 min",
    metrics: ["+72% organic visibility", "+38% conversion rate", "51 new monthly leads"],
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    doctor: "Dr. Torres",
    practice: "Harmony Wellness Center",
    overlay: "Finally Understand Our Marketing",
    summary: "How Harmony Wellness Center rebuilt their patient acquisition from the ground up.",
    watchTime: "2:42 min",
    metrics: ["3x website conversions", "2.8x ROAS", "Reduced CPL by 62%"],
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    doctor: "Dr. Bennett",
    practice: "Bright Smile Dentistry",
    overlay: "Consistent New Patients",
    summary: "How Bright Smile Dentistry scaled patient volume by combining SEO with conversion rate optimization.",
    watchTime: "2:34 min",
    metrics: ["+51% new patient calls", "3x website conversions", "Top 3 local rankings"],
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export default function VideoTestimonials() {
  const [open, setOpen] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open === null) return;
    const prev = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      prev?.focus?.();
    };
  }, [open]);

  return (
    <Section id="video-testimonials" bg="secondary">
      <Reveal className="text-center max-w-3xl mx-auto">
        <SectionLabel>Watch Their Stories</SectionLabel>
        <H2>Hear It Directly From Our Clients</H2>
        <p className="mt-5 text-ink-secondary text-[16px] sm:text-[17px]">
          Watch how Vigorant helped these practices transform their patient acquisition.
        </p>
      </Reveal>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {VIDEOS.map((v, i) => (
          <Reveal key={v.practice} delay={i * 0.08}>
            <article className="bg-white rounded-2xl overflow-hidden border border-brand-purple/15 h-full flex flex-col"
              style={{ boxShadow: "var(--shadow-card)" }}>
              <button
                onClick={() => setOpen(i)}
                aria-label={`Play video testimonial: ${v.practice}`}
                className="group relative block w-full aspect-video overflow-hidden"
                style={{ background: "linear-gradient(135deg, hsl(248 49% 15%), hsl(252 44% 33%) 60%, hsl(247 93% 64%))" }}
              >
                <div className="absolute inset-0 grid-overlay opacity-30" aria-hidden />
                <div className="absolute top-3 left-3 font-mono-ui text-[11px] text-white/85 max-w-[70%]">
                  {v.doctor} · {v.practice}
                </div>
                <div className="absolute bottom-3 left-3 font-bold text-white text-[14px] bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                  {v.overlay}
                </div>
                <span aria-hidden className="absolute inset-0 flex items-center justify-center">
                  <span className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 pulse-dot">
                    <Play size={24} className="text-brand-deep ml-1" fill="currentColor" />
                  </span>
                </span>
              </button>

              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <p className="text-ink-secondary text-[14px] leading-relaxed">{v.summary}</p>
                <p className="mt-2 font-mono-ui text-[11px] text-ink-secondary/80">
                  <span aria-hidden>▶</span> {v.watchTime}
                </p>
                <ul className="mt-4 space-y-2">
                  {v.metrics.map((m) => (
                    <li key={m} className="flex items-start gap-2 text-[13px] text-brand-deep">
                      <span className="text-brand-purple mt-0.5" aria-hidden>▲</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Video testimonial: ${VIDEOS[open].practice}`}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-deep/85 backdrop-blur-sm"
          onClick={() => setOpen(null)}
        >
          <div className="relative w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <button
              ref={closeRef}
              onClick={() => setOpen(null)}
              aria-label="Close video"
              className="absolute -top-12 right-0 text-white inline-flex items-center gap-1 text-sm hover:opacity-80 min-h-[44px] min-w-[44px] justify-center"
            >
              <X size={20} /> Close
            </button>
            <div className="aspect-video rounded-2xl overflow-hidden bg-black">
              <iframe
                title={`Vigorant client video: ${VIDEOS[open].practice}`}
                src={VIDEOS[open].embed}
                className="w-full h-full"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
