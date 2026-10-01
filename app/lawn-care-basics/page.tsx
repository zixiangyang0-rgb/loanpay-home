import type { Metadata } from "next";
import ShopArticle from "@/components/ShopArticle";
import { faqJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Lawn Care Basics: Mowing, Water & Seed Guide",
  description:
    "Lawn care basics that grow thick turf: mow high, water deep, feed by soil test, and overseed each fall. DIY costs $50–$200 a year. Start growing today!",
  alternates: { canonical: "https://home.loanpaylogic.com/lawn-care-basics" },
  openGraph: {
    type: "article",
    url: "https://home.loanpaylogic.com/lawn-care-basics",
    siteName: "LoanPay Home",
    title: "Lawn Care Basics: Mowing, Water & Seed Guide",
    description:
      "Lawn care basics that grow thick turf: mow high, water deep, feed by soil test, and overseed each fall. DIY costs $50–$200 a year. Start growing today!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lawn Care Basics: Mowing, Water & Seed Guide",
    description:
      "Lawn care basics that grow thick turf: mow high, water deep, feed by soil test, and overseed each fall. DIY costs $50–$200 a year. Start growing today!",
  },
};

const faqs = [
  {
    q: "How much does basic lawn care cost per year?",
    a: "DIY lawn care costs $50 to $200 yearly: $30 to $80 for fertilizer and seed, $20 to $60 for fuel and mower maintenance, plus water bills that vary widely by region. Professional mowing services charge $30 to $80 per visit or $120 to $320 monthly, while full-service fertilization programs run $200 to $500 yearly. Soil testing at $15 to $30 prevents hundreds in wasted products.",
  },
  {
    q: "How often should I mow and how high?",
    a: "Mow often enough to never remove more than one-third of the blade at once — typically weekly in spring growth and biweekly in summer slowdown. Set cool-season grasses at 3 to 4 inches and warm-season at 1.5 to 2.5 inches; taller grass shades roots, crowds weeds, and survives drought. Keep blades razor-sharp and alternate mowing patterns to prevent ruts.",
  },
  {
    q: "When is the best time to overseed a lawn?",
    a: "Early fall is best for cool-season grasses: warm soil germinates seed fast while cooling air and autumn rains nurse seedlings without summer disease pressure. Spring overseeding works second-best but fights crabgrass pre-emergent timing. Warm-season grasses overseed in late spring when soil passes 65 degrees. Water new seed lightly twice daily until established.",
  },
  {
    q: "Why is my grass turning brown in patches?",
    a: "Patchy browning comes from dull-mower shredding, localized grubs or fungal disease, pet urine salts, buried construction debris, or sprinkler heads missing the spot. Diagnose by tugging — grubs release turf like carpet — and by watering patterns before buying products. Most patches recover with sharp mowing, deep watering, and fall overseeding rather than chemicals.",
  },
  {
    q: "How much water does a lawn need weekly?",
    a: "Lawns need about 1 to 1.5 inches of water weekly from rain plus irrigation, applied in one or two deep soakings that wet 6 inches down rather than daily sprinkles. Water between 5 and 10 a.m. to cut evaporation and disease, and use a tuna-can test to measure output. Dormant summer grass survives on far less; brown but alive beats overwatered and diseased.",
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)).replace(/</g, "\u003c") }} />
      <div className="hero-bay">
        <span className="kicker">Outdoor Bay 03</span>
        <h1>Lawn Care Basics <span className="accent">for Thick Turf</span></h1>
        <p className="lede">
          Thick lawns come from mowing high, watering deep, and seeding in
          fall — not from product piles. Master the timing and the grass does
          the work.
        </p>
      </div>
      <ShopArticle
        kicker="Skill level: beginner · Seasonal rhythm · $50–$200/yr DIY"
        intro={[
          "Lawn care basics reward timing over spending because grass follows an ancient calendar: roots grow in fall, blades surge in spring, and summer survival depends on mowing height and watering depth set months earlier. Homeowners who mow at 3 to 4 inches, water 1 to 1.5 inches weekly in deep soakings, fertilize on soil-test results, and overseed every fall build dense turf that crowds weeds naturally. The DIY budget runs $50 to $200 yearly plus water, region-dependent, against $120 to $320 monthly for mowing services and $200 to $500 for fertilizing programs. Product-first lawns with scalped mowing and daily sprinkles stay thin no matter the spend.",
          "This guide sets the year-round rhythm for cool- and warm-season grasses: mowing height and blade care, deep-watering method, soil testing before fertilizing, fall overseeding that actually takes, and weed control through density rather than chemistry. You will learn the one-third mowing rule, the tuna-can watering test, and why pre-emergent timing conflicts with spring seeding. Pair it with our pest prevention basics for grub and insect judgment and the spring checklist that opens the season.",
        ]}
        sources="Sources: university extension lawn guidance, EPA WaterSense outdoors, 2026 U.S. cost averages"
        sections={[
          {
            h2: "What grass type grows in your yard?",
            paragraphs: [
              "Grass divides into cool-season and warm-season families with opposite calendars. Kentucky bluegrass, fescues, and ryegrass thrive in northern zones, growing hardest in spring and fall while sulking through summer heat. Bermudagrass, zoysia, St. Augustine, and centipede rule southern zones, greening with summer heat and browning in winter dormancy. Identify yours by blade texture, growth timing, and neighbor lawns — or send a sample to the county extension office that also runs the $15 to $30 soil test every lawn needs.",
              "The soil test outranks every product decision: pH, phosphorus, potassium, and organic matter results dictate lime and fertilizer precisely instead of guessing. Most lawns want pH 6.0 to 7.0; acidic soils lock out nutrients no fertilizer can replace. Sun mapping matters equally — dense shade under maples defeats even shade mixes, and those zones convert to mulch beds more happily than they grow grass. Match expectations to site before spending a dollar.",
            ],
          },
          {
            h2: "How should you mow for dense healthy turf?",
            paragraphs: [
              "Mowing height is the master lever: cool-season grasses at 3 to 4 inches grow deeper roots, shade weed seeds, and hold moisture through heat that scalps lawns mowed at 2 inches into dormancy. Warm-season grasses prefer 1.5 to 2.5 inches by variety. The one-third rule governs frequency — never remove more than a third of the blade per cut — which means weekly spring mowing and slower summer passes. Mulch clippings back in with a sharp mulching blade; clippings return nitrogen free and never thatch when mowing stays frequent.",
              "Blade sharpness shows in the cut: sharp blades slice clean green tips while dull blades shred brown-frayed ends that disease enters within days. Sharpen or swap blades yearly, more with sandy soils and stick-littered yards. Alternate mowing direction each visit to stand grass upright and avoid ruts, edge beds and walks for the crisp lines that make average turf look professional, and keep mower maintenance — oil, air filter, spark plug — on the spring checklist so starts stay one-pull.",
            ],
            checkHeading: "Mow-day checklist",
            bullets: [
              "Height set: 3–4 in cool-season, 1.5–2.5 in warm-season, one-third rule obeyed",
              "Blades sharp yearly, clippings mulched back, pattern alternated each mow",
              "Edges trimmed, mower oil and filter fresh, fuel stabilized for storage",
            ],
          },
          {
            h2: "How much water does grass really need?",
            paragraphs: [
              "An inch to an inch-and-a-half weekly from rain plus irrigation, delivered in one or two deep soakings, trains roots 6 inches down where summer heat cannot reach them. Daily 10-minute sprinkles wet only the top inch and breed shallow roots plus fungal disease — the most common watering mistake in America. Measure with tuna cans under the spray: time how long the system takes to deposit an inch, then program that duration once or twice weekly. Water between 5 and 10 a.m. so blades dry by noon and evaporation stays low; evening watering invites the brown-patch fungi that plague humid regions.",
              "Let summer dormancy work where appropriate: cool-season lawns brown but survive weeks of heat with occasional deep drinks, greening with fall rains without reseeding. New seed and sod are the exceptions, needing light twice-daily water until roots anchor. Follow local watering restrictions and EPA WaterSense guidance — native beds and mulch rings around trees cut irrigated area and bills simultaneously. Brown-but-alive beats soggy-and-diseased every August.",
            ],
          },
          {
            h2: "When do you fertilize, seed, and control weeds?",
            paragraphs: [
              "Fertilize on the soil test, heaviest in fall for cool-season grasses when roots stockpile nutrients: a Labor Day feeding plus a late-fall winterizer builds next spring's density. Spring feeding stays light to avoid surge growth that disease loves; never fertilize dormant summer turf. Slow-release granular products at label rates beat heavy fast-release doses that burn and leach. Warm-season grasses reverse the calendar with late-spring feeding as green-up starts.",
              "Overseed cool-season lawns in early fall — aerate compacted soil first, spread quality seed at label rates, rake lightly for contact, and water twice daily until germination. Weed control flows from density: thick fall-seeded turf plus pre-emergent crabgrass barrier in spring (only where no spring seeding occurs) plus hand-pulling and spot treatment covers 95 percent of weeds. Whole-lawn herbicide is the last resort, applied on calm cool days per label, with children and pets kept off until dry.",
            ],
            table: {
              headers: ["Season", "Cool-season tasks", "Warm-season tasks"],
              rows: [
                ["Spring", "Light feed, pre-emergent, mow rising", "Green-up feed, mow, pre-emergent"],
                ["Summer", "Mow high, deep water, rest", "Peak mow and feed, watch chinch bugs"],
                ["Fall", "Aerate, overseed, heavy feed", "Ease feeding, prep dormancy"],
                ["Winter", "Rest, service mower", "Dormant, limit traffic"],
              ],
            },
          },
          {
            h2: "How do you revive a dead or patchy lawn?",
            paragraphs: [
              "Revival starts with diagnosis, not products: pull a soil test first, dig a 6-inch plug to inspect roots and thatch, and map sun hours across the dead zones. Thatch over half an inch thick sheds water before roots drink — rent a dethatcher or core aerator for $40 to $70 a day and open the soil aggressively. Buried construction debris, the classic dead rectangle over backfilled rubble, needs excavation and topsoil replacement since no seed roots through concrete chunks and lumber.",
              "Reseed failures trace to timing and contact: slice-seed or broadcast quality seed matched to sun exposure in early fall for cool-season grasses, rake lightly for seed-to-soil contact, top-dress thinly with compost, and water lightly twice daily until germination then deeply as seedlings tiller. Spring patching works where pre-emergent was skipped in that zone; where it was applied, sod patches bypass the barrier that would block seed. Cover large areas with straw netting on slopes so storms never wash the investment downhill.",
              "Grub and disease damage need identification before treatment: tug-test turf that lifts like carpet for grubs and treat with labeled grub control in late summer when larvae feed near the surface, while brown-patch rings and dollar spots get cultural fixes — sharper blades, morning-only watering, reduced nitrogen — before fungicides. Pet spots flush with deep water immediately after use and reseed in fall with urine-tolerant fescues. Most lawns recover fully in one fall season when diagnosis precedes spending.",
            ],
          },
          {
            h2: "What does a year of lawn care cost?",
            paragraphs: [
              "DIY totals stay modest: $30 to $80 for seed and fertilizer, $20 to $60 for fuel and mower upkeep, $15 to $30 for the soil test every two to three years, plus irrigation water that ranges from negligible in rainy regions to significant in arid ones. A $200 broadcast spreader and $40 core-aerator rental amortize across years. All region-dependent, all dwarfed by service pricing.",
              "Services charge $30 to $80 per mow visit, $120 to $320 monthly for mowing, $200 to $500 yearly for fertilization programs, and $50 to $100 per aeration visit. Hire mowing for large lots and travel-heavy schedules, hire fertilization when spreader calibration intimidates, but keep soil testing and watering discipline in-house regardless. The thick lawn in this guide's photos costs less yearly than two months of full service.",
            ],
            table: {
              headers: ["Plan", "Yearly cost", "Fits"],
              rows: [
                ["Full DIY", "$50–$200 + water", "Average lots, steady schedules"],
                ["DIY + service mow", "$800–$2,000", "Large lots, busy households"],
                ["Full service program", "$1,500–$4,000", "Estate lawns, HOA pressure"],
              ],
            },
          },
        ]}
        steps={[
          { title: "Test soil and map sun", body: "Run the $15 to $30 extension soil test, map sunny versus hopeless shade zones, and convert deep shade to mulch before fighting it." },
          { title: "Set mowing tall", body: "Raise deck to 3 to 4 inches cool-season or varietal warm-season height, sharpen blades, and commit to the one-third rule all season." },
          { title: "Calibrate watering", body: "Tuna-can test the sprinklers, program 1 to 1.5 inches weekly in deep morning soakings, and let summer dormancy rest." },
          { title: "Feed on schedule", body: "Apply test-guided slow-release fertilizer heaviest in fall for cool-season grasses, late spring for warm-season, at label rates." },
          { title: "Aerate and overseed fall", body: "Core-aerate compacted soil, spread quality seed for contact, and water lightly twice daily until seedlings tiller." },
          { title: "Weed through density", body: "Pre-emergent where unseeded, hand-pull early, spot-treat calmly, and let thick turf be the primary herbicide." },
          { title: "Winterize equipment", body: "Stabilize fuel, change oil, sharpen blades, and store dry so spring starts one-pull and rust-free." },
        ]}
        stepsHeading="How do you build thick turf in 7 steps?"
        faqs={faqs}
        outboundLinks={[
          { href: "https://www.epa.gov/watersense", label: "EPA WaterSense outdoor watering" },
          { href: "https://www.cpsc.gov", label: "CPSC mower safety guidance" },
        ]}
        internalLinks={[
          { href: "/spring-home-maintenance-checklist", label: "spring checklist" },
          { href: "/pest-prevention-basics", label: "pest prevention basics" },
          { href: "/gutter-cleaning-guide", label: "gutter cleaning guide" },
          { href: "/fall-home-maintenance-checklist", label: "fall checklist" },
        ]}
        closing={[
          "Mow high, water deep, feed by test, seed in fall — the unglamorous loop that grows the lawn neighbors ask about. Products support the rhythm; they never replace it.",
          "Costs are region-dependent ranges from 2026 U.S. averages. For watering wisdom see EPA WaterSense at epa.gov/watersense and your state extension service for local grass and pest guidance.",
        ]}
      />
    </>
  );
}
