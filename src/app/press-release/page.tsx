import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Press Release — Samiteon & FlintLab Strategic Partnership",
  description:
    "Samiteon and FlintLab announce a strategic partnership to elevate enterprise testing and AI solutions.",
};

export default function PressReleasePage() {
  return (
    <main className="min-h-screen pt-24 text-slate-900 dark:text-slate-100">

      {/* ── Full-width hero ── */}
      <div className="relative h-72 w-full sm:h-96 lg:h-[32rem]">
        <Image
          src="/press-release-hero.jpg"
          alt="Samiteon and FlintLab Strategic Partnership"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-300">
            Press Release · July 18, 2025
          </p>
          <h1 className="max-w-5xl text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-5xl">
            Samiteon and FlintLab Forge Strategic Partnership To Elevate Enterprise Testing and AI Solutions
          </h1>
          <p className="mt-4 text-sm text-slate-300">
            Seattle, WA &nbsp;·&nbsp; Louisville, KY &nbsp;·&nbsp; Bangalore &amp; Visakhapatnam, India
          </p>
        </div>
      </div>

      {/* ── Intro ── */}
      <section className="w-full bg-white px-6 py-14 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl">
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 lg:text-xl">
            Samiteon, a leader in digital transformation, and FlintLab, a pioneer in AI-powered testing infrastructure,
            have announced a strategic partnership to drive innovation in mobile test automation, real-device validation,
            and AI-driven enterprise software testing.
          </p>
        </div>
      </section>

      {/* ── Partnership Highlights ── */}
      <section className="w-full border-t border-slate-200 bg-slate-50 px-6 py-14 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-8 w-1.5 rounded-full bg-blue-500" />
            <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">Partnership Highlights</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Mobile Testing & Automation",
                body: "FlintLab will lead mobile test validation across Samiteon's platforms, improving release speed and quality.",
              },
              {
                title: "Workflow Optimization",
                body: "Joint redesign of test execution flows for enhanced automation coverage and operational efficiency for all Samiteon clients.",
              },
              {
                title: "Integrated Client Solutions",
                body: "FlintLab's capabilities will be seamlessly embedded within Samiteon's client proposals, ensuring transparent pricing and joint technical value.",
              },
              {
                title: "Unified Branding Strategy",
                body: "Joint blogs, newsletters, and campaigns to amplify industry presence.",
              },
              {
                title: "Client Engagement",
                body: "Both teams will jointly engage with key clients for solution demonstrations, strengthening relationships and uncovering new business opportunities.",
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"
              >
                <p className="mb-2 font-semibold text-blue-600 dark:text-blue-400">{title}</p>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Strategic Impact ── */}
      <section className="w-full border-t border-slate-200 bg-white px-6 py-14 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-8 w-1.5 rounded-full bg-blue-500" />
            <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">Strategic Impact</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["30%", "Reduction in release cycles"],
              ["20–25%", "Decrease in testing expenditure"],
              ["50%", "More device/OS coverage"],
              ["15–20%", "Projected market expansion over two years"],
            ].map(([stat, label]) => (
              <div
                key={label}
                className="rounded-xl border border-blue-100 bg-blue-50 p-6 text-center dark:border-blue-900 dark:bg-blue-950/40"
              >
                <p className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">{stat}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{label}</p>
              </div>
            ))}
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Reliability & UX", "Real-device AI testing enhances performance and satisfaction."],
              ["Innovation & Leadership", "Joint thought leadership strengthens industry positioning."],
              ["Sustainability", "Efficient testing workflows reduce energy usage."],
            ].map(([title, body]) => (
              <li key={title as string} className="flex gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                <span className="text-sm text-slate-600 dark:text-slate-300">
                  <strong className="text-slate-900 dark:text-slate-100">{title}:</strong> {body}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── About the Companies ── */}
      <section className="w-full border-t border-slate-200 bg-slate-50 px-6 py-14 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-8 w-1.5 rounded-full bg-blue-500" />
            <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">About the Companies</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
              <p className="mb-2 text-lg font-bold text-slate-900 dark:text-slate-100">Samiteon</p>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Specializes in AI, Audit Management Systems, ERP, cloud, RFID, and compliance across sectors
                like healthcare, logistics, and public systems.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
              <p className="mb-2 text-lg font-bold text-slate-900 dark:text-slate-100">FlintLab</p>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Delivers a next-gen Infrastructure Platform as a Service (IPaaS), enabling secure, scalable,
                AI-powered enterprise test environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Leadership Insights ── */}
      <section className="w-full border-t border-slate-200 bg-white px-6 py-14 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-8 w-1.5 rounded-full bg-blue-500" />
            <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">Leadership Insights</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <blockquote className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
              <p className="text-base italic leading-relaxed text-slate-600 dark:text-slate-300">
                &ldquo;This partnership enables faster, smarter, and high-quality mobile experiences for our clients.&rdquo;
              </p>
              <footer className="mt-4 font-semibold text-slate-900 dark:text-slate-100">
                — Sunny Dronawat, CEO, Samiteon
              </footer>
            </blockquote>
            <blockquote className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
              <p className="text-base italic leading-relaxed text-slate-600 dark:text-slate-300">
                &ldquo;Together, we&rsquo;re removing testing inefficiencies and driving enterprise innovation.&rdquo;
              </p>
              <footer className="mt-4 font-semibold text-slate-900 dark:text-slate-100">
                — Krishna Seerapu, Founder &amp; CEO, FlintLab
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="w-full border-t border-slate-200 bg-slate-50 px-6 py-14 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-8 w-1.5 rounded-full bg-blue-500" />
            <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">Contact for Media &amp; Partnerships</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:swathi@samiteon.com"
              className="rounded-lg border border-blue-200 bg-white px-6 py-4 shadow-sm transition hover:border-blue-400 dark:border-blue-800 dark:bg-slate-800 dark:hover:border-blue-500"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">Samiteon</p>
              <p className="mt-1 font-semibold text-slate-900 dark:text-slate-100">Swathi</p>
              <p className="text-sm text-blue-600 dark:text-blue-400">swathi@samiteon.com</p>
            </a>
            <a
              href="mailto:prasad@flintlab.io"
              className="rounded-lg border border-blue-200 bg-white px-6 py-4 shadow-sm transition hover:border-blue-400 dark:border-blue-800 dark:bg-slate-800 dark:hover:border-blue-500"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">FlintLab</p>
              <p className="mt-1 font-semibold text-slate-900 dark:text-slate-100">Prasad</p>
              <p className="text-sm text-blue-600 dark:text-blue-400">prasad@flintlab.io</p>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
