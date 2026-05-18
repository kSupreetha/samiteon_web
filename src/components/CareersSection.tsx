"use client";
import { useLanguage } from "@/contexts/LanguageContext";

const perks = [
  { emoji: "🌍", title: "Global Exposure", desc: "Work on projects across the US, India, Switzerland, and the UK with world-class clients." },
  { emoji: "🚀", title: "Grow Fast", desc: "Accelerate your career with mentorship, certifications, and real ownership from day one." },
  { emoji: "🤝", title: "Collaborative Culture", desc: "A team that celebrates wins together, solves problems together, and grows together." },
  { emoji: "💡", title: "Cutting-Edge Tech", desc: "Salesforce, AI/ML, cloud, data engineering — work on technologies that matter." },
];

export default function CareersSection() {
  const { t } = useLanguage();
  const c = t.careers;

  return (
    <section id="careers" className="bg-white/60 px-6 py-24 backdrop-blur-sm dark:bg-slate-900/60">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 dark:text-blue-400">
          {c.label}
        </p>
        <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
          {c.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
          We&apos;re building something great — and we need great people to build it with us.
          If you love solving hard problems, shipping quality work, and being part of a team
          that genuinely cares, you&apos;ll fit right in.
        </p>

        {/* Perks grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map(({ emoji, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900"
            >
              <span className="text-3xl">{emoji}</span>
              <h3 className="mt-3 font-bold text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 px-8 py-12 text-center">
          <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white">
            We&apos;re Hiring
          </span>
          <h3 className="mt-4 text-2xl font-bold text-white md:text-3xl">Ready to make an impact?</h3>
          <p className="mx-auto mt-3 max-w-lg text-blue-100">
            Browse open roles and apply directly through our jobs portal.
          </p>
          <div className="mx-auto mt-6 flex max-w-sm flex-col gap-2 text-left">
            {["Competitive pay & flexible work", "Global team across 4 countries", "Fast growth & real ownership"].map(item => (
              <div key={item} className="flex items-center gap-2 text-sm text-blue-100">
                <svg className="h-4 w-4 shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>
          <a
            href="https://www.skillsheet.me/jobs/samiteon"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-blue-700 shadow-lg transition hover:bg-blue-50"
          >
            View All Jobs
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
