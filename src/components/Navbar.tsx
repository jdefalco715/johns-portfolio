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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = () => {
    closeMobileMenu();
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 font-[family-name:var(--font-geist-sans)] ${ isScrolled ? 'bg-white/40 backdrop-blur-sm shadow-sm' : 'bg-transparent' }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              JD
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-base text-white">
            <ScrollLink to="home" smooth={true} duration={500} className='cursor-pointer hover:text-gray-200' offset={-20}>
              Home
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500} className='cursor-pointer hover:text-gray-200'>
              About
            </ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500} className='cursor-pointer hover:text-gray-200'>
              Projects
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} className='cursor-pointer hover:text-gray-200'>
              Contact
            </ScrollLink>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full cursor-pointer border border-solid border-black/[.08] dark:border-white/[.145] transition-colors px-4 py-2 hover:bg-[#383838] hover:border-transparent hover:cursor-pointer"
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

        {/* Mobile Menu Backdrop */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 z-[100]"
            onClick={closeMobileMenu}
          />
        )}

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden fixed inset-x-0 top-16 z-[101] ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'} transition-all duration-300 ease-in-out`}>
          <div className="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3 rounded-lg bg-white dark:bg-black shadow-lg">
            <ScrollLink to="home" className='m-2' smooth={true} duration={500} onClick={handleNavClick} offset={-90}>
              Home
            </ScrollLink>
            <ScrollLink to="about" className='m-2' smooth={true} duration={500} onClick={handleNavClick}>
              About
            </ScrollLink>
            <ScrollLink to="projects" className='m-2' smooth={true} duration={500} onClick={handleNavClick}>
              Projects
            </ScrollLink>
            <ScrollLink to="contact" className='m-2 mb-5' smooth={true} duration={500} onClick={handleNavClick}>
              Contact
            </ScrollLink>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-solid border-white/[1] w-min px-3 py-2 rounded-full text-base font-medium text-white-700 mb-2 hover:cursor-pointer"
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