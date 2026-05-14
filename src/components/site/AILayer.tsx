import Section, { Reveal, SectionLabel, H2 } from "./Section";
import { Brain, Sparkles, TrendingUp } from "lucide-react";
import { useTilt } from "./GlobalFx";
import { AICitationGraph } from "./Illustrations";

const cards = [
  { icon: Brain, title: "AI Search Monitoring",
    body: "We track daily where your competitors appear in AI-generated answers and adjust your content strategy in real time — not quarterly." },
  { icon: Sparkles, title: "Generative Engine Optimization (GEO)",
    body: "We structure your content so AI engines like ChatGPT and Perplexity cite your practice when patients search for recommendations." },
  { icon: TrendingUp, title: "AI Campaign Optimization",
    body: "Ad bids, keywords, and landing pages auto-adjust based on what's actually driving booked appointments — not just clicks." },
];

export default function AILayer() {
  return (
    <Section bg="secondary">
      <Reveal className="text-center max-w-3xl mx-auto">
        <SectionLabel>The AI Layer</SectionLabel>
        <H2>The AI Layer That Puts You Ahead of Every Competitor in Your Market</H2>
        <p className="mt-6 text-base sm:text-[18px] text-ink-secondary max-w-[600px] mx-auto leading-[1.7]">
          Most patients now start their search on Google or ask AI tools like ChatGPT, Perplexity, and Google's AI Overview. Vigorant is the only healthcare marketing agency that optimizes your practice for both traditional search and AI-generated answers.
        </p>
      </Reveal>

      <div className="mt-12 sm:mt-14 grid lg:grid-cols-12 gap-8 lg:gap-10 items-center max-w-6xl mx-auto">
        <Reveal className="lg:col-span-5">
          <div
            className="rounded-2xl p-5 sm:p-6"
            style={{
              background: "linear-gradient(135deg, hsl(248 100% 75% / 0.08), hsl(247 93% 64% / 0.06))",
              border: "1px solid hsl(248 100% 75% / 0.25)",
            }}
          >
            <AICitationGraph className="w-full h-auto" />
            <p className="mt-4 text-center font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-purple">
              AI engines cite your practice
            </p>
          </div>
        </Reveal>

        <ul className="lg:col-span-7 space-y-4 sm:space-y-5 list-none p-0">
          {cards.map((c, i) => <Cap key={c.title} {...c} delay={i * 0.08} />)}
        </ul>
      </div>

      <Reveal delay={0.2} className="max-w-4xl mx-auto mt-10">
        <div className="rounded-2xl px-6 sm:px-10 py-7 sm:py-8 text-center"
          style={{
            background: "linear-gradient(135deg, hsl(248 100% 75% / 0.06), hsl(247 93% 64% / 0.08))",
            border: "1px solid hsl(248 100% 75% / 0.25)",
          }}>
          <p className="text-base sm:text-[18px] text-brand-deep font-medium leading-relaxed">
            Practices optimized for AI search see an average of <span className="gradient-text font-extrabold">340% more organic appointment requests</span> within 90 days compared to traditional SEO alone.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

function Cap({ icon: Icon, title, body, delay }: any) {
  const ref = useTilt<HTMLDivElement>(4);
  return (
    <Reveal delay={delay}>
      <li ref={ref as any}
        className="tilt-spotlight bg-white rounded-2xl p-6 sm:p-7 flex items-start gap-4 sm:gap-5 transition-transform duration-300 list-none"
        style={{ border: "1px solid hsl(247 93% 64% / 0.15)" }}>
        <div
          aria-hidden
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: "hsl(247 93% 64% / 0.12)" }}
        >
          <Icon size={22} className="text-brand-purple" />
        </div>
        <div>
          <h3 className="font-extrabold text-brand-deep text-lg">{title}</h3>
          <p className="text-ink-secondary mt-1.5 leading-relaxed">{body}</p>
        </div>
      </li>
    </Reveal>
  );
}
