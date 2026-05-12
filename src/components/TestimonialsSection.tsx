import Image from "next/image";

const testimonials = [
  {
    quote: "Samiteon delivered an exceptional website that truly represents our brand. The team was professional and responsive throughout.",
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    img: 1,
  },
  {
    quote: "Their cloud solutions helped us scale effortlessly. Outstanding technical expertise and ongoing support.",
    name: "Michael Chen",
    role: "CTO, CloudBase Ltd.",
    img: 12,
  },
  {
    quote: "The mobile app they built exceeded our expectations. User engagement increased by 200% after launch.",
    name: "Priya Sharma",
    role: "Product Manager, AppVenture",
    img: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#f8fbff]/60 px-6 py-24 backdrop-blur-sm dark:bg-slate-950/60">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase text-blue-700 dark:text-blue-400">
          Testimonials
        </p>
        <h2 className="mt-3 text-3xl font-bold dark:text-white md:text-4xl">
          What our clients say
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map(({ quote, name, role, img }) => (
            <div
              key={name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"
            >
              <p className="font-serif text-5xl leading-none text-blue-200 dark:text-blue-700">
                &ldquo;
              </p>
              <p className="mt-2 leading-7 text-slate-600 dark:text-slate-400">{quote}</p>

              <div className="mt-6 flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={`https://i.pravatar.cc/80?img=${img}`}
                    alt={name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">{name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
