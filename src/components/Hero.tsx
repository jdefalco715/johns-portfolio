'use client';

/*import Image from "next/image";*/
import Link from "next/link";
import { motion } from "framer-motion";
import { Link as ScrollLink } from 'react-scroll';

export default function Hero() {
  return (
    <div className="p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-8 max-w-4xl">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="hero-section font-[family-name:var(--font-montserrat)]"
        >
          <div className="hero-content max-w-sm">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="text-content flex flex-col"
            >
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-4xl font-bold mb-2"
              >
                Meet John DeFalco
              </motion.h1>
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-2xl mb-4"
              >
                Front End Web Developer
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-lg mb-6"
              >
                I&apos;m a front end developer with a passion for creating beautiful and functional websites. 
                Currently working for Catalyst Brands.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="cta-buttons flex gap-4"
              >
                <ScrollLink to="projects" smooth={true} duration={500} className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
                  View Projects
                </ScrollLink>
                <ScrollLink to="contact" smooth={true} duration={500} className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
                  Contact Me
                </ScrollLink>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="image-content"
            >
              {/*<Image src="/headshot.jpg" alt="Your Name" />*/}
            </motion.div>
          </div>
        </motion.section>
      </div>

      
    </div>
  );
}
