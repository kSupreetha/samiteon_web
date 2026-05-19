"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ErpPage() {
  const { t } = useLanguage();
  const p = t.erp;
  const c = t.common;

  return (
    <main className="min-h-screen pt-24 text-slate-900 dark:text-slate-100">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 px-6 py-24 text-white">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #7c3aed 0%, transparent 50%), radial-gradient(circle at 80% 20%, #06b6d4 0%, transparent 50%)" }} />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-violet-400">{c.services}</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">{p.heroTitle}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">{p.heroDesc}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-lg bg-violet-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-violet-500">{c.inquireNow}</Link>
            <Link href="#solutions" className="rounded-lg border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10">{c.learnMore}</Link>
          </div>
        </div>
      </section>

      {/* Full-width image */}
      <div className="relative h-72 w-full sm:h-96 lg:h-[28rem]">
        <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&q=80" alt="ERP consulting" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-300">{p.imageLabel}</p>
          <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">{p.imageTitle}</h2>
        </div>
      </div>
      <section className="w-full bg-white px-6 py-14 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl">
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">{p.introDesc}</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              { title: p.card1Title, body: p.card1Desc },
              { title: p.card2Title, body: p.card2Desc },
              { title: p.card3Title, body: p.card3Desc },
            ].map(({ title, body }) => (
              <div key={title} className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
                <div className="mb-3 h-1 w-10 rounded-full bg-violet-500" />
                <p className="font-semibold text-slate-900 dark:text-slate-100">{title}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimize Operations */}
      <section id="solutions" className="w-full border-t border-slate-200 bg-slate-50 px-6 py-16 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 flex items-center gap-3"><span className="h-8 w-1.5 rounded-full bg-violet-500" />
              <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">{p.sec2Title}</h2>
            </div>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">{p.sec2Desc}</p>
            <div className="mt-6 space-y-3">
              {p.listItems.map(item => (
                <div key={item} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-800">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900">
                    <svg className="h-3 w-3 text-violet-600 dark:text-violet-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </span>
                  <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-xl lg:h-80">
            <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="ERP operations" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="relative h-64 w-full sm:h-80">
        <Image src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80" alt="Transform business" fill className="object-cover" />
        <div className="absolute inset-0 bg-violet-900/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{p.ctaTitle}</h2>
          <p className="mt-4 max-w-xl text-lg text-violet-100">{p.ctaDesc}</p>
          <Link href="/contact" className="mt-8 rounded-lg bg-white px-10 py-4 font-bold text-violet-700 shadow-lg transition hover:bg-violet-50">{c.inquire}</Link>
        </div>
      </div>

    </main>
  );
}
