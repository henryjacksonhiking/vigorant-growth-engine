import { Star, MessageSquare, TrendingUp, ShieldCheck, Sparkles, Search, Users, BarChart2 } from "lucide-react";
import {
  PainPageLayout, PainHero, DarkSection, OffWhiteSection, WhiteSection,
  SectionHeader, Reveal, FAQAccordion, FinalCTA,
} from "@/components/site/PainPageShell";

const FAQS = [
  { q: "Can you remove negative reviews?", a: "No reputable provider can guarantee review removal. Vigorant uses compliant response strategy, dispute escalation for clear policy violations, and a steady flow of authentic recent reviews to keep your overall trust signal strong." },
  { q: "Will you write fake reviews or buy reviews?", a: "Never. Both violate Google's policies and healthcare compliance norms. Vigorant uses compliant, patient-initiated review-generation workflows only." },
  { q: "How does review velocity affect ranking?", a: "Recent, authentic reviews are a strong local-pack ranking signal. Vigorant builds a steady cadence rather than spikes — which look natural to Google and trustworthy to patients." },
  { q: "How does reputation connect to AI search?", a: "Generative AI tools summarize reviews, recent sentiment, and citations when recommending providers. A weak or stale reputation reduces the chance of being recommended." },
  { q: "What does social management include?", a: "Strategy, content calendar, post production, community management, and compliance-aware response handling — coordinated with SEO, reviews, and ad creative." },
  { q: "Do you handle HIPAA-compliant responses?", a: "Yes. All review and social responses follow HIPAA-aware language standards — no acknowledgment of patient relationships, no PHI, and approved response templates." },
  { q: "Do you work with multi-location practices?", a: "Yes. Vigorant manages reputation and social at the location level with consistent brand voice and per-location review velocity, response handling, and reporting." },
];

const SCOPE = [
  { Icon: Star, h: "Review Generation", b: "Compliant, patient-initiated workflows that lift star rating, recent count, and Map-pack ranking together." },
  { Icon: MessageSquare, h: "Response Strategy", b: "HIPAA-aware templates and escalation paths for positive, neutral, and negative reviews." },
  { Icon: TrendingUp, h: "Reputation Monitoring", b: "Real-time alerts across Google, Yelp, Healthgrades, and social — with weekly trend reporting." },
  { Icon: Sparkles, h: "Social Content", b: "Strategy, calendar, production, and posting across Instagram, Facebook, and TikTok — tied to service lines." },
  { Icon: Users, h: "Community Management", b: "Engagement, DMs, and comments handled with brand voice and compliance guardrails." },
  { Icon: Search, h: "Local & Entity Signals", b: "GBP posts, Q&A, photos, and consistent NAP across the citations that drive local SEO and AI trust." },
  { Icon: ShieldCheck, h: "Compliance Guardrails", b: "Approval workflows, response policies, and audit-ready logs across every channel." },
  { Icon: BarChart2, h: "Reputation Reporting", b: "Star rating, velocity, sentiment, response time, and downstream call/booking impact." },
];

export default function ServicesReputation() {
  return (
    <PainPageLayout
      seoTitle="Healthcare Reputation & Social Management | Vigorant"
      seoDesc="Compliant review generation, reputation monitoring, response strategy, and social content for dental, medical, and chiropractic practices. Free Reputation Audit."
      canonical="https://vigorant.com/services/reputation"
      faqs={FAQS}
    >
      <PainHero
        breadcrumbLabel="Reputation & Social"
        breadcrumbTrail={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }]}
        titleLines={[{ text: "Patients Judge You Before" }, { text: "They Ever Pick Up the Phone.", gradient: true }]}
        subhead="Reputation isn't a posting calendar. It's patient-trust infrastructure."
        paragraph="Vigorant turns reviews, responses, social proof, and local entity signals into a compliant system that lifts trust, rankings, and AI recommendation — for dental, medical, and chiropractic practices."
        primaryCTA={{ label: "Request Your Free Reputation Audit", href: "/free-audit" }}
        secondaryCTA={{ label: "See Patient Trust Results", href: "/results" }}
      />

      <DarkSection>
        <SectionHeader dark label="The Invisible Decision" title={<><span className="text-white">Most patients decide </span><span className="gradient-text">before they ever call.</span></>} sub="Star rating, recent review velocity, response tone, and social presence shape the choice silently. A weak or stale trust signal sends qualified patients to the competitor that looks more active and more trusted." />
      </DarkSection>

      <OffWhiteSection>
        <SectionHeader label="What's Inside" title={<>Eight layers of the <span className="gradient-text">Vigorant trust system.</span></>} />
        <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1180px] mx-auto list-none p-0">
          {SCOPE.map((s, i) => (
            <li key={i}>
              <Reveal delay={i * 0.04} className="h-full">
                <article className="bg-white border border-brand-purple/12 rounded-2xl p-6 h-full hover:border-brand-purple/30 hover:shadow-lg transition-all">
                  <div className="w-11 h-11 rounded-xl bg-brand-purple/8 border border-brand-purple/15 flex items-center justify-center text-brand-purple mb-4">
                    <s.Icon aria-hidden size={20} />
                  </div>
                  <h3 className="font-bold text-brand-deep text-[16px] mb-2">{s.h}</h3>
                  <p className="text-text-secondary text-[14px] leading-[1.7]">{s.b}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </OffWhiteSection>

      <WhiteSection>
        <SectionHeader label="Compliance First" title={<>Compliant by <span className="gradient-text">default.</span></>} sub="No fake reviews. No review buying. No pressure tactics. No PHI in responses. Every workflow is HIPAA-aware, platform-policy aligned, and audit-logged." />
      </WhiteSection>

      <OffWhiteSection>
        <SectionHeader label="Common Questions" title="Frequently Asked Questions About Reputation & Social Management" />
        <FAQAccordion faqs={FAQS} />
      </OffWhiteSection>

      <FinalCTA
        headline="See what patients see — before they call."
        sub="A free Reputation Audit reviews your star rating, recent velocity, response patterns, social presence, and AI trust signals."
        ctaLabel="Request Your Free Reputation Audit"
        ctaHref="/free-audit"
      />
    </PainPageLayout>
  );
}
