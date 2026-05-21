import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoHorizontal from "@/assets/vigorant-logo-horizontal.png";

type NavLink = { label: string; href: string; route?: boolean };

const links: NavLink[] = [
  { label: "Services", href: "/services", route: true },
  { label: "Solutions", href: "/solutions", route: true },
  { label: "For Practices", href: "/for-practices", route: true },
  { label: "How It Works", href: "/how-it-works", route: true },
  { label: "Results", href: "/results", route: true },
  { label: "Resources", href: "/resources", route: true },
  { label: "About", href: "/about", route: true },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isActive = (l: NavLink) => l.route && pathname === l.href;
  const renderLink = (l: NavLink, cls: string, onClick?: () => void) =>
    l.route ? (
      <Link key={l.label} to={l.href} onClick={onClick} className={cls} aria-current={isActive(l) ? "page" : undefined}>
        {l.label}
      </Link>
    ) : (
      <a key={l.label} href={l.href} onClick={onClick} className={cls}>{l.label}</a>
    );

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
        scrolled ? "glass border-b border-brand-purple/15 shadow-[0_1px_0_rgba(0,0,0,0.04)]" : "bg-transparent"
      }`}
      role="banner"
    >
      <div className="container flex items-center justify-between h-[64px] sm:h-[66px]">
        <a href="/" className="flex items-center" aria-label="Vigorant home">
          <img src={logoHorizontal} alt="Vigorant" className="h-7 sm:h-8 md:h-9 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {links.map((l) =>
            renderLink(
              l,
              `text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                isActive(l)
                  ? "text-brand-purple bg-brand-purple/10"
                  : "text-ink-secondary hover:text-brand-deep hover:bg-brand-purple/8"
              }`
            )
          )}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a href="#login" className="hidden md:inline text-sm text-ink-secondary hover:text-brand-deep transition-colors px-2 py-1">Sign in</a>
          <a href="#audit"
            className="hidden sm:inline-flex items-center btn-primary-grad font-semibold text-sm px-5 py-2.5 rounded-full min-h-[40px]">
            Free Growth Audit <span aria-hidden className="ml-1">→</span>
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-brand-deep min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X aria-hidden size={22} /> : <Menu aria-hidden size={22} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="lg:hidden glass border-t border-brand-purple/15"
      >
        <nav aria-label="Primary mobile" className="container py-6 flex flex-col gap-1">
          {links.map((l) =>
            renderLink(
              l,
              `text-base font-medium py-3 px-2 rounded-lg min-h-[44px] flex items-center ${
                isActive(l)
                  ? "text-brand-purple bg-brand-purple/10"
                  : "text-ink-secondary hover:bg-brand-purple/8"
              }`,
              () => setOpen(false)
            )
          )}
          <a href="#audit" onClick={() => setOpen(false)}
            className="btn-primary-grad font-semibold text-sm px-5 py-3 rounded-full text-center mt-2 min-h-[48px] flex items-center justify-center">
            Free Growth Audit <span aria-hidden className="ml-1">→</span>
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
