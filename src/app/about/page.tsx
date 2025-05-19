'use client';

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 max-w-4xl">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold"
          >
            About Me
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <p className="text-lg">
              Based in Hoboken, NJ, I'm a passionate front-end developer with a keen eye for creating beautiful and functional web experiences. 
              My journey in web development started with a curiosity about how websites work, which evolved into a deep 
              appreciation for the art and science of building user interfaces.
            </p>
            
            <p className="text-lg">
              Currently working at Catalyst Brands, I focus on creating responsive, accessible, and performant web 
              applications. I'm particularly interested in modern JavaScript frameworks, CSS architecture, and 
              creating smooth user experiences.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">Frontend</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>React / Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>HTML5 / CSS3</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Tools & Others</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Git / GitHub</li>
                  <li>VS Code</li>
                  <li>Responsive Design</li>
                  <li>UI/UX Principles</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
} 