"use client";

import { useLocale, useTranslations } from "next-intl";
import LocaleContent from "@/types/locale";

export default function Footer() {
  const t = useTranslations("HomePage");
  const locale = useLocale() as keyof LocaleContent;

  return (
    <footer className="mt-16">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="relative text-center text-sm text-slate-600">
          <p>Copyright &copy; {new Date().getFullYear()} playmore, Inc.</p>
          {locale === "ko" && (
            <p className="mt-4">
              (주) 플레이모어 | 대표 김진중, 강택영 | 사업자등록번호
              162-88-03074
            </p>
          )}
        </div>

        <nav
          aria-label="Footer"
          className="-mb-6 mt-4 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm/6"
        >
          <a
            href={`https://docs.ameego.club/${locale}/terms-of-use`}
            target="_blank"
            className="text-gray-600 hover:text-gray-900"
          >
            {t("Footer.termsOfUse")}
          </a>
          <a
            href={`https://docs.ameego.club/${locale}/privacy-policy`}
            target="_blank"
            className="text-gray-600 hover:text-gray-900"
          >
            {t("Footer.privacyPolicy")}
          </a>
          <a
            href={`https://docs.ameego.club/${locale}/faq`}
            target="_blank"
            className="text-gray-600 hover:text-gray-900"
          >
            {t("Footer.faq")}
          </a>
        </nav>
      </div>
    </footer>
  );
}
