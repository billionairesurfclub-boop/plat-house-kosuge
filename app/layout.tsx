import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "クリエイトスペース東新宿 新宿歌舞伎町Ⅱ | 東新宿駅5分 38㎡ 最大5名 民泊",
  description:
    "東新宿駅（東京メトロ副都心線・都営大江戸線）徒歩5分。38㎡の広々2客室（各最大5名）。Netflix・キッチン・浴槽・ソファーベッド完備。新宿・歌舞伎町へのアクセス抜群。",
  keywords:
    "クリエイトスペース東新宿, 新宿歌舞伎町 民泊, 東新宿 民泊, 東新宿駅 宿泊, 新宿 グループ宿泊, Higashi-Shinjuku accommodation, Tokyo group stay",
  openGraph: {
    title: "クリエイトスペース東新宿 新宿歌舞伎町Ⅱ | 東新宿駅5分 38㎡ 最大5名",
    description:
      "東新宿駅5分。38㎡の2客室・各最大5名。Netflix・キッチン・浴槽・ソファーベッド完備。",
    url: "https://higashishinjuku.create-space.jp",
    siteName: "Create Space Higashi-Shinjuku",
    locale: "ja_JP",
    type: "website",
  },
  alternates: {
    canonical: "https://higashishinjuku.create-space.jp",
    languages: {
      "ja": "https://higashishinjuku.create-space.jp",
      "en": "https://higashishinjuku.create-space.jp/en",
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
          "name": "クリエイトスペース東新宿 新宿歌舞伎町Ⅱ",
          "url": "https://higashishinjuku.create-space.jp",
          "telephone": "08070583086",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "新宿７－１１－１１",
            "addressLocality": "新宿区",
            "addressRegion": "東京都",
            "postalCode": "160-0022",
            "addressCountry": "JP"
          },
          "checkinTime": "16:00",
          "checkoutTime": "11:00",
          "priceRange": "¥15,000〜¥35,000",
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
