import type { Metadata } from "next";
import ShopArticle from "@/components/ShopArticle";
import { faqJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Weatherproof Windows & Doors to Cut Drafts",
  description:
    "Weatherproof windows and doors to stop drafts and cut 10–20 percent off energy bills. Caulk, weatherstrip, sweeps, and film ranked. Start sealing now!",
  alternates: { canonical: "https://home.loanpaylogic.com/weatherproofing-windows-doors" },
  openGraph: {
    type: "article",
    url: "https://home.loanpaylogic.com/weatherproofing-windows-doors",
    siteName: "LoanPay Home",
    title: "Weatherproof Windows & Doors to Cut Drafts",
    description:
      "Weatherproof windows and doors to stop drafts and cut 10–20 percent off energy bills. Caulk, weatherstrip, sweeps, and film ranked. Start sealing now!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Weatherproof Windows & Doors to Cut Drafts",
    description:
      "Weatherproof windows and doors to stop drafts and cut 10–20 percent off energy bills. Caulk, weatherstrip, sweeps, and film ranked. Start sealing now!",
  },
};

const faqs = [
  {
    q: "How much does it cost to weatherproof windows and doors?",
    a: "DIY weatherproofing costs $30 to $120 for a typical home: $5 to $12 per tube of exterior caulk, $3 to $10 per window for V-strip or foam tape, $8 to $15 per door sweep, and $15 to $40 for window film kits. Professional air-sealing with blower-door verification runs $300 to $800, region-dependent. Sealing typically saves 10 to 20 percent on heating and cooling bills per DOE estimates.",
  },
  {
    q: "How do I find air leaks around windows?",
    a: "On a windy day hold a lit incense stick or thin tissue around window and door perimeters and watch for flutter, or feel for cool streams with a damp hand. Check outdoors for cracked caulk, daylight visible around closed doors, and rattling sashes. A professional blower-door test at $200 to $400 quantifies whole-house leakage and ranks fixes by impact.",
  },
  {
    q: "Should I caulk or weatherstrip a drafty window?",
    a: "Caulk seals fixed joints that never move — trim-to-siding, frame-to-wall gaps — while weatherstripping seals operable meetings between sash and frame that must still open. Using caulk on moving sashes glues windows shut; using foam tape on exterior trim fails within a season. Diagnose the joint type first, then match the material.",
  },
  {
    q: "Does window film really help with drafts?",
    a: "Shrink-film interior kits add an insulating dead-air layer that noticeably cuts drafts and condensation on single-pane and leaky double-pane windows for $3 to $8 per window. They do not fix air leaks around frames — pair film with caulk and weatherstripping for full effect. Remove film gently in spring to protect finishes.",
  },
  {
    q: "When should windows be replaced instead of sealed?",
    a: "Replace when frames rot, sashes no longer operate, seals fog permanently between panes, or single-pane glass dominates a cold climate despite good sealing. Replacement windows cost $300 to $1,000 each installed, region-dependent, with paybacks measured in decades — so seal aggressively first and replace for comfort, function, and rot rather than quick savings.",
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)).replace(/</g, "\u003c") }} />
      <div className="hero-bay">
        <span className="kicker">Outdoor Bay 02</span>
        <h1>Weatherproof Windows &amp; Doors <span className="accent">Against Drafts</span></h1>
        <p className="lede">
          Drafts are paid-for heat escaping through predictable gaps. Find
          every leak, seal fixed joints with caulk, moving joints with
          weatherstrip, and keep 10 to 20 percent of your energy bills.
        </p>
      </div>
      <ShopArticle
        kicker="Skill level: beginner · Weekend · $30–$120 DIY"
        intro={[
          "Weatherproofing windows and doors is the fastest energy payback in the house because air leaks waste 10 to 20 percent of heating and cooling energy through gaps you can seal in a weekend for $30 to $120. The Department of Energy ranks air sealing among the highest-return improvements, ahead of most equipment upgrades, since every cubic foot of escaped conditioned air gets replaced by unconditioned infiltration working the furnace or AC harder. The work splits cleanly: exterior caulk for fixed trim joints, weatherstripping for operable sashes and doors, sweeps for thresholds, and film for single-pane glass — each matched to its joint type, none interchangeable.",
          "This guide teaches leak detection with incense and tissue, material selection by joint, installation that survives seasons of movement, and the replace-versus-seal math for aging windows. You will learn why foam backer rod precedes wide-gap caulk, which weatherstrip profiles last a decade, and how door sweeps and thresholds work as a system. Pair it with our caulking guide for bead technique and the HVAC filter guide so sealed air stays clean.",
        ]}
        sources="Sources: DOE air-sealing guidance, ENERGY STAR window advice, 2026 U.S. cost averages"
        sections={[
          {
            h2: "Where do windows and doors actually leak?",
            paragraphs: [
              "Leaks concentrate at six predictable points: exterior trim-to-siding joints with cracked caulk, sash-to-frame meetings on operable windows, meeting rails on double-hungs, door perimeters with compressed weatherstrip, thresholds with daylight gaps, and utility penetrations where pipes and cables pierce walls near openings. Stack effect drives the pattern — warm air exits high gaps while cold air enters low ones — so top-floor windows and ground-level doors leak hardest in winter. A windy-day incense test marks each leak precisely: smoke flutter maps the repair list room by room.",
              "Prioritize by leak size and room use: a quarter-inch door gap moves more air than ten hairline window cracks, and bedrooms with night drafts deserve first attention for comfort and sleep. Note condensation patterns too — interior fogging on single panes confirms cold surfaces that film kits improve, while fog between double panes means failed seals that no caulk fixes. Photograph every gap with a coin for scale so material widths match reality at the store.",
            ],
          },
          {
            h2: "Which sealant fits each joint type?",
            paragraphs: [
              "Fixed exterior joints want elastomeric exterior caulk or silicone rated for plus-or-minus 25 percent movement and UV exposure at $5 to $12 per tube. Operable window sashes want V-strip tension seals or compressible foam tape at $3 to $10 per window — V-strip lasts 5 to 10 years in the sash channels while foam compresses permanently within two. Door perimeters take kerf-in foam or silicone-bulb weatherstrip pressed into the frame slot, or adhesive-backed where no kerf exists. Thresholds pair adjustable sills with door-bottom sweeps so the two compress without dragging.",
              "Wide gaps over half an inch need foam backer rod before caulk so the bead flexes in an hourglass profile instead of splitting as a deep plug. Mortar-line gaps on brick veneer take mortar-colored sealant; dissimilar materials like vinyl-to-wood take high-movement silicone. Indoors, paintable acrylic seals trim-to-wall gaps before repainting per our painting room guide. Buy one extra tube and one extra weatherstrip roll — mid-job store runs kill momentum.",
            ],
            table: {
              headers: ["Joint", "Material", "Life"],
              rows: [
                ["Exterior trim fixed gaps", "Exterior silicone / elastomeric caulk", "10–20 yrs"],
                ["Operable sash channels", "V-strip tension seal", "5–10 yrs"],
                ["Door perimeter", "Kerf-in foam / silicone bulb", "5–8 yrs"],
                ["Door bottom", "Sweep + adjustable threshold", "3–7 yrs"],
                ["Single-pane glass", "Shrink film kit", "1 season"],
              ],
            },
          },
          {
            h2: "How do you install weatherstripping that lasts?",
            paragraphs: [
              "Lasting installs start with bare clean channels: pull failed foam, scrape adhesive with mineral spirits, and dry fully so new adhesive bonds to substrate rather than residue. V-strip folds into sash channels with the open V facing the incoming air, cut to exact length with no stretching — stretched strips retract and gap by spring. Kerf-in door seals press fully into slots with firm thumb pressure along the whole run; adhesive-backed types need 24 cure hours above 50 degrees before door closure compresses them. Test closure after each run: the door should latch with slight compression resistance, never force.",
              "Sweeps and thresholds tune as a pair: mount the sweep so its fins just kiss the threshold with the door closed, trimming rigid types to clear rugs by an eighth inch. Adjustable thresholds rise via screws to meet the sweep without daylight showing. Operate every window and door through full motion after install — sticky sashes get silicone spray on tracks, never oil that gums. Log the profile and brand per opening for exact-match replacement years later.",
            ],
            checkHeading: "Install checklist",
            bullets: [
              "Channels stripped, solvent-cleaned, and bone-dry before new adhesive",
              "V-strip cut exact, kerf seals fully seated, sweeps kissing thresholds",
              "Closure tested on every unit: latches with light compression, full motion smooth",
              " Profiles logged per opening; 24-hour adhesive cure before hard use",
            ],
          },
          {
            h2: "How much energy and money does sealing save?",
            paragraphs: [
              "DOE modeling credits comprehensive air sealing plus insulation with 10 to 20 percent heating and cooling savings, with drafty older homes at the high end. On a $200 monthly average energy bill, that is $240 to $480 yearly for a $30 to $120 DIY investment — payback inside a single heating season. Professional air sealing with blower-door verification at $300 to $800 finds attic bypasses and rim-joist leaks DIY kits miss, stacking further savings. All figures region-dependent on climate and fuel prices.",
              "Comfort returns arrive before bill returns: bedrooms hold temperature overnight, floors near doors warm up, and furnace cycling shortens audibly. Window film kits at $3 to $8 per opening add perceptible draft relief on single panes the first evening. Track results with pre- and post-project gas and electric bills across similar weather months, and roll savings into the next envelope project — attic air sealing or insulation — per our fall home maintenance checklist order.",
            ],
          },
          {
            h2: "How do you seal attics and basements beyond windows?",
            paragraphs: [
              "Windows and doors are the visible leaks; attics and basements move more air invisibly through bypasses that dwarf window cracks. In the attic, seal plumbing and wiring penetrations, chimney chases with metal flashing plus fire-rated caulk, recessed-light boxes with rated covers, and the attic hatch with weatherstrip plus an insulated cap — these bypasses pour heated air into the attic all winter, feeding ice dams and waste simultaneously. Blown insulation over the sealed floor then performs at its rated R-value instead of filtering escaping heat.",
              "Basements and crawlspaces leak at rim joists where framing meets foundation: cut rigid foam to fit each bay, seal edges with canned spray foam, and insulate the walls rather than the ceiling where the space stays semi-conditioned. Seal sill-plate-to-foundation gaps with sill sealant or caulk along the whole perimeter, and weatherstrip the basement door like an exterior door since it behaves as one. Sump pits get airtight covers with sealed pipe penetrations to block both air and radon pathways.",
              "Verify the whole-envelope work with a blower-door test at $200 to $400: the before-and-after air-changes reading quantifies every sealed bypass in one number and directs the next dollar precisely. Homes dropping from 7 air changes to 3 per hour feel transformed — quieter, less dusty, evenly heated — with window sealing as just one chapter. Log the test report in the home file beside the seasonal checklists so future buyers see verified performance rather than promises.",
            ],
          },
          {
            h2: "When should you replace windows instead?",
            paragraphs: [
              "Replacement earns its $300 to $1,000 per window installed cost on four triggers: rotted frames that no longer hold weatherstrip, sashes painted or warped permanently shut, fogged double-pane seals, and single-pane glass in harsh winters where comfort fails despite thorough sealing. Energy payback alone rarely justifies replacement — decades at typical savings — so decide on comfort, operation, rot, and noise, with energy as a bonus. Until then, aggressive sealing plus storms or film captures most of the practical gain.",
              "When replacing, specify U-factor and air-leakage ratings suited to the climate rather than brand prestige, and insist on proper flashing and low-expansion foam around new units — installation quality decides performance more than glass specs. Replace in shoulder seasons for scheduling ease, one elevation at a time to control cost. Keep the old weights-and-pulleys hardware photographed for historic homes, and repaint new exterior trim per our caulking and painting sequences.",
            ],
            table: {
              headers: ["Project", "DIY cost", "Pro cost"],
              rows: [
                ["Whole-house DIY sealing", "$30–$120", "—"],
                ["Pro air sealing + test", "—", "$300–$800"],
                ["Window film kits", "$15–$40", "—"],
                ["Full window replacement", "—", "$300–$1,000 each"],
              ],
            },
          },
        ]}
        steps={[
          { title: "Hunt every leak", body: "On a windy day run incense or tissue around all openings, mark flutters with tape, and photograph gaps with a coin for scale." },
          { title: "Match material to joint", body: "Assign exterior caulk to fixed joints, V-strip or foam to sashes, kerf seals to doors, sweeps to thresholds, and film to cold glass." },
          { title: "Prep channels bare", body: "Strip failed seals, solvent-clean adhesive ghosts, dry fully, and press backer rod into gaps over half an inch." },
          { title: "Seal fixed joints", body: "Caulk exterior trim lines in dry weather above 40 degrees, tooling smooth beads that bridge with flex to spare." },
          { title: "Fit moving seals", body: "Install V-strip, kerf seals, and sweeps cut exact with no stretch, testing latch compression and full motion on each unit." },
          { title: "Film the cold glass", body: "Apply shrink film airtight on single panes, shrinking drum-tight with heat, and verify draft relief that evening." },
          { title: "Verify and log", body: "Repeat the incense test, compare energy bills across similar months, and log profiles and dates for future replacement." },
        ]}
        stepsHeading="How do you weatherproof in 7 steps?"
        faqs={faqs}
        outboundLinks={[
          { href: "https://www.energy.gov/energysaver", label: "DOE air-sealing guidance" },
          { href: "https://www.energystar.gov", label: "ENERGY STAR window advice" },
        ]}
        internalLinks={[
          { href: "/caulking-guide", label: "caulking guide" },
          { href: "/fall-home-maintenance-checklist", label: "fall checklist" },
          { href: "/hvac-filter-guide", label: "HVAC filter guide" },
          { href: "/painting-room-guide", label: "painting a room guide" },
        ]}
        closing={[
          "Seal fixed joints, fit moving seals, sweep the thresholds, film the cold glass — then feel the difference the first windy night. Small gaps closed everywhere beat one expensive window replaced anywhere.",
          "Costs and savings are region-dependent ranges from 2026 U.S. averages. For air-sealing technique see the Department of Energy at energy.gov/energysaver and ENERGY STAR guidance at energystar.gov.",
        ]}
      />
    </>
  );
}
