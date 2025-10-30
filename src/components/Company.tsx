"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Company() {
  const t = useTranslations("HomePage");

  return (
    <>
      <div className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            {t("CallToAction.title")}
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            {t("CallToAction.description")}
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
      <div className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            playmore
          </h2>

          <p className="mt-6 text-lg/8 text-gray-600">
            Meet a new AI friend who helps you grow and become your best self.
          </p>
          <p className="mt-4 text-lg/8 text-gray-600">
            We’ll be there for life’s moments, opening doors to new
            possibilities.
          </p>
        </div>
      </div>
    </>
  );
}
