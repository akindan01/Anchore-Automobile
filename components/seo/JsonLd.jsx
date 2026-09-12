/**
 * Renders a Schema.org JSON-LD script tag.
 *
 * Server Component (no "use client") — structured data is emitted directly
 * into the server-rendered HTML with zero client-side JavaScript.
 *
 * JSON.stringify output is escaped ("<" -> "\u003c") so the payload can
 * never terminate the <script> element early or inject HTML (XSS-safe).
 */
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
