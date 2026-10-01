import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Safety Disclaimer for DIY Home Guides",
  description:
    "LoanPay Home disclaimer: general education only, not pro advice. Hire licensed pros for electrical, gas, structural work.",
  alternates: { canonical: "https://home.loanpaylogic.com/disclaimer" },
  openGraph: {
    type: "article",
    url: "https://home.loanpaylogic.com/disclaimer",
    siteName: "LoanPay Home",
    title: "Safety Disclaimer for DIY Home Guides",
    description:
      "General education only, not professional advice. Hire licensed pros for risky work.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safety Disclaimer for DIY Home Guides",
    description:
      "General education only, not professional advice. Hire licensed pros for risky work.",
  },
};

export default function Page() {
  return (
    <>
      <div className="hero-bay">
        <span className="kicker">Read before you wrench</span>
        <h1>LoanPay Home <span className="accent">Disclaimer</span></h1>
        <p className="lede">
          Our guides teach general skills. They do not replace a licensed
          electrician, plumber, HVAC technician, or structural contractor — or
          your local code book.
        </p>
        <p className="meta-line">Updated: October 2026 · Sources: editorial policy, CPSC guidance</p>
      </div>
      <div className="article-shell">
        <div className="warn-box" role="note">
          <strong>General education, not professional advice. </strong>
          Hire a licensed pro for electrical, gas, and structural work. If you
          are unsure, stop and call one.
        </div>
        <h2>What does this disclaimer cover?</h2>
        <p>
          Everything on home.loanpaylogic.com — steps, tables, cost ranges,
          tool lists, and answers — is general education for a U.S. audience.
          Homes differ by age, wiring, plumbing, local amendments, and
          manufacturer revisions, so a procedure that is safe in one house may
          be unsafe in yours. Always read the product manual, check local
          permit rules, wear eye, ear, and respiratory protection, and verify
          power is off with a tester before touching anything electrical. Our
          editors review against sources like the Consumer Product Safety
          Commission and manufacturer manuals, but errors remain possible and
          conditions change.
        </p>
        <h2>When must you call a licensed professional?</h2>
        <p>
          Call one for anything involving main panels, new circuits, aluminum
          wiring, gas lines, flues, load-bearing walls, major leaks inside
          walls, or work at heights you cannot do with stable footing and a
          helper. Electrical, gas, and structural topics on this site each
          carry their own callout repeating this rule — for example in the{" "}
          <Link href="/outlet-replacement-safety-guide">outlet safety guide</Link>,{" "}
          <Link href="/smoke-detector-guide">smoke detector guide</Link>, and{" "}
          <Link href="/water-heater-maintenance">water-heater guide</Link>. If
          a project already went wrong, stop, make the area safe, and call a
          pro rather than following more internet steps. Learn more{" "}
          <Link href="/about">about us</Link>, <Link href="/contact">contact
          us</Link>, or return to the <Link href="/">LoanPay Home hub</Link>.
        </p>
      </div>
    </>
  );
}
