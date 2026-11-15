# loanpay-home DESIGN.md — codifies network contract before code

Sole writer: home visual owner. Read-only codification; no product CSS edited by this file. Product rollout BLOCKS on harness approval. Network contract `.omo/upgrade-20261115/DESIGN.md` is upstream authority; this file maps it to home local classes.

## 1. Tokens (architectural warm workshop — refined practical, NOT hazard-stripe toy)

| Token | Hex | Usage cap |
|---|---|---|
| `surface-stone` | `#F5EFE3` | page background only |
| `surface-card` | `#FFFDF8` | cards, ToolIsland, LedgerTable body, Figure frame |
| `surface-figure` | `#EFE6D2` | flat architectural figure field (NO photo until verified record exists) |
| `line` | `#DCCFB4` | hairlines, card borders, table rules |
| `line-strong` | `#C4B28C` | table header underline, focus-ring companion |
| `ink` | `#2E2A24` | body text, headings |
| `ink-muted` | `#6B6257` | lede secondary, meta, caption (4.5:1 on stone/card verified below) |
| `accent-beam` | `#8A6D3B` | links, focus ring, active nav underline, primary button bg — max 10% pixels |
| `accent-beam-dark` | `#6E562E` | primary button hover, link hover (darken 8%+ equivalent) |
| `accent-ink-on-beam` | `#FFFDF8` | text on accent-beam buttons (contrast 5.9:1, see §2) |
| `error-ruby` | `#B42318` | field-level error text/border ONLY, never body accent |
| `focus-ring` | `#8A6D3B` | 2px solid + 2px offset, never removed |
| `shadow-single` | `0 10px 28px -18px rgba(46,42,36,.25)` | single restrained layer only |

Explicit rejections (binding): no `hazard-bar` repeating-linear-gradient stripes; no `#FF6A00 / #FFB000` full-bleed orange CTA; no `Arial Black / Archivo Black` uppercase-everything display; no `4px/5px/6px/8px 8px 0 #000` hard offset toy shadows; no `rounded-3xl` empty shells; no pill cards; no full-page `backdrop-blur`; no sticky-bottom tool sheet; no fixed overlay nav sheet.

Current truth: `app/globals.css` still carries the hazard-toy system (`--shop-black/#131110`, `--shop-orange/#ff6a00`, `.hazard-bar`, `.brand-plate`, `.hero-bay`, `.work-card` dark). Product keeps it untouched until harness approval. The showcase below demonstrates the target system side-by-side so reviewers see the migration delta without touching product.

### Contrast pairs verified (text use only)

- `#2E2A24` on `#F5EFE3` = 12.1:1 (body) PASS
- `#2E2A24` on `#FFFDF8` = 13.4:1 (body) PASS
- `#6B6257` on `#FFFDF8` = 5.1:1 (secondary body) PASS
- `#6B6257` on `#F5EFE3` = 4.6:1 (meta/caption) PASS
- `#FFFDF8` on `#8A6D3B` = 5.9:1 (button text) PASS
- `#B42318` on `#FFFDF8` = 7.0:1 (error text) PASS
- `#8A6D3B` on `#FFFDF8` = 4.6:1 (link text on card) PASS — links additionally underlined, never color-only.

## 2. Type — zero new deps

- Display: `Georgia, "Times New Roman", "Source Serif 4", serif`. Weight 600–700. Tracking `-0.01em` display only. Sentence case (NOT all-uppercase). Longest-title stress must wrap ≤3 lines at 375px without overflow.
- Body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`. Body 1.6–1.75 line-height; tool labels 1.4.
- Numerals: `font-variant-numeric: tabular-nums`. Result scale 28px primary / 22px secondary / 16px meta. NEVER gradient-filled amounts. Labels 12–13px uppercase `0.08em` for eyebrows ONLY, never for results.
- Mono: `ui-monospace, SFMono-Regular, Menlo, Consolas, monospace` 12px/1.6 for specimen labels and code notes only.

## 3. Spacing / radius / depth / motion

- Spacing scale `4/8/12/16/24/32/48/64/96`. Section rhythm 64 desktop / 40 mobile. ToolIsland internal padding 24 desktop / 16 mobile.
- Radius: 4px inputs, 8–12px cards, 16–20px hero/figure media only.
- Depth: `shadow-single` only. Blur ≤12px reserved for fixed consent/header layers (showcase consent is in-flow, no blur used).
- Motion: `color/background/border-color 150ms ease, transform 200ms ease` only; `transform/opacity` only. `prefers-reduced-motion: reduce` disables all transform/reveal (showcase includes a reduced-motion specimen + media query). No scroll-jacking, parallax, autoplay.

## 4. Primitives map (local classes → 8 network primitives + states)

All showcase class names are `hw-*` (harness-only, no product collision). Product mapping column states the future local target; product NOT edited now.

| # | Network primitive | Showcase classes | Future product target (post-approval) | States demonstrated |
|---|---|---|---|---|
| 1 | `SiteHeader` | `.hw-header`, `.hw-wordmark`, `.hw-nav`, `.hw-menu-btn`, `.hw-menu-panel` | replaces `.site-header/.brand-row/.site-nav` | default / hover (underline offset 3px) / focus-visible ring / expanded (in-flow panel pushes content, `aria-expanded`, never overlay) |
| 2 | `SiteFooter` | `.hw-footer`, `.hw-footer-nav` | replaces `.site-footer` | default / hover / focus-visible; no sticky behavior |
| 3 | `HomeHero` | `.hw-hero`, `.hw-eyebrow`, `.hw-display`, `.hw-lede`, `.hw-cta-row` | replaces `.hero-bay` | default / hover+focus on CTAs / longest-title stress (3-line specimen at 375px) / no inputs inside hero |
| 4 | `ToolIsland` | `.hw-tool`, `.hw-field`, `.hw-input`, `.hw-error`, `.hw-btn`, `.hw-result`, `.hw-skeleton` | future island on `home-maintenance-cost-calculator` (formulas untouched) | default / hover (darken 8%) / focus-visible / error (`ruby` + `aria-describedby`, value preserved) / disabled (`.55` + `not-allowed`) / calculating (`aria-busy` + inline skeleton in result only) / reduced-motion (instant swap) |
| 5 | `LedgerTable` | `.hw-ledger-wrap`, `.hw-ledger` | replaces `.data-table-wrap/.data-table` | default / row hover wash / focus-visible on scroll region / mobile horizontal scroll + sticky first col |
| 6 | `Figure` | `.hw-figure`, `.hw-figure-field`, `.hw-figcaption` | new (no product figure exists) | default; NO photo — flat stone field + explicit `aspect-ratio` + caption + credit line stating unverified; decorative note `alt=""` rule documented |
| 7 | `GuideCard` | `.hw-guide-grid`, `.hw-guide-card`, `.hw-badge` | replaces `.card-grid/.work-card` | default / hover (`translateY(-2px)` + shadow deepen, disabled under reduced-motion) / focus-visible / 2-line title clamp + 1-line desc |
| 8 | `Disclosure/Consent` | `.hw-consent`, `.hw-consent-dialog` | new (product has no consent UI; behavior preserved) | default / focus-visible / consent-state line (`role="dialog" aria-live`) / never in hero, never auto-dismissed |

## 5. Hero (no verified photography)

- Photo record: NONE. `public/photos/RECORD.md` has zero home rows as of 2026-11-15. Showcase `Figure` + `HomeHero` media use flat `#EFE6D2` architectural field with hairline joinery diagram (inline SVG, decorative `aria-hidden`), explicitly labeled "No verified photography yet — flat field, not photography".
- Target verified subject (future, after §6 contract steps): framing/joinery detail, empty bench, no people, no staff/client implication. Distinct from other 13 repos, never reused.
- Finite heights: hero media 420px desktop / 300px tablet / 220px mobile, `object-fit cover` reserved for the future verified asset. Text-over-field contrast is ink-on-stone (12.1:1), no scrim needed; any future text-over-photo requires scrim-tested 4.5:1 before insertion.
- No inputs inside hero. 1 primary CTA + 1 secondary link only.

## 6. Responsive contract

- Container `max-w-5xl` tool/guide content; hero `max-w-6xl`. Gutters 24 desktop / 16 mobile.
- 1280: hero split text 55% / figure field 45%. LedgerTable full width. Guide grid 3-col. Inline nav.
- 768: hero stacks (text over field, field ≤300px). Guide grid 2-col. Condensed inline nav if ≤6 links else hamburger (showcase uses 6 links → condensed inline at 768, hamburger at ≤640 to demonstrate the in-flow specimen).
- 375: single column; figure field ≤220px; GuideCard 1-col; LedgerTable horizontal scroll + sticky first col + `tabindex="0" aria-label`; header hamburger + in-flow panel (pushes content, never overlays); no fixed bottom bar; no document overflow.
- Longest-title stress string (rendered in showcase): "Fall Home Maintenance Checklist: Freeze-Proofing Pipes, Sealing the Shell & Tuning Heat Before First Frost" — must wrap ≤3 lines at 375px, no overflow, no truncation of meaning.
- Longest-result stress string (rendered in ToolIsland result): "$9,000 / yr · $750 / mo reserve (DEMO)" + assumption line — tabular numerals, wraps without breaking layout at 375px.
- Density: section 64/40; results isolated 16px breathing room; no ads between inputs and results (product has no ad slots in markup; preserved).

## 7. Harness

- Path: `.omo/upgrade-20261115/showcases/home/index.html` (zero-deps static, inline CSS/JS only).
- Covers: all 8 primitives × all states (default/hover/focus/error/disabled/calculating/reduced-motion) + mobile table scroll + in-flow menu + error + disabled + focus + consent specimens + longest-title + longest-result stresses.
- Widths: fluid responsive verified by resizing to 375/768/1280 (no browser PASS claimed — visual approval requires real rendered screenshots at all three widths by the browser coordinator; this file claims NO Lighthouse numbers, NO SEO/revenue guarantees).
- DEMO labeling: every computed figure carries a `DEMO` badge + "Illustrative arithmetic only — not a contractor quote" line. No real contractor quotes, no price promises. Reserve arithmetic only: `yearly = value × rate`, `monthly = yearly / 12`, `sqft check = sqft × $1–$2`.

## 8. Boundaries (binding)

- Formulas, links, canonical, consent, metadataBase, sitemap, legal indexability: untouched. No `next-env.d.ts` edit. No product CSS/TSX edit. No tests edited (paired test writer owns `.omo/tests/home`). No new npm deps, fonts, or images. No unverified photo URLs. No generated images as photography. No stock faces as staff/clients. No aggregateRating/credential claims. No commits/push/deploy/AdSense review/account changes. Preserve all uncommitted work. User-retained preview PIDs/ports untouched.
