import { Globe, Smartphone, Cloud, Palette, TrendingUp, Code2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const services: {
  name: string;
  icon: LucideIcon;
  topBorder: string;
  iconBg: string;
  iconColor: string;
}[] = [
  { name: "Web Development", icon: Globe, topBorder: "border-t-blue-500", iconBg: "bg-blue-50 dark:bg-blue-900/30", iconColor: "text-blue-600 dark:text-blue-400" },
  { name: "App Development", icon: Smartphone, topBorder: "border-t-violet-500", iconBg: "bg-violet-50 dark:bg-violet-900/30", iconColor: "text-violet-600 dark:text-violet-400" },
  { name: "Cloud Solutions", icon: Cloud, topBorder: "border-t-cyan-500", iconBg: "bg-cyan-50 dark:bg-cyan-900/30", iconColor: "text-cyan-600 dark:text-cyan-400" },
  { name: "UI/UX Design", icon: Palette, topBorder: "border-t-pink-500", iconBg: "bg-pink-50 dark:bg-pink-900/30", iconColor: "text-pink-600 dark:text-pink-400" },
  { name: "Digital Marketing", icon: TrendingUp, topBorder: "border-t-orange-500", iconBg: "bg-orange-50 dark:bg-orange-900/30", iconColor: "text-orange-600 dark:text-orange-400" },
  { name: "Software Consulting", icon: Code2, topBorder: "border-t-green-500", iconBg: "bg-green-50 dark:bg-green-900/30", iconColor: "text-green-600 dark:text-green-400" },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#f8fbff]/60 px-6 py-24 backdrop-blur-sm dark:bg-slate-950/60"
      style={{
        backgroundImage: "radial-gradient(var(--dot-color) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase text-blue-700 dark:text-blue-400">
          Services
        </p>
        <h2 className="mt-3 text-3xl font-bold dark:text-white md:text-4xl">
          What we offer
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map(({ name, icon: Icon, topBorder, iconBg, iconColor }) => (
            <div
              key={name}
              className={`rounded-2xl border border-slate-200 border-t-4 ${topBorder} bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800`}
            >
              <div className={`mb-4 inline-flex rounded-xl p-3 ${iconBg}`}>
                <Icon className={iconColor} size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{name}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                Professional and scalable solutions designed for business growth.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
