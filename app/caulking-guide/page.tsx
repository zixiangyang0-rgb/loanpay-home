import type { Metadata } from "next";
import ShopArticle from "@/components/ShopArticle";
import { faqJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Caulking Guide: Seal Tubs, Windows & Trim",
  description:
    "Caulking clean beads means matching silicone to wet joints and acrylic to trim. Cut small tips, tool once, and cure fully. Seal gaps like a pro today!",
  alternates: { canonical: "https://home.loanpaylogic.com/caulking-guide" },
  openGraph: {
    type: "article",
    url: "https://home.loanpaylogic.com/caulking-guide",
    siteName: "LoanPay Home",
    title: "Caulking Guide: Seal Tubs, Windows & Trim",
    description:
      "Caulking clean beads means matching silicone to wet joints and acrylic to trim. Cut small tips, tool once, and cure fully. Seal gaps like a pro today!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Caulking Guide: Seal Tubs, Windows & Trim",
    description:
      "Caulking clean beads means matching silicone to wet joints and acrylic to trim. Cut small tips, tool once, and cure fully. Seal gaps like a pro today!",
  },
};

const faqs = [
  {
    q: "How much does it cost to caulk a bathtub?",
    a: "DIY tub recaulking costs $5 to $20 for a tube of kitchen-and-bath sealant plus $10 to $25 for a caulk gun, remover tool, and tape if you own nothing. One tube seals a standard tub surround with material to spare. Hiring a handyperson for a tub recaulk runs $75 to $200 region-dependent, mostly labor for the careful old-caulk removal that determines the result.",
  },
  {
    q: "Should I use silicone or acrylic caulk in a bathroom?",
    a: "Use 100 percent silicone or siliconized kitchen-and-bath sealant with mildew resistance for tubs, showers, and sink rims because it stays flexible and waterproof under constant moisture and movement. Use paintable acrylic latex for trim, baseboards, and dry interior gaps that need painting. Never put acrylic where standing water sits, and never try to paint pure silicone, since paint beads off it.",
  },
  {
    q: "Why does my caulk keep cracking or peeling?",
    a: "Caulk cracks when applied over dirty, damp, or old caulk residue, when the bead is too thin to flex, or when rigid acrylic is used across a moving tub-to-wall joint. Peeling means the surface had soap film, mildew, or silicone residue the new bead could not bond to. Remove every trace of old caulk, dry the joint fully, apply the correct flexible sealant at the right thickness, and let it cure before wetting.",
  },
  {
    q: "How long should caulk dry before using the shower?",
    a: "Most silicones skin in 30 to 60 minutes and need 24 hours before shower spray hits them, with full cure in 1 to 3 days depending on humidity and bead thickness. Acrylics need 2 to 4 hours to skin and 24 hours before water exposure. Tape the shower off-limits overnight and ventilate the room; early soaking wrinkles the bead and voids the mildew warranty.",
  },
  {
    q: "Do I need to remove old caulk before recaulking?",
    a: "Yes, cut out all loose, cracked, or mildewed old caulk down to clean substrate, because new sealant bonds to surfaces, not to failing old beads. Use a plastic razor or caulk remover tool plus mineral spirits for silicone residue, then scrub with mildew cleaner and dry completely. Sound, well-bonded beads in hidden spots can stay, but any tub or shower joint with gaps gets full removal.",
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)).replace(/</g, "\u003c") }} />
      <div className="hero-bay">
        <span className="kicker">Paint &amp; Walls Bay 02</span>
        <h1>Caulking Guide <span className="accent">for Clean Beads</span></h1>
        <p className="lede">
          Caulk is the cheapest waterproofing in the house. Match the tube to
          the joint, cut the tip right, and lay one smooth bead that lasts a
          decade.
        </p>
      </div>
      <ShopArticle
        kicker="Skill level: beginner · Afternoon job · $5–$20 a tube"
        intro={[
          "Caulking seals the gaps where water, air, and bugs sneak through — tub-to-tile joints, sink rims, window trim, and baseboards — for the price of a $5 to $20 tube and an afternoon of careful work. A good bead stays flexible through years of tub flex and seasonal trim movement; a bad one cracks in months and lets water rot the wall behind it. The difference is never the brand alone. It is removing the old caulk fully, picking silicone for wet joints and paintable acrylic for trim, cutting the tip to the joint's width, and tooling one confident pass instead of five fussy ones.",
          "This guide teaches the full pro rhythm: choosing sealant by joint, stripping old beads without gouging, taping crisp lines, gunning an even bead, and tooling it glass-smooth before it skins. You will learn why bathrooms demand mildew-resistant silicone, why painters insist on acrylic at trim, and how long each type needs before water or paint touches it. Costs stay tiny — under $45 for a first-timer's kit, region-dependent — against $75 to $200 per hired visit. Bring these skills to our painting room guide and fix leaky faucet projects where fresh sealant finishes the job.",
        ]}
        sources="Sources: manufacturer sealant specs, EPA moisture-control guidance, 2026 U.S. cost averages"
        sections={[
          {
            h2: "Which caulk belongs in each joint?",
            paragraphs: [
              "Sealants fall into two tribes and they do not interchange. One hundred percent silicone stays rubbery, waterproof, and flexible for 10 to 20 years, which makes it the only choice for tub-to-tile, shower corners, sink rims, and exterior joints that move and soak. Its price is permanence with attitude: nothing sticks to cured silicone, including paint and more silicone, so mistakes must be cut out. Acrylic latex with silicone blends tools easily, cleans with water, and takes paint beautifully, but it shrinks more and fails under standing water — perfect for baseboards, crown, window casing, and dry trim gaps a quarter inch or narrower.",
              "Specialty tubes fill the gaps between tribes. Kitchen-and-bath silicones add mildew inhibitors for humid rooms. Mortar and concrete sealants handle driveway and foundation cracks. Fire-rated and roof sealants belong to their own trades and temperatures. For gaps wider than half an inch, press foam backer rod into the joint first so the bead bonds at two faces with an hourglass profile that flexes instead of a deep plug that splits. Check the tube's movement rating — plus or minus 25 percent suits tubs — and its cure time before planning shower downtime.",
            ],
            table: {
              headers: ["Joint", "Sealant", "Why"],
              rows: [
                ["Tub / shower / sink rim", "100% silicone, mildew-resistant", "Waterproof, flexes with movement"],
                ["Baseboard / crown / casing", "Paintable acrylic latex", "Tools easy, takes paint"],
                ["Exterior trim / siding", "Exterior silicone or polyurethane", "UV and weather rated"],
                ["Gaps over 1/2 inch", "Backer rod + sealant", "Correct flex profile"],
              ],
            },
          },
          {
            h2: "What tools make beads look professional?",
            paragraphs: [
              "A smooth drip-free caulk gun beats the bargain ratchet gun on the first squeeze: the pressure release stops flow the instant you let go, which ends the blobs at corners. A $15 to $25 dripless gun, a plastic razor and 5-in-1 remover tool, blue painter's tape, rubbing alcohol or mineral spirits with rags, and a spray bottle of water with a drop of dish soap for tooling acrylics complete the kit. Pros keep wooden shims or popsicle sticks as disposable tooling sticks and a damp grout sponge for final smoothing. Nitrile gloves keep silicone off skin, where it lingers for days.",
              "Preparation chemicals matter as much as hardware. Mildew cleaner or a diluted bleach wipe kills the black staining that bleeds through new beads; mineral spirits dissolve silicone smears uncured silicone leaves; rubbing alcohol preps the final bonding surface squeaky clean. A hair dryer or patient fan time dries joints fully — sealant over dampness traps moisture that breeds the very mildew you are sealing against. Total first-timer outlay runs $25 to $45 including the gun, region-dependent, and every tool repeats across windows, doors, and trim for years.",
            ],
            checkHeading: "Caulk-day kit checklist",
            bullets: [
              "Dripless caulk gun, correct sealant tube, foam backer rod for wide gaps",
              "Plastic razor, remover tool, blue tape, rubbing alcohol and mineral spirits",
              "Mildew cleaner, spray bottle with soapy water, sponges, tooling sticks",
              "Nitrile gloves, rags, hair dryer or fan for full joint drying",
            ],
          },
          {
            h2: "How do you remove old caulk completely?",
            paragraphs: [
              "New caulk bonds to surfaces, never to old caulk, so removal decides the decade. Slice both edges of the old bead lengthwise with a plastic razor or utility knife held shallow to avoid gouging tile glaze or tub acrylic. Pull the strip out in one pull where possible, then scrape residue flat with the remover tool. Silicone ghosts need mineral spirits on a rag with patient rubbing; acrylic ghosts wash with water and a scrub pad. Finish with mildew cleaner, rinse, and dry the joint bone-dry — a fan for an hour beats a towel's optimism.",
              "Inspect the naked joint before reloading. Soft drywall or punky wood behind a tub bead means water already won and sealant alone will not save it — cut out the damage and repair the substrate first. Gaps deeper than half an inch get backer rod pressed to the right depth. Tape both sides of the joint with a uniform reveal matching the bead width you want; the tape lines are your training wheels for razor edges.",
            ],
          },
          {
            h2: "How do you gun and tool a perfect bead?",
            paragraphs: [
              "Cut the tip small — you can always widen, never narrow. Snip at 45 degrees with an opening about three-quarters of the joint width, puncture the inner seal with a long nail, and test-flow on cardboard until the stream runs even. Hold the gun at 45 degrees, press the tip into the joint, and pull steadily in one continuous motion at a speed that slightly overfills the gap. Steady wins: stops and restarts leave blobs, and racing leaves starved thin spots that crack first.",
              "Tool immediately, within five minutes before skinning starts. Wet your gloved finger or tooling stick with soapy water for acrylics — never for silicone, where water causes fisheyes — and draw one smooth pass with light pressure, shaving the bead flush to the tape lines. Peel tape right away, pulling outward at a sharp angle while the bead is wet, then leave the joint utterly alone through its cure: 24 hours minimum before shower spray, longer for thick beads. One confident pass beats five fussy ones every time.",
            ],
          },
          {
            h2: "How much does caulking cost across the house?",
            paragraphs: [
              "Caulk is the highest-return maintenance dollar in the home. A single bathroom tube costs $5 to $12 for acrylic or $8 to $20 for premium kitchen-and-bath silicone, plus a one-time $15 to $25 gun purchase, and seals a full tub surround. A whole-house trim pass — every baseboard, casing, and crown gap — takes three to six tubes at $5 to $10 each for a weekend's work. Exterior window and door sealing runs two to four tubes of $8 to $15 exterior sealant. All region-dependent, all trivial against the rot and energy waste open joints cause.",
              "Hired caulking runs $75 to $200 per bathroom visit or $150 to $400 for whole-house trim, region-dependent, with removal labor dominating the invoice. DIY the standard joints after one practice bead on cardboard and behind a door. Hire out only when joints hide rot, heights need ladders, or lead paint surrounds pre-1978 windows — those need certified handling per EPA rules. Fold recaulking into our weatherproofing windows and doors plan and the seasonal checklists so no joint ages past its decade.",
            ],
            table: {
              headers: ["Job", "DIY materials", "Hired cost"],
              rows: [
                ["Tub recaulk", "$5–$20 + tools", "$75–$200"],
                ["Whole trim pass", "$15–$60", "$150–$400"],
                ["Exterior windows/doors", "$16–$60", "$150–$350"],
                ["First-timer kit total", "$25–$45", "—"],
              ],
            },
          },
        ]}
        steps={[
          { title: "Pick the tube for the joint", body: "Match silicone to wet moving joints and acrylic to dry paintable trim. Check movement rating, cure time, and color before buying — white, clear, or almond." },
          { title: "Strip the old bead fully", body: "Slice both edges, pull the strip, scrape flat, dissolve ghosts with the right solvent, kill mildew, rinse, and fan-dry the joint completely." },
          { title: "Tape crisp lines", body: "Run blue tape both sides with an even reveal matching the bead width. Press edges firm so sealant cannot creep underneath." },
          { title: "Cut small and test", body: "Snip the tip at 45 degrees to three-quarters joint width, puncture the seal, and gun a test bead on cardboard until flow runs even." },
          { title: "Gun one steady pass", body: "Hold 45 degrees, tip buried in the joint, pull continuously at even speed slightly overfilling. Release pressure before corners to avoid blobs." },
          { title: "Tool once and peel tape", body: "Smooth with one light pass of a damp finger or stick for acrylics, dry for silicone. Peel tape immediately outward at a sharp angle." },
          { title: "Cure untouched", body: "Keep water off silicone 24 hours and paint off acrylic per label. Ventilate, skip the shower overnight, and inspect the bead at full cure." },
        ]}
        stepsHeading="How do you caulk a joint in 7 steps?"
        faqs={faqs}
        outboundLinks={[
          { href: "https://www.epa.gov/mold", label: "EPA moisture and mold control" },
          { href: "https://www.energy.gov/energysaver", label: "DOE air-sealing guidance" },
        ]}
        internalLinks={[
          { href: "/painting-room-guide", label: "painting a room guide" },
          { href: "/fix-leaky-faucet", label: "fix a leaky faucet" },
          { href: "/weatherproofing-windows-doors", label: "weatherproofing windows and doors" },
          { href: "/tile-backsplash-guide", label: "tile backsplash guide" },
        ]}
        closing={[
          "Crisp beads come from sequence, not talent: right tube, bare joint, small tip, one pass, full cure. Run that loop on every tub, sink, and trim gap and the house stays dry, tight, and finished-looking for years.",
          "Costs are region-dependent ranges from 2026 U.S. averages. For moisture-control principles see EPA guidance at epa.gov/mold, and for pre-1978 window work follow EPA lead-safe rules or hire a certified renovator.",
        ]}
      />
    </>
  );
}
