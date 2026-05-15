import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Samiteon & FlintLab Strategic Partnership — Press Release",
  description:
    "Samiteon and FlintLab announce a strategic partnership to elevate enterprise testing and AI solutions.",
};

export default function SamiteonFlintlabPartnershipPage() {
  return (
    <main className="min-h-screen pt-24 text-slate-900 dark:text-slate-100">
      <article className="mx-auto max-w-3xl px-6 py-16">
        {/* Back link */}
        <Link
          href="/press-release"
          className="mb-8 inline-flex items-center gap-1 text-sm text-blue-600 hover:underline dark:text-blue-400"
        >
          ← Press Release
        </Link>

        {/* Header */}
        <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          Press Release
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          Samiteon and FlintLab Forge Strategic Partnership To Elevate Enterprise
          Testing and AI Solutions
        </h1>
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
          <time dateTime="2025-07-18">July 18, 2025</time> &mdash; Seattle, WA;
          Louisville, KY; Bangalore &amp; Visakhapatnam, India
        </p>

        <hr className="my-8 border-slate-200 dark:border-slate-700" />

        {/* Body */}
        <div className="space-y-6 text-base leading-relaxed text-slate-700 dark:text-slate-300">
          <p>
            Samiteon, a leader in digital transformation, and FlintLab, a pioneer
            in AI-powered testing infrastructure, have announced a strategic
            partnership to drive innovation in mobile test automation, real-device
            validation, and AI-driven enterprise software testing.
          </p>

          {/* Partnership Highlights */}
          <section>
            <h2 className="mb-3 text-xl font-semibold text-slate-900 dark:text-slate-100">
              Partnership Highlights
            </h2>
            <ul className="space-y-3">
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
                  body: "FlintLab's capabilities will be seamlessly embedded within Samiteon's client proposals, ensuring transparent pricing and delivering joint technical value to end customers.",
                },
                {
                  title: "Unified Branding Strategy",
                  body: "Joint blogs, newsletters, and campaigns to amplify industry presence.",
                },
                {
                  title: "Client Engagement",
                  body: "Both teams will jointly engage with key clients for solution demonstrations, strengthening relationships and uncovering new business opportunities through collaborative value delivery.",
                },
              ].map(({ title, body }) => (
                <li key={title} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  <span>
                    <strong className="text-slate-900 dark:text-slate-100">
                      {title}:
                    </strong>{" "}
                    {body}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Strategic Impact */}
          <section>
            <h2 className="mb-3 text-xl font-semibold text-slate-900 dark:text-slate-100">
              Strategic Impact
            </h2>
            <ul className="space-y-3">
              {[
                {
                  title: "Faster Time to Market",
                  body: "Up to 30% reduction in release cycles.",
                },
                {
                  title: "Cost Savings",
                  body: "20–25% decrease in testing expenditure.",
                },
                {
                  title: "Scalability",
                  body: "50% more device/OS coverage.",
                },
                {
                  title: "Reliability & UX",
                  body: "Real-device AI testing enhances performance and satisfaction.",
                },
                {
                  title: "Innovation & Leadership",
                  body: "Joint thought leadership strengthens industry positioning.",
                },
                {
                  title: "Market Growth",
                  body: "15–20% projected market expansion over two years.",
                },
                {
                  title: "Sustainability",
                  body: "Efficient testing workflows reduce energy usage.",
                },
              ].map(({ title, body }) => (
                <li key={title} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  <span>
                    <strong className="text-slate-900 dark:text-slate-100">
                      {title}:
                    </strong>{" "}
                    {body}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* About */}
          <section>
            <h2 className="mb-3 text-xl font-semibold text-slate-900 dark:text-slate-100">
              About the Companies
            </h2>
            <p>
              <strong className="text-slate-900 dark:text-slate-100">
                Samiteon
              </strong>{" "}
              specializes in AI, Audit Management Systems, ERP, cloud, RFID, and
              compliance across sectors like healthcare, logistics, and public
              systems.
            </p>
            <p className="mt-3">
              <strong className="text-slate-900 dark:text-slate-100">
                FlintLab
              </strong>{" "}
              delivers a next-gen Infrastructure Platform as a Service (IPaaS),
              enabling secure, scalable, AI-powered enterprise test environments.
            </p>
          </section>

          {/* Quotes */}
          <section className="space-y-4">
            <h2 className="mb-3 text-xl font-semibold text-slate-900 dark:text-slate-100">
              Leadership Insights
            </h2>
            <blockquote className="border-l-4 border-blue-500 pl-5 italic">
              <p>
                &ldquo;This partnership enables faster, smarter, and high-quality
                mobile experiences for our clients.&rdquo;
              </p>
              <footer className="mt-2 not-italic text-sm font-medium text-slate-900 dark:text-slate-100">
                — Sunny Dronawat, CEO, Samiteon
              </footer>
            </blockquote>
            <blockquote className="border-l-4 border-blue-500 pl-5 italic">
              <p>
                &ldquo;Together, we&rsquo;re removing testing inefficiencies and
                driving enterprise innovation.&rdquo;
              </p>
              <footer className="mt-2 not-italic text-sm font-medium text-slate-900 dark:text-slate-100">
                — Krishna Seerapu, Founder &amp; CEO, FlintLab
              </footer>
            </blockquote>
          </section>

          {/* Contact */}
          <section className="rounded-xl bg-slate-100 p-6 dark:bg-slate-800">
            <h2 className="mb-3 text-lg font-semibold text-slate-900 dark:text-slate-100">
              Contact for Media &amp; Partnerships
            </h2>
            <ul className="space-y-1 text-sm">
              <li>
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  Swathi (Samiteon):
                </span>{" "}
                <a
                  href="mailto:swathi@samiteon.com"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  swathi@samiteon.com
                </a>
              </li>
              <li>
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  Prasad (FlintLab):
                </span>{" "}
                <a
                  href="mailto:prasad@flintlab.io"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  prasad@flintlab.io
                </a>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </main>
  );
}
