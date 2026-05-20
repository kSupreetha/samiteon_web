import type { Metadata } from "next";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export const metadata: Metadata = {
  title: "Projects — Samiteon",
  description: "Browse Samiteon's portfolio of delivered projects including websites, mobile apps, and cloud dashboards.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24 text-slate-900 dark:text-slate-100">
      <ProjectsSection />
      <TestimonialsSection />
    </main>
  );
}
