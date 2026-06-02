# Mobile visual regression tests

Playwright suite that catches mobile **horizontal overflow** and **visual regressions** across every public route.

## What's covered

Configured viewports (`playwright.config.ts`):

| Device | Size |
|---|---|
| iPhone SE | 375×667 |
| iPhone 12 | 390×844 |
| Pixel 5 | 393×851 |
| iPhone 14 Pro Max | 430×932 |
| iPad Mini | 768×1024 |

Two test files run against every route listed in `tests/e2e/routes.ts`:

- **`overflow.spec.ts`** — fast assertion: `document.scrollWidth <= viewport + 1px`. On failure, it lists the first 10 elements that stick out past the viewport edge (tag + class + width + left). This is what catches the "section is wider than the screen" class of bug.
- **`visual.spec.ts`** — full-page screenshot diffs vs committed baselines (`__screenshots__/`). Animations are disabled, marquees stopped, fonts awaited, and the page is scroll-scrubbed top-to-bottom before capture so `framer-motion` Reveals are in their final state.

## One-time local setup

```bash
npx playwright install --with-deps
```

## Run

```bash
# Fast: only the overflow assertions (no baselines needed)
npm run test:e2e -- overflow.spec.ts

# Full suite (overflow + visual)
npm run test:visual

# After an intentional UI change, regenerate baselines
npm run test:visual:update

# Open the HTML report after a run
npx playwright show-report
```

By default Playwright will `npm run build && npm run preview` on port 4173. To point at an already-running server (e.g. the Lovable preview), set `PLAYWRIGHT_BASE_URL`:

```bash
PLAYWRIGHT_BASE_URL=https://vigorant-growth-engine.lovable.app npm run test:visual
```

## Adding a route

Edit `tests/e2e/routes.ts` and append `{ path, name }`. Both specs pick it up automatically.

## CI

The config sets `forbidOnly`, retries, and worker limits when `CI=true`. Cache `~/.cache/ms-playwright` between runs. Commit the `__screenshots__/` folder so diffs are reproducible. The `test-results/` and `playwright-report/` folders are gitignored.
