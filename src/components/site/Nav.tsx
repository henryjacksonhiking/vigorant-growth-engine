import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoHorizontal from "@/assets/vigorant-logo-horizontal.png";

type NavItem = {
  label: string;
  href: string;
  route?: boolean;
  children?: { label: string; href: string }[];
};

const links: NavItem[] = [
  { label: "Services", href: "/services", route: true },
  { label: "Solutions", href: "/solutions", route: true },
  {
    label: "For Practices",
    href: "/for-practices",
    route: true,
    children: [
      { label: "Overview", href: "/for-practices" },
      { label: "More New Patients", href: "/for-practices/more-new-patients" },
      { label: "Online Visibility", href: "/for-practices/online-visibility" },
      { label: "Marketing ROI", href: "/for-practices/marketing-roi" },
      { label: "Lead Conversion", href: "/for-practices/lead-conversion" },
      { label: "Online Reputation", href: "/for-practices/online-reputation" },
      { label: "Predictable Patient Flow", href: "/for-practices/predictable-patient-flow" },
    ],
  },
  { label: "How It Works", href: "/how-it-works", route: true },
  { label: "Results", href: "/results", route: true },
  { label: "Resources", href: "/resources", route: true },
  { label: "About", href: "/about", route: true },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const desktopNavRef = useRef<HTMLElement>(null);
  const { pathname } = useLocation();

  const isActive = (href: string) => pathname === href;
  const isParentActive = (item: NavItem) =>
    item.children?.some((c) => pathname === c.href) || pathname === item.href;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (desktopNavRef.current && !desktopNavRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
    setOpen(false);
  }, [pathname]);

  const toggleDropdown = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  const baseDesktopLink = (active: boolean, parentActive: boolean) =>
    `text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
      active || parentActive
        ? "text-brand-purple bg-brand-purple/10"
        : "text-ink-secondary hover:text-brand-deep hover:bg-brand-purple/8"
    }`;

  const baseMobileLink = (active: boolean, parentActive: boolean) =>
    `text-base font-medium py-3 px-2 rounded-lg min-h-[44px] flex items-center ${
      active || parentActive
        ? "text-brand-purple bg-brand-purple/10"
        : "text-ink-secondary hover:bg-brand-purple/8"
    }`;

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

        <nav ref={desktopNavRef} className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {links.map((item) => {
            if (!item.children?.length) {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={baseDesktopLink(active, false)}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            }

            const pActive = isParentActive(item);
            const isOpen = activeDropdown === item.label;

            return (
              <div key={item.label} className="relative">
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className={`${baseDesktopLink(false, pActive)} flex items-center gap-1`}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="absolute top-full left-0 mt-2 w-60 glass-strong rounded-xl shadow-lg border border-brand-purple/10 p-1.5 z-50">
                    {item.children.map((child) => {
                      const cActive = isActive(child.href);
                      return (
                        <Link
                          key={child.href}
                          to={child.href}
                          className={`block text-sm px-3 py-2 rounded-lg transition-colors ${
                            cActive
                              ? "text-brand-purple bg-brand-purple/10 font-medium"
                              : "text-ink-secondary hover:text-brand-deep hover:bg-brand-purple/8"
                          }`}
                          aria-current={cActive ? "page" : undefined}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
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
          {links.map((item) => {
            if (!item.children?.length) {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={baseMobileLink(active, false)}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            }

            const pActive = isParentActive(item);
            const isOpen = activeDropdown === item.label;

            return (
              <div key={item.label}>
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className={`w-full ${baseMobileLink(false, pActive)} justify-between`}
                  aria-expanded={isOpen}
                >
                  {item.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="pl-4 flex flex-col gap-0.5 mt-0.5">
                    {item.children.map((child) => {
                      const cActive = isActive(child.href);
                      return (
                        <Link
                          key={child.href}
                          to={child.href}
                          onClick={() => {
                            setActiveDropdown(null);
                            setOpen(false);
                          }}
                          className={`text-sm font-medium py-2.5 px-3 rounded-lg min-h-[40px] flex items-center ${
                            cActive
                              ? "text-brand-purple bg-brand-purple/10"
                              : "text-ink-secondary hover:bg-brand-purple/8"
                          }`}
                          aria-current={cActive ? "page" : undefined}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
          <a href="#audit" onClick={() => setOpen(false)}
            className="btn-primary-grad font-semibold text-sm px-5 py-3 rounded-full text-center mt-2 min-h-[48px] flex items-center justify-center">
            Free Growth Audit <span aria-hidden className="ml-1">→</span>
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
