import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://home.loanpaylogic.com"),
  title: {
    default: "LoanPay Home | DIY Repairs & Home Upkeep Guides",
    template: "%s | LoanPay Home",
  },
  description:
    "LoanPay Home is a hands-on workshop manual for DIY home repair, upkeep, and organizing. Get tool lists, steps, and costs.",
  alternates: {
    canonical: "https://home.loanpaylogic.com",
  },
  openGraph: {
    type: "website",
    url: "https://home.loanpaylogic.com",
    siteName: "LoanPay Home",
    title: "LoanPay Home | DIY Repairs & Home Upkeep Guides",
    description:
      "Hands-on DIY guides for painting, plumbing, electrical safety, outdoor care, and seasonal upkeep with tools and costs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LoanPay Home | DIY Repairs & Home Upkeep Guides",
    description:
      "Hands-on DIY guides for painting, plumbing, electrical safety, outdoor care, and seasonal upkeep with tools and costs.",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "google-adsense-account": "ca-pub-4906207495792820",
  },
};

const NAV = [
  { href: "/painting-room-guide", label: "Painting" },
  { href: "/power-drill-basics", label: "Drills" },
  { href: "/fix-leaky-faucet", label: "Plumbing" },
  { href: "/outlet-replacement-safety-guide", label: "Electrical" },
  { href: "/spring-home-maintenance-checklist", label: "Seasonal" },
  { href: "/smart-home-starter-guide", label: "Smart Home" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4906207495792820"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <div className="hazard-bar" aria-hidden="true" />
        <header className="site-header">
          <div className="shop-wrap">
            <div className="brand-row">
              <Link href="/" className="brand-mark">
                <span className="brand-plate">LP</span>
                <span className="brand-name">
                  LoanPay Home<small>Workshop Manual</small>
                </span>
              </Link>
            </div>
            <nav className="site-nav" aria-label="Primary">
              {NAV.map((n) => (
                <Link key={n.href} href={n.href}>
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <div className="hazard-bar thin" aria-hidden="true" />
        <main className="shop-wrap">{children}</main>
        <footer className="site-footer">
          <div className="shop-wrap">
            <strong style={{ color: "#f4ede1", textTransform: "uppercase" }}>
              LoanPay Home
            </strong>
            <nav aria-label="Footer">
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/disclaimer">Disclaimer</Link>
            </nav>
            <p>
              LoanPay Home is an educational DIY reference for home.loanpaylogic.com.
              General education only; hire a licensed pro for electrical, gas, and
              structural work.
            </p>
            <p>
              © 2026 LoanPay Home. All rights reserved. Part of{" "}
              <a href="https://loanpaylogic.com">LoanPay Logic Mortgage &amp; Home Tools</a> ·{" "}
              <a href="https://insurance.loanpaylogic.com">Home Insurance</a> ·{" "}
              <a href="https://food.loanpaylogic.com">Kitchen</a> ·{" "}
              <a href="https://tech.loanpaylogic.com">Smart Tech</a>.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
