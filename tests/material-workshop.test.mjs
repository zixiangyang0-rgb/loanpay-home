import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (rel) => readFileSync(join(root, rel), "utf8");
const hrefsOf = (src) =>
  new Set(
    [...src.matchAll(/href\s*:\s*"([^"]+)"|href\s*=\s*"([^"]+)"|href\s*=\s*\{\s*['"]([^'"]+)['"]\s*\}/g)].map(
      (m) => m[1] ?? m[2] ?? m[3],
    ),
  );

const EXPECTED_27 = [
  "/painting-room-guide", "/caulking-guide", "/drywall-repair-guide",
  "/flooring-types-guide", "/tile-backsplash-guide", "/renter-friendly-decorating",
  "/power-drill-basics", "/hanging-shelves-guide", "/furniture-assembly-tips",
  "/fix-leaky-faucet", "/unclog-drain-guide", "/outlet-replacement-safety-guide",
  "/smoke-detector-guide", "/hvac-filter-guide", "/water-heater-maintenance",
  "/smart-home-starter-guide", "/gutter-cleaning-guide", "/weatherproofing-windows-doors",
  "/lawn-care-basics", "/pest-prevention-basics", "/spring-home-maintenance-checklist",
  "/fall-home-maintenance-checklist", "/moving-house-checklist",
  "/how-much-does-it-cost-to-move-house", "/home-maintenance-cost-calculator",
  "/closet-organization-guide", "/garage-organization-guide",
];

describe("MaterialWorkshop characterization: 33 routes preserved", () => {
  it("Given app dirs When listed Then 32 route dirs + root = 33 routes", () => {
    const dirs = readdirSync(join(root, "app"), { withFileTypes: true })
      .filter((d) => d.isDirectory() && d.name !== "components")
      .map((d) => d.name);
    assert.equal(dirs.length, 32);
    for (const slug of EXPECTED_27) {
      assert.ok(dirs.includes(slug.replace(/^\//, "")), `missing route dir ${slug}`);
    }
    for (const slug of ["/about", "/contact", "/privacy-policy", "/terms", "/disclaimer"]) {
      assert.ok(dirs.includes(slug.replace(/^\//, "")), `missing utility dir ${slug}`);
    }
  });
  it("Given sitemap When parsed Then 33 entries with BASE + 32 slugs", () => {
    const src = read("app/sitemap.ts");
    assert.ok(src.includes('BASE = "https://home.loanpaylogic.com"'));
    assert.ok(src.includes('"/home-maintenance-cost-calculator"'));
    const routes = [...src.matchAll(/"(\/[^"]*)"/g)].map((m) => m[1]);
    for (const slug of EXPECTED_27) assert.ok(routes.includes(slug), `sitemap missing ${slug}`);
  });
});

describe("MaterialWorkshop characterization: 27 specimens as real index", () => {
  it("Given home page When read Then all 27 guide hrefs present (no swatch substitution)", () => {
    const hrefs = hrefsOf(read("app/page.tsx"));
    assert.equal([...hrefs].filter((h) => EXPECTED_27.includes(h)).length, 27);
    for (const slug of EXPECTED_27) assert.ok(hrefs.has(slug), `missing home specimen ${slug}`);
  });
  it("Given home page When read Then specimen templates render 27 cards across 6 bays", () => {
    const src = read("app/page.tsx");
    assert.ok(src.includes("data-specimen-bay={bay.tag}"));
    assert.ok(src.includes("data-specimen={c.href"));
    const hrefs = hrefsOf(src);
    assert.equal([...hrefs].filter((h) => EXPECTED_27.includes(h)).length, 27);
    assert.equal((src.match(/tag: "Bay 0/g) ?? []).length, 6);
    assert.ok(src.includes('role="list"'));
  });
  it("Given layout nav When read Then 6 shared destinations preserved", () => {
    const hrefs = hrefsOf(read("app/layout.tsx"));
    for (const slug of ["/painting-room-guide", "/power-drill-basics", "/fix-leaky-faucet", "/outlet-replacement-safety-guide", "/spring-home-maintenance-checklist", "/smart-home-starter-guide"]) {
      assert.ok(hrefs.has(slug), `missing nav ${slug}`);
    }
  });
});

describe("MaterialWorkshop characterization: canonical/robots/dates untouched", () => {
  it("Given pages When read Then canonicals byte-expected, no date stamp change", () => {
    assert.ok(read("app/layout.tsx").includes('canonical: "https://home.loanpaylogic.com"'));
    assert.ok(read("app/page.tsx").includes('canonical: "https://home.loanpaylogic.com"'));
    assert.ok(read("app/spring-home-maintenance-checklist/page.tsx").includes("canonical: \"https://home.loanpaylogic.com/spring-home-maintenance-checklist\""));
    assert.ok(read("app/home-maintenance-cost-calculator/page.tsx").includes("canonical: \"https://home.loanpaylogic.com/home-maintenance-cost-calculator\""));
    assert.ok(read("app/sitemap.ts").includes('new Date("2026-10-01")'));
  });
  it("Given robots When read Then allow-all + sitemap preserved", () => {
    const src = read("public/robots.txt");
    assert.ok(src.includes("Allow: /"));
    assert.ok(src.includes("Sitemap: https://home.loanpaylogic.com/sitemap.xml"));
  });
});

describe("MaterialWorkshop characterization: safety callouts preserved (gap documented)", () => {
  it("Given fall/outlet When read Then safety= present; spring has none (known gap, not edited here)", () => {
    assert.ok(read("app/fall-home-maintenance-checklist/page.tsx").includes("safety="));
    assert.ok(read("app/outlet-replacement-safety-guide/page.tsx").includes("safety="));
    assert.ok(!read("app/spring-home-maintenance-checklist/page.tsx").includes("safety="));
    assert.ok(read("components/ShopArticle.tsx").includes('role="note"'));
  });
  it("Given ShopArticle When read Then warn-box + official-box + data-table semantics intact", () => {
    const src = read("components/ShopArticle.tsx");
    assert.ok(src.includes("warn-box") && src.includes("official-box") && src.includes("DataTable"));
  });
});

describe("MaterialWorkshop UI semantics: warm stone, figure, a11y", () => {
  it("Given globals.css When read Then warm-stone tokens present, toy system absent", () => {
    const src = read("app/globals.css");
    for (const t of ["#f5efe3", "#fffdf8", "#dccfb4", "#2e2a24", "#8a6d3b"]) {
      assert.ok(src.toLowerCase().includes(t), `missing token ${t}`);
    }
    assert.ok(!src.includes("repeating-linear-gradient"));
    assert.ok(!src.includes("#ff6a00") && !src.includes("#FF6A00"));
    assert.ok(!src.includes("4px 4px 0 #000") && !src.includes("8px 8px 0 #000"));
    assert.ok(src.includes(":focus-visible") && src.includes("prefers-reduced-motion"));
    assert.ok(src.includes("tabular-nums"));
  });
  it("Given MaterialFigure When read Then local photo with dims + alt + CC credit, no any/deps", () => {
    const src = read("components/MaterialFigure.tsx");
    assert.ok(src.includes('"/photos/home.webp"'));
    assert.ok(src.includes("width") && src.includes("height") && src.includes("alt="));
    assert.ok(src.includes("Shixart1985") && src.includes("creativecommons.org/licenses/by/2.0"));
    assert.ok(!src.includes("any"));
    assert.ok(!src.includes("unsplash") && !src.includes("pexels.com/photo"));
  });
  it("Given public/photos When checked Then verified asset + record with dims/credit", () => {
    assert.ok(existsSync(join(root, "public/photos/home.webp")));
    const rec = read("public/photos/RECORD.md");
    assert.ok(rec.includes("Shixart1985") && rec.includes("CC BY 2.0") && rec.includes("1200x801"));
  });
  it("Given new module When measured Then <=250 pure LOC", () => {
    const lines = read("components/MaterialFigure.tsx").split("\n");
    const pure = lines.filter((l) => l.trim() !== "" && !l.trim().startsWith("//")).length;
    assert.ok(pure <= 250, `MaterialFigure pure LOC ${pure} exceeds 250`);
  });
});
