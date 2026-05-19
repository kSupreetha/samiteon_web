"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function DataSciencePage() {
  const { t } = useLanguage();
  const p = t.dataSci;
  const c = t.common;

  return (
    <main className="min-h-screen pt-24 text-slate-900 dark:text-slate-100">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 px-6 py-24 text-white">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #06b6d4 0%, transparent 50%), radial-gradient(circle at 80% 20%, #8b5cf6 0%, transparent 50%)" }} />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">{c.services}</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">{p.heroTitle}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">{p.heroDesc}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-lg bg-cyan-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-cyan-500">{c.inquireNow}</Link>
            <Link href="#services" className="rounded-lg border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10">{c.learnMore}</Link>
          </div>
        </div>
      </section>

      {/* Full-width image */}
      <div className="relative h-72 w-full sm:h-96 lg:h-[28rem]">
        <Image src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1600&q=80" alt="AI and machine learning" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">{p.imageLabel}</p>
          <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">{p.imageTitle}</h2>
        </div>
      </div>
      <section className="w-full bg-white px-6 py-14 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl">
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">{p.introDesc}</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: p.automationTitle, body: p.automationDesc, icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
              { title: p.optimizationTitle, body: p.optimizationDesc, icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
            ].map(({ title, body, icon }) => (
              <div key={title} className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-100 dark:bg-cyan-900">
                  <svg className="h-5 w-5 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} /></svg>
                </div>
                <p className="font-semibold text-slate-900 dark:text-slate-100">{title}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Analysis */}
      <section id="services" className="w-full border-t border-slate-200 bg-slate-50 px-6 py-16 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 flex items-center gap-3"><span className="h-8 w-1.5 rounded-full bg-cyan-500" />
              <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">{p.sec2Title}</h2>
            </div>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">{p.sec2Desc}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { title: p.dataAnalysisTitle, body: p.dataAnalysisDesc },
                { title: p.dataDrivenTitle, body: p.dataDrivenDesc },
              ].map(({ title, body }) => (
                <div key={title} className="rounded-xl border border-cyan-100 bg-white p-5 dark:border-cyan-900 dark:bg-slate-800">
                  <p className="font-semibold text-slate-900 dark:text-slate-100">{title}</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-xl lg:h-80">
            <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Data analysis dashboard" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* AI Personalization */}
      <section className="w-full border-t border-slate-200 bg-white px-6 py-16 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-xl lg:h-80">
            <Image src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80" alt="AI personalization" fill className="object-cover" />
          </div>
          <div>
            <div className="mb-4 flex items-center gap-3"><span className="h-8 w-1.5 rounded-full bg-cyan-500" />
              <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">{p.sec3Title}</h2>
            </div>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">{p.sec3Desc}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { title: p.personalizedTitle, body: p.personalizedDesc },
                { title: p.predictiveTitle, body: p.predictiveDesc },
              ].map(({ title, body }) => (
                <div key={title} className="rounded-xl border border-cyan-100 bg-slate-50 p-5 dark:border-cyan-900 dark:bg-slate-900">
                  <p className="font-semibold text-slate-900 dark:text-slate-100">{title}</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full border-t border-slate-200 bg-slate-50 px-6 py-16 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex items-center gap-3"><span className="h-8 w-1.5 rounded-full bg-cyan-500" />
            <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">{p.faqsTitle}</h2>
          </div>
          <p className="mb-8 text-slate-600 dark:text-slate-300">{p.faqsDesc}</p>
          <div className="space-y-4">
            {p.faqs.map(({ q, a }) => (
              <details key={q} className="group rounded-xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-semibold text-slate-900 dark:text-slate-100 list-none">
                  {q}
                  <svg className="h-5 w-5 shrink-0 text-cyan-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-6 pb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="relative h-64 w-full sm:h-80">
        <Image src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1600&q=80" alt="Data science power" fill className="object-cover" />
        <div className="absolute inset-0 bg-cyan-900/85" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{p.ctaTitle}</h2>
          <p className="mt-4 max-w-xl text-lg text-cyan-100">{p.ctaDesc}</p>
          <Link href="/contact" className="mt-8 rounded-lg bg-white px-10 py-4 font-bold text-cyan-700 shadow-lg transition hover:bg-cyan-50">{c.inquire}</Link>
        </div>
      </div>

    </main>
  );
}
