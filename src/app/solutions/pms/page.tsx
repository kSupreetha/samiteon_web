"use client";
import Image from "next/image";
import Link from "next/link";
import { BarChart2, Link2, Wifi, TrendingUp, Star, Settings } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const featureIcons = [Star, BarChart2, Settings];

export default function PMSPage() {
  const { t } = useLanguage();
  const p = t.pms;
  const c = t.common;

  return (
    <main className="min-h-screen text-slate-900 dark:text-slate-100">

      {/* Hero */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "520px" }}>
        <div className="absolute inset-0">
          <Image src="/pms-hero.jpg" alt="Samiteon PMS" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 flex min-h-[520px] max-w-2xl flex-col justify-center px-10 py-24 md:px-16 lg:px-24">
          <span className="mb-4 inline-block w-fit rounded-full bg-amber-500/20 px-4 py-1 text-sm font-semibold text-amber-300">{c.samiteonSolutions}</span>
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-[3.25rem]">{p.heroTitle}</h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-200">{p.heroDesc}</p>
          <Link href="https://pms.samiteon.com/" target="_blank" rel="noopener noreferrer"
            className="mt-8 inline-block w-fit rounded-full bg-amber-500 px-8 py-3 text-base font-semibold text-white hover:bg-amber-600">
            {p.heroBtn}
          </Link>
        </div>
      </section>

      {/* Section 1 */}
      <section className="bg-white px-6 py-16 dark:bg-slate-900">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image src="/pms-1.webp" alt="Hotel team" width={800} height={600} className="w-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold leading-snug text-slate-900 dark:text-white md:text-4xl">{p.sec1Title}</h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-400">{p.sec1Desc}</p>
            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"><TrendingUp size={20} /></div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{p.realTimeTitle}</h4>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{p.realTimeDesc}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"><Link2 size={20} /></div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{p.seamlessTitle}</h4>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{p.seamlessDesc}</p>
                </div>
              </div>
            </div>
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
            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"><Wifi size={20} /></div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{p.instantTitle}</h4>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{p.instantDesc}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"><BarChart2 size={20} /></div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{p.dataDrivenTitle}</h4>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{p.dataDrivenDesc}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image src="/pms-2.webp" alt="Real-time data integration" width={800} height={600} className="w-full object-cover" />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6"><hr className="border-slate-200 dark:border-slate-700" /></div>

      {/* 3-feature block */}
      <section className="bg-white px-6 py-16 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">{p.sec3Title}</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-400">{p.sec3Desc}</p>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {p.features.map(({ title, desc }, i) => {
              const Icon = featureIcons[i];
              return (
                <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"><Icon size={22} /></div>
                  <h4 className="mt-4 font-bold leading-snug text-slate-900 dark:text-white">{title}</h4>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-50 px-6 py-16 dark:bg-amber-900/20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">{p.ctaTitle}</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{p.ctaDesc}</p>
          <Link href="https://pms.samiteon.com/" target="_blank" rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-amber-500 px-8 py-3 text-base font-semibold text-white hover:bg-amber-600">
            {p.ctaBtn}
          </Link>
        </div>
      </section>

    </main>
  );
}
