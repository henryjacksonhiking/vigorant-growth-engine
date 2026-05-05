import logoMark from "@/assets/vigorant-mark.png";

const cols = [
  {
    title: "Solutions",
    items: ["Dental Marketing", "Chiropractic Marketing", "Medical Practice Marketing", "AI Search Optimization"],
  },
  {
    title: "Services",
    items: ["Patient Acquisition Audit", "Website & Conversion", "Paid Advertising", "Reporting Dashboard"],
  },
  {
    title: "Company",
    items: ["About", "Case Studies", "Resources", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d0d1a] text-white/50 pt-20 pb-10">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5">
              <img src={logoMark} alt="Vigorant" className="h-9 w-9" />
              <span className="text-2xl font-bold tracking-tight text-white">Vigorant</span>
            </div>
            <p className="mt-4 text-sm max-w-xs">
              Invigorate your business. AI-driven patient acquisition for healthcare practices across the US.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="text-white text-sm font-semibold mb-4">{col.title}</h4>
              <ul className="space-y-2.5 text-sm">
                {col.items.map((i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-white/90 transition">{i}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h4 className="text-white text-sm font-semibold mb-4">Stay informed</h4>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="you@practice.com"
                className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-brand-purple"
              />
              <button type="submit" className="bg-brand-purple hover:bg-brand-purple/90 text-white text-sm font-medium px-3 py-2 rounded-lg transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row gap-3 justify-between items-center text-xs">
          <p>© 2025 Vigorant · Built for healthcare practices across the US</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/90">Privacy Policy</a>
            <a href="#" className="hover:text-white/90">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
