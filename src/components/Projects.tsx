'use client';

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const projects = [
  {
    title: "This Website",
    description: "A responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion.",
    image: "/jd-logo.svg",
    github: "https://github.com/jdefalco715/johns-portfolio",
    demo: "",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Coin Bag",
    description: "A cryptocurrency portfolio tracker and research tool. Work in progress.",
    image: "/cb-logo.svg",
    github: "https://github.com/jdefalco715/coin-bag",
    demo: "",
    tech: ["Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "WebSocket API", "Binance.US API"],
    wip: true
  },
  // Add more projects here
];

export default function Projects() {
  const [sectionRef, isIntersecting] = useIntersectionObserver();

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8">
            <motion.section 
            ref={sectionRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-6"
            >
                <motion.h1 
                    initial={{ opacity: 0 }}
                    animate={isIntersecting ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl font-bold"
                >
                    Projects
                </motion.h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-6 bg-[#1a202c] text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="relative h-48">
                                <Image 
                                    src={project.image} 
                                    alt={project.title}
                                    fill
                                    className="object-cover invert"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                                <p className="text-gray-200 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech) => (
                                        <span 
                                            key={tech}
                                            className="px-2 py-1 bg-gray-700 text-gray-100 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.wip && (
                                      <span className="px-2 py-1 bg-yellow-600 text-yellow-100 rounded-full text-sm font-semibold">WIP</span>
                                    )}
                                </div>
                                <div className="flex gap-4">
                                    <a 
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors"
                                    >
                                        <FaGithub className="text-xl" />
                                        <span>Code</span>
                                    </a>
                                    {project.demo && (
                                        <a 
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors"
                                        >
                                            <FaExternalLinkAlt className="text-xl" />
                                            <span>Live Demo</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </main>
    </div>
  )
}
