import Image from "next/image";

const projects = [
  { name: "Business Website", desc: "A modern corporate website with seamless user experience.", seed: "proj-web" },
  { name: "Mobile App", desc: "Cross-platform mobile app built for performance and scale.", seed: "proj-mobile" },
  { name: "Cloud Dashboard", desc: "Real-time cloud monitoring dashboard for enterprise use.", seed: "proj-cloud" },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-white/60 px-6 py-24 backdrop-blur-sm dark:bg-slate-900/60">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase text-blue-700 dark:text-blue-400">
          Projects
        </p>
        <h2 className="mt-3 text-3xl font-bold dark:text-white md:text-4xl">Our Work</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map(({ name, desc, seed }) => (
            <div
              key={name}
              className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm dark:border-slate-700"
            >
              <div className="group relative aspect-video overflow-hidden">
                <Image
                  src={`https://picsum.photos/seed/${seed}/600/400`}
                  alt={name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/70 opacity-0 transition duration-300 group-hover:opacity-100">
                  <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900">
                    View Project
                  </span>
                </div>
              </div>

              <div className="bg-[#f8fbff] p-6 dark:bg-slate-800">
                <h3 className="text-xl font-bold dark:text-white">{name}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
