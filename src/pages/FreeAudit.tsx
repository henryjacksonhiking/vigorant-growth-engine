import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowRight, Check, ShieldCheck, Clock, Sparkles } from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import GlobalFx from "@/components/site/GlobalFx";
import { ChipLabel, GradientText, HeroOrbs, Breadcrumb } from "@/components/site/SolutionPageAtoms";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  practice: z.string().trim().min(1, "Please enter your practice name").max(150),
  website: z.string().trim().max(255).optional().or(z.literal("")),
  specialty: z.string().min(1, "Select your specialty"),
  goal: z.string().trim().min(1, "Tell us your primary goal").max(1000),
});

type FormState = z.infer<typeof schema>;

const SPECIALTIES = ["Dental", "Chiropractic", "Medical / Physician Practice", "Med Spa / Aesthetic", "Multi-Location Group", "Other Healthcare"];

const BENEFITS = [
  "Google and AI search visibility review",
  "Website and landing page conversion check",
  "Paid ads and campaign opportunity analysis",
  "Competitor gap analysis by service line",
  "Reputation and trust signal review",
  "Prioritized growth roadmap — no obligation",
];

export default function FreeAudit() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", practice: "", website: "", specialty: "", goal: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof FormState, string>> = {};
      parsed.error.issues.forEach((i) => { const k = i.path[0] as keyof FormState; if (k && !fieldErrors[k]) fieldErrors[k] = i.message; });
      setErrors(fieldErrors);
      toast.error("Please correct the highlighted fields.");
      return;
    }
    setSubmitting(true);
    try {
      // Placeholder: integrate with backend / email later.
      await new Promise((r) => setTimeout(r, 600));
      setSubmitted(true);
      toast.success("Audit request received. We'll be in touch within 24 hours.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls = (k: keyof FormState) =>
    `w-full bg-white border rounded-[10px] px-3.5 py-2.5 text-[14px] text-brand-deep placeholder:text-ink-muted/70 focus:outline-none focus:ring-2 focus:ring-brand-purple/30 transition ${
      errors[k] ? "border-red-400" : "border-brand-purple/15 hover:border-brand-purple/30"
    }`;

  return (
    <>
      <Helmet>
        <title>Free Healthcare Marketing Growth Audit | Vigorant</title>
        <meta name="description" content="Request your free growth audit for dental, chiropractic, medical, or multi-location healthcare practices. Get a prioritized roadmap — no obligation." />
        <link rel="canonical" href="https://vigorant.com/free-audit" />
      </Helmet>
      <Nav /><GlobalFx />
      <main className="text-center sm:text-left">
        <section className="relative overflow-hidden bg-background pt-28 pb-20 sm:pt-32 sm:pb-24">
          <HeroOrbs />
          <div aria-hidden className="absolute inset-0 bg-grid pointer-events-none" />
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 items-start">
              <div>
                <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Free Growth Audit" }]} />
                <ChipLabel>Free Growth Audit · No Obligation</ChipLabel>
                <h1 className="font-serif font-bold text-brand-deep leading-[1.05] tracking-tight mt-4" style={{ fontSize: "clamp(34px, 5.5vw, 54px)", letterSpacing: "-0.025em" }}>
                  Get Your Free <GradientText>Healthcare Growth Audit.</GradientText>
                </h1>
                <p className="mt-5 text-ink-secondary text-[16px] sm:text-[17px] leading-[1.75] max-w-xl">
                  Tell us about your practice. We'll review your visibility, website, ads, and reputation — then send a prioritized roadmap for what to fix first.
                </p>
                <ul className="list-none p-0 mt-7 flex flex-col gap-2.5 max-w-lg">
                  {BENEFITS.map((b) => (
                    <li key={b} className="flex gap-2.5 items-start text-brand-deep text-[14px]">
                      <span className="w-5 h-5 rounded-full bg-brand-purple/10 flex items-center justify-center flex-shrink-0 mt-0.5"><Check size={12} className="text-brand-purple" /></span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    { i: ShieldCheck, t: "Privacy-Conscious" },
                    { i: Clock, t: "Response Within 24 Hours" },
                    { i: Sparkles, t: "No Long-Term Contracts" },
                  ].map(({ i: Icon, t }) => (
                    <span key={t} className="inline-flex items-center gap-1.5 font-mono-ui text-[11px] text-brand-purple bg-brand-purple/8 border border-brand-purple/15 rounded-full px-3 py-1.5">
                      <Icon size={12} /> {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-brand-purple/15 rounded-[22px] p-6 sm:p-8" style={{ boxShadow: "0 24px 80px hsl(248 49% 15% / 0.09)" }}>
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 flex items-center justify-center"><Check size={28} className="text-emerald-600" /></div>
                    <h2 className="font-bold text-brand-deep text-[22px] mt-4">Audit request received.</h2>
                    <p className="mt-2 text-ink-secondary text-[15px] max-w-sm mx-auto leading-[1.7]">Thanks{form.name ? `, ${form.name.split(" ")[0]}` : ""}. We'll review your practice and reply within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block font-mono-ui text-[10px] uppercase text-brand-purple mb-1.5">Your name *</label>
                        <input id="name" type="text" value={form.name} onChange={(e) => update("name", e.target.value)} className={inputCls("name")} placeholder="Dr. Jane Smith" maxLength={100} />
                        {errors.name && <p className="mt-1 text-[12px] text-red-500">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="block font-mono-ui text-[10px] uppercase text-brand-purple mb-1.5">Work email *</label>
                        <input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputCls("email")} placeholder="you@practice.com" maxLength={255} />
                        {errors.email && <p className="mt-1 text-[12px] text-red-500">{errors.email}</p>}
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block font-mono-ui text-[10px] uppercase text-brand-purple mb-1.5">Phone (optional)</label>
                        <input id="phone" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputCls("phone")} placeholder="(555) 555-5555" maxLength={30} />
                      </div>
                      <div>
                        <label htmlFor="practice" className="block font-mono-ui text-[10px] uppercase text-brand-purple mb-1.5">Practice name *</label>
                        <input id="practice" type="text" value={form.practice} onChange={(e) => update("practice", e.target.value)} className={inputCls("practice")} placeholder="Smith Family Dental" maxLength={150} />
                        {errors.practice && <p className="mt-1 text-[12px] text-red-500">{errors.practice}</p>}
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="website" className="block font-mono-ui text-[10px] uppercase text-brand-purple mb-1.5">Website (optional)</label>
                        <input id="website" type="text" value={form.website} onChange={(e) => update("website", e.target.value)} className={inputCls("website")} placeholder="https://yourpractice.com" maxLength={255} />
                      </div>
                      <div>
                        <label htmlFor="specialty" className="block font-mono-ui text-[10px] uppercase text-brand-purple mb-1.5">Specialty *</label>
                        <select id="specialty" value={form.specialty} onChange={(e) => update("specialty", e.target.value)} className={inputCls("specialty")}>
                          <option value="">Select…</option>
                          {SPECIALTIES.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                        {errors.specialty && <p className="mt-1 text-[12px] text-red-500">{errors.specialty}</p>}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="goal" className="block font-mono-ui text-[10px] uppercase text-brand-purple mb-1.5">What's your primary growth goal? *</label>
                      <textarea id="goal" value={form.goal} onChange={(e) => update("goal", e.target.value)} className={`${inputCls("goal")} min-h-[110px] resize-y`} placeholder="e.g. More new patients, fix lead conversion, scale to new locations…" maxLength={1000} />
                      {errors.goal && <p className="mt-1 text-[12px] text-red-500">{errors.goal}</p>}
                      <p className="mt-1 text-[11px] text-ink-muted text-right">{form.goal.length}/1000</p>
                    </div>
                    <button type="submit" disabled={submitting} className="btn-primary-grad font-semibold text-[15px] px-6 py-3.5 rounded-full inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
                      {submitting ? "Sending…" : <>Request My Free Audit <ArrowRight size={16} /></>}
                    </button>
                    <p className="text-[11px] text-ink-muted text-center">By submitting, you agree to be contacted about your audit. We never share your information.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
