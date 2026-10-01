import type { Metadata } from "next";
import ShopArticle from "@/components/ShopArticle";
import { faqJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gutter Cleaning: Safe Ladder & Downspout Tips",
  description:
    "Gutter cleaning twice a year stops fascia rot and basement floods. Master ladder safety, scoop order, and downspout flushes. Stop costly overflows starting now!",
  alternates: { canonical: "https://home.loanpaylogic.com/gutter-cleaning-guide" },
  openGraph: {
    type: "article",
    url: "https://home.loanpaylogic.com/gutter-cleaning-guide",
    siteName: "LoanPay Home",
    title: "Gutter Cleaning: Safe Ladder & Downspout Tips",
    description:
      "Gutter cleaning twice a year stops fascia rot and basement floods. Master ladder safety, scoop order, and downspout flushes. Stop costly overflows starting now!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gutter Cleaning: Safe Ladder & Downspout Tips",
    description:
      "Gutter cleaning twice a year stops fascia rot and basement floods. Master ladder safety, scoop order, and downspout flushes. Stop costly overflows starting now!",
  },
};

const faqs = [
  {
    q: "How much does gutter cleaning cost?",
    a: "DIY gutter cleaning costs $0 to $40 with a ladder, gloves, scoop, and hose you mostly own. Professional cleaning runs $100 to $250 for a single-story home and $150 to $350 for two stories, region-dependent. Gutter guard installation costs $600 to $2,000 professionally but cuts cleaning to occasional rinses.",
  },
  {
    q: "How often should gutters be cleaned?",
    a: "Clean gutters twice yearly — late spring after seed drop and late fall after leaves fall — plus after major storms that dump branches. Pine-needle and oak-catkin homes need quarterly attention. Guards stretch intervals but never eliminate checks, since fine grit still settles and downspouts still clog.",
  },
  {
    q: "How do you clean gutters without a ladder?",
    a: "Use telescoping gutter wands and wet-dry vacuum kits from the ground for single-story gutters, accepting slower progress and blind spots at elbows. Hire pros for two-story heights, steep slopes, or any reach requiring overextension. No gadget justifies a fall — ladders with spotters or professionals handle everything above comfortable reach.",
  },
  {
    q: "Why do gutters overflow in heavy rain?",
    a: "Overflows come from clogged downspout outlets and elbows, gutters pitched wrong so water pools away from outlets, undersized 2x3 downspouts on big roofs, or too few downspouts for the watershed. Clear outlets first, verify quarter-inch-per-10-feet slope toward outlets, then upsize or add downspouts before blaming rainfall intensity.",
  },
  {
    q: "Are gutter guards worth the money?",
    a: "Micro-mesh guards worth $600 to $2,000 professionally installed pay back on two-story, heavily treed homes by cutting $150 to $350 cleanings to occasional maintenance. They block leaves but still admit pine needles and grit that need rinsing. Cheap snap-in screens and brushes often worsen clogs; invest in screwed micro-mesh or skip guards and keep the twice-yearly ladder rhythm.",
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)).replace(/</g, "\u003c") }} />
      <div className="hero-bay">
        <span className="kicker">Outdoor Bay 01</span>
        <h1>Gutter Cleaning <span className="accent">Without the Fall</span></h1>
        <p className="lede">
          Clean gutters throw roof water clear of the foundation. Clogged ones
          rot fascia, flood basements, and breed mosquitoes. Twice a year, in
          this order.
        </p>
      </div>
      <ShopArticle
        kicker="Skill level: beginner · Half-day · $0–$40 DIY"
        intro={[
          "Gutter cleaning earns its place on every maintenance calendar because the failure mode is foundation water — the most expensive moisture in homeownership. A 1,500-square-foot roof sheds nearly 1,000 gallons in a single inch of rain, and gutters with clear downspouts are the only system routing that deluge away from siding, basements, and slabs. Clogged troughs overflow at the fascia, rot wood, stain siding, erode grade, and pool against foundations where hydrostatic pressure finds every crack. Twice-yearly cleaning costs $0 to $40 DIY or $100 to $350 hired, region-dependent — trivial beside the five-figure excavation a chronic overflow invites.",
          "This guide runs the safe ladder-first sequence: setup and spotter rules, scoop-toward-outlet technique, downspout disassembly and flushing, slope checks, and guard decisions for treed lots. Ladder falls injure more DIYers than any tool, so the safety callout governs every climb. Pair the rhythm with our fall and spring home maintenance checklists, and extend water control with weatherproofing windows and doors.",
        ]}
        sources="Sources: ladder safety guidance, EPA moisture-control advice, 2026 U.S. cost averages"
        safety="Ladder falls cause severe injuries yearly. Use a sturdy extension ladder on level ground, maintain three points of contact, never overreach sideways, and keep a spotter footing the ladder. This is general education, not professional advice; hire insured pros for two-story heights, steep roofs, or any setup that feels unstable. See our disclaimer."
        sections={[
          {
            h2: "When should gutters be cleaned each year?",
            paragraphs: [
              "Twice yearly anchors the schedule: late spring after maple seeds, oak catkins, and blossom drop, and late fall after leaves finish but before freeze locks debris into ice dams. Pine-needle lots and storm corridors add quarterly passes since needles mat into waterproof thatch and branches wedge outlets overnight. After every major windstorm, walk the perimeter checking for overflowing corners, tiger-strip siding stains, and splash craters in mulch that mark chronic spill points.",
              "Watch the house, not just the calendar. Seedlings sprouting from troughs, mosquitoes breeding in standing sections, and paint peeling on fascia boards all signal overdue cleaning. Guards delay but never cancel inspection — lift sections yearly to verify grit has not cemented beneath mesh. Log each cleaning with photos of outlets and corners so year-over-year comparisons reveal slope drift and hanger fatigue early.",
            ],
          },
          {
            h2: "What ladder setup keeps gutter day safe?",
            paragraphs: [
              "Ladder discipline is the job: a fiberglass or aluminum extension ladder rated for your weight plus 10 pounds of debris, set at a 4-to-1 angle — one foot out per four feet up — on firm level ground with leg levelers on slopes. Extend three rungs above the gutter line for a handhold, face the ladder fully with three points of contact, and keep hips inside the rails rather than leaning sideways; reposition the ladder instead of reaching. A spotter foots the base, manages the hose, and calls emergency services if anything goes wrong.",
              "Electrical and roof awareness complete the setup. Keep aluminum ladders 10-plus feet from service drops and never touch lines with tools, hoses, or the ladder itself. Stay off roofs steeper than 4-in-12 without proper gear, never step on wet or mossy gutter-adjacent shingles, and wear grippy shoes, gloves, glasses, and long sleeves against hidden wasp nests and sharp hangers. If heights, slopes, or power lines make any setup uneasy, the $100 to $350 pro visit is the correct tool.",
            ],
            checkHeading: "Ladder safety checklist",
            bullets: [
              "Rated extension ladder at 4-to-1 angle, 3 rungs above gutter, level firm footing",
              "Spotter footing the base, hips inside rails, reposition instead of reaching",
              "10-plus feet from power lines, dry roof only, wasp check before scooping",
              "Gloves, glasses, grippy shoes; phone accessible; stop when uneasy and hire out",
            ],
          },
          {
            h2: "How do you scoop and flush gutters properly?",
            paragraphs: [
              "Work toward outlets, not randomly: start at the end opposite the downspout and scoop debris forward in arm's-length sections, dropping it to a tarp below rather than packing it toward the outlet. A plastic gutter scoop or garden trowel moves wet mats fastest; a putty knife flicks compacted grit from seams. Bag as you go so wind never redistributes the pile across clean siding. Once troughs run clear, hose-flush from the far end toward the outlet with moderate pressure, watching flow speed reveal hidden slope problems as pooling sections.",
              "Downspouts clog at elbows and underground transitions, so test each with full hose flow at the top. Weak exit flow means disassembly: pop the elbow screws, clear the packed plug — usually a fist of shingle grit and leaves — reassemble with fresh screws, and retest. Underground drains that back up need a plumber's snake or a drain pro, not more hose pressure that floods window wells. Finish by verifying every joint drips only at its outlet during the flush test.",
            ],
          },
          {
            h2: "How do you fix slope, hangers, and leaks?",
            paragraphs: [
              "Standing water between outlets exposes slope failure: gutters need roughly a quarter inch of fall per 10 feet toward outlets. Check with a level during the flush, then rehang by loosening hanger screws, resetting the run line with a string, and refastening into solid fascia — rotted fascia gets replaced first since screws in punky wood pull out by next season. Spikes that walked out upgrade to hidden hanger brackets screwed through the fascia every 24 to 32 inches. Re-seal leaking end caps and miter joints with gutter sealant on dry metal after wire-brushing old beads.",
              "Size problems show in storms, not sunshine. Overflows at outlets during cloudbursts mean 2x3 downspouts undersized for the watershed — upgrade to 3x4 outlets and elbows or add a second downspout at the far end. Splash blocks must kick water 3-plus feet from the foundation; buried extensions carry farther but need leaf filters at the top. Chronic basement dampness after gutter fixes points to grading and drainage beyond troughs — extend the water-control plan before finishing interiors.",
            ],
            table: {
              headers: ["Symptom", "Cause", "Fix"],
              rows: [
                ["Standing water mid-run", "Lost slope / sagging hangers", "Reset 1/4-in per 10 ft, new hangers"],
                ["Overflow at outlet in rain", "Clogged or undersized downspout", "Clear, upsize to 3x4 or add run"],
                ["Drips at joints/caps", "Failed sealant", "Wire-brush, reseal dry"],
                ["Splash at foundation", "Short discharge", "Extend 3+ ft, bury with filter"],
              ],
            },
          },
          {
            h2: "When should you replace gutters instead of cleaning them?",
            paragraphs: [
              "Cleaning maintains sound troughs; replacement rescues failed ones, and the line sits at structural decay. Replace when seams split across multiple joints despite resealing, hangers pull from rotted fascia along whole runs, troughs sag between every bracket from age-fatigued aluminum, or rust perforates steel sections. Hail-dented runs that hold water in every dent and gutters undersized for the roof watershed — chronic overflows after full clearing and slope correction — also graduate to replacement rather than another season of ladders.",
              "Seamless aluminum replacement costs $4 to $12 per linear foot installed, or $800 to $2,500 for a typical home, region-dependent, with copper at $15 to $30 per foot for heritage looks. Get three quotes specifying gauge — 0.032-inch aluminum resists denting far better than 0.027 — hanger spacing, downspout sizing with 3x4 upgrades, and fascia replacement where rot hides. Oversized 6-inch troughs with 3x4 outlets suit steep or large roofs that overwhelm standard 5-inch runs in cloudbursts.",
              "Time replacement for dry shoulder seasons when crews schedule fast and sealant cures cleanly. Pair new troughs with micro-mesh guards from day one so the first autumn never packs them, extend discharge 3-plus feet with buried lines and leaf filters, and photograph the fresh slope lines for the home file. New gutters on sound fascia with correct sizing end the overflow era that old sectional runs normalized.",
            ],
          },
          {
            h2: "Are gutter guards worth installing?",
            paragraphs: [
              "Guards pay on treed two-story homes and disappoint on simple ranches you can reach easily. Screwed-in micro-mesh at $600 to $2,000 professionally installed blocks leaves and seeds while admitting water, cutting $150 to $350 cleanings to biennial rinses and outlet checks. Snap-in vinyl screens at $100 to $300 DIY sag, lift in wind, and trap debris at their edges; foam inserts and brush guards clog with grit and needles until they become the blockage. Match the guard to the debris: mesh for leaves and seeds, nothing fully solves pine needles without occasional brushing.",
              "Install guards only on sound, correctly sloped gutters — covering failing troughs hides the rot schedule. Keep the twice-yearly inspection habit regardless, since shingle grit accumulates atop mesh and downspouts still plug. Budget the math over five years: two annual pro cleanings at $200 each total $2,000, making $1,200 mesh pay back with convenience included. DIY-accessible ranches often skip guards and keep the satisfying ladder rhythm with our seasonal checklists instead.",
            ],
            table: {
              headers: ["Guard type", "Installed cost", "Verdict"],
              rows: [
                ["Screwed micro-mesh", "$600–$2,000", "Worth it on treed / tall homes"],
                ["Snap-in screens", "$100–$300 DIY", "Often worsens edge clogs"],
                ["Foam / brush inserts", "$150–$400", "Traps grit, needs removal"],
                ["No guard + 2x cleaning", "$0–$350/yr", "Best for reachable ranches"],
              ],
            },
          },
        ]}
        steps={[
          { title: "Set ladder and spotter", body: "Place the rated ladder at 4-to-1 on firm ground, three rungs above the gutter, spotter footing, clear of power lines and wasp nests." },
          { title: "Scoop toward outlets", body: "Start opposite the downspout, scoop forward in arm-length sections onto a tarp, and flick compacted grit from seams with a putty knife." },
          { title: "Clear downspout plugs", body: "Pop elbow screws, extract packed plugs by hand, reassemble with fresh screws, and confirm full hose flow top to bottom." },
          { title: "Flush and read water", body: "Hose-flush each run toward outlets, watching for pooling that marks slope loss and joint drips that need resealing." },
          { title: "Reset slope and hangers", body: "Restring fall at a quarter inch per 10 feet, replace failed hangers into sound fascia, and reseal joints on dry metal." },
          { title: "Extend discharge", body: "Aim splash blocks 3-plus feet from grade, add buried extensions with leaf filters where basements stay damp." },
          { title: "Log and schedule", body: "Photograph outlets and corners, note guard condition, and book the next seasonal pass on the calendar." },
        ]}
        stepsHeading="How do you clean gutters in 7 steps?"
        faqs={faqs}
        outboundLinks={[
          { href: "https://www.cpsc.gov", label: "CPSC ladder safety guidance" },
          { href: "https://www.epa.gov/mold", label: "EPA moisture protection advice" },
        ]}
        internalLinks={[
          { href: "/fall-home-maintenance-checklist", label: "fall checklist" },
          { href: "/spring-home-maintenance-checklist", label: "spring checklist" },
          { href: "/weatherproofing-windows-doors", label: "weatherproofing windows and doors" },
          { href: "/lawn-care-basics", label: "lawn care basics" },
        ]}
        closing={[
          "Twice a year, ladder safe, scoop toward outlets, flush honestly, and discharge far from the foundation. That rhythm keeps a thousand gallons per storm exactly where it belongs — anywhere but your basement.",
          "Costs are region-dependent ranges from 2026 U.S. averages. For ladder safety principles see CPSC guidance at cpsc.gov, and for moisture protection concepts review EPA advice at epa.gov/mold.",
        ]}
      />
    </>
  );
}
