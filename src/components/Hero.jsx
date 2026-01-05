import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Instagram, 
  Twitter, 
  Linkedin, 
  Github, 
  Mail, 
  ArrowRight, 
  Download
} from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';

const Hero = () => {
  const designations = [
    "Full Stack Developer",
    "Java | Spring Boot | Microservices", 
    "DSA | System Design"
  ];
  
  const [currentDesignation, setCurrentDesignation] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentDesignation((prev) => (prev + 1) % designations.length);
    }, 3500);
    
    return () => clearInterval(interval);
  }, []);
  
  const socialLinks = [
    { 
      name: "Instagram",
      Icon: Instagram, 
      href: "https://instagram.com/krn_0twelve", 
      color: "text-gray-400 hover:text-white"
    },
    { 
      name: "Twitter",
      Icon: Twitter, 
      href: "https://twitter.com/karanupd012", 
      color: "text-gray-400 hover:text-white"
    },
    { 
      name: "LinkedIn",
      Icon: Linkedin, 
      href: "https://linkedin.com/in/karanupd12", 
      color: "text-gray-400 hover:text-white"
    },
    { 
      name: "GitHub",
      Icon: Github, 
      href: "https://github.com/karanupd12", 
      color: "text-gray-400 hover:text-white"
    },
    { 
      name: "LeetCode",
      Icon: SiLeetcode, 
      href: "https://leetcode.com/u/karanupd12/", 
      color: "text-gray-400 hover:text-white"
    },
  ];

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.1
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3
      }
    }
  };

  const designationVariants = {
    enter: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -10,
      transition: { duration: 0.2, ease: "easeIn" }
    },
    initial: { 
      opacity: 0, 
      y: 10
    }
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      id="home"
      className="relative min-h-screen w-full overflow-hidden"
    >

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-3xl" />

      {/* Main Container */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-16 min-h-[85vh] items-center">
            
            {/* Text Content - Left Side */}
            <div className="lg:col-span-7 xl:col-span-6 space-y-6 sm:space-y-8 text-center lg:text-left">
              
              {/* Designation Badge */}
              <motion.div variants={itemVariants} className="relative h-8 sm:h-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentDesignation}
                    variants={designationVariants}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    className="absolute inset-0 flex items-center justify-center lg:justify-start"
                  >
                    <span className="text-xs sm:text-sm font-medium tracking-[0.15em] uppercase text-green-600 bg-gray-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md backdrop-blur-sm">
                      {designations[currentDesignation]}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Main Title */}
              <motion.h1 
                variants={titleVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-[-0.01em] text-white"
              >
                <div className="block">KARAN</div>
                <div className="block text-gray-400">UPADHYAY</div>
              </motion.h1>

              {/* Quote */}
              <motion.p 
                variants={itemVariants}
                className="text-base sm:text-lg md:text-xl lg:text-xl font-light leading-relaxed text-gray-300 max-w-2xl mx-auto lg:mx-0"
              >
                Final-year engineer from Delhi, building decentralized apps and AI solutions that make the process just as cool as the product.
              </motion.p>

              {/* Action Buttons */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 sm:pt-4"
              >
                <Link
                  href="#projects"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base text-white font-medium transition-all duration-300 hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                >
                  View Projects
                  <ArrowRight className="size-4 sm:size-5 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/assets/resume.pdf"
                  download
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-gray-700 bg-gray-900/50 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base text-gray-300 font-medium transition-all duration-300 hover:border-gray-600 hover:bg-gray-800/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                >
                  Resume
                  <Download className="size-4 sm:size-5" />
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                variants={itemVariants}
                className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-4 sm:pt-8"
              >
                {socialLinks.map(({ name, Icon, href, color }) => (
                  <Link
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={name}
                    className={`${color} p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:bg-gray-800/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]`}
                  >
                    <Icon className="size-5 sm:size-6" />
                  </Link>
                ))}
                <Link
                  href="mailto:karanupd12@gmail.com"
                  aria-label="Email"
                  className="text-gray-400 hover:text-white p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:bg-gray-800/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                >
                  <Mail className="size-5 sm:size-6" />
                </Link>
              </motion.div>
            </div>

            {/* Image - Right Side */}
            <motion.div 
              variants={imageVariants} 
              className="lg:col-span-5 xl:col-span-6 flex items-center justify-center lg:justify-end order-first lg:order-last"
            >
              <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl aspect-square">
                <div className="relative w-full h-full overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-900 shadow-2xl shadow-black/20 border border-gray-800">
                  <Image
                    src="/assets/karan2.jpg"
                    alt="Karan Upadhyay - Professional Developer"
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 40vw"
                    priority
                    quality={95}
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
