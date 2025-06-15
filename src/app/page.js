'use client';
import { useRef } from "react";
import dynamic from 'next/dynamic';

import About from "@/components/about";
import Hero from "@/components/hero";

const Project = dynamic(() => import('@/components/project'), { ssr: true });
const Skills = dynamic(() => import('@/components/skills'), { ssr: true });
const Contact = dynamic(() => import("@/components/contact"), { ssr: true });
const Header = dynamic(() => import("@/components/header"), { ssr: true });
const HeroVideo = dynamic(() => import('@/components/heroVideo'), { ssr: false });

export default function Home() {
  const containerRef = useRef(null);

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