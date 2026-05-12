import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CareersSection from "@/components/CareersSection";
import ContactSection from "@/components/ContactSection";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main className="text-slate-900 dark:text-slate-100">
      <HeroSection />
      <FadeIn><AboutSection /></FadeIn>
      <FadeIn delay={0.1}><ServicesSection /></FadeIn>
      <FadeIn><ProjectsSection /></FadeIn>
      <FadeIn><TestimonialsSection /></FadeIn>
      <FadeIn><CareersSection /></FadeIn>
      <FadeIn><ContactSection /></FadeIn>
    </main>
  );
}
