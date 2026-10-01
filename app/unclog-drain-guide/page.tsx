import type { Metadata } from "next";
import ShopArticle from "@/components/ShopArticle";
import { faqJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Unclog a Drain: Plunger to Snake Guide",
  description:
    "Unclog a drain without chemicals: plunge with a true seal, pull hair, and snake branch clogs. DIY costs $0–$40. Get water flowing freely again today!",
  alternates: { canonical: "https://home.loanpaylogic.com/unclog-drain-guide" },
  openGraph: {
    type: "article",
    url: "https://home.loanpaylogic.com/unclog-drain-guide",
    siteName: "LoanPay Home",
    title: "Unclog a Drain: Plunger to Snake Guide",
    description:
      "Unclog a drain without chemicals: plunge with a true seal, pull hair, and snake branch clogs. DIY costs $0–$40. Get water flowing freely again today!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unclog a Drain: Plunger to Snake Guide",
    description:
      "Unclog a drain without chemicals: plunge with a true seal, pull hair, and snake branch clogs. DIY costs $0–$40. Get water flowing freely again today!",
  },
};

const faqs = [
  {
    q: "How much does it cost to unclog a drain?",
    a: "DIY drain clearing costs $0 to $40: free with a plunger and boiling-water discipline you already own, $5 to $15 for a plastic hair snake and enzyme treatment, or $25 to $40 for a 25-foot hand auger that lasts decades. A plumber's drain call runs $100 to $300 for a single fixture and $150 to $400 for a main-line auger, region-dependent. Recurring clogs every few months signal vent or line problems worth a professional camera inspection at $100 to $250.",
  },
  {
    q: "Why does my bathroom sink drain so slowly?",
    a: "Bathroom sinks slow because hair wraps the pop-up stopper and toothpaste, soap, and shaving residue cement around it into a watertight mat. The fix is mechanical: lift out the stopper, pull the hair mass with a plastic snake, scrub the stopper and pivot rod, and flush with very hot tap water. Enzymes maintain the result monthly, while chemical openers risk pipe and finish damage without removing the hair core.",
  },
  {
    q: "Is Drano bad for pipes and septic systems?",
    a: "Caustic and acid chemical openers generate heat and can soften PVC, craze older ABS, etch fixture finishes on splash, and kill the bacteria septic systems depend on. They also turn a later professional snaking into a chemical-hazard job. Mechanical removal with plungers, snakes, and trap cleaning clears clogs completely without those risks, so reserve chemicals as a last resort and never mix products.",
  },
  {
    q: "How do you use a drain snake without scratching?",
    a: "Feed the auger cable slowly with the drum locked only after the tip passes the trap bend, cranking steadily while pushing gently so the coiled tip navigates instead of gouging. Wrap chrome and porcelain with rags where the cable enters, keep the cable taut to avoid kinking, and retract slowly while wiping the cable. Run very hot water for two minutes after to flush the loosened debris past the trap.",
  },
  {
    q: "When should I call a plumber for a clogged drain?",
    a: "Call a plumber when multiple fixtures back up together, sewage smells or gurgling accompany the clog, water rises in a shower when a toilet flushes, or the same drain reclogs within weeks of clearing. Those patterns mean a branch or main-line blockage, vent obstruction, or root intrusion beyond hand tools. Stop plunging sewage backups yourself to avoid contamination, and keep children and pets from standing water until it is resolved.",
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)).replace(/</g, "\u003c") }} />
      <div className="hero-bay">
        <span className="kicker">Plumbing Bay 02</span>
        <h1>Unclog a Drain <span className="accent">Without Chemicals</span></h1>
        <p className="lede">
          Slow drains are hair, soap, and grease — not mysteries. Work the
          ladder from plunger to snake and clear nearly any fixture clog for
          under forty dollars.
        </p>
      </div>
      <ShopArticle
        kicker="Skill level: beginner · Under an hour · $0–$40 DIY"
        intro={[
          "Knowing how to unclog a drain mechanically saves a service call almost every time because fixture clogs live within the first few feet of pipe. Bathroom sinks choke on hair wrapped around the pop-up stopper, tubs on hair plus soap mats, kitchen sinks on grease-coated food films, and toilets on paper and object blockages — all reachable with a plunger, a $5 plastic snake, or a $30 hand auger. Chemical openers promise shortcuts but leave the hair core intact while risking pipes, finishes, and septic biology. The mechanical ladder in this guide clears the actual obstruction for $0 to $40 DIY versus $100 to $300 per plumber visit, region-dependent.",
          "You will learn the escalation professionals teach: protect finishes first, plunge with real technique, pull hair before pushing anything, snake with scratch-free handling, and clean the trap only when upstream methods fail. Each rung includes its stop rule so you never push a simple clog into a wall pipe or flood a cabinet. Keep our fix leaky faucet guide and caulking guide nearby for the full sink restoration, and learn the multi-fixture warning signs that mean the main line — not your plunger — owns the problem.",
        ]}
        sources="Sources: EPA WaterSense, manufacturer plumbing guidance, 2026 U.S. cost averages"
        sections={[
          {
            h2: "What causes slow drains in each fixture?",
            paragraphs: [
              "Clogs follow fixture habits. Bathroom sinks collect shed hair that lassos the pop-up stopper while toothpaste and shaving cream glue the wrap into a plug; flow slows over weeks until water stands. Tubs and showers add body oils and soap scum to the same hair base across a wider drain with a crossbar that catches everything. Kitchen sinks rarely see hair but build grease films that narrow the pipe until rice, coffee grounds, and fibrous peels lodge in the constriction — garbage disposals chop food without dissolving grease, so the film keeps growing. Toilets clog on excess paper, wipes falsely labeled flushable, and objects, lodging at the trapway's first bend.",
              "Confirm the clog's address before attacking it. A single slow fixture means the blockage sits in its trap or branch arm, fully DIY-able. A tub that gurgles when the toilet flushes, or a sink that bubbles as the washer drains, means air is fighting past a downstream obstruction affecting multiple fixtures — that belongs to a plumber with a longer auger and possibly a camera. Note the pattern, then start mechanical work at the troubled fixture with finishes protected and towels staged.",
            ],
            table: {
              headers: ["Fixture", "Typical clog", "First move"],
              rows: [
                ["Bathroom sink", "Hair + paste on stopper", "Pull stopper, snake hair out"],
                ["Tub / shower", "Hair + soap mat", "Remove cover, snake, hot flush"],
                ["Kitchen sink", "Grease + food film", "Plunge, trap clean, degrease"],
                ["Toilet", "Paper / object at trapway", "Flange plunger, closet auger"],
              ],
            },
          },
          {
            h2: "Which plungers and snakes do you actually need?",
            paragraphs: [
              "Two plungers cover the house: a flat cup plunger for sinks, tubs, and showers that seals on flat surfaces, and a flange plunger with the extended rubber lip for toilets that seals inside the bowl outlet. Using the wrong one is why plunging supposedly fails — the cup cannot seal a toilet throat and the flange folds wrong on a flat drain. A 20-inch plastic barbed hair snake costs a few dollars and pulls bathroom clogs no plunger can push; a 25-foot hand-crank drum auger at $25 to $40 reaches branch clogs past the trap. Enzyme treatments at $10 to $15 maintain clear lines monthly by digesting organic films.",
              "Skip the chemical aisle for routine clogs. Caustic openers heat-stress PVC, dull chrome on splash, and convert later pro snaking into a splash-hazard job, all without extracting the hair mat that re-clogs in weeks. A wet-dry vacuum is the honorable exception: sucking a toilet or sink blockage out from above clears objects chemicals never dissolve. Store the auger oiled and dry so the cable never rusts into a useless coil, and keep dedicated bathroom and kitchen snakes to avoid cross-contamination.",
            ],
            checkHeading: "Drain kit checklist",
            bullets: [
              "Flat cup plunger for sinks and tubs plus flange plunger for toilets",
              "Plastic hair snakes for bathrooms and 25-foot drum auger for branches",
              "Enzyme maintenance treatment, bucket, towels, rubber gloves, rags",
              "Wet-dry vacuum access for object blockages; no caustic chemicals stocked",
            ],
          },
          {
            h2: "How do you plunge a sink the right way?",
            paragraphs: [
              "Plunging works on hydraulics, and hydraulics demand a seal. For sinks, remove the stopper, stuff the overflow hole tightly with a wet rag so pressure cannot escape there, and run enough water to cover the plunger cup fully. Seat the cup flat over the drain, press to expel air, then drive 15 to 20 vigorous vertical strokes without breaking the seal — the alternating pressure and suction flexes the clog loose. Break the seal on a push stroke to let loosened debris wash, check flow, and repeat up to three cycles before escalating.",
              "Toilets need the flange version: extend the lip into the outlet, keep the bowl water at half-full (bail excess to a bucket to avoid splash), and plunge with controlled force since porcelain cracks under rage and wastewater splashes carry bacteria. Never plunge a drain immediately after pouring chemical opener — the backsplash burns. If three honest cycles change nothing, the clog is past plunger range or packed too densely, and the snake comes out rather than your frustration.",
            ],
          },
          {
            h2: "How do you snake a drain without damage?",
            paragraphs: [
              "Snaking is navigation, not ramming. For bathroom drains, the plastic barbed snake goes first: push gently past the stopper well, twist, and withdraw slowly to drag the hair mass out whole — repeat until the barbs come back clean, then flush with the hottest tap water for two minutes. For deeper clogs, feed the drum auger's coiled tip by hand past the trap bend before locking and cranking, advancing with gentle pressure while rotating steadily; the rotation walks the tip around bends instead of gouging them. When resistance firms, crank in place to chew the obstruction, advance inches at a time, then retract slowly while wiping the cable clean.",
              "Protect every finish the cable touches: rag-wrap chrome strainers and porcelain throats, keep the cable taut between drum and drain to prevent kinking loops, and never run a power auger as a beginner — hand cranks give the feedback that prevents pipe punctures. If the cable returns with black grease sheets, follow with enzyme treatment and a week of hot-water discipline rather than more force. Cable that refuses to advance at the same depth twice has found a hard bend, a broken pipe, or roots — stop and call for a camera inspection instead of drilling through the pipe wall.",
            ],
          },
          {
            h2: "How do you keep drains clear for good?",
            paragraphs: [
              "Prevention beats every tool because clogs are deposits with memories. Fit stainless mesh strainers over every tub and sink drain and empty them weekly — the two minutes beats the twenty-minute snake session. Never pour cooking grease down the kitchen sink; jar it, trash it, and wipe pans before washing. Run very hot tap water for 30 seconds after greasy dish sessions, dose bathroom lines with enzyme treatment monthly, and brush pop-up stoppers quarterly before the hair mat matures. In the kitchen, scrape plates fully, run disposals with cold water and full flow, and keep fibrous peels, rice, and coffee grounds out of the drain entirely.",
              "Watch for the patterns that maintenance cannot fix. A drain that slows again within weeks, gurgles from neighboring fixtures, or smells of sewer gas despite cleaning points to vent blockage, sagging pipe, or root intrusion — all plumber territory at $150 to $400 for line augering or $100 to $250 for camera diagnosis, region-dependent. Log each clog's date and fixture so the pattern is obvious at the third occurrence, and fold drain care into our spring home maintenance checklist and fall home maintenance checklist rhythms.",
            ],
            table: {
              headers: ["Method", "DIY cost", "Best for"],
              rows: [
                ["Plunger (right type)", "$0–$15 owned", "Soft fresh clogs near fixture"],
                ["Hair snake + enzymes", "$5–$15", "Bathroom hair mats, upkeep"],
                ["25-ft hand auger", "$25–$40", "Branch clogs past the trap"],
                ["Plumber visit", "$100–$300", "Multi-fixture or recurring clogs"],
              ],
            },
          },
        ]}
        steps={[
          { title: "Protect and prepare", body: "Lay towels, glove up, remove stoppers and strainer covers, and stuff sink overflows with a wet rag. Bail toilet bowls to half-full and keep a bucket within reach." },
          { title: "Plunge with a true seal", body: "Cover the cup fully with water, seat it airtight, and drive 15 to 20 vigorous strokes without breaking the seal. Repeat up to three cycles, checking flow between rounds." },
          { title: "Pull hair first", body: "Run the barbed plastic snake into bathroom drains, twist, and withdraw the whole hair mass. Repeat until barbs return clean, then flush two minutes of hottest tap water." },
          { title: "Auger past the trap", body: "Hand-feed the drum cable beyond the trap bend, lock, and crank forward with gentle pressure. Chew through resistance by cranking in place, advancing inches at a time." },
          { title: "Flush and verify", body: "Run hot water full-blast for two to three minutes watching drainage speed and listening for gurgles. Repeat the snake pass once if flow improves but still lags." },
          { title: "Dose enzymes for upkeep", body: "With flow restored, apply enzyme treatment per label overnight when drains rest. Strainers go back on every drain before the next shower or dish session." },
          { title: "Know the stop rule", body: "Escalate to a plumber for multi-fixture backups, sewage, same-drain recurrence within weeks, or cable that dead-ends at one depth. Log the pattern for the pro." },
        ]}
        stepsHeading="How do you clear a drain in 7 steps?"
        faqs={faqs}
        outboundLinks={[
          { href: "https://www.epa.gov/watersense", label: "EPA WaterSense fixture advice" },
          { href: "https://www.cpsc.gov", label: "CPSC chemical safety resources" },
        ]}
        internalLinks={[
          { href: "/fix-leaky-faucet", label: "fix a leaky faucet" },
          { href: "/caulking-guide", label: "caulking guide" },
          { href: "/spring-home-maintenance-checklist", label: "spring checklist" },
          { href: "/fall-home-maintenance-checklist", label: "fall checklist" },
        ]}
        closing={[
          "The ladder never changes: seal and plunge, pull the hair, snake with feel, maintain with enzymes. Master it once and every slow drain in the house becomes a twenty-minute errand instead of a service ticket.",
          "Costs are region-dependent ranges from 2026 U.S. averages. For water-saving fixture guidance see EPA WaterSense at epa.gov/watersense; for sewage backups or multi-fixture failures, stop DIY and call a licensed plumber immediately.",
        ]}
      />
    </>
  );
}
