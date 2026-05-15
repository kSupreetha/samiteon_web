"use client";
import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  
  const [form, setForm] = useState({ name: "", email: "", mobile: "", message: "" });
  const { t } = useLanguage();
  const c = t.contact;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-white/60 px-6 pb-24 backdrop-blur-sm dark:bg-slate-900/60">

      {/* Hero text + image */}
      <div className="mx-auto max-w-7xl pt-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
          {c.hero}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500 dark:text-slate-400">
          {c.heroSub}
        </p>

        {/* Hands image banner */}
        <div className="relative mt-8 h-64 w-full overflow-hidden rounded-2xl md:h-80 lg:h-96">
          <Image
            src="/hands.png"
            alt="Team hands together"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </div>

      {/* Two-column layout */}
      <div className="mx-auto mt-14 grid max-w-7xl gap-10 lg:grid-cols-2">

        {/* LEFT — Form */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">{c.formTitle}</h2>

          {submitted ? (
            <div className="rounded-2xl border border-green-200 bg-green-50 px-6 py-8 text-center dark:border-green-800 dark:bg-green-900/20">
              <p className="text-lg font-semibold text-green-700 dark:text-green-400">{c.successTitle}</p>
              <p className="mt-2 text-slate-600 dark:text-slate-400">{c.successSub}</p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", mobile: "", message: "" }); }}
                className="mt-4 text-sm text-blue-700 hover:underline dark:text-blue-400"
              >
                {c.sendAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder={c.name}
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-700 focus:ring-2 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
              />
              <input
                type="email"
                placeholder={c.email}
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-700 focus:ring-2 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
              />
              <input
                type="tel"
                placeholder={c.mobile}
                value={form.mobile}
                onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-700 focus:ring-2 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
              />
              <textarea
                placeholder={c.message}
                rows={5}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-700 focus:ring-2 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-blue-700 py-3 font-semibold text-white hover:bg-blue-800"
              >
                {c.submit}
              </button>
            </form>
          )}
        </div>

        {/* RIGHT — Contact cards */}
        <div className="flex flex-col gap-5">
          <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{c.phone}</p>
              <a href="tel:5023680000" className="mt-1 text-base font-semibold text-slate-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-400">
                502-368-0000
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{c.emailLabel}</p>
              <a href="mailto:sales@samiteon.com" className="mt-1 text-base font-semibold text-slate-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-400">
                sales@samiteon.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{c.usa}</p>
              <p className="mt-1 text-base font-semibold text-slate-900 dark:text-white">
                5700 Poplar Level Road,<br />Louisville, KY, 40228
              </p>
              <a
                href="https://maps.google.com/?q=5700+Poplar+Level+Road,Louisville,KY,40228"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-medium text-blue-700 hover:underline dark:text-blue-400"
              >
                {c.mapsLink}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{c.india}</p>
              <p className="mt-1 text-base font-semibold text-slate-900 dark:text-white">
                SLN Plaza, #953, 2nd Floor<br />
                opposite BSNL Building,<br />
                Banashankari Stage II,<br />
                Bengaluru, Karnataka 560070
              </p>
              <a
                href="https://maps.google.com/?q=SLN+Plaza+953+Banashankari+Stage+II+Bengaluru+Karnataka+560070"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-medium text-blue-700 hover:underline dark:text-blue-400"
              >
                {c.mapsLink}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
