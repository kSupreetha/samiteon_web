import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom Development — Samiteon",
  description: "Transform your business with Samiteon's bespoke solutions and cutting-edge technologies.",
};

export default function CustomDevelopmentPage() {
  return (
    <main className="min-h-screen pt-24 text-slate-900 dark:text-slate-100">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-orange-950 to-slate-900 px-6 py-24 text-white">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #f97316 0%, transparent 50%), radial-gradient(circle at 80% 20%, #eab308 0%, transparent 50%)" }} />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-orange-400">Services</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">Cutting-edge Solutions</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">Transform your business with our bespoke solutions and cutting-edge technologies tailored to your unique requirements.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-lg bg-orange-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-orange-500">Inquire Now</Link>
            <Link href="#solutions" className="rounded-lg border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Full-width image */}
      <div className="relative h-72 w-full sm:h-96 lg:h-[28rem]">
        <Image src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1600&q=80" alt="Custom development" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-300">Tailored Applications</p>
          <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">Tailored Applications for Unique Client Requirements</h2>
        </div>
      </div>
      <section className="w-full bg-white px-6 py-14 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl">
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            At Samiteon, we specialize in developing custom applications that perfectly align with our clients' unique requirements. Our team of experts utilizes cutting-edge technologies to create bespoke solutions that drive business growth and success.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: "Expertise", body: "Our team of experienced developers excels in creating tailored applications that meet diverse client needs.", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
              { title: "Innovation", body: "We leverage the latest technologies to deliver innovative solutions that drive business growth.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
            ].map(({ title, body, icon }) => (
              <div key={title} className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900">
                  <svg className="h-5 w-5 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} /></svg>
                </div>
                <p className="font-semibold text-slate-900 dark:text-slate-100">{title}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Services — image right */}
      <section id="solutions" className="w-full border-t border-slate-200 bg-slate-50 px-6 py-16 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 flex items-center gap-3"><span className="h-8 w-1.5 rounded-full bg-orange-500" />
              <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">Custom Development Services for Your Unique Needs</h2>
            </div>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              We offer comprehensive custom development services that cover the entire lifecycle of your project, from ideation to deployment.
            </p>
            <div className="mt-6 space-y-4">
              {[
                { title: "End-to-End", body: "From concept development to coding, testing, and deployment, we handle every aspect of your project." },
                { title: "Cutting-Edge", body: "We leverage the latest technologies to create innovative and scalable solutions for your business." },
              ].map(({ title, body }) => (
                <div key={title} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-slate-100">{title}</p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-xl lg:h-80">
            <Image src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" alt="Custom development services" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Solutions — image left */}
      <section className="w-full border-t border-slate-200 bg-white px-6 py-16 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-xl lg:h-80">
            <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Custom solutions" fill className="object-cover" />
          </div>
          <div>
            <div className="mb-4 flex items-center gap-3"><span className="h-8 w-1.5 rounded-full bg-orange-500" />
              <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">Custom Solutions for Your Unique Needs</h2>
            </div>
            <p className="mb-6 text-base leading-relaxed text-slate-600 dark:text-slate-300">At Samiteon, we specialize in mobile app development, web app development, and custom software solutions.</p>
            <div className="space-y-4">
              {[
                { title: "Mobile App Development", body: "Cutting-edge mobile applications that deliver seamless user experiences and drive business growth." },
                { title: "Web App Development", body: "Scalable and secure web solutions that enhance online presence and user engagement." },
                { title: "Custom Software Solutions", body: "Streamline your business processes and drive operational efficiency with customized software." },
              ].map(({ title, body }) => (
                <div key={title} className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900">
                    <svg className="h-5 w-5 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-slate-100">{title}</p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="relative h-64 w-full sm:h-80">
        <Image src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80" alt="Transform ideas" fill className="object-cover" />
        <div className="absolute inset-0 bg-orange-900/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Transform Your Ideas into Reality</h2>
          <p className="mt-4 max-w-xl text-lg text-orange-100">Contact Samiteon today for tailored custom development services that meet your unique needs.</p>
          <Link href="/contact" className="mt-8 rounded-lg bg-white px-10 py-4 font-bold text-orange-700 shadow-lg transition hover:bg-orange-50">Inquire</Link>
        </div>
      </div>

    </main>
  );
}
