import Image from "next/image";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "20+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white/60 px-6 py-24 backdrop-blur-sm dark:bg-slate-900/60">
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        <div className="relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="https://picsum.photos/seed/samiteon-team/800/600"
              alt="Our team"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl border-4 border-blue-100 dark:border-blue-900" />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase text-blue-700 dark:text-blue-400">
            About Us
          </p>

          <h2 className="mt-3 text-3xl font-bold dark:text-white md:text-4xl">
            We create reliable digital products for businesses
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Samiteon focuses on building modern websites, scalable applications,
            and business-focused software solutions that help companies improve
            their online presence and operations.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="rounded-2xl bg-blue-50 p-5 text-center dark:bg-blue-900/30"
              >
                <p className="text-3xl font-extrabold text-blue-700 dark:text-blue-400">
                  {value}
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
