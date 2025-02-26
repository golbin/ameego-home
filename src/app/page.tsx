"use client";

import Image from "next/image";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import SecondHero from "@/components/SecondHero";
import Gallary from "@/components/Gallary";
import Footer from "@/components/Footer";
import Company from "@/components/Company";
import { useLocale } from "next-intl";

export default function Home() {
  const locale = useLocale();

  function handleLocaleChange(locale: string) {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;
    window.location.reload();
  }

  return (
    <div className="bg-white">
      <main>
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            aria-label="Global"
            className="flex items-center justify-between p-6 lg:px-8"
          >
            <div className="absolute right-4 top-4 z-50 text-sm">
              <button
                onClick={() => handleLocaleChange("ko")}
                className={
                  locale === "ko"
                    ? "font-bold text-blue-600"
                    : "text-slate-600 hover:text-slate-900"
                }
              >
                한국어
              </button>
              <span className="mx-2 text-slate-300">|</span>
              <button
                onClick={() => handleLocaleChange("ja")}
                className={
                  locale === "ja"
                    ? "font-bold text-blue-600"
                    : "text-slate-600 hover:text-slate-900"
                }
              >
                日本語
              </button>
              <span className="mx-2 text-slate-300">|</span>
              <button
                onClick={() => handleLocaleChange("en")}
                className={
                  locale === "en"
                    ? "font-bold text-blue-600"
                    : "text-slate-600 hover:text-slate-900"
                }
              >
                English
              </button>
            </div>

            <div className="flex lg:flex-1">
              <a
                href="https://playmore.ai"
                target="_blank"
                className="-m-1.5 p-1.5"
              >
                <Image alt="" src="/playmore-512.png" width={50} height={50} />
              </a>
            </div>
          </nav>
        </header>

        <Hero />
        <SecondHero />
        <Gallary />
        <Testimonials />
        <Company />
      </main>

      <Footer />
    </div>
  );
}
