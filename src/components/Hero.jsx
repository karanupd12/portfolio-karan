import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Twitter, Linkedin, Github, Mail, ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const designations = [
    "Full Stack Developer",
    "Smart Contract Developer", 
    "Web3 Enthusiast", 
    "NLP | DeFi | DAOs"
  ];
  
  const [currentDesignation, setCurrentDesignation] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDesignation((prev) => (prev + 1) % designations.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  const socialLinks = [
    { 
      name: "Instagram",
      Icon: Instagram, 
      href: "https://instagram.com/krn_0twelve", 
      color: "text-white hover:text-pink-500",
    },
    { 
      name: "Twitter",
      Icon: Twitter, 
      href: "https://twitter.com/karanupd012", 
      color: "text-white hover:text-blue-500",
    },
    { 
      name: "LinkedIn",
      Icon: Linkedin, 
      href: "https://linkedin.com/in/karanupd12", 
      color: "text-white hover:text-blue-600",
    },
    { 
      name: "GitHub",
      Icon: Github, 
      href: "https://github.com/karanupd12", 
      color: "text-white hover:text-neutral-300",
    },
    { 
      name: "Email",
      Icon: Mail, 
      href: "mailto:karanupd12@gmail.com", 
      color: "text-white hover:text-red-500",
    }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-neutral-950 flex items-center justify-center overflow-hidden"
    >
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b"></div>

      {/* Content Container */}
      <div className="relative z-20 w-full px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-white space-y-4 sm:space-y-6 text-center md:text-left">
            {/* Animated Designation */}
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentDesignation}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-lg sm:text-xl md:text-2xl font-light tracking-widest uppercase text-blue-400"
              >
                {designations[currentDesignation]}
              </motion.h2>
            </AnimatePresence>

            {/* Massive Name */}
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-8xl font-black leading-tight tracking-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-400 to-blue-200">
                KARAN
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-400 to-blue-800">
                UPADHYAY
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-base sm:text-lg md:text-xl font-light max-w-2xl text-neutral-300 mx-auto md:mx-0">
              Transforming innovative ideas into cutting-edge digital solutions.
              Bridging the gap between imagination and technology.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
              <Link
                href="#projects"
                className="px-6 sm:px-8 py-2 sm:py-3 bg-blue-600 text-white text-sm sm:text-base font-semibold rounded-full hover:bg-blue-500 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                View Projects
                <ArrowRight className="group-hover:translate-x-2 transition-transform size-4 sm:size-5" />
              </Link>

              <Link
                href="/assets/resume.pdf"
                download
                className="px-6 sm:px-8 py-2 sm:py-3 border-2 border-white/30 text-white text-sm sm:text-base font-semibold rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                Download CV
                <Download className="ml-2 size-4 sm:size-5" />
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-4 sm:space-x-6 pt-6">
              {socialLinks.map(({ name, Icon, href, color }) => (
                <Link
                  key={name}
                  href={href}
                  target="_blank"
                  className={`${color} hover:scale-125 transition-all duration-300`}
                >
                  <Icon className="size-5 sm:size-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div className="flex items-center justify-center md:block">
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/karan2.jpg"
                alt="Karan Upadhyay"
                fill
                sizes="(max-width: 768px) 256px, (max-width: 1200px) 448px, 576px"
                priority
                quality={100}
                className="object-cover object-center hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;