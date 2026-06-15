import { Helmet } from "react-helmet-async";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import Section, { Reveal } from "@/components/site/Section";

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Vigorant</title>
        <meta name="description" content="Terms governing use of Vigorant's website, services, and Free Growth Audit." />
        <link rel="canonical" href="https://vigorant.com/terms" />
      </Helmet>

      <Nav />
      <main id="main" className="pt-28">
        <Section bg="white">
          <Reveal className="max-w-3xl mx-auto">
            <h1 className="font-extrabold text-brand-deep text-[40px] leading-[1.1]">Terms of Service</h1>
            <p className="mt-4 text-ink-secondary text-[15px]">Last updated: May 2026</p>
            <div className="mt-8 space-y-6 text-ink-secondary text-[16px] leading-[1.8]">
              <p>By accessing vigorant.com or engaging Vigorant Inc. for marketing services, you agree to these terms. Services are provided to U.S. healthcare practices for marketing purposes only and do not constitute medical, legal, or financial advice.</p>
              <h2 className="font-bold text-brand-deep text-[22px]">Use of the Site</h2>
              <p>You agree not to misuse the site, scrape content, or interfere with its operation. All trademarks and content belong to their respective owners.</p>
              <h2 className="font-bold text-brand-deep text-[22px]">Engagements</h2>
              <p>Service engagements are governed by a separate written agreement signed by both parties.</p>
              <h2 className="font-bold text-brand-deep text-[22px]">Contact</h2>
              <p><a className="text-brand-purple underline" href="mailto:info@vigorant.com">info@vigorant.com</a> · (833) 641-2200</p>
            </div>
          </Reveal>
        </Section>
      </main>
      <Footer />
    </>
  );
}
