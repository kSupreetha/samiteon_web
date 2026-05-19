"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function StaffAugmentationPage() {
  const { t } = useLanguage();
  const p = t.staffAug;
  const c = t.common;

  return (
    <main className="min-h-screen pt-24 text-slate-900 dark:text-slate-100">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 px-6 py-24 text-white">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #06b6d4 0%, transparent 50%)" }} />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-400">{c.services}</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">{p.heroTitle}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">{p.heroDesc}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-500">{c.inquireNow}</Link>
            <Link href="#advantages" className="rounded-lg border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10">{c.learnMore}</Link>
          </div>
        </div>
      </section>

      {/* Full-width image */}
      <div className="relative h-72 w-full sm:h-96 lg:h-[28rem]">
        <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80" alt="Skilled and diverse workforce" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">{p.imageLabel}</p>
          <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">{p.imageTitle}</h2>
        </div>
      </div>

      <section className="w-full bg-white px-6 py-14 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl">
          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 lg:text-lg">{p.introDesc}</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {p.listItems.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <svg className="h-3 w-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-sm text-slate-600 dark:text-slate-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Cost-Effective */}
      <section className="w-full border-t border-slate-200 bg-slate-50 px-6 py-16 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-8 w-1.5 rounded-full bg-blue-500" />
              <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">{p.sec2Title}</h2>
            </div>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">{p.sec2Desc}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm dark:border-blue-900 dark:bg-slate-800">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                  <svg className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="font-semibold text-slate-900 dark:text-slate-100">{p.costEffTitle}</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{p.costEffDesc}</p>
              </div>
              <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm dark:border-blue-900 dark:bg-slate-800">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                  <svg className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="font-semibold text-slate-900 dark:text-slate-100">{p.roundTitle}</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{p.roundDesc}</p>
              </div>
            </div>
          </div>
          <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-xl lg:h-80">
            <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" alt="Global talent pool" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section id="advantages" className="w-full border-t border-slate-200 bg-white px-6 py-16 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-xl lg:h-80">
            <Image src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" alt="Advantages of staff augmentation" fill className="object-cover" />
          </div>
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-8 w-1.5 rounded-full bg-blue-500" />
              <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">{p.sec3Title}</h2>
            </div>
            <p className="mb-8 text-base leading-relaxed text-slate-600 dark:text-slate-300">{p.sec3Desc}</p>
            <div className="space-y-4">
              {[
                { title: p.flexTitle, body: p.flexDesc, icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /> },
                { title: p.scaleTitle, body: p.scaleDesc, icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /> },
                { title: p.techTitle, body: p.techDesc, icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /> },
              ].map(({ title, body, icon }) => (
                <div key={title} className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                    <svg className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">{icon}</svg>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-slate-100">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full border-t border-slate-200 bg-gradient-to-br from-blue-600 to-blue-800 px-6 py-16 dark:border-slate-800">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="text-white">
            <h2 className="text-3xl font-bold leading-tight lg:text-4xl">{p.ctaTitle}</h2>
            <p className="mt-4 text-lg text-blue-100">{p.ctaDesc}</p>
            <Link href="/contact" className="mt-8 inline-block rounded-lg bg-white px-10 py-4 font-bold text-blue-700 shadow-lg transition hover:bg-blue-50">{c.inquire}</Link>
          </div>
          <div className="relative h-56 w-full overflow-hidden rounded-2xl shadow-2xl lg:h-72">
            <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" alt="Find staffing solutions" fill className="object-cover" />
          </div>
        </div>
      </section>

    </main>
  );
}
