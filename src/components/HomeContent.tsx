"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import FadeIn from "@/components/FadeIn";
import HeroSection from "@/components/HeroSection";
import CertificationsSection from "@/components/CertificationsSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

export default function HomeContent() {
  const { t } = useLanguage();
  const h = t.home;

  return (
    <main className="text-slate-900">
      <HeroSection />

      {/* About text */}
      <FadeIn>
        <section className="w-full bg-white px-6 py-14">
          <div className="mx-auto max-w-7xl text-center">
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600">
              {h.aboutText}
            </p>
            <Link href="/about" className="mt-5 inline-block rounded-lg border border-blue-600 px-7 py-2.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white">
              {h.learnAboutUs}
            </Link>
          </div>
        </section>
      </FadeIn>

      <CertificationsSection />

      <FadeIn delay={0.1}><ServicesSection /></FadeIn>
      <FadeIn><ProjectsSection /></FadeIn>

      <TestimonialsSection />

      {/* CTA */}
      <FadeIn>
        <div className="relative h-72 w-full sm:h-80">
          <Image
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80"
            alt="Transform your business"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/80" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {h.ctaTitle}
            </h2>
            <p className="mt-4 max-w-xl text-lg text-blue-100">
              {h.ctaSubtitle}
            </p>
            <Link href="/contact" className="mt-8 rounded-lg bg-white px-10 py-4 font-bold text-blue-700 shadow-lg transition hover:bg-blue-50">
              {h.ctaButton}
            </Link>
          </div>
        </div>
      </FadeIn>

      <FadeIn><ContactSection /></FadeIn>
    </main>
  );
}
