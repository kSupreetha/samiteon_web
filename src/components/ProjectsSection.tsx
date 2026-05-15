"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const hrefs = [
  "/solutions/mommy-care",
  "/solutions/lynx",
  "/solutions/pms",
  "/solutions/senior-care",
  "/services/data-engineering",
];

const images = [
  "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=600&q=80",
];

export default function ProjectsSection() {
  const { t } = useLanguage();
  const p = t.projects;

  return (
    <section id="products" className="bg-slate-50 px-6 py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">{p.label}</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
          {p.title}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
          {p.subtitle}
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {p.items.map(({ name, desc }, i) => (
            <div
              key={name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={images[i]}
                  alt={name}
                  fill
                  sizes="(max-width:640px) 100vw,(max-width:1280px) 50vw,20vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{desc}</p>
                <Link
                  href={hrefs[i]}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  {p.readMore}
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
