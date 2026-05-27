import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "@/components/providers";
import { JsonLd } from "@/components/shared/JsonLd";
import { SplashScreen } from "@/components/layout/SplashScreen";
import { GalaxyBackground } from "@/components/layout/GalaxyBackground";
import { createMetadata, personJsonLd } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = createMetadata({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
        suppressHydrationWarning
      >
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              personJsonLd(),
              {
                "@type": "WebSite",
                name: "Naman Bhalani Portfolio",
                url: "https://codeofnamanbhalani.github.io/namanbhalani-portfolio",
              },
            ],
          }}
        />
        <Providers>
          <GalaxyBackground />
          <SplashScreen />
          <Navbar />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
