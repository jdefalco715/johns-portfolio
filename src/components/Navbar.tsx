"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setIsScrolled(window.scrollY > 0);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      // Initial check
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled ? 'bg-white/40 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              JD
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-sm font-medium text-white-900 hover:text-white-600 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-medium text-white-900 hover:text-white-600 transition-colors"
            >
              About
            </Link>
            <Link 
              href="/projects" 
              className="text-sm font-medium text-white-900 hover:text-white-600 transition-colors"
            >
              Projects
            </Link>
            <Link 
              href="/contact" 
              className="text-sm font-medium text-white-900 hover:text-white-600 transition-colors"
            >
              Contact
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors px-4 py-2 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent"
            >
              <Image
                src="/file.svg"
                alt="Resume icon"
                width={16}
                height={16}
              />
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 