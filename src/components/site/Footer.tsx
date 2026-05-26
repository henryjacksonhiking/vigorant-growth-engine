import logoWhite from "@/assets/vigorant-logo-horizontal-flat-white.png";
import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react";

const cols = [
  {
    title: "Solutions",
    links: [
      { label: "Dental Marketing", href: "#" },
      { label: "Medical Marketing", href: "#" },
      { label: "Chiropractic Marketing", href: "#" },
      { label: "AI Visibility (AIO/GEO)", href: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Paid Ads", href: "#" },
      { label: "Website Design", href: "#" },
      { label: "Reputation Management", href: "#" },
      { label: "Marketing Automation", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Case Studies", href: "#case-studies" },
      { label: "Blog", href: "#" },
      { label: "Free Growth Audit", href: "#audit" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

function YouTubeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.5 6.2c-.3-1-1.1-1.8-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6c-1 .3-1.8 1.1-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8c.3 1 1.1 1.8 2.1 2.1 1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6c1-.3 1.8-1.1 2.1-2.1.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.5V8.5l6.3 3.5-6.3 3.5z" />
    </svg>
  );
}

function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.6 7.8c-.9-.4-1.7-1-2.2-1.8v7.5c0 4.1-3.4 7.5-7.5 7.5S2.4 17.6 2.4 13.5s3.4-7.5 7.5-7.5c.3 0 .6 0 .9.1V11c-.3-.1-.6-.2-.9-.2-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5V1h2.6c.2 1.5.9 2.9 2 3.9.9.9 2.1 1.5 3.4 1.7.1 0 .2.1.3.1v2.1z" />
    </svg>
  );
}

const socials = [
  { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/vigorantinc" },
  { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/vigorantinc/" },
  { Icon: YouTubeIcon, label: "YouTube", href: "https://www.youtube.com/@vigorantinc" },
  { Icon: TikTokIcon, label: "TikTok", href: "https://www.tiktok.com/@vigorant" },
  { Icon: Twitter, label: "X", href: "https://x.com/Vigorant_Inc" },
  { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/vigorant/" },
];

export default function Footer() {
  return (
    <footer className="text-white pt-16 sm:pt-20 pb-10" style={{ background: "#1b1338" }} aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Site footer</h2>
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          <div className="col-span-2 md:col-span-1">
            <img src={logoWhite} alt="Vigorant" className="h-9 sm:h-10 w-auto -mt-1" />
            <p className="mt-4 text-white/80 text-sm leading-relaxed max-w-xs">
              The patient acquisition system built specifically for modern healthcare practices.
            </p>
            <ul className="mt-5 flex items-center gap-3 list-none p-0">
              {socials.map(({ Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <Icon aria-hidden size={16} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {cols.map((c) => (
            <nav key={c.title} aria-label={c.title}>
              <h3 className="font-bold text-white/65 text-xs uppercase tracking-[0.08em] mb-4">{c.title}</h3>
              <ul className="space-y-2.5 list-none p-0">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-white/85 hover:text-white text-sm transition-colors inline-block py-1">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <p className="mt-12 max-w-4xl text-white/60 text-[12px] leading-[1.7]">
          Vigorant is a healthcare-exclusive marketing agency helping dental practices, medical clinics, and chiropractic offices grow patient volume through AI-driven SEO, Google Ads, AI visibility optimization, and conversion-focused website design. Serving independent practices and multi-location groups across the United States.
        </p>

        <div className="border-t border-white/15 mt-8 pt-6 flex flex-col sm:flex-row justify-between gap-4 text-white/70 text-[13px]">
          <div>© 2026 Vigorant Inc. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white py-1">Privacy Policy</a>
            <a href="#" className="hover:text-white py-1">Terms of Service</a>
            <a href="#contact" className="hover:text-white py-1">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
