import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import {  
  User, 
  FolderCode,
  Code, 
  Layers, 
  Send, 
  Menu, 
  X,
  ChevronUp
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const navItems = [
    { name: "About Me", icon: User, href: "#about" },
    { name: "Skills", icon: Code, href: "#skills" },
    { name: "Projects", icon: FolderCode, href: "#projects" },
    { name: "Experience", icon: Layers, href: "#experience" },
    { name: "Contact", icon: Send, href: "#footer" }
  ];

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Hide/show navbar on scroll
    const direction = latest > lastScrollY.current ? "down" : "up";
    
    if (direction === "down" && latest > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    // Calculate scroll progress
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (latest / docHeight) * 100;
    setScrollProgress(Math.min(scrollPercent, 100));

    lastScrollY.current = latest;
  });

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const containerVariants = {
    hidden: { 
      opacity: 0, 
      y: -50,
      transition: { duration: 0.3 }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 120,
        damping: 15
      }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom) => ({
      opacity: 1, 
      x: 0,
      transition: { 
        delay: custom * 0.1,
        type: "spring",
        stiffness: 300
      }
    })
  };
  
  const backToTopVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: "#525252", // neutral-600
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: {
      scale: 0.9
    }
  };

  return (
    <>
      <motion.nav 
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="fixed top-0 left-0 right-0 z-50 w-full px-4 py-2 transition-all duration-300"
      >
        {/* Scroll Progress Indicator */}
        <motion.div 
          style={{ 
            width: `${scrollProgress}%`,
            scaleX: 1,
            transformOrigin: 'left center'
          }}
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-neutral-600 via-neutral-500 to-neutral-400 z-50"
        />

        <div className="max-w-4xl mx-auto">
          <div className="bg-neutral-900/70 backdrop-blur-xl border border-neutral-800/70 shadow-2xl md:rounded-full">
            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-center items-center space-x-8 py-3 px-6">
              <Link 
                href="#" 
                className="flex items-center space-x-2 text-neutral-200 hover:text-white group transition-colors mr-2"
              >
              </Link>
              
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={menuItemVariants}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                >
                  <Link 
                    href={item.href} 
                    className="flex items-center space-x-2 text-neutral-400 hover:text-white group transition-colors"
                  >
                    <item.icon 
                      className="w-4 h-4 text-neutral-500 group-hover:text-neutral-200 transition-colors" 
                    />
                    <span className="text-sm font-medium">{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex justify-between items-center p-4">
              <motion.button 
                onClick={toggleMenu}
                whileTap={{ scale: 0.9 }}
                className="text-neutral-300 focus:outline-none"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden"
                >
                  <div className="flex flex-col p-4 space-y-4">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={index}
                        variants={menuItemVariants}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                      >
                        <Link 
                          href={item.href} 
                          onClick={toggleMenu}
                          className="flex items-center space-x-3 text-neutral-300 hover:text-white group"
                        >
                          <item.icon 
                            className="w-5 h-5 text-neutral-500 group-hover:text-neutral-200" 
                          />
                          <span>{item.name}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>
      
      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover="hover"
        whileTap="tap"
        variants={backToTopVariants}
        className="fixed bottom-6 right-6 z-50 bg-neutral-800/80 hover:bg-neutral-700 text-white p-3 rounded-full shadow-lg backdrop-blur-sm border border-neutral-700/50"
        aria-label="Back to top"
      >
        <ChevronUp className="w-5 h-5" />
      </motion.button>
    </>
  );
};

export default Navbar;