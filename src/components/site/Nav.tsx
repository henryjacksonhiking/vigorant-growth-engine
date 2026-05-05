import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoMark from "@/assets/vigorant-mark.png";

const links = [
  { label: "Solutions", href: "#specialties" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Results", href: "#results" },
  { label: "Resources", href: "#faq" },
  { label: "About", href: "#why" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-brand-purple/10" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2.5">
          <img src={logoMark} alt="Vigorant" className="h-8 w-8" />
          <span className="text-xl font-bold tracking-tight text-brand-deep">Vigorant</span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-sm font-medium text-ink-secondary hover:text-brand-deep transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#audit"
            className="hidden sm:inline-flex items-center bg-brand-deep hover:bg-brand-purple text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
          >
            Free Audit
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-brand-deep"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-brand-purple/10">
          <div className="container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink-secondary hover:text-brand-deep py-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#audit"
              onClick={() => setOpen(false)}
              className="bg-brand-deep text-white font-semibold text-sm px-5 py-3 rounded-lg text-center"
            >
              Free Audit
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
