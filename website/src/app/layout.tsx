import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lsrbuilding.be"),
  title: {
    default: "LSR Building · Projectcoördinatie & Werfbeheer · Brecht / Antwerpen",
    template: "%s · LSR Building",
  },
  description:
    "LSR Building levert projectcoördinatie, veiligheidssupervisie en renovatie op industriële en residentiële bouwprojecten in Brecht, Antwerpen en Vlaanderen. VOL VCA gecertificeerd. Geleid door civiel ingenieur Mustafa Alrubaei.",
  keywords: [
    "projectcoördinatie",
    "werfbeheer",
    "veiligheidssupervisor",
    "BAP-projecten",
    "renovatiewerken",
    "bouwregie",
    "civiele techniek",
    "VOL VCA",
    "LSR Building",
    "Brecht",
    "Antwerpen",
    "Vlaanderen",
    "België",
  ],
  authors: [{ name: "Mustafa Alrubaei" }],
  creator: "LSR Building",
  openGraph: {
    type: "website",
    locale: "nl_BE",
    url: "https://lsrbuilding.be",
    siteName: "LSR Building",
    title: "LSR Building · Projectcoördinatie & Werfbeheer",
    description:
      "Civiele techniek én bedrijfskunde in één partij. Projectcoördinatie, veiligheidssupervisie en renovatie voor industriële en residentiële bouwprojecten.",
    images: [{ url: "/logo-full.svg", width: 240, height: 340, alt: "LSR Building" }],
  },
  twitter: {
    card: "summary",
    title: "LSR Building · Projectcoördinatie & Werfbeheer",
    description:
      "Civiele techniek én bedrijfskunde in één partij. VOL VCA. Brecht / Antwerpen.",
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink-50 text-ink-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
