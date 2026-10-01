# LoanPay Home — home.loanpaylogic.com

Hands-on DIY workshop manual: painting, tools, plumbing, electrical safety,
outdoor care, seasonal checklists, organizing, moving, and smart home basics.

## Stack

Next.js 15 + React 19 + Tailwind CSS 4 + TypeScript (strict).

## Develop

```bash
npm install --no-audit --no-fund
npm run dev
npx tsc --noEmit
npm run build
```

## Content rules

- 25 content pages, each 1800+ words, original prose, no placeholders.
- Every content page: single H1, question H2s, 4–6 FAQs with matching FAQPage JSON-LD,
  at least one comparison/data table, costs as region-dependent ranges,
  Updated October 2026 + sources line, outbound authority links, 3+ internal links.
- Electrical/gas/structural pages carry a licensed-pro safety notice + /disclaimer link.
- No Google ad units in markup; only the AdSense library script in `app/layout.tsx`.
- No new npm dependencies; no external fonts or images.
