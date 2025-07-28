import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ameego English",
  description:
    "아미고는 다양한 AI 친구와 대화하며 외국어를 자연스럽게 습득하고 즐겁게 익힐 수 있는 서비스입니다.",
  openGraph: {
    type: "website",
    title: "아미고(Ameego): AI 친구와 영어로 대화",
    description:
      "언제 어디서나 다양한 성격, 직업, 국적의 AI 친구들과 말하고, 복습하고, 더 자연스럽게 배울 수 있게 도와주는 앱입니다. 당신만을 위한 AI 친구와 함께 진짜 회화의 재미를 느껴보세요!",
    images: [
      {
        url: "https://www.ameego.club/og-image.png",
        alt: "아미고 로고",
      },
    ],
    url: "https://www.ameego.club/",
  },
  other: {
    "apple-itunes-app": "app-id=6737622731",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
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
