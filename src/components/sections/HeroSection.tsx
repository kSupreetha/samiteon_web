"use client";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const certs = [
  { src: "/microsoft.png",         alt: "Microsoft Solutions Partner" },
  { src: "/iso-certification.png", alt: "ISO 9001:2015 & ISO 27001:2022 Certified" },
  { src: "/webenc.svg",            alt: "WBE/WBC Certified" },
  { src: "/nmsdc-logo.svg",        alt: "NMSDC Certified" },
  { src: "/salesforce.svg",        alt: "Salesforce Partner" },
];

export default function HeroSection() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section id="home" className="relative flex min-h-screen flex-col items-center justify-center">
      <Image
        src="/hero-main.png"
        alt="AI-powered business solutions"
        fill
        sizes="100vw"
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-32 pb-12 text-center text-white">
        {/* Certifications strip */}
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">
          Trusted &amp; Certified
        </p>
        <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
          {certs.map(({ src, alt }) => (
            <div
              key={src}
              className="flex h-20 w-44 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white shadow-lg"
            >
              <Image
                src={src}
                alt={alt}
                width={160}
                height={72}
                className="h-full w-full object-contain p-3"
              />
            </div>
          ))}
        </div>

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
