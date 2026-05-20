import type { Metadata } from "next";
import AboutSection from "@/components/sections/AboutSection";

export const metadata: Metadata = {
  title: "About — Samiteon",
  description: "Learn about Samiteon, our team, and our mission to deliver high-impact digital solutions.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 text-slate-900 dark:text-slate-100">
      <AboutSection />
    </main>
  );
}
