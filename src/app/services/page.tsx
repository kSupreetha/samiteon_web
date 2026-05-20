import type { Metadata } from "next";
import ServicesSection from "@/components/sections/ServicesSection";

export const metadata: Metadata = {
  title: "Services — Samiteon",
  description: "Explore Samiteon's full range of IT services including web development, app development, cloud solutions, and more.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-24 text-slate-900 dark:text-slate-100">
      <ServicesSection />
    </main>
  );
}
