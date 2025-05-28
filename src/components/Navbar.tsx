"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-200 ${ isScrolled ? 'bg-white/40 backdrop-blur-sm shadow-sm' : 'bg-transparent' }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              JD
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ScrollLink to="home" smooth={true} duration={500}>
              Home
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500}>
              About
            </ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500}>
              Projects
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500}>
              Contact
            </ScrollLink>
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
                className="brightness-0 invert"
              />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transform transition duration-300 ease-in-out mt-1.5 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transform transition duration-300 ease-in-out mt-1.5 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden absolute w-full left-0 z-50 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'} transition-all duration-300 ease-in-out`}>
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 rounded-lg bg-white/40  ${ isScrolled ? 'bg-blur-none' : ' backdrop-blur-md shadow-lg' }`}>
            <ScrollLink to="home" smooth={true} duration={500}>
              Home
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500}>
              About
            </ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500}>
              Projects
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500}>
              Contact
            </ScrollLink>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-solid border-white/[1] w-min px-3 py-2 rounded-full text-base font-medium text-white-700"
            >
              <Image
                src="/file.svg"
                alt="Resume icon"
                width={16}
                height={16}
                className="brightness-0 invert"
              />
              <span className="text-white-700 w-20">
                Resume
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 