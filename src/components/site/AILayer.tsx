import Section, { Reveal, SectionLabel, H2 } from "./Section";
import { Brain, Sparkles, TrendingUp } from "lucide-react";

const cards = [
  {
    icon: Brain,
    color: "text-brand-purple bg-brand-purple/10",
    title: "AI Search Monitoring",
    body: "We track daily where your competitors appear in AI-generated answers and adjust your content strategy in real time — not quarterly.",
  },
  {
    icon: Sparkles,
    color: "text-brand-cyan bg-brand-cyan/10",
    title: "Generative Engine Optimization (GEO)",
    body: "We structure your content so AI engines like ChatGPT and Perplexity cite your practice when patients ask for recommendations in your area.",
  },
  {
    icon: TrendingUp,
    color: "text-emerald-600 bg-emerald-50",
    title: "AI Campaign Optimization",
    body: "Ad bids, keywords, and landing pages are automatically adjusted based on what's actually driving booked appointments — not just clicks.",
  },
];

export default function AILayer() {
  return (
    <Section bg="white">
      <Reveal className="text-center max-w-3xl mx-auto">
        <SectionLabel>The AI Layer</SectionLabel>
        <H2>The AI Layer That Puts You Ahead of Every Competitor in Your Market</H2>
        <p className="mt-6 text-lg text-ink-secondary leading-relaxed">
          Most patients now start their search on Google or ask AI tools like ChatGPT, Perplexity, and Google's AI Overview. Vigorant is the only healthcare marketing agency that optimizes your practice to appear in both traditional search and AI-generated answers.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6 mt-16">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08}>
            <article className="bg-white border border-brand-purple/10 rounded-2xl p-7 h-full hover:border-brand-purple/30 transition">
              <div className={`w-12 h-12 rounded-xl ${c.color} flex items-center justify-center mb-5`}>
                <c.icon size={22} />
              </div>
              <h3 className="text-lg font-bold text-brand-deep mb-2.5">{c.title}</h3>
              <p className="text-ink-secondary text-[15px] leading-relaxed">{c.body}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-14">
        <div
          className="rounded-2xl px-10 py-8 border border-brand-cyan/20"
          style={{ background: "linear-gradient(135deg, hsl(188 100% 62% / 0.08), hsl(248 93% 71% / 0.08))" }}
        >
          <p className="text-center text-lg text-brand-deep font-medium leading-relaxed max-w-3xl mx-auto">
            Practices optimized for AI search see an average of <span className="font-bold">340% more organic appointment requests within 90 days</span> compared to traditional SEO alone.
          </p>
          <p className="text-center text-xs text-ink-muted mt-3 font-mono-ui">— Source: Vigorant client benchmark study, 2025</p>
        </div>
      </Reveal>
    </Section>
  );
}
