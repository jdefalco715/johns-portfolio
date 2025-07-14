'use client';

import { useEffect, useState } from 'react';

export const BackgroundImage = () => {
  const [blurIntensity, setBlurIntensity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate blur intensity based on scroll position
      // At the top (scrollY = 0), blurIntensity = 0
      // As user scrolls down, blurIntensity increases
      const maxBlur = 6; // Maximum blur in pixels
      
      const progress = Math.min(scrollY / windowHeight, 1);
      setBlurIntensity(progress * maxBlur);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed inset-0 -z-10"
      style={{
        backgroundImage: 'url(/jimmy-woo-_qdXYJoE3HU-unsplash.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        filter: `blur(${blurIntensity}px)`,
        transition: 'filter 0.1s ease-out'
      }}
    >
      {/* Gray overlay that increases with scroll */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${blurIntensity * 0.1})`,
          transition: 'background-color 0.1s ease-out'
        }}
      />
    </div>
  );
}; 