import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy for LoanPay Home Site",
  description:
    "LoanPay Home privacy policy: what we collect, cookies, Google AdSense ads, your choices, and how to contact us today.",
  alternates: { canonical: "https://home.loanpaylogic.com/privacy-policy" },
  openGraph: {
    type: "article",
    url: "https://home.loanpaylogic.com/privacy-policy",
    siteName: "LoanPay Home",
    title: "Privacy Policy for LoanPay Home Site",
    description:
      "What we collect, cookies, Google AdSense advertising, and your choices at LoanPay Home.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy for LoanPay Home Site",
    description:
      "What we collect, cookies, Google AdSense advertising, and your choices at LoanPay Home.",
  },
};

export default function Page() {
  return (
    <>
      <div className="hero-bay">
        <span className="kicker">Your data, plain terms</span>
        <h1>LoanPay Home <span className="accent">Privacy Policy</span></h1>
        <p className="lede">
          We collect as little as possible, explain what we keep, and give you
          real choices — including over advertising cookies.
        </p>
        <p className="meta-line">Updated: October 2026 · Sources: editorial policy, Google AdSense help</p>
      </div>
      <div className="article-shell">
        <h2>What information do we collect?</h2>
        <p>
          LoanPay Home does not run accounts or comments, so we do not ask for
          your name, address, or password. If you email{" "}
          <strong>hello@loanpaylogic.com</strong>, we receive your address and
          message so we can reply. Our hosting provider logs routine technical
          data — pages requested, timestamps, browser type, and approximate
          region derived from IP address — to keep the site fast and to detect
          abuse. We do not build profiles of individual readers and we do not
          sell personal information.
        </p>
        <h2>How do third-party ads and cookies work here?</h2>
        <p>
          This site plans to show ads served by Google AdSense, a third-party
          advertising vendor. Google uses cookies — including the DoubleClick
          cookie — to serve ads based on your prior visits to this and other
          sites, to limit how often you see the same ad, and to measure ad
          performance. Google&apos;s use of advertising cookies enables it and
          its partners to serve ads based on your visit to our pages and other
          sites on the Internet. You may opt out of personalized advertising by
          visiting Google&apos;s Ads Settings page, and you can clear or block
          cookies in your browser settings, though blocking cookies may change
          how some pages behave. To learn more, read Google&apos;s Privacy
          Policy and its &ldquo;How Google uses information from sites or apps
          that use our services&rdquo; page. Other vendors may also set
          cookies when the ad library loads; we do not control those cookies
          directly, which is why the browser-level opt-outs matter.
        </p>
        <h2>What choices do you have?</h2>
        <p>
          You can read every guide without contacting us. You can block
          third-party cookies, use your browser&apos;s tracking-protection
          mode, or opt out of Google personalized ads through Ads Settings.
          You can ask us to delete an email thread by writing to{" "}
          <strong>hello@loanpaylogic.com</strong> from the same address. If
          you linked to us from the <Link href="/">LoanPay Home hub</Link> or
          arrived from a guide like{" "}
          <Link href="/painting-room-guide">painting a room</Link>, nothing
          about that navigation is sold or shared with advertisers by us.
        </p>
        <h2>Who do we share data with, and how long do we keep it?</h2>
        <p>
          We share data only with service providers that keep the site running
          — hosting, analytics if enabled, and the Google AdSense library that
          serves ads — and only the data those services need to function. We
          keep email correspondence as long as needed to resolve your request,
          then archive or delete it. Server logs rotate on the hosting
          provider&apos;s schedule. If the law requires disclosure, we comply
          with valid legal process. Questions? See <Link href="/about">about
          us</Link>, <Link href="/contact">contact us</Link>, the{" "}
          <Link href="/terms">terms</Link>, and the{" "}
          <Link href="/disclaimer">disclaimer</Link>.
        </p>
      </div>
    </>
  );
}
