import { Bricolage_Grotesque, Manrope, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable} ${serif.variable}`}>
      <body>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
