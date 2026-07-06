import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ぷらっとハウス神楽坂Ⅱ | 牛込神楽坂駅3分 80㎡3LDK 最大10名 民泊",
  description:
    "牛込神楽坂駅（都営大江戸線）徒歩3分・神楽坂駅徒歩4分。80㎡の3LDK戸建てで最大10名。3客室＋リビング・Netflix・キッチン・浴槽・ボタニスト完備。グループ・ファミリー旅行に最適。",
  keywords:
    "ぷらっとハウス神楽坂Ⅱ, 神楽坂 民泊, 牛込神楽坂 民泊, 神楽坂 戸建て 宿泊, 新宿区 グループ宿泊, Kagurazaka accommodation, Tokyo group stay, 神楽坂 最大10名",
  openGraph: {
    title: "ぷらっとハウス神楽坂Ⅱ | 牛込神楽坂駅3分 80㎡3LDK 最大10名",
    description:
      "牛込神楽坂駅3分。80㎡の3LDK戸建てで最大10名。3客室＋リビング・Netflix・キッチン・浴槽完備。",
    url: "https://kagurazaka2.plat-house.jp",
    siteName: "Plat House Kagurazaka II",
    locale: "ja_JP",
    type: "website",
  },
  alternates: {
    canonical: "https://kagurazaka2.plat-house.jp",
    languages: {
      "ja": "https://kagurazaka2.plat-house.jp",
      "en": "https://kagurazaka2.plat-house.jp/en",
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
        <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          "name": "ぷらっとハウス神楽坂Ⅱ",
          "url": "https://kagurazaka2.plat-house.jp",
          "telephone": "08070583086",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "矢来町８３－２",
            "addressLocality": "新宿区",
            "addressRegion": "東京都",
            "postalCode": "162-0805",
            "addressCountry": "JP"
          },
          "checkinTime": "16:00",
          "checkoutTime": "11:00",
          "priceRange": "¥35,000〜¥70,000",
          "amenityFeature": [
            { "@type": "LocationFeatureSpecification", "name": "Netflix", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Nintendo Switch", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "キッチン", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "浴槽", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "ポケットWi-Fi", "value": true }
          ]
        }) }} />
        {children}
      </body>
    </html>
  );
}
