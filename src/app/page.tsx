"use client";

import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import { useReveal } from "@/hooks/useReveal";

export default function Home() {
  useReveal();

  return (
    <main>
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Capabilities />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
