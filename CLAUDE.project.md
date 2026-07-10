# CLAUDE.md — SL Studio Project Context

## PROJECT OVERVIEW

**Owner:** Serhii Lazariev — guitarist, vocalist, music producer
**Site:** https://www.slstudio.pro
**Stack:** Next.js (App Router), Tailwind CSS v4, MySQL (AlwaysData), deployed on Vercel via GitHub
**Local path:** `D:\WebSites\slstudio\`
**Repo:** connected to Vercel, pushes to `main` branch trigger auto-deploy

---

## ARCHITECTURE

```
src/
├── app/
│   ├── page.js                  (Home page — assembles all sections)
│   ├── layout.js                (Playfair Display + Outfit fonts, Header + Footer wrap)
│   ├── globals.css              (Tailwind v4, container 1024px, gold colors, Playfair for h1-h3, cardGlow animation)
│   ├── api/
│   │   └── contact/
│   │       └── route.js         (POST handler — Resend email API, sends to serhii@slstudio.pro)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx       ("use client", animated SVG logo logo-animated.svg, hamburger mobile)
│   │   │   └── Footer.jsx
│   │   ├── blog/
│   │   │   └── BlogHeader.jsx   (breadcrumbs: Blog → Category · Date)
│   │   ├── cards/
│   │   │   ├── HeroCard.jsx     ("use client", full card = Link, gold corner glow, hover state, cardGlow CSS class)
│   │   │   ├── YouTubeCard.jsx
│   │   │   └── BeforeAfterCard.jsx (WaveSurfer, global stop via CustomEvent "slstudio:stop-all")
│   │   ├── sections/
│   │   │   ├── Hero.jsx         ("use client", Playfair h1, photo top right, About me with label)
│   │   │   ├── BeforeAfter.jsx  (DB query section='home')
│   │   │   ├── YouTube.jsx      (DB query, lg:grid-cols-3)
│   │   │   ├── HowItWorks.jsx   (4 steps, icons destructured as Icon, gold top border on cards)
│   │   │   ├── Testimonials.jsx (3 real reviews with photos)
│   │   │   ├── WhyChoose.jsx    ("use client", gold left border, hover effect)
│   │   │   ├── BlogPreview.jsx  ("use client", 3 fixed posts, gold left border)
│   │   │   ├── Pricing.jsx      (3 tiers, featured=Mixing&Mastering, Get Started buttons, payment info)
│   │   │   └── FinalCTA.jsx     (gold glow, gradient button with box-shadow)
│   │   └── pages/
│   │       └── contact/
│   │           └── Hero.jsx     ("use client", single 2-col grid, logo-animated.svg top right, form with Resend)
│   ├── blog/                    (20 articles)
│   ├── mixing-mastering/
│   ├── arrangement/
│   └── contact/
│       └── page.js              (imports Hero from components/pages/contact/Hero.jsx)
├── data/
│   └── posts.js                 (20 posts array)
└── public/
    ├── sitemap.xml
    └── images/
        ├── logo-animated.svg    (SL STUDIO lockup, transparent bg, gold sheen animation 7s loop)
        ├── logo-transparent.png (same without animation)
        ├── SL-logo-mark.svg     (square SL monogram only — for favicon/avatar)
        ├── SL-logo-mark-1024.png
        ├── contact-photo.jpg    (portrait photo, used on Contact page — removed, replaced by logo)
        └── Serhii-Lazariev.JPG  (studio photo, used in Hero section)
```

---

## FONTS

- **Body:** Outfit (300–700) — imported via `next/font/google`
- **Headings h1/h2/h3:** Playfair Display (400–700) — CSS variable `--font-playfair`, applied via `globals.css`
- `body { font-family: inherit; }` — do NOT set Arial or any other body font, it overrides Outfit

---

## COLORS

- **Gold:** `#C9A84C` — primary accent, used everywhere
- **Gold alt (hero):** `#f5b942` — used in Hero h1 span and stats
- **Background:** `#1b1b1b` — site bg
- **Tailwind utility:** `.text-gold2 { color: #f5b942; }`
- Gold rgba variants: `rgba(201,168,76,0.1)` (icon bg), `rgba(201,168,76,0.35)` (border), `rgba(201,168,76,0.06)` (card bg)

---

## DATABASE

> Credentials are NOT stored here. They live in Vercel Environment Variables
> and in the private local `CLAUDE.md` (gitignored). Do not paste them into
> any shared/external tool.

- Host: `<AlwaysData MySQL host — see Vercel env>`
- User: `<see Vercel env / local CLAUDE.md>`
- Pass: `<see Vercel env / local CLAUDE.md>`
- DB: `<see Vercel env / local CLAUDE.md>`
- Table `enhancements`: field `section VARCHAR(50)` — values: 'home', 'mixing', 'arrangement'
- Table `videos`: YouTube video IDs, `is_active`, `created_at`, `title`

---

## LOGO & BRANDING

Logo created as SVG + PNG in two versions:

**logo-animated.svg** (`public/images/logo-animated.svg`)
- Full lockup: gold SL square (3D GPT-generated render) + "STUDIO" wordmark
- Transparent background (black removed via flood-fill + feathering)
- Gold sheen animation: linear gradient slides left→right, 7s loop, no pause
- Used in: Header navbar (height 40px), Contact page (width 82% of right column)

**SL-logo-mark.svg / SL-logo-mark-1024.png**
- Square mark only (SL monogram on gold background)
- Used for: favicon, YouTube avatar, Facebook page profile photo

**Header usage:**
```jsx
<img src="/images/logo-animated.svg" alt="SL Studio"
  style={{ height: "40px", mixBlendMode: "lighten" }} />
```
`mixBlendMode: "lighten"` — originally used to blend dark bg, now logo has transparent bg so this is optional but harmless.

---

## CONTACT FORM — EMAIL SETUP

**File:** `src/app/api/contact/route.js`
- Uses **Resend** npm package
- API key stored in Vercel Environment Variable: `RESEND_API_KEY`
- Sends from: `noreply@slstudio.pro` (domain verified in Resend)
- Sends to: `serhii@slstudio.pro`
- `serhii@slstudio.pro` forwards to Gmail via **ImprovMX** (DNS configured on Vercel)
- Form fields: name, email, service, message (all with `name` attribute for FormData)

**DNS records added to Vercel for Resend domain verification:**
- DKIM TXT: `resend._domainkey`
- SPF MX + TXT: subdomain `send`
- DMARC TXT: `_dmarc`

---

## HOME PAGE SECTIONS (in order)

1. **Hero** — h1 "Your Sound, Elevated.", photo right, About me below photo with label "Guitarist · Producer · Engineer", stats (300+, 10+, Any Genre)
2. **BeforeAfter** — 4 cards from DB (WaveSurfer, before/after audio switch)
3. **YouTube** — videos from DB, `lg:grid-cols-3`
4. **HowItWorks** — 4 steps with Lucide icons (destructure as `{ icon: Icon }` — critical, lowercase fails)
5. **Testimonials** — 3 real reviews with real photos
6. **WhyChoose** — 4 cards, gold left border, hover effect, `"use client"` required
7. **BlogPreview** — 3 fixed posts from `posts.js`
8. **Pricing** — 3 tiers + payment info, featured = Mixing & Mastering
9. **FinalCTA** — gold radial glow, "Send Your Track →" button

---

## CRITICAL BUG TO REMEMBER — LUCIDE ICONS IN MAPS

When mapping over an array and rendering a Lucide icon from a variable, **must destructure with capital letter:**

```jsx
// WRONG — renders as HTML element, shows nothing
{items.map((item, i) => <item.icon className="w-5 h-5" />)}

// CORRECT
{items.map(({ icon: Icon, ...rest }, i) => <Icon className="w-5 h-5" />)}
```

This affects: HowItWorks.jsx, WhyChoose.jsx, Pricing.jsx — all fixed.

---

## SERVER vs CLIENT COMPONENTS

- `HeroCard.jsx` — `"use client"` — receives Lucide icon component as prop from `Hero.jsx` which is also `"use client"` — OK
- `WhyChoose.jsx` — `"use client"` — needed for onMouseEnter/onMouseLeave hover
- `BlogPreview.jsx` — `"use client"` — needed for hover handlers
- `YouTube.jsx` — Server Component — DB query with `export const dynamic = "force-dynamic"`
- `BeforeAfter.jsx` — Server Component — DB query
- `Hero.jsx` (sections) — `"use client"` — needed because HeroCard is client and receives icon prop
- `Contact Hero.jsx` — `"use client"` — form state (sent, loading, error)

**Rule:** If a Server Component needs to pass a Lucide icon (or any React component) as a prop to a child — the parent must also be `"use client"`.

---

## GLOBALS.CSS — KEY RULES

```css
@import "tailwindcss";

body {
  background: #1b1b1b;
  font-family: inherit;  /* DO NOT change to Arial */
  color: rgba(255,255,255,0.80);
}

h1, h2, h3 {
  font-family: var(--font-playfair), serif;
  color: rgba(255,255,255,0.92);
}

.container {
  width: 100%;
  max-width: 1024px;
  margin: auto;
  padding-left: 16px;
  padding-right: 16px;
}

@keyframes cardGlow {
  0%, 100% { box-shadow: 0 0 12px rgba(201,168,76,0.07); }
  50% { box-shadow: 0 0 28px rgba(201,168,76,0.18); }
}
.hero-card {
  animation: cardGlow 4s ease-in-out infinite;
}

@keyframes fadeInUp { ... }   /* scroll animation, used via .animate-on-scroll */
```

---

## CONTACT PAGE LAYOUT

Single 2-column grid (no separate header row):
- **Left column:** "Get In Touch" label → h1 "Let's Work." → description → "Connect directly" → 4 social cards (Telegram, Instagram, Facebook, Email) → Response time card
- **Right column:** `logo-animated.svg` (width 82%) → contact form (name, email, service, message, Send Message button)

Form submits to `/api/contact` via fetch POST. Shows loading spinner (Loader2 from lucide), error message if fails, success screen if sent.

---

## BLOG — 20 ARTICLES

| Slug | Date | Category |
|------|------|----------|
| suno-studio-guide-2026 | July 2, 2026 | Tutorials |
| suno-guide-2026-ru | May 1, 2026 | Tutorials |
| suno-guide-2026 | April 10, 2026 | Tutorials |
| vocal-reverb-delay-chain | March 20, 2026 | Mixing & Mastering |
| best-mixing-plugins-2026 | March 12, 2026 | Technics |
| ai-mixing-mastering-review | Feb 18, 2026 | Industry Insights |
| vovious-review | Jan 15, 2026 | Review |
| will-ai-destroy-music | Dec 5, 2025 | Industry Insights |
| how-long-does-mastering-take | Nov 10, 2025 | Mixing & Mastering |
| izotope-fxeq-review | Oct 5, 2025 | Review |
| is-online-mixing-mastering-worth-it | Sep 10, 2025 | Tutorials |
| spotify-lufs-mastering-tips | Aug 22, 2025 | Mixing & Mastering |
| kiive-kstrip-review | Jul 15, 2025 | Review |
| mixing-with-free-plugins | Jun 10, 2025 | Mixing & Mastering |
| best-music-distribution-2025 | May 2, 2025 | Tutorials |
| auto-tune-alternatives | Apr 8, 2025 | Technics |
| izotope-ozone-11-review | Mar 15, 2025 | Review |
| pro-tools-vs-studio-one | Feb 10, 2025 | Tutorials |
| blues-rock-mixing-mastering | Jan 21, 2025 | Mixing & Mastering |
| suno-studio-guide-en-2026 | (EN version of studio guide) | Tutorials |

BlogPreview shows: `suno-guide-2026`, `suno-studio-guide-en-2026`, `blues-rock-mixing-mastering`

---

## SEO STATUS (as of July 2, 2026)

GSC 3-month snapshot (export 2026-07-02): 23 clicks, ~1,950 impressions, avg position ~17.
Desktop skew: 1,688 impressions at 0.71% CTR vs mobile 249 at 4.02% — desktop snippets are the bottleneck.

**Done July 2, 2026 (commits 3a9f752, 95c65fa, 0846839):**
- Rewrote titles/descriptions of 5 underperforming posts: suno-studio-guide-en-2026 (834 imp, was 0.48% CTR),
  suno-guide-2026, auto-tune-alternatives, how-long-does-mastering-take, vovious-review (+$229 price in title)
- Resolved title cannibalization between the two EN Suno guides (they are different guides:
  A = Suno Studio [timeline/Extend], B = Suno general [prompts/Custom Mode]; each has RU+EN pair, NOT duplicates)
- hreflang (alternates.languages) for both RU/EN Suno pairs
- Tech package: metadataBase + title.template "%s | SL Studio" in layout (hardcoded suffixes stripped),
  OG/Twitter on all 20 posts, shared BlogJsonLd component (Article + BreadcrumbList from posts.js,
  datePublished full ISO 8601 +01:00), lastmod in sitemap.xml, GA via next/script afterInteractive,
  ProfessionalService JSON-LD (Warsaw) on home page, canonical fixed on home (was nested in openGraph)
- FAQ + FAQPage JSON-LD: how-long-does-mastering-take (4 Q&A) and suno-guide-2026 (instrumental/no vocals)
- izotope-ozone-11-review: retitled for "ozone 11 stabilizer" / "standard vs advanced",
  edition comparison table ($249/$499), Stabilizer = Advanced-only caveat

**Notes:**
- Rich Results Test does NOT show FAQPage (Google limited FAQ rich results to gov/health sites in Aug 2023) —
  markup is valid, verify via validator.schema.org
- CLAUDE.md is gitignored (contains DB credentials) — never commit it
- After metadata deploys: request reindexing of changed URLs in GSC manually

**Remaining plan:**
1. Google Business Profile for Warsaw (manual, business.google.com, free) — biggest local win
2. Rework ai-mixing-mastering-review (100 imp, pos 49; whole "ai mixing" query cluster at pos 50-90) — needs depth
3. /pl/mixing-mastering Polish landing + hreflang — only if Polish clients keep coming
4. best-music-distribution-2025 (pos 75) — skip, competition too strong

---

## DESIGN / UX / PERF WORK LOG (July 3–10, 2026)

### Performance & security package (commit 1831876)
- Admin auth: HMAC-SHA256 signed cookie (Web Crypto `crypto.subtle`) — replaced insecure "cookie presence" check. Secret in env var.
- WaveSurfer audio lazy-loads on first click (was: all 4 cards loaded audio on page load)
- Image priority hints: `loading="eager"/"lazy"` + `fetchPriority` on LCP-critical images
- Photo converted to `Serhii-Lazariev.webp`

### Design system pass (a362275 + follow-ups)
- **Card radius standard: `rounded-2xl`** everywhere (cards, images inside cards)
- Gold accent discipline: gold reserved for interactive/accent, not decoration
- Tailwind v4 tokens in globals.css: `@theme { --color-gold: #C9A84C; --color-gold-bright: #f5b942 }` → use `text-gold`/`bg-gold`/`border-gold` utilities, don't hardcode hex
- `.hero-title-glow` — soft blurred gold bloom behind page H1s (absolute, width 65% of wrapper, blur 30px). **Wrapper must NOT have width constraints (w-fit breaks it)**
- `.btn-gold` hover lift+glow; `.mobile-reflow` (`display:contents` <768px) for mobile column interleaving

### Hero redesigns (all pages)
- **Home:** two independent 2-col grids. Row 1: pitch + 2 service cards | photo. Row 2: stats + trust bullets | About Me. H1 "Welcome to SL Studio" (SL styled like logo). No CTA buttons in hero.
- **HeroWave** — shared component `src/app/components/common/HeroWave.jsx` (56 bars, organic heights, 12s calm animation via `.hero-wave` CSS). Used on: Home (full width), Mixing & Mastering / Arrangement (wrapped in `max-w-2xl`), Blog listing (wrapped in `max-w-xl`)
- **Mixing & Mastering / Arrangement:** hero grid at `md:` breakpoint, photo `md:aspect-[4/3]`, trust-strip `grid-cols-3` pinned to bottom via `md:justify-between`. M&M uses inner `gap-10`
- **Contact:** `items-stretch` + `md:justify-between` on right column — columns' tops/bottoms align exactly
- Height-matching pattern used everywhere: grid `items-stretch` + `md:justify-between` on the shorter column

### Blog typography (template-level, commit 60ef6c7)
- `.blog-prose` in globals.css: `font-size: 18px; line-height: 1.7; color: rgba(255,255,255,0.8)`
- `.blog-prose > div.gap-4 { gap: 1.25rem }` — paragraph spacing
- Applied via marker class on each article's root text wrapper — new articles inherit automatically (copy an existing article's wrapper convention)

### Article side rails — `SectionIndicator` (c045443 → 15d2e45)
- `src/app/components/blog/SectionIndicator.jsx` — TWO sticky rails in the article margins, visible **≥1280px** (was 1400px; lowered to cover common 1280–1366px laptops):
  - **Left rail:** text TOC (section labels), active item highlighted gold with a gold left-border. Width 200px, `left: max(20px, calc((100vw-768px)/2 - 240px))` — the `max()` clamp keeps it on-screen at the tightest width.
  - **Right rail:** dot-per-section nav + a vertical **reading-progress line** (grey track, gold fill to the centre of the active dot = `((activeIndex+0.5)/total)*100%`). Hover labels open RIGHTWARD into the empty margin (not over the text), clamped so they never run off-screen.
- Both rails anchored to the edges of the 768px (`max-w-3xl`) article column, not the viewport.
- Self-contained: scans `.blog-prose h2`, auto-slugifies ids (document-wide collision check, falls back to `-heading` suffix), IntersectionObserver active state (band `-20% / -70%`), scrollMarginTop 80px.
- Mounted once in `src/app/blog/layout.js` (shared layout persists across /blog/* navigations!) — **effect MUST be keyed on `usePathname()`**, empty deps = stale rails bug.
- The 4 Suno articles have their own in-body `<TableOfContents />` card — it's wrapped in `[@media(min-width:1280px)]:hidden` so the left rail replaces it on wide screens and it reappears below 1280px. One TOC at every width, never two.

### Blog listing page — `BlogClient.js` (0fd787e → 15d2e45)
- `"use client"` + `page.js` wraps it in `<Suspense>` (required for useSearchParams). All filter state lives in URL params.
- **Search** with a clear (×) button (native webkit search-cancel suppressed to avoid a double control).
- **Language filter** = compact segmented control (one bordered container, active segment filled gold) — labels All/EN/RU, driven by `lang` field in posts.js (only the 2 RU Suno posts have `lang: "ru"`).
- **Category filter** + **results counter** ("N articles" / "N articles found for <query>", `aria-live`).
- Page 1: 1 featured (full-width) + 6 grid cards = `FIRST_PAGE_COUNT 7`; pages 2+: `PER_PAGE 6`. totalPages formula accounts for the asymmetry.
- `PostCard.jsx` — featured & default variants; `NumberBtn.jsx` + chevron prev/next pagination.
- v0's `safeQuery` db.js hack was deliberately NOT merged (sandbox-only workaround, would swallow real DB errors).

### Suno articles typography unification (adbf1b4 → 15d2e45)
- The 4 "heavy" Suno articles (suno-guide-2026, suno-guide-2026-ru, suno-studio-guide-2026, suno-studio-guide-en-2026) had too many visual card styles → tiring reading rhythm. Unified:
  - Card body text **14px → 16px**, opacity /50–/60 → **/65** (labels/axis legends stay 12px; mono code, tag chips, section-number badges stay small on purpose).
  - Palette collapsed: green comparison halves → neutral; gold tints unified to one value.
  - **All BackToTop buttons removed** (~45 total) — the rails + progress line cover that now.
- Reading typography itself (`.blog-prose` 18px/1.7/0.8) confirmed as a real improvement — left as is.

### ScrollToTop (bdbe6e8)
- `src/app/components/common/ScrollToTop.jsx` in root layout: instant scrollTo(0,0) on pathname change
- Reason: global `scroll-behavior: smooth` on `html` made Next's route-change scroll reset animate and land short of top. Anchor scrolling stays smooth.

### Local preview
- `.claude/launch.json` configured for preview tools, port 3050 (3000 is often the user's own dev server — don't kill it)
- Verification workflow: `npm run build` → preview numeric checks (getBoundingClientRect; screenshots are flaky) → commit+push

### Still open (operational, non-code)
- Left-margin decoration for the blog sidebar — still to design.
- Google Business Profile: re-verification video needed (show a handwritten "SL Studio" note to camera).
- Mark GA4 `form_submit` as a key conversion event.
- Further simplify the visual rhythm of the Suno articles if still too busy.

---

## PROMOTION

- **YouTube:** slstudio.pro in channel description + all video descriptions (@SLStudio_Guitar)
- **Facebook:** Personal profile updated (role: Arrangement, mixing, mastering / company: SL Studio page). Business page created: "SL Studio" category Musician/Group
- **Instagram:** slstudio.pro in bio (@lazarev_serhii_sl)
- **ImprovMX:** Email forwarding `serhii@slstudio.pro` → `dneprorudniy777@gmail.com` — active

---

## STANDING RULES FOR CLAUDE

- **All communication with Serhii in Russian only** — no Ukrainian, no English, no Polish
- Translate any non-Russian text within responses
- For software instructions: specify exact location first (panel, corner, path), then action
- No timestamps at beginning of responses
- Dell XPS 15 9500 = primary music/production machine
- MSI Katana 15 = gaming/experiments only
- When giving file changes: always state full path first
- Do not add `"use client"` to Server Components that do DB queries
- Always use `{ icon: Icon }` destructuring pattern for Lucide icons in maps
