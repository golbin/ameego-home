"use client";

import Image from "next/image";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import SecondHero from "@/components/SecondHero";
import Gallary from "@/components/Gallary";
import Footer from "@/components/Footer";
import Company from "@/components/Company";

export default function Example() {
  return (
    <div className="bg-white">
      <main>
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            aria-label="Global"
            className="flex items-center justify-between p-6 lg:px-8"
          >
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
