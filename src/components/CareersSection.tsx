"use client";
import { useState } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const jobs = [
  { title: "Frontend Developer",          location: "Remote",   type: "Full-time", dept: "Engineering"    },
  { title: "UI/UX Designer",              location: "Hybrid",   type: "Full-time", dept: "Design"         },
  { title: "Cloud Engineer",              location: "Remote",   type: "Full-time", dept: "Infrastructure" },
  { title: "Digital Marketing Specialist",location: "On-site",  type: "Full-time", dept: "Marketing"      },
];

const emptyForm = { name: "", email: "", phone: "", portfolio: "", cover_letter: "" };

export default function CareersSection() {
  const { t } = useLanguage();
  const c = t.careers;

  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function openModal(title: string) {
    setSelectedJob(title);
    setForm(emptyForm);
    setSubmitted(false);
    setError("");
  }

  function closeModal() {
    setSelectedJob(null);
  }

  async function handleApply(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ job_title: selectedJob, ...form }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
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

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {jobs.map(({ title, location, type, dept }) => (
              <div
                key={title}
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-[#f8fbff] p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-blue-700"
              >
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-400">
                      {dept}
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                      {location}
                    </span>
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-900/40 dark:text-green-400">
                      {type}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => openModal(title)}
                  className="ml-4 whitespace-nowrap rounded-full bg-blue-700 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-800"
                >
                  {c.applyNow}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900">
            {/* Modal header */}
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 dark:border-slate-700">
              <div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Apply Now</h2>
                <p className="text-sm text-blue-700 dark:text-blue-400">{selectedJob}</p>
              </div>
              <button onClick={closeModal} className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800">
                <X size={20} />
              </button>
            </div>

            {/* Modal body */}
            <div className="max-h-[75vh] overflow-y-auto px-6 py-5">
              {submitted ? (
                <div className="py-8 text-center">
                  <p className="text-lg font-semibold text-green-600 dark:text-green-400">Application Submitted!</p>
                  <p className="mt-2 text-sm text-slate-500">We&apos;ll review your application and get back to you soon.</p>
                  <button
                    onClick={closeModal}
                    className="mt-6 rounded-xl bg-blue-700 px-6 py-2 text-sm font-semibold text-white hover:bg-blue-800"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApply} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-700 focus:ring-2 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-700 focus:ring-2 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-700 focus:ring-2 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
                  />
                  <input
                    type="url"
                    placeholder="LinkedIn / Portfolio URL"
                    value={form.portfolio}
                    onChange={(e) => setForm({ ...form, portfolio: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-700 focus:ring-2 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
                  />
                  <textarea
                    placeholder="Cover Letter — tell us why you're a great fit *"
                    rows={5}
                    required
                    value={form.cover_letter}
                    onChange={(e) => setForm({ ...form, cover_letter: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-700 focus:ring-2 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
                  />
                  {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-blue-700 py-3 font-semibold text-white hover:bg-blue-800 disabled:opacity-60"
                  >
                    {loading ? "Submitting..." : "Submit Application"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
