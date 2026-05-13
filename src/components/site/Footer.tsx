const cols = [
  { title: "Solutions", links: ["Dental Marketing", "Chiropractic Marketing", "Medical Practice Marketing", "Free Audit"] },
  { title: "Services", links: ["SEO & AI Search", "Paid Advertising", "Website Design", "Reputation Management"] },
  { title: "Company", links: ["About", "Results", "Resources", "Contact"] },
];

export default function Footer() {
  return (
    <footer className="text-white pt-20 pb-10" style={{ background: "#0d0d1a" }}>
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-brand-cyan" />
              <span className="text-2xl font-extrabold gradient-text-deep">Vigorant</span>
            </div>
            <p className="mt-4 text-white/45 text-sm leading-relaxed">
              The patient acquisition system built specifically for modern healthcare practices.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-bold text-white/30 text-xs uppercase tracking-[0.08em] mb-4">{c.title}</h4>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-white/50 hover:text-white/90 text-sm transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/[0.06] mt-12 pt-8 flex flex-col sm:flex-row justify-between gap-4 text-white/30 text-[13px]">
          <div>© 2025 Vigorant Inc. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white/60">Privacy</a>
            <a href="#" className="hover:text-white/60">Terms</a>
            <a href="#" className="hover:text-white/60">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
