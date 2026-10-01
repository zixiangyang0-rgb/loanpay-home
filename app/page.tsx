import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LoanPay Home: DIY Repair & Upkeep Guides",
  description:
    "LoanPay Home: 25 hands-on DIY guides for painting, tools, plumbing, electrical safety, outdoor care, and seasonal upkeep. Pick a bay and start today!",
  alternates: { canonical: "https://home.loanpaylogic.com" },
  openGraph: {
    type: "website",
    url: "https://home.loanpaylogic.com",
    siteName: "LoanPay Home",
    title: "LoanPay Home: DIY Repair & Upkeep Guides",
    description:
      "25 hands-on DIY guides for painting, tools, plumbing, electrical safety, outdoor care, and seasonal upkeep.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LoanPay Home: DIY Repair & Upkeep Guides",
    description:
      "25 hands-on DIY guides for painting, tools, plumbing, electrical safety, outdoor care, and seasonal upkeep.",
  },
};

type Card = { href: string; title: string; blurb: string };
type Bay = { tag: string; name: string; intro: string; cards: Card[] };

const BAYS: Bay[] = [
  {
    tag: "Bay 01",
    name: "Paint & Walls",
    intro:
      "Surface work that transforms rooms in a weekend: paint systems, drywall that disappears, tile that lines up, and floors chosen once and loved for decades.",
    cards: [
      { href: "/painting-room-guide", title: "Painting a Room Like a Pro", blurb: "Prep ratios, primer calls, sheens, and costs from $100 DIY for a 12x12 room." },
      { href: "/caulking-guide", title: "Caulking for Clean Beads", blurb: "Silicone versus acrylic, tip cuts, and one-pass tooling for tubs and trim." },
      { href: "/drywall-repair-guide", title: "Drywall Repair Without Seams", blurb: "Nail pops to full panels: three thin coats, raking-light sanding, texture match." },
      { href: "/flooring-types-guide", title: "Flooring Types Compared", blurb: "Hardwood, LVP, laminate, and tile on installed cost, water stance, and lifespan." },
      { href: "/tile-backsplash-guide", title: "Tile Backsplash Install", blurb: "Layout lines, thinset rhythm, outlet notches, and grout that stays clean." },
      { href: "/renter-friendly-decorating", title: "Renter Decorating Without Damage", blurb: "Removable color, no-drill art, and move-out reversal that recovers deposits." },
    ],
  },
  {
    tag: "Bay 02",
    name: "Tools",
    intro:
      "Core tool skills every later project assumes: drill control, anchors that hold, and flat-pack assembly that ends square and wobble-free.",
    cards: [
      { href: "/power-drill-basics", title: "Power Drill Basics", blurb: "Bits, clutch, speed, and pilot holes for clean holes and flush screws." },
      { href: "/hanging-shelves-guide", title: "Hanging Shelves That Stay Up", blurb: "Stud mapping, anchor ratings, and leveling for book-weight loads." },
      { href: "/furniture-assembly-tips", title: "Furniture Assembly Without the Fight", blurb: "Cam-lock mechanics, diagonal squaring, and anti-tip anchoring that saves lives." },
    ],
  },
  {
    tag: "Bay 03",
    name: "Plumbing & Electrical",
    intro:
      "Water and power done in strict safe order: fixture fixes you own, protection devices you test, and clear stop rules for licensed pros.",
    cards: [
      { href: "/fix-leaky-faucet", title: "Fix a Leaky Faucet in One Hour", blurb: "Washers, seats, and cartridges for $10 to $50 with pressure-tested joints." },
      { href: "/unclog-drain-guide", title: "Unclog a Drain Without Chemicals", blurb: "Plunger hydraulics, hair extraction, and scratch-free snaking under $40." },
      { href: "/outlet-replacement-safety-guide", title: "Replace an Outlet Safely", blurb: "Breaker-off ritual, GFCI LINE/LOAD discipline, and trip-tested proof." },
      { href: "/smoke-detector-guide", title: "Smoke Detectors Placed Right", blurb: "Room-by-room coverage, monthly tests, and ten-year retirement dates." },
      { href: "/hvac-filter-guide", title: "HVAC Filters Sized & Swapped", blurb: "MERV 8 to 11 picks, arrow discipline, and ten-minute changes that cut bills." },
      { href: "/water-heater-maintenance", title: "Water Heater Maintenance", blurb: "Yearly flushing, TPR tests, and 120 degrees for a 15-year tank." },
      { href: "/smart-home-starter-guide", title: "Smart Home Starter Guide", blurb: "One ecosystem, strong Wi-Fi, and a first room that proves automations." },
    ],
  },
  {
    tag: "Bay 04",
    name: "Outdoor",
    intro:
      "The shell and yard that protect everything inside: water thrown clear, drafts sealed, turf grown thick, and pests excluded chew-proof.",
    cards: [
      { href: "/gutter-cleaning-guide", title: "Gutter Cleaning Without the Fall", blurb: "Ladder discipline, outlet clearing, slope resets, and guard verdicts." },
      { href: "/weatherproofing-windows-doors", title: "Weatherproof Windows & Doors", blurb: "Caulk fixed joints, weatherstrip moving ones, and keep 10 to 20 percent of bills." },
      { href: "/lawn-care-basics", title: "Lawn Care for Thick Turf", blurb: "Mow high, water deep, feed by test, and overseed every fall." },
      { href: "/pest-prevention-basics", title: "Pest Prevention Through Exclusion", blurb: "Metal-mesh sealing, moisture removal, and baits that solve instead of scatter." },
    ],
  },
  {
    tag: "Bay 05",
    name: "Seasonal",
    intro:
      "Twice-yearly programs that catch damage at DIY prices: spring reconnaissance after winter, fall winterization before freeze, and moves run on timelines.",
    cards: [
      { href: "/spring-home-maintenance-checklist", title: "Spring Maintenance Checklist", blurb: "Roof-to-lawn damage patrol, AC commissioning, and pest exclusion timing." },
      { href: "/fall-home-maintenance-checklist", title: "Fall Maintenance Checklist", blurb: "Heat tuning, freeze-proofing, gutter clearing, and rodent sealing before cold." },
      { href: "/moving-house-checklist", title: "Moving House Without Chaos", blurb: "8-week timeline, binding quotes, room-labeled packing, and night-one setup." },
    ],
  },
  {
    tag: "Bay 06",
    name: "Organize & Store",
    intro:
      "Storage systems that double capacity in place: zoned closets, wall-hung garages, and resets measured in minutes instead of weekends.",
    cards: [
      { href: "/closet-organization-guide", title: "Closet Organization for Small Spaces", blurb: "Purge-first zoning, double rods into studs, and labeled bins that stay sorted." },
      { href: "/garage-organization-guide", title: "Garage Organization That Holds", blurb: "Activity zones, joist-rated overhead racks, and fuel safety that prevents fires." },
    ],
  },
];

export default function Page() {
  return (
    <>
      <div className="hero-bay">
        <span className="kicker">Workshop manual · 25 guides</span>
        <h1 className="shop-h1">
          Fix It Yourself, <span className="accent">Right the First Time</span>
        </h1>
        <p className="lede">
          LoanPay Home is a hands-on workshop manual for DIY home repair,
          upkeep, and organizing. Every guide lists real tools, walks numbered
          steps, compares options in tables, answers searched questions, and
          tells you honestly when to call a licensed pro. Pick your bay below
          and start with the job in front of you.
        </p>
        <p className="meta-line">Updated: October 2026 · Sources: editorial team, manufacturer manuals, U.S. agency guidance</p>
      </div>
      {BAYS.map((bay) => (
        <section key={bay.name} aria-label={bay.name}>
          <h2 className="section-title">
            <span>{bay.tag}</span>
            {bay.name}
          </h2>
          <p style={{ fontFamily: "Arial,sans-serif", color: "#b9ad9c", maxWidth: "72ch" }}>{bay.intro}</p>
          <div className="card-grid">
            {bay.cards.map((c) => (
              <Link key={c.href} href={c.href} className="work-card">
                <span className="card-tag">{bay.name}</span>
                <h3>{c.title}</h3>
                <p>{c.blurb}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
      <div className="article-shell">
        <h2>How should you use this workshop?</h2>
        <p>
          Start with the safety habit every bay shares: read the warning box,
          switch off power or water before touching systems, and stop at any
          step involving gas, panels, or structure you do not fully understand
          — our <Link href="/disclaimer">disclaimer</Link> explains the
          boundary. Beginners build confidence fastest in order:{" "}
          <Link href="/power-drill-basics">drill basics</Link>, then{" "}
          <Link href="/painting-room-guide">painting a room</Link>, then{" "}
          <Link href="/fix-leaky-faucet">a leaky faucet</Link>. Seasonal owners
          run the <Link href="/spring-home-maintenance-checklist">spring</Link>{" "}
          and <Link href="/fall-home-maintenance-checklist">fall</Link>{" "}
          checklists as bookends, and movers work the{" "}
          <Link href="/moving-house-checklist">8-week plan</Link>. Learn who
          writes and checks every procedure on our <Link href="/about">about
          page</Link>, reach the desk via <Link href="/contact">contact</Link>,
          and review the ground rules in the{" "}
          <Link href="/privacy-policy">privacy policy</Link> and{" "}
          <Link href="/terms">terms</Link>.
        </p>
      </div>
    </>
  );
}
