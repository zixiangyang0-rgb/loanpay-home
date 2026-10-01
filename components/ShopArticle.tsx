import Link from "next/link";

export type Faq = { q: string; a: string };
export type Step = { title: string; body: string };
export type TableData = { headers: string[]; rows: string[][] };
export type Section = {
  h2: string;
  paragraphs: string[];
  bullets?: string[];
  table?: TableData;
  checkHeading?: string;
};

export function FaqJsonLd({ faqs }: { faqs: Faq[] }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export function DataTable({ table }: { table: TableData }) {
  return (
    <div className="data-table-wrap">
      <table className="data-table">
        <thead>
          <tr>
            {table.headers.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => (
                <td key={j}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ShopArticle({
  kicker,
  intro,
  updated = "Updated: October 2026",
  sources,
  safety,
  sections,
  steps,
  stepsHeading,
  faqs,
  internalLinks,
  outboundLinks,
  closing,
}: {
  kicker: string;
  intro: string[];
  updated?: string;
  sources: string;
  safety?: string;
  sections: Section[];
  steps: Step[];
  stepsHeading: string;
  faqs: Faq[];
  internalLinks: { href: string; label: string }[];
  outboundLinks: { href: string; label: string }[];
  closing: string[];
}) {
  return (
    <>
      <p className="meta-line">{updated} · {sources}</p>
      <div className="article-shell">
        <p className="kicker" style={{ fontFamily: "Arial,sans-serif", fontSize: 12, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", color: "#b33c00" }}>{kicker}</p>
        {intro.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        {safety && (
          <div className="warn-box" role="note">
            <strong>Safety first. </strong>
            {safety}{" "}
            <Link href="/disclaimer" style={{ color: "#ffb000" }}>
              Read our disclaimer
            </Link>
            .
          </div>
        )}
        {sections.map((s, i) => (
          <section key={i}>
            <h2>{s.h2}</h2>
            {s.paragraphs.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
            {s.bullets && s.checkHeading && (
              <>
                <h3>{s.checkHeading}</h3>
                <ul className="tool-check">
                  {s.bullets.map((b, k) => (
                    <li key={k}>{b}</li>
                  ))}
                </ul>
              </>
            )}
            {s.bullets && !s.checkHeading && (
              <ul className="tool-check">
                {s.bullets.map((b, k) => (
                  <li key={k}>{b}</li>
                ))}
              </ul>
            )}
            {s.table && <DataTable table={s.table} />}
          </section>
        ))}
        <h2>{stepsHeading}</h2>
        <div className="step-grid">
          {steps.map((st, i) => (
            <div className="step-card" key={i}>
              <div className="step-num">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <h3 style={{ margin: "0 0 6px" }}>{st.title}</h3>
                <p style={{ margin: 0 }}>{st.body}</p>
              </div>
            </div>
          ))}
        </div>
        {closing.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <p>
          Authoritative references consulted for this guide:{" "}
          {outboundLinks.map((l, i) => (
            <span key={l.href}>
              <a href={l.href} rel="noopener noreferrer">
                {l.label}
              </a>
              {i < outboundLinks.length - 1 ? " · " : "."}
            </span>
          ))}
        </p>
        <div className="faq-block">
          <h2>What do readers ask about this project?</h2>
          {faqs.map((f, i) => (
            <div className="faq-item" key={i}>
              <h3>{f.q}</h3>
              <p style={{ margin: 0 }}>{f.a}</p>
            </div>
          ))}
        </div>
        <h2>Where to go next on LoanPay Home?</h2>
        <p>
          Keep building your skills with these related workshop guides:{" "}
          {internalLinks.map((l, i) => (
            <span key={l.href}>
              <Link href={l.href}>{l.label}</Link>
              {i < internalLinks.length - 1 ? " · " : "."}
            </span>
          ))}{" "}
          Or return to the{" "}
          <Link href="/">LoanPay Home hub</Link> to browse every guide by room
          and season.
        </p>
      </div>
    </>
  );
}
