import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Monika Powers — Stærk krop, klart hoved, ingen bullshit",
  description:
    "Styrketræning og struktur for kvinder 30+ der træner — men ikke kan se forskel endnu. Et 12-ugers system der virker i en travl hverdag.",
  openGraph: {
    title: "Monika Powers — Stærk krop, klart hoved, ingen bullshit",
    description:
      "Du mangler ikke motivation. Du mangler et system. Stærk & Struktureret — 12 ugers styrketræning bygget til kvinder 30+.",
    type: "website",
    locale: "da_DK",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="da"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
