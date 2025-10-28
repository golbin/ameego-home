import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "링글(Ringle) vs 아미고 | 영어 스피킹 비교",
  description:
    "일대일 수업이 부담되나요? 아미고는 AI 친구와 원하는 시간에 편안한 대화로 영어 말하기를 자연스럽게 만들어 줍니다. iOS/Android 무료 체험.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/compare/ringle" },
  openGraph: {
    title: "링글(Ringle) vs 아미고 | 영어 스피킹 비교",
    description: "하루 10분 루틴으로 영어 말하기를 자연스럽게 만들어 보세요.",
    images: [{ url: "/og-image.png", alt: "Ameego" }],
    type: "article",
    url: "/compare/ringle",
  },
};

export default function Page() {
  return (
    <main className="bg-gradient-to-b from-white via-indigo-50/40 to-white text-slate-900">
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-12 lg:pt-24 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
              &quot;링글&quot; 및 &quot;Ringle&quot;는 각 소유자의 상표입니다.
              본 페이지의 내용은 정보 제공을 위한 비교 목적입니다.
            </p>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
              원어민 튜터 vs AI 루틴
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-indigo-400" />
              하이브리드 학습 전략
            </span>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
            <div>
              <h1 className="text-pretty text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                링글(Ringle) vs 아미고,
                <br className="hidden sm:block" />
                튜터 수업 사이 공백을 채우는 방법
              </h1>
              <p className="mt-6 text-base leading-7 text-slate-600">
                링글은 해외 원어민 튜터와 1:1 수업을 제공합니다. 반면 아미고는
                다양한 직업과 취미를 가진 AI 친구와 원하는 시간에 원하는만큼
                실전형 대화를 이어가며 말하기 감각을 유지할 수 있습니다.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                {[
                  "24시간 실전 대화",
                  "비용 부담 최소화",
                  "다양한 발음과 표현",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-indigo-600"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-indigo-100 bg-white p-8 shadow-xl">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">
                Quick Verdict
              </h2>
              <p className="mt-4 text-lg font-semibold text-slate-900">
                시간과 비용이 고민이라면 아미고가 해답입니다.
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600">
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                  <span>
                    아미고는 원하는 시간에 원하는만큼 실전형 대화를 이어가며
                    말하기 감각을 유지할 수 있습니다.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
                  <span>
                    링글은 미션 기반 코칭으로 특정 목표 달성을 중점으로 합니다.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-lime-400" />
                  <span>
                    아미고는 다양한 국적과 직업을 가진 AI 친구와 대화할 수
                    있습니다.
                  </span>
                </li>
              </ul>
              <div className="mt-6">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600 transition hover:border-indigo-300 hover:bg-indigo-100"
                >
                  아미고 자세히 알아보기
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-md transition hover:shadow-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">
              When Ameego Wins
            </span>
            <h2 className="mt-4 text-xl font-semibold text-slate-900">
              이럴 땐 아미고를 선택하세요
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600">
              <li>매일 말하며 말하기 감각을 유지하고 싶을 때</li>
              <li>자유 대화 속에서 표현을 자연스럽게 교정받고 싶을 때</li>
              <li>표현 피드백과 복습 자료를 풍부하게 활용하고 싶을 때</li>
              <li>
                다양한 국적·직업의 AI 캐릭터와 실전 상황을 연습하고 싶을 때
              </li>
              <li>전문적인 직무·상황 대화를 시뮬레이션하고 싶을 때</li>
            </ul>
          </div>
          <div className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-md transition hover:shadow-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              When Ringle Wins
            </span>
            <h2 className="mt-4 text-xl font-semibold text-slate-900">
              링글이 잘 맞는 경우
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600">
              <li>
                면접/프레젠테이션 등 특정 미션에 대한 전문 코칭이 필요할 때
              </li>
              <li>발음을 교정해 줄 원어민 튜터를 선호할 때</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 rounded-3xl border border-slate-100 bg-white p-8">
          <h2 className="text-xl font-semibold text-slate-900">
            주요 차이 요약
          </h2>
          <div className="mt-6 grid gap-6 text-sm text-slate-600 md:grid-cols-2">
            <div className="rounded-2xl border border-indigo-100 transition hover:shadow-md p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">
                시간 & 접근성
              </p>
              <p className="mt-3 text-base font-semibold text-slate-900">
                아미고
              </p>
              <p className="mt-2">
                24시간 언제든지 접속해 대화를 시작할 수 있습니다. 일정 조율
                없이도 루틴을 유지할 수 있습니다.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                시간 & 접근성
              </p>
              <p className="mt-3 text-base font-semibold text-slate-900">
                링글
              </p>
              <p className="mt-2">
                튜터 스케줄을 예약해야 하므로 실시간 유연성은 낮습니다.
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-100 shadow-md transition hover:shadow-xl p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">
                비용 구조
              </p>
              <p className="mt-3 text-base font-semibold text-slate-900">
                아미고
              </p>
              <p className="mt-2">
                1분부터 한시간까지 원하는 만큼 대화 할 수 있어 비용 부담이
                낮습니다.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                비용 구조
              </p>
              <p className="mt-3 text-base font-semibold text-slate-900">
                링글
              </p>
              <p className="mt-2">
                프리미엄 튜터 1:1 수업으로 회차당 단가가 높습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-indigo-100 shadow-md transition hover:shadow-xl p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">
                학습 흐름
              </p>
              <p className="mt-3 text-base font-semibold text-slate-900">
                아미고
              </p>
              <p className="mt-2">
                피드백과 대화 스크립트, 다시듣기가 제공되어 수업 후 복습이
                용이합니다.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                학습 흐름
              </p>
              <p className="mt-3 text-base font-semibold text-slate-900">
                링글
              </p>
              <p className="mt-2">
                첨삭과 과제가 제공되지만 복습 자료는 사용자가 직접 정리해야
                합니다.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)]">
          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8">
            <h3 className="text-base font-semibold text-emerald-700">
              실제 사용자 후기
            </h3>
            <p className="mt-3 text-sm leading-7 text-emerald-800">
              &quot;튜터 수업 시간을 예약하는 것이 항상 고민이었는데, 아미고와
              수시로 10분씩 대화하니 면접 질문에도 바로 반응이 나옵니다.
              AI인데도 대화 흐름을 기억해줘서 더 몰입돼요.&quot; — App Store
              리뷰 중
            </p>
          </div>
          <div className="rounded-3xl border border-slate-100 bg-indigo-50 p-8">
            <h3 className="text-base font-semibold text-slate-900">
              아미고를 바로 시작해 보세요
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              매일 10분 루틴으로 실전 감각을 유지하고, 비용 부담 없이 스피킹
              근육을 단련해 보세요.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="https://apps.apple.com/app/id6737622731"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/apple-store-icon.png"
                  width={160}
                  height={48}
                  alt="App Store"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.playmoreai.ameego"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/play-store-icon.png"
                  width={160}
                  height={48}
                  alt="Google Play"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
