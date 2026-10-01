import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use for LoanPay Home Guides",
  description:
    "LoanPay Home terms: educational DIY content, your responsibilities, safety rules, and limits of liability. Read this.",
  alternates: { canonical: "https://home.loanpaylogic.com/terms" },
  openGraph: {
    type: "article",
    url: "https://home.loanpaylogic.com/terms",
    siteName: "LoanPay Home",
    title: "Terms of Use for LoanPay Home Guides",
    description:
      "Educational DIY content, your responsibilities, safety rules, and liability limits.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Use for LoanPay Home Guides",
    description:
      "Educational DIY content, your responsibilities, safety rules, and liability limits.",
  },
};

export default function Page() {
  return (
    <>
      <div className="hero-bay">
        <span className="kicker">Shop rules of the road</span>
        <h1>LoanPay Home <span className="accent">Terms of Use</span></h1>
        <p className="lede">
          By reading our guides you agree to use them as education, follow
          safety rules, and hire licensed pros where the law or the risk
          requires it.
        </p>
        <p className="meta-line">Updated: October 2026 · Sources: editorial policy</p>
      </div>
      <div className="article-shell">
        <h2>What are you agreeing to?</h2>
        <p>
          All content on home.loanpaylogic.com is general education about
          do-it-yourself home repair and upkeep — not professional engineering,
          electrical, plumbing, or legal advice. You are responsible for your
          own project: checking local codes and permits, wearing protective
          gear, de-energizing circuits before electrical work, shutting water
          and gas supply before touching supply lines, and stopping when a job
          exceeds your skill. If a guide conflicts with a product manual or a
          local inspector, the manual and the inspector win.
        </p>
        <h2>What can you do with our content?</h2>
        <p>
          You may read, print for personal use, and link to our pages. You may
          not copy full guides, scrape the site, remove safety warnings, or
          present our work as your own. Outbound links to manufacturers and
          agencies are provided for reference; we do not control those sites.
          Start with the <Link href="/">LoanPay Home hub</Link>, browse bays
          like <Link href="/power-drill-basics">drill basics</Link> or{" "}
          <Link href="/fall-home-maintenance-checklist">fall upkeep</Link>, and
          read the <Link href="/disclaimer">disclaimer</Link> before picking up
          a tool.
        </p>
        <h2>What are the liability limits?</h2>
        <p>
          To the maximum extent allowed by law, LoanPay Home and its editors
          are not liable for injury, property damage, or costs arising from
          your use of the site. Tools, ladders, electricity, gas, water, and
          roofs all carry real risk; you assume it when you begin a project.
          If you disagree with these terms, do not use the site. Questions
          about these terms? See <Link href="/about">about us</Link>,{" "}
          <Link href="/contact">contact us</Link>, or the{" "}
          <Link href="/privacy-policy">privacy policy</Link>.
        </p>
      </div>
    </>
  );
}
