import type { Metadata } from "next";
import ShopArticle from "@/components/ShopArticle";
import { faqJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Spring Home Maintenance Checklist 2026",
  description:
    "Spring home maintenance checklist: roofs, gutters, AC tune-ups, pests, and lawn startups. Catch winter damage early at DIY prices. Start the checklist today!",
  alternates: { canonical: "https://home.loanpaylogic.com/spring-home-maintenance-checklist" },
  openGraph: {
    type: "article",
    url: "https://home.loanpaylogic.com/spring-home-maintenance-checklist",
    siteName: "LoanPay Home",
    title: "Spring Home Maintenance Checklist 2026",
    description:
      "Spring home maintenance checklist: roofs, gutters, AC tune-ups, pests, and lawn startups. Catch winter damage early at DIY prices. Start the checklist today!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spring Home Maintenance Checklist 2026",
    description:
      "Spring home maintenance checklist: roofs, gutters, AC tune-ups, pests, and lawn startups. Catch winter damage early at DIY prices. Start the checklist today!",
  },
};

const faqs = [
  {
    q: "How much does spring home maintenance cost?",
    a: "DIY spring maintenance costs $50 to $200 for filters, caulk, gutter supplies, lawn seed, and pest-sealing materials. Professional add-ons run $75 to $200 for AC tune-ups and $150 to $350 for gutter cleaning, region-dependent. Catching one roof leak or failed AC capacitor early saves $300 to $1,000 against emergency summer rates.",
  },
  {
    q: "What should I inspect on my roof each spring?",
    a: "From the ground with binoculars check for missing, cracked, or lifted shingles, rusted flashing, and sagging gutters, then inspect the attic for daylight, stains, and damp insulation after rain. Clear valleys and gutters of winter debris so spring storms drain freely. Any active leak, widespread granule loss, or soft decking means a roofer's inspection that week.",
  },
  {
    q: "When should I service my air conditioner in spring?",
    a: "Schedule AC service in early spring before the first heat wave: clean or replace filters, clear two feet around the condenser, gently rinse coils, straighten fins, and confirm condensate drains flow. A $75 to $200 tune-up catches weak capacitors and low refrigerant at standard rates instead of emergency premiums. Test-cool the system on a warm afternoon weeks before you need it.",
  },
  {
    q: "How do I start my lawn in spring?",
    a: "Rake winter debris, soil-test before buying fertilizer, apply pre-emergent crabgrass barrier only where you will not seed, mow rising grass at full height with sharp blades, and tune sprinklers for deep morning watering. Overseed thin spots lightly if you skip pre-emergent there, since the barrier blocks good seed with the crabgrass. Details live in our lawn care basics guide.",
  },
  {
    q: "What pests appear in spring homes?",
    a: "Ants scout kitchens, termites swarm near foundations, wasps claim eaves, and mice transition outdoors while mosquitoes breed in any standing water. Seal entry gaps, fix leaks, store food airtight, empty saucers and tarps holding water, and schedule termite inspections in active regions. Our pest prevention basics guide runs the full exclusion circuit.",
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)).replace(/</g, "\u003c") }} />
      <div className="hero-bay">
        <span className="kicker">Seasonal Bay 01</span>
        <h1>Spring Home Maintenance <span className="accent">Checklist 2026</span></h1>
        <p className="lede">
          Winter hides damage and spring reveals it. Walk this checklist top to
          bottom — roof to lawn — and fix small problems at DIY prices before
          summer multiplies them.
        </p>
      </div>
      <ShopArticle
        kicker="Skill level: all levels · Two weekends · $50–$200 DIY"
        intro={[
          "Spring home maintenance is damage reconnaissance after winter's assault: freeze-thaw cracks, ice-dam seepage, gutter battering, furnace exhaustion, and pest scouting all surface as temperatures rise. A systematic two-weekend walkthrough costing $50 to $200 DIY catches the $300 fixes before they mature into $3,000 replacements — roof leaks caught at staining versus decking rot, AC capacitors swapped at standard rates versus compressors killed in July heat, grading fixed before spring storms test it. Professionals price the same logic: $75 to $200 AC tune-ups and $150 to $350 gutter cleanings in spring beat emergency premiums all summer, region-dependent.",
          "This checklist orders the work the way water flows: roof and attic first, then gutters and drainage, exterior shell and paint, cooling equipment, plumbing and water heater, interior safety systems, pests, and finally lawn and irrigation startup. Each stop lists what to look for, what to do, and when to call a pro, with costs as region-dependent ranges. Run it alongside our fall home maintenance checklist as the year's second bookend, and drill into any system with the linked guides.",
        ]}
        sources="Sources: DOE seasonal guidance, ENERGY STAR maintenance, EPA moisture advice, 2026 cost averages"
        sections={[
          {
            h2: "How do you inspect the roof and attic after winter?",
            paragraphs: [
              "Start high because everything drains downhill. From the ground with binoculars, scan for missing, cracked, or curled shingles, lifted flashing around chimneys and vents, and gutters pulling from fascia. In the attic after rain, look for daylight through boards, dark water stains, damp insulation, and rusted nail tips sweating condensation — each maps to an exterior breach above. Photograph everything dated; leak stains grow between inspections and photos prove it.",
              "Clear roof valleys of branches and granule dams so spring storms sheet off freely, and trim limbs now touching shingles before summer growth grinds them. Active drips, soft spongy decking underfoot, or widespread bald shingles go to a roofer immediately — these exceed DIY scope and worsen with every storm. Log shingle age too: 20-plus-year roofs enter annual professional watch regardless of appearance.",
            ],
            checkHeading: "Roof and attic pass",
            bullets: [
              "Binocular scan: shingles, flashing, gutters, fascia — photographed and dated",
              "Attic after rain: daylight, stains, damp insulation, rusted nails checked",
              "Valleys cleared, limbs trimmed back, shingle age logged for replacement planning",
            ],
          },
          {
            h2: "Are gutters and drainage ready for spring storms?",
            paragraphs: [
              "Winter packs gutters with grit, shingle granules, and broken branches that spring cloudbursts exploit instantly. Clean troughs and downspouts fully per our gutter cleaning guide, verify quarter-inch-per-10-feet slope toward outlets during hose flushing, and confirm splash blocks kick water 3-plus feet from the foundation. Walk the grade after rain: mulch volcanoes against siding, pooling within 6 feet of walls, and efflorescence on foundation faces all demand regrading and extension fixes before storm season peaks.",
              "Test sump pumps by pouring a bucket into the pit and confirming automatic cycling plus battery-backup operation before the water table rises. Clear window-well drains of leaves so basement windows never pond. Outdoor faucets get pressurized slowly while watching interior walls for freeze-split leaks — winter's most common plumbing surprise. These water-path checks decide whether spring rains nourish or invade.",
            ],
            table: {
              headers: ["Water path", "Spring check", "DIY cost"],
              rows: [
                ["Gutters + downspouts", "Clean, slope, extend 3+ ft", "$0–$40"],
                ["Grade + wells", "Slope away, wells clear", "$0–$50 soil/mulch"],
                ["Sump + backup", "Bucket test both pumps", "$0 (replace battery $100+)"],
                ["Hose bibs", "Pressurize, watch walls", "$10–$30 parts if split"],
              ],
            },
          },
          {
            h2: "What exterior repairs pay off before summer heat?",
            paragraphs: [
              "Paint and sealant fail visibly by spring: probe siding and trim with a screwdriver for soft rot, especially at gutter ends, hose bibs, and ground contact. Scrape failing paint to sound edges, prime bare wood the same week, and recaulk trim gaps with exterior sealant before humid heat arrives — our caulking and painting room guides sequence the work. Check window operation and weatherstrip after winter contraction, reseating what drafts reveal per the weatherproofing guide.",
              "Decks and concrete get their annual hour: reset popped nails or screws, wash mildew from shaded boards, and test stain beading — gray thirsty wood restains before UV destroys fibers. Reset heaved pavers and caulk driveway-to-foundation joints so storm water stops diving along the wall. Service the mower now — oil, filter, sharp blade, stabilized fuel — because grass waits for no backorder.",
            ],
          },
          {
            h2: "How do you wake up cooling and lawn systems?",
            paragraphs: [
              "Air conditioners deserve spring commissioning, not summer hope: swap in fresh filters, clear two feet around the condenser, rinse coils gently from inside out, straighten bent fins, and confirm the condensate line drains freely. A $75 to $200 pro tune-up in April catches weak capacitors and charge issues at standard rates; test-cool on the first 75-degree afternoon, listening for grinding, short cycling, or warm supply air that schedules service before heat waves. Review the full filter discipline in our HVAC filter guide.",
              "Lawns and irrigation wake together: rake matted winter grass, soil-test before fertilizing, lay pre-emergent where no seeding is planned, start mowing high with sharp blades, and audit sprinklers zone by zone for geysers marking cracked heads. Our lawn care basics guide times every feeding and seeding decision. Start rain barrels, service hoses, and mulch beds 2 to 3 inches deep — but never volcano-mulched against trunks — to bank spring moisture for summer.",
            ],
          },
          {
            h2: "What spring projects raise home value most?",
            paragraphs: [
              "Spring curb-appeal projects return disproportionately because buyers and appraisers judge exteriors first: fresh mulch beds edged crisply, a pressure-washed driveway and siding, a painted front door in a confident color with new hardware, and trimmed foundation plantings transform perceived value for $100 to $300 in materials. Re-caulked windows and touched-up trim signal maintained rather than tired, and a green weed-free lawn edge frames the whole property. These cosmetic hours photograph into listings and appraisals far beyond their cost.",
              "System documentation raises value quietly: a filed spring inspection with dated roof photos, serviced HVAC receipts, and detector logs tells buyers the house was managed, not merely owned. Energy improvements with receipts — sealed ducts, new filters on schedule, weatherstripped openings — support green MLS features that appraisers increasingly credit. Keep every spring receipt and photo in the home file; at sale time the maintenance dossier shortens inspections and defends price.",
              "Prioritize by failure risk first, beauty second: active leaks, dead outlets, and tripping hazards outrank mulch in every rational budget, and inspectors flag deferred maintenance that cosmetics cannot hide. Run the safety and water-path stops in this checklist before the pretty projects, then spend the remaining weekends on visible wins. A sound house made beautiful beats a beautiful house hiding rot at every appraisal and inspection.",
            ],
          },
          {
            h2: "Which interior systems need spring resets?",
            paragraphs: [
              "Inside, spring resets safety and efficiency baselines. Test every smoke and CO detector button, vacuum covers, and replace decade-expired units per our smoke detector guide. Flush the water heater's winter sediment and verify 120 degrees per our water heater maintenance. Under every sink, feel supply valves and trap joints with dry fingers for winter-born weeps, and run rarely used guest-bath fixtures to refill evaporated trap seals blocking sewer gas. Check the electrical panel for warmth, odor, or new tripping per our outlet safety guide's warning signs.",
              "Pest exclusion peaks now: seal quarter-inch-plus gaps with metal-backed methods, store dry goods airtight, fix the drips ants scout, and empty every saucer, tarp fold, and tire holding mosquito water. Schedule termite inspections in active regions during swarm season when evidence shows. Log all of it — detector dates, filter sizes, paint colors, pest gaps sealed — in one home file that makes fall's checklist twice as fast.",
            ],
            table: {
              headers: ["Interior stop", "Spring task", "Guide link"],
              rows: [
                ["Detectors", "Test, vacuum, retire at 10 yrs", "Smoke detector guide"],
                ["Water heater", "Flush sediment, verify 120°F", "Water heater maintenance"],
                ["Plumbing", "Feel valves/traps, refill dry traps", "Faucet + drain guides"],
                ["Pests", "Seal gaps, bait trails, inspect termites", "Pest prevention basics"],
              ],
            },
          },
        ]}
        steps={[
          { title: "Walk roof and attic", body: "Binocular-scan shingles and flashing, attic-check after rain for stains and daylight, photograph everything dated, and call roofers for active leaks." },
          { title: "Clear water paths", body: "Clean gutters per guide, verify slope and 3-foot discharge, test sump pumps, clear wells, and pressurize hose bibs while watching walls." },
          { title: "Repair the shell", body: "Probe trim for rot, scrape-prime-paint failures, recaulk exterior gaps, reseat weatherstrip, and service deck, concrete, and mower." },
          { title: "Commission cooling", body: "Fresh filters, cleared condenser, rinsed coils, flowing condensate, April tune-up booked, test-cool before heat arrives." },
          { title: "Reset interior safety", body: "Test detectors, flush water heater, feel plumbing joints, refill dry traps, and scan the panel for new warning signs." },
          { title: "Exclude spring pests", body: "Seal gaps metal-backed, starve kitchens airtight, drain mosquito water, bait ant trails, and inspect for termites." },
          { title: "Wake the landscape", body: "Soil-test, pre-emergent where unseeded, mow high sharp, audit sprinklers, mulch beds right, and log everything for fall." },
        ]}
        stepsHeading="How do you run spring maintenance in 7 steps?"
        faqs={faqs}
        outboundLinks={[
          { href: "https://www.energy.gov/energysaver", label: "DOE spring efficiency tips" },
          { href: "https://www.epa.gov/mold", label: "EPA moisture guidance" },
        ]}
        internalLinks={[
          { href: "/fall-home-maintenance-checklist", label: "fall checklist" },
          { href: "/gutter-cleaning-guide", label: "gutter cleaning guide" },
          { href: "/lawn-care-basics", label: "lawn care basics" },
          { href: "/hvac-filter-guide", label: "HVAC filter guide" },
        ]}
        closing={[
          "Two spring weekends — roof to lawn, water paths to detectors — buy a summer of quiet systems and a fall checklist that starts ahead instead of behind. Log it all; next spring thanks you.",
          "Costs are region-dependent ranges from 2026 U.S. averages. For seasonal efficiency tips see the Department of Energy at energy.gov/energysaver and EPA moisture guidance at epa.gov/mold.",
        ]}
      />
    </>
  );
}
