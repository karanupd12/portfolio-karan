import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { User, FolderCode, Code, Layers, Send, Menu, X, ArrowUp } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const lastScrollY = useRef(0);

  const navItems = [
    { name: "About", icon: User, href: "#about" },
    { name: "Skills", icon: Code, href: "#skills" },
    { name: "Projects", icon: FolderCode, href: "#projects" },
    { name: "Experience", icon: Layers, href: "#experience" },
    { name: "Contact", icon: Send, href: "#footer" }
  ];

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest <= lastScrollY.current || latest < 100 || isOpen);
    setShowBackToTop(latest > 300); // Show button after scrolling 300px

    navItems.forEach(item => {
      const section = document.querySelector(item.href);
      if (section && section.getBoundingClientRect().top < 200 && section.getBoundingClientRect().bottom > 200) {
        setActiveSection(item.href.substring(1));
      }
    });

    lastScrollY.current = latest;
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -20, opacity: isVisible ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
        className="fixed top-3 left-0 right-0 z-50 px-4"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between px-4 py-2 bg-neutral-800/80 rounded-full backdrop-blur-sm">
            {/* Logo */}
            <Link href="#home" className="text-gray-300 text-md font-normal tracking-wide hover:text-white transition-colors">
              @karanupd12
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="group flex items-center space-x-1 px-2"
                >
                  <item.icon
                    className={`w-3.5 h-3.5 transition-colors ${
                      activeSection === item.href.substring(1)
                        ? 'text-gray-100'
                        : 'text-gray-500 group-hover:text-gray-300'
                    }`}
                  />
                  <span
                    className={`text-xs transition-colors ${
                      activeSection === item.href.substring(1)
                        ? 'text-gray-100'
                        : 'text-gray-500 group-hover:text-gray-300'
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md bg-transparent text-gray-300 hover:text-white"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="fixed top-16 left-4 right-4 z-50 bg-[#0d1117]/95 backdrop-blur-lg rounded-md border border-gray-700/20 md:hidden"
            >
              <div className="p-2">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 p-3 rounded-md ${
                      activeSection === item.href.substring(1)
                        ? 'text-white'
                        : 'text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    <item.icon size={16} />
                    <span className="text-sm">{item.name}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-neutral-800/80 backdrop-blur-sm text-gray-300 hover:text-white hover:bg-neutral-700/80 transition-colors shadow-lg"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
