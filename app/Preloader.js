'use client';
import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for actual page load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Adjust this time as needed - currently set to 4 seconds

    return () => clearTimeout(timer);
  }, []);

  // When loading is complete, fade out the preloader
  useEffect(() => {
    if (!loading) {
      document.body.style.overflow = 'auto'; // Enable scrolling when loaded
    } else {
      document.body.style.overflow = 'hidden'; // Disable scrolling while loading
    }
  }, [loading]);

  if (!loading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-1000 ${
        loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative w-4/5 md:w-3/5 lg:w-1/2 max-h-80vh">
        <video
          autoPlay
          muted
          playsInline
          loop
          className="w-full h-full object-contain"
        >
          <source src="/video/loading.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="absolute bottom-10 left-0 right-0 text-center">
        </div>
      </div>
    </div>
  );
};

export default Preloader;