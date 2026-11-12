import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";

import { FloatingActions } from "@/components/layout/floating-actions";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { site } from "@/lib/site";

import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aestheticdentalbismarck.com"),
  title: {
    default: "Aesthetic Dental Center | Dentist in Bismarck, ND",
    template: "%s | Aesthetic Dental Center",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  keywords: [
    "dentist Bismarck ND",
    "family dentistry",
    "cosmetic dentistry",
    "prosthodontics",
    "dental implants",
    "Aesthetic Dental Center",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Aesthetic Dental Center",
    title: "Aesthetic Dental Center | Dentist in Bismarck, ND",
    description: site.description,
    url: "https://www.aestheticdentalbismarck.com",
    images: [
      {
        url: "/images/hero-smile.jpg",
        width: 2000,
        height: 1333,
        alt: "A confident smile at Aesthetic Dental Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ADCBismarck",
    title: "Aesthetic Dental Center | Dentist in Bismarck, ND",
    description: site.description,
    images: ["/images/hero-smile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071c2a",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: site.name,
  description: site.description,
  url: "https://www.aestheticdentalbismarck.com",
  telephone: "+1-701-214-5552",
  image: "https://www.aestheticdentalbismarck.com/images/hero-smile.jpg",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1207 West Divide Avenue Suite 1",
    addressLocality: "Bismarck",
    addressRegion: "ND",
    postalCode: "58501",
    addressCountry: "US",
  },
  openingHoursSpecification: site.hours.map((hour) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: hour.day,
    opens: hour.time.split(" - ")[0],
    closes: hour.time.split(" - ")[1],
  })),
  sameAs: [site.socials.facebook, site.socials.instagram, site.socials.youtube],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating,
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        <a
          href="#content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-porcelain px-5 py-3 text-xs font-semibold text-ink transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <FloatingActions />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
