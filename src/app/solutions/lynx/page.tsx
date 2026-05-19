"use client";
import Image from "next/image";
import Link from "next/link";
import { Zap, CheckCircle, BarChart2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LynxPage() {
  const { t } = useLanguage();
  const p = t.lynx;
  const c = t.common;

  return (
    <main className="min-h-screen text-slate-900 dark:text-slate-100">

      {/* Hero */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "500px" }}>
        <div className="absolute inset-0">
          <Image src="/lynx-hero.avif" alt="Lynx" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
        </div>
        <div className="relative z-10 flex min-h-[500px] max-w-2xl flex-col justify-center px-10 py-24 md:px-16 lg:px-24">
          <span className="mb-4 inline-block w-fit rounded-full bg-blue-500/20 px-4 py-1 text-sm font-semibold text-blue-300">
            {c.samiteonSolutions}
          </span>
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">{p.heroTitle}</h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-200">{p.heroDesc}</p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="bg-white px-6 py-16 dark:bg-slate-900">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image src="/lynx-1.webp" alt="Lynx automation" width={800} height={600} className="w-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold leading-snug text-slate-900 dark:text-white md:text-4xl">{p.sec1Title}</h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-400">{p.sec1Desc}</p>
            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"><Zap size={20} /></div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{p.automationTitle}</h4>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{p.automationDesc}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"><CheckCircle size={20} /></div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{p.accuracyTitle}</h4>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{p.accuracyDesc}</p>
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
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"><BarChart2 size={20} /></div>
              <span className="text-base font-semibold text-slate-800 dark:text-slate-200">{p.realtimeLabel}</span>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image src="/lynx-2.webp" alt="Lynx analytics" width={800} height={600} className="w-full object-cover" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-50 px-6 py-16 dark:bg-blue-900/20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">{p.ctaTitle}</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{p.ctaDesc}</p>
          <Link href="/contact" className="mt-8 inline-block rounded-full bg-blue-700 px-8 py-3 text-base font-semibold text-white hover:bg-blue-800">{c.inquire}</Link>
        </div>
      </section>

    </main>
  );
}
