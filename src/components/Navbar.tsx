"use client";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Sun, Moon, ChevronDown, Globe } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Lang } from "@/lib/translations";

const itServiceHrefs = [
  "/services/staff-augmentation",
  "/services/accounting",
  "/services/salesforce",
  "/services/erp",
  "/services/website-development",
  "/services/data-science",
  "/services/data-engineering",
];

const solutionHrefs = [
  "/solutions/mommy-care",
  "/solutions/lynx",
  "/solutions/pms",
  "/solutions/senior-care",
  "/services/data-engineering",
];

const languages: { lang: Lang; label: string }[] = [
  { lang: "en", label: "English" },
  { lang: "es", label: "Español" },
  { lang: "ar", label: "العربية" },
  { lang: "de", label: "Deutsch" },
];

function LangDropdown({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-full p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
        aria-label="Select language"
        suppressHydrationWarning
      >
        <Globe size={20} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-40 overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900">
          {languages.map(({ lang: l, label }) => (
            <button
              key={l}
              onClick={() => { setLang(l); setOpen(false); }}
              className={`flex w-full items-center px-4 py-2.5 text-sm transition hover:bg-slate-50 dark:hover:bg-slate-800 ${
                lang === l
                  ? "bg-blue-50 font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                  : "text-slate-700 dark:text-slate-300"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function HoverDropdown({
  label, href, items, hrefs, isActive, cols = 1,
}: {
  label: string; href: string; items: string[]; hrefs: string[]; isActive: boolean; cols?: number;
}) {
  const [open, setOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleMouseEnter() {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpen(true);
  }
  function handleMouseLeave() {
    timerRef.current = setTimeout(() => setOpen(false), 100);
  }

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link
        href={href}
        className={`flex items-center gap-1 text-sm font-medium transition hover:text-blue-700 dark:hover:text-blue-400 ${
          isActive ? "text-blue-700 dark:text-blue-400" : "text-slate-700 dark:text-slate-300"
        }`}
      >
        {label}
        <ChevronDown size={15} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </Link>

      {open && (
        <div className={`absolute left-0 top-full mt-2 rounded-xl border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-700 dark:bg-slate-900 ${
          cols === 2 ? "grid grid-cols-2 gap-x-2 w-72" : "w-60"
        }`}>
          {items.map((name, i) => (
            <Link
              key={name}
              href={hrefs[i]}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();

  useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-700 dark:bg-slate-900/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/">
          <Image src="/logo.svg" alt="Samiteon" width={160} height={32} priority className="h-8 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <HoverDropdown
            label={t.nav.itServices}
            href="/services"
            items={t.nav.itServiceItems}
            hrefs={itServiceHrefs}
            isActive={pathname.startsWith("/services")}
            cols={2}
          />
          <HoverDropdown
            label={t.nav.solutions}
            href="/projects"
            items={t.nav.solutionItems}
            hrefs={solutionHrefs}
            isActive={pathname.startsWith("/solutions")}
            cols={2}
          />
          <Link
            href="/about"
            className={`text-sm font-medium transition hover:text-blue-700 dark:hover:text-blue-400 ${
              pathname === "/about" ? "text-blue-700 dark:text-blue-400" : "text-slate-700 dark:text-slate-300"
            }`}
          >
            {t.nav.aboutUs}
          </Link>
          <Link
            href="/careers"
            className={`text-sm font-medium transition hover:text-blue-700 dark:hover:text-blue-400 ${
              pathname === "/careers" ? "text-blue-700 dark:text-blue-400" : "text-slate-700 dark:text-slate-300"
            }`}
          >
            {t.nav.careers}
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <LangDropdown lang={lang} setLang={setLang} />
          </div>

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="rounded-full p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}

          <Link
            href="/contact"
            className="hidden rounded-full bg-blue-700 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-800 md:block"
          >
            {t.nav.contactUs}
          </Link>

          <button
            className="text-slate-700 dark:text-slate-300 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 dark:border-slate-700 dark:bg-slate-900 md:hidden">
          <div className="flex flex-col gap-4">
            <LangDropdown lang={lang} setLang={setLang} />

            <button
              onClick={() => setMobileServicesOpen((v) => !v)}
              className="flex items-center justify-between text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              {t.nav.itServices}
              <ChevronDown size={15} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileServicesOpen && (
              <div className="ml-3 flex flex-col gap-3 border-l border-slate-200 pl-3 dark:border-slate-700">
                {t.nav.itServiceItems.map((name, i) => (
                  <Link
                    key={name}
                    href={itServiceHrefs[i]}
                    onClick={() => { setIsOpen(false); setMobileServicesOpen(false); }}
                    className="text-sm text-slate-600 hover:text-blue-700 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            )}

            <button
              onClick={() => setMobileSolutionsOpen((v) => !v)}
              className="flex items-center justify-between text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              {t.nav.solutions}
              <ChevronDown size={15} className={`transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileSolutionsOpen && (
              <div className="ml-3 grid grid-cols-2 gap-3 border-l border-slate-200 pl-3 dark:border-slate-700">
                {t.nav.solutionItems.map((name, i) => (
                  <Link
                    key={name}
                    href={solutionHrefs[i]}
                    onClick={() => { setIsOpen(false); setMobileSolutionsOpen(false); }}
                    className="text-sm text-slate-600 hover:text-blue-700 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/about" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-700 hover:text-blue-700 dark:text-slate-300">
              {t.nav.aboutUs}
            </Link>
            <Link href="/careers" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-700 hover:text-blue-700 dark:text-slate-300">
              {t.nav.careers}
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="rounded-full bg-blue-700 px-5 py-2 text-center text-sm font-semibold text-white hover:bg-blue-800">
              {t.nav.contactUs}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
