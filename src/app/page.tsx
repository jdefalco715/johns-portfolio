'use client';

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <section id="home">
           <Hero />
         </section>
         <section id="about">
           <About />
         </section>
         <section id="projects">
           <Projects />
         </section>
         <section id="contact">
           <Contact />
         </section>
    </main>
  );
}
