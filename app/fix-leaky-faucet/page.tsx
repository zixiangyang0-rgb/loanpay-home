import type { Metadata } from "next";
import ShopArticle from "@/components/ShopArticle";
import { faqJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fix a Leaky Faucet: Stop Drips in an Hour",
  description:
    "Fix a leaky faucet in one hour: shut the water, swap washers or cartridges, and pressure-test joints. DIY costs $10–$50. Stop drips and trim water bills now!",
  alternates: { canonical: "https://home.loanpaylogic.com/fix-leaky-faucet" },
  openGraph: {
    type: "article",
    url: "https://home.loanpaylogic.com/fix-leaky-faucet",
    siteName: "LoanPay Home",
    title: "Fix a Leaky Faucet: Stop Drips in an Hour",
    description:
      "Fix a leaky faucet in one hour: shut the water, swap washers or cartridges, and pressure-test joints. DIY costs $10–$50. Stop drips and trim water bills now!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fix a Leaky Faucet: Stop Drips in an Hour",
    description:
      "Fix a leaky faucet in one hour: shut the water, swap washers or cartridges, and pressure-test joints. DIY costs $10–$50. Stop drips and trim water bills now!",
  },
};

const faqs = [
  {
    q: "How much does it cost to fix a leaky faucet?",
    a: "DIY faucet repair costs $10 to $50: $3 to $10 for washers and O-rings, $15 to $45 for a replacement cartridge, plus basic tools most homes own. A plumber charges $75 to $250 for the same repair depending on region, faucet brand, and access. If the faucet body itself is corroded or parts are discontinued, a full replacement faucet costs $50 to $300 plus installation.",
  },
  {
    q: "Why does my faucet drip after I turn it off?",
    a: "Drips after shutoff mean the seal inside is worn: a flattened washer on compression faucets, a scored cartridge on single-handle faucets, or cracked O-rings letting water past. Mineral grit from hard water accelerates the wear by grinding the seal each use. Replacing the washer or cartridge restores a watertight seat, while cleaning the aerator fixes weak flow that mimics low pressure.",
  },
  {
    q: "How do I know what faucet cartridge to buy?",
    a: "Pull the old cartridge and bring it to the store for an exact match, noting the faucet brand stamped under the handle or on the escutcheon. Count the splines, measure overall length, and photograph any part numbers on the brass. Major brands keep identification guides online, and many cartridges come in brand-specific repair kits. When the model is unidentifiable or obsolete, replacing the whole faucet is faster than hunting extinct parts.",
  },
  {
    q: "Can I fix a leaky faucet without turning off the water?",
    a: "No, always shut the water first at the fixture stop valves under the sink, turning them clockwise until snug. Open the faucet to confirm flow stops and relieve pressure before disassembly. If the stops are frozen or missing, shut the home's main valve and tell everyone in the house. Working on a pressurized faucet floods the cabinet in seconds and can launch small parts across the room.",
  },
  {
    q: "How long does a faucet cartridge last?",
    a: "Cartridges last 5 to 15 years depending on water hardness, daily use, and brand quality, with hard water cutting life toward the short end. Dripping, stiff handles, and temperature drift signal wear. Sediment filters and water softeners extend cartridge life noticeably. Keep the replacement receipt and part number taped inside the cabinet for the next swap.",
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)).replace(/</g, "\u003c") }} />
      <div className="hero-bay">
        <span className="kicker">Plumbing Bay 01</span>
        <h1>Fix a Leaky Faucet <span className="accent">in One Hour</span></h1>
        <p className="lede">
          A faucet dripping once per second wastes over 3,000 gallons a year.
          Shut the water, swap the seal, and silence the drip for less than
          fifty dollars.
        </p>
      </div>
      <ShopArticle
        kicker="Skill level: beginner · One-hour fix · $10–$50 DIY"
        intro={[
          "Learning to fix a leaky faucet belongs in every homeowner's first year because drips are the most common indoor leak and the cheapest to cure. That steady plink from the bathroom tap is water slipping past a worn rubber washer, O-ring, or cartridge — a $3 to $45 part depending on faucet type, with total DIY costs of $10 to $50 against a $75 to $250 plumber visit, all region-dependent. The U.S. Environmental Protection Agency estimates household leaks waste nearly 1 trillion gallons nationally each year, and the humble faucet drip is a visible slice of it. One hour with basic hand tools stops the waste and the water bill creep.",
          "This guide covers the four faucet families you will meet — compression, ball, cartridge, and ceramic disc — with the shut-off, disassembly, and reseal sequence for each. You will identify your faucet type in seconds, buy exactly the right washer or cartridge on the first trip, and reassemble without cross-threading or overtightening. Pair it with our unclog drain guide and caulking guide for a full sink-basin refresh, and call a plumber promptly if you find corroded supply lines, frozen shutoffs, or water inside the wall.",
        ]}
        sources="Sources: EPA WaterSense leak data, manufacturer repair manuals, 2026 U.S. cost averages"
        sections={[
          {
            h2: "Which type of faucet is dripping?",
            paragraphs: [
              "Identify the faucet before buying parts, because each family seals differently. Compression faucets have separate hot and cold handles you twist multiple turns; a rubber washer on a stem end presses onto a metal seat, and the washer's wear causes the drip. Ball faucets are single-handle kitchen veterans with a slotted cap — a rotating slotted ball with spring-loaded rubber seats inside, and worn seats and springs leak. Cartridge faucets, single or double handle, hide a plastic or brass sleeve that mixes flow; scored O-rings and cartridges drip or stiffen. Ceramic disc faucets, the modern single-lever type, use two near-indestructible discs, so drips usually mean cracked discs or failed inlet seals after grit intrusion.",
              "A 30-second diagnosis narrows it further. Drips from the spout with handles fully closed point to the washer, seats, or cartridge. Leaks around the handle or base when running point to O-rings and bonnet packing. Weak flow plus dripping suggests a clogged aerator compounding the problem — unscrew it, rinse the screen, and retest before tearing into the body. Photograph the faucet from front and top, note any brand stamp under the handle or on the escutcheon plate, and shut both stop valves under the sink before touching a wrench.",
            ],
            table: {
              headers: ["Faucet type", "How to spot it", "Usual drip culprit", "Part cost"],
              rows: [
                ["Compression", "Two twist handles", "Worn washer / seat", "$3–$10"],
                ["Ball (single handle)", "Slotted dome cap", "Seats + springs", "$5–$15 kit"],
                ["Cartridge", "Single/double, 1/4 turn", "Scored cartridge / O-ring", "$15–$45"],
                ["Ceramic disc", "Single lever, smooth", "Cracked disc / inlet seal", "$20–$60"],
              ],
            },
          },
          {
            h2: "What tools and parts should you gather first?",
            paragraphs: [
              "Faucet work needs modest tools but rewards organization. Gather an adjustable wrench, basin wrench or channel-lock pliers for tight supply nuts, Phillips and flat screwdrivers, an Allen key set for handle set-screws, plumber's grease, white vinegar and an old toothbrush for mineral deposits, and a towel plus a small bucket for residual water. A headlamp or clip light turns the dark cabinet into a visible workspace. Wrap chrome nuts with a cloth or masking tape before gripping them so wrench jaws never bite finish.",
              "Buy parts after identification, not before. Bring the old washer, O-ring, or cartridge to the store for exact matching, since same-brand cartridges vary by model year and spline count. Washer assortments cost a few dollars and cover compression repairs; brand-specific cartridges run $15 to $45; seat-dressing tools that resurface pitted brass seats cost $10 to $15 and rescue faucets new washers alone cannot fix. Teflon tape reseals threaded supply connections on reassembly. Keep every screw and clip in a muffin tin in removal order — faucet parts are small, and a lost pivot pin ends the project until the store reopens.",
            ],
            checkHeading: "Under-sink kit checklist",
            bullets: [
              "Adjustable wrench, channel-locks, screwdrivers, Allen keys, headlamp",
              "Exact-match washer, O-ring, or cartridge plus plumber's grease and Teflon tape",
              "White vinegar, toothbrush, towel, bucket, and cloth to protect chrome",
              "Muffin tin or tray for screws and clips in removal order",
            ],
          },
          {
            h2: "How do you shut off water without flooding the cabinet?",
            paragraphs: [
              "Water control is the whole safety system for faucet repair. Turn both oval stop valves under the sink clockwise until snug — righty-tighty — then open the faucet to confirm flow dies and pressure vents. Stuff the drain with a rag so dropped screws never vanish into the trap. Place the towel and bucket under the work zone because supply lines and the faucet body hold residual water that drains when cracked open. Test by leaving the faucet open for a minute; a persistent stream means a stop valve is passing and needs replacing before you proceed.",
              "When stops are frozen, missing, or pass water, escalate calmly to the home's main shutoff, usually near the meter or where the supply enters, and warn the household before closing it. Never force a frozen stop with a cheater bar — the compression fitting behind it can twist off and convert a drip into a geyser. After the main is off, open the lowest faucet in the house to drain pressure, then work quickly and keep the bucket handy. If supply lines look green with corrosion, braided jackets frayed, or valves weep at the stem, stop and schedule a plumber; those parts fail catastrophically when disturbed.",
            ],
          },
          {
            h2: "How do you replace washers, seats, and cartridges?",
            paragraphs: [
              "With water off, the repair follows one rhythm: expose, extract, match, install, test. Pop the handle cap, remove the handle screw, and lift the handle; unscrew the bonnet or retaining nut to expose the stem or cartridge. For compression faucets, remove the stem, swap the beveled washer on its end screw, and inspect the brass seat inside the body — rough or grooved seats chew new washers in weeks, so resurface with a seat-dressing tool or replace a removable seat. For ball faucets, lift the cam, ball, and both seat-spring assemblies, dropping in the kit's new seats with springs legs-down. For cartridge and ceramic disc types, note orientation carefully, pull the old unit straight out with pliers, grease the new O-rings lightly, and slide the replacement home until it seats with a click.",
              "Reassemble in reverse without gorilla force — brass threads cross-thread easily and overtightened bonnets bind handles. Hand-start every threaded part two full turns before wrenching, snug supply connections with Teflon tape where threads seal, and open the stops slowly while watching every joint with a dry finger and a flashlight. Run hot and cold separately, swing side-sprayers and pull-downs through their full motion, and check below with fresh dry paper towels that reveal even slow weeps. A repair that holds dry through five minutes of cycling and an overnight paper-towel test is done; persistent seepage means a missed seat nick or a hairline body crack, and the faucet gets replaced rather than patched again.",
            ],
          },
          {
            h2: "When should you replace the faucet instead of repairing it?",
            paragraphs: [
              "Repair stops making sense at three thresholds. First, parts extinction: faucets over 20 years old or from defunct brands often have no cartridges available, and two failed parts hunts cost more time than a $50 to $150 replacement. Second, body damage: green crust through chrome, pitted spouts, cracked castings, or seats that will not dress smooth mean the metal itself is done. Third, stacked failures: a faucet needing cartridge, supply lines, and stop valves together justifies full renewal with modern braided supplies and quarter-turn stops in one visit.",
              "Replacement costs stay friendly DIY at $50 to $300 for the faucet plus $15 to $30 for supplies, against $150 to $350 professionally installed, region-dependent. Choose replacement faucets with available cartridges, standard 3-hole or single-hole footprints matching your sink, and WaterSense-labeled 1.2-gallon-per-minute flow that cuts use without weak rinsing, per EPA guidance. While the basin is apart, refresh the drain and seal with our unclog drain guide and caulking guide so the whole sink performs like new.",
            ],
            table: {
              headers: ["Decision", "Repair it", "Replace it"],
              rows: [
                ["Age / parts", "Under 15 yrs, parts in stock", "Obsolete, 2+ failed hunts"],
                ["Body condition", "Sound metal, smooth seats", "Corrosion, cracks, pitted seats"],
                ["Cost math", "Part under $45", "Stacked failures near new price"],
                ["Water savings", "Aerator refresh suffices", "Upgrade to WaterSense 1.2 gpm"],
              ],
            },
          },
        ]}
        steps={[
          { title: "Shut water and plug the drain", body: "Close both under-sink stops clockwise, open the faucet to verify zero flow and vent pressure, stuff the drain with a rag, and lay towel and bucket below." },
          { title: "Remove handle and expose the works", body: "Pop the decorative cap, remove the handle screw or Allen set-screw, lift the handle, then unscrew the bonnet or retaining nut to expose stem or cartridge." },
          { title: "Extract the worn seal", body: "Pull the stem, ball assembly, or cartridge straight out. Photograph orientation, bag small clips in order, and bring the worn part for exact store matching." },
          { title: "Clean seats and passages", body: "Soak mineral crust in white vinegar, scrub with a toothbrush, dress pitted brass seats smooth, and wipe the body interior clean before new parts enter." },
          { title: "Install the new part greased", body: "Lightly grease new O-rings with plumber's grease, slide the cartridge or stem home in the photographed orientation, and hand-start all threads before snugging." },
          { title: "Reassemble gently", body: "Reverse the teardown, tightening bonnets and supply nuts firmly but not brutally. Protect chrome with cloth under wrench jaws and align handles square." },
          { title: "Pressure-test every joint", body: "Open stops slowly, run hot and cold separately through full motions, and check all joints with dry fingers and fresh paper towels for five minutes." },
        ]}
        stepsHeading="How do you fix a leaky faucet in 7 steps?"
        faqs={faqs}
        outboundLinks={[
          { href: "https://www.epa.gov/watersense", label: "EPA WaterSense efficiency" },
          { href: "https://www.cpsc.gov", label: "CPSC home safety guidance" },
        ]}
        internalLinks={[
          { href: "/unclog-drain-guide", label: "unclog drain guide" },
          { href: "/caulking-guide", label: "caulking guide" },
          { href: "/water-heater-maintenance", label: "water-heater maintenance" },
          { href: "/spring-home-maintenance-checklist", label: "spring checklist" },
        ]}
        closing={[
          "One careful hour — water off, part matched, seats cleaned, joints tested — ends the drip that has been taxing your bill and your patience. Keep the part number taped inside the cabinet and the aerator on a yearly rinse schedule, and the faucet serves quietly for another decade.",
          "Costs are region-dependent ranges from 2026 U.S. averages. For water-efficiency benchmarks see EPA WaterSense at epa.gov/watersense, and if supply lines, stops, or wall pipes look compromised, close the main and call a licensed plumber rather than forcing the repair.",
        ]}
      />
    </>
  );
}
