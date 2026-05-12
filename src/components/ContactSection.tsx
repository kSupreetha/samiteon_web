"use client";
import { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-white/60 px-6 py-24 backdrop-blur-sm dark:bg-slate-900/60">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase text-blue-700 dark:text-blue-400">
          Contact
        </p>
        <h2 className="mt-3 text-3xl font-bold dark:text-white md:text-4xl">
          Let&apos;s build something together
        </h2>

        {submitted ? (
          <div className="mt-10 max-w-2xl rounded-2xl border border-green-200 bg-green-50 px-6 py-8 text-center dark:border-green-800 dark:bg-green-900/20">
            <p className="text-lg font-semibold text-green-700 dark:text-green-400">
              Message sent!
            </p>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Thanks for reaching out. We&apos;ll get back to you shortly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setForm({ name: "", email: "", message: "" });
              }}
              className="mt-4 text-sm text-blue-700 hover:underline dark:text-blue-400"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 max-w-2xl space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-700 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-700 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-700 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
            />
            <button
              type="submit"
              className="rounded-full bg-blue-700 px-7 py-3 font-semibold text-white hover:bg-blue-800"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
