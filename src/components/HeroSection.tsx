"use client";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center">
      <Image
        src="/hero-developer.jpg"
        alt="Developer working environment"
        fill
        sizes="100vw"
        priority
        className="object-cover object-top"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center text-white">
        <p className="mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
          {h.badge}
        </p>

        <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
          {h.title}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
          {h.subtitle}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#about"
            className="rounded-full bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg hover:bg-blue-700"
          >
            {h.learnMore}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/50 bg-white/10 px-7 py-3 font-semibold text-white backdrop-blur-sm hover:bg-white/20"
          >
            {h.contactUs}
          </a>
        </div>
      </div>
    </section>
  );
}
