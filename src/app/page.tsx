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
    // Prevent scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Force scroll to top
    window.scrollTo(0, 0);
    
    // Small delay to ensure scroll position is set
    setTimeout(() => {
      lenisRef.current = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        wheelMultiplier: 1,
      });

      function raf(time: number) {
        lenisRef.current?.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }, 100);

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden relative m-auto max-w-7xl">
      <Navbar />
      <section id="home" className="min-h-screen sm:mt-5 mt-15">
        <Hero />
      </section>
      <section id="about" className="min-h-screen sm:pt-5 pt-15">
        <About />
      </section>
      <section id="projects" className="min-h-screen sm:pt-5 pt-15">
        <Projects />
      </section>
      <section id="contact" className="min-h-screen sm:pt-5 pt-15">
        <Contact />
      </section>
    </main>
  );
}
