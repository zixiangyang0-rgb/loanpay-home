import type { Metadata } from "next";
import ShopArticle from "@/components/ShopArticle";
import { faqJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fall Home Maintenance Checklist 2026",
  description:
    "Fall home maintenance checklist: tune furnaces, winterize pipes, clear gutters, and seal drafts. Beat freezing weather at DIY prices. Start winterizing your home!",
  alternates: { canonical: "https://home.loanpaylogic.com/fall-home-maintenance-checklist" },
  openGraph: {
    type: "article",
    url: "https://home.loanpaylogic.com/fall-home-maintenance-checklist",
    siteName: "LoanPay Home",
    title: "Fall Home Maintenance Checklist 2026",
    description:
      "Fall home maintenance checklist: tune furnaces, winterize pipes, clear gutters, and seal drafts. Beat freezing weather at DIY prices. Start winterizing your home!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fall Home Maintenance Checklist 2026",
    description:
      "Fall home maintenance checklist: tune furnaces, winterize pipes, clear gutters, and seal drafts. Beat freezing weather at DIY prices. Start winterizing your home!",
  },
};

const faqs = [
  {
    q: "How much does fall home maintenance cost?",
    a: "DIY fall maintenance costs $50 to $200 for furnace filters, caulk, pipe insulation, gutter supplies, and lawn seed. Professional furnace tune-ups run $75 to $200 and chimney sweepings $150 to $350, region-dependent. One prevented burst pipe or furnace failure saves $500 to $5,000 against midwinter emergency rates.",
  },
  {
    q: "When should I winterize outdoor faucets and sprinklers?",
    a: "Winterize before the first hard freeze, typically when nights near 32 degrees: shut interior valves to hose bibs, drain lines, leave bibs open, and blow out sprinklers to maker specs. Insulate exposed pipes in unheated garages, crawlspaces, and attics with foam sleeves. Frozen splits flood in spring thaw, so fall draining is the entire prevention.",
  },
  {
    q: "How do I get my furnace ready for winter?",
    a: "Install fresh filters, verify the thermostat with a test heat cycle, keep vents and returns unblocked, confirm the flue and combustion air paths are clear, and book a $75 to $200 pro tune-up for burners, ignition, and CO testing. Vacuum registers, test CO detectors, and keep the area around the furnace clear of storage.",
  },
  {
    q: "Should I clean gutters in fall or wait for all leaves?",
    a: "Clean twice in heavy-tree zones: once mid-fall after the first big drop and again after the last leaves fall but before freeze. Waiting once lets early debris cement under later layers and ice dams form on clogged eaves. Guards reduce volume but still need outlet checks before winter.",
  },
  {
    q: "How do I keep mice out in fall?",
    a: "Seal quarter-inch-plus gaps with copper mesh plus caulk before the first cold snap drives rodents indoors, install door sweeps, store birdseed and pet food in hard sealed containers, and set snap traps along basement and garage walls. Fall is peak intrusion season, so exclusion in October beats trapping in December.",
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)).replace(/</g, "\u003c") }} />
      <div className="hero-bay">
        <span className="kicker">Seasonal Bay 02</span>
        <h1>Fall Home Maintenance <span className="accent">Checklist 2026</span></h1>
        <p className="lede">
          Fall is winter insurance sold at DIY prices. Heat systems tuned,
          pipes insulated, gutters clear, shell sealed — before the first hard
          freeze tests everything at once.
        </p>
      </div>
      <ShopArticle
        kicker="Skill level: all levels · Two weekends · $50–$200 DIY"
        intro={[
          "Fall home maintenance exists because winter failures price at emergency multiples: burst pipes flood at midnight rates, dead furnaces get repaired on holiday weekends, and ice dams form on the clogged gutters October ignored. A disciplined two-weekend program costing $50 to $200 DIY plus $75 to $200 for a furnace tune-up and $150 to $350 for chimney sweeping, all region-dependent, converts those emergencies into scheduled non-events. The sequence runs from heat inward out: heating equipment first, then freeze protection for pipes and hoses, roof and gutter readiness, shell sealing against drafts and rodents, safety systems, and finally the lawn's fall feeding that decides next spring.",
          "This checklist gives every stop its inspect-do-call threshold with costs as region-dependent ranges. Gas, chimney, and electrical work carry explicit pro boundaries — the safety callout below governs the whole season. Run it as the mirror of our spring home maintenance checklist, drill into systems through the linked guides, and log everything in the home file spring started.",
        ]}
        sources="Sources: DOE winterization guidance, CPSC heating safety, EPA moisture advice, 2026 cost averages"
        safety="Heating equipment involves gas, carbon monoxide, and high voltage. Never service burners, heat exchangers, or flues yourself beyond filters and clearances — book licensed technicians. This is general education, not professional advice; hire licensed pros for gas, chimney, and electrical work. See our disclaimer."
        sections={[
          {
            h2: "How do you prepare heating systems for winter?",
            paragraphs: [
              "Furnaces and boilers get October attention, not January hope. Install fresh filters per our HVAC filter guide sizing, run a full test heat cycle verifying warm supply air at every register, and confirm thermostats hold setpoint without short cycling. Keep all supply registers open and unblocked — closing rooms strains duct design — and maintain three feet of clear space around furnaces and boilers with combustion-air grilles unblocked. Book the $75 to $200 professional tune-up for burner cleaning, ignition testing, heat-exchanger inspection, and carbon-monoxide verification that homeowners must never DIY.",
              "Fireplaces and stoves need certified eyes too: schedule $150 to $350 chimney sweeping and inspection clearing creosote — the fuel of chimney fires — plus damper, cap, and flashing checks. Test every CO detector with fresh batteries per our smoke detector guide, since heating season is CO season. Space heaters get their annual audit: tip-over and overheat protection, three-foot clearances, no extension cords, and direct wall-plug use only. Portable generators stay outdoors far from windows with transfer-switch discipline for outages.",
            ],
            checkHeading: "Heat readiness checklist",
            bullets: [
              "Fresh filters, test heat cycle passes, registers open, 3-ft furnace clearance",
              "Pro tune-up booked: burners, ignition, exchanger, CO test — never DIY",
              "Chimney swept and inspected, CO detectors tested, space-heater rules posted",
            ],
          },
          {
            h2: "Which pipes and hoses must be winterized?",
            paragraphs: [
              "Freeze protection is plumbing triage before the first 32-degree night. Shut interior valves feeding hose bibs, open the outdoor bibs to drain, and leave them open all winter; frost-free sillcocks still need hoses disconnected so they drain back properly. Blow out irrigation to manufacturer specs with regulated pressure — overpressure cracks heads and valves. Insulate exposed supply lines in crawlspaces, attics, garages, and exterior walls with foam sleeves plus heat tape on thermostat-controlled circuits where freezes run deep.",
              "Inside, know the main shutoff location and verify it turns freely now — not during a 2 a.m. split — and insulate the meter box where applicable. Open cabinet doors on exterior-wall sinks during deep freezes so room heat reaches pipes, and keep thermostats above 55 degrees even when traveling, with a trusted checker for long absences. A $10 insulation sleeve beats a $5,000 flood restoration; the math never inverts.",
            ],
            table: {
              headers: ["Freeze target", "Fall action", "DIY cost"],
              rows: [
                ["Hose bibs + hoses", "Shut inside, drain, disconnect", "$0"],
                ["Irrigation", "Blow out to spec", "$0–$75 rental/pro"],
                ["Exposed pipes", "Foam sleeves + tape where deep", "$10–$40"],
                ["Travel protection", "55°F+, cabinet doors, checker", "$0"],
              ],
            },
          },
          {
            h2: "Is the roof and gutter system winter-ready?",
            paragraphs: [
              "Gutters decide ice-dam fate: clogged troughs hold meltwater that refreezes at eaves, lifting shingles and driving water under flashing. Clean twice in treed zones — mid-fall and post-leaf-drop — verifying slope and 3-foot-plus discharge per our gutter cleaning guide, and confirm attic insulation and ventilation balance so escaping heat stops melting roof snow unevenly. From the ground, re-scan shingles and flashing after autumn storms; loose pieces become winter projectiles and leak paths.",
              "Yard winterizing protects the shell indirectly: drain and store hoses, shut and insulate outdoor showers and kitchens, aerate and overseed cool-season lawns six weeks before hard freeze per our lawn care basics, and mulch beds after ground cools. Stack firewood 20-plus feet from walls on racks — dry wood near siding invites both termites and mice seeking winter shelter. Service snow equipment now: shear pins, belts, stabilized fuel, and a tested start before the first storm.",
            ],
          },
          {
            h2: "How do you seal the house against drafts and rodents?",
            paragraphs: [
              "Fall sealing serves heat bills and pest exclusion simultaneously. Re-run the incense draft test from our weatherproofing guide on every opening, refreshing failed caulk and weatherstrip before heating season prices the leaks daily. Reverse ceiling fans to clockwise downdraft at low speed, pushing warm air down without wind chill. Check attic hatch sealing and insulation — the unsealed hatch is a chimney leaking heat all winter.",
              "Rodent exclusion peaks in October as cold drives mice indoors: seal quarter-inch-plus gaps with copper mesh plus caulk per our pest prevention basics, sweep every exterior door, screen vents with hardware cloth, and move birdseed and pet food into hard sealed containers. Set snap traps along basement and garage perimeters as sentries, checking weekly. Fall-sealed homes heat cheaper and trap less all winter.",
            ],
          },
          {
            h2: "What fall projects prevent winter emergencies?",
            paragraphs: [
              "Emergency prevention has a hierarchy: water first, heat second, access third. Water wins because burst pipes destroy finishes, furnishings, and heirlooms in hours — so hose-bib draining, irrigation blowouts, and exposed-pipe insulation outrank every cosmetic fall project. Heat follows because no-heat calls price at holiday premiums: October tune-ups with CO verification plus detector testing convert January crises into September appointments. Access closes the list: serviced snow equipment, stocked ice melt, and marked walkway edges keep the household mobile when storms arrive overnight.",
              "The attic decides ice-dam fate before the first snow: balanced insulation and ventilation keep roof decks uniformly cold so snow melts evenly instead of damming at eaves. Verify soffit vents breathe, bath fans exhaust outdoors rather than into insulation, and the hatch seals tight — heat leaking through the hatch melts the ridge snow that refreezes as the dam. Gutters cleared twice in treed zones finish the defense; clogged troughs hold the meltwater that becomes the dam's reservoir.",
              "Document winter readiness where sitters and insurers find it: furnace service stickers with dates, main-shutoff tags with directions, detector test logs, and the plumber's emergency number posted inside the utility closet. Photograph pipe insulation, sump backups, and detector dates for the home file. Households that brief holiday guests and housesitters on shutoffs and thermostats survive absences and parties without the midnight calls this checklist exists to prevent.",
            ],
          },
          {
            h2: "What safety and cost planning closes fall prep?",
            paragraphs: [
              "Safety systems get winter-grade verification: interconnected smoke and CO detectors tested and decade-checked, fire extinguishers inspected and kitchen-accessible, escape ladders for upper bedrooms confirmed, and emergency numbers plus the furnace tech's contact posted where babysitters find them. Stock outage basics — flashlights, batteries, blankets, phone banks — before storms dictate prices. Review homeowner insurance for freeze-exclusion clauses requiring maintained heat; compliance is documented thermostat discipline.",
              "Budget the season honestly: $50 to $200 DIY supplies, $75 to $200 furnace tune-up, $150 to $350 chimney service where applicable, all region-dependent. Against midwinter emergency rates — $500-plus pipe repairs, $1,000-plus no-heat calls, $5,000-plus flood restorations — fall spending returns multiples. Log model numbers, filter sizes, and service dates in the home file, and hand the winter-ready summary to housesitters with our moving house checklist packet logic.",
            ],
            table: {
              headers: ["Fall spend", "Cost", "Emergency avoided"],
              rows: [
                ["DIY supplies + insulation", "$50–$200", "$500–$5,000 pipe floods"],
                ["Furnace tune-up", "$75–$200", "$1,000+ no-heat calls"],
                ["Chimney sweep", "$150–$350", "Chimney fire losses"],
                ["Gutter cleaning", "$0–$350", "Ice-dam interior damage"],
              ],
            },
          },
        ]}
        steps={[
          { title: "Tune the heat", body: "Fresh filters, test cycle, clearances verified, pro tune-up and chimney sweep booked, CO detectors tested — gas and flue work strictly pro." },
          { title: "Freeze-proof water", body: "Hose bibs drained and open, irrigation blown out, exposed pipes sleeved, main shutoff verified turning, travel heat plan set." },
          { title: "Ready roof and gutters", body: "Twice-cleaned troughs, slope and discharge verified, shingle scan done, attic insulation-ventilation balanced against ice dams." },
          { title: "Seal shell and pests", body: "Draft test repeated, caulk and weatherstrip refreshed, fans reversed, rodent gaps meshed, food sealed, sentry traps set." },
          { title: "Verify safety gear", body: "Detectors tested and dated, extinguishers inspected, escape plan walked, outage kit stocked, insurance freeze terms met." },
          { title: "Winterize the yard", body: "Aerate and seed on time, mulch after cooling, wood stacked far, hoses stored, snow gear serviced and test-started." },
          { title: "Log for spring", body: "File filter sizes, service dates, paint colors, and gaps sealed so spring's checklist starts two steps ahead." },
        ]}
        stepsHeading="How do you winterize in 7 steps?"
        faqs={faqs}
        outboundLinks={[
          { href: "https://www.energy.gov/energysaver", label: "DOE winterization guidance" },
          { href: "https://www.cpsc.gov", label: "CPSC heating safety" },
        ]}
        internalLinks={[
          { href: "/spring-home-maintenance-checklist", label: "spring checklist" },
          { href: "/hvac-filter-guide", label: "HVAC filter guide" },
          { href: "/gutter-cleaning-guide", label: "gutter cleaning guide" },
          { href: "/pest-prevention-basics", label: "pest prevention basics" },
        ]}
        closing={[
          "Heat tuned, water drained, gutters clear, shell sealed, detectors tested — fall done right means winter becomes weather instead of emergency. Two weekends now, four quiet months after.",
          "Costs are region-dependent ranges from 2026 U.S. averages. For winterization technique see the Department of Energy at energy.gov/energysaver and CPSC heating safety at cpsc.gov.",
        ]}
      />
    </>
  );
}
