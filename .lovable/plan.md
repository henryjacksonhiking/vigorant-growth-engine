# Plan — Build 4 new pages from uploaded specs

Build all four pages requested, each as a self-contained page component reusing the existing design system (Nav, Footer, Section, GlobalFx, tokens in `index.css` / `tailwind.config.ts`). No new colors or fonts — extend tokens only if a spec value is missing.

## Pages

1. **`/solutions/dental`** — `src/pages/SolutionsDental.tsx`
   - Hero · 5 dental sub-segments · 9 service cards (link to `/solutions/dental/*`) · Why Vigorant · Proof · FAQ · Final CTA
2. **`/solutions/chiropractic`** — `src/pages/SolutionsChiropractic.tsx`
   - Hero · 5 chiropractic sub-segments · 9 service cards (link to `/solutions/chiropractic/*`) · Proximity/intent angle · Proof · FAQ · Final CTA
3. **`/for-practices/scale-your-practice`** — `src/pages/ScaleYourPractice.tsx`
   - Advisory tone (no "rescue" language) · Hero · Growth-ceiling diagnostic · Scale-readiness checklist · System sections · Proof · FAQ · Final CTA
4. **`/for-practices/high-value-patients`** — `src/pages/HighValuePatients.tsx`
   - Production-mix angle · Hero · Patient-mix problem · Diagnostic · Strategy sections · Proof · FAQ · Final CTA (gold + green accents only on functional indicators per spec)

## Shared work

- **Routing** — register all 4 routes in `src/App.tsx`
- **SEO** — per-page React Helmet block (title, description, canonical, OG, JSON-LD: WebPage + BreadcrumbList + FAQPage; Service for the two `/solutions/*` pages)
- **Sitemap** — add all 4 URLs to `public/sitemap.xml`
- **A11y** — single H1, breadcrumb nav with `aria-current`, semantic `<ul>/<ol>`, accordion FAQ via existing `Accordion` ui component, focus styles, reduced-motion guards
- **Reuse** — `Nav`, `Footer`, `Section`, `Reveal`, `GlobalFx`, `StickyCTA`, animated counters, orb/grid backgrounds

## Technical notes

- All component-level colors stay on semantic tokens; if a spec hex isn't already tokenized (gold `#ca8a04`, growth-green `#16a34a`), I'll add them to `tailwind.config.ts` + `index.css` as functional-only utilities used per the specs' restrictions.
- Each page is ~700–1200 lines following the same structural pattern as the existing `MoreNewPatients.tsx`.
- Internal links to not-yet-built child routes (`/solutions/dental/seo`, etc.) render as real `<Link>` and fall through to `NotFound` until those pages exist — out of scope here.
- Analytics events from specs wired as `data-analytics-event` attributes only.
- No backend changes; purely presentational.

## Files

- **new** `src/pages/SolutionsDental.tsx`
- **new** `src/pages/SolutionsChiropractic.tsx`
- **new** `src/pages/ScaleYourPractice.tsx`
- **new** `src/pages/HighValuePatients.tsx`
- **edit** `src/App.tsx` (4 routes)
- **edit** `public/sitemap.xml` (4 URLs)
- **edit** `tailwind.config.ts` / `src/index.css` if new tokens are required

Approve to implement all 4 in one go, or tell me to start with a subset.
