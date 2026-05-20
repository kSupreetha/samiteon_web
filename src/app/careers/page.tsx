import type { Metadata } from "next";
import CareersSection from "@/components/sections/CareersSection";

export const metadata: Metadata = {
  title: "Careers — Samiteon",
  description: "Join the Samiteon team. Explore open positions in engineering, design, marketing, and more.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen pt-24 text-slate-900 dark:text-slate-100">
      <CareersSection />
    </main>
  );
}
