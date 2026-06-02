import Section, { Reveal, SectionLabel, H2 } from "./Section";
import { Users, Mail, Star, Calendar, BarChart3, Clock, ShieldCheck } from "lucide-react";
import { useTilt } from "./GlobalFx";

export default function Bento() {
  return (
    <Section bg="white">
      <Reveal className="text-center max-w-3xl mx-auto">
        <SectionLabel>Platform</SectionLabel>
        <H2>Everything your practice needs to<br /><span className="gradient-text">grow predictably.</span></H2>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-14">
        <Cell className="lg:col-span-7" icon={Users} tag="Acquisition" title="AI-Powered Patient Pipeline"
          body="Multi-channel funnels across Google, Meta, and AI search capture new patients 24/7. Every lead scored, nurtured, and ready to book.">
          <div className="grid grid-cols-2 gap-3 mt-5">
            <MiniStat n="2.4×" l="Higher show rate" />
            <MiniStat n="18hr" l="Avg time-to-book" />
          </div>
        </Cell>
        <Cell className="lg:col-span-5" icon={Mail} tag="Re-engagement" title="Dormant List Reactivation"
          body="AI win-back sequences that feel personal — turning cold contacts into booked appointments month after month.">
          <div className="mt-5 font-extrabold gradient-text" style={{ fontSize: "3.4rem", lineHeight: 1 }}>+112</div>
        </Cell>

        <Cell className="lg:col-span-4" icon={Star} tag="Reputation" title="5-Star Review Engine"
          body="Post-visit automations collect reviews at the perfect moment." />
        <Cell className="lg:col-span-4" icon={Calendar} tag="Retention" title="Smart Recall Campaigns"
          body="Predictive scheduling nudges keep recall rates above 80%." />
        <Cell className="lg:col-span-4" icon={BarChart3} tag="Analytics" title="Revenue Intelligence"
          body="Live dashboards show every dollar attributed in real time." />

        <Cell className="lg:col-span-5" icon={Clock} tag="Automation" title="Runs While You Treat"
          body="Every workflow — from lead capture to post-visit review — runs without your team lifting a finger." />
        <Cell className="lg:col-span-7" icon={ShieldCheck} tag="Compliance" title="HIPAA-Ready, AI-Optimized"
          body="Built with healthcare-grade security and structured for AI search visibility from day one.">
          <div className="flex flex-wrap gap-3 mt-5">
            <Badge>HIPAA ✓</Badge>
            <Badge>AI Search ✓</Badge>
          </div>
        </Cell>
      </div>
    </Section>
  );
}

function Cell({ className = "", icon: Icon, tag, title, body, children }: any) {
  const ref = useTilt<HTMLDivElement>(4);
  return (
    <div ref={ref}
      className={`tilt-spotlight rounded-[20px] bg-surface-secondary border border-brand-purple/10 p-5 sm:p-7 lg:p-8 transition-all duration-300 hover:border-brand-purple/25 hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)] ${className}`}>
      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
        style={{ background: "linear-gradient(135deg, hsl(247 93% 64%), hsl(248 49% 15%))" }}>
        <Icon size={20} className="text-white" />
      </div>
      <span className="font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-purple bg-brand-purple/10 rounded-full px-2.5 py-1">{tag}</span>
      <h3 className="mt-3 font-extrabold text-brand-deep text-xl">{title}</h3>
      <p className="mt-2 text-ink-secondary text-[14px] leading-relaxed">{body}</p>
      {children}
    </div>
  );
}

function MiniStat({ n, l }: { n: string; l: string }) {
  return (
    <div className="bg-white rounded-xl p-4 border border-brand-purple/10">
      <div className="font-extrabold text-brand-deep text-2xl">{n}</div>
      <div className="text-[12px] text-ink-muted mt-0.5">{l}</div>
    </div>
  );
}

function Badge({ children }: any) {
  return <span className="bg-white border border-brand-purple/15 rounded-xl px-4 py-2 text-sm font-semibold text-brand-deep">{children}</span>;
}
