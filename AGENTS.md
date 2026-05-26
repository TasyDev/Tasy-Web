# tasy.work — AGENTS.md

## Stack
- **Astro v6 + React v19** — `.astro` pages import `.tsx` components (no `.astro` components exist outside pages/layouts)
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin. Design tokens in `src/styles/tokens.css` use `--tasy-*` vars mapped via `@theme inline` block.
- **pnpm** (not npm). `pnpm-workspace.yaml` blocks `esbuild` and `sharp` install scripts.
- **TypeScript v6 strict** via `astro/tsconfigs/strict`. JSX: `react-jsx`.
- **Node >=22.12.0**

## Commands
| Command | Action |
|---|---|
| `pnpm dev` | Dev server at localhost:4321 |
| `pnpm build` | Build to `dist/` |
| `pnpm preview` | Preview production build |
| `pnpm test:ui` | Playwright E2E (headless, Chromium only) |
| `pnpm test:ui:headed` | Playwright with visible browser |
| `pnpm test:ui:debug` | Playwright debug mode |
| `pnpm test:ui:report` | Show Playwright HTML report |
| `pnpm storybook` | Storybook at localhost:6006 |
| `pnpm build-storybook` | Static Storybook to `storybook-static/` |

No lint or typecheck scripts exist. Run `npx astro check` for type-checking if needed.

Playwright auto-starts `npm run dev -- --host 127.0.0.1 --port 4321` as its web server.

## Architecture

### Pages (6 routes)
- `/` — Home (hero, timeline, portfolio, tech ticker, contact, footer)
- `/portafolio/` — Portfolio listing with filter + "load more" pagination
- `/portafolio/[slug]` — Portfolio detail (renders MDX content)
- `/blog/` — Blog listing with filter + "load more"
- `/blog/[slug]` — Blog detail (MDX + schema.org BlogPosting)
- `/non-profit/` — NGO landing page

### Atomic Design
```
atoms/ → actions/, forms/, text/
molecules/ → cards/, contact/, sections/, timeline/
organisms/ → filters/, forms/, grids/, sections/
layouts/ → containers/, media/, navigation/
```
Components co-locate with their `.stories.tsx` file. Story titles follow the hierarchy: `Atoms/Actions/Button`, `Organisms/Sections/Hero`, etc.

Story sort order in `.storybook/preview.tsx`: Resumen → Design Tokens → Tokens → Atoms → Molecules → Organisms → Layouts → Pages.

### Content Collections (`src/content.config.ts`)
Two collections using Astro's `glob` loader:
- **`blog`** — `src/content/blog/**/*.{md,mdx}`. Fields: title, description, date, category, image, author ({name, role, image}).
- **`portfolio`** — `src/content/portfolio/**/*.{md,mdx}`. Fields: title, description, category, image.

All content is in **Spanish**.

### MDX Components
Portfolio/blog detail pages override MDX elements with custom React components:
```astro
const mdxComponents = { h2: HeadingH2, h3: HeadingH3, blockquote: BlockquoteMdx };
<Content components={mdxComponents} />
```
MDX content is wrapped in `.mdx-content` class (styled in `global.css`: brand-colored underlines on links).

### Client Directives
- `client:load` — Navbar, ContactSection, CTASection, BlogList (interactive components hydrated immediately)
- `client:only="react"` — LogoTickerSection (browser-only, no SSR needed)

### Sitemap & SEO
- `@astrojs/sitemap` auto-generates sitemap from all routes. Domain must match `site` in `astro.config.mjs`.
- Layout generates canonical URLs with trailing slash preference (`/blog/slug/` not `/blog/slug`).
- `noindex` prop available on Layout but unused by any page. Default: `index,follow`.

### Forms
- Contact form posts to **Formspree**. No `.env` file present — Formspree endpoint may be hardcoded or needs `PUBLIC_FORMSPREE_ID`.
- Playwright tests mock the Formspree POST and wait for a `dialog` event to confirm success.
- Tests use `data-testid="contact-form"` with `data-hydrated="true"` attribute check.

### Pagination
`usePagination` hook uses a **"load more"** pattern (increments visible count, not page-based). Returns `{ currentData, currentPage, totalPages, loadMore, hasMore }`.

## Testing

### Playwright (E2E)
- Test files under `tests/ui/tests/`. Page Object Models in `tests/ui/pages/`. Form modules in `tests/ui/modules/forms/`.
- Chromium only, 2 workers, 30s timeout, retries on CI only.
- Forms use mocked Formspree responses via `page.route()`.

### Vitest (Storybook)
- Only runs story-based tests via `@storybook/addon-vitest/vitest-plugin`.
- Browser: Playwright/Chromium headless.
- Storybook preview freezes time with `MockDate.set('2020-01-01')` and sets `localStorage.theme = 'dark'` in `beforeEach`.

### MSW (API Mocking)
- MSW service worker in `public/mockServiceWorker.js`.
- Configured in Storybook via `msw-storybook-addon` with `onUnhandledRequest: 'bypass'`.
- Handlers file at `.storybook/msw-handlers.ts` — currently empty array (add handlers as needed).

## Conventions
- `.astro` files handle routing/layout; `.tsx` files handle components.
- All `class` attributes use Tailwind classes (not `className` — Astro uses `class` in `.astro`, `className` in `.tsx`).
- React imports from `react-icons` use `hi2` (HeroIcons v2) and `fa` (FontAwesome) sets.
- Button icon variants are limited to `'cv' | 'linkedin'` — extend `iconMap` in `Button.tsx` to add more.
- Story titles use `/` as separator (matches folder nesting in sidebar).
- Tags for autodocs stories: `['autodocs']`.
