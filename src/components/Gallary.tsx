"use client";

import Image from "next/image";

import { useTranslations, useLocale } from "next-intl";
import LocaleContent from "@/types/locale";

const screens = [
  {
    id: 1,
    title: {
      en: "Learn new expressions with Ameego's podcast",
      ko: "아미고가 진행하는 파드캐스트로 새로운 표현을 배워요",
      ja: "Ameegoが配信するポッドキャストで新しい表現を学びます",
    },
    imageUrl: "/screenshot_2_1.webp",
    name: "Ameego podcast",
  },
  {
    id: 2,
    title: {
      en: "Smartly record and organize your conversations and important expressions",
      ko: "대화를 나눴던 내용과 중요한 표현들을 똑똑하게 기록하고 정리줘요",
      ja: "会話の内容と重要な表現をスマートに記録して整理します",
    },
    imageUrl: "/screenshot_2_2.webp",
    name: "Ameego note",
  },
  {
    id: 3,
    title: {
      en: "Discuss the latest topics updated daily with Ameego",
      ko: "매일 업데이트되는 최신 토픽으로 이야기 나눠요",
      ja: "毎日更新される最新のトピックでAmeegoと会話しましょう",
    },
    imageUrl: "/screenshot_2_3.webp",
    name: "Ameego today",
  },
  {
    id: 4,
    title: {
      en: "Chat freely with various Ameegos",
      ko: "다양한 아미고와 자유롭게 대화하세요",
      ja: "さまざまなAmeegoと自由に話します",
    },
    imageUrl: "/screenshot_2_4.webp",
    name: "Ameego call",
  },
];

export default function Gallary() {
  const t = useTranslations("HomePage");
  const locale = useLocale() as keyof LocaleContent;

  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Talk with Ameego
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600">
          {t("Gallary.description")}
        </p>
      </div>
      <div className="mx-auto  w-[22.875rem] sm:w-full lg:w-full max-w-full mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {screens.map((screen) => (
          <div key={screen.id}>
            <article className="flex flex-col overflow-hidden rounded-2xl border-4 border-[#2e3744]">
              <div className="relative aspect-[9/19.5]">
                <Image
                  alt={screen.name}
                  src={screen.imageUrl}
                  fill
                  className="object-cover"
                />
              </div>
            </article>
            <div className="bg-white p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {screen.title[locale]}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
