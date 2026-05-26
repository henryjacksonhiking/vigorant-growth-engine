import { Link } from "react-router-dom";
import { Search, MapPin, Eye, Globe, FileText, Star, ShieldCheck, BarChart2, AlertTriangle, Check, EyeOff } from "lucide-react";
import {
  PainPageLayout, PainHero, DarkSection, OffWhiteSection, WhiteSection,
  SectionHeader, Reveal, FAQAccordion, FinalCTA, Counter,
} from "@/components/site/PainPageShell";

const FAQS = [
  { q: "Why does my healthcare practice not show up on Google?", a: "A healthcare practice may not show up on Google because of weak local SEO signals, an incomplete Google Business Profile, thin service content, poor website structure, inconsistent listings, limited reviews, weak authority, or technical issues that prevent Google from understanding and ranking the practice." },
  { q: "Why doesn't my practice show up on Google Maps?", a: "Google Maps visibility depends heavily on proximity, relevance, and prominence. A practice can lose visibility if its Business Profile is incomplete, categories are wrong, reviews are weak, local content is thin, or competitors have stronger local authority signals." },
  { q: "How can a healthcare practice improve AI visibility?", a: "A healthcare practice can improve AI visibility by publishing clear answer-focused content, strengthening local and reputation signals, implementing schema markup, improving service-page depth, building topical authority, and making the practice easier for AI systems to understand and verify." },
  { q: "Can Vigorant help my practice show up in ChatGPT or Claude?", a: "Vigorant can improve the signals that AI tools may use or reference, including website clarity, structured data, content authority, third-party credibility, reviews, and local entity consistency. No agency can guarantee AI recommendations, but these improvements increase discoverability and citation potential." },
  { q: "Is AI visibility different from SEO?", a: "AI visibility is connected to SEO but not identical. Traditional SEO focuses on search rankings and traffic, while AI visibility focuses on being understood, summarized, cited, or recommended by AI-powered answer systems. Strong SEO is still the foundation for most AI visibility work." },
  { q: "What is AEO for healthcare practices?", a: "AEO, or AI Engine Optimization, is the process of structuring healthcare website content so AI-powered search and answer systems can understand, extract, and present useful answers about the practice, services, providers, locations, and patient experience." },
  { q: "What is GEO for healthcare practices?", a: "GEO, or Generative Engine Optimization, focuses on improving the chance that generative AI platforms such as ChatGPT, Gemini, Claude, and Perplexity can recognize, summarize, and cite a practice as a relevant option or information source." },
  { q: "How long does it take to improve online visibility?", a: "Some improvements, such as Google Business Profile updates and technical fixes, can help quickly. Meaningful SEO and AI visibility improvements usually require several months of consistent optimization, content development, review growth, technical improvements, and authority building." },
  { q: "What should I do first if my practice is invisible online?", a: "Start with a visibility audit covering Google rankings, Google Maps presence, competitors, Google Business Profile quality, website structure, service content, reviews, schema markup, and AI search presence. This shows whether the main problem is technical, local, content-related, reputational, or strategic." },
  { q: "Does better visibility automatically mean more new patients?", a: "Not by itself. Visibility must connect to conversion. Your website, landing pages, calls-to-action, booking process, reviews, and follow-up system must turn visibility into appointments. Vigorant connects visibility optimization with conversion optimization so traffic can become patient growth." },
];

const GAPS = [
  { Icon: Search, h: "Weak Local SEO Signals", b: "Google can't confirm where you are, what you do, or who you serve." },
  { Icon: MapPin, h: "Incomplete Google Business Profile", b: "Missing categories, services, hours, photos, or attributes cap your Maps reach." },
  { Icon: FileText, h: "Thin Service Pages", b: "Pages lack the depth Google and AI systems need to understand your expertise." },
  { Icon: Star, h: "Weak Review Signals", b: "Low volume, low velocity, or low rating drops you below competitors locally." },
  { Icon: Globe, h: "Inconsistent Listings", b: "NAP mismatches across directories confuse search engines and AI systems." },
  { Icon: EyeOff, h: "No AI-Readable Structure", b: "Without schema and entity clarity, AI engines can't cite or recommend you." },
  { Icon: ShieldCheck, h: "Limited Authority Signals", b: "No backlinks, mentions, or topical content to prove practice credibility." },
];

const PILLARS = [
  { n: "01", h: "Local SEO Foundation", b: "Google Business Profile, citations, local entity signals, geographic relevance." },
  { n: "02", h: "Technical & Schema", b: "Schema markup, site structure, mobile performance, crawl health." },
  { n: "03", h: "Content Authority", b: "Service-page depth, FAQ structure, location pages, AI-friendly answers." },
  { n: "04", h: "Reputation Signals", b: "Review growth, response strategy, third-party mentions, trust proof." },
  { n: "05", h: "AEO + GEO Layer", b: "Structured for AI Overviews, ChatGPT, Gemini, Claude, Perplexity citation potential." },
];

export default function OnlineVisibility() {
  return (
    <PainPageLayout
      seoTitle="Improve Online & AI Visibility for Your Practice | Vigorant"
      seoDesc="Help dental, medical, and chiropractic practices appear on Google, Google Maps, AI Overviews, ChatGPT, Claude, Gemini, and Perplexity. Free AI Visibility Audit."
      canonical="https://vigorant.com/for-practices/online-visibility"
      faqs={FAQS}
    >
      <PainHero
        breadcrumbLabel="Improve Online & AI Visibility"
        chip="For Practices Doing Great Work But Not Appearing Online"
        titleLines={[{ text: "Improve Online" }, { text: "& AI Visibility" }, { text: "for Your Practice.", gradient: true }]}
        subhead="Your practice may deliver excellent care, but patients cannot choose you if they cannot find you on Google, Maps, AI Overviews, ChatGPT, Claude, Gemini, or Perplexity."
        paragraph="Vigorant helps dental, medical, and chiropractic practices improve visibility across every search and AI-powered discovery experience patients use to find providers."
        primaryCTA={{ label: "Get Your Free AI Visibility Audit", href: "/free-audit" }}
        secondaryCTA={{ label: "See How Vigorant Improves Visibility ↓", href: "#visibility-system" }}
        proofStrip="SEO + Local Search + AEO + GEO + Reputation Signals + Content Authority"
      />

      <DarkSection>
        <SectionHeader dark label="If Patients Search Online" title={<><span className="text-white">If Patients Cannot Find You,</span><br /><span className="gradient-text">They Cannot Choose You.</span></>} sub="Search has fundamentally changed. Patients now research providers across Google, Maps, AI Overviews, ChatGPT, Gemini, Claude, and Perplexity — often before they ever pick up the phone. If your practice isn't visible across these surfaces, you're losing patients to competitors who simply structured their digital presence better." />
      </DarkSection>

      <WhiteSection>
        <SectionHeader label="Why Your Practice May Not Show Up" title={<>Seven reasons strong practices stay <span className="gradient-text">invisible online.</span></>} />
        <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] mx-auto list-none p-0">
          {GAPS.map((g, i) => (
            <li key={i}>
              <Reveal delay={i * 0.05}>
                <article className="bg-white border border-brand-purple/12 rounded-2xl p-6 h-full hover:border-brand-purple/30 hover:shadow-lg transition-all">
                  <div className="w-11 h-11 rounded-xl bg-brand-purple/8 border border-brand-purple/15 flex items-center justify-center text-brand-purple mb-4">
                    <g.Icon aria-hidden size={20} />
                  </div>
                  <h3 className="font-bold text-brand-deep text-[17px] mb-2">{g.h}</h3>
                  <p className="text-text-secondary text-[15px] leading-[1.7]">{g.b}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </WhiteSection>

      <OffWhiteSection id="visibility-system">
        <SectionHeader label="The Vigorant Visibility System" title={<>Five pillars that make your practice <span className="gradient-text">findable everywhere.</span></>} />
        <ol className="mt-12 max-w-[960px] mx-auto flex flex-col gap-4 list-none p-0">
          {PILLARS.map((p, i) => (
            <li key={i}>
              <Reveal delay={i * 0.06}>
                <div className="bg-white rounded-2xl border border-brand-purple/12 p-6 sm:p-7 flex flex-col sm:flex-row gap-5 hover:shadow-md transition">
                  <div className="font-mono-ui text-[28px] font-bold gradient-text shrink-0 sm:w-16">{p.n}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-brand-deep text-[19px]">{p.h}</h3>
                    <p className="mt-2 text-text-secondary text-[15px] leading-[1.7]">{p.b}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </OffWhiteSection>

      <WhiteSection>
        <SectionHeader label="Proof" title={<>Visibility that <span className="gradient-text">converts to patients.</span></>} />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 max-w-[900px] mx-auto">
          {[
            { v: <Counter to={3.2} decimals={1} suffix="x" />, l: "Local search visibility" },
            { v: <Counter to={186} suffix="%" />, l: "Maps profile actions" },
            { v: <Counter to={47} suffix="%" />, l: "AI citation lift" },
            { v: <Counter to={62} />, l: "Google reviews / qtr avg" },
          ].map((m, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="bg-white border border-brand-purple/12 rounded-2xl p-5 sm:p-6 text-center h-full">
                <div className="font-display text-[28px] sm:text-[34px] font-bold gradient-text">{m.v}</div>
                <div className="mt-2 font-mono-ui text-[11px] uppercase tracking-wider text-text-muted">{m.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center font-mono-ui text-[11px] text-text-muted">Illustrative averages. Results vary by market and implementation.</p>
      </WhiteSection>

      <OffWhiteSection>
        <SectionHeader label="Common Questions" title="FAQ: Online and AI Visibility for Healthcare Practices" />
        <FAQAccordion faqs={FAQS} />
      </OffWhiteSection>

      <FinalCTA
        headline="Make your practice findable on Google — and every AI engine patients use."
        sub="Get your free AI Visibility Audit covering Google, Maps, AI Overviews, ChatGPT, Claude, Gemini, and Perplexity."
        ctaLabel="Get Your Free AI Visibility Audit"
        ctaHref="/free-audit"
      />
    </PainPageLayout>
  );
}
