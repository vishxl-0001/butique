import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Pinyon_Script, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomBar from "@/components/BottomBar";
import PageTransitionProvider from "@/components/PageTransitionProvider";
import TrainScrollThread from "@/components/TrainScrollThread";
import DesktopCursor from "@/components/DesktopCursor";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bodoni",
  style: ["normal", "italic"],
});

const pinyon = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pinyon",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken",
});

export const metadata: Metadata = {
  title: "Robes de mariée haute couture à Perpignan · Rue des Princesses – Atelier",
  description:
    "Atelier d'exception à Perpignan : robes de mariée haute couture, traînes cathédrale, corsets de cristaux et fleurs 3D. Le jour où tout le monde se retourne.",
  keywords: [
    "robe de mariée Perpignan",
    "robe de mariée haute couture Perpignan",
    "robe de princesse Perpignan",
    "robe de bal mariée sur mesure",
    "traîne cathédrale",
    "corset cristaux",
    "atelier mariage 66",
  ],
  authors: [{ name: "Rue des Princesses – Atelier" }],
  creator: "Rue des Princesses – Atelier",
  publisher: "Rue des Princesses",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Rue des Princesses – Atelier | Robes de mariée haute couture Perpignan",
    description:
      "Des robes de princesse créées pour vous, rue des Princesses à Perpignan. Traînes cathédrale, cristaux Swarovski et corsets sculptés.",
    url: "https://ruedesprincesses-perpignan.fr",
    siteName: "Rue des Princesses – Atelier",
    locale: "fr_FR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0E0B12",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BridalShop",
  name: "Rue des Princesses – Atelier",
  description:
    "Atelier de haute couture spécialisé dans les robes de mariée de princesse volumineuses, corsets de cristaux et traînes cathédrale à Perpignan.",
  image: "https://ruedesprincesses-perpignan.fr/images/hero-gown-dark.jpg",
  telephone: "+33646858626",
  address: {
    "@type": "PostalAddress",
    streetAddress: "21 Rue Rem Villeneuve",
    addressLocality: "Perpignan",
    postalCode: "66000",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.6986,
    longitude: 2.8956,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "18:30",
    },
  ],
  priceRange: "$$$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.2",
    reviewCount: "93",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://www.instagram.com/rue_des_princesses_66/",
    "https://www.facebook.com/hautecouture66/",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${bodoni.variable} ${pinyon.variable} ${hanken.variable} antialiased selection:bg-[#D4688A] selection:text-white`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#0E0B12] text-[#F8F2EA] relative pb-20 md:pb-0 overflow-x-hidden">
        {/* Film grain texture */}
        <div className="film-grain" aria-hidden="true" />

        {/* Desktop interactive couture cursor */}
        <DesktopCursor />

        {/* The 'Traîne' scroll thread that connects header to footer */}
        <TrainScrollThread />

        {/* Global Header */}
        <Header />

        {/* Page transitions & main content */}
        <PageTransitionProvider>
          <main className="flex-1 w-full">{children}</main>
        </PageTransitionProvider>

        {/* Global Footer */}
        <Footer />

        {/* Mobile Sticky Bottom Bar (Appeler · WhatsApp · Rendez-vous) */}
        <BottomBar />
      </body>
    </html>
  );
}
