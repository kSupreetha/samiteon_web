"use client";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const colors = [
  { color: "border-t-blue-500",    dot: "bg-blue-500",    href: "/services/staff-augmentation" },
  { color: "border-t-emerald-500", dot: "bg-emerald-500", href: "/services/accounting" },
  { color: "border-t-sky-500",     dot: "bg-sky-500",     href: "/services/salesforce" },
  { color: "border-t-violet-500",  dot: "bg-violet-500",  href: "/services/erp" },
  { color: "border-t-pink-500",    dot: "bg-pink-500",    href: "/services/website-development" },
  { color: "border-t-cyan-500",    dot: "bg-cyan-500",    href: "/services/data-science" },
  { color: "border-t-orange-500",  dot: "bg-orange-500",  href: "/services/data-engineering" },
];

export default function ServicesSection() {
  const { t } = useLanguage();
  const s = t.services;

  return (
    <section id="services" className="bg-white px-6 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">{s.label}</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
          {s.title}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
          {s.subtitle}
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {s.items.map(({ title, desc }, i) => (
            <div
              key={title}
              className={`flex flex-col rounded-2xl border border-slate-200 border-t-4 ${colors[i].color} bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-900`}
            >
              <div className={`mb-3 h-1.5 w-8 rounded-full ${colors[i].dot}`} />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{desc}</p>
              <Link
                href={colors[i].href}
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400"
              >
                {s.readMore}
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
