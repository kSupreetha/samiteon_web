import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Activity, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Senior Care — Samiteon Solutions",
  description: "Enhancing health management for elderly individuals through remote patient monitoring.",
};

const outcomes = [
  { icon: ShieldCheck, label: "Early Detection of Health Issues" },
  { icon: Activity, label: "Improved Disease Management" },
  { icon: TrendingUp, label: "Enhanced Patient Outcomes" },
];

export default function SeniorCarePage() {
  return (
    <main className="min-h-screen text-slate-900 dark:text-slate-100">

      {/* ── Hero ── */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "520px" }}>
        <div className="absolute inset-0">
          <Image src="/senior-hero.webp" alt="Senior Care" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 flex min-h-[520px] max-w-2xl flex-col justify-center px-10 py-24 md:px-16 lg:px-24">
          <span className="mb-4 inline-block w-fit rounded-full bg-teal-500/20 px-4 py-1 text-sm font-semibold text-teal-300">
            Samiteon Solutions
          </span>
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-[3.25rem]">
            Elderly Care Solutions
          </h1>
          <p className="mt-4 max-w-lg text-xl font-medium text-slate-200">
            Enhancing Health Management for Elderly Individuals through Remote Patient Monitoring
          </p>
          <Link
            href="https://www.agingcareai.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block w-fit rounded-full bg-teal-500 px-8 py-3 text-base font-semibold text-white hover:bg-teal-600"
          >
            Visit Senior Care
          </Link>
        </div>
      </section>

      {/* ── Section 1: text left + image #26 right ── */}
      <section className="bg-white px-6 py-16 dark:bg-slate-900">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold leading-snug text-slate-900 dark:text-white md:text-4xl">
              Revolutionizing Senior Care Solutions
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              <p>
                Remote patient monitoring (RPM) technology is a cutting-edge approach that
                utilizes various devices and digital tools to track, record, and transmit
                health data from elderly individuals to healthcare providers. By continuously
                monitoring and analyzing this data in real-time, RPM enables early detection
                of potential health issues, improves chronic disease management, and enhances
                overall patient outcomes.
              </p>
              <p>
                Through RPM, healthcare providers can remotely monitor vital signs, medication
                adherence, and other health-related data, allowing for proactive interventions
                and personalized care plans. This technology-driven approach revolutionizes
                senior care by providing timely and efficient healthcare services to elderly
                individuals in the comfort of their own homes or assisted living facilities.
              </p>
              <p>
                At Samiteon, we specialize in developing RPM solutions that leverage advanced
                technologies such as IoT devices, wearables, and cloud-based platforms. Our
                expertise in data science, data engineering, and machine learning enables us
                to deliver data-driven insights that empower healthcare providers to make
                informed decisions and improve the well-being of their senior patients.
              </p>
              <p>
                Partner with Samiteon to implement RPM technology and transform the way you
                deliver senior care. Contact us today to learn more and start revolutionizing
                your senior care solutions.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image src="/senior-1.webp" alt="Senior care wearable" width={800} height={600} className="w-full object-cover" />
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="mx-auto max-w-7xl px-6"><hr className="border-slate-200 dark:border-slate-700" /></div>

      {/* ── Section 2: image #27 left + text right ── */}
      <section className="bg-white px-6 py-16 dark:bg-slate-900">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image src="/senior-2.webp" alt="Remote patient monitoring" width={800} height={600} className="w-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold leading-snug text-slate-900 dark:text-white md:text-4xl">
              Revolutionizing Senior Care with Remote Patient Monitoring Technology
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              Remote patient monitoring (RPM) is a technology-driven approach that enhances
              the care and health management of elderly individuals at home or in assisted
              living facilities. By utilizing various devices and digital tools to track,
              record, and transmit health data, RPM enables continuous and real-time
              monitoring, leading to early detection of potential health issues, improved
              chronic disease management, and enhanced overall patient outcomes.
            </p>
            <ul className="mt-8 space-y-4">
              {outcomes.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400">
                    <Icon size={20} />
                  </div>
                  <span className="text-base font-semibold text-slate-800 dark:text-slate-200">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-teal-50 px-6 py-16 dark:bg-teal-900/20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            Empowering Senior Health Management
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Transforming care for seniors with innovative technology.
          </p>
          <Link
            href="https://www.agingcareai.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-teal-500 px-8 py-3 text-base font-semibold text-white hover:bg-teal-600"
          >
            Visit Senior Care
          </Link>
        </div>
      </section>

    </main>
  );
}
