"use client";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CareersSection() {
  const { t } = useLanguage();
  const c = t.careers;

  return (
    <section id="careers" className="bg-white/60 px-6 py-24 backdrop-blur-sm dark:bg-slate-900/60">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase text-blue-700 dark:text-blue-400">
          {c.label}
        </p>
        <h2 className="mt-3 text-3xl font-bold dark:text-white md:text-4xl">
          {c.title}
        </h2>
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
          {c.subtitle}
        </p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 shadow-sm dark:border-slate-700">
          <iframe
            src="https://www.skillsheet.me/jobs/samiteon?embed=1"
            title="Samiteon Job Openings"
            width="100%"
            height="700"
            className="block w-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
