"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const stats = [
  { value: "< 24h", label: "Response Time" },
  { value: "4",     label: "Global Offices" },
  { value: "50+",   label: "Enterprise Clients" },
  { value: "20+",   label: "Years Experience" },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", mobile: "", message: "" });
  const { t } = useLanguage();
  const c = t.contact;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setFormError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setFormError(data.error || "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
    } catch {
      setFormError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="overflow-hidden">

      {/* ── Hero Banner ── */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 px-6 py-24 text-center">
        <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-blue-500/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-violet-500/25 blur-3xl" />
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-2xl" />

        <span className="relative inline-block rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-400">
          Get In Touch
        </span>
        <h1 className="relative mt-4 text-4xl font-extrabold text-white md:text-5xl">
          {c.hero}
        </h1>
        <p className="relative mx-auto mt-4 max-w-2xl text-lg text-slate-300">
          {c.heroSub}
        </p>

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
      <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 px-6 pb-24 pt-16 dark:from-slate-900 dark:via-blue-950/40 dark:to-indigo-950/40">
        {/* decorative blobs */}
        <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl dark:bg-blue-700/10" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl dark:bg-violet-700/10" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">

          {/* LEFT — Form */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            {/* gradient border effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500 p-[2px]">
              <div className="h-full w-full rounded-3xl bg-white dark:bg-slate-900" />
            </div>

            <div className="relative p-8">
              {/* header with gradient icon */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-200 dark:shadow-blue-900/40">
                  <Send size={18} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{c.formTitle}</h2>
              </div>

              {submitted ? (
                <div className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 px-6 py-10 text-center dark:from-green-900/20 dark:to-emerald-900/20 dark:border-green-800">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg">
                    <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold text-green-700 dark:text-green-400">{c.successTitle}</p>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">{c.successSub}</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", mobile: "", message: "" }); }}
                    className="mt-5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-2 text-sm font-semibold text-white shadow hover:from-green-600 hover:to-emerald-700"
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
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:ring-blue-900"
                      suppressHydrationWarning
                    />
                    <input
                      type="email"
                      placeholder={c.email}
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:ring-indigo-900"
                      suppressHydrationWarning
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder={c.mobile}
                    value={form.mobile}
                    onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:ring-violet-900"
                    suppressHydrationWarning
                  />
                  <textarea
                    placeholder={c.message}
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:ring-blue-900"
                  />
                  {formError && (
                    <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400">
                      {formError}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 py-3.5 font-semibold text-white shadow-lg shadow-blue-200 transition hover:from-blue-700 hover:via-indigo-700 hover:to-violet-700 disabled:opacity-60 dark:shadow-blue-900/30"
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

            {/* Info cards */}
            {[
              {
                icon: <Phone size={20} />,
                label: "USA",
                value: "+1 502-644-9399",
                href: "tel:+15026449399",
                gradient: "from-blue-500 to-cyan-500",
                bg: "from-blue-50 to-cyan-50 dark:from-blue-950/40 dark:to-cyan-950/40",
                border: "border-blue-100 dark:border-blue-900/50",
              },
              {
                icon: <Phone size={20} />,
                label: "India",
                value: "+91 99167 14441",
                href: "tel:+919916714441",
                gradient: "from-orange-500 to-rose-500",
                bg: "from-orange-50 to-rose-50 dark:from-orange-950/40 dark:to-rose-950/40",
                border: "border-orange-100 dark:border-orange-900/50",
              },
              {
                icon: <Mail size={20} />,
                label: c.emailLabel,
                value: "sales@samiteon.com",
                href: "mailto:sales@samiteon.com",
                gradient: "from-violet-500 to-indigo-500",
                bg: "from-violet-50 to-indigo-50 dark:from-violet-950/40 dark:to-indigo-950/40",
                border: "border-violet-100 dark:border-violet-900/50",
              },
            ].map(({ icon, label, value, href, gradient, bg, border }) => (
              <div key={label} className={`flex items-center gap-4 rounded-2xl border bg-gradient-to-r p-5 shadow-sm ${bg} ${border}`}>
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} shadow-md text-white`}>
                  {icon}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</p>
                  {href ? (
                    <a href={href} className="mt-0.5 text-base font-bold text-slate-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-400">
                      {value}
                    </a>
                  ) : (
                    <p className="mt-0.5 text-base font-bold text-slate-900 dark:text-white">{value}</p>
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
                  gradient: "from-blue-500 to-indigo-600",
                  bg: "from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40",
                  border: "border-blue-100 dark:border-blue-900/50",
                  pin: "text-blue-600 dark:text-blue-400",
                  link: "text-blue-700 dark:text-blue-400",
                },
                {
                  flag: "🇮🇳",
                  label: c.india,
                  address: "SLN Plaza, #953, 2nd Floor,\nBanashankari Stage II,\nBengaluru, Karnataka 560070",
                  maps: "https://maps.google.com/?q=SLN+Plaza+953+Banashankari+Stage+II+Bengaluru+Karnataka+560070",
                  gradient: "from-orange-500 to-rose-500",
                  bg: "from-orange-50 to-rose-50 dark:from-orange-950/30 dark:to-rose-950/30",
                  border: "border-orange-100 dark:border-orange-900/50",
                  pin: "text-orange-600 dark:text-orange-400",
                  link: "text-orange-600 dark:text-orange-400",
                },
              ].map(({ flag, label, address, maps, gradient, bg, border, pin, link }) => (
                <div key={label} className={`flex flex-col rounded-2xl border bg-gradient-to-br p-5 shadow-sm ${bg} ${border}`}>
                  <div className="flex items-center gap-2">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-base shadow`}>
                      {flag}
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</p>
                  </div>
                  <div className="mt-3 flex items-start gap-2">
                    <MapPin size={15} className={`mt-0.5 shrink-0 ${pin}`} />
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200 whitespace-pre-line">{address}</p>
                  </div>
                  <a
                    href={maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-3 inline-flex items-center gap-1 text-sm font-semibold hover:underline ${link}`}
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
