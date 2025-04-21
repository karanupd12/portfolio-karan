import React, { useState, useEffect } from "react";
import skillsDetails from "../data/skillsDetails";
import achievementDetails from "../data/achievementDetails";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaTrophy, FaAward, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.1,
    rootMargin: "100px 0px" 
  });
  const [isClient, setIsClient] = useState(false);

  // Safely handle client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Optimized variants 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.05,
        duration: 0.3
      },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 70, 
        damping: 12,
        duration: 0.4,
      },
    },
  };

  const skillIconVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 8,
      }
    }
  };

  const tooltipVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.2,
      }
    },
    exit: { 
      opacity: 0, 
      y: 5,
      transition: {
        duration: 0.1,
      }
    }
  };

  const getAchievementIcon = (title) => {
    switch (title) {
      case "Hackathon Success":
        return <FaAward className="text-xl text-white" />;
      case "Project Experience":
        return <FaLaptopCode className="text-xl text-white" />;
      case "Coding Proficiency":
        return <FaCode className="text-xl text-white" />;
      case "Academic Excellence":
        return <FaGraduationCap className="text-xl text-white" />;
      default:
        return <FaTrophy className="text-xl text-white" />;
    }
  };

  // Card color themes
  const cardThemes = [
    {
      gradientFrom: "from-purple-600",
      gradientTo: "to-indigo-600",
      accentBg: "bg-purple-500", 
      iconBg: "bg-purple-500/20",
      hoverBorder: "hover:border-purple-400/50"
    },
    {
      gradientFrom: "from-blue-600",
      gradientTo: "to-cyan-600",
      accentBg: "bg-blue-500",
      iconBg: "bg-blue-500/20",
      hoverBorder: "hover:border-blue-400/50"
    },
    {
      gradientFrom: "from-emerald-600",
      gradientTo: "to-green-600",
      accentBg: "bg-emerald-500",
      iconBg: "bg-emerald-500/20",
      hoverBorder: "hover:border-green-400/50"
    },
    {
      gradientFrom: "from-orange-600",
      gradientTo: "to-amber-600",
      accentBg: "bg-orange-500",
      iconBg: "bg-orange-500/20",
      hoverBorder: "hover:border-orange-400/50"
    }
  ];

  return (
    <div
      id="skills"
      className="min-h-screen text-white py-12 px-4 sm:px-6 md:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
              Technical
            </span>
            {" "}
            <span className="text-neutral-200">Expertise</span>
          </h2>
          <motion.div 
            className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <p className="text-neutral-300 max-w-xl mx-auto text-base md:text-lg font-light">
            Specialized in full-stack development with extensive experience in
            Web2 and Web3 technologies
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-8"
        >
          {/* Skills Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skillsDetails.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-xl p-6 shadow-lg border border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 backdrop-blur-sm relative overflow-hidden group"
              >
                {/* Subtle glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                <div className="relative">
                  <div className="flex items-center space-x-3 mb-5">
                    <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 p-2 rounded-lg shadow-inner">
                      <FaCode className="text-xl text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {category.category}
                    </h3>
                  </div>

                  {/* Skills grid with tooltips */}
                  <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 gap-3">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        className="relative flex flex-col items-center"
                        variants={skillIconVariants}
                        whileHover="hover"
                        onMouseEnter={() => setHoveredSkill({
                          name: skill.name,
                          index: `${index}-${i}`,
                        })}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        {/* Skill icon */}
                        <div className="bg-slate-100 p-2 rounded-lg flex items-center justify-center shadow-md hover:border-blue-500/50 transition-all duration-300 w-10 h-10">
                          <img
                            src={skill.imageSrc}
                            alt={skill.name}
                            className="w-6 h-6 object-contain"
                            loading="lazy"
                          />
                        </div>
                        
                        {/* Tooltip */}
                        <AnimatePresence>
                          {hoveredSkill && hoveredSkill.index === `${index}-${i}` && (
                            <motion.div
                              variants={tooltipVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              className="absolute z-10 -top-10 bg-neutral-800 text-white text-xs py-1 px-2 rounded shadow-lg whitespace-nowrap border border-neutral-700/50 backdrop-blur-sm"
                            >
                              {skill.name}
                              <div className="absolute w-2 h-2 bg-neutral-800 rotate-45 -bottom-1 left-1/2 transform -translate-x-1/2 border-r border-b border-neutral-700/50"></div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievement Section */}
          <div className="mt-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 p-2 rounded-lg shadow-inner">
                <FaTrophy className="text-xl text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Achievements & Contributions
              </h3>
            </div>

            {/* Pre-render CountUp*/}
            <div ref={ref} className="hidden"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {achievementDetails.map((achievement, index) => {
                const theme = cardThemes[index % cardThemes.length];
                const Icon = () => getAchievementIcon(achievement.title);
                
                return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.3)",
                    transition: { duration: 0.2 }
                  }}
                  className={`bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700 ${theme.hoverBorder} transition-all duration-300 shadow-lg relative`}
                >
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-lg"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-lg"></div>
                  
                  {/* Colorful top banner with icon */}
                  <div className={`bg-gradient-to-r ${theme.gradientFrom} ${theme.gradientTo} py-3 px-4 flex justify-between items-center`}>
                    <div className="flex items-center space-x-3">
                      <div className="bg-white/10 p-2 rounded-full">
                        <Icon />
                      </div>
                      <div className="text-sm text-white/80 uppercase tracking-wider font-medium">
                        {achievement.metric || "Projects"}
                      </div>
                    </div>
                    
                    {/* Optimized CountUp*/}
                    <div className="text-3xl font-bold text-white">
                      {isClient && inView && (
                        <CountUp
                          start={0}
                          end={achievement.count}
                          duration={1.5} 
                          delay={0.2} 
                          decimals={achievement.count % 1 !== 0 ? 1 : 0}
                          suffix="+"
                          useEasing={true}
                          redraw={false} 
                        />
                      )}
                      {(!isClient || !inView) && (
                        <span>{achievement.count}+</span> 
                      )}
                    </div>
                  </div>
                  
                  {/* Content area */}
                  <div className="p-5 relative">
                    <h4 className="text-lg font-semibold mb-3 text-white">
                      {achievement.title}
                    </h4>
                    
                    <ul className="space-y-2 text-sm text-neutral-300">
                      {achievement.description.slice(0, 3).map((detail, i) => (
                        <li
                          key={i}
                          className="flex items-start"
                        >
                          <span className={`text-${theme.accentBg.split('-')[1]}-400 mr-2 flex-shrink-0 mt-0.5`}>•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Visual accent */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 ${theme.accentBg}/30`}></div>
                  </div>
                </motion.div>
              )})}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;