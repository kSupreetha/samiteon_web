import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "Samiteon — Digital Solutions for Modern Businesses",
  description:
    "Samiteon helps businesses grow with modern web development, app development, cloud solutions, and digital transformation services.",
};

export default function Home() {
  return <HomeContent />;
}
