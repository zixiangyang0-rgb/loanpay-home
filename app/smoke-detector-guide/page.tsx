import type { Metadata } from "next";
import ShopArticle from "@/components/ShopArticle";
import { faqJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Smoke Detectors: Placement & Testing Guide",
  description:
    "Smoke detector placement and testing saves lives: cover bedrooms, interconnect alarms, and retire units at ten years. Protect your sleeping family tonight!",
  alternates: { canonical: "https://home.loanpaylogic.com/smoke-detector-guide" },
  openGraph: {
    type: "article",
    url: "https://home.loanpaylogic.com/smoke-detector-guide",
    siteName: "LoanPay Home",
    title: "Smoke Detectors: Placement & Testing Guide",
    description:
      "Smoke detector placement and testing saves lives: cover bedrooms, interconnect alarms, and retire units at ten years. Protect your sleeping family tonight!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smoke Detectors: Placement & Testing Guide",
    description:
      "Smoke detector placement and testing saves lives: cover bedrooms, interconnect alarms, and retire units at ten years. Protect your sleeping family tonight!",
  },
};

const faqs = [
  {
    q: "How much does it cost to install smoke detectors?",
    a: "Battery smoke detectors cost $10 to $25 each and install in minutes with two screws, so a typical home needs $60 to $150 for full coverage. Hardwired interconnected units cost $20 to $40 each plus $100 to $250 per unit professionally installed where no wiring exists, region-dependent. Ten-year sealed-battery models at $20 to $35 eliminate battery changes for a decade and pay back immediately.",
  },
  {
    q: "Where should smoke detectors be placed in a house?",
    a: "Install one inside every bedroom, outside each sleeping area in the hallway, and on every level including the basement, keeping units at least 10 feet from cooking appliances to cut nuisance alarms. Mount on ceilings or high on walls 4 to 12 inches from the ceiling, away from vents, windows, and bathrooms where steam triggers falsely. Interconnect all units so one alarm sounds them all.",
  },
  {
    q: "Why does my smoke detector beep every 30 seconds?",
    a: "A chirp every 30 to 60 seconds means low battery, a battery drawer left open, or an end-of-life warning on aging units. Replace the battery first, clean dust from the sensing chamber with a vacuum brush, and check the manufacture date — units over 10 years old chirp for retirement, not batteries. Persistent chirps after fresh batteries and cleaning mean replace the unit that day.",
  },
  {
    q: "How often should you test smoke detectors?",
    a: "Press the test button monthly on every unit and confirm interconnected alarms all sound together. Vacuum dust from covers twice a year, replace replaceable batteries yearly, and replace the entire detector 10 years after manufacture per CPSC and NFPA guidance. Test after power outages, renovations, and battery changes without exception.",
  },
  {
    q: "Do I need carbon monoxide detectors too?",
    a: "Yes, install CO detectors outside sleeping areas and on every level of homes with fuel-burning appliances, fireplaces, or attached garages, since carbon monoxide is odorless and lethal. Combination smoke-CO units simplify coverage where both hazards exist. Replace CO units every 5 to 7 years per manufacturer date, sooner than smoke detectors.",
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)).replace(/</g, "\u003c") }} />
      <div className="hero-bay">
        <span className="kicker">Electrical Bay 02</span>
        <h1>Smoke Detectors <span className="accent">Placed & Tested Right</span></h1>
        <p className="lede">
          Working alarms cut fire-death risk roughly in half — yet dead
          batteries silence millions. Place them per the rules, test monthly,
          and retire them at ten years.
        </p>
      </div>
      <ShopArticle
        kicker="Skill level: beginner · One afternoon · $10–$40 per unit"
        intro={[
          "Smoke detector coverage is the cheapest life-safety upgrade in homeownership because the hardware costs $10 to $40 per unit and installs with a drill and a ladder. Fire services and the CPSC agree on the stakes: homes with working interconnected alarms give sleeping families the minutes that escape plans need, while dead-battery and decade-expired units fail silently on ceilings nationwide. A typical two-story home needs six to eight units — inside each bedroom, outside sleep areas, every level — for $60 to $250 in hardware, region-dependent, against statistics no family wants to join.",
          "This guide maps placement room by room, compares ionization, photoelectric, and dual-sensor technologies, walks battery and hardwired installs with power-off discipline, and builds the monthly-test plus ten-year-retirement rhythm that keeps coverage real. Carbon monoxide pairing is included wherever fuel burns. Wired interconnect work follows our outlet replacement safety guide rules, and renters will find the battery-powered path in our renter-friendly decorating guide.",
        ]}
        sources="Sources: CPSC smoke alarm guidance, NFPA alarm recommendations, ESFI electrical safety"
        safety="Alarms save lives only when powered, interconnected, and unexpired. Never disable a nuisance alarm by removing batteries — relocate it and use hush features instead. This is general education, not professional advice; hire a licensed electrician for hardwired installs and a pro for monitored systems. See our disclaimer."
        sections={[
          {
            h2: "Where must smoke detectors go in your home?",
            paragraphs: [
              "Coverage follows sleep and levels: one alarm inside every bedroom, one outside each sleeping area in the hallway, and at least one on every story including basements and finished attics. Large homes add units so no bedroom door sits more than a long hallway from a sounder. Kitchens get heat alarms or detectors placed at least 10 feet from cooking appliances rather than ionization units that shriek at toast. Garages take heat detectors, since vehicle exhaust and dust defeat smoke sensing.",
              "Mounting geometry matters. Ceiling mounting sits center-room and at least 4 inches from walls; wall mounting places the top 4 to 12 inches below the ceiling, never in the dead-air corner pocket. Keep units 3-plus feet from supply vents, windows, ceiling fans, and bathroom doors whose drafts and steam delay or fake triggers. Interconnection — wireless or wired — makes every unit sound when one senses smoke, which is what wakes the far bedroom. Sketch the floor plan, mark each required point, and buy one extra unit for the kitchen-adjacent hallway that always ends up unprotected.",
            ],
          },
          {
            h2: "Which detector technology should you choose?",
            paragraphs: [
              "Ionization alarms react fastest to flaming fires with small invisible particles; photoelectric alarms react fastest to smoldering fires with large visible smoke — the kind that fills bedrooms while families sleep. Fire professionals increasingly recommend photoelectric or dual-sensor units for homes because smoldering furniture fires dominate residential deaths and ionization units cause more cooking nuisances that tempt battery removal. Dual-sensor models carry both chambers for broad response at $25 to $40.",
              "Power options trade convenience against reliability. Nine-volt replaceable-battery units cost least but need yearly batteries; ten-year sealed lithium units at $20 to $35 eliminate the chore entirely and dominate recommendations now. Hardwired 120V units with battery backup interconnect through house wiring and suit new construction and remodels, installed by electricians at $100 to $250 per point where wiring is new. Smart detectors add phone alerts and hush control at $80 to $130 — worthwhile for frequent travelers and the hearing-impaired with strobe and bed-shaker accessories.",
            ],
            table: {
              headers: ["Type", "Best response", "Cost each"],
              rows: [
                ["Photoelectric battery", "Smoldering fires, fewer nuisances", "$10–$25"],
                ["Dual-sensor sealed 10-yr", "Broad coverage, no battery chore", "$20–$40"],
                ["Hardwired interconnected", "Whole-house sounding + backup", "$20–$40 + install"],
                ["Smart / CO combo", "Phone alerts, CO pairing", "$40–$130"],
              ],
            },
          },
          {
            h2: "How do you install battery and wired units?",
            paragraphs: [
              "Battery installs take minutes: twist off the mounting plate, drive two screws into ceiling drywall anchors or a joist, click the unit on, and pull the battery tab. Ladders need level footing and a helper for hallway ceilings over stairs — reposition rather than overreach. Date each unit in marker with install month and the 10-year retirement date, then test immediately with the button and confirm interconnected partners sound within seconds.",
              "Hardwired installs follow strict power-off ritual: breaker off at the panel, tester-proven dead at the box, wire-for-wire swap of black, white, and orange interconnect leads with proper wire nuts, and restoration only after covers seat. Homes lacking existing alarm wiring need an electrician to run code-compliant circuits — this is not a first-electrical project. Combination smoke-CO units mount under the same placement logic with CO's sleeping-area emphasis. Never paint over detectors, never recess them behind beams, and never mount within 3 feet of a kitchen appliance or bath door.",
            ],
            checkHeading: "Install-day checklist",
            bullets: [
              "Floor-plan map marked: bedrooms, halls, every level, 10 ft from cooking",
              "Correct units bought plus anchors, tester, ladder, helper for high ceilings",
              "Breaker off and proven dead before any wired work; battery tabs pulled on wireless",
              "Each unit dated, tested, and interconnect-confirmed before the ladder moves",
            ],
          },
          {
            h2: "How do wireless interconnected alarms work together?",
            paragraphs: [
              "Interconnection is the feature that wakes the far bedroom: when one sensing unit triggers, every linked sounder in the house joins within seconds at 85-plus decibels. Wireless interconnection uses radio mesh pairing — press the pairing sequence per maker steps, confirm each unit joins the network, then test by holding one test button while a helper walks every room verifying all sounders join. Battery-powered wireless units retrofit interconnection into older homes with zero wiring, while hardwired systems link through the orange interconnect conductor in the ceiling boxes.",
              "Mixed systems need planning: keep all units the same brand family where makers require it for pairing, since cross-brand wireless rarely links. Combination smoke-CO units interconnect their smoke sounders universally while CO signaling varies by model — verify CO linking behavior in the manual for sleeping-area coverage. Smart detectors add phone push alerts and room-naming that tells you the kitchen sensed smoke while you are at work, plus hush control that silences nuisance alarms without ladder climbs.",
              "Troubleshoot pairing like a network: replace weak batteries first since low voltage breaks radio reliability before it breaks sensing, reduce distance or add units where thick plaster and masonry block signals, and re-pair after power outages that scramble older models. Log the pairing map with unit locations and dates inside the electrical panel door or home file. Test the full network monthly as one system — a single silent unit means the chain has a broken link that the next fire will find.",
            ],
          },
          {
            h2: "Why do alarms false-alarm and how do you stop it?",
            paragraphs: [
              "Nuisance alarms kill by training families to disable protection, so treat every false alarm as a placement problem. Steam from showers, toast and broiler smoke, fireplace startup, and construction dust trigger properly placed-but-too-close units. Solutions in order: press hush instead of pulling batteries, relocate the unit the code-allowed distance farther from the source, switch ionization units near kitchens to photoelectric, and run bath fans and range hoods that vent outdoors. Dusty units near workshops need vacuuming twice a year.",
              "End-of-life chirps differ from low-battery chirps: after fresh batteries and cleaning, a unit still chirping every 30 seconds past its 10-year manufacture date is retiring itself — replace it that day. Yellowing plastic, test buttons that no longer sound full volume, and units that alarm with no smoke present all mean replacement regardless of age. Keep one spare sealed unit in the closet so retirement never waits for a store trip.",
            ],
          },
          {
            h2: "What testing routine keeps the system trustworthy?",
            paragraphs: [
              "Trust comes from ritual: press every test button monthly and confirm the household hears all sounders, including basement and attic units. Vacuum covers with a soft brush twice a year when clocks change, replace nine-volt batteries yearly on a birthday schedule, and walk the escape plan with the family twice a year — two ways out of every bedroom, a meeting tree outside, and a practiced call to emergency services. Log tests on a card taped inside a kitchen cabinet so renters, guests, and future buyers see the discipline.",
              "Budget the decade cycle: six to eight sealed units at $20 to $35 each every ten years costs $120 to $280 per decade — pennies per protected night, region-dependent. CO units retire at 5 to 7 years, so stagger purchases and date everything. When selling or renting, hand over the test log and retirement dates with our moving house checklist packet. Fold alarm audits into both seasonal checklists so coverage never drifts.",
            ],
            table: {
              headers: ["Task", "Frequency", "Cost"],
              rows: [
                ["Button test all units", "Monthly", "Free"],
                ["Vacuum + battery swap", "Yearly", "$3–$8 per battery"],
                ["Replace CO units", "Every 5–7 yrs", "$25–$50 each"],
                ["Replace smoke units", "Every 10 yrs", "$10–$40 each"],
              ],
            },
          },
        ]}
        steps={[
          { title: "Map every required point", body: "Sketch floors, mark inside each bedroom, outside sleep areas, every level, and CO points near fuel appliances — 10 feet minimum from cooking." },
          { title: "Buy matched technology", body: "Choose photoelectric or dual-sensor sealed 10-year units for most spots, heat alarms for kitchens and garages, CO combos where fuel burns." },
          { title: "Mount high and clear", body: "Ceiling-center or high-wall 4 to 12 inches down, clear of vents, fans, and bath steam. Date every unit with install and retire dates." },
          { title: "Wire safely or click on", body: "Battery units click onto plates in minutes; wired units get breaker-off, tester-dead, wire-for-wire swaps by qualified hands only." },
          { title: "Interconnect and test", body: "Pair wireless units per maker steps, press test on one, and confirm every sounder in the house joins within seconds." },
          { title: "Tame nuisances properly", body: "Hush, relocate, or swap sensor types for false alarms. Never remove batteries; fix placement and ventilation instead." },
          { title: "Ritualize testing", body: "Monthly button tests, yearly batteries, twice-yearly escape drills, and decade retirement logged where the household sees it." },
        ]}
        stepsHeading="How do you protect a home in 7 steps?"
        faqs={faqs}
        outboundLinks={[
          { href: "https://www.cpsc.gov", label: "CPSC smoke alarm guidance" },
          { href: "https://www.nfpa.org", label: "NFPA alarm recommendations" },
        ]}
        internalLinks={[
          { href: "/outlet-replacement-safety-guide", label: "outlet safety guide" },
          { href: "/fall-home-maintenance-checklist", label: "fall checklist" },
          { href: "/renter-friendly-decorating", label: "renter-friendly decorating" },
          { href: "/moving-house-checklist", label: "moving house checklist" },
        ]}
        closing={[
          "Six small white discs, tested monthly and retired on schedule, stand watch over every sleeping night in the house. Map them this weekend, test them every month, and never let a chirp go unanswered.",
          "Costs are region-dependent ranges from 2026 U.S. averages. For placement and testing standards see CPSC smoke-alarm guidance at cpsc.gov and NFPA resources at nfpa.org.",
        ]}
      />
    </>
  );
}
