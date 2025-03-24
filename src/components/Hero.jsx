import { useEffect, useState, useRef } from "react";
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
  const imageRef = useRef(null);
  
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
      color: "text-neutral-400 hover:text-pink-500",
      label: "Follow me on Instagram"
    },
    { 
      name: "Twitter",
      Icon: Twitter, 
      href: "https://twitter.com/karanupd012", 
      color: "text-neutral-400 hover:text-blue-500",
      label: "Follow me on Twitter"
    },
    { 
      name: "LinkedIn",
      Icon: Linkedin, 
      href: "https://linkedin.com/in/karanupd12", 
      color: "text-neutral-400 hover:text-blue-600",
      label: "Connect with me on LinkedIn"
    },
    { 
      name: "GitHub",
      Icon: Github, 
      href: "https://github.com/karanupd12", 
      color: "text-neutral-400 hover:text-neutral-100",
      label: "See my projects on GitHub"
    },
    { 
      name: "Email",
      Icon: Mail, 
      href: "mailto:karanupd12@gmail.com", 
      color: "text-neutral-400 hover:text-red-500",
      label: "Send me an email"
    }
  ];

  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen text-neutral-100 flex items-center justify-center p-4 md:p-8 lg:p-12 overflow-hidden relative"
      aria-label="Hero Section"
    >
      
      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="flex flex-col-reverse md:grid md:grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center">
          {/* Image column */}
          <motion.div 
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            className="w-full lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square overflow-hidden group">
              {/* Animated border gradient */}
              <div className="absolute inset-0 rounded-xl z-10" />
              
              <div className="absolute inset-[3px] rounded-xl overflow-hidden">
                <Image 
                  src="/assets/karan2.jpg" 
                  alt="Karan Upadhyay" 
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  quality={100}
                  priority
                />
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              />
            </div>
          </motion.div>
          
          {/* Content column - Keeping original button styles */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-8 md:space-y-10"
          >
            {/* Designation with smooth transitions */}
            <div className="h-6">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentDesignation}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl md:text-2xl font-medium text-blue-500 mb-2 tracking-wider"
                >
                  {designations[currentDesignation]}
                </motion.h2>
              </AnimatePresence>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-400 mt-3 rounded-full" />
            </div>
            
            {/* Name */}
            <motion.div variants={itemVariants}>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
                Karan 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-400">Upadhyay</span>
              </h1>
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-neutral-300 max-w-2xl leading-relaxed"
            >
              Specializing in <strong className="text-blue-400">software development</strong> and <strong className="text-blue-400">Decentralized solutions</strong>. <br/>
              "I turn tea bags to blocks and Coffee into Smart Contracts."
            </motion.p>
            
            {/* Action buttons - keeping original style */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Link 
                href="#projects" 
                className="group px-7 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:scale-105 duration-300"
                aria-label="Explore My Work"
              >
                Explore My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/assets/resume.pdf" 
                download="Karan_Upadhyay_Resume.pdf"
                className="px-5 py-3 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-medium rounded-lg flex items-center justify-center gap-2 hover:scale-105 duration-300"
                aria-label="Download Resume"
              >
                <Download className="w-5 h-5" />
                Resume
              </Link>
            </motion.div>
            
            {/* Social links */}
            <motion.div 
              variants={itemVariants}
              className="hidden md:flex gap-8"
            >
              {socialLinks.map(({ name, Icon, href, color, label }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className={`${color} transition-colors duration-300`}
                  aria-label={label}
                >
                  <Icon className="w-6 h-6 md:w-7 md:h-7" />
                  <span className="sr-only">{name}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;