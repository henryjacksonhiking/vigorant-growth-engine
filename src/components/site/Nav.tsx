import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoHorizontal from "@/assets/vigorant-logo-horizontal.png";

type NavChild = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

type NavItem = {
  label: string;
  href: string;
  route?: boolean;
  children?: NavChild[];
};

const links: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    route: true,
    children: [
      {
        label: "SEO Overview",
        href: "/services/seo",
        children: [
          { label: "Traditional SEO & Maps", href: "/services/seo/search-engine-optimization" },
          { label: "Answer Engine Optimization (AEO)", href: "/services/seo/aeo" },
          { label: "Generative Engine Optimization (GEO)", href: "/services/seo/geo" },
        ],
      },
      { label: "Paid Ads (Google & Meta)", href: "/services/paid-ads" },
      { label: "Website Design & CRO", href: "/services/website-design" },
      { label: "Reputation & Social Media", href: "/services/reputation" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    route: true,
    children: [
      { label: "Dental", href: "/solutions/dental" },
      { label: "Medical", href: "/solutions/medical" },
      { label: "Chiropractic", href: "/solutions/chiropractic" },
    ],
  },
  {
    label: "For Practices",
    href: "/for-practices",
    route: true,
    children: [
      { label: "More New Patients", href: "/for-practices/more-new-patients" },
      { label: "Online Visibility", href: "/for-practices/online-visibility" },
      { label: "Marketing ROI", href: "/for-practices/marketing-roi" },
      { label: "Lead Conversion", href: "/for-practices/lead-conversion" },
      { label: "Online Reputation", href: "/for-practices/online-reputation" },
      { label: "Predictable Patient Flow", href: "/for-practices/predictable-patient-flow" },
      { label: "Scale Your Practice", href: "/for-practices/scale-your-practice" },
      { label: "High-Value Patients", href: "/for-practices/high-value-patients" },
    ],
  },
  { label: "How It Works", href: "/how-it-works", route: true },
  { label: "Results", href: "/results", route: true },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const desktopNavRef = useRef<HTMLElement>(null);
  const { pathname } = useLocation();

  const isActive = (href: string) => pathname === href;
  const isChildActive = (child: NavChild) =>
    pathname === child.href || child.children?.some((g) => pathname === g.href);
  const isParentActive = (item: NavItem) =>
    item.children?.some((c) => isChildActive(c)) || pathname === item.href;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (desktopNavRef.current && !desktopNavRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
        setActiveSubmenu(null);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
    setActiveSubmenu(null);
    setOpen(false);
  }, [pathname]);

  const toggleDropdown = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (label: string) => {
    setActiveSubmenu((prev) => (prev === label ? null : label));
  };

  const baseDesktopLink = (active: boolean, parentActive: boolean) =>
    `text-sm font-medium px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
      active || parentActive
        ? "text-brand-purple bg-brand-purple/10"
        : "text-ink-secondary hover:text-brand-deep hover:bg-brand-purple/8"
    }`;

  const baseMobileLink = (active: boolean, parentActive: boolean) =>
    `text-base font-medium py-3 px-2 rounded-lg min-h-[44px] flex items-center whitespace-nowrap ${
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
      <div className="container flex items-center justify-between gap-3 h-[64px] sm:h-[66px] flex-nowrap">
        <a href="/" className="flex items-center shrink-0" aria-label="Vigorant home">
          <img src={logoHorizontal} alt="Vigorant" className="h-7 sm:h-8 md:h-9 w-auto" />
        </a>

        <nav ref={desktopNavRef} className="hidden xl:flex items-center gap-2 flex-nowrap ml-10 mr-auto" aria-label="Primary">
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
              <div
                key={item.label}
                className="relative shrink-0"
              >
                <div
                  className={`flex items-center gap-1 rounded-lg px-3 py-2 transition-colors text-sm font-medium whitespace-nowrap ${
                    pActive
                      ? "text-brand-purple bg-brand-purple/10"
                      : "text-ink-secondary hover:text-brand-deep hover:bg-brand-purple/8"
                  }`}
                >
                  <Link
                    to={item.href}
                    className="whitespace-nowrap"
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="text-current hover:text-brand-deep transition-colors -mr-1 flex items-center"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    aria-label={`Toggle ${item.label} submenu`}
                  >
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>
                {isOpen && (
                  <div className="absolute top-full left-0 mt-2 min-w-[16rem] max-w-[22rem] glass-strong rounded-xl shadow-lg border border-brand-purple/10 p-1.5 z-50">
                    {item.children.map((child) => {
                      const cActive = isChildActive(child);
                      const hasGrand = !!child.children?.length;
                      const subOpen = activeSubmenu === child.label;
                      const baseChildCls = `block text-sm px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                        cActive
                          ? "text-brand-purple bg-brand-purple/10 font-medium"
                          : "text-ink-secondary hover:text-brand-deep hover:bg-brand-purple/8"
                      }`;

                      if (!hasGrand) {
                        return (
                          <Link
                            key={child.href}
                            to={child.href}
                            className={baseChildCls}
                            aria-current={isActive(child.href) ? "page" : undefined}
                          >
                            {child.label}
                          </Link>
                        );
                      }

                      return (
                        <div key={child.href}>
                          <div className={`flex items-center gap-1 rounded-lg ${cActive ? "bg-brand-purple/10" : "hover:bg-brand-purple/8"}`}>
                            <Link
                              to={child.href}
                              className={`flex-1 text-sm px-3 py-2 rounded-lg whitespace-nowrap ${
                                cActive ? "text-brand-purple font-medium" : "text-ink-secondary hover:text-brand-deep"
                              }`}
                              aria-current={isActive(child.href) ? "page" : undefined}
                            >
                              {child.label}
                            </Link>
                            <button
                              onClick={() => toggleSubmenu(child.label)}
                              className="px-2 py-2 text-current"
                              aria-expanded={subOpen}
                              aria-label={`Toggle ${child.label} submenu`}
                            >
                              <ChevronDown
                                size={12}
                                className={`transition-transform duration-200 ${subOpen ? "rotate-180" : ""}`}
                              />
                            </button>
                          </div>
                          {subOpen && (
                            <div className="pl-3 mt-0.5 flex flex-col gap-0.5 border-l border-brand-purple/15 ml-3">
                              {child.children!.map((g) => {
                                const gActive = isActive(g.href);
                                return (
                                  <Link
                                    key={g.href}
                                    to={g.href}
                                    className={`block text-sm px-3 py-1.5 rounded-lg whitespace-nowrap ${
                                      gActive
                                        ? "text-brand-purple bg-brand-purple/10 font-medium"
                                        : "text-ink-secondary hover:text-brand-deep hover:bg-brand-purple/8"
                                    }`}
                                    aria-current={gActive ? "page" : undefined}
                                  >
                                    {g.label}
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a href="#login" className="hidden xl:inline text-sm text-ink-secondary hover:text-brand-deep transition-colors px-2 py-1 whitespace-nowrap">Sign in</a>
          <Link to="/free-audit"
            className="hidden sm:inline-flex items-center btn-primary-grad font-semibold text-sm px-5 py-2.5 rounded-full min-h-[40px] whitespace-nowrap">
            Free Growth Audit <span aria-hidden className="ml-1">→</span>
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="xl:hidden p-2 text-brand-deep min-w-[44px] min-h-[44px] flex items-center justify-center"
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
        className="xl:hidden glass border-t border-brand-purple/15"
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
                <div
                  className={`flex items-center rounded-lg text-base font-medium min-h-[44px] transition-colors ${
                    pActive
                      ? "text-brand-purple bg-brand-purple/10"
                      : "text-ink-secondary hover:bg-brand-purple/8"
                  }`}
                >
                  <Link
                    to={item.href}
                    className="flex-1 py-3 px-2 flex items-center"
                    onClick={() => {
                      setActiveDropdown(null);
                      setOpen(false);
                    }}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="px-2 py-3 pr-2 text-current transition-colors"
                    aria-expanded={isOpen}
                    aria-label={`Toggle ${item.label} submenu`}
                  >
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>
                {isOpen && (
                  <div className="pl-4 flex flex-col gap-0.5 mt-0.5">
                    {item.children.map((child) => {
                      const cActive = isChildActive(child);
                      const hasGrand = !!child.children?.length;
                      const subOpen = activeSubmenu === child.label;
                      const baseChildCls = `text-sm font-medium py-2.5 px-3 rounded-lg min-h-[40px] flex items-center ${
                        cActive
                          ? "text-brand-purple bg-brand-purple/10"
                          : "text-ink-secondary hover:bg-brand-purple/8"
                      }`;

                      if (!hasGrand) {
                        return (
                          <Link
                            key={child.href}
                            to={child.href}
                            onClick={() => {
                              setActiveDropdown(null);
                              setActiveSubmenu(null);
                              setOpen(false);
                            }}
                            className={baseChildCls}
                            aria-current={isActive(child.href) ? "page" : undefined}
                          >
                            {child.label}
                          </Link>
                        );
                      }

                      return (
                        <div key={child.href}>
                          <div className={`flex items-center rounded-lg ${cActive ? "bg-brand-purple/10" : ""}`}>
                            <Link
                              to={child.href}
                              onClick={() => {
                                setActiveDropdown(null);
                                setActiveSubmenu(null);
                                setOpen(false);
                              }}
                              className={`flex-1 text-sm font-medium py-2.5 px-3 rounded-lg min-h-[40px] flex items-center ${
                                cActive ? "text-brand-purple" : "text-ink-secondary"
                              }`}
                              aria-current={isActive(child.href) ? "page" : undefined}
                            >
                              {child.label}
                            </Link>
                            <button
                              onClick={() => toggleSubmenu(child.label)}
                              className="px-3 py-2 text-current"
                              aria-expanded={subOpen}
                              aria-label={`Toggle ${child.label} submenu`}
                            >
                              <ChevronDown
                                size={14}
                                className={`transition-transform duration-200 ${subOpen ? "rotate-180" : ""}`}
                              />
                            </button>
                          </div>
                          {subOpen && (
                            <div className="pl-4 ml-3 mt-0.5 flex flex-col gap-0.5 border-l border-brand-purple/15">
                              {child.children!.map((g) => {
                                const gActive = isActive(g.href);
                                return (
                                  <Link
                                    key={g.href}
                                    to={g.href}
                                    onClick={() => {
                                      setActiveDropdown(null);
                                      setActiveSubmenu(null);
                                      setOpen(false);
                                    }}
                                    className={`text-sm py-2 px-3 rounded-lg min-h-[36px] flex items-center ${
                                      gActive
                                        ? "text-brand-purple bg-brand-purple/10 font-medium"
                                        : "text-ink-secondary hover:bg-brand-purple/8"
                                    }`}
                                    aria-current={gActive ? "page" : undefined}
                                  >
                                    {g.label}
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
          <Link to="/free-audit" onClick={() => setOpen(false)}
            className="btn-primary-grad font-semibold text-sm px-5 py-3 rounded-full text-center mt-2 min-h-[48px] flex items-center justify-center">
            Free Growth Audit <span aria-hidden className="ml-1">→</span>
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
