"use client";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const certs = [
  { src: "/webenc.svg",            alt: "WBE/WBC Certified",   bg: "bg-white" },
  { src: "/iso-certification.jpg", alt: "ISO 9001 & 27001",    bg: "bg-black" },
  { src: "/nmsdc-logo.svg",        alt: "NMSDC Certified",     bg: "bg-white" },
];

export default function CertificationsSection() {
  const { t } = useLanguage();
  const c = t.certifications;

  return (
    <section className="relative border-y border-white/[0.06] bg-gradient-to-r from-slate-950 via-blue-950/60 to-slate-950 py-16">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      {/* heading */}
      <div className="mx-auto mb-12 max-w-7xl px-6 text-center">
        <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-400">
          {c.label}
        </span>
        <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
          {c.title}
        </h2>
      </div>

      {/* static cert logos */}
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-10 px-6">
        {certs.map(({ src, alt, bg }) => (
          <div
            key={src}
            className={`flex h-32 w-64 items-center justify-center overflow-hidden rounded-2xl border border-white/10 shadow-xl ${bg}`}
          >
            <Image
              src={src}
              alt={alt}
              width={220}
              height={110}
              className="h-full w-full object-contain p-4"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
