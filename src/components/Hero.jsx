import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Twitter, Linkedin, Github, Mail, ArrowRight, Download, } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';

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
      color: "text-pink-500",
    },
    { 
      name: "Twitter",
      Icon: Twitter, 
      href: "https://twitter.com/karanupd012", 
      color: "text-blue-500",
    },
    { 
      name: "LinkedIn",
      Icon: Linkedin, 
      href: "https://linkedin.com/in/karanupd12", 
      color: "text-blue-600",
    },
    { 
      name: "GitHub",
      Icon: Github, 
      href: "https://github.com/karanupd12", 
      color: "text-neutral-300",
    },
    { 
      name: "LeetCode",
      Icon: SiLeetcode, 
      href: "https://leetcode.com/u/karanupd12/", 
      color: "text-orange-500",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 1, 
        ease: "easeInOut",
        delayChildren: 0.3,
        staggerChildren: 0.2
      }}
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b"></div>

      {/* Content Container */}
      <div className="relative z-20 w-full px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="text-white md:space-y-3 text-center md:text-left">

            {/* Designation */}
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentDesignation}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4 text-xl md:text-2xl font-light tracking-widest uppercase text-blue-400"
              >
                {designations[currentDesignation]}
              </motion.h2>
            </AnimatePresence>

            <span className="mb-3 text-xl md:text-2xl font-light text-neutral-300">Hi There, I'm</span>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl sm:text-6xl md:text-6xl lg:text-8xl font-black leading-tight tracking-tight relative"
            >

              <span className="mb-2 block text-transparent bg-clip-text bg-white">
                KARAN UPADHYAY
              </span>

            </motion.h1>

            {/* Quote */}
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-3 text-base sm:text-lg md:text-xl font-light max-w-2xl text-neutral-300 mx-auto md:mx-0"
            >
            "From a centralized past to a decentralized future, I build pathways where innovation and precision converge"
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className=" mb-3 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6 pt-4"
            >
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
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex gap-4 justify-center md:justify-start space-x-4 sm:space-x-6 pt-8"
            >
              {socialLinks.map(({ name, Icon, href, color }) => (
                <Link
                  key={name}
                  href={href}
                  target="_blank"
                  className={`${color} hover:scale-125 transition-all duration-300`}
                >
                  <Icon className="size-6 sm:size-6" />
                </Link>
              ))}
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex items-center justify-center md:justify-end"
          >
            <div className="relative w-72 sm:w-96 md:w-[500px] aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/assets/karan2.jpg" alt="Karan Upadhyay" fill sizes="(max-width: 768px) 256px, (max-width: 1200px) 448px, 576px" priority quality={100} className="object-cover object-center hover:scale-105 transition-transform duration-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;