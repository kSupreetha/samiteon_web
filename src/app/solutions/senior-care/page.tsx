"use client";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Activity, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const outcomeIcons = [ShieldCheck, Activity, TrendingUp];

export default function SeniorCarePage() {
  const { t } = useLanguage();
  const p = t.seniorCare;
  const c = t.common;

  return (
    <main className="min-h-screen text-slate-900 dark:text-slate-100">

      {/* Hero */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "520px" }}>
        <div className="absolute inset-0">
          <Image src="/senior-hero.webp" alt="Senior Care" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 flex min-h-[520px] max-w-2xl flex-col justify-center px-10 py-24 md:px-16 lg:px-24">
          <span className="mb-4 inline-block w-fit rounded-full bg-teal-500/20 px-4 py-1 text-sm font-semibold text-teal-300">{c.samiteonSolutions}</span>
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-[3.25rem]">{p.heroTitle}</h1>
          <p className="mt-4 max-w-lg text-xl font-medium text-slate-200">{p.heroSubtitle}</p>
          <Link href="https://www.agingcareai.com/" target="_blank" rel="noopener noreferrer"
            className="mt-8 inline-block w-fit rounded-full bg-teal-500 px-8 py-3 text-base font-semibold text-white hover:bg-teal-600">
            {p.heroBtn}
          </Link>
        </div>
      </section>

      {/* Section 1 */}
      <section className="bg-white px-6 py-16 dark:bg-slate-900">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold leading-snug text-slate-900 dark:text-white md:text-4xl">{p.sec1Title}</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              {p.sec1Paras.map((para, i) => <p key={i}>{para}</p>)}
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image src="/senior-1.webp" alt="Senior care wearable" width={800} height={600} className="w-full object-cover" />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6"><hr className="border-slate-200 dark:border-slate-700" /></div>

      {/* Section 2 */}
      <section className="bg-white px-6 py-16 dark:bg-slate-900">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image src="/senior-2.webp" alt="Remote patient monitoring" width={800} height={600} className="w-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold leading-snug text-slate-900 dark:text-white md:text-4xl">{p.sec2Title}</h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-400">{p.sec2Desc}</p>
            <ul className="mt-8 space-y-4">
              {p.outcomes.map((label, i) => {
                const Icon = outcomeIcons[i];
                return (
                  <li key={label} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400"><Icon size={20} /></div>
                    <span className="text-base font-semibold text-slate-800 dark:text-slate-200">{label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-50 px-6 py-16 dark:bg-teal-900/20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">{p.ctaTitle}</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{p.ctaDesc}</p>
          <Link href="https://www.agingcareai.com/" target="_blank" rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-teal-500 px-8 py-3 text-base font-semibold text-white hover:bg-teal-600">
            {p.ctaBtn}
          </Link>
        </div>
      </section>

    </main>
  );
}
