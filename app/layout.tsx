import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  verification: {
    google: "gXHCgYW1liWYzDHLdMnZqsms3IllJliPGWeecgZRK5E",
  },
  title: "ぷらっとハウス小菅 | 小菅駅徒歩7分 35㎡1LDK 最大4名 民泊",
  description:
    "小菅駅（東京メトロ千代田線）徒歩7分。35㎡の1LDK一棟貸切・最大4名。Netflix・Nintendo Switch・キッチン完備。足立・小菅エリアのグループ旅行に最適。",
  keywords:
    "ぷらっとハウス小菅, 小菅 民泊, 足立 民泊, 小菅駅 宿泊, Kosuge accommodation, Tokyo group stay",
  openGraph: {
    title: "ぷらっとハウス小菅 | 小菅駅7分 35㎡1LDK 最大4名",
    description:
      "小菅駅7分。35㎡1LDK一棟貸切・最大4名。Netflix・Nintendo Switch・キッチン完備。",
    url: "https://kosuge.plat-house.jp",
    siteName: "Plat House Kosuge",
    locale: "ja_JP",
    type: "website",
  },
  alternates: {
    canonical: "https://kosuge.plat-house.jp",
    languages: {
      "ja": "https://kosuge.plat-house.jp",
      "en": "https://kosuge.plat-house.jp/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-DW7MVDXED9" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DW7MVDXED9');
        `}</Script>
        <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          "name": "ぷらっとハウス小菅",
          "url": "https://kosuge.plat-house.jp",
          "telephone": "08070583086",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "足立2-17-5",
            "addressLocality": "足立区",
            "addressRegion": "東京都",
            "postalCode": "120-0015",
            "addressCountry": "JP"
          },
          "checkinTime": "16:00",
          "checkoutTime": "11:00",
          "priceRange": "¥19,800〜¥19,800",
          "amenityFeature": [
            { "@type": "LocationFeatureSpecification", "name": "Netflix", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Nintendo Switch", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "キッチン", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "ポケットWi-Fi", "value": true }
          ]
        }) }} />
        {children}
      </body>
    </html>
  );
}
