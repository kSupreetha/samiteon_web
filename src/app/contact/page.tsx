import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact — Samiteon",
  description: "Get in touch with Samiteon. We'd love to hear about your project and how we can help.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 text-slate-900 dark:text-slate-100">
      <ContactSection />
    </main>
  );
}
