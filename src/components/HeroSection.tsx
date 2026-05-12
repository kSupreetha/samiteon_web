import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center">
      <Image
        src="/hero-bg.jpg"
        alt="Working environment"
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center text-white">
        <p className="mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
          Digital Solutions for Modern Businesses
        </p>

        <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
          Empowering Businesses with Innovative IT Solutions
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
          As a leading IT services provider, Samiteon excels in delivering
          high-impact solutions. Our expertise spans Salesforce development,
          data science, and more, enabling us to achieve robust growth while
          consistently exceeding client expectations.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#services"
            className="rounded-full bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg hover:bg-blue-700"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/50 bg-white/10 px-7 py-3 font-semibold text-white backdrop-blur-sm hover:bg-white/20"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
