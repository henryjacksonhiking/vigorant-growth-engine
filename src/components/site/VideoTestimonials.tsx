import { useEffect, useRef, useState } from "react";
import Section, { Reveal, SectionLabel, H2 } from "./Section";
import { Play, X } from "lucide-react";

interface VideoCard {
  doctor: string;
  practice: string;
  overlay: string;
  summary: string;
  watchTime: string;
  thumb: string;
  metrics: string[];
  src: string;
}

const VIDEOS: VideoCard[] = [
  {
    doctor: "Dr. Azadeh Hosseini",
    practice: "Top Pinole Dental",
    overlay: "Six Years With Vigorant",
    summary:
      "Dr. Hosseini shares her experience working with Vigorant over the years and how consistent digital marketing support helped strengthen her dental practice's online presence.",
    watchTime: "1:30 min",
    metrics: [
      "6-year client partnership",
      "Stronger online visibility",
      "Dental-focused marketing support",
    ],
    thumb: "/videos/thumb-hosseini-six-years.jpg",
    src: "/videos/hosseini-six-years.mp4",
  },
  {
    doctor: "Himanshu Mishra",
    practice: "Enlighten AI",
    overlay: "Built On Trust",
    summary:
      "The CEO of Enlighten AI shares how Vigorant brought a collaborative, dependable, and strategic approach to supporting a growing healthcare technology brand.",
    watchTime: "0:53 min",
    metrics: [
      "Healthcare-tech marketing insight",
      "Collaborative project execution",
      "Trusted digital growth partner",
    ],
    thumb: "/videos/thumb-enlighten-ai-trust.jpg",
    src: "/videos/enlighten-ai-trust.mp4",
  },
  {
    doctor: "Sarah B.",
    practice: "Dental Implant Solution",
    overlay: "Why Practices Choose Vigorant",
    summary:
      "Sarah B. from Dental Implant Solution shares why Vigorant stands out through responsive support, clear strategy, and a deeper understanding of what dental practices need to grow.",
    watchTime: "1:05 min",
    metrics: [
      "Clear marketing direction",
      "Responsive team communication",
      "Built for dental practice growth",
    ],
    thumb: "/videos/thumb-why-practices-choose.jpg",
    src: "/videos/why-practices-choose.mp4",
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
        <H2>Hear It Directly From Healthcare Leaders</H2>
        <p className="mt-5 text-ink-secondary text-[16px] sm:text-[17px]">
          See how dental, healthcare, and health-tech professionals describe their experience working with Vigorant as a trusted digital marketing partner.
        </p>
      </Reveal>

      <div className="ui-card-grid mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {VIDEOS.map((v, i) => (
          <Reveal key={v.overlay} delay={i * 0.08} className="h-full">
            <article className="ui-card overflow-hidden p-0"
              style={{ boxShadow: "var(--shadow-card)" }}>
              <button
                onClick={() => setOpen(i)}
                aria-label={`Play video testimonial: ${v.practice}`}
                className="group relative block w-full aspect-video overflow-hidden bg-brand-deep"
              >
                <img
                  src={v.thumb}
                  alt={`${v.doctor} — ${v.practice}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/85 via-brand-deep/20 to-brand-deep/30" aria-hidden />
                <div className="absolute top-3 left-3 right-3 font-mono-ui text-[11px] text-white/95 drop-shadow">
                  {v.doctor} · {v.practice}
                </div>
                <div className="absolute bottom-3 left-3 right-3 font-bold text-white text-[14px] drop-shadow-md">
                  {v.overlay}
                </div>
                <span aria-hidden className="absolute inset-0 flex items-center justify-center">
                  <span className="w-11 h-11 rounded-full bg-white/55 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-white/85 group-hover:scale-110 shadow-md">
                    <Play size={16} className="text-brand-deep ml-0.5" fill="currentColor" />
                  </span>
                </span>
              </button>


              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <p className="ui-card-text mt-0 text-[14px]">{v.summary}</p>
                <p className="mt-2 font-mono-ui text-[11px] text-ink-secondary/80">
                  <span aria-hidden>▶</span> {v.watchTime}
                </p>
                <ul className="ui-list">
                  {v.metrics.map((m) => (
                    <li key={m} className="ui-list-item text-[13px] text-brand-deep">
                      <span className="ui-list-icon text-brand-purple" aria-hidden>▲</span>
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
              <video
                key={VIDEOS[open].src}
                src={VIDEOS[open].src}
                className="w-full h-full"
                controls
                autoPlay
                playsInline
              />
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
