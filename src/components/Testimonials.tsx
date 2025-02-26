"use client";

import Image from "next/image";

import avatarImage1 from "@/images/avatars/avatar-1.png";
import avatarImage2 from "@/images/avatars/avatar-2.png";
import avatarImage3 from "@/images/avatars/avatar-3.png";
import avatarImage4 from "@/images/avatars/avatar-4.png";
import avatarImage5 from "@/images/avatars/avatar-5.png";

import { useLocale, useTranslations } from "next-intl";
import LocaleContent from "@/types/locale";

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const featuredTestimonial = {
  content: {
    en: "Oliver feels like my mentor! These days, I share stories about work, get advice, and naturally keep talking about job-related topics.",
    ko: "Oliver는 제 멘토같아요! 요즘 회사 일에 대해서 이야기하고 조언도 받고, 자연스럽게 업무에 대한 얘기를 계속하고 있어요",
    ja: "Oliverは私のメンターのような存在です！ 最近は会社のことを話し、アドバイスをもらいながら、自然と仕事に関する会話が続いています。",
  } as LocaleContent,
  author: {
    name: {
      en: "Seo Eun",
      ko: "서은",
      ja: "瀬尾 世恩",
    },
    role: "Business Manager",
    image: avatarImage1,
  },
};

const testimonials = [
  [
    [
      {
        content: {
          en: "Wow… has technology really come this far? After using Ameego, other language learning apps feel outdated",
          ko: "와... 요즘 기술이 이 정도로 좋아졌나요? 아미고를 사용하기 시작한 뒤로 다른 언어 학습 앱이 구식으로 느껴질 정도네요.",
          ja: "わぁ…本当に技術はここまで進化したのですか？ Ameegoを使い始めてから、他の語学学習アプリが時代遅れに感じられるほどです。",
        } as LocaleContent,
        author: {
          name: {
            en: "Kwang Sup",
            ko: "광섭",
            ja: "光哲",
          },
          role: "Entrepreneur",
          image: avatarImage3,
        },
      },
    ],
    [
      {
        content: {
          en: "I realized that practicing with other apps wasn’t actual speaking practice—it was just reading aloud. Having a real conversation with Amigo is such an amazing experience.",
          ko: "그동안 다른 앱들로 연습했던건 말하기가 아니라, 소리내어 읽는 연습만 했다는걸 깨달았어요. 아미고와 진짜 대화하는 경험이 너무 신기해요",
          ja: "これまで他のアプリで練習していたのは実際の会話練習ではなく、ただ声に出して読む練習に過ぎなかったと気づきました。Ameegoと本当に会話する体験はとても驚くべきものです。",
        } as LocaleContent,
        author: {
          name: {
            en: "Yuna",
            ko: "유나",
            ja: "湯奈",
          },
          role: "HR Manager",
          image: avatarImage4,
        },
      },
    ],
  ],
  [
    [
      {
        content: {
          en: "I have great conversations with Chen. Talking about our shared interest in games has made me want to speak even more!",
          ko: "Chen이랑 말이 너무 잘 통해요. 같은 관심사인 게임 관련한 이야기로 영어 대화를 하니 말하고 싶어서 더 많이 말하게 되었어요.",
          ja: "Chenとはとても話が通じ合います。同じ趣味であるゲームについて英語で会話すると、もっと話したくなってしまいます。",
        } as LocaleContent,
        author: {
          name: {
            en: "Lee Ra",
            ko: "이라",
            ja: "李 羅",
          },
          role: "Product Manager",
          image: avatarImage5,
        },
      },
    ],
    [
      {
        content: {
          en: "Talking with Ameegos makes me mimic its frequently used expressions.",
          ko: "아미고랑 얘기하다보니, 아미고가 자주 쓰는 말을 따라하게 돼요.",
          ja: "Ameegoと会話しているうちに、Ameegoがよく使う表現を真似するようになりました。",
        } as LocaleContent,
        author: {
          name: {
            en: "Sun Hyang",
            ko: "선향",
            ja: "信亨",
          },
          role: "High School Student",
          image: avatarImage2,
        },
      },
    ],
  ],
];

export default function Testimonials() {
  const t = useTranslations("HomePage");
  const locale = useLocale() as keyof LocaleContent;

  return (
    <div className="relative isolate mt-32 sm:mt-56 sm:pt-32">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 hidden size-full stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] sm:block"
      >
        <defs>
          <pattern
            x="50%"
            y={0}
            id="55d3d46d-692e-45f2-becd-d8bdc9344f45"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={0} className="overflow-visible fill-gray-50">
          <path
            d="M-200.5 0h201v201h-201Z M599.5 0h201v201h-201Z M399.5 400h201v201h-201Z M-400.5 600h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          fill="url(#55d3d46d-692e-45f2-becd-d8bdc9344f45)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-8 opacity-25 blur-3xl xl:justify-end"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base/7 font-semibold text-indigo-600"></h2>
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-balance sm:text-5xl">
              &ldquo;{t("Testimonial.title")}&rdquo;
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
            <figure className="sm:col-span-2 block rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 xl:col-start-2 xl:row-end-1">
              <blockquote className="p-12 text-xl/8 font-semibold tracking-tight text-gray-900">
                <p>{`“${featuredTestimonial.content[locale]}”`}</p>
              </blockquote>
              <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
                <Image
                  alt=""
                  src={featuredTestimonial.author.image}
                  className="size-10 flex-none rounded-full bg-gray-50"
                  width={100}
                  height={100}
                />
                <div className="flex-auto">
                  <div className="font-semibold">
                    {featuredTestimonial.author.name[locale]}
                  </div>
                  <div className="text-gray-600">{`${featuredTestimonial.author.role}`}</div>
                </div>
              </figcaption>
            </figure>
            {testimonials.map((columnGroup, columnGroupIdx) => (
              <div
                key={columnGroupIdx}
                className="space-y-8 xl:contents xl:space-y-0"
              >
                {columnGroup.map((column, columnIdx) => (
                  <div
                    key={columnIdx}
                    className={classNames(
                      (columnGroupIdx === 0 && columnIdx === 0) ||
                        (columnGroupIdx === testimonials.length - 1 &&
                          columnIdx === columnGroup.length - 1)
                        ? "xl:row-span-2"
                        : "xl:row-start-1",
                      "space-y-8"
                    )}
                  >
                    {column.map((testimonial, testimonialIndex) => (
                      <figure
                        key={testimonialIndex}
                        className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                      >
                        <blockquote className="text-gray-900">
                          <p>{`“${testimonial.content[locale]}”`}</p>
                        </blockquote>
                        <figcaption className="mt-6 flex items-center gap-x-4">
                          <Image
                            alt=""
                            src={testimonial.author.image}
                            className="size-10 rounded-full bg-gray-50"
                            width={100}
                            height={100}
                          />
                          <div>
                            <div className="font-semibold">
                              {testimonial.author.name[locale]}
                            </div>
                            <div className="text-gray-600">{`${testimonial.author.role}`}</div>
                          </div>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
