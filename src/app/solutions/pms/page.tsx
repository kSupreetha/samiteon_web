import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BarChart2, Link2, Wifi, TrendingUp, Star, Settings, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Samiteon PMS — Hotel Management Solution",
  description: "Transform your hotel operations with the innovative Samiteon PMS platform.",
};

const features3 = [
  {
    icon: Star,
    title: "Elevate Guest Satisfaction with Seamless Management and Personalized Services",
    desc: "Create memorable stays that keep guests coming back for more.",
  },
  {
    icon: BarChart2,
    title: "Gain Comprehensive Analytics for Data-Driven Decision Making and Strategy",
    desc: "Leverage in-depth analytics to refine your operations and maximize profitability.",
  },
  {
    icon: Settings,
    title: "Streamline Operations with Integrated Features for Enhanced Workflow Management",
    desc: "Simplify your daily tasks and improve team collaboration with our intuitive tools.",
  },
];

export default function PMSPage() {
  return (
    <main className="min-h-screen text-slate-900 dark:text-slate-100">

      {/* ── Hero ── */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "520px" }}>
        <div className="absolute inset-0">
          <Image src="/pms-hero.jpg" alt="Samiteon PMS" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 flex min-h-[520px] max-w-2xl flex-col justify-center px-10 py-24 md:px-16 lg:px-24">
          <span className="mb-4 inline-block w-fit rounded-full bg-amber-500/20 px-4 py-1 text-sm font-semibold text-amber-300">
            Samiteon Solutions
          </span>
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-[3.25rem]">
            Transform your hotel operations<br />
            with the innovative<br />
            Samiteon PMS platform.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-200">
            Experience seamless management and enhanced guest satisfaction with our
            intuitive hotel management system.
          </p>
          <Link
            href="https://pms.samiteon.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block w-fit rounded-full bg-amber-500 px-8 py-3 text-base font-semibold text-white hover:bg-amber-600"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* ── Section 1: hotel staff image left + text right ── */}
      <section className="bg-white px-6 py-16 dark:bg-slate-900">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image src="/pms-1.webp" alt="Hotel team" width={800} height={600} className="w-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold leading-snug text-slate-900 dark:text-white md:text-4xl">
              Transform Your Hotel Management Experience Today
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              Samiteon PMS streamlines hotel operations to significantly enhance productivity
              and guest satisfaction. Our comprehensive platform empowers hotel managers with
              valuable real-time data and insights, allowing them to make informed decisions
              and improve service quality. By leveraging advanced technology, hotel staff can
              manage reservations, monitor guest preferences, and optimize resources, ensuring
              that every guest enjoys a seamless and memorable experience during their stay.
            </p>
            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Real-Time Insights</h4>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Access critical data instantly to make informed decisions and improve operational efficiency.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
                  <Link2 size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Seamless Integration</h4>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Easily connect with existing systems and tools for a unified management experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="mx-auto max-w-7xl px-6"><hr className="border-slate-200 dark:border-slate-700" /></div>

      {/* ── Section 2: text left + PMS screen image right ── */}
      <section className="bg-white px-6 py-16 dark:bg-slate-900">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold leading-snug text-slate-900 dark:text-white md:text-4xl">
              Seamless Connectivity with Real-Time Data Integration
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              Samiteon PMS empowers your hotel with seamless connectivity and real-time data
              integration. Make informed decisions and enhance operational efficiency like
              never before.
            </p>
            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
                  <Wifi size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Instant Access</h4>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Access vital information anytime, anywhere for smarter management.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
                  <BarChart2 size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Data-Driven</h4>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Utilize real-time analytics to optimize your hotel&apos;s performance and guest experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image src="/pms-2.webp" alt="Real-time data integration" width={800} height={600} className="w-full object-cover" />
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="mx-auto max-w-7xl px-6"><hr className="border-slate-200 dark:border-slate-700" /></div>

      {/* ── 3-feature block ── */}
      <section className="bg-white px-6 py-16 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            Transform Your Hotel Operations with Samiteon PMS for Unmatched Efficiency
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Experience a significant boost in operational efficiency with Samiteon PMS. Our
            platform streamlines processes, allowing your staff to focus on delivering
            exceptional guest experiences. Unlock powerful insights and analytics to drive
            informed decision-making and enhance overall satisfaction.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {features3.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
                  <Icon size={22} />
                </div>
                <h4 className="mt-4 font-bold leading-snug text-slate-900 dark:text-white">{title}</h4>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-amber-50 px-6 py-16 dark:bg-amber-900/20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            Elevate Your Hotel Management
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Transform your operations with Samiteon PMS for seamless hotel management and
            enhanced guest experiences.
          </p>
          <Link
            href="https://pms.samiteon.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-amber-500 px-8 py-3 text-base font-semibold text-white hover:bg-amber-600"
          >
            Learn More
          </Link>
        </div>
      </section>

    </main>
  );
}
