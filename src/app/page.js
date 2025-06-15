'use client';
import { useEffect, useRef } from "react";
import Hero from "@/components/hero";
import About from "@/components/about";
import Project from "@/components/project";
import Skills from "@/components/skills";
import Header from "@/components/header";
import HeroVideo from "@/components/heroVideo";
import Contact from "@/components/contact";

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [])

  return (
    <main className="min-h-screen text-white bg-[#0d1117]">
      <Header />

      {/* Hero Section */}
      <section ref={containerRef} className="intro-hero">
        <Hero />
        <HeroVideo />
      </section>

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Project />

      {/* Skills Section */}
      <Skills />

      {/* Contact Section */}
      <Contact />
    </main>
  );
}