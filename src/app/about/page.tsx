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
              Based in Hoboken, NJ, I&apos;m a passionate front-end developer with a keen eye for creating beautiful and functional web experiences. 
              My journey in web development started with a curiosity about how websites work, which evolved into a deep 
              appreciation for the art and science of building user interfaces.
            </p>
            
            <p className="text-lg">
              Currently working at Catalyst Brands, I focus on creating responsive, accessible, and performant web 
              applications. I&apos;m particularly interested in modern JavaScript frameworks, CSS architecture, and 
              creating smooth user experiences.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Education</h2>
            <p className="text-lg">
              I&apos;m a graduate of Marist University with a B.S. in Computer Science, with a concentration in Software Development and minors in Information Systems and Information Technology.
            </p>

            <p className="text-lg">
              In the spring semester of 2018 I studied abroad at Dublin Business School in Dublin, Ireland.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-medium mb-2">Frontend</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>React / Next.js</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">E-Commerce</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Salesforce Commerce Cloud</li>
                  <li>Salesforce Commerce Reference Architecture</li>
                  <li>Shopify</li>
                  <li>WordPress</li>
                  <li>SEO</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Tools & Others</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Git / GitHub</li>
                  <li>npm / yarn</li>
                  <li>ADA Compliance</li>
                  <li>Microsoft Office</li>
                  <li>VS Code</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">What I&apos;m Learning</h2>

            <p className="text-lg">
              I&apos;m currently studying for an AWS Cloud Practitioner Foundation certification, with plans to pursue a Developer Associate certification in the future. 
              Cloud Engineering is a field I&apos;m very interested in, and I&apos;m looking forward to learning more about it.
            </p>

            <p className="text-lg">
              If there&apos;s anything I&apos;m not familiar with, I&apos;m always looking to learn more. If you have any recommendations, please let me know on my contact page!
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">What I Love</h2>

            <p className="text-lg">
              Outside of work, I enjoy cooking, reading, and spending time with my family and friends. 
              I&apos;m a big skier and snowboarder and try to hit the slopes as much as possible. 
              I also enjoy playing golf, traveling, and going to concerts. 
            </p>
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
} 