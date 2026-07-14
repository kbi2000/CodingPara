import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsApp } from "@/components/whatsapp";
import { JsonLd } from "@/components/json-ld";
import { company } from "@/data/site";
import { CookieConsent } from "@/components/cookie-consent";
const font = Manrope({ subsets: ["latin"], display: "swap" });
export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: "Web Development & SEO Agency | CodingPara Technologies",
    template: "%s | CodingPara Technologies",
  },
  description:
    "CodingPara Technologies builds high-performance websites, software and search strategies for ambitious businesses in India.",
  applicationName: company.name,
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <a
          href="#main"
          className="fixed top-3 left-3 z-[100] -translate-y-24 rounded bg-white px-4 py-2 text-black focus:translate-y-0"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsApp />
        <CookieConsent />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": ["Organization", "ProfessionalService"],
            name: company.name,
            url: company.url,
            email: company.email,
            telephone: company.phone,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Noida",
              addressRegion: "Uttar Pradesh",
              addressCountry: "IN",
            },
            areaServed: "India",
          }}
        />
      </body>
    </html>
  );
}
