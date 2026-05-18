"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const stats = [
  { value: "< 24h",  label: "Response Time" },
  { value: "4",      label: "Global Offices" },
  { value: "50+",    label: "Enterprise Clients" },
  { value: "20+",    label: "Years Experience" },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", mobile: "", message: "" });
  const { t } = useLanguage();
  const c = t.contact;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch {/* ignore */} finally {
      setLoading(false);
      setSubmitted(true);
    }
  }

  return (
    <section id="contact" className="overflow-hidden">

      {/* ── Hero banner ── */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 px-6 py-24 text-center">
        {/* decorative blobs */}
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />

        <span className="relative inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-400">
          Get In Touch
        </span>
        <h1 className="relative mt-4 text-4xl font-extrabold text-white md:text-5xl">
          {c.hero}
        </h1>
        <p className="relative mx-auto mt-4 max-w-2xl text-lg text-slate-400">
          {c.heroSub}
        </p>

        {/* Stats row */}
        <div className="relative mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 backdrop-blur-sm">
              <p className="text-2xl font-extrabold text-white">{value}</p>
              <p className="mt-1 text-xs text-slate-400">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="bg-white/60 px-6 pb-24 pt-16 backdrop-blur-sm dark:bg-slate-900/60">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">

          {/* LEFT — Form */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900">
            {/* top accent bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600" />
            <div className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400">
                  <MessageSquare size={18} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{c.formTitle}</h2>
              </div>

              {submitted ? (
                <div className="rounded-2xl border border-green-200 bg-green-50 px-6 py-10 text-center dark:border-green-800 dark:bg-green-900/20">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/40">
                    <svg className="h-7 w-7 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold text-green-700 dark:text-green-400">{c.successTitle}</p>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">{c.successSub}</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", mobile: "", message: "" }); }}
                    className="mt-5 rounded-xl bg-green-600 px-6 py-2 text-sm font-semibold text-white hover:bg-green-700"
                  >
                    {c.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      placeholder={c.name}
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
                      suppressHydrationWarning
                    />
                    <input
                      type="email"
                      placeholder={c.email}
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
                      suppressHydrationWarning
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder={c.mobile}
                    value={form.mobile}
                    onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
                    suppressHydrationWarning
                  />
                  <textarea
                    placeholder={c.message}
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3.5 font-semibold text-white shadow-lg transition hover:from-blue-700 hover:to-indigo-700 disabled:opacity-60"
                    suppressHydrationWarning
                  >
                    {loading ? "Sending..." : c.submit}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* RIGHT — Contact info */}
          <div className="flex flex-col gap-5">

            {/* quick info cards */}
            {[
              {
                icon: <Phone size={20} />,
                label: c.phone,
                value: "502-368-0000",
                href: "tel:5023680000",
                color: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400",
              },
              {
                icon: <Mail size={20} />,
                label: c.emailLabel,
                value: "sales@samiteon.com",
                href: "mailto:sales@samiteon.com",
                color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-400",
              },
              {
                icon: <Clock size={20} />,
                label: "Business Hours",
                value: "Mon – Fri, 9 AM – 6 PM EST",
                href: null,
                color: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-400",
              },
            ].map(({ icon, label, value, href, color }) => (
              <div key={label} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${color}`}>
                  {icon}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</p>
                  {href ? (
                    <a href={href} className="mt-0.5 text-base font-semibold text-slate-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-400">
                      {value}
                    </a>
                  ) : (
                    <p className="mt-0.5 text-base font-semibold text-slate-900 dark:text-white">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Office cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  flag: "🇺🇸",
                  label: c.usa,
                  address: "5700 Poplar Level Road,\nLouisville, KY 40228",
                  maps: "https://maps.google.com/?q=5700+Poplar+Level+Road,Louisville,KY,40228",
                },
                {
                  flag: "🇮🇳",
                  label: c.india,
                  address: "SLN Plaza, #953, 2nd Floor,\nBanashankari Stage II,\nBengaluru, Karnataka 560070",
                  maps: "https://maps.google.com/?q=SLN+Plaza+953+Banashankari+Stage+II+Bengaluru+Karnataka+560070",
                },
              ].map(({ flag, label, address, maps }) => (
                <div key={label} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{flag}</span>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</p>
                  </div>
                  <div className="mt-2 flex items-start gap-2">
                    <MapPin size={15} className="mt-0.5 shrink-0 text-blue-600 dark:text-blue-400" />
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200 whitespace-pre-line">{address}</p>
                  </div>
                  <a
                    href={maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:underline dark:text-blue-400"
                  >
                    {c.mapsLink}
                  </a>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
