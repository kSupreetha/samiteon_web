"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AccountingPage() {
  const { t } = useLanguage();
  const p = t.accounting;
  const c = t.common;

  return (
    <main className="min-h-screen pt-24 text-slate-900 dark:text-slate-100">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 px-6 py-24 text-white">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #10b981 0%, transparent 50%), radial-gradient(circle at 80% 20%, #06b6d4 0%, transparent 50%)" }} />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-emerald-400">{c.services}</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">{p.heroTitle}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">{p.heroDesc}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-lg bg-emerald-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-emerald-500">{c.inquireNow}</Link>
            <Link href="#services" className="rounded-lg border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10">{c.learnMore}</Link>
          </div>
        </div>
      </section>

      {/* Full-width image 1 */}
      <div className="relative h-72 w-full sm:h-96 lg:h-[28rem]">
        <Image src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80" alt="Accounting solutions" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-300">{p.imageLabel}</p>
          <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">{p.imageTitle}</h2>
        </div>
      </div>
      <section className="w-full bg-white px-6 py-14 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl">
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">{p.introDesc}</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: p.card1Title, body: p.card1Desc, icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
              { title: p.card2Title, body: p.card2Desc, icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
            ].map(({ title, body, icon }) => (
              <div key={title} className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900">
                  <svg className="h-5 w-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} /></svg>
                </div>
                <p className="font-semibold text-slate-900 dark:text-slate-100">{title}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section id="services" className="w-full border-t border-slate-200 bg-slate-50 px-6 py-16 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 flex items-center gap-3"><span className="h-8 w-1.5 rounded-full bg-emerald-500" />
              <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">{p.sec2Title}</h2>
            </div>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">{p.sec2Desc}</p>
            <ul className="mt-6 space-y-2">
              {p.listItems.map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900">
                    <svg className="h-3 w-3 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-xl lg:h-80">
            <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Financial management" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="w-full border-t border-slate-200 bg-white px-6 py-16 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-xl lg:h-80">
            <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Advanced accounting technology" fill className="object-cover" />
          </div>
          <div>
            <div className="mb-4 flex items-center gap-3"><span className="h-8 w-1.5 rounded-full bg-emerald-500" />
              <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">{p.sec3Title}</h2>
            </div>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">{p.sec3Desc}</p>
            <div className="mt-6 space-y-3">
              {p.techItems.map(item => (
                <div key={item} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-900">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-64 w-full sm:h-80">
          <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80" alt="Transform accounting" fill className="object-cover" />
          <div className="absolute inset-0 bg-emerald-900/80" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">{p.ctaTitle}</h2>
            <p className="mt-4 max-w-xl text-lg text-emerald-100">{p.ctaDesc}</p>
            <Link href="/contact" className="mt-8 rounded-lg bg-white px-10 py-4 font-bold text-emerald-700 shadow-lg transition hover:bg-emerald-50">{c.inquire}</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
