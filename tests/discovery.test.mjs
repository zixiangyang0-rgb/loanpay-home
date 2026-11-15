import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// Portable repo-relative reads: tests/discovery.test.mjs -> repo root.
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (rel) => readFileSync(join(root, rel), "utf8");

// Parse machine-consumed href fields/attributes only:
//   object form  href: "/slug"   (home BAYS cards, spring internalLinks prop)
const hrefsOf = (src) =>
  new Set(
    [...src.matchAll(
      /href\s*:\s*"([^"]+)"|href\s*=\s*"([^"]+)"|href\s*=\s*\{\s*['"]([^'"]+)['"]\s*\}/g,
    )].map((m) => m[1] ?? m[2] ?? m[3]),
  );

const home = () => read("app/page.tsx");
const spring = () => read("app/spring-home-maintenance-checklist/page.tsx");

// Seasonal bay slice: from '"Seasonal"' to the next bay ('"Organize').
function seasonalBay(src) {
  const start = src.indexOf('"Seasonal"');
  assert.ok(start !== -1, "Seasonal bay must exist");
  const end = src.indexOf('"Organize', start);
  return src.slice(start, end === -1 ? undefined : end);
}

// Spring internalLinks prop slice: from 'internalLinks={' to its closing ']}'.
function springInternalLinks(src) {
  const start = src.indexOf("internalLinks={");
  assert.ok(start !== -1, "spring internalLinks block must exist");
  const end = src.indexOf("]}", start);
  assert.ok(end !== -1, "spring internalLinks block must close");
  return src.slice(start, end);
}

describe("home Seasonal bay discovery cards", () => {
  it('Given home Seasonal bay When rendered Then links href "/how-much-does-it-cost-to-move-house"', () => {
    assert.ok(
      hrefsOf(seasonalBay(home())).has("/how-much-does-it-cost-to-move-house"),
      "missing Seasonal bay href /how-much-does-it-cost-to-move-house",
    );
  });
  it('Given home Seasonal bay When rendered Then links href "/home-maintenance-cost-calculator"', () => {
    assert.ok(
      hrefsOf(seasonalBay(home())).has("/home-maintenance-cost-calculator"),
      "missing Seasonal bay href /home-maintenance-cost-calculator",
    );
  });
});

describe("spring guide internalLinks context", () => {
  it('Given spring guide When read Then internalLinks context-links href "/home-maintenance-cost-calculator"', () => {
    assert.ok(
      hrefsOf(springInternalLinks(spring())).has("/home-maintenance-cost-calculator"),
      "missing spring internalLinks href /home-maintenance-cost-calculator",
    );
  });
});

describe("preserved targets (no regression)", () => {
  for (const slug of [
    "/spring-home-maintenance-checklist",
    "/fall-home-maintenance-checklist",
    "/moving-house-checklist",
  ]) {
    it(`Given home When rendered Then preserves href "${slug}"`, () => {
      assert.ok(hrefsOf(home()).has(slug), `missing preserved home target ${slug}`);
    });
  }
  for (const slug of [
    "/fall-home-maintenance-checklist",
    "/gutter-cleaning-guide",
    "/lawn-care-basics",
    "/hvac-filter-guide",
  ]) {
    it(`Given spring guide When read Then preserves internalLinks href "${slug}"`, () => {
      assert.ok(
        hrefsOf(springInternalLinks(spring())).has(slug),
        `missing preserved spring target ${slug}`,
      );
    });
  }
});
