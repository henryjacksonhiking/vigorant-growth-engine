# Plan — Build `/for-practices/more-new-patients`

The page itself doesn't exist yet. The `ForPractices` hub already links to this route, but it currently falls through to NotFound. I'll build the full 12-section page from the uploaded spec, wired into the existing design system, nav, and SEO infrastructure.

## Deliverables

### 1. New page `src/pages/MoreNewPatients.tsx`
All 12 sections per the spec, in order, using the inherited design tokens:

1. **Hero** (white) — breadcrumb, badge chip, split-line H1 ("Getting More" / gradient "New Patients Online."), subheadline, dual CTA, trust pill strip, ambient orbs
2. **Empathy / You Are Not Alone** (dark) — H2 split, body, CDC research card with external link, AEO Q&A block, 3 "Sound familiar?" cards
3. **The Real Problem** (off-white) — H2, body, **7-stage diagnostic funnel** (`id="diagnostic-funnel"`, horizontal desktop / vertical mobile, with `ChevronRight`/`ChevronDown` connectors), problem callout
4. **Where Patients Are Being Lost** (white) — 6 diagnostic gap cards (3-col) with chip, icon, H3, Symptom / Impact / Fix rows, service link
5. **What Makes Vigorant Different** (dark) — AEO definition block, 5-row comparison table, inline CTA
6. **The Vigorant Patient Acquisition System** (off-white) — 5-step horizontal stepper (reused styling from existing `/how-it-works` pattern), animated connector
7. **Solutions by Practice Type** (white) — 3 specialty glass cards (Dental / Chiropractic / Medical) linking to `/solutions/*`
8. **Marketing Spend** (off-white) — 12-item checklist card, "Free Spend Analysis" CTA
9. **Proof** (dark) — 3 proof cards with animated counters and quotes
10. **Free Audit Offer** (off-white) — 2-col: 7 deliverables list + neomorphism CTA card with scarcity chip + objection pills
11. **FAQ** (white) — 8-question accordion, copy matches JSON-LD verbatim
12. **Final CTA** (dark) — H2, bullets, scarcity chip, primary white pill + secondary link + trust chips

Mobile sticky CTA reused from existing pages.

### 2. SEO — `src/components/site/MoreNewPatientsSeo.tsx`
React Helmet component injecting:
- Title, meta description, canonical, OG, twitter, robots (per spec)
- 4 separate JSON-LD scripts: `WebPage`, `BreadcrumbList` (3 levels), `Service`, `FAQPage` (8 Qs, answers character-for-character matching on-page accordion)

### 3. Routing
- `src/App.tsx` — register `<Route path="/for-practices/more-new-patients" element={<MoreNewPatients />} />`

### 4. Sitemap
- `public/sitemap.xml` — add `/for-practices/more-new-patients` at priority 0.9, weekly

### 5. Accessibility & semantics
- Single H1
- `<nav aria-label="Breadcrumb">` with `aria-current="page"`
- Funnel diagram wrapped with `role="img" aria-label="Patient acquisition funnel: …"`
- Diagnostic cards as `<ul>/<li>` with each card an `<article>`
- System steps as `<ol>/<li>`
- Checklist `<ul>/<li>`, checkbox icons `aria-hidden`
- FAQ via existing `Accordion` component (correct ARIA built-in)
- CDC external link: `target="_blank" rel="noopener noreferrer nofollow"` + `aria-label`
- Focus styles per spec; reduced-motion guard on reveal animations

### 6. Coherence
- Reuse `Nav`, `Footer`, scroll-reveal, tilt, magnetic CTA, animated counters, orb/grid background utilities already in the project (`src/components/site/*`, `GlobalFx`, `Section`)
- All colors via existing tokens in `index.css` / `tailwind.config.ts` (no new hex literals in components — extend tokens if any are missing)

## Technical notes

- Page is purely presentational; no business logic or backend changes.
- Analytics events listed in the spec (`page_hero_cta_click`, `faq_expand`, etc.) will be wired as `data-analytics-event` attributes only (no analytics provider is installed yet) so they're trivially upgraded later.
- Placeholder metrics in proof cards will be marked with a code comment `// TODO: replace with verified client data` per the spec's explicit note.
- Internal links in the spec target routes that don't exist yet (`/services/seo`, `/services/paid-ads`, `/services/website-design`, `/how-it-works`, `/results`, `/free-audit`, `/solutions/dental|chiropractic|medical`). These will be rendered as real `<Link>` hrefs so future route additions activate them; today they will fall through to `NotFound`. Out of scope to build those routes here.

## Files

- **new** `src/pages/MoreNewPatients.tsx`
- **new** `src/components/site/MoreNewPatientsSeo.tsx`
- **edit** `src/App.tsx` (register route)
- **edit** `public/sitemap.xml` (add URL)

Approve to implement.