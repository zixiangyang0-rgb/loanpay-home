import type { Metadata } from "next";
import ShopArticle from "@/components/ShopArticle";
import { faqJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Drywall Repair: Patch Holes Like a Pro",
  description:
    "Drywall repair that disappears means sizing holes, layering thin coats, and sanding in raking light. DIY costs $10–$60. Fix walls like a pro this weekend!",
  alternates: { canonical: "https://home.loanpaylogic.com/drywall-repair-guide" },
  openGraph: {
    type: "article",
    url: "https://home.loanpaylogic.com/drywall-repair-guide",
    siteName: "LoanPay Home",
    title: "Drywall Repair: Patch Holes Like a Pro",
    description:
      "Drywall repair that disappears means sizing holes, layering thin coats, and sanding in raking light. DIY costs $10–$60. Fix walls like a pro this weekend!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drywall Repair: Patch Holes Like a Pro",
    description:
      "Drywall repair that disappears means sizing holes, layering thin coats, and sanding in raking light. DIY costs $10–$60. Fix walls like a pro this weekend!",
  },
};

const faqs = [
  {
    q: "How much does drywall repair cost per hole?",
    a: "DIY drywall repair costs $10 to $25 for nail pops and small holes using spackle, tape, and a quart of paint, or $20 to $60 for large holes needing a patch panel, joint compound, and texture spray. A handyperson charges $75 to $200 per small patch and $200 to $500 for large or textured repairs, region-dependent. Full room resurfacing with skim coating runs $300 to $800 professionally.",
  },
  {
    q: "Can I use spackle for large drywall holes?",
    a: "No, lightweight spackle suits holes under 2 inches only; larger fills shrink, crack, and crumble under paint. Holes from 2 to 6 inches need self-adhesive mesh patches backed by setting compound, and holes over 6 inches need a screwed-in drywall panel with paper tape and layered joint compound. Matching the repair system to the hole size is what keeps patches invisible and crack-free.",
  },
  {
    q: "How many coats of joint compound does a patch need?",
    a: "Plan on three thin coats: a bed coat that embeds the tape, a fill coat that levels after 24 hours of drying, and a finish coat feathered 8 to 12 inches wide. Thin coats dry faster and sand easier than one thick coat, which cracks and takes days. Sand lightly between coats with 120-grit paper, wipe dust, and prime before painting so the patch does not flash.",
  },
  {
    q: "How do you match orange-peel wall texture?",
    a: "Match orange peel with aerosol texture spray: practice on cardboard first, set the nozzle to the wall's droplet size, and apply light passes from 24 inches after the patch is primed. Knockdown texture needs a flattened follow-up with a wide knife 10 minutes after spraying. Test inconspicuous areas first, since heavy-handed texture reads worse than a smooth patch.",
  },
  {
    q: "Why do drywall patches show through paint?",
    a: "Patches flash through paint because porous compound absorbs paint differently than sealed wall, the patch edges were not feathered wide enough, or primer was skipped. Sand the edges to a zero-thickness feather, apply a dedicated drywall primer or PVA sealer over the whole patch plus 6 inches beyond, then paint two finish coats. Raking daylight during sanding reveals ridges invisible head-on.",
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)).replace(/</g, "\u003c") }} />
      <div className="hero-bay">
        <span className="kicker">Paint &amp; Walls Bay 03</span>
        <h1>Drywall Repair <span className="accent">Without Seams</span></h1>
        <p className="lede">
          Every wall wound — nail pops, doorknob holes, big accidents — has a
          matching patch system. Size the hole, layer thin coats, and sand in
          raking light.
        </p>
      </div>
      <ShopArticle
        kicker="Skill level: beginner to intermediate · Half-day · $10–$60 DIY"
        intro={[
          "Drywall repair looks like magic on finished walls because the patch disappears entirely — but the trick is method, not talent. Small holes take spackle and a dab of paint, medium holes take mesh patches and setting compound, and large holes take screwed-in panels with three feathered coats of joint compound. Each system costs $10 to $60 DIY against $75 to $500 hired, region-dependent, and every one of them finishes with the same ritual: sand in raking light, prime the thirsty compound, and paint two coats. Rushing any layer — thick compound, skipped primer, paint over dust — prints the patch outline permanently.",
          "This guide sizes your damage first, then walks each repair track from stabilization to invisible paint. You will learn why nail pops need screws rather than more spackle, how mesh and California patches differ, when setting compound beats premixed mud, and how texture spray blends the evidence. Electrical caution runs through the whole job: scan for wires before cutting, switch off the circuit for that wall, and read our disclaimer before opening anything larger than a fist near switches and outlets.",
        ]}
        sources="Sources: manufacturer joint-compound specs, EPA lead-safe guidance, 2026 U.S. cost averages"
        safety="Cutting drywall can expose wires, pipes, and sharp metal. Scan every cut zone with AC detection, switch off the circuit for that wall, and probe cautiously. This is general education, not professional advice; hire a licensed pro for damage near panels, large structural cracks, or sagging ceilings. See our disclaimer."
        sections={[
          {
            h2: "How do you size the damage before repairing?",
            paragraphs: [
              "Repairs sort by diameter because physics changes with size. Nail pops and dings under half an inch need only reseating and spackle. Holes under 2 inches — anchors, curtain mishaps — fill with lightweight spackle in two thin applications. Holes from 2 to 6 inches exceed spackle's strength and need self-adhesive mesh or a California hot patch with setting-type compound. Holes over 6 inches, plus any damage spanning a stud bay with crushed edges, need a cut-to-fit drywall panel screwed to framing or backer boards with paper tape and three compound coats.",
              "Diagnose the cause while sizing, since patches over active problems fail. Doorknob holes want a wall stop installed with the patch or the knob strikes again. Ceiling stains with soft drywall mean an overhead leak that paint and mud cannot fix — find and stop the water first. Long diagonal cracks emanating from door corners in newer homes often trace to normal settling, but cracks wider than a quarter inch, offset edges, or doors that suddenly bind deserve a structural look before cosmetic repair. Photograph everything before cutting for paint matching later.",
            ],
            table: {
              headers: ["Hole size", "Repair system", "Materials cost"],
              rows: [
                ["Under 1/2 in (pops, dings)", "Reseat + spackle", "$5–$10"],
                ["Under 2 in", "Spackle, 2 thin fills", "$10–$20"],
                ["2–6 in", "Mesh / California patch + setting compound", "$15–$35"],
                ["Over 6 in", "Screwed panel + tape + 3 coats", "$20–$60"],
              ],
            },
          },
          {
            h2: "What tools and compounds belong on the bench?",
            paragraphs: [
              "Two compound families serve different masters. Lightweight premixed spackle handles small fills with fast drying and easy sanding. All-purpose premixed joint compound covers taping and finish coats on bigger work, drying by evaporation over roughly 24 hours per coat. Setting-type compound in powder form — 20- or 45-minute formulas — hardens chemically for same-day multi-coat patches and resists the shrinkage that cracks deep fills. Paper tape gives the strongest large joints; self-adhesive mesh speeds medium patches but needs setting compound beneath, since premixed mud over mesh cracks under flex.",
              "Knives and abrasives do the shaping. A flexible 6-inch taping knife beds tape and fills, a 10- or 12-inch knife feathers wide finish coats, a mud pan holds workable compound, and 120-grit paper plus a sanding sponge level between coats. Add a jab saw or oscillating tool for cutting to framing, a rasp for fitting panel edges, self-drilling drywall screws with a dimpler bit, aerosol texture to match, and dedicated primer. Dust masks and glasses are mandatory — sanding dust fills a room fast — and drop cloths protect floors from the muddy footprint this trade leaves.",
            ],
            checkHeading: "Patch bench checklist",
            bullets: [
              "Lightweight spackle for small holes plus all-purpose and 20-minute setting compound",
              "Paper tape and self-adhesive mesh, 6-inch and 12-inch taping knives, mud pan",
              "Jab saw, rasp, drywall screws, dimpler bit, AC-detecting stud finder",
              "120-grit paper, sanding sponge, texture spray, PVA primer, dust mask and glasses",
            ],
          },
          {
            h2: "How do you fix nail pops and small holes?",
            paragraphs: [
              "Nail pops are fasteners, not paint problems, so spackle alone always fails. Drive a drywall screw 2 inches above and below each popped nail into the stud, dimpling just below the surface without tearing paper. Scrape any loose paint, press lightweight spackle into the dimples with a putty knife, and let it dry fully — usually an hour — before a second thin skim. Sand flush with 120-grit, wipe dust, spot-prime, and paint. A whole room of pops takes an afternoon and $10 in materials, and the screws stop the movement that caused them.",
              "Small anchor holes follow the same rhythm at smaller scale. Pull anchors cleanly — threaded types back out, expansion types push through — then fill in two thin passes rather than one proud blob, since spackle shrinks as it dries. Overfill slightly on the second pass, sand dead flush when dry, and prime before paint. For walls heading to a full repaint, batch every small repair in the house first, then prime and paint per our painting room guide so patches and walls cure as one finish.",
            ],
          },
          {
            h2: "How do you patch medium and large holes invisibly?",
            paragraphs: [
              "Medium holes from 2 to 6 inches take the mesh path: trim ragged paper, stick a self-adhesive mesh patch centered over the hole, and skim 20-minute setting compound through the mesh in thin pressed layers, building to flush over two applications an hour apart. California patches suit irregular breaks — cut a drywall scrap 2 inches larger than the hole with paper flanges exposed, butter the back, press it into a squared opening, and feather compound over the flanges. Both methods finish with a wide all-purpose topcoat sanded in raking light.",
              "Large holes get the panel treatment. Square the damage to the nearest studs with a level and jab saw, scanning for wires first, and screw in wood backers where no stud lands. Cut the replacement panel a hair under the opening, screw it every 8 inches dimpled just below paper, and bed paper tape in all-purpose compound over every seam. Three coats follow — bed, fill at 24 hours, feathered finish 8 to 12 inches wide — with light sanding between. Prime the entire patch plus overlap with PVA sealer, match texture from 24 inches after priming, then paint two coats across the whole wall section so sheen matches.",
            ],
          },
          {
            h2: "What does drywall repair cost against hiring out?",
            paragraphs: [
              "DIY economics favor every size. Nail pops and small holes run $10 to $20 total; medium patches $15 to $35 with setting compound and mesh; large panel repairs $20 to $60 with a half-sheet of drywall and a gallon of compound that covers many future patches. A $15 texture can and $12 primer round out the reusable kit. All region-dependent, all trivial per hole once the kit exists.",
              "Professionals charge $75 to $200 per small patch visit, $200 to $500 for large or textured repairs, and $300 to $800 for skim-coated rooms, region-dependent — the invoice is labor, dust control, and texture matching skill. Hire out for ceilings over stairs, plaster walls with historic value, water-damaged expanses needing leak tracing, or any crack pattern suggesting movement. DIY the standard punch-throughs and pops, and schedule the dusty work ahead of repaints using our fall home maintenance checklist timing.",
            ],
            table: {
              headers: ["Repair", "DIY cost", "Pro cost"],
              rows: [
                ["Nail pops (per room)", "$10–$20", "$75–$150"],
                ["Small holes", "$10–$20", "$75–$200"],
                ["Medium patch", "$15–$35", "$150–$300"],
                ["Large panel + texture", "$20–$60", "$200–$500"],
              ],
            },
          },
        ]}
        steps={[
          { title: "Size, scan, and stabilize", body: "Measure the damage, scan for wires and pipes, switch off the circuit, and stop active water or movement causes before any mud mixes." },
          { title: "Cut to sound edges", body: "Square ragged holes to clean lines with framing or backers to screw to. Trim torn paper, rasp panel edges, and dry-fit the replacement." },
          { title: "Fasten and tape", body: "Screw panels every 8 inches dimpled below paper, or stick mesh centered. Bed paper tape in compound over every seam and let it set." },
          { title: "Build three thin coats", body: "Apply bed, fill, and feathered finish coats, each thinner and wider than the last, honoring full dry times between — 20-minute compound excepted." },
          { title: "Sand in raking light", body: "Shine a work light sideways across the patch and sand ridges flush with 120-grit. Wipe all dust; leftover dust kills paint bond." },
          { title: "Prime, texture, paint", body: "Seal with PVA primer, spray-match texture from 24 inches after priming, then roll two finish coats across the full wall section." },
          { title: "Prevent the sequel", body: "Install door stops, anchor curtains into studs, and fix the leak or movement that caused the damage so the patch is the last one." },
        ]}
        stepsHeading="How do you repair drywall in 7 steps?"
        faqs={faqs}
        outboundLinks={[
          { href: "https://www.epa.gov/lead", label: "EPA lead-safe work practices" },
          { href: "https://www.cpsc.gov", label: "CPSC home safety guidance" },
        ]}
        internalLinks={[
          { href: "/painting-room-guide", label: "painting a room guide" },
          { href: "/power-drill-basics", label: "power drill basics" },
          { href: "/hanging-shelves-guide", label: "hanging shelves guide" },
          { href: "/fall-home-maintenance-checklist", label: "fall checklist" },
        ]}
        closing={[
          "Invisible patches come from honest sizing, thin layered coats, raking-light sanding, and primer before paint. Follow that chain on every hole and the wall forgets it was ever wounded.",
          "Costs are region-dependent ranges from 2026 U.S. averages. For pre-1978 homes, test for lead paint and follow EPA lead-safe practices at epa.gov/lead before sanding or cutting painted drywall.",
        ]}
      />
    </>
  );
}
