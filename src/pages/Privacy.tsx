import { Helmet } from "react-helmet-async";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import Section, { Reveal } from "@/components/site/Section";

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Vigorant</title>
        <meta name="description" content="How Vigorant collects, uses, and protects information from healthcare practices and website visitors." />
        <link rel="canonical" href="https://vigorant.com/privacy" />
      </Helmet>

      <Nav />
      <main id="main" className="pt-28">
        <Section bg="white">
          <Reveal className="max-w-3xl mx-auto prose prose-slate">
            <h1 className="font-extrabold text-brand-deep text-[40px] leading-[1.1]">Privacy Policy</h1>
            <p className="mt-4 text-ink-secondary text-[15px]">Last updated: May 2026</p>
            <div className="mt-8 space-y-6 text-ink-secondary text-[16px] leading-[1.8]">
              <p>Vigorant Inc. ("Vigorant", "we", "us") respects your privacy. This policy explains what data we collect when you use vigorant.com or request a Free Growth Audit, how we use it, and the choices you have.</p>
              <h2 className="font-bold text-brand-deep text-[22px]">Information We Collect</h2>
              <p>We collect information you submit through forms (such as name, practice name, email, phone), basic analytics about website visits, and any communications you send to <a className="text-brand-purple underline" href="mailto:info@vigorant.com">info@vigorant.com</a>.</p>
              <h2 className="font-bold text-brand-deep text-[22px]">How We Use It</h2>
              <p>To respond to inquiries, deliver requested audits, improve the website, and comply with legal obligations. We never sell personal information.</p>
              <h2 className="font-bold text-brand-deep text-[22px]">Contact</h2>
              <p>Questions: <a className="text-brand-purple underline" href="mailto:info@vigorant.com">info@vigorant.com</a> · (833) 641-2200</p>
            </div>
          </Reveal>
        </Section>
      </main>
      <Footer />
    </>
  );
}
