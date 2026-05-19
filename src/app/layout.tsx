import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ChatBotWrapper from "@/components/ChatBotWrapper";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});   

export const metadata: Metadata = {
  title: "Samiteon — Digital Solutions for Modern Businesses",
  description:
    "Samiteon helps businesses grow with modern web development, app development, cloud solutions, and digital transformation services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          <LanguageProvider>
            <ParticleBackground />
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
            <ScrollToTop />
            <ChatBotWrapper />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
