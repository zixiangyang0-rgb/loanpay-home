// home interiors V2 structural tests — MaterialWorkshop interior integration.
// Own path only: loanpay-home/tests/material-interiors.test.mjs
// Reads loanpay-home sources read-only. Machine fields only, no prose pins.
// Covers: (S1 happy) 27 interiors opt into the shared material/sans/stone
// reading scope via ShopArticle (explicit per-route import, distinct from
// guides serif hooks); (S2 edge) tables sit in a labeled, focusable,
// locally-scrolling wrap with a non-clipping cue; (S3 adjacent) copy,
// financial bytes, links, canonicals, consent/ads, safety truth preserved.
// Run: node --test tests/material-interiors.test.mjs
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (rel) => readFileSync(join(root, rel), "utf8");

const INTERIORS = [
  "painting-room-guide", "caulking-guide", "drywall-repair-guide",
  "flooring-types-guide", "tile-backsplash-guide", "renter-friendly-decorating",
  "power-drill-basics", "hanging-shelves-guide", "furniture-assembly-tips",
  "fix-leaky-faucet", "unclog-drain-guide", "outlet-replacement-safety-guide",
  "smoke-detector-guide", "hvac-filter-guide", "water-heater-maintenance",
  "smart-home-starter-guide", "gutter-cleaning-guide", "weatherproofing-windows-doors",
  "lawn-care-basics", "pest-prevention-basics", "spring-home-maintenance-checklist",
  "fall-home-maintenance-checklist", "moving-house-checklist",
  "how-much-does-it-cost-to-move-house", "home-maintenance-cost-calculator",
  "closet-organization-guide", "garage-organization-guide",
];

const hrefsOf = (src) =>
  new Set(
    [...src.matchAll(/href\s*:\s*"([^"]+)"|href\s*=\s*"([^"]+)"|href\s*=\s*\{\s*['"]([^'"]+)['"]\s*\}/g)].map(
      (m) => m[1] ?? m[2] ?? m[3],
    ),
  );

describe("S1 happy — 27 interiors opt into MaterialWorkshop reading scope", () => {
  it("Given 27 interior routes When listed Then all 27 page.tsx exist", () => {
    assert.equal(INTERIORS.length, 27);
    for (const slug of INTERIORS) {
      assert.ok(existsSync(join(root, "app", slug, "page.tsx")), `missing ${slug}`);
    }
  });
  it("Given 27 interiors When read Then each explicitly renders shared ShopArticle", () => {
    for (const slug of INTERIORS) {
      const src = read(`app/${slug}/page.tsx`);
      assert.ok(src.includes('from "@/components/ShopArticle"'), `${slug}: missing ShopArticle import`);
      assert.ok(src.includes("<ShopArticle"), `${slug}: missing ShopArticle usage`);
    }
  });
  it("Given ShopArticle When read Then interior shell carries explicit workshop reading scope", () => {
    const src = read("components/ShopArticle.tsx");
    assert.ok(src.includes("mw-reading"), "missing mw-reading scope hook");
    assert.ok(src.includes('data-workshop="material"'), "missing data-workshop material opt-in");
    assert.ok(src.includes("article-shell"), "article-shell scope target lost");
  });
  it("Given ShopArticle When read Then no guides serif or universal-template hooks leak", () => {
    const src = read("components/ShopArticle.tsx");
    assert.ok(!src.includes("g-article-"), "guides serif hook leaked");
    assert.ok(!src.includes("Palatino"), "guides serif leaked");
    assert.ok(!src.includes("Georgia,") || src.includes("mw-reading"), "serif must stay inside workshop scope only");
  });
  it("Given ShopArticle When read Then toy kicker/disclaimer inline colors are workshop-scoped", () => {
    const src = read("components/ShopArticle.tsx");
    assert.ok(!src.includes("#b33c00"), "toy kicker #b33c00 remains inline");
    assert.ok(!src.includes("#ffb000"), "toy disclaimer #ffb000 remains inline");
    assert.ok(src.includes("mw-kicker"), "missing mw-kicker workshop class");
  });
});

describe("S2 edge — labeled focusable local table scroll without document clipping", () => {
  it("Given interiors with tables When counted Then every route carries at least one table", () => {
    let routes = 0;
    for (const slug of INTERIORS) {
      const count = (read(`app/${slug}/page.tsx`).match(/table:\s*\{/g) || []).length;
      assert.ok(count >= 1, `${slug}: expected >=1 table prop`);
      routes += 1;
    }
    assert.equal(routes, 27);
  });
  it("Given DataTable When read Then wrap is labeled and keyboard-focusable", () => {
    const src = read("components/ShopArticle.tsx");
    assert.ok(src.includes("data-table-wrap"), "missing data-table-wrap");
    assert.ok(/tabIndex\s*=\s*\{0\}/.test(src), "wrap missing tabIndex={0}");
    assert.ok(src.includes('role="region"'), "wrap missing role=region");
    assert.ok(src.includes("aria-label"), "wrap missing aria-label");
  });
  it("Given globals.css When read Then wrap scrolls locally with cue, no document bleed", () => {
    const css = read("app/globals.css");
    const wrapIdx = css.indexOf(".data-table-wrap");
    assert.ok(wrapIdx >= 0, "missing .data-table-wrap");
    const block = css.slice(wrapIdx, wrapIdx + 600);
    assert.ok(block.includes("overflow-x"), "wrap missing overflow-x");
    assert.ok(block.includes("max-width"), "wrap missing max-width containment");
    assert.ok(css.includes(".mw-table-scroll::after"), "missing scroll cue hook");
    assert.ok(css.includes(":focus-visible"), "missing focus-visible guard");
    assert.ok(!css.includes("100vw"), "100vw risks document clipping");
  });
});

describe("S3 adjacent — copy/financial bytes/links/canonical/consent preserved", () => {
  it("Given calculator When read Then 1% and square-foot bytes preserved", () => {
    const src = read("app/home-maintenance-cost-calculator/page.tsx");
    assert.ok(src.includes("1% rule"), "1% rule copy lost");
    assert.ok(src.includes("$1 to $2 per square foot"), "square-foot rule copy lost");
    assert.ok(src.includes("$350–$700 / yr"), "annualized roof share lost");
    assert.ok(src.includes("$1,200–$2,500"), "water heater cost band lost");
    assert.ok(src.includes('canonical: "https://home.loanpaylogic.com/home-maintenance-cost-calculator"'));
  });
  it("Given interiors When read Then canonicals, schema, outbound and internal links intact", () => {
    for (const slug of INTERIORS) {
      const src = read(`app/${slug}/page.tsx`);
      const m = src.match(/canonical:\s*"([^"]+)"/);
      assert.ok(m, `${slug}: canonical missing`);
      assert.equal(m[1], `https://home.loanpaylogic.com/${slug}`, slug);
      assert.ok(src.includes("faqJsonLd"), `${slug}: schema helper lost`);
      assert.ok(src.includes("outboundLinks={"), `${slug}: outboundLinks lost`);
      assert.ok(src.includes("internalLinks={"), `${slug}: internalLinks lost`);
      assert.ok(hrefsOf(src).size >= 3, `${slug}: href set collapsed`);
    }
  });
  it("Given layout When read Then ads, nav, footer and consent-neutral shell preserved", () => {
    const src = read("app/layout.tsx");
    assert.ok(src.includes("ca-pub-4906207495792820"), "AdSense account lost");
    for (const slug of ["/painting-room-guide", "/power-drill-basics", "/fix-leaky-faucet", "/outlet-replacement-safety-guide", "/spring-home-maintenance-checklist", "/smart-home-starter-guide"]) {
      assert.ok(hrefsOf(src).has(slug), `missing nav ${slug}`);
    }
    for (const slug of ["/about", "/contact", "/privacy-policy", "/terms", "/disclaimer"]) {
      assert.ok(hrefsOf(src).has(slug), `missing footer ${slug}`);
    }
    assert.ok(src.includes('canonical: "https://home.loanpaylogic.com"'));
    assert.ok(src.includes("OrgJsonLd"), "OrgJsonLd lost");
  });
  it("Given safety callouts When read Then fall/outlet keep safety, spring gap still documented", () => {
    assert.ok(read("app/fall-home-maintenance-checklist/page.tsx").includes("safety="));
    assert.ok(read("app/outlet-replacement-safety-guide/page.tsx").includes("safety="));
    assert.ok(!read("app/spring-home-maintenance-checklist/page.tsx").includes("safety="));
    assert.ok(read("components/ShopArticle.tsx").includes('role="note"'));
  });
  it("Given new scope When scanned Then no client islands, any, or deps invented", () => {
    const src = read("components/ShopArticle.tsx");
    assert.ok(!src.includes('"use client"'), "client island invented");
    assert.ok(!src.includes("useState"), "state invented");
    assert.ok(!/:\s*any\b/.test(src), "any leaked");
    assert.ok(!src.includes("unsplash") && !src.includes("pexels.com/photo"), "unverified photo host leaked");
  });
});
