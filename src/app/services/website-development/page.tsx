import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Development — Samiteon",
  description: "Crafting responsive, high-quality websites tailored to your brand with industry-leading CMS platforms.",
};

export default function WebsiteDevelopmentPage() {
  return (
    <main className="min-h-screen pt-24 text-slate-900 dark:text-slate-100">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-pink-950 to-slate-900 px-6 py-24 text-white">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #ec4899 0%, transparent 50%), radial-gradient(circle at 80% 20%, #8b5cf6 0%, transparent 50%)" }} />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-pink-400">Services</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">Transforming Digital Experiences</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">Crafting responsive, high-quality websites tailored to your brand with industry-leading CMS platforms.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-lg bg-pink-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-pink-500">Inquire Now</Link>
            <Link href="#services" className="rounded-lg border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Full-width image */}
      <div className="relative h-72 w-full sm:h-96 lg:h-[28rem]">
        <Image src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1600&q=80" alt="Web design" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-pink-300">Web Design</p>
          <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">Crafting Unique Websites that Reflect Your Brand</h2>
        </div>
      </div>
      <section className="w-full bg-white px-6 py-14 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl">
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            At Samiteon, we specialize in creating visually appealing websites that are tailored to your brand's identity. Our custom web design services ensure that your website stands out from the competition and leaves a lasting impression on your audience.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              { title: "Mobile-Friendly Design", body: "Responsive web design ensures your website looks and functions flawlessly on desktops, tablets, and smartphones." },
              { title: "Exceptional Functionality", body: "Our designers and developers create websites that not only look great but provide a seamless user experience." },
              { title: "CMS Integration", body: "Figma/PSD to CMS template conversions for WordPress, Joomla, and Strapi with seamless precision." },
            ].map(({ title, body }) => (
              <div key={title} className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
                <div className="mb-3 h-1 w-10 rounded-full bg-pink-500" />
                <p className="font-semibold text-slate-900 dark:text-slate-100">{title}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speed & SEO — image right */}
      <section id="services" className="w-full border-t border-slate-200 bg-slate-50 px-6 py-16 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 flex items-center gap-3"><span className="h-8 w-1.5 rounded-full bg-pink-500" />
              <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">Speed Optimization &amp; SEO Integration</h2>
            </div>
            <div className="mt-6 space-y-4">
              {[
                { title: "Lightning-Fast Speed", body: "Ensure your website loads quickly and provides a seamless user experience. Our speed optimization services enhance site performance, leading to improved search engine rankings." },
                { title: "SEO Integration", body: "Our SEO integration services ensure your website ranks higher in search engine results, driving organic traffic and increasing your online visibility." },
                { title: "Best SEO Practices", body: "We implement best SEO practices to help you reach your target audience and achieve your business goals." },
              ].map(({ title, body }) => (
                <div key={title} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-pink-500" />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-slate-100">{title}</p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-xl lg:h-80">
            <Image src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80" alt="Website performance" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* CMS — image left */}
      <section className="w-full border-t border-slate-200 bg-white px-6 py-16 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-xl lg:h-80">
            <Image src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80" alt="CMS development" fill className="object-cover" />
          </div>
          <div>
            <div className="mb-4 flex items-center gap-3"><span className="h-8 w-1.5 rounded-full bg-pink-500" />
              <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">Transform Designs into Functional CMS Templates</h2>
            </div>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              At Samiteon, we specialize in Figma/PSD to CMS template conversions, ensuring your designs come to life on industry-leading platforms like WordPress, Joomla, and Strapi. Our expert team seamlessly translates your vision into functional and responsive websites.
            </p>
            <ul className="mt-6 space-y-2">
              {["WordPress development & theming", "Joomla template customization", "Strapi headless CMS setup", "Pixel-perfect design conversion"].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pink-100 dark:bg-pink-900">
                    <svg className="h-3 w-3 text-pink-600 dark:text-pink-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="relative h-64 w-full sm:h-80">
        <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80" alt="Transform online presence" fill className="object-cover" />
        <div className="absolute inset-0 bg-pink-900/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Transform Your Online Presence Today</h2>
          <p className="mt-4 max-w-xl text-lg text-pink-100">Contact us now to elevate your website and enhance your brand's digital footprint.</p>
          <Link href="/contact" className="mt-8 rounded-lg bg-white px-10 py-4 font-bold text-pink-700 shadow-lg transition hover:bg-pink-50">Inquire</Link>
        </div>
      </div>

    </main>
  );
}
