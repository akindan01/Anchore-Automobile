import { Bricolage_Grotesque, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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

export const metadata = {
  title: "Anchore Automobiles | Premium Certified Vehicles, Lagos",
  description:
    "Anchore Automobiles is Nigeria's premium destination for certified luxury vehicles, importation, financing, and after-sales care. Drive Excellence. Experience Luxury.",
  keywords: [
    "Anchore Automobiles",
    "luxury cars Nigeria",
    "car dealership Lagos",
    "certified vehicles Nigeria",
    "car importation Nigeria",
  ],
  openGraph: {
    title: "Anchore Automobiles | Premium Certified Vehicles, Lagos",
    description:
      "Nigeria's premium destination for certified luxury vehicles, importation, financing, and after-sales care.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
