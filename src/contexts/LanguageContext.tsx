"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { translations, type Lang } from "@/lib/translations";

type LanguageContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof translations.en;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

const LANGS: Lang[] = ["en", "es", "ar", "de"];

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Load saved language on mount
  useEffect(() => {
    const saved = localStorage.getItem("samiteon-lang") as Lang | null;
    const initial: Lang = saved && LANGS.includes(saved) ? saved : "en";
    setLangState(initial);
    document.documentElement.lang = initial;
    document.documentElement.dir = translations[initial].dir;
  }, []);

  function setLang(l: Lang) {
    setLangState(l);
    localStorage.setItem("samiteon-lang", l);
    document.documentElement.lang = l;
    document.documentElement.dir = translations[l].dir;
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
