import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "스픽(Speak) vs 아미고 | AI 영어회화 비교",
  description:
    "스픽으로 부족했나요? 아미고는 다양한 성격의 AI 친구와의 실전형 대화로 영어 말하기를 자연스럽게 만들어 줍니다. iOS/Android 무료 체험.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/compare/speak" },
  openGraph: {
    title: "스픽(Speak) vs 아미고 | AI 영어회화 비교",
    description:
      "아미고는 AI 친구와의 실전형 대화로 말하기 자신감을 키우고, 영어 말하기를 자연스럽게 만들어 줍니다.",
    images: [{ url: "/og-image.png", alt: "Ameego" }],
    type: "article",
    url: "/compare/speak",
  },
};

export default function Page() {
  return (
    <main className="bg-gradient-to-b from-white via-indigo-50/40 to-white text-slate-900">
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-12 lg:pt-24 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
              &quot;스픽&quot; 및 &quot;Speak&quot;는 각 소유자의 상표입니다. 본
              페이지의 내용은 정보 제공을 위한 비교 목적입니다.
            </p>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
              영어 회화 앱 비교
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-indigo-400" />
              실전형 대화 vs 드릴형 학습
            </span>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
            <div>
              <h1 className="text-pretty text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                스픽(Speak) vs 아미고,
                <br className="hidden sm:block" />
                어떤 상황에 어떤 앱을 써야 할까요?
              </h1>
              <p className="mt-6 text-base leading-7 text-slate-600">
                스픽은 문장을 반복해서 정확히 따라 말하는 훈련에 집중되어
                있습니다. 반면 아미고는 실제 사람처럼 반응하는 AI 친구와 즉흥
                대화를 하며 상황 대응력과 표현력을 키우는 데 최적화되어
                있습니다. 하루 10분, 대화 중심 루틴으로 말문을 열고 싶다면
                아미고를 체험해 보세요.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                {[
                  "실전형 AI 음성 대화",
                  "표현 피드백과 복습 자료 제공",
                  "10분 스피킹 루틴",
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
                즉흥 대화 · 실전 피드백이 필요하다면 아미고가 적합합니다.
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600">
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                  <span>
                    아미고는 AI가 맥락을 기억하며 자연스럽게 질문을 이어가 실전
                    감각을 길러 줍니다.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-indigo-400" />
                  <span>스픽은 문장 반복 학습에 최적화되어 있습니다.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
                  <span>
                    아미고는 다양한 발음과 예상치 못한 대화에 익숙해지도록
                    도와줍니다.
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
              <li>자유 대화 속에서 표현을 자연스럽게 교정받고 싶을 때</li>
              <li>표현 피드백과 복습 자료를 풍부하게 활용하고 싶을 때</li>
              <li>
                다양한 국적·직업의 AI 캐릭터와 실전 상황을 연습하고 싶을 때
              </li>
              <li>회화 모임, 인터뷰 대비 등 실제 활용도를 높이고 싶을 때</li>
              <li>전문적인 직무·상황 대화를 시뮬레이션하고 싶을 때</li>
            </ul>
          </div>
          <div className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-md transition hover:shadow-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              When Speak Wins
            </span>
            <h2 className="mt-4 text-xl font-semibold text-slate-900">
              스픽이 잘 맞는 경우
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600">
              <li>
                정해진 커리큘럼에 맞춰 짧은 문장을 반복 암기하는 것이 목적일 때
              </li>
              <li>발음 정확도를 음성 인식으로 점검하는 연습이 필요할 때</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 rounded-3xl border border-slate-100 bg-white p-8">
          <h2 className="text-xl font-semibold text-slate-900">
            핵심 기능 비교
          </h2>
          <div className="mt-6 grid gap-6 text-sm text-slate-600 md:grid-cols-2">
            <div className="rounded-2xl border border-indigo-100 shadow-md transition hover:shadow-xl p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">
                대화 방식
              </p>
              <p className="mt-3 text-base font-semibold text-slate-900">
                아미고
              </p>
              <p className="mt-2">
                실제 사람처럼 이어지는 AI 음성 대화. 사용자의 답변을 기억하고
                맥락에 맞게 질문을 이어 갑니다.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                대화 방식
              </p>
              <p className="mt-3 text-base font-semibold text-slate-900">
                스픽
              </p>
              <p className="mt-2">
                스크립트를 따라 읽으며 발음 평가를 받는 구조. 즉흥 대화나 맥락
                유지보다는 정확한 따라 말하기에 초점이 맞춰져 있습니다.
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-100 shadow-md transition hover:shadow-xl p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">
                피드백
              </p>
              <p className="mt-3 text-base font-semibold text-slate-900">
                아미고
              </p>
              <p className="mt-2">
                대화 중, 대화 후 표현·대체 문장을 정리해 주고 리포트와 다시
                듣기로 나에게 맞춰 복습할 수 있습니다.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                피드백
              </p>
              <p className="mt-3 text-base font-semibold text-slate-900">
                스픽
              </p>
              <p className="mt-2">
                문장 단위 발음 정확도 위주로 평가가 제공됩니다. 대화 흐름이나
                응답 다양성에 대한 피드백은 제한적입니다.
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-6 text-sm text-slate-600 md:grid-cols-2">
            <div className="rounded-2xl border border-indigo-100 shadow-md transition hover:shadow-xl p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">
                학습 리듬
              </p>
              <p className="mt-3 text-base font-semibold text-slate-900">
                아미고
              </p>
              <p className="mt-2">
                3분, 5분, 10분, 혹은 그 이상 원하는 만큼 대화를 이어가며 말하기
                감각을 유지합니다.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                학습 리듬
              </p>
              <p className="mt-3 text-base font-semibold text-slate-900">
                스픽
              </p>
              <p className="mt-2">
                하루 목표 문장을 따라 말하고 체크하는 데 집중합니다.
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
              &quot;처음엔 AI가 진짜 사람일까 의심했는데, 맥락을 기억하고 질문을
              이어가는 게 놀라웠어요. 아미고와 대화한 뒤 다른 앱이 갑자기
              구식으로 느껴졌습니다.&quot; — App Store 리뷰 중
            </p>
          </div>
          <div className="rounded-3xl border border-slate-100 bg-indigo-50 p-8">
            <h3 className="text-base font-semibold text-slate-900">
              아미고를 지금 체험해 보세요
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              다양한 AI 친구와의 실전형 대화를 무료로 시작하고, 7일 동안 표현
              피드백과 복습 자료를 직접 경험해 보세요.
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
