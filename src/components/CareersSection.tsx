const jobs = [
  { title: "Frontend Developer", location: "Remote", type: "Full-time", dept: "Engineering" },
  { title: "UI/UX Designer", location: "Hybrid", type: "Full-time", dept: "Design" },
  { title: "Cloud Engineer", location: "Remote", type: "Full-time", dept: "Infrastructure" },
  { title: "Digital Marketing Specialist", location: "On-site", type: "Full-time", dept: "Marketing" },
];

export default function CareersSection() {
  return (
    <section id="careers" className="bg-white/60 px-6 py-24 backdrop-blur-sm dark:bg-slate-900/60">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase text-blue-700 dark:text-blue-400">
          Careers
        </p>
        <h2 className="mt-3 text-3xl font-bold dark:text-white md:text-4xl">
          Join Our Team
        </h2>
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
          We welcome passionate developers, designers, and technology learners
          who want to grow with us.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {jobs.map(({ title, location, type, dept }) => (
            <div
              key={title}
              className="flex items-center justify-between rounded-2xl border border-slate-200 bg-[#f8fbff] p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-blue-700"
            >
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-400">
                    {dept}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                    {location}
                  </span>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-900/40 dark:text-green-400">
                    {type}
                  </span>
                </div>
              </div>

              <a
                href="#contact"
                className="ml-4 whitespace-nowrap rounded-full bg-blue-700 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-800"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
