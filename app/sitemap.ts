import type { MetadataRoute } from "next";

const BASE = "https://home.loanpaylogic.com";

const ROUTES = [
  "",
  "/painting-room-guide",
  "/power-drill-basics",
  "/hanging-shelves-guide",
  "/fix-leaky-faucet",
  "/unclog-drain-guide",
  "/caulking-guide",
  "/drywall-repair-guide",
  "/flooring-types-guide",
  "/tile-backsplash-guide",
  "/furniture-assembly-tips",
  "/outlet-replacement-safety-guide",
  "/smoke-detector-guide",
  "/hvac-filter-guide",
  "/water-heater-maintenance",
  "/gutter-cleaning-guide",
  "/weatherproofing-windows-doors",
  "/lawn-care-basics",
  "/pest-prevention-basics",
  "/spring-home-maintenance-checklist",
  "/fall-home-maintenance-checklist",
  "/closet-organization-guide",
  "/garage-organization-guide",
  "/moving-house-checklist",
  "/renter-friendly-decorating",
  "/smart-home-starter-guide",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/disclaimer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((r) => ({
    url: `${BASE}${r}`,
    lastModified: new Date("2026-10-01"),
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1 : r.startsWith("/painting") ? 0.9 : 0.8,
  }));
}
