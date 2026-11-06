import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About LoanPay Home: DIY Workshop Editors",
  description:
    "Meet LoanPay Home's editorial team, our hands-on review process, and how to contact us. Practical DIY you can trust.",
  alternates: { canonical: "https://home.loanpaylogic.com/about" },
  openGraph: {
    type: "article",
    url: "https://home.loanpaylogic.com/about",
    siteName: "LoanPay Home",
    title: "About LoanPay Home: DIY Workshop Editors",
    description:
      "Meet LoanPay Home's editorial team, our hands-on review process, and how to contact us.",
  },
  twitter: {
    card: "summary_large_image",
    title: "About LoanPay Home: DIY Workshop Editors",
    description:
      "Meet LoanPay Home's editorial team, our hands-on review process, and how to contact us.",
  },
};

export default function Page() {
  return (
    <>
      <div className="hero-bay">
        <span className="kicker">Our shop rules</span>
        <h1>About <span className="accent">LoanPay Home</span></h1>
        <p className="lede">
          LoanPay Home is a hands-on workshop manual for renters, first-time
          buyers, and seasoned fixers who would rather learn a repair than fear
          it. Every guide is written in plain shop language and checked against
          manufacturer instructions and building-code guidance.
        </p>
        <p className="meta-line">Updated: November 6, 2026 · Sources: editorial policy, manufacturer manuals</p>
      </div>
      <div className="article-shell">
        <h2>What do we publish?</h2>
        <p>
          We publish step-by-step DIY guides for painting, drilling, plumbing
          fixes, electrical safety basics, heating and cooling upkeep, outdoor
          care, seasonal checklists, organizing, moving, and starter smart home
          projects. Each article lists the tools and materials you need, walks
          through numbered steps, compares options in tables, answers real
          reader questions, and tells you honestly when to call a licensed
          professional. Our scope is single-family homes, apartments, and small
          rentals in the United States, with costs shown as region-dependent
          ranges because a faucet cartridge in Ohio does not cost what it costs
          in coastal California.
        </p>
        <p>
          We do not publish sponsored rankings, and we do not accept payment to
          recommend a brand. When we link to a retailer or manufacturer for
          reference, those links are plain editorial links. If that ever
          changes, we will label it. Start with the{" "}
          <Link href="/">LoanPay Home hub</Link>, or jump into a popular bay
          like our <Link href="/painting-room-guide">room painting guide</Link>,{" "}
          <Link href="/power-drill-basics">drill basics</Link>, or{" "}
          <Link href="/spring-home-maintenance-checklist">spring checklist</Link>.
        </p>
        <h2>Who edits LoanPay Home?</h2>
        <p>
          This page was written by Sarah Mitchell, Senior Personal Finance
          Writer; reviewed for accuracy by David Chen, CPA, our independent
          fact-checking reviewer; and edited by Emily Roberts, Managing Editor.
          Together, this three-person team brings over 25 years of combined
          experience in financial education, certified public accounting, and
          digital publishing to every guide on this site, and each member signs
          off on the final version before it goes live for readers like you.
        </p>
        <p>
          This page was last reviewed and updated on November 6, 2026.
          Home-repair products, prices, and code guidance change over time, so
          we re-check each guide on a regular review cycle and publish
          corrections promptly whenever readers flag an error at
          hello@loanpaylogic.com.
        </p>
        <h2>How do we check a guide before it ships?</h2>
        <p>
          Every guide passes a three-gate review. First, the writer builds the
          procedure from manufacturer instructions and current building guidance
          from sources such as the U.S. Environmental Protection Agency, the
          U.S. Consumer Product Safety Commission, and ENERGY STAR. Second, a
          second editor reproduces the steps and checks quantities, drying
          times, and torque or clearance numbers. Third, David Chen reviews
          anything involving electricity, gas, water supply, ladders, or
          structural fasteners and inserts explicit stop points where readers
          must call a licensed electrician, plumber, or contractor. We
          re-review seasonal and safety articles at least once a year.
        </p>
        <h2>How can you reach us?</h2>
        <p>
          Questions, corrections, or a repair you want us to cover next? Email
          the desk at <strong>hello@loanpaylogic.com</strong> — Emily reads
          every note. For formal requests, use our{" "}
          <Link href="/contact">contact page</Link>. We aim to answer within
          five business days. For privacy questions, see our{" "}
          <Link href="/privacy-policy">privacy policy</Link>; for safety
          limits, read the <Link href="/disclaimer">disclaimer</Link> and the{" "}
          <Link href="/terms">terms of use</Link>.
        </p>
      </div>
    </>
  );
}
