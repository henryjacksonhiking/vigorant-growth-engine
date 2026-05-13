import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoHorizontal from "@/assets/vigorant-logo-horizontal.png";

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
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-brand-purple/10 shadow-[0_1px_0_rgba(0,0,0,0.04)]" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-[66px]">
        <a href="#" className="flex items-center" aria-label="Vigorant home">
          <img src={logoHorizontal} alt="Vigorant" className="h-8 md:h-9 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a key={l.label} href={l.href}
              className="text-sm font-medium text-ink-secondary hover:text-brand-deep px-3 py-1.5 rounded-lg hover:bg-brand-purple/5 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#login" className="hidden md:inline text-sm text-ink-muted hover:text-brand-deep transition-colors">Sign in</a>
          <a href="#audit"
            className="hidden sm:inline-flex items-center btn-primary-grad font-semibold text-sm px-5 py-2.5 rounded-full">
            Get Free Audit →
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-brand-deep" aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-brand-purple/10">
          <div className="container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                className="text-base font-medium text-ink-secondary py-2">{l.label}</a>
            ))}
            <a href="#audit" onClick={() => setOpen(false)}
              className="btn-primary-grad font-semibold text-sm px-5 py-3 rounded-full text-center">
              Get Free Audit →
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
