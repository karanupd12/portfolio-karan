import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { User, FolderCode, Code, Layers, Send, Menu, X, ChevronUp } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("about");
  const lastScrollY = useRef(0);

  // Navigation items configuration
  const navItems = [
    { name: "About", icon: User, href: "#about" },
    { name: "Skills", icon: Code, href: "#skills" },
    { name: "Projects", icon: FolderCode, href: "#projects" },
    { name: "Experience", icon: Layers, href: "#experience" },
    { name: "Contact", icon: Send, href: "#footer" }
  ];

  // Handle scroll
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    // Auto-hide navbar on scroll down
    setIsVisible(latest <= lastScrollY.current || latest < 100 || isOpen);
    
    // Update scroll progress indicator
    const scrollPercent = (latest / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    setScrollProgress(Math.min(scrollPercent, 100));
    
    // Update active section 
    navItems.forEach(item => {
      const section = document.querySelector(item.href);
      if (section && section.getBoundingClientRect().top < 200 && section.getBoundingClientRect().bottom > 200) {
        setActiveSection(item.href.substring(1));
      }
    });
    
    lastScrollY.current = latest;
  });

  return (
    <>
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -20, opacity: isVisible ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 right-0 z-50 w-full px-4 py-3"
      >
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden bg-neutral-800 backdrop-blur-md border border-neutral-700 shadow-lg rounded-full">
            {/* Progress bar */}
            <motion.div 
              style={{ width: `${scrollProgress}%` }}
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-neutral-500 to-white"
            />

            {/* Desktop menu */}
            <div className="hidden md:flex items-center justify-between px-6 py-2">
              <Link href="#" className="text-white-500 font-thin tracking-wider">@karanupd12</Link>
              
              <div className="flex space-x-6">
                {navItems.map((item, index) => (
                  <Link 
                    key={index}
                    href={item.href}
                    className="relative group py-2"
                  >
                    <div className="flex items-center space-x-2">
                      <item.icon className={`w-4 h-4 ${activeSection === item.href.substring(1) ? 'text-white' : 'text-neutral-500 group-hover:text-neutral-300'}`} />
                      <span className={`text-sm ${activeSection === item.href.substring(1) ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-200'}`}>
                        {item.name}
                      </span>
                    </div>
                    
                    {/* Active indicator */}
                    {activeSection === item.href.substring(1) && (
                      <motion.div 
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
                      />
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu toggle */}
            <div className="md:hidden flex justify-between items-center p-3">
              <Link href="#hero" className="text-white font-thin tracking-wider">PORTFOLIO</Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full bg-neutral-800 text-white"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-16 left-5 right-5 z-40 bg-neutral-700 backdrop-blur-md border-t border-b rounded-xl border-neutral-800 md:hidden"
          >
            <div className="max-w-4xl mx-auto p-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 p-3 my-1 rounded ${
                      activeSection === item.href.substring(1) ? 'bg-neutral-800 text-white' : 'text-neutral-300'
                    }`}
                  >
                    <item.icon size={18} />
                    <span>{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Back to top button */}
      <AnimatePresence>
        {scrollProgress > 20 && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-30 p-2 rounded-full bg-neutral-800/90 border border-neutral-700/50 text-white shadow-lg"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;