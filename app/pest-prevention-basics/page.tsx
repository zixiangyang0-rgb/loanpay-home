import type { Metadata } from "next";
import ShopArticle from "@/components/ShopArticle";
import { faqJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pest Prevention Basics for a Sealed Home",
  description:
    "Pest prevention through exclusion keeps bugs out for good: seal gaps chew-proof, dry moisture, and bait smart. DIY costs $20–$80. Start sealing gaps this week!",
  alternates: { canonical: "https://home.loanpaylogic.com/pest-prevention-basics" },
  openGraph: {
    type: "article",
    url: "https://home.loanpaylogic.com/pest-prevention-basics",
    siteName: "LoanPay Home",
    title: "Pest Prevention Basics for a Sealed Home",
    description:
      "Pest prevention through exclusion keeps bugs out for good: seal gaps chew-proof, dry moisture, and bait smart. DIY costs $20–$80. Start sealing gaps this week!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pest Prevention Basics for a Sealed Home",
    description:
      "Pest prevention through exclusion keeps bugs out for good: seal gaps chew-proof, dry moisture, and bait smart. DIY costs $20–$80. Start sealing gaps this week!",
  },
};

const faqs = [
  {
    q: "How much does pest prevention cost?",
    a: "DIY exclusion costs $20 to $80: caulk, steel wool, door sweeps, and sealed storage bins that last years. Quarterly professional prevention plans run $100 to $300 per visit or $300 to $600 yearly, region-dependent. One-time treatments for active infestations cost $150 to $500, while termite jobs run $500 to $3,000 — prevention is always the bargain.",
  },
  {
    q: "How do mice get into houses?",
    a: "Mice squeeze through dime-sized gaps around utility penetrations, garage door corners, foundation cracks, dryer vents, and under doors with worn sweeps. Seal with steel wool plus caulk, copper mesh, or cement — never foam alone, which mice chew through overnight. Trap inside with snap traps along walls while sealing outside entry points.",
  },
  {
    q: "What attracts ants into kitchens?",
    a: "Scout ants follow sugar, grease films, pet bowls, crumbs under appliances, and moisture at sinks to recruit colonies indoors. Wipe trails with soapy water to erase pheromones, seal the entry crack, store sweets airtight, and place slow-acting bait stations that foragers carry home. Spraying repellents over trails scatters colonies into new walls instead of killing queens.",
  },
  {
    q: "How do I prevent termites around my home?",
    a: "Keep soil and mulch 6 inches below siding, divert downspouts far from the foundation, fix plumbing leaks fast, store firewood off the ground away from walls, and schedule professional termite inspections yearly in active regions. Mud tubes on foundations, hollow-sounding trim, and swarmers indoors mean call a licensed pest professional immediately — termite treatment is never DIY.",
  },
  {
    q: "When should I call an exterminator?",
    a: "Call for termites, bed bugs, German cockroach infestations, wasp nests inside walls, wildlife in attics, or any pest persisting two weeks after correct DIY exclusion and sanitation. Licensed pros carry restricted products, wall-void equipment, and the identification training that separates $20 fixes from $2,000 mistakes. Get two quotes and verify state licensing.",
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)).replace(/</g, "\u003c") }} />
      <div className="hero-bay">
        <span className="kicker">Outdoor Bay 04</span>
        <h1>Pest Prevention <span className="accent">Through Exclusion</span></h1>
        <p className="lede">
          Pests enter through gaps, drink at leaks, and dine on crumbs. Seal
          the shell, dry the moisture, starve the kitchen — and spray almost
          never.
        </p>
      </div>
      <ShopArticle
        kicker="Skill level: beginner · Weekend exclusion · $20–$80 DIY"
        intro={[
          "Pest prevention works through exclusion because every indoor pest arrived through a gap chasing food, water, or shelter that the house provides. Mice compress through dime-sized holes, ants trail pheromone highways through quarter-inch trim gaps, and cockroaches breed in the warm moisture behind dishwashers — all fixable with $20 to $80 of caulk, steel wool, sweeps, and sealed bins, region-dependent, against $300 to $600 yearly for pro prevention plans and $150 to $500 per infestation treatment. University extension entomologists rank the hierarchy identically everywhere: seal entry first, remove food and water second, trap and bait third, spray last and rarely.",
          "This guide walks the full exclusion circuit room by room: mapping entry points, sealing with chew-proof materials, drying the moisture pests drink, starving kitchens through storage discipline, and placing traps and baits that solve rather than scatter. You will learn why foam alone fails against mice, why repellent sprays worsen ant invasions, and which pests — termites, bed bugs, wildlife — go straight to licensed professionals. Pair it with our weatherproofing guide for shared sealing skills and the seasonal checklists that repeat the circuit.",
        ]}
        sources="Sources: university extension IPM guidance, EPA pest-control advice, 2026 U.S. cost averages"
        sections={[
          {
            h2: "How do pests get inside your house?",
            paragraphs: [
              "Entry mapping starts outside at dusk with a flashlight: foundation cracks, utility penetrations for pipes and cables, dryer and bath exhaust vents, garage door corners, crawlspace vents, and the sill-to-foundation seam. Mice need only a quarter-inch gap — a hole the diameter of a dime — and follow utility lines like highways into warm wall voids. Doors contribute hugely: daylight visible under an exterior door is a mouse invitation, and torn screens plus unsealed window AC units open summer highways for flies and wasps.",
              "Interior pathways spread them further: pipe chases behind tubs, under-sink plumbing cutouts oversized by inches, recessed lights into attics, and shared apartment walls along plumbing runs. Mark every gap with tape during the walk, photograph with a coin for scale, and rank by size — quarter-inch-plus holes get chew-proof treatment first. This single survey, repeated each fall, prevents more infestations than any chemical program.",
            ],
          },
          {
            h2: "What materials actually seal pests out?",
            paragraphs: [
              "Chew-proofing decides material choice: stuff quarter-inch-plus holes with copper mesh or steel wool, then cap with caulk, cement, or sheet metal — mice shred expanding foam alone overnight but will not chew through embedded metal fibers. Caulk seals trim gaps, pipe escutcheons, and window lines; cement points foundation cracks; 1/4-inch hardware cloth screens vents, crawlspace openings, and chimney caps while flowing air freely. Door sweeps with rubber or brush fins close the under-door highway, and new weatherstrip rehabilitates leaky frames per our weatherproofing guide.",
              "Landscape clearance backs the hardware: trim branches 6-plus feet from roofs to break squirrel and ant bridges, keep mulch and soil 6 inches below siding to expose termite tubes, and move firewood 20-plus feet from walls onto racks. Gutters that overflow soak fascia into carpenter-ant habitat — our gutter cleaning guide doubles as pest control. Total exclusion materials run $20 to $80 and install in a weekend with basic tools.",
            ],
            checkHeading: "Exclusion kit checklist",
            bullets: [
              "Copper mesh and steel wool plus exterior caulk for every quarter-inch-plus hole",
              "Cement for foundation cracks, hardware cloth for vents, sheet metal for big voids",
              "Door sweeps, replacement weatherstrip, escutcheon plates for pipe cutouts",
              "Pruners for branch clearance, mulch rake for siding clearance, flashlight for surveys",
            ],
          },
          {
            h2: "How do moisture and food control pests?",
            paragraphs: [
              "Water draws pests like light draws moths: fix dripping traps and supply valves, insulate sweating cold-water pipes, run bath fans through full shower cycles, and keep crawlspaces and basements under 50 percent humidity with drainage and dehumidification. German cockroaches cluster at dishwasher and refrigerator condensate warmth; silverfish graze damp paper in humid basements; carpenter ants excavate water-softened wood that sound lumber would resist. Every leak repaired is habitat destroyed — coordinate with our faucet and drain guides where plumbing weeps.",
              "Kitchens starve or feed colonies by storage discipline: decant cereals, sugars, and pet food into gasket-sealed hard containers, wipe grease films behind ranges and under toasters weekly, pull appliances yearly to clear the crumb deltas beneath, and empty trash nightly into lidded cans. Pet bowls lift between meals where ants scout. Compost seals tight outdoors. These habits cost nothing and outperform monthly spraying permanently, since starved scouts never recruit.",
            ],
            table: {
              headers: ["Pest", "Attractant", "Prevention"],
              rows: [
                ["House mice", "Dime gaps + pantry crumbs", "Metal-mesh seal, sealed bins, snap traps"],
                ["Odorous ants", "Sugar trails + moisture", "Erase trails, bait queens, fix leaks"],
                ["German roaches", "Appliance warmth + grease", "Sanitation, vacuum, pro if entrenched"],
                ["Silverfish", "Damp paper + humidity", "Dehumidify, seal books, fix leaks"],
                ["Termites", "Wood-soil contact", "Clearance, inspections, pro treatment"],
              ],
            },
          },
          {
            h2: "How do traps and baits solve versus scatter?",
            paragraphs: [
              "Snap traps placed perpendicular along mouse runways with peanut-butter bait solve quickly and verifiably — check daily, reset promptly, and seal the entry the same weekend or replacements keep coming. Live-catch and relocation sound kind but dump disoriented mice to slow deaths or neighbors' garages; exclusion plus quick snap trapping is the extension-endorsed humane path. Glue boards injure without killing and extensions universally discourage them.",
              "Ant and roach baits work inversely to sprays: slow-acting bait stations let foragers ferry poison to queens over days, collapsing colonies, while repellent sprays scatter colonies into new walls and multiply the problem. Place baits on active trails undisturbed for two weeks, resisting the urge to spray. Foggers rank worst — driving roaches deeper while coating kitchens in pesticide. When German roaches persist past two weeks of correct sanitation plus baiting, or bed bugs appear at all, licensed pros with wall-void tools take over.",
            ],
          },
          {
            h2: "How do you handle seasonal pest invasions?",
            paragraphs: [
              "Seasons rotate the invaders: spring brings ant scouts and termite swarmers, summer breeds mosquitoes and wasps, fall drives mice and spiders indoors, and winter shelters roaches around indoor warmth. Calendar the responses — spring perimeter inspection and termite watch, summer standing-water patrols emptied weekly, fall exclusion blitz before first frost, winter indoor sanitation and trap checks — and each wave meets prepared defenses rather than surprise. Log first-sighting dates yearly; patterns predict next season's timing within weeks.",
              "Mosquito control centers on water you own: empty saucers, tarps, tires, and gutter pockets weekly since larvae mature in days, run fountains and birdbaths with agitators, and keep gutters flowing per our gutter cleaning guide because clogged troughs breed above your head. Wasps claim eaves in early summer when nests are golf-ball small — knock starter nests at night with proper spray distance and protective clothing, but leave basketball-sized or wall-void nests to professionals with dust equipment.",
              "Fall rodent pressure peaks as nights cool: move the exclusion survey to September, set snap traps along garage and basement perimeters as sentries before droppings appear, and bring birdseed, pet food, and grass seed into hard sealed containers that deny winter forage. Spiders follow the insects indoors, so reducing porch-light insect swarms with warm LEDs and sealed door weatherstrip cuts spider traffic without a single spray. Seasonal rhythm turns pest control from reaction into routine.",
            ],
          },
          {
            h2: "What does prevention cost against treatment?",
            paragraphs: [
              "Exclusion economics dominate: $20 to $80 DIY plus a weekend seals years of entry, while quarterly pro prevention at $300 to $600 yearly suits rentals, restaurants-adjacent homes, and severe-pressure regions. One-time active treatments run $150 to $500 for ants, roaches, and mice; wildlife removal $200 to $600; termite soil treatments and baiting $500 to $3,000. Every dollar of sealing defers those invoices.",
              "Spend the pro budget where it counts: annual termite inspections in active zones, bed-bug certified remediation never attempted DIY, and wildlife exclusion with one-way doors that pros guarantee. Verify state licensing, demand IPM-first proposals emphasizing exclusion over spraying, and get two quotes. Log every gap sealed and bait placed with our seasonal checklists so the circuit repeats each fall before rodents seek winter shelter.",
            ],
            table: {
              headers: ["Approach", "Cost", "When"],
              rows: [
                ["DIY exclusion + sanitation", "$20–$80", "Every home, every fall"],
                ["Quarterly pro prevention", "$300–$600/yr", "High pressure, rentals"],
                ["Active infestation treatment", "$150–$500", "Entrenched ants/roaches/mice"],
                ["Termite / bed bug pros", "$500–$3,000+", "Always licensed, immediately"],
              ],
            },
          },
        ]}
        steps={[
          { title: "Survey at dusk", body: "Flashlight-walk the foundation, doors, vents, and utility penetrations. Tape and photograph every quarter-inch-plus gap with a coin for scale." },
          { title: "Seal chew-proof", body: "Pack holes with copper mesh or steel wool capped in caulk or cement. Screen vents with hardware cloth, sweep doors, and clear siding and branches." },
          { title: "Dry the habitat", body: "Fix plumbing drips, insulate sweating pipes, vent baths fully, and hold basements under 50 percent humidity." },
          { title: "Starve the kitchen", body: "Decant dry goods airtight, degrease weekly behind appliances, clear under-appliance crumbs yearly, and lid trash nightly." },
          { title: "Trap and bait smart", body: "Snap-trap mouse runways perpendicular with daily checks; bait ant trails undisturbed two weeks. Never fog or repellent-spray trails." },
          { title: "Escalate correctly", body: "Send termites, bed bugs, entrenched roaches, and wildlife to licensed pros immediately with your survey notes." },
          { title: "Repeat each fall", body: "Re-walk the circuit with the seasonal checklists before rodents seek winter shelter, logging every gap and bait." },
        ]}
        stepsHeading="How do you pest-proof in 7 steps?"
        faqs={faqs}
        outboundLinks={[
          { href: "https://www.epa.gov/safepestcontrol", label: "EPA safe pest control guidance" },
          { href: "https://www.cpsc.gov", label: "CPSC pesticide safety resources" },
        ]}
        internalLinks={[
          { href: "/weatherproofing-windows-doors", label: "weatherproofing windows and doors" },
          { href: "/fix-leaky-faucet", label: "fix a leaky faucet" },
          { href: "/fall-home-maintenance-checklist", label: "fall checklist" },
          { href: "/lawn-care-basics", label: "lawn care basics" },
        ]}
        closing={[
          "Seal the shell chew-proof, dry the moisture, starve the kitchen, bait the stubborn — in that order, every fall. Prevention this disciplined makes exterminators a rarity instead of a subscription.",
          "Costs are region-dependent ranges from 2026 U.S. averages. For IPM principles see university extension resources and EPA guidance at epa.gov/safepestcontrol.",
        ]}
      />
    </>
  );
}
