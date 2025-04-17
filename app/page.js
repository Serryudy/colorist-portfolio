'use client';
import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import emailjs from '@emailjs/browser';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Preloader from './Preloader';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isMuted, setIsMuted] = useState(true);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const lutsRef = useRef(null);
  const luminoraRef = useRef(null);
  const contactRef = useRef(null);
  const threeCanvasRef = useRef(null);
  const sliderRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [formSubmitting, setFormSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });
  const formRef = useRef(null);

  const initialize2Checkout = () => {
    // This assumes you've added the 2Checkout library in your _document.js or via a script tag
    if (typeof window !== 'undefined' && window.TCO) {
      // Initialize 2Checkout with your seller ID
      window.TCO.loadPubKey('sandbox'); // Use 'production' for live environment
    }
  };

  // Handle form submission
const handlePaymentSubmit = (e) => {
  e.preventDefault();
  setFormSubmitting(true);
  
  // Submit the form to 2Checkout
  document.getElementById('2checkout-form').submit();
};

// Add useEffect to initialize 2Checkout when component mounts
useEffect(() => {
  initialize2Checkout();
}, []);

  useEffect(() => {
    // When the component mounts, start loading resources
    const resourcesLoaded = () => {
      // This function will be called when all critical resources are loaded
      setIsLoading(false);
    };

    // Check if the document is already loaded
    if (document.readyState === 'complete') {
      resourcesLoaded();
    } else {
      window.addEventListener('load', resourcesLoaded);
      
      // Fallback if the load event doesn't fire
      const timeoutId = setTimeout(resourcesLoaded, 5000);
      
      return () => {
        window.removeEventListener('load', resourcesLoaded);
        clearTimeout(timeoutId);
      };
    }
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });
    
    // Replace these with your actual IDs from EmailJS
    const serviceId = 'service_4piysfs';
    const templateId = 'template_6rk3nqi';
    const publicKey = 'Q3n_XvXa4EyXS8ePo';
    
    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
        setFormStatus({
          submitting: false,
          submitted: true,
          error: null
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        // Show success message for 5 seconds
        setTimeout(() => {
          setFormStatus(prev => ({ ...prev, submitted: false }));
        }, 5000);
      })
      .catch((error) => {
        setFormStatus({
          submitting: false,
          submitted: false,
          error: error.text
        });
      });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  
  // Handle slider functionality
  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };
  
  const handleSliderMove = (e) => {
    if (sliderRef.current) {
      const container = sliderRef.current;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const position = (x / rect.width) * 100;
      setSliderPosition(Math.max(0, Math.min(100, position)));
    }
  };

  //powergrade download handling
  const handleDownload = (filePath, fileName) => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName || filePath.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  //slider smoothing 
  const handleMouseMove = (e) => {
    const sliderRect = sliderRef.current.getBoundingClientRect();
    const newPosition = ((e.clientX - sliderRect.left) / sliderRect.width) * 100;
    setSliderPosition(Math.min(Math.max(0, newPosition), 100));
  };
  
  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  // Handle navigation and active section
  useEffect(() => {
    const sections = [
      { id: 'hero', ref: heroRef },
      { id: 'about', ref: aboutRef },
      { id: 'work', ref: workRef },
      { id: 'luts', ref: lutsRef },
      { id: 'luminora', ref: luminoraRef },
      { id: 'contact', ref: contactRef }
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        if (!section.ref.current) continue;
        
        const offsetTop = section.ref.current.offsetTop;
        const offsetHeight = section.ref.current.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Three.js setup
  useEffect(() => {
    if (!threeCanvasRef.current) return;
    
    // Register ScrollTrigger with GSAP
    gsap.registerPlugin(ScrollTrigger);
    
    // Initialize Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: threeCanvasRef.current,
      alpha: true,
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 5;
    
    // Create a stylized film strip with orange glow
    const filmStripGeometry = new THREE.PlaneGeometry(10, 0.8);
    const filmStripMaterial = new THREE.MeshBasicMaterial({
      color: 0xFF6B00,
      transparent: true,
      opacity: 0.5, // Reduced opacity to make content pop more
    });
    
    const filmStrips = [];
    for (let i = 0; i < 5; i++) {
      const strip = new THREE.Mesh(filmStripGeometry, filmStripMaterial);
      strip.position.y = i * 1.5 - 3;
      strip.rotation.x = Math.PI * 0.05;
      scene.add(strip);
      filmStrips.push(strip);
    }
    
    // Add some particle effects with reduced density
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 600; // Reduced particle count
    
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xFF6B00,
      transparent: true,
      opacity: 0.4, // Reduced opacity
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate particles slowly
      particlesMesh.rotation.y += 0.001;
      
      // Animate film strips
      filmStrips.forEach((strip, i) => {
        strip.position.x = Math.sin(Date.now() * 0.001 + i * 0.5) * 0.5;
      });
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Create GSAP animations for section transitions
    gsap.from('.hero-content', {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: 'power3.out',
    });
    
    // Enhanced animations with more dramatic effects
    gsap.fromTo('.about-title', 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        scrollTrigger: {
          trigger: '#about',
          start: 'top 80%',
        }
      }
    );
    
    gsap.fromTo('.about-content', 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: '#about',
          start: 'top 80%',
        }
      }
    );
    
    // Animations for Luminora section
    gsap.fromTo('.luminora-title', 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        scrollTrigger: {
          trigger: '#luminora',
          start: 'top 80%',
        }
      }
    );
    
    gsap.fromTo('.luminora-content', 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: '#luminora',
          start: 'top 80%',
        }
      }
    );
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      scene.clear();
    };
  }, []);

  // Scroll to section
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Preloader />
      <div className="bg-[#0A0A0A] text-white min-h-screen">
        <Head>
          <title>Color Grading Portfolio | Luminora PowerGrades</title>
          <meta name="description" content="Professional color grading, Luminora PowerGrades, LUTs, and footage" />
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet" />
        </Head>
        {/* Three.js Canvas Background - Z-index reduced */}
        <canvas
          ref={threeCanvasRef}
          className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-60"
        />
        {/* Navigation Bar - Enhanced contrast */}
        <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-black bg-opacity-60 backdrop-blur-md">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold text-[#FF6B00] drop-shadow-[0_0_8px_rgba(255,107,0,0.6)]">
                ColorCraft
              </div>
              <div className="hidden md:flex space-x-8">
                {['hero', 'about', 'work', 'luts', 'luminora', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`text-sm uppercase tracking-wider font-medium transition-colors duration-300 ${
                      activeSection === section
                        ? 'text-[#FF6B00] drop-shadow-[0_0_8px_rgba(255,107,0,0.6)]'
                        : 'text-gray-300 hover:text-[#FF6B00]'
                    }`}
                  >
                    {section === 'hero' ? 'Home' : section}
                  </button>
                ))}
              </div>
              <div className="md:hidden">
                <button className="text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
        {/* Hero Section - Enhanced with backdrop */}
        <section
          id="hero"
          ref={heroRef}
          className="min-h-screen flex items-center justify-center relative"
        >
          <div className="absolute inset-0 z-5 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>
          <div className="hero-content text-center z-10 px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">
              The Art of <span className="text-[#FF6B00] drop-shadow-[0_0_10px_rgba(255,107,0,0.8)]">Color Grading</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]  rounded-lg">
              Transforming ordinary footage into cinematic masterpieces through the power of color
            </p>
            <button
              onClick={() => scrollToSection('work')}
              className="px-8 py-3 bg-[#FF6B00] text-white rounded-full text-lg font-medium hover:bg-[#E36000] transition-colors duration-300 shadow-lg shadow-[#FF6B00]/30"
            >
              View My Work
            </button>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-8 h-8 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>
        {/* About Section - Enhanced with backdrop panel */}
        <section
          id="about"
          ref={aboutRef}
          className="min-h-screen flex items-center justify-center py-20 px-6 relative"
        >
          <div className="absolute inset-0 z-5 bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>
          <div className="container mx-auto z-10 relative">
            <h2 className="about-title text-4xl md:text-5xl font-bold mb-16 text-center drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">
              About <span className="text-[#FF6B00] drop-shadow-[0_0_10px_rgba(255,107,0,0.6)]">Me</span>
            </h2>
            <div className="about-content grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 bg-black/50 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <p className="text-lg text-white">
                A chromatic alchemist transforming light into emotion, with half a decade spent painting stories through spectral manipulation. Each project is a canvas where physics bows to poetry.
                </p>
                <p className="text-lg text-white">
                  My approach to color grading combines technical precision with artistic vision, creating distinctive looks that enhance storytelling and evoke emotion.
                </p>
                <p className="text-lg text-white">
                  I specialize in creating custom LUTs and PowerGrades that can instantly transform footage with a signature style while maintaining natural skin tones and balanced highlights.
                </p>
                <div className="pt-6 flex space-x-4">
                  <div className="flex flex-col items-center bg-[#1A1A1A]/80 p-3 rounded-lg">
                    <span className="text-4xl font-bold text-[#FF6B00] drop-shadow-[0_0_5px_rgba(255,107,0,0.6)]">50+</span>
                    <span className="text-sm text-gray-200">Projects</span>
                  </div>
                  <div className="flex flex-col items-center bg-[#1A1A1A]/80 p-3 rounded-lg">
                    <span className="text-4xl font-bold text-[#FF6B00] drop-shadow-[0_0_5px_rgba(255,107,0,0.6)]">30+</span>
                    <span className="text-sm text-gray-200">Custom LUTs</span>
                  </div>
                  <div className="flex flex-col items-center bg-[#1A1A1A]/80 p-3 rounded-lg">
                    <span className="text-4xl font-bold text-[#FF6B00] drop-shadow-[0_0_5px_rgba(255,107,0,0.6)]">15+</span>
                    <span className="text-sm text-gray-200">Awards</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-[#FF6B00]/30 to-[#FF6B00]/10 p-1 rounded-2xl shadow-lg shadow-[#FF6B00]/20">
                  <div className="bg-[#1A1A1A] rounded-2xl overflow-hidden">
                    <img
                      src="/images/pabasarafernando.png"
                      alt="Colorist at work"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#FF6B00] text-black p-4 rounded-lg font-medium shadow-lg">
                DaVinci Resolve 18 Alchemist
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Work Showcase Section */}
        <section
          id="work"
          ref={workRef}
          className="min-h-screen relative overflow-hidden"
        >
          <div className="absolute inset-0 z-10">
            <div className="w-full h-full bg-black relative">
              {/* Video with sound enabled */}
              <video
                autoPlay
                loop
                playsInline
                controls // Optional: adds playback controls
                className="w-full h-full object-cover"
              >
                <source src="/video/Color Grading Demo.mp4" type="video/mp4" />
                {/* Fallback text if video can't load */}
                <p className="text-2xl text-gray-400 absolute inset-0 flex items-center justify-center">
                  Your showcase video would play here
                </p>
              </video>
              {isMuted && (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <button
                    onClick={() => setIsMuted(false)}
                    className="bg-black/70 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-black/90 transition"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 6a7.975 7.975 0 015.657 2.343m0 0a7.975 7.975 0 010 11.314m-11.314 0a7.975 7.975 0 010-11.314m0 0a7.975 7.975 0 015.657-2.343" />
                    </svg>
                    Click to unmute
                  </button>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A0A0A] to-transparent h-64" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-20 p-8">
            <div className="container mx-auto">
              <div className="bg-black/70 backdrop-blur-md p-6 rounded-xl shadow-lg inline-block">
                <h2 className="text-4xl font-bold mb-4 drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">
                  My <span className="text-[#FF6B00] drop-shadow-[0_0_10px_rgba(255,107,0,0.6)]">Work</span>
                </h2>
                <p className="text-lg text-white max-w-2xl">
                  A collection of my finest color grading projects across film, commercial, and music video productions.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* LUTs & Downloads Section - Enhanced contrast */}
        <section
          id="luts"
          ref={lutsRef}
          className="min-h-screen py-20 px-6 relative"
        >
          <div className="absolute inset-0 z-5 bg-gradient-to-b from-black/80 to-black/50"></div>
          <div className="container mx-auto z-10 relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">
              Free <span className="text-[#FF6B00] drop-shadow-[0_0_10px_rgba(255,107,0,0.6)]">PowerGrade LUTs</span>
            </h2>
            <p className="text-lg text-white text-center max-w-2xl mx-auto mb-12 bg-black/50 p-4 rounded-lg backdrop-blur-sm">
              Download my professional color grading LUTs and transform your footage instantly.
              These are completely free for now, with premium options coming soon.
            </p>
      
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Cinematic Teal & Orange", downloads: "2.3k", src: "/images/tealandorange.jpg", file: "/downloads/luts/Orange&Teal_2.pexels-pixabay-275977.cube" },
                { name: "Moody Film Noir", downloads: "1.8k", src: "/images/moody.jpg", file: "/downloads/luts/Moody Film Noir_4.pexels-shukran-1573424.cube" },
                { name: "Natural Documentary", downloads: "1.5k", src: "/images/natural.jpg", file: "/downloads/luts/Moody Film Noir_4.pexels-shukran-1573424.cube" },
                { name: "Vintage Film Stock", downloads: "2.1k", src: "/images/vintage.jpg", file: "/downloads/luts/Vintage Film Stock_5.pexels-lucasfonseca-2157799.cube" },
                { name: "Vibrant Music Video", downloads: "1.9k", src: "/images/vibrant.jpg", file: "/downloads/luts/Vintage Film Stock_5.pexels-lucasfonseca-2157799.cube"},
                { name: "Desaturated Drama", downloads: "1.2k", src: "/images/desaturated.jpg", file: "/downloads/luts/Desaturated Drama_6.pexels-mali-142497.cube" }
              ].map((lut, index) => (
                <div key={index} className="bg-[#1A1A1A] rounded-xl overflow-hidden group shadow-lg shadow-black/50 hover:shadow-[#FF6B00]/20 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="">
                    <img
                      src={lut.src}
                      alt={lut.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full">
                        <button className="w-full py-2 bg-[#FF6B00] text-white rounded font-medium hover:bg-[#E36000] transition-colors duration-300 shadow-lg shadow-black/50" onClick={() => handleDownload(lut.file)}>
                          Download LUT
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-1">{lut.name}</h3>
                    <p className="text-sm text-gray-300">{lut.downloads} downloads</p>
                  </div>
                </div>
              ))}
            </div>
      
            <div className="mt-16 text-center">
              <p className="text-gray-300 mb-6">More premium LUTs coming soon</p>
              <button className="px-8 py-3 border-2 border-[#FF6B00] text-[#FF6B00] rounded-full text-lg font-medium hover:bg-[#FF6B00]/10 transition-colors duration-300 shadow-lg">
                Get notified when premium LUTs launch
              </button>
            </div>
          </div>
        </section>
        {/* NEW Luminora Section */}
        <section
          id="luminora"
          ref={luminoraRef}
          className="min-h-screen py-20 px-6 bg-[#080808] relative"
        >
          
          
          <div className="absolute inset-0 z-5 bg-gradient-to-b from-black/80 via-black/30 to-black/80"></div>
          <div className="container mx-auto z-10 relative">
            <div className="luminora-title mb-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">
                <span className="text-[#FF6B00] drop-shadow-[0_0_10px_rgba(255,107,0,0.6)]">Luminora</span> PowerGrade
              </h2>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto mt-4 bg-black/40 p-4 rounded-lg backdrop-blur-sm">
                My signature color system for professional filmmakers and content creators
              </p>
            </div>
      
            <div className="luminora-content max-w-6xl mx-auto">
              <div className="bg-black/50 backdrop-blur-md p-6 rounded-xl shadow-lg mb-12">
                <p className="text-lg text-white mb-6">
                  Luminora is my flagship PowerGrade system designed for filmmakers who want to achieve a premium cinematic look instantly. It preserves skin tones while providing dramatic depth and richness to your footage.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <div className="bg-[#1A1A1A] p-3 rounded-lg shadow-inner flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#FF6B00]"></div>
                    <span className="text-gray-200">Rich shadows</span>
                  </div>
                  <div className="bg-[#1A1A1A] p-3 rounded-lg shadow-inner flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#FF6B00]"></div>
                    <span className="text-gray-200">Balanced highlights</span>
                  </div>
                  <div className="bg-[#1A1A1A] p-3 rounded-lg shadow-inner flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#FF6B00]"></div>
                    <span className="text-gray-200">Natural skin tones</span>
                  </div>
                  <div className="bg-[#1A1A1A] p-3 rounded-lg shadow-inner flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#FF6B00]"></div>
                    <span className="text-gray-200">Cinematic atmosphere</span>
                  </div>
                </div>
              </div>
      
              {/* Before/After Slider */}
              <div className="mb-12">
                <h3 className="text-2xl font-medium mb-6 text-center">See the Luminora difference</h3>
                
                <div
                  ref={sliderRef}
                  className="relative h-96 rounded-xl overflow-hidden shadow-xl select-none"
                  onMouseDown={(e) => {
                    const sliderRect = e.currentTarget.getBoundingClientRect();
                    const newPosition = ((e.clientX - sliderRect.left) / sliderRect.width) * 100;
                    setSliderPosition(Math.min(Math.max(0, newPosition), 100));
                    document.addEventListener('mousemove', handleMouseMove);
                    document.addEventListener('mouseup', handleMouseUp);
                  }}
                  onTouchStart={(e) => {
                    const sliderRect = e.currentTarget.getBoundingClientRect();
                    const touch = e.touches[0];
                    const newPosition = ((touch.clientX - sliderRect.left) / sliderRect.width) * 100;
                    setSliderPosition(Math.min(Math.max(0, newPosition), 100));
                  }}
                  onTouchMove={(e) => {
                    const sliderRect = e.currentTarget.getBoundingClientRect();
                    const touch = e.touches[0];
                    const newPosition = ((touch.clientX - sliderRect.left) / sliderRect.width) * 100;
                    setSliderPosition(Math.min(Math.max(0, newPosition), 100));
                  }}
                >
                  {/* Before image */}
                  <div className="absolute inset-0 z-10 pointer-events-none">
                    <img
                      src="/images/before.jpg"
                      alt="Before color grading"
                      className="w-full h-full object-cover"
                      draggable="false"
                    />
                    <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Before
                    </div>
                  </div>
      
                  {/* After image with clip path */}
                  <div
                    className="absolute inset-0 z-20 transition-all duration-75 ease-out pointer-events-none"
                    style={{
                      clipPath: `inset(0 0 0 ${sliderPosition}%)`
                    }}
                  >
                    <img
                      src="/images/after.jpg"
                      alt="After color grading with Luminora"
                      className="w-full h-full object-cover"
                      draggable="false"
                    />
                    <div className="absolute top-4 right-4 bg-[#FF6B00] text-white px-3 py-1 rounded-full text-sm font-medium">
                      After Luminora
                    </div>
                  </div>
      
                  {/* Slider control */}
                  <div
                    className="absolute top-0 bottom-0 z-30 w-1 bg-white shadow-lg"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center cursor-grab active:cursor-grabbing"
                    >
                      <svg className="w-4 h-4 text-[#FF6B00]" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        <path d="M4.646 1.646a.5.5 0 0 0 0 .708L10.293 8 4.646 13.646a.5.5 0 0 0 .708.708l6-6a.5.5 0 0 0 0-.708l-6-6a.5.5 0 0 0-.708 0z"/>
                      </svg>
                    </div>
                  </div>
      
                  {/* Range input for mobile accessibility (alternative control) */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPosition}
                    onChange={(e) => setSliderPosition(Number(e.target.value))}
                    className="absolute bottom-4 left-0 right-0 mx-auto w-4/5 z-30 opacity-50 h-6 focus:outline-none"
                    style={{
                      WebkitTapHighlightColor: 'rgba(0,0,0,0)',
                      WebkitAppearance: 'none'
                    }}
                  />
                </div>
              </div>
              {/* Luminora Pro Section */}
              <div className="mt-24">
                <h3 className="text-3xl font-semibold mb-8 text-center">
                  <span className="text-[#FF6B00] drop-shadow-[0_0_10px_rgba(255,107,0,0.6)]">Luminora Pro</span> - Premium PowerGrade Suite
                </h3>
                
                <div className="max-w-lg mx-auto">
                  <div className="bg-gradient-to-br from-[#FF6B00]/30 to-purple-500/20 p-1 rounded-xl shadow-lg shadow-[#FF6B00]/20">
                    <div className="bg-[#1A1A1A] p-6 rounded-xl h-full">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold flex items-center gap-2">
                          <span className="text-[#FF6B00] text-2xl">🔥</span>
                          Luminora Pro PowerGrade Suite
                        </h3>
                        <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-bold">PREMIUM</span>
                      </div>
                      
                      <ul className="space-y-3 text-gray-200 mb-6">
                        <li className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          24 premium Hollywood-grade looks
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Advanced Pro ACES color pipeline
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Professional HDR compatibility
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Advanced camera-specific optimizations
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Premium grain and texture library
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          One-click tracking and masking tools
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Expert email support
                        </li>
                      </ul>
                      
                      <div className="text-3xl font-bold mb-4 flex items-end gap-2">
                        $30<span className="text-sm font-normal text-gray-400">/one-time purchase</span>
                      </div>
                      
                      <button
                        onClick={() => setShowPaymentModal(true)}
                        className="w-full py-3 bg-gradient-to-r from-[#FF6B00] to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity duration-300 shadow-lg"
                      >
                        Purchase Now
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-gray-400 text-sm max-w-md mx-auto">
                    Luminora Pro includes a 30-day money-back guarantee if you're not completely satisfied with your purchase.
                  </p>
                </div>
              </div>

              {/* Payment Modal with 2Checkout Form */}
              {showPaymentModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                  <div 
                    className="absolute inset-0 bg-black/70 backdrop-blur-sm" 
                    onClick={() => setShowPaymentModal(false)}
                  ></div>
                  <div className="bg-[#1A1A1A] rounded-xl p-6 md:p-8 w-full max-w-md relative z-10 shadow-xl border border-[#FF6B00]/30">
                    <button 
                      onClick={() => setShowPaymentModal(false)}
                      className="absolute right-4 top-4 text-gray-400 hover:text-white"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    
                    <h3 className="text-2xl font-bold mb-6 text-center">
                      Purchase <span className="text-[#FF6B00]">Luminora Pro</span>
                    </h3>
                    
                    {formSubmitting ? (
                      <div className="text-center py-8">
                        <div className="w-12 h-12 border-t-2 border-b-2 border-[#FF6B00] rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-gray-300">Processing your payment...</p>
                      </div>
                    ) : (
                      <div>
                        {/* Form to collect customer info before redirecting to 2Checkout */}
                        <form onSubmit={handlePaymentSubmit} className="space-y-4">
                          <div>
                            <label className="block text-gray-300 mb-2" htmlFor="name">Full Name</label>
                            <input
                              type="text"
                              id="name"
                              value={customerName}
                              onChange={(e) => setCustomerName(e.target.value)}
                              className="w-full bg-[#2A2A2A] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF6B00] transition-colors"
                              placeholder="John Doe"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-gray-300 mb-2" htmlFor="email">Email Address</label>
                            <input
                              type="email"
                              id="email"
                              value={customerEmail}
                              onChange={(e) => setCustomerEmail(e.target.value)}
                              className="w-full bg-[#2A2A2A] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF6B00] transition-colors"
                              placeholder="your@email.com"
                              required
                            />
                            <p className="text-gray-400 text-xs mt-1">Your PowerGrade will be sent to this email after purchase</p>
                          </div>
                          
                          <div className="bg-[#2A2A2A] p-4 rounded-lg">
                            <div className="flex justify-between mb-2">
                              <span className="text-gray-300">Luminora Pro PowerGrade</span>
                              <span className="text-white">$30.00</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-400">Includes lifetime access</span>
                            </div>
                          </div>
                          
                          <div className="pt-4">
                            <button
                              type="submit"
                              className="w-full py-3 bg-gradient-to-r from-[#FF6B00] to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity duration-300 shadow-lg"
                            >
                              Proceed to Payment
                            </button>
                            <p className="text-center text-gray-400 text-xs mt-4">
                              Secure payment processing by 2Checkout
                            </p>
                          </div>
                        </form>
                        
                        {/* Hidden 2Checkout Form - This will be submitted programmatically */}
                        <form
                          id="2checkout-form"
                          action="https://sandbox.2checkout.com/checkout/purchase" 
                          method="post"
                          className="hidden"
                        >
                          {/* Required 2Checkout Parameters */}
                          <input type="hidden" name="sid" value="YOUR_SELLER_ID" />
                          <input type="hidden" name="mode" value="2CO" />
                          <input type="hidden" name="li_0_type" value="product" />
                          <input type="hidden" name="li_0_name" value="Luminora Pro PowerGrade" />
                          <input type="hidden" name="li_0_price" value="30.00" />
                          <input type="hidden" name="li_0_quantity" value="1" />
                          <input type="hidden" name="li_0_tangible" value="N" />
                          <input type="hidden" name="li_0_product_id" value="luminora-pro" />
                          <input type="hidden" name="currency_code" value="USD" />
                          
                          {/* Customer details - These will be filled programmatically */}
                          <input type="hidden" name="card_holder_name" value={customerName} />
                          <input type="hidden" name="email" value={customerEmail} />
                          
                          {/* Return URLs */}
                          <input type="hidden" name="x_receipt_link_url" value={`${window.location.origin}/thank-you`} />
                          
                          {/* This identifies the purchase for your records */}
                          <input type="hidden" name="merchant_order_id" value={`LUMINORA-${Date.now()}`} />
                        </form>
                      </div>
                    )}
                  </div>
                </div>
              )}
              {/* free luminora */}	
              <div className="max-w-lg mx-auto">
                <div className="bg-gradient-to-br from-[#FF6B00]/20 to-[#FF6B00]/5 p-1 rounded-xl shadow-lg shadow-[#FF6B00]/20">
                  <div className="bg-[#1A1A1A] p-6 rounded-xl h-full">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold flex items-center gap-2">
                        <span className="text-[#FF6B00] text-2xl">⚡</span>
                        Luminora PowerGrade Suite
                      </h3>
                      <span className="bg-[#FF6B00] text-black text-xs px-2 py-1 rounded-full font-bold">FREE DOWNLOAD</span>
                    </div>
                    <ul className="space-y-2 text-gray-200 mb-6">
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#FF6B00]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        12 premium cinematic looks
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#FF6B00]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Advanced DaVinci Resolve nodes
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#FF6B00]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Skin tone protection tools
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#FF6B00]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Filmic saturation film emulation
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#FF6B00]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        High-end camera texture mapping
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#FF6B00]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Compatible with all major NLEs
                      </li>
                    </ul>
                    <div className="text-2xl font-bold mb-4">FREE<span className="text-sm font-normal text-gray-400">/unlimited access</span></div>
                    <button
                      onClick={() => handleDownload("/downloads/powergrade/LUMINORA.zip")}
                      className="w-full py-3 bg-[#FF6B00] text-white rounded-lg font-medium hover:bg-[#E36000] transition-colors duration-300 shadow-lg">
                      Download Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-16 text-center">
                <p className="text-gray-300 mb-6">Looking for a custom solution?</p>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 bg-transparent border-2 border-[#FF6B00] text-[#FF6B00] rounded-full text-lg font-medium hover:bg-[#FF6B00]/10 transition-colors duration-300"
                >
                  Contact me for custom solutions
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section
          id="contact"
          ref={contactRef}
          className="min-h-screen py-20 px-6 bg-[#0A0A0A] relative"
        >
          <div className="absolute inset-0 z-5 bg-gradient-to-b from-black/80 to-transparent"></div>
          <div className="container mx-auto z-10 relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">
              Get <span className="text-[#FF6B00] drop-shadow-[0_0_10px_rgba(255,107,0,0.6)]">In Touch</span>
            </h2>
      
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
              <div className="bg-black/50 backdrop-blur-md p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-gray-300 mb-2" htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#FF6B00] transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2" htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#FF6B00] transition-colors"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2" htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#FF6B00] transition-colors"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#FF6B00] transition-colors"
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>
      
                  {/* Hidden field for date */}
                  <input type="hidden" name="date" />
      
                  {formStatus.submitted && (
                    <div className="bg-green-500/20 border border-green-500 text-green-300 px-4 py-3 rounded">
                      Message sent successfully! We'll get back to you soon.
                    </div>
                  )}
      
                  {formStatus.error && (
                    <div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded">
                      Error: {formStatus.error}. Please try again.
                    </div>
                  )}
      
                  <button
                    type="submit"
                    disabled={formStatus.submitting}
                    className={`w-full py-3 text-white rounded-lg font-medium transition-colors duration-300 shadow-lg shadow-[#FF6B00]/20 ${
                      formStatus.submitting
                        ? 'bg-gray-500 cursor-not-allowed'
                        : 'bg-[#FF6B00] hover:bg-[#E36000]'
                    }`}
                  >
                    {formStatus.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
      
              <div className="space-y-8">
                <div className="bg-black/50 backdrop-blur-md p-6 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#FF6B00]/20 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-400">Email</p>
                        <p className="text-white">pabasaraf79@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-[#FF6B00]/20 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-400">Phone</p>
                        <p className="text-white">+94 78 1440 205</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-[#FF6B00]/20 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-400">Location</p>
                        <p className="text-white">Moratuwa, Colombo</p>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div className="bg-black/50 backdrop-blur-md p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-[#1A1A1A] p-3 rounded-full hover:bg-[#FF6B00]/20 transition-colors duration-300">
                      <svg className="w-6 h-6 text-[#FF6B00]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                      </svg>
                    </a>
                    <a href="#" className="bg-[#1A1A1A] p-3 rounded-full hover:bg-[#FF6B00]/20 transition-colors duration-300">
                      <svg className="w-6 h-6 text-[#FF6B00]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z"/>
                      </svg>
                    </a>
                    <a href="#" className="bg-[#1A1A1A] p-3 rounded-full hover:bg-[#FF6B00]/20 transition-colors duration-300">
                      <svg className="w-6 h-6 text-[#FF6B00]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
                      </svg>
                    </a>
                    <a href="#" className="bg-[#1A1A1A] p-3 rounded-full hover:bg-[#FF6B00]/20 transition-colors duration-300">
                      <svg className="w-6 h-6 text-[#FF6B00]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
                      </svg>
                    </a>
                  </div>
                </div>
      
                <div className="bg-black/50 backdrop-blur-md p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Monday - Friday</span>
                      <span className="text-white">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Saturday</span>
                      <span className="text-white">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Sunday</span>
                      <span className="text-white">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-black py-12 px-6">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <div className="text-2xl font-bold text-[#FF6B00] drop-shadow-[0_0_8px_rgba(255,107,0,0.6)]">
                  ColorCraft
                </div>
                <p className="text-gray-400 mt-2">Elevating visuals through cinematic color</p>
              </div>
              <div className="flex flex-wrap justify-center gap-8">
                {['Home', 'About', 'Work', 'LUTs', 'Luminora', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())}
                    className="text-gray-400 hover:text-[#FF6B00] transition-colors duration-300"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} ColorCraft. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300 text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300 text-sm">Terms of Service</a>
                <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300 text-sm">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <script src="https://www.2checkout.com/static/checkout/javascript/direct.min.js"></script>
    </div>
  );
}