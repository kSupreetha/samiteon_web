"use client";
import Image from "next/image";
import Link from "next/link";
import { Activity, ClipboardList, MessageCircle, Users, Monitor, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const nurseIcons = [Users, Monitor, Heart];
const patientIcons = [Activity, ClipboardList, MessageCircle];

export default function MommyCarePage() {
  const { t } = useLanguage();
  const p = t.mommyCare;
  const c = t.common;

  return (
    <main className="min-h-screen text-slate-900 dark:text-slate-100">

      {/* Hero */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "500px" }}>
        <div className="absolute inset-0">
          <Image src="/mommy-care.webp" alt="Mommy Care" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>
        <div className="relative z-10 flex min-h-[500px] max-w-2xl flex-col justify-center px-10 py-24 md:px-16 lg:px-24">
          <span className="mb-4 inline-block w-fit rounded-full bg-pink-500/20 px-4 py-1 text-sm font-semibold text-pink-300">{c.samiteonSolutions}</span>
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">{p.heroTitle}</h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-200">{p.heroDesc}</p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="bg-white px-6 py-16 dark:bg-slate-900">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image src="/mommy-care-3.webp" alt="Prenatal care" width={800} height={600} className="w-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold leading-snug text-slate-900 dark:text-white md:text-4xl">{p.sec1Title}</h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-400">{p.sec1Desc}</p>
            <ul className="mt-8 space-y-4">
              {p.nurseFeatures.map((label, i) => {
                const Icon = nurseIcons[i];
                return (
                  <li key={label} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400"><Icon size={20} /></div>
                    <span className="text-base font-medium text-slate-800 dark:text-slate-200">{label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6"><hr className="border-slate-200 dark:border-slate-700" /></div>

      {/* Section 2 */}
      <section className="bg-white px-6 py-16 dark:bg-slate-900">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold leading-snug text-slate-900 dark:text-white md:text-4xl">{p.sec2Title}</h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-400">{p.sec2Desc}</p>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image src="/mommy-care-4.webp" alt="Vital monitoring hardware" width={800} height={600} className="w-full object-cover" />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6"><hr className="border-slate-200 dark:border-slate-700" /></div>

      {/* Section 3 */}
      <section className="bg-white px-6 py-16 dark:bg-slate-900">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image src="/mommy-care-2.webp" alt="Prenatal care at home" width={800} height={600} className="w-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold leading-snug text-slate-900 dark:text-white md:text-4xl">{p.sec3Title}</h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-400">{p.sec3Desc}</p>
            <ul className="mt-8 space-y-4">
              {p.patientFeatures.map((label, i) => {
                const Icon = patientIcons[i];
                return (
                  <li key={label} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400"><Icon size={20} /></div>
                    <span className="text-base font-semibold text-slate-800 dark:text-slate-200">{label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pink-50 px-6 py-16 dark:bg-pink-900/20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">{p.ctaTitle}</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{p.ctaDesc}</p>
          <Link href="/contact" className="mt-8 inline-block rounded-full bg-pink-600 px-8 py-3 text-base font-semibold text-white hover:bg-pink-700">{p.ctaBtn}</Link>
        </div>
      </section>

    </main>
  );
}
