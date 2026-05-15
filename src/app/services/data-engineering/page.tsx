import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Engineering & ETL — Samiteon",
  description:
    "Delivering scalable, automated, and high-performance data integration solutions. 15+ years of expertise in Data Engineering & ETL.",
};

const coreExpertise = [
  {
    category: "Traditional ETL",
    items: ["Structured, batch-based ETL systems", "Enterprise Data Warehousing", "SSIS-based enterprise pipelines", "SQL Agent & scheduler-based automation"],
    color: "border-cyan-200 dark:border-cyan-800",
    dot: "bg-cyan-500",
  },
  {
    category: "Modern Data Platforms",
    items: ["Cloud-native data engineering", "Real-time & distributed data processing", "Azure Data Factory (ADF) at scale", "PySpark / Databricks — distributed compute"],
    color: "border-blue-200 dark:border-blue-800",
    dot: "bg-blue-500",
  },
  {
    category: "Data Source Handling",
    items: ["Legacy: DBF, FoxPro, Access, Flat Files", "Real-time ingestion from APIs & streams", "Azure Data Lake, SharePoint, SaaS", "Schema evolution & dynamic pipelines"],
    color: "border-violet-200 dark:border-violet-800",
    dot: "bg-violet-500",
  },
];

const techStack = [
  { name: "SSIS", label: "Traditional ETL" },
  { name: "Azure Data Factory", label: "Orchestration" },
  { name: "PySpark + Python", label: "Distributed" },
  { name: "Databricks", label: "Big Data" },
  { name: "Power BI / Tableau", label: "Visualization" },
  { name: "SSRS", label: "Reporting" },
  { name: "SQL Server / Oracle", label: "Database" },
  { name: "Azure Data Lake", label: "Storage" },
];

const capabilities = [
  { title: "Real-time & Streaming Pipelines", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { title: "Event-driven Architecture", icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" },
  { title: "Metadata-driven ETL Frameworks", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" },
  { title: "CI/CD Integration (Azure DevOps / GitHub)", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
  { title: "Data Governance, Lineage & Security", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { title: "AI/ML-ready Data Platforms", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" },
];

const architecture = [
  { tier: "Bronze", label: "Raw Layer", desc: "Raw data ingested as-is from all sources with no transformations." },
  { tier: "Silver", label: "Cleansed Layer", desc: "Validated, deduplicated, and standardised data ready for analysis." },
  { tier: "Gold", label: "Business-Ready", desc: "Aggregated, modelled data powering dashboards, reports, and AI workloads." },
];

const clients = [
  "General Electric Appliances", "Louisville Water Company", "Lowe's",
  "Domestic & General", "Assurant", "Accentfx", "After Inc.",
  "American Freight", "Premier Directive Marketing (PDM)", "HJI",
];

const whyUs = [
  "Expertise across Legacy + Modern ecosystems",
  "Seamless migration from traditional ETL to cloud platforms",
  "Proven ability to handle complex enterprise data challenges",
  "Strong focus on Performance, Scalability & Automation",
  "Faster delivery using reusable frameworks & accelerators",
];

export default function DataEngineeringPage() {
  return (
    <main className="min-h-screen pt-24 text-slate-900 dark:text-slate-100">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 px-6 py-24 text-white">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #06b6d4 0%, transparent 50%), radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 50%)" }} />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Services</p>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Data Engineering & ETL Capabilities
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Delivering scalable, automated, and high-performance data integration solutions.
            Samiteon brings <strong className="text-white">15+ years of expertise</strong> in Data Engineering & Automation.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-lg bg-cyan-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-cyan-500">Inquire Now</Link>
            <Link href="#capabilities" className="rounded-lg border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10">Explore Capabilities</Link>
          </div>
        </div>
      </section>

      {/* Full-width image */}
      <div className="relative h-72 w-full sm:h-96 lg:h-[28rem]">
        <Image src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1600&q=80" alt="Data engineering pipelines" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">15+ Years of Expertise</p>
          <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">Traditional ETL to Modern Cloud Platforms</h2>
        </div>
      </div>

      {/* Core Expertise */}
      <section className="w-full bg-white px-6 py-16 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-8 w-1.5 rounded-full bg-cyan-500" />
            <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">Our Core Expertise</h2>
          </div>
          <p className="mb-10 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
            Strong foundation in structured, batch-based ETL systems and Enterprise Data Warehousing — with advanced capabilities in cloud-native data engineering and real-time distributed data processing.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreExpertise.map(({ category, items, color, dot }) => (
              <div key={category} className={`rounded-2xl border-2 ${color} bg-slate-50 p-6 dark:bg-slate-900`}>
                <div className={`mb-3 h-1.5 w-8 rounded-full ${dot}`} />
                <h3 className="mb-4 font-bold text-slate-900 dark:text-slate-100">{category}</h3>
                <ul className="space-y-2">
                  {items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="w-full border-t border-slate-200 bg-slate-50 px-6 py-16 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-8 w-1.5 rounded-full bg-cyan-500" />
              <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">ETL Tools & Technologies</h2>
            </div>
            <p className="mb-8 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              Spanning both traditional enterprise tools and the latest modern data stack — we meet you where you are and take you where you need to go.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {techStack.map(({ name, label }) => (
                <div key={name} className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800">
                  <p className="text-xs font-bold text-slate-900 dark:text-slate-100">{name}</p>
                  <p className="mt-0.5 text-xs text-cyan-600 dark:text-cyan-400">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-xl lg:h-80">
            <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="ETL tools and technologies" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Medallion Architecture */}
      <section className="w-full border-t border-slate-200 bg-white px-6 py-16 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-xl lg:h-80">
            <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Data architecture" fill className="object-cover" />
          </div>
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-8 w-1.5 rounded-full bg-cyan-500" />
              <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">Medallion Data Architecture</h2>
            </div>
            <p className="mb-6 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              Lakehouse architecture combining the best of Data Lake and Data Warehouse — structured as a three-tier Medallion model for maximum flexibility and performance.
            </p>
            <div className="space-y-4">
              {architecture.map(({ tier, label, desc }, i) => {
                const colors = ["bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300", "bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200", "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300"];
                return (
                  <div key={tier} className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900">
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-xs font-extrabold ${colors[i]}`}>{tier}</span>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-slate-100">{label}</p>
                      <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Next-Gen Capabilities */}
      <section id="capabilities" className="w-full border-t border-slate-200 bg-slate-50 px-6 py-16 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-8 w-1.5 rounded-full bg-cyan-500" />
            <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">Next-Gen Data Engineering Capabilities</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ title, icon }) => (
              <div key={title} className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-100 dark:bg-cyan-900">
                  <svg className="h-5 w-5 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                  </svg>
                </div>
                <p className="mt-1.5 text-sm font-semibold text-slate-900 dark:text-slate-100">{title}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-cyan-200 bg-cyan-50 p-5 text-sm font-medium text-cyan-800 dark:border-cyan-800 dark:bg-cyan-950/40 dark:text-cyan-300">
            🔄 Raw Data → Staging → Transformation → Warehouse → Reports → Insights
          </div>
        </div>
      </section>

      {/* Reporting & Visualization — image right */}
      <section className="w-full border-t border-slate-200 bg-white px-6 py-16 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-8 w-1.5 rounded-full bg-cyan-500" />
              <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">Reporting & Visualization</h2>
            </div>
            <p className="mt-2 mb-6 text-base leading-relaxed text-slate-600 dark:text-slate-300">From traditional SSRS reports to modern self-service BI — we deliver insights at every level of the organisation.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Traditional Reporting", items: ["SSRS parameterized & scheduled reports", "Static dashboards & structured reporting"] },
                { title: "Modern Analytics", items: ["Power BI / Tableau real-time dashboards", "Self-service BI & semantic layer", "Advanced analytics & forecasting", "AI/ML insights integration"] },
              ].map(({ title, items }) => (
                <div key={title} className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900">
                  <p className="mb-3 font-semibold text-slate-900 dark:text-slate-100">{title}</p>
                  {items.map(item => (
                    <p key={item} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />{item}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-xl lg:h-80">
            <Image src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=800&q=80" alt="Data visualization and reporting" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Client Portfolio */}
      <section className="w-full border-t border-slate-200 bg-slate-50 px-6 py-16 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-8 w-1.5 rounded-full bg-cyan-500" />
            <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">Our Client Portfolio</h2>
          </div>
          <p className="mb-8 text-base text-slate-600 dark:text-slate-300">Successfully implemented ETL and automation projects for leading enterprises:</p>
          <div className="flex flex-wrap gap-3">
            {clients.map(client => (
              <span key={client} className="rounded-full border border-cyan-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-cyan-800 dark:bg-slate-800 dark:text-slate-200">
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full border-t border-slate-200 bg-white px-6 py-16 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-xl lg:h-80">
            <Image src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" alt="Why choose Samiteon" fill className="object-cover" />
          </div>
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-8 w-1.5 rounded-full bg-cyan-500" />
              <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">Why Choose Us</h2>
            </div>
            <ul className="space-y-3">
              {whyUs.map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-100 dark:bg-cyan-900">
                    <svg className="h-3 w-3 text-cyan-600 dark:text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-xl border border-cyan-200 bg-cyan-50 p-4 text-sm font-medium italic text-cyan-800 dark:border-cyan-800 dark:bg-cyan-950/40 dark:text-cyan-300">
              "We don't just build ETL pipelines — we transform legacy data systems into scalable, intelligent, and future-ready data platforms."
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="relative h-64 w-full sm:h-80">
        <Image src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80" alt="Data engineering CTA" fill className="object-cover" />
        <div className="absolute inset-0 bg-cyan-900/85" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Transform Your Data?</h2>
          <p className="mt-4 max-w-xl text-lg text-cyan-100">Global Delivery Centers in USA & India — Email us at swathi@samiteon.com</p>
          <Link href="/contact" className="mt-8 rounded-lg bg-white px-10 py-4 font-bold text-cyan-700 shadow-lg transition hover:bg-cyan-50">Inquire</Link>
        </div>
      </div>

    </main>
  );
}
