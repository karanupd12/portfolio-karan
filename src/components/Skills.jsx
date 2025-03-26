import React, { useState, useEffect } from "react";
import skillsDetails from "../data/skillsDetails";
import achievementDetails from "../data/achievementDetails";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaTrophy, FaAward, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [isClient, setIsClient] = useState(false);
  const [flippedCards, setFlippedCards] = useState({});

  useEffect(() => {
    setIsClient(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        delayChildren: 0.2, 
        staggerChildren: 0.1 
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        duration: 0.5,
      },
    },
  };

  const skillIconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: i * 0.03,
      }
    }),
    hover: {
      scale: 1.15,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      }
    }
  };

  const getAchievementIcon = (title) => {
    switch (title) {
      case "Hackathon Success":
        return <FaAward className="text-3xl text-blue-400" />;
      case "Project Experience":
        return <FaLaptopCode className="text-3xl text-blue-400" />;
      case "Coding Proficiency":
        return <FaCode className="text-3xl text-blue-400" />;
      case "Academic Excellence":
        return <FaGraduationCap className="text-3xl text-blue-400" />;
      default:
        return <FaTrophy className="text-3xl text-blue-400" />;
    }
  };

  const handleCardClick = (index) => {
    setFlippedCards((prevFlippedCards) => ({
      ...prevFlippedCards,
      [index]: !prevFlippedCards[index],
    }));
  };

  return (
    <section
      id="skills"
      className="min-h-screen text-white py-12 sm:py-16 px-4 sm:px-6 md:px-8 relative overflow-hidden"
    >
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-3 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="inline-block relative">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
                Technical
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-indigo-500"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>{" "}
            <span className="text-neutral-200">Expertise</span>
          </motion.h2>
          <motion.p
            className="text-neutral-300 max-w-xl mx-auto text-base md:text-lg font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Specialized in full-stack development with extensive experience in
            Web2 and Web3 technologies
          </motion.p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="space-y-8 sm:space-y-12"
        >
          {/* Skills Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
          >
            {skillsDetails.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border border-neutral-700 bg-gradient-to-br from-neutral-700/70 to-neutral-800/9 backdrop-blur-sm relative overflow-hidden group"
              >
                {/* Subtle glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
                
                <div className="relative">
                  <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                    <div className="bg-gradient-to-br from-red-500/20 to-indigo-500/20 p-2 rounded-lg shadow-inner">
                      <FaCode className="text-xl sm:text-2xl text-blue-400" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      {category.category}
                    </h3>
                  </div>

                  {/* skill grid */}
                  <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 justify-items-center">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        className="relative"
                        variants={skillIconVariants}
                        custom={i}
                        whileHover="hover"
                        onMouseEnter={() =>
                          setHoveredSkill({
                            name: skill.name,
                            index: `${index}-${i}`,
                          })
                        }
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        {/* skill icons  */}
                        <div className="bg-neutral-300 p-2 rounded-lg flex items-center justify-center shadow-lg border border-neutral-700/50 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm">
                          <img
                            src={skill.imageSrc}
                            alt={skill.name}
                            className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                          />
                        </div>

                        {/* tooltip */}
                        <AnimatePresence>
                          {hoveredSkill &&
                            hoveredSkill.index === `${index}-${i}` && (
                              <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 5 }}
                                transition={{ duration: 0.2 }}
                                className="absolute z-10 -top-8 left-1/2 transform -translate-x-1/2 bg-neutral-800 text-white text-xs py-1 px-2 rounded shadow-lg whitespace-nowrap border border-neutral-700/50 backdrop-blur-sm"
                              >
                                {skill.name}
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

          {/* Achievement Section  */}
          <motion.div
            ref={ref}
            variants={itemVariants}
            className=" bg-gradient-to-br from-neutral-700/80 to-neutral-900 backdrop-blur-sm rounded-lg sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border border-neutral-800 relative overflow-hidden"
          >
            {/* Background Blur Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
                <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 p-2 rounded-lg shadow-inner">
                  <FaTrophy className="text-xl sm:text-2xl text-blue-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Achievements & Expertise
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {achievementDetails.map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    custom={index}
                    whileHover={{
                      y: -8,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                    className="bg-neutral-900 backdrop-blur-sm rounded-lg sm:rounded-xl overflow-hidden border border-neutral-900 hover:border-blue-500/30 transition-all duration-500 group relative"
                  >
                    {/* Image container */}
                    <div className="h-32 relative overflow-hidden">
                      <div className="absolute inset-0 z-10"></div>
                      <img 
                        src={achievement.image} 
                        alt={achievement.title}
                        className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-900 ease-out"
                      />
                      
                      {/* Animated stats */}
                      <div className="absolute top-0 right-0 p-3 z-20">
                        <div className="bg-neutral-900/80 backdrop-blur-sm rounded-lg p-2 border border-neutral-700/50 shadow-lg">
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
                          >
                            {isClient && inView && (
                              <CountUp
                                start={0}
                                end={achievement.count}
                                duration={2.5}
                                separator=","
                                decimals={achievement.count % 1 !== 0 ? 1 : 0}
                                decimal="."
                                suffix="+"
                                enableScrollSpy
                              />
                            )}
                          </motion.div>
                          <p className="text-xs text-neutral-300 font-medium mt-1 text-center">
                            {achievement.metric || "Projects"}
                          </p>
                        </div>
                      </div>
                      
                      {/* Icon Overlay */}
                      <div className="absolute bottom-0 left-0 p-3 z-20">
                        <div className="bg-neutral-900/80 backdrop-blur-sm p-2 rounded-lg border border-neutral-700/50 shadow-lg">
                          {getAchievementIcon(achievement.title)}
                        </div>
                      </div>
                    </div>
                    
                    {/* Card content */}
                    <div className="p-4 sm:p-5">
                      <h4 className="text-base sm:text-lg font-semibold mb-3 text-blue-400">
                        {achievement.title}
                      </h4>
                      
                      <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                        {achievement.description.map((detail, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start"
                          >
                            <span className="text-white-400 mr-2 flex-shrink-0 mt-0.5">•</span>
                            <span>{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;