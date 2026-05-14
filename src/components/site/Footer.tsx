import logoWhite from "@/assets/vigorant-logo-white.png";

const cols = [
  { title: "Solutions", links: ["Dental Marketing", "Chiropractic Marketing", "Medical Practice Marketing", "Free Audit"] },
  { title: "Services", links: ["SEO & AI Search", "Paid Advertising", "Website Design", "Reputation Management"] },
  { title: "Company", links: ["About", "Results", "Resources", "Contact"] },
];

export default function Footer() {
  return (
    <footer className="text-white pt-16 sm:pt-20 pb-10" style={{ background: "#1b1338" }} aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Site footer</h2>
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          <div className="col-span-2 md:col-span-1">
            <img src={logoWhite} alt="Vigorant" className="h-9 sm:h-10 w-auto" />
            <p className="mt-4 text-white/80 text-sm leading-relaxed max-w-xs">
              The patient acquisition system built specifically for modern healthcare practices.
            </p>
          </div>
          {cols.map((c) => (
            <nav key={c.title} aria-label={c.title}>
              <h3 className="font-bold text-white/65 text-xs uppercase tracking-[0.08em] mb-4">{c.title}</h3>
              <ul className="space-y-2.5 list-none p-0">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-white/85 hover:text-white text-sm transition-colors inline-block py-1">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="border-t border-white/15 mt-12 pt-8 flex flex-col sm:flex-row justify-between gap-4 text-white/70 text-[13px]">
          <div>© 2025 Vigorant Inc. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white py-1">Privacy</a>
            <a href="#" className="hover:text-white py-1">Terms</a>
            <a href="#" className="hover:text-white py-1">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
