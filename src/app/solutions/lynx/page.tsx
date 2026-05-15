import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Zap, CheckCircle, BarChart2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Lynx — Samiteon Solutions",
  description: "Efficient invoicing and payment processing solution for modern businesses.",
};

export default function LynxPage() {
  return (
    <main className="min-h-screen text-slate-900 dark:text-slate-100">

      {/* ── Hero ── */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "500px" }}>
        <div className="absolute inset-0">
          <Image src="/lynx-hero.avif" alt="Lynx" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
        </div>
        <div className="relative z-10 flex min-h-[500px] max-w-2xl flex-col justify-center px-10 py-24 md:px-16 lg:px-24">
          <span className="mb-4 inline-block w-fit rounded-full bg-blue-500/20 px-4 py-1 text-sm font-semibold text-blue-300">
            Samiteon Solutions
          </span>
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Efficient Invoicing and<br />Payment Processing Solution
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-200">
            Lynx is a seamless solution for invoicing, from quotes to payments, designed
            to propel your business forward. With its user-friendly interface and robust
            features, you can easily manage your invoicing process and ensure timely payments.
          </p>
        </div>
      </section>

      {/* ── Section 1: automation image left + text right ── */}
      <section className="bg-white px-6 py-16 dark:bg-slate-900">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image src="/lynx-1.webp" alt="Lynx automation" width={800} height={600} className="w-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold leading-snug text-slate-900 dark:text-white md:text-4xl">
              Streamline Your Invoicing Process with Lynx&apos;s Automation Capabilities
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              Lynx offers a seamless solution for invoicing, from quotes to payments,
              designed to propel your business forward. With its automation capabilities,
              you can reduce manual efforts and eliminate errors, saving time and ensuring
              accuracy.
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Automation</h4>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Efficiently manage your invoicing process with automated features that minimize manual tasks.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Accuracy</h4>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Eliminate errors and ensure precise invoicing with Lynx&apos;s automated system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="mx-auto max-w-7xl px-6">
        <hr className="border-slate-200 dark:border-slate-700" />
      </div>

      {/* ── Section 2: text left + analytics image right ── */}
      <section className="bg-white px-6 py-16 dark:bg-slate-900">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold leading-snug text-slate-900 dark:text-white md:text-4xl">
              Unlock Powerful Insights with Advanced Analytics and Reporting Tools
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              Our Lynx invoicing solution provides you with robust analytics and reporting
              tools that offer deep insights into your financial health. Track and monitor
              your invoices, payments, and overall business performance with ease. Make
              data-driven decisions and stay ahead of the competition.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                <BarChart2 size={20} />
              </div>
              <span className="text-base font-semibold text-slate-800 dark:text-slate-200">
                Real-time financial reporting &amp; dashboards
              </span>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image src="/lynx-2.webp" alt="Lynx analytics" width={800} height={600} className="w-full object-cover" />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-blue-50 px-6 py-16 dark:bg-blue-900/20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            Streamline your invoicing process
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Lynx offers a seamless solution for businesses to efficiently manage their
            invoicing workflow.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-blue-700 px-8 py-3 text-base font-semibold text-white hover:bg-blue-800"
          >
            Inquire
          </Link>
        </div>
      </section>

    </main>
  );
}
