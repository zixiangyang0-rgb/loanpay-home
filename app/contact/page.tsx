import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact LoanPay Home Editors Here",
  description:
    "Contact LoanPay Home at hello@loanpaylogic.com for corrections, guide requests, or privacy questions. We reply soon.",
  alternates: { canonical: "https://home.loanpaylogic.com/contact" },
  openGraph: {
    type: "article",
    url: "https://home.loanpaylogic.com/contact",
    siteName: "LoanPay Home",
    title: "Contact LoanPay Home Editors Here",
    description:
      "Contact LoanPay Home at hello@loanpaylogic.com for corrections, guide requests, or privacy questions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact LoanPay Home Editors Here",
    description:
      "Contact LoanPay Home at hello@loanpaylogic.com for corrections, guide requests, or privacy questions.",
  },
};

export default function Page() {
  return (
    <>
      <div className="hero-bay">
        <span className="kicker">Talk to the shop desk</span>
        <h1>Contact <span className="accent">LoanPay Home</span></h1>
        <p className="lede">
          Corrections, guide ideas, and reader questions all land on the same
          workbench. Email us and a real editor replies.
        </p>
        <p className="meta-line">Updated: October 2026 · Sources: editorial policy</p>
      </div>
      <div className="article-shell">
        <h2>What is the fastest way to reach us?</h2>
        <p>
          Email <strong>hello@loanpaylogic.com</strong> for everything:
          corrections, new-guide requests, photo permissions, privacy
          questions, and advertising inquiries. Put a short subject line on it
          — for example, &ldquo;Correction: gutter guide, downspout
          section&rdquo; — and include the page URL and the sentence you think
          is wrong. Mara Ellison, our managing editor, triages the inbox every
          weekday and routes safety issues to Priya Raman first.
        </p>
        <h2>When will you hear back?</h2>
        <p>
          We answer most notes within five business days. Safety corrections
          jump the queue: if you spot a wiring, gas, ladder, or structural
          error, flag it with SAFETY in the subject and we will review within
          one business day and post a fix or a clarifying note. For background
          on who reads your mail, see <Link href="/about">about us</Link>; for
          how we handle your address, see the{" "}
          <Link href="/privacy-policy">privacy policy</Link>.
        </p>
        <h2>What should you not send?</h2>
        <p>
          Please do not send emergency repair requests — if water is pouring
          through a ceiling or you smell gas, call your local emergency number
          or utility first, then a licensed pro. Do not send account numbers,
          and do not attach large videos; describe the problem and link to the
          relevant LoanPay Home guide, such as the{" "}
          <Link href="/fix-leaky-faucet">leaky faucet fix</Link> or the{" "}
          <Link href="/water-heater-maintenance">water-heater guide</Link>. If
          you are unsure a job is DIY-safe, read the{" "}
          <Link href="/disclaimer">disclaimer</Link> and our{" "}
          <Link href="/terms">terms</Link>, then start from the{" "}
          <Link href="/">LoanPay Home hub</Link>.
        </p>
      </div>
    </>
  );
}
