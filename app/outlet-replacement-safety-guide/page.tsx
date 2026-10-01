import type { Metadata } from "next";
import ShopArticle from "@/components/ShopArticle";
import { faqJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Replace an Outlet Safely: GFCI & Wiring",
  description:
    "Replace an outlet safely with power verified off, correct brass and silver terminals, and GFCI trip tests. DIY costs $3–$25. Protect your home starting now!",
  alternates: { canonical: "https://home.loanpaylogic.com/outlet-replacement-safety-guide" },
  openGraph: {
    type: "article",
    url: "https://home.loanpaylogic.com/outlet-replacement-safety-guide",
    siteName: "LoanPay Home",
    title: "Replace an Outlet Safely: GFCI & Wiring",
    description:
      "Replace an outlet safely with power verified off, correct brass and silver terminals, and GFCI trip tests. DIY costs $3–$25. Protect your home starting now!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Replace an Outlet Safely: GFCI & Wiring",
    description:
      "Replace an outlet safely with power verified off, correct brass and silver terminals, and GFCI trip tests. DIY costs $3–$25. Protect your home starting now!",
  },
};

const faqs = [
  {
    q: "How much does it cost to replace an electrical outlet?",
    a: "DIY outlet replacement costs $3 to $25: $2 to $5 for a standard duplex receptacle, $12 to $25 for a GFCI or tamper-resistant model, plus a $15 to $30 non-contact tester that serves every future electrical job. An electrician charges $75 to $200 per outlet, region-dependent, with GFCI installs and troubleshooting running higher. Aluminum wiring, ungrounded boxes, or multi-wire circuits convert the job to electrician-only at $150 to $400.",
  },
  {
    q: "How do I know if my outlet needs GFCI protection?",
    a: "Kitchens, bathrooms, garages, basements, laundry areas, outdoors, and any outlet within 6 feet of a sink or water source needs GFCI protection under modern electrical code. Test monthly with the TEST button: the lamp should die, then RESET should restore it. Replace any GFCI that fails either half of the test, and never install a standard outlet where a GFCI belongs.",
  },
  {
    q: "Why does my outlet feel warm or smell burned?",
    a: "Warm faceplates, burning-plastic odors, flickering, or scorch marks mean loose connections, overloaded circuits, or failing aluminum terminations generating heat. Stop using the outlet immediately, switch off its breaker, and call a licensed electrician — the CPSC flags exactly these symptoms as fire precursors. Never upsize a breaker or ignore heat that returns after a device swap.",
  },
  {
    q: "Can I replace a two-prong outlet with a three-prong one?",
    a: "Only with proper grounding or GFCI protection: a GFCI receptacle may legally replace an ungrounded two-prong outlet when labeled NO EQUIPMENT GROUND per CPSC and code guidance, protecting people without providing an equipment ground. Simply jumpering ground to neutral or installing an ungrounded three-prong outlet creates a lethal bootleg ground. Have an electrician verify the box and labeling if you are unsure.",
  },
  {
    q: "When must I call an electrician instead of DIY?",
    a: "Call an electrician for aluminum wiring, cloth-insulated or crumbling conductors, melted insulation, multi-wire shared-neutral circuits, main-panel work, or any box where wire identity is unclear. Also stop when breakers trip repeatedly, more than one outlet misbehaves, or local rules require permits and licensed installers. Electricity gives one warning per mistake; professionals carry the training and insurance for the rest.",
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)).replace(/</g, "\u003c") }} />
      <div className="hero-bay">
        <span className="kicker">Electrical Bay 01</span>
        <h1>Replace an Outlet <span className="accent">Without the Shock</span></h1>
        <p className="lede">
          Swapping a worn outlet is a beginner-safe electrical job — but only
          with power verified off, wires tested twice, and GFCI rules honored.
          Do it exactly in this order.
        </p>
      </div>
      <ShopArticle
        kicker="Skill level: careful beginner · 30–45 min · $3–$25 DIY"
        intro={[
          "Replacing an outlet is the rare electrical task a careful homeowner can own, because the procedure is a strict ritual — breaker off, tester-confirmed dead, photograph, swap wire-for-wire, test under load — that leaves nothing to judgment. Worn outlets show loose plug grip, cracked faces, buzzing, or intermittent power, and a $2 to $5 standard receptacle or $12 to $25 GFCI restores safe contact in under an hour. An electrician bills $75 to $200 per outlet for the same work, region-dependent, so the DIY savings are real once the $15 to $30 tester joins your kit. But the ritual admits zero shortcuts: CPSC fire investigations tie branch-circuit failures to overheated connections in aging homes, and the safety sequence below exists because mistakes here burn houses.",
          "This guide covers standard duplex swaps and GFCI protection step by step, with the stop rules that convert borderline jobs to electrician calls. You will learn to identify LINE versus LOAD, land wires on the correct brass, silver, and green terminals, handle backstab-to-screw upgrades, and test with lamp plus GFCI buttons. Aluminum wiring, ungrounded boxes, and melted insulation are hard stops — read them carefully before opening a single cover plate.",
        ]}
        sources="Sources: CPSC home wiring hazards guide, ESFI DIY electrical safety, 2026 U.S. cost averages"
        safety="Electrical work can kill and burn homes. Always switch off the breaker, verify dead with a tester on a known-live source first, and never touch plumbing or gas pipes during electrical work. This is general education, not professional advice; hire a licensed electrician for aluminum wiring, panel work, or anything unclear. See our disclaimer."
        sections={[
          {
            h2: "What warning signs mean an outlet must go?",
            paragraphs: [
              "Outlets announce failure before they cause it. Plugs that droop or fall out signal fatigued contact tension that arcs microscopically with every wiggle. Faceplates warm to the touch, discoloration, buzzing, burning-plastic smells, or flickering lamps on the same circuit mean resistance heating at a loose terminal — the exact condition CPSC investigations link to branch-circuit fires, especially in homes over 20 years old. GFCI outlets that no longer trip on TEST, or standard outlets in kitchens and baths lacking GFCI protection, fail modern safety expectations regardless of appearance.",
              "Triage honestly before buying parts. One misbehaving outlet with sound wiring is a DIY swap; several dead outlets, breakers that trip on reset, or heat at the panel are system symptoms needing an electrician's diagnosis. Note whether the outlet is switched, half-switched, GFCI-protected downstream, or fed by aluminum conductors — each changes the procedure. Photograph the room's breaker map and confirm which breaker truly kills the outlet with a lamp, since mislabeled panels are the norm, not the exception.",
            ],
          },
          {
            h2: "Which outlet and tester should you buy?",
            paragraphs: [
              "Match the replacement to the location's protection needs. Standard 15-amp tamper-resistant duplex receptacles suit bedrooms and living rooms; 20-amp versions suit kitchen small-appliance circuits with 12-gauge wire. GFCI receptacles belong in kitchens, bathrooms, garages, basements, laundry, outdoors, and within 6 feet of sinks — they cut power in milliseconds on ground faults that kill. Buy spec-grade ($8 to $15) over builder-grade for outlets cycled daily; the contact tension lasts years longer. A non-contact voltage tester plus a $10 plug-in outlet tester with GFCI trip button completes verification.",
              "Check the box depth and wire gauge while shopping. Fourteen-gauge wire pairs with 15-amp devices and breakers; 12-gauge with 20-amp. If the box is shallow and crowded, buy a box extender rather than cramming — crushed wires fail. For ungrounded two-slot boxes, plan a GFCI replacement labeled NO EQUIPMENT GROUND rather than a fake-grounded three-prong. Keep wire nuts, electrical tape, and a headlamp in the kit; total tester-plus-parts outlay runs $20 to $55, region-dependent, and the testers serve for life.",
            ],
            table: {
              headers: ["Location", "Device", "Typical cost"],
              rows: [
                ["Bedroom / living room", "15A tamper-resistant duplex", "$2–$8"],
                ["Kitchen / bath / garage / outdoor", "GFCI receptacle", "$12–$25"],
                ["High-use / spec grade", "Spec-grade duplex or GFCI", "$8–$25"],
                ["Testing (every job)", "Non-contact + plug-in testers", "$15–$30"],
              ],
            },
          },
          {
            h2: "How do you kill power and prove it dead?",
            paragraphs: [
              "Power verification is a two-instrument ritual, never a single glance. Plug a lamp into the outlet and confirm it burns, switch the suspect breaker off, and confirm the lamp dies. Prove your non-contact tester on a nearby live outlet — beeping there — then test the dead outlet's slots, terminals, and box interior for silence. ESFI's DIY rule is absolute: breaker off, unplug loads, test wires before touching, and keep away from plumbing and gas piping. Tape the breaker in the off position and tell the household so nobody helpful restores it mid-job.",
              "Expect shared-circuit surprises: one breaker often kills several rooms, and multi-wire circuits can leave a second hot leg in the same box. Test every conductor in the box, not just the outlet's slots, and treat white neutrals as potentially live until proven otherwise. If the lamp stays lit on every breaker or the panel directory is fiction, stop and map circuits properly with a helper before proceeding. Aluminum conductors — dull silver instead of copper orange — end DIY immediately per CPSC repair guidance; only qualified electricians using approved methods touch aluminum terminations.",
            ],
            checkHeading: "Dead-proof checklist",
            bullets: [
              "Lamp confirms live, breaker off, lamp confirms dead on the same outlet",
              "Tester proven on known-live source, then silence on every box conductor",
              "Breaker taped off, household warned, no plumbing or gas contact during work",
              "Aluminum or cloth wiring found means stop and call an electrician",
            ],
          },
          {
            h2: "How do you wire the new outlet terminal by terminal?",
            paragraphs: [
              "Photograph the old wiring from two angles before loosening anything, noting which cable is LINE (power in) versus LOAD (downstream on GFCIs) and whether a tab between brass screws is broken for switched outlets. Release wires from old terminals — cut and re-strip backstabbed wires rather than reusing weakened ends — and strip fresh copper to the gauge mark on the new device, about 5/8 inch. Land black hot wires on brass screws, white neutrals on silver screws, and bare or green grounds on the green screw, curling hooks clockwise so tightening draws them in. Never install with backstabs on the new device; side screws and clamp plates hold torque for decades while backstabs loosen into arcs.",
              "GFCI wiring adds LINE/LOAD discipline: feed wires land on LINE terminals, downstream protected wires on LOAD with the warning sticker removed only when downstream exists, and reversed LINE/LOAD leaves protection dead — the device's own test procedure catches this, which is why testing matters. Fold wires accordion-style into the box without nicking insulation, mount the device level, and install the faceplate without bowing. Restore power, plug in the lamp, press TEST to kill it, press RESET to revive, and trip-test with the plug-in tester. Any failure to trip, reset, or hold means power back off and re-diagnosis, not hope.",
            ],
          },
          {
            h2: "What does outlet work cost and when is it pro-only?",
            paragraphs: [
              "DIY costs stay under $55 even counting testers: $2 to $8 for standard receptacles, $12 to $25 for GFCIs, $15 to $30 for both testers, all region-dependent. An electrician charges $75 to $200 per outlet, climbing to $150 to $400 with aluminum remediation, new GFCI circuits, or troubleshooting — fair prices for licensed, insured, code-verified work. Permits for added circuits run $50 to $150 where required.",
              "The pro-only list is non-negotiable: aluminum branch wiring needing approved pigtailing, cloth or crumbling insulation, melted or scorched conductors, multi-wire circuits you cannot fully map, breaker-panel work of any kind, and jurisdictions requiring licensed installers. Call too when several outlets fail together, breakers trip repeatedly, or heat and odor appear — those are system faults, not device faults. Schedule an electrician through licensed local pros and fold outlet audits into our fall home maintenance checklist and smart home starter guide planning.",
            ],
            table: {
              headers: ["Job", "DIY cost", "Electrician cost"],
              rows: [
                ["Standard swap (sound wiring)", "$3–$10", "$75–$150"],
                ["GFCI swap", "$12–$25", "$100–$200"],
                ["Aluminum remediation", "Pro only", "$150–$400"],
                ["New circuit + permit", "Pro only", "$300–$800+"],
              ],
            },
          },
        ]}
        steps={[
          { title: "Map and lamp-test", body: "Plug in a lamp, find the breaker that kills it, and label the panel correctly. Note switched halves, downstream outlets, and wire colors before touching a screw." },
          { title: "Lock off and prove dead", body: "Switch the breaker off, tape it, warn the household. Prove the tester live elsewhere, then confirm silence on every slot, terminal, and conductor in the box." },
          { title: "Photograph and release", body: "Shoot the wiring from two angles, note LINE versus LOAD and broken tabs, then release wires — cutting backstabbed ends for fresh copper." },
          { title: "Strip and land fresh", body: "Strip to the gauge mark, hook clockwise: black to brass, white to silver, ground to green. Use screws or clamps, never backstabs." },
          { title: "Fold, mount, and plate", body: "Accordion wires gently into the box, level the device, and fit the faceplate flat without bowing or pinching insulation." },
          { title: "Energize and trip-test", body: "Restore power, run the lamp, press TEST to kill and RESET to revive, then trip with a plug-in tester. Verify downstream protection where wired." },
          { title: "Log and monitor", body: "Record the date inside the cover with pencil, monthly-test GFCIs hereafter, and watch for warmth or odor that means an electrician call." },
        ]}
        stepsHeading="How do you replace an outlet in 7 steps?"
        faqs={faqs}
        outboundLinks={[
          { href: "https://www.cpsc.gov", label: "CPSC home wiring hazards guide" },
          { href: "https://www.esfi.org", label: "ESFI DIY electrical safety" },
        ]}
        internalLinks={[
          { href: "/smoke-detector-guide", label: "smoke detector guide" },
          { href: "/power-drill-basics", label: "power drill basics" },
          { href: "/smart-home-starter-guide", label: "smart home starter guide" },
          { href: "/fall-home-maintenance-checklist", label: "fall checklist" },
        ]}
        closing={[
          "Done in order — map, prove dead, photograph, land bright-to-brass, trip-test — an outlet swap is one of the most satisfying safe DIY wins in the house. Respect the stop rules with equal discipline, and the borderline jobs get the licensed pro they deserve.",
          "Costs are region-dependent ranges from 2026 U.S. averages. For official safety rules see the CPSC home wiring hazards guide at cpsc.gov and ESFI DIY electrical safety at esfi.org.",
        ]}
      />
    </>
  );
}
