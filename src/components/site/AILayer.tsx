import Section, { Reveal, SectionLabel, H2 } from "./Section";
import { Brain, Sparkles, TrendingUp } from "lucide-react";
import { useTilt } from "./GlobalFx";

const cards = [
  { icon: Brain, color: "hsl(247 93% 64%)", title: "AI Search Monitoring",
    body: "We track daily where your competitors appear in AI-generated answers and adjust your content strategy in real time — not quarterly." },
  { icon: Sparkles, color: "hsl(248 100% 75%)", title: "Generative Engine Optimization (GEO)",
    body: "We structure your content so AI engines like ChatGPT and Perplexity cite your practice when patients search for recommendations." },
  { icon: TrendingUp, color: "hsl(155 65% 40%)", title: "AI Campaign Optimization",
    body: "Ad bids, keywords, and landing pages auto-adjust based on what's actually driving booked appointments — not just clicks." },
];

export default function AILayer() {
  return (
    <Section bg="secondary">
      <Reveal className="text-center max-w-3xl mx-auto">
        <SectionLabel>The AI Layer</SectionLabel>
        <H2>The AI Layer That Puts You Ahead of Every Competitor in Your Market</H2>
        <p className="mt-6 text-[18px] text-ink-secondary max-w-[600px] mx-auto leading-[1.7]">
          Most patients now start their search on Google or ask AI tools like ChatGPT, Perplexity, and Google's AI Overview. Vigorant is the only healthcare marketing agency that optimizes your practice for both traditional search and AI-generated answers.
        </p>
      </Reveal>

      <div className="space-y-5 mt-14 max-w-4xl mx-auto">
        {cards.map((c, i) => <Cap key={c.title} {...c} delay={i * 0.08} />)}
      </div>

      <Reveal delay={0.2} className="max-w-4xl mx-auto mt-10">
        <div className="rounded-2xl px-10 py-8 text-center"
          style={{
            background: "linear-gradient(135deg, hsl(248 100% 75% / 0.06), hsl(247 93% 64% / 0.08))",
            border: "1px solid hsl(248 100% 75% / 0.25)",
          }}>
          <p className="text-[18px] text-brand-deep font-medium leading-relaxed">
            Practices optimized for AI search see an average of <span className="gradient-text font-extrabold">340% more organic appointment requests</span> within 90 days compared to traditional SEO alone.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

function Cap({ icon: Icon, color, title, body, delay }: any) {
  const ref = useTilt<HTMLDivElement>(4);
  return (
    <Reveal delay={delay}>
      <div ref={ref}
        className="tilt-spotlight bg-white rounded-2xl p-7 flex items-start gap-5 transition-transform duration-300"
        style={{ border: "1px solid hsl(247 93% 64% / 0.12)" }}>
        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: `${color.replace(")", " / 0.12)")}` }}>
          <Icon size={22} style={{ color }} />
        </div>
        <div>
          <h3 className="font-extrabold text-brand-deep text-lg">{title}</h3>
          <p className="text-ink-secondary mt-1.5 leading-relaxed">{body}</p>
        </div>
      </div>
    </Reveal>
  );
}
