import type { Metadata } from "next";
import ShopArticle from "@/components/ShopArticle";
import { faqJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Water Heater Maintenance: Flush & Extend Life",
  description:
    "Water heater maintenance adds years: flush sediment yearly, test the TPR valve, and hold 120 degrees. DIY costs $0–$30. Add years to your tank starting now!",
  alternates: { canonical: "https://home.loanpaylogic.com/water-heater-maintenance" },
  openGraph: {
    type: "article",
    url: "https://home.loanpaylogic.com/water-heater-maintenance",
    siteName: "LoanPay Home",
    title: "Water Heater Maintenance: Flush & Extend Life",
    description:
      "Water heater maintenance adds years: flush sediment yearly, test the TPR valve, and hold 120 degrees. DIY costs $0–$30. Add years to your tank starting now!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Heater Maintenance: Flush & Extend Life",
    description:
      "Water heater maintenance adds years: flush sediment yearly, test the TPR valve, and hold 120 degrees. DIY costs $0–$30. Add years to your tank starting now!",
  },
};

const faqs = [
  {
    q: "How much does water heater maintenance cost?",
    a: "DIY annual maintenance costs $0 to $30: a garden hose and bucket you own, plus an optional $10 to $30 replacement anode rod every 3 to 5 years. Professional flushing and inspection runs $75 to $200, region-dependent. A neglected tank fails in 8 to 12 years while maintained tanks reach 12 to 15, so the habit defers a $1,000 to $2,500 replacement by years.",
  },
  {
    q: "How often should I flush my water heater?",
    a: "Flush sediment yearly in average water, twice yearly with hard water over 7 grains per gallon. Hissing, popping, or rumbling during heating means sediment has already insulated the bottom and demands immediate flushing. Tanks never flushed in a decade need professional judgment first, since disturbing heavy scale can expose weakened metal.",
  },
  {
    q: "What temperature should my water heater be set to?",
    a: "Set storage tanks to 120 degrees Fahrenheit per DOE and CPSC guidance: hot enough for dishes and laundry, cool enough to prevent scalds that send children and seniors to emergency rooms. Each 10-degree reduction saves 3 to 5 percent on water heating energy. Households with medical needs for hotter water should add mixing valves rather than raising the whole tank.",
  },
  {
    q: "How do I know if my anode rod needs replacing?",
    a: "Inspect the anode every 3 years: replace when its core wire shows through, calcium coats it solid, or less than half an inch of magnesium remains. Rotten-egg hot-water odor often means anode chemistry reacting with sulfate bacteria rather than rod failure — treat with chlorination guidance before swapping. Softened water dissolves anodes faster, so soften-and-inspect together.",
  },
  {
    q: "When should I call a plumber for the water heater?",
    a: "Call immediately for rusty tank-body water, puddles under the tank, gas odors, scorch marks, a TPR valve that drips constantly or will not test, or rumbling that persists after flushing. Any gas smell means leave the house and call the utility from outside first. Tank-body leaks never repair — replacement starts that day.",
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)).replace(/</g, "\u003c") }} />
      <div className="hero-bay">
        <span className="kicker">Systems Bay 02</span>
        <h1>Water Heater Maintenance <span className="accent">That Adds Years</span></h1>
        <p className="lede">
          Sediment is a slow blanket that overheats tanks and eats efficiency.
          Flush yearly, test the safety valve, hold 120°F — and know exactly
          when to call the pro.
        </p>
      </div>
      <ShopArticle
        kicker="Skill level: careful beginner · Annual hour · $0–$30 DIY"
        intro={[
          "Water heater maintenance protects the hardest-working tank in the house because dissolved minerals settle with every heating cycle into an insulating sediment blanket. That blanket forces burners and elements to overheat the steel beneath it — the popping and rumbling owners notice too late — while efficiency slides and tank life shrinks from 12 to 15 years toward 8. Annual flushing plus a temperature check at 120 degrees and a temperature-pressure relief test costs $0 to $30 DIY against $75 to $200 professionally and $1,000 to $2,500 for early replacement, all region-dependent. The Department of Energy credits the 120-degree setting alone with 3 to 5 percent savings per 10-degree drop plus scald protection the CPSC endorses.",
          "This guide walks gas and electric storage tanks through the safe annual ritual: power and fuel control, sediment flushing, TPR valve testing, anode inspection timing, and leak-watch habits. Gas venting, electrical elements, and scalding discharge make this a discipline job — the safety callout and stop rules below are as important as the wrench steps. Pair it with our HVAC filter guide for full systems care and the seasonal checklists that never let a year slip.",
        ]}
        sources="Sources: DOE water-heating guidance, CPSC scald-prevention data, manufacturer manuals"
        safety="Water heaters combine scalding water, gas fuel, high-voltage elements, and pressure vessels. Never touch gas controls, venting, or electrical elements beyond this guide's homeowner steps. This is general education, not professional advice; hire a licensed plumber or gas technician for gas odors, leaks, TPR failures, and any tank-body rust. See our disclaimer."
        sections={[
          {
            h2: "How does sediment destroy a water heater?",
            paragraphs: [
              "Hard-water minerals precipitate out as water heats, drifting down as sand-like sediment that compacts into an insulating slab across the tank bottom. Gas flames then overheat the steel beneath the blanket while water above heats unevenly, and electric lower elements bury themselves until they burn out. Symptoms progress honestly: first longer reheat times and higher bills, then audible popping as steam bubbles force through the bed, then rumbling violent enough to shake pipes. Efficiency losses of 10 to 20 percent are common in never-flushed hard-water tanks.",
              "Prevention is a water-chemistry habit. Test hardness with a $10 strip: above 7 grains per gallon schedules twice-yearly flushing, below it yearly suffices. Water softeners slow accumulation but accelerate anode consumption, pairing the two tasks on one calendar. Drain a test quart from the drain valve each spring — clear water means the schedule holds, sandy water means flush now, rusty water from the tank body means replacement planning starts today.",
            ],
          },
          {
            h2: "What tools and safety gear does flushing need?",
            paragraphs: [
              "The kit is humble but specific: a garden hose long enough to reach a floor drain or daylight downhill, a bucket for test quarts, adjustable wrench, flat screwdriver for older gas control covers, a thermometer for tap verification, work gloves, eye protection, and closed shoes against scalding discharge. Keep towels staged and a phone nearby. Know your tank's controls before touching anything: gas models carry a control knob with pilot settings and a vent hood above, electric models hide behind breaker-labeled panels with element thermostats inside.",
              "Fuel control precedes every step. Gas tanks turn to pilot or off per the control label during flushing; electric tanks switch off at the dedicated double-pole breaker, verified by no-hot-water reheat and a tester at the access panel if you open one. Never drain an electric tank with power on — exposed elements burn out in seconds. Photograph control positions before changing them so restoration is exact.",
            ],
            checkHeading: "Flush-day kit checklist",
            bullets: [
              "Garden hose to drain point, bucket, wrench, screwdriver, tap thermometer",
              "Gloves, eye protection, towels staged, controls photographed before changes",
              "Gas set to pilot/off or electric breaker off and verified before draining",
              "Anode socket (1-1/16 in) and breaker bar staged for 3-year inspections",
            ],
          },
          {
            h2: "How do you flush sediment step by safely?",
            paragraphs: [
              "Control energy first, water second. Set gas to pilot or switch the electric breaker off, then close the cold-water inlet valve and open a hot tap somewhere upstairs to vent vacuum. Connect the hose to the drain valve, route it downhill to the drain, and open the valve slowly — initial flow runs hot and forceful, so stand clear and watch the discharge point, not the valve. Drain several gallons into the bucket first for inspection: clear means a maintenance flush, sandy means a full flush with agitation, rusty from the tank bottom means professional assessment.",
              "Agitate and refill with patience: pulse the cold inlet open in bursts to stir the sediment bed while draining, repeating until discharge runs clear, then close the drain valve, remove the hose, reopen the inlet fully, and let the tank refill until the vent tap runs solid without sputtering. Only then restore gas control or breaker power — heating a partially filled tank damages it. Verify hot water at 120 degrees with the thermometer after one full reheat cycle, adjusting the dial in small steps toward the mark.",
            ],
          },
          {
            h2: "How do you test the TPR valve and set 120°F?",
            paragraphs: [
              "The temperature-pressure relief valve is the tank's last defense against explosion, and annual testing proves it moves. With a bucket under the discharge pipe, lift the test lever briefly — hot water should surge out and stop fully when released. A valve that drips constantly, will not open, or will not reseat gets replaced by a plumber immediately; never plug or cap a TPR discharge. Keep the discharge pipe full-length to within 6 inches of the floor with no valves or threads that invite capping.",
              "Temperature setting balances safety and function at 120 degrees per DOE guidance. Dial down in steps, wait a full reheat cycle, and thermometer-test the nearest tap — dials lie by 5 to 10 degrees routinely. At 120 degrees, showers stay comfortable, dishwashers with boosters still sanitize, and second-degree scald time stretches from seconds to minutes for vulnerable skin. Homes needing hotter storage for medical reasons add thermostatic mixing valves at fixtures rather than superheating the tank.",
            ],
            table: {
              headers: ["Check", "Pass", "Fail action"],
              rows: [
                ["TPR lever lift", "Strong flow, full stop on release", "Plumber replaces valve now"],
                ["Tap temperature", "120°F after reheat", "Adjust dial, retest next cycle"],
                ["Discharge pipe", "Full length, open end near floor", "Pro corrects piping"],
                ["Tank body water", "Dry jacket, clear test quart", "Rust/puddles mean replace"],
              ],
            },
          },
          {
            h2: "When does maintenance end and replacement begin?",
            paragraphs: [
              "Anodes buy the years between: inspect the rod every 3 years by backing it from the tank top, replacing when core wire shows or magnesium thins below half an inch. Softened-water homes inspect every 2 years. Rotten-egg odor in hot water only usually signals sulfate bacteria reacting with the anode — sanitize per manufacturer chlorination steps before condemning the rod. Budget $10 to $30 for the rod plus the deep socket, region-dependent.",
              "Replacement math turns on age and symptoms. Tanks past 10 to 12 years with rusty water, under-tank puddles, or persistent rumbling after flushing are spending their last seasons — start quotes at $1,000 to $2,500 installed depending on fuel, size, and code upgrades, region-dependent. Proactive replacement on your schedule beats emergency replacement at midnight rates with water on the floor. Track install date on the tank in marker and fold the annual flush into our fall home maintenance checklist.",
            ],
            table: {
              headers: ["Signal", "DIY maintenance", "Pro / replace"],
              rows: [
                ["Clear test quart, quiet heat", "Yearly flush, 120°F", "—"],
                ["Popping, sandy water", "Immediate full flush", "Tech if persists"],
                ["TPR fails test", "—", "Plumber same week"],
                ["Rust, puddles, gas odor", "—", "Pro now; gas odor: evacuate first"],
              ],
            },
          },
        ]}
        steps={[
          { title: "Control energy and water", body: "Set gas to pilot or electric breaker off and verified. Close the cold inlet, open an upstairs hot tap to vent, and photograph every control position." },
          { title: "Connect hose and test quart", body: "Attach the hose downhill to a drain, open the valve slowly, and inspect the first bucket: clear, sandy, or rusty decides the flush depth." },
          { title: "Flush with agitation", body: "Drain fully, pulse the cold inlet in bursts to stir sediment, and repeat until discharge runs clear. Keep clear of hot discharge." },
          { title: "Refill before power", body: "Close the drain valve, reopen the inlet fully, and wait until the vent tap runs solid. Only then restore gas control or breaker." },
          { title: "Test TPR and set 120°F", body: "Lift the TPR lever to verify strong flow and full stop. Adjust toward 120°F, reheat fully, and thermometer-verify at the tap." },
          { title: "Inspect anode on schedule", body: "Every 3 years back the rod out, replace when core shows or magnesium thins, and note softener-accelerated wear." },
          { title: "Log and watch", body: "Record the date on the tank, schedule next year's flush, and watch monthly for drips, rust, odors, and sounds that escalate to a pro." },
        ]}
        stepsHeading="How do you maintain a water heater in 7 steps?"
        faqs={faqs}
        outboundLinks={[
          { href: "https://www.energy.gov/energysaver", label: "DOE water-heating guidance" },
          { href: "https://www.cpsc.gov", label: "CPSC scald-prevention data" },
        ]}
        internalLinks={[
          { href: "/hvac-filter-guide", label: "HVAC filter guide" },
          { href: "/fix-leaky-faucet", label: "fix a leaky faucet" },
          { href: "/fall-home-maintenance-checklist", label: "fall checklist" },
          { href: "/spring-home-maintenance-checklist", label: "spring checklist" },
        ]}
        closing={[
          "Yearly flushing, a tested relief valve, 120 degrees, and a watched anode turn a disposable tank into a 15-year servant. Mark the tank, keep the hose handy, and never let a year pass unflushed.",
          "Costs are region-dependent ranges from 2026 U.S. averages. For efficiency and temperature guidance see the Department of Energy at energy.gov/energysaver, and for gas odors evacuate first and call the utility from outside.",
        ]}
      />
    </>
  );
}
