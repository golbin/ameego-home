import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "리얼클래스(Realclass) vs 아미고 | 영어 회화 비교",
  description:
    "영상으로 듣고 따라 하기만으론 말문이 안 트이나요? 아미고는 AI 친구와 대화하며 실전처럼 말하는 영어 회화 앱입니다. iOS/Android 무료 체험.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/compare/realclass" },
  openGraph: {
    title: "리얼클래스(Realclass) vs 아미고 | 영어 회화 비교",
    description:
      "보고 듣는 학습에서 말하는 학습으로. 아미고로 스피킹 루틴을 시작하세요.",
    images: [{ url: "/og-image.png", alt: "Ameego" }],
    type: "article",
    url: "/compare/realclass",
  },
};

export default function Page() {
  return (
    <main className="bg-gradient-to-b from-white via-indigo-50/40 to-white text-slate-900">
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-12 lg:pt-24 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
              &quot;리얼클래스&quot; 및 &quot;Realclass&quot;는 각 소유자의
              상표입니다. 본 페이지의 내용은 정보 제공을 위한 비교 목적입니다.
            </p>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
              영상 학습 vs 실전 대화
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-indigo-400" />
              전환 가이드
            </span>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
            <div>
              <h1 className="text-pretty text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                리얼클래스(Realclass) vs 아미고,
                <br className="hidden sm:block" />
                보는 학습에서 말하는 학습으로
              </h1>
              <p className="mt-6 text-base leading-7 text-slate-600">
                리얼클래스는 영상과 스크립트로 표현과 어휘를 익히는 콘텐츠형
                서비스입니다. 하지만 영상만 보면 이해는 되는데 실제로 말하려
                하면 막히기 쉽습니다. 아미고는 AI 친구와 직접 대화하며 표현을
                교정해 주기 때문에 입력한 내용을 실제 출력으로 연결해 줍니다.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                {[
                  "말하기와 듣기 동시 연습",
                  "표현 즉시 피드백",
                  "10분 실전 루틴",
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
                영상으로 배운 표현을 실제로 쓰려면 아미고가 필수입니다.
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600">
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-amber-400" />
                  <span>
                    아미고는 AI 친구가 맥락을 기억하며 실제 대화처럼 이어
                    줍니다.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
                  <span>
                    리얼클래스는 다양한 영상 콘텐츠로 인풋을 쌓을 수 있습니다.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                  <span>
                    아미고 대화 → 피드백 복습 → 아미고 대화 루틴으로 인풋과
                    아웃풋을 연결하세요.
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
              <li>배운 표현을 실제로 말해 보고 싶을 때</li>
              <li>표현에 대한 구체적인 피드백이 필요할 때</li>
              <li>자유 대화 속에서 표현을 자연스럽게 교정받고 싶을 때</li>
              <li>회화 모임, 인터뷰 대비 등 실제 활용도를 높이고 싶을 때</li>
            </ul>
          </div>
          <div className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-md transition hover:shadow-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              When Realclass Wins
            </span>
            <h2 className="mt-4 text-xl font-semibold text-slate-900">
              리얼클래스가 잘 맞는 경우
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600">
              <li>다양한 영상 콘텐츠로 학습하고 싶을 때</li>
              <li>스크립트를 따라 읽으며 표현을 익히는 방식이 편할 때</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 rounded-3xl border border-slate-100 bg-white p-8">
          <h2 className="text-xl font-semibold text-slate-900">
            주요 포인트 비교
          </h2>
          <div className="mt-6 grid gap-6 text-sm text-slate-600 md:grid-cols-2">
            <div className="rounded-2xl border border-indigo-100 shadow-md transition hover:shadow-xl p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">
                학습 방식
              </p>
              <p className="mt-3 text-base font-semibold text-slate-900">
                아미고
              </p>
              <p className="mt-2">
                AI 친구가 응답을 기억하며 실제 대화처럼 이어집니다. 즉흥적으로
                답하며 말하기 근육을 키울 수 있습니다.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                학습 방식
              </p>
              <p className="mt-3 text-base font-semibold text-slate-900">
                리얼클래스
              </p>
              <p className="mt-2">
                영상 시청과 따라 말하기 중심. 풍부한 인풋을 제공하지만 사용자의
                실제 발화는 제한적입니다.
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
                대화 중, 대화 후 표현·대체 문장을 자동 정리해 주고, 리포트와
                다시 듣기로 나에게 맞춰 복습할 수 있습니다.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                피드백
              </p>
              <p className="mt-3 text-base font-semibold text-slate-900">
                리얼클래스
              </p>
              <p className="mt-2">
                강사의 설명과 자막이 주요 피드백입니다. 내 표현에 대한 즉각
                교정은 어렵습니다.
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-100 shadow-md transition hover:shadow-xl p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">
                학습 지속성
              </p>
              <p className="mt-3 text-base font-semibold text-slate-900">
                아미고
              </p>
              <p className="mt-2">
                하루 10분 대화 루틴으로 꾸준히 듣기와 말하기를 동시에 연습할 수
                있습니다.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                피드백
              </p>
              <p className="mt-3 text-base font-semibold text-slate-900">
                리얼클래스
              </p>
              <p className="mt-2">
                콘텐츠 수가 많아 인풋 확장에 좋지만, 스스로 출력 시간을 따로
                확보해야 합니다.
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
              &quot;영상만 보면 이해는 되는데 말이 안 나왔어요. 아미고에서 같은
              주제로 대화하니 발음 교정과 표현 추천을 바로 받아서 실전 대화에서
              막히는 일이 확 줄었습니다.&quot; — App Store 리뷰 중
            </p>
          </div>
          <div className="rounded-3xl border border-slate-100 bg-indigo-50 p-8">
            <h3 className="text-base font-semibold text-slate-900">
              아미고를 지금 체험해 보세요
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              영상 학습으로 익힌 문장을 실제 말하기로 연결해 보세요. 7일 무료
              체험으로 표현 피드백과 복습 자료를 직접 확인할 수 있습니다.
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
