import type { Metadata } from "next";
import ShopArticle from "@/components/ShopArticle";
import { faqJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Moving House Checklist: 8-Week Plan & Costs",
  description:
    "Moving house checklist with an 8-week plan: purge early, pack by room, compare binding quotes, and land ready night one. Move calmly with this plan now!",
  alternates: { canonical: "https://home.loanpaylogic.com/moving-house-checklist" },
  openGraph: {
    type: "article",
    url: "https://home.loanpaylogic.com/moving-house-checklist",
    siteName: "LoanPay Home",
    title: "Moving House Checklist: 8-Week Plan & Costs",
    description:
      "Moving house checklist with an 8-week plan: purge early, pack by room, compare binding quotes, and land ready night one. Move calmly with this plan now!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moving House Checklist: 8-Week Plan & Costs",
    description:
      "Moving house checklist with an 8-week plan: purge early, pack by room, compare binding quotes, and land ready night one. Move calmly with this plan now!",
  },
};

const faqs = [
  {
    q: "How much does it cost to move house?",
    a: "Local moves cost $300 to $1,500 for DIY truck rental plus help, or $800 to $2,500 for full-service movers on a typical 2-bedroom home. Long-distance moves run $2,000 to $5,000-plus by weight and miles, region and season-dependent. Purging before quoting cuts volume charges directly, and mid-month mid-week dates run cheapest.",
  },
  {
    q: "When should I start packing to move?",
    a: "Start 6 to 8 weeks out with storage areas and off-season goods, pack room by room through weeks 4 to 2, and leave only daily essentials plus the first-night box for moving week. Label every box with room, contents, and priority so unloading self-directs. Last-minute marathon packing breaks items and backs.",
  },
  {
    q: "How do I choose a reliable moving company?",
    a: "Get three in-home or video estimates, verify USDOT licensing and insurance for interstate moves plus state credentials locally, read recent reviews for damage and price-hike patterns, and demand binding or not-to-exceed quotes listing all fees. Never pay large deposits upfront or hire quote-only-by-phone outfits. Photograph valuables and buy full-value protection for irreplaceables.",
  },
  {
    q: "What should movers not move?",
    a: "Movers refuse hazardous materials — paint, propane, gasoline, chemicals, fireworks — plus plants on long hauls, perishables, and high-value documents, jewelry, medications, and heirlooms you carry personally. Drain fuel from equipment, transport the first-night box and essentials yourself, and keep passports, deeds, and medical records in hand.",
  },
  {
    q: "What do I do on moving day itself?",
    a: "Walk movers through every room and the inventory, confirm the delivery address and payment terms, keep pathways clear and kids and pets secured elsewhere, photograph meter readings and empty rooms, and check the truck fully before it leaves. Tip 10 to 20 percent for good crews, then unpack beds, baths, and kitchen first at the new home.",
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)).replace(/</g, "\u003c") }} />
      <div className="hero-bay">
        <span className="kicker">Life Bay 01</span>
        <h1>Moving House <span className="accent">Without Chaos</span></h1>
        <p className="lede">
          Calm moves run on an 8-week timeline: purge early, pack by room,
          quote three movers, and land with beds, baths, and kitchen working
          night one.
        </p>
      </div>
      <ShopArticle
        kicker="Skill level: planner · 8-week timeline · $300–$5,000 by distance"
        intro={[
          "Moving house stresses because a hundred deadlines converge on one truck day, and the antidote is an 8-week checklist that converts the avalanche into weekly batches. Purging in week eight cuts everything downstream — fewer boxes, smaller truck, lower weight charges — while three mover quotes in week six lock fair pricing before peak-season premiums. Packing by room with labeled priority boxes through weeks four to two means unloading self-directs instead of stacking mystery cartons for months. Local DIY moves land at $300 to $1,500, local full-service at $800 to $2,500, and long-distance at $2,000 to $5,000-plus, all region- and season-dependent.",
          "This guide runs the full timeline: the purge that pays, mover vetting with licensing checks, packing systems that protect, address-change administration, moving-day command, and the first-week setup that makes the new house home. You will learn binding-quote math, the first-night box doctrine, and meter-reading evidence that ends deposit disputes. Pair it with our closet and garage organization guides for unpacking into zones instead of piles.",
        ]}
        sources="Sources: FMCSA mover guidance, USPS change-of-address process, 2026 U.S. cost averages"
        sections={[
          {
            h2: "What happens 8 to 6 weeks before moving?",
            paragraphs: [
              "Weeks eight to six decide cost and calm. Purge room by room into keep-donate-sell-trash — every item eliminated saves packing, hauling, and unpacking labor plus weight charges on long hauls. Start a moving binder with inventory photos, quotes, receipts, and the timeline; photograph valuables and document serial numbers for insurance. Research movers through FMCSA's Protect Your Move resources for interstate jobs, collecting three in-home or video estimates with binding or not-to-exceed terms.",
              "Lock the calendar early: choose mid-month, mid-week dates that run 20 to 30 percent cheaper than month-end weekends, reserve trucks or crews with written confirmation, and notify landlords, schools, and employers per lease and enrollment deadlines. Order supplies — small heavy-book boxes, large light-linen boxes, wardrobe bars, mattress bags, and ample tape — since box runs mid-pack waste whole evenings. Begin eating the freezer down and burning hobby-fuel stocks movers refuse.",
            ],
            checkHeading: "8-to-6-week checklist",
            bullets: [
              "Purge every room keep-donate-sell-trash; donations out, listings live",
              "Three binding mover quotes, USDOT and insurance verified, date reserved",
              "Moving binder started, valuables photographed, supplies ordered in bulk",
              "Lease, school, employer notices sent; freezer and fuel stocks drawn down",
            ],
          },
          {
            h2: "How do you pack room by room without breakage?",
            paragraphs: [
              "Packing protects through physics: heavy items in small boxes, light bulky goods in large ones, no box over 50 pounds, and void fill eliminating all movement. Wrap dishes vertically like records in paper with cellular dividers, double-box electronics in original foam where kept, bag hardware from disassembled furniture per piece per our furniture assembly evidence method, and seal liquids in zip bags standing upright. Label every box on two sides with destination room, contents summary, and priority — OPEN FIRST, NORMAL, STORAGE — so unloaders sort without interrogation.",
              "Stage the pack by weeks: storage and off-season goods first, books and decor next, then room-by-room through weeks three and two, leaving kitchens and dailies for final days. Photograph cord connections behind TVs and routers before unplugging. Keep hazardous materials, plants on long hauls, and irreplaceable documents out of the truck entirely — movers legally refuse hazmat and you personally carry passports, deeds, medications, jewelry, and the first-night box.",
            ],
          },
          {
            h2: "How do you hire movers and compare quotes?",
            paragraphs: [
              "Compare quotes on identical inventory: binding quotes fix the price for listed goods, not-to-exceed caps overages while allowing underages, and non-binding estimates invite moving-day inflation. Verify interstate movers' USDOT numbers and complaint histories through FMCSA, confirm state licensing locally, and read reviews for damage handling and final-price honesty rather than star counts. Full-value protection covers repair or replacement value for valuables; released-value coverage pays pennies per pound and suits only the risk-tolerant.",
              "Red flags end negotiations: large cash deposits, quote-by-phone-only without visual survey, blank documents to sign, and prices far below the pack. Confirm in writing the date window, crew size, truck size, included materials, stair and long-carry fees, storage terms, and claims process. Tipping 10 to 20 percent of the total rewards careful crews in cash per mover — budget it upfront rather than discovering it curbside.",
            ],
            table: {
              headers: ["Move type", "Typical cost", "Best for"],
              rows: [
                ["DIY truck local", "$300–$800", "Studios, flexible schedules"],
                ["DIY + hired help", "$500–$1,500", "2-bed, heavy furniture"],
                ["Full-service local", "$800–$2,500", "Families, tight timelines"],
                ["Long-distance", "$2,000–$5,000+", "Interstate, by weight + miles"],
              ],
            },
          },
          {
            h2: "Which address changes and records matter most?",
            paragraphs: [
              "Administration prevents the month of missing mail: file USPS change-of-address two weeks out, then directly update banks, cards, insurers, subscriptions, voter registration, DMV within state deadlines, doctors, pharmacies, and schools. Transfer or establish utilities with overlap — power and water live at both homes on moving day — and schedule internet installation early since technician windows lag. Photograph old-home meter readings and empty-room condition for deposit recovery, and new-home readings at key handoff.",
              "Medical and school continuity needs lead time: request records transfers, refill prescriptions to cover the gap, confirm new providers accept coverage, and enroll kids with transcripts before term starts. Update homeowner or renter insurance to the new address with correct coverage dates, and redirect deliveries and food subscriptions. Keep a two-week essentials overlap on critical medications and documents regardless of mover promises.",
            ],
          },
          {
            h2: "How do you settle into a new home the first month?",
            paragraphs: [
              "Settling prioritizes security and systems before style: change every exterior lock or rekey cylinders on day one since key copies circulate invisibly, test all detectors and replace decade-expired units per our smoke detector guide, and locate the main water shutoff, breaker panel, and gas valve with every adult practicing them. Photograph new-home meter readings at key handoff and file alongside the lease or deed — baseline evidence ends future billing disputes before they start.",
              "Unpack in zone order rather than box order: bedrooms and baths functional night one, kitchen basics by day three, then closets and garage per our organization guides so every item lands in its permanent home instead of a holding pile that fossilizes. Break down boxes daily to preserve momentum and walking space; flattened cardboard recycled weekly keeps rooms livable during the month-long process. Change HVAC filters immediately — previous owners' dust loads yours — and log the size for the subscription that automates the next change.",
              "Meet the house like a new colleague: walk the exterior grading after the first rain, test every window, faucet, and outlet in week one logging quirks for the seasonal checklists, and introduce yourself to neighbors who know the street's plumbers, water quirks, and HOA rhythms. Update emergency contacts, program the thermostat schedules to your routine, and file warranties with purchase dates. The first month's attention becomes the home file that makes every future project faster.",
            ],
          },
          {
            h2: "How do moving day and first week run smoothly?",
            paragraphs: [
              "Moving day commands through walkthroughs: guide the crew room by room with the inventory, confirm addresses and payment terms before loading, keep paths clear and pets and kids elsewhere, and check every closet, attic, and shed before the truck doors close. Photograph loaded conditions of furniture for claim evidence. At delivery, direct boxes by their room labels to exact spots — never a central mountain — and assemble beds first with sheets in the OPEN FIRST box.",
              "First-week setup prioritizes function over perfection: beds and baths night one, kitchen basics day two, then zones per our closet and garage guides rather than random unpacking. Change locks, test every detector per our smoke detector guide, locate the main water shutoff and breaker panel, and introduce the home with our spring or fall checklist season pass. Return rentals, file claims within deadlines for any damage, and review the mover honestly to guide the next family.",
            ],
            table: {
              headers: ["Phase", "Focus", "Key box"],
              rows: [
                ["Night one", "Beds, baths, locks, detectors", "OPEN FIRST essentials"],
                ["Days 2–3", "Kitchen basics, connectivity", "Kitchen + router kits"],
                ["Week one", "Zones, records, claims", "Documents + tools"],
              ],
            },
          },
        ]}
        steps={[
          { title: "Purge at week 8", body: "Sort every room keep-donate-sell-trash, clear donations same week, and shrink volume before any quote or box." },
          { title: "Quote and book at week 6", body: "Collect three visual-survey binding quotes, verify licensing and insurance, reserve the date in writing with fees itemized." },
          { title: "Pack by room weeks 4–2", body: "Heavy-small, light-large, 50-pound max, double-side labels with priority, hardware bagged per furniture piece." },
          { title: "Administer at week 2", body: "File mail forwarding, transfer utilities with overlap, move records and insurance, photograph meters and rooms." },
          { title: "Stage moving week", body: "Pack dailies last, separate hazmat and valuables to carry, confirm crew details, clear paths, secure kids and pets." },
          { title: "Command moving day", body: "Walk through every space with crew, verify inventory and terms, check empties fully, tip fairly, lock up documented." },
          { title: "Land functional first", body: "Beds, baths, kitchen, detectors, shutoffs — then zone-unpack with organization guides and file claims promptly." },
        ]}
        stepsHeading="How do you move in 7 steps?"
        faqs={faqs}
        outboundLinks={[
          { href: "https://www.fmcsa.dot.gov/protect-your-move", label: "FMCSA Protect Your Move" },
          { href: "https://www.usps.com", label: "USPS change of address" },
        ]}
        internalLinks={[
          { href: "/closet-organization-guide", label: "closet organization guide" },
          { href: "/garage-organization-guide", label: "garage organization guide" },
          { href: "/furniture-assembly-tips", label: "furniture assembly tips" },
          { href: "/smoke-detector-guide", label: "smoke detector guide" },
        ]}
        closing={[
          "Purge early, quote thrice, pack labeled, land functional — the four habits that turn moving from crisis into project. The truck day is just the middle; the timeline is the move.",
          "Costs are region-dependent ranges from 2026 U.S. averages. For mover rights and licensing see FMCSA Protect Your Move at fmcsa.dot.gov and USPS address services at usps.com.",
        ]}
      />
    </>
  );
}
