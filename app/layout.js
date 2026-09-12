import { Bricolage_Grotesque, Manrope, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import JsonLd from "@/components/seo/JsonLd";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Anchore Automobiles | Premium Certified Vehicles, Lagos",
  description:
    "Anchore Automobiles is Nigeria's premium destination for certified luxury vehicles, importation, financing, and after-sales care. Drive Excellence. Experience Luxury.",
  keywords: [
    "Anchore Automobiles",
    "lagos luxury cars",
    "lagos auto dealers",
    "lagos car dealership",
    "top 5 Nigeria auto dealers",
    "luxury cars Nigeria",
    "car dealership Lagos",
    "certified vehicles Nigeria",
    "car importation Nigeria",
  ],
  icons: {
    icon: "/anchore-logo.png",
    shortcut: "/anchore-logo.png",
    apple: "/anchore-logo.png",
  },
  openGraph: {
    title: "Anchore Automobiles | Premium Certified Vehicles, Lagos",
    description:
      "Nigeria's premium destination for certified luxury vehicles, importation, financing, and after-sales care.",
    type: "website",
    images: ["/anchore-logo.png"],
  },
};

/* ------------------------------------------------------------------ */
/* Structured data (JSON-LD) — built ONLY from information that        */
/* already exists in this project. No GPS coordinates, social profile  */
/* URLs, ratings, reviews or business identifiers are invented.        */
/* URL properties (url, sameAs) are intentionally omitted until the    */
/* production domain is purchased.                                     */
/* ------------------------------------------------------------------ */

const BUSINESS_DESCRIPTION =
  "Nigeria's premium destination for certified luxury vehicles, importation, financing, and after-sales care.";

const BUSINESS_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "175 Iju Road by Fagba Junction, opp Savoury, Ifako Ijaye",
  addressLocality: "Lagos",
  addressRegion: "Lagos",
  addressCountry: "NG",
};

const autoDealerSchema = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: "Anchore Automobiles",
  legalName: "Anchore Autos Limited",
  description: BUSINESS_DESCRIPTION,
  telephone: ["+2349119977999", "+2347065629472"],
  email: "anchor_autos@yahoo.com",
  address: BUSINESS_ADDRESS,
  logo: "/anchore-logo.png",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Anchore Automobiles",
  legalName: "Anchore Autos Limited",
  description: BUSINESS_DESCRIPTION,
  foundingDate: "2014",
  telephone: ["+2349119977999", "+2347065629472"],
  email: "anchor_autos@yahoo.com",
  address: BUSINESS_ADDRESS,
  logo: "/anchore-logo.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable} ${serif.variable}`}>
      <body>
        <JsonLd data={autoDealerSchema} />
        <JsonLd data={organizationSchema} />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
