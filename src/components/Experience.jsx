import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  FaBriefcase, 
  FaCalendarAlt, 
  FaCertificate,
  FaTools,
  FaChevronRight,
  FaQuoteLeft
} from "react-icons/fa";
import Link from "next/link";
import { experienceDetails } from "../data/experienceDetails";

const Experience = () => {
  const sectionRef = useRef(null);
  
  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-cente text-white py-16 sm:py-20 px-4 md:px-8 relative overflow-hidden"
    >
      
      {/* Subtle Grid Background */}
      <motion.div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="w-full h-full bg-neutal-950"/>
      </motion.div>
      
      <div className="max-w-7xl w-full relative z-10">
        {/* Header with animated highlight */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="inline-block relative">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
                Professional
              </span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-indigo-500"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
            {" "}
            <span className="text-neutral-200">Journey</span>
          </motion.h2>
          <motion.p 
            className="text-neutral-400 max-w-xl mx-auto text-sm sm:text-base md:text-lg font-light px-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Building tomorrow's solutions across the digital landscape
          </motion.p>
        </motion.div>
        
        {/* Timeline View */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Vertical Timeline Line - Responsive positioning */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-12 md:left-20 lg:left-1/2 w-px bg-gradient-to-b from-transparent via-blue-300 to-transparent"></div>
          
          {experienceDetails.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative mb-10 sm:mb-16 last:mb-0"
            >
              
              {/* Year Label - Responsive positioning and sizing */}
              <div className="absolute top-0 left-0 sm:left-[calc(0%)] md:left-[calc(0%)] lg:left-[calc(50%-120px)] 
                  text-blue-400 font-bold text-xs sm:text-sm border border-blue-500/20 rounded-full
                  bg-neutral-900/80 backdrop-blur-sm py-1 px-2 sm:px-3 z-10">
                {exp.duration.split(' - ')[0]}
              </div>
              
              {/* Content Card */}
              <div className={`ml-10 sm:ml-20 md:ml-32 lg:ml-0
                ${index % 2 === 0 ? 'lg:mr-[calc(50%+40px)]' : 'lg:ml-[calc(50%+40px)]'}
                bg-neutral-900 border border-neutral-800 rounded-lg p-4 sm:p-5
                hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/10 mt-6 sm:mt-0`}
              >
                <h3 className="text-lg sm:text-xl font-semibold text-white">{exp.role}</h3>
                <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                  <span className="text-blue-400 text-sm sm:text-base">{exp.company}</span>
                </div>
                
                <p className="text-neutral-300 text-xs sm:text-sm mb-3 sm:mb-4">
                  {exp.description}
                </p>
                
                {/* Technologies In Timeline View */}
                <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-2 sm:mb-3">
                  {exp.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="px-1.5 sm:px-2 py-0.5 bg-neutral-800 text-neutral-300 text-[10px] sm:text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                  {exp.technologies.length > 3 && (
                    <span className="px-1.5 sm:px-2 py-0.5 bg-neutral-800 text-neutral-400 text-[10px] sm:text-xs rounded-full">
                      +{exp.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                {/* Certificate */}
                {exp.certificate && (
                  <Link 
                    href={exp.certificate} 
                    target="_blank"
                    className="inline-flex items-center space-x-1 text-indigo-400 hover:text-indigo-300 transition-colors duration-300 text-[10px] sm:text-xs group/link"
                  >
                    <FaCertificate size={10} className="text-amber-400" />
                    <span className="group-hover/link:underline">Certificate</span>
                    <FaChevronRight size={8} className="group-hover/link:translate-x-0.5 transition-transform duration-300" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;