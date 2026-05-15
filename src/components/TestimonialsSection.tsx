"use client";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonials = [
  {
    quote:
      "Working with Samiteon was a complete game-changer. They rebuilt our entire digital presence from scratch — the new platform cut load times by 60% and our conversion rate jumped 45% in just two months. What impressed me most was how deeply they understood our business goals before writing a single line of code.",
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    img: 1,
    rating: 5,
    tag: "Web Development",
  },
  {
    quote:
      "We were struggling to handle 10x traffic spikes during peak seasons. Samiteon migrated our entire infrastructure to the cloud in just 6 weeks with zero downtime. Their architects designed a system so resilient that we haven't had a single outage in over a year since go-live. Truly world-class.",
    name: "Michael Chen",
    role: "CTO",
    company: "CloudBase Ltd.",
    img: 12,
    rating: 5,
    tag: "Cloud Solutions",
  },
  {
    quote:
      "We handed Samiteon a rough wireframe and a tight deadline — they delivered a polished, production-ready app two weeks early. Daily active users grew from 5,000 to over 50,000 within three months. Their product thinking elevated the experience far beyond what we had originally envisioned.",
    name: "Priya Sharma",
    role: "Product Manager",
    company: "AppVenture",
    img: 5,
    rating: 5,
    tag: "App Development",
  },
  {
    quote:
      "Our Salesforce implementation was stalled for 8 months with a previous vendor. Samiteon stepped in, diagnosed every bottleneck, and delivered a fully integrated CRM in 10 weeks. Pipeline visibility improved dramatically and our sales team actually loves using the system now — that says everything.",
    name: "David Williams",
    role: "VP Engineering",
    company: "FinTech Corp",
    img: 8,
    rating: 5,
    tag: "Salesforce",
  },
  {
    quote:
      "Samiteon built a real-time data pipeline that processes over 3 million records daily across 12 data sources — all with 99.98% uptime. They documented everything meticulously and trained our internal team thoroughly. It's genuinely the best vendor delivery we've ever received in 15 years.",
    name: "Emma Rodriguez",
    role: "COO",
    company: "RetailMax",
    img: 9,
    rating: 5,
    tag: "Data Engineering",
  },
  {
    quote:
      "We needed three senior cloud engineers with very specific AWS and Terraform expertise. Samiteon provided thoroughly vetted engineers who were contributing meaningful work within 48 hours of onboarding. The calibre of talent was completely indistinguishable from our own permanent hires.",
    name: "James Park",
    role: "Director of Technology",
    company: "HealthPlus",
    img: 15,
    rating: 5,
    tag: "Staff Augmentation",
  },
  {
    quote:
      "Samiteon's data science team built a predictive demand forecasting model that reduced our inventory waste by 28% in the first quarter alone. They ran weekly syncs, explained every decision clearly, and documented the model so our own team can maintain and retrain it independently going forward.",
    name: "Ananya Krishnan",
    role: "CTO",
    company: "EduLearn Technologies",
    img: 20,
    rating: 5,
    tag: "AI / ML",
  },
  {
    quote:
      "Our legacy ERP was costing us weeks of delays every month-end close. Samiteon mapped our entire business processes, implemented the new system with custom workflows, and went live with zero critical issues. Month-end close dropped from 12 days to just 3. An absolutely unbelievable result.",
    name: "Robert Thompson",
    role: "CEO",
    company: "LogiTrack Solutions",
    img: 3,
    rating: 5,
    tag: "ERP Consulting",
  },
];

const row1 = testimonials;

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="h-4 w-4 fill-amber-400 drop-shadow-[0_0_4px_rgba(251,191,36,0.6)]" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ quote, name, role, company, img, rating, tag }: typeof testimonials[0]) {
  return (
    <div className="relative mx-3 w-[340px] shrink-0 overflow-hidden rounded-2xl border border-white/[0.12] bg-white/[0.05] p-6 shadow-2xl shadow-black/40 backdrop-blur-xl transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.09] hover:shadow-[0_16px_48px_rgba(59,130,246,0.2)]">
      {/* top edge highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      {/* service tag */}
      <span className="inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-0.5 text-[11px] font-semibold tracking-wide text-blue-300">
        {tag}
      </span>

      <div className="mt-3 flex items-start justify-between">
        <StarRating count={rating} />
        {/* decorative quote glyph */}
        <span className="font-serif text-4xl leading-none text-blue-400/30 select-none">&rdquo;</span>
      </div>

      <p className="mt-2 text-sm italic leading-7 text-white/65">
        &ldquo;{quote}&rdquo;
      </p>

      <div className="mt-5 flex items-center gap-3 border-t border-white/[0.08] pt-4">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-blue-500/30 ring-offset-1 ring-offset-transparent">
          <Image
            src={`https://i.pravatar.cc/80?img=${img}`}
            alt={name}
            fill
            sizes="44px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="text-xs text-blue-300/80">{role} &middot; {company}</p>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  direction,
  duration,
}: {
  items: typeof testimonials;
  direction: "left" | "right";
  duration: number;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div
        className="flex w-max hover:[animation-play-state:paused]"
        style={{ animation: `marquee-${direction} ${duration}s linear infinite` }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} {...t} />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const tr = t.testimonials;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#030712] via-[#0f172a] to-[#0c0a1e] py-24">

      {/* ambient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -right-24 bottom-1/3 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-violet-600/8 blur-3xl" />
      </div>

      {/* heading */}
      <div className="relative mx-auto mb-14 max-w-7xl px-6 text-center">
        <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-400">
          {tr.label}
        </span>
        <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
          {tr.title}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-400">
          {tr.subtitle}
        </p>
      </div>

      {/* marquee row */}
      <div
        className="relative"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <MarqueeRow items={row1} direction="left" duration={60} />
      </div>
    </section>
  );
}
