'use client';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  return (
    <main>
      <Navbar />
      <section id="home" className="">
        <Hero />
      </section>
      <section id="about" className="">
        <About />
      </section>
      <section id="projects" className="">
        <Projects />
      </section>
      <section id="contact" className="">
        <Contact />
      </section>
    </main>
  );
}
