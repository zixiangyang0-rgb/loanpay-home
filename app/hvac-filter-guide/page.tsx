import type { Metadata } from "next";
import ShopArticle from "@/components/ShopArticle";
import { faqJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "HVAC Filter Guide: Sizes, MERV & Changes",
  description:
    "HVAC filter changes take ten minutes and cut energy waste fast. Find sizes, pick MERV 8–11, and set reminders. Lower bills and breathe cleaner air today!",
  alternates: { canonical: "https://home.loanpaylogic.com/hvac-filter-guide" },
  openGraph: {
    type: "article",
    url: "https://home.loanpaylogic.com/hvac-filter-guide",
    siteName: "LoanPay Home",
    title: "HVAC Filter Guide: Sizes, MERV & Changes",
    description:
      "HVAC filter changes take ten minutes and cut energy waste fast. Find sizes, pick MERV 8–11, and set reminders. Lower bills and breathe cleaner air today!",
  },
  twitter: {
    card: "summary_large_image",
    title: "HVAC Filter Guide: Sizes, MERV & Changes",
    description:
      "HVAC filter changes take ten minutes and cut energy waste fast. Find sizes, pick MERV 8–11, and set reminders. Lower bills and breathe cleaner air today!",
  },
};

const faqs = [
  {
    q: "How much does it cost to replace an HVAC filter?",
    a: "Basic fiberglass filters cost $2 to $5 each, pleated MERV 8 to 11 filters cost $8 to $18, and high-MERV or thick media filters cost $20 to $50, with subscription multipacks cutting 10 to 20 percent. Most homes spend $30 to $100 per year on filters changed quarterly. A neglected clogged filter costs far more in wasted energy and blower strain than any filter upgrade.",
  },
  {
    q: "How often should I change my furnace filter?",
    a: "Change 1-inch filters every 1 to 3 months: monthly with pets, allergies, or heavy system use, quarterly for average homes. Four- to 5-inch media filters last 6 to 12 months. Check monthly regardless — hold the filter to light, and replace when you cannot see light through it. Vacation homes and shoulder seasons stretch intervals, never beyond a year.",
  },
  {
    q: "What MERV rating should I use at home?",
    a: "MERV 8 to 11 suits most homes, capturing dust, pollen, and pet dander without straining standard blowers. MERV 13 traps finer particles including many allergens but needs verification that your system handles the pressure drop — check the manual or ask a technician. Above MERV 13 belongs to hospitals and commercial systems, not standard residential blowers.",
  },
  {
    q: "Which way does the arrow on an air filter point?",
    a: "The airflow arrow prints on the filter frame and must point toward the blower and furnace, away from the return duct bringing room air in. At a wall or ceiling return grille, the arrow points into the duct toward the system. Installing backward collapses the media, bypasses filtration, and can get sucked into the blower.",
  },
  {
    q: "Can a dirty filter break my air conditioner?",
    a: "Yes, a clogged filter starves airflow so the evaporator coil ices over, cutting cooling to nothing and potentially slugging the compressor with liquid refrigerant — a thousand-dollar failure from a $10 filter. Low airflow also overheats furnace heat exchangers until limit switches trip. Change filters on schedule and call a technician for icing, short cycling, or burning smells.",
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)).replace(/</g, "\u003c") }} />
      <div className="hero-bay">
        <span className="kicker">Systems Bay 01</span>
        <h1>HVAC Filters <span className="accent">Sized & Swapped Right</span></h1>
        <p className="lede">
          The ten-minute filter swap is the highest-ROI maintenance in the
          house: cleaner air, lower bills, and a blower that lives years
          longer.
        </p>
      </div>
      <ShopArticle
        kicker="Skill level: beginner · 10 minutes · $5–$25 per filter"
        intro={[
          "HVAC filter maintenance decides how hard every heating and cooling dollar works, because a clogged $10 filter forces the blower to fight for air, icing evaporator coils in summer and tripping heat-exchanger limits in winter. The U.S. Department of Energy attributes 5 to 15 percent energy waste to restricted airflow and dirty components, and the filter is the restriction homeowners fully control. Swapping it takes ten minutes with no tools: read the printed size on the old frame, buy the matching MERV-rated replacement for $5 to $25, slide it in arrow-toward-blower, and log the date. Annual filter spending of $30 to $100 protects equipment worth thousands.",
          "This guide teaches size reading, MERV selection without choking the blower, the change rhythm for pets and allergies, and the warning signs that mean technician territory. You will learn why the arrow direction matters mechanically, how thick media cabinets change the math, and what to check when new filters do not fix weak airflow. Pair it with our water-heater maintenance for full systems care and the seasonal checklists that schedule every swap.",
        ]}
        sources="Sources: DOE energy guidance, ENERGY STAR maintenance advice, manufacturer filter specs"
        safety="Filters are safe DIY, but the equipment around them is not. Switch the system off at the thermostat before opening filter compartments, keep fingers clear of blower compartments, and never run the system without a filter installed. This is general education, not professional advice; hire a licensed HVAC technician for electrical, refrigerant, and gas work. See our disclaimer."
        sections={[
          {
            h2: "How do you find your filter size and location?",
            paragraphs: [
              "Size hides in plain sight: the nominal size prints on the old filter's cardboard frame, such as 16x25x1, meaning inches of length, width, and thickness. Actual dimensions run about a quarter to half inch smaller so the filter slides into its slot — buy by nominal size, never by tape measurement alone. Locations follow system design: a slot beside the furnace or air handler, behind a wall or ceiling return grille, or inside a wide media cabinet on larger systems. Trace the big return duct back to the unit and the slot reveals itself.",
              "Note thickness carefully because it changes everything: 1-inch slots take disposable pleated filters changed quarterly, while 4- to 5-inch media cabinets hold deep-pleated cartridges changed every 6 to 12 months with far more dust capacity. Photograph the size stamp, the slot orientation, and the arrow direction before shopping. Buy two replacements per trip so the next change never waits on a store run.",
            ],
          },
          {
            h2: "Which MERV rating fits your system and lungs?",
            paragraphs: [
              "MERV grades capture efficiency from 1 to 16, and the home sweet spot is 8 to 11 for most systems. MERV 8 traps dust mites, pollen, and pet dander adequately; MERV 11 adds finer allergens and smoke particles with modest pressure increase most blowers tolerate. MERV 13 catches bacteria-sized particles and wildfire smoke far better but raises static pressure — verify blower compatibility in the equipment manual or with a technician before jumping, since starving airflow to gain filtration trades one problem for another.",
              "Match rating to household, not marketing. Allergy and asthma homes benefit from MERV 11 to 13 with verified airflow; pet homes need the dust capacity of pleated MERV 8-plus changed monthly rather than exotic ratings changed never. Fiberglass MERV 1 to 4 protects equipment only, not lungs — upgrade to pleated at the next change. Washable electrostatic filters promise savings but demand monthly washing discipline most households abandon; disposables with calendar reminders win on consistency.",
            ],
            table: {
              headers: ["MERV", "Captures", "Best for"],
              rows: [
                ["1–4 fiberglass", "Large dust, protects equipment", "Temporary / budget only"],
                ["8 pleated", "Pollen, dust mites, dander", "Most homes, quarterly"],
                ["11 pleated", "Fine allergens, some smoke", "Allergy / pet homes"],
                ["13 deep pleat", "Bacteria-size, wildfire smoke", "Verified systems, 6–12 mo"],
              ],
            },
          },
          {
            h2: "How often should filters really change?",
            paragraphs: [
              "Calendars beat memory: 1-inch pleated filters every 1 to 3 months, monthly with shedding pets, allergies, construction dust, or constant fan operation, and quarterly for average use. Thick 4- to 5-inch media stretches to 6 to 12 months on its dust capacity. Monthly visual checks settle every debate — hold the filter to a bright light and replace when light barely passes. Vacation and shoulder seasons extend intervals; wildfire weeks and renovation months compress them to weeks.",
              "Log every change with the date written on the new filter's frame in marker plus a phone reminder for the next one. Subscription deliveries at $8 to $15 per filter remove the shopping excuse entirely. Tie changes to the first of each quarter and to both seasonal checklists so the rhythm survives busy years. A $60 annual filter habit guarding a $6,000 system is the cheapest insurance in homeownership.",
            ],
            checkHeading: "Change-day checklist",
            bullets: [
              "System off at thermostat, correct nominal size and MERV staged, marker ready",
              "Old filter out without shaking dust loose, slot vacuumed clean",
              "New filter arrow toward blower, seated fully with no bypass gaps",
              "Date written on frame, next-change reminder set, grille relatched",
            ],
          },
          {
            h2: "What symptoms mean filter trouble versus tech trouble?",
            paragraphs: [
              "Filter-caused symptoms resolve fast: weak airflow from vents, visible dust puffing at startup, the system running constantly without reaching temperature, or ice on the indoor coil lines in summer. Swap the filter, wait for ice to melt fully with the system off and fan on, then retest. Improvement within a cycle confirms the diagnosis and schedules stricter changes.",
              "Technician symptoms persist past fresh filters: icing that returns in days, burning or electrical smells, repeated breaker trips, water pooling from a clogged condensate line, or rooms that never balance despite clean filters and open registers. Refrigerant, electrical, and gas components are licensed-tech territory — note the pattern, photograph ice and error codes, and call with specifics. Never run the system filterless to test airflow; unfiltered coils foul in weeks and the cleaning costs dwarf filter savings.",
            ],
          },
          {
            h2: "What upgrades cut heating and cooling bills further?",
            paragraphs: [
              "Filters guard the system; the envelope decides the load. Sealing duct joints with mastic in attics and crawlspaces recovers 10 to 20 percent of conditioned air that typical leaky ducts dump into unconditioned spaces — the Department of Energy ranks duct sealing beside filter discipline for payback speed. A programmable or learning thermostat set back 7 to 10 degrees for 8 hours daily trims roughly 10 percent off heating and cooling, and ceiling fans let summer setpoints rise 4 degrees with zero comfort loss. None of these replace filters; together they compound.",
              "Attic insulation and air sealing multiply filter savings because runtime hours fall: less cycling means less dust loading, longer filter life, and smaller equipment strain across heat waves. Shade south and west glass with films or exterior shading to cut peak cooling demand, and keep condensers clear with two feet of airflow plus yearly coil rinsing so head pressures stay low. Each improvement lowers the static-pressure and thermal stress the whole system endures.",
              "Maintenance contracts complete the stack at $75 to $200 yearly: technicians clean evaporator and condenser coils, verify refrigerant charge, tighten electrical connections, test capacitors before they strand July weekends, and measure temperature splits that reveal airflow problems filters alone cannot show. Pair the tune-up with religious filter changes and the seasonal checklists, and the system that once wheezed through August hums through it. Log every service with readings so degradation trends surface years before failures.",
            ],
          },
          {
            h2: "How much do filters cost over a year?",
            paragraphs: [
              "Annual math favors pleated discipline: four MERV 8 to 11 changes at $8 to $18 each totals $30 to $70 per year for average homes, while monthly pet-home changes at $10 each run $80 to $120. Thick media cartridges at $25 to $50 changed twice yearly land at $50 to $100. Subscription multipacks trim 10 to 20 percent. All region-dependent, all trivial beside the 5 to 15 percent energy penalty and the compressor or heat-exchanger failures neglect invites.",
              "Professional maintenance complements rather than replaces filters: a $75 to $200 annual tune-up covers coils, drains, refrigerant checks, and electrical tightening that filters never touch. DIY the filters religiously and hire the tune-up yearly — the combination is what ENERGY STAR's maintenance guidance actually describes. Track both in our spring and fall home maintenance checklists for full lifecycle care.",
            ],
            table: {
              headers: ["Household", "Filter plan", "Yearly cost"],
              rows: [
                ["Average, no pets", "MERV 8–11 quarterly", "$30–$70"],
                ["Pets / allergies", "MERV 11 monthly–bimonthly", "$80–$150"],
                ["Media cabinet homes", "Thick cartridge 2x/year", "$50–$100"],
                ["Annual pro tune-up", "Coils, drain, electrical", "$75–$200"],
              ],
            },
          },
        ]}
        steps={[
          { title: "Read the old filter", body: "Pull the existing filter, photograph its nominal size stamp and arrow direction, and note thickness, brand, and MERV before shopping." },
          { title: "Buy matched replacements", body: "Match nominal size exactly, choose MERV 8 to 11 for most homes, and buy two so the next change never waits on a trip." },
          { title: "Shut down and open", body: "Switch the system off at the thermostat, open the filter slot or return grille, and slide the old filter out without shaking dust into the duct." },
          { title: "Vacuum the slot", body: "Vacuum dust and debris from the empty slot, rails, and grille with a brush attachment so the new filter seats on clean metal." },
          { title: "Slide in arrow-to-blower", body: "Insert the new filter with its arrow pointing toward the furnace and blower, seating fully with zero bypass gaps at the edges." },
          { title: "Date and schedule", body: "Write today's date on the frame in marker, close and latch everything, restart the system, and set the next-change reminder." },
          { title: "Verify airflow", body: "Feel vent output, listen for strain-free blower tone, and recheck in a week. Persistent weakness means a technician call." },
        ]}
        stepsHeading="How do you change an HVAC filter in 7 steps?"
        faqs={faqs}
        outboundLinks={[
          { href: "https://www.energy.gov/energysaver", label: "DOE heating and cooling tips" },
          { href: "https://www.energystar.gov", label: "ENERGY STAR maintenance advice" },
        ]}
        internalLinks={[
          { href: "/water-heater-maintenance", label: "water-heater maintenance" },
          { href: "/spring-home-maintenance-checklist", label: "spring checklist" },
          { href: "/fall-home-maintenance-checklist", label: "fall checklist" },
          { href: "/weatherproofing-windows-doors", label: "weatherproofing windows and doors" },
        ]}
        closing={[
          "Ten minutes, one correctly sized filter, arrow toward the blower, date on the frame — repeated on schedule. That humble loop guards air quality, energy bills, and the most expensive appliance in the house.",
          "Costs are region-dependent ranges from 2026 U.S. averages. For efficiency guidance see the Department of Energy at energy.gov and ENERGY STAR maintenance advice at energystar.gov.",
        ]}
      />
    </>
  );
}
