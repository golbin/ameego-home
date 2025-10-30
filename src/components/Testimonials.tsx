"use client";

import { useTranslations } from "next-intl";

const insightKeys = ["one", "two", "three"] as const;
const reviewCardKeys = [
  "dailyFeedback",
  "naturalAI",
  "immersion",
  "tutorApproved",
] as const;
const socialCardKeys = ["one", "two", "three"] as const;

function ReviewCard({
  badge,
  title,
  meta,
  body,
}: {
  badge: string;
  title: string;
  meta: string;
  body: string[];
}) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
      <span className="w-max rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        {badge}
      </span>
      <h3 className="mt-4 text-base font-semibold text-slate-900 sm:text-lg">
        {title}
      </h3>
      <p className="mt-2 text-xs font-medium text-slate-500 sm:text-sm">
        {meta}
      </p>
      <div className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
        {body.map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>
    </article>
  );
}

function SocialCard({
  author,
  platform,
  content,
}: {
  author: string;
  platform: string;
  content: string;
}) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-indigo-200/60 bg-indigo-50/70 p-6 text-indigo-950">
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-500">
        {platform}
      </span>
      <h3 className="mt-2 text-sm font-semibold text-indigo-900">{author}</h3>
      <p className="mt-3 text-sm leading-6 text-indigo-800">{content}</p>
    </article>
  );
}

export default function Testimonials() {
  const t = useTranslations("HomePage.Testimonials");

  const highlightReview = {
    badge: t("highlight.badge"),
    quote: t("highlight.quote"),
    meta: t("highlight.meta"),
    source: t("highlight.source"),
  };

  const insightPoints = insightKeys.map((key) => t(`insights.${key}`));

  const reviewCards = reviewCardKeys.map((key) => ({
    badge: t(`reviews.${key}.badge`),
    title: t(`reviews.${key}.title`),
    meta: t(`reviews.${key}.meta`),
    body: [t(`reviews.${key}.bodyLine1`), t(`reviews.${key}.bodyLine2`)],
  }));

  const socialCards = socialCardKeys.map((key) => ({
    author: t(`social.cards.${key}.author`),
    platform: t(`social.cards.${key}.platform`),
    content: t(`social.cards.${key}.content`),
  }));

  return (
    <section className="relative isolate mt-16 overflow-hidden sm:rounded-[3rem] bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 px-6 py-12 sm:py-20 sm:px-10 sm:mx-8">
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute left-1/3 top-10 h-64 w-64 rounded-full bg-indigo-500/30 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-56 w-56 rounded-full bg-fuchsia-500/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl text-slate-50">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200">
          {t("sectionBadge")}
        </p>
        <h2 className="mt-4 text-pretty text-4xl font-bold tracking-tight sm:text-5xl">
          {t("sectionTitle")}
        </h2>
        <div className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
          <p>{t("sectionDescription1")}</p>
          <p>{t("sectionDescription2")}</p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)]">
          <aside className="flex flex-col gap-8">
            <article className="rounded-3xl border border-slate-700/60 bg-slate-900/80 p-8 shadow-xl">
              <span className="inline-flex items-center rounded-full bg-indigo-500/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-200">
                {highlightReview.badge}
              </span>
              <blockquote className="mt-6 text-lg font-semibold leading-8 text-slate-50 sm:text-xl">
                &quot;{highlightReview.quote}&quot;
              </blockquote>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.12em] text-indigo-200">
                {highlightReview.meta} · {highlightReview.source}
              </p>
            </article>

            <div className="rounded-3xl border border-slate-700/40 bg-slate-900/60 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200">
                {t("insightsTitle")}
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
                {insightPoints.map((point, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-indigo-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="space-y-10">
            <div className="grid gap-6 sm:grid-cols-2">
              {reviewCards.map((review) => (
                <ReviewCard key={review.meta} {...review} />
              ))}
            </div>

            <div className="rounded-3xl border border-indigo-300/30 bg-indigo-100/80 p-6">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
                    {t("social.badge")}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-indigo-900">
                    {t("social.title")}
                  </h3>
                  <p className="mt-3 text-sm text-indigo-800">
                    {t("social.description")}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {socialCards.map((post) => (
                  <SocialCard
                    key={`${post.platform}-${post.author}`}
                    {...post}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
