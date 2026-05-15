import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Activity, ClipboardList, MessageCircle, Users, Monitor, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Mommy Care — Samiteon Solutions",
  description: "Enhance your prenatal care services with Mommy Care's comprehensive platform for healthcare providers.",
};

const patientFeatures = [
  { icon: Activity, label: "Track Vital Signs" },
  { icon: ClipboardList, label: "Access Care Plans" },
  { icon: MessageCircle, label: "Communicate with Healthcare Teams" },
];

const nurseFeatures = [
  { icon: Users, label: "Real-time support from dedicated nurses" },
  { icon: Monitor, label: "Secure and intuitive clinical web app" },
  { icon: Heart, label: "Comprehensive vital sign monitoring for patients" },
];

export default function MommyCarePage() {
  return (
    <main className="min-h-screen text-slate-900 dark:text-slate-100">

      {/* ── Hero ── */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "500px" }}>
        <div className="absolute inset-0">
          <Image src="/mommy-care.webp" alt="Mommy Care" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>
        <div className="relative z-10 flex min-h-[500px] max-w-2xl flex-col justify-center px-10 py-24 md:px-16 lg:px-24">
          <span className="mb-4 inline-block w-fit rounded-full bg-pink-500/20 px-4 py-1 text-sm font-semibold text-pink-300">
            Samiteon Solutions
          </span>
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Revolutionary<br />Prenatal Care
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-200">
            Enhance your prenatal care services with Mommy Care&apos;s comprehensive
            platform for healthcare providers.
          </p>
        </div>
      </section>

      {/* ── Section 1: phone image left + nurse text right ── */}
      <section className="bg-white px-6 py-16 dark:bg-slate-900">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image src="/mommy-care-3.webp" alt="Prenatal care with phone" width={800} height={600} className="w-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold leading-snug text-slate-900 dark:text-white md:text-4xl">
              Empower Your Prenatal Care Services with Nurse Monitoring and a Secure Clinical Web App
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              Mommy Care&apos;s comprehensive platform revolutionizes prenatal care by
              seamlessly integrating a user-friendly mobile app and vital monitoring
              hardware. Healthcare providers can now offer their patients the ability to
              track vital signs, access care plans, and communicate with their team.
            </p>
            <ul className="mt-8 space-y-4">
              {nurseFeatures.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400">
                    <Icon size={20} />
                  </div>
                  <span className="text-base font-medium text-slate-800 dark:text-slate-200">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="mx-auto max-w-7xl px-6">
        <hr className="border-slate-200 dark:border-slate-700" />
      </div>

      {/* ── Section 2: NEW image #16 right + hardware text left ── */}
      <section className="bg-white px-6 py-16 dark:bg-slate-900">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold leading-snug text-slate-900 dark:text-white md:text-4xl">
              Seamless Integration of Vital Monitoring Hardware
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              Enhance your prenatal care services with Mommy Care&apos;s comprehensive
              platform. Designed for healthcare providers, it seamlessly integrates a
              user-friendly mobile app and vital monitoring hardware, allowing patients
              to track vital signs, access care plans, and communicate with your team.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image src="/mommy-care-4.webp" alt="Vital monitoring hardware" width={800} height={600} className="w-full object-cover" />
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="mx-auto max-w-7xl px-6">
        <hr className="border-slate-200 dark:border-slate-700" />
      </div>

      {/* ── Section 3: laptop image left + patient features right ── */}
      <section className="bg-white px-6 py-16 dark:bg-slate-900">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image src="/mommy-care-2.webp" alt="Prenatal care at home" width={800} height={600} className="w-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold leading-snug text-slate-900 dark:text-white md:text-4xl">
              Empower Patients with Real-Time Vital Sign Tracking and Seamless Communication
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              Mommy Care&apos;s user-friendly mobile app enables patients to effortlessly
              monitor vital signs, access care plans, and stay connected with their
              healthcare team. With real-time support from nurses, a secure clinical web
              app, and the Mommy Care Box, which includes essential monitoring hardware,
              patients can receive comprehensive prenatal care from the comfort of their
              homes.
            </p>
            <ul className="mt-8 space-y-4">
              {patientFeatures.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400">
                    <Icon size={20} />
                  </div>
                  <span className="text-base font-semibold text-slate-800 dark:text-slate-200">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Transform Prenatal Care CTA — bottom ── */}
      <section className="bg-pink-50 px-6 py-16 dark:bg-pink-900/20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            Transform Prenatal Care Today
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Elevate your practice with Mommy Care&apos;s integrated platform for
            comprehensive prenatal support and monitoring.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-pink-600 px-8 py-3 text-base font-semibold text-white hover:bg-pink-700"
          >
            Visit Mommy Care
          </Link>
        </div>
      </section>

    </main>
  );
}
