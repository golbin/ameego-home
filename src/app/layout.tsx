import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ameego.club";

  const titleByLocale: Record<string, string> = {
    ko: "아미고 영어회화 | AI 친구와 매일 10분 스피킹 연습",
    en: "Ameego English | Practice Speaking Daily with AI Friends",
    ja: "Ameego英会話 | AIフレンドと毎日10分スピーキング",
  };

  const descriptionByLocale: Record<string, string> = {
    ko: "스픽·링글로도 부족했나요? 아미고는 다양한 성격의 AI 친구와 실전처럼 대화하며 영어 말하기를 자연스럽게 만들어 주는 앱입니다. iOS/Android 무료 체험.",
    en: "Tired of one-way study? Ameego lets you speak with diverse AI friends and make your English speaking natural. Try it free on iOS/Android.",
    ja: "一方通行の学習はもう終わり。多様なAIフレンドと実践的に会話し、英語の発話を自然に。iOS/Androidで無料体験。",
  };

  const title = titleByLocale[locale] || titleByLocale.ko;
  const description = descriptionByLocale[locale] || descriptionByLocale.ko;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    openGraph: {
      type: "website",
      title,
      description,
      images: [
        {
          url: "/og-image.png",
          alt: "Ameego",
        },
      ],
      url: siteUrl,
      siteName: "Ameego",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: "/",
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      "apple-itunes-app": "app-id=6737622731",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        {/* Structured Data */}
        <Script
          id="ld-json-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ameego",
              url:
                process.env.NEXT_PUBLIC_SITE_URL || "https://www.ameego.club",
              logo: "/og-image.png",
            }),
          }}
        />
        <Script
          id="ld-json-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Ameego",
              url:
                process.env.NEXT_PUBLIC_SITE_URL || "https://www.ameego.club",
              potentialAction: {
                "@type": "SearchAction",
                target: `${
                  process.env.NEXT_PUBLIC_SITE_URL || "https://www.ameego.club"
                }/?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <Script
          id="ld-json-app"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Ameego",
              applicationCategory: "EducationalApplication",
              operatingSystem: "iOS, Android",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              url:
                process.env.NEXT_PUBLIC_SITE_URL || "https://www.ameego.club",
              image: "/og-image.png",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
