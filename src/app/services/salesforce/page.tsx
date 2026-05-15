import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Salesforce Consulting — Samiteon",
  description: "Maximize your CRM investment with Samiteon's expert Salesforce solutions.",
};

export default function SalesforcePage() {
  return (
    <main className="min-h-screen pt-24 text-slate-900 dark:text-slate-100">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 px-6 py-24 text-white">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #0ea5e9 0%, transparent 50%), radial-gradient(circle at 80% 20%, #6366f1 0%, transparent 50%)" }} />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-sky-400">Services</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">Unlock CRM Potential</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">Maximize your CRM investment with our expert Salesforce solutions — from development and maintenance to training and consulting.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-lg bg-sky-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-sky-500">Inquire Now</Link>
            <Link href="#services" className="rounded-lg border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Full-width image 1 */}
      <div className="relative h-72 w-full sm:h-96 lg:h-[28rem]">
        <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80" alt="Data management" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-300">Data Management</p>
          <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">Keeping Your Salesforce Data Clean, Accurate, and Reliable</h2>
        </div>
      </div>
      <section className="w-full bg-white px-6 py-14 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl">
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">With our Data Management services, you can ensure that your Salesforce data is always up-to-date, error-free, and ready to drive your business forward.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              { title: "Q&A and Learning Sessions", body: "Our Q&A and learning sessions provide your team with the knowledge and skills they need to succeed.", icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "On-Demand Support", body: "Our support services ensure that your Salesforce platform runs smoothly and efficiently.", icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" },
              { title: "Custom Development", body: "Our custom development services help you tailor Salesforce to your specific business needs.", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
            ].map(({ title, body, icon }) => (
              <div key={title} className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 dark:bg-sky-900">
                  <svg className="h-5 w-5 text-sky-600 dark:text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} /></svg>
                </div>
                <p className="font-semibold text-slate-900 dark:text-slate-100">{title}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training — image right */}
      <section id="services" className="w-full border-t border-slate-200 bg-slate-50 px-6 py-16 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 flex items-center gap-3"><span className="h-8 w-1.5 rounded-full bg-sky-500" />
              <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">Unlock Your Potential with Virtual Salesforce Training</h2>
            </div>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">Access comprehensive training resources anytime, anywhere and enhance your Salesforce skills.</p>
            <div className="mt-6 space-y-3">
              {["Complimentary Health Check to uncover potential issues", "Identify underlying issues in your Salesforce setup", "Optimize your Salesforce for maximum efficiency", "Expert team analysis with actionable recommendations"].map(item => (
                <div key={item} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-800">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-sky-500" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-xl lg:h-80">
            <Image src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" alt="Salesforce training" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Development & Maintenance — image left */}
      <section className="w-full border-t border-slate-200 bg-white px-6 py-16 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-xl lg:h-80">
            <Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" alt="Salesforce development" fill className="object-cover" />
          </div>
          <div>
            <div className="mb-4 flex items-center gap-3"><span className="h-8 w-1.5 rounded-full bg-sky-500" />
              <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">Expert Salesforce Development and Maintenance</h2>
            </div>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              Our team of certified Salesforce consultants provides comprehensive development and maintenance services. We offer seamless Salesforce implementation and ongoing support for optimal CRM performance.
            </p>
            <div className="mt-6 space-y-4">
              {[
                { title: "Custom Development", body: "Tailor Salesforce to your specific requirements for a seamless business process fit." },
                { title: "System Integration", body: "Smooth data flow and process automation across your entire organization." },
                { title: "Data Migration", body: "Hassle-free transition to Salesforce with accuracy and integrity guaranteed." },
              ].map(({ title, body }) => (
                <div key={title} className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sky-500" />
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

      {/* Testing — image right */}
      <section className="w-full border-t border-slate-200 bg-slate-50 px-6 py-16 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 flex items-center gap-3"><span className="h-8 w-1.5 rounded-full bg-sky-500" />
              <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">Ensuring Flawless Performance with Rigorous Testing</h2>
            </div>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              At Samiteon, we offer comprehensive testing services and quality assurance to ensure that your Salesforce solutions perform flawlessly. Our team rigorously tests every aspect of your implementation, identifying and fixing any issues to deliver a seamless user experience.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { title: "Smooth Transition", body: "Data migration services guarantee minimal disruptions and maximum efficiency." },
                { title: "Data Integrity", body: "Your information remains accurate and secure throughout the migration process." },
              ].map(({ title, body }) => (
                <div key={title} className="rounded-xl border border-blue-100 bg-white p-5 dark:border-sky-900 dark:bg-slate-800">
                  <p className="font-semibold text-slate-900 dark:text-slate-100">{title}</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-xl lg:h-80">
            <Image src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" alt="Salesforce testing" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="relative h-64 w-full sm:h-80">
        <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80" alt="Unlock Salesforce" fill className="object-cover" />
        <div className="absolute inset-0 bg-sky-900/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Unlock the Power of Salesforce</h2>
          <p className="mt-4 max-w-xl text-lg text-sky-100">Discover how our Salesforce Development and Maintenance services can maximize your CRM potential.</p>
          <Link href="/contact" className="mt-8 rounded-lg bg-white px-10 py-4 font-bold text-sky-700 shadow-lg transition hover:bg-sky-50">Inquire</Link>
        </div>
      </div>

    </main>
  );
}
